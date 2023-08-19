"use strict";(self.webpackChunkprotfolio=self.webpackChunkprotfolio||[]).push([[37],{37:(xt,E,P)=>{P.r(E),P.d(E,{default:()=>dt});var c=P(412),B=function(){if(typeof window<"u"){if(window.devicePixelRatio)return window.devicePixelRatio;var t=window.screen;if(t)return(t.deviceXDPI||1)/(t.logicalXDPI||1)}return 1}(),b_textSize=function(t,n,r){var l,e=[].concat(n),o=e.length,i=t.font,a=0;for(t.font=r.string,l=0;l<o;++l)a=Math.max(t.measureText(e[l]).width,a);return t.font=i,{height:o*r.lineHeight,width:a}};function C(t,n){var r=n.x,e=n.y;if(null===r)return{x:0,y:-1};if(null===e)return{x:1,y:0};var o=t.x-r,i=t.y-e,a=Math.sqrt(o*o+i*i);return{x:a?o/a:0,y:a?i/a:-1}}var X=0,D=1,W=2,z=4,R=8;function m(t,n,r){var e=X;return t<r.left?e|=D:t>r.right&&(e|=W),n<r.top?e|=R:n>r.bottom&&(e|=z),e}function w(t,n){var o,i,r=n.anchor,e=t;return n.clamp&&(e=function J(t,n){for(var s,u,h,r=t.x0,e=t.y0,o=t.x1,i=t.y1,a=m(r,e,n),l=m(o,i,n);a|l&&!(a&l);)(s=a||l)&R?(u=r+(o-r)*(n.top-e)/(i-e),h=n.top):s&z?(u=r+(o-r)*(n.bottom-e)/(i-e),h=n.bottom):s&W?(h=e+(i-e)*(n.right-r)/(o-r),u=n.right):s&D&&(h=e+(i-e)*(n.left-r)/(o-r),u=n.left),s===a?a=m(r=u,e=h,n):l=m(o=u,i=h,n);return{x0:r,x1:o,y0:e,y1:i}}(e,n.area)),"start"===r?(o=e.x0,i=e.y0):"end"===r?(o=e.x1,i=e.y1):(o=(e.x0+e.x1)/2,i=(e.y0+e.y1)/2),function G(t,n,r,e,o){switch(o){case"center":r=e=0;break;case"bottom":r=0,e=1;break;case"right":r=1,e=0;break;case"left":r=-1,e=0;break;case"top":r=0,e=-1;break;case"start":r=-r,e=-e;break;case"end":break;default:o*=Math.PI/180,r=Math.cos(o),e=Math.sin(o)}return{x:t,y:n,vx:r,vy:e}}(o,i,t.vx,t.vy,n.align)}var M={arc:function(t,n){var r=(t.startAngle+t.endAngle)/2,e=Math.cos(r),o=Math.sin(r),i=t.innerRadius,a=t.outerRadius;return w({x0:t.x+e*i,y0:t.y+o*i,x1:t.x+e*a,y1:t.y+o*a,vx:e,vy:o},n)},point:function(t,n){var r=C(t,n.origin),e=r.x*t.options.radius,o=r.y*t.options.radius;return w({x0:t.x-e,y0:t.y-o,x1:t.x+e,y1:t.y+o,vx:r.x,vy:r.y},n)},bar:function(t,n){var r=C(t,n.origin),e=t.x,o=t.y,i=0,a=0;return t.horizontal?(e=Math.min(t.x,t.base),i=Math.abs(t.base-t.x)):(o=Math.min(t.y,t.base),a=Math.abs(t.base-t.y)),w({x0:e,y0:o+a,x1:e+i,y1:o,vx:r.x,vy:r.y},n)},fallback:function(t,n){var r=C(t,n.origin);return w({x0:t.x,y0:t.y,x1:t.x+(t.width||0),y1:t.y+(t.height||0),vx:r.x,vy:r.y},n)}},y=function(t){return Math.round(t*B)/B};function K(t,n){var r=n.chart.getDatasetMeta(n.datasetIndex).vScale;if(!r)return null;if(void 0!==r.xCenter&&void 0!==r.yCenter)return{x:r.xCenter,y:r.yCenter};var e=r.getBasePixel();return t.horizontal?{x:e,y:null}:{x:null,y:e}}function q(t){return t instanceof c.A?M.arc:t instanceof c.P?M.point:t instanceof c.B?M.bar:M.fallback}function tt(t,n,r){var e=t.shadowBlur,o=r.stroked,i=y(r.x),a=y(r.y),l=y(r.w);o&&t.strokeText(n,i,a,l),r.filled&&(e&&o&&(t.shadowBlur=0),t.fillText(n,i,a,l),e&&o&&(t.shadowBlur=e))}var T=function(t,n,r,e){var o=this;o._config=t,o._index=e,o._model=null,o._rects=null,o._ctx=n,o._el=r};(0,c.m)(T.prototype,{_modelize:function(t,n,r,e){var o=this,i=o._index,a=(0,c.t)((0,c.r)([r.font,{}],e,i)),l=(0,c.r)([r.color,c.d.color],e,i);return{align:(0,c.r)([r.align,"center"],e,i),anchor:(0,c.r)([r.anchor,"center"],e,i),area:e.chart.chartArea,backgroundColor:(0,c.r)([r.backgroundColor,null],e,i),borderColor:(0,c.r)([r.borderColor,null],e,i),borderRadius:(0,c.r)([r.borderRadius,0],e,i),borderWidth:(0,c.r)([r.borderWidth,0],e,i),clamp:(0,c.r)([r.clamp,!1],e,i),clip:(0,c.r)([r.clip,!1],e,i),color:l,display:t,font:a,lines:n,offset:(0,c.r)([r.offset,4],e,i),opacity:(0,c.r)([r.opacity,1],e,i),origin:K(o._el,e),padding:(0,c.a)((0,c.r)([r.padding,4],e,i)),positioner:q(o._el),rotation:(0,c.r)([r.rotation,0],e,i)*(Math.PI/180),size:b_textSize(o._ctx,n,a),textAlign:(0,c.r)([r.textAlign,"start"],e,i),textShadowBlur:(0,c.r)([r.textShadowBlur,0],e,i),textShadowColor:(0,c.r)([r.textShadowColor,l],e,i),textStrokeColor:(0,c.r)([r.textStrokeColor,l],e,i),textStrokeWidth:(0,c.r)([r.textStrokeWidth,0],e,i)}},update:function(t){var a,l,s,n=this,r=null,e=null,o=n._index,i=n._config,u=(0,c.r)([i.display,!0],t,o);u&&(l=(0,c.v)((0,c.c)(i.formatter,[a=t.dataset.data[o],t]),a),(s=(0,c.i)(l)?[]:function(t){var r,n=[];for(t=[].concat(t);t.length;)"string"==typeof(r=t.pop())?n.unshift.apply(n,r.split("\n")):Array.isArray(r)?t.push.apply(t,r):(0,c.i)(t)||n.unshift(""+r);return n}(l)).length&&(e=function V(t){var n=t.borderWidth||0,r=t.padding,e=t.size.height,o=t.size.width,i=-o/2,a=-e/2;return{frame:{x:i-r.left-n,y:a-r.top-n,w:o+r.width+2*n,h:e+r.height+2*n},text:{x:i,y:a,w:o,h:e}}}(r=n._modelize(u,s,i,t)))),n._model=r,n._rects=e},geometry:function(){return this._rects?this._rects.frame:{}},rotation:function(){return this._model?this._model.rotation:0},visible:function(){return this._model&&this._model.opacity},model:function(){return this._model},draw:function(t,n){var a,e=t.ctx,o=this._model,i=this._rects;this.visible()&&(e.save(),o.clip&&(a=o.area,e.beginPath(),e.rect(a.left,a.top,a.right-a.left,a.bottom-a.top),e.clip()),e.globalAlpha=function(t,n,r){return Math.max(t,Math.min(n,r))}(0,o.opacity,1),e.translate(y(n.x),y(n.y)),e.rotate(o.rotation),function Y(t,n,r){var e=r.backgroundColor,o=r.borderColor,i=r.borderWidth;!e&&(!o||!i)||(t.beginPath(),function Q(t,n,r,e,o,i){var a=Math.PI/2;if(i){var l=Math.min(i,o/2,e/2),s=n+l,u=r+l,h=n+e-l,d=r+o-l;t.moveTo(n,u),s<h&&u<d?(t.arc(s,u,l,-Math.PI,-a),t.arc(h,u,l,-a,0),t.arc(h,d,l,0,a),t.arc(s,d,l,a,Math.PI)):s<h?(t.moveTo(s,r),t.arc(h,u,l,-a,a),t.arc(s,u,l,a,Math.PI+a)):u<d?(t.arc(s,u,l,-Math.PI,0),t.arc(s,d,l,0,Math.PI)):t.arc(s,u,l,-Math.PI,Math.PI),t.closePath(),t.moveTo(n,r)}else t.rect(n,r,e,o)}(t,y(n.x)+i/2,y(n.y)+i/2,y(n.w)-i,y(n.h)-i,r.borderRadius),t.closePath(),e&&(t.fillStyle=e,t.fill()),o&&i&&(t.strokeStyle=o,t.lineWidth=i,t.lineJoin="miter",t.stroke()))}(e,i.frame,o),function rt(t,n,r,e){var x,o=e.textAlign,i=e.color,a=!!i,l=e.font,s=n.length,u=e.textStrokeColor,h=e.textStrokeWidth,d=u&&h;if(s&&(a||d))for(r=function Z(t,n,r){var e=r.lineHeight,o=t.w,i=t.x;return"center"===n?i+=o/2:("end"===n||"right"===n)&&(i+=o),{h:e,w:o,x:i,y:t.y+e/2}}(r,o,l),t.font=l.string,t.textAlign=o,t.textBaseline="middle",t.shadowBlur=e.textShadowBlur,t.shadowColor=e.textShadowColor,a&&(t.fillStyle=i),d&&(t.lineJoin="round",t.lineWidth=h,t.strokeStyle=u),x=0,s=n.length;x<s;++x)tt(t,n[x],{stroked:d,filled:a,w:r.w,x:r.x,y:r.y+r.h*x})}(e,o.lines,i.text,o),e.restore())}});var et=Number.MIN_SAFE_INTEGER||-9007199254740991,nt=Number.MAX_SAFE_INTEGER||9007199254740991;function p(t,n,r){var e=Math.cos(r),o=Math.sin(r),i=n.x,a=n.y;return{x:i+e*(t.x-i)-o*(t.y-a),y:a+o*(t.x-i)+e*(t.y-a)}}function N(t,n){var i,a,u,r=nt,e=et,o=n.origin;for(i=0;i<t.length;++i)u=n.vx*((a=t[i]).x-o.x)+n.vy*(a.y-o.y),r=Math.min(r,u),e=Math.max(e,u);return{min:r,max:e}}function k(t,n){var r=n.x-t.x,e=n.y-t.y,o=Math.sqrt(r*r+e*e);return{vx:(n.x-t.x)/o,vy:(n.y-t.y)/o,origin:t,ln:o}}var O=function(){this._rotation=0,this._rect={x:0,y:0,w:0,h:0}};function U(t,n,r){var e=n.positioner(t,n),o=e.vx,i=e.vy;if(!o&&!i)return{x:e.x,y:e.y};var a=r.w,l=r.h,s=n.rotation,u=Math.abs(a/2*Math.cos(s))+Math.abs(l/2*Math.sin(s)),h=Math.abs(a/2*Math.sin(s))+Math.abs(l/2*Math.cos(s)),d=1/Math.max(Math.abs(o),Math.abs(i));return u*=o*d,h*=i*d,{x:e.x+(u+=n.offset*o),y:e.y+(h+=n.offset*i)}}(0,c.m)(O.prototype,{center:function(){var t=this._rect;return{x:t.x+t.w/2,y:t.y+t.h/2}},update:function(t,n,r){this._rotation=r,this._rect={x:n.x+t.x,y:n.y+t.y,w:n.w,h:n.h}},contains:function(t){var n=this,e=n._rect;return!((t=p(t,n.center(),-n._rotation)).x<e.x-1||t.y<e.y-1||t.x>e.x+e.w+2||t.y>e.y+e.h+2)},intersects:function(t){var o,i,a,n=this._points(),r=t._points(),e=[k(n[0],n[1]),k(n[0],n[3])];for(this._rotation!==t._rotation&&e.push(k(r[0],r[1]),k(r[0],r[3])),o=0;o<e.length;++o)if(i=N(n,e[o]),a=N(r,e[o]),i.max<a.min||a.max<i.min)return!1;return!0},_points:function(){var t=this,n=t._rect,r=t._rotation,e=t.center();return[p({x:n.x,y:n.y},e,r),p({x:n.x+n.w,y:n.y},e,r),p({x:n.x+n.w,y:n.y+n.h},e,r),p({x:n.x,y:n.y+n.h},e,r)]}});var g={prepare:function(t){var r,e,o,i,a,n=[];for(r=0,o=t.length;r<o;++r)for(e=0,i=t[r].length;e<i;++e)n.push(a=t[r][e]),a.$layout={_box:new O,_hidable:!1,_visible:!0,_set:r,_idx:a._index};return n.sort(function(l,s){var u=l.$layout,h=s.$layout;return u._idx===h._idx?h._set-u._set:h._idx-u._idx}),this.update(n),n},update:function(t){var r,e,o,i,a,n=!1;for(r=0,e=t.length;r<e;++r)i=(o=t[r]).model(),(a=o.$layout)._hidable=i&&"auto"===i.display,a._visible=o.visible(),n|=a._hidable;n&&function it(t){var n,r,e,o,i,a,l;for(n=0,r=t.length;n<r;++n)(o=(e=t[n]).$layout)._visible&&(l=new Proxy(e._el,{get:(s,u)=>s.getProps([u],!0)[u]}),i=e.geometry(),a=U(l,e.model(),i),o._box.update(a,i,e.rotation()));(function ot(t,n){var r,e,o,i;for(r=t.length-1;r>=0;--r)for(o=t[r].$layout,e=r-1;e>=0&&o._visible;--e)(i=t[e].$layout)._visible&&o._box.intersects(i._box)&&n(o,i)})(t,function(s,u){var h=s._hidable,d=u._hidable;h&&d||d?u._visible=!1:h&&(s._visible=!1)})}(t)},lookup:function(t,n){var r,e;for(r=t.length-1;r>=0;--r)if((e=t[r].$layout)&&e._visible&&e._box.contains(n))return t[r];return null},draw:function(t,n){var r,e,o,i,a,l;for(r=0,e=n.length;r<e;++r)(i=(o=n[r]).$layout)._visible&&(a=o.geometry(),l=U(o._el,o.model(),a),i._box.update(l,a,o.rotation()),o.draw(t,l))}},f="$datalabels",j="$default";function I(t,n,r,e){if(n){var a,o=r.$context,i=r.$groups;n[i._set]&&(a=n[i._set][i._key])&&!0===(0,c.c)(a,[o,e])&&(t[f]._dirty=!0,r.update(o))}}var dt={id:"datalabels",defaults:{align:"center",anchor:"center",backgroundColor:null,borderColor:null,borderRadius:0,borderWidth:0,clamp:!1,clip:!1,color:void 0,display:!0,font:{family:void 0,lineHeight:1.2,size:void 0,style:void 0,weight:null},formatter:function(t){if((0,c.i)(t))return null;var r,e,o,n=t;if((0,c.b)(t))if((0,c.i)(t.label))if((0,c.i)(t.r))for(n="",o=0,e=(r=Object.keys(t)).length;o<e;++o)n+=(0!==o?", ":"")+r[o]+": "+t[r[o]];else n=t.r;else n=t.label;return""+n},labels:void 0,listeners:{},offset:4,opacity:1,padding:{top:4,right:4,bottom:4,left:4},rotation:0,textAlign:"start",textStrokeColor:void 0,textStrokeWidth:0,textShadowBlur:0,textShadowColor:void 0},beforeInit:function(t){t[f]={_actives:[]}},beforeUpdate:function(t){var n=t[f];n._listened=!1,n._listeners={},n._datasets=[],n._labels=[]},afterDatasetUpdate:function(t,n,r){var d,x,H,L,$,F,_,v,e=n.index,o=t[f],i=o._datasets[e]=[],a=t.isDatasetVisible(e),l=t.data.datasets[e],s=function st(t,n){var i,a,r=t.datalabels,e={},o=[];return!1===r?null:(!0===r&&(r={}),n=(0,c.m)({},[n,r]),i=n.labels||{},a=Object.keys(i),delete n.labels,a.length?a.forEach(function(l){i[l]&&o.push((0,c.m)({},[n,i[l],{_key:l}]))}):o.push(n),e=o.reduce(function(l,s){return(0,c.e)(s.listeners||{},function(u,h){l[h]=l[h]||{},l[h][s._key||j]=u}),delete s.listeners,l},{}),{labels:o,listeners:e})}(l,r),u=n.meta.data||[],h=t.ctx;for(h.save(),d=0,H=u.length;d<H;++d)if((_=u[d])[f]=[],a&&_&&t.getDataVisibility(d)&&!_.skip)for(x=0,L=s.labels.length;x<L;++x)F=($=s.labels[x])._key,(v=new T($,h,_,d)).$groups={_set:e,_key:F||j},v.$context={active:!1,chart:t,dataIndex:d,dataset:l,datasetIndex:e},v.update(v.$context),_[f].push(v),i.push(v);h.restore(),(0,c.m)(o._listeners,s.listeners,{merger:function(S,A,ft){A[S]=A[S]||{},A[S][n.index]=ft[S],o._listened=!0}})},afterUpdate:function(t){t[f]._labels=g.prepare(t[f]._datasets)},afterDatasetsDraw:function(t){g.draw(t,t[f]._labels)},beforeEvent:function(t,n){if(t[f]._listened){var r=n.event;switch(r.type){case"mousemove":case"mouseout":!function ct(t,n){var o,i,r=t[f],e=r._listeners;if(e.enter||e.leave){if("mousemove"===n.type)i=g.lookup(r._labels,n);else if("mouseout"!==n.type)return;o=r._hovered,r._hovered=i,function ut(t,n,r,e,o){var i,a;!r&&!e||(r?e?r!==e&&(a=i=!0):a=!0:i=!0,a&&I(t,n.leave,r,o),i&&I(t,n.enter,e,o))}(t,e,o,i,n)}}(t,r);break;case"click":!function ht(t,n){var r=t[f],e=r._listeners.click,o=e&&g.lookup(r._labels,n);o&&I(t,e,o,n)}(t,r)}}},afterEvent:function(t){var i,a,l,s,u,h,d,n=t[f],o=function(t,n){var o,i,a,l,r=t.slice(),e=[];for(o=0,a=n.length;o<a;++o)-1===(i=r.indexOf(l=n[o]))?e.push([l,1]):r.splice(i,1);for(o=0,a=r.length;o<a;++o)e.push([r[o],-1]);return e}(n._actives,n._actives=t.getActiveElements());for(i=0,a=o.length;i<a;++i)if((u=o[i])[1])for(l=0,s=(d=u[0].element[f]||[]).length;l<s;++l)(h=d[l]).$context.active=1===u[1],h.update(h.$context);(n._dirty||o.length)&&(g.update(n._labels),t.render()),delete n._dirty}}}}]);