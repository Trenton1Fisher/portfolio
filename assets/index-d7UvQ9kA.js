import{_ as c}from"./index-NyTlFOxl.js";async function i(t,r=!0){await t.addInteractor("particlesAttract",async a=>{const{Attractor:o}=await c(()=>import("./Attractor-aiyTXwyt.js"),__vite__mapDeps([0,1,2,3]));return new o(a)},r)}export{i as loadParticlesAttractInteraction};
function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["assets/Attractor-aiyTXwyt.js","assets/ParticlesInteractorBase-vfDeBun3.js","assets/index-NyTlFOxl.js","assets/index-BSN4EQU3.css"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
