import{_ as i}from"./index-Bg7_OV3r.js";async function d(t,a=!0){await t.addParticleUpdater("life",async e=>{const{LifeUpdater:r}=await i(()=>import("./LifeUpdater-VslRlj-7.js"),__vite__mapDeps([0,1,2,3]));return new r(e)},a)}export{d as loadLifeUpdater};
function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["assets/LifeUpdater-VslRlj-7.js","assets/ValueWithRandom-Bw32C-4I.js","assets/index-Bg7_OV3r.js","assets/index-B0zwi6lM.css"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
