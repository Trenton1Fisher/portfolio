import{_ as o}from"./index-Ud5BleZS.js";async function i(t,a=!0){await t.addParticleUpdater("rotate",async e=>{const{RotateUpdater:r}=await o(()=>import("./RotateUpdater-VB1BaH1_.js"),__vite__mapDeps([0,1,2,3]));return new r(e)},a)}export{i as loadRotateUpdater};
function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["assets/RotateUpdater-VB1BaH1_.js","assets/index-Ud5BleZS.js","assets/index-JaM0a0oW.css","assets/ValueWithRandom-CM5KRH6z.js"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
