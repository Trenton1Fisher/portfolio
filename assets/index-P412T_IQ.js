import{_ as e}from"./index-C7wVQiJ9.js";class a{constructor(){this.factor=3,this.radius=200}load(r){r&&(r.factor!==void 0&&(this.factor=r.factor),r.radius!==void 0&&(this.radius=r.radius))}}async function s(t,r=!0){await t.addInteractor("externalSlow",async o=>{const{Slower:i}=await e(()=>import("./Slower-3GDoJ7hn.js"),__vite__mapDeps([0,1,2,3]));return new i(o)},r)}export{a as Slow,s as loadExternalSlowInteraction};
function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["assets/Slower-3GDoJ7hn.js","assets/ExternalInteractorBase-CIi3zRdK.js","assets/index-C7wVQiJ9.js","assets/index-CKBs8Vn2.css"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
