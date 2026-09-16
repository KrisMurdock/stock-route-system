import {
  a as o,
  b as c,
  c as v,
  d as s,
  e as u,
  g as E,
  j as m,
  x as S,
  y
} from "./chunk-LEOT2I4D.js";

// node_modules/@mermaid-js/parser/dist/chunks/mermaid-parser.core/chunk-6EIED4P4.mjs
var r, w = (r = class extends y {
  constructor() {
    super(["eventmodeling"]);
  }
}, o(r, "EventModelingTokenBuilder"), r), h = /* @__PURE__ */ new Set(["cmd", "command"]), M = /* @__PURE__ */ new Set(["evt", "event"]), l = /* @__PURE__ */ new Set(["rmo", "readmodel"]), T = /* @__PURE__ */ new Set(["pcr", "processor"]), g = /* @__PURE__ */ new Set(["ui"]);
function p(n) {
  let e = n.validation.EventModelingValidator, t = n.validation.ValidationRegistry;
  if (t) {
    let a = {
      EmTimeFrame: e.checkSourceFrameTypes.bind(e),
      EmResetFrame: e.checkSourceFrameTypes.bind(e)
    };
    t.register(a, e);
  }
}
o(p, "registerValidationChecks");
var i, F = (i = class {
  checkSourceFrameTypes(e, t) {
    e.sourceFrames.length !== 0 && (h.has(e.modelEntityType) ? this.validateSources(
      e,
      /* @__PURE__ */ new Set([...g, ...T]),
      "command",
      "ui or processor",
      t
    ) : M.has(e.modelEntityType) ? this.validateSources(e, h, "event", "command", t) : l.has(e.modelEntityType) ? this.validateSources(e, M, "read model", "event", t) : T.has(e.modelEntityType) ? this.validateSources(e, l, "processor", "read model", t) : g.has(e.modelEntityType) && this.validateSources(e, l, "ui", "read model", t));
  }
  validateSources(e, t, a, V, k) {
    for (let C of e.sourceFrames) {
      let d = C.ref;
      d !== void 0 && !t.has(d.modelEntityType) && k(
        "error",
        `A ${a} can only receive input from a ${V}, not from '${d.modelEntityType}'.`,
        { node: e, property: "sourceFrames" }
      );
    }
  }
}, o(i, "EventModelingValidator"), i), f = {
  parser: {
    TokenBuilder: /* @__PURE__ */ o(() => new w(), "TokenBuilder"),
    ValueConverter: /* @__PURE__ */ o(() => new S(), "ValueConverter")
  },
  validation: {
    EventModelingValidator: /* @__PURE__ */ o(() => new F(), "EventModelingValidator")
  }
};
function _(n = u) {
  let e = s(
    v(n),
    E
  ), t = s(
    c({ shared: e }),
    m,
    f
  );
  return e.ServiceRegistry.register(t), p(t), { shared: e, EventModel: t };
}
o(_, "createEventModelingServices");

export {
  f as a,
  _ as b
};
