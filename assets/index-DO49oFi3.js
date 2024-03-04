import{_ as n}from"./index-vdAp68Cd.js";async function e(a,o=!0){const{PolygonDrawer:t}=await n(()=>import("./PolygonDrawer-QFqvecxo.js"),__vite__mapDeps([0,1,2,3]));await a.addShape("polygon",new t,o)}async function i(a,o=!0){const{TriangleDrawer:t}=await n(()=>import("./TriangleDrawer--PHclccR.js"),__vite__mapDeps([4,1,2,3]));await a.addShape("triangle",new t,o)}async function _(a,o=!0){await e(a,o),await i(a,o)}export{e as loadGenericPolygonShape,_ as loadPolygonShape,i as loadTriangleShape};
function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["assets/PolygonDrawer-QFqvecxo.js","assets/PolygonDrawerBase-BepFVDe2.js","assets/index-vdAp68Cd.js","assets/index-CtwRguwZ.css","assets/TriangleDrawer--PHclccR.js"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
