import{_ as o}from"./index-C7wVQiJ9.js";async function i(t,a=!0){await t.addParticleUpdater("outModes",async e=>{const{OutOfCanvasUpdater:r}=await o(()=>import("./OutOfCanvasUpdater-BEKjdUMC.js"),__vite__mapDeps([0,1,2]));return new r(e)},a)}export{i as loadOutModesUpdater};
function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["assets/OutOfCanvasUpdater-BEKjdUMC.js","assets/index-C7wVQiJ9.js","assets/index-CKBs8Vn2.css"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
