import {
  a as n,
  b as l,
  c as u,
  d as c,
  e as v,
  g,
  s as m,
  w as h,
  y as p
} from "./chunk-LEOT2I4D.js";

// node_modules/@mermaid-js/parser/dist/chunks/mermaid-parser.core/chunk-747NJXEK.mjs
var i, C = (i = class extends p {
  constructor() {
    super(["railroad-peg-beta"]);
  }
}, n(i, "RailroadPegTokenBuilder"), i), f = /* @__PURE__ */ n((d) => {
  let e = d.slice(1, -1), r = "";
  for (let t = 0; t < e.length; t++) {
    let o = e[t];
    if (o === "\\" && t + 1 < e.length) {
      t++;
      let a = e[t];
      switch (a) {
        case "n":
          r += `
`;
          break;
        case "r":
          r += "\r";
          break;
        case "t":
          r += "	";
          break;
        default:
          r += a;
      }
      continue;
    }
    r += o;
  }
  return r;
}, "decodeEscapedString"), s, R = (s = class extends h {
  runConverter(e, r, t) {
    let o = super.runConverter(e, r, t);
    if (e.name === "TITLE" && typeof o == "string") {
      let a = o.trim();
      if (a.startsWith('"') && a.endsWith('"') || a.startsWith("'") && a.endsWith("'"))
        return f(a);
    }
    return o;
  }
  runCustomConverter(e, r, t) {
    if (e.name === "PEG_STRING")
      return f(r);
  }
}, n(s, "RailroadPegValueConverter"), s), P = {
  parser: {
    TokenBuilder: /* @__PURE__ */ n(() => new C(), "TokenBuilder"),
    ValueConverter: /* @__PURE__ */ n(() => new R(), "ValueConverter")
  }
};
function S(d = v) {
  let e = c(
    u(d),
    g
  ), r = c(
    l({ shared: e }),
    m,
    P
  );
  return e.ServiceRegistry.register(r), { shared: e, RailroadPeg: r };
}
n(S, "createRailroadPegServices");

export {
  P as a,
  S as b
};
