import{_ as n}from"./index-Bg7_OV3r.js";async function e(a,o=!0){const{PolygonDrawer:t}=await n(()=>import("./PolygonDrawer-BXqn0UsI.js"),__vite__mapDeps([0,1,2,3]));await a.addShape("polygon",new t,o)}async function i(a,o=!0){const{TriangleDrawer:t}=await n(()=>import("./TriangleDrawer-CEDecdOk.js"),__vite__mapDeps([4,1,2,3]));await a.addShape("triangle",new t,o)}async function _(a,o=!0){await e(a,o),await i(a,o)}export{e as loadGenericPolygonShape,_ as loadPolygonShape,i as loadTriangleShape};
function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["assets/PolygonDrawer-BXqn0UsI.js","assets/PolygonDrawerBase-Cpspb53s.js","assets/index-Bg7_OV3r.js","assets/index-B0zwi6lM.css","assets/TriangleDrawer-CEDecdOk.js"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
