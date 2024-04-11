import{_ as c}from"./index-C7wVQiJ9.js";async function i(t,r=!0){await t.addInteractor("particlesAttract",async a=>{const{Attractor:o}=await c(()=>import("./Attractor-DLH8YlYW.js"),__vite__mapDeps([0,1,2,3]));return new o(a)},r)}export{i as loadParticlesAttractInteraction};
function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["assets/Attractor-DLH8YlYW.js","assets/ParticlesInteractorBase-vfDeBun3.js","assets/index-C7wVQiJ9.js","assets/index-CKBs8Vn2.css"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
