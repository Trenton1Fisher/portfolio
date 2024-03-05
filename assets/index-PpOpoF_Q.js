import{_ as c}from"./index-CJ1eIdVe.js";async function i(t,r=!0){await t.addInteractor("particlesAttract",async a=>{const{Attractor:o}=await c(()=>import("./Attractor-BCQUdpiX.js"),__vite__mapDeps([0,1,2,3]));return new o(a)},r)}export{i as loadParticlesAttractInteraction};
function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["assets/Attractor-BCQUdpiX.js","assets/ParticlesInteractorBase-vfDeBun3.js","assets/index-CJ1eIdVe.js","assets/index-Cdwd4ikt.css"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
