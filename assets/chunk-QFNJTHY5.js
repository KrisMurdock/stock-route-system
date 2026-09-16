import {
  a as r,
  b as o,
  c as n,
  d as t,
  e as i,
  g as u,
  o as l,
  x as s,
  y as c
} from "./chunk-LEOT2I4D.js";

// node_modules/@mermaid-js/parser/dist/chunks/mermaid-parser.core/chunk-I5DQTOEV.mjs
var e, v = (e = class extends c {
  constructor() {
    super(["radar-beta"]);
  }
}, r(e, "RadarTokenBuilder"), e), R = {
  parser: {
    TokenBuilder: /* @__PURE__ */ r(() => new v(), "TokenBuilder"),
    ValueConverter: /* @__PURE__ */ r(() => new s(), "ValueConverter")
  }
};
function M(m = i) {
  let a = t(
    n(m),
    u
  ), d = t(
    o({ shared: a }),
    l,
    R
  );
  return a.ServiceRegistry.register(d), { shared: a, Radar: d };
}
r(M, "createRadarServices");

export {
  R as a,
  M as b
};
