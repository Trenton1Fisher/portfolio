import{_ as i}from"./index-Bg7_OV3r.js";async function p(t,a=!0){await t.addParticleUpdater("opacity",async r=>{const{OpacityUpdater:e}=await i(()=>import("./OpacityUpdater-B9nYI9ZK.js"),__vite__mapDeps([0,1,2]));return new e(r)},a)}export{p as loadOpacityUpdater};
function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["assets/OpacityUpdater-B9nYI9ZK.js","assets/index-Bg7_OV3r.js","assets/index-B0zwi6lM.css"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}