'use strict';const _0x19248e=_0x53ca;(function(_0x2c498e,_0x4f0642){const _0x4c01c7=_0x53ca,_0x5ce455=_0x2c498e();while(!![]){try{const _0x508a32=-parseInt(_0x4c01c7(0x115))/0x1*(-parseInt(_0x4c01c7(0x10c))/0x2)+-parseInt(_0x4c01c7(0xfd))/0x3*(parseInt(_0x4c01c7(0xf7))/0x4)+-parseInt(_0x4c01c7(0x118))/0x5+parseInt(_0x4c01c7(0x106))/0x6+parseInt(_0x4c01c7(0x131))/0x7*(parseInt(_0x4c01c7(0x100))/0x8)+parseInt(_0x4c01c7(0xe5))/0x9*(-parseInt(_0x4c01c7(0xe3))/0xa)+parseInt(_0x4c01c7(0x139))/0xb*(parseInt(_0x4c01c7(0xe1))/0xc);if(_0x508a32===_0x4f0642)break;else _0x5ce455['push'](_0x5ce455['shift']());}catch(_0x299684){_0x5ce455['push'](_0x5ce455['shift']());}}}(_0x20f7,0xd0a93));function _0x53ca(_0x37907c,_0x4f2b5c){const _0x20f73d=_0x20f7();return _0x53ca=function(_0x53ca4c,_0x154f48){_0x53ca4c=_0x53ca4c-0xc5;let _0x4e1043=_0x20f73d[_0x53ca4c];return _0x4e1043;},_0x53ca(_0x37907c,_0x4f2b5c);}let c,ctx,W,H,lastTimeCalled,fps,stars=[],shootingStars=[],shoots=[],imagesBadges=[],badges=[],imagePlaques=[],plaques=[],booms=[],superstar,playerImg,imageLife,player,playerSize=0x32,mouse=0x0,score=0x0,life=0x5,divStart,intervalBadges,intervalShoots,intervalLife,play=!0x0,groundMargin=0x3c,nbrLoopBadges=0x2,posSrcPlaque=0x0,lifePlaque=0x2,checkVibrate=window[_0x19248e(0xdf)]&&window[_0x19248e(0xdf)]['vibrate'];const imagePlayerSrc=_0x19248e(0x143),imageLifeSrc=_0x19248e(0x13b),imgsSrc=[_0x19248e(0x124),'images/badges/badge_gris.png',_0x19248e(0x127),_0x19248e(0x104),_0x19248e(0x141),_0x19248e(0xf8),'images/badges/badge_orange.png','images/badges/badge_rouge.png',_0x19248e(0x102),_0x19248e(0xdb)],imageSrcPlaques=[_0x19248e(0xe9),_0x19248e(0x140)],random=(_0x3cbb74=0x1,_0xda168a=0x0)=>Math['random']()*(_0x3cbb74-_0xda168a)+_0xda168a,createImgsBadges=()=>{const _0xbe9dd2=_0x19248e;for(let _0x1b12b3=0x0;_0x1b12b3<imgsSrc[_0xbe9dd2(0xfc)];_0x1b12b3++){let _0x4eefaa=new Image();_0x4eefaa[_0xbe9dd2(0xfb)]=imgsSrc[_0x1b12b3],imagesBadges[_0xbe9dd2(0xe8)](_0x4eefaa);}},createImgsPlaques=()=>{const _0x2d1844=_0x19248e;for(let _0x3033c5=0x0;_0x3033c5<imageSrcPlaques[_0x2d1844(0xfc)];_0x3033c5++){let _0x2f23c9=new Image();_0x2f23c9[_0x2d1844(0xfb)]=imageSrcPlaques[_0x3033c5],imagePlaques['push'](_0x2f23c9);}},createStars=()=>{const _0x1eaaf7=_0x19248e;let _0x10c006=0x96;for(let _0x54a4ff=0x0;_0x54a4ff<_0x10c006;_0x54a4ff++){let _0x108581=random(W),_0x4ba816=random(H),_0x4dd9ca=random(1.1,0.3);stars[_0x1eaaf7(0xe8)](new Star(_0x108581,_0x4ba816,_0x4dd9ca));}},createSuperStar=()=>{superstar=new SuperStar(random(W),random(H,H/0x4),0x1);let _0x49afed=random(0x2710,0x7d0);setTimeout(createSuperStar,_0x49afed);},poolShoots=()=>{const _0x341716=_0x19248e;for(let _0x50143e=0x0;_0x50143e<H;_0x50143e+=0xa)shoots[_0x341716(0xe8)](new Shoot(0x0,0x0,0x2));},createShoot=()=>{for(let _0x231fa0=0x0;_0x231fa0<shoots['length'];_0x231fa0++)if(!0x1==shoots[_0x231fa0]['d']){shoots[_0x231fa0]['d']=!0x0,shoots[_0x231fa0]['x']=player['x'],shoots[_0x231fa0]['y']=player['y'];break;}},poolBadges=()=>{const _0x379f9f=_0x19248e;for(let _0x460d5a=0x0;_0x460d5a<0x1e;_0x460d5a++){let _0x15ae39=0x1e,_0x7dece=random(3.5,0x1),_0x2f5f89=imagesBadges[~~random(imagesBadges[_0x379f9f(0xfc)])];badges['push'](new Badge(0x0,0x0,_0x15ae39,1.7*_0x15ae39,_0x7dece,_0x2f5f89,'badge',!0x1));}let _0x2e4967=0x28,_0x541772=random(0x5,0x2);badges['push'](new Badge(0x0,0x0,_0x2e4967,_0x2e4967,_0x541772,imageLife,_0x379f9f(0x13a),!0x1));},shuffleArray=_0x342b5e=>{const _0x50b6f9=_0x19248e;for(let _0x71490a=_0x342b5e[_0x50b6f9(0xfc)]-0x1;_0x71490a>0x0;_0x71490a--){let _0x943b16=Math[_0x50b6f9(0xca)](Math[_0x50b6f9(0xe4)]()*(_0x71490a+0x1));[_0x342b5e[_0x71490a],_0x342b5e[_0x943b16]]=[_0x342b5e[_0x943b16],_0x342b5e[_0x71490a]];}},createBadges=()=>{const _0x490d93=_0x19248e;shuffleArray(badges);for(let _0x2872d0=0x0;_0x2872d0<nbrLoopBadges;_0x2872d0++)for(let _0x4de030=0x0;_0x4de030<badges[_0x490d93(0xfc)];_0x4de030++)if(!0x1==badges[_0x4de030]['d']&&_0x490d93(0xce)==badges[_0x4de030][_0x490d93(0xdc)]){badges[_0x4de030]['d']=!0x0,badges[_0x4de030]['x']=random(W-badges[_0x4de030]['r'],badges[_0x4de030]['r']/0x2),badges[_0x4de030]['y']=random(-0x96,-0x64);break;}},createLife=()=>{const _0x4855a5=_0x19248e;for(let _0x12dca5=0x0;_0x12dca5<badges[_0x4855a5(0xfc)];_0x12dca5++)if(!0x1==badges[_0x12dca5]['d']&&_0x4855a5(0x13a)==badges[_0x12dca5][_0x4855a5(0xdc)]){badges[_0x12dca5]['d']=!0x0,badges[_0x12dca5]['x']=random(W-badges[_0x12dca5]['r'],badges[_0x12dca5]['r']/0x2),badges[_0x12dca5]['y']=random(-0x96,-0x64);break;}},createPlaque=(_0x3de29a,_0x286cd4)=>{const _0x304c27=_0x19248e;let _0x5c8fe2=0x28,_0x5e03c6=0x64,_0x11e0b3=~~random(W-_0x5c8fe2,_0x5c8fe2/0x2),_0x35ef2a=~~random(-0x96,-0x64),_0x5068e9=0x2,_0x4cc0bd=imagePlaques[_0x3de29a];plaques[_0x304c27(0xe8)](new Plaque(_0x11e0b3,_0x35ef2a,_0x5c8fe2,_0x5e03c6,_0x5068e9,_0x4cc0bd,_0x286cd4));},createBooms=(_0x5f5676,_0x5dbfd6,_0x3aae8a,_0x446c4e)=>{for(let _0x3f56b0=0x0;_0x3f56b0<0x2*Math['PI'];_0x3f56b0+=0.75)booms['push'](new Boom(_0x5f5676,_0x5dbfd6,_0x3aae8a,_0x3f56b0,_0x446c4e));},eventsPlayer=()=>{const _0xd4937c=_0x19248e;c[_0xd4937c(0xe7)](_0xd4937c(0xde),function(_0x529b19){const _0x3247ef=_0xd4937c;mouse=_0x529b19[_0x3247ef(0x10d)]+(W-innerWidth)/0x2;},!0x1),c[_0xd4937c(0xe7)]('touchstart',function(_0x5ed647){const _0x4d3203=_0xd4937c;mouse=parseInt(_0x5ed647['changedTouches'][0x0][_0x4d3203(0x10d)])+(W-innerWidth)/0x2;},!0x1),c[_0xd4937c(0xe7)]('touchmove',function(_0x1203f0){const _0x497c9a=_0xd4937c;mouse=parseInt(_0x1203f0[_0x497c9a(0xf2)][0x0][_0x497c9a(0x10d)])+(W-innerWidth)/0x2;},!0x1);},eventsRadioScores=()=>{const _0x5c898c=_0x19248e;let _0x18ccc7=document[_0x5c898c(0xd0)](_0x5c898c(0xda));_0x18ccc7['forEach'](_0x4e0ad8=>{const _0x1eef3c=_0x5c898c;_0x4e0ad8['addEventListener'](_0x1eef3c(0x134),function(){const _0x44631a=_0x1eef3c;this[_0x44631a(0x114)]&&(_0x44631a(0x122)==this['id']&&getScoreDBbyname(),_0x44631a(0x107)==this['id']&&getScoreDBbyScore());});});},closePost=()=>{const _0x19b8d2=_0x19248e;div_post_score[_0x19b8d2(0x10f)][_0x19b8d2(0x103)]=_0x19b8d2(0x11b),div_post_score[_0x19b8d2(0x10f)][_0x19b8d2(0xf3)]='0',divStart[_0x19b8d2(0x10f)][_0x19b8d2(0x103)]='0%',divStart[_0x19b8d2(0x10f)][_0x19b8d2(0xf3)]='1';},closeScore=()=>{const _0xebfe36=_0x19248e;div_score_infos['style'][_0xebfe36(0x103)]=_0xebfe36(0xd4),div_score_infos['style'][_0xebfe36(0xf3)]='0',divStart['style'][_0xebfe36(0x103)]='0%',divStart[_0xebfe36(0x10f)][_0xebfe36(0xf3)]='1';},openScore=()=>{const _0x10667c=_0x19248e;getScoreDBbyScore(),div_score_infos[_0x10667c(0x10f)]['top']='0%',div_score_infos[_0x10667c(0x10f)]['opacity']='1',divStart['style']['top']=_0x10667c(0x11b),divStart[_0x10667c(0x10f)][_0x10667c(0xf3)]='0';},postScore=()=>{const _0x6a9881=_0x19248e;let _0x58f7d9=document[_0x6a9881(0x10a)](_0x6a9881(0xc9))[_0x6a9881(0xcc)];if(''!=_0x58f7d9){let _0x1732d9=firebase['firestore']();_0x1732d9[_0x6a9881(0x11a)](_0x6a9881(0xd2))[_0x6a9881(0x129)]({'nom':_0x58f7d9[_0x6a9881(0xc7)](),'score':score,'timestamp':firebase[_0x6a9881(0x116)][_0x6a9881(0xf1)][_0x6a9881(0xdd)]()})[_0x6a9881(0xc5)](_0x22a3d9=>{}),closePost();}},getScoreDBbyScore=()=>{const _0x9cb5b5=_0x19248e;cont_score['innerHTML']='';let _0x1a8452=0x1;cont_score[_0x9cb5b5(0xd8)]+=_0x9cb5b5(0x12d);let _0x198a96=firebase[_0x9cb5b5(0x116)]();_0x198a96[_0x9cb5b5(0x11a)](_0x9cb5b5(0xd2))[_0x9cb5b5(0x11c)](_0x9cb5b5(0x136),'desc')[_0x9cb5b5(0xd9)](0x64)[_0x9cb5b5(0xc6)]()[_0x9cb5b5(0xeb)](_0x193611=>{const _0x51dee9=_0x9cb5b5;let _0x3799c5=0x1;_0x193611[_0x51dee9(0x112)](_0x5cf063=>{setTimeout(()=>{const _0x5f37c5=_0x53ca;cont_score[_0x5f37c5(0xd8)]+=_0x5f37c5(0x12c)+_0x3799c5+'</div><div\x20class=\x22r_score_name\x22>'+_0x5cf063[_0x5f37c5(0xe2)]()[_0x5f37c5(0x123)][_0x5f37c5(0x121)](0x0)[_0x5f37c5(0x11d)]()+_0x5cf063[_0x5f37c5(0xe2)]()[_0x5f37c5(0x123)]['slice'](0x1)+_0x5f37c5(0xd5)+_0x5cf063[_0x5f37c5(0xe2)]()['score']+'</div></div>',_0x3799c5++;},0x14*_0x1a8452),_0x1a8452++;})[_0x51dee9(0xc5)](_0x5f43f9=>{});});},getScoreDBbyname=()=>{const _0x1e83b8=_0x19248e;cont_score['innerHTML']='';let _0x23b72b=0x1;cont_score['innerHTML']+=_0x1e83b8(0x12d);let _0x525e07=firebase[_0x1e83b8(0x116)]();_0x525e07[_0x1e83b8(0x11a)](_0x1e83b8(0xd2))[_0x1e83b8(0x11c)]('nom')[_0x1e83b8(0xd9)](0x64)[_0x1e83b8(0xc6)]()['then'](_0x3de66e=>{const _0x1f44b7=_0x1e83b8;let _0x278a66=0x1;_0x3de66e[_0x1f44b7(0x112)](_0x11f538=>{setTimeout(()=>{const _0x970c87=_0x53ca;cont_score[_0x970c87(0xd8)]+=_0x970c87(0x12c)+_0x278a66+'</div><div\x20class=\x22r_score_name\x22>'+_0x11f538[_0x970c87(0xe2)]()['nom'][_0x970c87(0x121)](0x0)[_0x970c87(0x11d)]()+_0x11f538[_0x970c87(0xe2)]()['nom'][_0x970c87(0xfa)](0x1)+_0x970c87(0xd5)+_0x11f538['data']()[_0x970c87(0x136)]+'</div></div>',_0x278a66++;},0x14*_0x23b72b),_0x23b72b++;})['catch'](_0x239b1a=>{});});},newConnexion=()=>{const _0x2c6b71=_0x19248e;var _0x2cd645,_0x19b689;firebase[_0x2c6b71(0x116)]()[_0x2c6b71(0x11a)]('cnxs')[_0x2c6b71(0xec)](_0x2c6b71(0x10e))[_0x2c6b71(0xe6)]({'game':firebase[_0x2c6b71(0x116)]['FieldValue'][_0x2c6b71(0x137)](0x1)})[_0x2c6b71(0xc5)](_0xc575e3=>{});},startGame=()=>{const _0x424bb5=_0x19248e;newConnexion(),divStart[_0x424bb5(0x10f)][_0x424bb5(0x103)]='-200%',divStart[_0x424bb5(0x10f)][_0x424bb5(0xf3)]='0',play=!0x0,plaques=[],booms=[],badges['forEach'](_0x1e88cf=>_0x1e88cf['d']=!0x1),shoots[_0x424bb5(0x112)](_0xdb2d40=>_0xdb2d40['d']=!0x1),score=0x0,life=0x5,lifePlaque=0x2,nbrLoopBadges=0x2,intervalBadges=setInterval(createBadges,0x5dc),intervalShoots=setInterval(createShoot,0xfa),intervalLife=setInterval(createLife,0x61a8),requestAnimationFrame(animate);},setDivStart=()=>{const _0x3bb150=_0x19248e;(divStart=document[_0x3bb150(0x10a)](_0x3bb150(0x105)))[_0x3bb150(0x10f)][_0x3bb150(0x145)]=W+'px',divStart[_0x3bb150(0x10f)][_0x3bb150(0xf5)]=H+'px',divStart[_0x3bb150(0x10f)][_0x3bb150(0x103)]='0%';},initCanvas=()=>{const _0x1b726f=_0x19248e;(c=document[_0x1b726f(0x10a)](_0x1b726f(0x126)))[_0x1b726f(0x145)]=W,c['height']=H,ctx=c[_0x1b726f(0x146)]('2d');},initFirebase=()=>{const _0x27c344=_0x19248e;let _0x42c9e4={'apiKey':_0x27c344(0xf6),'authDomain':_0x27c344(0x13f),'databaseURL':_0x27c344(0xe0),'projectId':_0x27c344(0xd3),'storageBucket':_0x27c344(0x130),'messagingSenderId':_0x27c344(0xc8),'appId':_0x27c344(0x108),'measurementId':'G-RBYK712KF0'};firebase[_0x27c344(0x12b)](_0x42c9e4);},init=()=>{const _0x3db280=_0x19248e;fps=document[_0x3db280(0x10a)](_0x3db280(0xcb)),W=window['innerWidth']<0x1f4?window[_0x3db280(0x109)]:0x1f4,H=window[_0x3db280(0x11f)],(playerImg=new Image())['src']='images/immeubles.png',(imageLife=new Image())[_0x3db280(0xfb)]=_0x3db280(0x13b),mouse=W/0x2,initFirebase(),setDivStart(),initCanvas(),createImgsBadges(),createImgsPlaques(),createStars(),createSuperStar(),poolShoots(),poolBadges(),eventsPlayer(),eventsRadioScores(),stars[_0x3db280(0x112)](_0x1f407e=>_0x1f407e[_0x3db280(0xe6)]()),player=new Player(W/0x2-playerSize/0x2,H-groundMargin-playerSize-0x5,playerSize);},stopGame=()=>{const _0x17baa7=_0x19248e;play=!0x1,plaques=[],booms=[],badges[_0x17baa7(0x112)](_0x1420ab=>_0x1420ab['d']=!0x1),shoots[_0x17baa7(0x112)](_0x52a108=>_0x52a108['d']=!0x1),div_post_score[_0x17baa7(0x10f)][_0x17baa7(0x103)]='0%',div_post_score[_0x17baa7(0x10f)]['opacity']='1',title_game['innerHTML']=_0x17baa7(0x110)+score+_0x17baa7(0xd1),clearInterval(intervalBadges),clearInterval(intervalShoots),clearInterval(intervalLife),ctx[_0x17baa7(0xcf)](0x0,0x0,W,H),stars[_0x17baa7(0x112)](_0x6c0e8f=>_0x6c0e8f[_0x17baa7(0xe6)]()),displayScore();},collision=(_0x422d92,_0x1f1009)=>_0x422d92['x']<_0x1f1009['x']&&_0x422d92['x']+_0x422d92['r']>_0x1f1009['x']&&_0x422d92['y']<_0x1f1009['y']&&_0x422d92['y']+_0x422d92['h']>_0x1f1009['y'],collisionPlayer=(_0x2b1b7f,_0x34dfed)=>_0x2b1b7f['x']-_0x2b1b7f['r']<_0x34dfed['x']&&_0x2b1b7f['x']+_0x2b1b7f['r']-_0x2b1b7f['r']/0x2>_0x34dfed['x']&&_0x2b1b7f['y']<_0x34dfed['y']&&_0x2b1b7f['y']+_0x2b1b7f['r']>_0x34dfed['y'],collisionPlaqueShoot=(_0x58a0ab,_0x4f2092)=>_0x58a0ab['x']<_0x4f2092['x']&&_0x58a0ab['x']+_0x58a0ab['w']>_0x4f2092['x']&&_0x58a0ab['y']<_0x4f2092['y']&&_0x58a0ab['y']+_0x58a0ab['h']>_0x4f2092['y']-_0x4f2092['r']/0x2,collisionPlaquePlayer=(_0x3894c4,_0x102953)=>_0x3894c4['x']<_0x102953['x']+_0x102953['r']/0x2&&_0x3894c4['x']+1.2*_0x3894c4['w']>_0x102953['x']+_0x102953['r']/0x2&&_0x3894c4['y']<_0x102953['y']&&_0x3894c4['y']+_0x3894c4['h']>_0x102953['y'],check=()=>{const _0x14942f=_0x19248e;for(let _0x1fe953=shoots[_0x14942f(0xfc)]-0x1;_0x1fe953>=0x0;_0x1fe953--)if(shoots[_0x1fe953]['d']){if(shoots[_0x1fe953]['update'](),shoots[_0x1fe953]['y']<0x0){shoots[_0x1fe953]['d']=!0x1;break;}if(plaques[0x0]&&shoots[_0x1fe953]['d']&&collisionPlaqueShoot(plaques[0x0],shoots[_0x1fe953])){if(plaques[0x0]['life']<=0x1){createBooms(plaques[0x0]['x']+plaques[0x0]['w']/0x2+random(plaques[0x0]['w']/0x2,-plaques[0x0]['w']/0x2),plaques[0x0]['y']+plaques[0x0]['h']/0x2+random(plaques[0x0]['h']/0x2,-plaques[0x0]['h']/0x2),0x4,'white'),createBooms(plaques[0x0]['x']+plaques[0x0]['w']/0x2+random(plaques[0x0]['w']/0x2,-plaques[0x0]['w']/0x2),plaques[0x0]['y']+plaques[0x0]['h']/0x2+random(plaques[0x0]['h']/0x2,-plaques[0x0]['h']/0x2),0x4,_0x14942f(0x128)),createBooms(plaques[0x0]['x']+plaques[0x0]['w']/0x2+random(plaques[0x0]['w']/0x2,-plaques[0x0]['w']/0x2),plaques[0x0]['y']+plaques[0x0]['h']/0x2+random(plaques[0x0]['h']/0x2,-plaques[0x0]['h']/0x2),0x4,'white'),createBooms(plaques[0x0]['x']+plaques[0x0]['w']/0x2+random(plaques[0x0]['w']/0x2,-plaques[0x0]['w']/0x2),plaques[0x0]['y']+plaques[0x0]['h']/0x2+random(plaques[0x0]['h']/0x2,-plaques[0x0]['h']/0x2),0x4,'white'),createBooms(plaques[0x0]['x']+plaques[0x0]['w']/0x2+random(plaques[0x0]['w']/0x2,-plaques[0x0]['w']/0x2),plaques[0x0]['y']+plaques[0x0]['h']/0x2+random(plaques[0x0]['h']/0x2,-plaques[0x0]['h']/0x2),0x4,_0x14942f(0x128)),score+=0x1,plaques[_0x14942f(0x12a)](0x0,0x1),shoots[_0x1fe953]['d']=!0x1;break;}score+=0x1,shoots[_0x1fe953]['d']=!0x1,plaques[0x0][_0x14942f(0x13a)]--;break;}for(let _0xb9076f=badges[_0x14942f(0xfc)]-0x1;_0xb9076f>=0x0;_0xb9076f--){if(badges[_0xb9076f]['d']&&shoots[_0x1fe953]['d']&&collision(badges[_0xb9076f],shoots[_0x1fe953])){if(_0x14942f(0x13a)==badges[_0xb9076f]['type']){createBooms(badges[_0xb9076f]['x']+badges[_0xb9076f]['r']/0x2,badges[_0xb9076f]['y']+badges[_0xb9076f]['r']/0x2,0x4,_0x14942f(0x128)),badges[_0xb9076f]['d']=!0x1,shoots[_0x1fe953]['d']=!0x1,life++;break;}createBooms(badges[_0xb9076f]['x']+badges[_0xb9076f]['r']/0x2,badges[_0xb9076f]['y']+badges[_0xb9076f]['r']/0x2,0x4,'white'),badges[_0xb9076f]['d']=!0x1,shoots[_0x1fe953]['d']=!0x1,(score+=0x1)%0x1e==0x0&&0x0!=score&&(createPlaque(posSrcPlaque,lifePlaque),posSrcPlaque++,lifePlaque++,posSrcPlaque>=imagePlaques[_0x14942f(0xfc)]&&(posSrcPlaque=0x0)),score%0x64==0x0&&0x0!=score&&nbrLoopBadges++;break;}if(badges[_0xb9076f]['d']&&collisionPlayer(player,badges[_0xb9076f])){if('life'==badges[_0xb9076f][_0x14942f(0xdc)]){createBooms(badges[_0xb9076f]['x']+badges[_0xb9076f]['r']/0x2,badges[_0xb9076f]['y']+badges[_0xb9076f]['r']/0x2,0x4,_0x14942f(0x128)),badges[_0xb9076f]['d']=!0x1,life++;break;}createBooms(badges[_0xb9076f]['x']+badges[_0xb9076f]['r']/0x2,badges[_0xb9076f]['y']+badges[_0xb9076f]['r']/0x2,0x4,_0x14942f(0xee)),badges[_0xb9076f]['d']=!0x1,life>0x1?(life--,checkVibrate&&navigator[_0x14942f(0x13d)](0xc8)):(stopGame(),life--,checkVibrate&&navigator['vibrate'](0xc8));break;}}}},checkPlaque=()=>{const _0x128710=_0x19248e;for(let _0x56a3a6=0x0;_0x56a3a6<plaques[_0x128710(0xfc)];_0x56a3a6++)if(collisionPlaquePlayer(plaques[_0x56a3a6],player)||plaques[_0x56a3a6]['y']+plaques[_0x56a3a6]['h']>=H-groundMargin){life>0x1?(createBooms(plaques[_0x56a3a6]['x']+plaques[_0x56a3a6]['w']/0x2+random(plaques[_0x56a3a6]['w']/0x2,-plaques[_0x56a3a6]['w']/0x2),plaques[_0x56a3a6]['y']+plaques[_0x56a3a6]['h'],0x4,'red'),createBooms(plaques[_0x56a3a6]['x']+plaques[_0x56a3a6]['w']/0x2+random(plaques[_0x56a3a6]['w']/0x2,-plaques[_0x56a3a6]['w']/0x2),plaques[_0x56a3a6]['y']+plaques[_0x56a3a6]['h'],0x4,'red'),createBooms(plaques[_0x56a3a6]['x']+plaques[_0x56a3a6]['w']/0x2+random(plaques[_0x56a3a6]['w']/0x2,-plaques[_0x56a3a6]['w']/0x2),plaques[_0x56a3a6]['y']+plaques[_0x56a3a6]['h'],0x4,'red'),life--,checkVibrate&&navigator[_0x128710(0x13d)](0xc8)):(createBooms(plaques[_0x56a3a6]['x']+plaques[_0x56a3a6]['w']/0x2+random(plaques[_0x56a3a6]['w']/0x2,-plaques[_0x56a3a6]['w']/0x2),plaques[_0x56a3a6]['y']+plaques[_0x56a3a6]['h'],0x4,_0x128710(0xee)),createBooms(plaques[_0x56a3a6]['x']+plaques[_0x56a3a6]['w']/0x2+random(plaques[_0x56a3a6]['w']/0x2,-plaques[_0x56a3a6]['w']/0x2),plaques[_0x56a3a6]['y']+plaques[_0x56a3a6]['h'],0x4,_0x128710(0xee)),createBooms(plaques[_0x56a3a6]['x']+plaques[_0x56a3a6]['w']/0x2+random(plaques[_0x56a3a6]['w']/0x2,-plaques[_0x56a3a6]['w']/0x2),plaques[_0x56a3a6]['y']+plaques[_0x56a3a6]['h'],0x4,_0x128710(0xee)),stopGame(),life--,checkVibrate&&navigator['vibrate'](0xc8)),plaques=[];break;}},animBadges=()=>{const _0xf3f40a=_0x19248e;for(let _0x5cf9a6=badges[_0xf3f40a(0xfc)]-0x1;_0x5cf9a6>=0x0;_0x5cf9a6--)badges[_0x5cf9a6]['d']&&(badges[_0x5cf9a6][_0xf3f40a(0xe6)](),badges[_0x5cf9a6]['y']+badges[_0x5cf9a6]['h']>=H-groundMargin&&(life>0x1?(createBooms(badges[_0x5cf9a6]['x']+badges[_0x5cf9a6]['r']/0x2,badges[_0x5cf9a6]['y']+badges[_0x5cf9a6]['r'],0x4,_0xf3f40a(0xee)),life--,checkVibrate&&navigator[_0xf3f40a(0x13d)](0xc8)):(createBooms(badges[_0x5cf9a6]['x']+badges[_0x5cf9a6]['r']/0x2,badges[_0x5cf9a6]['y']+badges[_0x5cf9a6]['r'],0x4,_0xf3f40a(0xee)),stopGame(),life--,checkVibrate&&navigator[_0xf3f40a(0x13d)](0xc8)),badges[_0x5cf9a6]['d']=!0x1));},animBooms=()=>{const _0x203ed0=_0x19248e;for(let _0x15bb4d=booms[_0x203ed0(0xfc)]-0x1;_0x15bb4d>=0x0;_0x15bb4d--)booms[_0x15bb4d]&&(booms[_0x15bb4d][_0x203ed0(0xe6)](),booms[_0x15bb4d]['r']<0.4&&booms[_0x203ed0(0x12a)](_0x15bb4d,0x1));},animPlaques=()=>{const _0x21082e=_0x19248e;for(let _0x59d6a6=plaques['length']-0x1;_0x59d6a6>=0x0;_0x59d6a6--)plaques[_0x59d6a6]&&plaques[_0x59d6a6][_0x21082e(0xe6)]();},drawControls=()=>{const _0x1f83fc=_0x19248e;ctx['beginPath'](),ctx['fillStyle']='rgba(20,20,50,1)',ctx[_0x1f83fc(0x138)](0x0,H-groundMargin,W,groundMargin),ctx[_0x1f83fc(0x13e)]();},displayScore=()=>{const _0x45fccb=_0x19248e;ctx[_0x45fccb(0xd7)]=_0x45fccb(0x117),ctx['fillStyle']=_0x45fccb(0x128),ctx[_0x45fccb(0xf4)](_0x45fccb(0x13c)+score,0xa,0x1e);},displayLife=()=>{const _0x37be14=_0x19248e;ctx[_0x37be14(0xcd)](),ctx[_0x37be14(0x101)](imageLife,W-0x32,0xa,0x28,0x28),ctx[_0x37be14(0x13e)](),ctx[_0x37be14(0xd7)]=_0x37be14(0x132),ctx[_0x37be14(0x142)]=_0x37be14(0x128),ctx[_0x37be14(0xf4)](life,W-ctx[_0x37be14(0xd6)](life)['width']-0x37,0x28);},calcFPS=()=>{const _0x7f8fc5=_0x19248e;let _0x23162f=Date[_0x7f8fc5(0xef)]()-lastTimeCalled;lastTimeCalled=Date[_0x7f8fc5(0xef)](),fps[_0x7f8fc5(0x120)]=_0x7f8fc5(0x125)+Math[_0x7f8fc5(0xea)](0x3e8/_0x23162f);},animate=()=>{const _0x318a1f=_0x19248e;play&&(ctx[_0x318a1f(0xcf)](0x0,0x0,W,H),stars[_0x318a1f(0x112)](_0x501a6c=>_0x501a6c[_0x318a1f(0xe6)]()),superstar[_0x318a1f(0xe6)](),check(),checkPlaque(),animPlaques(),animBadges(),animBooms(),player[_0x318a1f(0xe6)](),drawControls(),displayScore(),displayLife(),requestAnimationFrame(animate));};function _0x20f7(){const _0x589855=['intratoneinvaders.firebaseapp.com','images/platine01.png','images/badges/badge_marron.png','fillStyle','images/immeubles.png','#8BFE0A','width','getContext','catch','get','toLowerCase','243873077179','nom_post','floor','Fps','value','beginPath','badge','clearRect','querySelectorAll','</span>\x20','scores','intratoneinvaders','-200%','</div><div\x20class=\x22r_score_score\x22>','measureText','font','innerHTML','limit','input[type=\x22radio\x22]','images/badges/badge_violet.png','type','serverTimestamp','mousemove','navigator','https://intratoneinvaders-default-rtdb.europe-west1.firebasedatabase.app','39240jLAQkO','data','10610YEMdMJ','random','9171wsBlDk','update','addEventListener','push','images/platine00.png','round','then','doc','rMax','red','now','black','FieldValue','changedTouches','opacity','fillText','height','AIzaSyBNh07QQK3E3CATQUiSG88nSgDFOA4n1CM','2516Vlapva','images/badges/badge_noir.png','stroke','slice','src','length','1419HjmWXD','speed','direction','64zvdxGt','drawImage','images/badges/badge_vert.png','top','images/badges/badge_jaune.png','div_start','8291814KcIURp','radio_score','1:243873077179:web:6b6f03cee2efa8c936169e','innerWidth','getElementById','arc','1105912NksQtR','clientX','U2h3zAvp79RPhCqnxrbF','style','GAME\x20OVER<br><br><span\x20id=\x22span_score\x22>SCORE:\x20','cpt','forEach','stokestyle','checked','1MYNUkL','firestore','15px\x20Arial','539860tsvMbp','color','collection','200%','orderBy','toUpperCase','img','innerHeight','innerText','charAt','radio_nom','nom','images/badges/badge_bleu.png','fps:\x20','canvas','images/badges/badge_ivoire.png','white','add','splice','initializeApp','<div\x20class=\x22r_score\x22>\x20<div\x20class=\x22r_score_pos\x22>','<div\x20class=\x22r_score\x22>\x20<div\x20class=\x22r_score_pos\x22>N°</div><div\x20class=\x22r_score_name\x22>Nom</div><div\x20class=\x22r_score_score\x22>Score</div></div>','speedR','sin','intratoneinvaders.appspot.com','284067ThfJzT','25px\x20Arial','draw','change','rad','score','increment','rect','275JTiyRv','life','images/coeur.png','SCORE\x20:\x20','vibrate','fill'];_0x20f7=function(){return _0x589855;};return _0x20f7();}onload=init;class Dot{constructor(_0xb9b223,_0x46c42d,_0x917a86){this['x']=_0xb9b223,this['y']=_0x46c42d,this['r']=_0x917a86;}}class Star extends Dot{constructor(_0x2aa3eb,_0xd79d45,_0x41b905){const _0xad38c4=_0x19248e;super(_0x2aa3eb,_0xd79d45,_0x41b905),this[_0xad38c4(0xed)]=this['r'],this[_0xad38c4(0xfe)]=random(0.005,0.0001);}[_0x19248e(0x133)](){const _0x169d65=_0x19248e;ctx[_0x169d65(0xcd)](),ctx[_0x169d65(0x142)]=_0x169d65(0x128),ctx[_0x169d65(0x10b)](this['x'],this['y'],this['r'],0x0,0x2*Math['PI']),ctx[_0x169d65(0x13e)]();}[_0x19248e(0xe6)](){const _0x10e99b=_0x19248e;this['r']-this[_0x10e99b(0xfe)]>0.1&&this['r']-this['speed']<this['rMax']?this['r']-=this[_0x10e99b(0xfe)]:this['speed']*=-0x1,this['y']+=0.5,this['y']>H+this['r']&&(this['y']=-this['r']),this[_0x10e99b(0x133)]();}}class SuperStar extends Dot{constructor(_0x7db64f,_0x158795,_0x10686d){const _0x2c49b7=_0x19248e;super(_0x7db64f,_0x158795,_0x10686d),this[_0x2c49b7(0xff)]={'x':random(0x1,-0x1),'y':random(0x1,-0x1)},this['speed']=0xa;}[_0x19248e(0x133)](){const _0x5f49fc=_0x19248e;ctx[_0x5f49fc(0xcd)](),ctx[_0x5f49fc(0x142)]=_0x5f49fc(0x128),ctx[_0x5f49fc(0x10b)](this['x'],this['y'],this['r'],0x0,0x2*Math['PI']),ctx[_0x5f49fc(0x13e)]();}[_0x19248e(0xe6)](){const _0x270e5c=_0x19248e;this['x']+=this[_0x270e5c(0xfe)]*this[_0x270e5c(0xff)]['x'],this['y']+=this[_0x270e5c(0xfe)]*this['direction']['y'],this[_0x270e5c(0x133)]();}}class Player extends Dot{constructor(_0xc06819,_0x280cea,_0x414637){super(_0xc06819,_0x280cea,_0x414637);}[_0x19248e(0x133)](){const _0xa1a262=_0x19248e;ctx[_0xa1a262(0xcd)](),ctx[_0xa1a262(0x101)](playerImg,this['x']-this['r']/0x2,this['y'],this['r'],this['r']);}[_0x19248e(0xe6)](){const _0x392265=_0x19248e;this['x']=mouse||this['x'],this['x']<this['r']/0x2&&(this['x']=this['r']/0x2),this['x']>W-this['r']/0x2&&(this['x']=W-this['r']/0x2),this[_0x392265(0x133)]();}}class Shoot extends Dot{constructor(_0xb4b5ec,_0x538be7,_0x17b4e7){super(_0xb4b5ec,_0x538be7,_0x17b4e7),this['d']=!0x1;}[_0x19248e(0x133)](){const _0x17655e=_0x19248e;ctx[_0x17655e(0xcd)](),ctx['fillStyle']=_0x17655e(0x128),ctx['arc'](this['x'],this['y'],this['r'],0x0,0x2*Math['PI']),ctx[_0x17655e(0x13e)]();}[_0x19248e(0xe6)](){const _0x39c329=_0x19248e;this['d']&&(this['y']-=0x7,this[_0x39c329(0x133)]());}}class Badge extends Dot{constructor(_0x14576c,_0x3a8feb,_0x1a801e,_0x261166,_0x21a982,_0x3fb9a2,_0xc62548=_0x19248e(0xce),_0x3e2762){const _0x17e1f7=_0x19248e;super(_0x14576c,_0x3a8feb,_0x1a801e),this['h']=_0x261166,this[_0x17e1f7(0xfe)]=_0x21a982,this[_0x17e1f7(0x11e)]=_0x3fb9a2,this[_0x17e1f7(0xdc)]=_0xc62548,this[_0x17e1f7(0x111)]=0x0,this['d']=_0x3e2762;}['draw'](){const _0x242cb2=_0x19248e;ctx[_0x242cb2(0xcd)](),ctx[_0x242cb2(0x101)](this['img'],this['x'],this['y'],this['r'],this['h']);}['update'](){const _0x1b39f7=_0x19248e;'life'==this['type']&&this['d']?(this[_0x1b39f7(0x111)]++,this[_0x1b39f7(0x111)]>=0x5&&(this[_0x1b39f7(0x111)]=0x1),this['y']+=this[_0x1b39f7(0xfe)],this[_0x1b39f7(0x111)]%0x4!=0x0&&this['draw']()):this['d']&&(this['y']+=this['speed'],this[_0x1b39f7(0x133)]());}}class Boom extends Dot{constructor(_0x2599c8,_0x5a07ec,_0xab8314,_0x259b2f,_0x3ad03d='white'){const _0xf0c45c=_0x19248e;super(_0x2599c8,_0x5a07ec,_0xab8314),this['a']=_0x259b2f,this[_0xf0c45c(0x119)]=_0x3ad03d,this[_0xf0c45c(0xfe)]=random(0x1,0.2),this[_0xf0c45c(0x135)]=random(0xa,0x2),this[_0xf0c45c(0x12e)]=random(0.2,0.15);}[_0x19248e(0x133)](){const _0x1641a5=_0x19248e;ctx['beginPath'](),ctx[_0x1641a5(0x142)]=this[_0x1641a5(0x119)],ctx['arc'](this['x0'],this['y0'],this['r'],0x0,0x2*Math['PI']),ctx[_0x1641a5(0x13e)]();}['update'](){const _0x250da1=_0x19248e;this[_0x250da1(0x135)]+=this[_0x250da1(0xfe)],this['r']>0.2&&(this['r']-=this[_0x250da1(0x12e)]),this['x0']=this['x']+this[_0x250da1(0x135)]*Math['cos'](this['a']),this['y0']=this['y']+this['rad']*Math[_0x250da1(0x12f)](this['a']),this['draw']();}}class Plaque{constructor(_0x233c67,_0x26fc17,_0x6e3bbc,_0x2d1b1f,_0x3cf060,_0x53ce93,_0x402695=0x5){const _0x3e36ee=_0x19248e;this['x']=_0x233c67,this['y']=_0x26fc17,this['w']=_0x6e3bbc,this['h']=_0x2d1b1f,this[_0x3e36ee(0x11e)]=_0x53ce93,this[_0x3e36ee(0xfe)]=_0x3cf060,this['life']=_0x402695;}[_0x19248e(0x133)](){const _0x33b37f=_0x19248e;ctx[_0x33b37f(0xcd)](),ctx[_0x33b37f(0x101)](this[_0x33b37f(0x11e)],this['x'],this['y'],this['w'],this['h']),this[_0x33b37f(0x13a)]>=0xa&&(this[_0x33b37f(0x13a)]=0xa);let _0x34c6ce=this['w']/0xa;for(let _0x497a08=0x0;_0x497a08<this[_0x33b37f(0x13a)];_0x497a08++){let _0x54e38a=this['y']+this['h'],_0xdbeb25=this['x']+_0x497a08*_0x34c6ce;_0x497a08>=0xa&&(_0x54e38a=this['y']+this['h']+_0x34c6ce,_0xdbeb25=this['x']+(_0x497a08-0xa)*_0x34c6ce),ctx['beginPath'](),ctx[_0x33b37f(0x142)]=_0x33b37f(0x144),ctx[_0x33b37f(0x113)]=_0x33b37f(0xf0),ctx[_0x33b37f(0x138)](_0xdbeb25,_0x54e38a,_0x34c6ce,_0x34c6ce),ctx[_0x33b37f(0x13e)](),ctx[_0x33b37f(0xf9)]();}}[_0x19248e(0xe6)](){const _0x5e63b4=_0x19248e;this['y']+=this[_0x5e63b4(0xfe)],this[_0x5e63b4(0x133)]();}}
