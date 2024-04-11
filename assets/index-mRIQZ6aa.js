import{_ as n}from"./index-C7wVQiJ9.js";async function e(a,o=!0){const{PolygonDrawer:t}=await n(()=>import("./PolygonDrawer-BZRTZGIx.js"),__vite__mapDeps([0,1,2,3]));await a.addShape("polygon",new t,o)}async function i(a,o=!0){const{TriangleDrawer:t}=await n(()=>import("./TriangleDrawer-dP3cQ21D.js"),__vite__mapDeps([4,1,2,3]));await a.addShape("triangle",new t,o)}async function _(a,o=!0){await e(a,o),await i(a,o)}export{e as loadGenericPolygonShape,_ as loadPolygonShape,i as loadTriangleShape};
function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["assets/PolygonDrawer-BZRTZGIx.js","assets/PolygonDrawerBase-BXGaiKw1.js","assets/index-C7wVQiJ9.js","assets/index-CKBs8Vn2.css","assets/TriangleDrawer-dP3cQ21D.js"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
