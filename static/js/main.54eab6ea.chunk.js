(this["webpackJsonpreact-portfolio"]=this["webpackJsonpreact-portfolio"]||[]).push([[0],{132:function(e,t,a){e.exports=a(526)},137:function(e,t,a){},525:function(e,t,a){},526:function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),r=a(42),o=a.n(r),c=(a(137),a(8)),s=a(18),i=function(){return l.a.createElement("div",{className:"nav-bar"},l.a.createElement("div",{className:"nav-container"},l.a.createElement("div",{className:"logo"},l.a.createElement(c.b,{to:"/"},l.a.createElement("h3",null,"Daniel Kyman"))),l.a.createElement("div",{className:"nav-links"},l.a.createElement(c.b,{to:"/about"},l.a.createElement("h3",null,"About")),l.a.createElement(c.b,{to:"/articles"},l.a.createElement("h3",null,"Articles")),l.a.createElement(c.b,{to:"/contact"},l.a.createElement("h3",null,"Contact")))))},u=function(){return l.a.createElement("div",{className:"footer"},l.a.createElement("p",{className:"footer-name"},"Daniel Kyman 2020"),l.a.createElement("p",{className:"footer-links"},"git link and other stuff ..."))},m=function(){return l.a.createElement("div",{className:"intro"},l.a.createElement("h1",null,"Welcome,"),l.a.createElement("div",{className:"inner-home"},l.a.createElement("p",null,"I am a full stack web developer and software engineer specializing in JavaScript, Node.js, SQL and much more. I developed this platform to share my knowledge with the hopes of benefiting those starting a journey in the world of web development. I hope you enjoy!")))},d=a(13),p=a(16),E=a.n(p),g="https://cdn.contentful.com",f="aq9YgRIXsgEKRLXG8bAC2mM5wChSJddYq2dSbvpS89k",h=function(){return function(e){e({type:"GET_BLOGPOST_START"}),E.a.get("".concat(g,"/spaces/").concat("q2fivpqovvam","/entries?access_token=").concat(f,"&content_type=blogPost&order=-sys.createdAt")).then((function(t){console.log("get blogPost result - ",t),e({type:"GET_BLOGPOST_SUCCESS",payload:t})})).catch((function(t){console.log(t),e({type:"GET_BLOGPOST_ERROR",payload:"error fetching blogPost from api"})}))}},b=function(e){return function(t){t({type:"GET_SINGLE_POST_START"}),E.a.get("".concat(g,"/spaces/").concat("q2fivpqovvam","/entries?access_token=").concat(f,"&content_type=blogPost&fields.slug=").concat(e)).then((function(e){console.log("get single post result - ",e),t({type:"GET_SINGLE_POST_SUCCESS",payload:e})})).catch((function(e){console.log(e),t({type:"GET_SINGLE_POST_ERROR",payload:"error fetching single post from api"})}))}},v=Object(d.b)((function(e){return{blogPosts:e.blogPost.blogPosts,posts:e.singlePost}}),{getBlogPost:h,getSinglePost:b})((function(e){var t=e.getBlogPost,a=e.blogPosts,r=(e.getSinglePost,e.posts,Object(s.f)().push);Object(n.useEffect)((function(){t()}),[t]);return l.a.createElement("div",{className:"blog-posts-preview"},l.a.createElement("div",{className:"recent-articles-heading"},l.a.createElement("h1",null,"Recent Articles"),l.a.createElement(c.b,{to:"/articles"},l.a.createElement("button",{className:"muted-button"},"View All"))),l.a.createElement("div",{className:"inner-home"},a.map((function(e){return l.a.createElement("div",{key:e.sys.id,className:"article-preview",onClick:function(t){return function(e,t,a){e.preventDefault(),r("/article/".concat(t))}(t,e.fields.slug,e.sys.id)}},l.a.createElement("h2",null,e.fields.title),l.a.createElement("p",null,"- ",e.fields.description))}))))})),y=Object(d.b)((function(e){return{projects:e.projects.projects}}),{getProject:function(){return function(e){e({type:"GET_PROJECT_START"}),E.a.get("".concat(g,"/spaces/").concat("q2fivpqovvam","/entries?access_token=").concat(f,"&content_type=project&order=-sys.createdAt")).then((function(t){console.log("get project result - ",t),e({type:"GET_PROJECT_SUCCESS",payload:t})})).catch((function(t){console.log(t),e({type:"GET_PROJECT_ERROR",payload:"error fetching project from api"})}))}}})((function(e){var t=e.getProject,a=e.projects;return Object(n.useEffect)((function(){t()}),[t]),l.a.createElement("div",{className:"projects-preview"},l.a.createElement("h1",null,"Recent Projects"),a.map((function(e){return l.a.createElement("div",{key:e.sys.id,className:"inner-home"},l.a.createElement("h3",null,l.a.createElement("a",{href:e.fields.source,target:"_blank",rel:"noreferrer noopener"},e.fields.title)),l.a.createElement("p",null,"- ",e.fields.description),l.a.createElement("div",{className:"repo-depo-links"},l.a.createElement("h3",null,l.a.createElement("a",{href:e.fields.source,target:"_blank",rel:"noreferrer noopener"},"Repository")),l.a.createElement("h3",null,l.a.createElement("a",{href:e.fields.path,target:"_blank",rel:"noreferrer noopener"},"Deployment"))))})))})),S=function(){return l.a.createElement("div",{className:"references-preview"},l.a.createElement("h1",null,"Recent Inspiration"))},P=function(){return l.a.createElement("div",{className:"home-page"},l.a.createElement(m,null),l.a.createElement(v,null),l.a.createElement(y,null),l.a.createElement(S,null))},O=a(43),T=a.n(O),w=Object(d.b)((function(e){return{blogPosts:e.blogPost.blogPosts,posts:e.singlePost}}),{getBlogPost:h,getSinglePost:b})((function(e){var t=e.getBlogPost,a=e.blogPosts,r=(e.getSinglePost,e.posts,Object(s.f)().push);Object(n.useEffect)((function(){t()}),[t]);return l.a.createElement("div",{className:"blog-posts-preview"},l.a.createElement("div",{className:"recent-articles-heading"},l.a.createElement("h1",null,"Articles")),l.a.createElement("div",{className:"inner-home"},a.map((function(e){return l.a.createElement("div",{key:e.sys.id,className:"article-preview",onClick:function(t){return function(e,t,a){e.preventDefault(),r("/article/".concat(t))}(t,e.fields.slug,e.sys.id)}},l.a.createElement("h2",null,e.fields.title),l.a.createElement("p",{className:"articles-date"},(t=e.fields.publishDate,l.a.createElement(T.a,{format:"D MMM YYYY"},t))),l.a.createElement("p",null,"- ",e.fields.description));var t}))))})),_=function(){return l.a.createElement("div",{className:"articles-page"},l.a.createElement(w,null))},j=function(){return l.a.createElement("div",{className:"about-page"},l.a.createElement("h1",null,"About Me"),l.a.createElement("div",{className:"inner-home"},l.a.createElement("p",null,"Ever since I built my first computer when I was 12 years old I have been obsessed with hardware and software development. I began developing web applications shortly after that, using the limited self-study resources available online in the early 2000's. Throughout that time I became extensively knowledgeable not only with the development of web based applications but with graphic design using Photoshop and Illustrator, 3d modeling and CAD using a variety of the most popular design suits, electrical engineering and electromagnetism concepts while designing and manufacturing my own printed circuit boards, winding my own transformers, and embedded bare metal software design including writing my own firmware in C , C++ and arduino. After years of self study, I decided to further my education specifically in regards to web development and enroll at Lambda, a 9 month full stack coding boot camp. While studying at Lambda I came up with the idea to develop my own online platform to share some of the knowledge I have picked up over the years in the form of articles that I write, open source projects that I have worked on, and articles written by others that I have found useful."),l.a.createElement("h2",null,"Experience"),l.a.createElement("h3",null,"Front End Development"),l.a.createElement("ul",null,l.a.createElement("li",null,"Applied JavaScript"),l.a.createElement("li",null,"React"),l.a.createElement("li",null,"Single Page Applications"),l.a.createElement("li",null,"Form Management"),l.a.createElement("li",null,"Function and Class Components"),l.a.createElement("li",null,"CSS in JS"),l.a.createElement("li",null,"React Router"),l.a.createElement("li",null,"HTTP/AJAX"),l.a.createElement("li",null,"Redux"),l.a.createElement("li",null,"Async Redux w/ Middleware"),l.a.createElement("li",null,"User Interfaces"),l.a.createElement("li",null,"Responsive Design"),l.a.createElement("li",null,"Pre-Processors")),l.a.createElement("h3",null,"Back End Development"),l.a.createElement("ul",null,l.a.createElement("li",null,"RESTful Web APIs with Express and Node.js"),l.a.createElement("li",null,"Server-side Routing,Express Middleware"),l.a.createElement("li",null,"Relational Databases and SQL"),l.a.createElement("li",null,"Querying Data, Migrations and Seeding"),l.a.createElement("li",null,"Data Modeling"),l.a.createElement("li",null,"Authentication"),l.a.createElement("li",null,"Sessions and Cookies"),l.a.createElement("li",null,"JSON Web Tokens"),l.a.createElement("li",null,"Client Side Authentication"),l.a.createElement("li",null,"Automated Testing"),l.a.createElement("li",null,"Testing React Applications"),l.a.createElement("li",null,"Testing Web APIs"))))},R=function(){return l.a.createElement("div",{className:"contact-page"},l.a.createElement("h1",null,"contact page"))},N=a(71),k=a(118),C=a.n(k),G=a(119),A=a(120),I=a(130),D=a(131),L=a(528),J=a(123),M=function(e){Object(D.a)(a,e);var t=Object(I.a)(a);function a(){return Object(G.a)(this,a),t.apply(this,arguments)}return Object(A.a)(a,[{key:"render",value:function(){var e=this.props,t=e.language,a=e.value;return l.a.createElement(L.a,{language:t,style:J.duotoneDark},a)}}]),a}(n.PureComponent);M.defaultProps={language:null};var B=M,q=a(129),x=Object(d.b)((function(e){return{post:e.singlePost,blogPosts:e.blogPost.blogPosts}}),{getSinglePost:b})((function(e){e.getSinglePost,e.post,e.blogPosts;var t=Object(n.useState)(!0),a=Object(N.a)(t,2),r=a[0],o=a[1],c=Object(n.useState)(),i=Object(N.a)(c,2),u=i[0],m=i[1],d=Object(s.g)().slug,p=q.a({space:"q2fivpqovvam",accessToken:"aq9YgRIXsgEKRLXG8bAC2mM5wChSJddYq2dSbvpS89k"});Object(n.useEffect)((function(){p.getEntries().then((function(e){e.items.forEach((function(e){e.fields.slug===d&&(console.log("test entry - ",e),m(e),o(!1))}))}))}),[d]);var E;return l.a.createElement("div",{className:"article"},r?l.a.createElement("span",null,"loading"):l.a.createElement(l.a.Fragment,null,l.a.createElement("h1",{className:"article-title"},u.fields.title),l.a.createElement("div",{className:"article-date-content-format"},l.a.createElement("p",{className:"article-date"},"Published ",(E=u.fields.publishDate,l.a.createElement(T.a,{format:"D MMM YYYY"},E))),l.a.createElement("div",{className:"article-content"},l.a.createElement(C.a,{source:u.fields.body,renderers:{code:B}})))))}));a(525);var Y=function(){return l.a.createElement(c.a,null,l.a.createElement("div",{className:"container"},l.a.createElement(i,null),l.a.createElement("div",{className:"global-format"},l.a.createElement(s.c,null,l.a.createElement(s.a,{exact:!0,path:"/",component:P}),l.a.createElement(s.a,{exact:!0,path:"/articles",component:_}),l.a.createElement(s.a,{exact:!0,path:"/about",component:j}),l.a.createElement(s.a,{exact:!0,path:"/contact",component:R}),l.a.createElement(s.a,{exact:!0,path:"/article/:slug",component:x})),l.a.createElement(u,null))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var W=a(17),U=a(127),X=a(128),F=a(9),K={blogPosts:[],loading:!1,error:""},Q={projects:[],loading:!1,error:""},z={post:[],slug:"",loading:!1,error:""},H=Object(W.combineReducers)({blogPost:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:K,t=arguments.length>1?arguments[1]:void 0,a=t.type,n=t.payload;switch(a){case"GET_BLOGPOST_START":return Object(F.a)({},e,{loading:!0,error:""});case"GET_BLOGPOST_SUCCESS":return Object(F.a)({},e,{blogPosts:n.data.items,loading:!1});case"GET_BLOGPOST_ERROR":return Object(F.a)({},e,{loading:!1,error:n});default:return e}},projects:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Q,t=arguments.length>1?arguments[1]:void 0,a=t.type,n=t.payload;switch(a){case"GET_PROJECT_START":return Object(F.a)({},e,{loading:!0,error:""});case"GET_PROJECT_SUCCESS":return Object(F.a)({},e,{projects:n.data.items,loading:!1});case"GET_PROJECT_ERROR":return Object(F.a)({},e,{error:n});default:return e}},singlePost:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:z,t=arguments.length>1?arguments[1]:void 0,a=t.type,n=t.payload;switch(a){case"GET_SINGLE_POST_START":return Object(F.a)({},e,{loading:!0,error:""});case"GET_SINGLE_POST_SUCCESS":return Object(F.a)({},e,{post:n.data.items[0],slug:n.data.items[0].fields.slug,loading:!1});case"GET_SINGLE_POST_ERROR":return Object(F.a)({},e,{error:n});default:return e}}}),V=[X.a],$=Object(W.createStore)(H,{},Object(U.composeWithDevTools)(W.applyMiddleware.apply(void 0,V)));o.a.render(l.a.createElement(d.a,{store:$},l.a.createElement(Y,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},70:function(e,t){}},[[132,1,2]]]);
//# sourceMappingURL=main.54eab6ea.chunk.js.map