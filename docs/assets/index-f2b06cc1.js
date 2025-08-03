(function () {
  const t = document.createElement('link').relList;
  if (t && t.supports && t.supports('modulepreload')) return;
  for (const i of document.querySelectorAll('link[rel="modulepreload"]')) r(i);
  new MutationObserver((i) => {
    for (const o of i)
      if (o.type === 'childList')
        for (const s of o.addedNodes)
          s.tagName === 'LINK' && s.rel === 'modulepreload' && r(s);
  }).observe(document, { childList: !0, subtree: !0 });
  function n(i) {
    const o = {};
    return (
      i.integrity && (o.integrity = i.integrity),
      i.referrerPolicy && (o.referrerPolicy = i.referrerPolicy),
      i.crossOrigin === 'use-credentials'
        ? (o.credentials = 'include')
        : i.crossOrigin === 'anonymous'
          ? (o.credentials = 'omit')
          : (o.credentials = 'same-origin'),
      o
    );
  }
  function r(i) {
    if (i.ep) return;
    i.ep = !0;
    const o = n(i);
    fetch(i.href, o);
  }
})();
function Kg(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, 'default')
    ? e.default
    : e;
}
var zf = { exports: {} },
  Yo = {},
  $f = { exports: {} },
  F = {};
/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var yi = Symbol.for('react.element'),
  Gg = Symbol.for('react.portal'),
  Yg = Symbol.for('react.fragment'),
  Qg = Symbol.for('react.strict_mode'),
  Xg = Symbol.for('react.profiler'),
  Zg = Symbol.for('react.provider'),
  Jg = Symbol.for('react.context'),
  qg = Symbol.for('react.forward_ref'),
  ey = Symbol.for('react.suspense'),
  ty = Symbol.for('react.memo'),
  ny = Symbol.for('react.lazy'),
  oc = Symbol.iterator;
function ry(e) {
  return e === null || typeof e != 'object'
    ? null
    : ((e = (oc && e[oc]) || e['@@iterator']),
      typeof e == 'function' ? e : null);
}
var Uf = {
    isMounted: function () {
      return !1;
    },
    enqueueForceUpdate: function () {},
    enqueueReplaceState: function () {},
    enqueueSetState: function () {},
  },
  Wf = Object.assign,
  bf = {};
function sr(e, t, n) {
  ((this.props = e),
    (this.context = t),
    (this.refs = bf),
    (this.updater = n || Uf));
}
sr.prototype.isReactComponent = {};
sr.prototype.setState = function (e, t) {
  if (typeof e != 'object' && typeof e != 'function' && e != null)
    throw Error(
      'setState(...): takes an object of state variables to update or a function which returns an object of state variables.'
    );
  this.updater.enqueueSetState(this, e, t, 'setState');
};
sr.prototype.forceUpdate = function (e) {
  this.updater.enqueueForceUpdate(this, e, 'forceUpdate');
};
function Hf() {}
Hf.prototype = sr.prototype;
function Cl(e, t, n) {
  ((this.props = e),
    (this.context = t),
    (this.refs = bf),
    (this.updater = n || Uf));
}
var Pl = (Cl.prototype = new Hf());
Pl.constructor = Cl;
Wf(Pl, sr.prototype);
Pl.isPureReactComponent = !0;
var sc = Array.isArray,
  Kf = Object.prototype.hasOwnProperty,
  Tl = { current: null },
  Gf = { key: !0, ref: !0, __self: !0, __source: !0 };
function Yf(e, t, n) {
  var r,
    i = {},
    o = null,
    s = null;
  if (t != null)
    for (r in (t.ref !== void 0 && (s = t.ref),
    t.key !== void 0 && (o = '' + t.key),
    t))
      Kf.call(t, r) && !Gf.hasOwnProperty(r) && (i[r] = t[r]);
  var a = arguments.length - 2;
  if (a === 1) i.children = n;
  else if (1 < a) {
    for (var l = Array(a), u = 0; u < a; u++) l[u] = arguments[u + 2];
    i.children = l;
  }
  if (e && e.defaultProps)
    for (r in ((a = e.defaultProps), a)) i[r] === void 0 && (i[r] = a[r]);
  return {
    $$typeof: yi,
    type: e,
    key: o,
    ref: s,
    props: i,
    _owner: Tl.current,
  };
}
function iy(e, t) {
  return {
    $$typeof: yi,
    type: e.type,
    key: t,
    ref: e.ref,
    props: e.props,
    _owner: e._owner,
  };
}
function El(e) {
  return typeof e == 'object' && e !== null && e.$$typeof === yi;
}
function oy(e) {
  var t = { '=': '=0', ':': '=2' };
  return (
    '$' +
    e.replace(/[=:]/g, function (n) {
      return t[n];
    })
  );
}
var ac = /\/+/g;
function vs(e, t) {
  return typeof e == 'object' && e !== null && e.key != null
    ? oy('' + e.key)
    : t.toString(36);
}
function qi(e, t, n, r, i) {
  var o = typeof e;
  (o === 'undefined' || o === 'boolean') && (e = null);
  var s = !1;
  if (e === null) s = !0;
  else
    switch (o) {
      case 'string':
      case 'number':
        s = !0;
        break;
      case 'object':
        switch (e.$$typeof) {
          case yi:
          case Gg:
            s = !0;
        }
    }
  if (s)
    return (
      (s = e),
      (i = i(s)),
      (e = r === '' ? '.' + vs(s, 0) : r),
      sc(i)
        ? ((n = ''),
          e != null && (n = e.replace(ac, '$&/') + '/'),
          qi(i, t, n, '', function (u) {
            return u;
          }))
        : i != null &&
          (El(i) &&
            (i = iy(
              i,
              n +
                (!i.key || (s && s.key === i.key)
                  ? ''
                  : ('' + i.key).replace(ac, '$&/') + '/') +
                e
            )),
          t.push(i)),
      1
    );
  if (((s = 0), (r = r === '' ? '.' : r + ':'), sc(e)))
    for (var a = 0; a < e.length; a++) {
      o = e[a];
      var l = r + vs(o, a);
      s += qi(o, t, n, l, i);
    }
  else if (((l = ry(e)), typeof l == 'function'))
    for (e = l.call(e), a = 0; !(o = e.next()).done; )
      ((o = o.value), (l = r + vs(o, a++)), (s += qi(o, t, n, l, i)));
  else if (o === 'object')
    throw (
      (t = String(e)),
      Error(
        'Objects are not valid as a React child (found: ' +
          (t === '[object Object]'
            ? 'object with keys {' + Object.keys(e).join(', ') + '}'
            : t) +
          '). If you meant to render a collection of children, use an array instead.'
      )
    );
  return s;
}
function Ni(e, t, n) {
  if (e == null) return e;
  var r = [],
    i = 0;
  return (
    qi(e, r, '', '', function (o) {
      return t.call(n, o, i++);
    }),
    r
  );
}
function sy(e) {
  if (e._status === -1) {
    var t = e._result;
    ((t = t()),
      t.then(
        function (n) {
          (e._status === 0 || e._status === -1) &&
            ((e._status = 1), (e._result = n));
        },
        function (n) {
          (e._status === 0 || e._status === -1) &&
            ((e._status = 2), (e._result = n));
        }
      ),
      e._status === -1 && ((e._status = 0), (e._result = t)));
  }
  if (e._status === 1) return e._result.default;
  throw e._result;
}
var Ce = { current: null },
  eo = { transition: null },
  ay = {
    ReactCurrentDispatcher: Ce,
    ReactCurrentBatchConfig: eo,
    ReactCurrentOwner: Tl,
  };
function Qf() {
  throw Error('act(...) is not supported in production builds of React.');
}
F.Children = {
  map: Ni,
  forEach: function (e, t, n) {
    Ni(
      e,
      function () {
        t.apply(this, arguments);
      },
      n
    );
  },
  count: function (e) {
    var t = 0;
    return (
      Ni(e, function () {
        t++;
      }),
      t
    );
  },
  toArray: function (e) {
    return (
      Ni(e, function (t) {
        return t;
      }) || []
    );
  },
  only: function (e) {
    if (!El(e))
      throw Error(
        'React.Children.only expected to receive a single React element child.'
      );
    return e;
  },
};
F.Component = sr;
F.Fragment = Yg;
F.Profiler = Xg;
F.PureComponent = Cl;
F.StrictMode = Qg;
F.Suspense = ey;
F.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = ay;
F.act = Qf;
F.cloneElement = function (e, t, n) {
  if (e == null)
    throw Error(
      'React.cloneElement(...): The argument must be a React element, but you passed ' +
        e +
        '.'
    );
  var r = Wf({}, e.props),
    i = e.key,
    o = e.ref,
    s = e._owner;
  if (t != null) {
    if (
      (t.ref !== void 0 && ((o = t.ref), (s = Tl.current)),
      t.key !== void 0 && (i = '' + t.key),
      e.type && e.type.defaultProps)
    )
      var a = e.type.defaultProps;
    for (l in t)
      Kf.call(t, l) &&
        !Gf.hasOwnProperty(l) &&
        (r[l] = t[l] === void 0 && a !== void 0 ? a[l] : t[l]);
  }
  var l = arguments.length - 2;
  if (l === 1) r.children = n;
  else if (1 < l) {
    a = Array(l);
    for (var u = 0; u < l; u++) a[u] = arguments[u + 2];
    r.children = a;
  }
  return { $$typeof: yi, type: e.type, key: i, ref: o, props: r, _owner: s };
};
F.createContext = function (e) {
  return (
    (e = {
      $$typeof: Jg,
      _currentValue: e,
      _currentValue2: e,
      _threadCount: 0,
      Provider: null,
      Consumer: null,
      _defaultValue: null,
      _globalName: null,
    }),
    (e.Provider = { $$typeof: Zg, _context: e }),
    (e.Consumer = e)
  );
};
F.createElement = Yf;
F.createFactory = function (e) {
  var t = Yf.bind(null, e);
  return ((t.type = e), t);
};
F.createRef = function () {
  return { current: null };
};
F.forwardRef = function (e) {
  return { $$typeof: qg, render: e };
};
F.isValidElement = El;
F.lazy = function (e) {
  return { $$typeof: ny, _payload: { _status: -1, _result: e }, _init: sy };
};
F.memo = function (e, t) {
  return { $$typeof: ty, type: e, compare: t === void 0 ? null : t };
};
F.startTransition = function (e) {
  var t = eo.transition;
  eo.transition = {};
  try {
    e();
  } finally {
    eo.transition = t;
  }
};
F.unstable_act = Qf;
F.useCallback = function (e, t) {
  return Ce.current.useCallback(e, t);
};
F.useContext = function (e) {
  return Ce.current.useContext(e);
};
F.useDebugValue = function () {};
F.useDeferredValue = function (e) {
  return Ce.current.useDeferredValue(e);
};
F.useEffect = function (e, t) {
  return Ce.current.useEffect(e, t);
};
F.useId = function () {
  return Ce.current.useId();
};
F.useImperativeHandle = function (e, t, n) {
  return Ce.current.useImperativeHandle(e, t, n);
};
F.useInsertionEffect = function (e, t) {
  return Ce.current.useInsertionEffect(e, t);
};
F.useLayoutEffect = function (e, t) {
  return Ce.current.useLayoutEffect(e, t);
};
F.useMemo = function (e, t) {
  return Ce.current.useMemo(e, t);
};
F.useReducer = function (e, t, n) {
  return Ce.current.useReducer(e, t, n);
};
F.useRef = function (e) {
  return Ce.current.useRef(e);
};
F.useState = function (e) {
  return Ce.current.useState(e);
};
F.useSyncExternalStore = function (e, t, n) {
  return Ce.current.useSyncExternalStore(e, t, n);
};
F.useTransition = function () {
  return Ce.current.useTransition();
};
F.version = '18.3.1';
$f.exports = F;
var x = $f.exports;
const sa = Kg(x);
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var ly = x,
  uy = Symbol.for('react.element'),
  cy = Symbol.for('react.fragment'),
  dy = Object.prototype.hasOwnProperty,
  fy = ly.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,
  hy = { key: !0, ref: !0, __self: !0, __source: !0 };
function Xf(e, t, n) {
  var r,
    i = {},
    o = null,
    s = null;
  (n !== void 0 && (o = '' + n),
    t.key !== void 0 && (o = '' + t.key),
    t.ref !== void 0 && (s = t.ref));
  for (r in t) dy.call(t, r) && !hy.hasOwnProperty(r) && (i[r] = t[r]);
  if (e && e.defaultProps)
    for (r in ((t = e.defaultProps), t)) i[r] === void 0 && (i[r] = t[r]);
  return {
    $$typeof: uy,
    type: e,
    key: o,
    ref: s,
    props: i,
    _owner: fy.current,
  };
}
Yo.Fragment = cy;
Yo.jsx = Xf;
Yo.jsxs = Xf;
zf.exports = Yo;
var w = zf.exports,
  aa = {},
  Zf = { exports: {} },
  Ie = {},
  Jf = { exports: {} },
  qf = {};
/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ (function (e) {
  function t(L, V) {
    var I = L.length;
    L.push(V);
    e: for (; 0 < I; ) {
      var ee = (I - 1) >>> 1,
        le = L[ee];
      if (0 < i(le, V)) ((L[ee] = V), (L[I] = le), (I = ee));
      else break e;
    }
  }
  function n(L) {
    return L.length === 0 ? null : L[0];
  }
  function r(L) {
    if (L.length === 0) return null;
    var V = L[0],
      I = L.pop();
    if (I !== V) {
      L[0] = I;
      e: for (var ee = 0, le = L.length, Li = le >>> 1; ee < Li; ) {
        var nn = 2 * (ee + 1) - 1,
          ys = L[nn],
          rn = nn + 1,
          Ai = L[rn];
        if (0 > i(ys, I))
          rn < le && 0 > i(Ai, ys)
            ? ((L[ee] = Ai), (L[rn] = I), (ee = rn))
            : ((L[ee] = ys), (L[nn] = I), (ee = nn));
        else if (rn < le && 0 > i(Ai, I))
          ((L[ee] = Ai), (L[rn] = I), (ee = rn));
        else break e;
      }
    }
    return V;
  }
  function i(L, V) {
    var I = L.sortIndex - V.sortIndex;
    return I !== 0 ? I : L.id - V.id;
  }
  if (typeof performance == 'object' && typeof performance.now == 'function') {
    var o = performance;
    e.unstable_now = function () {
      return o.now();
    };
  } else {
    var s = Date,
      a = s.now();
    e.unstable_now = function () {
      return s.now() - a;
    };
  }
  var l = [],
    u = [],
    c = 1,
    d = null,
    f = 3,
    g = !1,
    v = !1,
    y = !1,
    S = typeof setTimeout == 'function' ? setTimeout : null,
    p = typeof clearTimeout == 'function' ? clearTimeout : null,
    h = typeof setImmediate < 'u' ? setImmediate : null;
  typeof navigator < 'u' &&
    navigator.scheduling !== void 0 &&
    navigator.scheduling.isInputPending !== void 0 &&
    navigator.scheduling.isInputPending.bind(navigator.scheduling);
  function m(L) {
    for (var V = n(u); V !== null; ) {
      if (V.callback === null) r(u);
      else if (V.startTime <= L)
        (r(u), (V.sortIndex = V.expirationTime), t(l, V));
      else break;
      V = n(u);
    }
  }
  function k(L) {
    if (((y = !1), m(L), !v))
      if (n(l) !== null) ((v = !0), En(C));
      else {
        var V = n(u);
        V !== null && B(k, V.startTime - L);
      }
  }
  function C(L, V) {
    ((v = !1), y && ((y = !1), p(E), (E = -1)), (g = !0));
    var I = f;
    try {
      for (
        m(V), d = n(l);
        d !== null && (!(d.expirationTime > V) || (L && !D()));

      ) {
        var ee = d.callback;
        if (typeof ee == 'function') {
          ((d.callback = null), (f = d.priorityLevel));
          var le = ee(d.expirationTime <= V);
          ((V = e.unstable_now()),
            typeof le == 'function' ? (d.callback = le) : d === n(l) && r(l),
            m(V));
        } else r(l);
        d = n(l);
      }
      if (d !== null) var Li = !0;
      else {
        var nn = n(u);
        (nn !== null && B(k, nn.startTime - V), (Li = !1));
      }
      return Li;
    } finally {
      ((d = null), (f = I), (g = !1));
    }
  }
  var T = !1,
    R = null,
    E = -1,
    N = 5,
    P = -1;
  function D() {
    return !(e.unstable_now() - P < N);
  }
  function G() {
    if (R !== null) {
      var L = e.unstable_now();
      P = L;
      var V = !0;
      try {
        V = R(!0, L);
      } finally {
        V ? oe() : ((T = !1), (R = null));
      }
    } else T = !1;
  }
  var oe;
  if (typeof h == 'function')
    oe = function () {
      h(G);
    };
  else if (typeof MessageChannel < 'u') {
    var Rt = new MessageChannel(),
      Mi = Rt.port2;
    ((Rt.port1.onmessage = G),
      (oe = function () {
        Mi.postMessage(null);
      }));
  } else
    oe = function () {
      S(G, 0);
    };
  function En(L) {
    ((R = L), T || ((T = !0), oe()));
  }
  function B(L, V) {
    E = S(function () {
      L(e.unstable_now());
    }, V);
  }
  ((e.unstable_IdlePriority = 5),
    (e.unstable_ImmediatePriority = 1),
    (e.unstable_LowPriority = 4),
    (e.unstable_NormalPriority = 3),
    (e.unstable_Profiling = null),
    (e.unstable_UserBlockingPriority = 2),
    (e.unstable_cancelCallback = function (L) {
      L.callback = null;
    }),
    (e.unstable_continueExecution = function () {
      v || g || ((v = !0), En(C));
    }),
    (e.unstable_forceFrameRate = function (L) {
      0 > L || 125 < L
        ? console.error(
            'forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported'
          )
        : (N = 0 < L ? Math.floor(1e3 / L) : 5);
    }),
    (e.unstable_getCurrentPriorityLevel = function () {
      return f;
    }),
    (e.unstable_getFirstCallbackNode = function () {
      return n(l);
    }),
    (e.unstable_next = function (L) {
      switch (f) {
        case 1:
        case 2:
        case 3:
          var V = 3;
          break;
        default:
          V = f;
      }
      var I = f;
      f = V;
      try {
        return L();
      } finally {
        f = I;
      }
    }),
    (e.unstable_pauseExecution = function () {}),
    (e.unstable_requestPaint = function () {}),
    (e.unstable_runWithPriority = function (L, V) {
      switch (L) {
        case 1:
        case 2:
        case 3:
        case 4:
        case 5:
          break;
        default:
          L = 3;
      }
      var I = f;
      f = L;
      try {
        return V();
      } finally {
        f = I;
      }
    }),
    (e.unstable_scheduleCallback = function (L, V, I) {
      var ee = e.unstable_now();
      switch (
        (typeof I == 'object' && I !== null
          ? ((I = I.delay), (I = typeof I == 'number' && 0 < I ? ee + I : ee))
          : (I = ee),
        L)
      ) {
        case 1:
          var le = -1;
          break;
        case 2:
          le = 250;
          break;
        case 5:
          le = 1073741823;
          break;
        case 4:
          le = 1e4;
          break;
        default:
          le = 5e3;
      }
      return (
        (le = I + le),
        (L = {
          id: c++,
          callback: V,
          priorityLevel: L,
          startTime: I,
          expirationTime: le,
          sortIndex: -1,
        }),
        I > ee
          ? ((L.sortIndex = I),
            t(u, L),
            n(l) === null &&
              L === n(u) &&
              (y ? (p(E), (E = -1)) : (y = !0), B(k, I - ee)))
          : ((L.sortIndex = le), t(l, L), v || g || ((v = !0), En(C))),
        L
      );
    }),
    (e.unstable_shouldYield = D),
    (e.unstable_wrapCallback = function (L) {
      var V = f;
      return function () {
        var I = f;
        f = V;
        try {
          return L.apply(this, arguments);
        } finally {
          f = I;
        }
      };
    }));
})(qf);
Jf.exports = qf;
var py = Jf.exports;
/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var my = x,
  Ve = py;
function M(e) {
  for (
    var t = 'https://reactjs.org/docs/error-decoder.html?invariant=' + e, n = 1;
    n < arguments.length;
    n++
  )
    t += '&args[]=' + encodeURIComponent(arguments[n]);
  return (
    'Minified React error #' +
    e +
    '; visit ' +
    t +
    ' for the full message or use the non-minified dev environment for full errors and additional helpful warnings.'
  );
}
var eh = new Set(),
  Kr = {};
function Cn(e, t) {
  (Zn(e, t), Zn(e + 'Capture', t));
}
function Zn(e, t) {
  for (Kr[e] = t, e = 0; e < t.length; e++) eh.add(t[e]);
}
var wt = !(
    typeof window > 'u' ||
    typeof window.document > 'u' ||
    typeof window.document.createElement > 'u'
  ),
  la = Object.prototype.hasOwnProperty,
  gy =
    /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,
  lc = {},
  uc = {};
function yy(e) {
  return la.call(uc, e)
    ? !0
    : la.call(lc, e)
      ? !1
      : gy.test(e)
        ? (uc[e] = !0)
        : ((lc[e] = !0), !1);
}
function vy(e, t, n, r) {
  if (n !== null && n.type === 0) return !1;
  switch (typeof t) {
    case 'function':
    case 'symbol':
      return !0;
    case 'boolean':
      return r
        ? !1
        : n !== null
          ? !n.acceptsBooleans
          : ((e = e.toLowerCase().slice(0, 5)), e !== 'data-' && e !== 'aria-');
    default:
      return !1;
  }
}
function wy(e, t, n, r) {
  if (t === null || typeof t > 'u' || vy(e, t, n, r)) return !0;
  if (r) return !1;
  if (n !== null)
    switch (n.type) {
      case 3:
        return !t;
      case 4:
        return t === !1;
      case 5:
        return isNaN(t);
      case 6:
        return isNaN(t) || 1 > t;
    }
  return !1;
}
function Pe(e, t, n, r, i, o, s) {
  ((this.acceptsBooleans = t === 2 || t === 3 || t === 4),
    (this.attributeName = r),
    (this.attributeNamespace = i),
    (this.mustUseProperty = n),
    (this.propertyName = e),
    (this.type = t),
    (this.sanitizeURL = o),
    (this.removeEmptyString = s));
}
var pe = {};
'children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style'
  .split(' ')
  .forEach(function (e) {
    pe[e] = new Pe(e, 0, !1, e, null, !1, !1);
  });
[
  ['acceptCharset', 'accept-charset'],
  ['className', 'class'],
  ['htmlFor', 'for'],
  ['httpEquiv', 'http-equiv'],
].forEach(function (e) {
  var t = e[0];
  pe[t] = new Pe(t, 1, !1, e[1], null, !1, !1);
});
['contentEditable', 'draggable', 'spellCheck', 'value'].forEach(function (e) {
  pe[e] = new Pe(e, 2, !1, e.toLowerCase(), null, !1, !1);
});
[
  'autoReverse',
  'externalResourcesRequired',
  'focusable',
  'preserveAlpha',
].forEach(function (e) {
  pe[e] = new Pe(e, 2, !1, e, null, !1, !1);
});
'allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope'
  .split(' ')
  .forEach(function (e) {
    pe[e] = new Pe(e, 3, !1, e.toLowerCase(), null, !1, !1);
  });
['checked', 'multiple', 'muted', 'selected'].forEach(function (e) {
  pe[e] = new Pe(e, 3, !0, e, null, !1, !1);
});
['capture', 'download'].forEach(function (e) {
  pe[e] = new Pe(e, 4, !1, e, null, !1, !1);
});
['cols', 'rows', 'size', 'span'].forEach(function (e) {
  pe[e] = new Pe(e, 6, !1, e, null, !1, !1);
});
['rowSpan', 'start'].forEach(function (e) {
  pe[e] = new Pe(e, 5, !1, e.toLowerCase(), null, !1, !1);
});
var Rl = /[\-:]([a-z])/g;
function Ml(e) {
  return e[1].toUpperCase();
}
'accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height'
  .split(' ')
  .forEach(function (e) {
    var t = e.replace(Rl, Ml);
    pe[t] = new Pe(t, 1, !1, e, null, !1, !1);
  });
'xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type'
  .split(' ')
  .forEach(function (e) {
    var t = e.replace(Rl, Ml);
    pe[t] = new Pe(t, 1, !1, e, 'http://www.w3.org/1999/xlink', !1, !1);
  });
['xml:base', 'xml:lang', 'xml:space'].forEach(function (e) {
  var t = e.replace(Rl, Ml);
  pe[t] = new Pe(t, 1, !1, e, 'http://www.w3.org/XML/1998/namespace', !1, !1);
});
['tabIndex', 'crossOrigin'].forEach(function (e) {
  pe[e] = new Pe(e, 1, !1, e.toLowerCase(), null, !1, !1);
});
pe.xlinkHref = new Pe(
  'xlinkHref',
  1,
  !1,
  'xlink:href',
  'http://www.w3.org/1999/xlink',
  !0,
  !1
);
['src', 'href', 'action', 'formAction'].forEach(function (e) {
  pe[e] = new Pe(e, 1, !1, e.toLowerCase(), null, !0, !0);
});
function Ll(e, t, n, r) {
  var i = pe.hasOwnProperty(t) ? pe[t] : null;
  (i !== null
    ? i.type !== 0
    : r ||
      !(2 < t.length) ||
      (t[0] !== 'o' && t[0] !== 'O') ||
      (t[1] !== 'n' && t[1] !== 'N')) &&
    (wy(t, n, i, r) && (n = null),
    r || i === null
      ? yy(t) && (n === null ? e.removeAttribute(t) : e.setAttribute(t, '' + n))
      : i.mustUseProperty
        ? (e[i.propertyName] = n === null ? (i.type === 3 ? !1 : '') : n)
        : ((t = i.attributeName),
          (r = i.attributeNamespace),
          n === null
            ? e.removeAttribute(t)
            : ((i = i.type),
              (n = i === 3 || (i === 4 && n === !0) ? '' : '' + n),
              r ? e.setAttributeNS(r, t, n) : e.setAttribute(t, n))));
}
var Et = my.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,
  ji = Symbol.for('react.element'),
  Mn = Symbol.for('react.portal'),
  Ln = Symbol.for('react.fragment'),
  Al = Symbol.for('react.strict_mode'),
  ua = Symbol.for('react.profiler'),
  th = Symbol.for('react.provider'),
  nh = Symbol.for('react.context'),
  Nl = Symbol.for('react.forward_ref'),
  ca = Symbol.for('react.suspense'),
  da = Symbol.for('react.suspense_list'),
  jl = Symbol.for('react.memo'),
  Nt = Symbol.for('react.lazy'),
  rh = Symbol.for('react.offscreen'),
  cc = Symbol.iterator;
function mr(e) {
  return e === null || typeof e != 'object'
    ? null
    : ((e = (cc && e[cc]) || e['@@iterator']),
      typeof e == 'function' ? e : null);
}
var Z = Object.assign,
  ws;
function Tr(e) {
  if (ws === void 0)
    try {
      throw Error();
    } catch (n) {
      var t = n.stack.trim().match(/\n( *(at )?)/);
      ws = (t && t[1]) || '';
    }
  return (
    `
` +
    ws +
    e
  );
}
var xs = !1;
function Ss(e, t) {
  if (!e || xs) return '';
  xs = !0;
  var n = Error.prepareStackTrace;
  Error.prepareStackTrace = void 0;
  try {
    if (t)
      if (
        ((t = function () {
          throw Error();
        }),
        Object.defineProperty(t.prototype, 'props', {
          set: function () {
            throw Error();
          },
        }),
        typeof Reflect == 'object' && Reflect.construct)
      ) {
        try {
          Reflect.construct(t, []);
        } catch (u) {
          var r = u;
        }
        Reflect.construct(e, [], t);
      } else {
        try {
          t.call();
        } catch (u) {
          r = u;
        }
        e.call(t.prototype);
      }
    else {
      try {
        throw Error();
      } catch (u) {
        r = u;
      }
      e();
    }
  } catch (u) {
    if (u && r && typeof u.stack == 'string') {
      for (
        var i = u.stack.split(`
`),
          o = r.stack.split(`
`),
          s = i.length - 1,
          a = o.length - 1;
        1 <= s && 0 <= a && i[s] !== o[a];

      )
        a--;
      for (; 1 <= s && 0 <= a; s--, a--)
        if (i[s] !== o[a]) {
          if (s !== 1 || a !== 1)
            do
              if ((s--, a--, 0 > a || i[s] !== o[a])) {
                var l =
                  `
` + i[s].replace(' at new ', ' at ');
                return (
                  e.displayName &&
                    l.includes('<anonymous>') &&
                    (l = l.replace('<anonymous>', e.displayName)),
                  l
                );
              }
            while (1 <= s && 0 <= a);
          break;
        }
    }
  } finally {
    ((xs = !1), (Error.prepareStackTrace = n));
  }
  return (e = e ? e.displayName || e.name : '') ? Tr(e) : '';
}
function xy(e) {
  switch (e.tag) {
    case 5:
      return Tr(e.type);
    case 16:
      return Tr('Lazy');
    case 13:
      return Tr('Suspense');
    case 19:
      return Tr('SuspenseList');
    case 0:
    case 2:
    case 15:
      return ((e = Ss(e.type, !1)), e);
    case 11:
      return ((e = Ss(e.type.render, !1)), e);
    case 1:
      return ((e = Ss(e.type, !0)), e);
    default:
      return '';
  }
}
function fa(e) {
  if (e == null) return null;
  if (typeof e == 'function') return e.displayName || e.name || null;
  if (typeof e == 'string') return e;
  switch (e) {
    case Ln:
      return 'Fragment';
    case Mn:
      return 'Portal';
    case ua:
      return 'Profiler';
    case Al:
      return 'StrictMode';
    case ca:
      return 'Suspense';
    case da:
      return 'SuspenseList';
  }
  if (typeof e == 'object')
    switch (e.$$typeof) {
      case nh:
        return (e.displayName || 'Context') + '.Consumer';
      case th:
        return (e._context.displayName || 'Context') + '.Provider';
      case Nl:
        var t = e.render;
        return (
          (e = e.displayName),
          e ||
            ((e = t.displayName || t.name || ''),
            (e = e !== '' ? 'ForwardRef(' + e + ')' : 'ForwardRef')),
          e
        );
      case jl:
        return (
          (t = e.displayName || null),
          t !== null ? t : fa(e.type) || 'Memo'
        );
      case Nt:
        ((t = e._payload), (e = e._init));
        try {
          return fa(e(t));
        } catch {}
    }
  return null;
}
function Sy(e) {
  var t = e.type;
  switch (e.tag) {
    case 24:
      return 'Cache';
    case 9:
      return (t.displayName || 'Context') + '.Consumer';
    case 10:
      return (t._context.displayName || 'Context') + '.Provider';
    case 18:
      return 'DehydratedFragment';
    case 11:
      return (
        (e = t.render),
        (e = e.displayName || e.name || ''),
        t.displayName || (e !== '' ? 'ForwardRef(' + e + ')' : 'ForwardRef')
      );
    case 7:
      return 'Fragment';
    case 5:
      return t;
    case 4:
      return 'Portal';
    case 3:
      return 'Root';
    case 6:
      return 'Text';
    case 16:
      return fa(t);
    case 8:
      return t === Al ? 'StrictMode' : 'Mode';
    case 22:
      return 'Offscreen';
    case 12:
      return 'Profiler';
    case 21:
      return 'Scope';
    case 13:
      return 'Suspense';
    case 19:
      return 'SuspenseList';
    case 25:
      return 'TracingMarker';
    case 1:
    case 0:
    case 17:
    case 2:
    case 14:
    case 15:
      if (typeof t == 'function') return t.displayName || t.name || null;
      if (typeof t == 'string') return t;
  }
  return null;
}
function Kt(e) {
  switch (typeof e) {
    case 'boolean':
    case 'number':
    case 'string':
    case 'undefined':
      return e;
    case 'object':
      return e;
    default:
      return '';
  }
}
function ih(e) {
  var t = e.type;
  return (
    (e = e.nodeName) &&
    e.toLowerCase() === 'input' &&
    (t === 'checkbox' || t === 'radio')
  );
}
function ky(e) {
  var t = ih(e) ? 'checked' : 'value',
    n = Object.getOwnPropertyDescriptor(e.constructor.prototype, t),
    r = '' + e[t];
  if (
    !e.hasOwnProperty(t) &&
    typeof n < 'u' &&
    typeof n.get == 'function' &&
    typeof n.set == 'function'
  ) {
    var i = n.get,
      o = n.set;
    return (
      Object.defineProperty(e, t, {
        configurable: !0,
        get: function () {
          return i.call(this);
        },
        set: function (s) {
          ((r = '' + s), o.call(this, s));
        },
      }),
      Object.defineProperty(e, t, { enumerable: n.enumerable }),
      {
        getValue: function () {
          return r;
        },
        setValue: function (s) {
          r = '' + s;
        },
        stopTracking: function () {
          ((e._valueTracker = null), delete e[t]);
        },
      }
    );
  }
}
function Di(e) {
  e._valueTracker || (e._valueTracker = ky(e));
}
function oh(e) {
  if (!e) return !1;
  var t = e._valueTracker;
  if (!t) return !0;
  var n = t.getValue(),
    r = '';
  return (
    e && (r = ih(e) ? (e.checked ? 'true' : 'false') : e.value),
    (e = r),
    e !== n ? (t.setValue(e), !0) : !1
  );
}
function vo(e) {
  if (((e = e || (typeof document < 'u' ? document : void 0)), typeof e > 'u'))
    return null;
  try {
    return e.activeElement || e.body;
  } catch {
    return e.body;
  }
}
function ha(e, t) {
  var n = t.checked;
  return Z({}, t, {
    defaultChecked: void 0,
    defaultValue: void 0,
    value: void 0,
    checked: n ?? e._wrapperState.initialChecked,
  });
}
function dc(e, t) {
  var n = t.defaultValue == null ? '' : t.defaultValue,
    r = t.checked != null ? t.checked : t.defaultChecked;
  ((n = Kt(t.value != null ? t.value : n)),
    (e._wrapperState = {
      initialChecked: r,
      initialValue: n,
      controlled:
        t.type === 'checkbox' || t.type === 'radio'
          ? t.checked != null
          : t.value != null,
    }));
}
function sh(e, t) {
  ((t = t.checked), t != null && Ll(e, 'checked', t, !1));
}
function pa(e, t) {
  sh(e, t);
  var n = Kt(t.value),
    r = t.type;
  if (n != null)
    r === 'number'
      ? ((n === 0 && e.value === '') || e.value != n) && (e.value = '' + n)
      : e.value !== '' + n && (e.value = '' + n);
  else if (r === 'submit' || r === 'reset') {
    e.removeAttribute('value');
    return;
  }
  (t.hasOwnProperty('value')
    ? ma(e, t.type, n)
    : t.hasOwnProperty('defaultValue') && ma(e, t.type, Kt(t.defaultValue)),
    t.checked == null &&
      t.defaultChecked != null &&
      (e.defaultChecked = !!t.defaultChecked));
}
function fc(e, t, n) {
  if (t.hasOwnProperty('value') || t.hasOwnProperty('defaultValue')) {
    var r = t.type;
    if (
      !(
        (r !== 'submit' && r !== 'reset') ||
        (t.value !== void 0 && t.value !== null)
      )
    )
      return;
    ((t = '' + e._wrapperState.initialValue),
      n || t === e.value || (e.value = t),
      (e.defaultValue = t));
  }
  ((n = e.name),
    n !== '' && (e.name = ''),
    (e.defaultChecked = !!e._wrapperState.initialChecked),
    n !== '' && (e.name = n));
}
function ma(e, t, n) {
  (t !== 'number' || vo(e.ownerDocument) !== e) &&
    (n == null
      ? (e.defaultValue = '' + e._wrapperState.initialValue)
      : e.defaultValue !== '' + n && (e.defaultValue = '' + n));
}
var Er = Array.isArray;
function Hn(e, t, n, r) {
  if (((e = e.options), t)) {
    t = {};
    for (var i = 0; i < n.length; i++) t['$' + n[i]] = !0;
    for (n = 0; n < e.length; n++)
      ((i = t.hasOwnProperty('$' + e[n].value)),
        e[n].selected !== i && (e[n].selected = i),
        i && r && (e[n].defaultSelected = !0));
  } else {
    for (n = '' + Kt(n), t = null, i = 0; i < e.length; i++) {
      if (e[i].value === n) {
        ((e[i].selected = !0), r && (e[i].defaultSelected = !0));
        return;
      }
      t !== null || e[i].disabled || (t = e[i]);
    }
    t !== null && (t.selected = !0);
  }
}
function ga(e, t) {
  if (t.dangerouslySetInnerHTML != null) throw Error(M(91));
  return Z({}, t, {
    value: void 0,
    defaultValue: void 0,
    children: '' + e._wrapperState.initialValue,
  });
}
function hc(e, t) {
  var n = t.value;
  if (n == null) {
    if (((n = t.children), (t = t.defaultValue), n != null)) {
      if (t != null) throw Error(M(92));
      if (Er(n)) {
        if (1 < n.length) throw Error(M(93));
        n = n[0];
      }
      t = n;
    }
    (t == null && (t = ''), (n = t));
  }
  e._wrapperState = { initialValue: Kt(n) };
}
function ah(e, t) {
  var n = Kt(t.value),
    r = Kt(t.defaultValue);
  (n != null &&
    ((n = '' + n),
    n !== e.value && (e.value = n),
    t.defaultValue == null && e.defaultValue !== n && (e.defaultValue = n)),
    r != null && (e.defaultValue = '' + r));
}
function pc(e) {
  var t = e.textContent;
  t === e._wrapperState.initialValue && t !== '' && t !== null && (e.value = t);
}
function lh(e) {
  switch (e) {
    case 'svg':
      return 'http://www.w3.org/2000/svg';
    case 'math':
      return 'http://www.w3.org/1998/Math/MathML';
    default:
      return 'http://www.w3.org/1999/xhtml';
  }
}
function ya(e, t) {
  return e == null || e === 'http://www.w3.org/1999/xhtml'
    ? lh(t)
    : e === 'http://www.w3.org/2000/svg' && t === 'foreignObject'
      ? 'http://www.w3.org/1999/xhtml'
      : e;
}
var Vi,
  uh = (function (e) {
    return typeof MSApp < 'u' && MSApp.execUnsafeLocalFunction
      ? function (t, n, r, i) {
          MSApp.execUnsafeLocalFunction(function () {
            return e(t, n, r, i);
          });
        }
      : e;
  })(function (e, t) {
    if (e.namespaceURI !== 'http://www.w3.org/2000/svg' || 'innerHTML' in e)
      e.innerHTML = t;
    else {
      for (
        Vi = Vi || document.createElement('div'),
          Vi.innerHTML = '<svg>' + t.valueOf().toString() + '</svg>',
          t = Vi.firstChild;
        e.firstChild;

      )
        e.removeChild(e.firstChild);
      for (; t.firstChild; ) e.appendChild(t.firstChild);
    }
  });
function Gr(e, t) {
  if (t) {
    var n = e.firstChild;
    if (n && n === e.lastChild && n.nodeType === 3) {
      n.nodeValue = t;
      return;
    }
  }
  e.textContent = t;
}
var jr = {
    animationIterationCount: !0,
    aspectRatio: !0,
    borderImageOutset: !0,
    borderImageSlice: !0,
    borderImageWidth: !0,
    boxFlex: !0,
    boxFlexGroup: !0,
    boxOrdinalGroup: !0,
    columnCount: !0,
    columns: !0,
    flex: !0,
    flexGrow: !0,
    flexPositive: !0,
    flexShrink: !0,
    flexNegative: !0,
    flexOrder: !0,
    gridArea: !0,
    gridRow: !0,
    gridRowEnd: !0,
    gridRowSpan: !0,
    gridRowStart: !0,
    gridColumn: !0,
    gridColumnEnd: !0,
    gridColumnSpan: !0,
    gridColumnStart: !0,
    fontWeight: !0,
    lineClamp: !0,
    lineHeight: !0,
    opacity: !0,
    order: !0,
    orphans: !0,
    tabSize: !0,
    widows: !0,
    zIndex: !0,
    zoom: !0,
    fillOpacity: !0,
    floodOpacity: !0,
    stopOpacity: !0,
    strokeDasharray: !0,
    strokeDashoffset: !0,
    strokeMiterlimit: !0,
    strokeOpacity: !0,
    strokeWidth: !0,
  },
  Cy = ['Webkit', 'ms', 'Moz', 'O'];
Object.keys(jr).forEach(function (e) {
  Cy.forEach(function (t) {
    ((t = t + e.charAt(0).toUpperCase() + e.substring(1)), (jr[t] = jr[e]));
  });
});
function ch(e, t, n) {
  return t == null || typeof t == 'boolean' || t === ''
    ? ''
    : n || typeof t != 'number' || t === 0 || (jr.hasOwnProperty(e) && jr[e])
      ? ('' + t).trim()
      : t + 'px';
}
function dh(e, t) {
  e = e.style;
  for (var n in t)
    if (t.hasOwnProperty(n)) {
      var r = n.indexOf('--') === 0,
        i = ch(n, t[n], r);
      (n === 'float' && (n = 'cssFloat'), r ? e.setProperty(n, i) : (e[n] = i));
    }
}
var Py = Z(
  { menuitem: !0 },
  {
    area: !0,
    base: !0,
    br: !0,
    col: !0,
    embed: !0,
    hr: !0,
    img: !0,
    input: !0,
    keygen: !0,
    link: !0,
    meta: !0,
    param: !0,
    source: !0,
    track: !0,
    wbr: !0,
  }
);
function va(e, t) {
  if (t) {
    if (Py[e] && (t.children != null || t.dangerouslySetInnerHTML != null))
      throw Error(M(137, e));
    if (t.dangerouslySetInnerHTML != null) {
      if (t.children != null) throw Error(M(60));
      if (
        typeof t.dangerouslySetInnerHTML != 'object' ||
        !('__html' in t.dangerouslySetInnerHTML)
      )
        throw Error(M(61));
    }
    if (t.style != null && typeof t.style != 'object') throw Error(M(62));
  }
}
function wa(e, t) {
  if (e.indexOf('-') === -1) return typeof t.is == 'string';
  switch (e) {
    case 'annotation-xml':
    case 'color-profile':
    case 'font-face':
    case 'font-face-src':
    case 'font-face-uri':
    case 'font-face-format':
    case 'font-face-name':
    case 'missing-glyph':
      return !1;
    default:
      return !0;
  }
}
var xa = null;
function Dl(e) {
  return (
    (e = e.target || e.srcElement || window),
    e.correspondingUseElement && (e = e.correspondingUseElement),
    e.nodeType === 3 ? e.parentNode : e
  );
}
var Sa = null,
  Kn = null,
  Gn = null;
function mc(e) {
  if ((e = xi(e))) {
    if (typeof Sa != 'function') throw Error(M(280));
    var t = e.stateNode;
    t && ((t = qo(t)), Sa(e.stateNode, e.type, t));
  }
}
function fh(e) {
  Kn ? (Gn ? Gn.push(e) : (Gn = [e])) : (Kn = e);
}
function hh() {
  if (Kn) {
    var e = Kn,
      t = Gn;
    if (((Gn = Kn = null), mc(e), t)) for (e = 0; e < t.length; e++) mc(t[e]);
  }
}
function ph(e, t) {
  return e(t);
}
function mh() {}
var ks = !1;
function gh(e, t, n) {
  if (ks) return e(t, n);
  ks = !0;
  try {
    return ph(e, t, n);
  } finally {
    ((ks = !1), (Kn !== null || Gn !== null) && (mh(), hh()));
  }
}
function Yr(e, t) {
  var n = e.stateNode;
  if (n === null) return null;
  var r = qo(n);
  if (r === null) return null;
  n = r[t];
  e: switch (t) {
    case 'onClick':
    case 'onClickCapture':
    case 'onDoubleClick':
    case 'onDoubleClickCapture':
    case 'onMouseDown':
    case 'onMouseDownCapture':
    case 'onMouseMove':
    case 'onMouseMoveCapture':
    case 'onMouseUp':
    case 'onMouseUpCapture':
    case 'onMouseEnter':
      ((r = !r.disabled) ||
        ((e = e.type),
        (r = !(
          e === 'button' ||
          e === 'input' ||
          e === 'select' ||
          e === 'textarea'
        ))),
        (e = !r));
      break e;
    default:
      e = !1;
  }
  if (e) return null;
  if (n && typeof n != 'function') throw Error(M(231, t, typeof n));
  return n;
}
var ka = !1;
if (wt)
  try {
    var gr = {};
    (Object.defineProperty(gr, 'passive', {
      get: function () {
        ka = !0;
      },
    }),
      window.addEventListener('test', gr, gr),
      window.removeEventListener('test', gr, gr));
  } catch {
    ka = !1;
  }
function Ty(e, t, n, r, i, o, s, a, l) {
  var u = Array.prototype.slice.call(arguments, 3);
  try {
    t.apply(n, u);
  } catch (c) {
    this.onError(c);
  }
}
var Dr = !1,
  wo = null,
  xo = !1,
  Ca = null,
  Ey = {
    onError: function (e) {
      ((Dr = !0), (wo = e));
    },
  };
function Ry(e, t, n, r, i, o, s, a, l) {
  ((Dr = !1), (wo = null), Ty.apply(Ey, arguments));
}
function My(e, t, n, r, i, o, s, a, l) {
  if ((Ry.apply(this, arguments), Dr)) {
    if (Dr) {
      var u = wo;
      ((Dr = !1), (wo = null));
    } else throw Error(M(198));
    xo || ((xo = !0), (Ca = u));
  }
}
function Pn(e) {
  var t = e,
    n = e;
  if (e.alternate) for (; t.return; ) t = t.return;
  else {
    e = t;
    do ((t = e), t.flags & 4098 && (n = t.return), (e = t.return));
    while (e);
  }
  return t.tag === 3 ? n : null;
}
function yh(e) {
  if (e.tag === 13) {
    var t = e.memoizedState;
    if (
      (t === null && ((e = e.alternate), e !== null && (t = e.memoizedState)),
      t !== null)
    )
      return t.dehydrated;
  }
  return null;
}
function gc(e) {
  if (Pn(e) !== e) throw Error(M(188));
}
function Ly(e) {
  var t = e.alternate;
  if (!t) {
    if (((t = Pn(e)), t === null)) throw Error(M(188));
    return t !== e ? null : e;
  }
  for (var n = e, r = t; ; ) {
    var i = n.return;
    if (i === null) break;
    var o = i.alternate;
    if (o === null) {
      if (((r = i.return), r !== null)) {
        n = r;
        continue;
      }
      break;
    }
    if (i.child === o.child) {
      for (o = i.child; o; ) {
        if (o === n) return (gc(i), e);
        if (o === r) return (gc(i), t);
        o = o.sibling;
      }
      throw Error(M(188));
    }
    if (n.return !== r.return) ((n = i), (r = o));
    else {
      for (var s = !1, a = i.child; a; ) {
        if (a === n) {
          ((s = !0), (n = i), (r = o));
          break;
        }
        if (a === r) {
          ((s = !0), (r = i), (n = o));
          break;
        }
        a = a.sibling;
      }
      if (!s) {
        for (a = o.child; a; ) {
          if (a === n) {
            ((s = !0), (n = o), (r = i));
            break;
          }
          if (a === r) {
            ((s = !0), (r = o), (n = i));
            break;
          }
          a = a.sibling;
        }
        if (!s) throw Error(M(189));
      }
    }
    if (n.alternate !== r) throw Error(M(190));
  }
  if (n.tag !== 3) throw Error(M(188));
  return n.stateNode.current === n ? e : t;
}
function vh(e) {
  return ((e = Ly(e)), e !== null ? wh(e) : null);
}
function wh(e) {
  if (e.tag === 5 || e.tag === 6) return e;
  for (e = e.child; e !== null; ) {
    var t = wh(e);
    if (t !== null) return t;
    e = e.sibling;
  }
  return null;
}
var xh = Ve.unstable_scheduleCallback,
  yc = Ve.unstable_cancelCallback,
  Ay = Ve.unstable_shouldYield,
  Ny = Ve.unstable_requestPaint,
  ne = Ve.unstable_now,
  jy = Ve.unstable_getCurrentPriorityLevel,
  Vl = Ve.unstable_ImmediatePriority,
  Sh = Ve.unstable_UserBlockingPriority,
  So = Ve.unstable_NormalPriority,
  Dy = Ve.unstable_LowPriority,
  kh = Ve.unstable_IdlePriority,
  Qo = null,
  ot = null;
function Vy(e) {
  if (ot && typeof ot.onCommitFiberRoot == 'function')
    try {
      ot.onCommitFiberRoot(Qo, e, void 0, (e.current.flags & 128) === 128);
    } catch {}
}
var Je = Math.clz32 ? Math.clz32 : _y,
  Iy = Math.log,
  Fy = Math.LN2;
function _y(e) {
  return ((e >>>= 0), e === 0 ? 32 : (31 - ((Iy(e) / Fy) | 0)) | 0);
}
var Ii = 64,
  Fi = 4194304;
function Rr(e) {
  switch (e & -e) {
    case 1:
      return 1;
    case 2:
      return 2;
    case 4:
      return 4;
    case 8:
      return 8;
    case 16:
      return 16;
    case 32:
      return 32;
    case 64:
    case 128:
    case 256:
    case 512:
    case 1024:
    case 2048:
    case 4096:
    case 8192:
    case 16384:
    case 32768:
    case 65536:
    case 131072:
    case 262144:
    case 524288:
    case 1048576:
    case 2097152:
      return e & 4194240;
    case 4194304:
    case 8388608:
    case 16777216:
    case 33554432:
    case 67108864:
      return e & 130023424;
    case 134217728:
      return 134217728;
    case 268435456:
      return 268435456;
    case 536870912:
      return 536870912;
    case 1073741824:
      return 1073741824;
    default:
      return e;
  }
}
function ko(e, t) {
  var n = e.pendingLanes;
  if (n === 0) return 0;
  var r = 0,
    i = e.suspendedLanes,
    o = e.pingedLanes,
    s = n & 268435455;
  if (s !== 0) {
    var a = s & ~i;
    a !== 0 ? (r = Rr(a)) : ((o &= s), o !== 0 && (r = Rr(o)));
  } else ((s = n & ~i), s !== 0 ? (r = Rr(s)) : o !== 0 && (r = Rr(o)));
  if (r === 0) return 0;
  if (
    t !== 0 &&
    t !== r &&
    !(t & i) &&
    ((i = r & -r), (o = t & -t), i >= o || (i === 16 && (o & 4194240) !== 0))
  )
    return t;
  if ((r & 4 && (r |= n & 16), (t = e.entangledLanes), t !== 0))
    for (e = e.entanglements, t &= r; 0 < t; )
      ((n = 31 - Je(t)), (i = 1 << n), (r |= e[n]), (t &= ~i));
  return r;
}
function Oy(e, t) {
  switch (e) {
    case 1:
    case 2:
    case 4:
      return t + 250;
    case 8:
    case 16:
    case 32:
    case 64:
    case 128:
    case 256:
    case 512:
    case 1024:
    case 2048:
    case 4096:
    case 8192:
    case 16384:
    case 32768:
    case 65536:
    case 131072:
    case 262144:
    case 524288:
    case 1048576:
    case 2097152:
      return t + 5e3;
    case 4194304:
    case 8388608:
    case 16777216:
    case 33554432:
    case 67108864:
      return -1;
    case 134217728:
    case 268435456:
    case 536870912:
    case 1073741824:
      return -1;
    default:
      return -1;
  }
}
function By(e, t) {
  for (
    var n = e.suspendedLanes,
      r = e.pingedLanes,
      i = e.expirationTimes,
      o = e.pendingLanes;
    0 < o;

  ) {
    var s = 31 - Je(o),
      a = 1 << s,
      l = i[s];
    (l === -1
      ? (!(a & n) || a & r) && (i[s] = Oy(a, t))
      : l <= t && (e.expiredLanes |= a),
      (o &= ~a));
  }
}
function Pa(e) {
  return (
    (e = e.pendingLanes & -1073741825),
    e !== 0 ? e : e & 1073741824 ? 1073741824 : 0
  );
}
function Ch() {
  var e = Ii;
  return ((Ii <<= 1), !(Ii & 4194240) && (Ii = 64), e);
}
function Cs(e) {
  for (var t = [], n = 0; 31 > n; n++) t.push(e);
  return t;
}
function vi(e, t, n) {
  ((e.pendingLanes |= t),
    t !== 536870912 && ((e.suspendedLanes = 0), (e.pingedLanes = 0)),
    (e = e.eventTimes),
    (t = 31 - Je(t)),
    (e[t] = n));
}
function zy(e, t) {
  var n = e.pendingLanes & ~t;
  ((e.pendingLanes = t),
    (e.suspendedLanes = 0),
    (e.pingedLanes = 0),
    (e.expiredLanes &= t),
    (e.mutableReadLanes &= t),
    (e.entangledLanes &= t),
    (t = e.entanglements));
  var r = e.eventTimes;
  for (e = e.expirationTimes; 0 < n; ) {
    var i = 31 - Je(n),
      o = 1 << i;
    ((t[i] = 0), (r[i] = -1), (e[i] = -1), (n &= ~o));
  }
}
function Il(e, t) {
  var n = (e.entangledLanes |= t);
  for (e = e.entanglements; n; ) {
    var r = 31 - Je(n),
      i = 1 << r;
    ((i & t) | (e[r] & t) && (e[r] |= t), (n &= ~i));
  }
}
var O = 0;
function Ph(e) {
  return (
    (e &= -e),
    1 < e ? (4 < e ? (e & 268435455 ? 16 : 536870912) : 4) : 1
  );
}
var Th,
  Fl,
  Eh,
  Rh,
  Mh,
  Ta = !1,
  _i = [],
  Ot = null,
  Bt = null,
  zt = null,
  Qr = new Map(),
  Xr = new Map(),
  Dt = [],
  $y =
    'mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit'.split(
      ' '
    );
function vc(e, t) {
  switch (e) {
    case 'focusin':
    case 'focusout':
      Ot = null;
      break;
    case 'dragenter':
    case 'dragleave':
      Bt = null;
      break;
    case 'mouseover':
    case 'mouseout':
      zt = null;
      break;
    case 'pointerover':
    case 'pointerout':
      Qr.delete(t.pointerId);
      break;
    case 'gotpointercapture':
    case 'lostpointercapture':
      Xr.delete(t.pointerId);
  }
}
function yr(e, t, n, r, i, o) {
  return e === null || e.nativeEvent !== o
    ? ((e = {
        blockedOn: t,
        domEventName: n,
        eventSystemFlags: r,
        nativeEvent: o,
        targetContainers: [i],
      }),
      t !== null && ((t = xi(t)), t !== null && Fl(t)),
      e)
    : ((e.eventSystemFlags |= r),
      (t = e.targetContainers),
      i !== null && t.indexOf(i) === -1 && t.push(i),
      e);
}
function Uy(e, t, n, r, i) {
  switch (t) {
    case 'focusin':
      return ((Ot = yr(Ot, e, t, n, r, i)), !0);
    case 'dragenter':
      return ((Bt = yr(Bt, e, t, n, r, i)), !0);
    case 'mouseover':
      return ((zt = yr(zt, e, t, n, r, i)), !0);
    case 'pointerover':
      var o = i.pointerId;
      return (Qr.set(o, yr(Qr.get(o) || null, e, t, n, r, i)), !0);
    case 'gotpointercapture':
      return (
        (o = i.pointerId),
        Xr.set(o, yr(Xr.get(o) || null, e, t, n, r, i)),
        !0
      );
  }
  return !1;
}
function Lh(e) {
  var t = un(e.target);
  if (t !== null) {
    var n = Pn(t);
    if (n !== null) {
      if (((t = n.tag), t === 13)) {
        if (((t = yh(n)), t !== null)) {
          ((e.blockedOn = t),
            Mh(e.priority, function () {
              Eh(n);
            }));
          return;
        }
      } else if (t === 3 && n.stateNode.current.memoizedState.isDehydrated) {
        e.blockedOn = n.tag === 3 ? n.stateNode.containerInfo : null;
        return;
      }
    }
  }
  e.blockedOn = null;
}
function to(e) {
  if (e.blockedOn !== null) return !1;
  for (var t = e.targetContainers; 0 < t.length; ) {
    var n = Ea(e.domEventName, e.eventSystemFlags, t[0], e.nativeEvent);
    if (n === null) {
      n = e.nativeEvent;
      var r = new n.constructor(n.type, n);
      ((xa = r), n.target.dispatchEvent(r), (xa = null));
    } else return ((t = xi(n)), t !== null && Fl(t), (e.blockedOn = n), !1);
    t.shift();
  }
  return !0;
}
function wc(e, t, n) {
  to(e) && n.delete(t);
}
function Wy() {
  ((Ta = !1),
    Ot !== null && to(Ot) && (Ot = null),
    Bt !== null && to(Bt) && (Bt = null),
    zt !== null && to(zt) && (zt = null),
    Qr.forEach(wc),
    Xr.forEach(wc));
}
function vr(e, t) {
  e.blockedOn === t &&
    ((e.blockedOn = null),
    Ta ||
      ((Ta = !0),
      Ve.unstable_scheduleCallback(Ve.unstable_NormalPriority, Wy)));
}
function Zr(e) {
  function t(i) {
    return vr(i, e);
  }
  if (0 < _i.length) {
    vr(_i[0], e);
    for (var n = 1; n < _i.length; n++) {
      var r = _i[n];
      r.blockedOn === e && (r.blockedOn = null);
    }
  }
  for (
    Ot !== null && vr(Ot, e),
      Bt !== null && vr(Bt, e),
      zt !== null && vr(zt, e),
      Qr.forEach(t),
      Xr.forEach(t),
      n = 0;
    n < Dt.length;
    n++
  )
    ((r = Dt[n]), r.blockedOn === e && (r.blockedOn = null));
  for (; 0 < Dt.length && ((n = Dt[0]), n.blockedOn === null); )
    (Lh(n), n.blockedOn === null && Dt.shift());
}
var Yn = Et.ReactCurrentBatchConfig,
  Co = !0;
function by(e, t, n, r) {
  var i = O,
    o = Yn.transition;
  Yn.transition = null;
  try {
    ((O = 1), _l(e, t, n, r));
  } finally {
    ((O = i), (Yn.transition = o));
  }
}
function Hy(e, t, n, r) {
  var i = O,
    o = Yn.transition;
  Yn.transition = null;
  try {
    ((O = 4), _l(e, t, n, r));
  } finally {
    ((O = i), (Yn.transition = o));
  }
}
function _l(e, t, n, r) {
  if (Co) {
    var i = Ea(e, t, n, r);
    if (i === null) (Ds(e, t, r, Po, n), vc(e, r));
    else if (Uy(i, e, t, n, r)) r.stopPropagation();
    else if ((vc(e, r), t & 4 && -1 < $y.indexOf(e))) {
      for (; i !== null; ) {
        var o = xi(i);
        if (
          (o !== null && Th(o),
          (o = Ea(e, t, n, r)),
          o === null && Ds(e, t, r, Po, n),
          o === i)
        )
          break;
        i = o;
      }
      i !== null && r.stopPropagation();
    } else Ds(e, t, r, null, n);
  }
}
var Po = null;
function Ea(e, t, n, r) {
  if (((Po = null), (e = Dl(r)), (e = un(e)), e !== null))
    if (((t = Pn(e)), t === null)) e = null;
    else if (((n = t.tag), n === 13)) {
      if (((e = yh(t)), e !== null)) return e;
      e = null;
    } else if (n === 3) {
      if (t.stateNode.current.memoizedState.isDehydrated)
        return t.tag === 3 ? t.stateNode.containerInfo : null;
      e = null;
    } else t !== e && (e = null);
  return ((Po = e), null);
}
function Ah(e) {
  switch (e) {
    case 'cancel':
    case 'click':
    case 'close':
    case 'contextmenu':
    case 'copy':
    case 'cut':
    case 'auxclick':
    case 'dblclick':
    case 'dragend':
    case 'dragstart':
    case 'drop':
    case 'focusin':
    case 'focusout':
    case 'input':
    case 'invalid':
    case 'keydown':
    case 'keypress':
    case 'keyup':
    case 'mousedown':
    case 'mouseup':
    case 'paste':
    case 'pause':
    case 'play':
    case 'pointercancel':
    case 'pointerdown':
    case 'pointerup':
    case 'ratechange':
    case 'reset':
    case 'resize':
    case 'seeked':
    case 'submit':
    case 'touchcancel':
    case 'touchend':
    case 'touchstart':
    case 'volumechange':
    case 'change':
    case 'selectionchange':
    case 'textInput':
    case 'compositionstart':
    case 'compositionend':
    case 'compositionupdate':
    case 'beforeblur':
    case 'afterblur':
    case 'beforeinput':
    case 'blur':
    case 'fullscreenchange':
    case 'focus':
    case 'hashchange':
    case 'popstate':
    case 'select':
    case 'selectstart':
      return 1;
    case 'drag':
    case 'dragenter':
    case 'dragexit':
    case 'dragleave':
    case 'dragover':
    case 'mousemove':
    case 'mouseout':
    case 'mouseover':
    case 'pointermove':
    case 'pointerout':
    case 'pointerover':
    case 'scroll':
    case 'toggle':
    case 'touchmove':
    case 'wheel':
    case 'mouseenter':
    case 'mouseleave':
    case 'pointerenter':
    case 'pointerleave':
      return 4;
    case 'message':
      switch (jy()) {
        case Vl:
          return 1;
        case Sh:
          return 4;
        case So:
        case Dy:
          return 16;
        case kh:
          return 536870912;
        default:
          return 16;
      }
    default:
      return 16;
  }
}
var Ft = null,
  Ol = null,
  no = null;
function Nh() {
  if (no) return no;
  var e,
    t = Ol,
    n = t.length,
    r,
    i = 'value' in Ft ? Ft.value : Ft.textContent,
    o = i.length;
  for (e = 0; e < n && t[e] === i[e]; e++);
  var s = n - e;
  for (r = 1; r <= s && t[n - r] === i[o - r]; r++);
  return (no = i.slice(e, 1 < r ? 1 - r : void 0));
}
function ro(e) {
  var t = e.keyCode;
  return (
    'charCode' in e
      ? ((e = e.charCode), e === 0 && t === 13 && (e = 13))
      : (e = t),
    e === 10 && (e = 13),
    32 <= e || e === 13 ? e : 0
  );
}
function Oi() {
  return !0;
}
function xc() {
  return !1;
}
function Fe(e) {
  function t(n, r, i, o, s) {
    ((this._reactName = n),
      (this._targetInst = i),
      (this.type = r),
      (this.nativeEvent = o),
      (this.target = s),
      (this.currentTarget = null));
    for (var a in e)
      e.hasOwnProperty(a) && ((n = e[a]), (this[a] = n ? n(o) : o[a]));
    return (
      (this.isDefaultPrevented = (
        o.defaultPrevented != null ? o.defaultPrevented : o.returnValue === !1
      )
        ? Oi
        : xc),
      (this.isPropagationStopped = xc),
      this
    );
  }
  return (
    Z(t.prototype, {
      preventDefault: function () {
        this.defaultPrevented = !0;
        var n = this.nativeEvent;
        n &&
          (n.preventDefault
            ? n.preventDefault()
            : typeof n.returnValue != 'unknown' && (n.returnValue = !1),
          (this.isDefaultPrevented = Oi));
      },
      stopPropagation: function () {
        var n = this.nativeEvent;
        n &&
          (n.stopPropagation
            ? n.stopPropagation()
            : typeof n.cancelBubble != 'unknown' && (n.cancelBubble = !0),
          (this.isPropagationStopped = Oi));
      },
      persist: function () {},
      isPersistent: Oi,
    }),
    t
  );
}
var ar = {
    eventPhase: 0,
    bubbles: 0,
    cancelable: 0,
    timeStamp: function (e) {
      return e.timeStamp || Date.now();
    },
    defaultPrevented: 0,
    isTrusted: 0,
  },
  Bl = Fe(ar),
  wi = Z({}, ar, { view: 0, detail: 0 }),
  Ky = Fe(wi),
  Ps,
  Ts,
  wr,
  Xo = Z({}, wi, {
    screenX: 0,
    screenY: 0,
    clientX: 0,
    clientY: 0,
    pageX: 0,
    pageY: 0,
    ctrlKey: 0,
    shiftKey: 0,
    altKey: 0,
    metaKey: 0,
    getModifierState: zl,
    button: 0,
    buttons: 0,
    relatedTarget: function (e) {
      return e.relatedTarget === void 0
        ? e.fromElement === e.srcElement
          ? e.toElement
          : e.fromElement
        : e.relatedTarget;
    },
    movementX: function (e) {
      return 'movementX' in e
        ? e.movementX
        : (e !== wr &&
            (wr && e.type === 'mousemove'
              ? ((Ps = e.screenX - wr.screenX), (Ts = e.screenY - wr.screenY))
              : (Ts = Ps = 0),
            (wr = e)),
          Ps);
    },
    movementY: function (e) {
      return 'movementY' in e ? e.movementY : Ts;
    },
  }),
  Sc = Fe(Xo),
  Gy = Z({}, Xo, { dataTransfer: 0 }),
  Yy = Fe(Gy),
  Qy = Z({}, wi, { relatedTarget: 0 }),
  Es = Fe(Qy),
  Xy = Z({}, ar, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }),
  Zy = Fe(Xy),
  Jy = Z({}, ar, {
    clipboardData: function (e) {
      return 'clipboardData' in e ? e.clipboardData : window.clipboardData;
    },
  }),
  qy = Fe(Jy),
  ev = Z({}, ar, { data: 0 }),
  kc = Fe(ev),
  tv = {
    Esc: 'Escape',
    Spacebar: ' ',
    Left: 'ArrowLeft',
    Up: 'ArrowUp',
    Right: 'ArrowRight',
    Down: 'ArrowDown',
    Del: 'Delete',
    Win: 'OS',
    Menu: 'ContextMenu',
    Apps: 'ContextMenu',
    Scroll: 'ScrollLock',
    MozPrintableKey: 'Unidentified',
  },
  nv = {
    8: 'Backspace',
    9: 'Tab',
    12: 'Clear',
    13: 'Enter',
    16: 'Shift',
    17: 'Control',
    18: 'Alt',
    19: 'Pause',
    20: 'CapsLock',
    27: 'Escape',
    32: ' ',
    33: 'PageUp',
    34: 'PageDown',
    35: 'End',
    36: 'Home',
    37: 'ArrowLeft',
    38: 'ArrowUp',
    39: 'ArrowRight',
    40: 'ArrowDown',
    45: 'Insert',
    46: 'Delete',
    112: 'F1',
    113: 'F2',
    114: 'F3',
    115: 'F4',
    116: 'F5',
    117: 'F6',
    118: 'F7',
    119: 'F8',
    120: 'F9',
    121: 'F10',
    122: 'F11',
    123: 'F12',
    144: 'NumLock',
    145: 'ScrollLock',
    224: 'Meta',
  },
  rv = {
    Alt: 'altKey',
    Control: 'ctrlKey',
    Meta: 'metaKey',
    Shift: 'shiftKey',
  };
function iv(e) {
  var t = this.nativeEvent;
  return t.getModifierState ? t.getModifierState(e) : (e = rv[e]) ? !!t[e] : !1;
}
function zl() {
  return iv;
}
var ov = Z({}, wi, {
    key: function (e) {
      if (e.key) {
        var t = tv[e.key] || e.key;
        if (t !== 'Unidentified') return t;
      }
      return e.type === 'keypress'
        ? ((e = ro(e)), e === 13 ? 'Enter' : String.fromCharCode(e))
        : e.type === 'keydown' || e.type === 'keyup'
          ? nv[e.keyCode] || 'Unidentified'
          : '';
    },
    code: 0,
    location: 0,
    ctrlKey: 0,
    shiftKey: 0,
    altKey: 0,
    metaKey: 0,
    repeat: 0,
    locale: 0,
    getModifierState: zl,
    charCode: function (e) {
      return e.type === 'keypress' ? ro(e) : 0;
    },
    keyCode: function (e) {
      return e.type === 'keydown' || e.type === 'keyup' ? e.keyCode : 0;
    },
    which: function (e) {
      return e.type === 'keypress'
        ? ro(e)
        : e.type === 'keydown' || e.type === 'keyup'
          ? e.keyCode
          : 0;
    },
  }),
  sv = Fe(ov),
  av = Z({}, Xo, {
    pointerId: 0,
    width: 0,
    height: 0,
    pressure: 0,
    tangentialPressure: 0,
    tiltX: 0,
    tiltY: 0,
    twist: 0,
    pointerType: 0,
    isPrimary: 0,
  }),
  Cc = Fe(av),
  lv = Z({}, wi, {
    touches: 0,
    targetTouches: 0,
    changedTouches: 0,
    altKey: 0,
    metaKey: 0,
    ctrlKey: 0,
    shiftKey: 0,
    getModifierState: zl,
  }),
  uv = Fe(lv),
  cv = Z({}, ar, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }),
  dv = Fe(cv),
  fv = Z({}, Xo, {
    deltaX: function (e) {
      return 'deltaX' in e ? e.deltaX : 'wheelDeltaX' in e ? -e.wheelDeltaX : 0;
    },
    deltaY: function (e) {
      return 'deltaY' in e
        ? e.deltaY
        : 'wheelDeltaY' in e
          ? -e.wheelDeltaY
          : 'wheelDelta' in e
            ? -e.wheelDelta
            : 0;
    },
    deltaZ: 0,
    deltaMode: 0,
  }),
  hv = Fe(fv),
  pv = [9, 13, 27, 32],
  $l = wt && 'CompositionEvent' in window,
  Vr = null;
wt && 'documentMode' in document && (Vr = document.documentMode);
var mv = wt && 'TextEvent' in window && !Vr,
  jh = wt && (!$l || (Vr && 8 < Vr && 11 >= Vr)),
  Pc = String.fromCharCode(32),
  Tc = !1;
function Dh(e, t) {
  switch (e) {
    case 'keyup':
      return pv.indexOf(t.keyCode) !== -1;
    case 'keydown':
      return t.keyCode !== 229;
    case 'keypress':
    case 'mousedown':
    case 'focusout':
      return !0;
    default:
      return !1;
  }
}
function Vh(e) {
  return ((e = e.detail), typeof e == 'object' && 'data' in e ? e.data : null);
}
var An = !1;
function gv(e, t) {
  switch (e) {
    case 'compositionend':
      return Vh(t);
    case 'keypress':
      return t.which !== 32 ? null : ((Tc = !0), Pc);
    case 'textInput':
      return ((e = t.data), e === Pc && Tc ? null : e);
    default:
      return null;
  }
}
function yv(e, t) {
  if (An)
    return e === 'compositionend' || (!$l && Dh(e, t))
      ? ((e = Nh()), (no = Ol = Ft = null), (An = !1), e)
      : null;
  switch (e) {
    case 'paste':
      return null;
    case 'keypress':
      if (!(t.ctrlKey || t.altKey || t.metaKey) || (t.ctrlKey && t.altKey)) {
        if (t.char && 1 < t.char.length) return t.char;
        if (t.which) return String.fromCharCode(t.which);
      }
      return null;
    case 'compositionend':
      return jh && t.locale !== 'ko' ? null : t.data;
    default:
      return null;
  }
}
var vv = {
  color: !0,
  date: !0,
  datetime: !0,
  'datetime-local': !0,
  email: !0,
  month: !0,
  number: !0,
  password: !0,
  range: !0,
  search: !0,
  tel: !0,
  text: !0,
  time: !0,
  url: !0,
  week: !0,
};
function Ec(e) {
  var t = e && e.nodeName && e.nodeName.toLowerCase();
  return t === 'input' ? !!vv[e.type] : t === 'textarea';
}
function Ih(e, t, n, r) {
  (fh(r),
    (t = To(t, 'onChange')),
    0 < t.length &&
      ((n = new Bl('onChange', 'change', null, n, r)),
      e.push({ event: n, listeners: t })));
}
var Ir = null,
  Jr = null;
function wv(e) {
  Kh(e, 0);
}
function Zo(e) {
  var t = Dn(e);
  if (oh(t)) return e;
}
function xv(e, t) {
  if (e === 'change') return t;
}
var Fh = !1;
if (wt) {
  var Rs;
  if (wt) {
    var Ms = 'oninput' in document;
    if (!Ms) {
      var Rc = document.createElement('div');
      (Rc.setAttribute('oninput', 'return;'),
        (Ms = typeof Rc.oninput == 'function'));
    }
    Rs = Ms;
  } else Rs = !1;
  Fh = Rs && (!document.documentMode || 9 < document.documentMode);
}
function Mc() {
  Ir && (Ir.detachEvent('onpropertychange', _h), (Jr = Ir = null));
}
function _h(e) {
  if (e.propertyName === 'value' && Zo(Jr)) {
    var t = [];
    (Ih(t, Jr, e, Dl(e)), gh(wv, t));
  }
}
function Sv(e, t, n) {
  e === 'focusin'
    ? (Mc(), (Ir = t), (Jr = n), Ir.attachEvent('onpropertychange', _h))
    : e === 'focusout' && Mc();
}
function kv(e) {
  if (e === 'selectionchange' || e === 'keyup' || e === 'keydown')
    return Zo(Jr);
}
function Cv(e, t) {
  if (e === 'click') return Zo(t);
}
function Pv(e, t) {
  if (e === 'input' || e === 'change') return Zo(t);
}
function Tv(e, t) {
  return (e === t && (e !== 0 || 1 / e === 1 / t)) || (e !== e && t !== t);
}
var et = typeof Object.is == 'function' ? Object.is : Tv;
function qr(e, t) {
  if (et(e, t)) return !0;
  if (typeof e != 'object' || e === null || typeof t != 'object' || t === null)
    return !1;
  var n = Object.keys(e),
    r = Object.keys(t);
  if (n.length !== r.length) return !1;
  for (r = 0; r < n.length; r++) {
    var i = n[r];
    if (!la.call(t, i) || !et(e[i], t[i])) return !1;
  }
  return !0;
}
function Lc(e) {
  for (; e && e.firstChild; ) e = e.firstChild;
  return e;
}
function Ac(e, t) {
  var n = Lc(e);
  e = 0;
  for (var r; n; ) {
    if (n.nodeType === 3) {
      if (((r = e + n.textContent.length), e <= t && r >= t))
        return { node: n, offset: t - e };
      e = r;
    }
    e: {
      for (; n; ) {
        if (n.nextSibling) {
          n = n.nextSibling;
          break e;
        }
        n = n.parentNode;
      }
      n = void 0;
    }
    n = Lc(n);
  }
}
function Oh(e, t) {
  return e && t
    ? e === t
      ? !0
      : e && e.nodeType === 3
        ? !1
        : t && t.nodeType === 3
          ? Oh(e, t.parentNode)
          : 'contains' in e
            ? e.contains(t)
            : e.compareDocumentPosition
              ? !!(e.compareDocumentPosition(t) & 16)
              : !1
    : !1;
}
function Bh() {
  for (var e = window, t = vo(); t instanceof e.HTMLIFrameElement; ) {
    try {
      var n = typeof t.contentWindow.location.href == 'string';
    } catch {
      n = !1;
    }
    if (n) e = t.contentWindow;
    else break;
    t = vo(e.document);
  }
  return t;
}
function Ul(e) {
  var t = e && e.nodeName && e.nodeName.toLowerCase();
  return (
    t &&
    ((t === 'input' &&
      (e.type === 'text' ||
        e.type === 'search' ||
        e.type === 'tel' ||
        e.type === 'url' ||
        e.type === 'password')) ||
      t === 'textarea' ||
      e.contentEditable === 'true')
  );
}
function Ev(e) {
  var t = Bh(),
    n = e.focusedElem,
    r = e.selectionRange;
  if (
    t !== n &&
    n &&
    n.ownerDocument &&
    Oh(n.ownerDocument.documentElement, n)
  ) {
    if (r !== null && Ul(n)) {
      if (
        ((t = r.start),
        (e = r.end),
        e === void 0 && (e = t),
        'selectionStart' in n)
      )
        ((n.selectionStart = t),
          (n.selectionEnd = Math.min(e, n.value.length)));
      else if (
        ((e = ((t = n.ownerDocument || document) && t.defaultView) || window),
        e.getSelection)
      ) {
        e = e.getSelection();
        var i = n.textContent.length,
          o = Math.min(r.start, i);
        ((r = r.end === void 0 ? o : Math.min(r.end, i)),
          !e.extend && o > r && ((i = r), (r = o), (o = i)),
          (i = Ac(n, o)));
        var s = Ac(n, r);
        i &&
          s &&
          (e.rangeCount !== 1 ||
            e.anchorNode !== i.node ||
            e.anchorOffset !== i.offset ||
            e.focusNode !== s.node ||
            e.focusOffset !== s.offset) &&
          ((t = t.createRange()),
          t.setStart(i.node, i.offset),
          e.removeAllRanges(),
          o > r
            ? (e.addRange(t), e.extend(s.node, s.offset))
            : (t.setEnd(s.node, s.offset), e.addRange(t)));
      }
    }
    for (t = [], e = n; (e = e.parentNode); )
      e.nodeType === 1 &&
        t.push({ element: e, left: e.scrollLeft, top: e.scrollTop });
    for (typeof n.focus == 'function' && n.focus(), n = 0; n < t.length; n++)
      ((e = t[n]),
        (e.element.scrollLeft = e.left),
        (e.element.scrollTop = e.top));
  }
}
var Rv = wt && 'documentMode' in document && 11 >= document.documentMode,
  Nn = null,
  Ra = null,
  Fr = null,
  Ma = !1;
function Nc(e, t, n) {
  var r = n.window === n ? n.document : n.nodeType === 9 ? n : n.ownerDocument;
  Ma ||
    Nn == null ||
    Nn !== vo(r) ||
    ((r = Nn),
    'selectionStart' in r && Ul(r)
      ? (r = { start: r.selectionStart, end: r.selectionEnd })
      : ((r = (
          (r.ownerDocument && r.ownerDocument.defaultView) ||
          window
        ).getSelection()),
        (r = {
          anchorNode: r.anchorNode,
          anchorOffset: r.anchorOffset,
          focusNode: r.focusNode,
          focusOffset: r.focusOffset,
        })),
    (Fr && qr(Fr, r)) ||
      ((Fr = r),
      (r = To(Ra, 'onSelect')),
      0 < r.length &&
        ((t = new Bl('onSelect', 'select', null, t, n)),
        e.push({ event: t, listeners: r }),
        (t.target = Nn))));
}
function Bi(e, t) {
  var n = {};
  return (
    (n[e.toLowerCase()] = t.toLowerCase()),
    (n['Webkit' + e] = 'webkit' + t),
    (n['Moz' + e] = 'moz' + t),
    n
  );
}
var jn = {
    animationend: Bi('Animation', 'AnimationEnd'),
    animationiteration: Bi('Animation', 'AnimationIteration'),
    animationstart: Bi('Animation', 'AnimationStart'),
    transitionend: Bi('Transition', 'TransitionEnd'),
  },
  Ls = {},
  zh = {};
wt &&
  ((zh = document.createElement('div').style),
  'AnimationEvent' in window ||
    (delete jn.animationend.animation,
    delete jn.animationiteration.animation,
    delete jn.animationstart.animation),
  'TransitionEvent' in window || delete jn.transitionend.transition);
function Jo(e) {
  if (Ls[e]) return Ls[e];
  if (!jn[e]) return e;
  var t = jn[e],
    n;
  for (n in t) if (t.hasOwnProperty(n) && n in zh) return (Ls[e] = t[n]);
  return e;
}
var $h = Jo('animationend'),
  Uh = Jo('animationiteration'),
  Wh = Jo('animationstart'),
  bh = Jo('transitionend'),
  Hh = new Map(),
  jc =
    'abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel'.split(
      ' '
    );
function Xt(e, t) {
  (Hh.set(e, t), Cn(t, [e]));
}
for (var As = 0; As < jc.length; As++) {
  var Ns = jc[As],
    Mv = Ns.toLowerCase(),
    Lv = Ns[0].toUpperCase() + Ns.slice(1);
  Xt(Mv, 'on' + Lv);
}
Xt($h, 'onAnimationEnd');
Xt(Uh, 'onAnimationIteration');
Xt(Wh, 'onAnimationStart');
Xt('dblclick', 'onDoubleClick');
Xt('focusin', 'onFocus');
Xt('focusout', 'onBlur');
Xt(bh, 'onTransitionEnd');
Zn('onMouseEnter', ['mouseout', 'mouseover']);
Zn('onMouseLeave', ['mouseout', 'mouseover']);
Zn('onPointerEnter', ['pointerout', 'pointerover']);
Zn('onPointerLeave', ['pointerout', 'pointerover']);
Cn(
  'onChange',
  'change click focusin focusout input keydown keyup selectionchange'.split(' ')
);
Cn(
  'onSelect',
  'focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange'.split(
    ' '
  )
);
Cn('onBeforeInput', ['compositionend', 'keypress', 'textInput', 'paste']);
Cn(
  'onCompositionEnd',
  'compositionend focusout keydown keypress keyup mousedown'.split(' ')
);
Cn(
  'onCompositionStart',
  'compositionstart focusout keydown keypress keyup mousedown'.split(' ')
);
Cn(
  'onCompositionUpdate',
  'compositionupdate focusout keydown keypress keyup mousedown'.split(' ')
);
var Mr =
    'abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting'.split(
      ' '
    ),
  Av = new Set('cancel close invalid load scroll toggle'.split(' ').concat(Mr));
function Dc(e, t, n) {
  var r = e.type || 'unknown-event';
  ((e.currentTarget = n), My(r, t, void 0, e), (e.currentTarget = null));
}
function Kh(e, t) {
  t = (t & 4) !== 0;
  for (var n = 0; n < e.length; n++) {
    var r = e[n],
      i = r.event;
    r = r.listeners;
    e: {
      var o = void 0;
      if (t)
        for (var s = r.length - 1; 0 <= s; s--) {
          var a = r[s],
            l = a.instance,
            u = a.currentTarget;
          if (((a = a.listener), l !== o && i.isPropagationStopped())) break e;
          (Dc(i, a, u), (o = l));
        }
      else
        for (s = 0; s < r.length; s++) {
          if (
            ((a = r[s]),
            (l = a.instance),
            (u = a.currentTarget),
            (a = a.listener),
            l !== o && i.isPropagationStopped())
          )
            break e;
          (Dc(i, a, u), (o = l));
        }
    }
  }
  if (xo) throw ((e = Ca), (xo = !1), (Ca = null), e);
}
function $(e, t) {
  var n = t[Da];
  n === void 0 && (n = t[Da] = new Set());
  var r = e + '__bubble';
  n.has(r) || (Gh(t, e, 2, !1), n.add(r));
}
function js(e, t, n) {
  var r = 0;
  (t && (r |= 4), Gh(n, e, r, t));
}
var zi = '_reactListening' + Math.random().toString(36).slice(2);
function ei(e) {
  if (!e[zi]) {
    ((e[zi] = !0),
      eh.forEach(function (n) {
        n !== 'selectionchange' && (Av.has(n) || js(n, !1, e), js(n, !0, e));
      }));
    var t = e.nodeType === 9 ? e : e.ownerDocument;
    t === null || t[zi] || ((t[zi] = !0), js('selectionchange', !1, t));
  }
}
function Gh(e, t, n, r) {
  switch (Ah(t)) {
    case 1:
      var i = by;
      break;
    case 4:
      i = Hy;
      break;
    default:
      i = _l;
  }
  ((n = i.bind(null, t, n, e)),
    (i = void 0),
    !ka ||
      (t !== 'touchstart' && t !== 'touchmove' && t !== 'wheel') ||
      (i = !0),
    r
      ? i !== void 0
        ? e.addEventListener(t, n, { capture: !0, passive: i })
        : e.addEventListener(t, n, !0)
      : i !== void 0
        ? e.addEventListener(t, n, { passive: i })
        : e.addEventListener(t, n, !1));
}
function Ds(e, t, n, r, i) {
  var o = r;
  if (!(t & 1) && !(t & 2) && r !== null)
    e: for (;;) {
      if (r === null) return;
      var s = r.tag;
      if (s === 3 || s === 4) {
        var a = r.stateNode.containerInfo;
        if (a === i || (a.nodeType === 8 && a.parentNode === i)) break;
        if (s === 4)
          for (s = r.return; s !== null; ) {
            var l = s.tag;
            if (
              (l === 3 || l === 4) &&
              ((l = s.stateNode.containerInfo),
              l === i || (l.nodeType === 8 && l.parentNode === i))
            )
              return;
            s = s.return;
          }
        for (; a !== null; ) {
          if (((s = un(a)), s === null)) return;
          if (((l = s.tag), l === 5 || l === 6)) {
            r = o = s;
            continue e;
          }
          a = a.parentNode;
        }
      }
      r = r.return;
    }
  gh(function () {
    var u = o,
      c = Dl(n),
      d = [];
    e: {
      var f = Hh.get(e);
      if (f !== void 0) {
        var g = Bl,
          v = e;
        switch (e) {
          case 'keypress':
            if (ro(n) === 0) break e;
          case 'keydown':
          case 'keyup':
            g = sv;
            break;
          case 'focusin':
            ((v = 'focus'), (g = Es));
            break;
          case 'focusout':
            ((v = 'blur'), (g = Es));
            break;
          case 'beforeblur':
          case 'afterblur':
            g = Es;
            break;
          case 'click':
            if (n.button === 2) break e;
          case 'auxclick':
          case 'dblclick':
          case 'mousedown':
          case 'mousemove':
          case 'mouseup':
          case 'mouseout':
          case 'mouseover':
          case 'contextmenu':
            g = Sc;
            break;
          case 'drag':
          case 'dragend':
          case 'dragenter':
          case 'dragexit':
          case 'dragleave':
          case 'dragover':
          case 'dragstart':
          case 'drop':
            g = Yy;
            break;
          case 'touchcancel':
          case 'touchend':
          case 'touchmove':
          case 'touchstart':
            g = uv;
            break;
          case $h:
          case Uh:
          case Wh:
            g = Zy;
            break;
          case bh:
            g = dv;
            break;
          case 'scroll':
            g = Ky;
            break;
          case 'wheel':
            g = hv;
            break;
          case 'copy':
          case 'cut':
          case 'paste':
            g = qy;
            break;
          case 'gotpointercapture':
          case 'lostpointercapture':
          case 'pointercancel':
          case 'pointerdown':
          case 'pointermove':
          case 'pointerout':
          case 'pointerover':
          case 'pointerup':
            g = Cc;
        }
        var y = (t & 4) !== 0,
          S = !y && e === 'scroll',
          p = y ? (f !== null ? f + 'Capture' : null) : f;
        y = [];
        for (var h = u, m; h !== null; ) {
          m = h;
          var k = m.stateNode;
          if (
            (m.tag === 5 &&
              k !== null &&
              ((m = k),
              p !== null && ((k = Yr(h, p)), k != null && y.push(ti(h, k, m)))),
            S)
          )
            break;
          h = h.return;
        }
        0 < y.length &&
          ((f = new g(f, v, null, n, c)), d.push({ event: f, listeners: y }));
      }
    }
    if (!(t & 7)) {
      e: {
        if (
          ((f = e === 'mouseover' || e === 'pointerover'),
          (g = e === 'mouseout' || e === 'pointerout'),
          f &&
            n !== xa &&
            (v = n.relatedTarget || n.fromElement) &&
            (un(v) || v[xt]))
        )
          break e;
        if (
          (g || f) &&
          ((f =
            c.window === c
              ? c
              : (f = c.ownerDocument)
                ? f.defaultView || f.parentWindow
                : window),
          g
            ? ((v = n.relatedTarget || n.toElement),
              (g = u),
              (v = v ? un(v) : null),
              v !== null &&
                ((S = Pn(v)), v !== S || (v.tag !== 5 && v.tag !== 6)) &&
                (v = null))
            : ((g = null), (v = u)),
          g !== v)
        ) {
          if (
            ((y = Sc),
            (k = 'onMouseLeave'),
            (p = 'onMouseEnter'),
            (h = 'mouse'),
            (e === 'pointerout' || e === 'pointerover') &&
              ((y = Cc),
              (k = 'onPointerLeave'),
              (p = 'onPointerEnter'),
              (h = 'pointer')),
            (S = g == null ? f : Dn(g)),
            (m = v == null ? f : Dn(v)),
            (f = new y(k, h + 'leave', g, n, c)),
            (f.target = S),
            (f.relatedTarget = m),
            (k = null),
            un(c) === u &&
              ((y = new y(p, h + 'enter', v, n, c)),
              (y.target = m),
              (y.relatedTarget = S),
              (k = y)),
            (S = k),
            g && v)
          )
            t: {
              for (y = g, p = v, h = 0, m = y; m; m = Rn(m)) h++;
              for (m = 0, k = p; k; k = Rn(k)) m++;
              for (; 0 < h - m; ) ((y = Rn(y)), h--);
              for (; 0 < m - h; ) ((p = Rn(p)), m--);
              for (; h--; ) {
                if (y === p || (p !== null && y === p.alternate)) break t;
                ((y = Rn(y)), (p = Rn(p)));
              }
              y = null;
            }
          else y = null;
          (g !== null && Vc(d, f, g, y, !1),
            v !== null && S !== null && Vc(d, S, v, y, !0));
        }
      }
      e: {
        if (
          ((f = u ? Dn(u) : window),
          (g = f.nodeName && f.nodeName.toLowerCase()),
          g === 'select' || (g === 'input' && f.type === 'file'))
        )
          var C = xv;
        else if (Ec(f))
          if (Fh) C = Pv;
          else {
            C = kv;
            var T = Sv;
          }
        else
          (g = f.nodeName) &&
            g.toLowerCase() === 'input' &&
            (f.type === 'checkbox' || f.type === 'radio') &&
            (C = Cv);
        if (C && (C = C(e, u))) {
          Ih(d, C, n, c);
          break e;
        }
        (T && T(e, f, u),
          e === 'focusout' &&
            (T = f._wrapperState) &&
            T.controlled &&
            f.type === 'number' &&
            ma(f, 'number', f.value));
      }
      switch (((T = u ? Dn(u) : window), e)) {
        case 'focusin':
          (Ec(T) || T.contentEditable === 'true') &&
            ((Nn = T), (Ra = u), (Fr = null));
          break;
        case 'focusout':
          Fr = Ra = Nn = null;
          break;
        case 'mousedown':
          Ma = !0;
          break;
        case 'contextmenu':
        case 'mouseup':
        case 'dragend':
          ((Ma = !1), Nc(d, n, c));
          break;
        case 'selectionchange':
          if (Rv) break;
        case 'keydown':
        case 'keyup':
          Nc(d, n, c);
      }
      var R;
      if ($l)
        e: {
          switch (e) {
            case 'compositionstart':
              var E = 'onCompositionStart';
              break e;
            case 'compositionend':
              E = 'onCompositionEnd';
              break e;
            case 'compositionupdate':
              E = 'onCompositionUpdate';
              break e;
          }
          E = void 0;
        }
      else
        An
          ? Dh(e, n) && (E = 'onCompositionEnd')
          : e === 'keydown' && n.keyCode === 229 && (E = 'onCompositionStart');
      (E &&
        (jh &&
          n.locale !== 'ko' &&
          (An || E !== 'onCompositionStart'
            ? E === 'onCompositionEnd' && An && (R = Nh())
            : ((Ft = c),
              (Ol = 'value' in Ft ? Ft.value : Ft.textContent),
              (An = !0))),
        (T = To(u, E)),
        0 < T.length &&
          ((E = new kc(E, e, null, n, c)),
          d.push({ event: E, listeners: T }),
          R ? (E.data = R) : ((R = Vh(n)), R !== null && (E.data = R)))),
        (R = mv ? gv(e, n) : yv(e, n)) &&
          ((u = To(u, 'onBeforeInput')),
          0 < u.length &&
            ((c = new kc('onBeforeInput', 'beforeinput', null, n, c)),
            d.push({ event: c, listeners: u }),
            (c.data = R))));
    }
    Kh(d, t);
  });
}
function ti(e, t, n) {
  return { instance: e, listener: t, currentTarget: n };
}
function To(e, t) {
  for (var n = t + 'Capture', r = []; e !== null; ) {
    var i = e,
      o = i.stateNode;
    (i.tag === 5 &&
      o !== null &&
      ((i = o),
      (o = Yr(e, n)),
      o != null && r.unshift(ti(e, o, i)),
      (o = Yr(e, t)),
      o != null && r.push(ti(e, o, i))),
      (e = e.return));
  }
  return r;
}
function Rn(e) {
  if (e === null) return null;
  do e = e.return;
  while (e && e.tag !== 5);
  return e || null;
}
function Vc(e, t, n, r, i) {
  for (var o = t._reactName, s = []; n !== null && n !== r; ) {
    var a = n,
      l = a.alternate,
      u = a.stateNode;
    if (l !== null && l === r) break;
    (a.tag === 5 &&
      u !== null &&
      ((a = u),
      i
        ? ((l = Yr(n, o)), l != null && s.unshift(ti(n, l, a)))
        : i || ((l = Yr(n, o)), l != null && s.push(ti(n, l, a)))),
      (n = n.return));
  }
  s.length !== 0 && e.push({ event: t, listeners: s });
}
var Nv = /\r\n?/g,
  jv = /\u0000|\uFFFD/g;
function Ic(e) {
  return (typeof e == 'string' ? e : '' + e)
    .replace(
      Nv,
      `
`
    )
    .replace(jv, '');
}
function $i(e, t, n) {
  if (((t = Ic(t)), Ic(e) !== t && n)) throw Error(M(425));
}
function Eo() {}
var La = null,
  Aa = null;
function Na(e, t) {
  return (
    e === 'textarea' ||
    e === 'noscript' ||
    typeof t.children == 'string' ||
    typeof t.children == 'number' ||
    (typeof t.dangerouslySetInnerHTML == 'object' &&
      t.dangerouslySetInnerHTML !== null &&
      t.dangerouslySetInnerHTML.__html != null)
  );
}
var ja = typeof setTimeout == 'function' ? setTimeout : void 0,
  Dv = typeof clearTimeout == 'function' ? clearTimeout : void 0,
  Fc = typeof Promise == 'function' ? Promise : void 0,
  Vv =
    typeof queueMicrotask == 'function'
      ? queueMicrotask
      : typeof Fc < 'u'
        ? function (e) {
            return Fc.resolve(null).then(e).catch(Iv);
          }
        : ja;
function Iv(e) {
  setTimeout(function () {
    throw e;
  });
}
function Vs(e, t) {
  var n = t,
    r = 0;
  do {
    var i = n.nextSibling;
    if ((e.removeChild(n), i && i.nodeType === 8))
      if (((n = i.data), n === '/$')) {
        if (r === 0) {
          (e.removeChild(i), Zr(t));
          return;
        }
        r--;
      } else (n !== '$' && n !== '$?' && n !== '$!') || r++;
    n = i;
  } while (n);
  Zr(t);
}
function $t(e) {
  for (; e != null; e = e.nextSibling) {
    var t = e.nodeType;
    if (t === 1 || t === 3) break;
    if (t === 8) {
      if (((t = e.data), t === '$' || t === '$!' || t === '$?')) break;
      if (t === '/$') return null;
    }
  }
  return e;
}
function _c(e) {
  e = e.previousSibling;
  for (var t = 0; e; ) {
    if (e.nodeType === 8) {
      var n = e.data;
      if (n === '$' || n === '$!' || n === '$?') {
        if (t === 0) return e;
        t--;
      } else n === '/$' && t++;
    }
    e = e.previousSibling;
  }
  return null;
}
var lr = Math.random().toString(36).slice(2),
  it = '__reactFiber$' + lr,
  ni = '__reactProps$' + lr,
  xt = '__reactContainer$' + lr,
  Da = '__reactEvents$' + lr,
  Fv = '__reactListeners$' + lr,
  _v = '__reactHandles$' + lr;
function un(e) {
  var t = e[it];
  if (t) return t;
  for (var n = e.parentNode; n; ) {
    if ((t = n[xt] || n[it])) {
      if (
        ((n = t.alternate),
        t.child !== null || (n !== null && n.child !== null))
      )
        for (e = _c(e); e !== null; ) {
          if ((n = e[it])) return n;
          e = _c(e);
        }
      return t;
    }
    ((e = n), (n = e.parentNode));
  }
  return null;
}
function xi(e) {
  return (
    (e = e[it] || e[xt]),
    !e || (e.tag !== 5 && e.tag !== 6 && e.tag !== 13 && e.tag !== 3) ? null : e
  );
}
function Dn(e) {
  if (e.tag === 5 || e.tag === 6) return e.stateNode;
  throw Error(M(33));
}
function qo(e) {
  return e[ni] || null;
}
var Va = [],
  Vn = -1;
function Zt(e) {
  return { current: e };
}
function W(e) {
  0 > Vn || ((e.current = Va[Vn]), (Va[Vn] = null), Vn--);
}
function z(e, t) {
  (Vn++, (Va[Vn] = e.current), (e.current = t));
}
var Gt = {},
  we = Zt(Gt),
  Me = Zt(!1),
  vn = Gt;
function Jn(e, t) {
  var n = e.type.contextTypes;
  if (!n) return Gt;
  var r = e.stateNode;
  if (r && r.__reactInternalMemoizedUnmaskedChildContext === t)
    return r.__reactInternalMemoizedMaskedChildContext;
  var i = {},
    o;
  for (o in n) i[o] = t[o];
  return (
    r &&
      ((e = e.stateNode),
      (e.__reactInternalMemoizedUnmaskedChildContext = t),
      (e.__reactInternalMemoizedMaskedChildContext = i)),
    i
  );
}
function Le(e) {
  return ((e = e.childContextTypes), e != null);
}
function Ro() {
  (W(Me), W(we));
}
function Oc(e, t, n) {
  if (we.current !== Gt) throw Error(M(168));
  (z(we, t), z(Me, n));
}
function Yh(e, t, n) {
  var r = e.stateNode;
  if (((t = t.childContextTypes), typeof r.getChildContext != 'function'))
    return n;
  r = r.getChildContext();
  for (var i in r) if (!(i in t)) throw Error(M(108, Sy(e) || 'Unknown', i));
  return Z({}, n, r);
}
function Mo(e) {
  return (
    (e =
      ((e = e.stateNode) && e.__reactInternalMemoizedMergedChildContext) || Gt),
    (vn = we.current),
    z(we, e),
    z(Me, Me.current),
    !0
  );
}
function Bc(e, t, n) {
  var r = e.stateNode;
  if (!r) throw Error(M(169));
  (n
    ? ((e = Yh(e, t, vn)),
      (r.__reactInternalMemoizedMergedChildContext = e),
      W(Me),
      W(we),
      z(we, e))
    : W(Me),
    z(Me, n));
}
var ft = null,
  es = !1,
  Is = !1;
function Qh(e) {
  ft === null ? (ft = [e]) : ft.push(e);
}
function Ov(e) {
  ((es = !0), Qh(e));
}
function Jt() {
  if (!Is && ft !== null) {
    Is = !0;
    var e = 0,
      t = O;
    try {
      var n = ft;
      for (O = 1; e < n.length; e++) {
        var r = n[e];
        do r = r(!0);
        while (r !== null);
      }
      ((ft = null), (es = !1));
    } catch (i) {
      throw (ft !== null && (ft = ft.slice(e + 1)), xh(Vl, Jt), i);
    } finally {
      ((O = t), (Is = !1));
    }
  }
  return null;
}
var In = [],
  Fn = 0,
  Lo = null,
  Ao = 0,
  Be = [],
  ze = 0,
  wn = null,
  ht = 1,
  pt = '';
function sn(e, t) {
  ((In[Fn++] = Ao), (In[Fn++] = Lo), (Lo = e), (Ao = t));
}
function Xh(e, t, n) {
  ((Be[ze++] = ht), (Be[ze++] = pt), (Be[ze++] = wn), (wn = e));
  var r = ht;
  e = pt;
  var i = 32 - Je(r) - 1;
  ((r &= ~(1 << i)), (n += 1));
  var o = 32 - Je(t) + i;
  if (30 < o) {
    var s = i - (i % 5);
    ((o = (r & ((1 << s) - 1)).toString(32)),
      (r >>= s),
      (i -= s),
      (ht = (1 << (32 - Je(t) + i)) | (n << i) | r),
      (pt = o + e));
  } else ((ht = (1 << o) | (n << i) | r), (pt = e));
}
function Wl(e) {
  e.return !== null && (sn(e, 1), Xh(e, 1, 0));
}
function bl(e) {
  for (; e === Lo; )
    ((Lo = In[--Fn]), (In[Fn] = null), (Ao = In[--Fn]), (In[Fn] = null));
  for (; e === wn; )
    ((wn = Be[--ze]),
      (Be[ze] = null),
      (pt = Be[--ze]),
      (Be[ze] = null),
      (ht = Be[--ze]),
      (Be[ze] = null));
}
var De = null,
  je = null,
  b = !1,
  Ze = null;
function Zh(e, t) {
  var n = $e(5, null, null, 0);
  ((n.elementType = 'DELETED'),
    (n.stateNode = t),
    (n.return = e),
    (t = e.deletions),
    t === null ? ((e.deletions = [n]), (e.flags |= 16)) : t.push(n));
}
function zc(e, t) {
  switch (e.tag) {
    case 5:
      var n = e.type;
      return (
        (t =
          t.nodeType !== 1 || n.toLowerCase() !== t.nodeName.toLowerCase()
            ? null
            : t),
        t !== null
          ? ((e.stateNode = t), (De = e), (je = $t(t.firstChild)), !0)
          : !1
      );
    case 6:
      return (
        (t = e.pendingProps === '' || t.nodeType !== 3 ? null : t),
        t !== null ? ((e.stateNode = t), (De = e), (je = null), !0) : !1
      );
    case 13:
      return (
        (t = t.nodeType !== 8 ? null : t),
        t !== null
          ? ((n = wn !== null ? { id: ht, overflow: pt } : null),
            (e.memoizedState = {
              dehydrated: t,
              treeContext: n,
              retryLane: 1073741824,
            }),
            (n = $e(18, null, null, 0)),
            (n.stateNode = t),
            (n.return = e),
            (e.child = n),
            (De = e),
            (je = null),
            !0)
          : !1
      );
    default:
      return !1;
  }
}
function Ia(e) {
  return (e.mode & 1) !== 0 && (e.flags & 128) === 0;
}
function Fa(e) {
  if (b) {
    var t = je;
    if (t) {
      var n = t;
      if (!zc(e, t)) {
        if (Ia(e)) throw Error(M(418));
        t = $t(n.nextSibling);
        var r = De;
        t && zc(e, t)
          ? Zh(r, n)
          : ((e.flags = (e.flags & -4097) | 2), (b = !1), (De = e));
      }
    } else {
      if (Ia(e)) throw Error(M(418));
      ((e.flags = (e.flags & -4097) | 2), (b = !1), (De = e));
    }
  }
}
function $c(e) {
  for (e = e.return; e !== null && e.tag !== 5 && e.tag !== 3 && e.tag !== 13; )
    e = e.return;
  De = e;
}
function Ui(e) {
  if (e !== De) return !1;
  if (!b) return ($c(e), (b = !0), !1);
  var t;
  if (
    ((t = e.tag !== 3) &&
      !(t = e.tag !== 5) &&
      ((t = e.type),
      (t = t !== 'head' && t !== 'body' && !Na(e.type, e.memoizedProps))),
    t && (t = je))
  ) {
    if (Ia(e)) throw (Jh(), Error(M(418)));
    for (; t; ) (Zh(e, t), (t = $t(t.nextSibling)));
  }
  if (($c(e), e.tag === 13)) {
    if (((e = e.memoizedState), (e = e !== null ? e.dehydrated : null), !e))
      throw Error(M(317));
    e: {
      for (e = e.nextSibling, t = 0; e; ) {
        if (e.nodeType === 8) {
          var n = e.data;
          if (n === '/$') {
            if (t === 0) {
              je = $t(e.nextSibling);
              break e;
            }
            t--;
          } else (n !== '$' && n !== '$!' && n !== '$?') || t++;
        }
        e = e.nextSibling;
      }
      je = null;
    }
  } else je = De ? $t(e.stateNode.nextSibling) : null;
  return !0;
}
function Jh() {
  for (var e = je; e; ) e = $t(e.nextSibling);
}
function qn() {
  ((je = De = null), (b = !1));
}
function Hl(e) {
  Ze === null ? (Ze = [e]) : Ze.push(e);
}
var Bv = Et.ReactCurrentBatchConfig;
function xr(e, t, n) {
  if (
    ((e = n.ref), e !== null && typeof e != 'function' && typeof e != 'object')
  ) {
    if (n._owner) {
      if (((n = n._owner), n)) {
        if (n.tag !== 1) throw Error(M(309));
        var r = n.stateNode;
      }
      if (!r) throw Error(M(147, e));
      var i = r,
        o = '' + e;
      return t !== null &&
        t.ref !== null &&
        typeof t.ref == 'function' &&
        t.ref._stringRef === o
        ? t.ref
        : ((t = function (s) {
            var a = i.refs;
            s === null ? delete a[o] : (a[o] = s);
          }),
          (t._stringRef = o),
          t);
    }
    if (typeof e != 'string') throw Error(M(284));
    if (!n._owner) throw Error(M(290, e));
  }
  return e;
}
function Wi(e, t) {
  throw (
    (e = Object.prototype.toString.call(t)),
    Error(
      M(
        31,
        e === '[object Object]'
          ? 'object with keys {' + Object.keys(t).join(', ') + '}'
          : e
      )
    )
  );
}
function Uc(e) {
  var t = e._init;
  return t(e._payload);
}
function qh(e) {
  function t(p, h) {
    if (e) {
      var m = p.deletions;
      m === null ? ((p.deletions = [h]), (p.flags |= 16)) : m.push(h);
    }
  }
  function n(p, h) {
    if (!e) return null;
    for (; h !== null; ) (t(p, h), (h = h.sibling));
    return null;
  }
  function r(p, h) {
    for (p = new Map(); h !== null; )
      (h.key !== null ? p.set(h.key, h) : p.set(h.index, h), (h = h.sibling));
    return p;
  }
  function i(p, h) {
    return ((p = Ht(p, h)), (p.index = 0), (p.sibling = null), p);
  }
  function o(p, h, m) {
    return (
      (p.index = m),
      e
        ? ((m = p.alternate),
          m !== null
            ? ((m = m.index), m < h ? ((p.flags |= 2), h) : m)
            : ((p.flags |= 2), h))
        : ((p.flags |= 1048576), h)
    );
  }
  function s(p) {
    return (e && p.alternate === null && (p.flags |= 2), p);
  }
  function a(p, h, m, k) {
    return h === null || h.tag !== 6
      ? ((h = Us(m, p.mode, k)), (h.return = p), h)
      : ((h = i(h, m)), (h.return = p), h);
  }
  function l(p, h, m, k) {
    var C = m.type;
    return C === Ln
      ? c(p, h, m.props.children, k, m.key)
      : h !== null &&
          (h.elementType === C ||
            (typeof C == 'object' &&
              C !== null &&
              C.$$typeof === Nt &&
              Uc(C) === h.type))
        ? ((k = i(h, m.props)), (k.ref = xr(p, h, m)), (k.return = p), k)
        : ((k = co(m.type, m.key, m.props, null, p.mode, k)),
          (k.ref = xr(p, h, m)),
          (k.return = p),
          k);
  }
  function u(p, h, m, k) {
    return h === null ||
      h.tag !== 4 ||
      h.stateNode.containerInfo !== m.containerInfo ||
      h.stateNode.implementation !== m.implementation
      ? ((h = Ws(m, p.mode, k)), (h.return = p), h)
      : ((h = i(h, m.children || [])), (h.return = p), h);
  }
  function c(p, h, m, k, C) {
    return h === null || h.tag !== 7
      ? ((h = mn(m, p.mode, k, C)), (h.return = p), h)
      : ((h = i(h, m)), (h.return = p), h);
  }
  function d(p, h, m) {
    if ((typeof h == 'string' && h !== '') || typeof h == 'number')
      return ((h = Us('' + h, p.mode, m)), (h.return = p), h);
    if (typeof h == 'object' && h !== null) {
      switch (h.$$typeof) {
        case ji:
          return (
            (m = co(h.type, h.key, h.props, null, p.mode, m)),
            (m.ref = xr(p, null, h)),
            (m.return = p),
            m
          );
        case Mn:
          return ((h = Ws(h, p.mode, m)), (h.return = p), h);
        case Nt:
          var k = h._init;
          return d(p, k(h._payload), m);
      }
      if (Er(h) || mr(h))
        return ((h = mn(h, p.mode, m, null)), (h.return = p), h);
      Wi(p, h);
    }
    return null;
  }
  function f(p, h, m, k) {
    var C = h !== null ? h.key : null;
    if ((typeof m == 'string' && m !== '') || typeof m == 'number')
      return C !== null ? null : a(p, h, '' + m, k);
    if (typeof m == 'object' && m !== null) {
      switch (m.$$typeof) {
        case ji:
          return m.key === C ? l(p, h, m, k) : null;
        case Mn:
          return m.key === C ? u(p, h, m, k) : null;
        case Nt:
          return ((C = m._init), f(p, h, C(m._payload), k));
      }
      if (Er(m) || mr(m)) return C !== null ? null : c(p, h, m, k, null);
      Wi(p, m);
    }
    return null;
  }
  function g(p, h, m, k, C) {
    if ((typeof k == 'string' && k !== '') || typeof k == 'number')
      return ((p = p.get(m) || null), a(h, p, '' + k, C));
    if (typeof k == 'object' && k !== null) {
      switch (k.$$typeof) {
        case ji:
          return (
            (p = p.get(k.key === null ? m : k.key) || null),
            l(h, p, k, C)
          );
        case Mn:
          return (
            (p = p.get(k.key === null ? m : k.key) || null),
            u(h, p, k, C)
          );
        case Nt:
          var T = k._init;
          return g(p, h, m, T(k._payload), C);
      }
      if (Er(k) || mr(k)) return ((p = p.get(m) || null), c(h, p, k, C, null));
      Wi(h, k);
    }
    return null;
  }
  function v(p, h, m, k) {
    for (
      var C = null, T = null, R = h, E = (h = 0), N = null;
      R !== null && E < m.length;
      E++
    ) {
      R.index > E ? ((N = R), (R = null)) : (N = R.sibling);
      var P = f(p, R, m[E], k);
      if (P === null) {
        R === null && (R = N);
        break;
      }
      (e && R && P.alternate === null && t(p, R),
        (h = o(P, h, E)),
        T === null ? (C = P) : (T.sibling = P),
        (T = P),
        (R = N));
    }
    if (E === m.length) return (n(p, R), b && sn(p, E), C);
    if (R === null) {
      for (; E < m.length; E++)
        ((R = d(p, m[E], k)),
          R !== null &&
            ((h = o(R, h, E)),
            T === null ? (C = R) : (T.sibling = R),
            (T = R)));
      return (b && sn(p, E), C);
    }
    for (R = r(p, R); E < m.length; E++)
      ((N = g(R, p, E, m[E], k)),
        N !== null &&
          (e && N.alternate !== null && R.delete(N.key === null ? E : N.key),
          (h = o(N, h, E)),
          T === null ? (C = N) : (T.sibling = N),
          (T = N)));
    return (
      e &&
        R.forEach(function (D) {
          return t(p, D);
        }),
      b && sn(p, E),
      C
    );
  }
  function y(p, h, m, k) {
    var C = mr(m);
    if (typeof C != 'function') throw Error(M(150));
    if (((m = C.call(m)), m == null)) throw Error(M(151));
    for (
      var T = (C = null), R = h, E = (h = 0), N = null, P = m.next();
      R !== null && !P.done;
      E++, P = m.next()
    ) {
      R.index > E ? ((N = R), (R = null)) : (N = R.sibling);
      var D = f(p, R, P.value, k);
      if (D === null) {
        R === null && (R = N);
        break;
      }
      (e && R && D.alternate === null && t(p, R),
        (h = o(D, h, E)),
        T === null ? (C = D) : (T.sibling = D),
        (T = D),
        (R = N));
    }
    if (P.done) return (n(p, R), b && sn(p, E), C);
    if (R === null) {
      for (; !P.done; E++, P = m.next())
        ((P = d(p, P.value, k)),
          P !== null &&
            ((h = o(P, h, E)),
            T === null ? (C = P) : (T.sibling = P),
            (T = P)));
      return (b && sn(p, E), C);
    }
    for (R = r(p, R); !P.done; E++, P = m.next())
      ((P = g(R, p, E, P.value, k)),
        P !== null &&
          (e && P.alternate !== null && R.delete(P.key === null ? E : P.key),
          (h = o(P, h, E)),
          T === null ? (C = P) : (T.sibling = P),
          (T = P)));
    return (
      e &&
        R.forEach(function (G) {
          return t(p, G);
        }),
      b && sn(p, E),
      C
    );
  }
  function S(p, h, m, k) {
    if (
      (typeof m == 'object' &&
        m !== null &&
        m.type === Ln &&
        m.key === null &&
        (m = m.props.children),
      typeof m == 'object' && m !== null)
    ) {
      switch (m.$$typeof) {
        case ji:
          e: {
            for (var C = m.key, T = h; T !== null; ) {
              if (T.key === C) {
                if (((C = m.type), C === Ln)) {
                  if (T.tag === 7) {
                    (n(p, T.sibling),
                      (h = i(T, m.props.children)),
                      (h.return = p),
                      (p = h));
                    break e;
                  }
                } else if (
                  T.elementType === C ||
                  (typeof C == 'object' &&
                    C !== null &&
                    C.$$typeof === Nt &&
                    Uc(C) === T.type)
                ) {
                  (n(p, T.sibling),
                    (h = i(T, m.props)),
                    (h.ref = xr(p, T, m)),
                    (h.return = p),
                    (p = h));
                  break e;
                }
                n(p, T);
                break;
              } else t(p, T);
              T = T.sibling;
            }
            m.type === Ln
              ? ((h = mn(m.props.children, p.mode, k, m.key)),
                (h.return = p),
                (p = h))
              : ((k = co(m.type, m.key, m.props, null, p.mode, k)),
                (k.ref = xr(p, h, m)),
                (k.return = p),
                (p = k));
          }
          return s(p);
        case Mn:
          e: {
            for (T = m.key; h !== null; ) {
              if (h.key === T)
                if (
                  h.tag === 4 &&
                  h.stateNode.containerInfo === m.containerInfo &&
                  h.stateNode.implementation === m.implementation
                ) {
                  (n(p, h.sibling),
                    (h = i(h, m.children || [])),
                    (h.return = p),
                    (p = h));
                  break e;
                } else {
                  n(p, h);
                  break;
                }
              else t(p, h);
              h = h.sibling;
            }
            ((h = Ws(m, p.mode, k)), (h.return = p), (p = h));
          }
          return s(p);
        case Nt:
          return ((T = m._init), S(p, h, T(m._payload), k));
      }
      if (Er(m)) return v(p, h, m, k);
      if (mr(m)) return y(p, h, m, k);
      Wi(p, m);
    }
    return (typeof m == 'string' && m !== '') || typeof m == 'number'
      ? ((m = '' + m),
        h !== null && h.tag === 6
          ? (n(p, h.sibling), (h = i(h, m)), (h.return = p), (p = h))
          : (n(p, h), (h = Us(m, p.mode, k)), (h.return = p), (p = h)),
        s(p))
      : n(p, h);
  }
  return S;
}
var er = qh(!0),
  ep = qh(!1),
  No = Zt(null),
  jo = null,
  _n = null,
  Kl = null;
function Gl() {
  Kl = _n = jo = null;
}
function Yl(e) {
  var t = No.current;
  (W(No), (e._currentValue = t));
}
function _a(e, t, n) {
  for (; e !== null; ) {
    var r = e.alternate;
    if (
      ((e.childLanes & t) !== t
        ? ((e.childLanes |= t), r !== null && (r.childLanes |= t))
        : r !== null && (r.childLanes & t) !== t && (r.childLanes |= t),
      e === n)
    )
      break;
    e = e.return;
  }
}
function Qn(e, t) {
  ((jo = e),
    (Kl = _n = null),
    (e = e.dependencies),
    e !== null &&
      e.firstContext !== null &&
      (e.lanes & t && (Ee = !0), (e.firstContext = null)));
}
function be(e) {
  var t = e._currentValue;
  if (Kl !== e)
    if (((e = { context: e, memoizedValue: t, next: null }), _n === null)) {
      if (jo === null) throw Error(M(308));
      ((_n = e), (jo.dependencies = { lanes: 0, firstContext: e }));
    } else _n = _n.next = e;
  return t;
}
var cn = null;
function Ql(e) {
  cn === null ? (cn = [e]) : cn.push(e);
}
function tp(e, t, n, r) {
  var i = t.interleaved;
  return (
    i === null ? ((n.next = n), Ql(t)) : ((n.next = i.next), (i.next = n)),
    (t.interleaved = n),
    St(e, r)
  );
}
function St(e, t) {
  e.lanes |= t;
  var n = e.alternate;
  for (n !== null && (n.lanes |= t), n = e, e = e.return; e !== null; )
    ((e.childLanes |= t),
      (n = e.alternate),
      n !== null && (n.childLanes |= t),
      (n = e),
      (e = e.return));
  return n.tag === 3 ? n.stateNode : null;
}
var jt = !1;
function Xl(e) {
  e.updateQueue = {
    baseState: e.memoizedState,
    firstBaseUpdate: null,
    lastBaseUpdate: null,
    shared: { pending: null, interleaved: null, lanes: 0 },
    effects: null,
  };
}
function np(e, t) {
  ((e = e.updateQueue),
    t.updateQueue === e &&
      (t.updateQueue = {
        baseState: e.baseState,
        firstBaseUpdate: e.firstBaseUpdate,
        lastBaseUpdate: e.lastBaseUpdate,
        shared: e.shared,
        effects: e.effects,
      }));
}
function yt(e, t) {
  return {
    eventTime: e,
    lane: t,
    tag: 0,
    payload: null,
    callback: null,
    next: null,
  };
}
function Ut(e, t, n) {
  var r = e.updateQueue;
  if (r === null) return null;
  if (((r = r.shared), _ & 2)) {
    var i = r.pending;
    return (
      i === null ? (t.next = t) : ((t.next = i.next), (i.next = t)),
      (r.pending = t),
      St(e, n)
    );
  }
  return (
    (i = r.interleaved),
    i === null ? ((t.next = t), Ql(r)) : ((t.next = i.next), (i.next = t)),
    (r.interleaved = t),
    St(e, n)
  );
}
function io(e, t, n) {
  if (
    ((t = t.updateQueue), t !== null && ((t = t.shared), (n & 4194240) !== 0))
  ) {
    var r = t.lanes;
    ((r &= e.pendingLanes), (n |= r), (t.lanes = n), Il(e, n));
  }
}
function Wc(e, t) {
  var n = e.updateQueue,
    r = e.alternate;
  if (r !== null && ((r = r.updateQueue), n === r)) {
    var i = null,
      o = null;
    if (((n = n.firstBaseUpdate), n !== null)) {
      do {
        var s = {
          eventTime: n.eventTime,
          lane: n.lane,
          tag: n.tag,
          payload: n.payload,
          callback: n.callback,
          next: null,
        };
        (o === null ? (i = o = s) : (o = o.next = s), (n = n.next));
      } while (n !== null);
      o === null ? (i = o = t) : (o = o.next = t);
    } else i = o = t;
    ((n = {
      baseState: r.baseState,
      firstBaseUpdate: i,
      lastBaseUpdate: o,
      shared: r.shared,
      effects: r.effects,
    }),
      (e.updateQueue = n));
    return;
  }
  ((e = n.lastBaseUpdate),
    e === null ? (n.firstBaseUpdate = t) : (e.next = t),
    (n.lastBaseUpdate = t));
}
function Do(e, t, n, r) {
  var i = e.updateQueue;
  jt = !1;
  var o = i.firstBaseUpdate,
    s = i.lastBaseUpdate,
    a = i.shared.pending;
  if (a !== null) {
    i.shared.pending = null;
    var l = a,
      u = l.next;
    ((l.next = null), s === null ? (o = u) : (s.next = u), (s = l));
    var c = e.alternate;
    c !== null &&
      ((c = c.updateQueue),
      (a = c.lastBaseUpdate),
      a !== s &&
        (a === null ? (c.firstBaseUpdate = u) : (a.next = u),
        (c.lastBaseUpdate = l)));
  }
  if (o !== null) {
    var d = i.baseState;
    ((s = 0), (c = u = l = null), (a = o));
    do {
      var f = a.lane,
        g = a.eventTime;
      if ((r & f) === f) {
        c !== null &&
          (c = c.next =
            {
              eventTime: g,
              lane: 0,
              tag: a.tag,
              payload: a.payload,
              callback: a.callback,
              next: null,
            });
        e: {
          var v = e,
            y = a;
          switch (((f = t), (g = n), y.tag)) {
            case 1:
              if (((v = y.payload), typeof v == 'function')) {
                d = v.call(g, d, f);
                break e;
              }
              d = v;
              break e;
            case 3:
              v.flags = (v.flags & -65537) | 128;
            case 0:
              if (
                ((v = y.payload),
                (f = typeof v == 'function' ? v.call(g, d, f) : v),
                f == null)
              )
                break e;
              d = Z({}, d, f);
              break e;
            case 2:
              jt = !0;
          }
        }
        a.callback !== null &&
          a.lane !== 0 &&
          ((e.flags |= 64),
          (f = i.effects),
          f === null ? (i.effects = [a]) : f.push(a));
      } else
        ((g = {
          eventTime: g,
          lane: f,
          tag: a.tag,
          payload: a.payload,
          callback: a.callback,
          next: null,
        }),
          c === null ? ((u = c = g), (l = d)) : (c = c.next = g),
          (s |= f));
      if (((a = a.next), a === null)) {
        if (((a = i.shared.pending), a === null)) break;
        ((f = a),
          (a = f.next),
          (f.next = null),
          (i.lastBaseUpdate = f),
          (i.shared.pending = null));
      }
    } while (1);
    if (
      (c === null && (l = d),
      (i.baseState = l),
      (i.firstBaseUpdate = u),
      (i.lastBaseUpdate = c),
      (t = i.shared.interleaved),
      t !== null)
    ) {
      i = t;
      do ((s |= i.lane), (i = i.next));
      while (i !== t);
    } else o === null && (i.shared.lanes = 0);
    ((Sn |= s), (e.lanes = s), (e.memoizedState = d));
  }
}
function bc(e, t, n) {
  if (((e = t.effects), (t.effects = null), e !== null))
    for (t = 0; t < e.length; t++) {
      var r = e[t],
        i = r.callback;
      if (i !== null) {
        if (((r.callback = null), (r = n), typeof i != 'function'))
          throw Error(M(191, i));
        i.call(r);
      }
    }
}
var Si = {},
  st = Zt(Si),
  ri = Zt(Si),
  ii = Zt(Si);
function dn(e) {
  if (e === Si) throw Error(M(174));
  return e;
}
function Zl(e, t) {
  switch ((z(ii, t), z(ri, e), z(st, Si), (e = t.nodeType), e)) {
    case 9:
    case 11:
      t = (t = t.documentElement) ? t.namespaceURI : ya(null, '');
      break;
    default:
      ((e = e === 8 ? t.parentNode : t),
        (t = e.namespaceURI || null),
        (e = e.tagName),
        (t = ya(t, e)));
  }
  (W(st), z(st, t));
}
function tr() {
  (W(st), W(ri), W(ii));
}
function rp(e) {
  dn(ii.current);
  var t = dn(st.current),
    n = ya(t, e.type);
  t !== n && (z(ri, e), z(st, n));
}
function Jl(e) {
  ri.current === e && (W(st), W(ri));
}
var Y = Zt(0);
function Vo(e) {
  for (var t = e; t !== null; ) {
    if (t.tag === 13) {
      var n = t.memoizedState;
      if (
        n !== null &&
        ((n = n.dehydrated), n === null || n.data === '$?' || n.data === '$!')
      )
        return t;
    } else if (t.tag === 19 && t.memoizedProps.revealOrder !== void 0) {
      if (t.flags & 128) return t;
    } else if (t.child !== null) {
      ((t.child.return = t), (t = t.child));
      continue;
    }
    if (t === e) break;
    for (; t.sibling === null; ) {
      if (t.return === null || t.return === e) return null;
      t = t.return;
    }
    ((t.sibling.return = t.return), (t = t.sibling));
  }
  return null;
}
var Fs = [];
function ql() {
  for (var e = 0; e < Fs.length; e++)
    Fs[e]._workInProgressVersionPrimary = null;
  Fs.length = 0;
}
var oo = Et.ReactCurrentDispatcher,
  _s = Et.ReactCurrentBatchConfig,
  xn = 0,
  X = null,
  se = null,
  ue = null,
  Io = !1,
  _r = !1,
  oi = 0,
  zv = 0;
function me() {
  throw Error(M(321));
}
function eu(e, t) {
  if (t === null) return !1;
  for (var n = 0; n < t.length && n < e.length; n++)
    if (!et(e[n], t[n])) return !1;
  return !0;
}
function tu(e, t, n, r, i, o) {
  if (
    ((xn = o),
    (X = t),
    (t.memoizedState = null),
    (t.updateQueue = null),
    (t.lanes = 0),
    (oo.current = e === null || e.memoizedState === null ? bv : Hv),
    (e = n(r, i)),
    _r)
  ) {
    o = 0;
    do {
      if (((_r = !1), (oi = 0), 25 <= o)) throw Error(M(301));
      ((o += 1),
        (ue = se = null),
        (t.updateQueue = null),
        (oo.current = Kv),
        (e = n(r, i)));
    } while (_r);
  }
  if (
    ((oo.current = Fo),
    (t = se !== null && se.next !== null),
    (xn = 0),
    (ue = se = X = null),
    (Io = !1),
    t)
  )
    throw Error(M(300));
  return e;
}
function nu() {
  var e = oi !== 0;
  return ((oi = 0), e);
}
function rt() {
  var e = {
    memoizedState: null,
    baseState: null,
    baseQueue: null,
    queue: null,
    next: null,
  };
  return (ue === null ? (X.memoizedState = ue = e) : (ue = ue.next = e), ue);
}
function He() {
  if (se === null) {
    var e = X.alternate;
    e = e !== null ? e.memoizedState : null;
  } else e = se.next;
  var t = ue === null ? X.memoizedState : ue.next;
  if (t !== null) ((ue = t), (se = e));
  else {
    if (e === null) throw Error(M(310));
    ((se = e),
      (e = {
        memoizedState: se.memoizedState,
        baseState: se.baseState,
        baseQueue: se.baseQueue,
        queue: se.queue,
        next: null,
      }),
      ue === null ? (X.memoizedState = ue = e) : (ue = ue.next = e));
  }
  return ue;
}
function si(e, t) {
  return typeof t == 'function' ? t(e) : t;
}
function Os(e) {
  var t = He(),
    n = t.queue;
  if (n === null) throw Error(M(311));
  n.lastRenderedReducer = e;
  var r = se,
    i = r.baseQueue,
    o = n.pending;
  if (o !== null) {
    if (i !== null) {
      var s = i.next;
      ((i.next = o.next), (o.next = s));
    }
    ((r.baseQueue = i = o), (n.pending = null));
  }
  if (i !== null) {
    ((o = i.next), (r = r.baseState));
    var a = (s = null),
      l = null,
      u = o;
    do {
      var c = u.lane;
      if ((xn & c) === c)
        (l !== null &&
          (l = l.next =
            {
              lane: 0,
              action: u.action,
              hasEagerState: u.hasEagerState,
              eagerState: u.eagerState,
              next: null,
            }),
          (r = u.hasEagerState ? u.eagerState : e(r, u.action)));
      else {
        var d = {
          lane: c,
          action: u.action,
          hasEagerState: u.hasEagerState,
          eagerState: u.eagerState,
          next: null,
        };
        (l === null ? ((a = l = d), (s = r)) : (l = l.next = d),
          (X.lanes |= c),
          (Sn |= c));
      }
      u = u.next;
    } while (u !== null && u !== o);
    (l === null ? (s = r) : (l.next = a),
      et(r, t.memoizedState) || (Ee = !0),
      (t.memoizedState = r),
      (t.baseState = s),
      (t.baseQueue = l),
      (n.lastRenderedState = r));
  }
  if (((e = n.interleaved), e !== null)) {
    i = e;
    do ((o = i.lane), (X.lanes |= o), (Sn |= o), (i = i.next));
    while (i !== e);
  } else i === null && (n.lanes = 0);
  return [t.memoizedState, n.dispatch];
}
function Bs(e) {
  var t = He(),
    n = t.queue;
  if (n === null) throw Error(M(311));
  n.lastRenderedReducer = e;
  var r = n.dispatch,
    i = n.pending,
    o = t.memoizedState;
  if (i !== null) {
    n.pending = null;
    var s = (i = i.next);
    do ((o = e(o, s.action)), (s = s.next));
    while (s !== i);
    (et(o, t.memoizedState) || (Ee = !0),
      (t.memoizedState = o),
      t.baseQueue === null && (t.baseState = o),
      (n.lastRenderedState = o));
  }
  return [o, r];
}
function ip() {}
function op(e, t) {
  var n = X,
    r = He(),
    i = t(),
    o = !et(r.memoizedState, i);
  if (
    (o && ((r.memoizedState = i), (Ee = !0)),
    (r = r.queue),
    ru(lp.bind(null, n, r, e), [e]),
    r.getSnapshot !== t || o || (ue !== null && ue.memoizedState.tag & 1))
  ) {
    if (
      ((n.flags |= 2048),
      ai(9, ap.bind(null, n, r, i, t), void 0, null),
      ce === null)
    )
      throw Error(M(349));
    xn & 30 || sp(n, t, i);
  }
  return i;
}
function sp(e, t, n) {
  ((e.flags |= 16384),
    (e = { getSnapshot: t, value: n }),
    (t = X.updateQueue),
    t === null
      ? ((t = { lastEffect: null, stores: null }),
        (X.updateQueue = t),
        (t.stores = [e]))
      : ((n = t.stores), n === null ? (t.stores = [e]) : n.push(e)));
}
function ap(e, t, n, r) {
  ((t.value = n), (t.getSnapshot = r), up(t) && cp(e));
}
function lp(e, t, n) {
  return n(function () {
    up(t) && cp(e);
  });
}
function up(e) {
  var t = e.getSnapshot;
  e = e.value;
  try {
    var n = t();
    return !et(e, n);
  } catch {
    return !0;
  }
}
function cp(e) {
  var t = St(e, 1);
  t !== null && qe(t, e, 1, -1);
}
function Hc(e) {
  var t = rt();
  return (
    typeof e == 'function' && (e = e()),
    (t.memoizedState = t.baseState = e),
    (e = {
      pending: null,
      interleaved: null,
      lanes: 0,
      dispatch: null,
      lastRenderedReducer: si,
      lastRenderedState: e,
    }),
    (t.queue = e),
    (e = e.dispatch = Wv.bind(null, X, e)),
    [t.memoizedState, e]
  );
}
function ai(e, t, n, r) {
  return (
    (e = { tag: e, create: t, destroy: n, deps: r, next: null }),
    (t = X.updateQueue),
    t === null
      ? ((t = { lastEffect: null, stores: null }),
        (X.updateQueue = t),
        (t.lastEffect = e.next = e))
      : ((n = t.lastEffect),
        n === null
          ? (t.lastEffect = e.next = e)
          : ((r = n.next), (n.next = e), (e.next = r), (t.lastEffect = e))),
    e
  );
}
function dp() {
  return He().memoizedState;
}
function so(e, t, n, r) {
  var i = rt();
  ((X.flags |= e),
    (i.memoizedState = ai(1 | t, n, void 0, r === void 0 ? null : r)));
}
function ts(e, t, n, r) {
  var i = He();
  r = r === void 0 ? null : r;
  var o = void 0;
  if (se !== null) {
    var s = se.memoizedState;
    if (((o = s.destroy), r !== null && eu(r, s.deps))) {
      i.memoizedState = ai(t, n, o, r);
      return;
    }
  }
  ((X.flags |= e), (i.memoizedState = ai(1 | t, n, o, r)));
}
function Kc(e, t) {
  return so(8390656, 8, e, t);
}
function ru(e, t) {
  return ts(2048, 8, e, t);
}
function fp(e, t) {
  return ts(4, 2, e, t);
}
function hp(e, t) {
  return ts(4, 4, e, t);
}
function pp(e, t) {
  if (typeof t == 'function')
    return (
      (e = e()),
      t(e),
      function () {
        t(null);
      }
    );
  if (t != null)
    return (
      (e = e()),
      (t.current = e),
      function () {
        t.current = null;
      }
    );
}
function mp(e, t, n) {
  return (
    (n = n != null ? n.concat([e]) : null),
    ts(4, 4, pp.bind(null, t, e), n)
  );
}
function iu() {}
function gp(e, t) {
  var n = He();
  t = t === void 0 ? null : t;
  var r = n.memoizedState;
  return r !== null && t !== null && eu(t, r[1])
    ? r[0]
    : ((n.memoizedState = [e, t]), e);
}
function yp(e, t) {
  var n = He();
  t = t === void 0 ? null : t;
  var r = n.memoizedState;
  return r !== null && t !== null && eu(t, r[1])
    ? r[0]
    : ((e = e()), (n.memoizedState = [e, t]), e);
}
function vp(e, t, n) {
  return xn & 21
    ? (et(n, t) || ((n = Ch()), (X.lanes |= n), (Sn |= n), (e.baseState = !0)),
      t)
    : (e.baseState && ((e.baseState = !1), (Ee = !0)), (e.memoizedState = n));
}
function $v(e, t) {
  var n = O;
  ((O = n !== 0 && 4 > n ? n : 4), e(!0));
  var r = _s.transition;
  _s.transition = {};
  try {
    (e(!1), t());
  } finally {
    ((O = n), (_s.transition = r));
  }
}
function wp() {
  return He().memoizedState;
}
function Uv(e, t, n) {
  var r = bt(e);
  if (
    ((n = {
      lane: r,
      action: n,
      hasEagerState: !1,
      eagerState: null,
      next: null,
    }),
    xp(e))
  )
    Sp(t, n);
  else if (((n = tp(e, t, n, r)), n !== null)) {
    var i = ke();
    (qe(n, e, r, i), kp(n, t, r));
  }
}
function Wv(e, t, n) {
  var r = bt(e),
    i = { lane: r, action: n, hasEagerState: !1, eagerState: null, next: null };
  if (xp(e)) Sp(t, i);
  else {
    var o = e.alternate;
    if (
      e.lanes === 0 &&
      (o === null || o.lanes === 0) &&
      ((o = t.lastRenderedReducer), o !== null)
    )
      try {
        var s = t.lastRenderedState,
          a = o(s, n);
        if (((i.hasEagerState = !0), (i.eagerState = a), et(a, s))) {
          var l = t.interleaved;
          (l === null
            ? ((i.next = i), Ql(t))
            : ((i.next = l.next), (l.next = i)),
            (t.interleaved = i));
          return;
        }
      } catch {
      } finally {
      }
    ((n = tp(e, t, i, r)),
      n !== null && ((i = ke()), qe(n, e, r, i), kp(n, t, r)));
  }
}
function xp(e) {
  var t = e.alternate;
  return e === X || (t !== null && t === X);
}
function Sp(e, t) {
  _r = Io = !0;
  var n = e.pending;
  (n === null ? (t.next = t) : ((t.next = n.next), (n.next = t)),
    (e.pending = t));
}
function kp(e, t, n) {
  if (n & 4194240) {
    var r = t.lanes;
    ((r &= e.pendingLanes), (n |= r), (t.lanes = n), Il(e, n));
  }
}
var Fo = {
    readContext: be,
    useCallback: me,
    useContext: me,
    useEffect: me,
    useImperativeHandle: me,
    useInsertionEffect: me,
    useLayoutEffect: me,
    useMemo: me,
    useReducer: me,
    useRef: me,
    useState: me,
    useDebugValue: me,
    useDeferredValue: me,
    useTransition: me,
    useMutableSource: me,
    useSyncExternalStore: me,
    useId: me,
    unstable_isNewReconciler: !1,
  },
  bv = {
    readContext: be,
    useCallback: function (e, t) {
      return ((rt().memoizedState = [e, t === void 0 ? null : t]), e);
    },
    useContext: be,
    useEffect: Kc,
    useImperativeHandle: function (e, t, n) {
      return (
        (n = n != null ? n.concat([e]) : null),
        so(4194308, 4, pp.bind(null, t, e), n)
      );
    },
    useLayoutEffect: function (e, t) {
      return so(4194308, 4, e, t);
    },
    useInsertionEffect: function (e, t) {
      return so(4, 2, e, t);
    },
    useMemo: function (e, t) {
      var n = rt();
      return (
        (t = t === void 0 ? null : t),
        (e = e()),
        (n.memoizedState = [e, t]),
        e
      );
    },
    useReducer: function (e, t, n) {
      var r = rt();
      return (
        (t = n !== void 0 ? n(t) : t),
        (r.memoizedState = r.baseState = t),
        (e = {
          pending: null,
          interleaved: null,
          lanes: 0,
          dispatch: null,
          lastRenderedReducer: e,
          lastRenderedState: t,
        }),
        (r.queue = e),
        (e = e.dispatch = Uv.bind(null, X, e)),
        [r.memoizedState, e]
      );
    },
    useRef: function (e) {
      var t = rt();
      return ((e = { current: e }), (t.memoizedState = e));
    },
    useState: Hc,
    useDebugValue: iu,
    useDeferredValue: function (e) {
      return (rt().memoizedState = e);
    },
    useTransition: function () {
      var e = Hc(!1),
        t = e[0];
      return ((e = $v.bind(null, e[1])), (rt().memoizedState = e), [t, e]);
    },
    useMutableSource: function () {},
    useSyncExternalStore: function (e, t, n) {
      var r = X,
        i = rt();
      if (b) {
        if (n === void 0) throw Error(M(407));
        n = n();
      } else {
        if (((n = t()), ce === null)) throw Error(M(349));
        xn & 30 || sp(r, t, n);
      }
      i.memoizedState = n;
      var o = { value: n, getSnapshot: t };
      return (
        (i.queue = o),
        Kc(lp.bind(null, r, o, e), [e]),
        (r.flags |= 2048),
        ai(9, ap.bind(null, r, o, n, t), void 0, null),
        n
      );
    },
    useId: function () {
      var e = rt(),
        t = ce.identifierPrefix;
      if (b) {
        var n = pt,
          r = ht;
        ((n = (r & ~(1 << (32 - Je(r) - 1))).toString(32) + n),
          (t = ':' + t + 'R' + n),
          (n = oi++),
          0 < n && (t += 'H' + n.toString(32)),
          (t += ':'));
      } else ((n = zv++), (t = ':' + t + 'r' + n.toString(32) + ':'));
      return (e.memoizedState = t);
    },
    unstable_isNewReconciler: !1,
  },
  Hv = {
    readContext: be,
    useCallback: gp,
    useContext: be,
    useEffect: ru,
    useImperativeHandle: mp,
    useInsertionEffect: fp,
    useLayoutEffect: hp,
    useMemo: yp,
    useReducer: Os,
    useRef: dp,
    useState: function () {
      return Os(si);
    },
    useDebugValue: iu,
    useDeferredValue: function (e) {
      var t = He();
      return vp(t, se.memoizedState, e);
    },
    useTransition: function () {
      var e = Os(si)[0],
        t = He().memoizedState;
      return [e, t];
    },
    useMutableSource: ip,
    useSyncExternalStore: op,
    useId: wp,
    unstable_isNewReconciler: !1,
  },
  Kv = {
    readContext: be,
    useCallback: gp,
    useContext: be,
    useEffect: ru,
    useImperativeHandle: mp,
    useInsertionEffect: fp,
    useLayoutEffect: hp,
    useMemo: yp,
    useReducer: Bs,
    useRef: dp,
    useState: function () {
      return Bs(si);
    },
    useDebugValue: iu,
    useDeferredValue: function (e) {
      var t = He();
      return se === null ? (t.memoizedState = e) : vp(t, se.memoizedState, e);
    },
    useTransition: function () {
      var e = Bs(si)[0],
        t = He().memoizedState;
      return [e, t];
    },
    useMutableSource: ip,
    useSyncExternalStore: op,
    useId: wp,
    unstable_isNewReconciler: !1,
  };
function Qe(e, t) {
  if (e && e.defaultProps) {
    ((t = Z({}, t)), (e = e.defaultProps));
    for (var n in e) t[n] === void 0 && (t[n] = e[n]);
    return t;
  }
  return t;
}
function Oa(e, t, n, r) {
  ((t = e.memoizedState),
    (n = n(r, t)),
    (n = n == null ? t : Z({}, t, n)),
    (e.memoizedState = n),
    e.lanes === 0 && (e.updateQueue.baseState = n));
}
var ns = {
  isMounted: function (e) {
    return (e = e._reactInternals) ? Pn(e) === e : !1;
  },
  enqueueSetState: function (e, t, n) {
    e = e._reactInternals;
    var r = ke(),
      i = bt(e),
      o = yt(r, i);
    ((o.payload = t),
      n != null && (o.callback = n),
      (t = Ut(e, o, i)),
      t !== null && (qe(t, e, i, r), io(t, e, i)));
  },
  enqueueReplaceState: function (e, t, n) {
    e = e._reactInternals;
    var r = ke(),
      i = bt(e),
      o = yt(r, i);
    ((o.tag = 1),
      (o.payload = t),
      n != null && (o.callback = n),
      (t = Ut(e, o, i)),
      t !== null && (qe(t, e, i, r), io(t, e, i)));
  },
  enqueueForceUpdate: function (e, t) {
    e = e._reactInternals;
    var n = ke(),
      r = bt(e),
      i = yt(n, r);
    ((i.tag = 2),
      t != null && (i.callback = t),
      (t = Ut(e, i, r)),
      t !== null && (qe(t, e, r, n), io(t, e, r)));
  },
};
function Gc(e, t, n, r, i, o, s) {
  return (
    (e = e.stateNode),
    typeof e.shouldComponentUpdate == 'function'
      ? e.shouldComponentUpdate(r, o, s)
      : t.prototype && t.prototype.isPureReactComponent
        ? !qr(n, r) || !qr(i, o)
        : !0
  );
}
function Cp(e, t, n) {
  var r = !1,
    i = Gt,
    o = t.contextType;
  return (
    typeof o == 'object' && o !== null
      ? (o = be(o))
      : ((i = Le(t) ? vn : we.current),
        (r = t.contextTypes),
        (o = (r = r != null) ? Jn(e, i) : Gt)),
    (t = new t(n, o)),
    (e.memoizedState = t.state !== null && t.state !== void 0 ? t.state : null),
    (t.updater = ns),
    (e.stateNode = t),
    (t._reactInternals = e),
    r &&
      ((e = e.stateNode),
      (e.__reactInternalMemoizedUnmaskedChildContext = i),
      (e.__reactInternalMemoizedMaskedChildContext = o)),
    t
  );
}
function Yc(e, t, n, r) {
  ((e = t.state),
    typeof t.componentWillReceiveProps == 'function' &&
      t.componentWillReceiveProps(n, r),
    typeof t.UNSAFE_componentWillReceiveProps == 'function' &&
      t.UNSAFE_componentWillReceiveProps(n, r),
    t.state !== e && ns.enqueueReplaceState(t, t.state, null));
}
function Ba(e, t, n, r) {
  var i = e.stateNode;
  ((i.props = n), (i.state = e.memoizedState), (i.refs = {}), Xl(e));
  var o = t.contextType;
  (typeof o == 'object' && o !== null
    ? (i.context = be(o))
    : ((o = Le(t) ? vn : we.current), (i.context = Jn(e, o))),
    (i.state = e.memoizedState),
    (o = t.getDerivedStateFromProps),
    typeof o == 'function' && (Oa(e, t, o, n), (i.state = e.memoizedState)),
    typeof t.getDerivedStateFromProps == 'function' ||
      typeof i.getSnapshotBeforeUpdate == 'function' ||
      (typeof i.UNSAFE_componentWillMount != 'function' &&
        typeof i.componentWillMount != 'function') ||
      ((t = i.state),
      typeof i.componentWillMount == 'function' && i.componentWillMount(),
      typeof i.UNSAFE_componentWillMount == 'function' &&
        i.UNSAFE_componentWillMount(),
      t !== i.state && ns.enqueueReplaceState(i, i.state, null),
      Do(e, n, i, r),
      (i.state = e.memoizedState)),
    typeof i.componentDidMount == 'function' && (e.flags |= 4194308));
}
function nr(e, t) {
  try {
    var n = '',
      r = t;
    do ((n += xy(r)), (r = r.return));
    while (r);
    var i = n;
  } catch (o) {
    i =
      `
Error generating stack: ` +
      o.message +
      `
` +
      o.stack;
  }
  return { value: e, source: t, stack: i, digest: null };
}
function zs(e, t, n) {
  return { value: e, source: null, stack: n ?? null, digest: t ?? null };
}
function za(e, t) {
  try {
    console.error(t.value);
  } catch (n) {
    setTimeout(function () {
      throw n;
    });
  }
}
var Gv = typeof WeakMap == 'function' ? WeakMap : Map;
function Pp(e, t, n) {
  ((n = yt(-1, n)), (n.tag = 3), (n.payload = { element: null }));
  var r = t.value;
  return (
    (n.callback = function () {
      (Oo || ((Oo = !0), (Xa = r)), za(e, t));
    }),
    n
  );
}
function Tp(e, t, n) {
  ((n = yt(-1, n)), (n.tag = 3));
  var r = e.type.getDerivedStateFromError;
  if (typeof r == 'function') {
    var i = t.value;
    ((n.payload = function () {
      return r(i);
    }),
      (n.callback = function () {
        za(e, t);
      }));
  }
  var o = e.stateNode;
  return (
    o !== null &&
      typeof o.componentDidCatch == 'function' &&
      (n.callback = function () {
        (za(e, t),
          typeof r != 'function' &&
            (Wt === null ? (Wt = new Set([this])) : Wt.add(this)));
        var s = t.stack;
        this.componentDidCatch(t.value, {
          componentStack: s !== null ? s : '',
        });
      }),
    n
  );
}
function Qc(e, t, n) {
  var r = e.pingCache;
  if (r === null) {
    r = e.pingCache = new Gv();
    var i = new Set();
    r.set(t, i);
  } else ((i = r.get(t)), i === void 0 && ((i = new Set()), r.set(t, i)));
  i.has(n) || (i.add(n), (e = a0.bind(null, e, t, n)), t.then(e, e));
}
function Xc(e) {
  do {
    var t;
    if (
      ((t = e.tag === 13) &&
        ((t = e.memoizedState), (t = t !== null ? t.dehydrated !== null : !0)),
      t)
    )
      return e;
    e = e.return;
  } while (e !== null);
  return null;
}
function Zc(e, t, n, r, i) {
  return e.mode & 1
    ? ((e.flags |= 65536), (e.lanes = i), e)
    : (e === t
        ? (e.flags |= 65536)
        : ((e.flags |= 128),
          (n.flags |= 131072),
          (n.flags &= -52805),
          n.tag === 1 &&
            (n.alternate === null
              ? (n.tag = 17)
              : ((t = yt(-1, 1)), (t.tag = 2), Ut(n, t, 1))),
          (n.lanes |= 1)),
      e);
}
var Yv = Et.ReactCurrentOwner,
  Ee = !1;
function xe(e, t, n, r) {
  t.child = e === null ? ep(t, null, n, r) : er(t, e.child, n, r);
}
function Jc(e, t, n, r, i) {
  n = n.render;
  var o = t.ref;
  return (
    Qn(t, i),
    (r = tu(e, t, n, r, o, i)),
    (n = nu()),
    e !== null && !Ee
      ? ((t.updateQueue = e.updateQueue),
        (t.flags &= -2053),
        (e.lanes &= ~i),
        kt(e, t, i))
      : (b && n && Wl(t), (t.flags |= 1), xe(e, t, r, i), t.child)
  );
}
function qc(e, t, n, r, i) {
  if (e === null) {
    var o = n.type;
    return typeof o == 'function' &&
      !fu(o) &&
      o.defaultProps === void 0 &&
      n.compare === null &&
      n.defaultProps === void 0
      ? ((t.tag = 15), (t.type = o), Ep(e, t, o, r, i))
      : ((e = co(n.type, null, r, t, t.mode, i)),
        (e.ref = t.ref),
        (e.return = t),
        (t.child = e));
  }
  if (((o = e.child), !(e.lanes & i))) {
    var s = o.memoizedProps;
    if (
      ((n = n.compare), (n = n !== null ? n : qr), n(s, r) && e.ref === t.ref)
    )
      return kt(e, t, i);
  }
  return (
    (t.flags |= 1),
    (e = Ht(o, r)),
    (e.ref = t.ref),
    (e.return = t),
    (t.child = e)
  );
}
function Ep(e, t, n, r, i) {
  if (e !== null) {
    var o = e.memoizedProps;
    if (qr(o, r) && e.ref === t.ref)
      if (((Ee = !1), (t.pendingProps = r = o), (e.lanes & i) !== 0))
        e.flags & 131072 && (Ee = !0);
      else return ((t.lanes = e.lanes), kt(e, t, i));
  }
  return $a(e, t, n, r, i);
}
function Rp(e, t, n) {
  var r = t.pendingProps,
    i = r.children,
    o = e !== null ? e.memoizedState : null;
  if (r.mode === 'hidden')
    if (!(t.mode & 1))
      ((t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }),
        z(Bn, Ne),
        (Ne |= n));
    else {
      if (!(n & 1073741824))
        return (
          (e = o !== null ? o.baseLanes | n : n),
          (t.lanes = t.childLanes = 1073741824),
          (t.memoizedState = {
            baseLanes: e,
            cachePool: null,
            transitions: null,
          }),
          (t.updateQueue = null),
          z(Bn, Ne),
          (Ne |= e),
          null
        );
      ((t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }),
        (r = o !== null ? o.baseLanes : n),
        z(Bn, Ne),
        (Ne |= r));
    }
  else
    (o !== null ? ((r = o.baseLanes | n), (t.memoizedState = null)) : (r = n),
      z(Bn, Ne),
      (Ne |= r));
  return (xe(e, t, i, n), t.child);
}
function Mp(e, t) {
  var n = t.ref;
  ((e === null && n !== null) || (e !== null && e.ref !== n)) &&
    ((t.flags |= 512), (t.flags |= 2097152));
}
function $a(e, t, n, r, i) {
  var o = Le(n) ? vn : we.current;
  return (
    (o = Jn(t, o)),
    Qn(t, i),
    (n = tu(e, t, n, r, o, i)),
    (r = nu()),
    e !== null && !Ee
      ? ((t.updateQueue = e.updateQueue),
        (t.flags &= -2053),
        (e.lanes &= ~i),
        kt(e, t, i))
      : (b && r && Wl(t), (t.flags |= 1), xe(e, t, n, i), t.child)
  );
}
function ed(e, t, n, r, i) {
  if (Le(n)) {
    var o = !0;
    Mo(t);
  } else o = !1;
  if ((Qn(t, i), t.stateNode === null))
    (ao(e, t), Cp(t, n, r), Ba(t, n, r, i), (r = !0));
  else if (e === null) {
    var s = t.stateNode,
      a = t.memoizedProps;
    s.props = a;
    var l = s.context,
      u = n.contextType;
    typeof u == 'object' && u !== null
      ? (u = be(u))
      : ((u = Le(n) ? vn : we.current), (u = Jn(t, u)));
    var c = n.getDerivedStateFromProps,
      d =
        typeof c == 'function' ||
        typeof s.getSnapshotBeforeUpdate == 'function';
    (d ||
      (typeof s.UNSAFE_componentWillReceiveProps != 'function' &&
        typeof s.componentWillReceiveProps != 'function') ||
      ((a !== r || l !== u) && Yc(t, s, r, u)),
      (jt = !1));
    var f = t.memoizedState;
    ((s.state = f),
      Do(t, r, s, i),
      (l = t.memoizedState),
      a !== r || f !== l || Me.current || jt
        ? (typeof c == 'function' && (Oa(t, n, c, r), (l = t.memoizedState)),
          (a = jt || Gc(t, n, a, r, f, l, u))
            ? (d ||
                (typeof s.UNSAFE_componentWillMount != 'function' &&
                  typeof s.componentWillMount != 'function') ||
                (typeof s.componentWillMount == 'function' &&
                  s.componentWillMount(),
                typeof s.UNSAFE_componentWillMount == 'function' &&
                  s.UNSAFE_componentWillMount()),
              typeof s.componentDidMount == 'function' && (t.flags |= 4194308))
            : (typeof s.componentDidMount == 'function' && (t.flags |= 4194308),
              (t.memoizedProps = r),
              (t.memoizedState = l)),
          (s.props = r),
          (s.state = l),
          (s.context = u),
          (r = a))
        : (typeof s.componentDidMount == 'function' && (t.flags |= 4194308),
          (r = !1)));
  } else {
    ((s = t.stateNode),
      np(e, t),
      (a = t.memoizedProps),
      (u = t.type === t.elementType ? a : Qe(t.type, a)),
      (s.props = u),
      (d = t.pendingProps),
      (f = s.context),
      (l = n.contextType),
      typeof l == 'object' && l !== null
        ? (l = be(l))
        : ((l = Le(n) ? vn : we.current), (l = Jn(t, l))));
    var g = n.getDerivedStateFromProps;
    ((c =
      typeof g == 'function' ||
      typeof s.getSnapshotBeforeUpdate == 'function') ||
      (typeof s.UNSAFE_componentWillReceiveProps != 'function' &&
        typeof s.componentWillReceiveProps != 'function') ||
      ((a !== d || f !== l) && Yc(t, s, r, l)),
      (jt = !1),
      (f = t.memoizedState),
      (s.state = f),
      Do(t, r, s, i));
    var v = t.memoizedState;
    a !== d || f !== v || Me.current || jt
      ? (typeof g == 'function' && (Oa(t, n, g, r), (v = t.memoizedState)),
        (u = jt || Gc(t, n, u, r, f, v, l) || !1)
          ? (c ||
              (typeof s.UNSAFE_componentWillUpdate != 'function' &&
                typeof s.componentWillUpdate != 'function') ||
              (typeof s.componentWillUpdate == 'function' &&
                s.componentWillUpdate(r, v, l),
              typeof s.UNSAFE_componentWillUpdate == 'function' &&
                s.UNSAFE_componentWillUpdate(r, v, l)),
            typeof s.componentDidUpdate == 'function' && (t.flags |= 4),
            typeof s.getSnapshotBeforeUpdate == 'function' && (t.flags |= 1024))
          : (typeof s.componentDidUpdate != 'function' ||
              (a === e.memoizedProps && f === e.memoizedState) ||
              (t.flags |= 4),
            typeof s.getSnapshotBeforeUpdate != 'function' ||
              (a === e.memoizedProps && f === e.memoizedState) ||
              (t.flags |= 1024),
            (t.memoizedProps = r),
            (t.memoizedState = v)),
        (s.props = r),
        (s.state = v),
        (s.context = l),
        (r = u))
      : (typeof s.componentDidUpdate != 'function' ||
          (a === e.memoizedProps && f === e.memoizedState) ||
          (t.flags |= 4),
        typeof s.getSnapshotBeforeUpdate != 'function' ||
          (a === e.memoizedProps && f === e.memoizedState) ||
          (t.flags |= 1024),
        (r = !1));
  }
  return Ua(e, t, n, r, o, i);
}
function Ua(e, t, n, r, i, o) {
  Mp(e, t);
  var s = (t.flags & 128) !== 0;
  if (!r && !s) return (i && Bc(t, n, !1), kt(e, t, o));
  ((r = t.stateNode), (Yv.current = t));
  var a =
    s && typeof n.getDerivedStateFromError != 'function' ? null : r.render();
  return (
    (t.flags |= 1),
    e !== null && s
      ? ((t.child = er(t, e.child, null, o)), (t.child = er(t, null, a, o)))
      : xe(e, t, a, o),
    (t.memoizedState = r.state),
    i && Bc(t, n, !0),
    t.child
  );
}
function Lp(e) {
  var t = e.stateNode;
  (t.pendingContext
    ? Oc(e, t.pendingContext, t.pendingContext !== t.context)
    : t.context && Oc(e, t.context, !1),
    Zl(e, t.containerInfo));
}
function td(e, t, n, r, i) {
  return (qn(), Hl(i), (t.flags |= 256), xe(e, t, n, r), t.child);
}
var Wa = { dehydrated: null, treeContext: null, retryLane: 0 };
function ba(e) {
  return { baseLanes: e, cachePool: null, transitions: null };
}
function Ap(e, t, n) {
  var r = t.pendingProps,
    i = Y.current,
    o = !1,
    s = (t.flags & 128) !== 0,
    a;
  if (
    ((a = s) ||
      (a = e !== null && e.memoizedState === null ? !1 : (i & 2) !== 0),
    a
      ? ((o = !0), (t.flags &= -129))
      : (e === null || e.memoizedState !== null) && (i |= 1),
    z(Y, i & 1),
    e === null)
  )
    return (
      Fa(t),
      (e = t.memoizedState),
      e !== null && ((e = e.dehydrated), e !== null)
        ? (t.mode & 1
            ? e.data === '$!'
              ? (t.lanes = 8)
              : (t.lanes = 1073741824)
            : (t.lanes = 1),
          null)
        : ((s = r.children),
          (e = r.fallback),
          o
            ? ((r = t.mode),
              (o = t.child),
              (s = { mode: 'hidden', children: s }),
              !(r & 1) && o !== null
                ? ((o.childLanes = 0), (o.pendingProps = s))
                : (o = os(s, r, 0, null)),
              (e = mn(e, r, n, null)),
              (o.return = t),
              (e.return = t),
              (o.sibling = e),
              (t.child = o),
              (t.child.memoizedState = ba(n)),
              (t.memoizedState = Wa),
              e)
            : ou(t, s))
    );
  if (((i = e.memoizedState), i !== null && ((a = i.dehydrated), a !== null)))
    return Qv(e, t, s, r, a, i, n);
  if (o) {
    ((o = r.fallback), (s = t.mode), (i = e.child), (a = i.sibling));
    var l = { mode: 'hidden', children: r.children };
    return (
      !(s & 1) && t.child !== i
        ? ((r = t.child),
          (r.childLanes = 0),
          (r.pendingProps = l),
          (t.deletions = null))
        : ((r = Ht(i, l)), (r.subtreeFlags = i.subtreeFlags & 14680064)),
      a !== null ? (o = Ht(a, o)) : ((o = mn(o, s, n, null)), (o.flags |= 2)),
      (o.return = t),
      (r.return = t),
      (r.sibling = o),
      (t.child = r),
      (r = o),
      (o = t.child),
      (s = e.child.memoizedState),
      (s =
        s === null
          ? ba(n)
          : {
              baseLanes: s.baseLanes | n,
              cachePool: null,
              transitions: s.transitions,
            }),
      (o.memoizedState = s),
      (o.childLanes = e.childLanes & ~n),
      (t.memoizedState = Wa),
      r
    );
  }
  return (
    (o = e.child),
    (e = o.sibling),
    (r = Ht(o, { mode: 'visible', children: r.children })),
    !(t.mode & 1) && (r.lanes = n),
    (r.return = t),
    (r.sibling = null),
    e !== null &&
      ((n = t.deletions),
      n === null ? ((t.deletions = [e]), (t.flags |= 16)) : n.push(e)),
    (t.child = r),
    (t.memoizedState = null),
    r
  );
}
function ou(e, t) {
  return (
    (t = os({ mode: 'visible', children: t }, e.mode, 0, null)),
    (t.return = e),
    (e.child = t)
  );
}
function bi(e, t, n, r) {
  return (
    r !== null && Hl(r),
    er(t, e.child, null, n),
    (e = ou(t, t.pendingProps.children)),
    (e.flags |= 2),
    (t.memoizedState = null),
    e
  );
}
function Qv(e, t, n, r, i, o, s) {
  if (n)
    return t.flags & 256
      ? ((t.flags &= -257), (r = zs(Error(M(422)))), bi(e, t, s, r))
      : t.memoizedState !== null
        ? ((t.child = e.child), (t.flags |= 128), null)
        : ((o = r.fallback),
          (i = t.mode),
          (r = os({ mode: 'visible', children: r.children }, i, 0, null)),
          (o = mn(o, i, s, null)),
          (o.flags |= 2),
          (r.return = t),
          (o.return = t),
          (r.sibling = o),
          (t.child = r),
          t.mode & 1 && er(t, e.child, null, s),
          (t.child.memoizedState = ba(s)),
          (t.memoizedState = Wa),
          o);
  if (!(t.mode & 1)) return bi(e, t, s, null);
  if (i.data === '$!') {
    if (((r = i.nextSibling && i.nextSibling.dataset), r)) var a = r.dgst;
    return (
      (r = a),
      (o = Error(M(419))),
      (r = zs(o, r, void 0)),
      bi(e, t, s, r)
    );
  }
  if (((a = (s & e.childLanes) !== 0), Ee || a)) {
    if (((r = ce), r !== null)) {
      switch (s & -s) {
        case 4:
          i = 2;
          break;
        case 16:
          i = 8;
          break;
        case 64:
        case 128:
        case 256:
        case 512:
        case 1024:
        case 2048:
        case 4096:
        case 8192:
        case 16384:
        case 32768:
        case 65536:
        case 131072:
        case 262144:
        case 524288:
        case 1048576:
        case 2097152:
        case 4194304:
        case 8388608:
        case 16777216:
        case 33554432:
        case 67108864:
          i = 32;
          break;
        case 536870912:
          i = 268435456;
          break;
        default:
          i = 0;
      }
      ((i = i & (r.suspendedLanes | s) ? 0 : i),
        i !== 0 &&
          i !== o.retryLane &&
          ((o.retryLane = i), St(e, i), qe(r, e, i, -1)));
    }
    return (du(), (r = zs(Error(M(421)))), bi(e, t, s, r));
  }
  return i.data === '$?'
    ? ((t.flags |= 128),
      (t.child = e.child),
      (t = l0.bind(null, e)),
      (i._reactRetry = t),
      null)
    : ((e = o.treeContext),
      (je = $t(i.nextSibling)),
      (De = t),
      (b = !0),
      (Ze = null),
      e !== null &&
        ((Be[ze++] = ht),
        (Be[ze++] = pt),
        (Be[ze++] = wn),
        (ht = e.id),
        (pt = e.overflow),
        (wn = t)),
      (t = ou(t, r.children)),
      (t.flags |= 4096),
      t);
}
function nd(e, t, n) {
  e.lanes |= t;
  var r = e.alternate;
  (r !== null && (r.lanes |= t), _a(e.return, t, n));
}
function $s(e, t, n, r, i) {
  var o = e.memoizedState;
  o === null
    ? (e.memoizedState = {
        isBackwards: t,
        rendering: null,
        renderingStartTime: 0,
        last: r,
        tail: n,
        tailMode: i,
      })
    : ((o.isBackwards = t),
      (o.rendering = null),
      (o.renderingStartTime = 0),
      (o.last = r),
      (o.tail = n),
      (o.tailMode = i));
}
function Np(e, t, n) {
  var r = t.pendingProps,
    i = r.revealOrder,
    o = r.tail;
  if ((xe(e, t, r.children, n), (r = Y.current), r & 2))
    ((r = (r & 1) | 2), (t.flags |= 128));
  else {
    if (e !== null && e.flags & 128)
      e: for (e = t.child; e !== null; ) {
        if (e.tag === 13) e.memoizedState !== null && nd(e, n, t);
        else if (e.tag === 19) nd(e, n, t);
        else if (e.child !== null) {
          ((e.child.return = e), (e = e.child));
          continue;
        }
        if (e === t) break e;
        for (; e.sibling === null; ) {
          if (e.return === null || e.return === t) break e;
          e = e.return;
        }
        ((e.sibling.return = e.return), (e = e.sibling));
      }
    r &= 1;
  }
  if ((z(Y, r), !(t.mode & 1))) t.memoizedState = null;
  else
    switch (i) {
      case 'forwards':
        for (n = t.child, i = null; n !== null; )
          ((e = n.alternate),
            e !== null && Vo(e) === null && (i = n),
            (n = n.sibling));
        ((n = i),
          n === null
            ? ((i = t.child), (t.child = null))
            : ((i = n.sibling), (n.sibling = null)),
          $s(t, !1, i, n, o));
        break;
      case 'backwards':
        for (n = null, i = t.child, t.child = null; i !== null; ) {
          if (((e = i.alternate), e !== null && Vo(e) === null)) {
            t.child = i;
            break;
          }
          ((e = i.sibling), (i.sibling = n), (n = i), (i = e));
        }
        $s(t, !0, n, null, o);
        break;
      case 'together':
        $s(t, !1, null, null, void 0);
        break;
      default:
        t.memoizedState = null;
    }
  return t.child;
}
function ao(e, t) {
  !(t.mode & 1) &&
    e !== null &&
    ((e.alternate = null), (t.alternate = null), (t.flags |= 2));
}
function kt(e, t, n) {
  if (
    (e !== null && (t.dependencies = e.dependencies),
    (Sn |= t.lanes),
    !(n & t.childLanes))
  )
    return null;
  if (e !== null && t.child !== e.child) throw Error(M(153));
  if (t.child !== null) {
    for (
      e = t.child, n = Ht(e, e.pendingProps), t.child = n, n.return = t;
      e.sibling !== null;

    )
      ((e = e.sibling),
        (n = n.sibling = Ht(e, e.pendingProps)),
        (n.return = t));
    n.sibling = null;
  }
  return t.child;
}
function Xv(e, t, n) {
  switch (t.tag) {
    case 3:
      (Lp(t), qn());
      break;
    case 5:
      rp(t);
      break;
    case 1:
      Le(t.type) && Mo(t);
      break;
    case 4:
      Zl(t, t.stateNode.containerInfo);
      break;
    case 10:
      var r = t.type._context,
        i = t.memoizedProps.value;
      (z(No, r._currentValue), (r._currentValue = i));
      break;
    case 13:
      if (((r = t.memoizedState), r !== null))
        return r.dehydrated !== null
          ? (z(Y, Y.current & 1), (t.flags |= 128), null)
          : n & t.child.childLanes
            ? Ap(e, t, n)
            : (z(Y, Y.current & 1),
              (e = kt(e, t, n)),
              e !== null ? e.sibling : null);
      z(Y, Y.current & 1);
      break;
    case 19:
      if (((r = (n & t.childLanes) !== 0), e.flags & 128)) {
        if (r) return Np(e, t, n);
        t.flags |= 128;
      }
      if (
        ((i = t.memoizedState),
        i !== null &&
          ((i.rendering = null), (i.tail = null), (i.lastEffect = null)),
        z(Y, Y.current),
        r)
      )
        break;
      return null;
    case 22:
    case 23:
      return ((t.lanes = 0), Rp(e, t, n));
  }
  return kt(e, t, n);
}
var jp, Ha, Dp, Vp;
jp = function (e, t) {
  for (var n = t.child; n !== null; ) {
    if (n.tag === 5 || n.tag === 6) e.appendChild(n.stateNode);
    else if (n.tag !== 4 && n.child !== null) {
      ((n.child.return = n), (n = n.child));
      continue;
    }
    if (n === t) break;
    for (; n.sibling === null; ) {
      if (n.return === null || n.return === t) return;
      n = n.return;
    }
    ((n.sibling.return = n.return), (n = n.sibling));
  }
};
Ha = function () {};
Dp = function (e, t, n, r) {
  var i = e.memoizedProps;
  if (i !== r) {
    ((e = t.stateNode), dn(st.current));
    var o = null;
    switch (n) {
      case 'input':
        ((i = ha(e, i)), (r = ha(e, r)), (o = []));
        break;
      case 'select':
        ((i = Z({}, i, { value: void 0 })),
          (r = Z({}, r, { value: void 0 })),
          (o = []));
        break;
      case 'textarea':
        ((i = ga(e, i)), (r = ga(e, r)), (o = []));
        break;
      default:
        typeof i.onClick != 'function' &&
          typeof r.onClick == 'function' &&
          (e.onclick = Eo);
    }
    va(n, r);
    var s;
    n = null;
    for (u in i)
      if (!r.hasOwnProperty(u) && i.hasOwnProperty(u) && i[u] != null)
        if (u === 'style') {
          var a = i[u];
          for (s in a) a.hasOwnProperty(s) && (n || (n = {}), (n[s] = ''));
        } else
          u !== 'dangerouslySetInnerHTML' &&
            u !== 'children' &&
            u !== 'suppressContentEditableWarning' &&
            u !== 'suppressHydrationWarning' &&
            u !== 'autoFocus' &&
            (Kr.hasOwnProperty(u)
              ? o || (o = [])
              : (o = o || []).push(u, null));
    for (u in r) {
      var l = r[u];
      if (
        ((a = i != null ? i[u] : void 0),
        r.hasOwnProperty(u) && l !== a && (l != null || a != null))
      )
        if (u === 'style')
          if (a) {
            for (s in a)
              !a.hasOwnProperty(s) ||
                (l && l.hasOwnProperty(s)) ||
                (n || (n = {}), (n[s] = ''));
            for (s in l)
              l.hasOwnProperty(s) &&
                a[s] !== l[s] &&
                (n || (n = {}), (n[s] = l[s]));
          } else (n || (o || (o = []), o.push(u, n)), (n = l));
        else
          u === 'dangerouslySetInnerHTML'
            ? ((l = l ? l.__html : void 0),
              (a = a ? a.__html : void 0),
              l != null && a !== l && (o = o || []).push(u, l))
            : u === 'children'
              ? (typeof l != 'string' && typeof l != 'number') ||
                (o = o || []).push(u, '' + l)
              : u !== 'suppressContentEditableWarning' &&
                u !== 'suppressHydrationWarning' &&
                (Kr.hasOwnProperty(u)
                  ? (l != null && u === 'onScroll' && $('scroll', e),
                    o || a === l || (o = []))
                  : (o = o || []).push(u, l));
    }
    n && (o = o || []).push('style', n);
    var u = o;
    (t.updateQueue = u) && (t.flags |= 4);
  }
};
Vp = function (e, t, n, r) {
  n !== r && (t.flags |= 4);
};
function Sr(e, t) {
  if (!b)
    switch (e.tailMode) {
      case 'hidden':
        t = e.tail;
        for (var n = null; t !== null; )
          (t.alternate !== null && (n = t), (t = t.sibling));
        n === null ? (e.tail = null) : (n.sibling = null);
        break;
      case 'collapsed':
        n = e.tail;
        for (var r = null; n !== null; )
          (n.alternate !== null && (r = n), (n = n.sibling));
        r === null
          ? t || e.tail === null
            ? (e.tail = null)
            : (e.tail.sibling = null)
          : (r.sibling = null);
    }
}
function ge(e) {
  var t = e.alternate !== null && e.alternate.child === e.child,
    n = 0,
    r = 0;
  if (t)
    for (var i = e.child; i !== null; )
      ((n |= i.lanes | i.childLanes),
        (r |= i.subtreeFlags & 14680064),
        (r |= i.flags & 14680064),
        (i.return = e),
        (i = i.sibling));
  else
    for (i = e.child; i !== null; )
      ((n |= i.lanes | i.childLanes),
        (r |= i.subtreeFlags),
        (r |= i.flags),
        (i.return = e),
        (i = i.sibling));
  return ((e.subtreeFlags |= r), (e.childLanes = n), t);
}
function Zv(e, t, n) {
  var r = t.pendingProps;
  switch ((bl(t), t.tag)) {
    case 2:
    case 16:
    case 15:
    case 0:
    case 11:
    case 7:
    case 8:
    case 12:
    case 9:
    case 14:
      return (ge(t), null);
    case 1:
      return (Le(t.type) && Ro(), ge(t), null);
    case 3:
      return (
        (r = t.stateNode),
        tr(),
        W(Me),
        W(we),
        ql(),
        r.pendingContext &&
          ((r.context = r.pendingContext), (r.pendingContext = null)),
        (e === null || e.child === null) &&
          (Ui(t)
            ? (t.flags |= 4)
            : e === null ||
              (e.memoizedState.isDehydrated && !(t.flags & 256)) ||
              ((t.flags |= 1024), Ze !== null && (qa(Ze), (Ze = null)))),
        Ha(e, t),
        ge(t),
        null
      );
    case 5:
      Jl(t);
      var i = dn(ii.current);
      if (((n = t.type), e !== null && t.stateNode != null))
        (Dp(e, t, n, r, i),
          e.ref !== t.ref && ((t.flags |= 512), (t.flags |= 2097152)));
      else {
        if (!r) {
          if (t.stateNode === null) throw Error(M(166));
          return (ge(t), null);
        }
        if (((e = dn(st.current)), Ui(t))) {
          ((r = t.stateNode), (n = t.type));
          var o = t.memoizedProps;
          switch (((r[it] = t), (r[ni] = o), (e = (t.mode & 1) !== 0), n)) {
            case 'dialog':
              ($('cancel', r), $('close', r));
              break;
            case 'iframe':
            case 'object':
            case 'embed':
              $('load', r);
              break;
            case 'video':
            case 'audio':
              for (i = 0; i < Mr.length; i++) $(Mr[i], r);
              break;
            case 'source':
              $('error', r);
              break;
            case 'img':
            case 'image':
            case 'link':
              ($('error', r), $('load', r));
              break;
            case 'details':
              $('toggle', r);
              break;
            case 'input':
              (dc(r, o), $('invalid', r));
              break;
            case 'select':
              ((r._wrapperState = { wasMultiple: !!o.multiple }),
                $('invalid', r));
              break;
            case 'textarea':
              (hc(r, o), $('invalid', r));
          }
          (va(n, o), (i = null));
          for (var s in o)
            if (o.hasOwnProperty(s)) {
              var a = o[s];
              s === 'children'
                ? typeof a == 'string'
                  ? r.textContent !== a &&
                    (o.suppressHydrationWarning !== !0 &&
                      $i(r.textContent, a, e),
                    (i = ['children', a]))
                  : typeof a == 'number' &&
                    r.textContent !== '' + a &&
                    (o.suppressHydrationWarning !== !0 &&
                      $i(r.textContent, a, e),
                    (i = ['children', '' + a]))
                : Kr.hasOwnProperty(s) &&
                  a != null &&
                  s === 'onScroll' &&
                  $('scroll', r);
            }
          switch (n) {
            case 'input':
              (Di(r), fc(r, o, !0));
              break;
            case 'textarea':
              (Di(r), pc(r));
              break;
            case 'select':
            case 'option':
              break;
            default:
              typeof o.onClick == 'function' && (r.onclick = Eo);
          }
          ((r = i), (t.updateQueue = r), r !== null && (t.flags |= 4));
        } else {
          ((s = i.nodeType === 9 ? i : i.ownerDocument),
            e === 'http://www.w3.org/1999/xhtml' && (e = lh(n)),
            e === 'http://www.w3.org/1999/xhtml'
              ? n === 'script'
                ? ((e = s.createElement('div')),
                  (e.innerHTML = '<script><\/script>'),
                  (e = e.removeChild(e.firstChild)))
                : typeof r.is == 'string'
                  ? (e = s.createElement(n, { is: r.is }))
                  : ((e = s.createElement(n)),
                    n === 'select' &&
                      ((s = e),
                      r.multiple
                        ? (s.multiple = !0)
                        : r.size && (s.size = r.size)))
              : (e = s.createElementNS(e, n)),
            (e[it] = t),
            (e[ni] = r),
            jp(e, t, !1, !1),
            (t.stateNode = e));
          e: {
            switch (((s = wa(n, r)), n)) {
              case 'dialog':
                ($('cancel', e), $('close', e), (i = r));
                break;
              case 'iframe':
              case 'object':
              case 'embed':
                ($('load', e), (i = r));
                break;
              case 'video':
              case 'audio':
                for (i = 0; i < Mr.length; i++) $(Mr[i], e);
                i = r;
                break;
              case 'source':
                ($('error', e), (i = r));
                break;
              case 'img':
              case 'image':
              case 'link':
                ($('error', e), $('load', e), (i = r));
                break;
              case 'details':
                ($('toggle', e), (i = r));
                break;
              case 'input':
                (dc(e, r), (i = ha(e, r)), $('invalid', e));
                break;
              case 'option':
                i = r;
                break;
              case 'select':
                ((e._wrapperState = { wasMultiple: !!r.multiple }),
                  (i = Z({}, r, { value: void 0 })),
                  $('invalid', e));
                break;
              case 'textarea':
                (hc(e, r), (i = ga(e, r)), $('invalid', e));
                break;
              default:
                i = r;
            }
            (va(n, i), (a = i));
            for (o in a)
              if (a.hasOwnProperty(o)) {
                var l = a[o];
                o === 'style'
                  ? dh(e, l)
                  : o === 'dangerouslySetInnerHTML'
                    ? ((l = l ? l.__html : void 0), l != null && uh(e, l))
                    : o === 'children'
                      ? typeof l == 'string'
                        ? (n !== 'textarea' || l !== '') && Gr(e, l)
                        : typeof l == 'number' && Gr(e, '' + l)
                      : o !== 'suppressContentEditableWarning' &&
                        o !== 'suppressHydrationWarning' &&
                        o !== 'autoFocus' &&
                        (Kr.hasOwnProperty(o)
                          ? l != null && o === 'onScroll' && $('scroll', e)
                          : l != null && Ll(e, o, l, s));
              }
            switch (n) {
              case 'input':
                (Di(e), fc(e, r, !1));
                break;
              case 'textarea':
                (Di(e), pc(e));
                break;
              case 'option':
                r.value != null && e.setAttribute('value', '' + Kt(r.value));
                break;
              case 'select':
                ((e.multiple = !!r.multiple),
                  (o = r.value),
                  o != null
                    ? Hn(e, !!r.multiple, o, !1)
                    : r.defaultValue != null &&
                      Hn(e, !!r.multiple, r.defaultValue, !0));
                break;
              default:
                typeof i.onClick == 'function' && (e.onclick = Eo);
            }
            switch (n) {
              case 'button':
              case 'input':
              case 'select':
              case 'textarea':
                r = !!r.autoFocus;
                break e;
              case 'img':
                r = !0;
                break e;
              default:
                r = !1;
            }
          }
          r && (t.flags |= 4);
        }
        t.ref !== null && ((t.flags |= 512), (t.flags |= 2097152));
      }
      return (ge(t), null);
    case 6:
      if (e && t.stateNode != null) Vp(e, t, e.memoizedProps, r);
      else {
        if (typeof r != 'string' && t.stateNode === null) throw Error(M(166));
        if (((n = dn(ii.current)), dn(st.current), Ui(t))) {
          if (
            ((r = t.stateNode),
            (n = t.memoizedProps),
            (r[it] = t),
            (o = r.nodeValue !== n) && ((e = De), e !== null))
          )
            switch (e.tag) {
              case 3:
                $i(r.nodeValue, n, (e.mode & 1) !== 0);
                break;
              case 5:
                e.memoizedProps.suppressHydrationWarning !== !0 &&
                  $i(r.nodeValue, n, (e.mode & 1) !== 0);
            }
          o && (t.flags |= 4);
        } else
          ((r = (n.nodeType === 9 ? n : n.ownerDocument).createTextNode(r)),
            (r[it] = t),
            (t.stateNode = r));
      }
      return (ge(t), null);
    case 13:
      if (
        (W(Y),
        (r = t.memoizedState),
        e === null ||
          (e.memoizedState !== null && e.memoizedState.dehydrated !== null))
      ) {
        if (b && je !== null && t.mode & 1 && !(t.flags & 128))
          (Jh(), qn(), (t.flags |= 98560), (o = !1));
        else if (((o = Ui(t)), r !== null && r.dehydrated !== null)) {
          if (e === null) {
            if (!o) throw Error(M(318));
            if (
              ((o = t.memoizedState),
              (o = o !== null ? o.dehydrated : null),
              !o)
            )
              throw Error(M(317));
            o[it] = t;
          } else
            (qn(),
              !(t.flags & 128) && (t.memoizedState = null),
              (t.flags |= 4));
          (ge(t), (o = !1));
        } else (Ze !== null && (qa(Ze), (Ze = null)), (o = !0));
        if (!o) return t.flags & 65536 ? t : null;
      }
      return t.flags & 128
        ? ((t.lanes = n), t)
        : ((r = r !== null),
          r !== (e !== null && e.memoizedState !== null) &&
            r &&
            ((t.child.flags |= 8192),
            t.mode & 1 &&
              (e === null || Y.current & 1 ? ae === 0 && (ae = 3) : du())),
          t.updateQueue !== null && (t.flags |= 4),
          ge(t),
          null);
    case 4:
      return (
        tr(),
        Ha(e, t),
        e === null && ei(t.stateNode.containerInfo),
        ge(t),
        null
      );
    case 10:
      return (Yl(t.type._context), ge(t), null);
    case 17:
      return (Le(t.type) && Ro(), ge(t), null);
    case 19:
      if ((W(Y), (o = t.memoizedState), o === null)) return (ge(t), null);
      if (((r = (t.flags & 128) !== 0), (s = o.rendering), s === null))
        if (r) Sr(o, !1);
        else {
          if (ae !== 0 || (e !== null && e.flags & 128))
            for (e = t.child; e !== null; ) {
              if (((s = Vo(e)), s !== null)) {
                for (
                  t.flags |= 128,
                    Sr(o, !1),
                    r = s.updateQueue,
                    r !== null && ((t.updateQueue = r), (t.flags |= 4)),
                    t.subtreeFlags = 0,
                    r = n,
                    n = t.child;
                  n !== null;

                )
                  ((o = n),
                    (e = r),
                    (o.flags &= 14680066),
                    (s = o.alternate),
                    s === null
                      ? ((o.childLanes = 0),
                        (o.lanes = e),
                        (o.child = null),
                        (o.subtreeFlags = 0),
                        (o.memoizedProps = null),
                        (o.memoizedState = null),
                        (o.updateQueue = null),
                        (o.dependencies = null),
                        (o.stateNode = null))
                      : ((o.childLanes = s.childLanes),
                        (o.lanes = s.lanes),
                        (o.child = s.child),
                        (o.subtreeFlags = 0),
                        (o.deletions = null),
                        (o.memoizedProps = s.memoizedProps),
                        (o.memoizedState = s.memoizedState),
                        (o.updateQueue = s.updateQueue),
                        (o.type = s.type),
                        (e = s.dependencies),
                        (o.dependencies =
                          e === null
                            ? null
                            : {
                                lanes: e.lanes,
                                firstContext: e.firstContext,
                              })),
                    (n = n.sibling));
                return (z(Y, (Y.current & 1) | 2), t.child);
              }
              e = e.sibling;
            }
          o.tail !== null &&
            ne() > rr &&
            ((t.flags |= 128), (r = !0), Sr(o, !1), (t.lanes = 4194304));
        }
      else {
        if (!r)
          if (((e = Vo(s)), e !== null)) {
            if (
              ((t.flags |= 128),
              (r = !0),
              (n = e.updateQueue),
              n !== null && ((t.updateQueue = n), (t.flags |= 4)),
              Sr(o, !0),
              o.tail === null && o.tailMode === 'hidden' && !s.alternate && !b)
            )
              return (ge(t), null);
          } else
            2 * ne() - o.renderingStartTime > rr &&
              n !== 1073741824 &&
              ((t.flags |= 128), (r = !0), Sr(o, !1), (t.lanes = 4194304));
        o.isBackwards
          ? ((s.sibling = t.child), (t.child = s))
          : ((n = o.last),
            n !== null ? (n.sibling = s) : (t.child = s),
            (o.last = s));
      }
      return o.tail !== null
        ? ((t = o.tail),
          (o.rendering = t),
          (o.tail = t.sibling),
          (o.renderingStartTime = ne()),
          (t.sibling = null),
          (n = Y.current),
          z(Y, r ? (n & 1) | 2 : n & 1),
          t)
        : (ge(t), null);
    case 22:
    case 23:
      return (
        cu(),
        (r = t.memoizedState !== null),
        e !== null && (e.memoizedState !== null) !== r && (t.flags |= 8192),
        r && t.mode & 1
          ? Ne & 1073741824 && (ge(t), t.subtreeFlags & 6 && (t.flags |= 8192))
          : ge(t),
        null
      );
    case 24:
      return null;
    case 25:
      return null;
  }
  throw Error(M(156, t.tag));
}
function Jv(e, t) {
  switch ((bl(t), t.tag)) {
    case 1:
      return (
        Le(t.type) && Ro(),
        (e = t.flags),
        e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null
      );
    case 3:
      return (
        tr(),
        W(Me),
        W(we),
        ql(),
        (e = t.flags),
        e & 65536 && !(e & 128) ? ((t.flags = (e & -65537) | 128), t) : null
      );
    case 5:
      return (Jl(t), null);
    case 13:
      if ((W(Y), (e = t.memoizedState), e !== null && e.dehydrated !== null)) {
        if (t.alternate === null) throw Error(M(340));
        qn();
      }
      return (
        (e = t.flags),
        e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null
      );
    case 19:
      return (W(Y), null);
    case 4:
      return (tr(), null);
    case 10:
      return (Yl(t.type._context), null);
    case 22:
    case 23:
      return (cu(), null);
    case 24:
      return null;
    default:
      return null;
  }
}
var Hi = !1,
  ye = !1,
  qv = typeof WeakSet == 'function' ? WeakSet : Set,
  A = null;
function On(e, t) {
  var n = e.ref;
  if (n !== null)
    if (typeof n == 'function')
      try {
        n(null);
      } catch (r) {
        q(e, t, r);
      }
    else n.current = null;
}
function Ka(e, t, n) {
  try {
    n();
  } catch (r) {
    q(e, t, r);
  }
}
var rd = !1;
function e0(e, t) {
  if (((La = Co), (e = Bh()), Ul(e))) {
    if ('selectionStart' in e)
      var n = { start: e.selectionStart, end: e.selectionEnd };
    else
      e: {
        n = ((n = e.ownerDocument) && n.defaultView) || window;
        var r = n.getSelection && n.getSelection();
        if (r && r.rangeCount !== 0) {
          n = r.anchorNode;
          var i = r.anchorOffset,
            o = r.focusNode;
          r = r.focusOffset;
          try {
            (n.nodeType, o.nodeType);
          } catch {
            n = null;
            break e;
          }
          var s = 0,
            a = -1,
            l = -1,
            u = 0,
            c = 0,
            d = e,
            f = null;
          t: for (;;) {
            for (
              var g;
              d !== n || (i !== 0 && d.nodeType !== 3) || (a = s + i),
                d !== o || (r !== 0 && d.nodeType !== 3) || (l = s + r),
                d.nodeType === 3 && (s += d.nodeValue.length),
                (g = d.firstChild) !== null;

            )
              ((f = d), (d = g));
            for (;;) {
              if (d === e) break t;
              if (
                (f === n && ++u === i && (a = s),
                f === o && ++c === r && (l = s),
                (g = d.nextSibling) !== null)
              )
                break;
              ((d = f), (f = d.parentNode));
            }
            d = g;
          }
          n = a === -1 || l === -1 ? null : { start: a, end: l };
        } else n = null;
      }
    n = n || { start: 0, end: 0 };
  } else n = null;
  for (Aa = { focusedElem: e, selectionRange: n }, Co = !1, A = t; A !== null; )
    if (((t = A), (e = t.child), (t.subtreeFlags & 1028) !== 0 && e !== null))
      ((e.return = t), (A = e));
    else
      for (; A !== null; ) {
        t = A;
        try {
          var v = t.alternate;
          if (t.flags & 1024)
            switch (t.tag) {
              case 0:
              case 11:
              case 15:
                break;
              case 1:
                if (v !== null) {
                  var y = v.memoizedProps,
                    S = v.memoizedState,
                    p = t.stateNode,
                    h = p.getSnapshotBeforeUpdate(
                      t.elementType === t.type ? y : Qe(t.type, y),
                      S
                    );
                  p.__reactInternalSnapshotBeforeUpdate = h;
                }
                break;
              case 3:
                var m = t.stateNode.containerInfo;
                m.nodeType === 1
                  ? (m.textContent = '')
                  : m.nodeType === 9 &&
                    m.documentElement &&
                    m.removeChild(m.documentElement);
                break;
              case 5:
              case 6:
              case 4:
              case 17:
                break;
              default:
                throw Error(M(163));
            }
        } catch (k) {
          q(t, t.return, k);
        }
        if (((e = t.sibling), e !== null)) {
          ((e.return = t.return), (A = e));
          break;
        }
        A = t.return;
      }
  return ((v = rd), (rd = !1), v);
}
function Or(e, t, n) {
  var r = t.updateQueue;
  if (((r = r !== null ? r.lastEffect : null), r !== null)) {
    var i = (r = r.next);
    do {
      if ((i.tag & e) === e) {
        var o = i.destroy;
        ((i.destroy = void 0), o !== void 0 && Ka(t, n, o));
      }
      i = i.next;
    } while (i !== r);
  }
}
function rs(e, t) {
  if (
    ((t = t.updateQueue), (t = t !== null ? t.lastEffect : null), t !== null)
  ) {
    var n = (t = t.next);
    do {
      if ((n.tag & e) === e) {
        var r = n.create;
        n.destroy = r();
      }
      n = n.next;
    } while (n !== t);
  }
}
function Ga(e) {
  var t = e.ref;
  if (t !== null) {
    var n = e.stateNode;
    switch (e.tag) {
      case 5:
        e = n;
        break;
      default:
        e = n;
    }
    typeof t == 'function' ? t(e) : (t.current = e);
  }
}
function Ip(e) {
  var t = e.alternate;
  (t !== null && ((e.alternate = null), Ip(t)),
    (e.child = null),
    (e.deletions = null),
    (e.sibling = null),
    e.tag === 5 &&
      ((t = e.stateNode),
      t !== null &&
        (delete t[it], delete t[ni], delete t[Da], delete t[Fv], delete t[_v])),
    (e.stateNode = null),
    (e.return = null),
    (e.dependencies = null),
    (e.memoizedProps = null),
    (e.memoizedState = null),
    (e.pendingProps = null),
    (e.stateNode = null),
    (e.updateQueue = null));
}
function Fp(e) {
  return e.tag === 5 || e.tag === 3 || e.tag === 4;
}
function id(e) {
  e: for (;;) {
    for (; e.sibling === null; ) {
      if (e.return === null || Fp(e.return)) return null;
      e = e.return;
    }
    for (
      e.sibling.return = e.return, e = e.sibling;
      e.tag !== 5 && e.tag !== 6 && e.tag !== 18;

    ) {
      if (e.flags & 2 || e.child === null || e.tag === 4) continue e;
      ((e.child.return = e), (e = e.child));
    }
    if (!(e.flags & 2)) return e.stateNode;
  }
}
function Ya(e, t, n) {
  var r = e.tag;
  if (r === 5 || r === 6)
    ((e = e.stateNode),
      t
        ? n.nodeType === 8
          ? n.parentNode.insertBefore(e, t)
          : n.insertBefore(e, t)
        : (n.nodeType === 8
            ? ((t = n.parentNode), t.insertBefore(e, n))
            : ((t = n), t.appendChild(e)),
          (n = n._reactRootContainer),
          n != null || t.onclick !== null || (t.onclick = Eo)));
  else if (r !== 4 && ((e = e.child), e !== null))
    for (Ya(e, t, n), e = e.sibling; e !== null; )
      (Ya(e, t, n), (e = e.sibling));
}
function Qa(e, t, n) {
  var r = e.tag;
  if (r === 5 || r === 6)
    ((e = e.stateNode), t ? n.insertBefore(e, t) : n.appendChild(e));
  else if (r !== 4 && ((e = e.child), e !== null))
    for (Qa(e, t, n), e = e.sibling; e !== null; )
      (Qa(e, t, n), (e = e.sibling));
}
var de = null,
  Xe = !1;
function Mt(e, t, n) {
  for (n = n.child; n !== null; ) (_p(e, t, n), (n = n.sibling));
}
function _p(e, t, n) {
  if (ot && typeof ot.onCommitFiberUnmount == 'function')
    try {
      ot.onCommitFiberUnmount(Qo, n);
    } catch {}
  switch (n.tag) {
    case 5:
      ye || On(n, t);
    case 6:
      var r = de,
        i = Xe;
      ((de = null),
        Mt(e, t, n),
        (de = r),
        (Xe = i),
        de !== null &&
          (Xe
            ? ((e = de),
              (n = n.stateNode),
              e.nodeType === 8 ? e.parentNode.removeChild(n) : e.removeChild(n))
            : de.removeChild(n.stateNode)));
      break;
    case 18:
      de !== null &&
        (Xe
          ? ((e = de),
            (n = n.stateNode),
            e.nodeType === 8
              ? Vs(e.parentNode, n)
              : e.nodeType === 1 && Vs(e, n),
            Zr(e))
          : Vs(de, n.stateNode));
      break;
    case 4:
      ((r = de),
        (i = Xe),
        (de = n.stateNode.containerInfo),
        (Xe = !0),
        Mt(e, t, n),
        (de = r),
        (Xe = i));
      break;
    case 0:
    case 11:
    case 14:
    case 15:
      if (
        !ye &&
        ((r = n.updateQueue), r !== null && ((r = r.lastEffect), r !== null))
      ) {
        i = r = r.next;
        do {
          var o = i,
            s = o.destroy;
          ((o = o.tag),
            s !== void 0 && (o & 2 || o & 4) && Ka(n, t, s),
            (i = i.next));
        } while (i !== r);
      }
      Mt(e, t, n);
      break;
    case 1:
      if (
        !ye &&
        (On(n, t),
        (r = n.stateNode),
        typeof r.componentWillUnmount == 'function')
      )
        try {
          ((r.props = n.memoizedProps),
            (r.state = n.memoizedState),
            r.componentWillUnmount());
        } catch (a) {
          q(n, t, a);
        }
      Mt(e, t, n);
      break;
    case 21:
      Mt(e, t, n);
      break;
    case 22:
      n.mode & 1
        ? ((ye = (r = ye) || n.memoizedState !== null), Mt(e, t, n), (ye = r))
        : Mt(e, t, n);
      break;
    default:
      Mt(e, t, n);
  }
}
function od(e) {
  var t = e.updateQueue;
  if (t !== null) {
    e.updateQueue = null;
    var n = e.stateNode;
    (n === null && (n = e.stateNode = new qv()),
      t.forEach(function (r) {
        var i = u0.bind(null, e, r);
        n.has(r) || (n.add(r), r.then(i, i));
      }));
  }
}
function Ge(e, t) {
  var n = t.deletions;
  if (n !== null)
    for (var r = 0; r < n.length; r++) {
      var i = n[r];
      try {
        var o = e,
          s = t,
          a = s;
        e: for (; a !== null; ) {
          switch (a.tag) {
            case 5:
              ((de = a.stateNode), (Xe = !1));
              break e;
            case 3:
              ((de = a.stateNode.containerInfo), (Xe = !0));
              break e;
            case 4:
              ((de = a.stateNode.containerInfo), (Xe = !0));
              break e;
          }
          a = a.return;
        }
        if (de === null) throw Error(M(160));
        (_p(o, s, i), (de = null), (Xe = !1));
        var l = i.alternate;
        (l !== null && (l.return = null), (i.return = null));
      } catch (u) {
        q(i, t, u);
      }
    }
  if (t.subtreeFlags & 12854)
    for (t = t.child; t !== null; ) (Op(t, e), (t = t.sibling));
}
function Op(e, t) {
  var n = e.alternate,
    r = e.flags;
  switch (e.tag) {
    case 0:
    case 11:
    case 14:
    case 15:
      if ((Ge(t, e), nt(e), r & 4)) {
        try {
          (Or(3, e, e.return), rs(3, e));
        } catch (y) {
          q(e, e.return, y);
        }
        try {
          Or(5, e, e.return);
        } catch (y) {
          q(e, e.return, y);
        }
      }
      break;
    case 1:
      (Ge(t, e), nt(e), r & 512 && n !== null && On(n, n.return));
      break;
    case 5:
      if (
        (Ge(t, e),
        nt(e),
        r & 512 && n !== null && On(n, n.return),
        e.flags & 32)
      ) {
        var i = e.stateNode;
        try {
          Gr(i, '');
        } catch (y) {
          q(e, e.return, y);
        }
      }
      if (r & 4 && ((i = e.stateNode), i != null)) {
        var o = e.memoizedProps,
          s = n !== null ? n.memoizedProps : o,
          a = e.type,
          l = e.updateQueue;
        if (((e.updateQueue = null), l !== null))
          try {
            (a === 'input' && o.type === 'radio' && o.name != null && sh(i, o),
              wa(a, s));
            var u = wa(a, o);
            for (s = 0; s < l.length; s += 2) {
              var c = l[s],
                d = l[s + 1];
              c === 'style'
                ? dh(i, d)
                : c === 'dangerouslySetInnerHTML'
                  ? uh(i, d)
                  : c === 'children'
                    ? Gr(i, d)
                    : Ll(i, c, d, u);
            }
            switch (a) {
              case 'input':
                pa(i, o);
                break;
              case 'textarea':
                ah(i, o);
                break;
              case 'select':
                var f = i._wrapperState.wasMultiple;
                i._wrapperState.wasMultiple = !!o.multiple;
                var g = o.value;
                g != null
                  ? Hn(i, !!o.multiple, g, !1)
                  : f !== !!o.multiple &&
                    (o.defaultValue != null
                      ? Hn(i, !!o.multiple, o.defaultValue, !0)
                      : Hn(i, !!o.multiple, o.multiple ? [] : '', !1));
            }
            i[ni] = o;
          } catch (y) {
            q(e, e.return, y);
          }
      }
      break;
    case 6:
      if ((Ge(t, e), nt(e), r & 4)) {
        if (e.stateNode === null) throw Error(M(162));
        ((i = e.stateNode), (o = e.memoizedProps));
        try {
          i.nodeValue = o;
        } catch (y) {
          q(e, e.return, y);
        }
      }
      break;
    case 3:
      if (
        (Ge(t, e), nt(e), r & 4 && n !== null && n.memoizedState.isDehydrated)
      )
        try {
          Zr(t.containerInfo);
        } catch (y) {
          q(e, e.return, y);
        }
      break;
    case 4:
      (Ge(t, e), nt(e));
      break;
    case 13:
      (Ge(t, e),
        nt(e),
        (i = e.child),
        i.flags & 8192 &&
          ((o = i.memoizedState !== null),
          (i.stateNode.isHidden = o),
          !o ||
            (i.alternate !== null && i.alternate.memoizedState !== null) ||
            (lu = ne())),
        r & 4 && od(e));
      break;
    case 22:
      if (
        ((c = n !== null && n.memoizedState !== null),
        e.mode & 1 ? ((ye = (u = ye) || c), Ge(t, e), (ye = u)) : Ge(t, e),
        nt(e),
        r & 8192)
      ) {
        if (
          ((u = e.memoizedState !== null),
          (e.stateNode.isHidden = u) && !c && e.mode & 1)
        )
          for (A = e, c = e.child; c !== null; ) {
            for (d = A = c; A !== null; ) {
              switch (((f = A), (g = f.child), f.tag)) {
                case 0:
                case 11:
                case 14:
                case 15:
                  Or(4, f, f.return);
                  break;
                case 1:
                  On(f, f.return);
                  var v = f.stateNode;
                  if (typeof v.componentWillUnmount == 'function') {
                    ((r = f), (n = f.return));
                    try {
                      ((t = r),
                        (v.props = t.memoizedProps),
                        (v.state = t.memoizedState),
                        v.componentWillUnmount());
                    } catch (y) {
                      q(r, n, y);
                    }
                  }
                  break;
                case 5:
                  On(f, f.return);
                  break;
                case 22:
                  if (f.memoizedState !== null) {
                    ad(d);
                    continue;
                  }
              }
              g !== null ? ((g.return = f), (A = g)) : ad(d);
            }
            c = c.sibling;
          }
        e: for (c = null, d = e; ; ) {
          if (d.tag === 5) {
            if (c === null) {
              c = d;
              try {
                ((i = d.stateNode),
                  u
                    ? ((o = i.style),
                      typeof o.setProperty == 'function'
                        ? o.setProperty('display', 'none', 'important')
                        : (o.display = 'none'))
                    : ((a = d.stateNode),
                      (l = d.memoizedProps.style),
                      (s =
                        l != null && l.hasOwnProperty('display')
                          ? l.display
                          : null),
                      (a.style.display = ch('display', s))));
              } catch (y) {
                q(e, e.return, y);
              }
            }
          } else if (d.tag === 6) {
            if (c === null)
              try {
                d.stateNode.nodeValue = u ? '' : d.memoizedProps;
              } catch (y) {
                q(e, e.return, y);
              }
          } else if (
            ((d.tag !== 22 && d.tag !== 23) ||
              d.memoizedState === null ||
              d === e) &&
            d.child !== null
          ) {
            ((d.child.return = d), (d = d.child));
            continue;
          }
          if (d === e) break e;
          for (; d.sibling === null; ) {
            if (d.return === null || d.return === e) break e;
            (c === d && (c = null), (d = d.return));
          }
          (c === d && (c = null),
            (d.sibling.return = d.return),
            (d = d.sibling));
        }
      }
      break;
    case 19:
      (Ge(t, e), nt(e), r & 4 && od(e));
      break;
    case 21:
      break;
    default:
      (Ge(t, e), nt(e));
  }
}
function nt(e) {
  var t = e.flags;
  if (t & 2) {
    try {
      e: {
        for (var n = e.return; n !== null; ) {
          if (Fp(n)) {
            var r = n;
            break e;
          }
          n = n.return;
        }
        throw Error(M(160));
      }
      switch (r.tag) {
        case 5:
          var i = r.stateNode;
          r.flags & 32 && (Gr(i, ''), (r.flags &= -33));
          var o = id(e);
          Qa(e, o, i);
          break;
        case 3:
        case 4:
          var s = r.stateNode.containerInfo,
            a = id(e);
          Ya(e, a, s);
          break;
        default:
          throw Error(M(161));
      }
    } catch (l) {
      q(e, e.return, l);
    }
    e.flags &= -3;
  }
  t & 4096 && (e.flags &= -4097);
}
function t0(e, t, n) {
  ((A = e), Bp(e));
}
function Bp(e, t, n) {
  for (var r = (e.mode & 1) !== 0; A !== null; ) {
    var i = A,
      o = i.child;
    if (i.tag === 22 && r) {
      var s = i.memoizedState !== null || Hi;
      if (!s) {
        var a = i.alternate,
          l = (a !== null && a.memoizedState !== null) || ye;
        a = Hi;
        var u = ye;
        if (((Hi = s), (ye = l) && !u))
          for (A = i; A !== null; )
            ((s = A),
              (l = s.child),
              s.tag === 22 && s.memoizedState !== null
                ? ld(i)
                : l !== null
                  ? ((l.return = s), (A = l))
                  : ld(i));
        for (; o !== null; ) ((A = o), Bp(o), (o = o.sibling));
        ((A = i), (Hi = a), (ye = u));
      }
      sd(e);
    } else
      i.subtreeFlags & 8772 && o !== null ? ((o.return = i), (A = o)) : sd(e);
  }
}
function sd(e) {
  for (; A !== null; ) {
    var t = A;
    if (t.flags & 8772) {
      var n = t.alternate;
      try {
        if (t.flags & 8772)
          switch (t.tag) {
            case 0:
            case 11:
            case 15:
              ye || rs(5, t);
              break;
            case 1:
              var r = t.stateNode;
              if (t.flags & 4 && !ye)
                if (n === null) r.componentDidMount();
                else {
                  var i =
                    t.elementType === t.type
                      ? n.memoizedProps
                      : Qe(t.type, n.memoizedProps);
                  r.componentDidUpdate(
                    i,
                    n.memoizedState,
                    r.__reactInternalSnapshotBeforeUpdate
                  );
                }
              var o = t.updateQueue;
              o !== null && bc(t, o, r);
              break;
            case 3:
              var s = t.updateQueue;
              if (s !== null) {
                if (((n = null), t.child !== null))
                  switch (t.child.tag) {
                    case 5:
                      n = t.child.stateNode;
                      break;
                    case 1:
                      n = t.child.stateNode;
                  }
                bc(t, s, n);
              }
              break;
            case 5:
              var a = t.stateNode;
              if (n === null && t.flags & 4) {
                n = a;
                var l = t.memoizedProps;
                switch (t.type) {
                  case 'button':
                  case 'input':
                  case 'select':
                  case 'textarea':
                    l.autoFocus && n.focus();
                    break;
                  case 'img':
                    l.src && (n.src = l.src);
                }
              }
              break;
            case 6:
              break;
            case 4:
              break;
            case 12:
              break;
            case 13:
              if (t.memoizedState === null) {
                var u = t.alternate;
                if (u !== null) {
                  var c = u.memoizedState;
                  if (c !== null) {
                    var d = c.dehydrated;
                    d !== null && Zr(d);
                  }
                }
              }
              break;
            case 19:
            case 17:
            case 21:
            case 22:
            case 23:
            case 25:
              break;
            default:
              throw Error(M(163));
          }
        ye || (t.flags & 512 && Ga(t));
      } catch (f) {
        q(t, t.return, f);
      }
    }
    if (t === e) {
      A = null;
      break;
    }
    if (((n = t.sibling), n !== null)) {
      ((n.return = t.return), (A = n));
      break;
    }
    A = t.return;
  }
}
function ad(e) {
  for (; A !== null; ) {
    var t = A;
    if (t === e) {
      A = null;
      break;
    }
    var n = t.sibling;
    if (n !== null) {
      ((n.return = t.return), (A = n));
      break;
    }
    A = t.return;
  }
}
function ld(e) {
  for (; A !== null; ) {
    var t = A;
    try {
      switch (t.tag) {
        case 0:
        case 11:
        case 15:
          var n = t.return;
          try {
            rs(4, t);
          } catch (l) {
            q(t, n, l);
          }
          break;
        case 1:
          var r = t.stateNode;
          if (typeof r.componentDidMount == 'function') {
            var i = t.return;
            try {
              r.componentDidMount();
            } catch (l) {
              q(t, i, l);
            }
          }
          var o = t.return;
          try {
            Ga(t);
          } catch (l) {
            q(t, o, l);
          }
          break;
        case 5:
          var s = t.return;
          try {
            Ga(t);
          } catch (l) {
            q(t, s, l);
          }
      }
    } catch (l) {
      q(t, t.return, l);
    }
    if (t === e) {
      A = null;
      break;
    }
    var a = t.sibling;
    if (a !== null) {
      ((a.return = t.return), (A = a));
      break;
    }
    A = t.return;
  }
}
var n0 = Math.ceil,
  _o = Et.ReactCurrentDispatcher,
  su = Et.ReactCurrentOwner,
  Ue = Et.ReactCurrentBatchConfig,
  _ = 0,
  ce = null,
  ie = null,
  he = 0,
  Ne = 0,
  Bn = Zt(0),
  ae = 0,
  li = null,
  Sn = 0,
  is = 0,
  au = 0,
  Br = null,
  Te = null,
  lu = 0,
  rr = 1 / 0,
  dt = null,
  Oo = !1,
  Xa = null,
  Wt = null,
  Ki = !1,
  _t = null,
  Bo = 0,
  zr = 0,
  Za = null,
  lo = -1,
  uo = 0;
function ke() {
  return _ & 6 ? ne() : lo !== -1 ? lo : (lo = ne());
}
function bt(e) {
  return e.mode & 1
    ? _ & 2 && he !== 0
      ? he & -he
      : Bv.transition !== null
        ? (uo === 0 && (uo = Ch()), uo)
        : ((e = O),
          e !== 0 || ((e = window.event), (e = e === void 0 ? 16 : Ah(e.type))),
          e)
    : 1;
}
function qe(e, t, n, r) {
  if (50 < zr) throw ((zr = 0), (Za = null), Error(M(185)));
  (vi(e, n, r),
    (!(_ & 2) || e !== ce) &&
      (e === ce && (!(_ & 2) && (is |= n), ae === 4 && Vt(e, he)),
      Ae(e, r),
      n === 1 && _ === 0 && !(t.mode & 1) && ((rr = ne() + 500), es && Jt())));
}
function Ae(e, t) {
  var n = e.callbackNode;
  By(e, t);
  var r = ko(e, e === ce ? he : 0);
  if (r === 0)
    (n !== null && yc(n), (e.callbackNode = null), (e.callbackPriority = 0));
  else if (((t = r & -r), e.callbackPriority !== t)) {
    if ((n != null && yc(n), t === 1))
      (e.tag === 0 ? Ov(ud.bind(null, e)) : Qh(ud.bind(null, e)),
        Vv(function () {
          !(_ & 6) && Jt();
        }),
        (n = null));
    else {
      switch (Ph(r)) {
        case 1:
          n = Vl;
          break;
        case 4:
          n = Sh;
          break;
        case 16:
          n = So;
          break;
        case 536870912:
          n = kh;
          break;
        default:
          n = So;
      }
      n = Gp(n, zp.bind(null, e));
    }
    ((e.callbackPriority = t), (e.callbackNode = n));
  }
}
function zp(e, t) {
  if (((lo = -1), (uo = 0), _ & 6)) throw Error(M(327));
  var n = e.callbackNode;
  if (Xn() && e.callbackNode !== n) return null;
  var r = ko(e, e === ce ? he : 0);
  if (r === 0) return null;
  if (r & 30 || r & e.expiredLanes || t) t = zo(e, r);
  else {
    t = r;
    var i = _;
    _ |= 2;
    var o = Up();
    (ce !== e || he !== t) && ((dt = null), (rr = ne() + 500), pn(e, t));
    do
      try {
        o0();
        break;
      } catch (a) {
        $p(e, a);
      }
    while (1);
    (Gl(),
      (_o.current = o),
      (_ = i),
      ie !== null ? (t = 0) : ((ce = null), (he = 0), (t = ae)));
  }
  if (t !== 0) {
    if (
      (t === 2 && ((i = Pa(e)), i !== 0 && ((r = i), (t = Ja(e, i)))), t === 1)
    )
      throw ((n = li), pn(e, 0), Vt(e, r), Ae(e, ne()), n);
    if (t === 6) Vt(e, r);
    else {
      if (
        ((i = e.current.alternate),
        !(r & 30) &&
          !r0(i) &&
          ((t = zo(e, r)),
          t === 2 && ((o = Pa(e)), o !== 0 && ((r = o), (t = Ja(e, o)))),
          t === 1))
      )
        throw ((n = li), pn(e, 0), Vt(e, r), Ae(e, ne()), n);
      switch (((e.finishedWork = i), (e.finishedLanes = r), t)) {
        case 0:
        case 1:
          throw Error(M(345));
        case 2:
          an(e, Te, dt);
          break;
        case 3:
          if (
            (Vt(e, r), (r & 130023424) === r && ((t = lu + 500 - ne()), 10 < t))
          ) {
            if (ko(e, 0) !== 0) break;
            if (((i = e.suspendedLanes), (i & r) !== r)) {
              (ke(), (e.pingedLanes |= e.suspendedLanes & i));
              break;
            }
            e.timeoutHandle = ja(an.bind(null, e, Te, dt), t);
            break;
          }
          an(e, Te, dt);
          break;
        case 4:
          if ((Vt(e, r), (r & 4194240) === r)) break;
          for (t = e.eventTimes, i = -1; 0 < r; ) {
            var s = 31 - Je(r);
            ((o = 1 << s), (s = t[s]), s > i && (i = s), (r &= ~o));
          }
          if (
            ((r = i),
            (r = ne() - r),
            (r =
              (120 > r
                ? 120
                : 480 > r
                  ? 480
                  : 1080 > r
                    ? 1080
                    : 1920 > r
                      ? 1920
                      : 3e3 > r
                        ? 3e3
                        : 4320 > r
                          ? 4320
                          : 1960 * n0(r / 1960)) - r),
            10 < r)
          ) {
            e.timeoutHandle = ja(an.bind(null, e, Te, dt), r);
            break;
          }
          an(e, Te, dt);
          break;
        case 5:
          an(e, Te, dt);
          break;
        default:
          throw Error(M(329));
      }
    }
  }
  return (Ae(e, ne()), e.callbackNode === n ? zp.bind(null, e) : null);
}
function Ja(e, t) {
  var n = Br;
  return (
    e.current.memoizedState.isDehydrated && (pn(e, t).flags |= 256),
    (e = zo(e, t)),
    e !== 2 && ((t = Te), (Te = n), t !== null && qa(t)),
    e
  );
}
function qa(e) {
  Te === null ? (Te = e) : Te.push.apply(Te, e);
}
function r0(e) {
  for (var t = e; ; ) {
    if (t.flags & 16384) {
      var n = t.updateQueue;
      if (n !== null && ((n = n.stores), n !== null))
        for (var r = 0; r < n.length; r++) {
          var i = n[r],
            o = i.getSnapshot;
          i = i.value;
          try {
            if (!et(o(), i)) return !1;
          } catch {
            return !1;
          }
        }
    }
    if (((n = t.child), t.subtreeFlags & 16384 && n !== null))
      ((n.return = t), (t = n));
    else {
      if (t === e) break;
      for (; t.sibling === null; ) {
        if (t.return === null || t.return === e) return !0;
        t = t.return;
      }
      ((t.sibling.return = t.return), (t = t.sibling));
    }
  }
  return !0;
}
function Vt(e, t) {
  for (
    t &= ~au,
      t &= ~is,
      e.suspendedLanes |= t,
      e.pingedLanes &= ~t,
      e = e.expirationTimes;
    0 < t;

  ) {
    var n = 31 - Je(t),
      r = 1 << n;
    ((e[n] = -1), (t &= ~r));
  }
}
function ud(e) {
  if (_ & 6) throw Error(M(327));
  Xn();
  var t = ko(e, 0);
  if (!(t & 1)) return (Ae(e, ne()), null);
  var n = zo(e, t);
  if (e.tag !== 0 && n === 2) {
    var r = Pa(e);
    r !== 0 && ((t = r), (n = Ja(e, r)));
  }
  if (n === 1) throw ((n = li), pn(e, 0), Vt(e, t), Ae(e, ne()), n);
  if (n === 6) throw Error(M(345));
  return (
    (e.finishedWork = e.current.alternate),
    (e.finishedLanes = t),
    an(e, Te, dt),
    Ae(e, ne()),
    null
  );
}
function uu(e, t) {
  var n = _;
  _ |= 1;
  try {
    return e(t);
  } finally {
    ((_ = n), _ === 0 && ((rr = ne() + 500), es && Jt()));
  }
}
function kn(e) {
  _t !== null && _t.tag === 0 && !(_ & 6) && Xn();
  var t = _;
  _ |= 1;
  var n = Ue.transition,
    r = O;
  try {
    if (((Ue.transition = null), (O = 1), e)) return e();
  } finally {
    ((O = r), (Ue.transition = n), (_ = t), !(_ & 6) && Jt());
  }
}
function cu() {
  ((Ne = Bn.current), W(Bn));
}
function pn(e, t) {
  ((e.finishedWork = null), (e.finishedLanes = 0));
  var n = e.timeoutHandle;
  if ((n !== -1 && ((e.timeoutHandle = -1), Dv(n)), ie !== null))
    for (n = ie.return; n !== null; ) {
      var r = n;
      switch ((bl(r), r.tag)) {
        case 1:
          ((r = r.type.childContextTypes), r != null && Ro());
          break;
        case 3:
          (tr(), W(Me), W(we), ql());
          break;
        case 5:
          Jl(r);
          break;
        case 4:
          tr();
          break;
        case 13:
          W(Y);
          break;
        case 19:
          W(Y);
          break;
        case 10:
          Yl(r.type._context);
          break;
        case 22:
        case 23:
          cu();
      }
      n = n.return;
    }
  if (
    ((ce = e),
    (ie = e = Ht(e.current, null)),
    (he = Ne = t),
    (ae = 0),
    (li = null),
    (au = is = Sn = 0),
    (Te = Br = null),
    cn !== null)
  ) {
    for (t = 0; t < cn.length; t++)
      if (((n = cn[t]), (r = n.interleaved), r !== null)) {
        n.interleaved = null;
        var i = r.next,
          o = n.pending;
        if (o !== null) {
          var s = o.next;
          ((o.next = i), (r.next = s));
        }
        n.pending = r;
      }
    cn = null;
  }
  return e;
}
function $p(e, t) {
  do {
    var n = ie;
    try {
      if ((Gl(), (oo.current = Fo), Io)) {
        for (var r = X.memoizedState; r !== null; ) {
          var i = r.queue;
          (i !== null && (i.pending = null), (r = r.next));
        }
        Io = !1;
      }
      if (
        ((xn = 0),
        (ue = se = X = null),
        (_r = !1),
        (oi = 0),
        (su.current = null),
        n === null || n.return === null)
      ) {
        ((ae = 1), (li = t), (ie = null));
        break;
      }
      e: {
        var o = e,
          s = n.return,
          a = n,
          l = t;
        if (
          ((t = he),
          (a.flags |= 32768),
          l !== null && typeof l == 'object' && typeof l.then == 'function')
        ) {
          var u = l,
            c = a,
            d = c.tag;
          if (!(c.mode & 1) && (d === 0 || d === 11 || d === 15)) {
            var f = c.alternate;
            f
              ? ((c.updateQueue = f.updateQueue),
                (c.memoizedState = f.memoizedState),
                (c.lanes = f.lanes))
              : ((c.updateQueue = null), (c.memoizedState = null));
          }
          var g = Xc(s);
          if (g !== null) {
            ((g.flags &= -257),
              Zc(g, s, a, o, t),
              g.mode & 1 && Qc(o, u, t),
              (t = g),
              (l = u));
            var v = t.updateQueue;
            if (v === null) {
              var y = new Set();
              (y.add(l), (t.updateQueue = y));
            } else v.add(l);
            break e;
          } else {
            if (!(t & 1)) {
              (Qc(o, u, t), du());
              break e;
            }
            l = Error(M(426));
          }
        } else if (b && a.mode & 1) {
          var S = Xc(s);
          if (S !== null) {
            (!(S.flags & 65536) && (S.flags |= 256),
              Zc(S, s, a, o, t),
              Hl(nr(l, a)));
            break e;
          }
        }
        ((o = l = nr(l, a)),
          ae !== 4 && (ae = 2),
          Br === null ? (Br = [o]) : Br.push(o),
          (o = s));
        do {
          switch (o.tag) {
            case 3:
              ((o.flags |= 65536), (t &= -t), (o.lanes |= t));
              var p = Pp(o, l, t);
              Wc(o, p);
              break e;
            case 1:
              a = l;
              var h = o.type,
                m = o.stateNode;
              if (
                !(o.flags & 128) &&
                (typeof h.getDerivedStateFromError == 'function' ||
                  (m !== null &&
                    typeof m.componentDidCatch == 'function' &&
                    (Wt === null || !Wt.has(m))))
              ) {
                ((o.flags |= 65536), (t &= -t), (o.lanes |= t));
                var k = Tp(o, a, t);
                Wc(o, k);
                break e;
              }
          }
          o = o.return;
        } while (o !== null);
      }
      bp(n);
    } catch (C) {
      ((t = C), ie === n && n !== null && (ie = n = n.return));
      continue;
    }
    break;
  } while (1);
}
function Up() {
  var e = _o.current;
  return ((_o.current = Fo), e === null ? Fo : e);
}
function du() {
  ((ae === 0 || ae === 3 || ae === 2) && (ae = 4),
    ce === null || (!(Sn & 268435455) && !(is & 268435455)) || Vt(ce, he));
}
function zo(e, t) {
  var n = _;
  _ |= 2;
  var r = Up();
  (ce !== e || he !== t) && ((dt = null), pn(e, t));
  do
    try {
      i0();
      break;
    } catch (i) {
      $p(e, i);
    }
  while (1);
  if ((Gl(), (_ = n), (_o.current = r), ie !== null)) throw Error(M(261));
  return ((ce = null), (he = 0), ae);
}
function i0() {
  for (; ie !== null; ) Wp(ie);
}
function o0() {
  for (; ie !== null && !Ay(); ) Wp(ie);
}
function Wp(e) {
  var t = Kp(e.alternate, e, Ne);
  ((e.memoizedProps = e.pendingProps),
    t === null ? bp(e) : (ie = t),
    (su.current = null));
}
function bp(e) {
  var t = e;
  do {
    var n = t.alternate;
    if (((e = t.return), t.flags & 32768)) {
      if (((n = Jv(n, t)), n !== null)) {
        ((n.flags &= 32767), (ie = n));
        return;
      }
      if (e !== null)
        ((e.flags |= 32768), (e.subtreeFlags = 0), (e.deletions = null));
      else {
        ((ae = 6), (ie = null));
        return;
      }
    } else if (((n = Zv(n, t, Ne)), n !== null)) {
      ie = n;
      return;
    }
    if (((t = t.sibling), t !== null)) {
      ie = t;
      return;
    }
    ie = t = e;
  } while (t !== null);
  ae === 0 && (ae = 5);
}
function an(e, t, n) {
  var r = O,
    i = Ue.transition;
  try {
    ((Ue.transition = null), (O = 1), s0(e, t, n, r));
  } finally {
    ((Ue.transition = i), (O = r));
  }
  return null;
}
function s0(e, t, n, r) {
  do Xn();
  while (_t !== null);
  if (_ & 6) throw Error(M(327));
  n = e.finishedWork;
  var i = e.finishedLanes;
  if (n === null) return null;
  if (((e.finishedWork = null), (e.finishedLanes = 0), n === e.current))
    throw Error(M(177));
  ((e.callbackNode = null), (e.callbackPriority = 0));
  var o = n.lanes | n.childLanes;
  if (
    (zy(e, o),
    e === ce && ((ie = ce = null), (he = 0)),
    (!(n.subtreeFlags & 2064) && !(n.flags & 2064)) ||
      Ki ||
      ((Ki = !0),
      Gp(So, function () {
        return (Xn(), null);
      })),
    (o = (n.flags & 15990) !== 0),
    n.subtreeFlags & 15990 || o)
  ) {
    ((o = Ue.transition), (Ue.transition = null));
    var s = O;
    O = 1;
    var a = _;
    ((_ |= 4),
      (su.current = null),
      e0(e, n),
      Op(n, e),
      Ev(Aa),
      (Co = !!La),
      (Aa = La = null),
      (e.current = n),
      t0(n),
      Ny(),
      (_ = a),
      (O = s),
      (Ue.transition = o));
  } else e.current = n;
  if (
    (Ki && ((Ki = !1), (_t = e), (Bo = i)),
    (o = e.pendingLanes),
    o === 0 && (Wt = null),
    Vy(n.stateNode),
    Ae(e, ne()),
    t !== null)
  )
    for (r = e.onRecoverableError, n = 0; n < t.length; n++)
      ((i = t[n]), r(i.value, { componentStack: i.stack, digest: i.digest }));
  if (Oo) throw ((Oo = !1), (e = Xa), (Xa = null), e);
  return (
    Bo & 1 && e.tag !== 0 && Xn(),
    (o = e.pendingLanes),
    o & 1 ? (e === Za ? zr++ : ((zr = 0), (Za = e))) : (zr = 0),
    Jt(),
    null
  );
}
function Xn() {
  if (_t !== null) {
    var e = Ph(Bo),
      t = Ue.transition,
      n = O;
    try {
      if (((Ue.transition = null), (O = 16 > e ? 16 : e), _t === null))
        var r = !1;
      else {
        if (((e = _t), (_t = null), (Bo = 0), _ & 6)) throw Error(M(331));
        var i = _;
        for (_ |= 4, A = e.current; A !== null; ) {
          var o = A,
            s = o.child;
          if (A.flags & 16) {
            var a = o.deletions;
            if (a !== null) {
              for (var l = 0; l < a.length; l++) {
                var u = a[l];
                for (A = u; A !== null; ) {
                  var c = A;
                  switch (c.tag) {
                    case 0:
                    case 11:
                    case 15:
                      Or(8, c, o);
                  }
                  var d = c.child;
                  if (d !== null) ((d.return = c), (A = d));
                  else
                    for (; A !== null; ) {
                      c = A;
                      var f = c.sibling,
                        g = c.return;
                      if ((Ip(c), c === u)) {
                        A = null;
                        break;
                      }
                      if (f !== null) {
                        ((f.return = g), (A = f));
                        break;
                      }
                      A = g;
                    }
                }
              }
              var v = o.alternate;
              if (v !== null) {
                var y = v.child;
                if (y !== null) {
                  v.child = null;
                  do {
                    var S = y.sibling;
                    ((y.sibling = null), (y = S));
                  } while (y !== null);
                }
              }
              A = o;
            }
          }
          if (o.subtreeFlags & 2064 && s !== null) ((s.return = o), (A = s));
          else
            e: for (; A !== null; ) {
              if (((o = A), o.flags & 2048))
                switch (o.tag) {
                  case 0:
                  case 11:
                  case 15:
                    Or(9, o, o.return);
                }
              var p = o.sibling;
              if (p !== null) {
                ((p.return = o.return), (A = p));
                break e;
              }
              A = o.return;
            }
        }
        var h = e.current;
        for (A = h; A !== null; ) {
          s = A;
          var m = s.child;
          if (s.subtreeFlags & 2064 && m !== null) ((m.return = s), (A = m));
          else
            e: for (s = h; A !== null; ) {
              if (((a = A), a.flags & 2048))
                try {
                  switch (a.tag) {
                    case 0:
                    case 11:
                    case 15:
                      rs(9, a);
                  }
                } catch (C) {
                  q(a, a.return, C);
                }
              if (a === s) {
                A = null;
                break e;
              }
              var k = a.sibling;
              if (k !== null) {
                ((k.return = a.return), (A = k));
                break e;
              }
              A = a.return;
            }
        }
        if (
          ((_ = i), Jt(), ot && typeof ot.onPostCommitFiberRoot == 'function')
        )
          try {
            ot.onPostCommitFiberRoot(Qo, e);
          } catch {}
        r = !0;
      }
      return r;
    } finally {
      ((O = n), (Ue.transition = t));
    }
  }
  return !1;
}
function cd(e, t, n) {
  ((t = nr(n, t)),
    (t = Pp(e, t, 1)),
    (e = Ut(e, t, 1)),
    (t = ke()),
    e !== null && (vi(e, 1, t), Ae(e, t)));
}
function q(e, t, n) {
  if (e.tag === 3) cd(e, e, n);
  else
    for (; t !== null; ) {
      if (t.tag === 3) {
        cd(t, e, n);
        break;
      } else if (t.tag === 1) {
        var r = t.stateNode;
        if (
          typeof t.type.getDerivedStateFromError == 'function' ||
          (typeof r.componentDidCatch == 'function' &&
            (Wt === null || !Wt.has(r)))
        ) {
          ((e = nr(n, e)),
            (e = Tp(t, e, 1)),
            (t = Ut(t, e, 1)),
            (e = ke()),
            t !== null && (vi(t, 1, e), Ae(t, e)));
          break;
        }
      }
      t = t.return;
    }
}
function a0(e, t, n) {
  var r = e.pingCache;
  (r !== null && r.delete(t),
    (t = ke()),
    (e.pingedLanes |= e.suspendedLanes & n),
    ce === e &&
      (he & n) === n &&
      (ae === 4 || (ae === 3 && (he & 130023424) === he && 500 > ne() - lu)
        ? pn(e, 0)
        : (au |= n)),
    Ae(e, t));
}
function Hp(e, t) {
  t === 0 &&
    (e.mode & 1
      ? ((t = Fi), (Fi <<= 1), !(Fi & 130023424) && (Fi = 4194304))
      : (t = 1));
  var n = ke();
  ((e = St(e, t)), e !== null && (vi(e, t, n), Ae(e, n)));
}
function l0(e) {
  var t = e.memoizedState,
    n = 0;
  (t !== null && (n = t.retryLane), Hp(e, n));
}
function u0(e, t) {
  var n = 0;
  switch (e.tag) {
    case 13:
      var r = e.stateNode,
        i = e.memoizedState;
      i !== null && (n = i.retryLane);
      break;
    case 19:
      r = e.stateNode;
      break;
    default:
      throw Error(M(314));
  }
  (r !== null && r.delete(t), Hp(e, n));
}
var Kp;
Kp = function (e, t, n) {
  if (e !== null)
    if (e.memoizedProps !== t.pendingProps || Me.current) Ee = !0;
    else {
      if (!(e.lanes & n) && !(t.flags & 128)) return ((Ee = !1), Xv(e, t, n));
      Ee = !!(e.flags & 131072);
    }
  else ((Ee = !1), b && t.flags & 1048576 && Xh(t, Ao, t.index));
  switch (((t.lanes = 0), t.tag)) {
    case 2:
      var r = t.type;
      (ao(e, t), (e = t.pendingProps));
      var i = Jn(t, we.current);
      (Qn(t, n), (i = tu(null, t, r, e, i, n)));
      var o = nu();
      return (
        (t.flags |= 1),
        typeof i == 'object' &&
        i !== null &&
        typeof i.render == 'function' &&
        i.$$typeof === void 0
          ? ((t.tag = 1),
            (t.memoizedState = null),
            (t.updateQueue = null),
            Le(r) ? ((o = !0), Mo(t)) : (o = !1),
            (t.memoizedState =
              i.state !== null && i.state !== void 0 ? i.state : null),
            Xl(t),
            (i.updater = ns),
            (t.stateNode = i),
            (i._reactInternals = t),
            Ba(t, r, e, n),
            (t = Ua(null, t, r, !0, o, n)))
          : ((t.tag = 0), b && o && Wl(t), xe(null, t, i, n), (t = t.child)),
        t
      );
    case 16:
      r = t.elementType;
      e: {
        switch (
          (ao(e, t),
          (e = t.pendingProps),
          (i = r._init),
          (r = i(r._payload)),
          (t.type = r),
          (i = t.tag = d0(r)),
          (e = Qe(r, e)),
          i)
        ) {
          case 0:
            t = $a(null, t, r, e, n);
            break e;
          case 1:
            t = ed(null, t, r, e, n);
            break e;
          case 11:
            t = Jc(null, t, r, e, n);
            break e;
          case 14:
            t = qc(null, t, r, Qe(r.type, e), n);
            break e;
        }
        throw Error(M(306, r, ''));
      }
      return t;
    case 0:
      return (
        (r = t.type),
        (i = t.pendingProps),
        (i = t.elementType === r ? i : Qe(r, i)),
        $a(e, t, r, i, n)
      );
    case 1:
      return (
        (r = t.type),
        (i = t.pendingProps),
        (i = t.elementType === r ? i : Qe(r, i)),
        ed(e, t, r, i, n)
      );
    case 3:
      e: {
        if ((Lp(t), e === null)) throw Error(M(387));
        ((r = t.pendingProps),
          (o = t.memoizedState),
          (i = o.element),
          np(e, t),
          Do(t, r, null, n));
        var s = t.memoizedState;
        if (((r = s.element), o.isDehydrated))
          if (
            ((o = {
              element: r,
              isDehydrated: !1,
              cache: s.cache,
              pendingSuspenseBoundaries: s.pendingSuspenseBoundaries,
              transitions: s.transitions,
            }),
            (t.updateQueue.baseState = o),
            (t.memoizedState = o),
            t.flags & 256)
          ) {
            ((i = nr(Error(M(423)), t)), (t = td(e, t, r, n, i)));
            break e;
          } else if (r !== i) {
            ((i = nr(Error(M(424)), t)), (t = td(e, t, r, n, i)));
            break e;
          } else
            for (
              je = $t(t.stateNode.containerInfo.firstChild),
                De = t,
                b = !0,
                Ze = null,
                n = ep(t, null, r, n),
                t.child = n;
              n;

            )
              ((n.flags = (n.flags & -3) | 4096), (n = n.sibling));
        else {
          if ((qn(), r === i)) {
            t = kt(e, t, n);
            break e;
          }
          xe(e, t, r, n);
        }
        t = t.child;
      }
      return t;
    case 5:
      return (
        rp(t),
        e === null && Fa(t),
        (r = t.type),
        (i = t.pendingProps),
        (o = e !== null ? e.memoizedProps : null),
        (s = i.children),
        Na(r, i) ? (s = null) : o !== null && Na(r, o) && (t.flags |= 32),
        Mp(e, t),
        xe(e, t, s, n),
        t.child
      );
    case 6:
      return (e === null && Fa(t), null);
    case 13:
      return Ap(e, t, n);
    case 4:
      return (
        Zl(t, t.stateNode.containerInfo),
        (r = t.pendingProps),
        e === null ? (t.child = er(t, null, r, n)) : xe(e, t, r, n),
        t.child
      );
    case 11:
      return (
        (r = t.type),
        (i = t.pendingProps),
        (i = t.elementType === r ? i : Qe(r, i)),
        Jc(e, t, r, i, n)
      );
    case 7:
      return (xe(e, t, t.pendingProps, n), t.child);
    case 8:
      return (xe(e, t, t.pendingProps.children, n), t.child);
    case 12:
      return (xe(e, t, t.pendingProps.children, n), t.child);
    case 10:
      e: {
        if (
          ((r = t.type._context),
          (i = t.pendingProps),
          (o = t.memoizedProps),
          (s = i.value),
          z(No, r._currentValue),
          (r._currentValue = s),
          o !== null)
        )
          if (et(o.value, s)) {
            if (o.children === i.children && !Me.current) {
              t = kt(e, t, n);
              break e;
            }
          } else
            for (o = t.child, o !== null && (o.return = t); o !== null; ) {
              var a = o.dependencies;
              if (a !== null) {
                s = o.child;
                for (var l = a.firstContext; l !== null; ) {
                  if (l.context === r) {
                    if (o.tag === 1) {
                      ((l = yt(-1, n & -n)), (l.tag = 2));
                      var u = o.updateQueue;
                      if (u !== null) {
                        u = u.shared;
                        var c = u.pending;
                        (c === null
                          ? (l.next = l)
                          : ((l.next = c.next), (c.next = l)),
                          (u.pending = l));
                      }
                    }
                    ((o.lanes |= n),
                      (l = o.alternate),
                      l !== null && (l.lanes |= n),
                      _a(o.return, n, t),
                      (a.lanes |= n));
                    break;
                  }
                  l = l.next;
                }
              } else if (o.tag === 10) s = o.type === t.type ? null : o.child;
              else if (o.tag === 18) {
                if (((s = o.return), s === null)) throw Error(M(341));
                ((s.lanes |= n),
                  (a = s.alternate),
                  a !== null && (a.lanes |= n),
                  _a(s, n, t),
                  (s = o.sibling));
              } else s = o.child;
              if (s !== null) s.return = o;
              else
                for (s = o; s !== null; ) {
                  if (s === t) {
                    s = null;
                    break;
                  }
                  if (((o = s.sibling), o !== null)) {
                    ((o.return = s.return), (s = o));
                    break;
                  }
                  s = s.return;
                }
              o = s;
            }
        (xe(e, t, i.children, n), (t = t.child));
      }
      return t;
    case 9:
      return (
        (i = t.type),
        (r = t.pendingProps.children),
        Qn(t, n),
        (i = be(i)),
        (r = r(i)),
        (t.flags |= 1),
        xe(e, t, r, n),
        t.child
      );
    case 14:
      return (
        (r = t.type),
        (i = Qe(r, t.pendingProps)),
        (i = Qe(r.type, i)),
        qc(e, t, r, i, n)
      );
    case 15:
      return Ep(e, t, t.type, t.pendingProps, n);
    case 17:
      return (
        (r = t.type),
        (i = t.pendingProps),
        (i = t.elementType === r ? i : Qe(r, i)),
        ao(e, t),
        (t.tag = 1),
        Le(r) ? ((e = !0), Mo(t)) : (e = !1),
        Qn(t, n),
        Cp(t, r, i),
        Ba(t, r, i, n),
        Ua(null, t, r, !0, e, n)
      );
    case 19:
      return Np(e, t, n);
    case 22:
      return Rp(e, t, n);
  }
  throw Error(M(156, t.tag));
};
function Gp(e, t) {
  return xh(e, t);
}
function c0(e, t, n, r) {
  ((this.tag = e),
    (this.key = n),
    (this.sibling =
      this.child =
      this.return =
      this.stateNode =
      this.type =
      this.elementType =
        null),
    (this.index = 0),
    (this.ref = null),
    (this.pendingProps = t),
    (this.dependencies =
      this.memoizedState =
      this.updateQueue =
      this.memoizedProps =
        null),
    (this.mode = r),
    (this.subtreeFlags = this.flags = 0),
    (this.deletions = null),
    (this.childLanes = this.lanes = 0),
    (this.alternate = null));
}
function $e(e, t, n, r) {
  return new c0(e, t, n, r);
}
function fu(e) {
  return ((e = e.prototype), !(!e || !e.isReactComponent));
}
function d0(e) {
  if (typeof e == 'function') return fu(e) ? 1 : 0;
  if (e != null) {
    if (((e = e.$$typeof), e === Nl)) return 11;
    if (e === jl) return 14;
  }
  return 2;
}
function Ht(e, t) {
  var n = e.alternate;
  return (
    n === null
      ? ((n = $e(e.tag, t, e.key, e.mode)),
        (n.elementType = e.elementType),
        (n.type = e.type),
        (n.stateNode = e.stateNode),
        (n.alternate = e),
        (e.alternate = n))
      : ((n.pendingProps = t),
        (n.type = e.type),
        (n.flags = 0),
        (n.subtreeFlags = 0),
        (n.deletions = null)),
    (n.flags = e.flags & 14680064),
    (n.childLanes = e.childLanes),
    (n.lanes = e.lanes),
    (n.child = e.child),
    (n.memoizedProps = e.memoizedProps),
    (n.memoizedState = e.memoizedState),
    (n.updateQueue = e.updateQueue),
    (t = e.dependencies),
    (n.dependencies =
      t === null ? null : { lanes: t.lanes, firstContext: t.firstContext }),
    (n.sibling = e.sibling),
    (n.index = e.index),
    (n.ref = e.ref),
    n
  );
}
function co(e, t, n, r, i, o) {
  var s = 2;
  if (((r = e), typeof e == 'function')) fu(e) && (s = 1);
  else if (typeof e == 'string') s = 5;
  else
    e: switch (e) {
      case Ln:
        return mn(n.children, i, o, t);
      case Al:
        ((s = 8), (i |= 8));
        break;
      case ua:
        return (
          (e = $e(12, n, t, i | 2)),
          (e.elementType = ua),
          (e.lanes = o),
          e
        );
      case ca:
        return ((e = $e(13, n, t, i)), (e.elementType = ca), (e.lanes = o), e);
      case da:
        return ((e = $e(19, n, t, i)), (e.elementType = da), (e.lanes = o), e);
      case rh:
        return os(n, i, o, t);
      default:
        if (typeof e == 'object' && e !== null)
          switch (e.$$typeof) {
            case th:
              s = 10;
              break e;
            case nh:
              s = 9;
              break e;
            case Nl:
              s = 11;
              break e;
            case jl:
              s = 14;
              break e;
            case Nt:
              ((s = 16), (r = null));
              break e;
          }
        throw Error(M(130, e == null ? e : typeof e, ''));
    }
  return (
    (t = $e(s, n, t, i)),
    (t.elementType = e),
    (t.type = r),
    (t.lanes = o),
    t
  );
}
function mn(e, t, n, r) {
  return ((e = $e(7, e, r, t)), (e.lanes = n), e);
}
function os(e, t, n, r) {
  return (
    (e = $e(22, e, r, t)),
    (e.elementType = rh),
    (e.lanes = n),
    (e.stateNode = { isHidden: !1 }),
    e
  );
}
function Us(e, t, n) {
  return ((e = $e(6, e, null, t)), (e.lanes = n), e);
}
function Ws(e, t, n) {
  return (
    (t = $e(4, e.children !== null ? e.children : [], e.key, t)),
    (t.lanes = n),
    (t.stateNode = {
      containerInfo: e.containerInfo,
      pendingChildren: null,
      implementation: e.implementation,
    }),
    t
  );
}
function f0(e, t, n, r, i) {
  ((this.tag = t),
    (this.containerInfo = e),
    (this.finishedWork =
      this.pingCache =
      this.current =
      this.pendingChildren =
        null),
    (this.timeoutHandle = -1),
    (this.callbackNode = this.pendingContext = this.context = null),
    (this.callbackPriority = 0),
    (this.eventTimes = Cs(0)),
    (this.expirationTimes = Cs(-1)),
    (this.entangledLanes =
      this.finishedLanes =
      this.mutableReadLanes =
      this.expiredLanes =
      this.pingedLanes =
      this.suspendedLanes =
      this.pendingLanes =
        0),
    (this.entanglements = Cs(0)),
    (this.identifierPrefix = r),
    (this.onRecoverableError = i),
    (this.mutableSourceEagerHydrationData = null));
}
function hu(e, t, n, r, i, o, s, a, l) {
  return (
    (e = new f0(e, t, n, a, l)),
    t === 1 ? ((t = 1), o === !0 && (t |= 8)) : (t = 0),
    (o = $e(3, null, null, t)),
    (e.current = o),
    (o.stateNode = e),
    (o.memoizedState = {
      element: r,
      isDehydrated: n,
      cache: null,
      transitions: null,
      pendingSuspenseBoundaries: null,
    }),
    Xl(o),
    e
  );
}
function h0(e, t, n) {
  var r = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
  return {
    $$typeof: Mn,
    key: r == null ? null : '' + r,
    children: e,
    containerInfo: t,
    implementation: n,
  };
}
function Yp(e) {
  if (!e) return Gt;
  e = e._reactInternals;
  e: {
    if (Pn(e) !== e || e.tag !== 1) throw Error(M(170));
    var t = e;
    do {
      switch (t.tag) {
        case 3:
          t = t.stateNode.context;
          break e;
        case 1:
          if (Le(t.type)) {
            t = t.stateNode.__reactInternalMemoizedMergedChildContext;
            break e;
          }
      }
      t = t.return;
    } while (t !== null);
    throw Error(M(171));
  }
  if (e.tag === 1) {
    var n = e.type;
    if (Le(n)) return Yh(e, n, t);
  }
  return t;
}
function Qp(e, t, n, r, i, o, s, a, l) {
  return (
    (e = hu(n, r, !0, e, i, o, s, a, l)),
    (e.context = Yp(null)),
    (n = e.current),
    (r = ke()),
    (i = bt(n)),
    (o = yt(r, i)),
    (o.callback = t ?? null),
    Ut(n, o, i),
    (e.current.lanes = i),
    vi(e, i, r),
    Ae(e, r),
    e
  );
}
function ss(e, t, n, r) {
  var i = t.current,
    o = ke(),
    s = bt(i);
  return (
    (n = Yp(n)),
    t.context === null ? (t.context = n) : (t.pendingContext = n),
    (t = yt(o, s)),
    (t.payload = { element: e }),
    (r = r === void 0 ? null : r),
    r !== null && (t.callback = r),
    (e = Ut(i, t, s)),
    e !== null && (qe(e, i, s, o), io(e, i, s)),
    s
  );
}
function $o(e) {
  if (((e = e.current), !e.child)) return null;
  switch (e.child.tag) {
    case 5:
      return e.child.stateNode;
    default:
      return e.child.stateNode;
  }
}
function dd(e, t) {
  if (((e = e.memoizedState), e !== null && e.dehydrated !== null)) {
    var n = e.retryLane;
    e.retryLane = n !== 0 && n < t ? n : t;
  }
}
function pu(e, t) {
  (dd(e, t), (e = e.alternate) && dd(e, t));
}
function p0() {
  return null;
}
var Xp =
  typeof reportError == 'function'
    ? reportError
    : function (e) {
        console.error(e);
      };
function mu(e) {
  this._internalRoot = e;
}
as.prototype.render = mu.prototype.render = function (e) {
  var t = this._internalRoot;
  if (t === null) throw Error(M(409));
  ss(e, t, null, null);
};
as.prototype.unmount = mu.prototype.unmount = function () {
  var e = this._internalRoot;
  if (e !== null) {
    this._internalRoot = null;
    var t = e.containerInfo;
    (kn(function () {
      ss(null, e, null, null);
    }),
      (t[xt] = null));
  }
};
function as(e) {
  this._internalRoot = e;
}
as.prototype.unstable_scheduleHydration = function (e) {
  if (e) {
    var t = Rh();
    e = { blockedOn: null, target: e, priority: t };
    for (var n = 0; n < Dt.length && t !== 0 && t < Dt[n].priority; n++);
    (Dt.splice(n, 0, e), n === 0 && Lh(e));
  }
};
function gu(e) {
  return !(!e || (e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11));
}
function ls(e) {
  return !(
    !e ||
    (e.nodeType !== 1 &&
      e.nodeType !== 9 &&
      e.nodeType !== 11 &&
      (e.nodeType !== 8 || e.nodeValue !== ' react-mount-point-unstable '))
  );
}
function fd() {}
function m0(e, t, n, r, i) {
  if (i) {
    if (typeof r == 'function') {
      var o = r;
      r = function () {
        var u = $o(s);
        o.call(u);
      };
    }
    var s = Qp(t, r, e, 0, null, !1, !1, '', fd);
    return (
      (e._reactRootContainer = s),
      (e[xt] = s.current),
      ei(e.nodeType === 8 ? e.parentNode : e),
      kn(),
      s
    );
  }
  for (; (i = e.lastChild); ) e.removeChild(i);
  if (typeof r == 'function') {
    var a = r;
    r = function () {
      var u = $o(l);
      a.call(u);
    };
  }
  var l = hu(e, 0, !1, null, null, !1, !1, '', fd);
  return (
    (e._reactRootContainer = l),
    (e[xt] = l.current),
    ei(e.nodeType === 8 ? e.parentNode : e),
    kn(function () {
      ss(t, l, n, r);
    }),
    l
  );
}
function us(e, t, n, r, i) {
  var o = n._reactRootContainer;
  if (o) {
    var s = o;
    if (typeof i == 'function') {
      var a = i;
      i = function () {
        var l = $o(s);
        a.call(l);
      };
    }
    ss(t, s, e, i);
  } else s = m0(n, t, e, i, r);
  return $o(s);
}
Th = function (e) {
  switch (e.tag) {
    case 3:
      var t = e.stateNode;
      if (t.current.memoizedState.isDehydrated) {
        var n = Rr(t.pendingLanes);
        n !== 0 &&
          (Il(t, n | 1), Ae(t, ne()), !(_ & 6) && ((rr = ne() + 500), Jt()));
      }
      break;
    case 13:
      (kn(function () {
        var r = St(e, 1);
        if (r !== null) {
          var i = ke();
          qe(r, e, 1, i);
        }
      }),
        pu(e, 1));
  }
};
Fl = function (e) {
  if (e.tag === 13) {
    var t = St(e, 134217728);
    if (t !== null) {
      var n = ke();
      qe(t, e, 134217728, n);
    }
    pu(e, 134217728);
  }
};
Eh = function (e) {
  if (e.tag === 13) {
    var t = bt(e),
      n = St(e, t);
    if (n !== null) {
      var r = ke();
      qe(n, e, t, r);
    }
    pu(e, t);
  }
};
Rh = function () {
  return O;
};
Mh = function (e, t) {
  var n = O;
  try {
    return ((O = e), t());
  } finally {
    O = n;
  }
};
Sa = function (e, t, n) {
  switch (t) {
    case 'input':
      if ((pa(e, n), (t = n.name), n.type === 'radio' && t != null)) {
        for (n = e; n.parentNode; ) n = n.parentNode;
        for (
          n = n.querySelectorAll(
            'input[name=' + JSON.stringify('' + t) + '][type="radio"]'
          ),
            t = 0;
          t < n.length;
          t++
        ) {
          var r = n[t];
          if (r !== e && r.form === e.form) {
            var i = qo(r);
            if (!i) throw Error(M(90));
            (oh(r), pa(r, i));
          }
        }
      }
      break;
    case 'textarea':
      ah(e, n);
      break;
    case 'select':
      ((t = n.value), t != null && Hn(e, !!n.multiple, t, !1));
  }
};
ph = uu;
mh = kn;
var g0 = { usingClientEntryPoint: !1, Events: [xi, Dn, qo, fh, hh, uu] },
  kr = {
    findFiberByHostInstance: un,
    bundleType: 0,
    version: '18.3.1',
    rendererPackageName: 'react-dom',
  },
  y0 = {
    bundleType: kr.bundleType,
    version: kr.version,
    rendererPackageName: kr.rendererPackageName,
    rendererConfig: kr.rendererConfig,
    overrideHookState: null,
    overrideHookStateDeletePath: null,
    overrideHookStateRenamePath: null,
    overrideProps: null,
    overridePropsDeletePath: null,
    overridePropsRenamePath: null,
    setErrorHandler: null,
    setSuspenseHandler: null,
    scheduleUpdate: null,
    currentDispatcherRef: Et.ReactCurrentDispatcher,
    findHostInstanceByFiber: function (e) {
      return ((e = vh(e)), e === null ? null : e.stateNode);
    },
    findFiberByHostInstance: kr.findFiberByHostInstance || p0,
    findHostInstancesForRefresh: null,
    scheduleRefresh: null,
    scheduleRoot: null,
    setRefreshHandler: null,
    getCurrentFiber: null,
    reconcilerVersion: '18.3.1-next-f1338f8080-20240426',
  };
if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < 'u') {
  var Gi = __REACT_DEVTOOLS_GLOBAL_HOOK__;
  if (!Gi.isDisabled && Gi.supportsFiber)
    try {
      ((Qo = Gi.inject(y0)), (ot = Gi));
    } catch {}
}
Ie.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = g0;
Ie.createPortal = function (e, t) {
  var n = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
  if (!gu(t)) throw Error(M(200));
  return h0(e, t, null, n);
};
Ie.createRoot = function (e, t) {
  if (!gu(e)) throw Error(M(299));
  var n = !1,
    r = '',
    i = Xp;
  return (
    t != null &&
      (t.unstable_strictMode === !0 && (n = !0),
      t.identifierPrefix !== void 0 && (r = t.identifierPrefix),
      t.onRecoverableError !== void 0 && (i = t.onRecoverableError)),
    (t = hu(e, 1, !1, null, null, n, !1, r, i)),
    (e[xt] = t.current),
    ei(e.nodeType === 8 ? e.parentNode : e),
    new mu(t)
  );
};
Ie.findDOMNode = function (e) {
  if (e == null) return null;
  if (e.nodeType === 1) return e;
  var t = e._reactInternals;
  if (t === void 0)
    throw typeof e.render == 'function'
      ? Error(M(188))
      : ((e = Object.keys(e).join(',')), Error(M(268, e)));
  return ((e = vh(t)), (e = e === null ? null : e.stateNode), e);
};
Ie.flushSync = function (e) {
  return kn(e);
};
Ie.hydrate = function (e, t, n) {
  if (!ls(t)) throw Error(M(200));
  return us(null, e, t, !0, n);
};
Ie.hydrateRoot = function (e, t, n) {
  if (!gu(e)) throw Error(M(405));
  var r = (n != null && n.hydratedSources) || null,
    i = !1,
    o = '',
    s = Xp;
  if (
    (n != null &&
      (n.unstable_strictMode === !0 && (i = !0),
      n.identifierPrefix !== void 0 && (o = n.identifierPrefix),
      n.onRecoverableError !== void 0 && (s = n.onRecoverableError)),
    (t = Qp(t, null, e, 1, n ?? null, i, !1, o, s)),
    (e[xt] = t.current),
    ei(e),
    r)
  )
    for (e = 0; e < r.length; e++)
      ((n = r[e]),
        (i = n._getVersion),
        (i = i(n._source)),
        t.mutableSourceEagerHydrationData == null
          ? (t.mutableSourceEagerHydrationData = [n, i])
          : t.mutableSourceEagerHydrationData.push(n, i));
  return new as(t);
};
Ie.render = function (e, t, n) {
  if (!ls(t)) throw Error(M(200));
  return us(null, e, t, !1, n);
};
Ie.unmountComponentAtNode = function (e) {
  if (!ls(e)) throw Error(M(40));
  return e._reactRootContainer
    ? (kn(function () {
        us(null, null, e, !1, function () {
          ((e._reactRootContainer = null), (e[xt] = null));
        });
      }),
      !0)
    : !1;
};
Ie.unstable_batchedUpdates = uu;
Ie.unstable_renderSubtreeIntoContainer = function (e, t, n, r) {
  if (!ls(n)) throw Error(M(200));
  if (e == null || e._reactInternals === void 0) throw Error(M(38));
  return us(e, t, n, !1, r);
};
Ie.version = '18.3.1-next-f1338f8080-20240426';
function Zp() {
  if (
    !(
      typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > 'u' ||
      typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != 'function'
    )
  )
    try {
      __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(Zp);
    } catch (e) {
      console.error(e);
    }
}
(Zp(), (Zf.exports = Ie));
var v0 = Zf.exports,
  hd = v0;
((aa.createRoot = hd.createRoot), (aa.hydrateRoot = hd.hydrateRoot));
const w0 = 'modulepreload',
  x0 = function (e) {
    return '/imposter-party/' + e;
  },
  pd = {},
  yu = function (t, n, r) {
    if (!n || n.length === 0) return t();
    const i = document.getElementsByTagName('link');
    return Promise.all(
      n.map((o) => {
        if (((o = x0(o)), o in pd)) return;
        pd[o] = !0;
        const s = o.endsWith('.css'),
          a = s ? '[rel="stylesheet"]' : '';
        if (!!r)
          for (let c = i.length - 1; c >= 0; c--) {
            const d = i[c];
            if (d.href === o && (!s || d.rel === 'stylesheet')) return;
          }
        else if (document.querySelector(`link[href="${o}"]${a}`)) return;
        const u = document.createElement('link');
        if (
          ((u.rel = s ? 'stylesheet' : w0),
          s || ((u.as = 'script'), (u.crossOrigin = '')),
          (u.href = o),
          document.head.appendChild(u),
          s)
        )
          return new Promise((c, d) => {
            (u.addEventListener('load', c),
              u.addEventListener('error', () =>
                d(new Error(`Unable to preload CSS for ${o}`))
              ));
          });
      })
    )
      .then(() => t())
      .catch((o) => {
        const s = new Event('vite:preloadError', { cancelable: !0 });
        if (((s.payload = o), window.dispatchEvent(s), !s.defaultPrevented))
          throw o;
      });
  };
var md = 'popstate';
function S0(e = {}) {
  function t(i, o) {
    let {
      pathname: s = '/',
      search: a = '',
      hash: l = '',
    } = Tn(i.location.hash.substring(1));
    return (
      !s.startsWith('/') && !s.startsWith('.') && (s = '/' + s),
      el(
        '',
        { pathname: s, search: a, hash: l },
        (o.state && o.state.usr) || null,
        (o.state && o.state.key) || 'default'
      )
    );
  }
  function n(i, o) {
    let s = i.document.querySelector('base'),
      a = '';
    if (s && s.getAttribute('href')) {
      let l = i.location.href,
        u = l.indexOf('#');
      a = u === -1 ? l : l.slice(0, u);
    }
    return a + '#' + (typeof o == 'string' ? o : ui(o));
  }
  function r(i, o) {
    Ke(
      i.pathname.charAt(0) === '/',
      `relative pathnames are not supported in hash history.push(${JSON.stringify(o)})`
    );
  }
  return C0(t, n, r, e);
}
function K(e, t) {
  if (e === !1 || e === null || typeof e > 'u') throw new Error(t);
}
function Ke(e, t) {
  if (!e) {
    typeof console < 'u' && console.warn(t);
    try {
      throw new Error(t);
    } catch {}
  }
}
function k0() {
  return Math.random().toString(36).substring(2, 10);
}
function gd(e, t) {
  return { usr: e.state, key: e.key, idx: t };
}
function el(e, t, n = null, r) {
  return {
    pathname: typeof e == 'string' ? e : e.pathname,
    search: '',
    hash: '',
    ...(typeof t == 'string' ? Tn(t) : t),
    state: n,
    key: (t && t.key) || r || k0(),
  };
}
function ui({ pathname: e = '/', search: t = '', hash: n = '' }) {
  return (
    t && t !== '?' && (e += t.charAt(0) === '?' ? t : '?' + t),
    n && n !== '#' && (e += n.charAt(0) === '#' ? n : '#' + n),
    e
  );
}
function Tn(e) {
  let t = {};
  if (e) {
    let n = e.indexOf('#');
    n >= 0 && ((t.hash = e.substring(n)), (e = e.substring(0, n)));
    let r = e.indexOf('?');
    (r >= 0 && ((t.search = e.substring(r)), (e = e.substring(0, r))),
      e && (t.pathname = e));
  }
  return t;
}
function C0(e, t, n, r = {}) {
  let { window: i = document.defaultView, v5Compat: o = !1 } = r,
    s = i.history,
    a = 'POP',
    l = null,
    u = c();
  u == null && ((u = 0), s.replaceState({ ...s.state, idx: u }, ''));
  function c() {
    return (s.state || { idx: null }).idx;
  }
  function d() {
    a = 'POP';
    let S = c(),
      p = S == null ? null : S - u;
    ((u = S), l && l({ action: a, location: y.location, delta: p }));
  }
  function f(S, p) {
    a = 'PUSH';
    let h = el(y.location, S, p);
    (n && n(h, S), (u = c() + 1));
    let m = gd(h, u),
      k = y.createHref(h);
    try {
      s.pushState(m, '', k);
    } catch (C) {
      if (C instanceof DOMException && C.name === 'DataCloneError') throw C;
      i.location.assign(k);
    }
    o && l && l({ action: a, location: y.location, delta: 1 });
  }
  function g(S, p) {
    a = 'REPLACE';
    let h = el(y.location, S, p);
    (n && n(h, S), (u = c()));
    let m = gd(h, u),
      k = y.createHref(h);
    (s.replaceState(m, '', k),
      o && l && l({ action: a, location: y.location, delta: 0 }));
  }
  function v(S) {
    return P0(S);
  }
  let y = {
    get action() {
      return a;
    },
    get location() {
      return e(i, s);
    },
    listen(S) {
      if (l) throw new Error('A history only accepts one active listener');
      return (
        i.addEventListener(md, d),
        (l = S),
        () => {
          (i.removeEventListener(md, d), (l = null));
        }
      );
    },
    createHref(S) {
      return t(i, S);
    },
    createURL: v,
    encodeLocation(S) {
      let p = v(S);
      return { pathname: p.pathname, search: p.search, hash: p.hash };
    },
    push: f,
    replace: g,
    go(S) {
      return s.go(S);
    },
  };
  return y;
}
function P0(e, t = !1) {
  let n = 'http://localhost';
  (typeof window < 'u' &&
    (n =
      window.location.origin !== 'null'
        ? window.location.origin
        : window.location.href),
    K(n, 'No window.location.(origin|href) available to create URL'));
  let r = typeof e == 'string' ? e : ui(e);
  return (
    (r = r.replace(/ $/, '%20')),
    !t && r.startsWith('//') && (r = n + r),
    new URL(r, n)
  );
}
function Jp(e, t, n = '/') {
  return T0(e, t, n, !1);
}
function T0(e, t, n, r) {
  let i = typeof t == 'string' ? Tn(t) : t,
    o = Ct(i.pathname || '/', n);
  if (o == null) return null;
  let s = qp(e);
  E0(s);
  let a = null;
  for (let l = 0; a == null && l < s.length; ++l) {
    let u = _0(o);
    a = I0(s[l], u, r);
  }
  return a;
}
function qp(e, t = [], n = [], r = '') {
  let i = (o, s, a) => {
    let l = {
      relativePath: a === void 0 ? o.path || '' : a,
      caseSensitive: o.caseSensitive === !0,
      childrenIndex: s,
      route: o,
    };
    l.relativePath.startsWith('/') &&
      (K(
        l.relativePath.startsWith(r),
        `Absolute route path "${l.relativePath}" nested under path "${r}" is not valid. An absolute child route path must start with the combined path of all its parent routes.`
      ),
      (l.relativePath = l.relativePath.slice(r.length)));
    let u = vt([r, l.relativePath]),
      c = n.concat(l);
    (o.children &&
      o.children.length > 0 &&
      (K(
        o.index !== !0,
        `Index routes must not have child routes. Please remove all child routes from route path "${u}".`
      ),
      qp(o.children, t, c, u)),
      !(o.path == null && !o.index) &&
        t.push({ path: u, score: D0(u, o.index), routesMeta: c }));
  };
  return (
    e.forEach((o, s) => {
      var a;
      if (o.path === '' || !((a = o.path) != null && a.includes('?'))) i(o, s);
      else for (let l of em(o.path)) i(o, s, l);
    }),
    t
  );
}
function em(e) {
  let t = e.split('/');
  if (t.length === 0) return [];
  let [n, ...r] = t,
    i = n.endsWith('?'),
    o = n.replace(/\?$/, '');
  if (r.length === 0) return i ? [o, ''] : [o];
  let s = em(r.join('/')),
    a = [];
  return (
    a.push(...s.map((l) => (l === '' ? o : [o, l].join('/')))),
    i && a.push(...s),
    a.map((l) => (e.startsWith('/') && l === '' ? '/' : l))
  );
}
function E0(e) {
  e.sort((t, n) =>
    t.score !== n.score
      ? n.score - t.score
      : V0(
          t.routesMeta.map((r) => r.childrenIndex),
          n.routesMeta.map((r) => r.childrenIndex)
        )
  );
}
var R0 = /^:[\w-]+$/,
  M0 = 3,
  L0 = 2,
  A0 = 1,
  N0 = 10,
  j0 = -2,
  yd = (e) => e === '*';
function D0(e, t) {
  let n = e.split('/'),
    r = n.length;
  return (
    n.some(yd) && (r += j0),
    t && (r += L0),
    n
      .filter((i) => !yd(i))
      .reduce((i, o) => i + (R0.test(o) ? M0 : o === '' ? A0 : N0), r)
  );
}
function V0(e, t) {
  return e.length === t.length && e.slice(0, -1).every((r, i) => r === t[i])
    ? e[e.length - 1] - t[t.length - 1]
    : 0;
}
function I0(e, t, n = !1) {
  let { routesMeta: r } = e,
    i = {},
    o = '/',
    s = [];
  for (let a = 0; a < r.length; ++a) {
    let l = r[a],
      u = a === r.length - 1,
      c = o === '/' ? t : t.slice(o.length) || '/',
      d = Uo(
        { path: l.relativePath, caseSensitive: l.caseSensitive, end: u },
        c
      ),
      f = l.route;
    if (
      (!d &&
        u &&
        n &&
        !r[r.length - 1].route.index &&
        (d = Uo(
          { path: l.relativePath, caseSensitive: l.caseSensitive, end: !1 },
          c
        )),
      !d)
    )
      return null;
    (Object.assign(i, d.params),
      s.push({
        params: i,
        pathname: vt([o, d.pathname]),
        pathnameBase: $0(vt([o, d.pathnameBase])),
        route: f,
      }),
      d.pathnameBase !== '/' && (o = vt([o, d.pathnameBase])));
  }
  return s;
}
function Uo(e, t) {
  typeof e == 'string' && (e = { path: e, caseSensitive: !1, end: !0 });
  let [n, r] = F0(e.path, e.caseSensitive, e.end),
    i = t.match(n);
  if (!i) return null;
  let o = i[0],
    s = o.replace(/(.)\/+$/, '$1'),
    a = i.slice(1);
  return {
    params: r.reduce((u, { paramName: c, isOptional: d }, f) => {
      if (c === '*') {
        let v = a[f] || '';
        s = o.slice(0, o.length - v.length).replace(/(.)\/+$/, '$1');
      }
      const g = a[f];
      return (
        d && !g ? (u[c] = void 0) : (u[c] = (g || '').replace(/%2F/g, '/')),
        u
      );
    }, {}),
    pathname: o,
    pathnameBase: s,
    pattern: e,
  };
}
function F0(e, t = !1, n = !0) {
  Ke(
    e === '*' || !e.endsWith('*') || e.endsWith('/*'),
    `Route path "${e}" will be treated as if it were "${e.replace(/\*$/, '/*')}" because the \`*\` character must always follow a \`/\` in the pattern. To get rid of this warning, please change the route path to "${e.replace(/\*$/, '/*')}".`
  );
  let r = [],
    i =
      '^' +
      e
        .replace(/\/*\*?$/, '')
        .replace(/^\/*/, '/')
        .replace(/[\\.*+^${}|()[\]]/g, '\\$&')
        .replace(
          /\/:([\w-]+)(\?)?/g,
          (s, a, l) => (
            r.push({ paramName: a, isOptional: l != null }),
            l ? '/?([^\\/]+)?' : '/([^\\/]+)'
          )
        );
  return (
    e.endsWith('*')
      ? (r.push({ paramName: '*' }),
        (i += e === '*' || e === '/*' ? '(.*)$' : '(?:\\/(.+)|\\/*)$'))
      : n
        ? (i += '\\/*$')
        : e !== '' && e !== '/' && (i += '(?:(?=\\/|$))'),
    [new RegExp(i, t ? void 0 : 'i'), r]
  );
}
function _0(e) {
  try {
    return e
      .split('/')
      .map((t) => decodeURIComponent(t).replace(/\//g, '%2F'))
      .join('/');
  } catch (t) {
    return (
      Ke(
        !1,
        `The URL path "${e}" could not be decoded because it is a malformed URL segment. This is probably due to a bad percent encoding (${t}).`
      ),
      e
    );
  }
}
function Ct(e, t) {
  if (t === '/') return e;
  if (!e.toLowerCase().startsWith(t.toLowerCase())) return null;
  let n = t.endsWith('/') ? t.length - 1 : t.length,
    r = e.charAt(n);
  return r && r !== '/' ? null : e.slice(n) || '/';
}
function O0(e, t = '/') {
  let {
    pathname: n,
    search: r = '',
    hash: i = '',
  } = typeof e == 'string' ? Tn(e) : e;
  return {
    pathname: n ? (n.startsWith('/') ? n : B0(n, t)) : t,
    search: U0(r),
    hash: W0(i),
  };
}
function B0(e, t) {
  let n = t.replace(/\/+$/, '').split('/');
  return (
    e.split('/').forEach((i) => {
      i === '..' ? n.length > 1 && n.pop() : i !== '.' && n.push(i);
    }),
    n.length > 1 ? n.join('/') : '/'
  );
}
function bs(e, t, n, r) {
  return `Cannot include a '${e}' character in a manually specified \`to.${t}\` field [${JSON.stringify(r)}].  Please separate it out to the \`to.${n}\` field. Alternatively you may provide the full path as a string in <Link to="..."> and the router will parse it for you.`;
}
function z0(e) {
  return e.filter(
    (t, n) => n === 0 || (t.route.path && t.route.path.length > 0)
  );
}
function vu(e) {
  let t = z0(e);
  return t.map((n, r) => (r === t.length - 1 ? n.pathname : n.pathnameBase));
}
function wu(e, t, n, r = !1) {
  let i;
  typeof e == 'string'
    ? (i = Tn(e))
    : ((i = { ...e }),
      K(
        !i.pathname || !i.pathname.includes('?'),
        bs('?', 'pathname', 'search', i)
      ),
      K(
        !i.pathname || !i.pathname.includes('#'),
        bs('#', 'pathname', 'hash', i)
      ),
      K(!i.search || !i.search.includes('#'), bs('#', 'search', 'hash', i)));
  let o = e === '' || i.pathname === '',
    s = o ? '/' : i.pathname,
    a;
  if (s == null) a = n;
  else {
    let d = t.length - 1;
    if (!r && s.startsWith('..')) {
      let f = s.split('/');
      for (; f[0] === '..'; ) (f.shift(), (d -= 1));
      i.pathname = f.join('/');
    }
    a = d >= 0 ? t[d] : '/';
  }
  let l = O0(i, a),
    u = s && s !== '/' && s.endsWith('/'),
    c = (o || s === '.') && n.endsWith('/');
  return (!l.pathname.endsWith('/') && (u || c) && (l.pathname += '/'), l);
}
var vt = (e) => e.join('/').replace(/\/\/+/g, '/'),
  $0 = (e) => e.replace(/\/+$/, '').replace(/^\/*/, '/'),
  U0 = (e) => (!e || e === '?' ? '' : e.startsWith('?') ? e : '?' + e),
  W0 = (e) => (!e || e === '#' ? '' : e.startsWith('#') ? e : '#' + e);
function b0(e) {
  return (
    e != null &&
    typeof e.status == 'number' &&
    typeof e.statusText == 'string' &&
    typeof e.internal == 'boolean' &&
    'data' in e
  );
}
var tm = ['POST', 'PUT', 'PATCH', 'DELETE'];
new Set(tm);
var H0 = ['GET', ...tm];
new Set(H0);
var ur = x.createContext(null);
ur.displayName = 'DataRouter';
var cs = x.createContext(null);
cs.displayName = 'DataRouterState';
x.createContext(!1);
var nm = x.createContext({ isTransitioning: !1 });
nm.displayName = 'ViewTransition';
var K0 = x.createContext(new Map());
K0.displayName = 'Fetchers';
var G0 = x.createContext(null);
G0.displayName = 'Await';
var tt = x.createContext(null);
tt.displayName = 'Navigation';
var ki = x.createContext(null);
ki.displayName = 'Location';
var ct = x.createContext({ outlet: null, matches: [], isDataRoute: !1 });
ct.displayName = 'Route';
var xu = x.createContext(null);
xu.displayName = 'RouteError';
function Y0(e, { relative: t } = {}) {
  K(cr(), 'useHref() may be used only in the context of a <Router> component.');
  let { basename: n, navigator: r } = x.useContext(tt),
    { hash: i, pathname: o, search: s } = Ci(e, { relative: t }),
    a = o;
  return (
    n !== '/' && (a = o === '/' ? n : vt([n, o])),
    r.createHref({ pathname: a, search: s, hash: i })
  );
}
function cr() {
  return x.useContext(ki) != null;
}
function qt() {
  return (
    K(
      cr(),
      'useLocation() may be used only in the context of a <Router> component.'
    ),
    x.useContext(ki).location
  );
}
var rm =
  'You should call navigate() in a React.useEffect(), not when your component is first rendered.';
function im(e) {
  x.useContext(tt).static || x.useLayoutEffect(e);
}
function en() {
  let { isDataRoute: e } = x.useContext(ct);
  return e ? aw() : Q0();
}
function Q0() {
  K(
    cr(),
    'useNavigate() may be used only in the context of a <Router> component.'
  );
  let e = x.useContext(ur),
    { basename: t, navigator: n } = x.useContext(tt),
    { matches: r } = x.useContext(ct),
    { pathname: i } = qt(),
    o = JSON.stringify(vu(r)),
    s = x.useRef(!1);
  return (
    im(() => {
      s.current = !0;
    }),
    x.useCallback(
      (l, u = {}) => {
        if ((Ke(s.current, rm), !s.current)) return;
        if (typeof l == 'number') {
          n.go(l);
          return;
        }
        let c = wu(l, JSON.parse(o), i, u.relative === 'path');
        (e == null &&
          t !== '/' &&
          (c.pathname = c.pathname === '/' ? t : vt([t, c.pathname])),
          (u.replace ? n.replace : n.push)(c, u.state, u));
      },
      [t, n, o, i, e]
    )
  );
}
x.createContext(null);
function Ci(e, { relative: t } = {}) {
  let { matches: n } = x.useContext(ct),
    { pathname: r } = qt(),
    i = JSON.stringify(vu(n));
  return x.useMemo(() => wu(e, JSON.parse(i), r, t === 'path'), [e, i, r, t]);
}
function X0(e, t) {
  return om(e, t);
}
function om(e, t, n, r) {
  var p;
  K(
    cr(),
    'useRoutes() may be used only in the context of a <Router> component.'
  );
  let { navigator: i } = x.useContext(tt),
    { matches: o } = x.useContext(ct),
    s = o[o.length - 1],
    a = s ? s.params : {},
    l = s ? s.pathname : '/',
    u = s ? s.pathnameBase : '/',
    c = s && s.route;
  {
    let h = (c && c.path) || '';
    sm(
      l,
      !c || h.endsWith('*') || h.endsWith('*?'),
      `You rendered descendant <Routes> (or called \`useRoutes()\`) at "${l}" (under <Route path="${h}">) but the parent route path has no trailing "*". This means if you navigate deeper, the parent won't match anymore and therefore the child routes will never render.

Please change the parent <Route path="${h}"> to <Route path="${h === '/' ? '*' : `${h}/*`}">.`
    );
  }
  let d = qt(),
    f;
  if (t) {
    let h = typeof t == 'string' ? Tn(t) : t;
    (K(
      u === '/' || ((p = h.pathname) == null ? void 0 : p.startsWith(u)),
      `When overriding the location using \`<Routes location>\` or \`useRoutes(routes, location)\`, the location pathname must begin with the portion of the URL pathname that was matched by all parent routes. The current pathname base is "${u}" but pathname "${h.pathname}" was given in the \`location\` prop.`
    ),
      (f = h));
  } else f = d;
  let g = f.pathname || '/',
    v = g;
  if (u !== '/') {
    let h = u.replace(/^\//, '').split('/');
    v = '/' + g.replace(/^\//, '').split('/').slice(h.length).join('/');
  }
  let y = Jp(e, { pathname: v });
  (Ke(
    c || y != null,
    `No routes matched location "${f.pathname}${f.search}${f.hash}" `
  ),
    Ke(
      y == null ||
        y[y.length - 1].route.element !== void 0 ||
        y[y.length - 1].route.Component !== void 0 ||
        y[y.length - 1].route.lazy !== void 0,
      `Matched leaf route at location "${f.pathname}${f.search}${f.hash}" does not have an element or Component. This means it will render an <Outlet /> with a null value by default resulting in an "empty" page.`
    ));
  let S = tw(
    y &&
      y.map((h) =>
        Object.assign({}, h, {
          params: Object.assign({}, a, h.params),
          pathname: vt([
            u,
            i.encodeLocation
              ? i.encodeLocation(h.pathname).pathname
              : h.pathname,
          ]),
          pathnameBase:
            h.pathnameBase === '/'
              ? u
              : vt([
                  u,
                  i.encodeLocation
                    ? i.encodeLocation(h.pathnameBase).pathname
                    : h.pathnameBase,
                ]),
        })
      ),
    o,
    n,
    r
  );
  return t && S
    ? x.createElement(
        ki.Provider,
        {
          value: {
            location: {
              pathname: '/',
              search: '',
              hash: '',
              state: null,
              key: 'default',
              ...f,
            },
            navigationType: 'POP',
          },
        },
        S
      )
    : S;
}
function Z0() {
  let e = sw(),
    t = b0(e)
      ? `${e.status} ${e.statusText}`
      : e instanceof Error
        ? e.message
        : JSON.stringify(e),
    n = e instanceof Error ? e.stack : null,
    r = 'rgba(200,200,200, 0.5)',
    i = { padding: '0.5rem', backgroundColor: r },
    o = { padding: '2px 4px', backgroundColor: r },
    s = null;
  return (
    console.error('Error handled by React Router default ErrorBoundary:', e),
    (s = x.createElement(
      x.Fragment,
      null,
      x.createElement('p', null, '💿 Hey developer 👋'),
      x.createElement(
        'p',
        null,
        'You can provide a way better UX than this when your app throws errors by providing your own ',
        x.createElement('code', { style: o }, 'ErrorBoundary'),
        ' or',
        ' ',
        x.createElement('code', { style: o }, 'errorElement'),
        ' prop on your route.'
      )
    )),
    x.createElement(
      x.Fragment,
      null,
      x.createElement('h2', null, 'Unexpected Application Error!'),
      x.createElement('h3', { style: { fontStyle: 'italic' } }, t),
      n ? x.createElement('pre', { style: i }, n) : null,
      s
    )
  );
}
var J0 = x.createElement(Z0, null),
  q0 = class extends x.Component {
    constructor(e) {
      (super(e),
        (this.state = {
          location: e.location,
          revalidation: e.revalidation,
          error: e.error,
        }));
    }
    static getDerivedStateFromError(e) {
      return { error: e };
    }
    static getDerivedStateFromProps(e, t) {
      return t.location !== e.location ||
        (t.revalidation !== 'idle' && e.revalidation === 'idle')
        ? { error: e.error, location: e.location, revalidation: e.revalidation }
        : {
            error: e.error !== void 0 ? e.error : t.error,
            location: t.location,
            revalidation: e.revalidation || t.revalidation,
          };
    }
    componentDidCatch(e, t) {
      console.error(
        'React Router caught the following error during render',
        e,
        t
      );
    }
    render() {
      return this.state.error !== void 0
        ? x.createElement(
            ct.Provider,
            { value: this.props.routeContext },
            x.createElement(xu.Provider, {
              value: this.state.error,
              children: this.props.component,
            })
          )
        : this.props.children;
    }
  };
function ew({ routeContext: e, match: t, children: n }) {
  let r = x.useContext(ur);
  return (
    r &&
      r.static &&
      r.staticContext &&
      (t.route.errorElement || t.route.ErrorBoundary) &&
      (r.staticContext._deepestRenderedBoundaryId = t.route.id),
    x.createElement(ct.Provider, { value: e }, n)
  );
}
function tw(e, t = [], n = null, r = null) {
  if (e == null) {
    if (!n) return null;
    if (n.errors) e = n.matches;
    else if (t.length === 0 && !n.initialized && n.matches.length > 0)
      e = n.matches;
    else return null;
  }
  let i = e,
    o = n == null ? void 0 : n.errors;
  if (o != null) {
    let l = i.findIndex(
      (u) => u.route.id && (o == null ? void 0 : o[u.route.id]) !== void 0
    );
    (K(
      l >= 0,
      `Could not find a matching route for errors on route IDs: ${Object.keys(o).join(',')}`
    ),
      (i = i.slice(0, Math.min(i.length, l + 1))));
  }
  let s = !1,
    a = -1;
  if (n)
    for (let l = 0; l < i.length; l++) {
      let u = i[l];
      if (
        ((u.route.HydrateFallback || u.route.hydrateFallbackElement) && (a = l),
        u.route.id)
      ) {
        let { loaderData: c, errors: d } = n,
          f =
            u.route.loader &&
            !c.hasOwnProperty(u.route.id) &&
            (!d || d[u.route.id] === void 0);
        if (u.route.lazy || f) {
          ((s = !0), a >= 0 ? (i = i.slice(0, a + 1)) : (i = [i[0]]));
          break;
        }
      }
    }
  return i.reduceRight((l, u, c) => {
    let d,
      f = !1,
      g = null,
      v = null;
    n &&
      ((d = o && u.route.id ? o[u.route.id] : void 0),
      (g = u.route.errorElement || J0),
      s &&
        (a < 0 && c === 0
          ? (sm(
              'route-fallback',
              !1,
              'No `HydrateFallback` element provided to render during initial hydration'
            ),
            (f = !0),
            (v = null))
          : a === c &&
            ((f = !0), (v = u.route.hydrateFallbackElement || null))));
    let y = t.concat(i.slice(0, c + 1)),
      S = () => {
        let p;
        return (
          d
            ? (p = g)
            : f
              ? (p = v)
              : u.route.Component
                ? (p = x.createElement(u.route.Component, null))
                : u.route.element
                  ? (p = u.route.element)
                  : (p = l),
          x.createElement(ew, {
            match: u,
            routeContext: { outlet: l, matches: y, isDataRoute: n != null },
            children: p,
          })
        );
      };
    return n && (u.route.ErrorBoundary || u.route.errorElement || c === 0)
      ? x.createElement(q0, {
          location: n.location,
          revalidation: n.revalidation,
          component: g,
          error: d,
          children: S(),
          routeContext: { outlet: null, matches: y, isDataRoute: !0 },
        })
      : S();
  }, null);
}
function Su(e) {
  return `${e} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`;
}
function nw(e) {
  let t = x.useContext(ur);
  return (K(t, Su(e)), t);
}
function rw(e) {
  let t = x.useContext(cs);
  return (K(t, Su(e)), t);
}
function iw(e) {
  let t = x.useContext(ct);
  return (K(t, Su(e)), t);
}
function ku(e) {
  let t = iw(e),
    n = t.matches[t.matches.length - 1];
  return (
    K(n.route.id, `${e} can only be used on routes that contain a unique "id"`),
    n.route.id
  );
}
function ow() {
  return ku('useRouteId');
}
function sw() {
  var r;
  let e = x.useContext(xu),
    t = rw('useRouteError'),
    n = ku('useRouteError');
  return e !== void 0 ? e : (r = t.errors) == null ? void 0 : r[n];
}
function aw() {
  let { router: e } = nw('useNavigate'),
    t = ku('useNavigate'),
    n = x.useRef(!1);
  return (
    im(() => {
      n.current = !0;
    }),
    x.useCallback(
      async (i, o = {}) => {
        (Ke(n.current, rm),
          n.current &&
            (typeof i == 'number'
              ? e.navigate(i)
              : await e.navigate(i, { fromRouteId: t, ...o })));
      },
      [e, t]
    )
  );
}
var vd = {};
function sm(e, t, n) {
  !t && !vd[e] && ((vd[e] = !0), Ke(!1, n));
}
x.memo(lw);
function lw({ routes: e, future: t, state: n }) {
  return om(e, void 0, n, t);
}
function uw({ to: e, replace: t, state: n, relative: r }) {
  K(
    cr(),
    '<Navigate> may be used only in the context of a <Router> component.'
  );
  let { static: i } = x.useContext(tt);
  Ke(
    !i,
    '<Navigate> must not be used on the initial render in a <StaticRouter>. This is a no-op, but you should modify your code so the <Navigate> is only ever rendered in response to some user interaction or state change.'
  );
  let { matches: o } = x.useContext(ct),
    { pathname: s } = qt(),
    a = en(),
    l = wu(e, vu(o), s, r === 'path'),
    u = JSON.stringify(l);
  return (
    x.useEffect(() => {
      a(JSON.parse(u), { replace: t, state: n, relative: r });
    }, [a, u, r, t, n]),
    null
  );
}
function Lt(e) {
  K(
    !1,
    'A <Route> is only ever to be used as the child of <Routes> element, never rendered directly. Please wrap your <Route> in a <Routes>.'
  );
}
function cw({
  basename: e = '/',
  children: t = null,
  location: n,
  navigationType: r = 'POP',
  navigator: i,
  static: o = !1,
}) {
  K(
    !cr(),
    'You cannot render a <Router> inside another <Router>. You should never have more than one in your app.'
  );
  let s = e.replace(/^\/*/, '/'),
    a = x.useMemo(
      () => ({ basename: s, navigator: i, static: o, future: {} }),
      [s, i, o]
    );
  typeof n == 'string' && (n = Tn(n));
  let {
      pathname: l = '/',
      search: u = '',
      hash: c = '',
      state: d = null,
      key: f = 'default',
    } = n,
    g = x.useMemo(() => {
      let v = Ct(l, s);
      return v == null
        ? null
        : {
            location: { pathname: v, search: u, hash: c, state: d, key: f },
            navigationType: r,
          };
    }, [s, l, u, c, d, f, r]);
  return (
    Ke(
      g != null,
      `<Router basename="${s}"> is not able to match the URL "${l}${u}${c}" because it does not start with the basename, so the <Router> won't render anything.`
    ),
    g == null
      ? null
      : x.createElement(
          tt.Provider,
          { value: a },
          x.createElement(ki.Provider, { children: t, value: g })
        )
  );
}
function dw({ children: e, location: t }) {
  return X0(tl(e), t);
}
function tl(e, t = []) {
  let n = [];
  return (
    x.Children.forEach(e, (r, i) => {
      if (!x.isValidElement(r)) return;
      let o = [...t, i];
      if (r.type === x.Fragment) {
        n.push.apply(n, tl(r.props.children, o));
        return;
      }
      (K(
        r.type === Lt,
        `[${typeof r.type == 'string' ? r.type : r.type.name}] is not a <Route> component. All component children of <Routes> must be a <Route> or <React.Fragment>`
      ),
        K(
          !r.props.index || !r.props.children,
          'An index route cannot have child routes.'
        ));
      let s = {
        id: r.props.id || o.join('-'),
        caseSensitive: r.props.caseSensitive,
        element: r.props.element,
        Component: r.props.Component,
        index: r.props.index,
        path: r.props.path,
        loader: r.props.loader,
        action: r.props.action,
        hydrateFallbackElement: r.props.hydrateFallbackElement,
        HydrateFallback: r.props.HydrateFallback,
        errorElement: r.props.errorElement,
        ErrorBoundary: r.props.ErrorBoundary,
        hasErrorBoundary:
          r.props.hasErrorBoundary === !0 ||
          r.props.ErrorBoundary != null ||
          r.props.errorElement != null,
        shouldRevalidate: r.props.shouldRevalidate,
        handle: r.props.handle,
        lazy: r.props.lazy,
      };
      (r.props.children && (s.children = tl(r.props.children, o)), n.push(s));
    }),
    n
  );
}
var fo = 'get',
  ho = 'application/x-www-form-urlencoded';
function ds(e) {
  return e != null && typeof e.tagName == 'string';
}
function fw(e) {
  return ds(e) && e.tagName.toLowerCase() === 'button';
}
function hw(e) {
  return ds(e) && e.tagName.toLowerCase() === 'form';
}
function pw(e) {
  return ds(e) && e.tagName.toLowerCase() === 'input';
}
function mw(e) {
  return !!(e.metaKey || e.altKey || e.ctrlKey || e.shiftKey);
}
function gw(e, t) {
  return e.button === 0 && (!t || t === '_self') && !mw(e);
}
var Yi = null;
function yw() {
  if (Yi === null)
    try {
      (new FormData(document.createElement('form'), 0), (Yi = !1));
    } catch {
      Yi = !0;
    }
  return Yi;
}
var vw = new Set([
  'application/x-www-form-urlencoded',
  'multipart/form-data',
  'text/plain',
]);
function Hs(e) {
  return e != null && !vw.has(e)
    ? (Ke(
        !1,
        `"${e}" is not a valid \`encType\` for \`<Form>\`/\`<fetcher.Form>\` and will default to "${ho}"`
      ),
      null)
    : e;
}
function ww(e, t) {
  let n, r, i, o, s;
  if (hw(e)) {
    let a = e.getAttribute('action');
    ((r = a ? Ct(a, t) : null),
      (n = e.getAttribute('method') || fo),
      (i = Hs(e.getAttribute('enctype')) || ho),
      (o = new FormData(e)));
  } else if (fw(e) || (pw(e) && (e.type === 'submit' || e.type === 'image'))) {
    let a = e.form;
    if (a == null)
      throw new Error(
        'Cannot submit a <button> or <input type="submit"> without a <form>'
      );
    let l = e.getAttribute('formaction') || a.getAttribute('action');
    if (
      ((r = l ? Ct(l, t) : null),
      (n = e.getAttribute('formmethod') || a.getAttribute('method') || fo),
      (i =
        Hs(e.getAttribute('formenctype')) ||
        Hs(a.getAttribute('enctype')) ||
        ho),
      (o = new FormData(a, e)),
      !yw())
    ) {
      let { name: u, type: c, value: d } = e;
      if (c === 'image') {
        let f = u ? `${u}.` : '';
        (o.append(`${f}x`, '0'), o.append(`${f}y`, '0'));
      } else u && o.append(u, d);
    }
  } else {
    if (ds(e))
      throw new Error(
        'Cannot submit element that is not <form>, <button>, or <input type="submit|image">'
      );
    ((n = fo), (r = null), (i = ho), (s = e));
  }
  return (
    o && i === 'text/plain' && ((s = o), (o = void 0)),
    { action: r, method: n.toLowerCase(), encType: i, formData: o, body: s }
  );
}
Object.getOwnPropertyNames(Object.prototype).sort().join('\0');
function Cu(e, t) {
  if (e === !1 || e === null || typeof e > 'u') throw new Error(t);
}
function xw(e, t, n) {
  let r =
    typeof e == 'string'
      ? new URL(
          e,
          typeof window > 'u' ? 'server://singlefetch/' : window.location.origin
        )
      : e;
  return (
    r.pathname === '/'
      ? (r.pathname = `_root.${n}`)
      : t && Ct(r.pathname, t) === '/'
        ? (r.pathname = `${t.replace(/\/$/, '')}/_root.${n}`)
        : (r.pathname = `${r.pathname.replace(/\/$/, '')}.${n}`),
    r
  );
}
async function Sw(e, t) {
  if (e.id in t) return t[e.id];
  try {
    let n = await yu(() => import(e.module), []);
    return ((t[e.id] = n), n);
  } catch (n) {
    return (
      console.error(
        `Error loading route module \`${e.module}\`, reloading page...`
      ),
      console.error(n),
      window.__reactRouterContext && window.__reactRouterContext.isSpaMode,
      window.location.reload(),
      new Promise(() => {})
    );
  }
}
function kw(e) {
  return e != null && typeof e.page == 'string';
}
function Cw(e) {
  return e == null
    ? !1
    : e.href == null
      ? e.rel === 'preload' &&
        typeof e.imageSrcSet == 'string' &&
        typeof e.imageSizes == 'string'
      : typeof e.rel == 'string' && typeof e.href == 'string';
}
async function Pw(e, t, n) {
  let r = await Promise.all(
    e.map(async (i) => {
      let o = t.routes[i.route.id];
      if (o) {
        let s = await Sw(o, n);
        return s.links ? s.links() : [];
      }
      return [];
    })
  );
  return Mw(
    r
      .flat(1)
      .filter(Cw)
      .filter((i) => i.rel === 'stylesheet' || i.rel === 'preload')
      .map((i) =>
        i.rel === 'stylesheet'
          ? { ...i, rel: 'prefetch', as: 'style' }
          : { ...i, rel: 'prefetch' }
      )
  );
}
function wd(e, t, n, r, i, o) {
  let s = (l, u) => (n[u] ? l.route.id !== n[u].route.id : !0),
    a = (l, u) => {
      var c;
      return (
        n[u].pathname !== l.pathname ||
        (((c = n[u].route.path) == null ? void 0 : c.endsWith('*')) &&
          n[u].params['*'] !== l.params['*'])
      );
    };
  return o === 'assets'
    ? t.filter((l, u) => s(l, u) || a(l, u))
    : o === 'data'
      ? t.filter((l, u) => {
          var d;
          let c = r.routes[l.route.id];
          if (!c || !c.hasLoader) return !1;
          if (s(l, u) || a(l, u)) return !0;
          if (l.route.shouldRevalidate) {
            let f = l.route.shouldRevalidate({
              currentUrl: new URL(
                i.pathname + i.search + i.hash,
                window.origin
              ),
              currentParams: ((d = n[0]) == null ? void 0 : d.params) || {},
              nextUrl: new URL(e, window.origin),
              nextParams: l.params,
              defaultShouldRevalidate: !0,
            });
            if (typeof f == 'boolean') return f;
          }
          return !0;
        })
      : [];
}
function Tw(e, t, { includeHydrateFallback: n } = {}) {
  return Ew(
    e
      .map((r) => {
        let i = t.routes[r.route.id];
        if (!i) return [];
        let o = [i.module];
        return (
          i.clientActionModule && (o = o.concat(i.clientActionModule)),
          i.clientLoaderModule && (o = o.concat(i.clientLoaderModule)),
          n &&
            i.hydrateFallbackModule &&
            (o = o.concat(i.hydrateFallbackModule)),
          i.imports && (o = o.concat(i.imports)),
          o
        );
      })
      .flat(1)
  );
}
function Ew(e) {
  return [...new Set(e)];
}
function Rw(e) {
  let t = {},
    n = Object.keys(e).sort();
  for (let r of n) t[r] = e[r];
  return t;
}
function Mw(e, t) {
  let n = new Set(),
    r = new Set(t);
  return e.reduce((i, o) => {
    if (t && !kw(o) && o.as === 'script' && o.href && r.has(o.href)) return i;
    let a = JSON.stringify(Rw(o));
    return (n.has(a) || (n.add(a), i.push({ key: a, link: o })), i);
  }, []);
}
function am() {
  let e = x.useContext(ur);
  return (
    Cu(
      e,
      'You must render this element inside a <DataRouterContext.Provider> element'
    ),
    e
  );
}
function Lw() {
  let e = x.useContext(cs);
  return (
    Cu(
      e,
      'You must render this element inside a <DataRouterStateContext.Provider> element'
    ),
    e
  );
}
var Pu = x.createContext(void 0);
Pu.displayName = 'FrameworkContext';
function lm() {
  let e = x.useContext(Pu);
  return (
    Cu(e, 'You must render this element inside a <HydratedRouter> element'),
    e
  );
}
function Aw(e, t) {
  let n = x.useContext(Pu),
    [r, i] = x.useState(!1),
    [o, s] = x.useState(!1),
    {
      onFocus: a,
      onBlur: l,
      onMouseEnter: u,
      onMouseLeave: c,
      onTouchStart: d,
    } = t,
    f = x.useRef(null);
  (x.useEffect(() => {
    if ((e === 'render' && s(!0), e === 'viewport')) {
      let y = (p) => {
          p.forEach((h) => {
            s(h.isIntersecting);
          });
        },
        S = new IntersectionObserver(y, { threshold: 0.5 });
      return (
        f.current && S.observe(f.current),
        () => {
          S.disconnect();
        }
      );
    }
  }, [e]),
    x.useEffect(() => {
      if (r) {
        let y = setTimeout(() => {
          s(!0);
        }, 100);
        return () => {
          clearTimeout(y);
        };
      }
    }, [r]));
  let g = () => {
      i(!0);
    },
    v = () => {
      (i(!1), s(!1));
    };
  return n
    ? e !== 'intent'
      ? [o, f, {}]
      : [
          o,
          f,
          {
            onFocus: Cr(a, g),
            onBlur: Cr(l, v),
            onMouseEnter: Cr(u, g),
            onMouseLeave: Cr(c, v),
            onTouchStart: Cr(d, g),
          },
        ]
    : [!1, f, {}];
}
function Cr(e, t) {
  return (n) => {
    (e && e(n), n.defaultPrevented || t(n));
  };
}
function Nw({ page: e, ...t }) {
  let { router: n } = am(),
    r = x.useMemo(() => Jp(n.routes, e, n.basename), [n.routes, e, n.basename]);
  return r ? x.createElement(Dw, { page: e, matches: r, ...t }) : null;
}
function jw(e) {
  let { manifest: t, routeModules: n } = lm(),
    [r, i] = x.useState([]);
  return (
    x.useEffect(() => {
      let o = !1;
      return (
        Pw(e, t, n).then((s) => {
          o || i(s);
        }),
        () => {
          o = !0;
        }
      );
    }, [e, t, n]),
    r
  );
}
function Dw({ page: e, matches: t, ...n }) {
  let r = qt(),
    { manifest: i, routeModules: o } = lm(),
    { basename: s } = am(),
    { loaderData: a, matches: l } = Lw(),
    u = x.useMemo(() => wd(e, t, l, i, r, 'data'), [e, t, l, i, r]),
    c = x.useMemo(() => wd(e, t, l, i, r, 'assets'), [e, t, l, i, r]),
    d = x.useMemo(() => {
      if (e === r.pathname + r.search + r.hash) return [];
      let v = new Set(),
        y = !1;
      if (
        (t.forEach((p) => {
          var m;
          let h = i.routes[p.route.id];
          !h ||
            !h.hasLoader ||
            ((!u.some((k) => k.route.id === p.route.id) &&
              p.route.id in a &&
              (m = o[p.route.id]) != null &&
              m.shouldRevalidate) ||
            h.hasClientLoader
              ? (y = !0)
              : v.add(p.route.id));
        }),
        v.size === 0)
      )
        return [];
      let S = xw(e, s, 'data');
      return (
        y &&
          v.size > 0 &&
          S.searchParams.set(
            '_routes',
            t
              .filter((p) => v.has(p.route.id))
              .map((p) => p.route.id)
              .join(',')
          ),
        [S.pathname + S.search]
      );
    }, [s, a, r, i, u, t, e, o]),
    f = x.useMemo(() => Tw(c, i), [c, i]),
    g = jw(c);
  return x.createElement(
    x.Fragment,
    null,
    d.map((v) =>
      x.createElement('link', {
        key: v,
        rel: 'prefetch',
        as: 'fetch',
        href: v,
        ...n,
      })
    ),
    f.map((v) =>
      x.createElement('link', { key: v, rel: 'modulepreload', href: v, ...n })
    ),
    g.map(({ key: v, link: y }) => x.createElement('link', { key: v, ...y }))
  );
}
function Vw(...e) {
  return (t) => {
    e.forEach((n) => {
      typeof n == 'function' ? n(t) : n != null && (n.current = t);
    });
  };
}
var um =
  typeof window < 'u' &&
  typeof window.document < 'u' &&
  typeof window.document.createElement < 'u';
try {
  um && (window.__reactRouterVersion = '7.7.1');
} catch {}
function Iw({ basename: e, children: t, window: n }) {
  let r = x.useRef();
  r.current == null && (r.current = S0({ window: n, v5Compat: !0 }));
  let i = r.current,
    [o, s] = x.useState({ action: i.action, location: i.location }),
    a = x.useCallback(
      (l) => {
        x.startTransition(() => s(l));
      },
      [s]
    );
  return (
    x.useLayoutEffect(() => i.listen(a), [i, a]),
    x.createElement(cw, {
      basename: e,
      children: t,
      location: o.location,
      navigationType: o.action,
      navigator: i,
    })
  );
}
var cm = /^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,
  dm = x.forwardRef(function (
    {
      onClick: t,
      discover: n = 'render',
      prefetch: r = 'none',
      relative: i,
      reloadDocument: o,
      replace: s,
      state: a,
      target: l,
      to: u,
      preventScrollReset: c,
      viewTransition: d,
      ...f
    },
    g
  ) {
    let { basename: v } = x.useContext(tt),
      y = typeof u == 'string' && cm.test(u),
      S,
      p = !1;
    if (typeof u == 'string' && y && ((S = u), um))
      try {
        let N = new URL(window.location.href),
          P = u.startsWith('//') ? new URL(N.protocol + u) : new URL(u),
          D = Ct(P.pathname, v);
        P.origin === N.origin && D != null
          ? (u = D + P.search + P.hash)
          : (p = !0);
      } catch {
        Ke(
          !1,
          `<Link to="${u}"> contains an invalid URL which will probably break when clicked - please update to a valid URL path.`
        );
      }
    let h = Y0(u, { relative: i }),
      [m, k, C] = Aw(r, f),
      T = Bw(u, {
        replace: s,
        state: a,
        target: l,
        preventScrollReset: c,
        relative: i,
        viewTransition: d,
      });
    function R(N) {
      (t && t(N), N.defaultPrevented || T(N));
    }
    let E = x.createElement('a', {
      ...f,
      ...C,
      href: S || h,
      onClick: p || o ? t : R,
      ref: Vw(g, k),
      target: l,
      'data-discover': !y && n === 'render' ? 'true' : void 0,
    });
    return m && !y
      ? x.createElement(x.Fragment, null, E, x.createElement(Nw, { page: h }))
      : E;
  });
dm.displayName = 'Link';
var Fw = x.forwardRef(function (
  {
    'aria-current': t = 'page',
    caseSensitive: n = !1,
    className: r = '',
    end: i = !1,
    style: o,
    to: s,
    viewTransition: a,
    children: l,
    ...u
  },
  c
) {
  let d = Ci(s, { relative: u.relative }),
    f = qt(),
    g = x.useContext(cs),
    { navigator: v, basename: y } = x.useContext(tt),
    S = g != null && bw(d) && a === !0,
    p = v.encodeLocation ? v.encodeLocation(d).pathname : d.pathname,
    h = f.pathname,
    m =
      g && g.navigation && g.navigation.location
        ? g.navigation.location.pathname
        : null;
  (n ||
    ((h = h.toLowerCase()),
    (m = m ? m.toLowerCase() : null),
    (p = p.toLowerCase())),
    m && y && (m = Ct(m, y) || m));
  const k = p !== '/' && p.endsWith('/') ? p.length - 1 : p.length;
  let C = h === p || (!i && h.startsWith(p) && h.charAt(k) === '/'),
    T =
      m != null &&
      (m === p || (!i && m.startsWith(p) && m.charAt(p.length) === '/')),
    R = { isActive: C, isPending: T, isTransitioning: S },
    E = C ? t : void 0,
    N;
  typeof r == 'function'
    ? (N = r(R))
    : (N = [
        r,
        C ? 'active' : null,
        T ? 'pending' : null,
        S ? 'transitioning' : null,
      ]
        .filter(Boolean)
        .join(' '));
  let P = typeof o == 'function' ? o(R) : o;
  return x.createElement(
    dm,
    {
      ...u,
      'aria-current': E,
      className: N,
      ref: c,
      style: P,
      to: s,
      viewTransition: a,
    },
    typeof l == 'function' ? l(R) : l
  );
});
Fw.displayName = 'NavLink';
var _w = x.forwardRef(
  (
    {
      discover: e = 'render',
      fetcherKey: t,
      navigate: n,
      reloadDocument: r,
      replace: i,
      state: o,
      method: s = fo,
      action: a,
      onSubmit: l,
      relative: u,
      preventScrollReset: c,
      viewTransition: d,
      ...f
    },
    g
  ) => {
    let v = Uw(),
      y = Ww(a, { relative: u }),
      S = s.toLowerCase() === 'get' ? 'get' : 'post',
      p = typeof a == 'string' && cm.test(a),
      h = (m) => {
        if ((l && l(m), m.defaultPrevented)) return;
        m.preventDefault();
        let k = m.nativeEvent.submitter,
          C = (k == null ? void 0 : k.getAttribute('formmethod')) || s;
        v(k || m.currentTarget, {
          fetcherKey: t,
          method: C,
          navigate: n,
          replace: i,
          state: o,
          relative: u,
          preventScrollReset: c,
          viewTransition: d,
        });
      };
    return x.createElement('form', {
      ref: g,
      method: S,
      action: y,
      onSubmit: r ? l : h,
      ...f,
      'data-discover': !p && e === 'render' ? 'true' : void 0,
    });
  }
);
_w.displayName = 'Form';
function Ow(e) {
  return `${e} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`;
}
function fm(e) {
  let t = x.useContext(ur);
  return (K(t, Ow(e)), t);
}
function Bw(
  e,
  {
    target: t,
    replace: n,
    state: r,
    preventScrollReset: i,
    relative: o,
    viewTransition: s,
  } = {}
) {
  let a = en(),
    l = qt(),
    u = Ci(e, { relative: o });
  return x.useCallback(
    (c) => {
      if (gw(c, t)) {
        c.preventDefault();
        let d = n !== void 0 ? n : ui(l) === ui(u);
        a(e, {
          replace: d,
          state: r,
          preventScrollReset: i,
          relative: o,
          viewTransition: s,
        });
      }
    },
    [l, a, u, n, r, t, e, i, o, s]
  );
}
var zw = 0,
  $w = () => `__${String(++zw)}__`;
function Uw() {
  let { router: e } = fm('useSubmit'),
    { basename: t } = x.useContext(tt),
    n = ow();
  return x.useCallback(
    async (r, i = {}) => {
      let { action: o, method: s, encType: a, formData: l, body: u } = ww(r, t);
      if (i.navigate === !1) {
        let c = i.fetcherKey || $w();
        await e.fetch(c, n, i.action || o, {
          preventScrollReset: i.preventScrollReset,
          formData: l,
          body: u,
          formMethod: i.method || s,
          formEncType: i.encType || a,
          flushSync: i.flushSync,
        });
      } else
        await e.navigate(i.action || o, {
          preventScrollReset: i.preventScrollReset,
          formData: l,
          body: u,
          formMethod: i.method || s,
          formEncType: i.encType || a,
          replace: i.replace,
          state: i.state,
          fromRouteId: n,
          flushSync: i.flushSync,
          viewTransition: i.viewTransition,
        });
    },
    [e, t, n]
  );
}
function Ww(e, { relative: t } = {}) {
  let { basename: n } = x.useContext(tt),
    r = x.useContext(ct);
  K(r, 'useFormAction must be used inside a RouteContext');
  let [i] = r.matches.slice(-1),
    o = { ...Ci(e || '.', { relative: t }) },
    s = qt();
  if (e == null) {
    o.search = s.search;
    let a = new URLSearchParams(o.search),
      l = a.getAll('index');
    if (l.some((c) => c === '')) {
      (a.delete('index'),
        l.filter((d) => d).forEach((d) => a.append('index', d)));
      let c = a.toString();
      o.search = c ? `?${c}` : '';
    }
  }
  return (
    (!e || e === '.') &&
      i.route.index &&
      (o.search = o.search ? o.search.replace(/^\?/, '?index&') : '?index'),
    n !== '/' && (o.pathname = o.pathname === '/' ? n : vt([n, o.pathname])),
    ui(o)
  );
}
function bw(e, { relative: t } = {}) {
  let n = x.useContext(nm);
  K(
    n != null,
    "`useViewTransitionState` must be used within `react-router-dom`'s `RouterProvider`.  Did you accidentally import `RouterProvider` from `react-router`?"
  );
  let { basename: r } = fm('useViewTransitionState'),
    i = Ci(e, { relative: t });
  if (!n.isTransitioning) return !1;
  let o = Ct(n.currentLocation.pathname, r) || n.currentLocation.pathname,
    s = Ct(n.nextLocation.pathname, r) || n.nextLocation.pathname;
  return Uo(i.pathname, s) != null || Uo(i.pathname, o) != null;
}
const Tu = x.createContext({});
function Eu(e) {
  const t = x.useRef(null);
  return (t.current === null && (t.current = e()), t.current);
}
const Ru = typeof window < 'u',
  hm = Ru ? x.useLayoutEffect : x.useEffect,
  fs = x.createContext(null);
function Mu(e, t) {
  e.indexOf(t) === -1 && e.push(t);
}
function Lu(e, t) {
  const n = e.indexOf(t);
  n > -1 && e.splice(n, 1);
}
const Pt = (e, t, n) => (n > t ? t : n < e ? e : n);
let Au = () => {};
const Tt = {},
  pm = (e) => /^-?(?:\d+(?:\.\d+)?|\.\d+)$/u.test(e);
function mm(e) {
  return typeof e == 'object' && e !== null;
}
const gm = (e) => /^0[^.\s]+$/u.test(e);
function Nu(e) {
  let t;
  return () => (t === void 0 && (t = e()), t);
}
const We = (e) => e,
  Hw = (e, t) => (n) => t(e(n)),
  Pi = (...e) => e.reduce(Hw),
  ci = (e, t, n) => {
    const r = t - e;
    return r === 0 ? 1 : (n - e) / r;
  };
class ju {
  constructor() {
    this.subscriptions = [];
  }
  add(t) {
    return (Mu(this.subscriptions, t), () => Lu(this.subscriptions, t));
  }
  notify(t, n, r) {
    const i = this.subscriptions.length;
    if (i)
      if (i === 1) this.subscriptions[0](t, n, r);
      else
        for (let o = 0; o < i; o++) {
          const s = this.subscriptions[o];
          s && s(t, n, r);
        }
  }
  getSize() {
    return this.subscriptions.length;
  }
  clear() {
    this.subscriptions.length = 0;
  }
}
const at = (e) => e * 1e3,
  lt = (e) => e / 1e3;
function ym(e, t) {
  return t ? e * (1e3 / t) : 0;
}
const vm = (e, t, n) =>
    (((1 - 3 * n + 3 * t) * e + (3 * n - 6 * t)) * e + 3 * t) * e,
  Kw = 1e-7,
  Gw = 12;
function Yw(e, t, n, r, i) {
  let o,
    s,
    a = 0;
  do ((s = t + (n - t) / 2), (o = vm(s, r, i) - e), o > 0 ? (n = s) : (t = s));
  while (Math.abs(o) > Kw && ++a < Gw);
  return s;
}
function Ti(e, t, n, r) {
  if (e === t && n === r) return We;
  const i = (o) => Yw(o, 0, 1, e, n);
  return (o) => (o === 0 || o === 1 ? o : vm(i(o), t, r));
}
const wm = (e) => (t) => (t <= 0.5 ? e(2 * t) / 2 : (2 - e(2 * (1 - t))) / 2),
  xm = (e) => (t) => 1 - e(1 - t),
  Sm = Ti(0.33, 1.53, 0.69, 0.99),
  Du = xm(Sm),
  km = wm(Du),
  Cm = (e) =>
    (e *= 2) < 1 ? 0.5 * Du(e) : 0.5 * (2 - Math.pow(2, -10 * (e - 1))),
  Vu = (e) => 1 - Math.sin(Math.acos(e)),
  Pm = xm(Vu),
  Tm = wm(Vu),
  Qw = Ti(0.42, 0, 1, 1),
  Xw = Ti(0, 0, 0.58, 1),
  Em = Ti(0.42, 0, 0.58, 1),
  Zw = (e) => Array.isArray(e) && typeof e[0] != 'number',
  Rm = (e) => Array.isArray(e) && typeof e[0] == 'number',
  Jw = {
    linear: We,
    easeIn: Qw,
    easeInOut: Em,
    easeOut: Xw,
    circIn: Vu,
    circInOut: Tm,
    circOut: Pm,
    backIn: Du,
    backInOut: km,
    backOut: Sm,
    anticipate: Cm,
  },
  qw = (e) => typeof e == 'string',
  xd = (e) => {
    if (Rm(e)) {
      Au(e.length === 4);
      const [t, n, r, i] = e;
      return Ti(t, n, r, i);
    } else if (qw(e)) return Jw[e];
    return e;
  },
  Qi = [
    'setup',
    'read',
    'resolveKeyframes',
    'preUpdate',
    'update',
    'preRender',
    'render',
    'postRender',
  ],
  Sd = { value: null, addProjectionMetrics: null };
function e1(e, t) {
  let n = new Set(),
    r = new Set(),
    i = !1,
    o = !1;
  const s = new WeakSet();
  let a = { delta: 0, timestamp: 0, isProcessing: !1 },
    l = 0;
  function u(d) {
    (s.has(d) && (c.schedule(d), e()), l++, d(a));
  }
  const c = {
    schedule: (d, f = !1, g = !1) => {
      const y = g && i ? n : r;
      return (f && s.add(d), y.has(d) || y.add(d), d);
    },
    cancel: (d) => {
      (r.delete(d), s.delete(d));
    },
    process: (d) => {
      if (((a = d), i)) {
        o = !0;
        return;
      }
      ((i = !0),
        ([n, r] = [r, n]),
        n.forEach(u),
        t && Sd.value && Sd.value.frameloop[t].push(l),
        (l = 0),
        n.clear(),
        (i = !1),
        o && ((o = !1), c.process(d)));
    },
  };
  return c;
}
const t1 = 40;
function Mm(e, t) {
  let n = !1,
    r = !0;
  const i = { delta: 0, timestamp: 0, isProcessing: !1 },
    o = () => (n = !0),
    s = Qi.reduce((m, k) => ((m[k] = e1(o, t ? k : void 0)), m), {}),
    {
      setup: a,
      read: l,
      resolveKeyframes: u,
      preUpdate: c,
      update: d,
      preRender: f,
      render: g,
      postRender: v,
    } = s,
    y = () => {
      const m = Tt.useManualTiming ? i.timestamp : performance.now();
      ((n = !1),
        Tt.useManualTiming ||
          (i.delta = r ? 1e3 / 60 : Math.max(Math.min(m - i.timestamp, t1), 1)),
        (i.timestamp = m),
        (i.isProcessing = !0),
        a.process(i),
        l.process(i),
        u.process(i),
        c.process(i),
        d.process(i),
        f.process(i),
        g.process(i),
        v.process(i),
        (i.isProcessing = !1),
        n && t && ((r = !1), e(y)));
    },
    S = () => {
      ((n = !0), (r = !0), i.isProcessing || e(y));
    };
  return {
    schedule: Qi.reduce((m, k) => {
      const C = s[k];
      return (
        (m[k] = (T, R = !1, E = !1) => (n || S(), C.schedule(T, R, E))),
        m
      );
    }, {}),
    cancel: (m) => {
      for (let k = 0; k < Qi.length; k++) s[Qi[k]].cancel(m);
    },
    state: i,
    steps: s,
  };
}
const {
  schedule: H,
  cancel: Yt,
  state: fe,
  steps: Ks,
} = Mm(typeof requestAnimationFrame < 'u' ? requestAnimationFrame : We, !0);
let po;
function n1() {
  po = void 0;
}
const Re = {
    now: () => (
      po === void 0 &&
        Re.set(
          fe.isProcessing || Tt.useManualTiming
            ? fe.timestamp
            : performance.now()
        ),
      po
    ),
    set: (e) => {
      ((po = e), queueMicrotask(n1));
    },
  },
  Lm = (e) => (t) => typeof t == 'string' && t.startsWith(e),
  Iu = Lm('--'),
  r1 = Lm('var(--'),
  Fu = (e) => (r1(e) ? i1.test(e.split('/*')[0].trim()) : !1),
  i1 =
    /var\(--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)$/iu,
  dr = {
    test: (e) => typeof e == 'number',
    parse: parseFloat,
    transform: (e) => e,
  },
  di = { ...dr, transform: (e) => Pt(0, 1, e) },
  Xi = { ...dr, default: 1 },
  $r = (e) => Math.round(e * 1e5) / 1e5,
  _u = /-?(?:\d+(?:\.\d+)?|\.\d+)/gu;
function o1(e) {
  return e == null;
}
const s1 =
    /^(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))$/iu,
  Ou = (e, t) => (n) =>
    !!(
      (typeof n == 'string' && s1.test(n) && n.startsWith(e)) ||
      (t && !o1(n) && Object.prototype.hasOwnProperty.call(n, t))
    ),
  Am = (e, t, n) => (r) => {
    if (typeof r != 'string') return r;
    const [i, o, s, a] = r.match(_u);
    return {
      [e]: parseFloat(i),
      [t]: parseFloat(o),
      [n]: parseFloat(s),
      alpha: a !== void 0 ? parseFloat(a) : 1,
    };
  },
  a1 = (e) => Pt(0, 255, e),
  Gs = { ...dr, transform: (e) => Math.round(a1(e)) },
  fn = {
    test: Ou('rgb', 'red'),
    parse: Am('red', 'green', 'blue'),
    transform: ({ red: e, green: t, blue: n, alpha: r = 1 }) =>
      'rgba(' +
      Gs.transform(e) +
      ', ' +
      Gs.transform(t) +
      ', ' +
      Gs.transform(n) +
      ', ' +
      $r(di.transform(r)) +
      ')',
  };
function l1(e) {
  let t = '',
    n = '',
    r = '',
    i = '';
  return (
    e.length > 5
      ? ((t = e.substring(1, 3)),
        (n = e.substring(3, 5)),
        (r = e.substring(5, 7)),
        (i = e.substring(7, 9)))
      : ((t = e.substring(1, 2)),
        (n = e.substring(2, 3)),
        (r = e.substring(3, 4)),
        (i = e.substring(4, 5)),
        (t += t),
        (n += n),
        (r += r),
        (i += i)),
    {
      red: parseInt(t, 16),
      green: parseInt(n, 16),
      blue: parseInt(r, 16),
      alpha: i ? parseInt(i, 16) / 255 : 1,
    }
  );
}
const nl = { test: Ou('#'), parse: l1, transform: fn.transform },
  Ei = (e) => ({
    test: (t) =>
      typeof t == 'string' && t.endsWith(e) && t.split(' ').length === 1,
    parse: parseFloat,
    transform: (t) => `${t}${e}`,
  }),
  At = Ei('deg'),
  ut = Ei('%'),
  j = Ei('px'),
  u1 = Ei('vh'),
  c1 = Ei('vw'),
  kd = (() => ({
    ...ut,
    parse: (e) => ut.parse(e) / 100,
    transform: (e) => ut.transform(e * 100),
  }))(),
  zn = {
    test: Ou('hsl', 'hue'),
    parse: Am('hue', 'saturation', 'lightness'),
    transform: ({ hue: e, saturation: t, lightness: n, alpha: r = 1 }) =>
      'hsla(' +
      Math.round(e) +
      ', ' +
      ut.transform($r(t)) +
      ', ' +
      ut.transform($r(n)) +
      ', ' +
      $r(di.transform(r)) +
      ')',
  },
  re = {
    test: (e) => fn.test(e) || nl.test(e) || zn.test(e),
    parse: (e) =>
      fn.test(e) ? fn.parse(e) : zn.test(e) ? zn.parse(e) : nl.parse(e),
    transform: (e) =>
      typeof e == 'string'
        ? e
        : e.hasOwnProperty('red')
          ? fn.transform(e)
          : zn.transform(e),
    getAnimatableNone: (e) => {
      const t = re.parse(e);
      return ((t.alpha = 0), re.transform(t));
    },
  },
  d1 =
    /(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))/giu;
function f1(e) {
  var t, n;
  return (
    isNaN(e) &&
    typeof e == 'string' &&
    (((t = e.match(_u)) == null ? void 0 : t.length) || 0) +
      (((n = e.match(d1)) == null ? void 0 : n.length) || 0) >
      0
  );
}
const Nm = 'number',
  jm = 'color',
  h1 = 'var',
  p1 = 'var(',
  Cd = '${}',
  m1 =
    /var\s*\(\s*--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)|#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\)|-?(?:\d+(?:\.\d+)?|\.\d+)/giu;
function fi(e) {
  const t = e.toString(),
    n = [],
    r = { color: [], number: [], var: [] },
    i = [];
  let o = 0;
  const a = t
    .replace(
      m1,
      (l) => (
        re.test(l)
          ? (r.color.push(o), i.push(jm), n.push(re.parse(l)))
          : l.startsWith(p1)
            ? (r.var.push(o), i.push(h1), n.push(l))
            : (r.number.push(o), i.push(Nm), n.push(parseFloat(l))),
        ++o,
        Cd
      )
    )
    .split(Cd);
  return { values: n, split: a, indexes: r, types: i };
}
function Dm(e) {
  return fi(e).values;
}
function Vm(e) {
  const { split: t, types: n } = fi(e),
    r = t.length;
  return (i) => {
    let o = '';
    for (let s = 0; s < r; s++)
      if (((o += t[s]), i[s] !== void 0)) {
        const a = n[s];
        a === Nm
          ? (o += $r(i[s]))
          : a === jm
            ? (o += re.transform(i[s]))
            : (o += i[s]);
      }
    return o;
  };
}
const g1 = (e) =>
  typeof e == 'number' ? 0 : re.test(e) ? re.getAnimatableNone(e) : e;
function y1(e) {
  const t = Dm(e);
  return Vm(e)(t.map(g1));
}
const Qt = {
  test: f1,
  parse: Dm,
  createTransformer: Vm,
  getAnimatableNone: y1,
};
function Ys(e, t, n) {
  return (
    n < 0 && (n += 1),
    n > 1 && (n -= 1),
    n < 1 / 6
      ? e + (t - e) * 6 * n
      : n < 1 / 2
        ? t
        : n < 2 / 3
          ? e + (t - e) * (2 / 3 - n) * 6
          : e
  );
}
function v1({ hue: e, saturation: t, lightness: n, alpha: r }) {
  ((e /= 360), (t /= 100), (n /= 100));
  let i = 0,
    o = 0,
    s = 0;
  if (!t) i = o = s = n;
  else {
    const a = n < 0.5 ? n * (1 + t) : n + t - n * t,
      l = 2 * n - a;
    ((i = Ys(l, a, e + 1 / 3)), (o = Ys(l, a, e)), (s = Ys(l, a, e - 1 / 3)));
  }
  return {
    red: Math.round(i * 255),
    green: Math.round(o * 255),
    blue: Math.round(s * 255),
    alpha: r,
  };
}
function Wo(e, t) {
  return (n) => (n > 0 ? t : e);
}
const Q = (e, t, n) => e + (t - e) * n,
  Qs = (e, t, n) => {
    const r = e * e,
      i = n * (t * t - r) + r;
    return i < 0 ? 0 : Math.sqrt(i);
  },
  w1 = [nl, fn, zn],
  x1 = (e) => w1.find((t) => t.test(e));
function Pd(e) {
  const t = x1(e);
  if (!t) return !1;
  let n = t.parse(e);
  return (t === zn && (n = v1(n)), n);
}
const Td = (e, t) => {
    const n = Pd(e),
      r = Pd(t);
    if (!n || !r) return Wo(e, t);
    const i = { ...n };
    return (o) => (
      (i.red = Qs(n.red, r.red, o)),
      (i.green = Qs(n.green, r.green, o)),
      (i.blue = Qs(n.blue, r.blue, o)),
      (i.alpha = Q(n.alpha, r.alpha, o)),
      fn.transform(i)
    );
  },
  rl = new Set(['none', 'hidden']);
function S1(e, t) {
  return rl.has(e) ? (n) => (n <= 0 ? e : t) : (n) => (n >= 1 ? t : e);
}
function k1(e, t) {
  return (n) => Q(e, t, n);
}
function Bu(e) {
  return typeof e == 'number'
    ? k1
    : typeof e == 'string'
      ? Fu(e)
        ? Wo
        : re.test(e)
          ? Td
          : T1
      : Array.isArray(e)
        ? Im
        : typeof e == 'object'
          ? re.test(e)
            ? Td
            : C1
          : Wo;
}
function Im(e, t) {
  const n = [...e],
    r = n.length,
    i = e.map((o, s) => Bu(o)(o, t[s]));
  return (o) => {
    for (let s = 0; s < r; s++) n[s] = i[s](o);
    return n;
  };
}
function C1(e, t) {
  const n = { ...e, ...t },
    r = {};
  for (const i in n)
    e[i] !== void 0 && t[i] !== void 0 && (r[i] = Bu(e[i])(e[i], t[i]));
  return (i) => {
    for (const o in r) n[o] = r[o](i);
    return n;
  };
}
function P1(e, t) {
  const n = [],
    r = { color: 0, var: 0, number: 0 };
  for (let i = 0; i < t.values.length; i++) {
    const o = t.types[i],
      s = e.indexes[o][r[o]],
      a = e.values[s] ?? 0;
    ((n[i] = a), r[o]++);
  }
  return n;
}
const T1 = (e, t) => {
  const n = Qt.createTransformer(t),
    r = fi(e),
    i = fi(t);
  return r.indexes.var.length === i.indexes.var.length &&
    r.indexes.color.length === i.indexes.color.length &&
    r.indexes.number.length >= i.indexes.number.length
    ? (rl.has(e) && !i.values.length) || (rl.has(t) && !r.values.length)
      ? S1(e, t)
      : Pi(Im(P1(r, i), i.values), n)
    : Wo(e, t);
};
function Fm(e, t, n) {
  return typeof e == 'number' && typeof t == 'number' && typeof n == 'number'
    ? Q(e, t, n)
    : Bu(e)(e, t);
}
const E1 = (e) => {
    const t = ({ timestamp: n }) => e(n);
    return {
      start: (n = !0) => H.update(t, n),
      stop: () => Yt(t),
      now: () => (fe.isProcessing ? fe.timestamp : Re.now()),
    };
  },
  _m = (e, t, n = 10) => {
    let r = '';
    const i = Math.max(Math.round(t / n), 2);
    for (let o = 0; o < i; o++)
      r += Math.round(e(o / (i - 1)) * 1e4) / 1e4 + ', ';
    return `linear(${r.substring(0, r.length - 2)})`;
  },
  bo = 2e4;
function zu(e) {
  let t = 0;
  const n = 50;
  let r = e.next(t);
  for (; !r.done && t < bo; ) ((t += n), (r = e.next(t)));
  return t >= bo ? 1 / 0 : t;
}
function R1(e, t = 100, n) {
  const r = n({ ...e, keyframes: [0, t] }),
    i = Math.min(zu(r), bo);
  return {
    type: 'keyframes',
    ease: (o) => r.next(i * o).value / t,
    duration: lt(i),
  };
}
const M1 = 5;
function Om(e, t, n) {
  const r = Math.max(t - M1, 0);
  return ym(n - e(r), t - r);
}
const J = {
    stiffness: 100,
    damping: 10,
    mass: 1,
    velocity: 0,
    duration: 800,
    bounce: 0.3,
    visualDuration: 0.3,
    restSpeed: { granular: 0.01, default: 2 },
    restDelta: { granular: 0.005, default: 0.5 },
    minDuration: 0.01,
    maxDuration: 10,
    minDamping: 0.05,
    maxDamping: 1,
  },
  Xs = 0.001;
function L1({
  duration: e = J.duration,
  bounce: t = J.bounce,
  velocity: n = J.velocity,
  mass: r = J.mass,
}) {
  let i,
    o,
    s = 1 - t;
  ((s = Pt(J.minDamping, J.maxDamping, s)),
    (e = Pt(J.minDuration, J.maxDuration, lt(e))),
    s < 1
      ? ((i = (u) => {
          const c = u * s,
            d = c * e,
            f = c - n,
            g = il(u, s),
            v = Math.exp(-d);
          return Xs - (f / g) * v;
        }),
        (o = (u) => {
          const d = u * s * e,
            f = d * n + n,
            g = Math.pow(s, 2) * Math.pow(u, 2) * e,
            v = Math.exp(-d),
            y = il(Math.pow(u, 2), s);
          return ((-i(u) + Xs > 0 ? -1 : 1) * ((f - g) * v)) / y;
        }))
      : ((i = (u) => {
          const c = Math.exp(-u * e),
            d = (u - n) * e + 1;
          return -Xs + c * d;
        }),
        (o = (u) => {
          const c = Math.exp(-u * e),
            d = (n - u) * (e * e);
          return c * d;
        })));
  const a = 5 / e,
    l = N1(i, o, a);
  if (((e = at(e)), isNaN(l)))
    return { stiffness: J.stiffness, damping: J.damping, duration: e };
  {
    const u = Math.pow(l, 2) * r;
    return { stiffness: u, damping: s * 2 * Math.sqrt(r * u), duration: e };
  }
}
const A1 = 12;
function N1(e, t, n) {
  let r = n;
  for (let i = 1; i < A1; i++) r = r - e(r) / t(r);
  return r;
}
function il(e, t) {
  return e * Math.sqrt(1 - t * t);
}
const j1 = ['duration', 'bounce'],
  D1 = ['stiffness', 'damping', 'mass'];
function Ed(e, t) {
  return t.some((n) => e[n] !== void 0);
}
function V1(e) {
  let t = {
    velocity: J.velocity,
    stiffness: J.stiffness,
    damping: J.damping,
    mass: J.mass,
    isResolvedFromDuration: !1,
    ...e,
  };
  if (!Ed(e, D1) && Ed(e, j1))
    if (e.visualDuration) {
      const n = e.visualDuration,
        r = (2 * Math.PI) / (n * 1.2),
        i = r * r,
        o = 2 * Pt(0.05, 1, 1 - (e.bounce || 0)) * Math.sqrt(i);
      t = { ...t, mass: J.mass, stiffness: i, damping: o };
    } else {
      const n = L1(e);
      ((t = { ...t, ...n, mass: J.mass }), (t.isResolvedFromDuration = !0));
    }
  return t;
}
function Ho(e = J.visualDuration, t = J.bounce) {
  const n =
    typeof e != 'object'
      ? { visualDuration: e, keyframes: [0, 1], bounce: t }
      : e;
  let { restSpeed: r, restDelta: i } = n;
  const o = n.keyframes[0],
    s = n.keyframes[n.keyframes.length - 1],
    a = { done: !1, value: o },
    {
      stiffness: l,
      damping: u,
      mass: c,
      duration: d,
      velocity: f,
      isResolvedFromDuration: g,
    } = V1({ ...n, velocity: -lt(n.velocity || 0) }),
    v = f || 0,
    y = u / (2 * Math.sqrt(l * c)),
    S = s - o,
    p = lt(Math.sqrt(l / c)),
    h = Math.abs(S) < 5;
  (r || (r = h ? J.restSpeed.granular : J.restSpeed.default),
    i || (i = h ? J.restDelta.granular : J.restDelta.default));
  let m;
  if (y < 1) {
    const C = il(p, y);
    m = (T) => {
      const R = Math.exp(-y * p * T);
      return (
        s - R * (((v + y * p * S) / C) * Math.sin(C * T) + S * Math.cos(C * T))
      );
    };
  } else if (y === 1) m = (C) => s - Math.exp(-p * C) * (S + (v + p * S) * C);
  else {
    const C = p * Math.sqrt(y * y - 1);
    m = (T) => {
      const R = Math.exp(-y * p * T),
        E = Math.min(C * T, 300);
      return (
        s - (R * ((v + y * p * S) * Math.sinh(E) + C * S * Math.cosh(E))) / C
      );
    };
  }
  const k = {
    calculatedDuration: (g && d) || null,
    next: (C) => {
      const T = m(C);
      if (g) a.done = C >= d;
      else {
        let R = C === 0 ? v : 0;
        y < 1 && (R = C === 0 ? at(v) : Om(m, C, T));
        const E = Math.abs(R) <= r,
          N = Math.abs(s - T) <= i;
        a.done = E && N;
      }
      return ((a.value = a.done ? s : T), a);
    },
    toString: () => {
      const C = Math.min(zu(k), bo),
        T = _m((R) => k.next(C * R).value, C, 30);
      return C + 'ms ' + T;
    },
    toTransition: () => {},
  };
  return k;
}
Ho.applyToOptions = (e) => {
  const t = R1(e, 100, Ho);
  return (
    (e.ease = t.ease),
    (e.duration = at(t.duration)),
    (e.type = 'keyframes'),
    e
  );
};
function ol({
  keyframes: e,
  velocity: t = 0,
  power: n = 0.8,
  timeConstant: r = 325,
  bounceDamping: i = 10,
  bounceStiffness: o = 500,
  modifyTarget: s,
  min: a,
  max: l,
  restDelta: u = 0.5,
  restSpeed: c,
}) {
  const d = e[0],
    f = { done: !1, value: d },
    g = (E) => (a !== void 0 && E < a) || (l !== void 0 && E > l),
    v = (E) =>
      a === void 0
        ? l
        : l === void 0 || Math.abs(a - E) < Math.abs(l - E)
          ? a
          : l;
  let y = n * t;
  const S = d + y,
    p = s === void 0 ? S : s(S);
  p !== S && (y = p - d);
  const h = (E) => -y * Math.exp(-E / r),
    m = (E) => p + h(E),
    k = (E) => {
      const N = h(E),
        P = m(E);
      ((f.done = Math.abs(N) <= u), (f.value = f.done ? p : P));
    };
  let C, T;
  const R = (E) => {
    g(f.value) &&
      ((C = E),
      (T = Ho({
        keyframes: [f.value, v(f.value)],
        velocity: Om(m, E, f.value),
        damping: i,
        stiffness: o,
        restDelta: u,
        restSpeed: c,
      })));
  };
  return (
    R(0),
    {
      calculatedDuration: null,
      next: (E) => {
        let N = !1;
        return (
          !T && C === void 0 && ((N = !0), k(E), R(E)),
          C !== void 0 && E >= C ? T.next(E - C) : (!N && k(E), f)
        );
      },
    }
  );
}
function I1(e, t, n) {
  const r = [],
    i = n || Tt.mix || Fm,
    o = e.length - 1;
  for (let s = 0; s < o; s++) {
    let a = i(e[s], e[s + 1]);
    if (t) {
      const l = Array.isArray(t) ? t[s] || We : t;
      a = Pi(l, a);
    }
    r.push(a);
  }
  return r;
}
function F1(e, t, { clamp: n = !0, ease: r, mixer: i } = {}) {
  const o = e.length;
  if ((Au(o === t.length), o === 1)) return () => t[0];
  if (o === 2 && t[0] === t[1]) return () => t[1];
  const s = e[0] === e[1];
  e[0] > e[o - 1] && ((e = [...e].reverse()), (t = [...t].reverse()));
  const a = I1(t, r, i),
    l = a.length,
    u = (c) => {
      if (s && c < e[0]) return t[0];
      let d = 0;
      if (l > 1) for (; d < e.length - 2 && !(c < e[d + 1]); d++);
      const f = ci(e[d], e[d + 1], c);
      return a[d](f);
    };
  return n ? (c) => u(Pt(e[0], e[o - 1], c)) : u;
}
function _1(e, t) {
  const n = e[e.length - 1];
  for (let r = 1; r <= t; r++) {
    const i = ci(0, t, r);
    e.push(Q(n, 1, i));
  }
}
function O1(e) {
  const t = [0];
  return (_1(t, e.length - 1), t);
}
function B1(e, t) {
  return e.map((n) => n * t);
}
function z1(e, t) {
  return e.map(() => t || Em).splice(0, e.length - 1);
}
function Ur({
  duration: e = 300,
  keyframes: t,
  times: n,
  ease: r = 'easeInOut',
}) {
  const i = Zw(r) ? r.map(xd) : xd(r),
    o = { done: !1, value: t[0] },
    s = B1(n && n.length === t.length ? n : O1(t), e),
    a = F1(s, t, { ease: Array.isArray(i) ? i : z1(t, i) });
  return {
    calculatedDuration: e,
    next: (l) => ((o.value = a(l)), (o.done = l >= e), o),
  };
}
const $1 = (e) => e !== null;
function $u(e, { repeat: t, repeatType: n = 'loop' }, r, i = 1) {
  const o = e.filter($1),
    a = i < 0 || (t && n !== 'loop' && t % 2 === 1) ? 0 : o.length - 1;
  return !a || r === void 0 ? o[a] : r;
}
const U1 = { decay: ol, inertia: ol, tween: Ur, keyframes: Ur, spring: Ho };
function Bm(e) {
  typeof e.type == 'string' && (e.type = U1[e.type]);
}
class Uu {
  constructor() {
    this.updateFinished();
  }
  get finished() {
    return this._finished;
  }
  updateFinished() {
    this._finished = new Promise((t) => {
      this.resolve = t;
    });
  }
  notifyFinished() {
    this.resolve();
  }
  then(t, n) {
    return this.finished.then(t, n);
  }
}
const W1 = (e) => e / 100;
class Wu extends Uu {
  constructor(t) {
    (super(),
      (this.state = 'idle'),
      (this.startTime = null),
      (this.isStopped = !1),
      (this.currentTime = 0),
      (this.holdTime = null),
      (this.playbackSpeed = 1),
      (this.stop = () => {
        var r, i;
        const { motionValue: n } = this.options;
        (n && n.updatedAt !== Re.now() && this.tick(Re.now()),
          (this.isStopped = !0),
          this.state !== 'idle' &&
            (this.teardown(),
            (i = (r = this.options).onStop) == null || i.call(r)));
      }),
      (this.options = t),
      this.initAnimation(),
      this.play(),
      t.autoplay === !1 && this.pause());
  }
  initAnimation() {
    const { options: t } = this;
    Bm(t);
    const {
      type: n = Ur,
      repeat: r = 0,
      repeatDelay: i = 0,
      repeatType: o,
      velocity: s = 0,
    } = t;
    let { keyframes: a } = t;
    const l = n || Ur;
    l !== Ur &&
      typeof a[0] != 'number' &&
      ((this.mixKeyframes = Pi(W1, Fm(a[0], a[1]))), (a = [0, 100]));
    const u = l({ ...t, keyframes: a });
    (o === 'mirror' &&
      (this.mirroredGenerator = l({
        ...t,
        keyframes: [...a].reverse(),
        velocity: -s,
      })),
      u.calculatedDuration === null && (u.calculatedDuration = zu(u)));
    const { calculatedDuration: c } = u;
    ((this.calculatedDuration = c),
      (this.resolvedDuration = c + i),
      (this.totalDuration = this.resolvedDuration * (r + 1) - i),
      (this.generator = u));
  }
  updateTime(t) {
    const n = Math.round(t - this.startTime) * this.playbackSpeed;
    this.holdTime !== null
      ? (this.currentTime = this.holdTime)
      : (this.currentTime = n);
  }
  tick(t, n = !1) {
    const {
      generator: r,
      totalDuration: i,
      mixKeyframes: o,
      mirroredGenerator: s,
      resolvedDuration: a,
      calculatedDuration: l,
    } = this;
    if (this.startTime === null) return r.next(0);
    const {
      delay: u = 0,
      keyframes: c,
      repeat: d,
      repeatType: f,
      repeatDelay: g,
      type: v,
      onUpdate: y,
      finalKeyframe: S,
    } = this.options;
    (this.speed > 0
      ? (this.startTime = Math.min(this.startTime, t))
      : this.speed < 0 &&
        (this.startTime = Math.min(t - i / this.speed, this.startTime)),
      n ? (this.currentTime = t) : this.updateTime(t));
    const p = this.currentTime - u * (this.playbackSpeed >= 0 ? 1 : -1),
      h = this.playbackSpeed >= 0 ? p < 0 : p > i;
    ((this.currentTime = Math.max(p, 0)),
      this.state === 'finished' &&
        this.holdTime === null &&
        (this.currentTime = i));
    let m = this.currentTime,
      k = r;
    if (d) {
      const E = Math.min(this.currentTime, i) / a;
      let N = Math.floor(E),
        P = E % 1;
      (!P && E >= 1 && (P = 1),
        P === 1 && N--,
        (N = Math.min(N, d + 1)),
        !!(N % 2) &&
          (f === 'reverse'
            ? ((P = 1 - P), g && (P -= g / a))
            : f === 'mirror' && (k = s)),
        (m = Pt(0, 1, P) * a));
    }
    const C = h ? { done: !1, value: c[0] } : k.next(m);
    o && (C.value = o(C.value));
    let { done: T } = C;
    !h &&
      l !== null &&
      (T =
        this.playbackSpeed >= 0
          ? this.currentTime >= i
          : this.currentTime <= 0);
    const R =
      this.holdTime === null &&
      (this.state === 'finished' || (this.state === 'running' && T));
    return (
      R && v !== ol && (C.value = $u(c, this.options, S, this.speed)),
      y && y(C.value),
      R && this.finish(),
      C
    );
  }
  then(t, n) {
    return this.finished.then(t, n);
  }
  get duration() {
    return lt(this.calculatedDuration);
  }
  get time() {
    return lt(this.currentTime);
  }
  set time(t) {
    var n;
    ((t = at(t)),
      (this.currentTime = t),
      this.startTime === null ||
      this.holdTime !== null ||
      this.playbackSpeed === 0
        ? (this.holdTime = t)
        : this.driver &&
          (this.startTime = this.driver.now() - t / this.playbackSpeed),
      (n = this.driver) == null || n.start(!1));
  }
  get speed() {
    return this.playbackSpeed;
  }
  set speed(t) {
    this.updateTime(Re.now());
    const n = this.playbackSpeed !== t;
    ((this.playbackSpeed = t), n && (this.time = lt(this.currentTime)));
  }
  play() {
    var i, o;
    if (this.isStopped) return;
    const { driver: t = E1, startTime: n } = this.options;
    (this.driver || (this.driver = t((s) => this.tick(s))),
      (o = (i = this.options).onPlay) == null || o.call(i));
    const r = this.driver.now();
    (this.state === 'finished'
      ? (this.updateFinished(), (this.startTime = r))
      : this.holdTime !== null
        ? (this.startTime = r - this.holdTime)
        : this.startTime || (this.startTime = n ?? r),
      this.state === 'finished' &&
        this.speed < 0 &&
        (this.startTime += this.calculatedDuration),
      (this.holdTime = null),
      (this.state = 'running'),
      this.driver.start());
  }
  pause() {
    ((this.state = 'paused'),
      this.updateTime(Re.now()),
      (this.holdTime = this.currentTime));
  }
  complete() {
    (this.state !== 'running' && this.play(),
      (this.state = 'finished'),
      (this.holdTime = null));
  }
  finish() {
    var t, n;
    (this.notifyFinished(),
      this.teardown(),
      (this.state = 'finished'),
      (n = (t = this.options).onComplete) == null || n.call(t));
  }
  cancel() {
    var t, n;
    ((this.holdTime = null),
      (this.startTime = 0),
      this.tick(0),
      this.teardown(),
      (n = (t = this.options).onCancel) == null || n.call(t));
  }
  teardown() {
    ((this.state = 'idle'),
      this.stopDriver(),
      (this.startTime = this.holdTime = null));
  }
  stopDriver() {
    this.driver && (this.driver.stop(), (this.driver = void 0));
  }
  sample(t) {
    return ((this.startTime = 0), this.tick(t, !0));
  }
  attachTimeline(t) {
    var n;
    return (
      this.options.allowFlatten &&
        ((this.options.type = 'keyframes'),
        (this.options.ease = 'linear'),
        this.initAnimation()),
      (n = this.driver) == null || n.stop(),
      t.observe(this)
    );
  }
}
function b1(e) {
  for (let t = 1; t < e.length; t++) e[t] ?? (e[t] = e[t - 1]);
}
const hn = (e) => (e * 180) / Math.PI,
  sl = (e) => {
    const t = hn(Math.atan2(e[1], e[0]));
    return al(t);
  },
  H1 = {
    x: 4,
    y: 5,
    translateX: 4,
    translateY: 5,
    scaleX: 0,
    scaleY: 3,
    scale: (e) => (Math.abs(e[0]) + Math.abs(e[3])) / 2,
    rotate: sl,
    rotateZ: sl,
    skewX: (e) => hn(Math.atan(e[1])),
    skewY: (e) => hn(Math.atan(e[2])),
    skew: (e) => (Math.abs(e[1]) + Math.abs(e[2])) / 2,
  },
  al = (e) => ((e = e % 360), e < 0 && (e += 360), e),
  Rd = sl,
  Md = (e) => Math.sqrt(e[0] * e[0] + e[1] * e[1]),
  Ld = (e) => Math.sqrt(e[4] * e[4] + e[5] * e[5]),
  K1 = {
    x: 12,
    y: 13,
    z: 14,
    translateX: 12,
    translateY: 13,
    translateZ: 14,
    scaleX: Md,
    scaleY: Ld,
    scale: (e) => (Md(e) + Ld(e)) / 2,
    rotateX: (e) => al(hn(Math.atan2(e[6], e[5]))),
    rotateY: (e) => al(hn(Math.atan2(-e[2], e[0]))),
    rotateZ: Rd,
    rotate: Rd,
    skewX: (e) => hn(Math.atan(e[4])),
    skewY: (e) => hn(Math.atan(e[1])),
    skew: (e) => (Math.abs(e[1]) + Math.abs(e[4])) / 2,
  };
function ll(e) {
  return e.includes('scale') ? 1 : 0;
}
function ul(e, t) {
  if (!e || e === 'none') return ll(t);
  const n = e.match(/^matrix3d\(([-\d.e\s,]+)\)$/u);
  let r, i;
  if (n) ((r = K1), (i = n));
  else {
    const a = e.match(/^matrix\(([-\d.e\s,]+)\)$/u);
    ((r = H1), (i = a));
  }
  if (!i) return ll(t);
  const o = r[t],
    s = i[1].split(',').map(Y1);
  return typeof o == 'function' ? o(s) : s[o];
}
const G1 = (e, t) => {
  const { transform: n = 'none' } = getComputedStyle(e);
  return ul(n, t);
};
function Y1(e) {
  return parseFloat(e.trim());
}
const fr = [
    'transformPerspective',
    'x',
    'y',
    'z',
    'translateX',
    'translateY',
    'translateZ',
    'scale',
    'scaleX',
    'scaleY',
    'rotate',
    'rotateX',
    'rotateY',
    'rotateZ',
    'skew',
    'skewX',
    'skewY',
  ],
  hr = (() => new Set(fr))(),
  Ad = (e) => e === dr || e === j,
  Q1 = new Set(['x', 'y', 'z']),
  X1 = fr.filter((e) => !Q1.has(e));
function Z1(e) {
  const t = [];
  return (
    X1.forEach((n) => {
      const r = e.getValue(n);
      r !== void 0 &&
        (t.push([n, r.get()]), r.set(n.startsWith('scale') ? 1 : 0));
    }),
    t
  );
}
const gn = {
  width: ({ x: e }, { paddingLeft: t = '0', paddingRight: n = '0' }) =>
    e.max - e.min - parseFloat(t) - parseFloat(n),
  height: ({ y: e }, { paddingTop: t = '0', paddingBottom: n = '0' }) =>
    e.max - e.min - parseFloat(t) - parseFloat(n),
  top: (e, { top: t }) => parseFloat(t),
  left: (e, { left: t }) => parseFloat(t),
  bottom: ({ y: e }, { top: t }) => parseFloat(t) + (e.max - e.min),
  right: ({ x: e }, { left: t }) => parseFloat(t) + (e.max - e.min),
  x: (e, { transform: t }) => ul(t, 'x'),
  y: (e, { transform: t }) => ul(t, 'y'),
};
gn.translateX = gn.x;
gn.translateY = gn.y;
const yn = new Set();
let cl = !1,
  dl = !1,
  fl = !1;
function zm() {
  if (dl) {
    const e = Array.from(yn).filter((r) => r.needsMeasurement),
      t = new Set(e.map((r) => r.element)),
      n = new Map();
    (t.forEach((r) => {
      const i = Z1(r);
      i.length && (n.set(r, i), r.render());
    }),
      e.forEach((r) => r.measureInitialState()),
      t.forEach((r) => {
        r.render();
        const i = n.get(r);
        i &&
          i.forEach(([o, s]) => {
            var a;
            (a = r.getValue(o)) == null || a.set(s);
          });
      }),
      e.forEach((r) => r.measureEndState()),
      e.forEach((r) => {
        r.suspendedScrollY !== void 0 && window.scrollTo(0, r.suspendedScrollY);
      }));
  }
  ((dl = !1), (cl = !1), yn.forEach((e) => e.complete(fl)), yn.clear());
}
function $m() {
  yn.forEach((e) => {
    (e.readKeyframes(), e.needsMeasurement && (dl = !0));
  });
}
function J1() {
  ((fl = !0), $m(), zm(), (fl = !1));
}
class bu {
  constructor(t, n, r, i, o, s = !1) {
    ((this.state = 'pending'),
      (this.isAsync = !1),
      (this.needsMeasurement = !1),
      (this.unresolvedKeyframes = [...t]),
      (this.onComplete = n),
      (this.name = r),
      (this.motionValue = i),
      (this.element = o),
      (this.isAsync = s));
  }
  scheduleResolve() {
    ((this.state = 'scheduled'),
      this.isAsync
        ? (yn.add(this), cl || ((cl = !0), H.read($m), H.resolveKeyframes(zm)))
        : (this.readKeyframes(), this.complete()));
  }
  readKeyframes() {
    const {
      unresolvedKeyframes: t,
      name: n,
      element: r,
      motionValue: i,
    } = this;
    if (t[0] === null) {
      const o = i == null ? void 0 : i.get(),
        s = t[t.length - 1];
      if (o !== void 0) t[0] = o;
      else if (r && n) {
        const a = r.readValue(n, s);
        a != null && (t[0] = a);
      }
      (t[0] === void 0 && (t[0] = s), i && o === void 0 && i.set(t[0]));
    }
    b1(t);
  }
  setFinalKeyframe() {}
  measureInitialState() {}
  renderEndStyles() {}
  measureEndState() {}
  complete(t = !1) {
    ((this.state = 'complete'),
      this.onComplete(this.unresolvedKeyframes, this.finalKeyframe, t),
      yn.delete(this));
  }
  cancel() {
    this.state === 'scheduled' && (yn.delete(this), (this.state = 'pending'));
  }
  resume() {
    this.state === 'pending' && this.scheduleResolve();
  }
}
const q1 = (e) => e.startsWith('--');
function ex(e, t, n) {
  q1(t) ? e.style.setProperty(t, n) : (e.style[t] = n);
}
const tx = Nu(() => window.ScrollTimeline !== void 0),
  nx = {};
function rx(e, t) {
  const n = Nu(e);
  return () => nx[t] ?? n();
}
const Um = rx(() => {
    try {
      document
        .createElement('div')
        .animate({ opacity: 0 }, { easing: 'linear(0, 1)' });
    } catch {
      return !1;
    }
    return !0;
  }, 'linearEasing'),
  Lr = ([e, t, n, r]) => `cubic-bezier(${e}, ${t}, ${n}, ${r})`,
  Nd = {
    linear: 'linear',
    ease: 'ease',
    easeIn: 'ease-in',
    easeOut: 'ease-out',
    easeInOut: 'ease-in-out',
    circIn: Lr([0, 0.65, 0.55, 1]),
    circOut: Lr([0.55, 0, 1, 0.45]),
    backIn: Lr([0.31, 0.01, 0.66, -0.59]),
    backOut: Lr([0.33, 1.53, 0.69, 0.99]),
  };
function Wm(e, t) {
  if (e)
    return typeof e == 'function'
      ? Um()
        ? _m(e, t)
        : 'ease-out'
      : Rm(e)
        ? Lr(e)
        : Array.isArray(e)
          ? e.map((n) => Wm(n, t) || Nd.easeOut)
          : Nd[e];
}
function ix(
  e,
  t,
  n,
  {
    delay: r = 0,
    duration: i = 300,
    repeat: o = 0,
    repeatType: s = 'loop',
    ease: a = 'easeOut',
    times: l,
  } = {},
  u = void 0
) {
  const c = { [t]: n };
  l && (c.offset = l);
  const d = Wm(a, i);
  Array.isArray(d) && (c.easing = d);
  const f = {
    delay: r,
    duration: i,
    easing: Array.isArray(d) ? 'linear' : d,
    fill: 'both',
    iterations: o + 1,
    direction: s === 'reverse' ? 'alternate' : 'normal',
  };
  return (u && (f.pseudoElement = u), e.animate(c, f));
}
function bm(e) {
  return typeof e == 'function' && 'applyToOptions' in e;
}
function ox({ type: e, ...t }) {
  return bm(e) && Um()
    ? e.applyToOptions(t)
    : (t.duration ?? (t.duration = 300), t.ease ?? (t.ease = 'easeOut'), t);
}
class sx extends Uu {
  constructor(t) {
    if ((super(), (this.finishedTime = null), (this.isStopped = !1), !t))
      return;
    const {
      element: n,
      name: r,
      keyframes: i,
      pseudoElement: o,
      allowFlatten: s = !1,
      finalKeyframe: a,
      onComplete: l,
    } = t;
    ((this.isPseudoElement = !!o),
      (this.allowFlatten = s),
      (this.options = t),
      Au(typeof t.type != 'string'));
    const u = ox(t);
    ((this.animation = ix(n, r, i, u, o)),
      u.autoplay === !1 && this.animation.pause(),
      (this.animation.onfinish = () => {
        if (((this.finishedTime = this.time), !o)) {
          const c = $u(i, this.options, a, this.speed);
          (this.updateMotionValue ? this.updateMotionValue(c) : ex(n, r, c),
            this.animation.cancel());
        }
        (l == null || l(), this.notifyFinished());
      }));
  }
  play() {
    this.isStopped ||
      (this.animation.play(),
      this.state === 'finished' && this.updateFinished());
  }
  pause() {
    this.animation.pause();
  }
  complete() {
    var t, n;
    (n = (t = this.animation).finish) == null || n.call(t);
  }
  cancel() {
    try {
      this.animation.cancel();
    } catch {}
  }
  stop() {
    if (this.isStopped) return;
    this.isStopped = !0;
    const { state: t } = this;
    t === 'idle' ||
      t === 'finished' ||
      (this.updateMotionValue ? this.updateMotionValue() : this.commitStyles(),
      this.isPseudoElement || this.cancel());
  }
  commitStyles() {
    var t, n;
    this.isPseudoElement ||
      (n = (t = this.animation).commitStyles) == null ||
      n.call(t);
  }
  get duration() {
    var n, r;
    const t =
      ((r =
        (n = this.animation.effect) == null ? void 0 : n.getComputedTiming) ==
      null
        ? void 0
        : r.call(n).duration) || 0;
    return lt(Number(t));
  }
  get time() {
    return lt(Number(this.animation.currentTime) || 0);
  }
  set time(t) {
    ((this.finishedTime = null), (this.animation.currentTime = at(t)));
  }
  get speed() {
    return this.animation.playbackRate;
  }
  set speed(t) {
    (t < 0 && (this.finishedTime = null), (this.animation.playbackRate = t));
  }
  get state() {
    return this.finishedTime !== null ? 'finished' : this.animation.playState;
  }
  get startTime() {
    return Number(this.animation.startTime);
  }
  set startTime(t) {
    this.animation.startTime = t;
  }
  attachTimeline({ timeline: t, observe: n }) {
    var r;
    return (
      this.allowFlatten &&
        ((r = this.animation.effect) == null ||
          r.updateTiming({ easing: 'linear' })),
      (this.animation.onfinish = null),
      t && tx() ? ((this.animation.timeline = t), We) : n(this)
    );
  }
}
const Hm = { anticipate: Cm, backInOut: km, circInOut: Tm };
function ax(e) {
  return e in Hm;
}
function lx(e) {
  typeof e.ease == 'string' && ax(e.ease) && (e.ease = Hm[e.ease]);
}
const jd = 10;
class ux extends sx {
  constructor(t) {
    (lx(t),
      Bm(t),
      super(t),
      t.startTime && (this.startTime = t.startTime),
      (this.options = t));
  }
  updateMotionValue(t) {
    const {
      motionValue: n,
      onUpdate: r,
      onComplete: i,
      element: o,
      ...s
    } = this.options;
    if (!n) return;
    if (t !== void 0) {
      n.set(t);
      return;
    }
    const a = new Wu({ ...s, autoplay: !1 }),
      l = at(this.finishedTime ?? this.time);
    (n.setWithVelocity(a.sample(l - jd).value, a.sample(l).value, jd),
      a.stop());
  }
}
const Dd = (e, t) =>
  t === 'zIndex'
    ? !1
    : !!(
        typeof e == 'number' ||
        Array.isArray(e) ||
        (typeof e == 'string' &&
          (Qt.test(e) || e === '0') &&
          !e.startsWith('url('))
      );
function cx(e) {
  const t = e[0];
  if (e.length === 1) return !0;
  for (let n = 0; n < e.length; n++) if (e[n] !== t) return !0;
}
function dx(e, t, n, r) {
  const i = e[0];
  if (i === null) return !1;
  if (t === 'display' || t === 'visibility') return !0;
  const o = e[e.length - 1],
    s = Dd(i, t),
    a = Dd(o, t);
  return !s || !a ? !1 : cx(e) || ((n === 'spring' || bm(n)) && r);
}
const fx = new Set(['opacity', 'clipPath', 'filter', 'transform']),
  hx = Nu(() => Object.hasOwnProperty.call(Element.prototype, 'animate'));
function px(e) {
  var c;
  const {
    motionValue: t,
    name: n,
    repeatDelay: r,
    repeatType: i,
    damping: o,
    type: s,
  } = e;
  if (
    !(
      ((c = t == null ? void 0 : t.owner) == null
        ? void 0
        : c.current) instanceof HTMLElement
    )
  )
    return !1;
  const { onUpdate: l, transformTemplate: u } = t.owner.getProps();
  return (
    hx() &&
    n &&
    fx.has(n) &&
    (n !== 'transform' || !u) &&
    !l &&
    !r &&
    i !== 'mirror' &&
    o !== 0 &&
    s !== 'inertia'
  );
}
const mx = 40;
class gx extends Uu {
  constructor({
    autoplay: t = !0,
    delay: n = 0,
    type: r = 'keyframes',
    repeat: i = 0,
    repeatDelay: o = 0,
    repeatType: s = 'loop',
    keyframes: a,
    name: l,
    motionValue: u,
    element: c,
    ...d
  }) {
    var v;
    (super(),
      (this.stop = () => {
        var y, S;
        (this._animation &&
          (this._animation.stop(),
          (y = this.stopTimeline) == null || y.call(this)),
          (S = this.keyframeResolver) == null || S.cancel());
      }),
      (this.createdAt = Re.now()));
    const f = {
        autoplay: t,
        delay: n,
        type: r,
        repeat: i,
        repeatDelay: o,
        repeatType: s,
        name: l,
        motionValue: u,
        element: c,
        ...d,
      },
      g = (c == null ? void 0 : c.KeyframeResolver) || bu;
    ((this.keyframeResolver = new g(
      a,
      (y, S, p) => this.onKeyframesResolved(y, S, f, !p),
      l,
      u,
      c
    )),
      (v = this.keyframeResolver) == null || v.scheduleResolve());
  }
  onKeyframesResolved(t, n, r, i) {
    this.keyframeResolver = void 0;
    const {
      name: o,
      type: s,
      velocity: a,
      delay: l,
      isHandoff: u,
      onUpdate: c,
    } = r;
    ((this.resolvedAt = Re.now()),
      dx(t, o, s, a) ||
        ((Tt.instantAnimations || !l) && (c == null || c($u(t, r, n))),
        (t[0] = t[t.length - 1]),
        (r.duration = 0),
        (r.repeat = 0)));
    const f = {
        startTime: i
          ? this.resolvedAt
            ? this.resolvedAt - this.createdAt > mx
              ? this.resolvedAt
              : this.createdAt
            : this.createdAt
          : void 0,
        finalKeyframe: n,
        ...r,
        keyframes: t,
      },
      g =
        !u && px(f)
          ? new ux({ ...f, element: f.motionValue.owner.current })
          : new Wu(f);
    (g.finished.then(() => this.notifyFinished()).catch(We),
      this.pendingTimeline &&
        ((this.stopTimeline = g.attachTimeline(this.pendingTimeline)),
        (this.pendingTimeline = void 0)),
      (this._animation = g));
  }
  get finished() {
    return this._animation ? this.animation.finished : this._finished;
  }
  then(t, n) {
    return this.finished.finally(t).then(() => {});
  }
  get animation() {
    var t;
    return (
      this._animation ||
        ((t = this.keyframeResolver) == null || t.resume(), J1()),
      this._animation
    );
  }
  get duration() {
    return this.animation.duration;
  }
  get time() {
    return this.animation.time;
  }
  set time(t) {
    this.animation.time = t;
  }
  get speed() {
    return this.animation.speed;
  }
  get state() {
    return this.animation.state;
  }
  set speed(t) {
    this.animation.speed = t;
  }
  get startTime() {
    return this.animation.startTime;
  }
  attachTimeline(t) {
    return (
      this._animation
        ? (this.stopTimeline = this.animation.attachTimeline(t))
        : (this.pendingTimeline = t),
      () => this.stop()
    );
  }
  play() {
    this.animation.play();
  }
  pause() {
    this.animation.pause();
  }
  complete() {
    this.animation.complete();
  }
  cancel() {
    var t;
    (this._animation && this.animation.cancel(),
      (t = this.keyframeResolver) == null || t.cancel());
  }
}
const yx = /^var\(--(?:([\w-]+)|([\w-]+), ?([a-zA-Z\d ()%#.,-]+))\)/u;
function vx(e) {
  const t = yx.exec(e);
  if (!t) return [,];
  const [, n, r, i] = t;
  return [`--${n ?? r}`, i];
}
function Km(e, t, n = 1) {
  const [r, i] = vx(e);
  if (!r) return;
  const o = window.getComputedStyle(t).getPropertyValue(r);
  if (o) {
    const s = o.trim();
    return pm(s) ? parseFloat(s) : s;
  }
  return Fu(i) ? Km(i, t, n + 1) : i;
}
function Hu(e, t) {
  return (e == null ? void 0 : e[t]) ?? (e == null ? void 0 : e.default) ?? e;
}
const Gm = new Set([
    'width',
    'height',
    'top',
    'left',
    'right',
    'bottom',
    ...fr,
  ]),
  wx = { test: (e) => e === 'auto', parse: (e) => e },
  Ym = (e) => (t) => t.test(e),
  Qm = [dr, j, ut, At, c1, u1, wx],
  Vd = (e) => Qm.find(Ym(e));
function xx(e) {
  return typeof e == 'number'
    ? e === 0
    : e !== null
      ? e === 'none' || e === '0' || gm(e)
      : !0;
}
const Sx = new Set(['brightness', 'contrast', 'saturate', 'opacity']);
function kx(e) {
  const [t, n] = e.slice(0, -1).split('(');
  if (t === 'drop-shadow') return e;
  const [r] = n.match(_u) || [];
  if (!r) return e;
  const i = n.replace(r, '');
  let o = Sx.has(t) ? 1 : 0;
  return (r !== n && (o *= 100), t + '(' + o + i + ')');
}
const Cx = /\b([a-z-]*)\(.*?\)/gu,
  hl = {
    ...Qt,
    getAnimatableNone: (e) => {
      const t = e.match(Cx);
      return t ? t.map(kx).join(' ') : e;
    },
  },
  Id = { ...dr, transform: Math.round },
  Px = {
    rotate: At,
    rotateX: At,
    rotateY: At,
    rotateZ: At,
    scale: Xi,
    scaleX: Xi,
    scaleY: Xi,
    scaleZ: Xi,
    skew: At,
    skewX: At,
    skewY: At,
    distance: j,
    translateX: j,
    translateY: j,
    translateZ: j,
    x: j,
    y: j,
    z: j,
    perspective: j,
    transformPerspective: j,
    opacity: di,
    originX: kd,
    originY: kd,
    originZ: j,
  },
  Ku = {
    borderWidth: j,
    borderTopWidth: j,
    borderRightWidth: j,
    borderBottomWidth: j,
    borderLeftWidth: j,
    borderRadius: j,
    radius: j,
    borderTopLeftRadius: j,
    borderTopRightRadius: j,
    borderBottomRightRadius: j,
    borderBottomLeftRadius: j,
    width: j,
    maxWidth: j,
    height: j,
    maxHeight: j,
    top: j,
    right: j,
    bottom: j,
    left: j,
    padding: j,
    paddingTop: j,
    paddingRight: j,
    paddingBottom: j,
    paddingLeft: j,
    margin: j,
    marginTop: j,
    marginRight: j,
    marginBottom: j,
    marginLeft: j,
    backgroundPositionX: j,
    backgroundPositionY: j,
    ...Px,
    zIndex: Id,
    fillOpacity: di,
    strokeOpacity: di,
    numOctaves: Id,
  },
  Tx = {
    ...Ku,
    color: re,
    backgroundColor: re,
    outlineColor: re,
    fill: re,
    stroke: re,
    borderColor: re,
    borderTopColor: re,
    borderRightColor: re,
    borderBottomColor: re,
    borderLeftColor: re,
    filter: hl,
    WebkitFilter: hl,
  },
  Xm = (e) => Tx[e];
function Zm(e, t) {
  let n = Xm(e);
  return (
    n !== hl && (n = Qt),
    n.getAnimatableNone ? n.getAnimatableNone(t) : void 0
  );
}
const Ex = new Set(['auto', 'none', '0']);
function Rx(e, t, n) {
  let r = 0,
    i;
  for (; r < e.length && !i; ) {
    const o = e[r];
    (typeof o == 'string' && !Ex.has(o) && fi(o).values.length && (i = e[r]),
      r++);
  }
  if (i && n) for (const o of t) e[o] = Zm(n, i);
}
class Mx extends bu {
  constructor(t, n, r, i, o) {
    super(t, n, r, i, o, !0);
  }
  readKeyframes() {
    const { unresolvedKeyframes: t, element: n, name: r } = this;
    if (!n || !n.current) return;
    super.readKeyframes();
    for (let l = 0; l < t.length; l++) {
      let u = t[l];
      if (typeof u == 'string' && ((u = u.trim()), Fu(u))) {
        const c = Km(u, n.current);
        (c !== void 0 && (t[l] = c),
          l === t.length - 1 && (this.finalKeyframe = u));
      }
    }
    if ((this.resolveNoneKeyframes(), !Gm.has(r) || t.length !== 2)) return;
    const [i, o] = t,
      s = Vd(i),
      a = Vd(o);
    if (s !== a)
      if (Ad(s) && Ad(a))
        for (let l = 0; l < t.length; l++) {
          const u = t[l];
          typeof u == 'string' && (t[l] = parseFloat(u));
        }
      else gn[r] && (this.needsMeasurement = !0);
  }
  resolveNoneKeyframes() {
    const { unresolvedKeyframes: t, name: n } = this,
      r = [];
    for (let i = 0; i < t.length; i++) (t[i] === null || xx(t[i])) && r.push(i);
    r.length && Rx(t, r, n);
  }
  measureInitialState() {
    const { element: t, unresolvedKeyframes: n, name: r } = this;
    if (!t || !t.current) return;
    (r === 'height' && (this.suspendedScrollY = window.pageYOffset),
      (this.measuredOrigin = gn[r](
        t.measureViewportBox(),
        window.getComputedStyle(t.current)
      )),
      (n[0] = this.measuredOrigin));
    const i = n[n.length - 1];
    i !== void 0 && t.getValue(r, i).jump(i, !1);
  }
  measureEndState() {
    var a;
    const { element: t, name: n, unresolvedKeyframes: r } = this;
    if (!t || !t.current) return;
    const i = t.getValue(n);
    i && i.jump(this.measuredOrigin, !1);
    const o = r.length - 1,
      s = r[o];
    ((r[o] = gn[n](t.measureViewportBox(), window.getComputedStyle(t.current))),
      s !== null && this.finalKeyframe === void 0 && (this.finalKeyframe = s),
      (a = this.removedTransforms) != null &&
        a.length &&
        this.removedTransforms.forEach(([l, u]) => {
          t.getValue(l).set(u);
        }),
      this.resolveNoneKeyframes());
  }
}
function Lx(e, t, n) {
  if (e instanceof EventTarget) return [e];
  if (typeof e == 'string') {
    let r = document;
    t && (r = t.current);
    const i = (n == null ? void 0 : n[e]) ?? r.querySelectorAll(e);
    return i ? Array.from(i) : [];
  }
  return Array.from(e);
}
const Jm = (e, t) => (t && typeof e == 'number' ? t.transform(e) : e);
function qm(e) {
  return mm(e) && 'offsetHeight' in e;
}
const Fd = 30,
  Ax = (e) => !isNaN(parseFloat(e));
class Nx {
  constructor(t, n = {}) {
    ((this.canTrackVelocity = null),
      (this.events = {}),
      (this.updateAndNotify = (r, i = !0) => {
        var s, a;
        const o = Re.now();
        if (
          (this.updatedAt !== o && this.setPrevFrameValue(),
          (this.prev = this.current),
          this.setCurrent(r),
          this.current !== this.prev &&
            ((s = this.events.change) == null || s.notify(this.current),
            this.dependents))
        )
          for (const l of this.dependents) l.dirty();
        i &&
          ((a = this.events.renderRequest) == null || a.notify(this.current));
      }),
      (this.hasAnimated = !1),
      this.setCurrent(t),
      (this.owner = n.owner));
  }
  setCurrent(t) {
    ((this.current = t),
      (this.updatedAt = Re.now()),
      this.canTrackVelocity === null &&
        t !== void 0 &&
        (this.canTrackVelocity = Ax(this.current)));
  }
  setPrevFrameValue(t = this.current) {
    ((this.prevFrameValue = t), (this.prevUpdatedAt = this.updatedAt));
  }
  onChange(t) {
    return this.on('change', t);
  }
  on(t, n) {
    this.events[t] || (this.events[t] = new ju());
    const r = this.events[t].add(n);
    return t === 'change'
      ? () => {
          (r(),
            H.read(() => {
              this.events.change.getSize() || this.stop();
            }));
        }
      : r;
  }
  clearListeners() {
    for (const t in this.events) this.events[t].clear();
  }
  attach(t, n) {
    ((this.passiveEffect = t), (this.stopPassiveEffect = n));
  }
  set(t, n = !0) {
    !n || !this.passiveEffect
      ? this.updateAndNotify(t, n)
      : this.passiveEffect(t, this.updateAndNotify);
  }
  setWithVelocity(t, n, r) {
    (this.set(n),
      (this.prev = void 0),
      (this.prevFrameValue = t),
      (this.prevUpdatedAt = this.updatedAt - r));
  }
  jump(t, n = !0) {
    (this.updateAndNotify(t),
      (this.prev = t),
      (this.prevUpdatedAt = this.prevFrameValue = void 0),
      n && this.stop(),
      this.stopPassiveEffect && this.stopPassiveEffect());
  }
  dirty() {
    var t;
    (t = this.events.change) == null || t.notify(this.current);
  }
  addDependent(t) {
    (this.dependents || (this.dependents = new Set()), this.dependents.add(t));
  }
  removeDependent(t) {
    this.dependents && this.dependents.delete(t);
  }
  get() {
    return this.current;
  }
  getPrevious() {
    return this.prev;
  }
  getVelocity() {
    const t = Re.now();
    if (
      !this.canTrackVelocity ||
      this.prevFrameValue === void 0 ||
      t - this.updatedAt > Fd
    )
      return 0;
    const n = Math.min(this.updatedAt - this.prevUpdatedAt, Fd);
    return ym(parseFloat(this.current) - parseFloat(this.prevFrameValue), n);
  }
  start(t) {
    return (
      this.stop(),
      new Promise((n) => {
        ((this.hasAnimated = !0),
          (this.animation = t(n)),
          this.events.animationStart && this.events.animationStart.notify());
      }).then(() => {
        (this.events.animationComplete &&
          this.events.animationComplete.notify(),
          this.clearAnimation());
      })
    );
  }
  stop() {
    (this.animation &&
      (this.animation.stop(),
      this.events.animationCancel && this.events.animationCancel.notify()),
      this.clearAnimation());
  }
  isAnimating() {
    return !!this.animation;
  }
  clearAnimation() {
    delete this.animation;
  }
  destroy() {
    var t, n;
    ((t = this.dependents) == null || t.clear(),
      (n = this.events.destroy) == null || n.notify(),
      this.clearListeners(),
      this.stop(),
      this.stopPassiveEffect && this.stopPassiveEffect());
  }
}
function ir(e, t) {
  return new Nx(e, t);
}
const { schedule: Gu, cancel: GC } = Mm(queueMicrotask, !1),
  Ye = { x: !1, y: !1 };
function eg() {
  return Ye.x || Ye.y;
}
function jx(e) {
  return e === 'x' || e === 'y'
    ? Ye[e]
      ? null
      : ((Ye[e] = !0),
        () => {
          Ye[e] = !1;
        })
    : Ye.x || Ye.y
      ? null
      : ((Ye.x = Ye.y = !0),
        () => {
          Ye.x = Ye.y = !1;
        });
}
function tg(e, t) {
  const n = Lx(e),
    r = new AbortController(),
    i = { passive: !0, ...t, signal: r.signal };
  return [n, i, () => r.abort()];
}
function _d(e) {
  return !(e.pointerType === 'touch' || eg());
}
function Dx(e, t, n = {}) {
  const [r, i, o] = tg(e, n),
    s = (a) => {
      if (!_d(a)) return;
      const { target: l } = a,
        u = t(l, a);
      if (typeof u != 'function' || !l) return;
      const c = (d) => {
        _d(d) && (u(d), l.removeEventListener('pointerleave', c));
      };
      l.addEventListener('pointerleave', c, i);
    };
  return (
    r.forEach((a) => {
      a.addEventListener('pointerenter', s, i);
    }),
    o
  );
}
const ng = (e, t) => (t ? (e === t ? !0 : ng(e, t.parentElement)) : !1),
  Yu = (e) =>
    e.pointerType === 'mouse'
      ? typeof e.button != 'number' || e.button <= 0
      : e.isPrimary !== !1,
  Vx = new Set(['BUTTON', 'INPUT', 'SELECT', 'TEXTAREA', 'A']);
function Ix(e) {
  return Vx.has(e.tagName) || e.tabIndex !== -1;
}
const mo = new WeakSet();
function Od(e) {
  return (t) => {
    t.key === 'Enter' && e(t);
  };
}
function Zs(e, t) {
  e.dispatchEvent(
    new PointerEvent('pointer' + t, { isPrimary: !0, bubbles: !0 })
  );
}
const Fx = (e, t) => {
  const n = e.currentTarget;
  if (!n) return;
  const r = Od(() => {
    if (mo.has(n)) return;
    Zs(n, 'down');
    const i = Od(() => {
        Zs(n, 'up');
      }),
      o = () => Zs(n, 'cancel');
    (n.addEventListener('keyup', i, t), n.addEventListener('blur', o, t));
  });
  (n.addEventListener('keydown', r, t),
    n.addEventListener('blur', () => n.removeEventListener('keydown', r), t));
};
function Bd(e) {
  return Yu(e) && !eg();
}
function _x(e, t, n = {}) {
  const [r, i, o] = tg(e, n),
    s = (a) => {
      const l = a.currentTarget;
      if (!Bd(a)) return;
      mo.add(l);
      const u = t(l, a),
        c = (g, v) => {
          (window.removeEventListener('pointerup', d),
            window.removeEventListener('pointercancel', f),
            mo.has(l) && mo.delete(l),
            Bd(g) && typeof u == 'function' && u(g, { success: v }));
        },
        d = (g) => {
          c(
            g,
            l === window ||
              l === document ||
              n.useGlobalTarget ||
              ng(l, g.target)
          );
        },
        f = (g) => {
          c(g, !1);
        };
      (window.addEventListener('pointerup', d, i),
        window.addEventListener('pointercancel', f, i));
    };
  return (
    r.forEach((a) => {
      ((n.useGlobalTarget ? window : a).addEventListener('pointerdown', s, i),
        qm(a) &&
          (a.addEventListener('focus', (u) => Fx(u, i)),
          !Ix(a) && !a.hasAttribute('tabindex') && (a.tabIndex = 0)));
    }),
    o
  );
}
function rg(e) {
  return mm(e) && 'ownerSVGElement' in e;
}
function Ox(e) {
  return rg(e) && e.tagName === 'svg';
}
const ve = (e) => !!(e && e.getVelocity),
  Bx = [...Qm, re, Qt],
  zx = (e) => Bx.find(Ym(e)),
  Qu = x.createContext({
    transformPagePoint: (e) => e,
    isStatic: !1,
    reducedMotion: 'never',
  });
class $x extends x.Component {
  getSnapshotBeforeUpdate(t) {
    const n = this.props.childRef.current;
    if (n && t.isPresent && !this.props.isPresent) {
      const r = n.offsetParent,
        i = (qm(r) && r.offsetWidth) || 0,
        o = this.props.sizeRef.current;
      ((o.height = n.offsetHeight || 0),
        (o.width = n.offsetWidth || 0),
        (o.top = n.offsetTop),
        (o.left = n.offsetLeft),
        (o.right = i - o.width - o.left));
    }
    return null;
  }
  componentDidUpdate() {}
  render() {
    return this.props.children;
  }
}
function Ux({ children: e, isPresent: t, anchorX: n, root: r }) {
  const i = x.useId(),
    o = x.useRef(null),
    s = x.useRef({ width: 0, height: 0, top: 0, left: 0, right: 0 }),
    { nonce: a } = x.useContext(Qu);
  return (
    x.useInsertionEffect(() => {
      const { width: l, height: u, top: c, left: d, right: f } = s.current;
      if (t || !o.current || !l || !u) return;
      const g = n === 'left' ? `left: ${d}` : `right: ${f}`;
      o.current.dataset.motionPopId = i;
      const v = document.createElement('style');
      a && (v.nonce = a);
      const y = r ?? document.head;
      return (
        y.appendChild(v),
        v.sheet &&
          v.sheet.insertRule(`
          [data-motion-pop-id="${i}"] {
            position: absolute !important;
            width: ${l}px !important;
            height: ${u}px !important;
            ${g}px !important;
            top: ${c}px !important;
          }
        `),
        () => {
          y.contains(v) && y.removeChild(v);
        }
      );
    }, [t]),
    w.jsx($x, {
      isPresent: t,
      childRef: o,
      sizeRef: s,
      children: x.cloneElement(e, { ref: o }),
    })
  );
}
const Wx = ({
  children: e,
  initial: t,
  isPresent: n,
  onExitComplete: r,
  custom: i,
  presenceAffectsLayout: o,
  mode: s,
  anchorX: a,
  root: l,
}) => {
  const u = Eu(bx),
    c = x.useId();
  let d = !0,
    f = x.useMemo(
      () => (
        (d = !1),
        {
          id: c,
          initial: t,
          isPresent: n,
          custom: i,
          onExitComplete: (g) => {
            u.set(g, !0);
            for (const v of u.values()) if (!v) return;
            r && r();
          },
          register: (g) => (u.set(g, !1), () => u.delete(g)),
        }
      ),
      [n, u, r]
    );
  return (
    o && d && (f = { ...f }),
    x.useMemo(() => {
      u.forEach((g, v) => u.set(v, !1));
    }, [n]),
    x.useEffect(() => {
      !n && !u.size && r && r();
    }, [n]),
    s === 'popLayout' &&
      (e = w.jsx(Ux, { isPresent: n, anchorX: a, root: l, children: e })),
    w.jsx(fs.Provider, { value: f, children: e })
  );
};
function bx() {
  return new Map();
}
function ig(e = !0) {
  const t = x.useContext(fs);
  if (t === null) return [!0, null];
  const { isPresent: n, onExitComplete: r, register: i } = t,
    o = x.useId();
  x.useEffect(() => {
    if (e) return i(o);
  }, [e]);
  const s = x.useCallback(() => e && r && r(o), [o, r, e]);
  return !n && r ? [!1, s] : [!0];
}
const Zi = (e) => e.key || '';
function zd(e) {
  const t = [];
  return (
    x.Children.forEach(e, (n) => {
      x.isValidElement(n) && t.push(n);
    }),
    t
  );
}
const Ar = ({
    children: e,
    custom: t,
    initial: n = !0,
    onExitComplete: r,
    presenceAffectsLayout: i = !0,
    mode: o = 'sync',
    propagate: s = !1,
    anchorX: a = 'left',
    root: l,
  }) => {
    const [u, c] = ig(s),
      d = x.useMemo(() => zd(e), [e]),
      f = s && !u ? [] : d.map(Zi),
      g = x.useRef(!0),
      v = x.useRef(d),
      y = Eu(() => new Map()),
      [S, p] = x.useState(d),
      [h, m] = x.useState(d);
    hm(() => {
      ((g.current = !1), (v.current = d));
      for (let T = 0; T < h.length; T++) {
        const R = Zi(h[T]);
        f.includes(R) ? y.delete(R) : y.get(R) !== !0 && y.set(R, !1);
      }
    }, [h, f.length, f.join('-')]);
    const k = [];
    if (d !== S) {
      let T = [...d];
      for (let R = 0; R < h.length; R++) {
        const E = h[R],
          N = Zi(E);
        f.includes(N) || (T.splice(R, 0, E), k.push(E));
      }
      return (o === 'wait' && k.length && (T = k), m(zd(T)), p(d), null);
    }
    const { forceRender: C } = x.useContext(Tu);
    return w.jsx(w.Fragment, {
      children: h.map((T) => {
        const R = Zi(T),
          E = s && !u ? !1 : d === h || f.includes(R),
          N = () => {
            if (y.has(R)) y.set(R, !0);
            else return;
            let P = !0;
            (y.forEach((D) => {
              D || (P = !1);
            }),
              P &&
                (C == null || C(),
                m(v.current),
                s && (c == null || c()),
                r && r()));
          };
        return w.jsx(
          Wx,
          {
            isPresent: E,
            initial: !g.current || n ? void 0 : !1,
            custom: t,
            presenceAffectsLayout: i,
            mode: o,
            root: l,
            onExitComplete: E ? void 0 : N,
            anchorX: a,
            children: T,
          },
          R
        );
      }),
    });
  },
  og = x.createContext({ strict: !1 }),
  $d = {
    animation: [
      'animate',
      'variants',
      'whileHover',
      'whileTap',
      'exit',
      'whileInView',
      'whileFocus',
      'whileDrag',
    ],
    exit: ['exit'],
    drag: ['drag', 'dragControls'],
    focus: ['whileFocus'],
    hover: ['whileHover', 'onHoverStart', 'onHoverEnd'],
    tap: ['whileTap', 'onTap', 'onTapStart', 'onTapCancel'],
    pan: ['onPan', 'onPanStart', 'onPanSessionStart', 'onPanEnd'],
    inView: ['whileInView', 'onViewportEnter', 'onViewportLeave'],
    layout: ['layout', 'layoutId'],
  },
  or = {};
for (const e in $d) or[e] = { isEnabled: (t) => $d[e].some((n) => !!t[n]) };
function Hx(e) {
  for (const t in e) or[t] = { ...or[t], ...e[t] };
}
const Kx = new Set([
  'animate',
  'exit',
  'variants',
  'initial',
  'style',
  'values',
  'variants',
  'transition',
  'transformTemplate',
  'custom',
  'inherit',
  'onBeforeLayoutMeasure',
  'onAnimationStart',
  'onAnimationComplete',
  'onUpdate',
  'onDragStart',
  'onDrag',
  'onDragEnd',
  'onMeasureDragConstraints',
  'onDirectionLock',
  'onDragTransitionEnd',
  '_dragX',
  '_dragY',
  'onHoverStart',
  'onHoverEnd',
  'onViewportEnter',
  'onViewportLeave',
  'globalTapTarget',
  'ignoreStrict',
  'viewport',
]);
function Ko(e) {
  return (
    e.startsWith('while') ||
    (e.startsWith('drag') && e !== 'draggable') ||
    e.startsWith('layout') ||
    e.startsWith('onTap') ||
    e.startsWith('onPan') ||
    e.startsWith('onLayout') ||
    Kx.has(e)
  );
}
let sg = (e) => !Ko(e);
function Gx(e) {
  typeof e == 'function' && (sg = (t) => (t.startsWith('on') ? !Ko(t) : e(t)));
}
try {
  Gx(require('@emotion/is-prop-valid').default);
} catch {}
function Yx(e, t, n) {
  const r = {};
  for (const i in e)
    (i === 'values' && typeof e.values == 'object') ||
      ((sg(i) ||
        (n === !0 && Ko(i)) ||
        (!t && !Ko(i)) ||
        (e.draggable && i.startsWith('onDrag'))) &&
        (r[i] = e[i]));
  return r;
}
const hs = x.createContext({});
function ps(e) {
  return e !== null && typeof e == 'object' && typeof e.start == 'function';
}
function hi(e) {
  return typeof e == 'string' || Array.isArray(e);
}
const Xu = [
    'animate',
    'whileInView',
    'whileFocus',
    'whileHover',
    'whileTap',
    'whileDrag',
    'exit',
  ],
  Zu = ['initial', ...Xu];
function ms(e) {
  return ps(e.animate) || Zu.some((t) => hi(e[t]));
}
function ag(e) {
  return !!(ms(e) || e.variants);
}
function Qx(e, t) {
  if (ms(e)) {
    const { initial: n, animate: r } = e;
    return {
      initial: n === !1 || hi(n) ? n : void 0,
      animate: hi(r) ? r : void 0,
    };
  }
  return e.inherit !== !1 ? t : {};
}
function Xx(e) {
  const { initial: t, animate: n } = Qx(e, x.useContext(hs));
  return x.useMemo(() => ({ initial: t, animate: n }), [Ud(t), Ud(n)]);
}
function Ud(e) {
  return Array.isArray(e) ? e.join(' ') : e;
}
const pi = {};
function Zx(e) {
  for (const t in e) ((pi[t] = e[t]), Iu(t) && (pi[t].isCSSVariable = !0));
}
function lg(e, { layout: t, layoutId: n }) {
  return (
    hr.has(e) ||
    e.startsWith('origin') ||
    ((t || n !== void 0) && (!!pi[e] || e === 'opacity'))
  );
}
const Jx = {
    x: 'translateX',
    y: 'translateY',
    z: 'translateZ',
    transformPerspective: 'perspective',
  },
  qx = fr.length;
function eS(e, t, n) {
  let r = '',
    i = !0;
  for (let o = 0; o < qx; o++) {
    const s = fr[o],
      a = e[s];
    if (a === void 0) continue;
    let l = !0;
    if (
      (typeof a == 'number'
        ? (l = a === (s.startsWith('scale') ? 1 : 0))
        : (l = parseFloat(a) === 0),
      !l || n)
    ) {
      const u = Jm(a, Ku[s]);
      if (!l) {
        i = !1;
        const c = Jx[s] || s;
        r += `${c}(${u}) `;
      }
      n && (t[s] = u);
    }
  }
  return ((r = r.trim()), n ? (r = n(t, i ? '' : r)) : i && (r = 'none'), r);
}
function Ju(e, t, n) {
  const { style: r, vars: i, transformOrigin: o } = e;
  let s = !1,
    a = !1;
  for (const l in t) {
    const u = t[l];
    if (hr.has(l)) {
      s = !0;
      continue;
    } else if (Iu(l)) {
      i[l] = u;
      continue;
    } else {
      const c = Jm(u, Ku[l]);
      l.startsWith('origin') ? ((a = !0), (o[l] = c)) : (r[l] = c);
    }
  }
  if (
    (t.transform ||
      (s || n
        ? (r.transform = eS(t, e.transform, n))
        : r.transform && (r.transform = 'none')),
    a)
  ) {
    const { originX: l = '50%', originY: u = '50%', originZ: c = 0 } = o;
    r.transformOrigin = `${l} ${u} ${c}`;
  }
}
const qu = () => ({ style: {}, transform: {}, transformOrigin: {}, vars: {} });
function ug(e, t, n) {
  for (const r in t) !ve(t[r]) && !lg(r, n) && (e[r] = t[r]);
}
function tS({ transformTemplate: e }, t) {
  return x.useMemo(() => {
    const n = qu();
    return (Ju(n, t, e), Object.assign({}, n.vars, n.style));
  }, [t]);
}
function nS(e, t) {
  const n = e.style || {},
    r = {};
  return (ug(r, n, e), Object.assign(r, tS(e, t)), r);
}
function rS(e, t) {
  const n = {},
    r = nS(e, t);
  return (
    e.drag &&
      e.dragListener !== !1 &&
      ((n.draggable = !1),
      (r.userSelect = r.WebkitUserSelect = r.WebkitTouchCallout = 'none'),
      (r.touchAction =
        e.drag === !0 ? 'none' : `pan-${e.drag === 'x' ? 'y' : 'x'}`)),
    e.tabIndex === void 0 &&
      (e.onTap || e.onTapStart || e.whileTap) &&
      (n.tabIndex = 0),
    (n.style = r),
    n
  );
}
const iS = { offset: 'stroke-dashoffset', array: 'stroke-dasharray' },
  oS = { offset: 'strokeDashoffset', array: 'strokeDasharray' };
function sS(e, t, n = 1, r = 0, i = !0) {
  e.pathLength = 1;
  const o = i ? iS : oS;
  e[o.offset] = j.transform(-r);
  const s = j.transform(t),
    a = j.transform(n);
  e[o.array] = `${s} ${a}`;
}
function cg(
  e,
  {
    attrX: t,
    attrY: n,
    attrScale: r,
    pathLength: i,
    pathSpacing: o = 1,
    pathOffset: s = 0,
    ...a
  },
  l,
  u,
  c
) {
  if ((Ju(e, a, u), l)) {
    e.style.viewBox && (e.attrs.viewBox = e.style.viewBox);
    return;
  }
  ((e.attrs = e.style), (e.style = {}));
  const { attrs: d, style: f } = e;
  (d.transform && ((f.transform = d.transform), delete d.transform),
    (f.transform || d.transformOrigin) &&
      ((f.transformOrigin = d.transformOrigin ?? '50% 50%'),
      delete d.transformOrigin),
    f.transform &&
      ((f.transformBox = (c == null ? void 0 : c.transformBox) ?? 'fill-box'),
      delete d.transformBox),
    t !== void 0 && (d.x = t),
    n !== void 0 && (d.y = n),
    r !== void 0 && (d.scale = r),
    i !== void 0 && sS(d, i, o, s, !1));
}
const dg = () => ({ ...qu(), attrs: {} }),
  fg = (e) => typeof e == 'string' && e.toLowerCase() === 'svg';
function aS(e, t, n, r) {
  const i = x.useMemo(() => {
    const o = dg();
    return (
      cg(o, t, fg(r), e.transformTemplate, e.style),
      { ...o.attrs, style: { ...o.style } }
    );
  }, [t]);
  if (e.style) {
    const o = {};
    (ug(o, e.style, e), (i.style = { ...o, ...i.style }));
  }
  return i;
}
const lS = [
  'animate',
  'circle',
  'defs',
  'desc',
  'ellipse',
  'g',
  'image',
  'line',
  'filter',
  'marker',
  'mask',
  'metadata',
  'path',
  'pattern',
  'polygon',
  'polyline',
  'rect',
  'stop',
  'switch',
  'symbol',
  'svg',
  'text',
  'tspan',
  'use',
  'view',
];
function ec(e) {
  return typeof e != 'string' || e.includes('-')
    ? !1
    : !!(lS.indexOf(e) > -1 || /[A-Z]/u.test(e));
}
function uS(e, t, n, { latestValues: r }, i, o = !1) {
  const a = (ec(e) ? aS : rS)(t, r, i, e),
    l = Yx(t, typeof e == 'string', o),
    u = e !== x.Fragment ? { ...l, ...a, ref: n } : {},
    { children: c } = t,
    d = x.useMemo(() => (ve(c) ? c.get() : c), [c]);
  return x.createElement(e, { ...u, children: d });
}
function Wd(e) {
  const t = [{}, {}];
  return (
    e == null ||
      e.values.forEach((n, r) => {
        ((t[0][r] = n.get()), (t[1][r] = n.getVelocity()));
      }),
    t
  );
}
function tc(e, t, n, r) {
  if (typeof t == 'function') {
    const [i, o] = Wd(r);
    t = t(n !== void 0 ? n : e.custom, i, o);
  }
  if (
    (typeof t == 'string' && (t = e.variants && e.variants[t]),
    typeof t == 'function')
  ) {
    const [i, o] = Wd(r);
    t = t(n !== void 0 ? n : e.custom, i, o);
  }
  return t;
}
function go(e) {
  return ve(e) ? e.get() : e;
}
function cS({ scrapeMotionValuesFromProps: e, createRenderState: t }, n, r, i) {
  return { latestValues: dS(n, r, i, e), renderState: t() };
}
function dS(e, t, n, r) {
  const i = {},
    o = r(e, {});
  for (const f in o) i[f] = go(o[f]);
  let { initial: s, animate: a } = e;
  const l = ms(e),
    u = ag(e);
  t &&
    u &&
    !l &&
    e.inherit !== !1 &&
    (s === void 0 && (s = t.initial), a === void 0 && (a = t.animate));
  let c = n ? n.initial === !1 : !1;
  c = c || s === !1;
  const d = c ? a : s;
  if (d && typeof d != 'boolean' && !ps(d)) {
    const f = Array.isArray(d) ? d : [d];
    for (let g = 0; g < f.length; g++) {
      const v = tc(e, f[g]);
      if (v) {
        const { transitionEnd: y, transition: S, ...p } = v;
        for (const h in p) {
          let m = p[h];
          if (Array.isArray(m)) {
            const k = c ? m.length - 1 : 0;
            m = m[k];
          }
          m !== null && (i[h] = m);
        }
        for (const h in y) i[h] = y[h];
      }
    }
  }
  return i;
}
const hg = (e) => (t, n) => {
  const r = x.useContext(hs),
    i = x.useContext(fs),
    o = () => cS(e, t, r, i);
  return n ? o() : Eu(o);
};
function nc(e, t, n) {
  var o;
  const { style: r } = e,
    i = {};
  for (const s in r)
    (ve(r[s]) ||
      (t.style && ve(t.style[s])) ||
      lg(s, e) ||
      ((o = n == null ? void 0 : n.getValue(s)) == null
        ? void 0
        : o.liveStyle) !== void 0) &&
      (i[s] = r[s]);
  return i;
}
const fS = hg({ scrapeMotionValuesFromProps: nc, createRenderState: qu });
function pg(e, t, n) {
  const r = nc(e, t, n);
  for (const i in e)
    if (ve(e[i]) || ve(t[i])) {
      const o =
        fr.indexOf(i) !== -1
          ? 'attr' + i.charAt(0).toUpperCase() + i.substring(1)
          : i;
      r[o] = e[i];
    }
  return r;
}
const hS = hg({ scrapeMotionValuesFromProps: pg, createRenderState: dg }),
  pS = Symbol.for('motionComponentSymbol');
function $n(e) {
  return (
    e &&
    typeof e == 'object' &&
    Object.prototype.hasOwnProperty.call(e, 'current')
  );
}
function mS(e, t, n) {
  return x.useCallback(
    (r) => {
      (r && e.onMount && e.onMount(r),
        t && (r ? t.mount(r) : t.unmount()),
        n && (typeof n == 'function' ? n(r) : $n(n) && (n.current = r)));
    },
    [t]
  );
}
const rc = (e) => e.replace(/([a-z])([A-Z])/gu, '$1-$2').toLowerCase(),
  gS = 'framerAppearId',
  mg = 'data-' + rc(gS),
  gg = x.createContext({});
function yS(e, t, n, r, i) {
  var y, S;
  const { visualElement: o } = x.useContext(hs),
    s = x.useContext(og),
    a = x.useContext(fs),
    l = x.useContext(Qu).reducedMotion,
    u = x.useRef(null);
  ((r = r || s.renderer),
    !u.current &&
      r &&
      (u.current = r(e, {
        visualState: t,
        parent: o,
        props: n,
        presenceContext: a,
        blockInitialAnimation: a ? a.initial === !1 : !1,
        reducedMotionConfig: l,
      })));
  const c = u.current,
    d = x.useContext(gg);
  c &&
    !c.projection &&
    i &&
    (c.type === 'html' || c.type === 'svg') &&
    vS(u.current, n, i, d);
  const f = x.useRef(!1);
  x.useInsertionEffect(() => {
    c && f.current && c.update(n, a);
  });
  const g = n[mg],
    v = x.useRef(
      !!g &&
        !((y = window.MotionHandoffIsComplete) != null && y.call(window, g)) &&
        ((S = window.MotionHasOptimisedAnimation) == null
          ? void 0
          : S.call(window, g))
    );
  return (
    hm(() => {
      c &&
        ((f.current = !0),
        (window.MotionIsMounted = !0),
        c.updateFeatures(),
        c.scheduleRenderMicrotask(),
        v.current && c.animationState && c.animationState.animateChanges());
    }),
    x.useEffect(() => {
      c &&
        (!v.current && c.animationState && c.animationState.animateChanges(),
        v.current &&
          (queueMicrotask(() => {
            var p;
            (p = window.MotionHandoffMarkAsComplete) == null ||
              p.call(window, g);
          }),
          (v.current = !1)));
    }),
    c
  );
}
function vS(e, t, n, r) {
  const {
    layoutId: i,
    layout: o,
    drag: s,
    dragConstraints: a,
    layoutScroll: l,
    layoutRoot: u,
    layoutCrossfade: c,
  } = t;
  ((e.projection = new n(
    e.latestValues,
    t['data-framer-portal-id'] ? void 0 : yg(e.parent)
  )),
    e.projection.setOptions({
      layoutId: i,
      layout: o,
      alwaysMeasureLayout: !!s || (a && $n(a)),
      visualElement: e,
      animationType: typeof o == 'string' ? o : 'both',
      initialPromotionConfig: r,
      crossfade: c,
      layoutScroll: l,
      layoutRoot: u,
    }));
}
function yg(e) {
  if (e) return e.options.allowProjection !== !1 ? e.projection : yg(e.parent);
}
function Js(e, { forwardMotionProps: t = !1 } = {}, n, r) {
  n && Hx(n);
  const i = ec(e) ? hS : fS;
  function o(a, l) {
    let u;
    const c = { ...x.useContext(Qu), ...a, layoutId: wS(a) },
      { isStatic: d } = c,
      f = Xx(a),
      g = i(a, d);
    if (!d && Ru) {
      xS();
      const v = SS(c);
      ((u = v.MeasureLayout),
        (f.visualElement = yS(e, g, c, r, v.ProjectionNode)));
    }
    return w.jsxs(hs.Provider, {
      value: f,
      children: [
        u && f.visualElement
          ? w.jsx(u, { visualElement: f.visualElement, ...c })
          : null,
        uS(e, a, mS(g, f.visualElement, l), g, d, t),
      ],
    });
  }
  o.displayName = `motion.${typeof e == 'string' ? e : `create(${e.displayName ?? e.name ?? ''})`}`;
  const s = x.forwardRef(o);
  return ((s[pS] = e), s);
}
function wS({ layoutId: e }) {
  const t = x.useContext(Tu).id;
  return t && e !== void 0 ? t + '-' + e : e;
}
function xS(e, t) {
  x.useContext(og).strict;
}
function SS(e) {
  const { drag: t, layout: n } = or;
  if (!t && !n) return {};
  const r = { ...t, ...n };
  return {
    MeasureLayout:
      (t != null && t.isEnabled(e)) || (n != null && n.isEnabled(e))
        ? r.MeasureLayout
        : void 0,
    ProjectionNode: r.ProjectionNode,
  };
}
function kS(e, t) {
  if (typeof Proxy > 'u') return Js;
  const n = new Map(),
    r = (o, s) => Js(o, s, e, t),
    i = (o, s) => r(o, s);
  return new Proxy(i, {
    get: (o, s) =>
      s === 'create'
        ? r
        : (n.has(s) || n.set(s, Js(s, void 0, e, t)), n.get(s)),
  });
}
function vg({ top: e, left: t, right: n, bottom: r }) {
  return { x: { min: t, max: n }, y: { min: e, max: r } };
}
function CS({ x: e, y: t }) {
  return { top: t.min, right: e.max, bottom: t.max, left: e.min };
}
function PS(e, t) {
  if (!t) return e;
  const n = t({ x: e.left, y: e.top }),
    r = t({ x: e.right, y: e.bottom });
  return { top: n.y, left: n.x, bottom: r.y, right: r.x };
}
function qs(e) {
  return e === void 0 || e === 1;
}
function pl({ scale: e, scaleX: t, scaleY: n }) {
  return !qs(e) || !qs(t) || !qs(n);
}
function ln(e) {
  return (
    pl(e) ||
    wg(e) ||
    e.z ||
    e.rotate ||
    e.rotateX ||
    e.rotateY ||
    e.skewX ||
    e.skewY
  );
}
function wg(e) {
  return bd(e.x) || bd(e.y);
}
function bd(e) {
  return e && e !== '0%';
}
function Go(e, t, n) {
  const r = e - n,
    i = t * r;
  return n + i;
}
function Hd(e, t, n, r, i) {
  return (i !== void 0 && (e = Go(e, i, r)), Go(e, n, r) + t);
}
function ml(e, t = 0, n = 1, r, i) {
  ((e.min = Hd(e.min, t, n, r, i)), (e.max = Hd(e.max, t, n, r, i)));
}
function xg(e, { x: t, y: n }) {
  (ml(e.x, t.translate, t.scale, t.originPoint),
    ml(e.y, n.translate, n.scale, n.originPoint));
}
const Kd = 0.999999999999,
  Gd = 1.0000000000001;
function TS(e, t, n, r = !1) {
  const i = n.length;
  if (!i) return;
  t.x = t.y = 1;
  let o, s;
  for (let a = 0; a < i; a++) {
    ((o = n[a]), (s = o.projectionDelta));
    const { visualElement: l } = o.options;
    (l && l.props.style && l.props.style.display === 'contents') ||
      (r &&
        o.options.layoutScroll &&
        o.scroll &&
        o !== o.root &&
        Wn(e, { x: -o.scroll.offset.x, y: -o.scroll.offset.y }),
      s && ((t.x *= s.x.scale), (t.y *= s.y.scale), xg(e, s)),
      r && ln(o.latestValues) && Wn(e, o.latestValues));
  }
  (t.x < Gd && t.x > Kd && (t.x = 1), t.y < Gd && t.y > Kd && (t.y = 1));
}
function Un(e, t) {
  ((e.min = e.min + t), (e.max = e.max + t));
}
function Yd(e, t, n, r, i = 0.5) {
  const o = Q(e.min, e.max, i);
  ml(e, t, n, o, r);
}
function Wn(e, t) {
  (Yd(e.x, t.x, t.scaleX, t.scale, t.originX),
    Yd(e.y, t.y, t.scaleY, t.scale, t.originY));
}
function Sg(e, t) {
  return vg(PS(e.getBoundingClientRect(), t));
}
function ES(e, t, n) {
  const r = Sg(e, n),
    { scroll: i } = t;
  return (i && (Un(r.x, i.offset.x), Un(r.y, i.offset.y)), r);
}
const Qd = () => ({ translate: 0, scale: 1, origin: 0, originPoint: 0 }),
  bn = () => ({ x: Qd(), y: Qd() }),
  Xd = () => ({ min: 0, max: 0 }),
  te = () => ({ x: Xd(), y: Xd() }),
  gl = { current: null },
  kg = { current: !1 };
function RS() {
  if (((kg.current = !0), !!Ru))
    if (window.matchMedia) {
      const e = window.matchMedia('(prefers-reduced-motion)'),
        t = () => (gl.current = e.matches);
      (e.addEventListener('change', t), t());
    } else gl.current = !1;
}
const MS = new WeakMap();
function LS(e, t, n) {
  for (const r in t) {
    const i = t[r],
      o = n[r];
    if (ve(i)) e.addValue(r, i);
    else if (ve(o)) e.addValue(r, ir(i, { owner: e }));
    else if (o !== i)
      if (e.hasValue(r)) {
        const s = e.getValue(r);
        s.liveStyle === !0 ? s.jump(i) : s.hasAnimated || s.set(i);
      } else {
        const s = e.getStaticValue(r);
        e.addValue(r, ir(s !== void 0 ? s : i, { owner: e }));
      }
  }
  for (const r in n) t[r] === void 0 && e.removeValue(r);
  return t;
}
const Zd = [
  'AnimationStart',
  'AnimationComplete',
  'Update',
  'BeforeLayoutMeasure',
  'LayoutMeasure',
  'LayoutAnimationStart',
  'LayoutAnimationComplete',
];
class AS {
  scrapeMotionValuesFromProps(t, n, r) {
    return {};
  }
  constructor(
    {
      parent: t,
      props: n,
      presenceContext: r,
      reducedMotionConfig: i,
      blockInitialAnimation: o,
      visualState: s,
    },
    a = {}
  ) {
    ((this.current = null),
      (this.children = new Set()),
      (this.isVariantNode = !1),
      (this.isControllingVariants = !1),
      (this.shouldReduceMotion = null),
      (this.values = new Map()),
      (this.KeyframeResolver = bu),
      (this.features = {}),
      (this.valueSubscriptions = new Map()),
      (this.prevMotionValues = {}),
      (this.events = {}),
      (this.propEventSubscriptions = {}),
      (this.notifyUpdate = () => this.notify('Update', this.latestValues)),
      (this.render = () => {
        this.current &&
          (this.triggerBuild(),
          this.renderInstance(
            this.current,
            this.renderState,
            this.props.style,
            this.projection
          ));
      }),
      (this.renderScheduledAt = 0),
      (this.scheduleRender = () => {
        const f = Re.now();
        this.renderScheduledAt < f &&
          ((this.renderScheduledAt = f), H.render(this.render, !1, !0));
      }));
    const { latestValues: l, renderState: u } = s;
    ((this.latestValues = l),
      (this.baseTarget = { ...l }),
      (this.initialValues = n.initial ? { ...l } : {}),
      (this.renderState = u),
      (this.parent = t),
      (this.props = n),
      (this.presenceContext = r),
      (this.depth = t ? t.depth + 1 : 0),
      (this.reducedMotionConfig = i),
      (this.options = a),
      (this.blockInitialAnimation = !!o),
      (this.isControllingVariants = ms(n)),
      (this.isVariantNode = ag(n)),
      this.isVariantNode && (this.variantChildren = new Set()),
      (this.manuallyAnimateOnMount = !!(t && t.current)));
    const { willChange: c, ...d } = this.scrapeMotionValuesFromProps(
      n,
      {},
      this
    );
    for (const f in d) {
      const g = d[f];
      l[f] !== void 0 && ve(g) && g.set(l[f], !1);
    }
  }
  mount(t) {
    ((this.current = t),
      MS.set(t, this),
      this.projection && !this.projection.instance && this.projection.mount(t),
      this.parent &&
        this.isVariantNode &&
        !this.isControllingVariants &&
        (this.removeFromVariantTree = this.parent.addVariantChild(this)),
      this.values.forEach((n, r) => this.bindToMotionValue(r, n)),
      kg.current || RS(),
      (this.shouldReduceMotion =
        this.reducedMotionConfig === 'never'
          ? !1
          : this.reducedMotionConfig === 'always'
            ? !0
            : gl.current),
      this.parent && this.parent.children.add(this),
      this.update(this.props, this.presenceContext));
  }
  unmount() {
    (this.projection && this.projection.unmount(),
      Yt(this.notifyUpdate),
      Yt(this.render),
      this.valueSubscriptions.forEach((t) => t()),
      this.valueSubscriptions.clear(),
      this.removeFromVariantTree && this.removeFromVariantTree(),
      this.parent && this.parent.children.delete(this));
    for (const t in this.events) this.events[t].clear();
    for (const t in this.features) {
      const n = this.features[t];
      n && (n.unmount(), (n.isMounted = !1));
    }
    this.current = null;
  }
  bindToMotionValue(t, n) {
    this.valueSubscriptions.has(t) && this.valueSubscriptions.get(t)();
    const r = hr.has(t);
    r && this.onBindTransform && this.onBindTransform();
    const i = n.on('change', (a) => {
        ((this.latestValues[t] = a),
          this.props.onUpdate && H.preRender(this.notifyUpdate),
          r && this.projection && (this.projection.isTransformDirty = !0));
      }),
      o = n.on('renderRequest', this.scheduleRender);
    let s;
    (window.MotionCheckAppearSync &&
      (s = window.MotionCheckAppearSync(this, t, n)),
      this.valueSubscriptions.set(t, () => {
        (i(), o(), s && s(), n.owner && n.stop());
      }));
  }
  sortNodePosition(t) {
    return !this.current ||
      !this.sortInstanceNodePosition ||
      this.type !== t.type
      ? 0
      : this.sortInstanceNodePosition(this.current, t.current);
  }
  updateFeatures() {
    let t = 'animation';
    for (t in or) {
      const n = or[t];
      if (!n) continue;
      const { isEnabled: r, Feature: i } = n;
      if (
        (!this.features[t] &&
          i &&
          r(this.props) &&
          (this.features[t] = new i(this)),
        this.features[t])
      ) {
        const o = this.features[t];
        o.isMounted ? o.update() : (o.mount(), (o.isMounted = !0));
      }
    }
  }
  triggerBuild() {
    this.build(this.renderState, this.latestValues, this.props);
  }
  measureViewportBox() {
    return this.current
      ? this.measureInstanceViewportBox(this.current, this.props)
      : te();
  }
  getStaticValue(t) {
    return this.latestValues[t];
  }
  setStaticValue(t, n) {
    this.latestValues[t] = n;
  }
  update(t, n) {
    ((t.transformTemplate || this.props.transformTemplate) &&
      this.scheduleRender(),
      (this.prevProps = this.props),
      (this.props = t),
      (this.prevPresenceContext = this.presenceContext),
      (this.presenceContext = n));
    for (let r = 0; r < Zd.length; r++) {
      const i = Zd[r];
      this.propEventSubscriptions[i] &&
        (this.propEventSubscriptions[i](),
        delete this.propEventSubscriptions[i]);
      const o = 'on' + i,
        s = t[o];
      s && (this.propEventSubscriptions[i] = this.on(i, s));
    }
    ((this.prevMotionValues = LS(
      this,
      this.scrapeMotionValuesFromProps(t, this.prevProps, this),
      this.prevMotionValues
    )),
      this.handleChildMotionValue && this.handleChildMotionValue());
  }
  getProps() {
    return this.props;
  }
  getVariant(t) {
    return this.props.variants ? this.props.variants[t] : void 0;
  }
  getDefaultTransition() {
    return this.props.transition;
  }
  getTransformPagePoint() {
    return this.props.transformPagePoint;
  }
  getClosestVariantNode() {
    return this.isVariantNode
      ? this
      : this.parent
        ? this.parent.getClosestVariantNode()
        : void 0;
  }
  addVariantChild(t) {
    const n = this.getClosestVariantNode();
    if (n)
      return (
        n.variantChildren && n.variantChildren.add(t),
        () => n.variantChildren.delete(t)
      );
  }
  addValue(t, n) {
    const r = this.values.get(t);
    n !== r &&
      (r && this.removeValue(t),
      this.bindToMotionValue(t, n),
      this.values.set(t, n),
      (this.latestValues[t] = n.get()));
  }
  removeValue(t) {
    this.values.delete(t);
    const n = this.valueSubscriptions.get(t);
    (n && (n(), this.valueSubscriptions.delete(t)),
      delete this.latestValues[t],
      this.removeValueFromRenderState(t, this.renderState));
  }
  hasValue(t) {
    return this.values.has(t);
  }
  getValue(t, n) {
    if (this.props.values && this.props.values[t]) return this.props.values[t];
    let r = this.values.get(t);
    return (
      r === void 0 &&
        n !== void 0 &&
        ((r = ir(n === null ? void 0 : n, { owner: this })),
        this.addValue(t, r)),
      r
    );
  }
  readValue(t, n) {
    let r =
      this.latestValues[t] !== void 0 || !this.current
        ? this.latestValues[t]
        : (this.getBaseTargetFromProps(this.props, t) ??
          this.readValueFromInstance(this.current, t, this.options));
    return (
      r != null &&
        (typeof r == 'string' && (pm(r) || gm(r))
          ? (r = parseFloat(r))
          : !zx(r) && Qt.test(n) && (r = Zm(t, n)),
        this.setBaseTarget(t, ve(r) ? r.get() : r)),
      ve(r) ? r.get() : r
    );
  }
  setBaseTarget(t, n) {
    this.baseTarget[t] = n;
  }
  getBaseTarget(t) {
    var o;
    const { initial: n } = this.props;
    let r;
    if (typeof n == 'string' || typeof n == 'object') {
      const s = tc(
        this.props,
        n,
        (o = this.presenceContext) == null ? void 0 : o.custom
      );
      s && (r = s[t]);
    }
    if (n && r !== void 0) return r;
    const i = this.getBaseTargetFromProps(this.props, t);
    return i !== void 0 && !ve(i)
      ? i
      : this.initialValues[t] !== void 0 && r === void 0
        ? void 0
        : this.baseTarget[t];
  }
  on(t, n) {
    return (
      this.events[t] || (this.events[t] = new ju()),
      this.events[t].add(n)
    );
  }
  notify(t, ...n) {
    this.events[t] && this.events[t].notify(...n);
  }
  scheduleRenderMicrotask() {
    Gu.render(this.render);
  }
}
class Cg extends AS {
  constructor() {
    (super(...arguments), (this.KeyframeResolver = Mx));
  }
  sortInstanceNodePosition(t, n) {
    return t.compareDocumentPosition(n) & 2 ? 1 : -1;
  }
  getBaseTargetFromProps(t, n) {
    return t.style ? t.style[n] : void 0;
  }
  removeValueFromRenderState(t, { vars: n, style: r }) {
    (delete n[t], delete r[t]);
  }
  handleChildMotionValue() {
    this.childSubscription &&
      (this.childSubscription(), delete this.childSubscription);
    const { children: t } = this.props;
    ve(t) &&
      (this.childSubscription = t.on('change', (n) => {
        this.current && (this.current.textContent = `${n}`);
      }));
  }
}
function Pg(e, { style: t, vars: n }, r, i) {
  const o = e.style;
  let s;
  for (s in t) o[s] = t[s];
  i == null || i.applyProjectionStyles(o, r);
  for (s in n) o.setProperty(s, n[s]);
}
function NS(e) {
  return window.getComputedStyle(e);
}
class jS extends Cg {
  constructor() {
    (super(...arguments), (this.type = 'html'), (this.renderInstance = Pg));
  }
  readValueFromInstance(t, n) {
    var r;
    if (hr.has(n))
      return (r = this.projection) != null && r.isProjecting ? ll(n) : G1(t, n);
    {
      const i = NS(t),
        o = (Iu(n) ? i.getPropertyValue(n) : i[n]) || 0;
      return typeof o == 'string' ? o.trim() : o;
    }
  }
  measureInstanceViewportBox(t, { transformPagePoint: n }) {
    return Sg(t, n);
  }
  build(t, n, r) {
    Ju(t, n, r.transformTemplate);
  }
  scrapeMotionValuesFromProps(t, n, r) {
    return nc(t, n, r);
  }
}
const Tg = new Set([
  'baseFrequency',
  'diffuseConstant',
  'kernelMatrix',
  'kernelUnitLength',
  'keySplines',
  'keyTimes',
  'limitingConeAngle',
  'markerHeight',
  'markerWidth',
  'numOctaves',
  'targetX',
  'targetY',
  'surfaceScale',
  'specularConstant',
  'specularExponent',
  'stdDeviation',
  'tableValues',
  'viewBox',
  'gradientTransform',
  'pathLength',
  'startOffset',
  'textLength',
  'lengthAdjust',
]);
function DS(e, t, n, r) {
  Pg(e, t, void 0, r);
  for (const i in t.attrs) e.setAttribute(Tg.has(i) ? i : rc(i), t.attrs[i]);
}
class VS extends Cg {
  constructor() {
    (super(...arguments),
      (this.type = 'svg'),
      (this.isSVGTag = !1),
      (this.measureInstanceViewportBox = te));
  }
  getBaseTargetFromProps(t, n) {
    return t[n];
  }
  readValueFromInstance(t, n) {
    if (hr.has(n)) {
      const r = Xm(n);
      return (r && r.default) || 0;
    }
    return ((n = Tg.has(n) ? n : rc(n)), t.getAttribute(n));
  }
  scrapeMotionValuesFromProps(t, n, r) {
    return pg(t, n, r);
  }
  build(t, n, r) {
    cg(t, n, this.isSVGTag, r.transformTemplate, r.style);
  }
  renderInstance(t, n, r, i) {
    DS(t, n, r, i);
  }
  mount(t) {
    ((this.isSVGTag = fg(t.tagName)), super.mount(t));
  }
}
const IS = (e, t) =>
  ec(e) ? new VS(t) : new jS(t, { allowProjection: e !== x.Fragment });
function mi(e, t, n) {
  const r = e.getProps();
  return tc(r, t, n !== void 0 ? n : r.custom, e);
}
const yl = (e) => Array.isArray(e);
function FS(e, t, n) {
  e.hasValue(t) ? e.getValue(t).set(n) : e.addValue(t, ir(n));
}
function _S(e) {
  return yl(e) ? e[e.length - 1] || 0 : e;
}
function OS(e, t) {
  const n = mi(e, t);
  let { transitionEnd: r = {}, transition: i = {}, ...o } = n || {};
  o = { ...o, ...r };
  for (const s in o) {
    const a = _S(o[s]);
    FS(e, s, a);
  }
}
function BS(e) {
  return !!(ve(e) && e.add);
}
function vl(e, t) {
  const n = e.getValue('willChange');
  if (BS(n)) return n.add(t);
  if (!n && Tt.WillChange) {
    const r = new Tt.WillChange('auto');
    (e.addValue('willChange', r), r.add(t));
  }
}
function Eg(e) {
  return e.props[mg];
}
const zS = (e) => e !== null;
function $S(e, { repeat: t, repeatType: n = 'loop' }, r) {
  const i = e.filter(zS),
    o = t && n !== 'loop' && t % 2 === 1 ? 0 : i.length - 1;
  return !o || r === void 0 ? i[o] : r;
}
const US = { type: 'spring', stiffness: 500, damping: 25, restSpeed: 10 },
  WS = (e) => ({
    type: 'spring',
    stiffness: 550,
    damping: e === 0 ? 2 * Math.sqrt(550) : 30,
    restSpeed: 10,
  }),
  bS = { type: 'keyframes', duration: 0.8 },
  HS = { type: 'keyframes', ease: [0.25, 0.1, 0.35, 1], duration: 0.3 },
  KS = (e, { keyframes: t }) =>
    t.length > 2
      ? bS
      : hr.has(e)
        ? e.startsWith('scale')
          ? WS(t[1])
          : US
        : HS;
function GS({
  when: e,
  delay: t,
  delayChildren: n,
  staggerChildren: r,
  staggerDirection: i,
  repeat: o,
  repeatType: s,
  repeatDelay: a,
  from: l,
  elapsed: u,
  ...c
}) {
  return !!Object.keys(c).length;
}
const ic =
  (e, t, n, r = {}, i, o) =>
  (s) => {
    const a = Hu(r, e) || {},
      l = a.delay || r.delay || 0;
    let { elapsed: u = 0 } = r;
    u = u - at(l);
    const c = {
      keyframes: Array.isArray(n) ? n : [null, n],
      ease: 'easeOut',
      velocity: t.getVelocity(),
      ...a,
      delay: -u,
      onUpdate: (f) => {
        (t.set(f), a.onUpdate && a.onUpdate(f));
      },
      onComplete: () => {
        (s(), a.onComplete && a.onComplete());
      },
      name: e,
      motionValue: t,
      element: o ? void 0 : i,
    };
    (GS(a) || Object.assign(c, KS(e, c)),
      c.duration && (c.duration = at(c.duration)),
      c.repeatDelay && (c.repeatDelay = at(c.repeatDelay)),
      c.from !== void 0 && (c.keyframes[0] = c.from));
    let d = !1;
    if (
      ((c.type === !1 || (c.duration === 0 && !c.repeatDelay)) &&
        ((c.duration = 0), c.delay === 0 && (d = !0)),
      (Tt.instantAnimations || Tt.skipAnimations) &&
        ((d = !0), (c.duration = 0), (c.delay = 0)),
      (c.allowFlatten = !a.type && !a.ease),
      d && !o && t.get() !== void 0)
    ) {
      const f = $S(c.keyframes, a);
      if (f !== void 0) {
        H.update(() => {
          (c.onUpdate(f), c.onComplete());
        });
        return;
      }
    }
    return a.isSync ? new Wu(c) : new gx(c);
  };
function YS({ protectedKeys: e, needsAnimating: t }, n) {
  const r = e.hasOwnProperty(n) && t[n] !== !0;
  return ((t[n] = !1), r);
}
function Rg(e, t, { delay: n = 0, transitionOverride: r, type: i } = {}) {
  let { transition: o = e.getDefaultTransition(), transitionEnd: s, ...a } = t;
  r && (o = r);
  const l = [],
    u = i && e.animationState && e.animationState.getState()[i];
  for (const c in a) {
    const d = e.getValue(c, e.latestValues[c] ?? null),
      f = a[c];
    if (f === void 0 || (u && YS(u, c))) continue;
    const g = { delay: n, ...Hu(o || {}, c) },
      v = d.get();
    if (
      v !== void 0 &&
      !d.isAnimating &&
      !Array.isArray(f) &&
      f === v &&
      !g.velocity
    )
      continue;
    let y = !1;
    if (window.MotionHandoffAnimation) {
      const p = Eg(e);
      if (p) {
        const h = window.MotionHandoffAnimation(p, c, H);
        h !== null && ((g.startTime = h), (y = !0));
      }
    }
    (vl(e, c),
      d.start(
        ic(c, d, f, e.shouldReduceMotion && Gm.has(c) ? { type: !1 } : g, e, y)
      ));
    const S = d.animation;
    S && l.push(S);
  }
  return (
    s &&
      Promise.all(l).then(() => {
        H.update(() => {
          s && OS(e, s);
        });
      }),
    l
  );
}
function wl(e, t, n = {}) {
  var l;
  const r = mi(
    e,
    t,
    n.type === 'exit'
      ? (l = e.presenceContext) == null
        ? void 0
        : l.custom
      : void 0
  );
  let { transition: i = e.getDefaultTransition() || {} } = r || {};
  n.transitionOverride && (i = n.transitionOverride);
  const o = r ? () => Promise.all(Rg(e, r, n)) : () => Promise.resolve(),
    s =
      e.variantChildren && e.variantChildren.size
        ? (u = 0) => {
            const {
              delayChildren: c = 0,
              staggerChildren: d,
              staggerDirection: f,
            } = i;
            return QS(e, t, u, c, d, f, n);
          }
        : () => Promise.resolve(),
    { when: a } = i;
  if (a) {
    const [u, c] = a === 'beforeChildren' ? [o, s] : [s, o];
    return u().then(() => c());
  } else return Promise.all([o(), s(n.delay)]);
}
function QS(e, t, n = 0, r = 0, i = 0, o = 1, s) {
  const a = [],
    l = e.variantChildren.size,
    u = (l - 1) * i,
    c = typeof r == 'function',
    d = c ? (f) => r(f, l) : o === 1 ? (f = 0) => f * i : (f = 0) => u - f * i;
  return (
    Array.from(e.variantChildren)
      .sort(XS)
      .forEach((f, g) => {
        (f.notify('AnimationStart', t),
          a.push(
            wl(f, t, { ...s, delay: n + (c ? 0 : r) + d(g) }).then(() =>
              f.notify('AnimationComplete', t)
            )
          ));
      }),
    Promise.all(a)
  );
}
function XS(e, t) {
  return e.sortNodePosition(t);
}
function ZS(e, t, n = {}) {
  e.notify('AnimationStart', t);
  let r;
  if (Array.isArray(t)) {
    const i = t.map((o) => wl(e, o, n));
    r = Promise.all(i);
  } else if (typeof t == 'string') r = wl(e, t, n);
  else {
    const i = typeof t == 'function' ? mi(e, t, n.custom) : t;
    r = Promise.all(Rg(e, i, n));
  }
  return r.then(() => {
    e.notify('AnimationComplete', t);
  });
}
function Mg(e, t) {
  if (!Array.isArray(t)) return !1;
  const n = t.length;
  if (n !== e.length) return !1;
  for (let r = 0; r < n; r++) if (t[r] !== e[r]) return !1;
  return !0;
}
const JS = Zu.length;
function Lg(e) {
  if (!e) return;
  if (!e.isControllingVariants) {
    const n = e.parent ? Lg(e.parent) || {} : {};
    return (e.props.initial !== void 0 && (n.initial = e.props.initial), n);
  }
  const t = {};
  for (let n = 0; n < JS; n++) {
    const r = Zu[n],
      i = e.props[r];
    (hi(i) || i === !1) && (t[r] = i);
  }
  return t;
}
const qS = [...Xu].reverse(),
  ek = Xu.length;
function tk(e) {
  return (t) =>
    Promise.all(t.map(({ animation: n, options: r }) => ZS(e, n, r)));
}
function nk(e) {
  let t = tk(e),
    n = Jd(),
    r = !0;
  const i = (l) => (u, c) => {
    var f;
    const d = mi(
      e,
      c,
      l === 'exit'
        ? (f = e.presenceContext) == null
          ? void 0
          : f.custom
        : void 0
    );
    if (d) {
      const { transition: g, transitionEnd: v, ...y } = d;
      u = { ...u, ...y, ...v };
    }
    return u;
  };
  function o(l) {
    t = l(e);
  }
  function s(l) {
    const { props: u } = e,
      c = Lg(e.parent) || {},
      d = [],
      f = new Set();
    let g = {},
      v = 1 / 0;
    for (let S = 0; S < ek; S++) {
      const p = qS[S],
        h = n[p],
        m = u[p] !== void 0 ? u[p] : c[p],
        k = hi(m),
        C = p === l ? h.isActive : null;
      C === !1 && (v = S);
      let T = m === c[p] && m !== u[p] && k;
      if (
        (T && r && e.manuallyAnimateOnMount && (T = !1),
        (h.protectedKeys = { ...g }),
        (!h.isActive && C === null) ||
          (!m && !h.prevProp) ||
          ps(m) ||
          typeof m == 'boolean')
      )
        continue;
      const R = rk(h.prevProp, m);
      let E = R || (p === l && h.isActive && !T && k) || (S > v && k),
        N = !1;
      const P = Array.isArray(m) ? m : [m];
      let D = P.reduce(i(p), {});
      C === !1 && (D = {});
      const { prevResolvedValues: G = {} } = h,
        oe = { ...G, ...D },
        Rt = (B) => {
          ((E = !0),
            f.has(B) && ((N = !0), f.delete(B)),
            (h.needsAnimating[B] = !0));
          const L = e.getValue(B);
          L && (L.liveStyle = !1);
        };
      for (const B in oe) {
        const L = D[B],
          V = G[B];
        if (g.hasOwnProperty(B)) continue;
        let I = !1;
        (yl(L) && yl(V) ? (I = !Mg(L, V)) : (I = L !== V),
          I
            ? L != null
              ? Rt(B)
              : f.add(B)
            : L !== void 0 && f.has(B)
              ? Rt(B)
              : (h.protectedKeys[B] = !0));
      }
      ((h.prevProp = m),
        (h.prevResolvedValues = D),
        h.isActive && (g = { ...g, ...D }),
        r && e.blockInitialAnimation && (E = !1),
        E &&
          (!(T && R) || N) &&
          d.push(...P.map((B) => ({ animation: B, options: { type: p } }))));
    }
    if (f.size) {
      const S = {};
      if (typeof u.initial != 'boolean') {
        const p = mi(e, Array.isArray(u.initial) ? u.initial[0] : u.initial);
        p && p.transition && (S.transition = p.transition);
      }
      (f.forEach((p) => {
        const h = e.getBaseTarget(p),
          m = e.getValue(p);
        (m && (m.liveStyle = !0), (S[p] = h ?? null));
      }),
        d.push({ animation: S }));
    }
    let y = !!d.length;
    return (
      r &&
        (u.initial === !1 || u.initial === u.animate) &&
        !e.manuallyAnimateOnMount &&
        (y = !1),
      (r = !1),
      y ? t(d) : Promise.resolve()
    );
  }
  function a(l, u) {
    var d;
    if (n[l].isActive === u) return Promise.resolve();
    ((d = e.variantChildren) == null ||
      d.forEach((f) => {
        var g;
        return (g = f.animationState) == null ? void 0 : g.setActive(l, u);
      }),
      (n[l].isActive = u));
    const c = s(l);
    for (const f in n) n[f].protectedKeys = {};
    return c;
  }
  return {
    animateChanges: s,
    setActive: a,
    setAnimateFunction: o,
    getState: () => n,
    reset: () => {
      ((n = Jd()), (r = !0));
    },
  };
}
function rk(e, t) {
  return typeof t == 'string' ? t !== e : Array.isArray(t) ? !Mg(t, e) : !1;
}
function on(e = !1) {
  return {
    isActive: e,
    protectedKeys: {},
    needsAnimating: {},
    prevResolvedValues: {},
  };
}
function Jd() {
  return {
    animate: on(!0),
    whileInView: on(),
    whileHover: on(),
    whileTap: on(),
    whileDrag: on(),
    whileFocus: on(),
    exit: on(),
  };
}
class tn {
  constructor(t) {
    ((this.isMounted = !1), (this.node = t));
  }
  update() {}
}
class ik extends tn {
  constructor(t) {
    (super(t), t.animationState || (t.animationState = nk(t)));
  }
  updateAnimationControlsSubscription() {
    const { animate: t } = this.node.getProps();
    ps(t) && (this.unmountControls = t.subscribe(this.node));
  }
  mount() {
    this.updateAnimationControlsSubscription();
  }
  update() {
    const { animate: t } = this.node.getProps(),
      { animate: n } = this.node.prevProps || {};
    t !== n && this.updateAnimationControlsSubscription();
  }
  unmount() {
    var t;
    (this.node.animationState.reset(),
      (t = this.unmountControls) == null || t.call(this));
  }
}
let ok = 0;
class sk extends tn {
  constructor() {
    (super(...arguments), (this.id = ok++));
  }
  update() {
    if (!this.node.presenceContext) return;
    const { isPresent: t, onExitComplete: n } = this.node.presenceContext,
      { isPresent: r } = this.node.prevPresenceContext || {};
    if (!this.node.animationState || t === r) return;
    const i = this.node.animationState.setActive('exit', !t);
    n &&
      !t &&
      i.then(() => {
        n(this.id);
      });
  }
  mount() {
    const { register: t, onExitComplete: n } = this.node.presenceContext || {};
    (n && n(this.id), t && (this.unmount = t(this.id)));
  }
  unmount() {}
}
const ak = { animation: { Feature: ik }, exit: { Feature: sk } };
function gi(e, t, n, r = { passive: !0 }) {
  return (e.addEventListener(t, n, r), () => e.removeEventListener(t, n));
}
function Ri(e) {
  return { point: { x: e.pageX, y: e.pageY } };
}
const lk = (e) => (t) => Yu(t) && e(t, Ri(t));
function Wr(e, t, n, r) {
  return gi(e, t, lk(n), r);
}
const Ag = 1e-4,
  uk = 1 - Ag,
  ck = 1 + Ag,
  Ng = 0.01,
  dk = 0 - Ng,
  fk = 0 + Ng;
function Se(e) {
  return e.max - e.min;
}
function hk(e, t, n) {
  return Math.abs(e - t) <= n;
}
function qd(e, t, n, r = 0.5) {
  ((e.origin = r),
    (e.originPoint = Q(t.min, t.max, e.origin)),
    (e.scale = Se(n) / Se(t)),
    (e.translate = Q(n.min, n.max, e.origin) - e.originPoint),
    ((e.scale >= uk && e.scale <= ck) || isNaN(e.scale)) && (e.scale = 1),
    ((e.translate >= dk && e.translate <= fk) || isNaN(e.translate)) &&
      (e.translate = 0));
}
function br(e, t, n, r) {
  (qd(e.x, t.x, n.x, r ? r.originX : void 0),
    qd(e.y, t.y, n.y, r ? r.originY : void 0));
}
function ef(e, t, n) {
  ((e.min = n.min + t.min), (e.max = e.min + Se(t)));
}
function pk(e, t, n) {
  (ef(e.x, t.x, n.x), ef(e.y, t.y, n.y));
}
function tf(e, t, n) {
  ((e.min = t.min - n.min), (e.max = e.min + Se(t)));
}
function Hr(e, t, n) {
  (tf(e.x, t.x, n.x), tf(e.y, t.y, n.y));
}
function Oe(e) {
  return [e('x'), e('y')];
}
const jg = ({ current: e }) => (e ? e.ownerDocument.defaultView : null),
  nf = (e, t) => Math.abs(e - t);
function mk(e, t) {
  const n = nf(e.x, t.x),
    r = nf(e.y, t.y);
  return Math.sqrt(n ** 2 + r ** 2);
}
class Dg {
  constructor(
    t,
    n,
    {
      transformPagePoint: r,
      contextWindow: i = window,
      dragSnapToOrigin: o = !1,
      distanceThreshold: s = 3,
    } = {}
  ) {
    if (
      ((this.startEvent = null),
      (this.lastMoveEvent = null),
      (this.lastMoveEventInfo = null),
      (this.handlers = {}),
      (this.contextWindow = window),
      (this.updatePoint = () => {
        if (!(this.lastMoveEvent && this.lastMoveEventInfo)) return;
        const f = ta(this.lastMoveEventInfo, this.history),
          g = this.startEvent !== null,
          v = mk(f.offset, { x: 0, y: 0 }) >= this.distanceThreshold;
        if (!g && !v) return;
        const { point: y } = f,
          { timestamp: S } = fe;
        this.history.push({ ...y, timestamp: S });
        const { onStart: p, onMove: h } = this.handlers;
        (g ||
          (p && p(this.lastMoveEvent, f),
          (this.startEvent = this.lastMoveEvent)),
          h && h(this.lastMoveEvent, f));
      }),
      (this.handlePointerMove = (f, g) => {
        ((this.lastMoveEvent = f),
          (this.lastMoveEventInfo = ea(g, this.transformPagePoint)),
          H.update(this.updatePoint, !0));
      }),
      (this.handlePointerUp = (f, g) => {
        this.end();
        const { onEnd: v, onSessionEnd: y, resumeAnimation: S } = this.handlers;
        if (
          (this.dragSnapToOrigin && S && S(),
          !(this.lastMoveEvent && this.lastMoveEventInfo))
        )
          return;
        const p = ta(
          f.type === 'pointercancel'
            ? this.lastMoveEventInfo
            : ea(g, this.transformPagePoint),
          this.history
        );
        (this.startEvent && v && v(f, p), y && y(f, p));
      }),
      !Yu(t))
    )
      return;
    ((this.dragSnapToOrigin = o),
      (this.handlers = n),
      (this.transformPagePoint = r),
      (this.distanceThreshold = s),
      (this.contextWindow = i || window));
    const a = Ri(t),
      l = ea(a, this.transformPagePoint),
      { point: u } = l,
      { timestamp: c } = fe;
    this.history = [{ ...u, timestamp: c }];
    const { onSessionStart: d } = n;
    (d && d(t, ta(l, this.history)),
      (this.removeListeners = Pi(
        Wr(this.contextWindow, 'pointermove', this.handlePointerMove),
        Wr(this.contextWindow, 'pointerup', this.handlePointerUp),
        Wr(this.contextWindow, 'pointercancel', this.handlePointerUp)
      )));
  }
  updateHandlers(t) {
    this.handlers = t;
  }
  end() {
    (this.removeListeners && this.removeListeners(), Yt(this.updatePoint));
  }
}
function ea(e, t) {
  return t ? { point: t(e.point) } : e;
}
function rf(e, t) {
  return { x: e.x - t.x, y: e.y - t.y };
}
function ta({ point: e }, t) {
  return {
    point: e,
    delta: rf(e, Vg(t)),
    offset: rf(e, gk(t)),
    velocity: yk(t, 0.1),
  };
}
function gk(e) {
  return e[0];
}
function Vg(e) {
  return e[e.length - 1];
}
function yk(e, t) {
  if (e.length < 2) return { x: 0, y: 0 };
  let n = e.length - 1,
    r = null;
  const i = Vg(e);
  for (; n >= 0 && ((r = e[n]), !(i.timestamp - r.timestamp > at(t))); ) n--;
  if (!r) return { x: 0, y: 0 };
  const o = lt(i.timestamp - r.timestamp);
  if (o === 0) return { x: 0, y: 0 };
  const s = { x: (i.x - r.x) / o, y: (i.y - r.y) / o };
  return (s.x === 1 / 0 && (s.x = 0), s.y === 1 / 0 && (s.y = 0), s);
}
function vk(e, { min: t, max: n }, r) {
  return (
    t !== void 0 && e < t
      ? (e = r ? Q(t, e, r.min) : Math.max(e, t))
      : n !== void 0 && e > n && (e = r ? Q(n, e, r.max) : Math.min(e, n)),
    e
  );
}
function of(e, t, n) {
  return {
    min: t !== void 0 ? e.min + t : void 0,
    max: n !== void 0 ? e.max + n - (e.max - e.min) : void 0,
  };
}
function wk(e, { top: t, left: n, bottom: r, right: i }) {
  return { x: of(e.x, n, i), y: of(e.y, t, r) };
}
function sf(e, t) {
  let n = t.min - e.min,
    r = t.max - e.max;
  return (
    t.max - t.min < e.max - e.min && ([n, r] = [r, n]),
    { min: n, max: r }
  );
}
function xk(e, t) {
  return { x: sf(e.x, t.x), y: sf(e.y, t.y) };
}
function Sk(e, t) {
  let n = 0.5;
  const r = Se(e),
    i = Se(t);
  return (
    i > r
      ? (n = ci(t.min, t.max - r, e.min))
      : r > i && (n = ci(e.min, e.max - i, t.min)),
    Pt(0, 1, n)
  );
}
function kk(e, t) {
  const n = {};
  return (
    t.min !== void 0 && (n.min = t.min - e.min),
    t.max !== void 0 && (n.max = t.max - e.min),
    n
  );
}
const xl = 0.35;
function Ck(e = xl) {
  return (
    e === !1 ? (e = 0) : e === !0 && (e = xl),
    { x: af(e, 'left', 'right'), y: af(e, 'top', 'bottom') }
  );
}
function af(e, t, n) {
  return { min: lf(e, t), max: lf(e, n) };
}
function lf(e, t) {
  return typeof e == 'number' ? e : e[t] || 0;
}
const Pk = new WeakMap();
class Tk {
  constructor(t) {
    ((this.openDragLock = null),
      (this.isDragging = !1),
      (this.currentDirection = null),
      (this.originPoint = { x: 0, y: 0 }),
      (this.constraints = !1),
      (this.hasMutatedConstraints = !1),
      (this.elastic = te()),
      (this.latestPointerEvent = null),
      (this.latestPanInfo = null),
      (this.visualElement = t));
  }
  start(t, { snapToCursor: n = !1, distanceThreshold: r } = {}) {
    const { presenceContext: i } = this.visualElement;
    if (i && i.isPresent === !1) return;
    const o = (d) => {
        const { dragSnapToOrigin: f } = this.getProps();
        (f ? this.pauseAnimation() : this.stopAnimation(),
          n && this.snapToCursor(Ri(d).point));
      },
      s = (d, f) => {
        const { drag: g, dragPropagation: v, onDragStart: y } = this.getProps();
        if (
          g &&
          !v &&
          (this.openDragLock && this.openDragLock(),
          (this.openDragLock = jx(g)),
          !this.openDragLock)
        )
          return;
        ((this.latestPointerEvent = d),
          (this.latestPanInfo = f),
          (this.isDragging = !0),
          (this.currentDirection = null),
          this.resolveConstraints(),
          this.visualElement.projection &&
            ((this.visualElement.projection.isAnimationBlocked = !0),
            (this.visualElement.projection.target = void 0)),
          Oe((p) => {
            let h = this.getAxisMotionValue(p).get() || 0;
            if (ut.test(h)) {
              const { projection: m } = this.visualElement;
              if (m && m.layout) {
                const k = m.layout.layoutBox[p];
                k && (h = Se(k) * (parseFloat(h) / 100));
              }
            }
            this.originPoint[p] = h;
          }),
          y && H.postRender(() => y(d, f)),
          vl(this.visualElement, 'transform'));
        const { animationState: S } = this.visualElement;
        S && S.setActive('whileDrag', !0);
      },
      a = (d, f) => {
        ((this.latestPointerEvent = d), (this.latestPanInfo = f));
        const {
          dragPropagation: g,
          dragDirectionLock: v,
          onDirectionLock: y,
          onDrag: S,
        } = this.getProps();
        if (!g && !this.openDragLock) return;
        const { offset: p } = f;
        if (v && this.currentDirection === null) {
          ((this.currentDirection = Ek(p)),
            this.currentDirection !== null && y && y(this.currentDirection));
          return;
        }
        (this.updateAxis('x', f.point, p),
          this.updateAxis('y', f.point, p),
          this.visualElement.render(),
          S && S(d, f));
      },
      l = (d, f) => {
        ((this.latestPointerEvent = d),
          (this.latestPanInfo = f),
          this.stop(d, f),
          (this.latestPointerEvent = null),
          (this.latestPanInfo = null));
      },
      u = () =>
        Oe((d) => {
          var f;
          return (
            this.getAnimationState(d) === 'paused' &&
            ((f = this.getAxisMotionValue(d).animation) == null
              ? void 0
              : f.play())
          );
        }),
      { dragSnapToOrigin: c } = this.getProps();
    this.panSession = new Dg(
      t,
      {
        onSessionStart: o,
        onStart: s,
        onMove: a,
        onSessionEnd: l,
        resumeAnimation: u,
      },
      {
        transformPagePoint: this.visualElement.getTransformPagePoint(),
        dragSnapToOrigin: c,
        distanceThreshold: r,
        contextWindow: jg(this.visualElement),
      }
    );
  }
  stop(t, n) {
    const r = t || this.latestPointerEvent,
      i = n || this.latestPanInfo,
      o = this.isDragging;
    if ((this.cancel(), !o || !i || !r)) return;
    const { velocity: s } = i;
    this.startAnimation(s);
    const { onDragEnd: a } = this.getProps();
    a && H.postRender(() => a(r, i));
  }
  cancel() {
    this.isDragging = !1;
    const { projection: t, animationState: n } = this.visualElement;
    (t && (t.isAnimationBlocked = !1),
      this.panSession && this.panSession.end(),
      (this.panSession = void 0));
    const { dragPropagation: r } = this.getProps();
    (!r &&
      this.openDragLock &&
      (this.openDragLock(), (this.openDragLock = null)),
      n && n.setActive('whileDrag', !1));
  }
  updateAxis(t, n, r) {
    const { drag: i } = this.getProps();
    if (!r || !Ji(t, i, this.currentDirection)) return;
    const o = this.getAxisMotionValue(t);
    let s = this.originPoint[t] + r[t];
    (this.constraints &&
      this.constraints[t] &&
      (s = vk(s, this.constraints[t], this.elastic[t])),
      o.set(s));
  }
  resolveConstraints() {
    var o;
    const { dragConstraints: t, dragElastic: n } = this.getProps(),
      r =
        this.visualElement.projection && !this.visualElement.projection.layout
          ? this.visualElement.projection.measure(!1)
          : (o = this.visualElement.projection) == null
            ? void 0
            : o.layout,
      i = this.constraints;
    (t && $n(t)
      ? this.constraints || (this.constraints = this.resolveRefConstraints())
      : t && r
        ? (this.constraints = wk(r.layoutBox, t))
        : (this.constraints = !1),
      (this.elastic = Ck(n)),
      i !== this.constraints &&
        r &&
        this.constraints &&
        !this.hasMutatedConstraints &&
        Oe((s) => {
          this.constraints !== !1 &&
            this.getAxisMotionValue(s) &&
            (this.constraints[s] = kk(r.layoutBox[s], this.constraints[s]));
        }));
  }
  resolveRefConstraints() {
    const { dragConstraints: t, onMeasureDragConstraints: n } = this.getProps();
    if (!t || !$n(t)) return !1;
    const r = t.current,
      { projection: i } = this.visualElement;
    if (!i || !i.layout) return !1;
    const o = ES(r, i.root, this.visualElement.getTransformPagePoint());
    let s = xk(i.layout.layoutBox, o);
    if (n) {
      const a = n(CS(s));
      ((this.hasMutatedConstraints = !!a), a && (s = vg(a)));
    }
    return s;
  }
  startAnimation(t) {
    const {
        drag: n,
        dragMomentum: r,
        dragElastic: i,
        dragTransition: o,
        dragSnapToOrigin: s,
        onDragTransitionEnd: a,
      } = this.getProps(),
      l = this.constraints || {},
      u = Oe((c) => {
        if (!Ji(c, n, this.currentDirection)) return;
        let d = (l && l[c]) || {};
        s && (d = { min: 0, max: 0 });
        const f = i ? 200 : 1e6,
          g = i ? 40 : 1e7,
          v = {
            type: 'inertia',
            velocity: r ? t[c] : 0,
            bounceStiffness: f,
            bounceDamping: g,
            timeConstant: 750,
            restDelta: 1,
            restSpeed: 10,
            ...o,
            ...d,
          };
        return this.startAxisValueAnimation(c, v);
      });
    return Promise.all(u).then(a);
  }
  startAxisValueAnimation(t, n) {
    const r = this.getAxisMotionValue(t);
    return (
      vl(this.visualElement, t),
      r.start(ic(t, r, 0, n, this.visualElement, !1))
    );
  }
  stopAnimation() {
    Oe((t) => this.getAxisMotionValue(t).stop());
  }
  pauseAnimation() {
    Oe((t) => {
      var n;
      return (n = this.getAxisMotionValue(t).animation) == null
        ? void 0
        : n.pause();
    });
  }
  getAnimationState(t) {
    var n;
    return (n = this.getAxisMotionValue(t).animation) == null
      ? void 0
      : n.state;
  }
  getAxisMotionValue(t) {
    const n = `_drag${t.toUpperCase()}`,
      r = this.visualElement.getProps(),
      i = r[n];
    return (
      i ||
      this.visualElement.getValue(t, (r.initial ? r.initial[t] : void 0) || 0)
    );
  }
  snapToCursor(t) {
    Oe((n) => {
      const { drag: r } = this.getProps();
      if (!Ji(n, r, this.currentDirection)) return;
      const { projection: i } = this.visualElement,
        o = this.getAxisMotionValue(n);
      if (i && i.layout) {
        const { min: s, max: a } = i.layout.layoutBox[n];
        o.set(t[n] - Q(s, a, 0.5));
      }
    });
  }
  scalePositionWithinConstraints() {
    if (!this.visualElement.current) return;
    const { drag: t, dragConstraints: n } = this.getProps(),
      { projection: r } = this.visualElement;
    if (!$n(n) || !r || !this.constraints) return;
    this.stopAnimation();
    const i = { x: 0, y: 0 };
    Oe((s) => {
      const a = this.getAxisMotionValue(s);
      if (a && this.constraints !== !1) {
        const l = a.get();
        i[s] = Sk({ min: l, max: l }, this.constraints[s]);
      }
    });
    const { transformTemplate: o } = this.visualElement.getProps();
    ((this.visualElement.current.style.transform = o ? o({}, '') : 'none'),
      r.root && r.root.updateScroll(),
      r.updateLayout(),
      this.resolveConstraints(),
      Oe((s) => {
        if (!Ji(s, t, null)) return;
        const a = this.getAxisMotionValue(s),
          { min: l, max: u } = this.constraints[s];
        a.set(Q(l, u, i[s]));
      }));
  }
  addListeners() {
    if (!this.visualElement.current) return;
    Pk.set(this.visualElement, this);
    const t = this.visualElement.current,
      n = Wr(t, 'pointerdown', (l) => {
        const { drag: u, dragListener: c = !0 } = this.getProps();
        u && c && this.start(l);
      }),
      r = () => {
        const { dragConstraints: l } = this.getProps();
        $n(l) && l.current && (this.constraints = this.resolveRefConstraints());
      },
      { projection: i } = this.visualElement,
      o = i.addEventListener('measure', r);
    (i && !i.layout && (i.root && i.root.updateScroll(), i.updateLayout()),
      H.read(r));
    const s = gi(window, 'resize', () => this.scalePositionWithinConstraints()),
      a = i.addEventListener(
        'didUpdate',
        ({ delta: l, hasLayoutChanged: u }) => {
          this.isDragging &&
            u &&
            (Oe((c) => {
              const d = this.getAxisMotionValue(c);
              d &&
                ((this.originPoint[c] += l[c].translate),
                d.set(d.get() + l[c].translate));
            }),
            this.visualElement.render());
        }
      );
    return () => {
      (s(), n(), o(), a && a());
    };
  }
  getProps() {
    const t = this.visualElement.getProps(),
      {
        drag: n = !1,
        dragDirectionLock: r = !1,
        dragPropagation: i = !1,
        dragConstraints: o = !1,
        dragElastic: s = xl,
        dragMomentum: a = !0,
      } = t;
    return {
      ...t,
      drag: n,
      dragDirectionLock: r,
      dragPropagation: i,
      dragConstraints: o,
      dragElastic: s,
      dragMomentum: a,
    };
  }
}
function Ji(e, t, n) {
  return (t === !0 || t === e) && (n === null || n === e);
}
function Ek(e, t = 10) {
  let n = null;
  return (Math.abs(e.y) > t ? (n = 'y') : Math.abs(e.x) > t && (n = 'x'), n);
}
class Rk extends tn {
  constructor(t) {
    (super(t),
      (this.removeGroupControls = We),
      (this.removeListeners = We),
      (this.controls = new Tk(t)));
  }
  mount() {
    const { dragControls: t } = this.node.getProps();
    (t && (this.removeGroupControls = t.subscribe(this.controls)),
      (this.removeListeners = this.controls.addListeners() || We));
  }
  unmount() {
    (this.removeGroupControls(), this.removeListeners());
  }
}
const uf = (e) => (t, n) => {
  e && H.postRender(() => e(t, n));
};
class Mk extends tn {
  constructor() {
    (super(...arguments), (this.removePointerDownListener = We));
  }
  onPointerDown(t) {
    this.session = new Dg(t, this.createPanHandlers(), {
      transformPagePoint: this.node.getTransformPagePoint(),
      contextWindow: jg(this.node),
    });
  }
  createPanHandlers() {
    const {
      onPanSessionStart: t,
      onPanStart: n,
      onPan: r,
      onPanEnd: i,
    } = this.node.getProps();
    return {
      onSessionStart: uf(t),
      onStart: uf(n),
      onMove: r,
      onEnd: (o, s) => {
        (delete this.session, i && H.postRender(() => i(o, s)));
      },
    };
  }
  mount() {
    this.removePointerDownListener = Wr(this.node.current, 'pointerdown', (t) =>
      this.onPointerDown(t)
    );
  }
  update() {
    this.session && this.session.updateHandlers(this.createPanHandlers());
  }
  unmount() {
    (this.removePointerDownListener(), this.session && this.session.end());
  }
}
const yo = { hasAnimatedSinceResize: !0, hasEverUpdated: !1 };
function cf(e, t) {
  return t.max === t.min ? 0 : (e / (t.max - t.min)) * 100;
}
const Pr = {
    correct: (e, t) => {
      if (!t.target) return e;
      if (typeof e == 'string')
        if (j.test(e)) e = parseFloat(e);
        else return e;
      const n = cf(e, t.target.x),
        r = cf(e, t.target.y);
      return `${n}% ${r}%`;
    },
  },
  Lk = {
    correct: (e, { treeScale: t, projectionDelta: n }) => {
      const r = e,
        i = Qt.parse(e);
      if (i.length > 5) return r;
      const o = Qt.createTransformer(e),
        s = typeof i[0] != 'number' ? 1 : 0,
        a = n.x.scale * t.x,
        l = n.y.scale * t.y;
      ((i[0 + s] /= a), (i[1 + s] /= l));
      const u = Q(a, l, 0.5);
      return (
        typeof i[2 + s] == 'number' && (i[2 + s] /= u),
        typeof i[3 + s] == 'number' && (i[3 + s] /= u),
        o(i)
      );
    },
  };
let df = !1;
class Ak extends x.Component {
  componentDidMount() {
    const {
        visualElement: t,
        layoutGroup: n,
        switchLayoutGroup: r,
        layoutId: i,
      } = this.props,
      { projection: o } = t;
    (Zx(Nk),
      o &&
        (n.group && n.group.add(o),
        r && r.register && i && r.register(o),
        df && o.root.didUpdate(),
        o.addEventListener('animationComplete', () => {
          this.safeToRemove();
        }),
        o.setOptions({
          ...o.options,
          onExitComplete: () => this.safeToRemove(),
        })),
      (yo.hasEverUpdated = !0));
  }
  getSnapshotBeforeUpdate(t) {
    const {
        layoutDependency: n,
        visualElement: r,
        drag: i,
        isPresent: o,
      } = this.props,
      { projection: s } = r;
    return (
      s &&
        ((s.isPresent = o),
        (df = !0),
        i || t.layoutDependency !== n || n === void 0 || t.isPresent !== o
          ? s.willUpdate()
          : this.safeToRemove(),
        t.isPresent !== o &&
          (o
            ? s.promote()
            : s.relegate() ||
              H.postRender(() => {
                const a = s.getStack();
                (!a || !a.members.length) && this.safeToRemove();
              }))),
      null
    );
  }
  componentDidUpdate() {
    const { projection: t } = this.props.visualElement;
    t &&
      (t.root.didUpdate(),
      Gu.postRender(() => {
        !t.currentAnimation && t.isLead() && this.safeToRemove();
      }));
  }
  componentWillUnmount() {
    const {
        visualElement: t,
        layoutGroup: n,
        switchLayoutGroup: r,
      } = this.props,
      { projection: i } = t;
    i &&
      (i.scheduleCheckAfterUnmount(),
      n && n.group && n.group.remove(i),
      r && r.deregister && r.deregister(i));
  }
  safeToRemove() {
    const { safeToRemove: t } = this.props;
    t && t();
  }
  render() {
    return null;
  }
}
function Ig(e) {
  const [t, n] = ig(),
    r = x.useContext(Tu);
  return w.jsx(Ak, {
    ...e,
    layoutGroup: r,
    switchLayoutGroup: x.useContext(gg),
    isPresent: t,
    safeToRemove: n,
  });
}
const Nk = {
  borderRadius: {
    ...Pr,
    applyTo: [
      'borderTopLeftRadius',
      'borderTopRightRadius',
      'borderBottomLeftRadius',
      'borderBottomRightRadius',
    ],
  },
  borderTopLeftRadius: Pr,
  borderTopRightRadius: Pr,
  borderBottomLeftRadius: Pr,
  borderBottomRightRadius: Pr,
  boxShadow: Lk,
};
function jk(e, t, n) {
  const r = ve(e) ? e : ir(e);
  return (r.start(ic('', r, t, n)), r.animation);
}
const Dk = (e, t) => e.depth - t.depth;
class Vk {
  constructor() {
    ((this.children = []), (this.isDirty = !1));
  }
  add(t) {
    (Mu(this.children, t), (this.isDirty = !0));
  }
  remove(t) {
    (Lu(this.children, t), (this.isDirty = !0));
  }
  forEach(t) {
    (this.isDirty && this.children.sort(Dk),
      (this.isDirty = !1),
      this.children.forEach(t));
  }
}
function Ik(e, t) {
  const n = Re.now(),
    r = ({ timestamp: i }) => {
      const o = i - n;
      o >= t && (Yt(r), e(o - t));
    };
  return (H.setup(r, !0), () => Yt(r));
}
const Fg = ['TopLeft', 'TopRight', 'BottomLeft', 'BottomRight'],
  Fk = Fg.length,
  ff = (e) => (typeof e == 'string' ? parseFloat(e) : e),
  hf = (e) => typeof e == 'number' || j.test(e);
function _k(e, t, n, r, i, o) {
  i
    ? ((e.opacity = Q(0, n.opacity ?? 1, Ok(r))),
      (e.opacityExit = Q(t.opacity ?? 1, 0, Bk(r))))
    : o && (e.opacity = Q(t.opacity ?? 1, n.opacity ?? 1, r));
  for (let s = 0; s < Fk; s++) {
    const a = `border${Fg[s]}Radius`;
    let l = pf(t, a),
      u = pf(n, a);
    if (l === void 0 && u === void 0) continue;
    (l || (l = 0),
      u || (u = 0),
      l === 0 || u === 0 || hf(l) === hf(u)
        ? ((e[a] = Math.max(Q(ff(l), ff(u), r), 0)),
          (ut.test(u) || ut.test(l)) && (e[a] += '%'))
        : (e[a] = u));
  }
  (t.rotate || n.rotate) && (e.rotate = Q(t.rotate || 0, n.rotate || 0, r));
}
function pf(e, t) {
  return e[t] !== void 0 ? e[t] : e.borderRadius;
}
const Ok = _g(0, 0.5, Pm),
  Bk = _g(0.5, 0.95, We);
function _g(e, t, n) {
  return (r) => (r < e ? 0 : r > t ? 1 : n(ci(e, t, r)));
}
function mf(e, t) {
  ((e.min = t.min), (e.max = t.max));
}
function _e(e, t) {
  (mf(e.x, t.x), mf(e.y, t.y));
}
function gf(e, t) {
  ((e.translate = t.translate),
    (e.scale = t.scale),
    (e.originPoint = t.originPoint),
    (e.origin = t.origin));
}
function yf(e, t, n, r, i) {
  return (
    (e -= t),
    (e = Go(e, 1 / n, r)),
    i !== void 0 && (e = Go(e, 1 / i, r)),
    e
  );
}
function zk(e, t = 0, n = 1, r = 0.5, i, o = e, s = e) {
  if (
    (ut.test(t) &&
      ((t = parseFloat(t)), (t = Q(s.min, s.max, t / 100) - s.min)),
    typeof t != 'number')
  )
    return;
  let a = Q(o.min, o.max, r);
  (e === o && (a -= t),
    (e.min = yf(e.min, t, n, a, i)),
    (e.max = yf(e.max, t, n, a, i)));
}
function vf(e, t, [n, r, i], o, s) {
  zk(e, t[n], t[r], t[i], t.scale, o, s);
}
const $k = ['x', 'scaleX', 'originX'],
  Uk = ['y', 'scaleY', 'originY'];
function wf(e, t, n, r) {
  (vf(e.x, t, $k, n ? n.x : void 0, r ? r.x : void 0),
    vf(e.y, t, Uk, n ? n.y : void 0, r ? r.y : void 0));
}
function xf(e) {
  return e.translate === 0 && e.scale === 1;
}
function Og(e) {
  return xf(e.x) && xf(e.y);
}
function Sf(e, t) {
  return e.min === t.min && e.max === t.max;
}
function Wk(e, t) {
  return Sf(e.x, t.x) && Sf(e.y, t.y);
}
function kf(e, t) {
  return (
    Math.round(e.min) === Math.round(t.min) &&
    Math.round(e.max) === Math.round(t.max)
  );
}
function Bg(e, t) {
  return kf(e.x, t.x) && kf(e.y, t.y);
}
function Cf(e) {
  return Se(e.x) / Se(e.y);
}
function Pf(e, t) {
  return (
    e.translate === t.translate &&
    e.scale === t.scale &&
    e.originPoint === t.originPoint
  );
}
class bk {
  constructor() {
    this.members = [];
  }
  add(t) {
    (Mu(this.members, t), t.scheduleRender());
  }
  remove(t) {
    if (
      (Lu(this.members, t),
      t === this.prevLead && (this.prevLead = void 0),
      t === this.lead)
    ) {
      const n = this.members[this.members.length - 1];
      n && this.promote(n);
    }
  }
  relegate(t) {
    const n = this.members.findIndex((i) => t === i);
    if (n === 0) return !1;
    let r;
    for (let i = n; i >= 0; i--) {
      const o = this.members[i];
      if (o.isPresent !== !1) {
        r = o;
        break;
      }
    }
    return r ? (this.promote(r), !0) : !1;
  }
  promote(t, n) {
    const r = this.lead;
    if (t !== r && ((this.prevLead = r), (this.lead = t), t.show(), r)) {
      (r.instance && r.scheduleRender(),
        t.scheduleRender(),
        (t.resumeFrom = r),
        n && (t.resumeFrom.preserveOpacity = !0),
        r.snapshot &&
          ((t.snapshot = r.snapshot),
          (t.snapshot.latestValues = r.animationValues || r.latestValues)),
        t.root && t.root.isUpdating && (t.isLayoutDirty = !0));
      const { crossfade: i } = t.options;
      i === !1 && r.hide();
    }
  }
  exitAnimationComplete() {
    this.members.forEach((t) => {
      const { options: n, resumingFrom: r } = t;
      (n.onExitComplete && n.onExitComplete(),
        r && r.options.onExitComplete && r.options.onExitComplete());
    });
  }
  scheduleRender() {
    this.members.forEach((t) => {
      t.instance && t.scheduleRender(!1);
    });
  }
  removeLeadSnapshot() {
    this.lead && this.lead.snapshot && (this.lead.snapshot = void 0);
  }
}
function Hk(e, t, n) {
  let r = '';
  const i = e.x.translate / t.x,
    o = e.y.translate / t.y,
    s = (n == null ? void 0 : n.z) || 0;
  if (
    ((i || o || s) && (r = `translate3d(${i}px, ${o}px, ${s}px) `),
    (t.x !== 1 || t.y !== 1) && (r += `scale(${1 / t.x}, ${1 / t.y}) `),
    n)
  ) {
    const {
      transformPerspective: u,
      rotate: c,
      rotateX: d,
      rotateY: f,
      skewX: g,
      skewY: v,
    } = n;
    (u && (r = `perspective(${u}px) ${r}`),
      c && (r += `rotate(${c}deg) `),
      d && (r += `rotateX(${d}deg) `),
      f && (r += `rotateY(${f}deg) `),
      g && (r += `skewX(${g}deg) `),
      v && (r += `skewY(${v}deg) `));
  }
  const a = e.x.scale * t.x,
    l = e.y.scale * t.y;
  return ((a !== 1 || l !== 1) && (r += `scale(${a}, ${l})`), r || 'none');
}
const na = ['', 'X', 'Y', 'Z'],
  Kk = 1e3;
let Gk = 0;
function ra(e, t, n, r) {
  const { latestValues: i } = t;
  i[e] && ((n[e] = i[e]), t.setStaticValue(e, 0), r && (r[e] = 0));
}
function zg(e) {
  if (((e.hasCheckedOptimisedAppear = !0), e.root === e)) return;
  const { visualElement: t } = e.options;
  if (!t) return;
  const n = Eg(t);
  if (window.MotionHasOptimisedAnimation(n, 'transform')) {
    const { layout: i, layoutId: o } = e.options;
    window.MotionCancelOptimisedAnimation(n, 'transform', H, !(i || o));
  }
  const { parent: r } = e;
  r && !r.hasCheckedOptimisedAppear && zg(r);
}
function $g({
  attachResizeListener: e,
  defaultParent: t,
  measureScroll: n,
  checkIsScrollRoot: r,
  resetTransform: i,
}) {
  return class {
    constructor(s = {}, a = t == null ? void 0 : t()) {
      ((this.id = Gk++),
        (this.animationId = 0),
        (this.animationCommitId = 0),
        (this.children = new Set()),
        (this.options = {}),
        (this.isTreeAnimating = !1),
        (this.isAnimationBlocked = !1),
        (this.isLayoutDirty = !1),
        (this.isProjectionDirty = !1),
        (this.isSharedProjectionDirty = !1),
        (this.isTransformDirty = !1),
        (this.updateManuallyBlocked = !1),
        (this.updateBlockedByResize = !1),
        (this.isUpdating = !1),
        (this.isSVG = !1),
        (this.needsReset = !1),
        (this.shouldResetTransform = !1),
        (this.hasCheckedOptimisedAppear = !1),
        (this.treeScale = { x: 1, y: 1 }),
        (this.eventHandlers = new Map()),
        (this.hasTreeAnimated = !1),
        (this.updateScheduled = !1),
        (this.scheduleUpdate = () => this.update()),
        (this.projectionUpdateScheduled = !1),
        (this.checkUpdateFailed = () => {
          this.isUpdating && ((this.isUpdating = !1), this.clearAllSnapshots());
        }),
        (this.updateProjection = () => {
          ((this.projectionUpdateScheduled = !1),
            this.nodes.forEach(Xk),
            this.nodes.forEach(eC),
            this.nodes.forEach(tC),
            this.nodes.forEach(Zk));
        }),
        (this.resolvedRelativeTargetAt = 0),
        (this.hasProjected = !1),
        (this.isVisible = !0),
        (this.animationProgress = 0),
        (this.sharedNodes = new Map()),
        (this.latestValues = s),
        (this.root = a ? a.root || a : this),
        (this.path = a ? [...a.path, a] : []),
        (this.parent = a),
        (this.depth = a ? a.depth + 1 : 0));
      for (let l = 0; l < this.path.length; l++)
        this.path[l].shouldResetTransform = !0;
      this.root === this && (this.nodes = new Vk());
    }
    addEventListener(s, a) {
      return (
        this.eventHandlers.has(s) || this.eventHandlers.set(s, new ju()),
        this.eventHandlers.get(s).add(a)
      );
    }
    notifyListeners(s, ...a) {
      const l = this.eventHandlers.get(s);
      l && l.notify(...a);
    }
    hasListeners(s) {
      return this.eventHandlers.has(s);
    }
    mount(s) {
      if (this.instance) return;
      ((this.isSVG = rg(s) && !Ox(s)), (this.instance = s));
      const { layoutId: a, layout: l, visualElement: u } = this.options;
      if (
        (u && !u.current && u.mount(s),
        this.root.nodes.add(this),
        this.parent && this.parent.children.add(this),
        this.root.hasTreeAnimated && (l || a) && (this.isLayoutDirty = !0),
        e)
      ) {
        let c,
          d = 0;
        const f = () => (this.root.updateBlockedByResize = !1);
        (H.read(() => {
          d = window.innerWidth;
        }),
          e(s, () => {
            const g = window.innerWidth;
            g !== d &&
              ((d = g),
              (this.root.updateBlockedByResize = !0),
              c && c(),
              (c = Ik(f, 250)),
              yo.hasAnimatedSinceResize &&
                ((yo.hasAnimatedSinceResize = !1), this.nodes.forEach(Rf)));
          }));
      }
      (a && this.root.registerSharedNode(a, this),
        this.options.animate !== !1 &&
          u &&
          (a || l) &&
          this.addEventListener(
            'didUpdate',
            ({
              delta: c,
              hasLayoutChanged: d,
              hasRelativeLayoutChanged: f,
              layout: g,
            }) => {
              if (this.isTreeAnimationBlocked()) {
                ((this.target = void 0), (this.relativeTarget = void 0));
                return;
              }
              const v =
                  this.options.transition || u.getDefaultTransition() || sC,
                { onLayoutAnimationStart: y, onLayoutAnimationComplete: S } =
                  u.getProps(),
                p = !this.targetLayout || !Bg(this.targetLayout, g),
                h = !d && f;
              if (
                this.options.layoutRoot ||
                this.resumeFrom ||
                h ||
                (d && (p || !this.currentAnimation))
              ) {
                this.resumeFrom &&
                  ((this.resumingFrom = this.resumeFrom),
                  (this.resumingFrom.resumingFrom = void 0));
                const m = { ...Hu(v, 'layout'), onPlay: y, onComplete: S };
                ((u.shouldReduceMotion || this.options.layoutRoot) &&
                  ((m.delay = 0), (m.type = !1)),
                  this.startAnimation(m),
                  this.setAnimationOrigin(c, h));
              } else
                (d || Rf(this),
                  this.isLead() &&
                    this.options.onExitComplete &&
                    this.options.onExitComplete());
              this.targetLayout = g;
            }
          ));
    }
    unmount() {
      (this.options.layoutId && this.willUpdate(),
        this.root.nodes.remove(this));
      const s = this.getStack();
      (s && s.remove(this),
        this.parent && this.parent.children.delete(this),
        (this.instance = void 0),
        this.eventHandlers.clear(),
        Yt(this.updateProjection));
    }
    blockUpdate() {
      this.updateManuallyBlocked = !0;
    }
    unblockUpdate() {
      this.updateManuallyBlocked = !1;
    }
    isUpdateBlocked() {
      return this.updateManuallyBlocked || this.updateBlockedByResize;
    }
    isTreeAnimationBlocked() {
      return (
        this.isAnimationBlocked ||
        (this.parent && this.parent.isTreeAnimationBlocked()) ||
        !1
      );
    }
    startUpdate() {
      this.isUpdateBlocked() ||
        ((this.isUpdating = !0),
        this.nodes && this.nodes.forEach(nC),
        this.animationId++);
    }
    getTransformTemplate() {
      const { visualElement: s } = this.options;
      return s && s.getProps().transformTemplate;
    }
    willUpdate(s = !0) {
      if (((this.root.hasTreeAnimated = !0), this.root.isUpdateBlocked())) {
        this.options.onExitComplete && this.options.onExitComplete();
        return;
      }
      if (
        (window.MotionCancelOptimisedAnimation &&
          !this.hasCheckedOptimisedAppear &&
          zg(this),
        !this.root.isUpdating && this.root.startUpdate(),
        this.isLayoutDirty)
      )
        return;
      this.isLayoutDirty = !0;
      for (let c = 0; c < this.path.length; c++) {
        const d = this.path[c];
        ((d.shouldResetTransform = !0),
          d.updateScroll('snapshot'),
          d.options.layoutRoot && d.willUpdate(!1));
      }
      const { layoutId: a, layout: l } = this.options;
      if (a === void 0 && !l) return;
      const u = this.getTransformTemplate();
      ((this.prevTransformTemplateValue = u
        ? u(this.latestValues, '')
        : void 0),
        this.updateSnapshot(),
        s && this.notifyListeners('willUpdate'));
    }
    update() {
      if (((this.updateScheduled = !1), this.isUpdateBlocked())) {
        (this.unblockUpdate(),
          this.clearAllSnapshots(),
          this.nodes.forEach(Tf));
        return;
      }
      if (this.animationId <= this.animationCommitId) {
        this.nodes.forEach(Ef);
        return;
      }
      ((this.animationCommitId = this.animationId),
        this.isUpdating
          ? ((this.isUpdating = !1),
            this.nodes.forEach(qk),
            this.nodes.forEach(Yk),
            this.nodes.forEach(Qk))
          : this.nodes.forEach(Ef),
        this.clearAllSnapshots());
      const a = Re.now();
      ((fe.delta = Pt(0, 1e3 / 60, a - fe.timestamp)),
        (fe.timestamp = a),
        (fe.isProcessing = !0),
        Ks.update.process(fe),
        Ks.preRender.process(fe),
        Ks.render.process(fe),
        (fe.isProcessing = !1));
    }
    didUpdate() {
      this.updateScheduled ||
        ((this.updateScheduled = !0), Gu.read(this.scheduleUpdate));
    }
    clearAllSnapshots() {
      (this.nodes.forEach(Jk), this.sharedNodes.forEach(rC));
    }
    scheduleUpdateProjection() {
      this.projectionUpdateScheduled ||
        ((this.projectionUpdateScheduled = !0),
        H.preRender(this.updateProjection, !1, !0));
    }
    scheduleCheckAfterUnmount() {
      H.postRender(() => {
        this.isLayoutDirty
          ? this.root.didUpdate()
          : this.root.checkUpdateFailed();
      });
    }
    updateSnapshot() {
      this.snapshot ||
        !this.instance ||
        ((this.snapshot = this.measure()),
        this.snapshot &&
          !Se(this.snapshot.measuredBox.x) &&
          !Se(this.snapshot.measuredBox.y) &&
          (this.snapshot = void 0));
    }
    updateLayout() {
      if (
        !this.instance ||
        (this.updateScroll(),
        !(this.options.alwaysMeasureLayout && this.isLead()) &&
          !this.isLayoutDirty)
      )
        return;
      if (this.resumeFrom && !this.resumeFrom.instance)
        for (let l = 0; l < this.path.length; l++) this.path[l].updateScroll();
      const s = this.layout;
      ((this.layout = this.measure(!1)),
        (this.layoutCorrected = te()),
        (this.isLayoutDirty = !1),
        (this.projectionDelta = void 0),
        this.notifyListeners('measure', this.layout.layoutBox));
      const { visualElement: a } = this.options;
      a &&
        a.notify(
          'LayoutMeasure',
          this.layout.layoutBox,
          s ? s.layoutBox : void 0
        );
    }
    updateScroll(s = 'measure') {
      let a = !!(this.options.layoutScroll && this.instance);
      if (
        (this.scroll &&
          this.scroll.animationId === this.root.animationId &&
          this.scroll.phase === s &&
          (a = !1),
        a && this.instance)
      ) {
        const l = r(this.instance);
        this.scroll = {
          animationId: this.root.animationId,
          phase: s,
          isRoot: l,
          offset: n(this.instance),
          wasRoot: this.scroll ? this.scroll.isRoot : l,
        };
      }
    }
    resetTransform() {
      if (!i) return;
      const s =
          this.isLayoutDirty ||
          this.shouldResetTransform ||
          this.options.alwaysMeasureLayout,
        a = this.projectionDelta && !Og(this.projectionDelta),
        l = this.getTransformTemplate(),
        u = l ? l(this.latestValues, '') : void 0,
        c = u !== this.prevTransformTemplateValue;
      s &&
        this.instance &&
        (a || ln(this.latestValues) || c) &&
        (i(this.instance, u),
        (this.shouldResetTransform = !1),
        this.scheduleRender());
    }
    measure(s = !0) {
      const a = this.measurePageBox();
      let l = this.removeElementScroll(a);
      return (
        s && (l = this.removeTransform(l)),
        aC(l),
        {
          animationId: this.root.animationId,
          measuredBox: a,
          layoutBox: l,
          latestValues: {},
          source: this.id,
        }
      );
    }
    measurePageBox() {
      var u;
      const { visualElement: s } = this.options;
      if (!s) return te();
      const a = s.measureViewportBox();
      if (
        !(
          ((u = this.scroll) == null ? void 0 : u.wasRoot) || this.path.some(lC)
        )
      ) {
        const { scroll: c } = this.root;
        c && (Un(a.x, c.offset.x), Un(a.y, c.offset.y));
      }
      return a;
    }
    removeElementScroll(s) {
      var l;
      const a = te();
      if ((_e(a, s), (l = this.scroll) != null && l.wasRoot)) return a;
      for (let u = 0; u < this.path.length; u++) {
        const c = this.path[u],
          { scroll: d, options: f } = c;
        c !== this.root &&
          d &&
          f.layoutScroll &&
          (d.wasRoot && _e(a, s), Un(a.x, d.offset.x), Un(a.y, d.offset.y));
      }
      return a;
    }
    applyTransform(s, a = !1) {
      const l = te();
      _e(l, s);
      for (let u = 0; u < this.path.length; u++) {
        const c = this.path[u];
        (!a &&
          c.options.layoutScroll &&
          c.scroll &&
          c !== c.root &&
          Wn(l, { x: -c.scroll.offset.x, y: -c.scroll.offset.y }),
          ln(c.latestValues) && Wn(l, c.latestValues));
      }
      return (ln(this.latestValues) && Wn(l, this.latestValues), l);
    }
    removeTransform(s) {
      const a = te();
      _e(a, s);
      for (let l = 0; l < this.path.length; l++) {
        const u = this.path[l];
        if (!u.instance || !ln(u.latestValues)) continue;
        pl(u.latestValues) && u.updateSnapshot();
        const c = te(),
          d = u.measurePageBox();
        (_e(c, d),
          wf(a, u.latestValues, u.snapshot ? u.snapshot.layoutBox : void 0, c));
      }
      return (ln(this.latestValues) && wf(a, this.latestValues), a);
    }
    setTargetDelta(s) {
      ((this.targetDelta = s),
        this.root.scheduleUpdateProjection(),
        (this.isProjectionDirty = !0));
    }
    setOptions(s) {
      this.options = {
        ...this.options,
        ...s,
        crossfade: s.crossfade !== void 0 ? s.crossfade : !0,
      };
    }
    clearMeasurements() {
      ((this.scroll = void 0),
        (this.layout = void 0),
        (this.snapshot = void 0),
        (this.prevTransformTemplateValue = void 0),
        (this.targetDelta = void 0),
        (this.target = void 0),
        (this.isLayoutDirty = !1));
    }
    forceRelativeParentToResolveTarget() {
      this.relativeParent &&
        this.relativeParent.resolvedRelativeTargetAt !== fe.timestamp &&
        this.relativeParent.resolveTargetDelta(!0);
    }
    resolveTargetDelta(s = !1) {
      var f;
      const a = this.getLead();
      (this.isProjectionDirty || (this.isProjectionDirty = a.isProjectionDirty),
        this.isTransformDirty || (this.isTransformDirty = a.isTransformDirty),
        this.isSharedProjectionDirty ||
          (this.isSharedProjectionDirty = a.isSharedProjectionDirty));
      const l = !!this.resumingFrom || this !== a;
      if (
        !(
          s ||
          (l && this.isSharedProjectionDirty) ||
          this.isProjectionDirty ||
          ((f = this.parent) != null && f.isProjectionDirty) ||
          this.attemptToResolveRelativeTarget ||
          this.root.updateBlockedByResize
        )
      )
        return;
      const { layout: c, layoutId: d } = this.options;
      if (!(!this.layout || !(c || d))) {
        if (
          ((this.resolvedRelativeTargetAt = fe.timestamp),
          !this.targetDelta && !this.relativeTarget)
        ) {
          const g = this.getClosestProjectingParent();
          g && g.layout && this.animationProgress !== 1
            ? ((this.relativeParent = g),
              this.forceRelativeParentToResolveTarget(),
              (this.relativeTarget = te()),
              (this.relativeTargetOrigin = te()),
              Hr(
                this.relativeTargetOrigin,
                this.layout.layoutBox,
                g.layout.layoutBox
              ),
              _e(this.relativeTarget, this.relativeTargetOrigin))
            : (this.relativeParent = this.relativeTarget = void 0);
        }
        if (
          !(!this.relativeTarget && !this.targetDelta) &&
          (this.target ||
            ((this.target = te()), (this.targetWithTransforms = te())),
          this.relativeTarget &&
          this.relativeTargetOrigin &&
          this.relativeParent &&
          this.relativeParent.target
            ? (this.forceRelativeParentToResolveTarget(),
              pk(this.target, this.relativeTarget, this.relativeParent.target))
            : this.targetDelta
              ? (this.resumingFrom
                  ? (this.target = this.applyTransform(this.layout.layoutBox))
                  : _e(this.target, this.layout.layoutBox),
                xg(this.target, this.targetDelta))
              : _e(this.target, this.layout.layoutBox),
          this.attemptToResolveRelativeTarget)
        ) {
          this.attemptToResolveRelativeTarget = !1;
          const g = this.getClosestProjectingParent();
          g &&
          !!g.resumingFrom == !!this.resumingFrom &&
          !g.options.layoutScroll &&
          g.target &&
          this.animationProgress !== 1
            ? ((this.relativeParent = g),
              this.forceRelativeParentToResolveTarget(),
              (this.relativeTarget = te()),
              (this.relativeTargetOrigin = te()),
              Hr(this.relativeTargetOrigin, this.target, g.target),
              _e(this.relativeTarget, this.relativeTargetOrigin))
            : (this.relativeParent = this.relativeTarget = void 0);
        }
      }
    }
    getClosestProjectingParent() {
      if (
        !(
          !this.parent ||
          pl(this.parent.latestValues) ||
          wg(this.parent.latestValues)
        )
      )
        return this.parent.isProjecting()
          ? this.parent
          : this.parent.getClosestProjectingParent();
    }
    isProjecting() {
      return !!(
        (this.relativeTarget || this.targetDelta || this.options.layoutRoot) &&
        this.layout
      );
    }
    calcProjection() {
      var v;
      const s = this.getLead(),
        a = !!this.resumingFrom || this !== s;
      let l = !0;
      if (
        ((this.isProjectionDirty ||
          ((v = this.parent) != null && v.isProjectionDirty)) &&
          (l = !1),
        a &&
          (this.isSharedProjectionDirty || this.isTransformDirty) &&
          (l = !1),
        this.resolvedRelativeTargetAt === fe.timestamp && (l = !1),
        l)
      )
        return;
      const { layout: u, layoutId: c } = this.options;
      if (
        ((this.isTreeAnimating = !!(
          (this.parent && this.parent.isTreeAnimating) ||
          this.currentAnimation ||
          this.pendingAnimation
        )),
        this.isTreeAnimating ||
          (this.targetDelta = this.relativeTarget = void 0),
        !this.layout || !(u || c))
      )
        return;
      _e(this.layoutCorrected, this.layout.layoutBox);
      const d = this.treeScale.x,
        f = this.treeScale.y;
      (TS(this.layoutCorrected, this.treeScale, this.path, a),
        s.layout &&
          !s.target &&
          (this.treeScale.x !== 1 || this.treeScale.y !== 1) &&
          ((s.target = s.layout.layoutBox), (s.targetWithTransforms = te())));
      const { target: g } = s;
      if (!g) {
        this.prevProjectionDelta &&
          (this.createProjectionDeltas(), this.scheduleRender());
        return;
      }
      (!this.projectionDelta || !this.prevProjectionDelta
        ? this.createProjectionDeltas()
        : (gf(this.prevProjectionDelta.x, this.projectionDelta.x),
          gf(this.prevProjectionDelta.y, this.projectionDelta.y)),
        br(this.projectionDelta, this.layoutCorrected, g, this.latestValues),
        (this.treeScale.x !== d ||
          this.treeScale.y !== f ||
          !Pf(this.projectionDelta.x, this.prevProjectionDelta.x) ||
          !Pf(this.projectionDelta.y, this.prevProjectionDelta.y)) &&
          ((this.hasProjected = !0),
          this.scheduleRender(),
          this.notifyListeners('projectionUpdate', g)));
    }
    hide() {
      this.isVisible = !1;
    }
    show() {
      this.isVisible = !0;
    }
    scheduleRender(s = !0) {
      var a;
      if (((a = this.options.visualElement) == null || a.scheduleRender(), s)) {
        const l = this.getStack();
        l && l.scheduleRender();
      }
      this.resumingFrom &&
        !this.resumingFrom.instance &&
        (this.resumingFrom = void 0);
    }
    createProjectionDeltas() {
      ((this.prevProjectionDelta = bn()),
        (this.projectionDelta = bn()),
        (this.projectionDeltaWithTransform = bn()));
    }
    setAnimationOrigin(s, a = !1) {
      const l = this.snapshot,
        u = l ? l.latestValues : {},
        c = { ...this.latestValues },
        d = bn();
      ((!this.relativeParent || !this.relativeParent.options.layoutRoot) &&
        (this.relativeTarget = this.relativeTargetOrigin = void 0),
        (this.attemptToResolveRelativeTarget = !a));
      const f = te(),
        g = l ? l.source : void 0,
        v = this.layout ? this.layout.source : void 0,
        y = g !== v,
        S = this.getStack(),
        p = !S || S.members.length <= 1,
        h = !!(y && !p && this.options.crossfade === !0 && !this.path.some(oC));
      this.animationProgress = 0;
      let m;
      ((this.mixTargetDelta = (k) => {
        const C = k / 1e3;
        (Mf(d.x, s.x, C),
          Mf(d.y, s.y, C),
          this.setTargetDelta(d),
          this.relativeTarget &&
            this.relativeTargetOrigin &&
            this.layout &&
            this.relativeParent &&
            this.relativeParent.layout &&
            (Hr(f, this.layout.layoutBox, this.relativeParent.layout.layoutBox),
            iC(this.relativeTarget, this.relativeTargetOrigin, f, C),
            m && Wk(this.relativeTarget, m) && (this.isProjectionDirty = !1),
            m || (m = te()),
            _e(m, this.relativeTarget)),
          y &&
            ((this.animationValues = c), _k(c, u, this.latestValues, C, h, p)),
          this.root.scheduleUpdateProjection(),
          this.scheduleRender(),
          (this.animationProgress = C));
      }),
        this.mixTargetDelta(this.options.layoutRoot ? 1e3 : 0));
    }
    startAnimation(s) {
      var a, l, u;
      (this.notifyListeners('animationStart'),
        (a = this.currentAnimation) == null || a.stop(),
        (u = (l = this.resumingFrom) == null ? void 0 : l.currentAnimation) ==
          null || u.stop(),
        this.pendingAnimation &&
          (Yt(this.pendingAnimation), (this.pendingAnimation = void 0)),
        (this.pendingAnimation = H.update(() => {
          ((yo.hasAnimatedSinceResize = !0),
            this.motionValue || (this.motionValue = ir(0)),
            (this.currentAnimation = jk(this.motionValue, [0, 1e3], {
              ...s,
              velocity: 0,
              isSync: !0,
              onUpdate: (c) => {
                (this.mixTargetDelta(c), s.onUpdate && s.onUpdate(c));
              },
              onStop: () => {},
              onComplete: () => {
                (s.onComplete && s.onComplete(), this.completeAnimation());
              },
            })),
            this.resumingFrom &&
              (this.resumingFrom.currentAnimation = this.currentAnimation),
            (this.pendingAnimation = void 0));
        })));
    }
    completeAnimation() {
      this.resumingFrom &&
        ((this.resumingFrom.currentAnimation = void 0),
        (this.resumingFrom.preserveOpacity = void 0));
      const s = this.getStack();
      (s && s.exitAnimationComplete(),
        (this.resumingFrom =
          this.currentAnimation =
          this.animationValues =
            void 0),
        this.notifyListeners('animationComplete'));
    }
    finishAnimation() {
      (this.currentAnimation &&
        (this.mixTargetDelta && this.mixTargetDelta(Kk),
        this.currentAnimation.stop()),
        this.completeAnimation());
    }
    applyTransformsToTarget() {
      const s = this.getLead();
      let {
        targetWithTransforms: a,
        target: l,
        layout: u,
        latestValues: c,
      } = s;
      if (!(!a || !l || !u)) {
        if (
          this !== s &&
          this.layout &&
          u &&
          Ug(this.options.animationType, this.layout.layoutBox, u.layoutBox)
        ) {
          l = this.target || te();
          const d = Se(this.layout.layoutBox.x);
          ((l.x.min = s.target.x.min), (l.x.max = l.x.min + d));
          const f = Se(this.layout.layoutBox.y);
          ((l.y.min = s.target.y.min), (l.y.max = l.y.min + f));
        }
        (_e(a, l),
          Wn(a, c),
          br(this.projectionDeltaWithTransform, this.layoutCorrected, a, c));
      }
    }
    registerSharedNode(s, a) {
      (this.sharedNodes.has(s) || this.sharedNodes.set(s, new bk()),
        this.sharedNodes.get(s).add(a));
      const u = a.options.initialPromotionConfig;
      a.promote({
        transition: u ? u.transition : void 0,
        preserveFollowOpacity:
          u && u.shouldPreserveFollowOpacity
            ? u.shouldPreserveFollowOpacity(a)
            : void 0,
      });
    }
    isLead() {
      const s = this.getStack();
      return s ? s.lead === this : !0;
    }
    getLead() {
      var a;
      const { layoutId: s } = this.options;
      return s
        ? ((a = this.getStack()) == null ? void 0 : a.lead) || this
        : this;
    }
    getPrevLead() {
      var a;
      const { layoutId: s } = this.options;
      return s ? ((a = this.getStack()) == null ? void 0 : a.prevLead) : void 0;
    }
    getStack() {
      const { layoutId: s } = this.options;
      if (s) return this.root.sharedNodes.get(s);
    }
    promote({ needsReset: s, transition: a, preserveFollowOpacity: l } = {}) {
      const u = this.getStack();
      (u && u.promote(this, l),
        s && ((this.projectionDelta = void 0), (this.needsReset = !0)),
        a && this.setOptions({ transition: a }));
    }
    relegate() {
      const s = this.getStack();
      return s ? s.relegate(this) : !1;
    }
    resetSkewAndRotation() {
      const { visualElement: s } = this.options;
      if (!s) return;
      let a = !1;
      const { latestValues: l } = s;
      if (
        ((l.z ||
          l.rotate ||
          l.rotateX ||
          l.rotateY ||
          l.rotateZ ||
          l.skewX ||
          l.skewY) &&
          (a = !0),
        !a)
      )
        return;
      const u = {};
      l.z && ra('z', s, u, this.animationValues);
      for (let c = 0; c < na.length; c++)
        (ra(`rotate${na[c]}`, s, u, this.animationValues),
          ra(`skew${na[c]}`, s, u, this.animationValues));
      s.render();
      for (const c in u)
        (s.setStaticValue(c, u[c]),
          this.animationValues && (this.animationValues[c] = u[c]));
      s.scheduleRender();
    }
    applyProjectionStyles(s, a) {
      if (!this.instance || this.isSVG) return;
      if (!this.isVisible) {
        s.visibility = 'hidden';
        return;
      }
      const l = this.getTransformTemplate();
      if (this.needsReset) {
        ((this.needsReset = !1),
          (s.visibility = ''),
          (s.opacity = ''),
          (s.pointerEvents = go(a == null ? void 0 : a.pointerEvents) || ''),
          (s.transform = l ? l(this.latestValues, '') : 'none'));
        return;
      }
      const u = this.getLead();
      if (!this.projectionDelta || !this.layout || !u.target) {
        (this.options.layoutId &&
          ((s.opacity =
            this.latestValues.opacity !== void 0
              ? this.latestValues.opacity
              : 1),
          (s.pointerEvents = go(a == null ? void 0 : a.pointerEvents) || '')),
          this.hasProjected &&
            !ln(this.latestValues) &&
            ((s.transform = l ? l({}, '') : 'none'), (this.hasProjected = !1)));
        return;
      }
      s.visibility = '';
      const c = u.animationValues || u.latestValues;
      this.applyTransformsToTarget();
      let d = Hk(this.projectionDeltaWithTransform, this.treeScale, c);
      (l && (d = l(c, d)), (s.transform = d));
      const { x: f, y: g } = this.projectionDelta;
      ((s.transformOrigin = `${f.origin * 100}% ${g.origin * 100}% 0`),
        u.animationValues
          ? (s.opacity =
              u === this
                ? (c.opacity ?? this.latestValues.opacity ?? 1)
                : this.preserveOpacity
                  ? this.latestValues.opacity
                  : c.opacityExit)
          : (s.opacity =
              u === this
                ? c.opacity !== void 0
                  ? c.opacity
                  : ''
                : c.opacityExit !== void 0
                  ? c.opacityExit
                  : 0));
      for (const v in pi) {
        if (c[v] === void 0) continue;
        const { correct: y, applyTo: S, isCSSVariable: p } = pi[v],
          h = d === 'none' ? c[v] : y(c[v], u);
        if (S) {
          const m = S.length;
          for (let k = 0; k < m; k++) s[S[k]] = h;
        } else
          p ? (this.options.visualElement.renderState.vars[v] = h) : (s[v] = h);
      }
      this.options.layoutId &&
        (s.pointerEvents =
          u === this ? go(a == null ? void 0 : a.pointerEvents) || '' : 'none');
    }
    clearSnapshot() {
      this.resumeFrom = this.snapshot = void 0;
    }
    resetTree() {
      (this.root.nodes.forEach((s) => {
        var a;
        return (a = s.currentAnimation) == null ? void 0 : a.stop();
      }),
        this.root.nodes.forEach(Tf),
        this.root.sharedNodes.clear());
    }
  };
}
function Yk(e) {
  e.updateLayout();
}
function Qk(e) {
  var n;
  const t = ((n = e.resumeFrom) == null ? void 0 : n.snapshot) || e.snapshot;
  if (e.isLead() && e.layout && t && e.hasListeners('didUpdate')) {
    const { layoutBox: r, measuredBox: i } = e.layout,
      { animationType: o } = e.options,
      s = t.source !== e.layout.source;
    o === 'size'
      ? Oe((d) => {
          const f = s ? t.measuredBox[d] : t.layoutBox[d],
            g = Se(f);
          ((f.min = r[d].min), (f.max = f.min + g));
        })
      : Ug(o, t.layoutBox, r) &&
        Oe((d) => {
          const f = s ? t.measuredBox[d] : t.layoutBox[d],
            g = Se(r[d]);
          ((f.max = f.min + g),
            e.relativeTarget &&
              !e.currentAnimation &&
              ((e.isProjectionDirty = !0),
              (e.relativeTarget[d].max = e.relativeTarget[d].min + g)));
        });
    const a = bn();
    br(a, r, t.layoutBox);
    const l = bn();
    s ? br(l, e.applyTransform(i, !0), t.measuredBox) : br(l, r, t.layoutBox);
    const u = !Og(a);
    let c = !1;
    if (!e.resumeFrom) {
      const d = e.getClosestProjectingParent();
      if (d && !d.resumeFrom) {
        const { snapshot: f, layout: g } = d;
        if (f && g) {
          const v = te();
          Hr(v, t.layoutBox, f.layoutBox);
          const y = te();
          (Hr(y, r, g.layoutBox),
            Bg(v, y) || (c = !0),
            d.options.layoutRoot &&
              ((e.relativeTarget = y),
              (e.relativeTargetOrigin = v),
              (e.relativeParent = d)));
        }
      }
    }
    e.notifyListeners('didUpdate', {
      layout: r,
      snapshot: t,
      delta: l,
      layoutDelta: a,
      hasLayoutChanged: u,
      hasRelativeLayoutChanged: c,
    });
  } else if (e.isLead()) {
    const { onExitComplete: r } = e.options;
    r && r();
  }
  e.options.transition = void 0;
}
function Xk(e) {
  e.parent &&
    (e.isProjecting() || (e.isProjectionDirty = e.parent.isProjectionDirty),
    e.isSharedProjectionDirty ||
      (e.isSharedProjectionDirty = !!(
        e.isProjectionDirty ||
        e.parent.isProjectionDirty ||
        e.parent.isSharedProjectionDirty
      )),
    e.isTransformDirty || (e.isTransformDirty = e.parent.isTransformDirty));
}
function Zk(e) {
  e.isProjectionDirty = e.isSharedProjectionDirty = e.isTransformDirty = !1;
}
function Jk(e) {
  e.clearSnapshot();
}
function Tf(e) {
  e.clearMeasurements();
}
function Ef(e) {
  e.isLayoutDirty = !1;
}
function qk(e) {
  const { visualElement: t } = e.options;
  (t && t.getProps().onBeforeLayoutMeasure && t.notify('BeforeLayoutMeasure'),
    e.resetTransform());
}
function Rf(e) {
  (e.finishAnimation(),
    (e.targetDelta = e.relativeTarget = e.target = void 0),
    (e.isProjectionDirty = !0));
}
function eC(e) {
  e.resolveTargetDelta();
}
function tC(e) {
  e.calcProjection();
}
function nC(e) {
  e.resetSkewAndRotation();
}
function rC(e) {
  e.removeLeadSnapshot();
}
function Mf(e, t, n) {
  ((e.translate = Q(t.translate, 0, n)),
    (e.scale = Q(t.scale, 1, n)),
    (e.origin = t.origin),
    (e.originPoint = t.originPoint));
}
function Lf(e, t, n, r) {
  ((e.min = Q(t.min, n.min, r)), (e.max = Q(t.max, n.max, r)));
}
function iC(e, t, n, r) {
  (Lf(e.x, t.x, n.x, r), Lf(e.y, t.y, n.y, r));
}
function oC(e) {
  return e.animationValues && e.animationValues.opacityExit !== void 0;
}
const sC = { duration: 0.45, ease: [0.4, 0, 0.1, 1] },
  Af = (e) =>
    typeof navigator < 'u' &&
    navigator.userAgent &&
    navigator.userAgent.toLowerCase().includes(e),
  Nf = Af('applewebkit/') && !Af('chrome/') ? Math.round : We;
function jf(e) {
  ((e.min = Nf(e.min)), (e.max = Nf(e.max)));
}
function aC(e) {
  (jf(e.x), jf(e.y));
}
function Ug(e, t, n) {
  return (
    e === 'position' || (e === 'preserve-aspect' && !hk(Cf(t), Cf(n), 0.2))
  );
}
function lC(e) {
  var t;
  return e !== e.root && ((t = e.scroll) == null ? void 0 : t.wasRoot);
}
const uC = $g({
    attachResizeListener: (e, t) => gi(e, 'resize', t),
    measureScroll: () => ({
      x: document.documentElement.scrollLeft || document.body.scrollLeft,
      y: document.documentElement.scrollTop || document.body.scrollTop,
    }),
    checkIsScrollRoot: () => !0,
  }),
  ia = { current: void 0 },
  Wg = $g({
    measureScroll: (e) => ({ x: e.scrollLeft, y: e.scrollTop }),
    defaultParent: () => {
      if (!ia.current) {
        const e = new uC({});
        (e.mount(window), e.setOptions({ layoutScroll: !0 }), (ia.current = e));
      }
      return ia.current;
    },
    resetTransform: (e, t) => {
      e.style.transform = t !== void 0 ? t : 'none';
    },
    checkIsScrollRoot: (e) => window.getComputedStyle(e).position === 'fixed',
  }),
  cC = {
    pan: { Feature: Mk },
    drag: { Feature: Rk, ProjectionNode: Wg, MeasureLayout: Ig },
  };
function Df(e, t, n) {
  const { props: r } = e;
  e.animationState &&
    r.whileHover &&
    e.animationState.setActive('whileHover', n === 'Start');
  const i = 'onHover' + n,
    o = r[i];
  o && H.postRender(() => o(t, Ri(t)));
}
class dC extends tn {
  mount() {
    const { current: t } = this.node;
    t &&
      (this.unmount = Dx(
        t,
        (n, r) => (Df(this.node, r, 'Start'), (i) => Df(this.node, i, 'End'))
      ));
  }
  unmount() {}
}
class fC extends tn {
  constructor() {
    (super(...arguments), (this.isActive = !1));
  }
  onFocus() {
    let t = !1;
    try {
      t = this.node.current.matches(':focus-visible');
    } catch {
      t = !0;
    }
    !t ||
      !this.node.animationState ||
      (this.node.animationState.setActive('whileFocus', !0),
      (this.isActive = !0));
  }
  onBlur() {
    !this.isActive ||
      !this.node.animationState ||
      (this.node.animationState.setActive('whileFocus', !1),
      (this.isActive = !1));
  }
  mount() {
    this.unmount = Pi(
      gi(this.node.current, 'focus', () => this.onFocus()),
      gi(this.node.current, 'blur', () => this.onBlur())
    );
  }
  unmount() {}
}
function Vf(e, t, n) {
  const { props: r } = e;
  if (e.current instanceof HTMLButtonElement && e.current.disabled) return;
  e.animationState &&
    r.whileTap &&
    e.animationState.setActive('whileTap', n === 'Start');
  const i = 'onTap' + (n === 'End' ? '' : n),
    o = r[i];
  o && H.postRender(() => o(t, Ri(t)));
}
class hC extends tn {
  mount() {
    const { current: t } = this.node;
    t &&
      (this.unmount = _x(
        t,
        (n, r) => (
          Vf(this.node, r, 'Start'),
          (i, { success: o }) => Vf(this.node, i, o ? 'End' : 'Cancel')
        ),
        { useGlobalTarget: this.node.props.globalTapTarget }
      ));
  }
  unmount() {}
}
const Sl = new WeakMap(),
  oa = new WeakMap(),
  pC = (e) => {
    const t = Sl.get(e.target);
    t && t(e);
  },
  mC = (e) => {
    e.forEach(pC);
  };
function gC({ root: e, ...t }) {
  const n = e || document;
  oa.has(n) || oa.set(n, {});
  const r = oa.get(n),
    i = JSON.stringify(t);
  return (
    r[i] || (r[i] = new IntersectionObserver(mC, { root: e, ...t })),
    r[i]
  );
}
function yC(e, t, n) {
  const r = gC(t);
  return (
    Sl.set(e, n),
    r.observe(e),
    () => {
      (Sl.delete(e), r.unobserve(e));
    }
  );
}
const vC = { some: 0, all: 1 };
class wC extends tn {
  constructor() {
    (super(...arguments), (this.hasEnteredView = !1), (this.isInView = !1));
  }
  startObserver() {
    this.unmount();
    const { viewport: t = {} } = this.node.getProps(),
      { root: n, margin: r, amount: i = 'some', once: o } = t,
      s = {
        root: n ? n.current : void 0,
        rootMargin: r,
        threshold: typeof i == 'number' ? i : vC[i],
      },
      a = (l) => {
        const { isIntersecting: u } = l;
        if (
          this.isInView === u ||
          ((this.isInView = u), o && !u && this.hasEnteredView)
        )
          return;
        (u && (this.hasEnteredView = !0),
          this.node.animationState &&
            this.node.animationState.setActive('whileInView', u));
        const { onViewportEnter: c, onViewportLeave: d } = this.node.getProps(),
          f = u ? c : d;
        f && f(l);
      };
    return yC(this.node.current, s, a);
  }
  mount() {
    this.startObserver();
  }
  update() {
    if (typeof IntersectionObserver > 'u') return;
    const { props: t, prevProps: n } = this.node;
    ['amount', 'margin', 'root'].some(xC(t, n)) && this.startObserver();
  }
  unmount() {}
}
function xC({ viewport: e = {} }, { viewport: t = {} } = {}) {
  return (n) => e[n] !== t[n];
}
const SC = {
    inView: { Feature: wC },
    tap: { Feature: hC },
    focus: { Feature: fC },
    hover: { Feature: dC },
  },
  kC = { layout: { ProjectionNode: Wg, MeasureLayout: Ig } },
  CC = { ...ak, ...SC, ...cC, ...kC },
  Nr = kS(CC, IS);
function PC(e = {}) {
  const {
    immediate: t = !1,
    onNeedRefresh: n,
    onOfflineReady: r,
    onRegistered: i,
    onRegisteredSW: o,
    onRegisterError: s,
  } = e;
  let a, l, u;
  const c = async (f = !0) => {
    (await l, u == null || u());
  };
  async function d() {
    if ('serviceWorker' in navigator) {
      if (
        ((a = await yu(
          () => import('./workbox-window.prod.es5-5ffdab76.js'),
          []
        )
          .then(
            ({ Workbox: f }) =>
              new f('/imposter-party/sw.js', {
                scope: '/imposter-party/',
                type: 'classic',
              })
          )
          .catch((f) => {
            s == null || s(f);
          })),
        !a)
      )
        return;
      u = () => {
        a == null || a.messageSkipWaiting();
      };
      {
        let f = !1;
        const g = () => {
          ((f = !0),
            a == null ||
              a.addEventListener('controlling', (v) => {
                v.isUpdate && window.location.reload();
              }),
            n == null || n());
        };
        (a.addEventListener('installed', (v) => {
          typeof v.isUpdate > 'u'
            ? typeof v.isExternal < 'u' && v.isExternal
              ? g()
              : !f && (r == null || r())
            : v.isUpdate || r == null || r();
        }),
          a.addEventListener('waiting', g));
      }
      a.register({ immediate: t })
        .then((f) => {
          o ? o('/imposter-party/sw.js', f) : i == null || i(f);
        })
        .catch((f) => {
          s == null || s(f);
        });
    }
  }
  return ((l = d()), c);
}
function TC(e = {}) {
  const {
      immediate: t = !0,
      onNeedRefresh: n,
      onOfflineReady: r,
      onRegistered: i,
      onRegisteredSW: o,
      onRegisterError: s,
    } = e,
    [a, l] = x.useState(!1),
    [u, c] = x.useState(!1),
    [d] = x.useState(() =>
      PC({
        immediate: t,
        onOfflineReady() {
          (c(!0), r == null || r());
        },
        onNeedRefresh() {
          (l(!0), n == null || n());
        },
        onRegistered: i,
        onRegisteredSW: o,
        onRegisterError: s,
      })
    );
  return { needRefresh: [a, l], offlineReady: [u, c], updateServiceWorker: d };
}
function mt({ children: e, className: t = '' }) {
  return w.jsx('div', {
    className: `border rounded-xl shadow bg-white ${t}`,
    children: e,
  });
}
function gt({ children: e }) {
  return w.jsx('div', { className: 'p-4', children: e });
}
function U({ children: e, ...t }) {
  return w.jsx('button', {
    className: 'bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded',
    ...t,
    children: e,
  });
}
function It({ ...e }) {
  return w.jsx('input', { className: 'border rounded px-2 py-1 w-full', ...e });
}
function bg({ players: e, highscore: t }) {
  const n = [...e].sort((r, i) => {
    var a, l, u, c;
    const o =
      (((a = t[r.name]) == null ? void 0 : a.wins) ?? 0) * 2 -
      (((l = t[r.name]) == null ? void 0 : l.losses) ?? 0);
    return (
      (((u = t[i.name]) == null ? void 0 : u.wins) ?? 0) * 2 -
      (((c = t[i.name]) == null ? void 0 : c.losses) ?? 0) -
      o
    );
  });
  return w.jsx('ul', {
    className: 'text-sm space-y-1',
    children: n.map((r, i) => {
      var o, s, a, l;
      return w.jsxs(
        'li',
        {
          className: 'flex justify-between bg-white rounded p-2 shadow',
          children: [
            w.jsxs('span', {
              children: [
                i === 0 && '🥇 ',
                i === 1 && '🥈 ',
                i === 2 && '🥉 ',
                r.name,
              ],
            }),
            w.jsxs('span', {
              children: [
                ((o = t[r.name]) == null ? void 0 : o.wins) ?? 0,
                ' Siege /',
                ' ',
                ((s = t[r.name]) == null ? void 0 : s.losses) ?? 0,
                ' Niederlagen / Punkte:',
                ' ',
                (((a = t[r.name]) == null ? void 0 : a.wins) ?? 0) * 2 -
                  (((l = t[r.name]) == null ? void 0 : l.losses) ?? 0),
              ],
            }),
          ],
        },
        r.name
      );
    }),
  });
}
function EC() {
  const {
    offlineReady: [e, t],
    needRefresh: [n, r],
    updateServiceWorker: i,
  } = TC({
    onRegistered(o) {
      console.log('SW registered:', o);
    },
    onRegisterError(o) {
      console.error('SW registration error:', o);
    },
  });
  return n
    ? w.jsx('div', {
        className: 'fixed bottom-4 right-4 p-4 rounded shadow',
        children: w.jsx('button', {
          className: 'ml-2 px-2 py-1 bg-blue-500 text-white rounded',
          onClick: () => i(!0),
          children: '🔄 Neue Version verfügbar!',
        }),
      })
    : null;
}
const If = (e) => {
    let t;
    const n = new Set(),
      r = (u, c) => {
        const d = typeof u == 'function' ? u(t) : u;
        if (!Object.is(d, t)) {
          const f = t;
          ((t =
            (c ?? (typeof d != 'object' || d === null))
              ? d
              : Object.assign({}, t, d)),
            n.forEach((g) => g(t, f)));
        }
      },
      i = () => t,
      a = {
        setState: r,
        getState: i,
        getInitialState: () => l,
        subscribe: (u) => (n.add(u), () => n.delete(u)),
      },
      l = (t = e(r, i, a));
    return a;
  },
  RC = (e) => (e ? If(e) : If),
  MC = (e) => e;
function LC(e, t = MC) {
  const n = sa.useSyncExternalStore(
    e.subscribe,
    () => t(e.getState()),
    () => t(e.getInitialState())
  );
  return (sa.useDebugValue(n), n);
}
const Ff = (e) => {
    const t = RC(e),
      n = (r) => LC(t, r);
    return (Object.assign(n, t), n);
  },
  Hg = (e) => (e ? Ff(e) : Ff);
function AC(e, t) {
  let n;
  try {
    n = e();
  } catch {
    return;
  }
  return {
    getItem: (i) => {
      var o;
      const s = (l) =>
          l === null ? null : JSON.parse(l, t == null ? void 0 : t.reviver),
        a = (o = n.getItem(i)) != null ? o : null;
      return a instanceof Promise ? a.then(s) : s(a);
    },
    setItem: (i, o) =>
      n.setItem(i, JSON.stringify(o, t == null ? void 0 : t.replacer)),
    removeItem: (i) => n.removeItem(i),
  };
}
const kl = (e) => (t) => {
    try {
      const n = e(t);
      return n instanceof Promise
        ? n
        : {
            then(r) {
              return kl(r)(n);
            },
            catch(r) {
              return this;
            },
          };
    } catch (n) {
      return {
        then(r) {
          return this;
        },
        catch(r) {
          return kl(r)(n);
        },
      };
    }
  },
  NC = (e, t) => (n, r, i) => {
    let o = {
        storage: AC(() => localStorage),
        partialize: (y) => y,
        version: 0,
        merge: (y, S) => ({ ...S, ...y }),
        ...t,
      },
      s = !1;
    const a = new Set(),
      l = new Set();
    let u = o.storage;
    if (!u)
      return e(
        (...y) => {
          (console.warn(
            `[zustand persist middleware] Unable to update item '${o.name}', the given storage is currently unavailable.`
          ),
            n(...y));
        },
        r,
        i
      );
    const c = () => {
        const y = o.partialize({ ...r() });
        return u.setItem(o.name, { state: y, version: o.version });
      },
      d = i.setState;
    i.setState = (y, S) => {
      (d(y, S), c());
    };
    const f = e(
      (...y) => {
        (n(...y), c());
      },
      r,
      i
    );
    i.getInitialState = () => f;
    let g;
    const v = () => {
      var y, S;
      if (!u) return;
      ((s = !1),
        a.forEach((h) => {
          var m;
          return h((m = r()) != null ? m : f);
        }));
      const p =
        ((S = o.onRehydrateStorage) == null
          ? void 0
          : S.call(o, (y = r()) != null ? y : f)) || void 0;
      return kl(u.getItem.bind(u))(o.name)
        .then((h) => {
          if (h)
            if (typeof h.version == 'number' && h.version !== o.version) {
              if (o.migrate) {
                const m = o.migrate(h.state, h.version);
                return m instanceof Promise ? m.then((k) => [!0, k]) : [!0, m];
              }
              console.error(
                "State loaded from storage couldn't be migrated since no migrate function was provided"
              );
            } else return [!1, h.state];
          return [!1, void 0];
        })
        .then((h) => {
          var m;
          const [k, C] = h;
          if (((g = o.merge(C, (m = r()) != null ? m : f)), n(g, !0), k))
            return c();
        })
        .then(() => {
          (p == null || p(g, void 0),
            (g = r()),
            (s = !0),
            l.forEach((h) => h(g)));
        })
        .catch((h) => {
          p == null || p(void 0, h);
        });
    };
    return (
      (i.persist = {
        setOptions: (y) => {
          ((o = { ...o, ...y }), y.storage && (u = y.storage));
        },
        clearStorage: () => {
          u == null || u.removeItem(o.name);
        },
        getOptions: () => o,
        rehydrate: () => v(),
        hasHydrated: () => s,
        onHydrate: (y) => (
          a.add(y),
          () => {
            a.delete(y);
          }
        ),
        onFinishHydration: (y) => (
          l.add(y),
          () => {
            l.delete(y);
          }
        ),
      }),
      o.skipHydration || v(),
      g || f
    );
  },
  jC = NC,
  _f = {
    numImposters: 1,
    showHints: !0,
    roundTimeMinutes: 2,
    votingTimeMinutes: 0,
    allowRandomImposters: !1,
    randomImposterChance: 1,
  },
  Of = [
    {
      name: 'Jugendworte',
      active: !0,
      words: [
        { word: 'cringe', hint: 'Gefühl' },
        { word: 'sus', hint: 'Auffällig' },
        { word: 'no front', hint: 'Nett sein' },
        { word: 'slay', hint: 'Korrekt' },
        { word: 'goofy', hint: 'Disney' },
        { word: 'lit', hint: 'Stimmung' },
        { word: 'bro', hint: 'Beziehung' },
        { word: 'sheesh', hint: 'Ausruf' },
        { word: 'vibe', hint: 'Atmosphäre' },
        { word: 'drip', hint: 'Klamotten' },
        { word: 'based', hint: 'Einstellung' },
        { word: 'rizz', hint: 'Anziehung' },
        { word: 'NPC', hint: 'Verhalten' },
        { word: 'mid', hint: 'Qualität' },
        { word: 'YOLO', hint: 'Motto' },
        { word: 'wild', hint: 'Überraschend' },
        { word: 'lowkey', hint: 'Zurückhaltend' },
        { word: 'highkey', hint: 'Offensichtlich' },
        { word: 'bussin', hint: 'Lecker' },
        { word: 'savage', hint: 'Frech' },
        { word: 'skrrt', hint: 'Sound' },
        { word: 'flexen', hint: 'Angeben' },
        { word: 'L', hint: 'Verlust' },
        { word: 'W', hint: 'Gewinn' },
        { word: 'tea', hint: 'Klatsch' },
        { word: 'ghosten', hint: 'Kontakt' },
        { word: 'simp', hint: 'Übertrieben' },
        { word: 'sus', hint: 'Verdächtig' },
        { word: 'grind', hint: 'Arbeiten' },
        { word: 'AF', hint: 'Verstärkung' },
        { word: 'on fleek', hint: 'Perfekt' },
        { word: 'bruh', hint: 'Reaktion' },
        { word: 'snatched', hint: 'Aussehen' },
        { word: 'bet', hint: 'Zustimmung' },
        { word: 'cap', hint: 'Lüge' },
        { word: 'no cap', hint: 'Ehrlich' },
        { word: 'mood', hint: 'Gefühl' },
        { word: 'deadass', hint: 'Ernst' },
        { word: 'main character', hint: 'Zentrum' },
        { word: 'delulu', hint: 'Fantasie' },
        { word: 'touch grass', hint: 'Realität' },
        { word: 'suspect', hint: 'Zweifel' },
        { word: 'iconic', hint: 'Unvergesslich' },
        { word: 'valid', hint: 'Akzeptiert' },
        { word: 'ratio', hint: 'Antwort' },
        { word: 'fr', hint: 'Zustimmung' },
        { word: 'irl', hint: 'Echt' },
        { word: 'fomo', hint: 'Verpassen' },
        { word: 'stan', hint: 'Fan' },
        { word: 'ick', hint: 'Abneigung' },
        { word: 'glow up', hint: 'Veränderung' },
      ],
    },
    {
      name: 'Tiere & Natur',
      active: !0,
      words: [
        { word: 'Löwe', hint: 'Majestätisch' },
        { word: 'Tiger', hint: 'Streifen' },
        { word: 'Elefant', hint: 'Groß' },
        { word: 'Giraffe', hint: 'Hals' },
        { word: 'Pinguin', hint: 'Kalt' },
        { word: 'Koala', hint: 'Australien' },
        { word: 'Känguru', hint: 'Beutel' },
        { word: 'Zebra', hint: 'Schwarzweiß' },
        { word: 'Krokodil', hint: 'Reptil' },
        { word: 'Faultier', hint: 'Langsam' },
        { word: 'Eichhörnchen', hint: 'Nuss' },
        { word: 'Wolf', hint: 'Rudel' },
        { word: 'Fuchs', hint: 'Schlau' },
        { word: 'Biber', hint: 'Damm' },
        { word: 'Delfin', hint: 'Intelligent' },
        { word: 'Wal', hint: 'Riesig' },
        { word: 'Hai', hint: 'Zähne' },
        { word: 'Tintenfisch', hint: 'Arme' },
        { word: 'Qualle', hint: 'Glasig' },
        { word: 'Pfau', hint: 'Farben' },
        { word: 'Adler', hint: 'Flug' },
        { word: 'Eule', hint: 'Nacht' },
        { word: 'Taube', hint: 'Frieden' },
        { word: 'Schmetterling', hint: 'Leicht' },
        { word: 'Biene', hint: 'Bestäuber' },
        { word: 'Ameise', hint: 'Kolonie' },
        { word: 'Grashüpfer', hint: 'Springen' },
        { word: 'Marienkäfer', hint: 'Punkte' },
        { word: 'Schnecke', hint: 'Haus' },
        { word: 'Chamäleon', hint: 'Farbe' },
        { word: 'Papagei', hint: 'Sprache' },
        { word: 'Kakadu', hint: 'Frisur' },
        { word: 'Luchs', hint: 'Pinselohren' },
        { word: 'Waschbär', hint: 'Maske' },
        { word: 'Eisbär', hint: 'Nordpol' },
        { word: 'Seestern', hint: 'Meer' },
        { word: 'Koralle', hint: 'Riff' },
        { word: 'Bambus', hint: 'Pflanze' },
        { word: 'Tanne', hint: 'Nadel' },
        { word: 'Ahorn', hint: 'Sirup' },
        { word: 'Eiche', hint: 'Stark' },
        { word: 'Mohnblume', hint: 'Rot' },
        { word: 'Löwenzahn', hint: 'Pusteblume' },
        { word: 'Kaktus', hint: 'Stachelig' },
        { word: 'Pilz', hint: 'Wald' },
        { word: 'Moos', hint: 'Weich' },
        { word: 'Farn', hint: 'Urzeitlich' },
        { word: 'Gletscher', hint: 'Eis' },
        { word: 'Vulkan', hint: 'Lava' },
        { word: 'Regenbogen', hint: 'Farben' },
      ],
    },
    {
      name: 'Sport und Freizeit',
      active: !0,
      words: [
        { word: 'Fußball', hint: 'Tor' },
        { word: 'Basketball', hint: 'Korb' },
        { word: 'Volleyball', hint: 'Netz' },
        { word: 'Tennis', hint: 'Aufschlag' },
        { word: 'Tischtennis', hint: 'Platte' },
        { word: 'Badminton', hint: 'Federball' },
        { word: 'Schwimmen', hint: 'Wasser' },
        { word: 'Joggen', hint: 'Ausdauer' },
        { word: 'Radfahren', hint: 'Zweirad' },
        { word: 'Skaten', hint: 'Rollen' },
        { word: 'Reiten', hint: 'Pferd' },
        { word: 'Klettern', hint: 'Höhe' },
        { word: 'Yoga', hint: 'Dehnung' },
        { word: 'Pilates', hint: 'Körpermitte' },
        { word: 'Boxen', hint: 'Kampf' },
        { word: 'Judo', hint: 'Wurf' },
        { word: 'Karate', hint: 'Schlag' },
        { word: 'Fechten', hint: 'Klinge' },
        { word: 'Golf', hint: 'Loch' },
        { word: 'Bowling', hint: 'Kegel' },
        { word: 'Billard', hint: 'Kugeln' },
        { word: 'Darts', hint: 'Ziel' },
        { word: 'Tanzen', hint: 'Musik' },
        { word: 'Zumba', hint: 'Fitness' },
        { word: 'Skifahren', hint: 'Schnee' },
        { word: 'Snowboarden', hint: 'Brett' },
        { word: 'Schlittschuhlaufen', hint: 'Eis' },
        { word: 'Surfen', hint: 'Welle' },
        { word: 'Wandern', hint: 'Natur' },
        { word: 'Angeln', hint: 'Haken' },
        { word: 'Campen', hint: 'Zelt' },
        { word: 'Kanu', hint: 'Paddel' },
        { word: 'Segeln', hint: 'Wind' },
        { word: 'Tauchen', hint: 'Tief' },
        { word: 'Parkour', hint: 'Hindernis' },
        { word: 'Slackline', hint: 'Balance' },
        { word: 'Frisbee', hint: 'Scheibe' },
        { word: 'Schach', hint: 'Brett' },
        { word: 'Kartenspiel', hint: 'Blatt' },
        { word: 'Videospiel', hint: 'Konsole' },
        { word: 'Lesen', hint: 'Buch' },
        { word: 'Malen', hint: 'Farbe' },
        { word: 'Gärtnern', hint: 'Pflanzen' },
        { word: 'Kochen', hint: 'Topf' },
        { word: 'Backen', hint: 'Ofen' },
        { word: 'Fotografieren', hint: 'Kamera' },
        { word: 'Musizieren', hint: 'Instrument' },
        { word: 'Karaoke', hint: 'Singen' },
        { word: 'Theater', hint: 'Bühne' },
      ],
    },
    {
      name: 'Wissen und Schule',
      active: !0,
      words: [
        { word: 'Mathematik', hint: 'Zahlen' },
        { word: 'Deutsch', hint: 'Sprache' },
        { word: 'Englisch', hint: 'Fremdsprache' },
        { word: 'Biologie', hint: 'Leben' },
        { word: 'Chemie', hint: 'Reaktion' },
        { word: 'Physik', hint: 'Kraft' },
        { word: 'Geschichte', hint: 'Vergangenheit' },
        { word: 'Geografie', hint: 'Karte' },
        { word: 'Politik', hint: 'Staat' },
        { word: 'Informatik', hint: 'Computer' },
        { word: 'Kunst', hint: 'Malen' },
        { word: 'Musik', hint: 'Töne' },
        { word: 'Sport', hint: 'Bewegung' },
        { word: 'Religion', hint: 'Glaube' },
        { word: 'Ethik', hint: 'Moral' },
        { word: 'Lehrer', hint: 'Person' },
        { word: 'Schüler', hint: 'Lernen' },
        { word: 'Klasse', hint: 'Raum' },
        { word: 'Tafel', hint: 'Schreiben' },
        { word: 'Heft', hint: 'Notizen' },
        { word: 'Buch', hint: 'Lesen' },
        { word: 'Schulranzen', hint: 'Tragen' },
        { word: 'Lineal', hint: 'Messen' },
        { word: 'Bleistift', hint: 'Schreiben' },
        { word: 'Füller', hint: 'Tinte' },
        { word: 'Radiergummi', hint: 'Korrigieren' },
        { word: 'Zirkel', hint: 'Kreis' },
        { word: 'Taschenrechner', hint: 'Rechnen' },
        { word: 'Hausaufgabe', hint: 'Zuhause' },
        { word: 'Klassenarbeit', hint: 'Test' },
        { word: 'Zeugnis', hint: 'Bewertung' },
        { word: 'Pause', hint: 'Zwischenzeit' },
        { word: 'Schulhof', hint: 'Außen' },
        { word: 'Lernen', hint: 'Wissen' },
        { word: 'Lesen', hint: 'Text' },
        { word: 'Schreiben', hint: 'Stift' },
        { word: 'Rechnen', hint: 'Aufgabe' },
        { word: 'Experiment', hint: 'Versuch' },
        { word: 'Projekt', hint: 'Gruppe' },
        { word: 'Aufsatz', hint: 'Textform' },
        { word: 'Vokabel', hint: 'Wortschatz' },
        { word: 'Tafelbild', hint: 'Visualisierung' },
        { word: 'Tageslichtprojektor', hint: 'Oldschool' },
        { word: 'Whiteboard', hint: 'Modern' },
        { word: 'Präsentation', hint: 'Vortrag' },
        { word: 'Bibliothek', hint: 'Bücher' },
        { word: 'Pausebrot', hint: 'Snack' },
        { word: 'Abitur', hint: 'Abschluss' },
        { word: 'Note', hint: 'Bewertung' },
      ],
    },
    {
      name: 'Feste & Feiern',
      active: !0,
      words: [
        { word: 'Geburtstag', hint: 'Kerzen' },
        { word: 'Weihnachten', hint: 'Geschenke' },
        { word: 'Ostern', hint: 'Eier' },
        { word: 'Silvester', hint: 'Feuerwerk' },
        { word: 'Karneval', hint: 'Kostüm' },
        { word: 'Halloween', hint: 'Gruselig' },
        { word: 'Hochzeit', hint: 'Ringe' },
        { word: 'Taufe', hint: 'Wasser' },
        { word: 'Konfirmation', hint: 'Kirche' },
        { word: 'Jubiläum', hint: 'Jahre' },
        { word: 'Polterabend', hint: 'Scherben' },
        { word: 'Weihnachtsmarkt', hint: 'Glühwein' },
        { word: 'Nikolaus', hint: 'Stiefel' },
        { word: 'Valentinstag', hint: 'Herz' },
        { word: 'Muttertag', hint: 'Blumen' },
        { word: 'Vatertag', hint: 'Bollerwagen' },
        { word: 'Maifeiertag', hint: 'Tanz' },
        { word: 'Erntedankfest', hint: 'Feld' },
        { word: 'Laternenfest', hint: 'Licht' },
        { word: 'Weihnachtsbaum', hint: 'Schmuck' },
        { word: 'Advent', hint: 'Kerzen' },
        { word: 'Neujahr', hint: 'Beginn' },
        { word: 'Abschiedsfeier', hint: 'Lebewohl' },
        { word: 'Einschulung', hint: 'Tüte' },
        { word: 'Kindergeburtstag', hint: 'Spiele' },
        { word: 'Party', hint: 'Musik' },
        { word: 'Tanzfläche', hint: 'Bewegung' },
        { word: 'DJ', hint: 'Musik' },
        { word: 'Geschenk', hint: 'Überraschung' },
        { word: 'Luftballon', hint: 'Helium' },
        { word: 'Girlande', hint: 'Deko' },
        { word: 'Konfetti', hint: 'Bunt' },
        { word: 'Torte', hint: 'Süß' },
        { word: 'Kerze', hint: 'Licht' },
        { word: 'Sekt', hint: 'Anstoßen' },
        { word: 'Toast', hint: 'Wunsch' },
        { word: 'Buffet', hint: 'Auswahl' },
        { word: 'Picknick', hint: 'Decke' },
        { word: 'Feuerwerk', hint: 'Knall' },
        { word: 'Hüpfburg', hint: 'Springen' },
        { word: 'Laterne', hint: 'Leuchten' },
        { word: 'Weihnachtsmann', hint: 'Bart' },
        { word: 'Engel', hint: 'Flügel' },
        { word: 'Krippe', hint: 'Stall' },
        { word: 'Plätzchen', hint: 'Backen' },
        { word: 'Wichteln', hint: 'Zufall' },
        { word: 'Maskenball', hint: 'Verkleidung' },
        { word: 'Braut', hint: 'Kleid' },
        { word: 'Trauung', hint: 'Versprechen' },
      ],
    },
    {
      name: 'Deutsche Begriffe',
      active: !0,
      words: [
        { word: 'Feierabend', hint: 'Arbeit' },
        { word: 'Fernweh', hint: 'Sehnsucht' },
        { word: 'Schadenfreude', hint: 'Gefühl' },
        { word: 'Kopfkino', hint: 'Vorstellung' },
        { word: 'Zweisamkeit', hint: 'Beziehung' },
        { word: 'Wanderlust', hint: 'Bewegung' },
        { word: 'Heimat', hint: 'Zugehörigkeit' },
        { word: 'Kummerspeck', hint: 'Essen' },
        { word: 'Torschlusspanik', hint: 'Zeitdruck' },
        { word: 'Weltschmerz', hint: 'Melancholie' },
        { word: 'Fingerspitzengefühl', hint: 'Feinheit' },
        { word: 'Ohrwurm', hint: 'Musik' },
        { word: 'Treppenwitz', hint: 'Zu spät' },
        { word: 'Schnapsidee', hint: 'Spontan' },
        { word: 'Innerer Schweinehund', hint: 'Hindernis' },
        { word: 'Doppelgänger', hint: 'Ähnlichkeit' },
        { word: 'Kindergarten', hint: 'Früh' },
        { word: 'Besserwisser', hint: 'Nervig' },
        { word: 'Erklärbär', hint: 'Redselig' },
        { word: 'Fußabtreter', hint: 'Eingang' },
        { word: 'Zeitgeist', hint: 'Epoche' },
        { word: 'Fahrvergnügen', hint: 'Auto' },
        { word: 'Bratwurst', hint: 'Grill' },
        { word: 'Gemütlichkeit', hint: 'Wohlfühlen' },
        { word: 'Quatsch', hint: 'Unsinn' },
        { word: 'Waldeinsamkeit', hint: 'Natur' },
        { word: 'Hausmeister', hint: 'Gebäude' },
        { word: 'Schlafmütze', hint: 'Träge' },
        { word: 'Toilettenpapier', hint: 'Bad' },
        { word: 'Handschuh', hint: 'Winter' },
        { word: 'Buchdruck', hint: 'Erfindung' },
        { word: 'Autobahn', hint: 'Fahren' },
        { word: 'Dachschaden', hint: 'Spinnerei' },
        { word: 'Kaffeeklatsch', hint: 'Plauderei' },
        { word: 'Mahlzeit', hint: 'Gruß' },
        { word: 'Luftschloss', hint: 'Illusion' },
        { word: 'Vorsprung', hint: 'Vorteil' },
        { word: 'Zugzwang', hint: 'Schach' },
        { word: 'Schlafwagen', hint: 'Reise' },
        { word: 'Stammtisch', hint: 'Runde' },
        { word: 'Handwerker', hint: 'Beruf' },
        { word: 'Meister', hint: 'Titel' },
        { word: 'Muttersprache', hint: 'Herkunft' },
        { word: 'Lügenpresse', hint: 'Medienkritik' },
        { word: 'Bahnstreik', hint: 'Verzögerung' },
        { word: 'Angst', hint: 'Gefühl' },
        { word: 'Bauernregel', hint: 'Spruch' },
        { word: 'Aktenordner', hint: 'Büro' },
        { word: 'Sitzfleisch', hint: 'Ausdauer' },
      ],
    },
    {
      name: 'Stars und Promis',
      active: !0,
      words: [
        { word: 'Taylor Swift', hint: 'Pop' },
        { word: 'Harry Styles', hint: 'Boyband' },
        { word: 'Shirin David', hint: 'Deutschrap' },
        { word: 'Helene Fischer', hint: 'Schlager' },
        { word: 'Ariana Grande', hint: 'Stimme' },
        { word: 'Kim Kardashian', hint: 'Reality' },
        { word: 'Kanye West', hint: 'Skandal' },
        { word: 'Justin Bieber', hint: 'Teenstar' },
        { word: 'Billie Eilish', hint: 'Einzigartig' },
        { word: 'Ed Sheeran', hint: 'Gitarre' },
        { word: 'Dwayne Johnson', hint: 'Muskeln' },
        { word: 'Zendaya', hint: 'Euphoria' },
        { word: 'Leonardo DiCaprio', hint: 'Oscar' },
        { word: 'Brad Pitt', hint: 'Charme' },
        { word: 'Emma Watson', hint: 'Magie' },
        { word: 'Tom Holland', hint: 'Spinne' },
        { word: 'Selena Gomez', hint: 'Disney' },
        { word: 'Rihanna', hint: 'Fenty' },
        { word: 'Drake', hint: 'Toronto' },
        { word: 'Beyoncé', hint: 'Queen' },
        { word: 'Miley Cyrus', hint: 'Verwandlung' },
        { word: 'Kylie Jenner', hint: 'Kosmetik' },
        { word: 'Cristiano Ronaldo', hint: 'Tor' },
        { word: 'Lionel Messi', hint: 'Argentinien' },
        { word: 'Kylian Mbappé', hint: 'Tempo' },
        { word: 'Neymar', hint: 'Tricks' },
        { word: 'Lewis Hamilton', hint: 'Formel' },
        { word: 'Tom Cruise', hint: 'Action' },
        { word: 'Keanu Reeves', hint: 'Matrix' },
        { word: 'Pedro Pascal', hint: 'Serie' },
        { word: 'Joko Winterscheidt', hint: 'TV' },
        { word: 'Klaas Heufer-Umlauf', hint: 'Late Night' },
        { word: 'Palina Rojinski', hint: 'Moderatorin' },
        { word: 'Bibi Claßen', hint: 'Influencerin' },
        { word: 'Julien Bam', hint: 'YouTube' },
        { word: 'Rezo', hint: 'Blau' },
        { word: 'Lisa & Lena', hint: 'Zwillinge' },
        { word: 'Pamela Reif', hint: 'Fitness' },
        { word: 'MontanaBlack', hint: 'Streamer' },
        { word: 'Gzuz', hint: '187' },
        { word: 'Apache 207', hint: 'Sonnenbrille' },
        { word: 'Capital Bra', hint: 'Capi' },
        { word: 'Loredana', hint: 'Rapperin' },
        { word: 'Bushido', hint: 'Skandal' },
        { word: 'Mark Forster', hint: 'Mütze' },
        { word: 'Peter Maffay', hint: 'Rock' },
        { word: 'Andrea Berg', hint: 'Bühne' },
        { word: 'Stefan Raab', hint: 'TV Total' },
        { word: 'Elton', hint: 'Assistent' },
      ],
    },
    {
      name: 'Internet & Spaß',
      active: !0,
      words: [
        { word: 'Meme', hint: 'Bild' },
        { word: 'GIF', hint: 'Loop' },
        { word: 'Emoji', hint: 'Symbol' },
        { word: 'Filter', hint: 'Verzerrt' },
        { word: 'Reel', hint: 'Kurz' },
        { word: 'TikTok', hint: 'Trend' },
        { word: 'YouTube', hint: 'Video' },
        { word: 'Twitch', hint: 'Live' },
        { word: 'Stream', hint: 'Echtzeit' },
        { word: 'Fail', hint: 'Schief' },
        { word: 'Cat Content', hint: 'Flausch' },
        { word: 'Cringe', hint: 'Fremdscham' },
        { word: 'Lifehack', hint: 'Trick' },
        { word: 'Challenge', hint: 'Mutprobe' },
        { word: 'Viral', hint: 'Schnell' },
        { word: 'Kommentar', hint: 'Antwort' },
        { word: 'Screenshot', hint: 'Beweis' },
        { word: 'Clickbait', hint: 'Locken' },
        { word: 'Algorithmus', hint: 'Sortieren' },
        { word: 'Feed', hint: 'Anzeigen' },
        { word: 'Follower', hint: 'Publikum' },
        { word: 'Like', hint: 'Zustimmung' },
        { word: 'Dislike', hint: 'Ablehnung' },
        { word: 'Hashtag', hint: 'Thema' },
        { word: 'Story', hint: '24h' },
        { word: 'Influencer', hint: 'Reichweite' },
        { word: 'Boop', hint: 'Nase' },
        { word: 'UwU', hint: 'Süß' },
        { word: 'Lurk', hint: 'Mitlesen' },
        { word: 'Simp', hint: 'Anhänglich' },
        { word: 'Bait', hint: 'Köder' },
        { word: 'Troll', hint: 'Stören' },
        { word: 'Canceln', hint: 'Boykott' },
        { word: 'Stan', hint: 'Fanatisch' },
        { word: 'Alt-Text', hint: 'Beschreibung' },
        { word: 'Facepalm', hint: 'Peinlich' },
        { word: 'DM', hint: 'Privat' },
        { word: 'Reddit', hint: 'Forum' },
        { word: 'Discord', hint: 'Server' },
        { word: 'Memesprache', hint: 'Insider' },
        { word: 'Copypasta', hint: 'Kopiert' },
        { word: 'Rickroll', hint: 'Überraschung' },
        { word: 'Dank Memes', hint: 'Ironisch' },
        { word: 'Wholesome', hint: 'Herzlich' },
        { word: 'FYP', hint: 'TikTok' },
        { word: 'NPC', hint: 'Mechanisch' },
        { word: 'Shitpost', hint: 'Unsinnig' },
        { word: 'Meme-Page', hint: 'Sammlung' },
        { word: 'Reaction', hint: 'Antwort' },
        { word: 'Reupload', hint: 'Kopie' },
      ],
    },
  ],
  DC = (e) => ({
    categories: Of,
    setCategories: (t) => e({ categories: t }),
    resetCategories: () => e({ categories: Of }),
  }),
  VC = (e) => ({
    settings: _f,
    setSettings: (t) => e({ settings: t }),
    resetSettings: () => e({ settings: _f }),
  }),
  IC = (e) => ({
    highscore: {},
    setHighscore: (t) => e({ highscore: t }),
    resetHighscore: () => e({ highscore: {} }),
  }),
  FC = (e, t) => ({
    players: [],
    setPlayers: (n) => e({ players: n }),
    addPlayer: (n) => {
      t().players.some((i) => i.name === n.name)
        ? console.warn(`Player with name "${n.name}" already exists.`)
        : e({ players: [...t().players, n] });
    },
    removePlayerByName: (n) => {
      const r = t().players.filter((i) => i.name !== n);
      e({ players: r });
    },
  }),
  gs = Hg((e) => ({
    gameState: null,
    setGameState: (t) => e({ gameState: t }),
    resetGame: () => e({ gameState: null }),
    startGame: (t) => e({ gameState: t }),
  })),
  pr = Hg(
    jC((...e) => ({ ...DC(...e), ...VC(...e), ...IC(...e), ...FC(...e) }), {
      name: 'imposter-store',
    })
  );
function _C({ visible: e, onClose: t }) {
  return e
    ? w.jsx('div', {
        className:
          'fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50',
        children: w.jsxs('div', {
          className: 'bg-white p-6 rounded-lg max-w-md shadow-xl text-gray-800',
          children: [
            w.jsx('h2', {
              className: 'text-xl font-bold mb-2',
              children: '🎉 Willkommen bei Imposter!',
            }),
            w.jsx('p', {
              className: 'text-sm mb-4',
              children:
                'Alle Spieler bekommen ein Wort angezeigt – nur einer bekommt ein Anderes: der „Imposter“. Diskutiert, wer verdächtig wirkt, dann stimmt ab. Ziel: Enttarnt den Imposter – oder überlebt unentdeckt!',
            }),
            w.jsx(U, {
              onClick: t,
              className: 'w-full mt-2',
              children: 'Verstanden!',
            }),
          ],
        }),
      })
    : null;
}
function OC() {
  const {
      players: e,
      settings: t,
      highscore: n,
      resetHighscore: r,
      categories: i,
      addPlayer: o,
      removePlayerByName: s,
      setSettings: a,
    } = pr(),
    { setGameState: l } = gs(),
    u = en(),
    [c, d] = x.useState(''),
    [f, g] = x.useState(!1),
    [v, y] = x.useState(!1),
    [S, p] = x.useState(!1),
    [h, m] = x.useState('😀'),
    [k, C] = x.useState(!1),
    T = [
      '😀',
      '😎',
      '👽',
      '🐱',
      '🐶',
      '🦊',
      '🐸',
      '🧙‍♂️',
      '🧛‍♀️',
      '🧟',
      '🤖',
      '👻',
      '🤡',
      '🥸',
      '🤓',
      '🦄',
      '🐵',
      '🐙',
      '🧞‍♂️',
      '🧚‍♀️',
      '🦸‍♀️',
      '👾',
      '🎮',
      '🕵️‍♂️',
      '🍕',
      '🍩',
    ],
    R = () => {
      const P = c.trim();
      P &&
        !e.find((D) => D.name === P) &&
        (o({ name: P, icon: h }), d(''), m('😀'));
    };
  function E(P) {
    const D = [...P];
    for (let G = D.length - 1; G > 0; G--) {
      const oe = Math.floor(Math.random() * (G + 1));
      [D[G], D[oe]] = [D[oe], D[G]];
    }
    return D;
  }
  const N = () => {
    if (e.length < 3) {
      alert('Mindestens 3 Spieler erforderlich');
      return;
    }
    const P = E(e);
    let D = t.numImposters;
    t.allowRandomImposters &&
      Math.random() * 100 < t.randomImposterChance &&
      (D = Math.floor(Math.random() * e.length));
    const G = P.slice(0, D).map((B) => B.name),
      oe = i.filter((B) => B.active).flatMap((B) => B.words);
    if (oe.length === 0) {
      alert('Keine Wörter in aktiven Kategorien!');
      return;
    }
    const Rt = oe[Math.floor(Math.random() * oe.length)],
      Mi = P[Math.floor(Math.random() * P.length)].name,
      En = {
        imposters: G,
        word: Rt.word,
        hint: Rt.hint,
        startPlayer: Mi,
        round: 1,
      };
    (l(En), u('/reveal'));
  };
  return w.jsxs('div', {
    className: 'p-4 max-w-xl mx-auto',
    children: [
      w.jsxs('div', {
        className: 'flex items-center gap-2 mb-4',
        children: [
          w.jsx('img', {
            src: 'pwa-192x192.png',
            alt: 'Imposter Icon',
            className: 'w-8 h-8',
          }),
          w.jsx('h1', {
            className: 'text-2xl font-bold',
            children: 'Imposter',
          }),
          w.jsxs('p', { children: ['v', '1.0.6'] }),
          w.jsx(EC, {}),
        ],
      }),
      w.jsx(_C, {
        visible: t.showInstructions ?? !0,
        onClose: (P) => a({ ...t, showInstructions: !1 }),
      }),
      w.jsx(mt, {
        className: 'mb-4',
        children: w.jsxs(gt, {
          children: [
            w.jsx('h2', {
              className: 'text-xl font-semibold mb-2',
              children: '🧑‍🤝‍🧑 Spieler',
            }),
            w.jsx('div', {
              className: 'flex flex-wrap gap-2 mb-4',
              children: e.map((P, D) =>
                w.jsxs(
                  'div',
                  {
                    className:
                      'flex items-center gap-2 bg-gray-100 p-2 rounded',
                    children: [
                      w.jsx('span', { className: 'text-xl', children: P.icon }),
                      w.jsx('span', { children: P.name }),
                      w.jsx(U, {
                        size: 'icon',
                        className:
                          'w-6 h-6 p-0 text-red-600 hover:text-red-800',
                        variant: 'ghost',
                        onClick: () => s(P.name),
                        children: '✖️',
                      }),
                    ],
                  },
                  D
                )
              ),
            }),
            w.jsxs('div', {
              children: [
                w.jsx(U, {
                  onClick: () => C((P) => !P),
                  className: 'mb-2',
                  variant: 'outline',
                  children: '➕ Neuer Spieler',
                }),
                w.jsx(Ar, {
                  children:
                    k &&
                    w.jsxs(
                      Nr.div,
                      {
                        initial: { height: 0, opacity: 0 },
                        animate: { height: 'auto', opacity: 1 },
                        exit: { height: 0, opacity: 0 },
                        transition: { duration: 0.3 },
                        className: 'overflow-hidden',
                        children: [
                          w.jsxs('div', {
                            className: 'flex gap-2 mb-2 mt-2',
                            children: [
                              w.jsx(It, {
                                value: c,
                                onChange: (P) => d(P.target.value),
                                placeholder: 'Spielername',
                              }),
                              w.jsx(U, { onClick: R, children: 'Hinzufügen' }),
                            ],
                          }),
                          w.jsxs('div', {
                            className: 'mb-2',
                            children: [
                              w.jsx('p', {
                                className: 'text-sm text-gray-600 mb-1',
                                children: 'Icon auswählen:',
                              }),
                              w.jsx('div', {
                                className: 'flex flex-wrap gap-2',
                                children: T.map((P) =>
                                  w.jsx(
                                    'button',
                                    {
                                      className: `text-2xl p-2 rounded border ${h === P ? 'border-blue-500' : 'border-transparent'}`,
                                      onClick: () => m(P),
                                      type: 'button',
                                      children: P,
                                    },
                                    P
                                  )
                                ),
                              }),
                            ],
                          }),
                        ],
                      },
                      'add-player-form'
                    ),
                }),
              ],
            }),
          ],
        }),
      }),
      w.jsx(U, {
        onClick: N,
        className:
          'w-full mb-6 bg-green-600 hover:bg-green-700 text-white text-lg font-semibold py-3 rounded-lg shadow-md transition duration-200',
        children: 'Spiel starten',
      }),
      w.jsx(mt, {
        className: 'mb-4',
        children: w.jsxs(gt, {
          children: [
            w.jsxs('div', {
              className: 'flex justify-between items-center cursor-pointer',
              onClick: () => p(!S),
              children: [
                w.jsx('h2', {
                  className: 'text-xl font-semibold',
                  children: '🛠️ Einstellungen',
                }),
                w.jsx('span', { children: S ? '▲' : '▼' }),
              ],
            }),
            w.jsx(Ar, {
              initial: !1,
              children:
                S &&
                w.jsxs(
                  Nr.div,
                  {
                    initial: { height: 0, opacity: 0 },
                    animate: { height: 'auto', opacity: 1 },
                    exit: { height: 0, opacity: 0 },
                    transition: { duration: 0.3 },
                    className: 'overflow-hidden mt-2 space-y-2',
                    children: [
                      w.jsxs('div', {
                        children: [
                          w.jsx('label', { children: 'Anzahl Imposter:' }),
                          w.jsx(It, {
                            type: 'number',
                            min: 1,
                            max: e.length || 1,
                            value: t.numImposters,
                            onChange: (P) =>
                              a({
                                ...t,
                                numImposters: parseInt(P.target.value),
                              }),
                          }),
                        ],
                      }),
                      w.jsxs('div', {
                        children: [
                          w.jsx('label', { children: 'Hinweis anzeigen:' }),
                          w.jsx('input', {
                            type: 'checkbox',
                            checked: t.showHints,
                            onChange: (P) =>
                              a({ ...t, showHints: P.target.checked }),
                          }),
                        ],
                      }),
                      w.jsxs('div', {
                        children: [
                          w.jsx('label', { children: 'Rundenzeit (Minuten):' }),
                          w.jsx(It, {
                            type: 'number',
                            min: 1,
                            value: t.roundTimeMinutes,
                            onChange: (P) =>
                              a({
                                ...t,
                                roundTimeMinutes: parseInt(P.target.value),
                              }),
                          }),
                        ],
                      }),
                      w.jsxs('div', {
                        children: [
                          w.jsx('label', {
                            children: 'Abstimmzeit (Minuten):',
                          }),
                          w.jsx(It, {
                            type: 'number',
                            min: 0,
                            value: t.votingTimeMinutes,
                            onChange: (P) =>
                              a({
                                ...t,
                                votingTimeMinutes: parseInt(P.target.value),
                              }),
                          }),
                        ],
                      }),
                      w.jsx('div', {
                        children: w.jsxs('label', {
                          children: [
                            w.jsx('input', {
                              type: 'checkbox',
                              checked: t.allowRandomImposters,
                              onChange: (P) =>
                                a({
                                  ...t,
                                  allowRandomImposters: P.target.checked,
                                }),
                              className: 'mr-2',
                            }),
                            'Zufällige Anzahl Imposter (0 bis n) erlauben',
                          ],
                        }),
                      }),
                      t.allowRandomImposters &&
                        w.jsxs('div', {
                          children: [
                            w.jsx('label', {
                              children:
                                'Wahrscheinlichkeit (0–50%) für zufällige Imposter-Anzahl:',
                            }),
                            w.jsx(It, {
                              type: 'number',
                              min: 0,
                              max: 50,
                              value: t.randomImposterChance,
                              onChange: (P) =>
                                a({
                                  ...t,
                                  randomImposterChance: Math.min(
                                    50,
                                    Math.max(0, parseInt(P.target.value) || 0)
                                  ),
                                }),
                            }),
                          ],
                        }),
                    ],
                  },
                  'settings'
                ),
            }),
          ],
        }),
      }),
      w.jsx(mt, {
        className: 'mb-4',
        children: w.jsxs(gt, {
          children: [
            w.jsxs('div', {
              className: 'flex justify-between items-center cursor-pointer',
              onClick: () => g(!f),
              children: [
                w.jsx('h2', {
                  className: 'text-xl font-semibold',
                  children: '🗂️ Kategorien',
                }),
                w.jsx('span', { children: f ? '▲' : '▼' }),
              ],
            }),
            w.jsx(Ar, {
              initial: !1,
              children:
                f &&
                w.jsxs(
                  Nr.div,
                  {
                    initial: { height: 0, opacity: 0 },
                    animate: { height: 'auto', opacity: 1 },
                    exit: { height: 0, opacity: 0 },
                    transition: { duration: 0.3 },
                    className: 'overflow-hidden mt-2',
                    children: [
                      w.jsx('div', {
                        className: 'flex justify-end mb-2',
                        children: w.jsx(U, {
                          variant: 'outline',
                          size: 'sm',
                          onClick: () => u('/categories'),
                          children: 'Kategorien verwalten',
                        }),
                      }),
                      w.jsx('ul', {
                        className: 'space-y-1',
                        children: i.map((P, D) =>
                          w.jsxs(
                            'li',
                            {
                              className: 'flex items-center justify-between',
                              children: [
                                w.jsx('span', { children: P.name }),
                                w.jsx('input', {
                                  type: 'checkbox',
                                  checked: P.active,
                                  onChange: (G) => {
                                    const oe = [...i];
                                    ((oe[D].active = G.target.checked),
                                      localStorage.setItem(
                                        'imposter_categories',
                                        JSON.stringify(oe)
                                      ),
                                      window.location.reload());
                                  },
                                }),
                              ],
                            },
                            D
                          )
                        ),
                      }),
                    ],
                  },
                  'categories'
                ),
            }),
          ],
        }),
      }),
      n &&
        Object.keys(n).length > 0 &&
        w.jsx(mt, {
          children: w.jsxs(gt, {
            children: [
              w.jsxs('div', {
                className: 'flex justify-between items-center cursor-pointer',
                onClick: () => y(!v),
                children: [
                  w.jsx('h2', {
                    className: 'text-xl font-semibold',
                    children: '🏆 Highscore',
                  }),
                  w.jsx('span', { children: v ? '▲' : '▼' }),
                ],
              }),
              w.jsx(Ar, {
                initial: !1,
                children:
                  v &&
                  w.jsxs(
                    Nr.div,
                    {
                      initial: { height: 0, opacity: 0 },
                      animate: { height: 'auto', opacity: 1 },
                      exit: { height: 0, opacity: 0 },
                      transition: { duration: 0.3 },
                      className: 'overflow-hidden mt-2',
                      children: [
                        w.jsx(bg, { players: e, highscore: n }),
                        w.jsx(U, {
                          onClick: r,
                          className: 'bg-red-500 hover:bg-red-600',
                          children: 'Highscore zurücksetzen',
                        }),
                      ],
                    },
                    'highscore'
                  ),
              }),
            ],
          }),
        }),
    ],
  });
}
function BC() {
  var h;
  const { gameState: e } = gs(),
    { players: t, settings: n } = pr(),
    [r, i] = x.useState(0),
    [o, s] = x.useState(!1),
    [a, l] = x.useState(!1),
    [u, c] = x.useState(!1),
    d = x.useRef(null),
    f = en(),
    g = t[r],
    v =
      (h = e == null ? void 0 : e.imposters) == null
        ? void 0
        : h.includes(g.name),
    y = () => {
      (s(!0),
        a ||
          (d.current = setTimeout(() => {
            l(!0);
          }, 1e3)));
    },
    S = () => {
      (s(!1), d.current && clearTimeout(d.current));
    },
    p = () => {
      r < t.length - 1 ? (i(r + 1), s(!1), l(!1), c(!1)) : f('/play');
    };
  return w.jsx('div', {
    className: 'p-4 max-w-xl mx-auto text-center select-none',
    children: w.jsx(mt, {
      children: w.jsxs(gt, {
        children: [
          w.jsxs('h2', {
            className: 'text-lg font-medium mb-2',
            children: ['Spieler ', r + 1, ' von ', t.length],
          }),
          w.jsxs('div', {
            className: 'mb-4',
            children: [
              w.jsx('p', {
                className: 'text-2xl font-bold mb-4',
                children: w.jsx('strong', { children: g.name }),
              }),
              w.jsx('button', {
                onMouseDown: y,
                onMouseUp: S,
                onTouchStart: y,
                onTouchEnd: S,
                className:
                  'w-40 h-40 rounded-full bg-gray-300 hover:opacity-90 text-6xl flex items-center justify-center mx-auto shadow-lg mb-2',
                children: g.icon,
              }),
              w.jsx('p', {
                className: `mt-2 text-xl font-semibold ${o && v ? 'text-red-600' : ''}`,
                children: o
                  ? v
                    ? n.showHints
                      ? `Hinweis (Imposter!): ${e == null ? void 0 : e.hint}`
                      : 'Du bist der Imposter!'
                    : `Wort: ${e == null ? void 0 : e.word}`
                  : 'Halte das Bild gedrückt, um deinen Hinweis zu sehen',
              }),
            ],
          }),
          w.jsxs('div', {
            className: 'flex flex-col gap-4 justify-center mt-6',
            children: [
              w.jsx(U, {
                className: `h-12 ${a ? 'bg-blue-500 hover:bg-blue-600' : 'bg-gray-400 cursor-not-allowed opacity-60'}`,
                onClick: p,
                disabled: !a,
                children:
                  r < t.length - 1 ? 'Nächster Spieler' : 'Spiel starten',
              }),
              u
                ? w.jsxs('div', {
                    className: 'flex flex-col gap-2',
                    children: [
                      w.jsx('p', {
                        className: 'text-sm text-gray-700 font-bold',
                        children: 'Möchtest du das Spiel wirklich abbrechen?',
                      }),
                      w.jsxs('div', {
                        className: 'flex gap-2 justify-center',
                        children: [
                          w.jsx(U, {
                            className:
                              'w-full bg-green-600 hover:bg-green-700 text-white text-lg font-semibold py-2 rounded-lg shadow',
                            onClick: () => f('/'),
                            children: 'Ja',
                          }),
                          w.jsx(U, {
                            className:
                              'w-full bg-red-600 hover:bg-red-700 text-white text-lg font-semibold py-2 rounded-lg shadow',
                            onClick: () => c(!1),
                            children: 'Nein',
                          }),
                        ],
                      }),
                    ],
                  })
                : w.jsx(U, {
                    className: 'h-12 bg-red-500 hover:bg-red-600',
                    onClick: () => c(!0),
                    children: 'Spiel abbrechen',
                  }),
            ],
          }),
        ],
      }),
    }),
  });
}
function Bf({ current: e, total: t }) {
  const n = Math.max((e / t) * 100, 0),
    r = n < 20;
  return w.jsx('div', {
    className: 'w-full bg-gray-300 rounded h-4 overflow-hidden my-2',
    children: w.jsx('div', {
      className: `h-full transition-all duration-500 ease-linear ${r ? 'bg-red-500' : 'bg-green-500'}`,
      style: { width: `${n}%` },
    }),
  });
}
function zC() {
  const { players: e, settings: t } = pr(),
    [n, r] = x.useState(t.roundTimeMinutes * 60),
    [i, o] = x.useState(t.votingTimeMinutes * 60),
    [s, a] = x.useState(!1),
    [l, u] = x.useState(!1),
    [c, d] = x.useState(!1),
    [f, g] = x.useState(!1),
    [v, y] = x.useState(!1),
    [S, p] = x.useState(null),
    h = en();
  (x.useEffect(() => {
    const P = e[Math.floor(Math.random() * e.length)];
    p(P.name);
  }, [e]),
    x.useEffect(() => {
      if (!(s || n <= 0))
        return (
          clearInterval(R.current),
          (R.current = setInterval(() => {
            r((P) => P - 1);
          }, 1e3)),
          () => clearInterval(R.current)
        );
    }, [s, n]),
    x.useEffect(() => {
      n === 0 ? (u(!0), d(!0)) : n === 3 && m();
    }, [n]),
    x.useEffect(() => {
      if (!(n > 0 || i <= 0))
        return (
          clearInterval(E.current),
          (E.current = setInterval(() => {
            o((P) => P - 1);
          }, 1e3)),
          () => clearInterval(E.current)
        );
    }, [n, i]),
    x.useEffect(() => {
      i === 0 ? g(!0) : i === 3 && m();
    }, [i]),
    x.useEffect(() => {
      let P = null;
      const D = async () => {
        try {
          'wakeLock' in navigator &&
            ((P = await navigator.wakeLock.request('screen')),
            console.log('✅ Wake Lock aktiviert'));
        } catch (oe) {
          console.warn('⚠️ Wake Lock Fehler:', oe);
        }
      };
      D();
      const G = () => {
        document.visibilityState === 'visible' && D();
      };
      return (
        document.addEventListener('visibilitychange', G),
        () => {
          (document.removeEventListener('visibilitychange', G),
            P && P.release());
        }
      );
    }, []));
  const m = () => {
      try {
        const P = N.current;
        P && P.canPlayType('audio/mpeg')
          ? P.play().catch((D) => {
              console.warn('Audio-Fehler (Autoplay blockiert?)', D);
            })
          : console.warn('Audioformat nicht unterstützt oder Sound fehlt.');
      } catch (P) {
        console.error('Fehler beim Audio-Abspielen:', P);
      }
    },
    k = (P) => {
      const D = Math.floor(P / 60),
        G = P % 60;
      return `${D}:${G.toString().padStart(2, '0')}`;
    },
    C = () => {
      n > 0 ? y(!0) : u(!0);
    },
    T = () => {
      (y(!1), h('/vote'));
    },
    R = x.useRef(null),
    E = x.useRef(null),
    N = x.useRef(null);
  return w.jsxs('div', {
    className: 'p-4 max-w-xl mx-auto text-center',
    children: [
      w.jsx('h1', {
        className: 'text-2xl font-bold mb-4',
        children: 'Spiel läuft',
      }),
      S &&
        w.jsxs('p', {
          className: 'text-md mb-2',
          children: [
            '🎲 ',
            w.jsx('strong', { children: S }),
            ' beginnt die Runde',
          ],
        }),
      w.jsxs('div', {
        className: 'text-5xl font-mono mb-6',
        children: ['⏱ ', k(n)],
      }),
      w.jsx(Bf, { current: n, total: t.roundTimeMinutes * 60 }),
      w.jsxs('div', {
        className: 'flex justify-center gap-4 mb-6',
        children: [
          w.jsx(U, {
            onClick: () => a((P) => !P),
            disabled: n <= 3,
            children: s ? 'Fortsetzen' : 'Pause',
          }),
          w.jsx(U, {
            variant: 'destructive',
            onClick: C,
            children: 'Imposter wählen',
          }),
        ],
      }),
      w.jsx('audio', {
        ref: N,
        src: '/imposter-party/sounds/timer-end.mp3',
        preload: 'auto',
      }),
      l &&
        c &&
        w.jsxs('div', {
          className:
            'bg-yellow-100 border border-yellow-300 p-4 rounded shadow text-left animate-pulse',
          children: [
            w.jsx('h2', {
              className: 'text-lg font-semibold mb-2',
              children: '⏳ Zeit abgelaufen',
            }),
            w.jsx('p', {
              className: 'mb-4',
              children:
                'Die Runde ist beendet. Bitte legt jetzt fest, wer der Imposter ist.',
            }),
            t.votingTimeMinutes > 0 &&
              w.jsxs('div', {
                children: [
                  w.jsxs('div', {
                    className: 'text-5xl font-mono mb-6',
                    children: ['⏱ ', k(i)],
                  }),
                  w.jsx(Bf, { current: i, total: t.votingTimeMinutes * 60 }),
                ],
              }),
            w.jsx(U, {
              variant: 'destructive',
              onClick: () => h('/vote'),
              children: 'Weiter zur Auswertung',
            }),
          ],
        }),
      v &&
        w.jsxs('div', {
          className:
            'bg-red-100 border border-red-300 p-4 rounded shadow text-left',
          children: [
            w.jsx('h2', {
              className: 'text-lg font-semibold mb-2',
              children: '⚠️ Spiel wirklich beenden?',
            }),
            w.jsx('p', {
              className: 'mb-4',
              children:
                'Willst du wirklich vorzeitig den Imposter wählen und das Spiel beenden?',
            }),
            w.jsxs('div', {
              className: 'flex gap-4',
              children: [
                w.jsx(U, {
                  variant: 'destructive',
                  onClick: T,
                  children: 'Ja, beenden',
                }),
                w.jsx(U, {
                  variant: 'secondary',
                  onClick: () => y(!1),
                  children: 'Abbrechen',
                }),
              ],
            }),
          ],
        }),
    ],
  });
}
function $C() {
  const { gameState: e } = gs(),
    { players: t, highscore: n, setHighscore: r } = pr(),
    [i, o] = x.useState(0),
    [s, a] = x.useState(null),
    [l, u] = x.useState(null),
    [c, d] = x.useState(!1),
    [f, g] = x.useState(''),
    v = en();
  x.useEffect(() => {
    const p = new Set(e.imposters || []),
      h = new Set(e.selectedPlayers || []),
      m = [...p].every((k) => h.has(k));
    (a(m), m ? o(1) : S(!1, !1));
  }, [e]);
  const y = (p) => {
      i === 1 && (u(p), S(p, s));
    },
    S = (p, h) => {
      const m = { ...n },
        k = new Set(e.imposters);
      (t.forEach((C) => {
        const T = k.has(C.name);
        if ((m[C.name] || (m[C.name] = { wins: 0, losses: 0 }), !h)) {
          T ? m[C.name].wins++ : m[C.name].losses++;
          return;
        }
        p
          ? T
            ? m[C.name].wins++
            : m[C.name].losses++
          : T
            ? m[C.name].losses++
            : m[C.name].wins++;
      }),
        r(m),
        g(
          h
            ? p
              ? 'Die Imposter haben gewonnen, weil sie das geheime Wort erraten konnten.'
              : 'Die ehrlichen Spieler haben gewonnen, weil die Imposter das Wort nicht erraten konnten.'
            : 'Die Imposter haben gewonnen, weil sie nicht alle entdeckt wurden.'
        ),
        d(!0));
    };
  return w.jsxs('div', {
    className: 'p-4 max-w-xl mx-auto',
    children: [
      w.jsx('h1', {
        className: 'text-2xl font-bold mb-4',
        children: 'Spielende',
      }),
      w.jsxs('div', {
        className:
          'mt-4 bg-red-100 border border-red-300 text-red-800 p-2 rounded',
        children: [
          w.jsx('strong', { children: 'Imposter:' }),
          ' ',
          e == null ? void 0 : e.imposters.join(', '),
          w.jsx('br', {}),
          w.jsx('strong', { children: 'Wort:' }),
          ' ',
          e == null ? void 0 : e.word,
        ],
      }),
      w.jsx('br', {}),
      c
        ? w.jsx(mt, {
            className: 'mb-4',
            children: w.jsxs(gt, {
              children: [
                w.jsx('h2', {
                  className: 'text-xl font-semibold mb-2',
                  children: '🏆 Spielausgang',
                }),
                w.jsx('p', {
                  className: 'text-md text-gray-800 bg-yellow-100 p-3 rounded',
                  children: f || 'Keine Auswertung verfügbar.',
                }),
                w.jsx('br', {}),
                w.jsx(U, {
                  className:
                    'w-full bg-blue-600 hover:bg-blue-700 text-white text-lg font-semibold py-2 rounded-lg shadow',
                  onClick: () => v('/'),
                  children: 'Zurück zum Start',
                }),
                w.jsx('br', {}),
                w.jsxs('div', {
                  className: 'mt-4',
                  children: [
                    w.jsx('h3', {
                      className: 'text-md font-semibold mb-2',
                      children: '🏅 Highscore',
                    }),
                    w.jsx(bg, { players: t, highscore: n }),
                  ],
                }),
              ],
            }),
          })
        : w.jsx(mt, {
            className: 'mb-4',
            children: w.jsx(gt, {
              children:
                i === 1 &&
                w.jsxs(w.Fragment, {
                  children: [
                    w.jsx('p', {
                      className:
                        'mb-4 text-sm text-gray-700 font-bold text-center',
                      children:
                        'Konnten die Imposter das geheime Wort erraten?',
                    }),
                    w.jsxs('div', {
                      className: 'flex gap-4',
                      children: [
                        w.jsx(U, {
                          onClick: () => y(!0),
                          className:
                            'w-full bg-green-600 hover:bg-green-700 text-white text-lg font-semibold py-2 rounded-lg shadow',
                          children: 'Ja',
                        }),
                        w.jsx(U, {
                          onClick: () => y(!1),
                          className:
                            'w-full bg-red-600 hover:bg-red-700 text-white text-lg font-semibold py-2 rounded-lg shadow',
                          children: 'Nein',
                        }),
                      ],
                    }),
                  ],
                }),
            }),
          }),
    ],
  });
}
function UC() {
  const { categories: e, setCategories: t } = pr(),
    [n, r] = x.useState(''),
    [i, o] = x.useState({}),
    [s, a] = x.useState(null),
    l = en(),
    u = () => {
      n.trim() && (t([...e, { name: n.trim(), words: [], active: !0 }]), r(''));
    },
    c = (y) => {
      (t(e.filter((S) => S.name !== y)),
        e.findIndex((S) => S.name === y) === s && a(null));
    },
    d = (y) => {
      const S = [...e];
      ((S[y].active = !S[y].active), t(S));
    },
    f = (y) => {
      a(s === y ? null : y);
    },
    g = (y) => {
      var m, k, C, T;
      const S =
          (k = (m = i[y]) == null ? void 0 : m.word) == null
            ? void 0
            : k.trim(),
        p =
          (T = (C = i[y]) == null ? void 0 : C.hint) == null
            ? void 0
            : T.trim();
      if (!S || !p) return;
      const h = [...e];
      (h[y].words.push({ word: S, hint: p }),
        t(h),
        o({ ...i, [y]: { word: '', hint: '' } }));
    },
    v = (y, S) => {
      const p = [...e];
      (p[y].words.splice(S, 1), t(p));
    };
  return w.jsxs('div', {
    className: 'p-4 max-w-2xl mx-auto pb-20 relative',
    children: [
      w.jsx('h1', {
        className: 'text-2xl font-bold mb-4',
        children: 'Kategorien verwalten',
      }),
      w.jsx(mt, {
        className: 'mb-4',
        children: w.jsx(gt, {
          children: w.jsxs('div', {
            className: 'flex gap-2 mb-2',
            children: [
              w.jsx(It, {
                value: n,
                onChange: (y) => r(y.target.value),
                placeholder: 'Neue Kategorie',
              }),
              w.jsx(U, { onClick: u, children: 'Hinzufügen' }),
            ],
          }),
        }),
      }),
      e.map((y, S) => {
        var p, h;
        return w.jsx(
          mt,
          {
            className: 'mb-4',
            children: w.jsxs(gt, {
              children: [
                w.jsxs('div', {
                  className:
                    'flex justify-between items-center mb-2 cursor-pointer',
                  onClick: () => f(S),
                  children: [
                    w.jsxs('div', {
                      className: 'flex items-center gap-2',
                      children: [
                        w.jsx('span', {
                          className: 'text-xl',
                          children: s === S ? '▼' : '▶',
                        }),
                        w.jsx('h2', {
                          className: 'text-xl font-semibold',
                          children: y.name,
                        }),
                      ],
                    }),
                    w.jsxs('div', {
                      className: 'flex gap-2 items-center',
                      children: [
                        w.jsxs('label', {
                          children: [
                            'Aktiv:',
                            ' ',
                            w.jsx('input', {
                              type: 'checkbox',
                              checked: y.active,
                              onChange: (m) => {
                                (m.stopPropagation(), d(S));
                              },
                              onClick: (m) => m.stopPropagation(),
                            }),
                          ],
                        }),
                        w.jsx(U, {
                          variant: 'ghost',
                          onClick: (m) => {
                            (m.stopPropagation(), c(y.name));
                          },
                          children: '❌',
                        }),
                      ],
                    }),
                  ],
                }),
                w.jsx(Ar, {
                  children:
                    s === S &&
                    w.jsxs(
                      Nr.div,
                      {
                        initial: { height: 0, opacity: 0 },
                        animate: { height: 'auto', opacity: 1 },
                        exit: { height: 0, opacity: 0 },
                        transition: { duration: 0.3 },
                        className: 'overflow-hidden',
                        children: [
                          w.jsx('ul', {
                            className: 'mb-2 mt-2',
                            children: y.words.map((m, k) =>
                              w.jsxs(
                                'li',
                                {
                                  className:
                                    'flex justify-between items-center text-sm mb-1 bg-gray-100 px-2 py-1 rounded',
                                  children: [
                                    w.jsxs('span', {
                                      children: [
                                        w.jsx('strong', { children: m.word }),
                                        ' – ',
                                        m.hint,
                                      ],
                                    }),
                                    w.jsx(U, {
                                      variant: 'ghost',
                                      size: 'sm',
                                      onClick: () => v(S, k),
                                      children: '🗑️',
                                    }),
                                  ],
                                },
                                k
                              )
                            ),
                          }),
                          w.jsxs('div', {
                            className: 'flex flex-col sm:flex-row gap-2',
                            children: [
                              w.jsx(It, {
                                placeholder: 'Wort',
                                value:
                                  ((p = i[S]) == null ? void 0 : p.word) || '',
                                onChange: (m) =>
                                  o({
                                    ...i,
                                    [S]: { ...i[S], word: m.target.value },
                                  }),
                              }),
                              w.jsx(It, {
                                placeholder: 'Hinweis',
                                value:
                                  ((h = i[S]) == null ? void 0 : h.hint) || '',
                                onChange: (m) =>
                                  o({
                                    ...i,
                                    [S]: { ...i[S], hint: m.target.value },
                                  }),
                              }),
                              w.jsx(U, { onClick: () => g(S), children: '➕' }),
                            ],
                          }),
                        ],
                      },
                      'category-content'
                    ),
                }),
              ],
            }),
          },
          y.name
        );
      }),
      w.jsx('div', {
        className: 'fixed bottom-4 left-0 right-0 flex justify-center z-50',
        children: w.jsx(U, { onClick: () => l('/setup'), children: 'Zurück' }),
      }),
    ],
  });
}
function WC({ players: e, onFinishVoting: t }) {
  const [n, r] = x.useState([]),
    i = (s) => {
      r((a) => (a.includes(s) ? a.filter((l) => l !== s) : [...a, s]));
    },
    o = () => {
      t(n);
    };
  return w.jsxs('div', {
    className: 'mt-6 p-4 border rounded bg-white shadow',
    children: [
      w.jsx('h2', {
        className: 'text-xl font-semibold mb-4',
        children: 'Wer ist der Imposter?',
      }),
      w.jsx('ul', {
        className: 'space-y-2 mb-4',
        children: e.map((s) => {
          const a = n.includes(s.name);
          return w.jsx(
            'li',
            {
              children: w.jsxs('button', {
                onClick: () => i(s.name),
                className: `
                  w-full flex items-center justify-between px-4 py-2 rounded border
                  ${a ? 'bg-blue-100 border-blue-500 text-blue-900 font-semibold' : 'bg-white border-gray-300'}
                `,
                children: [
                  w.jsx('span', {
                    children: s.icon ? `${s.icon} ${s.name}` : s.name,
                  }),
                  a && w.jsx('span', { children: '✅' }),
                ],
              }),
            },
            s.name
          );
        }),
      }),
      w.jsx(U, { onClick: o, children: 'Abstimmen' }),
    ],
  });
}
function bC() {
  const e = en(),
    { players: t } = pr(),
    { gameState: n, setGameState: r } = gs(),
    i = (o) => {
      (r({ ...n, selectedPlayers: o }), e('/end'));
    };
  return w.jsxs('div', {
    className: 'p-4 max-w-xl mx-auto text-center',
    children: [
      w.jsx('h1', {
        className: 'text-2xl font-bold mb-4',
        children: '🗳 Abstimmungsrunde',
      }),
      w.jsx('p', {
        className: 'mb-4',
        children: 'Wer ist eurer Meinung nach der Imposter?',
      }),
      w.jsx(WC, { players: t, onFinishVoting: i }),
    ],
  });
}
function HC() {
  return w.jsx(Iw, {
    children: w.jsx('div', {
      className: 'min-h-screen bg-gray-100',
      children: w.jsxs(dw, {
        children: [
          w.jsx(Lt, {
            path: '/',
            element: w.jsx(uw, { to: '/setup', replace: !0 }),
          }),
          w.jsx(Lt, { path: '/setup', element: w.jsx(OC, {}) }),
          w.jsx(Lt, { path: '/categories', element: w.jsx(UC, {}) }),
          w.jsx(Lt, { path: '/reveal', element: w.jsx(BC, {}) }),
          w.jsx(Lt, { path: '/play', element: w.jsx(zC, {}) }),
          w.jsx(Lt, { path: '/end', element: w.jsx($C, {}) }),
          w.jsx(Lt, { path: '/vote', element: w.jsx(bC, {}) }),
        ],
      }),
    }),
  });
}
function KC(e = {}) {
  const {
    immediate: t = !1,
    onNeedRefresh: n,
    onOfflineReady: r,
    onRegistered: i,
    onRegisteredSW: o,
    onRegisterError: s,
  } = e;
  let a, l, u;
  const c = async (f = !0) => {
    (await l, u == null || u());
  };
  async function d() {
    if ('serviceWorker' in navigator) {
      if (
        ((a = await yu(
          () => import('./workbox-window.prod.es5-5ffdab76.js'),
          []
        )
          .then(
            ({ Workbox: f }) =>
              new f('/imposter-party/sw.js', {
                scope: '/imposter-party/',
                type: 'classic',
              })
          )
          .catch((f) => {
            s == null || s(f);
          })),
        !a)
      )
        return;
      u = () => {
        a == null || a.messageSkipWaiting();
      };
      {
        let f = !1;
        const g = () => {
          ((f = !0),
            a == null ||
              a.addEventListener('controlling', (v) => {
                v.isUpdate && window.location.reload();
              }),
            n == null || n());
        };
        (a.addEventListener('installed', (v) => {
          typeof v.isUpdate > 'u'
            ? typeof v.isExternal < 'u' && v.isExternal
              ? g()
              : !f && (r == null || r())
            : v.isUpdate || r == null || r();
        }),
          a.addEventListener('waiting', g));
      }
      a.register({ immediate: t })
        .then((f) => {
          o ? o('/imposter-party/sw.js', f) : i == null || i(f);
        })
        .catch((f) => {
          s == null || s(f);
        });
    }
  }
  return ((l = d()), c);
}
aa.createRoot(document.getElementById('root')).render(
  w.jsx(sa.StrictMode, { children: w.jsx(HC, {}) })
);
KC();
