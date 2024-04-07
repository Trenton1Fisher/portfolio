import{_ as i}from"./index-Ud5BleZS.js";async function d(t,a=!0){await t.addParticleUpdater("life",async e=>{const{LifeUpdater:r}=await i(()=>import("./LifeUpdater-Bf_OUR7v.js"),__vite__mapDeps([0,1,2,3]));return new r(e)},a)}export{d as loadLifeUpdater};
function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["assets/LifeUpdater-Bf_OUR7v.js","assets/ValueWithRandom-CM5KRH6z.js","assets/index-Ud5BleZS.js","assets/index-JaM0a0oW.css"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
