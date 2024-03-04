import{_ as o}from"./index-vdAp68Cd.js";async function i(t,a=!0){await t.addParticleUpdater("rotate",async e=>{const{RotateUpdater:r}=await o(()=>import("./RotateUpdater-Fc5fdgeR.js"),__vite__mapDeps([0,1,2,3]));return new r(e)},a)}export{i as loadRotateUpdater};
function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["assets/RotateUpdater-Fc5fdgeR.js","assets/index-vdAp68Cd.js","assets/index-CtwRguwZ.css","assets/ValueWithRandom-BZte-6As.js"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
