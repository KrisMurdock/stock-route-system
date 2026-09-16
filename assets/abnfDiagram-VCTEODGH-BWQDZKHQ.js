import {
  a,
  b as u,
  c as f
} from "./chunk-4WLQO47V.js";
import {
  a as m
} from "./chunk-KDWB2RJI.js";
import {
  b as p
} from "./chunk-WEPZTDG2.js";
import "./chunk-EA7GJXF3.js";
import "./chunk-PLQJF6WY.js";
import "./chunk-QFNJTHY5.js";
import "./chunk-WRU3WCYK.js";
import "./chunk-IBT763U7.js";
import {
  b as l
} from "./chunk-MM46C4FV.js";
import "./chunk-WPNKOEPK.js";
import "./chunk-ADWMAZ2U.js";
import "./chunk-PKXC4DBO.js";
import "./chunk-6QOQDNJX.js";
import "./chunk-OW66NAWK.js";
import "./chunk-AL5LACLF.js";
import "./chunk-5U2Z2YPR.js";
import "./chunk-O2D2KFIJ.js";
import "./chunk-LADLIJ6V.js";
import "./chunk-LEOT2I4D.js";
import "./chunk-4LL73RNV.js";
import "./chunk-Z5S2XYPB.js";
import {
  b as s
} from "./chunk-AHMAKIEG.js";
import {
  a as t
} from "./chunk-7WL7HUKP.js";
import "./chunk-EJMXA7KY.js";

// node_modules/mermaid/dist/chunks/mermaid.core/abnfDiagram-VCTEODGH.mjs
var v = l().RailroadAbnf.parser.LangiumParser, i = /* @__PURE__ */ t((e) => {
  let r = e.alternatives.map(g);
  return r.length === 1 ? r[0] : {
    type: "choice",
    alternatives: r
  };
}, "transformAlternation"), g = /* @__PURE__ */ t((e) => {
  let r = e.elements.map(y);
  return r.length === 1 ? r[0] : {
    type: "sequence",
    elements: r
  };
}, "transformConcatenation"), b = /* @__PURE__ */ t((e) => {
  if (e.includes("*")) {
    let [n, o] = e.split("*"), c = n ? parseInt(n, 10) : 0, d = o ? parseInt(o, 10) : 1 / 0;
    return { min: c, max: d };
  }
  let r = parseInt(e, 10);
  return { min: r, max: r };
}, "parseRepeat"), y = /* @__PURE__ */ t((e) => {
  let r = A(e.primary);
  if (!e.repeat)
    return r;
  let { min: n, max: o } = b(e.repeat);
  return n === 0 && o === 1 ? { type: "optional", element: r } : {
    type: "repetition",
    element: r,
    min: n,
    max: o
  };
}, "transformElement"), A = /* @__PURE__ */ t((e) => {
  switch (e.$type) {
    case "AbnfStringLiteral":
      return {
        type: "terminal",
        value: e.value
      };
    case "AbnfNumVal":
      return {
        type: "terminal",
        value: e.value
      };
    case "AbnfRuleName":
      return {
        type: "nonterminal",
        name: e.name
      };
    case "AbnfGroup":
      return i(e.element);
    case "AbnfOptionalGroup":
      return {
        type: "optional",
        element: i(e.element)
      };
    default:
      throw new Error(`Unsupported ABNF primary node: ${e.$type}`);
  }
}, "transformPrimary"), P = /* @__PURE__ */ t((e) => ({
  name: e.name,
  definition: i(e.definition)
}), "transformRule"), h = /* @__PURE__ */ t((e) => {
  m(e, a), e.title && a.setTitle(e.title), e.rules.map((r) => a.addRule(P(r)));
}, "populateDb"), R = {
  parse: /* @__PURE__ */ t((e) => {
    a.clear(), s.debug("[ABNF Parser] Starting Langium parse");
    let r = v.parse(e);
    if (r.lexerErrors.length > 0 || r.parserErrors.length > 0)
      throw new p(r);
    let n = r.value;
    s.debug("[ABNF Parser] Parsed rules:", n.rules.length), h(n), s.debug("[ABNF Parser] Parse complete");
  }, "parse"),
  parser: {
    yy: a
  }
}, I = {
  parser: R,
  db: a,
  renderer: f,
  styles: u
};
export {
  I as diagram
};
