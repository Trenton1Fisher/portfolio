import{_ as o}from"./index-CJ1eIdVe.js";async function i(t,a=!0){await t.addParticleUpdater("outModes",async e=>{const{OutOfCanvasUpdater:r}=await o(()=>import("./OutOfCanvasUpdater-DxmsGPuy.js"),__vite__mapDeps([0,1,2]));return new r(e)},a)}export{i as loadOutModesUpdater};
function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["assets/OutOfCanvasUpdater-DxmsGPuy.js","assets/index-CJ1eIdVe.js","assets/index-Cdwd4ikt.css"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
