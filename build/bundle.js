var app=function(){"use strict";function t(){}function e(t){return t()}function n(){return Object.create(null)}function s(t){t.forEach(e)}function i(t){return"function"==typeof t}function o(t,e){return t!=t?e==e:t!==e||t&&"object"==typeof t||"function"==typeof t}function a(t){return null==t?"":t}function r(t,e){t.appendChild(e)}function l(t,e,n){t.insertBefore(e,n||null)}function c(t){t.parentNode.removeChild(t)}function u(t){return document.createElement(t)}function d(t){return document.createTextNode(t)}function m(){return d(" ")}function p(){return d("")}function g(t,e,n){null==n?t.removeAttribute(e):t.getAttribute(e)!==n&&t.setAttribute(e,n)}function f(t,e){e=""+e,t.wholeText!==e&&(t.data=e)}function h(t,e){t.value=null==e?"":e}let b;function w(t){b=t}const v=[],$=[],y=[],R=[],_=Promise.resolve();let S=!1;function P(t){y.push(t)}let k=!1;const L=new Set;function x(){if(!k){k=!0;do{for(let t=0;t<v.length;t+=1){const e=v[t];w(e),C(e.$$)}for(w(null),v.length=0;$.length;)$.pop()();for(let t=0;t<y.length;t+=1){const e=y[t];L.has(e)||(L.add(e),e())}y.length=0}while(v.length);for(;R.length;)R.pop()();S=!1,k=!1,L.clear()}}function C(t){if(null!==t.fragment){t.update(),s(t.before_update);const e=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,e),t.after_update.forEach(P)}}const U=new Set;function W(t,e){t&&t.i&&(U.delete(t),t.i(e))}function E(t,e){t.d(1),e.delete(t.key)}function j(t,e){-1===t.$$.dirty[0]&&(v.push(t),S||(S=!0,_.then(x)),t.$$.dirty.fill(0)),t.$$.dirty[e/31|0]|=1<<e%31}function T(o,a,r,l,u,d,m=[-1]){const p=b;w(o);const g=a.props||{},f=o.$$={fragment:null,ctx:null,props:d,update:t,not_equal:u,bound:n(),on_mount:[],on_destroy:[],before_update:[],after_update:[],context:new Map(p?p.$$.context:[]),callbacks:n(),dirty:m,skip_bound:!1};let h=!1;if(f.ctx=r?r(o,g,(t,e,...n)=>{const s=n.length?n[0]:e;return f.ctx&&u(f.ctx[t],f.ctx[t]=s)&&(!f.skip_bound&&f.bound[t]&&f.bound[t](s),h&&j(o,t)),e}):[],f.update(),h=!0,s(f.before_update),f.fragment=!!l&&l(f.ctx),a.target){if(a.hydrate){const t=function(t){return Array.from(t.childNodes)}(a.target);f.fragment&&f.fragment.l(t),t.forEach(c)}else f.fragment&&f.fragment.c();a.intro&&W(o.$$.fragment),function(t,n,o){const{fragment:a,on_mount:r,on_destroy:l,after_update:c}=t.$$;a&&a.m(n,o),P(()=>{const n=r.map(e).filter(i);l?l.push(...n):s(n),t.$$.on_mount=[]}),c.forEach(P)}(o,a.target,a.anchor),x()}w(p)}var O=["400","401","402","403","404","405","406","407","408","409","410","411","412","413","414","415","416","417","418","419","420","421","422","423","424","425","426","427","428","429","430","431","500","501","502","503","504","505","506","507","508","509","510","511","about","access","account","admin","anonymous","any","api","apps","attributes","auth","billing","blob","blog","bounty","branches","business","businesses","c","cache","case-studies","categories","central","certification","changelog","cla","cloud","codereview","collection","collections","comments","commit","commits","community","companies","compare","contact","contributing","cookbook","coupons","customer","customers","dashboard","dashboards","design","develop","developer","diff","discover","discussions","docs","downloads","downtime","editor","editors","edu","enterprise","events","explore","featured","features","files","fixtures","forked","garage","ghost","gist","gists","graphs","guide","guides","help","help-wanted","home","hooks","hosting","hovercards","identity","images","inbox","individual","info","integration","interfaces","introduction","invalid-email-address","investors","issues","jobs","join","journal","journals","lab","labs","languages","launch","layouts","learn","legal","library","linux","listings","lists","login","logos","logout","mac","maintenance","malware","man","marketplace","mention","mentioned","mentioning","mentions","migrating","milestones","mine","mirrors","mobile","navigation","network","new","news","none","nonprofit","nonprofits","notices","notifications","oauth","offer","open-source","organisations","organizations","orgs","pages","partners","payments","personal","plans","plugins","popular","popularity","posts","press","pricing","professional","projects","pulls","raw","readme","recommendations","redeem","releases","render","reply","repositories","resources","restore","revert","save-net-neutrality","saved","scraping","search","security","services","sessions","settings","shareholders","shop","showcases","signin","signup","site","spam","sponsors","ssh","staff","starred","stars","static","status","statuses","storage","store","stories","styleguide","subscriptions","suggest","suggestion","suggestions","support","suspended","talks","teach","teacher","teachers","teaching","teams","ten","terms","timeline","topic","topics","tos","tour","train","training","translations","tree","trending","updates","username","users","visualization","w","watching","wiki","windows","works-with","www0","www1","www2","www3","www4","www5","www6","www7","www8","www9"];const q=t=>Boolean(document.querySelector(t)),F=(t=location)=>String(vt(t)).startsWith("blame/"),G=(t=location)=>ct(t)||V(t),M=(t=location)=>String(vt(t)).startsWith("commits"),N=(t=location)=>String(vt(t)).startsWith("compare"),z=(t=location)=>!A(t)&&/^$|^(orgs\/[^/]+\/)?dashboard(\/|$)/.test(wt(t)),A=(t=location)=>t.hostname.startsWith("gist.")||"gist"===t.pathname.split("/",2)[1],B=(t=location)=>["issues","pulls"].includes(t.pathname.split("/",2)[1]),H=(t=location)=>/^issues\/\d+/.test(vt(t))&&"GitHub · Where software is built"!==document.title,I=(t=location)=>"issues/new"===vt(t),D=()=>q('meta[name="hovercard-subject-tag"][content^="organization"]'),J=(t=location)=>/^orgs\/[^/]+\/teams\/[^/]+($|\/discussions)/.test(wt(t)),Q=(t=location)=>/^pull\/\d+/.test(vt(t))&&!K(t),K=(t=location)=>/^pull\/\d+\/conflicts/.test(vt(t)),V=(t=location)=>/^pull\/\d+\/commits\/[\da-f]{5,40}/.test(vt(t)),X=(t=location)=>/^pull\/\d+$/.test(vt(t)),Y=(t=location)=>/^pull\/\d+\/commits$/.test(vt(t)),Z=(t=location)=>/^pull\/\d+\/files/.test(vt(t)),tt=(t=location)=>/^[^/]+\/[^/]+/.test(wt(t))&&!O.includes(t.pathname.split("/",2)[1])&&!z(t)&&!A(t)&&!rt(t),et=(t=location)=>/^labels\/.+|^milestones\/\d+(?!\/edit)/.test(vt(t)),nt=(t=location)=>st(t)||it(t)||et(t),st=(t=location)=>String(vt(t)).startsWith("pulls"),it=(t=location)=>String(vt(t)).startsWith("issues")&&!/^issues\/(\d+|new|templates)($|\/)/.test(vt(t)),ot=(t=location)=>""===vt(t),at=t=>{const e=vt(null!=t?t:location);if(""===e)return!0;if(t)return/^tree\/[^/]+$/.test(e);const n=$t();return String(e).startsWith("tree/")&&document.title.startsWith(n)&&!document.title.endsWith(n)},rt=(t=location)=>"search"===t.pathname.slice(1).split("/")[2],lt=(t=location)=>at(t)||String(vt(t)).startsWith("tree/"),ct=(t=location)=>/^commit\/[\da-f]{5,40}/.test(vt(t)),ut=(t=location)=>String(vt(t)).startsWith("blob/"),dt=()=>q(".user-profile-nav"),mt=(t=location)=>/^(releases\/tag)/.test(vt(t)),pt=mt,gt=(t=location)=>Q(t)||H(t)||G(t)||J(t),ft=(t=location)=>t.pathname.startsWith("/marketplace/actions/"),ht=ft,bt=()=>document.querySelector('meta[name="user-login"]').getAttribute("content"),wt=(t=location)=>t.pathname.replace(/^\/|\/$/g,""),vt=(t=location)=>{if(tt(t))return wt(t).split("/").slice(2).join("/")},$t=t=>{if(!t){const e=document.querySelector('[property="og:url"]');t=e?new URL(e.content,location.origin):location}return t.pathname.slice(1).split("/",2).join("/")},yt={getUsername:bt,getCleanPathname:wt,getRepoPath:vt,getRepoURL:$t};var Rt=Object.freeze({__proto__:null,canUserEditOrganization:()=>D()&&q('.pagehead-tabs-item[href$="/settings/profile"]'),canUserEditRepo:()=>tt()&&q('.reponav-item[href$="/settings"], [data-tab-item="settings-tab"]'),hasCode:(t=location)=>gt(t)||lt(t)||ut(t)||A(t)||N(t)||F(t),hasComments:gt,hasRichTextEditor:(t=location)=>gt(t)||I(t)||N(t),is404:()=>"Page not found · GitHub"===document.title,is500:()=>"Server Error · GitHub"===document.title||"Unicorn! · GitHub"===document.title||"504 Gateway Time-out"===document.title,isActionJobRun:(t=location)=>String(vt(t)).startsWith("runs/"),isActionPage:ht,isActions:ft,isBlame:F,isBranches:(t=location)=>String(vt(t)).startsWith("branches"),isCommit:G,isCommitList:(t=location)=>M(t)||Y(t),isCompare:N,isConversation:(t=location)=>H(t)||X(t),isConversationList:(t=location)=>B(t)||nt(t),isDashboard:z,isEditingFile:(t=location)=>String(vt(t)).startsWith("edit"),isEditingRelease:(t=location)=>String(vt(t)).startsWith("releases/edit"),isEmptyRepo:()=>q('[aria-label="Cannot fork because repository is empty."]'),isEmptyRepoRoot:()=>ot()&&!q('link[rel="canonical"]'),isEnterprise:(t=location)=>"github.com"!==t.hostname&&"gist.github.com"!==t.hostname,isFileFinder:(t=location)=>String(vt(t)).startsWith("find/"),isForkedRepo:()=>q('meta[name="octolytics-dimension-repository_is_fork"][content="true"]'),isGist:A,isGlobalConversationList:B,isGlobalSearchResults:(t=location)=>"/search"===t.pathname&&null!==new URLSearchParams(t.search).get("q"),isIssue:H,isLabelList:(t=location)=>"labels"===vt(t),isMilestone:(t=location)=>/^milestone\/\d+/.test(vt(t)),isMilestoneList:(t=location)=>"milestones"===vt(t),isNewIssue:I,isNewRelease:(t=location)=>"releases/new"===vt(t),isNewRepo:(t=location)=>"/new"===t.pathname,isNotifications:(t=location)=>"notifications"===wt(t),isOrganizationDiscussion:J,isOrganizationProfile:D,isOwnOrganizationProfile:()=>D()&&!q('[href*="contact/report-abuse?report="]'),isOwnUserProfile:()=>wt()===bt(),isPR:Q,isPRCommit:V,isPRCommit404:()=>V()&&document.title.startsWith("Commit range not found · Pull Request"),isPRCommitList:Y,isPRConflicts:K,isPRConversation:X,isPRFile404:()=>Z()&&document.title.startsWith("Commit range not found · Pull Request"),isPRFiles:Z,isPRList:(t=location)=>"/pulls"===t.pathname||"pulls"===vt(t),isProject:(t=location)=>/^projects\/\d+/.test(vt(t)),isQuickPR:(t=location)=>N(t)&&/[?&]quick_pull=1(&|$)/.test(t.search),isReleasesOrTags:(t=location)=>/^tags$|^releases($|\/tag)/.test(vt(t)),isRepo:tt,isRepoCommitList:M,isRepoConversationList:nt,isRepoHome:ot,isRepoIssueList:it,isRepoMainSettings:(t=location)=>"settings"===vt(t),isRepoPRList:st,isRepoRoot:at,isRepoSearch:rt,isRepoSettings:(t=location)=>String(vt(t)).startsWith("settings"),isRepoTaxonomyConversationList:et,isRepoTree:lt,isSingleCommit:ct,isSingleFile:ut,isSingleGist:(t=location)=>A(t)&&/^\/(gist\/)?[^/]+\/[\da-f]{32}$/.test(t.pathname),isSingleTag:mt,isSingleTagPage:pt,isTrending:(t=location)=>"/trending"===t.pathname||t.pathname.startsWith("/trending/"),isUserProfile:dt,isUserProfileFollowersTab:()=>dt()&&"followers"===new URLSearchParams(location.search).get("tab"),isUserProfileFollowingTab:()=>dt()&&"following"===new URLSearchParams(location.search).get("tab"),isUserProfileMainTab:()=>q('[aria-label="User profile"] > .selected:first-child'),isUserProfileRepoTab:()=>dt()&&"repositories"===new URLSearchParams(location.search).get("tab"),isUserProfileStarsTab:()=>dt()&&"stars"===new URLSearchParams(location.search).get("tab"),utils:yt});function _t(t,e,n){const s=t.slice();return s[4]=e[n].name,s[5]=e[n].detect,s[6]=e[n].result,s}function St(e){let n;return{c(){n=u("p"),n.textContent="URL entered isn’t valid"},m(t,e){l(t,n,e)},p:t,d(t){t&&c(n)}}}function Pt(t){let e,n,s=[],i=new Map,o=t[2];const a=t=>t[4];for(let e=0;e<o.length;e+=1){let n=_t(t,o,e),r=a(n);i.set(r,s[e]=xt(r,n))}return{c(){e=u("pre"),n=u("code");for(let t=0;t<s.length;t+=1)s[t].c()},m(t,i){l(t,e,i),r(e,n);for(let t=0;t<s.length;t+=1)s[t].m(n,null)},p(t,e){if(4&e){const o=t[2];s=function(t,e,n,s,i,o,a,r,l,c,u,d){let m=t.length,p=o.length,g=m;const f={};for(;g--;)f[t[g].key]=g;const h=[],b=new Map,w=new Map;for(g=p;g--;){const t=d(i,o,g),r=n(t);let l=a.get(r);l?s&&l.p(t,e):(l=c(r,t),l.c()),b.set(r,h[g]=l),r in f&&w.set(r,Math.abs(g-f[r]))}const v=new Set,$=new Set;function y(t){W(t,1),t.m(r,u),a.set(t.key,t),u=t.first,p--}for(;m&&p;){const e=h[p-1],n=t[m-1],s=e.key,i=n.key;e===n?(u=e.first,m--,p--):b.has(i)?!a.has(s)||v.has(s)?y(e):$.has(i)?m--:w.get(s)>w.get(i)?($.add(s),y(e)):(v.add(i),m--):(l(n,a),m--)}for(;m--;){const e=t[m];b.has(e.key)||l(e,a)}for(;p;)y(h[p-1]);return h}(s,e,a,1,t,o,i,n,E,xt,null,_t)}},d(t){t&&c(e);for(let t=0;t<s.length;t+=1)s[t].d()}}}function kt(t){let e,n,s,i=t[4]+"";return{c(){e=u("div"),n=d(i),s=d("() // undeterminable via URL"),g(e,"class","undefined svelte-1mf70v2")},m(t,i){l(t,e,i),r(e,n),r(e,s)},p(t,e){4&e&&i!==(i=t[4]+"")&&f(n,i)},d(t){t&&c(e)}}}function Lt(t){let e,n,s,i,o,m,p=t[4]+"",h=String(t[6])+"";return{c(){e=u("div"),n=d(p),s=d("(url) // "),i=u("span"),o=d(h),g(i,"class","svelte-1mf70v2"),g(e,"class",m=a(String(t[6]))+" svelte-1mf70v2")},m(t,a){l(t,e,a),r(e,n),r(e,s),r(e,i),r(i,o)},p(t,s){4&s&&p!==(p=t[4]+"")&&f(n,p),4&s&&h!==(h=String(t[6])+"")&&f(o,h),4&s&&m!==(m=a(String(t[6]))+" svelte-1mf70v2")&&g(e,"class",m)},d(t){t&&c(e)}}}function xt(t,e){let n,s;function i(t,e){return t[5]?Lt:kt}let o=i(e),a=o(e);return{key:t,first:null,c(){n=p(),a.c(),s=p(),this.first=n},m(t,e){l(t,n,e),a.m(t,e),l(t,s,e)},p(t,e){o===(o=i(t))&&a?a.p(t,e):(a.d(1),a=o(t),a&&(a.c(),a.m(s.parentNode,s)))},d(t){t&&c(n),a.d(t),t&&c(s)}}}function Ct(e){let n,s,i,o,a,d,f,b,w,v,$,y,R,_,S;function P(t,e){return t[1]?Pt:St}let k=P(e),L=k(e);return{c(){n=u("label"),s=u("span"),s.textContent="URL:",i=m(),o=u("input"),a=m(),d=u("datalist"),f=u("option"),b=u("option"),w=u("option"),v=u("option"),$=u("option"),y=m(),L.c(),R=p(),g(o,"type","text"),g(o,"placeholder",Ut),g(o,"autocomplete","off"),g(o,"autocorrect","off"),g(o,"list","url-examples"),g(o,"class","svelte-1mf70v2"),f.__value="https://github.big-corp.com/gist/",f.value=f.__value,b.__value="https://github.com/marketplace/actions/urlchecker-action",b.value=b.__value,w.__value="https://github.com/sindresorhus/refined-github/pull/148",w.value=w.__value,v.__value="https://github.com/sindresorhus/refined-github/edit/master/readme.md",v.value=v.__value,$.__value="https://github.com/sindresorhus/refined-github/commit/5b614b9035f2035b839f48b4db7bd5c3298d526f",$.value=$.__value,g(d,"id","url-examples")},m(t,c){var u,m,p,g;l(t,n,c),r(n,s),r(n,i),r(n,o),h(o,e[0]),l(t,a,c),l(t,d,c),r(d,f),r(d,b),r(d,w),r(d,v),r(d,$),l(t,y,c),L.m(t,c),l(t,R,c),_||(u=o,m="input",p=e[3],u.addEventListener(m,p,g),S=()=>u.removeEventListener(m,p,g),_=!0)},p(t,[e]){1&e&&o.value!==t[0]&&h(o,t[0]),k===(k=P(t))&&L?L.p(t,e):(L.d(1),L=k(t),L&&(L.c(),L.m(R.parentNode,R)))},i:t,o:t,d(t){t&&c(n),t&&c(a),t&&c(d),t&&c(y),L.d(t),t&&c(R),_=!1,S()}}}const Ut="https://github.com/fregante/github-url-detection";function Wt(t,e,n){let s,{url:i=""}=e,o=[];return t.$$set=t=>{"url"in t&&n(0,i=t.url)},t.$$.update=()=>{if(1&t.$$.dirty)try{new URL(i||Ut),n(1,s=!0)}catch(t){n(1,s=!1)}3&t.$$.dirty&&s&&n(2,o=Object.entries(Rt).map(([t,e])=>{if("function"==typeof e)return String(e).startsWith("(url")?{name:t,detect:e,result:e(new URL(i||Ut))}:{name:t}}).filter(Boolean).sort((t,e)=>t.result||e.result?t.result?e.result?0:-1:1:t.detect||e.detect?t.detect?e.detect?0:1:-1:void 0))},[i,s,o,function(){i=this.value,n(0,i)}]}return new class extends class{$destroy(){!function(t,e){const n=t.$$;null!==n.fragment&&(s(n.on_destroy),n.fragment&&n.fragment.d(e),n.on_destroy=n.fragment=null,n.ctx=[])}(this,1),this.$destroy=t}$on(t,e){const n=this.$$.callbacks[t]||(this.$$.callbacks[t]=[]);return n.push(e),()=>{const t=n.indexOf(e);-1!==t&&n.splice(t,1)}}$set(t){var e;this.$$set&&(e=t,0!==Object.keys(e).length)&&(this.$$.skip_bound=!0,this.$$set(t),this.$$.skip_bound=!1)}}{constructor(t){super(),T(this,t,Wt,Ct,o,{url:0})}}({target:document.querySelector("main")})}();
//# sourceMappingURL=bundle.js.map
