import {
  a as e,
  b as n,
  c as s,
  d as o,
  e as u,
  g as d,
  n as l,
  w as c,
  y as m
} from "./chunk-LEOT2I4D.js";

// node_modules/@mermaid-js/parser/dist/chunks/mermaid-parser.core/chunk-3Z5EZCMW.mjs
var r, C = (r = class extends m {
  constructor() {
    super(["pie", "showData"]);
  }
}, e(r, "PieTokenBuilder"), r), t, P = (t = class extends c {
  runCustomConverter(a, i, S) {
    if (a.name === "PIE_SECTION_LABEL")
      return i.replace(/"/g, "").trim();
  }
}, e(t, "PieValueConverter"), t), p = {
  parser: {
    TokenBuilder: /* @__PURE__ */ e(() => new C(), "TokenBuilder"),
    ValueConverter: /* @__PURE__ */ e(() => new P(), "ValueConverter")
  }
};
function M(v = u) {
  let a = o(
    s(v),
    d
  ), i = o(
    n({ shared: a }),
    l,
    p
  );
  return a.ServiceRegistry.register(i), { shared: a, Pie: i };
}
e(M, "createPieServices");

export {
  p as a,
  M as b
};
