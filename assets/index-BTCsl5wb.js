import{_ as n}from"./index-NyTlFOxl.js";async function e(a,o=!0){const{PolygonDrawer:t}=await n(()=>import("./PolygonDrawer-CDM36dZ9.js"),__vite__mapDeps([0,1,2,3]));await a.addShape("polygon",new t,o)}async function i(a,o=!0){const{TriangleDrawer:t}=await n(()=>import("./TriangleDrawer-CI_9hnx5.js"),__vite__mapDeps([4,1,2,3]));await a.addShape("triangle",new t,o)}async function _(a,o=!0){await e(a,o),await i(a,o)}export{e as loadGenericPolygonShape,_ as loadPolygonShape,i as loadTriangleShape};
function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["assets/PolygonDrawer-CDM36dZ9.js","assets/PolygonDrawerBase-B8U5jCPG.js","assets/index-NyTlFOxl.js","assets/index-BSN4EQU3.css","assets/TriangleDrawer-CI_9hnx5.js"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
