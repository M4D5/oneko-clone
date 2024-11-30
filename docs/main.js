"use strict";(()=>{var v=Object.defineProperty;var M=(n,t,e)=>t in n?v(n,t,{enumerable:!0,configurable:!0,writable:!0,value:e}):n[t]=e;var r=(n,t,e)=>(M(n,typeof t!="symbol"?t+"":t,e),e);var g="data:image/gif;base64,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";function a(n,t){return{options:{mode:"loop"},frames:[{x:n[0],y:n[1],delay:250},{x:t[0],y:t[1],delay:250}]}}var i={idle:{options:{mode:"loop",loopStart:3},frames:[{x:3,y:3,delay:1500},{x:3,y:2,delay:750},{x:3,y:3,delay:500},{x:2,y:0,delay:500},{x:2,y:1,delay:500}]},surprise:{frames:[{x:7,y:3,delay:1e3}]},runN:a([1,2],[1,3]),runNE:a([0,2],[0,3]),runE:a([3,0],[3,1]),runSE:a([5,1],[5,2]),runS:a([7,2],[6,3]),runSW:a([6,1],[5,3]),runW:a([4,2],[4,3]),runNW:a([1,0],[1,1])};function A(n,t){return[t[0]+n[0],t[1]+n[1]]}function y(n,t){return A(n,u(t,-1))}function u(n,t){return[n[0]*t,n[1]*t]}function d(n){return Math.sqrt(n[0]*n[0]+n[1]*n[1])}function b(n,t){return d(y(n,t))}function S(n){return u(n,1/d(n))}function I(n){return Math.atan2(n[0],n[1])}var w=100,V=150,h=class h{constructor(){r(this,"mode","move");r(this,"state","IDLE");r(this,"currentPosition",[0,0]);r(this,"targetPosition",[0,0]);r(this,"directionAnimation",i.runN)}update(t){let e=t/1e3;if(this.state==="RUNNING"){let o=y(this.targetPosition,this.currentPosition);if(d(o)<1){this.currentPosition=this.targetPosition,this.state="IDLE";return}let s=S(o),m=u(s,e*V);this.currentPosition=A(this.currentPosition,m);let x=(3*Math.PI-I(s))/(2*Math.PI),f=Math.floor((x*8+.5)%8);this.directionAnimation=h.directionAnimations[f]}}onMouseUp(t){this.mode==="click"&&this.setTargetPosition([t.clientX,t.clientY])}onMouseMove(t){if(this.mode!=="move")return;let e=[t.clientX,t.clientY];this.state!=="RUNNING"&&b(this.targetPosition,e)<w||this.setTargetPosition(e)}setTargetPosition(t){this.targetPosition=t,this.state==="IDLE"&&(this.state="SURPRISE")}onAnimationComplete(){this.state==="SURPRISE"&&(this.state="RUNNING")}getAnimation(){switch(this.state){case"SURPRISE":return i.surprise;case"RUNNING":return this.directionAnimation;default:return i.idle}}};r(h,"directionAnimations",[i.runN,i.runNE,i.runE,i.runSE,i.runS,i.runSW,i.runW,i.runNW]);var l=h;var p=class{constructor(t){r(this,"currentFrameIndex",0);r(this,"frameStartTime",null);r(this,"currentAnimation");this.currentAnimation=t}update(t){var o,s;return this.frameStartTime===null&&(this.frameStartTime=t),t-this.frameStartTime<this.currentAnimation.frames[this.currentFrameIndex].delay?!1:(this.frameStartTime=t,this.currentFrameIndex===this.currentAnimation.frames.length-1?((o=this.currentAnimation.options)==null?void 0:o.mode)==="loop"?(this.currentFrameIndex=(s=this.currentAnimation.options.loopStart)!=null?s:0,!1):!0:(this.currentFrameIndex++,!1))}setAnimation(t,e){this.currentFrameIndex=0,this.frameStartTime=e,this.currentAnimation=t}getFrame(){return this.currentAnimation.frames[this.currentFrameIndex]}};var c=new l;function F(){let n=document.getElementById("oneko-clone-container");if(!n)return;let t=new p(i.idle);c.currentPosition=[Math.floor(Math.random()*window.innerWidth),Math.floor(Math.random()*window.innerHeight)];let e=document.createElement("div");e.style.width="32px",e.style.height="32px",e.style.position="fixed",e.style.top="0",e.style.left="0",e.style.backgroundImage=`url(${g})`,e.style.backgroundPositionX="0",e.style.backgroundPositionY="0",e.style.backgroundRepeat="no-repeat",n.appendChild(e),window.requestAnimationFrame(o=>N(e,t,o,performance.now()))}function T(n,[t,e]){n.style.transform=`translate(${t}px, ${e}px)`}function E(n,{x:t,y:e}){n.style.backgroundPositionX=-t*32+"px",n.style.backgroundPositionY=-e*32+"px"}function N(n,t,e,o){let s=e-o;c.update(s);let m=c.getAnimation();m!==t.currentAnimation&&t.setAnimation(m,e),t.update(e)&&c.onAnimationComplete(),E(n,t.getFrame()),T(n,c.currentPosition),window.requestAnimationFrame(f=>N(n,t,f,e))}F();window.onmouseup=function(n){c.onMouseUp(n)};window.onmousemove=function(n){c.onMouseMove(n)};})();