import{_ as c}from"./index-Bg7_OV3r.js";async function i(t,r=!0){await t.addInteractor("particlesAttract",async a=>{const{Attractor:o}=await c(()=>import("./Attractor-rVHJfh86.js"),__vite__mapDeps([0,1,2,3]));return new o(a)},r)}export{i as loadParticlesAttractInteraction};
function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["assets/Attractor-rVHJfh86.js","assets/ParticlesInteractorBase-vfDeBun3.js","assets/index-Bg7_OV3r.js","assets/index-B0zwi6lM.css"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
