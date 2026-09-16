import {
  a as c
} from "./chunk-6FYLUYLA.js";
import {
  f as h,
  g as u,
  h as y,
  i as w
} from "./chunk-2HVFJUR6.js";
import {
  b as f
} from "./chunk-BD4YR2YY.js";
import {
  a as g
} from "./chunk-23IJJFHQ.js";
import {
  e as m
} from "./chunk-UC32KGOS.js";
import {
  N as p,
  u as l
} from "./chunk-Z5S2XYPB.js";
import {
  b as i
} from "./chunk-AHMAKIEG.js";
import {
  a as o
} from "./chunk-7WL7HUKP.js";

// node_modules/mermaid/dist/chunks/mermaid.core/chunk-TLUHSLCS.mjs
var I = {
  common: p,
  getConfig: l,
  insertCluster: c,
  insertEdge: y,
  insertEdgeLabel: h,
  insertMarkers: w,
  insertNode: f,
  interpolateToCurve: m,
  labelHelper: g,
  log: i,
  positionEdgeLabel: u
}, a = {}, L = /* @__PURE__ */ o((t) => {
  for (let r of t)
    a[r.name] = r;
}, "registerLayoutLoaders"), E = /* @__PURE__ */ o(() => {
  L([
    {
      name: "dagre",
      loader: /* @__PURE__ */ o(async () => await import("./dagre-GXQ25YYZ-OETBEEKI.js"), "loader")
    },
    {
      name: "swimlane",
      loader: /* @__PURE__ */ o(async () => await import("./swimlanes-42K2YHIH-Z66JXFQ6.js"), "loader")
    },
    {
      name: "cose-bilkent",
      loader: /* @__PURE__ */ o(async () => await import("./cose-bilkent-JH36ORCC-HPL3KRNZ.js"), "loader")
    }
  ]);
}, "registerDefaultLayoutLoaders");
E();
var G = /* @__PURE__ */ o(async (t, r) => {
  if (!(t.layoutAlgorithm in a))
    throw new Error(`Unknown layout algorithm: ${t.layoutAlgorithm}`);
  if (t.diagramId)
    for (let e of t.nodes) {
      let A = e.domId || e.id;
      e.domId = `${t.diagramId}-${A}`;
    }
  let n = a[t.layoutAlgorithm], F = await n.loader(), { theme: d, themeVariables: $ } = t.config, { useGradient: D, gradientStart: v, gradientStop: x } = $, s = r.attr("id");
  if (r.append("defs").append("filter").attr("id", `${s}-drop-shadow`).attr("height", "130%").attr("width", "130%").append("feDropShadow").attr("dx", "4").attr("dy", "4").attr("stdDeviation", 0).attr("flood-opacity", "0.06").attr("flood-color", `${d?.includes("dark") ? "#FFFFFF" : "#000000"}`), r.append("defs").append("filter").attr("id", `${s}-drop-shadow-small`).attr("height", "150%").attr("width", "150%").append("feDropShadow").attr("dx", "2").attr("dy", "2").attr("stdDeviation", 0).attr("flood-opacity", "0.06").attr("flood-color", `${d?.includes("dark") ? "#FFFFFF" : "#000000"}`), D) {
    let e = r.append("linearGradient").attr("id", r.attr("id") + "-gradient").attr("gradientUnits", "objectBoundingBox").attr("x1", "0%").attr("y1", "0%").attr("x2", "100%").attr("y2", "0%");
    e.append("svg:stop").attr("offset", "0%").attr("stop-color", v).attr("stop-opacity", 1), e.append("svg:stop").attr("offset", "100%").attr("stop-color", x).attr("stop-opacity", 1);
  }
  return F.render(t, r, I, {
    algorithm: n.algorithm
  });
}, "render"), H = /* @__PURE__ */ o((t = "", { fallback: r = "dagre" } = {}) => {
  if (t in a)
    return t;
  if (r in a)
    return i.warn(`Layout algorithm ${t} is not registered. Using ${r} as fallback.`), r;
  throw new Error(`Both layout algorithms ${t} and ${r} are not registered.`);
}, "getRegisteredLayoutAlgorithm");

export {
  L as a,
  G as b,
  H as c
};
