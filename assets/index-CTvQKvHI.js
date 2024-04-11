import{_ as o}from"./index-C7wVQiJ9.js";async function i(t,a=!0){await t.addParticleUpdater("rotate",async e=>{const{RotateUpdater:r}=await o(()=>import("./RotateUpdater-DCvLPxEk.js"),__vite__mapDeps([0,1,2,3]));return new r(e)},a)}export{i as loadRotateUpdater};
function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["assets/RotateUpdater-DCvLPxEk.js","assets/index-C7wVQiJ9.js","assets/index-CKBs8Vn2.css","assets/ValueWithRandom-C2ApCbZc.js"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
