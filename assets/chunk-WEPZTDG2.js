import {
  a as i
} from "./chunk-LEOT2I4D.js";

// node_modules/@mermaid-js/parser/dist/mermaid-parser.core.mjs
var o = {}, l = {
  info: /* @__PURE__ */ i(async () => {
    let { createInfoServices: r } = await import("./info-A6RAGUB7-4EWX346E.js"), e = r().Info.parser.LangiumParser;
    o.info = e;
  }, "info"),
  packet: /* @__PURE__ */ i(async () => {
    let { createPacketServices: r } = await import("./packet-AYTQ26CC-B6AO3LSY.js"), e = r().Packet.parser.LangiumParser;
    o.packet = e;
  }, "packet"),
  pie: /* @__PURE__ */ i(async () => {
    let { createPieServices: r } = await import("./pie-WAS4IAKB-7LAVOEEF.js"), e = r().Pie.parser.LangiumParser;
    o.pie = e;
  }, "pie"),
  treeView: /* @__PURE__ */ i(async () => {
    let { createTreeViewServices: r } = await import("./treeView-Q6P3EWNA-GE47ZTVG.js"), e = r().TreeView.parser.LangiumParser;
    o.treeView = e;
  }, "treeView"),
  architecture: /* @__PURE__ */ i(async () => {
    let { createArchitectureServices: r } = await import("./architecture-7GRP2DOG-RERLDEHQ.js"), e = r().Architecture.parser.LangiumParser;
    o.architecture = e;
  }, "architecture"),
  gitGraph: /* @__PURE__ */ i(async () => {
    let { createGitGraphServices: r } = await import("./gitGraph-4MIJSDKK-EF4WHMXR.js"), e = r().GitGraph.parser.LangiumParser;
    o.gitGraph = e;
  }, "gitGraph"),
  eventmodeling: /* @__PURE__ */ i(async () => {
    let { createEventModelingServices: r } = await import("./eventmodeling-NTZA5JFV-BZH2MLB6.js"), e = r().EventModel.parser.LangiumParser;
    o.eventmodeling = e;
  }, "eventmodeling"),
  radar: /* @__PURE__ */ i(async () => {
    let { createRadarServices: r } = await import("./radar-RG4KPBEZ-PQZPXD3K.js"), e = r().Radar.parser.LangiumParser;
    o.radar = e;
  }, "radar"),
  railroad: /* @__PURE__ */ i(async () => {
    let { createRailroadServices: r } = await import("./railroad-74A4TZTK-6AJIGVJN.js"), e = r().Railroad.parser.LangiumParser;
    o.railroad = e;
  }, "railroad"),
  railroadEbnf: /* @__PURE__ */ i(async () => {
    let { createRailroadEbnfServices: r } = await import("./railroad-ebnf-LZEXJU2U-JICBDPJQ.js"), e = r().RailroadEbnf.parser.LangiumParser;
    o.railroadEbnf = e;
  }, "railroadEbnf"),
  railroadAbnf: /* @__PURE__ */ i(async () => {
    let { createRailroadAbnfServices: r } = await import("./railroad-abnf-HS5TGJTU-HLGBY7L3.js"), e = r().RailroadAbnf.parser.LangiumParser;
    o.railroadAbnf = e;
  }, "railroadAbnf"),
  railroadPeg: /* @__PURE__ */ i(async () => {
    let { createRailroadPegServices: r } = await import("./railroad-peg-WCYAUIDC-ZSQ3JYIA.js"), e = r().RailroadPeg.parser.LangiumParser;
    o.railroadPeg = e;
  }, "railroadPeg"),
  treemap: /* @__PURE__ */ i(async () => {
    let { createTreemapServices: r } = await import("./treemap-WGGIJYW6-3CB3LH7J.js"), e = r().Treemap.parser.LangiumParser;
    o.treemap = e;
  }, "treemap"),
  wardley: /* @__PURE__ */ i(async () => {
    let { createWardleyServices: r } = await import("./wardley-WFR3VGLG-P2IIHHS2.js"), e = r().Wardley.parser.LangiumParser;
    o.wardley = e;
  }, "wardley"),
  cynefin: /* @__PURE__ */ i(async () => {
    let { createCynefinServices: r } = await import("./cynefin-OW5HDTMX-7CRUCR6R.js"), e = r().Cynefin.parser.LangiumParser;
    o.cynefin = e;
  }, "cynefin")
};
async function m(r, e) {
  let n = l[r];
  if (!n)
    throw new Error(`Unknown diagram type: ${r}`);
  o[r] || await n();
  let a = o[r].parse(e);
  if (a.lexerErrors.length > 0 || a.parserErrors.length > 0)
    throw new p(a);
  return a.value;
}
i(m, "parse");
var t, p = (t = class extends Error {
  constructor(e) {
    let n = e.lexerErrors.map((a) => {
      let s = a.line !== void 0 && !isNaN(a.line) ? a.line : "?", c = a.column !== void 0 && !isNaN(a.column) ? a.column : "?";
      return `Lexer error on line ${s}, column ${c}: ${a.message}`;
    }).join(`
`), d = e.parserErrors.map((a) => {
      let s = a.token.startLine !== void 0 && !isNaN(a.token.startLine) ? a.token.startLine : "?", c = a.token.startColumn !== void 0 && !isNaN(a.token.startColumn) ? a.token.startColumn : "?";
      return `Parse error on line ${s}, column ${c}: ${a.message}`;
    }).join(`
`);
    super(`Parsing failed: ${n} ${d}`), this.result = e;
  }
}, i(t, "MermaidParseError"), t);

export {
  m as a,
  p as b
};
