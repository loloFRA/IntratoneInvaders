'use strict';const _0x57f4ee=_0x1673;(function(_0x24c762,_0x1a22ca){const _0x46afb2=_0x1673,_0x5e9586=_0x24c762();while(!![]){try{const _0x1de86e=-parseInt(_0x46afb2(0x1cb))/0x1+parseInt(_0x46afb2(0x1af))/0x2+parseInt(_0x46afb2(0x1b7))/0x3*(parseInt(_0x46afb2(0x1c2))/0x4)+parseInt(_0x46afb2(0x1a6))/0x5+parseInt(_0x46afb2(0x195))/0x6+-parseInt(_0x46afb2(0x1a0))/0x7+-parseInt(_0x46afb2(0x1d3))/0x8*(parseInt(_0x46afb2(0x18c))/0x9);if(_0x1de86e===_0x1a22ca)break;else _0x5e9586['push'](_0x5e9586['shift']());}catch(_0x5bcad4){_0x5e9586['push'](_0x5e9586['shift']());}}}(_0x344b,0xca521));function _0x1673(_0x304b1f,_0x5afbee){const _0x344bcf=_0x344b();return _0x1673=function(_0x1673df,_0x5c63bc){_0x1673df=_0x1673df-0x17a;let _0x2dada8=_0x344bcf[_0x1673df];return _0x2dada8;},_0x1673(_0x304b1f,_0x5afbee);}let c,ctx,W,H,lastTimeCalled,fps,stars=[],shootingStars=[],shoots=[],imagesBadges=[],badges=[],imagePlaques=[],plaques=[],booms=[],superstar,playerImg,imageLife,player,playerSize=0x32,mouse=0x0,score=0x0,life=0x5,divStart,intervalBadges,intervalShoots,intervalLife,play=!0x0,groundMargin=0x3c,nbrLoopBadges=0x2,posSrcPlaque=0x0,lifePlaque=0x2,checkVibrate=window[_0x57f4ee(0x1d8)]&&window[_0x57f4ee(0x1d8)]['vibrate'];const imagePlayerSrc=_0x57f4ee(0x1a7),imageLifeSrc='images/coeur.png',imgsSrc=[_0x57f4ee(0x196),_0x57f4ee(0x1b2),_0x57f4ee(0x1e8),_0x57f4ee(0x190),_0x57f4ee(0x1d0),_0x57f4ee(0x1e3),_0x57f4ee(0x180),_0x57f4ee(0x1b4),_0x57f4ee(0x1b6),_0x57f4ee(0x1c3)],imageSrcPlaques=[_0x57f4ee(0x1b3),_0x57f4ee(0x184)],random=(_0x24e7c3=0x1,_0xbeac2b=0x0)=>Math['random']()*(_0x24e7c3-_0xbeac2b)+_0xbeac2b,createImgsBadges=()=>{const _0x407827=_0x57f4ee;for(let _0x2cf0fc=0x0;_0x2cf0fc<imgsSrc['length'];_0x2cf0fc++){let _0xe2086f=new Image();_0xe2086f[_0x407827(0x193)]=imgsSrc[_0x2cf0fc],imagesBadges[_0x407827(0x1b9)](_0xe2086f);}},createImgsPlaques=()=>{const _0x518073=_0x57f4ee;for(let _0x1f060b=0x0;_0x1f060b<imageSrcPlaques[_0x518073(0x1de)];_0x1f060b++){let _0x1cfe5a=new Image();_0x1cfe5a['src']=imageSrcPlaques[_0x1f060b],imagePlaques['push'](_0x1cfe5a);}},createStars=()=>{const _0x48e5fb=_0x57f4ee;let _0x3a1ebb=0x96;for(let _0xe3d0df=0x0;_0xe3d0df<_0x3a1ebb;_0xe3d0df++){let _0xa68524=random(W),_0x31cb92=random(H),_0x853bc=random(1.1,0.3);stars[_0x48e5fb(0x1b9)](new Star(_0xa68524,_0x31cb92,_0x853bc));}},createSuperStar=()=>{superstar=new SuperStar(random(W),random(H,H/0x4),0x1);let _0x439607=random(0x2710,0x7d0);setTimeout(createSuperStar,_0x439607);},poolShoots=()=>{const _0x1df683=_0x57f4ee;for(let _0x364afd=0x0;_0x364afd<H;_0x364afd+=0xa)shoots[_0x1df683(0x1b9)](new Shoot(0x0,0x0,0x2));},createShoot=()=>{const _0x55e08c=_0x57f4ee;for(let _0x5b7f9b=0x0;_0x5b7f9b<shoots[_0x55e08c(0x1de)];_0x5b7f9b++)if(!0x1==shoots[_0x5b7f9b]['d']){shoots[_0x5b7f9b]['d']=!0x0,shoots[_0x5b7f9b]['x']=player['x'],shoots[_0x5b7f9b]['y']=player['y'];break;}},poolBadges=()=>{const _0x4be0f2=_0x57f4ee;for(let _0x42bed2=0x0;_0x42bed2<0x1e;_0x42bed2++){let _0x116ae7=0x28,_0x2a27fe=random(0x5,0.7),_0xcc750a=imagesBadges[~~random(imagesBadges[_0x4be0f2(0x1de)])];badges['push'](new Badge(0x0,0x0,_0x116ae7,_0x116ae7,_0x2a27fe,_0xcc750a,'badge',!0x1));}let _0x434252=0x28,_0x876ebe=random(0x5,1.5);badges[_0x4be0f2(0x1b9)](new Badge(0x0,0x0,_0x434252,_0x434252,_0x876ebe,imageLife,'life',!0x1));},createBadges=()=>{const _0x1b3273=_0x57f4ee;for(let _0x5f3e02=0x0;_0x5f3e02<nbrLoopBadges;_0x5f3e02++)for(let _0x346857=0x0;_0x346857<badges[_0x1b3273(0x1de)];_0x346857++)if(!0x1==badges[_0x346857]['d']&&'badge'==badges[_0x346857]['type']){badges[_0x346857]['d']=!0x0,badges[_0x346857]['x']=random(W-badges[_0x346857]['r'],badges[_0x346857]['r']/0x2),badges[_0x346857]['y']=random(-0x96,-0x64);break;}},createLife=()=>{const _0x1a126b=_0x57f4ee;for(let _0x1b95c8=0x0;_0x1b95c8<badges[_0x1a126b(0x1de)];_0x1b95c8++)if(!0x1==badges[_0x1b95c8]['d']&&_0x1a126b(0x1e9)==badges[_0x1b95c8][_0x1a126b(0x199)]){badges[_0x1b95c8]['d'],badges[_0x1b95c8]['x']=random(W-badges[_0x1b95c8]['r'],badges[_0x1b95c8]['r']/0x2),badges[_0x1b95c8]['y']=random(-0x96,-0x64);break;}let _0x2e66a7=random(0x4e20,0x3a98);setTimeout(createLife,_0x2e66a7);},createPlaque=(_0x6b2bfd,_0x5c6ba5)=>{const _0x157c73=_0x57f4ee;let _0x16c338=0x28,_0x18279b=0x64,_0x32ccea=~~random(W-_0x16c338,_0x16c338/0x2),_0x10d723=~~random(-0x96,-0x64),_0x5423f4=0x2,_0xce1f6f=imagePlaques[_0x6b2bfd];plaques[_0x157c73(0x1b9)](new Plaque(_0x32ccea,_0x10d723,_0x16c338,_0x18279b,_0x5423f4,_0xce1f6f,_0x5c6ba5));},createBooms=(_0x734b2c,_0x192d74,_0x2ef4be,_0xed40a0)=>{const _0x47c25c=_0x57f4ee;for(let _0x2b9a8f=0x0;_0x2b9a8f<0x2*Math['PI'];_0x2b9a8f+=0.75)booms[_0x47c25c(0x1b9)](new Boom(_0x734b2c,_0x192d74,_0x2ef4be,_0x2b9a8f,_0xed40a0));},eventsPlayer=()=>{const _0x483580=_0x57f4ee;c['addEventListener'](_0x483580(0x1a1),function(_0x593e40){const _0x2c5c09=_0x483580;mouse=_0x593e40[_0x2c5c09(0x1d9)]+(W-innerWidth)/0x2;},!0x1),c[_0x483580(0x1f2)]('touchstart',function(_0x4d6ae1){const _0x5490fc=_0x483580;mouse=parseInt(_0x4d6ae1[_0x5490fc(0x198)][0x0][_0x5490fc(0x1d9)])+(W-innerWidth)/0x2;},!0x1),c[_0x483580(0x1f2)]('touchmove',function(_0x503265){const _0x48d215=_0x483580;mouse=parseInt(_0x503265[_0x48d215(0x198)][0x0][_0x48d215(0x1d9)])+(W-innerWidth)/0x2;},!0x1);},eventsRadioScores=()=>{const _0x2877a5=_0x57f4ee;let _0x4aa43b=document[_0x2877a5(0x192)](_0x2877a5(0x1eb));_0x4aa43b[_0x2877a5(0x194)](_0x38ef48=>{const _0x57b9a1=_0x2877a5;_0x38ef48['addEventListener'](_0x57b9a1(0x1d6),function(){const _0x2eef99=_0x57b9a1;this[_0x2eef99(0x1be)]&&(_0x2eef99(0x1b8)==this['id']&&getScoreDBbyname(),_0x2eef99(0x17c)==this['id']&&getScoreDBbyScore());});});},closePost=()=>{const _0x4d6cf4=_0x57f4ee;div_post_score[_0x4d6cf4(0x1a8)][_0x4d6cf4(0x19d)]=_0x4d6cf4(0x1f1),div_post_score[_0x4d6cf4(0x1a8)][_0x4d6cf4(0x19b)]='0',divStart[_0x4d6cf4(0x1a8)][_0x4d6cf4(0x19d)]='0%',divStart[_0x4d6cf4(0x1a8)][_0x4d6cf4(0x19b)]='1';},closeScore=()=>{const _0x1443d1=_0x57f4ee;div_score_infos[_0x1443d1(0x1a8)][_0x1443d1(0x19d)]=_0x1443d1(0x17b),div_score_infos['style'][_0x1443d1(0x19b)]='0',divStart[_0x1443d1(0x1a8)][_0x1443d1(0x19d)]='0%',divStart['style'][_0x1443d1(0x19b)]='1';},openScore=()=>{const _0x594f2f=_0x57f4ee;getScoreDBbyScore(),div_score_infos[_0x594f2f(0x1a8)][_0x594f2f(0x19d)]='0%',div_score_infos['style'][_0x594f2f(0x19b)]='1',divStart[_0x594f2f(0x1a8)]['top']='200%',divStart['style'][_0x594f2f(0x19b)]='0';},postScore=()=>{const _0x465d5a=_0x57f4ee;let _0xe51603=document[_0x465d5a(0x1f3)]('nom_post')['value'];if(''!=_0xe51603){let _0x7b6558=firebase[_0x465d5a(0x1c5)]();_0x7b6558['collection']('scores')[_0x465d5a(0x1a4)]({'nom':_0xe51603[_0x465d5a(0x1c0)](),'score':score,'timestamp':firebase['firestore'][_0x465d5a(0x1b1)][_0x465d5a(0x1ed)]()})[_0x465d5a(0x1c1)](_0x3cd780=>{}),closePost();}},getScoreDBbyScore=()=>{const _0x1bd91c=_0x57f4ee;cont_score[_0x1bd91c(0x19a)]='';let _0x19a4bb=0x1;cont_score[_0x1bd91c(0x19a)]+=_0x1bd91c(0x1cd);let _0x2e558d=firebase['firestore']();_0x2e558d[_0x1bd91c(0x1ae)]('scores')[_0x1bd91c(0x1bb)](_0x1bd91c(0x17f),_0x1bd91c(0x19c))[_0x1bd91c(0x1bc)](0x64)['get']()[_0x1bd91c(0x1a5)](_0x14da4a=>{const _0x28b521=_0x1bd91c;let _0x2f27d6=0x1;_0x14da4a[_0x28b521(0x194)](_0x3b5d39=>{setTimeout(()=>{const _0x4f61f3=_0x1673;cont_score[_0x4f61f3(0x19a)]+=_0x4f61f3(0x1df)+_0x2f27d6+'</div><div\x20class=\x22r_score_name\x22>'+_0x3b5d39[_0x4f61f3(0x1b0)]()[_0x4f61f3(0x1ad)][_0x4f61f3(0x1c4)](0x0)[_0x4f61f3(0x1ee)]()+_0x3b5d39[_0x4f61f3(0x1b0)]()[_0x4f61f3(0x1ad)][_0x4f61f3(0x1e5)](0x1)+'</div><div\x20class=\x22r_score_score\x22>'+_0x3b5d39[_0x4f61f3(0x1b0)]()[_0x4f61f3(0x17f)]+_0x4f61f3(0x18b),_0x2f27d6++;},0x14*_0x19a4bb),_0x19a4bb++;})[_0x28b521(0x1c1)](_0x2e0e5b=>{});});},getScoreDBbyname=()=>{const _0x5018e3=_0x57f4ee;cont_score[_0x5018e3(0x19a)]='';let _0x391c42=0x1;cont_score[_0x5018e3(0x19a)]+='<div\x20class=\x22r_score\x22>\x20<div\x20class=\x22r_score_pos\x22>N°</div><div\x20class=\x22r_score_name\x22>Nom</div><div\x20class=\x22r_score_score\x22>Score</div></div>';let _0x46f379=firebase[_0x5018e3(0x1c5)]();_0x46f379[_0x5018e3(0x1ae)](_0x5018e3(0x1ea))[_0x5018e3(0x1bb)](_0x5018e3(0x1ad))[_0x5018e3(0x1bc)](0x64)[_0x5018e3(0x188)]()[_0x5018e3(0x1a5)](_0x25a3f4=>{const _0x4694f1=_0x5018e3;let _0x1ab56d=0x1;_0x25a3f4[_0x4694f1(0x194)](_0x4db9bf=>{setTimeout(()=>{const _0x39baf5=_0x1673;cont_score[_0x39baf5(0x19a)]+=_0x39baf5(0x1df)+_0x1ab56d+'</div><div\x20class=\x22r_score_name\x22>'+_0x4db9bf[_0x39baf5(0x1b0)]()['nom'][_0x39baf5(0x1c4)](0x0)[_0x39baf5(0x1ee)]()+_0x4db9bf['data']()[_0x39baf5(0x1ad)][_0x39baf5(0x1e5)](0x1)+'</div><div\x20class=\x22r_score_score\x22>'+_0x4db9bf['data']()['score']+_0x39baf5(0x18b),_0x1ab56d++;},0x14*_0x391c42),_0x391c42++;})[_0x4694f1(0x1c1)](_0x20bb41=>{});});},newConnexion=()=>{const _0x314f70=_0x57f4ee;var _0x2f870a,_0x17446a;firebase[_0x314f70(0x1c5)]()['collection'](_0x314f70(0x197))[_0x314f70(0x1f0)]('U2h3zAvp79RPhCqnxrbF')[_0x314f70(0x182)]({'game':firebase[_0x314f70(0x1c5)][_0x314f70(0x1b1)][_0x314f70(0x18f)](0x1)})['catch'](_0xa0ec7d=>{});},startGame=()=>{const _0x418c71=_0x57f4ee;newConnexion(),divStart[_0x418c71(0x1a8)][_0x418c71(0x19d)]=_0x418c71(0x17b),divStart[_0x418c71(0x1a8)][_0x418c71(0x19b)]='0',play=!0x0,plaques=[],booms=[],score=0x0,life=0x5,lifePlaque=0x2,nbrLoopBadges=0x2,intervalBadges=setInterval(createBadges,0x5dc),intervalShoots=setInterval(createShoot,0xfa),intervalLife=setInterval(createLife,0x61a8),requestAnimationFrame(animate);},setDivStart=()=>{const _0x4863ee=_0x57f4ee;(divStart=document[_0x4863ee(0x1f3)](_0x4863ee(0x1a2)))[_0x4863ee(0x1a8)][_0x4863ee(0x19f)]=W+'px',divStart[_0x4863ee(0x1a8)][_0x4863ee(0x1e4)]=H+'px',divStart[_0x4863ee(0x1a8)]['top']='0%';},initCanvas=()=>{const _0x4e47bd=_0x57f4ee;(c=document[_0x4e47bd(0x1f3)](_0x4e47bd(0x181)))['width']=W,c[_0x4e47bd(0x1e4)]=H,ctx=c[_0x4e47bd(0x1ef)]('2d');},initFirebase=()=>{const _0x425d60=_0x57f4ee;let _0x59950c={'apiKey':_0x425d60(0x17a),'authDomain':_0x425d60(0x1c7),'databaseURL':_0x425d60(0x1bd),'projectId':_0x425d60(0x1cf),'storageBucket':'intratoneinvaders.appspot.com','messagingSenderId':_0x425d60(0x1ec),'appId':_0x425d60(0x19e),'measurementId':_0x425d60(0x1e7)};firebase[_0x425d60(0x1e0)](_0x59950c);},init=()=>{const _0x532da6=_0x57f4ee;fps=document[_0x532da6(0x1f3)](_0x532da6(0x186)),W=window[_0x532da6(0x1c8)]<0x1f4?window[_0x532da6(0x1c8)]:0x1f4,H=window[_0x532da6(0x189)],stars['forEach'](_0x2239c9=>_0x2239c9[_0x532da6(0x182)]()),(playerImg=new Image())[_0x532da6(0x193)]=_0x532da6(0x1a7),(imageLife=new Image())['src']=_0x532da6(0x1e1),mouse=W/0x2,initFirebase(),setDivStart(),initCanvas(),createImgsBadges(),createImgsPlaques(),createStars(),createSuperStar(),poolShoots(),poolBadges(),eventsPlayer(),eventsRadioScores(),player=new Player(W/0x2-playerSize/0x2,H-groundMargin-playerSize-0x5,playerSize);},stopGame=()=>{const _0x4880ee=_0x57f4ee;play=!0x1,plaques=[],booms=[],div_post_score[_0x4880ee(0x1a8)][_0x4880ee(0x19d)]='0%',div_post_score['style']['opacity']='1',title_game[_0x4880ee(0x19a)]=_0x4880ee(0x1da)+score+_0x4880ee(0x191),clearInterval(intervalBadges),clearInterval(intervalShoots),clearInterval(intervalLife),ctx[_0x4880ee(0x187)](0x0,0x0,W,H),stars['forEach'](_0x48c8ff=>_0x48c8ff[_0x4880ee(0x182)]()),displayScore();},collision=(_0x42a0b5,_0x4f2b47)=>_0x42a0b5['x']<_0x4f2b47['x']&&_0x42a0b5['x']+_0x42a0b5['r']>_0x4f2b47['x']&&_0x42a0b5['y']<_0x4f2b47['y']&&_0x42a0b5['y']+_0x42a0b5['h']>_0x4f2b47['y'],collisionPlayer=(_0x38a66a,_0x163b3f)=>_0x38a66a['x']-_0x38a66a['r']<_0x163b3f['x']&&_0x38a66a['x']+_0x38a66a['r']-_0x38a66a['r']/0x2>_0x163b3f['x']&&_0x38a66a['y']<_0x163b3f['y']&&_0x38a66a['y']+_0x38a66a['r']>_0x163b3f['y'],collisionPlaqueShoot=(_0x33be00,_0x4f3950)=>_0x33be00['x']<_0x4f3950['x']&&_0x33be00['x']+_0x33be00['w']>_0x4f3950['x']&&_0x33be00['y']<_0x4f3950['y']&&_0x33be00['y']+_0x33be00['h']>_0x4f3950['y']-_0x4f3950['r']/0x2,collisionPlaquePlayer=(_0xac5eb2,_0x515e76)=>_0xac5eb2['x']<_0x515e76['x']+_0x515e76['r']/0x2&&_0xac5eb2['x']+1.2*_0xac5eb2['w']>_0x515e76['x']+_0x515e76['r']/0x2&&_0xac5eb2['y']<_0x515e76['y']&&_0xac5eb2['y']+_0xac5eb2['h']>_0x515e76['y'],check=()=>{const _0x2b17b1=_0x57f4ee;for(let _0x292aa5=shoots['length']-0x1;_0x292aa5>=0x0;_0x292aa5--)if(shoots[_0x292aa5]['d']){if(shoots[_0x292aa5][_0x2b17b1(0x182)](),shoots[_0x292aa5]['y']<0x0){shoots[_0x292aa5]['d']=!0x1;break;}if(plaques[0x0]&&shoots[_0x292aa5]['d']&&collisionPlaqueShoot(plaques[0x0],shoots[_0x292aa5])){if(plaques[0x0][_0x2b17b1(0x1e9)]<=0x1){createBooms(plaques[0x0]['x']+plaques[0x0]['w']/0x2+random(plaques[0x0]['w']/0x2,-plaques[0x0]['w']/0x2),plaques[0x0]['y']+plaques[0x0]['h']/0x2+random(plaques[0x0]['h']/0x2,-plaques[0x0]['h']/0x2),0x4,_0x2b17b1(0x18d)),createBooms(plaques[0x0]['x']+plaques[0x0]['w']/0x2+random(plaques[0x0]['w']/0x2,-plaques[0x0]['w']/0x2),plaques[0x0]['y']+plaques[0x0]['h']/0x2+random(plaques[0x0]['h']/0x2,-plaques[0x0]['h']/0x2),0x4,_0x2b17b1(0x18d)),createBooms(plaques[0x0]['x']+plaques[0x0]['w']/0x2+random(plaques[0x0]['w']/0x2,-plaques[0x0]['w']/0x2),plaques[0x0]['y']+plaques[0x0]['h']/0x2+random(plaques[0x0]['h']/0x2,-plaques[0x0]['h']/0x2),0x4,_0x2b17b1(0x18d)),createBooms(plaques[0x0]['x']+plaques[0x0]['w']/0x2+random(plaques[0x0]['w']/0x2,-plaques[0x0]['w']/0x2),plaques[0x0]['y']+plaques[0x0]['h']/0x2+random(plaques[0x0]['h']/0x2,-plaques[0x0]['h']/0x2),0x4,_0x2b17b1(0x18d)),createBooms(plaques[0x0]['x']+plaques[0x0]['w']/0x2+random(plaques[0x0]['w']/0x2,-plaques[0x0]['w']/0x2),plaques[0x0]['y']+plaques[0x0]['h']/0x2+random(plaques[0x0]['h']/0x2,-plaques[0x0]['h']/0x2),0x4,_0x2b17b1(0x18d)),score+=0x1,plaques[_0x2b17b1(0x1cc)](0x0,0x1),shoots[_0x292aa5]['d']=!0x1;break;}score+=0x1,shoots[_0x292aa5]['d']=!0x1,plaques[0x0]['life']--;break;}for(let _0x23ce25=badges[_0x2b17b1(0x1de)]-0x1;_0x23ce25>=0x0;_0x23ce25--){if(badges[_0x23ce25]['d']&&shoots[_0x292aa5]['d']&&collision(badges[_0x23ce25],shoots[_0x292aa5])){if(_0x2b17b1(0x1e9)==badges[_0x23ce25][_0x2b17b1(0x199)]){createBooms(badges[_0x23ce25]['x']+badges[_0x23ce25]['r']/0x2,badges[_0x23ce25]['y']+badges[_0x23ce25]['r']/0x2,0x4,_0x2b17b1(0x18d)),badges[_0x23ce25]['d']=!0x1,shoots[_0x292aa5]['d']=!0x1,life++;break;}createBooms(badges[_0x23ce25]['x']+badges[_0x23ce25]['r']/0x2,badges[_0x23ce25]['y']+badges[_0x23ce25]['r']/0x2,0x4,'white'),badges[_0x23ce25]['d']=!0x1,shoots[_0x292aa5]['d']=!0x1,(score+=0x1)%0x1e==0x0&&0x0!=score&&(createPlaque(posSrcPlaque,lifePlaque),posSrcPlaque++,lifePlaque++,posSrcPlaque>=imagePlaques['length']&&(posSrcPlaque=0x0)),score%0x64==0x0&&0x0!=score&&nbrLoopBadges++;break;}if(badges[_0x23ce25]['d']&&collisionPlayer(player,badges[_0x23ce25])){if(_0x2b17b1(0x1e9)==badges[_0x23ce25]['type']){createBooms(badges[_0x23ce25]['x']+badges[_0x23ce25]['r']/0x2,badges[_0x23ce25]['y']+badges[_0x23ce25]['r']/0x2,0x4,_0x2b17b1(0x18d)),badges[_0x23ce25]['d']=!0x1,life++;break;}createBooms(badges[_0x23ce25]['x']+badges[_0x23ce25]['r']/0x2,badges[_0x23ce25]['y']+badges[_0x23ce25]['r']/0x2,0x4,_0x2b17b1(0x1d5)),badges[_0x23ce25]['d']=!0x1,life>0x1?(life--,checkVibrate&&navigator[_0x2b17b1(0x1ca)](0xc8)):(stopGame(),life--,checkVibrate&&navigator[_0x2b17b1(0x1ca)](0xc8));break;}}}},checkPlaque=()=>{const _0x4ff0fa=_0x57f4ee;for(let _0x4cc71f=0x0;_0x4cc71f<plaques[_0x4ff0fa(0x1de)];_0x4cc71f++)if(collisionPlaquePlayer(plaques[_0x4cc71f],player)||plaques[_0x4cc71f]['y']+plaques[_0x4cc71f]['h']>=H-groundMargin){life>0x1?(createBooms(plaques[_0x4cc71f]['x']+plaques[_0x4cc71f]['w']/0x2+random(plaques[_0x4cc71f]['w']/0x2,-plaques[_0x4cc71f]['w']/0x2),plaques[_0x4cc71f]['y']+plaques[_0x4cc71f]['h'],0x4,_0x4ff0fa(0x1d5)),createBooms(plaques[_0x4cc71f]['x']+plaques[_0x4cc71f]['w']/0x2+random(plaques[_0x4cc71f]['w']/0x2,-plaques[_0x4cc71f]['w']/0x2),plaques[_0x4cc71f]['y']+plaques[_0x4cc71f]['h'],0x4,_0x4ff0fa(0x1d5)),createBooms(plaques[_0x4cc71f]['x']+plaques[_0x4cc71f]['w']/0x2+random(plaques[_0x4cc71f]['w']/0x2,-plaques[_0x4cc71f]['w']/0x2),plaques[_0x4cc71f]['y']+plaques[_0x4cc71f]['h'],0x4,_0x4ff0fa(0x1d5)),life--,checkVibrate&&navigator[_0x4ff0fa(0x1ca)](0xc8)):(createBooms(plaques[_0x4cc71f]['x']+plaques[_0x4cc71f]['w']/0x2+random(plaques[_0x4cc71f]['w']/0x2,-plaques[_0x4cc71f]['w']/0x2),plaques[_0x4cc71f]['y']+plaques[_0x4cc71f]['h'],0x4,_0x4ff0fa(0x1d5)),createBooms(plaques[_0x4cc71f]['x']+plaques[_0x4cc71f]['w']/0x2+random(plaques[_0x4cc71f]['w']/0x2,-plaques[_0x4cc71f]['w']/0x2),plaques[_0x4cc71f]['y']+plaques[_0x4cc71f]['h'],0x4,_0x4ff0fa(0x1d5)),createBooms(plaques[_0x4cc71f]['x']+plaques[_0x4cc71f]['w']/0x2+random(plaques[_0x4cc71f]['w']/0x2,-plaques[_0x4cc71f]['w']/0x2),plaques[_0x4cc71f]['y']+plaques[_0x4cc71f]['h'],0x4,'red'),stopGame(),life--,checkVibrate&&navigator[_0x4ff0fa(0x1ca)](0xc8)),plaques=[];break;}},animBadges=()=>{const _0x420625=_0x57f4ee;for(let _0x177b59=badges[_0x420625(0x1de)]-0x1;_0x177b59>=0x0;_0x177b59--)badges[_0x177b59]['d']&&(badges[_0x177b59][_0x420625(0x182)](),badges[_0x177b59]['y']+badges[_0x177b59]['h']>=H-groundMargin&&(life>0x1?(createBooms(badges[_0x177b59]['x']+badges[_0x177b59]['r']/0x2,badges[_0x177b59]['y']+badges[_0x177b59]['r'],0x4,_0x420625(0x1d5)),life--,checkVibrate&&navigator[_0x420625(0x1ca)](0xc8)):(createBooms(badges[_0x177b59]['x']+badges[_0x177b59]['r']/0x2,badges[_0x177b59]['y']+badges[_0x177b59]['r'],0x4,_0x420625(0x1d5)),stopGame(),life--,checkVibrate&&navigator[_0x420625(0x1ca)](0xc8)),badges[_0x177b59]['d']=!0x1));},animBooms=()=>{const _0x2295a6=_0x57f4ee;for(let _0x130a9d=booms[_0x2295a6(0x1de)]-0x1;_0x130a9d>=0x0;_0x130a9d--)booms[_0x130a9d]&&(booms[_0x130a9d][_0x2295a6(0x182)](),booms[_0x130a9d]['r']<0.4&&booms['splice'](_0x130a9d,0x1));},animPlaques=()=>{const _0x1fbdc2=_0x57f4ee;for(let _0x484023=plaques[_0x1fbdc2(0x1de)]-0x1;_0x484023>=0x0;_0x484023--)plaques[_0x484023]&&plaques[_0x484023]['update']();},drawControls=()=>{const _0x33f4f7=_0x57f4ee;ctx[_0x33f4f7(0x1c9)](),ctx['fillStyle']=_0x33f4f7(0x1d7),ctx['rect'](0x0,H-groundMargin,W,groundMargin),ctx[_0x33f4f7(0x1ac)]();},displayScore=()=>{const _0x36e314=_0x57f4ee;ctx['font']=_0x36e314(0x1dd),ctx['fillStyle']=_0x36e314(0x18d),ctx[_0x36e314(0x1c6)](_0x36e314(0x1b5)+score,0xa,0x1e);},displayLife=()=>{const _0x4a9a53=_0x57f4ee;ctx['beginPath'](),ctx['drawImage'](imageLife,W-0x32,0xa,0x28,0x28),ctx['fill'](),ctx['font']=_0x4a9a53(0x1ce),ctx[_0x4a9a53(0x1d2)]=_0x4a9a53(0x18d),ctx[_0x4a9a53(0x1c6)](life,W-ctx[_0x4a9a53(0x1dc)](life)[_0x4a9a53(0x19f)]-0x37,0x28);},calcFPS=()=>{const _0x49938f=_0x57f4ee;let _0x5a8a41=Date[_0x49938f(0x1a3)]()-lastTimeCalled;lastTimeCalled=Date[_0x49938f(0x1a3)](),fps['innerText']=_0x49938f(0x1d1)+Math['round'](0x3e8/_0x5a8a41);},animate=()=>{const _0x2df9ec=_0x57f4ee;play&&(ctx[_0x2df9ec(0x187)](0x0,0x0,W,H),stars[_0x2df9ec(0x194)](_0x1b156e=>_0x1b156e[_0x2df9ec(0x182)]()),superstar[_0x2df9ec(0x182)](),check(),checkPlaque(),animPlaques(),animBadges(),animBooms(),player[_0x2df9ec(0x182)](),drawControls(),displayScore(),displayLife(),requestAnimationFrame(animate));};onload=init;class Dot{constructor(_0x239cc1,_0x413247,_0x537bcb){this['x']=_0x239cc1,this['y']=_0x413247,this['r']=_0x537bcb;}}class Star extends Dot{constructor(_0x5577c3,_0x37bb22,_0x1a27bd){const _0x1df89b=_0x57f4ee;super(_0x5577c3,_0x37bb22,_0x1a27bd),this[_0x1df89b(0x1e2)]=this['r'],this[_0x1df89b(0x1a9)]=random(0.005,0.0001);}['draw'](){const _0x5b5e3d=_0x57f4ee;ctx[_0x5b5e3d(0x1c9)](),ctx[_0x5b5e3d(0x1d2)]=_0x5b5e3d(0x18d),ctx[_0x5b5e3d(0x17e)](this['x'],this['y'],this['r'],0x0,0x2*Math['PI']),ctx[_0x5b5e3d(0x1ac)]();}['update'](){const _0x300468=_0x57f4ee;this['r']-this[_0x300468(0x1a9)]>0.1&&this['r']-this['speed']<this[_0x300468(0x1e2)]?this['r']-=this['speed']:this['speed']*=-0x1,this['y']+=0.5,this['y']>H+this['r']&&(this['y']=-this['r']),this[_0x300468(0x1f4)]();}}class SuperStar extends Dot{constructor(_0x3facc3,_0x1ee2b9,_0x275afe){const _0x4ee38c=_0x57f4ee;super(_0x3facc3,_0x1ee2b9,_0x275afe),this[_0x4ee38c(0x1ab)]={'x':random(0x1,-0x1),'y':random(0x1,-0x1)},this[_0x4ee38c(0x1a9)]=0xa;}[_0x57f4ee(0x1f4)](){const _0x162bdc=_0x57f4ee;ctx[_0x162bdc(0x1c9)](),ctx[_0x162bdc(0x1d2)]=_0x162bdc(0x18d),ctx[_0x162bdc(0x17e)](this['x'],this['y'],this['r'],0x0,0x2*Math['PI']),ctx['fill']();}[_0x57f4ee(0x182)](){const _0x110698=_0x57f4ee;this['x']+=this[_0x110698(0x1a9)]*this[_0x110698(0x1ab)]['x'],this['y']+=this[_0x110698(0x1a9)]*this['direction']['y'],this['draw']();}}class Player extends Dot{constructor(_0x15f0bb,_0x37f8c6,_0x43e155){super(_0x15f0bb,_0x37f8c6,_0x43e155);}[_0x57f4ee(0x1f4)](){const _0x22e39b=_0x57f4ee;ctx[_0x22e39b(0x1c9)](),ctx[_0x22e39b(0x1e6)](playerImg,this['x']-this['r']/0x2,this['y'],this['r'],this['r']);}[_0x57f4ee(0x182)](){const _0x1e4d0e=_0x57f4ee;this['x']=mouse||this['x'],this['x']<this['r']/0x2&&(this['x']=this['r']/0x2),this['x']>W-this['r']/0x2&&(this['x']=W-this['r']/0x2),this[_0x1e4d0e(0x1f4)]();}}function _0x344b(){const _0x680d9f=['arc','score','images/badges/badge_orange.png','canvas','update','sin','images/platine01.png','stroke','Fps','clearRect','get','innerHeight','rad','</div></div>','18171AQghJg','white','cpt','increment','images/badges/badge_jaune.png','</span>\x20','querySelectorAll','src','forEach','9012054hwomeT','images/badges/badge_bleu.png','cnxs','changedTouches','type','innerHTML','opacity','desc','top','1:243873077179:web:6b6f03cee2efa8c936169e','width','8628151NFuSuP','mousemove','div_start','now','add','then','4065395SxadWR','images/immeubles.png','style','speed','#8BFE0A','direction','fill','nom','collection','1339522AtJYoY','data','FieldValue','images/badges/badge_gris.png','images/platine00.png','images/badges/badge_rouge.png','SCORE\x20:\x20','images/badges/badge_vert.png','1156998BNqHBz','radio_nom','push','color','orderBy','limit','https://intratoneinvaders-default-rtdb.europe-west1.firebasedatabase.app','checked','img','toLowerCase','catch','4HdizEW','images/badges/badge_violet.png','charAt','firestore','fillText','intratoneinvaders.firebaseapp.com','innerWidth','beginPath','vibrate','925607BbCGzm','splice','<div\x20class=\x22r_score\x22>\x20<div\x20class=\x22r_score_pos\x22>N°</div><div\x20class=\x22r_score_name\x22>Nom</div><div\x20class=\x22r_score_score\x22>Score</div></div>','25px\x20Arial','intratoneinvaders','images/badges/badge_marron.png','fps:\x20','fillStyle','1520Xukbnp','speedR','red','change','rgba(20,20,50,1)','navigator','clientX','GAME\x20OVER<br><br><span\x20id=\x22span_score\x22>SCORE:\x20','black','measureText','15px\x20Arial','length','<div\x20class=\x22r_score\x22>\x20<div\x20class=\x22r_score_pos\x22>','initializeApp','images/coeur.png','rMax','images/badges/badge_noir.png','height','slice','drawImage','G-RBYK712KF0','images/badges/badge_ivoire.png','life','scores','input[type=\x22radio\x22]','243873077179','serverTimestamp','toUpperCase','getContext','doc','200%','addEventListener','getElementById','draw','AIzaSyBNh07QQK3E3CATQUiSG88nSgDFOA4n1CM','-200%','radio_score','stokestyle'];_0x344b=function(){return _0x680d9f;};return _0x344b();}class Shoot extends Dot{constructor(_0x21eeaa,_0x14921e,_0x5d43f6){super(_0x21eeaa,_0x14921e,_0x5d43f6),this['d']=!0x1;}['draw'](){const _0x29bcb8=_0x57f4ee;ctx[_0x29bcb8(0x1c9)](),ctx[_0x29bcb8(0x1d2)]=_0x29bcb8(0x18d),ctx['arc'](this['x'],this['y'],this['r'],0x0,0x2*Math['PI']),ctx[_0x29bcb8(0x1ac)]();}[_0x57f4ee(0x182)](){const _0x21573f=_0x57f4ee;this['d']&&(this['y']-=0x7,this[_0x21573f(0x1f4)]());}}class Badge extends Dot{constructor(_0x312773,_0x4642d0,_0x5ddc6b,_0x4e4e37,_0x2bf862,_0x45469f,_0x4985a7='badge',_0x20e550){const _0x8d6937=_0x57f4ee;super(_0x312773,_0x4642d0,_0x5ddc6b),this['h']=_0x4e4e37,this['speed']=_0x2bf862,this[_0x8d6937(0x1bf)]=_0x45469f,this[_0x8d6937(0x199)]=_0x4985a7,this['cpt']=0x0,this['d']=_0x20e550;}[_0x57f4ee(0x1f4)](){const _0x3d1ca6=_0x57f4ee;ctx[_0x3d1ca6(0x1c9)](),ctx[_0x3d1ca6(0x1e6)](this['img'],this['x'],this['y'],this['r'],this['h']);}[_0x57f4ee(0x182)](){const _0x2ea221=_0x57f4ee;_0x2ea221(0x1e9)==this[_0x2ea221(0x199)]&&this['d']?(this[_0x2ea221(0x18e)]++,this[_0x2ea221(0x18e)]>=0x5&&(this[_0x2ea221(0x18e)]=0x1),this['y']+=this['speed'],this['cpt']%0x4!=0x0&&this['draw']()):this['d']&&(this['y']+=this[_0x2ea221(0x1a9)],this['draw']());}}class Boom extends Dot{constructor(_0x1d0b68,_0x435e0b,_0x4b36e3,_0x4549ac,_0x30201e=_0x57f4ee(0x18d)){const _0x321901=_0x57f4ee;super(_0x1d0b68,_0x435e0b,_0x4b36e3),this['a']=_0x4549ac,this[_0x321901(0x1ba)]=_0x30201e,this[_0x321901(0x1a9)]=random(0x1,0.2),this[_0x321901(0x18a)]=random(0xa,0x2),this[_0x321901(0x1d4)]=random(0.2,0.15);}['draw'](){const _0x1a3041=_0x57f4ee;ctx[_0x1a3041(0x1c9)](),ctx[_0x1a3041(0x1d2)]=this[_0x1a3041(0x1ba)],ctx[_0x1a3041(0x17e)](this['x0'],this['y0'],this['r'],0x0,0x2*Math['PI']),ctx[_0x1a3041(0x1ac)]();}[_0x57f4ee(0x182)](){const _0x3f8cf1=_0x57f4ee;this['rad']+=this[_0x3f8cf1(0x1a9)],this['r']>0.2&&(this['r']-=this[_0x3f8cf1(0x1d4)]),this['x0']=this['x']+this[_0x3f8cf1(0x18a)]*Math['cos'](this['a']),this['y0']=this['y']+this['rad']*Math[_0x3f8cf1(0x183)](this['a']),this['draw']();}}class Plaque{constructor(_0x368e2e,_0x451537,_0x4fb445,_0x1d37af,_0x3c6ce9,_0x16ab36,_0x3cfabc=0x5){const _0x4fc1c5=_0x57f4ee;this['x']=_0x368e2e,this['y']=_0x451537,this['w']=_0x4fb445,this['h']=_0x1d37af,this[_0x4fc1c5(0x1bf)]=_0x16ab36,this[_0x4fc1c5(0x1a9)]=_0x3c6ce9,this[_0x4fc1c5(0x1e9)]=_0x3cfabc;}['draw'](){const _0x2bc5b2=_0x57f4ee;ctx[_0x2bc5b2(0x1c9)](),ctx[_0x2bc5b2(0x1e6)](this[_0x2bc5b2(0x1bf)],this['x'],this['y'],this['w'],this['h']),this[_0x2bc5b2(0x1e9)]>=0xa&&(this[_0x2bc5b2(0x1e9)]=0xa);let _0x1279ff=this['w']/0xa;for(let _0x3630a3=0x0;_0x3630a3<this[_0x2bc5b2(0x1e9)];_0x3630a3++){let _0xa6c2c0=this['y']+this['h'],_0x4841f9=this['x']+_0x3630a3*_0x1279ff;_0x3630a3>=0xa&&(_0xa6c2c0=this['y']+this['h']+_0x1279ff,_0x4841f9=this['x']+(_0x3630a3-0xa)*_0x1279ff),ctx[_0x2bc5b2(0x1c9)](),ctx['fillStyle']=_0x2bc5b2(0x1aa),ctx[_0x2bc5b2(0x17d)]=_0x2bc5b2(0x1db),ctx['rect'](_0x4841f9,_0xa6c2c0,_0x1279ff,_0x1279ff),ctx[_0x2bc5b2(0x1ac)](),ctx[_0x2bc5b2(0x185)]();}}[_0x57f4ee(0x182)](){const _0x22baf9=_0x57f4ee;this['y']+=this[_0x22baf9(0x1a9)],this[_0x22baf9(0x1f4)]();}}
