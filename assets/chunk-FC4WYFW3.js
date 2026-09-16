import {
  O as w
} from "./chunk-Z5S2XYPB.js";
import {
  b as c
} from "./chunk-AHMAKIEG.js";
import {
  a as r
} from "./chunk-7WL7HUKP.js";

// node_modules/mermaid/dist/chunks/mermaid.core/chunk-POPQ4Y6H.mjs
var l = /* @__PURE__ */ r((t, e, i, h) => {
  t.attr("class", i);
  let { width: o, height: n, x, y: u } = m(t, e);
  w(t, n, o, h);
  let a = s(x, u, o, n, e);
  t.attr("viewBox", a), c.debug(`viewBox configured: ${a} with padding: ${e}`);
}, "setupViewPortForSVG"), m = /* @__PURE__ */ r((t, e) => {
  let i = t.node()?.getBBox() || { width: 0, height: 0, x: 0, y: 0 };
  return {
    width: i.width + e * 2,
    height: i.height + e * 2,
    x: i.x,
    y: i.y
  };
}, "calculateDimensionsWithPadding"), s = /* @__PURE__ */ r((t, e, i, h, o) => `${t - o} ${e - o} ${i} ${h}`, "createViewBox");

export {
  l as a
};
