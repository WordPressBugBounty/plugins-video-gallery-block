(()=>{"use strict";var t={744:(t,e,n)=>{var r=n(795);e.H=r.createRoot,r.hydrateRoot},760:(t,e,n)=>{var r,o=(r=n(609))&&"object"==typeof r&&"default"in r?r.default:r;function a(t){return function(){return t}}var i=function(){};i.thatReturns=a,i.thatReturnsFalse=a(!1),i.thatReturnsTrue=a(!0),i.thatReturnsNull=a(null),i.thatReturnsThis=function(){return this},i.thatReturnsArgument=function(t){return t};var s=i,l=Object.freeze({default:s,__moduleExports:s}),c=function(t,e,n,r,o,a,i,s){if(!t){var l;if(void 0===e)l=new Error("Minified exception occurred; use the non-minified dev environment for the full error message and additional helpful warnings.");else{var c=[n,r,o,a,i,s],u=0;(l=new Error(e.replace(/%s/g,(function(){return c[u++]})))).name="Invariant Violation"}throw l.framesToPop=1,l}},u=Object.freeze({default:c,__moduleExports:c}),d=l&&s||l;Object.getOwnPropertySymbols,Object.prototype.hasOwnProperty,Object.prototype.propertyIsEnumerable;(function(){try{if(!Object.assign)return!1;var t=new String("abc");if(t[5]="de","5"===Object.getOwnPropertyNames(t)[0])return!1;for(var e={},n=0;n<10;n++)e["_"+String.fromCharCode(n)]=n;if("0123456789"!==Object.getOwnPropertyNames(e).map((function(t){return e[t]})).join(""))return!1;var r={};return"abcdefghijklmnopqrst".split("").forEach((function(t){r[t]=t})),"abcdefghijklmnopqrst"===Object.keys(Object.assign({},r)).join("")}catch(t){return!1}})()&&Object.assign;var p="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED",m=Object.freeze({default:p,__moduleExports:p}),f=u&&c||u,h=m&&p||m,b=function(){function t(t,e,n,r,o,a){a!==h&&f(!1,"Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types")}function e(){return t}t.isRequired=t;var n={array:t,bool:t,func:t,number:t,object:t,string:t,symbol:t,any:t,arrayOf:e,element:t,instanceOf:e,node:t,objectOf:e,oneOf:e,oneOfType:e,shape:e,exact:e};return n.checkPropTypes=d,n.PropTypes=n,n},g=Object.freeze({default:b,__moduleExports:b}),y=g&&b||g,$=function(t,e){return function(t){t.exports=y()}(e={exports:{}}),e.exports}(),v=function(){function t(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}return function(e,n,r){return n&&t(e.prototype,n),r&&t(e,r),e}}(),x=function(t){var e=t.snapshot;return o.createElement("div",{className:"react-thumbnail-generator"},o.createElement("img",{src:e,alt:"my video thumbnail"}))},w=function(t){function e(t){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,e);var n=function(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=typeof e&&"function"!=typeof e?t:e}(this,(e.__proto__||Object.getPrototypeOf(e)).call(this,t));return n.getSnapShot=function(){try{var t=n.props,e=t.width,r=t.height,o=n.refs.videoEl,a=n.refs.canvas;a.height=o.videoHeight,a.width=o.videoWidth,e&&r?a.getContext("2d").drawImage(o,0,0,e,r):a.getContext("2d").drawImage(o,0,0);var i=a.toDataURL("image/png");o.src="",o.remove(),a.remove(),n.setState({snapshot:i}),n.state.thumbnailHandler&&n.state.thumbnailHandler(i)}catch(t){console.error(t)}},n.state={dataLoaded:!1,metadataLoaded:!1,seeked:!1,snapshot:!1,suspended:!1,cors:t.cors,width:t.width,height:t.height,renderThumbnail:t.renderThumbnail,snapshotAtTime:t.snapshotAtTime,thumbnailHandler:t.thumbnailHandler,videoUrl:t.videoUrl},n}return function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}(e,t),v(e,[{key:"render",value:function(){var t=this,e=this.state,n=e.renderThumbnail,r=e.snapshot,a=e.videoUrl;return r?n?o.createElement(x,{snapshot:r}):null:o.createElement("div",{className:"react-thumbnail-generator"},o.createElement("canvas",{className:"snapshot-generator",ref:"canvas"}),o.createElement("video",{muted:!0,className:"snapshot-generator",ref:"videoEl",src:a,onLoadedMetadata:function(){return t.setState({metadataLoaded:!0})},onLoadedData:function(){return t.setState({dataLoaded:!0})},onSuspend:function(){return t.setState({suspended:!0})},onSeeked:function(){return t.setState({seeked:!0})}}))}},{key:"componentWillReceiveProps",value:function(t){var e=!1,n={};for(var r in t)t[r]!==this.props[r]&&(n[r]=t[r],e||(e=!0));e&&this.setState(n)}},{key:"componentDidMount",value:function(){this.state.cors||this.refs.videoEl.setAttribute("crossOrigin","Anonymous")}},{key:"componentDidUpdate",value:function(t,e){if(!this.state.snapshot){var n=this.state,r=n.metadataLoaded,o=n.dataLoaded,a=n.suspended,i=n.seeked,s=n.snapshot,l=n.snapshotAtTime;r&&o&&a&&((!this.refs.videoEl.currentTime||this.refs.videoEl.currentTime<this.state.snapshotAtTime)&&(this.refs.videoEl.currentTime=l),i&&!s&&this.getSnapShot())}}}]),e}(o.Component);w.propTypes={cors:$.bool,width:$.number,height:$.number,renderThumbnail:$.bool,snapshotAtTime:$.number,thumbnailHandler:$.func,videoUrl:$.string.isRequired},w.defaultProps={cors:!1,renderThumbnail:!0,snapshotAtTime:2},t.exports=w},609:t=>{t.exports=window.React},795:t=>{t.exports=window.ReactDOM}},e={};function n(r){var o=e[r];if(void 0!==o)return o.exports;var a=e[r]={exports:{}};return t[r](a,a.exports,n),a.exports}n.n=t=>{var e=t&&t.__esModule?()=>t.default:()=>t;return n.d(e,{a:e}),e},n.d=(t,e)=>{for(var r in e)n.o(e,r)&&!n.o(t,r)&&Object.defineProperty(t,r,{enumerable:!0,get:e[r]})},n.o=(t,e)=>Object.prototype.hasOwnProperty.call(t,e);var r=n(609),o=n(744),a=n(760),i=n.n(a);const s=(t,e=!0,n=!0,r=!0)=>{const{type:o="solid",color:a="#000000b3",gradient:i="linear-gradient(135deg, #4527a4, #8344c5)",image:s={},position:l="center center",attachment:c="initial",repeat:u="no-repeat",size:d="cover",overlayColor:p="#000000b3"}=t||{};return"gradient"===o&&n?`background: ${i};`:"image"===o&&r?`background: url(${s?.url});\n\t\t\t\tbackground-color: ${p};\n\t\t\t\tbackground-position: ${l};\n\t\t\t\tbackground-size: ${d};\n\t\t\t\tbackground-repeat: ${u};\n\t\t\t\tbackground-attachment: ${c};\n\t\t\t\tbackground-blend-mode: overlay;`:e&&`background: ${a};`},l=t=>{const{width:e="0px",style:n="solid",color:r="",side:o="all",radius:a="0px"}=t||{},i=t=>{const e=o?.toLowerCase();return e?.includes("all")||e?.includes(t)},s=`${e} ${n} ${r}`,l=`\n\t\t${"0px"!==e&&e?["top","right","bottom","left"].map((t=>i(t)?`border-${t}: ${s};`:"")).join(""):""}\n\t\t${a?`border-radius: ${a};`:""}\n\t`;return l},c=t=>{const{color:e="#333",bgType:n="solid",bg:r="",gradient:o="linear-gradient(135deg, #4527a4, #8344c5)"}=t||{};return`\n\t\t${e?`color: ${e};`:""}\n\t\t${o||r?`background: ${"gradient"===n?o:r};`:""}\n\t`},u=(t,e="box")=>{let n="";return t?.map(((r,o)=>{const{hOffset:a="0px",vOffset:i="0px",blur:s="0px",spreed:l="0px",color:c="#7090b0",isInset:u=!1}=r||{},d=u?"inset":"",p=`${a} ${i} ${s}`,m=o+1>=t.length?"":", ";n+="text"===e?`${p} ${c}${m}`:`${p} ${l} ${c} ${d}${m}`})),n||"none"},d=t=>{const{side:e=2,vertical:n="0px",horizontal:r="0px",top:o="0px",right:a="0px",bottom:i="0px",left:s="0px"}=t||{};return 2===e?`${n} ${r}`:`${o} ${a} ${i} ${s}`},p=(t,e,n=!0)=>{const{fontFamily:r="Default",fontCategory:o="sans-serif",fontVariant:a=400,fontWeight:i=400,isUploadFont:s=!0,fontSize:l={desktop:15,tablet:15,mobile:15},fontStyle:c="normal",textTransform:u="none",textDecoration:d="auto",lineHeight:p="135%",letterSpace:m="0px"}=e||{},f=(t,e)=>t?`${e}: ${t};`:"",h=!n||!r||"Default"===r,b=l?.desktop||l,g=l?.tablet||b,y=l?.mobile||g,$=`\n\t\t${h?"":`font-family: '${r}', ${o};`}\n\t\t${f(i,"font-weight")}\n\t\tfont-size: ${b}px;\n\t\t${f(c,"font-style")}\n\t\t${f(u,"text-transform")}\n\t\t${f(d,"text-decoration")}\n\t\t${f(p,"line-height")}\n\t\t${f(m,"letter-spacing")}\n\t`,v=a&&400!==a?"400i"===a?":ital@1":a?.includes("00i")?`: ital, wght@1, ${a?.replace("00i","00")} `:`: wght@${a} `:"",x=h?"":`https://fonts.googleapis.com/css2?family=${r?.split(" ").join("+")}${v.replace(/ /g,"")}&display=swap`;return{googleFontLink:!s||h?"":`@import url(${x});`,styles:`${t}{\n\t\t\t${$}\n\t\t}\n\t\t@media only screen and (min-width: 641px) and (max-width: 1024px) {\n\t\t\t${t}{\n\t\t\t\tfont-size: ${g}px;\n\t\t\t}\n\t\t}\n\t\t@media only screen and (max-width: 640px) {\n\t\t\t${t}{\n\t\t\t\tfont-size: ${y}px;\n\t\t\t}\n\t\t}`.replace(/\s+/g," ").trim()}},m="vgbVideoGallery",f=({attributes:t,id:e,itemWidth:n})=>{const{columnGap:o,rowGap:a,isPopupWidthAsRatio:i,background:f,padding:h,border:b,shadow:g,filterBtnTypo:y,filterBtnColors:$,filterBtnHoverColors:v,itemHeight:x}=t,w=`#${e} .${m}`,E=`${w} .filter button`,O=`.${e}-fancyBox`;return(0,r.createElement)("style",{dangerouslySetInnerHTML:{__html:`\n\t\t${p("",y)?.googleFontLink}\n\t\t${p(E,y)?.styles}\n\n\t\t${w}{\n\t\t\t${s(f)}\n\t\t\tpadding: ${d(h)};\n\t\t\t${l(b)}\n\t\t\tbox-shadow: ${g?u(g):"0px 25px 30px -20px #0003"};\n\t\t}\n\t\t${E}{\n\t\t\t${c($)}\n\t\t}\n\t\t${E}:hover,\n\t\t${E}.current{\n\t\t\t${c(v)}\n\t\t}\n\t\t${w} .vgbColumnSizer {\n\t\t\tgrid-column-gap: ${o}px;\n\t\t}\n\t\t${w} .videoGallery .galleryItem{\n\t\t\twidth: ${n}px;\n\t\t\theight: ${x};\n\t\t\tmargin-bottom: ${a}px;\n\t\t}\n\n\t\t${i?`\n\t\t\t${O} .fancybox-content{\n\t\t\t\tbackground: #0000 !important;\n\t\t\t}\n\t\t\t${O} .plyr{\n\t\t\t\twidth: fit-content;\n\t\t\t}\n\t\t\t${O} .plyr .plyr__controls{\n\t\t\t\tjustify-content: flex-start;\n\t\t\t}\n\t\t`:""}\n\t\t`.replace(/\s+/g," ")}})},h=jQuery,b=({attributes:t,id:e,itemWidth:n,setItemWidth:o})=>{const{align:a,albums:i,videos:s,columns:l,columnGap:c,rowGap:u,filter:d={show:!0,commonLabel:"All Videos"},padding:p,border:m,itemHeight:f}=t,{commonLabel:b}=d||{},g=(0,r.useRef)(null);return(0,r.useEffect)((()=>{o(g.current.clientWidth)}),[g.current,a,l,c,u,p,m]),(0,r.useEffect)((()=>{const t={filter:b?"*":`.${lodash.camelCase(i[0])}`,itemSelector:".galleryItem",masonry:{fitWidth:!0,gutter:c},stagger:30,transitionDuration:"0.5s"},n=h(`#${e}-gallery`).isotope(t);n.isotope("destroy"),n.isotope(t),h(`#${e}-filter`).on("click","button",(function(){h(`#${e}-filter .current`).removeClass("current"),h(this).addClass("current");const r=h(this).attr("data-filter");n.isotope({...t,filter:r})}))}),[b,a,s?.length,l,c,u,f,n,p,m]),(0,r.createElement)(r.Fragment,null,(0,r.createElement)("div",{id:`${e}-filter`,className:"filter"},b&&(0,r.createElement)("button",{"data-filter":"*",className:"current"},b),i?.map(((t,e)=>(0,r.createElement)("button",{className:0!==e||b?"":"current",key:lodash.camelCase(t),"data-filter":`.${lodash.camelCase(t)}`},t)))),(0,r.createElement)("div",{className:`vgbColumnSizer columns-${l.desktop} columns-tablet-${l.tablet} columns-mobile-${l.mobile}`},(0,r.createElement)("div",{className:"vgbColumn",ref:g})))},g=t=>{const e=[];return Object.keys(t).map((n=>{t[n]&&e.push(n)})),e},y=jQuery;document.addEventListener("DOMContentLoaded",(()=>{document.querySelectorAll(".wp-block-vgb-video-gallery").forEach((t=>{const e=JSON.parse(t.dataset.attributes);(0,o.H)(t).render((0,r.createElement)($,{attributes:e,id:t.id})),t?.removeAttribute("data-attributes")}))}));const $=({attributes:t,id:e})=>{const{videos:n}=t,[o,a]=(0,r.useState)("");return(0,r.useEffect)((()=>{y(".galleryItem").fancybox({baseClass:`vgbFancyBox ${e}-fancyBox`,buttons:["slideShow","close"],loop:!1,protect:!0,afterShow:()=>{new Plyr(`.${e}-fancyBox .fancybox-video`,{controls:g({"play-large":!0,restart:!1,rewind:!0,play:!0,"fast-forward":!0,progress:!0,"current-time":!0,duration:!1,mute:!0,volume:!0,pip:!1,airplay:!1,settings:!0,download:!1,fullscreen:!0}),clickToPlay:!1,loop:{active:!1},muted:!1,autoplay:!1,resetOnEnd:!1,hideControls:!0})}})}),[]),(0,r.createElement)(r.Fragment,null,(0,r.createElement)(f,{attributes:t,id:e,itemWidth:o}),(0,r.createElement)("div",{className:m},(0,r.createElement)(b,{attributes:t,id:e,itemWidth:o,setItemWidth:a}),(0,r.createElement)("div",{id:`${e}-gallery`,className:"videoGallery"},n?.map(((t,n)=>{const{video:o,poster:a,caption:s,albs:l}=t;return(0,r.createElement)("a",{key:n,className:`galleryItem ${l?.map((t=>lodash.camelCase(t))).join(" ")}`,"data-fancybox":`${e}-fancybox`,href:o||a,"data-caption":s},a?(0,r.createElement)("figure",{className:"galleryFigure"},(0,r.createElement)("img",{src:a})):(0,r.createElement)(i(),{width:600,videoUrl:o,snapshotAtTime:2}))})))))}})();