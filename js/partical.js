
/* -----------------------------------------------
/* Author : Vincent Garreau  - vincentgarreau.com
/* MIT license: http://opensource.org/licenses/MIT
/* GitHub : https://github.com/VincentGarreau/particles.js
/* How to use? : Check the GitHub README
/* v1.0.3
/* ----------------------------------------------- */
function launchParticlesJS(a,e){var i=document.querySelector("#"+a+" > canvas");pJS={canvas:{el:i,w:i.offsetWidth,h:i.offsetHeight},particles:{color:"#fff",shape:"circle",opacity:1,size:2.5,size_random:true,nb:200,line_linked:{enable_auto:true,distance:100,color:"#fff",opacity:1,width:1,condensed_mode:{enable:true,rotateX:65000,rotateY:65000}},anim:{enable:true,speed:1},array:[]},interactivity:{enable:true,mouse:{distance:100},detect_on:"canvas",mode:"grab",line_linked:{opacity:1},events:{onclick:{enable:true,mode:"push",nb:4}}},retina_detect:false,fn:{vendors:{interactivity:{}}}};if(e){if(e.particles){var b=e.particles;if(b.color){pJS.particles.color=b.color}if(b.shape){pJS.particles.shape=b.shape}if(b.opacity){pJS.particles.opacity=b.opacity}if(b.size){pJS.particles.size=b.size}if(b.size_random==false){pJS.particles.size_random=b.size_random}if(b.nb){pJS.particles.nb=b.nb}if(b.line_linked){var j=b.line_linked;if(j.enable_auto==false){pJS.particles.line_linked.enable_auto=j.enable_auto}if(j.distance){pJS.particles.line_linked.distance=j.distance}if(j.color){pJS.particles.line_linked.color=j.color}if(j.opacity){pJS.particles.line_linked.opacity=j.opacity}if(j.width){pJS.particles.line_linked.width=j.width}if(j.condensed_mode){var g=j.condensed_mode;if(g.enable==false){pJS.particles.line_linked.condensed_mode.enable=g.enable}if(g.rotateX){pJS.particles.line_linked.condensed_mode.rotateX=g.rotateX}if(g.rotateY){pJS.particles.line_linked.condensed_mode.rotateY=g.rotateY}}}if(b.anim){var k=b.anim;if(k.enable==false){pJS.particles.anim.enable=k.enable}if(k.speed){pJS.particles.anim.speed=k.speed}}}if(e.interactivity){var c=e.interactivity;if(c.enable==false){pJS.interactivity.enable=c.enable}if(c.mouse){if(c.mouse.distance){pJS.interactivity.mouse.distance=c.mouse.distance}}if(c.detect_on){pJS.interactivity.detect_on=c.detect_on}if(c.mode){pJS.interactivity.mode=c.mode}if(c.line_linked){if(c.line_linked.opacity){pJS.interactivity.line_linked.opacity=c.line_linked.opacity}}if(c.events){var d=c.events;if(d.onclick){var h=d.onclick;if(h.enable==false){pJS.interactivity.events.onclick.enable=false}if(h.mode!="push"){pJS.interactivity.events.onclick.mode=h.mode}if(h.nb){pJS.interactivity.events.onclick.nb=h.nb}}}}pJS.retina_detect=e.retina_detect}pJS.particles.color_rgb=hexToRgb(pJS.particles.color);pJS.particles.line_linked.color_rgb_line=hexToRgb(pJS.particles.line_linked.color);if(pJS.retina_detect&&window.devicePixelRatio>1){pJS.retina=true;pJS.canvas.pxratio=window.devicePixelRatio;pJS.canvas.w=pJS.canvas.el.offsetWidth*pJS.canvas.pxratio;pJS.canvas.h=pJS.canvas.el.offsetHeight*pJS.canvas.pxratio;pJS.particles.anim.speed=pJS.particles.anim.speed*pJS.canvas.pxratio;pJS.particles.line_linked.distance=pJS.particles.line_linked.distance*pJS.canvas.pxratio;pJS.particles.line_linked.width=pJS.particles.line_linked.width*pJS.canvas.pxratio;pJS.interactivity.mouse.distance=pJS.interactivity.mouse.distance*pJS.canvas.pxratio}pJS.fn.canvasInit=function(){pJS.canvas.ctx=pJS.canvas.el.getContext("2d")};pJS.fn.canvasSize=function(){pJS.canvas.el.width=pJS.canvas.w;pJS.canvas.el.height=pJS.canvas.h;window.onresize=function(){if(pJS){pJS.canvas.w=pJS.canvas.el.offsetWidth;pJS.canvas.h=pJS.canvas.el.offsetHeight;if(pJS.retina){pJS.canvas.w*=pJS.canvas.pxratio;pJS.canvas.h*=pJS.canvas.pxratio}pJS.canvas.el.width=pJS.canvas.w;pJS.canvas.el.height=pJS.canvas.h;pJS.fn.canvasPaint();if(!pJS.particles.anim.enable){pJS.fn.particlesRemove();pJS.fn.canvasRemove();f()}}}};pJS.fn.canvasPaint=function(){pJS.canvas.ctx.fillRect(0,0,pJS.canvas.w,pJS.canvas.h)};pJS.fn.canvasRemove=function(){pJS.canvas.ctx.clearRect(0,0,pJS.canvas.w,pJS.canvas.h)};pJS.fn.particle=function(n,o,m){this.x=m?m.x:Math.random()*pJS.canvas.w;this.y=m?m.y:Math.random()*pJS.canvas.h;this.radius=(pJS.particles.size_random?Math.random():1)*pJS.particles.size;if(pJS.retina){this.radius*=pJS.canvas.pxratio}this.color=n;this.opacity=o;this.vx=-0.5+Math.random();this.vy=-0.5+Math.random();this.draw=function(){pJS.canvas.ctx.fillStyle="rgba("+this.color.r+","+this.color.g+","+this.color.b+","+this.opacity+")";pJS.canvas.ctx.beginPath();switch(pJS.particles.shape){case"circle":pJS.canvas.ctx.arc(this.x,this.y,this.radius,0,Math.PI*2,false);break;case"edge":pJS.canvas.ctx.rect(this.x,this.y,this.radius*2,this.radius*2);break;case"triangle":pJS.canvas.ctx.moveTo(this.x,this.y-this.radius);pJS.canvas.ctx.lineTo(this.x+this.radius,this.y+this.radius);pJS.canvas.ctx.lineTo(this.x-this.radius,this.y+this.radius);pJS.canvas.ctx.closePath();break}pJS.canvas.ctx.fill()}};pJS.fn.particlesCreate=function(){for(var m=0;m<pJS.particles.nb;m++){pJS.particles.array.push(new pJS.fn.particle(pJS.particles.color_rgb,pJS.particles.opacity))}};pJS.fn.particlesAnimate=function(){for(var n=0;n<pJS.particles.array.length;n++){var q=pJS.particles.array[n];q.x+=q.vx*(pJS.particles.anim.speed/2);q.y+=q.vy*(pJS.particles.anim.speed/2);if(q.x-q.radius>pJS.canvas.w){q.x=q.radius}else{if(q.x+q.radius<0){q.x=pJS.canvas.w+q.radius}}if(q.y-q.radius>pJS.canvas.h){q.y=q.radius}else{if(q.y+q.radius<0){q.y=pJS.canvas.h+q.radius}}for(var m=n+1;m<pJS.particles.array.length;m++){var o=pJS.particles.array[m];if(pJS.particles.line_linked.enable_auto){pJS.fn.vendors.distanceParticles(q,o)}if(pJS.interactivity.enable){switch(pJS.interactivity.mode){case"grab":pJS.fn.vendors.interactivity.grabParticles(q,o);break}}}}};pJS.fn.particlesDraw=function(){pJS.canvas.ctx.clearRect(0,0,pJS.canvas.w,pJS.canvas.h);pJS.fn.particlesAnimate();for(var m=0;m<pJS.particles.array.length;m++){var n=pJS.particles.array[m];n.draw("rgba("+n.color.r+","+n.color.g+","+n.color.b+","+n.opacity+")")}};pJS.fn.particlesRemove=function(){pJS.particles.array=[]};pJS.fn.vendors.distanceParticles=function(t,r){var o=t.x-r.x,n=t.y-r.y,s=Math.sqrt(o*o+n*n);if(s<=pJS.particles.line_linked.distance){var m=pJS.particles.line_linked.color_rgb_line;pJS.canvas.ctx.beginPath();pJS.canvas.ctx.strokeStyle="rgba("+m.r+","+m.g+","+m.b+","+(pJS.particles.line_linked.opacity-s/pJS.particles.line_linked.distance)+")";pJS.canvas.ctx.moveTo(t.x,t.y);pJS.canvas.ctx.lineTo(r.x,r.y);pJS.canvas.ctx.lineWidth=pJS.particles.line_linked.width;pJS.canvas.ctx.stroke();pJS.canvas.ctx.closePath();if(pJS.particles.line_linked.condensed_mode.enable){var o=t.x-r.x,n=t.y-r.y,q=o/(pJS.particles.line_linked.condensed_mode.rotateX*1000),p=n/(pJS.particles.line_linked.condensed_mode.rotateY*1000);r.vx+=q;r.vy+=p}}};pJS.fn.vendors.interactivity.listeners=function(){if(pJS.interactivity.detect_on=="window"){var m=window}else{var m=pJS.canvas.el}m.onmousemove=function(p){if(m==window){var o=p.clientX,n=p.clientY}else{var o=p.offsetX||p.clientX,n=p.offsetY||p.clientY}if(pJS){pJS.interactivity.mouse.pos_x=o;pJS.interactivity.mouse.pos_y=n;if(pJS.retina){pJS.interactivity.mouse.pos_x*=pJS.canvas.pxratio;pJS.interactivity.mouse.pos_y*=pJS.canvas.pxratio}pJS.interactivity.status="mousemove"}};m.onmouseleave=function(n){if(pJS){pJS.interactivity.mouse.pos_x=0;pJS.interactivity.mouse.pos_y=0;pJS.interactivity.status="mouseleave"}};if(pJS.interactivity.events.onclick.enable){switch(pJS.interactivity.events.onclick.mode){case"push":m.onclick=function(o){if(pJS){for(var n=0;n<pJS.interactivity.events.onclick.nb;n++){pJS.particles.array.push(new pJS.fn.particle(pJS.particles.color_rgb,pJS.particles.opacity,{x:pJS.interactivity.mouse.pos_x,y:pJS.interactivity.mouse.pos_y}))}}};break;case"remove":m.onclick=function(n){pJS.particles.array.splice(0,pJS.interactivity.events.onclick.nb)};break}}};pJS.fn.vendors.interactivity.grabParticles=function(r,q){var u=r.x-q.x,s=r.y-q.y,p=Math.sqrt(u*u+s*s);var t=r.x-pJS.interactivity.mouse.pos_x,n=r.y-pJS.interactivity.mouse.pos_y,o=Math.sqrt(t*t+n*n);if(p<=pJS.particles.line_linked.distance&&o<=pJS.interactivity.mouse.distance&&pJS.interactivity.status=="mousemove"){var m=pJS.particles.line_linked.color_rgb_line;pJS.canvas.ctx.beginPath();pJS.canvas.ctx.strokeStyle="rgba("+m.r+","+m.g+","+m.b+","+(pJS.interactivity.line_linked.opacity-o/pJS.interactivity.mouse.distance)+")";pJS.canvas.ctx.moveTo(r.x,r.y);pJS.canvas.ctx.lineTo(pJS.interactivity.mouse.pos_x,pJS.interactivity.mouse.pos_y);pJS.canvas.ctx.lineWidth=pJS.particles.line_linked.width;pJS.canvas.ctx.stroke();pJS.canvas.ctx.closePath()}};pJS.fn.vendors.destroy=function(){cancelAnimationFrame(pJS.fn.requestAnimFrame);i.remove();delete pJS};function f(){pJS.fn.canvasInit();pJS.fn.canvasSize();pJS.fn.canvasPaint();pJS.fn.particlesCreate();pJS.fn.particlesDraw()}function l(){pJS.fn.particlesDraw();pJS.fn.requestAnimFrame=requestAnimFrame(l)}f();if(pJS.particles.anim.enable){l()}if(pJS.interactivity.enable){pJS.fn.vendors.interactivity.listeners()}}window.requestAnimFrame=(function(){return window.requestAnimationFrame||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||window.oRequestAnimationFrame||window.msRequestAnimationFrame||function(a){window.setTimeout(a,1000/60)}})();window.cancelRequestAnimFrame=(function(){return window.cancelAnimationFrame||window.webkitCancelRequestAnimationFrame||window.mozCancelRequestAnimationFrame||window.oCancelRequestAnimationFrame||window.msCancelRequestAnimationFrame||clearTimeout})();function hexToRgb(c){var b=/^#?([a-f\d])([a-f\d])([a-f\d])$/i;c=c.replace(b,function(e,h,f,d){return h+h+f+f+d+d});var a=/^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(c);return a?{r:parseInt(a[1],16),g:parseInt(a[2],16),b:parseInt(a[3],16)}:null}window.particlesJS=function(d,c){if(typeof(d)!="string"){c=d;d="particles-js"}if(!d){d="particles-js"}var b=document.createElement("canvas");b.style.width="100%";b.style.height="100%";var a=document.getElementById(d).appendChild(b);if(a!=null){launchParticlesJS(d,c)}};

/* particlesJS('dom-id', params);
/* @dom-id : set the html tag id [string, optional, default value : particles-js]
/* @params: set the params [object, optional, default values : check particles.js] */

/* config dom id (optional) + config particles params */
particlesJS('particles-js', {
  particles: {
    color: '#A38671',
    shape: 'circle', // "circle", "edge" or "triangle"
    opacity: 1,
    size: 4,
    size_random: true,
    nb: 150,
    line_linked: {
      enable_auto: true,
      distance: 100,
      color: '#A38671',
      opacity: 1,
      width: 1,
      condensed_mode: {
        enable: false,
        rotateX: 600,
        rotateY: 600
      }
    },
    anim: {
      enable: true,
      speed: 2
    }
  },
  interactivity: {
    enable: true,
    mouse: {
      distance: 250
    },
    detect_on: 'canvas', // "canvas" or "window"
    mode: 'grab',
    line_linked: {
      opacity: .5
    },
    events: {
      onclick: {
        enable: true,
        mode: 'push', // "push" or "remove" (particles)
        nb: 4
      }
    } 
  },
  /* Retina Display Support */
  retina_detect: true
});

