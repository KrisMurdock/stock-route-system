import {
  a,
  b as p,
  c as u
} from "./chunk-4WLQO47V.js";
import {
  a as l
} from "./chunk-KDWB2RJI.js";
import {
  b as m
} from "./chunk-WEPZTDG2.js";
import "./chunk-EA7GJXF3.js";
import "./chunk-PLQJF6WY.js";
import "./chunk-QFNJTHY5.js";
import {
  b as s
} from "./chunk-WRU3WCYK.js";
import "./chunk-IBT763U7.js";
import "./chunk-MM46C4FV.js";
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
  b as i
} from "./chunk-AHMAKIEG.js";
import {
  a as n
} from "./chunk-7WL7HUKP.js";
import "./chunk-EJMXA7KY.js";

// node_modules/mermaid/dist/chunks/mermaid.core/railroadDiagram-O6MQD6OU.mjs
var d = s().Railroad.parser.LangiumParser, t = /* @__PURE__ */ n((e) => {
  switch (e.$type) {
    case "RailroadTerminalExpr":
      return {
        type: "terminal",
        value: e.value
      };
    case "RailroadNonTerminalExpr":
      return {
        type: "nonterminal",
        name: e.name
      };
    case "RailroadSpecialExpr":
      return {
        type: "special",
        text: e.text
      };
    case "RailroadSequenceExpr": {
      let r = e.elements.map(t);
      return r.length === 1 ? r[0] : { type: "sequence", elements: r };
    }
    case "RailroadChoiceExpr": {
      let r = e.alternatives.map(t);
      return r.length === 1 ? r[0] : { type: "choice", alternatives: r };
    }
    case "RailroadOptionalExpr":
      return {
        type: "optional",
        element: t(e.element)
      };
    case "RailroadOneOrMoreExpr":
      return {
        type: "repetition",
        element: t(e.element),
        min: 1,
        max: 1 / 0
      };
    case "RailroadZeroOrMoreExpr":
      return {
        type: "repetition",
        element: t(e.element),
        min: 0,
        max: 1 / 0
      };
    default:
      throw new Error(`Unsupported railroad expression: ${e.$type}`);
  }
}, "transformExpression"), c = /* @__PURE__ */ n((e) => ({
  name: e.name,
  definition: t(e.definition)
}), "transformRule"), f = /* @__PURE__ */ n((e) => {
  l(e, a), e.title && a.setTitle(e.title), e.rules.map((r) => a.addRule(c(r)));
}, "populateDb"), g = {
  parse: /* @__PURE__ */ n((e) => {
    a.clear(), i.debug("[Railroad Parser] Starting Langium parse");
    let r = d.parse(e);
    if (r.lexerErrors.length > 0 || r.parserErrors.length > 0)
      throw new m(r);
    let o = r.value;
    i.debug("[Railroad Parser] Parsed rules:", o.rules.length), f(o), i.debug("[Railroad Parser] Parse complete");
  }, "parse"),
  parser: {
    yy: a
  }
}, y = {
  parser: g,
  db: a,
  renderer: u,
  styles: p
}, w = y;
export {
  w as default,
  y as diagram
};
