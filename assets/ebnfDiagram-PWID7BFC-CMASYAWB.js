import {
  a as n,
  b as p,
  c as f
} from "./chunk-4WLQO47V.js";
import {
  a as i
} from "./chunk-KDWB2RJI.js";
import {
  b as l
} from "./chunk-WEPZTDG2.js";
import "./chunk-EA7GJXF3.js";
import "./chunk-PLQJF6WY.js";
import "./chunk-QFNJTHY5.js";
import "./chunk-WRU3WCYK.js";
import {
  b as m
} from "./chunk-IBT763U7.js";
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
  b as o
} from "./chunk-AHMAKIEG.js";
import {
  a as t
} from "./chunk-7WL7HUKP.js";
import "./chunk-EJMXA7KY.js";

// node_modules/mermaid/dist/chunks/mermaid.core/ebnfDiagram-PWID7BFC.mjs
var c = m().RailroadEbnf.parser.LangiumParser, s = /* @__PURE__ */ t((e) => {
  let r = e.alternatives.map(E);
  return r.length === 1 ? r[0] : {
    type: "choice",
    alternatives: r
  };
}, "transformChoice"), E = /* @__PURE__ */ t((e) => {
  let r = e.elements.map(y);
  return r.length === 1 ? r[0] : {
    type: "sequence",
    elements: r
  };
}, "transformSequence"), u = /* @__PURE__ */ t((e) => {
  switch (e.$type) {
    case "EbnfTerminal":
      return {
        type: "terminal",
        value: e.value
      };
    case "EbnfNonTerminal":
      return {
        type: "nonterminal",
        name: e.name
      };
    case "EbnfSpecial":
      return {
        type: "special",
        text: e.text
      };
    case "EbnfGroup":
      return s(e.element);
    case "EbnfOptional":
      return {
        type: "optional",
        element: s(e.element)
      };
    case "EbnfRepetition":
      return {
        type: "repetition",
        element: s(e.element),
        min: 0,
        max: 1 / 0
      };
    default:
      throw new Error(`Unsupported EBNF primary node: ${e.$type}`);
  }
}, "transformPrimary"), b = /* @__PURE__ */ t((e, r) => {
  switch (r.$type) {
    case "EbnfOptionalPostfix":
      return {
        type: "optional",
        element: e
      };
    case "EbnfZeroOrMorePostfix":
      return {
        type: "repetition",
        element: e,
        min: 0,
        max: 1 / 0
      };
    case "EbnfOneOrMorePostfix":
      return {
        type: "repetition",
        element: e,
        min: 1,
        max: 1 / 0
      };
    case "EbnfExceptionPostfix":
      return {
        type: "sequence",
        elements: [
          e,
          { type: "terminal", value: "-" },
          u(r.except)
        ]
      };
    default:
      throw new Error(`Unsupported EBNF postfix node: ${r.$type}`);
  }
}, "transformPostfix"), y = /* @__PURE__ */ t((e) => e.postfixes.reduce((r, a) => b(r, a), u(e.base)), "transformTerm"), d = /* @__PURE__ */ t((e) => ({
  name: e.name,
  definition: s(e.definition)
}), "transformRule"), v = /* @__PURE__ */ t((e) => {
  i(e, n), e.title && n.setTitle(e.title), e.rules.map((r) => n.addRule(d(r)));
}, "populateDb"), P = {
  parse: /* @__PURE__ */ t((e) => {
    n.clear(), o.debug("[EBNF Parser] Starting Langium parse");
    let r = c.parse(e);
    if (r.lexerErrors.length > 0 || r.parserErrors.length > 0)
      throw new l(r);
    let a = r.value;
    o.debug("[EBNF Parser] Parsed rules:", a.rules.length), v(a), o.debug("[EBNF Parser] Parse complete");
  }, "parse"),
  parser: {
    yy: n
  }
}, $ = {
  parser: P,
  db: n,
  renderer: f,
  styles: p
};
export {
  $ as diagram
};
