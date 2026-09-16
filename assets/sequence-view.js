import {
  a as Qe
} from "./chunk-4LL73RNV.js";
import "./chunk-3NVPH2JJ.js";
import "./chunk-NVRJAZZC.js";
import {
  a as ir,
  b as or
} from "./chunk-B2NAASQ4.js";
import {
  a as nr
} from "./chunk-PU4UWDYU.js";
import "./chunk-6FYLUYLA.js";
import "./chunk-2HVFJUR6.js";
import "./chunk-BD4YR2YY.js";
import "./chunk-23IJJFHQ.js";
import "./chunk-JST3Q45G.js";
import "./chunk-E2SCDLXK.js";
import {
  a as ar
} from "./chunk-CDKXHOR5.js";
import {
  b as Ze
} from "./chunk-DI34KJTL.js";
import {
  b as De,
  d as Je,
  m as Te,
  o as er,
  p as U,
  q as rr,
  r as tr
} from "./chunk-UC32KGOS.js";
import "./chunk-T6N77OY5.js";
import {
  B as We,
  C as te,
  D as Se,
  E as ae,
  F as je,
  O as Xe,
  Q as Ee,
  R as Ke,
  da as Q,
  ea as ie,
  g as Oe,
  h as $e,
  j as re,
  m as qe,
  n as be,
  o as Ne,
  p as Pe,
  q as Be,
  r as Ve,
  s as xe,
  t as Ue,
  u as V,
  v as He,
  w as K,
  y as Ge,
  z as Ye
} from "./chunk-Z5S2XYPB.js";
import {
  b as p,
  c as we,
  h as _
} from "./chunk-AHMAKIEG.js";
import {
  a
} from "./chunk-7WL7HUKP.js";
import "./chunk-EJMXA7KY.js";

// node_modules/stylis/src/Enum.js
var H = "comm", oe = "rule", ne = "decl";
var sr = "@media", dr = "@import";
var cr = "@supports";
var lr = "@namespace", Z = "@keyframes";
var se = "@layer", ur = "@scope";

// node_modules/stylis/src/Utility.js
var fr = Math.abs, q = String.fromCharCode;
function de(e) {
  return e.trim();
}
function J(e, r, t) {
  return e.replace(r, t);
}
function I(e, r) {
  return e.charCodeAt(r) | 0;
}
function F(e, r, t) {
  return e.slice(r, t);
}
function x(e) {
  return e.length;
}
function ce(e) {
  return e.length;
}
function G(e, r) {
  return r.push(e), e;
}

// node_modules/stylis/src/Tokenizer.js
var le = 1, Y = 1, mr = 0, E = 0, h = 0, j = "";
function ue(e, r, t, i, o, n, s, d) {
  return { value: e, root: r, parent: t, type: i, props: o, children: n, line: le, column: Y, length: s, return: "", siblings: d };
}
function pr() {
  return h;
}
function gr() {
  return h = E > 0 ? I(j, --E) : 0, Y--, h === 10 && (Y = 1, le--), h;
}
function D() {
  return h = E < mr ? I(j, E++) : 0, Y++, h === 10 && (Y = 1, le++), h;
}
function z() {
  return I(j, E);
}
function ee() {
  return E;
}
function fe(e, r) {
  return F(j, e, r);
}
function W(e) {
  switch (e) {
    // \0 \t \n \r \s whitespace token
    case 0:
    case 9:
    case 10:
    case 13:
    case 32:
      return 5;
    // ! + , / > @ ~ isolate token
    case 33:
    case 43:
    case 44:
    case 47:
    case 62:
    case 64:
    case 126:
    // ; { } breakpoint token
    case 59:
    case 123:
    case 125:
      return 4;
    // : accompanied token
    case 58:
      return 3;
    // " ' ( [ opening delimit token
    case 34:
    case 39:
    case 40:
    case 91:
      return 2;
    // ) ] closing delimit token
    case 41:
    case 93:
      return 1;
  }
  return 0;
}
function vr(e) {
  return le = Y = 1, mr = x(j = e), E = 0, [];
}
function hr(e) {
  return j = "", e;
}
function me(e) {
  return de(fe(E - 1, Ae(e === 91 ? e + 2 : e === 40 ? e + 1 : e)));
}
function yr(e) {
  for (; (h = z()) && h < 33; )
    D();
  return W(e) > 2 || W(h) > 3 ? "" : " ";
}
function wr(e, r) {
  for (; --r && D() && !(h < 48 || h > 102 || h > 57 && h < 65 || h > 70 && h < 97); )
    ;
  return fe(e, ee() + (r < 6 && z() == 32 && D() == 32));
}
function Ae(e) {
  for (; D(); )
    switch (h) {
      // ] ) " '
      case e:
        return E;
      // " '
      case 34:
      case 39:
        e !== 34 && e !== 39 && Ae(h);
        break;
      // (
      case 40:
        e === 41 && Ae(e);
        break;
      // \
      case 92:
        D();
        break;
    }
  return E;
}
function br(e, r) {
  for (; D() && e + h !== 57; )
    if (e + h === 84 && z() === 47)
      break;
  return "/*" + fe(r, E - 1) + "*" + q(e === 47 ? e : D());
}
function xr(e) {
  for (; !W(z()); )
    D();
  return fe(e, E);
}

// node_modules/stylis/src/Parser.js
function Dr(e) {
  return hr(pe("", null, null, null, [""], e = vr(e), 0, [0], e));
}
function pe(e, r, t, i, o, n, s, d, c) {
  for (var f = 0, g = 0, u = s, w = 0, A = 0, C = 0, m = 1, R = 1, L = 1, b = 0, v = 0, k = "", B = o, M = n, S = i, l = k; R; )
    switch (C = v, v = D()) {
      // (
      case 40:
        C != 108 && I(l, u - 1) == 58 ? (b++, l += "(") : l += me(v);
        break;
      // )
      case 41:
        b--, l += ")";
        break;
      // " ' [
      case 34:
      case 39:
      case 91:
        l += me(v);
        break;
      // \t \n \r \s
      case 9:
      case 10:
      case 13:
      case 32:
        if (b > 0) {
          l += q(v);
          break;
        }
        l += yr(C);
        break;
      // \
      case 92:
        l += wr(ee() - 1, 7);
        continue;
      // /
      case 47:
        switch (z()) {
          case 42:
          case 47:
            G(qt(br(D(), ee()), r, t, c), c), (W(C || 1) == 5 || W(z() || 1) == 5) && x(l) && F(l, -1, void 0) !== " " && (l += " ");
            break;
          default:
            l += "/";
        }
        break;
      // {
      case 123 * m:
        d[f++] = x(l) * L;
      // } ; \0
      case 125 * m:
      case 59:
      case 0:
        if (b > 0 && v) {
          l += q(v);
          break;
        }
        switch (v) {
          // \0 }
          case 0:
          case 125:
            R = 0;
          // ;
          case 59 + g:
            L == -1 && (l = J(l, /\f/g, "")), A > 0 && (x(l) - u || m === 0) && G(A > 32 ? Er(l + ";", i, t, u - 1, c) : Er(J(l, " ", "") + ";", i, t, u - 2, c), c);
            break;
          // @ ;
          case 59:
            l += ";";
          // { rule/at-rule
          default:
            if (G(S = Sr(l, r, t, f, g, o, d, k, B = [], M = [], u, n), n), v === 123)
              if (g === 0)
                pe(l, r, S, S, B, n, u, d, M);
              else {
                switch (w) {
                  // c(ontainer)
                  case 99:
                    if (I(l, 3) === 110) break;
                  // l(ayer)
                  case 108:
                    if (I(l, 2) === 97) break;
                  default:
                    g = 0;
                  // d(ocument) m(edia) s(upports)
                  case 100:
                  case 109:
                  case 115:
                }
                g ? pe(e, S, S, i && G(Sr(e, S, S, 0, 0, o, d, k, o, B = [], u, M), M), o, M, u, d, i ? B : M) : pe(l, S, S, S, [""], M, 0, d, M);
              }
        }
        f = g = A = 0, m = L = 1, k = l = "", u = s;
        break;
      // :
      case 58:
        u = 1 + x(l), A = C;
      default:
        if (m < 1) {
          if (v == 123)
            --m;
          else if (v == 125 && m++ == 0 && gr() == 125)
            continue;
        }
        switch (l += q(v), v * m) {
          // &
          case 38:
            L = g > 0 ? 1 : (l += "\f", -1);
            break;
          // ,
          case 44:
            if (b > 0) break;
            d[f++] = (x(l) - 1) * L, L = 1;
            break;
          // @
          case 64:
            z() === 45 && (l += me(D())), w = z(), g = u = x(k = l += xr(ee())), v++;
            break;
          // -
          case 45:
            C === 45 && x(l) == 2 && (m = 0);
        }
    }
  return n;
}
function Sr(e, r, t, i, o, n, s, d, c, f, g, u) {
  for (var w = o - 1, A = o === 0 ? n : [""], C = ce(A), m = 0, R = 0, L = 0; m < i; ++m)
    for (var b = 0, v = F(e, w + 1, w = fr(R = s[m])), k = e; b < C; ++b)
      (k = de(R > 0 ? A[b] + " " + v : J(v, /&\f/g, A[b]))) && (c[L++] = k);
  return ue(e, r, t, o === 0 ? oe : d, c, f, g, u);
}
function qt(e, r, t, i) {
  return ue(e, r, t, H, q(pr()), F(e, 2, -2), 0, i);
}
function Er(e, r, t, i, o) {
  return ue(e, r, t, ne, F(e, 0, i), F(e, i + 1, -1), i, o);
}

// node_modules/stylis/src/Serializer.js
function ge(e, r) {
  for (var t = "", i = 0; i < e.length; i++)
    t += r(e[i], i, e, r) || "";
  return t;
}
function Tr(e, r, t, i) {
  switch (e.type) {
    case se:
      if (e.children.length) break;
    case dr:
    case lr:
    case ne:
      return e.return = e.return || e.value;
    case H:
      return "";
    case Z:
      return e.return = e.value + "{" + ge(e.children, i) + "}";
    case oe:
      if (!x(e.value = e.props.join(","))) return "";
  }
  return x(t = ge(e.children, i)) ? e.return = e.value + "{" + t + "}" : "";
}

// node_modules/stylis/src/Middleware.js
function Ar(e) {
  var r = ce(e);
  return function(t, i, o, n) {
    for (var s = "", d = 0; d < r; d++)
      s += e[d](t, i, o, n) || "";
    return s;
  };
}

// node_modules/mermaid/dist/mermaid.core.mjs
var Rr = "c4", Nt = /* @__PURE__ */ a((e) => /^\s*C4Context|C4Container|C4Component|C4Dynamic|C4Deployment/.test(e), "detector"), Pt = /* @__PURE__ */ a(async () => {
  let { diagram: e } = await import("./c4Diagram-7LVT6UL2-34WHZKTT.js");
  return { id: Rr, diagram: e };
}, "loader"), Bt = {
  id: Rr,
  detector: Nt,
  loader: Pt
}, Vt = Bt, _r = "flowchart", Ut = /* @__PURE__ */ a((e, r) => r?.flowchart?.defaultRenderer === "dagre-wrapper" || r?.flowchart?.defaultRenderer === "elk" ? !1 : /^\s*graph/.test(e), "detector"), Ht = /* @__PURE__ */ a(async () => {
  let { diagram: e } = await import("./flowDiagram-HODETNUW-SUONPIUT.js");
  return { id: _r, diagram: e };
}, "loader"), Gt = {
  id: _r,
  detector: Ut,
  loader: Ht
}, Yt = Gt, Ir = "flowchart-v2", Wt = /* @__PURE__ */ a((e, r) => r?.flowchart?.defaultRenderer === "dagre-d3" ? !1 : (r?.flowchart?.defaultRenderer === "elk" && (r.layout = "elk"), /^\s*graph/.test(e) && r?.flowchart?.defaultRenderer === "dagre-wrapper" ? !0 : /^\s*flowchart/.test(e)), "detector"), jt = /* @__PURE__ */ a(async () => {
  let { diagram: e } = await import("./flowDiagram-HODETNUW-SUONPIUT.js");
  return { id: Ir, diagram: e };
}, "loader"), Xt = {
  id: Ir,
  detector: Wt,
  loader: jt
}, Kt = Xt, Fr = "swimlane", Qt = /* @__PURE__ */ a((e) => /^\s*swimlane-beta\b/.test(e), "detector"), Zt = /* @__PURE__ */ a(async () => {
  let { diagram: e } = await import("./swimlanesDiagram-VR7AAH4N-AHXIZGAM.js");
  return { id: Fr, diagram: e };
}, "loader"), Jt = {
  id: Fr,
  detector: Qt,
  loader: Zt
}, ea = Jt, zr = "er", ra = /* @__PURE__ */ a((e) => /^\s*erDiagram/.test(e), "detector"), ta = /* @__PURE__ */ a(async () => {
  let { diagram: e } = await import("./erDiagram-RLTQ6QDP-L5EWK75X.js");
  return { id: zr, diagram: e };
}, "loader"), aa = {
  id: zr,
  detector: ra,
  loader: ta
}, ia = aa, Or = "gitGraph", oa = /* @__PURE__ */ a((e) => /^\s*gitGraph/.test(e), "detector"), na = /* @__PURE__ */ a(async () => {
  let { diagram: e } = await import("./gitGraphDiagram-WWUBYQGX-CKTAJRQU.js");
  return { id: Or, diagram: e };
}, "loader"), sa = {
  id: Or,
  detector: oa,
  loader: na
}, da = sa, $r = "gantt", ca = /* @__PURE__ */ a((e) => /^\s*gantt/.test(e), "detector"), la = /* @__PURE__ */ a(async () => {
  let { diagram: e } = await import("./ganttDiagram-EL5Y4UJY-QGACQZJL.js");
  return { id: $r, diagram: e };
}, "loader"), ua = {
  id: $r,
  detector: ca,
  loader: la
}, fa = ua, qr = "info", ma = /* @__PURE__ */ a((e) => /^\s*info/.test(e), "detector"), pa = /* @__PURE__ */ a(async () => {
  let { diagram: e } = await import("./infoDiagram-27XIBGKW-N7SZMUA5.js");
  return { id: qr, diagram: e };
}, "loader"), ga = {
  id: qr,
  detector: ma,
  loader: pa
}, Nr = "pie", va = /* @__PURE__ */ a((e) => /^\s*pie/.test(e), "detector"), ha = /* @__PURE__ */ a(async () => {
  let { diagram: e } = await import("./pieDiagram-E7YTZNPT-H65KX36L.js");
  return { id: Nr, diagram: e };
}, "loader"), ya = {
  id: Nr,
  detector: va,
  loader: ha
}, Pr = "quadrantChart", wa = /* @__PURE__ */ a((e) => /^\s*quadrantChart/.test(e), "detector"), ba = /* @__PURE__ */ a(async () => {
  let { diagram: e } = await import("./quadrantDiagram-AXDQQJYC-PMMDQ5LO.js");
  return { id: Pr, diagram: e };
}, "loader"), xa = {
  id: Pr,
  detector: wa,
  loader: ba
}, Sa = xa, Br = "xychart", Ea = /* @__PURE__ */ a((e) => /^\s*xychart(-beta)?/.test(e), "detector"), Da = /* @__PURE__ */ a(async () => {
  let { diagram: e } = await import("./xychartDiagram-S5SC5T6Z-BBZQXQBY.js");
  return { id: Br, diagram: e };
}, "loader"), Ta = {
  id: Br,
  detector: Ea,
  loader: Da
}, Aa = Ta, Vr = "requirement", Ca = /* @__PURE__ */ a((e) => /^\s*requirement(Diagram)?/.test(e), "detector"), La = /* @__PURE__ */ a(async () => {
  let { diagram: e } = await import("./requirementDiagram-BXWQKSXE-PA7VUN7G.js");
  return { id: Vr, diagram: e };
}, "loader"), ka = {
  id: Vr,
  detector: Ca,
  loader: La
}, Ma = ka, Ur = "sequence", Ra = /* @__PURE__ */ a((e) => /^\s*sequenceDiagram/.test(e), "detector"), _a = /* @__PURE__ */ a(async () => {
  let { diagram: e } = await import("./sequenceDiagram-WJ2MYXX4-JR7HBQW5.js");
  return { id: Ur, diagram: e };
}, "loader"), Ia = {
  id: Ur,
  detector: Ra,
  loader: _a
}, Fa = Ia, Hr = "class", za = /* @__PURE__ */ a((e, r) => r?.class?.defaultRenderer === "dagre-wrapper" ? !1 : /^\s*classDiagram/.test(e), "detector"), Oa = /* @__PURE__ */ a(async () => {
  let { diagram: e } = await import("./classDiagram-ZZMXUADV-NAPLWSP4.js");
  return { id: Hr, diagram: e };
}, "loader"), $a = {
  id: Hr,
  detector: za,
  loader: Oa
}, qa = $a, Gr = "classDiagram", Na = /* @__PURE__ */ a((e, r) => /^\s*classDiagram/.test(e) && r?.class?.defaultRenderer === "dagre-wrapper" ? !0 : /^\s*classDiagram-v2/.test(e), "detector"), Pa = /* @__PURE__ */ a(async () => {
  let { diagram: e } = await import("./classDiagram-v2-VYDZK3BY-CLBOV6YQ.js");
  return { id: Gr, diagram: e };
}, "loader"), Ba = {
  id: Gr,
  detector: Na,
  loader: Pa
}, Va = Ba, Yr = "state", Ua = /* @__PURE__ */ a((e, r) => r?.state?.defaultRenderer === "dagre-wrapper" ? !1 : /^\s*stateDiagram/.test(e), "detector"), Ha = /* @__PURE__ */ a(async () => {
  let { diagram: e } = await import("./stateDiagram-D77RDMKH-LKHM44W5.js");
  return { id: Yr, diagram: e };
}, "loader"), Ga = {
  id: Yr,
  detector: Ua,
  loader: Ha
}, Ya = Ga, Wr = "stateDiagram", Wa = /* @__PURE__ */ a((e, r) => !!(/^\s*stateDiagram-v2/.test(e) || /^\s*stateDiagram/.test(e) && r?.state?.defaultRenderer === "dagre-wrapper"), "detector"), ja = /* @__PURE__ */ a(async () => {
  let { diagram: e } = await import("./stateDiagram-v2-MP3YSRHH-33YLCAL3.js");
  return { id: Wr, diagram: e };
}, "loader"), Xa = {
  id: Wr,
  detector: Wa,
  loader: ja
}, Ka = Xa, jr = "journey", Qa = /* @__PURE__ */ a((e) => /^\s*journey/.test(e), "detector"), Za = /* @__PURE__ */ a(async () => {
  let { diagram: e } = await import("./journeyDiagram-3NMN7TZE-GWB35GWT.js");
  return { id: jr, diagram: e };
}, "loader"), Ja = {
  id: jr,
  detector: Qa,
  loader: Za
}, ei = Ja, ri = /* @__PURE__ */ a((e, r, t) => {
  p.debug(`rendering svg for syntax error
`);
  let i = Qe(r), o = i.append("g");
  i.attr("viewBox", "0 0 2412 512"), Xe(i, 100, 512, !0), o.append("path").attr("class", "error-icon").attr(
    "d",
    "m411.313,123.313c6.25-6.25 6.25-16.375 0-22.625s-16.375-6.25-22.625,0l-32,32-9.375,9.375-20.688-20.688c-12.484-12.5-32.766-12.5-45.25,0l-16,16c-1.261,1.261-2.304,2.648-3.31,4.051-21.739-8.561-45.324-13.426-70.065-13.426-105.867,0-192,86.133-192,192s86.133,192 192,192 192-86.133 192-192c0-24.741-4.864-48.327-13.426-70.065 1.402-1.007 2.79-2.049 4.051-3.31l16-16c12.5-12.492 12.5-32.758 0-45.25l-20.688-20.688 9.375-9.375 32.001-31.999zm-219.313,100.687c-52.938,0-96,43.063-96,96 0,8.836-7.164,16-16,16s-16-7.164-16-16c0-70.578 57.422-128 128-128 8.836,0 16,7.164 16,16s-7.164,16-16,16z"
  ), o.append("path").attr("class", "error-icon").attr(
    "d",
    "m459.02,148.98c-6.25-6.25-16.375-6.25-22.625,0s-6.25,16.375 0,22.625l16,16c3.125,3.125 7.219,4.688 11.313,4.688 4.094,0 8.188-1.563 11.313-4.688 6.25-6.25 6.25-16.375 0-22.625l-16.001-16z"
  ), o.append("path").attr("class", "error-icon").attr(
    "d",
    "m340.395,75.605c3.125,3.125 7.219,4.688 11.313,4.688 4.094,0 8.188-1.563 11.313-4.688 6.25-6.25 6.25-16.375 0-22.625l-16-16c-6.25-6.25-16.375-6.25-22.625,0s-6.25,16.375 0,22.625l15.999,16z"
  ), o.append("path").attr("class", "error-icon").attr(
    "d",
    "m400,64c8.844,0 16-7.164 16-16v-32c0-8.836-7.156-16-16-16-8.844,0-16,7.164-16,16v32c0,8.836 7.156,16 16,16z"
  ), o.append("path").attr("class", "error-icon").attr(
    "d",
    "m496,96.586h-32c-8.844,0-16,7.164-16,16 0,8.836 7.156,16 16,16h32c8.844,0 16-7.164 16-16 0-8.836-7.156-16-16-16z"
  ), o.append("path").attr("class", "error-icon").attr(
    "d",
    "m436.98,75.605c3.125,3.125 7.219,4.688 11.313,4.688 4.094,0 8.188-1.563 11.313-4.688l32-32c6.25-6.25 6.25-16.375 0-22.625s-16.375-6.25-22.625,0l-32,32c-6.251,6.25-6.251,16.375-0.001,22.625z"
  ), o.append("text").attr("class", "error-text").attr("x", 1440).attr("y", 250).attr("font-size", "150px").style("text-anchor", "middle").text("Syntax error in text"), o.append("text").attr("class", "error-text").attr("x", 1250).attr("y", 400).attr("font-size", "100px").style("text-anchor", "middle").text(`mermaid version ${t}`);
}, "draw"), Xr = { draw: ri }, ti = Xr, ai = {
  db: {},
  renderer: Xr,
  parser: {
    parse: /* @__PURE__ */ a(() => {
    }, "parse")
  }
}, ii = ai, Kr = "flowchart-elk", oi = /* @__PURE__ */ a((e, r = {}) => (
  // If diagram explicitly states flowchart-elk
  /^\s*flowchart-elk/.test(e) || // If a flowchart/graph diagram has their default renderer set to elk
  /^\s*(flowchart|graph)/.test(e) && r?.flowchart?.defaultRenderer === "elk" ? (r.layout = "elk", !0) : !1
), "detector"), ni = /* @__PURE__ */ a(async () => {
  let { diagram: e } = await import("./flowDiagram-HODETNUW-SUONPIUT.js");
  return { id: Kr, diagram: e };
}, "loader"), si = {
  id: Kr,
  detector: oi,
  loader: ni
}, di = si, Qr = "timeline", ci = /* @__PURE__ */ a((e) => /^\s*timeline/.test(e), "detector"), li = /* @__PURE__ */ a(async () => {
  let { diagram: e } = await import("./timeline-definition-24CTP7MA-BB4T2VZT.js");
  return { id: Qr, diagram: e };
}, "loader"), ui = {
  id: Qr,
  detector: ci,
  loader: li
}, fi = ui, Zr = "mindmap", mi = /* @__PURE__ */ a((e) => /^\s*mindmap/.test(e), "detector"), pi = /* @__PURE__ */ a(async () => {
  let { diagram: e } = await import("./mindmap-definition-YA3MSWOX-2XCCRMGE.js");
  return { id: Zr, diagram: e };
}, "loader"), gi = {
  id: Zr,
  detector: mi,
  loader: pi
}, vi = gi, Jr = "kanban", hi = /* @__PURE__ */ a((e) => /^\s*kanban/.test(e), "detector"), yi = /* @__PURE__ */ a(async () => {
  let { diagram: e } = await import("./kanban-definition-UXKFOSKX-WJICDRHL.js");
  return { id: Jr, diagram: e };
}, "loader"), wi = {
  id: Jr,
  detector: hi,
  loader: yi
}, bi = wi, et = "sankey", xi = /* @__PURE__ */ a((e) => /^\s*sankey(-beta)?/.test(e), "detector"), Si = /* @__PURE__ */ a(async () => {
  let { diagram: e } = await import("./sankeyDiagram-P5KCCOFB-KI3NWVWT.js");
  return { id: et, diagram: e };
}, "loader"), Ei = {
  id: et,
  detector: xi,
  loader: Si
}, Di = Ei, rt = "packet", Ti = /* @__PURE__ */ a((e) => /^\s*packet(-beta)?/.test(e), "detector"), Ai = /* @__PURE__ */ a(async () => {
  let { diagram: e } = await import("./diagram-Z3DM3KII-P4UI63LY.js");
  return { id: rt, diagram: e };
}, "loader"), Ci = {
  id: rt,
  detector: Ti,
  loader: Ai
}, tt = "radar", Li = /* @__PURE__ */ a((e) => /^\s*radar-beta/.test(e), "detector"), ki = /* @__PURE__ */ a(async () => {
  let { diagram: e } = await import("./diagram-UQ7AKVKN-EEJR7LWL.js");
  return { id: tt, diagram: e };
}, "loader"), Mi = {
  id: tt,
  detector: Li,
  loader: ki
}, at = "block", Ri = /* @__PURE__ */ a((e) => /^\s*block(-beta)?/.test(e), "detector"), _i = /* @__PURE__ */ a(async () => {
  let { diagram: e } = await import("./blockDiagram-I7D4REHJ-ZGZIFYFS.js");
  return { id: at, diagram: e };
}, "loader"), Ii = {
  id: at,
  detector: Ri,
  loader: _i
}, Fi = Ii, it = "treeView", zi = /* @__PURE__ */ a((e) => /^\s*treeView-beta/.test(e), "detector"), Oi = /* @__PURE__ */ a(async () => {
  let { diagram: e } = await import("./diagram-S7CK7UJ4-YDC5PKMP.js");
  return { id: it, diagram: e };
}, "loader"), $i = {
  id: it,
  detector: zi,
  loader: Oi
}, qi = $i, ot = "architecture", Ni = /* @__PURE__ */ a((e) => /^\s*architecture/.test(e), "detector"), Pi = /* @__PURE__ */ a(async () => {
  let { diagram: e } = await import("./architectureDiagram-5GKGNRK7-GNRPIYOS.js");
  return { id: ot, diagram: e };
}, "loader"), Bi = {
  id: ot,
  detector: Ni,
  loader: Pi
}, Vi = Bi, nt = "eventmodeling", Ui = /* @__PURE__ */ a((e) => /^\s*eventmodeling/.test(e), "detector"), Hi = /* @__PURE__ */ a(async () => {
  let { diagram: e } = await import("./diagram-VSXAHHWV-3ZSBJF7G.js");
  return { id: nt, diagram: e };
}, "loader"), Gi = {
  id: nt,
  detector: Ui,
  loader: Hi
}, Yi = Gi, st = "ishikawa", Wi = /* @__PURE__ */ a((e) => /^\s*ishikawa(-beta)?\b/i.test(e), "detector"), ji = /* @__PURE__ */ a(async () => {
  let { diagram: e } = await import("./ishikawaDiagram-5VMMS53U-K2HZWZX2.js");
  return { id: st, diagram: e };
}, "loader"), Xi = {
  id: st,
  detector: Wi,
  loader: ji
}, dt = "venn", Ki = /* @__PURE__ */ a((e) => /^\s*venn-beta/.test(e), "detector"), Qi = /* @__PURE__ */ a(async () => {
  let { diagram: e } = await import("./vennDiagram-4TSXK5OY-HVS2KINM.js");
  return { id: dt, diagram: e };
}, "loader"), Zi = {
  id: dt,
  detector: Ki,
  loader: Qi
}, Ji = Zi, ct = "treemap", eo = /* @__PURE__ */ a((e) => /^\s*treemap/.test(e), "detector"), ro = /* @__PURE__ */ a(async () => {
  let { diagram: e } = await import("./diagram-VX7I27RA-RTRROYG6.js");
  return { id: ct, diagram: e };
}, "loader"), to = {
  id: ct,
  detector: eo,
  loader: ro
}, lt = "wardley", ao = /* @__PURE__ */ a((e) => /^\s*wardley-beta/i.test(e), "detector"), io = /* @__PURE__ */ a(async () => {
  let { diagram: e } = await import("./wardleyDiagram-VM6X3IG4-BZDLUPMT.js");
  return { id: lt, diagram: e };
}, "loader"), oo = {
  id: lt,
  detector: ao,
  loader: io
}, no = oo, ut = "cynefin", so = /* @__PURE__ */ a((e) => /^\s*cynefin-beta(?:[\s:]|$)/.test(e), "detector"), co = /* @__PURE__ */ a(async () => {
  let { diagram: e } = await import("./cynefinDiagram-5FMLGOSQ-65X2IQNC.js");
  return { id: ut, diagram: e };
}, "loader"), lo = {
  id: ut,
  detector: so,
  loader: co
}, ft = "railroad", uo = /* @__PURE__ */ a((e) => /^\s*railroad-beta/i.test(e), "detector"), fo = /* @__PURE__ */ a(async () => {
  let { diagram: e } = await import("./railroadDiagram-O6MQD6OU-7GLIKPFQ.js");
  return { id: ft, diagram: e };
}, "loader"), mo = {
  id: ft,
  detector: uo,
  loader: fo
}, mt = "railroadEbnf", po = /* @__PURE__ */ a((e) => /^\s*railroad-ebnf-beta/i.test(e), "detector"), go = /* @__PURE__ */ a(async () => {
  let { diagram: e } = await import("./ebnfDiagram-PWID7BFC-CMASYAWB.js");
  return { id: mt, diagram: e };
}, "loader"), vo = {
  id: mt,
  detector: po,
  loader: go
}, pt = "railroadAbnf", ho = /* @__PURE__ */ a((e) => /^\s*railroad-abnf-beta/i.test(e), "detector"), yo = /* @__PURE__ */ a(async () => {
  let { diagram: e } = await import("./abnfDiagram-VCTEODGH-BWQDZKHQ.js");
  return { id: pt, diagram: e };
}, "loader"), wo = {
  id: pt,
  detector: ho,
  loader: yo
}, gt = "railroadPeg", bo = /* @__PURE__ */ a((e) => /^\s*railroad-peg-beta/i.test(e), "detector"), xo = /* @__PURE__ */ a(async () => {
  let { diagram: e } = await import("./pegDiagram-XKGWAZYB-IGRW76IW.js");
  return { id: gt, diagram: e };
}, "loader"), So = {
  id: gt,
  detector: bo,
  loader: xo
}, Cr = !1, he = /* @__PURE__ */ a(() => {
  Cr || (Cr = !0, Q("error", ii, (e) => e.toLowerCase().trim() === "error"), Q(
    "---",
    // --- diagram type may appear if YAML front-matter is not parsed correctly
    {
      db: {
        clear: /* @__PURE__ */ a(() => {
        }, "clear")
      },
      styles: {},
      // should never be used
      renderer: {
        draw: /* @__PURE__ */ a(() => {
        }, "draw")
      },
      parser: {
        parse: /* @__PURE__ */ a(() => {
          throw new Error(
            "Diagrams beginning with --- are not valid. If you were trying to use a YAML front-matter, please ensure that you've correctly opened and closed the YAML front-matter with un-indented `---` blocks"
          );
        }, "parse")
      },
      init: /* @__PURE__ */ a(() => null, "init")
      // no op
    },
    (e) => e.toLowerCase().trimStart().startsWith("---")
  ), ae(di, vi, Vi), ae(
    Vt,
    bi,
    Va,
    qa,
    ia,
    fa,
    ga,
    ya,
    Ma,
    Fa,
    ea,
    Kt,
    Yt,
    fi,
    da,
    Ka,
    Ya,
    ei,
    Sa,
    Di,
    Ci,
    Aa,
    Fi,
    Yi,
    qi,
    Mi,
    Xi,
    to,
    mo,
    vo,
    wo,
    So,
    Ji,
    no,
    lo
  ));
}, "addDiagrams"), Eo = /* @__PURE__ */ a(async () => {
  p.debug("Loading registered diagrams");
  let r = (await Promise.allSettled(
    Object.entries(te).map(async ([t, { detector: i, loader: o }]) => {
      if (o)
        try {
          ie(t);
        } catch {
          try {
            let { diagram: n, id: s } = await o();
            Q(s, n, i);
          } catch (n) {
            throw p.error(`Failed to load external diagram with key ${t}. Removing from detectors.`), delete te[t], n;
          }
        }
    })
  )).filter((t) => t.status === "rejected");
  if (r.length > 0) {
    p.error(`Failed to load ${r.length} external diagrams`);
    for (let t of r)
      p.error(t);
    throw new Error(`Failed to load ${r.length} external diagrams`);
  }
}, "loadRegisteredDiagrams"), Do = "graphics-document document";
function vt(e, r) {
  e.attr("role", Do), r !== "" && e.attr("aria-roledescription", r);
}
a(vt, "setA11yDiagramInfo");
function ht(e, r, t, i) {
  if (e.insert !== void 0) {
    if (t) {
      let o = `chart-desc-${i}`;
      e.attr("aria-describedby", o), e.insert("desc", ":first-child").attr("id", o).text(t);
    }
    if (r) {
      let o = `chart-title-${i}`;
      e.attr("aria-labelledby", o), e.insert("title", ":first-child").attr("id", o).text(r);
    }
  }
}
a(ht, "addSVGa11yTitleDescription");
var N, Le = (N = class {
  constructor(r, t, i, o, n) {
    this.type = r, this.text = t, this.db = i, this.parser = o, this.renderer = n;
  }
  static async fromText(r, t = {}) {
    let i = V(), o = Se(r, i);
    r = rr(r) + `
`;
    try {
      ie(o);
    } catch {
      let f = je(o);
      if (!f)
        throw new We(`Diagram ${o} not found.`);
      let { id: g, diagram: u } = await f();
      Q(g, u);
    }
    let { db: n, parser: s, renderer: d, init: c } = ie(o);
    return s.parser && (s.parser.yy = n), n.clear?.(), c?.(i), t.title && n.setDiagramTitle?.(t.title), await s.parse(r), new N(o, r, n, s, d);
  }
  async render(r, t) {
    await this.renderer.draw(this.text, r, t, this);
  }
  getParser() {
    return this.parser;
  }
  getType() {
    return this.type;
  }
}, a(N, "Diagram"), N), Lr = [], To = /* @__PURE__ */ a(() => {
  Lr.forEach((e) => {
    e();
  }), Lr = [];
}, "attachFunctions"), Ao = /* @__PURE__ */ a((e) => e.replace(/^\s*%%(?!{)[^\n]+\n?/gm, "").trimStart(), "cleanupComments");
function yt(e) {
  let r = e.match(Ye);
  if (!r)
    return {
      text: e,
      metadata: {}
    };
  let t = r[1], i = t ? r[2].split(`
`).map((s) => s.startsWith(t) ? s.slice(t.length) : s).join(`
`) : r[2], o = or(i, {
    // To support config, we need JSON schema.
    // https://www.yaml.org/spec/1.2/spec.html#id2803231
    schema: ir
  }) ?? {};
  o = typeof o == "object" && !Array.isArray(o) ? o : {};
  let n = {};
  return o.displayMode && (n.displayMode = o.displayMode.toString()), o.title && (n.title = o.title.toString()), o.config && (n.config = o.config), {
    text: e.slice(r[0].length),
    metadata: n
  };
}
a(yt, "extractFrontMatter");
var Co = /* @__PURE__ */ a((e) => e.replace(/\r\n?/g, `
`).replace(
  /<(\w+)([^>]*)>/g,
  (r, t, i) => "<" + t + i.replace(/="([^"]*)"/g, "='$1'") + ">"
), "cleanupText"), Lo = /* @__PURE__ */ a((e) => {
  let { text: r, metadata: t } = yt(e), { displayMode: i, title: o, config: n = {} } = t;
  return i && (n.gantt || (n.gantt = {}), n.gantt.displayMode = i), { title: o, config: n, text: r };
}, "processFrontmatter"), ko = /* @__PURE__ */ a((e) => {
  let r = U.detectInit(e) ?? {}, t = U.detectDirective(e, "wrap");
  return Array.isArray(t) ? r.wrap = t.some(({ type: i }) => i === "wrap") : t?.type === "wrap" && (r.wrap = !0), {
    text: Je(e),
    directive: r
  };
}, "processDirectives");
function Me(e) {
  let r = Co(e), t = Lo(r), i = ko(t.text), o = er(t.config, i.directive);
  return e = Ao(i.text), {
    code: e,
    title: t.title,
    config: o
  };
}
a(Me, "preprocessDiagram");
function wt(e) {
  let r = new TextEncoder().encode(e), t = Array.from(r, (i) => String.fromCodePoint(i)).join("");
  return btoa(t);
}
a(wt, "toBase64");
var Mo = 5e4, Ro = "graph TB;a[Maximum text size in diagram exceeded];style a fill:#faa", _o = "sandbox", Io = "loose", Fo = "http://www.w3.org/2000/svg", zo = "http://www.w3.org/1999/xlink", Oo = "http://www.w3.org/1999/xhtml", $o = "100%", qo = "100%", No = "border:0;margin:0;", Po = "margin:0", Bo = "allow-top-navigation-by-user-activation allow-popups", Vo = 'The "iframe" tag is not supported by your browser.', Uo = ["foreignobject"], Ho = ["dominant-baseline"];
function Re(e) {
  let r = Me(e);
  return K(), He(r.config ?? {}), r;
}
a(Re, "processAndSetConfigs");
async function bt(e, r) {
  he();
  try {
    let { code: t, config: i } = Re(e);
    return { diagramType: (await St(t)).type, config: i };
  } catch (t) {
    if (r?.suppressErrors)
      return !1;
    throw t;
  }
}
a(bt, "parse");
var kr = /* @__PURE__ */ a((e, r, t = []) => {
  let i = qe(`{ ${t.join(" !important; ")} !important; }`);
  return `.${e} ${r} ${i}`;
}, "cssImportantStyles"), Go = /* @__PURE__ */ a((e, r = /* @__PURE__ */ new Map()) => {
  let t = new CSSStyleSheet();
  if (e.fontFamily !== void 0 && t.insertRule(
    `:root { --mermaid-font-family: ${e.fontFamily}}`,
    t.cssRules.length
  ), e.altFontFamily !== void 0 && t.insertRule(
    `:root { --mermaid-alt-font-family: ${e.altFontFamily}}`,
    t.cssRules.length
  ), r instanceof Map) {
    let d = Ge(e) ? ["> *", "span"] : ["rect", "polygon", "ellipse", "circle", "path"];
    r.forEach((c) => {
      De(c.styles) || d.forEach((f) => {
        t.insertRule(
          kr(c.id, f, c.styles),
          t.cssRules.length
        );
      }), De(c.textStyles) || t.insertRule(
        kr(
          c.id,
          "tspan",
          (c?.textStyles || []).map((f) => f.replace("color", "fill"))
        ),
        t.cssRules.length
      );
    });
  }
  let i = "";
  if (e.themeCSS !== void 0)
    if (typeof t.replaceSync == "function") {
      let o = new CSSStyleSheet();
      o.replaceSync(e.themeCSS), i = Ee(o) + `
`;
    } else
      i += `${e.themeCSS}
`;
  return i + Ee(t);
}, "createCssStyles"), Yo = /* @__PURE__ */ a((e, r) => ge(
  Dr(`${e}{${r}}`),
  Ar([
    /* @__PURE__ */ a(function(i, o, n, s) {
      if (i.type === "rule" && Array.isArray(i.props)) {
        if (i.parent && i.parent.type === Z)
          return;
        i.props = i.props.map((d) => d === e && Array.isArray(i.children) && i.children.every((f) => f.type !== "decl" ? !1 : (/* @__PURE__ */ new Set([
          "font-family",
          "font-size",
          "fill"
        ])).has(f.props)) || // If the prop already starts with the namespace followed by a space or >, then it's already namespaced.
        (d.startsWith(`${e} `) || d.startsWith(`${e}>`)) && // Column combinators are not yet widely supported, it's not yet compressed to `${namespace}||`,
        // so we need to add an extra check for that
        !d.startsWith(`${e} ||`) ? d : `${e} ${d}`);
      } else i.type.startsWith("@") && ([
        ...[
          sr,
          cr,
          se,
          ur,
          "@container",
          "@starting-style"
        ],
        Z
        // needed for Mermaid's animation feature
      ].includes(i.type) || (p.warn(`Removing unsupported at-rule ${i.type} from CSS`), i.type = H));
    }, "addNamespace"),
    Tr
  ])
), "compileCSS"), Wo = /* @__PURE__ */ a((e, r, t, i) => {
  let o = Go(e, t), n = Ke(
    r,
    o,
    { ...e.themeVariables, theme: e.theme, look: e.look },
    i
  );
  return Yo(i, n);
}, "createUserStyles"), jo = /* @__PURE__ */ a((e = "", r, t) => {
  let i = e;
  return !t && !r && (i = i.replace(
    /marker-end="url\([\d+./:=?A-Za-z-]*?#/g,
    'marker-end="url(#'
  )), i = tr(i), i = i.replace(/<br>/g, "<br/>"), i;
}, "cleanUpSvgCode"), Xo = /* @__PURE__ */ a((e = "", r) => {
  let t = r?.viewBox?.baseVal?.height ? r.viewBox.baseVal.height + "px" : qo, i = wt(`<body style="${Po}">${e}</body>`);
  return `<iframe style="width:${$o};height:${t};${No}" src="data:text/html;charset=UTF-8;base64,${i}" sandbox="${Bo}">
  ${Vo}
</iframe>`;
}, "putIntoIFrame"), Mr = /* @__PURE__ */ a((e, r, t, i, o) => {
  let n = e.append("div");
  n.attr("id", t), i && n.attr("style", i);
  let s = n.append("svg").attr("id", r).attr("width", "100%").attr("xmlns", Fo);
  return o && s.attr("xmlns:xlink", o), s.append("g"), e;
}, "appendDivSvgG");
function ke(e, r) {
  return e.append("iframe").attr("id", r).attr("style", "width: 100%; height: 100%;").attr("sandbox", "");
}
a(ke, "sandboxedIframe");
var Ko = /* @__PURE__ */ a((e, r, t, i) => {
  e.getElementById(r)?.remove(), e.getElementById(t)?.remove(), e.getElementById(i)?.remove();
}, "removeExistingElements"), Qo = /* @__PURE__ */ a(async function(e, r, t) {
  he();
  let i = Re(r);
  r = i.code;
  let o = V();
  p.debug(o), r.length > (o?.maxTextSize ?? Mo) && (r = Ro);
  let n = `#${e}`, s = "i" + e, d = "#" + s, c = "d" + e, f = "#" + c, g = /* @__PURE__ */ a(() => {
    let X = _(w ? d : f).node();
    X && "remove" in X && X.remove();
  }, "removeTempElements"), u = _(document.body), w = o.securityLevel === _o, A = o.securityLevel === Io, C = o.fontFamily;
  if (t !== void 0) {
    if (t && (t.innerHTML = ""), w) {
      let y = ke(_(t), s);
      u = _(y.nodes()[0].contentDocument.body), u.node().style.margin = "0";
    } else
      u = _(t);
    Mr(u, e, c, `font-family: ${C}`, zo);
  } else {
    if (Ko(document, e, c, s), w) {
      let y = ke(_(document.body), s);
      u = _(y.nodes()[0].contentDocument.body), u.node().style.margin = "0";
    } else
      u = _("body");
    Mr(u, e, c);
  }
  let m, R;
  try {
    m = await Le.fromText(r, { title: i.title });
  } catch (y) {
    if (o.suppressErrorRendering)
      throw g(), y;
    m = await Le.fromText("error"), R = y;
  }
  let L = u.select(f).node(), b = m.type, v = L.firstChild, k = v.firstChild, B = m.renderer.getClasses?.(r, m), M = Wo(o, b, B, n), S = document.createElement("style");
  S.innerHTML = M, v.insertBefore(S, k);
  try {
    await m.renderer.draw(r, e, "11.17.2", m);
  } catch (y) {
    throw o.suppressErrorRendering ? g() : ti.draw(r, e, "11.17.2"), y;
  }
  let l = u.select(`${f} svg`), Ft = m.db.getAccTitle?.(), zt = m.db.getAccDescription?.();
  Et(b, l, Ft, zt);
  let Ot = (/* @__PURE__ */ a(() => {
    u.select(`[id="${e}"]`).selectAll("foreignobject > *").attr("xmlns", Oo);
    let y = u.select(f).node().innerHTML;
    if (p.debug("config.arrowMarkerAbsolute", o.arrowMarkerAbsolute), y = jo(y, w, Ne(o.arrowMarkerAbsolute)), w) {
      let X = u.select(f + " svg").node();
      y = Xo(y, X);
    } else A || (y = Oe.sanitize(y, {
      ADD_TAGS: Uo,
      ADD_ATTR: Ho,
      HTML_INTEGRATION_POINTS: { foreignobject: !0 }
    }));
    return To(), y;
  }, "serializeSvg"))();
  if (R)
    throw R;
  return g(), {
    diagramType: b,
    svg: Ot,
    bindFunctions: m.db.bindFunctions
  };
}, "render");
function xt(e = {}) {
  let r = $e({}, e);
  r?.fontFamily && !r.themeVariables?.fontFamily && (r.themeVariables || (r.themeVariables = {}), r.themeVariables.fontFamily = r.fontFamily), Be(r), r?.theme && r.theme in re ? r.themeVariables = re[r.theme].getThemeVariables(
    r.themeVariables
  ) : r && (r.themeVariables = re.default.getThemeVariables(r.themeVariables));
  let t = typeof r == "object" ? Pe(r) : xe();
  we(t.logLevel), he();
}
a(xt, "initialize");
var St = /* @__PURE__ */ a((e, r = {}) => {
  let { code: t } = Me(e);
  return Le.fromText(t, r);
}, "getDiagramFromText");
function Et(e, r, t, i) {
  vt(r, e), ht(r, t, i, r.attr("id"));
}
a(Et, "addA11yInfo");
var P = Object.freeze({
  render: Qo,
  parse: bt,
  getDiagramFromText: St,
  initialize: xt,
  getConfig: V,
  /**
   * @deprecated This function does nothing. It will be overwritten by the next
   *             call to {@link render} or {@link parse}.
   */
  setConfig: Ue,
  getSiteConfig: xe,
  updateSiteConfig: Ve,
  reset: /* @__PURE__ */ a(() => {
    K();
  }, "reset"),
  globalReset: /* @__PURE__ */ a(() => {
    K(be);
  }, "globalReset"),
  defaultConfig: be
});
we(V().logLevel);
K(V());
var Zo = /* @__PURE__ */ a((e, r, t) => {
  p.warn(e), Te(e) ? (t && t(e.str, e.hash), r.push({ ...e, message: e.str, error: e })) : (t && t(e), e instanceof Error && r.push({
    str: e.message,
    message: e.message,
    hash: e.name,
    error: e
  }));
}, "handleError"), Dt = /* @__PURE__ */ a(async function(e = {
  querySelector: ".mermaid"
}) {
  try {
    await Jo(e);
  } catch (r) {
    if (Te(r) && p.error(r.str), O.parseError && O.parseError(r), !e.suppressErrors)
      throw p.error("Use the suppressErrors option to suppress these errors"), r;
  }
}, "run"), Jo = /* @__PURE__ */ a(async function({ postRenderCallback: e, querySelector: r, nodes: t } = {
  querySelector: ".mermaid"
}) {
  let i = P.getConfig();
  p.debug(`${e ? "" : "No "}Callback function found`);
  let o;
  if (t)
    o = t;
  else if (r)
    o = document.querySelectorAll(r);
  else
    throw new Error("Nodes and querySelector are both undefined");
  p.debug(`Found ${o.length} diagrams`), i?.startOnLoad !== void 0 && (p.debug("Start On Load: " + i?.startOnLoad), P.updateSiteConfig({ startOnLoad: i?.startOnLoad }));
  let n = new U.InitIDGenerator(i.deterministicIds, i.deterministicIDSeed), s, d = [];
  for (let c of Array.from(o)) {
    if (p.info("Rendering diagram: " + c.id), c.getAttribute("data-processed"))
      continue;
    c.setAttribute("data-processed", "true");
    let f = `mermaid-${n.next()}`;
    s = c.innerHTML, s = ar(U.entityDecode(s)).trim().replace(/<br\s*\/?>/gi, "<br/>");
    let g = U.detectInit(s);
    g && p.debug("Detected early reinit: ", g);
    try {
      let { svg: u, bindFunctions: w } = await Lt(f, s, c);
      c.innerHTML = u, e && await e(f), w && w(c);
    } catch (u) {
      Zo(u, d, O.parseError);
    }
  }
  if (d.length > 0)
    throw d[0];
}, "runThrowsErrors"), Tt = /* @__PURE__ */ a(function(e) {
  P.initialize(e);
}, "initialize"), en = /* @__PURE__ */ a(async function(e, r, t) {
  p.warn("mermaid.init is deprecated. Please use run instead."), e && Tt(e);
  let i = { postRenderCallback: t, querySelector: ".mermaid" };
  typeof r == "string" ? i.querySelector = r : r && (r instanceof HTMLElement ? i.nodes = [r] : i.nodes = r), await Dt(i);
}, "init"), rn = /* @__PURE__ */ a(async (e, {
  lazyLoad: r = !0
} = {}) => {
  he(), ae(...e), r === !1 && await Eo();
}, "registerExternalDiagrams"), At = /* @__PURE__ */ a(function() {
  if (O.startOnLoad) {
    let { startOnLoad: e } = P.getConfig();
    e && O.run().catch((r) => p.error("Mermaid failed to initialize", r));
  }
}, "contentLoaded");
typeof document < "u" && window.addEventListener("load", At, !1);
var tn = /* @__PURE__ */ a(function(e) {
  O.parseError = e;
}, "setParseErrorHandler"), ve = [], Ce = !1, Ct = /* @__PURE__ */ a(async () => {
  if (!Ce) {
    for (Ce = !0; ve.length > 0; ) {
      let e = ve.shift();
      if (e)
        try {
          await e();
        } catch (r) {
          p.error("Error executing queue", r);
        }
    }
    Ce = !1;
  }
}, "executeQueue"), an = /* @__PURE__ */ a(async (e, r) => new Promise((t, i) => {
  let o = /* @__PURE__ */ a(() => new Promise((n, s) => {
    P.parse(e, r).then(
      (d) => {
        n(d), t(d);
      },
      (d) => {
        p.error("Error parsing", d), O.parseError?.(d), s(d), i(d);
      }
    );
  }), "performCall");
  ve.push(o), Ct().catch(i);
}), "parse"), Lt = /* @__PURE__ */ a((e, r, t) => new Promise((i, o) => {
  let n = /* @__PURE__ */ a(() => new Promise((s, d) => {
    P.render(e, r, t).then(
      (c) => {
        s(c), i(c);
      },
      (c) => {
        p.error("Error parsing", c), O.parseError?.(c), d(c), o(c);
      }
    );
  }), "performCall");
  ve.push(n), Ct().catch(o);
}), "render"), on = /* @__PURE__ */ a(() => Object.keys(te).map((e) => ({
  id: e
})), "getRegisteredDiagramsMetadata"), O = {
  startOnLoad: !0,
  mermaidAPI: P,
  parse: an,
  render: Lt,
  init: en,
  run: Dt,
  registerExternalDiagrams: rn,
  registerLayoutLoaders: nr,
  initialize: Tt,
  parseError: void 0,
  contentLoaded: At,
  setParseErrorHandler: tn,
  detectType: Se,
  registerIconPacks: Ze,
  getRegisteredDiagramsMetadata: on
}, _e = O;

// sequence-view.js
_e.initialize({
  startOnLoad: !1,
  securityLevel: "strict",
  theme: "base",
  suppressErrorRendering: !0,
  fontFamily: "-apple-system, BlinkMacSystemFont, Segoe UI, sans-serif",
  themeVariables: {
    primaryColor: "#edf4ef",
    primaryTextColor: "#263d34",
    primaryBorderColor: "#c4d4ca",
    lineColor: "#8a9c91",
    secondaryColor: "#f5f6f1",
    tertiaryColor: "#ffffff",
    actorBkg: "#edf4ef",
    actorBorder: "#c4d4ca",
    actorTextColor: "#263d34",
    actorLineColor: "#d4ded5",
    signalColor: "#6d8b7b",
    signalTextColor: "#465a4e",
    labelBoxBkgColor: "#eef3ec",
    labelBoxBorderColor: "#c4d4ca",
    labelTextColor: "#466251",
    loopTextColor: "#466251",
    noteBkgColor: "#f7f5e9",
    noteBorderColor: "#dfdac0",
    noteTextColor: "#615a3d",
    activationBkgColor: "#e6efe8",
    fontSize: "14px"
  },
  sequence: {
    useMaxWidth: !1,
    mirrorActors: !1,
    showSequenceNumbers: !1,
    diagramMarginX: 28,
    diagramMarginY: 24,
    actorMargin: 22,
    width: 138,
    height: 58,
    boxMargin: 12,
    boxTextMargin: 8,
    noteMargin: 16,
    messageMargin: 30,
    wrap: !0,
    wrapPadding: 12,
    actorFontSize: 15,
    noteFontSize: 15,
    messageFontSize: 14
  }
});
var T = document.getElementById("sequenceDiagram"), $ = document.querySelector(".sequence-viewport"), Ie = 0, nn = 0, kt = "", ze = null, Rt = !1, Fe = !1;
function ye() {
  let e = T.querySelector("svg");
  if (!e) return;
  let r = e.viewBox.baseVal.width, t = e.viewBox.baseVal.height, i = Math.min(1, ($.clientWidth - 48) / r), o = ze ?? (Rt || $.clientWidth >= 600 ? i : 0.85);
  e.style.width = `${r * o}px`, e.style.height = `${t * o}px`, document.getElementById("zoomLabel").textContent = `${Math.round(o * 100)}%`;
}
function Mt(e, r, t) {
  e.setAttribute("tabindex", "0"), e.setAttribute("role", "button"), e.setAttribute("aria-label", `\u7F16\u8F91 ${e.textContent.trim()}`), e.classList.add("sequence-link"), e.dataset[t === void 0 ? "sequenceNode" : "sequenceLeaf"] = t === void 0 ? r : `${r}:${t}`;
  let i = () => window.RouteWorkspace.select(r, t, e);
  e.addEventListener("click", i), e.addEventListener("keydown", (o) => {
    (o.key === "Enter" || o.key === " ") && (o.preventDefault(), i());
  });
}
function sn(e) {
  e.querySelectorAll("rect.actor").forEach((r) => {
    r.setAttribute("rx", "8"), r.setAttribute("ry", "8");
  }), e.querySelectorAll(".labelText").forEach((r) => {
    let t = { loop: "\u5FAA\u73AF", alt: "\u5206\u652F", break: "\u9000\u51FA" }[r.textContent.trim()];
    t && (r.textContent = t);
  }), e.querySelectorAll("text.actor").forEach((r) => {
    let t = r.textContent.match(/^0([1-6])\s*·/);
    t && Mt(r.parentElement, Number(t[1]) - 1);
  }), e.querySelectorAll("text.noteText").forEach((r) => {
    let t = r.textContent.match(/^0([1-6])\.(\d+)\s*·/);
    t && Mt(r.parentElement, Number(t[1]) - 1, Number(t[2]) - 1);
  }), e.removeAttribute("role"), e.setAttribute("aria-label", "\u4EA4\u6613\u8DEF\u7EBF\uFF1A\u70B9\u51FB\u5927\u8282\u70B9\u6216\u8FB9\u754C\u6761\u4EF6\u7F16\u8F91"), _t();
}
function _t() {
  let e = window.RouteWorkspace.snapshot();
  T.querySelectorAll("[data-sequence-node]").forEach((r) => {
    let t = Number(r.dataset.sequenceNode) === e.selected;
    r.classList.toggle("is-selected", t), r.setAttribute("aria-pressed", String(t));
  }), T.querySelectorAll("[data-sequence-leaf]").forEach((r) => {
    let [t, i] = r.dataset.sequenceLeaf.split(":").map(Number);
    r.dataset.status = e.nodes[t].rules[i][2], r.classList.toggle("is-selected", t === e.selected && i === e.leaf);
  });
}
async function It() {
  if (Ie += 1, !Fe) {
    Fe = !0;
    try {
      for (; ; ) {
        let e = Ie, r = window.RouteWorkspace.snapshot(), t = window.RouteDiagram.source(r.nodes, r);
        if (t === kt) {
          _t();
          break;
        }
        T.setAttribute("aria-busy", "true");
        let { svg: i } = await _e.render(`routeSequence${++nn}`, t);
        if (e !== Ie) continue;
        let o = { top: $.scrollTop, left: $.scrollLeft }, n = document.activeElement, s = T.contains(n) ? { node: n.dataset.sequenceNode, leaf: n.dataset.sequenceLeaf } : null;
        T.innerHTML = i, kt = t, sn(T.querySelector("svg")), ye(), $.scrollTop = o.top, $.scrollLeft = o.left, s?.node !== void 0 ? T.querySelector(`[data-sequence-node="${s.node}"]`)?.focus({ preventScroll: !0 }) : s?.leaf !== void 0 && T.querySelector(`[data-sequence-leaf="${s.leaf}"]`)?.focus({ preventScroll: !0 }), T.setAttribute("aria-busy", "false");
        break;
      }
    } catch (e) {
      console.error("Sequence diagram failed", e), T.textContent = "\u8DEF\u7EBF\u56FE\u6682\u65F6\u65E0\u6CD5\u663E\u793A\uFF0C\u8BF7\u5237\u65B0\u9875\u9762\u91CD\u8BD5\u3002\u4E0A\u65B9\u8282\u70B9\u4ECD\u53EF\u7F16\u8F91\u3002", T.setAttribute("aria-busy", "false");
    } finally {
      Fe = !1;
    }
  }
}
document.addEventListener("route:change", It);
for (let [e, r] of [["zoomIn", 0.15], ["zoomOut", -0.15]])
  document.getElementById(e).addEventListener("click", () => {
    let t = Number.parseInt(document.getElementById("zoomLabel").textContent, 10) / 100;
    ze = Math.min(1.6, Math.max(0.5, t + r)), ye();
  });
document.getElementById("zoomFit").addEventListener("click", () => {
  ze = null, Rt = !0, ye(), $.scrollTo(0, 0);
});
new ResizeObserver(ye).observe($);
It();
/*! For license information please see sequence-view.js.LEGAL.txt */
