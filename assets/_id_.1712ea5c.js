import{d as f,u as p,c as i,_ as g,a as s,b as k,e as a,F as v,r as L,f as S,o as t,t as d,g as y}from"./entry.92444fa4.js";import{_ as I}from"./Loader.edbfd79e.js";import{u as B}from"./CharacterInfoStore.4512b4d3.js";const C=f({name:"CharacterInformation",setup(){const r=p().params.id,e=B(),n=i(()=>e.characterLoadingStatus==="loading"),c=i(()=>e.characterLoadingStatus==="loaded");return e.fetchCharacter(r),{isLoading:n,isLoaded:c,charactersInfoStore:e}}});const $={class:"character-information"},b={key:0,class:"character-information__columns"},w={class:"character-information__column"},x=["src"],F={class:"character-information__column"},N={class:"character-information__list"},P={class:"character-information__text"},V={class:"character-information__title"},D={class:"character-information__description"},E={key:2};function H(o,m,r,e,n,c){const h=y,l=I;return t(),s("div",$,[k(h),o.isLoaded?(t(),s("div",b,[a("div",w,[a("img",{class:"character-information__image",src:o.charactersInfoStore.image,alt:"avatar"},null,8,x)]),a("div",F,[a("ul",N,[(t(!0),s(v,null,L(o.charactersInfoStore.characterInfo,(u,_)=>(t(),s("li",{key:_,class:"character-information__item"},[a("p",P,[a("span",V,d(_)+":",1),a("span",D,d(u),1)])]))),128))])])])):o.isLoading?(t(),S(l,{key:1})):(t(),s("h3",E," Something went wrong "))])}const z=g(C,[["render",H],["__scopeId","data-v-d2f893a5"]]);export{z as default};