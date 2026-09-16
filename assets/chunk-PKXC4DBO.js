import {
  a,
  b as d,
  c as l,
  d as o,
  e as s,
  g as n,
  v as u,
  w as i
} from "./chunk-LEOT2I4D.js";

// node_modules/@mermaid-js/parser/dist/chunks/mermaid-parser.core/chunk-ICYGCRZG.mjs
var e, m = (e = class extends i {
  runCustomConverter(r, t, C) {
    if (r.name.toUpperCase() === "LINK_LABEL")
      return t.substring(1).trim();
  }
}, a(e, "WardleyValueConverter"), e), v = {
  parser: {
    ValueConverter: /* @__PURE__ */ a(() => new m(), "ValueConverter")
  }
};
function y(c = s) {
  let r = o(
    l(c),
    n
  ), t = o(
    d({ shared: r }),
    u,
    v
  );
  return r.ServiceRegistry.register(t), { shared: r, Wardley: t };
}
a(y, "createWardleyServices");

export {
  v as a,
  y as b
};
