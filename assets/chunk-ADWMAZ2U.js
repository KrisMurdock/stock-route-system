import {
  a,
  b as m,
  c,
  d,
  e as p,
  g as T,
  t as f,
  w as u,
  y as v
} from "./chunk-LEOT2I4D.js";

// node_modules/@mermaid-js/parser/dist/chunks/mermaid-parser.core/chunk-6K3QC6MW.mjs
var i, h = (i = class extends v {
  constructor() {
    super(["treemap"]);
  }
}, a(i, "TreemapTokenBuilder"), i), C = /classDef\s+([A-Z_a-z]\w+)(?:\s+([^\n\r;]*))?;?/, n, V = (n = class extends u {
  runCustomConverter(r, e, o) {
    if (r.name === "NUMBER2")
      return parseFloat(e.replace(/,/g, ""));
    if (r.name === "SEPARATOR")
      return e.substring(1, e.length - 1);
    if (r.name === "STRING2")
      return e.substring(1, e.length - 1);
    if (r.name === "INDENTATION")
      return e.length;
    if (r.name === "ClassDef") {
      if (typeof e != "string")
        return e;
      let t = C.exec(e);
      if (t)
        return {
          $type: "ClassDefStatement",
          className: t[1],
          styleText: t[2] || void 0
        };
    }
  }
}, a(n, "TreemapValueConverter"), n);
function g(l) {
  let r = l.validation.TreemapValidator, e = l.validation.ValidationRegistry;
  if (e) {
    let o = {
      Treemap: r.checkSingleRoot.bind(r)
      // Remove unused validation for TreemapRow
    };
    e.register(o, r);
  }
}
a(g, "registerValidationChecks");
var s, M = (s = class {
  /**
   * Validates that a treemap has only one root node.
   * A root node is defined as a node that has no indentation.
   */
  checkSingleRoot(r, e) {
    let o;
    for (let t of r.TreemapRows)
      t.item && (o === void 0 && // Check if this is a root node (no indentation)
      t.indent === void 0 ? o = 0 : t.indent === void 0 ? e("error", "Multiple root nodes are not allowed in a treemap.", {
        node: t,
        property: "item"
      }) : o !== void 0 && o >= parseInt(t.indent, 10) && e("error", "Multiple root nodes are not allowed in a treemap.", {
        node: t,
        property: "item"
      }));
  }
}, a(s, "TreemapValidator"), s), S = {
  parser: {
    TokenBuilder: /* @__PURE__ */ a(() => new h(), "TokenBuilder"),
    ValueConverter: /* @__PURE__ */ a(() => new V(), "ValueConverter")
  },
  validation: {
    TreemapValidator: /* @__PURE__ */ a(() => new M(), "TreemapValidator")
  }
};
function k(l = p) {
  let r = d(
    c(l),
    T
  ), e = d(
    m({ shared: r }),
    f,
    S
  );
  return r.ServiceRegistry.register(e), g(e), { shared: r, Treemap: e };
}
a(k, "createTreemapServices");

export {
  S as a,
  k as b
};
