import{_ as e}from"./index-C7wVQiJ9.js";async function i(r,o=!0){await r.addParticleUpdater("color",async t=>{const{ColorUpdater:a}=await e(()=>import("./ColorUpdater-C3ev31_g.js"),__vite__mapDeps([0,1,2]));return new a(t)},o)}export{i as loadColorUpdater};
function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["assets/ColorUpdater-C3ev31_g.js","assets/index-C7wVQiJ9.js","assets/index-CKBs8Vn2.css"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
