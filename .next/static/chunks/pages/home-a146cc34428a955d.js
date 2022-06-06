(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[229],{1159:function(e,n,s){(window.__NEXT_P=window.__NEXT_P||[]).push(["/home",function(){return s(6678)}])},6678:function(e,n,s){"use strict";s.r(n),s.d(n,{default:function(){return j}});var i=s(5893),t=s(7294),r=s(1163),a=function(){var e=(0,t.useState)(!1),n=e[0],s=e[1],a=(0,r.useRouter)(),c=function(){console.log("clicked"),s(!n)};return(0,i.jsx)("header",{id:"header",children:(0,i.jsxs)("nav",{className:"menu",children:[(0,i.jsx)("span",{className:"logo",children:(0,i.jsx)("img",{src:"/assets/images/brand.png",alt:"brand"})}),(0,i.jsxs)("ul",{className:"menu_items ".concat(n?"show":""),children:[(0,i.jsx)("li",{children:(0,i.jsx)("a",{className:"active",href:"#services",onClick:c,children:"Services"})}),(0,i.jsx)("li",{children:(0,i.jsx)("a",{href:"#aboutMe",onClick:c,children:"About Me"})}),(0,i.jsx)("li",{children:(0,i.jsx)("a",{href:"#portfolio",onClick:c,children:"Portfolio"})}),(0,i.jsx)("li",{children:(0,i.jsx)("a",{href:"#",onClick:c,children:"Blog"})}),(0,i.jsx)("li",{children:(0,i.jsx)("a",{onClick:function(){a.push("/contactMe")},children:"Contact Me"})})]}),(0,i.jsx)("span",{className:"btn_menu",onClick:c,children:(0,i.jsx)("img",{src:"/assets/images/Navbar.png",alt:"Nav"})})]})})},c=function(){return(0,i.jsx)("section",{className:"section-main--one",id:"Top",children:(0,i.jsxs)("div",{className:"main-banner--container",children:[(0,i.jsxs)("div",{className:"banner-text--containerOne",children:[(0,i.jsx)("h2",{children:"my Name is Camilo"}),(0,i.jsx)("h1",{children:"I\u2019M A DEVELOPER"})]}),(0,i.jsxs)("div",{className:"banner-text--containerTwo",children:[(0,i.jsx)("h2",{children:"Hi, I am"}),(0,i.jsx)("h1",{children:"Camilo Hernandez"}),(0,i.jsx)("p",{children:"Front-end Developer / Business Manager"})]}),(0,i.jsx)("img",{src:"/assets/images/separatorWhite2.png",alt:"separador",className:"separador"}),(0,i.jsxs)("div",{className:"banner-img--container",children:[(0,i.jsx)("a",{href:"mailto:chernandezcediel@gmail.com",children:(0,i.jsx)("img",{src:"/assets/images/cib_mail-ru.png",alt:"Mail"})}),(0,i.jsx)("a",{href:"https://github.com/Cherced",children:(0,i.jsx)("img",{src:"/assets/images/ant-design_github-filled.png",alt:"GITHUB",className:"git"})}),(0,i.jsx)("a",{href:"https://linkedin.com/in/cherced",children:(0,i.jsx)("img",{src:"/assets/images/entypo-social_linkedin-with-circle.png",alt:"LINKEDIN"})})]})]})})},l=function(){var e=(0,r.useRouter)();return(0,i.jsxs)("div",{className:"resume",id:"aboutMe",children:[(0,i.jsx)("p",{children:"Frontend developer, with a degree in business administration. I\u2019m a Croosfiter, lover of motorSports, and all the mechanic stuff, traveller. I believe in continuous learning as a fundamental principle of life. In addition, I have worked for around 6 years in the administration of public civil infrastructure projects. "}),(0,i.jsx)("p",{children:"When Covid-19 impacted the world I wanted to do a big change in my professional life, and I decide to make the switch to a professional career. Im currently improving my technical skills in frontend technologies... HTML, CSS, JAVASCRIPT, a fan of Vercel and its Next.js framework. Im in an intensive learning program to successfully meet that goal, its name is Platzi Master."}),(0,i.jsx)("p",{children:"My goal is to never stop learning, and if on this industry we have unicorns, I want to be the same as pegasus!"}),(0,i.jsx)("p",{children:"Thanks For Reading"}),(0,i.jsx)("a",{onClick:function(){return e.push("/VideoAboutMe")},children:(0,i.jsx)("button",{className:"button",type:"text",children:"MORE"})})]})},o=function(e){var n=(0,r.useRouter)();return(0,i.jsx)("button",{onClick:function(){n.push("projects/".concat(e.id))},className:"sliderContentItem__image",children:(0,i.jsx)("img",{className:"sliderImg",src:e.src,alt:"movies top"})})};function d(e,n){(null==n||n>e.length)&&(n=e.length);for(var s=0,i=new Array(n);s<n;s++)i[s]=e[s];return i}function m(e,n){return function(e){if(Array.isArray(e))return e}(e)||function(e,n){var s=null==e?null:"undefined"!==typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=s){var i,t,r=[],a=!0,c=!1;try{for(s=s.call(e);!(a=(i=s.next()).done)&&(r.push(i.value),!n||r.length!==n);a=!0);}catch(l){c=!0,t=l}finally{try{a||null==s.return||s.return()}finally{if(c)throw t}}return r}}(e,n)||function(e,n){if(!e)return;if("string"===typeof e)return d(e,n);var s=Object.prototype.toString.call(e).slice(8,-1);"Object"===s&&e.constructor&&(s=e.constructor.name);if("Map"===s||"Set"===s)return Array.from(s);if("Arguments"===s||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(s))return d(e,n)}(e,n)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}var h=function(){var e=m(t.useState([]),2),n=e[0],s=e[1];return t.useEffect((function(){var e=!0;return e&&window.fetch("/api/projects").then((function(e){return e.json()})).then((function(e){s(e)})),function(){return e=!1}}),[]),(0,i.jsxs)(t.Fragment,{children:[(0,i.jsx)("section",{className:"section-main--two",id:"services",children:(0,i.jsxs)("div",{className:"main-skills--container",children:[(0,i.jsx)("div",{className:"titleBoxServices",children:"SERVICES"}),(0,i.jsxs)("div",{className:"main-skills--container--text",children:[(0,i.jsxs)("div",{className:"box-model one",children:[(0,i.jsx)("img",{src:"/assets/images/Desing.png",alt:"desingIcon"}),(0,i.jsx)("h1",{children:"DESING"}),(0,i.jsx)("p",{children:"I can desing the website based on your needs and suggestions. I can also create it from scratch by consulting with you during work."})]}),(0,i.jsxs)("div",{className:"box-model two",children:[(0,i.jsx)("img",{src:"/assets/images/dev.png",alt:"dev"}),(0,i.jsx)("h1",{children:"DEVELOPEMENT"}),(0,i.jsx)("p",{children:"Based on a project created by me (or any another one provided by you), I can code the website to be fully functional and responsive."})]}),(0,i.jsxs)("div",{className:"box-model three",children:[(0,i.jsx)("img",{src:"/assets/images/maintenance.png",alt:"MantIcon"}),(0,i.jsx)("h1",{children:"MAINTENANCE"}),(0,i.jsx)("p",{children:"I will look after your website, and in case of problems or the need for changes, I can introduce new functionalities and solutions."})]})]})]})}),(0,i.jsxs)("div",{className:"main-skills--tech",children:[(0,i.jsx)("div",{className:"titleBox",children:"SKILLS"}),(0,i.jsx)("h2",{id:"unic",children:"USING NOW:"}),(0,i.jsx)("img",{src:"/assets/images/Group15.png",alt:"htmlICON"}),(0,i.jsx)("h1",{children:"HTML"}),(0,i.jsx)("img",{src:"/assets/images/Group16.png",alt:"CSS3ICON"}),(0,i.jsx)("h1",{children:"CSS3"}),(0,i.jsx)("img",{src:"/assets/images/Vector.png",alt:"SASSICON"}),(0,i.jsx)("h1",{children:"SASS"}),(0,i.jsx)("img",{src:"/assets/images/REACT.png",alt:"SASSICON"}),(0,i.jsx)("h1",{children:"REACT"}),(0,i.jsx)("img",{src:"/assets/images/VanillaJS.png",alt:"SASSICON"}),(0,i.jsx)("h1",{children:"JAVASCRIPT"})]}),(0,i.jsx)("section",{className:"section-main-three",id:"portfolio",children:(0,i.jsxs)("div",{className:"main-proyect--container",children:[(0,i.jsx)("div",{className:"proyect-button--container",children:(0,i.jsx)("div",{className:"titleBox",children:"PORTFOLIO"})}),(0,i.jsx)("div",{className:"proyect-nav--container"}),(0,i.jsxs)("aside",{className:"proyect-carrusel--container",children:[(0,i.jsx)("div",{className:"sliderInfiniteMoviesContainer",children:(0,i.jsx)("div",{className:"sliderContent",id:"slider",children:n.map((function(e,n){return(0,i.jsx)(o,{id:e.id,src:e.image},n)}))})}),(0,i.jsxs)("div",{className:"sliderBtnContainer",children:[(0,i.jsx)("button",{onClick:function(){console.log("click"),function(){console.log("prev");var e=document.querySelector("#slider"),n=document.querySelectorAll(".sliderContentItem__image"),s=n[n.length-1];console.log(s),e.style.marginLeft="0",e.style.transition="all 0.5s",setTimeout((function(){e.style.transition="none",e.insertAdjacentElement("afterbegin",s),e.style.marginLeft="-100%"}),500)}()},className:"slider--BTN btn--lf",id:"btn-lf",children:"<"}),(0,i.jsx)("button",{onClick:function(){console.log("click"),function(){console.log("next");var e=document.querySelector("#slider"),n=document.querySelectorAll(".sliderContentItem__image")[0];console.log(n),e.style.marginLeft="-200%",e.style.transition="all 0.5s",setTimeout((function(){e.style.transition="none",e.insertAdjacentElement("beforeend",n),e.style.marginLeft="-100%"}),500)}()},className:"slider--BTN btn--rg",id:"btn-rg",children:">"})]}),(0,i.jsx)("div",{className:"footer-proyect--container",children:(0,i.jsx)("p",{children:"And many more to come!"})})]})]})})]})},u=function(){return(0,i.jsx)("div",{className:"AtomContainer",children:(0,i.jsxs)("div",{className:"atomP",children:[(0,i.jsx)("div",{className:"electronP"}),(0,i.jsx)("div",{className:"electronP"}),(0,i.jsx)("div",{className:"electronP"})]})})},x=function(){return(0,i.jsx)("footer",{children:(0,i.jsxs)("section",{className:"section-footer--two",children:[(0,i.jsx)("a",{href:"#Top",children:(0,i.jsx)("img",{src:"/assets/images/ic_baseline-double-arrow.png",alt:"arrowup"})}),(0,i.jsx)("h1",{children:"BACK TO TOP"}),(0,i.jsxs)("div",{className:"footer-socialmedia--container",children:[(0,i.jsx)("a",{href:"http://www.riial.org/wp-content/uploads/2018/06/web3-facebook-ban-social-media-shutterstock.jpg",children:(0,i.jsx)("img",{src:"/assets/images/FACEBOOK.png",alt:"facebook"})}),(0,i.jsx)("a",{href:"https://www.linkedin.com/in/cherced/",children:(0,i.jsx)("img",{src:"/assets/images/IN.png",alt:"LINKEDIN"})}),(0,i.jsx)("a",{href:"https://www.instagram.com/cherced/",children:(0,i.jsx)("img",{src:"/assets/images/Insta.png",alt:"instagram"})}),(0,i.jsx)("a",{href:"mailto:chernandezcediel@gmail.com",children:(0,i.jsx)("img",{src:"/assets/images/Gmail.png",alt:"gmail"})})]}),(0,i.jsxs)("p",{children:[(0,i.jsx)("strong",{children:"@2020 Camilo Hernandez"})," All Rights Reserved."]})]})})},j=function(){return(0,i.jsxs)("div",{className:"homeContainer",children:[(0,i.jsx)(a,{}),(0,i.jsx)(c,{}),(0,i.jsx)(l,{}),(0,i.jsx)(h,{}),(0,i.jsx)(u,{}),(0,i.jsx)(x,{})]})}},1163:function(e,n,s){e.exports=s(880)}},function(e){e.O(0,[774,888,179],(function(){return n=1159,e(e.s=n);var n}));var n=e.O();_N_E=n}]);