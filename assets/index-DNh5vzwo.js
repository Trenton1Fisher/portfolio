import{_ as i}from"./index-CJ1eIdVe.js";async function d(t,a=!0){await t.addParticleUpdater("life",async e=>{const{LifeUpdater:r}=await i(()=>import("./LifeUpdater-BfA0HC-L.js"),__vite__mapDeps([0,1,2,3]));return new r(e)},a)}export{d as loadLifeUpdater};
function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["assets/LifeUpdater-BfA0HC-L.js","assets/ValueWithRandom-CBoe8t7D.js","assets/index-CJ1eIdVe.js","assets/index-Cdwd4ikt.css"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
