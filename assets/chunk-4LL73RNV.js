import {
  _ as s
} from "./chunk-Z5S2XYPB.js";
import {
  h as e
} from "./chunk-AHMAKIEG.js";
import {
  a as n
} from "./chunk-7WL7HUKP.js";

// node_modules/mermaid/dist/chunks/mermaid.core/chunk-CLGD4ZFX.mjs
var a = /* @__PURE__ */ n((t) => {
  let { securityLevel: c } = s(), o = e("body");
  if (c === "sandbox") {
    let m = e(`#i${t}`).node()?.contentDocument ?? document;
    o = e(m.body);
  }
  return o.select(`#${t}`);
}, "selectSvgElement");

export {
  a
};
