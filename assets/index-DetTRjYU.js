(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))n(s);new MutationObserver(s=>{for(const o of s)if(o.type==="childList")for(const r of o.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&n(r)}).observe(document,{childList:!0,subtree:!0});function t(s){const o={};return s.integrity&&(o.integrity=s.integrity),s.referrerPolicy&&(o.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?o.credentials="include":s.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function n(s){if(s.ep)return;s.ep=!0;const o=t(s);fetch(s.href,o)}})();/**
 * @license
 * Copyright 2010-2024 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Xc="171",Zs={ROTATE:0,DOLLY:1,PAN:2},Ws={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},Ip=0,Ru=1,Np=2,Gh=1,Op=2,hi=3,yi=0,gn=1,pn=2,Yn=0,Js=1,Wl=2,Pu=3,Du=4,Up=5,cs=100,Fp=101,Bp=102,zp=103,kp=104,Hp=200,Gp=201,Vp=202,Wp=203,Xl=204,ql=205,Xp=206,qp=207,jp=208,Yp=209,$p=210,Kp=211,Zp=212,Jp=213,Qp=214,jl=0,Yl=1,$l=2,lo=3,Kl=4,Zl=5,Jl=6,Ql=7,qc=0,em=1,tm=2,Wi=0,nm=1,im=2,sm=3,om=4,rm=5,am=6,lm=7,Lu="attached",cm="detached",Vh=300,co=301,uo=302,ec=303,tc=304,Ba=306,ho=1e3,Fi=1001,ba=1002,rn=1003,Wh=1004,Go=1005,Sn=1006,fa=1007,mi=1008,wi=1009,Xh=1010,qh=1011,nr=1012,jc=1013,vs=1014,qn=1015,Dn=1016,Yc=1017,$c=1018,fo=1020,jh=35902,Yh=1021,$h=1022,Ln=1023,Kh=1024,Zh=1025,Qs=1026,po=1027,Kc=1028,Zc=1029,Jh=1030,Jc=1031,Qc=1033,pa=33776,ma=33777,ga=33778,_a=33779,nc=35840,ic=35841,sc=35842,oc=35843,rc=36196,ac=37492,lc=37496,cc=37808,uc=37809,dc=37810,hc=37811,fc=37812,pc=37813,mc=37814,gc=37815,_c=37816,vc=37817,xc=37818,yc=37819,wc=37820,Sc=37821,va=36492,Mc=36494,Ec=36495,Qh=36283,bc=36284,Tc=36285,Ac=36286,ir=2300,sr=2301,qa=2302,Iu=2400,Nu=2401,Ou=2402,um=2500,dm=0,ef=1,Cc=2,hm=3200,tf=3201,za=0,fm=1,Oi="",Ut="srgb",an="srgb-linear",Ta="linear",ct="srgb",Ts=7680,Uu=519,pm=512,mm=513,gm=514,nf=515,_m=516,vm=517,xm=518,ym=519,Rc=35044,Fu="300 es",gi=2e3,Aa=2001;class Ss{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;const n=this._listeners;return n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;const s=this._listeners[e];if(s!==void 0){const o=s.indexOf(t);o!==-1&&s.splice(o,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const n=this._listeners[e.type];if(n!==void 0){e.target=this;const s=n.slice(0);for(let o=0,r=s.length;o<r;o++)s[o].call(this,e);e.target=null}}}const Wt=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let Bu=1234567;const eo=Math.PI/180,mo=180/Math.PI;function $n(){const i=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(Wt[i&255]+Wt[i>>8&255]+Wt[i>>16&255]+Wt[i>>24&255]+"-"+Wt[e&255]+Wt[e>>8&255]+"-"+Wt[e>>16&15|64]+Wt[e>>24&255]+"-"+Wt[t&63|128]+Wt[t>>8&255]+"-"+Wt[t>>16&255]+Wt[t>>24&255]+Wt[n&255]+Wt[n>>8&255]+Wt[n>>16&255]+Wt[n>>24&255]).toLowerCase()}function He(i,e,t){return Math.max(e,Math.min(t,i))}function eu(i,e){return(i%e+e)%e}function wm(i,e,t,n,s){return n+(i-e)*(s-n)/(t-e)}function Sm(i,e,t){return i!==e?(t-i)/(e-i):0}function Ko(i,e,t){return(1-t)*i+t*e}function Mm(i,e,t,n){return Ko(i,e,1-Math.exp(-t*n))}function Em(i,e=1){return e-Math.abs(eu(i,e*2)-e)}function bm(i,e,t){return i<=e?0:i>=t?1:(i=(i-e)/(t-e),i*i*(3-2*i))}function Tm(i,e,t){return i<=e?0:i>=t?1:(i=(i-e)/(t-e),i*i*i*(i*(i*6-15)+10))}function Am(i,e){return i+Math.floor(Math.random()*(e-i+1))}function Cm(i,e){return i+Math.random()*(e-i)}function Rm(i){return i*(.5-Math.random())}function Pm(i){i!==void 0&&(Bu=i);let e=Bu+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function Dm(i){return i*eo}function Lm(i){return i*mo}function Im(i){return(i&i-1)===0&&i!==0}function Nm(i){return Math.pow(2,Math.ceil(Math.log(i)/Math.LN2))}function Om(i){return Math.pow(2,Math.floor(Math.log(i)/Math.LN2))}function Um(i,e,t,n,s){const o=Math.cos,r=Math.sin,a=o(t/2),l=r(t/2),c=o((e+n)/2),u=r((e+n)/2),d=o((e-n)/2),h=r((e-n)/2),f=o((n-e)/2),_=r((n-e)/2);switch(s){case"XYX":i.set(a*u,l*d,l*h,a*c);break;case"YZY":i.set(l*h,a*u,l*d,a*c);break;case"ZXZ":i.set(l*d,l*h,a*u,a*c);break;case"XZX":i.set(a*u,l*_,l*f,a*c);break;case"YXY":i.set(l*f,a*u,l*_,a*c);break;case"ZYZ":i.set(l*_,l*f,a*u,a*c);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+s)}}function Xn(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("Invalid component type.")}}function at(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("Invalid component type.")}}const _i={DEG2RAD:eo,RAD2DEG:mo,generateUUID:$n,clamp:He,euclideanModulo:eu,mapLinear:wm,inverseLerp:Sm,lerp:Ko,damp:Mm,pingpong:Em,smoothstep:bm,smootherstep:Tm,randInt:Am,randFloat:Cm,randFloatSpread:Rm,seededRandom:Pm,degToRad:Dm,radToDeg:Lm,isPowerOfTwo:Im,ceilPowerOfTwo:Nm,floorPowerOfTwo:Om,setQuaternionFromProperEuler:Um,normalize:at,denormalize:Xn};class ge{constructor(e=0,t=0){ge.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,n=this.y,s=e.elements;return this.x=s[0]*t+s[3]*n+s[6],this.y=s[1]*t+s[4]*n+s[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=He(this.x,e.x,t.x),this.y=He(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=He(this.x,e,t),this.y=He(this.y,e,t),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(He(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(He(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const n=Math.cos(t),s=Math.sin(t),o=this.x-e.x,r=this.y-e.y;return this.x=o*n-r*s+e.x,this.y=o*s+r*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Be{constructor(e,t,n,s,o,r,a,l,c){Be.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,s,o,r,a,l,c)}set(e,t,n,s,o,r,a,l,c){const u=this.elements;return u[0]=e,u[1]=s,u[2]=a,u[3]=t,u[4]=o,u[5]=l,u[6]=n,u[7]=r,u[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,s=t.elements,o=this.elements,r=n[0],a=n[3],l=n[6],c=n[1],u=n[4],d=n[7],h=n[2],f=n[5],_=n[8],g=s[0],m=s[3],p=s[6],w=s[1],y=s[4],x=s[7],A=s[2],T=s[5],P=s[8];return o[0]=r*g+a*w+l*A,o[3]=r*m+a*y+l*T,o[6]=r*p+a*x+l*P,o[1]=c*g+u*w+d*A,o[4]=c*m+u*y+d*T,o[7]=c*p+u*x+d*P,o[2]=h*g+f*w+_*A,o[5]=h*m+f*y+_*T,o[8]=h*p+f*x+_*P,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[1],s=e[2],o=e[3],r=e[4],a=e[5],l=e[6],c=e[7],u=e[8];return t*r*u-t*a*c-n*o*u+n*a*l+s*o*c-s*r*l}invert(){const e=this.elements,t=e[0],n=e[1],s=e[2],o=e[3],r=e[4],a=e[5],l=e[6],c=e[7],u=e[8],d=u*r-a*c,h=a*l-u*o,f=c*o-r*l,_=t*d+n*h+s*f;if(_===0)return this.set(0,0,0,0,0,0,0,0,0);const g=1/_;return e[0]=d*g,e[1]=(s*c-u*n)*g,e[2]=(a*n-s*r)*g,e[3]=h*g,e[4]=(u*t-s*l)*g,e[5]=(s*o-a*t)*g,e[6]=f*g,e[7]=(n*l-c*t)*g,e[8]=(r*t-n*o)*g,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,s,o,r,a){const l=Math.cos(o),c=Math.sin(o);return this.set(n*l,n*c,-n*(l*r+c*a)+r+e,-s*c,s*l,-s*(-c*r+l*a)+a+t,0,0,1),this}scale(e,t){return this.premultiply(ja.makeScale(e,t)),this}rotate(e){return this.premultiply(ja.makeRotation(-e)),this}translate(e,t){return this.premultiply(ja.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,n=e.elements;for(let s=0;s<9;s++)if(t[s]!==n[s])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const ja=new Be;function sf(i){for(let e=i.length-1;e>=0;--e)if(i[e]>=65535)return!0;return!1}function or(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function Fm(){const i=or("canvas");return i.style.display="block",i}const zu={};function Vs(i){i in zu||(zu[i]=!0,console.warn(i))}function Bm(i,e,t){return new Promise(function(n,s){function o(){switch(i.clientWaitSync(e,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:s();break;case i.TIMEOUT_EXPIRED:setTimeout(o,t);break;default:n()}}setTimeout(o,t)})}function zm(i){const e=i.elements;e[2]=.5*e[2]+.5*e[3],e[6]=.5*e[6]+.5*e[7],e[10]=.5*e[10]+.5*e[11],e[14]=.5*e[14]+.5*e[15]}function km(i){const e=i.elements;e[11]===-1?(e[10]=-e[10]-1,e[14]=-e[14]):(e[10]=-e[10],e[14]=-e[14]+1)}const ku=new Be().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Hu=new Be().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function Hm(){const i={enabled:!0,workingColorSpace:an,spaces:{},convert:function(s,o,r){return this.enabled===!1||o===r||!o||!r||(this.spaces[o].transfer===ct&&(s.r=vi(s.r),s.g=vi(s.g),s.b=vi(s.b)),this.spaces[o].primaries!==this.spaces[r].primaries&&(s.applyMatrix3(this.spaces[o].toXYZ),s.applyMatrix3(this.spaces[r].fromXYZ)),this.spaces[r].transfer===ct&&(s.r=to(s.r),s.g=to(s.g),s.b=to(s.b))),s},fromWorkingColorSpace:function(s,o){return this.convert(s,this.workingColorSpace,o)},toWorkingColorSpace:function(s,o){return this.convert(s,o,this.workingColorSpace)},getPrimaries:function(s){return this.spaces[s].primaries},getTransfer:function(s){return s===Oi?Ta:this.spaces[s].transfer},getLuminanceCoefficients:function(s,o=this.workingColorSpace){return s.fromArray(this.spaces[o].luminanceCoefficients)},define:function(s){Object.assign(this.spaces,s)},_getMatrix:function(s,o,r){return s.copy(this.spaces[o].toXYZ).multiply(this.spaces[r].fromXYZ)},_getDrawingBufferColorSpace:function(s){return this.spaces[s].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(s=this.workingColorSpace){return this.spaces[s].workingColorSpaceConfig.unpackColorSpace}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],n=[.3127,.329];return i.define({[an]:{primaries:e,whitePoint:n,transfer:Ta,toXYZ:ku,fromXYZ:Hu,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:Ut},outputColorSpaceConfig:{drawingBufferColorSpace:Ut}},[Ut]:{primaries:e,whitePoint:n,transfer:ct,toXYZ:ku,fromXYZ:Hu,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:Ut}}}),i}const Je=Hm();function vi(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function to(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}let As;class Gm{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{As===void 0&&(As=or("canvas")),As.width=e.width,As.height=e.height;const n=As.getContext("2d");e instanceof ImageData?n.putImageData(e,0,0):n.drawImage(e,0,0,e.width,e.height),t=As}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=or("canvas");t.width=e.width,t.height=e.height;const n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);const s=n.getImageData(0,0,e.width,e.height),o=s.data;for(let r=0;r<o.length;r++)o[r]=vi(o[r]/255)*255;return n.putImageData(s,0,0),t}else if(e.data){const t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(vi(t[n]/255)*255):t[n]=vi(t[n]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let Vm=0;class of{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Vm++}),this.uuid=$n(),this.data=e,this.dataReady=!0,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const n={uuid:this.uuid,url:""},s=this.data;if(s!==null){let o;if(Array.isArray(s)){o=[];for(let r=0,a=s.length;r<a;r++)s[r].isDataTexture?o.push(Ya(s[r].image)):o.push(Ya(s[r]))}else o=Ya(s);n.url=o}return t||(e.images[this.uuid]=n),n}}function Ya(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?Gm.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let Wm=0;class Ft extends Ss{constructor(e=Ft.DEFAULT_IMAGE,t=Ft.DEFAULT_MAPPING,n=Fi,s=Fi,o=Sn,r=mi,a=Ln,l=wi,c=Ft.DEFAULT_ANISOTROPY,u=Oi){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Wm++}),this.uuid=$n(),this.name="",this.source=new of(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=s,this.magFilter=o,this.minFilter=r,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new ge(0,0),this.repeat=new ge(1,1),this.center=new ge(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Be,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=u,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const n={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Vh)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case ho:e.x=e.x-Math.floor(e.x);break;case Fi:e.x=e.x<0?0:1;break;case ba:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case ho:e.y=e.y-Math.floor(e.y);break;case Fi:e.y=e.y<0?0:1;break;case ba:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}Ft.DEFAULT_IMAGE=null;Ft.DEFAULT_MAPPING=Vh;Ft.DEFAULT_ANISOTROPY=1;class We{constructor(e=0,t=0,n=0,s=1){We.prototype.isVector4=!0,this.x=e,this.y=t,this.z=n,this.w=s}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,s){return this.x=e,this.y=t,this.z=n,this.w=s,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,n=this.y,s=this.z,o=this.w,r=e.elements;return this.x=r[0]*t+r[4]*n+r[8]*s+r[12]*o,this.y=r[1]*t+r[5]*n+r[9]*s+r[13]*o,this.z=r[2]*t+r[6]*n+r[10]*s+r[14]*o,this.w=r[3]*t+r[7]*n+r[11]*s+r[15]*o,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,s,o;const l=e.elements,c=l[0],u=l[4],d=l[8],h=l[1],f=l[5],_=l[9],g=l[2],m=l[6],p=l[10];if(Math.abs(u-h)<.01&&Math.abs(d-g)<.01&&Math.abs(_-m)<.01){if(Math.abs(u+h)<.1&&Math.abs(d+g)<.1&&Math.abs(_+m)<.1&&Math.abs(c+f+p-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const y=(c+1)/2,x=(f+1)/2,A=(p+1)/2,T=(u+h)/4,P=(d+g)/4,L=(_+m)/4;return y>x&&y>A?y<.01?(n=0,s=.707106781,o=.707106781):(n=Math.sqrt(y),s=T/n,o=P/n):x>A?x<.01?(n=.707106781,s=0,o=.707106781):(s=Math.sqrt(x),n=T/s,o=L/s):A<.01?(n=.707106781,s=.707106781,o=0):(o=Math.sqrt(A),n=P/o,s=L/o),this.set(n,s,o,t),this}let w=Math.sqrt((m-_)*(m-_)+(d-g)*(d-g)+(h-u)*(h-u));return Math.abs(w)<.001&&(w=1),this.x=(m-_)/w,this.y=(d-g)/w,this.z=(h-u)/w,this.w=Math.acos((c+f+p-1)/2),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=He(this.x,e.x,t.x),this.y=He(this.y,e.y,t.y),this.z=He(this.z,e.z,t.z),this.w=He(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=He(this.x,e,t),this.y=He(this.y,e,t),this.z=He(this.z,e,t),this.w=He(this.w,e,t),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(He(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class Xm extends Ss{constructor(e=1,t=1,n={}){super(),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new We(0,0,e,t),this.scissorTest=!1,this.viewport=new We(0,0,e,t);const s={width:e,height:t,depth:1};n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Sn,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},n);const o=new Ft(s,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace);o.flipY=!1,o.generateMipmaps=n.generateMipmaps,o.internalFormat=n.internalFormat,this.textures=[];const r=n.count;for(let a=0;a<r;a++)this.textures[a]=o.clone(),this.textures[a].isRenderTargetTexture=!0;this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.depthTexture=n.depthTexture,this.samples=n.samples}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}setSize(e,t,n=1){if(this.width!==e||this.height!==t||this.depth!==n){this.width=e,this.height=t,this.depth=n;for(let s=0,o=this.textures.length;s<o;s++)this.textures[s].image.width=e,this.textures[s].image.height=t,this.textures[s].image.depth=n;this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let n=0,s=e.textures.length;n<s;n++)this.textures[n]=e.textures[n].clone(),this.textures[n].isRenderTargetTexture=!0;const t=Object.assign({},e.texture.image);return this.texture.source=new of(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class tn extends Xm{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}}class rf extends Ft{constructor(e=null,t=1,n=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:s},this.magFilter=rn,this.minFilter=rn,this.wrapR=Fi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class qm extends Ft{constructor(e=null,t=1,n=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:s},this.magFilter=rn,this.minFilter=rn,this.wrapR=Fi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class ft{constructor(e=0,t=0,n=0,s=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=s}static slerpFlat(e,t,n,s,o,r,a){let l=n[s+0],c=n[s+1],u=n[s+2],d=n[s+3];const h=o[r+0],f=o[r+1],_=o[r+2],g=o[r+3];if(a===0){e[t+0]=l,e[t+1]=c,e[t+2]=u,e[t+3]=d;return}if(a===1){e[t+0]=h,e[t+1]=f,e[t+2]=_,e[t+3]=g;return}if(d!==g||l!==h||c!==f||u!==_){let m=1-a;const p=l*h+c*f+u*_+d*g,w=p>=0?1:-1,y=1-p*p;if(y>Number.EPSILON){const A=Math.sqrt(y),T=Math.atan2(A,p*w);m=Math.sin(m*T)/A,a=Math.sin(a*T)/A}const x=a*w;if(l=l*m+h*x,c=c*m+f*x,u=u*m+_*x,d=d*m+g*x,m===1-a){const A=1/Math.sqrt(l*l+c*c+u*u+d*d);l*=A,c*=A,u*=A,d*=A}}e[t]=l,e[t+1]=c,e[t+2]=u,e[t+3]=d}static multiplyQuaternionsFlat(e,t,n,s,o,r){const a=n[s],l=n[s+1],c=n[s+2],u=n[s+3],d=o[r],h=o[r+1],f=o[r+2],_=o[r+3];return e[t]=a*_+u*d+l*f-c*h,e[t+1]=l*_+u*h+c*d-a*f,e[t+2]=c*_+u*f+a*h-l*d,e[t+3]=u*_-a*d-l*h-c*f,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,s){return this._x=e,this._y=t,this._z=n,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const n=e._x,s=e._y,o=e._z,r=e._order,a=Math.cos,l=Math.sin,c=a(n/2),u=a(s/2),d=a(o/2),h=l(n/2),f=l(s/2),_=l(o/2);switch(r){case"XYZ":this._x=h*u*d+c*f*_,this._y=c*f*d-h*u*_,this._z=c*u*_+h*f*d,this._w=c*u*d-h*f*_;break;case"YXZ":this._x=h*u*d+c*f*_,this._y=c*f*d-h*u*_,this._z=c*u*_-h*f*d,this._w=c*u*d+h*f*_;break;case"ZXY":this._x=h*u*d-c*f*_,this._y=c*f*d+h*u*_,this._z=c*u*_+h*f*d,this._w=c*u*d-h*f*_;break;case"ZYX":this._x=h*u*d-c*f*_,this._y=c*f*d+h*u*_,this._z=c*u*_-h*f*d,this._w=c*u*d+h*f*_;break;case"YZX":this._x=h*u*d+c*f*_,this._y=c*f*d+h*u*_,this._z=c*u*_-h*f*d,this._w=c*u*d-h*f*_;break;case"XZY":this._x=h*u*d-c*f*_,this._y=c*f*d-h*u*_,this._z=c*u*_+h*f*d,this._w=c*u*d+h*f*_;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+r)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const n=t/2,s=Math.sin(n);return this._x=e.x*s,this._y=e.y*s,this._z=e.z*s,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,n=t[0],s=t[4],o=t[8],r=t[1],a=t[5],l=t[9],c=t[2],u=t[6],d=t[10],h=n+a+d;if(h>0){const f=.5/Math.sqrt(h+1);this._w=.25/f,this._x=(u-l)*f,this._y=(o-c)*f,this._z=(r-s)*f}else if(n>a&&n>d){const f=2*Math.sqrt(1+n-a-d);this._w=(u-l)/f,this._x=.25*f,this._y=(s+r)/f,this._z=(o+c)/f}else if(a>d){const f=2*Math.sqrt(1+a-n-d);this._w=(o-c)/f,this._x=(s+r)/f,this._y=.25*f,this._z=(l+u)/f}else{const f=2*Math.sqrt(1+d-n-a);this._w=(r-s)/f,this._x=(o+c)/f,this._y=(l+u)/f,this._z=.25*f}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<Number.EPSILON?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(He(this.dot(e),-1,1)))}rotateTowards(e,t){const n=this.angleTo(e);if(n===0)return this;const s=Math.min(1,t/n);return this.slerp(e,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const n=e._x,s=e._y,o=e._z,r=e._w,a=t._x,l=t._y,c=t._z,u=t._w;return this._x=n*u+r*a+s*c-o*l,this._y=s*u+r*l+o*a-n*c,this._z=o*u+r*c+n*l-s*a,this._w=r*u-n*a-s*l-o*c,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const n=this._x,s=this._y,o=this._z,r=this._w;let a=r*e._w+n*e._x+s*e._y+o*e._z;if(a<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,a=-a):this.copy(e),a>=1)return this._w=r,this._x=n,this._y=s,this._z=o,this;const l=1-a*a;if(l<=Number.EPSILON){const f=1-t;return this._w=f*r+t*this._w,this._x=f*n+t*this._x,this._y=f*s+t*this._y,this._z=f*o+t*this._z,this.normalize(),this}const c=Math.sqrt(l),u=Math.atan2(c,a),d=Math.sin((1-t)*u)/c,h=Math.sin(t*u)/c;return this._w=r*d+this._w*h,this._x=n*d+this._x*h,this._y=s*d+this._y*h,this._z=o*d+this._z*h,this._onChangeCallback(),this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),n=Math.random(),s=Math.sqrt(1-n),o=Math.sqrt(n);return this.set(s*Math.sin(e),s*Math.cos(e),o*Math.sin(t),o*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class b{constructor(e=0,t=0,n=0){b.prototype.isVector3=!0,this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(Gu.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(Gu.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,n=this.y,s=this.z,o=e.elements;return this.x=o[0]*t+o[3]*n+o[6]*s,this.y=o[1]*t+o[4]*n+o[7]*s,this.z=o[2]*t+o[5]*n+o[8]*s,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,n=this.y,s=this.z,o=e.elements,r=1/(o[3]*t+o[7]*n+o[11]*s+o[15]);return this.x=(o[0]*t+o[4]*n+o[8]*s+o[12])*r,this.y=(o[1]*t+o[5]*n+o[9]*s+o[13])*r,this.z=(o[2]*t+o[6]*n+o[10]*s+o[14])*r,this}applyQuaternion(e){const t=this.x,n=this.y,s=this.z,o=e.x,r=e.y,a=e.z,l=e.w,c=2*(r*s-a*n),u=2*(a*t-o*s),d=2*(o*n-r*t);return this.x=t+l*c+r*d-a*u,this.y=n+l*u+a*c-o*d,this.z=s+l*d+o*u-r*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,n=this.y,s=this.z,o=e.elements;return this.x=o[0]*t+o[4]*n+o[8]*s,this.y=o[1]*t+o[5]*n+o[9]*s,this.z=o[2]*t+o[6]*n+o[10]*s,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=He(this.x,e.x,t.x),this.y=He(this.y,e.y,t.y),this.z=He(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=He(this.x,e,t),this.y=He(this.y,e,t),this.z=He(this.z,e,t),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(He(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const n=e.x,s=e.y,o=e.z,r=t.x,a=t.y,l=t.z;return this.x=s*l-o*a,this.y=o*r-n*l,this.z=n*a-s*r,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return $a.copy(this).projectOnVector(e),this.sub($a)}reflect(e){return this.sub($a.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(He(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y,s=this.z-e.z;return t*t+n*n+s*s}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){const s=Math.sin(t)*e;return this.x=s*Math.sin(n),this.y=Math.cos(t)*e,this.z=s*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),s=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=s,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,n=Math.sqrt(1-t*t);return this.x=n*Math.cos(e),this.y=t,this.z=n*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const $a=new b,Gu=new ft;class On{constructor(e=new b(1/0,1/0,1/0),t=new b(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(zn.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(zn.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const n=zn.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const n=e.geometry;if(n!==void 0){const o=n.getAttribute("position");if(t===!0&&o!==void 0&&e.isInstancedMesh!==!0)for(let r=0,a=o.count;r<a;r++)e.isMesh===!0?e.getVertexPosition(r,zn):zn.fromBufferAttribute(o,r),zn.applyMatrix4(e.matrixWorld),this.expandByPoint(zn);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),yr.copy(e.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),yr.copy(n.boundingBox)),yr.applyMatrix4(e.matrixWorld),this.union(yr)}const s=e.children;for(let o=0,r=s.length;o<r;o++)this.expandByObject(s[o],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,zn),zn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Co),wr.subVectors(this.max,Co),Cs.subVectors(e.a,Co),Rs.subVectors(e.b,Co),Ps.subVectors(e.c,Co),Ei.subVectors(Rs,Cs),bi.subVectors(Ps,Rs),$i.subVectors(Cs,Ps);let t=[0,-Ei.z,Ei.y,0,-bi.z,bi.y,0,-$i.z,$i.y,Ei.z,0,-Ei.x,bi.z,0,-bi.x,$i.z,0,-$i.x,-Ei.y,Ei.x,0,-bi.y,bi.x,0,-$i.y,$i.x,0];return!Ka(t,Cs,Rs,Ps,wr)||(t=[1,0,0,0,1,0,0,0,1],!Ka(t,Cs,Rs,Ps,wr))?!1:(Sr.crossVectors(Ei,bi),t=[Sr.x,Sr.y,Sr.z],Ka(t,Cs,Rs,Ps,wr))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,zn).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(zn).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(oi[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),oi[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),oi[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),oi[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),oi[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),oi[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),oi[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),oi[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(oi),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const oi=[new b,new b,new b,new b,new b,new b,new b,new b],zn=new b,yr=new On,Cs=new b,Rs=new b,Ps=new b,Ei=new b,bi=new b,$i=new b,Co=new b,wr=new b,Sr=new b,Ki=new b;function Ka(i,e,t,n,s){for(let o=0,r=i.length-3;o<=r;o+=3){Ki.fromArray(i,o);const a=s.x*Math.abs(Ki.x)+s.y*Math.abs(Ki.y)+s.z*Math.abs(Ki.z),l=e.dot(Ki),c=t.dot(Ki),u=n.dot(Ki);if(Math.max(-Math.max(l,c,u),Math.min(l,c,u))>a)return!1}return!0}const jm=new On,Ro=new b,Za=new b;class Un{constructor(e=new b,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const n=this.center;t!==void 0?n.copy(t):jm.setFromPoints(e).getCenter(n);let s=0;for(let o=0,r=e.length;o<r;o++)s=Math.max(s,n.distanceToSquared(e[o]));return this.radius=Math.sqrt(s),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Ro.subVectors(e,this.center);const t=Ro.lengthSq();if(t>this.radius*this.radius){const n=Math.sqrt(t),s=(n-this.radius)*.5;this.center.addScaledVector(Ro,s/n),this.radius+=s}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Za.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Ro.copy(e.center).add(Za)),this.expandByPoint(Ro.copy(e.center).sub(Za))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const ri=new b,Ja=new b,Mr=new b,Ti=new b,Qa=new b,Er=new b,el=new b;class wo{constructor(e=new b,t=new b(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,ri)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=ri.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(ri.copy(this.origin).addScaledVector(this.direction,t),ri.distanceToSquared(e))}distanceSqToSegment(e,t,n,s){Ja.copy(e).add(t).multiplyScalar(.5),Mr.copy(t).sub(e).normalize(),Ti.copy(this.origin).sub(Ja);const o=e.distanceTo(t)*.5,r=-this.direction.dot(Mr),a=Ti.dot(this.direction),l=-Ti.dot(Mr),c=Ti.lengthSq(),u=Math.abs(1-r*r);let d,h,f,_;if(u>0)if(d=r*l-a,h=r*a-l,_=o*u,d>=0)if(h>=-_)if(h<=_){const g=1/u;d*=g,h*=g,f=d*(d+r*h+2*a)+h*(r*d+h+2*l)+c}else h=o,d=Math.max(0,-(r*h+a)),f=-d*d+h*(h+2*l)+c;else h=-o,d=Math.max(0,-(r*h+a)),f=-d*d+h*(h+2*l)+c;else h<=-_?(d=Math.max(0,-(-r*o+a)),h=d>0?-o:Math.min(Math.max(-o,-l),o),f=-d*d+h*(h+2*l)+c):h<=_?(d=0,h=Math.min(Math.max(-o,-l),o),f=h*(h+2*l)+c):(d=Math.max(0,-(r*o+a)),h=d>0?o:Math.min(Math.max(-o,-l),o),f=-d*d+h*(h+2*l)+c);else h=r>0?-o:o,d=Math.max(0,-(r*h+a)),f=-d*d+h*(h+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,d),s&&s.copy(Ja).addScaledVector(Mr,h),f}intersectSphere(e,t){ri.subVectors(e.center,this.origin);const n=ri.dot(this.direction),s=ri.dot(ri)-n*n,o=e.radius*e.radius;if(s>o)return null;const r=Math.sqrt(o-s),a=n-r,l=n+r;return l<0?null:a<0?this.at(l,t):this.at(a,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){const n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,s,o,r,a,l;const c=1/this.direction.x,u=1/this.direction.y,d=1/this.direction.z,h=this.origin;return c>=0?(n=(e.min.x-h.x)*c,s=(e.max.x-h.x)*c):(n=(e.max.x-h.x)*c,s=(e.min.x-h.x)*c),u>=0?(o=(e.min.y-h.y)*u,r=(e.max.y-h.y)*u):(o=(e.max.y-h.y)*u,r=(e.min.y-h.y)*u),n>r||o>s||((o>n||isNaN(n))&&(n=o),(r<s||isNaN(s))&&(s=r),d>=0?(a=(e.min.z-h.z)*d,l=(e.max.z-h.z)*d):(a=(e.max.z-h.z)*d,l=(e.min.z-h.z)*d),n>l||a>s)||((a>n||n!==n)&&(n=a),(l<s||s!==s)&&(s=l),s<0)?null:this.at(n>=0?n:s,t)}intersectsBox(e){return this.intersectBox(e,ri)!==null}intersectTriangle(e,t,n,s,o){Qa.subVectors(t,e),Er.subVectors(n,e),el.crossVectors(Qa,Er);let r=this.direction.dot(el),a;if(r>0){if(s)return null;a=1}else if(r<0)a=-1,r=-r;else return null;Ti.subVectors(this.origin,e);const l=a*this.direction.dot(Er.crossVectors(Ti,Er));if(l<0)return null;const c=a*this.direction.dot(Qa.cross(Ti));if(c<0||l+c>r)return null;const u=-a*Ti.dot(el);return u<0?null:this.at(u/r,o)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Le{constructor(e,t,n,s,o,r,a,l,c,u,d,h,f,_,g,m){Le.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,s,o,r,a,l,c,u,d,h,f,_,g,m)}set(e,t,n,s,o,r,a,l,c,u,d,h,f,_,g,m){const p=this.elements;return p[0]=e,p[4]=t,p[8]=n,p[12]=s,p[1]=o,p[5]=r,p[9]=a,p[13]=l,p[2]=c,p[6]=u,p[10]=d,p[14]=h,p[3]=f,p[7]=_,p[11]=g,p[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Le().fromArray(this.elements)}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){const t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,n=e.elements,s=1/Ds.setFromMatrixColumn(e,0).length(),o=1/Ds.setFromMatrixColumn(e,1).length(),r=1/Ds.setFromMatrixColumn(e,2).length();return t[0]=n[0]*s,t[1]=n[1]*s,t[2]=n[2]*s,t[3]=0,t[4]=n[4]*o,t[5]=n[5]*o,t[6]=n[6]*o,t[7]=0,t[8]=n[8]*r,t[9]=n[9]*r,t[10]=n[10]*r,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,n=e.x,s=e.y,o=e.z,r=Math.cos(n),a=Math.sin(n),l=Math.cos(s),c=Math.sin(s),u=Math.cos(o),d=Math.sin(o);if(e.order==="XYZ"){const h=r*u,f=r*d,_=a*u,g=a*d;t[0]=l*u,t[4]=-l*d,t[8]=c,t[1]=f+_*c,t[5]=h-g*c,t[9]=-a*l,t[2]=g-h*c,t[6]=_+f*c,t[10]=r*l}else if(e.order==="YXZ"){const h=l*u,f=l*d,_=c*u,g=c*d;t[0]=h+g*a,t[4]=_*a-f,t[8]=r*c,t[1]=r*d,t[5]=r*u,t[9]=-a,t[2]=f*a-_,t[6]=g+h*a,t[10]=r*l}else if(e.order==="ZXY"){const h=l*u,f=l*d,_=c*u,g=c*d;t[0]=h-g*a,t[4]=-r*d,t[8]=_+f*a,t[1]=f+_*a,t[5]=r*u,t[9]=g-h*a,t[2]=-r*c,t[6]=a,t[10]=r*l}else if(e.order==="ZYX"){const h=r*u,f=r*d,_=a*u,g=a*d;t[0]=l*u,t[4]=_*c-f,t[8]=h*c+g,t[1]=l*d,t[5]=g*c+h,t[9]=f*c-_,t[2]=-c,t[6]=a*l,t[10]=r*l}else if(e.order==="YZX"){const h=r*l,f=r*c,_=a*l,g=a*c;t[0]=l*u,t[4]=g-h*d,t[8]=_*d+f,t[1]=d,t[5]=r*u,t[9]=-a*u,t[2]=-c*u,t[6]=f*d+_,t[10]=h-g*d}else if(e.order==="XZY"){const h=r*l,f=r*c,_=a*l,g=a*c;t[0]=l*u,t[4]=-d,t[8]=c*u,t[1]=h*d+g,t[5]=r*u,t[9]=f*d-_,t[2]=_*d-f,t[6]=a*u,t[10]=g*d+h}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(Ym,e,$m)}lookAt(e,t,n){const s=this.elements;return xn.subVectors(e,t),xn.lengthSq()===0&&(xn.z=1),xn.normalize(),Ai.crossVectors(n,xn),Ai.lengthSq()===0&&(Math.abs(n.z)===1?xn.x+=1e-4:xn.z+=1e-4,xn.normalize(),Ai.crossVectors(n,xn)),Ai.normalize(),br.crossVectors(xn,Ai),s[0]=Ai.x,s[4]=br.x,s[8]=xn.x,s[1]=Ai.y,s[5]=br.y,s[9]=xn.y,s[2]=Ai.z,s[6]=br.z,s[10]=xn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,s=t.elements,o=this.elements,r=n[0],a=n[4],l=n[8],c=n[12],u=n[1],d=n[5],h=n[9],f=n[13],_=n[2],g=n[6],m=n[10],p=n[14],w=n[3],y=n[7],x=n[11],A=n[15],T=s[0],P=s[4],L=s[8],M=s[12],v=s[1],C=s[5],N=s[9],O=s[13],z=s[2],D=s[6],I=s[10],G=s[14],F=s[3],W=s[7],j=s[11],ee=s[15];return o[0]=r*T+a*v+l*z+c*F,o[4]=r*P+a*C+l*D+c*W,o[8]=r*L+a*N+l*I+c*j,o[12]=r*M+a*O+l*G+c*ee,o[1]=u*T+d*v+h*z+f*F,o[5]=u*P+d*C+h*D+f*W,o[9]=u*L+d*N+h*I+f*j,o[13]=u*M+d*O+h*G+f*ee,o[2]=_*T+g*v+m*z+p*F,o[6]=_*P+g*C+m*D+p*W,o[10]=_*L+g*N+m*I+p*j,o[14]=_*M+g*O+m*G+p*ee,o[3]=w*T+y*v+x*z+A*F,o[7]=w*P+y*C+x*D+A*W,o[11]=w*L+y*N+x*I+A*j,o[15]=w*M+y*O+x*G+A*ee,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[4],s=e[8],o=e[12],r=e[1],a=e[5],l=e[9],c=e[13],u=e[2],d=e[6],h=e[10],f=e[14],_=e[3],g=e[7],m=e[11],p=e[15];return _*(+o*l*d-s*c*d-o*a*h+n*c*h+s*a*f-n*l*f)+g*(+t*l*f-t*c*h+o*r*h-s*r*f+s*c*u-o*l*u)+m*(+t*c*d-t*a*f-o*r*d+n*r*f+o*a*u-n*c*u)+p*(-s*a*u-t*l*d+t*a*h+s*r*d-n*r*h+n*l*u)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){const s=this.elements;return e.isVector3?(s[12]=e.x,s[13]=e.y,s[14]=e.z):(s[12]=e,s[13]=t,s[14]=n),this}invert(){const e=this.elements,t=e[0],n=e[1],s=e[2],o=e[3],r=e[4],a=e[5],l=e[6],c=e[7],u=e[8],d=e[9],h=e[10],f=e[11],_=e[12],g=e[13],m=e[14],p=e[15],w=d*m*c-g*h*c+g*l*f-a*m*f-d*l*p+a*h*p,y=_*h*c-u*m*c-_*l*f+r*m*f+u*l*p-r*h*p,x=u*g*c-_*d*c+_*a*f-r*g*f-u*a*p+r*d*p,A=_*d*l-u*g*l-_*a*h+r*g*h+u*a*m-r*d*m,T=t*w+n*y+s*x+o*A;if(T===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const P=1/T;return e[0]=w*P,e[1]=(g*h*o-d*m*o-g*s*f+n*m*f+d*s*p-n*h*p)*P,e[2]=(a*m*o-g*l*o+g*s*c-n*m*c-a*s*p+n*l*p)*P,e[3]=(d*l*o-a*h*o-d*s*c+n*h*c+a*s*f-n*l*f)*P,e[4]=y*P,e[5]=(u*m*o-_*h*o+_*s*f-t*m*f-u*s*p+t*h*p)*P,e[6]=(_*l*o-r*m*o-_*s*c+t*m*c+r*s*p-t*l*p)*P,e[7]=(r*h*o-u*l*o+u*s*c-t*h*c-r*s*f+t*l*f)*P,e[8]=x*P,e[9]=(_*d*o-u*g*o-_*n*f+t*g*f+u*n*p-t*d*p)*P,e[10]=(r*g*o-_*a*o+_*n*c-t*g*c-r*n*p+t*a*p)*P,e[11]=(u*a*o-r*d*o-u*n*c+t*d*c+r*n*f-t*a*f)*P,e[12]=A*P,e[13]=(u*g*s-_*d*s+_*n*h-t*g*h-u*n*m+t*d*m)*P,e[14]=(_*a*s-r*g*s-_*n*l+t*g*l+r*n*m-t*a*m)*P,e[15]=(r*d*s-u*a*s+u*n*l-t*d*l-r*n*h+t*a*h)*P,this}scale(e){const t=this.elements,n=e.x,s=e.y,o=e.z;return t[0]*=n,t[4]*=s,t[8]*=o,t[1]*=n,t[5]*=s,t[9]*=o,t[2]*=n,t[6]*=s,t[10]*=o,t[3]*=n,t[7]*=s,t[11]*=o,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],s=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,s))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const n=Math.cos(t),s=Math.sin(t),o=1-n,r=e.x,a=e.y,l=e.z,c=o*r,u=o*a;return this.set(c*r+n,c*a-s*l,c*l+s*a,0,c*a+s*l,u*a+n,u*l-s*r,0,c*l-s*a,u*l+s*r,o*l*l+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,s,o,r){return this.set(1,n,o,0,e,1,r,0,t,s,1,0,0,0,0,1),this}compose(e,t,n){const s=this.elements,o=t._x,r=t._y,a=t._z,l=t._w,c=o+o,u=r+r,d=a+a,h=o*c,f=o*u,_=o*d,g=r*u,m=r*d,p=a*d,w=l*c,y=l*u,x=l*d,A=n.x,T=n.y,P=n.z;return s[0]=(1-(g+p))*A,s[1]=(f+x)*A,s[2]=(_-y)*A,s[3]=0,s[4]=(f-x)*T,s[5]=(1-(h+p))*T,s[6]=(m+w)*T,s[7]=0,s[8]=(_+y)*P,s[9]=(m-w)*P,s[10]=(1-(h+g))*P,s[11]=0,s[12]=e.x,s[13]=e.y,s[14]=e.z,s[15]=1,this}decompose(e,t,n){const s=this.elements;let o=Ds.set(s[0],s[1],s[2]).length();const r=Ds.set(s[4],s[5],s[6]).length(),a=Ds.set(s[8],s[9],s[10]).length();this.determinant()<0&&(o=-o),e.x=s[12],e.y=s[13],e.z=s[14],kn.copy(this);const c=1/o,u=1/r,d=1/a;return kn.elements[0]*=c,kn.elements[1]*=c,kn.elements[2]*=c,kn.elements[4]*=u,kn.elements[5]*=u,kn.elements[6]*=u,kn.elements[8]*=d,kn.elements[9]*=d,kn.elements[10]*=d,t.setFromRotationMatrix(kn),n.x=o,n.y=r,n.z=a,this}makePerspective(e,t,n,s,o,r,a=gi){const l=this.elements,c=2*o/(t-e),u=2*o/(n-s),d=(t+e)/(t-e),h=(n+s)/(n-s);let f,_;if(a===gi)f=-(r+o)/(r-o),_=-2*r*o/(r-o);else if(a===Aa)f=-r/(r-o),_=-r*o/(r-o);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return l[0]=c,l[4]=0,l[8]=d,l[12]=0,l[1]=0,l[5]=u,l[9]=h,l[13]=0,l[2]=0,l[6]=0,l[10]=f,l[14]=_,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,t,n,s,o,r,a=gi){const l=this.elements,c=1/(t-e),u=1/(n-s),d=1/(r-o),h=(t+e)*c,f=(n+s)*u;let _,g;if(a===gi)_=(r+o)*d,g=-2*d;else if(a===Aa)_=o*d,g=-1*d;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-h,l[1]=0,l[5]=2*u,l[9]=0,l[13]=-f,l[2]=0,l[6]=0,l[10]=g,l[14]=-_,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){const t=this.elements,n=e.elements;for(let s=0;s<16;s++)if(t[s]!==n[s])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}}const Ds=new b,kn=new Le,Ym=new b(0,0,0),$m=new b(1,1,1),Ai=new b,br=new b,xn=new b,Vu=new Le,Wu=new ft;class Bt{constructor(e=0,t=0,n=0,s=Bt.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=s}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,s=this._order){return this._x=e,this._y=t,this._z=n,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){const s=e.elements,o=s[0],r=s[4],a=s[8],l=s[1],c=s[5],u=s[9],d=s[2],h=s[6],f=s[10];switch(t){case"XYZ":this._y=Math.asin(He(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-u,f),this._z=Math.atan2(-r,o)):(this._x=Math.atan2(h,c),this._z=0);break;case"YXZ":this._x=Math.asin(-He(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(a,f),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-d,o),this._z=0);break;case"ZXY":this._x=Math.asin(He(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(-d,f),this._z=Math.atan2(-r,c)):(this._y=0,this._z=Math.atan2(l,o));break;case"ZYX":this._y=Math.asin(-He(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(h,f),this._z=Math.atan2(l,o)):(this._x=0,this._z=Math.atan2(-r,c));break;case"YZX":this._z=Math.asin(He(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-u,c),this._y=Math.atan2(-d,o)):(this._x=0,this._y=Math.atan2(a,f));break;case"XZY":this._z=Math.asin(-He(r,-1,1)),Math.abs(r)<.9999999?(this._x=Math.atan2(h,c),this._y=Math.atan2(a,o)):(this._x=Math.atan2(-u,f),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return Vu.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Vu,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return Wu.setFromEuler(this),this.setFromQuaternion(Wu,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Bt.DEFAULT_ORDER="XYZ";class tu{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let Km=0;const Xu=new b,Ls=new ft,ai=new Le,Tr=new b,Po=new b,Zm=new b,Jm=new ft,qu=new b(1,0,0),ju=new b(0,1,0),Yu=new b(0,0,1),$u={type:"added"},Qm={type:"removed"},Is={type:"childadded",child:null},tl={type:"childremoved",child:null};class pt extends Ss{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Km++}),this.uuid=$n(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=pt.DEFAULT_UP.clone();const e=new b,t=new Bt,n=new ft,s=new b(1,1,1);function o(){n.setFromEuler(t,!1)}function r(){t.setFromQuaternion(n,void 0,!1)}t._onChange(o),n._onChange(r),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new Le},normalMatrix:{value:new Be}}),this.matrix=new Le,this.matrixWorld=new Le,this.matrixAutoUpdate=pt.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=pt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new tu,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return Ls.setFromAxisAngle(e,t),this.quaternion.multiply(Ls),this}rotateOnWorldAxis(e,t){return Ls.setFromAxisAngle(e,t),this.quaternion.premultiply(Ls),this}rotateX(e){return this.rotateOnAxis(qu,e)}rotateY(e){return this.rotateOnAxis(ju,e)}rotateZ(e){return this.rotateOnAxis(Yu,e)}translateOnAxis(e,t){return Xu.copy(e).applyQuaternion(this.quaternion),this.position.add(Xu.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(qu,e)}translateY(e){return this.translateOnAxis(ju,e)}translateZ(e){return this.translateOnAxis(Yu,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(ai.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?Tr.copy(e):Tr.set(e,t,n);const s=this.parent;this.updateWorldMatrix(!0,!1),Po.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?ai.lookAt(Po,Tr,this.up):ai.lookAt(Tr,Po,this.up),this.quaternion.setFromRotationMatrix(ai),s&&(ai.extractRotation(s.matrixWorld),Ls.setFromRotationMatrix(ai),this.quaternion.premultiply(Ls.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent($u),Is.child=e,this.dispatchEvent(Is),Is.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(Qm),tl.child=e,this.dispatchEvent(tl),tl.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),ai.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),ai.multiply(e.parent.matrixWorld)),e.applyMatrix4(ai),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent($u),Is.child=e,this.dispatchEvent(Is),Is.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,s=this.children.length;n<s;n++){const r=this.children[n].getObjectByProperty(e,t);if(r!==void 0)return r}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);const s=this.children;for(let o=0,r=s.length;o<r;o++)s[o].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Po,e,Zm),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Po,Jm,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].updateMatrixWorld(e)}updateWorldMatrix(e,t){const n=this.parent;if(e===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),t===!0){const s=this.children;for(let o=0,r=s.length;o<r;o++)s[o].updateWorldMatrix(!1,!0)}}toJSON(e){const t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.visibility=this._visibility,s.active=this._active,s.bounds=this._bounds.map(a=>({boxInitialized:a.boxInitialized,boxMin:a.box.min.toArray(),boxMax:a.box.max.toArray(),sphereInitialized:a.sphereInitialized,sphereRadius:a.sphere.radius,sphereCenter:a.sphere.center.toArray()})),s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.geometryCount=this._geometryCount,s.matricesTexture=this._matricesTexture.toJSON(e),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(s.boundingSphere={center:s.boundingSphere.center.toArray(),radius:s.boundingSphere.radius}),this.boundingBox!==null&&(s.boundingBox={min:s.boundingBox.min.toArray(),max:s.boundingBox.max.toArray()}));function o(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=o(e.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const l=a.shapes;if(Array.isArray(l))for(let c=0,u=l.length;c<u;c++){const d=l[c];o(e.shapes,d)}else o(e.shapes,l)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(o(e.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(o(e.materials,this.material[l]));s.material=a}else s.material=o(e.materials,this.material);if(this.children.length>0){s.children=[];for(let a=0;a<this.children.length;a++)s.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){s.animations=[];for(let a=0;a<this.animations.length;a++){const l=this.animations[a];s.animations.push(o(e.animations,l))}}if(t){const a=r(e.geometries),l=r(e.materials),c=r(e.textures),u=r(e.images),d=r(e.shapes),h=r(e.skeletons),f=r(e.animations),_=r(e.nodes);a.length>0&&(n.geometries=a),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),u.length>0&&(n.images=u),d.length>0&&(n.shapes=d),h.length>0&&(n.skeletons=h),f.length>0&&(n.animations=f),_.length>0&&(n.nodes=_)}return n.object=s,n;function r(a){const l=[];for(const c in a){const u=a[c];delete u.metadata,l.push(u)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){const s=e.children[n];this.add(s.clone())}return this}}pt.DEFAULT_UP=new b(0,1,0);pt.DEFAULT_MATRIX_AUTO_UPDATE=!0;pt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const Hn=new b,li=new b,nl=new b,ci=new b,Ns=new b,Os=new b,Ku=new b,il=new b,sl=new b,ol=new b,rl=new We,al=new We,ll=new We;class mn{constructor(e=new b,t=new b,n=new b){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,s){s.subVectors(n,t),Hn.subVectors(e,t),s.cross(Hn);const o=s.lengthSq();return o>0?s.multiplyScalar(1/Math.sqrt(o)):s.set(0,0,0)}static getBarycoord(e,t,n,s,o){Hn.subVectors(s,t),li.subVectors(n,t),nl.subVectors(e,t);const r=Hn.dot(Hn),a=Hn.dot(li),l=Hn.dot(nl),c=li.dot(li),u=li.dot(nl),d=r*c-a*a;if(d===0)return o.set(0,0,0),null;const h=1/d,f=(c*l-a*u)*h,_=(r*u-a*l)*h;return o.set(1-f-_,_,f)}static containsPoint(e,t,n,s){return this.getBarycoord(e,t,n,s,ci)===null?!1:ci.x>=0&&ci.y>=0&&ci.x+ci.y<=1}static getInterpolation(e,t,n,s,o,r,a,l){return this.getBarycoord(e,t,n,s,ci)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(o,ci.x),l.addScaledVector(r,ci.y),l.addScaledVector(a,ci.z),l)}static getInterpolatedAttribute(e,t,n,s,o,r){return rl.setScalar(0),al.setScalar(0),ll.setScalar(0),rl.fromBufferAttribute(e,t),al.fromBufferAttribute(e,n),ll.fromBufferAttribute(e,s),r.setScalar(0),r.addScaledVector(rl,o.x),r.addScaledVector(al,o.y),r.addScaledVector(ll,o.z),r}static isFrontFacing(e,t,n,s){return Hn.subVectors(n,t),li.subVectors(e,t),Hn.cross(li).dot(s)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,s){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[s]),this}setFromAttributeAndIndices(e,t,n,s){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,s),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Hn.subVectors(this.c,this.b),li.subVectors(this.a,this.b),Hn.cross(li).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return mn.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return mn.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,n,s,o){return mn.getInterpolation(e,this.a,this.b,this.c,t,n,s,o)}containsPoint(e){return mn.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return mn.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const n=this.a,s=this.b,o=this.c;let r,a;Ns.subVectors(s,n),Os.subVectors(o,n),il.subVectors(e,n);const l=Ns.dot(il),c=Os.dot(il);if(l<=0&&c<=0)return t.copy(n);sl.subVectors(e,s);const u=Ns.dot(sl),d=Os.dot(sl);if(u>=0&&d<=u)return t.copy(s);const h=l*d-u*c;if(h<=0&&l>=0&&u<=0)return r=l/(l-u),t.copy(n).addScaledVector(Ns,r);ol.subVectors(e,o);const f=Ns.dot(ol),_=Os.dot(ol);if(_>=0&&f<=_)return t.copy(o);const g=f*c-l*_;if(g<=0&&c>=0&&_<=0)return a=c/(c-_),t.copy(n).addScaledVector(Os,a);const m=u*_-f*d;if(m<=0&&d-u>=0&&f-_>=0)return Ku.subVectors(o,s),a=(d-u)/(d-u+(f-_)),t.copy(s).addScaledVector(Ku,a);const p=1/(m+g+h);return r=g*p,a=h*p,t.copy(n).addScaledVector(Ns,r).addScaledVector(Os,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const af={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Ci={h:0,s:0,l:0},Ar={h:0,s:0,l:0};function cl(i,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?i+(e-i)*6*t:t<1/2?e:t<2/3?i+(e-i)*6*(2/3-t):i}class oe{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){const s=e;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=Ut){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Je.toWorkingColorSpace(this,t),this}setRGB(e,t,n,s=Je.workingColorSpace){return this.r=e,this.g=t,this.b=n,Je.toWorkingColorSpace(this,s),this}setHSL(e,t,n,s=Je.workingColorSpace){if(e=eu(e,1),t=He(t,0,1),n=He(n,0,1),t===0)this.r=this.g=this.b=n;else{const o=n<=.5?n*(1+t):n+t-n*t,r=2*n-o;this.r=cl(r,o,e+1/3),this.g=cl(r,o,e),this.b=cl(r,o,e-1/3)}return Je.toWorkingColorSpace(this,s),this}setStyle(e,t=Ut){function n(o){o!==void 0&&parseFloat(o)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(e)){let o;const r=s[1],a=s[2];switch(r){case"rgb":case"rgba":if(o=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(o[4]),this.setRGB(Math.min(255,parseInt(o[1],10))/255,Math.min(255,parseInt(o[2],10))/255,Math.min(255,parseInt(o[3],10))/255,t);if(o=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(o[4]),this.setRGB(Math.min(100,parseInt(o[1],10))/100,Math.min(100,parseInt(o[2],10))/100,Math.min(100,parseInt(o[3],10))/100,t);break;case"hsl":case"hsla":if(o=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(o[4]),this.setHSL(parseFloat(o[1])/360,parseFloat(o[2])/100,parseFloat(o[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(e)){const o=s[1],r=o.length;if(r===3)return this.setRGB(parseInt(o.charAt(0),16)/15,parseInt(o.charAt(1),16)/15,parseInt(o.charAt(2),16)/15,t);if(r===6)return this.setHex(parseInt(o,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=Ut){const n=af[e.toLowerCase()];return n!==void 0?this.setHex(n,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=vi(e.r),this.g=vi(e.g),this.b=vi(e.b),this}copyLinearToSRGB(e){return this.r=to(e.r),this.g=to(e.g),this.b=to(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Ut){return Je.fromWorkingColorSpace(Xt.copy(this),e),Math.round(He(Xt.r*255,0,255))*65536+Math.round(He(Xt.g*255,0,255))*256+Math.round(He(Xt.b*255,0,255))}getHexString(e=Ut){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=Je.workingColorSpace){Je.fromWorkingColorSpace(Xt.copy(this),t);const n=Xt.r,s=Xt.g,o=Xt.b,r=Math.max(n,s,o),a=Math.min(n,s,o);let l,c;const u=(a+r)/2;if(a===r)l=0,c=0;else{const d=r-a;switch(c=u<=.5?d/(r+a):d/(2-r-a),r){case n:l=(s-o)/d+(s<o?6:0);break;case s:l=(o-n)/d+2;break;case o:l=(n-s)/d+4;break}l/=6}return e.h=l,e.s=c,e.l=u,e}getRGB(e,t=Je.workingColorSpace){return Je.fromWorkingColorSpace(Xt.copy(this),t),e.r=Xt.r,e.g=Xt.g,e.b=Xt.b,e}getStyle(e=Ut){Je.fromWorkingColorSpace(Xt.copy(this),e);const t=Xt.r,n=Xt.g,s=Xt.b;return e!==Ut?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(s*255)})`}offsetHSL(e,t,n){return this.getHSL(Ci),this.setHSL(Ci.h+e,Ci.s+t,Ci.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(Ci),e.getHSL(Ar);const n=Ko(Ci.h,Ar.h,t),s=Ko(Ci.s,Ar.s,t),o=Ko(Ci.l,Ar.l,t);return this.setHSL(n,s,o),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,n=this.g,s=this.b,o=e.elements;return this.r=o[0]*t+o[3]*n+o[6]*s,this.g=o[1]*t+o[4]*n+o[7]*s,this.b=o[2]*t+o[5]*n+o[8]*s,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Xt=new oe;oe.NAMES=af;let eg=0;class _n extends Ss{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:eg++}),this.uuid=$n(),this.name="",this.type="Material",this.blending=Js,this.side=yi,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Xl,this.blendDst=ql,this.blendEquation=cs,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new oe(0,0,0),this.blendAlpha=0,this.depthFunc=lo,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Uu,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Ts,this.stencilZFail=Ts,this.stencilZPass=Ts,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const n=e[t];if(n===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}const s=this[t];if(s===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(n):s&&s.isVector3&&n&&n.isVector3?s.copy(n):this[t]=n}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const n={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==Js&&(n.blending=this.blending),this.side!==yi&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==Xl&&(n.blendSrc=this.blendSrc),this.blendDst!==ql&&(n.blendDst=this.blendDst),this.blendEquation!==cs&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==lo&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Uu&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Ts&&(n.stencilFail=this.stencilFail),this.stencilZFail!==Ts&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==Ts&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function s(o){const r=[];for(const a in o){const l=o[a];delete l.metadata,r.push(l)}return r}if(t){const o=s(e.textures),r=s(e.images);o.length>0&&(n.textures=o),r.length>0&&(n.images=r)}return n}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let n=null;if(t!==null){const s=t.length;n=new Array(s);for(let o=0;o!==s;++o)n[o]=t[o].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}}class ti extends _n{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new oe(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Bt,this.combine=qc,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const Ct=new b,Cr=new ge;class Tt{constructor(e,t,n=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=Rc,this.updateRanges=[],this.gpuType=qn,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let s=0,o=this.itemSize;s<o;s++)this.array[e+s]=t.array[n+s];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)Cr.fromBufferAttribute(this,t),Cr.applyMatrix3(e),this.setXY(t,Cr.x,Cr.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)Ct.fromBufferAttribute(this,t),Ct.applyMatrix3(e),this.setXYZ(t,Ct.x,Ct.y,Ct.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)Ct.fromBufferAttribute(this,t),Ct.applyMatrix4(e),this.setXYZ(t,Ct.x,Ct.y,Ct.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)Ct.fromBufferAttribute(this,t),Ct.applyNormalMatrix(e),this.setXYZ(t,Ct.x,Ct.y,Ct.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)Ct.fromBufferAttribute(this,t),Ct.transformDirection(e),this.setXYZ(t,Ct.x,Ct.y,Ct.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=Xn(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=at(n,this.array)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=Xn(t,this.array)),t}setX(e,t){return this.normalized&&(t=at(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=Xn(t,this.array)),t}setY(e,t){return this.normalized&&(t=at(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=Xn(t,this.array)),t}setZ(e,t){return this.normalized&&(t=at(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=Xn(t,this.array)),t}setW(e,t){return this.normalized&&(t=at(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=at(t,this.array),n=at(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,s){return e*=this.itemSize,this.normalized&&(t=at(t,this.array),n=at(n,this.array),s=at(s,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=s,this}setXYZW(e,t,n,s,o){return e*=this.itemSize,this.normalized&&(t=at(t,this.array),n=at(n,this.array),s=at(s,this.array),o=at(o,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=s,this.array[e+3]=o,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Rc&&(e.usage=this.usage),e}}class lf extends Tt{constructor(e,t,n){super(new Uint16Array(e),t,n)}}class cf extends Tt{constructor(e,t,n){super(new Uint32Array(e),t,n)}}class Ye extends Tt{constructor(e,t,n){super(new Float32Array(e),t,n)}}let tg=0;const Cn=new Le,ul=new pt,Us=new b,yn=new On,Do=new On,It=new b;class vt extends Ss{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:tg++}),this.uuid=$n(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(sf(e)?cf:lf)(e,1):this.index=e,this}setIndirect(e){return this.indirect=e,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const o=new Be().getNormalMatrix(e);n.applyNormalMatrix(o),n.needsUpdate=!0}const s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(e),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return Cn.makeRotationFromQuaternion(e),this.applyMatrix4(Cn),this}rotateX(e){return Cn.makeRotationX(e),this.applyMatrix4(Cn),this}rotateY(e){return Cn.makeRotationY(e),this.applyMatrix4(Cn),this}rotateZ(e){return Cn.makeRotationZ(e),this.applyMatrix4(Cn),this}translate(e,t,n){return Cn.makeTranslation(e,t,n),this.applyMatrix4(Cn),this}scale(e,t,n){return Cn.makeScale(e,t,n),this.applyMatrix4(Cn),this}lookAt(e){return ul.lookAt(e),ul.updateMatrix(),this.applyMatrix4(ul.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Us).negate(),this.translate(Us.x,Us.y,Us.z),this}setFromPoints(e){const t=this.getAttribute("position");if(t===void 0){const n=[];for(let s=0,o=e.length;s<o;s++){const r=e[s];n.push(r.x,r.y,r.z||0)}this.setAttribute("position",new Ye(n,3))}else{const n=Math.min(e.length,t.count);for(let s=0;s<n;s++){const o=e[s];t.setXYZ(s,o.x,o.y,o.z||0)}e.length>t.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new On);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new b(-1/0,-1/0,-1/0),new b(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,s=t.length;n<s;n++){const o=t[n];yn.setFromBufferAttribute(o),this.morphTargetsRelative?(It.addVectors(this.boundingBox.min,yn.min),this.boundingBox.expandByPoint(It),It.addVectors(this.boundingBox.max,yn.max),this.boundingBox.expandByPoint(It)):(this.boundingBox.expandByPoint(yn.min),this.boundingBox.expandByPoint(yn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Un);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new b,1/0);return}if(e){const n=this.boundingSphere.center;if(yn.setFromBufferAttribute(e),t)for(let o=0,r=t.length;o<r;o++){const a=t[o];Do.setFromBufferAttribute(a),this.morphTargetsRelative?(It.addVectors(yn.min,Do.min),yn.expandByPoint(It),It.addVectors(yn.max,Do.max),yn.expandByPoint(It)):(yn.expandByPoint(Do.min),yn.expandByPoint(Do.max))}yn.getCenter(n);let s=0;for(let o=0,r=e.count;o<r;o++)It.fromBufferAttribute(e,o),s=Math.max(s,n.distanceToSquared(It));if(t)for(let o=0,r=t.length;o<r;o++){const a=t[o],l=this.morphTargetsRelative;for(let c=0,u=a.count;c<u;c++)It.fromBufferAttribute(a,c),l&&(Us.fromBufferAttribute(e,c),It.add(Us)),s=Math.max(s,n.distanceToSquared(It))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=t.position,s=t.normal,o=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Tt(new Float32Array(4*n.count),4));const r=this.getAttribute("tangent"),a=[],l=[];for(let L=0;L<n.count;L++)a[L]=new b,l[L]=new b;const c=new b,u=new b,d=new b,h=new ge,f=new ge,_=new ge,g=new b,m=new b;function p(L,M,v){c.fromBufferAttribute(n,L),u.fromBufferAttribute(n,M),d.fromBufferAttribute(n,v),h.fromBufferAttribute(o,L),f.fromBufferAttribute(o,M),_.fromBufferAttribute(o,v),u.sub(c),d.sub(c),f.sub(h),_.sub(h);const C=1/(f.x*_.y-_.x*f.y);isFinite(C)&&(g.copy(u).multiplyScalar(_.y).addScaledVector(d,-f.y).multiplyScalar(C),m.copy(d).multiplyScalar(f.x).addScaledVector(u,-_.x).multiplyScalar(C),a[L].add(g),a[M].add(g),a[v].add(g),l[L].add(m),l[M].add(m),l[v].add(m))}let w=this.groups;w.length===0&&(w=[{start:0,count:e.count}]);for(let L=0,M=w.length;L<M;++L){const v=w[L],C=v.start,N=v.count;for(let O=C,z=C+N;O<z;O+=3)p(e.getX(O+0),e.getX(O+1),e.getX(O+2))}const y=new b,x=new b,A=new b,T=new b;function P(L){A.fromBufferAttribute(s,L),T.copy(A);const M=a[L];y.copy(M),y.sub(A.multiplyScalar(A.dot(M))).normalize(),x.crossVectors(T,M);const C=x.dot(l[L])<0?-1:1;r.setXYZW(L,y.x,y.y,y.z,C)}for(let L=0,M=w.length;L<M;++L){const v=w[L],C=v.start,N=v.count;for(let O=C,z=C+N;O<z;O+=3)P(e.getX(O+0)),P(e.getX(O+1)),P(e.getX(O+2))}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new Tt(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let h=0,f=n.count;h<f;h++)n.setXYZ(h,0,0,0);const s=new b,o=new b,r=new b,a=new b,l=new b,c=new b,u=new b,d=new b;if(e)for(let h=0,f=e.count;h<f;h+=3){const _=e.getX(h+0),g=e.getX(h+1),m=e.getX(h+2);s.fromBufferAttribute(t,_),o.fromBufferAttribute(t,g),r.fromBufferAttribute(t,m),u.subVectors(r,o),d.subVectors(s,o),u.cross(d),a.fromBufferAttribute(n,_),l.fromBufferAttribute(n,g),c.fromBufferAttribute(n,m),a.add(u),l.add(u),c.add(u),n.setXYZ(_,a.x,a.y,a.z),n.setXYZ(g,l.x,l.y,l.z),n.setXYZ(m,c.x,c.y,c.z)}else for(let h=0,f=t.count;h<f;h+=3)s.fromBufferAttribute(t,h+0),o.fromBufferAttribute(t,h+1),r.fromBufferAttribute(t,h+2),u.subVectors(r,o),d.subVectors(s,o),u.cross(d),n.setXYZ(h+0,u.x,u.y,u.z),n.setXYZ(h+1,u.x,u.y,u.z),n.setXYZ(h+2,u.x,u.y,u.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)It.fromBufferAttribute(e,t),It.normalize(),e.setXYZ(t,It.x,It.y,It.z)}toNonIndexed(){function e(a,l){const c=a.array,u=a.itemSize,d=a.normalized,h=new c.constructor(l.length*u);let f=0,_=0;for(let g=0,m=l.length;g<m;g++){a.isInterleavedBufferAttribute?f=l[g]*a.data.stride+a.offset:f=l[g]*u;for(let p=0;p<u;p++)h[_++]=c[f++]}return new Tt(h,u,d)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new vt,n=this.index.array,s=this.attributes;for(const a in s){const l=s[a],c=e(l,n);t.setAttribute(a,c)}const o=this.morphAttributes;for(const a in o){const l=[],c=o[a];for(let u=0,d=c.length;u<d;u++){const h=c[u],f=e(h,n);l.push(f)}t.morphAttributes[a]=l}t.morphTargetsRelative=this.morphTargetsRelative;const r=this.groups;for(let a=0,l=r.length;a<l;a++){const c=r[a];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){const e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const n=this.attributes;for(const l in n){const c=n[l];e.data.attributes[l]=c.toJSON(e.data)}const s={};let o=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],u=[];for(let d=0,h=c.length;d<h;d++){const f=c[d];u.push(f.toJSON(e.data))}u.length>0&&(s[l]=u,o=!0)}o&&(e.data.morphAttributes=s,e.data.morphTargetsRelative=this.morphTargetsRelative);const r=this.groups;r.length>0&&(e.data.groups=JSON.parse(JSON.stringify(r)));const a=this.boundingSphere;return a!==null&&(e.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const n=e.index;n!==null&&this.setIndex(n.clone(t));const s=e.attributes;for(const c in s){const u=s[c];this.setAttribute(c,u.clone(t))}const o=e.morphAttributes;for(const c in o){const u=[],d=o[c];for(let h=0,f=d.length;h<f;h++)u.push(d[h].clone(t));this.morphAttributes[c]=u}this.morphTargetsRelative=e.morphTargetsRelative;const r=e.groups;for(let c=0,u=r.length;c<u;c++){const d=r[c];this.addGroup(d.start,d.count,d.materialIndex)}const a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Zu=new Le,Zi=new wo,Rr=new Un,Ju=new b,Pr=new b,Dr=new b,Lr=new b,dl=new b,Ir=new b,Qu=new b,Nr=new b;class re extends pt{constructor(e=new vt,t=new ti){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const s=t[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let o=0,r=s.length;o<r;o++){const a=s[o].name||String(o);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=o}}}}getVertexPosition(e,t){const n=this.geometry,s=n.attributes.position,o=n.morphAttributes.position,r=n.morphTargetsRelative;t.fromBufferAttribute(s,e);const a=this.morphTargetInfluences;if(o&&a){Ir.set(0,0,0);for(let l=0,c=o.length;l<c;l++){const u=a[l],d=o[l];u!==0&&(dl.fromBufferAttribute(d,e),r?Ir.addScaledVector(dl,u):Ir.addScaledVector(dl.sub(t),u))}t.add(Ir)}return t}raycast(e,t){const n=this.geometry,s=this.material,o=this.matrixWorld;s!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),Rr.copy(n.boundingSphere),Rr.applyMatrix4(o),Zi.copy(e.ray).recast(e.near),!(Rr.containsPoint(Zi.origin)===!1&&(Zi.intersectSphere(Rr,Ju)===null||Zi.origin.distanceToSquared(Ju)>(e.far-e.near)**2))&&(Zu.copy(o).invert(),Zi.copy(e.ray).applyMatrix4(Zu),!(n.boundingBox!==null&&Zi.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,Zi)))}_computeIntersections(e,t,n){let s;const o=this.geometry,r=this.material,a=o.index,l=o.attributes.position,c=o.attributes.uv,u=o.attributes.uv1,d=o.attributes.normal,h=o.groups,f=o.drawRange;if(a!==null)if(Array.isArray(r))for(let _=0,g=h.length;_<g;_++){const m=h[_],p=r[m.materialIndex],w=Math.max(m.start,f.start),y=Math.min(a.count,Math.min(m.start+m.count,f.start+f.count));for(let x=w,A=y;x<A;x+=3){const T=a.getX(x),P=a.getX(x+1),L=a.getX(x+2);s=Or(this,p,e,n,c,u,d,T,P,L),s&&(s.faceIndex=Math.floor(x/3),s.face.materialIndex=m.materialIndex,t.push(s))}}else{const _=Math.max(0,f.start),g=Math.min(a.count,f.start+f.count);for(let m=_,p=g;m<p;m+=3){const w=a.getX(m),y=a.getX(m+1),x=a.getX(m+2);s=Or(this,r,e,n,c,u,d,w,y,x),s&&(s.faceIndex=Math.floor(m/3),t.push(s))}}else if(l!==void 0)if(Array.isArray(r))for(let _=0,g=h.length;_<g;_++){const m=h[_],p=r[m.materialIndex],w=Math.max(m.start,f.start),y=Math.min(l.count,Math.min(m.start+m.count,f.start+f.count));for(let x=w,A=y;x<A;x+=3){const T=x,P=x+1,L=x+2;s=Or(this,p,e,n,c,u,d,T,P,L),s&&(s.faceIndex=Math.floor(x/3),s.face.materialIndex=m.materialIndex,t.push(s))}}else{const _=Math.max(0,f.start),g=Math.min(l.count,f.start+f.count);for(let m=_,p=g;m<p;m+=3){const w=m,y=m+1,x=m+2;s=Or(this,r,e,n,c,u,d,w,y,x),s&&(s.faceIndex=Math.floor(m/3),t.push(s))}}}}function ng(i,e,t,n,s,o,r,a){let l;if(e.side===gn?l=n.intersectTriangle(r,o,s,!0,a):l=n.intersectTriangle(s,o,r,e.side===yi,a),l===null)return null;Nr.copy(a),Nr.applyMatrix4(i.matrixWorld);const c=t.ray.origin.distanceTo(Nr);return c<t.near||c>t.far?null:{distance:c,point:Nr.clone(),object:i}}function Or(i,e,t,n,s,o,r,a,l,c){i.getVertexPosition(a,Pr),i.getVertexPosition(l,Dr),i.getVertexPosition(c,Lr);const u=ng(i,e,t,n,Pr,Dr,Lr,Qu);if(u){const d=new b;mn.getBarycoord(Qu,Pr,Dr,Lr,d),s&&(u.uv=mn.getInterpolatedAttribute(s,a,l,c,d,new ge)),o&&(u.uv1=mn.getInterpolatedAttribute(o,a,l,c,d,new ge)),r&&(u.normal=mn.getInterpolatedAttribute(r,a,l,c,d,new b),u.normal.dot(n.direction)>0&&u.normal.multiplyScalar(-1));const h={a,b:l,c,normal:new b,materialIndex:0};mn.getNormal(Pr,Dr,Lr,h.normal),u.face=h,u.barycoord=d}return u}class Mt extends vt{constructor(e=1,t=1,n=1,s=1,o=1,r=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:s,heightSegments:o,depthSegments:r};const a=this;s=Math.floor(s),o=Math.floor(o),r=Math.floor(r);const l=[],c=[],u=[],d=[];let h=0,f=0;_("z","y","x",-1,-1,n,t,e,r,o,0),_("z","y","x",1,-1,n,t,-e,r,o,1),_("x","z","y",1,1,e,n,t,s,r,2),_("x","z","y",1,-1,e,n,-t,s,r,3),_("x","y","z",1,-1,e,t,n,s,o,4),_("x","y","z",-1,-1,e,t,-n,s,o,5),this.setIndex(l),this.setAttribute("position",new Ye(c,3)),this.setAttribute("normal",new Ye(u,3)),this.setAttribute("uv",new Ye(d,2));function _(g,m,p,w,y,x,A,T,P,L,M){const v=x/P,C=A/L,N=x/2,O=A/2,z=T/2,D=P+1,I=L+1;let G=0,F=0;const W=new b;for(let j=0;j<I;j++){const ee=j*C-O;for(let ce=0;ce<D;ce++){const Re=ce*v-N;W[g]=Re*w,W[m]=ee*y,W[p]=z,c.push(W.x,W.y,W.z),W[g]=0,W[m]=0,W[p]=T>0?1:-1,u.push(W.x,W.y,W.z),d.push(ce/P),d.push(1-j/L),G+=1}}for(let j=0;j<L;j++)for(let ee=0;ee<P;ee++){const ce=h+ee+D*j,Re=h+ee+D*(j+1),$=h+(ee+1)+D*(j+1),ie=h+(ee+1)+D*j;l.push(ce,Re,ie),l.push(Re,$,ie),F+=6}a.addGroup(f,F,M),f+=F,h+=G}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Mt(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function go(i){const e={};for(const t in i){e[t]={};for(const n in i[t]){const s=i[t][n];s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)?s.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=s.clone():Array.isArray(s)?e[t][n]=s.slice():e[t][n]=s}}return e}function Qt(i){const e={};for(let t=0;t<i.length;t++){const n=go(i[t]);for(const s in n)e[s]=n[s]}return e}function ig(i){const e=[];for(let t=0;t<i.length;t++)e.push(i[t].clone());return e}function uf(i){const e=i.getRenderTarget();return e===null?i.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:Je.workingColorSpace}const Ms={clone:go,merge:Qt};var sg=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,og=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Et extends _n{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=sg,this.fragmentShader=og,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=go(e.uniforms),this.uniformsGroups=ig(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const s in this.uniforms){const r=this.uniforms[s].value;r&&r.isTexture?t.uniforms[s]={type:"t",value:r.toJSON(e).uuid}:r&&r.isColor?t.uniforms[s]={type:"c",value:r.getHex()}:r&&r.isVector2?t.uniforms[s]={type:"v2",value:r.toArray()}:r&&r.isVector3?t.uniforms[s]={type:"v3",value:r.toArray()}:r&&r.isVector4?t.uniforms[s]={type:"v4",value:r.toArray()}:r&&r.isMatrix3?t.uniforms[s]={type:"m3",value:r.toArray()}:r&&r.isMatrix4?t.uniforms[s]={type:"m4",value:r.toArray()}:t.uniforms[s]={value:r}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const n={};for(const s in this.extensions)this.extensions[s]===!0&&(n[s]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}}class df extends pt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Le,this.projectionMatrix=new Le,this.projectionMatrixInverse=new Le,this.coordinateSystem=gi}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const Ri=new b,ed=new ge,td=new ge;class sn extends df{constructor(e=50,t=1,n=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=s,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=mo*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(eo*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return mo*2*Math.atan(Math.tan(eo*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,n){Ri.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(Ri.x,Ri.y).multiplyScalar(-e/Ri.z),Ri.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Ri.x,Ri.y).multiplyScalar(-e/Ri.z)}getViewSize(e,t){return this.getViewBounds(e,ed,td),t.subVectors(td,ed)}setViewOffset(e,t,n,s,o,r){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=s,this.view.width=o,this.view.height=r,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(eo*.5*this.fov)/this.zoom,n=2*t,s=this.aspect*n,o=-.5*s;const r=this.view;if(this.view!==null&&this.view.enabled){const l=r.fullWidth,c=r.fullHeight;o+=r.offsetX*s/l,t-=r.offsetY*n/c,s*=r.width/l,n*=r.height/c}const a=this.filmOffset;a!==0&&(o+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(o,o+s,t,t-n,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const Fs=-90,Bs=1;class rg extends pt{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const s=new sn(Fs,Bs,e,t);s.layers=this.layers,this.add(s);const o=new sn(Fs,Bs,e,t);o.layers=this.layers,this.add(o);const r=new sn(Fs,Bs,e,t);r.layers=this.layers,this.add(r);const a=new sn(Fs,Bs,e,t);a.layers=this.layers,this.add(a);const l=new sn(Fs,Bs,e,t);l.layers=this.layers,this.add(l);const c=new sn(Fs,Bs,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[n,s,o,r,a,l]=t;for(const c of t)this.remove(c);if(e===gi)n.up.set(0,1,0),n.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),o.up.set(0,0,-1),o.lookAt(0,1,0),r.up.set(0,0,1),r.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===Aa)n.up.set(0,-1,0),n.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),o.up.set(0,0,1),o.lookAt(0,1,0),r.up.set(0,0,-1),r.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const c of t)this.add(c),c.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:s}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[o,r,a,l,c,u]=this.children,d=e.getRenderTarget(),h=e.getActiveCubeFace(),f=e.getActiveMipmapLevel(),_=e.xr.enabled;e.xr.enabled=!1;const g=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,e.setRenderTarget(n,0,s),e.render(t,o),e.setRenderTarget(n,1,s),e.render(t,r),e.setRenderTarget(n,2,s),e.render(t,a),e.setRenderTarget(n,3,s),e.render(t,l),e.setRenderTarget(n,4,s),e.render(t,c),n.texture.generateMipmaps=g,e.setRenderTarget(n,5,s),e.render(t,u),e.setRenderTarget(d,h,f),e.xr.enabled=_,n.texture.needsPMREMUpdate=!0}}class hf extends Ft{constructor(e,t,n,s,o,r,a,l,c,u){e=e!==void 0?e:[],t=t!==void 0?t:co,super(e,t,n,s,o,r,a,l,c,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class ag extends tn{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const n={width:e,height:e,depth:1},s=[n,n,n,n,n,n];this.texture=new hf(s,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:Sn}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new Mt(5,5,5),o=new Et({name:"CubemapFromEquirect",uniforms:go(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:gn,blending:Yn});o.uniforms.tEquirect.value=t;const r=new re(s,o),a=t.minFilter;return t.minFilter===mi&&(t.minFilter=Sn),new rg(1,10,this).update(e,r),t.minFilter=a,r.geometry.dispose(),r.material.dispose(),this}clear(e,t,n,s){const o=e.getRenderTarget();for(let r=0;r<6;r++)e.setRenderTarget(this,r),e.clear(t,n,s);e.setRenderTarget(o)}}class lg extends pt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Bt,this.environmentIntensity=1,this.environmentRotation=new Bt,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}}class ff{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e!==void 0?e.length/t:0,this.usage=Rc,this.updateRanges=[],this.version=0,this.uuid=$n()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,n){e*=this.stride,n*=t.stride;for(let s=0,o=this.stride;s<o;s++)this.array[e+s]=t.array[n+s];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=$n()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);const t=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),n=new this.constructor(t,this.stride);return n.setUsage(this.usage),n}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){return e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=$n()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}}const Jt=new b;class In{constructor(e,t,n,s=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=t,this.offset=n,this.normalized=s}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,n=this.data.count;t<n;t++)Jt.fromBufferAttribute(this,t),Jt.applyMatrix4(e),this.setXYZ(t,Jt.x,Jt.y,Jt.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)Jt.fromBufferAttribute(this,t),Jt.applyNormalMatrix(e),this.setXYZ(t,Jt.x,Jt.y,Jt.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)Jt.fromBufferAttribute(this,t),Jt.transformDirection(e),this.setXYZ(t,Jt.x,Jt.y,Jt.z);return this}getComponent(e,t){let n=this.array[e*this.data.stride+this.offset+t];return this.normalized&&(n=Xn(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=at(n,this.array)),this.data.array[e*this.data.stride+this.offset+t]=n,this}setX(e,t){return this.normalized&&(t=at(t,this.array)),this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.normalized&&(t=at(t,this.array)),this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.normalized&&(t=at(t,this.array)),this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.normalized&&(t=at(t,this.array)),this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){let t=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(t=Xn(t,this.array)),t}getY(e){let t=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(t=Xn(t,this.array)),t}getZ(e){let t=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(t=Xn(t,this.array)),t}getW(e){let t=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(t=Xn(t,this.array)),t}setXY(e,t,n){return e=e*this.data.stride+this.offset,this.normalized&&(t=at(t,this.array),n=at(n,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this}setXYZ(e,t,n,s){return e=e*this.data.stride+this.offset,this.normalized&&(t=at(t,this.array),n=at(n,this.array),s=at(s,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=s,this}setXYZW(e,t,n,s,o){return e=e*this.data.stride+this.offset,this.normalized&&(t=at(t,this.array),n=at(n,this.array),s=at(s,this.array),o=at(o,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=s,this.data.array[e+3]=o,this}clone(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let n=0;n<this.count;n++){const s=n*this.data.stride+this.offset;for(let o=0;o<this.itemSize;o++)t.push(this.data.array[s+o])}return new Tt(new this.array.constructor(t),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new In(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let n=0;n<this.count;n++){const s=n*this.data.stride+this.offset;for(let o=0;o<this.itemSize;o++)t.push(this.data.array[s+o])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:t,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}const nd=new b,id=new We,sd=new We,cg=new b,od=new Le,Ur=new b,hl=new Un,rd=new Le,fl=new wo;class ug extends re{constructor(e,t){super(e,t),this.isSkinnedMesh=!0,this.type="SkinnedMesh",this.bindMode=Lu,this.bindMatrix=new Le,this.bindMatrixInverse=new Le,this.boundingBox=null,this.boundingSphere=null}computeBoundingBox(){const e=this.geometry;this.boundingBox===null&&(this.boundingBox=new On),this.boundingBox.makeEmpty();const t=e.getAttribute("position");for(let n=0;n<t.count;n++)this.getVertexPosition(n,Ur),this.boundingBox.expandByPoint(Ur)}computeBoundingSphere(){const e=this.geometry;this.boundingSphere===null&&(this.boundingSphere=new Un),this.boundingSphere.makeEmpty();const t=e.getAttribute("position");for(let n=0;n<t.count;n++)this.getVertexPosition(n,Ur),this.boundingSphere.expandByPoint(Ur)}copy(e,t){return super.copy(e,t),this.bindMode=e.bindMode,this.bindMatrix.copy(e.bindMatrix),this.bindMatrixInverse.copy(e.bindMatrixInverse),this.skeleton=e.skeleton,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}raycast(e,t){const n=this.material,s=this.matrixWorld;n!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),hl.copy(this.boundingSphere),hl.applyMatrix4(s),e.ray.intersectsSphere(hl)!==!1&&(rd.copy(s).invert(),fl.copy(e.ray).applyMatrix4(rd),!(this.boundingBox!==null&&fl.intersectsBox(this.boundingBox)===!1)&&this._computeIntersections(e,t,fl)))}getVertexPosition(e,t){return super.getVertexPosition(e,t),this.applyBoneTransform(e,t),t}bind(e,t){this.skeleton=e,t===void 0&&(this.updateMatrixWorld(!0),this.skeleton.calculateInverses(),t=this.matrixWorld),this.bindMatrix.copy(t),this.bindMatrixInverse.copy(t).invert()}pose(){this.skeleton.pose()}normalizeSkinWeights(){const e=new We,t=this.geometry.attributes.skinWeight;for(let n=0,s=t.count;n<s;n++){e.fromBufferAttribute(t,n);const o=1/e.manhattanLength();o!==1/0?e.multiplyScalar(o):e.set(1,0,0,0),t.setXYZW(n,e.x,e.y,e.z,e.w)}}updateMatrixWorld(e){super.updateMatrixWorld(e),this.bindMode===Lu?this.bindMatrixInverse.copy(this.matrixWorld).invert():this.bindMode===cm?this.bindMatrixInverse.copy(this.bindMatrix).invert():console.warn("THREE.SkinnedMesh: Unrecognized bindMode: "+this.bindMode)}applyBoneTransform(e,t){const n=this.skeleton,s=this.geometry;id.fromBufferAttribute(s.attributes.skinIndex,e),sd.fromBufferAttribute(s.attributes.skinWeight,e),nd.copy(t).applyMatrix4(this.bindMatrix),t.set(0,0,0);for(let o=0;o<4;o++){const r=sd.getComponent(o);if(r!==0){const a=id.getComponent(o);od.multiplyMatrices(n.bones[a].matrixWorld,n.boneInverses[a]),t.addScaledVector(cg.copy(nd).applyMatrix4(od),r)}}return t.applyMatrix4(this.bindMatrixInverse)}}class pf extends pt{constructor(){super(),this.isBone=!0,this.type="Bone"}}class mf extends Ft{constructor(e=null,t=1,n=1,s,o,r,a,l,c=rn,u=rn,d,h){super(null,r,a,l,c,u,s,o,d,h),this.isDataTexture=!0,this.image={data:e,width:t,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const ad=new Le,dg=new Le;class nu{constructor(e=[],t=[]){this.uuid=$n(),this.bones=e.slice(0),this.boneInverses=t,this.boneMatrices=null,this.boneTexture=null,this.init()}init(){const e=this.bones,t=this.boneInverses;if(this.boneMatrices=new Float32Array(e.length*16),t.length===0)this.calculateInverses();else if(e.length!==t.length){console.warn("THREE.Skeleton: Number of inverse bone matrices does not match amount of bones."),this.boneInverses=[];for(let n=0,s=this.bones.length;n<s;n++)this.boneInverses.push(new Le)}}calculateInverses(){this.boneInverses.length=0;for(let e=0,t=this.bones.length;e<t;e++){const n=new Le;this.bones[e]&&n.copy(this.bones[e].matrixWorld).invert(),this.boneInverses.push(n)}}pose(){for(let e=0,t=this.bones.length;e<t;e++){const n=this.bones[e];n&&n.matrixWorld.copy(this.boneInverses[e]).invert()}for(let e=0,t=this.bones.length;e<t;e++){const n=this.bones[e];n&&(n.parent&&n.parent.isBone?(n.matrix.copy(n.parent.matrixWorld).invert(),n.matrix.multiply(n.matrixWorld)):n.matrix.copy(n.matrixWorld),n.matrix.decompose(n.position,n.quaternion,n.scale))}}update(){const e=this.bones,t=this.boneInverses,n=this.boneMatrices,s=this.boneTexture;for(let o=0,r=e.length;o<r;o++){const a=e[o]?e[o].matrixWorld:dg;ad.multiplyMatrices(a,t[o]),ad.toArray(n,o*16)}s!==null&&(s.needsUpdate=!0)}clone(){return new nu(this.bones,this.boneInverses)}computeBoneTexture(){let e=Math.sqrt(this.bones.length*4);e=Math.ceil(e/4)*4,e=Math.max(e,4);const t=new Float32Array(e*e*4);t.set(this.boneMatrices);const n=new mf(t,e,e,Ln,qn);return n.needsUpdate=!0,this.boneMatrices=t,this.boneTexture=n,this}getBoneByName(e){for(let t=0,n=this.bones.length;t<n;t++){const s=this.bones[t];if(s.name===e)return s}}dispose(){this.boneTexture!==null&&(this.boneTexture.dispose(),this.boneTexture=null)}fromJSON(e,t){this.uuid=e.uuid;for(let n=0,s=e.bones.length;n<s;n++){const o=e.bones[n];let r=t[o];r===void 0&&(console.warn("THREE.Skeleton: No bone found with UUID:",o),r=new pf),this.bones.push(r),this.boneInverses.push(new Le().fromArray(e.boneInverses[n]))}return this.init(),this}toJSON(){const e={metadata:{version:4.6,type:"Skeleton",generator:"Skeleton.toJSON"},bones:[],boneInverses:[]};e.uuid=this.uuid;const t=this.bones,n=this.boneInverses;for(let s=0,o=t.length;s<o;s++){const r=t[s];e.bones.push(r.uuid);const a=n[s];e.boneInverses.push(a.toArray())}return e}}class Pc extends Tt{constructor(e,t,n,s=1){super(e,t,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=s}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){const e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}}const zs=new Le,ld=new Le,Fr=[],cd=new On,hg=new Le,Lo=new re,Io=new Un;class fg extends re{constructor(e,t,n){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new Pc(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let s=0;s<n;s++)this.setMatrixAt(s,hg)}computeBoundingBox(){const e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new On),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,zs),cd.copy(e.boundingBox).applyMatrix4(zs),this.boundingBox.union(cd)}computeBoundingSphere(){const e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new Un),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,zs),Io.copy(e.boundingSphere).applyMatrix4(zs),this.boundingSphere.union(Io)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),e.morphTexture!==null&&(this.morphTexture=e.morphTexture.clone()),e.instanceColor!==null&&(this.instanceColor=e.instanceColor.clone()),this.count=e.count,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}getColorAt(e,t){t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){t.fromArray(this.instanceMatrix.array,e*16)}getMorphAt(e,t){const n=t.morphTargetInfluences,s=this.morphTexture.source.data.data,o=n.length+1,r=e*o+1;for(let a=0;a<n.length;a++)n[a]=s[r+a]}raycast(e,t){const n=this.matrixWorld,s=this.count;if(Lo.geometry=this.geometry,Lo.material=this.material,Lo.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Io.copy(this.boundingSphere),Io.applyMatrix4(n),e.ray.intersectsSphere(Io)!==!1))for(let o=0;o<s;o++){this.getMatrixAt(o,zs),ld.multiplyMatrices(n,zs),Lo.matrixWorld=ld,Lo.raycast(e,Fr);for(let r=0,a=Fr.length;r<a;r++){const l=Fr[r];l.instanceId=o,l.object=this,t.push(l)}Fr.length=0}}setColorAt(e,t){this.instanceColor===null&&(this.instanceColor=new Pc(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),t.toArray(this.instanceColor.array,e*3)}setMatrixAt(e,t){t.toArray(this.instanceMatrix.array,e*16)}setMorphAt(e,t){const n=t.morphTargetInfluences,s=n.length+1;this.morphTexture===null&&(this.morphTexture=new mf(new Float32Array(s*this.count),s,this.count,Kc,qn));const o=this.morphTexture.source.data.data;let r=0;for(let c=0;c<n.length;c++)r+=n[c];const a=this.geometry.morphTargetsRelative?1:1-r,l=s*e;o[l]=a,o.set(n,l+1)}updateMorphTargets(){}dispose(){return this.dispatchEvent({type:"dispose"}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null),this}}const pl=new b,pg=new b,mg=new Be;class Ni{constructor(e=new b(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,s){return this.normal.set(e,t,n),this.constant=s,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){const s=pl.subVectors(n,t).cross(pg.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(s,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const n=e.delta(pl),s=this.normal.dot(n);if(s===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const o=-(e.start.dot(this.normal)+this.constant)/s;return o<0||o>1?null:t.copy(e.start).addScaledVector(n,o)}intersectsLine(e){const t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const n=t||mg.getNormalMatrix(e),s=this.coplanarPoint(pl).applyMatrix4(e),o=this.normal.applyMatrix3(n).normalize();return this.constant=-s.dot(o),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Ji=new Un,Br=new b;class iu{constructor(e=new Ni,t=new Ni,n=new Ni,s=new Ni,o=new Ni,r=new Ni){this.planes=[e,t,n,s,o,r]}set(e,t,n,s,o,r){const a=this.planes;return a[0].copy(e),a[1].copy(t),a[2].copy(n),a[3].copy(s),a[4].copy(o),a[5].copy(r),this}copy(e){const t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=gi){const n=this.planes,s=e.elements,o=s[0],r=s[1],a=s[2],l=s[3],c=s[4],u=s[5],d=s[6],h=s[7],f=s[8],_=s[9],g=s[10],m=s[11],p=s[12],w=s[13],y=s[14],x=s[15];if(n[0].setComponents(l-o,h-c,m-f,x-p).normalize(),n[1].setComponents(l+o,h+c,m+f,x+p).normalize(),n[2].setComponents(l+r,h+u,m+_,x+w).normalize(),n[3].setComponents(l-r,h-u,m-_,x-w).normalize(),n[4].setComponents(l-a,h-d,m-g,x-y).normalize(),t===gi)n[5].setComponents(l+a,h+d,m+g,x+y).normalize();else if(t===Aa)n[5].setComponents(a,d,g,y).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Ji.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),Ji.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Ji)}intersectsSprite(e){return Ji.center.set(0,0,0),Ji.radius=.7071067811865476,Ji.applyMatrix4(e.matrixWorld),this.intersectsSphere(Ji)}intersectsSphere(e){const t=this.planes,n=e.center,s=-e.radius;for(let o=0;o<6;o++)if(t[o].distanceToPoint(n)<s)return!1;return!0}intersectsBox(e){const t=this.planes;for(let n=0;n<6;n++){const s=t[n];if(Br.x=s.normal.x>0?e.max.x:e.min.x,Br.y=s.normal.y>0?e.max.y:e.min.y,Br.z=s.normal.z>0?e.max.z:e.min.z,s.distanceToPoint(Br)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class ms extends _n{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new oe(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const Ca=new b,Ra=new b,ud=new Le,No=new wo,zr=new Un,ml=new b,dd=new b;class Vn extends pt{constructor(e=new vt,t=new ms){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,n=[0];for(let s=1,o=t.count;s<o;s++)Ca.fromBufferAttribute(t,s-1),Ra.fromBufferAttribute(t,s),n[s]=n[s-1],n[s]+=Ca.distanceTo(Ra);e.setAttribute("lineDistance",new Ye(n,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,t){const n=this.geometry,s=this.matrixWorld,o=e.params.Line.threshold,r=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),zr.copy(n.boundingSphere),zr.applyMatrix4(s),zr.radius+=o,e.ray.intersectsSphere(zr)===!1)return;ud.copy(s).invert(),No.copy(e.ray).applyMatrix4(ud);const a=o/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=this.isLineSegments?2:1,u=n.index,h=n.attributes.position;if(u!==null){const f=Math.max(0,r.start),_=Math.min(u.count,r.start+r.count);for(let g=f,m=_-1;g<m;g+=c){const p=u.getX(g),w=u.getX(g+1),y=kr(this,e,No,l,p,w);y&&t.push(y)}if(this.isLineLoop){const g=u.getX(_-1),m=u.getX(f),p=kr(this,e,No,l,g,m);p&&t.push(p)}}else{const f=Math.max(0,r.start),_=Math.min(h.count,r.start+r.count);for(let g=f,m=_-1;g<m;g+=c){const p=kr(this,e,No,l,g,g+1);p&&t.push(p)}if(this.isLineLoop){const g=kr(this,e,No,l,_-1,f);g&&t.push(g)}}}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const s=t[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let o=0,r=s.length;o<r;o++){const a=s[o].name||String(o);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=o}}}}}function kr(i,e,t,n,s,o){const r=i.geometry.attributes.position;if(Ca.fromBufferAttribute(r,s),Ra.fromBufferAttribute(r,o),t.distanceSqToSegment(Ca,Ra,ml,dd)>n)return;ml.applyMatrix4(i.matrixWorld);const l=e.ray.origin.distanceTo(ml);if(!(l<e.near||l>e.far))return{distance:l,point:dd.clone().applyMatrix4(i.matrixWorld),index:s,face:null,faceIndex:null,barycoord:null,object:i}}const hd=new b,fd=new b;class Dc extends Vn{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,n=[];for(let s=0,o=t.count;s<o;s+=2)hd.fromBufferAttribute(t,s),fd.fromBufferAttribute(t,s+1),n[s]=s===0?0:n[s-1],n[s+1]=n[s]+hd.distanceTo(fd);e.setAttribute("lineDistance",new Ye(n,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class gg extends Vn{constructor(e,t){super(e,t),this.isLineLoop=!0,this.type="LineLoop"}}class Xs extends _n{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new oe(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}const pd=new Le,Lc=new wo,Hr=new Un,Gr=new b;class xa extends pt{constructor(e=new vt,t=new Xs){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,t){const n=this.geometry,s=this.matrixWorld,o=e.params.Points.threshold,r=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Hr.copy(n.boundingSphere),Hr.applyMatrix4(s),Hr.radius+=o,e.ray.intersectsSphere(Hr)===!1)return;pd.copy(s).invert(),Lc.copy(e.ray).applyMatrix4(pd);const a=o/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=n.index,d=n.attributes.position;if(c!==null){const h=Math.max(0,r.start),f=Math.min(c.count,r.start+r.count);for(let _=h,g=f;_<g;_++){const m=c.getX(_);Gr.fromBufferAttribute(d,m),md(Gr,m,l,s,e,t,this)}}else{const h=Math.max(0,r.start),f=Math.min(d.count,r.start+r.count);for(let _=h,g=f;_<g;_++)Gr.fromBufferAttribute(d,_),md(Gr,_,l,s,e,t,this)}}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const s=t[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let o=0,r=s.length;o<r;o++){const a=s[o].name||String(o);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=o}}}}}function md(i,e,t,n,s,o,r){const a=Lc.distanceSqToPoint(i);if(a<t){const l=new b;Lc.closestPointToPoint(i,l),l.applyMatrix4(n);const c=s.ray.origin.distanceTo(l);if(c<s.near||c>s.far)return;o.push({distance:c,distanceToRay:Math.sqrt(a),point:l,index:e,face:null,faceIndex:null,barycoord:null,object:r})}}class Mn extends pt{constructor(){super(),this.isGroup=!0,this.type="Group"}}class gf extends Ft{constructor(e,t,n,s,o,r,a,l,c,u=Qs){if(u!==Qs&&u!==po)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&u===Qs&&(n=vs),n===void 0&&u===po&&(n=fo),super(null,s,o,r,a,l,u,n,c),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=a!==void 0?a:rn,this.minFilter=l!==void 0?l:rn,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}class qt extends vt{constructor(e=1,t=1,n=1,s=32,o=1,r=!1,a=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:n,radialSegments:s,heightSegments:o,openEnded:r,thetaStart:a,thetaLength:l};const c=this;s=Math.floor(s),o=Math.floor(o);const u=[],d=[],h=[],f=[];let _=0;const g=[],m=n/2;let p=0;w(),r===!1&&(e>0&&y(!0),t>0&&y(!1)),this.setIndex(u),this.setAttribute("position",new Ye(d,3)),this.setAttribute("normal",new Ye(h,3)),this.setAttribute("uv",new Ye(f,2));function w(){const x=new b,A=new b;let T=0;const P=(t-e)/n;for(let L=0;L<=o;L++){const M=[],v=L/o,C=v*(t-e)+e;for(let N=0;N<=s;N++){const O=N/s,z=O*l+a,D=Math.sin(z),I=Math.cos(z);A.x=C*D,A.y=-v*n+m,A.z=C*I,d.push(A.x,A.y,A.z),x.set(D,P,I).normalize(),h.push(x.x,x.y,x.z),f.push(O,1-v),M.push(_++)}g.push(M)}for(let L=0;L<s;L++)for(let M=0;M<o;M++){const v=g[M][L],C=g[M+1][L],N=g[M+1][L+1],O=g[M][L+1];(e>0||M!==0)&&(u.push(v,C,O),T+=3),(t>0||M!==o-1)&&(u.push(C,N,O),T+=3)}c.addGroup(p,T,0),p+=T}function y(x){const A=_,T=new ge,P=new b;let L=0;const M=x===!0?e:t,v=x===!0?1:-1;for(let N=1;N<=s;N++)d.push(0,m*v,0),h.push(0,v,0),f.push(.5,.5),_++;const C=_;for(let N=0;N<=s;N++){const z=N/s*l+a,D=Math.cos(z),I=Math.sin(z);P.x=M*I,P.y=m*v,P.z=M*D,d.push(P.x,P.y,P.z),h.push(0,v,0),T.x=D*.5+.5,T.y=I*.5*v+.5,f.push(T.x,T.y),_++}for(let N=0;N<s;N++){const O=A+N,z=C+N;x===!0?u.push(z,z+1,O):u.push(z+1,z,O),L+=3}c.addGroup(p,L,x===!0?1:2),p+=L}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new qt(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class su extends vt{constructor(e=[],t=[],n=1,s=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:e,indices:t,radius:n,detail:s};const o=[],r=[];a(s),c(n),u(),this.setAttribute("position",new Ye(o,3)),this.setAttribute("normal",new Ye(o.slice(),3)),this.setAttribute("uv",new Ye(r,2)),s===0?this.computeVertexNormals():this.normalizeNormals();function a(w){const y=new b,x=new b,A=new b;for(let T=0;T<t.length;T+=3)f(t[T+0],y),f(t[T+1],x),f(t[T+2],A),l(y,x,A,w)}function l(w,y,x,A){const T=A+1,P=[];for(let L=0;L<=T;L++){P[L]=[];const M=w.clone().lerp(x,L/T),v=y.clone().lerp(x,L/T),C=T-L;for(let N=0;N<=C;N++)N===0&&L===T?P[L][N]=M:P[L][N]=M.clone().lerp(v,N/C)}for(let L=0;L<T;L++)for(let M=0;M<2*(T-L)-1;M++){const v=Math.floor(M/2);M%2===0?(h(P[L][v+1]),h(P[L+1][v]),h(P[L][v])):(h(P[L][v+1]),h(P[L+1][v+1]),h(P[L+1][v]))}}function c(w){const y=new b;for(let x=0;x<o.length;x+=3)y.x=o[x+0],y.y=o[x+1],y.z=o[x+2],y.normalize().multiplyScalar(w),o[x+0]=y.x,o[x+1]=y.y,o[x+2]=y.z}function u(){const w=new b;for(let y=0;y<o.length;y+=3){w.x=o[y+0],w.y=o[y+1],w.z=o[y+2];const x=m(w)/2/Math.PI+.5,A=p(w)/Math.PI+.5;r.push(x,1-A)}_(),d()}function d(){for(let w=0;w<r.length;w+=6){const y=r[w+0],x=r[w+2],A=r[w+4],T=Math.max(y,x,A),P=Math.min(y,x,A);T>.9&&P<.1&&(y<.2&&(r[w+0]+=1),x<.2&&(r[w+2]+=1),A<.2&&(r[w+4]+=1))}}function h(w){o.push(w.x,w.y,w.z)}function f(w,y){const x=w*3;y.x=e[x+0],y.y=e[x+1],y.z=e[x+2]}function _(){const w=new b,y=new b,x=new b,A=new b,T=new ge,P=new ge,L=new ge;for(let M=0,v=0;M<o.length;M+=9,v+=6){w.set(o[M+0],o[M+1],o[M+2]),y.set(o[M+3],o[M+4],o[M+5]),x.set(o[M+6],o[M+7],o[M+8]),T.set(r[v+0],r[v+1]),P.set(r[v+2],r[v+3]),L.set(r[v+4],r[v+5]),A.copy(w).add(y).add(x).divideScalar(3);const C=m(A);g(T,v+0,w,C),g(P,v+2,y,C),g(L,v+4,x,C)}}function g(w,y,x,A){A<0&&w.x===1&&(r[y]=w.x-1),x.x===0&&x.z===0&&(r[y]=A/2/Math.PI+.5)}function m(w){return Math.atan2(w.z,-w.x)}function p(w){return Math.atan2(-w.y,Math.sqrt(w.x*w.x+w.z*w.z))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new su(e.vertices,e.indices,e.radius,e.details)}}const Vr=new b,Wr=new b,gl=new b,Xr=new mn;class ou extends vt{constructor(e=null,t=1){if(super(),this.type="EdgesGeometry",this.parameters={geometry:e,thresholdAngle:t},e!==null){const s=Math.pow(10,4),o=Math.cos(eo*t),r=e.getIndex(),a=e.getAttribute("position"),l=r?r.count:a.count,c=[0,0,0],u=["a","b","c"],d=new Array(3),h={},f=[];for(let _=0;_<l;_+=3){r?(c[0]=r.getX(_),c[1]=r.getX(_+1),c[2]=r.getX(_+2)):(c[0]=_,c[1]=_+1,c[2]=_+2);const{a:g,b:m,c:p}=Xr;if(g.fromBufferAttribute(a,c[0]),m.fromBufferAttribute(a,c[1]),p.fromBufferAttribute(a,c[2]),Xr.getNormal(gl),d[0]=`${Math.round(g.x*s)},${Math.round(g.y*s)},${Math.round(g.z*s)}`,d[1]=`${Math.round(m.x*s)},${Math.round(m.y*s)},${Math.round(m.z*s)}`,d[2]=`${Math.round(p.x*s)},${Math.round(p.y*s)},${Math.round(p.z*s)}`,!(d[0]===d[1]||d[1]===d[2]||d[2]===d[0]))for(let w=0;w<3;w++){const y=(w+1)%3,x=d[w],A=d[y],T=Xr[u[w]],P=Xr[u[y]],L=`${x}_${A}`,M=`${A}_${x}`;M in h&&h[M]?(gl.dot(h[M].normal)<=o&&(f.push(T.x,T.y,T.z),f.push(P.x,P.y,P.z)),h[M]=null):L in h||(h[L]={index0:c[w],index1:c[y],normal:gl.clone()})}}for(const _ in h)if(h[_]){const{index0:g,index1:m}=h[_];Vr.fromBufferAttribute(a,g),Wr.fromBufferAttribute(a,m),f.push(Vr.x,Vr.y,Vr.z),f.push(Wr.x,Wr.y,Wr.z)}this.setAttribute("position",new Ye(f,3))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}}class qs extends su{constructor(e=1,t=0){const n=[1,0,0,-1,0,0,0,1,0,0,-1,0,0,0,1,0,0,-1],s=[0,2,4,0,4,3,0,3,5,0,5,2,1,2,5,1,5,3,1,3,4,1,4,2];super(n,s,e,t),this.type="OctahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new qs(e.radius,e.detail)}}class xs extends vt{constructor(e=1,t=1,n=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:s};const o=e/2,r=t/2,a=Math.floor(n),l=Math.floor(s),c=a+1,u=l+1,d=e/a,h=t/l,f=[],_=[],g=[],m=[];for(let p=0;p<u;p++){const w=p*h-r;for(let y=0;y<c;y++){const x=y*d-o;_.push(x,-w,0),g.push(0,0,1),m.push(y/a),m.push(1-p/l)}}for(let p=0;p<l;p++)for(let w=0;w<a;w++){const y=w+c*p,x=w+c*(p+1),A=w+1+c*(p+1),T=w+1+c*p;f.push(y,x,T),f.push(x,A,T)}this.setIndex(f),this.setAttribute("position",new Ye(_,3)),this.setAttribute("normal",new Ye(g,3)),this.setAttribute("uv",new Ye(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new xs(e.width,e.height,e.widthSegments,e.heightSegments)}}class Xi extends vt{constructor(e=1,t=32,n=16,s=0,o=Math.PI*2,r=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:n,phiStart:s,phiLength:o,thetaStart:r,thetaLength:a},t=Math.max(3,Math.floor(t)),n=Math.max(2,Math.floor(n));const l=Math.min(r+a,Math.PI);let c=0;const u=[],d=new b,h=new b,f=[],_=[],g=[],m=[];for(let p=0;p<=n;p++){const w=[],y=p/n;let x=0;p===0&&r===0?x=.5/t:p===n&&l===Math.PI&&(x=-.5/t);for(let A=0;A<=t;A++){const T=A/t;d.x=-e*Math.cos(s+T*o)*Math.sin(r+y*a),d.y=e*Math.cos(r+y*a),d.z=e*Math.sin(s+T*o)*Math.sin(r+y*a),_.push(d.x,d.y,d.z),h.copy(d).normalize(),g.push(h.x,h.y,h.z),m.push(T+x,1-y),w.push(c++)}u.push(w)}for(let p=0;p<n;p++)for(let w=0;w<t;w++){const y=u[p][w+1],x=u[p][w],A=u[p+1][w],T=u[p+1][w+1];(p!==0||r>0)&&f.push(y,x,T),(p!==n-1||l<Math.PI)&&f.push(x,A,T)}this.setIndex(f),this.setAttribute("position",new Ye(_,3)),this.setAttribute("normal",new Ye(g,3)),this.setAttribute("uv",new Ye(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Xi(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}class us extends vt{constructor(e=1,t=.4,n=12,s=48,o=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:e,tube:t,radialSegments:n,tubularSegments:s,arc:o},n=Math.floor(n),s=Math.floor(s);const r=[],a=[],l=[],c=[],u=new b,d=new b,h=new b;for(let f=0;f<=n;f++)for(let _=0;_<=s;_++){const g=_/s*o,m=f/n*Math.PI*2;d.x=(e+t*Math.cos(m))*Math.cos(g),d.y=(e+t*Math.cos(m))*Math.sin(g),d.z=t*Math.sin(m),a.push(d.x,d.y,d.z),u.x=e*Math.cos(g),u.y=e*Math.sin(g),h.subVectors(d,u).normalize(),l.push(h.x,h.y,h.z),c.push(_/s),c.push(f/n)}for(let f=1;f<=n;f++)for(let _=1;_<=s;_++){const g=(s+1)*f+_-1,m=(s+1)*(f-1)+_-1,p=(s+1)*(f-1)+_,w=(s+1)*f+_;r.push(g,m,w),r.push(m,p,w)}this.setIndex(r),this.setAttribute("position",new Ye(a,3)),this.setAttribute("normal",new Ye(l,3)),this.setAttribute("uv",new Ye(c,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new us(e.radius,e.tube,e.radialSegments,e.tubularSegments,e.arc)}}class _g extends vt{constructor(e=null){if(super(),this.type="WireframeGeometry",this.parameters={geometry:e},e!==null){const t=[],n=new Set,s=new b,o=new b;if(e.index!==null){const r=e.attributes.position,a=e.index;let l=e.groups;l.length===0&&(l=[{start:0,count:a.count,materialIndex:0}]);for(let c=0,u=l.length;c<u;++c){const d=l[c],h=d.start,f=d.count;for(let _=h,g=h+f;_<g;_+=3)for(let m=0;m<3;m++){const p=a.getX(_+m),w=a.getX(_+(m+1)%3);s.fromBufferAttribute(r,p),o.fromBufferAttribute(r,w),gd(s,o,n)===!0&&(t.push(s.x,s.y,s.z),t.push(o.x,o.y,o.z))}}}else{const r=e.attributes.position;for(let a=0,l=r.count/3;a<l;a++)for(let c=0;c<3;c++){const u=3*a+c,d=3*a+(c+1)%3;s.fromBufferAttribute(r,u),o.fromBufferAttribute(r,d),gd(s,o,n)===!0&&(t.push(s.x,s.y,s.z),t.push(o.x,o.y,o.z))}}this.setAttribute("position",new Ye(t,3))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}}function gd(i,e,t){const n=`${i.x},${i.y},${i.z}-${e.x},${e.y},${e.z}`,s=`${e.x},${e.y},${e.z}-${i.x},${i.y},${i.z}`;return t.has(n)===!0||t.has(s)===!0?!1:(t.add(n),t.add(s),!0)}class So extends _n{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new oe(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new oe(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=za,this.normalScale=new ge(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Bt,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class ni extends So{constructor(e){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new ge(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return He(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(t){this.ior=(1+.4*t)/(1-.4*t)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new oe(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new oe(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new oe(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._dispersion=0,this._iridescence=0,this._sheen=0,this._transmission=0,this.setValues(e)}get anisotropy(){return this._anisotropy}set anisotropy(e){this._anisotropy>0!=e>0&&this.version++,this._anisotropy=e}get clearcoat(){return this._clearcoat}set clearcoat(e){this._clearcoat>0!=e>0&&this.version++,this._clearcoat=e}get iridescence(){return this._iridescence}set iridescence(e){this._iridescence>0!=e>0&&this.version++,this._iridescence=e}get dispersion(){return this._dispersion}set dispersion(e){this._dispersion>0!=e>0&&this.version++,this._dispersion=e}get sheen(){return this._sheen}set sheen(e){this._sheen>0!=e>0&&this.version++,this._sheen=e}get transmission(){return this._transmission}set transmission(e){this._transmission>0!=e>0&&this.version++,this._transmission=e}copy(e){return super.copy(e),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=e.anisotropy,this.anisotropyRotation=e.anisotropyRotation,this.anisotropyMap=e.anisotropyMap,this.clearcoat=e.clearcoat,this.clearcoatMap=e.clearcoatMap,this.clearcoatRoughness=e.clearcoatRoughness,this.clearcoatRoughnessMap=e.clearcoatRoughnessMap,this.clearcoatNormalMap=e.clearcoatNormalMap,this.clearcoatNormalScale.copy(e.clearcoatNormalScale),this.dispersion=e.dispersion,this.ior=e.ior,this.iridescence=e.iridescence,this.iridescenceMap=e.iridescenceMap,this.iridescenceIOR=e.iridescenceIOR,this.iridescenceThicknessRange=[...e.iridescenceThicknessRange],this.iridescenceThicknessMap=e.iridescenceThicknessMap,this.sheen=e.sheen,this.sheenColor.copy(e.sheenColor),this.sheenColorMap=e.sheenColorMap,this.sheenRoughness=e.sheenRoughness,this.sheenRoughnessMap=e.sheenRoughnessMap,this.transmission=e.transmission,this.transmissionMap=e.transmissionMap,this.thickness=e.thickness,this.thicknessMap=e.thicknessMap,this.attenuationDistance=e.attenuationDistance,this.attenuationColor.copy(e.attenuationColor),this.specularIntensity=e.specularIntensity,this.specularIntensityMap=e.specularIntensityMap,this.specularColor.copy(e.specularColor),this.specularColorMap=e.specularColorMap,this}}class _f extends _n{constructor(e){super(),this.isMeshPhongMaterial=!0,this.type="MeshPhongMaterial",this.color=new oe(16777215),this.specular=new oe(1118481),this.shininess=30,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new oe(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=za,this.normalScale=new ge(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Bt,this.combine=qc,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.specular.copy(e.specular),this.shininess=e.shininess,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class vg extends _n{constructor(e){super(),this.isMeshNormalMaterial=!0,this.type="MeshNormalMaterial",this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=za,this.normalScale=new ge(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.flatShading=!1,this.setValues(e)}copy(e){return super.copy(e),this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.flatShading=e.flatShading,this}}class vf extends _n{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=hm,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class xg extends _n{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}class yg extends ms{constructor(e){super(),this.isLineDashedMaterial=!0,this.type="LineDashedMaterial",this.scale=1,this.dashSize=3,this.gapSize=1,this.setValues(e)}copy(e){return super.copy(e),this.scale=e.scale,this.dashSize=e.dashSize,this.gapSize=e.gapSize,this}}function qr(i,e,t){return!i||!t&&i.constructor===e?i:typeof e.BYTES_PER_ELEMENT=="number"?new e(i):Array.prototype.slice.call(i)}function wg(i){return ArrayBuffer.isView(i)&&!(i instanceof DataView)}function Sg(i){function e(s,o){return i[s]-i[o]}const t=i.length,n=new Array(t);for(let s=0;s!==t;++s)n[s]=s;return n.sort(e),n}function _d(i,e,t){const n=i.length,s=new i.constructor(n);for(let o=0,r=0;r!==n;++o){const a=t[o]*e;for(let l=0;l!==e;++l)s[r++]=i[a+l]}return s}function xf(i,e,t,n){let s=1,o=i[0];for(;o!==void 0&&o[n]===void 0;)o=i[s++];if(o===void 0)return;let r=o[n];if(r!==void 0)if(Array.isArray(r))do r=o[n],r!==void 0&&(e.push(o.time),t.push.apply(t,r)),o=i[s++];while(o!==void 0);else if(r.toArray!==void 0)do r=o[n],r!==void 0&&(e.push(o.time),r.toArray(t,t.length)),o=i[s++];while(o!==void 0);else do r=o[n],r!==void 0&&(e.push(o.time),t.push(r)),o=i[s++];while(o!==void 0)}class fr{constructor(e,t,n,s){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=s!==void 0?s:new t.constructor(n),this.sampleValues=t,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(e){const t=this.parameterPositions;let n=this._cachedIndex,s=t[n],o=t[n-1];n:{e:{let r;t:{i:if(!(e<s)){for(let a=n+2;;){if(s===void 0){if(e<o)break i;return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===a)break;if(o=s,s=t[++n],e<s)break e}r=t.length;break t}if(!(e>=o)){const a=t[1];e<a&&(n=2,o=a);for(let l=n-2;;){if(o===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===l)break;if(s=o,o=t[--n-1],e>=o)break e}r=n,n=0;break t}break n}for(;n<r;){const a=n+r>>>1;e<t[a]?r=a:n=a+1}if(s=t[n],o=t[n-1],o===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(s===void 0)return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,o,s)}return this.interpolate_(n,o,e,s)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){const t=this.resultBuffer,n=this.sampleValues,s=this.valueSize,o=e*s;for(let r=0;r!==s;++r)t[r]=n[o+r];return t}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}}class Mg extends fr{constructor(e,t,n,s){super(e,t,n,s),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:Iu,endingEnd:Iu}}intervalChanged_(e,t,n){const s=this.parameterPositions;let o=e-2,r=e+1,a=s[o],l=s[r];if(a===void 0)switch(this.getSettings_().endingStart){case Nu:o=e,a=2*t-n;break;case Ou:o=s.length-2,a=t+s[o]-s[o+1];break;default:o=e,a=n}if(l===void 0)switch(this.getSettings_().endingEnd){case Nu:r=e,l=2*n-t;break;case Ou:r=1,l=n+s[1]-s[0];break;default:r=e-1,l=t}const c=(n-t)*.5,u=this.valueSize;this._weightPrev=c/(t-a),this._weightNext=c/(l-n),this._offsetPrev=o*u,this._offsetNext=r*u}interpolate_(e,t,n,s){const o=this.resultBuffer,r=this.sampleValues,a=this.valueSize,l=e*a,c=l-a,u=this._offsetPrev,d=this._offsetNext,h=this._weightPrev,f=this._weightNext,_=(n-t)/(s-t),g=_*_,m=g*_,p=-h*m+2*h*g-h*_,w=(1+h)*m+(-1.5-2*h)*g+(-.5+h)*_+1,y=(-1-f)*m+(1.5+f)*g+.5*_,x=f*m-f*g;for(let A=0;A!==a;++A)o[A]=p*r[u+A]+w*r[c+A]+y*r[l+A]+x*r[d+A];return o}}class Eg extends fr{constructor(e,t,n,s){super(e,t,n,s)}interpolate_(e,t,n,s){const o=this.resultBuffer,r=this.sampleValues,a=this.valueSize,l=e*a,c=l-a,u=(n-t)/(s-t),d=1-u;for(let h=0;h!==a;++h)o[h]=r[c+h]*d+r[l+h]*u;return o}}class bg extends fr{constructor(e,t,n,s){super(e,t,n,s)}interpolate_(e){return this.copySampleValue_(e-1)}}class ii{constructor(e,t,n,s){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=qr(t,this.TimeBufferType),this.values=qr(n,this.ValueBufferType),this.setInterpolation(s||this.DefaultInterpolation)}static toJSON(e){const t=e.constructor;let n;if(t.toJSON!==this.toJSON)n=t.toJSON(e);else{n={name:e.name,times:qr(e.times,Array),values:qr(e.values,Array)};const s=e.getInterpolation();s!==e.DefaultInterpolation&&(n.interpolation=s)}return n.type=e.ValueTypeName,n}InterpolantFactoryMethodDiscrete(e){return new bg(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new Eg(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new Mg(this.times,this.values,this.getValueSize(),e)}setInterpolation(e){let t;switch(e){case ir:t=this.InterpolantFactoryMethodDiscrete;break;case sr:t=this.InterpolantFactoryMethodLinear;break;case qa:t=this.InterpolantFactoryMethodSmooth;break}if(t===void 0){const n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return console.warn("THREE.KeyframeTrack:",n),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return ir;case this.InterpolantFactoryMethodLinear:return sr;case this.InterpolantFactoryMethodSmooth:return qa}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){const t=this.times;for(let n=0,s=t.length;n!==s;++n)t[n]+=e}return this}scale(e){if(e!==1){const t=this.times;for(let n=0,s=t.length;n!==s;++n)t[n]*=e}return this}trim(e,t){const n=this.times,s=n.length;let o=0,r=s-1;for(;o!==s&&n[o]<e;)++o;for(;r!==-1&&n[r]>t;)--r;if(++r,o!==0||r!==s){o>=r&&(r=Math.max(r,1),o=r-1);const a=this.getValueSize();this.times=n.slice(o,r),this.values=this.values.slice(o*a,r*a)}return this}validate(){let e=!0;const t=this.getValueSize();t-Math.floor(t)!==0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),e=!1);const n=this.times,s=this.values,o=n.length;o===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),e=!1);let r=null;for(let a=0;a!==o;a++){const l=n[a];if(typeof l=="number"&&isNaN(l)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,a,l),e=!1;break}if(r!==null&&r>l){console.error("THREE.KeyframeTrack: Out of order keys.",this,a,l,r),e=!1;break}r=l}if(s!==void 0&&wg(s))for(let a=0,l=s.length;a!==l;++a){const c=s[a];if(isNaN(c)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,a,c),e=!1;break}}return e}optimize(){const e=this.times.slice(),t=this.values.slice(),n=this.getValueSize(),s=this.getInterpolation()===qa,o=e.length-1;let r=1;for(let a=1;a<o;++a){let l=!1;const c=e[a],u=e[a+1];if(c!==u&&(a!==1||c!==e[0]))if(s)l=!0;else{const d=a*n,h=d-n,f=d+n;for(let _=0;_!==n;++_){const g=t[d+_];if(g!==t[h+_]||g!==t[f+_]){l=!0;break}}}if(l){if(a!==r){e[r]=e[a];const d=a*n,h=r*n;for(let f=0;f!==n;++f)t[h+f]=t[d+f]}++r}}if(o>0){e[r]=e[o];for(let a=o*n,l=r*n,c=0;c!==n;++c)t[l+c]=t[a+c];++r}return r!==e.length?(this.times=e.slice(0,r),this.values=t.slice(0,r*n)):(this.times=e,this.values=t),this}clone(){const e=this.times.slice(),t=this.values.slice(),n=this.constructor,s=new n(this.name,e,t);return s.createInterpolant=this.createInterpolant,s}}ii.prototype.TimeBufferType=Float32Array;ii.prototype.ValueBufferType=Float32Array;ii.prototype.DefaultInterpolation=sr;class Mo extends ii{constructor(e,t,n){super(e,t,n)}}Mo.prototype.ValueTypeName="bool";Mo.prototype.ValueBufferType=Array;Mo.prototype.DefaultInterpolation=ir;Mo.prototype.InterpolantFactoryMethodLinear=void 0;Mo.prototype.InterpolantFactoryMethodSmooth=void 0;class yf extends ii{}yf.prototype.ValueTypeName="color";class _o extends ii{}_o.prototype.ValueTypeName="number";class Tg extends fr{constructor(e,t,n,s){super(e,t,n,s)}interpolate_(e,t,n,s){const o=this.resultBuffer,r=this.sampleValues,a=this.valueSize,l=(n-t)/(s-t);let c=e*a;for(let u=c+a;c!==u;c+=4)ft.slerpFlat(o,0,r,c-a,r,c,l);return o}}class vo extends ii{InterpolantFactoryMethodLinear(e){return new Tg(this.times,this.values,this.getValueSize(),e)}}vo.prototype.ValueTypeName="quaternion";vo.prototype.InterpolantFactoryMethodSmooth=void 0;class Eo extends ii{constructor(e,t,n){super(e,t,n)}}Eo.prototype.ValueTypeName="string";Eo.prototype.ValueBufferType=Array;Eo.prototype.DefaultInterpolation=ir;Eo.prototype.InterpolantFactoryMethodLinear=void 0;Eo.prototype.InterpolantFactoryMethodSmooth=void 0;class xo extends ii{}xo.prototype.ValueTypeName="vector";class Ag{constructor(e="",t=-1,n=[],s=um){this.name=e,this.tracks=n,this.duration=t,this.blendMode=s,this.uuid=$n(),this.duration<0&&this.resetDuration()}static parse(e){const t=[],n=e.tracks,s=1/(e.fps||1);for(let r=0,a=n.length;r!==a;++r)t.push(Rg(n[r]).scale(s));const o=new this(e.name,e.duration,t,e.blendMode);return o.uuid=e.uuid,o}static toJSON(e){const t=[],n=e.tracks,s={name:e.name,duration:e.duration,tracks:t,uuid:e.uuid,blendMode:e.blendMode};for(let o=0,r=n.length;o!==r;++o)t.push(ii.toJSON(n[o]));return s}static CreateFromMorphTargetSequence(e,t,n,s){const o=t.length,r=[];for(let a=0;a<o;a++){let l=[],c=[];l.push((a+o-1)%o,a,(a+1)%o),c.push(0,1,0);const u=Sg(l);l=_d(l,1,u),c=_d(c,1,u),!s&&l[0]===0&&(l.push(o),c.push(c[0])),r.push(new _o(".morphTargetInfluences["+t[a].name+"]",l,c).scale(1/n))}return new this(e,-1,r)}static findByName(e,t){let n=e;if(!Array.isArray(e)){const s=e;n=s.geometry&&s.geometry.animations||s.animations}for(let s=0;s<n.length;s++)if(n[s].name===t)return n[s];return null}static CreateClipsFromMorphTargetSequences(e,t,n){const s={},o=/^([\w-]*?)([\d]+)$/;for(let a=0,l=e.length;a<l;a++){const c=e[a],u=c.name.match(o);if(u&&u.length>1){const d=u[1];let h=s[d];h||(s[d]=h=[]),h.push(c)}}const r=[];for(const a in s)r.push(this.CreateFromMorphTargetSequence(a,s[a],t,n));return r}static parseAnimation(e,t){if(!e)return console.error("THREE.AnimationClip: No animation in JSONLoader data."),null;const n=function(d,h,f,_,g){if(f.length!==0){const m=[],p=[];xf(f,m,p,_),m.length!==0&&g.push(new d(h,m,p))}},s=[],o=e.name||"default",r=e.fps||30,a=e.blendMode;let l=e.length||-1;const c=e.hierarchy||[];for(let d=0;d<c.length;d++){const h=c[d].keys;if(!(!h||h.length===0))if(h[0].morphTargets){const f={};let _;for(_=0;_<h.length;_++)if(h[_].morphTargets)for(let g=0;g<h[_].morphTargets.length;g++)f[h[_].morphTargets[g]]=-1;for(const g in f){const m=[],p=[];for(let w=0;w!==h[_].morphTargets.length;++w){const y=h[_];m.push(y.time),p.push(y.morphTarget===g?1:0)}s.push(new _o(".morphTargetInfluence["+g+"]",m,p))}l=f.length*r}else{const f=".bones["+t[d].name+"]";n(xo,f+".position",h,"pos",s),n(vo,f+".quaternion",h,"rot",s),n(xo,f+".scale",h,"scl",s)}}return s.length===0?null:new this(o,l,s,a)}resetDuration(){const e=this.tracks;let t=0;for(let n=0,s=e.length;n!==s;++n){const o=this.tracks[n];t=Math.max(t,o.times[o.times.length-1])}return this.duration=t,this}trim(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].trim(0,this.duration);return this}validate(){let e=!0;for(let t=0;t<this.tracks.length;t++)e=e&&this.tracks[t].validate();return e}optimize(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].optimize();return this}clone(){const e=[];for(let t=0;t<this.tracks.length;t++)e.push(this.tracks[t].clone());return new this.constructor(this.name,this.duration,e,this.blendMode)}toJSON(){return this.constructor.toJSON(this)}}function Cg(i){switch(i.toLowerCase()){case"scalar":case"double":case"float":case"number":case"integer":return _o;case"vector":case"vector2":case"vector3":case"vector4":return xo;case"color":return yf;case"quaternion":return vo;case"bool":case"boolean":return Mo;case"string":return Eo}throw new Error("THREE.KeyframeTrack: Unsupported typeName: "+i)}function Rg(i){if(i.type===void 0)throw new Error("THREE.KeyframeTrack: track type undefined, can not parse");const e=Cg(i.type);if(i.times===void 0){const t=[],n=[];xf(i.keys,t,n,"value"),i.times=t,i.values=n}return e.parse!==void 0?e.parse(i):new e(i.name,i.times,i.values,i.interpolation)}const Bi={enabled:!1,files:{},add:function(i,e){this.enabled!==!1&&(this.files[i]=e)},get:function(i){if(this.enabled!==!1)return this.files[i]},remove:function(i){delete this.files[i]},clear:function(){this.files={}}};class Pg{constructor(e,t,n){const s=this;let o=!1,r=0,a=0,l;const c=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=n,this.itemStart=function(u){a++,o===!1&&s.onStart!==void 0&&s.onStart(u,r,a),o=!0},this.itemEnd=function(u){r++,s.onProgress!==void 0&&s.onProgress(u,r,a),r===a&&(o=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(u){s.onError!==void 0&&s.onError(u)},this.resolveURL=function(u){return l?l(u):u},this.setURLModifier=function(u){return l=u,this},this.addHandler=function(u,d){return c.push(u,d),this},this.removeHandler=function(u){const d=c.indexOf(u);return d!==-1&&c.splice(d,2),this},this.getHandler=function(u){for(let d=0,h=c.length;d<h;d+=2){const f=c[d],_=c[d+1];if(f.global&&(f.lastIndex=0),f.test(u))return _}return null}}}const Dg=new Pg;class Es{constructor(e){this.manager=e!==void 0?e:Dg,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,t){const n=this;return new Promise(function(s,o){n.load(e,s,t,o)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}}Es.DEFAULT_MATERIAL_NAME="__DEFAULT";const ui={};class Lg extends Error{constructor(e,t){super(e),this.response=t}}class ru extends Es{constructor(e){super(e)}load(e,t,n,s){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const o=Bi.get(e);if(o!==void 0)return this.manager.itemStart(e),setTimeout(()=>{t&&t(o),this.manager.itemEnd(e)},0),o;if(ui[e]!==void 0){ui[e].push({onLoad:t,onProgress:n,onError:s});return}ui[e]=[],ui[e].push({onLoad:t,onProgress:n,onError:s});const r=new Request(e,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin"}),a=this.mimeType,l=this.responseType;fetch(r).then(c=>{if(c.status===200||c.status===0){if(c.status===0&&console.warn("THREE.FileLoader: HTTP Status 0 received."),typeof ReadableStream>"u"||c.body===void 0||c.body.getReader===void 0)return c;const u=ui[e],d=c.body.getReader(),h=c.headers.get("X-File-Size")||c.headers.get("Content-Length"),f=h?parseInt(h):0,_=f!==0;let g=0;const m=new ReadableStream({start(p){w();function w(){d.read().then(({done:y,value:x})=>{if(y)p.close();else{g+=x.byteLength;const A=new ProgressEvent("progress",{lengthComputable:_,loaded:g,total:f});for(let T=0,P=u.length;T<P;T++){const L=u[T];L.onProgress&&L.onProgress(A)}p.enqueue(x),w()}},y=>{p.error(y)})}}});return new Response(m)}else throw new Lg(`fetch for "${c.url}" responded with ${c.status}: ${c.statusText}`,c)}).then(c=>{switch(l){case"arraybuffer":return c.arrayBuffer();case"blob":return c.blob();case"document":return c.text().then(u=>new DOMParser().parseFromString(u,a));case"json":return c.json();default:if(a===void 0)return c.text();{const d=/charset="?([^;"\s]*)"?/i.exec(a),h=d&&d[1]?d[1].toLowerCase():void 0,f=new TextDecoder(h);return c.arrayBuffer().then(_=>f.decode(_))}}}).then(c=>{Bi.add(e,c);const u=ui[e];delete ui[e];for(let d=0,h=u.length;d<h;d++){const f=u[d];f.onLoad&&f.onLoad(c)}}).catch(c=>{const u=ui[e];if(u===void 0)throw this.manager.itemError(e),c;delete ui[e];for(let d=0,h=u.length;d<h;d++){const f=u[d];f.onError&&f.onError(c)}this.manager.itemError(e)}).finally(()=>{this.manager.itemEnd(e)}),this.manager.itemStart(e)}setResponseType(e){return this.responseType=e,this}setMimeType(e){return this.mimeType=e,this}}class Ig extends Es{constructor(e){super(e)}load(e,t,n,s){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const o=this,r=Bi.get(e);if(r!==void 0)return o.manager.itemStart(e),setTimeout(function(){t&&t(r),o.manager.itemEnd(e)},0),r;const a=or("img");function l(){u(),Bi.add(e,this),t&&t(this),o.manager.itemEnd(e)}function c(d){u(),s&&s(d),o.manager.itemError(e),o.manager.itemEnd(e)}function u(){a.removeEventListener("load",l,!1),a.removeEventListener("error",c,!1)}return a.addEventListener("load",l,!1),a.addEventListener("error",c,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(a.crossOrigin=this.crossOrigin),o.manager.itemStart(e),a.src=e,a}}class Ng extends Es{constructor(e){super(e)}load(e,t,n,s){const o=new Ft,r=new Ig(this.manager);return r.setCrossOrigin(this.crossOrigin),r.setPath(this.path),r.load(e,function(a){o.image=a,o.needsUpdate=!0,t!==void 0&&t(o)},n,s),o}}class ka extends pt{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new oe(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(t.object.target=this.target.uuid),t}}const _l=new Le,vd=new b,xd=new b;class au{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new ge(512,512),this.map=null,this.mapPass=null,this.matrix=new Le,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new iu,this._frameExtents=new ge(1,1),this._viewportCount=1,this._viewports=[new We(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera,n=this.matrix;vd.setFromMatrixPosition(e.matrixWorld),t.position.copy(vd),xd.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(xd),t.updateMatrixWorld(),_l.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(_l),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(_l)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}class Og extends au{constructor(){super(new sn(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1}updateMatrices(e){const t=this.camera,n=mo*2*e.angle*this.focus,s=this.mapSize.width/this.mapSize.height,o=e.distance||t.far;(n!==t.fov||s!==t.aspect||o!==t.far)&&(t.fov=n,t.aspect=s,t.far=o,t.updateProjectionMatrix()),super.updateMatrices(e)}copy(e){return super.copy(e),this.focus=e.focus,this}}class Ug extends ka{constructor(e,t,n=0,s=Math.PI/3,o=0,r=2){super(e,t),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(pt.DEFAULT_UP),this.updateMatrix(),this.target=new pt,this.distance=n,this.angle=s,this.penumbra=o,this.decay=r,this.map=null,this.shadow=new Og}get power(){return this.intensity*Math.PI}set power(e){this.intensity=e/Math.PI}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.angle=e.angle,this.penumbra=e.penumbra,this.decay=e.decay,this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}const yd=new Le,Oo=new b,vl=new b;class Fg extends au{constructor(){super(new sn(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new ge(4,2),this._viewportCount=6,this._viewports=[new We(2,1,1,1),new We(0,1,1,1),new We(3,1,1,1),new We(1,1,1,1),new We(3,0,1,1),new We(1,0,1,1)],this._cubeDirections=[new b(1,0,0),new b(-1,0,0),new b(0,0,1),new b(0,0,-1),new b(0,1,0),new b(0,-1,0)],this._cubeUps=[new b(0,1,0),new b(0,1,0),new b(0,1,0),new b(0,1,0),new b(0,0,1),new b(0,0,-1)]}updateMatrices(e,t=0){const n=this.camera,s=this.matrix,o=e.distance||n.far;o!==n.far&&(n.far=o,n.updateProjectionMatrix()),Oo.setFromMatrixPosition(e.matrixWorld),n.position.copy(Oo),vl.copy(n.position),vl.add(this._cubeDirections[t]),n.up.copy(this._cubeUps[t]),n.lookAt(vl),n.updateMatrixWorld(),s.makeTranslation(-Oo.x,-Oo.y,-Oo.z),yd.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(yd)}}class Bg extends ka{constructor(e,t,n=0,s=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=s,this.shadow=new Fg}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}}class pr extends df{constructor(e=-1,t=1,n=1,s=-1,o=.1,r=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=s,this.near=o,this.far=r,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,s,o,r){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=s,this.view.width=o,this.view.height=r,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,s=(this.top+this.bottom)/2;let o=n-e,r=n+e,a=s+t,l=s-t;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;o+=c*this.view.offsetX,r=o+c*this.view.width,a-=u*this.view.offsetY,l=a-u*this.view.height}this.projectionMatrix.makeOrthographic(o,r,a,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}class zg extends au{constructor(){super(new pr(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class Ic extends ka{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(pt.DEFAULT_UP),this.updateMatrix(),this.target=new pt,this.shadow=new zg}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}class kg extends ka{constructor(e,t){super(e,t),this.isAmbientLight=!0,this.type="AmbientLight"}}class Zo{static decodeText(e){if(console.warn("THREE.LoaderUtils: decodeText() has been deprecated with r165 and will be removed with r175. Use TextDecoder instead."),typeof TextDecoder<"u")return new TextDecoder().decode(e);let t="";for(let n=0,s=e.length;n<s;n++)t+=String.fromCharCode(e[n]);try{return decodeURIComponent(escape(t))}catch{return t}}static extractUrlBase(e){const t=e.lastIndexOf("/");return t===-1?"./":e.slice(0,t+1)}static resolveURL(e,t){return typeof e!="string"||e===""?"":(/^https?:\/\//i.test(t)&&/^\//.test(e)&&(t=t.replace(/(^https?:\/\/[^\/]+).*/i,"$1")),/^(https?:)?\/\//i.test(e)||/^data:.*,.*$/i.test(e)||/^blob:.*$/i.test(e)?e:t+e)}}class Hg extends vt{constructor(){super(),this.isInstancedBufferGeometry=!0,this.type="InstancedBufferGeometry",this.instanceCount=1/0}copy(e){return super.copy(e),this.instanceCount=e.instanceCount,this}toJSON(){const e=super.toJSON();return e.instanceCount=this.instanceCount,e.isInstancedBufferGeometry=!0,e}}class Gg extends Es{constructor(e){super(e),this.isImageBitmapLoader=!0,typeof createImageBitmap>"u"&&console.warn("THREE.ImageBitmapLoader: createImageBitmap() not supported."),typeof fetch>"u"&&console.warn("THREE.ImageBitmapLoader: fetch() not supported."),this.options={premultiplyAlpha:"none"}}setOptions(e){return this.options=e,this}load(e,t,n,s){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const o=this,r=Bi.get(e);if(r!==void 0){if(o.manager.itemStart(e),r.then){r.then(c=>{t&&t(c),o.manager.itemEnd(e)}).catch(c=>{s&&s(c)});return}return setTimeout(function(){t&&t(r),o.manager.itemEnd(e)},0),r}const a={};a.credentials=this.crossOrigin==="anonymous"?"same-origin":"include",a.headers=this.requestHeader;const l=fetch(e,a).then(function(c){return c.blob()}).then(function(c){return createImageBitmap(c,Object.assign(o.options,{colorSpaceConversion:"none"}))}).then(function(c){return Bi.add(e,c),t&&t(c),o.manager.itemEnd(e),c}).catch(function(c){s&&s(c),Bi.remove(e),o.manager.itemError(e),o.manager.itemEnd(e)});Bi.add(e,l),o.manager.itemStart(e)}}class Vg extends sn{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}class Wg{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=wd(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const t=wd();e=(t-this.oldTime)/1e3,this.oldTime=t,this.elapsedTime+=e}return e}}function wd(){return performance.now()}const lu="\\[\\]\\.:\\/",Xg=new RegExp("["+lu+"]","g"),cu="[^"+lu+"]",qg="[^"+lu.replace("\\.","")+"]",jg=/((?:WC+[\/:])*)/.source.replace("WC",cu),Yg=/(WCOD+)?/.source.replace("WCOD",qg),$g=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",cu),Kg=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",cu),Zg=new RegExp("^"+jg+Yg+$g+Kg+"$"),Jg=["material","materials","bones","map"];class Qg{constructor(e,t,n){const s=n||lt.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,s)}getValue(e,t){this.bind();const n=this._targetGroup.nCachedObjects_,s=this._bindings[n];s!==void 0&&s.getValue(e,t)}setValue(e,t){const n=this._bindings;for(let s=this._targetGroup.nCachedObjects_,o=n.length;s!==o;++s)n[s].setValue(e,t)}bind(){const e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].bind()}unbind(){const e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].unbind()}}class lt{constructor(e,t,n){this.path=t,this.parsedPath=n||lt.parseTrackName(t),this.node=lt.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,n){return e&&e.isAnimationObjectGroup?new lt.Composite(e,t,n):new lt(e,t,n)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(Xg,"")}static parseTrackName(e){const t=Zg.exec(e);if(t===null)throw new Error("PropertyBinding: Cannot parse trackName: "+e);const n={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},s=n.nodeName&&n.nodeName.lastIndexOf(".");if(s!==void 0&&s!==-1){const o=n.nodeName.substring(s+1);Jg.indexOf(o)!==-1&&(n.nodeName=n.nodeName.substring(0,s),n.objectName=o)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+e);return n}static findNode(e,t){if(t===void 0||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){const n=e.skeleton.getBoneByName(t);if(n!==void 0)return n}if(e.children){const n=function(o){for(let r=0;r<o.length;r++){const a=o[r];if(a.name===t||a.uuid===t)return a;const l=n(a.children);if(l)return l}return null},s=n(e.children);if(s)return s}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){const n=this.resolvedProperty;for(let s=0,o=n.length;s!==o;++s)e[t++]=n[s]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){const n=this.resolvedProperty;for(let s=0,o=n.length;s!==o;++s)n[s]=e[t++]}_setValue_array_setNeedsUpdate(e,t){const n=this.resolvedProperty;for(let s=0,o=n.length;s!==o;++s)n[s]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){const n=this.resolvedProperty;for(let s=0,o=n.length;s!==o;++s)n[s]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node;const t=this.parsedPath,n=t.objectName,s=t.propertyName;let o=t.propertyIndex;if(e||(e=lt.findNode(this.rootNode,t.nodeName),this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){console.warn("THREE.PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let c=t.objectIndex;switch(n){case"materials":if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let u=0;u<e.length;u++)if(e[u].name===c){c=u;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.map){console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}e=e.material.map;break;default:if(e[n]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[n]}if(c!==void 0){if(e[c]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[c]}}const r=e[s];if(r===void 0){const c=t.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+c+"."+s+" but it wasn't found.",e);return}let a=this.Versioning.None;this.targetObject=e,e.needsUpdate!==void 0?a=this.Versioning.NeedsUpdate:e.matrixWorldNeedsUpdate!==void 0&&(a=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(o!==void 0){if(s==="morphTargetInfluences"){if(!e.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!e.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[o]!==void 0&&(o=e.morphTargetDictionary[o])}l=this.BindingType.ArrayElement,this.resolvedProperty=r,this.propertyIndex=o}else r.fromArray!==void 0&&r.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=r):Array.isArray(r)?(l=this.BindingType.EntireArray,this.resolvedProperty=r):this.propertyName=s;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][a]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}}lt.Composite=Qg;lt.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};lt.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};lt.prototype.GetterByBindingType=[lt.prototype._getValue_direct,lt.prototype._getValue_array,lt.prototype._getValue_arrayElement,lt.prototype._getValue_toArray];lt.prototype.SetterByBindingTypeAndVersioning=[[lt.prototype._setValue_direct,lt.prototype._setValue_direct_setNeedsUpdate,lt.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[lt.prototype._setValue_array,lt.prototype._setValue_array_setNeedsUpdate,lt.prototype._setValue_array_setMatrixWorldNeedsUpdate],[lt.prototype._setValue_arrayElement,lt.prototype._setValue_arrayElement_setNeedsUpdate,lt.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[lt.prototype._setValue_fromArray,lt.prototype._setValue_fromArray_setNeedsUpdate,lt.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];class no extends ff{constructor(e,t,n=1){super(e,t),this.isInstancedInterleavedBuffer=!0,this.meshPerAttribute=n}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}clone(e){const t=super.clone(e);return t.meshPerAttribute=this.meshPerAttribute,t}toJSON(e){const t=super.toJSON(e);return t.isInstancedInterleavedBuffer=!0,t.meshPerAttribute=this.meshPerAttribute,t}}const Sd=new Le;class wf{constructor(e,t,n=0,s=1/0){this.ray=new wo(e,t),this.near=n,this.far=s,this.camera=null,this.layers=new tu,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,t){this.ray.set(e,t)}setFromCamera(e,t){t.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(t).sub(this.ray.origin).normalize(),this.camera=t):t.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,(t.near+t.far)/(t.near-t.far)).unproject(t),this.ray.direction.set(0,0,-1).transformDirection(t.matrixWorld),this.camera=t):console.error("THREE.Raycaster: Unsupported camera type: "+t.type)}setFromXRController(e){return Sd.identity().extractRotation(e.matrixWorld),this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(Sd),this}intersectObject(e,t=!0,n=[]){return Nc(e,this,n,t),n.sort(Md),n}intersectObjects(e,t=!0,n=[]){for(let s=0,o=e.length;s<o;s++)Nc(e[s],this,n,t);return n.sort(Md),n}}function Md(i,e){return i.distance-e.distance}function Nc(i,e,t,n){let s=!0;if(i.layers.test(e.layers)&&i.raycast(e,t)===!1&&(s=!1),s===!0&&n===!0){const o=i.children;for(let r=0,a=o.length;r<a;r++)Nc(o[r],e,t,!0)}}class Ed{constructor(e=1,t=0,n=0){return this.radius=e,this.phi=t,this.theta=n,this}set(e,t,n){return this.radius=e,this.phi=t,this.theta=n,this}copy(e){return this.radius=e.radius,this.phi=e.phi,this.theta=e.theta,this}makeSafe(){return this.phi=He(this.phi,1e-6,Math.PI-1e-6),this}setFromVector3(e){return this.setFromCartesianCoords(e.x,e.y,e.z)}setFromCartesianCoords(e,t,n){return this.radius=Math.sqrt(e*e+t*t+n*n),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(e,n),this.phi=Math.acos(He(t/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}const bd=new b,jr=new b;class e0{constructor(e=new b,t=new b){this.start=e,this.end=t}set(e,t){return this.start.copy(e),this.end.copy(t),this}copy(e){return this.start.copy(e.start),this.end.copy(e.end),this}getCenter(e){return e.addVectors(this.start,this.end).multiplyScalar(.5)}delta(e){return e.subVectors(this.end,this.start)}distanceSq(){return this.start.distanceToSquared(this.end)}distance(){return this.start.distanceTo(this.end)}at(e,t){return this.delta(t).multiplyScalar(e).add(this.start)}closestPointToPointParameter(e,t){bd.subVectors(e,this.start),jr.subVectors(this.end,this.start);const n=jr.dot(jr);let o=jr.dot(bd)/n;return t&&(o=He(o,0,1)),o}closestPointToPoint(e,t,n){const s=this.closestPointToPointParameter(e,t);return this.delta(n).multiplyScalar(s).add(this.start)}applyMatrix4(e){return this.start.applyMatrix4(e),this.end.applyMatrix4(e),this}equals(e){return e.start.equals(this.start)&&e.end.equals(this.end)}clone(){return new this.constructor().copy(this)}}class Sf extends Ss{constructor(e,t=null){super(),this.object=e,this.domElement=t,this.enabled=!0,this.state=-1,this.keys={},this.mouseButtons={LEFT:null,MIDDLE:null,RIGHT:null},this.touches={ONE:null,TWO:null}}connect(){}disconnect(){}dispose(){}update(){}}function Td(i,e,t,n){const s=t0(n);switch(t){case Yh:return i*e;case Kh:return i*e;case Zh:return i*e*2;case Kc:return i*e/s.components*s.byteLength;case Zc:return i*e/s.components*s.byteLength;case Jh:return i*e*2/s.components*s.byteLength;case Jc:return i*e*2/s.components*s.byteLength;case $h:return i*e*3/s.components*s.byteLength;case Ln:return i*e*4/s.components*s.byteLength;case Qc:return i*e*4/s.components*s.byteLength;case pa:case ma:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case ga:case _a:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case ic:case oc:return Math.max(i,16)*Math.max(e,8)/4;case nc:case sc:return Math.max(i,8)*Math.max(e,8)/2;case rc:case ac:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case lc:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case cc:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case uc:return Math.floor((i+4)/5)*Math.floor((e+3)/4)*16;case dc:return Math.floor((i+4)/5)*Math.floor((e+4)/5)*16;case hc:return Math.floor((i+5)/6)*Math.floor((e+4)/5)*16;case fc:return Math.floor((i+5)/6)*Math.floor((e+5)/6)*16;case pc:return Math.floor((i+7)/8)*Math.floor((e+4)/5)*16;case mc:return Math.floor((i+7)/8)*Math.floor((e+5)/6)*16;case gc:return Math.floor((i+7)/8)*Math.floor((e+7)/8)*16;case _c:return Math.floor((i+9)/10)*Math.floor((e+4)/5)*16;case vc:return Math.floor((i+9)/10)*Math.floor((e+5)/6)*16;case xc:return Math.floor((i+9)/10)*Math.floor((e+7)/8)*16;case yc:return Math.floor((i+9)/10)*Math.floor((e+9)/10)*16;case wc:return Math.floor((i+11)/12)*Math.floor((e+9)/10)*16;case Sc:return Math.floor((i+11)/12)*Math.floor((e+11)/12)*16;case va:case Mc:case Ec:return Math.ceil(i/4)*Math.ceil(e/4)*16;case Qh:case bc:return Math.ceil(i/4)*Math.ceil(e/4)*8;case Tc:case Ac:return Math.ceil(i/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function t0(i){switch(i){case wi:case Xh:return{byteLength:1,components:1};case nr:case qh:case Dn:return{byteLength:2,components:1};case Yc:case $c:return{byteLength:2,components:4};case vs:case jc:case qn:return{byteLength:4,components:1};case jh:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${i}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Xc}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Xc);/**
 * @license
 * Copyright 2010-2024 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function Mf(){let i=null,e=!1,t=null,n=null;function s(o,r){t(o,r),n=i.requestAnimationFrame(s)}return{start:function(){e!==!0&&t!==null&&(n=i.requestAnimationFrame(s),e=!0)},stop:function(){i.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(o){t=o},setContext:function(o){i=o}}}function n0(i){const e=new WeakMap;function t(a,l){const c=a.array,u=a.usage,d=c.byteLength,h=i.createBuffer();i.bindBuffer(l,h),i.bufferData(l,c,u),a.onUploadCallback();let f;if(c instanceof Float32Array)f=i.FLOAT;else if(c instanceof Uint16Array)a.isFloat16BufferAttribute?f=i.HALF_FLOAT:f=i.UNSIGNED_SHORT;else if(c instanceof Int16Array)f=i.SHORT;else if(c instanceof Uint32Array)f=i.UNSIGNED_INT;else if(c instanceof Int32Array)f=i.INT;else if(c instanceof Int8Array)f=i.BYTE;else if(c instanceof Uint8Array)f=i.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)f=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:h,type:f,bytesPerElement:c.BYTES_PER_ELEMENT,version:a.version,size:d}}function n(a,l,c){const u=l.array,d=l.updateRanges;if(i.bindBuffer(c,a),d.length===0)i.bufferSubData(c,0,u);else{d.sort((f,_)=>f.start-_.start);let h=0;for(let f=1;f<d.length;f++){const _=d[h],g=d[f];g.start<=_.start+_.count+1?_.count=Math.max(_.count,g.start+g.count-_.start):(++h,d[h]=g)}d.length=h+1;for(let f=0,_=d.length;f<_;f++){const g=d[f];i.bufferSubData(c,g.start*u.BYTES_PER_ELEMENT,u,g.start,g.count)}l.clearUpdateRanges()}l.onUploadCallback()}function s(a){return a.isInterleavedBufferAttribute&&(a=a.data),e.get(a)}function o(a){a.isInterleavedBufferAttribute&&(a=a.data);const l=e.get(a);l&&(i.deleteBuffer(l.buffer),e.delete(a))}function r(a,l){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){const u=e.get(a);(!u||u.version<a.version)&&e.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}const c=e.get(a);if(c===void 0)e.set(a,t(a,l));else if(c.version<a.version){if(c.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(c.buffer,a,l),c.version=a.version}}return{get:s,remove:o,update:r}}var i0=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,s0=`#ifdef USE_ALPHAHASH
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
#endif`,o0=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,r0=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,a0=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,l0=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,c0=`#ifdef USE_AOMAP
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
#endif`,u0=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,d0=`#ifdef USE_BATCHING
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
#endif`,h0=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,f0=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,p0=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,m0=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,g0=`#ifdef USE_IRIDESCENCE
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
#endif`,_0=`#ifdef USE_BUMPMAP
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
#endif`,v0=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,x0=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,y0=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,w0=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,S0=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,M0=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,E0=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,b0=`#if defined( USE_COLOR_ALPHA )
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
#endif`,T0=`#define PI 3.141592653589793
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
} // validated`,A0=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,C0=`vec3 transformedNormal = objectNormal;
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
#endif`,R0=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,P0=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,D0=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,L0=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,I0="gl_FragColor = linearToOutputTexel( gl_FragColor );",N0=`vec4 LinearTransferOETF( in vec4 value ) {
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
#endif`,U0=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,F0=`#ifdef USE_ENVMAP
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
#endif`,B0=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,z0=`#ifdef USE_ENVMAP
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
#endif`,k0=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,H0=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,G0=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,V0=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,W0=`#ifdef USE_GRADIENTMAP
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
}`,X0=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,q0=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,j0=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Y0=`uniform bool receiveShadow;
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
#endif`,K0=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Z0=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,J0=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Q0=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,e_=`PhysicalMaterial material;
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
#endif`,t_=`struct PhysicalMaterial {
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
}`,n_=`
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
#endif`,i_=`#if defined( RE_IndirectDiffuse )
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
#endif`,s_=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,o_=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,r_=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,a_=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,l_=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,c_=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,u_=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,d_=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,h_=`#if defined( USE_POINTS_UV )
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
#endif`,f_=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,p_=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,m_=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,g_=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,__=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,v_=`#ifdef USE_MORPHTARGETS
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
#endif`,x_=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,y_=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,w_=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,S_=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,M_=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,E_=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,b_=`#ifdef USE_NORMALMAP
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
#endif`,T_=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,A_=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,C_=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,R_=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,P_=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,D_=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,L_=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,I_=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,N_=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,O_=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,U_=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,F_=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,B_=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,z_=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,k_=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,H_=`float getShadowMask() {
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
}`,G_=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,V_=`#ifdef USE_SKINNING
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
#endif`,W_=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,X_=`#ifdef USE_SKINNING
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
#endif`,q_=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,j_=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Y_=`#if defined( TONE_MAPPING )
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,K_=`#ifdef USE_TRANSMISSION
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
#endif`,Z_=`#ifdef USE_TRANSMISSION
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
#endif`,J_=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Q_=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,ev=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,tv=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const nv=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,iv=`uniform sampler2D t2D;
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
}`,sv=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,ov=`#ifdef ENVMAP_TYPE_CUBE
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
}`,rv=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,av=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,lv=`#include <common>
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
}`,cv=`#if DEPTH_PACKING == 3200
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
}`,uv=`#define DISTANCE
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
}`,dv=`#define DISTANCE
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
}`,hv=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,fv=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,pv=`uniform float scale;
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
}`,mv=`uniform vec3 diffuse;
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
}`,gv=`#include <common>
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
}`,_v=`uniform vec3 diffuse;
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
}`,vv=`#define LAMBERT
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
}`,xv=`#define LAMBERT
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
}`,yv=`#define MATCAP
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
}`,wv=`#define MATCAP
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
}`,Sv=`#define NORMAL
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
}`,Mv=`#define NORMAL
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
}`,Ev=`#define PHONG
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
}`,bv=`#define PHONG
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
}`,Tv=`#define STANDARD
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
}`,Av=`#define STANDARD
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
}`,Cv=`#define TOON
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
}`,Rv=`#define TOON
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
}`,Pv=`uniform float size;
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
}`,Dv=`uniform vec3 diffuse;
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
}`,Lv=`#include <common>
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
}`,Iv=`uniform vec3 color;
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
}`,Nv=`uniform float rotation;
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
}`,ke={alphahash_fragment:i0,alphahash_pars_fragment:s0,alphamap_fragment:o0,alphamap_pars_fragment:r0,alphatest_fragment:a0,alphatest_pars_fragment:l0,aomap_fragment:c0,aomap_pars_fragment:u0,batching_pars_vertex:d0,batching_vertex:h0,begin_vertex:f0,beginnormal_vertex:p0,bsdfs:m0,iridescence_fragment:g0,bumpmap_pars_fragment:_0,clipping_planes_fragment:v0,clipping_planes_pars_fragment:x0,clipping_planes_pars_vertex:y0,clipping_planes_vertex:w0,color_fragment:S0,color_pars_fragment:M0,color_pars_vertex:E0,color_vertex:b0,common:T0,cube_uv_reflection_fragment:A0,defaultnormal_vertex:C0,displacementmap_pars_vertex:R0,displacementmap_vertex:P0,emissivemap_fragment:D0,emissivemap_pars_fragment:L0,colorspace_fragment:I0,colorspace_pars_fragment:N0,envmap_fragment:O0,envmap_common_pars_fragment:U0,envmap_pars_fragment:F0,envmap_pars_vertex:B0,envmap_physical_pars_fragment:$0,envmap_vertex:z0,fog_vertex:k0,fog_pars_vertex:H0,fog_fragment:G0,fog_pars_fragment:V0,gradientmap_pars_fragment:W0,lightmap_pars_fragment:X0,lights_lambert_fragment:q0,lights_lambert_pars_fragment:j0,lights_pars_begin:Y0,lights_toon_fragment:K0,lights_toon_pars_fragment:Z0,lights_phong_fragment:J0,lights_phong_pars_fragment:Q0,lights_physical_fragment:e_,lights_physical_pars_fragment:t_,lights_fragment_begin:n_,lights_fragment_maps:i_,lights_fragment_end:s_,logdepthbuf_fragment:o_,logdepthbuf_pars_fragment:r_,logdepthbuf_pars_vertex:a_,logdepthbuf_vertex:l_,map_fragment:c_,map_pars_fragment:u_,map_particle_fragment:d_,map_particle_pars_fragment:h_,metalnessmap_fragment:f_,metalnessmap_pars_fragment:p_,morphinstance_vertex:m_,morphcolor_vertex:g_,morphnormal_vertex:__,morphtarget_pars_vertex:v_,morphtarget_vertex:x_,normal_fragment_begin:y_,normal_fragment_maps:w_,normal_pars_fragment:S_,normal_pars_vertex:M_,normal_vertex:E_,normalmap_pars_fragment:b_,clearcoat_normal_fragment_begin:T_,clearcoat_normal_fragment_maps:A_,clearcoat_pars_fragment:C_,iridescence_pars_fragment:R_,opaque_fragment:P_,packing:D_,premultiplied_alpha_fragment:L_,project_vertex:I_,dithering_fragment:N_,dithering_pars_fragment:O_,roughnessmap_fragment:U_,roughnessmap_pars_fragment:F_,shadowmap_pars_fragment:B_,shadowmap_pars_vertex:z_,shadowmap_vertex:k_,shadowmask_pars_fragment:H_,skinbase_vertex:G_,skinning_pars_vertex:V_,skinning_vertex:W_,skinnormal_vertex:X_,specularmap_fragment:q_,specularmap_pars_fragment:j_,tonemapping_fragment:Y_,tonemapping_pars_fragment:$_,transmission_fragment:K_,transmission_pars_fragment:Z_,uv_pars_fragment:J_,uv_pars_vertex:Q_,uv_vertex:ev,worldpos_vertex:tv,background_vert:nv,background_frag:iv,backgroundCube_vert:sv,backgroundCube_frag:ov,cube_vert:rv,cube_frag:av,depth_vert:lv,depth_frag:cv,distanceRGBA_vert:uv,distanceRGBA_frag:dv,equirect_vert:hv,equirect_frag:fv,linedashed_vert:pv,linedashed_frag:mv,meshbasic_vert:gv,meshbasic_frag:_v,meshlambert_vert:vv,meshlambert_frag:xv,meshmatcap_vert:yv,meshmatcap_frag:wv,meshnormal_vert:Sv,meshnormal_frag:Mv,meshphong_vert:Ev,meshphong_frag:bv,meshphysical_vert:Tv,meshphysical_frag:Av,meshtoon_vert:Cv,meshtoon_frag:Rv,points_vert:Pv,points_frag:Dv,shadow_vert:Lv,shadow_frag:Iv,sprite_vert:Nv,sprite_frag:Ov},ae={common:{diffuse:{value:new oe(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Be},alphaMap:{value:null},alphaMapTransform:{value:new Be},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Be}},envmap:{envMap:{value:null},envMapRotation:{value:new Be},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Be}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Be}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Be},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Be},normalScale:{value:new ge(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Be},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Be}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Be}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Be}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new oe(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new oe(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Be},alphaTest:{value:0},uvTransform:{value:new Be}},sprite:{diffuse:{value:new oe(16777215)},opacity:{value:1},center:{value:new ge(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Be},alphaMap:{value:null},alphaMapTransform:{value:new Be},alphaTest:{value:0}}},fn={basic:{uniforms:Qt([ae.common,ae.specularmap,ae.envmap,ae.aomap,ae.lightmap,ae.fog]),vertexShader:ke.meshbasic_vert,fragmentShader:ke.meshbasic_frag},lambert:{uniforms:Qt([ae.common,ae.specularmap,ae.envmap,ae.aomap,ae.lightmap,ae.emissivemap,ae.bumpmap,ae.normalmap,ae.displacementmap,ae.fog,ae.lights,{emissive:{value:new oe(0)}}]),vertexShader:ke.meshlambert_vert,fragmentShader:ke.meshlambert_frag},phong:{uniforms:Qt([ae.common,ae.specularmap,ae.envmap,ae.aomap,ae.lightmap,ae.emissivemap,ae.bumpmap,ae.normalmap,ae.displacementmap,ae.fog,ae.lights,{emissive:{value:new oe(0)},specular:{value:new oe(1118481)},shininess:{value:30}}]),vertexShader:ke.meshphong_vert,fragmentShader:ke.meshphong_frag},standard:{uniforms:Qt([ae.common,ae.envmap,ae.aomap,ae.lightmap,ae.emissivemap,ae.bumpmap,ae.normalmap,ae.displacementmap,ae.roughnessmap,ae.metalnessmap,ae.fog,ae.lights,{emissive:{value:new oe(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:ke.meshphysical_vert,fragmentShader:ke.meshphysical_frag},toon:{uniforms:Qt([ae.common,ae.aomap,ae.lightmap,ae.emissivemap,ae.bumpmap,ae.normalmap,ae.displacementmap,ae.gradientmap,ae.fog,ae.lights,{emissive:{value:new oe(0)}}]),vertexShader:ke.meshtoon_vert,fragmentShader:ke.meshtoon_frag},matcap:{uniforms:Qt([ae.common,ae.bumpmap,ae.normalmap,ae.displacementmap,ae.fog,{matcap:{value:null}}]),vertexShader:ke.meshmatcap_vert,fragmentShader:ke.meshmatcap_frag},points:{uniforms:Qt([ae.points,ae.fog]),vertexShader:ke.points_vert,fragmentShader:ke.points_frag},dashed:{uniforms:Qt([ae.common,ae.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:ke.linedashed_vert,fragmentShader:ke.linedashed_frag},depth:{uniforms:Qt([ae.common,ae.displacementmap]),vertexShader:ke.depth_vert,fragmentShader:ke.depth_frag},normal:{uniforms:Qt([ae.common,ae.bumpmap,ae.normalmap,ae.displacementmap,{opacity:{value:1}}]),vertexShader:ke.meshnormal_vert,fragmentShader:ke.meshnormal_frag},sprite:{uniforms:Qt([ae.sprite,ae.fog]),vertexShader:ke.sprite_vert,fragmentShader:ke.sprite_frag},background:{uniforms:{uvTransform:{value:new Be},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:ke.background_vert,fragmentShader:ke.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Be}},vertexShader:ke.backgroundCube_vert,fragmentShader:ke.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:ke.cube_vert,fragmentShader:ke.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:ke.equirect_vert,fragmentShader:ke.equirect_frag},distanceRGBA:{uniforms:Qt([ae.common,ae.displacementmap,{referencePosition:{value:new b},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:ke.distanceRGBA_vert,fragmentShader:ke.distanceRGBA_frag},shadow:{uniforms:Qt([ae.lights,ae.fog,{color:{value:new oe(0)},opacity:{value:1}}]),vertexShader:ke.shadow_vert,fragmentShader:ke.shadow_frag}};fn.physical={uniforms:Qt([fn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Be},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Be},clearcoatNormalScale:{value:new ge(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Be},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Be},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Be},sheen:{value:0},sheenColor:{value:new oe(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Be},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Be},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Be},transmissionSamplerSize:{value:new ge},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Be},attenuationDistance:{value:0},attenuationColor:{value:new oe(0)},specularColor:{value:new oe(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Be},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Be},anisotropyVector:{value:new ge},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Be}}]),vertexShader:ke.meshphysical_vert,fragmentShader:ke.meshphysical_frag};const Yr={r:0,b:0,g:0},Qi=new Bt,Uv=new Le;function Fv(i,e,t,n,s,o,r){const a=new oe(0);let l=o===!0?0:1,c,u,d=null,h=0,f=null;function _(y){let x=y.isScene===!0?y.background:null;return x&&x.isTexture&&(x=(y.backgroundBlurriness>0?t:e).get(x)),x}function g(y){let x=!1;const A=_(y);A===null?p(a,l):A&&A.isColor&&(p(A,1),x=!0);const T=i.xr.getEnvironmentBlendMode();T==="additive"?n.buffers.color.setClear(0,0,0,1,r):T==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,r),(i.autoClear||x)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function m(y,x){const A=_(x);A&&(A.isCubeTexture||A.mapping===Ba)?(u===void 0&&(u=new re(new Mt(1,1,1),new Et({name:"BackgroundCubeMaterial",uniforms:go(fn.backgroundCube.uniforms),vertexShader:fn.backgroundCube.vertexShader,fragmentShader:fn.backgroundCube.fragmentShader,side:gn,depthTest:!1,depthWrite:!1,fog:!1})),u.geometry.deleteAttribute("normal"),u.geometry.deleteAttribute("uv"),u.onBeforeRender=function(T,P,L){this.matrixWorld.copyPosition(L.matrixWorld)},Object.defineProperty(u.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(u)),Qi.copy(x.backgroundRotation),Qi.x*=-1,Qi.y*=-1,Qi.z*=-1,A.isCubeTexture&&A.isRenderTargetTexture===!1&&(Qi.y*=-1,Qi.z*=-1),u.material.uniforms.envMap.value=A,u.material.uniforms.flipEnvMap.value=A.isCubeTexture&&A.isRenderTargetTexture===!1?-1:1,u.material.uniforms.backgroundBlurriness.value=x.backgroundBlurriness,u.material.uniforms.backgroundIntensity.value=x.backgroundIntensity,u.material.uniforms.backgroundRotation.value.setFromMatrix4(Uv.makeRotationFromEuler(Qi)),u.material.toneMapped=Je.getTransfer(A.colorSpace)!==ct,(d!==A||h!==A.version||f!==i.toneMapping)&&(u.material.needsUpdate=!0,d=A,h=A.version,f=i.toneMapping),u.layers.enableAll(),y.unshift(u,u.geometry,u.material,0,0,null)):A&&A.isTexture&&(c===void 0&&(c=new re(new xs(2,2),new Et({name:"BackgroundMaterial",uniforms:go(fn.background.uniforms),vertexShader:fn.background.vertexShader,fragmentShader:fn.background.fragmentShader,side:yi,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(c)),c.material.uniforms.t2D.value=A,c.material.uniforms.backgroundIntensity.value=x.backgroundIntensity,c.material.toneMapped=Je.getTransfer(A.colorSpace)!==ct,A.matrixAutoUpdate===!0&&A.updateMatrix(),c.material.uniforms.uvTransform.value.copy(A.matrix),(d!==A||h!==A.version||f!==i.toneMapping)&&(c.material.needsUpdate=!0,d=A,h=A.version,f=i.toneMapping),c.layers.enableAll(),y.unshift(c,c.geometry,c.material,0,0,null))}function p(y,x){y.getRGB(Yr,uf(i)),n.buffers.color.setClear(Yr.r,Yr.g,Yr.b,x,r)}function w(){u!==void 0&&(u.geometry.dispose(),u.material.dispose()),c!==void 0&&(c.geometry.dispose(),c.material.dispose())}return{getClearColor:function(){return a},setClearColor:function(y,x=1){a.set(y),l=x,p(a,l)},getClearAlpha:function(){return l},setClearAlpha:function(y){l=y,p(a,l)},render:g,addToRenderList:m,dispose:w}}function Bv(i,e){const t=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},s=h(null);let o=s,r=!1;function a(v,C,N,O,z){let D=!1;const I=d(O,N,C);o!==I&&(o=I,c(o.object)),D=f(v,O,N,z),D&&_(v,O,N,z),z!==null&&e.update(z,i.ELEMENT_ARRAY_BUFFER),(D||r)&&(r=!1,x(v,C,N,O),z!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,e.get(z).buffer))}function l(){return i.createVertexArray()}function c(v){return i.bindVertexArray(v)}function u(v){return i.deleteVertexArray(v)}function d(v,C,N){const O=N.wireframe===!0;let z=n[v.id];z===void 0&&(z={},n[v.id]=z);let D=z[C.id];D===void 0&&(D={},z[C.id]=D);let I=D[O];return I===void 0&&(I=h(l()),D[O]=I),I}function h(v){const C=[],N=[],O=[];for(let z=0;z<t;z++)C[z]=0,N[z]=0,O[z]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:C,enabledAttributes:N,attributeDivisors:O,object:v,attributes:{},index:null}}function f(v,C,N,O){const z=o.attributes,D=C.attributes;let I=0;const G=N.getAttributes();for(const F in G)if(G[F].location>=0){const j=z[F];let ee=D[F];if(ee===void 0&&(F==="instanceMatrix"&&v.instanceMatrix&&(ee=v.instanceMatrix),F==="instanceColor"&&v.instanceColor&&(ee=v.instanceColor)),j===void 0||j.attribute!==ee||ee&&j.data!==ee.data)return!0;I++}return o.attributesNum!==I||o.index!==O}function _(v,C,N,O){const z={},D=C.attributes;let I=0;const G=N.getAttributes();for(const F in G)if(G[F].location>=0){let j=D[F];j===void 0&&(F==="instanceMatrix"&&v.instanceMatrix&&(j=v.instanceMatrix),F==="instanceColor"&&v.instanceColor&&(j=v.instanceColor));const ee={};ee.attribute=j,j&&j.data&&(ee.data=j.data),z[F]=ee,I++}o.attributes=z,o.attributesNum=I,o.index=O}function g(){const v=o.newAttributes;for(let C=0,N=v.length;C<N;C++)v[C]=0}function m(v){p(v,0)}function p(v,C){const N=o.newAttributes,O=o.enabledAttributes,z=o.attributeDivisors;N[v]=1,O[v]===0&&(i.enableVertexAttribArray(v),O[v]=1),z[v]!==C&&(i.vertexAttribDivisor(v,C),z[v]=C)}function w(){const v=o.newAttributes,C=o.enabledAttributes;for(let N=0,O=C.length;N<O;N++)C[N]!==v[N]&&(i.disableVertexAttribArray(N),C[N]=0)}function y(v,C,N,O,z,D,I){I===!0?i.vertexAttribIPointer(v,C,N,z,D):i.vertexAttribPointer(v,C,N,O,z,D)}function x(v,C,N,O){g();const z=O.attributes,D=N.getAttributes(),I=C.defaultAttributeValues;for(const G in D){const F=D[G];if(F.location>=0){let W=z[G];if(W===void 0&&(G==="instanceMatrix"&&v.instanceMatrix&&(W=v.instanceMatrix),G==="instanceColor"&&v.instanceColor&&(W=v.instanceColor)),W!==void 0){const j=W.normalized,ee=W.itemSize,ce=e.get(W);if(ce===void 0)continue;const Re=ce.buffer,$=ce.type,ie=ce.bytesPerElement,we=$===i.INT||$===i.UNSIGNED_INT||W.gpuType===jc;if(W.isInterleavedBufferAttribute){const he=W.data,De=he.stride,Ue=W.offset;if(he.isInstancedInterleavedBuffer){for(let Ge=0;Ge<F.locationSize;Ge++)p(F.location+Ge,he.meshPerAttribute);v.isInstancedMesh!==!0&&O._maxInstanceCount===void 0&&(O._maxInstanceCount=he.meshPerAttribute*he.count)}else for(let Ge=0;Ge<F.locationSize;Ge++)m(F.location+Ge);i.bindBuffer(i.ARRAY_BUFFER,Re);for(let Ge=0;Ge<F.locationSize;Ge++)y(F.location+Ge,ee/F.locationSize,$,j,De*ie,(Ue+ee/F.locationSize*Ge)*ie,we)}else{if(W.isInstancedBufferAttribute){for(let he=0;he<F.locationSize;he++)p(F.location+he,W.meshPerAttribute);v.isInstancedMesh!==!0&&O._maxInstanceCount===void 0&&(O._maxInstanceCount=W.meshPerAttribute*W.count)}else for(let he=0;he<F.locationSize;he++)m(F.location+he);i.bindBuffer(i.ARRAY_BUFFER,Re);for(let he=0;he<F.locationSize;he++)y(F.location+he,ee/F.locationSize,$,j,ee*ie,ee/F.locationSize*he*ie,we)}}else if(I!==void 0){const j=I[G];if(j!==void 0)switch(j.length){case 2:i.vertexAttrib2fv(F.location,j);break;case 3:i.vertexAttrib3fv(F.location,j);break;case 4:i.vertexAttrib4fv(F.location,j);break;default:i.vertexAttrib1fv(F.location,j)}}}}w()}function A(){L();for(const v in n){const C=n[v];for(const N in C){const O=C[N];for(const z in O)u(O[z].object),delete O[z];delete C[N]}delete n[v]}}function T(v){if(n[v.id]===void 0)return;const C=n[v.id];for(const N in C){const O=C[N];for(const z in O)u(O[z].object),delete O[z];delete C[N]}delete n[v.id]}function P(v){for(const C in n){const N=n[C];if(N[v.id]===void 0)continue;const O=N[v.id];for(const z in O)u(O[z].object),delete O[z];delete N[v.id]}}function L(){M(),r=!0,o!==s&&(o=s,c(o.object))}function M(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:a,reset:L,resetDefaultState:M,dispose:A,releaseStatesOfGeometry:T,releaseStatesOfProgram:P,initAttributes:g,enableAttribute:m,disableUnusedAttributes:w}}function zv(i,e,t){let n;function s(c){n=c}function o(c,u){i.drawArrays(n,c,u),t.update(u,n,1)}function r(c,u,d){d!==0&&(i.drawArraysInstanced(n,c,u,d),t.update(u,n,d))}function a(c,u,d){if(d===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,c,0,u,0,d);let f=0;for(let _=0;_<d;_++)f+=u[_];t.update(f,n,1)}function l(c,u,d,h){if(d===0)return;const f=e.get("WEBGL_multi_draw");if(f===null)for(let _=0;_<c.length;_++)r(c[_],u[_],h[_]);else{f.multiDrawArraysInstancedWEBGL(n,c,0,u,0,h,0,d);let _=0;for(let g=0;g<d;g++)_+=u[g]*h[g];t.update(_,n,1)}}this.setMode=s,this.render=o,this.renderInstances=r,this.renderMultiDraw=a,this.renderMultiDrawInstances=l}function kv(i,e,t,n){let s;function o(){if(s!==void 0)return s;if(e.has("EXT_texture_filter_anisotropic")===!0){const P=e.get("EXT_texture_filter_anisotropic");s=i.getParameter(P.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function r(P){return!(P!==Ln&&n.convert(P)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(P){const L=P===Dn&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(P!==wi&&n.convert(P)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE)&&P!==qn&&!L)}function l(P){if(P==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";P="mediump"}return P==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=t.precision!==void 0?t.precision:"highp";const u=l(c);u!==c&&(console.warn("THREE.WebGLRenderer:",c,"not supported, using",u,"instead."),c=u);const d=t.logarithmicDepthBuffer===!0,h=t.reverseDepthBuffer===!0&&e.has("EXT_clip_control"),f=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),_=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),g=i.getParameter(i.MAX_TEXTURE_SIZE),m=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),p=i.getParameter(i.MAX_VERTEX_ATTRIBS),w=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),y=i.getParameter(i.MAX_VARYING_VECTORS),x=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),A=_>0,T=i.getParameter(i.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:o,getMaxPrecision:l,textureFormatReadable:r,textureTypeReadable:a,precision:c,logarithmicDepthBuffer:d,reverseDepthBuffer:h,maxTextures:f,maxVertexTextures:_,maxTextureSize:g,maxCubemapSize:m,maxAttributes:p,maxVertexUniforms:w,maxVaryings:y,maxFragmentUniforms:x,vertexTextures:A,maxSamples:T}}function Hv(i){const e=this;let t=null,n=0,s=!1,o=!1;const r=new Ni,a=new Be,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(d,h){const f=d.length!==0||h||n!==0||s;return s=h,n=d.length,f},this.beginShadows=function(){o=!0,u(null)},this.endShadows=function(){o=!1},this.setGlobalState=function(d,h){t=u(d,h,0)},this.setState=function(d,h,f){const _=d.clippingPlanes,g=d.clipIntersection,m=d.clipShadows,p=i.get(d);if(!s||_===null||_.length===0||o&&!m)o?u(null):c();else{const w=o?0:n,y=w*4;let x=p.clippingState||null;l.value=x,x=u(_,h,y,f);for(let A=0;A!==y;++A)x[A]=t[A];p.clippingState=x,this.numIntersection=g?this.numPlanes:0,this.numPlanes+=w}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function u(d,h,f,_){const g=d!==null?d.length:0;let m=null;if(g!==0){if(m=l.value,_!==!0||m===null){const p=f+g*4,w=h.matrixWorldInverse;a.getNormalMatrix(w),(m===null||m.length<p)&&(m=new Float32Array(p));for(let y=0,x=f;y!==g;++y,x+=4)r.copy(d[y]).applyMatrix4(w,a),r.normal.toArray(m,x),m[x+3]=r.constant}l.value=m,l.needsUpdate=!0}return e.numPlanes=g,e.numIntersection=0,m}}function Gv(i){let e=new WeakMap;function t(r,a){return a===ec?r.mapping=co:a===tc&&(r.mapping=uo),r}function n(r){if(r&&r.isTexture){const a=r.mapping;if(a===ec||a===tc)if(e.has(r)){const l=e.get(r).texture;return t(l,r.mapping)}else{const l=r.image;if(l&&l.height>0){const c=new ag(l.height);return c.fromEquirectangularTexture(i,r),e.set(r,c),r.addEventListener("dispose",s),t(c.texture,r.mapping)}else return null}}return r}function s(r){const a=r.target;a.removeEventListener("dispose",s);const l=e.get(a);l!==void 0&&(e.delete(a),l.dispose())}function o(){e=new WeakMap}return{get:n,dispose:o}}const js=4,Ad=[.125,.215,.35,.446,.526,.582],ds=20,xl=new pr,Cd=new oe;let yl=null,wl=0,Sl=0,Ml=!1;const rs=(1+Math.sqrt(5))/2,ks=1/rs,Rd=[new b(-rs,ks,0),new b(rs,ks,0),new b(-ks,0,rs),new b(ks,0,rs),new b(0,rs,-ks),new b(0,rs,ks),new b(-1,1,-1),new b(1,1,-1),new b(-1,1,1),new b(1,1,1)];class Pd{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,n=.1,s=100){yl=this._renderer.getRenderTarget(),wl=this._renderer.getActiveCubeFace(),Sl=this._renderer.getActiveMipmapLevel(),Ml=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);const o=this._allocateTargets();return o.depthBuffer=!0,this._sceneToCubeUV(e,n,s,o),t>0&&this._blur(o,0,0,t),this._applyPMREM(o),this._cleanup(o),o}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Id(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Ld(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(yl,wl,Sl),this._renderer.xr.enabled=Ml,e.scissorTest=!1,$r(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===co||e.mapping===uo?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),yl=this._renderer.getRenderTarget(),wl=this._renderer.getActiveCubeFace(),Sl=this._renderer.getActiveMipmapLevel(),Ml=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:Sn,minFilter:Sn,generateMipmaps:!1,type:Dn,format:Ln,colorSpace:an,depthBuffer:!1},s=Dd(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Dd(e,t,n);const{_lodMax:o}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=Vv(o)),this._blurMaterial=Wv(o,e,t)}return s}_compileMaterial(e){const t=new re(this._lodPlanes[0],e);this._renderer.compile(t,xl)}_sceneToCubeUV(e,t,n,s){const a=new sn(90,1,t,n),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],u=this._renderer,d=u.autoClear,h=u.toneMapping;u.getClearColor(Cd),u.toneMapping=Wi,u.autoClear=!1;const f=new ti({name:"PMREM.Background",side:gn,depthWrite:!1,depthTest:!1}),_=new re(new Mt,f);let g=!1;const m=e.background;m?m.isColor&&(f.color.copy(m),e.background=null,g=!0):(f.color.copy(Cd),g=!0);for(let p=0;p<6;p++){const w=p%3;w===0?(a.up.set(0,l[p],0),a.lookAt(c[p],0,0)):w===1?(a.up.set(0,0,l[p]),a.lookAt(0,c[p],0)):(a.up.set(0,l[p],0),a.lookAt(0,0,c[p]));const y=this._cubeSize;$r(s,w*y,p>2?y:0,y,y),u.setRenderTarget(s),g&&u.render(_,a),u.render(e,a)}_.geometry.dispose(),_.material.dispose(),u.toneMapping=h,u.autoClear=d,e.background=m}_textureToCubeUV(e,t){const n=this._renderer,s=e.mapping===co||e.mapping===uo;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=Id()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Ld());const o=s?this._cubemapMaterial:this._equirectMaterial,r=new re(this._lodPlanes[0],o),a=o.uniforms;a.envMap.value=e;const l=this._cubeSize;$r(t,0,0,3*l,2*l),n.setRenderTarget(t),n.render(r,xl)}_applyPMREM(e){const t=this._renderer,n=t.autoClear;t.autoClear=!1;const s=this._lodPlanes.length;for(let o=1;o<s;o++){const r=Math.sqrt(this._sigmas[o]*this._sigmas[o]-this._sigmas[o-1]*this._sigmas[o-1]),a=Rd[(s-o-1)%Rd.length];this._blur(e,o-1,o,r,a)}t.autoClear=n}_blur(e,t,n,s,o){const r=this._pingPongRenderTarget;this._halfBlur(e,r,t,n,s,"latitudinal",o),this._halfBlur(r,e,n,n,s,"longitudinal",o)}_halfBlur(e,t,n,s,o,r,a){const l=this._renderer,c=this._blurMaterial;r!=="latitudinal"&&r!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const u=3,d=new re(this._lodPlanes[s],c),h=c.uniforms,f=this._sizeLods[n]-1,_=isFinite(o)?Math.PI/(2*f):2*Math.PI/(2*ds-1),g=o/_,m=isFinite(o)?1+Math.floor(u*g):ds;m>ds&&console.warn(`sigmaRadians, ${o}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${ds}`);const p=[];let w=0;for(let P=0;P<ds;++P){const L=P/g,M=Math.exp(-L*L/2);p.push(M),P===0?w+=M:P<m&&(w+=2*M)}for(let P=0;P<p.length;P++)p[P]=p[P]/w;h.envMap.value=e.texture,h.samples.value=m,h.weights.value=p,h.latitudinal.value=r==="latitudinal",a&&(h.poleAxis.value=a);const{_lodMax:y}=this;h.dTheta.value=_,h.mipInt.value=y-n;const x=this._sizeLods[s],A=3*x*(s>y-js?s-y+js:0),T=4*(this._cubeSize-x);$r(t,A,T,3*x,2*x),l.setRenderTarget(t),l.render(d,xl)}}function Vv(i){const e=[],t=[],n=[];let s=i;const o=i-js+1+Ad.length;for(let r=0;r<o;r++){const a=Math.pow(2,s);t.push(a);let l=1/a;r>i-js?l=Ad[r-i+js-1]:r===0&&(l=0),n.push(l);const c=1/(a-2),u=-c,d=1+c,h=[u,u,d,u,d,d,u,u,d,d,u,d],f=6,_=6,g=3,m=2,p=1,w=new Float32Array(g*_*f),y=new Float32Array(m*_*f),x=new Float32Array(p*_*f);for(let T=0;T<f;T++){const P=T%3*2/3-1,L=T>2?0:-1,M=[P,L,0,P+2/3,L,0,P+2/3,L+1,0,P,L,0,P+2/3,L+1,0,P,L+1,0];w.set(M,g*_*T),y.set(h,m*_*T);const v=[T,T,T,T,T,T];x.set(v,p*_*T)}const A=new vt;A.setAttribute("position",new Tt(w,g)),A.setAttribute("uv",new Tt(y,m)),A.setAttribute("faceIndex",new Tt(x,p)),e.push(A),s>js&&s--}return{lodPlanes:e,sizeLods:t,sigmas:n}}function Dd(i,e,t){const n=new tn(i,e,t);return n.texture.mapping=Ba,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function $r(i,e,t,n,s){i.viewport.set(e,t,n,s),i.scissor.set(e,t,n,s)}function Wv(i,e,t){const n=new Float32Array(ds),s=new b(0,1,0);return new Et({name:"SphericalGaussianBlur",defines:{n:ds,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:uu(),fragmentShader:`

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
		`,blending:Yn,depthTest:!1,depthWrite:!1})}function Ld(){return new Et({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:uu(),fragmentShader:`

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
		`,blending:Yn,depthTest:!1,depthWrite:!1})}function Id(){return new Et({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:uu(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Yn,depthTest:!1,depthWrite:!1})}function uu(){return`

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
	`}function Xv(i){let e=new WeakMap,t=null;function n(a){if(a&&a.isTexture){const l=a.mapping,c=l===ec||l===tc,u=l===co||l===uo;if(c||u){let d=e.get(a);const h=d!==void 0?d.texture.pmremVersion:0;if(a.isRenderTargetTexture&&a.pmremVersion!==h)return t===null&&(t=new Pd(i)),d=c?t.fromEquirectangular(a,d):t.fromCubemap(a,d),d.texture.pmremVersion=a.pmremVersion,e.set(a,d),d.texture;if(d!==void 0)return d.texture;{const f=a.image;return c&&f&&f.height>0||u&&f&&s(f)?(t===null&&(t=new Pd(i)),d=c?t.fromEquirectangular(a):t.fromCubemap(a),d.texture.pmremVersion=a.pmremVersion,e.set(a,d),a.addEventListener("dispose",o),d.texture):null}}}return a}function s(a){let l=0;const c=6;for(let u=0;u<c;u++)a[u]!==void 0&&l++;return l===c}function o(a){const l=a.target;l.removeEventListener("dispose",o);const c=e.get(l);c!==void 0&&(e.delete(l),c.dispose())}function r(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:n,dispose:r}}function qv(i){const e={};function t(n){if(e[n]!==void 0)return e[n];let s;switch(n){case"WEBGL_depth_texture":s=i.getExtension("WEBGL_depth_texture")||i.getExtension("MOZ_WEBGL_depth_texture")||i.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":s=i.getExtension("EXT_texture_filter_anisotropic")||i.getExtension("MOZ_EXT_texture_filter_anisotropic")||i.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":s=i.getExtension("WEBGL_compressed_texture_s3tc")||i.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":s=i.getExtension("WEBGL_compressed_texture_pvrtc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:s=i.getExtension(n)}return e[n]=s,s}return{has:function(n){return t(n)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(n){const s=t(n);return s===null&&Vs("THREE.WebGLRenderer: "+n+" extension not supported."),s}}}function jv(i,e,t,n){const s={},o=new WeakMap;function r(d){const h=d.target;h.index!==null&&e.remove(h.index);for(const _ in h.attributes)e.remove(h.attributes[_]);h.removeEventListener("dispose",r),delete s[h.id];const f=o.get(h);f&&(e.remove(f),o.delete(h)),n.releaseStatesOfGeometry(h),h.isInstancedBufferGeometry===!0&&delete h._maxInstanceCount,t.memory.geometries--}function a(d,h){return s[h.id]===!0||(h.addEventListener("dispose",r),s[h.id]=!0,t.memory.geometries++),h}function l(d){const h=d.attributes;for(const f in h)e.update(h[f],i.ARRAY_BUFFER)}function c(d){const h=[],f=d.index,_=d.attributes.position;let g=0;if(f!==null){const w=f.array;g=f.version;for(let y=0,x=w.length;y<x;y+=3){const A=w[y+0],T=w[y+1],P=w[y+2];h.push(A,T,T,P,P,A)}}else if(_!==void 0){const w=_.array;g=_.version;for(let y=0,x=w.length/3-1;y<x;y+=3){const A=y+0,T=y+1,P=y+2;h.push(A,T,T,P,P,A)}}else return;const m=new(sf(h)?cf:lf)(h,1);m.version=g;const p=o.get(d);p&&e.remove(p),o.set(d,m)}function u(d){const h=o.get(d);if(h){const f=d.index;f!==null&&h.version<f.version&&c(d)}else c(d);return o.get(d)}return{get:a,update:l,getWireframeAttribute:u}}function Yv(i,e,t){let n;function s(h){n=h}let o,r;function a(h){o=h.type,r=h.bytesPerElement}function l(h,f){i.drawElements(n,f,o,h*r),t.update(f,n,1)}function c(h,f,_){_!==0&&(i.drawElementsInstanced(n,f,o,h*r,_),t.update(f,n,_))}function u(h,f,_){if(_===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,f,0,o,h,0,_);let m=0;for(let p=0;p<_;p++)m+=f[p];t.update(m,n,1)}function d(h,f,_,g){if(_===0)return;const m=e.get("WEBGL_multi_draw");if(m===null)for(let p=0;p<h.length;p++)c(h[p]/r,f[p],g[p]);else{m.multiDrawElementsInstancedWEBGL(n,f,0,o,h,0,g,0,_);let p=0;for(let w=0;w<_;w++)p+=f[w]*g[w];t.update(p,n,1)}}this.setMode=s,this.setIndex=a,this.render=l,this.renderInstances=c,this.renderMultiDraw=u,this.renderMultiDrawInstances=d}function $v(i){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(o,r,a){switch(t.calls++,r){case i.TRIANGLES:t.triangles+=a*(o/3);break;case i.LINES:t.lines+=a*(o/2);break;case i.LINE_STRIP:t.lines+=a*(o-1);break;case i.LINE_LOOP:t.lines+=a*o;break;case i.POINTS:t.points+=a*o;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",r);break}}function s(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:s,update:n}}function Kv(i,e,t){const n=new WeakMap,s=new We;function o(r,a,l){const c=r.morphTargetInfluences,u=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,d=u!==void 0?u.length:0;let h=n.get(a);if(h===void 0||h.count!==d){let M=function(){P.dispose(),n.delete(a),a.removeEventListener("dispose",M)};h!==void 0&&h.texture.dispose();const f=a.morphAttributes.position!==void 0,_=a.morphAttributes.normal!==void 0,g=a.morphAttributes.color!==void 0,m=a.morphAttributes.position||[],p=a.morphAttributes.normal||[],w=a.morphAttributes.color||[];let y=0;f===!0&&(y=1),_===!0&&(y=2),g===!0&&(y=3);let x=a.attributes.position.count*y,A=1;x>e.maxTextureSize&&(A=Math.ceil(x/e.maxTextureSize),x=e.maxTextureSize);const T=new Float32Array(x*A*4*d),P=new rf(T,x,A,d);P.type=qn,P.needsUpdate=!0;const L=y*4;for(let v=0;v<d;v++){const C=m[v],N=p[v],O=w[v],z=x*A*4*v;for(let D=0;D<C.count;D++){const I=D*L;f===!0&&(s.fromBufferAttribute(C,D),T[z+I+0]=s.x,T[z+I+1]=s.y,T[z+I+2]=s.z,T[z+I+3]=0),_===!0&&(s.fromBufferAttribute(N,D),T[z+I+4]=s.x,T[z+I+5]=s.y,T[z+I+6]=s.z,T[z+I+7]=0),g===!0&&(s.fromBufferAttribute(O,D),T[z+I+8]=s.x,T[z+I+9]=s.y,T[z+I+10]=s.z,T[z+I+11]=O.itemSize===4?s.w:1)}}h={count:d,texture:P,size:new ge(x,A)},n.set(a,h),a.addEventListener("dispose",M)}if(r.isInstancedMesh===!0&&r.morphTexture!==null)l.getUniforms().setValue(i,"morphTexture",r.morphTexture,t);else{let f=0;for(let g=0;g<c.length;g++)f+=c[g];const _=a.morphTargetsRelative?1:1-f;l.getUniforms().setValue(i,"morphTargetBaseInfluence",_),l.getUniforms().setValue(i,"morphTargetInfluences",c)}l.getUniforms().setValue(i,"morphTargetsTexture",h.texture,t),l.getUniforms().setValue(i,"morphTargetsTextureSize",h.size)}return{update:o}}function Zv(i,e,t,n){let s=new WeakMap;function o(l){const c=n.render.frame,u=l.geometry,d=e.get(l,u);if(s.get(d)!==c&&(e.update(d),s.set(d,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",a)===!1&&l.addEventListener("dispose",a),s.get(l)!==c&&(t.update(l.instanceMatrix,i.ARRAY_BUFFER),l.instanceColor!==null&&t.update(l.instanceColor,i.ARRAY_BUFFER),s.set(l,c))),l.isSkinnedMesh){const h=l.skeleton;s.get(h)!==c&&(h.update(),s.set(h,c))}return d}function r(){s=new WeakMap}function a(l){const c=l.target;c.removeEventListener("dispose",a),t.remove(c.instanceMatrix),c.instanceColor!==null&&t.remove(c.instanceColor)}return{update:o,dispose:r}}const Ef=new Ft,Nd=new gf(1,1),bf=new rf,Tf=new qm,Af=new hf,Od=[],Ud=[],Fd=new Float32Array(16),Bd=new Float32Array(9),zd=new Float32Array(4);function bo(i,e,t){const n=i[0];if(n<=0||n>0)return i;const s=e*t;let o=Od[s];if(o===void 0&&(o=new Float32Array(s),Od[s]=o),e!==0){n.toArray(o,0);for(let r=1,a=0;r!==e;++r)a+=t,i[r].toArray(o,a)}return o}function Dt(i,e){if(i.length!==e.length)return!1;for(let t=0,n=i.length;t<n;t++)if(i[t]!==e[t])return!1;return!0}function Lt(i,e){for(let t=0,n=e.length;t<n;t++)i[t]=e[t]}function Ha(i,e){let t=Ud[e];t===void 0&&(t=new Int32Array(e),Ud[e]=t);for(let n=0;n!==e;++n)t[n]=i.allocateTextureUnit();return t}function Jv(i,e){const t=this.cache;t[0]!==e&&(i.uniform1f(this.addr,e),t[0]=e)}function Qv(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Dt(t,e))return;i.uniform2fv(this.addr,e),Lt(t,e)}}function ex(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(i.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(Dt(t,e))return;i.uniform3fv(this.addr,e),Lt(t,e)}}function tx(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Dt(t,e))return;i.uniform4fv(this.addr,e),Lt(t,e)}}function nx(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(Dt(t,e))return;i.uniformMatrix2fv(this.addr,!1,e),Lt(t,e)}else{if(Dt(t,n))return;zd.set(n),i.uniformMatrix2fv(this.addr,!1,zd),Lt(t,n)}}function ix(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(Dt(t,e))return;i.uniformMatrix3fv(this.addr,!1,e),Lt(t,e)}else{if(Dt(t,n))return;Bd.set(n),i.uniformMatrix3fv(this.addr,!1,Bd),Lt(t,n)}}function sx(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(Dt(t,e))return;i.uniformMatrix4fv(this.addr,!1,e),Lt(t,e)}else{if(Dt(t,n))return;Fd.set(n),i.uniformMatrix4fv(this.addr,!1,Fd),Lt(t,n)}}function ox(i,e){const t=this.cache;t[0]!==e&&(i.uniform1i(this.addr,e),t[0]=e)}function rx(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Dt(t,e))return;i.uniform2iv(this.addr,e),Lt(t,e)}}function ax(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Dt(t,e))return;i.uniform3iv(this.addr,e),Lt(t,e)}}function lx(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Dt(t,e))return;i.uniform4iv(this.addr,e),Lt(t,e)}}function cx(i,e){const t=this.cache;t[0]!==e&&(i.uniform1ui(this.addr,e),t[0]=e)}function ux(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Dt(t,e))return;i.uniform2uiv(this.addr,e),Lt(t,e)}}function dx(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Dt(t,e))return;i.uniform3uiv(this.addr,e),Lt(t,e)}}function hx(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Dt(t,e))return;i.uniform4uiv(this.addr,e),Lt(t,e)}}function fx(i,e,t){const n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);let o;this.type===i.SAMPLER_2D_SHADOW?(Nd.compareFunction=nf,o=Nd):o=Ef,t.setTexture2D(e||o,s)}function px(i,e,t){const n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTexture3D(e||Tf,s)}function mx(i,e,t){const n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTextureCube(e||Af,s)}function gx(i,e,t){const n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTexture2DArray(e||bf,s)}function _x(i){switch(i){case 5126:return Jv;case 35664:return Qv;case 35665:return ex;case 35666:return tx;case 35674:return nx;case 35675:return ix;case 35676:return sx;case 5124:case 35670:return ox;case 35667:case 35671:return rx;case 35668:case 35672:return ax;case 35669:case 35673:return lx;case 5125:return cx;case 36294:return ux;case 36295:return dx;case 36296:return hx;case 35678:case 36198:case 36298:case 36306:case 35682:return fx;case 35679:case 36299:case 36307:return px;case 35680:case 36300:case 36308:case 36293:return mx;case 36289:case 36303:case 36311:case 36292:return gx}}function vx(i,e){i.uniform1fv(this.addr,e)}function xx(i,e){const t=bo(e,this.size,2);i.uniform2fv(this.addr,t)}function yx(i,e){const t=bo(e,this.size,3);i.uniform3fv(this.addr,t)}function wx(i,e){const t=bo(e,this.size,4);i.uniform4fv(this.addr,t)}function Sx(i,e){const t=bo(e,this.size,4);i.uniformMatrix2fv(this.addr,!1,t)}function Mx(i,e){const t=bo(e,this.size,9);i.uniformMatrix3fv(this.addr,!1,t)}function Ex(i,e){const t=bo(e,this.size,16);i.uniformMatrix4fv(this.addr,!1,t)}function bx(i,e){i.uniform1iv(this.addr,e)}function Tx(i,e){i.uniform2iv(this.addr,e)}function Ax(i,e){i.uniform3iv(this.addr,e)}function Cx(i,e){i.uniform4iv(this.addr,e)}function Rx(i,e){i.uniform1uiv(this.addr,e)}function Px(i,e){i.uniform2uiv(this.addr,e)}function Dx(i,e){i.uniform3uiv(this.addr,e)}function Lx(i,e){i.uniform4uiv(this.addr,e)}function Ix(i,e,t){const n=this.cache,s=e.length,o=Ha(t,s);Dt(n,o)||(i.uniform1iv(this.addr,o),Lt(n,o));for(let r=0;r!==s;++r)t.setTexture2D(e[r]||Ef,o[r])}function Nx(i,e,t){const n=this.cache,s=e.length,o=Ha(t,s);Dt(n,o)||(i.uniform1iv(this.addr,o),Lt(n,o));for(let r=0;r!==s;++r)t.setTexture3D(e[r]||Tf,o[r])}function Ox(i,e,t){const n=this.cache,s=e.length,o=Ha(t,s);Dt(n,o)||(i.uniform1iv(this.addr,o),Lt(n,o));for(let r=0;r!==s;++r)t.setTextureCube(e[r]||Af,o[r])}function Ux(i,e,t){const n=this.cache,s=e.length,o=Ha(t,s);Dt(n,o)||(i.uniform1iv(this.addr,o),Lt(n,o));for(let r=0;r!==s;++r)t.setTexture2DArray(e[r]||bf,o[r])}function Fx(i){switch(i){case 5126:return vx;case 35664:return xx;case 35665:return yx;case 35666:return wx;case 35674:return Sx;case 35675:return Mx;case 35676:return Ex;case 5124:case 35670:return bx;case 35667:case 35671:return Tx;case 35668:case 35672:return Ax;case 35669:case 35673:return Cx;case 5125:return Rx;case 36294:return Px;case 36295:return Dx;case 36296:return Lx;case 35678:case 36198:case 36298:case 36306:case 35682:return Ix;case 35679:case 36299:case 36307:return Nx;case 35680:case 36300:case 36308:case 36293:return Ox;case 36289:case 36303:case 36311:case 36292:return Ux}}class Bx{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=_x(t.type)}}class zx{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=Fx(t.type)}}class kx{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){const s=this.seq;for(let o=0,r=s.length;o!==r;++o){const a=s[o];a.setValue(e,t[a.id],n)}}}const El=/(\w+)(\])?(\[|\.)?/g;function kd(i,e){i.seq.push(e),i.map[e.id]=e}function Hx(i,e,t){const n=i.name,s=n.length;for(El.lastIndex=0;;){const o=El.exec(n),r=El.lastIndex;let a=o[1];const l=o[2]==="]",c=o[3];if(l&&(a=a|0),c===void 0||c==="["&&r+2===s){kd(t,c===void 0?new Bx(a,i,e):new zx(a,i,e));break}else{let d=t.map[a];d===void 0&&(d=new kx(a),kd(t,d)),t=d}}}class ya{constructor(e,t){this.seq=[],this.map={};const n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let s=0;s<n;++s){const o=e.getActiveUniform(t,s),r=e.getUniformLocation(t,o.name);Hx(o,r,this)}}setValue(e,t,n,s){const o=this.map[t];o!==void 0&&o.setValue(e,n,s)}setOptional(e,t,n){const s=t[n];s!==void 0&&this.setValue(e,n,s)}static upload(e,t,n,s){for(let o=0,r=t.length;o!==r;++o){const a=t[o],l=n[a.id];l.needsUpdate!==!1&&a.setValue(e,l.value,s)}}static seqWithValue(e,t){const n=[];for(let s=0,o=e.length;s!==o;++s){const r=e[s];r.id in t&&n.push(r)}return n}}function Hd(i,e,t){const n=i.createShader(e);return i.shaderSource(n,t),i.compileShader(n),n}const Gx=37297;let Vx=0;function Wx(i,e){const t=i.split(`
`),n=[],s=Math.max(e-6,0),o=Math.min(e+6,t.length);for(let r=s;r<o;r++){const a=r+1;n.push(`${a===e?">":" "} ${a}: ${t[r]}`)}return n.join(`
`)}const Gd=new Be;function Xx(i){Je._getMatrix(Gd,Je.workingColorSpace,i);const e=`mat3( ${Gd.elements.map(t=>t.toFixed(4))} )`;switch(Je.getTransfer(i)){case Ta:return[e,"LinearTransferOETF"];case ct:return[e,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",i),[e,"LinearTransferOETF"]}}function Vd(i,e,t){const n=i.getShaderParameter(e,i.COMPILE_STATUS),s=i.getShaderInfoLog(e).trim();if(n&&s==="")return"";const o=/ERROR: 0:(\d+)/.exec(s);if(o){const r=parseInt(o[1]);return t.toUpperCase()+`

`+s+`

`+Wx(i.getShaderSource(e),r)}else return s}function qx(i,e){const t=Xx(e);return[`vec4 ${i}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}function jx(i,e){let t;switch(e){case nm:t="Linear";break;case im:t="Reinhard";break;case sm:t="Cineon";break;case om:t="ACESFilmic";break;case am:t="AgX";break;case lm:t="Neutral";break;case rm:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+i+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}const Kr=new b;function Yx(){Je.getLuminanceCoefficients(Kr);const i=Kr.x.toFixed(4),e=Kr.y.toFixed(4),t=Kr.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function $x(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Vo).join(`
`)}function Kx(i){const e=[];for(const t in i){const n=i[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function Zx(i,e){const t={},n=i.getProgramParameter(e,i.ACTIVE_ATTRIBUTES);for(let s=0;s<n;s++){const o=i.getActiveAttrib(e,s),r=o.name;let a=1;o.type===i.FLOAT_MAT2&&(a=2),o.type===i.FLOAT_MAT3&&(a=3),o.type===i.FLOAT_MAT4&&(a=4),t[r]={type:o.type,location:i.getAttribLocation(e,r),locationSize:a}}return t}function Vo(i){return i!==""}function Wd(i,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return i.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Xd(i,e){return i.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const Jx=/^[ \t]*#include +<([\w\d./]+)>/gm;function Oc(i){return i.replace(Jx,ey)}const Qx=new Map;function ey(i,e){let t=ke[e];if(t===void 0){const n=Qx.get(e);if(n!==void 0)t=ke[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,n);else throw new Error("Can not resolve #include <"+e+">")}return Oc(t)}const ty=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function qd(i){return i.replace(ty,ny)}function ny(i,e,t,n){let s="";for(let o=parseInt(e);o<parseInt(t);o++)s+=n.replace(/\[\s*i\s*\]/g,"[ "+o+" ]").replace(/UNROLLED_LOOP_INDEX/g,o);return s}function jd(i){let e=`precision ${i.precision} float;
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
#define LOW_PRECISION`),e}function iy(i){let e="SHADOWMAP_TYPE_BASIC";return i.shadowMapType===Gh?e="SHADOWMAP_TYPE_PCF":i.shadowMapType===Op?e="SHADOWMAP_TYPE_PCF_SOFT":i.shadowMapType===hi&&(e="SHADOWMAP_TYPE_VSM"),e}function sy(i){let e="ENVMAP_TYPE_CUBE";if(i.envMap)switch(i.envMapMode){case co:case uo:e="ENVMAP_TYPE_CUBE";break;case Ba:e="ENVMAP_TYPE_CUBE_UV";break}return e}function oy(i){let e="ENVMAP_MODE_REFLECTION";if(i.envMap)switch(i.envMapMode){case uo:e="ENVMAP_MODE_REFRACTION";break}return e}function ry(i){let e="ENVMAP_BLENDING_NONE";if(i.envMap)switch(i.combine){case qc:e="ENVMAP_BLENDING_MULTIPLY";break;case em:e="ENVMAP_BLENDING_MIX";break;case tm:e="ENVMAP_BLENDING_ADD";break}return e}function ay(i){const e=i.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),112)),texelHeight:n,maxMip:t}}function ly(i,e,t,n){const s=i.getContext(),o=t.defines;let r=t.vertexShader,a=t.fragmentShader;const l=iy(t),c=sy(t),u=oy(t),d=ry(t),h=ay(t),f=$x(t),_=Kx(o),g=s.createProgram();let m,p,w=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(m=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,_].filter(Vo).join(`
`),m.length>0&&(m+=`
`),p=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,_].filter(Vo).join(`
`),p.length>0&&(p+=`
`)):(m=[jd(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,_,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+u:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Vo).join(`
`),p=[jd(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,_,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+u:"",t.envMap?"#define "+d:"",h?"#define CUBEUV_TEXEL_WIDTH "+h.texelWidth:"",h?"#define CUBEUV_TEXEL_HEIGHT "+h.texelHeight:"",h?"#define CUBEUV_MAX_MIP "+h.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor||t.batchingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==Wi?"#define TONE_MAPPING":"",t.toneMapping!==Wi?ke.tonemapping_pars_fragment:"",t.toneMapping!==Wi?jx("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",ke.colorspace_pars_fragment,qx("linearToOutputTexel",t.outputColorSpace),Yx(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(Vo).join(`
`)),r=Oc(r),r=Wd(r,t),r=Xd(r,t),a=Oc(a),a=Wd(a,t),a=Xd(a,t),r=qd(r),a=qd(a),t.isRawShaderMaterial!==!0&&(w=`#version 300 es
`,m=[f,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,p=["#define varying in",t.glslVersion===Fu?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===Fu?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+p);const y=w+m+r,x=w+p+a,A=Hd(s,s.VERTEX_SHADER,y),T=Hd(s,s.FRAGMENT_SHADER,x);s.attachShader(g,A),s.attachShader(g,T),t.index0AttributeName!==void 0?s.bindAttribLocation(g,0,t.index0AttributeName):t.morphTargets===!0&&s.bindAttribLocation(g,0,"position"),s.linkProgram(g);function P(C){if(i.debug.checkShaderErrors){const N=s.getProgramInfoLog(g).trim(),O=s.getShaderInfoLog(A).trim(),z=s.getShaderInfoLog(T).trim();let D=!0,I=!0;if(s.getProgramParameter(g,s.LINK_STATUS)===!1)if(D=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(s,g,A,T);else{const G=Vd(s,A,"vertex"),F=Vd(s,T,"fragment");console.error("THREE.WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(g,s.VALIDATE_STATUS)+`

Material Name: `+C.name+`
Material Type: `+C.type+`

Program Info Log: `+N+`
`+G+`
`+F)}else N!==""?console.warn("THREE.WebGLProgram: Program Info Log:",N):(O===""||z==="")&&(I=!1);I&&(C.diagnostics={runnable:D,programLog:N,vertexShader:{log:O,prefix:m},fragmentShader:{log:z,prefix:p}})}s.deleteShader(A),s.deleteShader(T),L=new ya(s,g),M=Zx(s,g)}let L;this.getUniforms=function(){return L===void 0&&P(this),L};let M;this.getAttributes=function(){return M===void 0&&P(this),M};let v=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return v===!1&&(v=s.getProgramParameter(g,Gx)),v},this.destroy=function(){n.releaseStatesOfProgram(this),s.deleteProgram(g),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=Vx++,this.cacheKey=e,this.usedTimes=1,this.program=g,this.vertexShader=A,this.fragmentShader=T,this}let cy=0;class uy{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,n=e.fragmentShader,s=this._getShaderStage(t),o=this._getShaderStage(n),r=this._getShaderCacheForMaterial(e);return r.has(s)===!1&&(r.add(s),s.usedTimes++),r.has(o)===!1&&(r.add(o),o.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){const t=this.shaderCache;let n=t.get(e);return n===void 0&&(n=new dy(e),t.set(e,n)),n}}class dy{constructor(e){this.id=cy++,this.code=e,this.usedTimes=0}}function hy(i,e,t,n,s,o,r){const a=new tu,l=new uy,c=new Set,u=[],d=s.logarithmicDepthBuffer,h=s.vertexTextures;let f=s.precision;const _={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function g(M){return c.add(M),M===0?"uv":`uv${M}`}function m(M,v,C,N,O){const z=N.fog,D=O.geometry,I=M.isMeshStandardMaterial?N.environment:null,G=(M.isMeshStandardMaterial?t:e).get(M.envMap||I),F=G&&G.mapping===Ba?G.image.height:null,W=_[M.type];M.precision!==null&&(f=s.getMaxPrecision(M.precision),f!==M.precision&&console.warn("THREE.WebGLProgram.getParameters:",M.precision,"not supported, using",f,"instead."));const j=D.morphAttributes.position||D.morphAttributes.normal||D.morphAttributes.color,ee=j!==void 0?j.length:0;let ce=0;D.morphAttributes.position!==void 0&&(ce=1),D.morphAttributes.normal!==void 0&&(ce=2),D.morphAttributes.color!==void 0&&(ce=3);let Re,$,ie,we;if(W){const rt=fn[W];Re=rt.vertexShader,$=rt.fragmentShader}else Re=M.vertexShader,$=M.fragmentShader,l.update(M),ie=l.getVertexShaderID(M),we=l.getFragmentShaderID(M);const he=i.getRenderTarget(),De=i.state.buffers.depth.getReversed(),Ue=O.isInstancedMesh===!0,Ge=O.isBatchedMesh===!0,xt=!!M.map,Qe=!!M.matcap,bt=!!G,U=!!M.aoMap,bn=!!M.lightMap,$e=!!M.bumpMap,Ke=!!M.normalMap,Ee=!!M.displacementMap,mt=!!M.emissiveMap,be=!!M.metalnessMap,R=!!M.roughnessMap,S=M.anisotropy>0,V=M.clearcoat>0,Z=M.dispersion>0,Q=M.iridescence>0,K=M.sheen>0,Me=M.transmission>0,fe=S&&!!M.anisotropyMap,ve=V&&!!M.clearcoatMap,et=V&&!!M.clearcoatNormalMap,se=V&&!!M.clearcoatRoughnessMap,xe=Q&&!!M.iridescenceMap,Pe=Q&&!!M.iridescenceThicknessMap,Ie=K&&!!M.sheenColorMap,ye=K&&!!M.sheenRoughnessMap,Ze=!!M.specularMap,ze=!!M.specularColorMap,ht=!!M.specularIntensityMap,B=Me&&!!M.transmissionMap,ue=Me&&!!M.thicknessMap,Y=!!M.gradientMap,J=!!M.alphaMap,me=M.alphaTest>0,pe=!!M.alphaHash,Fe=!!M.extensions;let wt=Wi;M.toneMapped&&(he===null||he.isXRRenderTarget===!0)&&(wt=i.toneMapping);const Vt={shaderID:W,shaderType:M.type,shaderName:M.name,vertexShader:Re,fragmentShader:$,defines:M.defines,customVertexShaderID:ie,customFragmentShaderID:we,isRawShaderMaterial:M.isRawShaderMaterial===!0,glslVersion:M.glslVersion,precision:f,batching:Ge,batchingColor:Ge&&O._colorsTexture!==null,instancing:Ue,instancingColor:Ue&&O.instanceColor!==null,instancingMorph:Ue&&O.morphTexture!==null,supportsVertexTextures:h,outputColorSpace:he===null?i.outputColorSpace:he.isXRRenderTarget===!0?he.texture.colorSpace:an,alphaToCoverage:!!M.alphaToCoverage,map:xt,matcap:Qe,envMap:bt,envMapMode:bt&&G.mapping,envMapCubeUVHeight:F,aoMap:U,lightMap:bn,bumpMap:$e,normalMap:Ke,displacementMap:h&&Ee,emissiveMap:mt,normalMapObjectSpace:Ke&&M.normalMapType===fm,normalMapTangentSpace:Ke&&M.normalMapType===za,metalnessMap:be,roughnessMap:R,anisotropy:S,anisotropyMap:fe,clearcoat:V,clearcoatMap:ve,clearcoatNormalMap:et,clearcoatRoughnessMap:se,dispersion:Z,iridescence:Q,iridescenceMap:xe,iridescenceThicknessMap:Pe,sheen:K,sheenColorMap:Ie,sheenRoughnessMap:ye,specularMap:Ze,specularColorMap:ze,specularIntensityMap:ht,transmission:Me,transmissionMap:B,thicknessMap:ue,gradientMap:Y,opaque:M.transparent===!1&&M.blending===Js&&M.alphaToCoverage===!1,alphaMap:J,alphaTest:me,alphaHash:pe,combine:M.combine,mapUv:xt&&g(M.map.channel),aoMapUv:U&&g(M.aoMap.channel),lightMapUv:bn&&g(M.lightMap.channel),bumpMapUv:$e&&g(M.bumpMap.channel),normalMapUv:Ke&&g(M.normalMap.channel),displacementMapUv:Ee&&g(M.displacementMap.channel),emissiveMapUv:mt&&g(M.emissiveMap.channel),metalnessMapUv:be&&g(M.metalnessMap.channel),roughnessMapUv:R&&g(M.roughnessMap.channel),anisotropyMapUv:fe&&g(M.anisotropyMap.channel),clearcoatMapUv:ve&&g(M.clearcoatMap.channel),clearcoatNormalMapUv:et&&g(M.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:se&&g(M.clearcoatRoughnessMap.channel),iridescenceMapUv:xe&&g(M.iridescenceMap.channel),iridescenceThicknessMapUv:Pe&&g(M.iridescenceThicknessMap.channel),sheenColorMapUv:Ie&&g(M.sheenColorMap.channel),sheenRoughnessMapUv:ye&&g(M.sheenRoughnessMap.channel),specularMapUv:Ze&&g(M.specularMap.channel),specularColorMapUv:ze&&g(M.specularColorMap.channel),specularIntensityMapUv:ht&&g(M.specularIntensityMap.channel),transmissionMapUv:B&&g(M.transmissionMap.channel),thicknessMapUv:ue&&g(M.thicknessMap.channel),alphaMapUv:J&&g(M.alphaMap.channel),vertexTangents:!!D.attributes.tangent&&(Ke||S),vertexColors:M.vertexColors,vertexAlphas:M.vertexColors===!0&&!!D.attributes.color&&D.attributes.color.itemSize===4,pointsUvs:O.isPoints===!0&&!!D.attributes.uv&&(xt||J),fog:!!z,useFog:M.fog===!0,fogExp2:!!z&&z.isFogExp2,flatShading:M.flatShading===!0,sizeAttenuation:M.sizeAttenuation===!0,logarithmicDepthBuffer:d,reverseDepthBuffer:De,skinning:O.isSkinnedMesh===!0,morphTargets:D.morphAttributes.position!==void 0,morphNormals:D.morphAttributes.normal!==void 0,morphColors:D.morphAttributes.color!==void 0,morphTargetsCount:ee,morphTextureStride:ce,numDirLights:v.directional.length,numPointLights:v.point.length,numSpotLights:v.spot.length,numSpotLightMaps:v.spotLightMap.length,numRectAreaLights:v.rectArea.length,numHemiLights:v.hemi.length,numDirLightShadows:v.directionalShadowMap.length,numPointLightShadows:v.pointShadowMap.length,numSpotLightShadows:v.spotShadowMap.length,numSpotLightShadowsWithMaps:v.numSpotLightShadowsWithMaps,numLightProbes:v.numLightProbes,numClippingPlanes:r.numPlanes,numClipIntersection:r.numIntersection,dithering:M.dithering,shadowMapEnabled:i.shadowMap.enabled&&C.length>0,shadowMapType:i.shadowMap.type,toneMapping:wt,decodeVideoTexture:xt&&M.map.isVideoTexture===!0&&Je.getTransfer(M.map.colorSpace)===ct,decodeVideoTextureEmissive:mt&&M.emissiveMap.isVideoTexture===!0&&Je.getTransfer(M.emissiveMap.colorSpace)===ct,premultipliedAlpha:M.premultipliedAlpha,doubleSided:M.side===pn,flipSided:M.side===gn,useDepthPacking:M.depthPacking>=0,depthPacking:M.depthPacking||0,index0AttributeName:M.index0AttributeName,extensionClipCullDistance:Fe&&M.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Fe&&M.extensions.multiDraw===!0||Ge)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:M.customProgramCacheKey()};return Vt.vertexUv1s=c.has(1),Vt.vertexUv2s=c.has(2),Vt.vertexUv3s=c.has(3),c.clear(),Vt}function p(M){const v=[];if(M.shaderID?v.push(M.shaderID):(v.push(M.customVertexShaderID),v.push(M.customFragmentShaderID)),M.defines!==void 0)for(const C in M.defines)v.push(C),v.push(M.defines[C]);return M.isRawShaderMaterial===!1&&(w(v,M),y(v,M),v.push(i.outputColorSpace)),v.push(M.customProgramCacheKey),v.join()}function w(M,v){M.push(v.precision),M.push(v.outputColorSpace),M.push(v.envMapMode),M.push(v.envMapCubeUVHeight),M.push(v.mapUv),M.push(v.alphaMapUv),M.push(v.lightMapUv),M.push(v.aoMapUv),M.push(v.bumpMapUv),M.push(v.normalMapUv),M.push(v.displacementMapUv),M.push(v.emissiveMapUv),M.push(v.metalnessMapUv),M.push(v.roughnessMapUv),M.push(v.anisotropyMapUv),M.push(v.clearcoatMapUv),M.push(v.clearcoatNormalMapUv),M.push(v.clearcoatRoughnessMapUv),M.push(v.iridescenceMapUv),M.push(v.iridescenceThicknessMapUv),M.push(v.sheenColorMapUv),M.push(v.sheenRoughnessMapUv),M.push(v.specularMapUv),M.push(v.specularColorMapUv),M.push(v.specularIntensityMapUv),M.push(v.transmissionMapUv),M.push(v.thicknessMapUv),M.push(v.combine),M.push(v.fogExp2),M.push(v.sizeAttenuation),M.push(v.morphTargetsCount),M.push(v.morphAttributeCount),M.push(v.numDirLights),M.push(v.numPointLights),M.push(v.numSpotLights),M.push(v.numSpotLightMaps),M.push(v.numHemiLights),M.push(v.numRectAreaLights),M.push(v.numDirLightShadows),M.push(v.numPointLightShadows),M.push(v.numSpotLightShadows),M.push(v.numSpotLightShadowsWithMaps),M.push(v.numLightProbes),M.push(v.shadowMapType),M.push(v.toneMapping),M.push(v.numClippingPlanes),M.push(v.numClipIntersection),M.push(v.depthPacking)}function y(M,v){a.disableAll(),v.supportsVertexTextures&&a.enable(0),v.instancing&&a.enable(1),v.instancingColor&&a.enable(2),v.instancingMorph&&a.enable(3),v.matcap&&a.enable(4),v.envMap&&a.enable(5),v.normalMapObjectSpace&&a.enable(6),v.normalMapTangentSpace&&a.enable(7),v.clearcoat&&a.enable(8),v.iridescence&&a.enable(9),v.alphaTest&&a.enable(10),v.vertexColors&&a.enable(11),v.vertexAlphas&&a.enable(12),v.vertexUv1s&&a.enable(13),v.vertexUv2s&&a.enable(14),v.vertexUv3s&&a.enable(15),v.vertexTangents&&a.enable(16),v.anisotropy&&a.enable(17),v.alphaHash&&a.enable(18),v.batching&&a.enable(19),v.dispersion&&a.enable(20),v.batchingColor&&a.enable(21),M.push(a.mask),a.disableAll(),v.fog&&a.enable(0),v.useFog&&a.enable(1),v.flatShading&&a.enable(2),v.logarithmicDepthBuffer&&a.enable(3),v.reverseDepthBuffer&&a.enable(4),v.skinning&&a.enable(5),v.morphTargets&&a.enable(6),v.morphNormals&&a.enable(7),v.morphColors&&a.enable(8),v.premultipliedAlpha&&a.enable(9),v.shadowMapEnabled&&a.enable(10),v.doubleSided&&a.enable(11),v.flipSided&&a.enable(12),v.useDepthPacking&&a.enable(13),v.dithering&&a.enable(14),v.transmission&&a.enable(15),v.sheen&&a.enable(16),v.opaque&&a.enable(17),v.pointsUvs&&a.enable(18),v.decodeVideoTexture&&a.enable(19),v.decodeVideoTextureEmissive&&a.enable(20),v.alphaToCoverage&&a.enable(21),M.push(a.mask)}function x(M){const v=_[M.type];let C;if(v){const N=fn[v];C=Ms.clone(N.uniforms)}else C=M.uniforms;return C}function A(M,v){let C;for(let N=0,O=u.length;N<O;N++){const z=u[N];if(z.cacheKey===v){C=z,++C.usedTimes;break}}return C===void 0&&(C=new ly(i,v,M,o),u.push(C)),C}function T(M){if(--M.usedTimes===0){const v=u.indexOf(M);u[v]=u[u.length-1],u.pop(),M.destroy()}}function P(M){l.remove(M)}function L(){l.dispose()}return{getParameters:m,getProgramCacheKey:p,getUniforms:x,acquireProgram:A,releaseProgram:T,releaseShaderCache:P,programs:u,dispose:L}}function fy(){let i=new WeakMap;function e(r){return i.has(r)}function t(r){let a=i.get(r);return a===void 0&&(a={},i.set(r,a)),a}function n(r){i.delete(r)}function s(r,a,l){i.get(r)[a]=l}function o(){i=new WeakMap}return{has:e,get:t,remove:n,update:s,dispose:o}}function py(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.material.id!==e.material.id?i.material.id-e.material.id:i.z!==e.z?i.z-e.z:i.id-e.id}function Yd(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.z!==e.z?e.z-i.z:i.id-e.id}function $d(){const i=[];let e=0;const t=[],n=[],s=[];function o(){e=0,t.length=0,n.length=0,s.length=0}function r(d,h,f,_,g,m){let p=i[e];return p===void 0?(p={id:d.id,object:d,geometry:h,material:f,groupOrder:_,renderOrder:d.renderOrder,z:g,group:m},i[e]=p):(p.id=d.id,p.object=d,p.geometry=h,p.material=f,p.groupOrder=_,p.renderOrder=d.renderOrder,p.z=g,p.group=m),e++,p}function a(d,h,f,_,g,m){const p=r(d,h,f,_,g,m);f.transmission>0?n.push(p):f.transparent===!0?s.push(p):t.push(p)}function l(d,h,f,_,g,m){const p=r(d,h,f,_,g,m);f.transmission>0?n.unshift(p):f.transparent===!0?s.unshift(p):t.unshift(p)}function c(d,h){t.length>1&&t.sort(d||py),n.length>1&&n.sort(h||Yd),s.length>1&&s.sort(h||Yd)}function u(){for(let d=e,h=i.length;d<h;d++){const f=i[d];if(f.id===null)break;f.id=null,f.object=null,f.geometry=null,f.material=null,f.group=null}}return{opaque:t,transmissive:n,transparent:s,init:o,push:a,unshift:l,finish:u,sort:c}}function my(){let i=new WeakMap;function e(n,s){const o=i.get(n);let r;return o===void 0?(r=new $d,i.set(n,[r])):s>=o.length?(r=new $d,o.push(r)):r=o[s],r}function t(){i=new WeakMap}return{get:e,dispose:t}}function gy(){const i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new b,color:new oe};break;case"SpotLight":t={position:new b,direction:new b,color:new oe,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new b,color:new oe,distance:0,decay:0};break;case"HemisphereLight":t={direction:new b,skyColor:new oe,groundColor:new oe};break;case"RectAreaLight":t={color:new oe,position:new b,halfWidth:new b,halfHeight:new b};break}return i[e.id]=t,t}}}function _y(){const i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ge};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ge};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ge,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[e.id]=t,t}}}let vy=0;function xy(i,e){return(e.castShadow?2:0)-(i.castShadow?2:0)+(e.map?1:0)-(i.map?1:0)}function yy(i){const e=new gy,t=_y(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)n.probe.push(new b);const s=new b,o=new Le,r=new Le;function a(c){let u=0,d=0,h=0;for(let M=0;M<9;M++)n.probe[M].set(0,0,0);let f=0,_=0,g=0,m=0,p=0,w=0,y=0,x=0,A=0,T=0,P=0;c.sort(xy);for(let M=0,v=c.length;M<v;M++){const C=c[M],N=C.color,O=C.intensity,z=C.distance,D=C.shadow&&C.shadow.map?C.shadow.map.texture:null;if(C.isAmbientLight)u+=N.r*O,d+=N.g*O,h+=N.b*O;else if(C.isLightProbe){for(let I=0;I<9;I++)n.probe[I].addScaledVector(C.sh.coefficients[I],O);P++}else if(C.isDirectionalLight){const I=e.get(C);if(I.color.copy(C.color).multiplyScalar(C.intensity),C.castShadow){const G=C.shadow,F=t.get(C);F.shadowIntensity=G.intensity,F.shadowBias=G.bias,F.shadowNormalBias=G.normalBias,F.shadowRadius=G.radius,F.shadowMapSize=G.mapSize,n.directionalShadow[f]=F,n.directionalShadowMap[f]=D,n.directionalShadowMatrix[f]=C.shadow.matrix,w++}n.directional[f]=I,f++}else if(C.isSpotLight){const I=e.get(C);I.position.setFromMatrixPosition(C.matrixWorld),I.color.copy(N).multiplyScalar(O),I.distance=z,I.coneCos=Math.cos(C.angle),I.penumbraCos=Math.cos(C.angle*(1-C.penumbra)),I.decay=C.decay,n.spot[g]=I;const G=C.shadow;if(C.map&&(n.spotLightMap[A]=C.map,A++,G.updateMatrices(C),C.castShadow&&T++),n.spotLightMatrix[g]=G.matrix,C.castShadow){const F=t.get(C);F.shadowIntensity=G.intensity,F.shadowBias=G.bias,F.shadowNormalBias=G.normalBias,F.shadowRadius=G.radius,F.shadowMapSize=G.mapSize,n.spotShadow[g]=F,n.spotShadowMap[g]=D,x++}g++}else if(C.isRectAreaLight){const I=e.get(C);I.color.copy(N).multiplyScalar(O),I.halfWidth.set(C.width*.5,0,0),I.halfHeight.set(0,C.height*.5,0),n.rectArea[m]=I,m++}else if(C.isPointLight){const I=e.get(C);if(I.color.copy(C.color).multiplyScalar(C.intensity),I.distance=C.distance,I.decay=C.decay,C.castShadow){const G=C.shadow,F=t.get(C);F.shadowIntensity=G.intensity,F.shadowBias=G.bias,F.shadowNormalBias=G.normalBias,F.shadowRadius=G.radius,F.shadowMapSize=G.mapSize,F.shadowCameraNear=G.camera.near,F.shadowCameraFar=G.camera.far,n.pointShadow[_]=F,n.pointShadowMap[_]=D,n.pointShadowMatrix[_]=C.shadow.matrix,y++}n.point[_]=I,_++}else if(C.isHemisphereLight){const I=e.get(C);I.skyColor.copy(C.color).multiplyScalar(O),I.groundColor.copy(C.groundColor).multiplyScalar(O),n.hemi[p]=I,p++}}m>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=ae.LTC_FLOAT_1,n.rectAreaLTC2=ae.LTC_FLOAT_2):(n.rectAreaLTC1=ae.LTC_HALF_1,n.rectAreaLTC2=ae.LTC_HALF_2)),n.ambient[0]=u,n.ambient[1]=d,n.ambient[2]=h;const L=n.hash;(L.directionalLength!==f||L.pointLength!==_||L.spotLength!==g||L.rectAreaLength!==m||L.hemiLength!==p||L.numDirectionalShadows!==w||L.numPointShadows!==y||L.numSpotShadows!==x||L.numSpotMaps!==A||L.numLightProbes!==P)&&(n.directional.length=f,n.spot.length=g,n.rectArea.length=m,n.point.length=_,n.hemi.length=p,n.directionalShadow.length=w,n.directionalShadowMap.length=w,n.pointShadow.length=y,n.pointShadowMap.length=y,n.spotShadow.length=x,n.spotShadowMap.length=x,n.directionalShadowMatrix.length=w,n.pointShadowMatrix.length=y,n.spotLightMatrix.length=x+A-T,n.spotLightMap.length=A,n.numSpotLightShadowsWithMaps=T,n.numLightProbes=P,L.directionalLength=f,L.pointLength=_,L.spotLength=g,L.rectAreaLength=m,L.hemiLength=p,L.numDirectionalShadows=w,L.numPointShadows=y,L.numSpotShadows=x,L.numSpotMaps=A,L.numLightProbes=P,n.version=vy++)}function l(c,u){let d=0,h=0,f=0,_=0,g=0;const m=u.matrixWorldInverse;for(let p=0,w=c.length;p<w;p++){const y=c[p];if(y.isDirectionalLight){const x=n.directional[d];x.direction.setFromMatrixPosition(y.matrixWorld),s.setFromMatrixPosition(y.target.matrixWorld),x.direction.sub(s),x.direction.transformDirection(m),d++}else if(y.isSpotLight){const x=n.spot[f];x.position.setFromMatrixPosition(y.matrixWorld),x.position.applyMatrix4(m),x.direction.setFromMatrixPosition(y.matrixWorld),s.setFromMatrixPosition(y.target.matrixWorld),x.direction.sub(s),x.direction.transformDirection(m),f++}else if(y.isRectAreaLight){const x=n.rectArea[_];x.position.setFromMatrixPosition(y.matrixWorld),x.position.applyMatrix4(m),r.identity(),o.copy(y.matrixWorld),o.premultiply(m),r.extractRotation(o),x.halfWidth.set(y.width*.5,0,0),x.halfHeight.set(0,y.height*.5,0),x.halfWidth.applyMatrix4(r),x.halfHeight.applyMatrix4(r),_++}else if(y.isPointLight){const x=n.point[h];x.position.setFromMatrixPosition(y.matrixWorld),x.position.applyMatrix4(m),h++}else if(y.isHemisphereLight){const x=n.hemi[g];x.direction.setFromMatrixPosition(y.matrixWorld),x.direction.transformDirection(m),g++}}}return{setup:a,setupView:l,state:n}}function Kd(i){const e=new yy(i),t=[],n=[];function s(u){c.camera=u,t.length=0,n.length=0}function o(u){t.push(u)}function r(u){n.push(u)}function a(){e.setup(t)}function l(u){e.setupView(t,u)}const c={lightsArray:t,shadowsArray:n,camera:null,lights:e,transmissionRenderTarget:{}};return{init:s,state:c,setupLights:a,setupLightsView:l,pushLight:o,pushShadow:r}}function wy(i){let e=new WeakMap;function t(s,o=0){const r=e.get(s);let a;return r===void 0?(a=new Kd(i),e.set(s,[a])):o>=r.length?(a=new Kd(i),r.push(a)):a=r[o],a}function n(){e=new WeakMap}return{get:t,dispose:n}}const Sy=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,My=`uniform sampler2D shadow_pass;
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
}`;function Ey(i,e,t){let n=new iu;const s=new ge,o=new ge,r=new We,a=new vf({depthPacking:tf}),l=new xg,c={},u=t.maxTextureSize,d={[yi]:gn,[gn]:yi,[pn]:pn},h=new Et({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new ge},radius:{value:4}},vertexShader:Sy,fragmentShader:My}),f=h.clone();f.defines.HORIZONTAL_PASS=1;const _=new vt;_.setAttribute("position",new Tt(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const g=new re(_,h),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Gh;let p=this.type;this.render=function(T,P,L){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||T.length===0)return;const M=i.getRenderTarget(),v=i.getActiveCubeFace(),C=i.getActiveMipmapLevel(),N=i.state;N.setBlending(Yn),N.buffers.color.setClear(1,1,1,1),N.buffers.depth.setTest(!0),N.setScissorTest(!1);const O=p!==hi&&this.type===hi,z=p===hi&&this.type!==hi;for(let D=0,I=T.length;D<I;D++){const G=T[D],F=G.shadow;if(F===void 0){console.warn("THREE.WebGLShadowMap:",G,"has no shadow.");continue}if(F.autoUpdate===!1&&F.needsUpdate===!1)continue;s.copy(F.mapSize);const W=F.getFrameExtents();if(s.multiply(W),o.copy(F.mapSize),(s.x>u||s.y>u)&&(s.x>u&&(o.x=Math.floor(u/W.x),s.x=o.x*W.x,F.mapSize.x=o.x),s.y>u&&(o.y=Math.floor(u/W.y),s.y=o.y*W.y,F.mapSize.y=o.y)),F.map===null||O===!0||z===!0){const ee=this.type!==hi?{minFilter:rn,magFilter:rn}:{};F.map!==null&&F.map.dispose(),F.map=new tn(s.x,s.y,ee),F.map.texture.name=G.name+".shadowMap",F.camera.updateProjectionMatrix()}i.setRenderTarget(F.map),i.clear();const j=F.getViewportCount();for(let ee=0;ee<j;ee++){const ce=F.getViewport(ee);r.set(o.x*ce.x,o.y*ce.y,o.x*ce.z,o.y*ce.w),N.viewport(r),F.updateMatrices(G,ee),n=F.getFrustum(),x(P,L,F.camera,G,this.type)}F.isPointLightShadow!==!0&&this.type===hi&&w(F,L),F.needsUpdate=!1}p=this.type,m.needsUpdate=!1,i.setRenderTarget(M,v,C)};function w(T,P){const L=e.update(g);h.defines.VSM_SAMPLES!==T.blurSamples&&(h.defines.VSM_SAMPLES=T.blurSamples,f.defines.VSM_SAMPLES=T.blurSamples,h.needsUpdate=!0,f.needsUpdate=!0),T.mapPass===null&&(T.mapPass=new tn(s.x,s.y)),h.uniforms.shadow_pass.value=T.map.texture,h.uniforms.resolution.value=T.mapSize,h.uniforms.radius.value=T.radius,i.setRenderTarget(T.mapPass),i.clear(),i.renderBufferDirect(P,null,L,h,g,null),f.uniforms.shadow_pass.value=T.mapPass.texture,f.uniforms.resolution.value=T.mapSize,f.uniforms.radius.value=T.radius,i.setRenderTarget(T.map),i.clear(),i.renderBufferDirect(P,null,L,f,g,null)}function y(T,P,L,M){let v=null;const C=L.isPointLight===!0?T.customDistanceMaterial:T.customDepthMaterial;if(C!==void 0)v=C;else if(v=L.isPointLight===!0?l:a,i.localClippingEnabled&&P.clipShadows===!0&&Array.isArray(P.clippingPlanes)&&P.clippingPlanes.length!==0||P.displacementMap&&P.displacementScale!==0||P.alphaMap&&P.alphaTest>0||P.map&&P.alphaTest>0){const N=v.uuid,O=P.uuid;let z=c[N];z===void 0&&(z={},c[N]=z);let D=z[O];D===void 0&&(D=v.clone(),z[O]=D,P.addEventListener("dispose",A)),v=D}if(v.visible=P.visible,v.wireframe=P.wireframe,M===hi?v.side=P.shadowSide!==null?P.shadowSide:P.side:v.side=P.shadowSide!==null?P.shadowSide:d[P.side],v.alphaMap=P.alphaMap,v.alphaTest=P.alphaTest,v.map=P.map,v.clipShadows=P.clipShadows,v.clippingPlanes=P.clippingPlanes,v.clipIntersection=P.clipIntersection,v.displacementMap=P.displacementMap,v.displacementScale=P.displacementScale,v.displacementBias=P.displacementBias,v.wireframeLinewidth=P.wireframeLinewidth,v.linewidth=P.linewidth,L.isPointLight===!0&&v.isMeshDistanceMaterial===!0){const N=i.properties.get(v);N.light=L}return v}function x(T,P,L,M,v){if(T.visible===!1)return;if(T.layers.test(P.layers)&&(T.isMesh||T.isLine||T.isPoints)&&(T.castShadow||T.receiveShadow&&v===hi)&&(!T.frustumCulled||n.intersectsObject(T))){T.modelViewMatrix.multiplyMatrices(L.matrixWorldInverse,T.matrixWorld);const O=e.update(T),z=T.material;if(Array.isArray(z)){const D=O.groups;for(let I=0,G=D.length;I<G;I++){const F=D[I],W=z[F.materialIndex];if(W&&W.visible){const j=y(T,W,M,v);T.onBeforeShadow(i,T,P,L,O,j,F),i.renderBufferDirect(L,null,O,j,T,F),T.onAfterShadow(i,T,P,L,O,j,F)}}}else if(z.visible){const D=y(T,z,M,v);T.onBeforeShadow(i,T,P,L,O,D,null),i.renderBufferDirect(L,null,O,D,T,null),T.onAfterShadow(i,T,P,L,O,D,null)}}const N=T.children;for(let O=0,z=N.length;O<z;O++)x(N[O],P,L,M,v)}function A(T){T.target.removeEventListener("dispose",A);for(const L in c){const M=c[L],v=T.target.uuid;v in M&&(M[v].dispose(),delete M[v])}}}const by={[jl]:Yl,[$l]:Jl,[Kl]:Ql,[lo]:Zl,[Yl]:jl,[Jl]:$l,[Ql]:Kl,[Zl]:lo};function Ty(i,e){function t(){let B=!1;const ue=new We;let Y=null;const J=new We(0,0,0,0);return{setMask:function(me){Y!==me&&!B&&(i.colorMask(me,me,me,me),Y=me)},setLocked:function(me){B=me},setClear:function(me,pe,Fe,wt,Vt){Vt===!0&&(me*=wt,pe*=wt,Fe*=wt),ue.set(me,pe,Fe,wt),J.equals(ue)===!1&&(i.clearColor(me,pe,Fe,wt),J.copy(ue))},reset:function(){B=!1,Y=null,J.set(-1,0,0,0)}}}function n(){let B=!1,ue=!1,Y=null,J=null,me=null;return{setReversed:function(pe){if(ue!==pe){const Fe=e.get("EXT_clip_control");ue?Fe.clipControlEXT(Fe.LOWER_LEFT_EXT,Fe.ZERO_TO_ONE_EXT):Fe.clipControlEXT(Fe.LOWER_LEFT_EXT,Fe.NEGATIVE_ONE_TO_ONE_EXT);const wt=me;me=null,this.setClear(wt)}ue=pe},getReversed:function(){return ue},setTest:function(pe){pe?he(i.DEPTH_TEST):De(i.DEPTH_TEST)},setMask:function(pe){Y!==pe&&!B&&(i.depthMask(pe),Y=pe)},setFunc:function(pe){if(ue&&(pe=by[pe]),J!==pe){switch(pe){case jl:i.depthFunc(i.NEVER);break;case Yl:i.depthFunc(i.ALWAYS);break;case $l:i.depthFunc(i.LESS);break;case lo:i.depthFunc(i.LEQUAL);break;case Kl:i.depthFunc(i.EQUAL);break;case Zl:i.depthFunc(i.GEQUAL);break;case Jl:i.depthFunc(i.GREATER);break;case Ql:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}J=pe}},setLocked:function(pe){B=pe},setClear:function(pe){me!==pe&&(ue&&(pe=1-pe),i.clearDepth(pe),me=pe)},reset:function(){B=!1,Y=null,J=null,me=null,ue=!1}}}function s(){let B=!1,ue=null,Y=null,J=null,me=null,pe=null,Fe=null,wt=null,Vt=null;return{setTest:function(rt){B||(rt?he(i.STENCIL_TEST):De(i.STENCIL_TEST))},setMask:function(rt){ue!==rt&&!B&&(i.stencilMask(rt),ue=rt)},setFunc:function(rt,Fn,si){(Y!==rt||J!==Fn||me!==si)&&(i.stencilFunc(rt,Fn,si),Y=rt,J=Fn,me=si)},setOp:function(rt,Fn,si){(pe!==rt||Fe!==Fn||wt!==si)&&(i.stencilOp(rt,Fn,si),pe=rt,Fe=Fn,wt=si)},setLocked:function(rt){B=rt},setClear:function(rt){Vt!==rt&&(i.clearStencil(rt),Vt=rt)},reset:function(){B=!1,ue=null,Y=null,J=null,me=null,pe=null,Fe=null,wt=null,Vt=null}}}const o=new t,r=new n,a=new s,l=new WeakMap,c=new WeakMap;let u={},d={},h=new WeakMap,f=[],_=null,g=!1,m=null,p=null,w=null,y=null,x=null,A=null,T=null,P=new oe(0,0,0),L=0,M=!1,v=null,C=null,N=null,O=null,z=null;const D=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let I=!1,G=0;const F=i.getParameter(i.VERSION);F.indexOf("WebGL")!==-1?(G=parseFloat(/^WebGL (\d)/.exec(F)[1]),I=G>=1):F.indexOf("OpenGL ES")!==-1&&(G=parseFloat(/^OpenGL ES (\d)/.exec(F)[1]),I=G>=2);let W=null,j={};const ee=i.getParameter(i.SCISSOR_BOX),ce=i.getParameter(i.VIEWPORT),Re=new We().fromArray(ee),$=new We().fromArray(ce);function ie(B,ue,Y,J){const me=new Uint8Array(4),pe=i.createTexture();i.bindTexture(B,pe),i.texParameteri(B,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(B,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let Fe=0;Fe<Y;Fe++)B===i.TEXTURE_3D||B===i.TEXTURE_2D_ARRAY?i.texImage3D(ue,0,i.RGBA,1,1,J,0,i.RGBA,i.UNSIGNED_BYTE,me):i.texImage2D(ue+Fe,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,me);return pe}const we={};we[i.TEXTURE_2D]=ie(i.TEXTURE_2D,i.TEXTURE_2D,1),we[i.TEXTURE_CUBE_MAP]=ie(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),we[i.TEXTURE_2D_ARRAY]=ie(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),we[i.TEXTURE_3D]=ie(i.TEXTURE_3D,i.TEXTURE_3D,1,1),o.setClear(0,0,0,1),r.setClear(1),a.setClear(0),he(i.DEPTH_TEST),r.setFunc(lo),$e(!1),Ke(Ru),he(i.CULL_FACE),U(Yn);function he(B){u[B]!==!0&&(i.enable(B),u[B]=!0)}function De(B){u[B]!==!1&&(i.disable(B),u[B]=!1)}function Ue(B,ue){return d[B]!==ue?(i.bindFramebuffer(B,ue),d[B]=ue,B===i.DRAW_FRAMEBUFFER&&(d[i.FRAMEBUFFER]=ue),B===i.FRAMEBUFFER&&(d[i.DRAW_FRAMEBUFFER]=ue),!0):!1}function Ge(B,ue){let Y=f,J=!1;if(B){Y=h.get(ue),Y===void 0&&(Y=[],h.set(ue,Y));const me=B.textures;if(Y.length!==me.length||Y[0]!==i.COLOR_ATTACHMENT0){for(let pe=0,Fe=me.length;pe<Fe;pe++)Y[pe]=i.COLOR_ATTACHMENT0+pe;Y.length=me.length,J=!0}}else Y[0]!==i.BACK&&(Y[0]=i.BACK,J=!0);J&&i.drawBuffers(Y)}function xt(B){return _!==B?(i.useProgram(B),_=B,!0):!1}const Qe={[cs]:i.FUNC_ADD,[Fp]:i.FUNC_SUBTRACT,[Bp]:i.FUNC_REVERSE_SUBTRACT};Qe[zp]=i.MIN,Qe[kp]=i.MAX;const bt={[Hp]:i.ZERO,[Gp]:i.ONE,[Vp]:i.SRC_COLOR,[Xl]:i.SRC_ALPHA,[$p]:i.SRC_ALPHA_SATURATE,[jp]:i.DST_COLOR,[Xp]:i.DST_ALPHA,[Wp]:i.ONE_MINUS_SRC_COLOR,[ql]:i.ONE_MINUS_SRC_ALPHA,[Yp]:i.ONE_MINUS_DST_COLOR,[qp]:i.ONE_MINUS_DST_ALPHA,[Kp]:i.CONSTANT_COLOR,[Zp]:i.ONE_MINUS_CONSTANT_COLOR,[Jp]:i.CONSTANT_ALPHA,[Qp]:i.ONE_MINUS_CONSTANT_ALPHA};function U(B,ue,Y,J,me,pe,Fe,wt,Vt,rt){if(B===Yn){g===!0&&(De(i.BLEND),g=!1);return}if(g===!1&&(he(i.BLEND),g=!0),B!==Up){if(B!==m||rt!==M){if((p!==cs||x!==cs)&&(i.blendEquation(i.FUNC_ADD),p=cs,x=cs),rt)switch(B){case Js:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Wl:i.blendFunc(i.ONE,i.ONE);break;case Pu:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case Du:i.blendFuncSeparate(i.ZERO,i.SRC_COLOR,i.ZERO,i.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",B);break}else switch(B){case Js:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Wl:i.blendFunc(i.SRC_ALPHA,i.ONE);break;case Pu:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case Du:i.blendFunc(i.ZERO,i.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",B);break}w=null,y=null,A=null,T=null,P.set(0,0,0),L=0,m=B,M=rt}return}me=me||ue,pe=pe||Y,Fe=Fe||J,(ue!==p||me!==x)&&(i.blendEquationSeparate(Qe[ue],Qe[me]),p=ue,x=me),(Y!==w||J!==y||pe!==A||Fe!==T)&&(i.blendFuncSeparate(bt[Y],bt[J],bt[pe],bt[Fe]),w=Y,y=J,A=pe,T=Fe),(wt.equals(P)===!1||Vt!==L)&&(i.blendColor(wt.r,wt.g,wt.b,Vt),P.copy(wt),L=Vt),m=B,M=!1}function bn(B,ue){B.side===pn?De(i.CULL_FACE):he(i.CULL_FACE);let Y=B.side===gn;ue&&(Y=!Y),$e(Y),B.blending===Js&&B.transparent===!1?U(Yn):U(B.blending,B.blendEquation,B.blendSrc,B.blendDst,B.blendEquationAlpha,B.blendSrcAlpha,B.blendDstAlpha,B.blendColor,B.blendAlpha,B.premultipliedAlpha),r.setFunc(B.depthFunc),r.setTest(B.depthTest),r.setMask(B.depthWrite),o.setMask(B.colorWrite);const J=B.stencilWrite;a.setTest(J),J&&(a.setMask(B.stencilWriteMask),a.setFunc(B.stencilFunc,B.stencilRef,B.stencilFuncMask),a.setOp(B.stencilFail,B.stencilZFail,B.stencilZPass)),mt(B.polygonOffset,B.polygonOffsetFactor,B.polygonOffsetUnits),B.alphaToCoverage===!0?he(i.SAMPLE_ALPHA_TO_COVERAGE):De(i.SAMPLE_ALPHA_TO_COVERAGE)}function $e(B){v!==B&&(B?i.frontFace(i.CW):i.frontFace(i.CCW),v=B)}function Ke(B){B!==Ip?(he(i.CULL_FACE),B!==C&&(B===Ru?i.cullFace(i.BACK):B===Np?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):De(i.CULL_FACE),C=B}function Ee(B){B!==N&&(I&&i.lineWidth(B),N=B)}function mt(B,ue,Y){B?(he(i.POLYGON_OFFSET_FILL),(O!==ue||z!==Y)&&(i.polygonOffset(ue,Y),O=ue,z=Y)):De(i.POLYGON_OFFSET_FILL)}function be(B){B?he(i.SCISSOR_TEST):De(i.SCISSOR_TEST)}function R(B){B===void 0&&(B=i.TEXTURE0+D-1),W!==B&&(i.activeTexture(B),W=B)}function S(B,ue,Y){Y===void 0&&(W===null?Y=i.TEXTURE0+D-1:Y=W);let J=j[Y];J===void 0&&(J={type:void 0,texture:void 0},j[Y]=J),(J.type!==B||J.texture!==ue)&&(W!==Y&&(i.activeTexture(Y),W=Y),i.bindTexture(B,ue||we[B]),J.type=B,J.texture=ue)}function V(){const B=j[W];B!==void 0&&B.type!==void 0&&(i.bindTexture(B.type,null),B.type=void 0,B.texture=void 0)}function Z(){try{i.compressedTexImage2D.apply(i,arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function Q(){try{i.compressedTexImage3D.apply(i,arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function K(){try{i.texSubImage2D.apply(i,arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function Me(){try{i.texSubImage3D.apply(i,arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function fe(){try{i.compressedTexSubImage2D.apply(i,arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function ve(){try{i.compressedTexSubImage3D.apply(i,arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function et(){try{i.texStorage2D.apply(i,arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function se(){try{i.texStorage3D.apply(i,arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function xe(){try{i.texImage2D.apply(i,arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function Pe(){try{i.texImage3D.apply(i,arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function Ie(B){Re.equals(B)===!1&&(i.scissor(B.x,B.y,B.z,B.w),Re.copy(B))}function ye(B){$.equals(B)===!1&&(i.viewport(B.x,B.y,B.z,B.w),$.copy(B))}function Ze(B,ue){let Y=c.get(ue);Y===void 0&&(Y=new WeakMap,c.set(ue,Y));let J=Y.get(B);J===void 0&&(J=i.getUniformBlockIndex(ue,B.name),Y.set(B,J))}function ze(B,ue){const J=c.get(ue).get(B);l.get(ue)!==J&&(i.uniformBlockBinding(ue,J,B.__bindingPointIndex),l.set(ue,J))}function ht(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),r.setReversed(!1),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),u={},W=null,j={},d={},h=new WeakMap,f=[],_=null,g=!1,m=null,p=null,w=null,y=null,x=null,A=null,T=null,P=new oe(0,0,0),L=0,M=!1,v=null,C=null,N=null,O=null,z=null,Re.set(0,0,i.canvas.width,i.canvas.height),$.set(0,0,i.canvas.width,i.canvas.height),o.reset(),r.reset(),a.reset()}return{buffers:{color:o,depth:r,stencil:a},enable:he,disable:De,bindFramebuffer:Ue,drawBuffers:Ge,useProgram:xt,setBlending:U,setMaterial:bn,setFlipSided:$e,setCullFace:Ke,setLineWidth:Ee,setPolygonOffset:mt,setScissorTest:be,activeTexture:R,bindTexture:S,unbindTexture:V,compressedTexImage2D:Z,compressedTexImage3D:Q,texImage2D:xe,texImage3D:Pe,updateUBOMapping:Ze,uniformBlockBinding:ze,texStorage2D:et,texStorage3D:se,texSubImage2D:K,texSubImage3D:Me,compressedTexSubImage2D:fe,compressedTexSubImage3D:ve,scissor:Ie,viewport:ye,reset:ht}}function Ay(i,e,t,n,s,o,r){const a=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new ge,u=new WeakMap;let d;const h=new WeakMap;let f=!1;try{f=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function _(R,S){return f?new OffscreenCanvas(R,S):or("canvas")}function g(R,S,V){let Z=1;const Q=be(R);if((Q.width>V||Q.height>V)&&(Z=V/Math.max(Q.width,Q.height)),Z<1)if(typeof HTMLImageElement<"u"&&R instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&R instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&R instanceof ImageBitmap||typeof VideoFrame<"u"&&R instanceof VideoFrame){const K=Math.floor(Z*Q.width),Me=Math.floor(Z*Q.height);d===void 0&&(d=_(K,Me));const fe=S?_(K,Me):d;return fe.width=K,fe.height=Me,fe.getContext("2d").drawImage(R,0,0,K,Me),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+Q.width+"x"+Q.height+") to ("+K+"x"+Me+")."),fe}else return"data"in R&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+Q.width+"x"+Q.height+")."),R;return R}function m(R){return R.generateMipmaps}function p(R){i.generateMipmap(R)}function w(R){return R.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:R.isWebGL3DRenderTarget?i.TEXTURE_3D:R.isWebGLArrayRenderTarget||R.isCompressedArrayTexture?i.TEXTURE_2D_ARRAY:i.TEXTURE_2D}function y(R,S,V,Z,Q=!1){if(R!==null){if(i[R]!==void 0)return i[R];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+R+"'")}let K=S;if(S===i.RED&&(V===i.FLOAT&&(K=i.R32F),V===i.HALF_FLOAT&&(K=i.R16F),V===i.UNSIGNED_BYTE&&(K=i.R8)),S===i.RED_INTEGER&&(V===i.UNSIGNED_BYTE&&(K=i.R8UI),V===i.UNSIGNED_SHORT&&(K=i.R16UI),V===i.UNSIGNED_INT&&(K=i.R32UI),V===i.BYTE&&(K=i.R8I),V===i.SHORT&&(K=i.R16I),V===i.INT&&(K=i.R32I)),S===i.RG&&(V===i.FLOAT&&(K=i.RG32F),V===i.HALF_FLOAT&&(K=i.RG16F),V===i.UNSIGNED_BYTE&&(K=i.RG8)),S===i.RG_INTEGER&&(V===i.UNSIGNED_BYTE&&(K=i.RG8UI),V===i.UNSIGNED_SHORT&&(K=i.RG16UI),V===i.UNSIGNED_INT&&(K=i.RG32UI),V===i.BYTE&&(K=i.RG8I),V===i.SHORT&&(K=i.RG16I),V===i.INT&&(K=i.RG32I)),S===i.RGB_INTEGER&&(V===i.UNSIGNED_BYTE&&(K=i.RGB8UI),V===i.UNSIGNED_SHORT&&(K=i.RGB16UI),V===i.UNSIGNED_INT&&(K=i.RGB32UI),V===i.BYTE&&(K=i.RGB8I),V===i.SHORT&&(K=i.RGB16I),V===i.INT&&(K=i.RGB32I)),S===i.RGBA_INTEGER&&(V===i.UNSIGNED_BYTE&&(K=i.RGBA8UI),V===i.UNSIGNED_SHORT&&(K=i.RGBA16UI),V===i.UNSIGNED_INT&&(K=i.RGBA32UI),V===i.BYTE&&(K=i.RGBA8I),V===i.SHORT&&(K=i.RGBA16I),V===i.INT&&(K=i.RGBA32I)),S===i.RGB&&V===i.UNSIGNED_INT_5_9_9_9_REV&&(K=i.RGB9_E5),S===i.RGBA){const Me=Q?Ta:Je.getTransfer(Z);V===i.FLOAT&&(K=i.RGBA32F),V===i.HALF_FLOAT&&(K=i.RGBA16F),V===i.UNSIGNED_BYTE&&(K=Me===ct?i.SRGB8_ALPHA8:i.RGBA8),V===i.UNSIGNED_SHORT_4_4_4_4&&(K=i.RGBA4),V===i.UNSIGNED_SHORT_5_5_5_1&&(K=i.RGB5_A1)}return(K===i.R16F||K===i.R32F||K===i.RG16F||K===i.RG32F||K===i.RGBA16F||K===i.RGBA32F)&&e.get("EXT_color_buffer_float"),K}function x(R,S){let V;return R?S===null||S===vs||S===fo?V=i.DEPTH24_STENCIL8:S===qn?V=i.DEPTH32F_STENCIL8:S===nr&&(V=i.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):S===null||S===vs||S===fo?V=i.DEPTH_COMPONENT24:S===qn?V=i.DEPTH_COMPONENT32F:S===nr&&(V=i.DEPTH_COMPONENT16),V}function A(R,S){return m(R)===!0||R.isFramebufferTexture&&R.minFilter!==rn&&R.minFilter!==Sn?Math.log2(Math.max(S.width,S.height))+1:R.mipmaps!==void 0&&R.mipmaps.length>0?R.mipmaps.length:R.isCompressedTexture&&Array.isArray(R.image)?S.mipmaps.length:1}function T(R){const S=R.target;S.removeEventListener("dispose",T),L(S),S.isVideoTexture&&u.delete(S)}function P(R){const S=R.target;S.removeEventListener("dispose",P),v(S)}function L(R){const S=n.get(R);if(S.__webglInit===void 0)return;const V=R.source,Z=h.get(V);if(Z){const Q=Z[S.__cacheKey];Q.usedTimes--,Q.usedTimes===0&&M(R),Object.keys(Z).length===0&&h.delete(V)}n.remove(R)}function M(R){const S=n.get(R);i.deleteTexture(S.__webglTexture);const V=R.source,Z=h.get(V);delete Z[S.__cacheKey],r.memory.textures--}function v(R){const S=n.get(R);if(R.depthTexture&&(R.depthTexture.dispose(),n.remove(R.depthTexture)),R.isWebGLCubeRenderTarget)for(let Z=0;Z<6;Z++){if(Array.isArray(S.__webglFramebuffer[Z]))for(let Q=0;Q<S.__webglFramebuffer[Z].length;Q++)i.deleteFramebuffer(S.__webglFramebuffer[Z][Q]);else i.deleteFramebuffer(S.__webglFramebuffer[Z]);S.__webglDepthbuffer&&i.deleteRenderbuffer(S.__webglDepthbuffer[Z])}else{if(Array.isArray(S.__webglFramebuffer))for(let Z=0;Z<S.__webglFramebuffer.length;Z++)i.deleteFramebuffer(S.__webglFramebuffer[Z]);else i.deleteFramebuffer(S.__webglFramebuffer);if(S.__webglDepthbuffer&&i.deleteRenderbuffer(S.__webglDepthbuffer),S.__webglMultisampledFramebuffer&&i.deleteFramebuffer(S.__webglMultisampledFramebuffer),S.__webglColorRenderbuffer)for(let Z=0;Z<S.__webglColorRenderbuffer.length;Z++)S.__webglColorRenderbuffer[Z]&&i.deleteRenderbuffer(S.__webglColorRenderbuffer[Z]);S.__webglDepthRenderbuffer&&i.deleteRenderbuffer(S.__webglDepthRenderbuffer)}const V=R.textures;for(let Z=0,Q=V.length;Z<Q;Z++){const K=n.get(V[Z]);K.__webglTexture&&(i.deleteTexture(K.__webglTexture),r.memory.textures--),n.remove(V[Z])}n.remove(R)}let C=0;function N(){C=0}function O(){const R=C;return R>=s.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+R+" texture units while this GPU supports only "+s.maxTextures),C+=1,R}function z(R){const S=[];return S.push(R.wrapS),S.push(R.wrapT),S.push(R.wrapR||0),S.push(R.magFilter),S.push(R.minFilter),S.push(R.anisotropy),S.push(R.internalFormat),S.push(R.format),S.push(R.type),S.push(R.generateMipmaps),S.push(R.premultiplyAlpha),S.push(R.flipY),S.push(R.unpackAlignment),S.push(R.colorSpace),S.join()}function D(R,S){const V=n.get(R);if(R.isVideoTexture&&Ee(R),R.isRenderTargetTexture===!1&&R.version>0&&V.__version!==R.version){const Z=R.image;if(Z===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(Z.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{$(V,R,S);return}}t.bindTexture(i.TEXTURE_2D,V.__webglTexture,i.TEXTURE0+S)}function I(R,S){const V=n.get(R);if(R.version>0&&V.__version!==R.version){$(V,R,S);return}t.bindTexture(i.TEXTURE_2D_ARRAY,V.__webglTexture,i.TEXTURE0+S)}function G(R,S){const V=n.get(R);if(R.version>0&&V.__version!==R.version){$(V,R,S);return}t.bindTexture(i.TEXTURE_3D,V.__webglTexture,i.TEXTURE0+S)}function F(R,S){const V=n.get(R);if(R.version>0&&V.__version!==R.version){ie(V,R,S);return}t.bindTexture(i.TEXTURE_CUBE_MAP,V.__webglTexture,i.TEXTURE0+S)}const W={[ho]:i.REPEAT,[Fi]:i.CLAMP_TO_EDGE,[ba]:i.MIRRORED_REPEAT},j={[rn]:i.NEAREST,[Wh]:i.NEAREST_MIPMAP_NEAREST,[Go]:i.NEAREST_MIPMAP_LINEAR,[Sn]:i.LINEAR,[fa]:i.LINEAR_MIPMAP_NEAREST,[mi]:i.LINEAR_MIPMAP_LINEAR},ee={[pm]:i.NEVER,[ym]:i.ALWAYS,[mm]:i.LESS,[nf]:i.LEQUAL,[gm]:i.EQUAL,[xm]:i.GEQUAL,[_m]:i.GREATER,[vm]:i.NOTEQUAL};function ce(R,S){if(S.type===qn&&e.has("OES_texture_float_linear")===!1&&(S.magFilter===Sn||S.magFilter===fa||S.magFilter===Go||S.magFilter===mi||S.minFilter===Sn||S.minFilter===fa||S.minFilter===Go||S.minFilter===mi)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(R,i.TEXTURE_WRAP_S,W[S.wrapS]),i.texParameteri(R,i.TEXTURE_WRAP_T,W[S.wrapT]),(R===i.TEXTURE_3D||R===i.TEXTURE_2D_ARRAY)&&i.texParameteri(R,i.TEXTURE_WRAP_R,W[S.wrapR]),i.texParameteri(R,i.TEXTURE_MAG_FILTER,j[S.magFilter]),i.texParameteri(R,i.TEXTURE_MIN_FILTER,j[S.minFilter]),S.compareFunction&&(i.texParameteri(R,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(R,i.TEXTURE_COMPARE_FUNC,ee[S.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(S.magFilter===rn||S.minFilter!==Go&&S.minFilter!==mi||S.type===qn&&e.has("OES_texture_float_linear")===!1)return;if(S.anisotropy>1||n.get(S).__currentAnisotropy){const V=e.get("EXT_texture_filter_anisotropic");i.texParameterf(R,V.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(S.anisotropy,s.getMaxAnisotropy())),n.get(S).__currentAnisotropy=S.anisotropy}}}function Re(R,S){let V=!1;R.__webglInit===void 0&&(R.__webglInit=!0,S.addEventListener("dispose",T));const Z=S.source;let Q=h.get(Z);Q===void 0&&(Q={},h.set(Z,Q));const K=z(S);if(K!==R.__cacheKey){Q[K]===void 0&&(Q[K]={texture:i.createTexture(),usedTimes:0},r.memory.textures++,V=!0),Q[K].usedTimes++;const Me=Q[R.__cacheKey];Me!==void 0&&(Q[R.__cacheKey].usedTimes--,Me.usedTimes===0&&M(S)),R.__cacheKey=K,R.__webglTexture=Q[K].texture}return V}function $(R,S,V){let Z=i.TEXTURE_2D;(S.isDataArrayTexture||S.isCompressedArrayTexture)&&(Z=i.TEXTURE_2D_ARRAY),S.isData3DTexture&&(Z=i.TEXTURE_3D);const Q=Re(R,S),K=S.source;t.bindTexture(Z,R.__webglTexture,i.TEXTURE0+V);const Me=n.get(K);if(K.version!==Me.__version||Q===!0){t.activeTexture(i.TEXTURE0+V);const fe=Je.getPrimaries(Je.workingColorSpace),ve=S.colorSpace===Oi?null:Je.getPrimaries(S.colorSpace),et=S.colorSpace===Oi||fe===ve?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,S.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,S.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,S.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,et);let se=g(S.image,!1,s.maxTextureSize);se=mt(S,se);const xe=o.convert(S.format,S.colorSpace),Pe=o.convert(S.type);let Ie=y(S.internalFormat,xe,Pe,S.colorSpace,S.isVideoTexture);ce(Z,S);let ye;const Ze=S.mipmaps,ze=S.isVideoTexture!==!0,ht=Me.__version===void 0||Q===!0,B=K.dataReady,ue=A(S,se);if(S.isDepthTexture)Ie=x(S.format===po,S.type),ht&&(ze?t.texStorage2D(i.TEXTURE_2D,1,Ie,se.width,se.height):t.texImage2D(i.TEXTURE_2D,0,Ie,se.width,se.height,0,xe,Pe,null));else if(S.isDataTexture)if(Ze.length>0){ze&&ht&&t.texStorage2D(i.TEXTURE_2D,ue,Ie,Ze[0].width,Ze[0].height);for(let Y=0,J=Ze.length;Y<J;Y++)ye=Ze[Y],ze?B&&t.texSubImage2D(i.TEXTURE_2D,Y,0,0,ye.width,ye.height,xe,Pe,ye.data):t.texImage2D(i.TEXTURE_2D,Y,Ie,ye.width,ye.height,0,xe,Pe,ye.data);S.generateMipmaps=!1}else ze?(ht&&t.texStorage2D(i.TEXTURE_2D,ue,Ie,se.width,se.height),B&&t.texSubImage2D(i.TEXTURE_2D,0,0,0,se.width,se.height,xe,Pe,se.data)):t.texImage2D(i.TEXTURE_2D,0,Ie,se.width,se.height,0,xe,Pe,se.data);else if(S.isCompressedTexture)if(S.isCompressedArrayTexture){ze&&ht&&t.texStorage3D(i.TEXTURE_2D_ARRAY,ue,Ie,Ze[0].width,Ze[0].height,se.depth);for(let Y=0,J=Ze.length;Y<J;Y++)if(ye=Ze[Y],S.format!==Ln)if(xe!==null)if(ze){if(B)if(S.layerUpdates.size>0){const me=Td(ye.width,ye.height,S.format,S.type);for(const pe of S.layerUpdates){const Fe=ye.data.subarray(pe*me/ye.data.BYTES_PER_ELEMENT,(pe+1)*me/ye.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,Y,0,0,pe,ye.width,ye.height,1,xe,Fe)}S.clearLayerUpdates()}else t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,Y,0,0,0,ye.width,ye.height,se.depth,xe,ye.data)}else t.compressedTexImage3D(i.TEXTURE_2D_ARRAY,Y,Ie,ye.width,ye.height,se.depth,0,ye.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else ze?B&&t.texSubImage3D(i.TEXTURE_2D_ARRAY,Y,0,0,0,ye.width,ye.height,se.depth,xe,Pe,ye.data):t.texImage3D(i.TEXTURE_2D_ARRAY,Y,Ie,ye.width,ye.height,se.depth,0,xe,Pe,ye.data)}else{ze&&ht&&t.texStorage2D(i.TEXTURE_2D,ue,Ie,Ze[0].width,Ze[0].height);for(let Y=0,J=Ze.length;Y<J;Y++)ye=Ze[Y],S.format!==Ln?xe!==null?ze?B&&t.compressedTexSubImage2D(i.TEXTURE_2D,Y,0,0,ye.width,ye.height,xe,ye.data):t.compressedTexImage2D(i.TEXTURE_2D,Y,Ie,ye.width,ye.height,0,ye.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):ze?B&&t.texSubImage2D(i.TEXTURE_2D,Y,0,0,ye.width,ye.height,xe,Pe,ye.data):t.texImage2D(i.TEXTURE_2D,Y,Ie,ye.width,ye.height,0,xe,Pe,ye.data)}else if(S.isDataArrayTexture)if(ze){if(ht&&t.texStorage3D(i.TEXTURE_2D_ARRAY,ue,Ie,se.width,se.height,se.depth),B)if(S.layerUpdates.size>0){const Y=Td(se.width,se.height,S.format,S.type);for(const J of S.layerUpdates){const me=se.data.subarray(J*Y/se.data.BYTES_PER_ELEMENT,(J+1)*Y/se.data.BYTES_PER_ELEMENT);t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,J,se.width,se.height,1,xe,Pe,me)}S.clearLayerUpdates()}else t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,se.width,se.height,se.depth,xe,Pe,se.data)}else t.texImage3D(i.TEXTURE_2D_ARRAY,0,Ie,se.width,se.height,se.depth,0,xe,Pe,se.data);else if(S.isData3DTexture)ze?(ht&&t.texStorage3D(i.TEXTURE_3D,ue,Ie,se.width,se.height,se.depth),B&&t.texSubImage3D(i.TEXTURE_3D,0,0,0,0,se.width,se.height,se.depth,xe,Pe,se.data)):t.texImage3D(i.TEXTURE_3D,0,Ie,se.width,se.height,se.depth,0,xe,Pe,se.data);else if(S.isFramebufferTexture){if(ht)if(ze)t.texStorage2D(i.TEXTURE_2D,ue,Ie,se.width,se.height);else{let Y=se.width,J=se.height;for(let me=0;me<ue;me++)t.texImage2D(i.TEXTURE_2D,me,Ie,Y,J,0,xe,Pe,null),Y>>=1,J>>=1}}else if(Ze.length>0){if(ze&&ht){const Y=be(Ze[0]);t.texStorage2D(i.TEXTURE_2D,ue,Ie,Y.width,Y.height)}for(let Y=0,J=Ze.length;Y<J;Y++)ye=Ze[Y],ze?B&&t.texSubImage2D(i.TEXTURE_2D,Y,0,0,xe,Pe,ye):t.texImage2D(i.TEXTURE_2D,Y,Ie,xe,Pe,ye);S.generateMipmaps=!1}else if(ze){if(ht){const Y=be(se);t.texStorage2D(i.TEXTURE_2D,ue,Ie,Y.width,Y.height)}B&&t.texSubImage2D(i.TEXTURE_2D,0,0,0,xe,Pe,se)}else t.texImage2D(i.TEXTURE_2D,0,Ie,xe,Pe,se);m(S)&&p(Z),Me.__version=K.version,S.onUpdate&&S.onUpdate(S)}R.__version=S.version}function ie(R,S,V){if(S.image.length!==6)return;const Z=Re(R,S),Q=S.source;t.bindTexture(i.TEXTURE_CUBE_MAP,R.__webglTexture,i.TEXTURE0+V);const K=n.get(Q);if(Q.version!==K.__version||Z===!0){t.activeTexture(i.TEXTURE0+V);const Me=Je.getPrimaries(Je.workingColorSpace),fe=S.colorSpace===Oi?null:Je.getPrimaries(S.colorSpace),ve=S.colorSpace===Oi||Me===fe?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,S.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,S.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,S.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,ve);const et=S.isCompressedTexture||S.image[0].isCompressedTexture,se=S.image[0]&&S.image[0].isDataTexture,xe=[];for(let J=0;J<6;J++)!et&&!se?xe[J]=g(S.image[J],!0,s.maxCubemapSize):xe[J]=se?S.image[J].image:S.image[J],xe[J]=mt(S,xe[J]);const Pe=xe[0],Ie=o.convert(S.format,S.colorSpace),ye=o.convert(S.type),Ze=y(S.internalFormat,Ie,ye,S.colorSpace),ze=S.isVideoTexture!==!0,ht=K.__version===void 0||Z===!0,B=Q.dataReady;let ue=A(S,Pe);ce(i.TEXTURE_CUBE_MAP,S);let Y;if(et){ze&&ht&&t.texStorage2D(i.TEXTURE_CUBE_MAP,ue,Ze,Pe.width,Pe.height);for(let J=0;J<6;J++){Y=xe[J].mipmaps;for(let me=0;me<Y.length;me++){const pe=Y[me];S.format!==Ln?Ie!==null?ze?B&&t.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+J,me,0,0,pe.width,pe.height,Ie,pe.data):t.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+J,me,Ze,pe.width,pe.height,0,pe.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):ze?B&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+J,me,0,0,pe.width,pe.height,Ie,ye,pe.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+J,me,Ze,pe.width,pe.height,0,Ie,ye,pe.data)}}}else{if(Y=S.mipmaps,ze&&ht){Y.length>0&&ue++;const J=be(xe[0]);t.texStorage2D(i.TEXTURE_CUBE_MAP,ue,Ze,J.width,J.height)}for(let J=0;J<6;J++)if(se){ze?B&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+J,0,0,0,xe[J].width,xe[J].height,Ie,ye,xe[J].data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+J,0,Ze,xe[J].width,xe[J].height,0,Ie,ye,xe[J].data);for(let me=0;me<Y.length;me++){const Fe=Y[me].image[J].image;ze?B&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+J,me+1,0,0,Fe.width,Fe.height,Ie,ye,Fe.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+J,me+1,Ze,Fe.width,Fe.height,0,Ie,ye,Fe.data)}}else{ze?B&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+J,0,0,0,Ie,ye,xe[J]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+J,0,Ze,Ie,ye,xe[J]);for(let me=0;me<Y.length;me++){const pe=Y[me];ze?B&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+J,me+1,0,0,Ie,ye,pe.image[J]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+J,me+1,Ze,Ie,ye,pe.image[J])}}}m(S)&&p(i.TEXTURE_CUBE_MAP),K.__version=Q.version,S.onUpdate&&S.onUpdate(S)}R.__version=S.version}function we(R,S,V,Z,Q,K){const Me=o.convert(V.format,V.colorSpace),fe=o.convert(V.type),ve=y(V.internalFormat,Me,fe,V.colorSpace),et=n.get(S),se=n.get(V);if(se.__renderTarget=S,!et.__hasExternalTextures){const xe=Math.max(1,S.width>>K),Pe=Math.max(1,S.height>>K);Q===i.TEXTURE_3D||Q===i.TEXTURE_2D_ARRAY?t.texImage3D(Q,K,ve,xe,Pe,S.depth,0,Me,fe,null):t.texImage2D(Q,K,ve,xe,Pe,0,Me,fe,null)}t.bindFramebuffer(i.FRAMEBUFFER,R),Ke(S)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,Z,Q,se.__webglTexture,0,$e(S)):(Q===i.TEXTURE_2D||Q>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&Q<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,Z,Q,se.__webglTexture,K),t.bindFramebuffer(i.FRAMEBUFFER,null)}function he(R,S,V){if(i.bindRenderbuffer(i.RENDERBUFFER,R),S.depthBuffer){const Z=S.depthTexture,Q=Z&&Z.isDepthTexture?Z.type:null,K=x(S.stencilBuffer,Q),Me=S.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,fe=$e(S);Ke(S)?a.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,fe,K,S.width,S.height):V?i.renderbufferStorageMultisample(i.RENDERBUFFER,fe,K,S.width,S.height):i.renderbufferStorage(i.RENDERBUFFER,K,S.width,S.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,Me,i.RENDERBUFFER,R)}else{const Z=S.textures;for(let Q=0;Q<Z.length;Q++){const K=Z[Q],Me=o.convert(K.format,K.colorSpace),fe=o.convert(K.type),ve=y(K.internalFormat,Me,fe,K.colorSpace),et=$e(S);V&&Ke(S)===!1?i.renderbufferStorageMultisample(i.RENDERBUFFER,et,ve,S.width,S.height):Ke(S)?a.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,et,ve,S.width,S.height):i.renderbufferStorage(i.RENDERBUFFER,ve,S.width,S.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function De(R,S){if(S&&S.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(i.FRAMEBUFFER,R),!(S.depthTexture&&S.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const Z=n.get(S.depthTexture);Z.__renderTarget=S,(!Z.__webglTexture||S.depthTexture.image.width!==S.width||S.depthTexture.image.height!==S.height)&&(S.depthTexture.image.width=S.width,S.depthTexture.image.height=S.height,S.depthTexture.needsUpdate=!0),D(S.depthTexture,0);const Q=Z.__webglTexture,K=$e(S);if(S.depthTexture.format===Qs)Ke(S)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,Q,0,K):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,Q,0);else if(S.depthTexture.format===po)Ke(S)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,Q,0,K):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,Q,0);else throw new Error("Unknown depthTexture format")}function Ue(R){const S=n.get(R),V=R.isWebGLCubeRenderTarget===!0;if(S.__boundDepthTexture!==R.depthTexture){const Z=R.depthTexture;if(S.__depthDisposeCallback&&S.__depthDisposeCallback(),Z){const Q=()=>{delete S.__boundDepthTexture,delete S.__depthDisposeCallback,Z.removeEventListener("dispose",Q)};Z.addEventListener("dispose",Q),S.__depthDisposeCallback=Q}S.__boundDepthTexture=Z}if(R.depthTexture&&!S.__autoAllocateDepthBuffer){if(V)throw new Error("target.depthTexture not supported in Cube render targets");De(S.__webglFramebuffer,R)}else if(V){S.__webglDepthbuffer=[];for(let Z=0;Z<6;Z++)if(t.bindFramebuffer(i.FRAMEBUFFER,S.__webglFramebuffer[Z]),S.__webglDepthbuffer[Z]===void 0)S.__webglDepthbuffer[Z]=i.createRenderbuffer(),he(S.__webglDepthbuffer[Z],R,!1);else{const Q=R.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,K=S.__webglDepthbuffer[Z];i.bindRenderbuffer(i.RENDERBUFFER,K),i.framebufferRenderbuffer(i.FRAMEBUFFER,Q,i.RENDERBUFFER,K)}}else if(t.bindFramebuffer(i.FRAMEBUFFER,S.__webglFramebuffer),S.__webglDepthbuffer===void 0)S.__webglDepthbuffer=i.createRenderbuffer(),he(S.__webglDepthbuffer,R,!1);else{const Z=R.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,Q=S.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,Q),i.framebufferRenderbuffer(i.FRAMEBUFFER,Z,i.RENDERBUFFER,Q)}t.bindFramebuffer(i.FRAMEBUFFER,null)}function Ge(R,S,V){const Z=n.get(R);S!==void 0&&we(Z.__webglFramebuffer,R,R.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),V!==void 0&&Ue(R)}function xt(R){const S=R.texture,V=n.get(R),Z=n.get(S);R.addEventListener("dispose",P);const Q=R.textures,K=R.isWebGLCubeRenderTarget===!0,Me=Q.length>1;if(Me||(Z.__webglTexture===void 0&&(Z.__webglTexture=i.createTexture()),Z.__version=S.version,r.memory.textures++),K){V.__webglFramebuffer=[];for(let fe=0;fe<6;fe++)if(S.mipmaps&&S.mipmaps.length>0){V.__webglFramebuffer[fe]=[];for(let ve=0;ve<S.mipmaps.length;ve++)V.__webglFramebuffer[fe][ve]=i.createFramebuffer()}else V.__webglFramebuffer[fe]=i.createFramebuffer()}else{if(S.mipmaps&&S.mipmaps.length>0){V.__webglFramebuffer=[];for(let fe=0;fe<S.mipmaps.length;fe++)V.__webglFramebuffer[fe]=i.createFramebuffer()}else V.__webglFramebuffer=i.createFramebuffer();if(Me)for(let fe=0,ve=Q.length;fe<ve;fe++){const et=n.get(Q[fe]);et.__webglTexture===void 0&&(et.__webglTexture=i.createTexture(),r.memory.textures++)}if(R.samples>0&&Ke(R)===!1){V.__webglMultisampledFramebuffer=i.createFramebuffer(),V.__webglColorRenderbuffer=[],t.bindFramebuffer(i.FRAMEBUFFER,V.__webglMultisampledFramebuffer);for(let fe=0;fe<Q.length;fe++){const ve=Q[fe];V.__webglColorRenderbuffer[fe]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,V.__webglColorRenderbuffer[fe]);const et=o.convert(ve.format,ve.colorSpace),se=o.convert(ve.type),xe=y(ve.internalFormat,et,se,ve.colorSpace,R.isXRRenderTarget===!0),Pe=$e(R);i.renderbufferStorageMultisample(i.RENDERBUFFER,Pe,xe,R.width,R.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+fe,i.RENDERBUFFER,V.__webglColorRenderbuffer[fe])}i.bindRenderbuffer(i.RENDERBUFFER,null),R.depthBuffer&&(V.__webglDepthRenderbuffer=i.createRenderbuffer(),he(V.__webglDepthRenderbuffer,R,!0)),t.bindFramebuffer(i.FRAMEBUFFER,null)}}if(K){t.bindTexture(i.TEXTURE_CUBE_MAP,Z.__webglTexture),ce(i.TEXTURE_CUBE_MAP,S);for(let fe=0;fe<6;fe++)if(S.mipmaps&&S.mipmaps.length>0)for(let ve=0;ve<S.mipmaps.length;ve++)we(V.__webglFramebuffer[fe][ve],R,S,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+fe,ve);else we(V.__webglFramebuffer[fe],R,S,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+fe,0);m(S)&&p(i.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(Me){for(let fe=0,ve=Q.length;fe<ve;fe++){const et=Q[fe],se=n.get(et);t.bindTexture(i.TEXTURE_2D,se.__webglTexture),ce(i.TEXTURE_2D,et),we(V.__webglFramebuffer,R,et,i.COLOR_ATTACHMENT0+fe,i.TEXTURE_2D,0),m(et)&&p(i.TEXTURE_2D)}t.unbindTexture()}else{let fe=i.TEXTURE_2D;if((R.isWebGL3DRenderTarget||R.isWebGLArrayRenderTarget)&&(fe=R.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),t.bindTexture(fe,Z.__webglTexture),ce(fe,S),S.mipmaps&&S.mipmaps.length>0)for(let ve=0;ve<S.mipmaps.length;ve++)we(V.__webglFramebuffer[ve],R,S,i.COLOR_ATTACHMENT0,fe,ve);else we(V.__webglFramebuffer,R,S,i.COLOR_ATTACHMENT0,fe,0);m(S)&&p(fe),t.unbindTexture()}R.depthBuffer&&Ue(R)}function Qe(R){const S=R.textures;for(let V=0,Z=S.length;V<Z;V++){const Q=S[V];if(m(Q)){const K=w(R),Me=n.get(Q).__webglTexture;t.bindTexture(K,Me),p(K),t.unbindTexture()}}}const bt=[],U=[];function bn(R){if(R.samples>0){if(Ke(R)===!1){const S=R.textures,V=R.width,Z=R.height;let Q=i.COLOR_BUFFER_BIT;const K=R.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,Me=n.get(R),fe=S.length>1;if(fe)for(let ve=0;ve<S.length;ve++)t.bindFramebuffer(i.FRAMEBUFFER,Me.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+ve,i.RENDERBUFFER,null),t.bindFramebuffer(i.FRAMEBUFFER,Me.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+ve,i.TEXTURE_2D,null,0);t.bindFramebuffer(i.READ_FRAMEBUFFER,Me.__webglMultisampledFramebuffer),t.bindFramebuffer(i.DRAW_FRAMEBUFFER,Me.__webglFramebuffer);for(let ve=0;ve<S.length;ve++){if(R.resolveDepthBuffer&&(R.depthBuffer&&(Q|=i.DEPTH_BUFFER_BIT),R.stencilBuffer&&R.resolveStencilBuffer&&(Q|=i.STENCIL_BUFFER_BIT)),fe){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,Me.__webglColorRenderbuffer[ve]);const et=n.get(S[ve]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,et,0)}i.blitFramebuffer(0,0,V,Z,0,0,V,Z,Q,i.NEAREST),l===!0&&(bt.length=0,U.length=0,bt.push(i.COLOR_ATTACHMENT0+ve),R.depthBuffer&&R.resolveDepthBuffer===!1&&(bt.push(K),U.push(K),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,U)),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,bt))}if(t.bindFramebuffer(i.READ_FRAMEBUFFER,null),t.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),fe)for(let ve=0;ve<S.length;ve++){t.bindFramebuffer(i.FRAMEBUFFER,Me.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+ve,i.RENDERBUFFER,Me.__webglColorRenderbuffer[ve]);const et=n.get(S[ve]).__webglTexture;t.bindFramebuffer(i.FRAMEBUFFER,Me.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+ve,i.TEXTURE_2D,et,0)}t.bindFramebuffer(i.DRAW_FRAMEBUFFER,Me.__webglMultisampledFramebuffer)}else if(R.depthBuffer&&R.resolveDepthBuffer===!1&&l){const S=R.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[S])}}}function $e(R){return Math.min(s.maxSamples,R.samples)}function Ke(R){const S=n.get(R);return R.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&S.__useRenderToTexture!==!1}function Ee(R){const S=r.render.frame;u.get(R)!==S&&(u.set(R,S),R.update())}function mt(R,S){const V=R.colorSpace,Z=R.format,Q=R.type;return R.isCompressedTexture===!0||R.isVideoTexture===!0||V!==an&&V!==Oi&&(Je.getTransfer(V)===ct?(Z!==Ln||Q!==wi)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",V)),S}function be(R){return typeof HTMLImageElement<"u"&&R instanceof HTMLImageElement?(c.width=R.naturalWidth||R.width,c.height=R.naturalHeight||R.height):typeof VideoFrame<"u"&&R instanceof VideoFrame?(c.width=R.displayWidth,c.height=R.displayHeight):(c.width=R.width,c.height=R.height),c}this.allocateTextureUnit=O,this.resetTextureUnits=N,this.setTexture2D=D,this.setTexture2DArray=I,this.setTexture3D=G,this.setTextureCube=F,this.rebindTextures=Ge,this.setupRenderTarget=xt,this.updateRenderTargetMipmap=Qe,this.updateMultisampleRenderTarget=bn,this.setupDepthRenderbuffer=Ue,this.setupFrameBufferTexture=we,this.useMultisampledRTT=Ke}function Cy(i,e){function t(n,s=Oi){let o;const r=Je.getTransfer(s);if(n===wi)return i.UNSIGNED_BYTE;if(n===Yc)return i.UNSIGNED_SHORT_4_4_4_4;if(n===$c)return i.UNSIGNED_SHORT_5_5_5_1;if(n===jh)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===Xh)return i.BYTE;if(n===qh)return i.SHORT;if(n===nr)return i.UNSIGNED_SHORT;if(n===jc)return i.INT;if(n===vs)return i.UNSIGNED_INT;if(n===qn)return i.FLOAT;if(n===Dn)return i.HALF_FLOAT;if(n===Yh)return i.ALPHA;if(n===$h)return i.RGB;if(n===Ln)return i.RGBA;if(n===Kh)return i.LUMINANCE;if(n===Zh)return i.LUMINANCE_ALPHA;if(n===Qs)return i.DEPTH_COMPONENT;if(n===po)return i.DEPTH_STENCIL;if(n===Kc)return i.RED;if(n===Zc)return i.RED_INTEGER;if(n===Jh)return i.RG;if(n===Jc)return i.RG_INTEGER;if(n===Qc)return i.RGBA_INTEGER;if(n===pa||n===ma||n===ga||n===_a)if(r===ct)if(o=e.get("WEBGL_compressed_texture_s3tc_srgb"),o!==null){if(n===pa)return o.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===ma)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===ga)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===_a)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(o=e.get("WEBGL_compressed_texture_s3tc"),o!==null){if(n===pa)return o.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===ma)return o.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===ga)return o.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===_a)return o.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===nc||n===ic||n===sc||n===oc)if(o=e.get("WEBGL_compressed_texture_pvrtc"),o!==null){if(n===nc)return o.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===ic)return o.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===sc)return o.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===oc)return o.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===rc||n===ac||n===lc)if(o=e.get("WEBGL_compressed_texture_etc"),o!==null){if(n===rc||n===ac)return r===ct?o.COMPRESSED_SRGB8_ETC2:o.COMPRESSED_RGB8_ETC2;if(n===lc)return r===ct?o.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:o.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(n===cc||n===uc||n===dc||n===hc||n===fc||n===pc||n===mc||n===gc||n===_c||n===vc||n===xc||n===yc||n===wc||n===Sc)if(o=e.get("WEBGL_compressed_texture_astc"),o!==null){if(n===cc)return r===ct?o.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:o.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===uc)return r===ct?o.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:o.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===dc)return r===ct?o.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:o.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===hc)return r===ct?o.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:o.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===fc)return r===ct?o.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:o.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===pc)return r===ct?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:o.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===mc)return r===ct?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:o.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===gc)return r===ct?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:o.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===_c)return r===ct?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:o.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===vc)return r===ct?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:o.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===xc)return r===ct?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:o.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===yc)return r===ct?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:o.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===wc)return r===ct?o.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:o.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===Sc)return r===ct?o.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:o.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===va||n===Mc||n===Ec)if(o=e.get("EXT_texture_compression_bptc"),o!==null){if(n===va)return r===ct?o.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:o.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===Mc)return o.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===Ec)return o.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===Qh||n===bc||n===Tc||n===Ac)if(o=e.get("EXT_texture_compression_rgtc"),o!==null){if(n===va)return o.COMPRESSED_RED_RGTC1_EXT;if(n===bc)return o.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===Tc)return o.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===Ac)return o.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===fo?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:t}}const Ry={type:"move"};class bl{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Mn,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Mn,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new b,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new b),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Mn,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new b,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new b),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let s=null,o=null,r=null;const a=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){r=!0;for(const g of e.hand.values()){const m=t.getJointPose(g,n),p=this._getHandJoint(c,g);m!==null&&(p.matrix.fromArray(m.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=m.radius),p.visible=m!==null}const u=c.joints["index-finger-tip"],d=c.joints["thumb-tip"],h=u.position.distanceTo(d.position),f=.02,_=.005;c.inputState.pinching&&h>f+_?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&h<=f-_&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(o=t.getPose(e.gripSpace,n),o!==null&&(l.matrix.fromArray(o.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,o.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(o.linearVelocity)):l.hasLinearVelocity=!1,o.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(o.angularVelocity)):l.hasAngularVelocity=!1));a!==null&&(s=t.getPose(e.targetRaySpace,n),s===null&&o!==null&&(s=o),s!==null&&(a.matrix.fromArray(s.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,s.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(s.linearVelocity)):a.hasLinearVelocity=!1,s.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(s.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(Ry)))}return a!==null&&(a.visible=s!==null),l!==null&&(l.visible=o!==null),c!==null&&(c.visible=r!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const n=new Mn;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}}const Py=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,Dy=`
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

}`;class Ly{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t,n){if(this.texture===null){const s=new Ft,o=e.properties.get(s);o.__webglTexture=t.texture,(t.depthNear!=n.depthNear||t.depthFar!=n.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=s}}getMesh(e){if(this.texture!==null&&this.mesh===null){const t=e.cameras[0].viewport,n=new Et({vertexShader:Py,fragmentShader:Dy,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new re(new xs(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class Iy extends Ss{constructor(e,t){super();const n=this;let s=null,o=1,r=null,a="local-floor",l=1,c=null,u=null,d=null,h=null,f=null,_=null;const g=new Ly,m=t.getContextAttributes();let p=null,w=null;const y=[],x=[],A=new ge;let T=null;const P=new sn;P.viewport=new We;const L=new sn;L.viewport=new We;const M=[P,L],v=new Vg;let C=null,N=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function($){let ie=y[$];return ie===void 0&&(ie=new bl,y[$]=ie),ie.getTargetRaySpace()},this.getControllerGrip=function($){let ie=y[$];return ie===void 0&&(ie=new bl,y[$]=ie),ie.getGripSpace()},this.getHand=function($){let ie=y[$];return ie===void 0&&(ie=new bl,y[$]=ie),ie.getHandSpace()};function O($){const ie=x.indexOf($.inputSource);if(ie===-1)return;const we=y[ie];we!==void 0&&(we.update($.inputSource,$.frame,c||r),we.dispatchEvent({type:$.type,data:$.inputSource}))}function z(){s.removeEventListener("select",O),s.removeEventListener("selectstart",O),s.removeEventListener("selectend",O),s.removeEventListener("squeeze",O),s.removeEventListener("squeezestart",O),s.removeEventListener("squeezeend",O),s.removeEventListener("end",z),s.removeEventListener("inputsourceschange",D);for(let $=0;$<y.length;$++){const ie=x[$];ie!==null&&(x[$]=null,y[$].disconnect(ie))}C=null,N=null,g.reset(),e.setRenderTarget(p),f=null,h=null,d=null,s=null,w=null,Re.stop(),n.isPresenting=!1,e.setPixelRatio(T),e.setSize(A.width,A.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function($){o=$,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function($){a=$,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||r},this.setReferenceSpace=function($){c=$},this.getBaseLayer=function(){return h!==null?h:f},this.getBinding=function(){return d},this.getFrame=function(){return _},this.getSession=function(){return s},this.setSession=async function($){if(s=$,s!==null){if(p=e.getRenderTarget(),s.addEventListener("select",O),s.addEventListener("selectstart",O),s.addEventListener("selectend",O),s.addEventListener("squeeze",O),s.addEventListener("squeezestart",O),s.addEventListener("squeezeend",O),s.addEventListener("end",z),s.addEventListener("inputsourceschange",D),m.xrCompatible!==!0&&await t.makeXRCompatible(),T=e.getPixelRatio(),e.getSize(A),s.renderState.layers===void 0){const ie={antialias:m.antialias,alpha:!0,depth:m.depth,stencil:m.stencil,framebufferScaleFactor:o};f=new XRWebGLLayer(s,t,ie),s.updateRenderState({baseLayer:f}),e.setPixelRatio(1),e.setSize(f.framebufferWidth,f.framebufferHeight,!1),w=new tn(f.framebufferWidth,f.framebufferHeight,{format:Ln,type:wi,colorSpace:e.outputColorSpace,stencilBuffer:m.stencil})}else{let ie=null,we=null,he=null;m.depth&&(he=m.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,ie=m.stencil?po:Qs,we=m.stencil?fo:vs);const De={colorFormat:t.RGBA8,depthFormat:he,scaleFactor:o};d=new XRWebGLBinding(s,t),h=d.createProjectionLayer(De),s.updateRenderState({layers:[h]}),e.setPixelRatio(1),e.setSize(h.textureWidth,h.textureHeight,!1),w=new tn(h.textureWidth,h.textureHeight,{format:Ln,type:wi,depthTexture:new gf(h.textureWidth,h.textureHeight,we,void 0,void 0,void 0,void 0,void 0,void 0,ie),stencilBuffer:m.stencil,colorSpace:e.outputColorSpace,samples:m.antialias?4:0,resolveDepthBuffer:h.ignoreDepthValues===!1})}w.isXRRenderTarget=!0,this.setFoveation(l),c=null,r=await s.requestReferenceSpace(a),Re.setContext(s),Re.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return g.getDepthTexture()};function D($){for(let ie=0;ie<$.removed.length;ie++){const we=$.removed[ie],he=x.indexOf(we);he>=0&&(x[he]=null,y[he].disconnect(we))}for(let ie=0;ie<$.added.length;ie++){const we=$.added[ie];let he=x.indexOf(we);if(he===-1){for(let Ue=0;Ue<y.length;Ue++)if(Ue>=x.length){x.push(we),he=Ue;break}else if(x[Ue]===null){x[Ue]=we,he=Ue;break}if(he===-1)break}const De=y[he];De&&De.connect(we)}}const I=new b,G=new b;function F($,ie,we){I.setFromMatrixPosition(ie.matrixWorld),G.setFromMatrixPosition(we.matrixWorld);const he=I.distanceTo(G),De=ie.projectionMatrix.elements,Ue=we.projectionMatrix.elements,Ge=De[14]/(De[10]-1),xt=De[14]/(De[10]+1),Qe=(De[9]+1)/De[5],bt=(De[9]-1)/De[5],U=(De[8]-1)/De[0],bn=(Ue[8]+1)/Ue[0],$e=Ge*U,Ke=Ge*bn,Ee=he/(-U+bn),mt=Ee*-U;if(ie.matrixWorld.decompose($.position,$.quaternion,$.scale),$.translateX(mt),$.translateZ(Ee),$.matrixWorld.compose($.position,$.quaternion,$.scale),$.matrixWorldInverse.copy($.matrixWorld).invert(),De[10]===-1)$.projectionMatrix.copy(ie.projectionMatrix),$.projectionMatrixInverse.copy(ie.projectionMatrixInverse);else{const be=Ge+Ee,R=xt+Ee,S=$e-mt,V=Ke+(he-mt),Z=Qe*xt/R*be,Q=bt*xt/R*be;$.projectionMatrix.makePerspective(S,V,Z,Q,be,R),$.projectionMatrixInverse.copy($.projectionMatrix).invert()}}function W($,ie){ie===null?$.matrixWorld.copy($.matrix):$.matrixWorld.multiplyMatrices(ie.matrixWorld,$.matrix),$.matrixWorldInverse.copy($.matrixWorld).invert()}this.updateCamera=function($){if(s===null)return;let ie=$.near,we=$.far;g.texture!==null&&(g.depthNear>0&&(ie=g.depthNear),g.depthFar>0&&(we=g.depthFar)),v.near=L.near=P.near=ie,v.far=L.far=P.far=we,(C!==v.near||N!==v.far)&&(s.updateRenderState({depthNear:v.near,depthFar:v.far}),C=v.near,N=v.far),P.layers.mask=$.layers.mask|2,L.layers.mask=$.layers.mask|4,v.layers.mask=P.layers.mask|L.layers.mask;const he=$.parent,De=v.cameras;W(v,he);for(let Ue=0;Ue<De.length;Ue++)W(De[Ue],he);De.length===2?F(v,P,L):v.projectionMatrix.copy(P.projectionMatrix),j($,v,he)};function j($,ie,we){we===null?$.matrix.copy(ie.matrixWorld):($.matrix.copy(we.matrixWorld),$.matrix.invert(),$.matrix.multiply(ie.matrixWorld)),$.matrix.decompose($.position,$.quaternion,$.scale),$.updateMatrixWorld(!0),$.projectionMatrix.copy(ie.projectionMatrix),$.projectionMatrixInverse.copy(ie.projectionMatrixInverse),$.isPerspectiveCamera&&($.fov=mo*2*Math.atan(1/$.projectionMatrix.elements[5]),$.zoom=1)}this.getCamera=function(){return v},this.getFoveation=function(){if(!(h===null&&f===null))return l},this.setFoveation=function($){l=$,h!==null&&(h.fixedFoveation=$),f!==null&&f.fixedFoveation!==void 0&&(f.fixedFoveation=$)},this.hasDepthSensing=function(){return g.texture!==null},this.getDepthSensingMesh=function(){return g.getMesh(v)};let ee=null;function ce($,ie){if(u=ie.getViewerPose(c||r),_=ie,u!==null){const we=u.views;f!==null&&(e.setRenderTargetFramebuffer(w,f.framebuffer),e.setRenderTarget(w));let he=!1;we.length!==v.cameras.length&&(v.cameras.length=0,he=!0);for(let Ue=0;Ue<we.length;Ue++){const Ge=we[Ue];let xt=null;if(f!==null)xt=f.getViewport(Ge);else{const bt=d.getViewSubImage(h,Ge);xt=bt.viewport,Ue===0&&(e.setRenderTargetTextures(w,bt.colorTexture,h.ignoreDepthValues?void 0:bt.depthStencilTexture),e.setRenderTarget(w))}let Qe=M[Ue];Qe===void 0&&(Qe=new sn,Qe.layers.enable(Ue),Qe.viewport=new We,M[Ue]=Qe),Qe.matrix.fromArray(Ge.transform.matrix),Qe.matrix.decompose(Qe.position,Qe.quaternion,Qe.scale),Qe.projectionMatrix.fromArray(Ge.projectionMatrix),Qe.projectionMatrixInverse.copy(Qe.projectionMatrix).invert(),Qe.viewport.set(xt.x,xt.y,xt.width,xt.height),Ue===0&&(v.matrix.copy(Qe.matrix),v.matrix.decompose(v.position,v.quaternion,v.scale)),he===!0&&v.cameras.push(Qe)}const De=s.enabledFeatures;if(De&&De.includes("depth-sensing")){const Ue=d.getDepthInformation(we[0]);Ue&&Ue.isValid&&Ue.texture&&g.init(e,Ue,s.renderState)}}for(let we=0;we<y.length;we++){const he=x[we],De=y[we];he!==null&&De!==void 0&&De.update(he,ie,c||r)}ee&&ee($,ie),ie.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:ie}),_=null}const Re=new Mf;Re.setAnimationLoop(ce),this.setAnimationLoop=function($){ee=$},this.dispose=function(){}}}const es=new Bt,Ny=new Le;function Oy(i,e){function t(m,p){m.matrixAutoUpdate===!0&&m.updateMatrix(),p.value.copy(m.matrix)}function n(m,p){p.color.getRGB(m.fogColor.value,uf(i)),p.isFog?(m.fogNear.value=p.near,m.fogFar.value=p.far):p.isFogExp2&&(m.fogDensity.value=p.density)}function s(m,p,w,y,x){p.isMeshBasicMaterial||p.isMeshLambertMaterial?o(m,p):p.isMeshToonMaterial?(o(m,p),d(m,p)):p.isMeshPhongMaterial?(o(m,p),u(m,p)):p.isMeshStandardMaterial?(o(m,p),h(m,p),p.isMeshPhysicalMaterial&&f(m,p,x)):p.isMeshMatcapMaterial?(o(m,p),_(m,p)):p.isMeshDepthMaterial?o(m,p):p.isMeshDistanceMaterial?(o(m,p),g(m,p)):p.isMeshNormalMaterial?o(m,p):p.isLineBasicMaterial?(r(m,p),p.isLineDashedMaterial&&a(m,p)):p.isPointsMaterial?l(m,p,w,y):p.isSpriteMaterial?c(m,p):p.isShadowMaterial?(m.color.value.copy(p.color),m.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function o(m,p){m.opacity.value=p.opacity,p.color&&m.diffuse.value.copy(p.color),p.emissive&&m.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(m.map.value=p.map,t(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.bumpMap&&(m.bumpMap.value=p.bumpMap,t(p.bumpMap,m.bumpMapTransform),m.bumpScale.value=p.bumpScale,p.side===gn&&(m.bumpScale.value*=-1)),p.normalMap&&(m.normalMap.value=p.normalMap,t(p.normalMap,m.normalMapTransform),m.normalScale.value.copy(p.normalScale),p.side===gn&&m.normalScale.value.negate()),p.displacementMap&&(m.displacementMap.value=p.displacementMap,t(p.displacementMap,m.displacementMapTransform),m.displacementScale.value=p.displacementScale,m.displacementBias.value=p.displacementBias),p.emissiveMap&&(m.emissiveMap.value=p.emissiveMap,t(p.emissiveMap,m.emissiveMapTransform)),p.specularMap&&(m.specularMap.value=p.specularMap,t(p.specularMap,m.specularMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest);const w=e.get(p),y=w.envMap,x=w.envMapRotation;y&&(m.envMap.value=y,es.copy(x),es.x*=-1,es.y*=-1,es.z*=-1,y.isCubeTexture&&y.isRenderTargetTexture===!1&&(es.y*=-1,es.z*=-1),m.envMapRotation.value.setFromMatrix4(Ny.makeRotationFromEuler(es)),m.flipEnvMap.value=y.isCubeTexture&&y.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=p.reflectivity,m.ior.value=p.ior,m.refractionRatio.value=p.refractionRatio),p.lightMap&&(m.lightMap.value=p.lightMap,m.lightMapIntensity.value=p.lightMapIntensity,t(p.lightMap,m.lightMapTransform)),p.aoMap&&(m.aoMap.value=p.aoMap,m.aoMapIntensity.value=p.aoMapIntensity,t(p.aoMap,m.aoMapTransform))}function r(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,p.map&&(m.map.value=p.map,t(p.map,m.mapTransform))}function a(m,p){m.dashSize.value=p.dashSize,m.totalSize.value=p.dashSize+p.gapSize,m.scale.value=p.scale}function l(m,p,w,y){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.size.value=p.size*w,m.scale.value=y*.5,p.map&&(m.map.value=p.map,t(p.map,m.uvTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function c(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.rotation.value=p.rotation,p.map&&(m.map.value=p.map,t(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function u(m,p){m.specular.value.copy(p.specular),m.shininess.value=Math.max(p.shininess,1e-4)}function d(m,p){p.gradientMap&&(m.gradientMap.value=p.gradientMap)}function h(m,p){m.metalness.value=p.metalness,p.metalnessMap&&(m.metalnessMap.value=p.metalnessMap,t(p.metalnessMap,m.metalnessMapTransform)),m.roughness.value=p.roughness,p.roughnessMap&&(m.roughnessMap.value=p.roughnessMap,t(p.roughnessMap,m.roughnessMapTransform)),p.envMap&&(m.envMapIntensity.value=p.envMapIntensity)}function f(m,p,w){m.ior.value=p.ior,p.sheen>0&&(m.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),m.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(m.sheenColorMap.value=p.sheenColorMap,t(p.sheenColorMap,m.sheenColorMapTransform)),p.sheenRoughnessMap&&(m.sheenRoughnessMap.value=p.sheenRoughnessMap,t(p.sheenRoughnessMap,m.sheenRoughnessMapTransform))),p.clearcoat>0&&(m.clearcoat.value=p.clearcoat,m.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(m.clearcoatMap.value=p.clearcoatMap,t(p.clearcoatMap,m.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,t(p.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(m.clearcoatNormalMap.value=p.clearcoatNormalMap,t(p.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===gn&&m.clearcoatNormalScale.value.negate())),p.dispersion>0&&(m.dispersion.value=p.dispersion),p.iridescence>0&&(m.iridescence.value=p.iridescence,m.iridescenceIOR.value=p.iridescenceIOR,m.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(m.iridescenceMap.value=p.iridescenceMap,t(p.iridescenceMap,m.iridescenceMapTransform)),p.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=p.iridescenceThicknessMap,t(p.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),p.transmission>0&&(m.transmission.value=p.transmission,m.transmissionSamplerMap.value=w.texture,m.transmissionSamplerSize.value.set(w.width,w.height),p.transmissionMap&&(m.transmissionMap.value=p.transmissionMap,t(p.transmissionMap,m.transmissionMapTransform)),m.thickness.value=p.thickness,p.thicknessMap&&(m.thicknessMap.value=p.thicknessMap,t(p.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=p.attenuationDistance,m.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(m.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(m.anisotropyMap.value=p.anisotropyMap,t(p.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=p.specularIntensity,m.specularColor.value.copy(p.specularColor),p.specularColorMap&&(m.specularColorMap.value=p.specularColorMap,t(p.specularColorMap,m.specularColorMapTransform)),p.specularIntensityMap&&(m.specularIntensityMap.value=p.specularIntensityMap,t(p.specularIntensityMap,m.specularIntensityMapTransform))}function _(m,p){p.matcap&&(m.matcap.value=p.matcap)}function g(m,p){const w=e.get(p).light;m.referencePosition.value.setFromMatrixPosition(w.matrixWorld),m.nearDistance.value=w.shadow.camera.near,m.farDistance.value=w.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:s}}function Uy(i,e,t,n){let s={},o={},r=[];const a=i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);function l(w,y){const x=y.program;n.uniformBlockBinding(w,x)}function c(w,y){let x=s[w.id];x===void 0&&(_(w),x=u(w),s[w.id]=x,w.addEventListener("dispose",m));const A=y.program;n.updateUBOMapping(w,A);const T=e.render.frame;o[w.id]!==T&&(h(w),o[w.id]=T)}function u(w){const y=d();w.__bindingPointIndex=y;const x=i.createBuffer(),A=w.__size,T=w.usage;return i.bindBuffer(i.UNIFORM_BUFFER,x),i.bufferData(i.UNIFORM_BUFFER,A,T),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,y,x),x}function d(){for(let w=0;w<a;w++)if(r.indexOf(w)===-1)return r.push(w),w;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function h(w){const y=s[w.id],x=w.uniforms,A=w.__cache;i.bindBuffer(i.UNIFORM_BUFFER,y);for(let T=0,P=x.length;T<P;T++){const L=Array.isArray(x[T])?x[T]:[x[T]];for(let M=0,v=L.length;M<v;M++){const C=L[M];if(f(C,T,M,A)===!0){const N=C.__offset,O=Array.isArray(C.value)?C.value:[C.value];let z=0;for(let D=0;D<O.length;D++){const I=O[D],G=g(I);typeof I=="number"||typeof I=="boolean"?(C.__data[0]=I,i.bufferSubData(i.UNIFORM_BUFFER,N+z,C.__data)):I.isMatrix3?(C.__data[0]=I.elements[0],C.__data[1]=I.elements[1],C.__data[2]=I.elements[2],C.__data[3]=0,C.__data[4]=I.elements[3],C.__data[5]=I.elements[4],C.__data[6]=I.elements[5],C.__data[7]=0,C.__data[8]=I.elements[6],C.__data[9]=I.elements[7],C.__data[10]=I.elements[8],C.__data[11]=0):(I.toArray(C.__data,z),z+=G.storage/Float32Array.BYTES_PER_ELEMENT)}i.bufferSubData(i.UNIFORM_BUFFER,N,C.__data)}}}i.bindBuffer(i.UNIFORM_BUFFER,null)}function f(w,y,x,A){const T=w.value,P=y+"_"+x;if(A[P]===void 0)return typeof T=="number"||typeof T=="boolean"?A[P]=T:A[P]=T.clone(),!0;{const L=A[P];if(typeof T=="number"||typeof T=="boolean"){if(L!==T)return A[P]=T,!0}else if(L.equals(T)===!1)return L.copy(T),!0}return!1}function _(w){const y=w.uniforms;let x=0;const A=16;for(let P=0,L=y.length;P<L;P++){const M=Array.isArray(y[P])?y[P]:[y[P]];for(let v=0,C=M.length;v<C;v++){const N=M[v],O=Array.isArray(N.value)?N.value:[N.value];for(let z=0,D=O.length;z<D;z++){const I=O[z],G=g(I),F=x%A,W=F%G.boundary,j=F+W;x+=W,j!==0&&A-j<G.storage&&(x+=A-j),N.__data=new Float32Array(G.storage/Float32Array.BYTES_PER_ELEMENT),N.__offset=x,x+=G.storage}}}const T=x%A;return T>0&&(x+=A-T),w.__size=x,w.__cache={},this}function g(w){const y={boundary:0,storage:0};return typeof w=="number"||typeof w=="boolean"?(y.boundary=4,y.storage=4):w.isVector2?(y.boundary=8,y.storage=8):w.isVector3||w.isColor?(y.boundary=16,y.storage=12):w.isVector4?(y.boundary=16,y.storage=16):w.isMatrix3?(y.boundary=48,y.storage=48):w.isMatrix4?(y.boundary=64,y.storage=64):w.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",w),y}function m(w){const y=w.target;y.removeEventListener("dispose",m);const x=r.indexOf(y.__bindingPointIndex);r.splice(x,1),i.deleteBuffer(s[y.id]),delete s[y.id],delete o[y.id]}function p(){for(const w in s)i.deleteBuffer(s[w]);r=[],s={},o={}}return{bind:l,update:c,dispose:p}}class Fy{constructor(e={}){const{canvas:t=Fm(),context:n=null,depth:s=!0,stencil:o=!1,alpha:r=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:d=!1,reverseDepthBuffer:h=!1}=e;this.isWebGLRenderer=!0;let f;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");f=n.getContextAttributes().alpha}else f=r;const _=new Uint32Array(4),g=new Int32Array(4);let m=null,p=null;const w=[],y=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=Ut,this.toneMapping=Wi,this.toneMappingExposure=1;const x=this;let A=!1,T=0,P=0,L=null,M=-1,v=null;const C=new We,N=new We;let O=null;const z=new oe(0);let D=0,I=t.width,G=t.height,F=1,W=null,j=null;const ee=new We(0,0,I,G),ce=new We(0,0,I,G);let Re=!1;const $=new iu;let ie=!1,we=!1;const he=new Le,De=new Le,Ue=new b,Ge=new We,xt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let Qe=!1;function bt(){return L===null?F:1}let U=n;function bn(E,k){return t.getContext(E,k)}try{const E={alpha:!0,depth:s,stencil:o,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:u,failIfMajorPerformanceCaveat:d};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${Xc}`),t.addEventListener("webglcontextlost",J,!1),t.addEventListener("webglcontextrestored",me,!1),t.addEventListener("webglcontextcreationerror",pe,!1),U===null){const k="webgl2";if(U=bn(k,E),U===null)throw bn(k)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(E){throw console.error("THREE.WebGLRenderer: "+E.message),E}let $e,Ke,Ee,mt,be,R,S,V,Z,Q,K,Me,fe,ve,et,se,xe,Pe,Ie,ye,Ze,ze,ht,B;function ue(){$e=new qv(U),$e.init(),ze=new Cy(U,$e),Ke=new kv(U,$e,e,ze),Ee=new Ty(U,$e),Ke.reverseDepthBuffer&&h&&Ee.buffers.depth.setReversed(!0),mt=new $v(U),be=new fy,R=new Ay(U,$e,Ee,be,Ke,ze,mt),S=new Gv(x),V=new Xv(x),Z=new n0(U),ht=new Bv(U,Z),Q=new jv(U,Z,mt,ht),K=new Zv(U,Q,Z,mt),Ie=new Kv(U,Ke,R),se=new Hv(be),Me=new hy(x,S,V,$e,Ke,ht,se),fe=new Oy(x,be),ve=new my,et=new wy($e),Pe=new Fv(x,S,V,Ee,K,f,l),xe=new Ey(x,K,Ke),B=new Uy(U,mt,Ke,Ee),ye=new zv(U,$e,mt),Ze=new Yv(U,$e,mt),mt.programs=Me.programs,x.capabilities=Ke,x.extensions=$e,x.properties=be,x.renderLists=ve,x.shadowMap=xe,x.state=Ee,x.info=mt}ue();const Y=new Iy(x,U);this.xr=Y,this.getContext=function(){return U},this.getContextAttributes=function(){return U.getContextAttributes()},this.forceContextLoss=function(){const E=$e.get("WEBGL_lose_context");E&&E.loseContext()},this.forceContextRestore=function(){const E=$e.get("WEBGL_lose_context");E&&E.restoreContext()},this.getPixelRatio=function(){return F},this.setPixelRatio=function(E){E!==void 0&&(F=E,this.setSize(I,G,!1))},this.getSize=function(E){return E.set(I,G)},this.setSize=function(E,k,X=!0){if(Y.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}I=E,G=k,t.width=Math.floor(E*F),t.height=Math.floor(k*F),X===!0&&(t.style.width=E+"px",t.style.height=k+"px"),this.setViewport(0,0,E,k)},this.getDrawingBufferSize=function(E){return E.set(I*F,G*F).floor()},this.setDrawingBufferSize=function(E,k,X){I=E,G=k,F=X,t.width=Math.floor(E*X),t.height=Math.floor(k*X),this.setViewport(0,0,E,k)},this.getCurrentViewport=function(E){return E.copy(C)},this.getViewport=function(E){return E.copy(ee)},this.setViewport=function(E,k,X,q){E.isVector4?ee.set(E.x,E.y,E.z,E.w):ee.set(E,k,X,q),Ee.viewport(C.copy(ee).multiplyScalar(F).round())},this.getScissor=function(E){return E.copy(ce)},this.setScissor=function(E,k,X,q){E.isVector4?ce.set(E.x,E.y,E.z,E.w):ce.set(E,k,X,q),Ee.scissor(N.copy(ce).multiplyScalar(F).round())},this.getScissorTest=function(){return Re},this.setScissorTest=function(E){Ee.setScissorTest(Re=E)},this.setOpaqueSort=function(E){W=E},this.setTransparentSort=function(E){j=E},this.getClearColor=function(E){return E.copy(Pe.getClearColor())},this.setClearColor=function(){Pe.setClearColor.apply(Pe,arguments)},this.getClearAlpha=function(){return Pe.getClearAlpha()},this.setClearAlpha=function(){Pe.setClearAlpha.apply(Pe,arguments)},this.clear=function(E=!0,k=!0,X=!0){let q=0;if(E){let H=!1;if(L!==null){const te=L.texture.format;H=te===Qc||te===Jc||te===Zc}if(H){const te=L.texture.type,de=te===wi||te===vs||te===nr||te===fo||te===Yc||te===$c,_e=Pe.getClearColor(),Se=Pe.getClearAlpha(),Ne=_e.r,Oe=_e.g,Te=_e.b;de?(_[0]=Ne,_[1]=Oe,_[2]=Te,_[3]=Se,U.clearBufferuiv(U.COLOR,0,_)):(g[0]=Ne,g[1]=Oe,g[2]=Te,g[3]=Se,U.clearBufferiv(U.COLOR,0,g))}else q|=U.COLOR_BUFFER_BIT}k&&(q|=U.DEPTH_BUFFER_BIT),X&&(q|=U.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),U.clear(q)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",J,!1),t.removeEventListener("webglcontextrestored",me,!1),t.removeEventListener("webglcontextcreationerror",pe,!1),Pe.dispose(),ve.dispose(),et.dispose(),be.dispose(),S.dispose(),V.dispose(),K.dispose(),ht.dispose(),B.dispose(),Me.dispose(),Y.dispose(),Y.removeEventListener("sessionstart",Su),Y.removeEventListener("sessionend",Mu),ji.stop()};function J(E){E.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),A=!0}function me(){console.log("THREE.WebGLRenderer: Context Restored."),A=!1;const E=mt.autoReset,k=xe.enabled,X=xe.autoUpdate,q=xe.needsUpdate,H=xe.type;ue(),mt.autoReset=E,xe.enabled=k,xe.autoUpdate=X,xe.needsUpdate=q,xe.type=H}function pe(E){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",E.statusMessage)}function Fe(E){const k=E.target;k.removeEventListener("dispose",Fe),wt(k)}function wt(E){Vt(E),be.remove(E)}function Vt(E){const k=be.get(E).programs;k!==void 0&&(k.forEach(function(X){Me.releaseProgram(X)}),E.isShaderMaterial&&Me.releaseShaderCache(E))}this.renderBufferDirect=function(E,k,X,q,H,te){k===null&&(k=xt);const de=H.isMesh&&H.matrixWorld.determinant()<0,_e=Cp(E,k,X,q,H);Ee.setMaterial(q,de);let Se=X.index,Ne=1;if(q.wireframe===!0){if(Se=Q.getWireframeAttribute(X),Se===void 0)return;Ne=2}const Oe=X.drawRange,Te=X.attributes.position;let tt=Oe.start*Ne,st=(Oe.start+Oe.count)*Ne;te!==null&&(tt=Math.max(tt,te.start*Ne),st=Math.min(st,(te.start+te.count)*Ne)),Se!==null?(tt=Math.max(tt,0),st=Math.min(st,Se.count)):Te!=null&&(tt=Math.max(tt,0),st=Math.min(st,Te.count));const At=st-tt;if(At<0||At===1/0)return;ht.setup(H,q,_e,X,Se);let St,nt=ye;if(Se!==null&&(St=Z.get(Se),nt=Ze,nt.setIndex(St)),H.isMesh)q.wireframe===!0?(Ee.setLineWidth(q.wireframeLinewidth*bt()),nt.setMode(U.LINES)):nt.setMode(U.TRIANGLES);else if(H.isLine){let Ae=q.linewidth;Ae===void 0&&(Ae=1),Ee.setLineWidth(Ae*bt()),H.isLineSegments?nt.setMode(U.LINES):H.isLineLoop?nt.setMode(U.LINE_LOOP):nt.setMode(U.LINE_STRIP)}else H.isPoints?nt.setMode(U.POINTS):H.isSprite&&nt.setMode(U.TRIANGLES);if(H.isBatchedMesh)if(H._multiDrawInstances!==null)nt.renderMultiDrawInstances(H._multiDrawStarts,H._multiDrawCounts,H._multiDrawCount,H._multiDrawInstances);else if($e.get("WEBGL_multi_draw"))nt.renderMultiDraw(H._multiDrawStarts,H._multiDrawCounts,H._multiDrawCount);else{const Ae=H._multiDrawStarts,zt=H._multiDrawCounts,ot=H._multiDrawCount,Bn=Se?Z.get(Se).bytesPerElement:1,bs=be.get(q).currentProgram.getUniforms();for(let vn=0;vn<ot;vn++)bs.setValue(U,"_gl_DrawID",vn),nt.render(Ae[vn]/Bn,zt[vn])}else if(H.isInstancedMesh)nt.renderInstances(tt,At,H.count);else if(X.isInstancedBufferGeometry){const Ae=X._maxInstanceCount!==void 0?X._maxInstanceCount:1/0,zt=Math.min(X.instanceCount,Ae);nt.renderInstances(tt,At,zt)}else nt.render(tt,At)};function rt(E,k,X){E.transparent===!0&&E.side===pn&&E.forceSinglePass===!1?(E.side=gn,E.needsUpdate=!0,xr(E,k,X),E.side=yi,E.needsUpdate=!0,xr(E,k,X),E.side=pn):xr(E,k,X)}this.compile=function(E,k,X=null){X===null&&(X=E),p=et.get(X),p.init(k),y.push(p),X.traverseVisible(function(H){H.isLight&&H.layers.test(k.layers)&&(p.pushLight(H),H.castShadow&&p.pushShadow(H))}),E!==X&&E.traverseVisible(function(H){H.isLight&&H.layers.test(k.layers)&&(p.pushLight(H),H.castShadow&&p.pushShadow(H))}),p.setupLights();const q=new Set;return E.traverse(function(H){if(!(H.isMesh||H.isPoints||H.isLine||H.isSprite))return;const te=H.material;if(te)if(Array.isArray(te))for(let de=0;de<te.length;de++){const _e=te[de];rt(_e,X,H),q.add(_e)}else rt(te,X,H),q.add(te)}),y.pop(),p=null,q},this.compileAsync=function(E,k,X=null){const q=this.compile(E,k,X);return new Promise(H=>{function te(){if(q.forEach(function(de){be.get(de).currentProgram.isReady()&&q.delete(de)}),q.size===0){H(E);return}setTimeout(te,10)}$e.get("KHR_parallel_shader_compile")!==null?te():setTimeout(te,10)})};let Fn=null;function si(E){Fn&&Fn(E)}function Su(){ji.stop()}function Mu(){ji.start()}const ji=new Mf;ji.setAnimationLoop(si),typeof self<"u"&&ji.setContext(self),this.setAnimationLoop=function(E){Fn=E,Y.setAnimationLoop(E),E===null?ji.stop():ji.start()},Y.addEventListener("sessionstart",Su),Y.addEventListener("sessionend",Mu),this.render=function(E,k){if(k!==void 0&&k.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(A===!0)return;if(E.matrixWorldAutoUpdate===!0&&E.updateMatrixWorld(),k.parent===null&&k.matrixWorldAutoUpdate===!0&&k.updateMatrixWorld(),Y.enabled===!0&&Y.isPresenting===!0&&(Y.cameraAutoUpdate===!0&&Y.updateCamera(k),k=Y.getCamera()),E.isScene===!0&&E.onBeforeRender(x,E,k,L),p=et.get(E,y.length),p.init(k),y.push(p),De.multiplyMatrices(k.projectionMatrix,k.matrixWorldInverse),$.setFromProjectionMatrix(De),we=this.localClippingEnabled,ie=se.init(this.clippingPlanes,we),m=ve.get(E,w.length),m.init(),w.push(m),Y.enabled===!0&&Y.isPresenting===!0){const te=x.xr.getDepthSensingMesh();te!==null&&Wa(te,k,-1/0,x.sortObjects)}Wa(E,k,0,x.sortObjects),m.finish(),x.sortObjects===!0&&m.sort(W,j),Qe=Y.enabled===!1||Y.isPresenting===!1||Y.hasDepthSensing()===!1,Qe&&Pe.addToRenderList(m,E),this.info.render.frame++,ie===!0&&se.beginShadows();const X=p.state.shadowsArray;xe.render(X,E,k),ie===!0&&se.endShadows(),this.info.autoReset===!0&&this.info.reset();const q=m.opaque,H=m.transmissive;if(p.setupLights(),k.isArrayCamera){const te=k.cameras;if(H.length>0)for(let de=0,_e=te.length;de<_e;de++){const Se=te[de];bu(q,H,E,Se)}Qe&&Pe.render(E);for(let de=0,_e=te.length;de<_e;de++){const Se=te[de];Eu(m,E,Se,Se.viewport)}}else H.length>0&&bu(q,H,E,k),Qe&&Pe.render(E),Eu(m,E,k);L!==null&&(R.updateMultisampleRenderTarget(L),R.updateRenderTargetMipmap(L)),E.isScene===!0&&E.onAfterRender(x,E,k),ht.resetDefaultState(),M=-1,v=null,y.pop(),y.length>0?(p=y[y.length-1],ie===!0&&se.setGlobalState(x.clippingPlanes,p.state.camera)):p=null,w.pop(),w.length>0?m=w[w.length-1]:m=null};function Wa(E,k,X,q){if(E.visible===!1)return;if(E.layers.test(k.layers)){if(E.isGroup)X=E.renderOrder;else if(E.isLOD)E.autoUpdate===!0&&E.update(k);else if(E.isLight)p.pushLight(E),E.castShadow&&p.pushShadow(E);else if(E.isSprite){if(!E.frustumCulled||$.intersectsSprite(E)){q&&Ge.setFromMatrixPosition(E.matrixWorld).applyMatrix4(De);const de=K.update(E),_e=E.material;_e.visible&&m.push(E,de,_e,X,Ge.z,null)}}else if((E.isMesh||E.isLine||E.isPoints)&&(!E.frustumCulled||$.intersectsObject(E))){const de=K.update(E),_e=E.material;if(q&&(E.boundingSphere!==void 0?(E.boundingSphere===null&&E.computeBoundingSphere(),Ge.copy(E.boundingSphere.center)):(de.boundingSphere===null&&de.computeBoundingSphere(),Ge.copy(de.boundingSphere.center)),Ge.applyMatrix4(E.matrixWorld).applyMatrix4(De)),Array.isArray(_e)){const Se=de.groups;for(let Ne=0,Oe=Se.length;Ne<Oe;Ne++){const Te=Se[Ne],tt=_e[Te.materialIndex];tt&&tt.visible&&m.push(E,de,tt,X,Ge.z,Te)}}else _e.visible&&m.push(E,de,_e,X,Ge.z,null)}}const te=E.children;for(let de=0,_e=te.length;de<_e;de++)Wa(te[de],k,X,q)}function Eu(E,k,X,q){const H=E.opaque,te=E.transmissive,de=E.transparent;p.setupLightsView(X),ie===!0&&se.setGlobalState(x.clippingPlanes,X),q&&Ee.viewport(C.copy(q)),H.length>0&&vr(H,k,X),te.length>0&&vr(te,k,X),de.length>0&&vr(de,k,X),Ee.buffers.depth.setTest(!0),Ee.buffers.depth.setMask(!0),Ee.buffers.color.setMask(!0),Ee.setPolygonOffset(!1)}function bu(E,k,X,q){if((X.isScene===!0?X.overrideMaterial:null)!==null)return;p.state.transmissionRenderTarget[q.id]===void 0&&(p.state.transmissionRenderTarget[q.id]=new tn(1,1,{generateMipmaps:!0,type:$e.has("EXT_color_buffer_half_float")||$e.has("EXT_color_buffer_float")?Dn:wi,minFilter:mi,samples:4,stencilBuffer:o,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Je.workingColorSpace}));const te=p.state.transmissionRenderTarget[q.id],de=q.viewport||C;te.setSize(de.z,de.w);const _e=x.getRenderTarget();x.setRenderTarget(te),x.getClearColor(z),D=x.getClearAlpha(),D<1&&x.setClearColor(16777215,.5),x.clear(),Qe&&Pe.render(X);const Se=x.toneMapping;x.toneMapping=Wi;const Ne=q.viewport;if(q.viewport!==void 0&&(q.viewport=void 0),p.setupLightsView(q),ie===!0&&se.setGlobalState(x.clippingPlanes,q),vr(E,X,q),R.updateMultisampleRenderTarget(te),R.updateRenderTargetMipmap(te),$e.has("WEBGL_multisampled_render_to_texture")===!1){let Oe=!1;for(let Te=0,tt=k.length;Te<tt;Te++){const st=k[Te],At=st.object,St=st.geometry,nt=st.material,Ae=st.group;if(nt.side===pn&&At.layers.test(q.layers)){const zt=nt.side;nt.side=gn,nt.needsUpdate=!0,Tu(At,X,q,St,nt,Ae),nt.side=zt,nt.needsUpdate=!0,Oe=!0}}Oe===!0&&(R.updateMultisampleRenderTarget(te),R.updateRenderTargetMipmap(te))}x.setRenderTarget(_e),x.setClearColor(z,D),Ne!==void 0&&(q.viewport=Ne),x.toneMapping=Se}function vr(E,k,X){const q=k.isScene===!0?k.overrideMaterial:null;for(let H=0,te=E.length;H<te;H++){const de=E[H],_e=de.object,Se=de.geometry,Ne=q===null?de.material:q,Oe=de.group;_e.layers.test(X.layers)&&Tu(_e,k,X,Se,Ne,Oe)}}function Tu(E,k,X,q,H,te){E.onBeforeRender(x,k,X,q,H,te),E.modelViewMatrix.multiplyMatrices(X.matrixWorldInverse,E.matrixWorld),E.normalMatrix.getNormalMatrix(E.modelViewMatrix),H.onBeforeRender(x,k,X,q,E,te),H.transparent===!0&&H.side===pn&&H.forceSinglePass===!1?(H.side=gn,H.needsUpdate=!0,x.renderBufferDirect(X,k,q,H,E,te),H.side=yi,H.needsUpdate=!0,x.renderBufferDirect(X,k,q,H,E,te),H.side=pn):x.renderBufferDirect(X,k,q,H,E,te),E.onAfterRender(x,k,X,q,H,te)}function xr(E,k,X){k.isScene!==!0&&(k=xt);const q=be.get(E),H=p.state.lights,te=p.state.shadowsArray,de=H.state.version,_e=Me.getParameters(E,H.state,te,k,X),Se=Me.getProgramCacheKey(_e);let Ne=q.programs;q.environment=E.isMeshStandardMaterial?k.environment:null,q.fog=k.fog,q.envMap=(E.isMeshStandardMaterial?V:S).get(E.envMap||q.environment),q.envMapRotation=q.environment!==null&&E.envMap===null?k.environmentRotation:E.envMapRotation,Ne===void 0&&(E.addEventListener("dispose",Fe),Ne=new Map,q.programs=Ne);let Oe=Ne.get(Se);if(Oe!==void 0){if(q.currentProgram===Oe&&q.lightsStateVersion===de)return Cu(E,_e),Oe}else _e.uniforms=Me.getUniforms(E),E.onBeforeCompile(_e,x),Oe=Me.acquireProgram(_e,Se),Ne.set(Se,Oe),q.uniforms=_e.uniforms;const Te=q.uniforms;return(!E.isShaderMaterial&&!E.isRawShaderMaterial||E.clipping===!0)&&(Te.clippingPlanes=se.uniform),Cu(E,_e),q.needsLights=Pp(E),q.lightsStateVersion=de,q.needsLights&&(Te.ambientLightColor.value=H.state.ambient,Te.lightProbe.value=H.state.probe,Te.directionalLights.value=H.state.directional,Te.directionalLightShadows.value=H.state.directionalShadow,Te.spotLights.value=H.state.spot,Te.spotLightShadows.value=H.state.spotShadow,Te.rectAreaLights.value=H.state.rectArea,Te.ltc_1.value=H.state.rectAreaLTC1,Te.ltc_2.value=H.state.rectAreaLTC2,Te.pointLights.value=H.state.point,Te.pointLightShadows.value=H.state.pointShadow,Te.hemisphereLights.value=H.state.hemi,Te.directionalShadowMap.value=H.state.directionalShadowMap,Te.directionalShadowMatrix.value=H.state.directionalShadowMatrix,Te.spotShadowMap.value=H.state.spotShadowMap,Te.spotLightMatrix.value=H.state.spotLightMatrix,Te.spotLightMap.value=H.state.spotLightMap,Te.pointShadowMap.value=H.state.pointShadowMap,Te.pointShadowMatrix.value=H.state.pointShadowMatrix),q.currentProgram=Oe,q.uniformsList=null,Oe}function Au(E){if(E.uniformsList===null){const k=E.currentProgram.getUniforms();E.uniformsList=ya.seqWithValue(k.seq,E.uniforms)}return E.uniformsList}function Cu(E,k){const X=be.get(E);X.outputColorSpace=k.outputColorSpace,X.batching=k.batching,X.batchingColor=k.batchingColor,X.instancing=k.instancing,X.instancingColor=k.instancingColor,X.instancingMorph=k.instancingMorph,X.skinning=k.skinning,X.morphTargets=k.morphTargets,X.morphNormals=k.morphNormals,X.morphColors=k.morphColors,X.morphTargetsCount=k.morphTargetsCount,X.numClippingPlanes=k.numClippingPlanes,X.numIntersection=k.numClipIntersection,X.vertexAlphas=k.vertexAlphas,X.vertexTangents=k.vertexTangents,X.toneMapping=k.toneMapping}function Cp(E,k,X,q,H){k.isScene!==!0&&(k=xt),R.resetTextureUnits();const te=k.fog,de=q.isMeshStandardMaterial?k.environment:null,_e=L===null?x.outputColorSpace:L.isXRRenderTarget===!0?L.texture.colorSpace:an,Se=(q.isMeshStandardMaterial?V:S).get(q.envMap||de),Ne=q.vertexColors===!0&&!!X.attributes.color&&X.attributes.color.itemSize===4,Oe=!!X.attributes.tangent&&(!!q.normalMap||q.anisotropy>0),Te=!!X.morphAttributes.position,tt=!!X.morphAttributes.normal,st=!!X.morphAttributes.color;let At=Wi;q.toneMapped&&(L===null||L.isXRRenderTarget===!0)&&(At=x.toneMapping);const St=X.morphAttributes.position||X.morphAttributes.normal||X.morphAttributes.color,nt=St!==void 0?St.length:0,Ae=be.get(q),zt=p.state.lights;if(ie===!0&&(we===!0||E!==v)){const Zt=E===v&&q.id===M;se.setState(q,E,Zt)}let ot=!1;q.version===Ae.__version?(Ae.needsLights&&Ae.lightsStateVersion!==zt.state.version||Ae.outputColorSpace!==_e||H.isBatchedMesh&&Ae.batching===!1||!H.isBatchedMesh&&Ae.batching===!0||H.isBatchedMesh&&Ae.batchingColor===!0&&H.colorTexture===null||H.isBatchedMesh&&Ae.batchingColor===!1&&H.colorTexture!==null||H.isInstancedMesh&&Ae.instancing===!1||!H.isInstancedMesh&&Ae.instancing===!0||H.isSkinnedMesh&&Ae.skinning===!1||!H.isSkinnedMesh&&Ae.skinning===!0||H.isInstancedMesh&&Ae.instancingColor===!0&&H.instanceColor===null||H.isInstancedMesh&&Ae.instancingColor===!1&&H.instanceColor!==null||H.isInstancedMesh&&Ae.instancingMorph===!0&&H.morphTexture===null||H.isInstancedMesh&&Ae.instancingMorph===!1&&H.morphTexture!==null||Ae.envMap!==Se||q.fog===!0&&Ae.fog!==te||Ae.numClippingPlanes!==void 0&&(Ae.numClippingPlanes!==se.numPlanes||Ae.numIntersection!==se.numIntersection)||Ae.vertexAlphas!==Ne||Ae.vertexTangents!==Oe||Ae.morphTargets!==Te||Ae.morphNormals!==tt||Ae.morphColors!==st||Ae.toneMapping!==At||Ae.morphTargetsCount!==nt)&&(ot=!0):(ot=!0,Ae.__version=q.version);let Bn=Ae.currentProgram;ot===!0&&(Bn=xr(q,k,H));let bs=!1,vn=!1,Ao=!1;const gt=Bn.getUniforms(),Tn=Ae.uniforms;if(Ee.useProgram(Bn.program)&&(bs=!0,vn=!0,Ao=!0),q.id!==M&&(M=q.id,vn=!0),bs||v!==E){Ee.buffers.depth.getReversed()?(he.copy(E.projectionMatrix),zm(he),km(he),gt.setValue(U,"projectionMatrix",he)):gt.setValue(U,"projectionMatrix",E.projectionMatrix),gt.setValue(U,"viewMatrix",E.matrixWorldInverse);const ln=gt.map.cameraPosition;ln!==void 0&&ln.setValue(U,Ue.setFromMatrixPosition(E.matrixWorld)),Ke.logarithmicDepthBuffer&&gt.setValue(U,"logDepthBufFC",2/(Math.log(E.far+1)/Math.LN2)),(q.isMeshPhongMaterial||q.isMeshToonMaterial||q.isMeshLambertMaterial||q.isMeshBasicMaterial||q.isMeshStandardMaterial||q.isShaderMaterial)&&gt.setValue(U,"isOrthographic",E.isOrthographicCamera===!0),v!==E&&(v=E,vn=!0,Ao=!0)}if(H.isSkinnedMesh){gt.setOptional(U,H,"bindMatrix"),gt.setOptional(U,H,"bindMatrixInverse");const Zt=H.skeleton;Zt&&(Zt.boneTexture===null&&Zt.computeBoneTexture(),gt.setValue(U,"boneTexture",Zt.boneTexture,R))}H.isBatchedMesh&&(gt.setOptional(U,H,"batchingTexture"),gt.setValue(U,"batchingTexture",H._matricesTexture,R),gt.setOptional(U,H,"batchingIdTexture"),gt.setValue(U,"batchingIdTexture",H._indirectTexture,R),gt.setOptional(U,H,"batchingColorTexture"),H._colorsTexture!==null&&gt.setValue(U,"batchingColorTexture",H._colorsTexture,R));const An=X.morphAttributes;if((An.position!==void 0||An.normal!==void 0||An.color!==void 0)&&Ie.update(H,X,Bn),(vn||Ae.receiveShadow!==H.receiveShadow)&&(Ae.receiveShadow=H.receiveShadow,gt.setValue(U,"receiveShadow",H.receiveShadow)),q.isMeshGouraudMaterial&&q.envMap!==null&&(Tn.envMap.value=Se,Tn.flipEnvMap.value=Se.isCubeTexture&&Se.isRenderTargetTexture===!1?-1:1),q.isMeshStandardMaterial&&q.envMap===null&&k.environment!==null&&(Tn.envMapIntensity.value=k.environmentIntensity),vn&&(gt.setValue(U,"toneMappingExposure",x.toneMappingExposure),Ae.needsLights&&Rp(Tn,Ao),te&&q.fog===!0&&fe.refreshFogUniforms(Tn,te),fe.refreshMaterialUniforms(Tn,q,F,G,p.state.transmissionRenderTarget[E.id]),ya.upload(U,Au(Ae),Tn,R)),q.isShaderMaterial&&q.uniformsNeedUpdate===!0&&(ya.upload(U,Au(Ae),Tn,R),q.uniformsNeedUpdate=!1),q.isSpriteMaterial&&gt.setValue(U,"center",H.center),gt.setValue(U,"modelViewMatrix",H.modelViewMatrix),gt.setValue(U,"normalMatrix",H.normalMatrix),gt.setValue(U,"modelMatrix",H.matrixWorld),q.isShaderMaterial||q.isRawShaderMaterial){const Zt=q.uniformsGroups;for(let ln=0,Xa=Zt.length;ln<Xa;ln++){const Yi=Zt[ln];B.update(Yi,Bn),B.bind(Yi,Bn)}}return Bn}function Rp(E,k){E.ambientLightColor.needsUpdate=k,E.lightProbe.needsUpdate=k,E.directionalLights.needsUpdate=k,E.directionalLightShadows.needsUpdate=k,E.pointLights.needsUpdate=k,E.pointLightShadows.needsUpdate=k,E.spotLights.needsUpdate=k,E.spotLightShadows.needsUpdate=k,E.rectAreaLights.needsUpdate=k,E.hemisphereLights.needsUpdate=k}function Pp(E){return E.isMeshLambertMaterial||E.isMeshToonMaterial||E.isMeshPhongMaterial||E.isMeshStandardMaterial||E.isShadowMaterial||E.isShaderMaterial&&E.lights===!0}this.getActiveCubeFace=function(){return T},this.getActiveMipmapLevel=function(){return P},this.getRenderTarget=function(){return L},this.setRenderTargetTextures=function(E,k,X){be.get(E.texture).__webglTexture=k,be.get(E.depthTexture).__webglTexture=X;const q=be.get(E);q.__hasExternalTextures=!0,q.__autoAllocateDepthBuffer=X===void 0,q.__autoAllocateDepthBuffer||$e.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),q.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(E,k){const X=be.get(E);X.__webglFramebuffer=k,X.__useDefaultFramebuffer=k===void 0},this.setRenderTarget=function(E,k=0,X=0){L=E,T=k,P=X;let q=!0,H=null,te=!1,de=!1;if(E){const Se=be.get(E);if(Se.__useDefaultFramebuffer!==void 0)Ee.bindFramebuffer(U.FRAMEBUFFER,null),q=!1;else if(Se.__webglFramebuffer===void 0)R.setupRenderTarget(E);else if(Se.__hasExternalTextures)R.rebindTextures(E,be.get(E.texture).__webglTexture,be.get(E.depthTexture).__webglTexture);else if(E.depthBuffer){const Te=E.depthTexture;if(Se.__boundDepthTexture!==Te){if(Te!==null&&be.has(Te)&&(E.width!==Te.image.width||E.height!==Te.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");R.setupDepthRenderbuffer(E)}}const Ne=E.texture;(Ne.isData3DTexture||Ne.isDataArrayTexture||Ne.isCompressedArrayTexture)&&(de=!0);const Oe=be.get(E).__webglFramebuffer;E.isWebGLCubeRenderTarget?(Array.isArray(Oe[k])?H=Oe[k][X]:H=Oe[k],te=!0):E.samples>0&&R.useMultisampledRTT(E)===!1?H=be.get(E).__webglMultisampledFramebuffer:Array.isArray(Oe)?H=Oe[X]:H=Oe,C.copy(E.viewport),N.copy(E.scissor),O=E.scissorTest}else C.copy(ee).multiplyScalar(F).floor(),N.copy(ce).multiplyScalar(F).floor(),O=Re;if(Ee.bindFramebuffer(U.FRAMEBUFFER,H)&&q&&Ee.drawBuffers(E,H),Ee.viewport(C),Ee.scissor(N),Ee.setScissorTest(O),te){const Se=be.get(E.texture);U.framebufferTexture2D(U.FRAMEBUFFER,U.COLOR_ATTACHMENT0,U.TEXTURE_CUBE_MAP_POSITIVE_X+k,Se.__webglTexture,X)}else if(de){const Se=be.get(E.texture),Ne=k||0;U.framebufferTextureLayer(U.FRAMEBUFFER,U.COLOR_ATTACHMENT0,Se.__webglTexture,X||0,Ne)}M=-1},this.readRenderTargetPixels=function(E,k,X,q,H,te,de){if(!(E&&E.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let _e=be.get(E).__webglFramebuffer;if(E.isWebGLCubeRenderTarget&&de!==void 0&&(_e=_e[de]),_e){Ee.bindFramebuffer(U.FRAMEBUFFER,_e);try{const Se=E.texture,Ne=Se.format,Oe=Se.type;if(!Ke.textureFormatReadable(Ne)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!Ke.textureTypeReadable(Oe)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}k>=0&&k<=E.width-q&&X>=0&&X<=E.height-H&&U.readPixels(k,X,q,H,ze.convert(Ne),ze.convert(Oe),te)}finally{const Se=L!==null?be.get(L).__webglFramebuffer:null;Ee.bindFramebuffer(U.FRAMEBUFFER,Se)}}},this.readRenderTargetPixelsAsync=async function(E,k,X,q,H,te,de){if(!(E&&E.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let _e=be.get(E).__webglFramebuffer;if(E.isWebGLCubeRenderTarget&&de!==void 0&&(_e=_e[de]),_e){const Se=E.texture,Ne=Se.format,Oe=Se.type;if(!Ke.textureFormatReadable(Ne))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!Ke.textureTypeReadable(Oe))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(k>=0&&k<=E.width-q&&X>=0&&X<=E.height-H){Ee.bindFramebuffer(U.FRAMEBUFFER,_e);const Te=U.createBuffer();U.bindBuffer(U.PIXEL_PACK_BUFFER,Te),U.bufferData(U.PIXEL_PACK_BUFFER,te.byteLength,U.STREAM_READ),U.readPixels(k,X,q,H,ze.convert(Ne),ze.convert(Oe),0);const tt=L!==null?be.get(L).__webglFramebuffer:null;Ee.bindFramebuffer(U.FRAMEBUFFER,tt);const st=U.fenceSync(U.SYNC_GPU_COMMANDS_COMPLETE,0);return U.flush(),await Bm(U,st,4),U.bindBuffer(U.PIXEL_PACK_BUFFER,Te),U.getBufferSubData(U.PIXEL_PACK_BUFFER,0,te),U.deleteBuffer(Te),U.deleteSync(st),te}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(E,k=null,X=0){E.isTexture!==!0&&(Vs("WebGLRenderer: copyFramebufferToTexture function signature has changed."),k=arguments[0]||null,E=arguments[1]);const q=Math.pow(2,-X),H=Math.floor(E.image.width*q),te=Math.floor(E.image.height*q),de=k!==null?k.x:0,_e=k!==null?k.y:0;R.setTexture2D(E,0),U.copyTexSubImage2D(U.TEXTURE_2D,X,0,0,de,_e,H,te),Ee.unbindTexture()};const Dp=U.createFramebuffer(),Lp=U.createFramebuffer();this.copyTextureToTexture=function(E,k,X=null,q=null,H=0,te=null){E.isTexture!==!0&&(Vs("WebGLRenderer: copyTextureToTexture function signature has changed."),q=arguments[0]||null,E=arguments[1],k=arguments[2],te=arguments[3]||0,X=null),te===null&&(H!==0?(Vs("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),te=H,H=0):te=0);let de,_e,Se,Ne,Oe,Te,tt,st,At;const St=E.isCompressedTexture?E.mipmaps[te]:E.image;if(X!==null)de=X.max.x-X.min.x,_e=X.max.y-X.min.y,Se=X.isBox3?X.max.z-X.min.z:1,Ne=X.min.x,Oe=X.min.y,Te=X.isBox3?X.min.z:0;else{const An=Math.pow(2,-H);de=Math.floor(St.width*An),_e=Math.floor(St.height*An),E.isDataArrayTexture?Se=St.depth:E.isData3DTexture?Se=Math.floor(St.depth*An):Se=1,Ne=0,Oe=0,Te=0}q!==null?(tt=q.x,st=q.y,At=q.z):(tt=0,st=0,At=0);const nt=ze.convert(k.format),Ae=ze.convert(k.type);let zt;k.isData3DTexture?(R.setTexture3D(k,0),zt=U.TEXTURE_3D):k.isDataArrayTexture||k.isCompressedArrayTexture?(R.setTexture2DArray(k,0),zt=U.TEXTURE_2D_ARRAY):(R.setTexture2D(k,0),zt=U.TEXTURE_2D),U.pixelStorei(U.UNPACK_FLIP_Y_WEBGL,k.flipY),U.pixelStorei(U.UNPACK_PREMULTIPLY_ALPHA_WEBGL,k.premultiplyAlpha),U.pixelStorei(U.UNPACK_ALIGNMENT,k.unpackAlignment);const ot=U.getParameter(U.UNPACK_ROW_LENGTH),Bn=U.getParameter(U.UNPACK_IMAGE_HEIGHT),bs=U.getParameter(U.UNPACK_SKIP_PIXELS),vn=U.getParameter(U.UNPACK_SKIP_ROWS),Ao=U.getParameter(U.UNPACK_SKIP_IMAGES);U.pixelStorei(U.UNPACK_ROW_LENGTH,St.width),U.pixelStorei(U.UNPACK_IMAGE_HEIGHT,St.height),U.pixelStorei(U.UNPACK_SKIP_PIXELS,Ne),U.pixelStorei(U.UNPACK_SKIP_ROWS,Oe),U.pixelStorei(U.UNPACK_SKIP_IMAGES,Te);const gt=E.isDataArrayTexture||E.isData3DTexture,Tn=k.isDataArrayTexture||k.isData3DTexture;if(E.isDepthTexture){const An=be.get(E),Zt=be.get(k),ln=be.get(An.__renderTarget),Xa=be.get(Zt.__renderTarget);Ee.bindFramebuffer(U.READ_FRAMEBUFFER,ln.__webglFramebuffer),Ee.bindFramebuffer(U.DRAW_FRAMEBUFFER,Xa.__webglFramebuffer);for(let Yi=0;Yi<Se;Yi++)gt&&(U.framebufferTextureLayer(U.READ_FRAMEBUFFER,U.COLOR_ATTACHMENT0,be.get(E).__webglTexture,H,Te+Yi),U.framebufferTextureLayer(U.DRAW_FRAMEBUFFER,U.COLOR_ATTACHMENT0,be.get(k).__webglTexture,te,At+Yi)),U.blitFramebuffer(Ne,Oe,de,_e,tt,st,de,_e,U.DEPTH_BUFFER_BIT,U.NEAREST);Ee.bindFramebuffer(U.READ_FRAMEBUFFER,null),Ee.bindFramebuffer(U.DRAW_FRAMEBUFFER,null)}else if(H!==0||E.isRenderTargetTexture||be.has(E)){const An=be.get(E),Zt=be.get(k);Ee.bindFramebuffer(U.READ_FRAMEBUFFER,Dp),Ee.bindFramebuffer(U.DRAW_FRAMEBUFFER,Lp);for(let ln=0;ln<Se;ln++)gt?U.framebufferTextureLayer(U.READ_FRAMEBUFFER,U.COLOR_ATTACHMENT0,An.__webglTexture,H,Te+ln):U.framebufferTexture2D(U.READ_FRAMEBUFFER,U.COLOR_ATTACHMENT0,U.TEXTURE_2D,An.__webglTexture,H),Tn?U.framebufferTextureLayer(U.DRAW_FRAMEBUFFER,U.COLOR_ATTACHMENT0,Zt.__webglTexture,te,At+ln):U.framebufferTexture2D(U.DRAW_FRAMEBUFFER,U.COLOR_ATTACHMENT0,U.TEXTURE_2D,Zt.__webglTexture,te),H!==0?U.blitFramebuffer(Ne,Oe,de,_e,tt,st,de,_e,U.COLOR_BUFFER_BIT,U.NEAREST):Tn?U.copyTexSubImage3D(zt,te,tt,st,At+ln,Ne,Oe,de,_e):U.copyTexSubImage2D(zt,te,tt,st,Ne,Oe,de,_e);Ee.bindFramebuffer(U.READ_FRAMEBUFFER,null),Ee.bindFramebuffer(U.DRAW_FRAMEBUFFER,null)}else Tn?E.isDataTexture||E.isData3DTexture?U.texSubImage3D(zt,te,tt,st,At,de,_e,Se,nt,Ae,St.data):k.isCompressedArrayTexture?U.compressedTexSubImage3D(zt,te,tt,st,At,de,_e,Se,nt,St.data):U.texSubImage3D(zt,te,tt,st,At,de,_e,Se,nt,Ae,St):E.isDataTexture?U.texSubImage2D(U.TEXTURE_2D,te,tt,st,de,_e,nt,Ae,St.data):E.isCompressedTexture?U.compressedTexSubImage2D(U.TEXTURE_2D,te,tt,st,St.width,St.height,nt,St.data):U.texSubImage2D(U.TEXTURE_2D,te,tt,st,de,_e,nt,Ae,St);U.pixelStorei(U.UNPACK_ROW_LENGTH,ot),U.pixelStorei(U.UNPACK_IMAGE_HEIGHT,Bn),U.pixelStorei(U.UNPACK_SKIP_PIXELS,bs),U.pixelStorei(U.UNPACK_SKIP_ROWS,vn),U.pixelStorei(U.UNPACK_SKIP_IMAGES,Ao),te===0&&k.generateMipmaps&&U.generateMipmap(zt),Ee.unbindTexture()},this.copyTextureToTexture3D=function(E,k,X=null,q=null,H=0){return E.isTexture!==!0&&(Vs("WebGLRenderer: copyTextureToTexture3D function signature has changed."),X=arguments[0]||null,q=arguments[1]||null,E=arguments[2],k=arguments[3],H=arguments[4]||0),Vs('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(E,k,X,q,H)},this.initRenderTarget=function(E){be.get(E).__webglFramebuffer===void 0&&R.setupRenderTarget(E)},this.initTexture=function(E){E.isCubeTexture?R.setTextureCube(E,0):E.isData3DTexture?R.setTexture3D(E,0):E.isDataArrayTexture||E.isCompressedArrayTexture?R.setTexture2DArray(E,0):R.setTexture2D(E,0),Ee.unbindTexture()},this.resetState=function(){T=0,P=0,L=null,Ee.reset(),ht.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return gi}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorspace=Je._getDrawingBufferColorSpace(e),t.unpackColorSpace=Je._getUnpackColorSpace()}}const By="modulepreload",zy=function(i){return"/Cielo/"+i},Zd={},ys=function(e,t,n){let s=Promise.resolve();if(t&&t.length>0){let r=function(c){return Promise.all(c.map(u=>Promise.resolve(u).then(d=>({status:"fulfilled",value:d}),d=>({status:"rejected",reason:d}))))};document.getElementsByTagName("link");const a=document.querySelector("meta[property=csp-nonce]"),l=(a==null?void 0:a.nonce)||(a==null?void 0:a.getAttribute("nonce"));s=r(t.map(c=>{if(c=zy(c),c in Zd)return;Zd[c]=!0;const u=c.endsWith(".css"),d=u?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${c}"]${d}`))return;const h=document.createElement("link");if(h.rel=u?"stylesheet":By,u||(h.as="script"),h.crossOrigin="",h.href=c,l&&h.setAttribute("nonce",l),document.head.appendChild(h),u)return new Promise((f,_)=>{h.addEventListener("load",f),h.addEventListener("error",()=>_(new Error(`Unable to preload CSS for ${c}`)))})}))}function o(r){const a=new Event("vite:preloadError",{cancelable:!0});if(a.payload=r,window.dispatchEvent(a),!a.defaultPrevented)throw r}return s.then(r=>{for(const a of r||[])a.status==="rejected"&&o(a.reason);return e().catch(o)})},Jd={type:"change"},du={type:"start"},Cf={type:"end"},Zr=new wo,Qd=new Ni,ky=Math.cos(70*_i.DEG2RAD),Rt=new b,cn=2*Math.PI,ut={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6},Tl=1e-6;class eh extends Sf{constructor(e,t=null){super(e,t),this.state=ut.NONE,this.enabled=!0,this.target=new b,this.cursor=new b,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:Zs.ROTATE,MIDDLE:Zs.DOLLY,RIGHT:Zs.PAN},this.touches={ONE:Ws.ROTATE,TWO:Ws.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._domElementKeyEvents=null,this._lastPosition=new b,this._lastQuaternion=new ft,this._lastTargetPosition=new b,this._quat=new ft().setFromUnitVectors(e.up,new b(0,1,0)),this._quatInverse=this._quat.clone().invert(),this._spherical=new Ed,this._sphericalDelta=new Ed,this._scale=1,this._panOffset=new b,this._rotateStart=new ge,this._rotateEnd=new ge,this._rotateDelta=new ge,this._panStart=new ge,this._panEnd=new ge,this._panDelta=new ge,this._dollyStart=new ge,this._dollyEnd=new ge,this._dollyDelta=new ge,this._dollyDirection=new b,this._mouse=new ge,this._performCursorZoom=!1,this._pointers=[],this._pointerPositions={},this._controlActive=!1,this._onPointerMove=Gy.bind(this),this._onPointerDown=Hy.bind(this),this._onPointerUp=Vy.bind(this),this._onContextMenu=Ky.bind(this),this._onMouseWheel=qy.bind(this),this._onKeyDown=jy.bind(this),this._onTouchStart=Yy.bind(this),this._onTouchMove=$y.bind(this),this._onMouseDown=Wy.bind(this),this._onMouseMove=Xy.bind(this),this._interceptControlDown=Zy.bind(this),this._interceptControlUp=Jy.bind(this),this.domElement!==null&&this.connect(),this.update()}connect(){this.domElement.addEventListener("pointerdown",this._onPointerDown),this.domElement.addEventListener("pointercancel",this._onPointerUp),this.domElement.addEventListener("contextmenu",this._onContextMenu),this.domElement.addEventListener("wheel",this._onMouseWheel,{passive:!1}),this.domElement.getRootNode().addEventListener("keydown",this._interceptControlDown,{passive:!0,capture:!0}),this.domElement.style.touchAction="none"}disconnect(){this.domElement.removeEventListener("pointerdown",this._onPointerDown),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp),this.domElement.removeEventListener("pointercancel",this._onPointerUp),this.domElement.removeEventListener("wheel",this._onMouseWheel),this.domElement.removeEventListener("contextmenu",this._onContextMenu),this.stopListenToKeyEvents(),this.domElement.getRootNode().removeEventListener("keydown",this._interceptControlDown,{capture:!0}),this.domElement.style.touchAction="auto"}dispose(){this.disconnect()}getPolarAngle(){return this._spherical.phi}getAzimuthalAngle(){return this._spherical.theta}getDistance(){return this.object.position.distanceTo(this.target)}listenToKeyEvents(e){e.addEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=e}stopListenToKeyEvents(){this._domElementKeyEvents!==null&&(this._domElementKeyEvents.removeEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=null)}saveState(){this.target0.copy(this.target),this.position0.copy(this.object.position),this.zoom0=this.object.zoom}reset(){this.target.copy(this.target0),this.object.position.copy(this.position0),this.object.zoom=this.zoom0,this.object.updateProjectionMatrix(),this.dispatchEvent(Jd),this.update(),this.state=ut.NONE}update(e=null){const t=this.object.position;Rt.copy(t).sub(this.target),Rt.applyQuaternion(this._quat),this._spherical.setFromVector3(Rt),this.autoRotate&&this.state===ut.NONE&&this._rotateLeft(this._getAutoRotationAngle(e)),this.enableDamping?(this._spherical.theta+=this._sphericalDelta.theta*this.dampingFactor,this._spherical.phi+=this._sphericalDelta.phi*this.dampingFactor):(this._spherical.theta+=this._sphericalDelta.theta,this._spherical.phi+=this._sphericalDelta.phi);let n=this.minAzimuthAngle,s=this.maxAzimuthAngle;isFinite(n)&&isFinite(s)&&(n<-Math.PI?n+=cn:n>Math.PI&&(n-=cn),s<-Math.PI?s+=cn:s>Math.PI&&(s-=cn),n<=s?this._spherical.theta=Math.max(n,Math.min(s,this._spherical.theta)):this._spherical.theta=this._spherical.theta>(n+s)/2?Math.max(n,this._spherical.theta):Math.min(s,this._spherical.theta)),this._spherical.phi=Math.max(this.minPolarAngle,Math.min(this.maxPolarAngle,this._spherical.phi)),this._spherical.makeSafe(),this.enableDamping===!0?this.target.addScaledVector(this._panOffset,this.dampingFactor):this.target.add(this._panOffset),this.target.sub(this.cursor),this.target.clampLength(this.minTargetRadius,this.maxTargetRadius),this.target.add(this.cursor);let o=!1;if(this.zoomToCursor&&this._performCursorZoom||this.object.isOrthographicCamera)this._spherical.radius=this._clampDistance(this._spherical.radius);else{const r=this._spherical.radius;this._spherical.radius=this._clampDistance(this._spherical.radius*this._scale),o=r!=this._spherical.radius}if(Rt.setFromSpherical(this._spherical),Rt.applyQuaternion(this._quatInverse),t.copy(this.target).add(Rt),this.object.lookAt(this.target),this.enableDamping===!0?(this._sphericalDelta.theta*=1-this.dampingFactor,this._sphericalDelta.phi*=1-this.dampingFactor,this._panOffset.multiplyScalar(1-this.dampingFactor)):(this._sphericalDelta.set(0,0,0),this._panOffset.set(0,0,0)),this.zoomToCursor&&this._performCursorZoom){let r=null;if(this.object.isPerspectiveCamera){const a=Rt.length();r=this._clampDistance(a*this._scale);const l=a-r;this.object.position.addScaledVector(this._dollyDirection,l),this.object.updateMatrixWorld(),o=!!l}else if(this.object.isOrthographicCamera){const a=new b(this._mouse.x,this._mouse.y,0);a.unproject(this.object);const l=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),this.object.updateProjectionMatrix(),o=l!==this.object.zoom;const c=new b(this._mouse.x,this._mouse.y,0);c.unproject(this.object),this.object.position.sub(c).add(a),this.object.updateMatrixWorld(),r=Rt.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),this.zoomToCursor=!1;r!==null&&(this.screenSpacePanning?this.target.set(0,0,-1).transformDirection(this.object.matrix).multiplyScalar(r).add(this.object.position):(Zr.origin.copy(this.object.position),Zr.direction.set(0,0,-1).transformDirection(this.object.matrix),Math.abs(this.object.up.dot(Zr.direction))<ky?this.object.lookAt(this.target):(Qd.setFromNormalAndCoplanarPoint(this.object.up,this.target),Zr.intersectPlane(Qd,this.target))))}else if(this.object.isOrthographicCamera){const r=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),r!==this.object.zoom&&(this.object.updateProjectionMatrix(),o=!0)}return this._scale=1,this._performCursorZoom=!1,o||this._lastPosition.distanceToSquared(this.object.position)>Tl||8*(1-this._lastQuaternion.dot(this.object.quaternion))>Tl||this._lastTargetPosition.distanceToSquared(this.target)>Tl?(this.dispatchEvent(Jd),this._lastPosition.copy(this.object.position),this._lastQuaternion.copy(this.object.quaternion),this._lastTargetPosition.copy(this.target),!0):!1}_getAutoRotationAngle(e){return e!==null?cn/60*this.autoRotateSpeed*e:cn/60/60*this.autoRotateSpeed}_getZoomScale(e){const t=Math.abs(e*.01);return Math.pow(.95,this.zoomSpeed*t)}_rotateLeft(e){this._sphericalDelta.theta-=e}_rotateUp(e){this._sphericalDelta.phi-=e}_panLeft(e,t){Rt.setFromMatrixColumn(t,0),Rt.multiplyScalar(-e),this._panOffset.add(Rt)}_panUp(e,t){this.screenSpacePanning===!0?Rt.setFromMatrixColumn(t,1):(Rt.setFromMatrixColumn(t,0),Rt.crossVectors(this.object.up,Rt)),Rt.multiplyScalar(e),this._panOffset.add(Rt)}_pan(e,t){const n=this.domElement;if(this.object.isPerspectiveCamera){const s=this.object.position;Rt.copy(s).sub(this.target);let o=Rt.length();o*=Math.tan(this.object.fov/2*Math.PI/180),this._panLeft(2*e*o/n.clientHeight,this.object.matrix),this._panUp(2*t*o/n.clientHeight,this.object.matrix)}else this.object.isOrthographicCamera?(this._panLeft(e*(this.object.right-this.object.left)/this.object.zoom/n.clientWidth,this.object.matrix),this._panUp(t*(this.object.top-this.object.bottom)/this.object.zoom/n.clientHeight,this.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),this.enablePan=!1)}_dollyOut(e){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale/=e:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_dollyIn(e){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale*=e:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_updateZoomParameters(e,t){if(!this.zoomToCursor)return;this._performCursorZoom=!0;const n=this.domElement.getBoundingClientRect(),s=e-n.left,o=t-n.top,r=n.width,a=n.height;this._mouse.x=s/r*2-1,this._mouse.y=-(o/a)*2+1,this._dollyDirection.set(this._mouse.x,this._mouse.y,1).unproject(this.object).sub(this.object.position).normalize()}_clampDistance(e){return Math.max(this.minDistance,Math.min(this.maxDistance,e))}_handleMouseDownRotate(e){this._rotateStart.set(e.clientX,e.clientY)}_handleMouseDownDolly(e){this._updateZoomParameters(e.clientX,e.clientX),this._dollyStart.set(e.clientX,e.clientY)}_handleMouseDownPan(e){this._panStart.set(e.clientX,e.clientY)}_handleMouseMoveRotate(e){this._rotateEnd.set(e.clientX,e.clientY),this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const t=this.domElement;this._rotateLeft(cn*this._rotateDelta.x/t.clientHeight),this._rotateUp(cn*this._rotateDelta.y/t.clientHeight),this._rotateStart.copy(this._rotateEnd),this.update()}_handleMouseMoveDolly(e){this._dollyEnd.set(e.clientX,e.clientY),this._dollyDelta.subVectors(this._dollyEnd,this._dollyStart),this._dollyDelta.y>0?this._dollyOut(this._getZoomScale(this._dollyDelta.y)):this._dollyDelta.y<0&&this._dollyIn(this._getZoomScale(this._dollyDelta.y)),this._dollyStart.copy(this._dollyEnd),this.update()}_handleMouseMovePan(e){this._panEnd.set(e.clientX,e.clientY),this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd),this.update()}_handleMouseWheel(e){this._updateZoomParameters(e.clientX,e.clientY),e.deltaY<0?this._dollyIn(this._getZoomScale(e.deltaY)):e.deltaY>0&&this._dollyOut(this._getZoomScale(e.deltaY)),this.update()}_handleKeyDown(e){let t=!1;switch(e.code){case this.keys.UP:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateUp(cn*this.rotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,this.keyPanSpeed),t=!0;break;case this.keys.BOTTOM:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateUp(-cn*this.rotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,-this.keyPanSpeed),t=!0;break;case this.keys.LEFT:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateLeft(cn*this.rotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(this.keyPanSpeed,0),t=!0;break;case this.keys.RIGHT:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateLeft(-cn*this.rotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(-this.keyPanSpeed,0),t=!0;break}t&&(e.preventDefault(),this.update())}_handleTouchStartRotate(e){if(this._pointers.length===1)this._rotateStart.set(e.pageX,e.pageY);else{const t=this._getSecondPointerPosition(e),n=.5*(e.pageX+t.x),s=.5*(e.pageY+t.y);this._rotateStart.set(n,s)}}_handleTouchStartPan(e){if(this._pointers.length===1)this._panStart.set(e.pageX,e.pageY);else{const t=this._getSecondPointerPosition(e),n=.5*(e.pageX+t.x),s=.5*(e.pageY+t.y);this._panStart.set(n,s)}}_handleTouchStartDolly(e){const t=this._getSecondPointerPosition(e),n=e.pageX-t.x,s=e.pageY-t.y,o=Math.sqrt(n*n+s*s);this._dollyStart.set(0,o)}_handleTouchStartDollyPan(e){this.enableZoom&&this._handleTouchStartDolly(e),this.enablePan&&this._handleTouchStartPan(e)}_handleTouchStartDollyRotate(e){this.enableZoom&&this._handleTouchStartDolly(e),this.enableRotate&&this._handleTouchStartRotate(e)}_handleTouchMoveRotate(e){if(this._pointers.length==1)this._rotateEnd.set(e.pageX,e.pageY);else{const n=this._getSecondPointerPosition(e),s=.5*(e.pageX+n.x),o=.5*(e.pageY+n.y);this._rotateEnd.set(s,o)}this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const t=this.domElement;this._rotateLeft(cn*this._rotateDelta.x/t.clientHeight),this._rotateUp(cn*this._rotateDelta.y/t.clientHeight),this._rotateStart.copy(this._rotateEnd)}_handleTouchMovePan(e){if(this._pointers.length===1)this._panEnd.set(e.pageX,e.pageY);else{const t=this._getSecondPointerPosition(e),n=.5*(e.pageX+t.x),s=.5*(e.pageY+t.y);this._panEnd.set(n,s)}this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd)}_handleTouchMoveDolly(e){const t=this._getSecondPointerPosition(e),n=e.pageX-t.x,s=e.pageY-t.y,o=Math.sqrt(n*n+s*s);this._dollyEnd.set(0,o),this._dollyDelta.set(0,Math.pow(this._dollyEnd.y/this._dollyStart.y,this.zoomSpeed)),this._dollyOut(this._dollyDelta.y),this._dollyStart.copy(this._dollyEnd);const r=(e.pageX+t.x)*.5,a=(e.pageY+t.y)*.5;this._updateZoomParameters(r,a)}_handleTouchMoveDollyPan(e){this.enableZoom&&this._handleTouchMoveDolly(e),this.enablePan&&this._handleTouchMovePan(e)}_handleTouchMoveDollyRotate(e){this.enableZoom&&this._handleTouchMoveDolly(e),this.enableRotate&&this._handleTouchMoveRotate(e)}_addPointer(e){this._pointers.push(e.pointerId)}_removePointer(e){delete this._pointerPositions[e.pointerId];for(let t=0;t<this._pointers.length;t++)if(this._pointers[t]==e.pointerId){this._pointers.splice(t,1);return}}_isTrackingPointer(e){for(let t=0;t<this._pointers.length;t++)if(this._pointers[t]==e.pointerId)return!0;return!1}_trackPointer(e){let t=this._pointerPositions[e.pointerId];t===void 0&&(t=new ge,this._pointerPositions[e.pointerId]=t),t.set(e.pageX,e.pageY)}_getSecondPointerPosition(e){const t=e.pointerId===this._pointers[0]?this._pointers[1]:this._pointers[0];return this._pointerPositions[t]}_customWheelEvent(e){const t=e.deltaMode,n={clientX:e.clientX,clientY:e.clientY,deltaY:e.deltaY};switch(t){case 1:n.deltaY*=16;break;case 2:n.deltaY*=100;break}return e.ctrlKey&&!this._controlActive&&(n.deltaY*=10),n}}function Hy(i){this.enabled!==!1&&(this._pointers.length===0&&(this.domElement.setPointerCapture(i.pointerId),this.domElement.addEventListener("pointermove",this._onPointerMove),this.domElement.addEventListener("pointerup",this._onPointerUp)),!this._isTrackingPointer(i)&&(this._addPointer(i),i.pointerType==="touch"?this._onTouchStart(i):this._onMouseDown(i)))}function Gy(i){this.enabled!==!1&&(i.pointerType==="touch"?this._onTouchMove(i):this._onMouseMove(i))}function Vy(i){switch(this._removePointer(i),this._pointers.length){case 0:this.domElement.releasePointerCapture(i.pointerId),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp),this.dispatchEvent(Cf),this.state=ut.NONE;break;case 1:const e=this._pointers[0],t=this._pointerPositions[e];this._onTouchStart({pointerId:e,pageX:t.x,pageY:t.y});break}}function Wy(i){let e;switch(i.button){case 0:e=this.mouseButtons.LEFT;break;case 1:e=this.mouseButtons.MIDDLE;break;case 2:e=this.mouseButtons.RIGHT;break;default:e=-1}switch(e){case Zs.DOLLY:if(this.enableZoom===!1)return;this._handleMouseDownDolly(i),this.state=ut.DOLLY;break;case Zs.ROTATE:if(i.ctrlKey||i.metaKey||i.shiftKey){if(this.enablePan===!1)return;this._handleMouseDownPan(i),this.state=ut.PAN}else{if(this.enableRotate===!1)return;this._handleMouseDownRotate(i),this.state=ut.ROTATE}break;case Zs.PAN:if(i.ctrlKey||i.metaKey||i.shiftKey){if(this.enableRotate===!1)return;this._handleMouseDownRotate(i),this.state=ut.ROTATE}else{if(this.enablePan===!1)return;this._handleMouseDownPan(i),this.state=ut.PAN}break;default:this.state=ut.NONE}this.state!==ut.NONE&&this.dispatchEvent(du)}function Xy(i){switch(this.state){case ut.ROTATE:if(this.enableRotate===!1)return;this._handleMouseMoveRotate(i);break;case ut.DOLLY:if(this.enableZoom===!1)return;this._handleMouseMoveDolly(i);break;case ut.PAN:if(this.enablePan===!1)return;this._handleMouseMovePan(i);break}}function qy(i){this.enabled===!1||this.enableZoom===!1||this.state!==ut.NONE||(i.preventDefault(),this.dispatchEvent(du),this._handleMouseWheel(this._customWheelEvent(i)),this.dispatchEvent(Cf))}function jy(i){this.enabled!==!1&&this._handleKeyDown(i)}function Yy(i){switch(this._trackPointer(i),this._pointers.length){case 1:switch(this.touches.ONE){case Ws.ROTATE:if(this.enableRotate===!1)return;this._handleTouchStartRotate(i),this.state=ut.TOUCH_ROTATE;break;case Ws.PAN:if(this.enablePan===!1)return;this._handleTouchStartPan(i),this.state=ut.TOUCH_PAN;break;default:this.state=ut.NONE}break;case 2:switch(this.touches.TWO){case Ws.DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchStartDollyPan(i),this.state=ut.TOUCH_DOLLY_PAN;break;case Ws.DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchStartDollyRotate(i),this.state=ut.TOUCH_DOLLY_ROTATE;break;default:this.state=ut.NONE}break;default:this.state=ut.NONE}this.state!==ut.NONE&&this.dispatchEvent(du)}function $y(i){switch(this._trackPointer(i),this.state){case ut.TOUCH_ROTATE:if(this.enableRotate===!1)return;this._handleTouchMoveRotate(i),this.update();break;case ut.TOUCH_PAN:if(this.enablePan===!1)return;this._handleTouchMovePan(i),this.update();break;case ut.TOUCH_DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchMoveDollyPan(i),this.update();break;case ut.TOUCH_DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchMoveDollyRotate(i),this.update();break;default:this.state=ut.NONE}}function Ky(i){this.enabled!==!1&&i.preventDefault()}function Zy(i){i.key==="Control"&&(this._controlActive=!0,this.domElement.getRootNode().addEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}function Jy(i){i.key==="Control"&&(this._controlActive=!1,this.domElement.getRootNode().removeEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}const ts=new wf,jt=new b,Pi=new b,_t=new ft,th={X:new b(1,0,0),Y:new b(0,1,0),Z:new b(0,0,1)},Al={type:"change"},nh={type:"mouseDown",mode:null},ih={type:"mouseUp",mode:null},sh={type:"objectChange"};class Qy extends Sf{constructor(e,t=null){super(void 0,t);const n=new ow(this);this._root=n;const s=new rw;this._gizmo=s,n.add(s);const o=new aw;this._plane=o,n.add(o);const r=this;function a(y,x){let A=x;Object.defineProperty(r,y,{get:function(){return A!==void 0?A:x},set:function(T){A!==T&&(A=T,o[y]=T,s[y]=T,r.dispatchEvent({type:y+"-changed",value:T}),r.dispatchEvent(Al))}}),r[y]=x,o[y]=x,s[y]=x}a("camera",e),a("object",void 0),a("enabled",!0),a("axis",null),a("mode","translate"),a("translationSnap",null),a("rotationSnap",null),a("scaleSnap",null),a("space","world"),a("size",1),a("dragging",!1),a("showX",!0),a("showY",!0),a("showZ",!0),a("minX",-1/0),a("maxX",1/0),a("minY",-1/0),a("maxY",1/0),a("minZ",-1/0),a("maxZ",1/0);const l=new b,c=new b,u=new ft,d=new ft,h=new b,f=new ft,_=new b,g=new b,m=new b,p=0,w=new b;a("worldPosition",l),a("worldPositionStart",c),a("worldQuaternion",u),a("worldQuaternionStart",d),a("cameraPosition",h),a("cameraQuaternion",f),a("pointStart",_),a("pointEnd",g),a("rotationAxis",m),a("rotationAngle",p),a("eye",w),this._offset=new b,this._startNorm=new b,this._endNorm=new b,this._cameraScale=new b,this._parentPosition=new b,this._parentQuaternion=new ft,this._parentQuaternionInv=new ft,this._parentScale=new b,this._worldScaleStart=new b,this._worldQuaternionInv=new ft,this._worldScale=new b,this._positionStart=new b,this._quaternionStart=new ft,this._scaleStart=new b,this._getPointer=ew.bind(this),this._onPointerDown=nw.bind(this),this._onPointerHover=tw.bind(this),this._onPointerMove=iw.bind(this),this._onPointerUp=sw.bind(this),t!==null&&this.connect()}connect(){this.domElement.addEventListener("pointerdown",this._onPointerDown),this.domElement.addEventListener("pointermove",this._onPointerHover),this.domElement.addEventListener("pointerup",this._onPointerUp),this.domElement.style.touchAction="none"}disconnect(){this.domElement.removeEventListener("pointerdown",this._onPointerDown),this.domElement.removeEventListener("pointermove",this._onPointerHover),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp),this.domElement.style.touchAction="auto"}getHelper(){return this._root}pointerHover(e){if(this.object===void 0||this.dragging===!0)return;e!==null&&ts.setFromCamera(e,this.camera);const t=Cl(this._gizmo.picker[this.mode],ts);t?this.axis=t.object.name:this.axis=null}pointerDown(e){if(!(this.object===void 0||this.dragging===!0||e!=null&&e.button!==0)&&this.axis!==null){e!==null&&ts.setFromCamera(e,this.camera);const t=Cl(this._plane,ts,!0);t&&(this.object.updateMatrixWorld(),this.object.parent.updateMatrixWorld(),this._positionStart.copy(this.object.position),this._quaternionStart.copy(this.object.quaternion),this._scaleStart.copy(this.object.scale),this.object.matrixWorld.decompose(this.worldPositionStart,this.worldQuaternionStart,this._worldScaleStart),this.pointStart.copy(t.point).sub(this.worldPositionStart)),this.dragging=!0,nh.mode=this.mode,this.dispatchEvent(nh)}}pointerMove(e){const t=this.axis,n=this.mode,s=this.object;let o=this.space;if(n==="scale"?o="local":(t==="E"||t==="XYZE"||t==="XYZ")&&(o="world"),s===void 0||t===null||this.dragging===!1||e!==null&&e.button!==-1)return;e!==null&&ts.setFromCamera(e,this.camera);const r=Cl(this._plane,ts,!0);if(r){if(this.pointEnd.copy(r.point).sub(this.worldPositionStart),n==="translate")this._offset.copy(this.pointEnd).sub(this.pointStart),o==="local"&&t!=="XYZ"&&this._offset.applyQuaternion(this._worldQuaternionInv),t.indexOf("X")===-1&&(this._offset.x=0),t.indexOf("Y")===-1&&(this._offset.y=0),t.indexOf("Z")===-1&&(this._offset.z=0),o==="local"&&t!=="XYZ"?this._offset.applyQuaternion(this._quaternionStart).divide(this._parentScale):this._offset.applyQuaternion(this._parentQuaternionInv).divide(this._parentScale),s.position.copy(this._offset).add(this._positionStart),this.translationSnap&&(o==="local"&&(s.position.applyQuaternion(_t.copy(this._quaternionStart).invert()),t.search("X")!==-1&&(s.position.x=Math.round(s.position.x/this.translationSnap)*this.translationSnap),t.search("Y")!==-1&&(s.position.y=Math.round(s.position.y/this.translationSnap)*this.translationSnap),t.search("Z")!==-1&&(s.position.z=Math.round(s.position.z/this.translationSnap)*this.translationSnap),s.position.applyQuaternion(this._quaternionStart)),o==="world"&&(s.parent&&s.position.add(jt.setFromMatrixPosition(s.parent.matrixWorld)),t.search("X")!==-1&&(s.position.x=Math.round(s.position.x/this.translationSnap)*this.translationSnap),t.search("Y")!==-1&&(s.position.y=Math.round(s.position.y/this.translationSnap)*this.translationSnap),t.search("Z")!==-1&&(s.position.z=Math.round(s.position.z/this.translationSnap)*this.translationSnap),s.parent&&s.position.sub(jt.setFromMatrixPosition(s.parent.matrixWorld)))),s.position.x=Math.max(this.minX,Math.min(this.maxX,s.position.x)),s.position.y=Math.max(this.minY,Math.min(this.maxY,s.position.y)),s.position.z=Math.max(this.minZ,Math.min(this.maxZ,s.position.z));else if(n==="scale"){if(t.search("XYZ")!==-1){let a=this.pointEnd.length()/this.pointStart.length();this.pointEnd.dot(this.pointStart)<0&&(a*=-1),Pi.set(a,a,a)}else jt.copy(this.pointStart),Pi.copy(this.pointEnd),jt.applyQuaternion(this._worldQuaternionInv),Pi.applyQuaternion(this._worldQuaternionInv),Pi.divide(jt),t.search("X")===-1&&(Pi.x=1),t.search("Y")===-1&&(Pi.y=1),t.search("Z")===-1&&(Pi.z=1);s.scale.copy(this._scaleStart).multiply(Pi),this.scaleSnap&&(t.search("X")!==-1&&(s.scale.x=Math.round(s.scale.x/this.scaleSnap)*this.scaleSnap||this.scaleSnap),t.search("Y")!==-1&&(s.scale.y=Math.round(s.scale.y/this.scaleSnap)*this.scaleSnap||this.scaleSnap),t.search("Z")!==-1&&(s.scale.z=Math.round(s.scale.z/this.scaleSnap)*this.scaleSnap||this.scaleSnap))}else if(n==="rotate"){this._offset.copy(this.pointEnd).sub(this.pointStart);const a=20/this.worldPosition.distanceTo(jt.setFromMatrixPosition(this.camera.matrixWorld));let l=!1;t==="XYZE"?(this.rotationAxis.copy(this._offset).cross(this.eye).normalize(),this.rotationAngle=this._offset.dot(jt.copy(this.rotationAxis).cross(this.eye))*a):(t==="X"||t==="Y"||t==="Z")&&(this.rotationAxis.copy(th[t]),jt.copy(th[t]),o==="local"&&jt.applyQuaternion(this.worldQuaternion),jt.cross(this.eye),jt.length()===0?l=!0:this.rotationAngle=this._offset.dot(jt.normalize())*a),(t==="E"||l)&&(this.rotationAxis.copy(this.eye),this.rotationAngle=this.pointEnd.angleTo(this.pointStart),this._startNorm.copy(this.pointStart).normalize(),this._endNorm.copy(this.pointEnd).normalize(),this.rotationAngle*=this._endNorm.cross(this._startNorm).dot(this.eye)<0?1:-1),this.rotationSnap&&(this.rotationAngle=Math.round(this.rotationAngle/this.rotationSnap)*this.rotationSnap),o==="local"&&t!=="E"&&t!=="XYZE"?(s.quaternion.copy(this._quaternionStart),s.quaternion.multiply(_t.setFromAxisAngle(this.rotationAxis,this.rotationAngle)).normalize()):(this.rotationAxis.applyQuaternion(this._parentQuaternionInv),s.quaternion.copy(_t.setFromAxisAngle(this.rotationAxis,this.rotationAngle)),s.quaternion.multiply(this._quaternionStart).normalize())}this.dispatchEvent(Al),this.dispatchEvent(sh)}}pointerUp(e){e!==null&&e.button!==0||(this.dragging&&this.axis!==null&&(ih.mode=this.mode,this.dispatchEvent(ih)),this.dragging=!1,this.axis=null)}dispose(){this.disconnect(),this._root.dispose()}attach(e){return this.object=e,this._root.visible=!0,this}detach(){return this.object=void 0,this.axis=null,this._root.visible=!1,this}reset(){this.enabled&&this.dragging&&(this.object.position.copy(this._positionStart),this.object.quaternion.copy(this._quaternionStart),this.object.scale.copy(this._scaleStart),this.dispatchEvent(Al),this.dispatchEvent(sh),this.pointStart.copy(this.pointEnd))}getRaycaster(){return ts}getMode(){return this.mode}setMode(e){this.mode=e}setTranslationSnap(e){this.translationSnap=e}setRotationSnap(e){this.rotationSnap=e}setScaleSnap(e){this.scaleSnap=e}setSize(e){this.size=e}setSpace(e){this.space=e}}function ew(i){if(this.domElement.ownerDocument.pointerLockElement)return{x:0,y:0,button:i.button};{const e=this.domElement.getBoundingClientRect();return{x:(i.clientX-e.left)/e.width*2-1,y:-(i.clientY-e.top)/e.height*2+1,button:i.button}}}function tw(i){if(this.enabled)switch(i.pointerType){case"mouse":case"pen":this.pointerHover(this._getPointer(i));break}}function nw(i){this.enabled&&(document.pointerLockElement||this.domElement.setPointerCapture(i.pointerId),this.domElement.addEventListener("pointermove",this._onPointerMove),this.pointerHover(this._getPointer(i)),this.pointerDown(this._getPointer(i)))}function iw(i){this.enabled&&this.pointerMove(this._getPointer(i))}function sw(i){this.enabled&&(this.domElement.releasePointerCapture(i.pointerId),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.pointerUp(this._getPointer(i)))}function Cl(i,e,t){const n=e.intersectObject(i,!0);for(let s=0;s<n.length;s++)if(n[s].object.visible||t)return n[s];return!1}const Jr=new Bt,dt=new b(0,1,0),oh=new b(0,0,0),rh=new Le,Qr=new ft,wa=new ft,Kn=new b,ah=new Le,Wo=new b(1,0,0),as=new b(0,1,0),Xo=new b(0,0,1),ea=new b,Uo=new b,Fo=new b;class ow extends pt{constructor(e){super(),this.isTransformControlsRoot=!0,this.controls=e,this.visible=!1}updateMatrixWorld(e){const t=this.controls;t.object!==void 0&&(t.object.updateMatrixWorld(),t.object.parent===null?console.error("TransformControls: The attached 3D object must be a part of the scene graph."):t.object.parent.matrixWorld.decompose(t._parentPosition,t._parentQuaternion,t._parentScale),t.object.matrixWorld.decompose(t.worldPosition,t.worldQuaternion,t._worldScale),t._parentQuaternionInv.copy(t._parentQuaternion).invert(),t._worldQuaternionInv.copy(t.worldQuaternion).invert()),t.camera.updateMatrixWorld(),t.camera.matrixWorld.decompose(t.cameraPosition,t.cameraQuaternion,t._cameraScale),t.camera.isOrthographicCamera?t.camera.getWorldDirection(t.eye).negate():t.eye.copy(t.cameraPosition).sub(t.worldPosition).normalize(),super.updateMatrixWorld(e)}dispose(){this.traverse(function(e){e.geometry&&e.geometry.dispose(),e.material&&e.material.dispose()})}}class rw extends pt{constructor(){super(),this.isTransformControlsGizmo=!0,this.type="TransformControlsGizmo";const e=new ti({depthTest:!1,depthWrite:!1,fog:!1,toneMapped:!1,transparent:!0}),t=new ms({depthTest:!1,depthWrite:!1,fog:!1,toneMapped:!1,transparent:!0}),n=e.clone();n.opacity=.15;const s=t.clone();s.opacity=.5;const o=e.clone();o.color.setHex(16711680);const r=e.clone();r.color.setHex(65280);const a=e.clone();a.color.setHex(255);const l=e.clone();l.color.setHex(16711680),l.opacity=.5;const c=e.clone();c.color.setHex(65280),c.opacity=.5;const u=e.clone();u.color.setHex(255),u.opacity=.5;const d=e.clone();d.opacity=.25;const h=e.clone();h.color.setHex(16776960),h.opacity=.25,e.clone().color.setHex(16776960);const _=e.clone();_.color.setHex(7895160);const g=new qt(0,.04,.1,12);g.translate(0,.05,0);const m=new Mt(.08,.08,.08);m.translate(0,.04,0);const p=new vt;p.setAttribute("position",new Ye([0,0,0,1,0,0],3));const w=new qt(.0075,.0075,.5,3);w.translate(0,.25,0);function y(D,I){const G=new us(D,.0075,3,64,I*Math.PI*2);return G.rotateY(Math.PI/2),G.rotateX(Math.PI/2),G}function x(){const D=new vt;return D.setAttribute("position",new Ye([0,0,0,1,1,1],3)),D}const A={X:[[new re(g,o),[.5,0,0],[0,0,-Math.PI/2]],[new re(g,o),[-.5,0,0],[0,0,Math.PI/2]],[new re(w,o),[0,0,0],[0,0,-Math.PI/2]]],Y:[[new re(g,r),[0,.5,0]],[new re(g,r),[0,-.5,0],[Math.PI,0,0]],[new re(w,r)]],Z:[[new re(g,a),[0,0,.5],[Math.PI/2,0,0]],[new re(g,a),[0,0,-.5],[-Math.PI/2,0,0]],[new re(w,a),null,[Math.PI/2,0,0]]],XYZ:[[new re(new qs(.1,0),d.clone()),[0,0,0]]],XY:[[new re(new Mt(.15,.15,.01),u.clone()),[.15,.15,0]]],YZ:[[new re(new Mt(.15,.15,.01),l.clone()),[0,.15,.15],[0,Math.PI/2,0]]],XZ:[[new re(new Mt(.15,.15,.01),c.clone()),[.15,0,.15],[-Math.PI/2,0,0]]]},T={X:[[new re(new qt(.2,0,.6,4),n),[.3,0,0],[0,0,-Math.PI/2]],[new re(new qt(.2,0,.6,4),n),[-.3,0,0],[0,0,Math.PI/2]]],Y:[[new re(new qt(.2,0,.6,4),n),[0,.3,0]],[new re(new qt(.2,0,.6,4),n),[0,-.3,0],[0,0,Math.PI]]],Z:[[new re(new qt(.2,0,.6,4),n),[0,0,.3],[Math.PI/2,0,0]],[new re(new qt(.2,0,.6,4),n),[0,0,-.3],[-Math.PI/2,0,0]]],XYZ:[[new re(new qs(.2,0),n)]],XY:[[new re(new Mt(.2,.2,.01),n),[.15,.15,0]]],YZ:[[new re(new Mt(.2,.2,.01),n),[0,.15,.15],[0,Math.PI/2,0]]],XZ:[[new re(new Mt(.2,.2,.01),n),[.15,0,.15],[-Math.PI/2,0,0]]]},P={START:[[new re(new qs(.01,2),s),null,null,null,"helper"]],END:[[new re(new qs(.01,2),s),null,null,null,"helper"]],DELTA:[[new Vn(x(),s),null,null,null,"helper"]],X:[[new Vn(p,s.clone()),[-1e3,0,0],null,[1e6,1,1],"helper"]],Y:[[new Vn(p,s.clone()),[0,-1e3,0],[0,0,Math.PI/2],[1e6,1,1],"helper"]],Z:[[new Vn(p,s.clone()),[0,0,-1e3],[0,-Math.PI/2,0],[1e6,1,1],"helper"]]},L={XYZE:[[new re(y(.5,1),_),null,[0,Math.PI/2,0]]],X:[[new re(y(.5,.5),o)]],Y:[[new re(y(.5,.5),r),null,[0,0,-Math.PI/2]]],Z:[[new re(y(.5,.5),a),null,[0,Math.PI/2,0]]],E:[[new re(y(.75,1),h),null,[0,Math.PI/2,0]]]},M={AXIS:[[new Vn(p,s.clone()),[-1e3,0,0],null,[1e6,1,1],"helper"]]},v={XYZE:[[new re(new Xi(.25,10,8),n)]],X:[[new re(new us(.5,.1,4,24),n),[0,0,0],[0,-Math.PI/2,-Math.PI/2]]],Y:[[new re(new us(.5,.1,4,24),n),[0,0,0],[Math.PI/2,0,0]]],Z:[[new re(new us(.5,.1,4,24),n),[0,0,0],[0,0,-Math.PI/2]]],E:[[new re(new us(.75,.1,2,24),n)]]},C={X:[[new re(m,o),[.5,0,0],[0,0,-Math.PI/2]],[new re(w,o),[0,0,0],[0,0,-Math.PI/2]],[new re(m,o),[-.5,0,0],[0,0,Math.PI/2]]],Y:[[new re(m,r),[0,.5,0]],[new re(w,r)],[new re(m,r),[0,-.5,0],[0,0,Math.PI]]],Z:[[new re(m,a),[0,0,.5],[Math.PI/2,0,0]],[new re(w,a),[0,0,0],[Math.PI/2,0,0]],[new re(m,a),[0,0,-.5],[-Math.PI/2,0,0]]],XY:[[new re(new Mt(.15,.15,.01),u),[.15,.15,0]]],YZ:[[new re(new Mt(.15,.15,.01),l),[0,.15,.15],[0,Math.PI/2,0]]],XZ:[[new re(new Mt(.15,.15,.01),c),[.15,0,.15],[-Math.PI/2,0,0]]],XYZ:[[new re(new Mt(.1,.1,.1),d.clone())]]},N={X:[[new re(new qt(.2,0,.6,4),n),[.3,0,0],[0,0,-Math.PI/2]],[new re(new qt(.2,0,.6,4),n),[-.3,0,0],[0,0,Math.PI/2]]],Y:[[new re(new qt(.2,0,.6,4),n),[0,.3,0]],[new re(new qt(.2,0,.6,4),n),[0,-.3,0],[0,0,Math.PI]]],Z:[[new re(new qt(.2,0,.6,4),n),[0,0,.3],[Math.PI/2,0,0]],[new re(new qt(.2,0,.6,4),n),[0,0,-.3],[-Math.PI/2,0,0]]],XY:[[new re(new Mt(.2,.2,.01),n),[.15,.15,0]]],YZ:[[new re(new Mt(.2,.2,.01),n),[0,.15,.15],[0,Math.PI/2,0]]],XZ:[[new re(new Mt(.2,.2,.01),n),[.15,0,.15],[-Math.PI/2,0,0]]],XYZ:[[new re(new Mt(.2,.2,.2),n),[0,0,0]]]},O={X:[[new Vn(p,s.clone()),[-1e3,0,0],null,[1e6,1,1],"helper"]],Y:[[new Vn(p,s.clone()),[0,-1e3,0],[0,0,Math.PI/2],[1e6,1,1],"helper"]],Z:[[new Vn(p,s.clone()),[0,0,-1e3],[0,-Math.PI/2,0],[1e6,1,1],"helper"]]};function z(D){const I=new pt;for(const G in D)for(let F=D[G].length;F--;){const W=D[G][F][0].clone(),j=D[G][F][1],ee=D[G][F][2],ce=D[G][F][3],Re=D[G][F][4];W.name=G,W.tag=Re,j&&W.position.set(j[0],j[1],j[2]),ee&&W.rotation.set(ee[0],ee[1],ee[2]),ce&&W.scale.set(ce[0],ce[1],ce[2]),W.updateMatrix();const $=W.geometry.clone();$.applyMatrix4(W.matrix),W.geometry=$,W.renderOrder=1/0,W.position.set(0,0,0),W.rotation.set(0,0,0),W.scale.set(1,1,1),I.add(W)}return I}this.gizmo={},this.picker={},this.helper={},this.add(this.gizmo.translate=z(A)),this.add(this.gizmo.rotate=z(L)),this.add(this.gizmo.scale=z(C)),this.add(this.picker.translate=z(T)),this.add(this.picker.rotate=z(v)),this.add(this.picker.scale=z(N)),this.add(this.helper.translate=z(P)),this.add(this.helper.rotate=z(M)),this.add(this.helper.scale=z(O)),this.picker.translate.visible=!1,this.picker.rotate.visible=!1,this.picker.scale.visible=!1}updateMatrixWorld(e){const n=(this.mode==="scale"?"local":this.space)==="local"?this.worldQuaternion:wa;this.gizmo.translate.visible=this.mode==="translate",this.gizmo.rotate.visible=this.mode==="rotate",this.gizmo.scale.visible=this.mode==="scale",this.helper.translate.visible=this.mode==="translate",this.helper.rotate.visible=this.mode==="rotate",this.helper.scale.visible=this.mode==="scale";let s=[];s=s.concat(this.picker[this.mode].children),s=s.concat(this.gizmo[this.mode].children),s=s.concat(this.helper[this.mode].children);for(let o=0;o<s.length;o++){const r=s[o];r.visible=!0,r.rotation.set(0,0,0),r.position.copy(this.worldPosition);let a;if(this.camera.isOrthographicCamera?a=(this.camera.top-this.camera.bottom)/this.camera.zoom:a=this.worldPosition.distanceTo(this.cameraPosition)*Math.min(1.9*Math.tan(Math.PI*this.camera.fov/360)/this.camera.zoom,7),r.scale.set(1,1,1).multiplyScalar(a*this.size/4),r.tag==="helper"){r.visible=!1,r.name==="AXIS"?(r.visible=!!this.axis,this.axis==="X"&&(_t.setFromEuler(Jr.set(0,0,0)),r.quaternion.copy(n).multiply(_t),Math.abs(dt.copy(Wo).applyQuaternion(n).dot(this.eye))>.9&&(r.visible=!1)),this.axis==="Y"&&(_t.setFromEuler(Jr.set(0,0,Math.PI/2)),r.quaternion.copy(n).multiply(_t),Math.abs(dt.copy(as).applyQuaternion(n).dot(this.eye))>.9&&(r.visible=!1)),this.axis==="Z"&&(_t.setFromEuler(Jr.set(0,Math.PI/2,0)),r.quaternion.copy(n).multiply(_t),Math.abs(dt.copy(Xo).applyQuaternion(n).dot(this.eye))>.9&&(r.visible=!1)),this.axis==="XYZE"&&(_t.setFromEuler(Jr.set(0,Math.PI/2,0)),dt.copy(this.rotationAxis),r.quaternion.setFromRotationMatrix(rh.lookAt(oh,dt,as)),r.quaternion.multiply(_t),r.visible=this.dragging),this.axis==="E"&&(r.visible=!1)):r.name==="START"?(r.position.copy(this.worldPositionStart),r.visible=this.dragging):r.name==="END"?(r.position.copy(this.worldPosition),r.visible=this.dragging):r.name==="DELTA"?(r.position.copy(this.worldPositionStart),r.quaternion.copy(this.worldQuaternionStart),jt.set(1e-10,1e-10,1e-10).add(this.worldPositionStart).sub(this.worldPosition).multiplyScalar(-1),jt.applyQuaternion(this.worldQuaternionStart.clone().invert()),r.scale.copy(jt),r.visible=this.dragging):(r.quaternion.copy(n),this.dragging?r.position.copy(this.worldPositionStart):r.position.copy(this.worldPosition),this.axis&&(r.visible=this.axis.search(r.name)!==-1));continue}r.quaternion.copy(n),this.mode==="translate"||this.mode==="scale"?(r.name==="X"&&Math.abs(dt.copy(Wo).applyQuaternion(n).dot(this.eye))>.99&&(r.scale.set(1e-10,1e-10,1e-10),r.visible=!1),r.name==="Y"&&Math.abs(dt.copy(as).applyQuaternion(n).dot(this.eye))>.99&&(r.scale.set(1e-10,1e-10,1e-10),r.visible=!1),r.name==="Z"&&Math.abs(dt.copy(Xo).applyQuaternion(n).dot(this.eye))>.99&&(r.scale.set(1e-10,1e-10,1e-10),r.visible=!1),r.name==="XY"&&Math.abs(dt.copy(Xo).applyQuaternion(n).dot(this.eye))<.2&&(r.scale.set(1e-10,1e-10,1e-10),r.visible=!1),r.name==="YZ"&&Math.abs(dt.copy(Wo).applyQuaternion(n).dot(this.eye))<.2&&(r.scale.set(1e-10,1e-10,1e-10),r.visible=!1),r.name==="XZ"&&Math.abs(dt.copy(as).applyQuaternion(n).dot(this.eye))<.2&&(r.scale.set(1e-10,1e-10,1e-10),r.visible=!1)):this.mode==="rotate"&&(Qr.copy(n),dt.copy(this.eye).applyQuaternion(_t.copy(n).invert()),r.name.search("E")!==-1&&r.quaternion.setFromRotationMatrix(rh.lookAt(this.eye,oh,as)),r.name==="X"&&(_t.setFromAxisAngle(Wo,Math.atan2(-dt.y,dt.z)),_t.multiplyQuaternions(Qr,_t),r.quaternion.copy(_t)),r.name==="Y"&&(_t.setFromAxisAngle(as,Math.atan2(dt.x,dt.z)),_t.multiplyQuaternions(Qr,_t),r.quaternion.copy(_t)),r.name==="Z"&&(_t.setFromAxisAngle(Xo,Math.atan2(dt.y,dt.x)),_t.multiplyQuaternions(Qr,_t),r.quaternion.copy(_t))),r.visible=r.visible&&(r.name.indexOf("X")===-1||this.showX),r.visible=r.visible&&(r.name.indexOf("Y")===-1||this.showY),r.visible=r.visible&&(r.name.indexOf("Z")===-1||this.showZ),r.visible=r.visible&&(r.name.indexOf("E")===-1||this.showX&&this.showY&&this.showZ),r.material._color=r.material._color||r.material.color.clone(),r.material._opacity=r.material._opacity||r.material.opacity,r.material.color.copy(r.material._color),r.material.opacity=r.material._opacity,this.enabled&&this.axis&&(r.name===this.axis||this.axis.split("").some(function(l){return r.name===l}))&&(r.material.color.setHex(16776960),r.material.opacity=1)}super.updateMatrixWorld(e)}}class aw extends re{constructor(){super(new xs(1e5,1e5,2,2),new ti({visible:!1,wireframe:!0,side:pn,transparent:!0,opacity:.1,toneMapped:!1})),this.isTransformControlsPlane=!0,this.type="TransformControlsPlane"}updateMatrixWorld(e){let t=this.space;switch(this.position.copy(this.worldPosition),this.mode==="scale"&&(t="local"),ea.copy(Wo).applyQuaternion(t==="local"?this.worldQuaternion:wa),Uo.copy(as).applyQuaternion(t==="local"?this.worldQuaternion:wa),Fo.copy(Xo).applyQuaternion(t==="local"?this.worldQuaternion:wa),dt.copy(Uo),this.mode){case"translate":case"scale":switch(this.axis){case"X":dt.copy(this.eye).cross(ea),Kn.copy(ea).cross(dt);break;case"Y":dt.copy(this.eye).cross(Uo),Kn.copy(Uo).cross(dt);break;case"Z":dt.copy(this.eye).cross(Fo),Kn.copy(Fo).cross(dt);break;case"XY":Kn.copy(Fo);break;case"YZ":Kn.copy(ea);break;case"XZ":dt.copy(Fo),Kn.copy(Uo);break;case"XYZ":case"E":Kn.set(0,0,0);break}break;case"rotate":default:Kn.set(0,0,0)}Kn.length()===0?this.quaternion.copy(this.cameraQuaternion):(ah.lookAt(jt.set(0,0,0),Kn,dt),this.quaternion.setFromRotationMatrix(ah)),super.updateMatrixWorld(e)}}const lh=new On,ta=new b;class To extends Hg{constructor(){super(),this.isLineSegmentsGeometry=!0,this.type="LineSegmentsGeometry";const e=[-1,2,0,1,2,0,-1,1,0,1,1,0,-1,0,0,1,0,0,-1,-1,0,1,-1,0],t=[-1,2,1,2,-1,1,1,1,-1,-1,1,-1,-1,-2,1,-2],n=[0,2,1,2,3,1,2,4,3,4,5,3,4,6,5,6,7,5];this.setIndex(n),this.setAttribute("position",new Ye(e,3)),this.setAttribute("uv",new Ye(t,2))}applyMatrix4(e){const t=this.attributes.instanceStart,n=this.attributes.instanceEnd;return t!==void 0&&(t.applyMatrix4(e),n.applyMatrix4(e),t.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}setPositions(e){let t;e instanceof Float32Array?t=e:Array.isArray(e)&&(t=new Float32Array(e));const n=new no(t,6,1);return this.setAttribute("instanceStart",new In(n,3,0)),this.setAttribute("instanceEnd",new In(n,3,3)),this.instanceCount=this.attributes.instanceStart.count,this.computeBoundingBox(),this.computeBoundingSphere(),this}setColors(e){let t;e instanceof Float32Array?t=e:Array.isArray(e)&&(t=new Float32Array(e));const n=new no(t,6,1);return this.setAttribute("instanceColorStart",new In(n,3,0)),this.setAttribute("instanceColorEnd",new In(n,3,3)),this}fromWireframeGeometry(e){return this.setPositions(e.attributes.position.array),this}fromEdgesGeometry(e){return this.setPositions(e.attributes.position.array),this}fromMesh(e){return this.fromWireframeGeometry(new _g(e.geometry)),this}fromLineSegments(e){const t=e.geometry;return this.setPositions(t.attributes.position.array),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new On);const e=this.attributes.instanceStart,t=this.attributes.instanceEnd;e!==void 0&&t!==void 0&&(this.boundingBox.setFromBufferAttribute(e),lh.setFromBufferAttribute(t),this.boundingBox.union(lh))}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Un),this.boundingBox===null&&this.computeBoundingBox();const e=this.attributes.instanceStart,t=this.attributes.instanceEnd;if(e!==void 0&&t!==void 0){const n=this.boundingSphere.center;this.boundingBox.getCenter(n);let s=0;for(let o=0,r=e.count;o<r;o++)ta.fromBufferAttribute(e,o),s=Math.max(s,n.distanceToSquared(ta)),ta.fromBufferAttribute(t,o),s=Math.max(s,n.distanceToSquared(ta));this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&console.error("THREE.LineSegmentsGeometry.computeBoundingSphere(): Computed radius is NaN. The instanced position data is likely to have NaN values.",this)}}toJSON(){}applyMatrix(e){return console.warn("THREE.LineSegmentsGeometry: applyMatrix() has been renamed to applyMatrix4()."),this.applyMatrix4(e)}}const lw=Object.freeze(Object.defineProperty({__proto__:null,LineSegmentsGeometry:To},Symbol.toStringTag,{value:"Module"}));ae.line={worldUnits:{value:1},linewidth:{value:1},resolution:{value:new ge(1,1)},dashOffset:{value:0},dashScale:{value:1},dashSize:{value:1},gapSize:{value:1}};fn.line={uniforms:Ms.merge([ae.common,ae.fog,ae.line]),vertexShader:`
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
		`};class Si extends Et{constructor(e){super({type:"LineMaterial",uniforms:Ms.clone(fn.line.uniforms),vertexShader:fn.line.vertexShader,fragmentShader:fn.line.fragmentShader,clipping:!0}),this.isLineMaterial=!0,this.setValues(e)}get color(){return this.uniforms.diffuse.value}set color(e){this.uniforms.diffuse.value=e}get worldUnits(){return"WORLD_UNITS"in this.defines}set worldUnits(e){e===!0?this.defines.WORLD_UNITS="":delete this.defines.WORLD_UNITS}get linewidth(){return this.uniforms.linewidth.value}set linewidth(e){this.uniforms.linewidth&&(this.uniforms.linewidth.value=e)}get dashed(){return"USE_DASH"in this.defines}set dashed(e){e===!0!==this.dashed&&(this.needsUpdate=!0),e===!0?this.defines.USE_DASH="":delete this.defines.USE_DASH}get dashScale(){return this.uniforms.dashScale.value}set dashScale(e){this.uniforms.dashScale.value=e}get dashSize(){return this.uniforms.dashSize.value}set dashSize(e){this.uniforms.dashSize.value=e}get dashOffset(){return this.uniforms.dashOffset.value}set dashOffset(e){this.uniforms.dashOffset.value=e}get gapSize(){return this.uniforms.gapSize.value}set gapSize(e){this.uniforms.gapSize.value=e}get opacity(){return this.uniforms.opacity.value}set opacity(e){this.uniforms&&(this.uniforms.opacity.value=e)}get resolution(){return this.uniforms.resolution.value}set resolution(e){this.uniforms.resolution.value.copy(e)}get alphaToCoverage(){return"USE_ALPHA_TO_COVERAGE"in this.defines}set alphaToCoverage(e){this.defines&&(e===!0!==this.alphaToCoverage&&(this.needsUpdate=!0),e===!0?this.defines.USE_ALPHA_TO_COVERAGE="":delete this.defines.USE_ALPHA_TO_COVERAGE)}}const Rl=new We,ch=new b,uh=new b,kt=new We,Ht=new We,Zn=new We,Pl=new b,Dl=new Le,Gt=new e0,dh=new b,na=new On,ia=new Un,Jn=new We;let Qn,gs;function hh(i,e,t){return Jn.set(0,0,-e,1).applyMatrix4(i.projectionMatrix),Jn.multiplyScalar(1/Jn.w),Jn.x=gs/t.width,Jn.y=gs/t.height,Jn.applyMatrix4(i.projectionMatrixInverse),Jn.multiplyScalar(1/Jn.w),Math.abs(Math.max(Jn.x,Jn.y))}function cw(i,e){const t=i.matrixWorld,n=i.geometry,s=n.attributes.instanceStart,o=n.attributes.instanceEnd,r=Math.min(n.instanceCount,s.count);for(let a=0,l=r;a<l;a++){Gt.start.fromBufferAttribute(s,a),Gt.end.fromBufferAttribute(o,a),Gt.applyMatrix4(t);const c=new b,u=new b;Qn.distanceSqToSegment(Gt.start,Gt.end,u,c),u.distanceTo(c)<gs*.5&&e.push({point:u,pointOnLine:c,distance:Qn.origin.distanceTo(u),object:i,face:null,faceIndex:a,uv:null,uv1:null})}}function uw(i,e,t){const n=e.projectionMatrix,o=i.material.resolution,r=i.matrixWorld,a=i.geometry,l=a.attributes.instanceStart,c=a.attributes.instanceEnd,u=Math.min(a.instanceCount,l.count),d=-e.near;Qn.at(1,Zn),Zn.w=1,Zn.applyMatrix4(e.matrixWorldInverse),Zn.applyMatrix4(n),Zn.multiplyScalar(1/Zn.w),Zn.x*=o.x/2,Zn.y*=o.y/2,Zn.z=0,Pl.copy(Zn),Dl.multiplyMatrices(e.matrixWorldInverse,r);for(let h=0,f=u;h<f;h++){if(kt.fromBufferAttribute(l,h),Ht.fromBufferAttribute(c,h),kt.w=1,Ht.w=1,kt.applyMatrix4(Dl),Ht.applyMatrix4(Dl),kt.z>d&&Ht.z>d)continue;if(kt.z>d){const y=kt.z-Ht.z,x=(kt.z-d)/y;kt.lerp(Ht,x)}else if(Ht.z>d){const y=Ht.z-kt.z,x=(Ht.z-d)/y;Ht.lerp(kt,x)}kt.applyMatrix4(n),Ht.applyMatrix4(n),kt.multiplyScalar(1/kt.w),Ht.multiplyScalar(1/Ht.w),kt.x*=o.x/2,kt.y*=o.y/2,Ht.x*=o.x/2,Ht.y*=o.y/2,Gt.start.copy(kt),Gt.start.z=0,Gt.end.copy(Ht),Gt.end.z=0;const g=Gt.closestPointToPointParameter(Pl,!0);Gt.at(g,dh);const m=_i.lerp(kt.z,Ht.z,g),p=m>=-1&&m<=1,w=Pl.distanceTo(dh)<gs*.5;if(p&&w){Gt.start.fromBufferAttribute(l,h),Gt.end.fromBufferAttribute(c,h),Gt.start.applyMatrix4(r),Gt.end.applyMatrix4(r);const y=new b,x=new b;Qn.distanceSqToSegment(Gt.start,Gt.end,x,y),t.push({point:x,pointOnLine:y,distance:Qn.origin.distanceTo(x),object:i,face:null,faceIndex:h,uv:null,uv1:null})}}}class rr extends re{constructor(e=new To,t=new Si({color:Math.random()*16777215})){super(e,t),this.isLineSegments2=!0,this.type="LineSegments2"}computeLineDistances(){const e=this.geometry,t=e.attributes.instanceStart,n=e.attributes.instanceEnd,s=new Float32Array(2*t.count);for(let r=0,a=0,l=t.count;r<l;r++,a+=2)ch.fromBufferAttribute(t,r),uh.fromBufferAttribute(n,r),s[a]=a===0?0:s[a-1],s[a+1]=s[a]+ch.distanceTo(uh);const o=new no(s,2,1);return e.setAttribute("instanceDistanceStart",new In(o,1,0)),e.setAttribute("instanceDistanceEnd",new In(o,1,1)),this}raycast(e,t){const n=this.material.worldUnits,s=e.camera;s===null&&!n&&console.error('LineSegments2: "Raycaster.camera" needs to be set in order to raycast against LineSegments2 while worldUnits is set to false.');const o=e.params.Line2!==void 0&&e.params.Line2.threshold||0;Qn=e.ray;const r=this.matrixWorld,a=this.geometry,l=this.material;gs=l.linewidth+o,a.boundingSphere===null&&a.computeBoundingSphere(),ia.copy(a.boundingSphere).applyMatrix4(r);let c;if(n)c=gs*.5;else{const d=Math.max(s.near,ia.distanceToPoint(Qn.origin));c=hh(s,d,l.resolution)}if(ia.radius+=c,Qn.intersectsSphere(ia)===!1)return;a.boundingBox===null&&a.computeBoundingBox(),na.copy(a.boundingBox).applyMatrix4(r);let u;if(n)u=gs*.5;else{const d=Math.max(s.near,na.distanceToPoint(Qn.origin));u=hh(s,d,l.resolution)}na.expandByScalar(u),Qn.intersectsBox(na)!==!1&&(n?cw(this,t):uw(this,s,t))}onBeforeRender(e){const t=this.material.uniforms;t&&t.resolution&&(e.getViewport(Rl),this.material.uniforms.resolution.value.set(Rl.z,Rl.w))}}const dw=Object.freeze(Object.defineProperty({__proto__:null,LineSegments2:rr},Symbol.toStringTag,{value:"Module"}));new vg({transparent:!1,depthTest:!0,wireframe:!1,opacity:.8});new So({color:new oe(15883520),transparent:!0,depthTest:!0,wireframe:!1,opacity:.3});new _f({color:new oe("orange"),shininess:100,emissive:0,specular:1118481,transparent:!1,wireframe:!1,opacity:.5});new yg({color:"yellow",linewidth:1,scale:1,dashSize:.2,gapSize:.1});let ar=new Si({color:14406495,linewidth:.025,dashed:!0,dashSize:.07,gapSize:.04,worldUnits:!0,alphaToCoverage:!0}),lr=new Si({color:12603197,linewidth:.025,dashed:!0,dashSize:.07,gapSize:.04,worldUnits:!0,alphaToCoverage:!0}),cr=new Si({color:8159442,linewidth:.025,dashed:!0,dashSize:.07,gapSize:.04,worldUnits:!0,alphaToCoverage:!0}),ur=new Si({color:4626323,linewidth:.025,dashed:!0,dashSize:.07,gapSize:.04,worldUnits:!0,alphaToCoverage:!0}),fh=new Si({color:"black",linewidth:.012,worldUnits:!0,alphaToCoverage:!0,visible:!1});new Et({uniforms:{lightDirection:{value:new b(1,1,1).normalize()},coolColor:{value:new oe(11393254)},warmColor:{value:new oe(16740193)},surfaceColor:{value:new oe(16777215)}},vertexShader:`
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
    `});let dn=new Et({uniforms:{lightDirection:{value:new b(1,1,1).normalize()},coolColor:{value:new oe(30719)},warmColor:{value:new oe(16755200)},surfaceColor:{value:new oe(16777215)},opacity:{value:0}},transparent:!0,vertexShader:`
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
    `}),pi=new Et({uniforms:{lightDirection:{value:new b(1,1,1).normalize()},coolColor:{value:new oe(2696480)},warmColor:{value:new oe(16316145)},surfaceColor:{value:new oe(16777215)}},vertexShader:`
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
    `}),jn=new Et({uniforms:{lightDirection:{value:new b(1,1,1).normalize()},coolColor:{value:new oe(3158064)},warmColor:{value:new oe(0)},surfaceColor:{value:new oe(16777215)}},vertexShader:`
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
    `});const hw=/^[og]\s*(.+)?/,fw=/^mtllib /,pw=/^usemtl /,mw=/^usemap /,ph=/\s+/,mh=new b,Ll=new b,gh=new b,_h=new b,Rn=new b,sa=new oe;function gw(){const i={objects:[],object:{},vertices:[],normals:[],colors:[],uvs:[],materials:{},materialLibraries:[],startObject:function(e,t){if(this.object&&this.object.fromDeclaration===!1){this.object.name=e,this.object.fromDeclaration=t!==!1;return}const n=this.object&&typeof this.object.currentMaterial=="function"?this.object.currentMaterial():void 0;if(this.object&&typeof this.object._finalize=="function"&&this.object._finalize(!0),this.object={name:e||"",fromDeclaration:t!==!1,geometry:{vertices:[],normals:[],colors:[],uvs:[],hasUVIndices:!1},materials:[],smooth:!0,startMaterial:function(s,o){const r=this._finalize(!1);r&&(r.inherited||r.groupCount<=0)&&this.materials.splice(r.index,1);const a={index:this.materials.length,name:s||"",mtllib:Array.isArray(o)&&o.length>0?o[o.length-1]:"",smooth:r!==void 0?r.smooth:this.smooth,groupStart:r!==void 0?r.groupEnd:0,groupEnd:-1,groupCount:-1,inherited:!1,clone:function(l){const c={index:typeof l=="number"?l:this.index,name:this.name,mtllib:this.mtllib,smooth:this.smooth,groupStart:0,groupEnd:-1,groupCount:-1,inherited:!1};return c.clone=this.clone.bind(c),c}};return this.materials.push(a),a},currentMaterial:function(){if(this.materials.length>0)return this.materials[this.materials.length-1]},_finalize:function(s){const o=this.currentMaterial();if(o&&o.groupEnd===-1&&(o.groupEnd=this.geometry.vertices.length/3,o.groupCount=o.groupEnd-o.groupStart,o.inherited=!1),s&&this.materials.length>1)for(let r=this.materials.length-1;r>=0;r--)this.materials[r].groupCount<=0&&this.materials.splice(r,1);return s&&this.materials.length===0&&this.materials.push({name:"",smooth:this.smooth}),o}},n&&n.name&&typeof n.clone=="function"){const s=n.clone(0);s.inherited=!0,this.object.materials.push(s)}this.objects.push(this.object)},finalize:function(){this.object&&typeof this.object._finalize=="function"&&this.object._finalize(!0)},parseVertexIndex:function(e,t){const n=parseInt(e,10);return(n>=0?n-1:n+t/3)*3},parseNormalIndex:function(e,t){const n=parseInt(e,10);return(n>=0?n-1:n+t/3)*3},parseUVIndex:function(e,t){const n=parseInt(e,10);return(n>=0?n-1:n+t/2)*2},addVertex:function(e,t,n){const s=this.vertices,o=this.object.geometry.vertices;o.push(s[e+0],s[e+1],s[e+2]),o.push(s[t+0],s[t+1],s[t+2]),o.push(s[n+0],s[n+1],s[n+2])},addVertexPoint:function(e){const t=this.vertices;this.object.geometry.vertices.push(t[e+0],t[e+1],t[e+2])},addVertexLine:function(e){const t=this.vertices;this.object.geometry.vertices.push(t[e+0],t[e+1],t[e+2])},addNormal:function(e,t,n){const s=this.normals,o=this.object.geometry.normals;o.push(s[e+0],s[e+1],s[e+2]),o.push(s[t+0],s[t+1],s[t+2]),o.push(s[n+0],s[n+1],s[n+2])},addFaceNormal:function(e,t,n){const s=this.vertices,o=this.object.geometry.normals;mh.fromArray(s,e),Ll.fromArray(s,t),gh.fromArray(s,n),Rn.subVectors(gh,Ll),_h.subVectors(mh,Ll),Rn.cross(_h),Rn.normalize(),o.push(Rn.x,Rn.y,Rn.z),o.push(Rn.x,Rn.y,Rn.z),o.push(Rn.x,Rn.y,Rn.z)},addColor:function(e,t,n){const s=this.colors,o=this.object.geometry.colors;s[e]!==void 0&&o.push(s[e+0],s[e+1],s[e+2]),s[t]!==void 0&&o.push(s[t+0],s[t+1],s[t+2]),s[n]!==void 0&&o.push(s[n+0],s[n+1],s[n+2])},addUV:function(e,t,n){const s=this.uvs,o=this.object.geometry.uvs;o.push(s[e+0],s[e+1]),o.push(s[t+0],s[t+1]),o.push(s[n+0],s[n+1])},addDefaultUV:function(){const e=this.object.geometry.uvs;e.push(0,0),e.push(0,0),e.push(0,0)},addUVLine:function(e){const t=this.uvs;this.object.geometry.uvs.push(t[e+0],t[e+1])},addFace:function(e,t,n,s,o,r,a,l,c){const u=this.vertices.length;let d=this.parseVertexIndex(e,u),h=this.parseVertexIndex(t,u),f=this.parseVertexIndex(n,u);if(this.addVertex(d,h,f),this.addColor(d,h,f),a!==void 0&&a!==""){const _=this.normals.length;d=this.parseNormalIndex(a,_),h=this.parseNormalIndex(l,_),f=this.parseNormalIndex(c,_),this.addNormal(d,h,f)}else this.addFaceNormal(d,h,f);if(s!==void 0&&s!==""){const _=this.uvs.length;d=this.parseUVIndex(s,_),h=this.parseUVIndex(o,_),f=this.parseUVIndex(r,_),this.addUV(d,h,f),this.object.geometry.hasUVIndices=!0}else this.addDefaultUV()},addPointGeometry:function(e){this.object.geometry.type="Points";const t=this.vertices.length;for(let n=0,s=e.length;n<s;n++){const o=this.parseVertexIndex(e[n],t);this.addVertexPoint(o),this.addColor(o)}},addLineGeometry:function(e,t){this.object.geometry.type="Line";const n=this.vertices.length,s=this.uvs.length;for(let o=0,r=e.length;o<r;o++)this.addVertexLine(this.parseVertexIndex(e[o],n));for(let o=0,r=t.length;o<r;o++)this.addUVLine(this.parseUVIndex(t[o],s))}};return i.startObject("",!1),i}class Rf extends Es{constructor(e){super(e),this.materials=null}load(e,t,n,s){const o=this,r=new ru(this.manager);r.setPath(this.path),r.setRequestHeader(this.requestHeader),r.setWithCredentials(this.withCredentials),r.load(e,function(a){try{t(o.parse(a))}catch(l){s?s(l):console.error(l),o.manager.itemError(e)}},n,s)}setMaterials(e){return this.materials=e,this}parse(e){const t=new gw;e.indexOf(`\r
`)!==-1&&(e=e.replace(/\r\n/g,`
`)),e.indexOf(`\\
`)!==-1&&(e=e.replace(/\\\n/g,""));const n=e.split(`
`);let s=[];for(let a=0,l=n.length;a<l;a++){const c=n[a].trimStart();if(c.length===0)continue;const u=c.charAt(0);if(u!=="#")if(u==="v"){const d=c.split(ph);switch(d[0]){case"v":t.vertices.push(parseFloat(d[1]),parseFloat(d[2]),parseFloat(d[3])),d.length>=7?(sa.setRGB(parseFloat(d[4]),parseFloat(d[5]),parseFloat(d[6]),Ut),t.colors.push(sa.r,sa.g,sa.b)):t.colors.push(void 0,void 0,void 0);break;case"vn":t.normals.push(parseFloat(d[1]),parseFloat(d[2]),parseFloat(d[3]));break;case"vt":t.uvs.push(parseFloat(d[1]),parseFloat(d[2]));break}}else if(u==="f"){const h=c.slice(1).trim().split(ph),f=[];for(let g=0,m=h.length;g<m;g++){const p=h[g];if(p.length>0){const w=p.split("/");f.push(w)}}const _=f[0];for(let g=1,m=f.length-1;g<m;g++){const p=f[g],w=f[g+1];t.addFace(_[0],p[0],w[0],_[1],p[1],w[1],_[2],p[2],w[2])}}else if(u==="l"){const d=c.substring(1).trim().split(" ");let h=[];const f=[];if(c.indexOf("/")===-1)h=d;else for(let _=0,g=d.length;_<g;_++){const m=d[_].split("/");m[0]!==""&&h.push(m[0]),m[1]!==""&&f.push(m[1])}t.addLineGeometry(h,f)}else if(u==="p"){const h=c.slice(1).trim().split(" ");t.addPointGeometry(h)}else if((s=hw.exec(c))!==null){const d=(" "+s[0].slice(1).trim()).slice(1);t.startObject(d)}else if(pw.test(c))t.object.startMaterial(c.substring(7).trim(),t.materialLibraries);else if(fw.test(c))t.materialLibraries.push(c.substring(7).trim());else if(mw.test(c))console.warn('THREE.OBJLoader: Rendering identifier "usemap" not supported. Textures must be defined in MTL files.');else if(u==="s"){if(s=c.split(" "),s.length>1){const h=s[1].trim().toLowerCase();t.object.smooth=h!=="0"&&h!=="off"}else t.object.smooth=!0;const d=t.object.currentMaterial();d&&(d.smooth=t.object.smooth)}else{if(c==="\0")continue;console.warn('THREE.OBJLoader: Unexpected line: "'+c+'"')}}t.finalize();const o=new Mn;if(o.materialLibraries=[].concat(t.materialLibraries),!(t.objects.length===1&&t.objects[0].geometry.vertices.length===0)===!0)for(let a=0,l=t.objects.length;a<l;a++){const c=t.objects[a],u=c.geometry,d=c.materials,h=u.type==="Line",f=u.type==="Points";let _=!1;if(u.vertices.length===0)continue;const g=new vt;g.setAttribute("position",new Ye(u.vertices,3)),u.normals.length>0&&g.setAttribute("normal",new Ye(u.normals,3)),u.colors.length>0&&(_=!0,g.setAttribute("color",new Ye(u.colors,3))),u.hasUVIndices===!0&&g.setAttribute("uv",new Ye(u.uvs,2));const m=[];for(let w=0,y=d.length;w<y;w++){const x=d[w],A=x.name+"_"+x.smooth+"_"+_;let T=t.materials[A];if(this.materials!==null){if(T=this.materials.create(x.name),h&&T&&!(T instanceof ms)){const P=new ms;_n.prototype.copy.call(P,T),P.color.copy(T.color),T=P}else if(f&&T&&!(T instanceof Xs)){const P=new Xs({size:10,sizeAttenuation:!1});_n.prototype.copy.call(P,T),P.color.copy(T.color),P.map=T.map,T=P}}T===void 0&&(h?T=new ms:f?T=new Xs({size:1,sizeAttenuation:!1}):T=new _f,T.name=x.name,T.flatShading=!x.smooth,T.vertexColors=_,t.materials[A]=T),m.push(T)}let p;if(m.length>1){for(let w=0,y=d.length;w<y;w++){const x=d[w];g.addGroup(x.groupStart,x.groupCount,w)}h?p=new Dc(g,m):f?p=new xa(g,m):p=new re(g,m)}else h?p=new Dc(g,m[0]):f?p=new xa(g,m[0]):p=new re(g,m[0]);p.name=c.name,o.add(p)}else if(t.vertices.length>0){const a=new Xs({size:1,sizeAttenuation:!1}),l=new vt;l.setAttribute("position",new Ye(t.vertices,3)),t.colors.length>0&&t.colors[0]!==void 0&&(l.setAttribute("color",new Ye(t.colors,3)),a.vertexColors=!0);const c=new xa(l,a);o.add(c)}return o}}const _w=Object.freeze(Object.defineProperty({__proto__:null,OBJLoader:Rf},Symbol.toStringTag,{value:"Module"})),Pf=["#808080","#E74C3C","#3498DB","#2ECC71","#F39C12","#9B59B6","#1ABC9C","#E67E22","#F1C40F","#E91E63","#C0392B","#16A085","#8E44AD","#D35400","#27AE60","#34495E","#00BCD4"];function dr(i,e){var t,n;return((n=(t=i==null?void 0:i.userData)==null?void 0:t.tags)==null?void 0:n.includes(e))||!1}function vw(i,e){return!i||!i.userData?!1:(i.userData.tags||(i.userData.tags=[0]),i.userData.tags.includes(e)?!1:(i.userData.tags.push(e),i.userData.tags.sort((t,n)=>t-n),!0))}function xw(i,e){if(!i||!i.userData||e===0)return!1;i.userData.tags||(i.userData.tags=[0]);const t=i.userData.tags.indexOf(e);return t>-1?(i.userData.tags.splice(t,1),!0):!1}function Df(i,e){return e===0?!1:dr(i,e)?xw(i,e):vw(i,e)}function Lf(i){!i||!i.userData||i.userData.tags||(i.userData.tags=[0])}class yw{execute(){throw new Error("execute() must be implemented")}undo(){throw new Error("undo() must be implemented")}redo(){this.execute()}}class hr extends yw{constructor(e,t,n){var s;super(),this.objectId=(s=e.userData)==null?void 0:s.id,this.objectName=e.name,this.oldState=t,this.newState=n}execute(){const e=this.findObject();e&&this.applyState(e,this.newState)}undo(){console.log("[UNDO] Chiamato undo per:",this.objectName);const e=this.findObject();if(!e){console.error("[UNDO] Impossibile trovare oggetto per undo");return}console.log("[UNDO] Applicando stato:",{oldPos:this.oldState.position,currentPos:{x:e.position.x,y:e.position.y,z:e.position.z}}),this.applyState(e,this.oldState,this.newState),console.log("[UNDO] Stato applicato. Nuova posizione:",{x:e.position.x,y:e.position.y,z:e.position.z})}redo(){const e=this.findObject();e&&this.applyState(e,this.newState,this.oldState)}findObject(){if(!window.scene)return console.error("[UNDO] window.scene non definito!"),null;let e=null;return window.scene.traverse(t=>{var n;((n=t.userData)==null?void 0:n.id)===this.objectId&&(e=t)}),e?console.log("[UNDO] Oggetto trovato:",e.name):console.warn("[UNDO] Oggetto non trovato:",this.objectId,this.objectName),e}applyState(e,t,n=null){var l;t.position&&e.position.set(t.position.x,t.position.y,t.position.z),t.rotation&&e.rotation.set(t.rotation.x,t.rotation.y,t.rotation.z),t.scale&&e.scale.set(t.scale.x,t.scale.y,t.scale.z),t.tags&&(e.userData.tags=[...t.tags]),t.menuState&&(e.userData.menuState={...t.menuState}),e.updateMatrixWorld(!0),window.updateMenuForObject&&window.updateMenuForObject(e),window.updateSubmenuTags&&window.updateSubmenuTags(e);const s=n&&t.position&&(t.position.x!==n.position.x||t.position.y!==n.position.y||t.position.z!==n.position.z),o=n&&t.rotation&&(t.rotation.x!==n.rotation.x||t.rotation.y!==n.rotation.y||t.rotation.z!==n.rotation.z),r=n&&t.scale&&(t.scale.x!==n.scale.x||t.scale.y!==n.scale.y||t.scale.z!==n.scale.z),a=n&&t.tags&&JSON.stringify(t.tags)!==JSON.stringify(n.tags);if(window.messageBroker){const c=this.getObjectType(e.name),u=e.name.match(/(\d+)$/),d=u?parseInt(u[1],10):1;if((!n||s||o||r)&&window.messageBroker.sendObjectTransform({id:(l=e.userData)==null?void 0:l.id,name:e.name,type:c,position:t.position,rotation:t.rotation,scale:t.scale,tags:t.tags}),a&&window.messageBroker.sendObjectTags({name:e.name,type:c,tags:t.tags}),n&&t.menuState&&n.menuState)for(const h in t.menuState)t.menuState[h]!==n.menuState[h]&&(console.log(`[UNDO] Parametro ${h} cambiato:`,n.menuState[h],"->",t.menuState[h]),window.messageBroker.sendCustomParameter({type:c,index:d,paramName:h,value:t.menuState[h]}))}window.multiClientManager?(console.log("[UNDO] MultiClient check:",{exists:!!window.multiClientManager,isMaster:window.multiClientManager.isMaster,syncEnabled:window.multiClientManager.syncEnabled,isEnabled:window.multiClientManager.isEnabled}),window.multiClientManager.isMaster&&window.multiClientManager.syncEnabled?(console.log("[UNDO] Inviando transform a slave via multiClient"),window.multiClientManager.sendTransform(this.objectId,t.position,t.rotation,t.scale,t.tags,t.menuState)):console.log("[UNDO] NON inviando a slave - isMaster:",window.multiClientManager.isMaster,"syncEnabled:",window.multiClientManager.syncEnabled)):console.log("[UNDO] multiClientManager non disponibile")}getObjectType(e){return e.startsWith("Altoparlante")?"altoparlante":e.startsWith("Omnifonte")?"omnifonte":e.startsWith("Orifonte")?"orifonte":e.startsWith("Zona")?"zona":"unknown"}}class ww{constructor(e=50){this.undoStack=[],this.redoStack=[],this.maxHistorySize=e}execute(e){this.undoStack.push(e),this.redoStack=[],this.undoStack.length>this.maxHistorySize&&this.undoStack.shift()}undo(){if(this.undoStack.length===0){console.log("Nulla da annullare");return}const e=this.undoStack.pop();e.undo(),this.redoStack.push(e)}redo(){if(this.redoStack.length===0){console.log("Nulla da ripristinare");return}const e=this.redoStack.pop();e.redo(),this.undoStack.push(e)}clear(){this.undoStack=[],this.redoStack=[]}canUndo(){return this.undoStack.length>0}canRedo(){return this.redoStack.length>0}}const Yt=new ww;typeof window<"u"&&(window.addEventListener("keydown",i=>{(i.ctrlKey||i.metaKey)&&i.key==="z"&&!i.shiftKey&&(i.preventDefault(),console.log("[UNDO] Tasto premuto. Stack:",Yt.undoStack.length,"canUndo:",Yt.canUndo()),Yt.undo()),(i.ctrlKey||i.metaKey)&&i.key==="z"&&i.shiftKey&&(i.preventDefault(),console.log("[REDO] Tasto premuto. Stack:",Yt.redoStack.length,"canRedo:",Yt.canRedo()),Yt.redo()),(i.ctrlKey||i.metaKey)&&i.key==="y"&&(i.preventDefault(),console.log("[REDO] Tasto Y premuto. Stack:",Yt.redoStack.length,"canRedo:",Yt.canRedo()),Yt.redo())}),window.undoManager=Yt,window.TransformCommand=hr);const vh=document.getElementById("objmenu-styles");vh&&vh.remove();const hu=document.createElement("style");hu.id="objmenu-styles";hu.textContent=`
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
    `;document.head.appendChild(hu);const Sw={omnifonte:{title:"Omnifonte Settings",controls:[{type:"slider",label:"Volume",min:0,max:1,step:.1,value:.8},{type:"slider",label:"Distance",min:0,max:10,step:.1,value:5},{type:"toggle",label:"Active",value:!0},{type:"numbox",label:"Channel",value:1,min:1,max:16},{type:"toggle",label:"Reverb",value:!1}]},orifonte:{title:"Orifonte Settings",controls:[{type:"slider",label:"Gain",min:-60,max:12,step:1,value:0},{type:"slider",label:"Spread",min:0,max:180,step:5,value:30},{type:"toggle",label:"Enabled",value:!0},{type:"numbox",label:"Input",value:1,min:1,max:8}]},altoparlante:{title:"Speaker Settings",controls:[{type:"slider",label:"Level",min:0,max:1,step:.05,value:1},{type:"slider",label:"Delay",min:0,max:100,step:1,value:0},{type:"toggle",label:"Mute",value:!1},{type:"numbox",label:"Output",value:1,min:1,max:32},{type:"slider",label:"EQ High",min:-12,max:12,step:.5,value:0},{type:"toggle",label:"Guarda origine",value:!0}]},aureola:{title:"Aureola Settings",controls:[{type:"toggle",label:"Visible",value:!0},{type:"slider",label:"Opacity",min:0,max:1,step:.1,value:.5},{type:"numbox",label:"Segments",value:32,min:8,max:64}]},zona:{title:"Zone Settings",controls:[{type:"toggle",label:"Active",value:!0},{type:"slider",label:"Size",min:.1,max:5,step:.1,value:1},{type:"numbox",label:"Priority",value:1,min:1,max:10}]},povcursor:{title:"POV Cursor Settings",controls:[{type:"toggle",label:"Show",value:!0},{type:"slider",label:"Height",min:.5,max:3,step:.1,value:1.2},{type:"slider",label:"Speed",min:.1,max:2,step:.1,value:1}]}};let If={...Sw};function ws(i){var r,a,l,c;if(!window.multiClientManager||!i){console.log("[MENU SYNC] multiClientManager o object mancante");return}const e=(r=i.userData)==null?void 0:r.id;if(!e){console.log("[MENU SYNC] objectId mancante");return}console.log("[MENU SYNC] Sincronizzando menuState:",{objectName:i.name,isMaster:window.multiClientManager.isMaster,syncEnabled:window.multiClientManager.syncEnabled,menuState:(a=i.userData)==null?void 0:a.menuState}),i.updateMatrixWorld(!0);const t=new b,n=new ft,s=new b;i.matrixWorld.decompose(t,n,s);const o=new Bt().setFromQuaternion(n);window.multiClientManager.sendTransform(e,{x:t.x,y:t.y,z:t.z},{x:o.x,y:o.y,z:o.z},{x:s.x,y:s.y,z:s.z},((l=i.userData)==null?void 0:l.tags)||null,((c=i.userData)==null?void 0:c.menuState)||{})}function Pa(i,e,t,n){var c,u;const s={...i.userData.menuState,[e]:t},o={...i.userData.menuState,[e]:n},r={position:{x:i.position.x,y:i.position.y,z:i.position.z},rotation:{x:i.rotation.x,y:i.rotation.y,z:i.rotation.z},scale:{x:i.scale.x,y:i.scale.y,z:i.scale.z},tags:(c=i.userData)!=null&&c.tags?[...i.userData.tags]:[],menuState:s},a={position:{x:i.position.x,y:i.position.y,z:i.position.z},rotation:{x:i.rotation.x,y:i.rotation.y,z:i.rotation.z},scale:{x:i.scale.x,y:i.scale.y,z:i.scale.z},tags:(u=i.userData)!=null&&u.tags?[...i.userData.tags]:[],menuState:o},l=new hr(i,r,a);Yt.execute(l)}async function Mw(){const i=["omnifonte","orifonte","altoparlante","aureola","zona","povcursor"];for(const e of i)try{const n=await fetch(`/Cielo/config/${e}.json`);if(n.ok){const s=await n.json();If[e]={title:s.title,controls:s.controls.map(o=>({type:o.type,label:o.label,oscName:o.oscName,min:o.min,max:o.max,step:o.step,value:o.defaultValue,options:o.options,defaultValue:o.defaultValue,unitType:o.unitType}))},console.log(`✅ Loaded config for ${e}`)}else console.warn(`⚠️ Could not load config for ${e}, using default`)}catch(t){console.warn(`⚠️ Error loading config for ${e}:`,t)}}Mw().then(()=>{console.log("📋 Menu configurations loaded")});function Kt(i){const e=i.toLowerCase();return e.includes("omnifonte")?"omnifonte":e.includes("orifonte")?"orifonte":e.includes("altoparlante")?"altoparlante":e.includes("aureola")||e.includes("cloud")?"aureola":e.includes("zona")?"zona":e.includes("pov cursor")?"povcursor":"default"}function Ew(i,e,t){var o;const n=(o=i.userData)==null?void 0:o._submenuElement;if(!n)return;const s=n.querySelector(`input[type="checkbox"][data-param="${e}"]`);s&&(s.checked=t)}function mr(i,e=!0){if(!(!i||!i.lookAt))if(e){const t={x:0,y:1.2,z:0};i.lookAt(t.x,t.y,t.z),i.userData=i.userData||{},i.userData.autoRotateToCenter=!0,console.log(`${i.name} oriented to center (0, 1.2, 0)`)}else i.userData&&(i.userData.autoRotateToCenter=!1),i.rotation.set(0,0,0),console.log(`${i.name} auto-rotation disabled, reset to default rotation (0, 0, 0)`)}function bw(i){if(!i||!i.userData||!i.userData.autoRotateToCenter||!i.name||!/Altoparlante/i.test(i.name))return;const e={x:0,y:1.2,z:0};i.lookAt(e.x,e.y,e.z),console.log(`Auto-rotation applied to ${i.name} -> (0, 1.2, 0)`)}function Nf(){(je||[]).forEach(e=>{e.name&&/Altoparlante/i.test(e.name)&&(e.userData=e.userData||{},e.userData.autoRotateToCenter===void 0&&(e.userData.autoRotateToCenter=!0,mr(e,!0),console.log(`Initialized auto-rotation for existing speaker: ${e.name}`)))})}function Tw(i){const e=je.filter(t=>t.name&&/Altoparlante/i.test(t.name));console.log(`Setting global look at to ${i} for ${e.length} speakers`),e.forEach(t=>{mr(t,i)}),Aw(i),console.log(`Global speaker look at ${i?"enabled":"disabled"} for all speakers`)}function Aw(i){document.querySelectorAll('input[type="checkbox"]').forEach(t=>{const n=t.closest("div");if(n){const s=n.querySelector("label");s&&s.textContent==="Guarda origine"&&(t.checked=i,console.log(`Updated individual toggle for speaker to: ${i}`))}})}function Cw(i){const e=je.filter(t=>t.name&&/Altoparlante/i.test(t.name));console.log(`Setting global visibility to ${i} for ${e.length} speakers`),e.forEach(t=>{t.visible=i,console.log(`Speaker ${t.name} visibility set to: ${i}`)}),console.log(`Global speaker visibility ${i?"enabled":"disabled"} for all speakers`)}function Jo(i){var u;if(!i)return;console.log("Updating menu for:",i.name,"menuState:",i.userData.menuState);const e=(u=window.menuObjectMap)==null?void 0:u.get(i);if(!e){console.log("No menu header found for:",i.name);return}const t=e.parentElement,n=t==null?void 0:t.querySelector(".submenu");if(!n){console.log("No submenu found for:",i.name);return}const s=i.userData.menuState||{};n.querySelectorAll('input[type="range"]').forEach(d=>{const h=d.closest(".menu-control-row");if(h==null?void 0:h.querySelector(".menu-label")){const _=d.dataset.param;if(_&&s[_]!==void 0){d.value=s[_];const g=h.querySelector(".menu-value");if(g){const m=d.dataset.unit||"";g.textContent=parseFloat(s[_]).toFixed(2)+m}console.log(`Updated slider ${_}: ${s[_]}`)}}}),n.querySelectorAll('input[type="checkbox"]').forEach(d=>{const h=d.closest(".menu-control-row");h==null||h.querySelector("label");const f=d.dataset.param;f&&s[f]!==void 0&&(d.checked=s[f],console.log(`Updated checkbox ${f}: ${s[f]}`))}),n.querySelectorAll('input[type="number"]').forEach(d=>{const h=d.dataset.param;h&&s[h]!==void 0&&(d.value=s[h],console.log(`Updated numbox ${h}: ${s[h]}`))});const l=n.querySelectorAll(".menu-multitoggle-btn"),c=new Map;l.forEach(d=>{const h=d.dataset.param;c.has(h)||c.set(h,[]),c.get(h).push(d)}),c.forEach((d,h)=>{if(s[h]!==void 0){const f=s[h];d.forEach(_=>{parseFloat(_.dataset.value)===f?_.classList.add("active"):_.classList.remove("active")}),console.log(`Updated multitoggle ${h}: ${f}`)}}),console.log("Menu updated successfully")}window.applyAutoRotationIfEnabled=bw;window.initializeAutoRotationForExistingSpeakers=Nf;window.setGlobalSpeakerLookAt=Tw;window.setGlobalSpeakerVisibility=Cw;window.orientSpeakerToCenter=mr;window.updateMenuForObject=Jo;function Rw(i,e){const t=document.createElement("div");t.className="menu-control-row";const n=document.createElement("label");n.className="menu-label",n.textContent=i.label,e.userData.menuState||(e.userData.menuState={});const s=e.userData.menuState[i.oscName],o=s!==void 0?s:i.value;s===void 0&&(e.userData.menuState[i.oscName]=i.value);const r=document.createElement("input");r.type="range",r.className="menu-slider",r.min=i.min,r.max=i.max,r.step=i.step,r.value=o,r.dataset.param=i.oscName,r.dataset.unit=i.unitType||"";const a=document.createElement("span");a.className="menu-value";const l=i.unitType||"";a.textContent=parseFloat(o).toFixed(2)+l;let c=null;return r.addEventListener("mousedown",()=>{var u,d;c={...e.userData.menuState},(u=window.multiClientManager)!=null&&u.isEnabled&&!((d=window.multiClientManager)!=null&&d.isMaster)&&(console.log("[MENU SLIDER] Richiedo ruolo master..."),window.multiClientManager.requestMaster())}),r.addEventListener("mouseup",()=>{var u,d;if(c&&JSON.stringify(c)!==JSON.stringify(e.userData.menuState)){const h={...e.userData.menuState},f={position:{x:e.position.x,y:e.position.y,z:e.position.z},rotation:{x:e.rotation.x,y:e.rotation.y,z:e.rotation.z},scale:{x:e.scale.x,y:e.scale.y,z:e.scale.z},tags:(u=e.userData)!=null&&u.tags?[...e.userData.tags]:[],menuState:c},_={position:{x:e.position.x,y:e.position.y,z:e.position.z},rotation:{x:e.rotation.x,y:e.rotation.y,z:e.rotation.z},scale:{x:e.scale.x,y:e.scale.y,z:e.scale.z},tags:(d=e.userData)!=null&&d.tags?[...e.userData.tags]:[],menuState:h},g=new hr(e,f,_);Yt.execute(g)}c=null}),r.addEventListener("input",u=>{const d=parseFloat(u.target.value);if(a.textContent=d.toFixed(2)+l,e.userData.menuState[i.oscName]=d,window.messageBroker&&i.oscName){const h=Kt(e.name),f=e.name.match(/(\d+)$/),_=f?parseInt(f[1],10):1;window.messageBroker.sendCustomParameter({type:h,index:_,paramName:i.oscName,value:d})}ws(e)}),r.addEventListener("dblclick",()=>{const u=parseFloat(i.value);if(r.value=u,a.textContent=u.toFixed(2)+l,e.userData.menuState[i.oscName]=u,window.messageBroker&&i.oscName){const d=Kt(e.name),h=e.name.match(/(\d+)$/),f=h?parseInt(h[1],10):1;window.messageBroker.sendCustomParameter({type:d,index:f,paramName:i.oscName,value:u})}ws(e)}),t.appendChild(n),t.appendChild(r),t.appendChild(a),t}function Pw(i,e){const t=document.createElement("div");t.className="menu-control-row";const n=document.createElement("label");n.className="menu-label",n.textContent=i.label;const s=document.createElement("input");s.type="checkbox",s.className="menu-checkbox",s.dataset.param=i.oscName,e.userData.menuState||(e.userData.menuState={});const o=(i.label==="Guarda origine"||i.label==="Look at Origin")&&Kt(e.name)==="altoparlante";if(o)e.userData=e.userData||{},e.userData.autoRotateToCenter===void 0&&(e.userData.autoRotateToCenter=i.value),s.checked=e.userData.autoRotateToCenter;else{const r=e.userData.menuState[i.oscName];s.checked=r!==void 0?r:i.value,r===void 0&&(e.userData.menuState[i.oscName]=i.value)}return s.addEventListener("change",r=>{var u,d;const a=r.target.checked,l=e.userData.menuState[i.oscName];(u=window.multiClientManager)!=null&&u.isEnabled&&!((d=window.multiClientManager)!=null&&d.isMaster)&&(console.log("[MENU TOGGLE] Richiedo ruolo master..."),window.multiClientManager.requestMaster());let c=!1;if(i.oscName==="solo"){const h=Kt(e.name);a?ne.children.forEach(f=>{var _,g;if(f!==e&&((g=(_=f.userData)==null?void 0:_.menuState)==null?void 0:g.solo)!==void 0){const m=Kt(f.name);if(m===h&&window.messageBroker){const p=f.name.match(/(\d+)$/),w=p?parseInt(p[1],10):1;window.messageBroker.sendCustomParameter({type:m,index:w,paramName:"solo",value:0})}m===h&&f.userData.menuState.solo===!0&&(f.userData.menuState.solo=!1,Ew(f,"solo",!1),Pa(f,"solo",!0,!1))}}):(ne.children.forEach(f=>{var _,g;if(((g=(_=f.userData)==null?void 0:_.menuState)==null?void 0:g.solo)!==void 0){const m=Kt(f.name);if(m===h&&window.messageBroker){const p=f.name.match(/(\d+)$/),w=p?parseInt(p[1],10):1;window.messageBroker.sendCustomParameter({type:m,index:w,paramName:"solo",value:1})}}}),c=!0)}if(e.userData.menuState[i.oscName]=a,l!==a&&Pa(e,i.oscName,l,a),o&&mr(e,a),window.messageBroker&&i.oscName&&!c){const h=Kt(e.name),f=e.name.match(/(\d+)$/),_=f?parseInt(f[1],10):1;window.messageBroker.sendCustomParameter({type:h,index:_,paramName:i.oscName,value:a?1:0})}ws(e)}),t.appendChild(n),t.appendChild(s),t}function Dw(i,e){const t=document.createElement("div");t.className="menu-control-row";const n=document.createElement("button");return n.className="menu-button",n.textContent=i.label,n.addEventListener("mousedown",s=>{if(s.preventDefault(),window.messageBroker&&i.oscName){const o=Kt(e.name),r=e.name.match(/(\d+)$/),a=r?parseInt(r[1],10):1;window.messageBroker.sendCustomParameter({type:o,index:a,paramName:i.oscName,value:1})}}),n.addEventListener("mouseup",s=>{if(window.messageBroker&&i.oscName){const o=Kt(e.name),r=e.name.match(/(\d+)$/),a=r?parseInt(r[1],10):1;window.messageBroker.sendCustomParameter({type:o,index:a,paramName:i.oscName,value:0})}}),n.addEventListener("mouseleave",s=>{if(window.messageBroker&&i.oscName){const o=Kt(e.name),r=e.name.match(/(\d+)$/),a=r?parseInt(r[1],10):1;window.messageBroker.sendCustomParameter({type:o,index:a,paramName:i.oscName,value:0})}}),t.appendChild(n),t}function Lw(i,e){const t=document.createElement("div");t.className="menu-control-row";const n=document.createElement("label");n.className="menu-label",n.textContent=i.label,e.userData.menuState||(e.userData.menuState={});const s=e.userData.menuState[i.oscName],o=s!==void 0?s:i.value;s===void 0&&(e.userData.menuState[i.oscName]=i.value);const r=document.createElement("input");r.type="number",r.className="menu-numbox",r.value=o,r.min=i.min||"",r.max=i.max||"",r.dataset.param=i.oscName;const a=i.unitType||"",l=document.createElement("span");return l.className="menu-value",a&&(l.textContent=a),r.addEventListener("change",c=>{var h,f;const u=parseInt(c.target.value,10),d=e.userData.menuState[i.oscName];if((h=window.multiClientManager)!=null&&h.isEnabled&&!((f=window.multiClientManager)!=null&&f.isMaster)&&(console.log("[MENU NUMBOX] Richiedo ruolo master..."),window.multiClientManager.requestMaster()),e.userData.menuState[i.oscName]=u,d!==u&&Pa(e,i.oscName,d,u),window.messageBroker&&i.oscName){const _=Kt(e.name),g=e.name.match(/(\d+)$/),m=g?parseInt(g[1],10):1;window.messageBroker.sendCustomParameter({type:_,index:m,paramName:i.oscName,value:u})}ws(e)}),r.addEventListener("dblclick",()=>{var u,d;const c=parseInt(i.value,10);if(r.value=c,(u=window.multiClientManager)!=null&&u.isEnabled&&!((d=window.multiClientManager)!=null&&d.isMaster)&&(console.log("[MENU NUMBOX RESET] Richiedo ruolo master..."),window.multiClientManager.requestMaster()),e.userData.menuState[i.oscName]=c,window.messageBroker&&i.oscName){const h=Kt(e.name),f=e.name.match(/(\d+)$/),_=f?parseInt(f[1],10):1;window.messageBroker.sendCustomParameter({type:h,index:_,paramName:i.oscName,value:c})}ws(e)}),t.appendChild(n),t.appendChild(r),a&&t.appendChild(l),t}function Iw(i,e){const t=document.createElement("div");t.style.marginBottom="0.3rem";const n=document.createElement("div");n.className="menu-label",n.textContent=i.label,n.style.marginBottom="0.3rem",n.style.fontSize="0.75rem";const s=document.createElement("div");s.className="menu-multitoggle",e.userData.menuState||(e.userData.menuState={});const o=[],r=i.options||[],a=e.userData.menuState[i.oscName],l=a!==void 0?a:i.defaultValue||0;return a===void 0&&(e.userData.menuState[i.oscName]=i.defaultValue||0),r.forEach((c,u)=>{const d=document.createElement("button");d.textContent=c.label,d.className="menu-multitoggle-btn",d.dataset.param=i.oscName,d.dataset.value=c.value!==void 0?c.value:u,(c.value===l||u===l)&&d.classList.add("active"),d.addEventListener("click",()=>{o.forEach(g=>g.classList.remove("active")),d.classList.add("active");const f=c.value!==void 0?c.value:u,_=e.userData.menuState[i.oscName];if(e.userData.menuState[i.oscName]=f,_!==f&&Pa(e,i.oscName,_,f),window.messageBroker&&i.oscName){const g=Kt(e.name),m=e.name.match(/(\d+)$/),p=m?parseInt(m[1],10):1;window.messageBroker.sendCustomParameter({type:g,index:p,paramName:i.oscName,value:f})}ws(e)}),o.push(d),s.appendChild(d)}),s.addEventListener("dblclick",()=>{const c=i.defaultValue||0;if(r.forEach((u,d)=>{const h=u.value===c||d===c,f=o[d];h?f.classList.add("active"):f.classList.remove("active")}),e.userData.menuState[i.oscName]=c,window.messageBroker&&i.oscName){const u=Kt(e.name),d=e.name.match(/(\d+)$/),h=d?parseInt(d[1],10):1;window.messageBroker.sendCustomParameter({type:u,index:h,paramName:i.oscName,value:c})}ws(e)}),t.appendChild(n),t.appendChild(s),t}function Nw(i){const e=document.createElement("div");e.className="submenu-tags-wrapper";const t=document.createElement("div");t.className="submenu-tags-label",t.textContent="Tags";const n=document.createElement("div");return n.className="submenu-tags-container",e.appendChild(t),e.appendChild(n),e._container=n,e._object=i,Of(e),e}function Of(i){const e=i._container,t=i._object;if(t){Lf(t),e.innerHTML="";for(let n=1;n<=16;n++){const s=document.createElement("button");s.textContent=n,s.dataset.tag=n;const o=dr(t,n),r=Pf[n];s.style.cssText=`
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
        `,s.addEventListener("click",()=>{var d,h,f,_;(d=window.multiClientManager)!=null&&d.isEnabled&&!((h=window.multiClientManager)!=null&&h.isMaster)&&window.multiClientManager.requestMaster();const a=[...t.userData.tags],l={position:{x:t.position.x,y:t.position.y,z:t.position.z},rotation:{x:t.rotation.x,y:t.rotation.y,z:t.rotation.z},scale:{x:t.scale.x,y:t.scale.y,z:t.scale.z},tags:a,menuState:(f=t.userData)!=null&&f.menuState?{...t.userData.menuState}:{}};Df(t,n);const c=dr(t,n);s.style.opacity=c?"1":"0.3";const u={position:{x:t.position.x,y:t.position.y,z:t.position.z},rotation:{x:t.rotation.x,y:t.rotation.y,z:t.rotation.z},scale:{x:t.scale.x,y:t.scale.y,z:t.scale.z},tags:[...t.userData.tags],menuState:(_=t.userData)!=null&&_.menuState?{...t.userData.menuState}:{}};if(window.undoManager&&window.TransformCommand){const g=new window.TransformCommand(t,l,u);window.undoManager.execute(g),console.log("[UNDO] Tag modificato, comando salvato. Tags:",a,"->",t.userData.tags)}window.messageBroker&&window.messageBroker.sendObjectTags({name:t.name,type:null,tags:t.userData.tags||[0]}),window.updateTagsChipsExternal&&window.updateTagsChipsExternal(t)}),e.appendChild(s)}}}function Ow(i){const e=Kt(i.name),t=If[e];if(!t)return null;const n=document.createElement("div");n.className="submenu",n.style.display="none",n.style.background="var(--fondale)",n.style.border="1px solid var(--dettaglio)",n.style.borderTop="none",n.style.borderRadius="0 0 10px 10px",n.style.padding="0.4rem",n.style.marginBottom="0.5rem",t.controls.forEach(o=>{let r;switch(o.type){case"slider":r=Rw(o,i);break;case"toggle":r=Pw(o,i),o.label==="Guarda origine"&&o.value===!0&&Kt(i.name)==="altoparlante"&&mr(i,!0);break;case"numbox":r=Lw(o,i);break;case"multitoggle":r=Iw(o,i);break;case"button":r=Dw(o,i);break}r&&n.appendChild(r)});const s=Nw(i);return n.appendChild(s),n._tagsSelector=s,n}function yt(){const i=document.getElementById("menuList");i.innerHTML="",window.menuObjectMap&&window.menuObjectMap.clear();const e=[{key:"fonti",label:"F"},{key:"halo",label:"H"},{key:"altoparlanti",label:"A"},{key:"zone",label:"Z"},{key:"povcursor",label:"P"}];let t=localStorage.getItem("cielo_menu_category")||"fonti";const n=document.createElement("div");n.className="menuCatBar",n.style.display="flex",n.style.gap="0.3rem",n.style.marginBottom="1rem",n.style.justifyContent="flex-start",n.style.alignItems="flex-end",n.style.height="1.7rem",n.style.position="relative";const s=[];e.forEach(l=>{const c=document.createElement("button");c.textContent=l.label,c.style.padding="0 0.5rem",c.style.height="1.4rem",c.style.minWidth="1.4rem",c.style.fontSize="0.95rem",c.style.fontWeight="bold",c.style.background="none",c.style.border="none",c.style.borderRadius="0",c.style.color=t===l.key?"var(--dettaglio)":"var(--testo)",c.style.opacity=t===l.key?"0.85":"0.45",c.style.position="relative",c.style.cursor="pointer",c.style.transition="color 0.2s, opacity 0.2s",c.classList.toggle("menuCatActive",t===l.key),c.classList.add("menuCatBtn"),c.addEventListener("click",()=>{const u=l.key;if(u!==t){const d=e.findIndex(h=>h.key===u);if(s[d]){const h=s[d],f=h.offsetLeft+h.offsetWidth*.1,_=h.offsetWidth*.8,g=n.querySelector(".menuCatSlider");g&&(g.style.left=f+"px",g.style.width=_+"px")}setTimeout(()=>{localStorage.setItem("cielo_menu_category",u),yt()},150)}}),n.appendChild(c),s.push(c)});const o=document.createElement("div");o.className="menuCatSlider",o.style.position="absolute",o.style.height="0.13rem",o.style.background="var(--dettaglio)",o.style.borderRadius="2px",o.style.bottom="-0.25rem",o.style.zIndex="2",o.style.transition="left 0.28s cubic-bezier(0.4,0,0.2,1), width 0.28s cubic-bezier(0.4,0,0.2,1)",n.appendChild(o),i.appendChild(n),requestAnimationFrame(()=>{const l=e.findIndex(c=>c.key===t);if(s[l]){const c=s[l],u=c.offsetLeft+c.offsetWidth*.1,d=c.offsetWidth*.8;o.style.transition="none",o.style.left=u+"px",o.style.width=d+"px",setTimeout(()=>{o.style.transition="left 0.28s cubic-bezier(0.4,0,0.2,1), width 0.28s cubic-bezier(0.4,0,0.2,1)"},50)}});let r;t==="fonti"?r=l=>l.name&&/Omnifonte|Orifonte/i.test(l.name):t==="halo"?r=l=>l.name&&/Aureola|Cloud/i.test(l.name):t==="altoparlanti"?(r=l=>l.name&&/Altoparlante/i.test(l.name),Nf()):t==="zone"?r=l=>l.name&&/Zona|Zone/i.test(l.name):t==="povcursor"?r=l=>l.name&&/POV Cursor/i.test(l.name):r=()=>!0;const a=je.filter(r);window.menuObjectMap=new Map,a.forEach(l=>{const c=document.createElement("div");c.className="item-container",c.style.marginBottom="0.5rem";const u=document.createElement("div");u.className="itemList",u.style.height="2rem",u.style.display="flex",u.style.alignItems="center",u.style.padding="0",u.style.background="var(--fondale)",u.style.border="1px solid var(--dettaglio)",u.style.borderRadius="5px",u.style.cursor="pointer",u.style.transition="border-color 0.2s, box-shadow 0.2s, border-radius 0.2s";const d=document.createElement("div");d.style.flex="1",d.style.overflow="hidden",d.style.textOverflow="ellipsis",d.style.whiteSpace="nowrap",d.style.padding="0.5rem",d.textContent=l.name||"Unnamed";const h=document.createElement("div");h.textContent="▶",h.style.padding="0.5rem",h.style.fontSize="0.8rem",h.style.transition="transform 0.2s",h.style.userSelect="none",u.appendChild(d),u.appendChild(h);const f=Ow(l);let _=!1;f&&(l.userData._submenuElement=f),u.addEventListener("click",g=>{g.stopPropagation(),_=!_,f&&(_?(f.style.display="block",h.style.transform="rotate(90deg)",u.style.borderRadius="5px 5px 0 0"):(f.style.display="none",h.style.transform="rotate(0deg)",u.style.borderRadius="5px"))}),c.appendChild(u),f&&c.appendChild(f),i.appendChild(c),window.menuObjectMap.set(l,u),u.addEventListener("mouseenter",()=>{u.classList.add("itemList-hover"),window.setMenuOutline&&window.setMenuOutline(l,!0)}),u.addEventListener("mouseleave",()=>{u.classList.remove("itemList-hover"),window.setMenuOutline&&window.setMenuOutline(l,!1)})})}function fu(){console.log("updateMenu called - no action needed in simplified menu")}function Uw(i){if(!i)return;if(console.log("updateSubmenuTags chiamata per:",i.name),!window.menuObjectMap){console.log("✗ window.menuObjectMap non esiste");return}const e=window.menuObjectMap.get(i);if(!e){console.log("✗ itemList non trovato in menuObjectMap per:",i.name);return}console.log("✓ itemList trovato");const t=e.parentElement;if(!t){console.log("✗ itemContainer non trovato");return}const n=t.querySelector(".submenu");if(!n){console.log("✗ submenu non trovato nel container");return}console.log("✓ submenu trovato, ha _tagsSelector?",!!n._tagsSelector),n._tagsSelector?(console.log("✓ Aggiornando tag grid per:",i.name),Of(n._tagsSelector)):console.log("✗ submenu non ha _tagsSelector")}window.updateSubmenuTags=Uw;class Fw{constructor(){this.ws=null,this.isEnabled=!0,this.host="192.168.0.255",this.port=5e3,this.reconnectAttempts=0,this.maxReconnectAttempts=5,this.reconnectDelay=1e3,this.messageQueue=[],this.onConfigChange=null,this.onConnectionChange=null,this.connect()}setEnabled(e){this.isEnabled=e,e?this.connect():this.disconnect()}connect(){if(this.ws&&this.ws.readyState===WebSocket.OPEN){console.log("OSC WebSocket già connesso");return}const t=`ws://${window.location.hostname}:8081/osc`;console.log(`Connessione OSC a ${t}...`);try{this.ws=new WebSocket(t),this.ws.onopen=()=>{console.log("OSC WebSocket connesso"),this.reconnectAttempts=0,this.processMessageQueue(),this.onConnectionChange&&this.onConnectionChange(!0)},this.ws.onmessage=n=>{const s=JSON.parse(n.data);this.handleMessage(s)},this.ws.onclose=()=>{console.log("OSC WebSocket disconnesso"),this.handleDisconnection()},this.ws.onerror=n=>{console.error("Errore OSC WebSocket:",n)}}catch(n){console.error("Errore creazione OSC WebSocket:",n)}}disconnect(){this.ws&&(this.ws.close(),this.ws=null),this.onConnectionChange&&this.onConnectionChange(!1)}handleDisconnection(){if(this.onConnectionChange&&this.onConnectionChange(!1),!!this.isEnabled)if(this.reconnectAttempts<this.maxReconnectAttempts){this.reconnectAttempts++;const e=this.reconnectDelay*this.reconnectAttempts;console.log(`Tentativo riconnessione OSC ${this.reconnectAttempts}/${this.maxReconnectAttempts} tra ${e}ms...`),setTimeout(()=>{this.isEnabled&&this.connect()},e)}else console.error("OSC: Raggiunto limite tentativi riconnessione")}handleMessage(e){switch(e.type){case"config":this.host=e.host,this.port=e.port,console.log(`OSC configurazione ricevuta: ${this.host}:${this.port}`),this.onConfigChange&&this.onConfigChange(this.host,this.port);break;case"pong":break;default:console.log("Messaggio OSC sconosciuto:",e)}}updateConfig(e,t){this.host=e,this.port=t,this.sendMessage({type:"config",host:e,port:t}),console.log(`OSC configurazione aggiornata: ${e}:${t}`)}sendOSC(e,t=[]){if(!this.isEnabled){console.log("OSC: Messaggio bloccato (OSC disabilitato)");return}console.log("OSC inviato:",e,t),this.sendMessage({type:"osc",address:e,args:t})}sendMessage(e){this.ws&&this.ws.readyState===WebSocket.OPEN?this.ws.send(JSON.stringify(e)):this.messageQueue.push(e)}processMessageQueue(){for(;this.messageQueue.length>0;){const e=this.messageQueue.shift();this.sendMessage(e)}}}window.oscManager=new Fw;const un=window.oscManager;class Bw{constructor(){this.oscForceOutput=!1}setOSCForceOutput(e){this.oscForceOutput=e,console.log(`OSC Force Output: ${e?"ATTIVO":"DISATTIVO"}`)}canSendMessages(){return!!(!window.multiClientManager||!window.multiClientManager.isEnabled||window.multiClientManager.isMaster||this.oscForceOutput)}extractIndex(e){const t=e.match(/\d+$/);return t?parseInt(t[0]):0}extractType(e){return e.startsWith("Altoparlante")?"altoparlante":e.startsWith("Omnifonte")?"omnifonte":e.startsWith("Orifonte")?"orifonte":e.startsWith("Aureola")?"aureola":e.startsWith("Zona")?"zona":"unknown"}sendObjectCreated(e){const{id:t,name:n,type:s,position:o={x:0,y:0,z:0},rotation:r={x:0,y:0,z:0},scale:a={x:1,y:1,z:1},tags:l=[0]}=e;if(!this.canSendMessages())return;const c=this.extractIndex(n),u=s||this.extractType(n);un.isEnabled&&(un.sendOSC(`/cielo/${u}/added`,[c,o.x,-o.y,o.z]),un.sendOSC(`/cielo/${u}/tags`,[c,...l])),window.max&&window.max.outlet&&window.max.outlet("added",u,c,n,t,o.x,o.y,o.z,r.x,r.y,r.z)}sendObjectTransform(e){const{id:t,name:n,type:s,position:o={x:0,y:0,z:0},rotation:r={x:0,y:0,z:0},scale:a={x:1,y:1,z:1},tags:l=[0]}=e;if(!this.canSendMessages())return;const c=this.extractIndex(n),u=s||this.extractType(n);un.isEnabled&&(un.sendOSC(`/cielo/${u}/position`,[c,o.x,-o.z,o.y]),u!=="omnifonte"&&un.sendOSC(`/cielo/${u}/rotation`,[c,r.x,r.z,r.y]))}sendObjectTags(e){const{name:t,type:n,tags:s=[0]}=e;if(!this.canSendMessages())return;const o=this.extractIndex(t),r=n||this.extractType(t);un.isEnabled&&un.sendOSC(`/cielo/${r}/tags`,[o,...s])}sendObjectDeleted(e){const{id:t,name:n,type:s}=e;if(!this.canSendMessages())return;const o=this.extractIndex(n),r=s||this.extractType(n);un.isEnabled&&un.sendOSC("/cielo/deleted",[r,o]),window.max&&window.max.outlet&&window.max.outlet("deleted",r,o,n,t)}sendObjectSelected(e){const{id:t,name:n,type:s}=e;if(!this.canSendMessages())return;const o=this.extractIndex(n),r=s||this.extractType(n);un.isEnabled&&un.sendOSC("/cielo/selected",[r,o,n,t])}sendCustomParameter(e){const{type:t,index:n,paramName:s,value:o}=e;this.canSendMessages()&&(un.isEnabled&&un.sendOSC(`/cielo/${t}/${s}`,[n,o]),window.max&&window.max.outlet&&window.max.outlet(t,n,s,o))}}window.messageBroker=new Bw;const zw={};function kw(i){return(typeof import.meta<"u"&&zw?"/Cielo/":"")+i}function Wn(i,e,t,n,s,o,r,a,l){console.log("loadObj chiamata con:",{name:e,uniqueId:l,x:s,y:o,z:r});const c=new Rf,u=kw(i);c.load(u,function(d){var f,_;const h=new Mn;if(h.name=e,l?(h.userData.id=l,console.log("ID assegnato al gruppo:",e,"ID:",l)):console.warn("Nessun ID fornito per:",e),d.traverse(function(g){g.isMesh&&(g.material=t,g.name=e,h.add(g))}),h.scale.multiplyScalar(n),h.position.set(s,r,o),a&&h.rotation.set(a.x,a.y,a.z),h.userData.tags=[0],ne.add(h),je.push(h),console.log("Oggetto caricato:",e,"ID assegnato:",h.userData.id),l&&((f=window.multiClientManager)!=null&&f.isMaster)&&((_=window.multiClientManager)!=null&&_.isEnabled)){const g=e.toLowerCase().includes("altoparlante")?"altoparlante":e.toLowerCase().includes("orifonte")?"orifonte":e.toLowerCase().includes("aureola")?"aureola":"object";console.log("Notificando creazione oggetto:",g,e,l),window.multiClientManager.notifyObjectCreated(l,g,e,{x:s,y:r,z:o},a?{x:a.x,y:a.y,z:a.z}:{x:0,y:0,z:0},{x:n,y:n,z:n},{},h.userData.tags||[0])}if(l){const g=e.toLowerCase().includes("altoparlante")?"altoparlante":e.toLowerCase().includes("orifonte")?"orifonte":e.toLowerCase().includes("aureola")?"aureola":"object";window.messageBroker.sendObjectCreated({id:l,name:e,type:g,position:{x:s,y:o,z:r},rotation:a?{x:a.x,y:a.y,z:a.z}:{x:0,y:0,z:0},scale:{x:n,y:n,z:n},tags:h.userData.tags||[0]})}e&&/Altoparlante/i.test(e)&&(h.userData=h.userData||{},h.userData.autoRotateToCenter=!0,h.lookAt(0,1.2,0),console.log(`Auto-rotation initialized for new speaker: ${e}`)),console.log(`Loaded ${u} successfully.`),yt()},function(d){console.log(`${Math.round(d.loaded/d.total*100)}% loaded`)},function(d){console.error("An error happened",d)})}function Mi(i,e){typeof window<"u"&&window.max&&typeof window.max.bindInlet=="function"&&window.max.bindInlet(i,e)}Mi("meshlist",function(){Hw()});function Hw(){let i=0;je.forEach(e=>{e.traverse(t=>{if(t.isMesh&&t.name){t.updateMatrixWorld(!0);const n=new b;t.getWorldPosition(n);const s=new ft;t.getWorldQuaternion(s);const o=new Bt;o.setFromQuaternion(s);const r=`dict set ${i} ${t.name} position ${n.x} ${n.y} ${n.z} rotation ${o.x} ${o.y} ${o.z}`;typeof window<"u"&&window.max&&typeof window.max.outlet=="function"&&window.max.outlet(r),i++}})})}Mi("moveHalo",function(i,e,t,n){const s=`Aureola-${i}`,o=ne.getObjectByName(s);o?(o.position.set(e,n,t),typeof window<"u"&&window.max&&typeof window.max.outlet=="function"&&window.max.outlet("halo",i,e,n,t)):typeof window<"u"&&window.max&&typeof window.max.outlet=="function"&&window.max.outlet("halo",i,"not found")});Mi("rotateHalo",function(i,e,t,n){const s=e*Math.PI*2,o=n*Math.PI*2,r=t*Math.PI*2,a=`Aureola-${i}`,l=ne.getObjectByName(a);l?(l.rotation.set(s,o,r),typeof window<"u"&&window.max&&typeof window.max.outlet=="function"&&window.max.outlet("halo",i,s,o,r)):typeof window<"u"&&window.max&&typeof window.max.outlet=="function"&&window.max.outlet("halo",i,"not found")});Mi("addSpeaker",function(i,e,t,n=0,s=0,o=0){let r=0;ne.children.forEach(l=>{l.name&&l.name.startsWith("Altoparlante ")&&r++});let a=`Altoparlante ${r+1}`;Wn("./modelli/galleriaOBJ/speaker3dec.obj",a,pi,.045,i,e,t),setTimeout(()=>{const l=ne.getObjectByName(a);if(l){const c=n*Math.PI*2,u=s*Math.PI*2,d=o*Math.PI*2;l.rotation.set(c,u,d)}},100),typeof window<"u"&&window.max&&typeof window.max.outlet=="function"&&window.max.outlet(`Speaker ${a}, ${i}, ${e}, ${t}, rot: ${n}, ${s}, ${o}`),Uf()});Mi("moveSpeaker",function(i,e,t,n){const s=`Altoparlante ${i}`,o=ne.getObjectByName(s);o?(o.position.set(e,n,t),typeof window<"u"&&window.max&&typeof window.max.outlet=="function"&&window.max.outlet("speaker",i,e,n,t)):typeof window<"u"&&window.max&&typeof window.max.outlet=="function"&&window.max.outlet("speaker",i,"not found")});Mi("rotateSpeaker",function(i,e,t,n){const s=e*Math.PI*2,o=n*Math.PI*2,r=t*Math.PI*2,a=`Altoparlante ${i}`,l=ne.getObjectByName(a);l?(l.rotation.set(s,o,r),typeof window<"u"&&window.max&&typeof window.max.outlet=="function"&&window.max.outlet("speaker",i,s,o,r)):typeof window<"u"&&window.max&&typeof window.max.outlet=="function"&&window.max.outlet("speaker",i,"not found")});Mi("addSphere",function(i,e,t){let n=0;ne.children.forEach(l=>{l.name&&l.name.startsWith("Omnifonte ")&&n++});let s=`Omnifonte ${n+1}`;const o=new Xi(.3,40,40),r=jn,a=new re(o,r);a.scale.set(.25,.24,.25),a.name=s,a.isDashed=!1,a.position.set(i,e,t),ne.add(a),je.push(a),yt(),typeof window<"u"&&window.max&&typeof window.max.outlet=="function"&&window.max.outlet(`Sfera aggiunta: ${s} in posizione (${i}, ${e}, ${t})`),Ff()});Mi("moveSphere",function(i,e,t,n){const s=`Omnifonte ${i}`,o=ne.getObjectByName(s);t=1-t,o?(o.position.set(e,n,t),typeof window<"u"&&window.max&&typeof window.max.outlet=="function"&&window.max.outlet("Omnifonte",i,e,t,n)):typeof window<"u"&&window.max&&typeof window.max.outlet=="function"&&window.max.outlet("Omnifonte",i,"not found")});Mi("setSphere",function(i,e,t,n){const s=`Omnifonte ${i}`,o=ne.getObjectByName(s);o&&o.position.set(e,n,t)});let Uc=null;function hs(i){i&&i!==Uc&&typeof window<"u"&&window.max&&typeof window.max.outlet=="function"&&(window.max.outlet("LOJ",i),Uc=i)}function Gw(){Uc=null}function Uf(){typeof window<"u"&&window.max&&typeof window.max.outlet=="function"&&window.max.outlet("loaded","Altoparlanti")}function Ff(){typeof window<"u"&&window.max&&typeof window.max.outlet=="function"&&window.max.outlet("loaded","Omnifonti")}function Vw(){typeof window<"u"&&window.max&&typeof window.max.outlet=="function"&&window.max.outlet("update","Altoparlanti")}function Hs(i){const e={};return je.forEach(t=>{t.name&&t.name.startsWith(i)&&xh(t,e)}),ne.traverse(t=>{if(t.alwaysInDict&&t.name&&t.name.startsWith(i)){const n=t.name.replace(/\s+/g,"_");e[n]||xh(t,e)}}),e}function xh(i,e){const t=i.name.replace(/\s+/g,"_"),n=i.name.startsWith("Omnifonte")||i.name.startsWith("POV Cursor")||i.name.startsWith("Orifonte");let s=i;n&&i.parent&&i.parent.type==="Group"&&(s=i.parent),i.updateMatrixWorld(!0);const o=new b;i.getWorldPosition(o);const r=new ft,a=new b;i.matrixWorld.decompose(o,r,a);const l=new Bt().setFromQuaternion(r,"XYZ");let c=o,u=l,d=a;s!==i&&(c=s.position,u=s.rotation,d=s.scale);const h={position:{x:c.x,y:c.z,z:c.y},rotation:{x:u.x,y:u.z,z:u.y},scale:{x:d.x,y:d.z,z:d.y}};if(i.name.startsWith("Omnifonte")||i.name.startsWith("POV Cursor")){const f=Math.sqrt(c.x*c.x+c.y*c.y+c.z*c.z),_=Math.atan2(c.z,c.x)*180/Math.PI;h.distance=f,h.angle=_}i.name.startsWith("POV Cursor")&&(h.visible=s.visible),e[t]=h}function Xe(i=null){if(!window.max||typeof window.max.setDict!="function")return;window.max.setDict("altoparlanti",Hs("Altoparlante")),window.max.setDict("omnifonti",Hs("Omnifonte")),window.max.setDict("orifonti",Hs("Orifonte")),window.max.setDict("zone",Hs("Zona")),window.max.setDict("aureole",Hs("Aureola")),window.max.setDict("povcursor",Hs("POV Cursor")),(Array.isArray(i)?i:[i]).forEach(t=>{t==="altoparlanti"?Uf():t==="omnifonti"?Ff():t==="update-altoparlanti"&&Vw()})}class Ww{constructor(){this.handle=document.createElement("div"),this.handle.id="group-scale-ui-handle",this.handle.style.position="absolute",this.handle.style.width="24px",this.handle.style.height="24px",this.handle.style.background="transparent",this.handle.style.borderLeft="3px solid #333",this.handle.style.borderTop="3px solid #333",this.handle.style.borderRight="none",this.handle.style.borderBottom="none",this.handle.style.zIndex="1000",this.handle.style.display="none",this.handle.style.cursor="pointer",this.handle.style.userSelect="none",this.handle.title="Trascina per scalare XY",document.body.appendChild(this.handle),this.isActive=!1,this.group=null,this.startX=0,this.startY=0,this.startScaleX=1,this.startScaleY=1,this.onDrag=this.onDrag.bind(this),this.onUp=this.onUp.bind(this),this.handle.addEventListener("mousedown",e=>this.onDown(e))}show(e){this.group=e,this.isActive=!0;const t=window.innerHeight/100,n=window.innerWidth/100;this.handle.style.left=n*30+"px",this.handle.style.top=t*30+"px",this.handle.style.display="block",this.startScaleX=1,this.startScaleY=1,e&&e.children.forEach(s=>{s.userData._originalPos||(s.userData._originalPos=s.position.clone())})}hide(){if(this.isActive&&this.isDragging){console.log("[GroupScaleUIDiv] hide() chiamato ma sto trascinando, IGNORO");return}this.isActive=!1,this.group=null,this.handle.style.display="none"}onDown(e){this.isActive&&(e.preventDefault(),this.isDragging=!0,this.startX=e.clientX,this.startY=e.clientY,this.handleStartLeft=parseFloat(this.handle.style.left),this.handleStartTop=parseFloat(this.handle.style.top),window.addEventListener("mousemove",this.onDrag),window.addEventListener("mouseup",this.onUp))}onDrag(e){if(!this.isActive||!this.group)return;const t=e.clientX-this.startX,n=e.clientY-this.startY;let s=t,o=n;if(e.shiftKey){const l=Math.abs(t)>Math.abs(n)?t:n;s=l,o=l}this.handle.style.left=this.handleStartLeft+s+"px",this.handle.style.top=this.handleStartTop+o+"px";let r=Math.max(.1,Math.min(5,this.startScaleX-s*.01)),a=Math.max(.1,Math.min(5,this.startScaleY-o*.01));this.applyScale(r,a)}onUp(e){window.removeEventListener("mousemove",this.onDrag),window.removeEventListener("mouseup",this.onUp),this.isDragging=!1,this.isActive&&(this.startScaleX=this.lastScaleX||1,this.startScaleY=this.lastScaleY||1,this.group&&(this.group.children.forEach(n=>{n.userData._originalPos&&n.userData._originalPos.copy(n.position)}),this.group.children.length>0&&this.group.children.every(n=>n.name&&n.name.toLowerCase().includes("altoparlante"))&&window.max&&window.max.outlet&&Xe("update-altoparlanti")))}applyScale(e,t){if(this.lastScaleX=e,this.lastScaleY=t,!this.group)return;this.group.children.forEach(o=>{const r=o.userData._originalPos;r&&(o.position.x=r.x*e,o.position.y=r.y,o.position.z=r.z*t)}),this.group.updateMatrixWorld(!0);const n=this.group.children;if(!n.length)return;const s=n.every(o=>o.name&&(o.name.toLowerCase().includes("omnifonte")||o.name.toLowerCase().includes("orifonte")));n.every(o=>o.name&&o.name.toLowerCase().includes("altoparlante")),s&&window.max&&window.max.outlet&&n.forEach(o=>{const r=new b;o.getWorldPosition(r);let a=1;const l=o.name.match(/^(.*?)[\s_-]?(\d+)$/);l&&(a=parseInt(l[2],10));const c=r.x,u=r.z,d=r.y,h=Math.sqrt(c*c+u*u);let f=Math.atan2(u,c)*(180/Math.PI)-90;f<0&&(f+=360),window.max.outlet("Omnifonte",a,c,u,d,f,h)}),Xe()}static resetChildrenPositions(e){e&&e.children.forEach(t=>{t.userData._originalPos&&t.position.copy(t.userData._originalPos)})}}const $t=new Ww,Bf={name:"CopyShader",uniforms:{tDiffuse:{value:null},opacity:{value:1}},vertexShader:`

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


		}`};class gr{constructor(){this.isPass=!0,this.enabled=!0,this.needsSwap=!0,this.clear=!1,this.renderToScreen=!1}setSize(){}render(){console.error("THREE.Pass: .render() must be implemented in derived pass.")}dispose(){}}const Xw=new pr(-1,1,1,-1,0,1);class qw extends vt{constructor(){super(),this.setAttribute("position",new Ye([-1,3,0,-1,-1,0,3,-1,0],3)),this.setAttribute("uv",new Ye([0,2,0,0,2,0],2))}}const jw=new qw;class zf{constructor(e){this._mesh=new re(jw,e)}dispose(){this._mesh.geometry.dispose()}render(e){e.render(this._mesh,Xw)}get material(){return this._mesh.material}set material(e){this._mesh.material=e}}class pu extends gr{constructor(e,t){super(),this.textureID=t!==void 0?t:"tDiffuse",e instanceof Et?(this.uniforms=e.uniforms,this.material=e):e&&(this.uniforms=Ms.clone(e.uniforms),this.material=new Et({name:e.name!==void 0?e.name:"unspecified",defines:Object.assign({},e.defines),uniforms:this.uniforms,vertexShader:e.vertexShader,fragmentShader:e.fragmentShader})),this.fsQuad=new zf(this.material)}render(e,t,n){this.uniforms[this.textureID]&&(this.uniforms[this.textureID].value=n.texture),this.fsQuad.material=this.material,this.renderToScreen?(e.setRenderTarget(null),this.fsQuad.render(e)):(e.setRenderTarget(t),this.clear&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),this.fsQuad.render(e))}dispose(){this.material.dispose(),this.fsQuad.dispose()}}class yh extends gr{constructor(e,t){super(),this.scene=e,this.camera=t,this.clear=!0,this.needsSwap=!1,this.inverse=!1}render(e,t,n){const s=e.getContext(),o=e.state;o.buffers.color.setMask(!1),o.buffers.depth.setMask(!1),o.buffers.color.setLocked(!0),o.buffers.depth.setLocked(!0);let r,a;this.inverse?(r=0,a=1):(r=1,a=0),o.buffers.stencil.setTest(!0),o.buffers.stencil.setOp(s.REPLACE,s.REPLACE,s.REPLACE),o.buffers.stencil.setFunc(s.ALWAYS,r,4294967295),o.buffers.stencil.setClear(a),o.buffers.stencil.setLocked(!0),e.setRenderTarget(n),this.clear&&e.clear(),e.render(this.scene,this.camera),e.setRenderTarget(t),this.clear&&e.clear(),e.render(this.scene,this.camera),o.buffers.color.setLocked(!1),o.buffers.depth.setLocked(!1),o.buffers.color.setMask(!0),o.buffers.depth.setMask(!0),o.buffers.stencil.setLocked(!1),o.buffers.stencil.setFunc(s.EQUAL,1,4294967295),o.buffers.stencil.setOp(s.KEEP,s.KEEP,s.KEEP),o.buffers.stencil.setLocked(!0)}}class Yw extends gr{constructor(){super(),this.needsSwap=!1}render(e){e.state.buffers.stencil.setLocked(!1),e.state.buffers.stencil.setTest(!1)}}class kf{constructor(e,t){if(this.renderer=e,this._pixelRatio=e.getPixelRatio(),t===void 0){const n=e.getSize(new ge);this._width=n.width,this._height=n.height,t=new tn(this._width*this._pixelRatio,this._height*this._pixelRatio,{type:Dn}),t.texture.name="EffectComposer.rt1"}else this._width=t.width,this._height=t.height;this.renderTarget1=t,this.renderTarget2=t.clone(),this.renderTarget2.texture.name="EffectComposer.rt2",this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2,this.renderToScreen=!0,this.passes=[],this.copyPass=new pu(Bf),this.copyPass.material.blending=Yn,this.clock=new Wg}swapBuffers(){const e=this.readBuffer;this.readBuffer=this.writeBuffer,this.writeBuffer=e}addPass(e){this.passes.push(e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}insertPass(e,t){this.passes.splice(t,0,e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}removePass(e){const t=this.passes.indexOf(e);t!==-1&&this.passes.splice(t,1)}isLastEnabledPass(e){for(let t=e+1;t<this.passes.length;t++)if(this.passes[t].enabled)return!1;return!0}render(e){e===void 0&&(e=this.clock.getDelta());const t=this.renderer.getRenderTarget();let n=!1;for(let s=0,o=this.passes.length;s<o;s++){const r=this.passes[s];if(r.enabled!==!1){if(r.renderToScreen=this.renderToScreen&&this.isLastEnabledPass(s),r.render(this.renderer,this.writeBuffer,this.readBuffer,e,n),r.needsSwap){if(n){const a=this.renderer.getContext(),l=this.renderer.state.buffers.stencil;l.setFunc(a.NOTEQUAL,1,4294967295),this.copyPass.render(this.renderer,this.writeBuffer,this.readBuffer,e),l.setFunc(a.EQUAL,1,4294967295)}this.swapBuffers()}yh!==void 0&&(r instanceof yh?n=!0:r instanceof Yw&&(n=!1))}}this.renderer.setRenderTarget(t)}reset(e){if(e===void 0){const t=this.renderer.getSize(new ge);this._pixelRatio=this.renderer.getPixelRatio(),this._width=t.width,this._height=t.height,e=this.renderTarget1.clone(),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.renderTarget1=e,this.renderTarget2=e.clone(),this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2}setSize(e,t){this._width=e,this._height=t;const n=this._width*this._pixelRatio,s=this._height*this._pixelRatio;this.renderTarget1.setSize(n,s),this.renderTarget2.setSize(n,s);for(let o=0;o<this.passes.length;o++)this.passes[o].setSize(n,s)}setPixelRatio(e){this._pixelRatio=e,this.setSize(this._width,this._height)}dispose(){this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.copyPass.dispose()}}class Hf extends gr{constructor(e,t,n=null,s=null,o=null){super(),this.scene=e,this.camera=t,this.overrideMaterial=n,this.clearColor=s,this.clearAlpha=o,this.clear=!0,this.clearDepth=!1,this.needsSwap=!1,this._oldClearColor=new oe}render(e,t,n){const s=e.autoClear;e.autoClear=!1;let o,r;this.overrideMaterial!==null&&(r=this.scene.overrideMaterial,this.scene.overrideMaterial=this.overrideMaterial),this.clearColor!==null&&(e.getClearColor(this._oldClearColor),e.setClearColor(this.clearColor,e.getClearAlpha())),this.clearAlpha!==null&&(o=e.getClearAlpha(),e.setClearAlpha(this.clearAlpha)),this.clearDepth==!0&&e.clearDepth(),e.setRenderTarget(this.renderToScreen?null:n),this.clear===!0&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),e.render(this.scene,this.camera),this.clearColor!==null&&e.setClearColor(this._oldClearColor),this.clearAlpha!==null&&e.setClearAlpha(o),this.overrideMaterial!==null&&(this.scene.overrideMaterial=r),e.autoClear=s}}const Gf={name:"FXAAShader",uniforms:{tDiffuse:{value:null},resolution:{value:new ge(1/1024,1/512)}},vertexShader:`

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
			
		}`};class Vf extends re{constructor(e=10,t=16,n=new oe(15658734),s=new oe(14540253),o=.35){const r=new xs(e,e,1,1),a=new Et({side:pn,transparent:!0,uniforms:{u_size:{value:e},u_divisions:{value:t},u_color1:{value:n},u_color2:{value:s},u_opacity:{value:o}},vertexShader:`
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
            `});super(r,a),this.frustumCulled=!1,this.renderOrder=-1,this.position.y=0,this.rotation.x=-Math.PI/2}setSize(e,t){this.geometry.dispose(),this.geometry=new xs(e,e,1,1),this.material.uniforms.u_size.value=e,this.material.uniforms.u_divisions.value=t}setVisible(e){this.visible=e}}let ne,io,qe,le,Pt,Nt,je=[],Ui,ei,Ce,_s,fs,qo=14079702,Il=null;window.objToBeDetected=je;const Bo=document.getElementById("visualizzazione");let Gs=!1;function Nl(){return Il||(Il=document.getElementById("ghostButton")),Il}function oa(i,e){ne.remove(io),io=new Vf(i,e,new oe(8947848),new oe(4473924),.85),ne.add(io)}function $w(){io=new Vf(10,16,new oe(8947848),new oe(4473924),.85),ne=new lg,ne.add(io),window.scene=ne;const i=window.innerWidth/window.innerHeight,e=8;Ui=new sn(50,i,.3,200),ei=new pr(-e*i,e*i,e,-e,.3,200),Ce=Ui,Ce.position.set(12,3,12);const t=new kg(15198183,4);ne.add(t);const n=new Ic(16777215,1.6);n.position.set(5,10,7.5),n.castShadow=!0,ne.add(n);const s=new Ic(16777215,1.6);s.position.set(-5,10,-7.5),s.castShadow=!0,ne.add(s),ne.add(Ce),qe=new Fy({antialias:!0,alpha:!0}),qe.setPixelRatio(window.devicePixelRatio),qe.setSize(window.innerWidth,window.innerHeight),qe.autoClear=!1,qe.setClearColor(qo),document.body.appendChild(qe.domElement),_s=new kf(qe);const o=new Hf(ne,Ce);_s.addPass(o),fs=new pu(Gf);const r=qe.getPixelRatio();fs.material.uniforms.resolution.value.x=1/(window.innerWidth*r),fs.material.uniforms.resolution.value.y=1/(window.innerHeight*r),_s.addPass(fs),Pt=new eh(Ui,qe.domElement),Pt.update(),Nt=new eh(ei,qe.domElement),Nt.enableRotate=!1,Nt.enablePan=!0,Nt.enableZoom=!0,Nt.update(),Zw(),window.addEventListener("keydown",function(u){var _,g,m,p,w,y,x,A,T,P,L,M;const d=document.activeElement;if(d&&(d.tagName==="INPUT"||d.tagName==="TEXTAREA"||d.isContentEditable)&&["1","2","3","4"].includes(u.key))return;const f=()=>{var v,C,N,O,z,D,I;return{currentSelectedObject:((v=window.raycasterGlobals)==null?void 0:v.currentSelectedObject)||null,lastHoveredObject:((C=window.raycasterGlobals)==null?void 0:C.lastHoveredObject)||null,isRaycasterActive:((N=window.raycasterGlobals)==null?void 0:N.isRaycasterActive)||!1,setRaycasterActive:((O=window.raycasterGlobals)==null?void 0:O.setRaycasterActive)||(()=>{}),duplicateObject:((z=window.raycasterGlobals)==null?void 0:z.duplicateObject)||(()=>{}),deleteSelectedObject:((D=window.raycasterGlobals)==null?void 0:D.deleteSelectedObject)||(()=>{}),updateMenu:((I=window.raycasterGlobals)==null?void 0:I.updateMenu)||(()=>{})}};switch(u.key){case"1":$t.hide(),Ce=Ui,Pt.enabled=!0,Nt.enabled=!1,Pt.object=Ce,Pt.update(),le.camera=Ce,window.updatePostProcessingCamera&&window.updatePostProcessingCamera(Ce),Bo.textContent="Prospettiva",qe.render(ne,Ce);break;case"2":$t.hide(),Ce=ei,Pt.enabled=!1,Nt.enabled=!0,Nt.object=Ce,Nt.update(),Ce.position.set(0,8,0),Ce.lookAt(0,0,0),Nt.target.set(0,0,0),le.camera=Ce,window.updatePostProcessingCamera&&window.updatePostProcessingCamera(Ce),Bo.textContent="Pianta",qe.render(ne,Ce);break;case"3":$t.hide(),Ce=ei,Pt.enabled=!1,Nt.enabled=!0,Nt.object=Ce,Nt.update(),Ce.position.set(0,0,8),Ce.lookAt(0,0,0),Nt.target.set(0,0,0),le.camera=Ce,window.updatePostProcessingCamera&&window.updatePostProcessingCamera(Ce),Bo.textContent="Fronte",qe.render(ne,Ce);break;case"4":$t.hide(),Ce=ei,Pt.enabled=!1,Nt.enabled=!0,Nt.object=Ce,Nt.update(),Ce.position.set(8,0,0),Ce.lookAt(0,0,0),Nt.target.set(0,0,0),le.camera=Ce,window.updatePostProcessingCamera&&window.updatePostProcessingCamera(Ce),Bo.textContent="Lato",qe.render(ne,Ce);break;case"q":le.setSpace(le.space==="local"?"world":"local");break;case"g":$t.hide();const v=f(),C=v.lastHoveredObject||v.currentSelectedObject;if(C){const j=(_=C.parent)!=null&&_.isGroup?C.parent:C;le.setMode("translate"),le.attach(j),(g=window.raycasterGlobals)!=null&&g.setRaycasterActiveForTransformControls&&window.raycasterGlobals.setRaycasterActiveForTransformControls(!1),Pt.enabled=!1,Gs=!0,setTimeout(()=>{Gs=!1},100),(m=window.raycasterGlobals)!=null&&m.outlinePass&&(window.raycasterGlobals.outlinePass.selectedObjects=[])}else{le.setMode("translate");const j=Nl();j&&(j.style.display="block",j.style.right="21.5rem")}if(C&&window.transformContextMenu){const j=(p=C.parent)!=null&&p.isGroup?C.parent:C;window.transformContextMenu.show(j),window.transformContextMenu.updateState("move")}else window.transformContextMenu&&window.transformContextMenu.isVisible()&&window.transformContextMenu.updateState("move");break;case"r":$t.hide();const N=f(),O=N.lastHoveredObject||N.currentSelectedObject;if(O){const j=(w=O.parent)!=null&&w.isGroup?O.parent:O,ee=j.name||"";if(ee.toLowerCase().includes("altoparlante")){console.log("Keyboard R: Activating rotation for speaker:",ee);const ce=((y=j.userData)==null?void 0:y.autoRotateToCenter)===!0;console.log("Keyboard R: LookAt was active:",ce),ce&&window.orientSpeakerToCenter?window.orientSpeakerToCenter(j,!1):j.userData&&(j.userData.autoRotateToCenter=!1,console.log("Keyboard R: LookAt disabled without resetting rotation - keeping current rotation")),window.updateMenuForObject&&window.updateMenuForObject(j),console.log("Keyboard R: LookAt center flag updated to:",(x=j.userData)==null?void 0:x.autoRotateToCenter),console.log("Keyboard R: Speaker rotation mode activated - lookAt center handled based on previous state")}le.setMode("rotate"),le.attach(j),(A=window.raycasterGlobals)!=null&&A.setRaycasterActiveForTransformControls&&window.raycasterGlobals.setRaycasterActiveForTransformControls(!1),Pt.enabled=!1,Gs=!0,setTimeout(()=>{Gs=!1},100),(T=window.raycasterGlobals)!=null&&T.outlinePass&&(window.raycasterGlobals.outlinePass.selectedObjects=[])}else{le.setMode("rotate");const j=Nl();j&&(j.style.display="block",j.style.right="16.5rem")}if(O&&window.transformContextMenu){const j=(P=O.parent)!=null&&P.isGroup?O.parent:O;window.transformContextMenu.show(j),window.transformContextMenu.updateState("rotate")}else window.transformContextMenu&&window.transformContextMenu.isVisible()&&window.transformContextMenu.updateState("rotate");break;case"s":const D=f().lastHoveredObject;D?(le&&le.object&&le.detach(),Pt.enabled=!0,$t.show(D),D.name==="Gruppo di trasformazione"&&Ce&&Ce.isOrthographicCamera&&Ce.position.y>Math.abs(Ce.position.x)&&Ce.position.y>Math.abs(Ce.position.z),window.transformContextMenu&&(window.transformContextMenu.show(D),window.transformContextMenu.updateState("scale"))):console.log("Tasto S: nessun oggetto selezionato per la scala");break;case"Escape":if(Gs){console.log("Escape ignored: ignoreNextEscape flag active"),Gs=!1;return}le&&le.object&&le.detach(),Pt.enabled=!0;const I=Nl();I&&(I.style.display="none");const G=f();(L=window.raycasterGlobals)!=null&&L.clearTransformControlsOverride&&window.raycasterGlobals.clearTransformControlsOverride(),G.setRaycasterActive(!0),(M=window.raycasterGlobals)!=null&&M.outlinePass&&(window.raycasterGlobals.outlinePass.selectedObjects=[]),G.currentSelectedObject=null,G.lastHoveredObject=null,window.transformContextMenu&&window.transformContextMenu.hide(),G.updateMenu(),$t.hide();break;default:if(u.shiftKey&&u.key.toLowerCase()==="d"){const j=f();j.currentSelectedObject&&j.duplicateObject&&j.duplicateObject(j.currentSelectedObject)}break;case"x":case"Backspace":const F=document.activeElement;if(!(F&&(F.tagName==="INPUT"||F.tagName==="TEXTAREA"||F.isContentEditable))){const j=f();j.deleteSelectedObject&&j.deleteSelectedObject()}break}}),qe.domElement.addEventListener("dblclick",function(){const u=Ce.zoom;Ce===Ui&&(Ce.position.set(12,3,12),Ce.lookAt(0,0,0)),Ce.zoom=u,Ce.updateProjectionMatrix(),Pt.target.set(0,0,0),Pt.update()}),window.addEventListener("resize",Jw);const l=[{key:"1",label:"Prospettiva"},{key:"2",label:"Pianta"},{key:"3",label:"Fronte"},{key:"4",label:"Lato"}];let c=0;Bo.addEventListener("click",()=>{c=(c+1)%l.length;const u=new KeyboardEvent("keydown",{key:l[c].key});window.dispatchEvent(u)}),window.setupGlobals={control:le}}function Kw(i){var e=document.documentElement;i?(qo=0,qe.setClearColor(qo),e.style.setProperty("--fondale","var(--fondaleNero)"),e.style.setProperty("--testo","var(--fondaleBianco)"),e.style.setProperty("--dettaglio","var(--grigino)"),jn.uniforms.coolColor.value=new oe(14079702),jn.uniforms.warmColor.value=new oe(15263976)):(qo=14079702,qe.setClearColor(qo),e.style.setProperty("--fondale","var(--fondaleBianco)"),e.style.setProperty("--testo","var(--fondaleNero)"),e.style.setProperty("--dettaglio","var(--grigio)"),jn.uniforms.coolColor.value=new oe(3158064),jn.uniforms.warmColor.value=new oe(0)),window.conditionalLinesManager&&window.currentPlasticoControl&&ys(()=>Promise.resolve().then(()=>gM),void 0).then(t=>{const n=window.currentPlasticoControl;if(n){const s=t.getCSSColorAsHex("--fondale"),o=t.getCSSColorAsHex("--testo");n.setMaterialColor(s),n.setLineColor(o)}})}function Wf(){window.raycasterComposer?window.raycasterComposer.render():_s?_s.render():qe.render(ne,Ce),requestAnimationFrame(Wf)}function Zw(){le=new Qy(Ui,qe.domElement),le.setTranslationSnap(.05),le.setRotationSnap(_i.degToRad(15)),le.setScaleSnap(.05),le.addEventListener("dragging-changed",function(n){Pt.enabled=!n.value}),le.addEventListener("objectChange",function(n){const s=le.object;s&&window.applyAutoRotationIfEnabled&&window.applyAutoRotationIfEnabled(s)});function i(){const n={X:16537697,Y:8577862,Z:4629219};function s(o){o.isMesh&&o.material&&o.name&&(o.name.includes("X")&&o.material.color.setHex(n.X),o.name.includes("Y")&&o.material.color.setHex(n.Y),o.name.includes("Z")&&o.material.color.setHex(n.Z)),o.children&&o.children.length&&o.children.forEach(r=>s(r))}Array.isArray(le.children)&&le.children.length>0?le.children.forEach(o=>s(o)):le._gizmo&&s(le._gizmo)}i(),le.addEventListener("objectChange",i);const e=le.getHelper();function t(n){n.isTransformControls=!0,n.children&&n.children.forEach(s=>t(s))}t(e),t(le),ne.add(e)}function Jw(){const i=window.innerWidth/window.innerHeight;if(Ui.aspect=i,Ui.updateProjectionMatrix(),ei.left=ei.bottom*i,ei.right=ei.top*i,ei.updateProjectionMatrix(),qe.setSize(window.innerWidth,window.innerHeight),_s&&_s.setSize(window.innerWidth,window.innerHeight),fs){const e=qe.getPixelRatio();fs.material.uniforms.resolution.value.x=1/(window.innerWidth*e),fs.material.uniforms.resolution.value.y=1/(window.innerHeight*e)}window.resizeRaycasterComposer&&window.resizeRaycasterComposer(),Xf()}let Ol={width:0,height:0},wh=0;function Xf(i=!1){if(!window.conditionalLinesManager||typeof window.conditionalLinesManager.updateResolutions!="function")return;const e={width:window.innerWidth,height:window.innerHeight},t=window.devicePixelRatio||1,n=e.width!==Ol.width||e.height!==Ol.height;(i||n||t!==wh)&&(window.conditionalLinesManager.updateResolutions(),Ol={...e},wh=t)}window.forceConditionalLinesUpdate=()=>Xf(!0);function Qw(i,e=!1){const t=i[0].index!==null,n=new Set(Object.keys(i[0].attributes)),s=new Set(Object.keys(i[0].morphAttributes)),o={},r={},a=i[0].morphTargetsRelative,l=new vt;let c=0;for(let u=0;u<i.length;++u){const d=i[u];let h=0;if(t!==(d.index!==null))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+". All geometries must have compatible attributes; make sure index attribute exists among all geometries, or in none of them."),null;for(const f in d.attributes){if(!n.has(f))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+'. All geometries must have compatible attributes; make sure "'+f+'" attribute exists among all geometries, or in none of them.'),null;o[f]===void 0&&(o[f]=[]),o[f].push(d.attributes[f]),h++}if(h!==n.size)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+". Make sure all geometries have the same number of attributes."),null;if(a!==d.morphTargetsRelative)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+". .morphTargetsRelative must be consistent throughout all geometries."),null;for(const f in d.morphAttributes){if(!s.has(f))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+".  .morphAttributes must be consistent throughout all geometries."),null;r[f]===void 0&&(r[f]=[]),r[f].push(d.morphAttributes[f])}if(e){let f;if(t)f=d.index.count;else if(d.attributes.position!==void 0)f=d.attributes.position.count;else return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+". The geometry must have either an index or a position attribute"),null;l.addGroup(c,f,u),c+=f}}if(t){let u=0;const d=[];for(let h=0;h<i.length;++h){const f=i[h].index;for(let _=0;_<f.count;++_)d.push(f.getX(_)+u);u+=i[h].attributes.position.count}l.setIndex(d)}for(const u in o){const d=Sh(o[u]);if(!d)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+u+" attribute."),null;l.setAttribute(u,d)}for(const u in r){const d=r[u][0].length;if(d===0)break;l.morphAttributes=l.morphAttributes||{},l.morphAttributes[u]=[];for(let h=0;h<d;++h){const f=[];for(let g=0;g<r[u].length;++g)f.push(r[u][g][h]);const _=Sh(f);if(!_)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+u+" morphAttribute."),null;l.morphAttributes[u].push(_)}}return l}function Sh(i){let e,t,n,s=-1,o=0;for(let c=0;c<i.length;++c){const u=i[c];if(e===void 0&&(e=u.array.constructor),e!==u.array.constructor)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.array must be of consistent array types across matching attributes."),null;if(t===void 0&&(t=u.itemSize),t!==u.itemSize)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.itemSize must be consistent across matching attributes."),null;if(n===void 0&&(n=u.normalized),n!==u.normalized)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.normalized must be consistent across matching attributes."),null;if(s===-1&&(s=u.gpuType),s!==u.gpuType)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.gpuType must be consistent across matching attributes."),null;o+=u.count*t}const r=new e(o),a=new Tt(r,t,n);let l=0;for(let c=0;c<i.length;++c){const u=i[c];if(u.isInterleavedBufferAttribute){const d=l/t;for(let h=0,f=u.count;h<f;h++)for(let _=0;_<t;_++){const g=u.getComponent(h,_);a.setComponent(h+d,_,g)}}else r.set(u.array,l);l+=u.count*t}return s!==void 0&&(a.gpuType=s),a}function ra(i,e=1e-4){e=Math.max(e,Number.EPSILON);const t={},n=i.getIndex(),s=i.getAttribute("position"),o=n?n.count:s.count;let r=0;const a=Object.keys(i.attributes),l={},c={},u=[],d=["getX","getY","getZ","getW"],h=["setX","setY","setZ","setW"];for(let w=0,y=a.length;w<y;w++){const x=a[w],A=i.attributes[x];l[x]=new A.constructor(new A.array.constructor(A.count*A.itemSize),A.itemSize,A.normalized);const T=i.morphAttributes[x];T&&(c[x]||(c[x]=[]),T.forEach((P,L)=>{const M=new P.array.constructor(P.count*P.itemSize);c[x][L]=new P.constructor(M,P.itemSize,P.normalized)}))}const f=e*.5,_=Math.log10(1/e),g=Math.pow(10,_),m=f*g;for(let w=0;w<o;w++){const y=n?n.getX(w):w;let x="";for(let A=0,T=a.length;A<T;A++){const P=a[A],L=i.getAttribute(P),M=L.itemSize;for(let v=0;v<M;v++)x+=`${~~(L[d[v]](y)*g+m)},`}if(x in t)u.push(t[x]);else{for(let A=0,T=a.length;A<T;A++){const P=a[A],L=i.getAttribute(P),M=i.morphAttributes[P],v=L.itemSize,C=l[P],N=c[P];for(let O=0;O<v;O++){const z=d[O],D=h[O];if(C[D](r,L[z](y)),M)for(let I=0,G=M.length;I<G;I++)N[I][D](r,M[I][z](y))}}t[x]=r,u.push(r),r++}}const p=i.clone();for(const w in i.attributes){const y=l[w];if(p.setAttribute(w,new y.constructor(y.array.slice(0,r*y.itemSize),y.itemSize,y.normalized)),w in c)for(let x=0;x<c[w].length;x++){const A=c[w][x];p.morphAttributes[w][x]=new A.constructor(A.array.slice(0,r*A.itemSize),A.itemSize,A.normalized)}}return p.setIndex(u),p}function Mh(i,e){if(e===dm)return console.warn("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Geometry already defined as triangles."),i;if(e===Cc||e===ef){let t=i.getIndex();if(t===null){const r=[],a=i.getAttribute("position");if(a!==void 0){for(let l=0;l<a.count;l++)r.push(l);i.setIndex(r),t=i.getIndex()}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Undefined position attribute. Processing not possible."),i}const n=t.count-2,s=[];if(e===Cc)for(let r=1;r<=n;r++)s.push(t.getX(0)),s.push(t.getX(r)),s.push(t.getX(r+1));else for(let r=0;r<n;r++)r%2===0?(s.push(t.getX(r)),s.push(t.getX(r+1)),s.push(t.getX(r+2))):(s.push(t.getX(r+2)),s.push(t.getX(r+1)),s.push(t.getX(r)));s.length/3!==n&&console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unable to generate correct amount of triangles.");const o=i.clone();return o.setIndex(s),o.clearGroups(),o}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unknown draw mode:",e),i}class Ga extends Es{constructor(e){super(e),this.dracoLoader=null,this.ktx2Loader=null,this.meshoptDecoder=null,this.pluginCallbacks=[],this.register(function(t){return new sS(t)}),this.register(function(t){return new oS(t)}),this.register(function(t){return new pS(t)}),this.register(function(t){return new mS(t)}),this.register(function(t){return new gS(t)}),this.register(function(t){return new aS(t)}),this.register(function(t){return new lS(t)}),this.register(function(t){return new cS(t)}),this.register(function(t){return new uS(t)}),this.register(function(t){return new iS(t)}),this.register(function(t){return new dS(t)}),this.register(function(t){return new rS(t)}),this.register(function(t){return new fS(t)}),this.register(function(t){return new hS(t)}),this.register(function(t){return new tS(t)}),this.register(function(t){return new _S(t)}),this.register(function(t){return new vS(t)})}load(e,t,n,s){const o=this;let r;if(this.resourcePath!=="")r=this.resourcePath;else if(this.path!==""){const c=Zo.extractUrlBase(e);r=Zo.resolveURL(c,this.path)}else r=Zo.extractUrlBase(e);this.manager.itemStart(e);const a=function(c){s?s(c):console.error(c),o.manager.itemError(e),o.manager.itemEnd(e)},l=new ru(this.manager);l.setPath(this.path),l.setResponseType("arraybuffer"),l.setRequestHeader(this.requestHeader),l.setWithCredentials(this.withCredentials),l.load(e,function(c){try{o.parse(c,r,function(u){t(u),o.manager.itemEnd(e)},a)}catch(u){a(u)}},n,a)}setDRACOLoader(e){return this.dracoLoader=e,this}setKTX2Loader(e){return this.ktx2Loader=e,this}setMeshoptDecoder(e){return this.meshoptDecoder=e,this}register(e){return this.pluginCallbacks.indexOf(e)===-1&&this.pluginCallbacks.push(e),this}unregister(e){return this.pluginCallbacks.indexOf(e)!==-1&&this.pluginCallbacks.splice(this.pluginCallbacks.indexOf(e),1),this}parse(e,t,n,s){let o;const r={},a={},l=new TextDecoder;if(typeof e=="string")o=JSON.parse(e);else if(e instanceof ArrayBuffer)if(l.decode(new Uint8Array(e,0,4))===qf){try{r[Ve.KHR_BINARY_GLTF]=new xS(e)}catch(d){s&&s(d);return}o=JSON.parse(r[Ve.KHR_BINARY_GLTF].content)}else o=JSON.parse(l.decode(e));else o=e;if(o.asset===void 0||o.asset.version[0]<2){s&&s(new Error("THREE.GLTFLoader: Unsupported asset. glTF versions >=2.0 are supported."));return}const c=new LS(o,{path:t||this.resourcePath||"",crossOrigin:this.crossOrigin,requestHeader:this.requestHeader,manager:this.manager,ktx2Loader:this.ktx2Loader,meshoptDecoder:this.meshoptDecoder});c.fileLoader.setRequestHeader(this.requestHeader);for(let u=0;u<this.pluginCallbacks.length;u++){const d=this.pluginCallbacks[u](c);d.name||console.error("THREE.GLTFLoader: Invalid plugin found: missing name"),a[d.name]=d,r[d.name]=!0}if(o.extensionsUsed)for(let u=0;u<o.extensionsUsed.length;++u){const d=o.extensionsUsed[u],h=o.extensionsRequired||[];switch(d){case Ve.KHR_MATERIALS_UNLIT:r[d]=new nS;break;case Ve.KHR_DRACO_MESH_COMPRESSION:r[d]=new yS(o,this.dracoLoader);break;case Ve.KHR_TEXTURE_TRANSFORM:r[d]=new wS;break;case Ve.KHR_MESH_QUANTIZATION:r[d]=new SS;break;default:h.indexOf(d)>=0&&a[d]===void 0&&console.warn('THREE.GLTFLoader: Unknown extension "'+d+'".')}}c.setExtensions(r),c.setPlugins(a),c.parse(n,s)}parseAsync(e,t){const n=this;return new Promise(function(s,o){n.parse(e,t,s,o)})}}function eS(){let i={};return{get:function(e){return i[e]},add:function(e,t){i[e]=t},remove:function(e){delete i[e]},removeAll:function(){i={}}}}const Ve={KHR_BINARY_GLTF:"KHR_binary_glTF",KHR_DRACO_MESH_COMPRESSION:"KHR_draco_mesh_compression",KHR_LIGHTS_PUNCTUAL:"KHR_lights_punctual",KHR_MATERIALS_CLEARCOAT:"KHR_materials_clearcoat",KHR_MATERIALS_DISPERSION:"KHR_materials_dispersion",KHR_MATERIALS_IOR:"KHR_materials_ior",KHR_MATERIALS_SHEEN:"KHR_materials_sheen",KHR_MATERIALS_SPECULAR:"KHR_materials_specular",KHR_MATERIALS_TRANSMISSION:"KHR_materials_transmission",KHR_MATERIALS_IRIDESCENCE:"KHR_materials_iridescence",KHR_MATERIALS_ANISOTROPY:"KHR_materials_anisotropy",KHR_MATERIALS_UNLIT:"KHR_materials_unlit",KHR_MATERIALS_VOLUME:"KHR_materials_volume",KHR_TEXTURE_BASISU:"KHR_texture_basisu",KHR_TEXTURE_TRANSFORM:"KHR_texture_transform",KHR_MESH_QUANTIZATION:"KHR_mesh_quantization",KHR_MATERIALS_EMISSIVE_STRENGTH:"KHR_materials_emissive_strength",EXT_MATERIALS_BUMP:"EXT_materials_bump",EXT_TEXTURE_WEBP:"EXT_texture_webp",EXT_TEXTURE_AVIF:"EXT_texture_avif",EXT_MESHOPT_COMPRESSION:"EXT_meshopt_compression",EXT_MESH_GPU_INSTANCING:"EXT_mesh_gpu_instancing"};class tS{constructor(e){this.parser=e,this.name=Ve.KHR_LIGHTS_PUNCTUAL,this.cache={refs:{},uses:{}}}_markDefs(){const e=this.parser,t=this.parser.json.nodes||[];for(let n=0,s=t.length;n<s;n++){const o=t[n];o.extensions&&o.extensions[this.name]&&o.extensions[this.name].light!==void 0&&e._addNodeRef(this.cache,o.extensions[this.name].light)}}_loadLight(e){const t=this.parser,n="light:"+e;let s=t.cache.get(n);if(s)return s;const o=t.json,l=((o.extensions&&o.extensions[this.name]||{}).lights||[])[e];let c;const u=new oe(16777215);l.color!==void 0&&u.setRGB(l.color[0],l.color[1],l.color[2],an);const d=l.range!==void 0?l.range:0;switch(l.type){case"directional":c=new Ic(u),c.target.position.set(0,0,-1),c.add(c.target);break;case"point":c=new Bg(u),c.distance=d;break;case"spot":c=new Ug(u),c.distance=d,l.spot=l.spot||{},l.spot.innerConeAngle=l.spot.innerConeAngle!==void 0?l.spot.innerConeAngle:0,l.spot.outerConeAngle=l.spot.outerConeAngle!==void 0?l.spot.outerConeAngle:Math.PI/4,c.angle=l.spot.outerConeAngle,c.penumbra=1-l.spot.innerConeAngle/l.spot.outerConeAngle,c.target.position.set(0,0,-1),c.add(c.target);break;default:throw new Error("THREE.GLTFLoader: Unexpected light type: "+l.type)}return c.position.set(0,0,0),c.decay=2,fi(c,l),l.intensity!==void 0&&(c.intensity=l.intensity),c.name=t.createUniqueName(l.name||"light_"+e),s=Promise.resolve(c),t.cache.add(n,s),s}getDependency(e,t){if(e==="light")return this._loadLight(t)}createNodeAttachment(e){const t=this,n=this.parser,o=n.json.nodes[e],a=(o.extensions&&o.extensions[this.name]||{}).light;return a===void 0?null:this._loadLight(a).then(function(l){return n._getNodeRef(t.cache,a,l)})}}class nS{constructor(){this.name=Ve.KHR_MATERIALS_UNLIT}getMaterialType(){return ti}extendParams(e,t,n){const s=[];e.color=new oe(1,1,1),e.opacity=1;const o=t.pbrMetallicRoughness;if(o){if(Array.isArray(o.baseColorFactor)){const r=o.baseColorFactor;e.color.setRGB(r[0],r[1],r[2],an),e.opacity=r[3]}o.baseColorTexture!==void 0&&s.push(n.assignTexture(e,"map",o.baseColorTexture,Ut))}return Promise.all(s)}}class iS{constructor(e){this.parser=e,this.name=Ve.KHR_MATERIALS_EMISSIVE_STRENGTH}extendMaterialParams(e,t){const s=this.parser.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();const o=s.extensions[this.name].emissiveStrength;return o!==void 0&&(t.emissiveIntensity=o),Promise.resolve()}}class sS{constructor(e){this.parser=e,this.name=Ve.KHR_MATERIALS_CLEARCOAT}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:ni}extendMaterialParams(e,t){const n=this.parser,s=n.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();const o=[],r=s.extensions[this.name];if(r.clearcoatFactor!==void 0&&(t.clearcoat=r.clearcoatFactor),r.clearcoatTexture!==void 0&&o.push(n.assignTexture(t,"clearcoatMap",r.clearcoatTexture)),r.clearcoatRoughnessFactor!==void 0&&(t.clearcoatRoughness=r.clearcoatRoughnessFactor),r.clearcoatRoughnessTexture!==void 0&&o.push(n.assignTexture(t,"clearcoatRoughnessMap",r.clearcoatRoughnessTexture)),r.clearcoatNormalTexture!==void 0&&(o.push(n.assignTexture(t,"clearcoatNormalMap",r.clearcoatNormalTexture)),r.clearcoatNormalTexture.scale!==void 0)){const a=r.clearcoatNormalTexture.scale;t.clearcoatNormalScale=new ge(a,a)}return Promise.all(o)}}class oS{constructor(e){this.parser=e,this.name=Ve.KHR_MATERIALS_DISPERSION}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:ni}extendMaterialParams(e,t){const s=this.parser.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();const o=s.extensions[this.name];return t.dispersion=o.dispersion!==void 0?o.dispersion:0,Promise.resolve()}}class rS{constructor(e){this.parser=e,this.name=Ve.KHR_MATERIALS_IRIDESCENCE}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:ni}extendMaterialParams(e,t){const n=this.parser,s=n.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();const o=[],r=s.extensions[this.name];return r.iridescenceFactor!==void 0&&(t.iridescence=r.iridescenceFactor),r.iridescenceTexture!==void 0&&o.push(n.assignTexture(t,"iridescenceMap",r.iridescenceTexture)),r.iridescenceIor!==void 0&&(t.iridescenceIOR=r.iridescenceIor),t.iridescenceThicknessRange===void 0&&(t.iridescenceThicknessRange=[100,400]),r.iridescenceThicknessMinimum!==void 0&&(t.iridescenceThicknessRange[0]=r.iridescenceThicknessMinimum),r.iridescenceThicknessMaximum!==void 0&&(t.iridescenceThicknessRange[1]=r.iridescenceThicknessMaximum),r.iridescenceThicknessTexture!==void 0&&o.push(n.assignTexture(t,"iridescenceThicknessMap",r.iridescenceThicknessTexture)),Promise.all(o)}}class aS{constructor(e){this.parser=e,this.name=Ve.KHR_MATERIALS_SHEEN}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:ni}extendMaterialParams(e,t){const n=this.parser,s=n.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();const o=[];t.sheenColor=new oe(0,0,0),t.sheenRoughness=0,t.sheen=1;const r=s.extensions[this.name];if(r.sheenColorFactor!==void 0){const a=r.sheenColorFactor;t.sheenColor.setRGB(a[0],a[1],a[2],an)}return r.sheenRoughnessFactor!==void 0&&(t.sheenRoughness=r.sheenRoughnessFactor),r.sheenColorTexture!==void 0&&o.push(n.assignTexture(t,"sheenColorMap",r.sheenColorTexture,Ut)),r.sheenRoughnessTexture!==void 0&&o.push(n.assignTexture(t,"sheenRoughnessMap",r.sheenRoughnessTexture)),Promise.all(o)}}class lS{constructor(e){this.parser=e,this.name=Ve.KHR_MATERIALS_TRANSMISSION}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:ni}extendMaterialParams(e,t){const n=this.parser,s=n.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();const o=[],r=s.extensions[this.name];return r.transmissionFactor!==void 0&&(t.transmission=r.transmissionFactor),r.transmissionTexture!==void 0&&o.push(n.assignTexture(t,"transmissionMap",r.transmissionTexture)),Promise.all(o)}}class cS{constructor(e){this.parser=e,this.name=Ve.KHR_MATERIALS_VOLUME}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:ni}extendMaterialParams(e,t){const n=this.parser,s=n.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();const o=[],r=s.extensions[this.name];t.thickness=r.thicknessFactor!==void 0?r.thicknessFactor:0,r.thicknessTexture!==void 0&&o.push(n.assignTexture(t,"thicknessMap",r.thicknessTexture)),t.attenuationDistance=r.attenuationDistance||1/0;const a=r.attenuationColor||[1,1,1];return t.attenuationColor=new oe().setRGB(a[0],a[1],a[2],an),Promise.all(o)}}class uS{constructor(e){this.parser=e,this.name=Ve.KHR_MATERIALS_IOR}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:ni}extendMaterialParams(e,t){const s=this.parser.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();const o=s.extensions[this.name];return t.ior=o.ior!==void 0?o.ior:1.5,Promise.resolve()}}class dS{constructor(e){this.parser=e,this.name=Ve.KHR_MATERIALS_SPECULAR}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:ni}extendMaterialParams(e,t){const n=this.parser,s=n.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();const o=[],r=s.extensions[this.name];t.specularIntensity=r.specularFactor!==void 0?r.specularFactor:1,r.specularTexture!==void 0&&o.push(n.assignTexture(t,"specularIntensityMap",r.specularTexture));const a=r.specularColorFactor||[1,1,1];return t.specularColor=new oe().setRGB(a[0],a[1],a[2],an),r.specularColorTexture!==void 0&&o.push(n.assignTexture(t,"specularColorMap",r.specularColorTexture,Ut)),Promise.all(o)}}class hS{constructor(e){this.parser=e,this.name=Ve.EXT_MATERIALS_BUMP}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:ni}extendMaterialParams(e,t){const n=this.parser,s=n.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();const o=[],r=s.extensions[this.name];return t.bumpScale=r.bumpFactor!==void 0?r.bumpFactor:1,r.bumpTexture!==void 0&&o.push(n.assignTexture(t,"bumpMap",r.bumpTexture)),Promise.all(o)}}class fS{constructor(e){this.parser=e,this.name=Ve.KHR_MATERIALS_ANISOTROPY}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:ni}extendMaterialParams(e,t){const n=this.parser,s=n.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();const o=[],r=s.extensions[this.name];return r.anisotropyStrength!==void 0&&(t.anisotropy=r.anisotropyStrength),r.anisotropyRotation!==void 0&&(t.anisotropyRotation=r.anisotropyRotation),r.anisotropyTexture!==void 0&&o.push(n.assignTexture(t,"anisotropyMap",r.anisotropyTexture)),Promise.all(o)}}class pS{constructor(e){this.parser=e,this.name=Ve.KHR_TEXTURE_BASISU}loadTexture(e){const t=this.parser,n=t.json,s=n.textures[e];if(!s.extensions||!s.extensions[this.name])return null;const o=s.extensions[this.name],r=t.options.ktx2Loader;if(!r){if(n.extensionsRequired&&n.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setKTX2Loader must be called before loading KTX2 textures");return null}return t.loadTextureImage(e,o.source,r)}}class mS{constructor(e){this.parser=e,this.name=Ve.EXT_TEXTURE_WEBP,this.isSupported=null}loadTexture(e){const t=this.name,n=this.parser,s=n.json,o=s.textures[e];if(!o.extensions||!o.extensions[t])return null;const r=o.extensions[t],a=s.images[r.source];let l=n.textureLoader;if(a.uri){const c=n.options.manager.getHandler(a.uri);c!==null&&(l=c)}return this.detectSupport().then(function(c){if(c)return n.loadTextureImage(e,r.source,l);if(s.extensionsRequired&&s.extensionsRequired.indexOf(t)>=0)throw new Error("THREE.GLTFLoader: WebP required by asset but unsupported.");return n.loadTexture(e)})}detectSupport(){return this.isSupported||(this.isSupported=new Promise(function(e){const t=new Image;t.src="data:image/webp;base64,UklGRiIAAABXRUJQVlA4IBYAAAAwAQCdASoBAAEADsD+JaQAA3AAAAAA",t.onload=t.onerror=function(){e(t.height===1)}})),this.isSupported}}class gS{constructor(e){this.parser=e,this.name=Ve.EXT_TEXTURE_AVIF,this.isSupported=null}loadTexture(e){const t=this.name,n=this.parser,s=n.json,o=s.textures[e];if(!o.extensions||!o.extensions[t])return null;const r=o.extensions[t],a=s.images[r.source];let l=n.textureLoader;if(a.uri){const c=n.options.manager.getHandler(a.uri);c!==null&&(l=c)}return this.detectSupport().then(function(c){if(c)return n.loadTextureImage(e,r.source,l);if(s.extensionsRequired&&s.extensionsRequired.indexOf(t)>=0)throw new Error("THREE.GLTFLoader: AVIF required by asset but unsupported.");return n.loadTexture(e)})}detectSupport(){return this.isSupported||(this.isSupported=new Promise(function(e){const t=new Image;t.src="data:image/avif;base64,AAAAIGZ0eXBhdmlmAAAAAGF2aWZtaWYxbWlhZk1BMUIAAADybWV0YQAAAAAAAAAoaGRscgAAAAAAAAAAcGljdAAAAAAAAAAAAAAAAGxpYmF2aWYAAAAADnBpdG0AAAAAAAEAAAAeaWxvYwAAAABEAAABAAEAAAABAAABGgAAABcAAAAoaWluZgAAAAAAAQAAABppbmZlAgAAAAABAABhdjAxQ29sb3IAAAAAamlwcnAAAABLaXBjbwAAABRpc3BlAAAAAAAAAAEAAAABAAAAEHBpeGkAAAAAAwgICAAAAAxhdjFDgQAMAAAAABNjb2xybmNseAACAAIABoAAAAAXaXBtYQAAAAAAAAABAAEEAQKDBAAAAB9tZGF0EgAKCBgABogQEDQgMgkQAAAAB8dSLfI=",t.onload=t.onerror=function(){e(t.height===1)}})),this.isSupported}}class _S{constructor(e){this.name=Ve.EXT_MESHOPT_COMPRESSION,this.parser=e}loadBufferView(e){const t=this.parser.json,n=t.bufferViews[e];if(n.extensions&&n.extensions[this.name]){const s=n.extensions[this.name],o=this.parser.getDependency("buffer",s.buffer),r=this.parser.options.meshoptDecoder;if(!r||!r.supported){if(t.extensionsRequired&&t.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setMeshoptDecoder must be called before loading compressed files");return null}return o.then(function(a){const l=s.byteOffset||0,c=s.byteLength||0,u=s.count,d=s.byteStride,h=new Uint8Array(a,l,c);return r.decodeGltfBufferAsync?r.decodeGltfBufferAsync(u,d,h,s.mode,s.filter).then(function(f){return f.buffer}):r.ready.then(function(){const f=new ArrayBuffer(u*d);return r.decodeGltfBuffer(new Uint8Array(f),u,d,h,s.mode,s.filter),f})})}else return null}}class vS{constructor(e){this.name=Ve.EXT_MESH_GPU_INSTANCING,this.parser=e}createNodeMesh(e){const t=this.parser.json,n=t.nodes[e];if(!n.extensions||!n.extensions[this.name]||n.mesh===void 0)return null;const s=t.meshes[n.mesh];for(const c of s.primitives)if(c.mode!==Pn.TRIANGLES&&c.mode!==Pn.TRIANGLE_STRIP&&c.mode!==Pn.TRIANGLE_FAN&&c.mode!==void 0)return null;const r=n.extensions[this.name].attributes,a=[],l={};for(const c in r)a.push(this.parser.getDependency("accessor",r[c]).then(u=>(l[c]=u,l[c])));return a.length<1?null:(a.push(this.parser.createNodeMesh(e)),Promise.all(a).then(c=>{const u=c.pop(),d=u.isGroup?u.children:[u],h=c[0].count,f=[];for(const _ of d){const g=new Le,m=new b,p=new ft,w=new b(1,1,1),y=new fg(_.geometry,_.material,h);for(let x=0;x<h;x++)l.TRANSLATION&&m.fromBufferAttribute(l.TRANSLATION,x),l.ROTATION&&p.fromBufferAttribute(l.ROTATION,x),l.SCALE&&w.fromBufferAttribute(l.SCALE,x),y.setMatrixAt(x,g.compose(m,p,w));for(const x in l)if(x==="_COLOR_0"){const A=l[x];y.instanceColor=new Pc(A.array,A.itemSize,A.normalized)}else x!=="TRANSLATION"&&x!=="ROTATION"&&x!=="SCALE"&&_.geometry.setAttribute(x,l[x]);pt.prototype.copy.call(y,_),this.parser.assignFinalMaterial(y),f.push(y)}return u.isGroup?(u.clear(),u.add(...f),u):f[0]}))}}const qf="glTF",zo=12,Eh={JSON:1313821514,BIN:5130562};class xS{constructor(e){this.name=Ve.KHR_BINARY_GLTF,this.content=null,this.body=null;const t=new DataView(e,0,zo),n=new TextDecoder;if(this.header={magic:n.decode(new Uint8Array(e.slice(0,4))),version:t.getUint32(4,!0),length:t.getUint32(8,!0)},this.header.magic!==qf)throw new Error("THREE.GLTFLoader: Unsupported glTF-Binary header.");if(this.header.version<2)throw new Error("THREE.GLTFLoader: Legacy binary file detected.");const s=this.header.length-zo,o=new DataView(e,zo);let r=0;for(;r<s;){const a=o.getUint32(r,!0);r+=4;const l=o.getUint32(r,!0);if(r+=4,l===Eh.JSON){const c=new Uint8Array(e,zo+r,a);this.content=n.decode(c)}else if(l===Eh.BIN){const c=zo+r;this.body=e.slice(c,c+a)}r+=a}if(this.content===null)throw new Error("THREE.GLTFLoader: JSON content not found.")}}class yS{constructor(e,t){if(!t)throw new Error("THREE.GLTFLoader: No DRACOLoader instance provided.");this.name=Ve.KHR_DRACO_MESH_COMPRESSION,this.json=e,this.dracoLoader=t,this.dracoLoader.preload()}decodePrimitive(e,t){const n=this.json,s=this.dracoLoader,o=e.extensions[this.name].bufferView,r=e.extensions[this.name].attributes,a={},l={},c={};for(const u in r){const d=Fc[u]||u.toLowerCase();a[d]=r[u]}for(const u in e.attributes){const d=Fc[u]||u.toLowerCase();if(r[u]!==void 0){const h=n.accessors[e.attributes[u]],f=so[h.componentType];c[d]=f.name,l[d]=h.normalized===!0}}return t.getDependency("bufferView",o).then(function(u){return new Promise(function(d,h){s.decodeDracoFile(u,function(f){for(const _ in f.attributes){const g=f.attributes[_],m=l[_];m!==void 0&&(g.normalized=m)}d(f)},a,c,an,h)})})}}class wS{constructor(){this.name=Ve.KHR_TEXTURE_TRANSFORM}extendTexture(e,t){return(t.texCoord===void 0||t.texCoord===e.channel)&&t.offset===void 0&&t.rotation===void 0&&t.scale===void 0||(e=e.clone(),t.texCoord!==void 0&&(e.channel=t.texCoord),t.offset!==void 0&&e.offset.fromArray(t.offset),t.rotation!==void 0&&(e.rotation=t.rotation),t.scale!==void 0&&e.repeat.fromArray(t.scale),e.needsUpdate=!0),e}}class SS{constructor(){this.name=Ve.KHR_MESH_QUANTIZATION}}class jf extends fr{constructor(e,t,n,s){super(e,t,n,s)}copySampleValue_(e){const t=this.resultBuffer,n=this.sampleValues,s=this.valueSize,o=e*s*3+s;for(let r=0;r!==s;r++)t[r]=n[o+r];return t}interpolate_(e,t,n,s){const o=this.resultBuffer,r=this.sampleValues,a=this.valueSize,l=a*2,c=a*3,u=s-t,d=(n-t)/u,h=d*d,f=h*d,_=e*c,g=_-c,m=-2*f+3*h,p=f-h,w=1-m,y=p-h+d;for(let x=0;x!==a;x++){const A=r[g+x+a],T=r[g+x+l]*u,P=r[_+x+a],L=r[_+x]*u;o[x]=w*A+y*T+m*P+p*L}return o}}const MS=new ft;class ES extends jf{interpolate_(e,t,n,s){const o=super.interpolate_(e,t,n,s);return MS.fromArray(o).normalize().toArray(o),o}}const Pn={POINTS:0,LINES:1,LINE_LOOP:2,LINE_STRIP:3,TRIANGLES:4,TRIANGLE_STRIP:5,TRIANGLE_FAN:6},so={5120:Int8Array,5121:Uint8Array,5122:Int16Array,5123:Uint16Array,5125:Uint32Array,5126:Float32Array},bh={9728:rn,9729:Sn,9984:Wh,9985:fa,9986:Go,9987:mi},Th={33071:Fi,33648:ba,10497:ho},Ul={SCALAR:1,VEC2:2,VEC3:3,VEC4:4,MAT2:4,MAT3:9,MAT4:16},Fc={POSITION:"position",NORMAL:"normal",TANGENT:"tangent",TEXCOORD_0:"uv",TEXCOORD_1:"uv1",TEXCOORD_2:"uv2",TEXCOORD_3:"uv3",COLOR_0:"color",WEIGHTS_0:"skinWeight",JOINTS_0:"skinIndex"},Di={scale:"scale",translation:"position",rotation:"quaternion",weights:"morphTargetInfluences"},bS={CUBICSPLINE:void 0,LINEAR:sr,STEP:ir},Fl={OPAQUE:"OPAQUE",MASK:"MASK",BLEND:"BLEND"};function TS(i){return i.DefaultMaterial===void 0&&(i.DefaultMaterial=new So({color:16777215,emissive:0,metalness:1,roughness:1,transparent:!1,depthTest:!0,side:yi})),i.DefaultMaterial}function ns(i,e,t){for(const n in t.extensions)i[n]===void 0&&(e.userData.gltfExtensions=e.userData.gltfExtensions||{},e.userData.gltfExtensions[n]=t.extensions[n])}function fi(i,e){e.extras!==void 0&&(typeof e.extras=="object"?Object.assign(i.userData,e.extras):console.warn("THREE.GLTFLoader: Ignoring primitive type .extras, "+e.extras))}function AS(i,e,t){let n=!1,s=!1,o=!1;for(let c=0,u=e.length;c<u;c++){const d=e[c];if(d.POSITION!==void 0&&(n=!0),d.NORMAL!==void 0&&(s=!0),d.COLOR_0!==void 0&&(o=!0),n&&s&&o)break}if(!n&&!s&&!o)return Promise.resolve(i);const r=[],a=[],l=[];for(let c=0,u=e.length;c<u;c++){const d=e[c];if(n){const h=d.POSITION!==void 0?t.getDependency("accessor",d.POSITION):i.attributes.position;r.push(h)}if(s){const h=d.NORMAL!==void 0?t.getDependency("accessor",d.NORMAL):i.attributes.normal;a.push(h)}if(o){const h=d.COLOR_0!==void 0?t.getDependency("accessor",d.COLOR_0):i.attributes.color;l.push(h)}}return Promise.all([Promise.all(r),Promise.all(a),Promise.all(l)]).then(function(c){const u=c[0],d=c[1],h=c[2];return n&&(i.morphAttributes.position=u),s&&(i.morphAttributes.normal=d),o&&(i.morphAttributes.color=h),i.morphTargetsRelative=!0,i})}function CS(i,e){if(i.updateMorphTargets(),e.weights!==void 0)for(let t=0,n=e.weights.length;t<n;t++)i.morphTargetInfluences[t]=e.weights[t];if(e.extras&&Array.isArray(e.extras.targetNames)){const t=e.extras.targetNames;if(i.morphTargetInfluences.length===t.length){i.morphTargetDictionary={};for(let n=0,s=t.length;n<s;n++)i.morphTargetDictionary[t[n]]=n}else console.warn("THREE.GLTFLoader: Invalid extras.targetNames length. Ignoring names.")}}function RS(i){let e;const t=i.extensions&&i.extensions[Ve.KHR_DRACO_MESH_COMPRESSION];if(t?e="draco:"+t.bufferView+":"+t.indices+":"+Bl(t.attributes):e=i.indices+":"+Bl(i.attributes)+":"+i.mode,i.targets!==void 0)for(let n=0,s=i.targets.length;n<s;n++)e+=":"+Bl(i.targets[n]);return e}function Bl(i){let e="";const t=Object.keys(i).sort();for(let n=0,s=t.length;n<s;n++)e+=t[n]+":"+i[t[n]]+";";return e}function Bc(i){switch(i){case Int8Array:return 1/127;case Uint8Array:return 1/255;case Int16Array:return 1/32767;case Uint16Array:return 1/65535;default:throw new Error("THREE.GLTFLoader: Unsupported normalized accessor component type.")}}function PS(i){return i.search(/\.jpe?g($|\?)/i)>0||i.search(/^data\:image\/jpeg/)===0?"image/jpeg":i.search(/\.webp($|\?)/i)>0||i.search(/^data\:image\/webp/)===0?"image/webp":i.search(/\.ktx2($|\?)/i)>0||i.search(/^data\:image\/ktx2/)===0?"image/ktx2":"image/png"}const DS=new Le;class LS{constructor(e={},t={}){this.json=e,this.extensions={},this.plugins={},this.options=t,this.cache=new eS,this.associations=new Map,this.primitiveCache={},this.nodeCache={},this.meshCache={refs:{},uses:{}},this.cameraCache={refs:{},uses:{}},this.lightCache={refs:{},uses:{}},this.sourceCache={},this.textureCache={},this.nodeNamesUsed={};let n=!1,s=-1,o=!1,r=-1;if(typeof navigator<"u"){const a=navigator.userAgent;n=/^((?!chrome|android).)*safari/i.test(a)===!0;const l=a.match(/Version\/(\d+)/);s=n&&l?parseInt(l[1],10):-1,o=a.indexOf("Firefox")>-1,r=o?a.match(/Firefox\/([0-9]+)\./)[1]:-1}typeof createImageBitmap>"u"||n&&s<17||o&&r<98?this.textureLoader=new Ng(this.options.manager):this.textureLoader=new Gg(this.options.manager),this.textureLoader.setCrossOrigin(this.options.crossOrigin),this.textureLoader.setRequestHeader(this.options.requestHeader),this.fileLoader=new ru(this.options.manager),this.fileLoader.setResponseType("arraybuffer"),this.options.crossOrigin==="use-credentials"&&this.fileLoader.setWithCredentials(!0)}setExtensions(e){this.extensions=e}setPlugins(e){this.plugins=e}parse(e,t){const n=this,s=this.json,o=this.extensions;this.cache.removeAll(),this.nodeCache={},this._invokeAll(function(r){return r._markDefs&&r._markDefs()}),Promise.all(this._invokeAll(function(r){return r.beforeRoot&&r.beforeRoot()})).then(function(){return Promise.all([n.getDependencies("scene"),n.getDependencies("animation"),n.getDependencies("camera")])}).then(function(r){const a={scene:r[0][s.scene||0],scenes:r[0],animations:r[1],cameras:r[2],asset:s.asset,parser:n,userData:{}};return ns(o,a,s),fi(a,s),Promise.all(n._invokeAll(function(l){return l.afterRoot&&l.afterRoot(a)})).then(function(){for(const l of a.scenes)l.updateMatrixWorld();e(a)})}).catch(t)}_markDefs(){const e=this.json.nodes||[],t=this.json.skins||[],n=this.json.meshes||[];for(let s=0,o=t.length;s<o;s++){const r=t[s].joints;for(let a=0,l=r.length;a<l;a++)e[r[a]].isBone=!0}for(let s=0,o=e.length;s<o;s++){const r=e[s];r.mesh!==void 0&&(this._addNodeRef(this.meshCache,r.mesh),r.skin!==void 0&&(n[r.mesh].isSkinnedMesh=!0)),r.camera!==void 0&&this._addNodeRef(this.cameraCache,r.camera)}}_addNodeRef(e,t){t!==void 0&&(e.refs[t]===void 0&&(e.refs[t]=e.uses[t]=0),e.refs[t]++)}_getNodeRef(e,t,n){if(e.refs[t]<=1)return n;const s=n.clone(),o=(r,a)=>{const l=this.associations.get(r);l!=null&&this.associations.set(a,l);for(const[c,u]of r.children.entries())o(u,a.children[c])};return o(n,s),s.name+="_instance_"+e.uses[t]++,s}_invokeOne(e){const t=Object.values(this.plugins);t.push(this);for(let n=0;n<t.length;n++){const s=e(t[n]);if(s)return s}return null}_invokeAll(e){const t=Object.values(this.plugins);t.unshift(this);const n=[];for(let s=0;s<t.length;s++){const o=e(t[s]);o&&n.push(o)}return n}getDependency(e,t){const n=e+":"+t;let s=this.cache.get(n);if(!s){switch(e){case"scene":s=this.loadScene(t);break;case"node":s=this._invokeOne(function(o){return o.loadNode&&o.loadNode(t)});break;case"mesh":s=this._invokeOne(function(o){return o.loadMesh&&o.loadMesh(t)});break;case"accessor":s=this.loadAccessor(t);break;case"bufferView":s=this._invokeOne(function(o){return o.loadBufferView&&o.loadBufferView(t)});break;case"buffer":s=this.loadBuffer(t);break;case"material":s=this._invokeOne(function(o){return o.loadMaterial&&o.loadMaterial(t)});break;case"texture":s=this._invokeOne(function(o){return o.loadTexture&&o.loadTexture(t)});break;case"skin":s=this.loadSkin(t);break;case"animation":s=this._invokeOne(function(o){return o.loadAnimation&&o.loadAnimation(t)});break;case"camera":s=this.loadCamera(t);break;default:if(s=this._invokeOne(function(o){return o!=this&&o.getDependency&&o.getDependency(e,t)}),!s)throw new Error("Unknown type: "+e);break}this.cache.add(n,s)}return s}getDependencies(e){let t=this.cache.get(e);if(!t){const n=this,s=this.json[e+(e==="mesh"?"es":"s")]||[];t=Promise.all(s.map(function(o,r){return n.getDependency(e,r)})),this.cache.add(e,t)}return t}loadBuffer(e){const t=this.json.buffers[e],n=this.fileLoader;if(t.type&&t.type!=="arraybuffer")throw new Error("THREE.GLTFLoader: "+t.type+" buffer type is not supported.");if(t.uri===void 0&&e===0)return Promise.resolve(this.extensions[Ve.KHR_BINARY_GLTF].body);const s=this.options;return new Promise(function(o,r){n.load(Zo.resolveURL(t.uri,s.path),o,void 0,function(){r(new Error('THREE.GLTFLoader: Failed to load buffer "'+t.uri+'".'))})})}loadBufferView(e){const t=this.json.bufferViews[e];return this.getDependency("buffer",t.buffer).then(function(n){const s=t.byteLength||0,o=t.byteOffset||0;return n.slice(o,o+s)})}loadAccessor(e){const t=this,n=this.json,s=this.json.accessors[e];if(s.bufferView===void 0&&s.sparse===void 0){const r=Ul[s.type],a=so[s.componentType],l=s.normalized===!0,c=new a(s.count*r);return Promise.resolve(new Tt(c,r,l))}const o=[];return s.bufferView!==void 0?o.push(this.getDependency("bufferView",s.bufferView)):o.push(null),s.sparse!==void 0&&(o.push(this.getDependency("bufferView",s.sparse.indices.bufferView)),o.push(this.getDependency("bufferView",s.sparse.values.bufferView))),Promise.all(o).then(function(r){const a=r[0],l=Ul[s.type],c=so[s.componentType],u=c.BYTES_PER_ELEMENT,d=u*l,h=s.byteOffset||0,f=s.bufferView!==void 0?n.bufferViews[s.bufferView].byteStride:void 0,_=s.normalized===!0;let g,m;if(f&&f!==d){const p=Math.floor(h/f),w="InterleavedBuffer:"+s.bufferView+":"+s.componentType+":"+p+":"+s.count;let y=t.cache.get(w);y||(g=new c(a,p*f,s.count*f/u),y=new ff(g,f/u),t.cache.add(w,y)),m=new In(y,l,h%f/u,_)}else a===null?g=new c(s.count*l):g=new c(a,h,s.count*l),m=new Tt(g,l,_);if(s.sparse!==void 0){const p=Ul.SCALAR,w=so[s.sparse.indices.componentType],y=s.sparse.indices.byteOffset||0,x=s.sparse.values.byteOffset||0,A=new w(r[1],y,s.sparse.count*p),T=new c(r[2],x,s.sparse.count*l);a!==null&&(m=new Tt(m.array.slice(),m.itemSize,m.normalized)),m.normalized=!1;for(let P=0,L=A.length;P<L;P++){const M=A[P];if(m.setX(M,T[P*l]),l>=2&&m.setY(M,T[P*l+1]),l>=3&&m.setZ(M,T[P*l+2]),l>=4&&m.setW(M,T[P*l+3]),l>=5)throw new Error("THREE.GLTFLoader: Unsupported itemSize in sparse BufferAttribute.")}m.normalized=_}return m})}loadTexture(e){const t=this.json,n=this.options,o=t.textures[e].source,r=t.images[o];let a=this.textureLoader;if(r.uri){const l=n.manager.getHandler(r.uri);l!==null&&(a=l)}return this.loadTextureImage(e,o,a)}loadTextureImage(e,t,n){const s=this,o=this.json,r=o.textures[e],a=o.images[t],l=(a.uri||a.bufferView)+":"+r.sampler;if(this.textureCache[l])return this.textureCache[l];const c=this.loadImageSource(t,n).then(function(u){u.flipY=!1,u.name=r.name||a.name||"",u.name===""&&typeof a.uri=="string"&&a.uri.startsWith("data:image/")===!1&&(u.name=a.uri);const h=(o.samplers||{})[r.sampler]||{};return u.magFilter=bh[h.magFilter]||Sn,u.minFilter=bh[h.minFilter]||mi,u.wrapS=Th[h.wrapS]||ho,u.wrapT=Th[h.wrapT]||ho,u.generateMipmaps=!u.isCompressedTexture&&u.minFilter!==rn&&u.minFilter!==Sn,s.associations.set(u,{textures:e}),u}).catch(function(){return null});return this.textureCache[l]=c,c}loadImageSource(e,t){const n=this,s=this.json,o=this.options;if(this.sourceCache[e]!==void 0)return this.sourceCache[e].then(d=>d.clone());const r=s.images[e],a=self.URL||self.webkitURL;let l=r.uri||"",c=!1;if(r.bufferView!==void 0)l=n.getDependency("bufferView",r.bufferView).then(function(d){c=!0;const h=new Blob([d],{type:r.mimeType});return l=a.createObjectURL(h),l});else if(r.uri===void 0)throw new Error("THREE.GLTFLoader: Image "+e+" is missing URI and bufferView");const u=Promise.resolve(l).then(function(d){return new Promise(function(h,f){let _=h;t.isImageBitmapLoader===!0&&(_=function(g){const m=new Ft(g);m.needsUpdate=!0,h(m)}),t.load(Zo.resolveURL(d,o.path),_,void 0,f)})}).then(function(d){return c===!0&&a.revokeObjectURL(l),fi(d,r),d.userData.mimeType=r.mimeType||PS(r.uri),d}).catch(function(d){throw console.error("THREE.GLTFLoader: Couldn't load texture",l),d});return this.sourceCache[e]=u,u}assignTexture(e,t,n,s){const o=this;return this.getDependency("texture",n.index).then(function(r){if(!r)return null;if(n.texCoord!==void 0&&n.texCoord>0&&(r=r.clone(),r.channel=n.texCoord),o.extensions[Ve.KHR_TEXTURE_TRANSFORM]){const a=n.extensions!==void 0?n.extensions[Ve.KHR_TEXTURE_TRANSFORM]:void 0;if(a){const l=o.associations.get(r);r=o.extensions[Ve.KHR_TEXTURE_TRANSFORM].extendTexture(r,a),o.associations.set(r,l)}}return s!==void 0&&(r.colorSpace=s),e[t]=r,r})}assignFinalMaterial(e){const t=e.geometry;let n=e.material;const s=t.attributes.tangent===void 0,o=t.attributes.color!==void 0,r=t.attributes.normal===void 0;if(e.isPoints){const a="PointsMaterial:"+n.uuid;let l=this.cache.get(a);l||(l=new Xs,_n.prototype.copy.call(l,n),l.color.copy(n.color),l.map=n.map,l.sizeAttenuation=!1,this.cache.add(a,l)),n=l}else if(e.isLine){const a="LineBasicMaterial:"+n.uuid;let l=this.cache.get(a);l||(l=new ms,_n.prototype.copy.call(l,n),l.color.copy(n.color),l.map=n.map,this.cache.add(a,l)),n=l}if(s||o||r){let a="ClonedMaterial:"+n.uuid+":";s&&(a+="derivative-tangents:"),o&&(a+="vertex-colors:"),r&&(a+="flat-shading:");let l=this.cache.get(a);l||(l=n.clone(),o&&(l.vertexColors=!0),r&&(l.flatShading=!0),s&&(l.normalScale&&(l.normalScale.y*=-1),l.clearcoatNormalScale&&(l.clearcoatNormalScale.y*=-1)),this.cache.add(a,l),this.associations.set(l,this.associations.get(n))),n=l}e.material=n}getMaterialType(){return So}loadMaterial(e){const t=this,n=this.json,s=this.extensions,o=n.materials[e];let r;const a={},l=o.extensions||{},c=[];if(l[Ve.KHR_MATERIALS_UNLIT]){const d=s[Ve.KHR_MATERIALS_UNLIT];r=d.getMaterialType(),c.push(d.extendParams(a,o,t))}else{const d=o.pbrMetallicRoughness||{};if(a.color=new oe(1,1,1),a.opacity=1,Array.isArray(d.baseColorFactor)){const h=d.baseColorFactor;a.color.setRGB(h[0],h[1],h[2],an),a.opacity=h[3]}d.baseColorTexture!==void 0&&c.push(t.assignTexture(a,"map",d.baseColorTexture,Ut)),a.metalness=d.metallicFactor!==void 0?d.metallicFactor:1,a.roughness=d.roughnessFactor!==void 0?d.roughnessFactor:1,d.metallicRoughnessTexture!==void 0&&(c.push(t.assignTexture(a,"metalnessMap",d.metallicRoughnessTexture)),c.push(t.assignTexture(a,"roughnessMap",d.metallicRoughnessTexture))),r=this._invokeOne(function(h){return h.getMaterialType&&h.getMaterialType(e)}),c.push(Promise.all(this._invokeAll(function(h){return h.extendMaterialParams&&h.extendMaterialParams(e,a)})))}o.doubleSided===!0&&(a.side=pn);const u=o.alphaMode||Fl.OPAQUE;if(u===Fl.BLEND?(a.transparent=!0,a.depthWrite=!1):(a.transparent=!1,u===Fl.MASK&&(a.alphaTest=o.alphaCutoff!==void 0?o.alphaCutoff:.5)),o.normalTexture!==void 0&&r!==ti&&(c.push(t.assignTexture(a,"normalMap",o.normalTexture)),a.normalScale=new ge(1,1),o.normalTexture.scale!==void 0)){const d=o.normalTexture.scale;a.normalScale.set(d,d)}if(o.occlusionTexture!==void 0&&r!==ti&&(c.push(t.assignTexture(a,"aoMap",o.occlusionTexture)),o.occlusionTexture.strength!==void 0&&(a.aoMapIntensity=o.occlusionTexture.strength)),o.emissiveFactor!==void 0&&r!==ti){const d=o.emissiveFactor;a.emissive=new oe().setRGB(d[0],d[1],d[2],an)}return o.emissiveTexture!==void 0&&r!==ti&&c.push(t.assignTexture(a,"emissiveMap",o.emissiveTexture,Ut)),Promise.all(c).then(function(){const d=new r(a);return o.name&&(d.name=o.name),fi(d,o),t.associations.set(d,{materials:e}),o.extensions&&ns(s,d,o),d})}createUniqueName(e){const t=lt.sanitizeNodeName(e||"");return t in this.nodeNamesUsed?t+"_"+ ++this.nodeNamesUsed[t]:(this.nodeNamesUsed[t]=0,t)}loadGeometries(e){const t=this,n=this.extensions,s=this.primitiveCache;function o(a){return n[Ve.KHR_DRACO_MESH_COMPRESSION].decodePrimitive(a,t).then(function(l){return Ah(l,a,t)})}const r=[];for(let a=0,l=e.length;a<l;a++){const c=e[a],u=RS(c),d=s[u];if(d)r.push(d.promise);else{let h;c.extensions&&c.extensions[Ve.KHR_DRACO_MESH_COMPRESSION]?h=o(c):h=Ah(new vt,c,t),s[u]={primitive:c,promise:h},r.push(h)}}return Promise.all(r)}loadMesh(e){const t=this,n=this.json,s=this.extensions,o=n.meshes[e],r=o.primitives,a=[];for(let l=0,c=r.length;l<c;l++){const u=r[l].material===void 0?TS(this.cache):this.getDependency("material",r[l].material);a.push(u)}return a.push(t.loadGeometries(r)),Promise.all(a).then(function(l){const c=l.slice(0,l.length-1),u=l[l.length-1],d=[];for(let f=0,_=u.length;f<_;f++){const g=u[f],m=r[f];let p;const w=c[f];if(m.mode===Pn.TRIANGLES||m.mode===Pn.TRIANGLE_STRIP||m.mode===Pn.TRIANGLE_FAN||m.mode===void 0)p=o.isSkinnedMesh===!0?new ug(g,w):new re(g,w),p.isSkinnedMesh===!0&&p.normalizeSkinWeights(),m.mode===Pn.TRIANGLE_STRIP?p.geometry=Mh(p.geometry,ef):m.mode===Pn.TRIANGLE_FAN&&(p.geometry=Mh(p.geometry,Cc));else if(m.mode===Pn.LINES)p=new Dc(g,w);else if(m.mode===Pn.LINE_STRIP)p=new Vn(g,w);else if(m.mode===Pn.LINE_LOOP)p=new gg(g,w);else if(m.mode===Pn.POINTS)p=new xa(g,w);else throw new Error("THREE.GLTFLoader: Primitive mode unsupported: "+m.mode);Object.keys(p.geometry.morphAttributes).length>0&&CS(p,o),p.name=t.createUniqueName(o.name||"mesh_"+e),fi(p,o),m.extensions&&ns(s,p,m),t.assignFinalMaterial(p),d.push(p)}for(let f=0,_=d.length;f<_;f++)t.associations.set(d[f],{meshes:e,primitives:f});if(d.length===1)return o.extensions&&ns(s,d[0],o),d[0];const h=new Mn;o.extensions&&ns(s,h,o),t.associations.set(h,{meshes:e});for(let f=0,_=d.length;f<_;f++)h.add(d[f]);return h})}loadCamera(e){let t;const n=this.json.cameras[e],s=n[n.type];if(!s){console.warn("THREE.GLTFLoader: Missing camera parameters.");return}return n.type==="perspective"?t=new sn(_i.radToDeg(s.yfov),s.aspectRatio||1,s.znear||1,s.zfar||2e6):n.type==="orthographic"&&(t=new pr(-s.xmag,s.xmag,s.ymag,-s.ymag,s.znear,s.zfar)),n.name&&(t.name=this.createUniqueName(n.name)),fi(t,n),Promise.resolve(t)}loadSkin(e){const t=this.json.skins[e],n=[];for(let s=0,o=t.joints.length;s<o;s++)n.push(this._loadNodeShallow(t.joints[s]));return t.inverseBindMatrices!==void 0?n.push(this.getDependency("accessor",t.inverseBindMatrices)):n.push(null),Promise.all(n).then(function(s){const o=s.pop(),r=s,a=[],l=[];for(let c=0,u=r.length;c<u;c++){const d=r[c];if(d){a.push(d);const h=new Le;o!==null&&h.fromArray(o.array,c*16),l.push(h)}else console.warn('THREE.GLTFLoader: Joint "%s" could not be found.',t.joints[c])}return new nu(a,l)})}loadAnimation(e){const t=this.json,n=this,s=t.animations[e],o=s.name?s.name:"animation_"+e,r=[],a=[],l=[],c=[],u=[];for(let d=0,h=s.channels.length;d<h;d++){const f=s.channels[d],_=s.samplers[f.sampler],g=f.target,m=g.node,p=s.parameters!==void 0?s.parameters[_.input]:_.input,w=s.parameters!==void 0?s.parameters[_.output]:_.output;g.node!==void 0&&(r.push(this.getDependency("node",m)),a.push(this.getDependency("accessor",p)),l.push(this.getDependency("accessor",w)),c.push(_),u.push(g))}return Promise.all([Promise.all(r),Promise.all(a),Promise.all(l),Promise.all(c),Promise.all(u)]).then(function(d){const h=d[0],f=d[1],_=d[2],g=d[3],m=d[4],p=[];for(let w=0,y=h.length;w<y;w++){const x=h[w],A=f[w],T=_[w],P=g[w],L=m[w];if(x===void 0)continue;x.updateMatrix&&x.updateMatrix();const M=n._createAnimationTracks(x,A,T,P,L);if(M)for(let v=0;v<M.length;v++)p.push(M[v])}return new Ag(o,void 0,p)})}createNodeMesh(e){const t=this.json,n=this,s=t.nodes[e];return s.mesh===void 0?null:n.getDependency("mesh",s.mesh).then(function(o){const r=n._getNodeRef(n.meshCache,s.mesh,o);return s.weights!==void 0&&r.traverse(function(a){if(a.isMesh)for(let l=0,c=s.weights.length;l<c;l++)a.morphTargetInfluences[l]=s.weights[l]}),r})}loadNode(e){const t=this.json,n=this,s=t.nodes[e],o=n._loadNodeShallow(e),r=[],a=s.children||[];for(let c=0,u=a.length;c<u;c++)r.push(n.getDependency("node",a[c]));const l=s.skin===void 0?Promise.resolve(null):n.getDependency("skin",s.skin);return Promise.all([o,Promise.all(r),l]).then(function(c){const u=c[0],d=c[1],h=c[2];h!==null&&u.traverse(function(f){f.isSkinnedMesh&&f.bind(h,DS)});for(let f=0,_=d.length;f<_;f++)u.add(d[f]);return u})}_loadNodeShallow(e){const t=this.json,n=this.extensions,s=this;if(this.nodeCache[e]!==void 0)return this.nodeCache[e];const o=t.nodes[e],r=o.name?s.createUniqueName(o.name):"",a=[],l=s._invokeOne(function(c){return c.createNodeMesh&&c.createNodeMesh(e)});return l&&a.push(l),o.camera!==void 0&&a.push(s.getDependency("camera",o.camera).then(function(c){return s._getNodeRef(s.cameraCache,o.camera,c)})),s._invokeAll(function(c){return c.createNodeAttachment&&c.createNodeAttachment(e)}).forEach(function(c){a.push(c)}),this.nodeCache[e]=Promise.all(a).then(function(c){let u;if(o.isBone===!0?u=new pf:c.length>1?u=new Mn:c.length===1?u=c[0]:u=new pt,u!==c[0])for(let d=0,h=c.length;d<h;d++)u.add(c[d]);if(o.name&&(u.userData.name=o.name,u.name=r),fi(u,o),o.extensions&&ns(n,u,o),o.matrix!==void 0){const d=new Le;d.fromArray(o.matrix),u.applyMatrix4(d)}else o.translation!==void 0&&u.position.fromArray(o.translation),o.rotation!==void 0&&u.quaternion.fromArray(o.rotation),o.scale!==void 0&&u.scale.fromArray(o.scale);return s.associations.has(u)||s.associations.set(u,{}),s.associations.get(u).nodes=e,u}),this.nodeCache[e]}loadScene(e){const t=this.extensions,n=this.json.scenes[e],s=this,o=new Mn;n.name&&(o.name=s.createUniqueName(n.name)),fi(o,n),n.extensions&&ns(t,o,n);const r=n.nodes||[],a=[];for(let l=0,c=r.length;l<c;l++)a.push(s.getDependency("node",r[l]));return Promise.all(a).then(function(l){for(let u=0,d=l.length;u<d;u++)o.add(l[u]);const c=u=>{const d=new Map;for(const[h,f]of s.associations)(h instanceof _n||h instanceof Ft)&&d.set(h,f);return u.traverse(h=>{const f=s.associations.get(h);f!=null&&d.set(h,f)}),d};return s.associations=c(o),o})}_createAnimationTracks(e,t,n,s,o){const r=[],a=e.name?e.name:e.uuid,l=[];Di[o.path]===Di.weights?e.traverse(function(h){h.morphTargetInfluences&&l.push(h.name?h.name:h.uuid)}):l.push(a);let c;switch(Di[o.path]){case Di.weights:c=_o;break;case Di.rotation:c=vo;break;case Di.position:case Di.scale:c=xo;break;default:switch(n.itemSize){case 1:c=_o;break;case 2:case 3:default:c=xo;break}break}const u=s.interpolation!==void 0?bS[s.interpolation]:sr,d=this._getArrayFromAccessor(n);for(let h=0,f=l.length;h<f;h++){const _=new c(l[h]+"."+Di[o.path],t.array,d,u);s.interpolation==="CUBICSPLINE"&&this._createCubicSplineTrackInterpolant(_),r.push(_)}return r}_getArrayFromAccessor(e){let t=e.array;if(e.normalized){const n=Bc(t.constructor),s=new Float32Array(t.length);for(let o=0,r=t.length;o<r;o++)s[o]=t[o]*n;t=s}return t}_createCubicSplineTrackInterpolant(e){e.createInterpolant=function(n){const s=this instanceof vo?ES:jf;return new s(this.times,this.values,this.getValueSize()/3,n)},e.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline=!0}}function IS(i,e,t){const n=e.attributes,s=new On;if(n.POSITION!==void 0){const a=t.json.accessors[n.POSITION],l=a.min,c=a.max;if(l!==void 0&&c!==void 0){if(s.set(new b(l[0],l[1],l[2]),new b(c[0],c[1],c[2])),a.normalized){const u=Bc(so[a.componentType]);s.min.multiplyScalar(u),s.max.multiplyScalar(u)}}else{console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.");return}}else return;const o=e.targets;if(o!==void 0){const a=new b,l=new b;for(let c=0,u=o.length;c<u;c++){const d=o[c];if(d.POSITION!==void 0){const h=t.json.accessors[d.POSITION],f=h.min,_=h.max;if(f!==void 0&&_!==void 0){if(l.setX(Math.max(Math.abs(f[0]),Math.abs(_[0]))),l.setY(Math.max(Math.abs(f[1]),Math.abs(_[1]))),l.setZ(Math.max(Math.abs(f[2]),Math.abs(_[2]))),h.normalized){const g=Bc(so[h.componentType]);l.multiplyScalar(g)}a.max(l)}else console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.")}}s.expandByVector(a)}i.boundingBox=s;const r=new Un;s.getCenter(r.center),r.radius=s.min.distanceTo(s.max)/2,i.boundingSphere=r}function Ah(i,e,t){const n=e.attributes,s=[];function o(r,a){return t.getDependency("accessor",r).then(function(l){i.setAttribute(a,l)})}for(const r in n){const a=Fc[r]||r.toLowerCase();a in i.attributes||s.push(o(n[r],a))}if(e.indices!==void 0&&!i.index){const r=t.getDependency("accessor",e.indices).then(function(a){i.setIndex(a)});s.push(r)}return Je.workingColorSpace!==an&&"COLOR_0"in n&&console.warn(`THREE.GLTFLoader: Converting vertex colors from "srgb-linear" to "${Je.workingColorSpace}" not supported.`),fi(i,e),IS(i,e,t),Promise.all(s).then(function(){return e.targets!==void 0?AS(i,e.targets,t):i})}const NS=Object.freeze(Object.defineProperty({__proto__:null,GLTFLoader:Ga},Symbol.toStringTag,{value:"Module"}));function OS(i){const e=new Ga,t="/Cielo/"+i;e.load(t,function(n){const s=n.scene;s.position.set(0,0,0),s.name="architettura",s.visible=!1,ne.add(s),console.log(`Loaded GLTF model: ${t}`)},function(n){console.log(`${Math.round(n.loaded/n.total*100)}% loaded`)},function(n){console.error("An error occurred while loading the GLTF model:",n)})}function US(i,e,t,n,s,o){const r=new Ga,a="/Cielo/"+i;r.load(a,function(l){const c=l.scene;c.name=e,c.scale.setScalar(t),c.position.set(n,o,s),ne.add(c),objToBeDetected.push(c),console.log(`Loaded ${a} successfully.`),createMenu()},function(l){console.log(`${Math.round(l.loaded/l.total*100)}% loaded`)},function(l){console.error("An error happened",l)})}let Yf=.7;function jo(i,e){console.log(ne.getObjectByName("architettura")),ne.getObjectByName(i).traverse(n=>{n.isMesh&&n.material&&(n.material.transparent=e,n.material.opacity=e?Yf:1)}),console.log(`Transparency toggled: ${e}`)}function aa(i){Yf=i}function Ch(i,e){ne.getObjectByName(i).traverse(n=>{n.isMesh&&n.material&&(n.userData.originalMaterial||(n.userData.originalMaterial=n.material.clone()),n.material=e?dn:n.userData.originalMaterial)}),console.log(`Material toggled: ${e?"Custom":"Original"}`)}function la(i,e){const t=ne.getObjectByName(i);if(!t){console.warn(`Model with name "${i}" not found.`);return}t.visible=e,console.log(`Model "${i}" visibility toggled: ${e}`)}class $f extends To{constructor(){super(),this.isLineGeometry=!0,this.type="LineGeometry"}setPositions(e){const t=e.length-3,n=new Float32Array(2*t);for(let s=0;s<t;s+=3)n[2*s]=e[s],n[2*s+1]=e[s+1],n[2*s+2]=e[s+2],n[2*s+3]=e[s+3],n[2*s+4]=e[s+4],n[2*s+5]=e[s+5];return super.setPositions(n),this}setColors(e){const t=e.length-3,n=new Float32Array(2*t);for(let s=0;s<t;s+=3)n[2*s]=e[s],n[2*s+1]=e[s+1],n[2*s+2]=e[s+2],n[2*s+3]=e[s+3],n[2*s+4]=e[s+4],n[2*s+5]=e[s+5];return super.setColors(n),this}setFromPoints(e){const t=e.length-1,n=new Float32Array(6*t);for(let s=0;s<t;s++)n[6*s]=e[s].x,n[6*s+1]=e[s].y,n[6*s+2]=e[s].z||0,n[6*s+3]=e[s+1].x,n[6*s+4]=e[s+1].y,n[6*s+5]=e[s+1].z||0;return super.setPositions(n),this}fromLine(e){const t=e.geometry;return this.setPositions(t.attributes.position.array),this}}class FS extends rr{constructor(e=new $f,t=new Si({color:Math.random()*16777215})){super(e,t),this.isLine2=!0,this.type="Line2"}}function BS(){const i=document.querySelector(".dockTasti");if(!i||document.getElementById("metroButton"))return;const e=document.getElementById("seeItemsList"),t=document.createElement("button");t.id="metroButton",t.title="Visualizza distanze tra altoparlanti",t.innerHTML=`
    <svg viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg">
      <path fill="currentColor" d="M150.932,218.624c10.84,3.192,23.58,4.988,37.258,4.996c18.245-0.023,34.79-3.17,47.434-8.668c6.318-2.771,11.72-6.126,15.866-10.39c4.108-4.204,7.071-9.718,7.064-15.939c0.007-6.222-2.956-11.742-7.064-15.94c-6.237-6.362-15.216-10.825-26.048-14.062c-10.833-3.192-23.572-4.995-37.251-4.995c-18.244,0.014-34.79,3.162-47.441,8.668c-6.318,2.771-11.72,6.125-15.865,10.389c-4.108,4.198-7.072,9.718-7.065,15.94c-0.007,6.221,2.956,11.734,7.065,15.939C131.12,210.917,140.106,215.387,150.932,218.624z M135.754,183.213c3.303-3.495,10.249-7.404,19.464-10.079c9.207-2.72,20.64-4.382,32.972-4.374c16.434-0.023,31.288,2.97,41.374,7.404c5.04,2.187,8.846,4.744,11.048,7.05c2.246,2.357,2.8,4.05,2.808,5.41c-0.008,1.352-0.562,3.052-2.808,5.409c-3.296,3.488-10.242,7.404-19.457,10.079c-9.207,2.72-20.632,4.375-32.965,4.375c-16.441,0.014-31.294-2.971-41.381-7.404c-5.04-2.188-8.846-4.744-11.054-7.05c-2.246-2.357-2.794-4.057-2.801-5.409C132.96,187.263,133.508,185.57,135.754,183.213z"/>
      <path fill="currentColor" d="M376.372,243.659v-55.037c0.008-8.114-1.929-15.888-5.224-22.922c-3.304-7.05-7.929-13.397-13.42-19.043c-16.412-16.766-40.488-28.812-69.388-37.458l-0.155-0.044c-29.041-8.564-63.262-13.397-99.996-13.405c-48.993,0.044-93.448,8.528-127.262,23.24l-0.015,0.008c-16.885,7.404-31.316,16.405-42.276,27.666C13.154,152.303,8.528,158.65,5.225,165.7C1.929,172.735-0.008,180.509,0,188.623v134.756c-0.008,8.113,1.929,15.88,5.225,22.915c3.303,7.05,7.929,13.397,13.412,19.043c16.413,16.766,40.472,28.812,69.358,37.45l0.192,0.059c29.049,8.565,63.262,13.39,100.003,13.405H512v-172.59H376.372z M37.658,165.101c11.38-11.838,31.82-22.856,58.03-30.548c26.204-7.737,58.119-12.326,92.502-12.319c45.838-0.022,87.308,8.18,116.659,21.031c14.676,6.399,26.27,13.966,33.866,21.836c7.634,7.929,11.166,15.739,11.174,23.521c-0.008,7.773-3.54,15.592-11.174,23.521c-11.38,11.83-31.819,22.848-58.03,30.541c-26.204,7.744-58.112,12.326-92.496,12.326c-45.845,0.015-87.314-8.187-116.666-21.031c-14.676-6.399-26.27-13.966-33.866-21.836c-7.634-7.929-11.166-15.748-11.174-23.521C26.492,180.841,30.024,173.03,37.658,165.101z M349.888,222.341v32.669h-58.23c6.746-2.202,13.256-4.552,19.249-7.168c15.954-6.983,29.145-15.348,38.684-25.176L349.888,222.341z M485.516,389.766h-45.402v-66.854h-15.134v66.854h-33.416v-36.209h-15.134v36.209h-33.423v-66.854h-15.134v66.854h-33.423v-36.209h-15.134v36.209h-33.415v-66.854h-15.134v66.854h-33.415v-36.209h-15.134v36.076c-11.491-0.177-22.657-0.857-33.423-2.10v-64.711h-15.134v62.76c-23.772-3.621-45.054-9.459-62.138-16.937c-14.676-6.399-26.27-13.966-33.866-21.836c-7.634-7.93-11.166-15.748-11.174-23.521V222.341l0.296,0.325c14.314,14.706,36.8,26.277,64.621,34.532c27.83,8.217,61.053,12.939,96.788,12.946h297.326V389.766z"/>
    </svg>
  `,t.addEventListener("click",Zf),e?i.insertBefore(t,e):i.appendChild(t)}const Rh=document.getElementById("metroButton");Rh&&Rh.addEventListener("click",Zf);let Ys=!1,Da=[],zc=[];function Kf(){Ys&&Jf(),requestAnimationFrame(Kf)}Kf();function Zf(){Ys=!Ys,document.getElementById("metroButton").classList.toggle("active",Ys),Ys?Jf():Qf()}function Jf(){Qf();const i=je.filter(n=>n.name&&n.name.toLowerCase().includes("altoparlante")),e=[],t=.5;i.forEach(n=>{const s=n.getWorldPosition(new b).y;let o=!1;for(const r of e)if(Math.abs(r.y-s)<=t){r.speakers.push(n),o=!0;break}o||e.push({y:s,speakers:[n]})}),e.forEach(n=>{const s=n.speakers;s.forEach((o,r)=>{let a=1/0,l=null;const c=o.getWorldPosition(new b);s.forEach((u,d)=>{if(r===d)return;const h=u.getWorldPosition(new b),f=c.distanceTo(h);f<a&&(a=f,l=h)}),l&&kS(c,l)})})}function zS(i,e){const t=document.createElement("div");t.className="metro-label",t.textContent=e.toFixed(2)+" m",t.style.position="absolute",t.style.pointerEvents="none",t.style.background=getComputedStyle(document.documentElement).getPropertyValue("--fondale")||"#d6d6d6",t.style.color=getComputedStyle(document.documentElement).getPropertyValue("--testo")||"black",t.style.padding="2px 6px",t.style.borderRadius="6px",t.style.fontSize="1rem",t.style.transform="translate(-50%,-50%)",t.style.boxShadow="0 2px 8px rgba(34,34,34,0.2)",document.body.appendChild(t);function n(){if(!t.parentNode)return;const s=i.clone();s.project(Ce);const o=(s.x*.5+.5)*window.innerWidth,r=(-s.y*.5+.5)*window.innerHeight;t.style.left=o+"px",t.style.top=r+"px",Ys&&requestAnimationFrame(n)}return n(),t}function kS(i,e){const t=[i.x,i.y,i.z,e.x,e.y,e.z],n=new $f;n.setPositions(t);const s=new Si({color:16720418,linewidth:2,dashed:!0,dashSize:.02,gapSize:.02,transparent:!0});s.resolution.set(window.innerWidth,window.innerHeight);const o=new FS(n,s);o.computeLineDistances(),o.name="__metroLine",ne.add(o),Da.push(o);const r=i.distanceTo(e),a=i.clone().lerp(e,.5),l=zS(a,r);zc.push(l)}function Qf(){Da.forEach(i=>ne.remove(i)),Da=[],zc.forEach(i=>i.remove()),zc=[]}window.addEventListener("resize",()=>{const i=window.innerWidth,e=window.innerHeight;Da.forEach(t=>{t.material&&t.material.resolution&&t.material.resolution.set(i,e)})});const ep={omnifonte:{tools:["move"],toggles:["global_local","snap"]},orifonte:{tools:["move","rotate"],toggles:["global_local","snap"]},altoparlante:{tools:["move","rotate"],toggles:["global_local","snap"]},aureola:{tools:["move","rotate"],toggles:["global_local","snap"]},zona:{tools:["move","rotate","scale"],toggles:["global_local","snap"]},gruppo:{tools:["move","rotate","scale"],toggles:["global_local","snap"]}};let tp="move",np=!0,oo=null,Va=!1,mu=null,nn=null,yo={},La={},zl=null,zi=null;function ip(){HS(),XS(),rp(),console.log("Transform Context Menu initialized")}function HS(){nn=document.createElement("div"),nn.id="transform-context-menu",nn.style.cssText=`
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
    `,[{id:"move",icon:'<svg viewBox="0 0 110 135" xmlns="http://www.w3.org/2000/svg"><path d="m23.6,97.5l12.2,0c0.5,0 0.9,-0.3 1.2,-0.7c0.2,-0.4 0.2,-0.9 0,-1.3l-2.1,-3.5l19.9,-11.4c0.1,-0.1 0.3,-0.1 0.4,0l19.9,11.4l-2.1,3.5c-0.2,0.4 -0.2,0.9 0,1.3c0.3,0.4 0.7,0.7 1.2,0.7l12.2,0c0.4,0 0.9,-0.3 1.1,-0.7c0.2,-0.4 0.2,-0.9 0,-1.3l-6.1,-10.6c-0.2,-0.4 -0.7,-0.6 -1.1,-0.6c-0.5,0 -0.9,0.2 -1.2,0.6l-2,3.6l-19.8,-11.5c-0.1,-0.1 -0.2,-0.2 -0.2,-0.4l0,-22.9l4,0c0.5,0 0.9,-0.2 1.1,-0.6c0.3,-0.4 0.3,-0.9 0,-1.3l-6.1,-10.6c-0.2,-0.4 -0.6,-0.7 -1.1,-0.7c-0.5,0 -0.9,0.3 -1.1,0.7l-6.1,10.6c-0.3,0.4 -0.3,0.9 0,1.3c0.2,0.4 0.6,0.6 1.1,0.6l4,0l0,22.9c0,0.2 -0.1,0.3 -0.2,0.4l-19.8,11.5l-2,-3.6c-0.3,-0.4 -0.7,-0.6 -1.2,-0.6c-0.4,0 -0.9,0.2 -1.1,0.6l-6.1,10.6c-0.2,0.4 -0.2,0.9 0,1.3c0.2,0.4 0.7,0.7 1.1,0.7z" fill="currentColor"/></svg>',key:"G"},{id:"rotate",icon:'<svg viewBox="0 0 64 80" xmlns="http://www.w3.org/2000/svg"><path d="m31.9,45.9l-4,4c-0.5,0.6 -0.5,1.6 0,2.2l4,4c0.6,0.5 1.6,0.5 2.2,0c0.5,-0.6 0.5,-1.6 0,-2.2l-3,-2.9l3,-2.9c0.5,-0.6 0.5,-1.6 0,-2.2c-0.6,-0.5 -1.6,-0.5 -2.2,0z" fill="currentColor"/><path d="m36.9,41.1l4,4c0.6,0.5 1.6,0.5 2.2,0l4,-4c0.5,-0.6 0.5,-1.6 0,-2.2c-0.6,-0.5 -1.6,-0.5 -2.2,0l-2.9,3l-2.9,-3c-0.6,-0.5 -1.6,-0.5 -2.2,0c-0.5,0.6 -0.5,1.6 0,2.2z" fill="currentColor"/><path d="m23.1,48.7c-4.6,-0.9 -8.3,-2.4 -10.6,-4.3c-1.2,-1 -2,-2.2 -2,-3.4c0,-1.8 1.5,-3.3 3.7,-4.6c4,-2.4 10.5,-3.9 17.8,-3.9c7.3,0 13.8,1.5 17.8,3.9c2.2,1.3 3.7,2.8 3.7,4.6c0,1.8 -1.5,3.3 -3.7,4.6c-4,2.4 -10.5,3.9 -17.8,3.9l-3,0c-0.8,0 -1.5,0.7 -1.5,1.5c0,0.8 0.7,1.5 1.5,1.5l3,0c7.9,0 15,-1.7 19.3,-4.3c3.4,-2 5.2,-4.6 5.2,-7.2c0,-2.6 -1.8,-5.2 -5.2,-7.2c-4.3,-2.6 -11.4,-4.3 -19.3,-4.3c-7.9,0 -15,1.7 -19.3,4.3c-3.4,2 -5.2,4.6 -5.2,7.2c0,2 1.1,4 3.1,5.7c2.5,2.2 6.8,4 11.9,4.9c0.9,0.2 1.6,-0.3 1.8,-1.1c0.2,-0.9 -0.4,-1.6 -1.2,-1.8z" fill="currentColor"/><path d="m39.7,49.9c-0.9,4.6 -2.4,8.3 -4.3,10.6c-1,1.2 -2.2,2 -3.4,2c-1.8,0 -3.3,-1.5 -4.6,-3.7c-2.4,-4 -3.9,-10.5 -3.9,-17.8c0,-7.3 1.5,-13.8 3.9,-17.8c1.3,-2.2 2.8,-3.7 4.6,-3.7c1.8,0 3.3,1.5 4.6,3.7c2.4,4 3.9,10.5 3.9,17.8l0,3c0,0.8 0.7,1.5 1.5,1.5c0.8,0 1.5,-0.7 1.5,-1.5l0,-3c0,-7.9 -1.7,-15 -4.3,-19.3c-2,-3.4 -4.6,-5.2 -7.2,-5.2c-2.6,0 -5.2,1.8 -7.2,5.2c-2.6,4.3 -4.3,11.4 -4.3,19.3c0,7.9 1.7,15 4.3,19.3c2,3.4 4.6,5.2 7.2,5.2c2,0 4,-1.1 5.7,-3.1c2.2,-2.5 4,-6.8 4.9,-11.9c0.2,-0.9 -0.3,-1.6 -1.1,-1.8c-0.9,-0.2 -1.6,0.4 -1.8,1.2z" fill="currentColor"/></svg>',key:"R"},{id:"scale",icon:'<svg viewBox="0 0 32 40" xmlns="http://www.w3.org/2000/svg"><path d="m2.8,13.4q-0.1,0 -0.3,-0.1q-0.1,0 -0.3,-0.1q-0.1,-0.1 -0.1,-0.3q-0.1,-0.1 -0.1,-0.3q0,-0.2 0.1,-0.3q0,-0.2 0.1,-0.3q0.2,-0.1 0.3,-0.2q0.2,0 0.3,0l5,0l0,1.6l-5,0zm21.4,0.8l0,10.7l-1.7,0l0,-10.7q0,-0.1 0,-0.3q-0.1,-0.1 -0.2,-0.2q-0.1,-0.2 -0.3,-0.2q-0.1,-0.1 -0.3,-0.1l-10.7,0l0,-1.6l10.7,0q0.5,0 1,0.1q0.4,0.2 0.8,0.6q0.3,0.3 0.5,0.8q0.2,0.4 0.2,0.9zm-1.7,14l-12.3,0q-0.5,0 -1,-0.2q-0.4,-0.2 -0.8,-0.5q-0.3,-0.3 -0.5,-0.8q-0.2,-0.4 -0.2,-0.9l0,-12.4l1.7,0l0,12.4q0,0.1 0,0.3q0.1,0.1 0.2,0.2q0.1,0.2 0.3,0.2q0.1,0.1 0.3,0.1l18.9,0q0.2,0 0.3,0q0.2,0.1 0.3,0.2q0.1,0.1 0.2,0.3q0.1,0.1 0.1,0.3q-0.1,0.2 -0.1,0.3q-0.1,0.2 -0.2,0.3q-0.1,0.1 -0.3,0.2q-0.1,0 -0.3,0l-4.9,0l0,-1.6l-1.7,0l0,1.6zm0,0l1.7,0l0,4.3l2.2,0l-3,3l-3,-3l2.1,0l0,-4.3zm-13.1,-16.5l-1.7,0l0,-4.3l-2,0l3,-3l3,3l-2.3,0l0,4.3z" fill="currentColor"/></svg>',key:"S"}].forEach(r=>{const a=GS(r);yo[r.id]=a,i.appendChild(a)});const t=document.createElement("div");t.style.cssText=`
        width: 1px;
        height: 32px;
        background: var(--dettaglio, #555);
        margin: 0 4px;
        align-self: center;
    `;const n=document.createElement("div");n.style.cssText=`
        display: flex;
        gap: 4px;
        align-items: center;
    `;const s=Ph("global_local",'<svg viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg"><path d="M16 2.672c-0.004 0-0.007 0-0.011 0-0.002 0-0.003 0-0.005 0-0.005 0-0.010 0.001-0.016 0.001-7.347 0.017-13.296 5.977-13.296 13.327 0 7.348 5.949 13.309 13.296 13.327 0.005 0 0.010 0.001 0.016 0.001 0.002 0 0.004 0 0.005 0 0.004 0 0.008 0 0.011 0 7.36 0 13.328-5.968 13.328-13.328s-5.968-13.328-13.328-13.328zM16.533 10.648c1.413-0.039 2.788-0.225 4.112-0.548 0.399 1.571 0.647 3.382 0.686 5.367h-4.798v-4.819zM16.533 9.582v-5.759c1.437 0.398 2.893 2.314 3.821 5.252-1.231 0.297-2.509 0.47-3.821 0.507zM15.467 3.81v5.772c-1.323-0.037-2.611-0.213-3.852-0.515 0.936-2.956 2.405-4.879 3.852-5.256zM15.467 10.647v4.82h-4.831c0.039-1.988 0.287-3.801 0.687-5.373 1.334 0.326 2.72 0.515 4.144 0.553zM9.563 15.467h-5.811c0.118-2.741 1.139-5.252 2.773-7.241 1.187 0.654 2.446 1.189 3.766 1.589-0.431 1.7-0.689 3.617-0.728 5.652zM9.563 16.533c0.039 2.034 0.297 3.951 0.728 5.651-1.319 0.401-2.579 0.936-3.766 1.59-1.635-1.989-2.656-4.5-2.773-7.241h5.811zM10.636 16.533h4.831v4.814c-1.424 0.038-2.81 0.228-4.145 0.555-0.399-1.571-0.647-3.383-0.686-5.369zM15.467 22.412v5.778c-1.448-0.378-2.919-2.303-3.854-5.263 1.241-0.302 2.53-0.478 3.854-0.515zM16.533 28.178v-5.765c1.313 0.038 2.591 0.211 3.822 0.508-0.928 2.941-2.384 4.86-3.822 5.257zM16.533 21.347v-4.814h4.798c-0.039 1.983-0.286 3.791-0.684 5.361-1.325-0.323-2.7-0.51-4.113-0.548zM22.404 16.533h5.845c-0.118 2.741-1.138 5.251-2.773 7.24-1.197-0.658-2.467-1.197-3.797-1.599 0.43-1.698 0.687-3.611 0.726-5.64zM22.404 15.467c-0.039-2.033-0.297-3.946-0.727-5.646 1.33-0.402 2.599-0.94 3.795-1.598 1.636 1.989 2.658 4.501 2.776 7.244h-5.845zM24.738 7.409c-1.061 0.564-2.18 1.031-3.35 1.385-0.623-2.005-1.498-3.642-2.533-4.717 2.27 0.545 4.297 1.719 5.883 3.332zM13.103 4.087c-1.029 1.073-1.9 2.702-2.521 4.697-1.158-0.353-2.268-0.815-3.319-1.375 1.575-1.602 3.587-2.774 5.84-3.322zM7.259 24.587c1.052-0.561 2.163-1.024 3.322-1.377 0.621 1.997 1.492 3.629 2.522 4.702-2.255-0.549-4.268-1.721-5.844-3.326zM18.855 27.922c1.036-1.075 1.911-2.712 2.535-4.721 1.17 0.355 2.29 0.82 3.351 1.387-1.586 1.614-3.614 2.791-5.886 3.334z" fill="currentColor"/></svg>','<svg viewBox="0 0 800 800" xmlns="http://www.w3.org/2000/svg"><path d="m400 66.8q-0.1 0-0.3 0 0 0-0.1 0-0.2 0-0.4 0c-183.7 0.5-332.4 149.5-332.4 333.2 0 183.7 148.7 332.7 332.4 333.2q0.2 0 0.4 0 0.1 0 0.1 0 0.2 0 0.3 0c184 0 333.2-149.2 333.2-333.2 0-184-149.2-333.2-333.2-333.2zm13.3 199.4c35.4-1 69.7-5.6 102.8-13.7 10 39.3 16.2 84.5 17.2 134.2h-120zm0-26.7v-143.9c36 9.9 72.4 57.8 95.6 131.2-30.8 7.5-62.8 11.8-95.6 12.7zm-26.6-144.3v144.3c-33.1-0.9-65.3-5.3-96.3-12.8 23.4-73.9 60.1-122 96.3-131.5zm0 171v120.5h-120.8c1-49.7 7.2-95.1 17.2-134.4 33.3 8.2 68 12.9 103.6 13.9zm-147.6 120.5h-145.3c3-68.6 28.5-131.3 69.3-181.1 29.7 16.4 61.2 29.8 94.2 39.8-10.8 42.5-17.2 90.4-18.2 141.3zm0 26.6c1 50.9 7.4 98.8 18.2 141.3-33 10-64.5 23.4-94.2 39.7-40.8-49.7-66.4-112.5-69.3-181zm26.8 0h120.8v120.4c-35.6 0.9-70.3 5.7-103.6 13.8-10-39.3-16.2-84.5-17.2-134.2zm120.8 147v144.4c-36.2-9.4-73-57.6-96.4-131.6 31.1-7.5 63.3-11.9 96.4-12.8zm26.7 144.1v-144.1c32.8 0.9 64.7 5.3 95.5 12.7-23.2 73.5-59.6 121.5-95.5 131.4zm0-170.7v-120.4h119.9c-1 49.6-7.1 94.8-17.1 134-33.1-8-67.5-12.7-102.8-13.6zm146.7-120.4h146.2c-3 68.5-28.5 131.3-69.4 181-29.9-16.5-61.6-29.9-94.9-40 10.7-42.4 17.2-90.3 18.1-141zm0-26.7c-0.9-50.8-7.4-98.6-18.2-141.1 33.3-10.1 65-23.5 94.9-40 40.9 49.8 66.5 112.6 69.4 181.1 0 0-146.1 0-146.1 0zm58.4-201.4c-26.6 14.1-54.5 25.8-83.8 34.6-15.6-50.1-37.4-91-63.3-117.9 56.7 13.6 107.4 43 147.1 83.3zm-290.9-83.1c-25.7 26.9-47.5 67.6-63 117.5-29-8.9-56.7-20.4-83-34.4 39.4-40.1 89.7-69.4 146-83.1zm-146.1 512.5c26.3-14 54.1-25.6 83-34.4 15.6 50 37.3 90.8 63.1 117.6-56.4-13.7-106.7-43.1-146.1-83.2zm289.9 83.4c25.9-26.8 47.8-67.8 63.4-118 29.2 8.9 57.2 20.5 83.7 34.7-39.6 40.3-90.3 69.8-147.1 83.3z" fill="currentColor"/><path fill-rule="evenodd" fill="none" stroke="currentColor" stroke-miterlimit="100" stroke-width="23" d="m724.3 53l3.7 3.2-654.3 692.6-3.7-3.2z"/></svg>',np);La.global_local=s,n.appendChild(s);const o=Ph("snap",'<svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M7 10.0288C7.47142 10 8.05259 10 8.8 10H15.2C15.9474 10 16.5286 10 17 10.0288M7 10.0288C6.41168 10.0647 5.99429 10.1455 5.63803 10.327C5.07354 10.6146 4.6146 11.0735 4.32698 11.638C4 12.2798 4 13.1198 4 14.8V16.2C4 17.8802 4 18.7202 4.32698 19.362C4.6146 19.9265 5.07354 20.3854 5.63803 20.673C6.27976 21 7.11984 21 8.8 21H15.2C16.8802 21 17.7202 21 18.362 20.673C18.9265 20.3854 19.3854 19.9265 19.673 19.362C20 18.7202 20 17.8802 20 16.2V14.8C20 13.1198 20 12.2798 19.673 11.638C19.3854 11.0735 18.9265 10.6146 18.362 10.327C18.0057 10.1455 17.5883 10.0647 17 10.0288M7 10.0288V8C7 5.23858 9.23858 3 12 3C14.7614 3 17 5.23858 17 8V10.0288" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" fill="none"/></svg>','<svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M3 3L21 21M17 10V8C17 5.23858 14.7614 3 12 3C11.0283 3 10.1213 3.27719 9.35386 3.75681M7.08383 7.08338C7.02878 7.38053 7 7.6869 7 8V10.0288M19.5614 19.5618C19.273 20.0348 18.8583 20.4201 18.362 20.673C17.7202 21 16.8802 21 15.2 21H8.8C7.11984 21 6.27976 21 5.63803 20.673C5.07354 20.3854 4.6146 19.9265 4.32698 19.362C4 18.7202 4 17.8802 4 16.2V14.8C4 13.1198 4 12.2798 4.32698 11.638C4.6146 11.0735 5.07354 10.6146 5.63803 10.327C5.99429 10.1455 6.41168 10.0647 7 10.0288M19.9998 14.4023C19.9978 12.9831 19.9731 12.227 19.673 11.638C19.3854 11.0735 18.9265 10.6146 18.362 10.327C17.773 10.0269 17.0169 10.0022 15.5977 10.0002M10 10H8.8C8.05259 10 7.47142 10 7 10.0288" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" fill="none"/></svg>',!0);La.snap=o,n.appendChild(o),zl=VS(),zl.style.display="none",n.appendChild(zl),zi=WS(),n.appendChild(zi),nn.appendChild(i),nn.appendChild(t),nn.appendChild(n),document.body.appendChild(nn)}function GS(i){const e=document.createElement("button");e.id=`transform-tool-${i.id}`,e.title=`${i.id.charAt(0).toUpperCase()+i.id.slice(1)} (${i.key})`,e.style.cssText=`
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
        `),e.appendChild(t),e.addEventListener("mouseenter",()=>{e.classList.contains("active")||(e.style.background="rgba(255, 255, 255, 0.1)",t.style.filter="brightness(1)")}),e.addEventListener("mouseleave",()=>{e.classList.contains("active")||(e.style.background="transparent",t.style.filter="brightness(0.8)")}),e}function Ph(i,e,t,n){const s=document.createElement("button");s.id=`transform-toggle-${i}`,s.title=i==="global_local"?n?"Global Mode":"Local Mode":n?"Snap On":"Snap Off",s.style.cssText=`
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
        `),s.appendChild(o),s.dataset.iconOn=e,s.dataset.iconOff=t,s.dataset.state=n,s.addEventListener("mouseenter",()=>{s.style.background="rgba(255, 255, 255, 0.1)",o.style.filter="brightness(1)"}),s.addEventListener("mouseleave",()=>{s.style.background="transparent",o.style.filter="brightness(0.8)"}),s}function VS(){const i=document.createElement("div");i.style.cssText=`
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
    `,e.addEventListener("mouseenter",()=>{e.style.transform="scale(1.1)"}),e.addEventListener("mouseleave",()=>{e.style.transform="scale(1)"}),t.addEventListener("change",n=>{e.style.background=n.target.value,console.log("Color changed to:",n.target.value)}),i.appendChild(e),i.appendChild(t),i}function WS(){const i=document.createElement("div");i.style.cssText=`
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
    `,t.appendChild(n),t.appendChild(s),i.appendChild(e),i.appendChild(t),i._container=e,i._dot1=n,i._dot2=s,i._currentPage=0;const o=()=>{i._currentPage=(i._currentPage+1)%2,i._currentPage===0?(n.style.opacity="1",s.style.opacity="0.3"):(n.style.opacity="0.3",s.style.opacity="1"),gu(mu)};t.addEventListener("click",o);let r=0,a=0;e.addEventListener("touchstart",c=>{r=c.changedTouches[0].screenY},{passive:!0}),e.addEventListener("touchend",c=>{a=c.changedTouches[0].screenY,l()},{passive:!0}),e.addEventListener("wheel",c=>{c.preventDefault();const u=c.deltaY;Math.abs(u)>10&&(u>0&&i._currentPage===0||u<0&&i._currentPage===1)&&o()},{passive:!1});const l=()=>{const c=r-a;Math.abs(c)>30&&(c>0&&i._currentPage===0||c<0&&i._currentPage===1)&&o()};return i.style.display="none",i}function gu(i){if(!zi||!i)return;Lf(i);const e=zi._container,t=zi._currentPage||0;e.innerHTML="";const n=t===0?1:9,s=t===0?8:16;for(let o=n;o<=s;o++){const r=document.createElement("button");r.className="tag-chip",r.textContent=o,r.dataset.tag=o;const a=dr(i,o),l=Pf[o];r.style.cssText=`
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
        `,r.addEventListener("click",()=>{var u,d,h,f;if((u=window.multiClientManager)!=null&&u.isEnabled&&!((d=window.multiClientManager)!=null&&d.isMaster)&&window.multiClientManager.requestMaster(),Df(i,o)){const _=dr(i,o);if(r.style.opacity=_?"1":"0.3",window.messageBroker&&window.messageBroker.sendObjectTags({name:i.name,type:null,tags:i.userData.tags||[0]}),window.updateSubmenuTags&&window.updateSubmenuTags(i),(h=window.multiClientManager)!=null&&h.isMaster&&((f=window.multiClientManager)!=null&&f.isEnabled)){const g=new b;i.getWorldPosition(g);const m=new Bt().setFromQuaternion(i.quaternion);window.multiClientManager.sendTransform(i.userData.id,{x:g.x,y:g.y,z:g.z},{x:m.x,y:m.y,z:m.z},{x:i.scale.x,y:i.scale.y,z:i.scale.z},i.userData.tags||[0])}}}),r.addEventListener("mouseenter",()=>{r.style.filter="brightness(1.2)"}),r.addEventListener("mouseleave",()=>{r.style.filter="brightness(1)"}),e.appendChild(r)}zi.style.display="flex"}window.updateTagsChipsExternal=gu;function XS(){Object.entries(yo).forEach(([i,e])=>{e.addEventListener("click",()=>{var t,n,s;console.log("Tool button clicked:",i),console.log("Control object attached:",((s=(n=(t=window.setupGlobals)==null?void 0:t.control)==null?void 0:n.object)==null?void 0:s.name)||"none"),Qo(i),sp(i)})}),Object.entries(La).forEach(([i,e])=>{e.addEventListener("click",()=>{qS(i)})})}function sp(i){var t,n,s;const e=(t=window.setupGlobals)==null?void 0:t.control;if(!e){console.log("No transform controls available");return}if(!e.object){console.log("No object attached to transform controls - mode will be set for next attach"),e.setMode(i==="move"?"translate":i);return}switch(i){case"move":$t.hide(),console.log("Setting transform mode to: translate"),e.setMode("translate"),console.log("Transform mode successfully set to: translate"),console.log("Current control mode after change:",e.getMode()),window.updateStato&&window.updateStato("Spostamento");break;case"rotate":if($t.hide(),console.log("Setting transform mode to: rotate"),e.object){const r=e.object,a=r.name||"";if(a.toLowerCase().includes("altoparlante")){console.log("Activating rotation for speaker:",a);const l=((n=r.userData)==null?void 0:n.autoRotateToCenter)===!0;console.log("LookAt was active:",l),l&&window.orientSpeakerToCenter?window.orientSpeakerToCenter(r,!1):r.userData&&(r.userData.autoRotateToCenter=!1,console.log("LookAt disabled without resetting rotation - keeping current rotation")),window.updateMenuForObject&&window.updateMenuForObject(r),console.log("LookAt center flag updated to:",(s=r.userData)==null?void 0:s.autoRotateToCenter),console.log("Speaker rotation mode activated - lookAt center handled based on previous state")}}e.setMode("rotate"),console.log("Transform mode successfully set to: rotate"),console.log("Current control mode after change:",e.getMode()),window.updateStato&&window.updateStato("Rotazione");break;case"scale":console.log("triggerTransformMode: Executing scale case");const o=e.object;if(console.log("triggerTransformMode: attachedObject is:",(o==null?void 0:o.name)||"null"),o){console.log("triggerTransformMode: Processing scale for object:",o.name),console.log("triggerTransformMode: Saving to raycasterGlobals..."),window.raycasterGlobals?(window.raycasterGlobals.lastHoveredObject=o,console.log("triggerTransformMode: Saved to raycasterGlobals")):console.log("triggerTransformMode: ERROR - raycasterGlobals not found"),console.log("triggerTransformMode: Detaching control..."),e.detach(),console.log("triggerTransformMode: Control detached"),window.orbit&&(window.orbit.enabled=!0,console.log("triggerTransformMode: Orbit enabled")),console.log("triggerTransformMode: Calling groupScaleUIDiv.show..."),$t.show(o),console.log("triggerTransformMode: groupScaleUIDiv.show called");const r=o.name==="Gruppo di trasformazione",a=window.currentCamera;r&&a&&a.isOrthographicCamera&&a.position.y>Math.abs(a.position.x)&&a.position.y>Math.abs(a.position.z)?window.updateStato&&window.updateStato("Scala Gruppo XY"):window.updateStato&&window.updateStato("Scala"),_u("scale")}break;default:console.warn("Unknown transform mode:",i)}}function Qo(i){Object.values(yo).forEach(t=>{t.classList.remove("active"),t.style.background="transparent";const n=t.querySelector("div");n&&(n.style.filter="brightness(0.8)")});const e=yo[i];if(e){e.classList.add("active"),e.style.background="var(--dettaglio, #555)";const t=e.querySelector("div");t&&(t.style.filter="brightness(1.2)"),tp=i,console.log(`Transform tool set to: ${i}`)}}function qS(i){const e=La[i];if(!e)return;const n=!(e.dataset.state==="true"),s=e.querySelector("div");if(s){s.innerHTML=n?e.dataset.iconOn:e.dataset.iconOff;const o=s.querySelector("svg");o&&(o.style.cssText=`
                width: 100%;
                height: 100%;
                color: currentColor;
            `)}e.dataset.state=n,i==="global_local"?(np=n,e.title=n?"Global Mode":"Local Mode",console.log(`Global mode: ${n}`)):i==="snap"&&(e.title=n?"Snap On":"Snap Off",console.log(`Snap: ${n}`))}function jS(i){if(!i||!i.name)return"gruppo";const e=i.name.toLowerCase();return e.includes("omnifonte")?"omnifonte":e.includes("orifonte")?"orifonte":e.includes("altoparlante")?"altoparlante":e.includes("aureola")||e.includes("cloud")?"aureola":e.includes("zona")?"zona":"gruppo"}function op(i){var n;if(!nn)return;mu=i,oo=jS(i);const e=ep[oo];if(!e)return;Object.entries(yo).forEach(([s,o])=>{const r=e.tools.includes(s);o.style.display=r?"flex":"none"});const t=(n=window.setupGlobals)==null?void 0:n.control;if(t&&t.object){const s=t.getMode(),r={translate:"move",rotate:"rotate",scale:"scale"}[s];r&&e.tools.includes(r)?Qo(r):e.tools.length>0&&Qo(e.tools[0])}else e.tools.length>0&&Qo(e.tools[0]);gu(i),nn.style.opacity="1",nn.style.transform="translateY(0)",nn.style.pointerEvents="auto",Va=!0,console.log(`Transform menu shown for object type: ${oo}`)}function rp(){nn&&(nn.style.opacity="0",nn.style.transform="translateY(10px)",nn.style.pointerEvents="none",Va=!1,oo=null,mu=null,zi&&(zi.style.display="none"),console.log("Transform menu hidden"))}function _u(i){if(Va&&i&&yo[i]&&oo){const e=ep[oo];e&&e.tools.includes(i)&&Qo(i)}}function ap(i,e=null){var n,s,o;const t=(n=window.setupGlobals)==null?void 0:n.control;if(t){if(e&&(t.attach(e),(s=window.raycasterGlobals)!=null&&s.setRaycasterActiveForTransformControls&&window.raycasterGlobals.setRaycasterActiveForTransformControls(!1),window.orbit&&(window.orbit.enabled=!1),(o=window.raycasterGlobals)!=null&&o.outlinePass&&(window.raycasterGlobals.outlinePass.selectedObjects=[]),op(e)),t.object)sp(i),_u(i);else if(i&&i!=="scale"){t.setMode(i==="move"?"translate":i);const r=document.getElementById("ghostButton");if(r){r.style.display="block";const a={move:"21.5rem",rotate:"16.5rem",scale:"11.5rem"};r.style.right=a[i]||"21.5rem"}}}}window.syncTransformState=ap;window.transformContextMenu={init:ip,show:op,hide:rp,updateState:_u,getCurrentMode:()=>tp,isVisible:()=>Va,syncState:ap};document.addEventListener("DOMContentLoaded",ip);class YS{constructor(){this.ws=null,this.clientId=null,this.isMaster=!1,this.syncEnabled=!1,this.reconnectAttempts=0,this.maxReconnectAttempts=5,this.reconnectDelay=1e3,this.pingInterval=null,this.onStateChange=null,this.onMasterChange=null,this.onTransformReceived=null,this.onObjectCreatedReceived=null,this.messageQueue=[],console.log("MultiClientManager inizializzato"),this.connect()}setEnabled(e){console.log("setEnabled chiamato con:",e,"syncEnabled corrente:",this.syncEnabled),this.syncEnabled=e,console.log("setEnabled: syncEnabled ora è:",this.syncEnabled),console.log(`Sincronizzazione multi-client: ${e?"ATTIVA":"DISATTIVA"}`)}connect(){if(this.ws&&this.ws.readyState===WebSocket.OPEN){console.log("WebSocket già connesso");return}const t=`ws://${window.location.hostname}:8080/ws`;console.log(`Connessione a ${t}...`);try{this.ws=new WebSocket(t),this.ws.onopen=()=>{console.log("WebSocket connesso"),this.reconnectAttempts=0,this.startPing(),this.processMessageQueue()},this.ws.onmessage=n=>{const s=JSON.parse(n.data);this.handleMessage(s)},this.ws.onclose=()=>{console.log("WebSocket disconnesso"),this.stopPing(),this.handleDisconnection()},this.ws.onerror=n=>{console.error("Errore WebSocket:",n)}}catch(n){console.error("Errore creazione WebSocket:",n)}}disconnect(){this.ws&&(this.ws.close(),this.ws=null),this.stopPing(),this.clientId=null,this.isMaster=!1}handleMessage(e){switch(console.log("[MultiClient] Messaggio ricevuto:",e.type,e),e.type){case"init":this.clientId=e.clientId,this.isMaster=e.isMaster,this.notifyStateChange(),console.log(`Inizializzato come ${this.isMaster?"MASTER":"SLAVE"} (${this.clientId})`);break;case"role_change":const t=this.isMaster;this.isMaster=e.isMaster,t!==this.isMaster&&(this.notifyMasterChange(this.isMaster),console.log(`Ruolo cambiato: ${this.isMaster?"MASTER":"SLAVE"}`));break;case"master_changed":console.log(`Nuovo master: ${e.newMasterId}`);break;case"transform":!this.isMaster&&e.fromMaster&&this.handleTransformMessage(e);break;case"object_created":!this.isMaster&&e.fromMaster?(console.log("SLAVE riceve creazione oggetto:",e.objectId,e.objectType,e.name),this.handleObjectCreatedMessage(e)):console.log("ObjectCreated IGNORATO - isMaster:",this.isMaster,"fromMaster:",e.fromMaster);break;case"pong":break;case"nuvola_status":this.onNuvolaStatus&&this.onNuvolaStatus(e.data);break;default:console.log("Messaggio sconosciuto:",e)}}handleTransformMessage(e){if(console.log("[MultiClient] handleTransformMessage ricevuto:",{objectId:e.objectId,hasMenuState:!!e.menuState,menuState:e.menuState}),this.onTransformReceived){const t={objectId:e.objectId,position:e.position,rotation:e.rotation,scale:e.scale};e.tags&&(t.tags=e.tags),e.menuState&&(t.menuState=e.menuState),console.log("[MultiClient] Passando data a onTransformReceived:",{hasMenuState:!!t.menuState,menuStateKeys:t.menuState?Object.keys(t.menuState):[]}),this.onTransformReceived(t)}}handleObjectCreatedMessage(e){this.onObjectCreatedReceived&&this.onObjectCreatedReceived({objectId:e.objectId,objectType:e.objectType,name:e.name,position:e.position,rotation:e.rotation,scale:e.scale,properties:e.properties,tags:e.tags||[0],menuState:e.menuState||{}})}loadInitialState(e){console.log("Caricamento stato iniziale:",e);for(const[t,n]of Object.entries(e))console.log("Processando oggetto iniziale:",t,n),n.objectType&&n.name&&this.onObjectCreatedReceived?(console.log("Creando oggetto iniziale:",n.objectType,n.name),this.onObjectCreatedReceived({objectId:t,objectType:n.objectType,name:n.name,position:n.position,rotation:n.rotation,scale:n.scale,properties:n.properties})):n.position&&this.onTransformReceived&&(console.log("Applicando solo trasformazione iniziale:",t),this.onTransformReceived({objectId:t,position:n.position,rotation:n.rotation,scale:n.scale}))}sendTransform(e,t,n,s,o=null,r=null){if(!this.isMaster||!this.syncEnabled){console.log("sendTransform BLOCKED - isMaster:",this.isMaster,"syncEnabled:",this.syncEnabled);return}const a=Date.now(),l=`transform_${e}`;if(this.lastSent||(this.lastSent={}),o===null&&r===null&&this.lastSent[l]&&a-this.lastSent[l]<50)return;this.lastSent[l]=a;const c={type:"transform",objectId:e,position:t,rotation:n,scale:s};o!==null&&(c.tags=o),r!==null&&(c.menuState=r),console.log("[MultiClient] sendTransform inviando:",{objectId:e,hasTags:o!==null,hasMenuState:r!==null,menuStateKeys:r?Object.keys(r):[]}),this.sendMessage(c)}notifyObjectCreated(e,t,n,s,o,r,a={},l=[0],c={}){if(!this.isMaster||!this.syncEnabled){console.log("notifyObjectCreated BLOCKED - isMaster:",this.isMaster,"syncEnabled:",this.syncEnabled);return}console.log("MASTER notifica creazione oggetto:",e,t,n,"tags:",l,"menuState:",c);const u={type:"object_created",objectId:e,objectType:t,name:n,position:s,rotation:o,scale:r,properties:a,tags:l,menuState:c};this.sendMessage(u)}requestMaster(){if(console.log("[requestMaster] syncEnabled:",this.syncEnabled,"isConnected:",this.isConnected,"isMaster:",this.isMaster),!this.syncEnabled){console.warn("[requestMaster] BLOCCATO: syncEnabled è false");return}if(!this.isConnected){console.warn("[requestMaster] BLOCCATO: WebSocket non connesso");return}console.log("[requestMaster] Invio richiesta al server..."),this.sendMessage({type:"request_master"})}sendMessage(e){this.ws&&this.ws.readyState===WebSocket.OPEN?(e.type==="transform"&&console.log("[MultiClient] INVIO REALE via WebSocket:",{type:e.type,objectId:e.objectId,hasMenuState:!!e.menuState,menuStateContent:e.menuState}),this.ws.send(JSON.stringify(e))):this.messageQueue.push(e)}processMessageQueue(){for(;this.messageQueue.length>0&&this.ws.readyState===WebSocket.OPEN;){const e=this.messageQueue.shift();this.ws.send(JSON.stringify(e))}}handleDisconnection(){if(this.reconnectAttempts<this.maxReconnectAttempts){this.reconnectAttempts++;const e=this.reconnectDelay*Math.pow(2,this.reconnectAttempts-1);console.log(`Tentativo riconnessione ${this.reconnectAttempts}/${this.maxReconnectAttempts} in ${e}ms`),setTimeout(()=>{this.connect()},e)}else console.error("Massimo numero di tentativi di riconnessione raggiunto"),this.setEnabled(!1)}startPing(){this.pingInterval=setInterval(()=>{this.ws&&this.ws.readyState===WebSocket.OPEN&&this.sendMessage({type:"ping"})},3e4)}stopPing(){this.pingInterval&&(clearInterval(this.pingInterval),this.pingInterval=null)}notifyStateChange(){this.onStateChange&&this.onStateChange({clientId:this.clientId,isMaster:this.isMaster,isConnected:this.ws&&this.ws.readyState===WebSocket.OPEN})}notifyMasterChange(e){this.onMasterChange&&this.onMasterChange(e)}get isEnabled(){return this.syncEnabled}set isEnabled(e){this.setEnabled(e)}get isConnected(){return this.ws&&this.ws.readyState===WebSocket.OPEN}getStatus(){return{isEnabled:this.syncEnabled,isConnected:this.isConnected,isMaster:this.isMaster,clientId:this.clientId}}}window.multiClientManager=new YS;const Ia={generali:{title:"Generali",controls:[{type:"toggle",id:"theme",label:"Tema Eco",defaultValue:!1,action:i=>{console.log("Theme changed:",i),document.querySelector('input[data-id="theme"]').checked=i,document.querySelector('input[data-id="theme"]').dispatchEvent(new Event("change"))}},{type:"toggle",id:"gridSnapState",label:"Aggancio Griglia",defaultValue:!0,action:i=>{console.log("Grid snap changed:",i),document.querySelector('input[data-id="gridSnapState"]').checked=i,document.querySelector('input[data-id="gridSnapState"]').dispatchEvent(new Event("change"))}},{type:"slider",id:"snapDefinition",label:"Precisione Snap",min:1,max:3,defaultValue:2,step:1,action:i=>{console.log("Snap definition changed:",i),document.querySelector('input[data-id="snapDefinition"]').value=i,document.querySelector('input[data-id="snapDefinition"]').dispatchEvent(new Event("change"))}},{type:"toggle",id:"lock",label:"Diorama",defaultValue:!1,action:i=>{console.log("Lock changed:",i),document.querySelector('input[data-id="lock"]').checked=i,document.querySelector('input[data-id="lock"]').dispatchEvent(new Event("change"))}},{type:"toggle",id:"grid",label:"Super Superficie",defaultValue:!0,action:i=>{console.log("Grid visibility changed:",i),document.querySelector('input[data-id="grid"]').checked=i,document.querySelector('input[data-id="grid"]').dispatchEvent(new Event("change"))}},{type:"slider",id:"gridsize",label:"Dimensione Griglia",min:1,max:4,defaultValue:2,step:1,action:i=>{console.log("Grid size changed:",i),document.querySelector('input[data-id="gridsize"]').value=i,document.querySelector('input[data-id="gridsize"]').dispatchEvent(new Event("change"))}},{type:"toggle",id:"multiClient",label:"Sincronizzazione Multi-Client",defaultValue:!1,action:i=>{console.log("=== Multi-client action chiamato ==="),console.log("Valore ricevuto:",i),console.log("window.multiClientManager esiste:",!!window.multiClientManager),window.multiClientManager?(console.log("Chiamando setEnabled con:",i),window.multiClientManager.setEnabled(i),window.updateMultiClientStatusDisplay&&window.updateMultiClientStatusDisplay()):console.error("window.multiClientManager non trovato!")}},{type:"status",id:"multiClientStatus",defaultText:"Status: Disattivato",hidden:!0},{type:"toggle",id:"oscOutput",label:"OSC Output",defaultValue:!0,action:i=>{window.oscManager&&(window.oscManager.setEnabled(i),window.updateOSCStatusDisplay&&window.updateOSCStatusDisplay())}},{type:"input",id:"oscHost",label:"OSC IP",defaultValue:"192.168.0.255",action:i=>{if(window.oscManager){const e=window.oscManager.port;window.oscManager.updateConfig(i,e)}}},{type:"input",id:"oscPort",label:"OSC Port",defaultValue:"5000",action:i=>{if(window.oscManager){const e=window.oscManager.host,t=parseInt(i)||5e3;window.oscManager.updateConfig(e,t)}}},{type:"status",id:"oscStatus",defaultText:"Status: Disattivato",hidden:!0},{type:"toggle",id:"oscForceOutput",label:"Force OSC Output (ignora ruolo Master)",defaultValue:!1,action:i=>{window.messageBroker&&window.messageBroker.setOSCForceOutput(i)}},{type:"button",id:"saveProject",label:"Save Project",action:()=>{var i;console.log("Saving project"),(i=document.getElementById("saveProjectBtn"))==null||i.click()}},{type:"button",id:"saveProjectAs",label:"Save Project As",action:()=>{var i;console.log("Saving project as"),(i=document.getElementById("saveProjectAsBtn"))==null||i.click()}},{type:"button",id:"loadProject",label:"Load Project",action:()=>{var i;console.log("Loading project"),(i=document.getElementById("loadProjectBtn"))==null||i.click()}},{type:"button",id:"loadSpeakersPreset",label:"Load Speakers",action:()=>{var i;console.log("Loading speakers preset"),(i=document.getElementById("loadSpeakersPresetBtn"))==null||i.click()}},{type:"button",id:"saveSpeakersPreset",label:"Save Speakers",action:()=>{var i;console.log("Saving speakers preset"),(i=document.getElementById("saveSpeakersPresetBtn"))==null||i.click()}},{type:"button",id:"loadSourcesPreset",label:"Load Sources",action:()=>{var i;console.log("Loading sources preset"),(i=document.getElementById("loadSourcesPresetBtn"))==null||i.click()}},{type:"button",id:"saveSourcesPreset",label:"Save Sources",action:()=>{var i;console.log("Saving sources preset"),(i=document.getElementById("saveSourcesPresetBtn"))==null||i.click()}},{type:"button",id:"resetScene",label:"Empty",action:()=>{var i;console.log("Resetting scene"),(i=document.getElementById("resetSceneBtn"))==null||i.click()}}]},plastico:{title:"Plastico",controls:[{type:"button",id:"loadPlastico",label:"Carica",action:()=>{var i;console.log("Loading plastico"),(i=document.getElementById("loadPlastico"))==null||i.click()}},{type:"toggle",id:"archVisibility",label:"⏿",defaultValue:!0,action:i=>{console.log("Arch visibility changed:",i),document.querySelector('input[data-id="archVisibility"]').checked=i,document.querySelector('input[data-id="archVisibility"]').dispatchEvent(new Event("change"))}},{type:"slider",id:"plasticoThreshold",label:"Threshold",min:0,max:120,defaultValue:60,step:1,action:i=>{console.log("Plastico threshold changed:",i);const e=document.getElementById("plasticoThreshold");e&&(e.value=i,e.dispatchEvent(new Event("input")))}},{type:"slider",id:"plasticoThickness",label:"Line Thickness",min:.5,max:10,defaultValue:2,step:.1,action:i=>{console.log("Plastico thickness changed:",i);const e=document.getElementById("plasticoThickness");e&&(e.value=i,e.dispatchEvent(new Event("input")))}},{type:"slider",id:"plasticoOpacity",label:"Opacity",min:.1,max:1,defaultValue:.8,step:.01,action:i=>{console.log("Plastico opacity changed:",i);const e=document.getElementById("plasticoOpacity");e&&(e.value=i,e.dispatchEvent(new Event("input")))}}]},carica:{title:"Carica Modello",controls:[{type:"button",id:"loadGenericGltf",label:"Carica",action:()=>{var i;console.log("Loading GLTF"),(i=document.getElementById("loadGenericGltf"))==null||i.click()}}]},zone:{title:"Zone",controls:[{type:"toggle",id:"zoneVisibility",label:"⏿",defaultValue:!0,action:i=>{console.log("Zone visibility changed:",i),document.querySelector('input[data-id="zoneVisibility"]').checked=i,document.querySelector('input[data-id="zoneVisibility"]').dispatchEvent(new Event("change"))}}]},altoparlanti:{title:"Altoparlanti",controls:[{type:"toggle",id:"speakersVisibility",label:"⏿",defaultValue:!0,action:i=>{console.log("Speakers visibility changed:",i),window.setGlobalSpeakerVisibility&&window.setGlobalSpeakerVisibility(i),document.querySelectorAll('input[data-id="speakersVisibility"]').forEach(t=>{t.checked=i,t.dispatchEvent(new Event("change"))})}},{type:"toggle",id:"speakersGlobalLookAt",label:"Guarda origine (globale)",defaultValue:!0,action:i=>{console.log("Global speaker look at changed:",i),window.setGlobalSpeakerLookAt&&window.setGlobalSpeakerLookAt(i)}}]},corone:{title:"",controls:[{type:"custom",id:"nuvola-dashboard",html:'<div id="nuvola-dashboard" class="nuvola-dashboard-container"></div>'}]}};let lp="generali";function $S(i){const e=document.createElement("div");e.className="control-row";const t=document.createElement("label");t.textContent=i.label;const n=document.createElement("input");return n.type="checkbox",n.checked=i.defaultValue||!1,n.addEventListener("click",s=>{console.log("Toggle clicked:",i.id,"checked:",s.target.checked),i.action(s.target.checked)}),e.appendChild(t),e.appendChild(n),e}function KS(i){const e=document.createElement("div");e.className="control-row";const t=document.createElement("label");t.textContent=i.label;const n=document.createElement("div");n.className="slider-container";const s=document.createElement("input");return s.type="range",s.min=i.min,s.max=i.max,s.step=i.step||1,s.value=i.defaultValue||i.min,s.addEventListener("input",o=>{i.action(parseFloat(o.target.value))}),n.appendChild(s),e.appendChild(t),e.appendChild(n),e}function ZS(i){const e=document.createElement("div");e.className="control-row";const t=document.createElement("button");return t.className="control-button",t.textContent=i.label,t.addEventListener("click",i.action),e.appendChild(t),e}function JS(i){const e=document.createElement("div");e.className="control-row status-row";const t=document.createElement("div");return t.className="status-display",t.id=i.id,t.textContent=i.defaultText||"Status",t.style.fontSize="0.8em",t.style.color="#888",t.style.padding="4px 8px",t.style.backgroundColor="rgba(255,255,255,0.1)",t.style.borderRadius="4px",t.style.display=i.hidden?"none":"block",e.appendChild(t),e}function QS(i){const e=document.createElement("div");e.className="control-row";const t=document.createElement("label");t.textContent=i.label;const n=document.createElement("input");return n.type="text",n.id=i.id,n.value=i.defaultValue||"",n.style.flex="1",n.style.padding="4px 8px",n.style.backgroundColor="rgba(255,255,255,0.1)",n.style.border="1px solid var(--dettaglio)",n.style.borderRadius="4px",n.style.color="var(--testo)",n.style.width="70%",n.style.textAlign="right",n.addEventListener("change",s=>{i.action(s.target.value)}),e.appendChild(t),e.appendChild(n),e}function eM(i){const e=document.createElement("div");e.className="control-row";const t=document.createElement("label");t.textContent=i.label;const n=document.createElement("input");return n.type="number",n.min=i.min,n.max=i.max,n.step=i.step||1,n.value=i.defaultValue||i.min,n.addEventListener("change",s=>{i.action(parseFloat(s.target.value))}),e.appendChild(t),e.appendChild(n),e}function Yo(i){const e=Ia[i];if(!e)return null;const t=document.createElement("div");t.className="new-panel-content",t.id=`new-panel-${i}`;const n=document.createElement("h3");return n.className="panel-title",n.textContent=e.title,t.appendChild(n),e.controls.forEach(s=>{let o;switch(s.type){case"toggle":o=$S(s);break;case"slider":o=KS(s);break;case"button":o=ZS(s);break;case"numbox":o=eM(s);break;case"status":o=JS(s);break;case"input":o=QS(s);break;case"custom":const r=document.createElement("div");r.innerHTML=s.html,o=r.firstChild;break;default:console.warn("Unknown control type:",s.type);return}o&&t.appendChild(o)}),t}function tM(){const i=document.createElement("div");i.className="right-menu-tabs";const e=document.createElement("div");e.className="right-tab-slider",i.appendChild(e);let t=null;return Object.keys(Ia).forEach((n,s)=>{const o=document.createElement("button");o.className="right-menu-tab",o.textContent=nM(n),o.dataset.panel=n,o.addEventListener("click",()=>{cp(n),Dh(o,e)}),i.appendChild(o),n==="generali"&&(t=o)}),t&&setTimeout(()=>{t.classList.add("right-tab-active"),Dh(t,e)},0),i}function nM(i){return{generali:"G",plastico:"P",carica:"C",zone:"Z",altoparlanti:"A",corone:"❍"}[i]||i.charAt(0).toUpperCase()}function Dh(i,e){if(!i||!i.parentNode||!e){console.warn("Invalid elements passed to updateRightSliderPosition");return}i.parentNode.querySelectorAll(".right-menu-tab").forEach(n=>{n.classList.remove("right-tab-active")}),i.classList.add("right-tab-active"),setTimeout(()=>{const n=i.offsetWidth,s=i.offsetLeft;e.style.left=s+"px",e.style.width=n+"px"},0)}function cp(i){lp=i;const e=document.querySelectorAll(".panel-tab"),t=document.querySelectorAll(".panel-content");e.forEach(n=>{n.classList.remove("active"),n.getAttribute("data-panel")===i&&n.classList.add("active")}),t.forEach(n=>{n.style.display="none",n.getAttribute("data-panel-content")===i&&(n.style.display="block")})}function iM(){if(!document.getElementById("black-panel")){console.warn("Black panel not found");return}const e=document.getElementById("new-panel-generali-container");if(e){const r=Yo("generali");r&&(r.style.display="block",e.appendChild(r),console.log("Generali panel migrated to new system"))}const t=document.getElementById("new-panel-plastico-container");if(t){const r=Yo("plastico");r&&(r.style.display="block",t.appendChild(r),console.log("Plastico panel migrated to new system"))}["carica","zone","altoparlanti","corone"].forEach(r=>{const a=document.getElementById(`new-panel-${r}-container`);if(a){const l=Yo(r);l&&(l.style.display="block",a.appendChild(l),console.log(`${r} panel migrated to new system`))}});const s=document.getElementById("new-panel-tabs-container");if(s){const r=tM();s.appendChild(r),console.log("New tab system installed")}const o=document.createElement("div");o.className="new-panels-container",Object.keys(Ia).forEach(r=>{const a=Yo(r);a&&r!=="generali"&&(r!==lp&&(a.style.display="none"),o.appendChild(a))}),window.rightMenuSystem={newContainer:o,switchToPanel:cp,panelConfigs:Ia,migratePanel:r=>sM(r)},console.log("Right menu system initialized - Generali panel active")}function sM(i){const e=document.querySelector(`[data-panel-content="${i}"]`);if(!e){console.warn(`Panel ${i} not found`);return}const t=Yo(i);if(!t){console.warn(`Could not create content for panel ${i}`);return}e.innerHTML="",e.appendChild(t),t.style.display="block",console.log(`Panel ${i} migrated to new system`)}document.addEventListener("DOMContentLoaded",iM);let wn=null,En=null;function oM(){const i=localStorage.getItem("activeProjectName");i&&(En=i,console.log("[PROJECT] Progetto attivo caricato da localStorage:",En))}function vu(){En&&localStorage.setItem("activeProjectName",En)}function up(){const i={},e=document.getElementById("oscHost"),t=document.getElementById("oscPort");e&&t&&(i.osc={host:e.value,port:parseInt(t.value,10)});const n=document.getElementById("plasticoToggle"),s=document.getElementById("plasticoThreshold");return n&&(i.plastico={visible:n.checked,threshold:s?parseFloat(s.value):.5}),i}function ki(i){const e={};return je.filter(t=>t.name&&t.name.startsWith(i)).forEach(t=>{const n=t.parent&&t.parent.type==="Group"?t.parent:t,s=t.name.replace(/\s+/g,"_");e[s]={position:{x:n.position.x,y:n.position.z,z:n.position.y},rotation:{x:n.rotation.x,y:n.rotation.z,z:n.rotation.y},scale:{x:n.scale.x,y:n.scale.z,z:n.scale.y},tags:t.userData.tags||[],menuState:t.userData.menuState||{}}}),e}async function rM(){try{wn||(wn=await window.showDirectoryPicker({mode:"readwrite"}),En=wn.name,vu(),console.log("[PROJECT] Nuovo progetto creato:",En));const i=En,e={metadata:{name:i,created:new Date().toISOString(),version:"2.0"},settings:up()},n=await(await wn.getFileHandle(`${i}_settings.json`,{create:!0})).createWritable();await n.write(JSON.stringify(e,null,2)),await n.close();const s=ki("Altoparlante"),o={metadata:{name:`${i} - Speakers`,created:new Date().toISOString(),version:"2.0"},speakers:s},a=await(await wn.getFileHandle(`${i}_speakers.json`,{create:!0})).createWritable();await a.write(JSON.stringify(o,null,2)),await a.close();const l=ki("Omnifonte"),c=ki("Orifonte"),u=ki("Zona"),d={...l,...c,...u},h={metadata:{name:`${i} - Sources`,created:new Date().toISOString(),version:"2.0"},sources:d},_=await(await wn.getFileHandle(`${i}_sources.json`,{create:!0})).createWritable();await _.write(JSON.stringify(h,null,2)),await _.close(),console.log("[PROJECT] Progetto salvato:",i),alert(`Progetto "${i}" salvato con successo!`)}catch(i){console.error("[PROJECT] Errore nel salvataggio:",i),alert("Errore nel salvataggio del progetto: "+i.message)}}async function aM(){try{wn=await window.showDirectoryPicker({mode:"readwrite"}),En=wn.name,vu(),console.log("[PROJECT] Nuovo progetto creato (Save As):",En);const i=En,e={metadata:{name:i,created:new Date().toISOString(),version:"2.0"},settings:up()},n=await(await wn.getFileHandle(`${i}_settings.json`,{create:!0})).createWritable();await n.write(JSON.stringify(e,null,2)),await n.close();const s=ki("Altoparlante"),o={metadata:{name:`${i} - Speakers`,created:new Date().toISOString(),version:"2.0"},speakers:s},a=await(await wn.getFileHandle(`${i}_speakers.json`,{create:!0})).createWritable();await a.write(JSON.stringify(o,null,2)),await a.close();const l=ki("Omnifonte"),c=ki("Orifonte"),u=ki("Zona"),d={...l,...c,...u},h={metadata:{name:`${i} - Sources`,created:new Date().toISOString(),version:"2.0"},sources:d},_=await(await wn.getFileHandle(`${i}_sources.json`,{create:!0})).createWritable();await _.write(JSON.stringify(h,null,2)),await _.close(),console.log("[PROJECT] Progetto salvato come:",i),alert(`Progetto "${i}" salvato come nuovo progetto!`)}catch(i){console.error("[PROJECT] Errore nel salvataggio:",i),alert("Errore nel salvataggio del progetto: "+i.message)}}async function lM(){try{const i=await window.showDirectoryPicker({mode:"read"});wn=i,En=i.name,vu();const e=En;console.log("[PROJECT] Caricamento progetto:",e);try{const s=await(await(await i.getFileHandle(`${e}_settings.json`)).getFile()).text(),o=JSON.parse(s);o.settings&&cM(o.settings),console.log("[PROJECT] Settings caricati")}catch(t){console.warn("[PROJECT] File settings non trovato o errore:",t)}try{const s=await(await(await i.getFileHandle(`${e}_speakers.json`)).getFile()).text(),o=JSON.parse(s),{loadSpeakersFromData:r}=await ys(async()=>{const{loadSpeakersFromData:a}=await Promise.resolve().then(()=>Nh);return{loadSpeakersFromData:a}},void 0);await r(o),console.log("[PROJECT] Speakers caricati")}catch(t){console.warn("[PROJECT] File speakers non trovato o errore:",t)}try{const s=await(await(await i.getFileHandle(`${e}_sources.json`)).getFile()).text(),o=JSON.parse(s),{loadSourcesFromData:r}=await ys(async()=>{const{loadSourcesFromData:a}=await Promise.resolve().then(()=>Nh);return{loadSourcesFromData:a}},void 0);await r(o),console.log("[PROJECT] Sources caricati")}catch(t){console.warn("[PROJECT] File sources non trovato o errore:",t)}alert(`Progetto "${e}" caricato con successo!`)}catch(i){console.error("[PROJECT] Errore nel caricamento:",i),alert("Errore nel caricamento del progetto: "+i.message)}}function cM(i){if(i){if(i.osc){const e=document.getElementById("oscHost"),t=document.getElementById("oscPort");e&&(e.value=i.osc.host),t&&(t.value=i.osc.port),e&&e.dispatchEvent(new Event("change")),t&&t.dispatchEvent(new Event("change"))}if(i.plastico){const e=document.getElementById("plasticoToggle"),t=document.getElementById("plasticoThreshold");e&&(e.checked=i.plastico.visible,e.dispatchEvent(new Event("change"))),t&&i.plastico.threshold!==void 0&&(t.value=i.plastico.threshold,t.dispatchEvent(new Event("input")))}}}function dp(){return wn}function hp(){return En}typeof window<"u"&&window.addEventListener("DOMContentLoaded",()=>{const i=document.getElementById("saveProjectBtn");i&&i.addEventListener("click",()=>{rM()});const e=document.getElementById("saveProjectAsBtn");e&&e.addEventListener("click",()=>{aM()});const t=document.getElementById("loadProjectBtn");t&&t.addEventListener("click",()=>{lM()})});oM();function Sa(i){const e={};return je.filter(t=>t.name&&t.name.startsWith(i)).forEach(t=>{const n=t.parent&&t.parent.type==="Group"?t.parent:t,s=t.name.replace(/\s+/g,"_");e[s]={position:{x:n.position.x,y:n.position.z,z:n.position.y},rotation:{x:n.rotation.x,y:n.rotation.z,z:n.rotation.y},scale:{x:n.scale.x,y:n.scale.z,z:n.scale.y},tags:t.userData.tags||[],menuState:t.userData.menuState||{}}}),e}async function Lh(){const i=Sa("Altoparlante"),e={metadata:{name:"Speakers Preset",created:new Date().toISOString(),version:"2.0"},speakers:i},t=new Blob([JSON.stringify(e,null,2)],{type:"application/json"}),n=dp(),s=hp();let o="speakers_preset.json";s&&(o=`${s}_speakers.json`);const r={suggestedName:o,types:[{description:"Preset Altoparlanti",accept:{"application/json":[".json"]}}]};n&&(r.startIn=n);const l=await(await window.showSaveFilePicker(r)).createWritable();await l.write(t),await l.close(),console.log("[PRESET] Speakers preset salvato")}async function Ih(){const i={},e=Sa("Omnifonte");Object.assign(i,e);const t=Sa("Orifonte");Object.assign(i,t);const n=Sa("Zona");Object.assign(i,n);const s={metadata:{name:"Sources Preset",created:new Date().toISOString(),version:"2.0"},sources:i},o=new Blob([JSON.stringify(s,null,2)],{type:"application/json"}),r=dp(),a=hp();let l="sources_preset.json";a&&(l=`${a}_sources.json`);const c={suggestedName:l,types:[{description:"Preset Fonti/Zona",accept:{"application/json":[".json"]}}]};r&&(c.startIn=r);const d=await(await window.showSaveFilePicker(c)).createWritable();await d.write(o),await d.close(),console.log("[PRESET] Sources preset salvato")}typeof window<"u"&&(window.addEventListener("DOMContentLoaded",()=>{const i=document.getElementById("saveSpeakersPresetBtn");i&&i.addEventListener("click",()=>{Lh()});const e=document.getElementById("saveSourcesPresetBtn");e&&e.addEventListener("click",()=>{Ih()})}),window.addEventListener("keydown",async i=>{if((i.ctrlKey||i.metaKey)&&i.key==="s"){i.preventDefault();try{await Lh(),await Ih(),alert("Preset salvati con successo!")}catch(e){alert("Errore nel salvataggio preset: "+e)}}}));function Ma(i,e,t=!0){if(!window.messageBroker)return;const n=i.name.match(/(\d+)$/),s=n?parseInt(n[1],10):1;if(t&&(window.messageBroker.sendObjectCreated({id:i.userData.id,name:i.name,type:e,position:{x:i.position.x,y:i.position.y,z:i.position.z},rotation:{x:i.rotation.x,y:i.rotation.y,z:i.rotation.z},scale:{x:i.scale.x,y:i.scale.y,z:i.scale.z},tags:i.userData.tags||[0]}),window.messageBroker.sendObjectTags({name:i.name,type:e,tags:i.userData.tags||[0]})),i.userData.menuState)for(const o in i.userData.menuState)window.messageBroker.sendCustomParameter({type:e,index:s,paramName:o,value:i.userData.menuState[o]});console.log(`[PRESET] Inviati messaggi OSC per ${i.name}:`,{sentCreatedAndTags:t,tags:i.userData.tags,menuParams:Object.keys(i.userData.menuState||{})})}function Hi(i){for(let e=je.length-1;e>=0;e--){const t=je[e];t.name&&t.name.startsWith(i)&&(t.parent&&t.parent.remove(t),je.splice(e,1))}ne.children.forEach(e=>{e.name&&e.name.startsWith(i)&&ne.remove(e)})}async function Na(){const[i]=await window.showOpenFilePicker({types:[{description:"Preset Altoparlanti",accept:{"application/json":[".json"]}}]}),t=await(await i.getFile()).text();let n;try{n=JSON.parse(t)}catch{alert("File preset non valido");return}await fp(n)}async function fp(i){Hi("Altoparlante");const t=i.metadata||i.settings||i.speakers?i.speakers:i,n=Object.entries(t);for(let s=0;s<n.length;s++){const[o,r]=n[s],a=o.replace(/_/g," "),l={x:r.position.x,y:r.position.z,z:r.position.y},c=r.rotation?{x:r.rotation.x,y:r.rotation.z,z:r.rotation.y}:null,u=hn();Wn("./modelli/galleriaOBJ/speaker3dec.obj",a,pi,.045,l.x,l.z,l.y,c,u),await new Promise(d=>{const h=setInterval(()=>{const _=je.find(g=>g.name===a);_&&(clearInterval(h),clearTimeout(f),r.tags&&(_.userData.tags=r.tags),r.menuState&&(_.userData.menuState=r.menuState),console.log("[PRESET LOADER] Altoparlante caricato:",a,{tags:_.userData.tags,menuState:_.userData.menuState}),Jo(_),Ma(_,"altoparlante",!1),d())},50),f=setTimeout(()=>{clearInterval(h),console.warn("[PRESET LOADER] Timeout caricamento per:",a),d()},3e3)})}yt(),setTimeout(()=>Xe("altoparlanti"),50)}async function Oa(){const[i]=await window.showOpenFilePicker({types:[{description:"Preset Fonti/Zona",accept:{"application/json":[".json"]}}]}),t=await(await i.getFile()).text();let n;try{n=JSON.parse(t)}catch{alert("File preset non valido");return}await pp(n)}async function pp(i){Hi("Omnifonte"),Hi("Orifonte"),Hi("Zona");const t=i.metadata||i.settings||i.sources?i.sources:i,n=[ar,lr,cr,ur];let s=0;for(const[o,r]of Object.entries(t)){const a=o.replace(/_/g," "),l={x:r.position.x,y:r.position.z,z:r.position.y},c=r.rotation?{x:r.rotation.x,y:r.rotation.z,z:r.rotation.y}:null;if(o.startsWith("Omnifonte")){const u=hn(),d=new Xi(.3,40,40),h=new re(d,jn);if(h.scale.set(.25,.24,.25),h.name=a,h.isDashed=!1,h.position.set(l.x,l.y,l.z),c&&h.rotation.set(c.x,c.y,c.z),h.userData.id=u,r.tags&&(h.userData.tags=r.tags),r.menuState&&(h.userData.menuState=r.menuState),ne.add(h),je.push(h),setTimeout(()=>{Jo(h),Ma(h,"omnifonte")},100),window.max&&window.max.outlet){h.updateMatrixWorld(!0);const f=new b;h.getWorldPosition(f);let _=1;const g=h.name.match(/^(.*?)[\s_-]?(\d+)$/);g&&(_=parseInt(g[2],10));const m=f.x,p=f.z,w=f.y,y=Math.sqrt(m*m+p*p);let x=Math.atan2(p,m)*(180/Math.PI)-90;x<0&&(x+=360),window.max.outlet("Omnifonte",_,m,p,w,x,y)}}else if(o.startsWith("Orifonte")){const u=hn();Wn("./modelli/galleriaOBJ/arrow.obj",a,jn,.045,l.x,l.z,l.y,c,u),setTimeout(()=>{const d=ne.children.find(h=>h.name===a)||je.find(h=>h.name===a);if(d&&(r.tags&&(d.userData.tags=r.tags),r.menuState&&(d.userData.menuState=r.menuState),Jo(d),Ma(d,"orifonte",!1),window.max&&window.max.outlet)){d.updateMatrixWorld(!0);const h=new b;d.getWorldPosition(h);let f=1;const _=d.name.match(/^(.*?)[\s_-]?(\d+)$/);_&&(f=parseInt(_[2],10));const g=h.x,m=h.z,p=h.y,w=Math.sqrt(g*g+m*m);let y=Math.atan2(m,g)*(180/Math.PI)-90;y<0&&(y+=360),window.max.outlet("Omnifonte",f,g,m,p,y,w)}},100)}else if(o.startsWith("Zona")){const u=hn(),d=s%n.length,h=n[d];s++;const f=new Mn;f.name=a;let _=new Mt(3.2,1.8,3.2);const g=new ou(_),{LineSegmentsGeometry:m}=await ys(async()=>{const{LineSegmentsGeometry:T}=await Promise.resolve().then(()=>lw);return{LineSegmentsGeometry:T}},void 0),{LineSegments2:p}=await ys(async()=>{const{LineSegments2:T}=await Promise.resolve().then(()=>dw);return{LineSegments2:T}},void 0),w=new m().fromEdgesGeometry(g),y=new p(w,h);y.computeLineDistances(),y.name=a,y.isDashed=!0,y.userData.id=u,r.tags&&(y.userData.tags=r.tags),r.menuState&&(y.userData.menuState=r.menuState);const x=new So({color:new oe(15883520),transparent:!0,depthTest:!0,wireframe:!1,opacity:0,visible:!0}),A=new re(_,x);A.name=a,f.add(A),f.add(y),f.position.set(l.x,l.y,l.z),c&&f.rotation.set(c.x,c.y,c.z),ne.add(f),je.push(y),setTimeout(()=>{Jo(y),Ma(y,"zona")},100)}}yt(),setTimeout(()=>Xe("omnifonti"),50)}function mp(){Hi("Altoparlante"),Hi("Omnifonte"),Hi("Orifonte"),Hi("Zona"),yt(),setTimeout(()=>Xe(["altoparlanti","omnifonti"]),50)}typeof window<"u"&&window.addEventListener("DOMContentLoaded",()=>{const i=document.getElementById("loadSpeakersPresetBtn");i&&i.addEventListener("click",()=>{Na()});const e=document.getElementById("loadSourcesPresetBtn");e&&e.addEventListener("click",()=>{Oa()});const t=document.getElementById("resetSceneBtn");t&&t.addEventListener("click",()=>{confirm("Vuoi davvero cancellare tutti gli altoparlanti, fonti e zone dalla scena?")&&mp()})});const Nh=Object.freeze(Object.defineProperty({__proto__:null,loadSourcesFromData:pp,loadSourcesPreset:Oa,loadSpeakersFromData:fp,loadSpeakersPreset:Na,resetScene:mp},Symbol.toStringTag,{value:"Module"})),ko=new b,Ho=new b,is=new b,ss=new b,os=new b,ca=new mn,ua=new mn,Oh=new b,Uh=new b;class uM extends vt{constructor(e){super();const t={},n=e.attributes.position;let s;if(e.index)s=e.index;else{const c=new Array(n.count/3).fill().map((u,d)=>d);s=new Tt(new Uint32Array(c),1,!1)}for(let c=0,u=s.count;c<u;c+=3){const d=[s.getX(c+0),s.getX(c+1),s.getX(c+2)];for(let h=0;h<3;h++){const f=d[h],_=d[(h+1)%3],g=`${f}_${_}`,m=`${_}_${f}`;m in t?(t[m].controlIndex1=d[(h+2)%3],t[m].tri1=c/3):t[g]={index0:f,index1:_,controlIndex0:d[(h+2)%3],controlIndex1:null,tri0:c/3,tri1:null}}}const o=[],r=[],a=[],l=[];for(const c in t){const{index0:u,index1:d,controlIndex0:h,controlIndex1:f,tri0:_,tri1:g}=t[c];f!==null&&(ca.a.fromBufferAttribute(n,s.getX(_*3+0)),ca.b.fromBufferAttribute(n,s.getX(_*3+1)),ca.c.fromBufferAttribute(n,s.getX(_*3+2)),ua.a.fromBufferAttribute(n,s.getX(g*3+0)),ua.b.fromBufferAttribute(n,s.getX(g*3+1)),ua.c.fromBufferAttribute(n,s.getX(g*3+2)),ca.getNormal(Oh).normalize(),ua.getNormal(Uh).normalize(),!(Oh.dot(Uh)<.01)&&(ko.fromBufferAttribute(n,u),Ho.fromBufferAttribute(n,d),is.subVectors(ko,Ho),ss.fromBufferAttribute(n,h),os.fromBufferAttribute(n,f),o.push(ko.x,ko.y,ko.z),r.push(is.x,is.y,is.z),a.push(ss.x,ss.y,ss.z),l.push(os.x,os.y,os.z),o.push(Ho.x,Ho.y,Ho.z),r.push(is.x,is.y,is.z),a.push(ss.x,ss.y,ss.z),l.push(os.x,os.y,os.z)))}this.setAttribute("position",new Tt(new Float32Array(o),3,!1)),this.setAttribute("direction",new Tt(new Float32Array(r),3,!1)),this.setAttribute("control0",new Tt(new Float32Array(a),3,!1)),this.setAttribute("control1",new Tt(new Float32Array(l),3,!1))}}class dM extends To{fromConditionalEdgesGeometry(e){super.fromEdgesGeometry(e);const{direction:t,control0:n,control1:s}=e.attributes;return this.setAttribute("direction",new In(new no(t.array,6,1),3,0)),this.setAttribute("control0",new In(new no(n.array,6,1),3,0)),this.setAttribute("control1",new In(new no(s.array,6,1),3,0)),this}}const hM={linewidth:{value:1},resolution:{value:new ge(1,1)},dashScale:{value:1},dashSize:{value:1},gapSize:{value:1},opacity:{value:1}},kl={uniforms:Ms.merge([ae.common,ae.fog,hM]),vertexShader:`
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
		`};class gp extends Et{constructor(e){super({type:"ConditionalLineMaterial",uniforms:Ms.clone(kl.uniforms),vertexShader:kl.vertexShader,fragmentShader:kl.fragmentShader,clipping:!0}),this.dashed=!1,Object.defineProperties(this,{color:{enumerable:!0,get:function(){return this.uniforms.diffuse.value},set:function(t){this.uniforms.diffuse.value=t}},linewidth:{enumerable:!0,get:function(){return this.uniforms.linewidth.value},set:function(t){this.uniforms.linewidth.value=t}},dashScale:{enumerable:!0,get:function(){return this.uniforms.dashScale.value},set:function(t){this.uniforms.dashScale.value=t}},dashSize:{enumerable:!0,get:function(){return this.uniforms.dashSize.value},set:function(t){this.uniforms.dashSize.value=t}},gapSize:{enumerable:!0,get:function(){return this.uniforms.gapSize.value},set:function(t){this.uniforms.gapSize.value=t}},opacity:{enumerable:!0,get:function(){return this.uniforms.opacity.value},set:function(t){this.uniforms.opacity.value=t}},resolution:{enumerable:!0,get:function(){return this.uniforms.resolution.value},set:function(t){this.uniforms.resolution.value.copy(t)}}}),this.setValues(e)}}gp.prototype.isConditionalLineMaterial=!0;class fM{constructor(e,t){this.scene=e,this.renderer=t,this.params={threshold:40,thickness:2,opacity:.5,materialColor:16777215,lineColor:0},this.managedModels=new Map}applyConditionalLines(e,t={}){const n={...this.params,...t},s=this.mergeObject(e),o=this.createBackgroundModel(s,n),r=this.createEdgesModel(s,n),a=this.createConditionalModel(s,n);this.scene.add(o),this.scene.add(r),this.scene.add(a);const l={originalModel:s,backgroundModel:o,edgesModel:r,conditionalModel:a,setOpacity:u=>this.setOpacity(o,u),setThreshold:u=>{const d=this.updateThreshold(s,l.edgesModel,u,n);return l.edgesModel=d,d},setThickness:u=>this.setThickness([l.edgesModel,a],u),setMaterialColor:u=>this.setMaterialColor(o,u),setLineColor:u=>this.setLineColor([l.edgesModel,a],u),dispose:()=>this.disposeModel(o,r,a)},c=Date.now()+Math.random();return this.managedModels.set(c,l),l.id=c,l}mergeObject(e){e.updateMatrixWorld(!0);const t=[];e.traverse(r=>{if(r.isMesh){const a=r.geometry.clone();a.applyMatrix4(r.matrixWorld);for(const l in a.attributes)l!=="position"&&l!=="normal"&&a.deleteAttribute(l);t.push(a.toNonIndexed())}});let n;try{n=Qw(t,!1)}catch(r){try{n=(void 0)(t,!1)}catch(a){console.error("Both mergeGeometries and mergeBufferGeometries failed:",r,a),n=t[0]}}try{ra&&(n=ra(n))}catch(r){console.warn("mergeVertices failed:",r)}const s=new Mn,o=new re(n);return s.add(o),s}createBackgroundModel(e,t){console.log("createBackgroundModel called with config.materialColor:",t.materialColor);const n=e.clone();return n.traverse(s=>{if(s.isMesh){const o=new oe(.8392156862745098,.8392156862745098,.8392156862745098);s.material=new ti({color:o,transparent:!1,opacity:1}),s.material.polygonOffset=!0,s.material.polygonOffsetFactor=1,s.material.polygonOffsetUnits=1,s.renderOrder=2,console.log("Material color created:",o),console.log("Material hex:",o.getHex().toString(16))}}),n}createEdgesModel(e,t){const n=e.clone(),s=[];n.traverse(o=>{o.isMesh&&s.push(o)});for(const o of s){const r=o.parent,a=new ou(o.geometry,t.threshold),l=new To().fromEdgesGeometry(a),c=new rr(l,new Si({color:t.lineColor,linewidth:t.thickness}));c.position.copy(o.position),c.scale.copy(o.scale),c.rotation.copy(o.rotation),r.remove(o),r.add(c)}return n}createConditionalModel(e,t){const n=e.clone(),s=[];n.traverse(o=>{o.isMesh&&s.push(o)});for(const o of s){const r=o.parent,a=o.geometry.clone();for(const h in a.attributes)h!=="position"&&a.deleteAttribute(h);let l=a;try{ra&&(l=ra(a))}catch(h){console.warn("mergeVertices failed for conditional model:",h),l=a}const c=new uM(l),u=new dM().fromConditionalEdgesGeometry(c),d=new rr(u,new gp({color:t.lineColor,linewidth:t.thickness}));d.position.copy(o.position),d.scale.copy(o.scale),d.rotation.copy(o.rotation),r.remove(o),r.add(d)}return n}setOpacity(e,t){e.traverse(n=>{n.isMesh&&n.material&&(n.material.transparent=t<1,n.material.opacity=t,n.material.needsUpdate=!0)})}setThickness(e,t){e.forEach(n=>{n.traverse(s=>{s.material&&s.material.linewidth!==void 0&&(s.material.linewidth=t,s.material.needsUpdate=!0)})})}setMaterialColor(e,t){console.log(`setMaterialColor called with color: 0x${t.toString(16)}`);const n=new oe(214/255,214/255,214/255);e.traverse(s=>{s.isMesh&&s.material&&(console.log(`Setting material color for mesh: ${s.name||"unnamed"}`,s.material),s.material.color.copy(n),console.log("Material color after set:",s.material.color),s.material.needsUpdate=!0,setTimeout(()=>{console.log("Material color after 1 second:",s.material.color)},1e3))})}setLineColor(e,t){e.forEach(n=>{n.traverse(s=>{s.material&&s.material.color&&s.material.color.setHex(t)})})}updateThreshold(e,t,n,s){this.scene.remove(t),t.traverse(a=>{a.material&&a.material.dispose(),a.geometry&&a.geometry.dispose()});const o={...s,threshold:n},r=this.createEdgesModel(e,o);return r.name=t.name,this.scene.add(r),r}disposeModel(e,t,n){[e,t,n].forEach(s=>{s&&(this.scene.remove(s),s.traverse(o=>{o.isMesh&&(o.geometry&&o.geometry.dispose(),o.material&&(Array.isArray(o.material)?o.material.forEach(r=>r.dispose()):o.material.dispose()))}))})}updateResolutions(){this.managedModels.forEach(e=>{[e.edgesModel,e.conditionalModel].forEach(t=>{t.traverse(n=>{n.material&&n.material.resolution&&(this.renderer.getSize(n.material.resolution),n.material.resolution.multiplyScalar(window.devicePixelRatio))})})})}disposeAll(){this.managedModels.forEach(e=>{e.dispose()}),this.managedModels.clear()}}let Ea,Ot=null,en=null,pM=0;function hn(){return`obj_${Date.now()}_${++pM}`}function _p(){const i=new Ga,t="/Cielo/"+"modelli/galleriaGLTF/horsehead.glb";i.load(t,function(n){en=n.scene,en.name="POV Cursor",en.alwaysInDict=!0,en.scale.setScalar(.1),en.position.set(0,1.2,0),en.visible=!1,en.traverse(s=>{s.isMesh&&(s.material=pi)}),ne.add(en),yt(),setTimeout(Xe,50),console.log("POV Cursor model loaded and initialized")},function(n){console.log(`POV Cursor: ${Math.round(n.loaded/n.total*100)}% loaded`)},function(n){console.error("Error loading POV Cursor model:",n)})}function mM(){return Ea}function $o(i){const t=getComputedStyle(document.documentElement).getPropertyValue(i).trim();if(console.log(`getCSSColorAsHex: ${i} = "${t}"`),t==="black"||t==="#000000"||t==="rgb(0, 0, 0)")return console.log("  -> Returning black: 0x000000"),0;if(t==="white"||t==="#ffffff"||t==="rgb(255, 255, 255)")return console.log("  -> Returning white: 0xffffff"),16777215;if(t==="#d6d6d6"||t==="rgb(214, 214, 214)")return console.log("  -> Returning light gray: 0xd6d6d6"),14079702;if(t.startsWith("#")){const s=parseInt(t.slice(1),16);return console.log(`  -> Parsed hex: 0x${s.toString(16)} (decimal: ${s})`),s}const n=t.match(/rgb\((\d+),\s*(\d+),\s*(\d+)\)/);if(n){const s=parseInt(n[1]),o=parseInt(n[2]),r=parseInt(n[3]),a=s<<16|o<<8|r;return console.log(`  -> Parsed RGB(${s}, ${o}, ${r}): 0x${a.toString(16)}`),a}return i==="--fondale"?(console.log("  -> Fallback for --fondale: 0xd6d6d6"),14079702):i==="--testo"?(console.log("  -> Fallback for --testo: 0x000000"),0):(console.log("  -> Default fallback: 0x000000"),0)}document.addEventListener("DOMContentLoaded",()=>{Ea=new fM(ne,qe),window.conditionalLinesManager=Ea,window.currentPlasticoControl=null;const i=document.getElementById("addCone"),e=document.getElementById("addHalo"),t=document.getElementById("addSphere"),n=document.getElementById("addArrow"),s=document.getElementById("addCloudElement"),o=document.getElementById("loadGenericGltf"),r=document.getElementById("addPovCursor");let a=0;function l(){if(a>0)return a+1;let v=0;return ne.children.forEach(C=>{C.name&&C.name.startsWith("Altoparlante ")&&v++}),a=v,v+1}let c=0;o&&o.addEventListener("click",()=>{c++;let v=`Modello custom ${c}`;US("./modelli/galleriaGLTF/scultura.glb",v,.045,-3.5,-.7,.5),yt(),setTimeout(Xe,50)}),i&&i.addEventListener("click",()=>{const C=`Altoparlante ${l()}`,N=hn();console.log("Creando altoparlante:",C,"con ID:",N),Wn("./modelli/galleriaOBJ/speaker3dec.obj",C,pi,.045,0,0,1.2,null,N),yt(),setTimeout(()=>Xe("altoparlanti"),50)});let u=0;e&&e.addEventListener("click",()=>{u++;let v=`Aureola ${u}`;const C=hn();console.log("Creando aureola:",v,"con ID:",C),Wn("./modelli/galleriaOBJ/halo2_lowpoly.obj",v,pi,.15,0,0,1.2,null,C),yt(),setTimeout(Xe,50)});let d=0;n&&n.addEventListener("click",()=>{d++;const v=`Orifonte ${d}`,C=hn();Wn("./modelli/galleriaOBJ/arrow.obj",v,jn,.045,0,0,1.2,null,C),yt(),setTimeout(Xe,50),setTimeout(()=>{const N=ne.children.find(O=>O.name===v);N&&window.max&&window.max.outlet&&A(N)},60)});let h=0;s&&s.addEventListener("click",()=>{h++;const v=`Nuvola:client ${h}`;Wn("./modelli/galleriaOBJ/cloudDec.obj",v,pi,.035,0,0,1.2),yt(),setTimeout(Xe,50)}),t&&t.addEventListener("click",v=>{var I,G;let C=0;ne.children.forEach(F=>{F.name&&F.name.startsWith("Omnifonte ")&&C++});let N=`Omnifonte ${C+1}`;const O=new Xi(.3,40,40),z=jn,D=new re(O,z);D.scale.set(.25,.24,.25),D.name=N,D.userData.id=hn(),D.userData.tags=[0],D.isDashed=!1,D.position.set(0,1.2,0),ne.add(D),je.push(D),(I=window.multiClientManager)!=null&&I.isMaster&&((G=window.multiClientManager)!=null&&G.isEnabled)&&window.multiClientManager.notifyObjectCreated(D.userData.id,"omnifonte",N,{x:0,y:1.2,z:0},{x:0,y:0,z:0},{x:.25,y:.24,z:.25},{},D.userData.tags||[0]),window.messageBroker.sendObjectCreated({id:D.userData.id,name:N,type:"omnifonte",position:{x:0,y:1.2,z:0},rotation:{x:0,y:0,z:0},scale:{x:.25,y:.24,z:.25},tags:D.userData.tags||[0]}),yt(),setTimeout(()=>Xe("omnifonti"),50),setTimeout(()=>{window.max&&window.max.outlet&&A(D)},60)}),r&&r.addEventListener("click",()=>{if(en){en.visible=!en.visible;const v=je.indexOf(en);en.visible&&v===-1?je.push(en):!en.visible&&v!==-1&&je.splice(v,1),yt(),setTimeout(Xe,50)}else _p()});let f=0;const _=[ar,lr,cr,ur],g=document.getElementById("infoDivCenter"),m=document.getElementById("addZone"),p=document.getElementById("addZoneCube"),w=document.getElementById("addZoneSphere"),y=document.getElementById("closeInfoDivCenter");m&&g&&m.addEventListener("click",()=>{g.style.opacity=1,g.style.pointerEvents="all"}),p&&g&&p.addEventListener("click",()=>{f++;const v=(f-1)%_.length,C=_[v],N=`Zona ${f}`;x(!1,N,C,0,0,1.2),g.style.opacity=0,g.style.pointerEvents="none",setTimeout(Xe,50)}),y&&g&&y.addEventListener("click",()=>{g.style.opacity=0,g.style.pointerEvents="none"}),w&&g&&w.addEventListener("click",()=>{f++;const v=(f-1)%_.length,C=_[v],N=`Zona ${f}`;x(!0,N,C,0,0,1.2),g.style.opacity=0,g.style.pointerEvents="none",setTimeout(Xe,50)});function x(v,C,N,O,z,D){const I=new Mn;I.name=`${C}`;let G;v?G=new Xi(.5,8,8):G=new Mt(3.2,1.8,3.2);const F=new ou(G),W=new To().fromEdgesGeometry(F),j=new rr(W,N);j.computeLineDistances(),j.name=`${C}`,j.isDashed=!0;const ee=new So({color:new oe(15883520),transparent:!0,depthTest:!0,wireframe:!1,opacity:0,visible:!0}),ce=new re(G,ee);ce.name=`${C}`,I.add(ce),I.add(j),I.position.set(O,D,z),ne.add(I),je.push(j),yt()}window.addSphereAtPosition=function(v,C,N,O=null,z=null){var j,ee;let D,I;if(z&&O)D=z,I=O,console.log("addSphereAtPosition:",D,"ID:",I,"pos:",v,C,N,"(from master)");else{let ce=0;ne.children.forEach(Re=>{Re.name&&Re.name.startsWith("Omnifonte ")&&ce++}),D=`Omnifonte ${ce+1}`,I=hn(),console.log("addSphereAtPosition:",D,"ID:",I,"pos:",v,C,N,"(generated)")}const G=new Xi(.3,40,40),F=jn,W=new re(G,F);W.scale.set(.25,.24,.25),W.name=D,W.userData.id=I,W.userData.tags=[0],W.isDashed=!1,W.position.set(v,N,C),ne.add(W),je.push(W),(j=window.multiClientManager)!=null&&j.isMaster&&((ee=window.multiClientManager)!=null&&ee.isEnabled)&&window.multiClientManager.notifyObjectCreated(W.userData.id,"omnifonte",D,{x:v,y:N,z:C},{x:0,y:0,z:0},{x:.25,y:.24,z:.25}),window.messageBroker.sendObjectCreated({id:W.userData.id,name:D,type:"omnifonte",position:{x:v,y:C,z:N},rotation:{x:0,y:0,z:0},scale:{x:.25,y:.24,z:.25},tags:W.userData.tags||[0]}),yt(),setTimeout(()=>Xe("omnifonti"),50),setTimeout(()=>{window.max&&window.max.outlet&&A(W)},60)},window.addSpeakerAtPosition=function(v,C,N,O=null,z=null){const D=z&&parseInt(z.split(" ")[1])||l(),I=z||`Altoparlante ${D}`,G=O||hn();z||(a=D),console.log("addSpeakerAtPosition:",I,"ID:",G,"pos:",v,C,N,O?"(from master)":"(generated)"),Wn("./modelli/galleriaOBJ/speaker3dec.obj",I,pi,.045,v,C,N,null,G),yt(),setTimeout(()=>Xe("altoparlanti"),50)},window.addArrowAtPosition=function(v,C,N,O=null,z=null){let D,I;if(z&&O)D=z,I=O,console.log("addArrowAtPosition:",D,"ID:",I,"pos:",v,C,N,"(from master)");else{if(typeof d>"u"){let G=0;ne.children.forEach(F=>{F.name&&F.name.startsWith("Orifonte ")&&G++}),d=G}d++,D=`Orifonte ${d}`,I=hn(),console.log("addArrowAtPosition:",D,"ID:",I,"pos:",v,C,N,"(generated)")}Wn("./modelli/galleriaOBJ/arrow.obj",D,jn,.045,v,C,N,null,I),yt(),setTimeout(Xe,50),setTimeout(()=>{const G=ne.children.find(F=>F.name===D);G&&window.max&&window.max.outlet&&A(G)},60)},window.addHaloAtPosition=function(v,C,N){if(typeof u>"u"){let D=0;ne.children.forEach(I=>{I.name&&I.name.startsWith("Aureola")&&D++}),u=D}u++;let O=`Aureola ${u}`;const z=hn();console.log("Creando aureola:",O,"con ID:",z),Wn("./modelli/galleriaOBJ/halo2_lowpoly.obj",O,pi,.15,v,C,N,null,z),yt(),setTimeout(Xe,50)},window.addZoneAtPosition=function(v,C,N){if(typeof f>"u"){let G=0;ne.children.forEach(F=>{F.name&&F.name.startsWith("Zona ")&&G++}),f=G}f++;const O=[ar,lr,cr,ur],z=(f-1)%O.length,D=O[z],I=`Zona ${f}`;x(!1,I,D,v,C,N),setTimeout(Xe,50)};function A(v){if(!v||!v.name)return;const C=v.name.toLowerCase();if(!(C.includes("omnifonte")||C.includes("orifonte")))return;v.updateMatrixWorld(!0);const N=new b;v.getWorldPosition(N);let O=1;const z=v.name.match(/^(.*?)[\s_-]?(\d+)$/);z&&(O=parseInt(z[2],10));const D=N.x,I=N.z,G=N.y,F=Math.sqrt(D*D+I*I);let W=Math.atan2(I,D)*(180/Math.PI)-90;W<0&&(W+=360),window.max.outlet("Omnifonte",O,D,I,G,W,F)}function T(){var z,D,I,G;const v=ne.getObjectByName("architettura");if(v){const F=je.indexOf(v);F!==-1&&je.splice(F,1),v.parent&&v.parent.remove(v),v.geometry&&((D=(z=v.geometry).dispose)==null||D.call(z)),v.material&&((G=(I=v.material).dispose)==null||G.call(I))}const C=ne.getObjectByName("architettura-background");C&&ne.remove(C);const N=ne.getObjectByName("architettura-edges");N&&ne.remove(N);const O=ne.getObjectByName("architettura-conditional");O&&ne.remove(O),Ot&&(Ot.dispose(),Ot=null)}const P=document.getElementById("loadPlastico");if(P){let v=function(I){const G=O?parseFloat(O.value):60,F=z?parseFloat(z.value):2,W=D?parseFloat(D.value):.8,j=$o("--fondale"),ee=$o("--testo");try{console.log("About to call applyConditionalLines with colors:",{materialColor:j,lineColor:ee}),Ot=Ea.applyConditionalLines(I,{threshold:G,thickness:F,opacity:W,materialColor:j,lineColor:ee}),console.log("applyConditionalLines returned:",Ot),window.currentPlasticoControl=Ot,console.log("Set window.currentPlasticoControl:",window.currentPlasticoControl),ne.remove(I),ne.add(Ot.backgroundModel),ne.add(Ot.edgesModel),ne.add(Ot.conditionalModel),Ot.backgroundModel.name="architettura-background",Ot.edgesModel.name="architettura-edges",Ot.conditionalModel.name="architettura-conditional"}catch(ce){console.error("Error applying ConditionalLines:",ce)}},C=function(){if(Ot){const I=O?parseFloat(O.value):60,G=z?parseFloat(z.value):2,F=D?parseFloat(D.value):.8;Ot.setThreshold(I),Ot.setThickness(G),Ot.setOpacity(F);const W=$o("--fondale"),j=$o("--testo");Ot.setMaterialColor(W),Ot.setLineColor(j)}};const N=document.createElement("input");N.type="file",N.accept=".glb,.gltf,.obj",N.style.display="none",document.body.appendChild(N);const O=document.getElementById("plasticoThreshold"),z=document.getElementById("plasticoThickness"),D=document.getElementById("plasticoOpacity");O&&O.addEventListener("input",C),z&&z.addEventListener("input",C),D&&D.addEventListener("input",C),P.addEventListener("click",()=>{T(),N.value="",N.click()}),N.addEventListener("change",async I=>{const G=I.target.files[0];if(!G)return;const F=G.name.split(".").pop().toLowerCase();if(F==="glb"||F==="gltf"){const{GLTFLoader:W}=await ys(async()=>{const{GLTFLoader:ee}=await Promise.resolve().then(()=>NS);return{GLTFLoader:ee}},void 0),j=new FileReader;j.onload=function(ee){let ce=new W,Re=function(ie){console.log("GLTF loaded:",ie);const we=ie.scene;we.name="architettura",console.log("Adding model to scene:",we),ne.add(we),console.log("About to apply conditional lines..."),v(we),setTimeout(Xe,50)},$=function(ie){alert("Errore nel parsing del modello GLTF/GLB")};ce.parse(ee.target.result,"",Re,$)},F==="glb"?j.readAsArrayBuffer(G):j.readAsText(G)}else if(F==="obj"){const{OBJLoader:W}=await ys(async()=>{const{OBJLoader:ee}=await Promise.resolve().then(()=>_w);return{OBJLoader:ee}},void 0),j=new FileReader;j.onload=function(ee){const Re=new W().parse(ee.target.result);console.log("OBJ loaded:",Re),Re.name="architettura",console.log("Adding OBJ to scene:",Re),ne.add(Re),console.log("About to apply conditional lines to OBJ..."),v(Re),setTimeout(Xe,50)},j.readAsText(G)}else alert("Formato non supportato. Usa .glb, .gltf o .obj")})}const L=document.getElementById("generaliMenu");if(L){const v=document.createElement("button");v.textContent="Carica Setup Altoparlanti",v.onclick=()=>Na(),L.appendChild(v);const C=document.createElement("button");C.textContent="Carica Setup Fonti Sonore",C.onclick=()=>Oa(),L.appendChild(C)}const M=document.getElementById("rightMenu");if(M){const v=document.createElement("button");v.textContent="Carica Setup Altoparlanti",v.className="menu-btn",v.onclick=()=>Na(),M.appendChild(v);const C=document.createElement("button");C.textContent="Carica Setup Fonti Sonore",C.className="menu-btn",C.onclick=()=>Oa(),M.appendChild(C)}});document.addEventListener("DOMContentLoaded",()=>{setTimeout(_p,1e3)});function vp(i,e){const t=`Aureola ${e}`,n=hn();return console.log(`[NUVOLA] Creando aureola per device ${i}: ${t} (ID: ${n})`),Wn("./modelli/galleriaOBJ/halo2_lowpoly.obj",t,pi,.15,0,0,1.2,null,n),yt(),setTimeout(Xe,50),{id:n,name:t}}function xp(i){const e=ne.children.find(t=>t.userData.id===i);return e?(console.log(`[NUVOLA] Rimuovendo aureola: ${e.name} (ID: ${i})`),ne.remove(e),yt(),setTimeout(Xe,50),!0):!1}const gM=Object.freeze(Object.defineProperty({__proto__:null,createNuvolaAureola:vp,generateUniqueId:hn,getCSSColorAsHex:$o,getConditionalLinesManager:mM,removeNuvolaAureola:xp},Symbol.toStringTag,{value:"Module"})),_M=12e3,vM=15e3,xM=1e3,qi=new Map,er=new Map,kc=[];let yM=1,Hl=null;function wM(){console.log("🎧 Nuvola Manager initialized"),Hl&&clearInterval(Hl),Hl=setInterval(()=>{wp(),SM()},xM),window.multiClientManager?(console.log("✓ multiClientManager trovato, registering callback"),window.multiClientManager.onNuvolaStatus=i=>{console.log("[NUVOLA] Device update ricevuto:",i.hostname,i.status),yp(i)}):console.warn("[NUVOLA] multiClientManager non trovato")}function yp(i){const e=Date.now(),t=i.hostname;if(qi.set(t,{...i,lastSeen:e,timestamp:i.timestamp}),console.log(`[NUVOLA] Device aggiornato: ${t}, totale devices: ${qi.size}`),!er.has(t)){const n=kc.length>0?kc.shift():yM++,s=vp(t,n);er.set(t,{...s,index:n}),console.log(`[NUVOLA] Aureola creata per ${t}: index ${n}`)}wp()}function SM(){const i=Date.now();qi.forEach((e,t)=>{const n=i-e.lastSeen;if(n>vM&&er.has(t)){const s=er.get(t);console.log(`[NUVOLA] Device ${t} offline da ${Math.round(n/1e3)}s, eliminando aureola`),xp(s.id),kc.push(s.index),er.delete(t),qi.delete(t)}})}function MM(i){return{online:"nuvola-status-online",booting:"nuvola-status-booting",stopped:"nuvola-status-stopped",offline:"nuvola-status-offline"}[i]||"nuvola-status-offline"}function wp(){const i=document.getElementById("nuvola-dashboard");if(!i)return;const e=Date.now();if(qi.size===0){i.innerHTML=`
            <div class="nuvola-no-devices">
                Waiting for devices...
            </div>
        `;return}console.log(`[NUVOLA] Rendering ${qi.size} devices`);let t="";qi.forEach((n,s)=>{const o=e-n.lastSeen>_M,r=o?"offline":n.status,a=MM(r);t+=`
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
        `}),i.innerHTML=t}window.nuvolaManager={getDevices:()=>qi,updateDevice:yp};$w();Wf();wM();OS("./modelli/galleriaGLTF/GenericGallery.glb");BS();class Gi extends gr{constructor(e,t,n,s){super(),this.renderScene=t,this.renderCamera=n,this.selectedObjects=s!==void 0?s:[],this.visibleEdgeColor=new oe(1,1,1),this.hiddenEdgeColor=new oe(.1,.04,.02),this.edgeGlow=0,this.usePatternTexture=!1,this.edgeThickness=1,this.edgeStrength=3,this.downSampleRatio=2,this.pulsePeriod=0,this._visibilityCache=new Map,this._selectionCache=new Set,this.resolution=e!==void 0?new ge(e.x,e.y):new ge(256,256);const o=Math.round(this.resolution.x/this.downSampleRatio),r=Math.round(this.resolution.y/this.downSampleRatio);this.renderTargetMaskBuffer=new tn(this.resolution.x,this.resolution.y),this.renderTargetMaskBuffer.texture.name="OutlinePass.mask",this.renderTargetMaskBuffer.texture.generateMipmaps=!1,this.depthMaterial=new vf,this.depthMaterial.side=pn,this.depthMaterial.depthPacking=tf,this.depthMaterial.blending=Yn,this.prepareMaskMaterial=this.getPrepareMaskMaterial(),this.prepareMaskMaterial.side=pn,this.prepareMaskMaterial.fragmentShader=u(this.prepareMaskMaterial.fragmentShader,this.renderCamera),this.renderTargetDepthBuffer=new tn(this.resolution.x,this.resolution.y,{type:Dn}),this.renderTargetDepthBuffer.texture.name="OutlinePass.depth",this.renderTargetDepthBuffer.texture.generateMipmaps=!1,this.renderTargetMaskDownSampleBuffer=new tn(o,r,{type:Dn}),this.renderTargetMaskDownSampleBuffer.texture.name="OutlinePass.depthDownSample",this.renderTargetMaskDownSampleBuffer.texture.generateMipmaps=!1,this.renderTargetBlurBuffer1=new tn(o,r,{type:Dn}),this.renderTargetBlurBuffer1.texture.name="OutlinePass.blur1",this.renderTargetBlurBuffer1.texture.generateMipmaps=!1,this.renderTargetBlurBuffer2=new tn(Math.round(o/2),Math.round(r/2),{type:Dn}),this.renderTargetBlurBuffer2.texture.name="OutlinePass.blur2",this.renderTargetBlurBuffer2.texture.generateMipmaps=!1,this.edgeDetectionMaterial=this.getEdgeDetectionMaterial(),this.renderTargetEdgeBuffer1=new tn(o,r,{type:Dn}),this.renderTargetEdgeBuffer1.texture.name="OutlinePass.edge1",this.renderTargetEdgeBuffer1.texture.generateMipmaps=!1,this.renderTargetEdgeBuffer2=new tn(Math.round(o/2),Math.round(r/2),{type:Dn}),this.renderTargetEdgeBuffer2.texture.name="OutlinePass.edge2",this.renderTargetEdgeBuffer2.texture.generateMipmaps=!1;const a=4,l=4;this.separableBlurMaterial1=this.getSeperableBlurMaterial(a),this.separableBlurMaterial1.uniforms.texSize.value.set(o,r),this.separableBlurMaterial1.uniforms.kernelRadius.value=1,this.separableBlurMaterial2=this.getSeperableBlurMaterial(l),this.separableBlurMaterial2.uniforms.texSize.value.set(Math.round(o/2),Math.round(r/2)),this.separableBlurMaterial2.uniforms.kernelRadius.value=l,this.overlayMaterial=this.getOverlayMaterial();const c=Bf;this.copyUniforms=Ms.clone(c.uniforms),this.materialCopy=new Et({uniforms:this.copyUniforms,vertexShader:c.vertexShader,fragmentShader:c.fragmentShader,blending:Yn,depthTest:!1,depthWrite:!1}),this.enabled=!0,this.needsSwap=!1,this._oldClearColor=new oe,this.oldClearAlpha=1,this.fsQuad=new zf(null),this.tempPulseColor1=new oe,this.tempPulseColor2=new oe,this.textureMatrix=new Le;function u(d,h){const f=h.isPerspectiveCamera?"perspective":"orthographic";return d.replace(/DEPTH_TO_VIEW_Z/g,f+"DepthToViewZ")}}dispose(){this.renderTargetMaskBuffer.dispose(),this.renderTargetDepthBuffer.dispose(),this.renderTargetMaskDownSampleBuffer.dispose(),this.renderTargetBlurBuffer1.dispose(),this.renderTargetBlurBuffer2.dispose(),this.renderTargetEdgeBuffer1.dispose(),this.renderTargetEdgeBuffer2.dispose(),this.depthMaterial.dispose(),this.prepareMaskMaterial.dispose(),this.edgeDetectionMaterial.dispose(),this.separableBlurMaterial1.dispose(),this.separableBlurMaterial2.dispose(),this.overlayMaterial.dispose(),this.materialCopy.dispose(),this.fsQuad.dispose()}setSize(e,t){this.renderTargetMaskBuffer.setSize(e,t),this.renderTargetDepthBuffer.setSize(e,t);let n=Math.round(e/this.downSampleRatio),s=Math.round(t/this.downSampleRatio);this.renderTargetMaskDownSampleBuffer.setSize(n,s),this.renderTargetBlurBuffer1.setSize(n,s),this.renderTargetEdgeBuffer1.setSize(n,s),this.separableBlurMaterial1.uniforms.texSize.value.set(n,s),n=Math.round(n/2),s=Math.round(s/2),this.renderTargetBlurBuffer2.setSize(n,s),this.renderTargetEdgeBuffer2.setSize(n,s),this.separableBlurMaterial2.uniforms.texSize.value.set(n,s)}updateSelectionCache(){const e=this._selectionCache;function t(n){n.isMesh&&e.add(n)}e.clear();for(let n=0;n<this.selectedObjects.length;n++)this.selectedObjects[n].traverse(t)}changeVisibilityOfSelectedObjects(e){const t=this._visibilityCache;for(const n of this._selectionCache)e===!0?n.visible=t.get(n):(t.set(n,n.visible),n.visible=e)}changeVisibilityOfNonSelectedObjects(e){const t=this._visibilityCache,n=this._selectionCache;function s(o){if(o.isMesh||o.isSprite){if(!n.has(o)){const r=o.visible;(e===!1||t.get(o)===!0)&&(o.visible=e),t.set(o,r)}}else(o.isPoints||o.isLine)&&(e===!0?o.visible=t.get(o):(t.set(o,o.visible),o.visible=e))}this.renderScene.traverse(s)}updateTextureMatrix(){this.textureMatrix.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),this.textureMatrix.multiply(this.renderCamera.projectionMatrix),this.textureMatrix.multiply(this.renderCamera.matrixWorldInverse)}render(e,t,n,s,o){if(this.selectedObjects.length>0){e.getClearColor(this._oldClearColor),this.oldClearAlpha=e.getClearAlpha();const r=e.autoClear;e.autoClear=!1,o&&e.state.buffers.stencil.setTest(!1),e.setClearColor(16777215,1),this.updateSelectionCache(),this.changeVisibilityOfSelectedObjects(!1);const a=this.renderScene.background;if(this.renderScene.background=null,this.renderScene.overrideMaterial=this.depthMaterial,e.setRenderTarget(this.renderTargetDepthBuffer),e.clear(),e.render(this.renderScene,this.renderCamera),this.changeVisibilityOfSelectedObjects(!0),this._visibilityCache.clear(),this.updateTextureMatrix(),this.changeVisibilityOfNonSelectedObjects(!1),this.renderScene.overrideMaterial=this.prepareMaskMaterial,this.prepareMaskMaterial.uniforms.cameraNearFar.value.set(this.renderCamera.near,this.renderCamera.far),this.prepareMaskMaterial.uniforms.depthTexture.value=this.renderTargetDepthBuffer.texture,this.prepareMaskMaterial.uniforms.textureMatrix.value=this.textureMatrix,e.setRenderTarget(this.renderTargetMaskBuffer),e.clear(),e.render(this.renderScene,this.renderCamera),this.renderScene.overrideMaterial=null,this.changeVisibilityOfNonSelectedObjects(!0),this._visibilityCache.clear(),this._selectionCache.clear(),this.renderScene.background=a,this.fsQuad.material=this.materialCopy,this.copyUniforms.tDiffuse.value=this.renderTargetMaskBuffer.texture,e.setRenderTarget(this.renderTargetMaskDownSampleBuffer),e.clear(),this.fsQuad.render(e),this.tempPulseColor1.copy(this.visibleEdgeColor),this.tempPulseColor2.copy(this.hiddenEdgeColor),this.pulsePeriod>0){const l=.625+Math.cos(performance.now()*.01/this.pulsePeriod)*.75/2;this.tempPulseColor1.multiplyScalar(l),this.tempPulseColor2.multiplyScalar(l)}this.fsQuad.material=this.edgeDetectionMaterial,this.edgeDetectionMaterial.uniforms.maskTexture.value=this.renderTargetMaskDownSampleBuffer.texture,this.edgeDetectionMaterial.uniforms.texSize.value.set(this.renderTargetMaskDownSampleBuffer.width,this.renderTargetMaskDownSampleBuffer.height),this.edgeDetectionMaterial.uniforms.visibleEdgeColor.value=this.tempPulseColor1,this.edgeDetectionMaterial.uniforms.hiddenEdgeColor.value=this.tempPulseColor2,e.setRenderTarget(this.renderTargetEdgeBuffer1),e.clear(),this.fsQuad.render(e),this.fsQuad.material=this.separableBlurMaterial1,this.separableBlurMaterial1.uniforms.colorTexture.value=this.renderTargetEdgeBuffer1.texture,this.separableBlurMaterial1.uniforms.direction.value=Gi.BlurDirectionX,this.separableBlurMaterial1.uniforms.kernelRadius.value=this.edgeThickness,e.setRenderTarget(this.renderTargetBlurBuffer1),e.clear(),this.fsQuad.render(e),this.separableBlurMaterial1.uniforms.colorTexture.value=this.renderTargetBlurBuffer1.texture,this.separableBlurMaterial1.uniforms.direction.value=Gi.BlurDirectionY,e.setRenderTarget(this.renderTargetEdgeBuffer1),e.clear(),this.fsQuad.render(e),this.fsQuad.material=this.separableBlurMaterial2,this.separableBlurMaterial2.uniforms.colorTexture.value=this.renderTargetEdgeBuffer1.texture,this.separableBlurMaterial2.uniforms.direction.value=Gi.BlurDirectionX,e.setRenderTarget(this.renderTargetBlurBuffer2),e.clear(),this.fsQuad.render(e),this.separableBlurMaterial2.uniforms.colorTexture.value=this.renderTargetBlurBuffer2.texture,this.separableBlurMaterial2.uniforms.direction.value=Gi.BlurDirectionY,e.setRenderTarget(this.renderTargetEdgeBuffer2),e.clear(),this.fsQuad.render(e),this.fsQuad.material=this.overlayMaterial,this.overlayMaterial.uniforms.maskTexture.value=this.renderTargetMaskBuffer.texture,this.overlayMaterial.uniforms.edgeTexture1.value=this.renderTargetEdgeBuffer1.texture,this.overlayMaterial.uniforms.edgeTexture2.value=this.renderTargetEdgeBuffer2.texture,this.overlayMaterial.uniforms.patternTexture.value=this.patternTexture,this.overlayMaterial.uniforms.edgeStrength.value=this.edgeStrength,this.overlayMaterial.uniforms.edgeGlow.value=this.edgeGlow,this.overlayMaterial.uniforms.usePatternTexture.value=this.usePatternTexture,o&&e.state.buffers.stencil.setTest(!0),e.setRenderTarget(n),this.fsQuad.render(e),e.setClearColor(this._oldClearColor,this.oldClearAlpha),e.autoClear=r}this.renderToScreen&&(this.fsQuad.material=this.materialCopy,this.copyUniforms.tDiffuse.value=n.texture,e.setRenderTarget(null),this.fsQuad.render(e))}getPrepareMaskMaterial(){return new Et({uniforms:{depthTexture:{value:null},cameraNearFar:{value:new ge(.5,.5)},textureMatrix:{value:null}},vertexShader:`#include <morphtarget_pars_vertex>
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

				}`})}getEdgeDetectionMaterial(){return new Et({uniforms:{maskTexture:{value:null},texSize:{value:new ge(.5,.5)},visibleEdgeColor:{value:new b(1,1,1)},hiddenEdgeColor:{value:new b(1,1,1)}},vertexShader:`varying vec2 vUv;

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
				}`})}getSeperableBlurMaterial(e){return new Et({defines:{MAX_RADIUS:e},uniforms:{colorTexture:{value:null},texSize:{value:new ge(.5,.5)},direction:{value:new ge(.5,.5)},kernelRadius:{value:1}},vertexShader:`varying vec2 vUv;

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
				}`})}getOverlayMaterial(){return new Et({uniforms:{maskTexture:{value:null},edgeTexture1:{value:null},edgeTexture2:{value:null},patternTexture:{value:null},edgeStrength:{value:1},edgeGlow:{value:1},usePatternTexture:{value:0}},vertexShader:`varying vec2 vUv;

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
				}`,blending:Wl,depthTest:!1,depthWrite:!1,transparent:!0})}}Gi.BlurDirectionX=new ge(1,0);Gi.BlurDirectionY=new ge(0,1);let Ua=new wf,ro=new ge,_r=!0,xu=!1;function yu(i){if(xu&&i===!0){console.log("setRaycasterActive: BLOCKED by transform controls override");return}_r=i}function Sp(i){return i.filter(e=>{let t=e;for(;t;){if(t.isTransformControls||t.isTransformControlsGizmo||t.isTransformControlsPlane||t.isTransformControlsRotationGizmo||t.isLine||t.name&&(t.name.includes("TransformControls")||t.name.includes("Gizmo")||t.name.includes("picker")||t.name.includes("helper"))||t.type&&(t.type==="TransformControlsGizmo"||t.type==="TransformControlsPlane"||t.type==="Line"||t.type==="LineSegments")||t.parent&&(t.parent.isTransformControls||t.parent.isTransformControlsGizmo))return!1;t=t.parent}return!0})}function Mp(){return _r}function Hc(i){xu=!i,_r=i}function Gc(){xu=!1}function Fh(i){var e,t,n,s;if(console.log("[attachControlWithMasterRequest] chiamato per:",i.name),console.log("[attachControlWithMasterRequest] isEnabled:",(e=window.multiClientManager)==null?void 0:e.isEnabled,"isMaster:",(t=window.multiClientManager)==null?void 0:t.isMaster),(n=window.multiClientManager)!=null&&n.isEnabled&&!((s=window.multiClientManager)!=null&&s.isMaster)){console.log("[attachControlWithMasterRequest] Sono SLAVE, richiedendo ruolo master..."),window.multiClientManager.requestMaster();const o=window.multiClientManager.onMasterChange,r=a=>{console.log("[attachControlWithMasterRequest] Callback onMasterChange ricevuto, isMaster:",a),o&&o(a),a&&(console.log("[attachControlWithMasterRequest] ✓ Ruolo master confermato, attaching control..."),le.attach(i),window.multiClientManager.onMasterChange=o)};window.multiClientManager.onMasterChange=r;return}console.log("[attachControlWithMasterRequest] Già MASTER o multi-client disattivo, attaching control subito"),le.attach(i)}let it,on;window.setMenuOutline=function(i,e){it&&(e?it.selectedObjects=[i]:it.selectedObjects=[])};let Gl=!1,da=null,Li=null,Vl=0,ha=!1;const Bh=5,EM=300;let Vi=null;function wu(){on&&(on.passes.forEach(i=>{i.dispose&&i.dispose()}),on.dispose(),on=null),it&&(it.dispose(),it=null),Vi=null,window.raycasterComposer=null}function Ep(){wu();const i=new Hf(ne,Ce);it=new Gi(new ge(window.innerWidth,window.innerHeight),ne,Ce),it.edgeStrength=10,it.edgeGlow=1,it.edgeThickness=3,it.visibleEdgeColor.set("#ffffff"),it.hiddenEdgeColor.set("#ffffff"),on=new kf(qe),on.addPass(i),on.addPass(it),Vi=new pu(Gf);const e=qe.getPixelRatio();Vi.material.uniforms.resolution.value.x=1/(window.innerWidth*e),Vi.material.uniforms.resolution.value.y=1/(window.innerHeight*e),on.addPass(Vi),window.raycasterComposer=on}let xi=null,Nn=null;function bp(i){for(;i.children.length>0;)bp(i.children[0]);i.material&&(Array.isArray(i.material)?i.material.forEach(e=>{e.map&&e.map.dispose(),e.envMap&&e.envMap.dispose(),e.dispose()}):(i.material.map&&i.material.map.dispose(),i.material.envMap&&i.material.envMap.dispose(),i.material.dispose())),i.geometry&&i.geometry.dispose(),i.parent&&i.parent.remove(i),console.log("Oggetto eliminato:",i.name||i.id)}function bM(){var n,s;const i=xi||Nn;if(!i)return!1;const e=(n=i.parent)!=null&&n.isGroup?i.parent:i,t=je.findIndex(o=>{var r;return((r=o.name)==null?void 0:r.trim())===e.name.trim()});if(t!==-1){const o=e.name&&e.name.startsWith("Altoparlante"),r=e.name&&e.name.startsWith("Omnifonte"),a=e.name,l=(s=e.userData)==null?void 0:s.id;return l&&window.messageBroker&&window.messageBroker.sendObjectDeleted({id:l,name:a,type:null}),je.splice(t,1),bp(e),console.log("Eliminato oggetto:",a),setTimeout(o?()=>Xe("altoparlanti"):r?()=>Xe("omnifonti"):Xe,50),yt(),Nn=null,Gw(),!0}return!1}window.raycasterGlobals||(window.raycasterGlobals={});window.raycasterGlobals={get currentSelectedObject(){return Nn},set currentSelectedObject(i){Nn=i},get lastHoveredObject(){return xi},set lastHoveredObject(i){xi=i},get isRaycasterActive(){return _r},get outlinePass(){return it},setRaycasterActive:yu,setRaycasterActiveForTransformControls:Hc,clearTransformControlsOverride:Gc,duplicateObject:CM,deleteSelectedObject:bM,updateMenu:fu,processMouseRaycasting:Tp,resizeRaycasterComposer:Ap,disposePostProcessing:wu,initPostProcessing:Ep};function Tp(i){var s,o;if(!Mp())return;ro.x=i.clientX/window.innerWidth*2-1,ro.y=-(i.clientY/window.innerHeight)*2+1,Ua.setFromCamera(ro,Ce);const t=Sp(je),n=Ua.intersectObjects(t,!0);if(n.length>0){let r=n[0].object,a=null,l=r;for(;l;){if(l.parent&&l.parent.name==="Gruppo di trasformazione"){a=l.parent;break}l=l.parent}a?(it.selectedObjects=a.children,Nn=a,xi=a,hs(a.name||"Gruppo di trasformazione"),ao(a.name||"Gruppo di trasformazione"),ps(a)):r.name==="Gruppo di trasformazione"?(it.selectedObjects=r.children,Nn=r,xi=r,hs(r.name||"Gruppo di trasformazione"),ao(r.name||"Gruppo di trasformazione"),ps(r)):(it.selectedObjects=[r],Nn=r,xi=r,hs(r.name||"Oggetto non trattato"),ao(r.name||"Oggetto non trattato"),ps(r))}else{it.selectedObjects=[],Nn=null,hs(null),ps(null);const r=((s=window.raycasterGlobals)==null?void 0:s.lastHoveredObject)||((o=window.raycasterGlobals)==null?void 0:o.currentSelectedObject);let a=!1;r&&(r.name==="Gruppo di trasformazione"||r.parent&&r.parent.name==="Gruppo di trasformazione")&&(a=!0),!a&&!$t.isDragging&&$t.hide()}}const TM=document.getElementById("infoDivTopLeft");function ao(i){TM.textContent=i||"---"}function ps(i){if(window.menuObjectMap)window.menuObjectMap.forEach(e=>{e.classList.remove("itemList-hover")}),i&&window.menuObjectMap.has(i)&&window.menuObjectMap.get(i).classList.add("itemList-hover");else{const e=document.getElementById("menuList");if(!e)return;const t=e.querySelectorAll(".itemList");je.forEach((n,s)=>{var o,r;n===i?(o=t[s])==null||o.classList.add("itemList-hover"):(r=t[s])==null||r.classList.remove("itemList-hover")})}}function AM(i){it&&(it.renderCamera=i),on&&on.passes&&on.passes[0]&&(on.passes[0].camera=i)}function Ap(){if(on&&on.setSize(window.innerWidth,window.innerHeight),it&&it.setSize(window.innerWidth,window.innerHeight),Vi){const i=qe.getPixelRatio();Vi.material.uniforms.resolution.value.x=1/(window.innerWidth*i),Vi.material.uniforms.resolution.value.y=1/(window.innerHeight*i)}}window.updatePostProcessingCamera=AM;window.resizeRaycasterComposer=Ap;function Vc(){if(!qe||!qe.domElement){console.warn("Renderer non pronto, ritardo inizializzazione raycaster"),setTimeout(Vc,100);return}qe.domElement.addEventListener("mousemove",g=>{Mp()&&(da=g,Gl||(Gl=!0,requestAnimationFrame(()=>{da&&(Tp(da),da=null),Gl=!1})))});let i=null,e=[],t=!1,n=null,s=null,o="default";const r=document.getElementById("selection-rectangle");function a(){if(!t||!n||!s){r.style.display="none";return}r.style.display="block";const g=Math.min(n.x,s.x),m=Math.min(n.y,s.y),p=Math.abs(s.x-n.x),w=Math.abs(s.y-n.y);r.style.left=g+"px",r.style.top=m+"px",r.style.width=p+"px",r.style.height=w+"px",r.style.borderRadius="4px",s.y>n.y?(r.style.borderColor="#4488ff",r.style.background="rgba(68,136,255,0.08)",o="omni"):(r.style.borderColor="#ce572cff",r.style.background="rgba(187, 110, 68, 0.08)",o="speaker")}function l(g,m){const p=Math.min(g.x,m.x),w=Math.max(g.x,m.x),y=Math.min(g.y,m.y),x=Math.max(g.y,m.y);e=[],je.forEach(A=>{let T=A.name&&(A.name.toLowerCase().includes("omnifonte")||A.name.toLowerCase().includes("orifonte")),P=A.name&&A.name.toLowerCase().includes("altoparlante"),L=A;if(!A.isMesh&&A.children&&A.children.length>0){const O=A.children.find(z=>z.isMesh);O&&(L=O)}const v=L.getWorldPosition(new b).clone().project(Ce),C=(v.x*.5+.5)*window.innerWidth,N=(-v.y*.5+.5)*window.innerHeight;C>=p&&C<=w&&N>=y&&N<=x&&(o==="omni"&&T||o==="speaker"&&P)&&e.push(A)}),c()}function c(){if(i&&(i.children.slice().forEach(g=>{if(g.parent===i){g.updateMatrixWorld(!0);const m=new b;g.getWorldPosition(m),ne.add(g),g.position.copy(m)}g.material&&g.material.emissive&&g.material.emissive.setHex(0)}),ne.remove(i),i=null),e.forEach(g=>{if(g.parent&&g.parent.type==="Group"&&g.parent.name==="Gruppo di trasformazione"){g.updateMatrixWorld(!0);const m=new b;g.getWorldPosition(m),g.parent.remove(g),ne.add(g),g.position.copy(m)}}),e.length>1)i=new Mn,i.name="Gruppo di trasformazione",e.forEach(g=>{if(g.parent===ne){g.updateMatrixWorld(!0);const m=new b;g.getWorldPosition(m),ne.remove(g),i.add(g),g.position.copy(i.worldToLocal(m))}else i.add(g);g.material&&g.material.emissive&&g.material.emissive.setHex(4474111),!g.isMesh&&g.children&&g.children.length>0&&g.children.forEach(m=>{m.material&&m.material.emissive&&m.material.emissive.setHex(4474111)})}),ne.add(i);else if(e.length===1){const g=e[0];g.material&&g.material.emissive&&g.material.emissive.setHex(4474111),!g.isMesh&&g.children&&g.children.length>0&&g.children.forEach(m=>{m.material&&m.material.emissive&&m.material.emissive.setHex(4474111)})}it.selectedObjects=e.length>0?e:[],Xe()}function u(){i&&(i.children.slice().forEach(g=>{if(g.parent===i){g.updateMatrixWorld(!0);const m=new b;g.getWorldPosition(m),ne.add(g),g.position.copy(m)}g.material&&g.material.emissive&&g.material.emissive.setHex(0),!g.isMesh&&g.children&&g.children.length>0&&g.children.forEach(m=>{m.material&&m.material.emissive&&m.material.emissive.setHex(0)})}),ne.remove(i),i=null),e.forEach(g=>{if(g.material&&g.material.emissive&&g.material.emissive.setHex(0),!g.isMesh&&g.children&&g.children.length>0&&g.children.forEach(m=>{m.material&&m.material.emissive&&m.material.emissive.setHex(0)}),g.parent&&g.parent.type==="Group"&&g.parent.name==="Gruppo di trasformazione"){g.updateMatrixWorld(!0);const m=new b;g.getWorldPosition(m),g.parent.remove(g),ne.add(g),g.position.copy(m)}}),e=[],it.selectedObjects=[],a()}function d(){return le&&(le.dragging||le.object)}qe.domElement.addEventListener("pointerdown",g=>{f()&&(d()||(t=!0,n={x:g.clientX,y:g.clientY},s={x:g.clientX,y:g.clientY},a()))}),qe.domElement.addEventListener("pointermove",g=>{f()&&(d()||t&&(s={x:g.clientX,y:g.clientY},a()))}),qe.domElement.addEventListener("pointerup",g=>{if(f()&&!d()&&t){if(s={x:g.clientX,y:g.clientY},a(),Math.abs(s.x-n.x)>5&&Math.abs(s.y-n.y)>5)u(),l(n,s);else{const m=_(g);if(m){let p=null,w=m;for(;w;){if(w.parent&&w.parent.type==="Group"&&w.parent.name==="Gruppo di trasformazione"){p=w.parent;break}w=w.parent}p?(e=[p],it&&(it.selectedObjects=p.children),Nn=p,xi=p,hs(p.name||"Gruppo di trasformazione"),ao(p.name||"Gruppo di trasformazione"),ps(p),Fh(p),Hc(!1),Pt.enabled=!1,it&&(it.selectedObjects=[]),window.raycasterComposer&&window.raycasterComposer.render(),window.updateStato&&window.updateStato("Spostamento"),window.transformContextMenu&&window.transformContextMenu.show(p)):(u(),e=[m],c())}else u()}t=!1,n=null,s=null,a()}}),qe.domElement.addEventListener("click",g=>{if(f()&&g.shiftKey){const m=_(g);m&&(e.includes(m)?e=e.filter(p=>p!==m):e.push(m),c())}}),qe.domElement.addEventListener("mousedown",g=>{g.button===0&&(Li={x:g.clientX,y:g.clientY},Vl=Date.now(),ha=!1,le&&le.dragging)}),qe.domElement.addEventListener("mousemove",g=>{if(Li){const m=g.clientX-Li.x,p=g.clientY-Li.y;Math.sqrt(m*m+p*p)>Bh&&(ha=!0)}}),qe.domElement.addEventListener("mouseup",g=>{if(g.button!==0||!Li)return;const m=Date.now()-Vl,p=g.clientX-Li.x,w=g.clientY-Li.y;if(Math.sqrt(p*p+w*w)<=Bh&&m<=EM&&!ha){const A=d(),T=_(g);(!A||A&&!T)&&h(g)}Li=null,Vl=0,ha=!1});function h(g){var p;const m=_(g);if(m){const w=(p=m.parent)!=null&&p.isGroup?m.parent:m;Fh(w),Hc(!1),Pt.enabled=!1,it&&(it.selectedObjects=[]),window.raycasterComposer&&window.raycasterComposer.render(),Nn=m,xi=m,hs(m.name||"Oggetto"),ao(m.name||"Oggetto"),ps(m),window.updateStato&&window.updateStato("Spostamento"),window.transformContextMenu&&window.transformContextMenu.show(w)}else{const w=le&&le.object,y=$t&&$t.isActive;if(w||y){if(w){le.object.type==="Group"&&le.object.name==="Gruppo di trasformazione"&&(le.object.children.slice().forEach(A=>{A.updateMatrixWorld(!0);const T=new b;A.getWorldPosition(T),le.object.remove(A),ne.add(A),A.position.copy(T)}),ne.remove(le.object)),le.detach(),Gc();const x=document.getElementById("ghostButton");x&&(x.style.display="none")}y&&$t.hide(),Pt.enabled=!0,it.selectedObjects=[],Nn=null,xi=null,Gc(),yu(!0),fu(),window.transformContextMenu&&window.transformContextMenu.hide()}}}function f(){return Ce&&Ce.isOrthographicCamera}function _(g){ro.x=g.clientX/window.innerWidth*2-1,ro.y=-(g.clientY/window.innerHeight)*2+1,Ua.setFromCamera(ro,Ce);const m=Sp(je),p=Ua.intersectObjects(m,!0);return p.length>0?p[0].object:null}Ep(),window.addEventListener("beforeunload",()=>{wu()})}document.readyState==="loading"?document.addEventListener("DOMContentLoaded",Vc):Vc();function zh(i){var r,a,l,c;if(!i||!window.multiClientManager)return;if(i.type==="Group"&&i.name==="Gruppo di trasformazione"){(i.children||[]).forEach(d=>{var p,w,y,x;const h=(p=d.userData)==null?void 0:p.id;if(!h){console.warn("Figlio del gruppo senza ID:",d.name);return}d.updateMatrixWorld(!0);const f=new b,_=new ft,g=new b;d.matrixWorld.decompose(f,_,g);const m=new Bt().setFromQuaternion(_);window.multiClientManager.sendTransform(h,{x:f.x,y:f.y,z:f.z},{x:m.x,y:m.y,z:m.z},{x:g.x,y:g.y,z:g.z},((w=d.userData)==null?void 0:w.tags)||null,((y=d.userData)==null?void 0:y.menuState)||null),window.messageBroker.sendObjectTransform({id:h,name:d.name,type:null,position:{x:f.x,y:f.y,z:f.z},rotation:{x:m.x,y:m.y,z:m.z},scale:{x:g.x,y:g.y,z:g.z},tags:((x=d.userData)==null?void 0:x.tags)||[0]})});return}let e=(r=i.userData)==null?void 0:r.id;if(!e){console.warn("Oggetto senza ID per sync multi-client:",i.name);return}i.updateMatrixWorld(!0);const t=new b,n=new ft,s=new b;i.matrixWorld.decompose(t,n,s);const o=new Bt().setFromQuaternion(n);window.multiClientManager.sendTransform(e,{x:t.x,y:t.y,z:t.z},{x:o.x,y:o.y,z:o.z},{x:s.x,y:s.y,z:s.z},((a=i.userData)==null?void 0:a.tags)||null,((l=i.userData)==null?void 0:l.menuState)||null),window.messageBroker.sendObjectTransform({id:e,name:i.name,type:null,position:{x:t.x,y:t.y,z:t.z},rotation:{x:o.x,y:o.y,z:o.z},scale:{x:s.x,y:s.y,z:s.z},tags:((c=i.userData)==null?void 0:c.tags)||[0]})}le&&(le.addEventListener("change",function(){var n,s;if(!le.object)return;const i=le.object;if(i.type==="Group"&&i.name==="Gruppo di trasformazione"){const o=i.children||[],r=o.length>0&&o.every(a=>a.name&&(a.name.toLowerCase().includes("omnifonte")||a.name.toLowerCase().includes("orifonte")));o.length>0&&o.every(a=>a.name&&a.name.toLowerCase().includes("altoparlante")),r&&window.max&&window.max.outlet&&o.forEach(a=>{const l=new b;a.getWorldPosition(l);let c=1;const u=a.name.match(/^(.*?)[\s_-]?(\d+)$/);u&&(c=parseInt(u[2],10));const d=l.x,h=l.z,f=l.y,_=Math.sqrt(d*d+h*h);let g=Math.atan2(h,d)*(180/Math.PI)-90;g<0&&(g+=360),window.max.outlet("Omnifonte",c,d,h,f,g,_)}),Xe();return}const e=i.name||"",t=e.toLowerCase().includes("omnifonte")||e.toLowerCase().includes("orifonte");if(e.toLowerCase().includes("altoparlante"),t&&window.max&&window.max.outlet){const o=i.position.x,r=i.position.z,a=i.position.y;let l=1;const c=e.match(/^(.*?)[\s_-]?(\d+)$/);c&&(l=parseInt(c[2],10));const u=Math.sqrt(o*o+r*r);let d=Math.atan2(r,o)*(180/Math.PI)-90;d<0&&(d+=360),window.max.outlet("Omnifonte",l,o,r,a,d,u)}Xe(),(n=window.multiClientManager)!=null&&n.isMaster&&((s=window.multiClientManager)!=null&&s.isEnabled)&&zh(i),window.messageBroker&&zh(i)}),le.addEventListener("mouseUp",function(){var n,s;if(!le.object)return;const i=le.object;if(i.type==="Group"&&i.name==="Gruppo di trasformazione"){i.children.forEach(a=>{var l,c;if(a.userData._undoInitialState){const u={position:{x:a.position.x,y:a.position.y,z:a.position.z},rotation:{x:a.rotation.x,y:a.rotation.y,z:a.rotation.z},scale:{x:a.scale.x,y:a.scale.y,z:a.scale.z},tags:(l=a.userData)!=null&&l.tags?[...a.userData.tags]:[],menuState:(c=a.userData)!=null&&c.menuState?{...a.userData.menuState}:{}},d=new hr(a,a.userData._undoInitialState,u);Yt.execute(d),delete a.userData._undoInitialState}});const o=i.children||[];o.length>0&&o.every(a=>a.name&&a.name.toLowerCase().includes("altoparlante"))&&Xe("update-altoparlanti");return}if(i.userData._undoInitialState){const o={position:{x:i.position.x,y:i.position.y,z:i.position.z},rotation:{x:i.rotation.x,y:i.rotation.y,z:i.rotation.z},scale:{x:i.scale.x,y:i.scale.y,z:i.scale.z},tags:(n=i.userData)!=null&&n.tags?[...i.userData.tags]:[],menuState:(s=i.userData)!=null&&s.menuState?{...i.userData.menuState}:{}};console.log("[UNDO] Creando TransformCommand:",{object:i.name,oldPos:i.userData._undoInitialState.position,newPos:o.position,undoManager:!!Yt});const r=new hr(i,i.userData._undoInitialState,o);Yt.execute(r),console.log("[UNDO] Comando eseguito. Stack size:",Yt.undoStack.length),delete i.userData._undoInitialState}else console.warn("[UNDO] Nessun stato iniziale salvato per:",i.name);(i.name||"").toLowerCase().includes("altoparlante")&&Xe("update-altoparlanti")}),le.addEventListener("mouseDown",function(){var i,e,t,n,s,o;if(console.log("control.mouseDown - multiClientManager:",{exists:!!window.multiClientManager,isEnabled:(i=window.multiClientManager)==null?void 0:i.isEnabled,isMaster:(e=window.multiClientManager)==null?void 0:e.isMaster}),(t=window.multiClientManager)!=null&&t.isEnabled&&!((n=window.multiClientManager)!=null&&n.isMaster)&&(console.log("Richiedendo ruolo master per trascinamento..."),window.multiClientManager.requestMaster()),le.object){const r=le.object;r.type==="Group"&&r.name==="Gruppo di trasformazione"?r.children.forEach(a=>{var l,c;a.userData._undoInitialState={position:{x:a.position.x,y:a.position.y,z:a.position.z},rotation:{x:a.rotation.x,y:a.rotation.y,z:a.rotation.z},scale:{x:a.scale.x,y:a.scale.y,z:a.scale.z},tags:(l=a.userData)!=null&&l.tags?[...a.userData.tags]:[],menuState:(c=a.userData)!=null&&c.menuState?{...a.userData.menuState}:{}}}):r.userData._undoInitialState={position:{x:r.position.x,y:r.position.y,z:r.position.z},rotation:{x:r.rotation.x,y:r.rotation.y,z:r.rotation.z},scale:{x:r.scale.x,y:r.scale.y,z:r.scale.z},tags:(s=r.userData)!=null&&s.tags?[...r.userData.tags]:[],menuState:(o=r.userData)!=null&&o.menuState?{...r.userData.menuState}:{}}}}));const kh=document.getElementById("toggleTransButton");kh&&kh.addEventListener("click",()=>{le&&le.detach(),Pt.enabled=!0;const i=document.getElementById("ghostButton");i&&(i.style.display="none"),_r=!0,fu()});function CM(i){console.log("[DEBUG] duplicateObject called for:",i==null?void 0:i.name),console.trace();const e=i.clone(!0);i.updateMatrixWorld(!0);const t=i.matrixWorld.clone(),n=new b,s=new ft,o=new b;t.decompose(n,s,o),n.x+=1.5,e.position.copy(n),e.quaternion.copy(s),e.scale.copy(o);let r=i.name||"Duplicato",a=r.match(/^(.*?)[\s_-]?(\d+)$/);a&&(r=a[1].trim());let l=0;je.forEach(d=>{if(d.name){let h=d.name.match(new RegExp(`^${r}[\\s_-]?(\\d+)$`));if(h){let f=parseInt(h[1],10);f>l&&(l=f)}}}),e.name=`${r} ${l+1}`,ne.add(e),je.push(e),yt(),Nn=e,hs(e.name),it.selectedObjects=[e],ao(e.name),ps(e);const c=e.name&&e.name.startsWith("Altoparlante"),u=e.name&&e.name.startsWith("Omnifonte");c?setTimeout(()=>Xe("altoparlanti"),50):u?(setTimeout(()=>Xe("omnifonti"),50),window.max&&window.max.outlet&&RM(e)):setTimeout(Xe,50)}function RM(i){if(!i||!i.name)return;const e=i.name.toLowerCase();if(!(e.includes("omnifonte")||e.includes("orifonte")))return;let t=1;const n=i.name.match(/^(.*?)[\s_-]?(\d+)$/);n&&(t=parseInt(n[2],10)),i.updateMatrixWorld(!0);const s=new b;i.getWorldPosition(s);const o=s.x,r=s.z,a=s.y,l=Math.sqrt(o*o+r*r);let c=Math.atan2(r,o)*(180/Math.PI)-90;c<0&&(c+=360),window.max.outlet("Omnifonte",t,o,r,a,c,l)}let Gn=.05,ls=15,tr=!0;document.querySelectorAll(".switch input").forEach(i=>{i.addEventListener("change",e=>{const t=e.target.checked,n=e.target.getAttribute("data-id");PM(n,t)})});let $s=.7;function PM(i,e){var t,n;switch(i){case"lock":if((n=(t=window.setupGlobals)==null?void 0:t.control)!=null&&n.object){console.log("Lock toggle ignored: transform controls are active");return}yu(!e);break;case"transparencyA":jo("architettura",e),Ks=e,e?dn.uniforms.opacity.value=$s:dn.uniforms.opacity.value=1;break;case"serioso":e?(dn.uniforms.coolColor.value=new oe(30719),dn.uniforms.warmColor.value=new oe(16755200)):(dn.uniforms.coolColor.value=new oe(128),dn.uniforms.warmColor.value=new oe(16119260)),e?Ch("architettura",dn):Ch("architettura");break;case"wireframeVisibility":break;case"theme":Kw(e);break;case"grid":io.visible=e;break;case"gridSnapState":e?(le.setTranslationSnap(Gn),le.setRotationSnap(_i.degToRad(ls)),le.setScaleSnap(Gn),tr=!0):(le.setTranslationSnap(null),le.setRotationSnap(_i.degToRad(null)),le.setScaleSnap(null),tr=!1);break;case"zoneVisibility":e?(ar.visible=!0,lr.visible=!0,cr.visible=!0,ur.visible=!0):(ar.visible=!1,lr.visible=!1,cr.visible=!1,ur.visible=!1);break;case"archVisibility":e?(dn.uniforms.opacity.value=Ks?$s:1,fh.visible=!0):(dn.uniforms.opacity.value=0,fh.visible=!1),la("architettura",e),la("architettura-background",e),la("architettura-edges",e),la("architettura-conditional",e);break;case"multiClient":window.multiClientManager&&(window.multiClientManager.setEnabled(e),Fa());break;default:console.log("Switch non riconosciuto")}}document.querySelectorAll(".multitoggle input").forEach(i=>{i.addEventListener("change",e=>{const t=parseInt(e.target.value),n=e.target.getAttribute("data-id");DM(n,t)})});function DM(i,e){switch(i){case"gridsize":switch(e){case 1:oa(5,8);break;case 2:oa(10,16);break;case 3:oa(20,32);break;case 4:oa(40,64);break;default:console.log("Valore non riconosciuto.");return}break;case"transArchVal":switch(e){case 1:$s=0,aa(.1),Ks&&(dn.uniforms.opacity.value=0,jo("architettura",!0));break;case 2:$s=.2,aa(.3),Ks&&(dn.uniforms.opacity.value=.2,jo("architettura",!0));break;case 3:$s=.5,aa(.5),Ks&&(dn.uniforms.opacity.value=.5,jo("architettura",!0));break;case 4:$s=.7,aa(.7),Ks&&(dn.uniforms.opacity.value=.7,jo("architettura",!0));break;default:console.log("Valore non riconosciuto.");return}break;case"snapDefinition":switch(e){case 1:Gn=.0125,ls=15,tr&&(le.setTranslationSnap(Gn),le.setRotationSnap(_i.degToRad(ls)),le.setScaleSnap(Gn));break;case 2:Gn=.05,ls=15,tr&&(le.setTranslationSnap(Gn),le.setRotationSnap(_i.degToRad(ls)),le.setScaleSnap(Gn));break;case 3:Gn=.1,ls=15,tr&&(le.setTranslationSnap(Gn),le.setRotationSnap(_i.degToRad(ls)),le.setScaleSnap(Gn));break}default:console.log("ID non riconosciuto.")}}let Ks=!1;const Ii=document.getElementById("menuList");document.getElementById("seeItemsList").addEventListener("click",i=>{i.target.getAttribute("data-active")==="true"?(Ii.style.opacity=0,Ii.style.width="0vw",Ii.style.color="var(--fondale)",Ii.style.pointerEvents="none",i.target.setAttribute("data-active","false")):(Ii.style.opacity=1,Ii.style.width="23vw",Ii.style.color="var(--testo)",Ii.style.pointerEvents="all",i.target.setAttribute("data-active","true"))});let LM=document.getElementById("toggleTransButton");LM.addEventListener("click",()=>{le.setSpace(le.space==="local"?"world":"local")});const IM=document.getElementById("openSideMenu"),di=document.getElementById("black-panel");IM.addEventListener("click",()=>{di.style.opacity==="1"?(di.style.opacity=0,di.style.pointerEvents="none",di.style.width="0vw",di.style.color="var(--fondale)"):(di.style.opacity=1,di.style.pointerEvents="all",di.style.width="25vw",di.style.color="var(--testo)")});function Fa(){const i=document.getElementById("multiClientStatus");if(!i||!window.multiClientManager)return;const e=window.multiClientManager.getStatus();if(!e.isEnabled)i.style.display="none";else if(!e.isConnected)i.textContent="Connecting...",i.style.cssText="padding: 0.2rem 0.5rem; border-radius: 4px; font-size: 0.7rem; font-weight: 600; text-transform: uppercase; letter-spacing: 0.5px; display: inline-block; background: #ed8936; color: white; margin: 5px 0;";else{const t=e.isMaster?"Master":"Slave",n=e.isMaster?"#48bb78":"#3498DB";i.textContent=t,i.style.cssText=`padding: 0.2rem 0.5rem; border-radius: 4px; font-size: 0.7rem; font-weight: 600; text-transform: uppercase; letter-spacing: 0.5px; display: inline-block; background: ${n}; color: white; margin: 5px 0;`}}window.updateMultiClientStatusDisplay=Fa;function Wc(){const i=document.getElementById("oscStatus");if(!i||!window.oscManager)return;let e="",t="#888";window.oscManager.isEnabled?!window.oscManager.ws||window.oscManager.ws.readyState!==WebSocket.OPEN?(e="Status: Connessione...",t="#ff9500",i.style.display="block"):(e=`Status: Attivo → ${window.oscManager.host}:${window.oscManager.port}`,t="#00ff00",i.style.display="block"):(e="Status: Disattivato",i.style.display="none"),i.textContent=e,i.style.color=t}window.updateOSCStatusDisplay=Wc;function NM(){window.multiClientManager&&(window.multiClientManager.onStateChange=Fa,window.multiClientManager.onMasterChange=i=>{console.log(`Ruolo cambiato: ${i?"MASTER":"SLAVE"}`),Fa()},window.multiClientManager.onTransformReceived=i=>{UM(i)},window.multiClientManager.onObjectCreatedReceived=i=>{FM(i)},BM())}function OM(){window.oscManager&&(window.oscManager.onConnectionChange=i=>{console.log(`OSC connessione: ${i?"CONNESSO":"DISCONNESSO"}`),Wc()},window.oscManager.onConfigChange=(i,e)=>{console.log(`OSC configurazione aggiornata: ${i}:${e}`),Wc();const t=document.getElementById("oscHost"),n=document.getElementById("oscPort");t&&(t.value=i),n&&(n.value=e)})}function UM(i){let e=null;if(ne.traverse(function(t){t.userData&&t.userData.id===i.objectId&&(e=t)}),!e){console.warn("Oggetto non trovato per ID:",i.objectId,"- Ritentativo in 100ms..."),setTimeout(()=>{ne.traverse(function(t){t.userData&&t.userData.id===i.objectId&&(e=t)}),e?(console.log("Oggetto trovato al secondo tentativo:",e.name),Hh(e,i)):console.error("Oggetto definitivamente non trovato per ID:",i.objectId)},100);return}Hh(e,i)}function Hh(i,e){console.log("Applicando trasformazione da master a:",i.name),e.position&&i.position.set(e.position.x,e.position.y,e.position.z),e.rotation&&i.rotation.set(e.rotation.x,e.rotation.y,e.rotation.z),e.scale&&i.scale.set(e.scale.x,e.scale.y,e.scale.z),e.tags&&(i.userData.tags=e.tags,window.updateSubmenuTags&&window.updateSubmenuTags(i),window.updateTagsChipsExternal&&window.updateTagsChipsExternal(i)),e.menuState&&(console.log("[SLAVE] Ricevuto menuState:",e.menuState),console.log("[SLAVE] Object userData PRIMA:",i.userData.menuState),i.userData.menuState=e.menuState,console.log("[SLAVE] Object userData DOPO:",i.userData.menuState),window.updateMenuForObject?(console.log("[SLAVE] Chiamando updateMenuForObject per:",i.name),window.updateMenuForObject(i)):console.error("[SLAVE] updateMenuForObject NON disponibile!")),i.updateMatrixWorld(!0)}function FM(i){console.log("Creando oggetto da master:",i.objectType,i.name,i.objectId);const e=i.position||{x:0,y:1.2,z:0},t={x:e.x,y:e.z,z:e.y};switch(i.objectType){case"sphere":case"omnifonte":window.addSphereAtPosition&&(console.log("Creando omnifonte da sync:",i.name,"alle coordinate:",t,"con ID:",i.objectId),window.multiClientManager._skipNextBroadcast=!0,window.addSphereAtPosition(t.x,t.y,t.z,i.objectId,i.name),i.tags&&setTimeout(()=>{ne.traverse(n=>{n.userData.id===i.objectId&&(n.userData.tags=i.tags)})},50),console.log("Omnifonte creato correttamente con ID:",i.objectId));break;case"speaker":case"altoparlante":if(window.addSpeakerAtPosition){console.log("Creando altoparlante da sync:",i.name,"alle coordinate:",t,"con ID:",i.objectId),window.multiClientManager._skipNextBroadcast=!0,window.addSpeakerAtPosition(t.x,t.y,t.z,i.objectId,i.name),i.tags&&setTimeout(()=>{ne.traverse(o=>{o.userData.id===i.objectId&&(o.userData.tags=i.tags)})},50);let n=!1;const s=()=>{ne.traverse(o=>{if(o.userData.id===i.objectId)return console.log("Altoparlante creato correttamente con ID:",i.objectId),n=!0,!0}),!n&&s.attempts<10&&(s.attempts++,setTimeout(s,50))};s.attempts=0,setTimeout(s,50)}break;case"arrow":case"orifonte":window.addArrowAtPosition&&(console.log("Creando orifonte da sync:",i.name,"alle coordinate:",t,"con ID:",i.objectId),window.multiClientManager._skipNextBroadcast=!0,window.addArrowAtPosition(t.x,t.y,t.z,i.objectId,i.name),i.tags&&setTimeout(()=>{ne.traverse(n=>{n.userData.id===i.objectId&&(n.userData.tags=i.tags)})},50),console.log("Orifonte creato correttamente con ID:",i.objectId));break;default:console.warn("Tipo oggetto non supportato per sync:",i.objectType)}}function BM(){var e;if(!((e=window.setupGlobals)!=null&&e.control))return;window.setupGlobals.control.addEventListener("objectChange",t=>{var s,o;if(!((s=window.multiClientManager)!=null&&s.isMaster)||!((o=window.multiClientManager)!=null&&o.isEnabled))return;const n=t.target.object;!n||!n.userData.id||window.multiClientManager.sendTransform(n.userData.id,{x:n.position.x,y:n.position.y,z:n.position.z},{x:n.rotation.x,y:n.rotation.y,z:n.rotation.z},{x:n.scale.x,y:n.scale.y,z:n.scale.z})})}document.addEventListener("DOMContentLoaded",()=>{setTimeout(()=>{NM(),OM()},100)});document.addEventListener("DOMContentLoaded",()=>{const i=document.getElementById("addElementMenu"),e=document.getElementById("addElementCenterMenu"),t=document.getElementById("closeAddElementMenu"),n=document.querySelectorAll(".add-menu-item"),s=document.getElementById("addElementExecute"),o=document.getElementById("elementQuantity"),r=o.parentElement,a=document.getElementById("arrangementSection"),l=document.getElementById("configContextual"),c=document.getElementById("arrangementType"),u=document.getElementById("squareConfig"),d=document.getElementById("circleConfig"),h=document.getElementById("lineConfig"),f=document.getElementById("squareSideX"),_=document.getElementById("squareSideZ"),g=document.getElementById("circleRadius"),m=document.getElementById("circleAngle"),p=document.getElementById("lineOrientation"),w=document.getElementById("lineLength");let y=null;document.getElementById("addHalo"),document.getElementById("addCone"),document.getElementById("addZone"),document.getElementById("addArrow"),document.getElementById("addSphere");function x(){e.classList.add("show"),P();const D=document.createElement("div");D.id="addMenuBackdrop",D.style.cssText=`
            position: fixed;
            top: 0;
            left: 0;
            right: 0;
            bottom: 0;
            background: rgba(0, 0, 0, 0.3);
            z-index: 9999;
            backdrop-filter: blur(2px);
        `,D.addEventListener("click",A),document.body.appendChild(D),document.addEventListener("keydown",T),console.log("Add element menu opened")}function A(){e.classList.remove("show");const D=document.getElementById("addMenuBackdrop");D&&D.remove(),document.removeEventListener("keydown",T),P(),console.log("Add element menu closed")}function T(D){D.key==="Enter"&&!s.disabled&&(D.preventDefault(),z())}function P(){y=null,n.forEach(D=>D.classList.remove("selected")),s.disabled=!0}function L(){if(!y)return;y==="sphere"||y==="cone"?(r.style.display="flex",a.style.display="flex",l.style.display="flex",M()):y==="plastico"?(r.style.display="none",a.style.display="none",l.style.display="none"):(r.style.display="flex",a.style.display="none",l.style.display="none")}function M(){const D=c.value;u.style.display="none",d.style.display="none",h.style.display="none",D==="square"?u.style.display="flex":D==="circle"?d.style.display="flex":D==="line"&&(h.style.display="flex")}function v(D,I,G){const F=[];if(D===1)F.push({x:0,y:0,z:1.2});else if(D===2)F.push({x:-I/2,y:0,z:1.2}),F.push({x:I/2,y:0,z:1.2});else if(D===4)F.push({x:-I/2,y:-G/2,z:1.2}),F.push({x:I/2,y:-G/2,z:1.2}),F.push({x:I/2,y:G/2,z:1.2}),F.push({x:-I/2,y:G/2,z:1.2});else{const j=2*(I+G)/D;for(let ee=0;ee<D;ee++){const ce=ee*j;let Re,$;ce<=I?(Re=-I/2+ce,$=-G/2):ce<=I+G?(Re=I/2,$=-G/2+(ce-I)):ce<=2*I+G?(Re=I/2-(ce-I-G),$=G/2):(Re=-I/2,$=G/2-(ce-2*I-G)),F.push({x:Re,y:$,z:1.2})}}return F}function C(D,I,G){const F=[];if(D===1)F.push({x:0,y:0,z:1.2});else{const W=G>=360?D:Math.max(1,D-1),j=G*Math.PI/180/W,ee=-(G*Math.PI/180)/2;for(let ce=0;ce<D;ce++){const Re=ee+ce*j,$=I*Math.cos(Re),ie=I*Math.sin(Re);F.push({x:$,y:ie,z:1.2})}}return F}function N(D,I,G){const F=[];if(D===1)F.push({x:0,y:0,z:1.2});else{const W=I/(D-1),j=-I/2;for(let ee=0;ee<D;ee++){const ce=j+ee*W;G==="horizontal"?F.push({x:ce,y:0,z:1.2}):G==="vertical"?F.push({x:0,y:ce,z:1.2}):G==="perpendicular"&&F.push({x:0,y:0,z:1.2+ce})}}return F}function O(D){const I=[];if(D===1)I.push({x:0,y:0,z:1.2});else{const W=-((D-1)*.5)/2;for(let j=0;j<D;j++){const ee=W+j*.5;I.push({x:ee,y:0,z:1.2})}}return I}function z(){if(!y)return;if(y==="plastico"){const W=document.getElementById("loadPlastico");W&&(W.click(),A());return}const D=parseInt(o.value);let I=[];const G=y==="sphere"||y==="cone";if(G){const W=c.value;if(W==="square"){const j=parseFloat(f.value),ee=parseFloat(_.value);I=v(D,j,ee)}else if(W==="circle"){const j=parseFloat(g.value),ee=parseFloat(m.value);I=C(D,j,ee)}else if(W==="line"){const j=parseFloat(w.value),ee=p.value;I=N(D,j,ee)}}else I=O(D);I.forEach(W=>{y==="sphere"?addSphereAtPosition(W.x,W.y,W.z):y==="cone"?addSpeakerAtPosition(W.x,W.y,W.z):y==="arrow"?addArrowAtPosition(W.x,W.y,W.z):y==="halo"?addHaloAtPosition(W.x,W.y,W.z):y==="zone"&&addZoneAtPosition(W.x,W.y,W.z)});let F;if(G){const W=c.value;F=W==="line"?`${W} (${p?p.value:"horizontal"})`:W}else F="simple line (0.5m spacing)";console.log(`Added ${D} ${y} elements in ${F} arrangement`),A()}i&&i.addEventListener("click",D=>{D.preventDefault(),D.stopPropagation(),x()}),t&&t.addEventListener("click",D=>{D.preventDefault(),D.stopPropagation(),A()}),s&&s.addEventListener("click",D=>{D.preventDefault(),D.stopPropagation(),z()}),c&&c.addEventListener("change",M),n.forEach(D=>{D.addEventListener("click",I=>{I.preventDefault(),I.stopPropagation(),n.forEach(G=>G.classList.remove("selected")),D.classList.add("selected"),y=D.dataset.element,s.disabled=!1,L(),console.log(`Selected element type: ${y}`)}),D.addEventListener("mouseenter",()=>{const I=D.querySelector(".add-menu-label").textContent;D.dataset.element==="plastico"?D.title="Carica modello 3D architettura":D.title=`Seleziona ${I}`})}),document.addEventListener("keydown",D=>{D.key==="Escape"&&e.classList.contains("show")&&A()}),M(),window.addElementMenuSystem={open:x,close:A},console.log("Advanced Add Element Menu System initialized")});
