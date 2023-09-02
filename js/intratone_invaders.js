"use strict";
let c, ctx, W, H, lastTimeCalled, fps;
let stars = [], shootingStars = [],  shoots = [], imagesBadges = [], badges = [], imagePlaques = [], plaques = [],  booms = [] 
let superstar 
let playerImg, imageLife, player, playerSize = 50, mouse = 0
let score = 0, life = 5, divStart
let intervalBadges, intervalShoots, intervalLife
let play = true
let groundMargin = 60
let nbrLoopBadges =2, posSrcPlaque=0, lifePlaque=2

let checkVibrate = window.navigator && window.navigator.vibrate;

const imagePlayerSrc = "images/immeubles.png";

const imageLifeSrc = "images/coeur.png";

const imgsSrc = [
	"images/badges/badge_bleu.png", 
	"images/badges/badge_gris.png", 
	"images/badges/badge_ivoire.png", 
	"images/badges/badge_jaune.png", 
	"images/badges/badge_marron.png", 
	"images/badges/badge_noir.png", 
	"images/badges/badge_orange.png", 
	"images/badges/badge_rouge.png", 
	"images/badges/badge_vert.png", 
	"images/badges/badge_violet.png", 
]
const imageSrcPlaques = [
	"images/platine00.png",
	"images/platine01.png",   
]

const random = (max=1, min=0) => Math.random() * (max - min) + min;


// creation obj 
const createImgsBadges = () => {
	for(let i=0; i<imgsSrc.length; i++){
		let img = new Image()
		img.src = imgsSrc[i]
		imagesBadges.push(img)
	}
}

const createImgsPlaques= () => {
	for(let i=0; i<imageSrcPlaques.length; i++){
		let img = new Image()
		img.src = imageSrcPlaques[i]
		imagePlaques.push(img)
	}
}

const createStars = () => {
	let maxStars = 150
	for(let i=0; i<maxStars; i++){
		let x = random(W)
		let y = random(H)
		let r = random(1.1, 0.3)
		stars.push(new Star(x, y, r))
	}
}

const createSuperStar = () => {
	superstar = new SuperStar(random(W), random(H, H/4), 1)
	let time = random(10000, 2000)
	setTimeout(createSuperStar, time)
}

const poolShoots = () =>{
        for(let i=0 ;i<H;i+=10){
            shoots.push(new Shoot(0, 0, 2))
        }
}

const createShoot = () => {
        for(let i=0 ;i<shoots.length;i++){
           if(shoots[i].d == false){
               shoots[i].d = true
               shoots[i].x = player.x
		       shoots[i].y = player.y             
               break;
           }
        }
}

const createBadges = () => {
	for(let i=0; i<nbrLoopBadges; i++){
		let r = 30
		let x = ~~random(W-r, r/2)
		let y = -60
		let speed = ~~random(4,1) 
		let idx = ~~random(imagesBadges.length)
		let img = imagesBadges[idx]
		badges.push(new Badge(x, y, r, r*1.7, speed, img, "badge"))
	}
}

const createLife = () => {
	let r = 40
	let x = ~~random(W-r, r/2)
	let y = -60
	let speed = random(5,2) 
	badges.push(new Badge(x, y, r, r, speed, imageLife, "life"))
}

const createPlaque = (nbr, l) => {
	let w = 40
	let h = 100
	let x = ~~random(W-w, w/2)
	let y = ~~random(-150, -100)
	let speed = 2
	let img = imagePlaques[nbr]
	plaques.push(new Plaque(x, y, w, h, speed, img, l))
}

const createBooms = (x, y, r, color) => {
	for(let i=0;i<Math.PI*2;i+=0.75){
		booms.push(new Boom(x,y,r,i,color))
	}
}


// events 
const eventsPlayer = () => {
	c.addEventListener("mousemove", function(event){
		mouse = event.clientX + (W-innerWidth)/2;
	}, false);
	
	c.addEventListener("touchstart", function(event){
		var touch = event.changedTouches[0];
		var touchX = parseInt(touch.clientX) + (W-innerWidth)/2;
		mouse = touchX;
	}, false);
	
	c.addEventListener("touchmove", function(event){
		var touch = event.changedTouches[0];
		var touchX = parseInt(touch.clientX) + (W-innerWidth)/2;
		mouse = touchX;
	}, false);
}

const eventsRadioScores = () => {
    const radioButtons = document.querySelectorAll('input[type="radio"]');
    radioButtons.forEach(radioButton => {
	    radioButton.addEventListener('change', function() {
	        if (this.checked) {
	            if(this.id == "radio_nom")getScoreDBbyname()
	            if(this.id == "radio_score")getScoreDBbyScore()
	        }
	    });
    });
}

// commands scoreboard 
const closePost = () => {
    div_post_score.style.top= "300%"
    div_post_score.style.opacity= "0"
    divStart.style.top = "0%"
    divStart.style.opacity = "1"
}

const closeScore = () => {
    div_score_infos.style.top= "-300%"
    div_score_infos.style.opacity= "0"
    divStart.style.top = "0%"
    divStart.style.opacity = "1"
}

const openScore = () => {
    getScoreDBbyScore()
    div_score_infos.style.top= "0%"
    div_score_infos.style.opacity= "1"
    divStart.style.top = "300%"
    divStart.style.opacity = "0"
}

const postScore = () => {
    let name = document.getElementById("nom_post").value
    if(name!=''){	    
        const db = firebase.firestore();    
        db.collection("scores").add({
            nom: name.toLowerCase(),
            score: score,
            timestamp: firebase.firestore.FieldValue.serverTimestamp()
        }).catch((error) => {});
        closePost()
    }
    
}

const getScoreDBbyScore = () => {
    cont_score.innerHTML = ''
    let pos = 1
    cont_score.innerHTML += `<div class="r_score"> <div class="r_score_pos">N°</div><div class="r_score_name">Nom</div><div class="r_score_score">Score</div></div>`
    const db = firebase.firestore();
    db.collection("scores").orderBy("score", "desc").limit(100).get()
    .then((querySnapshot) => {
	    let setTVal = 1
        querySnapshot.forEach((doc) => {
		setTimeout(()=>{
           		 cont_score.innerHTML += `<div class="r_score"> <div class="r_score_pos">` + setTVal + `</div>` + `<div class="r_score_name">` + doc.data().nom.charAt(0).toUpperCase() + doc.data().nom.slice(1) + `</div>` + `<div class="r_score_score">` + doc.data().score + `</div></div>`
			 setTVal++
		},pos*20)
		pos++
        }).catch((error) => {});
    })
}
const getScoreDBbyname = () => {
    cont_score.innerHTML = ''
    let pos = 1
    cont_score.innerHTML += `<div class="r_score"> <div class="r_score_pos">N°</div><div class="r_score_name">Nom</div><div class="r_score_score">Score</div></div>`
    const db = firebase.firestore();
    db.collection("scores").orderBy('nom').limit(100).get()
    .then((querySnapshot) => {
	    let setTVal = 1
        querySnapshot.forEach((doc) => {
		setTimeout(()=>{
        		cont_score.innerHTML += `<div class="r_score"> <div class="r_score_pos">` + setTVal + `</div>` + `<div class="r_score_name">` + doc.data().nom.charAt(0).toUpperCase() + doc.data().nom.slice(1) + `</div>` + `<div class="r_score_score">` + doc.data().score + `</div></div>`
                	setTVal++
		},pos*20) 
		pos++
        }).catch((error) => {});
    })
}
// init settings

const newConnexion = () => {
    	var db = firebase.firestore();
    	var docRef = db.collection("cnxs").doc("U2h3zAvp79RPhCqnxrbF");  
        docRef.update({
            game: firebase.firestore.FieldValue.increment(1)
        }).catch((error) => {});
}

const startGame = () =>  {
	newConnexion()
   	divStart.style.top = "-300%"
	divStart.style.opacity = "0"
    	play = true
	shoots = []
	badges = []
	plaques = []
	booms = [] 
	score = 0
	life = 5
	lifePlaque = 2
	nbrLoopBadges = 2
    	intervalBadges = setInterval(createBadges,1500)
	intervalShoots = setInterval(createShoot, 250)
	intervalLife = setInterval(createLife, 25000)
	requestAnimationFrame(animate); 
}

const setDivStart = () =>{
    divStart = document.getElementById("div_start");
    divStart.style.width = W + "px"
    divStart.style.height = H + "px"
    divStart.style.top = "0%"
}

const initCanvas = () => {
	c = document.getElementById("canvas");
	c.width = W;
	c.height = H;
	ctx = c.getContext("2d")
}
const initFirebase = () => {
	const firebaseConfig = {
	        apiKey: "AIzaSyBNh07QQK3E3CATQUiSG88nSgDFOA4n1CM",
	        authDomain: "intratoneinvaders.firebaseapp.com",
	        databaseURL: "https://intratoneinvaders-default-rtdb.europe-west1.firebasedatabase.app",
	        projectId: "intratoneinvaders",
	        storageBucket: "intratoneinvaders.appspot.com",
	        messagingSenderId: "243873077179",
	        appId: "1:243873077179:web:6b6f03cee2efa8c936169e",
	        measurementId: "G-RBYK712KF0"
	};
    	firebase.initializeApp(firebaseConfig);
}
const init = () => {
	lastTimeCalled = Date.now();
	fps = document.getElementById("Fps");
	W = window.innerWidth <500 ? window.innerWidth : 500
	H = window.innerHeight;	
	initFirebase()
	setDivStart()
	initCanvas()
	createImgsBadges()
	createImgsPlaques()
	createStars()
	createSuperStar()
	poolShoots()
	stars.forEach(x => x.update())
	playerImg = new Image();
	playerImg.src = imagePlayerSrc;
	imageLife = new Image();
	imageLife.src = imageLifeSrc;
	eventsPlayer()
	eventsRadioScores()
	mouse = W/2 
	player = new Player(W/2-playerSize/2, H-groundMargin-playerSize-5, playerSize)
}


const stopGame = () => {	 
	play = false
	shoots = []
	badges = []
	plaques = []
	booms = [] 
	div_post_score.style.top = "0%"
	div_post_score.style.opacity = "1"
    	title_game.innerHTML = `GAME OVER<br><br><span id="span_score">SCORE: ` +  score + `</span> `
	clearInterval(intervalBadges);
	clearInterval(intervalShoots);
	clearInterval(intervalLife);
	ctx.clearRect(0, 0, W, H);
	stars.forEach(x => x.update())
	displayScore()
}

// check collision
const collision = (a, b) => {
	return a.x < b.x  &&
		 a.x + a.r > b.x &&
		 a.y < b.y  &&
		 a.y + a.h > b.y;
}

const collisionPlayer = (a, b) => {
	return a.x - a.r < b.x  &&
		 a.x + a.r - a.r/2> b.x &&
		 a.y  < b.y  &&
		 a.y + a.r > b.y;
}

const collisionPlaqueShoot = (a, b) => {
	return a.x  < b.x  &&
		 a.x + a.w > b.x &&
		 a.y  < b.y  &&
		 a.y + a.h > b.y-b.r/2;
}

const collisionPlaquePlayer = (a, b) => {
	return a.x  < b.x+b.r/2  &&
		 a.x + a.w*1.2 > b.x+b.r/2 &&
		 a.y  < b.y  &&
		 a.y + a.h > b.y;
}

const check = () => {
	// check badge / shoot
	for(let j = shoots.length-1; j >= 0; j--){
	   if(shoots[j].d){
		shoots[j].update();
		// check shoot / ground
		if(shoots[j].y < 0){
			shoots[j].d = false
			break;
		}
		// check plaque / shoot
			if(plaques[0] && shoots[j]){
				if( collisionPlaqueShoot(plaques[0], shoots[j])){
					if(plaques[0].life<=1){
						createBooms(plaques[0].x+plaques[0].w/2+random(plaques[0].w/2,-plaques[0].w/2), plaques[0].y+plaques[0].h/2+random(plaques[0].h/2,-plaques[0].h/2), 4, "white")
						createBooms(plaques[0].x+plaques[0].w/2+random(plaques[0].w/2,-plaques[0].w/2), plaques[0].y+plaques[0].h/2+random(plaques[0].h/2,-plaques[0].h/2), 4, "white")
						createBooms(plaques[0].x+plaques[0].w/2+random(plaques[0].w/2,-plaques[0].w/2), plaques[0].y+plaques[0].h/2+random(plaques[0].h/2,-plaques[0].h/2), 4, "white")
						createBooms(plaques[0].x+plaques[0].w/2+random(plaques[0].w/2,-plaques[0].w/2), plaques[0].y+plaques[0].h/2+random(plaques[0].h/2,-plaques[0].h/2), 4, "white")
						createBooms(plaques[0].x+plaques[0].w/2+random(plaques[0].w/2,-plaques[0].w/2), plaques[0].y+plaques[0].h/2+random(plaques[0].h/2,-plaques[0].h/2), 4, "white")
						
						score+=1
						plaques.splice(0, 1);   
						shoots[j].d = false
						break;
						
					}
					else{
						score+=1
						shoots[j].d = false
						plaques[0].life--
						break;
					}
					
				}
			}
		for(let i = badges.length-1; i >= 0; i--){
			if(badges[i] && shoots[j]){
				if( collision(badges[i], shoots[j])){  
					if(badges[i].type=="life"){
						createBooms(badges[i].x+badges[i].r/2, badges[i].y+badges[i].r/2, 4, "white")
						badges.splice(i, 1);
						shoots[j].d = false
						life++
						break;
					} 
					else{
						createBooms(badges[i].x+badges[i].r/2, badges[i].y+badges[i].r/2, 4,"white")
						badges.splice(i, 1);
						shoots[j].d = false
						score+=1
						if(score%30==0&&score!=0){
		                            		createPlaque(posSrcPlaque, lifePlaque)
		                            		posSrcPlaque++
		                            		lifePlaque++
		                            		if(posSrcPlaque>=imagePlaques.length)posSrcPlaque=0                           
		                        	}
		                        	if(score%100==0&&score!=0){
			                                nbrLoopBadges++
		                            	}
						break;
					}				
				}
			}

			
			// check player / badge
			if(badges[i]){  
				if(collisionPlayer(player, badges[i])){
					if(badges[i].type=="life"){
						createBooms(badges[i].x+badges[i].r/2, badges[i].y+badges[i].r/2, 4, "white")
						badges.splice(i, 1);
						life++
						break;
					}
					else{
						createBooms(badges[i].x+badges[i].r/2, badges[i].y+badges[i].r/2, 4, "red")
						badges.splice(i, 1);
						if(life>1){
							life--
							if(checkVibrate )navigator.vibrate(200)
						}
						else{
							stopGame()
							life--
							if(checkVibrate )navigator.vibrate(200)
						}
						break;
					}				
				}
			}
		
		}
	   }
	}
}

const checkPlaque =() => {
	// check plaque / ground
	for(let i=0; i<plaques.length; i++){
		if(collisionPlaquePlayer(plaques[i], player)){	  
			if(life>1){
				createBooms(plaques[i].x+plaques[i].w/2+random(plaques[i].w/2,-plaques[i].w/2), plaques[i].y+plaques[i].h, 4, "red")
				createBooms(plaques[i].x+plaques[i].w/2+random(plaques[i].w/2,-plaques[i].w/2), plaques[i].y+plaques[i].h, 4, "red")
				createBooms(plaques[i].x+plaques[i].w/2+random(plaques[i].w/2,-plaques[i].w/2), plaques[i].y+plaques[i].h, 4, "red")
				life--
				if(checkVibrate )navigator.vibrate(200)
			}
			else{
				createBooms(plaques[i].x+plaques[i].w/2+random(plaques[i].w/2,-plaques[i].w/2), plaques[i].y+plaques[i].h, 4, "red")
				createBooms(plaques[i].x+plaques[i].w/2+random(plaques[i].w/2,-plaques[i].w/2), plaques[i].y+plaques[i].h, 4, "red")
				createBooms(plaques[i].x+plaques[i].w/2+random(plaques[i].w/2,-plaques[i].w/2), plaques[i].y+plaques[i].h, 4, "red")
				stopGame()
				life--
				if(checkVibrate )navigator.vibrate(200)
			
			}
			plaques = []
			break
		}
		else if(plaques[i].y+plaques[i].h >= H -groundMargin ){	  
			if(life>1){
				createBooms(plaques[i].x+plaques[i].w/2+random(plaques[i].w/2,-plaques[i].w/2), plaques[i].y+plaques[i].h, 4, "red")
				createBooms(plaques[i].x+plaques[i].w/2+random(plaques[i].w/2,-plaques[i].w/2), plaques[i].y+plaques[i].h, 4, "red")
				createBooms(plaques[i].x+plaques[i].w/2+random(plaques[i].w/2,-plaques[i].w/2), plaques[i].y+plaques[i].h, 4, "red")
				life--
				if(checkVibrate )navigator.vibrate(200)
			}
			else{
				createBooms(plaques[i].x+plaques[i].w/2+random(plaques[i].w/2,-plaques[i].w/2), plaques[i].y+plaques[i].h, 4, "red")
				createBooms(plaques[i].x+plaques[i].w/2+random(plaques[i].w/2,-plaques[i].w/2), plaques[i].y+plaques[i].h, 4, "red")
				createBooms(plaques[i].x+plaques[i].w/2+random(plaques[i].w/2,-plaques[i].w/2), plaques[i].y+plaques[i].h, 4, "red")
				stopGame()
				life--
				if(checkVibrate )navigator.vibrate(200)
				
			} 
			plaques = []
			break
		}		
	}
}

// animation objs

const animBadges = () => {
	for(let i = badges.length-1; i >= 0; i--){
		if(badges[i]){
			badges[i].update();
			if(badges[i].y+badges[i].h >= H -groundMargin ){				
				if(life>1){
					createBooms(badges[i].x+badges[i].r/2, badges[i].y+badges[i].r, 4, "red")
					life--
					if(checkVibrate )navigator.vibrate(200)
				}
				else{
					createBooms(badges[i].x+badges[i].r/2, badges[i].y+badges[i].r, 4, "red")
					stopGame()
					life--
					if(checkVibrate )navigator.vibrate(200)
				}
				badges.splice(i, 1)
			}
		}
	}
}

const animBooms = () => {
	for(let i = booms.length-1; i >= 0; i--){
		if(booms[i]){
			booms[i].update();
			if(booms[i].r < 0.4 )booms.splice(i, 1)
		}
	}
}

const animPlaques = () => {
	for(let i = plaques.length-1; i >= 0; i--){
		if(plaques[i])plaques[i].update();
	}
}


const drawControls = () => {
	ctx.beginPath();
	ctx.fillStyle = "rgba(20,20,50,1)"
	ctx.rect(0, H-groundMargin, W, groundMargin);
	ctx.fill();
}

const displayScore = () => {
	ctx.font = "15px Arial";
	ctx.fillStyle = "white"
	ctx.fillText("SCORE : " + score, 10, 30);
}
const displayLife = () => {
	ctx.beginPath()
	ctx.drawImage(imageLife, W-50, 10, 40, 40);
	ctx.fill()
	ctx.font = "25px Arial";
	ctx.fillStyle = "white"
	ctx.fillText( life , W-ctx.measureText(life).width - 55, 40);
}

const calcFPS = () => {
	let timeDiff = Date.now() - lastTimeCalled;
	lastTimeCalled = Date.now();
	fps.innerText = "fps: " + Math.round(1000/timeDiff);
};
const animate = () => {
	//calcFPS();
	//infos_prod.innerHTML = 
		if(play){
		ctx.clearRect(0, 0, W, H);
		stars.forEach(x => x.update())
		superstar.update()
		
		check()
		checkPlaque()
		animPlaques()
		animBadges()
		animBooms() 
		
		player.update()
		drawControls()
		displayScore()
	        displayLife()
		requestAnimationFrame(animate); 
	}
};

// loading page
onload = init


// class objs
class Dot {
	constructor(x, y, r){	
		this.x = x
		this.y = y
		this.r = r	  
	}
}

class Star extends Dot{
	constructor(x,y,r) {
		super(x,y,r);
		this.rMax = this.r
		this.speed = random(0.005, 0.0001)
	}
	draw() {
		ctx.beginPath()
		ctx.fillStyle = 'white'
		ctx.arc(this.x, this.y, this.r, 0, 2 * Math.PI)
		ctx.fill()
	}
	update() {		
		if(this.r-this.speed>0.1&&this.r-this.speed<this.rMax)this.r -= this.speed
		else {
			this.speed *=-1
		}
		this.y+=0.5
		if(this.y>H+this.r)this.y=-this.r
		this.draw()
	}
}

class SuperStar extends Dot{
	constructor(x,y,r) {
		super(x,y,r);
		this.direction = {x:random(1,-1), y:random(1,-1)}
		this.speed = 10
	}
	draw() {
		ctx.beginPath()
		ctx.fillStyle = 'white'
		ctx.arc(this.x, this.y, this.r, 0, 2 * Math.PI)	 
		ctx.fill()

	}
	update() {		
		this.x += this.speed * this.direction.x
		this.y += this.speed * this.direction.y
		this.draw()
	}
}

class Player extends Dot{
	constructor(x,y,r) {
		super(x,y,r);
	}
	draw() {
		ctx.beginPath()
		ctx.drawImage(playerImg, this.x-this.r/2, this.y, this.r, this.r);
	}
	update() {		
		this.x = mouse || this.x
		if(this.x<this.r/2)this.x = this.r/2
		if(this.x>W-this.r/2)this.x = W - this.r/2
		this.draw()
	}
}

class Shoot extends Dot{
	constructor(x,y,r) {
		super(x,y,r);
        this.d = false
	}
	draw() {
		ctx.beginPath()
		ctx.fillStyle = 'white'
		ctx.arc(this.x, this.y, this.r, 0, 2 * Math.PI)	 
		ctx.fill()
	}
	update() {	
        if(this.d){
            this.y -= 7
		    this.draw()
        }	
	}
}

class Badge extends Dot{
	constructor(x,y,r, h, speed, img, type="badge", colorBoom) {
		super(x,y,r);
		this.h = h
		this.speed = speed
		this.img = img
		this.type = type
		this.cpt = 0
		this.colorBoom = colorBoom
	}
	draw() {
		ctx.beginPath()
		ctx.drawImage(this.img, this.x, this.y, this.r, this.h);
	}
	update() {	
		if(this.type=="life"){
			this.cpt++
			if(this.cpt>=5)this.cpt=1
			this.y += this.speed
			if(this.cpt%4!==0)this.draw()
		}
		else{
			this.y += this.speed
			this.draw()
		}		   
	}
}

class Boom extends Dot{
	constructor(x,y,r, a, color="white") {
		super(x,y,r);
		this.a = a
		this.color = color
		this.speed = random(1,0.2)  
		this.rad = random(10,2) 
		this.speedR = random(0.2,0.15)
	}
	draw() {
		ctx.beginPath()
		ctx.fillStyle = this.color
		ctx.arc(this.x0, this.y0, this.r, 0, 2 * Math.PI)	 
		ctx.fill()
	}
	update() {	
		this.rad+=this.speed
		if(this.r>0.2)this.r -= this.speedR
		this.x0 = this.x+this.rad * Math.cos(this.a)	
		this.y0 = this.y+this.rad * Math.sin(this.a)	
		this.draw()
	}
}

class Plaque {
	constructor(x, y, w, h, speed, img, life=5) {
		this.x = x
		this.y = y
		this.w = w
		this.h = h
		this.img = img
		this.speed = speed
		this.life = life
	}
	draw() {
		ctx.beginPath()
		ctx.drawImage(this.img, this.x, this.y, this.w, this.h);
        	if(this.life>=10)this.life=10
		let sizeLife = this.w/10
		for(let i=0; i<this.life; i++){
	            	let y = this.y + this.h
	            	let x = this.x + (i*sizeLife)
	            	if(i>=10){
		                y = this.y + this.h + sizeLife
		                x = this.x + (i-10)*sizeLife
	            	}
		        ctx.beginPath();
			ctx.fillStyle = "#8BFE0A"
			ctx.stokestyle = "black"
			ctx.rect(x, y, sizeLife, sizeLife);
			ctx.fill();
			ctx.stroke()
		}		
	}
	update() {	
		this.y += this.speed	
		this.draw()
	}
}
