import { r as b, b as It, a as re } from './index-uubelm5h.js';
import { _ as C } from './extends-CF3RwP-h.js';
var Pt = { exports: {} },
  we = {};
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var pr;
function Jn() {
  if (pr) return we;
  pr = 1;
  var e = b,
    t = Symbol.for('react.element'),
    r = Symbol.for('react.fragment'),
    n = Object.prototype.hasOwnProperty,
    o = e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,
    i = { key: !0, ref: !0, __self: !0, __source: !0 };
  function a(s, c, u) {
    var f,
      p = {},
      d = null,
      h = null;
    u !== void 0 && (d = '' + u),
      c.key !== void 0 && (d = '' + c.key),
      c.ref !== void 0 && (h = c.ref);
    for (f in c) n.call(c, f) && !i.hasOwnProperty(f) && (p[f] = c[f]);
    if (s && s.defaultProps) for (f in ((c = s.defaultProps), c)) p[f] === void 0 && (p[f] = c[f]);
    return { $$typeof: t, type: s, key: d, ref: h, props: p, _owner: o.current };
  }
  return (we.Fragment = r), (we.jsx = a), (we.jsxs = a), we;
}
var mr;
function Ae() {
  return mr || ((mr = 1), (Pt.exports = Jn())), Pt.exports;
}
var L = Ae(),
  Kt = {},
  Yr = { exports: {} };
(function (e) {
  function t(r) {
    return r && r.__esModule ? r : { default: r };
  }
  (e.exports = t), (e.exports.__esModule = !0), (e.exports.default = e.exports);
})(Yr);
var ge = Yr.exports,
  Tt = {};
function ne(e) {
  if (typeof e != 'object' || e === null) return !1;
  const t = Object.getPrototypeOf(e);
  return (
    (t === null || t === Object.prototype || Object.getPrototypeOf(t) === null) &&
    !(Symbol.toStringTag in e) &&
    !(Symbol.iterator in e)
  );
}
function Jr(e) {
  if (!ne(e)) return e;
  const t = {};
  return (
    Object.keys(e).forEach((r) => {
      t[r] = Jr(e[r]);
    }),
    t
  );
}
function Z(e, t, r = { clone: !0 }) {
  const n = r.clone ? C({}, e) : e;
  return (
    ne(e) &&
      ne(t) &&
      Object.keys(t).forEach((o) => {
        ne(t[o]) && Object.prototype.hasOwnProperty.call(e, o) && ne(e[o])
          ? (n[o] = Z(e[o], t[o], r))
          : r.clone
            ? (n[o] = ne(t[o]) ? Jr(t[o]) : t[o])
            : (n[o] = t[o]);
      }),
    n
  );
}
const Zn = Object.freeze(
  Object.defineProperty({ __proto__: null, default: Z, isPlainObject: ne }, Symbol.toStringTag, {
    value: 'Module',
  }),
);
function Ce(e) {
  let t = 'https://mui.com/production-error/?code=' + e;
  for (let r = 1; r < arguments.length; r += 1) t += '&args[]=' + encodeURIComponent(arguments[r]);
  return 'Minified MUI error #' + e + '; visit ' + t + ' for the full message.';
}
const Qn = Object.freeze(
  Object.defineProperty({ __proto__: null, default: Ce }, Symbol.toStringTag, { value: 'Module' }),
);
var Zr = { exports: {} },
  _ = {};
/**
 * @license React
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var Gt = Symbol.for('react.element'),
  Ht = Symbol.for('react.portal'),
  Je = Symbol.for('react.fragment'),
  Ze = Symbol.for('react.strict_mode'),
  Qe = Symbol.for('react.profiler'),
  et = Symbol.for('react.provider'),
  tt = Symbol.for('react.context'),
  eo = Symbol.for('react.server_context'),
  rt = Symbol.for('react.forward_ref'),
  nt = Symbol.for('react.suspense'),
  ot = Symbol.for('react.suspense_list'),
  it = Symbol.for('react.memo'),
  at = Symbol.for('react.lazy'),
  to = Symbol.for('react.offscreen'),
  Qr;
Qr = Symbol.for('react.module.reference');
function U(e) {
  if (typeof e == 'object' && e !== null) {
    var t = e.$$typeof;
    switch (t) {
      case Gt:
        switch (((e = e.type), e)) {
          case Je:
          case Qe:
          case Ze:
          case nt:
          case ot:
            return e;
          default:
            switch (((e = e && e.$$typeof), e)) {
              case eo:
              case tt:
              case rt:
              case at:
              case it:
              case et:
                return e;
              default:
                return t;
            }
        }
      case Ht:
        return t;
    }
  }
}
_.ContextConsumer = tt;
_.ContextProvider = et;
_.Element = Gt;
_.ForwardRef = rt;
_.Fragment = Je;
_.Lazy = at;
_.Memo = it;
_.Portal = Ht;
_.Profiler = Qe;
_.StrictMode = Ze;
_.Suspense = nt;
_.SuspenseList = ot;
_.isAsyncMode = function () {
  return !1;
};
_.isConcurrentMode = function () {
  return !1;
};
_.isContextConsumer = function (e) {
  return U(e) === tt;
};
_.isContextProvider = function (e) {
  return U(e) === et;
};
_.isElement = function (e) {
  return typeof e == 'object' && e !== null && e.$$typeof === Gt;
};
_.isForwardRef = function (e) {
  return U(e) === rt;
};
_.isFragment = function (e) {
  return U(e) === Je;
};
_.isLazy = function (e) {
  return U(e) === at;
};
_.isMemo = function (e) {
  return U(e) === it;
};
_.isPortal = function (e) {
  return U(e) === Ht;
};
_.isProfiler = function (e) {
  return U(e) === Qe;
};
_.isStrictMode = function (e) {
  return U(e) === Ze;
};
_.isSuspense = function (e) {
  return U(e) === nt;
};
_.isSuspenseList = function (e) {
  return U(e) === ot;
};
_.isValidElementType = function (e) {
  return (
    typeof e == 'string' ||
    typeof e == 'function' ||
    e === Je ||
    e === Qe ||
    e === Ze ||
    e === nt ||
    e === ot ||
    e === to ||
    (typeof e == 'object' &&
      e !== null &&
      (e.$$typeof === at ||
        e.$$typeof === it ||
        e.$$typeof === et ||
        e.$$typeof === tt ||
        e.$$typeof === rt ||
        e.$$typeof === Qr ||
        e.getModuleId !== void 0))
  );
};
_.typeOf = U;
Zr.exports = _;
var hr = Zr.exports;
const ro = /^\s*function(?:\s|\s*\/\*.*\*\/\s*)+([^(\s/]*)\s*/;
function en(e) {
  const t = `${e}`.match(ro);
  return (t && t[1]) || '';
}
function tn(e, t = '') {
  return e.displayName || e.name || en(e) || t;
}
function yr(e, t, r) {
  const n = tn(t);
  return e.displayName || (n !== '' ? `${r}(${n})` : r);
}
function no(e) {
  if (e != null) {
    if (typeof e == 'string') return e;
    if (typeof e == 'function') return tn(e, 'Component');
    if (typeof e == 'object')
      switch (e.$$typeof) {
        case hr.ForwardRef:
          return yr(e, e.render, 'ForwardRef');
        case hr.Memo:
          return yr(e, e.type, 'memo');
        default:
          return;
      }
  }
}
const oo = Object.freeze(
  Object.defineProperty({ __proto__: null, default: no, getFunctionName: en }, Symbol.toStringTag, {
    value: 'Module',
  }),
);
function oe(e) {
  if (typeof e != 'string') throw new Error(Ce(7));
  return e.charAt(0).toUpperCase() + e.slice(1);
}
const io = Object.freeze(
  Object.defineProperty({ __proto__: null, default: oe }, Symbol.toStringTag, { value: 'Module' }),
);
function ao(...e) {
  return e.reduce(
    (t, r) =>
      r == null
        ? t
        : function (...o) {
            t.apply(this, o), r.apply(this, o);
          },
    () => {},
  );
}
function so(e, t = 166) {
  let r;
  function n(...o) {
    const i = () => {
      e.apply(this, o);
    };
    clearTimeout(r), (r = setTimeout(i, t));
  }
  return (
    (n.clear = () => {
      clearTimeout(r);
    }),
    n
  );
}
function co(e, t) {
  return () => null;
}
function uo(e, t) {
  var r, n;
  return (
    b.isValidElement(e) &&
    t.indexOf(
      (r = e.type.muiName) != null
        ? r
        : (n = e.type) == null || (n = n._payload) == null || (n = n.value) == null
          ? void 0
          : n.muiName,
    ) !== -1
  );
}
function rn(e) {
  return (e && e.ownerDocument) || document;
}
function lo(e) {
  return rn(e).defaultView || window;
}
function fo(e, t) {
  return () => null;
}
function nn(e, t) {
  typeof e == 'function' ? e(t) : e && (e.current = t);
}
const on = typeof window < 'u' ? b.useLayoutEffect : b.useEffect;
let gr = 0;
function po(e) {
  const [t, r] = b.useState(e),
    n = e || t;
  return (
    b.useEffect(() => {
      t == null && ((gr += 1), r(`mui-${gr}`));
    }, [t]),
    n
  );
}
const br = It.useId;
function mo(e) {
  if (br !== void 0) {
    const t = br();
    return e ?? t;
  }
  return po(e);
}
function ho(e, t, r, n, o) {
  return null;
}
function yo({ controlled: e, default: t, name: r, state: n = 'value' }) {
  const { current: o } = b.useRef(e !== void 0),
    [i, a] = b.useState(t),
    s = o ? e : i,
    c = b.useCallback((u) => {
      o || a(u);
    }, []);
  return [s, c];
}
function go(e) {
  const t = b.useRef(e);
  return (
    on(() => {
      t.current = e;
    }),
    b.useRef((...r) => (0, t.current)(...r)).current
  );
}
function bo(...e) {
  return b.useMemo(
    () =>
      e.every((t) => t == null)
        ? null
        : (t) => {
            e.forEach((r) => {
              nn(r, t);
            });
          },
    e,
  );
}
class Ut {
  constructor() {
    (this.currentId = null),
      (this.clear = () => {
        this.currentId !== null && (clearTimeout(this.currentId), (this.currentId = null));
      }),
      (this.disposeEffect = () => this.clear);
  }
  static create() {
    return new Ut();
  }
  start(t, r) {
    this.clear(),
      (this.currentId = setTimeout(() => {
        (this.currentId = null), r();
      }, t));
  }
}
let st = !0,
  Ft = !1;
const vo = new Ut(),
  xo = {
    text: !0,
    search: !0,
    url: !0,
    tel: !0,
    email: !0,
    password: !0,
    number: !0,
    date: !0,
    month: !0,
    week: !0,
    time: !0,
    datetime: !0,
    'datetime-local': !0,
  };
function So(e) {
  const { type: t, tagName: r } = e;
  return !!(
    (r === 'INPUT' && xo[t] && !e.readOnly) ||
    (r === 'TEXTAREA' && !e.readOnly) ||
    e.isContentEditable
  );
}
function wo(e) {
  e.metaKey || e.altKey || e.ctrlKey || (st = !0);
}
function Rt() {
  st = !1;
}
function _o() {
  this.visibilityState === 'hidden' && Ft && (st = !0);
}
function $o(e) {
  e.addEventListener('keydown', wo, !0),
    e.addEventListener('mousedown', Rt, !0),
    e.addEventListener('pointerdown', Rt, !0),
    e.addEventListener('touchstart', Rt, !0),
    e.addEventListener('visibilitychange', _o, !0);
}
function ko(e) {
  const { target: t } = e;
  try {
    return t.matches(':focus-visible');
  } catch {}
  return st || So(t);
}
function Co() {
  const e = b.useCallback((o) => {
      o != null && $o(o.ownerDocument);
    }, []),
    t = b.useRef(!1);
  function r() {
    return t.current
      ? ((Ft = !0),
        vo.start(100, () => {
          Ft = !1;
        }),
        (t.current = !1),
        !0)
      : !1;
  }
  function n(o) {
    return ko(o) ? ((t.current = !0), !0) : !1;
  }
  return { isFocusVisibleRef: t, onFocus: n, onBlur: r, ref: e };
}
function zt(e, t) {
  const r = C({}, t);
  return (
    Object.keys(e).forEach((n) => {
      if (n.toString().match(/^(components|slots)$/)) r[n] = C({}, e[n], r[n]);
      else if (n.toString().match(/^(componentsProps|slotProps)$/)) {
        const o = e[n] || {},
          i = t[n];
        (r[n] = {}),
          !i || !Object.keys(i)
            ? (r[n] = o)
            : !o || !Object.keys(o)
              ? (r[n] = i)
              : ((r[n] = C({}, i)),
                Object.keys(o).forEach((a) => {
                  r[n][a] = zt(o[a], i[a]);
                }));
      } else r[n] === void 0 && (r[n] = e[n]);
    }),
    r
  );
}
function Oo(e, t, r = void 0) {
  const n = {};
  return (
    Object.keys(e).forEach((o) => {
      n[o] = e[o]
        .reduce((i, a) => {
          if (a) {
            const s = t(a);
            s !== '' && i.push(s), r && r[a] && i.push(r[a]);
          }
          return i;
        }, [])
        .join(' ');
    }),
    n
  );
}
const vr = (e) => e,
  Po = () => {
    let e = vr;
    return {
      configure(t) {
        e = t;
      },
      generate(t) {
        return e(t);
      },
      reset() {
        e = vr;
      },
    };
  },
  an = Po(),
  To = {
    active: 'active',
    checked: 'checked',
    completed: 'completed',
    disabled: 'disabled',
    error: 'error',
    expanded: 'expanded',
    focused: 'focused',
    focusVisible: 'focusVisible',
    open: 'open',
    readOnly: 'readOnly',
    required: 'required',
    selected: 'selected',
  };
function sn(e, t, r = 'Mui') {
  const n = To[t];
  return n ? `${r}-${n}` : `${an.generate(e)}-${t}`;
}
function Ro(e, t, r = 'Mui') {
  const n = {};
  return (
    t.forEach((o) => {
      n[o] = sn(e, o, r);
    }),
    n
  );
}
function Ao(e, t = Number.MIN_SAFE_INTEGER, r = Number.MAX_SAFE_INTEGER) {
  return Math.max(t, Math.min(e, r));
}
const Eo = Object.freeze(
  Object.defineProperty({ __proto__: null, default: Ao }, Symbol.toStringTag, { value: 'Module' }),
);
function ie(e, t) {
  if (e == null) return {};
  var r = {};
  for (var n in e)
    if ({}.hasOwnProperty.call(e, n)) {
      if (t.includes(n)) continue;
      r[n] = e[n];
    }
  return r;
}
function cn(e) {
  var t,
    r,
    n = '';
  if (typeof e == 'string' || typeof e == 'number') n += e;
  else if (typeof e == 'object')
    if (Array.isArray(e)) {
      var o = e.length;
      for (t = 0; t < o; t++) e[t] && (r = cn(e[t])) && (n && (n += ' '), (n += r));
    } else for (r in e) e[r] && (n && (n += ' '), (n += r));
  return n;
}
function jo() {
  for (var e, t, r = 0, n = '', o = arguments.length; r < o; r++)
    (e = arguments[r]) && (t = cn(e)) && (n && (n += ' '), (n += t));
  return n;
}
const Mo = b.createContext(void 0);
function Io(e) {
  const { theme: t, name: r, props: n } = e;
  if (!t || !t.components || !t.components[r]) return n;
  const o = t.components[r];
  return o.defaultProps ? zt(o.defaultProps, n) : !o.styleOverrides && !o.variants ? zt(o, n) : n;
}
function Fo({ props: e, name: t }) {
  const r = b.useContext(Mo);
  return Io({ props: e, name: t, theme: { components: r } });
}
function zo(e) {
  return Fo(e);
}
var Ee = {},
  At = { exports: {} },
  xr;
function un() {
  return (
    xr ||
      ((xr = 1),
      (function (e) {
        function t() {
          return (
            (e.exports = t =
              Object.assign
                ? Object.assign.bind()
                : function (r) {
                    for (var n = 1; n < arguments.length; n++) {
                      var o = arguments[n];
                      for (var i in o) ({}).hasOwnProperty.call(o, i) && (r[i] = o[i]);
                    }
                    return r;
                  }),
            (e.exports.__esModule = !0),
            (e.exports.default = e.exports),
            t.apply(null, arguments)
          );
        }
        (e.exports = t), (e.exports.__esModule = !0), (e.exports.default = e.exports);
      })(At)),
    At.exports
  );
}
var Et = { exports: {} },
  Sr;
function Lo() {
  return (
    Sr ||
      ((Sr = 1),
      (function (e) {
        function t(r, n) {
          if (r == null) return {};
          var o = {};
          for (var i in r)
            if ({}.hasOwnProperty.call(r, i)) {
              if (n.includes(i)) continue;
              o[i] = r[i];
            }
          return o;
        }
        (e.exports = t), (e.exports.__esModule = !0), (e.exports.default = e.exports);
      })(Et)),
    Et.exports
  );
}
function ln(e) {
  var t = Object.create(null);
  return function (r) {
    return t[r] === void 0 && (t[r] = e(r)), t[r];
  };
}
var No =
    /^((children|dangerouslySetInnerHTML|key|ref|autoFocus|defaultValue|defaultChecked|innerHTML|suppressContentEditableWarning|suppressHydrationWarning|valueLink|abbr|accept|acceptCharset|accessKey|action|allow|allowUserMedia|allowPaymentRequest|allowFullScreen|allowTransparency|alt|async|autoComplete|autoPlay|capture|cellPadding|cellSpacing|challenge|charSet|checked|cite|classID|className|cols|colSpan|content|contentEditable|contextMenu|controls|controlsList|coords|crossOrigin|data|dateTime|decoding|default|defer|dir|disabled|disablePictureInPicture|disableRemotePlayback|download|draggable|encType|enterKeyHint|form|formAction|formEncType|formMethod|formNoValidate|formTarget|frameBorder|headers|height|hidden|high|href|hrefLang|htmlFor|httpEquiv|id|inputMode|integrity|is|keyParams|keyType|kind|label|lang|list|loading|loop|low|marginHeight|marginWidth|max|maxLength|media|mediaGroup|method|min|minLength|multiple|muted|name|nonce|noValidate|open|optimum|pattern|placeholder|playsInline|poster|preload|profile|radioGroup|readOnly|referrerPolicy|rel|required|reversed|role|rows|rowSpan|sandbox|scope|scoped|scrolling|seamless|selected|shape|size|sizes|slot|span|spellCheck|src|srcDoc|srcLang|srcSet|start|step|style|summary|tabIndex|target|title|translate|type|useMap|value|width|wmode|wrap|about|datatype|inlist|prefix|property|resource|typeof|vocab|autoCapitalize|autoCorrect|autoSave|color|incremental|fallback|inert|itemProp|itemScope|itemType|itemID|itemRef|on|option|results|security|unselectable|accentHeight|accumulate|additive|alignmentBaseline|allowReorder|alphabetic|amplitude|arabicForm|ascent|attributeName|attributeType|autoReverse|azimuth|baseFrequency|baselineShift|baseProfile|bbox|begin|bias|by|calcMode|capHeight|clip|clipPathUnits|clipPath|clipRule|colorInterpolation|colorInterpolationFilters|colorProfile|colorRendering|contentScriptType|contentStyleType|cursor|cx|cy|d|decelerate|descent|diffuseConstant|direction|display|divisor|dominantBaseline|dur|dx|dy|edgeMode|elevation|enableBackground|end|exponent|externalResourcesRequired|fill|fillOpacity|fillRule|filter|filterRes|filterUnits|floodColor|floodOpacity|focusable|fontFamily|fontSize|fontSizeAdjust|fontStretch|fontStyle|fontVariant|fontWeight|format|from|fr|fx|fy|g1|g2|glyphName|glyphOrientationHorizontal|glyphOrientationVertical|glyphRef|gradientTransform|gradientUnits|hanging|horizAdvX|horizOriginX|ideographic|imageRendering|in|in2|intercept|k|k1|k2|k3|k4|kernelMatrix|kernelUnitLength|kerning|keyPoints|keySplines|keyTimes|lengthAdjust|letterSpacing|lightingColor|limitingConeAngle|local|markerEnd|markerMid|markerStart|markerHeight|markerUnits|markerWidth|mask|maskContentUnits|maskUnits|mathematical|mode|numOctaves|offset|opacity|operator|order|orient|orientation|origin|overflow|overlinePosition|overlineThickness|panose1|paintOrder|pathLength|patternContentUnits|patternTransform|patternUnits|pointerEvents|points|pointsAtX|pointsAtY|pointsAtZ|preserveAlpha|preserveAspectRatio|primitiveUnits|r|radius|refX|refY|renderingIntent|repeatCount|repeatDur|requiredExtensions|requiredFeatures|restart|result|rotate|rx|ry|scale|seed|shapeRendering|slope|spacing|specularConstant|specularExponent|speed|spreadMethod|startOffset|stdDeviation|stemh|stemv|stitchTiles|stopColor|stopOpacity|strikethroughPosition|strikethroughThickness|string|stroke|strokeDasharray|strokeDashoffset|strokeLinecap|strokeLinejoin|strokeMiterlimit|strokeOpacity|strokeWidth|surfaceScale|systemLanguage|tableValues|targetX|targetY|textAnchor|textDecoration|textRendering|textLength|to|transform|u1|u2|underlinePosition|underlineThickness|unicode|unicodeBidi|unicodeRange|unitsPerEm|vAlphabetic|vHanging|vIdeographic|vMathematical|values|vectorEffect|version|vertAdvY|vertOriginX|vertOriginY|viewBox|viewTarget|visibility|widths|wordSpacing|writingMode|x|xHeight|x1|x2|xChannelSelector|xlinkActuate|xlinkArcrole|xlinkHref|xlinkRole|xlinkShow|xlinkTitle|xlinkType|xmlBase|xmlns|xmlnsXlink|xmlLang|xmlSpace|y|y1|y2|yChannelSelector|z|zoomAndPan|for|class|autofocus)|(([Dd][Aa][Tt][Aa]|[Aa][Rr][Ii][Aa]|x)-.*))$/,
  Bo = ln(function (e) {
    return (
      No.test(e) || (e.charCodeAt(0) === 111 && e.charCodeAt(1) === 110 && e.charCodeAt(2) < 91)
    );
  }),
  Do = !1;
function Wo(e) {
  if (e.sheet) return e.sheet;
  for (var t = 0; t < document.styleSheets.length; t++)
    if (document.styleSheets[t].ownerNode === e) return document.styleSheets[t];
}
function qo(e) {
  var t = document.createElement('style');
  return (
    t.setAttribute('data-emotion', e.key),
    e.nonce !== void 0 && t.setAttribute('nonce', e.nonce),
    t.appendChild(document.createTextNode('')),
    t.setAttribute('data-s', ''),
    t
  );
}
var Ko = (function () {
    function e(r) {
      var n = this;
      (this._insertTag = function (o) {
        var i;
        n.tags.length === 0
          ? n.insertionPoint
            ? (i = n.insertionPoint.nextSibling)
            : n.prepend
              ? (i = n.container.firstChild)
              : (i = n.before)
          : (i = n.tags[n.tags.length - 1].nextSibling),
          n.container.insertBefore(o, i),
          n.tags.push(o);
      }),
        (this.isSpeedy = r.speedy === void 0 ? !Do : r.speedy),
        (this.tags = []),
        (this.ctr = 0),
        (this.nonce = r.nonce),
        (this.key = r.key),
        (this.container = r.container),
        (this.prepend = r.prepend),
        (this.insertionPoint = r.insertionPoint),
        (this.before = null);
    }
    var t = e.prototype;
    return (
      (t.hydrate = function (n) {
        n.forEach(this._insertTag);
      }),
      (t.insert = function (n) {
        this.ctr % (this.isSpeedy ? 65e3 : 1) === 0 && this._insertTag(qo(this));
        var o = this.tags[this.tags.length - 1];
        if (this.isSpeedy) {
          var i = Wo(o);
          try {
            i.insertRule(n, i.cssRules.length);
          } catch {}
        } else o.appendChild(document.createTextNode(n));
        this.ctr++;
      }),
      (t.flush = function () {
        this.tags.forEach(function (n) {
          var o;
          return (o = n.parentNode) == null ? void 0 : o.removeChild(n);
        }),
          (this.tags = []),
          (this.ctr = 0);
      }),
      e
    );
  })(),
  z = '-ms-',
  Ve = '-moz-',
  x = '-webkit-',
  fn = 'comm',
  Vt = 'rule',
  Xt = 'decl',
  Go = '@import',
  dn = '@keyframes',
  Ho = '@layer',
  Uo = Math.abs,
  ct = String.fromCharCode,
  Vo = Object.assign;
function Xo(e, t) {
  return F(e, 0) ^ 45
    ? (((((((t << 2) ^ F(e, 0)) << 2) ^ F(e, 1)) << 2) ^ F(e, 2)) << 2) ^ F(e, 3)
    : 0;
}
function pn(e) {
  return e.trim();
}
function Yo(e, t) {
  return (e = t.exec(e)) ? e[0] : e;
}
function S(e, t, r) {
  return e.replace(t, r);
}
function Lt(e, t) {
  return e.indexOf(t);
}
function F(e, t) {
  return e.charCodeAt(t) | 0;
}
function Oe(e, t, r) {
  return e.slice(t, r);
}
function Y(e) {
  return e.length;
}
function Yt(e) {
  return e.length;
}
function Le(e, t) {
  return t.push(e), e;
}
function Jo(e, t) {
  return e.map(t).join('');
}
var ut = 1,
  ye = 1,
  mn = 0,
  N = 0,
  M = 0,
  be = '';
function lt(e, t, r, n, o, i, a) {
  return {
    value: e,
    root: t,
    parent: r,
    type: n,
    props: o,
    children: i,
    line: ut,
    column: ye,
    length: a,
    return: '',
  };
}
function _e(e, t) {
  return Vo(lt('', null, null, '', null, null, 0), e, { length: -e.length }, t);
}
function Zo() {
  return M;
}
function Qo() {
  return (M = N > 0 ? F(be, --N) : 0), ye--, M === 10 && ((ye = 1), ut--), M;
}
function D() {
  return (M = N < mn ? F(be, N++) : 0), ye++, M === 10 && ((ye = 1), ut++), M;
}
function Q() {
  return F(be, N);
}
function qe() {
  return N;
}
function je(e, t) {
  return Oe(be, e, t);
}
function Pe(e) {
  switch (e) {
    case 0:
    case 9:
    case 10:
    case 13:
    case 32:
      return 5;
    case 33:
    case 43:
    case 44:
    case 47:
    case 62:
    case 64:
    case 126:
    case 59:
    case 123:
    case 125:
      return 4;
    case 58:
      return 3;
    case 34:
    case 39:
    case 40:
    case 91:
      return 2;
    case 41:
    case 93:
      return 1;
  }
  return 0;
}
function hn(e) {
  return (ut = ye = 1), (mn = Y((be = e))), (N = 0), [];
}
function yn(e) {
  return (be = ''), e;
}
function Ke(e) {
  return pn(je(N - 1, Nt(e === 91 ? e + 2 : e === 40 ? e + 1 : e)));
}
function ei(e) {
  for (; (M = Q()) && M < 33; ) D();
  return Pe(e) > 2 || Pe(M) > 3 ? '' : ' ';
}
function ti(e, t) {
  for (; --t && D() && !(M < 48 || M > 102 || (M > 57 && M < 65) || (M > 70 && M < 97)); );
  return je(e, qe() + (t < 6 && Q() == 32 && D() == 32));
}
function Nt(e) {
  for (; D(); )
    switch (M) {
      case e:
        return N;
      case 34:
      case 39:
        e !== 34 && e !== 39 && Nt(M);
        break;
      case 40:
        e === 41 && Nt(e);
        break;
      case 92:
        D();
        break;
    }
  return N;
}
function ri(e, t) {
  for (; D() && e + M !== 57; ) if (e + M === 84 && Q() === 47) break;
  return '/*' + je(t, N - 1) + '*' + ct(e === 47 ? e : D());
}
function ni(e) {
  for (; !Pe(Q()); ) D();
  return je(e, N);
}
function oi(e) {
  return yn(Ge('', null, null, null, [''], (e = hn(e)), 0, [0], e));
}
function Ge(e, t, r, n, o, i, a, s, c) {
  for (
    var u = 0,
      f = 0,
      p = a,
      d = 0,
      h = 0,
      m = 0,
      l = 1,
      g = 1,
      y = 1,
      w = 0,
      P = '',
      q = o,
      k = i,
      T = n,
      v = P;
    g;

  )
    switch (((m = w), (w = D()))) {
      case 40:
        if (m != 108 && F(v, p - 1) == 58) {
          Lt((v += S(Ke(w), '&', '&\f')), '&\f') != -1 && (y = -1);
          break;
        }
      case 34:
      case 39:
      case 91:
        v += Ke(w);
        break;
      case 9:
      case 10:
      case 13:
      case 32:
        v += ei(m);
        break;
      case 92:
        v += ti(qe() - 1, 7);
        continue;
      case 47:
        switch (Q()) {
          case 42:
          case 47:
            Le(ii(ri(D(), qe()), t, r), c);
            break;
          default:
            v += '/';
        }
        break;
      case 123 * l:
        s[u++] = Y(v) * y;
      case 125 * l:
      case 59:
      case 0:
        switch (w) {
          case 0:
          case 125:
            g = 0;
          case 59 + f:
            y == -1 && (v = S(v, /\f/g, '')),
              h > 0 &&
                Y(v) - p &&
                Le(h > 32 ? _r(v + ';', n, r, p - 1) : _r(S(v, ' ', '') + ';', n, r, p - 2), c);
            break;
          case 59:
            v += ';';
          default:
            if ((Le((T = wr(v, t, r, u, f, o, s, P, (q = []), (k = []), p)), i), w === 123))
              if (f === 0) Ge(v, t, T, T, q, i, p, s, k);
              else
                switch (d === 99 && F(v, 3) === 110 ? 100 : d) {
                  case 100:
                  case 108:
                  case 109:
                  case 115:
                    Ge(
                      e,
                      T,
                      T,
                      n && Le(wr(e, T, T, 0, 0, o, s, P, o, (q = []), p), k),
                      o,
                      k,
                      p,
                      s,
                      n ? q : k,
                    );
                    break;
                  default:
                    Ge(v, T, T, T, [''], k, 0, s, k);
                }
        }
        (u = f = h = 0), (l = y = 1), (P = v = ''), (p = a);
        break;
      case 58:
        (p = 1 + Y(v)), (h = m);
      default:
        if (l < 1) {
          if (w == 123) --l;
          else if (w == 125 && l++ == 0 && Qo() == 125) continue;
        }
        switch (((v += ct(w)), w * l)) {
          case 38:
            y = f > 0 ? 1 : ((v += '\f'), -1);
            break;
          case 44:
            (s[u++] = (Y(v) - 1) * y), (y = 1);
            break;
          case 64:
            Q() === 45 && (v += Ke(D())), (d = Q()), (f = p = Y((P = v += ni(qe())))), w++;
            break;
          case 45:
            m === 45 && Y(v) == 2 && (l = 0);
        }
    }
  return i;
}
function wr(e, t, r, n, o, i, a, s, c, u, f) {
  for (var p = o - 1, d = o === 0 ? i : [''], h = Yt(d), m = 0, l = 0, g = 0; m < n; ++m)
    for (var y = 0, w = Oe(e, p + 1, (p = Uo((l = a[m])))), P = e; y < h; ++y)
      (P = pn(l > 0 ? d[y] + ' ' + w : S(w, /&\f/g, d[y]))) && (c[g++] = P);
  return lt(e, t, r, o === 0 ? Vt : s, c, u, f);
}
function ii(e, t, r) {
  return lt(e, t, r, fn, ct(Zo()), Oe(e, 2, -2), 0);
}
function _r(e, t, r, n) {
  return lt(e, t, r, Xt, Oe(e, 0, n), Oe(e, n + 1, -1), n);
}
function me(e, t) {
  for (var r = '', n = Yt(e), o = 0; o < n; o++) r += t(e[o], o, e, t) || '';
  return r;
}
function ai(e, t, r, n) {
  switch (e.type) {
    case Ho:
      if (e.children.length) break;
    case Go:
    case Xt:
      return (e.return = e.return || e.value);
    case fn:
      return '';
    case dn:
      return (e.return = e.value + '{' + me(e.children, n) + '}');
    case Vt:
      e.value = e.props.join(',');
  }
  return Y((r = me(e.children, n))) ? (e.return = e.value + '{' + r + '}') : '';
}
function si(e) {
  var t = Yt(e);
  return function (r, n, o, i) {
    for (var a = '', s = 0; s < t; s++) a += e[s](r, n, o, i) || '';
    return a;
  };
}
function ci(e) {
  return function (t) {
    t.root || ((t = t.return) && e(t));
  };
}
var ui = function (t, r, n) {
    for (var o = 0, i = 0; (o = i), (i = Q()), o === 38 && i === 12 && (r[n] = 1), !Pe(i); ) D();
    return je(t, N);
  },
  li = function (t, r) {
    var n = -1,
      o = 44;
    do
      switch (Pe(o)) {
        case 0:
          o === 38 && Q() === 12 && (r[n] = 1), (t[n] += ui(N - 1, r, n));
          break;
        case 2:
          t[n] += Ke(o);
          break;
        case 4:
          if (o === 44) {
            (t[++n] = Q() === 58 ? '&\f' : ''), (r[n] = t[n].length);
            break;
          }
        default:
          t[n] += ct(o);
      }
    while ((o = D()));
    return t;
  },
  fi = function (t, r) {
    return yn(li(hn(t), r));
  },
  $r = new WeakMap(),
  di = function (t) {
    if (!(t.type !== 'rule' || !t.parent || t.length < 1)) {
      for (
        var r = t.value, n = t.parent, o = t.column === n.column && t.line === n.line;
        n.type !== 'rule';

      )
        if (((n = n.parent), !n)) return;
      if (!(t.props.length === 1 && r.charCodeAt(0) !== 58 && !$r.get(n)) && !o) {
        $r.set(t, !0);
        for (var i = [], a = fi(r, i), s = n.props, c = 0, u = 0; c < a.length; c++)
          for (var f = 0; f < s.length; f++, u++)
            t.props[u] = i[c] ? a[c].replace(/&\f/g, s[f]) : s[f] + ' ' + a[c];
      }
    }
  },
  pi = function (t) {
    if (t.type === 'decl') {
      var r = t.value;
      r.charCodeAt(0) === 108 && r.charCodeAt(2) === 98 && ((t.return = ''), (t.value = ''));
    }
  };
function gn(e, t) {
  switch (Xo(e, t)) {
    case 5103:
      return x + 'print-' + e + e;
    case 5737:
    case 4201:
    case 3177:
    case 3433:
    case 1641:
    case 4457:
    case 2921:
    case 5572:
    case 6356:
    case 5844:
    case 3191:
    case 6645:
    case 3005:
    case 6391:
    case 5879:
    case 5623:
    case 6135:
    case 4599:
    case 4855:
    case 4215:
    case 6389:
    case 5109:
    case 5365:
    case 5621:
    case 3829:
      return x + e + e;
    case 5349:
    case 4246:
    case 4810:
    case 6968:
    case 2756:
      return x + e + Ve + e + z + e + e;
    case 6828:
    case 4268:
      return x + e + z + e + e;
    case 6165:
      return x + e + z + 'flex-' + e + e;
    case 5187:
      return x + e + S(e, /(\w+).+(:[^]+)/, x + 'box-$1$2' + z + 'flex-$1$2') + e;
    case 5443:
      return x + e + z + 'flex-item-' + S(e, /flex-|-self/, '') + e;
    case 4675:
      return x + e + z + 'flex-line-pack' + S(e, /align-content|flex-|-self/, '') + e;
    case 5548:
      return x + e + z + S(e, 'shrink', 'negative') + e;
    case 5292:
      return x + e + z + S(e, 'basis', 'preferred-size') + e;
    case 6060:
      return x + 'box-' + S(e, '-grow', '') + x + e + z + S(e, 'grow', 'positive') + e;
    case 4554:
      return x + S(e, /([^-])(transform)/g, '$1' + x + '$2') + e;
    case 6187:
      return S(S(S(e, /(zoom-|grab)/, x + '$1'), /(image-set)/, x + '$1'), e, '') + e;
    case 5495:
    case 3959:
      return S(e, /(image-set\([^]*)/, x + '$1$`$1');
    case 4968:
      return (
        S(
          S(e, /(.+:)(flex-)?(.*)/, x + 'box-pack:$3' + z + 'flex-pack:$3'),
          /s.+-b[^;]+/,
          'justify',
        ) +
        x +
        e +
        e
      );
    case 4095:
    case 3583:
    case 4068:
    case 2532:
      return S(e, /(.+)-inline(.+)/, x + '$1$2') + e;
    case 8116:
    case 7059:
    case 5753:
    case 5535:
    case 5445:
    case 5701:
    case 4933:
    case 4677:
    case 5533:
    case 5789:
    case 5021:
    case 4765:
      if (Y(e) - 1 - t > 6)
        switch (F(e, t + 1)) {
          case 109:
            if (F(e, t + 4) !== 45) break;
          case 102:
            return (
              S(
                e,
                /(.+:)(.+)-([^]+)/,
                '$1' + x + '$2-$3$1' + Ve + (F(e, t + 3) == 108 ? '$3' : '$2-$3'),
              ) + e
            );
          case 115:
            return ~Lt(e, 'stretch') ? gn(S(e, 'stretch', 'fill-available'), t) + e : e;
        }
      break;
    case 4949:
      if (F(e, t + 1) !== 115) break;
    case 6444:
      switch (F(e, Y(e) - 3 - (~Lt(e, '!important') && 10))) {
        case 107:
          return S(e, ':', ':' + x) + e;
        case 101:
          return (
            S(
              e,
              /(.+:)([^;!]+)(;|!.+)?/,
              '$1' +
                x +
                (F(e, 14) === 45 ? 'inline-' : '') +
                'box$3$1' +
                x +
                '$2$3$1' +
                z +
                '$2box$3',
            ) + e
          );
      }
      break;
    case 5936:
      switch (F(e, t + 11)) {
        case 114:
          return x + e + z + S(e, /[svh]\w+-[tblr]{2}/, 'tb') + e;
        case 108:
          return x + e + z + S(e, /[svh]\w+-[tblr]{2}/, 'tb-rl') + e;
        case 45:
          return x + e + z + S(e, /[svh]\w+-[tblr]{2}/, 'lr') + e;
      }
      return x + e + z + e + e;
  }
  return e;
}
var mi = function (t, r, n, o) {
    if (t.length > -1 && !t.return)
      switch (t.type) {
        case Xt:
          t.return = gn(t.value, t.length);
          break;
        case dn:
          return me([_e(t, { value: S(t.value, '@', '@' + x) })], o);
        case Vt:
          if (t.length)
            return Jo(t.props, function (i) {
              switch (Yo(i, /(::plac\w+|:read-\w+)/)) {
                case ':read-only':
                case ':read-write':
                  return me([_e(t, { props: [S(i, /:(read-\w+)/, ':' + Ve + '$1')] })], o);
                case '::placeholder':
                  return me(
                    [
                      _e(t, { props: [S(i, /:(plac\w+)/, ':' + x + 'input-$1')] }),
                      _e(t, { props: [S(i, /:(plac\w+)/, ':' + Ve + '$1')] }),
                      _e(t, { props: [S(i, /:(plac\w+)/, z + 'input-$1')] }),
                    ],
                    o,
                  );
              }
              return '';
            });
      }
  },
  hi = [mi],
  bn = function (t) {
    var r = t.key;
    if (r === 'css') {
      var n = document.querySelectorAll('style[data-emotion]:not([data-s])');
      Array.prototype.forEach.call(n, function (l) {
        var g = l.getAttribute('data-emotion');
        g.indexOf(' ') !== -1 && (document.head.appendChild(l), l.setAttribute('data-s', ''));
      });
    }
    var o = t.stylisPlugins || hi,
      i = {},
      a,
      s = [];
    (a = t.container || document.head),
      Array.prototype.forEach.call(
        document.querySelectorAll('style[data-emotion^="' + r + ' "]'),
        function (l) {
          for (var g = l.getAttribute('data-emotion').split(' '), y = 1; y < g.length; y++)
            i[g[y]] = !0;
          s.push(l);
        },
      );
    var c,
      u = [di, pi];
    {
      var f,
        p = [
          ai,
          ci(function (l) {
            f.insert(l);
          }),
        ],
        d = si(u.concat(o, p)),
        h = function (g) {
          return me(oi(g), d);
        };
      c = function (g, y, w, P) {
        (f = w), h(g ? g + '{' + y.styles + '}' : y.styles), P && (m.inserted[y.name] = !0);
      };
    }
    var m = {
      key: r,
      sheet: new Ko({
        key: r,
        container: a,
        nonce: t.nonce,
        speedy: t.speedy,
        prepend: t.prepend,
        insertionPoint: t.insertionPoint,
      }),
      nonce: t.nonce,
      inserted: i,
      registered: {},
      insert: c,
    };
    return m.sheet.hydrate(s), m;
  },
  vn = { exports: {} },
  $ = {};
/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var I = typeof Symbol == 'function' && Symbol.for,
  Jt = I ? Symbol.for('react.element') : 60103,
  Zt = I ? Symbol.for('react.portal') : 60106,
  ft = I ? Symbol.for('react.fragment') : 60107,
  dt = I ? Symbol.for('react.strict_mode') : 60108,
  pt = I ? Symbol.for('react.profiler') : 60114,
  mt = I ? Symbol.for('react.provider') : 60109,
  ht = I ? Symbol.for('react.context') : 60110,
  Qt = I ? Symbol.for('react.async_mode') : 60111,
  yt = I ? Symbol.for('react.concurrent_mode') : 60111,
  gt = I ? Symbol.for('react.forward_ref') : 60112,
  bt = I ? Symbol.for('react.suspense') : 60113,
  yi = I ? Symbol.for('react.suspense_list') : 60120,
  vt = I ? Symbol.for('react.memo') : 60115,
  xt = I ? Symbol.for('react.lazy') : 60116,
  gi = I ? Symbol.for('react.block') : 60121,
  bi = I ? Symbol.for('react.fundamental') : 60117,
  vi = I ? Symbol.for('react.responder') : 60118,
  xi = I ? Symbol.for('react.scope') : 60119;
function W(e) {
  if (typeof e == 'object' && e !== null) {
    var t = e.$$typeof;
    switch (t) {
      case Jt:
        switch (((e = e.type), e)) {
          case Qt:
          case yt:
          case ft:
          case pt:
          case dt:
          case bt:
            return e;
          default:
            switch (((e = e && e.$$typeof), e)) {
              case ht:
              case gt:
              case xt:
              case vt:
              case mt:
                return e;
              default:
                return t;
            }
        }
      case Zt:
        return t;
    }
  }
}
function xn(e) {
  return W(e) === yt;
}
$.AsyncMode = Qt;
$.ConcurrentMode = yt;
$.ContextConsumer = ht;
$.ContextProvider = mt;
$.Element = Jt;
$.ForwardRef = gt;
$.Fragment = ft;
$.Lazy = xt;
$.Memo = vt;
$.Portal = Zt;
$.Profiler = pt;
$.StrictMode = dt;
$.Suspense = bt;
$.isAsyncMode = function (e) {
  return xn(e) || W(e) === Qt;
};
$.isConcurrentMode = xn;
$.isContextConsumer = function (e) {
  return W(e) === ht;
};
$.isContextProvider = function (e) {
  return W(e) === mt;
};
$.isElement = function (e) {
  return typeof e == 'object' && e !== null && e.$$typeof === Jt;
};
$.isForwardRef = function (e) {
  return W(e) === gt;
};
$.isFragment = function (e) {
  return W(e) === ft;
};
$.isLazy = function (e) {
  return W(e) === xt;
};
$.isMemo = function (e) {
  return W(e) === vt;
};
$.isPortal = function (e) {
  return W(e) === Zt;
};
$.isProfiler = function (e) {
  return W(e) === pt;
};
$.isStrictMode = function (e) {
  return W(e) === dt;
};
$.isSuspense = function (e) {
  return W(e) === bt;
};
$.isValidElementType = function (e) {
  return (
    typeof e == 'string' ||
    typeof e == 'function' ||
    e === ft ||
    e === yt ||
    e === pt ||
    e === dt ||
    e === bt ||
    e === yi ||
    (typeof e == 'object' &&
      e !== null &&
      (e.$$typeof === xt ||
        e.$$typeof === vt ||
        e.$$typeof === mt ||
        e.$$typeof === ht ||
        e.$$typeof === gt ||
        e.$$typeof === bi ||
        e.$$typeof === vi ||
        e.$$typeof === xi ||
        e.$$typeof === gi))
  );
};
$.typeOf = W;
vn.exports = $;
var Si = vn.exports,
  Sn = Si,
  wi = { $$typeof: !0, render: !0, defaultProps: !0, displayName: !0, propTypes: !0 },
  _i = { $$typeof: !0, compare: !0, defaultProps: !0, displayName: !0, propTypes: !0, type: !0 },
  wn = {};
wn[Sn.ForwardRef] = wi;
wn[Sn.Memo] = _i;
var $i = !0;
function ki(e, t, r) {
  var n = '';
  return (
    r.split(' ').forEach(function (o) {
      e[o] !== void 0 ? t.push(e[o] + ';') : (n += o + ' ');
    }),
    n
  );
}
var _n = function (t, r, n) {
    var o = t.key + '-' + r.name;
    (n === !1 || $i === !1) && t.registered[o] === void 0 && (t.registered[o] = r.styles);
  },
  $n = function (t, r, n) {
    _n(t, r, n);
    var o = t.key + '-' + r.name;
    if (t.inserted[r.name] === void 0) {
      var i = r;
      do t.insert(r === i ? '.' + o : '', i, t.sheet, !0), (i = i.next);
      while (i !== void 0);
    }
  };
function Ci(e) {
  for (var t = 0, r, n = 0, o = e.length; o >= 4; ++n, o -= 4)
    (r =
      (e.charCodeAt(n) & 255) |
      ((e.charCodeAt(++n) & 255) << 8) |
      ((e.charCodeAt(++n) & 255) << 16) |
      ((e.charCodeAt(++n) & 255) << 24)),
      (r = (r & 65535) * 1540483477 + (((r >>> 16) * 59797) << 16)),
      (r ^= r >>> 24),
      (t =
        ((r & 65535) * 1540483477 + (((r >>> 16) * 59797) << 16)) ^
        ((t & 65535) * 1540483477 + (((t >>> 16) * 59797) << 16)));
  switch (o) {
    case 3:
      t ^= (e.charCodeAt(n + 2) & 255) << 16;
    case 2:
      t ^= (e.charCodeAt(n + 1) & 255) << 8;
    case 1:
      (t ^= e.charCodeAt(n) & 255), (t = (t & 65535) * 1540483477 + (((t >>> 16) * 59797) << 16));
  }
  return (
    (t ^= t >>> 13),
    (t = (t & 65535) * 1540483477 + (((t >>> 16) * 59797) << 16)),
    ((t ^ (t >>> 15)) >>> 0).toString(36)
  );
}
var Oi = {
    animationIterationCount: 1,
    aspectRatio: 1,
    borderImageOutset: 1,
    borderImageSlice: 1,
    borderImageWidth: 1,
    boxFlex: 1,
    boxFlexGroup: 1,
    boxOrdinalGroup: 1,
    columnCount: 1,
    columns: 1,
    flex: 1,
    flexGrow: 1,
    flexPositive: 1,
    flexShrink: 1,
    flexNegative: 1,
    flexOrder: 1,
    gridRow: 1,
    gridRowEnd: 1,
    gridRowSpan: 1,
    gridRowStart: 1,
    gridColumn: 1,
    gridColumnEnd: 1,
    gridColumnSpan: 1,
    gridColumnStart: 1,
    msGridRow: 1,
    msGridRowSpan: 1,
    msGridColumn: 1,
    msGridColumnSpan: 1,
    fontWeight: 1,
    lineHeight: 1,
    opacity: 1,
    order: 1,
    orphans: 1,
    scale: 1,
    tabSize: 1,
    widows: 1,
    zIndex: 1,
    zoom: 1,
    WebkitLineClamp: 1,
    fillOpacity: 1,
    floodOpacity: 1,
    stopOpacity: 1,
    strokeDasharray: 1,
    strokeDashoffset: 1,
    strokeMiterlimit: 1,
    strokeOpacity: 1,
    strokeWidth: 1,
  },
  Pi = !1,
  Ti = /[A-Z]|^ms/g,
  Ri = /_EMO_([^_]+?)_([^]*?)_EMO_/g,
  kn = function (t) {
    return t.charCodeAt(1) === 45;
  },
  kr = function (t) {
    return t != null && typeof t != 'boolean';
  },
  jt = ln(function (e) {
    return kn(e) ? e : e.replace(Ti, '-$&').toLowerCase();
  }),
  Cr = function (t, r) {
    switch (t) {
      case 'animation':
      case 'animationName':
        if (typeof r == 'string')
          return r.replace(Ri, function (n, o, i) {
            return (J = { name: o, styles: i, next: J }), o;
          });
    }
    return Oi[t] !== 1 && !kn(t) && typeof r == 'number' && r !== 0 ? r + 'px' : r;
  },
  Ai =
    'Component selectors can only be used in conjunction with @emotion/babel-plugin, the swc Emotion plugin, or another Emotion-aware compiler transform.';
function Te(e, t, r) {
  if (r == null) return '';
  var n = r;
  if (n.__emotion_styles !== void 0) return n;
  switch (typeof r) {
    case 'boolean':
      return '';
    case 'object': {
      var o = r;
      if (o.anim === 1) return (J = { name: o.name, styles: o.styles, next: J }), o.name;
      var i = r;
      if (i.styles !== void 0) {
        var a = i.next;
        if (a !== void 0)
          for (; a !== void 0; ) (J = { name: a.name, styles: a.styles, next: J }), (a = a.next);
        var s = i.styles + ';';
        return s;
      }
      return Ei(e, t, r);
    }
    case 'function': {
      if (e !== void 0) {
        var c = J,
          u = r(e);
        return (J = c), Te(e, t, u);
      }
      break;
    }
  }
  var f = r;
  if (t == null) return f;
  var p = t[f];
  return p !== void 0 ? p : f;
}
function Ei(e, t, r) {
  var n = '';
  if (Array.isArray(r)) for (var o = 0; o < r.length; o++) n += Te(e, t, r[o]) + ';';
  else
    for (var i in r) {
      var a = r[i];
      if (typeof a != 'object') {
        var s = a;
        t != null && t[s] !== void 0
          ? (n += i + '{' + t[s] + '}')
          : kr(s) && (n += jt(i) + ':' + Cr(i, s) + ';');
      } else {
        if (i === 'NO_COMPONENT_SELECTOR' && Pi) throw new Error(Ai);
        if (Array.isArray(a) && typeof a[0] == 'string' && (t == null || t[a[0]] === void 0))
          for (var c = 0; c < a.length; c++) kr(a[c]) && (n += jt(i) + ':' + Cr(i, a[c]) + ';');
        else {
          var u = Te(e, t, a);
          switch (i) {
            case 'animation':
            case 'animationName': {
              n += jt(i) + ':' + u + ';';
              break;
            }
            default:
              n += i + '{' + u + '}';
          }
        }
      }
    }
  return n;
}
var Or = /label:\s*([^\s;\n{]+)\s*(;|$)/g,
  J;
function er(e, t, r) {
  if (e.length === 1 && typeof e[0] == 'object' && e[0] !== null && e[0].styles !== void 0)
    return e[0];
  var n = !0,
    o = '';
  J = void 0;
  var i = e[0];
  if (i == null || i.raw === void 0) (n = !1), (o += Te(r, t, i));
  else {
    var a = i;
    o += a[0];
  }
  for (var s = 1; s < e.length; s++)
    if (((o += Te(r, t, e[s])), n)) {
      var c = i;
      o += c[s];
    }
  Or.lastIndex = 0;
  for (var u = '', f; (f = Or.exec(o)) !== null; ) u += '-' + f[1];
  var p = Ci(o) + u;
  return { name: p, styles: o, next: J };
}
var ji = function (t) {
    return t();
  },
  Cn = It.useInsertionEffect ? It.useInsertionEffect : !1,
  Mi = Cn || ji,
  Pr = Cn || b.useLayoutEffect,
  On = b.createContext(typeof HTMLElement < 'u' ? bn({ key: 'css' }) : null),
  Ii = On.Provider,
  Pn = function (t) {
    return b.forwardRef(function (r, n) {
      var o = b.useContext(On);
      return t(r, o, n);
    });
  },
  tr = b.createContext({});
un();
var Fi = Pn(function (e, t) {
  var r = e.styles,
    n = er([r], void 0, b.useContext(tr)),
    o = b.useRef();
  return (
    Pr(
      function () {
        var i = t.key + '-global',
          a = new t.sheet.constructor({
            key: i,
            nonce: t.sheet.nonce,
            container: t.sheet.container,
            speedy: t.sheet.isSpeedy,
          }),
          s = !1,
          c = document.querySelector('style[data-emotion="' + i + ' ' + n.name + '"]');
        return (
          t.sheet.tags.length && (a.before = t.sheet.tags[0]),
          c !== null && ((s = !0), c.setAttribute('data-emotion', i), a.hydrate([c])),
          (o.current = [a, s]),
          function () {
            a.flush();
          }
        );
      },
      [t],
    ),
    Pr(
      function () {
        var i = o.current,
          a = i[0],
          s = i[1];
        if (s) {
          i[1] = !1;
          return;
        }
        if ((n.next !== void 0 && $n(t, n.next, !0), a.tags.length)) {
          var c = a.tags[a.tags.length - 1].nextElementSibling;
          (a.before = c), a.flush();
        }
        t.insert('', n, a, !1);
      },
      [t, n.name],
    ),
    null
  );
});
function Tn() {
  for (var e = arguments.length, t = new Array(e), r = 0; r < e; r++) t[r] = arguments[r];
  return er(t);
}
var zi = function () {
    var t = Tn.apply(void 0, arguments),
      r = 'animation-' + t.name;
    return {
      name: r,
      styles: '@keyframes ' + r + '{' + t.styles + '}',
      anim: 1,
      toString: function () {
        return '_EMO_' + this.name + '_' + this.styles + '_EMO_';
      },
    };
  },
  Li = Bo,
  Ni = function (t) {
    return t !== 'theme';
  },
  Tr = function (t) {
    return typeof t == 'string' && t.charCodeAt(0) > 96 ? Li : Ni;
  },
  Rr = function (t, r, n) {
    var o;
    if (r) {
      var i = r.shouldForwardProp;
      o =
        t.__emotion_forwardProp && i
          ? function (a) {
              return t.__emotion_forwardProp(a) && i(a);
            }
          : i;
    }
    return typeof o != 'function' && n && (o = t.__emotion_forwardProp), o;
  },
  Bi = !1,
  Di = function (t) {
    var r = t.cache,
      n = t.serialized,
      o = t.isStringTag;
    return (
      _n(r, n, o),
      Mi(function () {
        return $n(r, n, o);
      }),
      null
    );
  },
  Wi = function e(t, r) {
    var n = t.__emotion_real === t,
      o = (n && t.__emotion_base) || t,
      i,
      a;
    r !== void 0 && ((i = r.label), (a = r.target));
    var s = Rr(t, r, n),
      c = s || Tr(o),
      u = !c('as');
    return function () {
      var f = arguments,
        p = n && t.__emotion_styles !== void 0 ? t.__emotion_styles.slice(0) : [];
      if ((i !== void 0 && p.push('label:' + i + ';'), f[0] == null || f[0].raw === void 0))
        p.push.apply(p, f);
      else {
        p.push(f[0][0]);
        for (var d = f.length, h = 1; h < d; h++) p.push(f[h], f[0][h]);
      }
      var m = Pn(function (l, g, y) {
        var w = (u && l.as) || o,
          P = '',
          q = [],
          k = l;
        if (l.theme == null) {
          k = {};
          for (var T in l) k[T] = l[T];
          k.theme = b.useContext(tr);
        }
        typeof l.className == 'string'
          ? (P = ki(g.registered, q, l.className))
          : l.className != null && (P = l.className + ' ');
        var v = er(p.concat(q), g.registered, k);
        (P += g.key + '-' + v.name), a !== void 0 && (P += ' ' + a);
        var ae = u && s === void 0 ? Tr(w) : c,
          se = {};
        for (var ce in l) (u && ce === 'as') || (ae(ce) && (se[ce] = l[ce]));
        return (
          (se.className = P),
          y && (se.ref = y),
          b.createElement(
            b.Fragment,
            null,
            b.createElement(Di, { cache: g, serialized: v, isStringTag: typeof w == 'string' }),
            b.createElement(w, se),
          )
        );
      });
      return (
        (m.displayName =
          i !== void 0
            ? i
            : 'Styled(' +
              (typeof o == 'string' ? o : o.displayName || o.name || 'Component') +
              ')'),
        (m.defaultProps = t.defaultProps),
        (m.__emotion_real = m),
        (m.__emotion_base = o),
        (m.__emotion_styles = p),
        (m.__emotion_forwardProp = s),
        Object.defineProperty(m, 'toString', {
          value: function () {
            return a === void 0 && Bi ? 'NO_COMPONENT_SELECTOR' : '.' + a;
          },
        }),
        (m.withComponent = function (l, g) {
          return e(l, C({}, r, g, { shouldForwardProp: Rr(m, g, !0) })).apply(void 0, p);
        }),
        m
      );
    };
  },
  qi = [
    'a',
    'abbr',
    'address',
    'area',
    'article',
    'aside',
    'audio',
    'b',
    'base',
    'bdi',
    'bdo',
    'big',
    'blockquote',
    'body',
    'br',
    'button',
    'canvas',
    'caption',
    'cite',
    'code',
    'col',
    'colgroup',
    'data',
    'datalist',
    'dd',
    'del',
    'details',
    'dfn',
    'dialog',
    'div',
    'dl',
    'dt',
    'em',
    'embed',
    'fieldset',
    'figcaption',
    'figure',
    'footer',
    'form',
    'h1',
    'h2',
    'h3',
    'h4',
    'h5',
    'h6',
    'head',
    'header',
    'hgroup',
    'hr',
    'html',
    'i',
    'iframe',
    'img',
    'input',
    'ins',
    'kbd',
    'keygen',
    'label',
    'legend',
    'li',
    'link',
    'main',
    'map',
    'mark',
    'marquee',
    'menu',
    'menuitem',
    'meta',
    'meter',
    'nav',
    'noscript',
    'object',
    'ol',
    'optgroup',
    'option',
    'output',
    'p',
    'param',
    'picture',
    'pre',
    'progress',
    'q',
    'rp',
    'rt',
    'ruby',
    's',
    'samp',
    'script',
    'section',
    'select',
    'small',
    'source',
    'span',
    'strong',
    'style',
    'sub',
    'summary',
    'sup',
    'table',
    'tbody',
    'td',
    'textarea',
    'tfoot',
    'th',
    'thead',
    'time',
    'title',
    'tr',
    'track',
    'u',
    'ul',
    'var',
    'video',
    'wbr',
    'circle',
    'clipPath',
    'defs',
    'ellipse',
    'foreignObject',
    'g',
    'image',
    'line',
    'linearGradient',
    'mask',
    'path',
    'pattern',
    'polygon',
    'polyline',
    'radialGradient',
    'rect',
    'stop',
    'svg',
    'text',
    'tspan',
  ],
  Bt = Wi.bind();
qi.forEach(function (e) {
  Bt[e] = Bt(e);
});
let Dt;
typeof document == 'object' && (Dt = bn({ key: 'css', prepend: !0 }));
function Ki(e) {
  const { injectFirst: t, children: r } = e;
  return t && Dt ? L.jsx(Ii, { value: Dt, children: r }) : r;
}
function Gi(e) {
  return e == null || Object.keys(e).length === 0;
}
function Hi(e) {
  const { styles: t, defaultTheme: r = {} } = e,
    n = typeof t == 'function' ? (o) => t(Gi(o) ? r : o) : t;
  return L.jsx(Fi, { styles: n });
}
function Ui(e, t) {
  return Bt(e, t);
}
const Vi = (e, t) => {
    Array.isArray(e.__emotion_styles) && (e.__emotion_styles = t(e.__emotion_styles));
  },
  Xi = Object.freeze(
    Object.defineProperty(
      {
        __proto__: null,
        GlobalStyles: Hi,
        StyledEngineProvider: Ki,
        ThemeContext: tr,
        css: Tn,
        default: Ui,
        internal_processStyles: Vi,
        keyframes: zi,
      },
      Symbol.toStringTag,
      { value: 'Module' },
    ),
  ),
  Yi = re(Xi),
  Ji = re(Zn),
  Zi = re(io),
  Qi = re(oo),
  ea = ['values', 'unit', 'step'],
  ta = (e) => {
    const t = Object.keys(e).map((r) => ({ key: r, val: e[r] })) || [];
    return t.sort((r, n) => r.val - n.val), t.reduce((r, n) => C({}, r, { [n.key]: n.val }), {});
  };
function Rn(e) {
  const {
      values: t = { xs: 0, sm: 600, md: 900, lg: 1200, xl: 1536 },
      unit: r = 'px',
      step: n = 5,
    } = e,
    o = ie(e, ea),
    i = ta(t),
    a = Object.keys(i);
  function s(d) {
    return `@media (min-width:${typeof t[d] == 'number' ? t[d] : d}${r})`;
  }
  function c(d) {
    return `@media (max-width:${(typeof t[d] == 'number' ? t[d] : d) - n / 100}${r})`;
  }
  function u(d, h) {
    const m = a.indexOf(h);
    return `@media (min-width:${typeof t[d] == 'number' ? t[d] : d}${r}) and (max-width:${(m !== -1 && typeof t[a[m]] == 'number' ? t[a[m]] : h) - n / 100}${r})`;
  }
  function f(d) {
    return a.indexOf(d) + 1 < a.length ? u(d, a[a.indexOf(d) + 1]) : s(d);
  }
  function p(d) {
    const h = a.indexOf(d);
    return h === 0
      ? s(a[1])
      : h === a.length - 1
        ? c(a[h])
        : u(d, a[a.indexOf(d) + 1]).replace('@media', '@media not all and');
  }
  return C({ keys: a, values: i, up: s, down: c, between: u, only: f, not: p, unit: r }, o);
}
const ra = { borderRadius: 4 };
function ke(e, t) {
  return t ? Z(e, t, { clone: !1 }) : e;
}
const rr = { xs: 0, sm: 600, md: 900, lg: 1200, xl: 1536 },
  Ar = { keys: ['xs', 'sm', 'md', 'lg', 'xl'], up: (e) => `@media (min-width:${rr[e]}px)` };
function te(e, t, r) {
  const n = e.theme || {};
  if (Array.isArray(t)) {
    const i = n.breakpoints || Ar;
    return t.reduce((a, s, c) => ((a[i.up(i.keys[c])] = r(t[c])), a), {});
  }
  if (typeof t == 'object') {
    const i = n.breakpoints || Ar;
    return Object.keys(t).reduce((a, s) => {
      if (Object.keys(i.values || rr).indexOf(s) !== -1) {
        const c = i.up(s);
        a[c] = r(t[s], s);
      } else {
        const c = s;
        a[c] = t[c];
      }
      return a;
    }, {});
  }
  return r(t);
}
function na(e = {}) {
  var t;
  return (
    ((t = e.keys) == null
      ? void 0
      : t.reduce((n, o) => {
          const i = e.up(o);
          return (n[i] = {}), n;
        }, {})) || {}
  );
}
function oa(e, t) {
  return e.reduce((r, n) => {
    const o = r[n];
    return (!o || Object.keys(o).length === 0) && delete r[n], r;
  }, t);
}
function St(e, t, r = !0) {
  if (!t || typeof t != 'string') return null;
  if (e && e.vars && r) {
    const n = `vars.${t}`.split('.').reduce((o, i) => (o && o[i] ? o[i] : null), e);
    if (n != null) return n;
  }
  return t.split('.').reduce((n, o) => (n && n[o] != null ? n[o] : null), e);
}
function Xe(e, t, r, n = r) {
  let o;
  return (
    typeof e == 'function' ? (o = e(r)) : Array.isArray(e) ? (o = e[r] || n) : (o = St(e, r) || n),
    t && (o = t(o, n, e)),
    o
  );
}
function E(e) {
  const { prop: t, cssProperty: r = e.prop, themeKey: n, transform: o } = e,
    i = (a) => {
      if (a[t] == null) return null;
      const s = a[t],
        c = a.theme,
        u = St(c, n) || {};
      return te(a, s, (p) => {
        let d = Xe(u, o, p);
        return (
          p === d &&
            typeof p == 'string' &&
            (d = Xe(u, o, `${t}${p === 'default' ? '' : oe(p)}`, p)),
          r === !1 ? d : { [r]: d }
        );
      });
    };
  return (i.propTypes = {}), (i.filterProps = [t]), i;
}
function ia(e) {
  const t = {};
  return (r) => (t[r] === void 0 && (t[r] = e(r)), t[r]);
}
const aa = { m: 'margin', p: 'padding' },
  sa = { t: 'Top', r: 'Right', b: 'Bottom', l: 'Left', x: ['Left', 'Right'], y: ['Top', 'Bottom'] },
  Er = { marginX: 'mx', marginY: 'my', paddingX: 'px', paddingY: 'py' },
  ca = ia((e) => {
    if (e.length > 2)
      if (Er[e]) e = Er[e];
      else return [e];
    const [t, r] = e.split(''),
      n = aa[t],
      o = sa[r] || '';
    return Array.isArray(o) ? o.map((i) => n + i) : [n + o];
  }),
  nr = [
    'm',
    'mt',
    'mr',
    'mb',
    'ml',
    'mx',
    'my',
    'margin',
    'marginTop',
    'marginRight',
    'marginBottom',
    'marginLeft',
    'marginX',
    'marginY',
    'marginInline',
    'marginInlineStart',
    'marginInlineEnd',
    'marginBlock',
    'marginBlockStart',
    'marginBlockEnd',
  ],
  or = [
    'p',
    'pt',
    'pr',
    'pb',
    'pl',
    'px',
    'py',
    'padding',
    'paddingTop',
    'paddingRight',
    'paddingBottom',
    'paddingLeft',
    'paddingX',
    'paddingY',
    'paddingInline',
    'paddingInlineStart',
    'paddingInlineEnd',
    'paddingBlock',
    'paddingBlockStart',
    'paddingBlockEnd',
  ];
[...nr, ...or];
function Me(e, t, r, n) {
  var o;
  const i = (o = St(e, t, !1)) != null ? o : r;
  return typeof i == 'number'
    ? (a) => (typeof a == 'string' ? a : i * a)
    : Array.isArray(i)
      ? (a) => (typeof a == 'string' ? a : i[a])
      : typeof i == 'function'
        ? i
        : () => {};
}
function An(e) {
  return Me(e, 'spacing', 8);
}
function Ie(e, t) {
  if (typeof t == 'string' || t == null) return t;
  const r = Math.abs(t),
    n = e(r);
  return t >= 0 ? n : typeof n == 'number' ? -n : `-${n}`;
}
function ua(e, t) {
  return (r) => e.reduce((n, o) => ((n[o] = Ie(t, r)), n), {});
}
function la(e, t, r, n) {
  if (t.indexOf(r) === -1) return null;
  const o = ca(r),
    i = ua(o, n),
    a = e[r];
  return te(e, a, i);
}
function En(e, t) {
  const r = An(e.theme);
  return Object.keys(e)
    .map((n) => la(e, t, n, r))
    .reduce(ke, {});
}
function R(e) {
  return En(e, nr);
}
R.propTypes = {};
R.filterProps = nr;
function A(e) {
  return En(e, or);
}
A.propTypes = {};
A.filterProps = or;
function fa(e = 8) {
  if (e.mui) return e;
  const t = An({ spacing: e }),
    r = (...n) =>
      (n.length === 0 ? [1] : n)
        .map((i) => {
          const a = t(i);
          return typeof a == 'number' ? `${a}px` : a;
        })
        .join(' ');
  return (r.mui = !0), r;
}
function wt(...e) {
  const t = e.reduce(
      (n, o) => (
        o.filterProps.forEach((i) => {
          n[i] = o;
        }),
        n
      ),
      {},
    ),
    r = (n) => Object.keys(n).reduce((o, i) => (t[i] ? ke(o, t[i](n)) : o), {});
  return (r.propTypes = {}), (r.filterProps = e.reduce((n, o) => n.concat(o.filterProps), [])), r;
}
function G(e) {
  return typeof e != 'number' ? e : `${e}px solid`;
}
function V(e, t) {
  return E({ prop: e, themeKey: 'borders', transform: t });
}
const da = V('border', G),
  pa = V('borderTop', G),
  ma = V('borderRight', G),
  ha = V('borderBottom', G),
  ya = V('borderLeft', G),
  ga = V('borderColor'),
  ba = V('borderTopColor'),
  va = V('borderRightColor'),
  xa = V('borderBottomColor'),
  Sa = V('borderLeftColor'),
  wa = V('outline', G),
  _a = V('outlineColor'),
  _t = (e) => {
    if (e.borderRadius !== void 0 && e.borderRadius !== null) {
      const t = Me(e.theme, 'shape.borderRadius', 4),
        r = (n) => ({ borderRadius: Ie(t, n) });
      return te(e, e.borderRadius, r);
    }
    return null;
  };
_t.propTypes = {};
_t.filterProps = ['borderRadius'];
wt(da, pa, ma, ha, ya, ga, ba, va, xa, Sa, _t, wa, _a);
const $t = (e) => {
  if (e.gap !== void 0 && e.gap !== null) {
    const t = Me(e.theme, 'spacing', 8),
      r = (n) => ({ gap: Ie(t, n) });
    return te(e, e.gap, r);
  }
  return null;
};
$t.propTypes = {};
$t.filterProps = ['gap'];
const kt = (e) => {
  if (e.columnGap !== void 0 && e.columnGap !== null) {
    const t = Me(e.theme, 'spacing', 8),
      r = (n) => ({ columnGap: Ie(t, n) });
    return te(e, e.columnGap, r);
  }
  return null;
};
kt.propTypes = {};
kt.filterProps = ['columnGap'];
const Ct = (e) => {
  if (e.rowGap !== void 0 && e.rowGap !== null) {
    const t = Me(e.theme, 'spacing', 8),
      r = (n) => ({ rowGap: Ie(t, n) });
    return te(e, e.rowGap, r);
  }
  return null;
};
Ct.propTypes = {};
Ct.filterProps = ['rowGap'];
const $a = E({ prop: 'gridColumn' }),
  ka = E({ prop: 'gridRow' }),
  Ca = E({ prop: 'gridAutoFlow' }),
  Oa = E({ prop: 'gridAutoColumns' }),
  Pa = E({ prop: 'gridAutoRows' }),
  Ta = E({ prop: 'gridTemplateColumns' }),
  Ra = E({ prop: 'gridTemplateRows' }),
  Aa = E({ prop: 'gridTemplateAreas' }),
  Ea = E({ prop: 'gridArea' });
wt($t, kt, Ct, $a, ka, Ca, Oa, Pa, Ta, Ra, Aa, Ea);
function he(e, t) {
  return t === 'grey' ? t : e;
}
const ja = E({ prop: 'color', themeKey: 'palette', transform: he }),
  Ma = E({ prop: 'bgcolor', cssProperty: 'backgroundColor', themeKey: 'palette', transform: he }),
  Ia = E({ prop: 'backgroundColor', themeKey: 'palette', transform: he });
wt(ja, Ma, Ia);
function B(e) {
  return e <= 1 && e !== 0 ? `${e * 100}%` : e;
}
const Fa = E({ prop: 'width', transform: B }),
  ir = (e) => {
    if (e.maxWidth !== void 0 && e.maxWidth !== null) {
      const t = (r) => {
        var n, o;
        const i =
          ((n = e.theme) == null || (n = n.breakpoints) == null || (n = n.values) == null
            ? void 0
            : n[r]) || rr[r];
        return i
          ? ((o = e.theme) == null || (o = o.breakpoints) == null ? void 0 : o.unit) !== 'px'
            ? { maxWidth: `${i}${e.theme.breakpoints.unit}` }
            : { maxWidth: i }
          : { maxWidth: B(r) };
      };
      return te(e, e.maxWidth, t);
    }
    return null;
  };
ir.filterProps = ['maxWidth'];
const za = E({ prop: 'minWidth', transform: B }),
  La = E({ prop: 'height', transform: B }),
  Na = E({ prop: 'maxHeight', transform: B }),
  Ba = E({ prop: 'minHeight', transform: B });
E({ prop: 'size', cssProperty: 'width', transform: B });
E({ prop: 'size', cssProperty: 'height', transform: B });
const Da = E({ prop: 'boxSizing' });
wt(Fa, ir, za, La, Na, Ba, Da);
const Wa = {
    border: { themeKey: 'borders', transform: G },
    borderTop: { themeKey: 'borders', transform: G },
    borderRight: { themeKey: 'borders', transform: G },
    borderBottom: { themeKey: 'borders', transform: G },
    borderLeft: { themeKey: 'borders', transform: G },
    borderColor: { themeKey: 'palette' },
    borderTopColor: { themeKey: 'palette' },
    borderRightColor: { themeKey: 'palette' },
    borderBottomColor: { themeKey: 'palette' },
    borderLeftColor: { themeKey: 'palette' },
    outline: { themeKey: 'borders', transform: G },
    outlineColor: { themeKey: 'palette' },
    borderRadius: { themeKey: 'shape.borderRadius', style: _t },
    color: { themeKey: 'palette', transform: he },
    bgcolor: { themeKey: 'palette', cssProperty: 'backgroundColor', transform: he },
    backgroundColor: { themeKey: 'palette', transform: he },
    p: { style: A },
    pt: { style: A },
    pr: { style: A },
    pb: { style: A },
    pl: { style: A },
    px: { style: A },
    py: { style: A },
    padding: { style: A },
    paddingTop: { style: A },
    paddingRight: { style: A },
    paddingBottom: { style: A },
    paddingLeft: { style: A },
    paddingX: { style: A },
    paddingY: { style: A },
    paddingInline: { style: A },
    paddingInlineStart: { style: A },
    paddingInlineEnd: { style: A },
    paddingBlock: { style: A },
    paddingBlockStart: { style: A },
    paddingBlockEnd: { style: A },
    m: { style: R },
    mt: { style: R },
    mr: { style: R },
    mb: { style: R },
    ml: { style: R },
    mx: { style: R },
    my: { style: R },
    margin: { style: R },
    marginTop: { style: R },
    marginRight: { style: R },
    marginBottom: { style: R },
    marginLeft: { style: R },
    marginX: { style: R },
    marginY: { style: R },
    marginInline: { style: R },
    marginInlineStart: { style: R },
    marginInlineEnd: { style: R },
    marginBlock: { style: R },
    marginBlockStart: { style: R },
    marginBlockEnd: { style: R },
    displayPrint: { cssProperty: !1, transform: (e) => ({ '@media print': { display: e } }) },
    display: {},
    overflow: {},
    textOverflow: {},
    visibility: {},
    whiteSpace: {},
    flexBasis: {},
    flexDirection: {},
    flexWrap: {},
    justifyContent: {},
    alignItems: {},
    alignContent: {},
    order: {},
    flex: {},
    flexGrow: {},
    flexShrink: {},
    alignSelf: {},
    justifyItems: {},
    justifySelf: {},
    gap: { style: $t },
    rowGap: { style: Ct },
    columnGap: { style: kt },
    gridColumn: {},
    gridRow: {},
    gridAutoFlow: {},
    gridAutoColumns: {},
    gridAutoRows: {},
    gridTemplateColumns: {},
    gridTemplateRows: {},
    gridTemplateAreas: {},
    gridArea: {},
    position: {},
    zIndex: { themeKey: 'zIndex' },
    top: {},
    right: {},
    bottom: {},
    left: {},
    boxShadow: { themeKey: 'shadows' },
    width: { transform: B },
    maxWidth: { style: ir },
    minWidth: { transform: B },
    height: { transform: B },
    maxHeight: { transform: B },
    minHeight: { transform: B },
    boxSizing: {},
    fontFamily: { themeKey: 'typography' },
    fontSize: { themeKey: 'typography' },
    fontStyle: { themeKey: 'typography' },
    fontWeight: { themeKey: 'typography' },
    letterSpacing: {},
    textTransform: {},
    lineHeight: {},
    textAlign: {},
    typography: { cssProperty: !1, themeKey: 'typography' },
  },
  Fe = Wa;
function qa(...e) {
  const t = e.reduce((n, o) => n.concat(Object.keys(o)), []),
    r = new Set(t);
  return e.every((n) => r.size === Object.keys(n).length);
}
function Ka(e, t) {
  return typeof e == 'function' ? e(t) : e;
}
function jn() {
  function e(r, n, o, i) {
    const a = { [r]: n, theme: o },
      s = i[r];
    if (!s) return { [r]: n };
    const { cssProperty: c = r, themeKey: u, transform: f, style: p } = s;
    if (n == null) return null;
    if (u === 'typography' && n === 'inherit') return { [r]: n };
    const d = St(o, u) || {};
    return p
      ? p(a)
      : te(a, n, (m) => {
          let l = Xe(d, f, m);
          return (
            m === l &&
              typeof m == 'string' &&
              (l = Xe(d, f, `${r}${m === 'default' ? '' : oe(m)}`, m)),
            c === !1 ? l : { [c]: l }
          );
        });
  }
  function t(r) {
    var n;
    const { sx: o, theme: i = {} } = r || {};
    if (!o) return null;
    const a = (n = i.unstable_sxConfig) != null ? n : Fe;
    function s(c) {
      let u = c;
      if (typeof c == 'function') u = c(i);
      else if (typeof c != 'object') return c;
      if (!u) return null;
      const f = na(i.breakpoints),
        p = Object.keys(f);
      let d = f;
      return (
        Object.keys(u).forEach((h) => {
          const m = Ka(u[h], i);
          if (m != null)
            if (typeof m == 'object')
              if (a[h]) d = ke(d, e(h, m, i, a));
              else {
                const l = te({ theme: i }, m, (g) => ({ [h]: g }));
                qa(l, m) ? (d[h] = t({ sx: m, theme: i })) : (d = ke(d, l));
              }
            else d = ke(d, e(h, m, i, a));
        }),
        oa(p, d)
      );
    }
    return Array.isArray(o) ? o.map(s) : s(o);
  }
  return t;
}
const Mn = jn();
Mn.filterProps = ['sx'];
const ar = Mn;
function In(e, t) {
  const r = this;
  return r.vars && typeof r.getColorSchemeSelector == 'function'
    ? { [r.getColorSchemeSelector(e).replace(/(\[[^\]]+\])/, '*:where($1)')]: t }
    : r.palette.mode === e
      ? t
      : {};
}
const Ga = ['breakpoints', 'palette', 'spacing', 'shape'];
function Fn(e = {}, ...t) {
  const { breakpoints: r = {}, palette: n = {}, spacing: o, shape: i = {} } = e,
    a = ie(e, Ga),
    s = Rn(r),
    c = fa(o);
  let u = Z(
    {
      breakpoints: s,
      direction: 'ltr',
      components: {},
      palette: C({ mode: 'light' }, n),
      spacing: c,
      shape: C({}, ra, i),
    },
    a,
  );
  return (
    (u.applyStyles = In),
    (u = t.reduce((f, p) => Z(f, p), u)),
    (u.unstable_sxConfig = C({}, Fe, a == null ? void 0 : a.unstable_sxConfig)),
    (u.unstable_sx = function (p) {
      return ar({ sx: p, theme: this });
    }),
    u
  );
}
const Ha = Object.freeze(
    Object.defineProperty(
      { __proto__: null, default: Fn, private_createBreakpoints: Rn, unstable_applyStyles: In },
      Symbol.toStringTag,
      { value: 'Module' },
    ),
  ),
  Ua = re(Ha),
  Va = ['sx'],
  Xa = (e) => {
    var t, r;
    const n = { systemProps: {}, otherProps: {} },
      o = (t = e == null || (r = e.theme) == null ? void 0 : r.unstable_sxConfig) != null ? t : Fe;
    return (
      Object.keys(e).forEach((i) => {
        o[i] ? (n.systemProps[i] = e[i]) : (n.otherProps[i] = e[i]);
      }),
      n
    );
  };
function Ya(e) {
  const { sx: t } = e,
    r = ie(e, Va),
    { systemProps: n, otherProps: o } = Xa(r);
  let i;
  return (
    Array.isArray(t)
      ? (i = [n, ...t])
      : typeof t == 'function'
        ? (i = (...a) => {
            const s = t(...a);
            return ne(s) ? C({}, n, s) : n;
          })
        : (i = C({}, n, t)),
    C({}, o, { sx: i })
  );
}
const Ja = Object.freeze(
    Object.defineProperty(
      {
        __proto__: null,
        default: ar,
        extendSxProp: Ya,
        unstable_createStyleFunctionSx: jn,
        unstable_defaultSxConfig: Fe,
      },
      Symbol.toStringTag,
      { value: 'Module' },
    ),
  ),
  Za = re(Ja);
var ve = ge;
Object.defineProperty(Ee, '__esModule', { value: !0 });
var Qa = (Ee.default = ds);
Ee.shouldForwardProp = He;
Ee.systemDefaultTheme = void 0;
var K = ve(un()),
  Wt = ve(Lo()),
  jr = as(Yi),
  es = Ji;
ve(Zi);
ve(Qi);
var ts = ve(Ua),
  rs = ve(Za);
const ns = ['ownerState'],
  os = ['variants'],
  is = ['name', 'slot', 'skipVariantsResolver', 'skipSx', 'overridesResolver'];
function zn(e) {
  if (typeof WeakMap != 'function') return null;
  var t = new WeakMap(),
    r = new WeakMap();
  return (zn = function (n) {
    return n ? r : t;
  })(e);
}
function as(e, t) {
  if (e && e.__esModule) return e;
  if (e === null || (typeof e != 'object' && typeof e != 'function')) return { default: e };
  var r = zn(t);
  if (r && r.has(e)) return r.get(e);
  var n = { __proto__: null },
    o = Object.defineProperty && Object.getOwnPropertyDescriptor;
  for (var i in e)
    if (i !== 'default' && Object.prototype.hasOwnProperty.call(e, i)) {
      var a = o ? Object.getOwnPropertyDescriptor(e, i) : null;
      a && (a.get || a.set) ? Object.defineProperty(n, i, a) : (n[i] = e[i]);
    }
  return (n.default = e), r && r.set(e, n), n;
}
function ss(e) {
  return Object.keys(e).length === 0;
}
function cs(e) {
  return typeof e == 'string' && e.charCodeAt(0) > 96;
}
function He(e) {
  return e !== 'ownerState' && e !== 'theme' && e !== 'sx' && e !== 'as';
}
const us = (Ee.systemDefaultTheme = (0, ts.default)()),
  ls = (e) => e && e.charAt(0).toLowerCase() + e.slice(1);
function Ne({ defaultTheme: e, theme: t, themeId: r }) {
  return ss(t) ? e : t[r] || t;
}
function fs(e) {
  return e ? (t, r) => r[e] : null;
}
function Ue(e, t) {
  let { ownerState: r } = t,
    n = (0, Wt.default)(t, ns);
  const o = typeof e == 'function' ? e((0, K.default)({ ownerState: r }, n)) : e;
  if (Array.isArray(o)) return o.flatMap((i) => Ue(i, (0, K.default)({ ownerState: r }, n)));
  if (o && typeof o == 'object' && Array.isArray(o.variants)) {
    const { variants: i = [] } = o;
    let s = (0, Wt.default)(o, os);
    return (
      i.forEach((c) => {
        let u = !0;
        typeof c.props == 'function'
          ? (u = c.props((0, K.default)({ ownerState: r }, n, r)))
          : Object.keys(c.props).forEach((f) => {
              (r == null ? void 0 : r[f]) !== c.props[f] && n[f] !== c.props[f] && (u = !1);
            }),
          u &&
            (Array.isArray(s) || (s = [s]),
            s.push(
              typeof c.style == 'function'
                ? c.style((0, K.default)({ ownerState: r }, n, r))
                : c.style,
            ));
      }),
      s
    );
  }
  return o;
}
function ds(e = {}) {
  const {
      themeId: t,
      defaultTheme: r = us,
      rootShouldForwardProp: n = He,
      slotShouldForwardProp: o = He,
    } = e,
    i = (a) =>
      (0, rs.default)(
        (0, K.default)({}, a, {
          theme: Ne((0, K.default)({}, a, { defaultTheme: r, themeId: t })),
        }),
      );
  return (
    (i.__mui_systemSx = !0),
    (a, s = {}) => {
      (0, jr.internal_processStyles)(a, (k) => k.filter((T) => !(T != null && T.__mui_systemSx)));
      const {
          name: c,
          slot: u,
          skipVariantsResolver: f,
          skipSx: p,
          overridesResolver: d = fs(ls(u)),
        } = s,
        h = (0, Wt.default)(s, is),
        m = f !== void 0 ? f : (u && u !== 'Root' && u !== 'root') || !1,
        l = p || !1;
      let g,
        y = He;
      u === 'Root' || u === 'root' ? (y = n) : u ? (y = o) : cs(a) && (y = void 0);
      const w = (0, jr.default)(a, (0, K.default)({ shouldForwardProp: y, label: g }, h)),
        P = (k) =>
          (typeof k == 'function' && k.__emotion_real !== k) || (0, es.isPlainObject)(k)
            ? (T) =>
                Ue(
                  k,
                  (0, K.default)({}, T, {
                    theme: Ne({ theme: T.theme, defaultTheme: r, themeId: t }),
                  }),
                )
            : k,
        q = (k, ...T) => {
          let v = P(k);
          const ae = T ? T.map(P) : [];
          c &&
            d &&
            ae.push((ee) => {
              const X = Ne((0, K.default)({}, ee, { defaultTheme: r, themeId: t }));
              if (!X.components || !X.components[c] || !X.components[c].styleOverrides) return null;
              const Se = X.components[c].styleOverrides,
                ze = {};
              return (
                Object.entries(Se).forEach(([Xn, Yn]) => {
                  ze[Xn] = Ue(Yn, (0, K.default)({}, ee, { theme: X }));
                }),
                d(ee, ze)
              );
            }),
            c &&
              !m &&
              ae.push((ee) => {
                var X;
                const Se = Ne((0, K.default)({}, ee, { defaultTheme: r, themeId: t })),
                  ze =
                    Se == null || (X = Se.components) == null || (X = X[c]) == null
                      ? void 0
                      : X.variants;
                return Ue({ variants: ze }, (0, K.default)({}, ee, { theme: Se }));
              }),
            l || ae.push(i);
          const se = ae.length - T.length;
          if (Array.isArray(k) && se > 0) {
            const ee = new Array(se).fill('');
            (v = [...k, ...ee]), (v.raw = [...k.raw, ...ee]);
          }
          const ce = w(v, ...ae);
          return a.muiName && (ce.muiName = a.muiName), ce;
        };
      return w.withConfig && (q.withConfig = w.withConfig), q;
    }
  );
}
function ps(e, t) {
  return C(
    {
      toolbar: {
        minHeight: 56,
        [e.up('xs')]: { '@media (orientation: landscape)': { minHeight: 48 } },
        [e.up('sm')]: { minHeight: 64 },
      },
    },
    t,
  );
}
var j = {};
const ms = re(Qn),
  hs = re(Eo);
var Ln = ge;
Object.defineProperty(j, '__esModule', { value: !0 });
j.alpha = Wn;
j.blend = Ps;
j.colorChannel = void 0;
var ys = (j.darken = cr);
j.decomposeColor = H;
j.emphasize = qn;
var gs = (j.getContrastRatio = _s);
j.getLuminance = Ye;
j.hexToRgb = Nn;
j.hslToRgb = Dn;
var bs = (j.lighten = ur);
j.private_safeAlpha = $s;
j.private_safeColorChannel = void 0;
j.private_safeDarken = ks;
j.private_safeEmphasize = Os;
j.private_safeLighten = Cs;
j.recomposeColor = xe;
j.rgbToHex = ws;
var Mr = Ln(ms),
  vs = Ln(hs);
function sr(e, t = 0, r = 1) {
  return (0, vs.default)(e, t, r);
}
function Nn(e) {
  e = e.slice(1);
  const t = new RegExp(`.{1,${e.length >= 6 ? 2 : 1}}`, 'g');
  let r = e.match(t);
  return (
    r && r[0].length === 1 && (r = r.map((n) => n + n)),
    r
      ? `rgb${r.length === 4 ? 'a' : ''}(${r.map((n, o) => (o < 3 ? parseInt(n, 16) : Math.round((parseInt(n, 16) / 255) * 1e3) / 1e3)).join(', ')})`
      : ''
  );
}
function xs(e) {
  const t = e.toString(16);
  return t.length === 1 ? `0${t}` : t;
}
function H(e) {
  if (e.type) return e;
  if (e.charAt(0) === '#') return H(Nn(e));
  const t = e.indexOf('('),
    r = e.substring(0, t);
  if (['rgb', 'rgba', 'hsl', 'hsla', 'color'].indexOf(r) === -1)
    throw new Error((0, Mr.default)(9, e));
  let n = e.substring(t + 1, e.length - 1),
    o;
  if (r === 'color') {
    if (
      ((n = n.split(' ')),
      (o = n.shift()),
      n.length === 4 && n[3].charAt(0) === '/' && (n[3] = n[3].slice(1)),
      ['srgb', 'display-p3', 'a98-rgb', 'prophoto-rgb', 'rec-2020'].indexOf(o) === -1)
    )
      throw new Error((0, Mr.default)(10, o));
  } else n = n.split(',');
  return (n = n.map((i) => parseFloat(i))), { type: r, values: n, colorSpace: o };
}
const Bn = (e) => {
  const t = H(e);
  return t.values
    .slice(0, 3)
    .map((r, n) => (t.type.indexOf('hsl') !== -1 && n !== 0 ? `${r}%` : r))
    .join(' ');
};
j.colorChannel = Bn;
const Ss = (e, t) => {
  try {
    return Bn(e);
  } catch {
    return e;
  }
};
j.private_safeColorChannel = Ss;
function xe(e) {
  const { type: t, colorSpace: r } = e;
  let { values: n } = e;
  return (
    t.indexOf('rgb') !== -1
      ? (n = n.map((o, i) => (i < 3 ? parseInt(o, 10) : o)))
      : t.indexOf('hsl') !== -1 && ((n[1] = `${n[1]}%`), (n[2] = `${n[2]}%`)),
    t.indexOf('color') !== -1 ? (n = `${r} ${n.join(' ')}`) : (n = `${n.join(', ')}`),
    `${t}(${n})`
  );
}
function ws(e) {
  if (e.indexOf('#') === 0) return e;
  const { values: t } = H(e);
  return `#${t.map((r, n) => xs(n === 3 ? Math.round(255 * r) : r)).join('')}`;
}
function Dn(e) {
  e = H(e);
  const { values: t } = e,
    r = t[0],
    n = t[1] / 100,
    o = t[2] / 100,
    i = n * Math.min(o, 1 - o),
    a = (u, f = (u + r / 30) % 12) => o - i * Math.max(Math.min(f - 3, 9 - f, 1), -1);
  let s = 'rgb';
  const c = [Math.round(a(0) * 255), Math.round(a(8) * 255), Math.round(a(4) * 255)];
  return e.type === 'hsla' && ((s += 'a'), c.push(t[3])), xe({ type: s, values: c });
}
function Ye(e) {
  e = H(e);
  let t = e.type === 'hsl' || e.type === 'hsla' ? H(Dn(e)).values : e.values;
  return (
    (t = t.map(
      (r) => (
        e.type !== 'color' && (r /= 255), r <= 0.03928 ? r / 12.92 : ((r + 0.055) / 1.055) ** 2.4
      ),
    )),
    Number((0.2126 * t[0] + 0.7152 * t[1] + 0.0722 * t[2]).toFixed(3))
  );
}
function _s(e, t) {
  const r = Ye(e),
    n = Ye(t);
  return (Math.max(r, n) + 0.05) / (Math.min(r, n) + 0.05);
}
function Wn(e, t) {
  return (
    (e = H(e)),
    (t = sr(t)),
    (e.type === 'rgb' || e.type === 'hsl') && (e.type += 'a'),
    e.type === 'color' ? (e.values[3] = `/${t}`) : (e.values[3] = t),
    xe(e)
  );
}
function $s(e, t, r) {
  try {
    return Wn(e, t);
  } catch {
    return e;
  }
}
function cr(e, t) {
  if (((e = H(e)), (t = sr(t)), e.type.indexOf('hsl') !== -1)) e.values[2] *= 1 - t;
  else if (e.type.indexOf('rgb') !== -1 || e.type.indexOf('color') !== -1)
    for (let r = 0; r < 3; r += 1) e.values[r] *= 1 - t;
  return xe(e);
}
function ks(e, t, r) {
  try {
    return cr(e, t);
  } catch {
    return e;
  }
}
function ur(e, t) {
  if (((e = H(e)), (t = sr(t)), e.type.indexOf('hsl') !== -1))
    e.values[2] += (100 - e.values[2]) * t;
  else if (e.type.indexOf('rgb') !== -1)
    for (let r = 0; r < 3; r += 1) e.values[r] += (255 - e.values[r]) * t;
  else if (e.type.indexOf('color') !== -1)
    for (let r = 0; r < 3; r += 1) e.values[r] += (1 - e.values[r]) * t;
  return xe(e);
}
function Cs(e, t, r) {
  try {
    return ur(e, t);
  } catch {
    return e;
  }
}
function qn(e, t = 0.15) {
  return Ye(e) > 0.5 ? cr(e, t) : ur(e, t);
}
function Os(e, t, r) {
  try {
    return qn(e, t);
  } catch {
    return e;
  }
}
function Ps(e, t, r, n = 1) {
  const o = (c, u) => Math.round((c ** (1 / n) * (1 - r) + u ** (1 / n) * r) ** n),
    i = H(e),
    a = H(t),
    s = [o(i.values[0], a.values[0]), o(i.values[1], a.values[1]), o(i.values[2], a.values[2])];
  return xe({ type: 'rgb', values: s });
}
const Re = { black: '#000', white: '#fff' },
  Ts = {
    50: '#fafafa',
    100: '#f5f5f5',
    200: '#eeeeee',
    300: '#e0e0e0',
    400: '#bdbdbd',
    500: '#9e9e9e',
    600: '#757575',
    700: '#616161',
    800: '#424242',
    900: '#212121',
    A100: '#f5f5f5',
    A200: '#eeeeee',
    A400: '#bdbdbd',
    A700: '#616161',
  },
  ue = {
    50: '#f3e5f5',
    100: '#e1bee7',
    200: '#ce93d8',
    300: '#ba68c8',
    400: '#ab47bc',
    500: '#9c27b0',
    600: '#8e24aa',
    700: '#7b1fa2',
    800: '#6a1b9a',
    900: '#4a148c',
    A100: '#ea80fc',
    A200: '#e040fb',
    A400: '#d500f9',
    A700: '#aa00ff',
  },
  le = {
    50: '#ffebee',
    100: '#ffcdd2',
    200: '#ef9a9a',
    300: '#e57373',
    400: '#ef5350',
    500: '#f44336',
    600: '#e53935',
    700: '#d32f2f',
    800: '#c62828',
    900: '#b71c1c',
    A100: '#ff8a80',
    A200: '#ff5252',
    A400: '#ff1744',
    A700: '#d50000',
  },
  $e = {
    50: '#fff3e0',
    100: '#ffe0b2',
    200: '#ffcc80',
    300: '#ffb74d',
    400: '#ffa726',
    500: '#ff9800',
    600: '#fb8c00',
    700: '#f57c00',
    800: '#ef6c00',
    900: '#e65100',
    A100: '#ffd180',
    A200: '#ffab40',
    A400: '#ff9100',
    A700: '#ff6d00',
  },
  fe = {
    50: '#e3f2fd',
    100: '#bbdefb',
    200: '#90caf9',
    300: '#64b5f6',
    400: '#42a5f5',
    500: '#2196f3',
    600: '#1e88e5',
    700: '#1976d2',
    800: '#1565c0',
    900: '#0d47a1',
    A100: '#82b1ff',
    A200: '#448aff',
    A400: '#2979ff',
    A700: '#2962ff',
  },
  de = {
    50: '#e1f5fe',
    100: '#b3e5fc',
    200: '#81d4fa',
    300: '#4fc3f7',
    400: '#29b6f6',
    500: '#03a9f4',
    600: '#039be5',
    700: '#0288d1',
    800: '#0277bd',
    900: '#01579b',
    A100: '#80d8ff',
    A200: '#40c4ff',
    A400: '#00b0ff',
    A700: '#0091ea',
  },
  pe = {
    50: '#e8f5e9',
    100: '#c8e6c9',
    200: '#a5d6a7',
    300: '#81c784',
    400: '#66bb6a',
    500: '#4caf50',
    600: '#43a047',
    700: '#388e3c',
    800: '#2e7d32',
    900: '#1b5e20',
    A100: '#b9f6ca',
    A200: '#69f0ae',
    A400: '#00e676',
    A700: '#00c853',
  },
  Rs = ['mode', 'contrastThreshold', 'tonalOffset'],
  Ir = {
    text: {
      primary: 'rgba(0, 0, 0, 0.87)',
      secondary: 'rgba(0, 0, 0, 0.6)',
      disabled: 'rgba(0, 0, 0, 0.38)',
    },
    divider: 'rgba(0, 0, 0, 0.12)',
    background: { paper: Re.white, default: Re.white },
    action: {
      active: 'rgba(0, 0, 0, 0.54)',
      hover: 'rgba(0, 0, 0, 0.04)',
      hoverOpacity: 0.04,
      selected: 'rgba(0, 0, 0, 0.08)',
      selectedOpacity: 0.08,
      disabled: 'rgba(0, 0, 0, 0.26)',
      disabledBackground: 'rgba(0, 0, 0, 0.12)',
      disabledOpacity: 0.38,
      focus: 'rgba(0, 0, 0, 0.12)',
      focusOpacity: 0.12,
      activatedOpacity: 0.12,
    },
  },
  Mt = {
    text: {
      primary: Re.white,
      secondary: 'rgba(255, 255, 255, 0.7)',
      disabled: 'rgba(255, 255, 255, 0.5)',
      icon: 'rgba(255, 255, 255, 0.5)',
    },
    divider: 'rgba(255, 255, 255, 0.12)',
    background: { paper: '#121212', default: '#121212' },
    action: {
      active: Re.white,
      hover: 'rgba(255, 255, 255, 0.08)',
      hoverOpacity: 0.08,
      selected: 'rgba(255, 255, 255, 0.16)',
      selectedOpacity: 0.16,
      disabled: 'rgba(255, 255, 255, 0.3)',
      disabledBackground: 'rgba(255, 255, 255, 0.12)',
      disabledOpacity: 0.38,
      focus: 'rgba(255, 255, 255, 0.12)',
      focusOpacity: 0.12,
      activatedOpacity: 0.24,
    },
  };
function Fr(e, t, r, n) {
  const o = n.light || n,
    i = n.dark || n * 1.5;
  e[t] ||
    (e.hasOwnProperty(r)
      ? (e[t] = e[r])
      : t === 'light'
        ? (e.light = bs(e.main, o))
        : t === 'dark' && (e.dark = ys(e.main, i)));
}
function As(e = 'light') {
  return e === 'dark'
    ? { main: fe[200], light: fe[50], dark: fe[400] }
    : { main: fe[700], light: fe[400], dark: fe[800] };
}
function Es(e = 'light') {
  return e === 'dark'
    ? { main: ue[200], light: ue[50], dark: ue[400] }
    : { main: ue[500], light: ue[300], dark: ue[700] };
}
function js(e = 'light') {
  return e === 'dark'
    ? { main: le[500], light: le[300], dark: le[700] }
    : { main: le[700], light: le[400], dark: le[800] };
}
function Ms(e = 'light') {
  return e === 'dark'
    ? { main: de[400], light: de[300], dark: de[700] }
    : { main: de[700], light: de[500], dark: de[900] };
}
function Is(e = 'light') {
  return e === 'dark'
    ? { main: pe[400], light: pe[300], dark: pe[700] }
    : { main: pe[800], light: pe[500], dark: pe[900] };
}
function Fs(e = 'light') {
  return e === 'dark'
    ? { main: $e[400], light: $e[300], dark: $e[700] }
    : { main: '#ed6c02', light: $e[500], dark: $e[900] };
}
function zs(e) {
  const { mode: t = 'light', contrastThreshold: r = 3, tonalOffset: n = 0.2 } = e,
    o = ie(e, Rs),
    i = e.primary || As(t),
    a = e.secondary || Es(t),
    s = e.error || js(t),
    c = e.info || Ms(t),
    u = e.success || Is(t),
    f = e.warning || Fs(t);
  function p(l) {
    return gs(l, Mt.text.primary) >= r ? Mt.text.primary : Ir.text.primary;
  }
  const d = ({
      color: l,
      name: g,
      mainShade: y = 500,
      lightShade: w = 300,
      darkShade: P = 700,
    }) => {
      if (((l = C({}, l)), !l.main && l[y] && (l.main = l[y]), !l.hasOwnProperty('main')))
        throw new Error(Ce(11, g ? ` (${g})` : '', y));
      if (typeof l.main != 'string')
        throw new Error(Ce(12, g ? ` (${g})` : '', JSON.stringify(l.main)));
      return (
        Fr(l, 'light', w, n), Fr(l, 'dark', P, n), l.contrastText || (l.contrastText = p(l.main)), l
      );
    },
    h = { dark: Mt, light: Ir };
  return Z(
    C(
      {
        common: C({}, Re),
        mode: t,
        primary: d({ color: i, name: 'primary' }),
        secondary: d({
          color: a,
          name: 'secondary',
          mainShade: 'A400',
          lightShade: 'A200',
          darkShade: 'A700',
        }),
        error: d({ color: s, name: 'error' }),
        warning: d({ color: f, name: 'warning' }),
        info: d({ color: c, name: 'info' }),
        success: d({ color: u, name: 'success' }),
        grey: Ts,
        contrastThreshold: r,
        getContrastText: p,
        augmentColor: d,
        tonalOffset: n,
      },
      h[t],
    ),
    o,
  );
}
const Ls = [
  'fontFamily',
  'fontSize',
  'fontWeightLight',
  'fontWeightRegular',
  'fontWeightMedium',
  'fontWeightBold',
  'htmlFontSize',
  'allVariants',
  'pxToRem',
];
function Ns(e) {
  return Math.round(e * 1e5) / 1e5;
}
const zr = { textTransform: 'uppercase' },
  Lr = '"Roboto", "Helvetica", "Arial", sans-serif';
function Bs(e, t) {
  const r = typeof t == 'function' ? t(e) : t,
    {
      fontFamily: n = Lr,
      fontSize: o = 14,
      fontWeightLight: i = 300,
      fontWeightRegular: a = 400,
      fontWeightMedium: s = 500,
      fontWeightBold: c = 700,
      htmlFontSize: u = 16,
      allVariants: f,
      pxToRem: p,
    } = r,
    d = ie(r, Ls),
    h = o / 14,
    m = p || ((y) => `${(y / u) * h}rem`),
    l = (y, w, P, q, k) =>
      C(
        { fontFamily: n, fontWeight: y, fontSize: m(w), lineHeight: P },
        n === Lr ? { letterSpacing: `${Ns(q / w)}em` } : {},
        k,
        f,
      ),
    g = {
      h1: l(i, 96, 1.167, -1.5),
      h2: l(i, 60, 1.2, -0.5),
      h3: l(a, 48, 1.167, 0),
      h4: l(a, 34, 1.235, 0.25),
      h5: l(a, 24, 1.334, 0),
      h6: l(s, 20, 1.6, 0.15),
      subtitle1: l(a, 16, 1.75, 0.15),
      subtitle2: l(s, 14, 1.57, 0.1),
      body1: l(a, 16, 1.5, 0.15),
      body2: l(a, 14, 1.43, 0.15),
      button: l(s, 14, 1.75, 0.4, zr),
      caption: l(a, 12, 1.66, 0.4),
      overline: l(a, 12, 2.66, 1, zr),
      inherit: {
        fontFamily: 'inherit',
        fontWeight: 'inherit',
        fontSize: 'inherit',
        lineHeight: 'inherit',
        letterSpacing: 'inherit',
      },
    };
  return Z(
    C(
      {
        htmlFontSize: u,
        pxToRem: m,
        fontFamily: n,
        fontSize: o,
        fontWeightLight: i,
        fontWeightRegular: a,
        fontWeightMedium: s,
        fontWeightBold: c,
      },
      g,
    ),
    d,
    { clone: !1 },
  );
}
const Ds = 0.2,
  Ws = 0.14,
  qs = 0.12;
function O(...e) {
  return [
    `${e[0]}px ${e[1]}px ${e[2]}px ${e[3]}px rgba(0,0,0,${Ds})`,
    `${e[4]}px ${e[5]}px ${e[6]}px ${e[7]}px rgba(0,0,0,${Ws})`,
    `${e[8]}px ${e[9]}px ${e[10]}px ${e[11]}px rgba(0,0,0,${qs})`,
  ].join(',');
}
const Ks = [
    'none',
    O(0, 2, 1, -1, 0, 1, 1, 0, 0, 1, 3, 0),
    O(0, 3, 1, -2, 0, 2, 2, 0, 0, 1, 5, 0),
    O(0, 3, 3, -2, 0, 3, 4, 0, 0, 1, 8, 0),
    O(0, 2, 4, -1, 0, 4, 5, 0, 0, 1, 10, 0),
    O(0, 3, 5, -1, 0, 5, 8, 0, 0, 1, 14, 0),
    O(0, 3, 5, -1, 0, 6, 10, 0, 0, 1, 18, 0),
    O(0, 4, 5, -2, 0, 7, 10, 1, 0, 2, 16, 1),
    O(0, 5, 5, -3, 0, 8, 10, 1, 0, 3, 14, 2),
    O(0, 5, 6, -3, 0, 9, 12, 1, 0, 3, 16, 2),
    O(0, 6, 6, -3, 0, 10, 14, 1, 0, 4, 18, 3),
    O(0, 6, 7, -4, 0, 11, 15, 1, 0, 4, 20, 3),
    O(0, 7, 8, -4, 0, 12, 17, 2, 0, 5, 22, 4),
    O(0, 7, 8, -4, 0, 13, 19, 2, 0, 5, 24, 4),
    O(0, 7, 9, -4, 0, 14, 21, 2, 0, 5, 26, 4),
    O(0, 8, 9, -5, 0, 15, 22, 2, 0, 6, 28, 5),
    O(0, 8, 10, -5, 0, 16, 24, 2, 0, 6, 30, 5),
    O(0, 8, 11, -5, 0, 17, 26, 2, 0, 6, 32, 5),
    O(0, 9, 11, -5, 0, 18, 28, 2, 0, 7, 34, 6),
    O(0, 9, 12, -6, 0, 19, 29, 2, 0, 7, 36, 6),
    O(0, 10, 13, -6, 0, 20, 31, 3, 0, 8, 38, 7),
    O(0, 10, 13, -6, 0, 21, 33, 3, 0, 8, 40, 7),
    O(0, 10, 14, -6, 0, 22, 35, 3, 0, 8, 42, 7),
    O(0, 11, 14, -7, 0, 23, 36, 3, 0, 9, 44, 8),
    O(0, 11, 15, -7, 0, 24, 38, 3, 0, 9, 46, 8),
  ],
  Gs = ['duration', 'easing', 'delay'],
  Hs = {
    easeInOut: 'cubic-bezier(0.4, 0, 0.2, 1)',
    easeOut: 'cubic-bezier(0.0, 0, 0.2, 1)',
    easeIn: 'cubic-bezier(0.4, 0, 1, 1)',
    sharp: 'cubic-bezier(0.4, 0, 0.6, 1)',
  },
  Us = {
    shortest: 150,
    shorter: 200,
    short: 250,
    standard: 300,
    complex: 375,
    enteringScreen: 225,
    leavingScreen: 195,
  };
function Nr(e) {
  return `${Math.round(e)}ms`;
}
function Vs(e) {
  if (!e) return 0;
  const t = e / 36;
  return Math.round((4 + 15 * t ** 0.25 + t / 5) * 10);
}
function Xs(e) {
  const t = C({}, Hs, e.easing),
    r = C({}, Us, e.duration);
  return C(
    {
      getAutoHeightDuration: Vs,
      create: (o = ['all'], i = {}) => {
        const { duration: a = r.standard, easing: s = t.easeInOut, delay: c = 0 } = i;
        return (
          ie(i, Gs),
          (Array.isArray(o) ? o : [o])
            .map(
              (u) =>
                `${u} ${typeof a == 'string' ? a : Nr(a)} ${s} ${typeof c == 'string' ? c : Nr(c)}`,
            )
            .join(',')
        );
      },
    },
    e,
    { easing: t, duration: r },
  );
}
const Ys = {
    mobileStepper: 1e3,
    fab: 1050,
    speedDial: 1050,
    appBar: 1100,
    drawer: 1200,
    modal: 1300,
    snackbar: 1400,
    tooltip: 1500,
  },
  Js = ['breakpoints', 'mixins', 'spacing', 'palette', 'transitions', 'typography', 'shape'];
function Zs(e = {}, ...t) {
  const { mixins: r = {}, palette: n = {}, transitions: o = {}, typography: i = {} } = e,
    a = ie(e, Js);
  if (e.vars) throw new Error(Ce(18));
  const s = zs(n),
    c = Fn(e);
  let u = Z(c, {
    mixins: ps(c.breakpoints, r),
    palette: s,
    shadows: Ks.slice(),
    typography: Bs(s, i),
    transitions: Xs(o),
    zIndex: C({}, Ys),
  });
  return (
    (u = Z(u, a)),
    (u = t.reduce((f, p) => Z(f, p), u)),
    (u.unstable_sxConfig = C({}, Fe, a == null ? void 0 : a.unstable_sxConfig)),
    (u.unstable_sx = function (p) {
      return ar({ sx: p, theme: this });
    }),
    u
  );
}
const Qs = Zs(),
  ec = '$$material';
function tc(e) {
  return e !== 'ownerState' && e !== 'theme' && e !== 'sx' && e !== 'as';
}
const rc = (e) => tc(e) && e !== 'classes',
  nc = Qa({ themeId: ec, defaultTheme: Qs, rootShouldForwardProp: rc });
function oc(e) {
  return sn('MuiSvgIcon', e);
}
Ro('MuiSvgIcon', [
  'root',
  'colorPrimary',
  'colorSecondary',
  'colorAction',
  'colorError',
  'colorDisabled',
  'fontSizeInherit',
  'fontSizeSmall',
  'fontSizeMedium',
  'fontSizeLarge',
]);
const ic = [
    'children',
    'className',
    'color',
    'component',
    'fontSize',
    'htmlColor',
    'inheritViewBox',
    'titleAccess',
    'viewBox',
  ],
  ac = (e) => {
    const { color: t, fontSize: r, classes: n } = e,
      o = { root: ['root', t !== 'inherit' && `color${oe(t)}`, `fontSize${oe(r)}`] };
    return Oo(o, oc, n);
  },
  sc = nc('svg', {
    name: 'MuiSvgIcon',
    slot: 'Root',
    overridesResolver: (e, t) => {
      const { ownerState: r } = e;
      return [
        t.root,
        r.color !== 'inherit' && t[`color${oe(r.color)}`],
        t[`fontSize${oe(r.fontSize)}`],
      ];
    },
  })(({ theme: e, ownerState: t }) => {
    var r, n, o, i, a, s, c, u, f, p, d, h, m;
    return {
      userSelect: 'none',
      width: '1em',
      height: '1em',
      display: 'inline-block',
      fill: t.hasSvgAsChild ? void 0 : 'currentColor',
      flexShrink: 0,
      transition:
        (r = e.transitions) == null || (n = r.create) == null
          ? void 0
          : n.call(r, 'fill', {
              duration:
                (o = e.transitions) == null || (o = o.duration) == null ? void 0 : o.shorter,
            }),
      fontSize: {
        inherit: 'inherit',
        small:
          ((i = e.typography) == null || (a = i.pxToRem) == null ? void 0 : a.call(i, 20)) ||
          '1.25rem',
        medium:
          ((s = e.typography) == null || (c = s.pxToRem) == null ? void 0 : c.call(s, 24)) ||
          '1.5rem',
        large:
          ((u = e.typography) == null || (f = u.pxToRem) == null ? void 0 : f.call(u, 35)) ||
          '2.1875rem',
      }[t.fontSize],
      color:
        (p = (d = (e.vars || e).palette) == null || (d = d[t.color]) == null ? void 0 : d.main) !=
        null
          ? p
          : {
              action:
                (h = (e.vars || e).palette) == null || (h = h.action) == null ? void 0 : h.active,
              disabled:
                (m = (e.vars || e).palette) == null || (m = m.action) == null ? void 0 : m.disabled,
              inherit: void 0,
            }[t.color],
    };
  }),
  qt = b.forwardRef(function (t, r) {
    const n = zo({ props: t, name: 'MuiSvgIcon' }),
      {
        children: o,
        className: i,
        color: a = 'inherit',
        component: s = 'svg',
        fontSize: c = 'medium',
        htmlColor: u,
        inheritViewBox: f = !1,
        titleAccess: p,
        viewBox: d = '0 0 24 24',
      } = n,
      h = ie(n, ic),
      m = b.isValidElement(o) && o.type === 'svg',
      l = C({}, n, {
        color: a,
        component: s,
        fontSize: c,
        instanceFontSize: t.fontSize,
        inheritViewBox: f,
        viewBox: d,
        hasSvgAsChild: m,
      }),
      g = {};
    f || (g.viewBox = d);
    const y = ac(l);
    return L.jsxs(
      sc,
      C(
        {
          as: s,
          className: jo(y.root, i),
          focusable: 'false',
          color: u,
          'aria-hidden': p ? void 0 : !0,
          role: p ? 'img' : void 0,
          ref: r,
        },
        g,
        h,
        m && o.props,
        {
          ownerState: l,
          children: [m ? o.props.children : o, p ? L.jsx('title', { children: p }) : null],
        },
      ),
    );
  });
qt.muiName = 'SvgIcon';
function cc(e, t) {
  function r(n, o) {
    return L.jsx(qt, C({ 'data-testid': `${t}Icon`, ref: o }, n, { children: e }));
  }
  return (r.muiName = qt.muiName), b.memo(b.forwardRef(r));
}
const uc = {
    configure: (e) => {
      an.configure(e);
    },
  },
  lc = Object.freeze(
    Object.defineProperty(
      {
        __proto__: null,
        capitalize: oe,
        createChainedFunction: ao,
        createSvgIcon: cc,
        debounce: so,
        deprecatedPropType: co,
        isMuiElement: uo,
        ownerDocument: rn,
        ownerWindow: lo,
        requirePropFactory: fo,
        setRef: nn,
        unstable_ClassNameGenerator: uc,
        unstable_useEnhancedEffect: on,
        unstable_useId: mo,
        unsupportedProp: ho,
        useControlled: yo,
        useEventCallback: go,
        useForkRef: bo,
        useIsFocusVisible: Co,
      },
      Symbol.toStringTag,
      { value: 'Module' },
    ),
  ),
  fc = re(lc);
var Br;
function Ot() {
  return (
    Br ||
      ((Br = 1),
      (function (e) {
        'use client';
        Object.defineProperty(e, '__esModule', { value: !0 }),
          Object.defineProperty(e, 'default', {
            enumerable: !0,
            get: function () {
              return t.createSvgIcon;
            },
          });
        var t = fc;
      })(Tt)),
    Tt
  );
}
var dc = ge;
Object.defineProperty(Kt, '__esModule', { value: !0 });
var Kn = (Kt.default = void 0),
  pc = dc(Ot()),
  mc = Ae();
Kn = Kt.default = (0, pc.default)(
  (0, mc.jsx)('path', {
    d: 'M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2m1 15h-2v-2h2zm0-4h-2V7h2z',
  }),
  'Error',
);
var lr = {},
  hc = ge;
Object.defineProperty(lr, '__esModule', { value: !0 });
var Gn = (lr.default = void 0),
  yc = hc(Ot()),
  gc = Ae();
Gn = lr.default = (0, yc.default)(
  (0, gc.jsx)('path', {
    d: 'M15.73 3H8.27L3 8.27v7.46L8.27 21h7.46L21 15.73V8.27zM17 15.74 15.74 17 12 13.26 8.26 17 7 15.74 10.74 12 7 8.26 8.26 7 12 10.74 15.74 7 17 8.26 13.26 12z',
  }),
  'Dangerous',
);
var fr = {},
  bc = ge;
Object.defineProperty(fr, '__esModule', { value: !0 });
var Hn = (fr.default = void 0),
  vc = bc(Ot()),
  xc = Ae();
Hn = fr.default = (0, vc.default)(
  (0, xc.jsx)('path', {
    d: 'M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2m-2 15-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8z',
  }),
  'CheckCircle',
);
var dr = {},
  Sc = ge;
Object.defineProperty(dr, '__esModule', { value: !0 });
var Un = (dr.default = void 0),
  wc = Sc(Ot()),
  _c = Ae();
Un = dr.default = (0, wc.default)(
  (0, _c.jsx)('path', {
    d: 'M19 6.41 17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z',
  }),
  'Close',
);
b.createContext(null);
function Vn({ children: e, type: t, close: r }) {
  const o =
    {
      success: L.jsx(Hn, { color: 'success', fontSize: 'inherit' }),
      warning: L.jsx(Kn, { color: 'warning', fontSize: 'inherit' }),
      error: L.jsx(Gn, { color: 'error', fontSize: 'inherit' }),
    }[t] || null;
  return L.jsxs('div', {
    role: 'alert',
    className: 'relative',
    children: [
      L.jsxs('div', {
        className:
          'flex items-center justify-between p-4 w-80 border border-gray shadow-md rounded-lg my-3',
        children: [
          o && L.jsx('div', { className: 'text-6xl mr-5', children: o }),
          L.jsx('div', { className: 'text-wrap text-center w-full', children: e }),
        ],
      }),
      L.jsx('div', {
        className: 'absolute top-2 right-2 cursor-pointer',
        onClick: () => r(),
        children: L.jsx(Un, { color: 'action' }),
      }),
    ],
  });
}
Vn.__docgenInfo = {
  description: '',
  methods: [],
  displayName: 'Toast',
  props: {
    children: { required: !0, tsType: { name: 'ReactNode' }, description: '' },
    type: {
      required: !0,
      tsType: {
        name: 'union',
        raw: '"success" | "warning" | "error"',
        elements: [
          { name: 'literal', value: '"success"' },
          { name: 'literal', value: '"warning"' },
          { name: 'literal', value: '"error"' },
        ],
      },
      description: '',
    },
    close: {
      required: !0,
      tsType: {
        name: 'signature',
        type: 'function',
        raw: '() => void',
        signature: { arguments: [], return: { name: 'void' } },
      },
      description: '',
    },
  },
};
const Cc = {
    title: 'Components/Toast',
    parameters: { layout: 'centered' },
    tags: ['autodocs'],
    component: Vn,
  },
  Be = { args: { type: 'warning', children: 'This toast appears to alert a warning' } },
  De = { args: { type: 'error', children: 'This toast appears to alert an error' } },
  We = { args: { type: 'success', children: 'This toast appears when everything is fine' } };
var Dr, Wr, qr;
Be.parameters = {
  ...Be.parameters,
  docs: {
    ...((Dr = Be.parameters) == null ? void 0 : Dr.docs),
    source: {
      originalSource: `{
  args: {
    type: "warning",
    children: "This toast appears to alert a warning"
  }
}`,
      ...((qr = (Wr = Be.parameters) == null ? void 0 : Wr.docs) == null ? void 0 : qr.source),
    },
  },
};
var Kr, Gr, Hr;
De.parameters = {
  ...De.parameters,
  docs: {
    ...((Kr = De.parameters) == null ? void 0 : Kr.docs),
    source: {
      originalSource: `{
  args: {
    type: "error",
    children: "This toast appears to alert an error"
  }
}`,
      ...((Hr = (Gr = De.parameters) == null ? void 0 : Gr.docs) == null ? void 0 : Hr.source),
    },
  },
};
var Ur, Vr, Xr;
We.parameters = {
  ...We.parameters,
  docs: {
    ...((Ur = We.parameters) == null ? void 0 : Ur.docs),
    source: {
      originalSource: `{
  args: {
    type: "success",
    children: "This toast appears when everything is fine"
  }
}`,
      ...((Xr = (Vr = We.parameters) == null ? void 0 : Vr.docs) == null ? void 0 : Xr.source),
    },
  },
};
const Oc = ['ToastWarning', 'ToastError', 'ToastSuccess'];
export {
  De as ToastError,
  We as ToastSuccess,
  Be as ToastWarning,
  Oc as __namedExportsOrder,
  Cc as default,
};
