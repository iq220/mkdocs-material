!function(r){var e={};function t(n){if(e[n])return e[n].exports;var o=e[n]={i:n,l:!1,exports:{}};return r[n].call(o.exports,o,o.exports,t),o.l=!0,o.exports}t.m=r,t.c=e,t.d=function(r,e,n){t.o(r,e)||Object.defineProperty(r,e,{enumerable:!0,get:n})},t.r=function(r){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(r,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(r,"__esModule",{value:!0})},t.t=function(r,e){if(1&e&&(r=t(r)),8&e)return r;if(4&e&&"object"==typeof r&&r&&r.__esModule)return r;var n=Object.create(null);if(t.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:r}),2&e&&"string"!=typeof r)for(var o in r)t.d(n,o,function(e){return r[e]}.bind(null,o));return n},t.n=function(r){var e=r&&r.__esModule?function(){return r.default}:function(){return r};return t.d(e,"a",e),e},t.o=function(r,e){return Object.prototype.hasOwnProperty.call(r,e)},t.p="",t(t.s=1)}([function(r,e,t){var n,o=function(){var r=String.fromCharCode,e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=",t="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+-$",n={};function o(r,e){if(!n[r]){n[r]={};for(var t=0;t<r.length;t++)n[r][r.charAt(t)]=t}return n[r][e]}var i={compressToBase64:function(r){if(null==r)return"";var t=i._compress(r,6,(function(r){return e.charAt(r)}));switch(t.length%4){default:case 0:return t;case 1:return t+"===";case 2:return t+"==";case 3:return t+"="}},decompressFromBase64:function(r){return null==r?"":""==r?null:i._decompress(r.length,32,(function(t){return o(e,r.charAt(t))}))},compressToUTF16:function(e){return null==e?"":i._compress(e,15,(function(e){return r(e+32)}))+" "},decompressFromUTF16:function(r){return null==r?"":""==r?null:i._decompress(r.length,16384,(function(e){return r.charCodeAt(e)-32}))},compressToUint8Array:function(r){for(var e=i.compress(r),t=new Uint8Array(2*e.length),n=0,o=e.length;n<o;n++){var s=e.charCodeAt(n);t[2*n]=s>>>8,t[2*n+1]=s%256}return t},decompressFromUint8Array:function(e){if(null==e)return i.decompress(e);for(var t=new Array(e.length/2),n=0,o=t.length;n<o;n++)t[n]=256*e[2*n]+e[2*n+1];var s=[];return t.forEach((function(e){s.push(r(e))})),i.decompress(s.join(""))},compressToEncodedURIComponent:function(r){return null==r?"":i._compress(r,6,(function(r){return t.charAt(r)}))},decompressFromEncodedURIComponent:function(r){return null==r?"":""==r?null:(r=r.replace(/ /g,"+"),i._decompress(r.length,32,(function(e){return o(t,r.charAt(e))})))},compress:function(e){return i._compress(e,16,(function(e){return r(e)}))},_compress:function(r,e,t){if(null==r)return"";var n,o,i,s={},u={},c="",a="",p="",l=2,f=3,h=2,d=[],m=0,v=0;for(i=0;i<r.length;i+=1)if(c=r.charAt(i),Object.prototype.hasOwnProperty.call(s,c)||(s[c]=f++,u[c]=!0),a=p+c,Object.prototype.hasOwnProperty.call(s,a))p=a;else{if(Object.prototype.hasOwnProperty.call(u,p)){if(p.charCodeAt(0)<256){for(n=0;n<h;n++)m<<=1,v==e-1?(v=0,d.push(t(m)),m=0):v++;for(o=p.charCodeAt(0),n=0;n<8;n++)m=m<<1|1&o,v==e-1?(v=0,d.push(t(m)),m=0):v++,o>>=1}else{for(o=1,n=0;n<h;n++)m=m<<1|o,v==e-1?(v=0,d.push(t(m)),m=0):v++,o=0;for(o=p.charCodeAt(0),n=0;n<16;n++)m=m<<1|1&o,v==e-1?(v=0,d.push(t(m)),m=0):v++,o>>=1}0==--l&&(l=Math.pow(2,h),h++),delete u[p]}else for(o=s[p],n=0;n<h;n++)m=m<<1|1&o,v==e-1?(v=0,d.push(t(m)),m=0):v++,o>>=1;0==--l&&(l=Math.pow(2,h),h++),s[a]=f++,p=String(c)}if(""!==p){if(Object.prototype.hasOwnProperty.call(u,p)){if(p.charCodeAt(0)<256){for(n=0;n<h;n++)m<<=1,v==e-1?(v=0,d.push(t(m)),m=0):v++;for(o=p.charCodeAt(0),n=0;n<8;n++)m=m<<1|1&o,v==e-1?(v=0,d.push(t(m)),m=0):v++,o>>=1}else{for(o=1,n=0;n<h;n++)m=m<<1|o,v==e-1?(v=0,d.push(t(m)),m=0):v++,o=0;for(o=p.charCodeAt(0),n=0;n<16;n++)m=m<<1|1&o,v==e-1?(v=0,d.push(t(m)),m=0):v++,o>>=1}0==--l&&(l=Math.pow(2,h),h++),delete u[p]}else for(o=s[p],n=0;n<h;n++)m=m<<1|1&o,v==e-1?(v=0,d.push(t(m)),m=0):v++,o>>=1;0==--l&&(l=Math.pow(2,h),h++)}for(o=2,n=0;n<h;n++)m=m<<1|1&o,v==e-1?(v=0,d.push(t(m)),m=0):v++,o>>=1;for(;;){if(m<<=1,v==e-1){d.push(t(m));break}v++}return d.join("")},decompress:function(r){return null==r?"":""==r?null:i._decompress(r.length,32768,(function(e){return r.charCodeAt(e)}))},_decompress:function(e,t,n){var o,i,s,u,c,a,p,l=[],f=4,h=4,d=3,m="",v=[],y={val:n(0),position:t,index:1};for(o=0;o<3;o+=1)l[o]=o;for(s=0,c=Math.pow(2,2),a=1;a!=c;)u=y.val&y.position,y.position>>=1,0==y.position&&(y.position=t,y.val=n(y.index++)),s|=(u>0?1:0)*a,a<<=1;switch(s){case 0:for(s=0,c=Math.pow(2,8),a=1;a!=c;)u=y.val&y.position,y.position>>=1,0==y.position&&(y.position=t,y.val=n(y.index++)),s|=(u>0?1:0)*a,a<<=1;p=r(s);break;case 1:for(s=0,c=Math.pow(2,16),a=1;a!=c;)u=y.val&y.position,y.position>>=1,0==y.position&&(y.position=t,y.val=n(y.index++)),s|=(u>0?1:0)*a,a<<=1;p=r(s);break;case 2:return""}for(l[3]=p,i=p,v.push(p);;){if(y.index>e)return"";for(s=0,c=Math.pow(2,d),a=1;a!=c;)u=y.val&y.position,y.position>>=1,0==y.position&&(y.position=t,y.val=n(y.index++)),s|=(u>0?1:0)*a,a<<=1;switch(p=s){case 0:for(s=0,c=Math.pow(2,8),a=1;a!=c;)u=y.val&y.position,y.position>>=1,0==y.position&&(y.position=t,y.val=n(y.index++)),s|=(u>0?1:0)*a,a<<=1;l[h++]=r(s),p=h-1,f--;break;case 1:for(s=0,c=Math.pow(2,16),a=1;a!=c;)u=y.val&y.position,y.position>>=1,0==y.position&&(y.position=t,y.val=n(y.index++)),s|=(u>0?1:0)*a,a<<=1;l[h++]=r(s),p=h-1,f--;break;case 2:return v.join("")}if(0==f&&(f=Math.pow(2,d),d++),l[p])m=l[p];else{if(p!==h)return null;m=i+i.charAt(0)}v.push(m),l[h++]=i+m.charAt(0),i=m,0==--f&&(f=Math.pow(2,d),d++)}}};return i}();void 0===(n=function(){return o}.call(e,t,e,r))||(r.exports=n)},function(r,e,t){"use strict";t.r(e);var n,o=t(0);function i(r){switch(r.type){case n.STRING:return{type:n.PACKED,data:Object(o.compress)(r.data)};case n.PACKED:return{type:n.STRING,data:Object(o.decompress)(r.data)}}}!function(r){r[r.STRING=0]="STRING",r[r.PACKED=1]="PACKED"}(n||(n={})),t.d(e,"handler",(function(){return i})),addEventListener("message",(function(r){postMessage(i(r.data))}))}]);
//# sourceMappingURL=packer.js.map