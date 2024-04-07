import{_ as n}from"./index-Ud5BleZS.js";async function e(a,o=!0){const{PolygonDrawer:t}=await n(()=>import("./PolygonDrawer-B81jJFQ3.js"),__vite__mapDeps([0,1,2,3]));await a.addShape("polygon",new t,o)}async function i(a,o=!0){const{TriangleDrawer:t}=await n(()=>import("./TriangleDrawer-bSTOgS8i.js"),__vite__mapDeps([4,1,2,3]));await a.addShape("triangle",new t,o)}async function _(a,o=!0){await e(a,o),await i(a,o)}export{e as loadGenericPolygonShape,_ as loadPolygonShape,i as loadTriangleShape};
function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["assets/PolygonDrawer-B81jJFQ3.js","assets/PolygonDrawerBase-CrVxaySo.js","assets/index-Ud5BleZS.js","assets/index-JaM0a0oW.css","assets/TriangleDrawer-bSTOgS8i.js"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
