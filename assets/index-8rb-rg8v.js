import{_ as i}from"./index-NyTlFOxl.js";async function d(t,a=!0){await t.addParticleUpdater("life",async e=>{const{LifeUpdater:r}=await i(()=>import("./LifeUpdater-BN7J2oiR.js"),__vite__mapDeps([0,1,2,3]));return new r(e)},a)}export{d as loadLifeUpdater};
function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["assets/LifeUpdater-BN7J2oiR.js","assets/ValueWithRandom-DsLwxjfX.js","assets/index-NyTlFOxl.js","assets/index-BSN4EQU3.css"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
