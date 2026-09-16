import {
  a as nt
} from "./chunk-KDWB2RJI.js";
import {
  a as ot
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
  a as at
} from "./chunk-4LL73RNV.js";
import {
  n as rt,
  o as it
} from "./chunk-UC32KGOS.js";
import "./chunk-T6N77OY5.js";
import {
  O as V,
  T as X,
  U as Z,
  V as j,
  W as q,
  X as J,
  Y as K,
  Z as Q,
  _ as Y,
  k as U
} from "./chunk-Z5S2XYPB.js";
import {
  F as L,
  I as et,
  b as T,
  m as tt
} from "./chunk-AHMAKIEG.js";
import {
  a as l
} from "./chunk-7WL7HUKP.js";
import "./chunk-EJMXA7KY.js";

// node_modules/mermaid/dist/chunks/mermaid.core/pieDiagram-E7YTZNPT.mjs
var lt = U.pie, O = {
  sections: /* @__PURE__ */ new Map(),
  showData: !1,
  config: lt
}, b = O.sections, F = O.showData, St = structuredClone(lt), xt = /* @__PURE__ */ l(() => structuredClone(St), "getConfig"), wt = /* @__PURE__ */ l(() => {
  b = /* @__PURE__ */ new Map(), F = O.showData, X();
}, "clear"), Ct = /* @__PURE__ */ l(({ label: t, value: a }) => {
  if (a < 0)
    throw new Error(
      `"${t}" has invalid value: ${a}. Negative values are not allowed in pie charts. All slice values must be >= 0.`
    );
  b.has(t) || (b.set(t, a), T.debug(`added new section: ${t}, with value: ${a}`));
}, "addSection"), $t = /* @__PURE__ */ l(() => b, "getSections"), Dt = /* @__PURE__ */ l((t) => {
  F = t;
}, "setShowData"), yt = /* @__PURE__ */ l(() => F, "getShowData"), st = {
  getConfig: xt,
  clear: wt,
  setDiagramTitle: K,
  getDiagramTitle: Q,
  setAccTitle: Z,
  getAccTitle: j,
  setAccDescription: q,
  getAccDescription: J,
  addSection: Ct,
  getSections: $t,
  setShowData: Dt,
  getShowData: yt
}, Tt = /* @__PURE__ */ l((t, a) => {
  nt(t, a), a.setShowData(t.showData), t.sections.map(a.addSection);
}, "populateDb"), bt = {
  parse: /* @__PURE__ */ l(async (t) => {
    let a = await ot("pie", t);
    T.debug(a), Tt(a, st);
  }, "parse")
}, At = /* @__PURE__ */ l((t) => `
  .pieCircle{
    stroke: ${t.pieStrokeColor};
    stroke-width : ${t.pieStrokeWidth};
    opacity : ${t.pieOpacity};
  }
  .pieCircle.highlighted{
    scale: 1.05;
    opacity: 1;
  }
  .pieCircle.highlightedOnHover:hover{
    transition-duration: 250ms;
    scale: 1.05;
    opacity: 1;
  }
  .pieOuterCircle{
    stroke: ${t.pieOuterStrokeColor};
    stroke-width: ${t.pieOuterStrokeWidth};
    fill: none;
  }
  .pieTitleText {
    text-anchor: middle;
    font-size: ${t.pieTitleTextSize};
    fill: ${t.pieTitleTextColor};
    font-family: ${t.fontFamily};
  }
  .slice {
    font-family: ${t.fontFamily};
    fill: ${t.pieSectionTextColor};
    font-size:${t.pieSectionTextSize};
    // fill: white;
  }
  .legend text {
    fill: ${t.pieLegendTextColor};
    font-family: ${t.fontFamily};
    font-size: ${t.pieLegendTextSize};
  }
`, "getStyles"), _t = At, kt = /* @__PURE__ */ l((t) => {
  let a = [...t.values()].reduce((o, m) => o + m, 0), H = [...t.entries()].map(([o, m]) => ({ label: o, value: m })).filter((o) => o.value / a * 100 >= 1);
  return et().value((o) => o.value).sort(null)(H);
}, "createPieArcs"), zt = /* @__PURE__ */ l((t, a, H, M) => {
  T.debug(`rendering pie chart
` + t);
  let o = M.db, m = Y(), h = it(o.getConfig(), m.pie), P = 40, i = 18, c = 4, S = 450, x = S, A = at(a), $ = A.append("g");
  $.attr("transform", "translate(" + x / 2 + "," + S / 2 + ")");
  let { themeVariables: n } = m, [_] = rt(n.pieOuterStrokeWidth);
  _ ?? (_ = 2);
  let ct = h.legendPosition, W = h.textPosition, dt = h.donutHole > 0 && h.donutHole <= 0.9 ? h.donutHole : 0, f = Math.min(x, S) / 2 - P, gt = L().innerRadius(dt * f).outerRadius(f), pt = L().innerRadius(f * W).outerRadius(f * W), w = $.append("g");
  w.append("circle").attr("cx", 0).attr("cy", 0).attr("r", f + _ / 2).attr("class", "pieOuterCircle");
  let D = o.getSections(), ht = kt(D), ft = [
    n.pie1,
    n.pie2,
    n.pie3,
    n.pie4,
    n.pie5,
    n.pie6,
    n.pie7,
    n.pie8,
    n.pie9,
    n.pie10,
    n.pie11,
    n.pie12
  ], k = 0;
  D.forEach((e) => {
    k += e;
  });
  let G = ht.filter((e) => (e.data.value / k * 100).toFixed(0) !== "0"), z = tt(ft).domain([
    ...D.keys()
  ]);
  w.selectAll("mySlices").data(G).enter().append("path").attr("d", gt).attr("fill", (e) => z(e.data.label)).attr("class", (e) => {
    let r = "pieCircle";
    return h.highlightSlice === "hover" ? r += " highlightedOnHover" : h.highlightSlice === e.data.label && (r += " highlighted"), r;
  }), w.selectAll("mySlices").data(G).enter().append("text").text((e) => (e.data.value / k * 100).toFixed(0) + "%").attr("transform", (e) => "translate(" + pt.centroid(e) + ")").style("text-anchor", "middle").attr("class", "slice");
  let ut = $.append("text").text(o.getDiagramTitle()).attr("x", 0).attr("y", -(S - 50) / 2).attr("class", "pieTitleText"), C = [...D.entries()].map(([e, r]) => ({
    label: e,
    value: r
  })), u = $.selectAll(".legend").data(C).enter().append("g").attr("class", "legend");
  u.append("rect").attr("width", i).attr("height", i).style("fill", (e) => z(e.label)).style("stroke", (e) => z(e.label)), u.append("text").attr("x", i + c).attr("y", i - c).text((e) => o.getShowData() ? `${e.label} [${e.value}]` : e.label);
  let v = Math.max(
    ...u.selectAll("text").nodes().map((e) => e?.getBoundingClientRect().width ?? 0)
  ), y = S, E = x + P, s = i + c, R = C.length * s;
  switch (ct) {
    case "center":
      u.attr("transform", (e, r) => {
        let d = s * C.length / 2, g = -v / 2 - (i + c), p = r * s - d;
        return "translate(" + g + "," + p + ")";
      });
      break;
    case "top":
      y += R, u.attr("transform", (e, r) => {
        let d = f, g = -v / 2 - (i + c), p = r * s - d;
        return `translate(${g}, ${p})`;
      }), w.attr("transform", () => `translate(0, ${R + s})`);
      break;
    case "bottom":
      y += R, u.attr("transform", (e, r) => {
        let d = -f - s, g = -v / 2 - (i + c), p = r * s - d;
        return "translate(" + g + "," + p + ")";
      });
      break;
    case "left":
      E += i + c + v, u.attr("transform", (e, r) => {
        let d = s * C.length / 2, g = -f - (i + c), p = r * s - d;
        return "translate(" + g + "," + p + ")";
      }), w.attr("transform", () => `translate(${v + i + c}, 0)`);
      break;
    default:
      E += i + c + v, u.attr("transform", (e, r) => {
        let d = s * C.length / 2, g = 12 * i, p = r * s - d;
        return "translate(" + g + "," + p + ")";
      });
      break;
  }
  let B = ut.node()?.getBoundingClientRect().width ?? 0, mt = x / 2 - B / 2, vt = x / 2 + B / 2, N = Math.min(0, mt), I = Math.max(E, vt) - N;
  A.attr("viewBox", `${N} 0 ${I} ${y}`), V(A, y, I, h.useMaxWidth);
}, "draw"), Et = { draw: zt }, Bt = {
  parser: bt,
  db: st,
  renderer: Et,
  styles: _t
};
export {
  Bt as diagram
};
