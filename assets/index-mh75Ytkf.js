import{_ as i}from"./index-C7wVQiJ9.js";async function d(t,a=!0){await t.addParticleUpdater("life",async e=>{const{LifeUpdater:r}=await i(()=>import("./LifeUpdater-Dqdf26P4.js"),__vite__mapDeps([0,1,2,3]));return new r(e)},a)}export{d as loadLifeUpdater};
function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["assets/LifeUpdater-Dqdf26P4.js","assets/ValueWithRandom-C2ApCbZc.js","assets/index-C7wVQiJ9.js","assets/index-CKBs8Vn2.css"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
