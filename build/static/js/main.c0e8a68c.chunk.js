(window.webpackJsonp=window.webpackJsonp||[]).push([[0],[,,,,,,,,,,,,,function(e,t,n){e.exports=n.p+"static/media/coin-default.383998df.png"},,,function(e,t,n){e.exports=n.p+"static/media/coin-plentiful-treasure.faa30845.png"},function(e,t,n){e.exports=n.p+"static/media/coin-t-rex.494eddd5.png"},function(e,t,n){e.exports=n.p+"static/media/coin-empress-wu.a179b65b.png"},function(e,t,n){e.exports=n.p+"static/media/coin-coyote-cash.3b519b8c.png"},function(e,t,n){e.exports=n.p+"static/media/plentiful-treasure.1e9ebfe1.jpg"},function(e,t,n){e.exports=n.p+"static/media/t-rex.950387ed.jpg"},function(e,t,n){e.exports=n.p+"static/media/empress-wu.55e8dedc.jpg"},function(e,t,n){e.exports=n.p+"static/media/coyote-cash.e1d00e90.jpg"},function(e,t,n){e.exports=n.p+"static/media/flip-again-button.a4cbb335.png"},,,function(e,t,n){e.exports=n.p+"static/media/ptflip290.c4f6d4af.png"},function(e,t,n){e.exports=n.p+"static/media/trexflip280.00a55305.png"},function(e,t,n){e.exports=n.p+"static/media/ewflip275.8cce28f1.png"},function(e,t,n){e.exports=n.p+"static/media/coyoteflip275.e196ec3d.png"},function(e,t,n){e.exports=n.p+"static/media/ptflip320.7ec88412.png"},function(e,t,n){e.exports=n.p+"static/media/trexflip310.d59ae43b.png"},function(e,t,n){e.exports=n.p+"static/media/ewflip330.b440d91a.png"},function(e,t,n){e.exports=n.p+"static/media/coyoteflip315.3c94979a.png"},function(e,t,n){e.exports=n.p+"static/media/logo.b2bf8313.png"},function(e,t,n){e.exports=n.p+"static/media/game-title.f7518ff3.png"},function(e,t,n){e.exports=n.p+"static/media/flip-button.7004b243.png"},,,function(e,t,n){e.exports=n.p+"static/media/curtain-left.158253c3.png"},function(e,t,n){e.exports=n.p+"static/media/curtain-right.132f7730.png"},,function(e,t,n){e.exports=n(71)},,,,,,function(e,t,n){},,,,function(e,t,n){},,function(e,t,n){},,function(e,t,n){},,function(e,t,n){},,function(e,t,n){},,function(e,t,n){},,,,,,function(e,t,n){},,function(e,t,n){"use strict";n.r(t);var a=n(0),i=n.n(a),o=n(26),l=n.n(o),c=n(5),r=n(6),s=n(8),u=n(7),m=n(9),p=n(16),d=n.n(p),f=n(17),E=n.n(f),g=n(18),b=n.n(g),v=n(19),h=n.n(v),_=n(20),y=n.n(_),O=n(21),P=n.n(O),I=n(22),w=n.n(I),C=n(23),x=n.n(C),k=n(27),T=n.n(k),N=n(28),j=n.n(N),L=n(29),B=n.n(L),F=n(30),S=n.n(F),D=n(31),R=n.n(D),Y=n(32),M=n.n(Y),X=n(33),W=n.n(X),G=n(34),V=n.n(G),U=[{game:"Plentiful Treasure",depositPercent:"290%",depositSpins:"30 spins",coupon:"PTFLIP290",img:d.a,bg_img:y.a,bonus_img:T.a},{game:"Plentiful Treasure",depositPercent:"320%",depositSpins:"40 spins",coupon:"PTFLIP320",img:d.a,bg_img:y.a,bonus_img:R.a},{game:"T-Rex",depositPercent:"280%",depositSpins:"25 spins",coupon:"TREXFLIP280",img:E.a,bg_img:P.a,bonus_img:j.a},{game:"T-Rex",depositPercent:"310%",depositSpins:"40 spins",coupon:"TREXFLIP310",img:E.a,bg_img:P.a,bonus_img:M.a},{game:"Empress Wu",depositPercent:"275%",depositSpins:"30 spins",coupon:"EWFLIP275",img:b.a,bg_img:w.a,bonus_img:B.a},{game:"Empress Wu",depositPercent:"330%",depositSpins:"50 spins",coupon:"EWFLIP330",img:b.a,bg_img:w.a,bonus_img:W.a},{game:"Coyote Cash",depositPercent:"275%",depositSpins:"30 spins",coupon:"COYOTEFLIP275",img:h.a,bg_img:x.a,bonus_img:S.a},{game:"Coyote Cash",depositPercent:"315%",depositSpins:"40 spins",coupon:"COYOTEFLIP315",img:h.a,bg_img:x.a,bonus_img:V.a}],$=n(72),q=n(73),z=n(74),J=n(75),K=n(35),A=n.n(K),H=n(36),Z=n.n(H),Q=n(4),ee=n(76),te=n(42),ne=n(13),ae=n.n(ne),ie=function(e){var t={position:"absolute",width:0,height:0,background:e.imagesList.reduce(function(t,n,a){return e.imagesList.length-1===a?"".concat(t,"url('").concat(n,"')"):"".concat(t,"url('").concat(n,"'),")},"")};return i.a.createElement("div",{style:t})},oe=(n(49),n(37)),le=n.n(oe),ce=n(24),re=n.n(ce),se=function(e){function t(e){var n;return Object(c.a)(this,t),(n=Object(s.a)(this,Object(u.a)(t).call(this,e))).onResize=function(e,t){e>768&&n.isMobile?(n.isMobile=!1,n.centerCoin()):e<=768&&!n.isMobile&&(n.isMobile=!0,n.centerCoin())},n.displayCoin=function(){var e=new Image;e.src=ae.a,e.addEventListener("load",function(){n.myTween.to(n.coin,1.6,{visibility:"visible",y:"-20%",rotationX:360,rotationY:0,rotationZ:0}).add(function(){n.coinFront.classList.add("coin--shine"),setTimeout(function(){n.coinFront.classList.remove("coin--shine")},2e3)}).to(n.coinGlow,1,{opacity:1}).call(function(){setTimeout(function(){n.props.enableButton()},1e3)}).play()})},n.flipCoin=function(){n.myTween.to(n.coinGlow,.2,{opacity:0}).to(n.coinStars,.5,{scaleX:0,scaleY:0,ease:Q.a.easeInOut.config(1)},"-=.2").to(n.coinBonus,.5,{scaleX:0,scaleY:0,ease:Q.a.easeInOut.config(1)},"-=.5").to(n.coinBonus,0,{backgroundImage:"url(".concat(n.props.currentPromo.bonus_img,")")}).to(n.flipButtonEl,0,{backgroundImage:"url(".concat(re.a,")")}).to(n.coin,3,{ease:Q.b.easeOut,rotationY:1980}).to(n.coinBack,0,{backgroundImage:"url(".concat(n.props.promotions[0].img,")")},"-=".concat(3)).to(n.coinBack,0,{backgroundImage:"url(".concat(n.props.promotions[1].img,")")},"-=".concat(2.75)).to(n.coinBack,0,{backgroundImage:"url(".concat(n.props.promotions[2].img,")")},"-=".concat(2.25)).to(n.coinBack,0,{backgroundImage:"url(".concat(n.props.promotions[3].img,")")},"-=".concat(3-16/12)).to(n.coinBack,0,{backgroundImage:"url(".concat(n.props.promotions[4].img,")")},"-=".concat(1.5)).to(n.coinBack,0,{backgroundImage:"url(".concat(n.props.currentPromo.img,")")},"-=".concat(.75)).to(n.coinGlow,1,{opacity:1},"+=.5").add(function(){n.coinBack.classList.add("coin--shine"),setTimeout(function(){n.coinBack.classList.remove("coin--shine")},2e3)}).to(n.coinStars,1,{scaleX:1,scaleY:1,ease:Q.a.easeOut.config(1)},"-=0.5").to(n.coinBonus,1,{opacity:1,scaleX:1,scaleY:1,ease:Q.a.easeOut.config(1)},"-=1").set(n.coin,{rotationY:180})},n.centerCoin=function(){n.myTween.to(n.coin,0,{x:0}).to(n.coinStars,0,{x:"-50%",y:"40%"}).to(n.coinBonus,0,{x:"-50%",y:"55%"}).play()},n.isMobile=null,n.coin=null,n.coinFront=null,n.coinBack=null,n.coinGlow=null,n.coinStars=null,n.flipButtonEl=null,n.myTween=new Q.c({paused:!0}),n}return Object(m.a)(t,e),Object(r.a)(t,[{key:"render",value:function(){var e=this;return i.a.createElement("div",{className:"coin-container"},i.a.createElement("div",{className:"coin",ref:function(t){return e.coin=t}},i.a.createElement("a",{href:"#somelink",onClick:function(t){t.preventDefault(),e.props.buttonDisabled||e.props.play()},className:this.props.buttonDisabled?"coin__front coin__front--disabled":"coin__front",ref:function(t){return e.coinFront=t}},"front"),i.a.createElement("div",{className:"coin__edge"},i.a.createElement("div",null),i.a.createElement("div",null),i.a.createElement("div",null),i.a.createElement("div",null),i.a.createElement("div",null),i.a.createElement("div",null),i.a.createElement("div",null),i.a.createElement("div",null),i.a.createElement("div",null),i.a.createElement("div",null),i.a.createElement("div",null),i.a.createElement("div",null),i.a.createElement("div",null),i.a.createElement("div",null),i.a.createElement("div",null),i.a.createElement("div",null),i.a.createElement("div",null),i.a.createElement("div",null),i.a.createElement("div",null),i.a.createElement("div",null),i.a.createElement("div",null),i.a.createElement("div",null),i.a.createElement("div",null),i.a.createElement("div",null),i.a.createElement("div",null),i.a.createElement("div",null),i.a.createElement("div",null),i.a.createElement("div",null),i.a.createElement("div",null),i.a.createElement("div",null),i.a.createElement("div",null),i.a.createElement("div",null),i.a.createElement("div",null),i.a.createElement("div",null),i.a.createElement("div",null),i.a.createElement("div",null),i.a.createElement("div",null),i.a.createElement("div",null),i.a.createElement("div",null),i.a.createElement("div",null),i.a.createElement("div",null),i.a.createElement("div",null),i.a.createElement("div",null),i.a.createElement("div",null),i.a.createElement("div",null),i.a.createElement("div",null),i.a.createElement("div",null),i.a.createElement("div",null),i.a.createElement("div",null),i.a.createElement("div",null),i.a.createElement("div",null),i.a.createElement("div",null),i.a.createElement("div",null),i.a.createElement("div",null),i.a.createElement("div",null),i.a.createElement("div",null),i.a.createElement("div",null),i.a.createElement("div",null),i.a.createElement("div",null),i.a.createElement("div",null),i.a.createElement("div",null),i.a.createElement("div",null),i.a.createElement("div",null),i.a.createElement("div",null),i.a.createElement("div",null),i.a.createElement("div",null),i.a.createElement("div",null),i.a.createElement("div",null),i.a.createElement("div",null),i.a.createElement("div",null),i.a.createElement("div",null),i.a.createElement("div",null),i.a.createElement("div",null),i.a.createElement("div",null),i.a.createElement("div",null),i.a.createElement("div",null),i.a.createElement("div",null),i.a.createElement("div",null),i.a.createElement("div",null),i.a.createElement("div",null)),i.a.createElement("a",{href:"#somelink/webplay/?cashier&coupon=".concat(this.props.currentPromo.coupon),className:"coin__back",ref:function(t){return e.coinBack=t}},"back"),i.a.createElement("div",{className:"coin__glow",ref:function(t){return e.coinGlow=t}}),i.a.createElement("div",{className:"coin__stars",ref:function(t){return e.coinStars=t}}),i.a.createElement("a",{className:"coin__bonus",href:"#somelink/webplay/?cashier&coupon=".concat(this.props.currentPromo.coupon),ref:function(t){return e.coinBonus=t}},"Get bonus")),i.a.createElement(ee.a,{className:this.props.buttonDisabled?"coin__button":"coin__button coin__button--visible",onClick:this.props.play,disabled:this.props.buttonDisabled,ref:function(t){return e.flipButtonEl=t}}),i.a.createElement(ie,{imagesList:[ae.a,ae.a,le.a,re.a]}),i.a.createElement(te.a,{handleWidth:!0,handleHeight:!1,onResize:this.onResize}))}},{key:"componentDidMount",value:function(){this.displayCoin()}},{key:"componentDidUpdate",value:function(e){0!==this.props.gameId&&e.gameId!==this.props.gameId&&this.flipCoin()}}]),t}(a.Component),ue=(n(53),n(40)),me=n.n(ue),pe=n(41),de=n.n(pe),fe=function(e){function t(e){var n;return Object(c.a)(this,t),(n=Object(s.a)(this,Object(u.a)(t).call(this,e))).curtains=null,n.curtain_left=null,n.curtain_right=null,n.myTween=new Q.c({paused:!0}),n}return Object(m.a)(t,e),Object(r.a)(t,[{key:"componentDidUpdate",value:function(e){e.isClosed!==this.props.isClosed&&(this.props.isClosed?this.myTween.to(this.curtain_left,1.5,{x:"5%",ease:Q.a.easeOut.config(1)}).to(this.curtain_right,1.5,{x:"-5%",ease:Q.a.easeOut.config(1)},"-=1.5").play():this.myTween.to(this.curtains,0,{backgroundImage:"url(".concat(this.props.currentPromo.bg_img,")")}).to(this.curtain_left,1.5,{x:"-100%",ease:Q.a.easeInOut.config(1)}).to(this.curtain_right,1.5,{x:"100%",ease:Q.a.easeInOut.config(1)},"-=1.5").play())}},{key:"render",value:function(){var e=this;return i.a.createElement("div",{className:"curtains",ref:function(t){return e.curtains=t}},i.a.createElement("div",{className:"curtain curtain--left",ref:function(t){return e.curtain_left=t}}),i.a.createElement("div",{className:"curtain curtain--right",ref:function(t){return e.curtain_right=t}}),i.a.createElement(ie,{imagesList:[me.a,de.a]}))}}]),t}(a.Component),Ee=i.a.createElement("div",null,i.a.createElement("p",null,"TERMS: PTFLIP290 | PTFLIP320| TREXFLIP280 | TREXFLIP310| EWFLIP275 | EWFLIP330 | COYOTEFLIP275 | COYOTEFLIP315 Bonus amounts and spins come with 5x playthrough and no max cashout. Bonuses are considered non-cashable and will be removed from the amount or your withdrawal request. Bonus Spins will be credited automatically upon redemption of the relevant coupon code. You must play all of the Spins before moving on to another game. Bonuses are good for play in Slots, Keno, Bingo, and Scratch Card games."),i.a.createElement("p",null,"Min deposit of $50 on PTFLIP290 | TREXFLIP280 | EWFLIP275 | COYOTEFLIP275. Min deposit of $100 on PTFLIP320| TREXFLIP310| EWFLIP330 | COYOTEFLIP315."),i.a.createElement("p",null,"COINFLIP300 comes with no playthrough requirements and a maximum cashout of 30,000. Bonus will redeem with any deposit of $80 or more, and is good for play in Slots, Keno, Bingo, and Scratch Card games. Bonus amount is considered non-cashable and will be removed from the amount or your withdrawal request."),i.a.createElement("p",null,"Unless specifically stated otherwise, standard rules apply.")),ge=(n(55),function(e){function t(e){var n;return Object(c.a)(this,t),(n=Object(s.a)(this,Object(u.a)(t).call(this,e))).toggleTerms=function(){n.setState({visible:!n.state.visible})},n.state={visible:!1},n}return Object(m.a)(t,e),Object(r.a)(t,[{key:"render",value:function(){return i.a.createElement("div",{className:this.state.visible?"terms terms--visible":"terms"},i.a.createElement($.a,null,i.a.createElement(q.a,null,i.a.createElement(z.a,{xs:12},Ee))),i.a.createElement(ee.a,{className:"terms__button",onClick:this.toggleTerms},"Terms"))}}]),t}(a.Component)),be=(n(57),function(e){function t(){var e,n;Object(c.a)(this,t);for(var a=arguments.length,i=new Array(a),o=0;o<a;o++)i[o]=arguments[o];return(n=Object(s.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(i)))).play=function(e){Q.d.to(window,.5,{scrollTo:0}),setTimeout(function(){n.props.play(e)},500)},n}return Object(m.a)(t,e),Object(r.a)(t,[{key:"render",value:function(){var e=this;return i.a.createElement("div",{className:"promo-table-section"},i.a.createElement("div",{className:"promo-table"},this.props.promotions.map(function(t,n){return i.a.createElement("div",{key:t.coupon,className:"promo"},i.a.createElement("div",{className:"promo__title"},t.game),i.a.createElement("div",{className:"promo__deposit"},i.a.createElement("div",{className:"promo__deposit-percent"},t.depositPercent),i.a.createElement("div",{className:"promo__deposit-spins"},t.depositSpins)),i.a.createElement("div",{className:"promo__button"},i.a.createElement("button",{onClick:function(){return e.play(n)},disabled:e.props.buttonDisabled},"Flip for it")))})),i.a.createElement("div",{className:"promo-arrows"},i.a.createElement("span",{className:"promo-arrows__arrow"}),i.a.createElement("span",{className:"promo-arrows__arrow"}),i.a.createElement("span",{className:"promo-arrows__arrow"})),i.a.createElement(ge,null))}}]),t}(a.Component)),ve=(n(59),function(e){function t(e){var n;return Object(c.a)(this,t),(n=Object(s.a)(this,Object(u.a)(t).call(this,e))).togglePanel=function(){n.setState({isVisible:!n.state.isVisible})},n.state={isVisible:!1},n}return Object(m.a)(t,e),Object(r.a)(t,[{key:"componentDidMount",value:function(){var e=this;setTimeout(function(){e.setState({isVisible:!0})},25e3)}},{key:"render",value:function(){return i.a.createElement("div",{className:this.state.isVisible?"panel panel--visible":"panel"},i.a.createElement($.a,{style:{position:"relative"}},i.a.createElement(q.a,null,i.a.createElement(z.a,{xs:12},i.a.createElement("p",null,"Don\u2019t give a flip?"),i.a.createElement("p",null,"Use code"," ",i.a.createElement("a",{href:"#somelink/webplay/?cashier&coupon=COINFLIP300"},"COINFLIP300")," ","with a deposit of $80 for 300% with no playthrough!"))),i.a.createElement(ee.a,{className:"panel__button",onClick:this.togglePanel},"Close")))}}]),t}(a.Component)),he=(n(61),function(e){function t(e){var n;return Object(c.a)(this,t),(n=Object(s.a)(this,Object(u.a)(t).call(this,e))).play=function(e){n.state.curtainsClosed?(n.disableButton(),n.flipCoin(e),setTimeout(function(){n.openCurtains(),setTimeout(function(){n.enableButton()},3e3)},3200)):(n.disableButton(),n.closeCurtains(),setTimeout(function(){n.flipCoin(e),setTimeout(function(){n.openCurtains(),setTimeout(function(){n.enableButton()},3e3)},3200)},1500))},n.getRandomItem=function(e){return e[Math.floor(Math.random()*e.length)]},n.flipCoin=function(e){isNaN(e)?n.setState({gameId:n.state.gameId+1,currentPromo:n.getRandomItem(U)}):n.setState({gameId:n.state.gameId+1,currentPromo:U[e]})},n.closeCurtains=function(){n.setState({curtainsClosed:!0})},n.openCurtains=function(){n.setState({curtainsClosed:!1})},n.enableButton=function(){n.setState({buttonDisabled:!1})},n.disableButton=function(){n.setState({buttonDisabled:!0})},n.state={gameId:0,currentPromo:n.getRandomItem(U),curtainsClosed:!0,buttonDisabled:!0},n}return Object(m.a)(t,e),Object(r.a)(t,[{key:"render",value:function(){return i.a.createElement("div",null,i.a.createElement("div",{className:"coin-game"},i.a.createElement($.a,{className:"coin-game__content"},i.a.createElement(q.a,null,i.a.createElement(z.a,{xs:12},i.a.createElement(J.a,{className:"coin-game__logo",src:A.a})),i.a.createElement(z.a,{xs:12,className:"mt-5 mt-md-0"},i.a.createElement(J.a,{className:"coin-game__title",src:Z.a})),i.a.createElement(z.a,{xs:12},i.a.createElement(se,{gameId:this.state.gameId,promotions:U,currentPromo:this.state.currentPromo,play:this.play,buttonDisabled:this.state.buttonDisabled,enableButton:this.enableButton})),i.a.createElement(z.a,{xs:12},i.a.createElement("p",{className:"text--accent coin-game__slogan"},"Escape to a better world. ",i.a.createElement("span",null,"Escape to Planet 7"))))),i.a.createElement(fe,{isClosed:this.state.curtainsClosed,currentPromo:this.state.currentPromo}),i.a.createElement(ve,null),i.a.createElement(ie,{imagesList:U.map(function(e){return e.img})}),i.a.createElement(ie,{imagesList:U.map(function(e){return e.bg_img})}),i.a.createElement(ie,{imagesList:U.map(function(e){return e.bonus_img})})),i.a.createElement(be,{promotions:U,play:this.play,buttonDisabled:this.state.buttonDisabled}))}}]),t}(a.Component)),_e=(n(63),function(e){function t(){return Object(c.a)(this,t),Object(s.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(r.a)(t,[{key:"render",value:function(){return i.a.createElement("div",{className:"app"},i.a.createElement("div",{className:"app__coin-game"},i.a.createElement(he,null)))}}]),t}(a.Component));n(65),n(67),n(69);l.a.render(i.a.createElement(_e,null),document.getElementById("root"))}],[[43,2,1]]]);
//# sourceMappingURL=main.c0e8a68c.chunk.js.map