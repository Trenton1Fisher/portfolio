import{_ as e}from"./index-Ud5BleZS.js";import{O as s}from"./OptionsColor-BWxIpG6F.js";class r{constructor(){this.blink=!1,this.consent=!1,this.opacity=1}load(i){i&&(i.blink!==void 0&&(this.blink=i.blink),i.color!==void 0&&(this.color=s.create(this.color,i.color)),i.consent!==void 0&&(this.consent=i.consent),i.opacity!==void 0&&(this.opacity=i.opacity))}}class f{constructor(){this.distance=100,this.links=new r}load(i){i&&(i.distance!==void 0&&(this.distance=i.distance),this.links.load(i.links))}}async function a(n,i=!0){await n.addInteractor("externalGrab",async o=>{const{Grabber:t}=await e(()=>import("./Grabber-QKL-1Pfb.js"),__vite__mapDeps([0,1,2,3,4,5]));return new t(o)},i)}export{f as Grab,r as GrabLinks,a as loadExternalGrabInteraction};
function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["assets/Grabber-QKL-1Pfb.js","assets/CanvasUtils-CCd8iR_e.js","assets/index-Ud5BleZS.js","assets/index-JaM0a0oW.css","assets/ExternalInteractorBase-CIi3zRdK.js","assets/OptionsColor-BWxIpG6F.js"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
