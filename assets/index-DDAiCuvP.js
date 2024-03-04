import{_ as i}from"./index-vdAp68Cd.js";async function d(t,a=!0){await t.addParticleUpdater("life",async e=>{const{LifeUpdater:r}=await i(()=>import("./LifeUpdater-Dk5M1Wwu.js"),__vite__mapDeps([0,1,2,3]));return new r(e)},a)}export{d as loadLifeUpdater};
function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["assets/LifeUpdater-Dk5M1Wwu.js","assets/ValueWithRandom-BZte-6As.js","assets/index-vdAp68Cd.js","assets/index-CtwRguwZ.css"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
