import {
  a as r,
  b as c,
  c as n,
  d as a,
  e as i,
  g as u,
  m as d,
  x as l,
  y as s
} from "./chunk-LEOT2I4D.js";

// node_modules/@mermaid-js/parser/dist/chunks/mermaid-parser.core/chunk-UY3FDG6J.mjs
var e, m = (e = class extends s {
  constructor() {
    super(["packet"]);
  }
}, r(e, "PacketTokenBuilder"), e), v = {
  parser: {
    TokenBuilder: /* @__PURE__ */ r(() => new m(), "TokenBuilder"),
    ValueConverter: /* @__PURE__ */ r(() => new l(), "ValueConverter")
  }
};
function p(k = i) {
  let t = a(
    n(k),
    u
  ), o = a(
    c({ shared: t }),
    d,
    v
  );
  return t.ServiceRegistry.register(o), { shared: t, Packet: o };
}
r(p, "createPacketServices");

export {
  v as a,
  p as b
};
