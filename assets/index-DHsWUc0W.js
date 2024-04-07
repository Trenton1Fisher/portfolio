import{_ as o}from"./index-Ud5BleZS.js";async function i(t,a=!0){await t.addParticleUpdater("outModes",async e=>{const{OutOfCanvasUpdater:r}=await o(()=>import("./OutOfCanvasUpdater-Cfn1VyS7.js"),__vite__mapDeps([0,1,2]));return new r(e)},a)}export{i as loadOutModesUpdater};
function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["assets/OutOfCanvasUpdater-Cfn1VyS7.js","assets/index-Ud5BleZS.js","assets/index-JaM0a0oW.css"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
