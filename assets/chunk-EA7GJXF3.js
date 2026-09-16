import {
  a as r,
  b as a,
  c as o,
  d as t,
  e as u,
  g as d,
  i as l,
  x as s,
  y as c
} from "./chunk-LEOT2I4D.js";

// node_modules/@mermaid-js/parser/dist/chunks/mermaid-parser.core/chunk-6TQVIW2G.mjs
var e, f = (e = class extends c {
  constructor() {
    super(["cynefin-beta"]);
  }
}, r(e, "CynefinTokenBuilder"), e), m = {
  parser: {
    TokenBuilder: /* @__PURE__ */ r(() => new f(), "TokenBuilder"),
    ValueConverter: /* @__PURE__ */ r(() => new s(), "ValueConverter")
  }
};
function y(C = u) {
  let n = t(
    o(C),
    d
  ), i = t(
    a({ shared: n }),
    l,
    m
  );
  return n.ServiceRegistry.register(i), { shared: n, Cynefin: i };
}
r(y, "createCynefinServices");

export {
  m as a,
  y as b
};
