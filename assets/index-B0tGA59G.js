import{_ as e}from"./index-Bg7_OV3r.js";async function i(r,o=!0){await r.addParticleUpdater("color",async t=>{const{ColorUpdater:a}=await e(()=>import("./ColorUpdater-B4CZ5KoI.js"),__vite__mapDeps([0,1,2]));return new a(t)},o)}export{i as loadColorUpdater};
function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["assets/ColorUpdater-B4CZ5KoI.js","assets/index-Bg7_OV3r.js","assets/index-B0zwi6lM.css"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}