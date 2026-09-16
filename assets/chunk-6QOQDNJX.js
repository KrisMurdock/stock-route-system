import {
  a as r,
  b as a,
  c as i,
  d as n,
  e as s,
  g as u,
  l as d,
  x as l,
  y as c
} from "./chunk-LEOT2I4D.js";

// node_modules/@mermaid-js/parser/dist/chunks/mermaid-parser.core/chunk-5V3GS4D5.mjs
var e, m = (e = class extends c {
  constructor() {
    super(["info", "showInfo"]);
  }
}, r(e, "InfoTokenBuilder"), e), v = {
  parser: {
    TokenBuilder: /* @__PURE__ */ r(() => new m(), "TokenBuilder"),
    ValueConverter: /* @__PURE__ */ r(() => new l(), "ValueConverter")
  }
};
function I(f = s) {
  let o = n(
    i(f),
    u
  ), t = n(
    a({ shared: o }),
    d,
    v
  );
  return o.ServiceRegistry.register(t), { shared: o, Info: t };
}
r(I, "createInfoServices");

export {
  v as a,
  I as b
};
