import MZ, { memo as Cc, useState as YZ, useRef as r, useCallback as Rl, useEffect as mZ, createContext as Li, useContext as ol, forwardRef as RI, useMemo as pI, useImperativeHandle as Gi, useLayoutEffect as Yi } from "react";
var el = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {};
function Vi(Z) {
  return Z && Z.__esModule && Object.prototype.hasOwnProperty.call(Z, "default") ? Z.default : Z;
}
var Yc = { exports: {} }, Ol = {};
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Hc;
function ui() {
  if (Hc)
    return Ol;
  Hc = 1;
  var Z = MZ, l = Symbol.for("react.element"), m = Symbol.for("react.fragment"), c = Object.prototype.hasOwnProperty, I = Z.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, i = { key: !0, ref: !0, __self: !0, __source: !0 };
  function b(W, X, d) {
    var y, G = {}, V = null, u = null;
    d !== void 0 && (V = "" + d), X.key !== void 0 && (V = "" + X.key), X.ref !== void 0 && (u = X.ref);
    for (y in X)
      c.call(X, y) && !i.hasOwnProperty(y) && (G[y] = X[y]);
    if (W && W.defaultProps)
      for (y in X = W.defaultProps, X)
        G[y] === void 0 && (G[y] = X[y]);
    return { $$typeof: l, type: W, key: V, ref: u, props: G, _owner: I.current };
  }
  return Ol.Fragment = m, Ol.jsx = b, Ol.jsxs = b, Ol;
}
var Bl = {};
/**
 * @license React
 * react-jsx-runtime.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Tc;
function Ji() {
  return Tc || (Tc = 1, process.env.NODE_ENV !== "production" && function() {
    var Z = MZ, l = Symbol.for("react.element"), m = Symbol.for("react.portal"), c = Symbol.for("react.fragment"), I = Symbol.for("react.strict_mode"), i = Symbol.for("react.profiler"), b = Symbol.for("react.provider"), W = Symbol.for("react.context"), X = Symbol.for("react.forward_ref"), d = Symbol.for("react.suspense"), y = Symbol.for("react.suspense_list"), G = Symbol.for("react.memo"), V = Symbol.for("react.lazy"), u = Symbol.for("react.offscreen"), p = Symbol.iterator, M = "@@iterator";
    function s(L) {
      if (L === null || typeof L != "object")
        return null;
      var F = p && L[p] || L[M];
      return typeof F == "function" ? F : null;
    }
    var S = Z.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
    function N(L) {
      {
        for (var F = arguments.length, x = new Array(F > 1 ? F - 1 : 0), Q = 1; Q < F; Q++)
          x[Q - 1] = arguments[Q];
        J("error", L, x);
      }
    }
    function J(L, F, x) {
      {
        var Q = S.ReactDebugCurrentFrame, ZZ = Q.getStackAddendum();
        ZZ !== "" && (F += "%s", x = x.concat([ZZ]));
        var bZ = x.map(function(f) {
          return String(f);
        });
        bZ.unshift("Warning: " + F), Function.prototype.apply.call(console[L], console, bZ);
      }
    }
    var o = !1, t = !1, H = !1, R = !1, w = !1, C;
    C = Symbol.for("react.module.reference");
    function j(L) {
      return !!(typeof L == "string" || typeof L == "function" || L === c || L === i || w || L === I || L === d || L === y || R || L === u || o || t || H || typeof L == "object" && L !== null && (L.$$typeof === V || L.$$typeof === G || L.$$typeof === b || L.$$typeof === W || L.$$typeof === X || // This needs to include all possible module reference object
      // types supported by any Flight configuration anywhere since
      // we don't know which Flight build this will end up being used
      // with.
      L.$$typeof === C || L.getModuleId !== void 0));
    }
    function U(L, F, x) {
      var Q = L.displayName;
      if (Q)
        return Q;
      var ZZ = F.displayName || F.name || "";
      return ZZ !== "" ? x + "(" + ZZ + ")" : x;
    }
    function g(L) {
      return L.displayName || "Context";
    }
    function E(L) {
      if (L == null)
        return null;
      if (typeof L.tag == "number" && N("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), typeof L == "function")
        return L.displayName || L.name || null;
      if (typeof L == "string")
        return L;
      switch (L) {
        case c:
          return "Fragment";
        case m:
          return "Portal";
        case i:
          return "Profiler";
        case I:
          return "StrictMode";
        case d:
          return "Suspense";
        case y:
          return "SuspenseList";
      }
      if (typeof L == "object")
        switch (L.$$typeof) {
          case W:
            var F = L;
            return g(F) + ".Consumer";
          case b:
            var x = L;
            return g(x._context) + ".Provider";
          case X:
            return U(L, L.render, "ForwardRef");
          case G:
            var Q = L.displayName || null;
            return Q !== null ? Q : E(L.type) || "Memo";
          case V: {
            var ZZ = L, bZ = ZZ._payload, f = ZZ._init;
            try {
              return E(f(bZ));
            } catch {
              return null;
            }
          }
        }
      return null;
    }
    var z = Object.assign, k = 0, K, D, lZ, $, iZ, v, e;
    function A() {
    }
    A.__reactDisabledLog = !0;
    function XZ() {
      {
        if (k === 0) {
          K = console.log, D = console.info, lZ = console.warn, $ = console.error, iZ = console.group, v = console.groupCollapsed, e = console.groupEnd;
          var L = {
            configurable: !0,
            enumerable: !0,
            value: A,
            writable: !0
          };
          Object.defineProperties(console, {
            info: L,
            log: L,
            warn: L,
            error: L,
            group: L,
            groupCollapsed: L,
            groupEnd: L
          });
        }
        k++;
      }
    }
    function q() {
      {
        if (k--, k === 0) {
          var L = {
            configurable: !0,
            enumerable: !0,
            writable: !0
          };
          Object.defineProperties(console, {
            log: z({}, L, {
              value: K
            }),
            info: z({}, L, {
              value: D
            }),
            warn: z({}, L, {
              value: lZ
            }),
            error: z({}, L, {
              value: $
            }),
            group: z({}, L, {
              value: iZ
            }),
            groupCollapsed: z({}, L, {
              value: v
            }),
            groupEnd: z({}, L, {
              value: e
            })
          });
        }
        k < 0 && N("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
      }
    }
    var JZ = S.ReactCurrentDispatcher, B;
    function O(L, F, x) {
      {
        if (B === void 0)
          try {
            throw Error();
          } catch (ZZ) {
            var Q = ZZ.stack.trim().match(/\n( *(at )?)/);
            B = Q && Q[1] || "";
          }
        return `
` + B + L;
      }
    }
    var cZ = !1, IZ;
    {
      var BZ = typeof WeakMap == "function" ? WeakMap : Map;
      IZ = new BZ();
    }
    function kZ(L, F) {
      if (!L || cZ)
        return "";
      {
        var x = IZ.get(L);
        if (x !== void 0)
          return x;
      }
      var Q;
      cZ = !0;
      var ZZ = Error.prepareStackTrace;
      Error.prepareStackTrace = void 0;
      var bZ;
      bZ = JZ.current, JZ.current = null, XZ();
      try {
        if (F) {
          var f = function() {
            throw Error();
          };
          if (Object.defineProperty(f.prototype, "props", {
            set: function() {
              throw Error();
            }
          }), typeof Reflect == "object" && Reflect.construct) {
            try {
              Reflect.construct(f, []);
            } catch (Y) {
              Q = Y;
            }
            Reflect.construct(L, [], f);
          } else {
            try {
              f.call();
            } catch (Y) {
              Q = Y;
            }
            L.call(f.prototype);
          }
        } else {
          try {
            throw Error();
          } catch (Y) {
            Q = Y;
          }
          L();
        }
      } catch (Y) {
        if (Y && Q && typeof Y.stack == "string") {
          for (var P = Y.stack.split(`
`), SZ = Q.stack.split(`
`), GZ = P.length - 1, VZ = SZ.length - 1; GZ >= 1 && VZ >= 0 && P[GZ] !== SZ[VZ]; )
            VZ--;
          for (; GZ >= 1 && VZ >= 0; GZ--, VZ--)
            if (P[GZ] !== SZ[VZ]) {
              if (GZ !== 1 || VZ !== 1)
                do
                  if (GZ--, VZ--, VZ < 0 || P[GZ] !== SZ[VZ]) {
                    var sZ = `
` + P[GZ].replace(" at new ", " at ");
                    return L.displayName && sZ.includes("<anonymous>") && (sZ = sZ.replace("<anonymous>", L.displayName)), typeof L == "function" && IZ.set(L, sZ), sZ;
                  }
                while (GZ >= 1 && VZ >= 0);
              break;
            }
        }
      } finally {
        cZ = !1, JZ.current = bZ, q(), Error.prepareStackTrace = ZZ;
      }
      var AZ = L ? L.displayName || L.name : "", Vm = AZ ? O(AZ) : "";
      return typeof L == "function" && IZ.set(L, Vm), Vm;
    }
    function jZ(L, F, x) {
      return kZ(L, !1);
    }
    function Zl(L) {
      var F = L.prototype;
      return !!(F && F.isReactComponent);
    }
    function FZ(L, F, x) {
      if (L == null)
        return "";
      if (typeof L == "function")
        return kZ(L, Zl(L));
      if (typeof L == "string")
        return O(L);
      switch (L) {
        case d:
          return O("Suspense");
        case y:
          return O("SuspenseList");
      }
      if (typeof L == "object")
        switch (L.$$typeof) {
          case X:
            return jZ(L.render);
          case G:
            return FZ(L.type, F, x);
          case V: {
            var Q = L, ZZ = Q._payload, bZ = Q._init;
            try {
              return FZ(bZ(ZZ), F, x);
            } catch {
            }
          }
        }
      return "";
    }
    var Gl = Object.prototype.hasOwnProperty, Hl = {}, bm = S.ReactDebugCurrentFrame;
    function Yl(L) {
      if (L) {
        var F = L._owner, x = FZ(L.type, L._source, F ? F.type : null);
        bm.setExtraStackFrame(x);
      } else
        bm.setExtraStackFrame(null);
    }
    function sl(L, F, x, Q, ZZ) {
      {
        var bZ = Function.call.bind(Gl);
        for (var f in L)
          if (bZ(L, f)) {
            var P = void 0;
            try {
              if (typeof L[f] != "function") {
                var SZ = Error((Q || "React class") + ": " + x + " type `" + f + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof L[f] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                throw SZ.name = "Invariant Violation", SZ;
              }
              P = L[f](F, f, Q, x, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
            } catch (GZ) {
              P = GZ;
            }
            P && !(P instanceof Error) && (Yl(ZZ), N("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", Q || "React class", x, f, typeof P), Yl(null)), P instanceof Error && !(P.message in Hl) && (Hl[P.message] = !0, Yl(ZZ), N("Failed %s type: %s", x, P.message), Yl(null));
          }
      }
    }
    var Wm = Array.isArray;
    function Ml(L) {
      return Wm(L);
    }
    function vm(L) {
      {
        var F = typeof Symbol == "function" && Symbol.toStringTag, x = F && L[Symbol.toStringTag] || L.constructor.name || "Object";
        return x;
      }
    }
    function EZ(L) {
      try {
        return Tl(L), !1;
      } catch {
        return !0;
      }
    }
    function Tl(L) {
      return "" + L;
    }
    function Xm(L) {
      if (EZ(L))
        return N("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", vm(L)), Tl(L);
    }
    var Vl = S.ReactCurrentOwner, gl = {
      key: !0,
      ref: !0,
      __self: !0,
      __source: !0
    }, ll, Fl, ul;
    ul = {};
    function vl(L) {
      if (Gl.call(L, "ref")) {
        var F = Object.getOwnPropertyDescriptor(L, "ref").get;
        if (F && F.isReactWarning)
          return !1;
      }
      return L.ref !== void 0;
    }
    function Jl(L) {
      if (Gl.call(L, "key")) {
        var F = Object.getOwnPropertyDescriptor(L, "key").get;
        if (F && F.isReactWarning)
          return !1;
      }
      return L.key !== void 0;
    }
    function tm(L, F) {
      if (typeof L.ref == "string" && Vl.current && F && Vl.current.stateNode !== F) {
        var x = E(Vl.current.type);
        ul[x] || (N('Component "%s" contains the string ref "%s". Support for string refs will be removed in a future major release. This case cannot be automatically converted to an arrow function. We ask you to manually fix this case by using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref', E(Vl.current.type), L.ref), ul[x] = !0);
      }
    }
    function Dm(L, F) {
      {
        var x = function() {
          ll || (ll = !0, N("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", F));
        };
        x.isReactWarning = !0, Object.defineProperty(L, "key", {
          get: x,
          configurable: !0
        });
      }
    }
    function Qm(L, F) {
      {
        var x = function() {
          Fl || (Fl = !0, N("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", F));
        };
        x.isReactWarning = !0, Object.defineProperty(L, "ref", {
          get: x,
          configurable: !0
        });
      }
    }
    var em = function(L, F, x, Q, ZZ, bZ, f) {
      var P = {
        // This tag allows us to uniquely identify this as a React Element
        $$typeof: l,
        // Built-in properties that belong on the element
        type: L,
        key: F,
        ref: x,
        props: f,
        // Record the component responsible for creating this element.
        _owner: bZ
      };
      return P._store = {}, Object.defineProperty(P._store, "validated", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: !1
      }), Object.defineProperty(P, "_self", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: Q
      }), Object.defineProperty(P, "_source", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: ZZ
      }), Object.freeze && (Object.freeze(P.props), Object.freeze(P)), P;
    };
    function Om(L, F, x, Q, ZZ) {
      {
        var bZ, f = {}, P = null, SZ = null;
        x !== void 0 && (Xm(x), P = "" + x), Jl(F) && (Xm(F.key), P = "" + F.key), vl(F) && (SZ = F.ref, tm(F, ZZ));
        for (bZ in F)
          Gl.call(F, bZ) && !gl.hasOwnProperty(bZ) && (f[bZ] = F[bZ]);
        if (L && L.defaultProps) {
          var GZ = L.defaultProps;
          for (bZ in GZ)
            f[bZ] === void 0 && (f[bZ] = GZ[bZ]);
        }
        if (P || SZ) {
          var VZ = typeof L == "function" ? L.displayName || L.name || "Unknown" : L;
          P && Dm(f, VZ), SZ && Qm(f, VZ);
        }
        return em(L, P, SZ, ZZ, Q, Vl.current, f);
      }
    }
    var Cl = S.ReactCurrentOwner, nl = S.ReactDebugCurrentFrame;
    function nZ(L) {
      if (L) {
        var F = L._owner, x = FZ(L.type, L._source, F ? F.type : null);
        nl.setExtraStackFrame(x);
      } else
        nl.setExtraStackFrame(null);
    }
    var aZ;
    aZ = !1;
    function gZ(L) {
      return typeof L == "object" && L !== null && L.$$typeof === l;
    }
    function hl() {
      {
        if (Cl.current) {
          var L = E(Cl.current.type);
          if (L)
            return `

Check the render method of \`` + L + "`.";
        }
        return "";
      }
    }
    function QZ(L) {
      {
        if (L !== void 0) {
          var F = L.fileName.replace(/^.*[\\\/]/, ""), x = L.lineNumber;
          return `

Check your code at ` + F + ":" + x + ".";
        }
        return "";
      }
    }
    var dm = {};
    function zl(L) {
      {
        var F = hl();
        if (!F) {
          var x = typeof L == "string" ? L : L.displayName || L.name;
          x && (F = `

Check the top-level render call using <` + x + ">.");
        }
        return F;
      }
    }
    function ml(L, F) {
      {
        if (!L._store || L._store.validated || L.key != null)
          return;
        L._store.validated = !0;
        var x = zl(F);
        if (dm[x])
          return;
        dm[x] = !0;
        var Q = "";
        L && L._owner && L._owner !== Cl.current && (Q = " It was passed a child from " + E(L._owner.type) + "."), nZ(L), N('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', x, Q), nZ(null);
      }
    }
    function tl(L, F) {
      {
        if (typeof L != "object")
          return;
        if (Ml(L))
          for (var x = 0; x < L.length; x++) {
            var Q = L[x];
            gZ(Q) && ml(Q, F);
          }
        else if (gZ(L))
          L._store && (L._store.validated = !0);
        else if (L) {
          var ZZ = s(L);
          if (typeof ZZ == "function" && ZZ !== L.entries)
            for (var bZ = ZZ.call(L), f; !(f = bZ.next()).done; )
              gZ(f.value) && ml(f.value, F);
        }
      }
    }
    function ym(L) {
      {
        var F = L.type;
        if (F == null || typeof F == "string")
          return;
        var x;
        if (typeof F == "function")
          x = F.propTypes;
        else if (typeof F == "object" && (F.$$typeof === X || // Note: Memo only checks outer props here.
        // Inner props are checked in the reconciler.
        F.$$typeof === G))
          x = F.propTypes;
        else
          return;
        if (x) {
          var Q = E(F);
          sl(x, L.props, "prop", Q, L);
        } else if (F.PropTypes !== void 0 && !aZ) {
          aZ = !0;
          var ZZ = E(F);
          N("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", ZZ || "Unknown");
        }
        typeof F.getDefaultProps == "function" && !F.getDefaultProps.isReactClassApproved && N("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
      }
    }
    function Bm(L) {
      {
        for (var F = Object.keys(L.props), x = 0; x < F.length; x++) {
          var Q = F[x];
          if (Q !== "children" && Q !== "key") {
            nZ(L), N("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", Q), nZ(null);
            break;
          }
        }
        L.ref !== null && (nZ(L), N("Invalid attribute `ref` supplied to `React.Fragment`."), nZ(null));
      }
    }
    function Lm(L, F, x, Q, ZZ, bZ) {
      {
        var f = j(L);
        if (!f) {
          var P = "";
          (L === void 0 || typeof L == "object" && L !== null && Object.keys(L).length === 0) && (P += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
          var SZ = QZ(ZZ);
          SZ ? P += SZ : P += hl();
          var GZ;
          L === null ? GZ = "null" : Ml(L) ? GZ = "array" : L !== void 0 && L.$$typeof === l ? (GZ = "<" + (E(L.type) || "Unknown") + " />", P = " Did you accidentally export a JSX literal instead of a component?") : GZ = typeof L, N("React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", GZ, P);
        }
        var VZ = Om(L, F, x, ZZ, bZ);
        if (VZ == null)
          return VZ;
        if (f) {
          var sZ = F.children;
          if (sZ !== void 0)
            if (Q)
              if (Ml(sZ)) {
                for (var AZ = 0; AZ < sZ.length; AZ++)
                  tl(sZ[AZ], L);
                Object.freeze && Object.freeze(sZ);
              } else
                N("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
            else
              tl(sZ, L);
        }
        return L === c ? Bm(VZ) : ym(VZ), VZ;
      }
    }
    function Gm(L, F, x) {
      return Lm(L, F, x, !0);
    }
    function Ym(L, F, x) {
      return Lm(L, F, x, !1);
    }
    var kl = Ym, cl = Gm;
    Bl.Fragment = c, Bl.jsx = kl, Bl.jsxs = cl;
  }()), Bl;
}
process.env.NODE_ENV === "production" ? Yc.exports = ui() : Yc.exports = Ji();
var a = Yc.exports;
function hi(Z, l, m) {
  return l in Z ? Object.defineProperty(Z, l, {
    value: m,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : Z[l] = m, Z;
}
function gc(Z, l) {
  var m = Object.keys(Z);
  if (Object.getOwnPropertySymbols) {
    var c = Object.getOwnPropertySymbols(Z);
    l && (c = c.filter(function(I) {
      return Object.getOwnPropertyDescriptor(Z, I).enumerable;
    })), m.push.apply(m, c);
  }
  return m;
}
function vc(Z) {
  for (var l = 1; l < arguments.length; l++) {
    var m = arguments[l] != null ? arguments[l] : {};
    l % 2 ? gc(Object(m), !0).forEach(function(c) {
      hi(Z, c, m[c]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(Z, Object.getOwnPropertyDescriptors(m)) : gc(Object(m)).forEach(function(c) {
      Object.defineProperty(Z, c, Object.getOwnPropertyDescriptor(m, c));
    });
  }
  return Z;
}
function Ni(Z, l) {
  if (Z == null)
    return {};
  var m = {}, c = Object.keys(Z), I, i;
  for (i = 0; i < c.length; i++)
    I = c[i], !(l.indexOf(I) >= 0) && (m[I] = Z[I]);
  return m;
}
function Ri(Z, l) {
  if (Z == null)
    return {};
  var m = Ni(Z, l), c, I;
  if (Object.getOwnPropertySymbols) {
    var i = Object.getOwnPropertySymbols(Z);
    for (I = 0; I < i.length; I++)
      c = i[I], !(l.indexOf(c) >= 0) && Object.prototype.propertyIsEnumerable.call(Z, c) && (m[c] = Z[c]);
  }
  return m;
}
function pi(Z, l) {
  return Si(Z) || si(Z, l) || Mi(Z, l) || Fi();
}
function Si(Z) {
  if (Array.isArray(Z))
    return Z;
}
function si(Z, l) {
  if (!(typeof Symbol > "u" || !(Symbol.iterator in Object(Z)))) {
    var m = [], c = !0, I = !1, i = void 0;
    try {
      for (var b = Z[Symbol.iterator](), W; !(c = (W = b.next()).done) && (m.push(W.value), !(l && m.length === l)); c = !0)
        ;
    } catch (X) {
      I = !0, i = X;
    } finally {
      try {
        !c && b.return != null && b.return();
      } finally {
        if (I)
          throw i;
      }
    }
    return m;
  }
}
function Mi(Z, l) {
  if (Z) {
    if (typeof Z == "string")
      return tc(Z, l);
    var m = Object.prototype.toString.call(Z).slice(8, -1);
    if (m === "Object" && Z.constructor && (m = Z.constructor.name), m === "Map" || m === "Set")
      return Array.from(Z);
    if (m === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(m))
      return tc(Z, l);
  }
}
function tc(Z, l) {
  (l == null || l > Z.length) && (l = Z.length);
  for (var m = 0, c = new Array(l); m < l; m++)
    c[m] = Z[m];
  return c;
}
function Fi() {
  throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function Ci(Z, l, m) {
  return l in Z ? Object.defineProperty(Z, l, {
    value: m,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : Z[l] = m, Z;
}
function Dc(Z, l) {
  var m = Object.keys(Z);
  if (Object.getOwnPropertySymbols) {
    var c = Object.getOwnPropertySymbols(Z);
    l && (c = c.filter(function(I) {
      return Object.getOwnPropertyDescriptor(Z, I).enumerable;
    })), m.push.apply(m, c);
  }
  return m;
}
function Qc(Z) {
  for (var l = 1; l < arguments.length; l++) {
    var m = arguments[l] != null ? arguments[l] : {};
    l % 2 ? Dc(Object(m), !0).forEach(function(c) {
      Ci(Z, c, m[c]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(Z, Object.getOwnPropertyDescriptors(m)) : Dc(Object(m)).forEach(function(c) {
      Object.defineProperty(Z, c, Object.getOwnPropertyDescriptor(m, c));
    });
  }
  return Z;
}
function ni() {
  for (var Z = arguments.length, l = new Array(Z), m = 0; m < Z; m++)
    l[m] = arguments[m];
  return function(c) {
    return l.reduceRight(function(I, i) {
      return i(I);
    }, c);
  };
}
function rl(Z) {
  return function l() {
    for (var m = this, c = arguments.length, I = new Array(c), i = 0; i < c; i++)
      I[i] = arguments[i];
    return I.length >= Z.length ? Z.apply(this, I) : function() {
      for (var b = arguments.length, W = new Array(b), X = 0; X < b; X++)
        W[X] = arguments[X];
      return l.apply(m, [].concat(I, W));
    };
  };
}
function xm(Z) {
  return {}.toString.call(Z).includes("Object");
}
function zi(Z) {
  return !Object.keys(Z).length;
}
function $l(Z) {
  return typeof Z == "function";
}
function ki(Z, l) {
  return Object.prototype.hasOwnProperty.call(Z, l);
}
function ai(Z, l) {
  return xm(l) || yl("changeType"), Object.keys(l).some(function(m) {
    return !ki(Z, m);
  }) && yl("changeField"), l;
}
function wi(Z) {
  $l(Z) || yl("selectorType");
}
function xi(Z) {
  $l(Z) || xm(Z) || yl("handlerType"), xm(Z) && Object.values(Z).some(function(l) {
    return !$l(l);
  }) && yl("handlersType");
}
function Ui(Z) {
  Z || yl("initialIsRequired"), xm(Z) || yl("initialType"), zi(Z) && yl("initialContent");
}
function ji(Z, l) {
  throw new Error(Z[l] || Z.default);
}
var Ki = {
  initialIsRequired: "initial state is required",
  initialType: "initial state should be an object",
  initialContent: "initial state shouldn't be an empty object",
  handlerType: "handler should be an object or a function",
  handlersType: "all handlers should be a functions",
  selectorType: "selector should be a function",
  changeType: "provided value of changes should be an object",
  changeField: 'it seams you want to change a field in the state which is not specified in the "initial" state',
  default: "an unknown error accured in `state-local` package"
}, yl = rl(ji)(Ki), Fm = {
  changes: ai,
  selector: wi,
  handler: xi,
  initial: Ui
};
function oi(Z) {
  var l = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
  Fm.initial(Z), Fm.handler(l);
  var m = {
    current: Z
  }, c = rl(gi)(m, l), I = rl(Ti)(m), i = rl(Fm.changes)(Z), b = rl(Hi)(m);
  function W() {
    var d = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : function(y) {
      return y;
    };
    return Fm.selector(d), d(m.current);
  }
  function X(d) {
    ni(c, I, i, b)(d);
  }
  return [W, X];
}
function Hi(Z, l) {
  return $l(l) ? l(Z.current) : l;
}
function Ti(Z, l) {
  return Z.current = Qc(Qc({}, Z.current), l), l;
}
function gi(Z, l, m) {
  return $l(l) ? l(Z.current) : Object.keys(m).forEach(function(c) {
    var I;
    return (I = l[c]) === null || I === void 0 ? void 0 : I.call(l, Z.current[c]);
  }), m;
}
var vi = {
  create: oi
}, ti = {
  paths: {
    vs: "https://cdn.jsdelivr.net/npm/monaco-editor@0.43.0/min/vs"
  }
};
function Di(Z) {
  return function l() {
    for (var m = this, c = arguments.length, I = new Array(c), i = 0; i < c; i++)
      I[i] = arguments[i];
    return I.length >= Z.length ? Z.apply(this, I) : function() {
      for (var b = arguments.length, W = new Array(b), X = 0; X < b; X++)
        W[X] = arguments[X];
      return l.apply(m, [].concat(I, W));
    };
  };
}
function Qi(Z) {
  return {}.toString.call(Z).includes("Object");
}
function ei(Z) {
  return Z || ec("configIsRequired"), Qi(Z) || ec("configType"), Z.urls ? (Oi(), {
    paths: {
      vs: Z.urls.monacoBase
    }
  }) : Z;
}
function Oi() {
  console.warn(SI.deprecation);
}
function Bi(Z, l) {
  throw new Error(Z[l] || Z.default);
}
var SI = {
  configIsRequired: "the configuration object is required",
  configType: "the configuration object should be an object",
  default: "an unknown error accured in `@monaco-editor/loader` package",
  deprecation: `Deprecation warning!
    You are using deprecated way of configuration.

    Instead of using
      monaco.config({ urls: { monacoBase: '...' } })
    use
      monaco.config({ paths: { vs: '...' } })

    For more please check the link https://github.com/suren-atoyan/monaco-loader#config
  `
}, ec = Di(Bi)(SI), Ei = {
  config: ei
}, Ai = function() {
  for (var l = arguments.length, m = new Array(l), c = 0; c < l; c++)
    m[c] = arguments[c];
  return function(I) {
    return m.reduceRight(function(i, b) {
      return b(i);
    }, I);
  };
};
function sI(Z, l) {
  return Object.keys(l).forEach(function(m) {
    l[m] instanceof Object && Z[m] && Object.assign(l[m], sI(Z[m], l[m]));
  }), vc(vc({}, Z), l);
}
var Pi = {
  type: "cancelation",
  msg: "operation is manually canceled"
};
function fm(Z) {
  var l = !1, m = new Promise(function(c, I) {
    Z.then(function(i) {
      return l ? I(Pi) : c(i);
    }), Z.catch(I);
  });
  return m.cancel = function() {
    return l = !0;
  }, m;
}
var fi = vi.create({
  config: ti,
  isInitialized: !1,
  resolve: null,
  reject: null,
  monaco: null
}), MI = pi(fi, 2), Im = MI[0], Km = MI[1];
function ri(Z) {
  var l = Ei.config(Z), m = l.monaco, c = Ri(l, ["monaco"]);
  Km(function(I) {
    return {
      config: sI(I.config, c),
      monaco: m
    };
  });
}
function qi() {
  var Z = Im(function(l) {
    var m = l.monaco, c = l.isInitialized, I = l.resolve;
    return {
      monaco: m,
      isInitialized: c,
      resolve: I
    };
  });
  if (!Z.isInitialized) {
    if (Km({
      isInitialized: !0
    }), Z.monaco)
      return Z.resolve(Z.monaco), fm(rm);
    if (window.monaco && window.monaco.editor)
      return FI(window.monaco), Z.resolve(window.monaco), fm(rm);
    Ai(_i, Zb)(lb);
  }
  return fm(rm);
}
function _i(Z) {
  return document.body.appendChild(Z);
}
function $i(Z) {
  var l = document.createElement("script");
  return Z && (l.src = Z), l;
}
function Zb(Z) {
  var l = Im(function(c) {
    var I = c.config, i = c.reject;
    return {
      config: I,
      reject: i
    };
  }), m = $i("".concat(l.config.paths.vs, "/loader.js"));
  return m.onload = function() {
    return Z();
  }, m.onerror = l.reject, m;
}
function lb() {
  var Z = Im(function(m) {
    var c = m.config, I = m.resolve, i = m.reject;
    return {
      config: c,
      resolve: I,
      reject: i
    };
  }), l = window.require;
  l.config(Z.config), l(["vs/editor/editor.main"], function(m) {
    FI(m), Z.resolve(m);
  }, function(m) {
    Z.reject(m);
  });
}
function FI(Z) {
  Im().monaco || Km({
    monaco: Z
  });
}
function mb() {
  return Im(function(Z) {
    var l = Z.monaco;
    return l;
  });
}
var rm = new Promise(function(Z, l) {
  return Km({
    resolve: Z,
    reject: l
  });
}), nc = {
  config: ri,
  init: qi,
  __getMonacoInstance: mb
}, cb = { wrapper: { display: "flex", position: "relative", textAlign: "initial" }, fullWidth: { width: "100%" }, hide: { display: "none" } }, qm = cb, Ib = { container: { display: "flex", height: "100%", width: "100%", justifyContent: "center", alignItems: "center" } }, ib = Ib;
function bb({ children: Z }) {
  return MZ.createElement("div", { style: ib.container }, Z);
}
var Wb = bb, Xb = Wb;
function db({ width: Z, height: l, isEditorReady: m, loading: c, _ref: I, className: i, wrapperProps: b }) {
  return MZ.createElement("section", { style: { ...qm.wrapper, width: Z, height: l }, ...b }, !m && MZ.createElement(Xb, null, c), MZ.createElement("div", { ref: I, style: { ...qm.fullWidth, ...!m && qm.hide }, className: i }));
}
var yb = db, CI = Cc(yb);
function Lb(Z) {
  mZ(Z, []);
}
var nI = Lb;
function Gb(Z, l, m = !0) {
  let c = r(!0);
  mZ(c.current || !m ? () => {
    c.current = !1;
  } : Z, l);
}
var wZ = Gb;
function ql() {
}
function jl(Z, l, m, c) {
  return Yb(Z, c) || Vb(Z, l, m, c);
}
function Yb(Z, l) {
  return Z.editor.getModel(zI(Z, l));
}
function Vb(Z, l, m, c) {
  return Z.editor.createModel(l, m, c ? zI(Z, c) : void 0);
}
function zI(Z, l) {
  return Z.Uri.parse(l);
}
function ub({ original: Z, modified: l, language: m, originalLanguage: c, modifiedLanguage: I, originalModelPath: i, modifiedModelPath: b, keepCurrentOriginalModel: W = !1, keepCurrentModifiedModel: X = !1, theme: d = "light", loading: y = "Loading...", options: G = {}, height: V = "100%", width: u = "100%", className: p, wrapperProps: M = {}, beforeMount: s = ql, onMount: S = ql }) {
  let [N, J] = YZ(!1), [o, t] = YZ(!0), H = r(null), R = r(null), w = r(null), C = r(S), j = r(s), U = r(!1);
  nI(() => {
    let k = nc.init();
    return k.then((K) => (R.current = K) && t(!1)).catch((K) => (K == null ? void 0 : K.type) !== "cancelation" && console.error("Monaco initialization: error:", K)), () => H.current ? z() : k.cancel();
  }), wZ(() => {
    if (H.current && R.current) {
      let k = H.current.getOriginalEditor(), K = jl(R.current, Z || "", c || m || "text", i || "");
      K !== k.getModel() && k.setModel(K);
    }
  }, [i], N), wZ(() => {
    if (H.current && R.current) {
      let k = H.current.getModifiedEditor(), K = jl(R.current, l || "", I || m || "text", b || "");
      K !== k.getModel() && k.setModel(K);
    }
  }, [b], N), wZ(() => {
    let k = H.current.getModifiedEditor();
    k.getOption(R.current.editor.EditorOption.readOnly) ? k.setValue(l || "") : l !== k.getValue() && (k.executeEdits("", [{ range: k.getModel().getFullModelRange(), text: l || "", forceMoveMarkers: !0 }]), k.pushUndoStop());
  }, [l], N), wZ(() => {
    var k, K;
    (K = (k = H.current) == null ? void 0 : k.getModel()) == null || K.original.setValue(Z || "");
  }, [Z], N), wZ(() => {
    let { original: k, modified: K } = H.current.getModel();
    R.current.editor.setModelLanguage(k, c || m || "text"), R.current.editor.setModelLanguage(K, I || m || "text");
  }, [m, c, I], N), wZ(() => {
    var k;
    (k = R.current) == null || k.editor.setTheme(d);
  }, [d], N), wZ(() => {
    var k;
    (k = H.current) == null || k.updateOptions(G);
  }, [G], N);
  let g = Rl(() => {
    var D;
    if (!R.current)
      return;
    j.current(R.current);
    let k = jl(R.current, Z || "", c || m || "text", i || ""), K = jl(R.current, l || "", I || m || "text", b || "");
    (D = H.current) == null || D.setModel({ original: k, modified: K });
  }, [m, l, I, Z, c, i, b]), E = Rl(() => {
    var k;
    !U.current && w.current && (H.current = R.current.editor.createDiffEditor(w.current, { automaticLayout: !0, ...G }), g(), (k = R.current) == null || k.editor.setTheme(d), J(!0), U.current = !0);
  }, [G, d, g]);
  mZ(() => {
    N && C.current(H.current, R.current);
  }, [N]), mZ(() => {
    !o && !N && E();
  }, [o, N, E]);
  function z() {
    var K, D, lZ, $;
    let k = (K = H.current) == null ? void 0 : K.getModel();
    W || ((D = k == null ? void 0 : k.original) == null || D.dispose()), X || ((lZ = k == null ? void 0 : k.modified) == null || lZ.dispose()), ($ = H.current) == null || $.dispose();
  }
  return MZ.createElement(CI, { width: u, height: V, isEditorReady: N, loading: y, _ref: w, className: p, wrapperProps: M });
}
var Jb = ub;
Cc(Jb);
function hb(Z) {
  let l = r();
  return mZ(() => {
    l.current = Z;
  }, [Z]), l.current;
}
var Nb = hb, Cm = /* @__PURE__ */ new Map();
function Rb({ defaultValue: Z, defaultLanguage: l, defaultPath: m, value: c, language: I, path: i, theme: b = "light", line: W, loading: X = "Loading...", options: d = {}, overrideServices: y = {}, saveViewState: G = !0, keepCurrentModel: V = !1, width: u = "100%", height: p = "100%", className: M, wrapperProps: s = {}, beforeMount: S = ql, onMount: N = ql, onChange: J, onValidate: o = ql }) {
  let [t, H] = YZ(!1), [R, w] = YZ(!0), C = r(null), j = r(null), U = r(null), g = r(N), E = r(S), z = r(), k = r(c), K = Nb(i), D = r(!1), lZ = r(!1);
  nI(() => {
    let v = nc.init();
    return v.then((e) => (C.current = e) && w(!1)).catch((e) => (e == null ? void 0 : e.type) !== "cancelation" && console.error("Monaco initialization: error:", e)), () => j.current ? iZ() : v.cancel();
  }), wZ(() => {
    var e, A, XZ, q;
    let v = jl(C.current, Z || c || "", l || I || "", i || m || "");
    v !== ((e = j.current) == null ? void 0 : e.getModel()) && (G && Cm.set(K, (A = j.current) == null ? void 0 : A.saveViewState()), (XZ = j.current) == null || XZ.setModel(v), G && ((q = j.current) == null || q.restoreViewState(Cm.get(i))));
  }, [i], t), wZ(() => {
    var v;
    (v = j.current) == null || v.updateOptions(d);
  }, [d], t), wZ(() => {
    !j.current || c === void 0 || (j.current.getOption(C.current.editor.EditorOption.readOnly) ? j.current.setValue(c) : c !== j.current.getValue() && (lZ.current = !0, j.current.executeEdits("", [{ range: j.current.getModel().getFullModelRange(), text: c, forceMoveMarkers: !0 }]), j.current.pushUndoStop(), lZ.current = !1));
  }, [c], t), wZ(() => {
    var e, A;
    let v = (e = j.current) == null ? void 0 : e.getModel();
    v && I && ((A = C.current) == null || A.editor.setModelLanguage(v, I));
  }, [I], t), wZ(() => {
    var v;
    W !== void 0 && ((v = j.current) == null || v.revealLine(W));
  }, [W], t), wZ(() => {
    var v;
    (v = C.current) == null || v.editor.setTheme(b);
  }, [b], t);
  let $ = Rl(() => {
    var v;
    if (!(!U.current || !C.current) && !D.current) {
      E.current(C.current);
      let e = i || m, A = jl(C.current, c || Z || "", l || I || "", e || "");
      j.current = (v = C.current) == null ? void 0 : v.editor.create(U.current, { model: A, automaticLayout: !0, ...d }, y), G && j.current.restoreViewState(Cm.get(e)), C.current.editor.setTheme(b), W !== void 0 && j.current.revealLine(W), H(!0), D.current = !0;
    }
  }, [Z, l, m, c, I, i, d, y, G, b, W]);
  mZ(() => {
    t && g.current(j.current, C.current);
  }, [t]), mZ(() => {
    !R && !t && $();
  }, [R, t, $]), k.current = c, mZ(() => {
    var v, e;
    t && J && ((v = z.current) == null || v.dispose(), z.current = (e = j.current) == null ? void 0 : e.onDidChangeModelContent((A) => {
      lZ.current || J(j.current.getValue(), A);
    }));
  }, [t, J]), mZ(() => {
    if (t) {
      let v = C.current.editor.onDidChangeMarkers((e) => {
        var XZ;
        let A = (XZ = j.current.getModel()) == null ? void 0 : XZ.uri;
        if (A && e.find((q) => q.path === A.path)) {
          let q = C.current.editor.getModelMarkers({ resource: A });
          o == null || o(q);
        }
      });
      return () => {
        v == null || v.dispose();
      };
    }
    return () => {
    };
  }, [t, o]);
  function iZ() {
    var v, e;
    (v = z.current) == null || v.dispose(), V ? G && Cm.set(i, j.current.saveViewState()) : (e = j.current.getModel()) == null || e.dispose(), j.current.dispose();
  }
  return MZ.createElement(CI, { width: u, height: p, isEditorReady: t, loading: X, _ref: U, className: M, wrapperProps: s });
}
var pb = Rb, Sb = Cc(pb), kI = Sb;
const aI = {
  automaticLayout: !0,
  cursorBlinking: "smooth",
  fontLigatures: !0,
  formatOnPaste: !0,
  formatOnType: !0,
  fontSize: 14,
  showDeprecated: !0,
  showUnused: !0,
  showFoldingControls: "mouseover",
  scrollBeyondLastLine: !1,
  minimap: {
    enabled: !1
  },
  inlineSuggest: {
    enabled: !1
  },
  fixedOverflowWidgets: !0,
  smoothScrolling: !0,
  smartSelect: {
    selectSubwords: !0,
    selectLeadingAndTrailingWhitespace: !0
  },
  tabSize: 2,
  overviewRulerBorder: !1,
  // 不要滚动条的边框
  // 滚动条设置
  scrollbar: {
    verticalScrollbarSize: 6,
    // 竖滚动条
    horizontalScrollbarSize: 6
    // 横滚动条
  }
  // lineNumbers: 'off', // 隐藏控制行号
};
var sb = `/******************************************************************************\r
Copyright (c) Microsoft Corporation.\r
\r
Permission to use, copy, modify, and/or distribute this software for any\r
purpose with or without fee is hereby granted.\r
\r
THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH\r
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY\r
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,\r
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM\r
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR\r
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR\r
PERFORMANCE OF THIS SOFTWARE.\r
***************************************************************************** */\r
\r
var __assign = function() {\r
    __assign = Object.assign || function __assign(t) {\r
        for (var s, i = 1, n = arguments.length; i < n; i++) {\r
            s = arguments[i];\r
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];\r
        }\r
        return t;\r
    };\r
    return __assign.apply(this, arguments);\r
};

var getTypescriptUrl=function(){var t="https://cdnjs.cloudflare.com/ajax/libs/typescript/4.6.4/typescript.min.js";try{return __TYPESCRIPT_CUSTOM_URL__||t}catch(r){return t}};self.importScripts([getTypescriptUrl()]);var Typescript=self.ts;

var JsxToken={angleBracket:"jsx-tag-angle-bracket",attributeKey:"jsx-tag-attribute-key",tagName:"jsx-tag-name",expressionBraces:"jsx-expression-braces",text:"jsx-text",orderTokenPrefix:"jsx-tag-order"};

var getRowAndColumn=function(n,o){for(var t=0,e=0;e+o[t]<n;)e+=o[t],t+=1;return {row:t+1,column:n-e}};var getNodeRange=function(n){return "function"==typeof n.getStart&&"function"==typeof n.getEnd?[n.getStart(),n.getEnd()]:void 0!==n.pos&&void 0!==n.end?[n.pos,n.end]:[0,0]};var calcPosition=function(n,o){var t=getNodeRange(n),e=t[0],r=t[1];return {indexes:[e,r],positions:[getRowAndColumn(e+1,o),getRowAndColumn(r,o)]}};

var disposeJsxElementOrFragment=function(n){var s=n.node,e=n.lines,t=n.classifications,o=n.config,a=n.context,i="".concat(JsxToken.orderTokenPrefix,"-").concat(a.jsxTagOrder);if(a.jsxTagOrder=a.jsxTagOrder+1>o.jsxTagCycle?1:a.jsxTagOrder+1,s.kind===Typescript.SyntaxKind.JsxSelfClosingElement){var r=calcPosition(s,e).positions,c=calcPosition(s.tagName,e).positions;t.push({start:r[0],end:r[0],tokens:[JsxToken.angleBracket,i]}),t.push({start:__assign(__assign({},r[1]),{column:r[1].column-1}),end:r[1],tokens:[JsxToken.angleBracket,i]}),t.push({start:c[0],end:c[1],tokens:[JsxToken.tagName,i]});}else {var p=s.kind===Typescript.SyntaxKind.JsxFragment?s.openingFragment:s.openingElement,g=s.kind===Typescript.SyntaxKind.JsxFragment?s.closingFragment:s.closingElement,l=calcPosition(p,e).positions,k=calcPosition(g,e).positions;if(t.push({start:l[0],end:l[0],tokens:[JsxToken.angleBracket,i]}),t.push({start:l[1],end:l[1],tokens:[JsxToken.angleBracket,i]}),t.push({start:k[0],end:__assign(__assign({},k[0]),{column:k[0].column+1}),tokens:[JsxToken.angleBracket,i]}),t.push({start:k[1],end:k[1],tokens:[JsxToken.angleBracket,i]}),s.kind===Typescript.SyntaxKind.JsxElement){var m=calcPosition(p.tagName,e).positions,x=calcPosition(g.tagName,e).positions;t.push({start:m[0],end:m[1],tokens:[JsxToken.tagName,i]}),t.push({start:x[0],end:x[1],tokens:[JsxToken.tagName,i]});}}};

var disposeJsxAttributeKey=function(o){var t=o.node,i=o.lines,s=o.classifications,e=calcPosition(t,i).positions;s.push({start:e[0],end:e[1],tokens:[JsxToken.attributeKey]});};

var disposeJsxExpression=function(s){var o=s.node,e=s.lines,n=s.classifications,i=calcPosition(o,e).positions;n.push({start:i[0],end:i[0],tokens:[JsxToken.expressionBraces]}),n.push({start:i[1],end:i[1],tokens:[JsxToken.expressionBraces]});};

var disposeJsxText=function(o){var s=o.node,i=o.lines,t=o.classifications,n=calcPosition(s,i).positions;t.push({start:n[0],end:n[1],tokens:[JsxToken.text]});};

var disposeNode=function(e){var s=e.node,i=e.index;[Typescript.SyntaxKind.JsxFragment,Typescript.SyntaxKind.JsxElement,Typescript.SyntaxKind.JsxSelfClosingElement].includes(s.kind)&&disposeJsxElementOrFragment(e),s.parent&&s.parent.kind===Typescript.SyntaxKind.JsxAttribute&&s.kind===Typescript.SyntaxKind.Identifier&&0===i&&disposeJsxAttributeKey(e),s.kind===Typescript.SyntaxKind.JsxExpression&&disposeJsxExpression(e),s.kind===Typescript.SyntaxKind.JsxText&&disposeJsxText(e);},walkAST=function(e){disposeNode(e);var s=0;Typescript.forEachChild(e.node,(function(i){return walkAST(__assign(__assign({},e),{node:i,index:s++}))}));},withDefaultConfig=function(e){var s=(e||{}).jsxTagCycle;return {jsxTagCycle:void 0===s?3:s}};var analysis=function(e,s,i){try{var t=[],n=Typescript.createSourceFile(e,s,Typescript.ScriptTarget.ES2020,!0),r=s.split("\\n").map((function(e){return e.length+1}));return walkAST({node:n,lines:r,context:{jsxTagOrder:1},classifications:t,config:withDefaultConfig(i),index:0}),t}catch(e){return (null==i?void 0:i.enableConsole)&&console.error(e),[]}};

self.addEventListener("message",(function(s){var a=s.data,e=a.code,i=a.filePath,n=a.version,o=a.config;try{var l=analysis(i,e,o);self.postMessage({classifications:l,version:n,filePath:i});}catch(s){(null==o?void 0:o.enableConsole)&&console.error(s);}}));
`, Mb = {
  worker: sb
}, Fb = function() {
  return Mb;
}, Cb = (
  /** @class */
  function() {
    function Z(l, m, c) {
      var I = this;
      this.createWorkerFromPureString = function(i, b) {
        window.URL = window.URL || window.webkitURL;
        var W;
        i = i.replace("__TYPESCRIPT_CUSTOM_URL__", b != null && b.customTypescriptUrl ? "'".concat(b == null ? void 0 : b.customTypescriptUrl, "'") : "undefined");
        try {
          W = new Blob([i], { type: "application/javascript" });
        } catch {
          window.BlobBuilder = window.BlobBuilder || window.WebKitBlobBuilder || window.MozBlobBuilder, W = new window.BlobBuilder(), W.append(i), W = W.getBlob();
        }
        var X = new Worker(URL.createObjectURL(W));
        return URL.revokeObjectURL(W), X;
      }, this.highlighterBuilder = function(i) {
        var b = i.editor, W = i.filePath, X = W === void 0 ? b.getModel().uri.toString() : W, d = { current: [] }, y = function(G) {
          var V = G.data, u = V.classifications, p = V.version, M = V.filePath;
          requestAnimationFrame(function() {
            if (M === X && p === b.getModel().getVersionId()) {
              var s = d.current;
              d.current = b.deltaDecorations(s, u.map(function(S) {
                return {
                  range: new I.monaco.Range(S.start.row, S.start.column, S.end.row, S.end.column + 1),
                  options: {
                    inlineClassName: S.tokens.join(" ")
                  }
                };
              }));
            }
          });
        };
        return I.worker.addEventListener("message", y), {
          highlighter: function(G) {
            requestAnimationFrame(function() {
              var V = G || b.getModel().getValue();
              I.worker.postMessage({
                code: V,
                filePath: X,
                version: b.getModel().getVersionId()
              });
            });
          },
          dispose: function() {
            I.worker.removeEventListener("message", y);
          }
        };
      }, this.monaco = m, typeof l == "string" ? this.worker = new Worker(l) : l.worker && typeof l.worker == "string" ? this.worker = this.createWorkerFromPureString(l.worker, c) : this.worker = l;
    }
    return Z;
  }()
), nb = Object.defineProperty, zb = Object.defineProperties, kb = Object.getOwnPropertyDescriptors, Oc = Object.getOwnPropertySymbols, ab = Object.prototype.hasOwnProperty, wb = Object.prototype.propertyIsEnumerable, Bc = (Z, l, m) => l in Z ? nb(Z, l, { enumerable: !0, configurable: !0, writable: !0, value: m }) : Z[l] = m, wI = (Z, l) => {
  for (var m in l || (l = {}))
    ab.call(l, m) && Bc(Z, m, l[m]);
  if (Oc)
    for (var m of Oc(l))
      wb.call(l, m) && Bc(Z, m, l[m]);
  return Z;
}, xI = (Z, l) => zb(Z, kb(l)), Zm = (Z, l, m) => new Promise((c, I) => {
  var i = (X) => {
    try {
      W(m.next(X));
    } catch (d) {
      I(d);
    }
  }, b = (X) => {
    try {
      W(m.throw(X));
    } catch (d) {
      I(d);
    }
  }, W = (X) => X.done ? c(X.value) : Promise.resolve(X.value).then(i, b);
  W((m = m.apply(Z, l)).next());
}), xb = (Z, l) => {
  const m = `https://data.jsdelivr.com/v1/package/npm/${l}`;
  return zc(Z, m, { cache: "no-store" });
}, Ub = (Z, l, m) => {
  const c = `https://data.jsdelivr.com/v1/package/resolve/npm/${l}@${m}`;
  return zc(Z, c);
}, jb = (Z, l, m) => Zm(void 0, null, function* () {
  const c = `https://data.jsdelivr.com/v1/package/npm/${l}@${m}/flat`, I = yield zc(Z, c);
  return I instanceof Error ? I : xI(wI({}, I), {
    moduleName: l,
    version: m
  });
}), Ec = (Z, l, m, c) => Zm(void 0, null, function* () {
  const I = `https://cdn.jsdelivr.net/npm/${l}@${m}${c}`, b = yield (Z.fetcher || fetch)(I);
  return b.ok ? b.text() : new Error("OK");
});
function zc(Z, l, m) {
  return (Z.fetcher || fetch)(l, m).then((I) => I.ok ? I.json().then((i) => i) : new Error("OK"));
}
var Kb = (Z) => {
  if ([
    "assert",
    "assert/strict",
    "async_hooks",
    "buffer",
    "child_process",
    "cluster",
    "console",
    "constants",
    "crypto",
    "dgram",
    "diagnostics_channel",
    "dns",
    "dns/promises",
    "domain",
    "events",
    "fs",
    "fs/promises",
    "http",
    "http2",
    "https",
    "inspector",
    "module",
    "net",
    "os",
    "path",
    "path/posix",
    "path/win32",
    "perf_hooks",
    "process",
    "punycode",
    "querystring",
    "readline",
    "repl",
    "stream",
    "stream/promises",
    "stream/consumers",
    "stream/web",
    "string_decoder",
    "sys",
    "timers",
    "timers/promises",
    "tls",
    "trace_events",
    "tty",
    "url",
    "util",
    "util/types",
    "v8",
    "vm",
    "wasi",
    "worker_threads",
    "zlib"
  ].includes(Z.replace("node:", "")))
    return "node";
  const [m = "", c = ""] = Z.split("/");
  return m.startsWith("@") ? `${m}/${c}` : m;
}, ob = (Z) => {
  const l = /* @__PURE__ */ new Map(), m = /* @__PURE__ */ new Map();
  let c = 0, I = 0;
  return (b) => (c = 0, I = 0, i(b, 0).then((W) => {
    var X, d;
    I > 0 && ((d = (X = Z.delegate).finished) == null || d.call(X, m));
  }));
  function i(b, W) {
    return Zm(this, null, function* () {
      var X, d, y, G, V;
      const u = Tb(Z, l, b);
      u.forEach((R) => l.set(R.module, { state: "loading" }));
      const M = (yield Promise.all(u.map((R) => Pc(Z, R.module, R.version)))).filter((R) => !("error" in R)), s = M.filter((R) => R.files.find((w) => w.name.endsWith(".d.ts"))), S = s.map((R) => Ac(R, `/node_modules/${R.moduleName}`)), N = M.filter((R) => !s.includes(R)), o = (yield Promise.all(N.map((R) => Pc(Z, `@types/${_m(R.moduleName)}`, "latest")))).filter((R) => !("error" in R)), t = o.map((R) => Ac(R, `/node_modules/@types/${_m(R.moduleName).replace("types__", "")}`)), H = S.concat(t).reduce((R, w) => R.concat(w), []);
      c += H.length, H.length && W === 0 && ((d = (X = Z.delegate).started) == null || d.call(X));
      for (const R of M) {
        let w = `/node_modules/${R.moduleName}`;
        o.includes(R) && (w = `/node_modules/@types/${_m(R.moduleName).replace("types__", "")}`);
        const C = w + "/package.json", j = yield Ec(Z, R.moduleName, R.version, "/package.json");
        typeof j == "string" ? (m.set(C, j), (G = (y = Z.delegate).receivedFile) == null || G.call(y, j, C)) : (V = Z.logger) == null || V.error(`Could not download package.json for ${R.moduleName}`);
      }
      yield Promise.all(H.map((R) => Zm(this, null, function* () {
        var w, C, j;
        const U = yield Ec(Z, R.moduleName, R.moduleVersion, R.path);
        I++, U instanceof Error ? (w = Z.logger) == null || w.error(`Had an issue getting ${R.path} for ${R.moduleName}`) : (m.set(R.vfsPath, U), (j = (C = Z.delegate).receivedFile) == null || j.call(C, U, R.vfsPath), Z.delegate.progress && I % 5 === 0 && Z.delegate.progress(I, c), yield i(U, W + 1));
      })));
    });
  }
};
function Ac(Z, l) {
  const m = [];
  for (const c of Z.files)
    c.name.endsWith(".d.ts") && m.push({
      moduleName: Z.moduleName,
      moduleVersion: Z.version,
      vfsPath: `${l}${c.name}`,
      path: c.name
    });
  return m;
}
var Hb = (Z, l) => {
  const m = Z.preProcessFile(l), c = Z.libMap || /* @__PURE__ */ new Map();
  return m.referencedFiles.concat(m.importedFiles).concat(m.libReferenceDirectives).filter((i) => !i.fileName.endsWith(".d.ts")).filter((i) => !c.has(i.fileName)).map((i) => {
    let b;
    if (!i.fileName.startsWith(".")) {
      b = "latest";
      const W = l.slice(i.end).split(`
`)[0];
      W.includes("// types:") && (b = W.split("// types: ")[1].trim());
    }
    return {
      module: i.fileName,
      version: b
    };
  });
};
function Tb(Z, l, m) {
  return Hb(Z.typescript, m).map((i) => xI(wI({}, i), {
    module: Kb(i.module)
  })).filter((i) => !i.module.startsWith(".")).filter((i) => !l.has(i.module));
}
var Pc = (Z, l, m) => Zm(void 0, null, function* () {
  let c = m || "latest";
  if (c.split(".").length < 2) {
    const i = yield Ub(Z, l, c);
    if (i instanceof Error)
      return {
        error: i,
        userFacingMessage: `Could not go from a tag to version on npm for ${l} - possible typo?`
      };
    const b = i.version;
    if (!b) {
      const W = yield xb(Z, l);
      if (W instanceof Error)
        return {
          error: i,
          userFacingMessage: `Could not get versions on npm for ${l} - possible typo?`
        };
      const X = Object.entries(W.tags).join(", ");
      return {
        error: new Error("Could not find tag for module"),
        userFacingMessage: `Could not find a tag for ${l} called ${m}. Did find ${X}`
      };
    }
    c = b;
  }
  const I = yield jb(Z, l, c);
  return I instanceof Error ? {
    error: I,
    userFacingMessage: `Could not get the files for ${l}@${c}. Is it possibly a typo?`
  } : I;
});
function _m(Z) {
  return Z.indexOf("@") === 0 && Z.indexOf("/") !== -1 && (Z = Z.substr(1).replace("/", "__")), Z;
}
const bl = gb();
function gb() {
  return {
    receivedFile: /* @__PURE__ */ new Set(),
    progress: /* @__PURE__ */ new Set(),
    errorMessage: /* @__PURE__ */ new Set(),
    finished: /* @__PURE__ */ new Set(),
    started: /* @__PURE__ */ new Set()
  };
}
async function vb() {
  const Z = await import("https://esm.sh/typescript@5.2.2"), l = ob({
    projectName: "monaco-ts",
    typescript: Z,
    logger: console,
    fetcher(i, b) {
      let W;
      try {
        W = fetch(i, b);
      } catch (X) {
        console.error("Error fetching data:", X);
      }
      return W;
    },
    delegate: {
      receivedFile: (i, b) => {
        bl.receivedFile.forEach((W) => W(i, b));
      },
      progress: (i, b) => {
        bl.progress.forEach((W) => W(i, b));
      },
      started: () => {
        bl.started.forEach((i) => i());
      },
      finished: (i) => {
        bl.finished.forEach((b) => b(i));
      }
    }
  });
  return {
    acquireType: (i) => l(i),
    addListener: (i, b) => {
      bl[i].add(b);
    },
    removeListener: (i, b) => {
      bl[i].delete(b);
    },
    dispose: () => {
      for (const i in bl)
        bl[i].clear();
    }
  };
}
const tb = () => ({
  autoLoadExtraLib: async (c, I, i) => {
    const b = await vb();
    c.onDidChangeModelContent(() => {
      b.acquireType(c.getValue());
    });
    const W = (X, d) => {
      I.languages.typescript.typescriptDefaults.addExtraLib(X, `file://${d}`);
    };
    return b.addListener("receivedFile", W), b.acquireType(i), b.dispose;
  },
  doOpenEditor: (c, I) => {
    const i = I.options ? I.options.selection : null;
    if (i)
      if (typeof i.endLineNumber == "number" && typeof i.endColumn == "number")
        c.setSelection(i), c.revealRangeInCenter(
          i,
          1
          /* Immediate */
        );
      else {
        const b = {
          lineNumber: i.startLineNumber,
          column: i.startColumn
        };
        c.setPosition(b), c.revealPositionInCenter(
          b,
          1
          /* Immediate */
        );
      }
    console.log("触发鼠标+command点击", I.resource, i);
  },
  loadJsxSyntaxHighlight: (c, I) => {
    const i = new Cb(Fb(), I), { highlighter: b, dispose: W } = i.highlighterBuilder({
      editor: c
    });
    return c.onDidChangeModelContent(() => {
      b();
    }), b(), { highlighter: b, dispose: W };
  }
}), UI = `{
  "imports": {
    "react": "https://esm.sh/react@18.2.0",
    "react-dom/client": "https://esm.sh/react-dom@18.2.0"
  }
}
`, Db = `:root {
  font-family: Inter, system-ui, Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  font-weight: 400;
  line-height: 1.5;
  color: rgb(255 255 255 / 87%);
  text-rendering: optimizelegibility;
  text-size-adjust: 100%;
  background-color: #242424;
  color-scheme: light dark;
  font-synthesis: none;
}

#root {
  max-width: 1280px;
  padding: 2rem;
  margin: 0 auto;
  text-align: center;
}

body {
  display: flex;
  min-width: 320px;
  min-height: 100vh;
  margin: 0;
  place-items: center;
}

h1 {
  font-size: 3.2em;
  line-height: 1.1;
}

button {
  padding: 0.6em 1.2em;
  font-family: inherit;
  font-size: 1em;
  font-weight: 500;
  cursor: pointer;
  background-color: #1a1a1a;
  border: 1px solid transparent;
  border-radius: 8px;
  transition: border-color 0.25s;
}

button:hover {
  border-color: #646cff;
}

button:focus,
button:focus-visible {
  outline: 4px auto -webkit-focus-ring-color;
}

@media (prefers-color-scheme: light) {
  :root {
    color: #213547;
    background-color: #fff;
  }

  button {
    background-color: #f9f9f9;
  }
}
`, Qb = `import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1>Hello World</h1>
      <div className='card'>
        <button onClick={() => setCount((count) => count + 1)}>count is {count}</button>
      </div>
    </>
  )
}

export default App
`, jI = `import React from 'react'
import ReactDOM from 'react-dom/client'

import App from './App'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
)
`;
var pZ = Uint8Array, UZ = Uint16Array, kc = Int32Array, om = new pZ([
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  1,
  1,
  1,
  1,
  2,
  2,
  2,
  2,
  3,
  3,
  3,
  3,
  4,
  4,
  4,
  4,
  5,
  5,
  5,
  5,
  0,
  /* unused */
  0,
  0,
  /* impossible */
  0
]), Hm = new pZ([
  0,
  0,
  0,
  0,
  1,
  1,
  2,
  2,
  3,
  3,
  4,
  4,
  5,
  5,
  6,
  6,
  7,
  7,
  8,
  8,
  9,
  9,
  10,
  10,
  11,
  11,
  12,
  12,
  13,
  13,
  /* unused */
  0,
  0
]), Vc = new pZ([16, 17, 18, 0, 8, 7, 9, 6, 10, 5, 11, 4, 12, 3, 13, 2, 14, 1, 15]), KI = function(Z, l) {
  for (var m = new UZ(31), c = 0; c < 31; ++c)
    m[c] = l += 1 << Z[c - 1];
  for (var I = new kc(m[30]), c = 1; c < 30; ++c)
    for (var i = m[c]; i < m[c + 1]; ++i)
      I[i] = i - m[c] << 5 | c;
  return { b: m, r: I };
}, oI = KI(om, 2), HI = oI.b, uc = oI.r;
HI[28] = 258, uc[258] = 28;
var TI = KI(Hm, 0), eb = TI.b, fc = TI.r, Jc = new UZ(32768);
for (var LZ = 0; LZ < 32768; ++LZ) {
  var Wl = (LZ & 43690) >> 1 | (LZ & 21845) << 1;
  Wl = (Wl & 52428) >> 2 | (Wl & 13107) << 2, Wl = (Wl & 61680) >> 4 | (Wl & 3855) << 4, Jc[LZ] = ((Wl & 65280) >> 8 | (Wl & 255) << 8) >> 1;
}
var OZ = function(Z, l, m) {
  for (var c = Z.length, I = 0, i = new UZ(l); I < c; ++I)
    Z[I] && ++i[Z[I] - 1];
  var b = new UZ(l);
  for (I = 1; I < l; ++I)
    b[I] = b[I - 1] + i[I - 1] << 1;
  var W;
  if (m) {
    W = new UZ(1 << l);
    var X = 15 - l;
    for (I = 0; I < c; ++I)
      if (Z[I])
        for (var d = I << 4 | Z[I], y = l - Z[I], G = b[Z[I] - 1]++ << y, V = G | (1 << y) - 1; G <= V; ++G)
          W[Jc[G] >> X] = d;
  } else
    for (W = new UZ(c), I = 0; I < c; ++I)
      Z[I] && (W[I] = Jc[b[Z[I] - 1]++] >> 15 - Z[I]);
  return W;
}, Ll = new pZ(288);
for (var LZ = 0; LZ < 144; ++LZ)
  Ll[LZ] = 8;
for (var LZ = 144; LZ < 256; ++LZ)
  Ll[LZ] = 9;
for (var LZ = 256; LZ < 280; ++LZ)
  Ll[LZ] = 7;
for (var LZ = 280; LZ < 288; ++LZ)
  Ll[LZ] = 8;
var lm = new pZ(32);
for (var LZ = 0; LZ < 32; ++LZ)
  lm[LZ] = 5;
var Ob = /* @__PURE__ */ OZ(Ll, 9, 0), Bb = /* @__PURE__ */ OZ(Ll, 9, 1), Eb = /* @__PURE__ */ OZ(lm, 5, 0), Ab = /* @__PURE__ */ OZ(lm, 5, 1), $m = function(Z) {
  for (var l = Z[0], m = 1; m < Z.length; ++m)
    Z[m] > l && (l = Z[m]);
  return l;
}, tZ = function(Z, l, m) {
  var c = l / 8 | 0;
  return (Z[c] | Z[c + 1] << 8) >> (l & 7) & m;
}, Zc = function(Z, l) {
  var m = l / 8 | 0;
  return (Z[m] | Z[m + 1] << 8 | Z[m + 2] << 16) >> (l & 7);
}, ac = function(Z) {
  return (Z + 7) / 8 | 0;
}, Tm = function(Z, l, m) {
  return (l == null || l < 0) && (l = 0), (m == null || m > Z.length) && (m = Z.length), new pZ(Z.subarray(l, m));
}, Pb = [
  "unexpected EOF",
  "invalid block type",
  "invalid length/literal",
  "invalid distance",
  "stream finished",
  "no stream handler",
  ,
  "no callback",
  "invalid UTF-8 data",
  "extra field too long",
  "date not in range 1980-2099",
  "filename too long",
  "stream finishing",
  "invalid zip data"
  // determined by unknown compression method
], HZ = function(Z, l, m) {
  var c = new Error(l || Pb[Z]);
  if (c.code = Z, Error.captureStackTrace && Error.captureStackTrace(c, HZ), !m)
    throw c;
  return c;
}, fb = function(Z, l, m, c) {
  var I = Z.length, i = c ? c.length : 0;
  if (!I || l.f && !l.l)
    return m || new pZ(0);
  var b = !m, W = b || l.i != 2, X = l.i;
  b && (m = new pZ(I * 3));
  var d = function(BZ) {
    var kZ = m.length;
    if (BZ > kZ) {
      var jZ = new pZ(Math.max(kZ * 2, BZ));
      jZ.set(m), m = jZ;
    }
  }, y = l.f || 0, G = l.p || 0, V = l.b || 0, u = l.l, p = l.d, M = l.m, s = l.n, S = I * 8;
  do {
    if (!u) {
      y = tZ(Z, G, 1);
      var N = tZ(Z, G + 1, 3);
      if (G += 3, N)
        if (N == 1)
          u = Bb, p = Ab, M = 9, s = 5;
        else if (N == 2) {
          var H = tZ(Z, G, 31) + 257, R = tZ(Z, G + 10, 15) + 4, w = H + tZ(Z, G + 5, 31) + 1;
          G += 14;
          for (var C = new pZ(w), j = new pZ(19), U = 0; U < R; ++U)
            j[Vc[U]] = tZ(Z, G + U * 3, 7);
          G += R * 3;
          for (var g = $m(j), E = (1 << g) - 1, z = OZ(j, g, 1), U = 0; U < w; ) {
            var k = z[tZ(Z, G, E)];
            G += k & 15;
            var J = k >> 4;
            if (J < 16)
              C[U++] = J;
            else {
              var K = 0, D = 0;
              for (J == 16 ? (D = 3 + tZ(Z, G, 3), G += 2, K = C[U - 1]) : J == 17 ? (D = 3 + tZ(Z, G, 7), G += 3) : J == 18 && (D = 11 + tZ(Z, G, 127), G += 7); D--; )
                C[U++] = K;
            }
          }
          var lZ = C.subarray(0, H), $ = C.subarray(H);
          M = $m(lZ), s = $m($), u = OZ(lZ, M, 1), p = OZ($, s, 1);
        } else
          HZ(1);
      else {
        var J = ac(G) + 4, o = Z[J - 4] | Z[J - 3] << 8, t = J + o;
        if (t > I) {
          X && HZ(0);
          break;
        }
        W && d(V + o), m.set(Z.subarray(J, t), V), l.b = V += o, l.p = G = t * 8, l.f = y;
        continue;
      }
      if (G > S) {
        X && HZ(0);
        break;
      }
    }
    W && d(V + 131072);
    for (var iZ = (1 << M) - 1, v = (1 << s) - 1, e = G; ; e = G) {
      var K = u[Zc(Z, G) & iZ], A = K >> 4;
      if (G += K & 15, G > S) {
        X && HZ(0);
        break;
      }
      if (K || HZ(2), A < 256)
        m[V++] = A;
      else if (A == 256) {
        e = G, u = null;
        break;
      } else {
        var XZ = A - 254;
        if (A > 264) {
          var U = A - 257, q = om[U];
          XZ = tZ(Z, G, (1 << q) - 1) + HI[U], G += q;
        }
        var JZ = p[Zc(Z, G) & v], B = JZ >> 4;
        JZ || HZ(3), G += JZ & 15;
        var $ = eb[B];
        if (B > 3) {
          var q = Hm[B];
          $ += Zc(Z, G) & (1 << q) - 1, G += q;
        }
        if (G > S) {
          X && HZ(0);
          break;
        }
        W && d(V + 131072);
        var O = V + XZ;
        if (V < $) {
          var cZ = i - $, IZ = Math.min($, O);
          for (cZ + V < 0 && HZ(3); V < IZ; ++V)
            m[V] = c[cZ + V];
        }
        for (; V < O; ++V)
          m[V] = m[V - $];
      }
    }
    l.l = u, l.p = e, l.b = V, l.f = y, u && (y = 1, l.m = M, l.d = p, l.n = s);
  } while (!y);
  return V != m.length && b ? Tm(m, 0, V) : m.subarray(0, V);
}, qZ = function(Z, l, m) {
  m <<= l & 7;
  var c = l / 8 | 0;
  Z[c] |= m, Z[c + 1] |= m >> 8;
}, El = function(Z, l, m) {
  m <<= l & 7;
  var c = l / 8 | 0;
  Z[c] |= m, Z[c + 1] |= m >> 8, Z[c + 2] |= m >> 16;
}, lc = function(Z, l) {
  for (var m = [], c = 0; c < Z.length; ++c)
    Z[c] && m.push({ s: c, f: Z[c] });
  var I = m.length, i = m.slice();
  if (!I)
    return { t: vI, l: 0 };
  if (I == 1) {
    var b = new pZ(m[0].s + 1);
    return b[m[0].s] = 1, { t: b, l: 1 };
  }
  m.sort(function(t, H) {
    return t.f - H.f;
  }), m.push({ s: -1, f: 25001 });
  var W = m[0], X = m[1], d = 0, y = 1, G = 2;
  for (m[0] = { s: -1, f: W.f + X.f, l: W, r: X }; y != I - 1; )
    W = m[m[d].f < m[G].f ? d++ : G++], X = m[d != y && m[d].f < m[G].f ? d++ : G++], m[y++] = { s: -1, f: W.f + X.f, l: W, r: X };
  for (var V = i[0].s, c = 1; c < I; ++c)
    i[c].s > V && (V = i[c].s);
  var u = new UZ(V + 1), p = hc(m[y - 1], u, 0);
  if (p > l) {
    var c = 0, M = 0, s = p - l, S = 1 << s;
    for (i.sort(function(H, R) {
      return u[R.s] - u[H.s] || H.f - R.f;
    }); c < I; ++c) {
      var N = i[c].s;
      if (u[N] > l)
        M += S - (1 << p - u[N]), u[N] = l;
      else
        break;
    }
    for (M >>= s; M > 0; ) {
      var J = i[c].s;
      u[J] < l ? M -= 1 << l - u[J]++ - 1 : ++c;
    }
    for (; c >= 0 && M; --c) {
      var o = i[c].s;
      u[o] == l && (--u[o], ++M);
    }
    p = l;
  }
  return { t: new pZ(u), l: p };
}, hc = function(Z, l, m) {
  return Z.s == -1 ? Math.max(hc(Z.l, l, m + 1), hc(Z.r, l, m + 1)) : l[Z.s] = m;
}, rc = function(Z) {
  for (var l = Z.length; l && !Z[--l]; )
    ;
  for (var m = new UZ(++l), c = 0, I = Z[0], i = 1, b = function(X) {
    m[c++] = X;
  }, W = 1; W <= l; ++W)
    if (Z[W] == I && W != l)
      ++i;
    else {
      if (!I && i > 2) {
        for (; i > 138; i -= 138)
          b(32754);
        i > 2 && (b(i > 10 ? i - 11 << 5 | 28690 : i - 3 << 5 | 12305), i = 0);
      } else if (i > 3) {
        for (b(I), --i; i > 6; i -= 6)
          b(8304);
        i > 2 && (b(i - 3 << 5 | 8208), i = 0);
      }
      for (; i--; )
        b(I);
      i = 1, I = Z[W];
    }
  return { c: m.subarray(0, c), n: l };
}, Al = function(Z, l) {
  for (var m = 0, c = 0; c < l.length; ++c)
    m += Z[c] * l[c];
  return m;
}, gI = function(Z, l, m) {
  var c = m.length, I = ac(l + 2);
  Z[I] = c & 255, Z[I + 1] = c >> 8, Z[I + 2] = Z[I] ^ 255, Z[I + 3] = Z[I + 1] ^ 255;
  for (var i = 0; i < c; ++i)
    Z[I + i + 4] = m[i];
  return (I + 4 + c) * 8;
}, qc = function(Z, l, m, c, I, i, b, W, X, d, y) {
  qZ(l, y++, m), ++I[256];
  for (var G = lc(I, 15), V = G.t, u = G.l, p = lc(i, 15), M = p.t, s = p.l, S = rc(V), N = S.c, J = S.n, o = rc(M), t = o.c, H = o.n, R = new UZ(19), w = 0; w < N.length; ++w)
    ++R[N[w] & 31];
  for (var w = 0; w < t.length; ++w)
    ++R[t[w] & 31];
  for (var C = lc(R, 7), j = C.t, U = C.l, g = 19; g > 4 && !j[Vc[g - 1]]; --g)
    ;
  var E = d + 5 << 3, z = Al(I, Ll) + Al(i, lm) + b, k = Al(I, V) + Al(i, M) + b + 14 + 3 * g + Al(R, j) + 2 * R[16] + 3 * R[17] + 7 * R[18];
  if (X >= 0 && E <= z && E <= k)
    return gI(l, y, Z.subarray(X, X + d));
  var K, D, lZ, $;
  if (qZ(l, y, 1 + (k < z)), y += 2, k < z) {
    K = OZ(V, u, 0), D = V, lZ = OZ(M, s, 0), $ = M;
    var iZ = OZ(j, U, 0);
    qZ(l, y, J - 257), qZ(l, y + 5, H - 1), qZ(l, y + 10, g - 4), y += 14;
    for (var w = 0; w < g; ++w)
      qZ(l, y + 3 * w, j[Vc[w]]);
    y += 3 * g;
    for (var v = [N, t], e = 0; e < 2; ++e)
      for (var A = v[e], w = 0; w < A.length; ++w) {
        var XZ = A[w] & 31;
        qZ(l, y, iZ[XZ]), y += j[XZ], XZ > 15 && (qZ(l, y, A[w] >> 5 & 127), y += A[w] >> 12);
      }
  } else
    K = Ob, D = Ll, lZ = Eb, $ = lm;
  for (var w = 0; w < W; ++w) {
    var q = c[w];
    if (q > 255) {
      var XZ = q >> 18 & 31;
      El(l, y, K[XZ + 257]), y += D[XZ + 257], XZ > 7 && (qZ(l, y, q >> 23 & 31), y += om[XZ]);
      var JZ = q & 31;
      El(l, y, lZ[JZ]), y += $[JZ], JZ > 3 && (El(l, y, q >> 5 & 8191), y += Hm[JZ]);
    } else
      El(l, y, K[q]), y += D[q];
  }
  return El(l, y, K[256]), y + D[256];
}, rb = /* @__PURE__ */ new kc([65540, 131080, 131088, 131104, 262176, 1048704, 1048832, 2114560, 2117632]), vI = /* @__PURE__ */ new pZ(0), qb = function(Z, l, m, c, I, i) {
  var b = i.z || Z.length, W = new pZ(c + b + 5 * (1 + Math.ceil(b / 7e3)) + I), X = W.subarray(c, W.length - I), d = i.l, y = (i.r || 0) & 7;
  if (l) {
    y && (X[0] = i.r >> 3);
    for (var G = rb[l - 1], V = G >> 13, u = G & 8191, p = (1 << m) - 1, M = i.p || new UZ(32768), s = i.h || new UZ(p + 1), S = Math.ceil(m / 3), N = 2 * S, J = function(Zl) {
      return (Z[Zl] ^ Z[Zl + 1] << S ^ Z[Zl + 2] << N) & p;
    }, o = new kc(25e3), t = new UZ(288), H = new UZ(32), R = 0, w = 0, C = i.i || 0, j = 0, U = i.w || 0, g = 0; C + 2 < b; ++C) {
      var E = J(C), z = C & 32767, k = s[E];
      if (M[z] = k, s[E] = z, U <= C) {
        var K = b - C;
        if ((R > 7e3 || j > 24576) && (K > 423 || !d)) {
          y = qc(Z, X, 0, o, t, H, w, j, g, C - g, y), j = R = w = 0, g = C;
          for (var D = 0; D < 286; ++D)
            t[D] = 0;
          for (var D = 0; D < 30; ++D)
            H[D] = 0;
        }
        var lZ = 2, $ = 0, iZ = u, v = z - k & 32767;
        if (K > 2 && E == J(C - v))
          for (var e = Math.min(V, K) - 1, A = Math.min(32767, C), XZ = Math.min(258, K); v <= A && --iZ && z != k; ) {
            if (Z[C + lZ] == Z[C + lZ - v]) {
              for (var q = 0; q < XZ && Z[C + q] == Z[C + q - v]; ++q)
                ;
              if (q > lZ) {
                if (lZ = q, $ = v, q > e)
                  break;
                for (var JZ = Math.min(v, q - 2), B = 0, D = 0; D < JZ; ++D) {
                  var O = C - v + D & 32767, cZ = M[O], IZ = O - cZ & 32767;
                  IZ > B && (B = IZ, k = O);
                }
              }
            }
            z = k, k = M[z], v += z - k & 32767;
          }
        if ($) {
          o[j++] = 268435456 | uc[lZ] << 18 | fc[$];
          var BZ = uc[lZ] & 31, kZ = fc[$] & 31;
          w += om[BZ] + Hm[kZ], ++t[257 + BZ], ++H[kZ], U = C + lZ, ++R;
        } else
          o[j++] = Z[C], ++t[Z[C]];
      }
    }
    for (C = Math.max(C, U); C < b; ++C)
      o[j++] = Z[C], ++t[Z[C]];
    y = qc(Z, X, d, o, t, H, w, j, g, C - g, y), d || (i.r = y & 7 | X[y / 8 | 0] << 3, y -= 7, i.h = s, i.p = M, i.i = C, i.w = U);
  } else {
    for (var C = i.w || 0; C < b + d; C += 65535) {
      var jZ = C + 65535;
      jZ >= b && (X[y / 8 | 0] = d, jZ = b), y = gI(X, y + 1, Z.subarray(C, jZ));
    }
    i.i = b;
  }
  return Tm(W, 0, c + ac(y) + I);
}, tI = function() {
  var Z = 1, l = 0;
  return {
    p: function(m) {
      for (var c = Z, I = l, i = m.length | 0, b = 0; b != i; ) {
        for (var W = Math.min(b + 2655, i); b < W; ++b)
          I += c += m[b];
        c = (c & 65535) + 15 * (c >> 16), I = (I & 65535) + 15 * (I >> 16);
      }
      Z = c, l = I;
    },
    d: function() {
      return Z %= 65521, l %= 65521, (Z & 255) << 24 | (Z & 65280) << 8 | (l & 255) << 8 | l >> 8;
    }
  };
}, _b = function(Z, l, m, c, I) {
  if (!I && (I = { l: 1 }, l.dictionary)) {
    var i = l.dictionary.subarray(-32768), b = new pZ(i.length + Z.length);
    b.set(i), b.set(Z, i.length), Z = b, I.w = i.length;
  }
  return qb(Z, l.level == null ? 6 : l.level, l.mem == null ? Math.ceil(Math.max(8, Math.min(13, Math.log(Z.length))) * 1.5) : 12 + l.mem, m, c, I);
}, DI = function(Z, l, m) {
  for (; m; ++l)
    Z[l] = m, m >>>= 8;
}, $b = function(Z, l) {
  var m = l.level, c = m == 0 ? 0 : m < 6 ? 1 : m == 9 ? 3 : 2;
  if (Z[0] = 120, Z[1] = c << 6 | (l.dictionary && 32), Z[1] |= 31 - (Z[0] << 8 | Z[1]) % 31, l.dictionary) {
    var I = tI();
    I.p(l.dictionary), DI(Z, 2, I.d());
  }
}, ZW = function(Z, l) {
  return ((Z[0] & 15) != 8 || Z[0] >> 4 > 7 || (Z[0] << 8 | Z[1]) % 31) && HZ(6, "invalid zlib data"), (Z[1] >> 5 & 1) == +!l && HZ(6, "invalid zlib data: " + (Z[1] & 32 ? "need" : "unexpected") + " dictionary"), (Z[1] >> 3 & 4) + 2;
};
function lW(Z, l) {
  l || (l = {});
  var m = tI();
  m.p(Z);
  var c = _b(Z, l, l.dictionary ? 6 : 2, 4);
  return $b(c, l), DI(c, c.length - 4, m.d()), c;
}
function mW(Z, l) {
  return fb(Z.subarray(ZW(Z, l && l.dictionary), -4), { i: 2 }, l && l.out, l && l.dictionary);
}
var _c = typeof TextEncoder < "u" && /* @__PURE__ */ new TextEncoder(), Nc = typeof TextDecoder < "u" && /* @__PURE__ */ new TextDecoder(), cW = 0;
try {
  Nc.decode(vI, { stream: !0 }), cW = 1;
} catch {
}
var IW = function(Z) {
  for (var l = "", m = 0; ; ) {
    var c = Z[m++], I = (c > 127) + (c > 223) + (c > 239);
    if (m + I > Z.length)
      return { s: l, r: Tm(Z, m - 1) };
    I ? I == 3 ? (c = ((c & 15) << 18 | (Z[m++] & 63) << 12 | (Z[m++] & 63) << 6 | Z[m++] & 63) - 65536, l += String.fromCharCode(55296 | c >> 10, 56320 | c & 1023)) : I & 1 ? l += String.fromCharCode((c & 31) << 6 | Z[m++] & 63) : l += String.fromCharCode((c & 15) << 12 | (Z[m++] & 63) << 6 | Z[m++] & 63) : l += String.fromCharCode(c);
  }
};
function QI(Z, l) {
  if (l) {
    for (var m = new pZ(Z.length), c = 0; c < Z.length; ++c)
      m[c] = Z.charCodeAt(c);
    return m;
  }
  if (_c)
    return _c.encode(Z);
  for (var I = Z.length, i = new pZ(Z.length + (Z.length >> 1)), b = 0, W = function(y) {
    i[b++] = y;
  }, c = 0; c < I; ++c) {
    if (b + 5 > i.length) {
      var X = new pZ(b + 8 + (I - c << 1));
      X.set(i), i = X;
    }
    var d = Z.charCodeAt(c);
    d < 128 || l ? W(d) : d < 2048 ? (W(192 | d >> 6), W(128 | d & 63)) : d > 55295 && d < 57344 ? (d = 65536 + (d & 1047552) | Z.charCodeAt(++c) & 1023, W(240 | d >> 18), W(128 | d >> 12 & 63), W(128 | d >> 6 & 63), W(128 | d & 63)) : (W(224 | d >> 12), W(128 | d >> 6 & 63), W(128 | d & 63));
  }
  return Tm(i, 0, b);
}
function eI(Z, l) {
  if (l) {
    for (var m = "", c = 0; c < Z.length; c += 16384)
      m += String.fromCharCode.apply(null, Z.subarray(c, c + 16384));
    return m;
  } else {
    if (Nc)
      return Nc.decode(Z);
    var I = IW(Z), i = I.s, m = I.r;
    return m.length && HZ(8), i;
  }
}
function OI(Z, l = 100) {
  let m;
  return (...c) => {
    m && clearTimeout(m), m = setTimeout(() => {
      Z(...c);
    }, l);
  };
}
function iW(Z) {
  const l = QI(Z), m = lW(l, { level: 9 }), c = eI(m, !0);
  return btoa(c);
}
function bW(Z) {
  const l = atob(Z);
  if (l.startsWith("xÚ")) {
    const m = QI(l, !0), c = mW(m);
    return eI(c);
  }
  return decodeURIComponent(escape(l));
}
const BI = "react-playground-prefer-dark", WW = (Z) => {
  var l;
  localStorage.setItem(BI, String(Z === "dark")), (l = document.querySelectorAll('div[data-id="react-playground"]')) == null || l.forEach((m) => m.setAttribute("class", Z));
}, XW = () => JSON.parse(localStorage.getItem(BI) || "false") ? "dark" : "light", $c = (Z) => {
  const l = {};
  return Object.keys(Z).forEach((m) => {
    const c = Z[m];
    typeof c == "string" ? l[m] = {
      name: m,
      language: mm(m),
      value: c
    } : l[m] = {
      name: m,
      language: mm(m),
      value: c.code,
      hidden: c.hidden,
      active: c.active,
      readOnly: c.readOnly
    };
  }), l;
}, dW = (Z) => Z ? Object.keys(Z).find((m) => {
  const c = Z[m];
  return typeof c != "string" && c.active ? m : null;
}) : null, yW = (Z, l) => Z ? l ? {
  ...ZI,
  ...$c(Z),
  [zZ]: {
    name: zZ,
    language: "json",
    value: JSON.stringify(l, null, 2)
  }
} : {
  ...ZI,
  ...$c(Z)
} : null, LW = () => {
  let Z;
  try {
    if (typeof window < "u") {
      const l = window.location.hash;
      l && (Z = JSON.parse(bW(l == null ? void 0 : l.split("#")[1])));
    }
  } catch (l) {
    console.error(l);
  }
  return Z;
}, mm = (Z) => {
  const l = Z.split(".").pop() || "";
  return ["js", "jsx"].includes(l) ? "javascript" : ["ts", "tsx"].includes(l) ? "typescript" : ["json"].includes(l) ? "json" : ["css"].includes(l) ? "css" : "javascript";
}, pl = "App.tsx", zZ = "import-map.json", cm = "main.tsx", GW = LW() || {
  [cm]: {
    name: cm,
    language: "typescript",
    value: jI
  },
  [pl]: {
    name: pl,
    language: "typescript",
    value: Qb
  },
  "App.css": {
    name: "App.css",
    language: "css",
    value: Db
  },
  [zZ]: {
    name: zZ,
    language: "json",
    value: UI
  }
}, ZI = {
  [cm]: {
    name: cm,
    language: "typescript",
    value: jI
  },
  [zZ]: {
    name: zZ,
    language: "json",
    value: UI
  }
}, wm = {
  files: GW,
  selectedFileName: pl
}, Sl = Li(
  wm
), YW = (Z) => {
  const { children: l } = Z, [m, c] = YZ(wm.files), [I, i] = YZ(wm.theme), [b, W] = YZ(wm.selectedFileName), [X, d] = YZ(""), y = (p) => {
    m[p] = {
      name: p,
      language: mm(p),
      value: ""
    }, c({ ...m });
  }, G = (p) => {
    delete m[p], c({ ...m });
  }, V = (p, M) => {
    if (!m[p] || M === void 0 || M === null)
      return;
    const { [p]: s, ...S } = m, N = {
      [M]: {
        ...s,
        language: mm(M),
        name: M
      }
    };
    c({
      ...S,
      ...N
    });
  }, u = (p) => {
    WW(p), i(p);
  };
  return mZ(() => {
    const p = iW(JSON.stringify(m));
    window.location.hash = p, d(p);
  }, [m]), mZ(() => {
    u(XW());
  }, []), /* @__PURE__ */ a.jsx(
    Sl.Provider,
    {
      value: {
        theme: I,
        filesHash: X,
        files: m,
        selectedFileName: b,
        setTheme: i,
        changeTheme: u,
        setSelectedFileName: W,
        setFiles: c,
        addFile: y,
        removeFile: G,
        updateFileName: V
      },
      children: l
    }
  );
};
nc.config({
  paths: {
    vs: "https://cdn.staticfile.org/monaco-editor/0.43.0/min/vs"
  }
});
const VW = (Z) => {
  const { file: l, onChange: m, options: c } = Z, { theme: I, files: i, setSelectedFileName: b } = ol(Sl), W = r(null), { doOpenEditor: X, loadJsxSyntaxHighlight: d, autoLoadExtraLib: y } = tb(), G = r({ highlighter: null, dispose: null }), [V, u] = YZ({
    ...aI,
    ...c,
    theme: void 0
  }), p = (M, s) => {
    W.current = M, M.addCommand(s.KeyMod.CtrlCmd | s.KeyCode.KeyS, () => {
      console.log(11), M.getAction("editor.action.formatDocument").run();
    }), s.languages.typescript.typescriptDefaults.setCompilerOptions({
      jsx: s.languages.typescript.JsxEmit.Preserve,
      esModuleInterop: !0
    }), Object.entries(i).forEach(([S]) => {
      var N, J;
      (N = s == null ? void 0 : s.editor) != null && N.getModel(s.Uri.parse(`file:///${S}`)) || (J = s == null ? void 0 : s.editor) == null || J.createModel(
        i[S].value,
        mm(S),
        s.Uri.parse(`file:///${S}`)
      );
    }), M._codeEditorService.doOpenEditor = function(S, N) {
      const J = N.resource.path;
      J.startsWith("/node_modules/") || (b(J.replace("/", "")), X(S, N));
    }, y(M, s, l.value), G.current = d(M, s);
  };
  return mZ(() => {
    var M, s, S;
    (M = W.current) == null || M.focus(), (S = (s = G == null ? void 0 : G.current) == null ? void 0 : s.highlighter) == null || S.call(s);
  }, [l.name]), mZ(() => {
    u({
      ...V,
      readOnly: l.readOnly
    });
  }, [l.readOnly]), mZ(() => {
  }, []), /* @__PURE__ */ a.jsx(
    kI,
    {
      className: "react-playground-editor",
      height: "100%",
      theme: `vs-${I}`,
      path: l.name,
      language: l.language,
      value: l.value,
      onChange: m,
      onMount: p,
      options: V
    }
  );
};
var EI = { exports: {} };
/*!
	Copyright (c) 2018 Jed Watson.
	Licensed under the MIT License (MIT), see
	http://jedwatson.github.io/classnames
*/
(function(Z) {
  (function() {
    var l = {}.hasOwnProperty;
    function m() {
      for (var c = [], I = 0; I < arguments.length; I++) {
        var i = arguments[I];
        if (i) {
          var b = typeof i;
          if (b === "string" || b === "number")
            c.push(i);
          else if (Array.isArray(i)) {
            if (i.length) {
              var W = m.apply(null, i);
              W && c.push(W);
            }
          } else if (b === "object") {
            if (i.toString !== Object.prototype.toString && !i.toString.toString().includes("[native code]")) {
              c.push(i.toString());
              continue;
            }
            for (var X in i)
              l.call(i, X) && i[X] && c.push(X);
          }
        }
      }
      return c.join(" ");
    }
    Z.exports ? (m.default = m, Z.exports = m) : window.classNames = m;
  })();
})(EI);
var uW = EI.exports;
const Kl = /* @__PURE__ */ Vi(uW), JW = "_dialog_eaiwm_1", hW = "_content_eaiwm_37", nm = {
  dialog: JW,
  "dialog-footer": "_dialog-footer_eaiwm_13",
  "dialog-btn": "_dialog-btn_eaiwm_29",
  content: hW
}, NW = (Z) => {
  const { message: l, onConfirm: m, children: c } = Z, I = r(null), i = (b) => {
    var W;
    b.stopPropagation(), (W = I.current) == null || W.showModal();
  };
  return /* @__PURE__ */ a.jsxs("span", { onClick: (b) => b.stopPropagation(), children: [
    /* @__PURE__ */ a.jsx("span", { onClick: i, children: c }),
    /* @__PURE__ */ a.jsxs("dialog", { ref: I, className: nm.dialog, children: [
      /* @__PURE__ */ a.jsxs("span", { className: nm.content, children: [
        /* @__PURE__ */ a.jsxs(
          "svg",
          {
            viewBox: "64 64 896 896",
            focusable: "false",
            "data-icon": "exclamation-circle",
            width: "1em",
            height: "1em",
            fill: "currentColor",
            "aria-hidden": "true",
            children: [
              /* @__PURE__ */ a.jsx("path", { d: "M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm0 820c-205.4 0-372-166.6-372-372s166.6-372 372-372 372 166.6 372 372-166.6 372-372 372z" }),
              /* @__PURE__ */ a.jsx("path", { d: "M464 688a48 48 0 1096 0 48 48 0 10-96 0zm24-112h48c4.4 0 8-3.6 8-8V296c0-4.4-3.6-8-8-8h-48c-4.4 0-8 3.6-8 8v272c0 4.4 3.6 8 8 8z" })
            ]
          }
        ),
        l
      ] }),
      /* @__PURE__ */ a.jsx("form", { method: "dialog", children: /* @__PURE__ */ a.jsxs("div", { className: nm["dialog-footer"], children: [
        /* @__PURE__ */ a.jsx("button", { onClick: () => {
          var b;
          return (b = I.current) == null ? void 0 : b.close();
        }, children: "取 消" }),
        /* @__PURE__ */ a.jsx("button", { className: nm["dialog-btn"], onClick: m, children: "确 定" })
      ] }) })
    ] })
  ] });
}, RW = "_tabs_16nwc_1", pW = "_actived_16nwc_32", SW = "_add_16nwc_51", $Z = {
  tabs: RW,
  "tab-item": "_tab-item_16nwc_22",
  actived: pW,
  "import-map-wrapper": "_import-map-wrapper_16nwc_39",
  add: SW,
  "tabs-item-input": "_tabs-item-input_16nwc_65",
  "input-mask": "_input-mask_16nwc_76"
}, sW = (Z) => {
  const {
    readOnlyTabs: l = [""],
    value: m,
    actived: c = !1,
    onOk: I,
    onCancel: i,
    onRemove: b,
    onClick: W,
    onValidate: X
  } = Z, d = r(null), [y, G] = YZ(m), [V, u] = YZ(Z.creating), p = (N) => {
    N.key === "Enter" ? (N.preventDefault(), s()) : N.key === "Escape" && (N.preventDefault(), M());
  }, M = () => {
    G(m), u(!1), i();
  };
  function s() {
    if (V && X(y, m)) {
      if (y === m && c) {
        u(!1);
        return;
      }
      I(y), u(!1);
    }
  }
  const S = () => {
    l.includes(y) || (u(!0), setTimeout(() => {
      var N;
      (N = d == null ? void 0 : d.current) == null || N.focus();
    }, 0));
  };
  return mZ(() => {
    var N;
    (N = d == null ? void 0 : d.current) == null || N.focus();
  }, []), /* @__PURE__ */ a.jsx(
    "div",
    {
      className: Kl($Z["tab-item"], c ? $Z.actived : null),
      onClick: W,
      children: V ? /* @__PURE__ */ a.jsxs(a.Fragment, { children: [
        /* @__PURE__ */ a.jsx(
          "input",
          {
            ref: d,
            className: $Z["tabs-item-input"],
            value: y,
            onChange: (N) => G(N.target.value),
            onBlur: s,
            onKeyDown: p
          }
        ),
        /* @__PURE__ */ a.jsx("div", { className: $Z["input-mask"] })
      ] }) : /* @__PURE__ */ a.jsxs(a.Fragment, { children: [
        /* @__PURE__ */ a.jsx("span", { onDoubleClick: S, children: y }),
        l.includes(y) ? null : /* @__PURE__ */ a.jsx(NW, { message: `确定要删除 ${y} 吗?`, onConfirm: () => b(y), children: /* @__PURE__ */ a.jsx("span", { style: { marginLeft: 5, display: "flex" }, children: /* @__PURE__ */ a.jsxs("svg", { width: "12", height: "12", viewBox: "0 0 24 24", children: [
          /* @__PURE__ */ a.jsx("line", { stroke: "#999", x1: "18", y1: "6", x2: "6", y2: "18" }),
          /* @__PURE__ */ a.jsx("line", { stroke: "#999", x1: "6", y1: "6", x2: "18", y2: "18" })
        ] }) }) })
      ] })
    }
  );
}, MW = (Z) => `Comp${Z.reduce((m, c) => {
  const I = c.match(/Comp(\d+)\.tsx/);
  if (I) {
    const i = parseInt(I[1], 10);
    return Math.max(m, i);
  }
  return m;
}, 0) + 1}.tsx`, FW = (Z) => {
  const { onChange: l, onError: m, readOnly: c = !1 } = Z, { files: I, removeFile: i, addFile: b, updateFileName: W, selectedFileName: X } = ol(Sl), [d, y] = YZ([""]), [G, V] = YZ(!1), u = () => {
    y([...d, MW(d)]), V(!0);
  }, p = () => {
    G && (d.pop(), y([...d]), V(!1));
  }, M = (J) => {
    G || l(J);
  }, s = () => {
    l(zZ);
  }, S = (J, o) => {
    G ? (b(J), V(!1)) : W(o, J), setTimeout(() => {
      M(J);
    }, 0);
  }, N = (J, o) => /\.(jsx|tsx|js|ts|css|json)$/.test(J) ? d.includes(J) && J !== o ? (m(`File "${J}" already exists.`), !1) : (m(""), !0) : (m("Playground only supports *.jsx, *.js, *.css, *.json files."), !1);
  return mZ(() => {
    y(
      Object.keys(I).filter(
        (J) => ![zZ, cm].includes(J) && !I[J].hidden
      )
    );
  }, [I]), /* @__PURE__ */ a.jsxs("div", { className: $Z.tabs, children: [
    d.map((J, o) => /* @__PURE__ */ a.jsx(
      sW,
      {
        value: J,
        actived: X === J,
        creating: G,
        readOnlyTabs: c ? d : [pl],
        onValidate: N,
        onOk: (t) => S(t, J),
        onCancel: p,
        onRemove: (t) => {
          i(t), M(pl);
        },
        onClick: () => M(J)
      },
      o + J
    )),
    !c && /* @__PURE__ */ a.jsxs(a.Fragment, { children: [
      /* @__PURE__ */ a.jsx("div", { className: $Z.add, onClick: u, children: "+" }),
      /* @__PURE__ */ a.jsx("div", { className: $Z["import-map-wrapper"], children: /* @__PURE__ */ a.jsx(
        "div",
        {
          className: Kl(
            $Z["tab-item"],
            X === zZ ? $Z.actived : null
          ),
          onClick: s,
          children: "Import Map"
        }
      ) })
    ] })
  ] });
}, CW = "_msg_1t9wq_1", nW = "_error_1t9wq_19", zW = "_warn_1t9wq_23", kW = "_dismiss_1t9wq_33", mc = {
  msg: CW,
  error: nW,
  warn: zW,
  dismiss: kW
}, AI = (Z) => {
  const { type: l, context: m } = Z, [c, I] = YZ(!1);
  return mZ(() => {
    I(!!m);
  }, [m]), c ? /* @__PURE__ */ a.jsxs("div", { className: Kl(mc.msg, mc[l]), children: [
    /* @__PURE__ */ a.jsx("pre", { dangerouslySetInnerHTML: { __html: m } }),
    /* @__PURE__ */ a.jsx("button", { className: mc.dismiss, onClick: () => I(!1), children: "✕" })
  ] }) : null;
}, aW = (Z) => {
  const { showFileSelector: l, fileSelectorReadOnly: m, options: c = {} } = Z, { files: I, setFiles: i, selectedFileName: b, setSelectedFileName: W } = ol(Sl), [X, d] = YZ(""), y = I[b] || {}, G = OI((p) => {
    I[y.name].value = p, i({ ...I });
  }, 250), V = (p) => {
    W(p);
  }, u = (p) => {
    d(p);
  };
  return /* @__PURE__ */ a.jsxs("div", { style: { display: "flex", flexDirection: "column", height: "100%" }, children: [
    l ? /* @__PURE__ */ a.jsx(
      FW,
      {
        onChange: V,
        onError: u,
        readOnly: m
      }
    ) : null,
    /* @__PURE__ */ a.jsx(VW, { onChange: G, file: y, options: c }),
    /* @__PURE__ */ a.jsx(AI, { type: "error", context: X })
  ] });
};
var gm = {}, wW = function() {
  var Z = document.getSelection();
  if (!Z.rangeCount)
    return function() {
    };
  for (var l = document.activeElement, m = [], c = 0; c < Z.rangeCount; c++)
    m.push(Z.getRangeAt(c));
  switch (l.tagName.toUpperCase()) {
    case "INPUT":
    case "TEXTAREA":
      l.blur();
      break;
    default:
      l = null;
      break;
  }
  return Z.removeAllRanges(), function() {
    Z.type === "Caret" && Z.removeAllRanges(), Z.rangeCount || m.forEach(function(I) {
      Z.addRange(I);
    }), l && l.focus();
  };
}, xW = wW, lI = {
  "text/plain": "Text",
  "text/html": "Url",
  default: "Text"
}, UW = "Copy to clipboard: #{key}, Enter";
function jW(Z) {
  var l = (/mac os x/i.test(navigator.userAgent) ? "⌘" : "Ctrl") + "+C";
  return Z.replace(/#{\s*key\s*}/g, l);
}
function KW(Z, l) {
  var m, c, I, i, b, W, X = !1;
  l || (l = {}), m = l.debug || !1;
  try {
    I = xW(), i = document.createRange(), b = document.getSelection(), W = document.createElement("span"), W.textContent = Z, W.ariaHidden = "true", W.style.all = "unset", W.style.position = "fixed", W.style.top = 0, W.style.clip = "rect(0, 0, 0, 0)", W.style.whiteSpace = "pre", W.style.webkitUserSelect = "text", W.style.MozUserSelect = "text", W.style.msUserSelect = "text", W.style.userSelect = "text", W.addEventListener("copy", function(y) {
      if (y.stopPropagation(), l.format)
        if (y.preventDefault(), typeof y.clipboardData > "u") {
          m && console.warn("unable to use e.clipboardData"), m && console.warn("trying IE specific stuff"), window.clipboardData.clearData();
          var G = lI[l.format] || lI.default;
          window.clipboardData.setData(G, Z);
        } else
          y.clipboardData.clearData(), y.clipboardData.setData(l.format, Z);
      l.onCopy && (y.preventDefault(), l.onCopy(y.clipboardData));
    }), document.body.appendChild(W), i.selectNodeContents(W), b.addRange(i);
    var d = document.execCommand("copy");
    if (!d)
      throw new Error("copy command was unsuccessful");
    X = !0;
  } catch (y) {
    m && console.error("unable to copy using execCommand: ", y), m && console.warn("trying IE specific stuff");
    try {
      window.clipboardData.setData(l.format || "text", Z), l.onCopy && l.onCopy(window.clipboardData), X = !0;
    } catch (G) {
      m && console.error("unable to copy using clipboardData: ", G), m && console.error("falling back to prompt"), c = jW("message" in l ? l.message : UW), window.prompt(c, Z);
    }
  } finally {
    b && (typeof b.removeRange == "function" ? b.removeRange(i) : b.removeAllRanges()), W && document.body.removeChild(W), I();
  }
  return X;
}
var oW = KW;
function Rc(Z) {
  "@babel/helpers - typeof";
  return Rc = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(l) {
    return typeof l;
  } : function(l) {
    return l && typeof Symbol == "function" && l.constructor === Symbol && l !== Symbol.prototype ? "symbol" : typeof l;
  }, Rc(Z);
}
Object.defineProperty(gm, "__esModule", {
  value: !0
});
gm.CopyToClipboard = void 0;
var zm = PI(MZ), HW = PI(oW), TW = ["text", "onCopy", "options", "children"];
function PI(Z) {
  return Z && Z.__esModule ? Z : { default: Z };
}
function mI(Z, l) {
  var m = Object.keys(Z);
  if (Object.getOwnPropertySymbols) {
    var c = Object.getOwnPropertySymbols(Z);
    l && (c = c.filter(function(I) {
      return Object.getOwnPropertyDescriptor(Z, I).enumerable;
    })), m.push.apply(m, c);
  }
  return m;
}
function cI(Z) {
  for (var l = 1; l < arguments.length; l++) {
    var m = arguments[l] != null ? arguments[l] : {};
    l % 2 ? mI(Object(m), !0).forEach(function(c) {
      wc(Z, c, m[c]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(Z, Object.getOwnPropertyDescriptors(m)) : mI(Object(m)).forEach(function(c) {
      Object.defineProperty(Z, c, Object.getOwnPropertyDescriptor(m, c));
    });
  }
  return Z;
}
function gW(Z, l) {
  if (Z == null)
    return {};
  var m = vW(Z, l), c, I;
  if (Object.getOwnPropertySymbols) {
    var i = Object.getOwnPropertySymbols(Z);
    for (I = 0; I < i.length; I++)
      c = i[I], !(l.indexOf(c) >= 0) && Object.prototype.propertyIsEnumerable.call(Z, c) && (m[c] = Z[c]);
  }
  return m;
}
function vW(Z, l) {
  if (Z == null)
    return {};
  var m = {}, c = Object.keys(Z), I, i;
  for (i = 0; i < c.length; i++)
    I = c[i], !(l.indexOf(I) >= 0) && (m[I] = Z[I]);
  return m;
}
function tW(Z, l) {
  if (!(Z instanceof l))
    throw new TypeError("Cannot call a class as a function");
}
function II(Z, l) {
  for (var m = 0; m < l.length; m++) {
    var c = l[m];
    c.enumerable = c.enumerable || !1, c.configurable = !0, "value" in c && (c.writable = !0), Object.defineProperty(Z, c.key, c);
  }
}
function DW(Z, l, m) {
  return l && II(Z.prototype, l), m && II(Z, m), Object.defineProperty(Z, "prototype", { writable: !1 }), Z;
}
function QW(Z, l) {
  if (typeof l != "function" && l !== null)
    throw new TypeError("Super expression must either be null or a function");
  Z.prototype = Object.create(l && l.prototype, { constructor: { value: Z, writable: !0, configurable: !0 } }), Object.defineProperty(Z, "prototype", { writable: !1 }), l && pc(Z, l);
}
function pc(Z, l) {
  return pc = Object.setPrototypeOf || function(c, I) {
    return c.__proto__ = I, c;
  }, pc(Z, l);
}
function eW(Z) {
  var l = BW();
  return function() {
    var c = Um(Z), I;
    if (l) {
      var i = Um(this).constructor;
      I = Reflect.construct(c, arguments, i);
    } else
      I = c.apply(this, arguments);
    return OW(this, I);
  };
}
function OW(Z, l) {
  if (l && (Rc(l) === "object" || typeof l == "function"))
    return l;
  if (l !== void 0)
    throw new TypeError("Derived constructors may only return object or undefined");
  return fI(Z);
}
function fI(Z) {
  if (Z === void 0)
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return Z;
}
function BW() {
  if (typeof Reflect > "u" || !Reflect.construct || Reflect.construct.sham)
    return !1;
  if (typeof Proxy == "function")
    return !0;
  try {
    return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
    })), !0;
  } catch {
    return !1;
  }
}
function Um(Z) {
  return Um = Object.setPrototypeOf ? Object.getPrototypeOf : function(m) {
    return m.__proto__ || Object.getPrototypeOf(m);
  }, Um(Z);
}
function wc(Z, l, m) {
  return l in Z ? Object.defineProperty(Z, l, { value: m, enumerable: !0, configurable: !0, writable: !0 }) : Z[l] = m, Z;
}
var rI = /* @__PURE__ */ function(Z) {
  QW(m, Z);
  var l = eW(m);
  function m() {
    var c;
    tW(this, m);
    for (var I = arguments.length, i = new Array(I), b = 0; b < I; b++)
      i[b] = arguments[b];
    return c = l.call.apply(l, [this].concat(i)), wc(fI(c), "onClick", function(W) {
      var X = c.props, d = X.text, y = X.onCopy, G = X.children, V = X.options, u = zm.default.Children.only(G), p = (0, HW.default)(d, V);
      y && y(d, p), u && u.props && typeof u.props.onClick == "function" && u.props.onClick(W);
    }), c;
  }
  return DW(m, [{
    key: "render",
    value: function() {
      var I = this.props;
      I.text, I.onCopy, I.options;
      var i = I.children, b = gW(I, TW), W = zm.default.Children.only(i);
      return /* @__PURE__ */ zm.default.cloneElement(W, cI(cI({}, b), {}, {
        onClick: this.onClick
      }));
    }
  }]), m;
}(zm.default.PureComponent);
gm.CopyToClipboard = rI;
wc(rI, "defaultProps", {
  onCopy: void 0,
  options: void 0
});
var EW = gm, Sc = EW.CopyToClipboard;
Sc.CopyToClipboard = Sc;
var AW = Sc, qI = { exports: {} };
(function(Z, l) {
  (function(m, c) {
    c();
  })(el, function() {
    function m(d, y) {
      return typeof y > "u" ? y = { autoBom: !1 } : typeof y != "object" && (console.warn("Deprecated: Expected third argument to be a object"), y = { autoBom: !y }), y.autoBom && /^\s*(?:text\/\S*|application\/xml|\S*\/\S*\+xml)\s*;.*charset\s*=\s*utf-8/i.test(d.type) ? new Blob(["\uFEFF", d], { type: d.type }) : d;
    }
    function c(d, y, G) {
      var V = new XMLHttpRequest();
      V.open("GET", d), V.responseType = "blob", V.onload = function() {
        X(V.response, y, G);
      }, V.onerror = function() {
        console.error("could not download file");
      }, V.send();
    }
    function I(d) {
      var y = new XMLHttpRequest();
      y.open("HEAD", d, !1);
      try {
        y.send();
      } catch {
      }
      return 200 <= y.status && 299 >= y.status;
    }
    function i(d) {
      try {
        d.dispatchEvent(new MouseEvent("click"));
      } catch {
        var y = document.createEvent("MouseEvents");
        y.initMouseEvent("click", !0, !0, window, 0, 0, 0, 80, 20, !1, !1, !1, !1, 0, null), d.dispatchEvent(y);
      }
    }
    var b = typeof window == "object" && window.window === window ? window : typeof self == "object" && self.self === self ? self : typeof el == "object" && el.global === el ? el : void 0, W = b.navigator && /Macintosh/.test(navigator.userAgent) && /AppleWebKit/.test(navigator.userAgent) && !/Safari/.test(navigator.userAgent), X = b.saveAs || (typeof window != "object" || window !== b ? function() {
    } : "download" in HTMLAnchorElement.prototype && !W ? function(d, y, G) {
      var V = b.URL || b.webkitURL, u = document.createElement("a");
      y = y || d.name || "download", u.download = y, u.rel = "noopener", typeof d == "string" ? (u.href = d, u.origin === location.origin ? i(u) : I(u.href) ? c(d, y, G) : i(u, u.target = "_blank")) : (u.href = V.createObjectURL(d), setTimeout(function() {
        V.revokeObjectURL(u.href);
      }, 4e4), setTimeout(function() {
        i(u);
      }, 0));
    } : "msSaveOrOpenBlob" in navigator ? function(d, y, G) {
      if (y = y || d.name || "download", typeof d != "string")
        navigator.msSaveOrOpenBlob(m(d, G), y);
      else if (I(d))
        c(d, y, G);
      else {
        var V = document.createElement("a");
        V.href = d, V.target = "_blank", setTimeout(function() {
          i(V);
        });
      }
    } : function(d, y, G, V) {
      if (V = V || open("", "_blank"), V && (V.document.title = V.document.body.innerText = "downloading..."), typeof d == "string")
        return c(d, y, G);
      var u = d.type === "application/octet-stream", p = /constructor/i.test(b.HTMLElement) || b.safari, M = /CriOS\/[\d]+/.test(navigator.userAgent);
      if ((M || u && p || W) && typeof FileReader < "u") {
        var s = new FileReader();
        s.onloadend = function() {
          var J = s.result;
          J = M ? J : J.replace(/^data:[^;]*;/, "data:attachment/file;"), V ? V.location.href = J : location = J, V = null;
        }, s.readAsDataURL(d);
      } else {
        var S = b.URL || b.webkitURL, N = S.createObjectURL(d);
        V ? V.location = N : location.href = N, V = null, setTimeout(function() {
          S.revokeObjectURL(N);
        }, 4e4);
      }
    });
    b.saveAs = X.saveAs = X, Z.exports = X;
  });
})(qI);
var PW = qI.exports;
const fW = `<svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor"><g><rect x="4" y="18" width="16" height="2" rx="1" ry="1"></rect><rect x="3" y="17" width="4" height="2" rx="1" ry="1" transform="rotate(-90 5 18)"></rect><rect x="17" y="17" width="4" height="2" rx="1" ry="1" transform="rotate(-90 19 18)"></rect><path d="M12 15a1 1 0 0 1-.58-.18l-4-2.82a1 1 0 0 1-.24-1.39a1 1 0 0 1 1.4-.24L12 12.76l3.4-2.56a1 1 0 0 1 1.2 1.6l-4 3a1 1 0 0 1-.6.2z"></path><path d="M12 13a1 1 0 0 1-1-1V4a1 1 0 0 1 2 0v8a1 1 0 0 1-1 1z"></path></g></svg>
`, rW = `<svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor"><path d="M10.9,2.1c-4.6,0.5-8.3,4.2-8.8,8.7c-0.5,4.7,2.2,8.9,6.3,10.5C8.7,21.4,9,21.2,9,20.8v-1.6c0,0-0.4,0.1-0.9,0.1 c-1.4,0-2-1.2-2.1-1.9c-0.1-0.4-0.3-0.7-0.6-1C5.1,16.3,5,16.3,5,16.2C5,16,5.3,16,5.4,16c0.6,0,1.1,0.7,1.3,1c0.5,0.8,1.1,1,1.4,1 c0.4,0,0.7-0.1,0.9-0.2c0.1-0.7,0.4-1.4,1-1.8c-2.3-0.5-4-1.8-4-4c0-1.1,0.5-2.2,1.2-3C7.1,8.8,7,8.3,7,7.6C7,7.2,7,6.6,7.3,6 c0,0,1.4,0,2.8,1.3C10.6,7.1,11.3,7,12,7s1.4,0.1,2,0.3C15.3,6,16.8,6,16.8,6C17,6.6,17,7.2,17,7.6c0,0.8-0.1,1.2-0.2,1.4 c0.7,0.8,1.2,1.8,1.2,3c0,2.2-1.7,3.5-4,4c0.6,0.5,1,1.4,1,2.3v2.6c0,0.3,0.3,0.6,0.7,0.5c3.7-1.5,6.3-5.1,6.3-9.3 C22,6.1,16.9,1.4,10.9,2.1z"></path></svg>
`, qW = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="dark"><path fill="currentColor" d="M12.1,22c-0.3,0-0.6,0-0.9,0c-5.5-0.5-9.5-5.4-9-10.9c0.4-4.8,4.2-8.6,9-9c0.4,0,0.8,0.2,1,0.5c0.2,0.3,0.2,0.8-0.1,1.1c-2,2.7-1.4,6.4,1.3,8.4c2.1,1.6,5,1.6,7.1,0c0.3-0.2,0.7-0.3,1.1-0.1c0.3,0.2,0.5,0.6,0.5,1c-0.2,2.7-1.5,5.1-3.6,6.8C16.6,21.2,14.4,22,12.1,22zM9.3,4.4c-2.9,1-5,3.6-5.2,6.8c-0.4,4.4,2.8,8.3,7.2,8.7c2.1,0.2,4.2-0.4,5.8-1.8c1.1-0.9,1.9-2.1,2.4-3.4c-2.5,0.9-5.3,0.5-7.5-1.1C9.2,11.4,8.1,7.7,9.3,4.4z"></path></svg>
`, _W = "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiBhcmlhLWhpZGRlbj0idHJ1ZSIgcm9sZT0iaW1nIiBjbGFzcz0iaWNvbmlmeSBpY29uaWZ5LS1sb2dvcyIgd2lkdGg9IjM1LjkzIiBoZWlnaHQ9IjMyIiBwcmVzZXJ2ZUFzcGVjdFJhdGlvPSJ4TWlkWU1pZCBtZWV0IiB2aWV3Qm94PSIwIDAgMjU2IDIyOCI+PHBhdGggZmlsbD0iIzAwRDhGRiIgZD0iTTIxMC40ODMgNzMuODI0YTE3MS40OSAxNzEuNDkgMCAwIDAtOC4yNC0yLjU5N2MuNDY1LTEuOS44OTMtMy43NzcgMS4yNzMtNS42MjFjNi4yMzgtMzAuMjgxIDIuMTYtNTQuNjc2LTExLjc2OS02Mi43MDhjLTEzLjM1NS03LjctMzUuMTk2LjMyOS01Ny4yNTQgMTkuNTI2YTE3MS4yMyAxNzEuMjMgMCAwIDAtNi4zNzUgNS44NDhhMTU1Ljg2NiAxNTUuODY2IDAgMCAwLTQuMjQxLTMuOTE3QzEwMC43NTkgMy44MjkgNzcuNTg3LTQuODIyIDYzLjY3MyAzLjIzM0M1MC4zMyAxMC45NTcgNDYuMzc5IDMzLjg5IDUxLjk5NSA2Mi41ODhhMTcwLjk3NCAxNzAuOTc0IDAgMCAwIDEuODkyIDguNDhjLTMuMjguOTMyLTYuNDQ1IDEuOTI0LTkuNDc0IDIuOThDMTcuMzA5IDgzLjQ5OCAwIDk4LjMwNyAwIDExMy42NjhjMCAxNS44NjUgMTguNTgyIDMxLjc3OCA0Ni44MTIgNDEuNDI3YTE0NS41MiAxNDUuNTIgMCAwIDAgNi45MjEgMi4xNjVhMTY3LjQ2NyAxNjcuNDY3IDAgMCAwLTIuMDEgOS4xMzhjLTUuMzU0IDI4LjItMS4xNzMgNTAuNTkxIDEyLjEzNCA1OC4yNjZjMTMuNzQ0IDcuOTI2IDM2LjgxMi0uMjIgNTkuMjczLTE5Ljg1NWExNDUuNTY3IDE0NS41NjcgMCAwIDAgNS4zNDItNC45MjNhMTY4LjA2NCAxNjguMDY0IDAgMCAwIDYuOTIgNi4zMTRjMjEuNzU4IDE4LjcyMiA0My4yNDYgMjYuMjgyIDU2LjU0IDE4LjU4NmMxMy43MzEtNy45NDkgMTguMTk0LTMyLjAwMyAxMi40LTYxLjI2OGExNDUuMDE2IDE0NS4wMTYgMCAwIDAtMS41MzUtNi44NDJjMS42Mi0uNDggMy4yMS0uOTc0IDQuNzYtMS40ODhjMjkuMzQ4LTkuNzIzIDQ4LjQ0My0yNS40NDMgNDguNDQzLTQxLjUyYzAtMTUuNDE3LTE3Ljg2OC0zMC4zMjYtNDUuNTE3LTM5Ljg0NFptLTYuMzY1IDcwLjk4NGMtMS40LjQ2My0yLjgzNi45MS00LjMgMS4zNDVjLTMuMjQtMTAuMjU3LTcuNjEyLTIxLjE2My0xMi45NjMtMzIuNDMyYzUuMTA2LTExIDkuMzEtMjEuNzY3IDEyLjQ1OS0zMS45NTdjMi42MTkuNzU4IDUuMTYgMS41NTcgNy42MSAyLjRjMjMuNjkgOC4xNTYgMzguMTQgMjAuMjEzIDM4LjE0IDI5LjUwNGMwIDkuODk2LTE1LjYwNiAyMi43NDMtNDAuOTQ2IDMxLjE0Wm0tMTAuNTE0IDIwLjgzNGMyLjU2MiAxMi45NCAyLjkyNyAyNC42NCAxLjIzIDMzLjc4N2MtMS41MjQgOC4yMTktNC41OSAxMy42OTgtOC4zODIgMTUuODkzYy04LjA2NyA0LjY3LTI1LjMyLTEuNC00My45MjctMTcuNDEyYTE1Ni43MjYgMTU2LjcyNiAwIDAgMS02LjQzNy01Ljg3YzcuMjE0LTcuODg5IDE0LjQyMy0xNy4wNiAyMS40NTktMjcuMjQ2YzEyLjM3Ni0xLjA5OCAyNC4wNjgtMi44OTQgMzQuNjcxLTUuMzQ1YTEzNC4xNyAxMzQuMTcgMCAwIDEgMS4zODYgNi4xOTNaTTg3LjI3NiAyMTQuNTE1Yy03Ljg4MiAyLjc4My0xNC4xNiAyLjg2My0xNy45NTUuNjc1Yy04LjA3NS00LjY1Ny0xMS40MzItMjIuNjM2LTYuODUzLTQ2Ljc1MmExNTYuOTIzIDE1Ni45MjMgMCAwIDEgMS44NjktOC40OTljMTAuNDg2IDIuMzIgMjIuMDkzIDMuOTg4IDM0LjQ5OCA0Ljk5NGM3LjA4NCA5Ljk2NyAxNC41MDEgMTkuMTI4IDIxLjk3NiAyNy4xNWExMzQuNjY4IDEzNC42NjggMCAwIDEtNC44NzcgNC40OTJjLTkuOTMzIDguNjgyLTE5Ljg4NiAxNC44NDItMjguNjU4IDE3Ljk0Wk01MC4zNSAxNDQuNzQ3Yy0xMi40ODMtNC4yNjctMjIuNzkyLTkuODEyLTI5Ljg1OC0xNS44NjNjLTYuMzUtNS40MzctOS41NTUtMTAuODM2LTkuNTU1LTE1LjIxNmMwLTkuMzIyIDEzLjg5Ny0yMS4yMTIgMzcuMDc2LTI5LjI5M2MyLjgxMy0uOTggNS43NTctMS45MDUgOC44MTItMi43NzNjMy4yMDQgMTAuNDIgNy40MDYgMjEuMzE1IDEyLjQ3NyAzMi4zMzJjLTUuMTM3IDExLjE4LTkuMzk5IDIyLjI0OS0xMi42MzQgMzIuNzkyYTEzNC43MTggMTM0LjcxOCAwIDAgMS02LjMxOC0xLjk3OVptMTIuMzc4LTg0LjI2Yy00LjgxMS0yNC41ODctMS42MTYtNDMuMTM0IDYuNDI1LTQ3Ljc4OWM4LjU2NC00Ljk1OCAyNy41MDIgMi4xMTEgNDcuNDYzIDE5LjgzNWExNDQuMzE4IDE0NC4zMTggMCAwIDEgMy44NDEgMy41NDVjLTcuNDM4IDcuOTg3LTE0Ljc4NyAxNy4wOC0yMS44MDggMjYuOTg4Yy0xMi4wNCAxLjExNi0yMy41NjUgMi45MDgtMzQuMTYxIDUuMzA5YTE2MC4zNDIgMTYwLjM0MiAwIDAgMS0xLjc2LTcuODg3Wm0xMTAuNDI3IDI3LjI2OGEzNDcuOCAzNDcuOCAwIDAgMC03Ljc4NS0xMi44MDNjOC4xNjggMS4wMzMgMTUuOTk0IDIuNDA0IDIzLjM0MyA0LjA4Yy0yLjIwNiA3LjA3Mi00Ljk1NiAxNC40NjUtOC4xOTMgMjIuMDQ1YTM4MS4xNTEgMzgxLjE1MSAwIDAgMC03LjM2NS0xMy4zMjJabS00NS4wMzItNDMuODYxYzUuMDQ0IDUuNDY1IDEwLjA5NiAxMS41NjYgMTUuMDY1IDE4LjE4NmEzMjIuMDQgMzIyLjA0IDAgMCAwLTMwLjI1Ny0uMDA2YzQuOTc0LTYuNTU5IDEwLjA2OS0xMi42NTIgMTUuMTkyLTE4LjE4Wk04Mi44MDIgODcuODNhMzIzLjE2NyAzMjMuMTY3IDAgMCAwLTcuMjI3IDEzLjIzOGMtMy4xODQtNy41NTMtNS45MDktMTQuOTgtOC4xMzQtMjIuMTUyYzcuMzA0LTEuNjM0IDE1LjA5My0yLjk3IDIzLjIwOS0zLjk4NGEzMjEuNTI0IDMyMS41MjQgMCAwIDAtNy44NDggMTIuODk3Wm04LjA4MSA2NS4zNTJjLTguMzg1LS45MzYtMTYuMjkxLTIuMjAzLTIzLjU5My0zLjc5M2MyLjI2LTcuMyA1LjA0NS0xNC44ODUgOC4yOTgtMjIuNmEzMjEuMTg3IDMyMS4xODcgMCAwIDAgNy4yNTcgMTMuMjQ2YzIuNTk0IDQuNDggNS4yOCA4Ljg2OCA4LjAzOCAxMy4xNDdabTM3LjU0MiAzMS4wM2MtNS4xODQtNS41OTItMTAuMzU0LTExLjc3OS0xNS40MDMtMTguNDMzYzQuOTAyLjE5MiA5Ljg5OS4yOSAxNC45NzguMjljNS4yMTggMCAxMC4zNzYtLjExNyAxNS40NTMtLjM0M2MtNC45ODUgNi43NzQtMTAuMDE4IDEyLjk3LTE1LjAyOCAxOC40ODZabTUyLjE5OC01Ny44MTdjMy40MjIgNy44IDYuMzA2IDE1LjM0NSA4LjU5NiAyMi41MmMtNy40MjIgMS42OTQtMTUuNDM2IDMuMDU4LTIzLjg4IDQuMDcxYTM4Mi40MTcgMzgyLjQxNyAwIDAgMCA3Ljg1OS0xMy4wMjZhMzQ3LjQwMyAzNDcuNDAzIDAgMCAwIDcuNDI1LTEzLjU2NVptLTE2Ljg5OCA4LjEwMWEzNTguNTU3IDM1OC41NTcgMCAwIDEtMTIuMjgxIDE5LjgxNWEzMjkuNCAzMjkuNCAwIDAgMS0yMy40NDQuODIzYy03Ljk2NyAwLTE1LjcxNi0uMjQ4LTIzLjE3OC0uNzMyYTMxMC4yMDIgMzEwLjIwMiAwIDAgMS0xMi41MTMtMTkuODQ2aC4wMDFhMzA3LjQxIDMwNy40MSAwIDAgMS0xMC45MjMtMjAuNjI3YTMxMC4yNzggMzEwLjI3OCAwIDAgMSAxMC44OS0yMC42MzdsLS4wMDEuMDAxYTMwNy4zMTggMzA3LjMxOCAwIDAgMSAxMi40MTMtMTkuNzYxYzcuNjEzLS41NzYgMTUuNDItLjg3NiAyMy4zMS0uODc2SDEyOGM3LjkyNiAwIDE1Ljc0My4zMDMgMjMuMzU0Ljg4M2EzMjkuMzU3IDMyOS4zNTcgMCAwIDEgMTIuMzM1IDE5LjY5NWEzNTguNDg5IDM1OC40ODkgMCAwIDEgMTEuMDM2IDIwLjU0YTMyOS40NzIgMzI5LjQ3MiAwIDAgMS0xMSAyMC43MjJabTIyLjU2LTEyMi4xMjRjOC41NzIgNC45NDQgMTEuOTA2IDI0Ljg4MSA2LjUyIDUxLjAyNmMtLjM0NCAxLjY2OC0uNzMgMy4zNjctMS4xNSA1LjA5Yy0xMC42MjItMi40NTItMjIuMTU1LTQuMjc1LTM0LjIzLTUuNDA4Yy03LjAzNC0xMC4wMTctMTQuMzIzLTE5LjEyNC0yMS42NC0yNy4wMDhhMTYwLjc4OSAxNjAuNzg5IDAgMCAxIDUuODg4LTUuNGMxOC45LTE2LjQ0NyAzNi41NjQtMjIuOTQxIDQ0LjYxMi0xOC4zWk0xMjggOTAuODA4YzEyLjYyNSAwIDIyLjg2IDEwLjIzNSAyMi44NiAyMi44NnMtMTAuMjM1IDIyLjg2LTIyLjg2IDIyLjg2cy0yMi44Ni0xMC4yMzUtMjIuODYtMjIuODZzMTAuMjM1LTIyLjg2IDIyLjg2LTIyLjg2WiI+PC9wYXRoPjwvc3ZnPgo=", $W = `<svg width="18" height="18" viewBox="0 0 24 24"><g fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="18" cy="5" r="3"></circle><circle cx="6" cy="12" r="3"></circle><circle cx="18" cy="19" r="3"></circle><path d="M8.59 13.51l6.83 3.98"></path><path d="M15.41 6.51l-6.82 3.98"></path></g></svg>
`, ZX = '<svg width="18" height="18" t="1698308238530" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="4870" width="48" height="48" xmlns:xlink="http://www.w3.org/1999/xlink"><path d="M512 981.333333C252.8 981.333333 42.666667 771.2 42.666667 512S252.8 42.666667 512 42.666667s469.333333 210.133333 469.333333 469.333333-210.133333 469.333333-469.333333 469.333333z m-50.432-326.101333L310.613333 504.32a32 32 0 0 0-45.226666 45.226667l174.72 174.762666a32.341333 32.341333 0 0 0 0.341333 0.341334l0.256 0.213333a32 32 0 0 0 50.048-6.144l337.450667-379.605333a32 32 0 1 0-47.872-42.496l-318.762667 358.613333z" fill="#52C41A" p-id="4871"></path></svg>', lX = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="light"><path fill="currentColor" d="M12,18c-3.3,0-6-2.7-6-6s2.7-6,6-6s6,2.7,6,6S15.3,18,12,18zM12,8c-2.2,0-4,1.8-4,4c0,2.2,1.8,4,4,4c2.2,0,4-1.8,4-4C16,9.8,14.2,8,12,8z"></path><path fill="currentColor" d="M12,4c-0.6,0-1-0.4-1-1V1c0-0.6,0.4-1,1-1s1,0.4,1,1v2C13,3.6,12.6,4,12,4z"></path><path fill="currentColor" d="M12,24c-0.6,0-1-0.4-1-1v-2c0-0.6,0.4-1,1-1s1,0.4,1,1v2C13,23.6,12.6,24,12,24z"></path><path fill="currentColor" d="M5.6,6.6c-0.3,0-0.5-0.1-0.7-0.3L3.5,4.9c-0.4-0.4-0.4-1,0-1.4s1-0.4,1.4,0l1.4,1.4c0.4,0.4,0.4,1,0,1.4C6.2,6.5,5.9,6.6,5.6,6.6z"></path><path fill="currentColor" d="M19.8,20.8c-0.3,0-0.5-0.1-0.7-0.3l-1.4-1.4c-0.4-0.4-0.4-1,0-1.4s1-0.4,1.4,0l1.4,1.4c0.4,0.4,0.4,1,0,1.4C20.3,20.7,20,20.8,19.8,20.8z"></path><path fill="currentColor" d="M3,13H1c-0.6,0-1-0.4-1-1s0.4-1,1-1h2c0.6,0,1,0.4,1,1S3.6,13,3,13z"></path><path fill="currentColor" d="M23,13h-2c-0.6,0-1-0.4-1-1s0.4-1,1-1h2c0.6,0,1,0.4,1,1S23.6,13,23,13z"></path><path fill="currentColor" d="M4.2,20.8c-0.3,0-0.5-0.1-0.7-0.3c-0.4-0.4-0.4-1,0-1.4l1.4-1.4c0.4-0.4,1-0.4,1.4,0s0.4,1,0,1.4l-1.4,1.4C4.7,20.7,4.5,20.8,4.2,20.8z"></path><path fill="currentColor" d="M18.4,6.6c-0.3,0-0.5-0.1-0.7-0.3c-0.4-0.4-0.4-1,0-1.4l1.4-1.4c0.4-0.4,1-0.4,1.4,0s0.4,1,0,1.4l-1.4,1.4C18.9,6.5,18.6,6.6,18.4,6.6z"></path></svg>
`, mX = `module.exports = {
  root: true,
  env: { browser: true, es2020: true },
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:react-hooks/recommended',
  ],
  ignorePatterns: ['dist', '.eslintrc.cjs'],
  parser: '@typescript-eslint/parser',
  plugins: ['react-refresh'],
  rules: {
    'react-refresh/only-export-components': [
      'warn',
      { allowConstantExport: true },
    ],
  },
}
`, cX = `# Logs
logs
*.log
npm-debug.log*
yarn-debug.log*
yarn-error.log*
pnpm-debug.log*
lerna-debug.log*

node_modules
dist
dist-ssr
*.local

# Editor directories and files
.vscode/*
!.vscode/extensions.json
.idea
.DS_Store
*.suo
*.ntvs*
*.njsproj
*.sln
*.sw?
`, IX = `<!doctype html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <link rel="icon" type="image/svg+xml" href="/vite.svg" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Vite + React + TS</title>
  </head>
  <body>
    <div id="root"></div>
    <script type="module" src="/src/main.tsx"><\/script>
  </body>
</html>
`, iX = `{
  "name": "react-playground",
  "author": "fewismuch",
  "version": "1.0.0",
  "type": "module",
  "scripts": {
    "dev": "vite",
    "build": "tsc && vite build",
    "lint": "eslint . --ext ts,tsx --report-unused-disable-directives --max-warnings 0",
    "preview": "vite preview"
  },
  "dependencies": {
    "react": "^18.2.0",
    "react-dom": "^18.2.0"
  },
  "devDependencies": {
    "@types/react": "^18.2.15",
    "@types/react-dom": "^18.2.7",
    "@typescript-eslint/eslint-plugin": "^6.0.0",
    "@typescript-eslint/parser": "^6.0.0",
    "@vitejs/plugin-react-swc": "^3.3.2",
    "eslint": "^8.45.0",
    "eslint-plugin-react-hooks": "^4.6.0",
    "eslint-plugin-react-refresh": "^0.4.3",
    "typescript": "^5.0.2",
    "vite": "^4.4.5"
  }
}
`, bX = `# React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type aware lint rules:

- Configure the top-level \`parserOptions\` property like this:

\`\`\`js
   parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    project: ['./tsconfig.json', './tsconfig.node.json'],
    tsconfigRootDir: __dirname,
   },
\`\`\`

- Replace \`plugin:@typescript-eslint/recommended\` to \`plugin:@typescript-eslint/recommended-type-checked\` or \`plugin:@typescript-eslint/strict-type-checked\`
- Optionally add \`plugin:@typescript-eslint/stylistic-type-checked\`
- Install [eslint-plugin-react](https://github.com/jsx-eslint/eslint-plugin-react) and add \`plugin:react/recommended\` & \`plugin:react/jsx-runtime\` to the \`extends\` list
  gitignore
`, WX = `{
  "compilerOptions": {
    "target": "ES2020",
    "useDefineForClassFields": true,
    "lib": ["ES2020", "DOM", "DOM.Iterable"],
    "module": "ESNext",
    "skipLibCheck": true,

    /* Bundler mode */
    "moduleResolution": "bundler",
    "allowImportingTsExtensions": true,
    "resolveJsonModule": true,
    "isolatedModules": true,
    "noEmit": true,
    "jsx": "react-jsx",

    /* Linting */
    "strict": true,
    "noUnusedLocals": true,
    "noUnusedParameters": true,
    "noFallthroughCasesInSwitch": true
  },
  "include": ["src"],
  "references": [{ "path": "./tsconfig.node.json" }]
}
`, XX = `{
  "compilerOptions": {
    "composite": true,
    "skipLibCheck": true,
    "module": "ESNext",
    "moduleResolution": "bundler",
    "allowSyntheticDefaultImports": true
  },
  "include": ["vite.config.ts"]
}
`, dX = `import react from '@vitejs/plugin-react-swc'
import { defineConfig } from 'vite'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()]
})
`, Xl = {
  DownloadSvg: fW,
  GithubSvg: rW,
  MoonSvg: qW,
  ReactSvg: _W,
  ShareSvg: $W,
  SunSvg: lX,
  SuccessSvg: ZX
};
async function yX(Z) {
  const { default: l } = await import("https://esm.sh/jszip@3.10.1"), m = new l();
  m.file("index.html", IX), m.file("package.json", iX), m.file("vite.config.js", dX), m.file("tsconfig.json", WX), m.file("tsconfig.node.json", XX), m.file("README.md", bX), m.file("eslintrc.md", mX), m.file("gitignore.md", cX);
  const c = m.folder("src");
  Object.keys(Z).forEach((i) => {
    Z[i].name !== zZ ? c.file(i, Z[i].value) : m.file(i, Z[i].value);
  });
  const I = await m.generateAsync({ type: "blob" });
  PW.saveAs(I, "react-project.zip");
}
const LX = "_header_1whkb_1", GX = "_logo_1whkb_15", YX = "_links_1whkb_24", VX = "_theme_1whkb_43", Pl = {
  header: LX,
  logo: GX,
  links: YX,
  theme: VX
}, uX = () => {
  const { files: Z, theme: l, changeTheme: m, filesHash: c } = ol(Sl), [I, i] = YZ(!1), [b, W] = YZ(!1), X = () => {
    i(!0), setTimeout(() => {
      i(!1);
    }, 3e3);
  }, d = () => {
    yX(Z).then(() => {
      W(!0), setTimeout(() => {
        W(!1);
      }, 3e3);
    });
  };
  return /* @__PURE__ */ a.jsxs("nav", { className: Pl.header, children: [
    /* @__PURE__ */ a.jsxs("div", { className: Pl.logo, children: [
      /* @__PURE__ */ a.jsx("img", { alt: "logo", src: Xl.ReactSvg }),
      /* @__PURE__ */ a.jsx("span", { children: "React Playground" })
    ] }),
    /* @__PURE__ */ a.jsxs("div", { className: Pl.links, children: [
      l === "light" && /* @__PURE__ */ a.jsx(
        "button",
        {
          title: "Toggle dark mode",
          className: Pl.theme,
          dangerouslySetInnerHTML: { __html: Xl.SunSvg },
          onClick: () => m("dark")
        }
      ),
      l === "dark" && /* @__PURE__ */ a.jsx(
        "button",
        {
          title: "Toggle light mode",
          className: Pl.theme,
          dangerouslySetInnerHTML: { __html: Xl.MoonSvg },
          onClick: () => m("light")
        }
      ),
      /* @__PURE__ */ a.jsx(
        AW.CopyToClipboard,
        {
          text: `${location.host}${location.pathname}#${c}`,
          onCopy: X,
          children: /* @__PURE__ */ a.jsx(
            "button",
            {
              title: "Copy sharable URL",
              dangerouslySetInnerHTML: { __html: I ? Xl.SuccessSvg : Xl.ShareSvg },
              onClick: X
            }
          )
        }
      ),
      /* @__PURE__ */ a.jsx(
        "button",
        {
          title: "Download project files",
          dangerouslySetInnerHTML: { __html: b ? Xl.SuccessSvg : Xl.DownloadSvg },
          onClick: d
        }
      ),
      /* @__PURE__ */ a.jsx(
        "a",
        {
          href: "https://github.com/fewismuch/react-playground",
          target: "_blank",
          title: "View on GitHub",
          children: /* @__PURE__ */ a.jsx("button", { dangerouslySetInnerHTML: { __html: Xl.GithubSvg } })
        }
      )
    ] })
  ] });
function JX() {
  let Z;
  try {
    if (Z = iI && (window.URL || window.webkitURL).createObjectURL(iI), !Z)
      throw "";
    return new Worker(Z);
  } catch {
    return new Worker("data:application/javascript;base64," + _I);
  } finally {
    Z && (window.URL || window.webkitURL).revokeObjectURL(Z);
  }
}
const bI = `<!doctype html>
<html lang="en">
<head>
  <meta charset="UTF-8"/>
  <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
  <title>Preview</title>
  <!-- es-module-shims -->
</head>
<body>
<script>
  window.addEventListener('error', (e) => {
    window.parent.postMessage({type: 'ERROR', message: e.message})
  })

  window.addEventListener('load', () => {
    window.parent.postMessage({type: 'LOADED', message: ''})
  })

  window.addEventListener('message', ({data}) => {
    if (data?.type === 'UPDATE_FILES') {
      const importmapTag = document.querySelector(
        'script[type="importmap"]',
      );
      if (data.data.importmap) importmapTag.innerHTML = data.data.importmap

      // 即将要清除的样式
      const appStyleTags = document.querySelectorAll('style[id^="style_"]') || []

      // 清除旧app
      const appSrcTag = document.querySelector('#appSrc');
      const oldSrc = appSrcTag.getAttribute('src');
      appSrcTag.remove();

      // 插入新app
      const script = document.createElement('script');
      const newSrc = URL.createObjectURL(
        new Blob([data.data.compileCode], {
          type: 'application/javascript',
        }),
      );
      script.src = newSrc;
      script.id = 'appSrc';
      script.type = 'module';
      script.onload = () => {
        // 防止先移除样式后页面闪烁
        appStyleTags.forEach(div => {
          div.remove();
        });
      }
      document.body.appendChild(script);
      URL.revokeObjectURL(oldSrc);
      window.parent.postMessage({type: 'DONE', message: ''})
    }
  });
<\/script>
<script type="importmap"><\/script>
<script type="module" id="appSrc"><\/script>
<div id="root">
  <div style="position:absolute;top: 0;left:0;width:100%;height:100%;display: flex;justify-content: center;align-items: center;">
    Loading...
  </div>
</div>
</body>
</html>
`, hX = () => {
  const Z = "//unpkg.com/es-module-shims@1.8.0/dist/es-module-shims.js", l = typeof import.meta > "u" ? bI.replace("<!-- es-module-shims -->", `<script async src="${Z}"><\/script>`) : bI;
  return URL.createObjectURL(new Blob([l], { type: "text/html" }));
}, NX = hX(), RX = (Z) => {
  const { hidden: l, data: m, iframeKey: c } = Z, I = r(null), [i, b] = YZ("");
  mZ(() => {
    var X, d;
    m && ((d = (X = I.current) == null ? void 0 : X.contentWindow) == null || d.postMessage(m));
  }, [m]);
  const W = (X) => {
    var G, V;
    const { type: d, message: y } = X.data;
    d === "LOADED" ? (V = (G = I.current) == null ? void 0 : G.contentWindow) == null || V.postMessage(m) : b(d === "ERROR" ? y : "");
  };
  return mZ(() => (window.addEventListener("message", W), () => {
    window.removeEventListener("message", W);
  }), []), /* @__PURE__ */ a.jsxs(a.Fragment, { children: [
    /* @__PURE__ */ a.jsx(
      "iframe",
      {
        ref: I,
        src: NX,
        style: {
          width: "100%",
          height: "100%",
          padding: 0,
          border: "none",
          display: l ? "none" : ""
        },
        sandbox: "allow-popups-to-escape-sandbox allow-scripts allow-popups allow-forms allow-pointer-lock allow-top-navigation allow-modals allow-same-origin"
      },
      c
    ),
    /* @__PURE__ */ a.jsx(AI, { type: "error", context: i })
  ] });
}, pX = "_tabs_1vzew_1", SX = "_actived_1vzew_20", cc = {
  tabs: pX,
  "tab-item": "_tab-item_1vzew_11",
  actived: SX
}, sX = (Z) => {
  const { onChange: l, items: m, value: c = m[0], hidden: I } = Z;
  return I ? null : /* @__PURE__ */ a.jsx("div", { className: cc.tabs, children: m.map((i) => /* @__PURE__ */ a.jsx(
    "div",
    {
      className: Kl(cc["tab-item"], c === i ? cc.actived : ""),
      onClick: () => l(i),
      children: i
    },
    i
  )) });
}, MX = ["PREVIEW", "JS"], FX = (Z) => {
  const { showCompileOutput: l = !0 } = Z, { files: m, theme: c, selectedFileName: I } = ol(Sl), [i, b] = YZ("PREVIEW"), W = r(null), [X, d] = YZ(), [y, G] = YZ(""), V = (p) => {
    b(p);
  }, u = OI(() => {
    var p, M;
    i === "PREVIEW" && ((p = W.current) == null || p.postMessage(m)), i === "JS" && ((M = W.current) == null || M.postMessage(m[I].value));
  }, 50);
  return mZ(() => {
    W.current || (W.current = new JX(), W.current.addEventListener("message", ({ data: p }) => {
      if (p.type === "UPDATE_FILES") {
        try {
          JSON.parse(m[zZ].value), p.data.importmap = m[zZ].value;
        } catch (M) {
          console.error("importmap 解析错误:", M);
        }
        d(p);
      } else
        p.type === "UPDATE_FILE" ? G(p.data) : p.type === "ERROR" && console.log(p);
    }));
  }, []), mZ(() => {
    u();
  }, [i, m]), mZ(() => {
    var p, M, s, S;
    I === zZ || i === "PREVIEW" || (["javascript", "typescript"].includes((p = m[I]) == null ? void 0 : p.language) ? (s = W.current) == null || s.postMessage((M = m[I]) == null ? void 0 : M.value) : (S = W.current) == null || S.postMessage(""));
  }, [I]), /* @__PURE__ */ a.jsxs("div", { style: { display: "flex", flexDirection: "column", height: "100%" }, children: [
    /* @__PURE__ */ a.jsx(
      sX,
      {
        items: MX,
        value: i,
        onChange: V,
        hidden: !l
      }
    ),
    /* @__PURE__ */ a.jsx(
      RX,
      {
        iframeKey: m[zZ].value,
        hidden: i !== "PREVIEW",
        data: X
      }
    ),
    l ? /* @__PURE__ */ a.jsx("div", { style: { display: i !== "JS" ? "none" : "", height: "100%" }, children: /* @__PURE__ */ a.jsx(
      kI,
      {
        className: "react-playground-editor",
        height: "100%",
        theme: `vs-${c}`,
        value: y,
        language: "javascript",
        options: {
          ...aI,
          readOnly: !0
        }
      }
    ) }) : null
  ] });
};
function _l() {
  return _l = Object.assign ? Object.assign.bind() : function(Z) {
    for (var l = 1; l < arguments.length; l++) {
      var m = arguments[l];
      for (var c in m)
        Object.prototype.hasOwnProperty.call(m, c) && (Z[c] = m[c]);
    }
    return Z;
  }, _l.apply(this, arguments);
}
var dl = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {};
function im(Z) {
  return Z && Z.__esModule && Object.prototype.hasOwnProperty.call(Z, "default") ? Z.default : Z;
}
var Ic, $I = {
  exports: {}
};
/*!
  Copyright (c) 2018 Jed Watson.
  Licensed under the MIT License (MIT), see
  http://jedwatson.github.io/classnames
*/
Ic = $I, function() {
  var Z = {}.hasOwnProperty;
  function l() {
    for (var m = [], c = 0; c < arguments.length; c++) {
      var I = arguments[c];
      if (I) {
        var i = typeof I;
        if (i === "string" || i === "number")
          m.push(I);
        else if (Array.isArray(I)) {
          if (I.length) {
            var b = l.apply(null, I);
            b && m.push(b);
          }
        } else if (i === "object")
          if (I.toString === Object.prototype.toString)
            for (var W in I)
              Z.call(I, W) && I[W] && m.push(W);
          else
            m.push(I.toString());
      }
    }
    return m.join(" ");
  }
  Ic.exports ? (l.default = l, Ic.exports = l) : window.classNames = l;
}();
var sc = im($I.exports), WI = NaN, CX = "[object Symbol]", nX = /^\s+|\s+$/g, zX = /^[-+]0x[0-9a-f]+$/i, kX = /^0b[01]+$/i, aX = /^0o[0-7]+$/i, wX = parseInt, xX = Object.prototype.toString;
function XI(Z) {
  var l = typeof Z;
  return !!Z && (l == "object" || l == "function");
}
function ic(Z) {
  if (typeof Z == "number")
    return Z;
  if (function(c) {
    return typeof c == "symbol" || function(I) {
      return !!I && typeof I == "object";
    }(c) && xX.call(c) == CX;
  }(Z))
    return WI;
  if (XI(Z)) {
    var l = typeof Z.valueOf == "function" ? Z.valueOf() : Z;
    Z = XI(l) ? l + "" : l;
  }
  if (typeof Z != "string")
    return Z === 0 ? Z : +Z;
  Z = Z.replace(nX, "");
  var m = kX.test(Z);
  return m || aX.test(Z) ? wX(Z.slice(2), m ? 2 : 8) : zX.test(Z) ? WI : +Z;
}
var DZ = im(function(Z, l, m) {
  return m === void 0 && (m = l, l = void 0), m !== void 0 && (m = (m = ic(m)) == m ? m : 0), l !== void 0 && (l = (l = ic(l)) == l ? l : 0), function(c, I, i) {
    return c == c && (i !== void 0 && (c = c <= i ? c : i), I !== void 0 && (c = c >= I ? c : I)), c;
  }(ic(Z), l, m);
}), Mc = {
  exports: {}
};
(function(Z, l) {
  var m = "__lodash_hash_undefined__", c = 1, I = 2, i = 9007199254740991, b = "[object Arguments]", W = "[object Array]", X = "[object AsyncFunction]", d = "[object Boolean]", y = "[object Date]", G = "[object Error]", V = "[object Function]", u = "[object GeneratorFunction]", p = "[object Map]", M = "[object Number]", s = "[object Null]", S = "[object Object]", N = "[object Promise]", J = "[object Proxy]", o = "[object RegExp]", t = "[object Set]", H = "[object String]", R = "[object Symbol]", w = "[object Undefined]", C = "[object WeakMap]", j = "[object ArrayBuffer]", U = "[object DataView]", g = /^\[object .+?Constructor\]$/, E = /^(?:0|[1-9]\d*)$/, z = {};
  z["[object Float32Array]"] = z["[object Float64Array]"] = z["[object Int8Array]"] = z["[object Int16Array]"] = z["[object Int32Array]"] = z["[object Uint8Array]"] = z["[object Uint8ClampedArray]"] = z["[object Uint16Array]"] = z["[object Uint32Array]"] = !0, z[b] = z[W] = z[j] = z[d] = z[U] = z[y] = z[G] = z[V] = z[p] = z[M] = z[S] = z[o] = z[t] = z[H] = z[C] = !1;
  var k = typeof dl == "object" && dl && dl.Object === Object && dl, K = typeof self == "object" && self && self.Object === Object && self, D = k || K || Function("return this")(), lZ = l && !l.nodeType && l, $ = lZ && Z && !Z.nodeType && Z, iZ = $ && $.exports === lZ, v = iZ && k.process, e = function() {
    try {
      return v && v.binding && v.binding("util");
    } catch {
    }
  }(), A = e && e.isTypedArray;
  function XZ(Y, h) {
    for (var n = -1, T = Y == null ? 0 : Y.length; ++n < T; )
      if (h(Y[n], n, Y))
        return !0;
    return !1;
  }
  function q(Y) {
    var h = -1, n = Array(Y.size);
    return Y.forEach(function(T, yZ) {
      n[++h] = [yZ, T];
    }), n;
  }
  function JZ(Y) {
    var h = -1, n = Array(Y.size);
    return Y.forEach(function(T) {
      n[++h] = T;
    }), n;
  }
  var B, O, cZ, IZ = Array.prototype, BZ = Function.prototype, kZ = Object.prototype, jZ = D["__core-js_shared__"], Zl = BZ.toString, FZ = kZ.hasOwnProperty, Gl = (B = /[^.]+$/.exec(jZ && jZ.keys && jZ.keys.IE_PROTO || "")) ? "Symbol(src)_1." + B : "", Hl = kZ.toString, bm = RegExp("^" + Zl.call(FZ).replace(/[\\^$.*+?()[\]{}|]/g, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$"), Yl = iZ ? D.Buffer : void 0, sl = D.Symbol, Wm = D.Uint8Array, Ml = kZ.propertyIsEnumerable, vm = IZ.splice, EZ = sl ? sl.toStringTag : void 0, Tl = Object.getOwnPropertySymbols, Xm = Yl ? Yl.isBuffer : void 0, Vl = (O = Object.keys, cZ = Object, function(Y) {
    return O(cZ(Y));
  }), gl = cl(D, "DataView"), ll = cl(D, "Map"), Fl = cl(D, "Promise"), ul = cl(D, "Set"), vl = cl(D, "WeakMap"), Jl = cl(Object, "create"), tm = Q(gl), Dm = Q(ll), Qm = Q(Fl), em = Q(ul), Om = Q(vl), Cl = sl ? sl.prototype : void 0, nl = Cl ? Cl.valueOf : void 0;
  function nZ(Y) {
    var h = -1, n = Y == null ? 0 : Y.length;
    for (this.clear(); ++h < n; ) {
      var T = Y[h];
      this.set(T[0], T[1]);
    }
  }
  function aZ(Y) {
    var h = -1, n = Y == null ? 0 : Y.length;
    for (this.clear(); ++h < n; ) {
      var T = Y[h];
      this.set(T[0], T[1]);
    }
  }
  function gZ(Y) {
    var h = -1, n = Y == null ? 0 : Y.length;
    for (this.clear(); ++h < n; ) {
      var T = Y[h];
      this.set(T[0], T[1]);
    }
  }
  function hl(Y) {
    var h = -1, n = Y == null ? 0 : Y.length;
    for (this.__data__ = new gZ(); ++h < n; )
      this.add(Y[h]);
  }
  function QZ(Y) {
    var h = this.__data__ = new aZ(Y);
    this.size = h.size;
  }
  function dm(Y, h) {
    var n = f(Y), T = !n && bZ(Y), yZ = !n && !T && P(Y), _ = !n && !T && !yZ && AZ(Y), uZ = n || T || yZ || _, hZ = uZ ? function(RZ, eZ) {
      for (var PZ = -1, CZ = Array(RZ); ++PZ < RZ; )
        CZ[PZ] = eZ(PZ);
      return CZ;
    }(Y.length, String) : [], vZ = hZ.length;
    for (var NZ in Y)
      !h && !FZ.call(Y, NZ) || uZ && (NZ == "length" || yZ && (NZ == "offset" || NZ == "parent") || _ && (NZ == "buffer" || NZ == "byteLength" || NZ == "byteOffset") || x(NZ, vZ)) || hZ.push(NZ);
    return hZ;
  }
  function zl(Y, h) {
    for (var n = Y.length; n--; )
      if (ZZ(Y[n][0], h))
        return n;
    return -1;
  }
  function ml(Y) {
    return Y == null ? Y === void 0 ? w : s : EZ && EZ in Object(Y) ? function(h) {
      var n = FZ.call(h, EZ), T = h[EZ];
      try {
        h[EZ] = void 0;
        var yZ = !0;
      } catch {
      }
      var _ = Hl.call(h);
      return yZ && (n ? h[EZ] = T : delete h[EZ]), _;
    }(Y) : function(h) {
      return Hl.call(h);
    }(Y);
  }
  function tl(Y) {
    return sZ(Y) && ml(Y) == b;
  }
  function ym(Y, h, n, T, yZ) {
    return Y === h || (Y == null || h == null || !sZ(Y) && !sZ(h) ? Y != Y && h != h : function(_, uZ, hZ, vZ, NZ, RZ) {
      var eZ = f(_), PZ = f(uZ), CZ = eZ ? W : F(_), fZ = PZ ? W : F(uZ), al = (CZ = CZ == b ? S : CZ) == S, um = (fZ = fZ == b ? S : fZ) == S, wl = CZ == fZ;
      if (wl && P(_)) {
        if (!P(uZ))
          return !1;
        eZ = !0, al = !1;
      }
      if (wl && !al)
        return RZ || (RZ = new QZ()), eZ || AZ(_) ? Gm(_, uZ, hZ, vZ, NZ, RZ) : function(dZ, WZ, Jm, Il, Em, KZ, rZ) {
          switch (Jm) {
            case U:
              if (dZ.byteLength != WZ.byteLength || dZ.byteOffset != WZ.byteOffset)
                return !1;
              dZ = dZ.buffer, WZ = WZ.buffer;
            case j:
              return !(dZ.byteLength != WZ.byteLength || !KZ(new Wm(dZ), new Wm(WZ)));
            case d:
            case y:
            case M:
              return ZZ(+dZ, +WZ);
            case G:
              return dZ.name == WZ.name && dZ.message == WZ.message;
            case o:
            case H:
              return dZ == WZ + "";
            case p:
              var il = q;
            case t:
              var Ql = Il & c;
              if (il || (il = JZ), dZ.size != WZ.size && !Ql)
                return !1;
              var hm = rZ.get(dZ);
              if (hm)
                return hm == WZ;
              Il |= I, rZ.set(dZ, WZ);
              var Am = Gm(il(dZ), il(WZ), Il, Em, KZ, rZ);
              return rZ.delete(dZ), Am;
            case R:
              if (nl)
                return nl.call(dZ) == nl.call(WZ);
          }
          return !1;
        }(_, uZ, CZ, hZ, vZ, NZ, RZ);
      if (!(hZ & c)) {
        var Dl = al && FZ.call(_, "__wrapped__"), jc = um && FZ.call(uZ, "__wrapped__");
        if (Dl || jc) {
          var di = Dl ? _.value() : _, yi = jc ? uZ.value() : uZ;
          return RZ || (RZ = new QZ()), NZ(di, yi, hZ, vZ, RZ);
        }
      }
      return wl ? (RZ || (RZ = new QZ()), function(dZ, WZ, Jm, Il, Em, KZ) {
        var rZ = Jm & c, il = Ym(dZ), Ql = il.length, hm = Ym(WZ), Am = hm.length;
        if (Ql != Am && !rZ)
          return !1;
        for (var Nm = Ql; Nm--; ) {
          var Nl = il[Nm];
          if (!(rZ ? Nl in WZ : FZ.call(WZ, Nl)))
            return !1;
        }
        var Kc = KZ.get(dZ);
        if (Kc && KZ.get(WZ))
          return Kc == WZ;
        var Rm = !0;
        KZ.set(dZ, WZ), KZ.set(WZ, dZ);
        for (var Pm = rZ; ++Nm < Ql; ) {
          var pm = dZ[Nl = il[Nm]], Sm = WZ[Nl];
          if (Il)
            var oc = rZ ? Il(Sm, pm, Nl, WZ, dZ, KZ) : Il(pm, Sm, Nl, dZ, WZ, KZ);
          if (!(oc === void 0 ? pm === Sm || Em(pm, Sm, Jm, Il, KZ) : oc)) {
            Rm = !1;
            break;
          }
          Pm || (Pm = Nl == "constructor");
        }
        if (Rm && !Pm) {
          var sm = dZ.constructor, Mm = WZ.constructor;
          sm == Mm || !("constructor" in dZ) || !("constructor" in WZ) || typeof sm == "function" && sm instanceof sm && typeof Mm == "function" && Mm instanceof Mm || (Rm = !1);
        }
        return KZ.delete(dZ), KZ.delete(WZ), Rm;
      }(_, uZ, hZ, vZ, NZ, RZ)) : !1;
    }(Y, h, n, T, ym, yZ));
  }
  function Bm(Y) {
    return !(!VZ(Y) || function(h) {
      return !!Gl && Gl in h;
    }(Y)) && (SZ(Y) ? bm : g).test(Q(Y));
  }
  function Lm(Y) {
    if (n = (h = Y) && h.constructor, T = typeof n == "function" && n.prototype || kZ, h !== T)
      return Vl(Y);
    var h, n, T, yZ = [];
    for (var _ in Object(Y))
      FZ.call(Y, _) && _ != "constructor" && yZ.push(_);
    return yZ;
  }
  function Gm(Y, h, n, T, yZ, _) {
    var uZ = n & c, hZ = Y.length, vZ = h.length;
    if (hZ != vZ && !(uZ && vZ > hZ))
      return !1;
    var NZ = _.get(Y);
    if (NZ && _.get(h))
      return NZ == h;
    var RZ = -1, eZ = !0, PZ = n & I ? new hl() : void 0;
    for (_.set(Y, h), _.set(h, Y); ++RZ < hZ; ) {
      var CZ = Y[RZ], fZ = h[RZ];
      if (T)
        var al = uZ ? T(fZ, CZ, RZ, h, Y, _) : T(CZ, fZ, RZ, Y, h, _);
      if (al !== void 0) {
        if (al)
          continue;
        eZ = !1;
        break;
      }
      if (PZ) {
        if (!XZ(h, function(um, wl) {
          if (Dl = wl, !PZ.has(Dl) && (CZ === um || yZ(CZ, um, n, T, _)))
            return PZ.push(wl);
          var Dl;
        })) {
          eZ = !1;
          break;
        }
      } else if (CZ !== fZ && !yZ(CZ, fZ, n, T, _)) {
        eZ = !1;
        break;
      }
    }
    return _.delete(Y), _.delete(h), eZ;
  }
  function Ym(Y) {
    return function(h, n, T) {
      var yZ = n(h);
      return f(h) ? yZ : function(_, uZ) {
        for (var hZ = -1, vZ = uZ.length, NZ = _.length; ++hZ < vZ; )
          _[NZ + hZ] = uZ[hZ];
        return _;
      }(yZ, T(h));
    }(Y, Vm, L);
  }
  function kl(Y, h) {
    var n, T, yZ = Y.__data__;
    return ((T = typeof (n = h)) == "string" || T == "number" || T == "symbol" || T == "boolean" ? n !== "__proto__" : n === null) ? yZ[typeof h == "string" ? "string" : "hash"] : yZ.map;
  }
  function cl(Y, h) {
    var n = function(T, yZ) {
      return T == null ? void 0 : T[yZ];
    }(Y, h);
    return Bm(n) ? n : void 0;
  }
  nZ.prototype.clear = function() {
    this.__data__ = Jl ? Jl(null) : {}, this.size = 0;
  }, nZ.prototype.delete = function(Y) {
    var h = this.has(Y) && delete this.__data__[Y];
    return this.size -= h ? 1 : 0, h;
  }, nZ.prototype.get = function(Y) {
    var h = this.__data__;
    if (Jl) {
      var n = h[Y];
      return n === m ? void 0 : n;
    }
    return FZ.call(h, Y) ? h[Y] : void 0;
  }, nZ.prototype.has = function(Y) {
    var h = this.__data__;
    return Jl ? h[Y] !== void 0 : FZ.call(h, Y);
  }, nZ.prototype.set = function(Y, h) {
    var n = this.__data__;
    return this.size += this.has(Y) ? 0 : 1, n[Y] = Jl && h === void 0 ? m : h, this;
  }, aZ.prototype.clear = function() {
    this.__data__ = [], this.size = 0;
  }, aZ.prototype.delete = function(Y) {
    var h = this.__data__, n = zl(h, Y);
    return !(n < 0) && (n == h.length - 1 ? h.pop() : vm.call(h, n, 1), --this.size, !0);
  }, aZ.prototype.get = function(Y) {
    var h = this.__data__, n = zl(h, Y);
    return n < 0 ? void 0 : h[n][1];
  }, aZ.prototype.has = function(Y) {
    return zl(this.__data__, Y) > -1;
  }, aZ.prototype.set = function(Y, h) {
    var n = this.__data__, T = zl(n, Y);
    return T < 0 ? (++this.size, n.push([Y, h])) : n[T][1] = h, this;
  }, gZ.prototype.clear = function() {
    this.size = 0, this.__data__ = {
      hash: new nZ(),
      map: new (ll || aZ)(),
      string: new nZ()
    };
  }, gZ.prototype.delete = function(Y) {
    var h = kl(this, Y).delete(Y);
    return this.size -= h ? 1 : 0, h;
  }, gZ.prototype.get = function(Y) {
    return kl(this, Y).get(Y);
  }, gZ.prototype.has = function(Y) {
    return kl(this, Y).has(Y);
  }, gZ.prototype.set = function(Y, h) {
    var n = kl(this, Y), T = n.size;
    return n.set(Y, h), this.size += n.size == T ? 0 : 1, this;
  }, hl.prototype.add = hl.prototype.push = function(Y) {
    return this.__data__.set(Y, m), this;
  }, hl.prototype.has = function(Y) {
    return this.__data__.has(Y);
  }, QZ.prototype.clear = function() {
    this.__data__ = new aZ(), this.size = 0;
  }, QZ.prototype.delete = function(Y) {
    var h = this.__data__, n = h.delete(Y);
    return this.size = h.size, n;
  }, QZ.prototype.get = function(Y) {
    return this.__data__.get(Y);
  }, QZ.prototype.has = function(Y) {
    return this.__data__.has(Y);
  }, QZ.prototype.set = function(Y, h) {
    var n = this.__data__;
    if (n instanceof aZ) {
      var T = n.__data__;
      if (!ll || T.length < 199)
        return T.push([Y, h]), this.size = ++n.size, this;
      n = this.__data__ = new gZ(T);
    }
    return n.set(Y, h), this.size = n.size, this;
  };
  var L = Tl ? function(Y) {
    return Y == null ? [] : (Y = Object(Y), function(h, n) {
      for (var T = -1, yZ = h == null ? 0 : h.length, _ = 0, uZ = []; ++T < yZ; ) {
        var hZ = h[T];
        n(hZ, T, h) && (uZ[_++] = hZ);
      }
      return uZ;
    }(Tl(Y), function(h) {
      return Ml.call(Y, h);
    }));
  } : function() {
    return [];
  }, F = ml;
  function x(Y, h) {
    return !!(h = h ?? i) && (typeof Y == "number" || E.test(Y)) && Y > -1 && Y % 1 == 0 && Y < h;
  }
  function Q(Y) {
    if (Y != null) {
      try {
        return Zl.call(Y);
      } catch {
      }
      try {
        return Y + "";
      } catch {
      }
    }
    return "";
  }
  function ZZ(Y, h) {
    return Y === h || Y != Y && h != h;
  }
  (gl && F(new gl(new ArrayBuffer(1))) != U || ll && F(new ll()) != p || Fl && F(Fl.resolve()) != N || ul && F(new ul()) != t || vl && F(new vl()) != C) && (F = function(Y) {
    var h = ml(Y), n = h == S ? Y.constructor : void 0, T = n ? Q(n) : "";
    if (T)
      switch (T) {
        case tm:
          return U;
        case Dm:
          return p;
        case Qm:
          return N;
        case em:
          return t;
        case Om:
          return C;
      }
    return h;
  });
  var bZ = tl(function() {
    return arguments;
  }()) ? tl : function(Y) {
    return sZ(Y) && FZ.call(Y, "callee") && !Ml.call(Y, "callee");
  }, f = Array.isArray, P = Xm || function() {
    return !1;
  };
  function SZ(Y) {
    if (!VZ(Y))
      return !1;
    var h = ml(Y);
    return h == V || h == u || h == X || h == J;
  }
  function GZ(Y) {
    return typeof Y == "number" && Y > -1 && Y % 1 == 0 && Y <= i;
  }
  function VZ(Y) {
    var h = typeof Y;
    return Y != null && (h == "object" || h == "function");
  }
  function sZ(Y) {
    return Y != null && typeof Y == "object";
  }
  var AZ = A ? function(Y) {
    return function(h) {
      return Y(h);
    };
  }(A) : function(Y) {
    return sZ(Y) && GZ(Y.length) && !!z[ml(Y)];
  };
  function Vm(Y) {
    return (h = Y) != null && GZ(h.length) && !SZ(h) ? dm(Y) : Lm(Y);
    var h;
  }
  Z.exports = function(Y, h) {
    return ym(Y, h);
  };
})(Mc, Mc.exports);
var UX = im(Mc.exports);
function dI(Z, l, m) {
  return Z[l] ? Z[l][0] ? Z[l][0][m] : Z[l][m] : l === "contentBoxSize" ? Z.contentRect[m === "inlineSize" ? "width" : "height"] : void 0;
}
function jX(Z) {
  Z === void 0 && (Z = {});
  var l = Z.onResize, m = r(void 0);
  m.current = l;
  var c = Z.round || Math.round, I = r(), i = YZ({
    width: void 0,
    height: void 0
  }), b = i[0], W = i[1], X = r(!1);
  mZ(function() {
    return X.current = !1, function() {
      X.current = !0;
    };
  }, []);
  var d = r({
    width: void 0,
    height: void 0
  }), y = function(G, V) {
    var u = r(null), p = r(null);
    p.current = V;
    var M = r(null);
    mZ(function() {
      s();
    });
    var s = Rl(function() {
      var S = M.current, N = p.current, J = S || (N ? N instanceof Element ? N : N.current : null);
      u.current && u.current.element === J && u.current.subscriber === G || (u.current && u.current.cleanup && u.current.cleanup(), u.current = {
        element: J,
        subscriber: G,
        cleanup: J ? G(J) : void 0
      });
    }, [G]);
    return mZ(function() {
      return function() {
        u.current && u.current.cleanup && (u.current.cleanup(), u.current = null);
      };
    }, []), Rl(function(S) {
      M.current = S, s();
    }, [s]);
  }(Rl(function(G) {
    return I.current && I.current.box === Z.box && I.current.round === c || (I.current = {
      box: Z.box,
      round: c,
      instance: new ResizeObserver(function(V) {
        var u = V[0], p = Z.box === "border-box" ? "borderBoxSize" : Z.box === "device-pixel-content-box" ? "devicePixelContentBoxSize" : "contentBoxSize", M = dI(u, p, "inlineSize"), s = dI(u, p, "blockSize"), S = M ? c(M) : void 0, N = s ? c(s) : void 0;
        if (d.current.width !== S || d.current.height !== N) {
          var J = {
            width: S,
            height: N
          };
          d.current.width = S, d.current.height = N, m.current ? m.current(J) : X.current || W(J);
        }
      })
    }), I.current.instance.observe(G, {
      box: Z.box
    }), function() {
      I.current && I.current.instance.unobserve(G);
    };
  }, [Z.box, c]), Z.ref);
  return pI(function() {
    return {
      ref: y,
      width: b.width,
      height: b.height
    };
  }, [y, b.width, b.height]);
}
var KX = "allotment-module_splitView__L-yRc", oX = "allotment-module_sashContainer__fzwJF", HX = "allotment-module_splitViewContainer__rQnVa", Zi = "allotment-module_splitViewView__MGZ6O", TX = "allotment-module_vertical__WSwwa", gX = "allotment-module_horizontal__7doS8", vX = "allotment-module_separatorBorder__x-rDS";
let fl, li = !1, mi = !1;
typeof navigator == "object" && (fl = navigator.userAgent, mi = fl.indexOf("Macintosh") >= 0, li = (fl.indexOf("Macintosh") >= 0 || fl.indexOf("iPad") >= 0 || fl.indexOf("iPhone") >= 0) && !!navigator.maxTouchPoints && navigator.maxTouchPoints > 0);
const ci = li, tX = mi, bc = typeof window < "u" && window.document !== void 0 && window.document.createElement !== void 0 ? Yi : mZ;
class DX {
  constructor() {
    this._size = void 0;
  }
  getSize() {
    return this._size;
  }
  setSize(l) {
    this._size = l;
  }
}
function km(Z, l) {
  const m = Z.length, c = m - l.length;
  return c >= 0 && Z.slice(c, m) === l;
}
var Ii = {
  exports: {}
};
(function(Z) {
  var l = Object.prototype.hasOwnProperty, m = "~";
  function c() {
  }
  function I(X, d, y) {
    this.fn = X, this.context = d, this.once = y || !1;
  }
  function i(X, d, y, G, V) {
    if (typeof y != "function")
      throw new TypeError("The listener must be a function");
    var u = new I(y, G || X, V), p = m ? m + d : d;
    return X._events[p] ? X._events[p].fn ? X._events[p] = [X._events[p], u] : X._events[p].push(u) : (X._events[p] = u, X._eventsCount++), X;
  }
  function b(X, d) {
    --X._eventsCount == 0 ? X._events = new c() : delete X._events[d];
  }
  function W() {
    this._events = new c(), this._eventsCount = 0;
  }
  Object.create && (c.prototype = /* @__PURE__ */ Object.create(null), new c().__proto__ || (m = !1)), W.prototype.eventNames = function() {
    var X, d, y = [];
    if (this._eventsCount === 0)
      return y;
    for (d in X = this._events)
      l.call(X, d) && y.push(m ? d.slice(1) : d);
    return Object.getOwnPropertySymbols ? y.concat(Object.getOwnPropertySymbols(X)) : y;
  }, W.prototype.listeners = function(X) {
    var d = m ? m + X : X, y = this._events[d];
    if (!y)
      return [];
    if (y.fn)
      return [y.fn];
    for (var G = 0, V = y.length, u = new Array(V); G < V; G++)
      u[G] = y[G].fn;
    return u;
  }, W.prototype.listenerCount = function(X) {
    var d = m ? m + X : X, y = this._events[d];
    return y ? y.fn ? 1 : y.length : 0;
  }, W.prototype.emit = function(X, d, y, G, V, u) {
    var p = m ? m + X : X;
    if (!this._events[p])
      return !1;
    var M, s, S = this._events[p], N = arguments.length;
    if (S.fn) {
      switch (S.once && this.removeListener(X, S.fn, void 0, !0), N) {
        case 1:
          return S.fn.call(S.context), !0;
        case 2:
          return S.fn.call(S.context, d), !0;
        case 3:
          return S.fn.call(S.context, d, y), !0;
        case 4:
          return S.fn.call(S.context, d, y, G), !0;
        case 5:
          return S.fn.call(S.context, d, y, G, V), !0;
        case 6:
          return S.fn.call(S.context, d, y, G, V, u), !0;
      }
      for (s = 1, M = new Array(N - 1); s < N; s++)
        M[s - 1] = arguments[s];
      S.fn.apply(S.context, M);
    } else {
      var J, o = S.length;
      for (s = 0; s < o; s++)
        switch (S[s].once && this.removeListener(X, S[s].fn, void 0, !0), N) {
          case 1:
            S[s].fn.call(S[s].context);
            break;
          case 2:
            S[s].fn.call(S[s].context, d);
            break;
          case 3:
            S[s].fn.call(S[s].context, d, y);
            break;
          case 4:
            S[s].fn.call(S[s].context, d, y, G);
            break;
          default:
            if (!M)
              for (J = 1, M = new Array(N - 1); J < N; J++)
                M[J - 1] = arguments[J];
            S[s].fn.apply(S[s].context, M);
        }
    }
    return !0;
  }, W.prototype.on = function(X, d, y) {
    return i(this, X, d, y, !1);
  }, W.prototype.once = function(X, d, y) {
    return i(this, X, d, y, !0);
  }, W.prototype.removeListener = function(X, d, y, G) {
    var V = m ? m + X : X;
    if (!this._events[V])
      return this;
    if (!d)
      return b(this, V), this;
    var u = this._events[V];
    if (u.fn)
      u.fn !== d || G && !u.once || y && u.context !== y || b(this, V);
    else {
      for (var p = 0, M = [], s = u.length; p < s; p++)
        (u[p].fn !== d || G && !u[p].once || y && u[p].context !== y) && M.push(u[p]);
      M.length ? this._events[V] = M.length === 1 ? M[0] : M : b(this, V);
    }
    return this;
  }, W.prototype.removeAllListeners = function(X) {
    var d;
    return X ? (d = m ? m + X : X, this._events[d] && b(this, d)) : (this._events = new c(), this._eventsCount = 0), this;
  }, W.prototype.off = W.prototype.removeListener, W.prototype.addListener = W.prototype.on, W.prefixed = m, W.EventEmitter = W, Z.exports = W;
})(Ii);
var xc = im(Ii.exports);
function yI(Z, l) {
  const m = Z.indexOf(l);
  m > -1 && (Z.splice(m, 1), Z.unshift(l));
}
function Wc(Z, l) {
  const m = Z.indexOf(l);
  m > -1 && (Z.splice(m, 1), Z.push(l));
}
function oZ(Z, l, m = 1) {
  const c = Math.max(0, Math.ceil((l - Z) / m)), I = new Array(c);
  let i = -1;
  for (; ++i < c; )
    I[i] = Z + i * m;
  return I;
}
var LI = NaN, QX = "[object Symbol]", eX = /^\s+|\s+$/g, OX = /^[-+]0x[0-9a-f]+$/i, BX = /^0b[01]+$/i, EX = /^0o[0-7]+$/i, AX = parseInt, PX = typeof dl == "object" && dl && dl.Object === Object && dl, fX = typeof self == "object" && self && self.Object === Object && self, rX = PX || fX || Function("return this")(), qX = Object.prototype.toString, _X = Math.max, $X = Math.min, Xc = function() {
  return rX.Date.now();
};
function Fc(Z) {
  var l = typeof Z;
  return !!Z && (l == "object" || l == "function");
}
function GI(Z) {
  if (typeof Z == "number")
    return Z;
  if (function(c) {
    return typeof c == "symbol" || function(I) {
      return !!I && typeof I == "object";
    }(c) && qX.call(c) == QX;
  }(Z))
    return LI;
  if (Fc(Z)) {
    var l = typeof Z.valueOf == "function" ? Z.valueOf() : Z;
    Z = Fc(l) ? l + "" : l;
  }
  if (typeof Z != "string")
    return Z === 0 ? Z : +Z;
  Z = Z.replace(eX, "");
  var m = BX.test(Z);
  return m || EX.test(Z) ? AX(Z.slice(2), m ? 2 : 8) : OX.test(Z) ? LI : +Z;
}
var Zd = im(function(Z, l, m) {
  var c, I, i, b, W, X, d = 0, y = !1, G = !1, V = !0;
  if (typeof Z != "function")
    throw new TypeError("Expected a function");
  function u(N) {
    var J = c, o = I;
    return c = I = void 0, d = N, b = Z.apply(o, J);
  }
  function p(N) {
    var J = N - X;
    return X === void 0 || J >= l || J < 0 || G && N - d >= i;
  }
  function M() {
    var N = Xc();
    if (p(N))
      return s(N);
    W = setTimeout(M, function(J) {
      var o = l - (J - X);
      return G ? $X(o, i - (J - d)) : o;
    }(N));
  }
  function s(N) {
    return W = void 0, V && c ? u(N) : (c = I = void 0, b);
  }
  function S() {
    var N = Xc(), J = p(N);
    if (c = arguments, I = this, X = N, J) {
      if (W === void 0)
        return function(o) {
          return d = o, W = setTimeout(M, l), y ? u(o) : b;
        }(X);
      if (G)
        return W = setTimeout(M, l), u(X);
    }
    return W === void 0 && (W = setTimeout(M, l)), b;
  }
  return l = GI(l) || 0, Fc(m) && (y = !!m.leading, i = (G = "maxWait" in m) ? _X(GI(m.maxWait) || 0, l) : i, V = "trailing" in m ? !!m.trailing : V), S.cancel = function() {
    W !== void 0 && clearTimeout(W), d = 0, c = X = I = W = void 0;
  }, S.flush = function() {
    return W === void 0 ? b : s(Xc());
  }, S;
}), ld = "sash-module_sash__K-9lB", md = "sash-module_disabled__Hm-wx", cd = "sash-module_mac__Jf6OJ", YI = "sash-module_vertical__pB-rs", Id = "sash-module_minimum__-UKxp", id = "sash-module_maximum__TCWxD", VI = "sash-module_horizontal__kFbiw", dc = "sash-module_hover__80W6I", yc = "sash-module_active__bJspD";
let TZ = function(Z) {
  return Z.Vertical = "VERTICAL", Z.Horizontal = "HORIZONTAL", Z;
}({}), xZ = function(Z) {
  return Z.Disabled = "DISABLED", Z.Minimum = "MINIMUM", Z.Maximum = "MAXIMUM", Z.Enabled = "ENABLED", Z;
}({}), ii = ci ? 20 : 8;
const bi = new xc();
class uI extends xc {
  get state() {
    return this._state;
  }
  set state(l) {
    this._state !== l && (this.el.classList.toggle(md, l === xZ.Disabled), this.el.classList.toggle("sash-disabled", l === xZ.Disabled), this.el.classList.toggle(Id, l === xZ.Minimum), this.el.classList.toggle("sash-minimum", l === xZ.Minimum), this.el.classList.toggle(id, l === xZ.Maximum), this.el.classList.toggle("sash-maximum", l === xZ.Maximum), this._state = l, this.emit("enablementChange", l));
  }
  constructor(l, m, c) {
    var I;
    super(), this.el = void 0, this.layoutProvider = void 0, this.orientation = void 0, this.size = void 0, this.hoverDelay = 300, this.hoverDelayer = Zd((i) => i.classList.add("sash-hover", dc), this.hoverDelay), this._state = xZ.Enabled, this.onPointerStart = (i) => {
      const b = i.pageX, W = i.pageY, X = {
        startX: b,
        currentX: b,
        startY: W,
        currentY: W
      };
      this.el.classList.add("sash-active", yc), this.emit("start", X), this.el.setPointerCapture(i.pointerId);
      const d = (G) => {
        G.preventDefault();
        const V = {
          startX: b,
          currentX: G.pageX,
          startY: W,
          currentY: G.pageY
        };
        this.emit("change", V);
      }, y = (G) => {
        G.preventDefault(), this.el.classList.remove("sash-active", yc), this.hoverDelayer.cancel(), this.emit("end"), this.el.releasePointerCapture(G.pointerId), window.removeEventListener("pointermove", d), window.removeEventListener("pointerup", y);
      };
      window.addEventListener("pointermove", d), window.addEventListener("pointerup", y);
    }, this.onPointerDoublePress = () => {
      this.emit("reset");
    }, this.onMouseEnter = () => {
      this.el.classList.contains(yc) ? (this.hoverDelayer.cancel(), this.el.classList.add("sash-hover", dc)) : this.hoverDelayer(this.el);
    }, this.onMouseLeave = () => {
      this.hoverDelayer.cancel(), this.el.classList.remove("sash-hover", dc);
    }, this.el = document.createElement("div"), this.el.classList.add("sash", ld), this.el.dataset.testid = "sash", l.append(this.el), tX && this.el.classList.add("sash-mac", cd), this.el.addEventListener("pointerdown", this.onPointerStart), this.el.addEventListener("dblclick", this.onPointerDoublePress), this.el.addEventListener("mouseenter", this.onMouseEnter), this.el.addEventListener("mouseleave", this.onMouseLeave), typeof c.size == "number" ? (this.size = c.size, c.orientation === TZ.Vertical ? this.el.style.width = `${this.size}px` : this.el.style.height = `${this.size}px`) : (this.size = ii, bi.on("onDidChangeGlobalSize", (i) => {
      this.size = i, this.layout();
    })), this.layoutProvider = m, this.orientation = (I = c.orientation) != null ? I : TZ.Vertical, this.orientation === TZ.Horizontal ? (this.el.classList.add("sash-horizontal", VI), this.el.classList.remove("sash-vertical", YI)) : (this.el.classList.remove("sash-horizontal", VI), this.el.classList.add("sash-vertical", YI)), this.layout();
  }
  layout() {
    if (this.orientation === TZ.Vertical) {
      const l = this.layoutProvider;
      this.el.style.left = l.getVerticalSashLeft(this) - this.size / 2 + "px", l.getVerticalSashTop && (this.el.style.top = l.getVerticalSashTop(this) + "px"), l.getVerticalSashHeight && (this.el.style.height = l.getVerticalSashHeight(this) + "px");
    } else {
      const l = this.layoutProvider;
      this.el.style.top = l.getHorizontalSashTop(this) - this.size / 2 + "px", l.getHorizontalSashLeft && (this.el.style.left = l.getHorizontalSashLeft(this) + "px"), l.getHorizontalSashWidth && (this.el.style.width = l.getHorizontalSashWidth(this) + "px");
    }
  }
  dispose() {
    this.el.removeEventListener("pointerdown", this.onPointerStart), this.el.removeEventListener("dblclick", this.onPointerDoublePress), this.el.removeEventListener("mouseenter", this.onMouseEnter), this.el.removeEventListener("mouseleave", () => this.onMouseLeave), this.el.remove();
  }
}
let jm;
var Lc;
(Lc = jm || (jm = {})).Distribute = {
  type: "distribute"
}, Lc.Split = function(Z) {
  return {
    type: "split",
    index: Z
  };
}, Lc.Invisible = function(Z) {
  return {
    type: "invisible",
    cachedVisibleSize: Z
  };
};
let _Z = function(Z) {
  return Z.Normal = "NORMAL", Z.Low = "LOW", Z.High = "HIGH", Z;
}({});
class Wi {
  constructor(l, m, c) {
    this.container = void 0, this.view = void 0, this._size = void 0, this._cachedVisibleSize = void 0, this.container = l, this.view = m, this.container.classList.add("split-view-view", Zi), this.container.dataset.testid = "split-view-view", typeof c == "number" ? (this._size = c, this._cachedVisibleSize = void 0, l.classList.add("split-view-view-visible")) : (this._size = 0, this._cachedVisibleSize = c.cachedVisibleSize);
  }
  set size(l) {
    this._size = l;
  }
  get size() {
    return this._size;
  }
  get priority() {
    return this.view.priority;
  }
  get snap() {
    return !!this.view.snap;
  }
  get cachedVisibleSize() {
    return this._cachedVisibleSize;
  }
  get visible() {
    return this._cachedVisibleSize === void 0;
  }
  setVisible(l, m) {
    l !== this.visible && (l ? (this.size = DZ(this._cachedVisibleSize, this.viewMinimumSize, this.viewMaximumSize), this._cachedVisibleSize = void 0) : (this._cachedVisibleSize = typeof m == "number" ? m : this.size, this.size = 0), this.container.classList.toggle("split-view-view-visible", l), this.view.setVisible && this.view.setVisible(l));
  }
  get minimumSize() {
    return this.visible ? this.view.minimumSize : 0;
  }
  get viewMinimumSize() {
    return this.view.minimumSize;
  }
  get maximumSize() {
    return this.visible ? this.view.maximumSize : 0;
  }
  get viewMaximumSize() {
    return this.view.maximumSize;
  }
  set enabled(l) {
    this.container.style.pointerEvents = l ? "" : "none";
  }
  layout(l) {
    this.layoutContainer(l), this.view.layout(this.size, l);
  }
}
class bd extends Wi {
  layoutContainer(l) {
    this.container.style.left = `${l}px`, this.container.style.width = `${this.size}px`;
  }
}
class Wd extends Wi {
  layoutContainer(l) {
    this.container.style.top = `${l}px`, this.container.style.height = `${this.size}px`;
  }
}
class Xd extends xc {
  get startSnappingEnabled() {
    return this._startSnappingEnabled;
  }
  set startSnappingEnabled(l) {
    this._startSnappingEnabled !== l && (this._startSnappingEnabled = l, this.updateSashEnablement());
  }
  get endSnappingEnabled() {
    return this._endSnappingEnabled;
  }
  set endSnappingEnabled(l) {
    this._endSnappingEnabled !== l && (this._endSnappingEnabled = l, this.updateSashEnablement());
  }
  constructor(l, m = {}, c, I, i) {
    var b, W;
    if (super(), this.onDidChange = void 0, this.onDidDragStart = void 0, this.onDidDragEnd = void 0, this.orientation = void 0, this.sashContainer = void 0, this.size = 0, this.contentSize = 0, this.proportions = void 0, this.viewItems = [], this.sashItems = [], this.sashDragState = void 0, this.proportionalLayout = void 0, this.getSashOrthogonalSize = void 0, this._startSnappingEnabled = !0, this._endSnappingEnabled = !0, this.onSashEnd = (X) => {
      this.emit("sashchange", X), this.saveProportions();
      for (const d of this.viewItems)
        d.enabled = !0;
    }, this.orientation = (b = m.orientation) != null ? b : TZ.Vertical, this.proportionalLayout = (W = m.proportionalLayout) != null ? W : !0, this.getSashOrthogonalSize = m.getSashOrthogonalSize, c && (this.onDidChange = c), I && (this.onDidDragStart = I), i && (this.onDidDragEnd = i), this.sashContainer = document.createElement("div"), this.sashContainer.classList.add("sash-container", oX), l.prepend(this.sashContainer), m.descriptor) {
      this.size = m.descriptor.size;
      for (const [X, d] of m.descriptor.views.entries()) {
        const y = d.size, G = d.container, V = d.view;
        this.addView(G, V, y, X, !0);
      }
      this.contentSize = this.viewItems.reduce((X, d) => X + d.size, 0), this.saveProportions();
    }
  }
  addView(l, m, c, I = this.viewItems.length, i) {
    let b;
    b = typeof c == "number" ? c : c.type === "split" ? this.getViewSize(c.index) / 2 : c.type === "invisible" ? {
      cachedVisibleSize: c.cachedVisibleSize
    } : m.minimumSize;
    const W = this.orientation === TZ.Vertical ? new Wd(l, m, b) : new bd(l, m, b);
    if (this.viewItems.splice(I, 0, W), this.viewItems.length > 1) {
      const X = this.orientation === TZ.Vertical ? new uI(this.sashContainer, {
        getHorizontalSashTop: (G) => this.getSashPosition(G),
        getHorizontalSashWidth: this.getSashOrthogonalSize
      }, {
        orientation: TZ.Horizontal
      }) : new uI(this.sashContainer, {
        getVerticalSashLeft: (G) => this.getSashPosition(G),
        getVerticalSashHeight: this.getSashOrthogonalSize
      }, {
        orientation: TZ.Vertical
      }), d = this.orientation === TZ.Vertical ? (G) => ({
        sash: X,
        start: G.startY,
        current: G.currentY
      }) : (G) => ({
        sash: X,
        start: G.startX,
        current: G.currentX
      });
      X.on("start", (G) => {
        var V;
        this.emit("sashDragStart"), this.onSashStart(d(G));
        const u = this.viewItems.map((p) => p.size);
        (V = this.onDidDragStart) == null || V.call(this, u);
      }), X.on("change", (G) => this.onSashChange(d(G))), X.on("end", () => {
        var G;
        this.emit("sashDragEnd"), this.onSashEnd(this.sashItems.findIndex((u) => u.sash === X));
        const V = this.viewItems.map((u) => u.size);
        (G = this.onDidDragEnd) == null || G.call(this, V);
      }), X.on("reset", () => {
        const G = this.sashItems.findIndex((s) => s.sash === X), V = oZ(G, -1, -1), u = oZ(G + 1, this.viewItems.length), p = this.findFirstSnapIndex(V), M = this.findFirstSnapIndex(u);
        (typeof p != "number" || this.viewItems[p].visible) && (typeof M != "number" || this.viewItems[M].visible) && this.emit("sashreset", G);
      });
      const y = {
        sash: X
      };
      this.sashItems.splice(I - 1, 0, y);
    }
    i || this.relayout(), i || typeof c == "number" || c.type !== "distribute" || this.distributeViewSizes();
  }
  removeView(l, m) {
    if (l < 0 || l >= this.viewItems.length)
      throw new Error("Index out of bounds");
    const c = this.viewItems.splice(l, 1)[0].view;
    if (this.viewItems.length >= 1) {
      const I = Math.max(l - 1, 0);
      this.sashItems.splice(I, 1)[0].sash.dispose();
    }
    return this.relayout(), m && m.type === "distribute" && this.distributeViewSizes(), c;
  }
  moveView(l, m, c) {
    const I = this.getViewCachedVisibleSize(m), i = I === void 0 ? this.getViewSize(m) : jm.Invisible(I), b = this.removeView(m);
    this.addView(l, b, i, c);
  }
  getViewCachedVisibleSize(l) {
    if (l < 0 || l >= this.viewItems.length)
      throw new Error("Index out of bounds");
    return this.viewItems[l].cachedVisibleSize;
  }
  layout(l = this.size) {
    const m = Math.max(this.size, this.contentSize);
    if (this.size = l, this.proportions)
      for (let c = 0; c < this.viewItems.length; c++) {
        const I = this.viewItems[c];
        I.size = DZ(Math.round(this.proportions[c] * l), I.minimumSize, I.maximumSize);
      }
    else {
      const c = oZ(0, this.viewItems.length), I = c.filter((b) => this.viewItems[b].priority === _Z.Low), i = c.filter((b) => this.viewItems[b].priority === _Z.High);
      this.resize(this.viewItems.length - 1, l - m, void 0, I, i);
    }
    this.distributeEmptySpace(), this.layoutViews();
  }
  resizeView(l, m) {
    if (l < 0 || l >= this.viewItems.length)
      return;
    const c = oZ(0, this.viewItems.length).filter((W) => W !== l), I = [...c.filter((W) => this.viewItems[W].priority === _Z.Low), l], i = c.filter((W) => this.viewItems[W].priority === _Z.High), b = this.viewItems[l];
    m = Math.round(m), m = DZ(m, b.minimumSize, Math.min(b.maximumSize, this.size)), b.size = m, this.relayout(I, i);
  }
  resizeViews(l) {
    for (let m = 0; m < l.length; m++) {
      const c = this.viewItems[m];
      let I = l[m];
      I = Math.round(I), I = DZ(I, c.minimumSize, Math.min(c.maximumSize, this.size)), c.size = I;
    }
    this.contentSize = this.viewItems.reduce((m, c) => m + c.size, 0), this.saveProportions(), this.layout(this.size);
  }
  getViewSize(l) {
    return l < 0 || l >= this.viewItems.length ? -1 : this.viewItems[l].size;
  }
  isViewVisible(l) {
    if (l < 0 || l >= this.viewItems.length)
      throw new Error("Index out of bounds");
    return this.viewItems[l].visible;
  }
  setViewVisible(l, m) {
    if (l < 0 || l >= this.viewItems.length)
      throw new Error("Index out of bounds");
    this.viewItems[l].setVisible(m), this.distributeEmptySpace(l), this.layoutViews(), this.saveProportions();
  }
  distributeViewSizes() {
    const l = [];
    let m = 0;
    for (const W of this.viewItems)
      W.maximumSize - W.minimumSize > 0 && (l.push(W), m += W.size);
    const c = Math.floor(m / l.length);
    for (const W of l)
      W.size = DZ(c, W.minimumSize, W.maximumSize);
    const I = oZ(0, this.viewItems.length), i = I.filter((W) => this.viewItems[W].priority === _Z.Low), b = I.filter((W) => this.viewItems[W].priority === _Z.High);
    this.relayout(i, b);
  }
  dispose() {
    this.sashItems.forEach((l) => l.sash.dispose()), this.sashItems = [], this.sashContainer.remove();
  }
  relayout(l, m) {
    const c = this.viewItems.reduce((I, i) => I + i.size, 0);
    this.resize(this.viewItems.length - 1, this.size - c, void 0, l, m), this.distributeEmptySpace(), this.layoutViews(), this.saveProportions();
  }
  onSashStart({
    sash: l,
    start: m
  }) {
    const c = this.sashItems.findIndex((I) => I.sash === l);
    ((I) => {
      const i = this.viewItems.map((N) => N.size);
      let b, W, X = Number.NEGATIVE_INFINITY, d = Number.POSITIVE_INFINITY;
      const y = oZ(c, -1, -1), G = oZ(c + 1, this.viewItems.length), V = y.reduce((N, J) => N + (this.viewItems[J].minimumSize - i[J]), 0), u = y.reduce((N, J) => N + (this.viewItems[J].viewMaximumSize - i[J]), 0), p = G.length === 0 ? Number.POSITIVE_INFINITY : G.reduce((N, J) => N + (i[J] - this.viewItems[J].minimumSize), 0), M = G.length === 0 ? Number.NEGATIVE_INFINITY : G.reduce((N, J) => N + (i[J] - this.viewItems[J].viewMaximumSize), 0);
      X = Math.max(V, M), d = Math.min(p, u);
      const s = this.findFirstSnapIndex(y), S = this.findFirstSnapIndex(G);
      if (typeof s == "number") {
        const N = this.viewItems[s], J = Math.floor(N.viewMinimumSize / 2);
        b = {
          index: s,
          limitDelta: N.visible ? X - J : X + J,
          size: N.size
        };
      }
      if (typeof S == "number") {
        const N = this.viewItems[S], J = Math.floor(N.viewMinimumSize / 2);
        W = {
          index: S,
          limitDelta: N.visible ? d + J : d - J,
          size: N.size
        };
      }
      this.sashDragState = {
        start: I,
        current: I,
        index: c,
        sizes: i,
        minDelta: X,
        maxDelta: d,
        snapBefore: b,
        snapAfter: W
      };
    })(m);
  }
  onSashChange({
    current: l
  }) {
    const {
      index: m,
      start: c,
      sizes: I,
      minDelta: i,
      maxDelta: b,
      snapBefore: W,
      snapAfter: X
    } = this.sashDragState;
    this.sashDragState.current = l;
    const d = l - c;
    this.resize(m, d, I, void 0, void 0, i, b, W, X), this.distributeEmptySpace(), this.layoutViews();
  }
  getSashPosition(l) {
    let m = 0;
    for (let c = 0; c < this.sashItems.length; c++)
      if (m += this.viewItems[c].size, this.sashItems[c].sash === l)
        return m;
    return 0;
  }
  resize(l, m, c = this.viewItems.map((y) => y.size), I, i, b = Number.NEGATIVE_INFINITY, W = Number.POSITIVE_INFINITY, X, d) {
    if (l < 0 || l >= this.viewItems.length)
      return 0;
    const y = oZ(l, -1, -1), G = oZ(l + 1, this.viewItems.length);
    if (i)
      for (const R of i)
        yI(y, R), yI(G, R);
    if (I)
      for (const R of I)
        Wc(y, R), Wc(G, R);
    const V = y.map((R) => this.viewItems[R]), u = y.map((R) => c[R]), p = G.map((R) => this.viewItems[R]), M = G.map((R) => c[R]), s = y.reduce((R, w) => R + (this.viewItems[w].minimumSize - c[w]), 0), S = y.reduce((R, w) => R + (this.viewItems[w].maximumSize - c[w]), 0), N = G.length === 0 ? Number.POSITIVE_INFINITY : G.reduce((R, w) => R + (c[w] - this.viewItems[w].minimumSize), 0), J = G.length === 0 ? Number.NEGATIVE_INFINITY : G.reduce((R, w) => R + (c[w] - this.viewItems[w].maximumSize), 0), o = Math.max(s, J, b), t = Math.min(N, S, W);
    let H = !1;
    if (X) {
      const R = this.viewItems[X.index], w = m >= X.limitDelta;
      H = w !== R.visible, R.setVisible(w, X.size);
    }
    if (!H && d) {
      const R = this.viewItems[d.index], w = m < d.limitDelta;
      H = w !== R.visible, R.setVisible(w, d.size);
    }
    if (H)
      return this.resize(l, m, c, I, i, b, W);
    for (let R = 0, w = m = DZ(m, o, t); R < V.length; R++) {
      const C = V[R], j = DZ(u[R] + w, C.minimumSize, C.maximumSize);
      w -= j - u[R], C.size = j;
    }
    for (let R = 0, w = m; R < p.length; R++) {
      const C = p[R], j = DZ(M[R] - w, C.minimumSize, C.maximumSize);
      w += j - M[R], C.size = j;
    }
    return m;
  }
  distributeEmptySpace(l) {
    const m = this.viewItems.reduce((i, b) => i + b.size, 0);
    let c = this.size - m;
    const I = oZ(this.viewItems.length - 1, -1, -1);
    typeof l == "number" && Wc(I, l);
    for (let i = 0; c !== 0 && i < I.length; i++) {
      const b = this.viewItems[I[i]], W = DZ(b.size + c, b.minimumSize, b.maximumSize);
      c -= W - b.size, b.size = W;
    }
  }
  layoutViews() {
    var l;
    this.contentSize = this.viewItems.reduce((c, I) => c + I.size, 0);
    let m = 0;
    for (const c of this.viewItems)
      c.layout(m), m += c.size;
    (l = this.onDidChange) != null && l.call(this, this.viewItems.map((c) => c.size)), this.sashItems.forEach((c) => c.sash.layout()), this.updateSashEnablement();
  }
  saveProportions() {
    this.proportionalLayout && this.contentSize > 0 && (this.proportions = this.viewItems.map((l) => l.size / this.contentSize));
  }
  updateSashEnablement() {
    let l = !1;
    const m = this.viewItems.map((X) => l = X.size - X.minimumSize > 0 || l);
    l = !1;
    const c = this.viewItems.map((X) => l = X.maximumSize - X.size > 0 || l), I = [...this.viewItems].reverse();
    l = !1;
    const i = I.map((X) => l = X.size - X.minimumSize > 0 || l).reverse();
    l = !1;
    const b = I.map((X) => l = X.maximumSize - X.size > 0 || l).reverse();
    let W = 0;
    for (let X = 0; X < this.sashItems.length; X++) {
      const {
        sash: d
      } = this.sashItems[X];
      W += this.viewItems[X].size;
      const y = !(m[X] && b[X + 1]), G = !(c[X] && i[X + 1]);
      if (y && G) {
        const V = oZ(X, -1, -1), u = oZ(X + 1, this.viewItems.length), p = this.findFirstSnapIndex(V), M = this.findFirstSnapIndex(u), s = typeof p == "number" && !this.viewItems[p].visible, S = typeof M == "number" && !this.viewItems[M].visible;
        s && i[X] && (W > 0 || this.startSnappingEnabled) ? d.state = xZ.Minimum : S && m[X] && (W < this.contentSize || this.endSnappingEnabled) ? d.state = xZ.Maximum : d.state = xZ.Disabled;
      } else
        d.state = y && !G ? xZ.Minimum : !y && G ? xZ.Maximum : xZ.Enabled;
    }
  }
  findFirstSnapIndex(l) {
    for (const m of l) {
      const c = this.viewItems[m];
      if (c.visible && c.snap)
        return m;
    }
    for (const m of l) {
      const c = this.viewItems[m];
      if (c.visible && c.maximumSize - c.minimumSize > 0)
        return;
      if (!c.visible && c.snap)
        return m;
    }
  }
}
class xl {
  constructor(l) {
    this.size = void 0, this.size = l;
  }
  getPreferredSize() {
    return this.size;
  }
}
class JI {
  constructor(l, m) {
    this.proportion = void 0, this.layoutService = void 0, this.proportion = l, this.layoutService = m;
  }
  getPreferredSize() {
    return this.proportion * this.layoutService.getSize();
  }
}
class am {
  getPreferredSize() {
  }
}
class hI {
  get preferredSize() {
    return this.layoutStrategy.getPreferredSize();
  }
  set preferredSize(l) {
    if (typeof l == "number")
      this.layoutStrategy = new xl(l);
    else if (typeof l == "string") {
      const m = l.trim();
      if (km(m, "%")) {
        const c = Number(m.slice(0, -1)) / 100;
        this.layoutStrategy = new JI(c, this.layoutService);
      } else if (km(m, "px")) {
        const c = Number(m.slice(0, -2)) / 100;
        this.layoutStrategy = new xl(c);
      } else if (typeof Number.parseFloat(m) == "number") {
        const c = Number.parseFloat(m);
        this.layoutStrategy = new xl(c);
      } else
        this.layoutStrategy = new am();
    } else
      this.layoutStrategy = new am();
  }
  constructor(l, m) {
    var c;
    if (this.minimumSize = 0, this.maximumSize = Number.POSITIVE_INFINITY, this.element = void 0, this.priority = void 0, this.snap = void 0, this.layoutService = void 0, this.layoutStrategy = void 0, this.layoutService = l, this.element = m.element, this.minimumSize = typeof m.minimumSize == "number" ? m.minimumSize : 30, this.maximumSize = typeof m.maximumSize == "number" ? m.maximumSize : Number.POSITIVE_INFINITY, typeof m.preferredSize == "number")
      this.layoutStrategy = new xl(m.preferredSize);
    else if (typeof m.preferredSize == "string") {
      const I = m.preferredSize.trim();
      if (km(I, "%")) {
        const i = Number(I.slice(0, -1)) / 100;
        this.layoutStrategy = new JI(i, this.layoutService);
      } else if (km(I, "px")) {
        const i = Number(I.slice(0, -2));
        this.layoutStrategy = new xl(i);
      } else if (typeof Number.parseFloat(I) == "number") {
        const i = Number.parseFloat(I);
        this.layoutStrategy = new xl(i);
      } else
        this.layoutStrategy = new am();
    } else
      this.layoutStrategy = new am();
    this.priority = (c = m.priority) != null ? c : _Z.Normal, this.snap = typeof m.snap == "boolean" && m.snap;
  }
  layout(l) {
  }
}
function NI(Z) {
  return Z.minSize !== void 0 || Z.maxSize !== void 0 || Z.preferredSize !== void 0 || Z.priority !== void 0 || Z.visible !== void 0;
}
const Uc = RI(({
  className: Z,
  children: l
}, m) => MZ.createElement("div", {
  ref: m,
  className: sc("split-view-view", Zi, Z)
}, l));
Uc.displayName = "Allotment.Pane";
const Xi = RI(({
  children: Z,
  className: l,
  maxSize: m = 1 / 0,
  minSize: c = 30,
  proportionalLayout: I = !0,
  separator: i = !0,
  sizes: b,
  defaultSizes: W = b,
  snap: X = !1,
  vertical: d = !1,
  onChange: y,
  onReset: G,
  onVisibleChange: V,
  onDragStart: u,
  onDragEnd: p
}, M) => {
  const s = r(null), S = r([]), N = r(/* @__PURE__ */ new Map()), J = r(null), o = r(/* @__PURE__ */ new Map()), t = r(new DX()), H = r([]), [R, w] = YZ(!1);
  process.env.NODE_ENV !== "production" && b && console.warn("Prop sizes is deprecated. Please use defaultSizes instead.");
  const C = pI(() => MZ.Children.toArray(Z).filter(MZ.isValidElement), [Z]), j = Rl((U) => {
    var g, E;
    const z = (g = H.current) == null ? void 0 : g[U];
    return typeof (z == null ? void 0 : z.preferredSize) == "number" && ((E = J.current) != null && E.resizeView(U, Math.round(z.preferredSize)), !0);
  }, []);
  return Gi(M, () => ({
    reset: () => {
      if (G)
        G();
      else {
        var U;
        (U = J.current) == null || U.distributeViewSizes();
        for (let g = 0; g < H.current.length; g++)
          j(g);
      }
    },
    resize: (U) => {
      var g;
      (g = J.current) == null || g.resizeViews(U);
    }
  })), bc(() => {
    let U = !0;
    W && o.current.size !== W.length && (U = !1, console.warn(`Expected ${W.length} children based on defaultSizes but found ${o.current.size}`)), U && W && (S.current = C.map((z) => z.key));
    const g = _l({
      orientation: d ? TZ.Vertical : TZ.Horizontal,
      proportionalLayout: I
    }, U && W && {
      descriptor: {
        size: W.reduce((z, k) => z + k, 0),
        views: W.map((z, k) => {
          var K, D, lZ, $;
          const iZ = N.current.get(S.current[k]), v = new hI(t.current, _l({
            element: document.createElement("div"),
            minimumSize: (K = iZ == null ? void 0 : iZ.minSize) != null ? K : c,
            maximumSize: (D = iZ == null ? void 0 : iZ.maxSize) != null ? D : m,
            priority: (lZ = iZ == null ? void 0 : iZ.priority) != null ? lZ : _Z.Normal
          }, (iZ == null ? void 0 : iZ.preferredSize) && {
            preferredSize: iZ == null ? void 0 : iZ.preferredSize
          }, {
            snap: ($ = iZ == null ? void 0 : iZ.snap) != null ? $ : X
          }));
          return H.current.push(v), {
            container: [...o.current.values()][k],
            size: z,
            view: v
          };
        })
      }
    });
    J.current = new Xd(s.current, g, y, u, p), J.current.on("sashDragStart", () => {
      var z;
      (z = s.current) == null || z.classList.add("split-view-sash-dragging");
    }), J.current.on("sashDragEnd", () => {
      var z;
      (z = s.current) == null || z.classList.remove("split-view-sash-dragging");
    }), J.current.on("sashchange", (z) => {
      if (V && J.current) {
        const k = C.map((K) => K.key);
        for (let K = 0; K < k.length; K++) {
          const D = N.current.get(k[K]);
          (D == null ? void 0 : D.visible) !== void 0 && D.visible !== J.current.isViewVisible(K) && V(K, J.current.isViewVisible(K));
        }
      }
    }), J.current.on("sashreset", (z) => {
      if (G)
        G();
      else {
        var k;
        if (j(z) || j(z + 1))
          return;
        (k = J.current) == null || k.distributeViewSizes();
      }
    });
    const E = J.current;
    return () => {
      E.dispose();
    };
  }, []), bc(() => {
    if (R) {
      const e = C.map((B) => B.key), A = [...S.current], XZ = e.filter((B) => !S.current.includes(B)), q = e.filter((B) => S.current.includes(B)), JZ = S.current.map((B) => !e.includes(B));
      for (let B = JZ.length - 1; B >= 0; B--) {
        var U;
        JZ[B] && ((U = J.current) != null && U.removeView(B), A.splice(B, 1), H.current.splice(B, 1));
      }
      for (const B of XZ) {
        var g, E, z, k, K;
        const O = N.current.get(B), cZ = new hI(t.current, _l({
          element: document.createElement("div"),
          minimumSize: (g = O == null ? void 0 : O.minSize) != null ? g : c,
          maximumSize: (E = O == null ? void 0 : O.maxSize) != null ? E : m,
          priority: (z = O == null ? void 0 : O.priority) != null ? z : _Z.Normal
        }, (O == null ? void 0 : O.preferredSize) && {
          preferredSize: O == null ? void 0 : O.preferredSize
        }, {
          snap: (k = O == null ? void 0 : O.snap) != null ? k : X
        }));
        (K = J.current) != null && K.addView(o.current.get(B), cZ, jm.Distribute, e.findIndex((IZ) => IZ === B)), A.splice(e.findIndex((IZ) => IZ === B), 0, B), H.current.splice(e.findIndex((IZ) => IZ === B), 0, cZ);
      }
      for (; !UX(e, A); )
        for (const [B, O] of e.entries()) {
          const cZ = A.findIndex((IZ) => IZ === O);
          if (cZ !== B) {
            var D;
            (D = J.current) == null || D.moveView(o.current.get(O), cZ, B);
            const IZ = A[cZ];
            A.splice(cZ, 1), A.splice(B, 0, IZ);
            break;
          }
        }
      for (const B of XZ) {
        var lZ;
        const O = e.findIndex((IZ) => IZ === B), cZ = H.current[O].preferredSize;
        cZ !== void 0 && ((lZ = J.current) == null || lZ.resizeView(O, cZ));
      }
      for (const B of [...XZ, ...q]) {
        var $, iZ;
        const O = N.current.get(B), cZ = e.findIndex((IZ) => IZ === B);
        O && NI(O) && O.visible !== void 0 && (($ = J.current) == null ? void 0 : $.isViewVisible(cZ)) !== O.visible && ((iZ = J.current) == null || iZ.setViewVisible(cZ, O.visible));
      }
      for (const B of q) {
        const O = N.current.get(B), cZ = e.findIndex((IZ) => IZ === B);
        if (O && NI(O)) {
          var v;
          O.preferredSize !== void 0 && H.current[cZ].preferredSize !== O.preferredSize && (H.current[cZ].preferredSize = O.preferredSize);
          let IZ = !1;
          O.minSize !== void 0 && H.current[cZ].minimumSize !== O.minSize && (H.current[cZ].minimumSize = O.minSize, IZ = !0), O.maxSize !== void 0 && H.current[cZ].maximumSize !== O.maxSize && (H.current[cZ].maximumSize = O.maxSize, IZ = !0), IZ && ((v = J.current) == null || v.layout());
        }
      }
      (XZ.length > 0 || JZ.length > 0) && (S.current = e);
    }
  }, [C, R, m, c, X]), mZ(() => {
    J.current && (J.current.onDidChange = y);
  }, [y]), mZ(() => {
    J.current && (J.current.onDidDragStart = u);
  }, [u]), mZ(() => {
    J.current && (J.current.onDidDragEnd = p);
  }, [p]), jX({
    ref: s,
    onResize: ({
      width: U,
      height: g
    }) => {
      var E;
      U && g && ((E = J.current) != null && E.layout(d ? g : U), t.current.setSize(d ? g : U), w(!0));
    }
  }), bc(() => {
    if (!R) {
      var U;
      const {
        height: g,
        width: E
      } = s.current.getBoundingClientRect();
      (U = J.current) != null && U.layout(d ? g : E), t.current.setSize(d ? g : E), w(!0);
    }
  }, [R, d]), mZ(() => {
    ci && dd(20);
  }, []), MZ.createElement("div", {
    ref: s,
    className: sc("split-view", d ? "split-view-vertical" : "split-view-horizontal", {
      "split-view-separator-border": i
    }, KX, d ? TX : gX, {
      [vX]: i
    }, l)
  }, MZ.createElement("div", {
    className: sc("split-view-container", HX)
  }, MZ.Children.toArray(Z).map((U) => {
    if (!MZ.isValidElement(U))
      return null;
    const g = U.key;
    return U.type.displayName === "Allotment.Pane" ? (N.current.set(g, U.props), MZ.cloneElement(U, {
      key: g,
      ref: (E) => {
        const z = U.ref;
        z && (z.current = E), E ? o.current.set(g, E) : o.current.delete(g);
      }
    })) : MZ.createElement(Uc, {
      key: g,
      ref: (E) => {
        E ? o.current.set(g, E) : o.current.delete(g);
      }
    }, U);
  })));
});
function dd(Z) {
  const l = DZ(Z, 4, 20), m = DZ(Z, 1, 8);
  document.documentElement.style.setProperty("--sash-size", l + "px"), document.documentElement.style.setProperty("--sash-hover-size", m + "px"), function(c) {
    ii = c, bi.emit("onDidChangeGlobalSize", c);
  }(l);
}
Xi.displayName = "Allotment";
var Gc = Object.assign(Xi, {
  Pane: Uc
});
const yd = "_active_ra95p_71", Ul = {
  "collapse-left": "_collapse-left_ra95p_1",
  "collapse-btn": "_collapse-btn_ra95p_12",
  "collapse-right": "_collapse-right_ra95p_36",
  active: yd
};
const Ld = (Z) => {
  var G, V;
  const { defaultSizes: l = [100, 100] } = Z, m = {
    LEFT: [0, 1 / 0],
    CENTER: l,
    RIGHT: [1 / 0, 0]
  }, c = r(null), [I, i] = YZ(m.CENTER), b = JSON.stringify(I) === JSON.stringify(m.LEFT), W = JSON.stringify(I) === JSON.stringify(m.RIGHT), X = () => {
    var u;
    return JSON.stringify(I) !== JSON.stringify(m.CENTER) ? ((u = c.current) == null || u.resize(m.CENTER), i(m.CENTER), !0) : !1;
  }, d = () => {
    var u;
    X() || ((u = c.current) == null || u.resize(m.LEFT), i(m.LEFT));
  }, y = () => {
    var u;
    X() || ((u = c.current) == null || u.resize(m.RIGHT), i(m.RIGHT));
  };
  return /* @__PURE__ */ a.jsxs(Gc, { ref: c, defaultSizes: l, children: [
    /* @__PURE__ */ a.jsxs(Gc.Pane, { snap: !0, minSize: 0, children: [
      (G = Z.children) == null ? void 0 : G[0],
      /* @__PURE__ */ a.jsx("div", { className: Kl(Ul["collapse-left"], W ? Ul.active : ""), children: /* @__PURE__ */ a.jsx("div", { className: Ul["collapse-btn"], onClick: d }) })
    ] }),
    /* @__PURE__ */ a.jsxs(Gc.Pane, { snap: !0, minSize: 0, children: [
      /* @__PURE__ */ a.jsx("div", { className: Kl(Ul["collapse-right"], b ? Ul.active : ""), children: /* @__PURE__ */ a.jsx("div", { className: Ul["collapse-btn"], onClick: y }) }),
      (V = Z.children) == null ? void 0 : V[1]
    ] })
  ] });
};
const Gd = {
  theme: "dark",
  editorHeight: "100vh"
}, Yd = (Z) => {
  const {
    width: l = "100vw",
    height: m = "100vh",
    theme: c,
    importMap: I,
    files: i,
    showCompileOutput: b = !0,
    showHeader: W = !0,
    showFileSelector: X = !0,
    fileSelectorReadOnly: d = !1,
    border: y = !1,
    defaultSizes: G,
    onUrlChange: V
  } = Z, { filesHash: u, changeTheme: p, setFiles: M, setSelectedFileName: s } = ol(Sl), S = Object.assign(Gd, Z.options || {});
  return mZ(() => {
    if (i && !(i != null && i[pl]))
      throw new Error(
        `Missing required property : '${pl}' is a mandatory property for 'files'`
      );
    {
      const N = yW(i, I);
      N && M(N);
      const J = dW(i);
      J && s(J);
    }
  }, [i]), mZ(() => {
    c && p(c);
  }, [c]), mZ(() => {
    V == null || V(u);
  }, [u]), /* @__PURE__ */ a.jsxs(
    "div",
    {
      "data-id": "react-playground",
      style: { width: l, height: m, border: y ? "1px solid var(--border)" : "" },
      children: [
        W ? /* @__PURE__ */ a.jsx(uX, {}) : null,
        /* @__PURE__ */ a.jsx("div", { style: { height: `calc(100% - ${W ? 50 : 0}px)` }, children: /* @__PURE__ */ a.jsxs(Ld, { defaultSizes: G, children: [
          /* @__PURE__ */ a.jsx(
            aW,
            {
              options: S,
              showFileSelector: X,
              fileSelectorReadOnly: d
            }
          ),
          /* @__PURE__ */ a.jsx(FX, { showCompileOutput: b })
        ] }) })
      ]
    }
  );
}, ud = (Z) => /* @__PURE__ */ a.jsx(YW, { children: /* @__PURE__ */ a.jsx(Yd, { ...Z }) });
export {
  ud as Playground
};
(function(){"use strict";try{if(typeof document<"u"){var e=document.createElement("style");e.appendChild(document.createTextNode('.react-playground-editor{height:100%;overflow:hidden;background-color:var(--border)}.react-playground-editor.hidden{display:none}.dark .react-playground-editor{height:100%;overflow:hidden;background-color:var(--border)}.dark .react-playground-editor .jsx-tag-angle-bracket{color:gray}.dark .react-playground-editor .jsx-text{color:#d4d4d4}.dark .react-playground-editor .jsx-tag-name{color:#569cd6}.dark .react-playground-editor .jsx-tag-attribute-key{color:#9cdcfe}.light .react-playground-editor{height:100%;overflow:hidden;background-color:var(--border)}.light .react-playground-editor .jsx-tag-angle-bracket{color:maroon}.light .react-playground-editor .jsx-text{color:#000}.light .react-playground-editor .jsx-tag-name{color:maroon}.light .react-playground-editor .jsx-tag-attribute-key{color:red}._dialog_eaiwm_1{top:15%;left:50%;min-width:200px;padding:20px 30px;font-size:14px;color:var(--base);background-color:var(--dialog);border:none;border-radius:4px;transform:translate(-50%)}._dialog-footer_eaiwm_13{display:flex;justify-content:flex-end;align-items:center;padding-top:15px}._dialog-footer_eaiwm_13 button{padding:4px 15px;font-size:14px;color:var(--base);cursor:pointer;background:transparent;border:none;border-radius:4px;outline:none}._dialog-footer_eaiwm_13 ._dialog-btn_eaiwm_29{margin-left:4px;color:#fff;text-shadow:0 -1px 0 rgba(0,0,0,.12);background:var(--primary);border-color:var(--primary);box-shadow:0 2px #0000000b}._content_eaiwm_37{display:flex;align-items:center}._content_eaiwm_37 svg{margin-right:16px;font-size:20px;color:#d89614}._tabs_16nwc_1{display:flex;width:100%;height:38px;overflow:auto hidden;color:var(--base);background-color:var(--bg);flex-shrink:0;align-items:center;border-bottom:1px solid var(--border);box-sizing:border-box}._tabs_16nwc_1::-webkit-scrollbar{height:1px}._tabs_16nwc_1::-webkit-scrollbar-track{background-color:var(--border)}._tabs_16nwc_1::-webkit-scrollbar-thumb{background-color:var(--primary)}._tabs_16nwc_1 ._tab-item_16nwc_22{display:inline-flex;padding:8px 10px 6px;font-size:13px;line-height:20px;cursor:pointer;align-items:center;border-bottom:3px solid transparent;flex-shrink:0}._tabs_16nwc_1 ._tab-item_16nwc_22._actived_16nwc_32{color:var(--primary);border-bottom:3px solid var(--primary)}._tabs_16nwc_1 ._tab-item_16nwc_22:first-child{cursor:text}._tabs_16nwc_1 ._import-map-wrapper_16nwc_39{position:sticky;top:0;right:0;padding-left:10px;margin-left:auto;background-color:var(--bg);flex-shrink:0}._tabs_16nwc_1 ._import-map-wrapper_16nwc_39 ._tab-item_16nwc_22{cursor:pointer!important}._tabs_16nwc_1 ._add_16nwc_51{display:flex;width:38px;height:100%;font-size:18px;color:var(--base);cursor:pointer;justify-content:center;align-items:center;border-bottom:3px solid transparent}._tabs_16nwc_1 ._add_16nwc_51:hover{color:var(--primary)}._tabs-item-input_16nwc_65{z-index:11;width:90px;padding:4px 0 4px 10px;font-size:13px;color:var(--base);background-color:var(--border);border:1px solid var(--border);border-radius:4px;outline:none}._input-mask_16nwc_76{position:absolute;top:0;left:0;z-index:10;width:100%;height:100%;cursor:pointer;background-color:#0006}._msg_1t9wq_1{position:absolute;right:8px;bottom:0;left:8px;z-index:10;display:flex;max-height:calc(100% - 300px);min-height:40px;margin-bottom:8px;color:var(--color);white-space:pre-wrap;background-color:var(--bg-color);border:2px solid transparent;border-radius:6px;align-items:stretch;border-color:var(--color)}._msg_1t9wq_1._error_1t9wq_19{--color: #f56c6c;--bg-color: #fef0f0}._msg_1t9wq_1._warn_1t9wq_23{--color: #e6a23c;--bg-color: #fdf6ec}pre{padding:12px 20px;margin:0;overflow:auto;white-space:break-spaces}._dismiss_1t9wq_33{position:absolute;top:2px;right:2px;display:block;width:18px;height:18px;padding:0;font-size:9px;line-height:18px;color:var(--bg-color);text-align:center;cursor:pointer;background-color:var(--color);border:none;border-radius:9px}._header_1whkb_1{position:relative;z-index:999;display:flex;height:50px;padding:0 1em;color:var(--base);background-color:var(--bg);box-sizing:border-box;align-items:center;box-shadow:0 0 4px var(--box-shadow);border-bottom:1px solid var(--border);justify-content:space-between}._header_1whkb_1 ._logo_1whkb_15{display:flex;font-size:20px;align-items:center}._header_1whkb_1 ._logo_1whkb_15 img{height:24px;margin-right:10px}._header_1whkb_1 ._links_1whkb_24{display:flex;height:100%}._header_1whkb_1 ._links_1whkb_24 button{display:flex;width:34px;height:100%;padding:0 6px;margin-left:4px;cursor:pointer;background-color:transparent;border:none;outline:none;align-items:center}._header_1whkb_1 ._links_1whkb_24 button>svg{color:#666}._header_1whkb_1 ._links_1whkb_24 button._theme_1whkb_43>svg{width:18px;height:18px}._tabs_1vzew_1{display:flex;width:100%;height:38px;color:var(--base);background-color:var(--bg);align-items:center;border-bottom:1px solid var(--border);box-sizing:border-box}._tabs_1vzew_1 ._tab-item_1vzew_11{display:inline-block;padding:8px 10px 6px;font-size:13px;line-height:20px;cursor:pointer;border-bottom:3px solid transparent;flex-shrink:0}._tabs_1vzew_1 ._tab-item_1vzew_11._actived_1vzew_20{border-bottom:3px solid var(--primary)}._collapse-left_ra95p_1{position:absolute;top:0;z-index:1;display:flex;width:20px;height:100%;align-items:center;right:0;justify-content:end}._collapse-left_ra95p_1:hover ._collapse-btn_ra95p_12{display:flex}._collapse-left_ra95p_1 ._collapse-btn_ra95p_12{position:relative;display:none;width:10px;height:48px;cursor:pointer;background-color:#e7e9e8;border-radius:4px 0 0 4px}._collapse-left_ra95p_1 ._collapse-btn_ra95p_12:after{position:absolute;top:50%;left:50%;width:0;height:0;content:"";border-top:5px solid transparent;border-bottom:5px solid transparent;transform:translate(-50%) translateY(-50%);border-right:6px solid #000}._collapse-right_ra95p_36{position:absolute;top:0;z-index:1;display:flex;width:20px;height:100%;align-items:center;left:0;justify-content:start}._collapse-right_ra95p_36:hover ._collapse-btn_ra95p_12{display:flex}._collapse-right_ra95p_36 ._collapse-btn_ra95p_12{position:relative;display:none;width:10px;height:48px;cursor:pointer;background-color:#e7e9e8;border-radius:0 4px 4px 0}._collapse-right_ra95p_36 ._collapse-btn_ra95p_12:after{position:absolute;top:50%;left:50%;width:0;height:0;content:"";border-top:5px solid transparent;border-bottom:5px solid transparent;transform:translate(-50%) translateY(-50%);border-left:6px solid #000}._collapse-left_ra95p_1._active_ra95p_71 ._collapse-btn_ra95p_12,._collapse-right_ra95p_36._active_ra95p_71 ._collapse-btn_ra95p_12{display:flex}:root{--separator-border: rgba(128, 128, 128, .35)}.allotment-module_splitView__L-yRc{height:100%;overflow:hidden;position:relative;width:100%}.allotment-module_splitView__L-yRc>.allotment-module_sashContainer__fzwJF{height:100%;pointer-events:none;position:absolute;width:100%}.allotment-module_splitView__L-yRc>.allotment-module_sashContainer__fzwJF>.allotment-module_sash__QA-2t{pointer-events:auto}.allotment-module_splitView__L-yRc>.allotment-module_splitViewContainer__rQnVa{height:100%;position:relative;white-space:nowrap;width:100%}.allotment-module_splitView__L-yRc>.allotment-module_splitViewContainer__rQnVa>.allotment-module_splitViewView__MGZ6O{overflow:hidden;position:absolute;white-space:initial}.allotment-module_splitView__L-yRc.allotment-module_vertical__WSwwa>.allotment-module_splitViewContainer__rQnVa>.allotment-module_splitViewView__MGZ6O{width:100%}.allotment-module_splitView__L-yRc.allotment-module_horizontal__7doS8>.allotment-module_splitViewContainer__rQnVa>.allotment-module_splitViewView__MGZ6O{height:100%}.allotment-module_splitView__L-yRc.allotment-module_separatorBorder__x-rDS>.allotment-module_splitViewContainer__rQnVa>.allotment-module_splitViewView__MGZ6O:not(:first-child):before{background-color:var(--separator-border);content:" ";left:0;pointer-events:none;position:absolute;top:0;z-index:5}.allotment-module_splitView__L-yRc.allotment-module_separatorBorder__x-rDS.allotment-module_vertical__WSwwa>.allotment-module_splitViewContainer__rQnVa>.allotment-module_splitViewView__MGZ6O:not(:first-child):before{height:1px;width:100%}.allotment-module_splitView__L-yRc.allotment-module_separatorBorder__x-rDS.allotment-module_horizontal__7doS8>.allotment-module_splitViewContainer__rQnVa>.allotment-module_splitViewView__MGZ6O:not(:first-child):before{height:100%;width:1px}:root{--focus-border: #007fd4;--sash-size: 8px;--sash-hover-size: 4px}.sash-module_sash__K-9lB{position:absolute;z-index:35;touch-action:none;pointer-events:auto;text-align:initial}.sash-module_sash__K-9lB.sash-module_disabled__Hm-wx{pointer-events:none}.sash-module_sash__K-9lB.sash-module_mac__Jf6OJ.sash-module_vertical__pB-rs{cursor:col-resize}.sash-module_sash__K-9lB.sash-module_vertical__pB-rs.sash-module_minimum__-UKxp{cursor:e-resize}.sash-module_sash__K-9lB.sash-module_vertical__pB-rs.sash-module_maximum__TCWxD{cursor:w-resize}.sash-module_sash__K-9lB.sash-module_mac__Jf6OJ.sash-module_horizontal__kFbiw{cursor:row-resize}.sash-module_sash__K-9lB.sash-module_horizontal__kFbiw.sash-module_minimum__-UKxp{cursor:s-resize}.sash-module_sash__K-9lB.sash-module_horizontal__kFbiw.sash-module_maximum__TCWxD{cursor:n-resize}.sash-module_sash__K-9lB.sash-module_disabled__Hm-wx{cursor:default!important;pointer-events:none!important}.sash-module_sash__K-9lB.sash-module_vertical__pB-rs{cursor:ew-resize;top:0;width:var(--sash-size);height:100%}.sash-module_sash__K-9lB.sash-module_horizontal__kFbiw{cursor:ns-resize;left:0;width:100%;height:var(--sash-size)}.sash-module_sash__K-9lB:not(.sash-module_disabled__Hm-wx)>.sash-module_orthogonal-drag-handle__Yii2-{content:" ";height:calc(var(--sash-size) * 2);width:calc(var(--sash-size) * 2);z-index:100;display:block;cursor:all-scroll;position:absolute}.sash-module_sash__K-9lB.sash-module_horizontal__kFbiw.sash-module_orthogonal-edge-north__f7Noe:not(.sash-module_disabled__Hm-wx)>.sash-module_orthogonal-drag-handle__Yii2-.sash-module_start__uZEDk,.sash-module_sash__K-9lB.sash-module_horizontal__kFbiw.sash-module_orthogonal-edge-south__6ZrFC:not(.sash-module_disabled__Hm-wx)>.sash-module_orthogonal-drag-handle__Yii2-.sash-module_end__0TP-R{cursor:nwse-resize}.sash-module_sash__K-9lB.sash-module_horizontal__kFbiw.sash-module_orthogonal-edge-north__f7Noe:not(.sash-module_disabled__Hm-wx)>.sash-module_orthogonal-drag-handle__Yii2-.sash-module_end__0TP-R,.sash-module_sash__K-9lB.sash-module_horizontal__kFbiw.sash-module_orthogonal-edge-south__6ZrFC:not(.sash-module_disabled__Hm-wx)>.sash-module_orthogonal-drag-handle__Yii2-.sash-module_start__uZEDk{cursor:nesw-resize}.sash-module_sash__K-9lB.sash-module_vertical__pB-rs>.sash-module_orthogonal-drag-handle__Yii2-.sash-module_start__uZEDk{left:calc(var(--sash-size) * -.5);top:calc(var(--sash-size) * -1)}.sash-module_sash__K-9lB.sash-module_vertical__pB-rs>.sash-module_orthogonal-drag-handle__Yii2-.sash-module_end__0TP-R{left:calc(var(--sash-size) * -.5);bottom:calc(var(--sash-size) * -1)}.sash-module_sash__K-9lB.sash-module_horizontal__kFbiw>.sash-module_orthogonal-drag-handle__Yii2-.sash-module_start__uZEDk{top:calc(var(--sash-size) * -.5);left:calc(var(--sash-size) * -1)}.sash-module_sash__K-9lB.sash-module_horizontal__kFbiw>.sash-module_orthogonal-drag-handle__Yii2-.sash-module_end__0TP-R{top:calc(var(--sash-size) * -.5);right:calc(var(--sash-size) * -1)}.sash-module_sash__K-9lB:before{content:"";pointer-events:none;position:absolute;width:100%;height:100%;transition:background-color .1s ease-out;background:transparent}.sash-module_sash__K-9lB.sash-module_vertical__pB-rs:before{width:var(--sash-hover-size);left:calc(50% - (var(--sash-hover-size) / 2))}.sash-module_sash__K-9lB.sash-module_horizontal__kFbiw:before{height:var(--sash-hover-size);top:calc(50% - (var(--sash-hover-size) / 2))}.sash-module_sash__K-9lB.sash-module_hover__80W6I:before,.sash-module_sash__K-9lB.sash-module_active__bJspD:before{background:var(--focus-border)}div[data-id=react-playground].light{--base: #444;--bg: #fff;--border: #ddd;--box-shadow: #00000054;--primary: #00d8fe;--dialog: #fff}div[data-id=react-playground].dark{--base: #ddd;--bg: #1a1a1a;--border: #383838;--box-shadow: #0000;--primary: #00d8fe;--dialog: #2a2a2a}')),document.head.appendChild(e)}}catch(o){console.error("vite-plugin-css-injected-by-js",o)}})();