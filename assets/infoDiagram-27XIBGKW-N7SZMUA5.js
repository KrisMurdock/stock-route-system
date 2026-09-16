import {
  a as s
} from "./chunk-WEPZTDG2.js";
import "./chunk-EA7GJXF3.js";
import "./chunk-PLQJF6WY.js";
import "./chunk-QFNJTHY5.js";
import "./chunk-WRU3WCYK.js";
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
import {
  a as i
} from "./chunk-4LL73RNV.js";
import {
  O as n
} from "./chunk-Z5S2XYPB.js";
import {
  b as a
} from "./chunk-AHMAKIEG.js";
import {
  a as r
} from "./chunk-7WL7HUKP.js";
import "./chunk-EJMXA7KY.js";

// node_modules/mermaid/dist/chunks/mermaid.core/infoDiagram-27XIBGKW.mjs
var g = {
  parse: /* @__PURE__ */ r(async (e) => {
    let t = await s("info", e);
    a.debug(t);
  }, "parse")
}, m = {
  version: "11.17.2"
}, v = /* @__PURE__ */ r(() => m.version, "getVersion"), d = {
  getVersion: v
}, f = /* @__PURE__ */ r((e, t, p) => {
  a.debug(`rendering info diagram
` + e);
  let o = i(t);
  n(o, 100, 400, !0), o.append("g").append("text").attr("x", 100).attr("y", 40).attr("class", "version").attr("font-size", 32).style("text-anchor", "middle").text(`v${p}`);
}, "draw"), c = { draw: f }, w = {
  parser: g,
  db: d,
  renderer: c
};
export {
  w as diagram
};
