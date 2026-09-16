import {
  a,
  b as m,
  c as p
} from "./chunk-4WLQO47V.js";
import {
  a as s
} from "./chunk-KDWB2RJI.js";
import {
  b as l
} from "./chunk-WEPZTDG2.js";
import "./chunk-EA7GJXF3.js";
import "./chunk-PLQJF6WY.js";
import "./chunk-QFNJTHY5.js";
import "./chunk-WRU3WCYK.js";
import "./chunk-IBT763U7.js";
import "./chunk-MM46C4FV.js";
import {
  b as i
} from "./chunk-WPNKOEPK.js";
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
  b as n
} from "./chunk-AHMAKIEG.js";
import {
  a as t
} from "./chunk-7WL7HUKP.js";
import "./chunk-EJMXA7KY.js";

// node_modules/mermaid/dist/chunks/mermaid.core/pegDiagram-XKGWAZYB.mjs
var f = i().RailroadPeg.parser.LangiumParser, c = /* @__PURE__ */ t((e) => {
  let r = e.alternatives.map(d);
  return r.length === 1 ? r[0] : {
    type: "choice",
    alternatives: r
  };
}, "transformOrderedChoice"), d = /* @__PURE__ */ t((e) => {
  let r = e.elements.map(P);
  return r.length === 1 ? r[0] : {
    type: "sequence",
    elements: r
  };
}, "transformSequence"), P = /* @__PURE__ */ t((e) => {
  let r = g(e.suffix);
  return e.operator ? {
    type: "special",
    text: e.operator === "&" ? `&${u(r)}` : `!${u(r)}`
  } : r;
}, "transformPrefix"), u = /* @__PURE__ */ t((e) => {
  switch (e.type) {
    case "terminal":
      return `"${e.value}"`;
    case "nonterminal":
      return e.name;
    case "special":
      return e.text;
    default:
      return "(...)";
  }
}, "nodeToLabel"), g = /* @__PURE__ */ t((e) => {
  let r = v(e.primary);
  if (!e.operator)
    return r;
  switch (e.operator) {
    case "?":
      return { type: "optional", element: r };
    case "*":
      return { type: "repetition", element: r, min: 0, max: 1 / 0 };
    case "+":
      return { type: "repetition", element: r, min: 1, max: 1 / 0 };
    default:
      throw new Error(`Unsupported PEG suffix operator: ${e.operator}`);
  }
}, "transformSuffix"), v = /* @__PURE__ */ t((e) => {
  switch (e.$type) {
    case "PegLiteral":
      return {
        type: "terminal",
        value: e.value
      };
    case "PegIdentifier":
      return {
        type: "nonterminal",
        name: e.name
      };
    case "PegGroup":
      return c(e.element);
    case "PegAny":
      return {
        type: "special",
        text: e.dot
      };
    default:
      throw new Error(`Unsupported PEG primary node: ${e.$type}`);
  }
}, "transformPrimary"), y = /* @__PURE__ */ t((e) => ({
  name: e.name,
  definition: c(e.definition)
}), "transformRule"), h = /* @__PURE__ */ t((e) => {
  s(e, a), e.title && a.setTitle(e.title), e.rules.map((r) => a.addRule(y(r)));
}, "populateDb"), b = {
  parse: /* @__PURE__ */ t((e) => {
    a.clear(), n.debug("[PEG Parser] Starting Langium parse");
    let r = f.parse(e);
    if (r.lexerErrors.length > 0 || r.parserErrors.length > 0)
      throw new l(r);
    let o = r.value;
    n.debug("[PEG Parser] Parsed rules:", o.rules.length), h(o), n.debug("[PEG Parser] Parse complete");
  }, "parse"),
  parser: {
    yy: a
  }
}, R = {
  parser: b,
  db: a,
  renderer: p,
  styles: m
};
export {
  R as diagram
};
