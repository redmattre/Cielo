(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))n(s);new MutationObserver(s=>{for(const o of s)if(o.type==="childList")for(const r of o.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&n(r)}).observe(document,{childList:!0,subtree:!0});function t(s){const o={};return s.integrity&&(o.integrity=s.integrity),s.referrerPolicy&&(o.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?o.credentials="include":s.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function n(s){if(s.ep)return;s.ep=!0;const o=t(s);fetch(s.href,o)}})();/**
 * @license
 * Copyright 2010-2024 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Xc="171",Ks={ROTATE:0,DOLLY:1,PAN:2},Vs={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},Lp=0,Pu=1,Ip=2,Gh=1,Op=2,hi=3,yi=0,gn=1,pn=2,$n=0,Zs=1,Wl=2,Du=3,Lu=4,Np=5,ls=100,Up=101,Fp=102,Bp=103,zp=104,kp=200,Hp=201,Gp=202,Vp=203,Xl=204,ql=205,Wp=206,Xp=207,qp=208,jp=209,$p=210,Yp=211,Kp=212,Zp=213,Jp=214,jl=0,$l=1,Yl=2,ao=3,Kl=4,Zl=5,Jl=6,Ql=7,qc=0,Qp=1,em=2,Wi=0,tm=1,nm=2,im=3,sm=4,om=5,rm=6,am=7,Iu="attached",lm="detached",Vh=300,lo=301,co=302,ec=303,tc=304,Ba=306,uo=1e3,Fi=1001,wa=1002,an=1003,Wh=1004,Go=1005,Sn=1006,ca=1007,mi=1008,wi=1009,Xh=1010,qh=1011,nr=1012,jc=1013,_s=1014,qn=1015,Dn=1016,$c=1017,Yc=1018,ho=1020,jh=35902,$h=1021,Yh=1022,Ln=1023,Kh=1024,Zh=1025,Js=1026,fo=1027,Kc=1028,Zc=1029,Jh=1030,Jc=1031,Qc=1033,ua=33776,da=33777,ha=33778,fa=33779,nc=35840,ic=35841,sc=35842,oc=35843,rc=36196,ac=37492,lc=37496,cc=37808,uc=37809,dc=37810,hc=37811,fc=37812,pc=37813,mc=37814,gc=37815,_c=37816,vc=37817,xc=37818,yc=37819,wc=37820,Sc=37821,pa=36492,Mc=36494,Ec=36495,Qh=36283,bc=36284,Tc=36285,Ac=36286,ir=2300,sr=2301,qa=2302,Ou=2400,Nu=2401,Uu=2402,cm=2500,um=0,ef=1,Cc=2,dm=3200,tf=3201,za=0,hm=1,Ni="",Ft="srgb",ln="srgb-linear",Sa="linear",ut="srgb",bs=7680,Fu=519,fm=512,pm=513,mm=514,nf=515,gm=516,_m=517,vm=518,xm=519,Rc=35044,Bu="300 es",gi=2e3,Ma=2001;class ws{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;const n=this._listeners;return n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;const s=this._listeners[e];if(s!==void 0){const o=s.indexOf(t);o!==-1&&s.splice(o,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const n=this._listeners[e.type];if(n!==void 0){e.target=this;const s=n.slice(0);for(let o=0,r=s.length;o<r;o++)s[o].call(this,e);e.target=null}}}const Xt=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let zu=1234567;const Qs=Math.PI/180,po=180/Math.PI;function Yn(){const i=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(Xt[i&255]+Xt[i>>8&255]+Xt[i>>16&255]+Xt[i>>24&255]+"-"+Xt[e&255]+Xt[e>>8&255]+"-"+Xt[e>>16&15|64]+Xt[e>>24&255]+"-"+Xt[t&63|128]+Xt[t>>8&255]+"-"+Xt[t>>16&255]+Xt[t>>24&255]+Xt[n&255]+Xt[n>>8&255]+Xt[n>>16&255]+Xt[n>>24&255]).toLowerCase()}function ke(i,e,t){return Math.max(e,Math.min(t,i))}function eu(i,e){return(i%e+e)%e}function ym(i,e,t,n,s){return n+(i-e)*(s-n)/(t-e)}function wm(i,e,t){return i!==e?(t-i)/(e-i):0}function Ko(i,e,t){return(1-t)*i+t*e}function Sm(i,e,t,n){return Ko(i,e,1-Math.exp(-t*n))}function Mm(i,e=1){return e-Math.abs(eu(i,e*2)-e)}function Em(i,e,t){return i<=e?0:i>=t?1:(i=(i-e)/(t-e),i*i*(3-2*i))}function bm(i,e,t){return i<=e?0:i>=t?1:(i=(i-e)/(t-e),i*i*i*(i*(i*6-15)+10))}function Tm(i,e){return i+Math.floor(Math.random()*(e-i+1))}function Am(i,e){return i+Math.random()*(e-i)}function Cm(i){return i*(.5-Math.random())}function Rm(i){i!==void 0&&(zu=i);let e=zu+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function Pm(i){return i*Qs}function Dm(i){return i*po}function Lm(i){return(i&i-1)===0&&i!==0}function Im(i){return Math.pow(2,Math.ceil(Math.log(i)/Math.LN2))}function Om(i){return Math.pow(2,Math.floor(Math.log(i)/Math.LN2))}function Nm(i,e,t,n,s){const o=Math.cos,r=Math.sin,a=o(t/2),l=r(t/2),c=o((e+n)/2),u=r((e+n)/2),d=o((e-n)/2),h=r((e-n)/2),f=o((n-e)/2),_=r((n-e)/2);switch(s){case"XYX":i.set(a*u,l*d,l*h,a*c);break;case"YZY":i.set(l*h,a*u,l*d,a*c);break;case"ZXZ":i.set(l*d,l*h,a*u,a*c);break;case"XZX":i.set(a*u,l*_,l*f,a*c);break;case"YXY":i.set(l*f,a*u,l*_,a*c);break;case"ZYZ":i.set(l*_,l*f,a*u,a*c);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+s)}}function Xn(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("Invalid component type.")}}function at(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("Invalid component type.")}}const _i={DEG2RAD:Qs,RAD2DEG:po,generateUUID:Yn,clamp:ke,euclideanModulo:eu,mapLinear:ym,inverseLerp:wm,lerp:Ko,damp:Sm,pingpong:Mm,smoothstep:Em,smootherstep:bm,randInt:Tm,randFloat:Am,randFloatSpread:Cm,seededRandom:Rm,degToRad:Pm,radToDeg:Dm,isPowerOfTwo:Lm,ceilPowerOfTwo:Im,floorPowerOfTwo:Om,setQuaternionFromProperEuler:Nm,normalize:at,denormalize:Xn};class me{constructor(e=0,t=0){me.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,n=this.y,s=e.elements;return this.x=s[0]*t+s[3]*n+s[6],this.y=s[1]*t+s[4]*n+s[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=ke(this.x,e.x,t.x),this.y=ke(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=ke(this.x,e,t),this.y=ke(this.y,e,t),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(ke(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(ke(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const n=Math.cos(t),s=Math.sin(t),o=this.x-e.x,r=this.y-e.y;return this.x=o*n-r*s+e.x,this.y=o*s+r*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Fe{constructor(e,t,n,s,o,r,a,l,c){Fe.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,s,o,r,a,l,c)}set(e,t,n,s,o,r,a,l,c){const u=this.elements;return u[0]=e,u[1]=s,u[2]=a,u[3]=t,u[4]=o,u[5]=l,u[6]=n,u[7]=r,u[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,s=t.elements,o=this.elements,r=n[0],a=n[3],l=n[6],c=n[1],u=n[4],d=n[7],h=n[2],f=n[5],_=n[8],g=s[0],m=s[3],p=s[6],y=s[1],w=s[4],v=s[7],b=s[2],E=s[5],C=s[8];return o[0]=r*g+a*y+l*b,o[3]=r*m+a*w+l*E,o[6]=r*p+a*v+l*C,o[1]=c*g+u*y+d*b,o[4]=c*m+u*w+d*E,o[7]=c*p+u*v+d*C,o[2]=h*g+f*y+_*b,o[5]=h*m+f*w+_*E,o[8]=h*p+f*v+_*C,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[1],s=e[2],o=e[3],r=e[4],a=e[5],l=e[6],c=e[7],u=e[8];return t*r*u-t*a*c-n*o*u+n*a*l+s*o*c-s*r*l}invert(){const e=this.elements,t=e[0],n=e[1],s=e[2],o=e[3],r=e[4],a=e[5],l=e[6],c=e[7],u=e[8],d=u*r-a*c,h=a*l-u*o,f=c*o-r*l,_=t*d+n*h+s*f;if(_===0)return this.set(0,0,0,0,0,0,0,0,0);const g=1/_;return e[0]=d*g,e[1]=(s*c-u*n)*g,e[2]=(a*n-s*r)*g,e[3]=h*g,e[4]=(u*t-s*l)*g,e[5]=(s*o-a*t)*g,e[6]=f*g,e[7]=(n*l-c*t)*g,e[8]=(r*t-n*o)*g,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,s,o,r,a){const l=Math.cos(o),c=Math.sin(o);return this.set(n*l,n*c,-n*(l*r+c*a)+r+e,-s*c,s*l,-s*(-c*r+l*a)+a+t,0,0,1),this}scale(e,t){return this.premultiply(ja.makeScale(e,t)),this}rotate(e){return this.premultiply(ja.makeRotation(-e)),this}translate(e,t){return this.premultiply(ja.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,n=e.elements;for(let s=0;s<9;s++)if(t[s]!==n[s])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const ja=new Fe;function sf(i){for(let e=i.length-1;e>=0;--e)if(i[e]>=65535)return!0;return!1}function or(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function Um(){const i=or("canvas");return i.style.display="block",i}const ku={};function Gs(i){i in ku||(ku[i]=!0,console.warn(i))}function Fm(i,e,t){return new Promise(function(n,s){function o(){switch(i.clientWaitSync(e,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:s();break;case i.TIMEOUT_EXPIRED:setTimeout(o,t);break;default:n()}}setTimeout(o,t)})}function Bm(i){const e=i.elements;e[2]=.5*e[2]+.5*e[3],e[6]=.5*e[6]+.5*e[7],e[10]=.5*e[10]+.5*e[11],e[14]=.5*e[14]+.5*e[15]}function zm(i){const e=i.elements;e[11]===-1?(e[10]=-e[10]-1,e[14]=-e[14]):(e[10]=-e[10],e[14]=-e[14]+1)}const Hu=new Fe().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Gu=new Fe().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function km(){const i={enabled:!0,workingColorSpace:ln,spaces:{},convert:function(s,o,r){return this.enabled===!1||o===r||!o||!r||(this.spaces[o].transfer===ut&&(s.r=vi(s.r),s.g=vi(s.g),s.b=vi(s.b)),this.spaces[o].primaries!==this.spaces[r].primaries&&(s.applyMatrix3(this.spaces[o].toXYZ),s.applyMatrix3(this.spaces[r].fromXYZ)),this.spaces[r].transfer===ut&&(s.r=eo(s.r),s.g=eo(s.g),s.b=eo(s.b))),s},fromWorkingColorSpace:function(s,o){return this.convert(s,this.workingColorSpace,o)},toWorkingColorSpace:function(s,o){return this.convert(s,o,this.workingColorSpace)},getPrimaries:function(s){return this.spaces[s].primaries},getTransfer:function(s){return s===Ni?Sa:this.spaces[s].transfer},getLuminanceCoefficients:function(s,o=this.workingColorSpace){return s.fromArray(this.spaces[o].luminanceCoefficients)},define:function(s){Object.assign(this.spaces,s)},_getMatrix:function(s,o,r){return s.copy(this.spaces[o].toXYZ).multiply(this.spaces[r].fromXYZ)},_getDrawingBufferColorSpace:function(s){return this.spaces[s].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(s=this.workingColorSpace){return this.spaces[s].workingColorSpaceConfig.unpackColorSpace}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],n=[.3127,.329];return i.define({[ln]:{primaries:e,whitePoint:n,transfer:Sa,toXYZ:Hu,fromXYZ:Gu,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:Ft},outputColorSpaceConfig:{drawingBufferColorSpace:Ft}},[Ft]:{primaries:e,whitePoint:n,transfer:ut,toXYZ:Hu,fromXYZ:Gu,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:Ft}}}),i}const Ze=km();function vi(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function eo(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}let Ts;class Hm{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{Ts===void 0&&(Ts=or("canvas")),Ts.width=e.width,Ts.height=e.height;const n=Ts.getContext("2d");e instanceof ImageData?n.putImageData(e,0,0):n.drawImage(e,0,0,e.width,e.height),t=Ts}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=or("canvas");t.width=e.width,t.height=e.height;const n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);const s=n.getImageData(0,0,e.width,e.height),o=s.data;for(let r=0;r<o.length;r++)o[r]=vi(o[r]/255)*255;return n.putImageData(s,0,0),t}else if(e.data){const t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(vi(t[n]/255)*255):t[n]=vi(t[n]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let Gm=0;class of{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Gm++}),this.uuid=Yn(),this.data=e,this.dataReady=!0,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const n={uuid:this.uuid,url:""},s=this.data;if(s!==null){let o;if(Array.isArray(s)){o=[];for(let r=0,a=s.length;r<a;r++)s[r].isDataTexture?o.push($a(s[r].image)):o.push($a(s[r]))}else o=$a(s);n.url=o}return t||(e.images[this.uuid]=n),n}}function $a(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?Hm.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let Vm=0;class Bt extends ws{constructor(e=Bt.DEFAULT_IMAGE,t=Bt.DEFAULT_MAPPING,n=Fi,s=Fi,o=Sn,r=mi,a=Ln,l=wi,c=Bt.DEFAULT_ANISOTROPY,u=Ni){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Vm++}),this.uuid=Yn(),this.name="",this.source=new of(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=s,this.magFilter=o,this.minFilter=r,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new me(0,0),this.repeat=new me(1,1),this.center=new me(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Fe,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=u,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const n={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Vh)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case uo:e.x=e.x-Math.floor(e.x);break;case Fi:e.x=e.x<0?0:1;break;case wa:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case uo:e.y=e.y-Math.floor(e.y);break;case Fi:e.y=e.y<0?0:1;break;case wa:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}Bt.DEFAULT_IMAGE=null;Bt.DEFAULT_MAPPING=Vh;Bt.DEFAULT_ANISOTROPY=1;class We{constructor(e=0,t=0,n=0,s=1){We.prototype.isVector4=!0,this.x=e,this.y=t,this.z=n,this.w=s}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,s){return this.x=e,this.y=t,this.z=n,this.w=s,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,n=this.y,s=this.z,o=this.w,r=e.elements;return this.x=r[0]*t+r[4]*n+r[8]*s+r[12]*o,this.y=r[1]*t+r[5]*n+r[9]*s+r[13]*o,this.z=r[2]*t+r[6]*n+r[10]*s+r[14]*o,this.w=r[3]*t+r[7]*n+r[11]*s+r[15]*o,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,s,o;const l=e.elements,c=l[0],u=l[4],d=l[8],h=l[1],f=l[5],_=l[9],g=l[2],m=l[6],p=l[10];if(Math.abs(u-h)<.01&&Math.abs(d-g)<.01&&Math.abs(_-m)<.01){if(Math.abs(u+h)<.1&&Math.abs(d+g)<.1&&Math.abs(_+m)<.1&&Math.abs(c+f+p-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const w=(c+1)/2,v=(f+1)/2,b=(p+1)/2,E=(u+h)/4,C=(d+g)/4,D=(_+m)/4;return w>v&&w>b?w<.01?(n=0,s=.707106781,o=.707106781):(n=Math.sqrt(w),s=E/n,o=C/n):v>b?v<.01?(n=.707106781,s=0,o=.707106781):(s=Math.sqrt(v),n=E/s,o=D/s):b<.01?(n=.707106781,s=.707106781,o=0):(o=Math.sqrt(b),n=C/o,s=D/o),this.set(n,s,o,t),this}let y=Math.sqrt((m-_)*(m-_)+(d-g)*(d-g)+(h-u)*(h-u));return Math.abs(y)<.001&&(y=1),this.x=(m-_)/y,this.y=(d-g)/y,this.z=(h-u)/y,this.w=Math.acos((c+f+p-1)/2),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=ke(this.x,e.x,t.x),this.y=ke(this.y,e.y,t.y),this.z=ke(this.z,e.z,t.z),this.w=ke(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=ke(this.x,e,t),this.y=ke(this.y,e,t),this.z=ke(this.z,e,t),this.w=ke(this.w,e,t),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(ke(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class Wm extends ws{constructor(e=1,t=1,n={}){super(),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new We(0,0,e,t),this.scissorTest=!1,this.viewport=new We(0,0,e,t);const s={width:e,height:t,depth:1};n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Sn,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},n);const o=new Bt(s,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace);o.flipY=!1,o.generateMipmaps=n.generateMipmaps,o.internalFormat=n.internalFormat,this.textures=[];const r=n.count;for(let a=0;a<r;a++)this.textures[a]=o.clone(),this.textures[a].isRenderTargetTexture=!0;this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.depthTexture=n.depthTexture,this.samples=n.samples}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}setSize(e,t,n=1){if(this.width!==e||this.height!==t||this.depth!==n){this.width=e,this.height=t,this.depth=n;for(let s=0,o=this.textures.length;s<o;s++)this.textures[s].image.width=e,this.textures[s].image.height=t,this.textures[s].image.depth=n;this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let n=0,s=e.textures.length;n<s;n++)this.textures[n]=e.textures[n].clone(),this.textures[n].isRenderTargetTexture=!0;const t=Object.assign({},e.texture.image);return this.texture.source=new of(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class tn extends Wm{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}}class rf extends Bt{constructor(e=null,t=1,n=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:s},this.magFilter=an,this.minFilter=an,this.wrapR=Fi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class Xm extends Bt{constructor(e=null,t=1,n=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:s},this.magFilter=an,this.minFilter=an,this.wrapR=Fi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class pt{constructor(e=0,t=0,n=0,s=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=s}static slerpFlat(e,t,n,s,o,r,a){let l=n[s+0],c=n[s+1],u=n[s+2],d=n[s+3];const h=o[r+0],f=o[r+1],_=o[r+2],g=o[r+3];if(a===0){e[t+0]=l,e[t+1]=c,e[t+2]=u,e[t+3]=d;return}if(a===1){e[t+0]=h,e[t+1]=f,e[t+2]=_,e[t+3]=g;return}if(d!==g||l!==h||c!==f||u!==_){let m=1-a;const p=l*h+c*f+u*_+d*g,y=p>=0?1:-1,w=1-p*p;if(w>Number.EPSILON){const b=Math.sqrt(w),E=Math.atan2(b,p*y);m=Math.sin(m*E)/b,a=Math.sin(a*E)/b}const v=a*y;if(l=l*m+h*v,c=c*m+f*v,u=u*m+_*v,d=d*m+g*v,m===1-a){const b=1/Math.sqrt(l*l+c*c+u*u+d*d);l*=b,c*=b,u*=b,d*=b}}e[t]=l,e[t+1]=c,e[t+2]=u,e[t+3]=d}static multiplyQuaternionsFlat(e,t,n,s,o,r){const a=n[s],l=n[s+1],c=n[s+2],u=n[s+3],d=o[r],h=o[r+1],f=o[r+2],_=o[r+3];return e[t]=a*_+u*d+l*f-c*h,e[t+1]=l*_+u*h+c*d-a*f,e[t+2]=c*_+u*f+a*h-l*d,e[t+3]=u*_-a*d-l*h-c*f,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,s){return this._x=e,this._y=t,this._z=n,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const n=e._x,s=e._y,o=e._z,r=e._order,a=Math.cos,l=Math.sin,c=a(n/2),u=a(s/2),d=a(o/2),h=l(n/2),f=l(s/2),_=l(o/2);switch(r){case"XYZ":this._x=h*u*d+c*f*_,this._y=c*f*d-h*u*_,this._z=c*u*_+h*f*d,this._w=c*u*d-h*f*_;break;case"YXZ":this._x=h*u*d+c*f*_,this._y=c*f*d-h*u*_,this._z=c*u*_-h*f*d,this._w=c*u*d+h*f*_;break;case"ZXY":this._x=h*u*d-c*f*_,this._y=c*f*d+h*u*_,this._z=c*u*_+h*f*d,this._w=c*u*d-h*f*_;break;case"ZYX":this._x=h*u*d-c*f*_,this._y=c*f*d+h*u*_,this._z=c*u*_-h*f*d,this._w=c*u*d+h*f*_;break;case"YZX":this._x=h*u*d+c*f*_,this._y=c*f*d+h*u*_,this._z=c*u*_-h*f*d,this._w=c*u*d-h*f*_;break;case"XZY":this._x=h*u*d-c*f*_,this._y=c*f*d-h*u*_,this._z=c*u*_+h*f*d,this._w=c*u*d+h*f*_;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+r)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const n=t/2,s=Math.sin(n);return this._x=e.x*s,this._y=e.y*s,this._z=e.z*s,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,n=t[0],s=t[4],o=t[8],r=t[1],a=t[5],l=t[9],c=t[2],u=t[6],d=t[10],h=n+a+d;if(h>0){const f=.5/Math.sqrt(h+1);this._w=.25/f,this._x=(u-l)*f,this._y=(o-c)*f,this._z=(r-s)*f}else if(n>a&&n>d){const f=2*Math.sqrt(1+n-a-d);this._w=(u-l)/f,this._x=.25*f,this._y=(s+r)/f,this._z=(o+c)/f}else if(a>d){const f=2*Math.sqrt(1+a-n-d);this._w=(o-c)/f,this._x=(s+r)/f,this._y=.25*f,this._z=(l+u)/f}else{const f=2*Math.sqrt(1+d-n-a);this._w=(r-s)/f,this._x=(o+c)/f,this._y=(l+u)/f,this._z=.25*f}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<Number.EPSILON?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(ke(this.dot(e),-1,1)))}rotateTowards(e,t){const n=this.angleTo(e);if(n===0)return this;const s=Math.min(1,t/n);return this.slerp(e,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const n=e._x,s=e._y,o=e._z,r=e._w,a=t._x,l=t._y,c=t._z,u=t._w;return this._x=n*u+r*a+s*c-o*l,this._y=s*u+r*l+o*a-n*c,this._z=o*u+r*c+n*l-s*a,this._w=r*u-n*a-s*l-o*c,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const n=this._x,s=this._y,o=this._z,r=this._w;let a=r*e._w+n*e._x+s*e._y+o*e._z;if(a<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,a=-a):this.copy(e),a>=1)return this._w=r,this._x=n,this._y=s,this._z=o,this;const l=1-a*a;if(l<=Number.EPSILON){const f=1-t;return this._w=f*r+t*this._w,this._x=f*n+t*this._x,this._y=f*s+t*this._y,this._z=f*o+t*this._z,this.normalize(),this}const c=Math.sqrt(l),u=Math.atan2(c,a),d=Math.sin((1-t)*u)/c,h=Math.sin(t*u)/c;return this._w=r*d+this._w*h,this._x=n*d+this._x*h,this._y=s*d+this._y*h,this._z=o*d+this._z*h,this._onChangeCallback(),this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),n=Math.random(),s=Math.sqrt(1-n),o=Math.sqrt(n);return this.set(s*Math.sin(e),s*Math.cos(e),o*Math.sin(t),o*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class A{constructor(e=0,t=0,n=0){A.prototype.isVector3=!0,this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(Vu.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(Vu.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,n=this.y,s=this.z,o=e.elements;return this.x=o[0]*t+o[3]*n+o[6]*s,this.y=o[1]*t+o[4]*n+o[7]*s,this.z=o[2]*t+o[5]*n+o[8]*s,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,n=this.y,s=this.z,o=e.elements,r=1/(o[3]*t+o[7]*n+o[11]*s+o[15]);return this.x=(o[0]*t+o[4]*n+o[8]*s+o[12])*r,this.y=(o[1]*t+o[5]*n+o[9]*s+o[13])*r,this.z=(o[2]*t+o[6]*n+o[10]*s+o[14])*r,this}applyQuaternion(e){const t=this.x,n=this.y,s=this.z,o=e.x,r=e.y,a=e.z,l=e.w,c=2*(r*s-a*n),u=2*(a*t-o*s),d=2*(o*n-r*t);return this.x=t+l*c+r*d-a*u,this.y=n+l*u+a*c-o*d,this.z=s+l*d+o*u-r*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,n=this.y,s=this.z,o=e.elements;return this.x=o[0]*t+o[4]*n+o[8]*s,this.y=o[1]*t+o[5]*n+o[9]*s,this.z=o[2]*t+o[6]*n+o[10]*s,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=ke(this.x,e.x,t.x),this.y=ke(this.y,e.y,t.y),this.z=ke(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=ke(this.x,e,t),this.y=ke(this.y,e,t),this.z=ke(this.z,e,t),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(ke(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const n=e.x,s=e.y,o=e.z,r=t.x,a=t.y,l=t.z;return this.x=s*l-o*a,this.y=o*r-n*l,this.z=n*a-s*r,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return Ya.copy(this).projectOnVector(e),this.sub(Ya)}reflect(e){return this.sub(Ya.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(ke(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y,s=this.z-e.z;return t*t+n*n+s*s}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){const s=Math.sin(t)*e;return this.x=s*Math.sin(n),this.y=Math.cos(t)*e,this.z=s*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),s=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=s,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,n=Math.sqrt(1-t*t);return this.x=n*Math.cos(e),this.y=t,this.z=n*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Ya=new A,Vu=new pt;class Nn{constructor(e=new A(1/0,1/0,1/0),t=new A(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(zn.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(zn.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const n=zn.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const n=e.geometry;if(n!==void 0){const o=n.getAttribute("position");if(t===!0&&o!==void 0&&e.isInstancedMesh!==!0)for(let r=0,a=o.count;r<a;r++)e.isMesh===!0?e.getVertexPosition(r,zn):zn.fromBufferAttribute(o,r),zn.applyMatrix4(e.matrixWorld),this.expandByPoint(zn);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),gr.copy(e.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),gr.copy(n.boundingBox)),gr.applyMatrix4(e.matrixWorld),this.union(gr)}const s=e.children;for(let o=0,r=s.length;o<r;o++)this.expandByObject(s[o],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,zn),zn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Co),_r.subVectors(this.max,Co),As.subVectors(e.a,Co),Cs.subVectors(e.b,Co),Rs.subVectors(e.c,Co),Ei.subVectors(Cs,As),bi.subVectors(Rs,Cs),$i.subVectors(As,Rs);let t=[0,-Ei.z,Ei.y,0,-bi.z,bi.y,0,-$i.z,$i.y,Ei.z,0,-Ei.x,bi.z,0,-bi.x,$i.z,0,-$i.x,-Ei.y,Ei.x,0,-bi.y,bi.x,0,-$i.y,$i.x,0];return!Ka(t,As,Cs,Rs,_r)||(t=[1,0,0,0,1,0,0,0,1],!Ka(t,As,Cs,Rs,_r))?!1:(vr.crossVectors(Ei,bi),t=[vr.x,vr.y,vr.z],Ka(t,As,Cs,Rs,_r))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,zn).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(zn).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(oi[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),oi[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),oi[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),oi[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),oi[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),oi[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),oi[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),oi[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(oi),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const oi=[new A,new A,new A,new A,new A,new A,new A,new A],zn=new A,gr=new Nn,As=new A,Cs=new A,Rs=new A,Ei=new A,bi=new A,$i=new A,Co=new A,_r=new A,vr=new A,Yi=new A;function Ka(i,e,t,n,s){for(let o=0,r=i.length-3;o<=r;o+=3){Yi.fromArray(i,o);const a=s.x*Math.abs(Yi.x)+s.y*Math.abs(Yi.y)+s.z*Math.abs(Yi.z),l=e.dot(Yi),c=t.dot(Yi),u=n.dot(Yi);if(Math.max(-Math.max(l,c,u),Math.min(l,c,u))>a)return!1}return!0}const qm=new Nn,Ro=new A,Za=new A;class Un{constructor(e=new A,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const n=this.center;t!==void 0?n.copy(t):qm.setFromPoints(e).getCenter(n);let s=0;for(let o=0,r=e.length;o<r;o++)s=Math.max(s,n.distanceToSquared(e[o]));return this.radius=Math.sqrt(s),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Ro.subVectors(e,this.center);const t=Ro.lengthSq();if(t>this.radius*this.radius){const n=Math.sqrt(t),s=(n-this.radius)*.5;this.center.addScaledVector(Ro,s/n),this.radius+=s}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Za.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Ro.copy(e.center).add(Za)),this.expandByPoint(Ro.copy(e.center).sub(Za))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const ri=new A,Ja=new A,xr=new A,Ti=new A,Qa=new A,yr=new A,el=new A;class wo{constructor(e=new A,t=new A(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,ri)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=ri.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(ri.copy(this.origin).addScaledVector(this.direction,t),ri.distanceToSquared(e))}distanceSqToSegment(e,t,n,s){Ja.copy(e).add(t).multiplyScalar(.5),xr.copy(t).sub(e).normalize(),Ti.copy(this.origin).sub(Ja);const o=e.distanceTo(t)*.5,r=-this.direction.dot(xr),a=Ti.dot(this.direction),l=-Ti.dot(xr),c=Ti.lengthSq(),u=Math.abs(1-r*r);let d,h,f,_;if(u>0)if(d=r*l-a,h=r*a-l,_=o*u,d>=0)if(h>=-_)if(h<=_){const g=1/u;d*=g,h*=g,f=d*(d+r*h+2*a)+h*(r*d+h+2*l)+c}else h=o,d=Math.max(0,-(r*h+a)),f=-d*d+h*(h+2*l)+c;else h=-o,d=Math.max(0,-(r*h+a)),f=-d*d+h*(h+2*l)+c;else h<=-_?(d=Math.max(0,-(-r*o+a)),h=d>0?-o:Math.min(Math.max(-o,-l),o),f=-d*d+h*(h+2*l)+c):h<=_?(d=0,h=Math.min(Math.max(-o,-l),o),f=h*(h+2*l)+c):(d=Math.max(0,-(r*o+a)),h=d>0?o:Math.min(Math.max(-o,-l),o),f=-d*d+h*(h+2*l)+c);else h=r>0?-o:o,d=Math.max(0,-(r*h+a)),f=-d*d+h*(h+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,d),s&&s.copy(Ja).addScaledVector(xr,h),f}intersectSphere(e,t){ri.subVectors(e.center,this.origin);const n=ri.dot(this.direction),s=ri.dot(ri)-n*n,o=e.radius*e.radius;if(s>o)return null;const r=Math.sqrt(o-s),a=n-r,l=n+r;return l<0?null:a<0?this.at(l,t):this.at(a,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){const n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,s,o,r,a,l;const c=1/this.direction.x,u=1/this.direction.y,d=1/this.direction.z,h=this.origin;return c>=0?(n=(e.min.x-h.x)*c,s=(e.max.x-h.x)*c):(n=(e.max.x-h.x)*c,s=(e.min.x-h.x)*c),u>=0?(o=(e.min.y-h.y)*u,r=(e.max.y-h.y)*u):(o=(e.max.y-h.y)*u,r=(e.min.y-h.y)*u),n>r||o>s||((o>n||isNaN(n))&&(n=o),(r<s||isNaN(s))&&(s=r),d>=0?(a=(e.min.z-h.z)*d,l=(e.max.z-h.z)*d):(a=(e.max.z-h.z)*d,l=(e.min.z-h.z)*d),n>l||a>s)||((a>n||n!==n)&&(n=a),(l<s||s!==s)&&(s=l),s<0)?null:this.at(n>=0?n:s,t)}intersectsBox(e){return this.intersectBox(e,ri)!==null}intersectTriangle(e,t,n,s,o){Qa.subVectors(t,e),yr.subVectors(n,e),el.crossVectors(Qa,yr);let r=this.direction.dot(el),a;if(r>0){if(s)return null;a=1}else if(r<0)a=-1,r=-r;else return null;Ti.subVectors(this.origin,e);const l=a*this.direction.dot(yr.crossVectors(Ti,yr));if(l<0)return null;const c=a*this.direction.dot(Qa.cross(Ti));if(c<0||l+c>r)return null;const u=-a*Ti.dot(el);return u<0?null:this.at(u/r,o)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class De{constructor(e,t,n,s,o,r,a,l,c,u,d,h,f,_,g,m){De.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,s,o,r,a,l,c,u,d,h,f,_,g,m)}set(e,t,n,s,o,r,a,l,c,u,d,h,f,_,g,m){const p=this.elements;return p[0]=e,p[4]=t,p[8]=n,p[12]=s,p[1]=o,p[5]=r,p[9]=a,p[13]=l,p[2]=c,p[6]=u,p[10]=d,p[14]=h,p[3]=f,p[7]=_,p[11]=g,p[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new De().fromArray(this.elements)}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){const t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,n=e.elements,s=1/Ps.setFromMatrixColumn(e,0).length(),o=1/Ps.setFromMatrixColumn(e,1).length(),r=1/Ps.setFromMatrixColumn(e,2).length();return t[0]=n[0]*s,t[1]=n[1]*s,t[2]=n[2]*s,t[3]=0,t[4]=n[4]*o,t[5]=n[5]*o,t[6]=n[6]*o,t[7]=0,t[8]=n[8]*r,t[9]=n[9]*r,t[10]=n[10]*r,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,n=e.x,s=e.y,o=e.z,r=Math.cos(n),a=Math.sin(n),l=Math.cos(s),c=Math.sin(s),u=Math.cos(o),d=Math.sin(o);if(e.order==="XYZ"){const h=r*u,f=r*d,_=a*u,g=a*d;t[0]=l*u,t[4]=-l*d,t[8]=c,t[1]=f+_*c,t[5]=h-g*c,t[9]=-a*l,t[2]=g-h*c,t[6]=_+f*c,t[10]=r*l}else if(e.order==="YXZ"){const h=l*u,f=l*d,_=c*u,g=c*d;t[0]=h+g*a,t[4]=_*a-f,t[8]=r*c,t[1]=r*d,t[5]=r*u,t[9]=-a,t[2]=f*a-_,t[6]=g+h*a,t[10]=r*l}else if(e.order==="ZXY"){const h=l*u,f=l*d,_=c*u,g=c*d;t[0]=h-g*a,t[4]=-r*d,t[8]=_+f*a,t[1]=f+_*a,t[5]=r*u,t[9]=g-h*a,t[2]=-r*c,t[6]=a,t[10]=r*l}else if(e.order==="ZYX"){const h=r*u,f=r*d,_=a*u,g=a*d;t[0]=l*u,t[4]=_*c-f,t[8]=h*c+g,t[1]=l*d,t[5]=g*c+h,t[9]=f*c-_,t[2]=-c,t[6]=a*l,t[10]=r*l}else if(e.order==="YZX"){const h=r*l,f=r*c,_=a*l,g=a*c;t[0]=l*u,t[4]=g-h*d,t[8]=_*d+f,t[1]=d,t[5]=r*u,t[9]=-a*u,t[2]=-c*u,t[6]=f*d+_,t[10]=h-g*d}else if(e.order==="XZY"){const h=r*l,f=r*c,_=a*l,g=a*c;t[0]=l*u,t[4]=-d,t[8]=c*u,t[1]=h*d+g,t[5]=r*u,t[9]=f*d-_,t[2]=_*d-f,t[6]=a*u,t[10]=g*d+h}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(jm,e,$m)}lookAt(e,t,n){const s=this.elements;return xn.subVectors(e,t),xn.lengthSq()===0&&(xn.z=1),xn.normalize(),Ai.crossVectors(n,xn),Ai.lengthSq()===0&&(Math.abs(n.z)===1?xn.x+=1e-4:xn.z+=1e-4,xn.normalize(),Ai.crossVectors(n,xn)),Ai.normalize(),wr.crossVectors(xn,Ai),s[0]=Ai.x,s[4]=wr.x,s[8]=xn.x,s[1]=Ai.y,s[5]=wr.y,s[9]=xn.y,s[2]=Ai.z,s[6]=wr.z,s[10]=xn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,s=t.elements,o=this.elements,r=n[0],a=n[4],l=n[8],c=n[12],u=n[1],d=n[5],h=n[9],f=n[13],_=n[2],g=n[6],m=n[10],p=n[14],y=n[3],w=n[7],v=n[11],b=n[15],E=s[0],C=s[4],D=s[8],S=s[12],x=s[1],P=s[5],F=s[9],O=s[13],k=s[2],L=s[6],N=s[10],V=s[14],H=s[3],j=s[7],$=s[11],ae=s[15];return o[0]=r*E+a*x+l*k+c*H,o[4]=r*C+a*P+l*L+c*j,o[8]=r*D+a*F+l*N+c*$,o[12]=r*S+a*O+l*V+c*ae,o[1]=u*E+d*x+h*k+f*H,o[5]=u*C+d*P+h*L+f*j,o[9]=u*D+d*F+h*N+f*$,o[13]=u*S+d*O+h*V+f*ae,o[2]=_*E+g*x+m*k+p*H,o[6]=_*C+g*P+m*L+p*j,o[10]=_*D+g*F+m*N+p*$,o[14]=_*S+g*O+m*V+p*ae,o[3]=y*E+w*x+v*k+b*H,o[7]=y*C+w*P+v*L+b*j,o[11]=y*D+w*F+v*N+b*$,o[15]=y*S+w*O+v*V+b*ae,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[4],s=e[8],o=e[12],r=e[1],a=e[5],l=e[9],c=e[13],u=e[2],d=e[6],h=e[10],f=e[14],_=e[3],g=e[7],m=e[11],p=e[15];return _*(+o*l*d-s*c*d-o*a*h+n*c*h+s*a*f-n*l*f)+g*(+t*l*f-t*c*h+o*r*h-s*r*f+s*c*u-o*l*u)+m*(+t*c*d-t*a*f-o*r*d+n*r*f+o*a*u-n*c*u)+p*(-s*a*u-t*l*d+t*a*h+s*r*d-n*r*h+n*l*u)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){const s=this.elements;return e.isVector3?(s[12]=e.x,s[13]=e.y,s[14]=e.z):(s[12]=e,s[13]=t,s[14]=n),this}invert(){const e=this.elements,t=e[0],n=e[1],s=e[2],o=e[3],r=e[4],a=e[5],l=e[6],c=e[7],u=e[8],d=e[9],h=e[10],f=e[11],_=e[12],g=e[13],m=e[14],p=e[15],y=d*m*c-g*h*c+g*l*f-a*m*f-d*l*p+a*h*p,w=_*h*c-u*m*c-_*l*f+r*m*f+u*l*p-r*h*p,v=u*g*c-_*d*c+_*a*f-r*g*f-u*a*p+r*d*p,b=_*d*l-u*g*l-_*a*h+r*g*h+u*a*m-r*d*m,E=t*y+n*w+s*v+o*b;if(E===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const C=1/E;return e[0]=y*C,e[1]=(g*h*o-d*m*o-g*s*f+n*m*f+d*s*p-n*h*p)*C,e[2]=(a*m*o-g*l*o+g*s*c-n*m*c-a*s*p+n*l*p)*C,e[3]=(d*l*o-a*h*o-d*s*c+n*h*c+a*s*f-n*l*f)*C,e[4]=w*C,e[5]=(u*m*o-_*h*o+_*s*f-t*m*f-u*s*p+t*h*p)*C,e[6]=(_*l*o-r*m*o-_*s*c+t*m*c+r*s*p-t*l*p)*C,e[7]=(r*h*o-u*l*o+u*s*c-t*h*c-r*s*f+t*l*f)*C,e[8]=v*C,e[9]=(_*d*o-u*g*o-_*n*f+t*g*f+u*n*p-t*d*p)*C,e[10]=(r*g*o-_*a*o+_*n*c-t*g*c-r*n*p+t*a*p)*C,e[11]=(u*a*o-r*d*o-u*n*c+t*d*c+r*n*f-t*a*f)*C,e[12]=b*C,e[13]=(u*g*s-_*d*s+_*n*h-t*g*h-u*n*m+t*d*m)*C,e[14]=(_*a*s-r*g*s-_*n*l+t*g*l+r*n*m-t*a*m)*C,e[15]=(r*d*s-u*a*s+u*n*l-t*d*l-r*n*h+t*a*h)*C,this}scale(e){const t=this.elements,n=e.x,s=e.y,o=e.z;return t[0]*=n,t[4]*=s,t[8]*=o,t[1]*=n,t[5]*=s,t[9]*=o,t[2]*=n,t[6]*=s,t[10]*=o,t[3]*=n,t[7]*=s,t[11]*=o,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],s=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,s))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const n=Math.cos(t),s=Math.sin(t),o=1-n,r=e.x,a=e.y,l=e.z,c=o*r,u=o*a;return this.set(c*r+n,c*a-s*l,c*l+s*a,0,c*a+s*l,u*a+n,u*l-s*r,0,c*l-s*a,u*l+s*r,o*l*l+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,s,o,r){return this.set(1,n,o,0,e,1,r,0,t,s,1,0,0,0,0,1),this}compose(e,t,n){const s=this.elements,o=t._x,r=t._y,a=t._z,l=t._w,c=o+o,u=r+r,d=a+a,h=o*c,f=o*u,_=o*d,g=r*u,m=r*d,p=a*d,y=l*c,w=l*u,v=l*d,b=n.x,E=n.y,C=n.z;return s[0]=(1-(g+p))*b,s[1]=(f+v)*b,s[2]=(_-w)*b,s[3]=0,s[4]=(f-v)*E,s[5]=(1-(h+p))*E,s[6]=(m+y)*E,s[7]=0,s[8]=(_+w)*C,s[9]=(m-y)*C,s[10]=(1-(h+g))*C,s[11]=0,s[12]=e.x,s[13]=e.y,s[14]=e.z,s[15]=1,this}decompose(e,t,n){const s=this.elements;let o=Ps.set(s[0],s[1],s[2]).length();const r=Ps.set(s[4],s[5],s[6]).length(),a=Ps.set(s[8],s[9],s[10]).length();this.determinant()<0&&(o=-o),e.x=s[12],e.y=s[13],e.z=s[14],kn.copy(this);const c=1/o,u=1/r,d=1/a;return kn.elements[0]*=c,kn.elements[1]*=c,kn.elements[2]*=c,kn.elements[4]*=u,kn.elements[5]*=u,kn.elements[6]*=u,kn.elements[8]*=d,kn.elements[9]*=d,kn.elements[10]*=d,t.setFromRotationMatrix(kn),n.x=o,n.y=r,n.z=a,this}makePerspective(e,t,n,s,o,r,a=gi){const l=this.elements,c=2*o/(t-e),u=2*o/(n-s),d=(t+e)/(t-e),h=(n+s)/(n-s);let f,_;if(a===gi)f=-(r+o)/(r-o),_=-2*r*o/(r-o);else if(a===Ma)f=-r/(r-o),_=-r*o/(r-o);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return l[0]=c,l[4]=0,l[8]=d,l[12]=0,l[1]=0,l[5]=u,l[9]=h,l[13]=0,l[2]=0,l[6]=0,l[10]=f,l[14]=_,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,t,n,s,o,r,a=gi){const l=this.elements,c=1/(t-e),u=1/(n-s),d=1/(r-o),h=(t+e)*c,f=(n+s)*u;let _,g;if(a===gi)_=(r+o)*d,g=-2*d;else if(a===Ma)_=o*d,g=-1*d;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-h,l[1]=0,l[5]=2*u,l[9]=0,l[13]=-f,l[2]=0,l[6]=0,l[10]=g,l[14]=-_,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){const t=this.elements,n=e.elements;for(let s=0;s<16;s++)if(t[s]!==n[s])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}}const Ps=new A,kn=new De,jm=new A(0,0,0),$m=new A(1,1,1),Ai=new A,wr=new A,xn=new A,Wu=new De,Xu=new pt;class zt{constructor(e=0,t=0,n=0,s=zt.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=s}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,s=this._order){return this._x=e,this._y=t,this._z=n,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){const s=e.elements,o=s[0],r=s[4],a=s[8],l=s[1],c=s[5],u=s[9],d=s[2],h=s[6],f=s[10];switch(t){case"XYZ":this._y=Math.asin(ke(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-u,f),this._z=Math.atan2(-r,o)):(this._x=Math.atan2(h,c),this._z=0);break;case"YXZ":this._x=Math.asin(-ke(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(a,f),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-d,o),this._z=0);break;case"ZXY":this._x=Math.asin(ke(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(-d,f),this._z=Math.atan2(-r,c)):(this._y=0,this._z=Math.atan2(l,o));break;case"ZYX":this._y=Math.asin(-ke(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(h,f),this._z=Math.atan2(l,o)):(this._x=0,this._z=Math.atan2(-r,c));break;case"YZX":this._z=Math.asin(ke(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-u,c),this._y=Math.atan2(-d,o)):(this._x=0,this._y=Math.atan2(a,f));break;case"XZY":this._z=Math.asin(-ke(r,-1,1)),Math.abs(r)<.9999999?(this._x=Math.atan2(h,c),this._y=Math.atan2(a,o)):(this._x=Math.atan2(-u,f),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return Wu.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Wu,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return Xu.setFromEuler(this),this.setFromQuaternion(Xu,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}zt.DEFAULT_ORDER="XYZ";class tu{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let Ym=0;const qu=new A,Ds=new pt,ai=new De,Sr=new A,Po=new A,Km=new A,Zm=new pt,ju=new A(1,0,0),$u=new A(0,1,0),Yu=new A(0,0,1),Ku={type:"added"},Jm={type:"removed"},Ls={type:"childadded",child:null},tl={type:"childremoved",child:null};class mt extends ws{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Ym++}),this.uuid=Yn(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=mt.DEFAULT_UP.clone();const e=new A,t=new zt,n=new pt,s=new A(1,1,1);function o(){n.setFromEuler(t,!1)}function r(){t.setFromQuaternion(n,void 0,!1)}t._onChange(o),n._onChange(r),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new De},normalMatrix:{value:new Fe}}),this.matrix=new De,this.matrixWorld=new De,this.matrixAutoUpdate=mt.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=mt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new tu,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return Ds.setFromAxisAngle(e,t),this.quaternion.multiply(Ds),this}rotateOnWorldAxis(e,t){return Ds.setFromAxisAngle(e,t),this.quaternion.premultiply(Ds),this}rotateX(e){return this.rotateOnAxis(ju,e)}rotateY(e){return this.rotateOnAxis($u,e)}rotateZ(e){return this.rotateOnAxis(Yu,e)}translateOnAxis(e,t){return qu.copy(e).applyQuaternion(this.quaternion),this.position.add(qu.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(ju,e)}translateY(e){return this.translateOnAxis($u,e)}translateZ(e){return this.translateOnAxis(Yu,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(ai.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?Sr.copy(e):Sr.set(e,t,n);const s=this.parent;this.updateWorldMatrix(!0,!1),Po.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?ai.lookAt(Po,Sr,this.up):ai.lookAt(Sr,Po,this.up),this.quaternion.setFromRotationMatrix(ai),s&&(ai.extractRotation(s.matrixWorld),Ds.setFromRotationMatrix(ai),this.quaternion.premultiply(Ds.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(Ku),Ls.child=e,this.dispatchEvent(Ls),Ls.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(Jm),tl.child=e,this.dispatchEvent(tl),tl.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),ai.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),ai.multiply(e.parent.matrixWorld)),e.applyMatrix4(ai),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(Ku),Ls.child=e,this.dispatchEvent(Ls),Ls.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,s=this.children.length;n<s;n++){const r=this.children[n].getObjectByProperty(e,t);if(r!==void 0)return r}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);const s=this.children;for(let o=0,r=s.length;o<r;o++)s[o].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Po,e,Km),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Po,Zm,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].updateMatrixWorld(e)}updateWorldMatrix(e,t){const n=this.parent;if(e===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),t===!0){const s=this.children;for(let o=0,r=s.length;o<r;o++)s[o].updateWorldMatrix(!1,!0)}}toJSON(e){const t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.visibility=this._visibility,s.active=this._active,s.bounds=this._bounds.map(a=>({boxInitialized:a.boxInitialized,boxMin:a.box.min.toArray(),boxMax:a.box.max.toArray(),sphereInitialized:a.sphereInitialized,sphereRadius:a.sphere.radius,sphereCenter:a.sphere.center.toArray()})),s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.geometryCount=this._geometryCount,s.matricesTexture=this._matricesTexture.toJSON(e),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(s.boundingSphere={center:s.boundingSphere.center.toArray(),radius:s.boundingSphere.radius}),this.boundingBox!==null&&(s.boundingBox={min:s.boundingBox.min.toArray(),max:s.boundingBox.max.toArray()}));function o(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=o(e.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const l=a.shapes;if(Array.isArray(l))for(let c=0,u=l.length;c<u;c++){const d=l[c];o(e.shapes,d)}else o(e.shapes,l)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(o(e.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(o(e.materials,this.material[l]));s.material=a}else s.material=o(e.materials,this.material);if(this.children.length>0){s.children=[];for(let a=0;a<this.children.length;a++)s.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){s.animations=[];for(let a=0;a<this.animations.length;a++){const l=this.animations[a];s.animations.push(o(e.animations,l))}}if(t){const a=r(e.geometries),l=r(e.materials),c=r(e.textures),u=r(e.images),d=r(e.shapes),h=r(e.skeletons),f=r(e.animations),_=r(e.nodes);a.length>0&&(n.geometries=a),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),u.length>0&&(n.images=u),d.length>0&&(n.shapes=d),h.length>0&&(n.skeletons=h),f.length>0&&(n.animations=f),_.length>0&&(n.nodes=_)}return n.object=s,n;function r(a){const l=[];for(const c in a){const u=a[c];delete u.metadata,l.push(u)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){const s=e.children[n];this.add(s.clone())}return this}}mt.DEFAULT_UP=new A(0,1,0);mt.DEFAULT_MATRIX_AUTO_UPDATE=!0;mt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const Hn=new A,li=new A,nl=new A,ci=new A,Is=new A,Os=new A,Zu=new A,il=new A,sl=new A,ol=new A,rl=new We,al=new We,ll=new We;class mn{constructor(e=new A,t=new A,n=new A){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,s){s.subVectors(n,t),Hn.subVectors(e,t),s.cross(Hn);const o=s.lengthSq();return o>0?s.multiplyScalar(1/Math.sqrt(o)):s.set(0,0,0)}static getBarycoord(e,t,n,s,o){Hn.subVectors(s,t),li.subVectors(n,t),nl.subVectors(e,t);const r=Hn.dot(Hn),a=Hn.dot(li),l=Hn.dot(nl),c=li.dot(li),u=li.dot(nl),d=r*c-a*a;if(d===0)return o.set(0,0,0),null;const h=1/d,f=(c*l-a*u)*h,_=(r*u-a*l)*h;return o.set(1-f-_,_,f)}static containsPoint(e,t,n,s){return this.getBarycoord(e,t,n,s,ci)===null?!1:ci.x>=0&&ci.y>=0&&ci.x+ci.y<=1}static getInterpolation(e,t,n,s,o,r,a,l){return this.getBarycoord(e,t,n,s,ci)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(o,ci.x),l.addScaledVector(r,ci.y),l.addScaledVector(a,ci.z),l)}static getInterpolatedAttribute(e,t,n,s,o,r){return rl.setScalar(0),al.setScalar(0),ll.setScalar(0),rl.fromBufferAttribute(e,t),al.fromBufferAttribute(e,n),ll.fromBufferAttribute(e,s),r.setScalar(0),r.addScaledVector(rl,o.x),r.addScaledVector(al,o.y),r.addScaledVector(ll,o.z),r}static isFrontFacing(e,t,n,s){return Hn.subVectors(n,t),li.subVectors(e,t),Hn.cross(li).dot(s)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,s){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[s]),this}setFromAttributeAndIndices(e,t,n,s){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,s),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Hn.subVectors(this.c,this.b),li.subVectors(this.a,this.b),Hn.cross(li).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return mn.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return mn.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,n,s,o){return mn.getInterpolation(e,this.a,this.b,this.c,t,n,s,o)}containsPoint(e){return mn.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return mn.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const n=this.a,s=this.b,o=this.c;let r,a;Is.subVectors(s,n),Os.subVectors(o,n),il.subVectors(e,n);const l=Is.dot(il),c=Os.dot(il);if(l<=0&&c<=0)return t.copy(n);sl.subVectors(e,s);const u=Is.dot(sl),d=Os.dot(sl);if(u>=0&&d<=u)return t.copy(s);const h=l*d-u*c;if(h<=0&&l>=0&&u<=0)return r=l/(l-u),t.copy(n).addScaledVector(Is,r);ol.subVectors(e,o);const f=Is.dot(ol),_=Os.dot(ol);if(_>=0&&f<=_)return t.copy(o);const g=f*c-l*_;if(g<=0&&c>=0&&_<=0)return a=c/(c-_),t.copy(n).addScaledVector(Os,a);const m=u*_-f*d;if(m<=0&&d-u>=0&&f-_>=0)return Zu.subVectors(o,s),a=(d-u)/(d-u+(f-_)),t.copy(s).addScaledVector(Zu,a);const p=1/(m+g+h);return r=g*p,a=h*p,t.copy(n).addScaledVector(Is,r).addScaledVector(Os,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const af={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Ci={h:0,s:0,l:0},Mr={h:0,s:0,l:0};function cl(i,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?i+(e-i)*6*t:t<1/2?e:t<2/3?i+(e-i)*6*(2/3-t):i}class se{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){const s=e;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=Ft){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Ze.toWorkingColorSpace(this,t),this}setRGB(e,t,n,s=Ze.workingColorSpace){return this.r=e,this.g=t,this.b=n,Ze.toWorkingColorSpace(this,s),this}setHSL(e,t,n,s=Ze.workingColorSpace){if(e=eu(e,1),t=ke(t,0,1),n=ke(n,0,1),t===0)this.r=this.g=this.b=n;else{const o=n<=.5?n*(1+t):n+t-n*t,r=2*n-o;this.r=cl(r,o,e+1/3),this.g=cl(r,o,e),this.b=cl(r,o,e-1/3)}return Ze.toWorkingColorSpace(this,s),this}setStyle(e,t=Ft){function n(o){o!==void 0&&parseFloat(o)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(e)){let o;const r=s[1],a=s[2];switch(r){case"rgb":case"rgba":if(o=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(o[4]),this.setRGB(Math.min(255,parseInt(o[1],10))/255,Math.min(255,parseInt(o[2],10))/255,Math.min(255,parseInt(o[3],10))/255,t);if(o=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(o[4]),this.setRGB(Math.min(100,parseInt(o[1],10))/100,Math.min(100,parseInt(o[2],10))/100,Math.min(100,parseInt(o[3],10))/100,t);break;case"hsl":case"hsla":if(o=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(o[4]),this.setHSL(parseFloat(o[1])/360,parseFloat(o[2])/100,parseFloat(o[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(e)){const o=s[1],r=o.length;if(r===3)return this.setRGB(parseInt(o.charAt(0),16)/15,parseInt(o.charAt(1),16)/15,parseInt(o.charAt(2),16)/15,t);if(r===6)return this.setHex(parseInt(o,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=Ft){const n=af[e.toLowerCase()];return n!==void 0?this.setHex(n,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=vi(e.r),this.g=vi(e.g),this.b=vi(e.b),this}copyLinearToSRGB(e){return this.r=eo(e.r),this.g=eo(e.g),this.b=eo(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Ft){return Ze.fromWorkingColorSpace(qt.copy(this),e),Math.round(ke(qt.r*255,0,255))*65536+Math.round(ke(qt.g*255,0,255))*256+Math.round(ke(qt.b*255,0,255))}getHexString(e=Ft){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=Ze.workingColorSpace){Ze.fromWorkingColorSpace(qt.copy(this),t);const n=qt.r,s=qt.g,o=qt.b,r=Math.max(n,s,o),a=Math.min(n,s,o);let l,c;const u=(a+r)/2;if(a===r)l=0,c=0;else{const d=r-a;switch(c=u<=.5?d/(r+a):d/(2-r-a),r){case n:l=(s-o)/d+(s<o?6:0);break;case s:l=(o-n)/d+2;break;case o:l=(n-s)/d+4;break}l/=6}return e.h=l,e.s=c,e.l=u,e}getRGB(e,t=Ze.workingColorSpace){return Ze.fromWorkingColorSpace(qt.copy(this),t),e.r=qt.r,e.g=qt.g,e.b=qt.b,e}getStyle(e=Ft){Ze.fromWorkingColorSpace(qt.copy(this),e);const t=qt.r,n=qt.g,s=qt.b;return e!==Ft?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(s*255)})`}offsetHSL(e,t,n){return this.getHSL(Ci),this.setHSL(Ci.h+e,Ci.s+t,Ci.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(Ci),e.getHSL(Mr);const n=Ko(Ci.h,Mr.h,t),s=Ko(Ci.s,Mr.s,t),o=Ko(Ci.l,Mr.l,t);return this.setHSL(n,s,o),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,n=this.g,s=this.b,o=e.elements;return this.r=o[0]*t+o[3]*n+o[6]*s,this.g=o[1]*t+o[4]*n+o[7]*s,this.b=o[2]*t+o[5]*n+o[8]*s,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const qt=new se;se.NAMES=af;let Qm=0;class _n extends ws{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Qm++}),this.uuid=Yn(),this.name="",this.type="Material",this.blending=Zs,this.side=yi,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Xl,this.blendDst=ql,this.blendEquation=ls,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new se(0,0,0),this.blendAlpha=0,this.depthFunc=ao,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Fu,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=bs,this.stencilZFail=bs,this.stencilZPass=bs,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const n=e[t];if(n===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}const s=this[t];if(s===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(n):s&&s.isVector3&&n&&n.isVector3?s.copy(n):this[t]=n}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const n={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==Zs&&(n.blending=this.blending),this.side!==yi&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==Xl&&(n.blendSrc=this.blendSrc),this.blendDst!==ql&&(n.blendDst=this.blendDst),this.blendEquation!==ls&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==ao&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Fu&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==bs&&(n.stencilFail=this.stencilFail),this.stencilZFail!==bs&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==bs&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function s(o){const r=[];for(const a in o){const l=o[a];delete l.metadata,r.push(l)}return r}if(t){const o=s(e.textures),r=s(e.images);o.length>0&&(n.textures=o),r.length>0&&(n.images=r)}return n}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let n=null;if(t!==null){const s=t.length;n=new Array(s);for(let o=0;o!==s;++o)n[o]=t[o].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}}class ti extends _n{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new se(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new zt,this.combine=qc,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const Rt=new A,Er=new me;class At{constructor(e,t,n=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=Rc,this.updateRanges=[],this.gpuType=qn,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let s=0,o=this.itemSize;s<o;s++)this.array[e+s]=t.array[n+s];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)Er.fromBufferAttribute(this,t),Er.applyMatrix3(e),this.setXY(t,Er.x,Er.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)Rt.fromBufferAttribute(this,t),Rt.applyMatrix3(e),this.setXYZ(t,Rt.x,Rt.y,Rt.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)Rt.fromBufferAttribute(this,t),Rt.applyMatrix4(e),this.setXYZ(t,Rt.x,Rt.y,Rt.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)Rt.fromBufferAttribute(this,t),Rt.applyNormalMatrix(e),this.setXYZ(t,Rt.x,Rt.y,Rt.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)Rt.fromBufferAttribute(this,t),Rt.transformDirection(e),this.setXYZ(t,Rt.x,Rt.y,Rt.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=Xn(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=at(n,this.array)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=Xn(t,this.array)),t}setX(e,t){return this.normalized&&(t=at(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=Xn(t,this.array)),t}setY(e,t){return this.normalized&&(t=at(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=Xn(t,this.array)),t}setZ(e,t){return this.normalized&&(t=at(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=Xn(t,this.array)),t}setW(e,t){return this.normalized&&(t=at(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=at(t,this.array),n=at(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,s){return e*=this.itemSize,this.normalized&&(t=at(t,this.array),n=at(n,this.array),s=at(s,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=s,this}setXYZW(e,t,n,s,o){return e*=this.itemSize,this.normalized&&(t=at(t,this.array),n=at(n,this.array),s=at(s,this.array),o=at(o,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=s,this.array[e+3]=o,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Rc&&(e.usage=this.usage),e}}class lf extends At{constructor(e,t,n){super(new Uint16Array(e),t,n)}}class cf extends At{constructor(e,t,n){super(new Uint32Array(e),t,n)}}class je extends At{constructor(e,t,n){super(new Float32Array(e),t,n)}}let eg=0;const Cn=new De,ul=new mt,Ns=new A,yn=new Nn,Do=new Nn,Ot=new A;class xt extends ws{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:eg++}),this.uuid=Yn(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(sf(e)?cf:lf)(e,1):this.index=e,this}setIndirect(e){return this.indirect=e,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const o=new Fe().getNormalMatrix(e);n.applyNormalMatrix(o),n.needsUpdate=!0}const s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(e),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return Cn.makeRotationFromQuaternion(e),this.applyMatrix4(Cn),this}rotateX(e){return Cn.makeRotationX(e),this.applyMatrix4(Cn),this}rotateY(e){return Cn.makeRotationY(e),this.applyMatrix4(Cn),this}rotateZ(e){return Cn.makeRotationZ(e),this.applyMatrix4(Cn),this}translate(e,t,n){return Cn.makeTranslation(e,t,n),this.applyMatrix4(Cn),this}scale(e,t,n){return Cn.makeScale(e,t,n),this.applyMatrix4(Cn),this}lookAt(e){return ul.lookAt(e),ul.updateMatrix(),this.applyMatrix4(ul.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Ns).negate(),this.translate(Ns.x,Ns.y,Ns.z),this}setFromPoints(e){const t=this.getAttribute("position");if(t===void 0){const n=[];for(let s=0,o=e.length;s<o;s++){const r=e[s];n.push(r.x,r.y,r.z||0)}this.setAttribute("position",new je(n,3))}else{const n=Math.min(e.length,t.count);for(let s=0;s<n;s++){const o=e[s];t.setXYZ(s,o.x,o.y,o.z||0)}e.length>t.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Nn);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new A(-1/0,-1/0,-1/0),new A(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,s=t.length;n<s;n++){const o=t[n];yn.setFromBufferAttribute(o),this.morphTargetsRelative?(Ot.addVectors(this.boundingBox.min,yn.min),this.boundingBox.expandByPoint(Ot),Ot.addVectors(this.boundingBox.max,yn.max),this.boundingBox.expandByPoint(Ot)):(this.boundingBox.expandByPoint(yn.min),this.boundingBox.expandByPoint(yn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Un);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new A,1/0);return}if(e){const n=this.boundingSphere.center;if(yn.setFromBufferAttribute(e),t)for(let o=0,r=t.length;o<r;o++){const a=t[o];Do.setFromBufferAttribute(a),this.morphTargetsRelative?(Ot.addVectors(yn.min,Do.min),yn.expandByPoint(Ot),Ot.addVectors(yn.max,Do.max),yn.expandByPoint(Ot)):(yn.expandByPoint(Do.min),yn.expandByPoint(Do.max))}yn.getCenter(n);let s=0;for(let o=0,r=e.count;o<r;o++)Ot.fromBufferAttribute(e,o),s=Math.max(s,n.distanceToSquared(Ot));if(t)for(let o=0,r=t.length;o<r;o++){const a=t[o],l=this.morphTargetsRelative;for(let c=0,u=a.count;c<u;c++)Ot.fromBufferAttribute(a,c),l&&(Ns.fromBufferAttribute(e,c),Ot.add(Ns)),s=Math.max(s,n.distanceToSquared(Ot))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=t.position,s=t.normal,o=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new At(new Float32Array(4*n.count),4));const r=this.getAttribute("tangent"),a=[],l=[];for(let D=0;D<n.count;D++)a[D]=new A,l[D]=new A;const c=new A,u=new A,d=new A,h=new me,f=new me,_=new me,g=new A,m=new A;function p(D,S,x){c.fromBufferAttribute(n,D),u.fromBufferAttribute(n,S),d.fromBufferAttribute(n,x),h.fromBufferAttribute(o,D),f.fromBufferAttribute(o,S),_.fromBufferAttribute(o,x),u.sub(c),d.sub(c),f.sub(h),_.sub(h);const P=1/(f.x*_.y-_.x*f.y);isFinite(P)&&(g.copy(u).multiplyScalar(_.y).addScaledVector(d,-f.y).multiplyScalar(P),m.copy(d).multiplyScalar(f.x).addScaledVector(u,-_.x).multiplyScalar(P),a[D].add(g),a[S].add(g),a[x].add(g),l[D].add(m),l[S].add(m),l[x].add(m))}let y=this.groups;y.length===0&&(y=[{start:0,count:e.count}]);for(let D=0,S=y.length;D<S;++D){const x=y[D],P=x.start,F=x.count;for(let O=P,k=P+F;O<k;O+=3)p(e.getX(O+0),e.getX(O+1),e.getX(O+2))}const w=new A,v=new A,b=new A,E=new A;function C(D){b.fromBufferAttribute(s,D),E.copy(b);const S=a[D];w.copy(S),w.sub(b.multiplyScalar(b.dot(S))).normalize(),v.crossVectors(E,S);const P=v.dot(l[D])<0?-1:1;r.setXYZW(D,w.x,w.y,w.z,P)}for(let D=0,S=y.length;D<S;++D){const x=y[D],P=x.start,F=x.count;for(let O=P,k=P+F;O<k;O+=3)C(e.getX(O+0)),C(e.getX(O+1)),C(e.getX(O+2))}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new At(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let h=0,f=n.count;h<f;h++)n.setXYZ(h,0,0,0);const s=new A,o=new A,r=new A,a=new A,l=new A,c=new A,u=new A,d=new A;if(e)for(let h=0,f=e.count;h<f;h+=3){const _=e.getX(h+0),g=e.getX(h+1),m=e.getX(h+2);s.fromBufferAttribute(t,_),o.fromBufferAttribute(t,g),r.fromBufferAttribute(t,m),u.subVectors(r,o),d.subVectors(s,o),u.cross(d),a.fromBufferAttribute(n,_),l.fromBufferAttribute(n,g),c.fromBufferAttribute(n,m),a.add(u),l.add(u),c.add(u),n.setXYZ(_,a.x,a.y,a.z),n.setXYZ(g,l.x,l.y,l.z),n.setXYZ(m,c.x,c.y,c.z)}else for(let h=0,f=t.count;h<f;h+=3)s.fromBufferAttribute(t,h+0),o.fromBufferAttribute(t,h+1),r.fromBufferAttribute(t,h+2),u.subVectors(r,o),d.subVectors(s,o),u.cross(d),n.setXYZ(h+0,u.x,u.y,u.z),n.setXYZ(h+1,u.x,u.y,u.z),n.setXYZ(h+2,u.x,u.y,u.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)Ot.fromBufferAttribute(e,t),Ot.normalize(),e.setXYZ(t,Ot.x,Ot.y,Ot.z)}toNonIndexed(){function e(a,l){const c=a.array,u=a.itemSize,d=a.normalized,h=new c.constructor(l.length*u);let f=0,_=0;for(let g=0,m=l.length;g<m;g++){a.isInterleavedBufferAttribute?f=l[g]*a.data.stride+a.offset:f=l[g]*u;for(let p=0;p<u;p++)h[_++]=c[f++]}return new At(h,u,d)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new xt,n=this.index.array,s=this.attributes;for(const a in s){const l=s[a],c=e(l,n);t.setAttribute(a,c)}const o=this.morphAttributes;for(const a in o){const l=[],c=o[a];for(let u=0,d=c.length;u<d;u++){const h=c[u],f=e(h,n);l.push(f)}t.morphAttributes[a]=l}t.morphTargetsRelative=this.morphTargetsRelative;const r=this.groups;for(let a=0,l=r.length;a<l;a++){const c=r[a];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){const e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const n=this.attributes;for(const l in n){const c=n[l];e.data.attributes[l]=c.toJSON(e.data)}const s={};let o=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],u=[];for(let d=0,h=c.length;d<h;d++){const f=c[d];u.push(f.toJSON(e.data))}u.length>0&&(s[l]=u,o=!0)}o&&(e.data.morphAttributes=s,e.data.morphTargetsRelative=this.morphTargetsRelative);const r=this.groups;r.length>0&&(e.data.groups=JSON.parse(JSON.stringify(r)));const a=this.boundingSphere;return a!==null&&(e.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const n=e.index;n!==null&&this.setIndex(n.clone(t));const s=e.attributes;for(const c in s){const u=s[c];this.setAttribute(c,u.clone(t))}const o=e.morphAttributes;for(const c in o){const u=[],d=o[c];for(let h=0,f=d.length;h<f;h++)u.push(d[h].clone(t));this.morphAttributes[c]=u}this.morphTargetsRelative=e.morphTargetsRelative;const r=e.groups;for(let c=0,u=r.length;c<u;c++){const d=r[c];this.addGroup(d.start,d.count,d.materialIndex)}const a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Ju=new De,Ki=new wo,br=new Un,Qu=new A,Tr=new A,Ar=new A,Cr=new A,dl=new A,Rr=new A,ed=new A,Pr=new A;class oe extends mt{constructor(e=new xt,t=new ti){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const s=t[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let o=0,r=s.length;o<r;o++){const a=s[o].name||String(o);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=o}}}}getVertexPosition(e,t){const n=this.geometry,s=n.attributes.position,o=n.morphAttributes.position,r=n.morphTargetsRelative;t.fromBufferAttribute(s,e);const a=this.morphTargetInfluences;if(o&&a){Rr.set(0,0,0);for(let l=0,c=o.length;l<c;l++){const u=a[l],d=o[l];u!==0&&(dl.fromBufferAttribute(d,e),r?Rr.addScaledVector(dl,u):Rr.addScaledVector(dl.sub(t),u))}t.add(Rr)}return t}raycast(e,t){const n=this.geometry,s=this.material,o=this.matrixWorld;s!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),br.copy(n.boundingSphere),br.applyMatrix4(o),Ki.copy(e.ray).recast(e.near),!(br.containsPoint(Ki.origin)===!1&&(Ki.intersectSphere(br,Qu)===null||Ki.origin.distanceToSquared(Qu)>(e.far-e.near)**2))&&(Ju.copy(o).invert(),Ki.copy(e.ray).applyMatrix4(Ju),!(n.boundingBox!==null&&Ki.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,Ki)))}_computeIntersections(e,t,n){let s;const o=this.geometry,r=this.material,a=o.index,l=o.attributes.position,c=o.attributes.uv,u=o.attributes.uv1,d=o.attributes.normal,h=o.groups,f=o.drawRange;if(a!==null)if(Array.isArray(r))for(let _=0,g=h.length;_<g;_++){const m=h[_],p=r[m.materialIndex],y=Math.max(m.start,f.start),w=Math.min(a.count,Math.min(m.start+m.count,f.start+f.count));for(let v=y,b=w;v<b;v+=3){const E=a.getX(v),C=a.getX(v+1),D=a.getX(v+2);s=Dr(this,p,e,n,c,u,d,E,C,D),s&&(s.faceIndex=Math.floor(v/3),s.face.materialIndex=m.materialIndex,t.push(s))}}else{const _=Math.max(0,f.start),g=Math.min(a.count,f.start+f.count);for(let m=_,p=g;m<p;m+=3){const y=a.getX(m),w=a.getX(m+1),v=a.getX(m+2);s=Dr(this,r,e,n,c,u,d,y,w,v),s&&(s.faceIndex=Math.floor(m/3),t.push(s))}}else if(l!==void 0)if(Array.isArray(r))for(let _=0,g=h.length;_<g;_++){const m=h[_],p=r[m.materialIndex],y=Math.max(m.start,f.start),w=Math.min(l.count,Math.min(m.start+m.count,f.start+f.count));for(let v=y,b=w;v<b;v+=3){const E=v,C=v+1,D=v+2;s=Dr(this,p,e,n,c,u,d,E,C,D),s&&(s.faceIndex=Math.floor(v/3),s.face.materialIndex=m.materialIndex,t.push(s))}}else{const _=Math.max(0,f.start),g=Math.min(l.count,f.start+f.count);for(let m=_,p=g;m<p;m+=3){const y=m,w=m+1,v=m+2;s=Dr(this,r,e,n,c,u,d,y,w,v),s&&(s.faceIndex=Math.floor(m/3),t.push(s))}}}}function tg(i,e,t,n,s,o,r,a){let l;if(e.side===gn?l=n.intersectTriangle(r,o,s,!0,a):l=n.intersectTriangle(s,o,r,e.side===yi,a),l===null)return null;Pr.copy(a),Pr.applyMatrix4(i.matrixWorld);const c=t.ray.origin.distanceTo(Pr);return c<t.near||c>t.far?null:{distance:c,point:Pr.clone(),object:i}}function Dr(i,e,t,n,s,o,r,a,l,c){i.getVertexPosition(a,Tr),i.getVertexPosition(l,Ar),i.getVertexPosition(c,Cr);const u=tg(i,e,t,n,Tr,Ar,Cr,ed);if(u){const d=new A;mn.getBarycoord(ed,Tr,Ar,Cr,d),s&&(u.uv=mn.getInterpolatedAttribute(s,a,l,c,d,new me)),o&&(u.uv1=mn.getInterpolatedAttribute(o,a,l,c,d,new me)),r&&(u.normal=mn.getInterpolatedAttribute(r,a,l,c,d,new A),u.normal.dot(n.direction)>0&&u.normal.multiplyScalar(-1));const h={a,b:l,c,normal:new A,materialIndex:0};mn.getNormal(Tr,Ar,Cr,h.normal),u.face=h,u.barycoord=d}return u}class Et extends xt{constructor(e=1,t=1,n=1,s=1,o=1,r=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:s,heightSegments:o,depthSegments:r};const a=this;s=Math.floor(s),o=Math.floor(o),r=Math.floor(r);const l=[],c=[],u=[],d=[];let h=0,f=0;_("z","y","x",-1,-1,n,t,e,r,o,0),_("z","y","x",1,-1,n,t,-e,r,o,1),_("x","z","y",1,1,e,n,t,s,r,2),_("x","z","y",1,-1,e,n,-t,s,r,3),_("x","y","z",1,-1,e,t,n,s,o,4),_("x","y","z",-1,-1,e,t,-n,s,o,5),this.setIndex(l),this.setAttribute("position",new je(c,3)),this.setAttribute("normal",new je(u,3)),this.setAttribute("uv",new je(d,2));function _(g,m,p,y,w,v,b,E,C,D,S){const x=v/C,P=b/D,F=v/2,O=b/2,k=E/2,L=C+1,N=D+1;let V=0,H=0;const j=new A;for(let $=0;$<N;$++){const ae=$*P-O;for(let ye=0;ye<L;ye++){const He=ye*x-F;j[g]=He*y,j[m]=ae*w,j[p]=k,c.push(j.x,j.y,j.z),j[g]=0,j[m]=0,j[p]=E>0?1:-1,u.push(j.x,j.y,j.z),d.push(ye/C),d.push(1-$/D),V+=1}}for(let $=0;$<D;$++)for(let ae=0;ae<C;ae++){const ye=h+ae+L*$,He=h+ae+L*($+1),Y=h+(ae+1)+L*($+1),ie=h+(ae+1)+L*$;l.push(ye,He,ie),l.push(He,Y,ie),H+=6}a.addGroup(f,H,S),f+=H,h+=V}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Et(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function mo(i){const e={};for(const t in i){e[t]={};for(const n in i[t]){const s=i[t][n];s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)?s.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=s.clone():Array.isArray(s)?e[t][n]=s.slice():e[t][n]=s}}return e}function Qt(i){const e={};for(let t=0;t<i.length;t++){const n=mo(i[t]);for(const s in n)e[s]=n[s]}return e}function ng(i){const e=[];for(let t=0;t<i.length;t++)e.push(i[t].clone());return e}function uf(i){const e=i.getRenderTarget();return e===null?i.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:Ze.workingColorSpace}const Ss={clone:mo,merge:Qt};var ig=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,sg=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class bt extends _n{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=ig,this.fragmentShader=sg,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=mo(e.uniforms),this.uniformsGroups=ng(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const s in this.uniforms){const r=this.uniforms[s].value;r&&r.isTexture?t.uniforms[s]={type:"t",value:r.toJSON(e).uuid}:r&&r.isColor?t.uniforms[s]={type:"c",value:r.getHex()}:r&&r.isVector2?t.uniforms[s]={type:"v2",value:r.toArray()}:r&&r.isVector3?t.uniforms[s]={type:"v3",value:r.toArray()}:r&&r.isVector4?t.uniforms[s]={type:"v4",value:r.toArray()}:r&&r.isMatrix3?t.uniforms[s]={type:"m3",value:r.toArray()}:r&&r.isMatrix4?t.uniforms[s]={type:"m4",value:r.toArray()}:t.uniforms[s]={value:r}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const n={};for(const s in this.extensions)this.extensions[s]===!0&&(n[s]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}}class df extends mt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new De,this.projectionMatrix=new De,this.projectionMatrixInverse=new De,this.coordinateSystem=gi}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const Ri=new A,td=new me,nd=new me;class sn extends df{constructor(e=50,t=1,n=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=s,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=po*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(Qs*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return po*2*Math.atan(Math.tan(Qs*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,n){Ri.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(Ri.x,Ri.y).multiplyScalar(-e/Ri.z),Ri.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Ri.x,Ri.y).multiplyScalar(-e/Ri.z)}getViewSize(e,t){return this.getViewBounds(e,td,nd),t.subVectors(nd,td)}setViewOffset(e,t,n,s,o,r){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=s,this.view.width=o,this.view.height=r,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(Qs*.5*this.fov)/this.zoom,n=2*t,s=this.aspect*n,o=-.5*s;const r=this.view;if(this.view!==null&&this.view.enabled){const l=r.fullWidth,c=r.fullHeight;o+=r.offsetX*s/l,t-=r.offsetY*n/c,s*=r.width/l,n*=r.height/c}const a=this.filmOffset;a!==0&&(o+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(o,o+s,t,t-n,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const Us=-90,Fs=1;class og extends mt{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const s=new sn(Us,Fs,e,t);s.layers=this.layers,this.add(s);const o=new sn(Us,Fs,e,t);o.layers=this.layers,this.add(o);const r=new sn(Us,Fs,e,t);r.layers=this.layers,this.add(r);const a=new sn(Us,Fs,e,t);a.layers=this.layers,this.add(a);const l=new sn(Us,Fs,e,t);l.layers=this.layers,this.add(l);const c=new sn(Us,Fs,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[n,s,o,r,a,l]=t;for(const c of t)this.remove(c);if(e===gi)n.up.set(0,1,0),n.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),o.up.set(0,0,-1),o.lookAt(0,1,0),r.up.set(0,0,1),r.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===Ma)n.up.set(0,-1,0),n.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),o.up.set(0,0,1),o.lookAt(0,1,0),r.up.set(0,0,-1),r.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const c of t)this.add(c),c.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:s}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[o,r,a,l,c,u]=this.children,d=e.getRenderTarget(),h=e.getActiveCubeFace(),f=e.getActiveMipmapLevel(),_=e.xr.enabled;e.xr.enabled=!1;const g=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,e.setRenderTarget(n,0,s),e.render(t,o),e.setRenderTarget(n,1,s),e.render(t,r),e.setRenderTarget(n,2,s),e.render(t,a),e.setRenderTarget(n,3,s),e.render(t,l),e.setRenderTarget(n,4,s),e.render(t,c),n.texture.generateMipmaps=g,e.setRenderTarget(n,5,s),e.render(t,u),e.setRenderTarget(d,h,f),e.xr.enabled=_,n.texture.needsPMREMUpdate=!0}}class hf extends Bt{constructor(e,t,n,s,o,r,a,l,c,u){e=e!==void 0?e:[],t=t!==void 0?t:lo,super(e,t,n,s,o,r,a,l,c,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class rg extends tn{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const n={width:e,height:e,depth:1},s=[n,n,n,n,n,n];this.texture=new hf(s,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:Sn}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},s=new Et(5,5,5),o=new bt({name:"CubemapFromEquirect",uniforms:mo(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:gn,blending:$n});o.uniforms.tEquirect.value=t;const r=new oe(s,o),a=t.minFilter;return t.minFilter===mi&&(t.minFilter=Sn),new og(1,10,this).update(e,r),t.minFilter=a,r.geometry.dispose(),r.material.dispose(),this}clear(e,t,n,s){const o=e.getRenderTarget();for(let r=0;r<6;r++)e.setRenderTarget(this,r),e.clear(t,n,s);e.setRenderTarget(o)}}class ag extends mt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new zt,this.environmentIntensity=1,this.environmentRotation=new zt,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}}class ff{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e!==void 0?e.length/t:0,this.usage=Rc,this.updateRanges=[],this.version=0,this.uuid=Yn()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,n){e*=this.stride,n*=t.stride;for(let s=0,o=this.stride;s<o;s++)this.array[e+s]=t.array[n+s];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Yn()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);const t=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),n=new this.constructor(t,this.stride);return n.setUsage(this.usage),n}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){return e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Yn()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}}const Jt=new A;class In{constructor(e,t,n,s=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=t,this.offset=n,this.normalized=s}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,n=this.data.count;t<n;t++)Jt.fromBufferAttribute(this,t),Jt.applyMatrix4(e),this.setXYZ(t,Jt.x,Jt.y,Jt.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)Jt.fromBufferAttribute(this,t),Jt.applyNormalMatrix(e),this.setXYZ(t,Jt.x,Jt.y,Jt.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)Jt.fromBufferAttribute(this,t),Jt.transformDirection(e),this.setXYZ(t,Jt.x,Jt.y,Jt.z);return this}getComponent(e,t){let n=this.array[e*this.data.stride+this.offset+t];return this.normalized&&(n=Xn(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=at(n,this.array)),this.data.array[e*this.data.stride+this.offset+t]=n,this}setX(e,t){return this.normalized&&(t=at(t,this.array)),this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.normalized&&(t=at(t,this.array)),this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.normalized&&(t=at(t,this.array)),this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.normalized&&(t=at(t,this.array)),this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){let t=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(t=Xn(t,this.array)),t}getY(e){let t=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(t=Xn(t,this.array)),t}getZ(e){let t=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(t=Xn(t,this.array)),t}getW(e){let t=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(t=Xn(t,this.array)),t}setXY(e,t,n){return e=e*this.data.stride+this.offset,this.normalized&&(t=at(t,this.array),n=at(n,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this}setXYZ(e,t,n,s){return e=e*this.data.stride+this.offset,this.normalized&&(t=at(t,this.array),n=at(n,this.array),s=at(s,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=s,this}setXYZW(e,t,n,s,o){return e=e*this.data.stride+this.offset,this.normalized&&(t=at(t,this.array),n=at(n,this.array),s=at(s,this.array),o=at(o,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=s,this.data.array[e+3]=o,this}clone(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let n=0;n<this.count;n++){const s=n*this.data.stride+this.offset;for(let o=0;o<this.itemSize;o++)t.push(this.data.array[s+o])}return new At(new this.array.constructor(t),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new In(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let n=0;n<this.count;n++){const s=n*this.data.stride+this.offset;for(let o=0;o<this.itemSize;o++)t.push(this.data.array[s+o])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:t,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}const id=new A,sd=new We,od=new We,lg=new A,rd=new De,Lr=new A,hl=new Un,ad=new De,fl=new wo;class cg extends oe{constructor(e,t){super(e,t),this.isSkinnedMesh=!0,this.type="SkinnedMesh",this.bindMode=Iu,this.bindMatrix=new De,this.bindMatrixInverse=new De,this.boundingBox=null,this.boundingSphere=null}computeBoundingBox(){const e=this.geometry;this.boundingBox===null&&(this.boundingBox=new Nn),this.boundingBox.makeEmpty();const t=e.getAttribute("position");for(let n=0;n<t.count;n++)this.getVertexPosition(n,Lr),this.boundingBox.expandByPoint(Lr)}computeBoundingSphere(){const e=this.geometry;this.boundingSphere===null&&(this.boundingSphere=new Un),this.boundingSphere.makeEmpty();const t=e.getAttribute("position");for(let n=0;n<t.count;n++)this.getVertexPosition(n,Lr),this.boundingSphere.expandByPoint(Lr)}copy(e,t){return super.copy(e,t),this.bindMode=e.bindMode,this.bindMatrix.copy(e.bindMatrix),this.bindMatrixInverse.copy(e.bindMatrixInverse),this.skeleton=e.skeleton,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}raycast(e,t){const n=this.material,s=this.matrixWorld;n!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),hl.copy(this.boundingSphere),hl.applyMatrix4(s),e.ray.intersectsSphere(hl)!==!1&&(ad.copy(s).invert(),fl.copy(e.ray).applyMatrix4(ad),!(this.boundingBox!==null&&fl.intersectsBox(this.boundingBox)===!1)&&this._computeIntersections(e,t,fl)))}getVertexPosition(e,t){return super.getVertexPosition(e,t),this.applyBoneTransform(e,t),t}bind(e,t){this.skeleton=e,t===void 0&&(this.updateMatrixWorld(!0),this.skeleton.calculateInverses(),t=this.matrixWorld),this.bindMatrix.copy(t),this.bindMatrixInverse.copy(t).invert()}pose(){this.skeleton.pose()}normalizeSkinWeights(){const e=new We,t=this.geometry.attributes.skinWeight;for(let n=0,s=t.count;n<s;n++){e.fromBufferAttribute(t,n);const o=1/e.manhattanLength();o!==1/0?e.multiplyScalar(o):e.set(1,0,0,0),t.setXYZW(n,e.x,e.y,e.z,e.w)}}updateMatrixWorld(e){super.updateMatrixWorld(e),this.bindMode===Iu?this.bindMatrixInverse.copy(this.matrixWorld).invert():this.bindMode===lm?this.bindMatrixInverse.copy(this.bindMatrix).invert():console.warn("THREE.SkinnedMesh: Unrecognized bindMode: "+this.bindMode)}applyBoneTransform(e,t){const n=this.skeleton,s=this.geometry;sd.fromBufferAttribute(s.attributes.skinIndex,e),od.fromBufferAttribute(s.attributes.skinWeight,e),id.copy(t).applyMatrix4(this.bindMatrix),t.set(0,0,0);for(let o=0;o<4;o++){const r=od.getComponent(o);if(r!==0){const a=sd.getComponent(o);rd.multiplyMatrices(n.bones[a].matrixWorld,n.boneInverses[a]),t.addScaledVector(lg.copy(id).applyMatrix4(rd),r)}}return t.applyMatrix4(this.bindMatrixInverse)}}class pf extends mt{constructor(){super(),this.isBone=!0,this.type="Bone"}}class mf extends Bt{constructor(e=null,t=1,n=1,s,o,r,a,l,c=an,u=an,d,h){super(null,r,a,l,c,u,s,o,d,h),this.isDataTexture=!0,this.image={data:e,width:t,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const ld=new De,ug=new De;class nu{constructor(e=[],t=[]){this.uuid=Yn(),this.bones=e.slice(0),this.boneInverses=t,this.boneMatrices=null,this.boneTexture=null,this.init()}init(){const e=this.bones,t=this.boneInverses;if(this.boneMatrices=new Float32Array(e.length*16),t.length===0)this.calculateInverses();else if(e.length!==t.length){console.warn("THREE.Skeleton: Number of inverse bone matrices does not match amount of bones."),this.boneInverses=[];for(let n=0,s=this.bones.length;n<s;n++)this.boneInverses.push(new De)}}calculateInverses(){this.boneInverses.length=0;for(let e=0,t=this.bones.length;e<t;e++){const n=new De;this.bones[e]&&n.copy(this.bones[e].matrixWorld).invert(),this.boneInverses.push(n)}}pose(){for(let e=0,t=this.bones.length;e<t;e++){const n=this.bones[e];n&&n.matrixWorld.copy(this.boneInverses[e]).invert()}for(let e=0,t=this.bones.length;e<t;e++){const n=this.bones[e];n&&(n.parent&&n.parent.isBone?(n.matrix.copy(n.parent.matrixWorld).invert(),n.matrix.multiply(n.matrixWorld)):n.matrix.copy(n.matrixWorld),n.matrix.decompose(n.position,n.quaternion,n.scale))}}update(){const e=this.bones,t=this.boneInverses,n=this.boneMatrices,s=this.boneTexture;for(let o=0,r=e.length;o<r;o++){const a=e[o]?e[o].matrixWorld:ug;ld.multiplyMatrices(a,t[o]),ld.toArray(n,o*16)}s!==null&&(s.needsUpdate=!0)}clone(){return new nu(this.bones,this.boneInverses)}computeBoneTexture(){let e=Math.sqrt(this.bones.length*4);e=Math.ceil(e/4)*4,e=Math.max(e,4);const t=new Float32Array(e*e*4);t.set(this.boneMatrices);const n=new mf(t,e,e,Ln,qn);return n.needsUpdate=!0,this.boneMatrices=t,this.boneTexture=n,this}getBoneByName(e){for(let t=0,n=this.bones.length;t<n;t++){const s=this.bones[t];if(s.name===e)return s}}dispose(){this.boneTexture!==null&&(this.boneTexture.dispose(),this.boneTexture=null)}fromJSON(e,t){this.uuid=e.uuid;for(let n=0,s=e.bones.length;n<s;n++){const o=e.bones[n];let r=t[o];r===void 0&&(console.warn("THREE.Skeleton: No bone found with UUID:",o),r=new pf),this.bones.push(r),this.boneInverses.push(new De().fromArray(e.boneInverses[n]))}return this.init(),this}toJSON(){const e={metadata:{version:4.6,type:"Skeleton",generator:"Skeleton.toJSON"},bones:[],boneInverses:[]};e.uuid=this.uuid;const t=this.bones,n=this.boneInverses;for(let s=0,o=t.length;s<o;s++){const r=t[s];e.bones.push(r.uuid);const a=n[s];e.boneInverses.push(a.toArray())}return e}}class Pc extends At{constructor(e,t,n,s=1){super(e,t,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=s}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){const e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}}const Bs=new De,cd=new De,Ir=[],ud=new Nn,dg=new De,Lo=new oe,Io=new Un;class hg extends oe{constructor(e,t,n){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new Pc(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let s=0;s<n;s++)this.setMatrixAt(s,dg)}computeBoundingBox(){const e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new Nn),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,Bs),ud.copy(e.boundingBox).applyMatrix4(Bs),this.boundingBox.union(ud)}computeBoundingSphere(){const e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new Un),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,Bs),Io.copy(e.boundingSphere).applyMatrix4(Bs),this.boundingSphere.union(Io)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),e.morphTexture!==null&&(this.morphTexture=e.morphTexture.clone()),e.instanceColor!==null&&(this.instanceColor=e.instanceColor.clone()),this.count=e.count,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}getColorAt(e,t){t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){t.fromArray(this.instanceMatrix.array,e*16)}getMorphAt(e,t){const n=t.morphTargetInfluences,s=this.morphTexture.source.data.data,o=n.length+1,r=e*o+1;for(let a=0;a<n.length;a++)n[a]=s[r+a]}raycast(e,t){const n=this.matrixWorld,s=this.count;if(Lo.geometry=this.geometry,Lo.material=this.material,Lo.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Io.copy(this.boundingSphere),Io.applyMatrix4(n),e.ray.intersectsSphere(Io)!==!1))for(let o=0;o<s;o++){this.getMatrixAt(o,Bs),cd.multiplyMatrices(n,Bs),Lo.matrixWorld=cd,Lo.raycast(e,Ir);for(let r=0,a=Ir.length;r<a;r++){const l=Ir[r];l.instanceId=o,l.object=this,t.push(l)}Ir.length=0}}setColorAt(e,t){this.instanceColor===null&&(this.instanceColor=new Pc(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),t.toArray(this.instanceColor.array,e*3)}setMatrixAt(e,t){t.toArray(this.instanceMatrix.array,e*16)}setMorphAt(e,t){const n=t.morphTargetInfluences,s=n.length+1;this.morphTexture===null&&(this.morphTexture=new mf(new Float32Array(s*this.count),s,this.count,Kc,qn));const o=this.morphTexture.source.data.data;let r=0;for(let c=0;c<n.length;c++)r+=n[c];const a=this.geometry.morphTargetsRelative?1:1-r,l=s*e;o[l]=a,o.set(n,l+1)}updateMorphTargets(){}dispose(){return this.dispatchEvent({type:"dispose"}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null),this}}const pl=new A,fg=new A,pg=new Fe;class Oi{constructor(e=new A(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,s){return this.normal.set(e,t,n),this.constant=s,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){const s=pl.subVectors(n,t).cross(fg.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(s,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const n=e.delta(pl),s=this.normal.dot(n);if(s===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const o=-(e.start.dot(this.normal)+this.constant)/s;return o<0||o>1?null:t.copy(e.start).addScaledVector(n,o)}intersectsLine(e){const t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const n=t||pg.getNormalMatrix(e),s=this.coplanarPoint(pl).applyMatrix4(e),o=this.normal.applyMatrix3(n).normalize();return this.constant=-s.dot(o),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Zi=new Un,Or=new A;class iu{constructor(e=new Oi,t=new Oi,n=new Oi,s=new Oi,o=new Oi,r=new Oi){this.planes=[e,t,n,s,o,r]}set(e,t,n,s,o,r){const a=this.planes;return a[0].copy(e),a[1].copy(t),a[2].copy(n),a[3].copy(s),a[4].copy(o),a[5].copy(r),this}copy(e){const t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=gi){const n=this.planes,s=e.elements,o=s[0],r=s[1],a=s[2],l=s[3],c=s[4],u=s[5],d=s[6],h=s[7],f=s[8],_=s[9],g=s[10],m=s[11],p=s[12],y=s[13],w=s[14],v=s[15];if(n[0].setComponents(l-o,h-c,m-f,v-p).normalize(),n[1].setComponents(l+o,h+c,m+f,v+p).normalize(),n[2].setComponents(l+r,h+u,m+_,v+y).normalize(),n[3].setComponents(l-r,h-u,m-_,v-y).normalize(),n[4].setComponents(l-a,h-d,m-g,v-w).normalize(),t===gi)n[5].setComponents(l+a,h+d,m+g,v+w).normalize();else if(t===Ma)n[5].setComponents(a,d,g,w).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Zi.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),Zi.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Zi)}intersectsSprite(e){return Zi.center.set(0,0,0),Zi.radius=.7071067811865476,Zi.applyMatrix4(e.matrixWorld),this.intersectsSphere(Zi)}intersectsSphere(e){const t=this.planes,n=e.center,s=-e.radius;for(let o=0;o<6;o++)if(t[o].distanceToPoint(n)<s)return!1;return!0}intersectsBox(e){const t=this.planes;for(let n=0;n<6;n++){const s=t[n];if(Or.x=s.normal.x>0?e.max.x:e.min.x,Or.y=s.normal.y>0?e.max.y:e.min.y,Or.z=s.normal.z>0?e.max.z:e.min.z,s.distanceToPoint(Or)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class ps extends _n{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new se(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const Ea=new A,ba=new A,dd=new De,Oo=new wo,Nr=new Un,ml=new A,hd=new A;class Vn extends mt{constructor(e=new xt,t=new ps){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,n=[0];for(let s=1,o=t.count;s<o;s++)Ea.fromBufferAttribute(t,s-1),ba.fromBufferAttribute(t,s),n[s]=n[s-1],n[s]+=Ea.distanceTo(ba);e.setAttribute("lineDistance",new je(n,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,t){const n=this.geometry,s=this.matrixWorld,o=e.params.Line.threshold,r=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Nr.copy(n.boundingSphere),Nr.applyMatrix4(s),Nr.radius+=o,e.ray.intersectsSphere(Nr)===!1)return;dd.copy(s).invert(),Oo.copy(e.ray).applyMatrix4(dd);const a=o/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=this.isLineSegments?2:1,u=n.index,h=n.attributes.position;if(u!==null){const f=Math.max(0,r.start),_=Math.min(u.count,r.start+r.count);for(let g=f,m=_-1;g<m;g+=c){const p=u.getX(g),y=u.getX(g+1),w=Ur(this,e,Oo,l,p,y);w&&t.push(w)}if(this.isLineLoop){const g=u.getX(_-1),m=u.getX(f),p=Ur(this,e,Oo,l,g,m);p&&t.push(p)}}else{const f=Math.max(0,r.start),_=Math.min(h.count,r.start+r.count);for(let g=f,m=_-1;g<m;g+=c){const p=Ur(this,e,Oo,l,g,g+1);p&&t.push(p)}if(this.isLineLoop){const g=Ur(this,e,Oo,l,_-1,f);g&&t.push(g)}}}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const s=t[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let o=0,r=s.length;o<r;o++){const a=s[o].name||String(o);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=o}}}}}function Ur(i,e,t,n,s,o){const r=i.geometry.attributes.position;if(Ea.fromBufferAttribute(r,s),ba.fromBufferAttribute(r,o),t.distanceSqToSegment(Ea,ba,ml,hd)>n)return;ml.applyMatrix4(i.matrixWorld);const l=e.ray.origin.distanceTo(ml);if(!(l<e.near||l>e.far))return{distance:l,point:hd.clone().applyMatrix4(i.matrixWorld),index:s,face:null,faceIndex:null,barycoord:null,object:i}}const fd=new A,pd=new A;class Dc extends Vn{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,n=[];for(let s=0,o=t.count;s<o;s+=2)fd.fromBufferAttribute(t,s),pd.fromBufferAttribute(t,s+1),n[s]=s===0?0:n[s-1],n[s+1]=n[s]+fd.distanceTo(pd);e.setAttribute("lineDistance",new je(n,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class mg extends Vn{constructor(e,t){super(e,t),this.isLineLoop=!0,this.type="LineLoop"}}class Ws extends _n{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new se(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}const md=new De,Lc=new wo,Fr=new Un,Br=new A;class ma extends mt{constructor(e=new xt,t=new Ws){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,t){const n=this.geometry,s=this.matrixWorld,o=e.params.Points.threshold,r=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Fr.copy(n.boundingSphere),Fr.applyMatrix4(s),Fr.radius+=o,e.ray.intersectsSphere(Fr)===!1)return;md.copy(s).invert(),Lc.copy(e.ray).applyMatrix4(md);const a=o/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=n.index,d=n.attributes.position;if(c!==null){const h=Math.max(0,r.start),f=Math.min(c.count,r.start+r.count);for(let _=h,g=f;_<g;_++){const m=c.getX(_);Br.fromBufferAttribute(d,m),gd(Br,m,l,s,e,t,this)}}else{const h=Math.max(0,r.start),f=Math.min(d.count,r.start+r.count);for(let _=h,g=f;_<g;_++)Br.fromBufferAttribute(d,_),gd(Br,_,l,s,e,t,this)}}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const s=t[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let o=0,r=s.length;o<r;o++){const a=s[o].name||String(o);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=o}}}}}function gd(i,e,t,n,s,o,r){const a=Lc.distanceSqToPoint(i);if(a<t){const l=new A;Lc.closestPointToPoint(i,l),l.applyMatrix4(n);const c=s.ray.origin.distanceTo(l);if(c<s.near||c>s.far)return;o.push({distance:c,distanceToRay:Math.sqrt(a),point:l,index:e,face:null,faceIndex:null,barycoord:null,object:r})}}class Mn extends mt{constructor(){super(),this.isGroup=!0,this.type="Group"}}class gf extends Bt{constructor(e,t,n,s,o,r,a,l,c,u=Js){if(u!==Js&&u!==fo)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&u===Js&&(n=_s),n===void 0&&u===fo&&(n=ho),super(null,s,o,r,a,l,u,n,c),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=a!==void 0?a:an,this.minFilter=l!==void 0?l:an,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}class jt extends xt{constructor(e=1,t=1,n=1,s=32,o=1,r=!1,a=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:n,radialSegments:s,heightSegments:o,openEnded:r,thetaStart:a,thetaLength:l};const c=this;s=Math.floor(s),o=Math.floor(o);const u=[],d=[],h=[],f=[];let _=0;const g=[],m=n/2;let p=0;y(),r===!1&&(e>0&&w(!0),t>0&&w(!1)),this.setIndex(u),this.setAttribute("position",new je(d,3)),this.setAttribute("normal",new je(h,3)),this.setAttribute("uv",new je(f,2));function y(){const v=new A,b=new A;let E=0;const C=(t-e)/n;for(let D=0;D<=o;D++){const S=[],x=D/o,P=x*(t-e)+e;for(let F=0;F<=s;F++){const O=F/s,k=O*l+a,L=Math.sin(k),N=Math.cos(k);b.x=P*L,b.y=-x*n+m,b.z=P*N,d.push(b.x,b.y,b.z),v.set(L,C,N).normalize(),h.push(v.x,v.y,v.z),f.push(O,1-x),S.push(_++)}g.push(S)}for(let D=0;D<s;D++)for(let S=0;S<o;S++){const x=g[S][D],P=g[S+1][D],F=g[S+1][D+1],O=g[S][D+1];(e>0||S!==0)&&(u.push(x,P,O),E+=3),(t>0||S!==o-1)&&(u.push(P,F,O),E+=3)}c.addGroup(p,E,0),p+=E}function w(v){const b=_,E=new me,C=new A;let D=0;const S=v===!0?e:t,x=v===!0?1:-1;for(let F=1;F<=s;F++)d.push(0,m*x,0),h.push(0,x,0),f.push(.5,.5),_++;const P=_;for(let F=0;F<=s;F++){const k=F/s*l+a,L=Math.cos(k),N=Math.sin(k);C.x=S*N,C.y=m*x,C.z=S*L,d.push(C.x,C.y,C.z),h.push(0,x,0),E.x=L*.5+.5,E.y=N*.5*x+.5,f.push(E.x,E.y),_++}for(let F=0;F<s;F++){const O=b+F,k=P+F;v===!0?u.push(k,k+1,O):u.push(k+1,k,O),D+=3}c.addGroup(p,D,v===!0?1:2),p+=D}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new jt(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class su extends xt{constructor(e=[],t=[],n=1,s=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:e,indices:t,radius:n,detail:s};const o=[],r=[];a(s),c(n),u(),this.setAttribute("position",new je(o,3)),this.setAttribute("normal",new je(o.slice(),3)),this.setAttribute("uv",new je(r,2)),s===0?this.computeVertexNormals():this.normalizeNormals();function a(y){const w=new A,v=new A,b=new A;for(let E=0;E<t.length;E+=3)f(t[E+0],w),f(t[E+1],v),f(t[E+2],b),l(w,v,b,y)}function l(y,w,v,b){const E=b+1,C=[];for(let D=0;D<=E;D++){C[D]=[];const S=y.clone().lerp(v,D/E),x=w.clone().lerp(v,D/E),P=E-D;for(let F=0;F<=P;F++)F===0&&D===E?C[D][F]=S:C[D][F]=S.clone().lerp(x,F/P)}for(let D=0;D<E;D++)for(let S=0;S<2*(E-D)-1;S++){const x=Math.floor(S/2);S%2===0?(h(C[D][x+1]),h(C[D+1][x]),h(C[D][x])):(h(C[D][x+1]),h(C[D+1][x+1]),h(C[D+1][x]))}}function c(y){const w=new A;for(let v=0;v<o.length;v+=3)w.x=o[v+0],w.y=o[v+1],w.z=o[v+2],w.normalize().multiplyScalar(y),o[v+0]=w.x,o[v+1]=w.y,o[v+2]=w.z}function u(){const y=new A;for(let w=0;w<o.length;w+=3){y.x=o[w+0],y.y=o[w+1],y.z=o[w+2];const v=m(y)/2/Math.PI+.5,b=p(y)/Math.PI+.5;r.push(v,1-b)}_(),d()}function d(){for(let y=0;y<r.length;y+=6){const w=r[y+0],v=r[y+2],b=r[y+4],E=Math.max(w,v,b),C=Math.min(w,v,b);E>.9&&C<.1&&(w<.2&&(r[y+0]+=1),v<.2&&(r[y+2]+=1),b<.2&&(r[y+4]+=1))}}function h(y){o.push(y.x,y.y,y.z)}function f(y,w){const v=y*3;w.x=e[v+0],w.y=e[v+1],w.z=e[v+2]}function _(){const y=new A,w=new A,v=new A,b=new A,E=new me,C=new me,D=new me;for(let S=0,x=0;S<o.length;S+=9,x+=6){y.set(o[S+0],o[S+1],o[S+2]),w.set(o[S+3],o[S+4],o[S+5]),v.set(o[S+6],o[S+7],o[S+8]),E.set(r[x+0],r[x+1]),C.set(r[x+2],r[x+3]),D.set(r[x+4],r[x+5]),b.copy(y).add(w).add(v).divideScalar(3);const P=m(b);g(E,x+0,y,P),g(C,x+2,w,P),g(D,x+4,v,P)}}function g(y,w,v,b){b<0&&y.x===1&&(r[w]=y.x-1),v.x===0&&v.z===0&&(r[w]=b/2/Math.PI+.5)}function m(y){return Math.atan2(y.z,-y.x)}function p(y){return Math.atan2(-y.y,Math.sqrt(y.x*y.x+y.z*y.z))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new su(e.vertices,e.indices,e.radius,e.details)}}const zr=new A,kr=new A,gl=new A,Hr=new mn;class ou extends xt{constructor(e=null,t=1){if(super(),this.type="EdgesGeometry",this.parameters={geometry:e,thresholdAngle:t},e!==null){const s=Math.pow(10,4),o=Math.cos(Qs*t),r=e.getIndex(),a=e.getAttribute("position"),l=r?r.count:a.count,c=[0,0,0],u=["a","b","c"],d=new Array(3),h={},f=[];for(let _=0;_<l;_+=3){r?(c[0]=r.getX(_),c[1]=r.getX(_+1),c[2]=r.getX(_+2)):(c[0]=_,c[1]=_+1,c[2]=_+2);const{a:g,b:m,c:p}=Hr;if(g.fromBufferAttribute(a,c[0]),m.fromBufferAttribute(a,c[1]),p.fromBufferAttribute(a,c[2]),Hr.getNormal(gl),d[0]=`${Math.round(g.x*s)},${Math.round(g.y*s)},${Math.round(g.z*s)}`,d[1]=`${Math.round(m.x*s)},${Math.round(m.y*s)},${Math.round(m.z*s)}`,d[2]=`${Math.round(p.x*s)},${Math.round(p.y*s)},${Math.round(p.z*s)}`,!(d[0]===d[1]||d[1]===d[2]||d[2]===d[0]))for(let y=0;y<3;y++){const w=(y+1)%3,v=d[y],b=d[w],E=Hr[u[y]],C=Hr[u[w]],D=`${v}_${b}`,S=`${b}_${v}`;S in h&&h[S]?(gl.dot(h[S].normal)<=o&&(f.push(E.x,E.y,E.z),f.push(C.x,C.y,C.z)),h[S]=null):D in h||(h[D]={index0:c[y],index1:c[w],normal:gl.clone()})}}for(const _ in h)if(h[_]){const{index0:g,index1:m}=h[_];zr.fromBufferAttribute(a,g),kr.fromBufferAttribute(a,m),f.push(zr.x,zr.y,zr.z),f.push(kr.x,kr.y,kr.z)}this.setAttribute("position",new je(f,3))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}}class Xs extends su{constructor(e=1,t=0){const n=[1,0,0,-1,0,0,0,1,0,0,-1,0,0,0,1,0,0,-1],s=[0,2,4,0,4,3,0,3,5,0,5,2,1,2,5,1,5,3,1,3,4,1,4,2];super(n,s,e,t),this.type="OctahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new Xs(e.radius,e.detail)}}class vs extends xt{constructor(e=1,t=1,n=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:s};const o=e/2,r=t/2,a=Math.floor(n),l=Math.floor(s),c=a+1,u=l+1,d=e/a,h=t/l,f=[],_=[],g=[],m=[];for(let p=0;p<u;p++){const y=p*h-r;for(let w=0;w<c;w++){const v=w*d-o;_.push(v,-y,0),g.push(0,0,1),m.push(w/a),m.push(1-p/l)}}for(let p=0;p<l;p++)for(let y=0;y<a;y++){const w=y+c*p,v=y+c*(p+1),b=y+1+c*(p+1),E=y+1+c*p;f.push(w,v,E),f.push(v,b,E)}this.setIndex(f),this.setAttribute("position",new je(_,3)),this.setAttribute("normal",new je(g,3)),this.setAttribute("uv",new je(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new vs(e.width,e.height,e.widthSegments,e.heightSegments)}}class xs extends xt{constructor(e=1,t=32,n=16,s=0,o=Math.PI*2,r=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:n,phiStart:s,phiLength:o,thetaStart:r,thetaLength:a},t=Math.max(3,Math.floor(t)),n=Math.max(2,Math.floor(n));const l=Math.min(r+a,Math.PI);let c=0;const u=[],d=new A,h=new A,f=[],_=[],g=[],m=[];for(let p=0;p<=n;p++){const y=[],w=p/n;let v=0;p===0&&r===0?v=.5/t:p===n&&l===Math.PI&&(v=-.5/t);for(let b=0;b<=t;b++){const E=b/t;d.x=-e*Math.cos(s+E*o)*Math.sin(r+w*a),d.y=e*Math.cos(r+w*a),d.z=e*Math.sin(s+E*o)*Math.sin(r+w*a),_.push(d.x,d.y,d.z),h.copy(d).normalize(),g.push(h.x,h.y,h.z),m.push(E+v,1-w),y.push(c++)}u.push(y)}for(let p=0;p<n;p++)for(let y=0;y<t;y++){const w=u[p][y+1],v=u[p][y],b=u[p+1][y],E=u[p+1][y+1];(p!==0||r>0)&&f.push(w,v,E),(p!==n-1||l<Math.PI)&&f.push(v,b,E)}this.setIndex(f),this.setAttribute("position",new je(_,3)),this.setAttribute("normal",new je(g,3)),this.setAttribute("uv",new je(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new xs(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}class cs extends xt{constructor(e=1,t=.4,n=12,s=48,o=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:e,tube:t,radialSegments:n,tubularSegments:s,arc:o},n=Math.floor(n),s=Math.floor(s);const r=[],a=[],l=[],c=[],u=new A,d=new A,h=new A;for(let f=0;f<=n;f++)for(let _=0;_<=s;_++){const g=_/s*o,m=f/n*Math.PI*2;d.x=(e+t*Math.cos(m))*Math.cos(g),d.y=(e+t*Math.cos(m))*Math.sin(g),d.z=t*Math.sin(m),a.push(d.x,d.y,d.z),u.x=e*Math.cos(g),u.y=e*Math.sin(g),h.subVectors(d,u).normalize(),l.push(h.x,h.y,h.z),c.push(_/s),c.push(f/n)}for(let f=1;f<=n;f++)for(let _=1;_<=s;_++){const g=(s+1)*f+_-1,m=(s+1)*(f-1)+_-1,p=(s+1)*(f-1)+_,y=(s+1)*f+_;r.push(g,m,y),r.push(m,p,y)}this.setIndex(r),this.setAttribute("position",new je(a,3)),this.setAttribute("normal",new je(l,3)),this.setAttribute("uv",new je(c,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new cs(e.radius,e.tube,e.radialSegments,e.tubularSegments,e.arc)}}class gg extends xt{constructor(e=null){if(super(),this.type="WireframeGeometry",this.parameters={geometry:e},e!==null){const t=[],n=new Set,s=new A,o=new A;if(e.index!==null){const r=e.attributes.position,a=e.index;let l=e.groups;l.length===0&&(l=[{start:0,count:a.count,materialIndex:0}]);for(let c=0,u=l.length;c<u;++c){const d=l[c],h=d.start,f=d.count;for(let _=h,g=h+f;_<g;_+=3)for(let m=0;m<3;m++){const p=a.getX(_+m),y=a.getX(_+(m+1)%3);s.fromBufferAttribute(r,p),o.fromBufferAttribute(r,y),_d(s,o,n)===!0&&(t.push(s.x,s.y,s.z),t.push(o.x,o.y,o.z))}}}else{const r=e.attributes.position;for(let a=0,l=r.count/3;a<l;a++)for(let c=0;c<3;c++){const u=3*a+c,d=3*a+(c+1)%3;s.fromBufferAttribute(r,u),o.fromBufferAttribute(r,d),_d(s,o,n)===!0&&(t.push(s.x,s.y,s.z),t.push(o.x,o.y,o.z))}}this.setAttribute("position",new je(t,3))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}}function _d(i,e,t){const n=`${i.x},${i.y},${i.z}-${e.x},${e.y},${e.z}`,s=`${e.x},${e.y},${e.z}-${i.x},${i.y},${i.z}`;return t.has(n)===!0||t.has(s)===!0?!1:(t.add(n),t.add(s),!0)}class So extends _n{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new se(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new se(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=za,this.normalScale=new me(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new zt,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class ni extends So{constructor(e){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new me(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return ke(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(t){this.ior=(1+.4*t)/(1-.4*t)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new se(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new se(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new se(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._dispersion=0,this._iridescence=0,this._sheen=0,this._transmission=0,this.setValues(e)}get anisotropy(){return this._anisotropy}set anisotropy(e){this._anisotropy>0!=e>0&&this.version++,this._anisotropy=e}get clearcoat(){return this._clearcoat}set clearcoat(e){this._clearcoat>0!=e>0&&this.version++,this._clearcoat=e}get iridescence(){return this._iridescence}set iridescence(e){this._iridescence>0!=e>0&&this.version++,this._iridescence=e}get dispersion(){return this._dispersion}set dispersion(e){this._dispersion>0!=e>0&&this.version++,this._dispersion=e}get sheen(){return this._sheen}set sheen(e){this._sheen>0!=e>0&&this.version++,this._sheen=e}get transmission(){return this._transmission}set transmission(e){this._transmission>0!=e>0&&this.version++,this._transmission=e}copy(e){return super.copy(e),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=e.anisotropy,this.anisotropyRotation=e.anisotropyRotation,this.anisotropyMap=e.anisotropyMap,this.clearcoat=e.clearcoat,this.clearcoatMap=e.clearcoatMap,this.clearcoatRoughness=e.clearcoatRoughness,this.clearcoatRoughnessMap=e.clearcoatRoughnessMap,this.clearcoatNormalMap=e.clearcoatNormalMap,this.clearcoatNormalScale.copy(e.clearcoatNormalScale),this.dispersion=e.dispersion,this.ior=e.ior,this.iridescence=e.iridescence,this.iridescenceMap=e.iridescenceMap,this.iridescenceIOR=e.iridescenceIOR,this.iridescenceThicknessRange=[...e.iridescenceThicknessRange],this.iridescenceThicknessMap=e.iridescenceThicknessMap,this.sheen=e.sheen,this.sheenColor.copy(e.sheenColor),this.sheenColorMap=e.sheenColorMap,this.sheenRoughness=e.sheenRoughness,this.sheenRoughnessMap=e.sheenRoughnessMap,this.transmission=e.transmission,this.transmissionMap=e.transmissionMap,this.thickness=e.thickness,this.thicknessMap=e.thicknessMap,this.attenuationDistance=e.attenuationDistance,this.attenuationColor.copy(e.attenuationColor),this.specularIntensity=e.specularIntensity,this.specularIntensityMap=e.specularIntensityMap,this.specularColor.copy(e.specularColor),this.specularColorMap=e.specularColorMap,this}}class _f extends _n{constructor(e){super(),this.isMeshPhongMaterial=!0,this.type="MeshPhongMaterial",this.color=new se(16777215),this.specular=new se(1118481),this.shininess=30,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new se(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=za,this.normalScale=new me(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new zt,this.combine=qc,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.specular.copy(e.specular),this.shininess=e.shininess,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class _g extends _n{constructor(e){super(),this.isMeshNormalMaterial=!0,this.type="MeshNormalMaterial",this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=za,this.normalScale=new me(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.flatShading=!1,this.setValues(e)}copy(e){return super.copy(e),this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.flatShading=e.flatShading,this}}class vf extends _n{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=dm,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class vg extends _n{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}class xg extends ps{constructor(e){super(),this.isLineDashedMaterial=!0,this.type="LineDashedMaterial",this.scale=1,this.dashSize=3,this.gapSize=1,this.setValues(e)}copy(e){return super.copy(e),this.scale=e.scale,this.dashSize=e.dashSize,this.gapSize=e.gapSize,this}}function Gr(i,e,t){return!i||!t&&i.constructor===e?i:typeof e.BYTES_PER_ELEMENT=="number"?new e(i):Array.prototype.slice.call(i)}function yg(i){return ArrayBuffer.isView(i)&&!(i instanceof DataView)}function wg(i){function e(s,o){return i[s]-i[o]}const t=i.length,n=new Array(t);for(let s=0;s!==t;++s)n[s]=s;return n.sort(e),n}function vd(i,e,t){const n=i.length,s=new i.constructor(n);for(let o=0,r=0;r!==n;++o){const a=t[o]*e;for(let l=0;l!==e;++l)s[r++]=i[a+l]}return s}function xf(i,e,t,n){let s=1,o=i[0];for(;o!==void 0&&o[n]===void 0;)o=i[s++];if(o===void 0)return;let r=o[n];if(r!==void 0)if(Array.isArray(r))do r=o[n],r!==void 0&&(e.push(o.time),t.push.apply(t,r)),o=i[s++];while(o!==void 0);else if(r.toArray!==void 0)do r=o[n],r!==void 0&&(e.push(o.time),r.toArray(t,t.length)),o=i[s++];while(o!==void 0);else do r=o[n],r!==void 0&&(e.push(o.time),t.push(r)),o=i[s++];while(o!==void 0)}class cr{constructor(e,t,n,s){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=s!==void 0?s:new t.constructor(n),this.sampleValues=t,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(e){const t=this.parameterPositions;let n=this._cachedIndex,s=t[n],o=t[n-1];n:{e:{let r;t:{i:if(!(e<s)){for(let a=n+2;;){if(s===void 0){if(e<o)break i;return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===a)break;if(o=s,s=t[++n],e<s)break e}r=t.length;break t}if(!(e>=o)){const a=t[1];e<a&&(n=2,o=a);for(let l=n-2;;){if(o===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===l)break;if(s=o,o=t[--n-1],e>=o)break e}r=n,n=0;break t}break n}for(;n<r;){const a=n+r>>>1;e<t[a]?r=a:n=a+1}if(s=t[n],o=t[n-1],o===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(s===void 0)return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,o,s)}return this.interpolate_(n,o,e,s)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){const t=this.resultBuffer,n=this.sampleValues,s=this.valueSize,o=e*s;for(let r=0;r!==s;++r)t[r]=n[o+r];return t}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}}class Sg extends cr{constructor(e,t,n,s){super(e,t,n,s),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:Ou,endingEnd:Ou}}intervalChanged_(e,t,n){const s=this.parameterPositions;let o=e-2,r=e+1,a=s[o],l=s[r];if(a===void 0)switch(this.getSettings_().endingStart){case Nu:o=e,a=2*t-n;break;case Uu:o=s.length-2,a=t+s[o]-s[o+1];break;default:o=e,a=n}if(l===void 0)switch(this.getSettings_().endingEnd){case Nu:r=e,l=2*n-t;break;case Uu:r=1,l=n+s[1]-s[0];break;default:r=e-1,l=t}const c=(n-t)*.5,u=this.valueSize;this._weightPrev=c/(t-a),this._weightNext=c/(l-n),this._offsetPrev=o*u,this._offsetNext=r*u}interpolate_(e,t,n,s){const o=this.resultBuffer,r=this.sampleValues,a=this.valueSize,l=e*a,c=l-a,u=this._offsetPrev,d=this._offsetNext,h=this._weightPrev,f=this._weightNext,_=(n-t)/(s-t),g=_*_,m=g*_,p=-h*m+2*h*g-h*_,y=(1+h)*m+(-1.5-2*h)*g+(-.5+h)*_+1,w=(-1-f)*m+(1.5+f)*g+.5*_,v=f*m-f*g;for(let b=0;b!==a;++b)o[b]=p*r[u+b]+y*r[c+b]+w*r[l+b]+v*r[d+b];return o}}class Mg extends cr{constructor(e,t,n,s){super(e,t,n,s)}interpolate_(e,t,n,s){const o=this.resultBuffer,r=this.sampleValues,a=this.valueSize,l=e*a,c=l-a,u=(n-t)/(s-t),d=1-u;for(let h=0;h!==a;++h)o[h]=r[c+h]*d+r[l+h]*u;return o}}class Eg extends cr{constructor(e,t,n,s){super(e,t,n,s)}interpolate_(e){return this.copySampleValue_(e-1)}}class ii{constructor(e,t,n,s){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=Gr(t,this.TimeBufferType),this.values=Gr(n,this.ValueBufferType),this.setInterpolation(s||this.DefaultInterpolation)}static toJSON(e){const t=e.constructor;let n;if(t.toJSON!==this.toJSON)n=t.toJSON(e);else{n={name:e.name,times:Gr(e.times,Array),values:Gr(e.values,Array)};const s=e.getInterpolation();s!==e.DefaultInterpolation&&(n.interpolation=s)}return n.type=e.ValueTypeName,n}InterpolantFactoryMethodDiscrete(e){return new Eg(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new Mg(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new Sg(this.times,this.values,this.getValueSize(),e)}setInterpolation(e){let t;switch(e){case ir:t=this.InterpolantFactoryMethodDiscrete;break;case sr:t=this.InterpolantFactoryMethodLinear;break;case qa:t=this.InterpolantFactoryMethodSmooth;break}if(t===void 0){const n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return console.warn("THREE.KeyframeTrack:",n),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return ir;case this.InterpolantFactoryMethodLinear:return sr;case this.InterpolantFactoryMethodSmooth:return qa}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){const t=this.times;for(let n=0,s=t.length;n!==s;++n)t[n]+=e}return this}scale(e){if(e!==1){const t=this.times;for(let n=0,s=t.length;n!==s;++n)t[n]*=e}return this}trim(e,t){const n=this.times,s=n.length;let o=0,r=s-1;for(;o!==s&&n[o]<e;)++o;for(;r!==-1&&n[r]>t;)--r;if(++r,o!==0||r!==s){o>=r&&(r=Math.max(r,1),o=r-1);const a=this.getValueSize();this.times=n.slice(o,r),this.values=this.values.slice(o*a,r*a)}return this}validate(){let e=!0;const t=this.getValueSize();t-Math.floor(t)!==0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),e=!1);const n=this.times,s=this.values,o=n.length;o===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),e=!1);let r=null;for(let a=0;a!==o;a++){const l=n[a];if(typeof l=="number"&&isNaN(l)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,a,l),e=!1;break}if(r!==null&&r>l){console.error("THREE.KeyframeTrack: Out of order keys.",this,a,l,r),e=!1;break}r=l}if(s!==void 0&&yg(s))for(let a=0,l=s.length;a!==l;++a){const c=s[a];if(isNaN(c)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,a,c),e=!1;break}}return e}optimize(){const e=this.times.slice(),t=this.values.slice(),n=this.getValueSize(),s=this.getInterpolation()===qa,o=e.length-1;let r=1;for(let a=1;a<o;++a){let l=!1;const c=e[a],u=e[a+1];if(c!==u&&(a!==1||c!==e[0]))if(s)l=!0;else{const d=a*n,h=d-n,f=d+n;for(let _=0;_!==n;++_){const g=t[d+_];if(g!==t[h+_]||g!==t[f+_]){l=!0;break}}}if(l){if(a!==r){e[r]=e[a];const d=a*n,h=r*n;for(let f=0;f!==n;++f)t[h+f]=t[d+f]}++r}}if(o>0){e[r]=e[o];for(let a=o*n,l=r*n,c=0;c!==n;++c)t[l+c]=t[a+c];++r}return r!==e.length?(this.times=e.slice(0,r),this.values=t.slice(0,r*n)):(this.times=e,this.values=t),this}clone(){const e=this.times.slice(),t=this.values.slice(),n=this.constructor,s=new n(this.name,e,t);return s.createInterpolant=this.createInterpolant,s}}ii.prototype.TimeBufferType=Float32Array;ii.prototype.ValueBufferType=Float32Array;ii.prototype.DefaultInterpolation=sr;class Mo extends ii{constructor(e,t,n){super(e,t,n)}}Mo.prototype.ValueTypeName="bool";Mo.prototype.ValueBufferType=Array;Mo.prototype.DefaultInterpolation=ir;Mo.prototype.InterpolantFactoryMethodLinear=void 0;Mo.prototype.InterpolantFactoryMethodSmooth=void 0;class yf extends ii{}yf.prototype.ValueTypeName="color";class go extends ii{}go.prototype.ValueTypeName="number";class bg extends cr{constructor(e,t,n,s){super(e,t,n,s)}interpolate_(e,t,n,s){const o=this.resultBuffer,r=this.sampleValues,a=this.valueSize,l=(n-t)/(s-t);let c=e*a;for(let u=c+a;c!==u;c+=4)pt.slerpFlat(o,0,r,c-a,r,c,l);return o}}class _o extends ii{InterpolantFactoryMethodLinear(e){return new bg(this.times,this.values,this.getValueSize(),e)}}_o.prototype.ValueTypeName="quaternion";_o.prototype.InterpolantFactoryMethodSmooth=void 0;class Eo extends ii{constructor(e,t,n){super(e,t,n)}}Eo.prototype.ValueTypeName="string";Eo.prototype.ValueBufferType=Array;Eo.prototype.DefaultInterpolation=ir;Eo.prototype.InterpolantFactoryMethodLinear=void 0;Eo.prototype.InterpolantFactoryMethodSmooth=void 0;class vo extends ii{}vo.prototype.ValueTypeName="vector";class Tg{constructor(e="",t=-1,n=[],s=cm){this.name=e,this.tracks=n,this.duration=t,this.blendMode=s,this.uuid=Yn(),this.duration<0&&this.resetDuration()}static parse(e){const t=[],n=e.tracks,s=1/(e.fps||1);for(let r=0,a=n.length;r!==a;++r)t.push(Cg(n[r]).scale(s));const o=new this(e.name,e.duration,t,e.blendMode);return o.uuid=e.uuid,o}static toJSON(e){const t=[],n=e.tracks,s={name:e.name,duration:e.duration,tracks:t,uuid:e.uuid,blendMode:e.blendMode};for(let o=0,r=n.length;o!==r;++o)t.push(ii.toJSON(n[o]));return s}static CreateFromMorphTargetSequence(e,t,n,s){const o=t.length,r=[];for(let a=0;a<o;a++){let l=[],c=[];l.push((a+o-1)%o,a,(a+1)%o),c.push(0,1,0);const u=wg(l);l=vd(l,1,u),c=vd(c,1,u),!s&&l[0]===0&&(l.push(o),c.push(c[0])),r.push(new go(".morphTargetInfluences["+t[a].name+"]",l,c).scale(1/n))}return new this(e,-1,r)}static findByName(e,t){let n=e;if(!Array.isArray(e)){const s=e;n=s.geometry&&s.geometry.animations||s.animations}for(let s=0;s<n.length;s++)if(n[s].name===t)return n[s];return null}static CreateClipsFromMorphTargetSequences(e,t,n){const s={},o=/^([\w-]*?)([\d]+)$/;for(let a=0,l=e.length;a<l;a++){const c=e[a],u=c.name.match(o);if(u&&u.length>1){const d=u[1];let h=s[d];h||(s[d]=h=[]),h.push(c)}}const r=[];for(const a in s)r.push(this.CreateFromMorphTargetSequence(a,s[a],t,n));return r}static parseAnimation(e,t){if(!e)return console.error("THREE.AnimationClip: No animation in JSONLoader data."),null;const n=function(d,h,f,_,g){if(f.length!==0){const m=[],p=[];xf(f,m,p,_),m.length!==0&&g.push(new d(h,m,p))}},s=[],o=e.name||"default",r=e.fps||30,a=e.blendMode;let l=e.length||-1;const c=e.hierarchy||[];for(let d=0;d<c.length;d++){const h=c[d].keys;if(!(!h||h.length===0))if(h[0].morphTargets){const f={};let _;for(_=0;_<h.length;_++)if(h[_].morphTargets)for(let g=0;g<h[_].morphTargets.length;g++)f[h[_].morphTargets[g]]=-1;for(const g in f){const m=[],p=[];for(let y=0;y!==h[_].morphTargets.length;++y){const w=h[_];m.push(w.time),p.push(w.morphTarget===g?1:0)}s.push(new go(".morphTargetInfluence["+g+"]",m,p))}l=f.length*r}else{const f=".bones["+t[d].name+"]";n(vo,f+".position",h,"pos",s),n(_o,f+".quaternion",h,"rot",s),n(vo,f+".scale",h,"scl",s)}}return s.length===0?null:new this(o,l,s,a)}resetDuration(){const e=this.tracks;let t=0;for(let n=0,s=e.length;n!==s;++n){const o=this.tracks[n];t=Math.max(t,o.times[o.times.length-1])}return this.duration=t,this}trim(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].trim(0,this.duration);return this}validate(){let e=!0;for(let t=0;t<this.tracks.length;t++)e=e&&this.tracks[t].validate();return e}optimize(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].optimize();return this}clone(){const e=[];for(let t=0;t<this.tracks.length;t++)e.push(this.tracks[t].clone());return new this.constructor(this.name,this.duration,e,this.blendMode)}toJSON(){return this.constructor.toJSON(this)}}function Ag(i){switch(i.toLowerCase()){case"scalar":case"double":case"float":case"number":case"integer":return go;case"vector":case"vector2":case"vector3":case"vector4":return vo;case"color":return yf;case"quaternion":return _o;case"bool":case"boolean":return Mo;case"string":return Eo}throw new Error("THREE.KeyframeTrack: Unsupported typeName: "+i)}function Cg(i){if(i.type===void 0)throw new Error("THREE.KeyframeTrack: track type undefined, can not parse");const e=Ag(i.type);if(i.times===void 0){const t=[],n=[];xf(i.keys,t,n,"value"),i.times=t,i.values=n}return e.parse!==void 0?e.parse(i):new e(i.name,i.times,i.values,i.interpolation)}const Bi={enabled:!1,files:{},add:function(i,e){this.enabled!==!1&&(this.files[i]=e)},get:function(i){if(this.enabled!==!1)return this.files[i]},remove:function(i){delete this.files[i]},clear:function(){this.files={}}};class Rg{constructor(e,t,n){const s=this;let o=!1,r=0,a=0,l;const c=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=n,this.itemStart=function(u){a++,o===!1&&s.onStart!==void 0&&s.onStart(u,r,a),o=!0},this.itemEnd=function(u){r++,s.onProgress!==void 0&&s.onProgress(u,r,a),r===a&&(o=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(u){s.onError!==void 0&&s.onError(u)},this.resolveURL=function(u){return l?l(u):u},this.setURLModifier=function(u){return l=u,this},this.addHandler=function(u,d){return c.push(u,d),this},this.removeHandler=function(u){const d=c.indexOf(u);return d!==-1&&c.splice(d,2),this},this.getHandler=function(u){for(let d=0,h=c.length;d<h;d+=2){const f=c[d],_=c[d+1];if(f.global&&(f.lastIndex=0),f.test(u))return _}return null}}}const Pg=new Rg;class Ms{constructor(e){this.manager=e!==void 0?e:Pg,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,t){const n=this;return new Promise(function(s,o){n.load(e,s,t,o)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}}Ms.DEFAULT_MATERIAL_NAME="__DEFAULT";const ui={};class Dg extends Error{constructor(e,t){super(e),this.response=t}}class ru extends Ms{constructor(e){super(e)}load(e,t,n,s){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const o=Bi.get(e);if(o!==void 0)return this.manager.itemStart(e),setTimeout(()=>{t&&t(o),this.manager.itemEnd(e)},0),o;if(ui[e]!==void 0){ui[e].push({onLoad:t,onProgress:n,onError:s});return}ui[e]=[],ui[e].push({onLoad:t,onProgress:n,onError:s});const r=new Request(e,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin"}),a=this.mimeType,l=this.responseType;fetch(r).then(c=>{if(c.status===200||c.status===0){if(c.status===0&&console.warn("THREE.FileLoader: HTTP Status 0 received."),typeof ReadableStream>"u"||c.body===void 0||c.body.getReader===void 0)return c;const u=ui[e],d=c.body.getReader(),h=c.headers.get("X-File-Size")||c.headers.get("Content-Length"),f=h?parseInt(h):0,_=f!==0;let g=0;const m=new ReadableStream({start(p){y();function y(){d.read().then(({done:w,value:v})=>{if(w)p.close();else{g+=v.byteLength;const b=new ProgressEvent("progress",{lengthComputable:_,loaded:g,total:f});for(let E=0,C=u.length;E<C;E++){const D=u[E];D.onProgress&&D.onProgress(b)}p.enqueue(v),y()}},w=>{p.error(w)})}}});return new Response(m)}else throw new Dg(`fetch for "${c.url}" responded with ${c.status}: ${c.statusText}`,c)}).then(c=>{switch(l){case"arraybuffer":return c.arrayBuffer();case"blob":return c.blob();case"document":return c.text().then(u=>new DOMParser().parseFromString(u,a));case"json":return c.json();default:if(a===void 0)return c.text();{const d=/charset="?([^;"\s]*)"?/i.exec(a),h=d&&d[1]?d[1].toLowerCase():void 0,f=new TextDecoder(h);return c.arrayBuffer().then(_=>f.decode(_))}}}).then(c=>{Bi.add(e,c);const u=ui[e];delete ui[e];for(let d=0,h=u.length;d<h;d++){const f=u[d];f.onLoad&&f.onLoad(c)}}).catch(c=>{const u=ui[e];if(u===void 0)throw this.manager.itemError(e),c;delete ui[e];for(let d=0,h=u.length;d<h;d++){const f=u[d];f.onError&&f.onError(c)}this.manager.itemError(e)}).finally(()=>{this.manager.itemEnd(e)}),this.manager.itemStart(e)}setResponseType(e){return this.responseType=e,this}setMimeType(e){return this.mimeType=e,this}}class Lg extends Ms{constructor(e){super(e)}load(e,t,n,s){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const o=this,r=Bi.get(e);if(r!==void 0)return o.manager.itemStart(e),setTimeout(function(){t&&t(r),o.manager.itemEnd(e)},0),r;const a=or("img");function l(){u(),Bi.add(e,this),t&&t(this),o.manager.itemEnd(e)}function c(d){u(),s&&s(d),o.manager.itemError(e),o.manager.itemEnd(e)}function u(){a.removeEventListener("load",l,!1),a.removeEventListener("error",c,!1)}return a.addEventListener("load",l,!1),a.addEventListener("error",c,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(a.crossOrigin=this.crossOrigin),o.manager.itemStart(e),a.src=e,a}}class Ig extends Ms{constructor(e){super(e)}load(e,t,n,s){const o=new Bt,r=new Lg(this.manager);return r.setCrossOrigin(this.crossOrigin),r.setPath(this.path),r.load(e,function(a){o.image=a,o.needsUpdate=!0,t!==void 0&&t(o)},n,s),o}}class ka extends mt{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new se(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(t.object.target=this.target.uuid),t}}const _l=new De,xd=new A,yd=new A;class au{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new me(512,512),this.map=null,this.mapPass=null,this.matrix=new De,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new iu,this._frameExtents=new me(1,1),this._viewportCount=1,this._viewports=[new We(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera,n=this.matrix;xd.setFromMatrixPosition(e.matrixWorld),t.position.copy(xd),yd.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(yd),t.updateMatrixWorld(),_l.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(_l),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(_l)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}class Og extends au{constructor(){super(new sn(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1}updateMatrices(e){const t=this.camera,n=po*2*e.angle*this.focus,s=this.mapSize.width/this.mapSize.height,o=e.distance||t.far;(n!==t.fov||s!==t.aspect||o!==t.far)&&(t.fov=n,t.aspect=s,t.far=o,t.updateProjectionMatrix()),super.updateMatrices(e)}copy(e){return super.copy(e),this.focus=e.focus,this}}class Ng extends ka{constructor(e,t,n=0,s=Math.PI/3,o=0,r=2){super(e,t),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(mt.DEFAULT_UP),this.updateMatrix(),this.target=new mt,this.distance=n,this.angle=s,this.penumbra=o,this.decay=r,this.map=null,this.shadow=new Og}get power(){return this.intensity*Math.PI}set power(e){this.intensity=e/Math.PI}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.angle=e.angle,this.penumbra=e.penumbra,this.decay=e.decay,this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}const wd=new De,No=new A,vl=new A;class Ug extends au{constructor(){super(new sn(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new me(4,2),this._viewportCount=6,this._viewports=[new We(2,1,1,1),new We(0,1,1,1),new We(3,1,1,1),new We(1,1,1,1),new We(3,0,1,1),new We(1,0,1,1)],this._cubeDirections=[new A(1,0,0),new A(-1,0,0),new A(0,0,1),new A(0,0,-1),new A(0,1,0),new A(0,-1,0)],this._cubeUps=[new A(0,1,0),new A(0,1,0),new A(0,1,0),new A(0,1,0),new A(0,0,1),new A(0,0,-1)]}updateMatrices(e,t=0){const n=this.camera,s=this.matrix,o=e.distance||n.far;o!==n.far&&(n.far=o,n.updateProjectionMatrix()),No.setFromMatrixPosition(e.matrixWorld),n.position.copy(No),vl.copy(n.position),vl.add(this._cubeDirections[t]),n.up.copy(this._cubeUps[t]),n.lookAt(vl),n.updateMatrixWorld(),s.makeTranslation(-No.x,-No.y,-No.z),wd.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(wd)}}class Fg extends ka{constructor(e,t,n=0,s=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=s,this.shadow=new Ug}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}}class ur extends df{constructor(e=-1,t=1,n=1,s=-1,o=.1,r=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=s,this.near=o,this.far=r,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,s,o,r){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=s,this.view.width=o,this.view.height=r,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,s=(this.top+this.bottom)/2;let o=n-e,r=n+e,a=s+t,l=s-t;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;o+=c*this.view.offsetX,r=o+c*this.view.width,a-=u*this.view.offsetY,l=a-u*this.view.height}this.projectionMatrix.makeOrthographic(o,r,a,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}class Bg extends au{constructor(){super(new ur(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class Ic extends ka{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(mt.DEFAULT_UP),this.updateMatrix(),this.target=new mt,this.shadow=new Bg}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}class zg extends ka{constructor(e,t){super(e,t),this.isAmbientLight=!0,this.type="AmbientLight"}}class Zo{static decodeText(e){if(console.warn("THREE.LoaderUtils: decodeText() has been deprecated with r165 and will be removed with r175. Use TextDecoder instead."),typeof TextDecoder<"u")return new TextDecoder().decode(e);let t="";for(let n=0,s=e.length;n<s;n++)t+=String.fromCharCode(e[n]);try{return decodeURIComponent(escape(t))}catch{return t}}static extractUrlBase(e){const t=e.lastIndexOf("/");return t===-1?"./":e.slice(0,t+1)}static resolveURL(e,t){return typeof e!="string"||e===""?"":(/^https?:\/\//i.test(t)&&/^\//.test(e)&&(t=t.replace(/(^https?:\/\/[^\/]+).*/i,"$1")),/^(https?:)?\/\//i.test(e)||/^data:.*,.*$/i.test(e)||/^blob:.*$/i.test(e)?e:t+e)}}class kg extends xt{constructor(){super(),this.isInstancedBufferGeometry=!0,this.type="InstancedBufferGeometry",this.instanceCount=1/0}copy(e){return super.copy(e),this.instanceCount=e.instanceCount,this}toJSON(){const e=super.toJSON();return e.instanceCount=this.instanceCount,e.isInstancedBufferGeometry=!0,e}}class Hg extends Ms{constructor(e){super(e),this.isImageBitmapLoader=!0,typeof createImageBitmap>"u"&&console.warn("THREE.ImageBitmapLoader: createImageBitmap() not supported."),typeof fetch>"u"&&console.warn("THREE.ImageBitmapLoader: fetch() not supported."),this.options={premultiplyAlpha:"none"}}setOptions(e){return this.options=e,this}load(e,t,n,s){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const o=this,r=Bi.get(e);if(r!==void 0){if(o.manager.itemStart(e),r.then){r.then(c=>{t&&t(c),o.manager.itemEnd(e)}).catch(c=>{s&&s(c)});return}return setTimeout(function(){t&&t(r),o.manager.itemEnd(e)},0),r}const a={};a.credentials=this.crossOrigin==="anonymous"?"same-origin":"include",a.headers=this.requestHeader;const l=fetch(e,a).then(function(c){return c.blob()}).then(function(c){return createImageBitmap(c,Object.assign(o.options,{colorSpaceConversion:"none"}))}).then(function(c){return Bi.add(e,c),t&&t(c),o.manager.itemEnd(e),c}).catch(function(c){s&&s(c),Bi.remove(e),o.manager.itemError(e),o.manager.itemEnd(e)});Bi.add(e,l),o.manager.itemStart(e)}}class Gg extends sn{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}class Vg{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=Sd(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const t=Sd();e=(t-this.oldTime)/1e3,this.oldTime=t,this.elapsedTime+=e}return e}}function Sd(){return performance.now()}const lu="\\[\\]\\.:\\/",Wg=new RegExp("["+lu+"]","g"),cu="[^"+lu+"]",Xg="[^"+lu.replace("\\.","")+"]",qg=/((?:WC+[\/:])*)/.source.replace("WC",cu),jg=/(WCOD+)?/.source.replace("WCOD",Xg),$g=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",cu),Yg=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",cu),Kg=new RegExp("^"+qg+jg+$g+Yg+"$"),Zg=["material","materials","bones","map"];class Jg{constructor(e,t,n){const s=n||lt.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,s)}getValue(e,t){this.bind();const n=this._targetGroup.nCachedObjects_,s=this._bindings[n];s!==void 0&&s.getValue(e,t)}setValue(e,t){const n=this._bindings;for(let s=this._targetGroup.nCachedObjects_,o=n.length;s!==o;++s)n[s].setValue(e,t)}bind(){const e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].bind()}unbind(){const e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].unbind()}}class lt{constructor(e,t,n){this.path=t,this.parsedPath=n||lt.parseTrackName(t),this.node=lt.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,n){return e&&e.isAnimationObjectGroup?new lt.Composite(e,t,n):new lt(e,t,n)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(Wg,"")}static parseTrackName(e){const t=Kg.exec(e);if(t===null)throw new Error("PropertyBinding: Cannot parse trackName: "+e);const n={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},s=n.nodeName&&n.nodeName.lastIndexOf(".");if(s!==void 0&&s!==-1){const o=n.nodeName.substring(s+1);Zg.indexOf(o)!==-1&&(n.nodeName=n.nodeName.substring(0,s),n.objectName=o)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+e);return n}static findNode(e,t){if(t===void 0||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){const n=e.skeleton.getBoneByName(t);if(n!==void 0)return n}if(e.children){const n=function(o){for(let r=0;r<o.length;r++){const a=o[r];if(a.name===t||a.uuid===t)return a;const l=n(a.children);if(l)return l}return null},s=n(e.children);if(s)return s}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){const n=this.resolvedProperty;for(let s=0,o=n.length;s!==o;++s)e[t++]=n[s]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){const n=this.resolvedProperty;for(let s=0,o=n.length;s!==o;++s)n[s]=e[t++]}_setValue_array_setNeedsUpdate(e,t){const n=this.resolvedProperty;for(let s=0,o=n.length;s!==o;++s)n[s]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){const n=this.resolvedProperty;for(let s=0,o=n.length;s!==o;++s)n[s]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node;const t=this.parsedPath,n=t.objectName,s=t.propertyName;let o=t.propertyIndex;if(e||(e=lt.findNode(this.rootNode,t.nodeName),this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){console.warn("THREE.PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let c=t.objectIndex;switch(n){case"materials":if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let u=0;u<e.length;u++)if(e[u].name===c){c=u;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.map){console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}e=e.material.map;break;default:if(e[n]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[n]}if(c!==void 0){if(e[c]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[c]}}const r=e[s];if(r===void 0){const c=t.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+c+"."+s+" but it wasn't found.",e);return}let a=this.Versioning.None;this.targetObject=e,e.needsUpdate!==void 0?a=this.Versioning.NeedsUpdate:e.matrixWorldNeedsUpdate!==void 0&&(a=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(o!==void 0){if(s==="morphTargetInfluences"){if(!e.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!e.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[o]!==void 0&&(o=e.morphTargetDictionary[o])}l=this.BindingType.ArrayElement,this.resolvedProperty=r,this.propertyIndex=o}else r.fromArray!==void 0&&r.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=r):Array.isArray(r)?(l=this.BindingType.EntireArray,this.resolvedProperty=r):this.propertyName=s;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][a]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}}lt.Composite=Jg;lt.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};lt.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};lt.prototype.GetterByBindingType=[lt.prototype._getValue_direct,lt.prototype._getValue_array,lt.prototype._getValue_arrayElement,lt.prototype._getValue_toArray];lt.prototype.SetterByBindingTypeAndVersioning=[[lt.prototype._setValue_direct,lt.prototype._setValue_direct_setNeedsUpdate,lt.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[lt.prototype._setValue_array,lt.prototype._setValue_array_setNeedsUpdate,lt.prototype._setValue_array_setMatrixWorldNeedsUpdate],[lt.prototype._setValue_arrayElement,lt.prototype._setValue_arrayElement_setNeedsUpdate,lt.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[lt.prototype._setValue_fromArray,lt.prototype._setValue_fromArray_setNeedsUpdate,lt.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];class to extends ff{constructor(e,t,n=1){super(e,t),this.isInstancedInterleavedBuffer=!0,this.meshPerAttribute=n}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}clone(e){const t=super.clone(e);return t.meshPerAttribute=this.meshPerAttribute,t}toJSON(e){const t=super.toJSON(e);return t.isInstancedInterleavedBuffer=!0,t.meshPerAttribute=this.meshPerAttribute,t}}const Md=new De;class wf{constructor(e,t,n=0,s=1/0){this.ray=new wo(e,t),this.near=n,this.far=s,this.camera=null,this.layers=new tu,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,t){this.ray.set(e,t)}setFromCamera(e,t){t.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(t).sub(this.ray.origin).normalize(),this.camera=t):t.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,(t.near+t.far)/(t.near-t.far)).unproject(t),this.ray.direction.set(0,0,-1).transformDirection(t.matrixWorld),this.camera=t):console.error("THREE.Raycaster: Unsupported camera type: "+t.type)}setFromXRController(e){return Md.identity().extractRotation(e.matrixWorld),this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(Md),this}intersectObject(e,t=!0,n=[]){return Oc(e,this,n,t),n.sort(Ed),n}intersectObjects(e,t=!0,n=[]){for(let s=0,o=e.length;s<o;s++)Oc(e[s],this,n,t);return n.sort(Ed),n}}function Ed(i,e){return i.distance-e.distance}function Oc(i,e,t,n){let s=!0;if(i.layers.test(e.layers)&&i.raycast(e,t)===!1&&(s=!1),s===!0&&n===!0){const o=i.children;for(let r=0,a=o.length;r<a;r++)Oc(o[r],e,t,!0)}}class bd{constructor(e=1,t=0,n=0){return this.radius=e,this.phi=t,this.theta=n,this}set(e,t,n){return this.radius=e,this.phi=t,this.theta=n,this}copy(e){return this.radius=e.radius,this.phi=e.phi,this.theta=e.theta,this}makeSafe(){return this.phi=ke(this.phi,1e-6,Math.PI-1e-6),this}setFromVector3(e){return this.setFromCartesianCoords(e.x,e.y,e.z)}setFromCartesianCoords(e,t,n){return this.radius=Math.sqrt(e*e+t*t+n*n),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(e,n),this.phi=Math.acos(ke(t/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}const Td=new A,Vr=new A;class Qg{constructor(e=new A,t=new A){this.start=e,this.end=t}set(e,t){return this.start.copy(e),this.end.copy(t),this}copy(e){return this.start.copy(e.start),this.end.copy(e.end),this}getCenter(e){return e.addVectors(this.start,this.end).multiplyScalar(.5)}delta(e){return e.subVectors(this.end,this.start)}distanceSq(){return this.start.distanceToSquared(this.end)}distance(){return this.start.distanceTo(this.end)}at(e,t){return this.delta(t).multiplyScalar(e).add(this.start)}closestPointToPointParameter(e,t){Td.subVectors(e,this.start),Vr.subVectors(this.end,this.start);const n=Vr.dot(Vr);let o=Vr.dot(Td)/n;return t&&(o=ke(o,0,1)),o}closestPointToPoint(e,t,n){const s=this.closestPointToPointParameter(e,t);return this.delta(n).multiplyScalar(s).add(this.start)}applyMatrix4(e){return this.start.applyMatrix4(e),this.end.applyMatrix4(e),this}equals(e){return e.start.equals(this.start)&&e.end.equals(this.end)}clone(){return new this.constructor().copy(this)}}class Sf extends ws{constructor(e,t=null){super(),this.object=e,this.domElement=t,this.enabled=!0,this.state=-1,this.keys={},this.mouseButtons={LEFT:null,MIDDLE:null,RIGHT:null},this.touches={ONE:null,TWO:null}}connect(){}disconnect(){}dispose(){}update(){}}function Ad(i,e,t,n){const s=e0(n);switch(t){case $h:return i*e;case Kh:return i*e;case Zh:return i*e*2;case Kc:return i*e/s.components*s.byteLength;case Zc:return i*e/s.components*s.byteLength;case Jh:return i*e*2/s.components*s.byteLength;case Jc:return i*e*2/s.components*s.byteLength;case Yh:return i*e*3/s.components*s.byteLength;case Ln:return i*e*4/s.components*s.byteLength;case Qc:return i*e*4/s.components*s.byteLength;case ua:case da:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case ha:case fa:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case ic:case oc:return Math.max(i,16)*Math.max(e,8)/4;case nc:case sc:return Math.max(i,8)*Math.max(e,8)/2;case rc:case ac:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case lc:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case cc:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case uc:return Math.floor((i+4)/5)*Math.floor((e+3)/4)*16;case dc:return Math.floor((i+4)/5)*Math.floor((e+4)/5)*16;case hc:return Math.floor((i+5)/6)*Math.floor((e+4)/5)*16;case fc:return Math.floor((i+5)/6)*Math.floor((e+5)/6)*16;case pc:return Math.floor((i+7)/8)*Math.floor((e+4)/5)*16;case mc:return Math.floor((i+7)/8)*Math.floor((e+5)/6)*16;case gc:return Math.floor((i+7)/8)*Math.floor((e+7)/8)*16;case _c:return Math.floor((i+9)/10)*Math.floor((e+4)/5)*16;case vc:return Math.floor((i+9)/10)*Math.floor((e+5)/6)*16;case xc:return Math.floor((i+9)/10)*Math.floor((e+7)/8)*16;case yc:return Math.floor((i+9)/10)*Math.floor((e+9)/10)*16;case wc:return Math.floor((i+11)/12)*Math.floor((e+9)/10)*16;case Sc:return Math.floor((i+11)/12)*Math.floor((e+11)/12)*16;case pa:case Mc:case Ec:return Math.ceil(i/4)*Math.ceil(e/4)*16;case Qh:case bc:return Math.ceil(i/4)*Math.ceil(e/4)*8;case Tc:case Ac:return Math.ceil(i/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function e0(i){switch(i){case wi:case Xh:return{byteLength:1,components:1};case nr:case qh:case Dn:return{byteLength:2,components:1};case $c:case Yc:return{byteLength:2,components:4};case _s:case jc:case qn:return{byteLength:4,components:1};case jh:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${i}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Xc}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Xc);/**
 * @license
 * Copyright 2010-2024 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function Mf(){let i=null,e=!1,t=null,n=null;function s(o,r){t(o,r),n=i.requestAnimationFrame(s)}return{start:function(){e!==!0&&t!==null&&(n=i.requestAnimationFrame(s),e=!0)},stop:function(){i.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(o){t=o},setContext:function(o){i=o}}}function t0(i){const e=new WeakMap;function t(a,l){const c=a.array,u=a.usage,d=c.byteLength,h=i.createBuffer();i.bindBuffer(l,h),i.bufferData(l,c,u),a.onUploadCallback();let f;if(c instanceof Float32Array)f=i.FLOAT;else if(c instanceof Uint16Array)a.isFloat16BufferAttribute?f=i.HALF_FLOAT:f=i.UNSIGNED_SHORT;else if(c instanceof Int16Array)f=i.SHORT;else if(c instanceof Uint32Array)f=i.UNSIGNED_INT;else if(c instanceof Int32Array)f=i.INT;else if(c instanceof Int8Array)f=i.BYTE;else if(c instanceof Uint8Array)f=i.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)f=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:h,type:f,bytesPerElement:c.BYTES_PER_ELEMENT,version:a.version,size:d}}function n(a,l,c){const u=l.array,d=l.updateRanges;if(i.bindBuffer(c,a),d.length===0)i.bufferSubData(c,0,u);else{d.sort((f,_)=>f.start-_.start);let h=0;for(let f=1;f<d.length;f++){const _=d[h],g=d[f];g.start<=_.start+_.count+1?_.count=Math.max(_.count,g.start+g.count-_.start):(++h,d[h]=g)}d.length=h+1;for(let f=0,_=d.length;f<_;f++){const g=d[f];i.bufferSubData(c,g.start*u.BYTES_PER_ELEMENT,u,g.start,g.count)}l.clearUpdateRanges()}l.onUploadCallback()}function s(a){return a.isInterleavedBufferAttribute&&(a=a.data),e.get(a)}function o(a){a.isInterleavedBufferAttribute&&(a=a.data);const l=e.get(a);l&&(i.deleteBuffer(l.buffer),e.delete(a))}function r(a,l){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){const u=e.get(a);(!u||u.version<a.version)&&e.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}const c=e.get(a);if(c===void 0)e.set(a,t(a,l));else if(c.version<a.version){if(c.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(c.buffer,a,l),c.version=a.version}}return{get:s,remove:o,update:r}}var n0=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,i0=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,s0=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,o0=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,r0=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,a0=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,l0=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,c0=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,u0=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`,d0=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,h0=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,f0=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,p0=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,m0=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,g0=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,_0=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,v0=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,x0=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,y0=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,w0=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,S0=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,M0=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,E0=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( getIndirectIndex( gl_DrawID ) );
	vColor.xyz *= batchingColor.xyz;
#endif`,b0=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,T0=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,A0=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,C0=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,R0=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,P0=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,D0=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,L0="gl_FragColor = linearToOutputTexel( gl_FragColor );",I0=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,O0=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,N0=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,U0=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,F0=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,B0=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,z0=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,k0=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,H0=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,G0=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,V0=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,W0=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,X0=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,q0=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,j0=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,$0=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,Y0=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,K0=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Z0=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,J0=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Q0=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,e_=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,t_=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,n_=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,i_=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,s_=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,o_=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,r_=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,a_=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,l_=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,c_=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,u_=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,d_=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,h_=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,f_=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,p_=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,m_=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,g_=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,__=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,v_=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,x_=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,y_=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,w_=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,S_=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,M_=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,E_=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,b_=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,T_=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,A_=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,C_=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,R_=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,P_=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,D_=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,L_=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,I_=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,O_=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,N_=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,U_=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,F_=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		
		float lightToPositionLength = length( lightToPosition );
		if ( lightToPositionLength - shadowCameraFar <= 0.0 && lightToPositionLength - shadowCameraNear >= 0.0 ) {
			float dp = ( lightToPositionLength - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
			#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
				vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
				shadow = (
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
				) * ( 1.0 / 9.0 );
			#else
				shadow = texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
			#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
#endif`,B_=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,z_=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,k_=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,H_=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,G_=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,V_=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,W_=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,X_=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,q_=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,j_=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,$_=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,Y_=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,K_=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
		
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
		
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		
		#else
		
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,Z_=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,J_=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,Q_=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,ev=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const tv=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,nv=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,iv=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,sv=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,ov=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,rv=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,av=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,lv=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,cv=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,uv=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,dv=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,hv=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,fv=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,pv=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,mv=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,gv=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,_v=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,vv=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,xv=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,yv=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,wv=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,Sv=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,Mv=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Ev=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,bv=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,Tv=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Av=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Cv=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Rv=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,Pv=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Dv=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Lv=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,Iv=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,Ov=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,ze={alphahash_fragment:n0,alphahash_pars_fragment:i0,alphamap_fragment:s0,alphamap_pars_fragment:o0,alphatest_fragment:r0,alphatest_pars_fragment:a0,aomap_fragment:l0,aomap_pars_fragment:c0,batching_pars_vertex:u0,batching_vertex:d0,begin_vertex:h0,beginnormal_vertex:f0,bsdfs:p0,iridescence_fragment:m0,bumpmap_pars_fragment:g0,clipping_planes_fragment:_0,clipping_planes_pars_fragment:v0,clipping_planes_pars_vertex:x0,clipping_planes_vertex:y0,color_fragment:w0,color_pars_fragment:S0,color_pars_vertex:M0,color_vertex:E0,common:b0,cube_uv_reflection_fragment:T0,defaultnormal_vertex:A0,displacementmap_pars_vertex:C0,displacementmap_vertex:R0,emissivemap_fragment:P0,emissivemap_pars_fragment:D0,colorspace_fragment:L0,colorspace_pars_fragment:I0,envmap_fragment:O0,envmap_common_pars_fragment:N0,envmap_pars_fragment:U0,envmap_pars_vertex:F0,envmap_physical_pars_fragment:$0,envmap_vertex:B0,fog_vertex:z0,fog_pars_vertex:k0,fog_fragment:H0,fog_pars_fragment:G0,gradientmap_pars_fragment:V0,lightmap_pars_fragment:W0,lights_lambert_fragment:X0,lights_lambert_pars_fragment:q0,lights_pars_begin:j0,lights_toon_fragment:Y0,lights_toon_pars_fragment:K0,lights_phong_fragment:Z0,lights_phong_pars_fragment:J0,lights_physical_fragment:Q0,lights_physical_pars_fragment:e_,lights_fragment_begin:t_,lights_fragment_maps:n_,lights_fragment_end:i_,logdepthbuf_fragment:s_,logdepthbuf_pars_fragment:o_,logdepthbuf_pars_vertex:r_,logdepthbuf_vertex:a_,map_fragment:l_,map_pars_fragment:c_,map_particle_fragment:u_,map_particle_pars_fragment:d_,metalnessmap_fragment:h_,metalnessmap_pars_fragment:f_,morphinstance_vertex:p_,morphcolor_vertex:m_,morphnormal_vertex:g_,morphtarget_pars_vertex:__,morphtarget_vertex:v_,normal_fragment_begin:x_,normal_fragment_maps:y_,normal_pars_fragment:w_,normal_pars_vertex:S_,normal_vertex:M_,normalmap_pars_fragment:E_,clearcoat_normal_fragment_begin:b_,clearcoat_normal_fragment_maps:T_,clearcoat_pars_fragment:A_,iridescence_pars_fragment:C_,opaque_fragment:R_,packing:P_,premultiplied_alpha_fragment:D_,project_vertex:L_,dithering_fragment:I_,dithering_pars_fragment:O_,roughnessmap_fragment:N_,roughnessmap_pars_fragment:U_,shadowmap_pars_fragment:F_,shadowmap_pars_vertex:B_,shadowmap_vertex:z_,shadowmask_pars_fragment:k_,skinbase_vertex:H_,skinning_pars_vertex:G_,skinning_vertex:V_,skinnormal_vertex:W_,specularmap_fragment:X_,specularmap_pars_fragment:q_,tonemapping_fragment:j_,tonemapping_pars_fragment:$_,transmission_fragment:Y_,transmission_pars_fragment:K_,uv_pars_fragment:Z_,uv_pars_vertex:J_,uv_vertex:Q_,worldpos_vertex:ev,background_vert:tv,background_frag:nv,backgroundCube_vert:iv,backgroundCube_frag:sv,cube_vert:ov,cube_frag:rv,depth_vert:av,depth_frag:lv,distanceRGBA_vert:cv,distanceRGBA_frag:uv,equirect_vert:dv,equirect_frag:hv,linedashed_vert:fv,linedashed_frag:pv,meshbasic_vert:mv,meshbasic_frag:gv,meshlambert_vert:_v,meshlambert_frag:vv,meshmatcap_vert:xv,meshmatcap_frag:yv,meshnormal_vert:wv,meshnormal_frag:Sv,meshphong_vert:Mv,meshphong_frag:Ev,meshphysical_vert:bv,meshphysical_frag:Tv,meshtoon_vert:Av,meshtoon_frag:Cv,points_vert:Rv,points_frag:Pv,shadow_vert:Dv,shadow_frag:Lv,sprite_vert:Iv,sprite_frag:Ov},re={common:{diffuse:{value:new se(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Fe},alphaMap:{value:null},alphaMapTransform:{value:new Fe},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Fe}},envmap:{envMap:{value:null},envMapRotation:{value:new Fe},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Fe}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Fe}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Fe},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Fe},normalScale:{value:new me(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Fe},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Fe}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Fe}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Fe}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new se(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new se(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Fe},alphaTest:{value:0},uvTransform:{value:new Fe}},sprite:{diffuse:{value:new se(16777215)},opacity:{value:1},center:{value:new me(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Fe},alphaMap:{value:null},alphaMapTransform:{value:new Fe},alphaTest:{value:0}}},fn={basic:{uniforms:Qt([re.common,re.specularmap,re.envmap,re.aomap,re.lightmap,re.fog]),vertexShader:ze.meshbasic_vert,fragmentShader:ze.meshbasic_frag},lambert:{uniforms:Qt([re.common,re.specularmap,re.envmap,re.aomap,re.lightmap,re.emissivemap,re.bumpmap,re.normalmap,re.displacementmap,re.fog,re.lights,{emissive:{value:new se(0)}}]),vertexShader:ze.meshlambert_vert,fragmentShader:ze.meshlambert_frag},phong:{uniforms:Qt([re.common,re.specularmap,re.envmap,re.aomap,re.lightmap,re.emissivemap,re.bumpmap,re.normalmap,re.displacementmap,re.fog,re.lights,{emissive:{value:new se(0)},specular:{value:new se(1118481)},shininess:{value:30}}]),vertexShader:ze.meshphong_vert,fragmentShader:ze.meshphong_frag},standard:{uniforms:Qt([re.common,re.envmap,re.aomap,re.lightmap,re.emissivemap,re.bumpmap,re.normalmap,re.displacementmap,re.roughnessmap,re.metalnessmap,re.fog,re.lights,{emissive:{value:new se(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:ze.meshphysical_vert,fragmentShader:ze.meshphysical_frag},toon:{uniforms:Qt([re.common,re.aomap,re.lightmap,re.emissivemap,re.bumpmap,re.normalmap,re.displacementmap,re.gradientmap,re.fog,re.lights,{emissive:{value:new se(0)}}]),vertexShader:ze.meshtoon_vert,fragmentShader:ze.meshtoon_frag},matcap:{uniforms:Qt([re.common,re.bumpmap,re.normalmap,re.displacementmap,re.fog,{matcap:{value:null}}]),vertexShader:ze.meshmatcap_vert,fragmentShader:ze.meshmatcap_frag},points:{uniforms:Qt([re.points,re.fog]),vertexShader:ze.points_vert,fragmentShader:ze.points_frag},dashed:{uniforms:Qt([re.common,re.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:ze.linedashed_vert,fragmentShader:ze.linedashed_frag},depth:{uniforms:Qt([re.common,re.displacementmap]),vertexShader:ze.depth_vert,fragmentShader:ze.depth_frag},normal:{uniforms:Qt([re.common,re.bumpmap,re.normalmap,re.displacementmap,{opacity:{value:1}}]),vertexShader:ze.meshnormal_vert,fragmentShader:ze.meshnormal_frag},sprite:{uniforms:Qt([re.sprite,re.fog]),vertexShader:ze.sprite_vert,fragmentShader:ze.sprite_frag},background:{uniforms:{uvTransform:{value:new Fe},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:ze.background_vert,fragmentShader:ze.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Fe}},vertexShader:ze.backgroundCube_vert,fragmentShader:ze.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:ze.cube_vert,fragmentShader:ze.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:ze.equirect_vert,fragmentShader:ze.equirect_frag},distanceRGBA:{uniforms:Qt([re.common,re.displacementmap,{referencePosition:{value:new A},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:ze.distanceRGBA_vert,fragmentShader:ze.distanceRGBA_frag},shadow:{uniforms:Qt([re.lights,re.fog,{color:{value:new se(0)},opacity:{value:1}}]),vertexShader:ze.shadow_vert,fragmentShader:ze.shadow_frag}};fn.physical={uniforms:Qt([fn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Fe},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Fe},clearcoatNormalScale:{value:new me(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Fe},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Fe},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Fe},sheen:{value:0},sheenColor:{value:new se(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Fe},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Fe},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Fe},transmissionSamplerSize:{value:new me},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Fe},attenuationDistance:{value:0},attenuationColor:{value:new se(0)},specularColor:{value:new se(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Fe},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Fe},anisotropyVector:{value:new me},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Fe}}]),vertexShader:ze.meshphysical_vert,fragmentShader:ze.meshphysical_frag};const Wr={r:0,b:0,g:0},Ji=new zt,Nv=new De;function Uv(i,e,t,n,s,o,r){const a=new se(0);let l=o===!0?0:1,c,u,d=null,h=0,f=null;function _(w){let v=w.isScene===!0?w.background:null;return v&&v.isTexture&&(v=(w.backgroundBlurriness>0?t:e).get(v)),v}function g(w){let v=!1;const b=_(w);b===null?p(a,l):b&&b.isColor&&(p(b,1),v=!0);const E=i.xr.getEnvironmentBlendMode();E==="additive"?n.buffers.color.setClear(0,0,0,1,r):E==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,r),(i.autoClear||v)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function m(w,v){const b=_(v);b&&(b.isCubeTexture||b.mapping===Ba)?(u===void 0&&(u=new oe(new Et(1,1,1),new bt({name:"BackgroundCubeMaterial",uniforms:mo(fn.backgroundCube.uniforms),vertexShader:fn.backgroundCube.vertexShader,fragmentShader:fn.backgroundCube.fragmentShader,side:gn,depthTest:!1,depthWrite:!1,fog:!1})),u.geometry.deleteAttribute("normal"),u.geometry.deleteAttribute("uv"),u.onBeforeRender=function(E,C,D){this.matrixWorld.copyPosition(D.matrixWorld)},Object.defineProperty(u.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(u)),Ji.copy(v.backgroundRotation),Ji.x*=-1,Ji.y*=-1,Ji.z*=-1,b.isCubeTexture&&b.isRenderTargetTexture===!1&&(Ji.y*=-1,Ji.z*=-1),u.material.uniforms.envMap.value=b,u.material.uniforms.flipEnvMap.value=b.isCubeTexture&&b.isRenderTargetTexture===!1?-1:1,u.material.uniforms.backgroundBlurriness.value=v.backgroundBlurriness,u.material.uniforms.backgroundIntensity.value=v.backgroundIntensity,u.material.uniforms.backgroundRotation.value.setFromMatrix4(Nv.makeRotationFromEuler(Ji)),u.material.toneMapped=Ze.getTransfer(b.colorSpace)!==ut,(d!==b||h!==b.version||f!==i.toneMapping)&&(u.material.needsUpdate=!0,d=b,h=b.version,f=i.toneMapping),u.layers.enableAll(),w.unshift(u,u.geometry,u.material,0,0,null)):b&&b.isTexture&&(c===void 0&&(c=new oe(new vs(2,2),new bt({name:"BackgroundMaterial",uniforms:mo(fn.background.uniforms),vertexShader:fn.background.vertexShader,fragmentShader:fn.background.fragmentShader,side:yi,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(c)),c.material.uniforms.t2D.value=b,c.material.uniforms.backgroundIntensity.value=v.backgroundIntensity,c.material.toneMapped=Ze.getTransfer(b.colorSpace)!==ut,b.matrixAutoUpdate===!0&&b.updateMatrix(),c.material.uniforms.uvTransform.value.copy(b.matrix),(d!==b||h!==b.version||f!==i.toneMapping)&&(c.material.needsUpdate=!0,d=b,h=b.version,f=i.toneMapping),c.layers.enableAll(),w.unshift(c,c.geometry,c.material,0,0,null))}function p(w,v){w.getRGB(Wr,uf(i)),n.buffers.color.setClear(Wr.r,Wr.g,Wr.b,v,r)}function y(){u!==void 0&&(u.geometry.dispose(),u.material.dispose()),c!==void 0&&(c.geometry.dispose(),c.material.dispose())}return{getClearColor:function(){return a},setClearColor:function(w,v=1){a.set(w),l=v,p(a,l)},getClearAlpha:function(){return l},setClearAlpha:function(w){l=w,p(a,l)},render:g,addToRenderList:m,dispose:y}}function Fv(i,e){const t=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},s=h(null);let o=s,r=!1;function a(x,P,F,O,k){let L=!1;const N=d(O,F,P);o!==N&&(o=N,c(o.object)),L=f(x,O,F,k),L&&_(x,O,F,k),k!==null&&e.update(k,i.ELEMENT_ARRAY_BUFFER),(L||r)&&(r=!1,v(x,P,F,O),k!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,e.get(k).buffer))}function l(){return i.createVertexArray()}function c(x){return i.bindVertexArray(x)}function u(x){return i.deleteVertexArray(x)}function d(x,P,F){const O=F.wireframe===!0;let k=n[x.id];k===void 0&&(k={},n[x.id]=k);let L=k[P.id];L===void 0&&(L={},k[P.id]=L);let N=L[O];return N===void 0&&(N=h(l()),L[O]=N),N}function h(x){const P=[],F=[],O=[];for(let k=0;k<t;k++)P[k]=0,F[k]=0,O[k]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:P,enabledAttributes:F,attributeDivisors:O,object:x,attributes:{},index:null}}function f(x,P,F,O){const k=o.attributes,L=P.attributes;let N=0;const V=F.getAttributes();for(const H in V)if(V[H].location>=0){const $=k[H];let ae=L[H];if(ae===void 0&&(H==="instanceMatrix"&&x.instanceMatrix&&(ae=x.instanceMatrix),H==="instanceColor"&&x.instanceColor&&(ae=x.instanceColor)),$===void 0||$.attribute!==ae||ae&&$.data!==ae.data)return!0;N++}return o.attributesNum!==N||o.index!==O}function _(x,P,F,O){const k={},L=P.attributes;let N=0;const V=F.getAttributes();for(const H in V)if(V[H].location>=0){let $=L[H];$===void 0&&(H==="instanceMatrix"&&x.instanceMatrix&&($=x.instanceMatrix),H==="instanceColor"&&x.instanceColor&&($=x.instanceColor));const ae={};ae.attribute=$,$&&$.data&&(ae.data=$.data),k[H]=ae,N++}o.attributes=k,o.attributesNum=N,o.index=O}function g(){const x=o.newAttributes;for(let P=0,F=x.length;P<F;P++)x[P]=0}function m(x){p(x,0)}function p(x,P){const F=o.newAttributes,O=o.enabledAttributes,k=o.attributeDivisors;F[x]=1,O[x]===0&&(i.enableVertexAttribArray(x),O[x]=1),k[x]!==P&&(i.vertexAttribDivisor(x,P),k[x]=P)}function y(){const x=o.newAttributes,P=o.enabledAttributes;for(let F=0,O=P.length;F<O;F++)P[F]!==x[F]&&(i.disableVertexAttribArray(F),P[F]=0)}function w(x,P,F,O,k,L,N){N===!0?i.vertexAttribIPointer(x,P,F,k,L):i.vertexAttribPointer(x,P,F,O,k,L)}function v(x,P,F,O){g();const k=O.attributes,L=F.getAttributes(),N=P.defaultAttributeValues;for(const V in L){const H=L[V];if(H.location>=0){let j=k[V];if(j===void 0&&(V==="instanceMatrix"&&x.instanceMatrix&&(j=x.instanceMatrix),V==="instanceColor"&&x.instanceColor&&(j=x.instanceColor)),j!==void 0){const $=j.normalized,ae=j.itemSize,ye=e.get(j);if(ye===void 0)continue;const He=ye.buffer,Y=ye.type,ie=ye.bytesPerElement,Se=Y===i.INT||Y===i.UNSIGNED_INT||j.gpuType===jc;if(j.isInterleavedBufferAttribute){const de=j.data,Pe=de.stride,Ne=j.offset;if(de.isInstancedInterleavedBuffer){for(let Ge=0;Ge<H.locationSize;Ge++)p(H.location+Ge,de.meshPerAttribute);x.isInstancedMesh!==!0&&O._maxInstanceCount===void 0&&(O._maxInstanceCount=de.meshPerAttribute*de.count)}else for(let Ge=0;Ge<H.locationSize;Ge++)m(H.location+Ge);i.bindBuffer(i.ARRAY_BUFFER,He);for(let Ge=0;Ge<H.locationSize;Ge++)w(H.location+Ge,ae/H.locationSize,Y,$,Pe*ie,(Ne+ae/H.locationSize*Ge)*ie,Se)}else{if(j.isInstancedBufferAttribute){for(let de=0;de<H.locationSize;de++)p(H.location+de,j.meshPerAttribute);x.isInstancedMesh!==!0&&O._maxInstanceCount===void 0&&(O._maxInstanceCount=j.meshPerAttribute*j.count)}else for(let de=0;de<H.locationSize;de++)m(H.location+de);i.bindBuffer(i.ARRAY_BUFFER,He);for(let de=0;de<H.locationSize;de++)w(H.location+de,ae/H.locationSize,Y,$,ae*ie,ae/H.locationSize*de*ie,Se)}}else if(N!==void 0){const $=N[V];if($!==void 0)switch($.length){case 2:i.vertexAttrib2fv(H.location,$);break;case 3:i.vertexAttrib3fv(H.location,$);break;case 4:i.vertexAttrib4fv(H.location,$);break;default:i.vertexAttrib1fv(H.location,$)}}}}y()}function b(){D();for(const x in n){const P=n[x];for(const F in P){const O=P[F];for(const k in O)u(O[k].object),delete O[k];delete P[F]}delete n[x]}}function E(x){if(n[x.id]===void 0)return;const P=n[x.id];for(const F in P){const O=P[F];for(const k in O)u(O[k].object),delete O[k];delete P[F]}delete n[x.id]}function C(x){for(const P in n){const F=n[P];if(F[x.id]===void 0)continue;const O=F[x.id];for(const k in O)u(O[k].object),delete O[k];delete F[x.id]}}function D(){S(),r=!0,o!==s&&(o=s,c(o.object))}function S(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:a,reset:D,resetDefaultState:S,dispose:b,releaseStatesOfGeometry:E,releaseStatesOfProgram:C,initAttributes:g,enableAttribute:m,disableUnusedAttributes:y}}function Bv(i,e,t){let n;function s(c){n=c}function o(c,u){i.drawArrays(n,c,u),t.update(u,n,1)}function r(c,u,d){d!==0&&(i.drawArraysInstanced(n,c,u,d),t.update(u,n,d))}function a(c,u,d){if(d===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,c,0,u,0,d);let f=0;for(let _=0;_<d;_++)f+=u[_];t.update(f,n,1)}function l(c,u,d,h){if(d===0)return;const f=e.get("WEBGL_multi_draw");if(f===null)for(let _=0;_<c.length;_++)r(c[_],u[_],h[_]);else{f.multiDrawArraysInstancedWEBGL(n,c,0,u,0,h,0,d);let _=0;for(let g=0;g<d;g++)_+=u[g]*h[g];t.update(_,n,1)}}this.setMode=s,this.render=o,this.renderInstances=r,this.renderMultiDraw=a,this.renderMultiDrawInstances=l}function zv(i,e,t,n){let s;function o(){if(s!==void 0)return s;if(e.has("EXT_texture_filter_anisotropic")===!0){const C=e.get("EXT_texture_filter_anisotropic");s=i.getParameter(C.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function r(C){return!(C!==Ln&&n.convert(C)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(C){const D=C===Dn&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(C!==wi&&n.convert(C)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE)&&C!==qn&&!D)}function l(C){if(C==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";C="mediump"}return C==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=t.precision!==void 0?t.precision:"highp";const u=l(c);u!==c&&(console.warn("THREE.WebGLRenderer:",c,"not supported, using",u,"instead."),c=u);const d=t.logarithmicDepthBuffer===!0,h=t.reverseDepthBuffer===!0&&e.has("EXT_clip_control"),f=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),_=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),g=i.getParameter(i.MAX_TEXTURE_SIZE),m=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),p=i.getParameter(i.MAX_VERTEX_ATTRIBS),y=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),w=i.getParameter(i.MAX_VARYING_VECTORS),v=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),b=_>0,E=i.getParameter(i.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:o,getMaxPrecision:l,textureFormatReadable:r,textureTypeReadable:a,precision:c,logarithmicDepthBuffer:d,reverseDepthBuffer:h,maxTextures:f,maxVertexTextures:_,maxTextureSize:g,maxCubemapSize:m,maxAttributes:p,maxVertexUniforms:y,maxVaryings:w,maxFragmentUniforms:v,vertexTextures:b,maxSamples:E}}function kv(i){const e=this;let t=null,n=0,s=!1,o=!1;const r=new Oi,a=new Fe,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(d,h){const f=d.length!==0||h||n!==0||s;return s=h,n=d.length,f},this.beginShadows=function(){o=!0,u(null)},this.endShadows=function(){o=!1},this.setGlobalState=function(d,h){t=u(d,h,0)},this.setState=function(d,h,f){const _=d.clippingPlanes,g=d.clipIntersection,m=d.clipShadows,p=i.get(d);if(!s||_===null||_.length===0||o&&!m)o?u(null):c();else{const y=o?0:n,w=y*4;let v=p.clippingState||null;l.value=v,v=u(_,h,w,f);for(let b=0;b!==w;++b)v[b]=t[b];p.clippingState=v,this.numIntersection=g?this.numPlanes:0,this.numPlanes+=y}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function u(d,h,f,_){const g=d!==null?d.length:0;let m=null;if(g!==0){if(m=l.value,_!==!0||m===null){const p=f+g*4,y=h.matrixWorldInverse;a.getNormalMatrix(y),(m===null||m.length<p)&&(m=new Float32Array(p));for(let w=0,v=f;w!==g;++w,v+=4)r.copy(d[w]).applyMatrix4(y,a),r.normal.toArray(m,v),m[v+3]=r.constant}l.value=m,l.needsUpdate=!0}return e.numPlanes=g,e.numIntersection=0,m}}function Hv(i){let e=new WeakMap;function t(r,a){return a===ec?r.mapping=lo:a===tc&&(r.mapping=co),r}function n(r){if(r&&r.isTexture){const a=r.mapping;if(a===ec||a===tc)if(e.has(r)){const l=e.get(r).texture;return t(l,r.mapping)}else{const l=r.image;if(l&&l.height>0){const c=new rg(l.height);return c.fromEquirectangularTexture(i,r),e.set(r,c),r.addEventListener("dispose",s),t(c.texture,r.mapping)}else return null}}return r}function s(r){const a=r.target;a.removeEventListener("dispose",s);const l=e.get(a);l!==void 0&&(e.delete(a),l.dispose())}function o(){e=new WeakMap}return{get:n,dispose:o}}const qs=4,Cd=[.125,.215,.35,.446,.526,.582],us=20,xl=new ur,Rd=new se;let yl=null,wl=0,Sl=0,Ml=!1;const os=(1+Math.sqrt(5))/2,zs=1/os,Pd=[new A(-os,zs,0),new A(os,zs,0),new A(-zs,0,os),new A(zs,0,os),new A(0,os,-zs),new A(0,os,zs),new A(-1,1,-1),new A(1,1,-1),new A(-1,1,1),new A(1,1,1)];class Dd{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,n=.1,s=100){yl=this._renderer.getRenderTarget(),wl=this._renderer.getActiveCubeFace(),Sl=this._renderer.getActiveMipmapLevel(),Ml=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);const o=this._allocateTargets();return o.depthBuffer=!0,this._sceneToCubeUV(e,n,s,o),t>0&&this._blur(o,0,0,t),this._applyPMREM(o),this._cleanup(o),o}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Od(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Id(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(yl,wl,Sl),this._renderer.xr.enabled=Ml,e.scissorTest=!1,Xr(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===lo||e.mapping===co?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),yl=this._renderer.getRenderTarget(),wl=this._renderer.getActiveCubeFace(),Sl=this._renderer.getActiveMipmapLevel(),Ml=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:Sn,minFilter:Sn,generateMipmaps:!1,type:Dn,format:Ln,colorSpace:ln,depthBuffer:!1},s=Ld(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Ld(e,t,n);const{_lodMax:o}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=Gv(o)),this._blurMaterial=Vv(o,e,t)}return s}_compileMaterial(e){const t=new oe(this._lodPlanes[0],e);this._renderer.compile(t,xl)}_sceneToCubeUV(e,t,n,s){const a=new sn(90,1,t,n),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],u=this._renderer,d=u.autoClear,h=u.toneMapping;u.getClearColor(Rd),u.toneMapping=Wi,u.autoClear=!1;const f=new ti({name:"PMREM.Background",side:gn,depthWrite:!1,depthTest:!1}),_=new oe(new Et,f);let g=!1;const m=e.background;m?m.isColor&&(f.color.copy(m),e.background=null,g=!0):(f.color.copy(Rd),g=!0);for(let p=0;p<6;p++){const y=p%3;y===0?(a.up.set(0,l[p],0),a.lookAt(c[p],0,0)):y===1?(a.up.set(0,0,l[p]),a.lookAt(0,c[p],0)):(a.up.set(0,l[p],0),a.lookAt(0,0,c[p]));const w=this._cubeSize;Xr(s,y*w,p>2?w:0,w,w),u.setRenderTarget(s),g&&u.render(_,a),u.render(e,a)}_.geometry.dispose(),_.material.dispose(),u.toneMapping=h,u.autoClear=d,e.background=m}_textureToCubeUV(e,t){const n=this._renderer,s=e.mapping===lo||e.mapping===co;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=Od()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Id());const o=s?this._cubemapMaterial:this._equirectMaterial,r=new oe(this._lodPlanes[0],o),a=o.uniforms;a.envMap.value=e;const l=this._cubeSize;Xr(t,0,0,3*l,2*l),n.setRenderTarget(t),n.render(r,xl)}_applyPMREM(e){const t=this._renderer,n=t.autoClear;t.autoClear=!1;const s=this._lodPlanes.length;for(let o=1;o<s;o++){const r=Math.sqrt(this._sigmas[o]*this._sigmas[o]-this._sigmas[o-1]*this._sigmas[o-1]),a=Pd[(s-o-1)%Pd.length];this._blur(e,o-1,o,r,a)}t.autoClear=n}_blur(e,t,n,s,o){const r=this._pingPongRenderTarget;this._halfBlur(e,r,t,n,s,"latitudinal",o),this._halfBlur(r,e,n,n,s,"longitudinal",o)}_halfBlur(e,t,n,s,o,r,a){const l=this._renderer,c=this._blurMaterial;r!=="latitudinal"&&r!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const u=3,d=new oe(this._lodPlanes[s],c),h=c.uniforms,f=this._sizeLods[n]-1,_=isFinite(o)?Math.PI/(2*f):2*Math.PI/(2*us-1),g=o/_,m=isFinite(o)?1+Math.floor(u*g):us;m>us&&console.warn(`sigmaRadians, ${o}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${us}`);const p=[];let y=0;for(let C=0;C<us;++C){const D=C/g,S=Math.exp(-D*D/2);p.push(S),C===0?y+=S:C<m&&(y+=2*S)}for(let C=0;C<p.length;C++)p[C]=p[C]/y;h.envMap.value=e.texture,h.samples.value=m,h.weights.value=p,h.latitudinal.value=r==="latitudinal",a&&(h.poleAxis.value=a);const{_lodMax:w}=this;h.dTheta.value=_,h.mipInt.value=w-n;const v=this._sizeLods[s],b=3*v*(s>w-qs?s-w+qs:0),E=4*(this._cubeSize-v);Xr(t,b,E,3*v,2*v),l.setRenderTarget(t),l.render(d,xl)}}function Gv(i){const e=[],t=[],n=[];let s=i;const o=i-qs+1+Cd.length;for(let r=0;r<o;r++){const a=Math.pow(2,s);t.push(a);let l=1/a;r>i-qs?l=Cd[r-i+qs-1]:r===0&&(l=0),n.push(l);const c=1/(a-2),u=-c,d=1+c,h=[u,u,d,u,d,d,u,u,d,d,u,d],f=6,_=6,g=3,m=2,p=1,y=new Float32Array(g*_*f),w=new Float32Array(m*_*f),v=new Float32Array(p*_*f);for(let E=0;E<f;E++){const C=E%3*2/3-1,D=E>2?0:-1,S=[C,D,0,C+2/3,D,0,C+2/3,D+1,0,C,D,0,C+2/3,D+1,0,C,D+1,0];y.set(S,g*_*E),w.set(h,m*_*E);const x=[E,E,E,E,E,E];v.set(x,p*_*E)}const b=new xt;b.setAttribute("position",new At(y,g)),b.setAttribute("uv",new At(w,m)),b.setAttribute("faceIndex",new At(v,p)),e.push(b),s>qs&&s--}return{lodPlanes:e,sizeLods:t,sigmas:n}}function Ld(i,e,t){const n=new tn(i,e,t);return n.texture.mapping=Ba,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function Xr(i,e,t,n,s){i.viewport.set(e,t,n,s),i.scissor.set(e,t,n,s)}function Vv(i,e,t){const n=new Float32Array(us),s=new A(0,1,0);return new bt({name:"SphericalGaussianBlur",defines:{n:us,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:uu(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:$n,depthTest:!1,depthWrite:!1})}function Id(){return new bt({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:uu(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:$n,depthTest:!1,depthWrite:!1})}function Od(){return new bt({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:uu(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:$n,depthTest:!1,depthWrite:!1})}function uu(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function Wv(i){let e=new WeakMap,t=null;function n(a){if(a&&a.isTexture){const l=a.mapping,c=l===ec||l===tc,u=l===lo||l===co;if(c||u){let d=e.get(a);const h=d!==void 0?d.texture.pmremVersion:0;if(a.isRenderTargetTexture&&a.pmremVersion!==h)return t===null&&(t=new Dd(i)),d=c?t.fromEquirectangular(a,d):t.fromCubemap(a,d),d.texture.pmremVersion=a.pmremVersion,e.set(a,d),d.texture;if(d!==void 0)return d.texture;{const f=a.image;return c&&f&&f.height>0||u&&f&&s(f)?(t===null&&(t=new Dd(i)),d=c?t.fromEquirectangular(a):t.fromCubemap(a),d.texture.pmremVersion=a.pmremVersion,e.set(a,d),a.addEventListener("dispose",o),d.texture):null}}}return a}function s(a){let l=0;const c=6;for(let u=0;u<c;u++)a[u]!==void 0&&l++;return l===c}function o(a){const l=a.target;l.removeEventListener("dispose",o);const c=e.get(l);c!==void 0&&(e.delete(l),c.dispose())}function r(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:n,dispose:r}}function Xv(i){const e={};function t(n){if(e[n]!==void 0)return e[n];let s;switch(n){case"WEBGL_depth_texture":s=i.getExtension("WEBGL_depth_texture")||i.getExtension("MOZ_WEBGL_depth_texture")||i.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":s=i.getExtension("EXT_texture_filter_anisotropic")||i.getExtension("MOZ_EXT_texture_filter_anisotropic")||i.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":s=i.getExtension("WEBGL_compressed_texture_s3tc")||i.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":s=i.getExtension("WEBGL_compressed_texture_pvrtc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:s=i.getExtension(n)}return e[n]=s,s}return{has:function(n){return t(n)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(n){const s=t(n);return s===null&&Gs("THREE.WebGLRenderer: "+n+" extension not supported."),s}}}function qv(i,e,t,n){const s={},o=new WeakMap;function r(d){const h=d.target;h.index!==null&&e.remove(h.index);for(const _ in h.attributes)e.remove(h.attributes[_]);h.removeEventListener("dispose",r),delete s[h.id];const f=o.get(h);f&&(e.remove(f),o.delete(h)),n.releaseStatesOfGeometry(h),h.isInstancedBufferGeometry===!0&&delete h._maxInstanceCount,t.memory.geometries--}function a(d,h){return s[h.id]===!0||(h.addEventListener("dispose",r),s[h.id]=!0,t.memory.geometries++),h}function l(d){const h=d.attributes;for(const f in h)e.update(h[f],i.ARRAY_BUFFER)}function c(d){const h=[],f=d.index,_=d.attributes.position;let g=0;if(f!==null){const y=f.array;g=f.version;for(let w=0,v=y.length;w<v;w+=3){const b=y[w+0],E=y[w+1],C=y[w+2];h.push(b,E,E,C,C,b)}}else if(_!==void 0){const y=_.array;g=_.version;for(let w=0,v=y.length/3-1;w<v;w+=3){const b=w+0,E=w+1,C=w+2;h.push(b,E,E,C,C,b)}}else return;const m=new(sf(h)?cf:lf)(h,1);m.version=g;const p=o.get(d);p&&e.remove(p),o.set(d,m)}function u(d){const h=o.get(d);if(h){const f=d.index;f!==null&&h.version<f.version&&c(d)}else c(d);return o.get(d)}return{get:a,update:l,getWireframeAttribute:u}}function jv(i,e,t){let n;function s(h){n=h}let o,r;function a(h){o=h.type,r=h.bytesPerElement}function l(h,f){i.drawElements(n,f,o,h*r),t.update(f,n,1)}function c(h,f,_){_!==0&&(i.drawElementsInstanced(n,f,o,h*r,_),t.update(f,n,_))}function u(h,f,_){if(_===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,f,0,o,h,0,_);let m=0;for(let p=0;p<_;p++)m+=f[p];t.update(m,n,1)}function d(h,f,_,g){if(_===0)return;const m=e.get("WEBGL_multi_draw");if(m===null)for(let p=0;p<h.length;p++)c(h[p]/r,f[p],g[p]);else{m.multiDrawElementsInstancedWEBGL(n,f,0,o,h,0,g,0,_);let p=0;for(let y=0;y<_;y++)p+=f[y]*g[y];t.update(p,n,1)}}this.setMode=s,this.setIndex=a,this.render=l,this.renderInstances=c,this.renderMultiDraw=u,this.renderMultiDrawInstances=d}function $v(i){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(o,r,a){switch(t.calls++,r){case i.TRIANGLES:t.triangles+=a*(o/3);break;case i.LINES:t.lines+=a*(o/2);break;case i.LINE_STRIP:t.lines+=a*(o-1);break;case i.LINE_LOOP:t.lines+=a*o;break;case i.POINTS:t.points+=a*o;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",r);break}}function s(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:s,update:n}}function Yv(i,e,t){const n=new WeakMap,s=new We;function o(r,a,l){const c=r.morphTargetInfluences,u=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,d=u!==void 0?u.length:0;let h=n.get(a);if(h===void 0||h.count!==d){let S=function(){C.dispose(),n.delete(a),a.removeEventListener("dispose",S)};h!==void 0&&h.texture.dispose();const f=a.morphAttributes.position!==void 0,_=a.morphAttributes.normal!==void 0,g=a.morphAttributes.color!==void 0,m=a.morphAttributes.position||[],p=a.morphAttributes.normal||[],y=a.morphAttributes.color||[];let w=0;f===!0&&(w=1),_===!0&&(w=2),g===!0&&(w=3);let v=a.attributes.position.count*w,b=1;v>e.maxTextureSize&&(b=Math.ceil(v/e.maxTextureSize),v=e.maxTextureSize);const E=new Float32Array(v*b*4*d),C=new rf(E,v,b,d);C.type=qn,C.needsUpdate=!0;const D=w*4;for(let x=0;x<d;x++){const P=m[x],F=p[x],O=y[x],k=v*b*4*x;for(let L=0;L<P.count;L++){const N=L*D;f===!0&&(s.fromBufferAttribute(P,L),E[k+N+0]=s.x,E[k+N+1]=s.y,E[k+N+2]=s.z,E[k+N+3]=0),_===!0&&(s.fromBufferAttribute(F,L),E[k+N+4]=s.x,E[k+N+5]=s.y,E[k+N+6]=s.z,E[k+N+7]=0),g===!0&&(s.fromBufferAttribute(O,L),E[k+N+8]=s.x,E[k+N+9]=s.y,E[k+N+10]=s.z,E[k+N+11]=O.itemSize===4?s.w:1)}}h={count:d,texture:C,size:new me(v,b)},n.set(a,h),a.addEventListener("dispose",S)}if(r.isInstancedMesh===!0&&r.morphTexture!==null)l.getUniforms().setValue(i,"morphTexture",r.morphTexture,t);else{let f=0;for(let g=0;g<c.length;g++)f+=c[g];const _=a.morphTargetsRelative?1:1-f;l.getUniforms().setValue(i,"morphTargetBaseInfluence",_),l.getUniforms().setValue(i,"morphTargetInfluences",c)}l.getUniforms().setValue(i,"morphTargetsTexture",h.texture,t),l.getUniforms().setValue(i,"morphTargetsTextureSize",h.size)}return{update:o}}function Kv(i,e,t,n){let s=new WeakMap;function o(l){const c=n.render.frame,u=l.geometry,d=e.get(l,u);if(s.get(d)!==c&&(e.update(d),s.set(d,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",a)===!1&&l.addEventListener("dispose",a),s.get(l)!==c&&(t.update(l.instanceMatrix,i.ARRAY_BUFFER),l.instanceColor!==null&&t.update(l.instanceColor,i.ARRAY_BUFFER),s.set(l,c))),l.isSkinnedMesh){const h=l.skeleton;s.get(h)!==c&&(h.update(),s.set(h,c))}return d}function r(){s=new WeakMap}function a(l){const c=l.target;c.removeEventListener("dispose",a),t.remove(c.instanceMatrix),c.instanceColor!==null&&t.remove(c.instanceColor)}return{update:o,dispose:r}}const Ef=new Bt,Nd=new gf(1,1),bf=new rf,Tf=new Xm,Af=new hf,Ud=[],Fd=[],Bd=new Float32Array(16),zd=new Float32Array(9),kd=new Float32Array(4);function bo(i,e,t){const n=i[0];if(n<=0||n>0)return i;const s=e*t;let o=Ud[s];if(o===void 0&&(o=new Float32Array(s),Ud[s]=o),e!==0){n.toArray(o,0);for(let r=1,a=0;r!==e;++r)a+=t,i[r].toArray(o,a)}return o}function Lt(i,e){if(i.length!==e.length)return!1;for(let t=0,n=i.length;t<n;t++)if(i[t]!==e[t])return!1;return!0}function It(i,e){for(let t=0,n=e.length;t<n;t++)i[t]=e[t]}function Ha(i,e){let t=Fd[e];t===void 0&&(t=new Int32Array(e),Fd[e]=t);for(let n=0;n!==e;++n)t[n]=i.allocateTextureUnit();return t}function Zv(i,e){const t=this.cache;t[0]!==e&&(i.uniform1f(this.addr,e),t[0]=e)}function Jv(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Lt(t,e))return;i.uniform2fv(this.addr,e),It(t,e)}}function Qv(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(i.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(Lt(t,e))return;i.uniform3fv(this.addr,e),It(t,e)}}function ex(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Lt(t,e))return;i.uniform4fv(this.addr,e),It(t,e)}}function tx(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(Lt(t,e))return;i.uniformMatrix2fv(this.addr,!1,e),It(t,e)}else{if(Lt(t,n))return;kd.set(n),i.uniformMatrix2fv(this.addr,!1,kd),It(t,n)}}function nx(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(Lt(t,e))return;i.uniformMatrix3fv(this.addr,!1,e),It(t,e)}else{if(Lt(t,n))return;zd.set(n),i.uniformMatrix3fv(this.addr,!1,zd),It(t,n)}}function ix(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(Lt(t,e))return;i.uniformMatrix4fv(this.addr,!1,e),It(t,e)}else{if(Lt(t,n))return;Bd.set(n),i.uniformMatrix4fv(this.addr,!1,Bd),It(t,n)}}function sx(i,e){const t=this.cache;t[0]!==e&&(i.uniform1i(this.addr,e),t[0]=e)}function ox(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Lt(t,e))return;i.uniform2iv(this.addr,e),It(t,e)}}function rx(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Lt(t,e))return;i.uniform3iv(this.addr,e),It(t,e)}}function ax(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Lt(t,e))return;i.uniform4iv(this.addr,e),It(t,e)}}function lx(i,e){const t=this.cache;t[0]!==e&&(i.uniform1ui(this.addr,e),t[0]=e)}function cx(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Lt(t,e))return;i.uniform2uiv(this.addr,e),It(t,e)}}function ux(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Lt(t,e))return;i.uniform3uiv(this.addr,e),It(t,e)}}function dx(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Lt(t,e))return;i.uniform4uiv(this.addr,e),It(t,e)}}function hx(i,e,t){const n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);let o;this.type===i.SAMPLER_2D_SHADOW?(Nd.compareFunction=nf,o=Nd):o=Ef,t.setTexture2D(e||o,s)}function fx(i,e,t){const n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTexture3D(e||Tf,s)}function px(i,e,t){const n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTextureCube(e||Af,s)}function mx(i,e,t){const n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTexture2DArray(e||bf,s)}function gx(i){switch(i){case 5126:return Zv;case 35664:return Jv;case 35665:return Qv;case 35666:return ex;case 35674:return tx;case 35675:return nx;case 35676:return ix;case 5124:case 35670:return sx;case 35667:case 35671:return ox;case 35668:case 35672:return rx;case 35669:case 35673:return ax;case 5125:return lx;case 36294:return cx;case 36295:return ux;case 36296:return dx;case 35678:case 36198:case 36298:case 36306:case 35682:return hx;case 35679:case 36299:case 36307:return fx;case 35680:case 36300:case 36308:case 36293:return px;case 36289:case 36303:case 36311:case 36292:return mx}}function _x(i,e){i.uniform1fv(this.addr,e)}function vx(i,e){const t=bo(e,this.size,2);i.uniform2fv(this.addr,t)}function xx(i,e){const t=bo(e,this.size,3);i.uniform3fv(this.addr,t)}function yx(i,e){const t=bo(e,this.size,4);i.uniform4fv(this.addr,t)}function wx(i,e){const t=bo(e,this.size,4);i.uniformMatrix2fv(this.addr,!1,t)}function Sx(i,e){const t=bo(e,this.size,9);i.uniformMatrix3fv(this.addr,!1,t)}function Mx(i,e){const t=bo(e,this.size,16);i.uniformMatrix4fv(this.addr,!1,t)}function Ex(i,e){i.uniform1iv(this.addr,e)}function bx(i,e){i.uniform2iv(this.addr,e)}function Tx(i,e){i.uniform3iv(this.addr,e)}function Ax(i,e){i.uniform4iv(this.addr,e)}function Cx(i,e){i.uniform1uiv(this.addr,e)}function Rx(i,e){i.uniform2uiv(this.addr,e)}function Px(i,e){i.uniform3uiv(this.addr,e)}function Dx(i,e){i.uniform4uiv(this.addr,e)}function Lx(i,e,t){const n=this.cache,s=e.length,o=Ha(t,s);Lt(n,o)||(i.uniform1iv(this.addr,o),It(n,o));for(let r=0;r!==s;++r)t.setTexture2D(e[r]||Ef,o[r])}function Ix(i,e,t){const n=this.cache,s=e.length,o=Ha(t,s);Lt(n,o)||(i.uniform1iv(this.addr,o),It(n,o));for(let r=0;r!==s;++r)t.setTexture3D(e[r]||Tf,o[r])}function Ox(i,e,t){const n=this.cache,s=e.length,o=Ha(t,s);Lt(n,o)||(i.uniform1iv(this.addr,o),It(n,o));for(let r=0;r!==s;++r)t.setTextureCube(e[r]||Af,o[r])}function Nx(i,e,t){const n=this.cache,s=e.length,o=Ha(t,s);Lt(n,o)||(i.uniform1iv(this.addr,o),It(n,o));for(let r=0;r!==s;++r)t.setTexture2DArray(e[r]||bf,o[r])}function Ux(i){switch(i){case 5126:return _x;case 35664:return vx;case 35665:return xx;case 35666:return yx;case 35674:return wx;case 35675:return Sx;case 35676:return Mx;case 5124:case 35670:return Ex;case 35667:case 35671:return bx;case 35668:case 35672:return Tx;case 35669:case 35673:return Ax;case 5125:return Cx;case 36294:return Rx;case 36295:return Px;case 36296:return Dx;case 35678:case 36198:case 36298:case 36306:case 35682:return Lx;case 35679:case 36299:case 36307:return Ix;case 35680:case 36300:case 36308:case 36293:return Ox;case 36289:case 36303:case 36311:case 36292:return Nx}}class Fx{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=gx(t.type)}}class Bx{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=Ux(t.type)}}class zx{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){const s=this.seq;for(let o=0,r=s.length;o!==r;++o){const a=s[o];a.setValue(e,t[a.id],n)}}}const El=/(\w+)(\])?(\[|\.)?/g;function Hd(i,e){i.seq.push(e),i.map[e.id]=e}function kx(i,e,t){const n=i.name,s=n.length;for(El.lastIndex=0;;){const o=El.exec(n),r=El.lastIndex;let a=o[1];const l=o[2]==="]",c=o[3];if(l&&(a=a|0),c===void 0||c==="["&&r+2===s){Hd(t,c===void 0?new Fx(a,i,e):new Bx(a,i,e));break}else{let d=t.map[a];d===void 0&&(d=new zx(a),Hd(t,d)),t=d}}}class ga{constructor(e,t){this.seq=[],this.map={};const n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let s=0;s<n;++s){const o=e.getActiveUniform(t,s),r=e.getUniformLocation(t,o.name);kx(o,r,this)}}setValue(e,t,n,s){const o=this.map[t];o!==void 0&&o.setValue(e,n,s)}setOptional(e,t,n){const s=t[n];s!==void 0&&this.setValue(e,n,s)}static upload(e,t,n,s){for(let o=0,r=t.length;o!==r;++o){const a=t[o],l=n[a.id];l.needsUpdate!==!1&&a.setValue(e,l.value,s)}}static seqWithValue(e,t){const n=[];for(let s=0,o=e.length;s!==o;++s){const r=e[s];r.id in t&&n.push(r)}return n}}function Gd(i,e,t){const n=i.createShader(e);return i.shaderSource(n,t),i.compileShader(n),n}const Hx=37297;let Gx=0;function Vx(i,e){const t=i.split(`
`),n=[],s=Math.max(e-6,0),o=Math.min(e+6,t.length);for(let r=s;r<o;r++){const a=r+1;n.push(`${a===e?">":" "} ${a}: ${t[r]}`)}return n.join(`
`)}const Vd=new Fe;function Wx(i){Ze._getMatrix(Vd,Ze.workingColorSpace,i);const e=`mat3( ${Vd.elements.map(t=>t.toFixed(4))} )`;switch(Ze.getTransfer(i)){case Sa:return[e,"LinearTransferOETF"];case ut:return[e,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",i),[e,"LinearTransferOETF"]}}function Wd(i,e,t){const n=i.getShaderParameter(e,i.COMPILE_STATUS),s=i.getShaderInfoLog(e).trim();if(n&&s==="")return"";const o=/ERROR: 0:(\d+)/.exec(s);if(o){const r=parseInt(o[1]);return t.toUpperCase()+`

`+s+`

`+Vx(i.getShaderSource(e),r)}else return s}function Xx(i,e){const t=Wx(e);return[`vec4 ${i}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}function qx(i,e){let t;switch(e){case tm:t="Linear";break;case nm:t="Reinhard";break;case im:t="Cineon";break;case sm:t="ACESFilmic";break;case rm:t="AgX";break;case am:t="Neutral";break;case om:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+i+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}const qr=new A;function jx(){Ze.getLuminanceCoefficients(qr);const i=qr.x.toFixed(4),e=qr.y.toFixed(4),t=qr.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function $x(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Vo).join(`
`)}function Yx(i){const e=[];for(const t in i){const n=i[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function Kx(i,e){const t={},n=i.getProgramParameter(e,i.ACTIVE_ATTRIBUTES);for(let s=0;s<n;s++){const o=i.getActiveAttrib(e,s),r=o.name;let a=1;o.type===i.FLOAT_MAT2&&(a=2),o.type===i.FLOAT_MAT3&&(a=3),o.type===i.FLOAT_MAT4&&(a=4),t[r]={type:o.type,location:i.getAttribLocation(e,r),locationSize:a}}return t}function Vo(i){return i!==""}function Xd(i,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return i.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function qd(i,e){return i.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const Zx=/^[ \t]*#include +<([\w\d./]+)>/gm;function Nc(i){return i.replace(Zx,Qx)}const Jx=new Map;function Qx(i,e){let t=ze[e];if(t===void 0){const n=Jx.get(e);if(n!==void 0)t=ze[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,n);else throw new Error("Can not resolve #include <"+e+">")}return Nc(t)}const ey=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function jd(i){return i.replace(ey,ty)}function ty(i,e,t,n){let s="";for(let o=parseInt(e);o<parseInt(t);o++)s+=n.replace(/\[\s*i\s*\]/g,"[ "+o+" ]").replace(/UNROLLED_LOOP_INDEX/g,o);return s}function $d(i){let e=`precision ${i.precision} float;
	precision ${i.precision} int;
	precision ${i.precision} sampler2D;
	precision ${i.precision} samplerCube;
	precision ${i.precision} sampler3D;
	precision ${i.precision} sampler2DArray;
	precision ${i.precision} sampler2DShadow;
	precision ${i.precision} samplerCubeShadow;
	precision ${i.precision} sampler2DArrayShadow;
	precision ${i.precision} isampler2D;
	precision ${i.precision} isampler3D;
	precision ${i.precision} isamplerCube;
	precision ${i.precision} isampler2DArray;
	precision ${i.precision} usampler2D;
	precision ${i.precision} usampler3D;
	precision ${i.precision} usamplerCube;
	precision ${i.precision} usampler2DArray;
	`;return i.precision==="highp"?e+=`
#define HIGH_PRECISION`:i.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:i.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function ny(i){let e="SHADOWMAP_TYPE_BASIC";return i.shadowMapType===Gh?e="SHADOWMAP_TYPE_PCF":i.shadowMapType===Op?e="SHADOWMAP_TYPE_PCF_SOFT":i.shadowMapType===hi&&(e="SHADOWMAP_TYPE_VSM"),e}function iy(i){let e="ENVMAP_TYPE_CUBE";if(i.envMap)switch(i.envMapMode){case lo:case co:e="ENVMAP_TYPE_CUBE";break;case Ba:e="ENVMAP_TYPE_CUBE_UV";break}return e}function sy(i){let e="ENVMAP_MODE_REFLECTION";if(i.envMap)switch(i.envMapMode){case co:e="ENVMAP_MODE_REFRACTION";break}return e}function oy(i){let e="ENVMAP_BLENDING_NONE";if(i.envMap)switch(i.combine){case qc:e="ENVMAP_BLENDING_MULTIPLY";break;case Qp:e="ENVMAP_BLENDING_MIX";break;case em:e="ENVMAP_BLENDING_ADD";break}return e}function ry(i){const e=i.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),112)),texelHeight:n,maxMip:t}}function ay(i,e,t,n){const s=i.getContext(),o=t.defines;let r=t.vertexShader,a=t.fragmentShader;const l=ny(t),c=iy(t),u=sy(t),d=oy(t),h=ry(t),f=$x(t),_=Yx(o),g=s.createProgram();let m,p,y=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(m=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,_].filter(Vo).join(`
`),m.length>0&&(m+=`
`),p=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,_].filter(Vo).join(`
`),p.length>0&&(p+=`
`)):(m=[$d(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,_,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+u:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Vo).join(`
`),p=[$d(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,_,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+u:"",t.envMap?"#define "+d:"",h?"#define CUBEUV_TEXEL_WIDTH "+h.texelWidth:"",h?"#define CUBEUV_TEXEL_HEIGHT "+h.texelHeight:"",h?"#define CUBEUV_MAX_MIP "+h.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor||t.batchingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==Wi?"#define TONE_MAPPING":"",t.toneMapping!==Wi?ze.tonemapping_pars_fragment:"",t.toneMapping!==Wi?qx("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",ze.colorspace_pars_fragment,Xx("linearToOutputTexel",t.outputColorSpace),jx(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(Vo).join(`
`)),r=Nc(r),r=Xd(r,t),r=qd(r,t),a=Nc(a),a=Xd(a,t),a=qd(a,t),r=jd(r),a=jd(a),t.isRawShaderMaterial!==!0&&(y=`#version 300 es
`,m=[f,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,p=["#define varying in",t.glslVersion===Bu?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===Bu?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+p);const w=y+m+r,v=y+p+a,b=Gd(s,s.VERTEX_SHADER,w),E=Gd(s,s.FRAGMENT_SHADER,v);s.attachShader(g,b),s.attachShader(g,E),t.index0AttributeName!==void 0?s.bindAttribLocation(g,0,t.index0AttributeName):t.morphTargets===!0&&s.bindAttribLocation(g,0,"position"),s.linkProgram(g);function C(P){if(i.debug.checkShaderErrors){const F=s.getProgramInfoLog(g).trim(),O=s.getShaderInfoLog(b).trim(),k=s.getShaderInfoLog(E).trim();let L=!0,N=!0;if(s.getProgramParameter(g,s.LINK_STATUS)===!1)if(L=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(s,g,b,E);else{const V=Wd(s,b,"vertex"),H=Wd(s,E,"fragment");console.error("THREE.WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(g,s.VALIDATE_STATUS)+`

Material Name: `+P.name+`
Material Type: `+P.type+`

Program Info Log: `+F+`
`+V+`
`+H)}else F!==""?console.warn("THREE.WebGLProgram: Program Info Log:",F):(O===""||k==="")&&(N=!1);N&&(P.diagnostics={runnable:L,programLog:F,vertexShader:{log:O,prefix:m},fragmentShader:{log:k,prefix:p}})}s.deleteShader(b),s.deleteShader(E),D=new ga(s,g),S=Kx(s,g)}let D;this.getUniforms=function(){return D===void 0&&C(this),D};let S;this.getAttributes=function(){return S===void 0&&C(this),S};let x=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return x===!1&&(x=s.getProgramParameter(g,Hx)),x},this.destroy=function(){n.releaseStatesOfProgram(this),s.deleteProgram(g),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=Gx++,this.cacheKey=e,this.usedTimes=1,this.program=g,this.vertexShader=b,this.fragmentShader=E,this}let ly=0;class cy{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,n=e.fragmentShader,s=this._getShaderStage(t),o=this._getShaderStage(n),r=this._getShaderCacheForMaterial(e);return r.has(s)===!1&&(r.add(s),s.usedTimes++),r.has(o)===!1&&(r.add(o),o.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){const t=this.shaderCache;let n=t.get(e);return n===void 0&&(n=new uy(e),t.set(e,n)),n}}class uy{constructor(e){this.id=ly++,this.code=e,this.usedTimes=0}}function dy(i,e,t,n,s,o,r){const a=new tu,l=new cy,c=new Set,u=[],d=s.logarithmicDepthBuffer,h=s.vertexTextures;let f=s.precision;const _={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function g(S){return c.add(S),S===0?"uv":`uv${S}`}function m(S,x,P,F,O){const k=F.fog,L=O.geometry,N=S.isMeshStandardMaterial?F.environment:null,V=(S.isMeshStandardMaterial?t:e).get(S.envMap||N),H=V&&V.mapping===Ba?V.image.height:null,j=_[S.type];S.precision!==null&&(f=s.getMaxPrecision(S.precision),f!==S.precision&&console.warn("THREE.WebGLProgram.getParameters:",S.precision,"not supported, using",f,"instead."));const $=L.morphAttributes.position||L.morphAttributes.normal||L.morphAttributes.color,ae=$!==void 0?$.length:0;let ye=0;L.morphAttributes.position!==void 0&&(ye=1),L.morphAttributes.normal!==void 0&&(ye=2),L.morphAttributes.color!==void 0&&(ye=3);let He,Y,ie,Se;if(j){const rt=fn[j];He=rt.vertexShader,Y=rt.fragmentShader}else He=S.vertexShader,Y=S.fragmentShader,l.update(S),ie=l.getVertexShaderID(S),Se=l.getFragmentShaderID(S);const de=i.getRenderTarget(),Pe=i.state.buffers.depth.getReversed(),Ne=O.isInstancedMesh===!0,Ge=O.isBatchedMesh===!0,yt=!!S.map,Je=!!S.matcap,Tt=!!V,I=!!S.aoMap,bn=!!S.lightMap,$e=!!S.bumpMap,Ye=!!S.normalMap,Ee=!!S.displacementMap,gt=!!S.emissiveMap,be=!!S.metalnessMap,R=!!S.roughnessMap,M=S.anisotropy>0,G=S.clearcoat>0,Z=S.dispersion>0,Q=S.iridescence>0,K=S.sheen>0,Me=S.transmission>0,he=M&&!!S.anisotropyMap,_e=G&&!!S.clearcoatMap,Qe=G&&!!S.clearcoatNormalMap,ne=G&&!!S.clearcoatRoughnessMap,ve=Q&&!!S.iridescenceMap,Re=Q&&!!S.iridescenceThicknessMap,Le=K&&!!S.sheenColorMap,xe=K&&!!S.sheenRoughnessMap,Ke=!!S.specularMap,Be=!!S.specularColorMap,ft=!!S.specularIntensityMap,U=Me&&!!S.transmissionMap,ce=Me&&!!S.thicknessMap,q=!!S.gradientMap,J=!!S.alphaMap,pe=S.alphaTest>0,fe=!!S.alphaHash,Ue=!!S.extensions;let St=Wi;S.toneMapped&&(de===null||de.isXRRenderTarget===!0)&&(St=i.toneMapping);const Wt={shaderID:j,shaderType:S.type,shaderName:S.name,vertexShader:He,fragmentShader:Y,defines:S.defines,customVertexShaderID:ie,customFragmentShaderID:Se,isRawShaderMaterial:S.isRawShaderMaterial===!0,glslVersion:S.glslVersion,precision:f,batching:Ge,batchingColor:Ge&&O._colorsTexture!==null,instancing:Ne,instancingColor:Ne&&O.instanceColor!==null,instancingMorph:Ne&&O.morphTexture!==null,supportsVertexTextures:h,outputColorSpace:de===null?i.outputColorSpace:de.isXRRenderTarget===!0?de.texture.colorSpace:ln,alphaToCoverage:!!S.alphaToCoverage,map:yt,matcap:Je,envMap:Tt,envMapMode:Tt&&V.mapping,envMapCubeUVHeight:H,aoMap:I,lightMap:bn,bumpMap:$e,normalMap:Ye,displacementMap:h&&Ee,emissiveMap:gt,normalMapObjectSpace:Ye&&S.normalMapType===hm,normalMapTangentSpace:Ye&&S.normalMapType===za,metalnessMap:be,roughnessMap:R,anisotropy:M,anisotropyMap:he,clearcoat:G,clearcoatMap:_e,clearcoatNormalMap:Qe,clearcoatRoughnessMap:ne,dispersion:Z,iridescence:Q,iridescenceMap:ve,iridescenceThicknessMap:Re,sheen:K,sheenColorMap:Le,sheenRoughnessMap:xe,specularMap:Ke,specularColorMap:Be,specularIntensityMap:ft,transmission:Me,transmissionMap:U,thicknessMap:ce,gradientMap:q,opaque:S.transparent===!1&&S.blending===Zs&&S.alphaToCoverage===!1,alphaMap:J,alphaTest:pe,alphaHash:fe,combine:S.combine,mapUv:yt&&g(S.map.channel),aoMapUv:I&&g(S.aoMap.channel),lightMapUv:bn&&g(S.lightMap.channel),bumpMapUv:$e&&g(S.bumpMap.channel),normalMapUv:Ye&&g(S.normalMap.channel),displacementMapUv:Ee&&g(S.displacementMap.channel),emissiveMapUv:gt&&g(S.emissiveMap.channel),metalnessMapUv:be&&g(S.metalnessMap.channel),roughnessMapUv:R&&g(S.roughnessMap.channel),anisotropyMapUv:he&&g(S.anisotropyMap.channel),clearcoatMapUv:_e&&g(S.clearcoatMap.channel),clearcoatNormalMapUv:Qe&&g(S.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:ne&&g(S.clearcoatRoughnessMap.channel),iridescenceMapUv:ve&&g(S.iridescenceMap.channel),iridescenceThicknessMapUv:Re&&g(S.iridescenceThicknessMap.channel),sheenColorMapUv:Le&&g(S.sheenColorMap.channel),sheenRoughnessMapUv:xe&&g(S.sheenRoughnessMap.channel),specularMapUv:Ke&&g(S.specularMap.channel),specularColorMapUv:Be&&g(S.specularColorMap.channel),specularIntensityMapUv:ft&&g(S.specularIntensityMap.channel),transmissionMapUv:U&&g(S.transmissionMap.channel),thicknessMapUv:ce&&g(S.thicknessMap.channel),alphaMapUv:J&&g(S.alphaMap.channel),vertexTangents:!!L.attributes.tangent&&(Ye||M),vertexColors:S.vertexColors,vertexAlphas:S.vertexColors===!0&&!!L.attributes.color&&L.attributes.color.itemSize===4,pointsUvs:O.isPoints===!0&&!!L.attributes.uv&&(yt||J),fog:!!k,useFog:S.fog===!0,fogExp2:!!k&&k.isFogExp2,flatShading:S.flatShading===!0,sizeAttenuation:S.sizeAttenuation===!0,logarithmicDepthBuffer:d,reverseDepthBuffer:Pe,skinning:O.isSkinnedMesh===!0,morphTargets:L.morphAttributes.position!==void 0,morphNormals:L.morphAttributes.normal!==void 0,morphColors:L.morphAttributes.color!==void 0,morphTargetsCount:ae,morphTextureStride:ye,numDirLights:x.directional.length,numPointLights:x.point.length,numSpotLights:x.spot.length,numSpotLightMaps:x.spotLightMap.length,numRectAreaLights:x.rectArea.length,numHemiLights:x.hemi.length,numDirLightShadows:x.directionalShadowMap.length,numPointLightShadows:x.pointShadowMap.length,numSpotLightShadows:x.spotShadowMap.length,numSpotLightShadowsWithMaps:x.numSpotLightShadowsWithMaps,numLightProbes:x.numLightProbes,numClippingPlanes:r.numPlanes,numClipIntersection:r.numIntersection,dithering:S.dithering,shadowMapEnabled:i.shadowMap.enabled&&P.length>0,shadowMapType:i.shadowMap.type,toneMapping:St,decodeVideoTexture:yt&&S.map.isVideoTexture===!0&&Ze.getTransfer(S.map.colorSpace)===ut,decodeVideoTextureEmissive:gt&&S.emissiveMap.isVideoTexture===!0&&Ze.getTransfer(S.emissiveMap.colorSpace)===ut,premultipliedAlpha:S.premultipliedAlpha,doubleSided:S.side===pn,flipSided:S.side===gn,useDepthPacking:S.depthPacking>=0,depthPacking:S.depthPacking||0,index0AttributeName:S.index0AttributeName,extensionClipCullDistance:Ue&&S.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Ue&&S.extensions.multiDraw===!0||Ge)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:S.customProgramCacheKey()};return Wt.vertexUv1s=c.has(1),Wt.vertexUv2s=c.has(2),Wt.vertexUv3s=c.has(3),c.clear(),Wt}function p(S){const x=[];if(S.shaderID?x.push(S.shaderID):(x.push(S.customVertexShaderID),x.push(S.customFragmentShaderID)),S.defines!==void 0)for(const P in S.defines)x.push(P),x.push(S.defines[P]);return S.isRawShaderMaterial===!1&&(y(x,S),w(x,S),x.push(i.outputColorSpace)),x.push(S.customProgramCacheKey),x.join()}function y(S,x){S.push(x.precision),S.push(x.outputColorSpace),S.push(x.envMapMode),S.push(x.envMapCubeUVHeight),S.push(x.mapUv),S.push(x.alphaMapUv),S.push(x.lightMapUv),S.push(x.aoMapUv),S.push(x.bumpMapUv),S.push(x.normalMapUv),S.push(x.displacementMapUv),S.push(x.emissiveMapUv),S.push(x.metalnessMapUv),S.push(x.roughnessMapUv),S.push(x.anisotropyMapUv),S.push(x.clearcoatMapUv),S.push(x.clearcoatNormalMapUv),S.push(x.clearcoatRoughnessMapUv),S.push(x.iridescenceMapUv),S.push(x.iridescenceThicknessMapUv),S.push(x.sheenColorMapUv),S.push(x.sheenRoughnessMapUv),S.push(x.specularMapUv),S.push(x.specularColorMapUv),S.push(x.specularIntensityMapUv),S.push(x.transmissionMapUv),S.push(x.thicknessMapUv),S.push(x.combine),S.push(x.fogExp2),S.push(x.sizeAttenuation),S.push(x.morphTargetsCount),S.push(x.morphAttributeCount),S.push(x.numDirLights),S.push(x.numPointLights),S.push(x.numSpotLights),S.push(x.numSpotLightMaps),S.push(x.numHemiLights),S.push(x.numRectAreaLights),S.push(x.numDirLightShadows),S.push(x.numPointLightShadows),S.push(x.numSpotLightShadows),S.push(x.numSpotLightShadowsWithMaps),S.push(x.numLightProbes),S.push(x.shadowMapType),S.push(x.toneMapping),S.push(x.numClippingPlanes),S.push(x.numClipIntersection),S.push(x.depthPacking)}function w(S,x){a.disableAll(),x.supportsVertexTextures&&a.enable(0),x.instancing&&a.enable(1),x.instancingColor&&a.enable(2),x.instancingMorph&&a.enable(3),x.matcap&&a.enable(4),x.envMap&&a.enable(5),x.normalMapObjectSpace&&a.enable(6),x.normalMapTangentSpace&&a.enable(7),x.clearcoat&&a.enable(8),x.iridescence&&a.enable(9),x.alphaTest&&a.enable(10),x.vertexColors&&a.enable(11),x.vertexAlphas&&a.enable(12),x.vertexUv1s&&a.enable(13),x.vertexUv2s&&a.enable(14),x.vertexUv3s&&a.enable(15),x.vertexTangents&&a.enable(16),x.anisotropy&&a.enable(17),x.alphaHash&&a.enable(18),x.batching&&a.enable(19),x.dispersion&&a.enable(20),x.batchingColor&&a.enable(21),S.push(a.mask),a.disableAll(),x.fog&&a.enable(0),x.useFog&&a.enable(1),x.flatShading&&a.enable(2),x.logarithmicDepthBuffer&&a.enable(3),x.reverseDepthBuffer&&a.enable(4),x.skinning&&a.enable(5),x.morphTargets&&a.enable(6),x.morphNormals&&a.enable(7),x.morphColors&&a.enable(8),x.premultipliedAlpha&&a.enable(9),x.shadowMapEnabled&&a.enable(10),x.doubleSided&&a.enable(11),x.flipSided&&a.enable(12),x.useDepthPacking&&a.enable(13),x.dithering&&a.enable(14),x.transmission&&a.enable(15),x.sheen&&a.enable(16),x.opaque&&a.enable(17),x.pointsUvs&&a.enable(18),x.decodeVideoTexture&&a.enable(19),x.decodeVideoTextureEmissive&&a.enable(20),x.alphaToCoverage&&a.enable(21),S.push(a.mask)}function v(S){const x=_[S.type];let P;if(x){const F=fn[x];P=Ss.clone(F.uniforms)}else P=S.uniforms;return P}function b(S,x){let P;for(let F=0,O=u.length;F<O;F++){const k=u[F];if(k.cacheKey===x){P=k,++P.usedTimes;break}}return P===void 0&&(P=new ay(i,x,S,o),u.push(P)),P}function E(S){if(--S.usedTimes===0){const x=u.indexOf(S);u[x]=u[u.length-1],u.pop(),S.destroy()}}function C(S){l.remove(S)}function D(){l.dispose()}return{getParameters:m,getProgramCacheKey:p,getUniforms:v,acquireProgram:b,releaseProgram:E,releaseShaderCache:C,programs:u,dispose:D}}function hy(){let i=new WeakMap;function e(r){return i.has(r)}function t(r){let a=i.get(r);return a===void 0&&(a={},i.set(r,a)),a}function n(r){i.delete(r)}function s(r,a,l){i.get(r)[a]=l}function o(){i=new WeakMap}return{has:e,get:t,remove:n,update:s,dispose:o}}function fy(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.material.id!==e.material.id?i.material.id-e.material.id:i.z!==e.z?i.z-e.z:i.id-e.id}function Yd(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.z!==e.z?e.z-i.z:i.id-e.id}function Kd(){const i=[];let e=0;const t=[],n=[],s=[];function o(){e=0,t.length=0,n.length=0,s.length=0}function r(d,h,f,_,g,m){let p=i[e];return p===void 0?(p={id:d.id,object:d,geometry:h,material:f,groupOrder:_,renderOrder:d.renderOrder,z:g,group:m},i[e]=p):(p.id=d.id,p.object=d,p.geometry=h,p.material=f,p.groupOrder=_,p.renderOrder=d.renderOrder,p.z=g,p.group=m),e++,p}function a(d,h,f,_,g,m){const p=r(d,h,f,_,g,m);f.transmission>0?n.push(p):f.transparent===!0?s.push(p):t.push(p)}function l(d,h,f,_,g,m){const p=r(d,h,f,_,g,m);f.transmission>0?n.unshift(p):f.transparent===!0?s.unshift(p):t.unshift(p)}function c(d,h){t.length>1&&t.sort(d||fy),n.length>1&&n.sort(h||Yd),s.length>1&&s.sort(h||Yd)}function u(){for(let d=e,h=i.length;d<h;d++){const f=i[d];if(f.id===null)break;f.id=null,f.object=null,f.geometry=null,f.material=null,f.group=null}}return{opaque:t,transmissive:n,transparent:s,init:o,push:a,unshift:l,finish:u,sort:c}}function py(){let i=new WeakMap;function e(n,s){const o=i.get(n);let r;return o===void 0?(r=new Kd,i.set(n,[r])):s>=o.length?(r=new Kd,o.push(r)):r=o[s],r}function t(){i=new WeakMap}return{get:e,dispose:t}}function my(){const i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new A,color:new se};break;case"SpotLight":t={position:new A,direction:new A,color:new se,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new A,color:new se,distance:0,decay:0};break;case"HemisphereLight":t={direction:new A,skyColor:new se,groundColor:new se};break;case"RectAreaLight":t={color:new se,position:new A,halfWidth:new A,halfHeight:new A};break}return i[e.id]=t,t}}}function gy(){const i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new me};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new me};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new me,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[e.id]=t,t}}}let _y=0;function vy(i,e){return(e.castShadow?2:0)-(i.castShadow?2:0)+(e.map?1:0)-(i.map?1:0)}function xy(i){const e=new my,t=gy(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)n.probe.push(new A);const s=new A,o=new De,r=new De;function a(c){let u=0,d=0,h=0;for(let S=0;S<9;S++)n.probe[S].set(0,0,0);let f=0,_=0,g=0,m=0,p=0,y=0,w=0,v=0,b=0,E=0,C=0;c.sort(vy);for(let S=0,x=c.length;S<x;S++){const P=c[S],F=P.color,O=P.intensity,k=P.distance,L=P.shadow&&P.shadow.map?P.shadow.map.texture:null;if(P.isAmbientLight)u+=F.r*O,d+=F.g*O,h+=F.b*O;else if(P.isLightProbe){for(let N=0;N<9;N++)n.probe[N].addScaledVector(P.sh.coefficients[N],O);C++}else if(P.isDirectionalLight){const N=e.get(P);if(N.color.copy(P.color).multiplyScalar(P.intensity),P.castShadow){const V=P.shadow,H=t.get(P);H.shadowIntensity=V.intensity,H.shadowBias=V.bias,H.shadowNormalBias=V.normalBias,H.shadowRadius=V.radius,H.shadowMapSize=V.mapSize,n.directionalShadow[f]=H,n.directionalShadowMap[f]=L,n.directionalShadowMatrix[f]=P.shadow.matrix,y++}n.directional[f]=N,f++}else if(P.isSpotLight){const N=e.get(P);N.position.setFromMatrixPosition(P.matrixWorld),N.color.copy(F).multiplyScalar(O),N.distance=k,N.coneCos=Math.cos(P.angle),N.penumbraCos=Math.cos(P.angle*(1-P.penumbra)),N.decay=P.decay,n.spot[g]=N;const V=P.shadow;if(P.map&&(n.spotLightMap[b]=P.map,b++,V.updateMatrices(P),P.castShadow&&E++),n.spotLightMatrix[g]=V.matrix,P.castShadow){const H=t.get(P);H.shadowIntensity=V.intensity,H.shadowBias=V.bias,H.shadowNormalBias=V.normalBias,H.shadowRadius=V.radius,H.shadowMapSize=V.mapSize,n.spotShadow[g]=H,n.spotShadowMap[g]=L,v++}g++}else if(P.isRectAreaLight){const N=e.get(P);N.color.copy(F).multiplyScalar(O),N.halfWidth.set(P.width*.5,0,0),N.halfHeight.set(0,P.height*.5,0),n.rectArea[m]=N,m++}else if(P.isPointLight){const N=e.get(P);if(N.color.copy(P.color).multiplyScalar(P.intensity),N.distance=P.distance,N.decay=P.decay,P.castShadow){const V=P.shadow,H=t.get(P);H.shadowIntensity=V.intensity,H.shadowBias=V.bias,H.shadowNormalBias=V.normalBias,H.shadowRadius=V.radius,H.shadowMapSize=V.mapSize,H.shadowCameraNear=V.camera.near,H.shadowCameraFar=V.camera.far,n.pointShadow[_]=H,n.pointShadowMap[_]=L,n.pointShadowMatrix[_]=P.shadow.matrix,w++}n.point[_]=N,_++}else if(P.isHemisphereLight){const N=e.get(P);N.skyColor.copy(P.color).multiplyScalar(O),N.groundColor.copy(P.groundColor).multiplyScalar(O),n.hemi[p]=N,p++}}m>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=re.LTC_FLOAT_1,n.rectAreaLTC2=re.LTC_FLOAT_2):(n.rectAreaLTC1=re.LTC_HALF_1,n.rectAreaLTC2=re.LTC_HALF_2)),n.ambient[0]=u,n.ambient[1]=d,n.ambient[2]=h;const D=n.hash;(D.directionalLength!==f||D.pointLength!==_||D.spotLength!==g||D.rectAreaLength!==m||D.hemiLength!==p||D.numDirectionalShadows!==y||D.numPointShadows!==w||D.numSpotShadows!==v||D.numSpotMaps!==b||D.numLightProbes!==C)&&(n.directional.length=f,n.spot.length=g,n.rectArea.length=m,n.point.length=_,n.hemi.length=p,n.directionalShadow.length=y,n.directionalShadowMap.length=y,n.pointShadow.length=w,n.pointShadowMap.length=w,n.spotShadow.length=v,n.spotShadowMap.length=v,n.directionalShadowMatrix.length=y,n.pointShadowMatrix.length=w,n.spotLightMatrix.length=v+b-E,n.spotLightMap.length=b,n.numSpotLightShadowsWithMaps=E,n.numLightProbes=C,D.directionalLength=f,D.pointLength=_,D.spotLength=g,D.rectAreaLength=m,D.hemiLength=p,D.numDirectionalShadows=y,D.numPointShadows=w,D.numSpotShadows=v,D.numSpotMaps=b,D.numLightProbes=C,n.version=_y++)}function l(c,u){let d=0,h=0,f=0,_=0,g=0;const m=u.matrixWorldInverse;for(let p=0,y=c.length;p<y;p++){const w=c[p];if(w.isDirectionalLight){const v=n.directional[d];v.direction.setFromMatrixPosition(w.matrixWorld),s.setFromMatrixPosition(w.target.matrixWorld),v.direction.sub(s),v.direction.transformDirection(m),d++}else if(w.isSpotLight){const v=n.spot[f];v.position.setFromMatrixPosition(w.matrixWorld),v.position.applyMatrix4(m),v.direction.setFromMatrixPosition(w.matrixWorld),s.setFromMatrixPosition(w.target.matrixWorld),v.direction.sub(s),v.direction.transformDirection(m),f++}else if(w.isRectAreaLight){const v=n.rectArea[_];v.position.setFromMatrixPosition(w.matrixWorld),v.position.applyMatrix4(m),r.identity(),o.copy(w.matrixWorld),o.premultiply(m),r.extractRotation(o),v.halfWidth.set(w.width*.5,0,0),v.halfHeight.set(0,w.height*.5,0),v.halfWidth.applyMatrix4(r),v.halfHeight.applyMatrix4(r),_++}else if(w.isPointLight){const v=n.point[h];v.position.setFromMatrixPosition(w.matrixWorld),v.position.applyMatrix4(m),h++}else if(w.isHemisphereLight){const v=n.hemi[g];v.direction.setFromMatrixPosition(w.matrixWorld),v.direction.transformDirection(m),g++}}}return{setup:a,setupView:l,state:n}}function Zd(i){const e=new xy(i),t=[],n=[];function s(u){c.camera=u,t.length=0,n.length=0}function o(u){t.push(u)}function r(u){n.push(u)}function a(){e.setup(t)}function l(u){e.setupView(t,u)}const c={lightsArray:t,shadowsArray:n,camera:null,lights:e,transmissionRenderTarget:{}};return{init:s,state:c,setupLights:a,setupLightsView:l,pushLight:o,pushShadow:r}}function yy(i){let e=new WeakMap;function t(s,o=0){const r=e.get(s);let a;return r===void 0?(a=new Zd(i),e.set(s,[a])):o>=r.length?(a=new Zd(i),r.push(a)):a=r[o],a}function n(){e=new WeakMap}return{get:t,dispose:n}}const wy=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Sy=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function My(i,e,t){let n=new iu;const s=new me,o=new me,r=new We,a=new vf({depthPacking:tf}),l=new vg,c={},u=t.maxTextureSize,d={[yi]:gn,[gn]:yi,[pn]:pn},h=new bt({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new me},radius:{value:4}},vertexShader:wy,fragmentShader:Sy}),f=h.clone();f.defines.HORIZONTAL_PASS=1;const _=new xt;_.setAttribute("position",new At(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const g=new oe(_,h),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Gh;let p=this.type;this.render=function(E,C,D){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||E.length===0)return;const S=i.getRenderTarget(),x=i.getActiveCubeFace(),P=i.getActiveMipmapLevel(),F=i.state;F.setBlending($n),F.buffers.color.setClear(1,1,1,1),F.buffers.depth.setTest(!0),F.setScissorTest(!1);const O=p!==hi&&this.type===hi,k=p===hi&&this.type!==hi;for(let L=0,N=E.length;L<N;L++){const V=E[L],H=V.shadow;if(H===void 0){console.warn("THREE.WebGLShadowMap:",V,"has no shadow.");continue}if(H.autoUpdate===!1&&H.needsUpdate===!1)continue;s.copy(H.mapSize);const j=H.getFrameExtents();if(s.multiply(j),o.copy(H.mapSize),(s.x>u||s.y>u)&&(s.x>u&&(o.x=Math.floor(u/j.x),s.x=o.x*j.x,H.mapSize.x=o.x),s.y>u&&(o.y=Math.floor(u/j.y),s.y=o.y*j.y,H.mapSize.y=o.y)),H.map===null||O===!0||k===!0){const ae=this.type!==hi?{minFilter:an,magFilter:an}:{};H.map!==null&&H.map.dispose(),H.map=new tn(s.x,s.y,ae),H.map.texture.name=V.name+".shadowMap",H.camera.updateProjectionMatrix()}i.setRenderTarget(H.map),i.clear();const $=H.getViewportCount();for(let ae=0;ae<$;ae++){const ye=H.getViewport(ae);r.set(o.x*ye.x,o.y*ye.y,o.x*ye.z,o.y*ye.w),F.viewport(r),H.updateMatrices(V,ae),n=H.getFrustum(),v(C,D,H.camera,V,this.type)}H.isPointLightShadow!==!0&&this.type===hi&&y(H,D),H.needsUpdate=!1}p=this.type,m.needsUpdate=!1,i.setRenderTarget(S,x,P)};function y(E,C){const D=e.update(g);h.defines.VSM_SAMPLES!==E.blurSamples&&(h.defines.VSM_SAMPLES=E.blurSamples,f.defines.VSM_SAMPLES=E.blurSamples,h.needsUpdate=!0,f.needsUpdate=!0),E.mapPass===null&&(E.mapPass=new tn(s.x,s.y)),h.uniforms.shadow_pass.value=E.map.texture,h.uniforms.resolution.value=E.mapSize,h.uniforms.radius.value=E.radius,i.setRenderTarget(E.mapPass),i.clear(),i.renderBufferDirect(C,null,D,h,g,null),f.uniforms.shadow_pass.value=E.mapPass.texture,f.uniforms.resolution.value=E.mapSize,f.uniforms.radius.value=E.radius,i.setRenderTarget(E.map),i.clear(),i.renderBufferDirect(C,null,D,f,g,null)}function w(E,C,D,S){let x=null;const P=D.isPointLight===!0?E.customDistanceMaterial:E.customDepthMaterial;if(P!==void 0)x=P;else if(x=D.isPointLight===!0?l:a,i.localClippingEnabled&&C.clipShadows===!0&&Array.isArray(C.clippingPlanes)&&C.clippingPlanes.length!==0||C.displacementMap&&C.displacementScale!==0||C.alphaMap&&C.alphaTest>0||C.map&&C.alphaTest>0){const F=x.uuid,O=C.uuid;let k=c[F];k===void 0&&(k={},c[F]=k);let L=k[O];L===void 0&&(L=x.clone(),k[O]=L,C.addEventListener("dispose",b)),x=L}if(x.visible=C.visible,x.wireframe=C.wireframe,S===hi?x.side=C.shadowSide!==null?C.shadowSide:C.side:x.side=C.shadowSide!==null?C.shadowSide:d[C.side],x.alphaMap=C.alphaMap,x.alphaTest=C.alphaTest,x.map=C.map,x.clipShadows=C.clipShadows,x.clippingPlanes=C.clippingPlanes,x.clipIntersection=C.clipIntersection,x.displacementMap=C.displacementMap,x.displacementScale=C.displacementScale,x.displacementBias=C.displacementBias,x.wireframeLinewidth=C.wireframeLinewidth,x.linewidth=C.linewidth,D.isPointLight===!0&&x.isMeshDistanceMaterial===!0){const F=i.properties.get(x);F.light=D}return x}function v(E,C,D,S,x){if(E.visible===!1)return;if(E.layers.test(C.layers)&&(E.isMesh||E.isLine||E.isPoints)&&(E.castShadow||E.receiveShadow&&x===hi)&&(!E.frustumCulled||n.intersectsObject(E))){E.modelViewMatrix.multiplyMatrices(D.matrixWorldInverse,E.matrixWorld);const O=e.update(E),k=E.material;if(Array.isArray(k)){const L=O.groups;for(let N=0,V=L.length;N<V;N++){const H=L[N],j=k[H.materialIndex];if(j&&j.visible){const $=w(E,j,S,x);E.onBeforeShadow(i,E,C,D,O,$,H),i.renderBufferDirect(D,null,O,$,E,H),E.onAfterShadow(i,E,C,D,O,$,H)}}}else if(k.visible){const L=w(E,k,S,x);E.onBeforeShadow(i,E,C,D,O,L,null),i.renderBufferDirect(D,null,O,L,E,null),E.onAfterShadow(i,E,C,D,O,L,null)}}const F=E.children;for(let O=0,k=F.length;O<k;O++)v(F[O],C,D,S,x)}function b(E){E.target.removeEventListener("dispose",b);for(const D in c){const S=c[D],x=E.target.uuid;x in S&&(S[x].dispose(),delete S[x])}}}const Ey={[jl]:$l,[Yl]:Jl,[Kl]:Ql,[ao]:Zl,[$l]:jl,[Jl]:Yl,[Ql]:Kl,[Zl]:ao};function by(i,e){function t(){let U=!1;const ce=new We;let q=null;const J=new We(0,0,0,0);return{setMask:function(pe){q!==pe&&!U&&(i.colorMask(pe,pe,pe,pe),q=pe)},setLocked:function(pe){U=pe},setClear:function(pe,fe,Ue,St,Wt){Wt===!0&&(pe*=St,fe*=St,Ue*=St),ce.set(pe,fe,Ue,St),J.equals(ce)===!1&&(i.clearColor(pe,fe,Ue,St),J.copy(ce))},reset:function(){U=!1,q=null,J.set(-1,0,0,0)}}}function n(){let U=!1,ce=!1,q=null,J=null,pe=null;return{setReversed:function(fe){if(ce!==fe){const Ue=e.get("EXT_clip_control");ce?Ue.clipControlEXT(Ue.LOWER_LEFT_EXT,Ue.ZERO_TO_ONE_EXT):Ue.clipControlEXT(Ue.LOWER_LEFT_EXT,Ue.NEGATIVE_ONE_TO_ONE_EXT);const St=pe;pe=null,this.setClear(St)}ce=fe},getReversed:function(){return ce},setTest:function(fe){fe?de(i.DEPTH_TEST):Pe(i.DEPTH_TEST)},setMask:function(fe){q!==fe&&!U&&(i.depthMask(fe),q=fe)},setFunc:function(fe){if(ce&&(fe=Ey[fe]),J!==fe){switch(fe){case jl:i.depthFunc(i.NEVER);break;case $l:i.depthFunc(i.ALWAYS);break;case Yl:i.depthFunc(i.LESS);break;case ao:i.depthFunc(i.LEQUAL);break;case Kl:i.depthFunc(i.EQUAL);break;case Zl:i.depthFunc(i.GEQUAL);break;case Jl:i.depthFunc(i.GREATER);break;case Ql:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}J=fe}},setLocked:function(fe){U=fe},setClear:function(fe){pe!==fe&&(ce&&(fe=1-fe),i.clearDepth(fe),pe=fe)},reset:function(){U=!1,q=null,J=null,pe=null,ce=!1}}}function s(){let U=!1,ce=null,q=null,J=null,pe=null,fe=null,Ue=null,St=null,Wt=null;return{setTest:function(rt){U||(rt?de(i.STENCIL_TEST):Pe(i.STENCIL_TEST))},setMask:function(rt){ce!==rt&&!U&&(i.stencilMask(rt),ce=rt)},setFunc:function(rt,Fn,si){(q!==rt||J!==Fn||pe!==si)&&(i.stencilFunc(rt,Fn,si),q=rt,J=Fn,pe=si)},setOp:function(rt,Fn,si){(fe!==rt||Ue!==Fn||St!==si)&&(i.stencilOp(rt,Fn,si),fe=rt,Ue=Fn,St=si)},setLocked:function(rt){U=rt},setClear:function(rt){Wt!==rt&&(i.clearStencil(rt),Wt=rt)},reset:function(){U=!1,ce=null,q=null,J=null,pe=null,fe=null,Ue=null,St=null,Wt=null}}}const o=new t,r=new n,a=new s,l=new WeakMap,c=new WeakMap;let u={},d={},h=new WeakMap,f=[],_=null,g=!1,m=null,p=null,y=null,w=null,v=null,b=null,E=null,C=new se(0,0,0),D=0,S=!1,x=null,P=null,F=null,O=null,k=null;const L=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let N=!1,V=0;const H=i.getParameter(i.VERSION);H.indexOf("WebGL")!==-1?(V=parseFloat(/^WebGL (\d)/.exec(H)[1]),N=V>=1):H.indexOf("OpenGL ES")!==-1&&(V=parseFloat(/^OpenGL ES (\d)/.exec(H)[1]),N=V>=2);let j=null,$={};const ae=i.getParameter(i.SCISSOR_BOX),ye=i.getParameter(i.VIEWPORT),He=new We().fromArray(ae),Y=new We().fromArray(ye);function ie(U,ce,q,J){const pe=new Uint8Array(4),fe=i.createTexture();i.bindTexture(U,fe),i.texParameteri(U,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(U,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let Ue=0;Ue<q;Ue++)U===i.TEXTURE_3D||U===i.TEXTURE_2D_ARRAY?i.texImage3D(ce,0,i.RGBA,1,1,J,0,i.RGBA,i.UNSIGNED_BYTE,pe):i.texImage2D(ce+Ue,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,pe);return fe}const Se={};Se[i.TEXTURE_2D]=ie(i.TEXTURE_2D,i.TEXTURE_2D,1),Se[i.TEXTURE_CUBE_MAP]=ie(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),Se[i.TEXTURE_2D_ARRAY]=ie(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),Se[i.TEXTURE_3D]=ie(i.TEXTURE_3D,i.TEXTURE_3D,1,1),o.setClear(0,0,0,1),r.setClear(1),a.setClear(0),de(i.DEPTH_TEST),r.setFunc(ao),$e(!1),Ye(Pu),de(i.CULL_FACE),I($n);function de(U){u[U]!==!0&&(i.enable(U),u[U]=!0)}function Pe(U){u[U]!==!1&&(i.disable(U),u[U]=!1)}function Ne(U,ce){return d[U]!==ce?(i.bindFramebuffer(U,ce),d[U]=ce,U===i.DRAW_FRAMEBUFFER&&(d[i.FRAMEBUFFER]=ce),U===i.FRAMEBUFFER&&(d[i.DRAW_FRAMEBUFFER]=ce),!0):!1}function Ge(U,ce){let q=f,J=!1;if(U){q=h.get(ce),q===void 0&&(q=[],h.set(ce,q));const pe=U.textures;if(q.length!==pe.length||q[0]!==i.COLOR_ATTACHMENT0){for(let fe=0,Ue=pe.length;fe<Ue;fe++)q[fe]=i.COLOR_ATTACHMENT0+fe;q.length=pe.length,J=!0}}else q[0]!==i.BACK&&(q[0]=i.BACK,J=!0);J&&i.drawBuffers(q)}function yt(U){return _!==U?(i.useProgram(U),_=U,!0):!1}const Je={[ls]:i.FUNC_ADD,[Up]:i.FUNC_SUBTRACT,[Fp]:i.FUNC_REVERSE_SUBTRACT};Je[Bp]=i.MIN,Je[zp]=i.MAX;const Tt={[kp]:i.ZERO,[Hp]:i.ONE,[Gp]:i.SRC_COLOR,[Xl]:i.SRC_ALPHA,[$p]:i.SRC_ALPHA_SATURATE,[qp]:i.DST_COLOR,[Wp]:i.DST_ALPHA,[Vp]:i.ONE_MINUS_SRC_COLOR,[ql]:i.ONE_MINUS_SRC_ALPHA,[jp]:i.ONE_MINUS_DST_COLOR,[Xp]:i.ONE_MINUS_DST_ALPHA,[Yp]:i.CONSTANT_COLOR,[Kp]:i.ONE_MINUS_CONSTANT_COLOR,[Zp]:i.CONSTANT_ALPHA,[Jp]:i.ONE_MINUS_CONSTANT_ALPHA};function I(U,ce,q,J,pe,fe,Ue,St,Wt,rt){if(U===$n){g===!0&&(Pe(i.BLEND),g=!1);return}if(g===!1&&(de(i.BLEND),g=!0),U!==Np){if(U!==m||rt!==S){if((p!==ls||v!==ls)&&(i.blendEquation(i.FUNC_ADD),p=ls,v=ls),rt)switch(U){case Zs:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Wl:i.blendFunc(i.ONE,i.ONE);break;case Du:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case Lu:i.blendFuncSeparate(i.ZERO,i.SRC_COLOR,i.ZERO,i.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",U);break}else switch(U){case Zs:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Wl:i.blendFunc(i.SRC_ALPHA,i.ONE);break;case Du:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case Lu:i.blendFunc(i.ZERO,i.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",U);break}y=null,w=null,b=null,E=null,C.set(0,0,0),D=0,m=U,S=rt}return}pe=pe||ce,fe=fe||q,Ue=Ue||J,(ce!==p||pe!==v)&&(i.blendEquationSeparate(Je[ce],Je[pe]),p=ce,v=pe),(q!==y||J!==w||fe!==b||Ue!==E)&&(i.blendFuncSeparate(Tt[q],Tt[J],Tt[fe],Tt[Ue]),y=q,w=J,b=fe,E=Ue),(St.equals(C)===!1||Wt!==D)&&(i.blendColor(St.r,St.g,St.b,Wt),C.copy(St),D=Wt),m=U,S=!1}function bn(U,ce){U.side===pn?Pe(i.CULL_FACE):de(i.CULL_FACE);let q=U.side===gn;ce&&(q=!q),$e(q),U.blending===Zs&&U.transparent===!1?I($n):I(U.blending,U.blendEquation,U.blendSrc,U.blendDst,U.blendEquationAlpha,U.blendSrcAlpha,U.blendDstAlpha,U.blendColor,U.blendAlpha,U.premultipliedAlpha),r.setFunc(U.depthFunc),r.setTest(U.depthTest),r.setMask(U.depthWrite),o.setMask(U.colorWrite);const J=U.stencilWrite;a.setTest(J),J&&(a.setMask(U.stencilWriteMask),a.setFunc(U.stencilFunc,U.stencilRef,U.stencilFuncMask),a.setOp(U.stencilFail,U.stencilZFail,U.stencilZPass)),gt(U.polygonOffset,U.polygonOffsetFactor,U.polygonOffsetUnits),U.alphaToCoverage===!0?de(i.SAMPLE_ALPHA_TO_COVERAGE):Pe(i.SAMPLE_ALPHA_TO_COVERAGE)}function $e(U){x!==U&&(U?i.frontFace(i.CW):i.frontFace(i.CCW),x=U)}function Ye(U){U!==Lp?(de(i.CULL_FACE),U!==P&&(U===Pu?i.cullFace(i.BACK):U===Ip?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):Pe(i.CULL_FACE),P=U}function Ee(U){U!==F&&(N&&i.lineWidth(U),F=U)}function gt(U,ce,q){U?(de(i.POLYGON_OFFSET_FILL),(O!==ce||k!==q)&&(i.polygonOffset(ce,q),O=ce,k=q)):Pe(i.POLYGON_OFFSET_FILL)}function be(U){U?de(i.SCISSOR_TEST):Pe(i.SCISSOR_TEST)}function R(U){U===void 0&&(U=i.TEXTURE0+L-1),j!==U&&(i.activeTexture(U),j=U)}function M(U,ce,q){q===void 0&&(j===null?q=i.TEXTURE0+L-1:q=j);let J=$[q];J===void 0&&(J={type:void 0,texture:void 0},$[q]=J),(J.type!==U||J.texture!==ce)&&(j!==q&&(i.activeTexture(q),j=q),i.bindTexture(U,ce||Se[U]),J.type=U,J.texture=ce)}function G(){const U=$[j];U!==void 0&&U.type!==void 0&&(i.bindTexture(U.type,null),U.type=void 0,U.texture=void 0)}function Z(){try{i.compressedTexImage2D.apply(i,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function Q(){try{i.compressedTexImage3D.apply(i,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function K(){try{i.texSubImage2D.apply(i,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function Me(){try{i.texSubImage3D.apply(i,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function he(){try{i.compressedTexSubImage2D.apply(i,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function _e(){try{i.compressedTexSubImage3D.apply(i,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function Qe(){try{i.texStorage2D.apply(i,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function ne(){try{i.texStorage3D.apply(i,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function ve(){try{i.texImage2D.apply(i,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function Re(){try{i.texImage3D.apply(i,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function Le(U){He.equals(U)===!1&&(i.scissor(U.x,U.y,U.z,U.w),He.copy(U))}function xe(U){Y.equals(U)===!1&&(i.viewport(U.x,U.y,U.z,U.w),Y.copy(U))}function Ke(U,ce){let q=c.get(ce);q===void 0&&(q=new WeakMap,c.set(ce,q));let J=q.get(U);J===void 0&&(J=i.getUniformBlockIndex(ce,U.name),q.set(U,J))}function Be(U,ce){const J=c.get(ce).get(U);l.get(ce)!==J&&(i.uniformBlockBinding(ce,J,U.__bindingPointIndex),l.set(ce,J))}function ft(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),r.setReversed(!1),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),u={},j=null,$={},d={},h=new WeakMap,f=[],_=null,g=!1,m=null,p=null,y=null,w=null,v=null,b=null,E=null,C=new se(0,0,0),D=0,S=!1,x=null,P=null,F=null,O=null,k=null,He.set(0,0,i.canvas.width,i.canvas.height),Y.set(0,0,i.canvas.width,i.canvas.height),o.reset(),r.reset(),a.reset()}return{buffers:{color:o,depth:r,stencil:a},enable:de,disable:Pe,bindFramebuffer:Ne,drawBuffers:Ge,useProgram:yt,setBlending:I,setMaterial:bn,setFlipSided:$e,setCullFace:Ye,setLineWidth:Ee,setPolygonOffset:gt,setScissorTest:be,activeTexture:R,bindTexture:M,unbindTexture:G,compressedTexImage2D:Z,compressedTexImage3D:Q,texImage2D:ve,texImage3D:Re,updateUBOMapping:Ke,uniformBlockBinding:Be,texStorage2D:Qe,texStorage3D:ne,texSubImage2D:K,texSubImage3D:Me,compressedTexSubImage2D:he,compressedTexSubImage3D:_e,scissor:Le,viewport:xe,reset:ft}}function Ty(i,e,t,n,s,o,r){const a=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new me,u=new WeakMap;let d;const h=new WeakMap;let f=!1;try{f=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function _(R,M){return f?new OffscreenCanvas(R,M):or("canvas")}function g(R,M,G){let Z=1;const Q=be(R);if((Q.width>G||Q.height>G)&&(Z=G/Math.max(Q.width,Q.height)),Z<1)if(typeof HTMLImageElement<"u"&&R instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&R instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&R instanceof ImageBitmap||typeof VideoFrame<"u"&&R instanceof VideoFrame){const K=Math.floor(Z*Q.width),Me=Math.floor(Z*Q.height);d===void 0&&(d=_(K,Me));const he=M?_(K,Me):d;return he.width=K,he.height=Me,he.getContext("2d").drawImage(R,0,0,K,Me),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+Q.width+"x"+Q.height+") to ("+K+"x"+Me+")."),he}else return"data"in R&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+Q.width+"x"+Q.height+")."),R;return R}function m(R){return R.generateMipmaps}function p(R){i.generateMipmap(R)}function y(R){return R.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:R.isWebGL3DRenderTarget?i.TEXTURE_3D:R.isWebGLArrayRenderTarget||R.isCompressedArrayTexture?i.TEXTURE_2D_ARRAY:i.TEXTURE_2D}function w(R,M,G,Z,Q=!1){if(R!==null){if(i[R]!==void 0)return i[R];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+R+"'")}let K=M;if(M===i.RED&&(G===i.FLOAT&&(K=i.R32F),G===i.HALF_FLOAT&&(K=i.R16F),G===i.UNSIGNED_BYTE&&(K=i.R8)),M===i.RED_INTEGER&&(G===i.UNSIGNED_BYTE&&(K=i.R8UI),G===i.UNSIGNED_SHORT&&(K=i.R16UI),G===i.UNSIGNED_INT&&(K=i.R32UI),G===i.BYTE&&(K=i.R8I),G===i.SHORT&&(K=i.R16I),G===i.INT&&(K=i.R32I)),M===i.RG&&(G===i.FLOAT&&(K=i.RG32F),G===i.HALF_FLOAT&&(K=i.RG16F),G===i.UNSIGNED_BYTE&&(K=i.RG8)),M===i.RG_INTEGER&&(G===i.UNSIGNED_BYTE&&(K=i.RG8UI),G===i.UNSIGNED_SHORT&&(K=i.RG16UI),G===i.UNSIGNED_INT&&(K=i.RG32UI),G===i.BYTE&&(K=i.RG8I),G===i.SHORT&&(K=i.RG16I),G===i.INT&&(K=i.RG32I)),M===i.RGB_INTEGER&&(G===i.UNSIGNED_BYTE&&(K=i.RGB8UI),G===i.UNSIGNED_SHORT&&(K=i.RGB16UI),G===i.UNSIGNED_INT&&(K=i.RGB32UI),G===i.BYTE&&(K=i.RGB8I),G===i.SHORT&&(K=i.RGB16I),G===i.INT&&(K=i.RGB32I)),M===i.RGBA_INTEGER&&(G===i.UNSIGNED_BYTE&&(K=i.RGBA8UI),G===i.UNSIGNED_SHORT&&(K=i.RGBA16UI),G===i.UNSIGNED_INT&&(K=i.RGBA32UI),G===i.BYTE&&(K=i.RGBA8I),G===i.SHORT&&(K=i.RGBA16I),G===i.INT&&(K=i.RGBA32I)),M===i.RGB&&G===i.UNSIGNED_INT_5_9_9_9_REV&&(K=i.RGB9_E5),M===i.RGBA){const Me=Q?Sa:Ze.getTransfer(Z);G===i.FLOAT&&(K=i.RGBA32F),G===i.HALF_FLOAT&&(K=i.RGBA16F),G===i.UNSIGNED_BYTE&&(K=Me===ut?i.SRGB8_ALPHA8:i.RGBA8),G===i.UNSIGNED_SHORT_4_4_4_4&&(K=i.RGBA4),G===i.UNSIGNED_SHORT_5_5_5_1&&(K=i.RGB5_A1)}return(K===i.R16F||K===i.R32F||K===i.RG16F||K===i.RG32F||K===i.RGBA16F||K===i.RGBA32F)&&e.get("EXT_color_buffer_float"),K}function v(R,M){let G;return R?M===null||M===_s||M===ho?G=i.DEPTH24_STENCIL8:M===qn?G=i.DEPTH32F_STENCIL8:M===nr&&(G=i.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):M===null||M===_s||M===ho?G=i.DEPTH_COMPONENT24:M===qn?G=i.DEPTH_COMPONENT32F:M===nr&&(G=i.DEPTH_COMPONENT16),G}function b(R,M){return m(R)===!0||R.isFramebufferTexture&&R.minFilter!==an&&R.minFilter!==Sn?Math.log2(Math.max(M.width,M.height))+1:R.mipmaps!==void 0&&R.mipmaps.length>0?R.mipmaps.length:R.isCompressedTexture&&Array.isArray(R.image)?M.mipmaps.length:1}function E(R){const M=R.target;M.removeEventListener("dispose",E),D(M),M.isVideoTexture&&u.delete(M)}function C(R){const M=R.target;M.removeEventListener("dispose",C),x(M)}function D(R){const M=n.get(R);if(M.__webglInit===void 0)return;const G=R.source,Z=h.get(G);if(Z){const Q=Z[M.__cacheKey];Q.usedTimes--,Q.usedTimes===0&&S(R),Object.keys(Z).length===0&&h.delete(G)}n.remove(R)}function S(R){const M=n.get(R);i.deleteTexture(M.__webglTexture);const G=R.source,Z=h.get(G);delete Z[M.__cacheKey],r.memory.textures--}function x(R){const M=n.get(R);if(R.depthTexture&&(R.depthTexture.dispose(),n.remove(R.depthTexture)),R.isWebGLCubeRenderTarget)for(let Z=0;Z<6;Z++){if(Array.isArray(M.__webglFramebuffer[Z]))for(let Q=0;Q<M.__webglFramebuffer[Z].length;Q++)i.deleteFramebuffer(M.__webglFramebuffer[Z][Q]);else i.deleteFramebuffer(M.__webglFramebuffer[Z]);M.__webglDepthbuffer&&i.deleteRenderbuffer(M.__webglDepthbuffer[Z])}else{if(Array.isArray(M.__webglFramebuffer))for(let Z=0;Z<M.__webglFramebuffer.length;Z++)i.deleteFramebuffer(M.__webglFramebuffer[Z]);else i.deleteFramebuffer(M.__webglFramebuffer);if(M.__webglDepthbuffer&&i.deleteRenderbuffer(M.__webglDepthbuffer),M.__webglMultisampledFramebuffer&&i.deleteFramebuffer(M.__webglMultisampledFramebuffer),M.__webglColorRenderbuffer)for(let Z=0;Z<M.__webglColorRenderbuffer.length;Z++)M.__webglColorRenderbuffer[Z]&&i.deleteRenderbuffer(M.__webglColorRenderbuffer[Z]);M.__webglDepthRenderbuffer&&i.deleteRenderbuffer(M.__webglDepthRenderbuffer)}const G=R.textures;for(let Z=0,Q=G.length;Z<Q;Z++){const K=n.get(G[Z]);K.__webglTexture&&(i.deleteTexture(K.__webglTexture),r.memory.textures--),n.remove(G[Z])}n.remove(R)}let P=0;function F(){P=0}function O(){const R=P;return R>=s.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+R+" texture units while this GPU supports only "+s.maxTextures),P+=1,R}function k(R){const M=[];return M.push(R.wrapS),M.push(R.wrapT),M.push(R.wrapR||0),M.push(R.magFilter),M.push(R.minFilter),M.push(R.anisotropy),M.push(R.internalFormat),M.push(R.format),M.push(R.type),M.push(R.generateMipmaps),M.push(R.premultiplyAlpha),M.push(R.flipY),M.push(R.unpackAlignment),M.push(R.colorSpace),M.join()}function L(R,M){const G=n.get(R);if(R.isVideoTexture&&Ee(R),R.isRenderTargetTexture===!1&&R.version>0&&G.__version!==R.version){const Z=R.image;if(Z===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(Z.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{Y(G,R,M);return}}t.bindTexture(i.TEXTURE_2D,G.__webglTexture,i.TEXTURE0+M)}function N(R,M){const G=n.get(R);if(R.version>0&&G.__version!==R.version){Y(G,R,M);return}t.bindTexture(i.TEXTURE_2D_ARRAY,G.__webglTexture,i.TEXTURE0+M)}function V(R,M){const G=n.get(R);if(R.version>0&&G.__version!==R.version){Y(G,R,M);return}t.bindTexture(i.TEXTURE_3D,G.__webglTexture,i.TEXTURE0+M)}function H(R,M){const G=n.get(R);if(R.version>0&&G.__version!==R.version){ie(G,R,M);return}t.bindTexture(i.TEXTURE_CUBE_MAP,G.__webglTexture,i.TEXTURE0+M)}const j={[uo]:i.REPEAT,[Fi]:i.CLAMP_TO_EDGE,[wa]:i.MIRRORED_REPEAT},$={[an]:i.NEAREST,[Wh]:i.NEAREST_MIPMAP_NEAREST,[Go]:i.NEAREST_MIPMAP_LINEAR,[Sn]:i.LINEAR,[ca]:i.LINEAR_MIPMAP_NEAREST,[mi]:i.LINEAR_MIPMAP_LINEAR},ae={[fm]:i.NEVER,[xm]:i.ALWAYS,[pm]:i.LESS,[nf]:i.LEQUAL,[mm]:i.EQUAL,[vm]:i.GEQUAL,[gm]:i.GREATER,[_m]:i.NOTEQUAL};function ye(R,M){if(M.type===qn&&e.has("OES_texture_float_linear")===!1&&(M.magFilter===Sn||M.magFilter===ca||M.magFilter===Go||M.magFilter===mi||M.minFilter===Sn||M.minFilter===ca||M.minFilter===Go||M.minFilter===mi)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(R,i.TEXTURE_WRAP_S,j[M.wrapS]),i.texParameteri(R,i.TEXTURE_WRAP_T,j[M.wrapT]),(R===i.TEXTURE_3D||R===i.TEXTURE_2D_ARRAY)&&i.texParameteri(R,i.TEXTURE_WRAP_R,j[M.wrapR]),i.texParameteri(R,i.TEXTURE_MAG_FILTER,$[M.magFilter]),i.texParameteri(R,i.TEXTURE_MIN_FILTER,$[M.minFilter]),M.compareFunction&&(i.texParameteri(R,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(R,i.TEXTURE_COMPARE_FUNC,ae[M.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(M.magFilter===an||M.minFilter!==Go&&M.minFilter!==mi||M.type===qn&&e.has("OES_texture_float_linear")===!1)return;if(M.anisotropy>1||n.get(M).__currentAnisotropy){const G=e.get("EXT_texture_filter_anisotropic");i.texParameterf(R,G.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(M.anisotropy,s.getMaxAnisotropy())),n.get(M).__currentAnisotropy=M.anisotropy}}}function He(R,M){let G=!1;R.__webglInit===void 0&&(R.__webglInit=!0,M.addEventListener("dispose",E));const Z=M.source;let Q=h.get(Z);Q===void 0&&(Q={},h.set(Z,Q));const K=k(M);if(K!==R.__cacheKey){Q[K]===void 0&&(Q[K]={texture:i.createTexture(),usedTimes:0},r.memory.textures++,G=!0),Q[K].usedTimes++;const Me=Q[R.__cacheKey];Me!==void 0&&(Q[R.__cacheKey].usedTimes--,Me.usedTimes===0&&S(M)),R.__cacheKey=K,R.__webglTexture=Q[K].texture}return G}function Y(R,M,G){let Z=i.TEXTURE_2D;(M.isDataArrayTexture||M.isCompressedArrayTexture)&&(Z=i.TEXTURE_2D_ARRAY),M.isData3DTexture&&(Z=i.TEXTURE_3D);const Q=He(R,M),K=M.source;t.bindTexture(Z,R.__webglTexture,i.TEXTURE0+G);const Me=n.get(K);if(K.version!==Me.__version||Q===!0){t.activeTexture(i.TEXTURE0+G);const he=Ze.getPrimaries(Ze.workingColorSpace),_e=M.colorSpace===Ni?null:Ze.getPrimaries(M.colorSpace),Qe=M.colorSpace===Ni||he===_e?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,M.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,M.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,M.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,Qe);let ne=g(M.image,!1,s.maxTextureSize);ne=gt(M,ne);const ve=o.convert(M.format,M.colorSpace),Re=o.convert(M.type);let Le=w(M.internalFormat,ve,Re,M.colorSpace,M.isVideoTexture);ye(Z,M);let xe;const Ke=M.mipmaps,Be=M.isVideoTexture!==!0,ft=Me.__version===void 0||Q===!0,U=K.dataReady,ce=b(M,ne);if(M.isDepthTexture)Le=v(M.format===fo,M.type),ft&&(Be?t.texStorage2D(i.TEXTURE_2D,1,Le,ne.width,ne.height):t.texImage2D(i.TEXTURE_2D,0,Le,ne.width,ne.height,0,ve,Re,null));else if(M.isDataTexture)if(Ke.length>0){Be&&ft&&t.texStorage2D(i.TEXTURE_2D,ce,Le,Ke[0].width,Ke[0].height);for(let q=0,J=Ke.length;q<J;q++)xe=Ke[q],Be?U&&t.texSubImage2D(i.TEXTURE_2D,q,0,0,xe.width,xe.height,ve,Re,xe.data):t.texImage2D(i.TEXTURE_2D,q,Le,xe.width,xe.height,0,ve,Re,xe.data);M.generateMipmaps=!1}else Be?(ft&&t.texStorage2D(i.TEXTURE_2D,ce,Le,ne.width,ne.height),U&&t.texSubImage2D(i.TEXTURE_2D,0,0,0,ne.width,ne.height,ve,Re,ne.data)):t.texImage2D(i.TEXTURE_2D,0,Le,ne.width,ne.height,0,ve,Re,ne.data);else if(M.isCompressedTexture)if(M.isCompressedArrayTexture){Be&&ft&&t.texStorage3D(i.TEXTURE_2D_ARRAY,ce,Le,Ke[0].width,Ke[0].height,ne.depth);for(let q=0,J=Ke.length;q<J;q++)if(xe=Ke[q],M.format!==Ln)if(ve!==null)if(Be){if(U)if(M.layerUpdates.size>0){const pe=Ad(xe.width,xe.height,M.format,M.type);for(const fe of M.layerUpdates){const Ue=xe.data.subarray(fe*pe/xe.data.BYTES_PER_ELEMENT,(fe+1)*pe/xe.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,q,0,0,fe,xe.width,xe.height,1,ve,Ue)}M.clearLayerUpdates()}else t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,q,0,0,0,xe.width,xe.height,ne.depth,ve,xe.data)}else t.compressedTexImage3D(i.TEXTURE_2D_ARRAY,q,Le,xe.width,xe.height,ne.depth,0,xe.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Be?U&&t.texSubImage3D(i.TEXTURE_2D_ARRAY,q,0,0,0,xe.width,xe.height,ne.depth,ve,Re,xe.data):t.texImage3D(i.TEXTURE_2D_ARRAY,q,Le,xe.width,xe.height,ne.depth,0,ve,Re,xe.data)}else{Be&&ft&&t.texStorage2D(i.TEXTURE_2D,ce,Le,Ke[0].width,Ke[0].height);for(let q=0,J=Ke.length;q<J;q++)xe=Ke[q],M.format!==Ln?ve!==null?Be?U&&t.compressedTexSubImage2D(i.TEXTURE_2D,q,0,0,xe.width,xe.height,ve,xe.data):t.compressedTexImage2D(i.TEXTURE_2D,q,Le,xe.width,xe.height,0,xe.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Be?U&&t.texSubImage2D(i.TEXTURE_2D,q,0,0,xe.width,xe.height,ve,Re,xe.data):t.texImage2D(i.TEXTURE_2D,q,Le,xe.width,xe.height,0,ve,Re,xe.data)}else if(M.isDataArrayTexture)if(Be){if(ft&&t.texStorage3D(i.TEXTURE_2D_ARRAY,ce,Le,ne.width,ne.height,ne.depth),U)if(M.layerUpdates.size>0){const q=Ad(ne.width,ne.height,M.format,M.type);for(const J of M.layerUpdates){const pe=ne.data.subarray(J*q/ne.data.BYTES_PER_ELEMENT,(J+1)*q/ne.data.BYTES_PER_ELEMENT);t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,J,ne.width,ne.height,1,ve,Re,pe)}M.clearLayerUpdates()}else t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,ne.width,ne.height,ne.depth,ve,Re,ne.data)}else t.texImage3D(i.TEXTURE_2D_ARRAY,0,Le,ne.width,ne.height,ne.depth,0,ve,Re,ne.data);else if(M.isData3DTexture)Be?(ft&&t.texStorage3D(i.TEXTURE_3D,ce,Le,ne.width,ne.height,ne.depth),U&&t.texSubImage3D(i.TEXTURE_3D,0,0,0,0,ne.width,ne.height,ne.depth,ve,Re,ne.data)):t.texImage3D(i.TEXTURE_3D,0,Le,ne.width,ne.height,ne.depth,0,ve,Re,ne.data);else if(M.isFramebufferTexture){if(ft)if(Be)t.texStorage2D(i.TEXTURE_2D,ce,Le,ne.width,ne.height);else{let q=ne.width,J=ne.height;for(let pe=0;pe<ce;pe++)t.texImage2D(i.TEXTURE_2D,pe,Le,q,J,0,ve,Re,null),q>>=1,J>>=1}}else if(Ke.length>0){if(Be&&ft){const q=be(Ke[0]);t.texStorage2D(i.TEXTURE_2D,ce,Le,q.width,q.height)}for(let q=0,J=Ke.length;q<J;q++)xe=Ke[q],Be?U&&t.texSubImage2D(i.TEXTURE_2D,q,0,0,ve,Re,xe):t.texImage2D(i.TEXTURE_2D,q,Le,ve,Re,xe);M.generateMipmaps=!1}else if(Be){if(ft){const q=be(ne);t.texStorage2D(i.TEXTURE_2D,ce,Le,q.width,q.height)}U&&t.texSubImage2D(i.TEXTURE_2D,0,0,0,ve,Re,ne)}else t.texImage2D(i.TEXTURE_2D,0,Le,ve,Re,ne);m(M)&&p(Z),Me.__version=K.version,M.onUpdate&&M.onUpdate(M)}R.__version=M.version}function ie(R,M,G){if(M.image.length!==6)return;const Z=He(R,M),Q=M.source;t.bindTexture(i.TEXTURE_CUBE_MAP,R.__webglTexture,i.TEXTURE0+G);const K=n.get(Q);if(Q.version!==K.__version||Z===!0){t.activeTexture(i.TEXTURE0+G);const Me=Ze.getPrimaries(Ze.workingColorSpace),he=M.colorSpace===Ni?null:Ze.getPrimaries(M.colorSpace),_e=M.colorSpace===Ni||Me===he?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,M.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,M.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,M.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,_e);const Qe=M.isCompressedTexture||M.image[0].isCompressedTexture,ne=M.image[0]&&M.image[0].isDataTexture,ve=[];for(let J=0;J<6;J++)!Qe&&!ne?ve[J]=g(M.image[J],!0,s.maxCubemapSize):ve[J]=ne?M.image[J].image:M.image[J],ve[J]=gt(M,ve[J]);const Re=ve[0],Le=o.convert(M.format,M.colorSpace),xe=o.convert(M.type),Ke=w(M.internalFormat,Le,xe,M.colorSpace),Be=M.isVideoTexture!==!0,ft=K.__version===void 0||Z===!0,U=Q.dataReady;let ce=b(M,Re);ye(i.TEXTURE_CUBE_MAP,M);let q;if(Qe){Be&&ft&&t.texStorage2D(i.TEXTURE_CUBE_MAP,ce,Ke,Re.width,Re.height);for(let J=0;J<6;J++){q=ve[J].mipmaps;for(let pe=0;pe<q.length;pe++){const fe=q[pe];M.format!==Ln?Le!==null?Be?U&&t.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+J,pe,0,0,fe.width,fe.height,Le,fe.data):t.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+J,pe,Ke,fe.width,fe.height,0,fe.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Be?U&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+J,pe,0,0,fe.width,fe.height,Le,xe,fe.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+J,pe,Ke,fe.width,fe.height,0,Le,xe,fe.data)}}}else{if(q=M.mipmaps,Be&&ft){q.length>0&&ce++;const J=be(ve[0]);t.texStorage2D(i.TEXTURE_CUBE_MAP,ce,Ke,J.width,J.height)}for(let J=0;J<6;J++)if(ne){Be?U&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+J,0,0,0,ve[J].width,ve[J].height,Le,xe,ve[J].data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+J,0,Ke,ve[J].width,ve[J].height,0,Le,xe,ve[J].data);for(let pe=0;pe<q.length;pe++){const Ue=q[pe].image[J].image;Be?U&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+J,pe+1,0,0,Ue.width,Ue.height,Le,xe,Ue.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+J,pe+1,Ke,Ue.width,Ue.height,0,Le,xe,Ue.data)}}else{Be?U&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+J,0,0,0,Le,xe,ve[J]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+J,0,Ke,Le,xe,ve[J]);for(let pe=0;pe<q.length;pe++){const fe=q[pe];Be?U&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+J,pe+1,0,0,Le,xe,fe.image[J]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+J,pe+1,Ke,Le,xe,fe.image[J])}}}m(M)&&p(i.TEXTURE_CUBE_MAP),K.__version=Q.version,M.onUpdate&&M.onUpdate(M)}R.__version=M.version}function Se(R,M,G,Z,Q,K){const Me=o.convert(G.format,G.colorSpace),he=o.convert(G.type),_e=w(G.internalFormat,Me,he,G.colorSpace),Qe=n.get(M),ne=n.get(G);if(ne.__renderTarget=M,!Qe.__hasExternalTextures){const ve=Math.max(1,M.width>>K),Re=Math.max(1,M.height>>K);Q===i.TEXTURE_3D||Q===i.TEXTURE_2D_ARRAY?t.texImage3D(Q,K,_e,ve,Re,M.depth,0,Me,he,null):t.texImage2D(Q,K,_e,ve,Re,0,Me,he,null)}t.bindFramebuffer(i.FRAMEBUFFER,R),Ye(M)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,Z,Q,ne.__webglTexture,0,$e(M)):(Q===i.TEXTURE_2D||Q>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&Q<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,Z,Q,ne.__webglTexture,K),t.bindFramebuffer(i.FRAMEBUFFER,null)}function de(R,M,G){if(i.bindRenderbuffer(i.RENDERBUFFER,R),M.depthBuffer){const Z=M.depthTexture,Q=Z&&Z.isDepthTexture?Z.type:null,K=v(M.stencilBuffer,Q),Me=M.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,he=$e(M);Ye(M)?a.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,he,K,M.width,M.height):G?i.renderbufferStorageMultisample(i.RENDERBUFFER,he,K,M.width,M.height):i.renderbufferStorage(i.RENDERBUFFER,K,M.width,M.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,Me,i.RENDERBUFFER,R)}else{const Z=M.textures;for(let Q=0;Q<Z.length;Q++){const K=Z[Q],Me=o.convert(K.format,K.colorSpace),he=o.convert(K.type),_e=w(K.internalFormat,Me,he,K.colorSpace),Qe=$e(M);G&&Ye(M)===!1?i.renderbufferStorageMultisample(i.RENDERBUFFER,Qe,_e,M.width,M.height):Ye(M)?a.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,Qe,_e,M.width,M.height):i.renderbufferStorage(i.RENDERBUFFER,_e,M.width,M.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function Pe(R,M){if(M&&M.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(i.FRAMEBUFFER,R),!(M.depthTexture&&M.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const Z=n.get(M.depthTexture);Z.__renderTarget=M,(!Z.__webglTexture||M.depthTexture.image.width!==M.width||M.depthTexture.image.height!==M.height)&&(M.depthTexture.image.width=M.width,M.depthTexture.image.height=M.height,M.depthTexture.needsUpdate=!0),L(M.depthTexture,0);const Q=Z.__webglTexture,K=$e(M);if(M.depthTexture.format===Js)Ye(M)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,Q,0,K):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,Q,0);else if(M.depthTexture.format===fo)Ye(M)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,Q,0,K):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,Q,0);else throw new Error("Unknown depthTexture format")}function Ne(R){const M=n.get(R),G=R.isWebGLCubeRenderTarget===!0;if(M.__boundDepthTexture!==R.depthTexture){const Z=R.depthTexture;if(M.__depthDisposeCallback&&M.__depthDisposeCallback(),Z){const Q=()=>{delete M.__boundDepthTexture,delete M.__depthDisposeCallback,Z.removeEventListener("dispose",Q)};Z.addEventListener("dispose",Q),M.__depthDisposeCallback=Q}M.__boundDepthTexture=Z}if(R.depthTexture&&!M.__autoAllocateDepthBuffer){if(G)throw new Error("target.depthTexture not supported in Cube render targets");Pe(M.__webglFramebuffer,R)}else if(G){M.__webglDepthbuffer=[];for(let Z=0;Z<6;Z++)if(t.bindFramebuffer(i.FRAMEBUFFER,M.__webglFramebuffer[Z]),M.__webglDepthbuffer[Z]===void 0)M.__webglDepthbuffer[Z]=i.createRenderbuffer(),de(M.__webglDepthbuffer[Z],R,!1);else{const Q=R.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,K=M.__webglDepthbuffer[Z];i.bindRenderbuffer(i.RENDERBUFFER,K),i.framebufferRenderbuffer(i.FRAMEBUFFER,Q,i.RENDERBUFFER,K)}}else if(t.bindFramebuffer(i.FRAMEBUFFER,M.__webglFramebuffer),M.__webglDepthbuffer===void 0)M.__webglDepthbuffer=i.createRenderbuffer(),de(M.__webglDepthbuffer,R,!1);else{const Z=R.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,Q=M.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,Q),i.framebufferRenderbuffer(i.FRAMEBUFFER,Z,i.RENDERBUFFER,Q)}t.bindFramebuffer(i.FRAMEBUFFER,null)}function Ge(R,M,G){const Z=n.get(R);M!==void 0&&Se(Z.__webglFramebuffer,R,R.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),G!==void 0&&Ne(R)}function yt(R){const M=R.texture,G=n.get(R),Z=n.get(M);R.addEventListener("dispose",C);const Q=R.textures,K=R.isWebGLCubeRenderTarget===!0,Me=Q.length>1;if(Me||(Z.__webglTexture===void 0&&(Z.__webglTexture=i.createTexture()),Z.__version=M.version,r.memory.textures++),K){G.__webglFramebuffer=[];for(let he=0;he<6;he++)if(M.mipmaps&&M.mipmaps.length>0){G.__webglFramebuffer[he]=[];for(let _e=0;_e<M.mipmaps.length;_e++)G.__webglFramebuffer[he][_e]=i.createFramebuffer()}else G.__webglFramebuffer[he]=i.createFramebuffer()}else{if(M.mipmaps&&M.mipmaps.length>0){G.__webglFramebuffer=[];for(let he=0;he<M.mipmaps.length;he++)G.__webglFramebuffer[he]=i.createFramebuffer()}else G.__webglFramebuffer=i.createFramebuffer();if(Me)for(let he=0,_e=Q.length;he<_e;he++){const Qe=n.get(Q[he]);Qe.__webglTexture===void 0&&(Qe.__webglTexture=i.createTexture(),r.memory.textures++)}if(R.samples>0&&Ye(R)===!1){G.__webglMultisampledFramebuffer=i.createFramebuffer(),G.__webglColorRenderbuffer=[],t.bindFramebuffer(i.FRAMEBUFFER,G.__webglMultisampledFramebuffer);for(let he=0;he<Q.length;he++){const _e=Q[he];G.__webglColorRenderbuffer[he]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,G.__webglColorRenderbuffer[he]);const Qe=o.convert(_e.format,_e.colorSpace),ne=o.convert(_e.type),ve=w(_e.internalFormat,Qe,ne,_e.colorSpace,R.isXRRenderTarget===!0),Re=$e(R);i.renderbufferStorageMultisample(i.RENDERBUFFER,Re,ve,R.width,R.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+he,i.RENDERBUFFER,G.__webglColorRenderbuffer[he])}i.bindRenderbuffer(i.RENDERBUFFER,null),R.depthBuffer&&(G.__webglDepthRenderbuffer=i.createRenderbuffer(),de(G.__webglDepthRenderbuffer,R,!0)),t.bindFramebuffer(i.FRAMEBUFFER,null)}}if(K){t.bindTexture(i.TEXTURE_CUBE_MAP,Z.__webglTexture),ye(i.TEXTURE_CUBE_MAP,M);for(let he=0;he<6;he++)if(M.mipmaps&&M.mipmaps.length>0)for(let _e=0;_e<M.mipmaps.length;_e++)Se(G.__webglFramebuffer[he][_e],R,M,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+he,_e);else Se(G.__webglFramebuffer[he],R,M,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+he,0);m(M)&&p(i.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(Me){for(let he=0,_e=Q.length;he<_e;he++){const Qe=Q[he],ne=n.get(Qe);t.bindTexture(i.TEXTURE_2D,ne.__webglTexture),ye(i.TEXTURE_2D,Qe),Se(G.__webglFramebuffer,R,Qe,i.COLOR_ATTACHMENT0+he,i.TEXTURE_2D,0),m(Qe)&&p(i.TEXTURE_2D)}t.unbindTexture()}else{let he=i.TEXTURE_2D;if((R.isWebGL3DRenderTarget||R.isWebGLArrayRenderTarget)&&(he=R.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),t.bindTexture(he,Z.__webglTexture),ye(he,M),M.mipmaps&&M.mipmaps.length>0)for(let _e=0;_e<M.mipmaps.length;_e++)Se(G.__webglFramebuffer[_e],R,M,i.COLOR_ATTACHMENT0,he,_e);else Se(G.__webglFramebuffer,R,M,i.COLOR_ATTACHMENT0,he,0);m(M)&&p(he),t.unbindTexture()}R.depthBuffer&&Ne(R)}function Je(R){const M=R.textures;for(let G=0,Z=M.length;G<Z;G++){const Q=M[G];if(m(Q)){const K=y(R),Me=n.get(Q).__webglTexture;t.bindTexture(K,Me),p(K),t.unbindTexture()}}}const Tt=[],I=[];function bn(R){if(R.samples>0){if(Ye(R)===!1){const M=R.textures,G=R.width,Z=R.height;let Q=i.COLOR_BUFFER_BIT;const K=R.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,Me=n.get(R),he=M.length>1;if(he)for(let _e=0;_e<M.length;_e++)t.bindFramebuffer(i.FRAMEBUFFER,Me.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+_e,i.RENDERBUFFER,null),t.bindFramebuffer(i.FRAMEBUFFER,Me.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+_e,i.TEXTURE_2D,null,0);t.bindFramebuffer(i.READ_FRAMEBUFFER,Me.__webglMultisampledFramebuffer),t.bindFramebuffer(i.DRAW_FRAMEBUFFER,Me.__webglFramebuffer);for(let _e=0;_e<M.length;_e++){if(R.resolveDepthBuffer&&(R.depthBuffer&&(Q|=i.DEPTH_BUFFER_BIT),R.stencilBuffer&&R.resolveStencilBuffer&&(Q|=i.STENCIL_BUFFER_BIT)),he){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,Me.__webglColorRenderbuffer[_e]);const Qe=n.get(M[_e]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,Qe,0)}i.blitFramebuffer(0,0,G,Z,0,0,G,Z,Q,i.NEAREST),l===!0&&(Tt.length=0,I.length=0,Tt.push(i.COLOR_ATTACHMENT0+_e),R.depthBuffer&&R.resolveDepthBuffer===!1&&(Tt.push(K),I.push(K),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,I)),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,Tt))}if(t.bindFramebuffer(i.READ_FRAMEBUFFER,null),t.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),he)for(let _e=0;_e<M.length;_e++){t.bindFramebuffer(i.FRAMEBUFFER,Me.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+_e,i.RENDERBUFFER,Me.__webglColorRenderbuffer[_e]);const Qe=n.get(M[_e]).__webglTexture;t.bindFramebuffer(i.FRAMEBUFFER,Me.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+_e,i.TEXTURE_2D,Qe,0)}t.bindFramebuffer(i.DRAW_FRAMEBUFFER,Me.__webglMultisampledFramebuffer)}else if(R.depthBuffer&&R.resolveDepthBuffer===!1&&l){const M=R.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[M])}}}function $e(R){return Math.min(s.maxSamples,R.samples)}function Ye(R){const M=n.get(R);return R.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&M.__useRenderToTexture!==!1}function Ee(R){const M=r.render.frame;u.get(R)!==M&&(u.set(R,M),R.update())}function gt(R,M){const G=R.colorSpace,Z=R.format,Q=R.type;return R.isCompressedTexture===!0||R.isVideoTexture===!0||G!==ln&&G!==Ni&&(Ze.getTransfer(G)===ut?(Z!==Ln||Q!==wi)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",G)),M}function be(R){return typeof HTMLImageElement<"u"&&R instanceof HTMLImageElement?(c.width=R.naturalWidth||R.width,c.height=R.naturalHeight||R.height):typeof VideoFrame<"u"&&R instanceof VideoFrame?(c.width=R.displayWidth,c.height=R.displayHeight):(c.width=R.width,c.height=R.height),c}this.allocateTextureUnit=O,this.resetTextureUnits=F,this.setTexture2D=L,this.setTexture2DArray=N,this.setTexture3D=V,this.setTextureCube=H,this.rebindTextures=Ge,this.setupRenderTarget=yt,this.updateRenderTargetMipmap=Je,this.updateMultisampleRenderTarget=bn,this.setupDepthRenderbuffer=Ne,this.setupFrameBufferTexture=Se,this.useMultisampledRTT=Ye}function Ay(i,e){function t(n,s=Ni){let o;const r=Ze.getTransfer(s);if(n===wi)return i.UNSIGNED_BYTE;if(n===$c)return i.UNSIGNED_SHORT_4_4_4_4;if(n===Yc)return i.UNSIGNED_SHORT_5_5_5_1;if(n===jh)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===Xh)return i.BYTE;if(n===qh)return i.SHORT;if(n===nr)return i.UNSIGNED_SHORT;if(n===jc)return i.INT;if(n===_s)return i.UNSIGNED_INT;if(n===qn)return i.FLOAT;if(n===Dn)return i.HALF_FLOAT;if(n===$h)return i.ALPHA;if(n===Yh)return i.RGB;if(n===Ln)return i.RGBA;if(n===Kh)return i.LUMINANCE;if(n===Zh)return i.LUMINANCE_ALPHA;if(n===Js)return i.DEPTH_COMPONENT;if(n===fo)return i.DEPTH_STENCIL;if(n===Kc)return i.RED;if(n===Zc)return i.RED_INTEGER;if(n===Jh)return i.RG;if(n===Jc)return i.RG_INTEGER;if(n===Qc)return i.RGBA_INTEGER;if(n===ua||n===da||n===ha||n===fa)if(r===ut)if(o=e.get("WEBGL_compressed_texture_s3tc_srgb"),o!==null){if(n===ua)return o.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===da)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===ha)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===fa)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(o=e.get("WEBGL_compressed_texture_s3tc"),o!==null){if(n===ua)return o.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===da)return o.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===ha)return o.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===fa)return o.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===nc||n===ic||n===sc||n===oc)if(o=e.get("WEBGL_compressed_texture_pvrtc"),o!==null){if(n===nc)return o.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===ic)return o.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===sc)return o.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===oc)return o.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===rc||n===ac||n===lc)if(o=e.get("WEBGL_compressed_texture_etc"),o!==null){if(n===rc||n===ac)return r===ut?o.COMPRESSED_SRGB8_ETC2:o.COMPRESSED_RGB8_ETC2;if(n===lc)return r===ut?o.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:o.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(n===cc||n===uc||n===dc||n===hc||n===fc||n===pc||n===mc||n===gc||n===_c||n===vc||n===xc||n===yc||n===wc||n===Sc)if(o=e.get("WEBGL_compressed_texture_astc"),o!==null){if(n===cc)return r===ut?o.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:o.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===uc)return r===ut?o.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:o.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===dc)return r===ut?o.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:o.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===hc)return r===ut?o.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:o.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===fc)return r===ut?o.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:o.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===pc)return r===ut?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:o.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===mc)return r===ut?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:o.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===gc)return r===ut?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:o.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===_c)return r===ut?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:o.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===vc)return r===ut?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:o.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===xc)return r===ut?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:o.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===yc)return r===ut?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:o.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===wc)return r===ut?o.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:o.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===Sc)return r===ut?o.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:o.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===pa||n===Mc||n===Ec)if(o=e.get("EXT_texture_compression_bptc"),o!==null){if(n===pa)return r===ut?o.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:o.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===Mc)return o.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===Ec)return o.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===Qh||n===bc||n===Tc||n===Ac)if(o=e.get("EXT_texture_compression_rgtc"),o!==null){if(n===pa)return o.COMPRESSED_RED_RGTC1_EXT;if(n===bc)return o.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===Tc)return o.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===Ac)return o.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===ho?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:t}}const Cy={type:"move"};class bl{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Mn,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Mn,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new A,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new A),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Mn,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new A,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new A),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let s=null,o=null,r=null;const a=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){r=!0;for(const g of e.hand.values()){const m=t.getJointPose(g,n),p=this._getHandJoint(c,g);m!==null&&(p.matrix.fromArray(m.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=m.radius),p.visible=m!==null}const u=c.joints["index-finger-tip"],d=c.joints["thumb-tip"],h=u.position.distanceTo(d.position),f=.02,_=.005;c.inputState.pinching&&h>f+_?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&h<=f-_&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(o=t.getPose(e.gripSpace,n),o!==null&&(l.matrix.fromArray(o.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,o.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(o.linearVelocity)):l.hasLinearVelocity=!1,o.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(o.angularVelocity)):l.hasAngularVelocity=!1));a!==null&&(s=t.getPose(e.targetRaySpace,n),s===null&&o!==null&&(s=o),s!==null&&(a.matrix.fromArray(s.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,s.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(s.linearVelocity)):a.hasLinearVelocity=!1,s.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(s.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(Cy)))}return a!==null&&(a.visible=s!==null),l!==null&&(l.visible=o!==null),c!==null&&(c.visible=r!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const n=new Mn;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}}const Ry=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,Py=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class Dy{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t,n){if(this.texture===null){const s=new Bt,o=e.properties.get(s);o.__webglTexture=t.texture,(t.depthNear!=n.depthNear||t.depthFar!=n.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=s}}getMesh(e){if(this.texture!==null&&this.mesh===null){const t=e.cameras[0].viewport,n=new bt({vertexShader:Ry,fragmentShader:Py,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new oe(new vs(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class Ly extends ws{constructor(e,t){super();const n=this;let s=null,o=1,r=null,a="local-floor",l=1,c=null,u=null,d=null,h=null,f=null,_=null;const g=new Dy,m=t.getContextAttributes();let p=null,y=null;const w=[],v=[],b=new me;let E=null;const C=new sn;C.viewport=new We;const D=new sn;D.viewport=new We;const S=[C,D],x=new Gg;let P=null,F=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(Y){let ie=w[Y];return ie===void 0&&(ie=new bl,w[Y]=ie),ie.getTargetRaySpace()},this.getControllerGrip=function(Y){let ie=w[Y];return ie===void 0&&(ie=new bl,w[Y]=ie),ie.getGripSpace()},this.getHand=function(Y){let ie=w[Y];return ie===void 0&&(ie=new bl,w[Y]=ie),ie.getHandSpace()};function O(Y){const ie=v.indexOf(Y.inputSource);if(ie===-1)return;const Se=w[ie];Se!==void 0&&(Se.update(Y.inputSource,Y.frame,c||r),Se.dispatchEvent({type:Y.type,data:Y.inputSource}))}function k(){s.removeEventListener("select",O),s.removeEventListener("selectstart",O),s.removeEventListener("selectend",O),s.removeEventListener("squeeze",O),s.removeEventListener("squeezestart",O),s.removeEventListener("squeezeend",O),s.removeEventListener("end",k),s.removeEventListener("inputsourceschange",L);for(let Y=0;Y<w.length;Y++){const ie=v[Y];ie!==null&&(v[Y]=null,w[Y].disconnect(ie))}P=null,F=null,g.reset(),e.setRenderTarget(p),f=null,h=null,d=null,s=null,y=null,He.stop(),n.isPresenting=!1,e.setPixelRatio(E),e.setSize(b.width,b.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(Y){o=Y,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(Y){a=Y,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||r},this.setReferenceSpace=function(Y){c=Y},this.getBaseLayer=function(){return h!==null?h:f},this.getBinding=function(){return d},this.getFrame=function(){return _},this.getSession=function(){return s},this.setSession=async function(Y){if(s=Y,s!==null){if(p=e.getRenderTarget(),s.addEventListener("select",O),s.addEventListener("selectstart",O),s.addEventListener("selectend",O),s.addEventListener("squeeze",O),s.addEventListener("squeezestart",O),s.addEventListener("squeezeend",O),s.addEventListener("end",k),s.addEventListener("inputsourceschange",L),m.xrCompatible!==!0&&await t.makeXRCompatible(),E=e.getPixelRatio(),e.getSize(b),s.renderState.layers===void 0){const ie={antialias:m.antialias,alpha:!0,depth:m.depth,stencil:m.stencil,framebufferScaleFactor:o};f=new XRWebGLLayer(s,t,ie),s.updateRenderState({baseLayer:f}),e.setPixelRatio(1),e.setSize(f.framebufferWidth,f.framebufferHeight,!1),y=new tn(f.framebufferWidth,f.framebufferHeight,{format:Ln,type:wi,colorSpace:e.outputColorSpace,stencilBuffer:m.stencil})}else{let ie=null,Se=null,de=null;m.depth&&(de=m.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,ie=m.stencil?fo:Js,Se=m.stencil?ho:_s);const Pe={colorFormat:t.RGBA8,depthFormat:de,scaleFactor:o};d=new XRWebGLBinding(s,t),h=d.createProjectionLayer(Pe),s.updateRenderState({layers:[h]}),e.setPixelRatio(1),e.setSize(h.textureWidth,h.textureHeight,!1),y=new tn(h.textureWidth,h.textureHeight,{format:Ln,type:wi,depthTexture:new gf(h.textureWidth,h.textureHeight,Se,void 0,void 0,void 0,void 0,void 0,void 0,ie),stencilBuffer:m.stencil,colorSpace:e.outputColorSpace,samples:m.antialias?4:0,resolveDepthBuffer:h.ignoreDepthValues===!1})}y.isXRRenderTarget=!0,this.setFoveation(l),c=null,r=await s.requestReferenceSpace(a),He.setContext(s),He.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return g.getDepthTexture()};function L(Y){for(let ie=0;ie<Y.removed.length;ie++){const Se=Y.removed[ie],de=v.indexOf(Se);de>=0&&(v[de]=null,w[de].disconnect(Se))}for(let ie=0;ie<Y.added.length;ie++){const Se=Y.added[ie];let de=v.indexOf(Se);if(de===-1){for(let Ne=0;Ne<w.length;Ne++)if(Ne>=v.length){v.push(Se),de=Ne;break}else if(v[Ne]===null){v[Ne]=Se,de=Ne;break}if(de===-1)break}const Pe=w[de];Pe&&Pe.connect(Se)}}const N=new A,V=new A;function H(Y,ie,Se){N.setFromMatrixPosition(ie.matrixWorld),V.setFromMatrixPosition(Se.matrixWorld);const de=N.distanceTo(V),Pe=ie.projectionMatrix.elements,Ne=Se.projectionMatrix.elements,Ge=Pe[14]/(Pe[10]-1),yt=Pe[14]/(Pe[10]+1),Je=(Pe[9]+1)/Pe[5],Tt=(Pe[9]-1)/Pe[5],I=(Pe[8]-1)/Pe[0],bn=(Ne[8]+1)/Ne[0],$e=Ge*I,Ye=Ge*bn,Ee=de/(-I+bn),gt=Ee*-I;if(ie.matrixWorld.decompose(Y.position,Y.quaternion,Y.scale),Y.translateX(gt),Y.translateZ(Ee),Y.matrixWorld.compose(Y.position,Y.quaternion,Y.scale),Y.matrixWorldInverse.copy(Y.matrixWorld).invert(),Pe[10]===-1)Y.projectionMatrix.copy(ie.projectionMatrix),Y.projectionMatrixInverse.copy(ie.projectionMatrixInverse);else{const be=Ge+Ee,R=yt+Ee,M=$e-gt,G=Ye+(de-gt),Z=Je*yt/R*be,Q=Tt*yt/R*be;Y.projectionMatrix.makePerspective(M,G,Z,Q,be,R),Y.projectionMatrixInverse.copy(Y.projectionMatrix).invert()}}function j(Y,ie){ie===null?Y.matrixWorld.copy(Y.matrix):Y.matrixWorld.multiplyMatrices(ie.matrixWorld,Y.matrix),Y.matrixWorldInverse.copy(Y.matrixWorld).invert()}this.updateCamera=function(Y){if(s===null)return;let ie=Y.near,Se=Y.far;g.texture!==null&&(g.depthNear>0&&(ie=g.depthNear),g.depthFar>0&&(Se=g.depthFar)),x.near=D.near=C.near=ie,x.far=D.far=C.far=Se,(P!==x.near||F!==x.far)&&(s.updateRenderState({depthNear:x.near,depthFar:x.far}),P=x.near,F=x.far),C.layers.mask=Y.layers.mask|2,D.layers.mask=Y.layers.mask|4,x.layers.mask=C.layers.mask|D.layers.mask;const de=Y.parent,Pe=x.cameras;j(x,de);for(let Ne=0;Ne<Pe.length;Ne++)j(Pe[Ne],de);Pe.length===2?H(x,C,D):x.projectionMatrix.copy(C.projectionMatrix),$(Y,x,de)};function $(Y,ie,Se){Se===null?Y.matrix.copy(ie.matrixWorld):(Y.matrix.copy(Se.matrixWorld),Y.matrix.invert(),Y.matrix.multiply(ie.matrixWorld)),Y.matrix.decompose(Y.position,Y.quaternion,Y.scale),Y.updateMatrixWorld(!0),Y.projectionMatrix.copy(ie.projectionMatrix),Y.projectionMatrixInverse.copy(ie.projectionMatrixInverse),Y.isPerspectiveCamera&&(Y.fov=po*2*Math.atan(1/Y.projectionMatrix.elements[5]),Y.zoom=1)}this.getCamera=function(){return x},this.getFoveation=function(){if(!(h===null&&f===null))return l},this.setFoveation=function(Y){l=Y,h!==null&&(h.fixedFoveation=Y),f!==null&&f.fixedFoveation!==void 0&&(f.fixedFoveation=Y)},this.hasDepthSensing=function(){return g.texture!==null},this.getDepthSensingMesh=function(){return g.getMesh(x)};let ae=null;function ye(Y,ie){if(u=ie.getViewerPose(c||r),_=ie,u!==null){const Se=u.views;f!==null&&(e.setRenderTargetFramebuffer(y,f.framebuffer),e.setRenderTarget(y));let de=!1;Se.length!==x.cameras.length&&(x.cameras.length=0,de=!0);for(let Ne=0;Ne<Se.length;Ne++){const Ge=Se[Ne];let yt=null;if(f!==null)yt=f.getViewport(Ge);else{const Tt=d.getViewSubImage(h,Ge);yt=Tt.viewport,Ne===0&&(e.setRenderTargetTextures(y,Tt.colorTexture,h.ignoreDepthValues?void 0:Tt.depthStencilTexture),e.setRenderTarget(y))}let Je=S[Ne];Je===void 0&&(Je=new sn,Je.layers.enable(Ne),Je.viewport=new We,S[Ne]=Je),Je.matrix.fromArray(Ge.transform.matrix),Je.matrix.decompose(Je.position,Je.quaternion,Je.scale),Je.projectionMatrix.fromArray(Ge.projectionMatrix),Je.projectionMatrixInverse.copy(Je.projectionMatrix).invert(),Je.viewport.set(yt.x,yt.y,yt.width,yt.height),Ne===0&&(x.matrix.copy(Je.matrix),x.matrix.decompose(x.position,x.quaternion,x.scale)),de===!0&&x.cameras.push(Je)}const Pe=s.enabledFeatures;if(Pe&&Pe.includes("depth-sensing")){const Ne=d.getDepthInformation(Se[0]);Ne&&Ne.isValid&&Ne.texture&&g.init(e,Ne,s.renderState)}}for(let Se=0;Se<w.length;Se++){const de=v[Se],Pe=w[Se];de!==null&&Pe!==void 0&&Pe.update(de,ie,c||r)}ae&&ae(Y,ie),ie.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:ie}),_=null}const He=new Mf;He.setAnimationLoop(ye),this.setAnimationLoop=function(Y){ae=Y},this.dispose=function(){}}}const Qi=new zt,Iy=new De;function Oy(i,e){function t(m,p){m.matrixAutoUpdate===!0&&m.updateMatrix(),p.value.copy(m.matrix)}function n(m,p){p.color.getRGB(m.fogColor.value,uf(i)),p.isFog?(m.fogNear.value=p.near,m.fogFar.value=p.far):p.isFogExp2&&(m.fogDensity.value=p.density)}function s(m,p,y,w,v){p.isMeshBasicMaterial||p.isMeshLambertMaterial?o(m,p):p.isMeshToonMaterial?(o(m,p),d(m,p)):p.isMeshPhongMaterial?(o(m,p),u(m,p)):p.isMeshStandardMaterial?(o(m,p),h(m,p),p.isMeshPhysicalMaterial&&f(m,p,v)):p.isMeshMatcapMaterial?(o(m,p),_(m,p)):p.isMeshDepthMaterial?o(m,p):p.isMeshDistanceMaterial?(o(m,p),g(m,p)):p.isMeshNormalMaterial?o(m,p):p.isLineBasicMaterial?(r(m,p),p.isLineDashedMaterial&&a(m,p)):p.isPointsMaterial?l(m,p,y,w):p.isSpriteMaterial?c(m,p):p.isShadowMaterial?(m.color.value.copy(p.color),m.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function o(m,p){m.opacity.value=p.opacity,p.color&&m.diffuse.value.copy(p.color),p.emissive&&m.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(m.map.value=p.map,t(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.bumpMap&&(m.bumpMap.value=p.bumpMap,t(p.bumpMap,m.bumpMapTransform),m.bumpScale.value=p.bumpScale,p.side===gn&&(m.bumpScale.value*=-1)),p.normalMap&&(m.normalMap.value=p.normalMap,t(p.normalMap,m.normalMapTransform),m.normalScale.value.copy(p.normalScale),p.side===gn&&m.normalScale.value.negate()),p.displacementMap&&(m.displacementMap.value=p.displacementMap,t(p.displacementMap,m.displacementMapTransform),m.displacementScale.value=p.displacementScale,m.displacementBias.value=p.displacementBias),p.emissiveMap&&(m.emissiveMap.value=p.emissiveMap,t(p.emissiveMap,m.emissiveMapTransform)),p.specularMap&&(m.specularMap.value=p.specularMap,t(p.specularMap,m.specularMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest);const y=e.get(p),w=y.envMap,v=y.envMapRotation;w&&(m.envMap.value=w,Qi.copy(v),Qi.x*=-1,Qi.y*=-1,Qi.z*=-1,w.isCubeTexture&&w.isRenderTargetTexture===!1&&(Qi.y*=-1,Qi.z*=-1),m.envMapRotation.value.setFromMatrix4(Iy.makeRotationFromEuler(Qi)),m.flipEnvMap.value=w.isCubeTexture&&w.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=p.reflectivity,m.ior.value=p.ior,m.refractionRatio.value=p.refractionRatio),p.lightMap&&(m.lightMap.value=p.lightMap,m.lightMapIntensity.value=p.lightMapIntensity,t(p.lightMap,m.lightMapTransform)),p.aoMap&&(m.aoMap.value=p.aoMap,m.aoMapIntensity.value=p.aoMapIntensity,t(p.aoMap,m.aoMapTransform))}function r(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,p.map&&(m.map.value=p.map,t(p.map,m.mapTransform))}function a(m,p){m.dashSize.value=p.dashSize,m.totalSize.value=p.dashSize+p.gapSize,m.scale.value=p.scale}function l(m,p,y,w){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.size.value=p.size*y,m.scale.value=w*.5,p.map&&(m.map.value=p.map,t(p.map,m.uvTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function c(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.rotation.value=p.rotation,p.map&&(m.map.value=p.map,t(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function u(m,p){m.specular.value.copy(p.specular),m.shininess.value=Math.max(p.shininess,1e-4)}function d(m,p){p.gradientMap&&(m.gradientMap.value=p.gradientMap)}function h(m,p){m.metalness.value=p.metalness,p.metalnessMap&&(m.metalnessMap.value=p.metalnessMap,t(p.metalnessMap,m.metalnessMapTransform)),m.roughness.value=p.roughness,p.roughnessMap&&(m.roughnessMap.value=p.roughnessMap,t(p.roughnessMap,m.roughnessMapTransform)),p.envMap&&(m.envMapIntensity.value=p.envMapIntensity)}function f(m,p,y){m.ior.value=p.ior,p.sheen>0&&(m.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),m.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(m.sheenColorMap.value=p.sheenColorMap,t(p.sheenColorMap,m.sheenColorMapTransform)),p.sheenRoughnessMap&&(m.sheenRoughnessMap.value=p.sheenRoughnessMap,t(p.sheenRoughnessMap,m.sheenRoughnessMapTransform))),p.clearcoat>0&&(m.clearcoat.value=p.clearcoat,m.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(m.clearcoatMap.value=p.clearcoatMap,t(p.clearcoatMap,m.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,t(p.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(m.clearcoatNormalMap.value=p.clearcoatNormalMap,t(p.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===gn&&m.clearcoatNormalScale.value.negate())),p.dispersion>0&&(m.dispersion.value=p.dispersion),p.iridescence>0&&(m.iridescence.value=p.iridescence,m.iridescenceIOR.value=p.iridescenceIOR,m.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(m.iridescenceMap.value=p.iridescenceMap,t(p.iridescenceMap,m.iridescenceMapTransform)),p.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=p.iridescenceThicknessMap,t(p.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),p.transmission>0&&(m.transmission.value=p.transmission,m.transmissionSamplerMap.value=y.texture,m.transmissionSamplerSize.value.set(y.width,y.height),p.transmissionMap&&(m.transmissionMap.value=p.transmissionMap,t(p.transmissionMap,m.transmissionMapTransform)),m.thickness.value=p.thickness,p.thicknessMap&&(m.thicknessMap.value=p.thicknessMap,t(p.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=p.attenuationDistance,m.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(m.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(m.anisotropyMap.value=p.anisotropyMap,t(p.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=p.specularIntensity,m.specularColor.value.copy(p.specularColor),p.specularColorMap&&(m.specularColorMap.value=p.specularColorMap,t(p.specularColorMap,m.specularColorMapTransform)),p.specularIntensityMap&&(m.specularIntensityMap.value=p.specularIntensityMap,t(p.specularIntensityMap,m.specularIntensityMapTransform))}function _(m,p){p.matcap&&(m.matcap.value=p.matcap)}function g(m,p){const y=e.get(p).light;m.referencePosition.value.setFromMatrixPosition(y.matrixWorld),m.nearDistance.value=y.shadow.camera.near,m.farDistance.value=y.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:s}}function Ny(i,e,t,n){let s={},o={},r=[];const a=i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);function l(y,w){const v=w.program;n.uniformBlockBinding(y,v)}function c(y,w){let v=s[y.id];v===void 0&&(_(y),v=u(y),s[y.id]=v,y.addEventListener("dispose",m));const b=w.program;n.updateUBOMapping(y,b);const E=e.render.frame;o[y.id]!==E&&(h(y),o[y.id]=E)}function u(y){const w=d();y.__bindingPointIndex=w;const v=i.createBuffer(),b=y.__size,E=y.usage;return i.bindBuffer(i.UNIFORM_BUFFER,v),i.bufferData(i.UNIFORM_BUFFER,b,E),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,w,v),v}function d(){for(let y=0;y<a;y++)if(r.indexOf(y)===-1)return r.push(y),y;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function h(y){const w=s[y.id],v=y.uniforms,b=y.__cache;i.bindBuffer(i.UNIFORM_BUFFER,w);for(let E=0,C=v.length;E<C;E++){const D=Array.isArray(v[E])?v[E]:[v[E]];for(let S=0,x=D.length;S<x;S++){const P=D[S];if(f(P,E,S,b)===!0){const F=P.__offset,O=Array.isArray(P.value)?P.value:[P.value];let k=0;for(let L=0;L<O.length;L++){const N=O[L],V=g(N);typeof N=="number"||typeof N=="boolean"?(P.__data[0]=N,i.bufferSubData(i.UNIFORM_BUFFER,F+k,P.__data)):N.isMatrix3?(P.__data[0]=N.elements[0],P.__data[1]=N.elements[1],P.__data[2]=N.elements[2],P.__data[3]=0,P.__data[4]=N.elements[3],P.__data[5]=N.elements[4],P.__data[6]=N.elements[5],P.__data[7]=0,P.__data[8]=N.elements[6],P.__data[9]=N.elements[7],P.__data[10]=N.elements[8],P.__data[11]=0):(N.toArray(P.__data,k),k+=V.storage/Float32Array.BYTES_PER_ELEMENT)}i.bufferSubData(i.UNIFORM_BUFFER,F,P.__data)}}}i.bindBuffer(i.UNIFORM_BUFFER,null)}function f(y,w,v,b){const E=y.value,C=w+"_"+v;if(b[C]===void 0)return typeof E=="number"||typeof E=="boolean"?b[C]=E:b[C]=E.clone(),!0;{const D=b[C];if(typeof E=="number"||typeof E=="boolean"){if(D!==E)return b[C]=E,!0}else if(D.equals(E)===!1)return D.copy(E),!0}return!1}function _(y){const w=y.uniforms;let v=0;const b=16;for(let C=0,D=w.length;C<D;C++){const S=Array.isArray(w[C])?w[C]:[w[C]];for(let x=0,P=S.length;x<P;x++){const F=S[x],O=Array.isArray(F.value)?F.value:[F.value];for(let k=0,L=O.length;k<L;k++){const N=O[k],V=g(N),H=v%b,j=H%V.boundary,$=H+j;v+=j,$!==0&&b-$<V.storage&&(v+=b-$),F.__data=new Float32Array(V.storage/Float32Array.BYTES_PER_ELEMENT),F.__offset=v,v+=V.storage}}}const E=v%b;return E>0&&(v+=b-E),y.__size=v,y.__cache={},this}function g(y){const w={boundary:0,storage:0};return typeof y=="number"||typeof y=="boolean"?(w.boundary=4,w.storage=4):y.isVector2?(w.boundary=8,w.storage=8):y.isVector3||y.isColor?(w.boundary=16,w.storage=12):y.isVector4?(w.boundary=16,w.storage=16):y.isMatrix3?(w.boundary=48,w.storage=48):y.isMatrix4?(w.boundary=64,w.storage=64):y.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",y),w}function m(y){const w=y.target;w.removeEventListener("dispose",m);const v=r.indexOf(w.__bindingPointIndex);r.splice(v,1),i.deleteBuffer(s[w.id]),delete s[w.id],delete o[w.id]}function p(){for(const y in s)i.deleteBuffer(s[y]);r=[],s={},o={}}return{bind:l,update:c,dispose:p}}class Uy{constructor(e={}){const{canvas:t=Um(),context:n=null,depth:s=!0,stencil:o=!1,alpha:r=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:d=!1,reverseDepthBuffer:h=!1}=e;this.isWebGLRenderer=!0;let f;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");f=n.getContextAttributes().alpha}else f=r;const _=new Uint32Array(4),g=new Int32Array(4);let m=null,p=null;const y=[],w=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=Ft,this.toneMapping=Wi,this.toneMappingExposure=1;const v=this;let b=!1,E=0,C=0,D=null,S=-1,x=null;const P=new We,F=new We;let O=null;const k=new se(0);let L=0,N=t.width,V=t.height,H=1,j=null,$=null;const ae=new We(0,0,N,V),ye=new We(0,0,N,V);let He=!1;const Y=new iu;let ie=!1,Se=!1;const de=new De,Pe=new De,Ne=new A,Ge=new We,yt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let Je=!1;function Tt(){return D===null?H:1}let I=n;function bn(T,B){return t.getContext(T,B)}try{const T={alpha:!0,depth:s,stencil:o,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:u,failIfMajorPerformanceCaveat:d};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${Xc}`),t.addEventListener("webglcontextlost",J,!1),t.addEventListener("webglcontextrestored",pe,!1),t.addEventListener("webglcontextcreationerror",fe,!1),I===null){const B="webgl2";if(I=bn(B,T),I===null)throw bn(B)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(T){throw console.error("THREE.WebGLRenderer: "+T.message),T}let $e,Ye,Ee,gt,be,R,M,G,Z,Q,K,Me,he,_e,Qe,ne,ve,Re,Le,xe,Ke,Be,ft,U;function ce(){$e=new Xv(I),$e.init(),Be=new Ay(I,$e),Ye=new zv(I,$e,e,Be),Ee=new by(I,$e),Ye.reverseDepthBuffer&&h&&Ee.buffers.depth.setReversed(!0),gt=new $v(I),be=new hy,R=new Ty(I,$e,Ee,be,Ye,Be,gt),M=new Hv(v),G=new Wv(v),Z=new t0(I),ft=new Fv(I,Z),Q=new qv(I,Z,gt,ft),K=new Kv(I,Q,Z,gt),Le=new Yv(I,Ye,R),ne=new kv(be),Me=new dy(v,M,G,$e,Ye,ft,ne),he=new Oy(v,be),_e=new py,Qe=new yy($e),Re=new Uv(v,M,G,Ee,K,f,l),ve=new My(v,K,Ye),U=new Ny(I,gt,Ye,Ee),xe=new Bv(I,$e,gt),Ke=new jv(I,$e,gt),gt.programs=Me.programs,v.capabilities=Ye,v.extensions=$e,v.properties=be,v.renderLists=_e,v.shadowMap=ve,v.state=Ee,v.info=gt}ce();const q=new Ly(v,I);this.xr=q,this.getContext=function(){return I},this.getContextAttributes=function(){return I.getContextAttributes()},this.forceContextLoss=function(){const T=$e.get("WEBGL_lose_context");T&&T.loseContext()},this.forceContextRestore=function(){const T=$e.get("WEBGL_lose_context");T&&T.restoreContext()},this.getPixelRatio=function(){return H},this.setPixelRatio=function(T){T!==void 0&&(H=T,this.setSize(N,V,!1))},this.getSize=function(T){return T.set(N,V)},this.setSize=function(T,B,W=!0){if(q.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}N=T,V=B,t.width=Math.floor(T*H),t.height=Math.floor(B*H),W===!0&&(t.style.width=T+"px",t.style.height=B+"px"),this.setViewport(0,0,T,B)},this.getDrawingBufferSize=function(T){return T.set(N*H,V*H).floor()},this.setDrawingBufferSize=function(T,B,W){N=T,V=B,H=W,t.width=Math.floor(T*W),t.height=Math.floor(B*W),this.setViewport(0,0,T,B)},this.getCurrentViewport=function(T){return T.copy(P)},this.getViewport=function(T){return T.copy(ae)},this.setViewport=function(T,B,W,X){T.isVector4?ae.set(T.x,T.y,T.z,T.w):ae.set(T,B,W,X),Ee.viewport(P.copy(ae).multiplyScalar(H).round())},this.getScissor=function(T){return T.copy(ye)},this.setScissor=function(T,B,W,X){T.isVector4?ye.set(T.x,T.y,T.z,T.w):ye.set(T,B,W,X),Ee.scissor(F.copy(ye).multiplyScalar(H).round())},this.getScissorTest=function(){return He},this.setScissorTest=function(T){Ee.setScissorTest(He=T)},this.setOpaqueSort=function(T){j=T},this.setTransparentSort=function(T){$=T},this.getClearColor=function(T){return T.copy(Re.getClearColor())},this.setClearColor=function(){Re.setClearColor.apply(Re,arguments)},this.getClearAlpha=function(){return Re.getClearAlpha()},this.setClearAlpha=function(){Re.setClearAlpha.apply(Re,arguments)},this.clear=function(T=!0,B=!0,W=!0){let X=0;if(T){let z=!1;if(D!==null){const ee=D.texture.format;z=ee===Qc||ee===Jc||ee===Zc}if(z){const ee=D.texture.type,ue=ee===wi||ee===_s||ee===nr||ee===ho||ee===$c||ee===Yc,ge=Re.getClearColor(),we=Re.getClearAlpha(),Ie=ge.r,Oe=ge.g,Te=ge.b;ue?(_[0]=Ie,_[1]=Oe,_[2]=Te,_[3]=we,I.clearBufferuiv(I.COLOR,0,_)):(g[0]=Ie,g[1]=Oe,g[2]=Te,g[3]=we,I.clearBufferiv(I.COLOR,0,g))}else X|=I.COLOR_BUFFER_BIT}B&&(X|=I.DEPTH_BUFFER_BIT),W&&(X|=I.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),I.clear(X)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",J,!1),t.removeEventListener("webglcontextrestored",pe,!1),t.removeEventListener("webglcontextcreationerror",fe,!1),Re.dispose(),_e.dispose(),Qe.dispose(),be.dispose(),M.dispose(),G.dispose(),K.dispose(),ft.dispose(),U.dispose(),Me.dispose(),q.dispose(),q.removeEventListener("sessionstart",Mu),q.removeEventListener("sessionend",Eu),qi.stop()};function J(T){T.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),b=!0}function pe(){console.log("THREE.WebGLRenderer: Context Restored."),b=!1;const T=gt.autoReset,B=ve.enabled,W=ve.autoUpdate,X=ve.needsUpdate,z=ve.type;ce(),gt.autoReset=T,ve.enabled=B,ve.autoUpdate=W,ve.needsUpdate=X,ve.type=z}function fe(T){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",T.statusMessage)}function Ue(T){const B=T.target;B.removeEventListener("dispose",Ue),St(B)}function St(T){Wt(T),be.remove(T)}function Wt(T){const B=be.get(T).programs;B!==void 0&&(B.forEach(function(W){Me.releaseProgram(W)}),T.isShaderMaterial&&Me.releaseShaderCache(T))}this.renderBufferDirect=function(T,B,W,X,z,ee){B===null&&(B=yt);const ue=z.isMesh&&z.matrixWorld.determinant()<0,ge=Ap(T,B,W,X,z);Ee.setMaterial(X,ue);let we=W.index,Ie=1;if(X.wireframe===!0){if(we=Q.getWireframeAttribute(W),we===void 0)return;Ie=2}const Oe=W.drawRange,Te=W.attributes.position;let et=Oe.start*Ie,st=(Oe.start+Oe.count)*Ie;ee!==null&&(et=Math.max(et,ee.start*Ie),st=Math.min(st,(ee.start+ee.count)*Ie)),we!==null?(et=Math.max(et,0),st=Math.min(st,we.count)):Te!=null&&(et=Math.max(et,0),st=Math.min(st,Te.count));const Ct=st-et;if(Ct<0||Ct===1/0)return;ft.setup(z,X,ge,W,we);let Mt,nt=xe;if(we!==null&&(Mt=Z.get(we),nt=Ke,nt.setIndex(Mt)),z.isMesh)X.wireframe===!0?(Ee.setLineWidth(X.wireframeLinewidth*Tt()),nt.setMode(I.LINES)):nt.setMode(I.TRIANGLES);else if(z.isLine){let Ae=X.linewidth;Ae===void 0&&(Ae=1),Ee.setLineWidth(Ae*Tt()),z.isLineSegments?nt.setMode(I.LINES):z.isLineLoop?nt.setMode(I.LINE_LOOP):nt.setMode(I.LINE_STRIP)}else z.isPoints?nt.setMode(I.POINTS):z.isSprite&&nt.setMode(I.TRIANGLES);if(z.isBatchedMesh)if(z._multiDrawInstances!==null)nt.renderMultiDrawInstances(z._multiDrawStarts,z._multiDrawCounts,z._multiDrawCount,z._multiDrawInstances);else if($e.get("WEBGL_multi_draw"))nt.renderMultiDraw(z._multiDrawStarts,z._multiDrawCounts,z._multiDrawCount);else{const Ae=z._multiDrawStarts,kt=z._multiDrawCounts,ot=z._multiDrawCount,Bn=we?Z.get(we).bytesPerElement:1,Es=be.get(X).currentProgram.getUniforms();for(let vn=0;vn<ot;vn++)Es.setValue(I,"_gl_DrawID",vn),nt.render(Ae[vn]/Bn,kt[vn])}else if(z.isInstancedMesh)nt.renderInstances(et,Ct,z.count);else if(W.isInstancedBufferGeometry){const Ae=W._maxInstanceCount!==void 0?W._maxInstanceCount:1/0,kt=Math.min(W.instanceCount,Ae);nt.renderInstances(et,Ct,kt)}else nt.render(et,Ct)};function rt(T,B,W){T.transparent===!0&&T.side===pn&&T.forceSinglePass===!1?(T.side=gn,T.needsUpdate=!0,mr(T,B,W),T.side=yi,T.needsUpdate=!0,mr(T,B,W),T.side=pn):mr(T,B,W)}this.compile=function(T,B,W=null){W===null&&(W=T),p=Qe.get(W),p.init(B),w.push(p),W.traverseVisible(function(z){z.isLight&&z.layers.test(B.layers)&&(p.pushLight(z),z.castShadow&&p.pushShadow(z))}),T!==W&&T.traverseVisible(function(z){z.isLight&&z.layers.test(B.layers)&&(p.pushLight(z),z.castShadow&&p.pushShadow(z))}),p.setupLights();const X=new Set;return T.traverse(function(z){if(!(z.isMesh||z.isPoints||z.isLine||z.isSprite))return;const ee=z.material;if(ee)if(Array.isArray(ee))for(let ue=0;ue<ee.length;ue++){const ge=ee[ue];rt(ge,W,z),X.add(ge)}else rt(ee,W,z),X.add(ee)}),w.pop(),p=null,X},this.compileAsync=function(T,B,W=null){const X=this.compile(T,B,W);return new Promise(z=>{function ee(){if(X.forEach(function(ue){be.get(ue).currentProgram.isReady()&&X.delete(ue)}),X.size===0){z(T);return}setTimeout(ee,10)}$e.get("KHR_parallel_shader_compile")!==null?ee():setTimeout(ee,10)})};let Fn=null;function si(T){Fn&&Fn(T)}function Mu(){qi.stop()}function Eu(){qi.start()}const qi=new Mf;qi.setAnimationLoop(si),typeof self<"u"&&qi.setContext(self),this.setAnimationLoop=function(T){Fn=T,q.setAnimationLoop(T),T===null?qi.stop():qi.start()},q.addEventListener("sessionstart",Mu),q.addEventListener("sessionend",Eu),this.render=function(T,B){if(B!==void 0&&B.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(b===!0)return;if(T.matrixWorldAutoUpdate===!0&&T.updateMatrixWorld(),B.parent===null&&B.matrixWorldAutoUpdate===!0&&B.updateMatrixWorld(),q.enabled===!0&&q.isPresenting===!0&&(q.cameraAutoUpdate===!0&&q.updateCamera(B),B=q.getCamera()),T.isScene===!0&&T.onBeforeRender(v,T,B,D),p=Qe.get(T,w.length),p.init(B),w.push(p),Pe.multiplyMatrices(B.projectionMatrix,B.matrixWorldInverse),Y.setFromProjectionMatrix(Pe),Se=this.localClippingEnabled,ie=ne.init(this.clippingPlanes,Se),m=_e.get(T,y.length),m.init(),y.push(m),q.enabled===!0&&q.isPresenting===!0){const ee=v.xr.getDepthSensingMesh();ee!==null&&Wa(ee,B,-1/0,v.sortObjects)}Wa(T,B,0,v.sortObjects),m.finish(),v.sortObjects===!0&&m.sort(j,$),Je=q.enabled===!1||q.isPresenting===!1||q.hasDepthSensing()===!1,Je&&Re.addToRenderList(m,T),this.info.render.frame++,ie===!0&&ne.beginShadows();const W=p.state.shadowsArray;ve.render(W,T,B),ie===!0&&ne.endShadows(),this.info.autoReset===!0&&this.info.reset();const X=m.opaque,z=m.transmissive;if(p.setupLights(),B.isArrayCamera){const ee=B.cameras;if(z.length>0)for(let ue=0,ge=ee.length;ue<ge;ue++){const we=ee[ue];Tu(X,z,T,we)}Je&&Re.render(T);for(let ue=0,ge=ee.length;ue<ge;ue++){const we=ee[ue];bu(m,T,we,we.viewport)}}else z.length>0&&Tu(X,z,T,B),Je&&Re.render(T),bu(m,T,B);D!==null&&(R.updateMultisampleRenderTarget(D),R.updateRenderTargetMipmap(D)),T.isScene===!0&&T.onAfterRender(v,T,B),ft.resetDefaultState(),S=-1,x=null,w.pop(),w.length>0?(p=w[w.length-1],ie===!0&&ne.setGlobalState(v.clippingPlanes,p.state.camera)):p=null,y.pop(),y.length>0?m=y[y.length-1]:m=null};function Wa(T,B,W,X){if(T.visible===!1)return;if(T.layers.test(B.layers)){if(T.isGroup)W=T.renderOrder;else if(T.isLOD)T.autoUpdate===!0&&T.update(B);else if(T.isLight)p.pushLight(T),T.castShadow&&p.pushShadow(T);else if(T.isSprite){if(!T.frustumCulled||Y.intersectsSprite(T)){X&&Ge.setFromMatrixPosition(T.matrixWorld).applyMatrix4(Pe);const ue=K.update(T),ge=T.material;ge.visible&&m.push(T,ue,ge,W,Ge.z,null)}}else if((T.isMesh||T.isLine||T.isPoints)&&(!T.frustumCulled||Y.intersectsObject(T))){const ue=K.update(T),ge=T.material;if(X&&(T.boundingSphere!==void 0?(T.boundingSphere===null&&T.computeBoundingSphere(),Ge.copy(T.boundingSphere.center)):(ue.boundingSphere===null&&ue.computeBoundingSphere(),Ge.copy(ue.boundingSphere.center)),Ge.applyMatrix4(T.matrixWorld).applyMatrix4(Pe)),Array.isArray(ge)){const we=ue.groups;for(let Ie=0,Oe=we.length;Ie<Oe;Ie++){const Te=we[Ie],et=ge[Te.materialIndex];et&&et.visible&&m.push(T,ue,et,W,Ge.z,Te)}}else ge.visible&&m.push(T,ue,ge,W,Ge.z,null)}}const ee=T.children;for(let ue=0,ge=ee.length;ue<ge;ue++)Wa(ee[ue],B,W,X)}function bu(T,B,W,X){const z=T.opaque,ee=T.transmissive,ue=T.transparent;p.setupLightsView(W),ie===!0&&ne.setGlobalState(v.clippingPlanes,W),X&&Ee.viewport(P.copy(X)),z.length>0&&pr(z,B,W),ee.length>0&&pr(ee,B,W),ue.length>0&&pr(ue,B,W),Ee.buffers.depth.setTest(!0),Ee.buffers.depth.setMask(!0),Ee.buffers.color.setMask(!0),Ee.setPolygonOffset(!1)}function Tu(T,B,W,X){if((W.isScene===!0?W.overrideMaterial:null)!==null)return;p.state.transmissionRenderTarget[X.id]===void 0&&(p.state.transmissionRenderTarget[X.id]=new tn(1,1,{generateMipmaps:!0,type:$e.has("EXT_color_buffer_half_float")||$e.has("EXT_color_buffer_float")?Dn:wi,minFilter:mi,samples:4,stencilBuffer:o,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Ze.workingColorSpace}));const ee=p.state.transmissionRenderTarget[X.id],ue=X.viewport||P;ee.setSize(ue.z,ue.w);const ge=v.getRenderTarget();v.setRenderTarget(ee),v.getClearColor(k),L=v.getClearAlpha(),L<1&&v.setClearColor(16777215,.5),v.clear(),Je&&Re.render(W);const we=v.toneMapping;v.toneMapping=Wi;const Ie=X.viewport;if(X.viewport!==void 0&&(X.viewport=void 0),p.setupLightsView(X),ie===!0&&ne.setGlobalState(v.clippingPlanes,X),pr(T,W,X),R.updateMultisampleRenderTarget(ee),R.updateRenderTargetMipmap(ee),$e.has("WEBGL_multisampled_render_to_texture")===!1){let Oe=!1;for(let Te=0,et=B.length;Te<et;Te++){const st=B[Te],Ct=st.object,Mt=st.geometry,nt=st.material,Ae=st.group;if(nt.side===pn&&Ct.layers.test(X.layers)){const kt=nt.side;nt.side=gn,nt.needsUpdate=!0,Au(Ct,W,X,Mt,nt,Ae),nt.side=kt,nt.needsUpdate=!0,Oe=!0}}Oe===!0&&(R.updateMultisampleRenderTarget(ee),R.updateRenderTargetMipmap(ee))}v.setRenderTarget(ge),v.setClearColor(k,L),Ie!==void 0&&(X.viewport=Ie),v.toneMapping=we}function pr(T,B,W){const X=B.isScene===!0?B.overrideMaterial:null;for(let z=0,ee=T.length;z<ee;z++){const ue=T[z],ge=ue.object,we=ue.geometry,Ie=X===null?ue.material:X,Oe=ue.group;ge.layers.test(W.layers)&&Au(ge,B,W,we,Ie,Oe)}}function Au(T,B,W,X,z,ee){T.onBeforeRender(v,B,W,X,z,ee),T.modelViewMatrix.multiplyMatrices(W.matrixWorldInverse,T.matrixWorld),T.normalMatrix.getNormalMatrix(T.modelViewMatrix),z.onBeforeRender(v,B,W,X,T,ee),z.transparent===!0&&z.side===pn&&z.forceSinglePass===!1?(z.side=gn,z.needsUpdate=!0,v.renderBufferDirect(W,B,X,z,T,ee),z.side=yi,z.needsUpdate=!0,v.renderBufferDirect(W,B,X,z,T,ee),z.side=pn):v.renderBufferDirect(W,B,X,z,T,ee),T.onAfterRender(v,B,W,X,z,ee)}function mr(T,B,W){B.isScene!==!0&&(B=yt);const X=be.get(T),z=p.state.lights,ee=p.state.shadowsArray,ue=z.state.version,ge=Me.getParameters(T,z.state,ee,B,W),we=Me.getProgramCacheKey(ge);let Ie=X.programs;X.environment=T.isMeshStandardMaterial?B.environment:null,X.fog=B.fog,X.envMap=(T.isMeshStandardMaterial?G:M).get(T.envMap||X.environment),X.envMapRotation=X.environment!==null&&T.envMap===null?B.environmentRotation:T.envMapRotation,Ie===void 0&&(T.addEventListener("dispose",Ue),Ie=new Map,X.programs=Ie);let Oe=Ie.get(we);if(Oe!==void 0){if(X.currentProgram===Oe&&X.lightsStateVersion===ue)return Ru(T,ge),Oe}else ge.uniforms=Me.getUniforms(T),T.onBeforeCompile(ge,v),Oe=Me.acquireProgram(ge,we),Ie.set(we,Oe),X.uniforms=ge.uniforms;const Te=X.uniforms;return(!T.isShaderMaterial&&!T.isRawShaderMaterial||T.clipping===!0)&&(Te.clippingPlanes=ne.uniform),Ru(T,ge),X.needsLights=Rp(T),X.lightsStateVersion=ue,X.needsLights&&(Te.ambientLightColor.value=z.state.ambient,Te.lightProbe.value=z.state.probe,Te.directionalLights.value=z.state.directional,Te.directionalLightShadows.value=z.state.directionalShadow,Te.spotLights.value=z.state.spot,Te.spotLightShadows.value=z.state.spotShadow,Te.rectAreaLights.value=z.state.rectArea,Te.ltc_1.value=z.state.rectAreaLTC1,Te.ltc_2.value=z.state.rectAreaLTC2,Te.pointLights.value=z.state.point,Te.pointLightShadows.value=z.state.pointShadow,Te.hemisphereLights.value=z.state.hemi,Te.directionalShadowMap.value=z.state.directionalShadowMap,Te.directionalShadowMatrix.value=z.state.directionalShadowMatrix,Te.spotShadowMap.value=z.state.spotShadowMap,Te.spotLightMatrix.value=z.state.spotLightMatrix,Te.spotLightMap.value=z.state.spotLightMap,Te.pointShadowMap.value=z.state.pointShadowMap,Te.pointShadowMatrix.value=z.state.pointShadowMatrix),X.currentProgram=Oe,X.uniformsList=null,Oe}function Cu(T){if(T.uniformsList===null){const B=T.currentProgram.getUniforms();T.uniformsList=ga.seqWithValue(B.seq,T.uniforms)}return T.uniformsList}function Ru(T,B){const W=be.get(T);W.outputColorSpace=B.outputColorSpace,W.batching=B.batching,W.batchingColor=B.batchingColor,W.instancing=B.instancing,W.instancingColor=B.instancingColor,W.instancingMorph=B.instancingMorph,W.skinning=B.skinning,W.morphTargets=B.morphTargets,W.morphNormals=B.morphNormals,W.morphColors=B.morphColors,W.morphTargetsCount=B.morphTargetsCount,W.numClippingPlanes=B.numClippingPlanes,W.numIntersection=B.numClipIntersection,W.vertexAlphas=B.vertexAlphas,W.vertexTangents=B.vertexTangents,W.toneMapping=B.toneMapping}function Ap(T,B,W,X,z){B.isScene!==!0&&(B=yt),R.resetTextureUnits();const ee=B.fog,ue=X.isMeshStandardMaterial?B.environment:null,ge=D===null?v.outputColorSpace:D.isXRRenderTarget===!0?D.texture.colorSpace:ln,we=(X.isMeshStandardMaterial?G:M).get(X.envMap||ue),Ie=X.vertexColors===!0&&!!W.attributes.color&&W.attributes.color.itemSize===4,Oe=!!W.attributes.tangent&&(!!X.normalMap||X.anisotropy>0),Te=!!W.morphAttributes.position,et=!!W.morphAttributes.normal,st=!!W.morphAttributes.color;let Ct=Wi;X.toneMapped&&(D===null||D.isXRRenderTarget===!0)&&(Ct=v.toneMapping);const Mt=W.morphAttributes.position||W.morphAttributes.normal||W.morphAttributes.color,nt=Mt!==void 0?Mt.length:0,Ae=be.get(X),kt=p.state.lights;if(ie===!0&&(Se===!0||T!==x)){const Zt=T===x&&X.id===S;ne.setState(X,T,Zt)}let ot=!1;X.version===Ae.__version?(Ae.needsLights&&Ae.lightsStateVersion!==kt.state.version||Ae.outputColorSpace!==ge||z.isBatchedMesh&&Ae.batching===!1||!z.isBatchedMesh&&Ae.batching===!0||z.isBatchedMesh&&Ae.batchingColor===!0&&z.colorTexture===null||z.isBatchedMesh&&Ae.batchingColor===!1&&z.colorTexture!==null||z.isInstancedMesh&&Ae.instancing===!1||!z.isInstancedMesh&&Ae.instancing===!0||z.isSkinnedMesh&&Ae.skinning===!1||!z.isSkinnedMesh&&Ae.skinning===!0||z.isInstancedMesh&&Ae.instancingColor===!0&&z.instanceColor===null||z.isInstancedMesh&&Ae.instancingColor===!1&&z.instanceColor!==null||z.isInstancedMesh&&Ae.instancingMorph===!0&&z.morphTexture===null||z.isInstancedMesh&&Ae.instancingMorph===!1&&z.morphTexture!==null||Ae.envMap!==we||X.fog===!0&&Ae.fog!==ee||Ae.numClippingPlanes!==void 0&&(Ae.numClippingPlanes!==ne.numPlanes||Ae.numIntersection!==ne.numIntersection)||Ae.vertexAlphas!==Ie||Ae.vertexTangents!==Oe||Ae.morphTargets!==Te||Ae.morphNormals!==et||Ae.morphColors!==st||Ae.toneMapping!==Ct||Ae.morphTargetsCount!==nt)&&(ot=!0):(ot=!0,Ae.__version=X.version);let Bn=Ae.currentProgram;ot===!0&&(Bn=mr(X,B,z));let Es=!1,vn=!1,Ao=!1;const _t=Bn.getUniforms(),Tn=Ae.uniforms;if(Ee.useProgram(Bn.program)&&(Es=!0,vn=!0,Ao=!0),X.id!==S&&(S=X.id,vn=!0),Es||x!==T){Ee.buffers.depth.getReversed()?(de.copy(T.projectionMatrix),Bm(de),zm(de),_t.setValue(I,"projectionMatrix",de)):_t.setValue(I,"projectionMatrix",T.projectionMatrix),_t.setValue(I,"viewMatrix",T.matrixWorldInverse);const cn=_t.map.cameraPosition;cn!==void 0&&cn.setValue(I,Ne.setFromMatrixPosition(T.matrixWorld)),Ye.logarithmicDepthBuffer&&_t.setValue(I,"logDepthBufFC",2/(Math.log(T.far+1)/Math.LN2)),(X.isMeshPhongMaterial||X.isMeshToonMaterial||X.isMeshLambertMaterial||X.isMeshBasicMaterial||X.isMeshStandardMaterial||X.isShaderMaterial)&&_t.setValue(I,"isOrthographic",T.isOrthographicCamera===!0),x!==T&&(x=T,vn=!0,Ao=!0)}if(z.isSkinnedMesh){_t.setOptional(I,z,"bindMatrix"),_t.setOptional(I,z,"bindMatrixInverse");const Zt=z.skeleton;Zt&&(Zt.boneTexture===null&&Zt.computeBoneTexture(),_t.setValue(I,"boneTexture",Zt.boneTexture,R))}z.isBatchedMesh&&(_t.setOptional(I,z,"batchingTexture"),_t.setValue(I,"batchingTexture",z._matricesTexture,R),_t.setOptional(I,z,"batchingIdTexture"),_t.setValue(I,"batchingIdTexture",z._indirectTexture,R),_t.setOptional(I,z,"batchingColorTexture"),z._colorsTexture!==null&&_t.setValue(I,"batchingColorTexture",z._colorsTexture,R));const An=W.morphAttributes;if((An.position!==void 0||An.normal!==void 0||An.color!==void 0)&&Le.update(z,W,Bn),(vn||Ae.receiveShadow!==z.receiveShadow)&&(Ae.receiveShadow=z.receiveShadow,_t.setValue(I,"receiveShadow",z.receiveShadow)),X.isMeshGouraudMaterial&&X.envMap!==null&&(Tn.envMap.value=we,Tn.flipEnvMap.value=we.isCubeTexture&&we.isRenderTargetTexture===!1?-1:1),X.isMeshStandardMaterial&&X.envMap===null&&B.environment!==null&&(Tn.envMapIntensity.value=B.environmentIntensity),vn&&(_t.setValue(I,"toneMappingExposure",v.toneMappingExposure),Ae.needsLights&&Cp(Tn,Ao),ee&&X.fog===!0&&he.refreshFogUniforms(Tn,ee),he.refreshMaterialUniforms(Tn,X,H,V,p.state.transmissionRenderTarget[T.id]),ga.upload(I,Cu(Ae),Tn,R)),X.isShaderMaterial&&X.uniformsNeedUpdate===!0&&(ga.upload(I,Cu(Ae),Tn,R),X.uniformsNeedUpdate=!1),X.isSpriteMaterial&&_t.setValue(I,"center",z.center),_t.setValue(I,"modelViewMatrix",z.modelViewMatrix),_t.setValue(I,"normalMatrix",z.normalMatrix),_t.setValue(I,"modelMatrix",z.matrixWorld),X.isShaderMaterial||X.isRawShaderMaterial){const Zt=X.uniformsGroups;for(let cn=0,Xa=Zt.length;cn<Xa;cn++){const ji=Zt[cn];U.update(ji,Bn),U.bind(ji,Bn)}}return Bn}function Cp(T,B){T.ambientLightColor.needsUpdate=B,T.lightProbe.needsUpdate=B,T.directionalLights.needsUpdate=B,T.directionalLightShadows.needsUpdate=B,T.pointLights.needsUpdate=B,T.pointLightShadows.needsUpdate=B,T.spotLights.needsUpdate=B,T.spotLightShadows.needsUpdate=B,T.rectAreaLights.needsUpdate=B,T.hemisphereLights.needsUpdate=B}function Rp(T){return T.isMeshLambertMaterial||T.isMeshToonMaterial||T.isMeshPhongMaterial||T.isMeshStandardMaterial||T.isShadowMaterial||T.isShaderMaterial&&T.lights===!0}this.getActiveCubeFace=function(){return E},this.getActiveMipmapLevel=function(){return C},this.getRenderTarget=function(){return D},this.setRenderTargetTextures=function(T,B,W){be.get(T.texture).__webglTexture=B,be.get(T.depthTexture).__webglTexture=W;const X=be.get(T);X.__hasExternalTextures=!0,X.__autoAllocateDepthBuffer=W===void 0,X.__autoAllocateDepthBuffer||$e.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),X.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(T,B){const W=be.get(T);W.__webglFramebuffer=B,W.__useDefaultFramebuffer=B===void 0},this.setRenderTarget=function(T,B=0,W=0){D=T,E=B,C=W;let X=!0,z=null,ee=!1,ue=!1;if(T){const we=be.get(T);if(we.__useDefaultFramebuffer!==void 0)Ee.bindFramebuffer(I.FRAMEBUFFER,null),X=!1;else if(we.__webglFramebuffer===void 0)R.setupRenderTarget(T);else if(we.__hasExternalTextures)R.rebindTextures(T,be.get(T.texture).__webglTexture,be.get(T.depthTexture).__webglTexture);else if(T.depthBuffer){const Te=T.depthTexture;if(we.__boundDepthTexture!==Te){if(Te!==null&&be.has(Te)&&(T.width!==Te.image.width||T.height!==Te.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");R.setupDepthRenderbuffer(T)}}const Ie=T.texture;(Ie.isData3DTexture||Ie.isDataArrayTexture||Ie.isCompressedArrayTexture)&&(ue=!0);const Oe=be.get(T).__webglFramebuffer;T.isWebGLCubeRenderTarget?(Array.isArray(Oe[B])?z=Oe[B][W]:z=Oe[B],ee=!0):T.samples>0&&R.useMultisampledRTT(T)===!1?z=be.get(T).__webglMultisampledFramebuffer:Array.isArray(Oe)?z=Oe[W]:z=Oe,P.copy(T.viewport),F.copy(T.scissor),O=T.scissorTest}else P.copy(ae).multiplyScalar(H).floor(),F.copy(ye).multiplyScalar(H).floor(),O=He;if(Ee.bindFramebuffer(I.FRAMEBUFFER,z)&&X&&Ee.drawBuffers(T,z),Ee.viewport(P),Ee.scissor(F),Ee.setScissorTest(O),ee){const we=be.get(T.texture);I.framebufferTexture2D(I.FRAMEBUFFER,I.COLOR_ATTACHMENT0,I.TEXTURE_CUBE_MAP_POSITIVE_X+B,we.__webglTexture,W)}else if(ue){const we=be.get(T.texture),Ie=B||0;I.framebufferTextureLayer(I.FRAMEBUFFER,I.COLOR_ATTACHMENT0,we.__webglTexture,W||0,Ie)}S=-1},this.readRenderTargetPixels=function(T,B,W,X,z,ee,ue){if(!(T&&T.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let ge=be.get(T).__webglFramebuffer;if(T.isWebGLCubeRenderTarget&&ue!==void 0&&(ge=ge[ue]),ge){Ee.bindFramebuffer(I.FRAMEBUFFER,ge);try{const we=T.texture,Ie=we.format,Oe=we.type;if(!Ye.textureFormatReadable(Ie)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!Ye.textureTypeReadable(Oe)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}B>=0&&B<=T.width-X&&W>=0&&W<=T.height-z&&I.readPixels(B,W,X,z,Be.convert(Ie),Be.convert(Oe),ee)}finally{const we=D!==null?be.get(D).__webglFramebuffer:null;Ee.bindFramebuffer(I.FRAMEBUFFER,we)}}},this.readRenderTargetPixelsAsync=async function(T,B,W,X,z,ee,ue){if(!(T&&T.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let ge=be.get(T).__webglFramebuffer;if(T.isWebGLCubeRenderTarget&&ue!==void 0&&(ge=ge[ue]),ge){const we=T.texture,Ie=we.format,Oe=we.type;if(!Ye.textureFormatReadable(Ie))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!Ye.textureTypeReadable(Oe))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(B>=0&&B<=T.width-X&&W>=0&&W<=T.height-z){Ee.bindFramebuffer(I.FRAMEBUFFER,ge);const Te=I.createBuffer();I.bindBuffer(I.PIXEL_PACK_BUFFER,Te),I.bufferData(I.PIXEL_PACK_BUFFER,ee.byteLength,I.STREAM_READ),I.readPixels(B,W,X,z,Be.convert(Ie),Be.convert(Oe),0);const et=D!==null?be.get(D).__webglFramebuffer:null;Ee.bindFramebuffer(I.FRAMEBUFFER,et);const st=I.fenceSync(I.SYNC_GPU_COMMANDS_COMPLETE,0);return I.flush(),await Fm(I,st,4),I.bindBuffer(I.PIXEL_PACK_BUFFER,Te),I.getBufferSubData(I.PIXEL_PACK_BUFFER,0,ee),I.deleteBuffer(Te),I.deleteSync(st),ee}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(T,B=null,W=0){T.isTexture!==!0&&(Gs("WebGLRenderer: copyFramebufferToTexture function signature has changed."),B=arguments[0]||null,T=arguments[1]);const X=Math.pow(2,-W),z=Math.floor(T.image.width*X),ee=Math.floor(T.image.height*X),ue=B!==null?B.x:0,ge=B!==null?B.y:0;R.setTexture2D(T,0),I.copyTexSubImage2D(I.TEXTURE_2D,W,0,0,ue,ge,z,ee),Ee.unbindTexture()};const Pp=I.createFramebuffer(),Dp=I.createFramebuffer();this.copyTextureToTexture=function(T,B,W=null,X=null,z=0,ee=null){T.isTexture!==!0&&(Gs("WebGLRenderer: copyTextureToTexture function signature has changed."),X=arguments[0]||null,T=arguments[1],B=arguments[2],ee=arguments[3]||0,W=null),ee===null&&(z!==0?(Gs("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),ee=z,z=0):ee=0);let ue,ge,we,Ie,Oe,Te,et,st,Ct;const Mt=T.isCompressedTexture?T.mipmaps[ee]:T.image;if(W!==null)ue=W.max.x-W.min.x,ge=W.max.y-W.min.y,we=W.isBox3?W.max.z-W.min.z:1,Ie=W.min.x,Oe=W.min.y,Te=W.isBox3?W.min.z:0;else{const An=Math.pow(2,-z);ue=Math.floor(Mt.width*An),ge=Math.floor(Mt.height*An),T.isDataArrayTexture?we=Mt.depth:T.isData3DTexture?we=Math.floor(Mt.depth*An):we=1,Ie=0,Oe=0,Te=0}X!==null?(et=X.x,st=X.y,Ct=X.z):(et=0,st=0,Ct=0);const nt=Be.convert(B.format),Ae=Be.convert(B.type);let kt;B.isData3DTexture?(R.setTexture3D(B,0),kt=I.TEXTURE_3D):B.isDataArrayTexture||B.isCompressedArrayTexture?(R.setTexture2DArray(B,0),kt=I.TEXTURE_2D_ARRAY):(R.setTexture2D(B,0),kt=I.TEXTURE_2D),I.pixelStorei(I.UNPACK_FLIP_Y_WEBGL,B.flipY),I.pixelStorei(I.UNPACK_PREMULTIPLY_ALPHA_WEBGL,B.premultiplyAlpha),I.pixelStorei(I.UNPACK_ALIGNMENT,B.unpackAlignment);const ot=I.getParameter(I.UNPACK_ROW_LENGTH),Bn=I.getParameter(I.UNPACK_IMAGE_HEIGHT),Es=I.getParameter(I.UNPACK_SKIP_PIXELS),vn=I.getParameter(I.UNPACK_SKIP_ROWS),Ao=I.getParameter(I.UNPACK_SKIP_IMAGES);I.pixelStorei(I.UNPACK_ROW_LENGTH,Mt.width),I.pixelStorei(I.UNPACK_IMAGE_HEIGHT,Mt.height),I.pixelStorei(I.UNPACK_SKIP_PIXELS,Ie),I.pixelStorei(I.UNPACK_SKIP_ROWS,Oe),I.pixelStorei(I.UNPACK_SKIP_IMAGES,Te);const _t=T.isDataArrayTexture||T.isData3DTexture,Tn=B.isDataArrayTexture||B.isData3DTexture;if(T.isDepthTexture){const An=be.get(T),Zt=be.get(B),cn=be.get(An.__renderTarget),Xa=be.get(Zt.__renderTarget);Ee.bindFramebuffer(I.READ_FRAMEBUFFER,cn.__webglFramebuffer),Ee.bindFramebuffer(I.DRAW_FRAMEBUFFER,Xa.__webglFramebuffer);for(let ji=0;ji<we;ji++)_t&&(I.framebufferTextureLayer(I.READ_FRAMEBUFFER,I.COLOR_ATTACHMENT0,be.get(T).__webglTexture,z,Te+ji),I.framebufferTextureLayer(I.DRAW_FRAMEBUFFER,I.COLOR_ATTACHMENT0,be.get(B).__webglTexture,ee,Ct+ji)),I.blitFramebuffer(Ie,Oe,ue,ge,et,st,ue,ge,I.DEPTH_BUFFER_BIT,I.NEAREST);Ee.bindFramebuffer(I.READ_FRAMEBUFFER,null),Ee.bindFramebuffer(I.DRAW_FRAMEBUFFER,null)}else if(z!==0||T.isRenderTargetTexture||be.has(T)){const An=be.get(T),Zt=be.get(B);Ee.bindFramebuffer(I.READ_FRAMEBUFFER,Pp),Ee.bindFramebuffer(I.DRAW_FRAMEBUFFER,Dp);for(let cn=0;cn<we;cn++)_t?I.framebufferTextureLayer(I.READ_FRAMEBUFFER,I.COLOR_ATTACHMENT0,An.__webglTexture,z,Te+cn):I.framebufferTexture2D(I.READ_FRAMEBUFFER,I.COLOR_ATTACHMENT0,I.TEXTURE_2D,An.__webglTexture,z),Tn?I.framebufferTextureLayer(I.DRAW_FRAMEBUFFER,I.COLOR_ATTACHMENT0,Zt.__webglTexture,ee,Ct+cn):I.framebufferTexture2D(I.DRAW_FRAMEBUFFER,I.COLOR_ATTACHMENT0,I.TEXTURE_2D,Zt.__webglTexture,ee),z!==0?I.blitFramebuffer(Ie,Oe,ue,ge,et,st,ue,ge,I.COLOR_BUFFER_BIT,I.NEAREST):Tn?I.copyTexSubImage3D(kt,ee,et,st,Ct+cn,Ie,Oe,ue,ge):I.copyTexSubImage2D(kt,ee,et,st,Ie,Oe,ue,ge);Ee.bindFramebuffer(I.READ_FRAMEBUFFER,null),Ee.bindFramebuffer(I.DRAW_FRAMEBUFFER,null)}else Tn?T.isDataTexture||T.isData3DTexture?I.texSubImage3D(kt,ee,et,st,Ct,ue,ge,we,nt,Ae,Mt.data):B.isCompressedArrayTexture?I.compressedTexSubImage3D(kt,ee,et,st,Ct,ue,ge,we,nt,Mt.data):I.texSubImage3D(kt,ee,et,st,Ct,ue,ge,we,nt,Ae,Mt):T.isDataTexture?I.texSubImage2D(I.TEXTURE_2D,ee,et,st,ue,ge,nt,Ae,Mt.data):T.isCompressedTexture?I.compressedTexSubImage2D(I.TEXTURE_2D,ee,et,st,Mt.width,Mt.height,nt,Mt.data):I.texSubImage2D(I.TEXTURE_2D,ee,et,st,ue,ge,nt,Ae,Mt);I.pixelStorei(I.UNPACK_ROW_LENGTH,ot),I.pixelStorei(I.UNPACK_IMAGE_HEIGHT,Bn),I.pixelStorei(I.UNPACK_SKIP_PIXELS,Es),I.pixelStorei(I.UNPACK_SKIP_ROWS,vn),I.pixelStorei(I.UNPACK_SKIP_IMAGES,Ao),ee===0&&B.generateMipmaps&&I.generateMipmap(kt),Ee.unbindTexture()},this.copyTextureToTexture3D=function(T,B,W=null,X=null,z=0){return T.isTexture!==!0&&(Gs("WebGLRenderer: copyTextureToTexture3D function signature has changed."),W=arguments[0]||null,X=arguments[1]||null,T=arguments[2],B=arguments[3],z=arguments[4]||0),Gs('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(T,B,W,X,z)},this.initRenderTarget=function(T){be.get(T).__webglFramebuffer===void 0&&R.setupRenderTarget(T)},this.initTexture=function(T){T.isCubeTexture?R.setTextureCube(T,0):T.isData3DTexture?R.setTexture3D(T,0):T.isDataArrayTexture||T.isCompressedArrayTexture?R.setTexture2DArray(T,0):R.setTexture2D(T,0),Ee.unbindTexture()},this.resetState=function(){E=0,C=0,D=null,Ee.reset(),ft.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return gi}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorspace=Ze._getDrawingBufferColorSpace(e),t.unpackColorSpace=Ze._getUnpackColorSpace()}}const Fy="modulepreload",By=function(i){return"/Cielo/"+i},Jd={},ys=function(e,t,n){let s=Promise.resolve();if(t&&t.length>0){let r=function(c){return Promise.all(c.map(u=>Promise.resolve(u).then(d=>({status:"fulfilled",value:d}),d=>({status:"rejected",reason:d}))))};document.getElementsByTagName("link");const a=document.querySelector("meta[property=csp-nonce]"),l=(a==null?void 0:a.nonce)||(a==null?void 0:a.getAttribute("nonce"));s=r(t.map(c=>{if(c=By(c),c in Jd)return;Jd[c]=!0;const u=c.endsWith(".css"),d=u?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${c}"]${d}`))return;const h=document.createElement("link");if(h.rel=u?"stylesheet":Fy,u||(h.as="script"),h.crossOrigin="",h.href=c,l&&h.setAttribute("nonce",l),document.head.appendChild(h),u)return new Promise((f,_)=>{h.addEventListener("load",f),h.addEventListener("error",()=>_(new Error(`Unable to preload CSS for ${c}`)))})}))}function o(r){const a=new Event("vite:preloadError",{cancelable:!0});if(a.payload=r,window.dispatchEvent(a),!a.defaultPrevented)throw r}return s.then(r=>{for(const a of r||[])a.status==="rejected"&&o(a.reason);return e().catch(o)})},Qd={type:"change"},du={type:"start"},Cf={type:"end"},jr=new wo,eh=new Oi,zy=Math.cos(70*_i.DEG2RAD),Pt=new A,un=2*Math.PI,dt={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6},Tl=1e-6;class th extends Sf{constructor(e,t=null){super(e,t),this.state=dt.NONE,this.enabled=!0,this.target=new A,this.cursor=new A,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:Ks.ROTATE,MIDDLE:Ks.DOLLY,RIGHT:Ks.PAN},this.touches={ONE:Vs.ROTATE,TWO:Vs.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._domElementKeyEvents=null,this._lastPosition=new A,this._lastQuaternion=new pt,this._lastTargetPosition=new A,this._quat=new pt().setFromUnitVectors(e.up,new A(0,1,0)),this._quatInverse=this._quat.clone().invert(),this._spherical=new bd,this._sphericalDelta=new bd,this._scale=1,this._panOffset=new A,this._rotateStart=new me,this._rotateEnd=new me,this._rotateDelta=new me,this._panStart=new me,this._panEnd=new me,this._panDelta=new me,this._dollyStart=new me,this._dollyEnd=new me,this._dollyDelta=new me,this._dollyDirection=new A,this._mouse=new me,this._performCursorZoom=!1,this._pointers=[],this._pointerPositions={},this._controlActive=!1,this._onPointerMove=Hy.bind(this),this._onPointerDown=ky.bind(this),this._onPointerUp=Gy.bind(this),this._onContextMenu=Yy.bind(this),this._onMouseWheel=Xy.bind(this),this._onKeyDown=qy.bind(this),this._onTouchStart=jy.bind(this),this._onTouchMove=$y.bind(this),this._onMouseDown=Vy.bind(this),this._onMouseMove=Wy.bind(this),this._interceptControlDown=Ky.bind(this),this._interceptControlUp=Zy.bind(this),this.domElement!==null&&this.connect(),this.update()}connect(){this.domElement.addEventListener("pointerdown",this._onPointerDown),this.domElement.addEventListener("pointercancel",this._onPointerUp),this.domElement.addEventListener("contextmenu",this._onContextMenu),this.domElement.addEventListener("wheel",this._onMouseWheel,{passive:!1}),this.domElement.getRootNode().addEventListener("keydown",this._interceptControlDown,{passive:!0,capture:!0}),this.domElement.style.touchAction="none"}disconnect(){this.domElement.removeEventListener("pointerdown",this._onPointerDown),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp),this.domElement.removeEventListener("pointercancel",this._onPointerUp),this.domElement.removeEventListener("wheel",this._onMouseWheel),this.domElement.removeEventListener("contextmenu",this._onContextMenu),this.stopListenToKeyEvents(),this.domElement.getRootNode().removeEventListener("keydown",this._interceptControlDown,{capture:!0}),this.domElement.style.touchAction="auto"}dispose(){this.disconnect()}getPolarAngle(){return this._spherical.phi}getAzimuthalAngle(){return this._spherical.theta}getDistance(){return this.object.position.distanceTo(this.target)}listenToKeyEvents(e){e.addEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=e}stopListenToKeyEvents(){this._domElementKeyEvents!==null&&(this._domElementKeyEvents.removeEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=null)}saveState(){this.target0.copy(this.target),this.position0.copy(this.object.position),this.zoom0=this.object.zoom}reset(){this.target.copy(this.target0),this.object.position.copy(this.position0),this.object.zoom=this.zoom0,this.object.updateProjectionMatrix(),this.dispatchEvent(Qd),this.update(),this.state=dt.NONE}update(e=null){const t=this.object.position;Pt.copy(t).sub(this.target),Pt.applyQuaternion(this._quat),this._spherical.setFromVector3(Pt),this.autoRotate&&this.state===dt.NONE&&this._rotateLeft(this._getAutoRotationAngle(e)),this.enableDamping?(this._spherical.theta+=this._sphericalDelta.theta*this.dampingFactor,this._spherical.phi+=this._sphericalDelta.phi*this.dampingFactor):(this._spherical.theta+=this._sphericalDelta.theta,this._spherical.phi+=this._sphericalDelta.phi);let n=this.minAzimuthAngle,s=this.maxAzimuthAngle;isFinite(n)&&isFinite(s)&&(n<-Math.PI?n+=un:n>Math.PI&&(n-=un),s<-Math.PI?s+=un:s>Math.PI&&(s-=un),n<=s?this._spherical.theta=Math.max(n,Math.min(s,this._spherical.theta)):this._spherical.theta=this._spherical.theta>(n+s)/2?Math.max(n,this._spherical.theta):Math.min(s,this._spherical.theta)),this._spherical.phi=Math.max(this.minPolarAngle,Math.min(this.maxPolarAngle,this._spherical.phi)),this._spherical.makeSafe(),this.enableDamping===!0?this.target.addScaledVector(this._panOffset,this.dampingFactor):this.target.add(this._panOffset),this.target.sub(this.cursor),this.target.clampLength(this.minTargetRadius,this.maxTargetRadius),this.target.add(this.cursor);let o=!1;if(this.zoomToCursor&&this._performCursorZoom||this.object.isOrthographicCamera)this._spherical.radius=this._clampDistance(this._spherical.radius);else{const r=this._spherical.radius;this._spherical.radius=this._clampDistance(this._spherical.radius*this._scale),o=r!=this._spherical.radius}if(Pt.setFromSpherical(this._spherical),Pt.applyQuaternion(this._quatInverse),t.copy(this.target).add(Pt),this.object.lookAt(this.target),this.enableDamping===!0?(this._sphericalDelta.theta*=1-this.dampingFactor,this._sphericalDelta.phi*=1-this.dampingFactor,this._panOffset.multiplyScalar(1-this.dampingFactor)):(this._sphericalDelta.set(0,0,0),this._panOffset.set(0,0,0)),this.zoomToCursor&&this._performCursorZoom){let r=null;if(this.object.isPerspectiveCamera){const a=Pt.length();r=this._clampDistance(a*this._scale);const l=a-r;this.object.position.addScaledVector(this._dollyDirection,l),this.object.updateMatrixWorld(),o=!!l}else if(this.object.isOrthographicCamera){const a=new A(this._mouse.x,this._mouse.y,0);a.unproject(this.object);const l=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),this.object.updateProjectionMatrix(),o=l!==this.object.zoom;const c=new A(this._mouse.x,this._mouse.y,0);c.unproject(this.object),this.object.position.sub(c).add(a),this.object.updateMatrixWorld(),r=Pt.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),this.zoomToCursor=!1;r!==null&&(this.screenSpacePanning?this.target.set(0,0,-1).transformDirection(this.object.matrix).multiplyScalar(r).add(this.object.position):(jr.origin.copy(this.object.position),jr.direction.set(0,0,-1).transformDirection(this.object.matrix),Math.abs(this.object.up.dot(jr.direction))<zy?this.object.lookAt(this.target):(eh.setFromNormalAndCoplanarPoint(this.object.up,this.target),jr.intersectPlane(eh,this.target))))}else if(this.object.isOrthographicCamera){const r=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),r!==this.object.zoom&&(this.object.updateProjectionMatrix(),o=!0)}return this._scale=1,this._performCursorZoom=!1,o||this._lastPosition.distanceToSquared(this.object.position)>Tl||8*(1-this._lastQuaternion.dot(this.object.quaternion))>Tl||this._lastTargetPosition.distanceToSquared(this.target)>Tl?(this.dispatchEvent(Qd),this._lastPosition.copy(this.object.position),this._lastQuaternion.copy(this.object.quaternion),this._lastTargetPosition.copy(this.target),!0):!1}_getAutoRotationAngle(e){return e!==null?un/60*this.autoRotateSpeed*e:un/60/60*this.autoRotateSpeed}_getZoomScale(e){const t=Math.abs(e*.01);return Math.pow(.95,this.zoomSpeed*t)}_rotateLeft(e){this._sphericalDelta.theta-=e}_rotateUp(e){this._sphericalDelta.phi-=e}_panLeft(e,t){Pt.setFromMatrixColumn(t,0),Pt.multiplyScalar(-e),this._panOffset.add(Pt)}_panUp(e,t){this.screenSpacePanning===!0?Pt.setFromMatrixColumn(t,1):(Pt.setFromMatrixColumn(t,0),Pt.crossVectors(this.object.up,Pt)),Pt.multiplyScalar(e),this._panOffset.add(Pt)}_pan(e,t){const n=this.domElement;if(this.object.isPerspectiveCamera){const s=this.object.position;Pt.copy(s).sub(this.target);let o=Pt.length();o*=Math.tan(this.object.fov/2*Math.PI/180),this._panLeft(2*e*o/n.clientHeight,this.object.matrix),this._panUp(2*t*o/n.clientHeight,this.object.matrix)}else this.object.isOrthographicCamera?(this._panLeft(e*(this.object.right-this.object.left)/this.object.zoom/n.clientWidth,this.object.matrix),this._panUp(t*(this.object.top-this.object.bottom)/this.object.zoom/n.clientHeight,this.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),this.enablePan=!1)}_dollyOut(e){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale/=e:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_dollyIn(e){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale*=e:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_updateZoomParameters(e,t){if(!this.zoomToCursor)return;this._performCursorZoom=!0;const n=this.domElement.getBoundingClientRect(),s=e-n.left,o=t-n.top,r=n.width,a=n.height;this._mouse.x=s/r*2-1,this._mouse.y=-(o/a)*2+1,this._dollyDirection.set(this._mouse.x,this._mouse.y,1).unproject(this.object).sub(this.object.position).normalize()}_clampDistance(e){return Math.max(this.minDistance,Math.min(this.maxDistance,e))}_handleMouseDownRotate(e){this._rotateStart.set(e.clientX,e.clientY)}_handleMouseDownDolly(e){this._updateZoomParameters(e.clientX,e.clientX),this._dollyStart.set(e.clientX,e.clientY)}_handleMouseDownPan(e){this._panStart.set(e.clientX,e.clientY)}_handleMouseMoveRotate(e){this._rotateEnd.set(e.clientX,e.clientY),this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const t=this.domElement;this._rotateLeft(un*this._rotateDelta.x/t.clientHeight),this._rotateUp(un*this._rotateDelta.y/t.clientHeight),this._rotateStart.copy(this._rotateEnd),this.update()}_handleMouseMoveDolly(e){this._dollyEnd.set(e.clientX,e.clientY),this._dollyDelta.subVectors(this._dollyEnd,this._dollyStart),this._dollyDelta.y>0?this._dollyOut(this._getZoomScale(this._dollyDelta.y)):this._dollyDelta.y<0&&this._dollyIn(this._getZoomScale(this._dollyDelta.y)),this._dollyStart.copy(this._dollyEnd),this.update()}_handleMouseMovePan(e){this._panEnd.set(e.clientX,e.clientY),this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd),this.update()}_handleMouseWheel(e){this._updateZoomParameters(e.clientX,e.clientY),e.deltaY<0?this._dollyIn(this._getZoomScale(e.deltaY)):e.deltaY>0&&this._dollyOut(this._getZoomScale(e.deltaY)),this.update()}_handleKeyDown(e){let t=!1;switch(e.code){case this.keys.UP:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateUp(un*this.rotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,this.keyPanSpeed),t=!0;break;case this.keys.BOTTOM:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateUp(-un*this.rotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,-this.keyPanSpeed),t=!0;break;case this.keys.LEFT:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateLeft(un*this.rotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(this.keyPanSpeed,0),t=!0;break;case this.keys.RIGHT:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateLeft(-un*this.rotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(-this.keyPanSpeed,0),t=!0;break}t&&(e.preventDefault(),this.update())}_handleTouchStartRotate(e){if(this._pointers.length===1)this._rotateStart.set(e.pageX,e.pageY);else{const t=this._getSecondPointerPosition(e),n=.5*(e.pageX+t.x),s=.5*(e.pageY+t.y);this._rotateStart.set(n,s)}}_handleTouchStartPan(e){if(this._pointers.length===1)this._panStart.set(e.pageX,e.pageY);else{const t=this._getSecondPointerPosition(e),n=.5*(e.pageX+t.x),s=.5*(e.pageY+t.y);this._panStart.set(n,s)}}_handleTouchStartDolly(e){const t=this._getSecondPointerPosition(e),n=e.pageX-t.x,s=e.pageY-t.y,o=Math.sqrt(n*n+s*s);this._dollyStart.set(0,o)}_handleTouchStartDollyPan(e){this.enableZoom&&this._handleTouchStartDolly(e),this.enablePan&&this._handleTouchStartPan(e)}_handleTouchStartDollyRotate(e){this.enableZoom&&this._handleTouchStartDolly(e),this.enableRotate&&this._handleTouchStartRotate(e)}_handleTouchMoveRotate(e){if(this._pointers.length==1)this._rotateEnd.set(e.pageX,e.pageY);else{const n=this._getSecondPointerPosition(e),s=.5*(e.pageX+n.x),o=.5*(e.pageY+n.y);this._rotateEnd.set(s,o)}this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const t=this.domElement;this._rotateLeft(un*this._rotateDelta.x/t.clientHeight),this._rotateUp(un*this._rotateDelta.y/t.clientHeight),this._rotateStart.copy(this._rotateEnd)}_handleTouchMovePan(e){if(this._pointers.length===1)this._panEnd.set(e.pageX,e.pageY);else{const t=this._getSecondPointerPosition(e),n=.5*(e.pageX+t.x),s=.5*(e.pageY+t.y);this._panEnd.set(n,s)}this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd)}_handleTouchMoveDolly(e){const t=this._getSecondPointerPosition(e),n=e.pageX-t.x,s=e.pageY-t.y,o=Math.sqrt(n*n+s*s);this._dollyEnd.set(0,o),this._dollyDelta.set(0,Math.pow(this._dollyEnd.y/this._dollyStart.y,this.zoomSpeed)),this._dollyOut(this._dollyDelta.y),this._dollyStart.copy(this._dollyEnd);const r=(e.pageX+t.x)*.5,a=(e.pageY+t.y)*.5;this._updateZoomParameters(r,a)}_handleTouchMoveDollyPan(e){this.enableZoom&&this._handleTouchMoveDolly(e),this.enablePan&&this._handleTouchMovePan(e)}_handleTouchMoveDollyRotate(e){this.enableZoom&&this._handleTouchMoveDolly(e),this.enableRotate&&this._handleTouchMoveRotate(e)}_addPointer(e){this._pointers.push(e.pointerId)}_removePointer(e){delete this._pointerPositions[e.pointerId];for(let t=0;t<this._pointers.length;t++)if(this._pointers[t]==e.pointerId){this._pointers.splice(t,1);return}}_isTrackingPointer(e){for(let t=0;t<this._pointers.length;t++)if(this._pointers[t]==e.pointerId)return!0;return!1}_trackPointer(e){let t=this._pointerPositions[e.pointerId];t===void 0&&(t=new me,this._pointerPositions[e.pointerId]=t),t.set(e.pageX,e.pageY)}_getSecondPointerPosition(e){const t=e.pointerId===this._pointers[0]?this._pointers[1]:this._pointers[0];return this._pointerPositions[t]}_customWheelEvent(e){const t=e.deltaMode,n={clientX:e.clientX,clientY:e.clientY,deltaY:e.deltaY};switch(t){case 1:n.deltaY*=16;break;case 2:n.deltaY*=100;break}return e.ctrlKey&&!this._controlActive&&(n.deltaY*=10),n}}function ky(i){this.enabled!==!1&&(this._pointers.length===0&&(this.domElement.setPointerCapture(i.pointerId),this.domElement.addEventListener("pointermove",this._onPointerMove),this.domElement.addEventListener("pointerup",this._onPointerUp)),!this._isTrackingPointer(i)&&(this._addPointer(i),i.pointerType==="touch"?this._onTouchStart(i):this._onMouseDown(i)))}function Hy(i){this.enabled!==!1&&(i.pointerType==="touch"?this._onTouchMove(i):this._onMouseMove(i))}function Gy(i){switch(this._removePointer(i),this._pointers.length){case 0:this.domElement.releasePointerCapture(i.pointerId),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp),this.dispatchEvent(Cf),this.state=dt.NONE;break;case 1:const e=this._pointers[0],t=this._pointerPositions[e];this._onTouchStart({pointerId:e,pageX:t.x,pageY:t.y});break}}function Vy(i){let e;switch(i.button){case 0:e=this.mouseButtons.LEFT;break;case 1:e=this.mouseButtons.MIDDLE;break;case 2:e=this.mouseButtons.RIGHT;break;default:e=-1}switch(e){case Ks.DOLLY:if(this.enableZoom===!1)return;this._handleMouseDownDolly(i),this.state=dt.DOLLY;break;case Ks.ROTATE:if(i.ctrlKey||i.metaKey||i.shiftKey){if(this.enablePan===!1)return;this._handleMouseDownPan(i),this.state=dt.PAN}else{if(this.enableRotate===!1)return;this._handleMouseDownRotate(i),this.state=dt.ROTATE}break;case Ks.PAN:if(i.ctrlKey||i.metaKey||i.shiftKey){if(this.enableRotate===!1)return;this._handleMouseDownRotate(i),this.state=dt.ROTATE}else{if(this.enablePan===!1)return;this._handleMouseDownPan(i),this.state=dt.PAN}break;default:this.state=dt.NONE}this.state!==dt.NONE&&this.dispatchEvent(du)}function Wy(i){switch(this.state){case dt.ROTATE:if(this.enableRotate===!1)return;this._handleMouseMoveRotate(i);break;case dt.DOLLY:if(this.enableZoom===!1)return;this._handleMouseMoveDolly(i);break;case dt.PAN:if(this.enablePan===!1)return;this._handleMouseMovePan(i);break}}function Xy(i){this.enabled===!1||this.enableZoom===!1||this.state!==dt.NONE||(i.preventDefault(),this.dispatchEvent(du),this._handleMouseWheel(this._customWheelEvent(i)),this.dispatchEvent(Cf))}function qy(i){this.enabled!==!1&&this._handleKeyDown(i)}function jy(i){switch(this._trackPointer(i),this._pointers.length){case 1:switch(this.touches.ONE){case Vs.ROTATE:if(this.enableRotate===!1)return;this._handleTouchStartRotate(i),this.state=dt.TOUCH_ROTATE;break;case Vs.PAN:if(this.enablePan===!1)return;this._handleTouchStartPan(i),this.state=dt.TOUCH_PAN;break;default:this.state=dt.NONE}break;case 2:switch(this.touches.TWO){case Vs.DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchStartDollyPan(i),this.state=dt.TOUCH_DOLLY_PAN;break;case Vs.DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchStartDollyRotate(i),this.state=dt.TOUCH_DOLLY_ROTATE;break;default:this.state=dt.NONE}break;default:this.state=dt.NONE}this.state!==dt.NONE&&this.dispatchEvent(du)}function $y(i){switch(this._trackPointer(i),this.state){case dt.TOUCH_ROTATE:if(this.enableRotate===!1)return;this._handleTouchMoveRotate(i),this.update();break;case dt.TOUCH_PAN:if(this.enablePan===!1)return;this._handleTouchMovePan(i),this.update();break;case dt.TOUCH_DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchMoveDollyPan(i),this.update();break;case dt.TOUCH_DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchMoveDollyRotate(i),this.update();break;default:this.state=dt.NONE}}function Yy(i){this.enabled!==!1&&i.preventDefault()}function Ky(i){i.key==="Control"&&(this._controlActive=!0,this.domElement.getRootNode().addEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}function Zy(i){i.key==="Control"&&(this._controlActive=!1,this.domElement.getRootNode().removeEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}const es=new wf,$t=new A,Pi=new A,vt=new pt,nh={X:new A(1,0,0),Y:new A(0,1,0),Z:new A(0,0,1)},Al={type:"change"},ih={type:"mouseDown",mode:null},sh={type:"mouseUp",mode:null},oh={type:"objectChange"};class Jy extends Sf{constructor(e,t=null){super(void 0,t);const n=new sw(this);this._root=n;const s=new ow;this._gizmo=s,n.add(s);const o=new rw;this._plane=o,n.add(o);const r=this;function a(w,v){let b=v;Object.defineProperty(r,w,{get:function(){return b!==void 0?b:v},set:function(E){b!==E&&(b=E,o[w]=E,s[w]=E,r.dispatchEvent({type:w+"-changed",value:E}),r.dispatchEvent(Al))}}),r[w]=v,o[w]=v,s[w]=v}a("camera",e),a("object",void 0),a("enabled",!0),a("axis",null),a("mode","translate"),a("translationSnap",null),a("rotationSnap",null),a("scaleSnap",null),a("space","world"),a("size",1),a("dragging",!1),a("showX",!0),a("showY",!0),a("showZ",!0),a("minX",-1/0),a("maxX",1/0),a("minY",-1/0),a("maxY",1/0),a("minZ",-1/0),a("maxZ",1/0);const l=new A,c=new A,u=new pt,d=new pt,h=new A,f=new pt,_=new A,g=new A,m=new A,p=0,y=new A;a("worldPosition",l),a("worldPositionStart",c),a("worldQuaternion",u),a("worldQuaternionStart",d),a("cameraPosition",h),a("cameraQuaternion",f),a("pointStart",_),a("pointEnd",g),a("rotationAxis",m),a("rotationAngle",p),a("eye",y),this._offset=new A,this._startNorm=new A,this._endNorm=new A,this._cameraScale=new A,this._parentPosition=new A,this._parentQuaternion=new pt,this._parentQuaternionInv=new pt,this._parentScale=new A,this._worldScaleStart=new A,this._worldQuaternionInv=new pt,this._worldScale=new A,this._positionStart=new A,this._quaternionStart=new pt,this._scaleStart=new A,this._getPointer=Qy.bind(this),this._onPointerDown=tw.bind(this),this._onPointerHover=ew.bind(this),this._onPointerMove=nw.bind(this),this._onPointerUp=iw.bind(this),t!==null&&this.connect()}connect(){this.domElement.addEventListener("pointerdown",this._onPointerDown),this.domElement.addEventListener("pointermove",this._onPointerHover),this.domElement.addEventListener("pointerup",this._onPointerUp),this.domElement.style.touchAction="none"}disconnect(){this.domElement.removeEventListener("pointerdown",this._onPointerDown),this.domElement.removeEventListener("pointermove",this._onPointerHover),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp),this.domElement.style.touchAction="auto"}getHelper(){return this._root}pointerHover(e){if(this.object===void 0||this.dragging===!0)return;e!==null&&es.setFromCamera(e,this.camera);const t=Cl(this._gizmo.picker[this.mode],es);t?this.axis=t.object.name:this.axis=null}pointerDown(e){if(!(this.object===void 0||this.dragging===!0||e!=null&&e.button!==0)&&this.axis!==null){e!==null&&es.setFromCamera(e,this.camera);const t=Cl(this._plane,es,!0);t&&(this.object.updateMatrixWorld(),this.object.parent.updateMatrixWorld(),this._positionStart.copy(this.object.position),this._quaternionStart.copy(this.object.quaternion),this._scaleStart.copy(this.object.scale),this.object.matrixWorld.decompose(this.worldPositionStart,this.worldQuaternionStart,this._worldScaleStart),this.pointStart.copy(t.point).sub(this.worldPositionStart)),this.dragging=!0,ih.mode=this.mode,this.dispatchEvent(ih)}}pointerMove(e){const t=this.axis,n=this.mode,s=this.object;let o=this.space;if(n==="scale"?o="local":(t==="E"||t==="XYZE"||t==="XYZ")&&(o="world"),s===void 0||t===null||this.dragging===!1||e!==null&&e.button!==-1)return;e!==null&&es.setFromCamera(e,this.camera);const r=Cl(this._plane,es,!0);if(r){if(this.pointEnd.copy(r.point).sub(this.worldPositionStart),n==="translate")this._offset.copy(this.pointEnd).sub(this.pointStart),o==="local"&&t!=="XYZ"&&this._offset.applyQuaternion(this._worldQuaternionInv),t.indexOf("X")===-1&&(this._offset.x=0),t.indexOf("Y")===-1&&(this._offset.y=0),t.indexOf("Z")===-1&&(this._offset.z=0),o==="local"&&t!=="XYZ"?this._offset.applyQuaternion(this._quaternionStart).divide(this._parentScale):this._offset.applyQuaternion(this._parentQuaternionInv).divide(this._parentScale),s.position.copy(this._offset).add(this._positionStart),this.translationSnap&&(o==="local"&&(s.position.applyQuaternion(vt.copy(this._quaternionStart).invert()),t.search("X")!==-1&&(s.position.x=Math.round(s.position.x/this.translationSnap)*this.translationSnap),t.search("Y")!==-1&&(s.position.y=Math.round(s.position.y/this.translationSnap)*this.translationSnap),t.search("Z")!==-1&&(s.position.z=Math.round(s.position.z/this.translationSnap)*this.translationSnap),s.position.applyQuaternion(this._quaternionStart)),o==="world"&&(s.parent&&s.position.add($t.setFromMatrixPosition(s.parent.matrixWorld)),t.search("X")!==-1&&(s.position.x=Math.round(s.position.x/this.translationSnap)*this.translationSnap),t.search("Y")!==-1&&(s.position.y=Math.round(s.position.y/this.translationSnap)*this.translationSnap),t.search("Z")!==-1&&(s.position.z=Math.round(s.position.z/this.translationSnap)*this.translationSnap),s.parent&&s.position.sub($t.setFromMatrixPosition(s.parent.matrixWorld)))),s.position.x=Math.max(this.minX,Math.min(this.maxX,s.position.x)),s.position.y=Math.max(this.minY,Math.min(this.maxY,s.position.y)),s.position.z=Math.max(this.minZ,Math.min(this.maxZ,s.position.z));else if(n==="scale"){if(t.search("XYZ")!==-1){let a=this.pointEnd.length()/this.pointStart.length();this.pointEnd.dot(this.pointStart)<0&&(a*=-1),Pi.set(a,a,a)}else $t.copy(this.pointStart),Pi.copy(this.pointEnd),$t.applyQuaternion(this._worldQuaternionInv),Pi.applyQuaternion(this._worldQuaternionInv),Pi.divide($t),t.search("X")===-1&&(Pi.x=1),t.search("Y")===-1&&(Pi.y=1),t.search("Z")===-1&&(Pi.z=1);s.scale.copy(this._scaleStart).multiply(Pi),this.scaleSnap&&(t.search("X")!==-1&&(s.scale.x=Math.round(s.scale.x/this.scaleSnap)*this.scaleSnap||this.scaleSnap),t.search("Y")!==-1&&(s.scale.y=Math.round(s.scale.y/this.scaleSnap)*this.scaleSnap||this.scaleSnap),t.search("Z")!==-1&&(s.scale.z=Math.round(s.scale.z/this.scaleSnap)*this.scaleSnap||this.scaleSnap))}else if(n==="rotate"){this._offset.copy(this.pointEnd).sub(this.pointStart);const a=20/this.worldPosition.distanceTo($t.setFromMatrixPosition(this.camera.matrixWorld));let l=!1;t==="XYZE"?(this.rotationAxis.copy(this._offset).cross(this.eye).normalize(),this.rotationAngle=this._offset.dot($t.copy(this.rotationAxis).cross(this.eye))*a):(t==="X"||t==="Y"||t==="Z")&&(this.rotationAxis.copy(nh[t]),$t.copy(nh[t]),o==="local"&&$t.applyQuaternion(this.worldQuaternion),$t.cross(this.eye),$t.length()===0?l=!0:this.rotationAngle=this._offset.dot($t.normalize())*a),(t==="E"||l)&&(this.rotationAxis.copy(this.eye),this.rotationAngle=this.pointEnd.angleTo(this.pointStart),this._startNorm.copy(this.pointStart).normalize(),this._endNorm.copy(this.pointEnd).normalize(),this.rotationAngle*=this._endNorm.cross(this._startNorm).dot(this.eye)<0?1:-1),this.rotationSnap&&(this.rotationAngle=Math.round(this.rotationAngle/this.rotationSnap)*this.rotationSnap),o==="local"&&t!=="E"&&t!=="XYZE"?(s.quaternion.copy(this._quaternionStart),s.quaternion.multiply(vt.setFromAxisAngle(this.rotationAxis,this.rotationAngle)).normalize()):(this.rotationAxis.applyQuaternion(this._parentQuaternionInv),s.quaternion.copy(vt.setFromAxisAngle(this.rotationAxis,this.rotationAngle)),s.quaternion.multiply(this._quaternionStart).normalize())}this.dispatchEvent(Al),this.dispatchEvent(oh)}}pointerUp(e){e!==null&&e.button!==0||(this.dragging&&this.axis!==null&&(sh.mode=this.mode,this.dispatchEvent(sh)),this.dragging=!1,this.axis=null)}dispose(){this.disconnect(),this._root.dispose()}attach(e){return this.object=e,this._root.visible=!0,this}detach(){return this.object=void 0,this.axis=null,this._root.visible=!1,this}reset(){this.enabled&&this.dragging&&(this.object.position.copy(this._positionStart),this.object.quaternion.copy(this._quaternionStart),this.object.scale.copy(this._scaleStart),this.dispatchEvent(Al),this.dispatchEvent(oh),this.pointStart.copy(this.pointEnd))}getRaycaster(){return es}getMode(){return this.mode}setMode(e){this.mode=e}setTranslationSnap(e){this.translationSnap=e}setRotationSnap(e){this.rotationSnap=e}setScaleSnap(e){this.scaleSnap=e}setSize(e){this.size=e}setSpace(e){this.space=e}}function Qy(i){if(this.domElement.ownerDocument.pointerLockElement)return{x:0,y:0,button:i.button};{const e=this.domElement.getBoundingClientRect();return{x:(i.clientX-e.left)/e.width*2-1,y:-(i.clientY-e.top)/e.height*2+1,button:i.button}}}function ew(i){if(this.enabled)switch(i.pointerType){case"mouse":case"pen":this.pointerHover(this._getPointer(i));break}}function tw(i){this.enabled&&(document.pointerLockElement||this.domElement.setPointerCapture(i.pointerId),this.domElement.addEventListener("pointermove",this._onPointerMove),this.pointerHover(this._getPointer(i)),this.pointerDown(this._getPointer(i)))}function nw(i){this.enabled&&this.pointerMove(this._getPointer(i))}function iw(i){this.enabled&&(this.domElement.releasePointerCapture(i.pointerId),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.pointerUp(this._getPointer(i)))}function Cl(i,e,t){const n=e.intersectObject(i,!0);for(let s=0;s<n.length;s++)if(n[s].object.visible||t)return n[s];return!1}const $r=new zt,ht=new A(0,1,0),rh=new A(0,0,0),ah=new De,Yr=new pt,_a=new pt,Kn=new A,lh=new De,Wo=new A(1,0,0),rs=new A(0,1,0),Xo=new A(0,0,1),Kr=new A,Uo=new A,Fo=new A;class sw extends mt{constructor(e){super(),this.isTransformControlsRoot=!0,this.controls=e,this.visible=!1}updateMatrixWorld(e){const t=this.controls;t.object!==void 0&&(t.object.updateMatrixWorld(),t.object.parent===null?console.error("TransformControls: The attached 3D object must be a part of the scene graph."):t.object.parent.matrixWorld.decompose(t._parentPosition,t._parentQuaternion,t._parentScale),t.object.matrixWorld.decompose(t.worldPosition,t.worldQuaternion,t._worldScale),t._parentQuaternionInv.copy(t._parentQuaternion).invert(),t._worldQuaternionInv.copy(t.worldQuaternion).invert()),t.camera.updateMatrixWorld(),t.camera.matrixWorld.decompose(t.cameraPosition,t.cameraQuaternion,t._cameraScale),t.camera.isOrthographicCamera?t.camera.getWorldDirection(t.eye).negate():t.eye.copy(t.cameraPosition).sub(t.worldPosition).normalize(),super.updateMatrixWorld(e)}dispose(){this.traverse(function(e){e.geometry&&e.geometry.dispose(),e.material&&e.material.dispose()})}}class ow extends mt{constructor(){super(),this.isTransformControlsGizmo=!0,this.type="TransformControlsGizmo";const e=new ti({depthTest:!1,depthWrite:!1,fog:!1,toneMapped:!1,transparent:!0}),t=new ps({depthTest:!1,depthWrite:!1,fog:!1,toneMapped:!1,transparent:!0}),n=e.clone();n.opacity=.15;const s=t.clone();s.opacity=.5;const o=e.clone();o.color.setHex(16711680);const r=e.clone();r.color.setHex(65280);const a=e.clone();a.color.setHex(255);const l=e.clone();l.color.setHex(16711680),l.opacity=.5;const c=e.clone();c.color.setHex(65280),c.opacity=.5;const u=e.clone();u.color.setHex(255),u.opacity=.5;const d=e.clone();d.opacity=.25;const h=e.clone();h.color.setHex(16776960),h.opacity=.25,e.clone().color.setHex(16776960);const _=e.clone();_.color.setHex(7895160);const g=new jt(0,.04,.1,12);g.translate(0,.05,0);const m=new Et(.08,.08,.08);m.translate(0,.04,0);const p=new xt;p.setAttribute("position",new je([0,0,0,1,0,0],3));const y=new jt(.0075,.0075,.5,3);y.translate(0,.25,0);function w(L,N){const V=new cs(L,.0075,3,64,N*Math.PI*2);return V.rotateY(Math.PI/2),V.rotateX(Math.PI/2),V}function v(){const L=new xt;return L.setAttribute("position",new je([0,0,0,1,1,1],3)),L}const b={X:[[new oe(g,o),[.5,0,0],[0,0,-Math.PI/2]],[new oe(g,o),[-.5,0,0],[0,0,Math.PI/2]],[new oe(y,o),[0,0,0],[0,0,-Math.PI/2]]],Y:[[new oe(g,r),[0,.5,0]],[new oe(g,r),[0,-.5,0],[Math.PI,0,0]],[new oe(y,r)]],Z:[[new oe(g,a),[0,0,.5],[Math.PI/2,0,0]],[new oe(g,a),[0,0,-.5],[-Math.PI/2,0,0]],[new oe(y,a),null,[Math.PI/2,0,0]]],XYZ:[[new oe(new Xs(.1,0),d.clone()),[0,0,0]]],XY:[[new oe(new Et(.15,.15,.01),u.clone()),[.15,.15,0]]],YZ:[[new oe(new Et(.15,.15,.01),l.clone()),[0,.15,.15],[0,Math.PI/2,0]]],XZ:[[new oe(new Et(.15,.15,.01),c.clone()),[.15,0,.15],[-Math.PI/2,0,0]]]},E={X:[[new oe(new jt(.2,0,.6,4),n),[.3,0,0],[0,0,-Math.PI/2]],[new oe(new jt(.2,0,.6,4),n),[-.3,0,0],[0,0,Math.PI/2]]],Y:[[new oe(new jt(.2,0,.6,4),n),[0,.3,0]],[new oe(new jt(.2,0,.6,4),n),[0,-.3,0],[0,0,Math.PI]]],Z:[[new oe(new jt(.2,0,.6,4),n),[0,0,.3],[Math.PI/2,0,0]],[new oe(new jt(.2,0,.6,4),n),[0,0,-.3],[-Math.PI/2,0,0]]],XYZ:[[new oe(new Xs(.2,0),n)]],XY:[[new oe(new Et(.2,.2,.01),n),[.15,.15,0]]],YZ:[[new oe(new Et(.2,.2,.01),n),[0,.15,.15],[0,Math.PI/2,0]]],XZ:[[new oe(new Et(.2,.2,.01),n),[.15,0,.15],[-Math.PI/2,0,0]]]},C={START:[[new oe(new Xs(.01,2),s),null,null,null,"helper"]],END:[[new oe(new Xs(.01,2),s),null,null,null,"helper"]],DELTA:[[new Vn(v(),s),null,null,null,"helper"]],X:[[new Vn(p,s.clone()),[-1e3,0,0],null,[1e6,1,1],"helper"]],Y:[[new Vn(p,s.clone()),[0,-1e3,0],[0,0,Math.PI/2],[1e6,1,1],"helper"]],Z:[[new Vn(p,s.clone()),[0,0,-1e3],[0,-Math.PI/2,0],[1e6,1,1],"helper"]]},D={XYZE:[[new oe(w(.5,1),_),null,[0,Math.PI/2,0]]],X:[[new oe(w(.5,.5),o)]],Y:[[new oe(w(.5,.5),r),null,[0,0,-Math.PI/2]]],Z:[[new oe(w(.5,.5),a),null,[0,Math.PI/2,0]]],E:[[new oe(w(.75,1),h),null,[0,Math.PI/2,0]]]},S={AXIS:[[new Vn(p,s.clone()),[-1e3,0,0],null,[1e6,1,1],"helper"]]},x={XYZE:[[new oe(new xs(.25,10,8),n)]],X:[[new oe(new cs(.5,.1,4,24),n),[0,0,0],[0,-Math.PI/2,-Math.PI/2]]],Y:[[new oe(new cs(.5,.1,4,24),n),[0,0,0],[Math.PI/2,0,0]]],Z:[[new oe(new cs(.5,.1,4,24),n),[0,0,0],[0,0,-Math.PI/2]]],E:[[new oe(new cs(.75,.1,2,24),n)]]},P={X:[[new oe(m,o),[.5,0,0],[0,0,-Math.PI/2]],[new oe(y,o),[0,0,0],[0,0,-Math.PI/2]],[new oe(m,o),[-.5,0,0],[0,0,Math.PI/2]]],Y:[[new oe(m,r),[0,.5,0]],[new oe(y,r)],[new oe(m,r),[0,-.5,0],[0,0,Math.PI]]],Z:[[new oe(m,a),[0,0,.5],[Math.PI/2,0,0]],[new oe(y,a),[0,0,0],[Math.PI/2,0,0]],[new oe(m,a),[0,0,-.5],[-Math.PI/2,0,0]]],XY:[[new oe(new Et(.15,.15,.01),u),[.15,.15,0]]],YZ:[[new oe(new Et(.15,.15,.01),l),[0,.15,.15],[0,Math.PI/2,0]]],XZ:[[new oe(new Et(.15,.15,.01),c),[.15,0,.15],[-Math.PI/2,0,0]]],XYZ:[[new oe(new Et(.1,.1,.1),d.clone())]]},F={X:[[new oe(new jt(.2,0,.6,4),n),[.3,0,0],[0,0,-Math.PI/2]],[new oe(new jt(.2,0,.6,4),n),[-.3,0,0],[0,0,Math.PI/2]]],Y:[[new oe(new jt(.2,0,.6,4),n),[0,.3,0]],[new oe(new jt(.2,0,.6,4),n),[0,-.3,0],[0,0,Math.PI]]],Z:[[new oe(new jt(.2,0,.6,4),n),[0,0,.3],[Math.PI/2,0,0]],[new oe(new jt(.2,0,.6,4),n),[0,0,-.3],[-Math.PI/2,0,0]]],XY:[[new oe(new Et(.2,.2,.01),n),[.15,.15,0]]],YZ:[[new oe(new Et(.2,.2,.01),n),[0,.15,.15],[0,Math.PI/2,0]]],XZ:[[new oe(new Et(.2,.2,.01),n),[.15,0,.15],[-Math.PI/2,0,0]]],XYZ:[[new oe(new Et(.2,.2,.2),n),[0,0,0]]]},O={X:[[new Vn(p,s.clone()),[-1e3,0,0],null,[1e6,1,1],"helper"]],Y:[[new Vn(p,s.clone()),[0,-1e3,0],[0,0,Math.PI/2],[1e6,1,1],"helper"]],Z:[[new Vn(p,s.clone()),[0,0,-1e3],[0,-Math.PI/2,0],[1e6,1,1],"helper"]]};function k(L){const N=new mt;for(const V in L)for(let H=L[V].length;H--;){const j=L[V][H][0].clone(),$=L[V][H][1],ae=L[V][H][2],ye=L[V][H][3],He=L[V][H][4];j.name=V,j.tag=He,$&&j.position.set($[0],$[1],$[2]),ae&&j.rotation.set(ae[0],ae[1],ae[2]),ye&&j.scale.set(ye[0],ye[1],ye[2]),j.updateMatrix();const Y=j.geometry.clone();Y.applyMatrix4(j.matrix),j.geometry=Y,j.renderOrder=1/0,j.position.set(0,0,0),j.rotation.set(0,0,0),j.scale.set(1,1,1),N.add(j)}return N}this.gizmo={},this.picker={},this.helper={},this.add(this.gizmo.translate=k(b)),this.add(this.gizmo.rotate=k(D)),this.add(this.gizmo.scale=k(P)),this.add(this.picker.translate=k(E)),this.add(this.picker.rotate=k(x)),this.add(this.picker.scale=k(F)),this.add(this.helper.translate=k(C)),this.add(this.helper.rotate=k(S)),this.add(this.helper.scale=k(O)),this.picker.translate.visible=!1,this.picker.rotate.visible=!1,this.picker.scale.visible=!1}updateMatrixWorld(e){const n=(this.mode==="scale"?"local":this.space)==="local"?this.worldQuaternion:_a;this.gizmo.translate.visible=this.mode==="translate",this.gizmo.rotate.visible=this.mode==="rotate",this.gizmo.scale.visible=this.mode==="scale",this.helper.translate.visible=this.mode==="translate",this.helper.rotate.visible=this.mode==="rotate",this.helper.scale.visible=this.mode==="scale";let s=[];s=s.concat(this.picker[this.mode].children),s=s.concat(this.gizmo[this.mode].children),s=s.concat(this.helper[this.mode].children);for(let o=0;o<s.length;o++){const r=s[o];r.visible=!0,r.rotation.set(0,0,0),r.position.copy(this.worldPosition);let a;if(this.camera.isOrthographicCamera?a=(this.camera.top-this.camera.bottom)/this.camera.zoom:a=this.worldPosition.distanceTo(this.cameraPosition)*Math.min(1.9*Math.tan(Math.PI*this.camera.fov/360)/this.camera.zoom,7),r.scale.set(1,1,1).multiplyScalar(a*this.size/4),r.tag==="helper"){r.visible=!1,r.name==="AXIS"?(r.visible=!!this.axis,this.axis==="X"&&(vt.setFromEuler($r.set(0,0,0)),r.quaternion.copy(n).multiply(vt),Math.abs(ht.copy(Wo).applyQuaternion(n).dot(this.eye))>.9&&(r.visible=!1)),this.axis==="Y"&&(vt.setFromEuler($r.set(0,0,Math.PI/2)),r.quaternion.copy(n).multiply(vt),Math.abs(ht.copy(rs).applyQuaternion(n).dot(this.eye))>.9&&(r.visible=!1)),this.axis==="Z"&&(vt.setFromEuler($r.set(0,Math.PI/2,0)),r.quaternion.copy(n).multiply(vt),Math.abs(ht.copy(Xo).applyQuaternion(n).dot(this.eye))>.9&&(r.visible=!1)),this.axis==="XYZE"&&(vt.setFromEuler($r.set(0,Math.PI/2,0)),ht.copy(this.rotationAxis),r.quaternion.setFromRotationMatrix(ah.lookAt(rh,ht,rs)),r.quaternion.multiply(vt),r.visible=this.dragging),this.axis==="E"&&(r.visible=!1)):r.name==="START"?(r.position.copy(this.worldPositionStart),r.visible=this.dragging):r.name==="END"?(r.position.copy(this.worldPosition),r.visible=this.dragging):r.name==="DELTA"?(r.position.copy(this.worldPositionStart),r.quaternion.copy(this.worldQuaternionStart),$t.set(1e-10,1e-10,1e-10).add(this.worldPositionStart).sub(this.worldPosition).multiplyScalar(-1),$t.applyQuaternion(this.worldQuaternionStart.clone().invert()),r.scale.copy($t),r.visible=this.dragging):(r.quaternion.copy(n),this.dragging?r.position.copy(this.worldPositionStart):r.position.copy(this.worldPosition),this.axis&&(r.visible=this.axis.search(r.name)!==-1));continue}r.quaternion.copy(n),this.mode==="translate"||this.mode==="scale"?(r.name==="X"&&Math.abs(ht.copy(Wo).applyQuaternion(n).dot(this.eye))>.99&&(r.scale.set(1e-10,1e-10,1e-10),r.visible=!1),r.name==="Y"&&Math.abs(ht.copy(rs).applyQuaternion(n).dot(this.eye))>.99&&(r.scale.set(1e-10,1e-10,1e-10),r.visible=!1),r.name==="Z"&&Math.abs(ht.copy(Xo).applyQuaternion(n).dot(this.eye))>.99&&(r.scale.set(1e-10,1e-10,1e-10),r.visible=!1),r.name==="XY"&&Math.abs(ht.copy(Xo).applyQuaternion(n).dot(this.eye))<.2&&(r.scale.set(1e-10,1e-10,1e-10),r.visible=!1),r.name==="YZ"&&Math.abs(ht.copy(Wo).applyQuaternion(n).dot(this.eye))<.2&&(r.scale.set(1e-10,1e-10,1e-10),r.visible=!1),r.name==="XZ"&&Math.abs(ht.copy(rs).applyQuaternion(n).dot(this.eye))<.2&&(r.scale.set(1e-10,1e-10,1e-10),r.visible=!1)):this.mode==="rotate"&&(Yr.copy(n),ht.copy(this.eye).applyQuaternion(vt.copy(n).invert()),r.name.search("E")!==-1&&r.quaternion.setFromRotationMatrix(ah.lookAt(this.eye,rh,rs)),r.name==="X"&&(vt.setFromAxisAngle(Wo,Math.atan2(-ht.y,ht.z)),vt.multiplyQuaternions(Yr,vt),r.quaternion.copy(vt)),r.name==="Y"&&(vt.setFromAxisAngle(rs,Math.atan2(ht.x,ht.z)),vt.multiplyQuaternions(Yr,vt),r.quaternion.copy(vt)),r.name==="Z"&&(vt.setFromAxisAngle(Xo,Math.atan2(ht.y,ht.x)),vt.multiplyQuaternions(Yr,vt),r.quaternion.copy(vt))),r.visible=r.visible&&(r.name.indexOf("X")===-1||this.showX),r.visible=r.visible&&(r.name.indexOf("Y")===-1||this.showY),r.visible=r.visible&&(r.name.indexOf("Z")===-1||this.showZ),r.visible=r.visible&&(r.name.indexOf("E")===-1||this.showX&&this.showY&&this.showZ),r.material._color=r.material._color||r.material.color.clone(),r.material._opacity=r.material._opacity||r.material.opacity,r.material.color.copy(r.material._color),r.material.opacity=r.material._opacity,this.enabled&&this.axis&&(r.name===this.axis||this.axis.split("").some(function(l){return r.name===l}))&&(r.material.color.setHex(16776960),r.material.opacity=1)}super.updateMatrixWorld(e)}}class rw extends oe{constructor(){super(new vs(1e5,1e5,2,2),new ti({visible:!1,wireframe:!0,side:pn,transparent:!0,opacity:.1,toneMapped:!1})),this.isTransformControlsPlane=!0,this.type="TransformControlsPlane"}updateMatrixWorld(e){let t=this.space;switch(this.position.copy(this.worldPosition),this.mode==="scale"&&(t="local"),Kr.copy(Wo).applyQuaternion(t==="local"?this.worldQuaternion:_a),Uo.copy(rs).applyQuaternion(t==="local"?this.worldQuaternion:_a),Fo.copy(Xo).applyQuaternion(t==="local"?this.worldQuaternion:_a),ht.copy(Uo),this.mode){case"translate":case"scale":switch(this.axis){case"X":ht.copy(this.eye).cross(Kr),Kn.copy(Kr).cross(ht);break;case"Y":ht.copy(this.eye).cross(Uo),Kn.copy(Uo).cross(ht);break;case"Z":ht.copy(this.eye).cross(Fo),Kn.copy(Fo).cross(ht);break;case"XY":Kn.copy(Fo);break;case"YZ":Kn.copy(Kr);break;case"XZ":ht.copy(Fo),Kn.copy(Uo);break;case"XYZ":case"E":Kn.set(0,0,0);break}break;case"rotate":default:Kn.set(0,0,0)}Kn.length()===0?this.quaternion.copy(this.cameraQuaternion):(lh.lookAt($t.set(0,0,0),Kn,ht),this.quaternion.setFromRotationMatrix(lh)),super.updateMatrixWorld(e)}}const ch=new Nn,Zr=new A;class To extends kg{constructor(){super(),this.isLineSegmentsGeometry=!0,this.type="LineSegmentsGeometry";const e=[-1,2,0,1,2,0,-1,1,0,1,1,0,-1,0,0,1,0,0,-1,-1,0,1,-1,0],t=[-1,2,1,2,-1,1,1,1,-1,-1,1,-1,-1,-2,1,-2],n=[0,2,1,2,3,1,2,4,3,4,5,3,4,6,5,6,7,5];this.setIndex(n),this.setAttribute("position",new je(e,3)),this.setAttribute("uv",new je(t,2))}applyMatrix4(e){const t=this.attributes.instanceStart,n=this.attributes.instanceEnd;return t!==void 0&&(t.applyMatrix4(e),n.applyMatrix4(e),t.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}setPositions(e){let t;e instanceof Float32Array?t=e:Array.isArray(e)&&(t=new Float32Array(e));const n=new to(t,6,1);return this.setAttribute("instanceStart",new In(n,3,0)),this.setAttribute("instanceEnd",new In(n,3,3)),this.instanceCount=this.attributes.instanceStart.count,this.computeBoundingBox(),this.computeBoundingSphere(),this}setColors(e){let t;e instanceof Float32Array?t=e:Array.isArray(e)&&(t=new Float32Array(e));const n=new to(t,6,1);return this.setAttribute("instanceColorStart",new In(n,3,0)),this.setAttribute("instanceColorEnd",new In(n,3,3)),this}fromWireframeGeometry(e){return this.setPositions(e.attributes.position.array),this}fromEdgesGeometry(e){return this.setPositions(e.attributes.position.array),this}fromMesh(e){return this.fromWireframeGeometry(new gg(e.geometry)),this}fromLineSegments(e){const t=e.geometry;return this.setPositions(t.attributes.position.array),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Nn);const e=this.attributes.instanceStart,t=this.attributes.instanceEnd;e!==void 0&&t!==void 0&&(this.boundingBox.setFromBufferAttribute(e),ch.setFromBufferAttribute(t),this.boundingBox.union(ch))}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Un),this.boundingBox===null&&this.computeBoundingBox();const e=this.attributes.instanceStart,t=this.attributes.instanceEnd;if(e!==void 0&&t!==void 0){const n=this.boundingSphere.center;this.boundingBox.getCenter(n);let s=0;for(let o=0,r=e.count;o<r;o++)Zr.fromBufferAttribute(e,o),s=Math.max(s,n.distanceToSquared(Zr)),Zr.fromBufferAttribute(t,o),s=Math.max(s,n.distanceToSquared(Zr));this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&console.error("THREE.LineSegmentsGeometry.computeBoundingSphere(): Computed radius is NaN. The instanced position data is likely to have NaN values.",this)}}toJSON(){}applyMatrix(e){return console.warn("THREE.LineSegmentsGeometry: applyMatrix() has been renamed to applyMatrix4()."),this.applyMatrix4(e)}}const aw=Object.freeze(Object.defineProperty({__proto__:null,LineSegmentsGeometry:To},Symbol.toStringTag,{value:"Module"}));re.line={worldUnits:{value:1},linewidth:{value:1},resolution:{value:new me(1,1)},dashOffset:{value:0},dashScale:{value:1},dashSize:{value:1},gapSize:{value:1}};fn.line={uniforms:Ss.merge([re.common,re.fog,re.line]),vertexShader:`
		#include <common>
		#include <color_pars_vertex>
		#include <fog_pars_vertex>
		#include <logdepthbuf_pars_vertex>
		#include <clipping_planes_pars_vertex>

		uniform float linewidth;
		uniform vec2 resolution;

		attribute vec3 instanceStart;
		attribute vec3 instanceEnd;

		attribute vec3 instanceColorStart;
		attribute vec3 instanceColorEnd;

		#ifdef WORLD_UNITS

			varying vec4 worldPos;
			varying vec3 worldStart;
			varying vec3 worldEnd;

			#ifdef USE_DASH

				varying vec2 vUv;

			#endif

		#else

			varying vec2 vUv;

		#endif

		#ifdef USE_DASH

			uniform float dashScale;
			attribute float instanceDistanceStart;
			attribute float instanceDistanceEnd;
			varying float vLineDistance;

		#endif

		void trimSegment( const in vec4 start, inout vec4 end ) {

			// trim end segment so it terminates between the camera plane and the near plane

			// conservative estimate of the near plane
			float a = projectionMatrix[ 2 ][ 2 ]; // 3nd entry in 3th column
			float b = projectionMatrix[ 3 ][ 2 ]; // 3nd entry in 4th column
			float nearEstimate = - 0.5 * b / a;

			float alpha = ( nearEstimate - start.z ) / ( end.z - start.z );

			end.xyz = mix( start.xyz, end.xyz, alpha );

		}

		void main() {

			#ifdef USE_COLOR

				vColor.xyz = ( position.y < 0.5 ) ? instanceColorStart : instanceColorEnd;

			#endif

			#ifdef USE_DASH

				vLineDistance = ( position.y < 0.5 ) ? dashScale * instanceDistanceStart : dashScale * instanceDistanceEnd;
				vUv = uv;

			#endif

			float aspect = resolution.x / resolution.y;

			// camera space
			vec4 start = modelViewMatrix * vec4( instanceStart, 1.0 );
			vec4 end = modelViewMatrix * vec4( instanceEnd, 1.0 );

			#ifdef WORLD_UNITS

				worldStart = start.xyz;
				worldEnd = end.xyz;

			#else

				vUv = uv;

			#endif

			// special case for perspective projection, and segments that terminate either in, or behind, the camera plane
			// clearly the gpu firmware has a way of addressing this issue when projecting into ndc space
			// but we need to perform ndc-space calculations in the shader, so we must address this issue directly
			// perhaps there is a more elegant solution -- WestLangley

			bool perspective = ( projectionMatrix[ 2 ][ 3 ] == - 1.0 ); // 4th entry in the 3rd column

			if ( perspective ) {

				if ( start.z < 0.0 && end.z >= 0.0 ) {

					trimSegment( start, end );

				} else if ( end.z < 0.0 && start.z >= 0.0 ) {

					trimSegment( end, start );

				}

			}

			// clip space
			vec4 clipStart = projectionMatrix * start;
			vec4 clipEnd = projectionMatrix * end;

			// ndc space
			vec3 ndcStart = clipStart.xyz / clipStart.w;
			vec3 ndcEnd = clipEnd.xyz / clipEnd.w;

			// direction
			vec2 dir = ndcEnd.xy - ndcStart.xy;

			// account for clip-space aspect ratio
			dir.x *= aspect;
			dir = normalize( dir );

			#ifdef WORLD_UNITS

				vec3 worldDir = normalize( end.xyz - start.xyz );
				vec3 tmpFwd = normalize( mix( start.xyz, end.xyz, 0.5 ) );
				vec3 worldUp = normalize( cross( worldDir, tmpFwd ) );
				vec3 worldFwd = cross( worldDir, worldUp );
				worldPos = position.y < 0.5 ? start: end;

				// height offset
				float hw = linewidth * 0.5;
				worldPos.xyz += position.x < 0.0 ? hw * worldUp : - hw * worldUp;

				// don't extend the line if we're rendering dashes because we
				// won't be rendering the endcaps
				#ifndef USE_DASH

					// cap extension
					worldPos.xyz += position.y < 0.5 ? - hw * worldDir : hw * worldDir;

					// add width to the box
					worldPos.xyz += worldFwd * hw;

					// endcaps
					if ( position.y > 1.0 || position.y < 0.0 ) {

						worldPos.xyz -= worldFwd * 2.0 * hw;

					}

				#endif

				// project the worldpos
				vec4 clip = projectionMatrix * worldPos;

				// shift the depth of the projected points so the line
				// segments overlap neatly
				vec3 clipPose = ( position.y < 0.5 ) ? ndcStart : ndcEnd;
				clip.z = clipPose.z * clip.w;

			#else

				vec2 offset = vec2( dir.y, - dir.x );
				// undo aspect ratio adjustment
				dir.x /= aspect;
				offset.x /= aspect;

				// sign flip
				if ( position.x < 0.0 ) offset *= - 1.0;

				// endcaps
				if ( position.y < 0.0 ) {

					offset += - dir;

				} else if ( position.y > 1.0 ) {

					offset += dir;

				}

				// adjust for linewidth
				offset *= linewidth;

				// adjust for clip-space to screen-space conversion // maybe resolution should be based on viewport ...
				offset /= resolution.y;

				// select end
				vec4 clip = ( position.y < 0.5 ) ? clipStart : clipEnd;

				// back to clip space
				offset *= clip.w;

				clip.xy += offset;

			#endif

			gl_Position = clip;

			vec4 mvPosition = ( position.y < 0.5 ) ? start : end; // this is an approximation

			#include <logdepthbuf_vertex>
			#include <clipping_planes_vertex>
			#include <fog_vertex>

		}
		`,fragmentShader:`
		uniform vec3 diffuse;
		uniform float opacity;
		uniform float linewidth;

		#ifdef USE_DASH

			uniform float dashOffset;
			uniform float dashSize;
			uniform float gapSize;

		#endif

		varying float vLineDistance;

		#ifdef WORLD_UNITS

			varying vec4 worldPos;
			varying vec3 worldStart;
			varying vec3 worldEnd;

			#ifdef USE_DASH

				varying vec2 vUv;

			#endif

		#else

			varying vec2 vUv;

		#endif

		#include <common>
		#include <color_pars_fragment>
		#include <fog_pars_fragment>
		#include <logdepthbuf_pars_fragment>
		#include <clipping_planes_pars_fragment>

		vec2 closestLineToLine(vec3 p1, vec3 p2, vec3 p3, vec3 p4) {

			float mua;
			float mub;

			vec3 p13 = p1 - p3;
			vec3 p43 = p4 - p3;

			vec3 p21 = p2 - p1;

			float d1343 = dot( p13, p43 );
			float d4321 = dot( p43, p21 );
			float d1321 = dot( p13, p21 );
			float d4343 = dot( p43, p43 );
			float d2121 = dot( p21, p21 );

			float denom = d2121 * d4343 - d4321 * d4321;

			float numer = d1343 * d4321 - d1321 * d4343;

			mua = numer / denom;
			mua = clamp( mua, 0.0, 1.0 );
			mub = ( d1343 + d4321 * ( mua ) ) / d4343;
			mub = clamp( mub, 0.0, 1.0 );

			return vec2( mua, mub );

		}

		void main() {

			#include <clipping_planes_fragment>

			#ifdef USE_DASH

				if ( vUv.y < - 1.0 || vUv.y > 1.0 ) discard; // discard endcaps

				if ( mod( vLineDistance + dashOffset, dashSize + gapSize ) > dashSize ) discard; // todo - FIX

			#endif

			float alpha = opacity;

			#ifdef WORLD_UNITS

				// Find the closest points on the view ray and the line segment
				vec3 rayEnd = normalize( worldPos.xyz ) * 1e5;
				vec3 lineDir = worldEnd - worldStart;
				vec2 params = closestLineToLine( worldStart, worldEnd, vec3( 0.0, 0.0, 0.0 ), rayEnd );

				vec3 p1 = worldStart + lineDir * params.x;
				vec3 p2 = rayEnd * params.y;
				vec3 delta = p1 - p2;
				float len = length( delta );
				float norm = len / linewidth;

				#ifndef USE_DASH

					#ifdef USE_ALPHA_TO_COVERAGE

						float dnorm = fwidth( norm );
						alpha = 1.0 - smoothstep( 0.5 - dnorm, 0.5 + dnorm, norm );

					#else

						if ( norm > 0.5 ) {

							discard;

						}

					#endif

				#endif

			#else

				#ifdef USE_ALPHA_TO_COVERAGE

					// artifacts appear on some hardware if a derivative is taken within a conditional
					float a = vUv.x;
					float b = ( vUv.y > 0.0 ) ? vUv.y - 1.0 : vUv.y + 1.0;
					float len2 = a * a + b * b;
					float dlen = fwidth( len2 );

					if ( abs( vUv.y ) > 1.0 ) {

						alpha = 1.0 - smoothstep( 1.0 - dlen, 1.0 + dlen, len2 );

					}

				#else

					if ( abs( vUv.y ) > 1.0 ) {

						float a = vUv.x;
						float b = ( vUv.y > 0.0 ) ? vUv.y - 1.0 : vUv.y + 1.0;
						float len2 = a * a + b * b;

						if ( len2 > 1.0 ) discard;

					}

				#endif

			#endif

			vec4 diffuseColor = vec4( diffuse, alpha );

			#include <logdepthbuf_fragment>
			#include <color_fragment>

			gl_FragColor = vec4( diffuseColor.rgb, alpha );

			#include <tonemapping_fragment>
			#include <colorspace_fragment>
			#include <fog_fragment>
			#include <premultiplied_alpha_fragment>

		}
		`};class Si extends bt{constructor(e){super({type:"LineMaterial",uniforms:Ss.clone(fn.line.uniforms),vertexShader:fn.line.vertexShader,fragmentShader:fn.line.fragmentShader,clipping:!0}),this.isLineMaterial=!0,this.setValues(e)}get color(){return this.uniforms.diffuse.value}set color(e){this.uniforms.diffuse.value=e}get worldUnits(){return"WORLD_UNITS"in this.defines}set worldUnits(e){e===!0?this.defines.WORLD_UNITS="":delete this.defines.WORLD_UNITS}get linewidth(){return this.uniforms.linewidth.value}set linewidth(e){this.uniforms.linewidth&&(this.uniforms.linewidth.value=e)}get dashed(){return"USE_DASH"in this.defines}set dashed(e){e===!0!==this.dashed&&(this.needsUpdate=!0),e===!0?this.defines.USE_DASH="":delete this.defines.USE_DASH}get dashScale(){return this.uniforms.dashScale.value}set dashScale(e){this.uniforms.dashScale.value=e}get dashSize(){return this.uniforms.dashSize.value}set dashSize(e){this.uniforms.dashSize.value=e}get dashOffset(){return this.uniforms.dashOffset.value}set dashOffset(e){this.uniforms.dashOffset.value=e}get gapSize(){return this.uniforms.gapSize.value}set gapSize(e){this.uniforms.gapSize.value=e}get opacity(){return this.uniforms.opacity.value}set opacity(e){this.uniforms&&(this.uniforms.opacity.value=e)}get resolution(){return this.uniforms.resolution.value}set resolution(e){this.uniforms.resolution.value.copy(e)}get alphaToCoverage(){return"USE_ALPHA_TO_COVERAGE"in this.defines}set alphaToCoverage(e){this.defines&&(e===!0!==this.alphaToCoverage&&(this.needsUpdate=!0),e===!0?this.defines.USE_ALPHA_TO_COVERAGE="":delete this.defines.USE_ALPHA_TO_COVERAGE)}}const Rl=new We,uh=new A,dh=new A,Ht=new We,Gt=new We,Zn=new We,Pl=new A,Dl=new De,Vt=new Qg,hh=new A,Jr=new Nn,Qr=new Un,Jn=new We;let Qn,ms;function fh(i,e,t){return Jn.set(0,0,-e,1).applyMatrix4(i.projectionMatrix),Jn.multiplyScalar(1/Jn.w),Jn.x=ms/t.width,Jn.y=ms/t.height,Jn.applyMatrix4(i.projectionMatrixInverse),Jn.multiplyScalar(1/Jn.w),Math.abs(Math.max(Jn.x,Jn.y))}function lw(i,e){const t=i.matrixWorld,n=i.geometry,s=n.attributes.instanceStart,o=n.attributes.instanceEnd,r=Math.min(n.instanceCount,s.count);for(let a=0,l=r;a<l;a++){Vt.start.fromBufferAttribute(s,a),Vt.end.fromBufferAttribute(o,a),Vt.applyMatrix4(t);const c=new A,u=new A;Qn.distanceSqToSegment(Vt.start,Vt.end,u,c),u.distanceTo(c)<ms*.5&&e.push({point:u,pointOnLine:c,distance:Qn.origin.distanceTo(u),object:i,face:null,faceIndex:a,uv:null,uv1:null})}}function cw(i,e,t){const n=e.projectionMatrix,o=i.material.resolution,r=i.matrixWorld,a=i.geometry,l=a.attributes.instanceStart,c=a.attributes.instanceEnd,u=Math.min(a.instanceCount,l.count),d=-e.near;Qn.at(1,Zn),Zn.w=1,Zn.applyMatrix4(e.matrixWorldInverse),Zn.applyMatrix4(n),Zn.multiplyScalar(1/Zn.w),Zn.x*=o.x/2,Zn.y*=o.y/2,Zn.z=0,Pl.copy(Zn),Dl.multiplyMatrices(e.matrixWorldInverse,r);for(let h=0,f=u;h<f;h++){if(Ht.fromBufferAttribute(l,h),Gt.fromBufferAttribute(c,h),Ht.w=1,Gt.w=1,Ht.applyMatrix4(Dl),Gt.applyMatrix4(Dl),Ht.z>d&&Gt.z>d)continue;if(Ht.z>d){const w=Ht.z-Gt.z,v=(Ht.z-d)/w;Ht.lerp(Gt,v)}else if(Gt.z>d){const w=Gt.z-Ht.z,v=(Gt.z-d)/w;Gt.lerp(Ht,v)}Ht.applyMatrix4(n),Gt.applyMatrix4(n),Ht.multiplyScalar(1/Ht.w),Gt.multiplyScalar(1/Gt.w),Ht.x*=o.x/2,Ht.y*=o.y/2,Gt.x*=o.x/2,Gt.y*=o.y/2,Vt.start.copy(Ht),Vt.start.z=0,Vt.end.copy(Gt),Vt.end.z=0;const g=Vt.closestPointToPointParameter(Pl,!0);Vt.at(g,hh);const m=_i.lerp(Ht.z,Gt.z,g),p=m>=-1&&m<=1,y=Pl.distanceTo(hh)<ms*.5;if(p&&y){Vt.start.fromBufferAttribute(l,h),Vt.end.fromBufferAttribute(c,h),Vt.start.applyMatrix4(r),Vt.end.applyMatrix4(r);const w=new A,v=new A;Qn.distanceSqToSegment(Vt.start,Vt.end,v,w),t.push({point:v,pointOnLine:w,distance:Qn.origin.distanceTo(v),object:i,face:null,faceIndex:h,uv:null,uv1:null})}}}class rr extends oe{constructor(e=new To,t=new Si({color:Math.random()*16777215})){super(e,t),this.isLineSegments2=!0,this.type="LineSegments2"}computeLineDistances(){const e=this.geometry,t=e.attributes.instanceStart,n=e.attributes.instanceEnd,s=new Float32Array(2*t.count);for(let r=0,a=0,l=t.count;r<l;r++,a+=2)uh.fromBufferAttribute(t,r),dh.fromBufferAttribute(n,r),s[a]=a===0?0:s[a-1],s[a+1]=s[a]+uh.distanceTo(dh);const o=new to(s,2,1);return e.setAttribute("instanceDistanceStart",new In(o,1,0)),e.setAttribute("instanceDistanceEnd",new In(o,1,1)),this}raycast(e,t){const n=this.material.worldUnits,s=e.camera;s===null&&!n&&console.error('LineSegments2: "Raycaster.camera" needs to be set in order to raycast against LineSegments2 while worldUnits is set to false.');const o=e.params.Line2!==void 0&&e.params.Line2.threshold||0;Qn=e.ray;const r=this.matrixWorld,a=this.geometry,l=this.material;ms=l.linewidth+o,a.boundingSphere===null&&a.computeBoundingSphere(),Qr.copy(a.boundingSphere).applyMatrix4(r);let c;if(n)c=ms*.5;else{const d=Math.max(s.near,Qr.distanceToPoint(Qn.origin));c=fh(s,d,l.resolution)}if(Qr.radius+=c,Qn.intersectsSphere(Qr)===!1)return;a.boundingBox===null&&a.computeBoundingBox(),Jr.copy(a.boundingBox).applyMatrix4(r);let u;if(n)u=ms*.5;else{const d=Math.max(s.near,Jr.distanceToPoint(Qn.origin));u=fh(s,d,l.resolution)}Jr.expandByScalar(u),Qn.intersectsBox(Jr)!==!1&&(n?lw(this,t):cw(this,s,t))}onBeforeRender(e){const t=this.material.uniforms;t&&t.resolution&&(e.getViewport(Rl),this.material.uniforms.resolution.value.set(Rl.z,Rl.w))}}const uw=Object.freeze(Object.defineProperty({__proto__:null,LineSegments2:rr},Symbol.toStringTag,{value:"Module"}));new _g({transparent:!1,depthTest:!0,wireframe:!1,opacity:.8});new So({color:new se(15883520),transparent:!0,depthTest:!0,wireframe:!1,opacity:.3});new _f({color:new se("orange"),shininess:100,emissive:0,specular:1118481,transparent:!1,wireframe:!1,opacity:.5});new xg({color:"yellow",linewidth:1,scale:1,dashSize:.2,gapSize:.1});let Ta=new Si({color:14406495,linewidth:.025,dashed:!0,dashSize:.07,gapSize:.04,worldUnits:!0,alphaToCoverage:!0}),Aa=new Si({color:12603197,linewidth:.025,dashed:!0,dashSize:.07,gapSize:.04,worldUnits:!0,alphaToCoverage:!0}),Ca=new Si({color:8159442,linewidth:.025,dashed:!0,dashSize:.07,gapSize:.04,worldUnits:!0,alphaToCoverage:!0}),Ra=new Si({color:4626323,linewidth:.025,dashed:!0,dashSize:.07,gapSize:.04,worldUnits:!0,alphaToCoverage:!0}),ph=new Si({color:"black",linewidth:.012,worldUnits:!0,alphaToCoverage:!0,visible:!1});new bt({uniforms:{lightDirection:{value:new A(1,1,1).normalize()},coolColor:{value:new se(11393254)},warmColor:{value:new se(16740193)},surfaceColor:{value:new se(16777215)}},vertexShader:`
        varying vec3 vNormal;
        varying vec3 vPosition;

        void main() {
            vNormal = normalize(normalMatrix * normal);
            vPosition = (modelViewMatrix * vec4(position, 1.0)).xyz;
            gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
        }
    `,fragmentShader:`
        uniform vec3 lightDirection;
        uniform vec3 coolColor;
        uniform vec3 warmColor;
        uniform vec3 surfaceColor;

        varying vec3 vNormal;
        varying vec3 vPosition;

        void main() {
            // Calcola l'intensità della luce
            vec3 N = normalize(vNormal);
            vec3 L = normalize(lightDirection);

            // Intensity tra 0 e 1
            float intensity = dot(N, L) * 0.5 + 0.5;

            // Interpolazione tra colori freddo e caldo
            vec3 goochColor = mix(coolColor, warmColor, intensity);

            // Combina con il colore della superficie
            vec3 finalColor = surfaceColor * goochColor;

            gl_FragColor = vec4(finalColor, 1.0); // Colore finale
        }
    `});let dn=new bt({uniforms:{lightDirection:{value:new A(1,1,1).normalize()},coolColor:{value:new se(30719)},warmColor:{value:new se(16755200)},surfaceColor:{value:new se(16777215)},opacity:{value:0}},transparent:!0,vertexShader:`
        varying vec3 vNormal;
        varying vec3 vPosition;

        void main() {
            vNormal = normalize(normalMatrix * normal);
            vPosition = (modelViewMatrix * vec4(position, 1.0)).xyz;
            gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
        }
    `,fragmentShader:`
        uniform vec3 lightDirection;
        uniform vec3 coolColor;
        uniform vec3 warmColor;
        uniform vec3 surfaceColor;
        uniform float opacity; // Uniforme per l'opacità

        varying vec3 vNormal;
        varying vec3 vPosition;

        void main() {
            // Calcola l'intensità della luce
            vec3 N = normalize(vNormal);
            vec3 L = normalize(lightDirection);

            // Intensity tra 0 e 1
            float intensity = dot(N, L) * 0.5 + 0.5;

            // Interpolazione tra colori freddo e caldo
            vec3 goochColor = mix(coolColor, warmColor, intensity);

            // Combina con il colore della superficie
            vec3 finalColor = surfaceColor * goochColor;

            gl_FragColor = vec4(finalColor, opacity); // Colore finale con opacità
        }
    `}),pi=new bt({uniforms:{lightDirection:{value:new A(1,1,1).normalize()},coolColor:{value:new se(2696480)},warmColor:{value:new se(16316145)},surfaceColor:{value:new se(16777215)}},vertexShader:`
        varying vec3 vNormal;
        varying vec3 vPosition;

        void main() {
            vNormal = normalize(normalMatrix * normal);
            vPosition = (modelViewMatrix * vec4(position, 1.0)).xyz;
            gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
        }
    `,fragmentShader:`
        uniform vec3 lightDirection;
        uniform vec3 coolColor;
        uniform vec3 warmColor;
        uniform vec3 surfaceColor;

        varying vec3 vNormal;
        varying vec3 vPosition;

        void main() {
            // Calcola l'intensità della luce
            vec3 N = normalize(vNormal);
            vec3 L = normalize(lightDirection);

            // Intensity tra 0 e 1
            float intensity = dot(N, L) * 0.5 + 0.5;

            // Interpolazione tra colori freddo e caldo
            vec3 goochColor = mix(coolColor, warmColor, intensity);

            // Combina con il colore della superficie
            vec3 finalColor = surfaceColor * goochColor;

            gl_FragColor = vec4(finalColor, 1.0); // Colore finale
        }
    `}),jn=new bt({uniforms:{lightDirection:{value:new A(1,1,1).normalize()},coolColor:{value:new se(3158064)},warmColor:{value:new se(0)},surfaceColor:{value:new se(16777215)}},vertexShader:`
        varying vec3 vNormal;
        varying vec3 vPosition;

        void main() {
            vNormal = normalize(normalMatrix * normal);
            vPosition = (modelViewMatrix * vec4(position, 1.0)).xyz;
            gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
        }
    `,fragmentShader:`
        uniform vec3 lightDirection;
        uniform vec3 coolColor;
        uniform vec3 warmColor;
        uniform vec3 surfaceColor;

        varying vec3 vNormal;
        varying vec3 vPosition;

        void main() {
            // Calcola l'intensità della luce
            vec3 N = normalize(vNormal);
            vec3 L = normalize(lightDirection);

            // Intensity tra 0 e 1
            float intensity = dot(N, L) * 0.5 + 0.5;

            // Interpolazione tra colori freddo e caldo
            vec3 goochColor = mix(coolColor, warmColor, intensity);

            // Combina con il colore della superficie
            vec3 finalColor = surfaceColor * goochColor;

            gl_FragColor = vec4(finalColor, 1.0); // Colore finale
        }
    `});const dw=/^[og]\s*(.+)?/,hw=/^mtllib /,fw=/^usemtl /,pw=/^usemap /,mh=/\s+/,gh=new A,Ll=new A,_h=new A,vh=new A,Rn=new A,ea=new se;function mw(){const i={objects:[],object:{},vertices:[],normals:[],colors:[],uvs:[],materials:{},materialLibraries:[],startObject:function(e,t){if(this.object&&this.object.fromDeclaration===!1){this.object.name=e,this.object.fromDeclaration=t!==!1;return}const n=this.object&&typeof this.object.currentMaterial=="function"?this.object.currentMaterial():void 0;if(this.object&&typeof this.object._finalize=="function"&&this.object._finalize(!0),this.object={name:e||"",fromDeclaration:t!==!1,geometry:{vertices:[],normals:[],colors:[],uvs:[],hasUVIndices:!1},materials:[],smooth:!0,startMaterial:function(s,o){const r=this._finalize(!1);r&&(r.inherited||r.groupCount<=0)&&this.materials.splice(r.index,1);const a={index:this.materials.length,name:s||"",mtllib:Array.isArray(o)&&o.length>0?o[o.length-1]:"",smooth:r!==void 0?r.smooth:this.smooth,groupStart:r!==void 0?r.groupEnd:0,groupEnd:-1,groupCount:-1,inherited:!1,clone:function(l){const c={index:typeof l=="number"?l:this.index,name:this.name,mtllib:this.mtllib,smooth:this.smooth,groupStart:0,groupEnd:-1,groupCount:-1,inherited:!1};return c.clone=this.clone.bind(c),c}};return this.materials.push(a),a},currentMaterial:function(){if(this.materials.length>0)return this.materials[this.materials.length-1]},_finalize:function(s){const o=this.currentMaterial();if(o&&o.groupEnd===-1&&(o.groupEnd=this.geometry.vertices.length/3,o.groupCount=o.groupEnd-o.groupStart,o.inherited=!1),s&&this.materials.length>1)for(let r=this.materials.length-1;r>=0;r--)this.materials[r].groupCount<=0&&this.materials.splice(r,1);return s&&this.materials.length===0&&this.materials.push({name:"",smooth:this.smooth}),o}},n&&n.name&&typeof n.clone=="function"){const s=n.clone(0);s.inherited=!0,this.object.materials.push(s)}this.objects.push(this.object)},finalize:function(){this.object&&typeof this.object._finalize=="function"&&this.object._finalize(!0)},parseVertexIndex:function(e,t){const n=parseInt(e,10);return(n>=0?n-1:n+t/3)*3},parseNormalIndex:function(e,t){const n=parseInt(e,10);return(n>=0?n-1:n+t/3)*3},parseUVIndex:function(e,t){const n=parseInt(e,10);return(n>=0?n-1:n+t/2)*2},addVertex:function(e,t,n){const s=this.vertices,o=this.object.geometry.vertices;o.push(s[e+0],s[e+1],s[e+2]),o.push(s[t+0],s[t+1],s[t+2]),o.push(s[n+0],s[n+1],s[n+2])},addVertexPoint:function(e){const t=this.vertices;this.object.geometry.vertices.push(t[e+0],t[e+1],t[e+2])},addVertexLine:function(e){const t=this.vertices;this.object.geometry.vertices.push(t[e+0],t[e+1],t[e+2])},addNormal:function(e,t,n){const s=this.normals,o=this.object.geometry.normals;o.push(s[e+0],s[e+1],s[e+2]),o.push(s[t+0],s[t+1],s[t+2]),o.push(s[n+0],s[n+1],s[n+2])},addFaceNormal:function(e,t,n){const s=this.vertices,o=this.object.geometry.normals;gh.fromArray(s,e),Ll.fromArray(s,t),_h.fromArray(s,n),Rn.subVectors(_h,Ll),vh.subVectors(gh,Ll),Rn.cross(vh),Rn.normalize(),o.push(Rn.x,Rn.y,Rn.z),o.push(Rn.x,Rn.y,Rn.z),o.push(Rn.x,Rn.y,Rn.z)},addColor:function(e,t,n){const s=this.colors,o=this.object.geometry.colors;s[e]!==void 0&&o.push(s[e+0],s[e+1],s[e+2]),s[t]!==void 0&&o.push(s[t+0],s[t+1],s[t+2]),s[n]!==void 0&&o.push(s[n+0],s[n+1],s[n+2])},addUV:function(e,t,n){const s=this.uvs,o=this.object.geometry.uvs;o.push(s[e+0],s[e+1]),o.push(s[t+0],s[t+1]),o.push(s[n+0],s[n+1])},addDefaultUV:function(){const e=this.object.geometry.uvs;e.push(0,0),e.push(0,0),e.push(0,0)},addUVLine:function(e){const t=this.uvs;this.object.geometry.uvs.push(t[e+0],t[e+1])},addFace:function(e,t,n,s,o,r,a,l,c){const u=this.vertices.length;let d=this.parseVertexIndex(e,u),h=this.parseVertexIndex(t,u),f=this.parseVertexIndex(n,u);if(this.addVertex(d,h,f),this.addColor(d,h,f),a!==void 0&&a!==""){const _=this.normals.length;d=this.parseNormalIndex(a,_),h=this.parseNormalIndex(l,_),f=this.parseNormalIndex(c,_),this.addNormal(d,h,f)}else this.addFaceNormal(d,h,f);if(s!==void 0&&s!==""){const _=this.uvs.length;d=this.parseUVIndex(s,_),h=this.parseUVIndex(o,_),f=this.parseUVIndex(r,_),this.addUV(d,h,f),this.object.geometry.hasUVIndices=!0}else this.addDefaultUV()},addPointGeometry:function(e){this.object.geometry.type="Points";const t=this.vertices.length;for(let n=0,s=e.length;n<s;n++){const o=this.parseVertexIndex(e[n],t);this.addVertexPoint(o),this.addColor(o)}},addLineGeometry:function(e,t){this.object.geometry.type="Line";const n=this.vertices.length,s=this.uvs.length;for(let o=0,r=e.length;o<r;o++)this.addVertexLine(this.parseVertexIndex(e[o],n));for(let o=0,r=t.length;o<r;o++)this.addUVLine(this.parseUVIndex(t[o],s))}};return i.startObject("",!1),i}class Rf extends Ms{constructor(e){super(e),this.materials=null}load(e,t,n,s){const o=this,r=new ru(this.manager);r.setPath(this.path),r.setRequestHeader(this.requestHeader),r.setWithCredentials(this.withCredentials),r.load(e,function(a){try{t(o.parse(a))}catch(l){s?s(l):console.error(l),o.manager.itemError(e)}},n,s)}setMaterials(e){return this.materials=e,this}parse(e){const t=new mw;e.indexOf(`\r
`)!==-1&&(e=e.replace(/\r\n/g,`
`)),e.indexOf(`\\
`)!==-1&&(e=e.replace(/\\\n/g,""));const n=e.split(`
`);let s=[];for(let a=0,l=n.length;a<l;a++){const c=n[a].trimStart();if(c.length===0)continue;const u=c.charAt(0);if(u!=="#")if(u==="v"){const d=c.split(mh);switch(d[0]){case"v":t.vertices.push(parseFloat(d[1]),parseFloat(d[2]),parseFloat(d[3])),d.length>=7?(ea.setRGB(parseFloat(d[4]),parseFloat(d[5]),parseFloat(d[6]),Ft),t.colors.push(ea.r,ea.g,ea.b)):t.colors.push(void 0,void 0,void 0);break;case"vn":t.normals.push(parseFloat(d[1]),parseFloat(d[2]),parseFloat(d[3]));break;case"vt":t.uvs.push(parseFloat(d[1]),parseFloat(d[2]));break}}else if(u==="f"){const h=c.slice(1).trim().split(mh),f=[];for(let g=0,m=h.length;g<m;g++){const p=h[g];if(p.length>0){const y=p.split("/");f.push(y)}}const _=f[0];for(let g=1,m=f.length-1;g<m;g++){const p=f[g],y=f[g+1];t.addFace(_[0],p[0],y[0],_[1],p[1],y[1],_[2],p[2],y[2])}}else if(u==="l"){const d=c.substring(1).trim().split(" ");let h=[];const f=[];if(c.indexOf("/")===-1)h=d;else for(let _=0,g=d.length;_<g;_++){const m=d[_].split("/");m[0]!==""&&h.push(m[0]),m[1]!==""&&f.push(m[1])}t.addLineGeometry(h,f)}else if(u==="p"){const h=c.slice(1).trim().split(" ");t.addPointGeometry(h)}else if((s=dw.exec(c))!==null){const d=(" "+s[0].slice(1).trim()).slice(1);t.startObject(d)}else if(fw.test(c))t.object.startMaterial(c.substring(7).trim(),t.materialLibraries);else if(hw.test(c))t.materialLibraries.push(c.substring(7).trim());else if(pw.test(c))console.warn('THREE.OBJLoader: Rendering identifier "usemap" not supported. Textures must be defined in MTL files.');else if(u==="s"){if(s=c.split(" "),s.length>1){const h=s[1].trim().toLowerCase();t.object.smooth=h!=="0"&&h!=="off"}else t.object.smooth=!0;const d=t.object.currentMaterial();d&&(d.smooth=t.object.smooth)}else{if(c==="\0")continue;console.warn('THREE.OBJLoader: Unexpected line: "'+c+'"')}}t.finalize();const o=new Mn;if(o.materialLibraries=[].concat(t.materialLibraries),!(t.objects.length===1&&t.objects[0].geometry.vertices.length===0)===!0)for(let a=0,l=t.objects.length;a<l;a++){const c=t.objects[a],u=c.geometry,d=c.materials,h=u.type==="Line",f=u.type==="Points";let _=!1;if(u.vertices.length===0)continue;const g=new xt;g.setAttribute("position",new je(u.vertices,3)),u.normals.length>0&&g.setAttribute("normal",new je(u.normals,3)),u.colors.length>0&&(_=!0,g.setAttribute("color",new je(u.colors,3))),u.hasUVIndices===!0&&g.setAttribute("uv",new je(u.uvs,2));const m=[];for(let y=0,w=d.length;y<w;y++){const v=d[y],b=v.name+"_"+v.smooth+"_"+_;let E=t.materials[b];if(this.materials!==null){if(E=this.materials.create(v.name),h&&E&&!(E instanceof ps)){const C=new ps;_n.prototype.copy.call(C,E),C.color.copy(E.color),E=C}else if(f&&E&&!(E instanceof Ws)){const C=new Ws({size:10,sizeAttenuation:!1});_n.prototype.copy.call(C,E),C.color.copy(E.color),C.map=E.map,E=C}}E===void 0&&(h?E=new ps:f?E=new Ws({size:1,sizeAttenuation:!1}):E=new _f,E.name=v.name,E.flatShading=!v.smooth,E.vertexColors=_,t.materials[b]=E),m.push(E)}let p;if(m.length>1){for(let y=0,w=d.length;y<w;y++){const v=d[y];g.addGroup(v.groupStart,v.groupCount,y)}h?p=new Dc(g,m):f?p=new ma(g,m):p=new oe(g,m)}else h?p=new Dc(g,m[0]):f?p=new ma(g,m[0]):p=new oe(g,m[0]);p.name=c.name,o.add(p)}else if(t.vertices.length>0){const a=new Ws({size:1,sizeAttenuation:!1}),l=new xt;l.setAttribute("position",new je(t.vertices,3)),t.colors.length>0&&t.colors[0]!==void 0&&(l.setAttribute("color",new je(t.colors,3)),a.vertexColors=!0);const c=new ma(l,a);o.add(c)}return o}}const gw=Object.freeze(Object.defineProperty({__proto__:null,OBJLoader:Rf},Symbol.toStringTag,{value:"Module"})),Pf=["#808080","#E74C3C","#3498DB","#2ECC71","#F39C12","#9B59B6","#1ABC9C","#E67E22","#F1C40F","#E91E63","#C0392B","#16A085","#8E44AD","#D35400","#27AE60","#34495E","#00BCD4"];function ar(i,e){var t,n;return((n=(t=i==null?void 0:i.userData)==null?void 0:t.tags)==null?void 0:n.includes(e))||!1}function _w(i,e){return!i||!i.userData?!1:(i.userData.tags||(i.userData.tags=[0]),i.userData.tags.includes(e)?!1:(i.userData.tags.push(e),i.userData.tags.sort((t,n)=>t-n),!0))}function vw(i,e){if(!i||!i.userData||e===0)return!1;i.userData.tags||(i.userData.tags=[0]);const t=i.userData.tags.indexOf(e);return t>-1?(i.userData.tags.splice(t,1),!0):!1}function Df(i,e){return e===0?!1:ar(i,e)?vw(i,e):_w(i,e)}function Lf(i){!i||!i.userData||i.userData.tags||(i.userData.tags=[0])}class xw{execute(){throw new Error("execute() must be implemented")}undo(){throw new Error("undo() must be implemented")}redo(){this.execute()}}class lr extends xw{constructor(e,t,n){var s;super(),this.objectId=(s=e.userData)==null?void 0:s.id,this.objectName=e.name,this.oldState=t,this.newState=n}execute(){const e=this.findObject();e&&this.applyState(e,this.newState)}undo(){console.log("[UNDO] Chiamato undo per:",this.objectName);const e=this.findObject();if(!e){console.error("[UNDO] Impossibile trovare oggetto per undo");return}console.log("[UNDO] Applicando stato:",{oldPos:this.oldState.position,currentPos:{x:e.position.x,y:e.position.y,z:e.position.z}}),this.applyState(e,this.oldState,this.newState),console.log("[UNDO] Stato applicato. Nuova posizione:",{x:e.position.x,y:e.position.y,z:e.position.z})}redo(){const e=this.findObject();e&&this.applyState(e,this.newState,this.oldState)}findObject(){if(!window.scene)return console.error("[UNDO] window.scene non definito!"),null;let e=null;return window.scene.traverse(t=>{var n;((n=t.userData)==null?void 0:n.id)===this.objectId&&(e=t)}),e?console.log("[UNDO] Oggetto trovato:",e.name):console.warn("[UNDO] Oggetto non trovato:",this.objectId,this.objectName),e}applyState(e,t,n=null){var l;t.position&&e.position.set(t.position.x,t.position.y,t.position.z),t.rotation&&e.rotation.set(t.rotation.x,t.rotation.y,t.rotation.z),t.scale&&e.scale.set(t.scale.x,t.scale.y,t.scale.z),t.tags&&(e.userData.tags=[...t.tags]),t.menuState&&(e.userData.menuState={...t.menuState}),e.updateMatrixWorld(!0),window.updateMenuForObject&&window.updateMenuForObject(e),window.updateSubmenuTags&&window.updateSubmenuTags(e);const s=n&&t.position&&(t.position.x!==n.position.x||t.position.y!==n.position.y||t.position.z!==n.position.z),o=n&&t.rotation&&(t.rotation.x!==n.rotation.x||t.rotation.y!==n.rotation.y||t.rotation.z!==n.rotation.z),r=n&&t.scale&&(t.scale.x!==n.scale.x||t.scale.y!==n.scale.y||t.scale.z!==n.scale.z),a=n&&t.tags&&JSON.stringify(t.tags)!==JSON.stringify(n.tags);if(window.messageBroker){const c=this.getObjectType(e.name),u=e.name.match(/(\d+)$/),d=u?parseInt(u[1],10):1;if((!n||s||o||r)&&window.messageBroker.sendObjectTransform({id:(l=e.userData)==null?void 0:l.id,name:e.name,type:c,position:t.position,rotation:t.rotation,scale:t.scale,tags:t.tags}),a&&window.messageBroker.sendObjectTags({name:e.name,type:c,tags:t.tags}),n&&t.menuState&&n.menuState)for(const h in t.menuState)t.menuState[h]!==n.menuState[h]&&(console.log(`[UNDO] Parametro ${h} cambiato:`,n.menuState[h],"->",t.menuState[h]),window.messageBroker.sendCustomParameter({type:c,index:d,paramName:h,value:t.menuState[h]}))}window.multiClientManager?(console.log("[UNDO] MultiClient check:",{exists:!!window.multiClientManager,isMaster:window.multiClientManager.isMaster,syncEnabled:window.multiClientManager.syncEnabled,isEnabled:window.multiClientManager.isEnabled}),window.multiClientManager.isMaster&&window.multiClientManager.syncEnabled?(console.log("[UNDO] Inviando transform a slave via multiClient"),window.multiClientManager.sendTransform(this.objectId,t.position,t.rotation,t.scale,t.tags,t.menuState)):console.log("[UNDO] NON inviando a slave - isMaster:",window.multiClientManager.isMaster,"syncEnabled:",window.multiClientManager.syncEnabled)):console.log("[UNDO] multiClientManager non disponibile")}getObjectType(e){return e.startsWith("Altoparlante")?"altoparlante":e.startsWith("Omnifonte")?"omnifonte":e.startsWith("Orifonte")?"orifonte":e.startsWith("Zona")?"zona":"unknown"}}class yw{constructor(e=50){this.undoStack=[],this.redoStack=[],this.maxHistorySize=e}execute(e){this.undoStack.push(e),this.redoStack=[],this.undoStack.length>this.maxHistorySize&&this.undoStack.shift()}undo(){if(this.undoStack.length===0){console.log("Nulla da annullare");return}const e=this.undoStack.pop();e.undo(),this.redoStack.push(e)}redo(){if(this.redoStack.length===0){console.log("Nulla da ripristinare");return}const e=this.redoStack.pop();e.redo(),this.undoStack.push(e)}clear(){this.undoStack=[],this.redoStack=[]}canUndo(){return this.undoStack.length>0}canRedo(){return this.redoStack.length>0}}const Yt=new yw;typeof window<"u"&&(window.addEventListener("keydown",i=>{(i.ctrlKey||i.metaKey)&&i.key==="z"&&!i.shiftKey&&(i.preventDefault(),console.log("[UNDO] Tasto premuto. Stack:",Yt.undoStack.length,"canUndo:",Yt.canUndo()),Yt.undo()),(i.ctrlKey||i.metaKey)&&i.key==="z"&&i.shiftKey&&(i.preventDefault(),console.log("[REDO] Tasto premuto. Stack:",Yt.redoStack.length,"canRedo:",Yt.canRedo()),Yt.redo()),(i.ctrlKey||i.metaKey)&&i.key==="y"&&(i.preventDefault(),console.log("[REDO] Tasto Y premuto. Stack:",Yt.redoStack.length,"canRedo:",Yt.canRedo()),Yt.redo())}),window.undoManager=Yt,window.TransformCommand=lr);const xh=document.getElementById("objmenu-styles");xh&&xh.remove();const hu=document.createElement("style");hu.id="objmenu-styles";hu.textContent=`
        /* Stile base per tutti gli input */
        .menu-control-row {
            display: flex;
            align-items: center;
            gap: 0.3rem;
            padding: 0.25rem 0;
        }
        
        .menu-label {
            font-size: 0.75rem;
            min-width: 50px;
            flex-shrink: 0;
            color: var(--testo);
        }
        
        /* Slider */
        .menu-slider {
            flex: 1;
            min-width: 0;
            max-width: 100%;
            height: 4px;
            -webkit-appearance: none;
            appearance: none;
            background: var(--dettaglio);
            border-radius: 2px;
            outline: none;
            cursor: pointer;
        }
        
        .menu-slider::-webkit-slider-thumb {
            -webkit-appearance: none;
            appearance: none;
            width: 14px;
            height: 14px;
            background: var(--testo);
            border-radius: 2px;
            cursor: pointer;
            transition: background 0.2s;
        }
        
        .menu-slider::-webkit-slider-thumb:hover {
            background: var(--fondale);
            outline: 2px solid var(--testo);
        }
        
        .menu-slider::-moz-range-thumb {
            width: 14px;
            height: 14px;
            background: var(--testo);
            border: none;
            border-radius: 2px;
            cursor: pointer;
            transition: background 0.2s;
        }
        
        .menu-slider::-moz-range-thumb:hover {
            background: var(--fondale);
            outline: 2px solid var(--testo);
        }
        
        .menu-value {
            font-size: 0.7rem;
            min-width: 40px;
            flex-shrink: 0;
            text-align: right;
            color: var(--testo);
        }
        
        /* Checkbox */
        .menu-checkbox {
            width: 14px;
            height: 14px;
            flex-shrink: 0;
            cursor: pointer;
            appearance: none;
            -webkit-appearance: none;
            border: 1px solid var(--dettaglio);
            border-radius: 3px;
            background: transparent;
            position: relative;
            transition: all 0.15s;
        }
        
        .menu-checkbox:hover {
            border-color: var(--testo);
        }
        
        .menu-checkbox:checked {
            background: transparent;
            border-color: var(--testo);
        }
        
        .menu-checkbox:checked::after {
            content: '✕';
            position: absolute;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            color: var(--testo);
            font-size: 11px;
            font-weight: bold;
            line-height: 1;
        }
        
        /* Numbox */
        .menu-numbox {
            width: 50px;
            flex-shrink: 0;
            padding: 0.2rem 0.3rem;
            background: transparent;
            border: 1px solid var(--dettaglio);
            border-radius: 4px;
            color: var(--testo);
            font-size: 0.75rem;
            outline: none;
        }
        
        .menu-numbox:focus {
            border-color: var(--testo);
        }
        
        /* Multitoggle */
        .menu-multitoggle {
            display: flex;
            gap: 0.25rem;
            flex: 1;
            min-width: 0;
        }
        
        .menu-multitoggle-btn {
            flex: 1;
            // min-width: 0;
            height: auto;
            width: auto;
            padding: none;
            margin: 0;
            background: transparent;
            border: 1px solid var(--dettaglio);
            border-radius: 4px;
            color: var(--testo);
            font-size: 0.7rem;
            // line-height: 0;
            cursor: pointer;
            transition: all 0.15s;
            white-space: nowrap;
            overflow: hidden;
            text-overflow: ellipsis;
            // box-sizing: border-box;
        }
        
        .menu-multitoggle-btn:hover {
            background: var(--dettaglio);
        }
        
        .menu-multitoggle-btn.active {
            background: var(--testo);
            color: var(--fondale);
            border-color: var(--testo);
        }
        
        /* Button */
        .menu-button {
            height: 10px;
            width: auto;
            background: var(--fondale);
            border: 1px solid var(--testo);
            border-radius: 4px;
            color: var(--testo);
            font-size: 0.75rem;
            cursor: pointer;
            transition: all 0.15s;
            user-select: none;
        }
        
        .menu-button:hover {
            background: var(--testo);
            color: var(--fondale);
        }
        
        .menu-button:active {
            transform: scale(0.95);
        }
        
        /* Tags section */
        .submenu-tags-wrapper {
            margin-top: 0.5rem;
            padding-top: 0.5rem;
            border-top: 1px solid var(--dettaglio);
        }
        
        .submenu-tags-label {
            font-size: 0.75rem;
            color: var(--testo);
            margin-bottom: 0.3rem;
        }
        
        .submenu-tags-container {
            display: grid;
            grid-template-columns: repeat(8, 1fr);
            grid-template-rows: repeat(2, 18px);
            gap: 0.15rem;
        }
    `;document.head.appendChild(hu);const ww={omnifonte:{title:"Omnifonte Settings",controls:[{type:"slider",label:"Volume",min:0,max:1,step:.1,value:.8},{type:"slider",label:"Distance",min:0,max:10,step:.1,value:5},{type:"toggle",label:"Active",value:!0},{type:"numbox",label:"Channel",value:1,min:1,max:16},{type:"toggle",label:"Reverb",value:!1}]},orifonte:{title:"Orifonte Settings",controls:[{type:"slider",label:"Gain",min:-60,max:12,step:1,value:0},{type:"slider",label:"Spread",min:0,max:180,step:5,value:30},{type:"toggle",label:"Enabled",value:!0},{type:"numbox",label:"Input",value:1,min:1,max:8}]},altoparlante:{title:"Speaker Settings",controls:[{type:"slider",label:"Level",min:0,max:1,step:.05,value:1},{type:"slider",label:"Delay",min:0,max:100,step:1,value:0},{type:"toggle",label:"Mute",value:!1},{type:"numbox",label:"Output",value:1,min:1,max:32},{type:"slider",label:"EQ High",min:-12,max:12,step:.5,value:0},{type:"toggle",label:"Guarda origine",value:!0}]},aureola:{title:"Aureola Settings",controls:[{type:"toggle",label:"Visible",value:!0},{type:"slider",label:"Opacity",min:0,max:1,step:.1,value:.5},{type:"numbox",label:"Segments",value:32,min:8,max:64}]},zona:{title:"Zone Settings",controls:[{type:"toggle",label:"Active",value:!0},{type:"slider",label:"Size",min:.1,max:5,step:.1,value:1},{type:"numbox",label:"Priority",value:1,min:1,max:10}]},povcursor:{title:"POV Cursor Settings",controls:[{type:"toggle",label:"Show",value:!0},{type:"slider",label:"Height",min:.5,max:3,step:.1,value:1.2},{type:"slider",label:"Speed",min:.1,max:2,step:.1,value:1}]}};let fu={...ww};window.submenuConfigs=fu;function xo(i){var r,a,l,c;if(!window.multiClientManager||!i){console.log("[MENU SYNC] multiClientManager o object mancante");return}const e=(r=i.userData)==null?void 0:r.id;if(!e){console.log("[MENU SYNC] objectId mancante");return}console.log("[MENU SYNC] Sincronizzando menuState:",{objectName:i.name,isMaster:window.multiClientManager.isMaster,syncEnabled:window.multiClientManager.syncEnabled,menuState:(a=i.userData)==null?void 0:a.menuState}),i.updateMatrixWorld(!0);const t=new A,n=new pt,s=new A;i.matrixWorld.decompose(t,n,s);const o=new zt().setFromQuaternion(n);window.multiClientManager.sendTransform(e,{x:t.x,y:t.y,z:t.z},{x:o.x,y:o.y,z:o.z},{x:s.x,y:s.y,z:s.z},((l=i.userData)==null?void 0:l.tags)||null,((c=i.userData)==null?void 0:c.menuState)||{})}function Pa(i,e,t,n){var c,u;const s={...i.userData.menuState,[e]:t},o={...i.userData.menuState,[e]:n},r={position:{x:i.position.x,y:i.position.y,z:i.position.z},rotation:{x:i.rotation.x,y:i.rotation.y,z:i.rotation.z},scale:{x:i.scale.x,y:i.scale.y,z:i.scale.z},tags:(c=i.userData)!=null&&c.tags?[...i.userData.tags]:[],menuState:s},a={position:{x:i.position.x,y:i.position.y,z:i.position.z},rotation:{x:i.rotation.x,y:i.rotation.y,z:i.rotation.z},scale:{x:i.scale.x,y:i.scale.y,z:i.scale.z},tags:(u=i.userData)!=null&&u.tags?[...i.userData.tags]:[],menuState:o},l=new lr(i,r,a);Yt.execute(l)}async function Sw(){const i=["omnifonte","orifonte","altoparlante","aureola","zona","povcursor"];for(const e of i)try{const n=await fetch(`/Cielo/config/${e}.json`);if(n.ok){const s=await n.json();fu[e]={title:s.title,controls:s.controls.map(o=>({type:o.type,label:o.label,oscName:o.oscName,min:o.min,max:o.max,step:o.step,value:o.defaultValue,options:o.options,defaultValue:o.defaultValue,unitType:o.unitType,exp:o.exp}))},console.log(`✅ Loaded config for ${e}`)}else console.warn(`⚠️ Could not load config for ${e}, using default`)}catch(t){console.warn(`⚠️ Error loading config for ${e}:`,t)}}Sw().then(()=>{console.log("📋 Menu configurations loaded")});function on(i){const e=i.toLowerCase();return e.includes("omnifonte")?"omnifonte":e.includes("orifonte")?"orifonte":e.includes("altoparlante")?"altoparlante":e.includes("aureola")||e.includes("cloud")?"aureola":e.includes("zona")?"zona":e.includes("pov cursor")?"povcursor":"default"}function Mw(i,e,t){var o;const n=(o=i.userData)==null?void 0:o._submenuElement;if(!n)return;const s=n.querySelector(`input[type="checkbox"][data-param="${e}"]`);s&&(s.checked=t)}function dr(i,e=!0){if(!(!i||!i.lookAt))if(e){const t={x:0,y:1.2,z:0};i.lookAt(t.x,t.y,t.z),i.userData=i.userData||{},i.userData.autoRotateToCenter=!0,console.log(`${i.name} oriented to center (0, 1.2, 0)`)}else i.userData&&(i.userData.autoRotateToCenter=!1),i.rotation.set(0,0,0),console.log(`${i.name} auto-rotation disabled, reset to default rotation (0, 0, 0)`)}function Ew(i){if(!i||!i.userData||!i.userData.autoRotateToCenter||!i.name||!/Altoparlante/i.test(i.name))return;const e={x:0,y:1.2,z:0};i.lookAt(e.x,e.y,e.z),console.log(`Auto-rotation applied to ${i.name} -> (0, 1.2, 0)`)}function If(){(qe||[]).forEach(e=>{e.name&&/Altoparlante/i.test(e.name)&&(e.userData=e.userData||{},e.userData.autoRotateToCenter===void 0&&(e.userData.autoRotateToCenter=!0,dr(e,!0),console.log(`Initialized auto-rotation for existing speaker: ${e.name}`)))})}function bw(i){const e=qe.filter(t=>t.name&&/Altoparlante/i.test(t.name));console.log(`Setting global look at to ${i} for ${e.length} speakers`),e.forEach(t=>{dr(t,i)}),Tw(i),console.log(`Global speaker look at ${i?"enabled":"disabled"} for all speakers`)}function Tw(i){document.querySelectorAll('input[type="checkbox"]').forEach(t=>{const n=t.closest("div");if(n){const s=n.querySelector("label");s&&s.textContent==="Guarda origine"&&(t.checked=i,console.log(`Updated individual toggle for speaker to: ${i}`))}})}function Aw(i){const e=qe.filter(t=>t.name&&/Altoparlante/i.test(t.name));console.log(`Setting global visibility to ${i} for ${e.length} speakers`),e.forEach(t=>{t.visible=i,console.log(`Speaker ${t.name} visibility set to: ${i}`)}),console.log(`Global speaker visibility ${i?"enabled":"disabled"} for all speakers`)}function Jo(i){var u;if(!i)return;console.log("Updating menu for:",i.name,"menuState:",i.userData.menuState);const e=(u=window.menuObjectMap)==null?void 0:u.get(i);if(!e){console.log("No menu header found for:",i.name);return}const t=e.parentElement,n=t==null?void 0:t.querySelector(".submenu");if(!n){console.log("No submenu found for:",i.name);return}const s=i.userData.menuState||{};n.querySelectorAll('input[type="range"]').forEach(d=>{const h=d.closest(".menu-control-row");if(h==null?void 0:h.querySelector(".menu-label")){const _=d.dataset.param;if(_&&s[_]!==void 0){d.value=s[_];const g=h.querySelector(".menu-value");if(g){const m=d.dataset.unit||"";g.textContent=parseFloat(s[_]).toFixed(2)+m}console.log(`Updated slider ${_}: ${s[_]}`)}}}),n.querySelectorAll('input[type="checkbox"]').forEach(d=>{const h=d.closest(".menu-control-row");h==null||h.querySelector("label");const f=d.dataset.param;f&&s[f]!==void 0&&(d.checked=s[f],console.log(`Updated checkbox ${f}: ${s[f]}`))}),n.querySelectorAll('input[type="number"]').forEach(d=>{const h=d.dataset.param;h&&s[h]!==void 0&&(d.value=s[h],console.log(`Updated numbox ${h}: ${s[h]}`))});const l=n.querySelectorAll(".menu-multitoggle-btn"),c=new Map;l.forEach(d=>{const h=d.dataset.param;c.has(h)||c.set(h,[]),c.get(h).push(d)}),c.forEach((d,h)=>{if(s[h]!==void 0){const f=s[h];d.forEach(_=>{parseFloat(_.dataset.value)===f?_.classList.add("active"):_.classList.remove("active")}),console.log(`Updated multitoggle ${h}: ${f}`)}}),console.log("Menu updated successfully")}window.applyAutoRotationIfEnabled=Ew;window.initializeAutoRotationForExistingSpeakers=If;window.setGlobalSpeakerLookAt=bw;window.setGlobalSpeakerVisibility=Aw;window.orientSpeakerToCenter=dr;window.updateMenuForObject=Jo;function Cw(i,e){console.log("[CREATE SLIDER] config ricevuto:",JSON.stringify(i,null,2));const t=document.createElement("div");t.className="menu-control-row";const n=document.createElement("label");n.className="menu-label",n.textContent=i.label,e.userData.menuState||(e.userData.menuState={});const s=e.userData.menuState[i.oscName],o=s!==void 0?s:i.value;s===void 0&&(e.userData.menuState[i.oscName]=i.value);const r=document.createElement("input");r.type="range",r.className="menu-slider",r.min=i.min,r.max=i.max,r.step=i.step,r.value=o,r.dataset.param=i.oscName,r.dataset.unit=i.unitType||"",r.dataset.exp=i.exp||1;const a=document.createElement("span");a.className="menu-value";const l=i.unitType||"";a.textContent=parseFloat(o).toFixed(2)+l;const c=(f,_,g,m)=>{if(m===1||!m)return f;const p=(f-_)/(g-_),y=Math.pow(p,m);return _+y*(g-_)},u=(f,_,g,m)=>{if(m===1||!m)return f;const p=(f-_)/(g-_),y=Math.pow(p,1/m);return _+y*(g-_)},d=i.exp||1;r.value=u(o,i.min,i.max,d);let h=null;return r.addEventListener("mousedown",()=>{var f,_;h={...e.userData.menuState},(f=window.multiClientManager)!=null&&f.isEnabled&&!((_=window.multiClientManager)!=null&&_.isMaster)&&(console.log("[MENU SLIDER] Richiedo ruolo master..."),window.multiClientManager.requestMaster())}),r.addEventListener("mouseup",()=>{var f,_;if(h&&JSON.stringify(h)!==JSON.stringify(e.userData.menuState)){const g={...e.userData.menuState},m={position:{x:e.position.x,y:e.position.y,z:e.position.z},rotation:{x:e.rotation.x,y:e.rotation.y,z:e.rotation.z},scale:{x:e.scale.x,y:e.scale.y,z:e.scale.z},tags:(f=e.userData)!=null&&f.tags?[...e.userData.tags]:[],menuState:h},p={position:{x:e.position.x,y:e.position.y,z:e.position.z},rotation:{x:e.rotation.x,y:e.rotation.y,z:e.rotation.z},scale:{x:e.scale.x,y:e.scale.y,z:e.scale.z},tags:(_=e.userData)!=null&&_.tags?[...e.userData.tags]:[],menuState:g},y=new lr(e,m,p);Yt.execute(y)}h=null}),r.addEventListener("input",f=>{const _=parseFloat(f.target.value),g=c(_,i.min,i.max,d);if(a.textContent=g.toFixed(2)+l,e.userData.menuState[i.oscName]=g,window.messageBroker&&i.oscName){const m=on(e.name),p=e.name.match(/(\d+)$/),y=p?parseInt(p[1],10):1;window.messageBroker.sendCustomParameter({type:m,index:y,paramName:i.oscName,value:g})}xo(e)}),r.addEventListener("dblclick",()=>{const f=parseFloat(i.value);if(r.value=u(f,i.min,i.max,d),a.textContent=f.toFixed(2)+l,e.userData.menuState[i.oscName]=f,window.messageBroker&&i.oscName){const _=on(e.name),g=e.name.match(/(\d+)$/),m=g?parseInt(g[1],10):1;window.messageBroker.sendCustomParameter({type:_,index:m,paramName:i.oscName,value:f})}xo(e)}),t.appendChild(n),t.appendChild(r),t.appendChild(a),t}function Rw(i,e){const t=document.createElement("div");t.className="menu-control-row";const n=document.createElement("label");n.className="menu-label",n.textContent=i.label;const s=document.createElement("input");s.type="checkbox",s.className="menu-checkbox",s.dataset.param=i.oscName,e.userData.menuState||(e.userData.menuState={});const o=(i.label==="Guarda origine"||i.label==="Look at Origin")&&on(e.name)==="altoparlante";if(o)e.userData=e.userData||{},e.userData.autoRotateToCenter===void 0&&(e.userData.autoRotateToCenter=i.value),s.checked=e.userData.autoRotateToCenter;else{const r=e.userData.menuState[i.oscName];s.checked=r!==void 0?r:i.value,r===void 0&&(e.userData.menuState[i.oscName]=i.value)}return s.addEventListener("change",r=>{var u,d;const a=r.target.checked,l=e.userData.menuState[i.oscName];(u=window.multiClientManager)!=null&&u.isEnabled&&!((d=window.multiClientManager)!=null&&d.isMaster)&&(console.log("[MENU TOGGLE] Richiedo ruolo master..."),window.multiClientManager.requestMaster());let c=!1;if(i.oscName==="solo"){const h=on(e.name);a?te.children.forEach(f=>{var _,g;if(f!==e&&((g=(_=f.userData)==null?void 0:_.menuState)==null?void 0:g.solo)!==void 0){const m=on(f.name);if(m===h&&window.messageBroker){const p=f.name.match(/(\d+)$/),y=p?parseInt(p[1],10):1;window.messageBroker.sendCustomParameter({type:m,index:y,paramName:"solo",value:0})}m===h&&f.userData.menuState.solo===!0&&(f.userData.menuState.solo=!1,Mw(f,"solo",!1),Pa(f,"solo",!0,!1))}}):(te.children.forEach(f=>{var _,g;if(((g=(_=f.userData)==null?void 0:_.menuState)==null?void 0:g.solo)!==void 0){const m=on(f.name);if(m===h&&window.messageBroker){const p=f.name.match(/(\d+)$/),y=p?parseInt(p[1],10):1;window.messageBroker.sendCustomParameter({type:m,index:y,paramName:"solo",value:1})}}}),c=!0)}if(e.userData.menuState[i.oscName]=a,l!==a&&Pa(e,i.oscName,l,a),o&&dr(e,a),window.messageBroker&&i.oscName&&!c){const h=on(e.name),f=e.name.match(/(\d+)$/),_=f?parseInt(f[1],10):1;window.messageBroker.sendCustomParameter({type:h,index:_,paramName:i.oscName,value:a?1:0})}xo(e)}),t.appendChild(n),t.appendChild(s),t}function Pw(i,e){const t=document.createElement("div");t.className="menu-control-row";const n=document.createElement("button");return n.className="menu-button",n.textContent=i.label,n.addEventListener("mousedown",s=>{if(s.preventDefault(),window.messageBroker&&i.oscName){const o=on(e.name),r=e.name.match(/(\d+)$/),a=r?parseInt(r[1],10):1;window.messageBroker.sendCustomParameter({type:o,index:a,paramName:i.oscName,value:1})}}),n.addEventListener("mouseup",s=>{if(window.messageBroker&&i.oscName){const o=on(e.name),r=e.name.match(/(\d+)$/),a=r?parseInt(r[1],10):1;window.messageBroker.sendCustomParameter({type:o,index:a,paramName:i.oscName,value:0})}}),n.addEventListener("mouseleave",s=>{if(window.messageBroker&&i.oscName){const o=on(e.name),r=e.name.match(/(\d+)$/),a=r?parseInt(r[1],10):1;window.messageBroker.sendCustomParameter({type:o,index:a,paramName:i.oscName,value:0})}}),t.appendChild(n),t}function Dw(i,e){const t=document.createElement("div");t.className="menu-control-row";const n=document.createElement("label");n.className="menu-label",n.textContent=i.label,e.userData.menuState||(e.userData.menuState={});const s=e.userData.menuState[i.oscName],o=s!==void 0?s:i.value;s===void 0&&(e.userData.menuState[i.oscName]=i.value);const r=document.createElement("input");r.type="number",r.className="menu-numbox",r.value=o,r.min=i.min||"",r.max=i.max||"",r.dataset.param=i.oscName;const a=i.unitType||"",l=document.createElement("span");return l.className="menu-value",a&&(l.textContent=a),r.addEventListener("change",c=>{var h,f;const u=parseInt(c.target.value,10),d=e.userData.menuState[i.oscName];if((h=window.multiClientManager)!=null&&h.isEnabled&&!((f=window.multiClientManager)!=null&&f.isMaster)&&(console.log("[MENU NUMBOX] Richiedo ruolo master..."),window.multiClientManager.requestMaster()),e.userData.menuState[i.oscName]=u,d!==u&&Pa(e,i.oscName,d,u),window.messageBroker&&i.oscName){const _=on(e.name),g=e.name.match(/(\d+)$/),m=g?parseInt(g[1],10):1;window.messageBroker.sendCustomParameter({type:_,index:m,paramName:i.oscName,value:u})}xo(e)}),t.appendChild(n),t.appendChild(r),a&&t.appendChild(l),t}function Lw(i,e){const t=document.createElement("div");t.style.marginBottom="0.3rem";const n=document.createElement("div");n.className="menu-label",n.textContent=i.label,n.style.marginBottom="0.3rem",n.style.fontSize="0.75rem";const s=document.createElement("div");s.className="menu-multitoggle",e.userData.menuState||(e.userData.menuState={});const o=[],r=i.options||[],a=e.userData.menuState[i.oscName],l=a!==void 0?a:i.defaultValue||0;return a===void 0&&(e.userData.menuState[i.oscName]=i.defaultValue||0),r.forEach((c,u)=>{const d=document.createElement("button");d.textContent=c.label,d.className="menu-multitoggle-btn",d.dataset.param=i.oscName,d.dataset.value=c.value!==void 0?c.value:u,(c.value===l||u===l)&&d.classList.add("active"),d.addEventListener("click",()=>{o.forEach(g=>g.classList.remove("active")),d.classList.add("active");const f=c.value!==void 0?c.value:u,_=e.userData.menuState[i.oscName];if(e.userData.menuState[i.oscName]=f,_!==f&&Pa(e,i.oscName,_,f),window.messageBroker&&i.oscName){const g=on(e.name),m=e.name.match(/(\d+)$/),p=m?parseInt(m[1],10):1;window.messageBroker.sendCustomParameter({type:g,index:p,paramName:i.oscName,value:f})}xo(e)}),o.push(d),s.appendChild(d)}),s.addEventListener("dblclick",()=>{const c=i.defaultValue||0;if(r.forEach((u,d)=>{const h=u.value===c||d===c,f=o[d];h?f.classList.add("active"):f.classList.remove("active")}),e.userData.menuState[i.oscName]=c,window.messageBroker&&i.oscName){const u=on(e.name),d=e.name.match(/(\d+)$/),h=d?parseInt(d[1],10):1;window.messageBroker.sendCustomParameter({type:u,index:h,paramName:i.oscName,value:c})}xo(e)}),t.appendChild(n),t.appendChild(s),t}function Iw(i){const e=document.createElement("div");e.className="submenu-tags-wrapper";const t=document.createElement("div");t.className="submenu-tags-label",t.textContent="Tags";const n=document.createElement("div");return n.className="submenu-tags-container",e.appendChild(t),e.appendChild(n),e._container=n,e._object=i,Of(e),e}function Of(i){const e=i._container,t=i._object;if(t){Lf(t),e.innerHTML="";for(let n=1;n<=16;n++){const s=document.createElement("button");s.textContent=n,s.dataset.tag=n;const o=ar(t,n),r=Pf[n];s.style.cssText=`
            width: 100%;
            height: 18px;
            border-radius: 3px;
            border: none;
            margin: 0;
            padding: 0;
            font-size: 0.6rem;
            font-weight: bold;
            cursor: pointer;
            transition: opacity 0.15s;
            background-color: ${r};
            color: #000;
            opacity: ${o?"1":"0.3"};
            display: flex;
            align-items: center;
            justify-content: center;
        `,s.addEventListener("click",()=>{var d,h,f,_;(d=window.multiClientManager)!=null&&d.isEnabled&&!((h=window.multiClientManager)!=null&&h.isMaster)&&window.multiClientManager.requestMaster();const a=[...t.userData.tags],l={position:{x:t.position.x,y:t.position.y,z:t.position.z},rotation:{x:t.rotation.x,y:t.rotation.y,z:t.rotation.z},scale:{x:t.scale.x,y:t.scale.y,z:t.scale.z},tags:a,menuState:(f=t.userData)!=null&&f.menuState?{...t.userData.menuState}:{}};Df(t,n);const c=ar(t,n);s.style.opacity=c?"1":"0.3";const u={position:{x:t.position.x,y:t.position.y,z:t.position.z},rotation:{x:t.rotation.x,y:t.rotation.y,z:t.rotation.z},scale:{x:t.scale.x,y:t.scale.y,z:t.scale.z},tags:[...t.userData.tags],menuState:(_=t.userData)!=null&&_.menuState?{...t.userData.menuState}:{}};if(window.undoManager&&window.TransformCommand){const g=new window.TransformCommand(t,l,u);window.undoManager.execute(g),console.log("[UNDO] Tag modificato, comando salvato. Tags:",a,"->",t.userData.tags)}window.messageBroker&&window.messageBroker.sendObjectTags({name:t.name,type:null,tags:t.userData.tags||[0]}),window.updateTagsChipsExternal&&window.updateTagsChipsExternal(t)}),e.appendChild(s)}}}function Ow(i){const e=on(i.name),t=fu[e];if(!t)return null;const n=document.createElement("div");n.className="submenu",n.style.display="none",n.style.background="var(--fondale)",n.style.border="1px solid var(--dettaglio)",n.style.borderTop="none",n.style.borderRadius="0 0 10px 10px",n.style.padding="0.4rem",n.style.marginBottom="0.5rem",t.controls.forEach(o=>{let r;switch(o.type){case"slider":r=Cw(o,i);break;case"toggle":r=Rw(o,i),o.label==="Guarda origine"&&o.value===!0&&on(i.name)==="altoparlante"&&dr(i,!0);break;case"numbox":r=Dw(o,i);break;case"multitoggle":r=Lw(o,i);break;case"button":r=Pw(o,i);break}r&&n.appendChild(r)});const s=Iw(i);return n.appendChild(s),n._tagsSelector=s,n}function wt(){const i=document.getElementById("menuList");i.innerHTML="",window.menuObjectMap&&window.menuObjectMap.clear();const e=[{key:"fonti",label:"F"},{key:"halo",label:"H"},{key:"altoparlanti",label:"A"},{key:"zone",label:"Z"},{key:"povcursor",label:"P"}];let t=localStorage.getItem("cielo_menu_category")||"fonti";const n=document.createElement("div");n.className="menuCatBar",n.style.display="flex",n.style.gap="0.3rem",n.style.marginBottom="1rem",n.style.justifyContent="flex-start",n.style.alignItems="flex-end",n.style.height="1.7rem",e.forEach(r=>{const a=document.createElement("button");a.textContent=r.label,a.style.padding="0 0.5rem",a.style.height="1.4rem",a.style.minWidth="1.4rem",a.style.fontSize="0.95rem",a.style.fontWeight="bold",a.style.background="none",a.style.border="none",a.style.borderRadius="0",a.style.cursor="pointer",a.classList.toggle("menuCatActive",t===r.key),a.classList.add("menuCatBtn"),a.addEventListener("click",()=>{const l=r.key;l!==t&&(localStorage.setItem("cielo_menu_category",l),wt())}),n.appendChild(a)}),i.appendChild(n);let s;t==="fonti"?s=r=>r.name&&/Omnifonte|Orifonte/i.test(r.name):t==="halo"?s=r=>r.name&&/Aureola|Cloud/i.test(r.name):t==="altoparlanti"?(s=r=>r.name&&/Altoparlante/i.test(r.name),If()):t==="zone"?s=r=>r.name&&/Zona|Zone/i.test(r.name):t==="povcursor"?s=r=>r.name&&/POV Cursor/i.test(r.name):s=()=>!0;const o=qe.filter(s);window.menuObjectMap=new Map,o.forEach(r=>{const a=document.createElement("div");a.className="item-container",a.style.marginBottom="0.5rem";const l=document.createElement("div");l.className="itemList",l.style.height="2rem",l.style.display="flex",l.style.alignItems="center",l.style.padding="0",l.style.background="var(--fondale)",l.style.border="1px solid var(--dettaglio)",l.style.borderRadius="5px",l.style.cursor="pointer",l.style.transition="border-color 0.2s, box-shadow 0.2s, border-radius 0.2s";const c=document.createElement("div");c.style.flex="1",c.style.overflow="hidden",c.style.textOverflow="ellipsis",c.style.whiteSpace="nowrap",c.style.padding="0.5rem",c.textContent=r.name||"Unnamed";const u=document.createElement("div");u.textContent="▶",u.style.padding="0.5rem",u.style.fontSize="0.8rem",u.style.transition="transform 0.2s",u.style.userSelect="none",l.appendChild(c),l.appendChild(u);const d=Ow(r);let h=!1;d&&(r.userData._submenuElement=d),l.addEventListener("click",f=>{f.stopPropagation(),h=!h,d&&(h?(d.style.display="block",u.style.transform="rotate(90deg)",l.style.borderRadius="5px 5px 0 0"):(d.style.display="none",u.style.transform="rotate(0deg)",l.style.borderRadius="5px"))}),a.appendChild(l),d&&a.appendChild(d),i.appendChild(a),window.menuObjectMap.set(r,l),l.addEventListener("mouseenter",()=>{l.classList.add("itemList-hover"),window.setMenuOutline&&window.setMenuOutline(r,!0)}),l.addEventListener("mouseleave",()=>{l.classList.remove("itemList-hover"),window.setMenuOutline&&window.setMenuOutline(r,!1)})})}function pu(){console.log("updateMenu called - no action needed in simplified menu")}function Nw(i){if(!i)return;if(console.log("updateSubmenuTags chiamata per:",i.name),!window.menuObjectMap){console.log("✗ window.menuObjectMap non esiste");return}const e=window.menuObjectMap.get(i);if(!e){console.log("✗ itemList non trovato in menuObjectMap per:",i.name);return}console.log("✓ itemList trovato");const t=e.parentElement;if(!t){console.log("✗ itemContainer non trovato");return}const n=t.querySelector(".submenu");if(!n){console.log("✗ submenu non trovato nel container");return}console.log("✓ submenu trovato, ha _tagsSelector?",!!n._tagsSelector),n._tagsSelector?(console.log("✓ Aggiornando tag grid per:",i.name),Of(n._tagsSelector)):console.log("✗ submenu non ha _tagsSelector")}window.updateSubmenuTags=Nw;class Uw{constructor(){this.ws=null,this.isEnabled=!0,this.host="192.168.0.255",this.port=5e3,this.reconnectAttempts=0,this.maxReconnectAttempts=5,this.reconnectDelay=1e3,this.messageQueue=[],this.onConfigChange=null,this.onConnectionChange=null,this.connect()}setEnabled(e){this.isEnabled=e,e?this.connect():this.disconnect()}connect(){if(this.ws&&this.ws.readyState===WebSocket.OPEN){console.log("OSC WebSocket già connesso");return}const t=`ws://${window.location.hostname}:8081/osc`;console.log(`Connessione OSC a ${t}...`);try{this.ws=new WebSocket(t),this.ws.onopen=()=>{console.log("OSC WebSocket connesso"),this.reconnectAttempts=0,this.processMessageQueue(),this.onConnectionChange&&this.onConnectionChange(!0)},this.ws.onmessage=n=>{const s=JSON.parse(n.data);this.handleMessage(s)},this.ws.onclose=()=>{console.log("OSC WebSocket disconnesso"),this.handleDisconnection()},this.ws.onerror=n=>{console.error("Errore OSC WebSocket:",n)}}catch(n){console.error("Errore creazione OSC WebSocket:",n)}}disconnect(){this.ws&&(this.ws.close(),this.ws=null),this.onConnectionChange&&this.onConnectionChange(!1)}handleDisconnection(){if(this.onConnectionChange&&this.onConnectionChange(!1),!!this.isEnabled)if(this.reconnectAttempts<this.maxReconnectAttempts){this.reconnectAttempts++;const e=this.reconnectDelay*this.reconnectAttempts;console.log(`Tentativo riconnessione OSC ${this.reconnectAttempts}/${this.maxReconnectAttempts} tra ${e}ms...`),setTimeout(()=>{this.isEnabled&&this.connect()},e)}else console.error("OSC: Raggiunto limite tentativi riconnessione")}handleMessage(e){switch(e.type){case"config":this.host=e.host,this.port=e.port,console.log(`OSC configurazione ricevuta: ${this.host}:${this.port}`),this.onConfigChange&&this.onConfigChange(this.host,this.port);break;case"dump_request":console.log("[OSC] Richiesta DUMP ricevuta dal server"),window.messageBroker&&window.messageBroker.sendDump&&window.messageBroker.sendDump();break;case"pong":break;default:console.log("Messaggio OSC sconosciuto:",e)}}updateConfig(e,t){this.host=e,this.port=t,this.sendMessage({type:"config",host:e,port:t}),console.log(`OSC configurazione aggiornata: ${e}:${t}`)}sendOSC(e,t=[]){if(!this.isEnabled){console.log("OSC: Messaggio bloccato (OSC disabilitato)");return}console.log("OSC inviato:",e,t),this.sendMessage({type:"osc",address:e,args:t})}sendMessage(e){this.ws&&this.ws.readyState===WebSocket.OPEN?this.ws.send(JSON.stringify(e)):this.messageQueue.push(e)}processMessageQueue(){for(;this.messageQueue.length>0;){const e=this.messageQueue.shift();this.sendMessage(e)}}}window.oscManager=new Uw;const ct=window.oscManager;class Fw{constructor(){this.oscForceOutput=!1}setOSCForceOutput(e){this.oscForceOutput=e,console.log(`OSC Force Output: ${e?"ATTIVO":"DISATTIVO"}`)}canSendMessages(){return!!(!window.multiClientManager||!window.multiClientManager.isEnabled||window.multiClientManager.isMaster||this.oscForceOutput)}extractIndex(e){const t=e.match(/\d+$/);return t?parseInt(t[0]):0}extractType(e){return e.startsWith("Altoparlante")?"altoparlante":e.startsWith("Omnifonte")?"omnifonte":e.startsWith("Orifonte")?"orifonte":e.startsWith("Aureola")?"aureola":e.startsWith("Zona")?"zona":"unknown"}sendObjectCreated(e){const{id:t,name:n,type:s,position:o={x:0,y:0,z:0},rotation:r={x:0,y:0,z:0},scale:a={x:1,y:1,z:1},tags:l=[0]}=e;if(!this.canSendMessages())return;const c=this.extractIndex(n),u=s||this.extractType(n);ct.isEnabled&&(ct.sendOSC(`/cielo/${u}/added`,[c,o.x,-o.y,o.z]),ct.sendOSC(`/cielo/${u}/tags`,[c,...l]),this.sendObjectCounts()),window.max&&window.max.outlet&&window.max.outlet("added",u,c,n,t,o.x,o.y,o.z,r.x,r.y,r.z)}sendObjectMenuState(e){var o,r;if(!this.canSendMessages()||!ct.isEnabled)return;const t=(o=window.scene)==null?void 0:o.children.find(a=>a.name===e);if(!t){console.warn(`[MessageBroker] sendObjectMenuState: oggetto ${e} non trovato nella scena`);return}const n=this.extractType(e),s=this.extractIndex(e);if(this.initializeMenuStateIfNeeded(t),(r=t.userData)!=null&&r.menuState){console.log(`[MessageBroker] Invio menuState per ${e}:`,t.userData.menuState);const a=this.hasSoloActive(n);Object.entries(t.userData.menuState).forEach(([l,c])=>{if(l==="solo"&&!a){console.log(`[MessageBroker] Salto 'solo' per ${e} - nessun solo attivo`);return}const u=typeof c=="boolean"?c?1:0:c;ct.sendOSC(`/cielo/${n}/${l}`,[s,u])})}else console.warn(`[MessageBroker] menuState non trovato per ${e}`)}sendObjectTransform(e){const{id:t,name:n,type:s,position:o={x:0,y:0,z:0},rotation:r={x:0,y:0,z:0},scale:a={x:1,y:1,z:1},tags:l=[0]}=e;if(!this.canSendMessages())return;const c=this.extractIndex(n),u=s||this.extractType(n);ct.isEnabled&&(ct.sendOSC(`/cielo/${u}/position`,[c,o.x,-o.z,o.y]),u!=="omnifonte"&&ct.sendOSC(`/cielo/${u}/rotation`,[c,r.x,r.z,r.y]))}sendObjectTags(e){const{name:t,type:n,tags:s=[0]}=e;if(!this.canSendMessages())return;const o=this.extractIndex(t),r=n||this.extractType(t);ct.isEnabled&&ct.sendOSC(`/cielo/${r}/tags`,[o,...s])}sendObjectDeleted(e){const{id:t,name:n,type:s}=e;if(!this.canSendMessages())return;const o=this.extractIndex(n),r=s||this.extractType(n);ct.isEnabled&&(ct.sendOSC("/cielo/deleted",[r,o]),this.sendObjectCounts()),window.max&&window.max.outlet&&window.max.outlet("deleted",r,o,n,t)}sendObjectSelected(e){const{id:t,name:n,type:s}=e;if(!this.canSendMessages())return;const o=this.extractIndex(n),r=s||this.extractType(n);ct.isEnabled&&ct.sendOSC("/cielo/selected",[r,o,n,t])}sendCustomParameter(e){const{type:t,index:n,paramName:s,value:o}=e;this.canSendMessages()&&(ct.isEnabled&&ct.sendOSC(`/cielo/${t}/${s}`,[n,o]),window.max&&window.max.outlet&&window.max.outlet(t,n,s,o))}hasSoloActive(e){return window.scene?window.scene.children.some(t=>{var s,o;return this.extractType(t.name)!==e?!1:((o=(s=t.userData)==null?void 0:s.menuState)==null?void 0:o.solo)===!0}):!1}sendObjectCounts(){if(!window.scene)return;let e=0,t=0;window.scene.children.forEach(n=>{const s=this.extractType(n.name);s==="omnifonte"&&e++,s==="altoparlante"&&t++}),ct.isEnabled&&(ct.sendOSC("/cielo/nomnifonti",[e]),ct.sendOSC("/cielo/naltoparlanti",[t])),console.log(`[COUNTS] Inviato: ${e} omnifonti, ${t} altoparlanti`)}initializeMenuStateIfNeeded(e){var o;const t=this.extractType(e.name);(o=e.userData)!=null&&o.menuState&&Object.keys(e.userData.menuState).length>0||!{omnifonte:"/config/omnifonte.json",altoparlante:"/config/altoparlante.json",orifonte:"/config/orifonte.json"}[t]||(e.userData||(e.userData={}),e.userData.menuState||(e.userData.menuState={}),window.submenuConfigs&&window.submenuConfigs[t]&&window.submenuConfigs[t].controls.forEach(a=>{a.oscName&&a.defaultValue!==void 0&&(e.userData.menuState[a.oscName]=a.defaultValue)}))}sendDump(){if(console.log(`
=====================================`),console.log("[DUMP] 🚀 INIZIO DUMP COMPLETO"),console.log(`=====================================
`),!window.scene){console.warn("[DUMP] ⚠️ Scene non disponibile");return}let e=0,t=0,n=0;window.scene.children.forEach(r=>{const a=this.extractType(r.name);a==="omnifonte"&&e++,a==="altoparlante"&&t++}),ct.isEnabled&&(console.log(`[DUMP] 📊 Invio conteggi: ${e} omnifonti, ${t} altoparlanti`),ct.sendOSC("/cielo/nomnifonti",[e]),ct.sendOSC("/cielo/naltoparlanti",[t]),n+=2),e=0,t=0;const s=this.hasSoloActive("omnifonte"),o=this.hasSoloActive("altoparlante");console.log(`[DUMP] 🔍 Solo attivo - Omnifonti: ${s}, Altoparlanti: ${o}`),window.scene.children.forEach(r=>{var c,u;const a=this.extractType(r.name);if(a!=="omnifonte"&&a!=="altoparlante")return;const l=this.extractIndex(r.name);if(this.initializeMenuStateIfNeeded(r),a==="omnifonte"&&e++,a==="altoparlante"&&t++,console.log(`[DUMP] 📦 Elaborando ${r.name} (index: ${l})`),r.position&&ct.isEnabled&&(console.log(`  → Position: [${r.position.x.toFixed(2)}, ${(-r.position.z).toFixed(2)}, ${r.position.y.toFixed(2)}]`),ct.sendOSC(`/cielo/${a}/position`,[l,r.position.x,-r.position.z,r.position.y]),n++),(c=r.userData)!=null&&c.tags&&ct.isEnabled){const d=r.userData.tags.map((h,f)=>h?`${f}.`:null).filter(h=>h!==null);console.log(`  → Tags: [${d.join(" ")}]`),ct.sendOSC(`/cielo/${a}/tags`,[l,...d]),n++}if((u=r.userData)!=null&&u.menuState&&ct.isEnabled){console.log("  → MenuState:",r.userData.menuState);const d=a==="omnifonte"&&!s||a==="altoparlante"&&!o;Object.entries(r.userData.menuState).forEach(([h,f])=>{if(h==="solo"&&d){console.log(`    ⊘ Salto 'solo' - nessun solo attivo per ${a}`);return}const _=typeof f=="boolean"?f?1:0:f;ct.sendOSC(`/cielo/${a}/${h}`,[l,_]),n++})}}),console.log(`
=====================================`),console.log("[DUMP] ✅ COMPLETATO!"),console.log(`[DUMP] 📊 Omnifonti: ${e}`),console.log(`[DUMP] 📊 Altoparlanti: ${t}`),console.log(`[DUMP] 📊 Messaggi OSC inviati: ${n}`),console.log(`=====================================
`)}}window.messageBroker=new Fw;const Bw={};function zw(i){return(typeof import.meta<"u"&&Bw?"/Cielo/":"")+i}function Wn(i,e,t,n,s,o,r,a,l){console.log("loadObj chiamata con:",{name:e,uniqueId:l,x:s,y:o,z:r});const c=new Rf,u=zw(i);c.load(u,function(d){var f,_;const h=new Mn;if(h.name=e,l?(h.userData.id=l,console.log("ID assegnato al gruppo:",e,"ID:",l)):console.warn("Nessun ID fornito per:",e),d.traverse(function(g){g.isMesh&&(g.material=t,g.name=e,h.add(g))}),h.scale.multiplyScalar(n),h.position.set(s,r,o),a&&h.rotation.set(a.x,a.y,a.z),h.userData.tags=[0],te.add(h),qe.push(h),console.log("Oggetto caricato:",e,"ID assegnato:",h.userData.id),l&&((f=window.multiClientManager)!=null&&f.isMaster)&&((_=window.multiClientManager)!=null&&_.isEnabled)){const g=e.toLowerCase().includes("altoparlante")?"altoparlante":e.toLowerCase().includes("orifonte")?"orifonte":e.toLowerCase().includes("aureola")?"aureola":"object";console.log("Notificando creazione oggetto:",g,e,l),window.multiClientManager.notifyObjectCreated(l,g,e,{x:s,y:r,z:o},a?{x:a.x,y:a.y,z:a.z}:{x:0,y:0,z:0},{x:n,y:n,z:n},{},h.userData.tags||[0])}if(l){const g=e.toLowerCase().includes("altoparlante")?"altoparlante":e.toLowerCase().includes("orifonte")?"orifonte":e.toLowerCase().includes("aureola")?"aureola":"object";window.messageBroker.sendObjectCreated({id:l,name:e,type:g,position:{x:s,y:o,z:r},rotation:a?{x:a.x,y:a.y,z:a.z}:{x:0,y:0,z:0},scale:{x:n,y:n,z:n},tags:h.userData.tags||[0]})}e&&/Altoparlante/i.test(e)&&(h.userData=h.userData||{},h.userData.autoRotateToCenter=!0,h.lookAt(0,1.2,0),console.log(`Auto-rotation initialized for new speaker: ${e}`)),console.log(`Loaded ${u} successfully.`),wt(),setTimeout(()=>{window.messageBroker&&e&&window.messageBroker.sendObjectMenuState(e)},100)},function(d){console.log(`${Math.round(d.loaded/d.total*100)}% loaded`)},function(d){console.error("An error happened",d)})}function Mi(i,e){typeof window<"u"&&window.max&&typeof window.max.bindInlet=="function"&&window.max.bindInlet(i,e)}Mi("meshlist",function(){kw()});function kw(){let i=0;qe.forEach(e=>{e.traverse(t=>{if(t.isMesh&&t.name){t.updateMatrixWorld(!0);const n=new A;t.getWorldPosition(n);const s=new pt;t.getWorldQuaternion(s);const o=new zt;o.setFromQuaternion(s);const r=`dict set ${i} ${t.name} position ${n.x} ${n.y} ${n.z} rotation ${o.x} ${o.y} ${o.z}`;typeof window<"u"&&window.max&&typeof window.max.outlet=="function"&&window.max.outlet(r),i++}})})}Mi("moveHalo",function(i,e,t,n){const s=`Aureola-${i}`,o=te.getObjectByName(s);o?(o.position.set(e,n,t),typeof window<"u"&&window.max&&typeof window.max.outlet=="function"&&window.max.outlet("halo",i,e,n,t)):typeof window<"u"&&window.max&&typeof window.max.outlet=="function"&&window.max.outlet("halo",i,"not found")});Mi("rotateHalo",function(i,e,t,n){const s=e*Math.PI*2,o=n*Math.PI*2,r=t*Math.PI*2,a=`Aureola-${i}`,l=te.getObjectByName(a);l?(l.rotation.set(s,o,r),typeof window<"u"&&window.max&&typeof window.max.outlet=="function"&&window.max.outlet("halo",i,s,o,r)):typeof window<"u"&&window.max&&typeof window.max.outlet=="function"&&window.max.outlet("halo",i,"not found")});Mi("addSpeaker",function(i,e,t,n=0,s=0,o=0){let r=0;te.children.forEach(l=>{l.name&&l.name.startsWith("Altoparlante ")&&r++});let a=`Altoparlante ${r+1}`;Wn("./modelli/galleriaOBJ/speaker3dec.obj",a,pi,.045,i,e,t),setTimeout(()=>{const l=te.getObjectByName(a);if(l){const c=n*Math.PI*2,u=s*Math.PI*2,d=o*Math.PI*2;l.rotation.set(c,u,d)}},100),typeof window<"u"&&window.max&&typeof window.max.outlet=="function"&&window.max.outlet(`Speaker ${a}, ${i}, ${e}, ${t}, rot: ${n}, ${s}, ${o}`),Nf()});Mi("moveSpeaker",function(i,e,t,n){const s=`Altoparlante ${i}`,o=te.getObjectByName(s);o?(o.position.set(e,n,t),typeof window<"u"&&window.max&&typeof window.max.outlet=="function"&&window.max.outlet("speaker",i,e,n,t)):typeof window<"u"&&window.max&&typeof window.max.outlet=="function"&&window.max.outlet("speaker",i,"not found")});Mi("rotateSpeaker",function(i,e,t,n){const s=e*Math.PI*2,o=n*Math.PI*2,r=t*Math.PI*2,a=`Altoparlante ${i}`,l=te.getObjectByName(a);l?(l.rotation.set(s,o,r),typeof window<"u"&&window.max&&typeof window.max.outlet=="function"&&window.max.outlet("speaker",i,s,o,r)):typeof window<"u"&&window.max&&typeof window.max.outlet=="function"&&window.max.outlet("speaker",i,"not found")});Mi("addSphere",function(i,e,t){let n=0;te.children.forEach(l=>{l.name&&l.name.startsWith("Omnifonte ")&&n++});let s=`Omnifonte ${n+1}`;const o=new xs(.3,40,40),r=jn,a=new oe(o,r);a.scale.set(.25,.24,.25),a.name=s,a.isDashed=!1,a.position.set(i,e,t),te.add(a),qe.push(a),wt(),typeof window<"u"&&window.max&&typeof window.max.outlet=="function"&&window.max.outlet(`Sfera aggiunta: ${s} in posizione (${i}, ${e}, ${t})`),Uf()});Mi("moveSphere",function(i,e,t,n){const s=`Omnifonte ${i}`,o=te.getObjectByName(s);t=1-t,o?(o.position.set(e,n,t),typeof window<"u"&&window.max&&typeof window.max.outlet=="function"&&window.max.outlet("Omnifonte",i,e,t,n)):typeof window<"u"&&window.max&&typeof window.max.outlet=="function"&&window.max.outlet("Omnifonte",i,"not found")});Mi("setSphere",function(i,e,t,n){const s=`Omnifonte ${i}`,o=te.getObjectByName(s);o&&o.position.set(e,n,t)});let Uc=null;function ds(i){i&&i!==Uc&&typeof window<"u"&&window.max&&typeof window.max.outlet=="function"&&(window.max.outlet("LOJ",i),Uc=i)}function Hw(){Uc=null}function Nf(){typeof window<"u"&&window.max&&typeof window.max.outlet=="function"&&window.max.outlet("loaded","Altoparlanti")}function Uf(){typeof window<"u"&&window.max&&typeof window.max.outlet=="function"&&window.max.outlet("loaded","Omnifonti")}function Gw(){typeof window<"u"&&window.max&&typeof window.max.outlet=="function"&&window.max.outlet("update","Altoparlanti")}function ks(i){const e={};return qe.forEach(t=>{t.name&&t.name.startsWith(i)&&yh(t,e)}),te.traverse(t=>{if(t.alwaysInDict&&t.name&&t.name.startsWith(i)){const n=t.name.replace(/\s+/g,"_");e[n]||yh(t,e)}}),e}function yh(i,e){const t=i.name.replace(/\s+/g,"_"),n=i.name.startsWith("Omnifonte")||i.name.startsWith("POV Cursor")||i.name.startsWith("Orifonte");let s=i;n&&i.parent&&i.parent.type==="Group"&&(s=i.parent),i.updateMatrixWorld(!0);const o=new A;i.getWorldPosition(o);const r=new pt,a=new A;i.matrixWorld.decompose(o,r,a);const l=new zt().setFromQuaternion(r,"XYZ");let c=o,u=l,d=a;s!==i&&(c=s.position,u=s.rotation,d=s.scale);const h={position:{x:c.x,y:c.z,z:c.y},rotation:{x:u.x,y:u.z,z:u.y},scale:{x:d.x,y:d.z,z:d.y}};if(i.name.startsWith("Omnifonte")||i.name.startsWith("POV Cursor")){const f=Math.sqrt(c.x*c.x+c.y*c.y+c.z*c.z),_=Math.atan2(c.z,c.x)*180/Math.PI;h.distance=f,h.angle=_}i.name.startsWith("POV Cursor")&&(h.visible=s.visible),e[t]=h}function tt(i=null){if(!window.max||typeof window.max.setDict!="function")return;window.max.setDict("altoparlanti",ks("Altoparlante")),window.max.setDict("omnifonti",ks("Omnifonte")),window.max.setDict("orifonti",ks("Orifonte")),window.max.setDict("zone",ks("Zona")),window.max.setDict("aureole",ks("Aureola")),window.max.setDict("povcursor",ks("POV Cursor")),(Array.isArray(i)?i:[i]).forEach(t=>{t==="altoparlanti"?Nf():t==="omnifonti"?Uf():t==="update-altoparlanti"&&Gw()})}class Vw{constructor(){this.handle=document.createElement("div"),this.handle.id="group-scale-ui-handle",this.handle.style.position="absolute",this.handle.style.width="24px",this.handle.style.height="24px",this.handle.style.background="transparent",this.handle.style.borderLeft="3px solid #333",this.handle.style.borderTop="3px solid #333",this.handle.style.borderRight="none",this.handle.style.borderBottom="none",this.handle.style.zIndex="1000",this.handle.style.display="none",this.handle.style.cursor="pointer",this.handle.style.userSelect="none",this.handle.title="Trascina per scalare XY",document.body.appendChild(this.handle),this.isActive=!1,this.group=null,this.startX=0,this.startY=0,this.startScaleX=1,this.startScaleY=1,this.onDrag=this.onDrag.bind(this),this.onUp=this.onUp.bind(this),this.handle.addEventListener("mousedown",e=>this.onDown(e))}show(e){this.group=e,this.isActive=!0;const t=window.innerHeight/100,n=window.innerWidth/100;this.handle.style.left=n*30+"px",this.handle.style.top=t*30+"px",this.handle.style.display="block",this.startScaleX=1,this.startScaleY=1,e&&e.children.forEach(s=>{s.userData._originalPos||(s.userData._originalPos=s.position.clone())})}hide(){if(this.isActive&&this.isDragging){console.log("[GroupScaleUIDiv] hide() chiamato ma sto trascinando, IGNORO");return}this.isActive=!1,this.group=null,this.handle.style.display="none"}onDown(e){this.isActive&&(e.preventDefault(),this.isDragging=!0,this.startX=e.clientX,this.startY=e.clientY,this.handleStartLeft=parseFloat(this.handle.style.left),this.handleStartTop=parseFloat(this.handle.style.top),window.addEventListener("mousemove",this.onDrag),window.addEventListener("mouseup",this.onUp))}onDrag(e){if(!this.isActive||!this.group)return;const t=e.clientX-this.startX,n=e.clientY-this.startY;let s=t,o=n;if(e.shiftKey){const l=Math.abs(t)>Math.abs(n)?t:n;s=l,o=l}this.handle.style.left=this.handleStartLeft+s+"px",this.handle.style.top=this.handleStartTop+o+"px";let r=Math.max(.1,Math.min(5,this.startScaleX-s*.01)),a=Math.max(.1,Math.min(5,this.startScaleY-o*.01));this.applyScale(r,a)}onUp(e){window.removeEventListener("mousemove",this.onDrag),window.removeEventListener("mouseup",this.onUp),this.isDragging=!1,this.isActive&&(this.startScaleX=this.lastScaleX||1,this.startScaleY=this.lastScaleY||1,this.group&&(this.group.children.forEach(n=>{n.userData._originalPos&&n.userData._originalPos.copy(n.position)}),this.group.children.length>0&&this.group.children.every(n=>n.name&&n.name.toLowerCase().includes("altoparlante"))&&window.max&&window.max.outlet&&tt("update-altoparlanti")))}applyScale(e,t){if(this.lastScaleX=e,this.lastScaleY=t,!this.group)return;this.group.children.forEach(o=>{const r=o.userData._originalPos;r&&(o.position.x=r.x*e,o.position.y=r.y,o.position.z=r.z*t)}),this.group.updateMatrixWorld(!0);const n=this.group.children;if(!n.length)return;const s=n.every(o=>o.name&&(o.name.toLowerCase().includes("omnifonte")||o.name.toLowerCase().includes("orifonte")));n.every(o=>o.name&&o.name.toLowerCase().includes("altoparlante")),s&&window.max&&window.max.outlet&&n.forEach(o=>{const r=new A;o.getWorldPosition(r);let a=1;const l=o.name.match(/^(.*?)[\s_-]?(\d+)$/);l&&(a=parseInt(l[2],10));const c=r.x,u=r.z,d=r.y,h=Math.sqrt(c*c+u*u);let f=Math.atan2(u,c)*(180/Math.PI)-90;f<0&&(f+=360),window.max.outlet("Omnifonte",a,c,u,d,f,h)}),tt()}static resetChildrenPositions(e){e&&e.children.forEach(t=>{t.userData._originalPos&&t.position.copy(t.userData._originalPos)})}}const Kt=new Vw,Ff={name:"CopyShader",uniforms:{tDiffuse:{value:null},opacity:{value:1}},vertexShader:`

		varying vec2 vUv;

		void main() {

			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		uniform float opacity;

		uniform sampler2D tDiffuse;

		varying vec2 vUv;

		void main() {

			vec4 texel = texture2D( tDiffuse, vUv );
			gl_FragColor = opacity * texel;


		}`};class hr{constructor(){this.isPass=!0,this.enabled=!0,this.needsSwap=!0,this.clear=!1,this.renderToScreen=!1}setSize(){}render(){console.error("THREE.Pass: .render() must be implemented in derived pass.")}dispose(){}}const Ww=new ur(-1,1,1,-1,0,1);class Xw extends xt{constructor(){super(),this.setAttribute("position",new je([-1,3,0,-1,-1,0,3,-1,0],3)),this.setAttribute("uv",new je([0,2,0,0,2,0],2))}}const qw=new Xw;class Bf{constructor(e){this._mesh=new oe(qw,e)}dispose(){this._mesh.geometry.dispose()}render(e){e.render(this._mesh,Ww)}get material(){return this._mesh.material}set material(e){this._mesh.material=e}}class mu extends hr{constructor(e,t){super(),this.textureID=t!==void 0?t:"tDiffuse",e instanceof bt?(this.uniforms=e.uniforms,this.material=e):e&&(this.uniforms=Ss.clone(e.uniforms),this.material=new bt({name:e.name!==void 0?e.name:"unspecified",defines:Object.assign({},e.defines),uniforms:this.uniforms,vertexShader:e.vertexShader,fragmentShader:e.fragmentShader})),this.fsQuad=new Bf(this.material)}render(e,t,n){this.uniforms[this.textureID]&&(this.uniforms[this.textureID].value=n.texture),this.fsQuad.material=this.material,this.renderToScreen?(e.setRenderTarget(null),this.fsQuad.render(e)):(e.setRenderTarget(t),this.clear&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),this.fsQuad.render(e))}dispose(){this.material.dispose(),this.fsQuad.dispose()}}class wh extends hr{constructor(e,t){super(),this.scene=e,this.camera=t,this.clear=!0,this.needsSwap=!1,this.inverse=!1}render(e,t,n){const s=e.getContext(),o=e.state;o.buffers.color.setMask(!1),o.buffers.depth.setMask(!1),o.buffers.color.setLocked(!0),o.buffers.depth.setLocked(!0);let r,a;this.inverse?(r=0,a=1):(r=1,a=0),o.buffers.stencil.setTest(!0),o.buffers.stencil.setOp(s.REPLACE,s.REPLACE,s.REPLACE),o.buffers.stencil.setFunc(s.ALWAYS,r,4294967295),o.buffers.stencil.setClear(a),o.buffers.stencil.setLocked(!0),e.setRenderTarget(n),this.clear&&e.clear(),e.render(this.scene,this.camera),e.setRenderTarget(t),this.clear&&e.clear(),e.render(this.scene,this.camera),o.buffers.color.setLocked(!1),o.buffers.depth.setLocked(!1),o.buffers.color.setMask(!0),o.buffers.depth.setMask(!0),o.buffers.stencil.setLocked(!1),o.buffers.stencil.setFunc(s.EQUAL,1,4294967295),o.buffers.stencil.setOp(s.KEEP,s.KEEP,s.KEEP),o.buffers.stencil.setLocked(!0)}}class jw extends hr{constructor(){super(),this.needsSwap=!1}render(e){e.state.buffers.stencil.setLocked(!1),e.state.buffers.stencil.setTest(!1)}}class zf{constructor(e,t){if(this.renderer=e,this._pixelRatio=e.getPixelRatio(),t===void 0){const n=e.getSize(new me);this._width=n.width,this._height=n.height,t=new tn(this._width*this._pixelRatio,this._height*this._pixelRatio,{type:Dn}),t.texture.name="EffectComposer.rt1"}else this._width=t.width,this._height=t.height;this.renderTarget1=t,this.renderTarget2=t.clone(),this.renderTarget2.texture.name="EffectComposer.rt2",this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2,this.renderToScreen=!0,this.passes=[],this.copyPass=new mu(Ff),this.copyPass.material.blending=$n,this.clock=new Vg}swapBuffers(){const e=this.readBuffer;this.readBuffer=this.writeBuffer,this.writeBuffer=e}addPass(e){this.passes.push(e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}insertPass(e,t){this.passes.splice(t,0,e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}removePass(e){const t=this.passes.indexOf(e);t!==-1&&this.passes.splice(t,1)}isLastEnabledPass(e){for(let t=e+1;t<this.passes.length;t++)if(this.passes[t].enabled)return!1;return!0}render(e){e===void 0&&(e=this.clock.getDelta());const t=this.renderer.getRenderTarget();let n=!1;for(let s=0,o=this.passes.length;s<o;s++){const r=this.passes[s];if(r.enabled!==!1){if(r.renderToScreen=this.renderToScreen&&this.isLastEnabledPass(s),r.render(this.renderer,this.writeBuffer,this.readBuffer,e,n),r.needsSwap){if(n){const a=this.renderer.getContext(),l=this.renderer.state.buffers.stencil;l.setFunc(a.NOTEQUAL,1,4294967295),this.copyPass.render(this.renderer,this.writeBuffer,this.readBuffer,e),l.setFunc(a.EQUAL,1,4294967295)}this.swapBuffers()}wh!==void 0&&(r instanceof wh?n=!0:r instanceof jw&&(n=!1))}}this.renderer.setRenderTarget(t)}reset(e){if(e===void 0){const t=this.renderer.getSize(new me);this._pixelRatio=this.renderer.getPixelRatio(),this._width=t.width,this._height=t.height,e=this.renderTarget1.clone(),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.renderTarget1=e,this.renderTarget2=e.clone(),this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2}setSize(e,t){this._width=e,this._height=t;const n=this._width*this._pixelRatio,s=this._height*this._pixelRatio;this.renderTarget1.setSize(n,s),this.renderTarget2.setSize(n,s);for(let o=0;o<this.passes.length;o++)this.passes[o].setSize(n,s)}setPixelRatio(e){this._pixelRatio=e,this.setSize(this._width,this._height)}dispose(){this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.copyPass.dispose()}}class kf extends hr{constructor(e,t,n=null,s=null,o=null){super(),this.scene=e,this.camera=t,this.overrideMaterial=n,this.clearColor=s,this.clearAlpha=o,this.clear=!0,this.clearDepth=!1,this.needsSwap=!1,this._oldClearColor=new se}render(e,t,n){const s=e.autoClear;e.autoClear=!1;let o,r;this.overrideMaterial!==null&&(r=this.scene.overrideMaterial,this.scene.overrideMaterial=this.overrideMaterial),this.clearColor!==null&&(e.getClearColor(this._oldClearColor),e.setClearColor(this.clearColor,e.getClearAlpha())),this.clearAlpha!==null&&(o=e.getClearAlpha(),e.setClearAlpha(this.clearAlpha)),this.clearDepth==!0&&e.clearDepth(),e.setRenderTarget(this.renderToScreen?null:n),this.clear===!0&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),e.render(this.scene,this.camera),this.clearColor!==null&&e.setClearColor(this._oldClearColor),this.clearAlpha!==null&&e.setClearAlpha(o),this.overrideMaterial!==null&&(this.scene.overrideMaterial=r),e.autoClear=s}}const Hf={name:"FXAAShader",uniforms:{tDiffuse:{value:null},resolution:{value:new me(1/1024,1/512)}},vertexShader:`

		varying vec2 vUv;

		void main() {

			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		// FXAA algorithm from NVIDIA, C# implementation by Jasper Flick, GLSL port by Dave Hoskins
		// http://developer.download.nvidia.com/assets/gamedev/files/sdk/11/FXAA_WhitePaper.pdf
		// https://catlikecoding.com/unity/tutorials/advanced-rendering/fxaa/

		uniform sampler2D tDiffuse;
		uniform vec2 resolution;
		varying vec2 vUv;

		#define EDGE_STEP_COUNT 6
		#define EDGE_GUESS 8.0
		#define EDGE_STEPS 1.0, 1.5, 2.0, 2.0, 2.0, 4.0
		const float edgeSteps[EDGE_STEP_COUNT] = float[EDGE_STEP_COUNT]( EDGE_STEPS );

		float _ContrastThreshold = 0.0312;
		float _RelativeThreshold = 0.063;
		float _SubpixelBlending = 1.0;

		vec4 Sample( sampler2D  tex2D, vec2 uv ) {

			return texture( tex2D, uv );

		}

		float SampleLuminance( sampler2D tex2D, vec2 uv ) {

			return dot( Sample( tex2D, uv ).rgb, vec3( 0.3, 0.59, 0.11 ) );

		}

		float SampleLuminance( sampler2D tex2D, vec2 texSize, vec2 uv, float uOffset, float vOffset ) {

			uv += texSize * vec2(uOffset, vOffset);
			return SampleLuminance(tex2D, uv);

		}

		struct LuminanceData {

			float m, n, e, s, w;
			float ne, nw, se, sw;
			float highest, lowest, contrast;

		};

		LuminanceData SampleLuminanceNeighborhood( sampler2D tex2D, vec2 texSize, vec2 uv ) {

			LuminanceData l;
			l.m = SampleLuminance( tex2D, uv );
			l.n = SampleLuminance( tex2D, texSize, uv,  0.0,  1.0 );
			l.e = SampleLuminance( tex2D, texSize, uv,  1.0,  0.0 );
			l.s = SampleLuminance( tex2D, texSize, uv,  0.0, -1.0 );
			l.w = SampleLuminance( tex2D, texSize, uv, -1.0,  0.0 );

			l.ne = SampleLuminance( tex2D, texSize, uv,  1.0,  1.0 );
			l.nw = SampleLuminance( tex2D, texSize, uv, -1.0,  1.0 );
			l.se = SampleLuminance( tex2D, texSize, uv,  1.0, -1.0 );
			l.sw = SampleLuminance( tex2D, texSize, uv, -1.0, -1.0 );

			l.highest = max( max( max( max( l.n, l.e ), l.s ), l.w ), l.m );
			l.lowest = min( min( min( min( l.n, l.e ), l.s ), l.w ), l.m );
			l.contrast = l.highest - l.lowest;
			return l;

		}

		bool ShouldSkipPixel( LuminanceData l ) {

			float threshold = max( _ContrastThreshold, _RelativeThreshold * l.highest );
			return l.contrast < threshold;

		}

		float DeterminePixelBlendFactor( LuminanceData l ) {

			float f = 2.0 * ( l.n + l.e + l.s + l.w );
			f += l.ne + l.nw + l.se + l.sw;
			f *= 1.0 / 12.0;
			f = abs( f - l.m );
			f = clamp( f / l.contrast, 0.0, 1.0 );

			float blendFactor = smoothstep( 0.0, 1.0, f );
			return blendFactor * blendFactor * _SubpixelBlending;

		}

		struct EdgeData {

			bool isHorizontal;
			float pixelStep;
			float oppositeLuminance, gradient;

		};

		EdgeData DetermineEdge( vec2 texSize, LuminanceData l ) {

			EdgeData e;
			float horizontal =
				abs( l.n + l.s - 2.0 * l.m ) * 2.0 +
				abs( l.ne + l.se - 2.0 * l.e ) +
				abs( l.nw + l.sw - 2.0 * l.w );
			float vertical =
				abs( l.e + l.w - 2.0 * l.m ) * 2.0 +
				abs( l.ne + l.nw - 2.0 * l.n ) +
				abs( l.se + l.sw - 2.0 * l.s );
			e.isHorizontal = horizontal >= vertical;

			float pLuminance = e.isHorizontal ? l.n : l.e;
			float nLuminance = e.isHorizontal ? l.s : l.w;
			float pGradient = abs( pLuminance - l.m );
			float nGradient = abs( nLuminance - l.m );

			e.pixelStep = e.isHorizontal ? texSize.y : texSize.x;
			
			if (pGradient < nGradient) {

				e.pixelStep = -e.pixelStep;
				e.oppositeLuminance = nLuminance;
				e.gradient = nGradient;

			} else {

				e.oppositeLuminance = pLuminance;
				e.gradient = pGradient;

			}

			return e;

		}

		float DetermineEdgeBlendFactor( sampler2D  tex2D, vec2 texSize, LuminanceData l, EdgeData e, vec2 uv ) {

			vec2 uvEdge = uv;
			vec2 edgeStep;
			if (e.isHorizontal) {

				uvEdge.y += e.pixelStep * 0.5;
				edgeStep = vec2( texSize.x, 0.0 );

			} else {

				uvEdge.x += e.pixelStep * 0.5;
				edgeStep = vec2( 0.0, texSize.y );

			}

			float edgeLuminance = ( l.m + e.oppositeLuminance ) * 0.5;
			float gradientThreshold = e.gradient * 0.25;

			vec2 puv = uvEdge + edgeStep * edgeSteps[0];
			float pLuminanceDelta = SampleLuminance( tex2D, puv ) - edgeLuminance;
			bool pAtEnd = abs( pLuminanceDelta ) >= gradientThreshold;

			for ( int i = 1; i < EDGE_STEP_COUNT && !pAtEnd; i++ ) {

				puv += edgeStep * edgeSteps[i];
				pLuminanceDelta = SampleLuminance( tex2D, puv ) - edgeLuminance;
				pAtEnd = abs( pLuminanceDelta ) >= gradientThreshold;

			}

			if ( !pAtEnd ) {

				puv += edgeStep * EDGE_GUESS;

			}

			vec2 nuv = uvEdge - edgeStep * edgeSteps[0];
			float nLuminanceDelta = SampleLuminance( tex2D, nuv ) - edgeLuminance;
			bool nAtEnd = abs( nLuminanceDelta ) >= gradientThreshold;

			for ( int i = 1; i < EDGE_STEP_COUNT && !nAtEnd; i++ ) {

				nuv -= edgeStep * edgeSteps[i];
				nLuminanceDelta = SampleLuminance( tex2D, nuv ) - edgeLuminance;
				nAtEnd = abs( nLuminanceDelta ) >= gradientThreshold;

			}

			if ( !nAtEnd ) {

				nuv -= edgeStep * EDGE_GUESS;

			}

			float pDistance, nDistance;
			if ( e.isHorizontal ) {

				pDistance = puv.x - uv.x;
				nDistance = uv.x - nuv.x;

			} else {
				
				pDistance = puv.y - uv.y;
				nDistance = uv.y - nuv.y;

			}

			float shortestDistance;
			bool deltaSign;
			if ( pDistance <= nDistance ) {

				shortestDistance = pDistance;
				deltaSign = pLuminanceDelta >= 0.0;

			} else {

				shortestDistance = nDistance;
				deltaSign = nLuminanceDelta >= 0.0;

			}

			if ( deltaSign == ( l.m - edgeLuminance >= 0.0 ) ) {

				return 0.0;

			}

			return 0.5 - shortestDistance / ( pDistance + nDistance );

		}

		vec4 ApplyFXAA( sampler2D  tex2D, vec2 texSize, vec2 uv ) {

			LuminanceData luminance = SampleLuminanceNeighborhood( tex2D, texSize, uv );
			if ( ShouldSkipPixel( luminance ) ) {

				return Sample( tex2D, uv );

			}

			float pixelBlend = DeterminePixelBlendFactor( luminance );
			EdgeData edge = DetermineEdge( texSize, luminance );
			float edgeBlend = DetermineEdgeBlendFactor( tex2D, texSize, luminance, edge, uv );
			float finalBlend = max( pixelBlend, edgeBlend );

			if (edge.isHorizontal) {

				uv.y += edge.pixelStep * finalBlend;

			} else {

				uv.x += edge.pixelStep * finalBlend;

			}

			return Sample( tex2D, uv );

		}

		void main() {

			gl_FragColor = ApplyFXAA( tDiffuse, resolution.xy, vUv );
			
		}`};class Gf extends oe{constructor(e=10,t=16,n=new se(15658734),s=new se(14540253),o=.35){const r=new vs(e,e,1,1),a=new bt({side:pn,transparent:!0,uniforms:{u_size:{value:e},u_divisions:{value:t},u_color1:{value:n},u_color2:{value:s},u_opacity:{value:o}},vertexShader:`
                varying vec2 vUv;
                void main() {
                    vUv = uv;
                    gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
                }
            `,fragmentShader:`
                varying vec2 vUv;
                uniform float u_size;
                uniform float u_divisions;
                uniform vec3 u_color1;
                uniform vec3 u_color2;
                uniform float u_opacity;
                float gridLine(float coord, float divisions) {
                    float line = abs(fract(coord * divisions) - 0.5) / fwidth(coord * divisions);
                    return 1.0 - min(line, 1.0);
                }
                void main() {
                    float gX = gridLine(vUv.x, u_divisions);
                    float gY = gridLine(vUv.y, u_divisions);
                    float grid = max(gX, gY);
                    vec3 color = mix(u_color2, u_color1, grid);
                    float alpha = mix(0.0, u_opacity, grid);
                    if(alpha < 0.01) discard;
                    gl_FragColor = vec4(color, alpha);
                }
            `});super(r,a),this.frustumCulled=!1,this.renderOrder=-1,this.position.y=0,this.rotation.x=-Math.PI/2}setSize(e,t){this.geometry.dispose(),this.geometry=new vs(e,e,1,1),this.material.uniforms.u_size.value=e,this.material.uniforms.u_divisions.value=t}setVisible(e){this.visible=e}}let te,no,Xe,le,Dt,Nt,qe=[],Ui,ei,Ce,gs,hs,qo=14079702,Il=null;window.objToBeDetected=qe;const Bo=document.getElementById("visualizzazione");let Hs=!1;function Ol(){return Il||(Il=document.getElementById("ghostButton")),Il}function ta(i,e){te.remove(no),no=new Gf(i,e,new se(8947848),new se(4473924),.85),te.add(no)}function $w(){no=new Gf(10,16,new se(8947848),new se(4473924),.85),te=new ag,te.add(no),window.scene=te;const i=window.innerWidth/window.innerHeight,e=8;Ui=new sn(50,i,.3,200),ei=new ur(-e*i,e*i,e,-e,.3,200),Ce=Ui,Ce.position.set(12,3,12);const t=new zg(15198183,4);te.add(t);const n=new Ic(16777215,1.6);n.position.set(5,10,7.5),n.castShadow=!0,te.add(n);const s=new Ic(16777215,1.6);s.position.set(-5,10,-7.5),s.castShadow=!0,te.add(s),te.add(Ce),Xe=new Uy({antialias:!0,alpha:!0}),Xe.setPixelRatio(window.devicePixelRatio),Xe.setSize(window.innerWidth,window.innerHeight),Xe.autoClear=!1,Xe.setClearColor(qo),document.body.appendChild(Xe.domElement),gs=new zf(Xe);const o=new kf(te,Ce);gs.addPass(o),hs=new mu(Hf);const r=Xe.getPixelRatio();hs.material.uniforms.resolution.value.x=1/(window.innerWidth*r),hs.material.uniforms.resolution.value.y=1/(window.innerHeight*r),gs.addPass(hs),Dt=new th(Ui,Xe.domElement),Dt.update(),Nt=new th(ei,Xe.domElement),Nt.enableRotate=!1,Nt.enablePan=!0,Nt.enableZoom=!0,Nt.update(),Kw(),window.addEventListener("keydown",function(u){var _,g,m,p,y,w,v,b,E,C,D,S;const d=document.activeElement;if(d&&(d.tagName==="INPUT"||d.tagName==="TEXTAREA"||d.isContentEditable)&&["1","2","3","4"].includes(u.key))return;const f=()=>{var x,P,F,O,k,L,N;return{currentSelectedObject:((x=window.raycasterGlobals)==null?void 0:x.currentSelectedObject)||null,lastHoveredObject:((P=window.raycasterGlobals)==null?void 0:P.lastHoveredObject)||null,isRaycasterActive:((F=window.raycasterGlobals)==null?void 0:F.isRaycasterActive)||!1,setRaycasterActive:((O=window.raycasterGlobals)==null?void 0:O.setRaycasterActive)||(()=>{}),duplicateObject:((k=window.raycasterGlobals)==null?void 0:k.duplicateObject)||(()=>{}),deleteSelectedObject:((L=window.raycasterGlobals)==null?void 0:L.deleteSelectedObject)||(()=>{}),updateMenu:((N=window.raycasterGlobals)==null?void 0:N.updateMenu)||(()=>{})}};switch(u.key){case"1":Kt.hide(),Ce=Ui,Dt.enabled=!0,Nt.enabled=!1,Dt.object=Ce,Dt.update(),le.camera=Ce,window.updatePostProcessingCamera&&window.updatePostProcessingCamera(Ce),Bo.textContent="Prospettiva",Xe.render(te,Ce);break;case"2":Kt.hide(),Ce=ei,Dt.enabled=!1,Nt.enabled=!0,Nt.object=Ce,Nt.update(),Ce.position.set(0,8,0),Ce.lookAt(0,0,0),Nt.target.set(0,0,0),le.camera=Ce,window.updatePostProcessingCamera&&window.updatePostProcessingCamera(Ce),Bo.textContent="Pianta",Xe.render(te,Ce);break;case"3":Kt.hide(),Ce=ei,Dt.enabled=!1,Nt.enabled=!0,Nt.object=Ce,Nt.update(),Ce.position.set(0,0,8),Ce.lookAt(0,0,0),Nt.target.set(0,0,0),le.camera=Ce,window.updatePostProcessingCamera&&window.updatePostProcessingCamera(Ce),Bo.textContent="Fronte",Xe.render(te,Ce);break;case"4":Kt.hide(),Ce=ei,Dt.enabled=!1,Nt.enabled=!0,Nt.object=Ce,Nt.update(),Ce.position.set(8,0,0),Ce.lookAt(0,0,0),Nt.target.set(0,0,0),le.camera=Ce,window.updatePostProcessingCamera&&window.updatePostProcessingCamera(Ce),Bo.textContent="Lato",Xe.render(te,Ce);break;case"q":le.setSpace(le.space==="local"?"world":"local");break;case"g":Kt.hide();const x=f(),P=x.lastHoveredObject||x.currentSelectedObject;if(P){const $=(_=P.parent)!=null&&_.isGroup?P.parent:P;le.setMode("translate"),le.attach($),(g=window.raycasterGlobals)!=null&&g.setRaycasterActiveForTransformControls&&window.raycasterGlobals.setRaycasterActiveForTransformControls(!1),Dt.enabled=!1,Hs=!0,setTimeout(()=>{Hs=!1},100),(m=window.raycasterGlobals)!=null&&m.outlinePass&&(window.raycasterGlobals.outlinePass.selectedObjects=[])}else{le.setMode("translate");const $=Ol();$&&($.style.display="block",$.style.right="21.5rem")}if(P&&window.transformContextMenu){const $=(p=P.parent)!=null&&p.isGroup?P.parent:P;window.transformContextMenu.show($),window.transformContextMenu.updateState("move")}else window.transformContextMenu&&window.transformContextMenu.isVisible()&&window.transformContextMenu.updateState("move");break;case"r":Kt.hide();const F=f(),O=F.lastHoveredObject||F.currentSelectedObject;if(O){const $=(y=O.parent)!=null&&y.isGroup?O.parent:O,ae=$.name||"";if(ae.toLowerCase().includes("altoparlante")){console.log("Keyboard R: Activating rotation for speaker:",ae);const ye=((w=$.userData)==null?void 0:w.autoRotateToCenter)===!0;console.log("Keyboard R: LookAt was active:",ye),ye&&window.orientSpeakerToCenter?window.orientSpeakerToCenter($,!1):$.userData&&($.userData.autoRotateToCenter=!1,console.log("Keyboard R: LookAt disabled without resetting rotation - keeping current rotation")),window.updateMenuForObject&&window.updateMenuForObject($),console.log("Keyboard R: LookAt center flag updated to:",(v=$.userData)==null?void 0:v.autoRotateToCenter),console.log("Keyboard R: Speaker rotation mode activated - lookAt center handled based on previous state")}le.setMode("rotate"),le.attach($),(b=window.raycasterGlobals)!=null&&b.setRaycasterActiveForTransformControls&&window.raycasterGlobals.setRaycasterActiveForTransformControls(!1),Dt.enabled=!1,Hs=!0,setTimeout(()=>{Hs=!1},100),(E=window.raycasterGlobals)!=null&&E.outlinePass&&(window.raycasterGlobals.outlinePass.selectedObjects=[])}else{le.setMode("rotate");const $=Ol();$&&($.style.display="block",$.style.right="16.5rem")}if(O&&window.transformContextMenu){const $=(C=O.parent)!=null&&C.isGroup?O.parent:O;window.transformContextMenu.show($),window.transformContextMenu.updateState("rotate")}else window.transformContextMenu&&window.transformContextMenu.isVisible()&&window.transformContextMenu.updateState("rotate");break;case"s":const L=f().lastHoveredObject;L?(le&&le.object&&le.detach(),Dt.enabled=!0,Kt.show(L),L.name==="Gruppo di trasformazione"&&Ce&&Ce.isOrthographicCamera&&Ce.position.y>Math.abs(Ce.position.x)&&Ce.position.y>Math.abs(Ce.position.z),window.transformContextMenu&&(window.transformContextMenu.show(L),window.transformContextMenu.updateState("scale"))):console.log("Tasto S: nessun oggetto selezionato per la scala");break;case"Escape":if(Hs){console.log("Escape ignored: ignoreNextEscape flag active"),Hs=!1;return}le&&le.object&&le.detach(),Dt.enabled=!0;const N=Ol();N&&(N.style.display="none");const V=f();(D=window.raycasterGlobals)!=null&&D.clearTransformControlsOverride&&window.raycasterGlobals.clearTransformControlsOverride(),V.setRaycasterActive(!0),(S=window.raycasterGlobals)!=null&&S.outlinePass&&(window.raycasterGlobals.outlinePass.selectedObjects=[]),V.currentSelectedObject=null,V.lastHoveredObject=null,window.transformContextMenu&&window.transformContextMenu.hide(),V.updateMenu(),Kt.hide();break;default:if(u.shiftKey&&u.key.toLowerCase()==="d"){const $=f();$.currentSelectedObject&&$.duplicateObject&&$.duplicateObject($.currentSelectedObject)}break;case"x":case"Backspace":const H=document.activeElement;if(!(H&&(H.tagName==="INPUT"||H.tagName==="TEXTAREA"||H.isContentEditable))){const $=f();$.deleteSelectedObject&&$.deleteSelectedObject()}break}}),Xe.domElement.addEventListener("dblclick",function(){const u=Ce.zoom;Ce===Ui&&(Ce.position.set(12,3,12),Ce.lookAt(0,0,0)),Ce.zoom=u,Ce.updateProjectionMatrix(),Dt.target.set(0,0,0),Dt.update()}),window.addEventListener("resize",Zw);const l=[{key:"1",label:"Prospettiva"},{key:"2",label:"Pianta"},{key:"3",label:"Fronte"},{key:"4",label:"Lato"}];let c=0;Bo.addEventListener("click",()=>{c=(c+1)%l.length;const u=new KeyboardEvent("keydown",{key:l[c].key});window.dispatchEvent(u)}),window.setupGlobals={control:le}}function Yw(i){var e=document.documentElement;i?(qo=0,Xe.setClearColor(qo),e.style.setProperty("--fondale","var(--fondaleNero)"),e.style.setProperty("--testo","var(--fondaleBianco)"),e.style.setProperty("--dettaglio","var(--grigino)"),jn.uniforms.coolColor.value=new se(14079702),jn.uniforms.warmColor.value=new se(15263976)):(qo=14079702,Xe.setClearColor(qo),e.style.setProperty("--fondale","var(--fondaleBianco)"),e.style.setProperty("--testo","var(--fondaleNero)"),e.style.setProperty("--dettaglio","var(--grigio)"),jn.uniforms.coolColor.value=new se(3158064),jn.uniforms.warmColor.value=new se(0)),window.conditionalLinesManager&&window.currentPlasticoControl&&ys(()=>Promise.resolve().then(()=>mM),void 0).then(t=>{const n=window.currentPlasticoControl;if(n){const s=t.getCSSColorAsHex("--fondale"),o=t.getCSSColorAsHex("--testo");n.setMaterialColor(s),n.setLineColor(o)}})}function Vf(){window.raycasterComposer?window.raycasterComposer.render():gs?gs.render():Xe.render(te,Ce),requestAnimationFrame(Vf)}function Kw(){le=new Jy(Ui,Xe.domElement),le.setTranslationSnap(.05),le.setRotationSnap(_i.degToRad(15)),le.setScaleSnap(.05),le.addEventListener("dragging-changed",function(n){Dt.enabled=!n.value}),le.addEventListener("objectChange",function(n){const s=le.object;s&&window.applyAutoRotationIfEnabled&&window.applyAutoRotationIfEnabled(s)});function i(){const n={X:16537697,Y:8577862,Z:4629219};function s(o){o.isMesh&&o.material&&o.name&&(o.name.includes("X")&&o.material.color.setHex(n.X),o.name.includes("Y")&&o.material.color.setHex(n.Y),o.name.includes("Z")&&o.material.color.setHex(n.Z)),o.children&&o.children.length&&o.children.forEach(r=>s(r))}Array.isArray(le.children)&&le.children.length>0?le.children.forEach(o=>s(o)):le._gizmo&&s(le._gizmo)}i(),le.addEventListener("objectChange",i);const e=le.getHelper();function t(n){n.isTransformControls=!0,n.children&&n.children.forEach(s=>t(s))}t(e),t(le),te.add(e)}function Zw(){const i=window.innerWidth/window.innerHeight;if(Ui.aspect=i,Ui.updateProjectionMatrix(),ei.left=ei.bottom*i,ei.right=ei.top*i,ei.updateProjectionMatrix(),Xe.setSize(window.innerWidth,window.innerHeight),gs&&gs.setSize(window.innerWidth,window.innerHeight),hs){const e=Xe.getPixelRatio();hs.material.uniforms.resolution.value.x=1/(window.innerWidth*e),hs.material.uniforms.resolution.value.y=1/(window.innerHeight*e)}window.resizeRaycasterComposer&&window.resizeRaycasterComposer(),Wf()}let Nl={width:0,height:0},Sh=0;function Wf(i=!1){if(!window.conditionalLinesManager||typeof window.conditionalLinesManager.updateResolutions!="function")return;const e={width:window.innerWidth,height:window.innerHeight},t=window.devicePixelRatio||1,n=e.width!==Nl.width||e.height!==Nl.height;(i||n||t!==Sh)&&(window.conditionalLinesManager.updateResolutions(),Nl={...e},Sh=t)}window.forceConditionalLinesUpdate=()=>Wf(!0);function Jw(i,e=!1){const t=i[0].index!==null,n=new Set(Object.keys(i[0].attributes)),s=new Set(Object.keys(i[0].morphAttributes)),o={},r={},a=i[0].morphTargetsRelative,l=new xt;let c=0;for(let u=0;u<i.length;++u){const d=i[u];let h=0;if(t!==(d.index!==null))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+". All geometries must have compatible attributes; make sure index attribute exists among all geometries, or in none of them."),null;for(const f in d.attributes){if(!n.has(f))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+'. All geometries must have compatible attributes; make sure "'+f+'" attribute exists among all geometries, or in none of them.'),null;o[f]===void 0&&(o[f]=[]),o[f].push(d.attributes[f]),h++}if(h!==n.size)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+". Make sure all geometries have the same number of attributes."),null;if(a!==d.morphTargetsRelative)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+". .morphTargetsRelative must be consistent throughout all geometries."),null;for(const f in d.morphAttributes){if(!s.has(f))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+".  .morphAttributes must be consistent throughout all geometries."),null;r[f]===void 0&&(r[f]=[]),r[f].push(d.morphAttributes[f])}if(e){let f;if(t)f=d.index.count;else if(d.attributes.position!==void 0)f=d.attributes.position.count;else return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+". The geometry must have either an index or a position attribute"),null;l.addGroup(c,f,u),c+=f}}if(t){let u=0;const d=[];for(let h=0;h<i.length;++h){const f=i[h].index;for(let _=0;_<f.count;++_)d.push(f.getX(_)+u);u+=i[h].attributes.position.count}l.setIndex(d)}for(const u in o){const d=Mh(o[u]);if(!d)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+u+" attribute."),null;l.setAttribute(u,d)}for(const u in r){const d=r[u][0].length;if(d===0)break;l.morphAttributes=l.morphAttributes||{},l.morphAttributes[u]=[];for(let h=0;h<d;++h){const f=[];for(let g=0;g<r[u].length;++g)f.push(r[u][g][h]);const _=Mh(f);if(!_)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+u+" morphAttribute."),null;l.morphAttributes[u].push(_)}}return l}function Mh(i){let e,t,n,s=-1,o=0;for(let c=0;c<i.length;++c){const u=i[c];if(e===void 0&&(e=u.array.constructor),e!==u.array.constructor)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.array must be of consistent array types across matching attributes."),null;if(t===void 0&&(t=u.itemSize),t!==u.itemSize)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.itemSize must be consistent across matching attributes."),null;if(n===void 0&&(n=u.normalized),n!==u.normalized)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.normalized must be consistent across matching attributes."),null;if(s===-1&&(s=u.gpuType),s!==u.gpuType)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.gpuType must be consistent across matching attributes."),null;o+=u.count*t}const r=new e(o),a=new At(r,t,n);let l=0;for(let c=0;c<i.length;++c){const u=i[c];if(u.isInterleavedBufferAttribute){const d=l/t;for(let h=0,f=u.count;h<f;h++)for(let _=0;_<t;_++){const g=u.getComponent(h,_);a.setComponent(h+d,_,g)}}else r.set(u.array,l);l+=u.count*t}return s!==void 0&&(a.gpuType=s),a}function na(i,e=1e-4){e=Math.max(e,Number.EPSILON);const t={},n=i.getIndex(),s=i.getAttribute("position"),o=n?n.count:s.count;let r=0;const a=Object.keys(i.attributes),l={},c={},u=[],d=["getX","getY","getZ","getW"],h=["setX","setY","setZ","setW"];for(let y=0,w=a.length;y<w;y++){const v=a[y],b=i.attributes[v];l[v]=new b.constructor(new b.array.constructor(b.count*b.itemSize),b.itemSize,b.normalized);const E=i.morphAttributes[v];E&&(c[v]||(c[v]=[]),E.forEach((C,D)=>{const S=new C.array.constructor(C.count*C.itemSize);c[v][D]=new C.constructor(S,C.itemSize,C.normalized)}))}const f=e*.5,_=Math.log10(1/e),g=Math.pow(10,_),m=f*g;for(let y=0;y<o;y++){const w=n?n.getX(y):y;let v="";for(let b=0,E=a.length;b<E;b++){const C=a[b],D=i.getAttribute(C),S=D.itemSize;for(let x=0;x<S;x++)v+=`${~~(D[d[x]](w)*g+m)},`}if(v in t)u.push(t[v]);else{for(let b=0,E=a.length;b<E;b++){const C=a[b],D=i.getAttribute(C),S=i.morphAttributes[C],x=D.itemSize,P=l[C],F=c[C];for(let O=0;O<x;O++){const k=d[O],L=h[O];if(P[L](r,D[k](w)),S)for(let N=0,V=S.length;N<V;N++)F[N][L](r,S[N][k](w))}}t[v]=r,u.push(r),r++}}const p=i.clone();for(const y in i.attributes){const w=l[y];if(p.setAttribute(y,new w.constructor(w.array.slice(0,r*w.itemSize),w.itemSize,w.normalized)),y in c)for(let v=0;v<c[y].length;v++){const b=c[y][v];p.morphAttributes[y][v]=new b.constructor(b.array.slice(0,r*b.itemSize),b.itemSize,b.normalized)}}return p.setIndex(u),p}function Eh(i,e){if(e===um)return console.warn("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Geometry already defined as triangles."),i;if(e===Cc||e===ef){let t=i.getIndex();if(t===null){const r=[],a=i.getAttribute("position");if(a!==void 0){for(let l=0;l<a.count;l++)r.push(l);i.setIndex(r),t=i.getIndex()}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Undefined position attribute. Processing not possible."),i}const n=t.count-2,s=[];if(e===Cc)for(let r=1;r<=n;r++)s.push(t.getX(0)),s.push(t.getX(r)),s.push(t.getX(r+1));else for(let r=0;r<n;r++)r%2===0?(s.push(t.getX(r)),s.push(t.getX(r+1)),s.push(t.getX(r+2))):(s.push(t.getX(r+2)),s.push(t.getX(r+1)),s.push(t.getX(r)));s.length/3!==n&&console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unable to generate correct amount of triangles.");const o=i.clone();return o.setIndex(s),o.clearGroups(),o}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unknown draw mode:",e),i}class Ga extends Ms{constructor(e){super(e),this.dracoLoader=null,this.ktx2Loader=null,this.meshoptDecoder=null,this.pluginCallbacks=[],this.register(function(t){return new iS(t)}),this.register(function(t){return new sS(t)}),this.register(function(t){return new fS(t)}),this.register(function(t){return new pS(t)}),this.register(function(t){return new mS(t)}),this.register(function(t){return new rS(t)}),this.register(function(t){return new aS(t)}),this.register(function(t){return new lS(t)}),this.register(function(t){return new cS(t)}),this.register(function(t){return new nS(t)}),this.register(function(t){return new uS(t)}),this.register(function(t){return new oS(t)}),this.register(function(t){return new hS(t)}),this.register(function(t){return new dS(t)}),this.register(function(t){return new eS(t)}),this.register(function(t){return new gS(t)}),this.register(function(t){return new _S(t)})}load(e,t,n,s){const o=this;let r;if(this.resourcePath!=="")r=this.resourcePath;else if(this.path!==""){const c=Zo.extractUrlBase(e);r=Zo.resolveURL(c,this.path)}else r=Zo.extractUrlBase(e);this.manager.itemStart(e);const a=function(c){s?s(c):console.error(c),o.manager.itemError(e),o.manager.itemEnd(e)},l=new ru(this.manager);l.setPath(this.path),l.setResponseType("arraybuffer"),l.setRequestHeader(this.requestHeader),l.setWithCredentials(this.withCredentials),l.load(e,function(c){try{o.parse(c,r,function(u){t(u),o.manager.itemEnd(e)},a)}catch(u){a(u)}},n,a)}setDRACOLoader(e){return this.dracoLoader=e,this}setKTX2Loader(e){return this.ktx2Loader=e,this}setMeshoptDecoder(e){return this.meshoptDecoder=e,this}register(e){return this.pluginCallbacks.indexOf(e)===-1&&this.pluginCallbacks.push(e),this}unregister(e){return this.pluginCallbacks.indexOf(e)!==-1&&this.pluginCallbacks.splice(this.pluginCallbacks.indexOf(e),1),this}parse(e,t,n,s){let o;const r={},a={},l=new TextDecoder;if(typeof e=="string")o=JSON.parse(e);else if(e instanceof ArrayBuffer)if(l.decode(new Uint8Array(e,0,4))===Xf){try{r[Ve.KHR_BINARY_GLTF]=new vS(e)}catch(d){s&&s(d);return}o=JSON.parse(r[Ve.KHR_BINARY_GLTF].content)}else o=JSON.parse(l.decode(e));else o=e;if(o.asset===void 0||o.asset.version[0]<2){s&&s(new Error("THREE.GLTFLoader: Unsupported asset. glTF versions >=2.0 are supported."));return}const c=new DS(o,{path:t||this.resourcePath||"",crossOrigin:this.crossOrigin,requestHeader:this.requestHeader,manager:this.manager,ktx2Loader:this.ktx2Loader,meshoptDecoder:this.meshoptDecoder});c.fileLoader.setRequestHeader(this.requestHeader);for(let u=0;u<this.pluginCallbacks.length;u++){const d=this.pluginCallbacks[u](c);d.name||console.error("THREE.GLTFLoader: Invalid plugin found: missing name"),a[d.name]=d,r[d.name]=!0}if(o.extensionsUsed)for(let u=0;u<o.extensionsUsed.length;++u){const d=o.extensionsUsed[u],h=o.extensionsRequired||[];switch(d){case Ve.KHR_MATERIALS_UNLIT:r[d]=new tS;break;case Ve.KHR_DRACO_MESH_COMPRESSION:r[d]=new xS(o,this.dracoLoader);break;case Ve.KHR_TEXTURE_TRANSFORM:r[d]=new yS;break;case Ve.KHR_MESH_QUANTIZATION:r[d]=new wS;break;default:h.indexOf(d)>=0&&a[d]===void 0&&console.warn('THREE.GLTFLoader: Unknown extension "'+d+'".')}}c.setExtensions(r),c.setPlugins(a),c.parse(n,s)}parseAsync(e,t){const n=this;return new Promise(function(s,o){n.parse(e,t,s,o)})}}function Qw(){let i={};return{get:function(e){return i[e]},add:function(e,t){i[e]=t},remove:function(e){delete i[e]},removeAll:function(){i={}}}}const Ve={KHR_BINARY_GLTF:"KHR_binary_glTF",KHR_DRACO_MESH_COMPRESSION:"KHR_draco_mesh_compression",KHR_LIGHTS_PUNCTUAL:"KHR_lights_punctual",KHR_MATERIALS_CLEARCOAT:"KHR_materials_clearcoat",KHR_MATERIALS_DISPERSION:"KHR_materials_dispersion",KHR_MATERIALS_IOR:"KHR_materials_ior",KHR_MATERIALS_SHEEN:"KHR_materials_sheen",KHR_MATERIALS_SPECULAR:"KHR_materials_specular",KHR_MATERIALS_TRANSMISSION:"KHR_materials_transmission",KHR_MATERIALS_IRIDESCENCE:"KHR_materials_iridescence",KHR_MATERIALS_ANISOTROPY:"KHR_materials_anisotropy",KHR_MATERIALS_UNLIT:"KHR_materials_unlit",KHR_MATERIALS_VOLUME:"KHR_materials_volume",KHR_TEXTURE_BASISU:"KHR_texture_basisu",KHR_TEXTURE_TRANSFORM:"KHR_texture_transform",KHR_MESH_QUANTIZATION:"KHR_mesh_quantization",KHR_MATERIALS_EMISSIVE_STRENGTH:"KHR_materials_emissive_strength",EXT_MATERIALS_BUMP:"EXT_materials_bump",EXT_TEXTURE_WEBP:"EXT_texture_webp",EXT_TEXTURE_AVIF:"EXT_texture_avif",EXT_MESHOPT_COMPRESSION:"EXT_meshopt_compression",EXT_MESH_GPU_INSTANCING:"EXT_mesh_gpu_instancing"};class eS{constructor(e){this.parser=e,this.name=Ve.KHR_LIGHTS_PUNCTUAL,this.cache={refs:{},uses:{}}}_markDefs(){const e=this.parser,t=this.parser.json.nodes||[];for(let n=0,s=t.length;n<s;n++){const o=t[n];o.extensions&&o.extensions[this.name]&&o.extensions[this.name].light!==void 0&&e._addNodeRef(this.cache,o.extensions[this.name].light)}}_loadLight(e){const t=this.parser,n="light:"+e;let s=t.cache.get(n);if(s)return s;const o=t.json,l=((o.extensions&&o.extensions[this.name]||{}).lights||[])[e];let c;const u=new se(16777215);l.color!==void 0&&u.setRGB(l.color[0],l.color[1],l.color[2],ln);const d=l.range!==void 0?l.range:0;switch(l.type){case"directional":c=new Ic(u),c.target.position.set(0,0,-1),c.add(c.target);break;case"point":c=new Fg(u),c.distance=d;break;case"spot":c=new Ng(u),c.distance=d,l.spot=l.spot||{},l.spot.innerConeAngle=l.spot.innerConeAngle!==void 0?l.spot.innerConeAngle:0,l.spot.outerConeAngle=l.spot.outerConeAngle!==void 0?l.spot.outerConeAngle:Math.PI/4,c.angle=l.spot.outerConeAngle,c.penumbra=1-l.spot.innerConeAngle/l.spot.outerConeAngle,c.target.position.set(0,0,-1),c.add(c.target);break;default:throw new Error("THREE.GLTFLoader: Unexpected light type: "+l.type)}return c.position.set(0,0,0),c.decay=2,fi(c,l),l.intensity!==void 0&&(c.intensity=l.intensity),c.name=t.createUniqueName(l.name||"light_"+e),s=Promise.resolve(c),t.cache.add(n,s),s}getDependency(e,t){if(e==="light")return this._loadLight(t)}createNodeAttachment(e){const t=this,n=this.parser,o=n.json.nodes[e],a=(o.extensions&&o.extensions[this.name]||{}).light;return a===void 0?null:this._loadLight(a).then(function(l){return n._getNodeRef(t.cache,a,l)})}}class tS{constructor(){this.name=Ve.KHR_MATERIALS_UNLIT}getMaterialType(){return ti}extendParams(e,t,n){const s=[];e.color=new se(1,1,1),e.opacity=1;const o=t.pbrMetallicRoughness;if(o){if(Array.isArray(o.baseColorFactor)){const r=o.baseColorFactor;e.color.setRGB(r[0],r[1],r[2],ln),e.opacity=r[3]}o.baseColorTexture!==void 0&&s.push(n.assignTexture(e,"map",o.baseColorTexture,Ft))}return Promise.all(s)}}class nS{constructor(e){this.parser=e,this.name=Ve.KHR_MATERIALS_EMISSIVE_STRENGTH}extendMaterialParams(e,t){const s=this.parser.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();const o=s.extensions[this.name].emissiveStrength;return o!==void 0&&(t.emissiveIntensity=o),Promise.resolve()}}class iS{constructor(e){this.parser=e,this.name=Ve.KHR_MATERIALS_CLEARCOAT}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:ni}extendMaterialParams(e,t){const n=this.parser,s=n.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();const o=[],r=s.extensions[this.name];if(r.clearcoatFactor!==void 0&&(t.clearcoat=r.clearcoatFactor),r.clearcoatTexture!==void 0&&o.push(n.assignTexture(t,"clearcoatMap",r.clearcoatTexture)),r.clearcoatRoughnessFactor!==void 0&&(t.clearcoatRoughness=r.clearcoatRoughnessFactor),r.clearcoatRoughnessTexture!==void 0&&o.push(n.assignTexture(t,"clearcoatRoughnessMap",r.clearcoatRoughnessTexture)),r.clearcoatNormalTexture!==void 0&&(o.push(n.assignTexture(t,"clearcoatNormalMap",r.clearcoatNormalTexture)),r.clearcoatNormalTexture.scale!==void 0)){const a=r.clearcoatNormalTexture.scale;t.clearcoatNormalScale=new me(a,a)}return Promise.all(o)}}class sS{constructor(e){this.parser=e,this.name=Ve.KHR_MATERIALS_DISPERSION}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:ni}extendMaterialParams(e,t){const s=this.parser.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();const o=s.extensions[this.name];return t.dispersion=o.dispersion!==void 0?o.dispersion:0,Promise.resolve()}}class oS{constructor(e){this.parser=e,this.name=Ve.KHR_MATERIALS_IRIDESCENCE}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:ni}extendMaterialParams(e,t){const n=this.parser,s=n.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();const o=[],r=s.extensions[this.name];return r.iridescenceFactor!==void 0&&(t.iridescence=r.iridescenceFactor),r.iridescenceTexture!==void 0&&o.push(n.assignTexture(t,"iridescenceMap",r.iridescenceTexture)),r.iridescenceIor!==void 0&&(t.iridescenceIOR=r.iridescenceIor),t.iridescenceThicknessRange===void 0&&(t.iridescenceThicknessRange=[100,400]),r.iridescenceThicknessMinimum!==void 0&&(t.iridescenceThicknessRange[0]=r.iridescenceThicknessMinimum),r.iridescenceThicknessMaximum!==void 0&&(t.iridescenceThicknessRange[1]=r.iridescenceThicknessMaximum),r.iridescenceThicknessTexture!==void 0&&o.push(n.assignTexture(t,"iridescenceThicknessMap",r.iridescenceThicknessTexture)),Promise.all(o)}}class rS{constructor(e){this.parser=e,this.name=Ve.KHR_MATERIALS_SHEEN}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:ni}extendMaterialParams(e,t){const n=this.parser,s=n.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();const o=[];t.sheenColor=new se(0,0,0),t.sheenRoughness=0,t.sheen=1;const r=s.extensions[this.name];if(r.sheenColorFactor!==void 0){const a=r.sheenColorFactor;t.sheenColor.setRGB(a[0],a[1],a[2],ln)}return r.sheenRoughnessFactor!==void 0&&(t.sheenRoughness=r.sheenRoughnessFactor),r.sheenColorTexture!==void 0&&o.push(n.assignTexture(t,"sheenColorMap",r.sheenColorTexture,Ft)),r.sheenRoughnessTexture!==void 0&&o.push(n.assignTexture(t,"sheenRoughnessMap",r.sheenRoughnessTexture)),Promise.all(o)}}class aS{constructor(e){this.parser=e,this.name=Ve.KHR_MATERIALS_TRANSMISSION}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:ni}extendMaterialParams(e,t){const n=this.parser,s=n.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();const o=[],r=s.extensions[this.name];return r.transmissionFactor!==void 0&&(t.transmission=r.transmissionFactor),r.transmissionTexture!==void 0&&o.push(n.assignTexture(t,"transmissionMap",r.transmissionTexture)),Promise.all(o)}}class lS{constructor(e){this.parser=e,this.name=Ve.KHR_MATERIALS_VOLUME}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:ni}extendMaterialParams(e,t){const n=this.parser,s=n.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();const o=[],r=s.extensions[this.name];t.thickness=r.thicknessFactor!==void 0?r.thicknessFactor:0,r.thicknessTexture!==void 0&&o.push(n.assignTexture(t,"thicknessMap",r.thicknessTexture)),t.attenuationDistance=r.attenuationDistance||1/0;const a=r.attenuationColor||[1,1,1];return t.attenuationColor=new se().setRGB(a[0],a[1],a[2],ln),Promise.all(o)}}class cS{constructor(e){this.parser=e,this.name=Ve.KHR_MATERIALS_IOR}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:ni}extendMaterialParams(e,t){const s=this.parser.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();const o=s.extensions[this.name];return t.ior=o.ior!==void 0?o.ior:1.5,Promise.resolve()}}class uS{constructor(e){this.parser=e,this.name=Ve.KHR_MATERIALS_SPECULAR}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:ni}extendMaterialParams(e,t){const n=this.parser,s=n.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();const o=[],r=s.extensions[this.name];t.specularIntensity=r.specularFactor!==void 0?r.specularFactor:1,r.specularTexture!==void 0&&o.push(n.assignTexture(t,"specularIntensityMap",r.specularTexture));const a=r.specularColorFactor||[1,1,1];return t.specularColor=new se().setRGB(a[0],a[1],a[2],ln),r.specularColorTexture!==void 0&&o.push(n.assignTexture(t,"specularColorMap",r.specularColorTexture,Ft)),Promise.all(o)}}class dS{constructor(e){this.parser=e,this.name=Ve.EXT_MATERIALS_BUMP}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:ni}extendMaterialParams(e,t){const n=this.parser,s=n.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();const o=[],r=s.extensions[this.name];return t.bumpScale=r.bumpFactor!==void 0?r.bumpFactor:1,r.bumpTexture!==void 0&&o.push(n.assignTexture(t,"bumpMap",r.bumpTexture)),Promise.all(o)}}class hS{constructor(e){this.parser=e,this.name=Ve.KHR_MATERIALS_ANISOTROPY}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:ni}extendMaterialParams(e,t){const n=this.parser,s=n.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();const o=[],r=s.extensions[this.name];return r.anisotropyStrength!==void 0&&(t.anisotropy=r.anisotropyStrength),r.anisotropyRotation!==void 0&&(t.anisotropyRotation=r.anisotropyRotation),r.anisotropyTexture!==void 0&&o.push(n.assignTexture(t,"anisotropyMap",r.anisotropyTexture)),Promise.all(o)}}class fS{constructor(e){this.parser=e,this.name=Ve.KHR_TEXTURE_BASISU}loadTexture(e){const t=this.parser,n=t.json,s=n.textures[e];if(!s.extensions||!s.extensions[this.name])return null;const o=s.extensions[this.name],r=t.options.ktx2Loader;if(!r){if(n.extensionsRequired&&n.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setKTX2Loader must be called before loading KTX2 textures");return null}return t.loadTextureImage(e,o.source,r)}}class pS{constructor(e){this.parser=e,this.name=Ve.EXT_TEXTURE_WEBP,this.isSupported=null}loadTexture(e){const t=this.name,n=this.parser,s=n.json,o=s.textures[e];if(!o.extensions||!o.extensions[t])return null;const r=o.extensions[t],a=s.images[r.source];let l=n.textureLoader;if(a.uri){const c=n.options.manager.getHandler(a.uri);c!==null&&(l=c)}return this.detectSupport().then(function(c){if(c)return n.loadTextureImage(e,r.source,l);if(s.extensionsRequired&&s.extensionsRequired.indexOf(t)>=0)throw new Error("THREE.GLTFLoader: WebP required by asset but unsupported.");return n.loadTexture(e)})}detectSupport(){return this.isSupported||(this.isSupported=new Promise(function(e){const t=new Image;t.src="data:image/webp;base64,UklGRiIAAABXRUJQVlA4IBYAAAAwAQCdASoBAAEADsD+JaQAA3AAAAAA",t.onload=t.onerror=function(){e(t.height===1)}})),this.isSupported}}class mS{constructor(e){this.parser=e,this.name=Ve.EXT_TEXTURE_AVIF,this.isSupported=null}loadTexture(e){const t=this.name,n=this.parser,s=n.json,o=s.textures[e];if(!o.extensions||!o.extensions[t])return null;const r=o.extensions[t],a=s.images[r.source];let l=n.textureLoader;if(a.uri){const c=n.options.manager.getHandler(a.uri);c!==null&&(l=c)}return this.detectSupport().then(function(c){if(c)return n.loadTextureImage(e,r.source,l);if(s.extensionsRequired&&s.extensionsRequired.indexOf(t)>=0)throw new Error("THREE.GLTFLoader: AVIF required by asset but unsupported.");return n.loadTexture(e)})}detectSupport(){return this.isSupported||(this.isSupported=new Promise(function(e){const t=new Image;t.src="data:image/avif;base64,AAAAIGZ0eXBhdmlmAAAAAGF2aWZtaWYxbWlhZk1BMUIAAADybWV0YQAAAAAAAAAoaGRscgAAAAAAAAAAcGljdAAAAAAAAAAAAAAAAGxpYmF2aWYAAAAADnBpdG0AAAAAAAEAAAAeaWxvYwAAAABEAAABAAEAAAABAAABGgAAABcAAAAoaWluZgAAAAAAAQAAABppbmZlAgAAAAABAABhdjAxQ29sb3IAAAAAamlwcnAAAABLaXBjbwAAABRpc3BlAAAAAAAAAAEAAAABAAAAEHBpeGkAAAAAAwgICAAAAAxhdjFDgQAMAAAAABNjb2xybmNseAACAAIABoAAAAAXaXBtYQAAAAAAAAABAAEEAQKDBAAAAB9tZGF0EgAKCBgABogQEDQgMgkQAAAAB8dSLfI=",t.onload=t.onerror=function(){e(t.height===1)}})),this.isSupported}}class gS{constructor(e){this.name=Ve.EXT_MESHOPT_COMPRESSION,this.parser=e}loadBufferView(e){const t=this.parser.json,n=t.bufferViews[e];if(n.extensions&&n.extensions[this.name]){const s=n.extensions[this.name],o=this.parser.getDependency("buffer",s.buffer),r=this.parser.options.meshoptDecoder;if(!r||!r.supported){if(t.extensionsRequired&&t.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setMeshoptDecoder must be called before loading compressed files");return null}return o.then(function(a){const l=s.byteOffset||0,c=s.byteLength||0,u=s.count,d=s.byteStride,h=new Uint8Array(a,l,c);return r.decodeGltfBufferAsync?r.decodeGltfBufferAsync(u,d,h,s.mode,s.filter).then(function(f){return f.buffer}):r.ready.then(function(){const f=new ArrayBuffer(u*d);return r.decodeGltfBuffer(new Uint8Array(f),u,d,h,s.mode,s.filter),f})})}else return null}}class _S{constructor(e){this.name=Ve.EXT_MESH_GPU_INSTANCING,this.parser=e}createNodeMesh(e){const t=this.parser.json,n=t.nodes[e];if(!n.extensions||!n.extensions[this.name]||n.mesh===void 0)return null;const s=t.meshes[n.mesh];for(const c of s.primitives)if(c.mode!==Pn.TRIANGLES&&c.mode!==Pn.TRIANGLE_STRIP&&c.mode!==Pn.TRIANGLE_FAN&&c.mode!==void 0)return null;const r=n.extensions[this.name].attributes,a=[],l={};for(const c in r)a.push(this.parser.getDependency("accessor",r[c]).then(u=>(l[c]=u,l[c])));return a.length<1?null:(a.push(this.parser.createNodeMesh(e)),Promise.all(a).then(c=>{const u=c.pop(),d=u.isGroup?u.children:[u],h=c[0].count,f=[];for(const _ of d){const g=new De,m=new A,p=new pt,y=new A(1,1,1),w=new hg(_.geometry,_.material,h);for(let v=0;v<h;v++)l.TRANSLATION&&m.fromBufferAttribute(l.TRANSLATION,v),l.ROTATION&&p.fromBufferAttribute(l.ROTATION,v),l.SCALE&&y.fromBufferAttribute(l.SCALE,v),w.setMatrixAt(v,g.compose(m,p,y));for(const v in l)if(v==="_COLOR_0"){const b=l[v];w.instanceColor=new Pc(b.array,b.itemSize,b.normalized)}else v!=="TRANSLATION"&&v!=="ROTATION"&&v!=="SCALE"&&_.geometry.setAttribute(v,l[v]);mt.prototype.copy.call(w,_),this.parser.assignFinalMaterial(w),f.push(w)}return u.isGroup?(u.clear(),u.add(...f),u):f[0]}))}}const Xf="glTF",zo=12,bh={JSON:1313821514,BIN:5130562};class vS{constructor(e){this.name=Ve.KHR_BINARY_GLTF,this.content=null,this.body=null;const t=new DataView(e,0,zo),n=new TextDecoder;if(this.header={magic:n.decode(new Uint8Array(e.slice(0,4))),version:t.getUint32(4,!0),length:t.getUint32(8,!0)},this.header.magic!==Xf)throw new Error("THREE.GLTFLoader: Unsupported glTF-Binary header.");if(this.header.version<2)throw new Error("THREE.GLTFLoader: Legacy binary file detected.");const s=this.header.length-zo,o=new DataView(e,zo);let r=0;for(;r<s;){const a=o.getUint32(r,!0);r+=4;const l=o.getUint32(r,!0);if(r+=4,l===bh.JSON){const c=new Uint8Array(e,zo+r,a);this.content=n.decode(c)}else if(l===bh.BIN){const c=zo+r;this.body=e.slice(c,c+a)}r+=a}if(this.content===null)throw new Error("THREE.GLTFLoader: JSON content not found.")}}class xS{constructor(e,t){if(!t)throw new Error("THREE.GLTFLoader: No DRACOLoader instance provided.");this.name=Ve.KHR_DRACO_MESH_COMPRESSION,this.json=e,this.dracoLoader=t,this.dracoLoader.preload()}decodePrimitive(e,t){const n=this.json,s=this.dracoLoader,o=e.extensions[this.name].bufferView,r=e.extensions[this.name].attributes,a={},l={},c={};for(const u in r){const d=Fc[u]||u.toLowerCase();a[d]=r[u]}for(const u in e.attributes){const d=Fc[u]||u.toLowerCase();if(r[u]!==void 0){const h=n.accessors[e.attributes[u]],f=io[h.componentType];c[d]=f.name,l[d]=h.normalized===!0}}return t.getDependency("bufferView",o).then(function(u){return new Promise(function(d,h){s.decodeDracoFile(u,function(f){for(const _ in f.attributes){const g=f.attributes[_],m=l[_];m!==void 0&&(g.normalized=m)}d(f)},a,c,ln,h)})})}}class yS{constructor(){this.name=Ve.KHR_TEXTURE_TRANSFORM}extendTexture(e,t){return(t.texCoord===void 0||t.texCoord===e.channel)&&t.offset===void 0&&t.rotation===void 0&&t.scale===void 0||(e=e.clone(),t.texCoord!==void 0&&(e.channel=t.texCoord),t.offset!==void 0&&e.offset.fromArray(t.offset),t.rotation!==void 0&&(e.rotation=t.rotation),t.scale!==void 0&&e.repeat.fromArray(t.scale),e.needsUpdate=!0),e}}class wS{constructor(){this.name=Ve.KHR_MESH_QUANTIZATION}}class qf extends cr{constructor(e,t,n,s){super(e,t,n,s)}copySampleValue_(e){const t=this.resultBuffer,n=this.sampleValues,s=this.valueSize,o=e*s*3+s;for(let r=0;r!==s;r++)t[r]=n[o+r];return t}interpolate_(e,t,n,s){const o=this.resultBuffer,r=this.sampleValues,a=this.valueSize,l=a*2,c=a*3,u=s-t,d=(n-t)/u,h=d*d,f=h*d,_=e*c,g=_-c,m=-2*f+3*h,p=f-h,y=1-m,w=p-h+d;for(let v=0;v!==a;v++){const b=r[g+v+a],E=r[g+v+l]*u,C=r[_+v+a],D=r[_+v]*u;o[v]=y*b+w*E+m*C+p*D}return o}}const SS=new pt;class MS extends qf{interpolate_(e,t,n,s){const o=super.interpolate_(e,t,n,s);return SS.fromArray(o).normalize().toArray(o),o}}const Pn={POINTS:0,LINES:1,LINE_LOOP:2,LINE_STRIP:3,TRIANGLES:4,TRIANGLE_STRIP:5,TRIANGLE_FAN:6},io={5120:Int8Array,5121:Uint8Array,5122:Int16Array,5123:Uint16Array,5125:Uint32Array,5126:Float32Array},Th={9728:an,9729:Sn,9984:Wh,9985:ca,9986:Go,9987:mi},Ah={33071:Fi,33648:wa,10497:uo},Ul={SCALAR:1,VEC2:2,VEC3:3,VEC4:4,MAT2:4,MAT3:9,MAT4:16},Fc={POSITION:"position",NORMAL:"normal",TANGENT:"tangent",TEXCOORD_0:"uv",TEXCOORD_1:"uv1",TEXCOORD_2:"uv2",TEXCOORD_3:"uv3",COLOR_0:"color",WEIGHTS_0:"skinWeight",JOINTS_0:"skinIndex"},Di={scale:"scale",translation:"position",rotation:"quaternion",weights:"morphTargetInfluences"},ES={CUBICSPLINE:void 0,LINEAR:sr,STEP:ir},Fl={OPAQUE:"OPAQUE",MASK:"MASK",BLEND:"BLEND"};function bS(i){return i.DefaultMaterial===void 0&&(i.DefaultMaterial=new So({color:16777215,emissive:0,metalness:1,roughness:1,transparent:!1,depthTest:!0,side:yi})),i.DefaultMaterial}function ts(i,e,t){for(const n in t.extensions)i[n]===void 0&&(e.userData.gltfExtensions=e.userData.gltfExtensions||{},e.userData.gltfExtensions[n]=t.extensions[n])}function fi(i,e){e.extras!==void 0&&(typeof e.extras=="object"?Object.assign(i.userData,e.extras):console.warn("THREE.GLTFLoader: Ignoring primitive type .extras, "+e.extras))}function TS(i,e,t){let n=!1,s=!1,o=!1;for(let c=0,u=e.length;c<u;c++){const d=e[c];if(d.POSITION!==void 0&&(n=!0),d.NORMAL!==void 0&&(s=!0),d.COLOR_0!==void 0&&(o=!0),n&&s&&o)break}if(!n&&!s&&!o)return Promise.resolve(i);const r=[],a=[],l=[];for(let c=0,u=e.length;c<u;c++){const d=e[c];if(n){const h=d.POSITION!==void 0?t.getDependency("accessor",d.POSITION):i.attributes.position;r.push(h)}if(s){const h=d.NORMAL!==void 0?t.getDependency("accessor",d.NORMAL):i.attributes.normal;a.push(h)}if(o){const h=d.COLOR_0!==void 0?t.getDependency("accessor",d.COLOR_0):i.attributes.color;l.push(h)}}return Promise.all([Promise.all(r),Promise.all(a),Promise.all(l)]).then(function(c){const u=c[0],d=c[1],h=c[2];return n&&(i.morphAttributes.position=u),s&&(i.morphAttributes.normal=d),o&&(i.morphAttributes.color=h),i.morphTargetsRelative=!0,i})}function AS(i,e){if(i.updateMorphTargets(),e.weights!==void 0)for(let t=0,n=e.weights.length;t<n;t++)i.morphTargetInfluences[t]=e.weights[t];if(e.extras&&Array.isArray(e.extras.targetNames)){const t=e.extras.targetNames;if(i.morphTargetInfluences.length===t.length){i.morphTargetDictionary={};for(let n=0,s=t.length;n<s;n++)i.morphTargetDictionary[t[n]]=n}else console.warn("THREE.GLTFLoader: Invalid extras.targetNames length. Ignoring names.")}}function CS(i){let e;const t=i.extensions&&i.extensions[Ve.KHR_DRACO_MESH_COMPRESSION];if(t?e="draco:"+t.bufferView+":"+t.indices+":"+Bl(t.attributes):e=i.indices+":"+Bl(i.attributes)+":"+i.mode,i.targets!==void 0)for(let n=0,s=i.targets.length;n<s;n++)e+=":"+Bl(i.targets[n]);return e}function Bl(i){let e="";const t=Object.keys(i).sort();for(let n=0,s=t.length;n<s;n++)e+=t[n]+":"+i[t[n]]+";";return e}function Bc(i){switch(i){case Int8Array:return 1/127;case Uint8Array:return 1/255;case Int16Array:return 1/32767;case Uint16Array:return 1/65535;default:throw new Error("THREE.GLTFLoader: Unsupported normalized accessor component type.")}}function RS(i){return i.search(/\.jpe?g($|\?)/i)>0||i.search(/^data\:image\/jpeg/)===0?"image/jpeg":i.search(/\.webp($|\?)/i)>0||i.search(/^data\:image\/webp/)===0?"image/webp":i.search(/\.ktx2($|\?)/i)>0||i.search(/^data\:image\/ktx2/)===0?"image/ktx2":"image/png"}const PS=new De;class DS{constructor(e={},t={}){this.json=e,this.extensions={},this.plugins={},this.options=t,this.cache=new Qw,this.associations=new Map,this.primitiveCache={},this.nodeCache={},this.meshCache={refs:{},uses:{}},this.cameraCache={refs:{},uses:{}},this.lightCache={refs:{},uses:{}},this.sourceCache={},this.textureCache={},this.nodeNamesUsed={};let n=!1,s=-1,o=!1,r=-1;if(typeof navigator<"u"){const a=navigator.userAgent;n=/^((?!chrome|android).)*safari/i.test(a)===!0;const l=a.match(/Version\/(\d+)/);s=n&&l?parseInt(l[1],10):-1,o=a.indexOf("Firefox")>-1,r=o?a.match(/Firefox\/([0-9]+)\./)[1]:-1}typeof createImageBitmap>"u"||n&&s<17||o&&r<98?this.textureLoader=new Ig(this.options.manager):this.textureLoader=new Hg(this.options.manager),this.textureLoader.setCrossOrigin(this.options.crossOrigin),this.textureLoader.setRequestHeader(this.options.requestHeader),this.fileLoader=new ru(this.options.manager),this.fileLoader.setResponseType("arraybuffer"),this.options.crossOrigin==="use-credentials"&&this.fileLoader.setWithCredentials(!0)}setExtensions(e){this.extensions=e}setPlugins(e){this.plugins=e}parse(e,t){const n=this,s=this.json,o=this.extensions;this.cache.removeAll(),this.nodeCache={},this._invokeAll(function(r){return r._markDefs&&r._markDefs()}),Promise.all(this._invokeAll(function(r){return r.beforeRoot&&r.beforeRoot()})).then(function(){return Promise.all([n.getDependencies("scene"),n.getDependencies("animation"),n.getDependencies("camera")])}).then(function(r){const a={scene:r[0][s.scene||0],scenes:r[0],animations:r[1],cameras:r[2],asset:s.asset,parser:n,userData:{}};return ts(o,a,s),fi(a,s),Promise.all(n._invokeAll(function(l){return l.afterRoot&&l.afterRoot(a)})).then(function(){for(const l of a.scenes)l.updateMatrixWorld();e(a)})}).catch(t)}_markDefs(){const e=this.json.nodes||[],t=this.json.skins||[],n=this.json.meshes||[];for(let s=0,o=t.length;s<o;s++){const r=t[s].joints;for(let a=0,l=r.length;a<l;a++)e[r[a]].isBone=!0}for(let s=0,o=e.length;s<o;s++){const r=e[s];r.mesh!==void 0&&(this._addNodeRef(this.meshCache,r.mesh),r.skin!==void 0&&(n[r.mesh].isSkinnedMesh=!0)),r.camera!==void 0&&this._addNodeRef(this.cameraCache,r.camera)}}_addNodeRef(e,t){t!==void 0&&(e.refs[t]===void 0&&(e.refs[t]=e.uses[t]=0),e.refs[t]++)}_getNodeRef(e,t,n){if(e.refs[t]<=1)return n;const s=n.clone(),o=(r,a)=>{const l=this.associations.get(r);l!=null&&this.associations.set(a,l);for(const[c,u]of r.children.entries())o(u,a.children[c])};return o(n,s),s.name+="_instance_"+e.uses[t]++,s}_invokeOne(e){const t=Object.values(this.plugins);t.push(this);for(let n=0;n<t.length;n++){const s=e(t[n]);if(s)return s}return null}_invokeAll(e){const t=Object.values(this.plugins);t.unshift(this);const n=[];for(let s=0;s<t.length;s++){const o=e(t[s]);o&&n.push(o)}return n}getDependency(e,t){const n=e+":"+t;let s=this.cache.get(n);if(!s){switch(e){case"scene":s=this.loadScene(t);break;case"node":s=this._invokeOne(function(o){return o.loadNode&&o.loadNode(t)});break;case"mesh":s=this._invokeOne(function(o){return o.loadMesh&&o.loadMesh(t)});break;case"accessor":s=this.loadAccessor(t);break;case"bufferView":s=this._invokeOne(function(o){return o.loadBufferView&&o.loadBufferView(t)});break;case"buffer":s=this.loadBuffer(t);break;case"material":s=this._invokeOne(function(o){return o.loadMaterial&&o.loadMaterial(t)});break;case"texture":s=this._invokeOne(function(o){return o.loadTexture&&o.loadTexture(t)});break;case"skin":s=this.loadSkin(t);break;case"animation":s=this._invokeOne(function(o){return o.loadAnimation&&o.loadAnimation(t)});break;case"camera":s=this.loadCamera(t);break;default:if(s=this._invokeOne(function(o){return o!=this&&o.getDependency&&o.getDependency(e,t)}),!s)throw new Error("Unknown type: "+e);break}this.cache.add(n,s)}return s}getDependencies(e){let t=this.cache.get(e);if(!t){const n=this,s=this.json[e+(e==="mesh"?"es":"s")]||[];t=Promise.all(s.map(function(o,r){return n.getDependency(e,r)})),this.cache.add(e,t)}return t}loadBuffer(e){const t=this.json.buffers[e],n=this.fileLoader;if(t.type&&t.type!=="arraybuffer")throw new Error("THREE.GLTFLoader: "+t.type+" buffer type is not supported.");if(t.uri===void 0&&e===0)return Promise.resolve(this.extensions[Ve.KHR_BINARY_GLTF].body);const s=this.options;return new Promise(function(o,r){n.load(Zo.resolveURL(t.uri,s.path),o,void 0,function(){r(new Error('THREE.GLTFLoader: Failed to load buffer "'+t.uri+'".'))})})}loadBufferView(e){const t=this.json.bufferViews[e];return this.getDependency("buffer",t.buffer).then(function(n){const s=t.byteLength||0,o=t.byteOffset||0;return n.slice(o,o+s)})}loadAccessor(e){const t=this,n=this.json,s=this.json.accessors[e];if(s.bufferView===void 0&&s.sparse===void 0){const r=Ul[s.type],a=io[s.componentType],l=s.normalized===!0,c=new a(s.count*r);return Promise.resolve(new At(c,r,l))}const o=[];return s.bufferView!==void 0?o.push(this.getDependency("bufferView",s.bufferView)):o.push(null),s.sparse!==void 0&&(o.push(this.getDependency("bufferView",s.sparse.indices.bufferView)),o.push(this.getDependency("bufferView",s.sparse.values.bufferView))),Promise.all(o).then(function(r){const a=r[0],l=Ul[s.type],c=io[s.componentType],u=c.BYTES_PER_ELEMENT,d=u*l,h=s.byteOffset||0,f=s.bufferView!==void 0?n.bufferViews[s.bufferView].byteStride:void 0,_=s.normalized===!0;let g,m;if(f&&f!==d){const p=Math.floor(h/f),y="InterleavedBuffer:"+s.bufferView+":"+s.componentType+":"+p+":"+s.count;let w=t.cache.get(y);w||(g=new c(a,p*f,s.count*f/u),w=new ff(g,f/u),t.cache.add(y,w)),m=new In(w,l,h%f/u,_)}else a===null?g=new c(s.count*l):g=new c(a,h,s.count*l),m=new At(g,l,_);if(s.sparse!==void 0){const p=Ul.SCALAR,y=io[s.sparse.indices.componentType],w=s.sparse.indices.byteOffset||0,v=s.sparse.values.byteOffset||0,b=new y(r[1],w,s.sparse.count*p),E=new c(r[2],v,s.sparse.count*l);a!==null&&(m=new At(m.array.slice(),m.itemSize,m.normalized)),m.normalized=!1;for(let C=0,D=b.length;C<D;C++){const S=b[C];if(m.setX(S,E[C*l]),l>=2&&m.setY(S,E[C*l+1]),l>=3&&m.setZ(S,E[C*l+2]),l>=4&&m.setW(S,E[C*l+3]),l>=5)throw new Error("THREE.GLTFLoader: Unsupported itemSize in sparse BufferAttribute.")}m.normalized=_}return m})}loadTexture(e){const t=this.json,n=this.options,o=t.textures[e].source,r=t.images[o];let a=this.textureLoader;if(r.uri){const l=n.manager.getHandler(r.uri);l!==null&&(a=l)}return this.loadTextureImage(e,o,a)}loadTextureImage(e,t,n){const s=this,o=this.json,r=o.textures[e],a=o.images[t],l=(a.uri||a.bufferView)+":"+r.sampler;if(this.textureCache[l])return this.textureCache[l];const c=this.loadImageSource(t,n).then(function(u){u.flipY=!1,u.name=r.name||a.name||"",u.name===""&&typeof a.uri=="string"&&a.uri.startsWith("data:image/")===!1&&(u.name=a.uri);const h=(o.samplers||{})[r.sampler]||{};return u.magFilter=Th[h.magFilter]||Sn,u.minFilter=Th[h.minFilter]||mi,u.wrapS=Ah[h.wrapS]||uo,u.wrapT=Ah[h.wrapT]||uo,u.generateMipmaps=!u.isCompressedTexture&&u.minFilter!==an&&u.minFilter!==Sn,s.associations.set(u,{textures:e}),u}).catch(function(){return null});return this.textureCache[l]=c,c}loadImageSource(e,t){const n=this,s=this.json,o=this.options;if(this.sourceCache[e]!==void 0)return this.sourceCache[e].then(d=>d.clone());const r=s.images[e],a=self.URL||self.webkitURL;let l=r.uri||"",c=!1;if(r.bufferView!==void 0)l=n.getDependency("bufferView",r.bufferView).then(function(d){c=!0;const h=new Blob([d],{type:r.mimeType});return l=a.createObjectURL(h),l});else if(r.uri===void 0)throw new Error("THREE.GLTFLoader: Image "+e+" is missing URI and bufferView");const u=Promise.resolve(l).then(function(d){return new Promise(function(h,f){let _=h;t.isImageBitmapLoader===!0&&(_=function(g){const m=new Bt(g);m.needsUpdate=!0,h(m)}),t.load(Zo.resolveURL(d,o.path),_,void 0,f)})}).then(function(d){return c===!0&&a.revokeObjectURL(l),fi(d,r),d.userData.mimeType=r.mimeType||RS(r.uri),d}).catch(function(d){throw console.error("THREE.GLTFLoader: Couldn't load texture",l),d});return this.sourceCache[e]=u,u}assignTexture(e,t,n,s){const o=this;return this.getDependency("texture",n.index).then(function(r){if(!r)return null;if(n.texCoord!==void 0&&n.texCoord>0&&(r=r.clone(),r.channel=n.texCoord),o.extensions[Ve.KHR_TEXTURE_TRANSFORM]){const a=n.extensions!==void 0?n.extensions[Ve.KHR_TEXTURE_TRANSFORM]:void 0;if(a){const l=o.associations.get(r);r=o.extensions[Ve.KHR_TEXTURE_TRANSFORM].extendTexture(r,a),o.associations.set(r,l)}}return s!==void 0&&(r.colorSpace=s),e[t]=r,r})}assignFinalMaterial(e){const t=e.geometry;let n=e.material;const s=t.attributes.tangent===void 0,o=t.attributes.color!==void 0,r=t.attributes.normal===void 0;if(e.isPoints){const a="PointsMaterial:"+n.uuid;let l=this.cache.get(a);l||(l=new Ws,_n.prototype.copy.call(l,n),l.color.copy(n.color),l.map=n.map,l.sizeAttenuation=!1,this.cache.add(a,l)),n=l}else if(e.isLine){const a="LineBasicMaterial:"+n.uuid;let l=this.cache.get(a);l||(l=new ps,_n.prototype.copy.call(l,n),l.color.copy(n.color),l.map=n.map,this.cache.add(a,l)),n=l}if(s||o||r){let a="ClonedMaterial:"+n.uuid+":";s&&(a+="derivative-tangents:"),o&&(a+="vertex-colors:"),r&&(a+="flat-shading:");let l=this.cache.get(a);l||(l=n.clone(),o&&(l.vertexColors=!0),r&&(l.flatShading=!0),s&&(l.normalScale&&(l.normalScale.y*=-1),l.clearcoatNormalScale&&(l.clearcoatNormalScale.y*=-1)),this.cache.add(a,l),this.associations.set(l,this.associations.get(n))),n=l}e.material=n}getMaterialType(){return So}loadMaterial(e){const t=this,n=this.json,s=this.extensions,o=n.materials[e];let r;const a={},l=o.extensions||{},c=[];if(l[Ve.KHR_MATERIALS_UNLIT]){const d=s[Ve.KHR_MATERIALS_UNLIT];r=d.getMaterialType(),c.push(d.extendParams(a,o,t))}else{const d=o.pbrMetallicRoughness||{};if(a.color=new se(1,1,1),a.opacity=1,Array.isArray(d.baseColorFactor)){const h=d.baseColorFactor;a.color.setRGB(h[0],h[1],h[2],ln),a.opacity=h[3]}d.baseColorTexture!==void 0&&c.push(t.assignTexture(a,"map",d.baseColorTexture,Ft)),a.metalness=d.metallicFactor!==void 0?d.metallicFactor:1,a.roughness=d.roughnessFactor!==void 0?d.roughnessFactor:1,d.metallicRoughnessTexture!==void 0&&(c.push(t.assignTexture(a,"metalnessMap",d.metallicRoughnessTexture)),c.push(t.assignTexture(a,"roughnessMap",d.metallicRoughnessTexture))),r=this._invokeOne(function(h){return h.getMaterialType&&h.getMaterialType(e)}),c.push(Promise.all(this._invokeAll(function(h){return h.extendMaterialParams&&h.extendMaterialParams(e,a)})))}o.doubleSided===!0&&(a.side=pn);const u=o.alphaMode||Fl.OPAQUE;if(u===Fl.BLEND?(a.transparent=!0,a.depthWrite=!1):(a.transparent=!1,u===Fl.MASK&&(a.alphaTest=o.alphaCutoff!==void 0?o.alphaCutoff:.5)),o.normalTexture!==void 0&&r!==ti&&(c.push(t.assignTexture(a,"normalMap",o.normalTexture)),a.normalScale=new me(1,1),o.normalTexture.scale!==void 0)){const d=o.normalTexture.scale;a.normalScale.set(d,d)}if(o.occlusionTexture!==void 0&&r!==ti&&(c.push(t.assignTexture(a,"aoMap",o.occlusionTexture)),o.occlusionTexture.strength!==void 0&&(a.aoMapIntensity=o.occlusionTexture.strength)),o.emissiveFactor!==void 0&&r!==ti){const d=o.emissiveFactor;a.emissive=new se().setRGB(d[0],d[1],d[2],ln)}return o.emissiveTexture!==void 0&&r!==ti&&c.push(t.assignTexture(a,"emissiveMap",o.emissiveTexture,Ft)),Promise.all(c).then(function(){const d=new r(a);return o.name&&(d.name=o.name),fi(d,o),t.associations.set(d,{materials:e}),o.extensions&&ts(s,d,o),d})}createUniqueName(e){const t=lt.sanitizeNodeName(e||"");return t in this.nodeNamesUsed?t+"_"+ ++this.nodeNamesUsed[t]:(this.nodeNamesUsed[t]=0,t)}loadGeometries(e){const t=this,n=this.extensions,s=this.primitiveCache;function o(a){return n[Ve.KHR_DRACO_MESH_COMPRESSION].decodePrimitive(a,t).then(function(l){return Ch(l,a,t)})}const r=[];for(let a=0,l=e.length;a<l;a++){const c=e[a],u=CS(c),d=s[u];if(d)r.push(d.promise);else{let h;c.extensions&&c.extensions[Ve.KHR_DRACO_MESH_COMPRESSION]?h=o(c):h=Ch(new xt,c,t),s[u]={primitive:c,promise:h},r.push(h)}}return Promise.all(r)}loadMesh(e){const t=this,n=this.json,s=this.extensions,o=n.meshes[e],r=o.primitives,a=[];for(let l=0,c=r.length;l<c;l++){const u=r[l].material===void 0?bS(this.cache):this.getDependency("material",r[l].material);a.push(u)}return a.push(t.loadGeometries(r)),Promise.all(a).then(function(l){const c=l.slice(0,l.length-1),u=l[l.length-1],d=[];for(let f=0,_=u.length;f<_;f++){const g=u[f],m=r[f];let p;const y=c[f];if(m.mode===Pn.TRIANGLES||m.mode===Pn.TRIANGLE_STRIP||m.mode===Pn.TRIANGLE_FAN||m.mode===void 0)p=o.isSkinnedMesh===!0?new cg(g,y):new oe(g,y),p.isSkinnedMesh===!0&&p.normalizeSkinWeights(),m.mode===Pn.TRIANGLE_STRIP?p.geometry=Eh(p.geometry,ef):m.mode===Pn.TRIANGLE_FAN&&(p.geometry=Eh(p.geometry,Cc));else if(m.mode===Pn.LINES)p=new Dc(g,y);else if(m.mode===Pn.LINE_STRIP)p=new Vn(g,y);else if(m.mode===Pn.LINE_LOOP)p=new mg(g,y);else if(m.mode===Pn.POINTS)p=new ma(g,y);else throw new Error("THREE.GLTFLoader: Primitive mode unsupported: "+m.mode);Object.keys(p.geometry.morphAttributes).length>0&&AS(p,o),p.name=t.createUniqueName(o.name||"mesh_"+e),fi(p,o),m.extensions&&ts(s,p,m),t.assignFinalMaterial(p),d.push(p)}for(let f=0,_=d.length;f<_;f++)t.associations.set(d[f],{meshes:e,primitives:f});if(d.length===1)return o.extensions&&ts(s,d[0],o),d[0];const h=new Mn;o.extensions&&ts(s,h,o),t.associations.set(h,{meshes:e});for(let f=0,_=d.length;f<_;f++)h.add(d[f]);return h})}loadCamera(e){let t;const n=this.json.cameras[e],s=n[n.type];if(!s){console.warn("THREE.GLTFLoader: Missing camera parameters.");return}return n.type==="perspective"?t=new sn(_i.radToDeg(s.yfov),s.aspectRatio||1,s.znear||1,s.zfar||2e6):n.type==="orthographic"&&(t=new ur(-s.xmag,s.xmag,s.ymag,-s.ymag,s.znear,s.zfar)),n.name&&(t.name=this.createUniqueName(n.name)),fi(t,n),Promise.resolve(t)}loadSkin(e){const t=this.json.skins[e],n=[];for(let s=0,o=t.joints.length;s<o;s++)n.push(this._loadNodeShallow(t.joints[s]));return t.inverseBindMatrices!==void 0?n.push(this.getDependency("accessor",t.inverseBindMatrices)):n.push(null),Promise.all(n).then(function(s){const o=s.pop(),r=s,a=[],l=[];for(let c=0,u=r.length;c<u;c++){const d=r[c];if(d){a.push(d);const h=new De;o!==null&&h.fromArray(o.array,c*16),l.push(h)}else console.warn('THREE.GLTFLoader: Joint "%s" could not be found.',t.joints[c])}return new nu(a,l)})}loadAnimation(e){const t=this.json,n=this,s=t.animations[e],o=s.name?s.name:"animation_"+e,r=[],a=[],l=[],c=[],u=[];for(let d=0,h=s.channels.length;d<h;d++){const f=s.channels[d],_=s.samplers[f.sampler],g=f.target,m=g.node,p=s.parameters!==void 0?s.parameters[_.input]:_.input,y=s.parameters!==void 0?s.parameters[_.output]:_.output;g.node!==void 0&&(r.push(this.getDependency("node",m)),a.push(this.getDependency("accessor",p)),l.push(this.getDependency("accessor",y)),c.push(_),u.push(g))}return Promise.all([Promise.all(r),Promise.all(a),Promise.all(l),Promise.all(c),Promise.all(u)]).then(function(d){const h=d[0],f=d[1],_=d[2],g=d[3],m=d[4],p=[];for(let y=0,w=h.length;y<w;y++){const v=h[y],b=f[y],E=_[y],C=g[y],D=m[y];if(v===void 0)continue;v.updateMatrix&&v.updateMatrix();const S=n._createAnimationTracks(v,b,E,C,D);if(S)for(let x=0;x<S.length;x++)p.push(S[x])}return new Tg(o,void 0,p)})}createNodeMesh(e){const t=this.json,n=this,s=t.nodes[e];return s.mesh===void 0?null:n.getDependency("mesh",s.mesh).then(function(o){const r=n._getNodeRef(n.meshCache,s.mesh,o);return s.weights!==void 0&&r.traverse(function(a){if(a.isMesh)for(let l=0,c=s.weights.length;l<c;l++)a.morphTargetInfluences[l]=s.weights[l]}),r})}loadNode(e){const t=this.json,n=this,s=t.nodes[e],o=n._loadNodeShallow(e),r=[],a=s.children||[];for(let c=0,u=a.length;c<u;c++)r.push(n.getDependency("node",a[c]));const l=s.skin===void 0?Promise.resolve(null):n.getDependency("skin",s.skin);return Promise.all([o,Promise.all(r),l]).then(function(c){const u=c[0],d=c[1],h=c[2];h!==null&&u.traverse(function(f){f.isSkinnedMesh&&f.bind(h,PS)});for(let f=0,_=d.length;f<_;f++)u.add(d[f]);return u})}_loadNodeShallow(e){const t=this.json,n=this.extensions,s=this;if(this.nodeCache[e]!==void 0)return this.nodeCache[e];const o=t.nodes[e],r=o.name?s.createUniqueName(o.name):"",a=[],l=s._invokeOne(function(c){return c.createNodeMesh&&c.createNodeMesh(e)});return l&&a.push(l),o.camera!==void 0&&a.push(s.getDependency("camera",o.camera).then(function(c){return s._getNodeRef(s.cameraCache,o.camera,c)})),s._invokeAll(function(c){return c.createNodeAttachment&&c.createNodeAttachment(e)}).forEach(function(c){a.push(c)}),this.nodeCache[e]=Promise.all(a).then(function(c){let u;if(o.isBone===!0?u=new pf:c.length>1?u=new Mn:c.length===1?u=c[0]:u=new mt,u!==c[0])for(let d=0,h=c.length;d<h;d++)u.add(c[d]);if(o.name&&(u.userData.name=o.name,u.name=r),fi(u,o),o.extensions&&ts(n,u,o),o.matrix!==void 0){const d=new De;d.fromArray(o.matrix),u.applyMatrix4(d)}else o.translation!==void 0&&u.position.fromArray(o.translation),o.rotation!==void 0&&u.quaternion.fromArray(o.rotation),o.scale!==void 0&&u.scale.fromArray(o.scale);return s.associations.has(u)||s.associations.set(u,{}),s.associations.get(u).nodes=e,u}),this.nodeCache[e]}loadScene(e){const t=this.extensions,n=this.json.scenes[e],s=this,o=new Mn;n.name&&(o.name=s.createUniqueName(n.name)),fi(o,n),n.extensions&&ts(t,o,n);const r=n.nodes||[],a=[];for(let l=0,c=r.length;l<c;l++)a.push(s.getDependency("node",r[l]));return Promise.all(a).then(function(l){for(let u=0,d=l.length;u<d;u++)o.add(l[u]);const c=u=>{const d=new Map;for(const[h,f]of s.associations)(h instanceof _n||h instanceof Bt)&&d.set(h,f);return u.traverse(h=>{const f=s.associations.get(h);f!=null&&d.set(h,f)}),d};return s.associations=c(o),o})}_createAnimationTracks(e,t,n,s,o){const r=[],a=e.name?e.name:e.uuid,l=[];Di[o.path]===Di.weights?e.traverse(function(h){h.morphTargetInfluences&&l.push(h.name?h.name:h.uuid)}):l.push(a);let c;switch(Di[o.path]){case Di.weights:c=go;break;case Di.rotation:c=_o;break;case Di.position:case Di.scale:c=vo;break;default:switch(n.itemSize){case 1:c=go;break;case 2:case 3:default:c=vo;break}break}const u=s.interpolation!==void 0?ES[s.interpolation]:sr,d=this._getArrayFromAccessor(n);for(let h=0,f=l.length;h<f;h++){const _=new c(l[h]+"."+Di[o.path],t.array,d,u);s.interpolation==="CUBICSPLINE"&&this._createCubicSplineTrackInterpolant(_),r.push(_)}return r}_getArrayFromAccessor(e){let t=e.array;if(e.normalized){const n=Bc(t.constructor),s=new Float32Array(t.length);for(let o=0,r=t.length;o<r;o++)s[o]=t[o]*n;t=s}return t}_createCubicSplineTrackInterpolant(e){e.createInterpolant=function(n){const s=this instanceof _o?MS:qf;return new s(this.times,this.values,this.getValueSize()/3,n)},e.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline=!0}}function LS(i,e,t){const n=e.attributes,s=new Nn;if(n.POSITION!==void 0){const a=t.json.accessors[n.POSITION],l=a.min,c=a.max;if(l!==void 0&&c!==void 0){if(s.set(new A(l[0],l[1],l[2]),new A(c[0],c[1],c[2])),a.normalized){const u=Bc(io[a.componentType]);s.min.multiplyScalar(u),s.max.multiplyScalar(u)}}else{console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.");return}}else return;const o=e.targets;if(o!==void 0){const a=new A,l=new A;for(let c=0,u=o.length;c<u;c++){const d=o[c];if(d.POSITION!==void 0){const h=t.json.accessors[d.POSITION],f=h.min,_=h.max;if(f!==void 0&&_!==void 0){if(l.setX(Math.max(Math.abs(f[0]),Math.abs(_[0]))),l.setY(Math.max(Math.abs(f[1]),Math.abs(_[1]))),l.setZ(Math.max(Math.abs(f[2]),Math.abs(_[2]))),h.normalized){const g=Bc(io[h.componentType]);l.multiplyScalar(g)}a.max(l)}else console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.")}}s.expandByVector(a)}i.boundingBox=s;const r=new Un;s.getCenter(r.center),r.radius=s.min.distanceTo(s.max)/2,i.boundingSphere=r}function Ch(i,e,t){const n=e.attributes,s=[];function o(r,a){return t.getDependency("accessor",r).then(function(l){i.setAttribute(a,l)})}for(const r in n){const a=Fc[r]||r.toLowerCase();a in i.attributes||s.push(o(n[r],a))}if(e.indices!==void 0&&!i.index){const r=t.getDependency("accessor",e.indices).then(function(a){i.setIndex(a)});s.push(r)}return Ze.workingColorSpace!==ln&&"COLOR_0"in n&&console.warn(`THREE.GLTFLoader: Converting vertex colors from "srgb-linear" to "${Ze.workingColorSpace}" not supported.`),fi(i,e),LS(i,e,t),Promise.all(s).then(function(){return e.targets!==void 0?TS(i,e.targets,t):i})}const IS=Object.freeze(Object.defineProperty({__proto__:null,GLTFLoader:Ga},Symbol.toStringTag,{value:"Module"}));function OS(i){const e=new Ga,t="/Cielo/"+i;e.load(t,function(n){const s=n.scene;s.position.set(0,0,0),s.name="architettura",s.visible=!1,te.add(s),console.log(`Loaded GLTF model: ${t}`)},function(n){console.log(`${Math.round(n.loaded/n.total*100)}% loaded`)},function(n){console.error("An error occurred while loading the GLTF model:",n)})}function NS(i,e,t,n,s,o){const r=new Ga,a="/Cielo/"+i;r.load(a,function(l){const c=l.scene;c.name=e,c.scale.setScalar(t),c.position.set(n,o,s),te.add(c),objToBeDetected.push(c),console.log(`Loaded ${a} successfully.`),createMenu()},function(l){console.log(`${Math.round(l.loaded/l.total*100)}% loaded`)},function(l){console.error("An error happened",l)})}let jf=.7;function jo(i,e){console.log(te.getObjectByName("architettura")),te.getObjectByName(i).traverse(n=>{n.isMesh&&n.material&&(n.material.transparent=e,n.material.opacity=e?jf:1)}),console.log(`Transparency toggled: ${e}`)}function ia(i){jf=i}function Rh(i,e){te.getObjectByName(i).traverse(n=>{n.isMesh&&n.material&&(n.userData.originalMaterial||(n.userData.originalMaterial=n.material.clone()),n.material=e?dn:n.userData.originalMaterial)}),console.log(`Material toggled: ${e?"Custom":"Original"}`)}function sa(i,e){const t=te.getObjectByName(i);if(!t){console.warn(`Model with name "${i}" not found.`);return}t.visible=e,console.log(`Model "${i}" visibility toggled: ${e}`)}class $f extends To{constructor(){super(),this.isLineGeometry=!0,this.type="LineGeometry"}setPositions(e){const t=e.length-3,n=new Float32Array(2*t);for(let s=0;s<t;s+=3)n[2*s]=e[s],n[2*s+1]=e[s+1],n[2*s+2]=e[s+2],n[2*s+3]=e[s+3],n[2*s+4]=e[s+4],n[2*s+5]=e[s+5];return super.setPositions(n),this}setColors(e){const t=e.length-3,n=new Float32Array(2*t);for(let s=0;s<t;s+=3)n[2*s]=e[s],n[2*s+1]=e[s+1],n[2*s+2]=e[s+2],n[2*s+3]=e[s+3],n[2*s+4]=e[s+4],n[2*s+5]=e[s+5];return super.setColors(n),this}setFromPoints(e){const t=e.length-1,n=new Float32Array(6*t);for(let s=0;s<t;s++)n[6*s]=e[s].x,n[6*s+1]=e[s].y,n[6*s+2]=e[s].z||0,n[6*s+3]=e[s+1].x,n[6*s+4]=e[s+1].y,n[6*s+5]=e[s+1].z||0;return super.setPositions(n),this}fromLine(e){const t=e.geometry;return this.setPositions(t.attributes.position.array),this}}class US extends rr{constructor(e=new $f,t=new Si({color:Math.random()*16777215})){super(e,t),this.isLine2=!0,this.type="Line2"}}function FS(){const i=document.querySelector(".dockTasti");if(!i||document.getElementById("metroButton"))return;const e=document.getElementById("seeItemsList"),t=document.createElement("button");t.id="metroButton",t.title="Visualizza distanze tra altoparlanti",t.innerHTML=`
    <svg viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg">
      <path fill="currentColor" d="M150.932,218.624c10.84,3.192,23.58,4.988,37.258,4.996c18.245-0.023,34.79-3.17,47.434-8.668c6.318-2.771,11.72-6.126,15.866-10.39c4.108-4.204,7.071-9.718,7.064-15.939c0.007-6.222-2.956-11.742-7.064-15.94c-6.237-6.362-15.216-10.825-26.048-14.062c-10.833-3.192-23.572-4.995-37.251-4.995c-18.244,0.014-34.79,3.162-47.441,8.668c-6.318,2.771-11.72,6.125-15.865,10.389c-4.108,4.198-7.072,9.718-7.065,15.94c-0.007,6.221,2.956,11.734,7.065,15.939C131.12,210.917,140.106,215.387,150.932,218.624z M135.754,183.213c3.303-3.495,10.249-7.404,19.464-10.079c9.207-2.72,20.64-4.382,32.972-4.374c16.434-0.023,31.288,2.97,41.374,7.404c5.04,2.187,8.846,4.744,11.048,7.05c2.246,2.357,2.8,4.05,2.808,5.41c-0.008,1.352-0.562,3.052-2.808,5.409c-3.296,3.488-10.242,7.404-19.457,10.079c-9.207,2.72-20.632,4.375-32.965,4.375c-16.441,0.014-31.294-2.971-41.381-7.404c-5.04-2.188-8.846-4.744-11.054-7.05c-2.246-2.357-2.794-4.057-2.801-5.409C132.96,187.263,133.508,185.57,135.754,183.213z"/>
      <path fill="currentColor" d="M376.372,243.659v-55.037c0.008-8.114-1.929-15.888-5.224-22.922c-3.304-7.05-7.929-13.397-13.42-19.043c-16.412-16.766-40.488-28.812-69.388-37.458l-0.155-0.044c-29.041-8.564-63.262-13.397-99.996-13.405c-48.993,0.044-93.448,8.528-127.262,23.24l-0.015,0.008c-16.885,7.404-31.316,16.405-42.276,27.666C13.154,152.303,8.528,158.65,5.225,165.7C1.929,172.735-0.008,180.509,0,188.623v134.756c-0.008,8.113,1.929,15.88,5.225,22.915c3.303,7.05,7.929,13.397,13.412,19.043c16.413,16.766,40.472,28.812,69.358,37.45l0.192,0.059c29.049,8.565,63.262,13.39,100.003,13.405H512v-172.59H376.372z M37.658,165.101c11.38-11.838,31.82-22.856,58.03-30.548c26.204-7.737,58.119-12.326,92.502-12.319c45.838-0.022,87.308,8.18,116.659,21.031c14.676,6.399,26.27,13.966,33.866,21.836c7.634,7.929,11.166,15.739,11.174,23.521c-0.008,7.773-3.54,15.592-11.174,23.521c-11.38,11.83-31.819,22.848-58.03,30.541c-26.204,7.744-58.112,12.326-92.496,12.326c-45.845,0.015-87.314-8.187-116.666-21.031c-14.676-6.399-26.27-13.966-33.866-21.836c-7.634-7.929-11.166-15.748-11.174-23.521C26.492,180.841,30.024,173.03,37.658,165.101z M349.888,222.341v32.669h-58.23c6.746-2.202,13.256-4.552,19.249-7.168c15.954-6.983,29.145-15.348,38.684-25.176L349.888,222.341z M485.516,389.766h-45.402v-66.854h-15.134v66.854h-33.416v-36.209h-15.134v36.209h-33.423v-66.854h-15.134v66.854h-33.423v-36.209h-15.134v36.209h-33.415v-66.854h-15.134v66.854h-33.415v-36.209h-15.134v36.076c-11.491-0.177-22.657-0.857-33.423-2.10v-64.711h-15.134v62.76c-23.772-3.621-45.054-9.459-62.138-16.937c-14.676-6.399-26.27-13.966-33.866-21.836c-7.634-7.93-11.166-15.748-11.174-23.521V222.341l0.296,0.325c14.314,14.706,36.8,26.277,64.621,34.532c27.83,8.217,61.053,12.939,96.788,12.946h297.326V389.766z"/>
    </svg>
  `,t.addEventListener("click",Kf),e?i.insertBefore(t,e):i.appendChild(t)}const Ph=document.getElementById("metroButton");Ph&&Ph.addEventListener("click",Kf);let js=!1,Da=[],zc=[];function Yf(){js&&Zf(),requestAnimationFrame(Yf)}Yf();function Kf(){js=!js,document.getElementById("metroButton").classList.toggle("active",js),js?Zf():Jf()}function Zf(){Jf();const i=qe.filter(n=>n.name&&n.name.toLowerCase().includes("altoparlante")),e=[],t=.5;i.forEach(n=>{const s=n.getWorldPosition(new A).y;let o=!1;for(const r of e)if(Math.abs(r.y-s)<=t){r.speakers.push(n),o=!0;break}o||e.push({y:s,speakers:[n]})}),e.forEach(n=>{const s=n.speakers;s.forEach((o,r)=>{let a=1/0,l=null;const c=o.getWorldPosition(new A);s.forEach((u,d)=>{if(r===d)return;const h=u.getWorldPosition(new A),f=c.distanceTo(h);f<a&&(a=f,l=h)}),l&&zS(c,l)})})}function BS(i,e){const t=document.createElement("div");t.className="metro-label",t.textContent=e.toFixed(2)+" m",t.style.position="absolute",t.style.pointerEvents="none",t.style.background=getComputedStyle(document.documentElement).getPropertyValue("--fondale")||"#d6d6d6",t.style.color=getComputedStyle(document.documentElement).getPropertyValue("--testo")||"black",t.style.padding="2px 6px",t.style.borderRadius="6px",t.style.fontSize="1rem",t.style.transform="translate(-50%,-50%)",t.style.boxShadow="0 2px 8px rgba(34,34,34,0.2)",document.body.appendChild(t);function n(){if(!t.parentNode)return;const s=i.clone();s.project(Ce);const o=(s.x*.5+.5)*window.innerWidth,r=(-s.y*.5+.5)*window.innerHeight;t.style.left=o+"px",t.style.top=r+"px",js&&requestAnimationFrame(n)}return n(),t}function zS(i,e){const t=[i.x,i.y,i.z,e.x,e.y,e.z],n=new $f;n.setPositions(t);const s=new Si({color:16720418,linewidth:2,dashed:!0,dashSize:.02,gapSize:.02,transparent:!0});s.resolution.set(window.innerWidth,window.innerHeight);const o=new US(n,s);o.computeLineDistances(),o.name="__metroLine",te.add(o),Da.push(o);const r=i.distanceTo(e),a=i.clone().lerp(e,.5),l=BS(a,r);zc.push(l)}function Jf(){Da.forEach(i=>te.remove(i)),Da=[],zc.forEach(i=>i.remove()),zc=[]}window.addEventListener("resize",()=>{const i=window.innerWidth,e=window.innerHeight;Da.forEach(t=>{t.material&&t.material.resolution&&t.material.resolution.set(i,e)})});const Qf={omnifonte:{tools:["move"],toggles:["global_local","snap"]},orifonte:{tools:["move","rotate"],toggles:["global_local","snap"]},altoparlante:{tools:["move","rotate"],toggles:["global_local","snap"]},aureola:{tools:["move","rotate"],toggles:["global_local","snap"]},zona:{tools:["move","rotate","scale"],toggles:["global_local","snap"]},gruppo:{tools:["move","rotate","scale"],toggles:["global_local","snap"]}};let ep="move",tp=!0,so=null,Va=!1,gu=null,nn=null,yo={},La={},zl=null,zi=null;function np(){kS(),WS(),op(),console.log("Transform Context Menu initialized")}function kS(){nn=document.createElement("div"),nn.id="transform-context-menu",nn.style.cssText=`
        position: fixed;
        bottom: 20px;
        left: 20px;
        background: var(--fondale, #2a2a2a);
        border-radius: 8px;
        padding: 0.25rem 0.5rem;
        display: flex;
        align-items: center;
        gap: 6px;
        box-shadow: 0 4px 12px rgba(0, 0, 0, 0.3);
        z-index: 1000;
        transition: opacity 0.2s ease, transform 0.2s ease;
        opacity: 0;
        transform: translateY(10px);
        pointer-events: none;
        min-height: 40px;
    `;const i=document.createElement("div");i.style.cssText=`
        display: flex;
        align-items: center;
        gap: 4px;
        border-radius: 6px;
    `,[{id:"move",icon:'<svg viewBox="0 0 110 135" xmlns="http://www.w3.org/2000/svg"><path d="m23.6,97.5l12.2,0c0.5,0 0.9,-0.3 1.2,-0.7c0.2,-0.4 0.2,-0.9 0,-1.3l-2.1,-3.5l19.9,-11.4c0.1,-0.1 0.3,-0.1 0.4,0l19.9,11.4l-2.1,3.5c-0.2,0.4 -0.2,0.9 0,1.3c0.3,0.4 0.7,0.7 1.2,0.7l12.2,0c0.4,0 0.9,-0.3 1.1,-0.7c0.2,-0.4 0.2,-0.9 0,-1.3l-6.1,-10.6c-0.2,-0.4 -0.7,-0.6 -1.1,-0.6c-0.5,0 -0.9,0.2 -1.2,0.6l-2,3.6l-19.8,-11.5c-0.1,-0.1 -0.2,-0.2 -0.2,-0.4l0,-22.9l4,0c0.5,0 0.9,-0.2 1.1,-0.6c0.3,-0.4 0.3,-0.9 0,-1.3l-6.1,-10.6c-0.2,-0.4 -0.6,-0.7 -1.1,-0.7c-0.5,0 -0.9,0.3 -1.1,0.7l-6.1,10.6c-0.3,0.4 -0.3,0.9 0,1.3c0.2,0.4 0.6,0.6 1.1,0.6l4,0l0,22.9c0,0.2 -0.1,0.3 -0.2,0.4l-19.8,11.5l-2,-3.6c-0.3,-0.4 -0.7,-0.6 -1.2,-0.6c-0.4,0 -0.9,0.2 -1.1,0.6l-6.1,10.6c-0.2,0.4 -0.2,0.9 0,1.3c0.2,0.4 0.7,0.7 1.1,0.7z" fill="currentColor"/></svg>',key:"G"},{id:"rotate",icon:'<svg viewBox="0 0 64 80" xmlns="http://www.w3.org/2000/svg"><path d="m31.9,45.9l-4,4c-0.5,0.6 -0.5,1.6 0,2.2l4,4c0.6,0.5 1.6,0.5 2.2,0c0.5,-0.6 0.5,-1.6 0,-2.2l-3,-2.9l3,-2.9c0.5,-0.6 0.5,-1.6 0,-2.2c-0.6,-0.5 -1.6,-0.5 -2.2,0z" fill="currentColor"/><path d="m36.9,41.1l4,4c0.6,0.5 1.6,0.5 2.2,0l4,-4c0.5,-0.6 0.5,-1.6 0,-2.2c-0.6,-0.5 -1.6,-0.5 -2.2,0l-2.9,3l-2.9,-3c-0.6,-0.5 -1.6,-0.5 -2.2,0c-0.5,0.6 -0.5,1.6 0,2.2z" fill="currentColor"/><path d="m23.1,48.7c-4.6,-0.9 -8.3,-2.4 -10.6,-4.3c-1.2,-1 -2,-2.2 -2,-3.4c0,-1.8 1.5,-3.3 3.7,-4.6c4,-2.4 10.5,-3.9 17.8,-3.9c7.3,0 13.8,1.5 17.8,3.9c2.2,1.3 3.7,2.8 3.7,4.6c0,1.8 -1.5,3.3 -3.7,4.6c-4,2.4 -10.5,3.9 -17.8,3.9l-3,0c-0.8,0 -1.5,0.7 -1.5,1.5c0,0.8 0.7,1.5 1.5,1.5l3,0c7.9,0 15,-1.7 19.3,-4.3c3.4,-2 5.2,-4.6 5.2,-7.2c0,-2.6 -1.8,-5.2 -5.2,-7.2c-4.3,-2.6 -11.4,-4.3 -19.3,-4.3c-7.9,0 -15,1.7 -19.3,4.3c-3.4,2 -5.2,4.6 -5.2,7.2c0,2 1.1,4 3.1,5.7c2.5,2.2 6.8,4 11.9,4.9c0.9,0.2 1.6,-0.3 1.8,-1.1c0.2,-0.9 -0.4,-1.6 -1.2,-1.8z" fill="currentColor"/><path d="m39.7,49.9c-0.9,4.6 -2.4,8.3 -4.3,10.6c-1,1.2 -2.2,2 -3.4,2c-1.8,0 -3.3,-1.5 -4.6,-3.7c-2.4,-4 -3.9,-10.5 -3.9,-17.8c0,-7.3 1.5,-13.8 3.9,-17.8c1.3,-2.2 2.8,-3.7 4.6,-3.7c1.8,0 3.3,1.5 4.6,3.7c2.4,4 3.9,10.5 3.9,17.8l0,3c0,0.8 0.7,1.5 1.5,1.5c0.8,0 1.5,-0.7 1.5,-1.5l0,-3c0,-7.9 -1.7,-15 -4.3,-19.3c-2,-3.4 -4.6,-5.2 -7.2,-5.2c-2.6,0 -5.2,1.8 -7.2,5.2c-2.6,4.3 -4.3,11.4 -4.3,19.3c0,7.9 1.7,15 4.3,19.3c2,3.4 4.6,5.2 7.2,5.2c2,0 4,-1.1 5.7,-3.1c2.2,-2.5 4,-6.8 4.9,-11.9c0.2,-0.9 -0.3,-1.6 -1.1,-1.8c-0.9,-0.2 -1.6,0.4 -1.8,1.2z" fill="currentColor"/></svg>',key:"R"},{id:"scale",icon:'<svg viewBox="0 0 32 40" xmlns="http://www.w3.org/2000/svg"><path d="m2.8,13.4q-0.1,0 -0.3,-0.1q-0.1,0 -0.3,-0.1q-0.1,-0.1 -0.1,-0.3q-0.1,-0.1 -0.1,-0.3q0,-0.2 0.1,-0.3q0,-0.2 0.1,-0.3q0.2,-0.1 0.3,-0.2q0.2,0 0.3,0l5,0l0,1.6l-5,0zm21.4,0.8l0,10.7l-1.7,0l0,-10.7q0,-0.1 0,-0.3q-0.1,-0.1 -0.2,-0.2q-0.1,-0.2 -0.3,-0.2q-0.1,-0.1 -0.3,-0.1l-10.7,0l0,-1.6l10.7,0q0.5,0 1,0.1q0.4,0.2 0.8,0.6q0.3,0.3 0.5,0.8q0.2,0.4 0.2,0.9zm-1.7,14l-12.3,0q-0.5,0 -1,-0.2q-0.4,-0.2 -0.8,-0.5q-0.3,-0.3 -0.5,-0.8q-0.2,-0.4 -0.2,-0.9l0,-12.4l1.7,0l0,12.4q0,0.1 0,0.3q0.1,0.1 0.2,0.2q0.1,0.2 0.3,0.2q0.1,0.1 0.3,0.1l18.9,0q0.2,0 0.3,0q0.2,0.1 0.3,0.2q0.1,0.1 0.2,0.3q0.1,0.1 0.1,0.3q-0.1,0.2 -0.1,0.3q-0.1,0.2 -0.2,0.3q-0.1,0.1 -0.3,0.2q-0.1,0 -0.3,0l-4.9,0l0,-1.6l-1.7,0l0,1.6zm0,0l1.7,0l0,4.3l2.2,0l-3,3l-3,-3l2.1,0l0,-4.3zm-13.1,-16.5l-1.7,0l0,-4.3l-2,0l3,-3l3,3l-2.3,0l0,4.3z" fill="currentColor"/></svg>',key:"S"}].forEach(r=>{const a=HS(r);yo[r.id]=a,i.appendChild(a)});const t=document.createElement("div");t.style.cssText=`
        width: 1px;
        height: 32px;
        background: var(--dettaglio, #555);
        margin: 0 4px;
        align-self: center;
    `;const n=document.createElement("div");n.style.cssText=`
        display: flex;
        gap: 4px;
        align-items: center;
    `;const s=Dh("global_local",'<svg viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg"><path d="M16 2.672c-0.004 0-0.007 0-0.011 0-0.002 0-0.003 0-0.005 0-0.005 0-0.010 0.001-0.016 0.001-7.347 0.017-13.296 5.977-13.296 13.327 0 7.348 5.949 13.309 13.296 13.327 0.005 0 0.010 0.001 0.016 0.001 0.002 0 0.004 0 0.005 0 0.004 0 0.008 0 0.011 0 7.36 0 13.328-5.968 13.328-13.328s-5.968-13.328-13.328-13.328zM16.533 10.648c1.413-0.039 2.788-0.225 4.112-0.548 0.399 1.571 0.647 3.382 0.686 5.367h-4.798v-4.819zM16.533 9.582v-5.759c1.437 0.398 2.893 2.314 3.821 5.252-1.231 0.297-2.509 0.47-3.821 0.507zM15.467 3.81v5.772c-1.323-0.037-2.611-0.213-3.852-0.515 0.936-2.956 2.405-4.879 3.852-5.256zM15.467 10.647v4.82h-4.831c0.039-1.988 0.287-3.801 0.687-5.373 1.334 0.326 2.72 0.515 4.144 0.553zM9.563 15.467h-5.811c0.118-2.741 1.139-5.252 2.773-7.241 1.187 0.654 2.446 1.189 3.766 1.589-0.431 1.7-0.689 3.617-0.728 5.652zM9.563 16.533c0.039 2.034 0.297 3.951 0.728 5.651-1.319 0.401-2.579 0.936-3.766 1.59-1.635-1.989-2.656-4.5-2.773-7.241h5.811zM10.636 16.533h4.831v4.814c-1.424 0.038-2.81 0.228-4.145 0.555-0.399-1.571-0.647-3.383-0.686-5.369zM15.467 22.412v5.778c-1.448-0.378-2.919-2.303-3.854-5.263 1.241-0.302 2.53-0.478 3.854-0.515zM16.533 28.178v-5.765c1.313 0.038 2.591 0.211 3.822 0.508-0.928 2.941-2.384 4.86-3.822 5.257zM16.533 21.347v-4.814h4.798c-0.039 1.983-0.286 3.791-0.684 5.361-1.325-0.323-2.7-0.51-4.113-0.548zM22.404 16.533h5.845c-0.118 2.741-1.138 5.251-2.773 7.24-1.197-0.658-2.467-1.197-3.797-1.599 0.43-1.698 0.687-3.611 0.726-5.64zM22.404 15.467c-0.039-2.033-0.297-3.946-0.727-5.646 1.33-0.402 2.599-0.94 3.795-1.598 1.636 1.989 2.658 4.501 2.776 7.244h-5.845zM24.738 7.409c-1.061 0.564-2.18 1.031-3.35 1.385-0.623-2.005-1.498-3.642-2.533-4.717 2.27 0.545 4.297 1.719 5.883 3.332zM13.103 4.087c-1.029 1.073-1.9 2.702-2.521 4.697-1.158-0.353-2.268-0.815-3.319-1.375 1.575-1.602 3.587-2.774 5.84-3.322zM7.259 24.587c1.052-0.561 2.163-1.024 3.322-1.377 0.621 1.997 1.492 3.629 2.522 4.702-2.255-0.549-4.268-1.721-5.844-3.326zM18.855 27.922c1.036-1.075 1.911-2.712 2.535-4.721 1.17 0.355 2.29 0.82 3.351 1.387-1.586 1.614-3.614 2.791-5.886 3.334z" fill="currentColor"/></svg>','<svg viewBox="0 0 800 800" xmlns="http://www.w3.org/2000/svg"><path d="m400 66.8q-0.1 0-0.3 0 0 0-0.1 0-0.2 0-0.4 0c-183.7 0.5-332.4 149.5-332.4 333.2 0 183.7 148.7 332.7 332.4 333.2q0.2 0 0.4 0 0.1 0 0.1 0 0.2 0 0.3 0c184 0 333.2-149.2 333.2-333.2 0-184-149.2-333.2-333.2-333.2zm13.3 199.4c35.4-1 69.7-5.6 102.8-13.7 10 39.3 16.2 84.5 17.2 134.2h-120zm0-26.7v-143.9c36 9.9 72.4 57.8 95.6 131.2-30.8 7.5-62.8 11.8-95.6 12.7zm-26.6-144.3v144.3c-33.1-0.9-65.3-5.3-96.3-12.8 23.4-73.9 60.1-122 96.3-131.5zm0 171v120.5h-120.8c1-49.7 7.2-95.1 17.2-134.4 33.3 8.2 68 12.9 103.6 13.9zm-147.6 120.5h-145.3c3-68.6 28.5-131.3 69.3-181.1 29.7 16.4 61.2 29.8 94.2 39.8-10.8 42.5-17.2 90.4-18.2 141.3zm0 26.6c1 50.9 7.4 98.8 18.2 141.3-33 10-64.5 23.4-94.2 39.7-40.8-49.7-66.4-112.5-69.3-181zm26.8 0h120.8v120.4c-35.6 0.9-70.3 5.7-103.6 13.8-10-39.3-16.2-84.5-17.2-134.2zm120.8 147v144.4c-36.2-9.4-73-57.6-96.4-131.6 31.1-7.5 63.3-11.9 96.4-12.8zm26.7 144.1v-144.1c32.8 0.9 64.7 5.3 95.5 12.7-23.2 73.5-59.6 121.5-95.5 131.4zm0-170.7v-120.4h119.9c-1 49.6-7.1 94.8-17.1 134-33.1-8-67.5-12.7-102.8-13.6zm146.7-120.4h146.2c-3 68.5-28.5 131.3-69.4 181-29.9-16.5-61.6-29.9-94.9-40 10.7-42.4 17.2-90.3 18.1-141zm0-26.7c-0.9-50.8-7.4-98.6-18.2-141.1 33.3-10.1 65-23.5 94.9-40 40.9 49.8 66.5 112.6 69.4 181.1 0 0-146.1 0-146.1 0zm58.4-201.4c-26.6 14.1-54.5 25.8-83.8 34.6-15.6-50.1-37.4-91-63.3-117.9 56.7 13.6 107.4 43 147.1 83.3zm-290.9-83.1c-25.7 26.9-47.5 67.6-63 117.5-29-8.9-56.7-20.4-83-34.4 39.4-40.1 89.7-69.4 146-83.1zm-146.1 512.5c26.3-14 54.1-25.6 83-34.4 15.6 50 37.3 90.8 63.1 117.6-56.4-13.7-106.7-43.1-146.1-83.2zm289.9 83.4c25.9-26.8 47.8-67.8 63.4-118 29.2 8.9 57.2 20.5 83.7 34.7-39.6 40.3-90.3 69.8-147.1 83.3z" fill="currentColor"/><path fill-rule="evenodd" fill="none" stroke="currentColor" stroke-miterlimit="100" stroke-width="23" d="m724.3 53l3.7 3.2-654.3 692.6-3.7-3.2z"/></svg>',tp);La.global_local=s,n.appendChild(s);const o=Dh("snap",'<svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M7 10.0288C7.47142 10 8.05259 10 8.8 10H15.2C15.9474 10 16.5286 10 17 10.0288M7 10.0288C6.41168 10.0647 5.99429 10.1455 5.63803 10.327C5.07354 10.6146 4.6146 11.0735 4.32698 11.638C4 12.2798 4 13.1198 4 14.8V16.2C4 17.8802 4 18.7202 4.32698 19.362C4.6146 19.9265 5.07354 20.3854 5.63803 20.673C6.27976 21 7.11984 21 8.8 21H15.2C16.8802 21 17.7202 21 18.362 20.673C18.9265 20.3854 19.3854 19.9265 19.673 19.362C20 18.7202 20 17.8802 20 16.2V14.8C20 13.1198 20 12.2798 19.673 11.638C19.3854 11.0735 18.9265 10.6146 18.362 10.327C18.0057 10.1455 17.5883 10.0647 17 10.0288M7 10.0288V8C7 5.23858 9.23858 3 12 3C14.7614 3 17 5.23858 17 8V10.0288" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" fill="none"/></svg>','<svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M3 3L21 21M17 10V8C17 5.23858 14.7614 3 12 3C11.0283 3 10.1213 3.27719 9.35386 3.75681M7.08383 7.08338C7.02878 7.38053 7 7.6869 7 8V10.0288M19.5614 19.5618C19.273 20.0348 18.8583 20.4201 18.362 20.673C17.7202 21 16.8802 21 15.2 21H8.8C7.11984 21 6.27976 21 5.63803 20.673C5.07354 20.3854 4.6146 19.9265 4.32698 19.362C4 18.7202 4 17.8802 4 16.2V14.8C4 13.1198 4 12.2798 4.32698 11.638C4.6146 11.0735 5.07354 10.6146 5.63803 10.327C5.99429 10.1455 6.41168 10.0647 7 10.0288M19.9998 14.4023C19.9978 12.9831 19.9731 12.227 19.673 11.638C19.3854 11.0735 18.9265 10.6146 18.362 10.327C17.773 10.0269 17.0169 10.0022 15.5977 10.0002M10 10H8.8C8.05259 10 7.47142 10 7 10.0288" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" fill="none"/></svg>',!0);La.snap=o,n.appendChild(o),zl=GS(),zl.style.display="none",n.appendChild(zl),zi=VS(),n.appendChild(zi),nn.appendChild(i),nn.appendChild(t),nn.appendChild(n),document.body.appendChild(nn)}function HS(i){const e=document.createElement("button");e.id=`transform-tool-${i.id}`,e.title=`${i.id.charAt(0).toUpperCase()+i.id.slice(1)} (${i.key})`,e.style.cssText=`
        width: 32px;
        height: 32px;
        border: none;
        border-radius: 4px;
        background: transparent;
        cursor: pointer;
        transition: all 0.2s ease;
        display: flex;
        align-items: center;
        justify-content: center;
        position: relative;
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    `;const t=document.createElement("div");t.innerHTML=i.icon,t.style.cssText=`
        width: 36px;
        height: 36px;
        filter: brightness(0.8);
        transition: filter 0.2s ease;
        display: flex;
        align-items: center;
        justify-content: center;
    `;const n=t.querySelector("svg");return n&&(n.style.cssText=`
            width: 100%;
            height: 100%;
            color: currentColor;
        `),e.appendChild(t),e.addEventListener("mouseenter",()=>{e.classList.contains("active")||(e.style.background="rgba(255, 255, 255, 0.1)",t.style.filter="brightness(1)")}),e.addEventListener("mouseleave",()=>{e.classList.contains("active")||(e.style.background="transparent",t.style.filter="brightness(0.8)")}),e}function Dh(i,e,t,n){const s=document.createElement("button");s.id=`transform-toggle-${i}`,s.title=i==="global_local"?n?"Global Mode":"Local Mode":n?"Snap On":"Snap Off",s.style.cssText=`
        width: 28px;
        height: 28px;
        border: none;
        border-radius: 4px;
        background: transparent;
        cursor: pointer;
        transition: all 0.2s ease;
        display: flex;
        align-items: center;
        justify-content: center;
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    `;const o=document.createElement("div");o.innerHTML=n?e:t,o.style.cssText=`
        width: 16px;
        height: 16px;
        filter: brightness(0.8);
        transition: filter 0.2s ease;
        display: flex;
        align-items: center;
        justify-content: center;
    `;const r=o.querySelector("svg");return r&&(r.style.cssText=`
            width: 100%;
            height: 100%;
            color: currentColor;
        `),s.appendChild(o),s.dataset.iconOn=e,s.dataset.iconOff=t,s.dataset.state=n,s.addEventListener("mouseenter",()=>{s.style.background="rgba(255, 255, 255, 0.1)",o.style.filter="brightness(1)"}),s.addEventListener("mouseleave",()=>{s.style.background="transparent",o.style.filter="brightness(0.8)"}),s}function GS(){const i=document.createElement("div");i.style.cssText=`
        position: relative;
        width: 28px;
        height: 28px;
    `;const e=document.createElement("div");e.style.cssText=`
        width: 28px;
        height: 28px;
        border-radius: 4px;
        background: #ff6b6b;
        cursor: pointer;
        transition: all 0.2s ease;
        position: relative;
    `;const t=document.createElement("input");return t.type="color",t.value="#ff6b6b",t.style.cssText=`
        position: absolute;
        opacity: 0;
        width: 100%;
        height: 100%;
        cursor: pointer;
    `,e.addEventListener("mouseenter",()=>{e.style.transform="scale(1.1)"}),e.addEventListener("mouseleave",()=>{e.style.transform="scale(1)"}),t.addEventListener("change",n=>{e.style.background=n.target.value,console.log("Color changed to:",n.target.value)}),i.appendChild(e),i.appendChild(t),i}function VS(){const i=document.createElement("div");i.style.cssText=`
        display: flex;
        flex-direction: row;
        gap: 0.3rem;
        margin-left: 0.5rem;
        align-items: center;
    `;const e=document.createElement("div");e.className="tags-container",e.style.cssText=`
        display: grid;
        grid-template-columns: repeat(4, 18px);
        grid-template-rows: repeat(2, 18px);
        gap: 0.15rem;
    `;const t=document.createElement("div");t.className="tags-pagination",t.style.cssText=`
        display: flex;
        flex-direction: column;
        gap: 0.2rem;
        cursor: pointer;
    `;const n=document.createElement("div");n.className="pagination-dot",n.style.cssText=`
        width: 6px;
        height: 6px;
        border-radius: 50%;
        background-color: #fff;
        opacity: 1;
        transition: opacity 0.2s ease;
    `;const s=document.createElement("div");s.className="pagination-dot",s.style.cssText=`
        width: 6px;
        height: 6px;
        border-radius: 50%;
        background-color: #fff;
        opacity: 0.3;
        transition: opacity 0.2s ease;
    `,t.appendChild(n),t.appendChild(s),i.appendChild(e),i.appendChild(t),i._container=e,i._dot1=n,i._dot2=s,i._currentPage=0;const o=()=>{i._currentPage=(i._currentPage+1)%2,i._currentPage===0?(n.style.opacity="1",s.style.opacity="0.3"):(n.style.opacity="0.3",s.style.opacity="1"),_u(gu)};t.addEventListener("click",o);let r=0,a=0;e.addEventListener("touchstart",c=>{r=c.changedTouches[0].screenY},{passive:!0}),e.addEventListener("touchend",c=>{a=c.changedTouches[0].screenY,l()},{passive:!0}),e.addEventListener("wheel",c=>{c.preventDefault();const u=c.deltaY;Math.abs(u)>10&&(u>0&&i._currentPage===0||u<0&&i._currentPage===1)&&o()},{passive:!1});const l=()=>{const c=r-a;Math.abs(c)>30&&(c>0&&i._currentPage===0||c<0&&i._currentPage===1)&&o()};return i.style.display="none",i}function _u(i){if(!zi||!i)return;Lf(i);const e=zi._container,t=zi._currentPage||0;e.innerHTML="";const n=t===0?1:9,s=t===0?8:16;for(let o=n;o<=s;o++){const r=document.createElement("button");r.className="tag-chip",r.textContent=o,r.dataset.tag=o;const a=ar(i,o),l=Pf[o];r.style.cssText=`
            width: 18px;
            height: 18px;
            min-width: 18px;
            min-height: 18px;
            border-radius: 3px;
            border: none;
            margin: 0;
            padding: 0;
            font-size: 0.6rem;
            font-weight: bold;
            line-height: 1;
            cursor: pointer;
            transition: all 0.15s ease;
            flex-shrink: 0;
            background-color: ${l};
            color: #000;
            opacity: ${a?"1":"0.3"};
            display: flex;
            align-items: center;
            justify-content: center;
            box-sizing: border-box;
        `,r.addEventListener("click",()=>{var u,d,h,f;if((u=window.multiClientManager)!=null&&u.isEnabled&&!((d=window.multiClientManager)!=null&&d.isMaster)&&window.multiClientManager.requestMaster(),Df(i,o)){const _=ar(i,o);if(r.style.opacity=_?"1":"0.3",window.messageBroker&&window.messageBroker.sendObjectTags({name:i.name,type:null,tags:i.userData.tags||[0]}),window.updateSubmenuTags&&window.updateSubmenuTags(i),(h=window.multiClientManager)!=null&&h.isMaster&&((f=window.multiClientManager)!=null&&f.isEnabled)){const g=new A;i.getWorldPosition(g);const m=new zt().setFromQuaternion(i.quaternion);window.multiClientManager.sendTransform(i.userData.id,{x:g.x,y:g.y,z:g.z},{x:m.x,y:m.y,z:m.z},{x:i.scale.x,y:i.scale.y,z:i.scale.z},i.userData.tags||[0])}}}),r.addEventListener("mouseenter",()=>{r.style.filter="brightness(1.2)"}),r.addEventListener("mouseleave",()=>{r.style.filter="brightness(1)"}),e.appendChild(r)}zi.style.display="flex"}window.updateTagsChipsExternal=_u;function WS(){Object.entries(yo).forEach(([i,e])=>{e.addEventListener("click",()=>{var t,n,s;console.log("Tool button clicked:",i),console.log("Control object attached:",((s=(n=(t=window.setupGlobals)==null?void 0:t.control)==null?void 0:n.object)==null?void 0:s.name)||"none"),Qo(i),ip(i)})}),Object.entries(La).forEach(([i,e])=>{e.addEventListener("click",()=>{XS(i)})})}function ip(i){var t,n,s;const e=(t=window.setupGlobals)==null?void 0:t.control;if(!e){console.log("No transform controls available");return}if(!e.object){console.log("No object attached to transform controls - mode will be set for next attach"),e.setMode(i==="move"?"translate":i);return}switch(i){case"move":Kt.hide(),console.log("Setting transform mode to: translate"),e.setMode("translate"),console.log("Transform mode successfully set to: translate"),console.log("Current control mode after change:",e.getMode()),window.updateStato&&window.updateStato("Spostamento");break;case"rotate":if(Kt.hide(),console.log("Setting transform mode to: rotate"),e.object){const r=e.object,a=r.name||"";if(a.toLowerCase().includes("altoparlante")){console.log("Activating rotation for speaker:",a);const l=((n=r.userData)==null?void 0:n.autoRotateToCenter)===!0;console.log("LookAt was active:",l),l&&window.orientSpeakerToCenter?window.orientSpeakerToCenter(r,!1):r.userData&&(r.userData.autoRotateToCenter=!1,console.log("LookAt disabled without resetting rotation - keeping current rotation")),window.updateMenuForObject&&window.updateMenuForObject(r),console.log("LookAt center flag updated to:",(s=r.userData)==null?void 0:s.autoRotateToCenter),console.log("Speaker rotation mode activated - lookAt center handled based on previous state")}}e.setMode("rotate"),console.log("Transform mode successfully set to: rotate"),console.log("Current control mode after change:",e.getMode()),window.updateStato&&window.updateStato("Rotazione");break;case"scale":console.log("triggerTransformMode: Executing scale case");const o=e.object;if(console.log("triggerTransformMode: attachedObject is:",(o==null?void 0:o.name)||"null"),o){console.log("triggerTransformMode: Processing scale for object:",o.name),console.log("triggerTransformMode: Saving to raycasterGlobals..."),window.raycasterGlobals?(window.raycasterGlobals.lastHoveredObject=o,console.log("triggerTransformMode: Saved to raycasterGlobals")):console.log("triggerTransformMode: ERROR - raycasterGlobals not found"),console.log("triggerTransformMode: Detaching control..."),e.detach(),console.log("triggerTransformMode: Control detached"),window.orbit&&(window.orbit.enabled=!0,console.log("triggerTransformMode: Orbit enabled")),console.log("triggerTransformMode: Calling groupScaleUIDiv.show..."),Kt.show(o),console.log("triggerTransformMode: groupScaleUIDiv.show called");const r=o.name==="Gruppo di trasformazione",a=window.currentCamera;r&&a&&a.isOrthographicCamera&&a.position.y>Math.abs(a.position.x)&&a.position.y>Math.abs(a.position.z)?window.updateStato&&window.updateStato("Scala Gruppo XY"):window.updateStato&&window.updateStato("Scala"),vu("scale")}break;default:console.warn("Unknown transform mode:",i)}}function Qo(i){Object.values(yo).forEach(t=>{t.classList.remove("active"),t.style.background="transparent";const n=t.querySelector("div");n&&(n.style.filter="brightness(0.8)")});const e=yo[i];if(e){e.classList.add("active"),e.style.background="var(--dettaglio, #555)";const t=e.querySelector("div");t&&(t.style.filter="brightness(1.2)"),ep=i,console.log(`Transform tool set to: ${i}`)}}function XS(i){const e=La[i];if(!e)return;const n=!(e.dataset.state==="true"),s=e.querySelector("div");if(s){s.innerHTML=n?e.dataset.iconOn:e.dataset.iconOff;const o=s.querySelector("svg");o&&(o.style.cssText=`
                width: 100%;
                height: 100%;
                color: currentColor;
            `)}e.dataset.state=n,i==="global_local"?(tp=n,e.title=n?"Global Mode":"Local Mode",console.log(`Global mode: ${n}`)):i==="snap"&&(e.title=n?"Snap On":"Snap Off",console.log(`Snap: ${n}`))}function qS(i){if(!i||!i.name)return"gruppo";const e=i.name.toLowerCase();return e.includes("omnifonte")?"omnifonte":e.includes("orifonte")?"orifonte":e.includes("altoparlante")?"altoparlante":e.includes("aureola")||e.includes("cloud")?"aureola":e.includes("zona")?"zona":"gruppo"}function sp(i){var n;if(!nn)return;gu=i,so=qS(i);const e=Qf[so];if(!e)return;Object.entries(yo).forEach(([s,o])=>{const r=e.tools.includes(s);o.style.display=r?"flex":"none"});const t=(n=window.setupGlobals)==null?void 0:n.control;if(t&&t.object){const s=t.getMode(),r={translate:"move",rotate:"rotate",scale:"scale"}[s];r&&e.tools.includes(r)?Qo(r):e.tools.length>0&&Qo(e.tools[0])}else e.tools.length>0&&Qo(e.tools[0]);_u(i),nn.style.opacity="1",nn.style.transform="translateY(0)",nn.style.pointerEvents="auto",Va=!0,console.log(`Transform menu shown for object type: ${so}`)}function op(){nn&&(nn.style.opacity="0",nn.style.transform="translateY(10px)",nn.style.pointerEvents="none",Va=!1,so=null,gu=null,zi&&(zi.style.display="none"),console.log("Transform menu hidden"))}function vu(i){if(Va&&i&&yo[i]&&so){const e=Qf[so];e&&e.tools.includes(i)&&Qo(i)}}function rp(i,e=null){var n,s,o;const t=(n=window.setupGlobals)==null?void 0:n.control;if(t){if(e&&(t.attach(e),(s=window.raycasterGlobals)!=null&&s.setRaycasterActiveForTransformControls&&window.raycasterGlobals.setRaycasterActiveForTransformControls(!1),window.orbit&&(window.orbit.enabled=!1),(o=window.raycasterGlobals)!=null&&o.outlinePass&&(window.raycasterGlobals.outlinePass.selectedObjects=[]),sp(e)),t.object)ip(i),vu(i);else if(i&&i!=="scale"){t.setMode(i==="move"?"translate":i);const r=document.getElementById("ghostButton");if(r){r.style.display="block";const a={move:"21.5rem",rotate:"16.5rem",scale:"11.5rem"};r.style.right=a[i]||"21.5rem"}}}}window.syncTransformState=rp;window.transformContextMenu={init:np,show:sp,hide:op,updateState:vu,getCurrentMode:()=>ep,isVisible:()=>Va,syncState:rp};document.addEventListener("DOMContentLoaded",np);class jS{constructor(){this.ws=null,this.clientId=null,this.isMaster=!1,this.syncEnabled=!1,this.reconnectAttempts=0,this.maxReconnectAttempts=5,this.reconnectDelay=1e3,this.pingInterval=null,this.onStateChange=null,this.onMasterChange=null,this.onTransformReceived=null,this.onObjectCreatedReceived=null,this.messageQueue=[],console.log("MultiClientManager inizializzato"),this.connect()}setEnabled(e){console.log("setEnabled chiamato con:",e,"syncEnabled corrente:",this.syncEnabled),this.syncEnabled=e,console.log("setEnabled: syncEnabled ora è:",this.syncEnabled),console.log(`Sincronizzazione multi-client: ${e?"ATTIVA":"DISATTIVA"}`)}connect(){if(this.ws&&this.ws.readyState===WebSocket.OPEN){console.log("WebSocket già connesso");return}const t=`ws://${window.location.hostname}:8080/ws`;console.log(`Connessione a ${t}...`);try{this.ws=new WebSocket(t),this.ws.onopen=()=>{console.log("WebSocket connesso"),this.reconnectAttempts=0,this.startPing(),this.processMessageQueue()},this.ws.onmessage=n=>{const s=JSON.parse(n.data);this.handleMessage(s)},this.ws.onclose=()=>{console.log("WebSocket disconnesso"),this.stopPing(),this.handleDisconnection()},this.ws.onerror=n=>{console.error("Errore WebSocket:",n)}}catch(n){console.error("Errore creazione WebSocket:",n)}}disconnect(){this.ws&&(this.ws.close(),this.ws=null),this.stopPing(),this.clientId=null,this.isMaster=!1}handleMessage(e){switch(console.log("[MultiClient] Messaggio ricevuto:",e.type,e),e.type){case"init":this.clientId=e.clientId,this.isMaster=e.isMaster,this.notifyStateChange(),console.log(`Inizializzato come ${this.isMaster?"MASTER":"SLAVE"} (${this.clientId})`);break;case"role_change":const t=this.isMaster;this.isMaster=e.isMaster,t!==this.isMaster&&(this.notifyMasterChange(this.isMaster),console.log(`Ruolo cambiato: ${this.isMaster?"MASTER":"SLAVE"}`));break;case"master_changed":console.log(`Nuovo master: ${e.newMasterId}`);break;case"transform":!this.isMaster&&e.fromMaster&&this.handleTransformMessage(e);break;case"object_created":!this.isMaster&&e.fromMaster?(console.log("SLAVE riceve creazione oggetto:",e.objectId,e.objectType,e.name),this.handleObjectCreatedMessage(e)):console.log("ObjectCreated IGNORATO - isMaster:",this.isMaster,"fromMaster:",e.fromMaster);break;case"pong":break;case"nuvola_status":this.onNuvolaStatus&&this.onNuvolaStatus(e.data);break;default:console.log("Messaggio sconosciuto:",e)}}handleTransformMessage(e){if(console.log("[MultiClient] handleTransformMessage ricevuto:",{objectId:e.objectId,hasMenuState:!!e.menuState,menuState:e.menuState}),this.onTransformReceived){const t={objectId:e.objectId,position:e.position,rotation:e.rotation,scale:e.scale};e.tags&&(t.tags=e.tags),e.menuState&&(t.menuState=e.menuState),console.log("[MultiClient] Passando data a onTransformReceived:",{hasMenuState:!!t.menuState,menuStateKeys:t.menuState?Object.keys(t.menuState):[]}),this.onTransformReceived(t)}}handleObjectCreatedMessage(e){this.onObjectCreatedReceived&&this.onObjectCreatedReceived({objectId:e.objectId,objectType:e.objectType,name:e.name,position:e.position,rotation:e.rotation,scale:e.scale,properties:e.properties,tags:e.tags||[0],menuState:e.menuState||{}})}loadInitialState(e){console.log("Caricamento stato iniziale:",e);for(const[t,n]of Object.entries(e))console.log("Processando oggetto iniziale:",t,n),n.objectType&&n.name&&this.onObjectCreatedReceived?(console.log("Creando oggetto iniziale:",n.objectType,n.name),this.onObjectCreatedReceived({objectId:t,objectType:n.objectType,name:n.name,position:n.position,rotation:n.rotation,scale:n.scale,properties:n.properties})):n.position&&this.onTransformReceived&&(console.log("Applicando solo trasformazione iniziale:",t),this.onTransformReceived({objectId:t,position:n.position,rotation:n.rotation,scale:n.scale}))}sendTransform(e,t,n,s,o=null,r=null){if(!this.isMaster||!this.syncEnabled){console.log("sendTransform BLOCKED - isMaster:",this.isMaster,"syncEnabled:",this.syncEnabled);return}const a=Date.now(),l=`transform_${e}`;if(this.lastSent||(this.lastSent={}),o===null&&r===null&&this.lastSent[l]&&a-this.lastSent[l]<50)return;this.lastSent[l]=a;const c={type:"transform",objectId:e,position:t,rotation:n,scale:s};o!==null&&(c.tags=o),r!==null&&(c.menuState=r),console.log("[MultiClient] sendTransform inviando:",{objectId:e,hasTags:o!==null,hasMenuState:r!==null,menuStateKeys:r?Object.keys(r):[]}),this.sendMessage(c)}notifyObjectCreated(e,t,n,s,o,r,a={},l=[0],c={}){if(!this.isMaster||!this.syncEnabled){console.log("notifyObjectCreated BLOCKED - isMaster:",this.isMaster,"syncEnabled:",this.syncEnabled);return}console.log("MASTER notifica creazione oggetto:",e,t,n,"tags:",l,"menuState:",c);const u={type:"object_created",objectId:e,objectType:t,name:n,position:s,rotation:o,scale:r,properties:a,tags:l,menuState:c};this.sendMessage(u)}requestMaster(){if(console.log("[requestMaster] syncEnabled:",this.syncEnabled,"isConnected:",this.isConnected,"isMaster:",this.isMaster),!this.syncEnabled){console.warn("[requestMaster] BLOCCATO: syncEnabled è false");return}if(!this.isConnected){console.warn("[requestMaster] BLOCCATO: WebSocket non connesso");return}console.log("[requestMaster] Invio richiesta al server..."),this.sendMessage({type:"request_master"})}sendMessage(e){this.ws&&this.ws.readyState===WebSocket.OPEN?(e.type==="transform"&&console.log("[MultiClient] INVIO REALE via WebSocket:",{type:e.type,objectId:e.objectId,hasMenuState:!!e.menuState,menuStateContent:e.menuState}),this.ws.send(JSON.stringify(e))):this.messageQueue.push(e)}processMessageQueue(){for(;this.messageQueue.length>0&&this.ws.readyState===WebSocket.OPEN;){const e=this.messageQueue.shift();this.ws.send(JSON.stringify(e))}}handleDisconnection(){if(this.reconnectAttempts<this.maxReconnectAttempts){this.reconnectAttempts++;const e=this.reconnectDelay*Math.pow(2,this.reconnectAttempts-1);console.log(`Tentativo riconnessione ${this.reconnectAttempts}/${this.maxReconnectAttempts} in ${e}ms`),setTimeout(()=>{this.connect()},e)}else console.error("Massimo numero di tentativi di riconnessione raggiunto"),this.setEnabled(!1)}startPing(){this.pingInterval=setInterval(()=>{this.ws&&this.ws.readyState===WebSocket.OPEN&&this.sendMessage({type:"ping"})},3e4)}stopPing(){this.pingInterval&&(clearInterval(this.pingInterval),this.pingInterval=null)}notifyStateChange(){this.onStateChange&&this.onStateChange({clientId:this.clientId,isMaster:this.isMaster,isConnected:this.ws&&this.ws.readyState===WebSocket.OPEN})}notifyMasterChange(e){this.onMasterChange&&this.onMasterChange(e)}get isEnabled(){return this.syncEnabled}set isEnabled(e){this.setEnabled(e)}get isConnected(){return this.ws&&this.ws.readyState===WebSocket.OPEN}getStatus(){return{isEnabled:this.syncEnabled,isConnected:this.isConnected,isMaster:this.isMaster,clientId:this.clientId}}}window.multiClientManager=new jS;const Ia={generali:{title:"Generali",controls:[{type:"toggle",id:"theme",label:"Tema Eco",defaultValue:!1,action:i=>{console.log("Theme changed:",i),document.querySelector('input[data-id="theme"]').checked=i,document.querySelector('input[data-id="theme"]').dispatchEvent(new Event("change"))}},{type:"toggle",id:"gridSnapState",label:"Aggancio Griglia",defaultValue:!0,action:i=>{console.log("Grid snap changed:",i),document.querySelector('input[data-id="gridSnapState"]').checked=i,document.querySelector('input[data-id="gridSnapState"]').dispatchEvent(new Event("change"))}},{type:"slider",id:"snapDefinition",label:"Precisione Snap",min:1,max:3,defaultValue:2,step:1,action:i=>{console.log("Snap definition changed:",i),document.querySelector('input[data-id="snapDefinition"]').value=i,document.querySelector('input[data-id="snapDefinition"]').dispatchEvent(new Event("change"))}},{type:"toggle",id:"lock",label:"Diorama",defaultValue:!1,action:i=>{console.log("Lock changed:",i),document.querySelector('input[data-id="lock"]').checked=i,document.querySelector('input[data-id="lock"]').dispatchEvent(new Event("change"))}},{type:"toggle",id:"grid",label:"Super Superficie",defaultValue:!0,action:i=>{console.log("Grid visibility changed:",i),document.querySelector('input[data-id="grid"]').checked=i,document.querySelector('input[data-id="grid"]').dispatchEvent(new Event("change"))}},{type:"slider",id:"gridsize",label:"Dimensione Griglia",min:1,max:4,defaultValue:2,step:1,action:i=>{console.log("Grid size changed:",i),document.querySelector('input[data-id="gridsize"]').value=i,document.querySelector('input[data-id="gridsize"]').dispatchEvent(new Event("change"))}},{type:"toggle",id:"multiClient",label:"Sincronizzazione Multi-Client",defaultValue:!1,action:i=>{console.log("=== Multi-client action chiamato ==="),console.log("Valore ricevuto:",i),console.log("window.multiClientManager esiste:",!!window.multiClientManager),window.multiClientManager?(console.log("Chiamando setEnabled con:",i),window.multiClientManager.setEnabled(i),window.updateMultiClientStatusDisplay&&window.updateMultiClientStatusDisplay()):console.error("window.multiClientManager non trovato!")}},{type:"status",id:"multiClientStatus",defaultText:"Status: Disattivato",hidden:!0},{type:"toggle",id:"oscOutput",label:"OSC Output",defaultValue:!0,action:i=>{window.oscManager&&(window.oscManager.setEnabled(i),window.updateOSCStatusDisplay&&window.updateOSCStatusDisplay())}},{type:"input",id:"oscHost",label:"OSC IP",defaultValue:"192.168.0.255",action:i=>{if(window.oscManager){const e=window.oscManager.port;window.oscManager.updateConfig(i,e)}}},{type:"input",id:"oscPort",label:"OSC Port",defaultValue:"5000",action:i=>{if(window.oscManager){const e=window.oscManager.host,t=parseInt(i)||5e3;window.oscManager.updateConfig(e,t)}}},{type:"status",id:"oscStatus",defaultText:"Status: Disattivato",hidden:!0},{type:"toggle",id:"oscForceOutput",label:"Force OSC Output (ignora ruolo Master)",defaultValue:!1,action:i=>{window.messageBroker&&window.messageBroker.setOSCForceOutput(i)}},{type:"button",id:"saveProject",label:"Save Project",action:()=>{var i;console.log("Saving project"),(i=document.getElementById("saveProjectBtn"))==null||i.click()}},{type:"button",id:"saveProjectAs",label:"Save Project As",action:()=>{var i;console.log("Saving project as"),(i=document.getElementById("saveProjectAsBtn"))==null||i.click()}},{type:"button",id:"loadProject",label:"Load Project",action:()=>{var i;console.log("Loading project"),(i=document.getElementById("loadProjectBtn"))==null||i.click()}},{type:"button",id:"loadSpeakersPreset",label:"Load Speakers",action:()=>{var i;console.log("Loading speakers preset"),(i=document.getElementById("loadSpeakersPresetBtn"))==null||i.click()}},{type:"button",id:"saveSpeakersPreset",label:"Save Speakers",action:()=>{var i;console.log("Saving speakers preset"),(i=document.getElementById("saveSpeakersPresetBtn"))==null||i.click()}},{type:"button",id:"loadSourcesPreset",label:"Load Sources",action:()=>{var i;console.log("Loading sources preset"),(i=document.getElementById("loadSourcesPresetBtn"))==null||i.click()}},{type:"button",id:"saveSourcesPreset",label:"Save Sources",action:()=>{var i;console.log("Saving sources preset"),(i=document.getElementById("saveSourcesPresetBtn"))==null||i.click()}},{type:"button",id:"resetScene",label:"Empty",action:()=>{var i;console.log("Resetting scene"),(i=document.getElementById("resetSceneBtn"))==null||i.click()}}]},plastico:{title:"Plastico",controls:[{type:"button",id:"loadPlastico",label:"Carica",action:()=>{var i;console.log("Loading plastico"),(i=document.getElementById("loadPlastico"))==null||i.click()}},{type:"toggle",id:"archVisibility",label:"⏿",defaultValue:!0,action:i=>{console.log("Arch visibility changed:",i),document.querySelector('input[data-id="archVisibility"]').checked=i,document.querySelector('input[data-id="archVisibility"]').dispatchEvent(new Event("change"))}},{type:"slider",id:"plasticoThreshold",label:"Threshold",min:0,max:120,defaultValue:60,step:1,action:i=>{console.log("Plastico threshold changed:",i);const e=document.getElementById("plasticoThreshold");e&&(e.value=i,e.dispatchEvent(new Event("input")))}},{type:"slider",id:"plasticoThickness",label:"Line Thickness",min:.5,max:10,defaultValue:2,step:.1,action:i=>{console.log("Plastico thickness changed:",i);const e=document.getElementById("plasticoThickness");e&&(e.value=i,e.dispatchEvent(new Event("input")))}},{type:"slider",id:"plasticoOpacity",label:"Opacity",min:.1,max:1,defaultValue:.8,step:.01,action:i=>{console.log("Plastico opacity changed:",i);const e=document.getElementById("plasticoOpacity");e&&(e.value=i,e.dispatchEvent(new Event("input")))}}]},carica:{title:"Carica Modello",controls:[{type:"button",id:"loadGenericGltf",label:"Carica",action:()=>{var i;console.log("Loading GLTF"),(i=document.getElementById("loadGenericGltf"))==null||i.click()}}]},zone:{title:"Zone",controls:[{type:"toggle",id:"zoneVisibility",label:"⏿",defaultValue:!0,action:i=>{console.log("Zone visibility changed:",i),document.querySelector('input[data-id="zoneVisibility"]').checked=i,document.querySelector('input[data-id="zoneVisibility"]').dispatchEvent(new Event("change"))}}]},altoparlanti:{title:"Altoparlanti",controls:[{type:"toggle",id:"speakersVisibility",label:"⏿",defaultValue:!0,action:i=>{console.log("Speakers visibility changed:",i),window.setGlobalSpeakerVisibility&&window.setGlobalSpeakerVisibility(i),document.querySelectorAll('input[data-id="speakersVisibility"]').forEach(t=>{t.checked=i,t.dispatchEvent(new Event("change"))})}},{type:"toggle",id:"speakersGlobalLookAt",label:"Guarda origine (globale)",defaultValue:!0,action:i=>{console.log("Global speaker look at changed:",i),window.setGlobalSpeakerLookAt&&window.setGlobalSpeakerLookAt(i)}}]},corone:{title:"",controls:[{type:"custom",id:"nuvola-dashboard",html:'<div id="nuvola-dashboard" class="nuvola-dashboard-container"></div>'}]}};let ap="generali";function $S(i){const e=document.createElement("div");e.className="control-row";const t=document.createElement("label");t.textContent=i.label;const n=document.createElement("input");return n.type="checkbox",n.checked=i.defaultValue||!1,n.addEventListener("click",s=>{console.log("Toggle clicked:",i.id,"checked:",s.target.checked),i.action(s.target.checked)}),e.appendChild(t),e.appendChild(n),e}function YS(i){const e=document.createElement("div");e.className="control-row";const t=document.createElement("label");t.textContent=i.label;const n=document.createElement("div");n.className="slider-container";const s=document.createElement("input");return s.type="range",s.min=i.min,s.max=i.max,s.step=i.step||1,s.value=i.defaultValue||i.min,s.addEventListener("input",o=>{i.action(parseFloat(o.target.value))}),n.appendChild(s),e.appendChild(t),e.appendChild(n),e}function KS(i){const e=document.createElement("div");e.className="control-row";const t=document.createElement("button");return t.className="control-button",t.textContent=i.label,t.addEventListener("click",i.action),e.appendChild(t),e}function ZS(i){const e=document.createElement("div");e.className="control-row status-row";const t=document.createElement("div");return t.className="status-display",t.id=i.id,t.textContent=i.defaultText||"Status",t.style.fontSize="0.8em",t.style.color="#888",t.style.padding="4px 8px",t.style.backgroundColor="rgba(255,255,255,0.1)",t.style.borderRadius="4px",t.style.display=i.hidden?"none":"block",e.appendChild(t),e}function JS(i){const e=document.createElement("div");e.className="control-row";const t=document.createElement("label");t.textContent=i.label;const n=document.createElement("input");return n.type="text",n.id=i.id,n.value=i.defaultValue||"",n.style.flex="1",n.style.padding="4px 8px",n.style.backgroundColor="rgba(255,255,255,0.1)",n.style.border="1px solid var(--dettaglio)",n.style.borderRadius="4px",n.style.color="var(--testo)",n.style.width="70%",n.style.textAlign="right",n.addEventListener("change",s=>{i.action(s.target.value)}),e.appendChild(t),e.appendChild(n),e}function QS(i){const e=document.createElement("div");e.className="control-row";const t=document.createElement("label");t.textContent=i.label;const n=document.createElement("input");return n.type="number",n.min=i.min,n.max=i.max,n.step=i.step||1,n.value=i.defaultValue||i.min,n.addEventListener("change",s=>{i.action(parseFloat(s.target.value))}),e.appendChild(t),e.appendChild(n),e}function $o(i){const e=Ia[i];if(!e)return null;const t=document.createElement("div");t.className="new-panel-content",t.id=`new-panel-${i}`;const n=document.createElement("h3");return n.className="panel-title",n.textContent=e.title,t.appendChild(n),e.controls.forEach(s=>{let o;switch(s.type){case"toggle":o=$S(s);break;case"slider":o=YS(s);break;case"button":o=KS(s);break;case"numbox":o=QS(s);break;case"status":o=ZS(s);break;case"input":o=JS(s);break;case"custom":const r=document.createElement("div");r.innerHTML=s.html,o=r.firstChild;break;default:console.warn("Unknown control type:",s.type);return}o&&t.appendChild(o)}),t}function eM(){const i=document.createElement("div");return i.className="right-menu-tabs",Object.keys(Ia).forEach(e=>{const t=document.createElement("button");t.className="right-menu-tab",t.textContent=tM(e),t.dataset.panel=e,e==="generali"&&t.classList.add("right-tab-active"),t.addEventListener("click",()=>{lp(e),i.querySelectorAll(".right-menu-tab").forEach(n=>n.classList.remove("right-tab-active")),t.classList.add("right-tab-active")}),i.appendChild(t)}),i}function tM(i){return{generali:"G",plastico:"P",carica:"C",zone:"Z",altoparlanti:"A",corone:"❍"}[i]||i.charAt(0).toUpperCase()}function lp(i){ap=i;const e=document.querySelectorAll(".panel-tab"),t=document.querySelectorAll(".panel-content");e.forEach(n=>{n.classList.remove("active"),n.getAttribute("data-panel")===i&&n.classList.add("active")}),t.forEach(n=>{n.style.display="none",n.getAttribute("data-panel-content")===i&&(n.style.display="block")})}function nM(){if(!document.getElementById("black-panel")){console.warn("Black panel not found");return}const e=document.getElementById("new-panel-generali-container");if(e){const r=$o("generali");r&&(r.style.display="block",e.appendChild(r),console.log("Generali panel migrated to new system"))}const t=document.getElementById("new-panel-plastico-container");if(t){const r=$o("plastico");r&&(r.style.display="block",t.appendChild(r),console.log("Plastico panel migrated to new system"))}["carica","zone","altoparlanti","corone"].forEach(r=>{const a=document.getElementById(`new-panel-${r}-container`);if(a){const l=$o(r);l&&(l.style.display="block",a.appendChild(l),console.log(`${r} panel migrated to new system`))}});const s=document.getElementById("new-panel-tabs-container");if(s){const r=eM();s.appendChild(r),console.log("New tab system installed")}const o=document.createElement("div");o.className="new-panels-container",Object.keys(Ia).forEach(r=>{const a=$o(r);a&&r!=="generali"&&(r!==ap&&(a.style.display="none"),o.appendChild(a))}),window.rightMenuSystem={newContainer:o,switchToPanel:lp,panelConfigs:Ia,migratePanel:r=>iM(r)},console.log("Right menu system initialized - Generali panel active")}function iM(i){const e=document.querySelector(`[data-panel-content="${i}"]`);if(!e){console.warn(`Panel ${i} not found`);return}const t=$o(i);if(!t){console.warn(`Could not create content for panel ${i}`);return}e.innerHTML="",e.appendChild(t),t.style.display="block",console.log(`Panel ${i} migrated to new system`)}document.addEventListener("DOMContentLoaded",nM);let wn=null,En=null;function sM(){const i=localStorage.getItem("activeProjectName");i&&(En=i,console.log("[PROJECT] Progetto attivo caricato da localStorage:",En))}function xu(){En&&localStorage.setItem("activeProjectName",En)}function cp(){const i={},e=document.getElementById("oscHost"),t=document.getElementById("oscPort");e&&t&&(i.osc={host:e.value,port:parseInt(t.value,10)});const n=document.getElementById("plasticoToggle"),s=document.getElementById("plasticoThreshold");return n&&(i.plastico={visible:n.checked,threshold:s?parseFloat(s.value):.5}),i}function ki(i){const e={};return qe.filter(t=>t.name&&t.name.startsWith(i)).forEach(t=>{const n=t.parent&&t.parent.type==="Group"?t.parent:t,s=t.name.replace(/\s+/g,"_");e[s]={position:{x:n.position.x,y:n.position.z,z:n.position.y},rotation:{x:n.rotation.x,y:n.rotation.z,z:n.rotation.y},scale:{x:n.scale.x,y:n.scale.z,z:n.scale.y},tags:t.userData.tags||[],menuState:t.userData.menuState||{}}}),e}async function oM(){try{wn||(wn=await window.showDirectoryPicker({mode:"readwrite"}),En=wn.name,xu(),console.log("[PROJECT] Nuovo progetto creato:",En));const i=En,e={metadata:{name:i,created:new Date().toISOString(),version:"2.0"},settings:cp()},n=await(await wn.getFileHandle(`${i}_settings.json`,{create:!0})).createWritable();await n.write(JSON.stringify(e,null,2)),await n.close();const s=ki("Altoparlante"),o={metadata:{name:`${i} - Speakers`,created:new Date().toISOString(),version:"2.0"},speakers:s},a=await(await wn.getFileHandle(`${i}_speakers.json`,{create:!0})).createWritable();await a.write(JSON.stringify(o,null,2)),await a.close();const l=ki("Omnifonte"),c=ki("Orifonte"),u=ki("Zona"),d={...l,...c,...u},h={metadata:{name:`${i} - Sources`,created:new Date().toISOString(),version:"2.0"},sources:d},_=await(await wn.getFileHandle(`${i}_sources.json`,{create:!0})).createWritable();await _.write(JSON.stringify(h,null,2)),await _.close(),console.log("[PROJECT] Progetto salvato:",i),alert(`Progetto "${i}" salvato con successo!`)}catch(i){console.error("[PROJECT] Errore nel salvataggio:",i),alert("Errore nel salvataggio del progetto: "+i.message)}}async function rM(){try{wn=await window.showDirectoryPicker({mode:"readwrite"}),En=wn.name,xu(),console.log("[PROJECT] Nuovo progetto creato (Save As):",En);const i=En,e={metadata:{name:i,created:new Date().toISOString(),version:"2.0"},settings:cp()},n=await(await wn.getFileHandle(`${i}_settings.json`,{create:!0})).createWritable();await n.write(JSON.stringify(e,null,2)),await n.close();const s=ki("Altoparlante"),o={metadata:{name:`${i} - Speakers`,created:new Date().toISOString(),version:"2.0"},speakers:s},a=await(await wn.getFileHandle(`${i}_speakers.json`,{create:!0})).createWritable();await a.write(JSON.stringify(o,null,2)),await a.close();const l=ki("Omnifonte"),c=ki("Orifonte"),u=ki("Zona"),d={...l,...c,...u},h={metadata:{name:`${i} - Sources`,created:new Date().toISOString(),version:"2.0"},sources:d},_=await(await wn.getFileHandle(`${i}_sources.json`,{create:!0})).createWritable();await _.write(JSON.stringify(h,null,2)),await _.close(),console.log("[PROJECT] Progetto salvato come:",i),alert(`Progetto "${i}" salvato come nuovo progetto!`)}catch(i){console.error("[PROJECT] Errore nel salvataggio:",i),alert("Errore nel salvataggio del progetto: "+i.message)}}async function aM(){try{const i=await window.showDirectoryPicker({mode:"read"});wn=i,En=i.name,xu();const e=En;console.log("[PROJECT] Caricamento progetto:",e);try{const s=await(await(await i.getFileHandle(`${e}_settings.json`)).getFile()).text(),o=JSON.parse(s);o.settings&&lM(o.settings),console.log("[PROJECT] Settings caricati")}catch(t){console.warn("[PROJECT] File settings non trovato o errore:",t)}try{const s=await(await(await i.getFileHandle(`${e}_speakers.json`)).getFile()).text(),o=JSON.parse(s),{loadSpeakersFromData:r}=await ys(async()=>{const{loadSpeakersFromData:a}=await Promise.resolve().then(()=>Oh);return{loadSpeakersFromData:a}},void 0);await r(o),console.log("[PROJECT] Speakers caricati")}catch(t){console.warn("[PROJECT] File speakers non trovato o errore:",t)}try{const s=await(await(await i.getFileHandle(`${e}_sources.json`)).getFile()).text(),o=JSON.parse(s),{loadSourcesFromData:r}=await ys(async()=>{const{loadSourcesFromData:a}=await Promise.resolve().then(()=>Oh);return{loadSourcesFromData:a}},void 0);await r(o),console.log("[PROJECT] Sources caricati")}catch(t){console.warn("[PROJECT] File sources non trovato o errore:",t)}alert(`Progetto "${e}" caricato con successo!`)}catch(i){console.error("[PROJECT] Errore nel caricamento:",i),alert("Errore nel caricamento del progetto: "+i.message)}}function lM(i){if(i){if(i.osc){const e=document.getElementById("oscHost"),t=document.getElementById("oscPort");e&&(e.value=i.osc.host),t&&(t.value=i.osc.port),e&&e.dispatchEvent(new Event("change")),t&&t.dispatchEvent(new Event("change"))}if(i.plastico){const e=document.getElementById("plasticoToggle"),t=document.getElementById("plasticoThreshold");e&&(e.checked=i.plastico.visible,e.dispatchEvent(new Event("change"))),t&&i.plastico.threshold!==void 0&&(t.value=i.plastico.threshold,t.dispatchEvent(new Event("input")))}}}function up(){return wn}function dp(){return En}typeof window<"u"&&window.addEventListener("DOMContentLoaded",()=>{const i=document.getElementById("saveProjectBtn");i&&i.addEventListener("click",()=>{oM()});const e=document.getElementById("saveProjectAsBtn");e&&e.addEventListener("click",()=>{rM()});const t=document.getElementById("loadProjectBtn");t&&t.addEventListener("click",()=>{aM()})});sM();function va(i){const e={};return qe.filter(t=>t.name&&t.name.startsWith(i)).forEach(t=>{const n=t.parent&&t.parent.type==="Group"?t.parent:t,s=t.name.replace(/\s+/g,"_");e[s]={position:{x:n.position.x,y:n.position.z,z:n.position.y},rotation:{x:n.rotation.x,y:n.rotation.z,z:n.rotation.y},scale:{x:n.scale.x,y:n.scale.z,z:n.scale.y},tags:t.userData.tags||[],menuState:t.userData.menuState||{}}}),e}async function Lh(){const i=va("Altoparlante"),e={metadata:{name:"Speakers Preset",created:new Date().toISOString(),version:"2.0"},speakers:i},t=new Blob([JSON.stringify(e,null,2)],{type:"application/json"}),n=up(),s=dp();let o="speakers_preset.json";s&&(o=`${s}_speakers.json`);const r={suggestedName:o,types:[{description:"Preset Altoparlanti",accept:{"application/json":[".json"]}}]};n&&(r.startIn=n);const l=await(await window.showSaveFilePicker(r)).createWritable();await l.write(t),await l.close(),console.log("[PRESET] Speakers preset salvato")}async function Ih(){const i={},e=va("Omnifonte");Object.assign(i,e);const t=va("Orifonte");Object.assign(i,t);const n=va("Zona");Object.assign(i,n);const s={metadata:{name:"Sources Preset",created:new Date().toISOString(),version:"2.0"},sources:i},o=new Blob([JSON.stringify(s,null,2)],{type:"application/json"}),r=up(),a=dp();let l="sources_preset.json";a&&(l=`${a}_sources.json`);const c={suggestedName:l,types:[{description:"Preset Fonti/Zona",accept:{"application/json":[".json"]}}]};r&&(c.startIn=r);const d=await(await window.showSaveFilePicker(c)).createWritable();await d.write(o),await d.close(),console.log("[PRESET] Sources preset salvato")}typeof window<"u"&&(window.addEventListener("DOMContentLoaded",()=>{const i=document.getElementById("saveSpeakersPresetBtn");i&&i.addEventListener("click",()=>{Lh()});const e=document.getElementById("saveSourcesPresetBtn");e&&e.addEventListener("click",()=>{Ih()})}),window.addEventListener("keydown",async i=>{if((i.ctrlKey||i.metaKey)&&i.key==="s"){i.preventDefault();try{await Lh(),await Ih(),alert("Preset salvati con successo!")}catch(e){alert("Errore nel salvataggio preset: "+e)}}}));function xa(i,e,t=!0){if(!window.messageBroker)return;const n=i.name.match(/(\d+)$/),s=n?parseInt(n[1],10):1;if(t&&(window.messageBroker.sendObjectCreated({id:i.userData.id,name:i.name,type:e,position:{x:i.position.x,y:i.position.y,z:i.position.z},rotation:{x:i.rotation.x,y:i.rotation.y,z:i.rotation.z},scale:{x:i.scale.x,y:i.scale.y,z:i.scale.z},tags:i.userData.tags||[0]}),window.messageBroker.sendObjectTags({name:i.name,type:e,tags:i.userData.tags||[0]})),i.userData.menuState)for(const o in i.userData.menuState)window.messageBroker.sendCustomParameter({type:e,index:s,paramName:o,value:i.userData.menuState[o]});console.log(`[PRESET] Inviati messaggi OSC per ${i.name}:`,{sentCreatedAndTags:t,tags:i.userData.tags,menuParams:Object.keys(i.userData.menuState||{})})}function Hi(i){for(let e=qe.length-1;e>=0;e--){const t=qe[e];t.name&&t.name.startsWith(i)&&(t.parent&&t.parent.remove(t),qe.splice(e,1))}te.children.forEach(e=>{e.name&&e.name.startsWith(i)&&te.remove(e)}),messageBroker.sendObjectCounts()}async function Oa(){const[i]=await window.showOpenFilePicker({types:[{description:"Preset Altoparlanti",accept:{"application/json":[".json"]}}]}),t=await(await i.getFile()).text();let n;try{n=JSON.parse(t)}catch{alert("File preset non valido");return}await hp(n)}async function hp(i){Hi("Altoparlante");const t=i.metadata||i.settings||i.speakers?i.speakers:i,n=Object.entries(t);for(let s=0;s<n.length;s++){const[o,r]=n[s],a=o.replace(/_/g," "),l={x:r.position.x,y:r.position.z,z:r.position.y},c=r.rotation?{x:r.rotation.x,y:r.rotation.z,z:r.rotation.y}:null,u=hn();Wn("./modelli/galleriaOBJ/speaker3dec.obj",a,pi,.045,l.x,l.z,l.y,c,u),await new Promise(d=>{const h=setInterval(()=>{const _=qe.find(g=>g.name===a);_&&(clearInterval(h),clearTimeout(f),r.tags&&(_.userData.tags=r.tags),r.menuState&&(_.userData.menuState=r.menuState),console.log("[PRESET LOADER] Altoparlante caricato:",a,{tags:_.userData.tags,menuState:_.userData.menuState}),Jo(_),xa(_,"altoparlante",!1),d())},50),f=setTimeout(()=>{clearInterval(h),console.warn("[PRESET LOADER] Timeout caricamento per:",a),d()},3e3)})}wt(),setTimeout(()=>tt("altoparlanti"),50),setTimeout(()=>{window.messageBroker&&window.messageBroker.sendObjectCounts&&window.messageBroker.sendObjectCounts()},100)}async function Na(){const[i]=await window.showOpenFilePicker({types:[{description:"Preset Fonti/Zona",accept:{"application/json":[".json"]}}]}),t=await(await i.getFile()).text();let n;try{n=JSON.parse(t)}catch{alert("File preset non valido");return}await fp(n)}async function fp(i){Hi("Omnifonte"),Hi("Orifonte"),Hi("Zona");const t=i.metadata||i.settings||i.sources?i.sources:i,n=[Ta,Aa,Ca,Ra];let s=0;for(const[o,r]of Object.entries(t)){const a=o.replace(/_/g," "),l={x:r.position.x,y:r.position.z,z:r.position.y},c=r.rotation?{x:r.rotation.x,y:r.rotation.z,z:r.rotation.y}:null;if(o.startsWith("Omnifonte")){const u=hn(),d=new xs(.3,40,40),h=new oe(d,jn);if(h.scale.set(.25,.24,.25),h.name=a,h.isDashed=!1,h.position.set(l.x,l.y,l.z),c&&h.rotation.set(c.x,c.y,c.z),h.userData.id=u,r.tags&&(h.userData.tags=r.tags),r.menuState&&(h.userData.menuState=r.menuState),te.add(h),qe.push(h),setTimeout(()=>{Jo(h),xa(h,"omnifonte")},100),window.max&&window.max.outlet){h.updateMatrixWorld(!0);const f=new A;h.getWorldPosition(f);let _=1;const g=h.name.match(/^(.*?)[\s_-]?(\d+)$/);g&&(_=parseInt(g[2],10));const m=f.x,p=f.z,y=f.y,w=Math.sqrt(m*m+p*p);let v=Math.atan2(p,m)*(180/Math.PI)-90;v<0&&(v+=360),window.max.outlet("Omnifonte",_,m,p,y,v,w)}}else if(o.startsWith("Orifonte")){const u=hn();Wn("./modelli/galleriaOBJ/arrow.obj",a,jn,.045,l.x,l.z,l.y,c,u),setTimeout(()=>{const d=te.children.find(h=>h.name===a)||qe.find(h=>h.name===a);if(d&&(r.tags&&(d.userData.tags=r.tags),r.menuState&&(d.userData.menuState=r.menuState),Jo(d),xa(d,"orifonte",!1),window.max&&window.max.outlet)){d.updateMatrixWorld(!0);const h=new A;d.getWorldPosition(h);let f=1;const _=d.name.match(/^(.*?)[\s_-]?(\d+)$/);_&&(f=parseInt(_[2],10));const g=h.x,m=h.z,p=h.y,y=Math.sqrt(g*g+m*m);let w=Math.atan2(m,g)*(180/Math.PI)-90;w<0&&(w+=360),window.max.outlet("Omnifonte",f,g,m,p,w,y)}},100)}else if(o.startsWith("Zona")){const u=hn(),d=s%n.length,h=n[d];s++;const f=new Mn;f.name=a;let _=new Et(3.2,1.8,3.2);const g=new ou(_),{LineSegmentsGeometry:m}=await ys(async()=>{const{LineSegmentsGeometry:E}=await Promise.resolve().then(()=>aw);return{LineSegmentsGeometry:E}},void 0),{LineSegments2:p}=await ys(async()=>{const{LineSegments2:E}=await Promise.resolve().then(()=>uw);return{LineSegments2:E}},void 0),y=new m().fromEdgesGeometry(g),w=new p(y,h);w.computeLineDistances(),w.name=a,w.isDashed=!0,w.userData.id=u,r.tags&&(w.userData.tags=r.tags),r.menuState&&(w.userData.menuState=r.menuState);const v=new So({color:new se(15883520),transparent:!0,depthTest:!0,wireframe:!1,opacity:0,visible:!0}),b=new oe(_,v);b.name=a,f.add(b),f.add(w),f.position.set(l.x,l.y,l.z),c&&f.rotation.set(c.x,c.y,c.z),te.add(f),qe.push(w),setTimeout(()=>{Jo(w),xa(w,"zona")},100)}}wt(),setTimeout(()=>tt("omnifonti"),50),setTimeout(()=>{window.messageBroker&&window.messageBroker.sendObjectCounts&&window.messageBroker.sendObjectCounts()},100)}function pp(){Hi("Altoparlante"),Hi("Omnifonte"),Hi("Orifonte"),Hi("Zona"),wt(),setTimeout(()=>tt(["altoparlanti","omnifonti"]),50),setTimeout(()=>messageBroker.sendObjectCounts(),100)}typeof window<"u"&&window.addEventListener("DOMContentLoaded",()=>{const i=document.getElementById("loadSpeakersPresetBtn");i&&i.addEventListener("click",()=>{Oa()});const e=document.getElementById("loadSourcesPresetBtn");e&&e.addEventListener("click",()=>{Na()});const t=document.getElementById("resetSceneBtn");t&&t.addEventListener("click",()=>{confirm("Vuoi davvero cancellare tutti gli altoparlanti, fonti e zone dalla scena?")&&pp()})});const Oh=Object.freeze(Object.defineProperty({__proto__:null,loadSourcesFromData:fp,loadSourcesPreset:Na,loadSpeakersFromData:hp,loadSpeakersPreset:Oa,resetScene:pp},Symbol.toStringTag,{value:"Module"})),ko=new A,Ho=new A,ns=new A,is=new A,ss=new A,oa=new mn,ra=new mn,Nh=new A,Uh=new A;class cM extends xt{constructor(e){super();const t={},n=e.attributes.position;let s;if(e.index)s=e.index;else{const c=new Array(n.count/3).fill().map((u,d)=>d);s=new At(new Uint32Array(c),1,!1)}for(let c=0,u=s.count;c<u;c+=3){const d=[s.getX(c+0),s.getX(c+1),s.getX(c+2)];for(let h=0;h<3;h++){const f=d[h],_=d[(h+1)%3],g=`${f}_${_}`,m=`${_}_${f}`;m in t?(t[m].controlIndex1=d[(h+2)%3],t[m].tri1=c/3):t[g]={index0:f,index1:_,controlIndex0:d[(h+2)%3],controlIndex1:null,tri0:c/3,tri1:null}}}const o=[],r=[],a=[],l=[];for(const c in t){const{index0:u,index1:d,controlIndex0:h,controlIndex1:f,tri0:_,tri1:g}=t[c];f!==null&&(oa.a.fromBufferAttribute(n,s.getX(_*3+0)),oa.b.fromBufferAttribute(n,s.getX(_*3+1)),oa.c.fromBufferAttribute(n,s.getX(_*3+2)),ra.a.fromBufferAttribute(n,s.getX(g*3+0)),ra.b.fromBufferAttribute(n,s.getX(g*3+1)),ra.c.fromBufferAttribute(n,s.getX(g*3+2)),oa.getNormal(Nh).normalize(),ra.getNormal(Uh).normalize(),!(Nh.dot(Uh)<.01)&&(ko.fromBufferAttribute(n,u),Ho.fromBufferAttribute(n,d),ns.subVectors(ko,Ho),is.fromBufferAttribute(n,h),ss.fromBufferAttribute(n,f),o.push(ko.x,ko.y,ko.z),r.push(ns.x,ns.y,ns.z),a.push(is.x,is.y,is.z),l.push(ss.x,ss.y,ss.z),o.push(Ho.x,Ho.y,Ho.z),r.push(ns.x,ns.y,ns.z),a.push(is.x,is.y,is.z),l.push(ss.x,ss.y,ss.z)))}this.setAttribute("position",new At(new Float32Array(o),3,!1)),this.setAttribute("direction",new At(new Float32Array(r),3,!1)),this.setAttribute("control0",new At(new Float32Array(a),3,!1)),this.setAttribute("control1",new At(new Float32Array(l),3,!1))}}class uM extends To{fromConditionalEdgesGeometry(e){super.fromEdgesGeometry(e);const{direction:t,control0:n,control1:s}=e.attributes;return this.setAttribute("direction",new In(new to(t.array,6,1),3,0)),this.setAttribute("control0",new In(new to(n.array,6,1),3,0)),this.setAttribute("control1",new In(new to(s.array,6,1),3,0)),this}}const dM={linewidth:{value:1},resolution:{value:new me(1,1)},dashScale:{value:1},dashSize:{value:1},gapSize:{value:1},opacity:{value:1}},kl={uniforms:Ss.merge([re.common,re.fog,dM]),vertexShader:`
		#include <common>
		#include <color_pars_vertex>
		#include <fog_pars_vertex>
		#include <logdepthbuf_pars_vertex>
		#include <clipping_planes_pars_vertex>

		uniform float linewidth;
		uniform vec2 resolution;

		attribute vec3 control0;
		attribute vec3 control1;
		attribute vec3 direction;

		attribute vec3 instanceStart;
		attribute vec3 instanceEnd;

		attribute vec3 instanceColorStart;
		attribute vec3 instanceColorEnd;

		varying vec2 vUv;

		#ifdef USE_DASH

			uniform float dashScale;
			attribute float instanceDistanceStart;
			attribute float instanceDistanceEnd;
			varying float vLineDistance;

		#endif

		void trimSegment( const in vec4 start, inout vec4 end ) {

			// trim end segment so it terminates between the camera plane and the near plane

			// conservative estimate of the near plane
			float a = projectionMatrix[ 2 ][ 2 ]; // 3nd entry in 3th column
			float b = projectionMatrix[ 3 ][ 2 ]; // 3nd entry in 4th column
			float nearEstimate = - 0.5 * b / a;

			float alpha = ( nearEstimate - start.z ) / ( end.z - start.z );

			end.xyz = mix( start.xyz, end.xyz, alpha );

		}

		void main() {

			#ifdef USE_COLOR

				vColor.xyz = ( position.y < 0.5 ) ? instanceColorStart : instanceColorEnd;

			#endif

			#ifdef USE_DASH

				vLineDistance = ( position.y < 0.5 ) ? dashScale * instanceDistanceStart : dashScale * instanceDistanceEnd;

			#endif

			float aspect = resolution.x / resolution.y;

			vUv = uv;

			// camera space
			vec4 start = modelViewMatrix * vec4( instanceStart, 1.0 );
			vec4 end = modelViewMatrix * vec4( instanceEnd, 1.0 );

			// special case for perspective projection, and segments that terminate either in, or behind, the camera plane
			// clearly the gpu firmware has a way of addressing this issue when projecting into ndc space
			// but we need to perform ndc-space calculations in the shader, so we must address this issue directly
			// perhaps there is a more elegant solution -- WestLangley

			bool perspective = ( projectionMatrix[ 2 ][ 3 ] == - 1.0 ); // 4th entry in the 3rd column

			if ( perspective ) {

				if ( start.z < 0.0 && end.z >= 0.0 ) {

					trimSegment( start, end );

				} else if ( end.z < 0.0 && start.z >= 0.0 ) {

					trimSegment( end, start );

				}

			}

			// clip space
			vec4 clipStart = projectionMatrix * start;
			vec4 clipEnd = projectionMatrix * end;

			// ndc space
			vec2 ndcStart = clipStart.xy / clipStart.w;
			vec2 ndcEnd = clipEnd.xy / clipEnd.w;

			// direction
			vec2 dir = ndcEnd - ndcStart;

			// account for clip-space aspect ratio
			dir.x *= aspect;
			dir = normalize( dir );

			// perpendicular to dir
			vec2 offset = vec2( dir.y, - dir.x );

			// undo aspect ratio adjustment
			dir.x /= aspect;
			offset.x /= aspect;

			// sign flip
			if ( position.x < 0.0 ) offset *= - 1.0;

			// endcaps
			if ( position.y < 0.0 ) {

				offset += - dir;

			} else if ( position.y > 1.0 ) {

				offset += dir;

			}

			// adjust for linewidth
			offset *= linewidth;

			// adjust for clip-space to screen-space conversion // maybe resolution should be based on viewport ...
			offset /= resolution.y;

			// select end
			vec4 clip = ( position.y < 0.5 ) ? clipStart : clipEnd;

			// back to clip space
			offset *= clip.w;

			clip.xy += offset;

			gl_Position = clip;

			vec4 mvPosition = ( position.y < 0.5 ) ? start : end; // this is an approximation

			#include <logdepthbuf_vertex>
			#include <clipping_planes_vertex>
			#include <fog_vertex>

			// conditional logic
			// Transform the line segment ends and control points into camera clip space
			vec4 c0 = projectionMatrix * modelViewMatrix * vec4( control0, 1.0 );
			vec4 c1 = projectionMatrix * modelViewMatrix * vec4( control1, 1.0 );
			vec4 p0 = projectionMatrix * modelViewMatrix * vec4( instanceStart, 1.0 );
			vec4 p1 = projectionMatrix * modelViewMatrix * vec4( instanceStart + direction, 1.0 );

			c0 /= c0.w;
			c1 /= c1.w;
			p0 /= p0.w;
			p1 /= p1.w;

			// Get the direction of the segment and an orthogonal vector
			vec2 segDir = p1.xy - p0.xy;
			vec2 norm = vec2( - segDir.y, segDir.x );

			// Get control point directions from the line
			vec2 c0dir = c0.xy - p1.xy;
			vec2 c1dir = c1.xy - p1.xy;

			// If the vectors to the controls points are pointed in different directions away
			// from the line segment then the line should not be drawn.
			float d0 = dot( normalize( norm ), normalize( c0dir ) );
			float d1 = dot( normalize( norm ), normalize( c1dir ) );
			float discardFlag = float( sign( d0 ) != sign( d1 ) );
			gl_Position = discardFlag > 0.5 ? c0 : gl_Position;
			// end conditional line logic

		}
		`,fragmentShader:`
		uniform vec3 diffuse;
		uniform float opacity;

		#ifdef USE_DASH

			uniform float dashSize;
			uniform float gapSize;

		#endif

		varying float vLineDistance;

		#include <common>
		#include <color_pars_fragment>
		#include <fog_pars_fragment>
		#include <logdepthbuf_pars_fragment>
		#include <clipping_planes_pars_fragment>

		varying vec2 vUv;

		void main() {

			#include <clipping_planes_fragment>

			#ifdef USE_DASH

				if ( vUv.y < - 1.0 || vUv.y > 1.0 ) discard; // discard endcaps

				if ( mod( vLineDistance, dashSize + gapSize ) > dashSize ) discard; // todo - FIX

			#endif

			if ( abs( vUv.y ) > 1.0 ) {

				float a = vUv.x;
				float b = ( vUv.y > 0.0 ) ? vUv.y - 1.0 : vUv.y + 1.0;
				float len2 = a * a + b * b;

				if ( len2 > 1.0 ) discard;

			}

			vec4 diffuseColor = vec4( diffuse, opacity );

			#include <logdepthbuf_fragment>
			#include <color_fragment>

			gl_FragColor = vec4( diffuseColor.rgb, diffuseColor.a );

			#include <tonemapping_fragment>
			#include <colorspace_fragment>
			#include <fog_fragment>
			#include <premultiplied_alpha_fragment>

		}
		`};class mp extends bt{constructor(e){super({type:"ConditionalLineMaterial",uniforms:Ss.clone(kl.uniforms),vertexShader:kl.vertexShader,fragmentShader:kl.fragmentShader,clipping:!0}),this.dashed=!1,Object.defineProperties(this,{color:{enumerable:!0,get:function(){return this.uniforms.diffuse.value},set:function(t){this.uniforms.diffuse.value=t}},linewidth:{enumerable:!0,get:function(){return this.uniforms.linewidth.value},set:function(t){this.uniforms.linewidth.value=t}},dashScale:{enumerable:!0,get:function(){return this.uniforms.dashScale.value},set:function(t){this.uniforms.dashScale.value=t}},dashSize:{enumerable:!0,get:function(){return this.uniforms.dashSize.value},set:function(t){this.uniforms.dashSize.value=t}},gapSize:{enumerable:!0,get:function(){return this.uniforms.gapSize.value},set:function(t){this.uniforms.gapSize.value=t}},opacity:{enumerable:!0,get:function(){return this.uniforms.opacity.value},set:function(t){this.uniforms.opacity.value=t}},resolution:{enumerable:!0,get:function(){return this.uniforms.resolution.value},set:function(t){this.uniforms.resolution.value.copy(t)}}}),this.setValues(e)}}mp.prototype.isConditionalLineMaterial=!0;class hM{constructor(e,t){this.scene=e,this.renderer=t,this.params={threshold:40,thickness:2,opacity:.5,materialColor:16777215,lineColor:0},this.managedModels=new Map}applyConditionalLines(e,t={}){const n={...this.params,...t},s=this.mergeObject(e),o=this.createBackgroundModel(s,n),r=this.createEdgesModel(s,n),a=this.createConditionalModel(s,n);this.scene.add(o),this.scene.add(r),this.scene.add(a);const l={originalModel:s,backgroundModel:o,edgesModel:r,conditionalModel:a,setOpacity:u=>this.setOpacity(o,u),setThreshold:u=>{const d=this.updateThreshold(s,l.edgesModel,u,n);return l.edgesModel=d,d},setThickness:u=>this.setThickness([l.edgesModel,a],u),setMaterialColor:u=>this.setMaterialColor(o,u),setLineColor:u=>this.setLineColor([l.edgesModel,a],u),dispose:()=>this.disposeModel(o,r,a)},c=Date.now()+Math.random();return this.managedModels.set(c,l),l.id=c,l}mergeObject(e){e.updateMatrixWorld(!0);const t=[];e.traverse(r=>{if(r.isMesh){const a=r.geometry.clone();a.applyMatrix4(r.matrixWorld);for(const l in a.attributes)l!=="position"&&l!=="normal"&&a.deleteAttribute(l);t.push(a.toNonIndexed())}});let n;try{n=Jw(t,!1)}catch(r){try{n=(void 0)(t,!1)}catch(a){console.error("Both mergeGeometries and mergeBufferGeometries failed:",r,a),n=t[0]}}try{na&&(n=na(n))}catch(r){console.warn("mergeVertices failed:",r)}const s=new Mn,o=new oe(n);return s.add(o),s}createBackgroundModel(e,t){console.log("createBackgroundModel called with config.materialColor:",t.materialColor);const n=e.clone();return n.traverse(s=>{if(s.isMesh){const o=new se(.8392156862745098,.8392156862745098,.8392156862745098);s.material=new ti({color:o,transparent:!1,opacity:1}),s.material.polygonOffset=!0,s.material.polygonOffsetFactor=1,s.material.polygonOffsetUnits=1,s.renderOrder=2,console.log("Material color created:",o),console.log("Material hex:",o.getHex().toString(16))}}),n}createEdgesModel(e,t){const n=e.clone(),s=[];n.traverse(o=>{o.isMesh&&s.push(o)});for(const o of s){const r=o.parent,a=new ou(o.geometry,t.threshold),l=new To().fromEdgesGeometry(a),c=new rr(l,new Si({color:t.lineColor,linewidth:t.thickness}));c.position.copy(o.position),c.scale.copy(o.scale),c.rotation.copy(o.rotation),r.remove(o),r.add(c)}return n}createConditionalModel(e,t){const n=e.clone(),s=[];n.traverse(o=>{o.isMesh&&s.push(o)});for(const o of s){const r=o.parent,a=o.geometry.clone();for(const h in a.attributes)h!=="position"&&a.deleteAttribute(h);let l=a;try{na&&(l=na(a))}catch(h){console.warn("mergeVertices failed for conditional model:",h),l=a}const c=new cM(l),u=new uM().fromConditionalEdgesGeometry(c),d=new rr(u,new mp({color:t.lineColor,linewidth:t.thickness}));d.position.copy(o.position),d.scale.copy(o.scale),d.rotation.copy(o.rotation),r.remove(o),r.add(d)}return n}setOpacity(e,t){e.traverse(n=>{n.isMesh&&n.material&&(n.material.transparent=t<1,n.material.opacity=t,n.material.needsUpdate=!0)})}setThickness(e,t){e.forEach(n=>{n.traverse(s=>{s.material&&s.material.linewidth!==void 0&&(s.material.linewidth=t,s.material.needsUpdate=!0)})})}setMaterialColor(e,t){console.log(`setMaterialColor called with color: 0x${t.toString(16)}`);const n=new se(214/255,214/255,214/255);e.traverse(s=>{s.isMesh&&s.material&&(console.log(`Setting material color for mesh: ${s.name||"unnamed"}`,s.material),s.material.color.copy(n),console.log("Material color after set:",s.material.color),s.material.needsUpdate=!0,setTimeout(()=>{console.log("Material color after 1 second:",s.material.color)},1e3))})}setLineColor(e,t){e.forEach(n=>{n.traverse(s=>{s.material&&s.material.color&&s.material.color.setHex(t)})})}updateThreshold(e,t,n,s){this.scene.remove(t),t.traverse(a=>{a.material&&a.material.dispose(),a.geometry&&a.geometry.dispose()});const o={...s,threshold:n},r=this.createEdgesModel(e,o);return r.name=t.name,this.scene.add(r),r}disposeModel(e,t,n){[e,t,n].forEach(s=>{s&&(this.scene.remove(s),s.traverse(o=>{o.isMesh&&(o.geometry&&o.geometry.dispose(),o.material&&(Array.isArray(o.material)?o.material.forEach(r=>r.dispose()):o.material.dispose()))}))})}updateResolutions(){this.managedModels.forEach(e=>{[e.edgesModel,e.conditionalModel].forEach(t=>{t.traverse(n=>{n.material&&n.material.resolution&&(this.renderer.getSize(n.material.resolution),n.material.resolution.multiplyScalar(window.devicePixelRatio))})})})}disposeAll(){this.managedModels.forEach(e=>{e.dispose()}),this.managedModels.clear()}}let ya,Ut=null,en=null,fM=0;function hn(){return`obj_${Date.now()}_${++fM}`}function gp(){const i=new Ga,t="/Cielo/"+"modelli/galleriaGLTF/horsehead.glb";i.load(t,function(n){en=n.scene,en.name="POV Cursor",en.alwaysInDict=!0,en.scale.setScalar(.1),en.position.set(0,1.2,0),en.visible=!1,en.traverse(s=>{s.isMesh&&(s.material=pi)}),te.add(en),wt(),setTimeout(tt,50),console.log("POV Cursor model loaded and initialized")},function(n){console.log(`POV Cursor: ${Math.round(n.loaded/n.total*100)}% loaded`)},function(n){console.error("Error loading POV Cursor model:",n)})}function pM(){return ya}function Yo(i){const t=getComputedStyle(document.documentElement).getPropertyValue(i).trim();if(console.log(`getCSSColorAsHex: ${i} = "${t}"`),t==="black"||t==="#000000"||t==="rgb(0, 0, 0)")return console.log("  -> Returning black: 0x000000"),0;if(t==="white"||t==="#ffffff"||t==="rgb(255, 255, 255)")return console.log("  -> Returning white: 0xffffff"),16777215;if(t==="#d6d6d6"||t==="rgb(214, 214, 214)")return console.log("  -> Returning light gray: 0xd6d6d6"),14079702;if(t.startsWith("#")){const s=parseInt(t.slice(1),16);return console.log(`  -> Parsed hex: 0x${s.toString(16)} (decimal: ${s})`),s}const n=t.match(/rgb\((\d+),\s*(\d+),\s*(\d+)\)/);if(n){const s=parseInt(n[1]),o=parseInt(n[2]),r=parseInt(n[3]),a=s<<16|o<<8|r;return console.log(`  -> Parsed RGB(${s}, ${o}, ${r}): 0x${a.toString(16)}`),a}return i==="--fondale"?(console.log("  -> Fallback for --fondale: 0xd6d6d6"),14079702):i==="--testo"?(console.log("  -> Fallback for --testo: 0x000000"),0):(console.log("  -> Default fallback: 0x000000"),0)}document.addEventListener("DOMContentLoaded",()=>{ya=new hM(te,Xe),window.conditionalLinesManager=ya,window.currentPlasticoControl=null;const i=document.getElementById("addCone"),e=document.getElementById("addHalo"),t=document.getElementById("addSphere"),n=document.getElementById("addArrow"),s=document.getElementById("addCloudElement"),o=document.getElementById("loadGenericGltf"),r=document.getElementById("addPovCursor");let a=0;function l(){if(a>0)return a+1;let v=0;return te.children.forEach(b=>{b.name&&b.name.startsWith("Altoparlante ")&&v++}),a=v,v+1}let c=0;o&&o.addEventListener("click",()=>{c++;let v=`Modello custom ${c}`;NS("./modelli/galleriaGLTF/scultura.glb",v,.045,-3.5,-.7,.5),wt(),setTimeout(tt,50)}),i&&i.addEventListener("click",()=>{const b=`Altoparlante ${l()}`,E=hn();console.log("Creando altoparlante:",b,"con ID:",E),Wn("./modelli/galleriaOBJ/speaker3dec.obj",b,pi,.045,0,0,1.2,null,E),wt(),setTimeout(()=>tt("altoparlanti"),50)});let u=0;e&&e.addEventListener("click",()=>{u++;let v=`Aureola ${u}`;const b=hn();console.log("Creando aureola:",v,"con ID:",b),Wn("./modelli/galleriaOBJ/halo2_lowpoly.obj",v,pi,.15,0,0,1.2,null,b),wt(),setTimeout(tt,50)});let d=0;n&&n.addEventListener("click",()=>{d++;const v=`Orifonte ${d}`,b=hn();Wn("./modelli/galleriaOBJ/arrow.obj",v,jn,.045,0,0,1.2,null,b),wt(),setTimeout(tt,50),setTimeout(()=>{const E=te.children.find(C=>C.name===v);E&&window.max&&window.max.outlet&&g(E)},60)});let h=0;s&&s.addEventListener("click",()=>{h++;const v=`Nuvola:client ${h}`;Wn("./modelli/galleriaOBJ/cloudDec.obj",v,pi,.035,0,0,1.2),wt(),setTimeout(tt,50)}),t&&t.addEventListener("click",v=>{var x,P;let b=0;te.children.forEach(F=>{F.name&&F.name.startsWith("Omnifonte ")&&b++});let E=`Omnifonte ${b+1}`;const C=new xs(.3,40,40),D=jn,S=new oe(C,D);S.scale.set(.25,.24,.25),S.name=E,S.userData.id=hn(),S.userData.tags=[0],S.isDashed=!1,S.position.set(0,1.2,0),te.add(S),qe.push(S),(x=window.multiClientManager)!=null&&x.isMaster&&((P=window.multiClientManager)!=null&&P.isEnabled)&&window.multiClientManager.notifyObjectCreated(S.userData.id,"omnifonte",E,{x:0,y:1.2,z:0},{x:0,y:0,z:0},{x:.25,y:.24,z:.25},{},S.userData.tags||[0]),window.messageBroker.sendObjectCreated({id:S.userData.id,name:E,type:"omnifonte",position:{x:0,y:1.2,z:0},rotation:{x:0,y:0,z:0},scale:{x:.25,y:.24,z:.25},tags:S.userData.tags||[0]}),wt(),setTimeout(()=>{tt("omnifonti"),window.messageBroker&&window.messageBroker.sendObjectMenuState(E)},50),setTimeout(()=>{window.max&&window.max.outlet&&g(S)},60)}),r&&r.addEventListener("click",()=>{if(en){en.visible=!en.visible;const v=qe.indexOf(en);en.visible&&v===-1?qe.push(en):!en.visible&&v!==-1&&qe.splice(v,1),wt(),setTimeout(tt,50)}else gp()});let f=0;function _(v,b,E,C,D,S){const x=new Mn;x.name=`${b}`;let P;P=new Et(3.2,1.8,3.2);const F=new ou(P),O=new To().fromEdgesGeometry(F),k=new rr(O,E);k.computeLineDistances(),k.name=`${b}`,k.isDashed=!0;const L=new So({color:new se(15883520),transparent:!0,depthTest:!0,wireframe:!1,opacity:0,visible:!0}),N=new oe(P,L);N.name=`${b}`,x.add(N),x.add(k),x.position.set(C,S,D),te.add(x),qe.push(k),wt()}window.addSphereAtPosition=function(v,b,E,C=null,D=null){var k,L;let S,x;if(D&&C)S=D,x=C,console.log("addSphereAtPosition:",S,"ID:",x,"pos:",v,b,E,"(from master)");else{let N=0;te.children.forEach(V=>{V.name&&V.name.startsWith("Omnifonte ")&&N++}),S=`Omnifonte ${N+1}`,x=hn(),console.log("addSphereAtPosition:",S,"ID:",x,"pos:",v,b,E,"(generated)")}const P=new xs(.3,40,40),F=jn,O=new oe(P,F);O.scale.set(.25,.24,.25),O.name=S,O.userData.id=x,O.userData.tags=[0],O.isDashed=!1,O.position.set(v,E,b),te.add(O),qe.push(O),(k=window.multiClientManager)!=null&&k.isMaster&&((L=window.multiClientManager)!=null&&L.isEnabled)&&window.multiClientManager.notifyObjectCreated(O.userData.id,"omnifonte",S,{x:v,y:E,z:b},{x:0,y:0,z:0},{x:.25,y:.24,z:.25}),window.messageBroker.sendObjectCreated({id:O.userData.id,name:S,type:"omnifonte",position:{x:v,y:b,z:E},rotation:{x:0,y:0,z:0},scale:{x:.25,y:.24,z:.25},tags:O.userData.tags||[0]}),wt(),setTimeout(()=>{tt("omnifonti"),window.messageBroker&&window.messageBroker.sendObjectMenuState(S)},50),setTimeout(()=>{window.max&&window.max.outlet&&g(O)},60)},window.addSpeakerAtPosition=function(v,b,E,C=null,D=null){const S=D&&parseInt(D.split(" ")[1])||l(),x=D||`Altoparlante ${S}`,P=C||hn();D||(a=S),console.log("addSpeakerAtPosition:",x,"ID:",P,"pos:",v,b,E,C?"(from master)":"(generated)"),Wn("./modelli/galleriaOBJ/speaker3dec.obj",x,pi,.045,v,b,E,null,P),wt(),setTimeout(()=>{tt("altoparlanti"),window.messageBroker&&window.messageBroker.sendObjectMenuState(x)},50)},window.addArrowAtPosition=function(v,b,E,C=null,D=null){let S,x;if(D&&C)S=D,x=C,console.log("addArrowAtPosition:",S,"ID:",x,"pos:",v,b,E,"(from master)");else{if(typeof d>"u"){let P=0;te.children.forEach(F=>{F.name&&F.name.startsWith("Orifonte ")&&P++}),d=P}d++,S=`Orifonte ${d}`,x=hn(),console.log("addArrowAtPosition:",S,"ID:",x,"pos:",v,b,E,"(generated)")}Wn("./modelli/galleriaOBJ/arrow.obj",S,jn,.045,v,b,E,null,x),wt(),setTimeout(tt,50),setTimeout(()=>{const P=te.children.find(F=>F.name===S);P&&window.max&&window.max.outlet&&g(P)},60)},window.addHaloAtPosition=function(v,b,E){if(typeof u>"u"){let S=0;te.children.forEach(x=>{x.name&&x.name.startsWith("Aureola")&&S++}),u=S}u++;let C=`Aureola ${u}`;const D=hn();console.log("Creando aureola:",C,"con ID:",D),Wn("./modelli/galleriaOBJ/halo2_lowpoly.obj",C,pi,.15,v,b,E,null,D),wt(),setTimeout(tt,50)},window.addZoneAtPosition=function(v,b,E){if(typeof f>"u"){let P=0;te.children.forEach(F=>{F.name&&F.name.startsWith("Zona ")&&P++}),f=P}f++;const C=[Ta,Aa,Ca,Ra],D=(f-1)%C.length,S=C[D],x=`Zona ${f}`;_(!1,x,S,v,b,E),setTimeout(tt,50)};function g(v){if(!v||!v.name)return;const b=v.name.toLowerCase();if(!(b.includes("omnifonte")||b.includes("orifonte")))return;v.updateMatrixWorld(!0);const E=new A;v.getWorldPosition(E);let C=1;const D=v.name.match(/^(.*?)[\s_-]?(\d+)$/);D&&(C=parseInt(D[2],10));const S=E.x,x=E.z,P=E.y,F=Math.sqrt(S*S+x*x);let O=Math.atan2(x,S)*(180/Math.PI)-90;O<0&&(O+=360),window.max.outlet("Omnifonte",C,S,x,P,O,F)}function m(){var D,S,x,P;const v=te.getObjectByName("architettura");if(v){const F=qe.indexOf(v);F!==-1&&qe.splice(F,1),v.parent&&v.parent.remove(v),v.geometry&&((S=(D=v.geometry).dispose)==null||S.call(D)),v.material&&((P=(x=v.material).dispose)==null||P.call(x))}const b=te.getObjectByName("architettura-background");b&&te.remove(b);const E=te.getObjectByName("architettura-edges");E&&te.remove(E);const C=te.getObjectByName("architettura-conditional");C&&te.remove(C),Ut&&(Ut.dispose(),Ut=null)}const p=document.getElementById("loadPlastico");if(p){let v=function(x){const P=C?parseFloat(C.value):60,F=D?parseFloat(D.value):2,O=S?parseFloat(S.value):.8,k=Yo("--fondale"),L=Yo("--testo");try{console.log("About to call applyConditionalLines with colors:",{materialColor:k,lineColor:L}),Ut=ya.applyConditionalLines(x,{threshold:P,thickness:F,opacity:O,materialColor:k,lineColor:L}),console.log("applyConditionalLines returned:",Ut),window.currentPlasticoControl=Ut,console.log("Set window.currentPlasticoControl:",window.currentPlasticoControl),te.remove(x),te.add(Ut.backgroundModel),te.add(Ut.edgesModel),te.add(Ut.conditionalModel),Ut.backgroundModel.name="architettura-background",Ut.edgesModel.name="architettura-edges",Ut.conditionalModel.name="architettura-conditional"}catch(N){console.error("Error applying ConditionalLines:",N)}},b=function(){if(Ut){const x=C?parseFloat(C.value):60,P=D?parseFloat(D.value):2,F=S?parseFloat(S.value):.8;Ut.setThreshold(x),Ut.setThickness(P),Ut.setOpacity(F);const O=Yo("--fondale"),k=Yo("--testo");Ut.setMaterialColor(O),Ut.setLineColor(k)}};const E=document.createElement("input");E.type="file",E.accept=".glb,.gltf,.obj",E.style.display="none",document.body.appendChild(E);const C=document.getElementById("plasticoThreshold"),D=document.getElementById("plasticoThickness"),S=document.getElementById("plasticoOpacity");C&&C.addEventListener("input",b),D&&D.addEventListener("input",b),S&&S.addEventListener("input",b),p.addEventListener("click",()=>{m(),E.value="",E.click()}),E.addEventListener("change",async x=>{const P=x.target.files[0];if(!P)return;const F=P.name.split(".").pop().toLowerCase();if(F==="glb"||F==="gltf"){const{GLTFLoader:O}=await ys(async()=>{const{GLTFLoader:L}=await Promise.resolve().then(()=>IS);return{GLTFLoader:L}},void 0),k=new FileReader;k.onload=function(L){let N=new O,V=function(j){console.log("GLTF loaded:",j);const $=j.scene;$.name="architettura",console.log("Adding model to scene:",$),te.add($),console.log("About to apply conditional lines..."),v($),setTimeout(tt,50)},H=function(j){alert("Errore nel parsing del modello GLTF/GLB")};N.parse(L.target.result,"",V,H)},F==="glb"?k.readAsArrayBuffer(P):k.readAsText(P)}else if(F==="obj"){const{OBJLoader:O}=await ys(async()=>{const{OBJLoader:L}=await Promise.resolve().then(()=>gw);return{OBJLoader:L}},void 0),k=new FileReader;k.onload=function(L){const V=new O().parse(L.target.result);console.log("OBJ loaded:",V),V.name="architettura",console.log("Adding OBJ to scene:",V),te.add(V),console.log("About to apply conditional lines to OBJ..."),v(V),setTimeout(tt,50)},k.readAsText(P)}else alert("Formato non supportato. Usa .glb, .gltf o .obj")})}const y=document.getElementById("generaliMenu");if(y){const v=document.createElement("button");v.textContent="Carica Setup Altoparlanti",v.onclick=()=>Oa(),y.appendChild(v);const b=document.createElement("button");b.textContent="Carica Setup Fonti Sonore",b.onclick=()=>Na(),y.appendChild(b)}const w=document.getElementById("rightMenu");if(w){const v=document.createElement("button");v.textContent="Carica Setup Altoparlanti",v.className="menu-btn",v.onclick=()=>Oa(),w.appendChild(v);const b=document.createElement("button");b.textContent="Carica Setup Fonti Sonore",b.className="menu-btn",b.onclick=()=>Na(),w.appendChild(b)}});document.addEventListener("DOMContentLoaded",()=>{setTimeout(gp,1e3)});function _p(i,e){const t=`Aureola ${e}`,n=hn();return console.log(`[NUVOLA] Creando aureola per device ${i}: ${t} (ID: ${n})`),Wn("./modelli/galleriaOBJ/halo2_lowpoly.obj",t,pi,.15,0,0,1.2,null,n),wt(),setTimeout(tt,50),{id:n,name:t}}function vp(i){const e=te.children.find(t=>t.userData.id===i);return e?(console.log(`[NUVOLA] Rimuovendo aureola: ${e.name} (ID: ${i})`),te.remove(e),wt(),setTimeout(tt,50),!0):!1}const mM=Object.freeze(Object.defineProperty({__proto__:null,createNuvolaAureola:_p,generateUniqueId:hn,getCSSColorAsHex:Yo,getConditionalLinesManager:pM,removeNuvolaAureola:vp},Symbol.toStringTag,{value:"Module"})),gM=12e3,_M=15e3,vM=1e3,Xi=new Map,er=new Map,kc=[];let xM=1,Hl=null;function yM(){console.log("🎧 Nuvola Manager initialized"),Hl&&clearInterval(Hl),Hl=setInterval(()=>{yp(),wM()},vM),window.multiClientManager?(console.log("✓ multiClientManager trovato, registering callback"),window.multiClientManager.onNuvolaStatus=i=>{console.log("[NUVOLA] Device update ricevuto:",i.hostname,i.status),xp(i)}):console.warn("[NUVOLA] multiClientManager non trovato")}function xp(i){const e=Date.now(),t=i.hostname;if(Xi.set(t,{...i,lastSeen:e,timestamp:i.timestamp}),console.log(`[NUVOLA] Device aggiornato: ${t}, totale devices: ${Xi.size}`),!er.has(t)){const n=kc.length>0?kc.shift():xM++,s=_p(t,n);er.set(t,{...s,index:n}),console.log(`[NUVOLA] Aureola creata per ${t}: index ${n}`)}yp()}function wM(){const i=Date.now();Xi.forEach((e,t)=>{const n=i-e.lastSeen;if(n>_M&&er.has(t)){const s=er.get(t);console.log(`[NUVOLA] Device ${t} offline da ${Math.round(n/1e3)}s, eliminando aureola`),vp(s.id),kc.push(s.index),er.delete(t),Xi.delete(t)}})}function SM(i){return{online:"nuvola-status-online",booting:"nuvola-status-booting",stopped:"nuvola-status-stopped",offline:"nuvola-status-offline"}[i]||"nuvola-status-offline"}function yp(){const i=document.getElementById("nuvola-dashboard");if(!i)return;const e=Date.now();if(Xi.size===0){i.innerHTML=`
            <div class="nuvola-no-devices">
                Waiting for devices...
            </div>
        `;return}console.log(`[NUVOLA] Rendering ${Xi.size} devices`);let t="";Xi.forEach((n,s)=>{const o=e-n.lastSeen>gM,r=o?"offline":n.status,a=SM(r);t+=`
            <div class="nuvola-device-card ${o?"offline":""}">
                <div class="nuvola-device-header">
                    <div class="nuvola-device-name">${s}</div>
                    <div class="nuvola-status-badge ${a}">${r}</div>
                </div>
                <div class="nuvola-device-info">
                    <div class="nuvola-info-row">
                        <span class="nuvola-info-label">IP</span>
                        <span class="nuvola-info-value">${n.ip||"N/A"}</span>
                    </div>
                    <div class="nuvola-info-row">
                        <span class="nuvola-info-label">Temp</span>
                        <span class="nuvola-info-value">${n.temperature}</span>
                    </div>
                    ${n.battery!==void 0?`
                    <div class="nuvola-info-row">
                        <span class="nuvola-info-label">Battery</span>
                        <span class="nuvola-info-value" style="color: ${n.battery>20?"#48bb78":"#fc8181"}">${n.battery}%</span>
                    </div>
                    `:""}
                </div>
            </div>
        `}),i.innerHTML=t}window.nuvolaManager={getDevices:()=>Xi,updateDevice:xp};$w();Vf();yM();OS("./modelli/galleriaGLTF/GenericGallery.glb");FS();class Gi extends hr{constructor(e,t,n,s){super(),this.renderScene=t,this.renderCamera=n,this.selectedObjects=s!==void 0?s:[],this.visibleEdgeColor=new se(1,1,1),this.hiddenEdgeColor=new se(.1,.04,.02),this.edgeGlow=0,this.usePatternTexture=!1,this.edgeThickness=1,this.edgeStrength=3,this.downSampleRatio=2,this.pulsePeriod=0,this._visibilityCache=new Map,this._selectionCache=new Set,this.resolution=e!==void 0?new me(e.x,e.y):new me(256,256);const o=Math.round(this.resolution.x/this.downSampleRatio),r=Math.round(this.resolution.y/this.downSampleRatio);this.renderTargetMaskBuffer=new tn(this.resolution.x,this.resolution.y),this.renderTargetMaskBuffer.texture.name="OutlinePass.mask",this.renderTargetMaskBuffer.texture.generateMipmaps=!1,this.depthMaterial=new vf,this.depthMaterial.side=pn,this.depthMaterial.depthPacking=tf,this.depthMaterial.blending=$n,this.prepareMaskMaterial=this.getPrepareMaskMaterial(),this.prepareMaskMaterial.side=pn,this.prepareMaskMaterial.fragmentShader=u(this.prepareMaskMaterial.fragmentShader,this.renderCamera),this.renderTargetDepthBuffer=new tn(this.resolution.x,this.resolution.y,{type:Dn}),this.renderTargetDepthBuffer.texture.name="OutlinePass.depth",this.renderTargetDepthBuffer.texture.generateMipmaps=!1,this.renderTargetMaskDownSampleBuffer=new tn(o,r,{type:Dn}),this.renderTargetMaskDownSampleBuffer.texture.name="OutlinePass.depthDownSample",this.renderTargetMaskDownSampleBuffer.texture.generateMipmaps=!1,this.renderTargetBlurBuffer1=new tn(o,r,{type:Dn}),this.renderTargetBlurBuffer1.texture.name="OutlinePass.blur1",this.renderTargetBlurBuffer1.texture.generateMipmaps=!1,this.renderTargetBlurBuffer2=new tn(Math.round(o/2),Math.round(r/2),{type:Dn}),this.renderTargetBlurBuffer2.texture.name="OutlinePass.blur2",this.renderTargetBlurBuffer2.texture.generateMipmaps=!1,this.edgeDetectionMaterial=this.getEdgeDetectionMaterial(),this.renderTargetEdgeBuffer1=new tn(o,r,{type:Dn}),this.renderTargetEdgeBuffer1.texture.name="OutlinePass.edge1",this.renderTargetEdgeBuffer1.texture.generateMipmaps=!1,this.renderTargetEdgeBuffer2=new tn(Math.round(o/2),Math.round(r/2),{type:Dn}),this.renderTargetEdgeBuffer2.texture.name="OutlinePass.edge2",this.renderTargetEdgeBuffer2.texture.generateMipmaps=!1;const a=4,l=4;this.separableBlurMaterial1=this.getSeperableBlurMaterial(a),this.separableBlurMaterial1.uniforms.texSize.value.set(o,r),this.separableBlurMaterial1.uniforms.kernelRadius.value=1,this.separableBlurMaterial2=this.getSeperableBlurMaterial(l),this.separableBlurMaterial2.uniforms.texSize.value.set(Math.round(o/2),Math.round(r/2)),this.separableBlurMaterial2.uniforms.kernelRadius.value=l,this.overlayMaterial=this.getOverlayMaterial();const c=Ff;this.copyUniforms=Ss.clone(c.uniforms),this.materialCopy=new bt({uniforms:this.copyUniforms,vertexShader:c.vertexShader,fragmentShader:c.fragmentShader,blending:$n,depthTest:!1,depthWrite:!1}),this.enabled=!0,this.needsSwap=!1,this._oldClearColor=new se,this.oldClearAlpha=1,this.fsQuad=new Bf(null),this.tempPulseColor1=new se,this.tempPulseColor2=new se,this.textureMatrix=new De;function u(d,h){const f=h.isPerspectiveCamera?"perspective":"orthographic";return d.replace(/DEPTH_TO_VIEW_Z/g,f+"DepthToViewZ")}}dispose(){this.renderTargetMaskBuffer.dispose(),this.renderTargetDepthBuffer.dispose(),this.renderTargetMaskDownSampleBuffer.dispose(),this.renderTargetBlurBuffer1.dispose(),this.renderTargetBlurBuffer2.dispose(),this.renderTargetEdgeBuffer1.dispose(),this.renderTargetEdgeBuffer2.dispose(),this.depthMaterial.dispose(),this.prepareMaskMaterial.dispose(),this.edgeDetectionMaterial.dispose(),this.separableBlurMaterial1.dispose(),this.separableBlurMaterial2.dispose(),this.overlayMaterial.dispose(),this.materialCopy.dispose(),this.fsQuad.dispose()}setSize(e,t){this.renderTargetMaskBuffer.setSize(e,t),this.renderTargetDepthBuffer.setSize(e,t);let n=Math.round(e/this.downSampleRatio),s=Math.round(t/this.downSampleRatio);this.renderTargetMaskDownSampleBuffer.setSize(n,s),this.renderTargetBlurBuffer1.setSize(n,s),this.renderTargetEdgeBuffer1.setSize(n,s),this.separableBlurMaterial1.uniforms.texSize.value.set(n,s),n=Math.round(n/2),s=Math.round(s/2),this.renderTargetBlurBuffer2.setSize(n,s),this.renderTargetEdgeBuffer2.setSize(n,s),this.separableBlurMaterial2.uniforms.texSize.value.set(n,s)}updateSelectionCache(){const e=this._selectionCache;function t(n){n.isMesh&&e.add(n)}e.clear();for(let n=0;n<this.selectedObjects.length;n++)this.selectedObjects[n].traverse(t)}changeVisibilityOfSelectedObjects(e){const t=this._visibilityCache;for(const n of this._selectionCache)e===!0?n.visible=t.get(n):(t.set(n,n.visible),n.visible=e)}changeVisibilityOfNonSelectedObjects(e){const t=this._visibilityCache,n=this._selectionCache;function s(o){if(o.isMesh||o.isSprite){if(!n.has(o)){const r=o.visible;(e===!1||t.get(o)===!0)&&(o.visible=e),t.set(o,r)}}else(o.isPoints||o.isLine)&&(e===!0?o.visible=t.get(o):(t.set(o,o.visible),o.visible=e))}this.renderScene.traverse(s)}updateTextureMatrix(){this.textureMatrix.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),this.textureMatrix.multiply(this.renderCamera.projectionMatrix),this.textureMatrix.multiply(this.renderCamera.matrixWorldInverse)}render(e,t,n,s,o){if(this.selectedObjects.length>0){e.getClearColor(this._oldClearColor),this.oldClearAlpha=e.getClearAlpha();const r=e.autoClear;e.autoClear=!1,o&&e.state.buffers.stencil.setTest(!1),e.setClearColor(16777215,1),this.updateSelectionCache(),this.changeVisibilityOfSelectedObjects(!1);const a=this.renderScene.background;if(this.renderScene.background=null,this.renderScene.overrideMaterial=this.depthMaterial,e.setRenderTarget(this.renderTargetDepthBuffer),e.clear(),e.render(this.renderScene,this.renderCamera),this.changeVisibilityOfSelectedObjects(!0),this._visibilityCache.clear(),this.updateTextureMatrix(),this.changeVisibilityOfNonSelectedObjects(!1),this.renderScene.overrideMaterial=this.prepareMaskMaterial,this.prepareMaskMaterial.uniforms.cameraNearFar.value.set(this.renderCamera.near,this.renderCamera.far),this.prepareMaskMaterial.uniforms.depthTexture.value=this.renderTargetDepthBuffer.texture,this.prepareMaskMaterial.uniforms.textureMatrix.value=this.textureMatrix,e.setRenderTarget(this.renderTargetMaskBuffer),e.clear(),e.render(this.renderScene,this.renderCamera),this.renderScene.overrideMaterial=null,this.changeVisibilityOfNonSelectedObjects(!0),this._visibilityCache.clear(),this._selectionCache.clear(),this.renderScene.background=a,this.fsQuad.material=this.materialCopy,this.copyUniforms.tDiffuse.value=this.renderTargetMaskBuffer.texture,e.setRenderTarget(this.renderTargetMaskDownSampleBuffer),e.clear(),this.fsQuad.render(e),this.tempPulseColor1.copy(this.visibleEdgeColor),this.tempPulseColor2.copy(this.hiddenEdgeColor),this.pulsePeriod>0){const l=.625+Math.cos(performance.now()*.01/this.pulsePeriod)*.75/2;this.tempPulseColor1.multiplyScalar(l),this.tempPulseColor2.multiplyScalar(l)}this.fsQuad.material=this.edgeDetectionMaterial,this.edgeDetectionMaterial.uniforms.maskTexture.value=this.renderTargetMaskDownSampleBuffer.texture,this.edgeDetectionMaterial.uniforms.texSize.value.set(this.renderTargetMaskDownSampleBuffer.width,this.renderTargetMaskDownSampleBuffer.height),this.edgeDetectionMaterial.uniforms.visibleEdgeColor.value=this.tempPulseColor1,this.edgeDetectionMaterial.uniforms.hiddenEdgeColor.value=this.tempPulseColor2,e.setRenderTarget(this.renderTargetEdgeBuffer1),e.clear(),this.fsQuad.render(e),this.fsQuad.material=this.separableBlurMaterial1,this.separableBlurMaterial1.uniforms.colorTexture.value=this.renderTargetEdgeBuffer1.texture,this.separableBlurMaterial1.uniforms.direction.value=Gi.BlurDirectionX,this.separableBlurMaterial1.uniforms.kernelRadius.value=this.edgeThickness,e.setRenderTarget(this.renderTargetBlurBuffer1),e.clear(),this.fsQuad.render(e),this.separableBlurMaterial1.uniforms.colorTexture.value=this.renderTargetBlurBuffer1.texture,this.separableBlurMaterial1.uniforms.direction.value=Gi.BlurDirectionY,e.setRenderTarget(this.renderTargetEdgeBuffer1),e.clear(),this.fsQuad.render(e),this.fsQuad.material=this.separableBlurMaterial2,this.separableBlurMaterial2.uniforms.colorTexture.value=this.renderTargetEdgeBuffer1.texture,this.separableBlurMaterial2.uniforms.direction.value=Gi.BlurDirectionX,e.setRenderTarget(this.renderTargetBlurBuffer2),e.clear(),this.fsQuad.render(e),this.separableBlurMaterial2.uniforms.colorTexture.value=this.renderTargetBlurBuffer2.texture,this.separableBlurMaterial2.uniforms.direction.value=Gi.BlurDirectionY,e.setRenderTarget(this.renderTargetEdgeBuffer2),e.clear(),this.fsQuad.render(e),this.fsQuad.material=this.overlayMaterial,this.overlayMaterial.uniforms.maskTexture.value=this.renderTargetMaskBuffer.texture,this.overlayMaterial.uniforms.edgeTexture1.value=this.renderTargetEdgeBuffer1.texture,this.overlayMaterial.uniforms.edgeTexture2.value=this.renderTargetEdgeBuffer2.texture,this.overlayMaterial.uniforms.patternTexture.value=this.patternTexture,this.overlayMaterial.uniforms.edgeStrength.value=this.edgeStrength,this.overlayMaterial.uniforms.edgeGlow.value=this.edgeGlow,this.overlayMaterial.uniforms.usePatternTexture.value=this.usePatternTexture,o&&e.state.buffers.stencil.setTest(!0),e.setRenderTarget(n),this.fsQuad.render(e),e.setClearColor(this._oldClearColor,this.oldClearAlpha),e.autoClear=r}this.renderToScreen&&(this.fsQuad.material=this.materialCopy,this.copyUniforms.tDiffuse.value=n.texture,e.setRenderTarget(null),this.fsQuad.render(e))}getPrepareMaskMaterial(){return new bt({uniforms:{depthTexture:{value:null},cameraNearFar:{value:new me(.5,.5)},textureMatrix:{value:null}},vertexShader:`#include <morphtarget_pars_vertex>
				#include <skinning_pars_vertex>

				varying vec4 projTexCoord;
				varying vec4 vPosition;
				uniform mat4 textureMatrix;

				void main() {

					#include <skinbase_vertex>
					#include <begin_vertex>
					#include <morphtarget_vertex>
					#include <skinning_vertex>
					#include <project_vertex>

					vPosition = mvPosition;

					vec4 worldPosition = vec4( transformed, 1.0 );

					#ifdef USE_INSTANCING

						worldPosition = instanceMatrix * worldPosition;

					#endif

					worldPosition = modelMatrix * worldPosition;

					projTexCoord = textureMatrix * worldPosition;

				}`,fragmentShader:`#include <packing>
				varying vec4 vPosition;
				varying vec4 projTexCoord;
				uniform sampler2D depthTexture;
				uniform vec2 cameraNearFar;

				void main() {

					float depth = unpackRGBAToDepth(texture2DProj( depthTexture, projTexCoord ));
					float viewZ = - DEPTH_TO_VIEW_Z( depth, cameraNearFar.x, cameraNearFar.y );
					float depthTest = (-vPosition.z > viewZ) ? 1.0 : 0.0;
					gl_FragColor = vec4(0.0, depthTest, 1.0, 1.0);

				}`})}getEdgeDetectionMaterial(){return new bt({uniforms:{maskTexture:{value:null},texSize:{value:new me(.5,.5)},visibleEdgeColor:{value:new A(1,1,1)},hiddenEdgeColor:{value:new A(1,1,1)}},vertexShader:`varying vec2 vUv;

				void main() {
					vUv = uv;
					gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
				}`,fragmentShader:`varying vec2 vUv;

				uniform sampler2D maskTexture;
				uniform vec2 texSize;
				uniform vec3 visibleEdgeColor;
				uniform vec3 hiddenEdgeColor;

				void main() {
					vec2 invSize = 1.0 / texSize;
					vec4 uvOffset = vec4(1.0, 0.0, 0.0, 1.0) * vec4(invSize, invSize);
					vec4 c1 = texture2D( maskTexture, vUv + uvOffset.xy);
					vec4 c2 = texture2D( maskTexture, vUv - uvOffset.xy);
					vec4 c3 = texture2D( maskTexture, vUv + uvOffset.yw);
					vec4 c4 = texture2D( maskTexture, vUv - uvOffset.yw);
					float diff1 = (c1.r - c2.r)*0.5;
					float diff2 = (c3.r - c4.r)*0.5;
					float d = length( vec2(diff1, diff2) );
					float a1 = min(c1.g, c2.g);
					float a2 = min(c3.g, c4.g);
					float visibilityFactor = min(a1, a2);
					vec3 edgeColor = 1.0 - visibilityFactor > 0.001 ? visibleEdgeColor : hiddenEdgeColor;
					gl_FragColor = vec4(edgeColor, 1.0) * vec4(d);
				}`})}getSeperableBlurMaterial(e){return new bt({defines:{MAX_RADIUS:e},uniforms:{colorTexture:{value:null},texSize:{value:new me(.5,.5)},direction:{value:new me(.5,.5)},kernelRadius:{value:1}},vertexShader:`varying vec2 vUv;

				void main() {
					vUv = uv;
					gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
				}`,fragmentShader:`#include <common>
				varying vec2 vUv;
				uniform sampler2D colorTexture;
				uniform vec2 texSize;
				uniform vec2 direction;
				uniform float kernelRadius;

				float gaussianPdf(in float x, in float sigma) {
					return 0.39894 * exp( -0.5 * x * x/( sigma * sigma))/sigma;
				}

				void main() {
					vec2 invSize = 1.0 / texSize;
					float sigma = kernelRadius/2.0;
					float weightSum = gaussianPdf(0.0, sigma);
					vec4 diffuseSum = texture2D( colorTexture, vUv) * weightSum;
					vec2 delta = direction * invSize * kernelRadius/float(MAX_RADIUS);
					vec2 uvOffset = delta;
					for( int i = 1; i <= MAX_RADIUS; i ++ ) {
						float x = kernelRadius * float(i) / float(MAX_RADIUS);
						float w = gaussianPdf(x, sigma);
						vec4 sample1 = texture2D( colorTexture, vUv + uvOffset);
						vec4 sample2 = texture2D( colorTexture, vUv - uvOffset);
						diffuseSum += ((sample1 + sample2) * w);
						weightSum += (2.0 * w);
						uvOffset += delta;
					}
					gl_FragColor = diffuseSum/weightSum;
				}`})}getOverlayMaterial(){return new bt({uniforms:{maskTexture:{value:null},edgeTexture1:{value:null},edgeTexture2:{value:null},patternTexture:{value:null},edgeStrength:{value:1},edgeGlow:{value:1},usePatternTexture:{value:0}},vertexShader:`varying vec2 vUv;

				void main() {
					vUv = uv;
					gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
				}`,fragmentShader:`varying vec2 vUv;

				uniform sampler2D maskTexture;
				uniform sampler2D edgeTexture1;
				uniform sampler2D edgeTexture2;
				uniform sampler2D patternTexture;
				uniform float edgeStrength;
				uniform float edgeGlow;
				uniform bool usePatternTexture;

				void main() {
					vec4 edgeValue1 = texture2D(edgeTexture1, vUv);
					vec4 edgeValue2 = texture2D(edgeTexture2, vUv);
					vec4 maskColor = texture2D(maskTexture, vUv);
					vec4 patternColor = texture2D(patternTexture, 6.0 * vUv);
					float visibilityFactor = 1.0 - maskColor.g > 0.0 ? 1.0 : 0.5;
					vec4 edgeValue = edgeValue1 + edgeValue2 * edgeGlow;
					vec4 finalColor = edgeStrength * maskColor.r * edgeValue;
					if(usePatternTexture)
						finalColor += + visibilityFactor * (1.0 - maskColor.r) * (1.0 - patternColor.r);
					gl_FragColor = finalColor;
				}`,blending:Wl,depthTest:!1,depthWrite:!1,transparent:!0})}}Gi.BlurDirectionX=new me(1,0);Gi.BlurDirectionY=new me(0,1);let Ua=new wf,oo=new me,fr=!0,yu=!1;function wu(i){if(yu&&i===!0){console.log("setRaycasterActive: BLOCKED by transform controls override");return}fr=i}function wp(i){return i.filter(e=>{let t=e;for(;t;){if(t.isTransformControls||t.isTransformControlsGizmo||t.isTransformControlsPlane||t.isTransformControlsRotationGizmo||t.isLine||t.name&&(t.name.includes("TransformControls")||t.name.includes("Gizmo")||t.name.includes("picker")||t.name.includes("helper"))||t.type&&(t.type==="TransformControlsGizmo"||t.type==="TransformControlsPlane"||t.type==="Line"||t.type==="LineSegments")||t.parent&&(t.parent.isTransformControls||t.parent.isTransformControlsGizmo))return!1;t=t.parent}return!0})}function Sp(){return fr}function Hc(i){yu=!i,fr=i}function Gc(){yu=!1}function Fh(i){var e,t,n,s;if(console.log("[attachControlWithMasterRequest] chiamato per:",i.name),console.log("[attachControlWithMasterRequest] isEnabled:",(e=window.multiClientManager)==null?void 0:e.isEnabled,"isMaster:",(t=window.multiClientManager)==null?void 0:t.isMaster),(n=window.multiClientManager)!=null&&n.isEnabled&&!((s=window.multiClientManager)!=null&&s.isMaster)){console.log("[attachControlWithMasterRequest] Sono SLAVE, richiedendo ruolo master..."),window.multiClientManager.requestMaster();const o=window.multiClientManager.onMasterChange,r=a=>{console.log("[attachControlWithMasterRequest] Callback onMasterChange ricevuto, isMaster:",a),o&&o(a),a&&(console.log("[attachControlWithMasterRequest] ✓ Ruolo master confermato, attaching control..."),le.attach(i),window.multiClientManager.onMasterChange=o)};window.multiClientManager.onMasterChange=r;return}console.log("[attachControlWithMasterRequest] Già MASTER o multi-client disattivo, attaching control subito"),le.attach(i)}let it,rn;window.setMenuOutline=function(i,e){it&&(e?it.selectedObjects=[i]:it.selectedObjects=[])};let Gl=!1,aa=null,Li=null,Vl=0,la=!1;const Bh=5,MM=300;let Vi=null;function Su(){rn&&(rn.passes.forEach(i=>{i.dispose&&i.dispose()}),rn.dispose(),rn=null),it&&(it.dispose(),it=null),Vi=null,window.raycasterComposer=null}function Mp(){Su();const i=new kf(te,Ce);it=new Gi(new me(window.innerWidth,window.innerHeight),te,Ce),it.edgeStrength=10,it.edgeGlow=1,it.edgeThickness=3,it.visibleEdgeColor.set("#ffffff"),it.hiddenEdgeColor.set("#ffffff"),rn=new zf(Xe),rn.addPass(i),rn.addPass(it),Vi=new mu(Hf);const e=Xe.getPixelRatio();Vi.material.uniforms.resolution.value.x=1/(window.innerWidth*e),Vi.material.uniforms.resolution.value.y=1/(window.innerHeight*e),rn.addPass(Vi),window.raycasterComposer=rn}let xi=null,On=null;function Ep(i){for(;i.children.length>0;)Ep(i.children[0]);i.material&&(Array.isArray(i.material)?i.material.forEach(e=>{e.map&&e.map.dispose(),e.envMap&&e.envMap.dispose(),e.dispose()}):(i.material.map&&i.material.map.dispose(),i.material.envMap&&i.material.envMap.dispose(),i.material.dispose())),i.geometry&&i.geometry.dispose(),i.parent&&i.parent.remove(i),console.log("Oggetto eliminato:",i.name||i.id)}function EM(){var n,s;const i=xi||On;if(!i)return!1;const e=(n=i.parent)!=null&&n.isGroup?i.parent:i,t=qe.findIndex(o=>{var r;return((r=o.name)==null?void 0:r.trim())===e.name.trim()});if(t!==-1){const o=e.name&&e.name.startsWith("Altoparlante"),r=e.name&&e.name.startsWith("Omnifonte"),a=e.name,l=(s=e.userData)==null?void 0:s.id;return l&&window.messageBroker&&window.messageBroker.sendObjectDeleted({id:l,name:a,type:null}),qe.splice(t,1),Ep(e),console.log("Eliminato oggetto:",a),setTimeout(o?()=>tt("altoparlanti"):r?()=>tt("omnifonti"):tt,50),wt(),On=null,Hw(),!0}return!1}window.raycasterGlobals||(window.raycasterGlobals={});window.raycasterGlobals={get currentSelectedObject(){return On},set currentSelectedObject(i){On=i},get lastHoveredObject(){return xi},set lastHoveredObject(i){xi=i},get isRaycasterActive(){return fr},get outlinePass(){return it},setRaycasterActive:wu,setRaycasterActiveForTransformControls:Hc,clearTransformControlsOverride:Gc,duplicateObject:AM,deleteSelectedObject:EM,updateMenu:pu,processMouseRaycasting:bp,resizeRaycasterComposer:Tp,disposePostProcessing:Su,initPostProcessing:Mp};function bp(i){var s,o;if(!Sp())return;oo.x=i.clientX/window.innerWidth*2-1,oo.y=-(i.clientY/window.innerHeight)*2+1,Ua.setFromCamera(oo,Ce);const t=wp(qe),n=Ua.intersectObjects(t,!0);if(n.length>0){let r=n[0].object,a=null,l=r;for(;l;){if(l.parent&&l.parent.name==="Gruppo di trasformazione"){a=l.parent;break}l=l.parent}a?(it.selectedObjects=a.children,On=a,xi=a,ds(a.name||"Gruppo di trasformazione"),ro(a.name||"Gruppo di trasformazione"),fs(a)):r.name==="Gruppo di trasformazione"?(it.selectedObjects=r.children,On=r,xi=r,ds(r.name||"Gruppo di trasformazione"),ro(r.name||"Gruppo di trasformazione"),fs(r)):(it.selectedObjects=[r],On=r,xi=r,ds(r.name||"Oggetto non trattato"),ro(r.name||"Oggetto non trattato"),fs(r))}else{it.selectedObjects=[],On=null,ds(null),fs(null);const r=((s=window.raycasterGlobals)==null?void 0:s.lastHoveredObject)||((o=window.raycasterGlobals)==null?void 0:o.currentSelectedObject);let a=!1;r&&(r.name==="Gruppo di trasformazione"||r.parent&&r.parent.name==="Gruppo di trasformazione")&&(a=!0),!a&&!Kt.isDragging&&Kt.hide()}}const bM=document.getElementById("infoDivTopLeft");function ro(i){bM.textContent=i||"---"}function fs(i){if(window.menuObjectMap)window.menuObjectMap.forEach(e=>{e.classList.remove("itemList-hover")}),i&&window.menuObjectMap.has(i)&&window.menuObjectMap.get(i).classList.add("itemList-hover");else{const e=document.getElementById("menuList");if(!e)return;const t=e.querySelectorAll(".itemList");qe.forEach((n,s)=>{var o,r;n===i?(o=t[s])==null||o.classList.add("itemList-hover"):(r=t[s])==null||r.classList.remove("itemList-hover")})}}function TM(i){it&&(it.renderCamera=i),rn&&rn.passes&&rn.passes[0]&&(rn.passes[0].camera=i)}function Tp(){if(rn&&rn.setSize(window.innerWidth,window.innerHeight),it&&it.setSize(window.innerWidth,window.innerHeight),Vi){const i=Xe.getPixelRatio();Vi.material.uniforms.resolution.value.x=1/(window.innerWidth*i),Vi.material.uniforms.resolution.value.y=1/(window.innerHeight*i)}}window.updatePostProcessingCamera=TM;window.resizeRaycasterComposer=Tp;function Vc(){if(!Xe||!Xe.domElement){console.warn("Renderer non pronto, ritardo inizializzazione raycaster"),setTimeout(Vc,100);return}Xe.domElement.addEventListener("mousemove",g=>{Sp()&&(aa=g,Gl||(Gl=!0,requestAnimationFrame(()=>{aa&&(bp(aa),aa=null),Gl=!1})))});let i=null,e=[],t=!1,n=null,s=null,o="default";const r=document.getElementById("selection-rectangle");function a(){if(!t||!n||!s){r.style.display="none";return}r.style.display="block";const g=Math.min(n.x,s.x),m=Math.min(n.y,s.y),p=Math.abs(s.x-n.x),y=Math.abs(s.y-n.y);r.style.left=g+"px",r.style.top=m+"px",r.style.width=p+"px",r.style.height=y+"px",r.style.borderRadius="4px",s.y>n.y?(r.style.borderColor="#4488ff",r.style.background="rgba(68,136,255,0.08)",o="omni"):(r.style.borderColor="#ce572cff",r.style.background="rgba(187, 110, 68, 0.08)",o="speaker")}function l(g,m){const p=Math.min(g.x,m.x),y=Math.max(g.x,m.x),w=Math.min(g.y,m.y),v=Math.max(g.y,m.y);e=[],qe.forEach(b=>{let E=b.name&&(b.name.toLowerCase().includes("omnifonte")||b.name.toLowerCase().includes("orifonte")),C=b.name&&b.name.toLowerCase().includes("altoparlante"),D=b;if(!b.isMesh&&b.children&&b.children.length>0){const O=b.children.find(k=>k.isMesh);O&&(D=O)}const x=D.getWorldPosition(new A).clone().project(Ce),P=(x.x*.5+.5)*window.innerWidth,F=(-x.y*.5+.5)*window.innerHeight;P>=p&&P<=y&&F>=w&&F<=v&&(o==="omni"&&E||o==="speaker"&&C)&&e.push(b)}),c()}function c(){if(i&&(i.children.slice().forEach(g=>{if(g.parent===i){g.updateMatrixWorld(!0);const m=new A;g.getWorldPosition(m),te.add(g),g.position.copy(m)}g.material&&g.material.emissive&&g.material.emissive.setHex(0)}),te.remove(i),i=null),e.forEach(g=>{if(g.parent&&g.parent.type==="Group"&&g.parent.name==="Gruppo di trasformazione"){g.updateMatrixWorld(!0);const m=new A;g.getWorldPosition(m),g.parent.remove(g),te.add(g),g.position.copy(m)}}),e.length>1)i=new Mn,i.name="Gruppo di trasformazione",e.forEach(g=>{if(g.parent===te){g.updateMatrixWorld(!0);const m=new A;g.getWorldPosition(m),te.remove(g),i.add(g),g.position.copy(i.worldToLocal(m))}else i.add(g);g.material&&g.material.emissive&&g.material.emissive.setHex(4474111),!g.isMesh&&g.children&&g.children.length>0&&g.children.forEach(m=>{m.material&&m.material.emissive&&m.material.emissive.setHex(4474111)})}),te.add(i);else if(e.length===1){const g=e[0];g.material&&g.material.emissive&&g.material.emissive.setHex(4474111),!g.isMesh&&g.children&&g.children.length>0&&g.children.forEach(m=>{m.material&&m.material.emissive&&m.material.emissive.setHex(4474111)})}it.selectedObjects=e.length>0?e:[],tt()}function u(){i&&(i.children.slice().forEach(g=>{if(g.parent===i){g.updateMatrixWorld(!0);const m=new A;g.getWorldPosition(m),te.add(g),g.position.copy(m)}g.material&&g.material.emissive&&g.material.emissive.setHex(0),!g.isMesh&&g.children&&g.children.length>0&&g.children.forEach(m=>{m.material&&m.material.emissive&&m.material.emissive.setHex(0)})}),te.remove(i),i=null),e.forEach(g=>{if(g.material&&g.material.emissive&&g.material.emissive.setHex(0),!g.isMesh&&g.children&&g.children.length>0&&g.children.forEach(m=>{m.material&&m.material.emissive&&m.material.emissive.setHex(0)}),g.parent&&g.parent.type==="Group"&&g.parent.name==="Gruppo di trasformazione"){g.updateMatrixWorld(!0);const m=new A;g.getWorldPosition(m),g.parent.remove(g),te.add(g),g.position.copy(m)}}),e=[],it.selectedObjects=[],a()}function d(){return le&&(le.dragging||le.object)}Xe.domElement.addEventListener("pointerdown",g=>{f()&&(d()||(t=!0,n={x:g.clientX,y:g.clientY},s={x:g.clientX,y:g.clientY},a()))}),Xe.domElement.addEventListener("pointermove",g=>{f()&&(d()||t&&(s={x:g.clientX,y:g.clientY},a()))}),Xe.domElement.addEventListener("pointerup",g=>{if(f()&&!d()&&t){if(s={x:g.clientX,y:g.clientY},a(),Math.abs(s.x-n.x)>5&&Math.abs(s.y-n.y)>5)u(),l(n,s);else{const m=_(g);if(m){let p=null,y=m;for(;y;){if(y.parent&&y.parent.type==="Group"&&y.parent.name==="Gruppo di trasformazione"){p=y.parent;break}y=y.parent}p?(e=[p],it&&(it.selectedObjects=p.children),On=p,xi=p,ds(p.name||"Gruppo di trasformazione"),ro(p.name||"Gruppo di trasformazione"),fs(p),Fh(p),Hc(!1),Dt.enabled=!1,it&&(it.selectedObjects=[]),window.raycasterComposer&&window.raycasterComposer.render(),window.updateStato&&window.updateStato("Spostamento"),window.transformContextMenu&&window.transformContextMenu.show(p)):(u(),e=[m],c())}else u()}t=!1,n=null,s=null,a()}}),Xe.domElement.addEventListener("click",g=>{if(f()&&g.shiftKey){const m=_(g);m&&(e.includes(m)?e=e.filter(p=>p!==m):e.push(m),c())}}),Xe.domElement.addEventListener("mousedown",g=>{g.button===0&&(Li={x:g.clientX,y:g.clientY},Vl=Date.now(),la=!1,le&&le.dragging)}),Xe.domElement.addEventListener("mousemove",g=>{if(Li){const m=g.clientX-Li.x,p=g.clientY-Li.y;Math.sqrt(m*m+p*p)>Bh&&(la=!0)}}),Xe.domElement.addEventListener("mouseup",g=>{if(g.button!==0||!Li)return;const m=Date.now()-Vl,p=g.clientX-Li.x,y=g.clientY-Li.y;if(Math.sqrt(p*p+y*y)<=Bh&&m<=MM&&!la){const b=d(),E=_(g);(!b||b&&!E)&&h(g)}Li=null,Vl=0,la=!1});function h(g){var p;const m=_(g);if(m){const y=(p=m.parent)!=null&&p.isGroup?m.parent:m;Fh(y),Hc(!1),Dt.enabled=!1,it&&(it.selectedObjects=[]),window.raycasterComposer&&window.raycasterComposer.render(),On=m,xi=m,ds(m.name||"Oggetto"),ro(m.name||"Oggetto"),fs(m),window.updateStato&&window.updateStato("Spostamento"),window.transformContextMenu&&window.transformContextMenu.show(y)}else{const y=le&&le.object,w=Kt&&Kt.isActive;if(y||w){if(y){le.object.type==="Group"&&le.object.name==="Gruppo di trasformazione"&&(le.object.children.slice().forEach(b=>{b.updateMatrixWorld(!0);const E=new A;b.getWorldPosition(E),le.object.remove(b),te.add(b),b.position.copy(E)}),te.remove(le.object)),le.detach(),Gc();const v=document.getElementById("ghostButton");v&&(v.style.display="none")}w&&Kt.hide(),Dt.enabled=!0,it.selectedObjects=[],On=null,xi=null,Gc(),wu(!0),pu(),window.transformContextMenu&&window.transformContextMenu.hide()}}}function f(){return Ce&&Ce.isOrthographicCamera}function _(g){oo.x=g.clientX/window.innerWidth*2-1,oo.y=-(g.clientY/window.innerHeight)*2+1,Ua.setFromCamera(oo,Ce);const m=wp(qe),p=Ua.intersectObjects(m,!0);return p.length>0?p[0].object:null}Mp(),window.addEventListener("beforeunload",()=>{Su()})}document.readyState==="loading"?document.addEventListener("DOMContentLoaded",Vc):Vc();function zh(i){var r,a,l,c;if(!i||!window.multiClientManager)return;if(i.type==="Group"&&i.name==="Gruppo di trasformazione"){(i.children||[]).forEach(d=>{var p,y,w,v;const h=(p=d.userData)==null?void 0:p.id;if(!h){console.warn("Figlio del gruppo senza ID:",d.name);return}d.updateMatrixWorld(!0);const f=new A,_=new pt,g=new A;d.matrixWorld.decompose(f,_,g);const m=new zt().setFromQuaternion(_);window.multiClientManager.sendTransform(h,{x:f.x,y:f.y,z:f.z},{x:m.x,y:m.y,z:m.z},{x:g.x,y:g.y,z:g.z},((y=d.userData)==null?void 0:y.tags)||null,((w=d.userData)==null?void 0:w.menuState)||null),window.messageBroker.sendObjectTransform({id:h,name:d.name,type:null,position:{x:f.x,y:f.y,z:f.z},rotation:{x:m.x,y:m.y,z:m.z},scale:{x:g.x,y:g.y,z:g.z},tags:((v=d.userData)==null?void 0:v.tags)||[0]})});return}let e=(r=i.userData)==null?void 0:r.id;if(!e){console.warn("Oggetto senza ID per sync multi-client:",i.name);return}i.updateMatrixWorld(!0);const t=new A,n=new pt,s=new A;i.matrixWorld.decompose(t,n,s);const o=new zt().setFromQuaternion(n);window.multiClientManager.sendTransform(e,{x:t.x,y:t.y,z:t.z},{x:o.x,y:o.y,z:o.z},{x:s.x,y:s.y,z:s.z},((a=i.userData)==null?void 0:a.tags)||null,((l=i.userData)==null?void 0:l.menuState)||null),window.messageBroker.sendObjectTransform({id:e,name:i.name,type:null,position:{x:t.x,y:t.y,z:t.z},rotation:{x:o.x,y:o.y,z:o.z},scale:{x:s.x,y:s.y,z:s.z},tags:((c=i.userData)==null?void 0:c.tags)||[0]})}le&&(le.addEventListener("change",function(){var n,s;if(!le.object)return;const i=le.object;if(i.type==="Group"&&i.name==="Gruppo di trasformazione"){const o=i.children||[],r=o.length>0&&o.every(a=>a.name&&(a.name.toLowerCase().includes("omnifonte")||a.name.toLowerCase().includes("orifonte")));o.length>0&&o.every(a=>a.name&&a.name.toLowerCase().includes("altoparlante")),r&&window.max&&window.max.outlet&&o.forEach(a=>{const l=new A;a.getWorldPosition(l);let c=1;const u=a.name.match(/^(.*?)[\s_-]?(\d+)$/);u&&(c=parseInt(u[2],10));const d=l.x,h=l.z,f=l.y,_=Math.sqrt(d*d+h*h);let g=Math.atan2(h,d)*(180/Math.PI)-90;g<0&&(g+=360),window.max.outlet("Omnifonte",c,d,h,f,g,_)}),tt();return}const e=i.name||"",t=e.toLowerCase().includes("omnifonte")||e.toLowerCase().includes("orifonte");if(e.toLowerCase().includes("altoparlante"),t&&window.max&&window.max.outlet){const o=i.position.x,r=i.position.z,a=i.position.y;let l=1;const c=e.match(/^(.*?)[\s_-]?(\d+)$/);c&&(l=parseInt(c[2],10));const u=Math.sqrt(o*o+r*r);let d=Math.atan2(r,o)*(180/Math.PI)-90;d<0&&(d+=360),window.max.outlet("Omnifonte",l,o,r,a,d,u)}tt(),(n=window.multiClientManager)!=null&&n.isMaster&&((s=window.multiClientManager)!=null&&s.isEnabled)&&zh(i),window.messageBroker&&zh(i)}),le.addEventListener("mouseUp",function(){var n,s;if(!le.object)return;const i=le.object;if(i.type==="Group"&&i.name==="Gruppo di trasformazione"){i.children.forEach(a=>{var l,c;if(a.userData._undoInitialState){const u={position:{x:a.position.x,y:a.position.y,z:a.position.z},rotation:{x:a.rotation.x,y:a.rotation.y,z:a.rotation.z},scale:{x:a.scale.x,y:a.scale.y,z:a.scale.z},tags:(l=a.userData)!=null&&l.tags?[...a.userData.tags]:[],menuState:(c=a.userData)!=null&&c.menuState?{...a.userData.menuState}:{}},d=new lr(a,a.userData._undoInitialState,u);Yt.execute(d),delete a.userData._undoInitialState}});const o=i.children||[];o.length>0&&o.every(a=>a.name&&a.name.toLowerCase().includes("altoparlante"))&&tt("update-altoparlanti");return}if(i.userData._undoInitialState){const o={position:{x:i.position.x,y:i.position.y,z:i.position.z},rotation:{x:i.rotation.x,y:i.rotation.y,z:i.rotation.z},scale:{x:i.scale.x,y:i.scale.y,z:i.scale.z},tags:(n=i.userData)!=null&&n.tags?[...i.userData.tags]:[],menuState:(s=i.userData)!=null&&s.menuState?{...i.userData.menuState}:{}};console.log("[UNDO] Creando TransformCommand:",{object:i.name,oldPos:i.userData._undoInitialState.position,newPos:o.position,undoManager:!!Yt});const r=new lr(i,i.userData._undoInitialState,o);Yt.execute(r),console.log("[UNDO] Comando eseguito. Stack size:",Yt.undoStack.length),delete i.userData._undoInitialState}else console.warn("[UNDO] Nessun stato iniziale salvato per:",i.name);(i.name||"").toLowerCase().includes("altoparlante")&&tt("update-altoparlanti")}),le.addEventListener("mouseDown",function(){var i,e,t,n,s,o;if(console.log("control.mouseDown - multiClientManager:",{exists:!!window.multiClientManager,isEnabled:(i=window.multiClientManager)==null?void 0:i.isEnabled,isMaster:(e=window.multiClientManager)==null?void 0:e.isMaster}),(t=window.multiClientManager)!=null&&t.isEnabled&&!((n=window.multiClientManager)!=null&&n.isMaster)&&(console.log("Richiedendo ruolo master per trascinamento..."),window.multiClientManager.requestMaster()),le.object){const r=le.object;r.type==="Group"&&r.name==="Gruppo di trasformazione"?r.children.forEach(a=>{var l,c;a.userData._undoInitialState={position:{x:a.position.x,y:a.position.y,z:a.position.z},rotation:{x:a.rotation.x,y:a.rotation.y,z:a.rotation.z},scale:{x:a.scale.x,y:a.scale.y,z:a.scale.z},tags:(l=a.userData)!=null&&l.tags?[...a.userData.tags]:[],menuState:(c=a.userData)!=null&&c.menuState?{...a.userData.menuState}:{}}}):r.userData._undoInitialState={position:{x:r.position.x,y:r.position.y,z:r.position.z},rotation:{x:r.rotation.x,y:r.rotation.y,z:r.rotation.z},scale:{x:r.scale.x,y:r.scale.y,z:r.scale.z},tags:(s=r.userData)!=null&&s.tags?[...r.userData.tags]:[],menuState:(o=r.userData)!=null&&o.menuState?{...r.userData.menuState}:{}}}}));const kh=document.getElementById("toggleTransButton");kh&&kh.addEventListener("click",()=>{le&&le.detach(),Dt.enabled=!0;const i=document.getElementById("ghostButton");i&&(i.style.display="none"),fr=!0,pu()});function AM(i){console.log("[DEBUG] duplicateObject called for:",i==null?void 0:i.name),console.trace();const e=i.clone(!0);i.updateMatrixWorld(!0);const t=i.matrixWorld.clone(),n=new A,s=new pt,o=new A;t.decompose(n,s,o),n.x+=1.5,e.position.copy(n),e.quaternion.copy(s),e.scale.copy(o);let r=i.name||"Duplicato",a=r.match(/^(.*?)[\s_-]?(\d+)$/);a&&(r=a[1].trim());let l=0;qe.forEach(d=>{if(d.name){let h=d.name.match(new RegExp(`^${r}[\\s_-]?(\\d+)$`));if(h){let f=parseInt(h[1],10);f>l&&(l=f)}}}),e.name=`${r} ${l+1}`,te.add(e),qe.push(e),wt(),On=e,ds(e.name),it.selectedObjects=[e],ro(e.name),fs(e);const c=e.name&&e.name.startsWith("Altoparlante"),u=e.name&&e.name.startsWith("Omnifonte");c?setTimeout(()=>tt("altoparlanti"),50):u?(setTimeout(()=>tt("omnifonti"),50),window.max&&window.max.outlet&&CM(e)):setTimeout(tt,50)}function CM(i){if(!i||!i.name)return;const e=i.name.toLowerCase();if(!(e.includes("omnifonte")||e.includes("orifonte")))return;let t=1;const n=i.name.match(/^(.*?)[\s_-]?(\d+)$/);n&&(t=parseInt(n[2],10)),i.updateMatrixWorld(!0);const s=new A;i.getWorldPosition(s);const o=s.x,r=s.z,a=s.y,l=Math.sqrt(o*o+r*r);let c=Math.atan2(r,o)*(180/Math.PI)-90;c<0&&(c+=360),window.max.outlet("Omnifonte",t,o,r,a,c,l)}let Gn=.05,as=15,tr=!0;document.querySelectorAll(".switch input").forEach(i=>{i.addEventListener("change",e=>{const t=e.target.checked,n=e.target.getAttribute("data-id");RM(n,t)})});let $s=.7;function RM(i,e){var t,n;switch(i){case"lock":if((n=(t=window.setupGlobals)==null?void 0:t.control)!=null&&n.object){console.log("Lock toggle ignored: transform controls are active");return}wu(!e);break;case"transparencyA":jo("architettura",e),Ys=e,e?dn.uniforms.opacity.value=$s:dn.uniforms.opacity.value=1;break;case"serioso":e?(dn.uniforms.coolColor.value=new se(30719),dn.uniforms.warmColor.value=new se(16755200)):(dn.uniforms.coolColor.value=new se(128),dn.uniforms.warmColor.value=new se(16119260)),e?Rh("architettura",dn):Rh("architettura");break;case"wireframeVisibility":break;case"theme":Yw(e);break;case"grid":no.visible=e;break;case"gridSnapState":e?(le.setTranslationSnap(Gn),le.setRotationSnap(_i.degToRad(as)),le.setScaleSnap(Gn),tr=!0):(le.setTranslationSnap(null),le.setRotationSnap(_i.degToRad(null)),le.setScaleSnap(null),tr=!1);break;case"zoneVisibility":e?(Ta.visible=!0,Aa.visible=!0,Ca.visible=!0,Ra.visible=!0):(Ta.visible=!1,Aa.visible=!1,Ca.visible=!1,Ra.visible=!1);break;case"archVisibility":e?(dn.uniforms.opacity.value=Ys?$s:1,ph.visible=!0):(dn.uniforms.opacity.value=0,ph.visible=!1),sa("architettura",e),sa("architettura-background",e),sa("architettura-edges",e),sa("architettura-conditional",e);break;case"multiClient":window.multiClientManager&&(window.multiClientManager.setEnabled(e),Fa());break;default:console.log("Switch non riconosciuto")}}document.querySelectorAll(".multitoggle input").forEach(i=>{i.addEventListener("change",e=>{const t=parseInt(e.target.value),n=e.target.getAttribute("data-id");PM(n,t)})});function PM(i,e){switch(i){case"gridsize":switch(e){case 1:ta(5,8);break;case 2:ta(10,16);break;case 3:ta(20,32);break;case 4:ta(40,64);break;default:console.log("Valore non riconosciuto.");return}break;case"transArchVal":switch(e){case 1:$s=0,ia(.1),Ys&&(dn.uniforms.opacity.value=0,jo("architettura",!0));break;case 2:$s=.2,ia(.3),Ys&&(dn.uniforms.opacity.value=.2,jo("architettura",!0));break;case 3:$s=.5,ia(.5),Ys&&(dn.uniforms.opacity.value=.5,jo("architettura",!0));break;case 4:$s=.7,ia(.7),Ys&&(dn.uniforms.opacity.value=.7,jo("architettura",!0));break;default:console.log("Valore non riconosciuto.");return}break;case"snapDefinition":switch(e){case 1:Gn=.0125,as=15,tr&&(le.setTranslationSnap(Gn),le.setRotationSnap(_i.degToRad(as)),le.setScaleSnap(Gn));break;case 2:Gn=.05,as=15,tr&&(le.setTranslationSnap(Gn),le.setRotationSnap(_i.degToRad(as)),le.setScaleSnap(Gn));break;case 3:Gn=.1,as=15,tr&&(le.setTranslationSnap(Gn),le.setRotationSnap(_i.degToRad(as)),le.setScaleSnap(Gn));break}default:console.log("ID non riconosciuto.")}}let Ys=!1;const Ii=document.getElementById("menuList");document.getElementById("seeItemsList").addEventListener("click",i=>{i.target.getAttribute("data-active")==="true"?(Ii.style.opacity=0,Ii.style.width="0vw",Ii.style.color="var(--fondale)",Ii.style.pointerEvents="none",i.target.setAttribute("data-active","false")):(Ii.style.opacity=1,Ii.style.width="23vw",Ii.style.color="var(--testo)",Ii.style.pointerEvents="all",i.target.setAttribute("data-active","true"))});let DM=document.getElementById("toggleTransButton");DM.addEventListener("click",()=>{le.setSpace(le.space==="local"?"world":"local")});const LM=document.getElementById("openSideMenu"),di=document.getElementById("black-panel");LM.addEventListener("click",()=>{di.style.opacity==="1"?(di.style.opacity=0,di.style.pointerEvents="none",di.style.width="0vw",di.style.color="var(--fondale)"):(di.style.opacity=1,di.style.pointerEvents="all",di.style.width="25vw",di.style.color="var(--testo)")});function Fa(){const i=document.getElementById("multiClientStatus");if(!i||!window.multiClientManager)return;const e=window.multiClientManager.getStatus();if(!e.isEnabled)i.style.display="none";else if(!e.isConnected)i.textContent="Connecting...",i.style.cssText="padding: 0.2rem 0.5rem; border-radius: 4px; font-size: 0.7rem; font-weight: 600; text-transform: uppercase; letter-spacing: 0.5px; display: inline-block; background: #ed8936; color: white; margin: 5px 0;";else{const t=e.isMaster?"Master":"Slave",n=e.isMaster?"#48bb78":"#3498DB";i.textContent=t,i.style.cssText=`padding: 0.2rem 0.5rem; border-radius: 4px; font-size: 0.7rem; font-weight: 600; text-transform: uppercase; letter-spacing: 0.5px; display: inline-block; background: ${n}; color: white; margin: 5px 0;`}}window.updateMultiClientStatusDisplay=Fa;function Wc(){const i=document.getElementById("oscStatus");if(!i||!window.oscManager)return;let e="",t="#888";window.oscManager.isEnabled?!window.oscManager.ws||window.oscManager.ws.readyState!==WebSocket.OPEN?(e="Status: Connessione...",t="#ff9500",i.style.display="block"):(e=`Status: Attivo → ${window.oscManager.host}:${window.oscManager.port}`,t="#00ff00",i.style.display="block"):(e="Status: Disattivato",i.style.display="none"),i.textContent=e,i.style.color=t}window.updateOSCStatusDisplay=Wc;function IM(){window.multiClientManager&&(window.multiClientManager.onStateChange=Fa,window.multiClientManager.onMasterChange=i=>{console.log(`Ruolo cambiato: ${i?"MASTER":"SLAVE"}`),Fa()},window.multiClientManager.onTransformReceived=i=>{NM(i)},window.multiClientManager.onObjectCreatedReceived=i=>{UM(i)},FM())}function OM(){window.oscManager&&(window.oscManager.onConnectionChange=i=>{console.log(`OSC connessione: ${i?"CONNESSO":"DISCONNESSO"}`),Wc()},window.oscManager.onConfigChange=(i,e)=>{console.log(`OSC configurazione aggiornata: ${i}:${e}`),Wc();const t=document.getElementById("oscHost"),n=document.getElementById("oscPort");t&&(t.value=i),n&&(n.value=e)})}function NM(i){let e=null;if(te.traverse(function(t){t.userData&&t.userData.id===i.objectId&&(e=t)}),!e){console.warn("Oggetto non trovato per ID:",i.objectId,"- Ritentativo in 100ms..."),setTimeout(()=>{te.traverse(function(t){t.userData&&t.userData.id===i.objectId&&(e=t)}),e?(console.log("Oggetto trovato al secondo tentativo:",e.name),Hh(e,i)):console.error("Oggetto definitivamente non trovato per ID:",i.objectId)},100);return}Hh(e,i)}function Hh(i,e){console.log("Applicando trasformazione da master a:",i.name),e.position&&i.position.set(e.position.x,e.position.y,e.position.z),e.rotation&&i.rotation.set(e.rotation.x,e.rotation.y,e.rotation.z),e.scale&&i.scale.set(e.scale.x,e.scale.y,e.scale.z),e.tags&&(i.userData.tags=e.tags,window.updateSubmenuTags&&window.updateSubmenuTags(i),window.updateTagsChipsExternal&&window.updateTagsChipsExternal(i)),e.menuState&&(console.log("[SLAVE] Ricevuto menuState:",e.menuState),console.log("[SLAVE] Object userData PRIMA:",i.userData.menuState),i.userData.menuState=e.menuState,console.log("[SLAVE] Object userData DOPO:",i.userData.menuState),window.updateMenuForObject?(console.log("[SLAVE] Chiamando updateMenuForObject per:",i.name),window.updateMenuForObject(i)):console.error("[SLAVE] updateMenuForObject NON disponibile!")),i.updateMatrixWorld(!0)}function UM(i){console.log("Creando oggetto da master:",i.objectType,i.name,i.objectId);const e=i.position||{x:0,y:1.2,z:0},t={x:e.x,y:e.z,z:e.y};switch(i.objectType){case"sphere":case"omnifonte":window.addSphereAtPosition&&(console.log("Creando omnifonte da sync:",i.name,"alle coordinate:",t,"con ID:",i.objectId),window.multiClientManager._skipNextBroadcast=!0,window.addSphereAtPosition(t.x,t.y,t.z,i.objectId,i.name),i.tags&&setTimeout(()=>{te.traverse(n=>{n.userData.id===i.objectId&&(n.userData.tags=i.tags)})},50),console.log("Omnifonte creato correttamente con ID:",i.objectId));break;case"speaker":case"altoparlante":if(window.addSpeakerAtPosition){console.log("Creando altoparlante da sync:",i.name,"alle coordinate:",t,"con ID:",i.objectId),window.multiClientManager._skipNextBroadcast=!0,window.addSpeakerAtPosition(t.x,t.y,t.z,i.objectId,i.name),i.tags&&setTimeout(()=>{te.traverse(o=>{o.userData.id===i.objectId&&(o.userData.tags=i.tags)})},50);let n=!1;const s=()=>{te.traverse(o=>{if(o.userData.id===i.objectId)return console.log("Altoparlante creato correttamente con ID:",i.objectId),n=!0,!0}),!n&&s.attempts<10&&(s.attempts++,setTimeout(s,50))};s.attempts=0,setTimeout(s,50)}break;case"arrow":case"orifonte":window.addArrowAtPosition&&(console.log("Creando orifonte da sync:",i.name,"alle coordinate:",t,"con ID:",i.objectId),window.multiClientManager._skipNextBroadcast=!0,window.addArrowAtPosition(t.x,t.y,t.z,i.objectId,i.name),i.tags&&setTimeout(()=>{te.traverse(n=>{n.userData.id===i.objectId&&(n.userData.tags=i.tags)})},50),console.log("Orifonte creato correttamente con ID:",i.objectId));break;default:console.warn("Tipo oggetto non supportato per sync:",i.objectType)}}function FM(){var e;if(!((e=window.setupGlobals)!=null&&e.control))return;window.setupGlobals.control.addEventListener("objectChange",t=>{var s,o;if(!((s=window.multiClientManager)!=null&&s.isMaster)||!((o=window.multiClientManager)!=null&&o.isEnabled))return;const n=t.target.object;!n||!n.userData.id||window.multiClientManager.sendTransform(n.userData.id,{x:n.position.x,y:n.position.y,z:n.position.z},{x:n.rotation.x,y:n.rotation.y,z:n.rotation.z},{x:n.scale.x,y:n.scale.y,z:n.scale.z})})}document.addEventListener("DOMContentLoaded",()=>{setTimeout(()=>{IM(),OM()},100)});document.addEventListener("DOMContentLoaded",()=>{const i=document.getElementById("addElementMenu"),e=document.getElementById("addElementCenterMenu"),t=document.getElementById("closeAddElementMenu"),n=document.querySelectorAll(".add-menu-item"),s=document.getElementById("addElementExecute"),o=document.getElementById("elementQuantity"),r=o.parentElement,a=document.getElementById("arrangementSection"),l=document.getElementById("configContextual"),c=document.getElementById("arrangementType"),u=document.getElementById("squareConfig"),d=document.getElementById("circleConfig"),h=document.getElementById("lineConfig"),f=document.getElementById("squareSideX"),_=document.getElementById("squareSideZ"),g=document.getElementById("circleRadius"),m=document.getElementById("circleAngle"),p=document.getElementById("lineOrientation"),y=document.getElementById("lineLength");let w=null;document.getElementById("addHalo"),document.getElementById("addCone"),document.getElementById("addZone"),document.getElementById("addArrow"),document.getElementById("addSphere");function v(){e.classList.add("show"),C();const L=document.createElement("div");L.id="addMenuBackdrop",L.style.cssText=`
            position: fixed;
            top: 0;
            left: 0;
            right: 0;
            bottom: 0;
            background: rgba(0, 0, 0, 0.3);
            z-index: 9999;
            backdrop-filter: blur(2px);
        `,L.addEventListener("click",b),document.body.appendChild(L),document.addEventListener("keydown",E),console.log("Add element menu opened")}function b(){e.classList.remove("show");const L=document.getElementById("addMenuBackdrop");L&&L.remove(),document.removeEventListener("keydown",E),C(),console.log("Add element menu closed")}function E(L){L.key==="Enter"&&!s.disabled&&(L.preventDefault(),k())}function C(){w=null,n.forEach(L=>L.classList.remove("selected")),s.disabled=!0}function D(){if(!w)return;w==="sphere"||w==="cone"?(r.style.display="flex",a.style.display="flex",l.style.display="flex",S()):w==="plastico"?(r.style.display="none",a.style.display="none",l.style.display="none"):(r.style.display="flex",a.style.display="none",l.style.display="none")}function S(){const L=c.value;u.style.display="none",d.style.display="none",h.style.display="none",L==="square"?u.style.display="flex":L==="circle"?d.style.display="flex":L==="line"&&(h.style.display="flex")}function x(L,N,V){const H=[];if(L===1)H.push({x:0,y:0,z:1.2});else if(L===2)H.push({x:-N/2,y:0,z:1.2}),H.push({x:N/2,y:0,z:1.2});else if(L===4)H.push({x:-N/2,y:-V/2,z:1.2}),H.push({x:N/2,y:-V/2,z:1.2}),H.push({x:N/2,y:V/2,z:1.2}),H.push({x:-N/2,y:V/2,z:1.2});else{const $=2*(N+V)/L;for(let ae=0;ae<L;ae++){const ye=ae*$;let He,Y;ye<=N?(He=-N/2+ye,Y=-V/2):ye<=N+V?(He=N/2,Y=-V/2+(ye-N)):ye<=2*N+V?(He=N/2-(ye-N-V),Y=V/2):(He=-N/2,Y=V/2-(ye-2*N-V)),H.push({x:He,y:Y,z:1.2})}}return H}function P(L,N,V){const H=[];if(L===1)H.push({x:0,y:0,z:1.2});else{const j=V>=360?L:Math.max(1,L-1),$=V*Math.PI/180/j,ae=-(V*Math.PI/180)/2;for(let ye=0;ye<L;ye++){const He=ae+ye*$,Y=N*Math.cos(He),ie=N*Math.sin(He);H.push({x:Y,y:ie,z:1.2})}}return H}function F(L,N,V){const H=[];if(L===1)H.push({x:0,y:0,z:1.2});else{const j=N/(L-1),$=-N/2;for(let ae=0;ae<L;ae++){const ye=$+ae*j;V==="horizontal"?H.push({x:ye,y:0,z:1.2}):V==="vertical"?H.push({x:0,y:ye,z:1.2}):V==="perpendicular"&&H.push({x:0,y:0,z:1.2+ye})}}return H}function O(L){const N=[];if(L===1)N.push({x:0,y:0,z:1.2});else{const j=-((L-1)*.5)/2;for(let $=0;$<L;$++){const ae=j+$*.5;N.push({x:ae,y:0,z:1.2})}}return N}function k(){if(!w)return;if(w==="plastico"){const j=document.getElementById("loadPlastico");j&&(j.click(),b());return}const L=parseInt(o.value);let N=[];const V=w==="sphere"||w==="cone";if(V){const j=c.value;if(j==="square"){const $=parseFloat(f.value),ae=parseFloat(_.value);N=x(L,$,ae)}else if(j==="circle"){const $=parseFloat(g.value),ae=parseFloat(m.value);N=P(L,$,ae)}else if(j==="line"){const $=parseFloat(y.value),ae=p.value;N=F(L,$,ae)}}else N=O(L);N.forEach(j=>{w==="sphere"?addSphereAtPosition(j.x,j.y,j.z):w==="cone"?addSpeakerAtPosition(j.x,j.y,j.z):w==="arrow"?addArrowAtPosition(j.x,j.y,j.z):w==="halo"?addHaloAtPosition(j.x,j.y,j.z):w==="zone"&&addZoneAtPosition(j.x,j.y,j.z)});let H;if(V){const j=c.value;H=j==="line"?`${j} (${p?p.value:"horizontal"})`:j}else H="simple line (0.5m spacing)";console.log(`Added ${L} ${w} elements in ${H} arrangement`),b()}i&&i.addEventListener("click",L=>{L.preventDefault(),L.stopPropagation(),v()}),t&&t.addEventListener("click",L=>{L.preventDefault(),L.stopPropagation(),b()}),s&&s.addEventListener("click",L=>{L.preventDefault(),L.stopPropagation(),k()}),c&&c.addEventListener("change",S),n.forEach(L=>{L.addEventListener("click",N=>{N.preventDefault(),N.stopPropagation(),n.forEach(V=>V.classList.remove("selected")),L.classList.add("selected"),w=L.dataset.element,s.disabled=!1,D(),console.log(`Selected element type: ${w}`)}),L.addEventListener("mouseenter",()=>{const N=L.querySelector(".add-menu-label").textContent;L.dataset.element==="plastico"?L.title="Carica modello 3D architettura":L.title=`Seleziona ${N}`})}),document.addEventListener("keydown",L=>{L.key==="Escape"&&e.classList.contains("show")&&b()}),S(),window.addElementMenuSystem={open:v,close:b},console.log("Advanced Add Element Menu System initialized")});
