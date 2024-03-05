import{_ as a}from"./index-CJ1eIdVe.js";const i=["emoji"];async function r(e,o=!0){const{EmojiDrawer:t}=await a(()=>import("./EmojiDrawer-NeINcc6d.js"),__vite__mapDeps([0,1,2]));await e.addShape(i,new t,o)}const n=Object.freeze(Object.defineProperty({__proto__:null,loadEmojiShape:r},Symbol.toStringTag,{value:"Module"}));export{n as i,i as v};
function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["assets/EmojiDrawer-NeINcc6d.js","assets/index-CJ1eIdVe.js","assets/index-Cdwd4ikt.css"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
