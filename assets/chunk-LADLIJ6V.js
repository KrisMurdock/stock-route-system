import {
  a as r,
  b as o,
  c as n,
  d as a,
  e as u,
  g as d,
  k as l,
  x as s,
  y as G
} from "./chunk-LEOT2I4D.js";

// node_modules/@mermaid-js/parser/dist/chunks/mermaid-parser.core/chunk-KI3K4JFJ.mjs
var e, p = (e = class extends G {
  constructor() {
    super(["gitGraph"]);
  }
}, r(e, "GitGraphTokenBuilder"), e), h = {
  parser: {
    TokenBuilder: /* @__PURE__ */ r(() => new p(), "TokenBuilder"),
    ValueConverter: /* @__PURE__ */ r(() => new s(), "ValueConverter")
  }
};
function m(c = u) {
  let t = a(
    n(c),
    d
  ), i = a(
    o({ shared: t }),
    l,
    h
  );
  return t.ServiceRegistry.register(i), { shared: t, GitGraph: i };
}
r(m, "createGitGraphServices");

export {
  h as a,
  m as b
};
