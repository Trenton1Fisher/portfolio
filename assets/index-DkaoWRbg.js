import{_ as o}from"./index-vdAp68Cd.js";async function i(t,a=!0){await t.addParticleUpdater("outModes",async e=>{const{OutOfCanvasUpdater:r}=await o(()=>import("./OutOfCanvasUpdater-d6iWhAt0.js"),__vite__mapDeps([0,1,2]));return new r(e)},a)}export{i as loadOutModesUpdater};
function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["assets/OutOfCanvasUpdater-d6iWhAt0.js","assets/index-vdAp68Cd.js","assets/index-CtwRguwZ.css"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
