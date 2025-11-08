(function () {
  const t = document.createElement("link").relList;
  if (t && t.supports && t.supports("modulepreload")) return;
  for (const l of document.querySelectorAll('link[rel="modulepreload"]')) r(l);
  new MutationObserver((l) => {
    for (const o of l)
      if (o.type === "childList")
        for (const i of o.addedNodes)
          i.tagName === "LINK" && i.rel === "modulepreload" && r(i);
  }).observe(document, { childList: !0, subtree: !0 });
  function n(l) {
    const o = {};
    return (
      l.integrity && (o.integrity = l.integrity),
      l.referrerPolicy && (o.referrerPolicy = l.referrerPolicy),
      l.crossOrigin === "use-credentials"
        ? (o.credentials = "include")
        : l.crossOrigin === "anonymous"
        ? (o.credentials = "omit")
        : (o.credentials = "same-origin"),
      o
    );
  }
  function r(l) {
    if (l.ep) return;
    l.ep = !0;
    const o = n(l);
    fetch(l.href, o);
  }
})();
function tp(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default")
    ? e.default
    : e;
}
var qu = { exports: {} },
  eo = {},
  Gu = { exports: {} },
  z = {};
/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var _r = Symbol.for("react.element"),
  np = Symbol.for("react.portal"),
  rp = Symbol.for("react.fragment"),
  lp = Symbol.for("react.strict_mode"),
  op = Symbol.for("react.profiler"),
  ip = Symbol.for("react.provider"),
  sp = Symbol.for("react.context"),
  ap = Symbol.for("react.forward_ref"),
  up = Symbol.for("react.suspense"),
  cp = Symbol.for("react.memo"),
  dp = Symbol.for("react.lazy"),
  va = Symbol.iterator;
function fp(e) {
  return e === null || typeof e != "object"
    ? null
    : ((e = (va && e[va]) || e["@@iterator"]),
      typeof e == "function" ? e : null);
}
var Xu = {
    isMounted: function () {
      return !1;
    },
    enqueueForceUpdate: function () {},
    enqueueReplaceState: function () {},
    enqueueSetState: function () {},
  },
  Zu = Object.assign,
  ec = {};
function bn(e, t, n) {
  (this.props = e),
    (this.context = t),
    (this.refs = ec),
    (this.updater = n || Xu);
}
bn.prototype.isReactComponent = {};
bn.prototype.setState = function (e, t) {
  if (typeof e != "object" && typeof e != "function" && e != null)
    throw Error(
      "setState(...): takes an object of state variables to update or a function which returns an object of state variables."
    );
  this.updater.enqueueSetState(this, e, t, "setState");
};
bn.prototype.forceUpdate = function (e) {
  this.updater.enqueueForceUpdate(this, e, "forceUpdate");
};
function tc() {}
tc.prototype = bn.prototype;
function us(e, t, n) {
  (this.props = e),
    (this.context = t),
    (this.refs = ec),
    (this.updater = n || Xu);
}
var cs = (us.prototype = new tc());
cs.constructor = us;
Zu(cs, bn.prototype);
cs.isPureReactComponent = !0;
var wa = Array.isArray,
  nc = Object.prototype.hasOwnProperty,
  ds = { current: null },
  rc = { key: !0, ref: !0, __self: !0, __source: !0 };
function lc(e, t, n) {
  var r,
    l = {},
    o = null,
    i = null;
  if (t != null)
    for (r in (t.ref !== void 0 && (i = t.ref),
    t.key !== void 0 && (o = "" + t.key),
    t))
      nc.call(t, r) && !rc.hasOwnProperty(r) && (l[r] = t[r]);
  var a = arguments.length - 2;
  if (a === 1) l.children = n;
  else if (1 < a) {
    for (var s = Array(a), c = 0; c < a; c++) s[c] = arguments[c + 2];
    l.children = s;
  }
  if (e && e.defaultProps)
    for (r in ((a = e.defaultProps), a)) l[r] === void 0 && (l[r] = a[r]);
  return {
    $$typeof: _r,
    type: e,
    key: o,
    ref: i,
    props: l,
    _owner: ds.current,
  };
}
function pp(e, t) {
  return {
    $$typeof: _r,
    type: e.type,
    key: t,
    ref: e.ref,
    props: e.props,
    _owner: e._owner,
  };
}
function fs(e) {
  return typeof e == "object" && e !== null && e.$$typeof === _r;
}
function mp(e) {
  var t = { "=": "=0", ":": "=2" };
  return (
    "$" +
    e.replace(/[=:]/g, function (n) {
      return t[n];
    })
  );
}
var xa = /\/+/g;
function To(e, t) {
  return typeof e == "object" && e !== null && e.key != null
    ? mp("" + e.key)
    : t.toString(36);
}
function sl(e, t, n, r, l) {
  var o = typeof e;
  (o === "undefined" || o === "boolean") && (e = null);
  var i = !1;
  if (e === null) i = !0;
  else
    switch (o) {
      case "string":
      case "number":
        i = !0;
        break;
      case "object":
        switch (e.$$typeof) {
          case _r:
          case np:
            i = !0;
        }
    }
  if (i)
    return (
      (i = e),
      (l = l(i)),
      (e = r === "" ? "." + To(i, 0) : r),
      wa(l)
        ? ((n = ""),
          e != null && (n = e.replace(xa, "$&/") + "/"),
          sl(l, t, n, "", function (c) {
            return c;
          }))
        : l != null &&
          (fs(l) &&
            (l = pp(
              l,
              n +
                (!l.key || (i && i.key === l.key)
                  ? ""
                  : ("" + l.key).replace(xa, "$&/") + "/") +
                e
            )),
          t.push(l)),
      1
    );
  if (((i = 0), (r = r === "" ? "." : r + ":"), wa(e)))
    for (var a = 0; a < e.length; a++) {
      o = e[a];
      var s = r + To(o, a);
      i += sl(o, t, n, s, l);
    }
  else if (((s = fp(e)), typeof s == "function"))
    for (e = s.call(e), a = 0; !(o = e.next()).done; )
      (o = o.value), (s = r + To(o, a++)), (i += sl(o, t, n, s, l));
  else if (o === "object")
    throw (
      ((t = String(e)),
      Error(
        "Objects are not valid as a React child (found: " +
          (t === "[object Object]"
            ? "object with keys {" + Object.keys(e).join(", ") + "}"
            : t) +
          "). If you meant to render a collection of children, use an array instead."
      ))
    );
  return i;
}
function Br(e, t, n) {
  if (e == null) return e;
  var r = [],
    l = 0;
  return (
    sl(e, r, "", "", function (o) {
      return t.call(n, o, l++);
    }),
    r
  );
}
function hp(e) {
  if (e._status === -1) {
    var t = e._result;
    (t = t()),
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
      e._status === -1 && ((e._status = 0), (e._result = t));
  }
  if (e._status === 1) return e._result.default;
  throw e._result;
}
var me = { current: null },
  al = { transition: null },
  gp = {
    ReactCurrentDispatcher: me,
    ReactCurrentBatchConfig: al,
    ReactCurrentOwner: ds,
  };
function oc() {
  throw Error("act(...) is not supported in production builds of React.");
}
z.Children = {
  map: Br,
  forEach: function (e, t, n) {
    Br(
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
      Br(e, function () {
        t++;
      }),
      t
    );
  },
  toArray: function (e) {
    return (
      Br(e, function (t) {
        return t;
      }) || []
    );
  },
  only: function (e) {
    if (!fs(e))
      throw Error(
        "React.Children.only expected to receive a single React element child."
      );
    return e;
  },
};
z.Component = bn;
z.Fragment = rp;
z.Profiler = op;
z.PureComponent = us;
z.StrictMode = lp;
z.Suspense = up;
z.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = gp;
z.act = oc;
z.cloneElement = function (e, t, n) {
  if (e == null)
    throw Error(
      "React.cloneElement(...): The argument must be a React element, but you passed " +
        e +
        "."
    );
  var r = Zu({}, e.props),
    l = e.key,
    o = e.ref,
    i = e._owner;
  if (t != null) {
    if (
      (t.ref !== void 0 && ((o = t.ref), (i = ds.current)),
      t.key !== void 0 && (l = "" + t.key),
      e.type && e.type.defaultProps)
    )
      var a = e.type.defaultProps;
    for (s in t)
      nc.call(t, s) &&
        !rc.hasOwnProperty(s) &&
        (r[s] = t[s] === void 0 && a !== void 0 ? a[s] : t[s]);
  }
  var s = arguments.length - 2;
  if (s === 1) r.children = n;
  else if (1 < s) {
    a = Array(s);
    for (var c = 0; c < s; c++) a[c] = arguments[c + 2];
    r.children = a;
  }
  return { $$typeof: _r, type: e.type, key: l, ref: o, props: r, _owner: i };
};
z.createContext = function (e) {
  return (
    (e = {
      $$typeof: sp,
      _currentValue: e,
      _currentValue2: e,
      _threadCount: 0,
      Provider: null,
      Consumer: null,
      _defaultValue: null,
      _globalName: null,
    }),
    (e.Provider = { $$typeof: ip, _context: e }),
    (e.Consumer = e)
  );
};
z.createElement = lc;
z.createFactory = function (e) {
  var t = lc.bind(null, e);
  return (t.type = e), t;
};
z.createRef = function () {
  return { current: null };
};
z.forwardRef = function (e) {
  return { $$typeof: ap, render: e };
};
z.isValidElement = fs;
z.lazy = function (e) {
  return { $$typeof: dp, _payload: { _status: -1, _result: e }, _init: hp };
};
z.memo = function (e, t) {
  return { $$typeof: cp, type: e, compare: t === void 0 ? null : t };
};
z.startTransition = function (e) {
  var t = al.transition;
  al.transition = {};
  try {
    e();
  } finally {
    al.transition = t;
  }
};
z.unstable_act = oc;
z.useCallback = function (e, t) {
  return me.current.useCallback(e, t);
};
z.useContext = function (e) {
  return me.current.useContext(e);
};
z.useDebugValue = function () {};
z.useDeferredValue = function (e) {
  return me.current.useDeferredValue(e);
};
z.useEffect = function (e, t) {
  return me.current.useEffect(e, t);
};
z.useId = function () {
  return me.current.useId();
};
z.useImperativeHandle = function (e, t, n) {
  return me.current.useImperativeHandle(e, t, n);
};
z.useInsertionEffect = function (e, t) {
  return me.current.useInsertionEffect(e, t);
};
z.useLayoutEffect = function (e, t) {
  return me.current.useLayoutEffect(e, t);
};
z.useMemo = function (e, t) {
  return me.current.useMemo(e, t);
};
z.useReducer = function (e, t, n) {
  return me.current.useReducer(e, t, n);
};
z.useRef = function (e) {
  return me.current.useRef(e);
};
z.useState = function (e) {
  return me.current.useState(e);
};
z.useSyncExternalStore = function (e, t, n) {
  return me.current.useSyncExternalStore(e, t, n);
};
z.useTransition = function () {
  return me.current.useTransition();
};
z.version = "18.3.1";
Gu.exports = z;
var k = Gu.exports;
const yp = tp(k);
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var vp = k,
  wp = Symbol.for("react.element"),
  xp = Symbol.for("react.fragment"),
  kp = Object.prototype.hasOwnProperty,
  Sp = vp.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,
  Ep = { key: !0, ref: !0, __self: !0, __source: !0 };
function ic(e, t, n) {
  var r,
    l = {},
    o = null,
    i = null;
  n !== void 0 && (o = "" + n),
    t.key !== void 0 && (o = "" + t.key),
    t.ref !== void 0 && (i = t.ref);
  for (r in t) kp.call(t, r) && !Ep.hasOwnProperty(r) && (l[r] = t[r]);
  if (e && e.defaultProps)
    for (r in ((t = e.defaultProps), t)) l[r] === void 0 && (l[r] = t[r]);
  return {
    $$typeof: wp,
    type: e,
    key: o,
    ref: i,
    props: l,
    _owner: Sp.current,
  };
}
eo.Fragment = xp;
eo.jsx = ic;
eo.jsxs = ic;
qu.exports = eo;
var u = qu.exports,
  sc = { exports: {} },
  Pe = {},
  ac = { exports: {} },
  uc = {};
/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ (function (e) {
  function t(_, O) {
    var U = _.length;
    _.push(O);
    e: for (; 0 < U; ) {
      var J = (U - 1) >>> 1,
        te = _[J];
      if (0 < l(te, O)) (_[J] = O), (_[U] = te), (U = J);
      else break e;
    }
  }
  function n(_) {
    return _.length === 0 ? null : _[0];
  }
  function r(_) {
    if (_.length === 0) return null;
    var O = _[0],
      U = _.pop();
    if (U !== O) {
      _[0] = U;
      e: for (var J = 0, te = _.length, Dr = te >>> 1; J < Dr; ) {
        var Ft = 2 * (J + 1) - 1,
          _o = _[Ft],
          At = Ft + 1,
          $r = _[At];
        if (0 > l(_o, U))
          At < te && 0 > l($r, _o)
            ? ((_[J] = $r), (_[At] = U), (J = At))
            : ((_[J] = _o), (_[Ft] = U), (J = Ft));
        else if (At < te && 0 > l($r, U)) (_[J] = $r), (_[At] = U), (J = At);
        else break e;
      }
    }
    return O;
  }
  function l(_, O) {
    var U = _.sortIndex - O.sortIndex;
    return U !== 0 ? U : _.id - O.id;
  }
  if (typeof performance == "object" && typeof performance.now == "function") {
    var o = performance;
    e.unstable_now = function () {
      return o.now();
    };
  } else {
    var i = Date,
      a = i.now();
    e.unstable_now = function () {
      return i.now() - a;
    };
  }
  var s = [],
    c = [],
    p = 1,
    m = null,
    y = 3,
    x = !1,
    w = !1,
    v = !1,
    h = typeof setTimeout == "function" ? setTimeout : null,
    f = typeof clearTimeout == "function" ? clearTimeout : null,
    d = typeof setImmediate < "u" ? setImmediate : null;
  typeof navigator < "u" &&
    navigator.scheduling !== void 0 &&
    navigator.scheduling.isInputPending !== void 0 &&
    navigator.scheduling.isInputPending.bind(navigator.scheduling);
  function g(_) {
    for (var O = n(c); O !== null; ) {
      if (O.callback === null) r(c);
      else if (O.startTime <= _)
        r(c), (O.sortIndex = O.expirationTime), t(s, O);
      else break;
      O = n(c);
    }
  }
  function E(_) {
    if (((v = !1), g(_), !w))
      if (n(s) !== null) (w = !0), Ro(N);
      else {
        var O = n(c);
        O !== null && Po(E, O.startTime - _);
      }
  }
  function N(_, O) {
    (w = !1), v && ((v = !1), f(T), (T = -1)), (x = !0);
    var U = y;
    try {
      for (
        g(O), m = n(s);
        m !== null && (!(m.expirationTime > O) || (_ && !ge()));

      ) {
        var J = m.callback;
        if (typeof J == "function") {
          (m.callback = null), (y = m.priorityLevel);
          var te = J(m.expirationTime <= O);
          (O = e.unstable_now()),
            typeof te == "function" ? (m.callback = te) : m === n(s) && r(s),
            g(O);
        } else r(s);
        m = n(s);
      }
      if (m !== null) var Dr = !0;
      else {
        var Ft = n(c);
        Ft !== null && Po(E, Ft.startTime - O), (Dr = !1);
      }
      return Dr;
    } finally {
      (m = null), (y = U), (x = !1);
    }
  }
  var j = !1,
    R = null,
    T = -1,
    M = 5,
    L = -1;
  function ge() {
    return !(e.unstable_now() - L < M);
  }
  function An() {
    if (R !== null) {
      var _ = e.unstable_now();
      L = _;
      var O = !0;
      try {
        O = R(!0, _);
      } finally {
        O ? In() : ((j = !1), (R = null));
      }
    } else j = !1;
  }
  var In;
  if (typeof d == "function")
    In = function () {
      d(An);
    };
  else if (typeof MessageChannel < "u") {
    var ya = new MessageChannel(),
      ep = ya.port2;
    (ya.port1.onmessage = An),
      (In = function () {
        ep.postMessage(null);
      });
  } else
    In = function () {
      h(An, 0);
    };
  function Ro(_) {
    (R = _), j || ((j = !0), In());
  }
  function Po(_, O) {
    T = h(function () {
      _(e.unstable_now());
    }, O);
  }
  (e.unstable_IdlePriority = 5),
    (e.unstable_ImmediatePriority = 1),
    (e.unstable_LowPriority = 4),
    (e.unstable_NormalPriority = 3),
    (e.unstable_Profiling = null),
    (e.unstable_UserBlockingPriority = 2),
    (e.unstable_cancelCallback = function (_) {
      _.callback = null;
    }),
    (e.unstable_continueExecution = function () {
      w || x || ((w = !0), Ro(N));
    }),
    (e.unstable_forceFrameRate = function (_) {
      0 > _ || 125 < _
        ? console.error(
            "forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"
          )
        : (M = 0 < _ ? Math.floor(1e3 / _) : 5);
    }),
    (e.unstable_getCurrentPriorityLevel = function () {
      return y;
    }),
    (e.unstable_getFirstCallbackNode = function () {
      return n(s);
    }),
    (e.unstable_next = function (_) {
      switch (y) {
        case 1:
        case 2:
        case 3:
          var O = 3;
          break;
        default:
          O = y;
      }
      var U = y;
      y = O;
      try {
        return _();
      } finally {
        y = U;
      }
    }),
    (e.unstable_pauseExecution = function () {}),
    (e.unstable_requestPaint = function () {}),
    (e.unstable_runWithPriority = function (_, O) {
      switch (_) {
        case 1:
        case 2:
        case 3:
        case 4:
        case 5:
          break;
        default:
          _ = 3;
      }
      var U = y;
      y = _;
      try {
        return O();
      } finally {
        y = U;
      }
    }),
    (e.unstable_scheduleCallback = function (_, O, U) {
      var J = e.unstable_now();
      switch (
        (typeof U == "object" && U !== null
          ? ((U = U.delay), (U = typeof U == "number" && 0 < U ? J + U : J))
          : (U = J),
        _)
      ) {
        case 1:
          var te = -1;
          break;
        case 2:
          te = 250;
          break;
        case 5:
          te = 1073741823;
          break;
        case 4:
          te = 1e4;
          break;
        default:
          te = 5e3;
      }
      return (
        (te = U + te),
        (_ = {
          id: p++,
          callback: O,
          priorityLevel: _,
          startTime: U,
          expirationTime: te,
          sortIndex: -1,
        }),
        U > J
          ? ((_.sortIndex = U),
            t(c, _),
            n(s) === null &&
              _ === n(c) &&
              (v ? (f(T), (T = -1)) : (v = !0), Po(E, U - J)))
          : ((_.sortIndex = te), t(s, _), w || x || ((w = !0), Ro(N))),
        _
      );
    }),
    (e.unstable_shouldYield = ge),
    (e.unstable_wrapCallback = function (_) {
      var O = y;
      return function () {
        var U = y;
        y = O;
        try {
          return _.apply(this, arguments);
        } finally {
          y = U;
        }
      };
    });
})(uc);
ac.exports = uc;
var Np = ac.exports;
/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var Cp = k,
  Re = Np;
function C(e) {
  for (
    var t = "https://reactjs.org/docs/error-decoder.html?invariant=" + e, n = 1;
    n < arguments.length;
    n++
  )
    t += "&args[]=" + encodeURIComponent(arguments[n]);
  return (
    "Minified React error #" +
    e +
    "; visit " +
    t +
    " for the full message or use the non-minified dev environment for full errors and additional helpful warnings."
  );
}
var cc = new Set(),
  ur = {};
function nn(e, t) {
  Cn(e, t), Cn(e + "Capture", t);
}
function Cn(e, t) {
  for (ur[e] = t, e = 0; e < t.length; e++) cc.add(t[e]);
}
var ct = !(
    typeof window > "u" ||
    typeof window.document > "u" ||
    typeof window.document.createElement > "u"
  ),
  ui = Object.prototype.hasOwnProperty,
  jp =
    /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,
  ka = {},
  Sa = {};
function Rp(e) {
  return ui.call(Sa, e)
    ? !0
    : ui.call(ka, e)
    ? !1
    : jp.test(e)
    ? (Sa[e] = !0)
    : ((ka[e] = !0), !1);
}
function Pp(e, t, n, r) {
  if (n !== null && n.type === 0) return !1;
  switch (typeof t) {
    case "function":
    case "symbol":
      return !0;
    case "boolean":
      return r
        ? !1
        : n !== null
        ? !n.acceptsBooleans
        : ((e = e.toLowerCase().slice(0, 5)), e !== "data-" && e !== "aria-");
    default:
      return !1;
  }
}
function _p(e, t, n, r) {
  if (t === null || typeof t > "u" || Pp(e, t, n, r)) return !0;
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
function he(e, t, n, r, l, o, i) {
  (this.acceptsBooleans = t === 2 || t === 3 || t === 4),
    (this.attributeName = r),
    (this.attributeNamespace = l),
    (this.mustUseProperty = n),
    (this.propertyName = e),
    (this.type = t),
    (this.sanitizeURL = o),
    (this.removeEmptyString = i);
}
var ie = {};
"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style"
  .split(" ")
  .forEach(function (e) {
    ie[e] = new he(e, 0, !1, e, null, !1, !1);
  });
[
  ["acceptCharset", "accept-charset"],
  ["className", "class"],
  ["htmlFor", "for"],
  ["httpEquiv", "http-equiv"],
].forEach(function (e) {
  var t = e[0];
  ie[t] = new he(t, 1, !1, e[1], null, !1, !1);
});
["contentEditable", "draggable", "spellCheck", "value"].forEach(function (e) {
  ie[e] = new he(e, 2, !1, e.toLowerCase(), null, !1, !1);
});
[
  "autoReverse",
  "externalResourcesRequired",
  "focusable",
  "preserveAlpha",
].forEach(function (e) {
  ie[e] = new he(e, 2, !1, e, null, !1, !1);
});
"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope"
  .split(" ")
  .forEach(function (e) {
    ie[e] = new he(e, 3, !1, e.toLowerCase(), null, !1, !1);
  });
["checked", "multiple", "muted", "selected"].forEach(function (e) {
  ie[e] = new he(e, 3, !0, e, null, !1, !1);
});
["capture", "download"].forEach(function (e) {
  ie[e] = new he(e, 4, !1, e, null, !1, !1);
});
["cols", "rows", "size", "span"].forEach(function (e) {
  ie[e] = new he(e, 6, !1, e, null, !1, !1);
});
["rowSpan", "start"].forEach(function (e) {
  ie[e] = new he(e, 5, !1, e.toLowerCase(), null, !1, !1);
});
var ps = /[\-:]([a-z])/g;
function ms(e) {
  return e[1].toUpperCase();
}
"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height"
  .split(" ")
  .forEach(function (e) {
    var t = e.replace(ps, ms);
    ie[t] = new he(t, 1, !1, e, null, !1, !1);
  });
"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type"
  .split(" ")
  .forEach(function (e) {
    var t = e.replace(ps, ms);
    ie[t] = new he(t, 1, !1, e, "http://www.w3.org/1999/xlink", !1, !1);
  });
["xml:base", "xml:lang", "xml:space"].forEach(function (e) {
  var t = e.replace(ps, ms);
  ie[t] = new he(t, 1, !1, e, "http://www.w3.org/XML/1998/namespace", !1, !1);
});
["tabIndex", "crossOrigin"].forEach(function (e) {
  ie[e] = new he(e, 1, !1, e.toLowerCase(), null, !1, !1);
});
ie.xlinkHref = new he(
  "xlinkHref",
  1,
  !1,
  "xlink:href",
  "http://www.w3.org/1999/xlink",
  !0,
  !1
);
["src", "href", "action", "formAction"].forEach(function (e) {
  ie[e] = new he(e, 1, !1, e.toLowerCase(), null, !0, !0);
});
function hs(e, t, n, r) {
  var l = ie.hasOwnProperty(t) ? ie[t] : null;
  (l !== null
    ? l.type !== 0
    : r ||
      !(2 < t.length) ||
      (t[0] !== "o" && t[0] !== "O") ||
      (t[1] !== "n" && t[1] !== "N")) &&
    (_p(t, n, l, r) && (n = null),
    r || l === null
      ? Rp(t) && (n === null ? e.removeAttribute(t) : e.setAttribute(t, "" + n))
      : l.mustUseProperty
      ? (e[l.propertyName] = n === null ? (l.type === 3 ? !1 : "") : n)
      : ((t = l.attributeName),
        (r = l.attributeNamespace),
        n === null
          ? e.removeAttribute(t)
          : ((l = l.type),
            (n = l === 3 || (l === 4 && n === !0) ? "" : "" + n),
            r ? e.setAttributeNS(r, t, n) : e.setAttribute(t, n))));
}
var ht = Cp.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,
  Hr = Symbol.for("react.element"),
  sn = Symbol.for("react.portal"),
  an = Symbol.for("react.fragment"),
  gs = Symbol.for("react.strict_mode"),
  ci = Symbol.for("react.profiler"),
  dc = Symbol.for("react.provider"),
  fc = Symbol.for("react.context"),
  ys = Symbol.for("react.forward_ref"),
  di = Symbol.for("react.suspense"),
  fi = Symbol.for("react.suspense_list"),
  vs = Symbol.for("react.memo"),
  yt = Symbol.for("react.lazy"),
  pc = Symbol.for("react.offscreen"),
  Ea = Symbol.iterator;
function Dn(e) {
  return e === null || typeof e != "object"
    ? null
    : ((e = (Ea && e[Ea]) || e["@@iterator"]),
      typeof e == "function" ? e : null);
}
var Q = Object.assign,
  Lo;
function qn(e) {
  if (Lo === void 0)
    try {
      throw Error();
    } catch (n) {
      var t = n.stack.trim().match(/\n( *(at )?)/);
      Lo = (t && t[1]) || "";
    }
  return (
    `
` +
    Lo +
    e
  );
}
var bo = !1;
function Oo(e, t) {
  if (!e || bo) return "";
  bo = !0;
  var n = Error.prepareStackTrace;
  Error.prepareStackTrace = void 0;
  try {
    if (t)
      if (
        ((t = function () {
          throw Error();
        }),
        Object.defineProperty(t.prototype, "props", {
          set: function () {
            throw Error();
          },
        }),
        typeof Reflect == "object" && Reflect.construct)
      ) {
        try {
          Reflect.construct(t, []);
        } catch (c) {
          var r = c;
        }
        Reflect.construct(e, [], t);
      } else {
        try {
          t.call();
        } catch (c) {
          r = c;
        }
        e.call(t.prototype);
      }
    else {
      try {
        throw Error();
      } catch (c) {
        r = c;
      }
      e();
    }
  } catch (c) {
    if (c && r && typeof c.stack == "string") {
      for (
        var l = c.stack.split(`
`),
          o = r.stack.split(`
`),
          i = l.length - 1,
          a = o.length - 1;
        1 <= i && 0 <= a && l[i] !== o[a];

      )
        a--;
      for (; 1 <= i && 0 <= a; i--, a--)
        if (l[i] !== o[a]) {
          if (i !== 1 || a !== 1)
            do
              if ((i--, a--, 0 > a || l[i] !== o[a])) {
                var s =
                  `
` + l[i].replace(" at new ", " at ");
                return (
                  e.displayName &&
                    s.includes("<anonymous>") &&
                    (s = s.replace("<anonymous>", e.displayName)),
                  s
                );
              }
            while (1 <= i && 0 <= a);
          break;
        }
    }
  } finally {
    (bo = !1), (Error.prepareStackTrace = n);
  }
  return (e = e ? e.displayName || e.name : "") ? qn(e) : "";
}
function Tp(e) {
  switch (e.tag) {
    case 5:
      return qn(e.type);
    case 16:
      return qn("Lazy");
    case 13:
      return qn("Suspense");
    case 19:
      return qn("SuspenseList");
    case 0:
    case 2:
    case 15:
      return (e = Oo(e.type, !1)), e;
    case 11:
      return (e = Oo(e.type.render, !1)), e;
    case 1:
      return (e = Oo(e.type, !0)), e;
    default:
      return "";
  }
}
function pi(e) {
  if (e == null) return null;
  if (typeof e == "function") return e.displayName || e.name || null;
  if (typeof e == "string") return e;
  switch (e) {
    case an:
      return "Fragment";
    case sn:
      return "Portal";
    case ci:
      return "Profiler";
    case gs:
      return "StrictMode";
    case di:
      return "Suspense";
    case fi:
      return "SuspenseList";
  }
  if (typeof e == "object")
    switch (e.$$typeof) {
      case fc:
        return (e.displayName || "Context") + ".Consumer";
      case dc:
        return (e._context.displayName || "Context") + ".Provider";
      case ys:
        var t = e.render;
        return (
          (e = e.displayName),
          e ||
            ((e = t.displayName || t.name || ""),
            (e = e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef")),
          e
        );
      case vs:
        return (
          (t = e.displayName || null), t !== null ? t : pi(e.type) || "Memo"
        );
      case yt:
        (t = e._payload), (e = e._init);
        try {
          return pi(e(t));
        } catch {}
    }
  return null;
}
function Lp(e) {
  var t = e.type;
  switch (e.tag) {
    case 24:
      return "Cache";
    case 9:
      return (t.displayName || "Context") + ".Consumer";
    case 10:
      return (t._context.displayName || "Context") + ".Provider";
    case 18:
      return "DehydratedFragment";
    case 11:
      return (
        (e = t.render),
        (e = e.displayName || e.name || ""),
        t.displayName || (e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef")
      );
    case 7:
      return "Fragment";
    case 5:
      return t;
    case 4:
      return "Portal";
    case 3:
      return "Root";
    case 6:
      return "Text";
    case 16:
      return pi(t);
    case 8:
      return t === gs ? "StrictMode" : "Mode";
    case 22:
      return "Offscreen";
    case 12:
      return "Profiler";
    case 21:
      return "Scope";
    case 13:
      return "Suspense";
    case 19:
      return "SuspenseList";
    case 25:
      return "TracingMarker";
    case 1:
    case 0:
    case 17:
    case 2:
    case 14:
    case 15:
      if (typeof t == "function") return t.displayName || t.name || null;
      if (typeof t == "string") return t;
  }
  return null;
}
function Lt(e) {
  switch (typeof e) {
    case "boolean":
    case "number":
    case "string":
    case "undefined":
      return e;
    case "object":
      return e;
    default:
      return "";
  }
}
function mc(e) {
  var t = e.type;
  return (
    (e = e.nodeName) &&
    e.toLowerCase() === "input" &&
    (t === "checkbox" || t === "radio")
  );
}
function bp(e) {
  var t = mc(e) ? "checked" : "value",
    n = Object.getOwnPropertyDescriptor(e.constructor.prototype, t),
    r = "" + e[t];
  if (
    !e.hasOwnProperty(t) &&
    typeof n < "u" &&
    typeof n.get == "function" &&
    typeof n.set == "function"
  ) {
    var l = n.get,
      o = n.set;
    return (
      Object.defineProperty(e, t, {
        configurable: !0,
        get: function () {
          return l.call(this);
        },
        set: function (i) {
          (r = "" + i), o.call(this, i);
        },
      }),
      Object.defineProperty(e, t, { enumerable: n.enumerable }),
      {
        getValue: function () {
          return r;
        },
        setValue: function (i) {
          r = "" + i;
        },
        stopTracking: function () {
          (e._valueTracker = null), delete e[t];
        },
      }
    );
  }
}
function Vr(e) {
  e._valueTracker || (e._valueTracker = bp(e));
}
function hc(e) {
  if (!e) return !1;
  var t = e._valueTracker;
  if (!t) return !0;
  var n = t.getValue(),
    r = "";
  return (
    e && (r = mc(e) ? (e.checked ? "true" : "false") : e.value),
    (e = r),
    e !== n ? (t.setValue(e), !0) : !1
  );
}
function jl(e) {
  if (((e = e || (typeof document < "u" ? document : void 0)), typeof e > "u"))
    return null;
  try {
    return e.activeElement || e.body;
  } catch {
    return e.body;
  }
}
function mi(e, t) {
  var n = t.checked;
  return Q({}, t, {
    defaultChecked: void 0,
    defaultValue: void 0,
    value: void 0,
    checked: n ?? e._wrapperState.initialChecked,
  });
}
function Na(e, t) {
  var n = t.defaultValue == null ? "" : t.defaultValue,
    r = t.checked != null ? t.checked : t.defaultChecked;
  (n = Lt(t.value != null ? t.value : n)),
    (e._wrapperState = {
      initialChecked: r,
      initialValue: n,
      controlled:
        t.type === "checkbox" || t.type === "radio"
          ? t.checked != null
          : t.value != null,
    });
}
function gc(e, t) {
  (t = t.checked), t != null && hs(e, "checked", t, !1);
}
function hi(e, t) {
  gc(e, t);
  var n = Lt(t.value),
    r = t.type;
  if (n != null)
    r === "number"
      ? ((n === 0 && e.value === "") || e.value != n) && (e.value = "" + n)
      : e.value !== "" + n && (e.value = "" + n);
  else if (r === "submit" || r === "reset") {
    e.removeAttribute("value");
    return;
  }
  t.hasOwnProperty("value")
    ? gi(e, t.type, n)
    : t.hasOwnProperty("defaultValue") && gi(e, t.type, Lt(t.defaultValue)),
    t.checked == null &&
      t.defaultChecked != null &&
      (e.defaultChecked = !!t.defaultChecked);
}
function Ca(e, t, n) {
  if (t.hasOwnProperty("value") || t.hasOwnProperty("defaultValue")) {
    var r = t.type;
    if (
      !(
        (r !== "submit" && r !== "reset") ||
        (t.value !== void 0 && t.value !== null)
      )
    )
      return;
    (t = "" + e._wrapperState.initialValue),
      n || t === e.value || (e.value = t),
      (e.defaultValue = t);
  }
  (n = e.name),
    n !== "" && (e.name = ""),
    (e.defaultChecked = !!e._wrapperState.initialChecked),
    n !== "" && (e.name = n);
}
function gi(e, t, n) {
  (t !== "number" || jl(e.ownerDocument) !== e) &&
    (n == null
      ? (e.defaultValue = "" + e._wrapperState.initialValue)
      : e.defaultValue !== "" + n && (e.defaultValue = "" + n));
}
var Gn = Array.isArray;
function wn(e, t, n, r) {
  if (((e = e.options), t)) {
    t = {};
    for (var l = 0; l < n.length; l++) t["$" + n[l]] = !0;
    for (n = 0; n < e.length; n++)
      (l = t.hasOwnProperty("$" + e[n].value)),
        e[n].selected !== l && (e[n].selected = l),
        l && r && (e[n].defaultSelected = !0);
  } else {
    for (n = "" + Lt(n), t = null, l = 0; l < e.length; l++) {
      if (e[l].value === n) {
        (e[l].selected = !0), r && (e[l].defaultSelected = !0);
        return;
      }
      t !== null || e[l].disabled || (t = e[l]);
    }
    t !== null && (t.selected = !0);
  }
}
function yi(e, t) {
  if (t.dangerouslySetInnerHTML != null) throw Error(C(91));
  return Q({}, t, {
    value: void 0,
    defaultValue: void 0,
    children: "" + e._wrapperState.initialValue,
  });
}
function ja(e, t) {
  var n = t.value;
  if (n == null) {
    if (((n = t.children), (t = t.defaultValue), n != null)) {
      if (t != null) throw Error(C(92));
      if (Gn(n)) {
        if (1 < n.length) throw Error(C(93));
        n = n[0];
      }
      t = n;
    }
    t == null && (t = ""), (n = t);
  }
  e._wrapperState = { initialValue: Lt(n) };
}
function yc(e, t) {
  var n = Lt(t.value),
    r = Lt(t.defaultValue);
  n != null &&
    ((n = "" + n),
    n !== e.value && (e.value = n),
    t.defaultValue == null && e.defaultValue !== n && (e.defaultValue = n)),
    r != null && (e.defaultValue = "" + r);
}
function Ra(e) {
  var t = e.textContent;
  t === e._wrapperState.initialValue && t !== "" && t !== null && (e.value = t);
}
function vc(e) {
  switch (e) {
    case "svg":
      return "http://www.w3.org/2000/svg";
    case "math":
      return "http://www.w3.org/1998/Math/MathML";
    default:
      return "http://www.w3.org/1999/xhtml";
  }
}
function vi(e, t) {
  return e == null || e === "http://www.w3.org/1999/xhtml"
    ? vc(t)
    : e === "http://www.w3.org/2000/svg" && t === "foreignObject"
    ? "http://www.w3.org/1999/xhtml"
    : e;
}
var Wr,
  wc = (function (e) {
    return typeof MSApp < "u" && MSApp.execUnsafeLocalFunction
      ? function (t, n, r, l) {
          MSApp.execUnsafeLocalFunction(function () {
            return e(t, n, r, l);
          });
        }
      : e;
  })(function (e, t) {
    if (e.namespaceURI !== "http://www.w3.org/2000/svg" || "innerHTML" in e)
      e.innerHTML = t;
    else {
      for (
        Wr = Wr || document.createElement("div"),
          Wr.innerHTML = "<svg>" + t.valueOf().toString() + "</svg>",
          t = Wr.firstChild;
        e.firstChild;

      )
        e.removeChild(e.firstChild);
      for (; t.firstChild; ) e.appendChild(t.firstChild);
    }
  });
function cr(e, t) {
  if (t) {
    var n = e.firstChild;
    if (n && n === e.lastChild && n.nodeType === 3) {
      n.nodeValue = t;
      return;
    }
  }
  e.textContent = t;
}
var er = {
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
  Op = ["Webkit", "ms", "Moz", "O"];
Object.keys(er).forEach(function (e) {
  Op.forEach(function (t) {
    (t = t + e.charAt(0).toUpperCase() + e.substring(1)), (er[t] = er[e]);
  });
});
function xc(e, t, n) {
  return t == null || typeof t == "boolean" || t === ""
    ? ""
    : n || typeof t != "number" || t === 0 || (er.hasOwnProperty(e) && er[e])
    ? ("" + t).trim()
    : t + "px";
}
function kc(e, t) {
  e = e.style;
  for (var n in t)
    if (t.hasOwnProperty(n)) {
      var r = n.indexOf("--") === 0,
        l = xc(n, t[n], r);
      n === "float" && (n = "cssFloat"), r ? e.setProperty(n, l) : (e[n] = l);
    }
}
var Up = Q(
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
function wi(e, t) {
  if (t) {
    if (Up[e] && (t.children != null || t.dangerouslySetInnerHTML != null))
      throw Error(C(137, e));
    if (t.dangerouslySetInnerHTML != null) {
      if (t.children != null) throw Error(C(60));
      if (
        typeof t.dangerouslySetInnerHTML != "object" ||
        !("__html" in t.dangerouslySetInnerHTML)
      )
        throw Error(C(61));
    }
    if (t.style != null && typeof t.style != "object") throw Error(C(62));
  }
}
function xi(e, t) {
  if (e.indexOf("-") === -1) return typeof t.is == "string";
  switch (e) {
    case "annotation-xml":
    case "color-profile":
    case "font-face":
    case "font-face-src":
    case "font-face-uri":
    case "font-face-format":
    case "font-face-name":
    case "missing-glyph":
      return !1;
    default:
      return !0;
  }
}
var ki = null;
function ws(e) {
  return (
    (e = e.target || e.srcElement || window),
    e.correspondingUseElement && (e = e.correspondingUseElement),
    e.nodeType === 3 ? e.parentNode : e
  );
}
var Si = null,
  xn = null,
  kn = null;
function Pa(e) {
  if ((e = br(e))) {
    if (typeof Si != "function") throw Error(C(280));
    var t = e.stateNode;
    t && ((t = oo(t)), Si(e.stateNode, e.type, t));
  }
}
function Sc(e) {
  xn ? (kn ? kn.push(e) : (kn = [e])) : (xn = e);
}
function Ec() {
  if (xn) {
    var e = xn,
      t = kn;
    if (((kn = xn = null), Pa(e), t)) for (e = 0; e < t.length; e++) Pa(t[e]);
  }
}
function Nc(e, t) {
  return e(t);
}
function Cc() {}
var Uo = !1;
function jc(e, t, n) {
  if (Uo) return e(t, n);
  Uo = !0;
  try {
    return Nc(e, t, n);
  } finally {
    (Uo = !1), (xn !== null || kn !== null) && (Cc(), Ec());
  }
}
function dr(e, t) {
  var n = e.stateNode;
  if (n === null) return null;
  var r = oo(n);
  if (r === null) return null;
  n = r[t];
  e: switch (t) {
    case "onClick":
    case "onClickCapture":
    case "onDoubleClick":
    case "onDoubleClickCapture":
    case "onMouseDown":
    case "onMouseDownCapture":
    case "onMouseMove":
    case "onMouseMoveCapture":
    case "onMouseUp":
    case "onMouseUpCapture":
    case "onMouseEnter":
      (r = !r.disabled) ||
        ((e = e.type),
        (r = !(
          e === "button" ||
          e === "input" ||
          e === "select" ||
          e === "textarea"
        ))),
        (e = !r);
      break e;
    default:
      e = !1;
  }
  if (e) return null;
  if (n && typeof n != "function") throw Error(C(231, t, typeof n));
  return n;
}
var Ei = !1;
if (ct)
  try {
    var $n = {};
    Object.defineProperty($n, "passive", {
      get: function () {
        Ei = !0;
      },
    }),
      window.addEventListener("test", $n, $n),
      window.removeEventListener("test", $n, $n);
  } catch {
    Ei = !1;
  }
function zp(e, t, n, r, l, o, i, a, s) {
  var c = Array.prototype.slice.call(arguments, 3);
  try {
    t.apply(n, c);
  } catch (p) {
    this.onError(p);
  }
}
var tr = !1,
  Rl = null,
  Pl = !1,
  Ni = null,
  Mp = {
    onError: function (e) {
      (tr = !0), (Rl = e);
    },
  };
function Fp(e, t, n, r, l, o, i, a, s) {
  (tr = !1), (Rl = null), zp.apply(Mp, arguments);
}
function Ap(e, t, n, r, l, o, i, a, s) {
  if ((Fp.apply(this, arguments), tr)) {
    if (tr) {
      var c = Rl;
      (tr = !1), (Rl = null);
    } else throw Error(C(198));
    Pl || ((Pl = !0), (Ni = c));
  }
}
function rn(e) {
  var t = e,
    n = e;
  if (e.alternate) for (; t.return; ) t = t.return;
  else {
    e = t;
    do (t = e), t.flags & 4098 && (n = t.return), (e = t.return);
    while (e);
  }
  return t.tag === 3 ? n : null;
}
function Rc(e) {
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
function _a(e) {
  if (rn(e) !== e) throw Error(C(188));
}
function Ip(e) {
  var t = e.alternate;
  if (!t) {
    if (((t = rn(e)), t === null)) throw Error(C(188));
    return t !== e ? null : e;
  }
  for (var n = e, r = t; ; ) {
    var l = n.return;
    if (l === null) break;
    var o = l.alternate;
    if (o === null) {
      if (((r = l.return), r !== null)) {
        n = r;
        continue;
      }
      break;
    }
    if (l.child === o.child) {
      for (o = l.child; o; ) {
        if (o === n) return _a(l), e;
        if (o === r) return _a(l), t;
        o = o.sibling;
      }
      throw Error(C(188));
    }
    if (n.return !== r.return) (n = l), (r = o);
    else {
      for (var i = !1, a = l.child; a; ) {
        if (a === n) {
          (i = !0), (n = l), (r = o);
          break;
        }
        if (a === r) {
          (i = !0), (r = l), (n = o);
          break;
        }
        a = a.sibling;
      }
      if (!i) {
        for (a = o.child; a; ) {
          if (a === n) {
            (i = !0), (n = o), (r = l);
            break;
          }
          if (a === r) {
            (i = !0), (r = o), (n = l);
            break;
          }
          a = a.sibling;
        }
        if (!i) throw Error(C(189));
      }
    }
    if (n.alternate !== r) throw Error(C(190));
  }
  if (n.tag !== 3) throw Error(C(188));
  return n.stateNode.current === n ? e : t;
}
function Pc(e) {
  return (e = Ip(e)), e !== null ? _c(e) : null;
}
function _c(e) {
  if (e.tag === 5 || e.tag === 6) return e;
  for (e = e.child; e !== null; ) {
    var t = _c(e);
    if (t !== null) return t;
    e = e.sibling;
  }
  return null;
}
var Tc = Re.unstable_scheduleCallback,
  Ta = Re.unstable_cancelCallback,
  Dp = Re.unstable_shouldYield,
  $p = Re.unstable_requestPaint,
  q = Re.unstable_now,
  Bp = Re.unstable_getCurrentPriorityLevel,
  xs = Re.unstable_ImmediatePriority,
  Lc = Re.unstable_UserBlockingPriority,
  _l = Re.unstable_NormalPriority,
  Hp = Re.unstable_LowPriority,
  bc = Re.unstable_IdlePriority,
  to = null,
  Ge = null;
function Vp(e) {
  if (Ge && typeof Ge.onCommitFiberRoot == "function")
    try {
      Ge.onCommitFiberRoot(to, e, void 0, (e.current.flags & 128) === 128);
    } catch {}
}
var De = Math.clz32 ? Math.clz32 : Qp,
  Wp = Math.log,
  Kp = Math.LN2;
function Qp(e) {
  return (e >>>= 0), e === 0 ? 32 : (31 - ((Wp(e) / Kp) | 0)) | 0;
}
var Kr = 64,
  Qr = 4194304;
function Xn(e) {
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
function Tl(e, t) {
  var n = e.pendingLanes;
  if (n === 0) return 0;
  var r = 0,
    l = e.suspendedLanes,
    o = e.pingedLanes,
    i = n & 268435455;
  if (i !== 0) {
    var a = i & ~l;
    a !== 0 ? (r = Xn(a)) : ((o &= i), o !== 0 && (r = Xn(o)));
  } else (i = n & ~l), i !== 0 ? (r = Xn(i)) : o !== 0 && (r = Xn(o));
  if (r === 0) return 0;
  if (
    t !== 0 &&
    t !== r &&
    !(t & l) &&
    ((l = r & -r), (o = t & -t), l >= o || (l === 16 && (o & 4194240) !== 0))
  )
    return t;
  if ((r & 4 && (r |= n & 16), (t = e.entangledLanes), t !== 0))
    for (e = e.entanglements, t &= r; 0 < t; )
      (n = 31 - De(t)), (l = 1 << n), (r |= e[n]), (t &= ~l);
  return r;
}
function Yp(e, t) {
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
function Jp(e, t) {
  for (
    var n = e.suspendedLanes,
      r = e.pingedLanes,
      l = e.expirationTimes,
      o = e.pendingLanes;
    0 < o;

  ) {
    var i = 31 - De(o),
      a = 1 << i,
      s = l[i];
    s === -1
      ? (!(a & n) || a & r) && (l[i] = Yp(a, t))
      : s <= t && (e.expiredLanes |= a),
      (o &= ~a);
  }
}
function Ci(e) {
  return (
    (e = e.pendingLanes & -1073741825),
    e !== 0 ? e : e & 1073741824 ? 1073741824 : 0
  );
}
function Oc() {
  var e = Kr;
  return (Kr <<= 1), !(Kr & 4194240) && (Kr = 64), e;
}
function zo(e) {
  for (var t = [], n = 0; 31 > n; n++) t.push(e);
  return t;
}
function Tr(e, t, n) {
  (e.pendingLanes |= t),
    t !== 536870912 && ((e.suspendedLanes = 0), (e.pingedLanes = 0)),
    (e = e.eventTimes),
    (t = 31 - De(t)),
    (e[t] = n);
}
function qp(e, t) {
  var n = e.pendingLanes & ~t;
  (e.pendingLanes = t),
    (e.suspendedLanes = 0),
    (e.pingedLanes = 0),
    (e.expiredLanes &= t),
    (e.mutableReadLanes &= t),
    (e.entangledLanes &= t),
    (t = e.entanglements);
  var r = e.eventTimes;
  for (e = e.expirationTimes; 0 < n; ) {
    var l = 31 - De(n),
      o = 1 << l;
    (t[l] = 0), (r[l] = -1), (e[l] = -1), (n &= ~o);
  }
}
function ks(e, t) {
  var n = (e.entangledLanes |= t);
  for (e = e.entanglements; n; ) {
    var r = 31 - De(n),
      l = 1 << r;
    (l & t) | (e[r] & t) && (e[r] |= t), (n &= ~l);
  }
}
var A = 0;
function Uc(e) {
  return (e &= -e), 1 < e ? (4 < e ? (e & 268435455 ? 16 : 536870912) : 4) : 1;
}
var zc,
  Ss,
  Mc,
  Fc,
  Ac,
  ji = !1,
  Yr = [],
  Et = null,
  Nt = null,
  Ct = null,
  fr = new Map(),
  pr = new Map(),
  wt = [],
  Gp =
    "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(
      " "
    );
function La(e, t) {
  switch (e) {
    case "focusin":
    case "focusout":
      Et = null;
      break;
    case "dragenter":
    case "dragleave":
      Nt = null;
      break;
    case "mouseover":
    case "mouseout":
      Ct = null;
      break;
    case "pointerover":
    case "pointerout":
      fr.delete(t.pointerId);
      break;
    case "gotpointercapture":
    case "lostpointercapture":
      pr.delete(t.pointerId);
  }
}
function Bn(e, t, n, r, l, o) {
  return e === null || e.nativeEvent !== o
    ? ((e = {
        blockedOn: t,
        domEventName: n,
        eventSystemFlags: r,
        nativeEvent: o,
        targetContainers: [l],
      }),
      t !== null && ((t = br(t)), t !== null && Ss(t)),
      e)
    : ((e.eventSystemFlags |= r),
      (t = e.targetContainers),
      l !== null && t.indexOf(l) === -1 && t.push(l),
      e);
}
function Xp(e, t, n, r, l) {
  switch (t) {
    case "focusin":
      return (Et = Bn(Et, e, t, n, r, l)), !0;
    case "dragenter":
      return (Nt = Bn(Nt, e, t, n, r, l)), !0;
    case "mouseover":
      return (Ct = Bn(Ct, e, t, n, r, l)), !0;
    case "pointerover":
      var o = l.pointerId;
      return fr.set(o, Bn(fr.get(o) || null, e, t, n, r, l)), !0;
    case "gotpointercapture":
      return (
        (o = l.pointerId), pr.set(o, Bn(pr.get(o) || null, e, t, n, r, l)), !0
      );
  }
  return !1;
}
function Ic(e) {
  var t = Bt(e.target);
  if (t !== null) {
    var n = rn(t);
    if (n !== null) {
      if (((t = n.tag), t === 13)) {
        if (((t = Rc(n)), t !== null)) {
          (e.blockedOn = t),
            Ac(e.priority, function () {
              Mc(n);
            });
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
function ul(e) {
  if (e.blockedOn !== null) return !1;
  for (var t = e.targetContainers; 0 < t.length; ) {
    var n = Ri(e.domEventName, e.eventSystemFlags, t[0], e.nativeEvent);
    if (n === null) {
      n = e.nativeEvent;
      var r = new n.constructor(n.type, n);
      (ki = r), n.target.dispatchEvent(r), (ki = null);
    } else return (t = br(n)), t !== null && Ss(t), (e.blockedOn = n), !1;
    t.shift();
  }
  return !0;
}
function ba(e, t, n) {
  ul(e) && n.delete(t);
}
function Zp() {
  (ji = !1),
    Et !== null && ul(Et) && (Et = null),
    Nt !== null && ul(Nt) && (Nt = null),
    Ct !== null && ul(Ct) && (Ct = null),
    fr.forEach(ba),
    pr.forEach(ba);
}
function Hn(e, t) {
  e.blockedOn === t &&
    ((e.blockedOn = null),
    ji ||
      ((ji = !0),
      Re.unstable_scheduleCallback(Re.unstable_NormalPriority, Zp)));
}
function mr(e) {
  function t(l) {
    return Hn(l, e);
  }
  if (0 < Yr.length) {
    Hn(Yr[0], e);
    for (var n = 1; n < Yr.length; n++) {
      var r = Yr[n];
      r.blockedOn === e && (r.blockedOn = null);
    }
  }
  for (
    Et !== null && Hn(Et, e),
      Nt !== null && Hn(Nt, e),
      Ct !== null && Hn(Ct, e),
      fr.forEach(t),
      pr.forEach(t),
      n = 0;
    n < wt.length;
    n++
  )
    (r = wt[n]), r.blockedOn === e && (r.blockedOn = null);
  for (; 0 < wt.length && ((n = wt[0]), n.blockedOn === null); )
    Ic(n), n.blockedOn === null && wt.shift();
}
var Sn = ht.ReactCurrentBatchConfig,
  Ll = !0;
function em(e, t, n, r) {
  var l = A,
    o = Sn.transition;
  Sn.transition = null;
  try {
    (A = 1), Es(e, t, n, r);
  } finally {
    (A = l), (Sn.transition = o);
  }
}
function tm(e, t, n, r) {
  var l = A,
    o = Sn.transition;
  Sn.transition = null;
  try {
    (A = 4), Es(e, t, n, r);
  } finally {
    (A = l), (Sn.transition = o);
  }
}
function Es(e, t, n, r) {
  if (Ll) {
    var l = Ri(e, t, n, r);
    if (l === null) Wo(e, t, r, bl, n), La(e, r);
    else if (Xp(l, e, t, n, r)) r.stopPropagation();
    else if ((La(e, r), t & 4 && -1 < Gp.indexOf(e))) {
      for (; l !== null; ) {
        var o = br(l);
        if (
          (o !== null && zc(o),
          (o = Ri(e, t, n, r)),
          o === null && Wo(e, t, r, bl, n),
          o === l)
        )
          break;
        l = o;
      }
      l !== null && r.stopPropagation();
    } else Wo(e, t, r, null, n);
  }
}
var bl = null;
function Ri(e, t, n, r) {
  if (((bl = null), (e = ws(r)), (e = Bt(e)), e !== null))
    if (((t = rn(e)), t === null)) e = null;
    else if (((n = t.tag), n === 13)) {
      if (((e = Rc(t)), e !== null)) return e;
      e = null;
    } else if (n === 3) {
      if (t.stateNode.current.memoizedState.isDehydrated)
        return t.tag === 3 ? t.stateNode.containerInfo : null;
      e = null;
    } else t !== e && (e = null);
  return (bl = e), null;
}
function Dc(e) {
  switch (e) {
    case "cancel":
    case "click":
    case "close":
    case "contextmenu":
    case "copy":
    case "cut":
    case "auxclick":
    case "dblclick":
    case "dragend":
    case "dragstart":
    case "drop":
    case "focusin":
    case "focusout":
    case "input":
    case "invalid":
    case "keydown":
    case "keypress":
    case "keyup":
    case "mousedown":
    case "mouseup":
    case "paste":
    case "pause":
    case "play":
    case "pointercancel":
    case "pointerdown":
    case "pointerup":
    case "ratechange":
    case "reset":
    case "resize":
    case "seeked":
    case "submit":
    case "touchcancel":
    case "touchend":
    case "touchstart":
    case "volumechange":
    case "change":
    case "selectionchange":
    case "textInput":
    case "compositionstart":
    case "compositionend":
    case "compositionupdate":
    case "beforeblur":
    case "afterblur":
    case "beforeinput":
    case "blur":
    case "fullscreenchange":
    case "focus":
    case "hashchange":
    case "popstate":
    case "select":
    case "selectstart":
      return 1;
    case "drag":
    case "dragenter":
    case "dragexit":
    case "dragleave":
    case "dragover":
    case "mousemove":
    case "mouseout":
    case "mouseover":
    case "pointermove":
    case "pointerout":
    case "pointerover":
    case "scroll":
    case "toggle":
    case "touchmove":
    case "wheel":
    case "mouseenter":
    case "mouseleave":
    case "pointerenter":
    case "pointerleave":
      return 4;
    case "message":
      switch (Bp()) {
        case xs:
          return 1;
        case Lc:
          return 4;
        case _l:
        case Hp:
          return 16;
        case bc:
          return 536870912;
        default:
          return 16;
      }
    default:
      return 16;
  }
}
var kt = null,
  Ns = null,
  cl = null;
function $c() {
  if (cl) return cl;
  var e,
    t = Ns,
    n = t.length,
    r,
    l = "value" in kt ? kt.value : kt.textContent,
    o = l.length;
  for (e = 0; e < n && t[e] === l[e]; e++);
  var i = n - e;
  for (r = 1; r <= i && t[n - r] === l[o - r]; r++);
  return (cl = l.slice(e, 1 < r ? 1 - r : void 0));
}
function dl(e) {
  var t = e.keyCode;
  return (
    "charCode" in e
      ? ((e = e.charCode), e === 0 && t === 13 && (e = 13))
      : (e = t),
    e === 10 && (e = 13),
    32 <= e || e === 13 ? e : 0
  );
}
function Jr() {
  return !0;
}
function Oa() {
  return !1;
}
function _e(e) {
  function t(n, r, l, o, i) {
    (this._reactName = n),
      (this._targetInst = l),
      (this.type = r),
      (this.nativeEvent = o),
      (this.target = i),
      (this.currentTarget = null);
    for (var a in e)
      e.hasOwnProperty(a) && ((n = e[a]), (this[a] = n ? n(o) : o[a]));
    return (
      (this.isDefaultPrevented = (
        o.defaultPrevented != null ? o.defaultPrevented : o.returnValue === !1
      )
        ? Jr
        : Oa),
      (this.isPropagationStopped = Oa),
      this
    );
  }
  return (
    Q(t.prototype, {
      preventDefault: function () {
        this.defaultPrevented = !0;
        var n = this.nativeEvent;
        n &&
          (n.preventDefault
            ? n.preventDefault()
            : typeof n.returnValue != "unknown" && (n.returnValue = !1),
          (this.isDefaultPrevented = Jr));
      },
      stopPropagation: function () {
        var n = this.nativeEvent;
        n &&
          (n.stopPropagation
            ? n.stopPropagation()
            : typeof n.cancelBubble != "unknown" && (n.cancelBubble = !0),
          (this.isPropagationStopped = Jr));
      },
      persist: function () {},
      isPersistent: Jr,
    }),
    t
  );
}
var On = {
    eventPhase: 0,
    bubbles: 0,
    cancelable: 0,
    timeStamp: function (e) {
      return e.timeStamp || Date.now();
    },
    defaultPrevented: 0,
    isTrusted: 0,
  },
  Cs = _e(On),
  Lr = Q({}, On, { view: 0, detail: 0 }),
  nm = _e(Lr),
  Mo,
  Fo,
  Vn,
  no = Q({}, Lr, {
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
    getModifierState: js,
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
      return "movementX" in e
        ? e.movementX
        : (e !== Vn &&
            (Vn && e.type === "mousemove"
              ? ((Mo = e.screenX - Vn.screenX), (Fo = e.screenY - Vn.screenY))
              : (Fo = Mo = 0),
            (Vn = e)),
          Mo);
    },
    movementY: function (e) {
      return "movementY" in e ? e.movementY : Fo;
    },
  }),
  Ua = _e(no),
  rm = Q({}, no, { dataTransfer: 0 }),
  lm = _e(rm),
  om = Q({}, Lr, { relatedTarget: 0 }),
  Ao = _e(om),
  im = Q({}, On, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }),
  sm = _e(im),
  am = Q({}, On, {
    clipboardData: function (e) {
      return "clipboardData" in e ? e.clipboardData : window.clipboardData;
    },
  }),
  um = _e(am),
  cm = Q({}, On, { data: 0 }),
  za = _e(cm),
  dm = {
    Esc: "Escape",
    Spacebar: " ",
    Left: "ArrowLeft",
    Up: "ArrowUp",
    Right: "ArrowRight",
    Down: "ArrowDown",
    Del: "Delete",
    Win: "OS",
    Menu: "ContextMenu",
    Apps: "ContextMenu",
    Scroll: "ScrollLock",
    MozPrintableKey: "Unidentified",
  },
  fm = {
    8: "Backspace",
    9: "Tab",
    12: "Clear",
    13: "Enter",
    16: "Shift",
    17: "Control",
    18: "Alt",
    19: "Pause",
    20: "CapsLock",
    27: "Escape",
    32: " ",
    33: "PageUp",
    34: "PageDown",
    35: "End",
    36: "Home",
    37: "ArrowLeft",
    38: "ArrowUp",
    39: "ArrowRight",
    40: "ArrowDown",
    45: "Insert",
    46: "Delete",
    112: "F1",
    113: "F2",
    114: "F3",
    115: "F4",
    116: "F5",
    117: "F6",
    118: "F7",
    119: "F8",
    120: "F9",
    121: "F10",
    122: "F11",
    123: "F12",
    144: "NumLock",
    145: "ScrollLock",
    224: "Meta",
  },
  pm = {
    Alt: "altKey",
    Control: "ctrlKey",
    Meta: "metaKey",
    Shift: "shiftKey",
  };
function mm(e) {
  var t = this.nativeEvent;
  return t.getModifierState ? t.getModifierState(e) : (e = pm[e]) ? !!t[e] : !1;
}
function js() {
  return mm;
}
var hm = Q({}, Lr, {
    key: function (e) {
      if (e.key) {
        var t = dm[e.key] || e.key;
        if (t !== "Unidentified") return t;
      }
      return e.type === "keypress"
        ? ((e = dl(e)), e === 13 ? "Enter" : String.fromCharCode(e))
        : e.type === "keydown" || e.type === "keyup"
        ? fm[e.keyCode] || "Unidentified"
        : "";
    },
    code: 0,
    location: 0,
    ctrlKey: 0,
    shiftKey: 0,
    altKey: 0,
    metaKey: 0,
    repeat: 0,
    locale: 0,
    getModifierState: js,
    charCode: function (e) {
      return e.type === "keypress" ? dl(e) : 0;
    },
    keyCode: function (e) {
      return e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
    },
    which: function (e) {
      return e.type === "keypress"
        ? dl(e)
        : e.type === "keydown" || e.type === "keyup"
        ? e.keyCode
        : 0;
    },
  }),
  gm = _e(hm),
  ym = Q({}, no, {
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
  Ma = _e(ym),
  vm = Q({}, Lr, {
    touches: 0,
    targetTouches: 0,
    changedTouches: 0,
    altKey: 0,
    metaKey: 0,
    ctrlKey: 0,
    shiftKey: 0,
    getModifierState: js,
  }),
  wm = _e(vm),
  xm = Q({}, On, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }),
  km = _e(xm),
  Sm = Q({}, no, {
    deltaX: function (e) {
      return "deltaX" in e ? e.deltaX : "wheelDeltaX" in e ? -e.wheelDeltaX : 0;
    },
    deltaY: function (e) {
      return "deltaY" in e
        ? e.deltaY
        : "wheelDeltaY" in e
        ? -e.wheelDeltaY
        : "wheelDelta" in e
        ? -e.wheelDelta
        : 0;
    },
    deltaZ: 0,
    deltaMode: 0,
  }),
  Em = _e(Sm),
  Nm = [9, 13, 27, 32],
  Rs = ct && "CompositionEvent" in window,
  nr = null;
ct && "documentMode" in document && (nr = document.documentMode);
var Cm = ct && "TextEvent" in window && !nr,
  Bc = ct && (!Rs || (nr && 8 < nr && 11 >= nr)),
  Fa = " ",
  Aa = !1;
function Hc(e, t) {
  switch (e) {
    case "keyup":
      return Nm.indexOf(t.keyCode) !== -1;
    case "keydown":
      return t.keyCode !== 229;
    case "keypress":
    case "mousedown":
    case "focusout":
      return !0;
    default:
      return !1;
  }
}
function Vc(e) {
  return (e = e.detail), typeof e == "object" && "data" in e ? e.data : null;
}
var un = !1;
function jm(e, t) {
  switch (e) {
    case "compositionend":
      return Vc(t);
    case "keypress":
      return t.which !== 32 ? null : ((Aa = !0), Fa);
    case "textInput":
      return (e = t.data), e === Fa && Aa ? null : e;
    default:
      return null;
  }
}
function Rm(e, t) {
  if (un)
    return e === "compositionend" || (!Rs && Hc(e, t))
      ? ((e = $c()), (cl = Ns = kt = null), (un = !1), e)
      : null;
  switch (e) {
    case "paste":
      return null;
    case "keypress":
      if (!(t.ctrlKey || t.altKey || t.metaKey) || (t.ctrlKey && t.altKey)) {
        if (t.char && 1 < t.char.length) return t.char;
        if (t.which) return String.fromCharCode(t.which);
      }
      return null;
    case "compositionend":
      return Bc && t.locale !== "ko" ? null : t.data;
    default:
      return null;
  }
}
var Pm = {
  color: !0,
  date: !0,
  datetime: !0,
  "datetime-local": !0,
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
function Ia(e) {
  var t = e && e.nodeName && e.nodeName.toLowerCase();
  return t === "input" ? !!Pm[e.type] : t === "textarea";
}
function Wc(e, t, n, r) {
  Sc(r),
    (t = Ol(t, "onChange")),
    0 < t.length &&
      ((n = new Cs("onChange", "change", null, n, r)),
      e.push({ event: n, listeners: t }));
}
var rr = null,
  hr = null;
function _m(e) {
  nd(e, 0);
}
function ro(e) {
  var t = fn(e);
  if (hc(t)) return e;
}
function Tm(e, t) {
  if (e === "change") return t;
}
var Kc = !1;
if (ct) {
  var Io;
  if (ct) {
    var Do = "oninput" in document;
    if (!Do) {
      var Da = document.createElement("div");
      Da.setAttribute("oninput", "return;"),
        (Do = typeof Da.oninput == "function");
    }
    Io = Do;
  } else Io = !1;
  Kc = Io && (!document.documentMode || 9 < document.documentMode);
}
function $a() {
  rr && (rr.detachEvent("onpropertychange", Qc), (hr = rr = null));
}
function Qc(e) {
  if (e.propertyName === "value" && ro(hr)) {
    var t = [];
    Wc(t, hr, e, ws(e)), jc(_m, t);
  }
}
function Lm(e, t, n) {
  e === "focusin"
    ? ($a(), (rr = t), (hr = n), rr.attachEvent("onpropertychange", Qc))
    : e === "focusout" && $a();
}
function bm(e) {
  if (e === "selectionchange" || e === "keyup" || e === "keydown")
    return ro(hr);
}
function Om(e, t) {
  if (e === "click") return ro(t);
}
function Um(e, t) {
  if (e === "input" || e === "change") return ro(t);
}
function zm(e, t) {
  return (e === t && (e !== 0 || 1 / e === 1 / t)) || (e !== e && t !== t);
}
var Be = typeof Object.is == "function" ? Object.is : zm;
function gr(e, t) {
  if (Be(e, t)) return !0;
  if (typeof e != "object" || e === null || typeof t != "object" || t === null)
    return !1;
  var n = Object.keys(e),
    r = Object.keys(t);
  if (n.length !== r.length) return !1;
  for (r = 0; r < n.length; r++) {
    var l = n[r];
    if (!ui.call(t, l) || !Be(e[l], t[l])) return !1;
  }
  return !0;
}
function Ba(e) {
  for (; e && e.firstChild; ) e = e.firstChild;
  return e;
}
function Ha(e, t) {
  var n = Ba(e);
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
    n = Ba(n);
  }
}
function Yc(e, t) {
  return e && t
    ? e === t
      ? !0
      : e && e.nodeType === 3
      ? !1
      : t && t.nodeType === 3
      ? Yc(e, t.parentNode)
      : "contains" in e
      ? e.contains(t)
      : e.compareDocumentPosition
      ? !!(e.compareDocumentPosition(t) & 16)
      : !1
    : !1;
}
function Jc() {
  for (var e = window, t = jl(); t instanceof e.HTMLIFrameElement; ) {
    try {
      var n = typeof t.contentWindow.location.href == "string";
    } catch {
      n = !1;
    }
    if (n) e = t.contentWindow;
    else break;
    t = jl(e.document);
  }
  return t;
}
function Ps(e) {
  var t = e && e.nodeName && e.nodeName.toLowerCase();
  return (
    t &&
    ((t === "input" &&
      (e.type === "text" ||
        e.type === "search" ||
        e.type === "tel" ||
        e.type === "url" ||
        e.type === "password")) ||
      t === "textarea" ||
      e.contentEditable === "true")
  );
}
function Mm(e) {
  var t = Jc(),
    n = e.focusedElem,
    r = e.selectionRange;
  if (
    t !== n &&
    n &&
    n.ownerDocument &&
    Yc(n.ownerDocument.documentElement, n)
  ) {
    if (r !== null && Ps(n)) {
      if (
        ((t = r.start),
        (e = r.end),
        e === void 0 && (e = t),
        "selectionStart" in n)
      )
        (n.selectionStart = t), (n.selectionEnd = Math.min(e, n.value.length));
      else if (
        ((e = ((t = n.ownerDocument || document) && t.defaultView) || window),
        e.getSelection)
      ) {
        e = e.getSelection();
        var l = n.textContent.length,
          o = Math.min(r.start, l);
        (r = r.end === void 0 ? o : Math.min(r.end, l)),
          !e.extend && o > r && ((l = r), (r = o), (o = l)),
          (l = Ha(n, o));
        var i = Ha(n, r);
        l &&
          i &&
          (e.rangeCount !== 1 ||
            e.anchorNode !== l.node ||
            e.anchorOffset !== l.offset ||
            e.focusNode !== i.node ||
            e.focusOffset !== i.offset) &&
          ((t = t.createRange()),
          t.setStart(l.node, l.offset),
          e.removeAllRanges(),
          o > r
            ? (e.addRange(t), e.extend(i.node, i.offset))
            : (t.setEnd(i.node, i.offset), e.addRange(t)));
      }
    }
    for (t = [], e = n; (e = e.parentNode); )
      e.nodeType === 1 &&
        t.push({ element: e, left: e.scrollLeft, top: e.scrollTop });
    for (typeof n.focus == "function" && n.focus(), n = 0; n < t.length; n++)
      (e = t[n]),
        (e.element.scrollLeft = e.left),
        (e.element.scrollTop = e.top);
  }
}
var Fm = ct && "documentMode" in document && 11 >= document.documentMode,
  cn = null,
  Pi = null,
  lr = null,
  _i = !1;
function Va(e, t, n) {
  var r = n.window === n ? n.document : n.nodeType === 9 ? n : n.ownerDocument;
  _i ||
    cn == null ||
    cn !== jl(r) ||
    ((r = cn),
    "selectionStart" in r && Ps(r)
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
    (lr && gr(lr, r)) ||
      ((lr = r),
      (r = Ol(Pi, "onSelect")),
      0 < r.length &&
        ((t = new Cs("onSelect", "select", null, t, n)),
        e.push({ event: t, listeners: r }),
        (t.target = cn))));
}
function qr(e, t) {
  var n = {};
  return (
    (n[e.toLowerCase()] = t.toLowerCase()),
    (n["Webkit" + e] = "webkit" + t),
    (n["Moz" + e] = "moz" + t),
    n
  );
}
var dn = {
    animationend: qr("Animation", "AnimationEnd"),
    animationiteration: qr("Animation", "AnimationIteration"),
    animationstart: qr("Animation", "AnimationStart"),
    transitionend: qr("Transition", "TransitionEnd"),
  },
  $o = {},
  qc = {};
ct &&
  ((qc = document.createElement("div").style),
  "AnimationEvent" in window ||
    (delete dn.animationend.animation,
    delete dn.animationiteration.animation,
    delete dn.animationstart.animation),
  "TransitionEvent" in window || delete dn.transitionend.transition);
function lo(e) {
  if ($o[e]) return $o[e];
  if (!dn[e]) return e;
  var t = dn[e],
    n;
  for (n in t) if (t.hasOwnProperty(n) && n in qc) return ($o[e] = t[n]);
  return e;
}
var Gc = lo("animationend"),
  Xc = lo("animationiteration"),
  Zc = lo("animationstart"),
  ed = lo("transitionend"),
  td = new Map(),
  Wa =
    "abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(
      " "
    );
function Ot(e, t) {
  td.set(e, t), nn(t, [e]);
}
for (var Bo = 0; Bo < Wa.length; Bo++) {
  var Ho = Wa[Bo],
    Am = Ho.toLowerCase(),
    Im = Ho[0].toUpperCase() + Ho.slice(1);
  Ot(Am, "on" + Im);
}
Ot(Gc, "onAnimationEnd");
Ot(Xc, "onAnimationIteration");
Ot(Zc, "onAnimationStart");
Ot("dblclick", "onDoubleClick");
Ot("focusin", "onFocus");
Ot("focusout", "onBlur");
Ot(ed, "onTransitionEnd");
Cn("onMouseEnter", ["mouseout", "mouseover"]);
Cn("onMouseLeave", ["mouseout", "mouseover"]);
Cn("onPointerEnter", ["pointerout", "pointerover"]);
Cn("onPointerLeave", ["pointerout", "pointerover"]);
nn(
  "onChange",
  "change click focusin focusout input keydown keyup selectionchange".split(" ")
);
nn(
  "onSelect",
  "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(
    " "
  )
);
nn("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]);
nn(
  "onCompositionEnd",
  "compositionend focusout keydown keypress keyup mousedown".split(" ")
);
nn(
  "onCompositionStart",
  "compositionstart focusout keydown keypress keyup mousedown".split(" ")
);
nn(
  "onCompositionUpdate",
  "compositionupdate focusout keydown keypress keyup mousedown".split(" ")
);
var Zn =
    "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(
      " "
    ),
  Dm = new Set("cancel close invalid load scroll toggle".split(" ").concat(Zn));
function Ka(e, t, n) {
  var r = e.type || "unknown-event";
  (e.currentTarget = n), Ap(r, t, void 0, e), (e.currentTarget = null);
}
function nd(e, t) {
  t = (t & 4) !== 0;
  for (var n = 0; n < e.length; n++) {
    var r = e[n],
      l = r.event;
    r = r.listeners;
    e: {
      var o = void 0;
      if (t)
        for (var i = r.length - 1; 0 <= i; i--) {
          var a = r[i],
            s = a.instance,
            c = a.currentTarget;
          if (((a = a.listener), s !== o && l.isPropagationStopped())) break e;
          Ka(l, a, c), (o = s);
        }
      else
        for (i = 0; i < r.length; i++) {
          if (
            ((a = r[i]),
            (s = a.instance),
            (c = a.currentTarget),
            (a = a.listener),
            s !== o && l.isPropagationStopped())
          )
            break e;
          Ka(l, a, c), (o = s);
        }
    }
  }
  if (Pl) throw ((e = Ni), (Pl = !1), (Ni = null), e);
}
function D(e, t) {
  var n = t[Ui];
  n === void 0 && (n = t[Ui] = new Set());
  var r = e + "__bubble";
  n.has(r) || (rd(t, e, 2, !1), n.add(r));
}
function Vo(e, t, n) {
  var r = 0;
  t && (r |= 4), rd(n, e, r, t);
}
var Gr = "_reactListening" + Math.random().toString(36).slice(2);
function yr(e) {
  if (!e[Gr]) {
    (e[Gr] = !0),
      cc.forEach(function (n) {
        n !== "selectionchange" && (Dm.has(n) || Vo(n, !1, e), Vo(n, !0, e));
      });
    var t = e.nodeType === 9 ? e : e.ownerDocument;
    t === null || t[Gr] || ((t[Gr] = !0), Vo("selectionchange", !1, t));
  }
}
function rd(e, t, n, r) {
  switch (Dc(t)) {
    case 1:
      var l = em;
      break;
    case 4:
      l = tm;
      break;
    default:
      l = Es;
  }
  (n = l.bind(null, t, n, e)),
    (l = void 0),
    !Ei ||
      (t !== "touchstart" && t !== "touchmove" && t !== "wheel") ||
      (l = !0),
    r
      ? l !== void 0
        ? e.addEventListener(t, n, { capture: !0, passive: l })
        : e.addEventListener(t, n, !0)
      : l !== void 0
      ? e.addEventListener(t, n, { passive: l })
      : e.addEventListener(t, n, !1);
}
function Wo(e, t, n, r, l) {
  var o = r;
  if (!(t & 1) && !(t & 2) && r !== null)
    e: for (;;) {
      if (r === null) return;
      var i = r.tag;
      if (i === 3 || i === 4) {
        var a = r.stateNode.containerInfo;
        if (a === l || (a.nodeType === 8 && a.parentNode === l)) break;
        if (i === 4)
          for (i = r.return; i !== null; ) {
            var s = i.tag;
            if (
              (s === 3 || s === 4) &&
              ((s = i.stateNode.containerInfo),
              s === l || (s.nodeType === 8 && s.parentNode === l))
            )
              return;
            i = i.return;
          }
        for (; a !== null; ) {
          if (((i = Bt(a)), i === null)) return;
          if (((s = i.tag), s === 5 || s === 6)) {
            r = o = i;
            continue e;
          }
          a = a.parentNode;
        }
      }
      r = r.return;
    }
  jc(function () {
    var c = o,
      p = ws(n),
      m = [];
    e: {
      var y = td.get(e);
      if (y !== void 0) {
        var x = Cs,
          w = e;
        switch (e) {
          case "keypress":
            if (dl(n) === 0) break e;
          case "keydown":
          case "keyup":
            x = gm;
            break;
          case "focusin":
            (w = "focus"), (x = Ao);
            break;
          case "focusout":
            (w = "blur"), (x = Ao);
            break;
          case "beforeblur":
          case "afterblur":
            x = Ao;
            break;
          case "click":
            if (n.button === 2) break e;
          case "auxclick":
          case "dblclick":
          case "mousedown":
          case "mousemove":
          case "mouseup":
          case "mouseout":
          case "mouseover":
          case "contextmenu":
            x = Ua;
            break;
          case "drag":
          case "dragend":
          case "dragenter":
          case "dragexit":
          case "dragleave":
          case "dragover":
          case "dragstart":
          case "drop":
            x = lm;
            break;
          case "touchcancel":
          case "touchend":
          case "touchmove":
          case "touchstart":
            x = wm;
            break;
          case Gc:
          case Xc:
          case Zc:
            x = sm;
            break;
          case ed:
            x = km;
            break;
          case "scroll":
            x = nm;
            break;
          case "wheel":
            x = Em;
            break;
          case "copy":
          case "cut":
          case "paste":
            x = um;
            break;
          case "gotpointercapture":
          case "lostpointercapture":
          case "pointercancel":
          case "pointerdown":
          case "pointermove":
          case "pointerout":
          case "pointerover":
          case "pointerup":
            x = Ma;
        }
        var v = (t & 4) !== 0,
          h = !v && e === "scroll",
          f = v ? (y !== null ? y + "Capture" : null) : y;
        v = [];
        for (var d = c, g; d !== null; ) {
          g = d;
          var E = g.stateNode;
          if (
            (g.tag === 5 &&
              E !== null &&
              ((g = E),
              f !== null && ((E = dr(d, f)), E != null && v.push(vr(d, E, g)))),
            h)
          )
            break;
          d = d.return;
        }
        0 < v.length &&
          ((y = new x(y, w, null, n, p)), m.push({ event: y, listeners: v }));
      }
    }
    if (!(t & 7)) {
      e: {
        if (
          ((y = e === "mouseover" || e === "pointerover"),
          (x = e === "mouseout" || e === "pointerout"),
          y &&
            n !== ki &&
            (w = n.relatedTarget || n.fromElement) &&
            (Bt(w) || w[dt]))
        )
          break e;
        if (
          (x || y) &&
          ((y =
            p.window === p
              ? p
              : (y = p.ownerDocument)
              ? y.defaultView || y.parentWindow
              : window),
          x
            ? ((w = n.relatedTarget || n.toElement),
              (x = c),
              (w = w ? Bt(w) : null),
              w !== null &&
                ((h = rn(w)), w !== h || (w.tag !== 5 && w.tag !== 6)) &&
                (w = null))
            : ((x = null), (w = c)),
          x !== w)
        ) {
          if (
            ((v = Ua),
            (E = "onMouseLeave"),
            (f = "onMouseEnter"),
            (d = "mouse"),
            (e === "pointerout" || e === "pointerover") &&
              ((v = Ma),
              (E = "onPointerLeave"),
              (f = "onPointerEnter"),
              (d = "pointer")),
            (h = x == null ? y : fn(x)),
            (g = w == null ? y : fn(w)),
            (y = new v(E, d + "leave", x, n, p)),
            (y.target = h),
            (y.relatedTarget = g),
            (E = null),
            Bt(p) === c &&
              ((v = new v(f, d + "enter", w, n, p)),
              (v.target = g),
              (v.relatedTarget = h),
              (E = v)),
            (h = E),
            x && w)
          )
            t: {
              for (v = x, f = w, d = 0, g = v; g; g = on(g)) d++;
              for (g = 0, E = f; E; E = on(E)) g++;
              for (; 0 < d - g; ) (v = on(v)), d--;
              for (; 0 < g - d; ) (f = on(f)), g--;
              for (; d--; ) {
                if (v === f || (f !== null && v === f.alternate)) break t;
                (v = on(v)), (f = on(f));
              }
              v = null;
            }
          else v = null;
          x !== null && Qa(m, y, x, v, !1),
            w !== null && h !== null && Qa(m, h, w, v, !0);
        }
      }
      e: {
        if (
          ((y = c ? fn(c) : window),
          (x = y.nodeName && y.nodeName.toLowerCase()),
          x === "select" || (x === "input" && y.type === "file"))
        )
          var N = Tm;
        else if (Ia(y))
          if (Kc) N = Um;
          else {
            N = bm;
            var j = Lm;
          }
        else
          (x = y.nodeName) &&
            x.toLowerCase() === "input" &&
            (y.type === "checkbox" || y.type === "radio") &&
            (N = Om);
        if (N && (N = N(e, c))) {
          Wc(m, N, n, p);
          break e;
        }
        j && j(e, y, c),
          e === "focusout" &&
            (j = y._wrapperState) &&
            j.controlled &&
            y.type === "number" &&
            gi(y, "number", y.value);
      }
      switch (((j = c ? fn(c) : window), e)) {
        case "focusin":
          (Ia(j) || j.contentEditable === "true") &&
            ((cn = j), (Pi = c), (lr = null));
          break;
        case "focusout":
          lr = Pi = cn = null;
          break;
        case "mousedown":
          _i = !0;
          break;
        case "contextmenu":
        case "mouseup":
        case "dragend":
          (_i = !1), Va(m, n, p);
          break;
        case "selectionchange":
          if (Fm) break;
        case "keydown":
        case "keyup":
          Va(m, n, p);
      }
      var R;
      if (Rs)
        e: {
          switch (e) {
            case "compositionstart":
              var T = "onCompositionStart";
              break e;
            case "compositionend":
              T = "onCompositionEnd";
              break e;
            case "compositionupdate":
              T = "onCompositionUpdate";
              break e;
          }
          T = void 0;
        }
      else
        un
          ? Hc(e, n) && (T = "onCompositionEnd")
          : e === "keydown" && n.keyCode === 229 && (T = "onCompositionStart");
      T &&
        (Bc &&
          n.locale !== "ko" &&
          (un || T !== "onCompositionStart"
            ? T === "onCompositionEnd" && un && (R = $c())
            : ((kt = p),
              (Ns = "value" in kt ? kt.value : kt.textContent),
              (un = !0))),
        (j = Ol(c, T)),
        0 < j.length &&
          ((T = new za(T, e, null, n, p)),
          m.push({ event: T, listeners: j }),
          R ? (T.data = R) : ((R = Vc(n)), R !== null && (T.data = R)))),
        (R = Cm ? jm(e, n) : Rm(e, n)) &&
          ((c = Ol(c, "onBeforeInput")),
          0 < c.length &&
            ((p = new za("onBeforeInput", "beforeinput", null, n, p)),
            m.push({ event: p, listeners: c }),
            (p.data = R)));
    }
    nd(m, t);
  });
}
function vr(e, t, n) {
  return { instance: e, listener: t, currentTarget: n };
}
function Ol(e, t) {
  for (var n = t + "Capture", r = []; e !== null; ) {
    var l = e,
      o = l.stateNode;
    l.tag === 5 &&
      o !== null &&
      ((l = o),
      (o = dr(e, n)),
      o != null && r.unshift(vr(e, o, l)),
      (o = dr(e, t)),
      o != null && r.push(vr(e, o, l))),
      (e = e.return);
  }
  return r;
}
function on(e) {
  if (e === null) return null;
  do e = e.return;
  while (e && e.tag !== 5);
  return e || null;
}
function Qa(e, t, n, r, l) {
  for (var o = t._reactName, i = []; n !== null && n !== r; ) {
    var a = n,
      s = a.alternate,
      c = a.stateNode;
    if (s !== null && s === r) break;
    a.tag === 5 &&
      c !== null &&
      ((a = c),
      l
        ? ((s = dr(n, o)), s != null && i.unshift(vr(n, s, a)))
        : l || ((s = dr(n, o)), s != null && i.push(vr(n, s, a)))),
      (n = n.return);
  }
  i.length !== 0 && e.push({ event: t, listeners: i });
}
var $m = /\r\n?/g,
  Bm = /\u0000|\uFFFD/g;
function Ya(e) {
  return (typeof e == "string" ? e : "" + e)
    .replace(
      $m,
      `
`
    )
    .replace(Bm, "");
}
function Xr(e, t, n) {
  if (((t = Ya(t)), Ya(e) !== t && n)) throw Error(C(425));
}
function Ul() {}
var Ti = null,
  Li = null;
function bi(e, t) {
  return (
    e === "textarea" ||
    e === "noscript" ||
    typeof t.children == "string" ||
    typeof t.children == "number" ||
    (typeof t.dangerouslySetInnerHTML == "object" &&
      t.dangerouslySetInnerHTML !== null &&
      t.dangerouslySetInnerHTML.__html != null)
  );
}
var Oi = typeof setTimeout == "function" ? setTimeout : void 0,
  Hm = typeof clearTimeout == "function" ? clearTimeout : void 0,
  Ja = typeof Promise == "function" ? Promise : void 0,
  Vm =
    typeof queueMicrotask == "function"
      ? queueMicrotask
      : typeof Ja < "u"
      ? function (e) {
          return Ja.resolve(null).then(e).catch(Wm);
        }
      : Oi;
function Wm(e) {
  setTimeout(function () {
    throw e;
  });
}
function Ko(e, t) {
  var n = t,
    r = 0;
  do {
    var l = n.nextSibling;
    if ((e.removeChild(n), l && l.nodeType === 8))
      if (((n = l.data), n === "/$")) {
        if (r === 0) {
          e.removeChild(l), mr(t);
          return;
        }
        r--;
      } else (n !== "$" && n !== "$?" && n !== "$!") || r++;
    n = l;
  } while (n);
  mr(t);
}
function jt(e) {
  for (; e != null; e = e.nextSibling) {
    var t = e.nodeType;
    if (t === 1 || t === 3) break;
    if (t === 8) {
      if (((t = e.data), t === "$" || t === "$!" || t === "$?")) break;
      if (t === "/$") return null;
    }
  }
  return e;
}
function qa(e) {
  e = e.previousSibling;
  for (var t = 0; e; ) {
    if (e.nodeType === 8) {
      var n = e.data;
      if (n === "$" || n === "$!" || n === "$?") {
        if (t === 0) return e;
        t--;
      } else n === "/$" && t++;
    }
    e = e.previousSibling;
  }
  return null;
}
var Un = Math.random().toString(36).slice(2),
  Je = "__reactFiber$" + Un,
  wr = "__reactProps$" + Un,
  dt = "__reactContainer$" + Un,
  Ui = "__reactEvents$" + Un,
  Km = "__reactListeners$" + Un,
  Qm = "__reactHandles$" + Un;
function Bt(e) {
  var t = e[Je];
  if (t) return t;
  for (var n = e.parentNode; n; ) {
    if ((t = n[dt] || n[Je])) {
      if (
        ((n = t.alternate),
        t.child !== null || (n !== null && n.child !== null))
      )
        for (e = qa(e); e !== null; ) {
          if ((n = e[Je])) return n;
          e = qa(e);
        }
      return t;
    }
    (e = n), (n = e.parentNode);
  }
  return null;
}
function br(e) {
  return (
    (e = e[Je] || e[dt]),
    !e || (e.tag !== 5 && e.tag !== 6 && e.tag !== 13 && e.tag !== 3) ? null : e
  );
}
function fn(e) {
  if (e.tag === 5 || e.tag === 6) return e.stateNode;
  throw Error(C(33));
}
function oo(e) {
  return e[wr] || null;
}
var zi = [],
  pn = -1;
function Ut(e) {
  return { current: e };
}
function $(e) {
  0 > pn || ((e.current = zi[pn]), (zi[pn] = null), pn--);
}
function I(e, t) {
  pn++, (zi[pn] = e.current), (e.current = t);
}
var bt = {},
  de = Ut(bt),
  we = Ut(!1),
  Jt = bt;
function jn(e, t) {
  var n = e.type.contextTypes;
  if (!n) return bt;
  var r = e.stateNode;
  if (r && r.__reactInternalMemoizedUnmaskedChildContext === t)
    return r.__reactInternalMemoizedMaskedChildContext;
  var l = {},
    o;
  for (o in n) l[o] = t[o];
  return (
    r &&
      ((e = e.stateNode),
      (e.__reactInternalMemoizedUnmaskedChildContext = t),
      (e.__reactInternalMemoizedMaskedChildContext = l)),
    l
  );
}
function xe(e) {
  return (e = e.childContextTypes), e != null;
}
function zl() {
  $(we), $(de);
}
function Ga(e, t, n) {
  if (de.current !== bt) throw Error(C(168));
  I(de, t), I(we, n);
}
function ld(e, t, n) {
  var r = e.stateNode;
  if (((t = t.childContextTypes), typeof r.getChildContext != "function"))
    return n;
  r = r.getChildContext();
  for (var l in r) if (!(l in t)) throw Error(C(108, Lp(e) || "Unknown", l));
  return Q({}, n, r);
}
function Ml(e) {
  return (
    (e =
      ((e = e.stateNode) && e.__reactInternalMemoizedMergedChildContext) || bt),
    (Jt = de.current),
    I(de, e),
    I(we, we.current),
    !0
  );
}
function Xa(e, t, n) {
  var r = e.stateNode;
  if (!r) throw Error(C(169));
  n
    ? ((e = ld(e, t, Jt)),
      (r.__reactInternalMemoizedMergedChildContext = e),
      $(we),
      $(de),
      I(de, e))
    : $(we),
    I(we, n);
}
var lt = null,
  io = !1,
  Qo = !1;
function od(e) {
  lt === null ? (lt = [e]) : lt.push(e);
}
function Ym(e) {
  (io = !0), od(e);
}
function zt() {
  if (!Qo && lt !== null) {
    Qo = !0;
    var e = 0,
      t = A;
    try {
      var n = lt;
      for (A = 1; e < n.length; e++) {
        var r = n[e];
        do r = r(!0);
        while (r !== null);
      }
      (lt = null), (io = !1);
    } catch (l) {
      throw (lt !== null && (lt = lt.slice(e + 1)), Tc(xs, zt), l);
    } finally {
      (A = t), (Qo = !1);
    }
  }
  return null;
}
var mn = [],
  hn = 0,
  Fl = null,
  Al = 0,
  Te = [],
  Le = 0,
  qt = null,
  ot = 1,
  it = "";
function Dt(e, t) {
  (mn[hn++] = Al), (mn[hn++] = Fl), (Fl = e), (Al = t);
}
function id(e, t, n) {
  (Te[Le++] = ot), (Te[Le++] = it), (Te[Le++] = qt), (qt = e);
  var r = ot;
  e = it;
  var l = 32 - De(r) - 1;
  (r &= ~(1 << l)), (n += 1);
  var o = 32 - De(t) + l;
  if (30 < o) {
    var i = l - (l % 5);
    (o = (r & ((1 << i) - 1)).toString(32)),
      (r >>= i),
      (l -= i),
      (ot = (1 << (32 - De(t) + l)) | (n << l) | r),
      (it = o + e);
  } else (ot = (1 << o) | (n << l) | r), (it = e);
}
function _s(e) {
  e.return !== null && (Dt(e, 1), id(e, 1, 0));
}
function Ts(e) {
  for (; e === Fl; )
    (Fl = mn[--hn]), (mn[hn] = null), (Al = mn[--hn]), (mn[hn] = null);
  for (; e === qt; )
    (qt = Te[--Le]),
      (Te[Le] = null),
      (it = Te[--Le]),
      (Te[Le] = null),
      (ot = Te[--Le]),
      (Te[Le] = null);
}
var je = null,
  Ce = null,
  B = !1,
  Ie = null;
function sd(e, t) {
  var n = be(5, null, null, 0);
  (n.elementType = "DELETED"),
    (n.stateNode = t),
    (n.return = e),
    (t = e.deletions),
    t === null ? ((e.deletions = [n]), (e.flags |= 16)) : t.push(n);
}
function Za(e, t) {
  switch (e.tag) {
    case 5:
      var n = e.type;
      return (
        (t =
          t.nodeType !== 1 || n.toLowerCase() !== t.nodeName.toLowerCase()
            ? null
            : t),
        t !== null
          ? ((e.stateNode = t), (je = e), (Ce = jt(t.firstChild)), !0)
          : !1
      );
    case 6:
      return (
        (t = e.pendingProps === "" || t.nodeType !== 3 ? null : t),
        t !== null ? ((e.stateNode = t), (je = e), (Ce = null), !0) : !1
      );
    case 13:
      return (
        (t = t.nodeType !== 8 ? null : t),
        t !== null
          ? ((n = qt !== null ? { id: ot, overflow: it } : null),
            (e.memoizedState = {
              dehydrated: t,
              treeContext: n,
              retryLane: 1073741824,
            }),
            (n = be(18, null, null, 0)),
            (n.stateNode = t),
            (n.return = e),
            (e.child = n),
            (je = e),
            (Ce = null),
            !0)
          : !1
      );
    default:
      return !1;
  }
}
function Mi(e) {
  return (e.mode & 1) !== 0 && (e.flags & 128) === 0;
}
function Fi(e) {
  if (B) {
    var t = Ce;
    if (t) {
      var n = t;
      if (!Za(e, t)) {
        if (Mi(e)) throw Error(C(418));
        t = jt(n.nextSibling);
        var r = je;
        t && Za(e, t)
          ? sd(r, n)
          : ((e.flags = (e.flags & -4097) | 2), (B = !1), (je = e));
      }
    } else {
      if (Mi(e)) throw Error(C(418));
      (e.flags = (e.flags & -4097) | 2), (B = !1), (je = e);
    }
  }
}
function eu(e) {
  for (e = e.return; e !== null && e.tag !== 5 && e.tag !== 3 && e.tag !== 13; )
    e = e.return;
  je = e;
}
function Zr(e) {
  if (e !== je) return !1;
  if (!B) return eu(e), (B = !0), !1;
  var t;
  if (
    ((t = e.tag !== 3) &&
      !(t = e.tag !== 5) &&
      ((t = e.type),
      (t = t !== "head" && t !== "body" && !bi(e.type, e.memoizedProps))),
    t && (t = Ce))
  ) {
    if (Mi(e)) throw (ad(), Error(C(418)));
    for (; t; ) sd(e, t), (t = jt(t.nextSibling));
  }
  if ((eu(e), e.tag === 13)) {
    if (((e = e.memoizedState), (e = e !== null ? e.dehydrated : null), !e))
      throw Error(C(317));
    e: {
      for (e = e.nextSibling, t = 0; e; ) {
        if (e.nodeType === 8) {
          var n = e.data;
          if (n === "/$") {
            if (t === 0) {
              Ce = jt(e.nextSibling);
              break e;
            }
            t--;
          } else (n !== "$" && n !== "$!" && n !== "$?") || t++;
        }
        e = e.nextSibling;
      }
      Ce = null;
    }
  } else Ce = je ? jt(e.stateNode.nextSibling) : null;
  return !0;
}
function ad() {
  for (var e = Ce; e; ) e = jt(e.nextSibling);
}
function Rn() {
  (Ce = je = null), (B = !1);
}
function Ls(e) {
  Ie === null ? (Ie = [e]) : Ie.push(e);
}
var Jm = ht.ReactCurrentBatchConfig;
function Wn(e, t, n) {
  if (
    ((e = n.ref), e !== null && typeof e != "function" && typeof e != "object")
  ) {
    if (n._owner) {
      if (((n = n._owner), n)) {
        if (n.tag !== 1) throw Error(C(309));
        var r = n.stateNode;
      }
      if (!r) throw Error(C(147, e));
      var l = r,
        o = "" + e;
      return t !== null &&
        t.ref !== null &&
        typeof t.ref == "function" &&
        t.ref._stringRef === o
        ? t.ref
        : ((t = function (i) {
            var a = l.refs;
            i === null ? delete a[o] : (a[o] = i);
          }),
          (t._stringRef = o),
          t);
    }
    if (typeof e != "string") throw Error(C(284));
    if (!n._owner) throw Error(C(290, e));
  }
  return e;
}
function el(e, t) {
  throw (
    ((e = Object.prototype.toString.call(t)),
    Error(
      C(
        31,
        e === "[object Object]"
          ? "object with keys {" + Object.keys(t).join(", ") + "}"
          : e
      )
    ))
  );
}
function tu(e) {
  var t = e._init;
  return t(e._payload);
}
function ud(e) {
  function t(f, d) {
    if (e) {
      var g = f.deletions;
      g === null ? ((f.deletions = [d]), (f.flags |= 16)) : g.push(d);
    }
  }
  function n(f, d) {
    if (!e) return null;
    for (; d !== null; ) t(f, d), (d = d.sibling);
    return null;
  }
  function r(f, d) {
    for (f = new Map(); d !== null; )
      d.key !== null ? f.set(d.key, d) : f.set(d.index, d), (d = d.sibling);
    return f;
  }
  function l(f, d) {
    return (f = Tt(f, d)), (f.index = 0), (f.sibling = null), f;
  }
  function o(f, d, g) {
    return (
      (f.index = g),
      e
        ? ((g = f.alternate),
          g !== null
            ? ((g = g.index), g < d ? ((f.flags |= 2), d) : g)
            : ((f.flags |= 2), d))
        : ((f.flags |= 1048576), d)
    );
  }
  function i(f) {
    return e && f.alternate === null && (f.flags |= 2), f;
  }
  function a(f, d, g, E) {
    return d === null || d.tag !== 6
      ? ((d = ei(g, f.mode, E)), (d.return = f), d)
      : ((d = l(d, g)), (d.return = f), d);
  }
  function s(f, d, g, E) {
    var N = g.type;
    return N === an
      ? p(f, d, g.props.children, E, g.key)
      : d !== null &&
        (d.elementType === N ||
          (typeof N == "object" &&
            N !== null &&
            N.$$typeof === yt &&
            tu(N) === d.type))
      ? ((E = l(d, g.props)), (E.ref = Wn(f, d, g)), (E.return = f), E)
      : ((E = vl(g.type, g.key, g.props, null, f.mode, E)),
        (E.ref = Wn(f, d, g)),
        (E.return = f),
        E);
  }
  function c(f, d, g, E) {
    return d === null ||
      d.tag !== 4 ||
      d.stateNode.containerInfo !== g.containerInfo ||
      d.stateNode.implementation !== g.implementation
      ? ((d = ti(g, f.mode, E)), (d.return = f), d)
      : ((d = l(d, g.children || [])), (d.return = f), d);
  }
  function p(f, d, g, E, N) {
    return d === null || d.tag !== 7
      ? ((d = Qt(g, f.mode, E, N)), (d.return = f), d)
      : ((d = l(d, g)), (d.return = f), d);
  }
  function m(f, d, g) {
    if ((typeof d == "string" && d !== "") || typeof d == "number")
      return (d = ei("" + d, f.mode, g)), (d.return = f), d;
    if (typeof d == "object" && d !== null) {
      switch (d.$$typeof) {
        case Hr:
          return (
            (g = vl(d.type, d.key, d.props, null, f.mode, g)),
            (g.ref = Wn(f, null, d)),
            (g.return = f),
            g
          );
        case sn:
          return (d = ti(d, f.mode, g)), (d.return = f), d;
        case yt:
          var E = d._init;
          return m(f, E(d._payload), g);
      }
      if (Gn(d) || Dn(d))
        return (d = Qt(d, f.mode, g, null)), (d.return = f), d;
      el(f, d);
    }
    return null;
  }
  function y(f, d, g, E) {
    var N = d !== null ? d.key : null;
    if ((typeof g == "string" && g !== "") || typeof g == "number")
      return N !== null ? null : a(f, d, "" + g, E);
    if (typeof g == "object" && g !== null) {
      switch (g.$$typeof) {
        case Hr:
          return g.key === N ? s(f, d, g, E) : null;
        case sn:
          return g.key === N ? c(f, d, g, E) : null;
        case yt:
          return (N = g._init), y(f, d, N(g._payload), E);
      }
      if (Gn(g) || Dn(g)) return N !== null ? null : p(f, d, g, E, null);
      el(f, g);
    }
    return null;
  }
  function x(f, d, g, E, N) {
    if ((typeof E == "string" && E !== "") || typeof E == "number")
      return (f = f.get(g) || null), a(d, f, "" + E, N);
    if (typeof E == "object" && E !== null) {
      switch (E.$$typeof) {
        case Hr:
          return (f = f.get(E.key === null ? g : E.key) || null), s(d, f, E, N);
        case sn:
          return (f = f.get(E.key === null ? g : E.key) || null), c(d, f, E, N);
        case yt:
          var j = E._init;
          return x(f, d, g, j(E._payload), N);
      }
      if (Gn(E) || Dn(E)) return (f = f.get(g) || null), p(d, f, E, N, null);
      el(d, E);
    }
    return null;
  }
  function w(f, d, g, E) {
    for (
      var N = null, j = null, R = d, T = (d = 0), M = null;
      R !== null && T < g.length;
      T++
    ) {
      R.index > T ? ((M = R), (R = null)) : (M = R.sibling);
      var L = y(f, R, g[T], E);
      if (L === null) {
        R === null && (R = M);
        break;
      }
      e && R && L.alternate === null && t(f, R),
        (d = o(L, d, T)),
        j === null ? (N = L) : (j.sibling = L),
        (j = L),
        (R = M);
    }
    if (T === g.length) return n(f, R), B && Dt(f, T), N;
    if (R === null) {
      for (; T < g.length; T++)
        (R = m(f, g[T], E)),
          R !== null &&
            ((d = o(R, d, T)), j === null ? (N = R) : (j.sibling = R), (j = R));
      return B && Dt(f, T), N;
    }
    for (R = r(f, R); T < g.length; T++)
      (M = x(R, f, T, g[T], E)),
        M !== null &&
          (e && M.alternate !== null && R.delete(M.key === null ? T : M.key),
          (d = o(M, d, T)),
          j === null ? (N = M) : (j.sibling = M),
          (j = M));
    return (
      e &&
        R.forEach(function (ge) {
          return t(f, ge);
        }),
      B && Dt(f, T),
      N
    );
  }
  function v(f, d, g, E) {
    var N = Dn(g);
    if (typeof N != "function") throw Error(C(150));
    if (((g = N.call(g)), g == null)) throw Error(C(151));
    for (
      var j = (N = null), R = d, T = (d = 0), M = null, L = g.next();
      R !== null && !L.done;
      T++, L = g.next()
    ) {
      R.index > T ? ((M = R), (R = null)) : (M = R.sibling);
      var ge = y(f, R, L.value, E);
      if (ge === null) {
        R === null && (R = M);
        break;
      }
      e && R && ge.alternate === null && t(f, R),
        (d = o(ge, d, T)),
        j === null ? (N = ge) : (j.sibling = ge),
        (j = ge),
        (R = M);
    }
    if (L.done) return n(f, R), B && Dt(f, T), N;
    if (R === null) {
      for (; !L.done; T++, L = g.next())
        (L = m(f, L.value, E)),
          L !== null &&
            ((d = o(L, d, T)), j === null ? (N = L) : (j.sibling = L), (j = L));
      return B && Dt(f, T), N;
    }
    for (R = r(f, R); !L.done; T++, L = g.next())
      (L = x(R, f, T, L.value, E)),
        L !== null &&
          (e && L.alternate !== null && R.delete(L.key === null ? T : L.key),
          (d = o(L, d, T)),
          j === null ? (N = L) : (j.sibling = L),
          (j = L));
    return (
      e &&
        R.forEach(function (An) {
          return t(f, An);
        }),
      B && Dt(f, T),
      N
    );
  }
  function h(f, d, g, E) {
    if (
      (typeof g == "object" &&
        g !== null &&
        g.type === an &&
        g.key === null &&
        (g = g.props.children),
      typeof g == "object" && g !== null)
    ) {
      switch (g.$$typeof) {
        case Hr:
          e: {
            for (var N = g.key, j = d; j !== null; ) {
              if (j.key === N) {
                if (((N = g.type), N === an)) {
                  if (j.tag === 7) {
                    n(f, j.sibling),
                      (d = l(j, g.props.children)),
                      (d.return = f),
                      (f = d);
                    break e;
                  }
                } else if (
                  j.elementType === N ||
                  (typeof N == "object" &&
                    N !== null &&
                    N.$$typeof === yt &&
                    tu(N) === j.type)
                ) {
                  n(f, j.sibling),
                    (d = l(j, g.props)),
                    (d.ref = Wn(f, j, g)),
                    (d.return = f),
                    (f = d);
                  break e;
                }
                n(f, j);
                break;
              } else t(f, j);
              j = j.sibling;
            }
            g.type === an
              ? ((d = Qt(g.props.children, f.mode, E, g.key)),
                (d.return = f),
                (f = d))
              : ((E = vl(g.type, g.key, g.props, null, f.mode, E)),
                (E.ref = Wn(f, d, g)),
                (E.return = f),
                (f = E));
          }
          return i(f);
        case sn:
          e: {
            for (j = g.key; d !== null; ) {
              if (d.key === j)
                if (
                  d.tag === 4 &&
                  d.stateNode.containerInfo === g.containerInfo &&
                  d.stateNode.implementation === g.implementation
                ) {
                  n(f, d.sibling),
                    (d = l(d, g.children || [])),
                    (d.return = f),
                    (f = d);
                  break e;
                } else {
                  n(f, d);
                  break;
                }
              else t(f, d);
              d = d.sibling;
            }
            (d = ti(g, f.mode, E)), (d.return = f), (f = d);
          }
          return i(f);
        case yt:
          return (j = g._init), h(f, d, j(g._payload), E);
      }
      if (Gn(g)) return w(f, d, g, E);
      if (Dn(g)) return v(f, d, g, E);
      el(f, g);
    }
    return (typeof g == "string" && g !== "") || typeof g == "number"
      ? ((g = "" + g),
        d !== null && d.tag === 6
          ? (n(f, d.sibling), (d = l(d, g)), (d.return = f), (f = d))
          : (n(f, d), (d = ei(g, f.mode, E)), (d.return = f), (f = d)),
        i(f))
      : n(f, d);
  }
  return h;
}
var Pn = ud(!0),
  cd = ud(!1),
  Il = Ut(null),
  Dl = null,
  gn = null,
  bs = null;
function Os() {
  bs = gn = Dl = null;
}
function Us(e) {
  var t = Il.current;
  $(Il), (e._currentValue = t);
}
function Ai(e, t, n) {
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
function En(e, t) {
  (Dl = e),
    (bs = gn = null),
    (e = e.dependencies),
    e !== null &&
      e.firstContext !== null &&
      (e.lanes & t && (ve = !0), (e.firstContext = null));
}
function Ue(e) {
  var t = e._currentValue;
  if (bs !== e)
    if (((e = { context: e, memoizedValue: t, next: null }), gn === null)) {
      if (Dl === null) throw Error(C(308));
      (gn = e), (Dl.dependencies = { lanes: 0, firstContext: e });
    } else gn = gn.next = e;
  return t;
}
var Ht = null;
function zs(e) {
  Ht === null ? (Ht = [e]) : Ht.push(e);
}
function dd(e, t, n, r) {
  var l = t.interleaved;
  return (
    l === null ? ((n.next = n), zs(t)) : ((n.next = l.next), (l.next = n)),
    (t.interleaved = n),
    ft(e, r)
  );
}
function ft(e, t) {
  e.lanes |= t;
  var n = e.alternate;
  for (n !== null && (n.lanes |= t), n = e, e = e.return; e !== null; )
    (e.childLanes |= t),
      (n = e.alternate),
      n !== null && (n.childLanes |= t),
      (n = e),
      (e = e.return);
  return n.tag === 3 ? n.stateNode : null;
}
var vt = !1;
function Ms(e) {
  e.updateQueue = {
    baseState: e.memoizedState,
    firstBaseUpdate: null,
    lastBaseUpdate: null,
    shared: { pending: null, interleaved: null, lanes: 0 },
    effects: null,
  };
}
function fd(e, t) {
  (e = e.updateQueue),
    t.updateQueue === e &&
      (t.updateQueue = {
        baseState: e.baseState,
        firstBaseUpdate: e.firstBaseUpdate,
        lastBaseUpdate: e.lastBaseUpdate,
        shared: e.shared,
        effects: e.effects,
      });
}
function st(e, t) {
  return {
    eventTime: e,
    lane: t,
    tag: 0,
    payload: null,
    callback: null,
    next: null,
  };
}
function Rt(e, t, n) {
  var r = e.updateQueue;
  if (r === null) return null;
  if (((r = r.shared), F & 2)) {
    var l = r.pending;
    return (
      l === null ? (t.next = t) : ((t.next = l.next), (l.next = t)),
      (r.pending = t),
      ft(e, n)
    );
  }
  return (
    (l = r.interleaved),
    l === null ? ((t.next = t), zs(r)) : ((t.next = l.next), (l.next = t)),
    (r.interleaved = t),
    ft(e, n)
  );
}
function fl(e, t, n) {
  if (
    ((t = t.updateQueue), t !== null && ((t = t.shared), (n & 4194240) !== 0))
  ) {
    var r = t.lanes;
    (r &= e.pendingLanes), (n |= r), (t.lanes = n), ks(e, n);
  }
}
function nu(e, t) {
  var n = e.updateQueue,
    r = e.alternate;
  if (r !== null && ((r = r.updateQueue), n === r)) {
    var l = null,
      o = null;
    if (((n = n.firstBaseUpdate), n !== null)) {
      do {
        var i = {
          eventTime: n.eventTime,
          lane: n.lane,
          tag: n.tag,
          payload: n.payload,
          callback: n.callback,
          next: null,
        };
        o === null ? (l = o = i) : (o = o.next = i), (n = n.next);
      } while (n !== null);
      o === null ? (l = o = t) : (o = o.next = t);
    } else l = o = t;
    (n = {
      baseState: r.baseState,
      firstBaseUpdate: l,
      lastBaseUpdate: o,
      shared: r.shared,
      effects: r.effects,
    }),
      (e.updateQueue = n);
    return;
  }
  (e = n.lastBaseUpdate),
    e === null ? (n.firstBaseUpdate = t) : (e.next = t),
    (n.lastBaseUpdate = t);
}
function $l(e, t, n, r) {
  var l = e.updateQueue;
  vt = !1;
  var o = l.firstBaseUpdate,
    i = l.lastBaseUpdate,
    a = l.shared.pending;
  if (a !== null) {
    l.shared.pending = null;
    var s = a,
      c = s.next;
    (s.next = null), i === null ? (o = c) : (i.next = c), (i = s);
    var p = e.alternate;
    p !== null &&
      ((p = p.updateQueue),
      (a = p.lastBaseUpdate),
      a !== i &&
        (a === null ? (p.firstBaseUpdate = c) : (a.next = c),
        (p.lastBaseUpdate = s)));
  }
  if (o !== null) {
    var m = l.baseState;
    (i = 0), (p = c = s = null), (a = o);
    do {
      var y = a.lane,
        x = a.eventTime;
      if ((r & y) === y) {
        p !== null &&
          (p = p.next =
            {
              eventTime: x,
              lane: 0,
              tag: a.tag,
              payload: a.payload,
              callback: a.callback,
              next: null,
            });
        e: {
          var w = e,
            v = a;
          switch (((y = t), (x = n), v.tag)) {
            case 1:
              if (((w = v.payload), typeof w == "function")) {
                m = w.call(x, m, y);
                break e;
              }
              m = w;
              break e;
            case 3:
              w.flags = (w.flags & -65537) | 128;
            case 0:
              if (
                ((w = v.payload),
                (y = typeof w == "function" ? w.call(x, m, y) : w),
                y == null)
              )
                break e;
              m = Q({}, m, y);
              break e;
            case 2:
              vt = !0;
          }
        }
        a.callback !== null &&
          a.lane !== 0 &&
          ((e.flags |= 64),
          (y = l.effects),
          y === null ? (l.effects = [a]) : y.push(a));
      } else
        (x = {
          eventTime: x,
          lane: y,
          tag: a.tag,
          payload: a.payload,
          callback: a.callback,
          next: null,
        }),
          p === null ? ((c = p = x), (s = m)) : (p = p.next = x),
          (i |= y);
      if (((a = a.next), a === null)) {
        if (((a = l.shared.pending), a === null)) break;
        (y = a),
          (a = y.next),
          (y.next = null),
          (l.lastBaseUpdate = y),
          (l.shared.pending = null);
      }
    } while (!0);
    if (
      (p === null && (s = m),
      (l.baseState = s),
      (l.firstBaseUpdate = c),
      (l.lastBaseUpdate = p),
      (t = l.shared.interleaved),
      t !== null)
    ) {
      l = t;
      do (i |= l.lane), (l = l.next);
      while (l !== t);
    } else o === null && (l.shared.lanes = 0);
    (Xt |= i), (e.lanes = i), (e.memoizedState = m);
  }
}
function ru(e, t, n) {
  if (((e = t.effects), (t.effects = null), e !== null))
    for (t = 0; t < e.length; t++) {
      var r = e[t],
        l = r.callback;
      if (l !== null) {
        if (((r.callback = null), (r = n), typeof l != "function"))
          throw Error(C(191, l));
        l.call(r);
      }
    }
}
var Or = {},
  Xe = Ut(Or),
  xr = Ut(Or),
  kr = Ut(Or);
function Vt(e) {
  if (e === Or) throw Error(C(174));
  return e;
}
function Fs(e, t) {
  switch ((I(kr, t), I(xr, e), I(Xe, Or), (e = t.nodeType), e)) {
    case 9:
    case 11:
      t = (t = t.documentElement) ? t.namespaceURI : vi(null, "");
      break;
    default:
      (e = e === 8 ? t.parentNode : t),
        (t = e.namespaceURI || null),
        (e = e.tagName),
        (t = vi(t, e));
  }
  $(Xe), I(Xe, t);
}
function _n() {
  $(Xe), $(xr), $(kr);
}
function pd(e) {
  Vt(kr.current);
  var t = Vt(Xe.current),
    n = vi(t, e.type);
  t !== n && (I(xr, e), I(Xe, n));
}
function As(e) {
  xr.current === e && ($(Xe), $(xr));
}
var V = Ut(0);
function Bl(e) {
  for (var t = e; t !== null; ) {
    if (t.tag === 13) {
      var n = t.memoizedState;
      if (
        n !== null &&
        ((n = n.dehydrated), n === null || n.data === "$?" || n.data === "$!")
      )
        return t;
    } else if (t.tag === 19 && t.memoizedProps.revealOrder !== void 0) {
      if (t.flags & 128) return t;
    } else if (t.child !== null) {
      (t.child.return = t), (t = t.child);
      continue;
    }
    if (t === e) break;
    for (; t.sibling === null; ) {
      if (t.return === null || t.return === e) return null;
      t = t.return;
    }
    (t.sibling.return = t.return), (t = t.sibling);
  }
  return null;
}
var Yo = [];
function Is() {
  for (var e = 0; e < Yo.length; e++)
    Yo[e]._workInProgressVersionPrimary = null;
  Yo.length = 0;
}
var pl = ht.ReactCurrentDispatcher,
  Jo = ht.ReactCurrentBatchConfig,
  Gt = 0,
  W = null,
  X = null,
  ne = null,
  Hl = !1,
  or = !1,
  Sr = 0,
  qm = 0;
function se() {
  throw Error(C(321));
}
function Ds(e, t) {
  if (t === null) return !1;
  for (var n = 0; n < t.length && n < e.length; n++)
    if (!Be(e[n], t[n])) return !1;
  return !0;
}
function $s(e, t, n, r, l, o) {
  if (
    ((Gt = o),
    (W = t),
    (t.memoizedState = null),
    (t.updateQueue = null),
    (t.lanes = 0),
    (pl.current = e === null || e.memoizedState === null ? eh : th),
    (e = n(r, l)),
    or)
  ) {
    o = 0;
    do {
      if (((or = !1), (Sr = 0), 25 <= o)) throw Error(C(301));
      (o += 1),
        (ne = X = null),
        (t.updateQueue = null),
        (pl.current = nh),
        (e = n(r, l));
    } while (or);
  }
  if (
    ((pl.current = Vl),
    (t = X !== null && X.next !== null),
    (Gt = 0),
    (ne = X = W = null),
    (Hl = !1),
    t)
  )
    throw Error(C(300));
  return e;
}
function Bs() {
  var e = Sr !== 0;
  return (Sr = 0), e;
}
function Qe() {
  var e = {
    memoizedState: null,
    baseState: null,
    baseQueue: null,
    queue: null,
    next: null,
  };
  return ne === null ? (W.memoizedState = ne = e) : (ne = ne.next = e), ne;
}
function ze() {
  if (X === null) {
    var e = W.alternate;
    e = e !== null ? e.memoizedState : null;
  } else e = X.next;
  var t = ne === null ? W.memoizedState : ne.next;
  if (t !== null) (ne = t), (X = e);
  else {
    if (e === null) throw Error(C(310));
    (X = e),
      (e = {
        memoizedState: X.memoizedState,
        baseState: X.baseState,
        baseQueue: X.baseQueue,
        queue: X.queue,
        next: null,
      }),
      ne === null ? (W.memoizedState = ne = e) : (ne = ne.next = e);
  }
  return ne;
}
function Er(e, t) {
  return typeof t == "function" ? t(e) : t;
}
function qo(e) {
  var t = ze(),
    n = t.queue;
  if (n === null) throw Error(C(311));
  n.lastRenderedReducer = e;
  var r = X,
    l = r.baseQueue,
    o = n.pending;
  if (o !== null) {
    if (l !== null) {
      var i = l.next;
      (l.next = o.next), (o.next = i);
    }
    (r.baseQueue = l = o), (n.pending = null);
  }
  if (l !== null) {
    (o = l.next), (r = r.baseState);
    var a = (i = null),
      s = null,
      c = o;
    do {
      var p = c.lane;
      if ((Gt & p) === p)
        s !== null &&
          (s = s.next =
            {
              lane: 0,
              action: c.action,
              hasEagerState: c.hasEagerState,
              eagerState: c.eagerState,
              next: null,
            }),
          (r = c.hasEagerState ? c.eagerState : e(r, c.action));
      else {
        var m = {
          lane: p,
          action: c.action,
          hasEagerState: c.hasEagerState,
          eagerState: c.eagerState,
          next: null,
        };
        s === null ? ((a = s = m), (i = r)) : (s = s.next = m),
          (W.lanes |= p),
          (Xt |= p);
      }
      c = c.next;
    } while (c !== null && c !== o);
    s === null ? (i = r) : (s.next = a),
      Be(r, t.memoizedState) || (ve = !0),
      (t.memoizedState = r),
      (t.baseState = i),
      (t.baseQueue = s),
      (n.lastRenderedState = r);
  }
  if (((e = n.interleaved), e !== null)) {
    l = e;
    do (o = l.lane), (W.lanes |= o), (Xt |= o), (l = l.next);
    while (l !== e);
  } else l === null && (n.lanes = 0);
  return [t.memoizedState, n.dispatch];
}
function Go(e) {
  var t = ze(),
    n = t.queue;
  if (n === null) throw Error(C(311));
  n.lastRenderedReducer = e;
  var r = n.dispatch,
    l = n.pending,
    o = t.memoizedState;
  if (l !== null) {
    n.pending = null;
    var i = (l = l.next);
    do (o = e(o, i.action)), (i = i.next);
    while (i !== l);
    Be(o, t.memoizedState) || (ve = !0),
      (t.memoizedState = o),
      t.baseQueue === null && (t.baseState = o),
      (n.lastRenderedState = o);
  }
  return [o, r];
}
function md() {}
function hd(e, t) {
  var n = W,
    r = ze(),
    l = t(),
    o = !Be(r.memoizedState, l);
  if (
    (o && ((r.memoizedState = l), (ve = !0)),
    (r = r.queue),
    Hs(vd.bind(null, n, r, e), [e]),
    r.getSnapshot !== t || o || (ne !== null && ne.memoizedState.tag & 1))
  ) {
    if (
      ((n.flags |= 2048),
      Nr(9, yd.bind(null, n, r, l, t), void 0, null),
      re === null)
    )
      throw Error(C(349));
    Gt & 30 || gd(n, t, l);
  }
  return l;
}
function gd(e, t, n) {
  (e.flags |= 16384),
    (e = { getSnapshot: t, value: n }),
    (t = W.updateQueue),
    t === null
      ? ((t = { lastEffect: null, stores: null }),
        (W.updateQueue = t),
        (t.stores = [e]))
      : ((n = t.stores), n === null ? (t.stores = [e]) : n.push(e));
}
function yd(e, t, n, r) {
  (t.value = n), (t.getSnapshot = r), wd(t) && xd(e);
}
function vd(e, t, n) {
  return n(function () {
    wd(t) && xd(e);
  });
}
function wd(e) {
  var t = e.getSnapshot;
  e = e.value;
  try {
    var n = t();
    return !Be(e, n);
  } catch {
    return !0;
  }
}
function xd(e) {
  var t = ft(e, 1);
  t !== null && $e(t, e, 1, -1);
}
function lu(e) {
  var t = Qe();
  return (
    typeof e == "function" && (e = e()),
    (t.memoizedState = t.baseState = e),
    (e = {
      pending: null,
      interleaved: null,
      lanes: 0,
      dispatch: null,
      lastRenderedReducer: Er,
      lastRenderedState: e,
    }),
    (t.queue = e),
    (e = e.dispatch = Zm.bind(null, W, e)),
    [t.memoizedState, e]
  );
}
function Nr(e, t, n, r) {
  return (
    (e = { tag: e, create: t, destroy: n, deps: r, next: null }),
    (t = W.updateQueue),
    t === null
      ? ((t = { lastEffect: null, stores: null }),
        (W.updateQueue = t),
        (t.lastEffect = e.next = e))
      : ((n = t.lastEffect),
        n === null
          ? (t.lastEffect = e.next = e)
          : ((r = n.next), (n.next = e), (e.next = r), (t.lastEffect = e))),
    e
  );
}
function kd() {
  return ze().memoizedState;
}
function ml(e, t, n, r) {
  var l = Qe();
  (W.flags |= e),
    (l.memoizedState = Nr(1 | t, n, void 0, r === void 0 ? null : r));
}
function so(e, t, n, r) {
  var l = ze();
  r = r === void 0 ? null : r;
  var o = void 0;
  if (X !== null) {
    var i = X.memoizedState;
    if (((o = i.destroy), r !== null && Ds(r, i.deps))) {
      l.memoizedState = Nr(t, n, o, r);
      return;
    }
  }
  (W.flags |= e), (l.memoizedState = Nr(1 | t, n, o, r));
}
function ou(e, t) {
  return ml(8390656, 8, e, t);
}
function Hs(e, t) {
  return so(2048, 8, e, t);
}
function Sd(e, t) {
  return so(4, 2, e, t);
}
function Ed(e, t) {
  return so(4, 4, e, t);
}
function Nd(e, t) {
  if (typeof t == "function")
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
function Cd(e, t, n) {
  return (
    (n = n != null ? n.concat([e]) : null), so(4, 4, Nd.bind(null, t, e), n)
  );
}
function Vs() {}
function jd(e, t) {
  var n = ze();
  t = t === void 0 ? null : t;
  var r = n.memoizedState;
  return r !== null && t !== null && Ds(t, r[1])
    ? r[0]
    : ((n.memoizedState = [e, t]), e);
}
function Rd(e, t) {
  var n = ze();
  t = t === void 0 ? null : t;
  var r = n.memoizedState;
  return r !== null && t !== null && Ds(t, r[1])
    ? r[0]
    : ((e = e()), (n.memoizedState = [e, t]), e);
}
function Pd(e, t, n) {
  return Gt & 21
    ? (Be(n, t) || ((n = Oc()), (W.lanes |= n), (Xt |= n), (e.baseState = !0)),
      t)
    : (e.baseState && ((e.baseState = !1), (ve = !0)), (e.memoizedState = n));
}
function Gm(e, t) {
  var n = A;
  (A = n !== 0 && 4 > n ? n : 4), e(!0);
  var r = Jo.transition;
  Jo.transition = {};
  try {
    e(!1), t();
  } finally {
    (A = n), (Jo.transition = r);
  }
}
function _d() {
  return ze().memoizedState;
}
function Xm(e, t, n) {
  var r = _t(e);
  if (
    ((n = {
      lane: r,
      action: n,
      hasEagerState: !1,
      eagerState: null,
      next: null,
    }),
    Td(e))
  )
    Ld(t, n);
  else if (((n = dd(e, t, n, r)), n !== null)) {
    var l = pe();
    $e(n, e, r, l), bd(n, t, r);
  }
}
function Zm(e, t, n) {
  var r = _t(e),
    l = { lane: r, action: n, hasEagerState: !1, eagerState: null, next: null };
  if (Td(e)) Ld(t, l);
  else {
    var o = e.alternate;
    if (
      e.lanes === 0 &&
      (o === null || o.lanes === 0) &&
      ((o = t.lastRenderedReducer), o !== null)
    )
      try {
        var i = t.lastRenderedState,
          a = o(i, n);
        if (((l.hasEagerState = !0), (l.eagerState = a), Be(a, i))) {
          var s = t.interleaved;
          s === null
            ? ((l.next = l), zs(t))
            : ((l.next = s.next), (s.next = l)),
            (t.interleaved = l);
          return;
        }
      } catch {
      } finally {
      }
    (n = dd(e, t, l, r)),
      n !== null && ((l = pe()), $e(n, e, r, l), bd(n, t, r));
  }
}
function Td(e) {
  var t = e.alternate;
  return e === W || (t !== null && t === W);
}
function Ld(e, t) {
  or = Hl = !0;
  var n = e.pending;
  n === null ? (t.next = t) : ((t.next = n.next), (n.next = t)),
    (e.pending = t);
}
function bd(e, t, n) {
  if (n & 4194240) {
    var r = t.lanes;
    (r &= e.pendingLanes), (n |= r), (t.lanes = n), ks(e, n);
  }
}
var Vl = {
    readContext: Ue,
    useCallback: se,
    useContext: se,
    useEffect: se,
    useImperativeHandle: se,
    useInsertionEffect: se,
    useLayoutEffect: se,
    useMemo: se,
    useReducer: se,
    useRef: se,
    useState: se,
    useDebugValue: se,
    useDeferredValue: se,
    useTransition: se,
    useMutableSource: se,
    useSyncExternalStore: se,
    useId: se,
    unstable_isNewReconciler: !1,
  },
  eh = {
    readContext: Ue,
    useCallback: function (e, t) {
      return (Qe().memoizedState = [e, t === void 0 ? null : t]), e;
    },
    useContext: Ue,
    useEffect: ou,
    useImperativeHandle: function (e, t, n) {
      return (
        (n = n != null ? n.concat([e]) : null),
        ml(4194308, 4, Nd.bind(null, t, e), n)
      );
    },
    useLayoutEffect: function (e, t) {
      return ml(4194308, 4, e, t);
    },
    useInsertionEffect: function (e, t) {
      return ml(4, 2, e, t);
    },
    useMemo: function (e, t) {
      var n = Qe();
      return (
        (t = t === void 0 ? null : t), (e = e()), (n.memoizedState = [e, t]), e
      );
    },
    useReducer: function (e, t, n) {
      var r = Qe();
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
        (e = e.dispatch = Xm.bind(null, W, e)),
        [r.memoizedState, e]
      );
    },
    useRef: function (e) {
      var t = Qe();
      return (e = { current: e }), (t.memoizedState = e);
    },
    useState: lu,
    useDebugValue: Vs,
    useDeferredValue: function (e) {
      return (Qe().memoizedState = e);
    },
    useTransition: function () {
      var e = lu(!1),
        t = e[0];
      return (e = Gm.bind(null, e[1])), (Qe().memoizedState = e), [t, e];
    },
    useMutableSource: function () {},
    useSyncExternalStore: function (e, t, n) {
      var r = W,
        l = Qe();
      if (B) {
        if (n === void 0) throw Error(C(407));
        n = n();
      } else {
        if (((n = t()), re === null)) throw Error(C(349));
        Gt & 30 || gd(r, t, n);
      }
      l.memoizedState = n;
      var o = { value: n, getSnapshot: t };
      return (
        (l.queue = o),
        ou(vd.bind(null, r, o, e), [e]),
        (r.flags |= 2048),
        Nr(9, yd.bind(null, r, o, n, t), void 0, null),
        n
      );
    },
    useId: function () {
      var e = Qe(),
        t = re.identifierPrefix;
      if (B) {
        var n = it,
          r = ot;
        (n = (r & ~(1 << (32 - De(r) - 1))).toString(32) + n),
          (t = ":" + t + "R" + n),
          (n = Sr++),
          0 < n && (t += "H" + n.toString(32)),
          (t += ":");
      } else (n = qm++), (t = ":" + t + "r" + n.toString(32) + ":");
      return (e.memoizedState = t);
    },
    unstable_isNewReconciler: !1,
  },
  th = {
    readContext: Ue,
    useCallback: jd,
    useContext: Ue,
    useEffect: Hs,
    useImperativeHandle: Cd,
    useInsertionEffect: Sd,
    useLayoutEffect: Ed,
    useMemo: Rd,
    useReducer: qo,
    useRef: kd,
    useState: function () {
      return qo(Er);
    },
    useDebugValue: Vs,
    useDeferredValue: function (e) {
      var t = ze();
      return Pd(t, X.memoizedState, e);
    },
    useTransition: function () {
      var e = qo(Er)[0],
        t = ze().memoizedState;
      return [e, t];
    },
    useMutableSource: md,
    useSyncExternalStore: hd,
    useId: _d,
    unstable_isNewReconciler: !1,
  },
  nh = {
    readContext: Ue,
    useCallback: jd,
    useContext: Ue,
    useEffect: Hs,
    useImperativeHandle: Cd,
    useInsertionEffect: Sd,
    useLayoutEffect: Ed,
    useMemo: Rd,
    useReducer: Go,
    useRef: kd,
    useState: function () {
      return Go(Er);
    },
    useDebugValue: Vs,
    useDeferredValue: function (e) {
      var t = ze();
      return X === null ? (t.memoizedState = e) : Pd(t, X.memoizedState, e);
    },
    useTransition: function () {
      var e = Go(Er)[0],
        t = ze().memoizedState;
      return [e, t];
    },
    useMutableSource: md,
    useSyncExternalStore: hd,
    useId: _d,
    unstable_isNewReconciler: !1,
  };
function Fe(e, t) {
  if (e && e.defaultProps) {
    (t = Q({}, t)), (e = e.defaultProps);
    for (var n in e) t[n] === void 0 && (t[n] = e[n]);
    return t;
  }
  return t;
}
function Ii(e, t, n, r) {
  (t = e.memoizedState),
    (n = n(r, t)),
    (n = n == null ? t : Q({}, t, n)),
    (e.memoizedState = n),
    e.lanes === 0 && (e.updateQueue.baseState = n);
}
var ao = {
  isMounted: function (e) {
    return (e = e._reactInternals) ? rn(e) === e : !1;
  },
  enqueueSetState: function (e, t, n) {
    e = e._reactInternals;
    var r = pe(),
      l = _t(e),
      o = st(r, l);
    (o.payload = t),
      n != null && (o.callback = n),
      (t = Rt(e, o, l)),
      t !== null && ($e(t, e, l, r), fl(t, e, l));
  },
  enqueueReplaceState: function (e, t, n) {
    e = e._reactInternals;
    var r = pe(),
      l = _t(e),
      o = st(r, l);
    (o.tag = 1),
      (o.payload = t),
      n != null && (o.callback = n),
      (t = Rt(e, o, l)),
      t !== null && ($e(t, e, l, r), fl(t, e, l));
  },
  enqueueForceUpdate: function (e, t) {
    e = e._reactInternals;
    var n = pe(),
      r = _t(e),
      l = st(n, r);
    (l.tag = 2),
      t != null && (l.callback = t),
      (t = Rt(e, l, r)),
      t !== null && ($e(t, e, r, n), fl(t, e, r));
  },
};
function iu(e, t, n, r, l, o, i) {
  return (
    (e = e.stateNode),
    typeof e.shouldComponentUpdate == "function"
      ? e.shouldComponentUpdate(r, o, i)
      : t.prototype && t.prototype.isPureReactComponent
      ? !gr(n, r) || !gr(l, o)
      : !0
  );
}
function Od(e, t, n) {
  var r = !1,
    l = bt,
    o = t.contextType;
  return (
    typeof o == "object" && o !== null
      ? (o = Ue(o))
      : ((l = xe(t) ? Jt : de.current),
        (r = t.contextTypes),
        (o = (r = r != null) ? jn(e, l) : bt)),
    (t = new t(n, o)),
    (e.memoizedState = t.state !== null && t.state !== void 0 ? t.state : null),
    (t.updater = ao),
    (e.stateNode = t),
    (t._reactInternals = e),
    r &&
      ((e = e.stateNode),
      (e.__reactInternalMemoizedUnmaskedChildContext = l),
      (e.__reactInternalMemoizedMaskedChildContext = o)),
    t
  );
}
function su(e, t, n, r) {
  (e = t.state),
    typeof t.componentWillReceiveProps == "function" &&
      t.componentWillReceiveProps(n, r),
    typeof t.UNSAFE_componentWillReceiveProps == "function" &&
      t.UNSAFE_componentWillReceiveProps(n, r),
    t.state !== e && ao.enqueueReplaceState(t, t.state, null);
}
function Di(e, t, n, r) {
  var l = e.stateNode;
  (l.props = n), (l.state = e.memoizedState), (l.refs = {}), Ms(e);
  var o = t.contextType;
  typeof o == "object" && o !== null
    ? (l.context = Ue(o))
    : ((o = xe(t) ? Jt : de.current), (l.context = jn(e, o))),
    (l.state = e.memoizedState),
    (o = t.getDerivedStateFromProps),
    typeof o == "function" && (Ii(e, t, o, n), (l.state = e.memoizedState)),
    typeof t.getDerivedStateFromProps == "function" ||
      typeof l.getSnapshotBeforeUpdate == "function" ||
      (typeof l.UNSAFE_componentWillMount != "function" &&
        typeof l.componentWillMount != "function") ||
      ((t = l.state),
      typeof l.componentWillMount == "function" && l.componentWillMount(),
      typeof l.UNSAFE_componentWillMount == "function" &&
        l.UNSAFE_componentWillMount(),
      t !== l.state && ao.enqueueReplaceState(l, l.state, null),
      $l(e, n, l, r),
      (l.state = e.memoizedState)),
    typeof l.componentDidMount == "function" && (e.flags |= 4194308);
}
function Tn(e, t) {
  try {
    var n = "",
      r = t;
    do (n += Tp(r)), (r = r.return);
    while (r);
    var l = n;
  } catch (o) {
    l =
      `
Error generating stack: ` +
      o.message +
      `
` +
      o.stack;
  }
  return { value: e, source: t, stack: l, digest: null };
}
function Xo(e, t, n) {
  return { value: e, source: null, stack: n ?? null, digest: t ?? null };
}
function $i(e, t) {
  try {
    console.error(t.value);
  } catch (n) {
    setTimeout(function () {
      throw n;
    });
  }
}
var rh = typeof WeakMap == "function" ? WeakMap : Map;
function Ud(e, t, n) {
  (n = st(-1, n)), (n.tag = 3), (n.payload = { element: null });
  var r = t.value;
  return (
    (n.callback = function () {
      Kl || ((Kl = !0), (Gi = r)), $i(e, t);
    }),
    n
  );
}
function zd(e, t, n) {
  (n = st(-1, n)), (n.tag = 3);
  var r = e.type.getDerivedStateFromError;
  if (typeof r == "function") {
    var l = t.value;
    (n.payload = function () {
      return r(l);
    }),
      (n.callback = function () {
        $i(e, t);
      });
  }
  var o = e.stateNode;
  return (
    o !== null &&
      typeof o.componentDidCatch == "function" &&
      (n.callback = function () {
        $i(e, t),
          typeof r != "function" &&
            (Pt === null ? (Pt = new Set([this])) : Pt.add(this));
        var i = t.stack;
        this.componentDidCatch(t.value, {
          componentStack: i !== null ? i : "",
        });
      }),
    n
  );
}
function au(e, t, n) {
  var r = e.pingCache;
  if (r === null) {
    r = e.pingCache = new rh();
    var l = new Set();
    r.set(t, l);
  } else (l = r.get(t)), l === void 0 && ((l = new Set()), r.set(t, l));
  l.has(n) || (l.add(n), (e = yh.bind(null, e, t, n)), t.then(e, e));
}
function uu(e) {
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
function cu(e, t, n, r, l) {
  return e.mode & 1
    ? ((e.flags |= 65536), (e.lanes = l), e)
    : (e === t
        ? (e.flags |= 65536)
        : ((e.flags |= 128),
          (n.flags |= 131072),
          (n.flags &= -52805),
          n.tag === 1 &&
            (n.alternate === null
              ? (n.tag = 17)
              : ((t = st(-1, 1)), (t.tag = 2), Rt(n, t, 1))),
          (n.lanes |= 1)),
      e);
}
var lh = ht.ReactCurrentOwner,
  ve = !1;
function fe(e, t, n, r) {
  t.child = e === null ? cd(t, null, n, r) : Pn(t, e.child, n, r);
}
function du(e, t, n, r, l) {
  n = n.render;
  var o = t.ref;
  return (
    En(t, l),
    (r = $s(e, t, n, r, o, l)),
    (n = Bs()),
    e !== null && !ve
      ? ((t.updateQueue = e.updateQueue),
        (t.flags &= -2053),
        (e.lanes &= ~l),
        pt(e, t, l))
      : (B && n && _s(t), (t.flags |= 1), fe(e, t, r, l), t.child)
  );
}
function fu(e, t, n, r, l) {
  if (e === null) {
    var o = n.type;
    return typeof o == "function" &&
      !Xs(o) &&
      o.defaultProps === void 0 &&
      n.compare === null &&
      n.defaultProps === void 0
      ? ((t.tag = 15), (t.type = o), Md(e, t, o, r, l))
      : ((e = vl(n.type, null, r, t, t.mode, l)),
        (e.ref = t.ref),
        (e.return = t),
        (t.child = e));
  }
  if (((o = e.child), !(e.lanes & l))) {
    var i = o.memoizedProps;
    if (
      ((n = n.compare), (n = n !== null ? n : gr), n(i, r) && e.ref === t.ref)
    )
      return pt(e, t, l);
  }
  return (
    (t.flags |= 1),
    (e = Tt(o, r)),
    (e.ref = t.ref),
    (e.return = t),
    (t.child = e)
  );
}
function Md(e, t, n, r, l) {
  if (e !== null) {
    var o = e.memoizedProps;
    if (gr(o, r) && e.ref === t.ref)
      if (((ve = !1), (t.pendingProps = r = o), (e.lanes & l) !== 0))
        e.flags & 131072 && (ve = !0);
      else return (t.lanes = e.lanes), pt(e, t, l);
  }
  return Bi(e, t, n, r, l);
}
function Fd(e, t, n) {
  var r = t.pendingProps,
    l = r.children,
    o = e !== null ? e.memoizedState : null;
  if (r.mode === "hidden")
    if (!(t.mode & 1))
      (t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }),
        I(vn, Ne),
        (Ne |= n);
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
          I(vn, Ne),
          (Ne |= e),
          null
        );
      (t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }),
        (r = o !== null ? o.baseLanes : n),
        I(vn, Ne),
        (Ne |= r);
    }
  else
    o !== null ? ((r = o.baseLanes | n), (t.memoizedState = null)) : (r = n),
      I(vn, Ne),
      (Ne |= r);
  return fe(e, t, l, n), t.child;
}
function Ad(e, t) {
  var n = t.ref;
  ((e === null && n !== null) || (e !== null && e.ref !== n)) &&
    ((t.flags |= 512), (t.flags |= 2097152));
}
function Bi(e, t, n, r, l) {
  var o = xe(n) ? Jt : de.current;
  return (
    (o = jn(t, o)),
    En(t, l),
    (n = $s(e, t, n, r, o, l)),
    (r = Bs()),
    e !== null && !ve
      ? ((t.updateQueue = e.updateQueue),
        (t.flags &= -2053),
        (e.lanes &= ~l),
        pt(e, t, l))
      : (B && r && _s(t), (t.flags |= 1), fe(e, t, n, l), t.child)
  );
}
function pu(e, t, n, r, l) {
  if (xe(n)) {
    var o = !0;
    Ml(t);
  } else o = !1;
  if ((En(t, l), t.stateNode === null))
    hl(e, t), Od(t, n, r), Di(t, n, r, l), (r = !0);
  else if (e === null) {
    var i = t.stateNode,
      a = t.memoizedProps;
    i.props = a;
    var s = i.context,
      c = n.contextType;
    typeof c == "object" && c !== null
      ? (c = Ue(c))
      : ((c = xe(n) ? Jt : de.current), (c = jn(t, c)));
    var p = n.getDerivedStateFromProps,
      m =
        typeof p == "function" ||
        typeof i.getSnapshotBeforeUpdate == "function";
    m ||
      (typeof i.UNSAFE_componentWillReceiveProps != "function" &&
        typeof i.componentWillReceiveProps != "function") ||
      ((a !== r || s !== c) && su(t, i, r, c)),
      (vt = !1);
    var y = t.memoizedState;
    (i.state = y),
      $l(t, r, i, l),
      (s = t.memoizedState),
      a !== r || y !== s || we.current || vt
        ? (typeof p == "function" && (Ii(t, n, p, r), (s = t.memoizedState)),
          (a = vt || iu(t, n, a, r, y, s, c))
            ? (m ||
                (typeof i.UNSAFE_componentWillMount != "function" &&
                  typeof i.componentWillMount != "function") ||
                (typeof i.componentWillMount == "function" &&
                  i.componentWillMount(),
                typeof i.UNSAFE_componentWillMount == "function" &&
                  i.UNSAFE_componentWillMount()),
              typeof i.componentDidMount == "function" && (t.flags |= 4194308))
            : (typeof i.componentDidMount == "function" && (t.flags |= 4194308),
              (t.memoizedProps = r),
              (t.memoizedState = s)),
          (i.props = r),
          (i.state = s),
          (i.context = c),
          (r = a))
        : (typeof i.componentDidMount == "function" && (t.flags |= 4194308),
          (r = !1));
  } else {
    (i = t.stateNode),
      fd(e, t),
      (a = t.memoizedProps),
      (c = t.type === t.elementType ? a : Fe(t.type, a)),
      (i.props = c),
      (m = t.pendingProps),
      (y = i.context),
      (s = n.contextType),
      typeof s == "object" && s !== null
        ? (s = Ue(s))
        : ((s = xe(n) ? Jt : de.current), (s = jn(t, s)));
    var x = n.getDerivedStateFromProps;
    (p =
      typeof x == "function" ||
      typeof i.getSnapshotBeforeUpdate == "function") ||
      (typeof i.UNSAFE_componentWillReceiveProps != "function" &&
        typeof i.componentWillReceiveProps != "function") ||
      ((a !== m || y !== s) && su(t, i, r, s)),
      (vt = !1),
      (y = t.memoizedState),
      (i.state = y),
      $l(t, r, i, l);
    var w = t.memoizedState;
    a !== m || y !== w || we.current || vt
      ? (typeof x == "function" && (Ii(t, n, x, r), (w = t.memoizedState)),
        (c = vt || iu(t, n, c, r, y, w, s) || !1)
          ? (p ||
              (typeof i.UNSAFE_componentWillUpdate != "function" &&
                typeof i.componentWillUpdate != "function") ||
              (typeof i.componentWillUpdate == "function" &&
                i.componentWillUpdate(r, w, s),
              typeof i.UNSAFE_componentWillUpdate == "function" &&
                i.UNSAFE_componentWillUpdate(r, w, s)),
            typeof i.componentDidUpdate == "function" && (t.flags |= 4),
            typeof i.getSnapshotBeforeUpdate == "function" && (t.flags |= 1024))
          : (typeof i.componentDidUpdate != "function" ||
              (a === e.memoizedProps && y === e.memoizedState) ||
              (t.flags |= 4),
            typeof i.getSnapshotBeforeUpdate != "function" ||
              (a === e.memoizedProps && y === e.memoizedState) ||
              (t.flags |= 1024),
            (t.memoizedProps = r),
            (t.memoizedState = w)),
        (i.props = r),
        (i.state = w),
        (i.context = s),
        (r = c))
      : (typeof i.componentDidUpdate != "function" ||
          (a === e.memoizedProps && y === e.memoizedState) ||
          (t.flags |= 4),
        typeof i.getSnapshotBeforeUpdate != "function" ||
          (a === e.memoizedProps && y === e.memoizedState) ||
          (t.flags |= 1024),
        (r = !1));
  }
  return Hi(e, t, n, r, o, l);
}
function Hi(e, t, n, r, l, o) {
  Ad(e, t);
  var i = (t.flags & 128) !== 0;
  if (!r && !i) return l && Xa(t, n, !1), pt(e, t, o);
  (r = t.stateNode), (lh.current = t);
  var a =
    i && typeof n.getDerivedStateFromError != "function" ? null : r.render();
  return (
    (t.flags |= 1),
    e !== null && i
      ? ((t.child = Pn(t, e.child, null, o)), (t.child = Pn(t, null, a, o)))
      : fe(e, t, a, o),
    (t.memoizedState = r.state),
    l && Xa(t, n, !0),
    t.child
  );
}
function Id(e) {
  var t = e.stateNode;
  t.pendingContext
    ? Ga(e, t.pendingContext, t.pendingContext !== t.context)
    : t.context && Ga(e, t.context, !1),
    Fs(e, t.containerInfo);
}
function mu(e, t, n, r, l) {
  return Rn(), Ls(l), (t.flags |= 256), fe(e, t, n, r), t.child;
}
var Vi = { dehydrated: null, treeContext: null, retryLane: 0 };
function Wi(e) {
  return { baseLanes: e, cachePool: null, transitions: null };
}
function Dd(e, t, n) {
  var r = t.pendingProps,
    l = V.current,
    o = !1,
    i = (t.flags & 128) !== 0,
    a;
  if (
    ((a = i) ||
      (a = e !== null && e.memoizedState === null ? !1 : (l & 2) !== 0),
    a
      ? ((o = !0), (t.flags &= -129))
      : (e === null || e.memoizedState !== null) && (l |= 1),
    I(V, l & 1),
    e === null)
  )
    return (
      Fi(t),
      (e = t.memoizedState),
      e !== null && ((e = e.dehydrated), e !== null)
        ? (t.mode & 1
            ? e.data === "$!"
              ? (t.lanes = 8)
              : (t.lanes = 1073741824)
            : (t.lanes = 1),
          null)
        : ((i = r.children),
          (e = r.fallback),
          o
            ? ((r = t.mode),
              (o = t.child),
              (i = { mode: "hidden", children: i }),
              !(r & 1) && o !== null
                ? ((o.childLanes = 0), (o.pendingProps = i))
                : (o = fo(i, r, 0, null)),
              (e = Qt(e, r, n, null)),
              (o.return = t),
              (e.return = t),
              (o.sibling = e),
              (t.child = o),
              (t.child.memoizedState = Wi(n)),
              (t.memoizedState = Vi),
              e)
            : Ws(t, i))
    );
  if (((l = e.memoizedState), l !== null && ((a = l.dehydrated), a !== null)))
    return oh(e, t, i, r, a, l, n);
  if (o) {
    (o = r.fallback), (i = t.mode), (l = e.child), (a = l.sibling);
    var s = { mode: "hidden", children: r.children };
    return (
      !(i & 1) && t.child !== l
        ? ((r = t.child),
          (r.childLanes = 0),
          (r.pendingProps = s),
          (t.deletions = null))
        : ((r = Tt(l, s)), (r.subtreeFlags = l.subtreeFlags & 14680064)),
      a !== null ? (o = Tt(a, o)) : ((o = Qt(o, i, n, null)), (o.flags |= 2)),
      (o.return = t),
      (r.return = t),
      (r.sibling = o),
      (t.child = r),
      (r = o),
      (o = t.child),
      (i = e.child.memoizedState),
      (i =
        i === null
          ? Wi(n)
          : {
              baseLanes: i.baseLanes | n,
              cachePool: null,
              transitions: i.transitions,
            }),
      (o.memoizedState = i),
      (o.childLanes = e.childLanes & ~n),
      (t.memoizedState = Vi),
      r
    );
  }
  return (
    (o = e.child),
    (e = o.sibling),
    (r = Tt(o, { mode: "visible", children: r.children })),
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
function Ws(e, t) {
  return (
    (t = fo({ mode: "visible", children: t }, e.mode, 0, null)),
    (t.return = e),
    (e.child = t)
  );
}
function tl(e, t, n, r) {
  return (
    r !== null && Ls(r),
    Pn(t, e.child, null, n),
    (e = Ws(t, t.pendingProps.children)),
    (e.flags |= 2),
    (t.memoizedState = null),
    e
  );
}
function oh(e, t, n, r, l, o, i) {
  if (n)
    return t.flags & 256
      ? ((t.flags &= -257), (r = Xo(Error(C(422)))), tl(e, t, i, r))
      : t.memoizedState !== null
      ? ((t.child = e.child), (t.flags |= 128), null)
      : ((o = r.fallback),
        (l = t.mode),
        (r = fo({ mode: "visible", children: r.children }, l, 0, null)),
        (o = Qt(o, l, i, null)),
        (o.flags |= 2),
        (r.return = t),
        (o.return = t),
        (r.sibling = o),
        (t.child = r),
        t.mode & 1 && Pn(t, e.child, null, i),
        (t.child.memoizedState = Wi(i)),
        (t.memoizedState = Vi),
        o);
  if (!(t.mode & 1)) return tl(e, t, i, null);
  if (l.data === "$!") {
    if (((r = l.nextSibling && l.nextSibling.dataset), r)) var a = r.dgst;
    return (r = a), (o = Error(C(419))), (r = Xo(o, r, void 0)), tl(e, t, i, r);
  }
  if (((a = (i & e.childLanes) !== 0), ve || a)) {
    if (((r = re), r !== null)) {
      switch (i & -i) {
        case 4:
          l = 2;
          break;
        case 16:
          l = 8;
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
          l = 32;
          break;
        case 536870912:
          l = 268435456;
          break;
        default:
          l = 0;
      }
      (l = l & (r.suspendedLanes | i) ? 0 : l),
        l !== 0 &&
          l !== o.retryLane &&
          ((o.retryLane = l), ft(e, l), $e(r, e, l, -1));
    }
    return Gs(), (r = Xo(Error(C(421)))), tl(e, t, i, r);
  }
  return l.data === "$?"
    ? ((t.flags |= 128),
      (t.child = e.child),
      (t = vh.bind(null, e)),
      (l._reactRetry = t),
      null)
    : ((e = o.treeContext),
      (Ce = jt(l.nextSibling)),
      (je = t),
      (B = !0),
      (Ie = null),
      e !== null &&
        ((Te[Le++] = ot),
        (Te[Le++] = it),
        (Te[Le++] = qt),
        (ot = e.id),
        (it = e.overflow),
        (qt = t)),
      (t = Ws(t, r.children)),
      (t.flags |= 4096),
      t);
}
function hu(e, t, n) {
  e.lanes |= t;
  var r = e.alternate;
  r !== null && (r.lanes |= t), Ai(e.return, t, n);
}
function Zo(e, t, n, r, l) {
  var o = e.memoizedState;
  o === null
    ? (e.memoizedState = {
        isBackwards: t,
        rendering: null,
        renderingStartTime: 0,
        last: r,
        tail: n,
        tailMode: l,
      })
    : ((o.isBackwards = t),
      (o.rendering = null),
      (o.renderingStartTime = 0),
      (o.last = r),
      (o.tail = n),
      (o.tailMode = l));
}
function $d(e, t, n) {
  var r = t.pendingProps,
    l = r.revealOrder,
    o = r.tail;
  if ((fe(e, t, r.children, n), (r = V.current), r & 2))
    (r = (r & 1) | 2), (t.flags |= 128);
  else {
    if (e !== null && e.flags & 128)
      e: for (e = t.child; e !== null; ) {
        if (e.tag === 13) e.memoizedState !== null && hu(e, n, t);
        else if (e.tag === 19) hu(e, n, t);
        else if (e.child !== null) {
          (e.child.return = e), (e = e.child);
          continue;
        }
        if (e === t) break e;
        for (; e.sibling === null; ) {
          if (e.return === null || e.return === t) break e;
          e = e.return;
        }
        (e.sibling.return = e.return), (e = e.sibling);
      }
    r &= 1;
  }
  if ((I(V, r), !(t.mode & 1))) t.memoizedState = null;
  else
    switch (l) {
      case "forwards":
        for (n = t.child, l = null; n !== null; )
          (e = n.alternate),
            e !== null && Bl(e) === null && (l = n),
            (n = n.sibling);
        (n = l),
          n === null
            ? ((l = t.child), (t.child = null))
            : ((l = n.sibling), (n.sibling = null)),
          Zo(t, !1, l, n, o);
        break;
      case "backwards":
        for (n = null, l = t.child, t.child = null; l !== null; ) {
          if (((e = l.alternate), e !== null && Bl(e) === null)) {
            t.child = l;
            break;
          }
          (e = l.sibling), (l.sibling = n), (n = l), (l = e);
        }
        Zo(t, !0, n, null, o);
        break;
      case "together":
        Zo(t, !1, null, null, void 0);
        break;
      default:
        t.memoizedState = null;
    }
  return t.child;
}
function hl(e, t) {
  !(t.mode & 1) &&
    e !== null &&
    ((e.alternate = null), (t.alternate = null), (t.flags |= 2));
}
function pt(e, t, n) {
  if (
    (e !== null && (t.dependencies = e.dependencies),
    (Xt |= t.lanes),
    !(n & t.childLanes))
  )
    return null;
  if (e !== null && t.child !== e.child) throw Error(C(153));
  if (t.child !== null) {
    for (
      e = t.child, n = Tt(e, e.pendingProps), t.child = n, n.return = t;
      e.sibling !== null;

    )
      (e = e.sibling), (n = n.sibling = Tt(e, e.pendingProps)), (n.return = t);
    n.sibling = null;
  }
  return t.child;
}
function ih(e, t, n) {
  switch (t.tag) {
    case 3:
      Id(t), Rn();
      break;
    case 5:
      pd(t);
      break;
    case 1:
      xe(t.type) && Ml(t);
      break;
    case 4:
      Fs(t, t.stateNode.containerInfo);
      break;
    case 10:
      var r = t.type._context,
        l = t.memoizedProps.value;
      I(Il, r._currentValue), (r._currentValue = l);
      break;
    case 13:
      if (((r = t.memoizedState), r !== null))
        return r.dehydrated !== null
          ? (I(V, V.current & 1), (t.flags |= 128), null)
          : n & t.child.childLanes
          ? Dd(e, t, n)
          : (I(V, V.current & 1),
            (e = pt(e, t, n)),
            e !== null ? e.sibling : null);
      I(V, V.current & 1);
      break;
    case 19:
      if (((r = (n & t.childLanes) !== 0), e.flags & 128)) {
        if (r) return $d(e, t, n);
        t.flags |= 128;
      }
      if (
        ((l = t.memoizedState),
        l !== null &&
          ((l.rendering = null), (l.tail = null), (l.lastEffect = null)),
        I(V, V.current),
        r)
      )
        break;
      return null;
    case 22:
    case 23:
      return (t.lanes = 0), Fd(e, t, n);
  }
  return pt(e, t, n);
}
var Bd, Ki, Hd, Vd;
Bd = function (e, t) {
  for (var n = t.child; n !== null; ) {
    if (n.tag === 5 || n.tag === 6) e.appendChild(n.stateNode);
    else if (n.tag !== 4 && n.child !== null) {
      (n.child.return = n), (n = n.child);
      continue;
    }
    if (n === t) break;
    for (; n.sibling === null; ) {
      if (n.return === null || n.return === t) return;
      n = n.return;
    }
    (n.sibling.return = n.return), (n = n.sibling);
  }
};
Ki = function () {};
Hd = function (e, t, n, r) {
  var l = e.memoizedProps;
  if (l !== r) {
    (e = t.stateNode), Vt(Xe.current);
    var o = null;
    switch (n) {
      case "input":
        (l = mi(e, l)), (r = mi(e, r)), (o = []);
        break;
      case "select":
        (l = Q({}, l, { value: void 0 })),
          (r = Q({}, r, { value: void 0 })),
          (o = []);
        break;
      case "textarea":
        (l = yi(e, l)), (r = yi(e, r)), (o = []);
        break;
      default:
        typeof l.onClick != "function" &&
          typeof r.onClick == "function" &&
          (e.onclick = Ul);
    }
    wi(n, r);
    var i;
    n = null;
    for (c in l)
      if (!r.hasOwnProperty(c) && l.hasOwnProperty(c) && l[c] != null)
        if (c === "style") {
          var a = l[c];
          for (i in a) a.hasOwnProperty(i) && (n || (n = {}), (n[i] = ""));
        } else
          c !== "dangerouslySetInnerHTML" &&
            c !== "children" &&
            c !== "suppressContentEditableWarning" &&
            c !== "suppressHydrationWarning" &&
            c !== "autoFocus" &&
            (ur.hasOwnProperty(c)
              ? o || (o = [])
              : (o = o || []).push(c, null));
    for (c in r) {
      var s = r[c];
      if (
        ((a = l != null ? l[c] : void 0),
        r.hasOwnProperty(c) && s !== a && (s != null || a != null))
      )
        if (c === "style")
          if (a) {
            for (i in a)
              !a.hasOwnProperty(i) ||
                (s && s.hasOwnProperty(i)) ||
                (n || (n = {}), (n[i] = ""));
            for (i in s)
              s.hasOwnProperty(i) &&
                a[i] !== s[i] &&
                (n || (n = {}), (n[i] = s[i]));
          } else n || (o || (o = []), o.push(c, n)), (n = s);
        else
          c === "dangerouslySetInnerHTML"
            ? ((s = s ? s.__html : void 0),
              (a = a ? a.__html : void 0),
              s != null && a !== s && (o = o || []).push(c, s))
            : c === "children"
            ? (typeof s != "string" && typeof s != "number") ||
              (o = o || []).push(c, "" + s)
            : c !== "suppressContentEditableWarning" &&
              c !== "suppressHydrationWarning" &&
              (ur.hasOwnProperty(c)
                ? (s != null && c === "onScroll" && D("scroll", e),
                  o || a === s || (o = []))
                : (o = o || []).push(c, s));
    }
    n && (o = o || []).push("style", n);
    var c = o;
    (t.updateQueue = c) && (t.flags |= 4);
  }
};
Vd = function (e, t, n, r) {
  n !== r && (t.flags |= 4);
};
function Kn(e, t) {
  if (!B)
    switch (e.tailMode) {
      case "hidden":
        t = e.tail;
        for (var n = null; t !== null; )
          t.alternate !== null && (n = t), (t = t.sibling);
        n === null ? (e.tail = null) : (n.sibling = null);
        break;
      case "collapsed":
        n = e.tail;
        for (var r = null; n !== null; )
          n.alternate !== null && (r = n), (n = n.sibling);
        r === null
          ? t || e.tail === null
            ? (e.tail = null)
            : (e.tail.sibling = null)
          : (r.sibling = null);
    }
}
function ae(e) {
  var t = e.alternate !== null && e.alternate.child === e.child,
    n = 0,
    r = 0;
  if (t)
    for (var l = e.child; l !== null; )
      (n |= l.lanes | l.childLanes),
        (r |= l.subtreeFlags & 14680064),
        (r |= l.flags & 14680064),
        (l.return = e),
        (l = l.sibling);
  else
    for (l = e.child; l !== null; )
      (n |= l.lanes | l.childLanes),
        (r |= l.subtreeFlags),
        (r |= l.flags),
        (l.return = e),
        (l = l.sibling);
  return (e.subtreeFlags |= r), (e.childLanes = n), t;
}
function sh(e, t, n) {
  var r = t.pendingProps;
  switch ((Ts(t), t.tag)) {
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
      return ae(t), null;
    case 1:
      return xe(t.type) && zl(), ae(t), null;
    case 3:
      return (
        (r = t.stateNode),
        _n(),
        $(we),
        $(de),
        Is(),
        r.pendingContext &&
          ((r.context = r.pendingContext), (r.pendingContext = null)),
        (e === null || e.child === null) &&
          (Zr(t)
            ? (t.flags |= 4)
            : e === null ||
              (e.memoizedState.isDehydrated && !(t.flags & 256)) ||
              ((t.flags |= 1024), Ie !== null && (es(Ie), (Ie = null)))),
        Ki(e, t),
        ae(t),
        null
      );
    case 5:
      As(t);
      var l = Vt(kr.current);
      if (((n = t.type), e !== null && t.stateNode != null))
        Hd(e, t, n, r, l),
          e.ref !== t.ref && ((t.flags |= 512), (t.flags |= 2097152));
      else {
        if (!r) {
          if (t.stateNode === null) throw Error(C(166));
          return ae(t), null;
        }
        if (((e = Vt(Xe.current)), Zr(t))) {
          (r = t.stateNode), (n = t.type);
          var o = t.memoizedProps;
          switch (((r[Je] = t), (r[wr] = o), (e = (t.mode & 1) !== 0), n)) {
            case "dialog":
              D("cancel", r), D("close", r);
              break;
            case "iframe":
            case "object":
            case "embed":
              D("load", r);
              break;
            case "video":
            case "audio":
              for (l = 0; l < Zn.length; l++) D(Zn[l], r);
              break;
            case "source":
              D("error", r);
              break;
            case "img":
            case "image":
            case "link":
              D("error", r), D("load", r);
              break;
            case "details":
              D("toggle", r);
              break;
            case "input":
              Na(r, o), D("invalid", r);
              break;
            case "select":
              (r._wrapperState = { wasMultiple: !!o.multiple }),
                D("invalid", r);
              break;
            case "textarea":
              ja(r, o), D("invalid", r);
          }
          wi(n, o), (l = null);
          for (var i in o)
            if (o.hasOwnProperty(i)) {
              var a = o[i];
              i === "children"
                ? typeof a == "string"
                  ? r.textContent !== a &&
                    (o.suppressHydrationWarning !== !0 &&
                      Xr(r.textContent, a, e),
                    (l = ["children", a]))
                  : typeof a == "number" &&
                    r.textContent !== "" + a &&
                    (o.suppressHydrationWarning !== !0 &&
                      Xr(r.textContent, a, e),
                    (l = ["children", "" + a]))
                : ur.hasOwnProperty(i) &&
                  a != null &&
                  i === "onScroll" &&
                  D("scroll", r);
            }
          switch (n) {
            case "input":
              Vr(r), Ca(r, o, !0);
              break;
            case "textarea":
              Vr(r), Ra(r);
              break;
            case "select":
            case "option":
              break;
            default:
              typeof o.onClick == "function" && (r.onclick = Ul);
          }
          (r = l), (t.updateQueue = r), r !== null && (t.flags |= 4);
        } else {
          (i = l.nodeType === 9 ? l : l.ownerDocument),
            e === "http://www.w3.org/1999/xhtml" && (e = vc(n)),
            e === "http://www.w3.org/1999/xhtml"
              ? n === "script"
                ? ((e = i.createElement("div")),
                  (e.innerHTML = "<script></script>"),
                  (e = e.removeChild(e.firstChild)))
                : typeof r.is == "string"
                ? (e = i.createElement(n, { is: r.is }))
                : ((e = i.createElement(n)),
                  n === "select" &&
                    ((i = e),
                    r.multiple
                      ? (i.multiple = !0)
                      : r.size && (i.size = r.size)))
              : (e = i.createElementNS(e, n)),
            (e[Je] = t),
            (e[wr] = r),
            Bd(e, t, !1, !1),
            (t.stateNode = e);
          e: {
            switch (((i = xi(n, r)), n)) {
              case "dialog":
                D("cancel", e), D("close", e), (l = r);
                break;
              case "iframe":
              case "object":
              case "embed":
                D("load", e), (l = r);
                break;
              case "video":
              case "audio":
                for (l = 0; l < Zn.length; l++) D(Zn[l], e);
                l = r;
                break;
              case "source":
                D("error", e), (l = r);
                break;
              case "img":
              case "image":
              case "link":
                D("error", e), D("load", e), (l = r);
                break;
              case "details":
                D("toggle", e), (l = r);
                break;
              case "input":
                Na(e, r), (l = mi(e, r)), D("invalid", e);
                break;
              case "option":
                l = r;
                break;
              case "select":
                (e._wrapperState = { wasMultiple: !!r.multiple }),
                  (l = Q({}, r, { value: void 0 })),
                  D("invalid", e);
                break;
              case "textarea":
                ja(e, r), (l = yi(e, r)), D("invalid", e);
                break;
              default:
                l = r;
            }
            wi(n, l), (a = l);
            for (o in a)
              if (a.hasOwnProperty(o)) {
                var s = a[o];
                o === "style"
                  ? kc(e, s)
                  : o === "dangerouslySetInnerHTML"
                  ? ((s = s ? s.__html : void 0), s != null && wc(e, s))
                  : o === "children"
                  ? typeof s == "string"
                    ? (n !== "textarea" || s !== "") && cr(e, s)
                    : typeof s == "number" && cr(e, "" + s)
                  : o !== "suppressContentEditableWarning" &&
                    o !== "suppressHydrationWarning" &&
                    o !== "autoFocus" &&
                    (ur.hasOwnProperty(o)
                      ? s != null && o === "onScroll" && D("scroll", e)
                      : s != null && hs(e, o, s, i));
              }
            switch (n) {
              case "input":
                Vr(e), Ca(e, r, !1);
                break;
              case "textarea":
                Vr(e), Ra(e);
                break;
              case "option":
                r.value != null && e.setAttribute("value", "" + Lt(r.value));
                break;
              case "select":
                (e.multiple = !!r.multiple),
                  (o = r.value),
                  o != null
                    ? wn(e, !!r.multiple, o, !1)
                    : r.defaultValue != null &&
                      wn(e, !!r.multiple, r.defaultValue, !0);
                break;
              default:
                typeof l.onClick == "function" && (e.onclick = Ul);
            }
            switch (n) {
              case "button":
              case "input":
              case "select":
              case "textarea":
                r = !!r.autoFocus;
                break e;
              case "img":
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
      return ae(t), null;
    case 6:
      if (e && t.stateNode != null) Vd(e, t, e.memoizedProps, r);
      else {
        if (typeof r != "string" && t.stateNode === null) throw Error(C(166));
        if (((n = Vt(kr.current)), Vt(Xe.current), Zr(t))) {
          if (
            ((r = t.stateNode),
            (n = t.memoizedProps),
            (r[Je] = t),
            (o = r.nodeValue !== n) && ((e = je), e !== null))
          )
            switch (e.tag) {
              case 3:
                Xr(r.nodeValue, n, (e.mode & 1) !== 0);
                break;
              case 5:
                e.memoizedProps.suppressHydrationWarning !== !0 &&
                  Xr(r.nodeValue, n, (e.mode & 1) !== 0);
            }
          o && (t.flags |= 4);
        } else
          (r = (n.nodeType === 9 ? n : n.ownerDocument).createTextNode(r)),
            (r[Je] = t),
            (t.stateNode = r);
      }
      return ae(t), null;
    case 13:
      if (
        ($(V),
        (r = t.memoizedState),
        e === null ||
          (e.memoizedState !== null && e.memoizedState.dehydrated !== null))
      ) {
        if (B && Ce !== null && t.mode & 1 && !(t.flags & 128))
          ad(), Rn(), (t.flags |= 98560), (o = !1);
        else if (((o = Zr(t)), r !== null && r.dehydrated !== null)) {
          if (e === null) {
            if (!o) throw Error(C(318));
            if (
              ((o = t.memoizedState),
              (o = o !== null ? o.dehydrated : null),
              !o)
            )
              throw Error(C(317));
            o[Je] = t;
          } else
            Rn(), !(t.flags & 128) && (t.memoizedState = null), (t.flags |= 4);
          ae(t), (o = !1);
        } else Ie !== null && (es(Ie), (Ie = null)), (o = !0);
        if (!o) return t.flags & 65536 ? t : null;
      }
      return t.flags & 128
        ? ((t.lanes = n), t)
        : ((r = r !== null),
          r !== (e !== null && e.memoizedState !== null) &&
            r &&
            ((t.child.flags |= 8192),
            t.mode & 1 &&
              (e === null || V.current & 1 ? ee === 0 && (ee = 3) : Gs())),
          t.updateQueue !== null && (t.flags |= 4),
          ae(t),
          null);
    case 4:
      return (
        _n(), Ki(e, t), e === null && yr(t.stateNode.containerInfo), ae(t), null
      );
    case 10:
      return Us(t.type._context), ae(t), null;
    case 17:
      return xe(t.type) && zl(), ae(t), null;
    case 19:
      if (($(V), (o = t.memoizedState), o === null)) return ae(t), null;
      if (((r = (t.flags & 128) !== 0), (i = o.rendering), i === null))
        if (r) Kn(o, !1);
        else {
          if (ee !== 0 || (e !== null && e.flags & 128))
            for (e = t.child; e !== null; ) {
              if (((i = Bl(e)), i !== null)) {
                for (
                  t.flags |= 128,
                    Kn(o, !1),
                    r = i.updateQueue,
                    r !== null && ((t.updateQueue = r), (t.flags |= 4)),
                    t.subtreeFlags = 0,
                    r = n,
                    n = t.child;
                  n !== null;

                )
                  (o = n),
                    (e = r),
                    (o.flags &= 14680066),
                    (i = o.alternate),
                    i === null
                      ? ((o.childLanes = 0),
                        (o.lanes = e),
                        (o.child = null),
                        (o.subtreeFlags = 0),
                        (o.memoizedProps = null),
                        (o.memoizedState = null),
                        (o.updateQueue = null),
                        (o.dependencies = null),
                        (o.stateNode = null))
                      : ((o.childLanes = i.childLanes),
                        (o.lanes = i.lanes),
                        (o.child = i.child),
                        (o.subtreeFlags = 0),
                        (o.deletions = null),
                        (o.memoizedProps = i.memoizedProps),
                        (o.memoizedState = i.memoizedState),
                        (o.updateQueue = i.updateQueue),
                        (o.type = i.type),
                        (e = i.dependencies),
                        (o.dependencies =
                          e === null
                            ? null
                            : {
                                lanes: e.lanes,
                                firstContext: e.firstContext,
                              })),
                    (n = n.sibling);
                return I(V, (V.current & 1) | 2), t.child;
              }
              e = e.sibling;
            }
          o.tail !== null &&
            q() > Ln &&
            ((t.flags |= 128), (r = !0), Kn(o, !1), (t.lanes = 4194304));
        }
      else {
        if (!r)
          if (((e = Bl(i)), e !== null)) {
            if (
              ((t.flags |= 128),
              (r = !0),
              (n = e.updateQueue),
              n !== null && ((t.updateQueue = n), (t.flags |= 4)),
              Kn(o, !0),
              o.tail === null && o.tailMode === "hidden" && !i.alternate && !B)
            )
              return ae(t), null;
          } else
            2 * q() - o.renderingStartTime > Ln &&
              n !== 1073741824 &&
              ((t.flags |= 128), (r = !0), Kn(o, !1), (t.lanes = 4194304));
        o.isBackwards
          ? ((i.sibling = t.child), (t.child = i))
          : ((n = o.last),
            n !== null ? (n.sibling = i) : (t.child = i),
            (o.last = i));
      }
      return o.tail !== null
        ? ((t = o.tail),
          (o.rendering = t),
          (o.tail = t.sibling),
          (o.renderingStartTime = q()),
          (t.sibling = null),
          (n = V.current),
          I(V, r ? (n & 1) | 2 : n & 1),
          t)
        : (ae(t), null);
    case 22:
    case 23:
      return (
        qs(),
        (r = t.memoizedState !== null),
        e !== null && (e.memoizedState !== null) !== r && (t.flags |= 8192),
        r && t.mode & 1
          ? Ne & 1073741824 && (ae(t), t.subtreeFlags & 6 && (t.flags |= 8192))
          : ae(t),
        null
      );
    case 24:
      return null;
    case 25:
      return null;
  }
  throw Error(C(156, t.tag));
}
function ah(e, t) {
  switch ((Ts(t), t.tag)) {
    case 1:
      return (
        xe(t.type) && zl(),
        (e = t.flags),
        e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null
      );
    case 3:
      return (
        _n(),
        $(we),
        $(de),
        Is(),
        (e = t.flags),
        e & 65536 && !(e & 128) ? ((t.flags = (e & -65537) | 128), t) : null
      );
    case 5:
      return As(t), null;
    case 13:
      if (($(V), (e = t.memoizedState), e !== null && e.dehydrated !== null)) {
        if (t.alternate === null) throw Error(C(340));
        Rn();
      }
      return (
        (e = t.flags), e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null
      );
    case 19:
      return $(V), null;
    case 4:
      return _n(), null;
    case 10:
      return Us(t.type._context), null;
    case 22:
    case 23:
      return qs(), null;
    case 24:
      return null;
    default:
      return null;
  }
}
var nl = !1,
  ue = !1,
  uh = typeof WeakSet == "function" ? WeakSet : Set,
  P = null;
function yn(e, t) {
  var n = e.ref;
  if (n !== null)
    if (typeof n == "function")
      try {
        n(null);
      } catch (r) {
        Y(e, t, r);
      }
    else n.current = null;
}
function Qi(e, t, n) {
  try {
    n();
  } catch (r) {
    Y(e, t, r);
  }
}
var gu = !1;
function ch(e, t) {
  if (((Ti = Ll), (e = Jc()), Ps(e))) {
    if ("selectionStart" in e)
      var n = { start: e.selectionStart, end: e.selectionEnd };
    else
      e: {
        n = ((n = e.ownerDocument) && n.defaultView) || window;
        var r = n.getSelection && n.getSelection();
        if (r && r.rangeCount !== 0) {
          n = r.anchorNode;
          var l = r.anchorOffset,
            o = r.focusNode;
          r = r.focusOffset;
          try {
            n.nodeType, o.nodeType;
          } catch {
            n = null;
            break e;
          }
          var i = 0,
            a = -1,
            s = -1,
            c = 0,
            p = 0,
            m = e,
            y = null;
          t: for (;;) {
            for (
              var x;
              m !== n || (l !== 0 && m.nodeType !== 3) || (a = i + l),
                m !== o || (r !== 0 && m.nodeType !== 3) || (s = i + r),
                m.nodeType === 3 && (i += m.nodeValue.length),
                (x = m.firstChild) !== null;

            )
              (y = m), (m = x);
            for (;;) {
              if (m === e) break t;
              if (
                (y === n && ++c === l && (a = i),
                y === o && ++p === r && (s = i),
                (x = m.nextSibling) !== null)
              )
                break;
              (m = y), (y = m.parentNode);
            }
            m = x;
          }
          n = a === -1 || s === -1 ? null : { start: a, end: s };
        } else n = null;
      }
    n = n || { start: 0, end: 0 };
  } else n = null;
  for (Li = { focusedElem: e, selectionRange: n }, Ll = !1, P = t; P !== null; )
    if (((t = P), (e = t.child), (t.subtreeFlags & 1028) !== 0 && e !== null))
      (e.return = t), (P = e);
    else
      for (; P !== null; ) {
        t = P;
        try {
          var w = t.alternate;
          if (t.flags & 1024)
            switch (t.tag) {
              case 0:
              case 11:
              case 15:
                break;
              case 1:
                if (w !== null) {
                  var v = w.memoizedProps,
                    h = w.memoizedState,
                    f = t.stateNode,
                    d = f.getSnapshotBeforeUpdate(
                      t.elementType === t.type ? v : Fe(t.type, v),
                      h
                    );
                  f.__reactInternalSnapshotBeforeUpdate = d;
                }
                break;
              case 3:
                var g = t.stateNode.containerInfo;
                g.nodeType === 1
                  ? (g.textContent = "")
                  : g.nodeType === 9 &&
                    g.documentElement &&
                    g.removeChild(g.documentElement);
                break;
              case 5:
              case 6:
              case 4:
              case 17:
                break;
              default:
                throw Error(C(163));
            }
        } catch (E) {
          Y(t, t.return, E);
        }
        if (((e = t.sibling), e !== null)) {
          (e.return = t.return), (P = e);
          break;
        }
        P = t.return;
      }
  return (w = gu), (gu = !1), w;
}
function ir(e, t, n) {
  var r = t.updateQueue;
  if (((r = r !== null ? r.lastEffect : null), r !== null)) {
    var l = (r = r.next);
    do {
      if ((l.tag & e) === e) {
        var o = l.destroy;
        (l.destroy = void 0), o !== void 0 && Qi(t, n, o);
      }
      l = l.next;
    } while (l !== r);
  }
}
function uo(e, t) {
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
function Yi(e) {
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
    typeof t == "function" ? t(e) : (t.current = e);
  }
}
function Wd(e) {
  var t = e.alternate;
  t !== null && ((e.alternate = null), Wd(t)),
    (e.child = null),
    (e.deletions = null),
    (e.sibling = null),
    e.tag === 5 &&
      ((t = e.stateNode),
      t !== null &&
        (delete t[Je], delete t[wr], delete t[Ui], delete t[Km], delete t[Qm])),
    (e.stateNode = null),
    (e.return = null),
    (e.dependencies = null),
    (e.memoizedProps = null),
    (e.memoizedState = null),
    (e.pendingProps = null),
    (e.stateNode = null),
    (e.updateQueue = null);
}
function Kd(e) {
  return e.tag === 5 || e.tag === 3 || e.tag === 4;
}
function yu(e) {
  e: for (;;) {
    for (; e.sibling === null; ) {
      if (e.return === null || Kd(e.return)) return null;
      e = e.return;
    }
    for (
      e.sibling.return = e.return, e = e.sibling;
      e.tag !== 5 && e.tag !== 6 && e.tag !== 18;

    ) {
      if (e.flags & 2 || e.child === null || e.tag === 4) continue e;
      (e.child.return = e), (e = e.child);
    }
    if (!(e.flags & 2)) return e.stateNode;
  }
}
function Ji(e, t, n) {
  var r = e.tag;
  if (r === 5 || r === 6)
    (e = e.stateNode),
      t
        ? n.nodeType === 8
          ? n.parentNode.insertBefore(e, t)
          : n.insertBefore(e, t)
        : (n.nodeType === 8
            ? ((t = n.parentNode), t.insertBefore(e, n))
            : ((t = n), t.appendChild(e)),
          (n = n._reactRootContainer),
          n != null || t.onclick !== null || (t.onclick = Ul));
  else if (r !== 4 && ((e = e.child), e !== null))
    for (Ji(e, t, n), e = e.sibling; e !== null; ) Ji(e, t, n), (e = e.sibling);
}
function qi(e, t, n) {
  var r = e.tag;
  if (r === 5 || r === 6)
    (e = e.stateNode), t ? n.insertBefore(e, t) : n.appendChild(e);
  else if (r !== 4 && ((e = e.child), e !== null))
    for (qi(e, t, n), e = e.sibling; e !== null; ) qi(e, t, n), (e = e.sibling);
}
var le = null,
  Ae = !1;
function gt(e, t, n) {
  for (n = n.child; n !== null; ) Qd(e, t, n), (n = n.sibling);
}
function Qd(e, t, n) {
  if (Ge && typeof Ge.onCommitFiberUnmount == "function")
    try {
      Ge.onCommitFiberUnmount(to, n);
    } catch {}
  switch (n.tag) {
    case 5:
      ue || yn(n, t);
    case 6:
      var r = le,
        l = Ae;
      (le = null),
        gt(e, t, n),
        (le = r),
        (Ae = l),
        le !== null &&
          (Ae
            ? ((e = le),
              (n = n.stateNode),
              e.nodeType === 8 ? e.parentNode.removeChild(n) : e.removeChild(n))
            : le.removeChild(n.stateNode));
      break;
    case 18:
      le !== null &&
        (Ae
          ? ((e = le),
            (n = n.stateNode),
            e.nodeType === 8
              ? Ko(e.parentNode, n)
              : e.nodeType === 1 && Ko(e, n),
            mr(e))
          : Ko(le, n.stateNode));
      break;
    case 4:
      (r = le),
        (l = Ae),
        (le = n.stateNode.containerInfo),
        (Ae = !0),
        gt(e, t, n),
        (le = r),
        (Ae = l);
      break;
    case 0:
    case 11:
    case 14:
    case 15:
      if (
        !ue &&
        ((r = n.updateQueue), r !== null && ((r = r.lastEffect), r !== null))
      ) {
        l = r = r.next;
        do {
          var o = l,
            i = o.destroy;
          (o = o.tag),
            i !== void 0 && (o & 2 || o & 4) && Qi(n, t, i),
            (l = l.next);
        } while (l !== r);
      }
      gt(e, t, n);
      break;
    case 1:
      if (
        !ue &&
        (yn(n, t),
        (r = n.stateNode),
        typeof r.componentWillUnmount == "function")
      )
        try {
          (r.props = n.memoizedProps),
            (r.state = n.memoizedState),
            r.componentWillUnmount();
        } catch (a) {
          Y(n, t, a);
        }
      gt(e, t, n);
      break;
    case 21:
      gt(e, t, n);
      break;
    case 22:
      n.mode & 1
        ? ((ue = (r = ue) || n.memoizedState !== null), gt(e, t, n), (ue = r))
        : gt(e, t, n);
      break;
    default:
      gt(e, t, n);
  }
}
function vu(e) {
  var t = e.updateQueue;
  if (t !== null) {
    e.updateQueue = null;
    var n = e.stateNode;
    n === null && (n = e.stateNode = new uh()),
      t.forEach(function (r) {
        var l = wh.bind(null, e, r);
        n.has(r) || (n.add(r), r.then(l, l));
      });
  }
}
function Me(e, t) {
  var n = t.deletions;
  if (n !== null)
    for (var r = 0; r < n.length; r++) {
      var l = n[r];
      try {
        var o = e,
          i = t,
          a = i;
        e: for (; a !== null; ) {
          switch (a.tag) {
            case 5:
              (le = a.stateNode), (Ae = !1);
              break e;
            case 3:
              (le = a.stateNode.containerInfo), (Ae = !0);
              break e;
            case 4:
              (le = a.stateNode.containerInfo), (Ae = !0);
              break e;
          }
          a = a.return;
        }
        if (le === null) throw Error(C(160));
        Qd(o, i, l), (le = null), (Ae = !1);
        var s = l.alternate;
        s !== null && (s.return = null), (l.return = null);
      } catch (c) {
        Y(l, t, c);
      }
    }
  if (t.subtreeFlags & 12854)
    for (t = t.child; t !== null; ) Yd(t, e), (t = t.sibling);
}
function Yd(e, t) {
  var n = e.alternate,
    r = e.flags;
  switch (e.tag) {
    case 0:
    case 11:
    case 14:
    case 15:
      if ((Me(t, e), We(e), r & 4)) {
        try {
          ir(3, e, e.return), uo(3, e);
        } catch (v) {
          Y(e, e.return, v);
        }
        try {
          ir(5, e, e.return);
        } catch (v) {
          Y(e, e.return, v);
        }
      }
      break;
    case 1:
      Me(t, e), We(e), r & 512 && n !== null && yn(n, n.return);
      break;
    case 5:
      if (
        (Me(t, e),
        We(e),
        r & 512 && n !== null && yn(n, n.return),
        e.flags & 32)
      ) {
        var l = e.stateNode;
        try {
          cr(l, "");
        } catch (v) {
          Y(e, e.return, v);
        }
      }
      if (r & 4 && ((l = e.stateNode), l != null)) {
        var o = e.memoizedProps,
          i = n !== null ? n.memoizedProps : o,
          a = e.type,
          s = e.updateQueue;
        if (((e.updateQueue = null), s !== null))
          try {
            a === "input" && o.type === "radio" && o.name != null && gc(l, o),
              xi(a, i);
            var c = xi(a, o);
            for (i = 0; i < s.length; i += 2) {
              var p = s[i],
                m = s[i + 1];
              p === "style"
                ? kc(l, m)
                : p === "dangerouslySetInnerHTML"
                ? wc(l, m)
                : p === "children"
                ? cr(l, m)
                : hs(l, p, m, c);
            }
            switch (a) {
              case "input":
                hi(l, o);
                break;
              case "textarea":
                yc(l, o);
                break;
              case "select":
                var y = l._wrapperState.wasMultiple;
                l._wrapperState.wasMultiple = !!o.multiple;
                var x = o.value;
                x != null
                  ? wn(l, !!o.multiple, x, !1)
                  : y !== !!o.multiple &&
                    (o.defaultValue != null
                      ? wn(l, !!o.multiple, o.defaultValue, !0)
                      : wn(l, !!o.multiple, o.multiple ? [] : "", !1));
            }
            l[wr] = o;
          } catch (v) {
            Y(e, e.return, v);
          }
      }
      break;
    case 6:
      if ((Me(t, e), We(e), r & 4)) {
        if (e.stateNode === null) throw Error(C(162));
        (l = e.stateNode), (o = e.memoizedProps);
        try {
          l.nodeValue = o;
        } catch (v) {
          Y(e, e.return, v);
        }
      }
      break;
    case 3:
      if (
        (Me(t, e), We(e), r & 4 && n !== null && n.memoizedState.isDehydrated)
      )
        try {
          mr(t.containerInfo);
        } catch (v) {
          Y(e, e.return, v);
        }
      break;
    case 4:
      Me(t, e), We(e);
      break;
    case 13:
      Me(t, e),
        We(e),
        (l = e.child),
        l.flags & 8192 &&
          ((o = l.memoizedState !== null),
          (l.stateNode.isHidden = o),
          !o ||
            (l.alternate !== null && l.alternate.memoizedState !== null) ||
            (Ys = q())),
        r & 4 && vu(e);
      break;
    case 22:
      if (
        ((p = n !== null && n.memoizedState !== null),
        e.mode & 1 ? ((ue = (c = ue) || p), Me(t, e), (ue = c)) : Me(t, e),
        We(e),
        r & 8192)
      ) {
        if (
          ((c = e.memoizedState !== null),
          (e.stateNode.isHidden = c) && !p && e.mode & 1)
        )
          for (P = e, p = e.child; p !== null; ) {
            for (m = P = p; P !== null; ) {
              switch (((y = P), (x = y.child), y.tag)) {
                case 0:
                case 11:
                case 14:
                case 15:
                  ir(4, y, y.return);
                  break;
                case 1:
                  yn(y, y.return);
                  var w = y.stateNode;
                  if (typeof w.componentWillUnmount == "function") {
                    (r = y), (n = y.return);
                    try {
                      (t = r),
                        (w.props = t.memoizedProps),
                        (w.state = t.memoizedState),
                        w.componentWillUnmount();
                    } catch (v) {
                      Y(r, n, v);
                    }
                  }
                  break;
                case 5:
                  yn(y, y.return);
                  break;
                case 22:
                  if (y.memoizedState !== null) {
                    xu(m);
                    continue;
                  }
              }
              x !== null ? ((x.return = y), (P = x)) : xu(m);
            }
            p = p.sibling;
          }
        e: for (p = null, m = e; ; ) {
          if (m.tag === 5) {
            if (p === null) {
              p = m;
              try {
                (l = m.stateNode),
                  c
                    ? ((o = l.style),
                      typeof o.setProperty == "function"
                        ? o.setProperty("display", "none", "important")
                        : (o.display = "none"))
                    : ((a = m.stateNode),
                      (s = m.memoizedProps.style),
                      (i =
                        s != null && s.hasOwnProperty("display")
                          ? s.display
                          : null),
                      (a.style.display = xc("display", i)));
              } catch (v) {
                Y(e, e.return, v);
              }
            }
          } else if (m.tag === 6) {
            if (p === null)
              try {
                m.stateNode.nodeValue = c ? "" : m.memoizedProps;
              } catch (v) {
                Y(e, e.return, v);
              }
          } else if (
            ((m.tag !== 22 && m.tag !== 23) ||
              m.memoizedState === null ||
              m === e) &&
            m.child !== null
          ) {
            (m.child.return = m), (m = m.child);
            continue;
          }
          if (m === e) break e;
          for (; m.sibling === null; ) {
            if (m.return === null || m.return === e) break e;
            p === m && (p = null), (m = m.return);
          }
          p === m && (p = null), (m.sibling.return = m.return), (m = m.sibling);
        }
      }
      break;
    case 19:
      Me(t, e), We(e), r & 4 && vu(e);
      break;
    case 21:
      break;
    default:
      Me(t, e), We(e);
  }
}
function We(e) {
  var t = e.flags;
  if (t & 2) {
    try {
      e: {
        for (var n = e.return; n !== null; ) {
          if (Kd(n)) {
            var r = n;
            break e;
          }
          n = n.return;
        }
        throw Error(C(160));
      }
      switch (r.tag) {
        case 5:
          var l = r.stateNode;
          r.flags & 32 && (cr(l, ""), (r.flags &= -33));
          var o = yu(e);
          qi(e, o, l);
          break;
        case 3:
        case 4:
          var i = r.stateNode.containerInfo,
            a = yu(e);
          Ji(e, a, i);
          break;
        default:
          throw Error(C(161));
      }
    } catch (s) {
      Y(e, e.return, s);
    }
    e.flags &= -3;
  }
  t & 4096 && (e.flags &= -4097);
}
function dh(e, t, n) {
  (P = e), Jd(e);
}
function Jd(e, t, n) {
  for (var r = (e.mode & 1) !== 0; P !== null; ) {
    var l = P,
      o = l.child;
    if (l.tag === 22 && r) {
      var i = l.memoizedState !== null || nl;
      if (!i) {
        var a = l.alternate,
          s = (a !== null && a.memoizedState !== null) || ue;
        a = nl;
        var c = ue;
        if (((nl = i), (ue = s) && !c))
          for (P = l; P !== null; )
            (i = P),
              (s = i.child),
              i.tag === 22 && i.memoizedState !== null
                ? ku(l)
                : s !== null
                ? ((s.return = i), (P = s))
                : ku(l);
        for (; o !== null; ) (P = o), Jd(o), (o = o.sibling);
        (P = l), (nl = a), (ue = c);
      }
      wu(e);
    } else
      l.subtreeFlags & 8772 && o !== null ? ((o.return = l), (P = o)) : wu(e);
  }
}
function wu(e) {
  for (; P !== null; ) {
    var t = P;
    if (t.flags & 8772) {
      var n = t.alternate;
      try {
        if (t.flags & 8772)
          switch (t.tag) {
            case 0:
            case 11:
            case 15:
              ue || uo(5, t);
              break;
            case 1:
              var r = t.stateNode;
              if (t.flags & 4 && !ue)
                if (n === null) r.componentDidMount();
                else {
                  var l =
                    t.elementType === t.type
                      ? n.memoizedProps
                      : Fe(t.type, n.memoizedProps);
                  r.componentDidUpdate(
                    l,
                    n.memoizedState,
                    r.__reactInternalSnapshotBeforeUpdate
                  );
                }
              var o = t.updateQueue;
              o !== null && ru(t, o, r);
              break;
            case 3:
              var i = t.updateQueue;
              if (i !== null) {
                if (((n = null), t.child !== null))
                  switch (t.child.tag) {
                    case 5:
                      n = t.child.stateNode;
                      break;
                    case 1:
                      n = t.child.stateNode;
                  }
                ru(t, i, n);
              }
              break;
            case 5:
              var a = t.stateNode;
              if (n === null && t.flags & 4) {
                n = a;
                var s = t.memoizedProps;
                switch (t.type) {
                  case "button":
                  case "input":
                  case "select":
                  case "textarea":
                    s.autoFocus && n.focus();
                    break;
                  case "img":
                    s.src && (n.src = s.src);
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
                var c = t.alternate;
                if (c !== null) {
                  var p = c.memoizedState;
                  if (p !== null) {
                    var m = p.dehydrated;
                    m !== null && mr(m);
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
              throw Error(C(163));
          }
        ue || (t.flags & 512 && Yi(t));
      } catch (y) {
        Y(t, t.return, y);
      }
    }
    if (t === e) {
      P = null;
      break;
    }
    if (((n = t.sibling), n !== null)) {
      (n.return = t.return), (P = n);
      break;
    }
    P = t.return;
  }
}
function xu(e) {
  for (; P !== null; ) {
    var t = P;
    if (t === e) {
      P = null;
      break;
    }
    var n = t.sibling;
    if (n !== null) {
      (n.return = t.return), (P = n);
      break;
    }
    P = t.return;
  }
}
function ku(e) {
  for (; P !== null; ) {
    var t = P;
    try {
      switch (t.tag) {
        case 0:
        case 11:
        case 15:
          var n = t.return;
          try {
            uo(4, t);
          } catch (s) {
            Y(t, n, s);
          }
          break;
        case 1:
          var r = t.stateNode;
          if (typeof r.componentDidMount == "function") {
            var l = t.return;
            try {
              r.componentDidMount();
            } catch (s) {
              Y(t, l, s);
            }
          }
          var o = t.return;
          try {
            Yi(t);
          } catch (s) {
            Y(t, o, s);
          }
          break;
        case 5:
          var i = t.return;
          try {
            Yi(t);
          } catch (s) {
            Y(t, i, s);
          }
      }
    } catch (s) {
      Y(t, t.return, s);
    }
    if (t === e) {
      P = null;
      break;
    }
    var a = t.sibling;
    if (a !== null) {
      (a.return = t.return), (P = a);
      break;
    }
    P = t.return;
  }
}
var fh = Math.ceil,
  Wl = ht.ReactCurrentDispatcher,
  Ks = ht.ReactCurrentOwner,
  Oe = ht.ReactCurrentBatchConfig,
  F = 0,
  re = null,
  G = null,
  oe = 0,
  Ne = 0,
  vn = Ut(0),
  ee = 0,
  Cr = null,
  Xt = 0,
  co = 0,
  Qs = 0,
  sr = null,
  ye = null,
  Ys = 0,
  Ln = 1 / 0,
  rt = null,
  Kl = !1,
  Gi = null,
  Pt = null,
  rl = !1,
  St = null,
  Ql = 0,
  ar = 0,
  Xi = null,
  gl = -1,
  yl = 0;
function pe() {
  return F & 6 ? q() : gl !== -1 ? gl : (gl = q());
}
function _t(e) {
  return e.mode & 1
    ? F & 2 && oe !== 0
      ? oe & -oe
      : Jm.transition !== null
      ? (yl === 0 && (yl = Oc()), yl)
      : ((e = A),
        e !== 0 || ((e = window.event), (e = e === void 0 ? 16 : Dc(e.type))),
        e)
    : 1;
}
function $e(e, t, n, r) {
  if (50 < ar) throw ((ar = 0), (Xi = null), Error(C(185)));
  Tr(e, n, r),
    (!(F & 2) || e !== re) &&
      (e === re && (!(F & 2) && (co |= n), ee === 4 && xt(e, oe)),
      ke(e, r),
      n === 1 && F === 0 && !(t.mode & 1) && ((Ln = q() + 500), io && zt()));
}
function ke(e, t) {
  var n = e.callbackNode;
  Jp(e, t);
  var r = Tl(e, e === re ? oe : 0);
  if (r === 0)
    n !== null && Ta(n), (e.callbackNode = null), (e.callbackPriority = 0);
  else if (((t = r & -r), e.callbackPriority !== t)) {
    if ((n != null && Ta(n), t === 1))
      e.tag === 0 ? Ym(Su.bind(null, e)) : od(Su.bind(null, e)),
        Vm(function () {
          !(F & 6) && zt();
        }),
        (n = null);
    else {
      switch (Uc(r)) {
        case 1:
          n = xs;
          break;
        case 4:
          n = Lc;
          break;
        case 16:
          n = _l;
          break;
        case 536870912:
          n = bc;
          break;
        default:
          n = _l;
      }
      n = rf(n, qd.bind(null, e));
    }
    (e.callbackPriority = t), (e.callbackNode = n);
  }
}
function qd(e, t) {
  if (((gl = -1), (yl = 0), F & 6)) throw Error(C(327));
  var n = e.callbackNode;
  if (Nn() && e.callbackNode !== n) return null;
  var r = Tl(e, e === re ? oe : 0);
  if (r === 0) return null;
  if (r & 30 || r & e.expiredLanes || t) t = Yl(e, r);
  else {
    t = r;
    var l = F;
    F |= 2;
    var o = Xd();
    (re !== e || oe !== t) && ((rt = null), (Ln = q() + 500), Kt(e, t));
    do
      try {
        hh();
        break;
      } catch (a) {
        Gd(e, a);
      }
    while (!0);
    Os(),
      (Wl.current = o),
      (F = l),
      G !== null ? (t = 0) : ((re = null), (oe = 0), (t = ee));
  }
  if (t !== 0) {
    if (
      (t === 2 && ((l = Ci(e)), l !== 0 && ((r = l), (t = Zi(e, l)))), t === 1)
    )
      throw ((n = Cr), Kt(e, 0), xt(e, r), ke(e, q()), n);
    if (t === 6) xt(e, r);
    else {
      if (
        ((l = e.current.alternate),
        !(r & 30) &&
          !ph(l) &&
          ((t = Yl(e, r)),
          t === 2 && ((o = Ci(e)), o !== 0 && ((r = o), (t = Zi(e, o)))),
          t === 1))
      )
        throw ((n = Cr), Kt(e, 0), xt(e, r), ke(e, q()), n);
      switch (((e.finishedWork = l), (e.finishedLanes = r), t)) {
        case 0:
        case 1:
          throw Error(C(345));
        case 2:
          $t(e, ye, rt);
          break;
        case 3:
          if (
            (xt(e, r), (r & 130023424) === r && ((t = Ys + 500 - q()), 10 < t))
          ) {
            if (Tl(e, 0) !== 0) break;
            if (((l = e.suspendedLanes), (l & r) !== r)) {
              pe(), (e.pingedLanes |= e.suspendedLanes & l);
              break;
            }
            e.timeoutHandle = Oi($t.bind(null, e, ye, rt), t);
            break;
          }
          $t(e, ye, rt);
          break;
        case 4:
          if ((xt(e, r), (r & 4194240) === r)) break;
          for (t = e.eventTimes, l = -1; 0 < r; ) {
            var i = 31 - De(r);
            (o = 1 << i), (i = t[i]), i > l && (l = i), (r &= ~o);
          }
          if (
            ((r = l),
            (r = q() - r),
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
                : 1960 * fh(r / 1960)) - r),
            10 < r)
          ) {
            e.timeoutHandle = Oi($t.bind(null, e, ye, rt), r);
            break;
          }
          $t(e, ye, rt);
          break;
        case 5:
          $t(e, ye, rt);
          break;
        default:
          throw Error(C(329));
      }
    }
  }
  return ke(e, q()), e.callbackNode === n ? qd.bind(null, e) : null;
}
function Zi(e, t) {
  var n = sr;
  return (
    e.current.memoizedState.isDehydrated && (Kt(e, t).flags |= 256),
    (e = Yl(e, t)),
    e !== 2 && ((t = ye), (ye = n), t !== null && es(t)),
    e
  );
}
function es(e) {
  ye === null ? (ye = e) : ye.push.apply(ye, e);
}
function ph(e) {
  for (var t = e; ; ) {
    if (t.flags & 16384) {
      var n = t.updateQueue;
      if (n !== null && ((n = n.stores), n !== null))
        for (var r = 0; r < n.length; r++) {
          var l = n[r],
            o = l.getSnapshot;
          l = l.value;
          try {
            if (!Be(o(), l)) return !1;
          } catch {
            return !1;
          }
        }
    }
    if (((n = t.child), t.subtreeFlags & 16384 && n !== null))
      (n.return = t), (t = n);
    else {
      if (t === e) break;
      for (; t.sibling === null; ) {
        if (t.return === null || t.return === e) return !0;
        t = t.return;
      }
      (t.sibling.return = t.return), (t = t.sibling);
    }
  }
  return !0;
}
function xt(e, t) {
  for (
    t &= ~Qs,
      t &= ~co,
      e.suspendedLanes |= t,
      e.pingedLanes &= ~t,
      e = e.expirationTimes;
    0 < t;

  ) {
    var n = 31 - De(t),
      r = 1 << n;
    (e[n] = -1), (t &= ~r);
  }
}
function Su(e) {
  if (F & 6) throw Error(C(327));
  Nn();
  var t = Tl(e, 0);
  if (!(t & 1)) return ke(e, q()), null;
  var n = Yl(e, t);
  if (e.tag !== 0 && n === 2) {
    var r = Ci(e);
    r !== 0 && ((t = r), (n = Zi(e, r)));
  }
  if (n === 1) throw ((n = Cr), Kt(e, 0), xt(e, t), ke(e, q()), n);
  if (n === 6) throw Error(C(345));
  return (
    (e.finishedWork = e.current.alternate),
    (e.finishedLanes = t),
    $t(e, ye, rt),
    ke(e, q()),
    null
  );
}
function Js(e, t) {
  var n = F;
  F |= 1;
  try {
    return e(t);
  } finally {
    (F = n), F === 0 && ((Ln = q() + 500), io && zt());
  }
}
function Zt(e) {
  St !== null && St.tag === 0 && !(F & 6) && Nn();
  var t = F;
  F |= 1;
  var n = Oe.transition,
    r = A;
  try {
    if (((Oe.transition = null), (A = 1), e)) return e();
  } finally {
    (A = r), (Oe.transition = n), (F = t), !(F & 6) && zt();
  }
}
function qs() {
  (Ne = vn.current), $(vn);
}
function Kt(e, t) {
  (e.finishedWork = null), (e.finishedLanes = 0);
  var n = e.timeoutHandle;
  if ((n !== -1 && ((e.timeoutHandle = -1), Hm(n)), G !== null))
    for (n = G.return; n !== null; ) {
      var r = n;
      switch ((Ts(r), r.tag)) {
        case 1:
          (r = r.type.childContextTypes), r != null && zl();
          break;
        case 3:
          _n(), $(we), $(de), Is();
          break;
        case 5:
          As(r);
          break;
        case 4:
          _n();
          break;
        case 13:
          $(V);
          break;
        case 19:
          $(V);
          break;
        case 10:
          Us(r.type._context);
          break;
        case 22:
        case 23:
          qs();
      }
      n = n.return;
    }
  if (
    ((re = e),
    (G = e = Tt(e.current, null)),
    (oe = Ne = t),
    (ee = 0),
    (Cr = null),
    (Qs = co = Xt = 0),
    (ye = sr = null),
    Ht !== null)
  ) {
    for (t = 0; t < Ht.length; t++)
      if (((n = Ht[t]), (r = n.interleaved), r !== null)) {
        n.interleaved = null;
        var l = r.next,
          o = n.pending;
        if (o !== null) {
          var i = o.next;
          (o.next = l), (r.next = i);
        }
        n.pending = r;
      }
    Ht = null;
  }
  return e;
}
function Gd(e, t) {
  do {
    var n = G;
    try {
      if ((Os(), (pl.current = Vl), Hl)) {
        for (var r = W.memoizedState; r !== null; ) {
          var l = r.queue;
          l !== null && (l.pending = null), (r = r.next);
        }
        Hl = !1;
      }
      if (
        ((Gt = 0),
        (ne = X = W = null),
        (or = !1),
        (Sr = 0),
        (Ks.current = null),
        n === null || n.return === null)
      ) {
        (ee = 1), (Cr = t), (G = null);
        break;
      }
      e: {
        var o = e,
          i = n.return,
          a = n,
          s = t;
        if (
          ((t = oe),
          (a.flags |= 32768),
          s !== null && typeof s == "object" && typeof s.then == "function")
        ) {
          var c = s,
            p = a,
            m = p.tag;
          if (!(p.mode & 1) && (m === 0 || m === 11 || m === 15)) {
            var y = p.alternate;
            y
              ? ((p.updateQueue = y.updateQueue),
                (p.memoizedState = y.memoizedState),
                (p.lanes = y.lanes))
              : ((p.updateQueue = null), (p.memoizedState = null));
          }
          var x = uu(i);
          if (x !== null) {
            (x.flags &= -257),
              cu(x, i, a, o, t),
              x.mode & 1 && au(o, c, t),
              (t = x),
              (s = c);
            var w = t.updateQueue;
            if (w === null) {
              var v = new Set();
              v.add(s), (t.updateQueue = v);
            } else w.add(s);
            break e;
          } else {
            if (!(t & 1)) {
              au(o, c, t), Gs();
              break e;
            }
            s = Error(C(426));
          }
        } else if (B && a.mode & 1) {
          var h = uu(i);
          if (h !== null) {
            !(h.flags & 65536) && (h.flags |= 256),
              cu(h, i, a, o, t),
              Ls(Tn(s, a));
            break e;
          }
        }
        (o = s = Tn(s, a)),
          ee !== 4 && (ee = 2),
          sr === null ? (sr = [o]) : sr.push(o),
          (o = i);
        do {
          switch (o.tag) {
            case 3:
              (o.flags |= 65536), (t &= -t), (o.lanes |= t);
              var f = Ud(o, s, t);
              nu(o, f);
              break e;
            case 1:
              a = s;
              var d = o.type,
                g = o.stateNode;
              if (
                !(o.flags & 128) &&
                (typeof d.getDerivedStateFromError == "function" ||
                  (g !== null &&
                    typeof g.componentDidCatch == "function" &&
                    (Pt === null || !Pt.has(g))))
              ) {
                (o.flags |= 65536), (t &= -t), (o.lanes |= t);
                var E = zd(o, a, t);
                nu(o, E);
                break e;
              }
          }
          o = o.return;
        } while (o !== null);
      }
      ef(n);
    } catch (N) {
      (t = N), G === n && n !== null && (G = n = n.return);
      continue;
    }
    break;
  } while (!0);
}
function Xd() {
  var e = Wl.current;
  return (Wl.current = Vl), e === null ? Vl : e;
}
function Gs() {
  (ee === 0 || ee === 3 || ee === 2) && (ee = 4),
    re === null || (!(Xt & 268435455) && !(co & 268435455)) || xt(re, oe);
}
function Yl(e, t) {
  var n = F;
  F |= 2;
  var r = Xd();
  (re !== e || oe !== t) && ((rt = null), Kt(e, t));
  do
    try {
      mh();
      break;
    } catch (l) {
      Gd(e, l);
    }
  while (!0);
  if ((Os(), (F = n), (Wl.current = r), G !== null)) throw Error(C(261));
  return (re = null), (oe = 0), ee;
}
function mh() {
  for (; G !== null; ) Zd(G);
}
function hh() {
  for (; G !== null && !Dp(); ) Zd(G);
}
function Zd(e) {
  var t = nf(e.alternate, e, Ne);
  (e.memoizedProps = e.pendingProps),
    t === null ? ef(e) : (G = t),
    (Ks.current = null);
}
function ef(e) {
  var t = e;
  do {
    var n = t.alternate;
    if (((e = t.return), t.flags & 32768)) {
      if (((n = ah(n, t)), n !== null)) {
        (n.flags &= 32767), (G = n);
        return;
      }
      if (e !== null)
        (e.flags |= 32768), (e.subtreeFlags = 0), (e.deletions = null);
      else {
        (ee = 6), (G = null);
        return;
      }
    } else if (((n = sh(n, t, Ne)), n !== null)) {
      G = n;
      return;
    }
    if (((t = t.sibling), t !== null)) {
      G = t;
      return;
    }
    G = t = e;
  } while (t !== null);
  ee === 0 && (ee = 5);
}
function $t(e, t, n) {
  var r = A,
    l = Oe.transition;
  try {
    (Oe.transition = null), (A = 1), gh(e, t, n, r);
  } finally {
    (Oe.transition = l), (A = r);
  }
  return null;
}
function gh(e, t, n, r) {
  do Nn();
  while (St !== null);
  if (F & 6) throw Error(C(327));
  n = e.finishedWork;
  var l = e.finishedLanes;
  if (n === null) return null;
  if (((e.finishedWork = null), (e.finishedLanes = 0), n === e.current))
    throw Error(C(177));
  (e.callbackNode = null), (e.callbackPriority = 0);
  var o = n.lanes | n.childLanes;
  if (
    (qp(e, o),
    e === re && ((G = re = null), (oe = 0)),
    (!(n.subtreeFlags & 2064) && !(n.flags & 2064)) ||
      rl ||
      ((rl = !0),
      rf(_l, function () {
        return Nn(), null;
      })),
    (o = (n.flags & 15990) !== 0),
    n.subtreeFlags & 15990 || o)
  ) {
    (o = Oe.transition), (Oe.transition = null);
    var i = A;
    A = 1;
    var a = F;
    (F |= 4),
      (Ks.current = null),
      ch(e, n),
      Yd(n, e),
      Mm(Li),
      (Ll = !!Ti),
      (Li = Ti = null),
      (e.current = n),
      dh(n),
      $p(),
      (F = a),
      (A = i),
      (Oe.transition = o);
  } else e.current = n;
  if (
    (rl && ((rl = !1), (St = e), (Ql = l)),
    (o = e.pendingLanes),
    o === 0 && (Pt = null),
    Vp(n.stateNode),
    ke(e, q()),
    t !== null)
  )
    for (r = e.onRecoverableError, n = 0; n < t.length; n++)
      (l = t[n]), r(l.value, { componentStack: l.stack, digest: l.digest });
  if (Kl) throw ((Kl = !1), (e = Gi), (Gi = null), e);
  return (
    Ql & 1 && e.tag !== 0 && Nn(),
    (o = e.pendingLanes),
    o & 1 ? (e === Xi ? ar++ : ((ar = 0), (Xi = e))) : (ar = 0),
    zt(),
    null
  );
}
function Nn() {
  if (St !== null) {
    var e = Uc(Ql),
      t = Oe.transition,
      n = A;
    try {
      if (((Oe.transition = null), (A = 16 > e ? 16 : e), St === null))
        var r = !1;
      else {
        if (((e = St), (St = null), (Ql = 0), F & 6)) throw Error(C(331));
        var l = F;
        for (F |= 4, P = e.current; P !== null; ) {
          var o = P,
            i = o.child;
          if (P.flags & 16) {
            var a = o.deletions;
            if (a !== null) {
              for (var s = 0; s < a.length; s++) {
                var c = a[s];
                for (P = c; P !== null; ) {
                  var p = P;
                  switch (p.tag) {
                    case 0:
                    case 11:
                    case 15:
                      ir(8, p, o);
                  }
                  var m = p.child;
                  if (m !== null) (m.return = p), (P = m);
                  else
                    for (; P !== null; ) {
                      p = P;
                      var y = p.sibling,
                        x = p.return;
                      if ((Wd(p), p === c)) {
                        P = null;
                        break;
                      }
                      if (y !== null) {
                        (y.return = x), (P = y);
                        break;
                      }
                      P = x;
                    }
                }
              }
              var w = o.alternate;
              if (w !== null) {
                var v = w.child;
                if (v !== null) {
                  w.child = null;
                  do {
                    var h = v.sibling;
                    (v.sibling = null), (v = h);
                  } while (v !== null);
                }
              }
              P = o;
            }
          }
          if (o.subtreeFlags & 2064 && i !== null) (i.return = o), (P = i);
          else
            e: for (; P !== null; ) {
              if (((o = P), o.flags & 2048))
                switch (o.tag) {
                  case 0:
                  case 11:
                  case 15:
                    ir(9, o, o.return);
                }
              var f = o.sibling;
              if (f !== null) {
                (f.return = o.return), (P = f);
                break e;
              }
              P = o.return;
            }
        }
        var d = e.current;
        for (P = d; P !== null; ) {
          i = P;
          var g = i.child;
          if (i.subtreeFlags & 2064 && g !== null) (g.return = i), (P = g);
          else
            e: for (i = d; P !== null; ) {
              if (((a = P), a.flags & 2048))
                try {
                  switch (a.tag) {
                    case 0:
                    case 11:
                    case 15:
                      uo(9, a);
                  }
                } catch (N) {
                  Y(a, a.return, N);
                }
              if (a === i) {
                P = null;
                break e;
              }
              var E = a.sibling;
              if (E !== null) {
                (E.return = a.return), (P = E);
                break e;
              }
              P = a.return;
            }
        }
        if (
          ((F = l), zt(), Ge && typeof Ge.onPostCommitFiberRoot == "function")
        )
          try {
            Ge.onPostCommitFiberRoot(to, e);
          } catch {}
        r = !0;
      }
      return r;
    } finally {
      (A = n), (Oe.transition = t);
    }
  }
  return !1;
}
function Eu(e, t, n) {
  (t = Tn(n, t)),
    (t = Ud(e, t, 1)),
    (e = Rt(e, t, 1)),
    (t = pe()),
    e !== null && (Tr(e, 1, t), ke(e, t));
}
function Y(e, t, n) {
  if (e.tag === 3) Eu(e, e, n);
  else
    for (; t !== null; ) {
      if (t.tag === 3) {
        Eu(t, e, n);
        break;
      } else if (t.tag === 1) {
        var r = t.stateNode;
        if (
          typeof t.type.getDerivedStateFromError == "function" ||
          (typeof r.componentDidCatch == "function" &&
            (Pt === null || !Pt.has(r)))
        ) {
          (e = Tn(n, e)),
            (e = zd(t, e, 1)),
            (t = Rt(t, e, 1)),
            (e = pe()),
            t !== null && (Tr(t, 1, e), ke(t, e));
          break;
        }
      }
      t = t.return;
    }
}
function yh(e, t, n) {
  var r = e.pingCache;
  r !== null && r.delete(t),
    (t = pe()),
    (e.pingedLanes |= e.suspendedLanes & n),
    re === e &&
      (oe & n) === n &&
      (ee === 4 || (ee === 3 && (oe & 130023424) === oe && 500 > q() - Ys)
        ? Kt(e, 0)
        : (Qs |= n)),
    ke(e, t);
}
function tf(e, t) {
  t === 0 &&
    (e.mode & 1
      ? ((t = Qr), (Qr <<= 1), !(Qr & 130023424) && (Qr = 4194304))
      : (t = 1));
  var n = pe();
  (e = ft(e, t)), e !== null && (Tr(e, t, n), ke(e, n));
}
function vh(e) {
  var t = e.memoizedState,
    n = 0;
  t !== null && (n = t.retryLane), tf(e, n);
}
function wh(e, t) {
  var n = 0;
  switch (e.tag) {
    case 13:
      var r = e.stateNode,
        l = e.memoizedState;
      l !== null && (n = l.retryLane);
      break;
    case 19:
      r = e.stateNode;
      break;
    default:
      throw Error(C(314));
  }
  r !== null && r.delete(t), tf(e, n);
}
var nf;
nf = function (e, t, n) {
  if (e !== null)
    if (e.memoizedProps !== t.pendingProps || we.current) ve = !0;
    else {
      if (!(e.lanes & n) && !(t.flags & 128)) return (ve = !1), ih(e, t, n);
      ve = !!(e.flags & 131072);
    }
  else (ve = !1), B && t.flags & 1048576 && id(t, Al, t.index);
  switch (((t.lanes = 0), t.tag)) {
    case 2:
      var r = t.type;
      hl(e, t), (e = t.pendingProps);
      var l = jn(t, de.current);
      En(t, n), (l = $s(null, t, r, e, l, n));
      var o = Bs();
      return (
        (t.flags |= 1),
        typeof l == "object" &&
        l !== null &&
        typeof l.render == "function" &&
        l.$$typeof === void 0
          ? ((t.tag = 1),
            (t.memoizedState = null),
            (t.updateQueue = null),
            xe(r) ? ((o = !0), Ml(t)) : (o = !1),
            (t.memoizedState =
              l.state !== null && l.state !== void 0 ? l.state : null),
            Ms(t),
            (l.updater = ao),
            (t.stateNode = l),
            (l._reactInternals = t),
            Di(t, r, e, n),
            (t = Hi(null, t, r, !0, o, n)))
          : ((t.tag = 0), B && o && _s(t), fe(null, t, l, n), (t = t.child)),
        t
      );
    case 16:
      r = t.elementType;
      e: {
        switch (
          (hl(e, t),
          (e = t.pendingProps),
          (l = r._init),
          (r = l(r._payload)),
          (t.type = r),
          (l = t.tag = kh(r)),
          (e = Fe(r, e)),
          l)
        ) {
          case 0:
            t = Bi(null, t, r, e, n);
            break e;
          case 1:
            t = pu(null, t, r, e, n);
            break e;
          case 11:
            t = du(null, t, r, e, n);
            break e;
          case 14:
            t = fu(null, t, r, Fe(r.type, e), n);
            break e;
        }
        throw Error(C(306, r, ""));
      }
      return t;
    case 0:
      return (
        (r = t.type),
        (l = t.pendingProps),
        (l = t.elementType === r ? l : Fe(r, l)),
        Bi(e, t, r, l, n)
      );
    case 1:
      return (
        (r = t.type),
        (l = t.pendingProps),
        (l = t.elementType === r ? l : Fe(r, l)),
        pu(e, t, r, l, n)
      );
    case 3:
      e: {
        if ((Id(t), e === null)) throw Error(C(387));
        (r = t.pendingProps),
          (o = t.memoizedState),
          (l = o.element),
          fd(e, t),
          $l(t, r, null, n);
        var i = t.memoizedState;
        if (((r = i.element), o.isDehydrated))
          if (
            ((o = {
              element: r,
              isDehydrated: !1,
              cache: i.cache,
              pendingSuspenseBoundaries: i.pendingSuspenseBoundaries,
              transitions: i.transitions,
            }),
            (t.updateQueue.baseState = o),
            (t.memoizedState = o),
            t.flags & 256)
          ) {
            (l = Tn(Error(C(423)), t)), (t = mu(e, t, r, n, l));
            break e;
          } else if (r !== l) {
            (l = Tn(Error(C(424)), t)), (t = mu(e, t, r, n, l));
            break e;
          } else
            for (
              Ce = jt(t.stateNode.containerInfo.firstChild),
                je = t,
                B = !0,
                Ie = null,
                n = cd(t, null, r, n),
                t.child = n;
              n;

            )
              (n.flags = (n.flags & -3) | 4096), (n = n.sibling);
        else {
          if ((Rn(), r === l)) {
            t = pt(e, t, n);
            break e;
          }
          fe(e, t, r, n);
        }
        t = t.child;
      }
      return t;
    case 5:
      return (
        pd(t),
        e === null && Fi(t),
        (r = t.type),
        (l = t.pendingProps),
        (o = e !== null ? e.memoizedProps : null),
        (i = l.children),
        bi(r, l) ? (i = null) : o !== null && bi(r, o) && (t.flags |= 32),
        Ad(e, t),
        fe(e, t, i, n),
        t.child
      );
    case 6:
      return e === null && Fi(t), null;
    case 13:
      return Dd(e, t, n);
    case 4:
      return (
        Fs(t, t.stateNode.containerInfo),
        (r = t.pendingProps),
        e === null ? (t.child = Pn(t, null, r, n)) : fe(e, t, r, n),
        t.child
      );
    case 11:
      return (
        (r = t.type),
        (l = t.pendingProps),
        (l = t.elementType === r ? l : Fe(r, l)),
        du(e, t, r, l, n)
      );
    case 7:
      return fe(e, t, t.pendingProps, n), t.child;
    case 8:
      return fe(e, t, t.pendingProps.children, n), t.child;
    case 12:
      return fe(e, t, t.pendingProps.children, n), t.child;
    case 10:
      e: {
        if (
          ((r = t.type._context),
          (l = t.pendingProps),
          (o = t.memoizedProps),
          (i = l.value),
          I(Il, r._currentValue),
          (r._currentValue = i),
          o !== null)
        )
          if (Be(o.value, i)) {
            if (o.children === l.children && !we.current) {
              t = pt(e, t, n);
              break e;
            }
          } else
            for (o = t.child, o !== null && (o.return = t); o !== null; ) {
              var a = o.dependencies;
              if (a !== null) {
                i = o.child;
                for (var s = a.firstContext; s !== null; ) {
                  if (s.context === r) {
                    if (o.tag === 1) {
                      (s = st(-1, n & -n)), (s.tag = 2);
                      var c = o.updateQueue;
                      if (c !== null) {
                        c = c.shared;
                        var p = c.pending;
                        p === null
                          ? (s.next = s)
                          : ((s.next = p.next), (p.next = s)),
                          (c.pending = s);
                      }
                    }
                    (o.lanes |= n),
                      (s = o.alternate),
                      s !== null && (s.lanes |= n),
                      Ai(o.return, n, t),
                      (a.lanes |= n);
                    break;
                  }
                  s = s.next;
                }
              } else if (o.tag === 10) i = o.type === t.type ? null : o.child;
              else if (o.tag === 18) {
                if (((i = o.return), i === null)) throw Error(C(341));
                (i.lanes |= n),
                  (a = i.alternate),
                  a !== null && (a.lanes |= n),
                  Ai(i, n, t),
                  (i = o.sibling);
              } else i = o.child;
              if (i !== null) i.return = o;
              else
                for (i = o; i !== null; ) {
                  if (i === t) {
                    i = null;
                    break;
                  }
                  if (((o = i.sibling), o !== null)) {
                    (o.return = i.return), (i = o);
                    break;
                  }
                  i = i.return;
                }
              o = i;
            }
        fe(e, t, l.children, n), (t = t.child);
      }
      return t;
    case 9:
      return (
        (l = t.type),
        (r = t.pendingProps.children),
        En(t, n),
        (l = Ue(l)),
        (r = r(l)),
        (t.flags |= 1),
        fe(e, t, r, n),
        t.child
      );
    case 14:
      return (
        (r = t.type),
        (l = Fe(r, t.pendingProps)),
        (l = Fe(r.type, l)),
        fu(e, t, r, l, n)
      );
    case 15:
      return Md(e, t, t.type, t.pendingProps, n);
    case 17:
      return (
        (r = t.type),
        (l = t.pendingProps),
        (l = t.elementType === r ? l : Fe(r, l)),
        hl(e, t),
        (t.tag = 1),
        xe(r) ? ((e = !0), Ml(t)) : (e = !1),
        En(t, n),
        Od(t, r, l),
        Di(t, r, l, n),
        Hi(null, t, r, !0, e, n)
      );
    case 19:
      return $d(e, t, n);
    case 22:
      return Fd(e, t, n);
  }
  throw Error(C(156, t.tag));
};
function rf(e, t) {
  return Tc(e, t);
}
function xh(e, t, n, r) {
  (this.tag = e),
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
    (this.alternate = null);
}
function be(e, t, n, r) {
  return new xh(e, t, n, r);
}
function Xs(e) {
  return (e = e.prototype), !(!e || !e.isReactComponent);
}
function kh(e) {
  if (typeof e == "function") return Xs(e) ? 1 : 0;
  if (e != null) {
    if (((e = e.$$typeof), e === ys)) return 11;
    if (e === vs) return 14;
  }
  return 2;
}
function Tt(e, t) {
  var n = e.alternate;
  return (
    n === null
      ? ((n = be(e.tag, t, e.key, e.mode)),
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
function vl(e, t, n, r, l, o) {
  var i = 2;
  if (((r = e), typeof e == "function")) Xs(e) && (i = 1);
  else if (typeof e == "string") i = 5;
  else
    e: switch (e) {
      case an:
        return Qt(n.children, l, o, t);
      case gs:
        (i = 8), (l |= 8);
        break;
      case ci:
        return (
          (e = be(12, n, t, l | 2)), (e.elementType = ci), (e.lanes = o), e
        );
      case di:
        return (e = be(13, n, t, l)), (e.elementType = di), (e.lanes = o), e;
      case fi:
        return (e = be(19, n, t, l)), (e.elementType = fi), (e.lanes = o), e;
      case pc:
        return fo(n, l, o, t);
      default:
        if (typeof e == "object" && e !== null)
          switch (e.$$typeof) {
            case dc:
              i = 10;
              break e;
            case fc:
              i = 9;
              break e;
            case ys:
              i = 11;
              break e;
            case vs:
              i = 14;
              break e;
            case yt:
              (i = 16), (r = null);
              break e;
          }
        throw Error(C(130, e == null ? e : typeof e, ""));
    }
  return (
    (t = be(i, n, t, l)), (t.elementType = e), (t.type = r), (t.lanes = o), t
  );
}
function Qt(e, t, n, r) {
  return (e = be(7, e, r, t)), (e.lanes = n), e;
}
function fo(e, t, n, r) {
  return (
    (e = be(22, e, r, t)),
    (e.elementType = pc),
    (e.lanes = n),
    (e.stateNode = { isHidden: !1 }),
    e
  );
}
function ei(e, t, n) {
  return (e = be(6, e, null, t)), (e.lanes = n), e;
}
function ti(e, t, n) {
  return (
    (t = be(4, e.children !== null ? e.children : [], e.key, t)),
    (t.lanes = n),
    (t.stateNode = {
      containerInfo: e.containerInfo,
      pendingChildren: null,
      implementation: e.implementation,
    }),
    t
  );
}
function Sh(e, t, n, r, l) {
  (this.tag = t),
    (this.containerInfo = e),
    (this.finishedWork =
      this.pingCache =
      this.current =
      this.pendingChildren =
        null),
    (this.timeoutHandle = -1),
    (this.callbackNode = this.pendingContext = this.context = null),
    (this.callbackPriority = 0),
    (this.eventTimes = zo(0)),
    (this.expirationTimes = zo(-1)),
    (this.entangledLanes =
      this.finishedLanes =
      this.mutableReadLanes =
      this.expiredLanes =
      this.pingedLanes =
      this.suspendedLanes =
      this.pendingLanes =
        0),
    (this.entanglements = zo(0)),
    (this.identifierPrefix = r),
    (this.onRecoverableError = l),
    (this.mutableSourceEagerHydrationData = null);
}
function Zs(e, t, n, r, l, o, i, a, s) {
  return (
    (e = new Sh(e, t, n, a, s)),
    t === 1 ? ((t = 1), o === !0 && (t |= 8)) : (t = 0),
    (o = be(3, null, null, t)),
    (e.current = o),
    (o.stateNode = e),
    (o.memoizedState = {
      element: r,
      isDehydrated: n,
      cache: null,
      transitions: null,
      pendingSuspenseBoundaries: null,
    }),
    Ms(o),
    e
  );
}
function Eh(e, t, n) {
  var r = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
  return {
    $$typeof: sn,
    key: r == null ? null : "" + r,
    children: e,
    containerInfo: t,
    implementation: n,
  };
}
function lf(e) {
  if (!e) return bt;
  e = e._reactInternals;
  e: {
    if (rn(e) !== e || e.tag !== 1) throw Error(C(170));
    var t = e;
    do {
      switch (t.tag) {
        case 3:
          t = t.stateNode.context;
          break e;
        case 1:
          if (xe(t.type)) {
            t = t.stateNode.__reactInternalMemoizedMergedChildContext;
            break e;
          }
      }
      t = t.return;
    } while (t !== null);
    throw Error(C(171));
  }
  if (e.tag === 1) {
    var n = e.type;
    if (xe(n)) return ld(e, n, t);
  }
  return t;
}
function of(e, t, n, r, l, o, i, a, s) {
  return (
    (e = Zs(n, r, !0, e, l, o, i, a, s)),
    (e.context = lf(null)),
    (n = e.current),
    (r = pe()),
    (l = _t(n)),
    (o = st(r, l)),
    (o.callback = t ?? null),
    Rt(n, o, l),
    (e.current.lanes = l),
    Tr(e, l, r),
    ke(e, r),
    e
  );
}
function po(e, t, n, r) {
  var l = t.current,
    o = pe(),
    i = _t(l);
  return (
    (n = lf(n)),
    t.context === null ? (t.context = n) : (t.pendingContext = n),
    (t = st(o, i)),
    (t.payload = { element: e }),
    (r = r === void 0 ? null : r),
    r !== null && (t.callback = r),
    (e = Rt(l, t, i)),
    e !== null && ($e(e, l, i, o), fl(e, l, i)),
    i
  );
}
function Jl(e) {
  if (((e = e.current), !e.child)) return null;
  switch (e.child.tag) {
    case 5:
      return e.child.stateNode;
    default:
      return e.child.stateNode;
  }
}
function Nu(e, t) {
  if (((e = e.memoizedState), e !== null && e.dehydrated !== null)) {
    var n = e.retryLane;
    e.retryLane = n !== 0 && n < t ? n : t;
  }
}
function ea(e, t) {
  Nu(e, t), (e = e.alternate) && Nu(e, t);
}
function Nh() {
  return null;
}
var sf =
  typeof reportError == "function"
    ? reportError
    : function (e) {
        console.error(e);
      };
function ta(e) {
  this._internalRoot = e;
}
mo.prototype.render = ta.prototype.render = function (e) {
  var t = this._internalRoot;
  if (t === null) throw Error(C(409));
  po(e, t, null, null);
};
mo.prototype.unmount = ta.prototype.unmount = function () {
  var e = this._internalRoot;
  if (e !== null) {
    this._internalRoot = null;
    var t = e.containerInfo;
    Zt(function () {
      po(null, e, null, null);
    }),
      (t[dt] = null);
  }
};
function mo(e) {
  this._internalRoot = e;
}
mo.prototype.unstable_scheduleHydration = function (e) {
  if (e) {
    var t = Fc();
    e = { blockedOn: null, target: e, priority: t };
    for (var n = 0; n < wt.length && t !== 0 && t < wt[n].priority; n++);
    wt.splice(n, 0, e), n === 0 && Ic(e);
  }
};
function na(e) {
  return !(!e || (e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11));
}
function ho(e) {
  return !(
    !e ||
    (e.nodeType !== 1 &&
      e.nodeType !== 9 &&
      e.nodeType !== 11 &&
      (e.nodeType !== 8 || e.nodeValue !== " react-mount-point-unstable "))
  );
}
function Cu() {}
function Ch(e, t, n, r, l) {
  if (l) {
    if (typeof r == "function") {
      var o = r;
      r = function () {
        var c = Jl(i);
        o.call(c);
      };
    }
    var i = of(t, r, e, 0, null, !1, !1, "", Cu);
    return (
      (e._reactRootContainer = i),
      (e[dt] = i.current),
      yr(e.nodeType === 8 ? e.parentNode : e),
      Zt(),
      i
    );
  }
  for (; (l = e.lastChild); ) e.removeChild(l);
  if (typeof r == "function") {
    var a = r;
    r = function () {
      var c = Jl(s);
      a.call(c);
    };
  }
  var s = Zs(e, 0, !1, null, null, !1, !1, "", Cu);
  return (
    (e._reactRootContainer = s),
    (e[dt] = s.current),
    yr(e.nodeType === 8 ? e.parentNode : e),
    Zt(function () {
      po(t, s, n, r);
    }),
    s
  );
}
function go(e, t, n, r, l) {
  var o = n._reactRootContainer;
  if (o) {
    var i = o;
    if (typeof l == "function") {
      var a = l;
      l = function () {
        var s = Jl(i);
        a.call(s);
      };
    }
    po(t, i, e, l);
  } else i = Ch(n, t, e, l, r);
  return Jl(i);
}
zc = function (e) {
  switch (e.tag) {
    case 3:
      var t = e.stateNode;
      if (t.current.memoizedState.isDehydrated) {
        var n = Xn(t.pendingLanes);
        n !== 0 &&
          (ks(t, n | 1), ke(t, q()), !(F & 6) && ((Ln = q() + 500), zt()));
      }
      break;
    case 13:
      Zt(function () {
        var r = ft(e, 1);
        if (r !== null) {
          var l = pe();
          $e(r, e, 1, l);
        }
      }),
        ea(e, 1);
  }
};
Ss = function (e) {
  if (e.tag === 13) {
    var t = ft(e, 134217728);
    if (t !== null) {
      var n = pe();
      $e(t, e, 134217728, n);
    }
    ea(e, 134217728);
  }
};
Mc = function (e) {
  if (e.tag === 13) {
    var t = _t(e),
      n = ft(e, t);
    if (n !== null) {
      var r = pe();
      $e(n, e, t, r);
    }
    ea(e, t);
  }
};
Fc = function () {
  return A;
};
Ac = function (e, t) {
  var n = A;
  try {
    return (A = e), t();
  } finally {
    A = n;
  }
};
Si = function (e, t, n) {
  switch (t) {
    case "input":
      if ((hi(e, n), (t = n.name), n.type === "radio" && t != null)) {
        for (n = e; n.parentNode; ) n = n.parentNode;
        for (
          n = n.querySelectorAll(
            "input[name=" + JSON.stringify("" + t) + '][type="radio"]'
          ),
            t = 0;
          t < n.length;
          t++
        ) {
          var r = n[t];
          if (r !== e && r.form === e.form) {
            var l = oo(r);
            if (!l) throw Error(C(90));
            hc(r), hi(r, l);
          }
        }
      }
      break;
    case "textarea":
      yc(e, n);
      break;
    case "select":
      (t = n.value), t != null && wn(e, !!n.multiple, t, !1);
  }
};
Nc = Js;
Cc = Zt;
var jh = { usingClientEntryPoint: !1, Events: [br, fn, oo, Sc, Ec, Js] },
  Qn = {
    findFiberByHostInstance: Bt,
    bundleType: 0,
    version: "18.3.1",
    rendererPackageName: "react-dom",
  },
  Rh = {
    bundleType: Qn.bundleType,
    version: Qn.version,
    rendererPackageName: Qn.rendererPackageName,
    rendererConfig: Qn.rendererConfig,
    overrideHookState: null,
    overrideHookStateDeletePath: null,
    overrideHookStateRenamePath: null,
    overrideProps: null,
    overridePropsDeletePath: null,
    overridePropsRenamePath: null,
    setErrorHandler: null,
    setSuspenseHandler: null,
    scheduleUpdate: null,
    currentDispatcherRef: ht.ReactCurrentDispatcher,
    findHostInstanceByFiber: function (e) {
      return (e = Pc(e)), e === null ? null : e.stateNode;
    },
    findFiberByHostInstance: Qn.findFiberByHostInstance || Nh,
    findHostInstancesForRefresh: null,
    scheduleRefresh: null,
    scheduleRoot: null,
    setRefreshHandler: null,
    getCurrentFiber: null,
    reconcilerVersion: "18.3.1-next-f1338f8080-20240426",
  };
if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
  var ll = __REACT_DEVTOOLS_GLOBAL_HOOK__;
  if (!ll.isDisabled && ll.supportsFiber)
    try {
      (to = ll.inject(Rh)), (Ge = ll);
    } catch {}
}
Pe.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = jh;
Pe.createPortal = function (e, t) {
  var n = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
  if (!na(t)) throw Error(C(200));
  return Eh(e, t, null, n);
};
Pe.createRoot = function (e, t) {
  if (!na(e)) throw Error(C(299));
  var n = !1,
    r = "",
    l = sf;
  return (
    t != null &&
      (t.unstable_strictMode === !0 && (n = !0),
      t.identifierPrefix !== void 0 && (r = t.identifierPrefix),
      t.onRecoverableError !== void 0 && (l = t.onRecoverableError)),
    (t = Zs(e, 1, !1, null, null, n, !1, r, l)),
    (e[dt] = t.current),
    yr(e.nodeType === 8 ? e.parentNode : e),
    new ta(t)
  );
};
Pe.findDOMNode = function (e) {
  if (e == null) return null;
  if (e.nodeType === 1) return e;
  var t = e._reactInternals;
  if (t === void 0)
    throw typeof e.render == "function"
      ? Error(C(188))
      : ((e = Object.keys(e).join(",")), Error(C(268, e)));
  return (e = Pc(t)), (e = e === null ? null : e.stateNode), e;
};
Pe.flushSync = function (e) {
  return Zt(e);
};
Pe.hydrate = function (e, t, n) {
  if (!ho(t)) throw Error(C(200));
  return go(null, e, t, !0, n);
};
Pe.hydrateRoot = function (e, t, n) {
  if (!na(e)) throw Error(C(405));
  var r = (n != null && n.hydratedSources) || null,
    l = !1,
    o = "",
    i = sf;
  if (
    (n != null &&
      (n.unstable_strictMode === !0 && (l = !0),
      n.identifierPrefix !== void 0 && (o = n.identifierPrefix),
      n.onRecoverableError !== void 0 && (i = n.onRecoverableError)),
    (t = of(t, null, e, 1, n ?? null, l, !1, o, i)),
    (e[dt] = t.current),
    yr(e),
    r)
  )
    for (e = 0; e < r.length; e++)
      (n = r[e]),
        (l = n._getVersion),
        (l = l(n._source)),
        t.mutableSourceEagerHydrationData == null
          ? (t.mutableSourceEagerHydrationData = [n, l])
          : t.mutableSourceEagerHydrationData.push(n, l);
  return new mo(t);
};
Pe.render = function (e, t, n) {
  if (!ho(t)) throw Error(C(200));
  return go(null, e, t, !1, n);
};
Pe.unmountComponentAtNode = function (e) {
  if (!ho(e)) throw Error(C(40));
  return e._reactRootContainer
    ? (Zt(function () {
        go(null, null, e, !1, function () {
          (e._reactRootContainer = null), (e[dt] = null);
        });
      }),
      !0)
    : !1;
};
Pe.unstable_batchedUpdates = Js;
Pe.unstable_renderSubtreeIntoContainer = function (e, t, n, r) {
  if (!ho(n)) throw Error(C(200));
  if (e == null || e._reactInternals === void 0) throw Error(C(38));
  return go(e, t, n, !1, r);
};
Pe.version = "18.3.1-next-f1338f8080-20240426";
function af() {
  if (
    !(
      typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" ||
      typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"
    )
  )
    try {
      __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(af);
    } catch (e) {
      console.error(e);
    }
}
af(), (sc.exports = Pe);
var uf = sc.exports,
  ra,
  ju = uf;
(ra = ju.createRoot), ju.hydrateRoot;
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ var Ph = {
  xmlns: "http://www.w3.org/2000/svg",
  width: 24,
  height: 24,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 2,
  strokeLinecap: "round",
  strokeLinejoin: "round",
};
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const _h = (e) =>
    e
      .replace(/([a-z0-9])([A-Z])/g, "$1-$2")
      .toLowerCase()
      .trim(),
  Ze = (e, t) => {
    const n = k.forwardRef(
      (
        {
          color: r = "currentColor",
          size: l = 24,
          strokeWidth: o = 2,
          absoluteStrokeWidth: i,
          className: a = "",
          children: s,
          ...c
        },
        p
      ) =>
        k.createElement(
          "svg",
          {
            ref: p,
            ...Ph,
            width: l,
            height: l,
            stroke: r,
            strokeWidth: i ? (Number(o) * 24) / Number(l) : o,
            className: ["lucide", `lucide-${_h(e)}`, a].join(" "),
            ...c,
          },
          [
            ...t.map(([m, y]) => k.createElement(m, y)),
            ...(Array.isArray(s) ? s : [s]),
          ]
        )
    );
    return (n.displayName = `${e}`), n;
  };
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const Th = Ze("Calendar", [
  ["path", { d: "M8 2v4", key: "1cmpym" }],
  ["path", { d: "M16 2v4", key: "4m81vk" }],
  [
    "rect",
    { width: "18", height: "18", x: "3", y: "4", rx: "2", key: "1hopcy" },
  ],
  ["path", { d: "M3 10h18", key: "8toen8" }],
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const Lh = Ze("Clock", [
  ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }],
  ["polyline", { points: "12 6 12 12 16 14", key: "68esgv" }],
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const cf = Ze("Github", [
  [
    "path",
    {
      d: "M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4",
      key: "tonef",
    },
  ],
  ["path", { d: "M9 18c-4.51 2-5-2-7-2", key: "9comsn" }],
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const bh = Ze("Instagram", [
  [
    "rect",
    {
      width: "20",
      height: "20",
      x: "2",
      y: "2",
      rx: "5",
      ry: "5",
      key: "2e1cvw",
    },
  ],
  [
    "path",
    { d: "M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z", key: "9exkf1" },
  ],
  ["line", { x1: "17.5", x2: "17.51", y1: "6.5", y2: "6.5", key: "r4j83e" }],
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const la = Ze("Linkedin", [
  [
    "path",
    {
      d: "M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z",
      key: "c2jq9f",
    },
  ],
  ["rect", { width: "4", height: "12", x: "2", y: "9", key: "mk3on5" }],
  ["circle", { cx: "4", cy: "4", r: "2", key: "bt5ra8" }],
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const Oh = Ze("MapPin", [
  [
    "path",
    { d: "M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z", key: "2oe9fu" },
  ],
  ["circle", { cx: "12", cy: "10", r: "3", key: "ilqhr7" }],
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const Uh = Ze("Menu", [
  ["line", { x1: "4", x2: "20", y1: "12", y2: "12", key: "1e0a9i" }],
  ["line", { x1: "4", x2: "20", y1: "6", y2: "6", key: "1owob3" }],
  ["line", { x1: "4", x2: "20", y1: "18", y2: "18", key: "yk5zj1" }],
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const oa = Ze("Twitter", [
  [
    "path",
    {
      d: "M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z",
      key: "pff0z6",
    },
  ],
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const zh = Ze("X", [
  ["path", { d: "M18 6 6 18", key: "1bl5f8" }],
  ["path", { d: "m6 6 12 12", key: "d8bk6v" }],
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const Mh = Ze("Youtube", [
    [
      "path",
      {
        d: "M2.5 17a24.12 24.12 0 0 1 0-10 2 2 0 0 1 1.4-1.4 49.56 49.56 0 0 1 16.2 0A2 2 0 0 1 21.5 7a24.12 24.12 0 0 1 0 10 2 2 0 0 1-1.4 1.4 49.55 49.55 0 0 1-16.2 0A2 2 0 0 1 2.5 17",
        key: "1q2vi4",
      },
    ],
    ["path", { d: "m10 15 5-3-5-3z", key: "1jp15x" }],
  ]),
  ol = "/assets/shubham-ME8mfaEs.png",
  Fh = "/assets/gaurav-Bpz7eSLY.png",
  Ah = "/assets/kusum-dplicXA0.png",
  Ih = "/assets/vansh-DNH2pENN.png",
  Ru = "/assets/uma-BHkgX6qs.png",
  Dh = "/assets/anil-DyKPZtFg.png",
  $h = "/assets/himanshu_pahwa-B6xnEXHc.png",
  Bh = "/assets/vaibhav-DVpvR2aL.png",
  Hh = "/assets/kiran-DQkQfoHV.png",
  Vh = "/assets/qaguides-CHZFtgX6.jpg",
  Wh = "/assets/flutter%20square%20logowhite-CKuiUm1Y.png",
  Kh = "/assets/women%20in%20tech%20conf-BQQ8jA6d.jpeg",
  Qh = "/assets/React%20Delhi-C9av4TTN.png",
  Yh = "/assets/krypton-C_zlSQOh.png",
  Jh = "/assets/reactindore-DTo8OLg1.png",
  qh = "/assets/wso2-logo-BjuyQ1gO.webp",
  Gh =
    "/assets/GDG%20On%20Campus%20-%20Centered%20-%20Poornima%20University-BS9XM_1Y.png",
  Xh = "/assets/dilnawaz-qtAepQ-n.png",
  ni = "/assets/ojas-9yIDmH-Q.png",
  Zh = "/assets/anubha-DqyXEIzF.png",
  e0 = "/assets/zordial3-BSeUop1q.png",
  t0 = "/assets/harshita-HYKfwRo-.png",
  n0 = "/assets/manjeet-CBMUh_ov.png",
  Pu = "/assets/priyanka-6TWzNNKm.png",
  r0 = "/assets/Tanishka-D6HXdfG-.png",
  _u = "/assets/himanshu-CcZ698T_.png",
  l0 = "/assets/safal-CgC18pEg.png",
  o0 = "/assets/grras-CnbACqbb.png",
  i0 =
    "data:image/svg+xml,%3csvg%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%20120%2061'%3e%3cpath%20d='M1%202.86h7.24v10.797h10.516V2.878H26V30.86h-7.216V19.432H8.257V30.86H1zm106.993%2057.279v-19.21h-6.81v1.684c-.565-.421-1.09-.895-1.688-1.244-3.594-2.096-8.559-1.163-11.334%202.152-2.12%202.531-2.84%205.482-2.357%208.726.775%205.203%205.2%209.154%2010.728%208.448%201.839-.235%203.429-.982%204.531-2.563.023-.034.067-.052.158-.118v2.125h6.772zm-10.96-5.281c-2.617-.018-4.377-1.774-4.349-4.338.029-2.576%201.842-4.352%204.425-4.336%202.603.015%204.343%201.845%204.321%204.544-.019%202.437-1.839%204.147-4.397%204.13zm-36.018%205.297h.426c1.977%200%203.955-.009%205.932.008.359.003.46-.092.459-.457-.014-3.854.015-7.709-.025-11.563a13.58%2013.58%200%2000-.359-2.938c-.519-2.213-1.805-3.8-4.015-4.53-1.221-.403-2.481-.459-3.748-.373-1.988.136-3.631.951-4.845%202.568-.123.164-.251.324-.377.486a7.03%207.03%200%2000-.076-.024v-2.409h-6.771c-.007.132-.018.242-.018.353%200%206.164.002%2012.329-.007%2018.493-.001.326.108.394.408.392%202.002-.012%204.004-.006%206.007-.007.121%200%20.243-.011.392-.019v-.476c0-3.202-.012-6.403.011-9.605.004-.633.087-1.28.238-1.895.267-1.1.911-1.919%202.027-2.275.654-.209%201.325-.229%202.003-.118%201.108.181%201.803.838%202.095%201.897a6.28%206.28%200%2001.233%201.593c.019%203.452.01%206.905.01%2010.358v.541zM8.998%2046.565L0%2060.129h19.398v-5.65h-8.039l8.959-13.562H1.207v5.648h7.791M112.57%2029.023h6.765v31.136h-6.765zM80.399%2060.137V46.52h3.797v-5.64h-3.822v-5.74c-.134-.008-.244-.022-.353-.022-2.015-.001-4.03.005-6.045-.008-.313-.002-.401.09-.398.402.014%201.645.006%203.29.006%204.934v.466h-3.473v5.635h3.473v.535c0%204.219.004%208.437-.006%2012.656-.001.325.075.427.414.425%202.002-.017%204.004-.008%206.007-.009.111%200%20.222-.009.4-.017zM62.76%2030.599v-.492c0-2.449-.016-4.898.009-7.346a12.63%2012.63%200%2001.214-2.204c.299-1.581%201.08-2.823%202.717-3.281%201.497-.419%202.991-.384%204.436.267.053.024.113.034.183.055v-6.451c-3.109-.239-5.786.444-7.486%203.364l-.084-.068v-3.047h-6.74v19.203h6.751zm10.826-19.215h6.725v19.201h-6.725zM76.958.14c-2.068-.013-3.811%201.716-3.824%203.793a3.843%203.843%200%20003.779%203.874c2.076.029%203.838-1.715%203.847-3.81.01-2.1-1.71-3.844-3.802-3.857M44.509%2051.503c0-4.943-1.936-8.113-5.505-9.875-2.98-1.472-6.116-1.689-9.327-.983-2.159.476-4.075%201.449-5.621%203.062-1.755%201.832-2.585%204.049-2.624%206.577-.061%203.908%201.519%206.956%204.945%208.826%204.126%202.253%208.432%202.312%2012.653.283%203.637-1.749%205.419-4.795%205.479-7.89zm-11.544%203.355c-2.613-.004-4.38-1.745-4.379-4.314.002-2.555%201.836-4.369%204.406-4.36%202.544.009%204.369%201.837%204.364%204.369-.005%202.572-1.776%204.308-4.391%204.305zm19.926-32.902c0-4.943-1.936-8.114-5.505-9.875-2.98-1.472-6.116-1.689-9.327-.983-2.159.475-4.075%201.449-5.621%203.062-1.755%201.832-2.585%204.049-2.624%206.577-.061%203.907%201.519%206.955%204.945%208.826%204.126%202.253%208.432%202.311%2012.653.283%203.637-1.749%205.419-4.796%205.479-7.89zM41.346%2025.31c-2.612-.003-4.38-1.744-4.378-4.313.002-2.555%201.836-4.37%204.406-4.361%202.544.01%204.369%201.837%204.364%204.37-.005%202.572-1.777%204.308-4.392%204.304zM85.223%2021.556h34.415v-5.658H85.223z'%20fill='currentColor'%3e%3c/path%3e%3c/svg%3e",
  s0 = "/assets/horizontal-bg-BfpJD_DM.webp",
  qe = {
    name: "React Rajasthan",
    description: "The premier React community in Rajasthan, India",
    socialLinks: {
      Twitter: "https://x.com/react_rajasthan",
      LinkedIn: "https://www.linkedin.com/company/reactrajasthan",
      Instagram: "https://www.instagram.com/reactrajasthan",
      YouTube: "https://www.youtube.com/@ReactRajasthan",
      WhatsApp: "https://chat.whatsapp.com/KCMpUoo2AYfBAHTTYYIAAX",
    },
  },
  ri = [
    {
      id: "meetup#1",
      title: "Meetup #1",
      date: new Date("2025/07/20"),
      venue: {
        name: "Rajasthan International Centre",
        address: "Sansthan Path, JLN Marg, Jaipur - 302017",
        city: "Jaipur, Rajasthan",
        date: "July 20, 2025",
        time: "9:00 AM - 3:00 PM",
        mapUrl:
          "https://www.google.com/maps?ll=26.866866,75.819099&z=15&t=h&hl=en&gl=IN&mapclient=embed&cid=8335942949147421389",
        mapEmbed:
          "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4935.544777958819!2d75.8190989!3d26.866866399999996!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x396db776ca78d045%3A0x73af37f24fdaaacd!2sRajasthan%20International%20Center!5e1!3m2!1sen!2sin!4v1747550682526!5m2!1sen!2sin",
      },
      speakers: [
        {
          id: 1,
          name: "Uma Shankar Arora",
          role: "Tech Entrepreneur",
          imageUrl: Ru,
          linkedinUrl: "https://www.linkedin.com/in/usarora/",
          type: "general",
        },
        {
          id: 2,
          name: "Anil Pilania",
          role: "Managing Director",
          company: "MIDCAI",
          imageUrl: Dh,
          linkedinUrl: "https://www.linkedin.com/in/anilpilania/",
          type: "general",
        },
        {
          id: 3,
          name: "Vansh Kapoor",
          role: "Organizer",
          company: "React Delhi",
          imageUrl: Ih,
          linkedinUrl: "https://www.linkedin.com/in/vansh-kapoor/",
          type: "general",
        },
        {
          id: 4,
          name: "Vaibhav Hapani",
          role: "Software Engineer",
          company: "WSO2",
          imageUrl: Bh,
          linkedinUrl: "https://www.linkedin.com/in/vaibhav-hapani/",
          type: "general",
        },
        {
          id: 5,
          name: "Gaurav Kheterpal",
          role: "Founder & CEO",
          company: "Vanshiv Technologies",
          imageUrl: Fh,
          linkedinUrl: "https://www.linkedin.com/in/gauravkheterpal/",
          type: "panel",
        },
        {
          id: 6,
          name: "Shubham Gupta",
          role: "Associate Staff Engineer",
          company: "Nagarro",
          imageUrl: ol,
          linkedinUrl: "https://www.linkedin.com/in/shubhamguptag/",
          type: "panel",
        },
        {
          id: 7,
          name: "Himanshu Pahwa",
          role: "Senior Operations Manager",
          company: "Krytons Consultancy",
          imageUrl: $h,
          linkedinUrl: "https://www.linkedin.com/in/himanshu-pahwa-b0b011181/",
          type: "general",
        },
        {
          id: 8,
          name: "Dilnawaz Khan",
          role: "Founder",
          company: "Power Deck",
          imageUrl: Xh,
          linkedinUrl: "https://www.linkedin.com/in/dilnawazkhan/",
          type: "panel",
        },
        {
          id: 9,
          name: "Dr. Anubha Jain",
          role: "Director (CS & IT)",
          company: "IIS University",
          imageUrl: Zh,
          linkedinUrl: "https://www.linkedin.com/in/dr-anubha-jain-14054117/",
          type: "panel",
        },
        {
          id: 10,
          name: "Harshita Chugh",
          role: "Senior QA",
          company: "Atrium",
          imageUrl: t0,
          linkedinUrl: "https://www.linkedin.com/in/harshitachugh/",
          type: "general",
        },
        {
          id: 11,
          name: "Manjeet Sharma",
          role: "Principal Software Engineer",
          company: "Vista",
          imageUrl: n0,
          linkedinUrl: "https://www.linkedin.com/in/manjeet-sharma-b11756151/",
          type: "general",
        },
      ],
      sponsors: [
        {
          id: 0,
          name: "Krytons",
          tier: "silver",
          logoUrl: Yh,
          websiteUrl: "https://www.linkedin.com/company/krytons/",
        },
        {
          id: 1,
          name: "Zordial",
          tier: "gold",
          logoUrl: e0,
          websiteUrl: "https://zordial.com/",
        },
        {
          id: 2,
          name: "WSO2",
          tier: "silver",
          logoUrl: qh,
          websiteUrl: "https://wso2.com/",
        },
        {
          id: 3,
          name: "Grras",
          tier: "bronze",
          logoUrl: o0,
          websiteUrl: "https://grras.com/",
        },
        {
          id: 4,
          name: "Codeup",
          tier: "partner",
          logoUrl:
            "https://codeup.in/static/media/full-logo-white.a0d780b267862c65f814.be096c910fa935ad915a.webp",
          websiteUrl: "https://codeup.in",
        },
        {
          id: 5,
          name: "The Codeup Show",
          tier: "partner",
          logoUrl: "https://show.codeup.in/assets/logo.png",
          websiteUrl: "https://show.codeup.in",
        },
        {
          id: 6,
          name: "React Delhi",
          tier: "community",
          logoUrl: Qh,
          websiteUrl: "https://www.linkedin.com/company/react-delhi/",
        },
        {
          id: 7,
          name: "React Indore",
          tier: "community",
          logoUrl: Jh,
          websiteUrl: "https://www.linkedin.com/company/datacode-in/",
        },
        {
          id: 8,
          name: "Google Developer Groups On Campus - Poornima University",
          tier: "community",
          logoUrl: Gh,
          websiteUrl: "https://in.linkedin.com/company/gdg-poornima",
        },
        {
          id: 9,
          name: "Flutter Jaaipur",
          tier: "community",
          logoUrl: Wh,
          websiteUrl: "https://www.linkedin.com/company/flutterjaipur/",
        },
        {
          id: 10,
          name: "WomenInTech Conf",
          tier: "community",
          logoUrl: Kh,
          websiteUrl: "https://www.linkedin.com/company/womenintechconf/",
        },
        {
          id: 11,
          name: "Qaguides",
          tier: "community",
          logoUrl: Vh,
          websiteUrl: "https://www.linkedin.com/in/abhinav-qaguides-19601a5/",
        },
      ],
      organizers: [
        {
          id: 1,
          name: "Shubham Gupta",
          role: "Lead organizer",
          imageUrl: ol,
          twitterUrl: "https://twitter.com/shubhtt",
          linkedinUrl: "https://www.linkedin.com/in/shubhamguptag/",
        },
        {
          id: 2,
          name: "Kusum Ketu",
          role: "Co organizer",
          imageUrl: Ah,
          linkedinUrl: "https://www.linkedin.com/in/kusum-ketu-0895b873/",
        },
      ],
      volunteers: [
        {
          id: 1,
          name: "Priyanka Jangid",
          role: "Speaker's POC",
          imageUrl: Pu,
          linkedinUrl: "https://www.linkedin.com/in/priyankajangid0602/",
        },
        {
          id: 2,
          name: "Ojas Joshi",
          role: "Platform Handle",
          imageUrl: ni,
          linkedinUrl: "https://www.linkedin.com/in/ojas-joshi-2184262b6/",
        },
        {
          id: 3,
          name: "Kiran Choudhary",
          role: "Registrations",
          imageUrl: Hh,
          linkedinUrl: "https://www.linkedin.com/in/kiran-choudhary-532251273/",
        },
        {
          id: 4,
          name: "Safal Goyal",
          role: "Logistics",
          imageUrl: l0,
          linkedinUrl: "https://www.linkedin.com/in/safal-goyal-197b3187/",
        },
        {
          id: 5,
          name: "Tanishka Gupta",
          role: "Host",
          imageUrl: r0,
          linkedinUrl: "https://www.linkedin.com/in/tanishka-gupta-25b598368/",
        },
        {
          id: 6,
          name: "Himanshu Chandnani",
          role: "Platform handle",
          imageUrl: _u,
          linkedinUrl: "https://www.linkedin.com/in/himanshu-chandnani1/",
        },
      ],
    },
    {
      id: "meetup#2",
      title: "Meetup #2",
      date: new Date("2025/10/4"),
      venue: {
        name: "Celebal Technologies",
        address:
          "Celebal Technologies, 3rd Floor, A Wing, F-202, 204, RIICO Industrial Area, Mansarovar, Jaipur 302020",
        city: "Jaipur, Rajasthan",
        date: "Oct 4, 2025",
        time: "9:00 AM",
        mapUrl: "https://maps.app.goo.gl/P5K4xnvqdYvVr6s9A",
        mapEmbed:
          "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d939.8755236677044!2d75.77831746959897!3d26.834554995229784!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x396db5f111b23517%3A0x937732f0f202924e!2sCelebal%20Technologies%20-%20Mansarovar%20Jaipur!5e1!3m2!1sen!2sin!4v1755840665148!5m2!1sen!2sin",
      },
      speakers: [],
      sponsors: [
        {
          id: 4,
          name: "Codeup",
          tier: "partner",
          logoUrl:
            "https://codeup.in/static/media/full-logo-white.a0d780b267862c65f814.be096c910fa935ad915a.webp",
          websiteUrl: "https://codeup.in",
        },
        {
          id: 5,
          name: "The Codeup Show",
          tier: "partner",
          logoUrl: "https://show.codeup.in/assets/logo.png",
          websiteUrl: "https://show.codeup.in",
        },
      ],
      organizers: [
        {
          id: 1,
          name: "Shubham Gupta",
          role: "Lead organizer",
          imageUrl: ol,
          twitterUrl: "https://twitter.com/shubhtt",
          linkedinUrl: "https://www.linkedin.com/in/shubhamguptag/",
        },
      ],
      volunteers: [
        {
          id: 1,
          name: "Priyanka Jangid",
          role: "Speaker's POC",
          imageUrl: Pu,
          linkedinUrl: "https://www.linkedin.com/in/priyankajangid0602/",
        },
        {
          id: 2,
          name: "Ojas Joshi",
          role: "Platform Handle",
          imageUrl: ni,
          linkedinUrl: "https://www.linkedin.com/in/ojas-joshi-2184262b6/",
        },
        {
          id: 6,
          name: "Himanshu Chandnani",
          role: "Platform handle",
          imageUrl: _u,
          linkedinUrl: "https://www.linkedin.com/in/himanshu-chandnani1/",
        },
      ],
    },
    {
      id: "meetup#3",
      title: "Meetup #3",
      date: new Date("2025/11/1"),
      backgroundImageUrl: s0,
      venue: {
        name: "Horizontal Digital",
        address:
          "Horizontal Digital, Mall of Jaipur, Gandhi Path, B Block, Vaishali Nagar, Jaipur, Rajasthan 302021",
        city: "Jaipur, Rajasthan",
        date: "Nov 1, 2025",
        time: "9:00 AM",
        mapUrl: "https://maps.app.goo.gl/6ENhnkKEd9YnzohX6",
        mapEmbed:
          "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4238.921785769346!2d75.73163397598638!3d26.906199460369475!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x396dc9838f813e17%3A0x774746e24b7ea680!2sHorizontal%20Digital!5e1!3m2!1sen!2sin!4v1759813395794!5m2!1sen!2sin",
      },
      speakers: [],
      sponsors: [
        {
          id: 1,
          name: "Horizontal Digital",
          tier: "sponsor",
          logoUrl: i0,
          websiteUrl: "https://www.horizontaldigital.com",
        },
        {
          id: 4,
          name: "Codeup",
          tier: "partner",
          logoUrl:
            "https://codeup.in/static/media/full-logo-white.a0d780b267862c65f814.be096c910fa935ad915a.webp",
          websiteUrl: "https://codeup.in",
        },
        {
          id: 5,
          name: "The Codeup Show",
          tier: "partner",
          logoUrl: "https://show.codeup.in/assets/logo.png",
          websiteUrl: "https://show.codeup.in",
        },
      ],
      organizers: [
        {
          id: 1,
          name: "Shubham Gupta",
          role: "Organizer",
          imageUrl: ol,
          twitterUrl: "https://twitter.com/shubhtt",
          linkedinUrl: "https://www.linkedin.com/in/shubhamguptag/",
        },
        {
          id: 2,
          name: "Uma Shankar Arora",
          role: "Co organizer",
          imageUrl: Ru,
          linkedinUrl: "https://www.linkedin.com/in/usarora/",
        },
        {
          id: 3,
          name: "Ojas Joshi",
          role: "Co organizer",
          imageUrl: ni,
          linkedinUrl: "https://www.linkedin.com/in/ojas-joshi-2184262b6/",
        },
      ],
    },
  ],
  df = "/assets/react-BCShrYIt.png",
  ff = "/assets/fashion-BLeyHCG1.png",
  pf = k.createContext(void 0),
  a0 = ({ children: e }) => {
    const [t, n] = k.useState(null);
    return (
      k.useEffect(() => {
        const r = at();
        r != null && r.user && n(r.user);
      }, []),
      u.jsx(pf.Provider, { value: { user: t, setUser: n }, children: e })
    );
  },
  yo = () => {
    const e = k.useContext(pf);
    if (!e) throw new Error("useAuth must be used within an AuthProvider");
    return e;
  },
  Tu = () => {
    localStorage.removeItem("googleUser"),
      localStorage.removeItem("authToken"),
      window.location.reload();
  },
  at = () => {
    const e = localStorage.getItem("googleUser"),
      t = localStorage.getItem("authToken");
    if (e && t)
      try {
        return { user: JSON.parse(e), token: t };
      } catch (n) {
        console.error("Error parsing user data:", n);
      }
    return null;
  },
  ql = ({ onSignIn: e, afterSignin: t, customButton: n }) => {
    const { user: r, setUser: l } = yo(),
      [o, i] = k.useState(null),
      a = async (c) => {
        try {
          const p = await fetch("https://codeup.in/dev/auth", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ code: c.code }),
          });
          if (!p.ok) throw new Error("Backend authentication failed");
          const m = await p.json();
          localStorage.setItem("googleUser", JSON.stringify(m.user)),
            localStorage.setItem("authToken", m.token),
            l(m.user),
            e == null || e(m.user),
            t == null || t();
        } catch (p) {
          console.error("Error authenticating with backend:", p);
        }
      };
    if (
      (k.useEffect(() => {
        if (r) return;
        const c = document.createElement("script");
        return (
          (c.src = "https://accounts.google.com/gsi/client"),
          (c.async = !0),
          (c.defer = !0),
          (c.onload = () => {
            const p = google.accounts.oauth2.initCodeClient({
              client_id:
                "66449176523-brfmp9k38luah1vp9r6fns50831l2ke9.apps.googleusercontent.com",
              scope: "email profile openid",
              ux_mode: "popup",
              callback: a,
            });
            i(p);
          }),
          document.body.appendChild(c),
          () => {
            document.body.removeChild(c);
          }
        );
      }, [r]),
      r)
    )
      return null;
    const s = () => {
      o ? o.requestCode() : console.error("Google client not initialized yet.");
    };
    return n
      ? u.jsx("span", { style: { all: "unset" }, onClick: s, children: n })
      : u.jsx("button", {
          className:
            "bg-pink-400 text-white hover:bg-pink-700 px-4 py-2 rounded-md text-center font-medium w-full",
          type: "button",
          onClick: s,
          children: "Sign in",
        });
  };
/**
 * react-router v7.7.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */ var Lu = "popstate";
function u0(e = {}) {
  function t(l, o) {
    let {
      pathname: i = "/",
      search: a = "",
      hash: s = "",
    } = ln(l.location.hash.substring(1));
    return (
      !i.startsWith("/") && !i.startsWith(".") && (i = "/" + i),
      ts(
        "",
        { pathname: i, search: a, hash: s },
        (o.state && o.state.usr) || null,
        (o.state && o.state.key) || "default"
      )
    );
  }
  function n(l, o) {
    let i = l.document.querySelector("base"),
      a = "";
    if (i && i.getAttribute("href")) {
      let s = l.location.href,
        c = s.indexOf("#");
      a = c === -1 ? s : s.slice(0, c);
    }
    return a + "#" + (typeof o == "string" ? o : jr(o));
  }
  function r(l, o) {
    He(
      l.pathname.charAt(0) === "/",
      `relative pathnames are not supported in hash history.push(${JSON.stringify(
        o
      )})`
    );
  }
  return d0(t, n, r, e);
}
function K(e, t) {
  if (e === !1 || e === null || typeof e > "u") throw new Error(t);
}
function He(e, t) {
  if (!e) {
    typeof console < "u" && console.warn(t);
    try {
      throw new Error(t);
    } catch {}
  }
}
function c0() {
  return Math.random().toString(36).substring(2, 10);
}
function bu(e, t) {
  return { usr: e.state, key: e.key, idx: t };
}
function ts(e, t, n = null, r) {
  return {
    pathname: typeof e == "string" ? e : e.pathname,
    search: "",
    hash: "",
    ...(typeof t == "string" ? ln(t) : t),
    state: n,
    key: (t && t.key) || r || c0(),
  };
}
function jr({ pathname: e = "/", search: t = "", hash: n = "" }) {
  return (
    t && t !== "?" && (e += t.charAt(0) === "?" ? t : "?" + t),
    n && n !== "#" && (e += n.charAt(0) === "#" ? n : "#" + n),
    e
  );
}
function ln(e) {
  let t = {};
  if (e) {
    let n = e.indexOf("#");
    n >= 0 && ((t.hash = e.substring(n)), (e = e.substring(0, n)));
    let r = e.indexOf("?");
    r >= 0 && ((t.search = e.substring(r)), (e = e.substring(0, r))),
      e && (t.pathname = e);
  }
  return t;
}
function d0(e, t, n, r = {}) {
  let { window: l = document.defaultView, v5Compat: o = !1 } = r,
    i = l.history,
    a = "POP",
    s = null,
    c = p();
  c == null && ((c = 0), i.replaceState({ ...i.state, idx: c }, ""));
  function p() {
    return (i.state || { idx: null }).idx;
  }
  function m() {
    a = "POP";
    let h = p(),
      f = h == null ? null : h - c;
    (c = h), s && s({ action: a, location: v.location, delta: f });
  }
  function y(h, f) {
    a = "PUSH";
    let d = ts(v.location, h, f);
    n && n(d, h), (c = p() + 1);
    let g = bu(d, c),
      E = v.createHref(d);
    try {
      i.pushState(g, "", E);
    } catch (N) {
      if (N instanceof DOMException && N.name === "DataCloneError") throw N;
      l.location.assign(E);
    }
    o && s && s({ action: a, location: v.location, delta: 1 });
  }
  function x(h, f) {
    a = "REPLACE";
    let d = ts(v.location, h, f);
    n && n(d, h), (c = p());
    let g = bu(d, c),
      E = v.createHref(d);
    i.replaceState(g, "", E),
      o && s && s({ action: a, location: v.location, delta: 0 });
  }
  function w(h) {
    return f0(h);
  }
  let v = {
    get action() {
      return a;
    },
    get location() {
      return e(l, i);
    },
    listen(h) {
      if (s) throw new Error("A history only accepts one active listener");
      return (
        l.addEventListener(Lu, m),
        (s = h),
        () => {
          l.removeEventListener(Lu, m), (s = null);
        }
      );
    },
    createHref(h) {
      return t(l, h);
    },
    createURL: w,
    encodeLocation(h) {
      let f = w(h);
      return { pathname: f.pathname, search: f.search, hash: f.hash };
    },
    push: y,
    replace: x,
    go(h) {
      return i.go(h);
    },
  };
  return v;
}
function f0(e, t = !1) {
  let n = "http://localhost";
  typeof window < "u" &&
    (n =
      window.location.origin !== "null"
        ? window.location.origin
        : window.location.href),
    K(n, "No window.location.(origin|href) available to create URL");
  let r = typeof e == "string" ? e : jr(e);
  return (
    (r = r.replace(/ $/, "%20")),
    !t && r.startsWith("//") && (r = n + r),
    new URL(r, n)
  );
}
function mf(e, t, n = "/") {
  return p0(e, t, n, !1);
}
function p0(e, t, n, r) {
  let l = typeof t == "string" ? ln(t) : t,
    o = mt(l.pathname || "/", n);
  if (o == null) return null;
  let i = hf(e);
  m0(i);
  let a = null;
  for (let s = 0; a == null && s < i.length; ++s) {
    let c = C0(o);
    a = E0(i[s], c, r);
  }
  return a;
}
function hf(e, t = [], n = [], r = "") {
  let l = (o, i, a) => {
    let s = {
      relativePath: a === void 0 ? o.path || "" : a,
      caseSensitive: o.caseSensitive === !0,
      childrenIndex: i,
      route: o,
    };
    s.relativePath.startsWith("/") &&
      (K(
        s.relativePath.startsWith(r),
        `Absolute route path "${s.relativePath}" nested under path "${r}" is not valid. An absolute child route path must start with the combined path of all its parent routes.`
      ),
      (s.relativePath = s.relativePath.slice(r.length)));
    let c = ut([r, s.relativePath]),
      p = n.concat(s);
    o.children &&
      o.children.length > 0 &&
      (K(
        o.index !== !0,
        `Index routes must not have child routes. Please remove all child routes from route path "${c}".`
      ),
      hf(o.children, t, p, c)),
      !(o.path == null && !o.index) &&
        t.push({ path: c, score: k0(c, o.index), routesMeta: p });
  };
  return (
    e.forEach((o, i) => {
      var a;
      if (o.path === "" || !((a = o.path) != null && a.includes("?"))) l(o, i);
      else for (let s of gf(o.path)) l(o, i, s);
    }),
    t
  );
}
function gf(e) {
  let t = e.split("/");
  if (t.length === 0) return [];
  let [n, ...r] = t,
    l = n.endsWith("?"),
    o = n.replace(/\?$/, "");
  if (r.length === 0) return l ? [o, ""] : [o];
  let i = gf(r.join("/")),
    a = [];
  return (
    a.push(...i.map((s) => (s === "" ? o : [o, s].join("/")))),
    l && a.push(...i),
    a.map((s) => (e.startsWith("/") && s === "" ? "/" : s))
  );
}
function m0(e) {
  e.sort((t, n) =>
    t.score !== n.score
      ? n.score - t.score
      : S0(
          t.routesMeta.map((r) => r.childrenIndex),
          n.routesMeta.map((r) => r.childrenIndex)
        )
  );
}
var h0 = /^:[\w-]+$/,
  g0 = 3,
  y0 = 2,
  v0 = 1,
  w0 = 10,
  x0 = -2,
  Ou = (e) => e === "*";
function k0(e, t) {
  let n = e.split("/"),
    r = n.length;
  return (
    n.some(Ou) && (r += x0),
    t && (r += y0),
    n
      .filter((l) => !Ou(l))
      .reduce((l, o) => l + (h0.test(o) ? g0 : o === "" ? v0 : w0), r)
  );
}
function S0(e, t) {
  return e.length === t.length && e.slice(0, -1).every((r, l) => r === t[l])
    ? e[e.length - 1] - t[t.length - 1]
    : 0;
}
function E0(e, t, n = !1) {
  let { routesMeta: r } = e,
    l = {},
    o = "/",
    i = [];
  for (let a = 0; a < r.length; ++a) {
    let s = r[a],
      c = a === r.length - 1,
      p = o === "/" ? t : t.slice(o.length) || "/",
      m = Gl(
        { path: s.relativePath, caseSensitive: s.caseSensitive, end: c },
        p
      ),
      y = s.route;
    if (
      (!m &&
        c &&
        n &&
        !r[r.length - 1].route.index &&
        (m = Gl(
          { path: s.relativePath, caseSensitive: s.caseSensitive, end: !1 },
          p
        )),
      !m)
    )
      return null;
    Object.assign(l, m.params),
      i.push({
        params: l,
        pathname: ut([o, m.pathname]),
        pathnameBase: _0(ut([o, m.pathnameBase])),
        route: y,
      }),
      m.pathnameBase !== "/" && (o = ut([o, m.pathnameBase]));
  }
  return i;
}
function Gl(e, t) {
  typeof e == "string" && (e = { path: e, caseSensitive: !1, end: !0 });
  let [n, r] = N0(e.path, e.caseSensitive, e.end),
    l = t.match(n);
  if (!l) return null;
  let o = l[0],
    i = o.replace(/(.)\/+$/, "$1"),
    a = l.slice(1);
  return {
    params: r.reduce((c, { paramName: p, isOptional: m }, y) => {
      if (p === "*") {
        let w = a[y] || "";
        i = o.slice(0, o.length - w.length).replace(/(.)\/+$/, "$1");
      }
      const x = a[y];
      return (
        m && !x ? (c[p] = void 0) : (c[p] = (x || "").replace(/%2F/g, "/")), c
      );
    }, {}),
    pathname: o,
    pathnameBase: i,
    pattern: e,
  };
}
function N0(e, t = !1, n = !0) {
  He(
    e === "*" || !e.endsWith("*") || e.endsWith("/*"),
    `Route path "${e}" will be treated as if it were "${e.replace(
      /\*$/,
      "/*"
    )}" because the \`*\` character must always follow a \`/\` in the pattern. To get rid of this warning, please change the route path to "${e.replace(
      /\*$/,
      "/*"
    )}".`
  );
  let r = [],
    l =
      "^" +
      e
        .replace(/\/*\*?$/, "")
        .replace(/^\/*/, "/")
        .replace(/[\\.*+^${}|()[\]]/g, "\\$&")
        .replace(
          /\/:([\w-]+)(\?)?/g,
          (i, a, s) => (
            r.push({ paramName: a, isOptional: s != null }),
            s ? "/?([^\\/]+)?" : "/([^\\/]+)"
          )
        );
  return (
    e.endsWith("*")
      ? (r.push({ paramName: "*" }),
        (l += e === "*" || e === "/*" ? "(.*)$" : "(?:\\/(.+)|\\/*)$"))
      : n
      ? (l += "\\/*$")
      : e !== "" && e !== "/" && (l += "(?:(?=\\/|$))"),
    [new RegExp(l, t ? void 0 : "i"), r]
  );
}
function C0(e) {
  try {
    return e
      .split("/")
      .map((t) => decodeURIComponent(t).replace(/\//g, "%2F"))
      .join("/");
  } catch (t) {
    return (
      He(
        !1,
        `The URL path "${e}" could not be decoded because it is a malformed URL segment. This is probably due to a bad percent encoding (${t}).`
      ),
      e
    );
  }
}
function mt(e, t) {
  if (t === "/") return e;
  if (!e.toLowerCase().startsWith(t.toLowerCase())) return null;
  let n = t.endsWith("/") ? t.length - 1 : t.length,
    r = e.charAt(n);
  return r && r !== "/" ? null : e.slice(n) || "/";
}
function j0(e, t = "/") {
  let {
    pathname: n,
    search: r = "",
    hash: l = "",
  } = typeof e == "string" ? ln(e) : e;
  return {
    pathname: n ? (n.startsWith("/") ? n : R0(n, t)) : t,
    search: T0(r),
    hash: L0(l),
  };
}
function R0(e, t) {
  let n = t.replace(/\/+$/, "").split("/");
  return (
    e.split("/").forEach((l) => {
      l === ".." ? n.length > 1 && n.pop() : l !== "." && n.push(l);
    }),
    n.length > 1 ? n.join("/") : "/"
  );
}
function li(e, t, n, r) {
  return `Cannot include a '${e}' character in a manually specified \`to.${t}\` field [${JSON.stringify(
    r
  )}].  Please separate it out to the \`to.${n}\` field. Alternatively you may provide the full path as a string in <Link to="..."> and the router will parse it for you.`;
}
function P0(e) {
  return e.filter(
    (t, n) => n === 0 || (t.route.path && t.route.path.length > 0)
  );
}
function yf(e) {
  let t = P0(e);
  return t.map((n, r) => (r === t.length - 1 ? n.pathname : n.pathnameBase));
}
function vf(e, t, n, r = !1) {
  let l;
  typeof e == "string"
    ? (l = ln(e))
    : ((l = { ...e }),
      K(
        !l.pathname || !l.pathname.includes("?"),
        li("?", "pathname", "search", l)
      ),
      K(
        !l.pathname || !l.pathname.includes("#"),
        li("#", "pathname", "hash", l)
      ),
      K(!l.search || !l.search.includes("#"), li("#", "search", "hash", l)));
  let o = e === "" || l.pathname === "",
    i = o ? "/" : l.pathname,
    a;
  if (i == null) a = n;
  else {
    let m = t.length - 1;
    if (!r && i.startsWith("..")) {
      let y = i.split("/");
      for (; y[0] === ".."; ) y.shift(), (m -= 1);
      l.pathname = y.join("/");
    }
    a = m >= 0 ? t[m] : "/";
  }
  let s = j0(l, a),
    c = i && i !== "/" && i.endsWith("/"),
    p = (o || i === ".") && n.endsWith("/");
  return !s.pathname.endsWith("/") && (c || p) && (s.pathname += "/"), s;
}
var ut = (e) => e.join("/").replace(/\/\/+/g, "/"),
  _0 = (e) => e.replace(/\/+$/, "").replace(/^\/*/, "/"),
  T0 = (e) => (!e || e === "?" ? "" : e.startsWith("?") ? e : "?" + e),
  L0 = (e) => (!e || e === "#" ? "" : e.startsWith("#") ? e : "#" + e);
function b0(e) {
  return (
    e != null &&
    typeof e.status == "number" &&
    typeof e.statusText == "string" &&
    typeof e.internal == "boolean" &&
    "data" in e
  );
}
var wf = ["POST", "PUT", "PATCH", "DELETE"];
new Set(wf);
var O0 = ["GET", ...wf];
new Set(O0);
var zn = k.createContext(null);
zn.displayName = "DataRouter";
var vo = k.createContext(null);
vo.displayName = "DataRouterState";
k.createContext(!1);
var xf = k.createContext({ isTransitioning: !1 });
xf.displayName = "ViewTransition";
var U0 = k.createContext(new Map());
U0.displayName = "Fetchers";
var z0 = k.createContext(null);
z0.displayName = "Await";
var et = k.createContext(null);
et.displayName = "Navigation";
var Ur = k.createContext(null);
Ur.displayName = "Location";
var tt = k.createContext({ outlet: null, matches: [], isDataRoute: !1 });
tt.displayName = "Route";
var ia = k.createContext(null);
ia.displayName = "RouteError";
function M0(e, { relative: t } = {}) {
  K(zr(), "useHref() may be used only in the context of a <Router> component.");
  let { basename: n, navigator: r } = k.useContext(et),
    { hash: l, pathname: o, search: i } = Mr(e, { relative: t }),
    a = o;
  return (
    n !== "/" && (a = o === "/" ? n : ut([n, o])),
    r.createHref({ pathname: a, search: i, hash: l })
  );
}
function zr() {
  return k.useContext(Ur) != null;
}
function Mt() {
  return (
    K(
      zr(),
      "null may be used only in the context of a <Router> component."
    ),
    k.useContext(Ur).location
  );
}
var kf =
  "You should call navigate() in a React.useEffect(), not when your component is first rendered.";
function Sf(e) {
  k.useContext(et).static || k.useLayoutEffect(e);
}
function F0() {
  let { isDataRoute: e } = k.useContext(tt);
  return e ? G0() : A0();
}
function A0() {
  K(
    zr(),
    "useNavigate() may be used only in the context of a <Router> component."
  );
  let e = k.useContext(zn),
    { basename: t, navigator: n } = k.useContext(et),
    { matches: r } = k.useContext(tt),
    { pathname: l } = Mt(),
    o = JSON.stringify(yf(r)),
    i = k.useRef(!1);
  return (
    Sf(() => {
      i.current = !0;
    }),
    k.useCallback(
      (s, c = {}) => {
        if ((He(i.current, kf), !i.current)) return;
        if (typeof s == "number") {
          n.go(s);
          return;
        }
        let p = vf(s, JSON.parse(o), l, c.relative === "path");
        e == null &&
          t !== "/" &&
          (p.pathname = p.pathname === "/" ? t : ut([t, p.pathname])),
          (c.replace ? n.replace : n.push)(p, c.state, c);
      },
      [t, n, o, l, e]
    )
  );
}
k.createContext(null);
function I0() {
  let { matches: e } = k.useContext(tt),
    t = e[e.length - 1];
  return t ? t.params : {};
}
function Mr(e, { relative: t } = {}) {
  let { matches: n } = k.useContext(tt),
    { pathname: r } = Mt(),
    l = JSON.stringify(yf(n));
  return k.useMemo(() => vf(e, JSON.parse(l), r, t === "path"), [e, l, r, t]);
}
function D0(e, t) {
  return Ef(e, t);
}
function Ef(e, t, n, r) {
  var f;
  K(
    zr(),
    "useRoutes() may be used only in the context of a <Router> component."
  );
  let { navigator: l } = k.useContext(et),
    { matches: o } = k.useContext(tt),
    i = o[o.length - 1],
    a = i ? i.params : {},
    s = i ? i.pathname : "/",
    c = i ? i.pathnameBase : "/",
    p = i && i.route;
  {
    let d = (p && p.path) || "";
    Nf(
      s,
      !p || d.endsWith("*") || d.endsWith("*?"),
      `You rendered descendant <Routes> (or called \`useRoutes()\`) at "${s}" (under <Route path="${d}">) but the parent route path has no trailing "*". This means if you navigate deeper, the parent won't match anymore and therefore the child routes will never render.

Please change the parent <Route path="${d}"> to <Route path="${
        d === "/" ? "*" : `${d}/*`
      }">.`
    );
  }
  let m = Mt(),
    y;
  if (t) {
    let d = typeof t == "string" ? ln(t) : t;
    K(
      c === "/" || ((f = d.pathname) == null ? void 0 : f.startsWith(c)),
      `When overriding the location using \`<Routes location>\` or \`useRoutes(routes, location)\`, the location pathname must begin with the portion of the URL pathname that was matched by all parent routes. The current pathname base is "${c}" but pathname "${d.pathname}" was given in the \`location\` prop.`
    ),
      (y = d);
  } else y = m;
  let x = y.pathname || "/",
    w = x;
  if (c !== "/") {
    let d = c.replace(/^\//, "").split("/");
    w = "/" + x.replace(/^\//, "").split("/").slice(d.length).join("/");
  }
  let v = mf(e, { pathname: w });
  He(
    p || v != null,
    `No routes matched location "${y.pathname}${y.search}${y.hash}" `
  ),
    He(
      v == null ||
        v[v.length - 1].route.element !== void 0 ||
        v[v.length - 1].route.Component !== void 0 ||
        v[v.length - 1].route.lazy !== void 0,
      `Matched leaf route at location "${y.pathname}${y.search}${y.hash}" does not have an element or Component. This means it will render an <Outlet /> with a null value by default resulting in an "empty" page.`
    );
  let h = W0(
    v &&
      v.map((d) =>
        Object.assign({}, d, {
          params: Object.assign({}, a, d.params),
          pathname: ut([
            c,
            l.encodeLocation
              ? l.encodeLocation(d.pathname).pathname
              : d.pathname,
          ]),
          pathnameBase:
            d.pathnameBase === "/"
              ? c
              : ut([
                  c,
                  l.encodeLocation
                    ? l.encodeLocation(d.pathnameBase).pathname
                    : d.pathnameBase,
                ]),
        })
      ),
    o,
    n,
    r
  );
  return t && h
    ? k.createElement(
        Ur.Provider,
        {
          value: {
            location: {
              pathname: "/",
              search: "",
              hash: "",
              state: null,
              key: "default",
              ...y,
            },
            navigationType: "POP",
          },
        },
        h
      )
    : h;
}
function $0() {
  let e = q0(),
    t = b0(e)
      ? `${e.status} ${e.statusText}`
      : e instanceof Error
      ? e.message
      : JSON.stringify(e),
    n = e instanceof Error ? e.stack : null,
    r = "rgba(200,200,200, 0.5)",
    l = { padding: "0.5rem", backgroundColor: r },
    o = { padding: "2px 4px", backgroundColor: r },
    i = null;
  return (
    console.error("Error handled by React Router default ErrorBoundary:", e),
    (i = k.createElement(
      k.Fragment,
      null,
      k.createElement("p", null, "💿 Hey developer 👋"),
      k.createElement(
        "p",
        null,
        "You can provide a way better UX than this when your app throws errors by providing your own ",
        k.createElement("code", { style: o }, "ErrorBoundary"),
        " or",
        " ",
        k.createElement("code", { style: o }, "errorElement"),
        " prop on your route."
      )
    )),
    k.createElement(
      k.Fragment,
      null,
      k.createElement("h2", null, "Unexpected Application Error!"),
      k.createElement("h3", { style: { fontStyle: "italic" } }, t),
      n ? k.createElement("pre", { style: l }, n) : null,
      i
    )
  );
}
var B0 = k.createElement($0, null),
  H0 = class extends k.Component {
    constructor(e) {
      super(e),
        (this.state = {
          location: e.location,
          revalidation: e.revalidation,
          error: e.error,
        });
    }
    static getDerivedStateFromError(e) {
      return { error: e };
    }
    static getDerivedStateFromProps(e, t) {
      return t.location !== e.location ||
        (t.revalidation !== "idle" && e.revalidation === "idle")
        ? { error: e.error, location: e.location, revalidation: e.revalidation }
        : {
            error: e.error !== void 0 ? e.error : t.error,
            location: t.location,
            revalidation: e.revalidation || t.revalidation,
          };
    }
    componentDidCatch(e, t) {
      console.error(
        "React Router caught the following error during render",
        e,
        t
      );
    }
    render() {
      return this.state.error !== void 0
        ? k.createElement(
            tt.Provider,
            { value: this.props.routeContext },
            k.createElement(ia.Provider, {
              value: this.state.error,
              children: this.props.component,
            })
          )
        : this.props.children;
    }
  };
function V0({ routeContext: e, match: t, children: n }) {
  let r = k.useContext(zn);
  return (
    r &&
      r.static &&
      r.staticContext &&
      (t.route.errorElement || t.route.ErrorBoundary) &&
      (r.staticContext._deepestRenderedBoundaryId = t.route.id),
    k.createElement(tt.Provider, { value: e }, n)
  );
}
function W0(e, t = [], n = null, r = null) {
  if (e == null) {
    if (!n) return null;
    if (n.errors) e = n.matches;
    else if (t.length === 0 && !n.initialized && n.matches.length > 0)
      e = n.matches;
    else return null;
  }
  let l = e,
    o = n == null ? void 0 : n.errors;
  if (o != null) {
    let s = l.findIndex(
      (c) => c.route.id && (o == null ? void 0 : o[c.route.id]) !== void 0
    );
    K(
      s >= 0,
      `Could not find a matching route for errors on route IDs: ${Object.keys(
        o
      ).join(",")}`
    ),
      (l = l.slice(0, Math.min(l.length, s + 1)));
  }
  let i = !1,
    a = -1;
  if (n)
    for (let s = 0; s < l.length; s++) {
      let c = l[s];
      if (
        ((c.route.HydrateFallback || c.route.hydrateFallbackElement) && (a = s),
        c.route.id)
      ) {
        let { loaderData: p, errors: m } = n,
          y =
            c.route.loader &&
            !p.hasOwnProperty(c.route.id) &&
            (!m || m[c.route.id] === void 0);
        if (c.route.lazy || y) {
          (i = !0), a >= 0 ? (l = l.slice(0, a + 1)) : (l = [l[0]]);
          break;
        }
      }
    }
  return l.reduceRight((s, c, p) => {
    let m,
      y = !1,
      x = null,
      w = null;
    n &&
      ((m = o && c.route.id ? o[c.route.id] : void 0),
      (x = c.route.errorElement || B0),
      i &&
        (a < 0 && p === 0
          ? (Nf(
              "route-fallback",
              !1,
              "No `HydrateFallback` element provided to render during initial hydration"
            ),
            (y = !0),
            (w = null))
          : a === p &&
            ((y = !0), (w = c.route.hydrateFallbackElement || null))));
    let v = t.concat(l.slice(0, p + 1)),
      h = () => {
        let f;
        return (
          m
            ? (f = x)
            : y
            ? (f = w)
            : c.route.Component
            ? (f = k.createElement(c.route.Component, null))
            : c.route.element
            ? (f = c.route.element)
            : (f = s),
          k.createElement(V0, {
            match: c,
            routeContext: { outlet: s, matches: v, isDataRoute: n != null },
            children: f,
          })
        );
      };
    return n && (c.route.ErrorBoundary || c.route.errorElement || p === 0)
      ? k.createElement(H0, {
          location: n.location,
          revalidation: n.revalidation,
          component: x,
          error: m,
          children: h(),
          routeContext: { outlet: null, matches: v, isDataRoute: !0 },
        })
      : h();
  }, null);
}
function sa(e) {
  return `${e} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`;
}
function K0(e) {
  let t = k.useContext(zn);
  return K(t, sa(e)), t;
}
function Q0(e) {
  let t = k.useContext(vo);
  return K(t, sa(e)), t;
}
function Y0(e) {
  let t = k.useContext(tt);
  return K(t, sa(e)), t;
}
function aa(e) {
  let t = Y0(e),
    n = t.matches[t.matches.length - 1];
  return (
    K(n.route.id, `${e} can only be used on routes that contain a unique "id"`),
    n.route.id
  );
}
function J0() {
  return aa("useRouteId");
}
function q0() {
  var r;
  let e = k.useContext(ia),
    t = Q0("useRouteError"),
    n = aa("useRouteError");
  return e !== void 0 ? e : (r = t.errors) == null ? void 0 : r[n];
}
function G0() {
  let { router: e } = K0("useNavigate"),
    t = aa("useNavigate"),
    n = k.useRef(!1);
  return (
    Sf(() => {
      n.current = !0;
    }),
    k.useCallback(
      async (l, o = {}) => {
        He(n.current, kf),
          n.current &&
            (typeof l == "number"
              ? e.navigate(l)
              : await e.navigate(l, { fromRouteId: t, ...o }));
      },
      [e, t]
    )
  );
}
var Uu = {};
function Nf(e, t, n) {
  !t && !Uu[e] && ((Uu[e] = !0), He(!1, n));
}
k.memo(X0);
function X0({ routes: e, future: t, state: n }) {
  return Ef(e, void 0, n, t);
}
function wl(e) {
  K(
    !1,
    "A <Route> is only ever to be used as the child of <Routes> element, never rendered directly. Please wrap your <Route> in a <Routes>."
  );
}
function Z0({
  basename: e = "/",
  children: t = null,
  location: n,
  navigationType: r = "POP",
  navigator: l,
  static: o = !1,
}) {
  K(
    !zr(),
    "You cannot render a <Router> inside another <Router>. You should never have more than one in your app."
  );
  let i = e.replace(/^\/*/, "/"),
    a = k.useMemo(
      () => ({ basename: i, navigator: l, static: o, future: {} }),
      [i, l, o]
    );
  typeof n == "string" && (n = ln(n));
  let {
      pathname: s = "/",
      search: c = "",
      hash: p = "",
      state: m = null,
      key: y = "default",
    } = n,
    x = k.useMemo(() => {
      let w = mt(s, i);
      return w == null
        ? null
        : {
            location: { pathname: w, search: c, hash: p, state: m, key: y },
            navigationType: r,
          };
    }, [i, s, c, p, m, y, r]);
  return (
    He(
      x != null,
      `<Router basename="${i}"> is not able to match the URL "${s}${c}${p}" because it does not start with the basename, so the <Router> won't render anything.`
    ),
    x == null
      ? null
      : k.createElement(
          et.Provider,
          { value: a },
          k.createElement(Ur.Provider, { children: t, value: x })
        )
  );
}
function e1({ children: e, location: t }) {
  return D0(ns(e), t);
}
function ns(e, t = []) {
  let n = [];
  return (
    k.Children.forEach(e, (r, l) => {
      if (!k.isValidElement(r)) return;
      let o = [...t, l];
      if (r.type === k.Fragment) {
        n.push.apply(n, ns(r.props.children, o));
        return;
      }
      K(
        r.type === wl,
        `[${
          typeof r.type == "string" ? r.type : r.type.name
        }] is not a <Route> component. All component children of <Routes> must be a <Route> or <React.Fragment>`
      ),
        K(
          !r.props.index || !r.props.children,
          "An index route cannot have child routes."
        );
      let i = {
        id: r.props.id || o.join("-"),
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
      r.props.children && (i.children = ns(r.props.children, o)), n.push(i);
    }),
    n
  );
}
var xl = "get",
  kl = "application/x-www-form-urlencoded";
function wo(e) {
  return e != null && typeof e.tagName == "string";
}
function t1(e) {
  return wo(e) && e.tagName.toLowerCase() === "button";
}
function n1(e) {
  return wo(e) && e.tagName.toLowerCase() === "form";
}
function r1(e) {
  return wo(e) && e.tagName.toLowerCase() === "input";
}
function l1(e) {
  return !!(e.metaKey || e.altKey || e.ctrlKey || e.shiftKey);
}
function o1(e, t) {
  return e.button === 0 && (!t || t === "_self") && !l1(e);
}
var il = null;
function i1() {
  if (il === null)
    try {
      new FormData(document.createElement("form"), 0), (il = !1);
    } catch {
      il = !0;
    }
  return il;
}
var s1 = new Set([
  "application/x-www-form-urlencoded",
  "multipart/form-data",
  "text/plain",
]);
function oi(e) {
  return e != null && !s1.has(e)
    ? (He(
        !1,
        `"${e}" is not a valid \`encType\` for \`<Form>\`/\`<fetcher.Form>\` and will default to "${kl}"`
      ),
      null)
    : e;
}
function a1(e, t) {
  let n, r, l, o, i;
  if (n1(e)) {
    let a = e.getAttribute("action");
    (r = a ? mt(a, t) : null),
      (n = e.getAttribute("method") || xl),
      (l = oi(e.getAttribute("enctype")) || kl),
      (o = new FormData(e));
  } else if (t1(e) || (r1(e) && (e.type === "submit" || e.type === "image"))) {
    let a = e.form;
    if (a == null)
      throw new Error(
        'Cannot submit a <button> or <input type="submit"> without a <form>'
      );
    let s = e.getAttribute("formaction") || a.getAttribute("action");
    if (
      ((r = s ? mt(s, t) : null),
      (n = e.getAttribute("formmethod") || a.getAttribute("method") || xl),
      (l =
        oi(e.getAttribute("formenctype")) ||
        oi(a.getAttribute("enctype")) ||
        kl),
      (o = new FormData(a, e)),
      !i1())
    ) {
      let { name: c, type: p, value: m } = e;
      if (p === "image") {
        let y = c ? `${c}.` : "";
        o.append(`${y}x`, "0"), o.append(`${y}y`, "0");
      } else c && o.append(c, m);
    }
  } else {
    if (wo(e))
      throw new Error(
        'Cannot submit element that is not <form>, <button>, or <input type="submit|image">'
      );
    (n = xl), (r = null), (l = kl), (i = e);
  }
  return (
    o && l === "text/plain" && ((i = o), (o = void 0)),
    { action: r, method: n.toLowerCase(), encType: l, formData: o, body: i }
  );
}
Object.getOwnPropertyNames(Object.prototype).sort().join("\0");
function ua(e, t) {
  if (e === !1 || e === null || typeof e > "u") throw new Error(t);
}
function u1(e, t, n) {
  let r =
    typeof e == "string"
      ? new URL(
          e,
          typeof window > "u" ? "server://singlefetch/" : window.location.origin
        )
      : e;
  return (
    r.pathname === "/"
      ? (r.pathname = `_root.${n}`)
      : t && mt(r.pathname, t) === "/"
      ? (r.pathname = `${t.replace(/\/$/, "")}/_root.${n}`)
      : (r.pathname = `${r.pathname.replace(/\/$/, "")}.${n}`),
    r
  );
}
async function c1(e, t) {
  if (e.id in t) return t[e.id];
  try {
    let n = await import(e.module);
    return (t[e.id] = n), n;
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
function d1(e) {
  return e == null
    ? !1
    : e.href == null
    ? e.rel === "preload" &&
      typeof e.imageSrcSet == "string" &&
      typeof e.imageSizes == "string"
    : typeof e.rel == "string" && typeof e.href == "string";
}
async function f1(e, t, n) {
  let r = await Promise.all(
    e.map(async (l) => {
      let o = t.routes[l.route.id];
      if (o) {
        let i = await c1(o, n);
        return i.links ? i.links() : [];
      }
      return [];
    })
  );
  return g1(
    r
      .flat(1)
      .filter(d1)
      .filter((l) => l.rel === "stylesheet" || l.rel === "preload")
      .map((l) =>
        l.rel === "stylesheet"
          ? { ...l, rel: "prefetch", as: "style" }
          : { ...l, rel: "prefetch" }
      )
  );
}
function zu(e, t, n, r, l, o) {
  let i = (s, c) => (n[c] ? s.route.id !== n[c].route.id : !0),
    a = (s, c) => {
      var p;
      return (
        n[c].pathname !== s.pathname ||
        (((p = n[c].route.path) == null ? void 0 : p.endsWith("*")) &&
          n[c].params["*"] !== s.params["*"])
      );
    };
  return o === "assets"
    ? t.filter((s, c) => i(s, c) || a(s, c))
    : o === "data"
    ? t.filter((s, c) => {
        var m;
        let p = r.routes[s.route.id];
        if (!p || !p.hasLoader) return !1;
        if (i(s, c) || a(s, c)) return !0;
        if (s.route.shouldRevalidate) {
          let y = s.route.shouldRevalidate({
            currentUrl: new URL(l.pathname + l.search + l.hash, window.origin),
            currentParams: ((m = n[0]) == null ? void 0 : m.params) || {},
            nextUrl: new URL(e, window.origin),
            nextParams: s.params,
            defaultShouldRevalidate: !0,
          });
          if (typeof y == "boolean") return y;
        }
        return !0;
      })
    : [];
}
function p1(e, t, { includeHydrateFallback: n } = {}) {
  return m1(
    e
      .map((r) => {
        let l = t.routes[r.route.id];
        if (!l) return [];
        let o = [l.module];
        return (
          l.clientActionModule && (o = o.concat(l.clientActionModule)),
          l.clientLoaderModule && (o = o.concat(l.clientLoaderModule)),
          n &&
            l.hydrateFallbackModule &&
            (o = o.concat(l.hydrateFallbackModule)),
          l.imports && (o = o.concat(l.imports)),
          o
        );
      })
      .flat(1)
  );
}
function m1(e) {
  return [...new Set(e)];
}
function h1(e) {
  let t = {},
    n = Object.keys(e).sort();
  for (let r of n) t[r] = e[r];
  return t;
}
function g1(e, t) {
  let n = new Set();
  return (
    new Set(t),
    e.reduce((r, l) => {
      let o = JSON.stringify(h1(l));
      return n.has(o) || (n.add(o), r.push({ key: o, link: l })), r;
    }, [])
  );
}
function Cf() {
  let e = k.useContext(zn);
  return (
    ua(
      e,
      "You must render this element inside a <DataRouterContext.Provider> element"
    ),
    e
  );
}
function y1() {
  let e = k.useContext(vo);
  return (
    ua(
      e,
      "You must render this element inside a <DataRouterStateContext.Provider> element"
    ),
    e
  );
}
var ca = k.createContext(void 0);
ca.displayName = "FrameworkContext";
function jf() {
  let e = k.useContext(ca);
  return (
    ua(e, "You must render this element inside a <HydratedRouter> element"), e
  );
}
function v1(e, t) {
  let n = k.useContext(ca),
    [r, l] = k.useState(!1),
    [o, i] = k.useState(!1),
    {
      onFocus: a,
      onBlur: s,
      onMouseEnter: c,
      onMouseLeave: p,
      onTouchStart: m,
    } = t,
    y = k.useRef(null);
  k.useEffect(() => {
    if ((e === "render" && i(!0), e === "viewport")) {
      let v = (f) => {
          f.forEach((d) => {
            i(d.isIntersecting);
          });
        },
        h = new IntersectionObserver(v, { threshold: 0.5 });
      return (
        y.current && h.observe(y.current),
        () => {
          h.disconnect();
        }
      );
    }
  }, [e]),
    k.useEffect(() => {
      if (r) {
        let v = setTimeout(() => {
          i(!0);
        }, 100);
        return () => {
          clearTimeout(v);
        };
      }
    }, [r]);
  let x = () => {
      l(!0);
    },
    w = () => {
      l(!1), i(!1);
    };
  return n
    ? e !== "intent"
      ? [o, y, {}]
      : [
          o,
          y,
          {
            onFocus: Yn(a, x),
            onBlur: Yn(s, w),
            onMouseEnter: Yn(c, x),
            onMouseLeave: Yn(p, w),
            onTouchStart: Yn(m, x),
          },
        ]
    : [!1, y, {}];
}
function Yn(e, t) {
  return (n) => {
    e && e(n), n.defaultPrevented || t(n);
  };
}
function w1({ page: e, ...t }) {
  let { router: n } = Cf(),
    r = k.useMemo(() => mf(n.routes, e, n.basename), [n.routes, e, n.basename]);
  return r ? k.createElement(k1, { page: e, matches: r, ...t }) : null;
}
function x1(e) {
  let { manifest: t, routeModules: n } = jf(),
    [r, l] = k.useState([]);
  return (
    k.useEffect(() => {
      let o = !1;
      return (
        f1(e, t, n).then((i) => {
          o || l(i);
        }),
        () => {
          o = !0;
        }
      );
    }, [e, t, n]),
    r
  );
}
function k1({ page: e, matches: t, ...n }) {
  let r = Mt(),
    { manifest: l, routeModules: o } = jf(),
    { basename: i } = Cf(),
    { loaderData: a, matches: s } = y1(),
    c = k.useMemo(() => zu(e, t, s, l, r, "data"), [e, t, s, l, r]),
    p = k.useMemo(() => zu(e, t, s, l, r, "assets"), [e, t, s, l, r]),
    m = k.useMemo(() => {
      if (e === r.pathname + r.search + r.hash) return [];
      let w = new Set(),
        v = !1;
      if (
        (t.forEach((f) => {
          var g;
          let d = l.routes[f.route.id];
          !d ||
            !d.hasLoader ||
            ((!c.some((E) => E.route.id === f.route.id) &&
              f.route.id in a &&
              (g = o[f.route.id]) != null &&
              g.shouldRevalidate) ||
            d.hasClientLoader
              ? (v = !0)
              : w.add(f.route.id));
        }),
        w.size === 0)
      )
        return [];
      let h = u1(e, i, "data");
      return (
        v &&
          w.size > 0 &&
          h.searchParams.set(
            "_routes",
            t
              .filter((f) => w.has(f.route.id))
              .map((f) => f.route.id)
              .join(",")
          ),
        [h.pathname + h.search]
      );
    }, [i, a, r, l, c, t, e, o]),
    y = k.useMemo(() => p1(p, l), [p, l]),
    x = x1(p);
  return k.createElement(
    k.Fragment,
    null,
    m.map((w) =>
      k.createElement("link", {
        key: w,
        rel: "prefetch",
        as: "fetch",
        href: w,
        ...n,
      })
    ),
    y.map((w) =>
      k.createElement("link", { key: w, rel: "modulepreload", href: w, ...n })
    ),
    x.map(({ key: w, link: v }) => k.createElement("link", { key: w, ...v }))
  );
}
function S1(...e) {
  return (t) => {
    e.forEach((n) => {
      typeof n == "function" ? n(t) : n != null && (n.current = t);
    });
  };
}
var Rf =
  typeof window < "u" &&
  typeof window.document < "u" &&
  typeof window.document.createElement < "u";
try {
  Rf && (window.__reactRouterVersion = "7.7.0");
} catch {}
function E1({ basename: e, children: t, window: n }) {
  let r = k.useRef();
  r.current == null && (r.current = u0({ window: n, v5Compat: !0 }));
  let l = r.current,
    [o, i] = k.useState({ action: l.action, location: l.location }),
    a = k.useCallback(
      (s) => {
        k.startTransition(() => i(s));
      },
      [i]
    );
  return (
    k.useLayoutEffect(() => l.listen(a), [l, a]),
    k.createElement(Z0, {
      basename: e,
      children: t,
      location: o.location,
      navigationType: o.action,
      navigator: l,
    })
  );
}
var Pf = /^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,
  da = k.forwardRef(function (
    {
      onClick: t,
      discover: n = "render",
      prefetch: r = "none",
      relative: l,
      reloadDocument: o,
      replace: i,
      state: a,
      target: s,
      to: c,
      preventScrollReset: p,
      viewTransition: m,
      ...y
    },
    x
  ) {
    let { basename: w } = k.useContext(et),
      v = typeof c == "string" && Pf.test(c),
      h,
      f = !1;
    if (typeof c == "string" && v && ((h = c), Rf))
      try {
        let M = new URL(window.location.href),
          L = c.startsWith("//") ? new URL(M.protocol + c) : new URL(c),
          ge = mt(L.pathname, w);
        L.origin === M.origin && ge != null
          ? (c = ge + L.search + L.hash)
          : (f = !0);
      } catch {
        He(
          !1,
          `<Link to="${c}"> contains an invalid URL which will probably break when clicked - please update to a valid URL path.`
        );
      }
    let d = M0(c, { relative: l }),
      [g, E, N] = v1(r, y),
      j = R1(c, {
        replace: i,
        state: a,
        target: s,
        preventScrollReset: p,
        relative: l,
        viewTransition: m,
      });
    function R(M) {
      t && t(M), M.defaultPrevented || j(M);
    }
    let T = k.createElement("a", {
      ...y,
      ...N,
      href: h || d,
      onClick: f || o ? t : R,
      ref: S1(x, E),
      target: s,
      "data-discover": !v && n === "render" ? "true" : void 0,
    });
    return g && !v
      ? k.createElement(k.Fragment, null, T, k.createElement(w1, { page: d }))
      : T;
  });
da.displayName = "Link";
var N1 = k.forwardRef(function (
  {
    "aria-current": t = "page",
    caseSensitive: n = !1,
    className: r = "",
    end: l = !1,
    style: o,
    to: i,
    viewTransition: a,
    children: s,
    ...c
  },
  p
) {
  let m = Mr(i, { relative: c.relative }),
    y = Mt(),
    x = k.useContext(vo),
    { navigator: w, basename: v } = k.useContext(et),
    h = x != null && b1(m) && a === !0,
    f = w.encodeLocation ? w.encodeLocation(m).pathname : m.pathname,
    d = y.pathname,
    g =
      x && x.navigation && x.navigation.location
        ? x.navigation.location.pathname
        : null;
  n ||
    ((d = d.toLowerCase()),
    (g = g ? g.toLowerCase() : null),
    (f = f.toLowerCase())),
    g && v && (g = mt(g, v) || g);
  const E = f !== "/" && f.endsWith("/") ? f.length - 1 : f.length;
  let N = d === f || (!l && d.startsWith(f) && d.charAt(E) === "/"),
    j =
      g != null &&
      (g === f || (!l && g.startsWith(f) && g.charAt(f.length) === "/")),
    R = { isActive: N, isPending: j, isTransitioning: h },
    T = N ? t : void 0,
    M;
  typeof r == "function"
    ? (M = r(R))
    : (M = [
        r,
        N ? "active" : null,
        j ? "pending" : null,
        h ? "transitioning" : null,
      ]
        .filter(Boolean)
        .join(" "));
  let L = typeof o == "function" ? o(R) : o;
  return k.createElement(
    da,
    {
      ...c,
      "aria-current": T,
      className: M,
      ref: p,
      style: L,
      to: i,
      viewTransition: a,
    },
    typeof s == "function" ? s(R) : s
  );
});
N1.displayName = "NavLink";
var C1 = k.forwardRef(
  (
    {
      discover: e = "render",
      fetcherKey: t,
      navigate: n,
      reloadDocument: r,
      replace: l,
      state: o,
      method: i = xl,
      action: a,
      onSubmit: s,
      relative: c,
      preventScrollReset: p,
      viewTransition: m,
      ...y
    },
    x
  ) => {
    let w = T1(),
      v = L1(a, { relative: c }),
      h = i.toLowerCase() === "get" ? "get" : "post",
      f = typeof a == "string" && Pf.test(a),
      d = (g) => {
        if ((s && s(g), g.defaultPrevented)) return;
        g.preventDefault();
        let E = g.nativeEvent.submitter,
          N = (E == null ? void 0 : E.getAttribute("formmethod")) || i;
        w(E || g.currentTarget, {
          fetcherKey: t,
          method: N,
          navigate: n,
          replace: l,
          state: o,
          relative: c,
          preventScrollReset: p,
          viewTransition: m,
        });
      };
    return k.createElement("form", {
      ref: x,
      method: h,
      action: v,
      onSubmit: r ? s : d,
      ...y,
      "data-discover": !f && e === "render" ? "true" : void 0,
    });
  }
);
C1.displayName = "Form";
function j1(e) {
  return `${e} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`;
}
function _f(e) {
  let t = k.useContext(zn);
  return K(t, j1(e)), t;
}
function R1(
  e,
  {
    target: t,
    replace: n,
    state: r,
    preventScrollReset: l,
    relative: o,
    viewTransition: i,
  } = {}
) {
  let a = F0(),
    s = Mt(),
    c = Mr(e, { relative: o });
  return k.useCallback(
    (p) => {
      if (o1(p, t)) {
        p.preventDefault();
        let m = n !== void 0 ? n : jr(s) === jr(c);
        a(e, {
          replace: m,
          state: r,
          preventScrollReset: l,
          relative: o,
          viewTransition: i,
        });
      }
    },
    [s, a, c, n, r, t, e, l, o, i]
  );
}
var P1 = 0,
  _1 = () => `__${String(++P1)}__`;
function T1() {
  let { router: e } = _f("useSubmit"),
    { basename: t } = k.useContext(et),
    n = J0();
  return k.useCallback(
    async (r, l = {}) => {
      let { action: o, method: i, encType: a, formData: s, body: c } = a1(r, t);
      if (l.navigate === !1) {
        let p = l.fetcherKey || _1();
        await e.fetch(p, n, l.action || o, {
          preventScrollReset: l.preventScrollReset,
          formData: s,
          body: c,
          formMethod: l.method || i,
          formEncType: l.encType || a,
          flushSync: l.flushSync,
        });
      } else
        await e.navigate(l.action || o, {
          preventScrollReset: l.preventScrollReset,
          formData: s,
          body: c,
          formMethod: l.method || i,
          formEncType: l.encType || a,
          replace: l.replace,
          state: l.state,
          fromRouteId: n,
          flushSync: l.flushSync,
          viewTransition: l.viewTransition,
        });
    },
    [e, t, n]
  );
}
function L1(e, { relative: t } = {}) {
  let { basename: n } = k.useContext(et),
    r = k.useContext(tt);
  K(r, "useFormAction must be used inside a RouteContext");
  let [l] = r.matches.slice(-1),
    o = { ...Mr(e || ".", { relative: t }) },
    i = Mt();
  if (e == null) {
    o.search = i.search;
    let a = new URLSearchParams(o.search),
      s = a.getAll("index");
    if (s.some((p) => p === "")) {
      a.delete("index"),
        s.filter((m) => m).forEach((m) => a.append("index", m));
      let p = a.toString();
      o.search = p ? `?${p}` : "";
    }
  }
  return (
    (!e || e === ".") &&
      l.route.index &&
      (o.search = o.search ? o.search.replace(/^\?/, "?index&") : "?index"),
    n !== "/" && (o.pathname = o.pathname === "/" ? n : ut([n, o.pathname])),
    jr(o)
  );
}
function b1(e, t = {}) {
  let n = k.useContext(xf);
  K(
    n != null,
    "`useViewTransitionState` must be used within `react-router-dom`'s `RouterProvider`.  Did you accidentally import `RouterProvider` from `react-router`?"
  );
  let { basename: r } = _f("useViewTransitionState"),
    l = Mr(e, { relative: t.relative });
  if (!n.isTransitioning) return !1;
  let o = mt(n.currentLocation.pathname, r) || n.currentLocation.pathname,
    i = mt(n.nextLocation.pathname, r) || n.nextLocation.pathname;
  return Gl(l.pathname, i) != null || Gl(l.pathname, o) != null;
}
const Ye = (e, t = !0) => {
    const n = document.getElementById(e);
    n && n.scrollIntoView({ behavior: t ? "smooth" : "auto" });
  },
  O1 = ({ eventName: e, showFeedback: t }) => {
    const n = Mt(),
      [r, l] = k.useState([]),
      [o, i] = k.useState(!1),
      [a, s] = k.useState(0),
      { user: c, setUser: p } = yo(),
      m = k.useRef(null),
      [y, x] = k.useState(!1);
    k.useEffect(() => {
      l(
        n.pathname === "/"
          ? [
              { label: "Speakers", href: "#speakers" },
              { label: "Sponsors", href: "#sponsors" },
              { label: "Venue", href: "#venue" },
              { label: "Organizers", href: "#organizers" },
              { label: "Volunteers", href: "#volunteers" },
              ...(t && e
                ? [
                    {
                      label: "Feedback",
                      link: `/${e
                        .replaceAll(" ", "_")
                        .replaceAll("#", "")
                        .toLowerCase()}/feedback`,
                    },
                  ]
                : []),
            ]
          : []
      );
    }, [t, e]),
      k.useEffect(() => {
        const h = (f) => {
          m.current && !m.current.contains(f.target) && x(!1);
        };
        return (
          document.addEventListener("mousedown", h),
          () => {
            document.removeEventListener("mousedown", h);
          }
        );
      }, []),
      k.useEffect(() => {
        const h = at();
        h != null && h.user && p(h.user);
      }, []);
    const w = () => i(!o),
      v = () => i(!1);
    return (
      k.useEffect(() => {
        const h = () => {
          s(window.scrollY);
        };
        return (
          window.addEventListener("scroll", h),
          () => window.removeEventListener("scroll", h)
        );
      }),
      u.jsxs("header", {
        className:
          "fixed top-0 left-0 right-0 z-30 transition-all duration-300 bg-white shadow-md",
        children: [
          u.jsx("div", {
            className: "container mx-auto px-4",
            children: u.jsxs("div", {
              className: "flex items-center justify-between h-16 md:h-20",
              children: [
                u.jsx("div", {
                  className: "flex items-center",
                  children: u.jsx("a", {
                    href: "#",
                    className: "text-xl md:text-2xl font-bold text-pink-400",
                    children: u.jsxs("div", {
                      className: "flex",
                      style: { gap: 10 },
                      children: [
                        u.jsxs("div", {
                          className: "logo",
                          style: { transform: "translateY(-20%) scale(0.8)" },
                          children: [
                            u.jsx("img", {
                              src: df,
                              alt: "React",
                              style: { height: 40, rotate: `${a / 8}deg` },
                              className: "slow-spin",
                            }),
                            u.jsx("img", {
                              src: ff,
                              alt: "React",
                              style: {
                                position: "absolute",
                                height: 40,
                                transform: "translateY(-20%) scale(1.4)",
                              },
                            }),
                          ],
                        }),
                        qe.name,
                      ],
                    }),
                  }),
                }),
                u.jsxs("nav", {
                  className: `${
                    r.length === 0 ? "hidden" : ""
                  } lg:flex items-center space-x-8 hidden`,
                  children: [
                    r.map((h) => {
                      const f =
                        "text-sm font-medium transition-colors hover:text-pink-400 text-gray-900";
                      if (h.href) {
                        const d = h.href.replace("#", "");
                        return u.jsx(
                          "button",
                          {
                            onClick: (g) => {
                              g.preventDefault(), Ye(d);
                            },
                            className: f,
                            children: h.label,
                          },
                          d
                        );
                      } else if (h.link)
                        return u.jsx(
                          da,
                          { to: h.link, className: f, children: h.label },
                          h.link
                        );
                      return null;
                    }),
                    c
                      ? u.jsxs("div", {
                          ref: m,
                          className: "relative",
                          children: [
                            u.jsx("img", {
                              src: c.picture,
                              alt: "Profile",
                              className:
                                "w-10 h-10 rounded-full cursor-pointer",
                              onClick: () => x((h) => !h),
                            }),
                            y &&
                              u.jsx("div", {
                                className:
                                  "absolute right-0 mt-2 w-40 bg-white border rounded-md shadow-lg z-50",
                                children: u.jsx("button", {
                                  onClick: () => {
                                    Tu(), x(!1);
                                  },
                                  className:
                                    "w-full text-left px-4 py-2 text-sm text-red-600 hover:bg-gray-100",
                                  children: "Sign out",
                                }),
                              }),
                          ],
                        })
                      : u.jsx(ql, {
                          afterSignin: () => {
                            var h;
                            return p(
                              ((h = at()) == null ? void 0 : h.user) || null
                            );
                          },
                        }),
                  ],
                }),
                u.jsx("button", {
                  className: `${
                    r.length > 0 ? "lg:hidden" : "hidden"
                  } text-gray-900 focus:outline-none`,
                  onClick: w,
                  "aria-label": "Toggle menu",
                  children: o
                    ? u.jsx(zh, { className: "h-6 w-6" })
                    : u.jsx(Uh, { className: "h-6 w-6" }),
                }),
              ],
            }),
          }),
          o &&
            u.jsx("div", {
              className: "md:hidden bg-white",
              children: u.jsx("div", {
                className: "container mx-auto px-4 py-4",
                children: u.jsxs("nav", {
                  className: "flex flex-col space-y-4",
                  children: [
                    r.map((h, f) =>
                      u.jsx(
                        "button",
                        {
                          onClick: (d) => {
                            d.preventDefault(),
                              h.href && (v(), Ye(h.href.replace("#", "")));
                          },
                          className:
                            "text-left text-gray-900 hover:text-pink-400 font-medium",
                          children: h.label,
                        },
                        f
                      )
                    ),
                    c
                      ? u.jsxs("div", {
                          ref: m,
                          className: "relative",
                          children: [
                            u.jsx("img", {
                              src: c.picture,
                              alt: "Profile",
                              className:
                                "w-10 h-10 rounded-full cursor-pointer",
                              onClick: () => x((h) => !h),
                            }),
                            y &&
                              u.jsx("div", {
                                className:
                                  "absolute right-0 mt-2 w-40 bg-white border rounded-md shadow-lg z-50",
                                children: u.jsx("button", {
                                  onClick: () => {
                                    Tu(), x(!1);
                                  },
                                  className:
                                    "w-full text-left px-4 py-2 text-sm text-red-600 hover:bg-gray-100",
                                  children: "Sign out",
                                }),
                              }),
                          ],
                        })
                      : u.jsx(ql, {}),
                  ],
                }),
              }),
            }),
        ],
      })
    );
  };
let Sl = null,
  Rr = null;
const U1 = ({ show: e, message: t, onClose: n, buttons: r }) => {
    const l = !t;
    return (
      k.useEffect(
        () => (
          e
            ? (document.body.style.overflow = "hidden")
            : (document.body.style.overflow = ""),
          () => {
            document.body.style.overflow = "";
          }
        ),
        [e]
      ),
      e
        ? u.jsx("div", {
            className:
              "fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50",
            children: u.jsx("div", {
              className:
                "bg-white rounded-lg shadow-lg w-[90%] max-w-md p-6 text-center",
              children: l
                ? u.jsx("div", {
                    className:
                      "w-10 h-10 border-4 border-gray-300 border-t-pink-500 rounded-full animate-spin mx-auto my-4",
                  })
                : u.jsxs(u.Fragment, {
                    children: [
                      u.jsx("p", {
                        className:
                          "text-lg font-semibold mb-6 min-h-[100px] flex items-center justify-center whitespace-pre-line",
                        children: t,
                      }),
                      r ||
                        u.jsx("button", {
                          className:
                            "bg-pink-500 text-white hover:bg-pink-600 px-6 py-2 rounded-md font-medium",
                          onClick: n,
                          children: "Okay",
                        }),
                    ],
                  }),
            }),
          })
        : null
    );
  },
  z1 = () => {
    const [e, t] = k.useState({
      show: !1,
      message: null,
      onClose: void 0,
      buttons: void 0,
    });
    Rr = t;
    const n = () => {
      t({ show: !1, message: null }),
        typeof e.onClose == "function" && e.onClose();
    };
    return u.jsx(U1, {
      show: e.show,
      message: e.message,
      onClose: n,
      buttons: e.buttons,
    });
  },
  M1 = () => {
    if (!Sl) {
      const e = document.createElement("div");
      document.body.appendChild(e), (Sl = ra(e)), Sl.render(u.jsx(z1, {}));
    }
  },
  Z = (e, t, n) => {
    if (!Sl || !Rr) {
      console.warn(
        "Alert manager is not mounted. Call mountAlertManager() first."
      );
      return;
    }
    Rr({ show: !0, message: e || null, onClose: t, buttons: n });
  };
Z.close = () => {
  Rr && Rr({ show: !1, message: null, onClose: void 0, buttons: void 0 });
};
const en = "/assets/bg-xAp02XeW.png";
function Tf(e, t) {
  return function () {
    return e.apply(t, arguments);
  };
}
const { toString: F1 } = Object.prototype,
  { getPrototypeOf: fa } = Object,
  { iterator: xo, toStringTag: Lf } = Symbol,
  ko = ((e) => (t) => {
    const n = F1.call(t);
    return e[n] || (e[n] = n.slice(8, -1).toLowerCase());
  })(Object.create(null)),
  Ve = (e) => ((e = e.toLowerCase()), (t) => ko(t) === e),
  So = (e) => (t) => typeof t === e,
  { isArray: Mn } = Array,
  Pr = So("undefined");
function A1(e) {
  return (
    e !== null &&
    !Pr(e) &&
    e.constructor !== null &&
    !Pr(e.constructor) &&
    Se(e.constructor.isBuffer) &&
    e.constructor.isBuffer(e)
  );
}
const bf = Ve("ArrayBuffer");
function I1(e) {
  let t;
  return (
    typeof ArrayBuffer < "u" && ArrayBuffer.isView
      ? (t = ArrayBuffer.isView(e))
      : (t = e && e.buffer && bf(e.buffer)),
    t
  );
}
const D1 = So("string"),
  Se = So("function"),
  Of = So("number"),
  Eo = (e) => e !== null && typeof e == "object",
  $1 = (e) => e === !0 || e === !1,
  El = (e) => {
    if (ko(e) !== "object") return !1;
    const t = fa(e);
    return (
      (t === null ||
        t === Object.prototype ||
        Object.getPrototypeOf(t) === null) &&
      !(Lf in e) &&
      !(xo in e)
    );
  },
  B1 = Ve("Date"),
  H1 = Ve("File"),
  V1 = Ve("Blob"),
  W1 = Ve("FileList"),
  K1 = (e) => Eo(e) && Se(e.pipe),
  Q1 = (e) => {
    let t;
    return (
      e &&
      ((typeof FormData == "function" && e instanceof FormData) ||
        (Se(e.append) &&
          ((t = ko(e)) === "formdata" ||
            (t === "object" &&
              Se(e.toString) &&
              e.toString() === "[object FormData]"))))
    );
  },
  Y1 = Ve("URLSearchParams"),
  [J1, q1, G1, X1] = ["ReadableStream", "Request", "Response", "Headers"].map(
    Ve
  ),
  Z1 = (e) =>
    e.trim ? e.trim() : e.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, "");
function Fr(e, t, { allOwnKeys: n = !1 } = {}) {
  if (e === null || typeof e > "u") return;
  let r, l;
  if ((typeof e != "object" && (e = [e]), Mn(e)))
    for (r = 0, l = e.length; r < l; r++) t.call(null, e[r], r, e);
  else {
    const o = n ? Object.getOwnPropertyNames(e) : Object.keys(e),
      i = o.length;
    let a;
    for (r = 0; r < i; r++) (a = o[r]), t.call(null, e[a], a, e);
  }
}
function Uf(e, t) {
  t = t.toLowerCase();
  const n = Object.keys(e);
  let r = n.length,
    l;
  for (; r-- > 0; ) if (((l = n[r]), t === l.toLowerCase())) return l;
  return null;
}
const Wt =
    typeof globalThis < "u"
      ? globalThis
      : typeof self < "u"
      ? self
      : typeof window < "u"
      ? window
      : global,
  zf = (e) => !Pr(e) && e !== Wt;
function rs() {
  const { caseless: e } = (zf(this) && this) || {},
    t = {},
    n = (r, l) => {
      const o = (e && Uf(t, l)) || l;
      El(t[o]) && El(r)
        ? (t[o] = rs(t[o], r))
        : El(r)
        ? (t[o] = rs({}, r))
        : Mn(r)
        ? (t[o] = r.slice())
        : (t[o] = r);
    };
  for (let r = 0, l = arguments.length; r < l; r++)
    arguments[r] && Fr(arguments[r], n);
  return t;
}
const eg = (e, t, n, { allOwnKeys: r } = {}) => (
    Fr(
      t,
      (l, o) => {
        n && Se(l) ? (e[o] = Tf(l, n)) : (e[o] = l);
      },
      { allOwnKeys: r }
    ),
    e
  ),
  tg = (e) => (e.charCodeAt(0) === 65279 && (e = e.slice(1)), e),
  ng = (e, t, n, r) => {
    (e.prototype = Object.create(t.prototype, r)),
      (e.prototype.constructor = e),
      Object.defineProperty(e, "super", { value: t.prototype }),
      n && Object.assign(e.prototype, n);
  },
  rg = (e, t, n, r) => {
    let l, o, i;
    const a = {};
    if (((t = t || {}), e == null)) return t;
    do {
      for (l = Object.getOwnPropertyNames(e), o = l.length; o-- > 0; )
        (i = l[o]), (!r || r(i, e, t)) && !a[i] && ((t[i] = e[i]), (a[i] = !0));
      e = n !== !1 && fa(e);
    } while (e && (!n || n(e, t)) && e !== Object.prototype);
    return t;
  },
  lg = (e, t, n) => {
    (e = String(e)),
      (n === void 0 || n > e.length) && (n = e.length),
      (n -= t.length);
    const r = e.indexOf(t, n);
    return r !== -1 && r === n;
  },
  og = (e) => {
    if (!e) return null;
    if (Mn(e)) return e;
    let t = e.length;
    if (!Of(t)) return null;
    const n = new Array(t);
    for (; t-- > 0; ) n[t] = e[t];
    return n;
  },
  ig = (
    (e) => (t) =>
      e && t instanceof e
  )(typeof Uint8Array < "u" && fa(Uint8Array)),
  sg = (e, t) => {
    const r = (e && e[xo]).call(e);
    let l;
    for (; (l = r.next()) && !l.done; ) {
      const o = l.value;
      t.call(e, o[0], o[1]);
    }
  },
  ag = (e, t) => {
    let n;
    const r = [];
    for (; (n = e.exec(t)) !== null; ) r.push(n);
    return r;
  },
  ug = Ve("HTMLFormElement"),
  cg = (e) =>
    e.toLowerCase().replace(/[-_\s]([a-z\d])(\w*)/g, function (n, r, l) {
      return r.toUpperCase() + l;
    }),
  Mu = (
    ({ hasOwnProperty: e }) =>
    (t, n) =>
      e.call(t, n)
  )(Object.prototype),
  dg = Ve("RegExp"),
  Mf = (e, t) => {
    const n = Object.getOwnPropertyDescriptors(e),
      r = {};
    Fr(n, (l, o) => {
      let i;
      (i = t(l, o, e)) !== !1 && (r[o] = i || l);
    }),
      Object.defineProperties(e, r);
  },
  fg = (e) => {
    Mf(e, (t, n) => {
      if (Se(e) && ["arguments", "caller", "callee"].indexOf(n) !== -1)
        return !1;
      const r = e[n];
      if (Se(r)) {
        if (((t.enumerable = !1), "writable" in t)) {
          t.writable = !1;
          return;
        }
        t.set ||
          (t.set = () => {
            throw Error("Can not rewrite read-only method '" + n + "'");
          });
      }
    });
  },
  pg = (e, t) => {
    const n = {},
      r = (l) => {
        l.forEach((o) => {
          n[o] = !0;
        });
      };
    return Mn(e) ? r(e) : r(String(e).split(t)), n;
  },
  mg = () => {},
  hg = (e, t) => (e != null && Number.isFinite((e = +e)) ? e : t);
function gg(e) {
  return !!(e && Se(e.append) && e[Lf] === "FormData" && e[xo]);
}
const yg = (e) => {
    const t = new Array(10),
      n = (r, l) => {
        if (Eo(r)) {
          if (t.indexOf(r) >= 0) return;
          if (!("toJSON" in r)) {
            t[l] = r;
            const o = Mn(r) ? [] : {};
            return (
              Fr(r, (i, a) => {
                const s = n(i, l + 1);
                !Pr(s) && (o[a] = s);
              }),
              (t[l] = void 0),
              o
            );
          }
        }
        return r;
      };
    return n(e, 0);
  },
  vg = Ve("AsyncFunction"),
  wg = (e) => e && (Eo(e) || Se(e)) && Se(e.then) && Se(e.catch),
  Ff = ((e, t) =>
    e
      ? setImmediate
      : t
      ? ((n, r) => (
          Wt.addEventListener(
            "message",
            ({ source: l, data: o }) => {
              l === Wt && o === n && r.length && r.shift()();
            },
            !1
          ),
          (l) => {
            r.push(l), Wt.postMessage(n, "*");
          }
        ))(`axios@${Math.random()}`, [])
      : (n) => setTimeout(n))(
    typeof setImmediate == "function",
    Se(Wt.postMessage)
  ),
  xg =
    typeof queueMicrotask < "u"
      ? queueMicrotask.bind(Wt)
      : (typeof process < "u" && process.nextTick) || Ff,
  kg = (e) => e != null && Se(e[xo]),
  S = {
    isArray: Mn,
    isArrayBuffer: bf,
    isBuffer: A1,
    isFormData: Q1,
    isArrayBufferView: I1,
    isString: D1,
    isNumber: Of,
    isBoolean: $1,
    isObject: Eo,
    isPlainObject: El,
    isReadableStream: J1,
    isRequest: q1,
    isResponse: G1,
    isHeaders: X1,
    isUndefined: Pr,
    isDate: B1,
    isFile: H1,
    isBlob: V1,
    isRegExp: dg,
    isFunction: Se,
    isStream: K1,
    isURLSearchParams: Y1,
    isTypedArray: ig,
    isFileList: W1,
    forEach: Fr,
    merge: rs,
    extend: eg,
    trim: Z1,
    stripBOM: tg,
    inherits: ng,
    toFlatObject: rg,
    kindOf: ko,
    kindOfTest: Ve,
    endsWith: lg,
    toArray: og,
    forEachEntry: sg,
    matchAll: ag,
    isHTMLForm: ug,
    hasOwnProperty: Mu,
    hasOwnProp: Mu,
    reduceDescriptors: Mf,
    freezeMethods: fg,
    toObjectSet: pg,
    toCamelCase: cg,
    noop: mg,
    toFiniteNumber: hg,
    findKey: Uf,
    global: Wt,
    isContextDefined: zf,
    isSpecCompliantForm: gg,
    toJSONObject: yg,
    isAsyncFn: vg,
    isThenable: wg,
    setImmediate: Ff,
    asap: xg,
    isIterable: kg,
  };
function b(e, t, n, r, l) {
  Error.call(this),
    Error.captureStackTrace
      ? Error.captureStackTrace(this, this.constructor)
      : (this.stack = new Error().stack),
    (this.message = e),
    (this.name = "AxiosError"),
    t && (this.code = t),
    n && (this.config = n),
    r && (this.request = r),
    l && ((this.response = l), (this.status = l.status ? l.status : null));
}
S.inherits(b, Error, {
  toJSON: function () {
    return {
      message: this.message,
      name: this.name,
      description: this.description,
      number: this.number,
      fileName: this.fileName,
      lineNumber: this.lineNumber,
      columnNumber: this.columnNumber,
      stack: this.stack,
      config: S.toJSONObject(this.config),
      code: this.code,
      status: this.status,
    };
  },
});
const Af = b.prototype,
  If = {};
[
  "ERR_BAD_OPTION_VALUE",
  "ERR_BAD_OPTION",
  "ECONNABORTED",
  "ETIMEDOUT",
  "ERR_NETWORK",
  "ERR_FR_TOO_MANY_REDIRECTS",
  "ERR_DEPRECATED",
  "ERR_BAD_RESPONSE",
  "ERR_BAD_REQUEST",
  "ERR_CANCELED",
  "ERR_NOT_SUPPORT",
  "ERR_INVALID_URL",
].forEach((e) => {
  If[e] = { value: e };
});
Object.defineProperties(b, If);
Object.defineProperty(Af, "isAxiosError", { value: !0 });
b.from = (e, t, n, r, l, o) => {
  const i = Object.create(Af);
  return (
    S.toFlatObject(
      e,
      i,
      function (s) {
        return s !== Error.prototype;
      },
      (a) => a !== "isAxiosError"
    ),
    b.call(i, e.message, t, n, r, l),
    (i.cause = e),
    (i.name = e.name),
    o && Object.assign(i, o),
    i
  );
};
const Sg = null;
function ls(e) {
  return S.isPlainObject(e) || S.isArray(e);
}
function Df(e) {
  return S.endsWith(e, "[]") ? e.slice(0, -2) : e;
}
function Fu(e, t, n) {
  return e
    ? e
        .concat(t)
        .map(function (l, o) {
          return (l = Df(l)), !n && o ? "[" + l + "]" : l;
        })
        .join(n ? "." : "")
    : t;
}
function Eg(e) {
  return S.isArray(e) && !e.some(ls);
}
const Ng = S.toFlatObject(S, {}, null, function (t) {
  return /^is[A-Z]/.test(t);
});
function No(e, t, n) {
  if (!S.isObject(e)) throw new TypeError("target must be an object");
  (t = t || new FormData()),
    (n = S.toFlatObject(
      n,
      { metaTokens: !0, dots: !1, indexes: !1 },
      !1,
      function (v, h) {
        return !S.isUndefined(h[v]);
      }
    ));
  const r = n.metaTokens,
    l = n.visitor || p,
    o = n.dots,
    i = n.indexes,
    s = (n.Blob || (typeof Blob < "u" && Blob)) && S.isSpecCompliantForm(t);
  if (!S.isFunction(l)) throw new TypeError("visitor must be a function");
  function c(w) {
    if (w === null) return "";
    if (S.isDate(w)) return w.toISOString();
    if (!s && S.isBlob(w))
      throw new b("Blob is not supported. Use a Buffer instead.");
    return S.isArrayBuffer(w) || S.isTypedArray(w)
      ? s && typeof Blob == "function"
        ? new Blob([w])
        : Buffer.from(w)
      : w;
  }
  function p(w, v, h) {
    let f = w;
    if (w && !h && typeof w == "object") {
      if (S.endsWith(v, "{}"))
        (v = r ? v : v.slice(0, -2)), (w = JSON.stringify(w));
      else if (
        (S.isArray(w) && Eg(w)) ||
        ((S.isFileList(w) || S.endsWith(v, "[]")) && (f = S.toArray(w)))
      )
        return (
          (v = Df(v)),
          f.forEach(function (g, E) {
            !(S.isUndefined(g) || g === null) &&
              t.append(
                i === !0 ? Fu([v], E, o) : i === null ? v : v + "[]",
                c(g)
              );
          }),
          !1
        );
    }
    return ls(w) ? !0 : (t.append(Fu(h, v, o), c(w)), !1);
  }
  const m = [],
    y = Object.assign(Ng, {
      defaultVisitor: p,
      convertValue: c,
      isVisitable: ls,
    });
  function x(w, v) {
    if (!S.isUndefined(w)) {
      if (m.indexOf(w) !== -1)
        throw Error("Circular reference detected in " + v.join("."));
      m.push(w),
        S.forEach(w, function (f, d) {
          (!(S.isUndefined(f) || f === null) &&
            l.call(t, f, S.isString(d) ? d.trim() : d, v, y)) === !0 &&
            x(f, v ? v.concat(d) : [d]);
        }),
        m.pop();
    }
  }
  if (!S.isObject(e)) throw new TypeError("data must be an object");
  return x(e), t;
}
function Au(e) {
  const t = {
    "!": "%21",
    "'": "%27",
    "(": "%28",
    ")": "%29",
    "~": "%7E",
    "%20": "+",
    "%00": "\0",
  };
  return encodeURIComponent(e).replace(/[!'()~]|%20|%00/g, function (r) {
    return t[r];
  });
}
function pa(e, t) {
  (this._pairs = []), e && No(e, this, t);
}
const $f = pa.prototype;
$f.append = function (t, n) {
  this._pairs.push([t, n]);
};
$f.toString = function (t) {
  const n = t
    ? function (r) {
        return t.call(this, r, Au);
      }
    : Au;
  return this._pairs
    .map(function (l) {
      return n(l[0]) + "=" + n(l[1]);
    }, "")
    .join("&");
};
function Cg(e) {
  return encodeURIComponent(e)
    .replace(/%3A/gi, ":")
    .replace(/%24/g, "$")
    .replace(/%2C/gi, ",")
    .replace(/%20/g, "+")
    .replace(/%5B/gi, "[")
    .replace(/%5D/gi, "]");
}
function Bf(e, t, n) {
  if (!t) return e;
  const r = (n && n.encode) || Cg;
  S.isFunction(n) && (n = { serialize: n });
  const l = n && n.serialize;
  let o;
  if (
    (l
      ? (o = l(t, n))
      : (o = S.isURLSearchParams(t) ? t.toString() : new pa(t, n).toString(r)),
    o)
  ) {
    const i = e.indexOf("#");
    i !== -1 && (e = e.slice(0, i)),
      (e += (e.indexOf("?") === -1 ? "?" : "&") + o);
  }
  return e;
}
class Iu {
  constructor() {
    this.handlers = [];
  }
  use(t, n, r) {
    return (
      this.handlers.push({
        fulfilled: t,
        rejected: n,
        synchronous: r ? r.synchronous : !1,
        runWhen: r ? r.runWhen : null,
      }),
      this.handlers.length - 1
    );
  }
  eject(t) {
    this.handlers[t] && (this.handlers[t] = null);
  }
  clear() {
    this.handlers && (this.handlers = []);
  }
  forEach(t) {
    S.forEach(this.handlers, function (r) {
      r !== null && t(r);
    });
  }
}
const Hf = {
    silentJSONParsing: !0,
    forcedJSONParsing: !0,
    clarifyTimeoutError: !1,
  },
  jg = typeof URLSearchParams < "u" ? URLSearchParams : pa,
  Rg = typeof FormData < "u" ? FormData : null,
  Pg = typeof Blob < "u" ? Blob : null,
  _g = {
    isBrowser: !0,
    classes: { URLSearchParams: jg, FormData: Rg, Blob: Pg },
    protocols: ["http", "https", "file", "blob", "url", "data"],
  },
  ma = typeof window < "u" && typeof document < "u",
  os = (typeof navigator == "object" && navigator) || void 0,
  Tg =
    ma &&
    (!os || ["ReactNative", "NativeScript", "NS"].indexOf(os.product) < 0),
  Lg =
    typeof WorkerGlobalScope < "u" &&
    self instanceof WorkerGlobalScope &&
    typeof self.importScripts == "function",
  bg = (ma && window.location.href) || "http://localhost",
  Og = Object.freeze(
    Object.defineProperty(
      {
        __proto__: null,
        hasBrowserEnv: ma,
        hasStandardBrowserEnv: Tg,
        hasStandardBrowserWebWorkerEnv: Lg,
        navigator: os,
        origin: bg,
      },
      Symbol.toStringTag,
      { value: "Module" }
    )
  ),
  ce = { ...Og, ..._g };
function Ug(e, t) {
  return No(
    e,
    new ce.classes.URLSearchParams(),
    Object.assign(
      {
        visitor: function (n, r, l, o) {
          return ce.isNode && S.isBuffer(n)
            ? (this.append(r, n.toString("base64")), !1)
            : o.defaultVisitor.apply(this, arguments);
        },
      },
      t
    )
  );
}
function zg(e) {
  return S.matchAll(/\w+|\[(\w*)]/g, e).map((t) =>
    t[0] === "[]" ? "" : t[1] || t[0]
  );
}
function Mg(e) {
  const t = {},
    n = Object.keys(e);
  let r;
  const l = n.length;
  let o;
  for (r = 0; r < l; r++) (o = n[r]), (t[o] = e[o]);
  return t;
}
function Vf(e) {
  function t(n, r, l, o) {
    let i = n[o++];
    if (i === "__proto__") return !0;
    const a = Number.isFinite(+i),
      s = o >= n.length;
    return (
      (i = !i && S.isArray(l) ? l.length : i),
      s
        ? (S.hasOwnProp(l, i) ? (l[i] = [l[i], r]) : (l[i] = r), !a)
        : ((!l[i] || !S.isObject(l[i])) && (l[i] = []),
          t(n, r, l[i], o) && S.isArray(l[i]) && (l[i] = Mg(l[i])),
          !a)
    );
  }
  if (S.isFormData(e) && S.isFunction(e.entries)) {
    const n = {};
    return (
      S.forEachEntry(e, (r, l) => {
        t(zg(r), l, n, 0);
      }),
      n
    );
  }
  return null;
}
function Fg(e, t, n) {
  if (S.isString(e))
    try {
      return (t || JSON.parse)(e), S.trim(e);
    } catch (r) {
      if (r.name !== "SyntaxError") throw r;
    }
  return (0, JSON.stringify)(e);
}
const Ar = {
  transitional: Hf,
  adapter: ["xhr", "http", "fetch"],
  transformRequest: [
    function (t, n) {
      const r = n.getContentType() || "",
        l = r.indexOf("application/json") > -1,
        o = S.isObject(t);
      if ((o && S.isHTMLForm(t) && (t = new FormData(t)), S.isFormData(t)))
        return l ? JSON.stringify(Vf(t)) : t;
      if (
        S.isArrayBuffer(t) ||
        S.isBuffer(t) ||
        S.isStream(t) ||
        S.isFile(t) ||
        S.isBlob(t) ||
        S.isReadableStream(t)
      )
        return t;
      if (S.isArrayBufferView(t)) return t.buffer;
      if (S.isURLSearchParams(t))
        return (
          n.setContentType(
            "application/x-www-form-urlencoded;charset=utf-8",
            !1
          ),
          t.toString()
        );
      let a;
      if (o) {
        if (r.indexOf("application/x-www-form-urlencoded") > -1)
          return Ug(t, this.formSerializer).toString();
        if ((a = S.isFileList(t)) || r.indexOf("multipart/form-data") > -1) {
          const s = this.env && this.env.FormData;
          return No(
            a ? { "files[]": t } : t,
            s && new s(),
            this.formSerializer
          );
        }
      }
      return o || l ? (n.setContentType("application/json", !1), Fg(t)) : t;
    },
  ],
  transformResponse: [
    function (t) {
      const n = this.transitional || Ar.transitional,
        r = n && n.forcedJSONParsing,
        l = this.responseType === "json";
      if (S.isResponse(t) || S.isReadableStream(t)) return t;
      if (t && S.isString(t) && ((r && !this.responseType) || l)) {
        const i = !(n && n.silentJSONParsing) && l;
        try {
          return JSON.parse(t);
        } catch (a) {
          if (i)
            throw a.name === "SyntaxError"
              ? b.from(a, b.ERR_BAD_RESPONSE, this, null, this.response)
              : a;
        }
      }
      return t;
    },
  ],
  timeout: 0,
  xsrfCookieName: "XSRF-TOKEN",
  xsrfHeaderName: "X-XSRF-TOKEN",
  maxContentLength: -1,
  maxBodyLength: -1,
  env: { FormData: ce.classes.FormData, Blob: ce.classes.Blob },
  validateStatus: function (t) {
    return t >= 200 && t < 300;
  },
  headers: {
    common: {
      Accept: "application/json, text/plain, */*",
      "Content-Type": void 0,
    },
  },
};
S.forEach(["delete", "get", "head", "post", "put", "patch"], (e) => {
  Ar.headers[e] = {};
});
const Ag = S.toObjectSet([
    "age",
    "authorization",
    "content-length",
    "content-type",
    "etag",
    "expires",
    "from",
    "host",
    "if-modified-since",
    "if-unmodified-since",
    "last-modified",
    "location",
    "max-forwards",
    "proxy-authorization",
    "referer",
    "retry-after",
    "user-agent",
  ]),
  Ig = (e) => {
    const t = {};
    let n, r, l;
    return (
      e &&
        e
          .split(
            `
`
          )
          .forEach(function (i) {
            (l = i.indexOf(":")),
              (n = i.substring(0, l).trim().toLowerCase()),
              (r = i.substring(l + 1).trim()),
              !(!n || (t[n] && Ag[n])) &&
                (n === "set-cookie"
                  ? t[n]
                    ? t[n].push(r)
                    : (t[n] = [r])
                  : (t[n] = t[n] ? t[n] + ", " + r : r));
          }),
      t
    );
  },
  Du = Symbol("internals");
function Jn(e) {
  return e && String(e).trim().toLowerCase();
}
function Nl(e) {
  return e === !1 || e == null ? e : S.isArray(e) ? e.map(Nl) : String(e);
}
function Dg(e) {
  const t = Object.create(null),
    n = /([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;
  let r;
  for (; (r = n.exec(e)); ) t[r[1]] = r[2];
  return t;
}
const $g = (e) => /^[-_a-zA-Z0-9^`|~,!#$%&'*+.]+$/.test(e.trim());
function ii(e, t, n, r, l) {
  if (S.isFunction(r)) return r.call(this, t, n);
  if ((l && (t = n), !!S.isString(t))) {
    if (S.isString(r)) return t.indexOf(r) !== -1;
    if (S.isRegExp(r)) return r.test(t);
  }
}
function Bg(e) {
  return e
    .trim()
    .toLowerCase()
    .replace(/([a-z\d])(\w*)/g, (t, n, r) => n.toUpperCase() + r);
}
function Hg(e, t) {
  const n = S.toCamelCase(" " + t);
  ["get", "set", "has"].forEach((r) => {
    Object.defineProperty(e, r + n, {
      value: function (l, o, i) {
        return this[r].call(this, t, l, o, i);
      },
      configurable: !0,
    });
  });
}
class Ee {
  constructor(t) {
    t && this.set(t);
  }
  set(t, n, r) {
    const l = this;
    function o(a, s, c) {
      const p = Jn(s);
      if (!p) throw new Error("header name must be a non-empty string");
      const m = S.findKey(l, p);
      (!m || l[m] === void 0 || c === !0 || (c === void 0 && l[m] !== !1)) &&
        (l[m || s] = Nl(a));
    }
    const i = (a, s) => S.forEach(a, (c, p) => o(c, p, s));
    if (S.isPlainObject(t) || t instanceof this.constructor) i(t, n);
    else if (S.isString(t) && (t = t.trim()) && !$g(t)) i(Ig(t), n);
    else if (S.isObject(t) && S.isIterable(t)) {
      let a = {},
        s,
        c;
      for (const p of t) {
        if (!S.isArray(p))
          throw TypeError("Object iterator must return a key-value pair");
        a[(c = p[0])] = (s = a[c])
          ? S.isArray(s)
            ? [...s, p[1]]
            : [s, p[1]]
          : p[1];
      }
      i(a, n);
    } else t != null && o(n, t, r);
    return this;
  }
  get(t, n) {
    if (((t = Jn(t)), t)) {
      const r = S.findKey(this, t);
      if (r) {
        const l = this[r];
        if (!n) return l;
        if (n === !0) return Dg(l);
        if (S.isFunction(n)) return n.call(this, l, r);
        if (S.isRegExp(n)) return n.exec(l);
        throw new TypeError("parser must be boolean|regexp|function");
      }
    }
  }
  has(t, n) {
    if (((t = Jn(t)), t)) {
      const r = S.findKey(this, t);
      return !!(r && this[r] !== void 0 && (!n || ii(this, this[r], r, n)));
    }
    return !1;
  }
  delete(t, n) {
    const r = this;
    let l = !1;
    function o(i) {
      if (((i = Jn(i)), i)) {
        const a = S.findKey(r, i);
        a && (!n || ii(r, r[a], a, n)) && (delete r[a], (l = !0));
      }
    }
    return S.isArray(t) ? t.forEach(o) : o(t), l;
  }
  clear(t) {
    const n = Object.keys(this);
    let r = n.length,
      l = !1;
    for (; r--; ) {
      const o = n[r];
      (!t || ii(this, this[o], o, t, !0)) && (delete this[o], (l = !0));
    }
    return l;
  }
  normalize(t) {
    const n = this,
      r = {};
    return (
      S.forEach(this, (l, o) => {
        const i = S.findKey(r, o);
        if (i) {
          (n[i] = Nl(l)), delete n[o];
          return;
        }
        const a = t ? Bg(o) : String(o).trim();
        a !== o && delete n[o], (n[a] = Nl(l)), (r[a] = !0);
      }),
      this
    );
  }
  concat(...t) {
    return this.constructor.concat(this, ...t);
  }
  toJSON(t) {
    const n = Object.create(null);
    return (
      S.forEach(this, (r, l) => {
        r != null && r !== !1 && (n[l] = t && S.isArray(r) ? r.join(", ") : r);
      }),
      n
    );
  }
  [Symbol.iterator]() {
    return Object.entries(this.toJSON())[Symbol.iterator]();
  }
  toString() {
    return Object.entries(this.toJSON()).map(([t, n]) => t + ": " + n).join(`
`);
  }
  getSetCookie() {
    return this.get("set-cookie") || [];
  }
  get [Symbol.toStringTag]() {
    return "AxiosHeaders";
  }
  static from(t) {
    return t instanceof this ? t : new this(t);
  }
  static concat(t, ...n) {
    const r = new this(t);
    return n.forEach((l) => r.set(l)), r;
  }
  static accessor(t) {
    const r = (this[Du] = this[Du] = { accessors: {} }).accessors,
      l = this.prototype;
    function o(i) {
      const a = Jn(i);
      r[a] || (Hg(l, i), (r[a] = !0));
    }
    return S.isArray(t) ? t.forEach(o) : o(t), this;
  }
}
Ee.accessor([
  "Content-Type",
  "Content-Length",
  "Accept",
  "Accept-Encoding",
  "User-Agent",
  "Authorization",
]);
S.reduceDescriptors(Ee.prototype, ({ value: e }, t) => {
  let n = t[0].toUpperCase() + t.slice(1);
  return {
    get: () => e,
    set(r) {
      this[n] = r;
    },
  };
});
S.freezeMethods(Ee);
function si(e, t) {
  const n = this || Ar,
    r = t || n,
    l = Ee.from(r.headers);
  let o = r.data;
  return (
    S.forEach(e, function (a) {
      o = a.call(n, o, l.normalize(), t ? t.status : void 0);
    }),
    l.normalize(),
    o
  );
}
function Wf(e) {
  return !!(e && e.__CANCEL__);
}
function Fn(e, t, n) {
  b.call(this, e ?? "canceled", b.ERR_CANCELED, t, n),
    (this.name = "CanceledError");
}
S.inherits(Fn, b, { __CANCEL__: !0 });
function Kf(e, t, n) {
  const r = n.config.validateStatus;
  !n.status || !r || r(n.status)
    ? e(n)
    : t(
        new b(
          "Request failed with status code " + n.status,
          [b.ERR_BAD_REQUEST, b.ERR_BAD_RESPONSE][
            Math.floor(n.status / 100) - 4
          ],
          n.config,
          n.request,
          n
        )
      );
}
function Vg(e) {
  const t = /^([-+\w]{1,25})(:?\/\/|:)/.exec(e);
  return (t && t[1]) || "";
}
function Wg(e, t) {
  e = e || 10;
  const n = new Array(e),
    r = new Array(e);
  let l = 0,
    o = 0,
    i;
  return (
    (t = t !== void 0 ? t : 1e3),
    function (s) {
      const c = Date.now(),
        p = r[o];
      i || (i = c), (n[l] = s), (r[l] = c);
      let m = o,
        y = 0;
      for (; m !== l; ) (y += n[m++]), (m = m % e);
      if (((l = (l + 1) % e), l === o && (o = (o + 1) % e), c - i < t)) return;
      const x = p && c - p;
      return x ? Math.round((y * 1e3) / x) : void 0;
    }
  );
}
function Kg(e, t) {
  let n = 0,
    r = 1e3 / t,
    l,
    o;
  const i = (c, p = Date.now()) => {
    (n = p), (l = null), o && (clearTimeout(o), (o = null)), e.apply(null, c);
  };
  return [
    (...c) => {
      const p = Date.now(),
        m = p - n;
      m >= r
        ? i(c, p)
        : ((l = c),
          o ||
            (o = setTimeout(() => {
              (o = null), i(l);
            }, r - m)));
    },
    () => l && i(l),
  ];
}
const Xl = (e, t, n = 3) => {
    let r = 0;
    const l = Wg(50, 250);
    return Kg((o) => {
      const i = o.loaded,
        a = o.lengthComputable ? o.total : void 0,
        s = i - r,
        c = l(s),
        p = i <= a;
      r = i;
      const m = {
        loaded: i,
        total: a,
        progress: a ? i / a : void 0,
        bytes: s,
        rate: c || void 0,
        estimated: c && a && p ? (a - i) / c : void 0,
        event: o,
        lengthComputable: a != null,
        [t ? "download" : "upload"]: !0,
      };
      e(m);
    }, n);
  },
  $u = (e, t) => {
    const n = e != null;
    return [(r) => t[0]({ lengthComputable: n, total: e, loaded: r }), t[1]];
  },
  Bu =
    (e) =>
    (...t) =>
      S.asap(() => e(...t)),
  Qg = ce.hasStandardBrowserEnv
    ? ((e, t) => (n) => (
        (n = new URL(n, ce.origin)),
        e.protocol === n.protocol &&
          e.host === n.host &&
          (t || e.port === n.port)
      ))(
        new URL(ce.origin),
        ce.navigator && /(msie|trident)/i.test(ce.navigator.userAgent)
      )
    : () => !0,
  Yg = ce.hasStandardBrowserEnv
    ? {
        write(e, t, n, r, l, o) {
          const i = [e + "=" + encodeURIComponent(t)];
          S.isNumber(n) && i.push("expires=" + new Date(n).toGMTString()),
            S.isString(r) && i.push("path=" + r),
            S.isString(l) && i.push("domain=" + l),
            o === !0 && i.push("secure"),
            (document.cookie = i.join("; "));
        },
        read(e) {
          const t = document.cookie.match(
            new RegExp("(^|;\\s*)(" + e + ")=([^;]*)")
          );
          return t ? decodeURIComponent(t[3]) : null;
        },
        remove(e) {
          this.write(e, "", Date.now() - 864e5);
        },
      }
    : {
        write() {},
        read() {
          return null;
        },
        remove() {},
      };
function Jg(e) {
  return /^([a-z][a-z\d+\-.]*:)?\/\//i.test(e);
}
function qg(e, t) {
  return t ? e.replace(/\/?\/$/, "") + "/" + t.replace(/^\/+/, "") : e;
}
function Qf(e, t, n) {
  let r = !Jg(t);
  return e && (r || n == !1) ? qg(e, t) : t;
}
const Hu = (e) => (e instanceof Ee ? { ...e } : e);
function tn(e, t) {
  t = t || {};
  const n = {};
  function r(c, p, m, y) {
    return S.isPlainObject(c) && S.isPlainObject(p)
      ? S.merge.call({ caseless: y }, c, p)
      : S.isPlainObject(p)
      ? S.merge({}, p)
      : S.isArray(p)
      ? p.slice()
      : p;
  }
  function l(c, p, m, y) {
    if (S.isUndefined(p)) {
      if (!S.isUndefined(c)) return r(void 0, c, m, y);
    } else return r(c, p, m, y);
  }
  function o(c, p) {
    if (!S.isUndefined(p)) return r(void 0, p);
  }
  function i(c, p) {
    if (S.isUndefined(p)) {
      if (!S.isUndefined(c)) return r(void 0, c);
    } else return r(void 0, p);
  }
  function a(c, p, m) {
    if (m in t) return r(c, p);
    if (m in e) return r(void 0, c);
  }
  const s = {
    url: o,
    method: o,
    data: o,
    baseURL: i,
    transformRequest: i,
    transformResponse: i,
    paramsSerializer: i,
    timeout: i,
    timeoutMessage: i,
    withCredentials: i,
    withXSRFToken: i,
    adapter: i,
    responseType: i,
    xsrfCookieName: i,
    xsrfHeaderName: i,
    onUploadProgress: i,
    onDownloadProgress: i,
    decompress: i,
    maxContentLength: i,
    maxBodyLength: i,
    beforeRedirect: i,
    transport: i,
    httpAgent: i,
    httpsAgent: i,
    cancelToken: i,
    socketPath: i,
    responseEncoding: i,
    validateStatus: a,
    headers: (c, p, m) => l(Hu(c), Hu(p), m, !0),
  };
  return (
    S.forEach(Object.keys(Object.assign({}, e, t)), function (p) {
      const m = s[p] || l,
        y = m(e[p], t[p], p);
      (S.isUndefined(y) && m !== a) || (n[p] = y);
    }),
    n
  );
}
const Yf = (e) => {
    const t = tn({}, e);
    let {
      data: n,
      withXSRFToken: r,
      xsrfHeaderName: l,
      xsrfCookieName: o,
      headers: i,
      auth: a,
    } = t;
    (t.headers = i = Ee.from(i)),
      (t.url = Bf(
        Qf(t.baseURL, t.url, t.allowAbsoluteUrls),
        e.params,
        e.paramsSerializer
      )),
      a &&
        i.set(
          "Authorization",
          "Basic " +
            btoa(
              (a.username || "") +
                ":" +
                (a.password ? unescape(encodeURIComponent(a.password)) : "")
            )
        );
    let s;
    if (S.isFormData(n)) {
      if (ce.hasStandardBrowserEnv || ce.hasStandardBrowserWebWorkerEnv)
        i.setContentType(void 0);
      else if ((s = i.getContentType()) !== !1) {
        const [c, ...p] = s
          ? s
              .split(";")
              .map((m) => m.trim())
              .filter(Boolean)
          : [];
        i.setContentType([c || "multipart/form-data", ...p].join("; "));
      }
    }
    if (
      ce.hasStandardBrowserEnv &&
      (r && S.isFunction(r) && (r = r(t)), r || (r !== !1 && Qg(t.url)))
    ) {
      const c = l && o && Yg.read(o);
      c && i.set(l, c);
    }
    return t;
  },
  Gg = typeof XMLHttpRequest < "u",
  Xg =
    Gg &&
    function (e) {
      return new Promise(function (n, r) {
        const l = Yf(e);
        let o = l.data;
        const i = Ee.from(l.headers).normalize();
        let { responseType: a, onUploadProgress: s, onDownloadProgress: c } = l,
          p,
          m,
          y,
          x,
          w;
        function v() {
          x && x(),
            w && w(),
            l.cancelToken && l.cancelToken.unsubscribe(p),
            l.signal && l.signal.removeEventListener("abort", p);
        }
        let h = new XMLHttpRequest();
        h.open(l.method.toUpperCase(), l.url, !0), (h.timeout = l.timeout);
        function f() {
          if (!h) return;
          const g = Ee.from(
              "getAllResponseHeaders" in h && h.getAllResponseHeaders()
            ),
            N = {
              data:
                !a || a === "text" || a === "json"
                  ? h.responseText
                  : h.response,
              status: h.status,
              statusText: h.statusText,
              headers: g,
              config: e,
              request: h,
            };
          Kf(
            function (R) {
              n(R), v();
            },
            function (R) {
              r(R), v();
            },
            N
          ),
            (h = null);
        }
        "onloadend" in h
          ? (h.onloadend = f)
          : (h.onreadystatechange = function () {
              !h ||
                h.readyState !== 4 ||
                (h.status === 0 &&
                  !(h.responseURL && h.responseURL.indexOf("file:") === 0)) ||
                setTimeout(f);
            }),
          (h.onabort = function () {
            h &&
              (r(new b("Request aborted", b.ECONNABORTED, e, h)), (h = null));
          }),
          (h.onerror = function () {
            r(new b("Network Error", b.ERR_NETWORK, e, h)), (h = null);
          }),
          (h.ontimeout = function () {
            let E = l.timeout
              ? "timeout of " + l.timeout + "ms exceeded"
              : "timeout exceeded";
            const N = l.transitional || Hf;
            l.timeoutErrorMessage && (E = l.timeoutErrorMessage),
              r(
                new b(
                  E,
                  N.clarifyTimeoutError ? b.ETIMEDOUT : b.ECONNABORTED,
                  e,
                  h
                )
              ),
              (h = null);
          }),
          o === void 0 && i.setContentType(null),
          "setRequestHeader" in h &&
            S.forEach(i.toJSON(), function (E, N) {
              h.setRequestHeader(N, E);
            }),
          S.isUndefined(l.withCredentials) ||
            (h.withCredentials = !!l.withCredentials),
          a && a !== "json" && (h.responseType = l.responseType),
          c && (([y, w] = Xl(c, !0)), h.addEventListener("progress", y)),
          s &&
            h.upload &&
            (([m, x] = Xl(s)),
            h.upload.addEventListener("progress", m),
            h.upload.addEventListener("loadend", x)),
          (l.cancelToken || l.signal) &&
            ((p = (g) => {
              h &&
                (r(!g || g.type ? new Fn(null, e, h) : g),
                h.abort(),
                (h = null));
            }),
            l.cancelToken && l.cancelToken.subscribe(p),
            l.signal &&
              (l.signal.aborted ? p() : l.signal.addEventListener("abort", p)));
        const d = Vg(l.url);
        if (d && ce.protocols.indexOf(d) === -1) {
          r(new b("Unsupported protocol " + d + ":", b.ERR_BAD_REQUEST, e));
          return;
        }
        h.send(o || null);
      });
    },
  Zg = (e, t) => {
    const { length: n } = (e = e ? e.filter(Boolean) : []);
    if (t || n) {
      let r = new AbortController(),
        l;
      const o = function (c) {
        if (!l) {
          (l = !0), a();
          const p = c instanceof Error ? c : this.reason;
          r.abort(
            p instanceof b ? p : new Fn(p instanceof Error ? p.message : p)
          );
        }
      };
      let i =
        t &&
        setTimeout(() => {
          (i = null), o(new b(`timeout ${t} of ms exceeded`, b.ETIMEDOUT));
        }, t);
      const a = () => {
        e &&
          (i && clearTimeout(i),
          (i = null),
          e.forEach((c) => {
            c.unsubscribe
              ? c.unsubscribe(o)
              : c.removeEventListener("abort", o);
          }),
          (e = null));
      };
      e.forEach((c) => c.addEventListener("abort", o));
      const { signal: s } = r;
      return (s.unsubscribe = () => S.asap(a)), s;
    }
  },
  ey = function* (e, t) {
    let n = e.byteLength;
    if (n < t) {
      yield e;
      return;
    }
    let r = 0,
      l;
    for (; r < n; ) (l = r + t), yield e.slice(r, l), (r = l);
  },
  ty = async function* (e, t) {
    for await (const n of ny(e)) yield* ey(n, t);
  },
  ny = async function* (e) {
    if (e[Symbol.asyncIterator]) {
      yield* e;
      return;
    }
    const t = e.getReader();
    try {
      for (;;) {
        const { done: n, value: r } = await t.read();
        if (n) break;
        yield r;
      }
    } finally {
      await t.cancel();
    }
  },
  Vu = (e, t, n, r) => {
    const l = ty(e, t);
    let o = 0,
      i,
      a = (s) => {
        i || ((i = !0), r && r(s));
      };
    return new ReadableStream(
      {
        async pull(s) {
          try {
            const { done: c, value: p } = await l.next();
            if (c) {
              a(), s.close();
              return;
            }
            let m = p.byteLength;
            if (n) {
              let y = (o += m);
              n(y);
            }
            s.enqueue(new Uint8Array(p));
          } catch (c) {
            throw (a(c), c);
          }
        },
        cancel(s) {
          return a(s), l.return();
        },
      },
      { highWaterMark: 2 }
    );
  },
  Co =
    typeof fetch == "function" &&
    typeof Request == "function" &&
    typeof Response == "function",
  Jf = Co && typeof ReadableStream == "function",
  ry =
    Co &&
    (typeof TextEncoder == "function"
      ? (
          (e) => (t) =>
            e.encode(t)
        )(new TextEncoder())
      : async (e) => new Uint8Array(await new Response(e).arrayBuffer())),
  qf = (e, ...t) => {
    try {
      return !!e(...t);
    } catch {
      return !1;
    }
  },
  ly =
    Jf &&
    qf(() => {
      let e = !1;
      const t = new Request(ce.origin, {
        body: new ReadableStream(),
        method: "POST",
        get duplex() {
          return (e = !0), "half";
        },
      }).headers.has("Content-Type");
      return e && !t;
    }),
  Wu = 64 * 1024,
  is = Jf && qf(() => S.isReadableStream(new Response("").body)),
  Zl = { stream: is && ((e) => e.body) };
Co &&
  ((e) => {
    ["text", "arrayBuffer", "blob", "formData", "stream"].forEach((t) => {
      !Zl[t] &&
        (Zl[t] = S.isFunction(e[t])
          ? (n) => n[t]()
          : (n, r) => {
              throw new b(
                `Response type '${t}' is not supported`,
                b.ERR_NOT_SUPPORT,
                r
              );
            });
    });
  })(new Response());
const oy = async (e) => {
    if (e == null) return 0;
    if (S.isBlob(e)) return e.size;
    if (S.isSpecCompliantForm(e))
      return (
        await new Request(ce.origin, { method: "POST", body: e }).arrayBuffer()
      ).byteLength;
    if (S.isArrayBufferView(e) || S.isArrayBuffer(e)) return e.byteLength;
    if ((S.isURLSearchParams(e) && (e = e + ""), S.isString(e)))
      return (await ry(e)).byteLength;
  },
  iy = async (e, t) => {
    const n = S.toFiniteNumber(e.getContentLength());
    return n ?? oy(t);
  },
  sy =
    Co &&
    (async (e) => {
      let {
        url: t,
        method: n,
        data: r,
        signal: l,
        cancelToken: o,
        timeout: i,
        onDownloadProgress: a,
        onUploadProgress: s,
        responseType: c,
        headers: p,
        withCredentials: m = "same-origin",
        fetchOptions: y,
      } = Yf(e);
      c = c ? (c + "").toLowerCase() : "text";
      let x = Zg([l, o && o.toAbortSignal()], i),
        w;
      const v =
        x &&
        x.unsubscribe &&
        (() => {
          x.unsubscribe();
        });
      let h;
      try {
        if (
          s &&
          ly &&
          n !== "get" &&
          n !== "head" &&
          (h = await iy(p, r)) !== 0
        ) {
          let N = new Request(t, { method: "POST", body: r, duplex: "half" }),
            j;
          if (
            (S.isFormData(r) &&
              (j = N.headers.get("content-type")) &&
              p.setContentType(j),
            N.body)
          ) {
            const [R, T] = $u(h, Xl(Bu(s)));
            r = Vu(N.body, Wu, R, T);
          }
        }
        S.isString(m) || (m = m ? "include" : "omit");
        const f = "credentials" in Request.prototype;
        w = new Request(t, {
          ...y,
          signal: x,
          method: n.toUpperCase(),
          headers: p.normalize().toJSON(),
          body: r,
          duplex: "half",
          credentials: f ? m : void 0,
        });
        let d = await fetch(w);
        const g = is && (c === "stream" || c === "response");
        if (is && (a || (g && v))) {
          const N = {};
          ["status", "statusText", "headers"].forEach((M) => {
            N[M] = d[M];
          });
          const j = S.toFiniteNumber(d.headers.get("content-length")),
            [R, T] = (a && $u(j, Xl(Bu(a), !0))) || [];
          d = new Response(
            Vu(d.body, Wu, R, () => {
              T && T(), v && v();
            }),
            N
          );
        }
        c = c || "text";
        let E = await Zl[S.findKey(Zl, c) || "text"](d, e);
        return (
          !g && v && v(),
          await new Promise((N, j) => {
            Kf(N, j, {
              data: E,
              headers: Ee.from(d.headers),
              status: d.status,
              statusText: d.statusText,
              config: e,
              request: w,
            });
          })
        );
      } catch (f) {
        throw (
          (v && v(),
          f && f.name === "TypeError" && /Load failed|fetch/i.test(f.message)
            ? Object.assign(new b("Network Error", b.ERR_NETWORK, e, w), {
                cause: f.cause || f,
              })
            : b.from(f, f && f.code, e, w))
        );
      }
    }),
  ss = { http: Sg, xhr: Xg, fetch: sy };
S.forEach(ss, (e, t) => {
  if (e) {
    try {
      Object.defineProperty(e, "name", { value: t });
    } catch {}
    Object.defineProperty(e, "adapterName", { value: t });
  }
});
const Ku = (e) => `- ${e}`,
  ay = (e) => S.isFunction(e) || e === null || e === !1,
  Gf = {
    getAdapter: (e) => {
      e = S.isArray(e) ? e : [e];
      const { length: t } = e;
      let n, r;
      const l = {};
      for (let o = 0; o < t; o++) {
        n = e[o];
        let i;
        if (
          ((r = n),
          !ay(n) && ((r = ss[(i = String(n)).toLowerCase()]), r === void 0))
        )
          throw new b(`Unknown adapter '${i}'`);
        if (r) break;
        l[i || "#" + o] = r;
      }
      if (!r) {
        const o = Object.entries(l).map(
          ([a, s]) =>
            `adapter ${a} ` +
            (s === !1
              ? "is not supported by the environment"
              : "is not available in the build")
        );
        let i = t
          ? o.length > 1
            ? `since :
` +
              o.map(Ku).join(`
`)
            : " " + Ku(o[0])
          : "as no adapter specified";
        throw new b(
          "There is no suitable adapter to dispatch the request " + i,
          "ERR_NOT_SUPPORT"
        );
      }
      return r;
    },
    adapters: ss,
  };
function ai(e) {
  if (
    (e.cancelToken && e.cancelToken.throwIfRequested(),
    e.signal && e.signal.aborted)
  )
    throw new Fn(null, e);
}
function Qu(e) {
  return (
    ai(e),
    (e.headers = Ee.from(e.headers)),
    (e.data = si.call(e, e.transformRequest)),
    ["post", "put", "patch"].indexOf(e.method) !== -1 &&
      e.headers.setContentType("application/x-www-form-urlencoded", !1),
    Gf.getAdapter(e.adapter || Ar.adapter)(e).then(
      function (r) {
        return (
          ai(e),
          (r.data = si.call(e, e.transformResponse, r)),
          (r.headers = Ee.from(r.headers)),
          r
        );
      },
      function (r) {
        return (
          Wf(r) ||
            (ai(e),
            r &&
              r.response &&
              ((r.response.data = si.call(e, e.transformResponse, r.response)),
              (r.response.headers = Ee.from(r.response.headers)))),
          Promise.reject(r)
        );
      }
    )
  );
}
const Xf = "1.9.0",
  jo = {};
["object", "boolean", "number", "function", "string", "symbol"].forEach(
  (e, t) => {
    jo[e] = function (r) {
      return typeof r === e || "a" + (t < 1 ? "n " : " ") + e;
    };
  }
);
const Yu = {};
jo.transitional = function (t, n, r) {
  function l(o, i) {
    return (
      "[Axios v" +
      Xf +
      "] Transitional option '" +
      o +
      "'" +
      i +
      (r ? ". " + r : "")
    );
  }
  return (o, i, a) => {
    if (t === !1)
      throw new b(
        l(i, " has been removed" + (n ? " in " + n : "")),
        b.ERR_DEPRECATED
      );
    return (
      n &&
        !Yu[i] &&
        ((Yu[i] = !0),
        console.warn(
          l(
            i,
            " has been deprecated since v" +
              n +
              " and will be removed in the near future"
          )
        )),
      t ? t(o, i, a) : !0
    );
  };
};
jo.spelling = function (t) {
  return (n, r) => (console.warn(`${r} is likely a misspelling of ${t}`), !0);
};
function uy(e, t, n) {
  if (typeof e != "object")
    throw new b("options must be an object", b.ERR_BAD_OPTION_VALUE);
  const r = Object.keys(e);
  let l = r.length;
  for (; l-- > 0; ) {
    const o = r[l],
      i = t[o];
    if (i) {
      const a = e[o],
        s = a === void 0 || i(a, o, e);
      if (s !== !0)
        throw new b("option " + o + " must be " + s, b.ERR_BAD_OPTION_VALUE);
      continue;
    }
    if (n !== !0) throw new b("Unknown option " + o, b.ERR_BAD_OPTION);
  }
}
const Cl = { assertOptions: uy, validators: jo },
  Ke = Cl.validators;
class Yt {
  constructor(t) {
    (this.defaults = t || {}),
      (this.interceptors = { request: new Iu(), response: new Iu() });
  }
  async request(t, n) {
    try {
      return await this._request(t, n);
    } catch (r) {
      if (r instanceof Error) {
        let l = {};
        Error.captureStackTrace
          ? Error.captureStackTrace(l)
          : (l = new Error());
        const o = l.stack ? l.stack.replace(/^.+\n/, "") : "";
        try {
          r.stack
            ? o &&
              !String(r.stack).endsWith(o.replace(/^.+\n.+\n/, "")) &&
              (r.stack +=
                `
` + o)
            : (r.stack = o);
        } catch {}
      }
      throw r;
    }
  }
  _request(t, n) {
    typeof t == "string" ? ((n = n || {}), (n.url = t)) : (n = t || {}),
      (n = tn(this.defaults, n));
    const { transitional: r, paramsSerializer: l, headers: o } = n;
    r !== void 0 &&
      Cl.assertOptions(
        r,
        {
          silentJSONParsing: Ke.transitional(Ke.boolean),
          forcedJSONParsing: Ke.transitional(Ke.boolean),
          clarifyTimeoutError: Ke.transitional(Ke.boolean),
        },
        !1
      ),
      l != null &&
        (S.isFunction(l)
          ? (n.paramsSerializer = { serialize: l })
          : Cl.assertOptions(
              l,
              { encode: Ke.function, serialize: Ke.function },
              !0
            )),
      n.allowAbsoluteUrls !== void 0 ||
        (this.defaults.allowAbsoluteUrls !== void 0
          ? (n.allowAbsoluteUrls = this.defaults.allowAbsoluteUrls)
          : (n.allowAbsoluteUrls = !0)),
      Cl.assertOptions(
        n,
        {
          baseUrl: Ke.spelling("baseURL"),
          withXsrfToken: Ke.spelling("withXSRFToken"),
        },
        !0
      ),
      (n.method = (n.method || this.defaults.method || "get").toLowerCase());
    let i = o && S.merge(o.common, o[n.method]);
    o &&
      S.forEach(
        ["delete", "get", "head", "post", "put", "patch", "common"],
        (w) => {
          delete o[w];
        }
      ),
      (n.headers = Ee.concat(i, o));
    const a = [];
    let s = !0;
    this.interceptors.request.forEach(function (v) {
      (typeof v.runWhen == "function" && v.runWhen(n) === !1) ||
        ((s = s && v.synchronous), a.unshift(v.fulfilled, v.rejected));
    });
    const c = [];
    this.interceptors.response.forEach(function (v) {
      c.push(v.fulfilled, v.rejected);
    });
    let p,
      m = 0,
      y;
    if (!s) {
      const w = [Qu.bind(this), void 0];
      for (
        w.unshift.apply(w, a),
          w.push.apply(w, c),
          y = w.length,
          p = Promise.resolve(n);
        m < y;

      )
        p = p.then(w[m++], w[m++]);
      return p;
    }
    y = a.length;
    let x = n;
    for (m = 0; m < y; ) {
      const w = a[m++],
        v = a[m++];
      try {
        x = w(x);
      } catch (h) {
        v.call(this, h);
        break;
      }
    }
    try {
      p = Qu.call(this, x);
    } catch (w) {
      return Promise.reject(w);
    }
    for (m = 0, y = c.length; m < y; ) p = p.then(c[m++], c[m++]);
    return p;
  }
  getUri(t) {
    t = tn(this.defaults, t);
    const n = Qf(t.baseURL, t.url, t.allowAbsoluteUrls);
    return Bf(n, t.params, t.paramsSerializer);
  }
}
S.forEach(["delete", "get", "head", "options"], function (t) {
  Yt.prototype[t] = function (n, r) {
    return this.request(
      tn(r || {}, { method: t, url: n, data: (r || {}).data })
    );
  };
});
S.forEach(["post", "put", "patch"], function (t) {
  function n(r) {
    return function (o, i, a) {
      return this.request(
        tn(a || {}, {
          method: t,
          headers: r ? { "Content-Type": "multipart/form-data" } : {},
          url: o,
          data: i,
        })
      );
    };
  }
  (Yt.prototype[t] = n()), (Yt.prototype[t + "Form"] = n(!0));
});
class ha {
  constructor(t) {
    if (typeof t != "function")
      throw new TypeError("executor must be a function.");
    let n;
    this.promise = new Promise(function (o) {
      n = o;
    });
    const r = this;
    this.promise.then((l) => {
      if (!r._listeners) return;
      let o = r._listeners.length;
      for (; o-- > 0; ) r._listeners[o](l);
      r._listeners = null;
    }),
      (this.promise.then = (l) => {
        let o;
        const i = new Promise((a) => {
          r.subscribe(a), (o = a);
        }).then(l);
        return (
          (i.cancel = function () {
            r.unsubscribe(o);
          }),
          i
        );
      }),
      t(function (o, i, a) {
        r.reason || ((r.reason = new Fn(o, i, a)), n(r.reason));
      });
  }
  throwIfRequested() {
    if (this.reason) throw this.reason;
  }
  subscribe(t) {
    if (this.reason) {
      t(this.reason);
      return;
    }
    this._listeners ? this._listeners.push(t) : (this._listeners = [t]);
  }
  unsubscribe(t) {
    if (!this._listeners) return;
    const n = this._listeners.indexOf(t);
    n !== -1 && this._listeners.splice(n, 1);
  }
  toAbortSignal() {
    const t = new AbortController(),
      n = (r) => {
        t.abort(r);
      };
    return (
      this.subscribe(n),
      (t.signal.unsubscribe = () => this.unsubscribe(n)),
      t.signal
    );
  }
  static source() {
    let t;
    return {
      token: new ha(function (l) {
        t = l;
      }),
      cancel: t,
    };
  }
}
function cy(e) {
  return function (n) {
    return e.apply(null, n);
  };
}
function dy(e) {
  return S.isObject(e) && e.isAxiosError === !0;
}
const as = {
  Continue: 100,
  SwitchingProtocols: 101,
  Processing: 102,
  EarlyHints: 103,
  Ok: 200,
  Created: 201,
  Accepted: 202,
  NonAuthoritativeInformation: 203,
  NoContent: 204,
  ResetContent: 205,
  PartialContent: 206,
  MultiStatus: 207,
  AlreadyReported: 208,
  ImUsed: 226,
  MultipleChoices: 300,
  MovedPermanently: 301,
  Found: 302,
  SeeOther: 303,
  NotModified: 304,
  UseProxy: 305,
  Unused: 306,
  TemporaryRedirect: 307,
  PermanentRedirect: 308,
  BadRequest: 400,
  Unauthorized: 401,
  PaymentRequired: 402,
  Forbidden: 403,
  NotFound: 404,
  MethodNotAllowed: 405,
  NotAcceptable: 406,
  ProxyAuthenticationRequired: 407,
  RequestTimeout: 408,
  Conflict: 409,
  Gone: 410,
  LengthRequired: 411,
  PreconditionFailed: 412,
  PayloadTooLarge: 413,
  UriTooLong: 414,
  UnsupportedMediaType: 415,
  RangeNotSatisfiable: 416,
  ExpectationFailed: 417,
  ImATeapot: 418,
  MisdirectedRequest: 421,
  UnprocessableEntity: 422,
  Locked: 423,
  FailedDependency: 424,
  TooEarly: 425,
  UpgradeRequired: 426,
  PreconditionRequired: 428,
  TooManyRequests: 429,
  RequestHeaderFieldsTooLarge: 431,
  UnavailableForLegalReasons: 451,
  InternalServerError: 500,
  NotImplemented: 501,
  BadGateway: 502,
  ServiceUnavailable: 503,
  GatewayTimeout: 504,
  HttpVersionNotSupported: 505,
  VariantAlsoNegotiates: 506,
  InsufficientStorage: 507,
  LoopDetected: 508,
  NotExtended: 510,
  NetworkAuthenticationRequired: 511,
};
Object.entries(as).forEach(([e, t]) => {
  as[t] = e;
});
function Zf(e) {
  const t = new Yt(e),
    n = Tf(Yt.prototype.request, t);
  return (
    S.extend(n, Yt.prototype, t, { allOwnKeys: !0 }),
    S.extend(n, t, null, { allOwnKeys: !0 }),
    (n.create = function (l) {
      return Zf(tn(e, l));
    }),
    n
  );
}
const H = Zf(Ar);
H.Axios = Yt;
H.CanceledError = Fn;
H.CancelToken = ha;
H.isCancel = Wf;
H.VERSION = Xf;
H.toFormData = No;
H.AxiosError = b;
H.Cancel = H.CanceledError;
H.all = function (t) {
  return Promise.all(t);
};
H.spread = cy;
H.isAxiosError = dy;
H.mergeConfig = tn;
H.AxiosHeaders = Ee;
H.formToJSON = (e) => Vf(S.isHTMLForm(e) ? new FormData(e) : e);
H.getAdapter = Gf.getAdapter;
H.HttpStatusCode = as;
H.default = H;
const fy = ({
    showModal: e,
    defaultRole: t = "Attendee",
    venueDetails: n,
    meetupName: r,
  }) => {
    const { user: l, setUser: o } = yo(),
      [i, a] = k.useState(!0),
      [s, c] = k.useState({
        name: "",
        email: "",
        mobile: "",
        linkedin: "",
        status: "Professional",
        gender: "M",
        role: t,
        talktitle: "",
        talkdescription: "",
        tshirtSize: "M",
      }),
      p = (v) => {
        c({ ...s, [v.target.name]: v.target.value });
      },
      m = (v) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v),
      y = (v) => /^[0-9]{10}$/.test(v),
      x = async (v) => {
        var f, d;
        if ((v.preventDefault(), !m(s.email))) {
          Z("Invalid email format");
          return;
        }
        if (!y(s.mobile)) {
          Z("Mobile number must be 10 digits");
          return;
        }
        const h =
          n != null && n.date
            ? `registration_${new Date(
                n == null ? void 0 : n.date
              ).toLocaleDateString()}`
            : void 0;
        if (h)
          try {
            Z();
            const g = { ...s, tshirtSize: `${s.gender}-${s.tshirtSize}` },
              E = await H.post("https://codeup.in/dev/participant/apply", g, {
                headers: { "meetup-name": r },
              });
            localStorage.setItem(h, "true"),
              window.dispatchEvent(new Event("registrationChange")),
              e(!1),
              Z(E.data.message);
          } catch (g) {
            const E =
              (d = (f = g.response) == null ? void 0 : f.data) == null
                ? void 0
                : d.error;
            if ((console.error(E), e(!1), E.startsWith("ER_DUP_ENTRY"))) {
              Z("You are already registered for the event.");
              return;
            }
            Z("Failed to register. Try again later.");
          }
      };
    k.useEffect(() => {
      const v = () => {
        var f;
        const h = ((f = at()) == null ? void 0 : f.user) || null;
        o(h);
      };
      return (
        window.addEventListener("userUpdate", v),
        () => window.removeEventListener("userUpdate", v)
      );
    }, []),
      k.useEffect(() => {
        l && c((v) => ({ ...v, name: l.name, email: l.email }));
      }, [l]);
    const w = u.jsxs("button", {
      type: "button",
      className:
        "flex items-center justify-center px-10 py-2 border border-gray-400 rounded text-black font-bold text-base leading-6 bg-white hover:bg-gray-200 transition-colors duration-150 mx-auto",
      children: [
        u.jsx("svg", {
          viewBox: "-3 0 262 262",
          preserveAspectRatio: "xMidYMid",
          fill: "#000000",
          width: 20,
          height: 20,
          className: "mr-2",
          children: u.jsxs("g", {
            id: "SVGRepo_iconCarrier",
            children: [
              u.jsx("path", {
                d: "M255.878 133.451c0-10.734-.871-18.567-2.756-26.69H130.55v48.448h71.947c-1.45 12.04-9.283 30.172-26.69 42.356l-.244 1.622 38.755 30.023 2.685.268c24.659-22.774 38.875-56.282 38.875-96.027",
                fill: "#4285F4",
              }),
              u.jsx("path", {
                d: "M130.55 261.1c35.248 0 64.839-11.605 86.453-31.622l-41.196-31.913c-11.024 7.688-25.82 13.055-45.257 13.055-34.523 0-63.824-22.773-74.269-54.25l-1.531.13-40.298 31.187-.527 1.465C35.393 231.798 79.49 261.1 130.55 261.1",
                fill: "#34A853",
              }),
              u.jsx("path", {
                d: "M56.281 156.37c-2.756-8.123-4.351-16.827-4.351-25.82 0-8.994 1.595-17.697 4.206-25.82l-.073-1.73L15.26 71.312l-1.335.635C5.077 89.644 0 109.517 0 130.55s5.077 40.905 13.925 58.602l42.356-32.782",
                fill: "#FBBC05",
              }),
              u.jsx("path", {
                d: "M130.55 50.479c24.514 0 41.05 10.589 50.479 19.438l36.844-35.974C195.245 12.91 165.798 0 130.55 0 79.49 0 35.393 29.301 13.925 71.947l42.211 32.783c10.59-31.477 39.891-54.251 74.414-54.251",
                fill: "#EB4335",
              }),
            ],
          }),
        }),
        "Google",
      ],
    });
    return u.jsxs("form", {
      onSubmit: x,
      className: "max-w-xl mx-auto p-4 bg-white rounded",
      children: [
        i &&
          u.jsx("div", {
            className: "mb-4 p-4 border rounded",
            children: l
              ? u.jsxs("div", {
                  className: "flex items-center gap-3",
                  children: [
                    u.jsx("img", {
                      src: l.picture,
                      alt: l.name,
                      className: "w-16 h-16 rounded-full",
                    }),
                    u.jsxs("div", {
                      className: "truncate",
                      children: [
                        u.jsx("div", {
                          className: "truncate font-semibold",
                          children: l.name,
                        }),
                        u.jsx("div", {
                          className: "truncate text-sm text-gray-600",
                          children: l.email,
                        }),
                      ],
                    }),
                  ],
                })
              : u.jsxs("div", {
                  className: "text-center",
                  children: [
                    u.jsx("p", {
                      className: "text-lg mb-2 font-medium",
                      children: "Sign in is required",
                    }),
                    u.jsx(ql, { onSignIn: o, customButton: w }),
                  ],
                }),
          }),
        !i &&
          [
            { name: "name", label: "Name" },
            { name: "email", label: "Email" },
          ].map(({ name: v, label: h }) =>
            u.jsxs(
              "div",
              {
                className: "mb-4",
                children: [
                  u.jsxs("label", {
                    className: "block font-medium mb-1",
                    children: [
                      h,
                      u.jsx("span", {
                        className: "text-red-500",
                        children: "*",
                      }),
                    ],
                  }),
                  u.jsx("input", {
                    name: v,
                    value: s[v],
                    onChange: p,
                    className:
                      "w-full border border-gray-300 rounded px-3 py-2",
                    required: !0,
                  }),
                ],
              },
              v
            )
          ),
        [
          { name: "mobile", label: "Mobile No." },
          { name: "linkedin", label: "LinkedIn" },
        ].map(({ name: v, label: h }) =>
          u.jsxs(
            "div",
            {
              className: "mb-4",
              children: [
                u.jsxs("label", {
                  className: "block font-medium mb-1",
                  children: [
                    h,
                    u.jsx("span", { className: "text-red-500", children: "*" }),
                  ],
                }),
                u.jsx("input", {
                  name: v,
                  value: s[v],
                  onChange: p,
                  className: "w-full border border-gray-300 rounded px-3 py-2",
                  required: !0,
                }),
              ],
            },
            v
          )
        ),
        u.jsxs("div", {
          className: "mb-4",
          children: [
            u.jsxs("label", {
              className: "block font-medium mb-1",
              children: [
                "Are you a student or professional?",
                u.jsx("span", { className: "text-red-500", children: "*" }),
              ],
            }),
            u.jsxs("select", {
              name: "status",
              value: s.status,
              onChange: p,
              className: "w-full border px-3 py-2 rounded",
              children: [
                u.jsx("option", { children: "Student" }),
                u.jsx("option", { children: "Professional" }),
              ],
            }),
          ],
        }),
        s.status === "Professional" &&
          u.jsx(u.Fragment, {
            children: [
              { name: "jobTitle", label: "Job Title" },
              { name: "company", label: "Company" },
              { name: "experienceYears", label: "Years of Experience" },
            ].map(({ name: v, label: h }) =>
              u.jsxs(
                "div",
                {
                  className: "mb-4",
                  children: [
                    u.jsxs("label", {
                      className: "block font-medium mb-1",
                      children: [
                        h,
                        u.jsx("span", {
                          className: "text-red-500",
                          children: "*",
                        }),
                      ],
                    }),
                    u.jsx("input", {
                      name: v,
                      value: s[v],
                      onChange: p,
                      className:
                        "w-full border border-gray-300 rounded px-3 py-2",
                      required: !0,
                    }),
                  ],
                },
                v
              )
            ),
          }),
        u.jsxs("div", {
          className: "mb-4",
          children: [
            u.jsxs("label", {
              className: "block font-medium mb-1",
              children: [
                "Role",
                u.jsx("span", { className: "text-red-500", children: "*" }),
              ],
            }),
            u.jsx("select", {
              name: "role",
              value: s.role,
              onChange: p,
              className: "w-full border px-3 py-2 rounded",
              children: ["Attendee", "Volunteer", "Speaker"].map((v) =>
                u.jsx("option", { children: v }, v)
              ),
            }),
          ],
        }),
        s.role === "Speaker" &&
          u.jsx(u.Fragment, {
            children: [
              { name: "talktitle", label: "Title for the talk", required: !0 },
              {
                name: "talkdescription",
                label: "Description for the talk",
                required: !0,
              },
              {
                name: "prevtalks",
                label: "Links of previous talks",
                required: !1,
              },
            ].map(({ name: v, label: h, required: f }) =>
              u.jsxs(
                "div",
                {
                  className: "mb-4",
                  children: [
                    u.jsxs("label", {
                      className: "block font-medium mb-1",
                      children: [
                        h,
                        f &&
                          u.jsx("span", {
                            className: "text-red-500",
                            children: "*",
                          }),
                      ],
                    }),
                    v !== "talktitle"
                      ? u.jsx("textarea", {
                          name: v,
                          value: s[v],
                          onChange: p,
                          className:
                            "w-full border border-gray-300 rounded px-3 py-2",
                          rows: 3,
                          required: f,
                        })
                      : u.jsx("input", {
                          name: v,
                          value: s[v],
                          onChange: p,
                          className:
                            "w-full border border-gray-300 rounded px-3 py-2",
                          required: f,
                        }),
                  ],
                },
                v
              )
            ),
          }),
        u.jsxs("div", {
          className: "mb-4",
          children: [
            u.jsxs("label", {
              className: "block font-medium mb-1",
              children: [
                "Gender",
                u.jsx("span", { className: "text-red-500", children: "*" }),
              ],
            }),
            u.jsxs("select", {
              name: "gender",
              value: s.gender,
              onChange: p,
              className: "w-full border px-3 py-2 rounded",
              required: !0,
              children: [
                u.jsx("option", { value: "M", children: "Male" }),
                u.jsx("option", { value: "F", children: "Female" }),
                u.jsx("option", { value: "O", children: "Other" }),
              ],
            }),
          ],
        }),
        u.jsxs("div", {
          className: "mb-4",
          children: [
            u.jsxs("label", {
              className: "block font-medium mb-1",
              children: [
                "T-shirt Size",
                u.jsx("span", { className: "text-red-500", children: "*" }),
                u.jsx("span", {
                  className: "text-xs",
                  children: " (Swags for early birds)",
                }),
              ],
            }),
            u.jsx("select", {
              name: "tshirtSize",
              value: s.tshirtSize,
              onChange: p,
              className: "w-full border px-3 py-2 rounded",
              children: ["S", "M", "L", "XL", "XXL"].map((v) =>
                u.jsx("option", { children: v }, v)
              ),
            }),
          ],
        }),
        u.jsx("button", {
          type: "submit",
          className: `${
            l || !i ? "bg-pink-400 hover:bg-pink-700" : "bg-gray-400"
          } text-white px-5 py-2 rounded-md font-medium block mx-auto`,
          disabled: !l && i,
          children: "Apply",
        }),
      ],
    });
  },
  py = ({ showModal: e, meetupName: t }) => {
    const { user: n, setUser: r } = yo(),
      [l, o] = k.useState(!0),
      [i, a] = k.useState({
        name: "",
        email: "",
        community: "",
        phone: "",
        position: "",
        logo: "",
        website: "",
        social: "",
        yourHelp: "",
        heardFrom: "",
      }),
      s = (x) => {
        const { name: w, value: v } = x.target;
        a((h) => ({ ...h, [w]: v }));
      },
      c = (x) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(x),
      p = (x) => /^[0-9]{10}$/.test(x),
      m = async (x) => {
        var E, N;
        x.preventDefault();
        const {
          name: w,
          community: v,
          email: h,
          phone: f,
          position: d,
          logo: g,
        } = i;
        if (!c(h)) {
          Z("Invalid email format");
          return;
        }
        if (!p(f)) {
          Z("Phone number must be 10 digits");
          return;
        }
        if (!w || !v || !h || !f || !d) {
          Z("Please fill all required fields");
          return;
        }
        try {
          Z(), console.log(i);
          const j = await H.post(
            "https://codeup.in/dev/submit/community_partner",
            i,
            {
              headers: { "Content-Type": "application/json", "meetup-name": t },
            }
          );
          localStorage.setItem("community_registration", "true"),
            window.dispatchEvent(new Event("registrationChange")),
            e(!1),
            Z(j.data.message);
        } catch (j) {
          Z(
            ((N = (E = j.response) == null ? void 0 : E.data) == null
              ? void 0
              : N.error) || "Failed to register. Try again later."
          );
        }
      };
    k.useEffect(() => {
      const x = () => {
        var v;
        const w = ((v = at()) == null ? void 0 : v.user) || null;
        r(w);
      };
      return (
        window.addEventListener("userUpdate", x),
        () => window.removeEventListener("userUpdate", x)
      );
    }, []),
      k.useEffect(() => {
        n && a((x) => ({ ...x, name: n.name, email: n.email }));
      }, [n]);
    const y = u.jsxs("button", {
      type: "button",
      className:
        "flex items-center justify-center px-10 py-2 border border-gray-400 rounded text-black font-bold text-base leading-6 bg-white hover:bg-gray-200 transition-colors duration-150 mx-auto",
      children: [
        u.jsx("svg", {
          viewBox: "-3 0 262 262",
          preserveAspectRatio: "xMidYMid",
          fill: "#000000",
          width: 20,
          height: 20,
          className: "mr-2",
          children: u.jsxs("g", {
            id: "SVGRepo_iconCarrier",
            children: [
              u.jsx("path", {
                d: "M255.878 133.451c0-10.734-.871-18.567-2.756-26.69H130.55v48.448h71.947c-1.45 12.04-9.283 30.172-26.69 42.356l-.244 1.622 38.755 30.023 2.685.268c24.659-22.774 38.875-56.282 38.875-96.027",
                fill: "#4285F4",
              }),
              u.jsx("path", {
                d: "M130.55 261.1c35.248 0 64.839-11.605 86.453-31.622l-41.196-31.913c-11.024 7.688-25.82 13.055-45.257 13.055-34.523 0-63.824-22.773-74.269-54.25l-1.531.13-40.298 31.187-.527 1.465C35.393 231.798 79.49 261.1 130.55 261.1",
                fill: "#34A853",
              }),
              u.jsx("path", {
                d: "M56.281 156.37c-2.756-8.123-4.351-16.827-4.351-25.82 0-8.994 1.595-17.697 4.206-25.82l-.073-1.73L15.26 71.312l-1.335.635C5.077 89.644 0 109.517 0 130.55s5.077 40.905 13.925 58.602l42.356-32.782",
                fill: "#FBBC05",
              }),
              u.jsx("path", {
                d: "M130.55 50.479c24.514 0 41.05 10.589 50.479 19.438l36.844-35.974C195.245 12.91 165.798 0 130.55 0 79.49 0 35.393 29.301 13.925 71.947l42.211 32.783c10.59-31.477 39.891-54.251 74.414-54.251",
                fill: "#EB4335",
              }),
            ],
          }),
        }),
        "Google",
      ],
    });
    return u.jsxs("form", {
      onSubmit: m,
      className: "max-w-xl mx-auto p-4 bg-white rounded",
      children: [
        l &&
          u.jsx("div", {
            className: "mb-4 p-4 border rounded",
            children: n
              ? u.jsxs("div", {
                  className: "flex items-center gap-3",
                  children: [
                    u.jsx("img", {
                      src: n.picture,
                      alt: n.name,
                      className: "w-16 h-16 rounded-full",
                    }),
                    u.jsxs("div", {
                      children: [
                        u.jsx("div", {
                          className: "font-semibold",
                          children: n.name,
                        }),
                        u.jsx("div", {
                          className: "text-sm text-gray-600",
                          children: n.email,
                        }),
                      ],
                    }),
                  ],
                })
              : u.jsxs("div", {
                  className: "text-center",
                  children: [
                    u.jsx("p", {
                      className: "text-lg mb-2 font-medium",
                      children: "Sign in is required",
                    }),
                    u.jsx(ql, { onSignIn: r, customButton: y }),
                  ],
                }),
          }),
        [
          { name: "name", label: "Your Name" },
          { name: "email", label: "Email" },
          { name: "community", label: "Community Name" },
          { name: "phone", label: "Phone Number (WhatsApp)" },
          { name: "position", label: "Your Position in the Community" },
        ].map(({ name: x, label: w }) =>
          u.jsxs(
            "div",
            {
              className: "mb-4",
              children: [
                u.jsxs("label", {
                  className: "block font-medium mb-1",
                  children: [
                    w,
                    u.jsx("span", { className: "text-red-500", children: "*" }),
                  ],
                }),
                u.jsx("input", {
                  type: "text",
                  name: x,
                  value: i[x],
                  onChange: s,
                  className: "w-full border border-gray-300 rounded px-3 py-2",
                  required: !0,
                }),
              ],
            },
            x
          )
        ),
        u.jsxs("div", {
          className: "mb-4",
          children: [
            u.jsx("label", {
              className: "block font-medium mb-1",
              children: "Your Community Website",
            }),
            u.jsx("input", {
              type: "url",
              name: "website",
              value: i.website || "",
              onChange: s,
              className: "w-full border border-gray-300 rounded px-3 py-2",
            }),
          ],
        }),
        u.jsxs("div", {
          className: "mb-4",
          children: [
            u.jsx("label", {
              className: "block font-medium mb-1",
              children: "Social Media Links",
            }),
            u.jsx("input", {
              type: "text",
              name: "social",
              value: i.social || "",
              onChange: s,
              placeholder: "Twitter, Instagram, LinkedIn, etc.",
              className: "w-full border border-gray-300 rounded px-3 py-2",
            }),
          ],
        }),
        u.jsxs("div", {
          className: "mb-4",
          children: [
            u.jsx("label", {
              className: "block font-medium mb-1",
              children: "How will your community help React Rajasthan?",
            }),
            u.jsx("textarea", {
              name: "yourHelp",
              value: i.yourHelp || "",
              onChange: s,
              className: "w-full border border-gray-300 rounded px-3 py-2",
              rows: 3,
            }),
          ],
        }),
        u.jsxs("div", {
          className: "mb-4",
          children: [
            u.jsx("label", {
              className: "block font-medium mb-1",
              children: "Where did you hear about React Rajasthan?",
            }),
            u.jsx("input", {
              type: "text",
              name: "heardFrom",
              value: i.heardFrom || "",
              onChange: s,
              className: "w-full border border-gray-300 rounded px-3 py-2",
            }),
          ],
        }),
        u.jsx("button", {
          type: "submit",
          className: `${
            n || !l ? "bg-pink-400 hover:bg-pink-700" : "bg-gray-400"
          } text-white px-5 py-2 rounded-md font-medium block mx-auto`,
          disabled: !n && l,
          children: "Submit",
        }),
      ],
    });
  },
  ga = ({
    button: e,
    defaultRole: t,
    type: n = "normal",
    venueDetails: r,
    meetupName: l,
  }) => {
    const [o, i] = k.useState(!1),
      a = u.jsx("div", {
        className:
          "fixed inset-0 z-40 flex items-center justify-center bg-black bg-opacity-50",
        children: u.jsxs("div", {
          className:
            "bg-white rounded-lg shadow-xl w-full max-w-2xl mx-4 overflow-y-auto max-h-[90vh] relative",
          children: [
            u.jsxs("div", {
              className: "flex justify-between items-center p-6 pb-0",
              children: [
                u.jsx("p", {
                  className: "text-xl md:text-2xl",
                  children:
                    n == "community"
                      ? "Become Community Partner"
                      : "React Rajasthan 20 July 2025",
                }),
                u.jsx("button", {
                  onClick: () => i(!1),
                  className:
                    "text-gray-600 hover:text-black text-2xl font-bold",
                  children: "×",
                }),
              ],
            }),
            u.jsx("div", {
              className: "p-6",
              children:
                n === "community"
                  ? u.jsx(py, { showModal: i, meetupName: l })
                  : u.jsx(fy, {
                      showModal: i,
                      defaultRole: t,
                      venueDetails: r,
                      meetupName: l,
                    }),
            }),
          ],
        }),
      });
    return u.jsxs(u.Fragment, {
      children: [
        e
          ? u.jsx("span", { onClick: () => i(!0), children: e })
          : u.jsx("button", {
              onClick: () => i(!0),
              className:
                "inline-block bg-pink-400 text-white hover:bg-pink-700 font-medium px-6 py-2 rounded-md transition-colors",
              children: "Register Now",
            }),
        o && typeof window < "u" && uf.createPortal(a, document.body),
      ],
    });
  },
  my = (e) =>
    e
      ? e.toLocaleDateString("en-IN", {
          day: "numeric",
          month: "short",
          year: "numeric",
        })
      : "Coming Soon",
  hy = ({ events: e, activeEventId: t, onSelect: n }) => {
    const r = k.useRef(null),
      l = k.useRef(null);
    k.useEffect(() => {
      l.current &&
        r.current &&
        l.current.scrollIntoView({
          behavior: "smooth",
          inline: "center",
          block: "nearest",
        });
    }, [t]);
    const o = new Date();
    return u.jsx("div", {
      ref: r,
      className:
        "bg-black/50 backdrop-blur rounded-lg px-4 py-2 shadow-md flex gap-2 max-w-[85vw] overflow-auto scrollbar-thin custom-scrollbar",
      children: e.map((i) => {
        const a = i.id === t;
        i.date;
        const s = i.date && i.date < o;
        let c =
            "px-4 py-1.5 rounded-lg text-sm transition-colors font-medium flex flex-col items-center text-center min-w-[120px]",
          p = "";
        return (
          a
            ? (p = "text-white shadow")
            : s
            ? (p = "text-gray-400 hover:text-pink-400")
            : (p = "text-gray-200 hover:text-pink-400"),
          u.jsxs(
            "button",
            {
              ref: a ? l : null,
              onClick: () => n(i),
              className: `${c} ${p}`,
              children: [
                u.jsx("span", {
                  className: "font-semibold truncate",
                  children: i.title,
                }),
                u.jsx("span", { className: "text-xs", children: my(i.date) }),
              ],
            },
            i.id
          )
        );
      }),
    });
  },
  gy = ({
    venueDetails: e,
    events: t,
    activeEventId: n,
    onSelect: r,
    background: l = en,
  }) => {
    const [o, i] = k.useState(t.find((x) => x.id === n)),
      [a, s] = k.useState(),
      [c, p] = k.useState(!1);
    k.useEffect(() => {
      i(t.find((x) => x.id === n));
    }, [n]),
      k.useEffect(() => {
        o != null && o.date && s(`registration_${o.date.toLocaleDateString()}`);
      }, [o]),
      k.useEffect(() => {
        p(a ? localStorage.getItem(a) === "true" : "false");
      }, [a]),
      k.useEffect(() => {
        var v;
        const x = (v = at()) == null ? void 0 : v.user;
        if (!x || !a) {
          p(!1);
          return;
        }
        p(a ? localStorage.getItem(a) === "true" : "false"),
          (async () => {
            var h;
            try {
              (
                await H.get(
                  `https://codeup.in/dev/participant/check-email/${x.id}`,
                  {
                    headers: {
                      "meetup-name":
                        (h = t.find((g) => g.id === n)) == null ? void 0 : h.id,
                    },
                  }
                )
              ).data.exists === !0
                ? p(!0)
                : p(!1);
            } catch (f) {
              console.log(f);
            }
          })();
      }, [a, n]),
      k.useEffect(() => {
        const x = () => {
          a && p(localStorage.getItem(a) === "true");
        };
        return (
          window.addEventListener("storage", x),
          window.addEventListener("registrationChange", x),
          x(),
          () => {
            window.removeEventListener("storage", x),
              window.removeEventListener("registrationChange", x);
          }
        );
      }, [a]),
      k.useEffect(() => {
        a && localStorage.setItem(a, c ? "true" : "false");
      }, [c]);
    const m = !(e != null && e.date),
      y = () => {
        Z(
          `By opting out of this event, your ticket will be released and will no longer be valid for use.
Are you sure you want to opt out?`,
          void 0,
          u.jsxs("span", {
            className: "flex justify-between",
            children: [
              u.jsx("button", {
                className:
                  "bg-red-600 text-white hover:bg-red-700 px-6 py-2 rounded-md font-medium",
                onClick: async () => {
                  var x, w, v;
                  try {
                    const h = `https://codeup.in/dev/admin/participant/${
                        (x = at()) == null ? void 0 : x.user.id
                      }/status`,
                      f = await H.put(h, {
                        headers: {
                          Authorization: `Bearer ${
                            (w = at()) == null ? void 0 : w.token
                          }`,
                          "meetup-name":
                            (v = t.find((d) => d.id === n)) == null
                              ? void 0
                              : v.id,
                        },
                      });
                    console.log(f.data), p(!1), Z.close();
                  } catch (h) {
                    console.log(h);
                  }
                },
                children: "Yes",
              }),
              u.jsx("button", {
                className:
                  "bg-pink-500 text-white hover:bg-pink-600 px-6 py-2 rounded-md font-medium",
                onClick: Z.close,
                children: "Cancel",
              }),
            ],
          })
        );
      };
    return u.jsxs("section", {
      id: "hero",
      className:
        "relative flex items-center bg-gradient-to-br from-pink-900 via-pink-800 to-pink-700 text-white flex-col",
      style: { minHeight: "100dvh" },
      children: [
        u.jsx("div", {
          className: "absolute inset-0 z-0 overflow-hidden",
          children: u.jsx("div", {
            className:
              "absolute inset-0 opacity-15 bg-cover bg-center bg-no-repeat h-screen",
            style: { backgroundImage: `url(${l})` },
          }),
        }),
        u.jsx("div", {
          className: "mt-20 md:mt-24",
          children:
            t.length > 0 &&
            u.jsx(hy, { events: t, activeEventId: n, onSelect: r }),
        }),
        u.jsxs("div", {
          className: "container mx-auto px-4 z-10 text-center pb-20 pt-14",
          children: [
            u.jsxs("h1", {
              className: "text-4xl md:text-7xl font-bold mb-6 animate-fadeIn",
              children: [
                u.jsx("span", { className: "block", children: "<RamRamSa />" }),
                u.jsx("span", {
                  className: "text-pink-300 block mt-3 text-2xl md:text-5xl",
                  children: (e == null ? void 0 : e.date) || "Coming Soon",
                }),
              ],
            }),
            u.jsx("p", {
              className:
                "text-xl md:text-2xl mb-8 max-w-2xl mx-auto opacity-90",
              children:
                "Join the biggest React community event in Rajasthan. Connect with tech enthusiasts, share knowledge and explore the latest in React ecosystem.",
            }),
            u.jsxs("div", {
              className: "flex flex-col sm:flex-row gap-4 justify-center mt-10",
              children: [
                !c &&
                  (o == null ? void 0 : o.date) &&
                  (() => {
                    const x = o == null ? void 0 : o.date,
                      w = new Date();
                    return (
                      Math.ceil((x - w) / (1e3 * 60 * 60 * 24)) > 4 &&
                      u.jsx(ga, {
                        button: u.jsx("button", {
                          disabled: m,
                          className: `inline-flex items-center justify-center rounded-md font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 h-14 px-8 text-lg ${
                            m
                              ? "bg-gray-400 text-white cursor-not-allowed"
                              : "bg-pink-400 text-white hover:bg-pink-700 focus-visible:ring-pink-500"
                          }`,
                          children: "Register Now",
                        }),
                        venueDetails: e,
                        meetupName: o.id,
                      })
                    );
                  })(),
                (e == null ? void 0 : e.date) &&
                  (() => {
                    const x = o == null ? void 0 : o.date,
                      w = new Date(),
                      v = Math.ceil((x - w) / (1e3 * 60 * 60 * 24));
                    return (
                      !c &&
                      v > 0 &&
                      v <= 4 &&
                      u.jsx("button", {
                        disabled: !0,
                        className:
                          "inline-flex items-center justify-center rounded-md font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 h-14 px-8 text-lg bg-gray-400 text-white cursor-not-allowed",
                        children: "Registration Closed",
                      })
                    );
                  })(),
                u.jsx("button", {
                  onClick: () => Ye("community"),
                  className:
                    "inline-flex items-center justify-center rounded-md font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 h-14 px-8 text-lg bg-white/10 border border-white text-white hover:bg-white/20 focus-visible:ring-pink-500",
                  children: "Join Us",
                }),
              ],
            }),
            c &&
              (() => {
                const x = o == null ? void 0 : o.date,
                  w = new Date();
                return Math.ceil((x - w) / (1e3 * 60 * 60 * 24)) > 0
                  ? u.jsx("p", {
                      className:
                        "mt-6 text-xl md:text-2xl mb-6 max-w-2xl mx-auto opacity-90",
                      children: "Thank you for applying",
                    })
                  : u.jsx("p", {
                      className:
                        "mt-6 text-xl md:text-2xl mb-6 max-w-2xl mx-auto opacity-90",
                      children:
                        "The event has ended - we appreciate your support and participation!",
                    });
              })(),
            c &&
              (() => {
                const x = o == null ? void 0 : o.date,
                  w = new Date(),
                  v = Math.ceil((x - w) / (1e3 * 60 * 60 * 24));
                return (
                  v > 0 &&
                  v <= 7 &&
                  u.jsxs(u.Fragment, {
                    children: [
                      u.jsx("p", {
                        className: "mb-2 text-xl",
                        children: u.jsx("b", {
                          children: "Can't Make It to the event? Let Us Know",
                        }),
                      }),
                      u.jsx("p", {
                        className: "mb-2",
                        children:
                          "We understand that plans can change. If, for any reason, you won't be able to attend React Rajasthan, we kindly ask you to opt out by clicking the link below. This will help us offer your spot to someone on the waitlist who's eager to attend.",
                      }),
                      u.jsx("button", {
                        className:
                          "mb-2 inline-block text-white hover:text-pink-400 underline transition-colors",
                        onClick: y,
                        children: u.jsx("b", {
                          children: "Click here to opt out",
                        }),
                      }),
                      u.jsx("p", {
                        children:
                          "Thank you for your consideration and support!",
                      }),
                    ],
                  })
                );
              })(),
            u.jsxs("div", {
              className: "mt-10 text-sm font-medium",
              children: [
                e != null && e.time && e != null && e.name
                  ? u.jsxs("p", {
                      className: "mb-2 opacity-80",
                      children: [e.time, " | ", e.name],
                    })
                  : u.jsx("p", {
                      className: "mb-2 opacity-80",
                      children: "Venue details coming soon",
                    }),
                u.jsx("div", {
                  className:
                    "flex items-center justify-center space-x-2 sm:space-x-6 mt-6",
                  children: Object.entries(qe.socialLinks).map(([x, w]) =>
                    u.jsx(
                      "a",
                      {
                        href: w,
                        className:
                          "text-white hover:text-pink-300 transition-colors",
                        target: "_blank",
                        rel: "noopener noreferrer",
                        children: x.charAt(0).toUpperCase() + x.slice(1),
                      },
                      x
                    )
                  ),
                }),
              ],
            }),
          ],
        }),
        u.jsx("div", {
          className:
            "absolute bottom-8 transform -translate-x-1/2 animate-bounce z-20",
          children: u.jsx("button", {
            onClick: () => Ye("venue"),
            className: "text-white opacity-80 hover:opacity-100",
            children: u.jsx("svg", {
              xmlns: "http://www.w3.org/2000/svg",
              width: "24",
              height: "24",
              viewBox: "0 0 24 24",
              fill: "none",
              stroke: "currentColor",
              strokeWidth: "2",
              strokeLinecap: "round",
              strokeLinejoin: "round",
              children: u.jsx("path", { d: "M12 5v14M19 12l-7 7-7-7" }),
            }),
          }),
        }),
      ],
    });
  },
  Ir = ({ id: e, title: t, subtitle: n, className: r = "", children: l }) =>
    u.jsx("section", {
      id: e,
      className: `py-16 md:py-24 scroll-mt-16 ${r}`,
      children: u.jsxs("div", {
        className: "container mx-auto px-4",
        children: [
          t &&
            n &&
            u.jsxs("div", {
              className: "text-center mb-12",
              children: [
                t &&
                  u.jsx("h2", {
                    className: "text-3xl md:text-4xl font-bold mb-4",
                    children: t,
                  }),
                n &&
                  u.jsx("p", {
                    className: "text-lg text-gray-600 max-w-2xl mx-auto",
                    children: n,
                  }),
              ],
            }),
          l,
        ],
      }),
    }),
  yy = ({ venueDetails: e }) =>
    u.jsxs(Ir, {
      id: "venue",
      title: "Our Venue",
      subtitle:
        "Join us for an amazing day of React sessions, workshops and networking",
      children: [
        u.jsxs("div", {
          className: "grid md:grid-cols-2 gap-8 items-center",
          children: [
            u.jsxs("div", {
              className:
                "bg-white p-8 rounded-lg shadow-md transform transition-transform hover:scale-[1.02]",
              children: [
                u.jsx("h3", {
                  className: "text-2xl font-bold text-pink-400 mb-4",
                  children: e.name,
                }),
                u.jsxs("div", {
                  className: "space-y-4",
                  children: [
                    u.jsxs("div", {
                      className: "flex items-start",
                      children: [
                        u.jsx(Oh, {
                          className: "h-5 w-5 text-pink-400 mt-1 mr-3",
                        }),
                        u.jsxs("div", {
                          children: [
                            u.jsx("p", {
                              className: "font-medium",
                              children: "Location",
                            }),
                            u.jsx("p", {
                              className: "text-gray-600",
                              children: e.address,
                            }),
                            u.jsx("p", {
                              className: "text-gray-600",
                              children: e.city,
                            }),
                          ],
                        }),
                      ],
                    }),
                    u.jsxs("div", {
                      className: "flex items-start",
                      children: [
                        u.jsx(Th, {
                          className: "h-5 w-5 text-pink-400 mt-1 mr-3",
                        }),
                        u.jsxs("div", {
                          children: [
                            u.jsx("p", {
                              className: "font-medium",
                              children: "Date",
                            }),
                            u.jsx("p", {
                              className: "text-gray-600",
                              children: e.date,
                            }),
                          ],
                        }),
                      ],
                    }),
                    u.jsxs("div", {
                      className: "flex items-start",
                      children: [
                        u.jsx(Lh, {
                          className: "h-5 w-5 text-pink-400 mt-1 mr-3",
                        }),
                        u.jsxs("div", {
                          children: [
                            u.jsx("p", {
                              className: "font-medium",
                              children: "Time",
                            }),
                            u.jsx("p", {
                              className: "text-gray-600",
                              children: e.time,
                            }),
                          ],
                        }),
                      ],
                    }),
                  ],
                }),
                u.jsx("div", {
                  className: "mt-6",
                  children: u.jsxs("a", {
                    href: e.mapUrl,
                    target: "_blank",
                    rel: "noopener noreferrer",
                    className:
                      "text-pink-400 font-medium hover:text-pink-800 inline-flex items-center",
                    children: [
                      "View on Google Maps",
                      u.jsx("svg", {
                        xmlns: "http://www.w3.org/2000/svg",
                        className: "h-4 w-4 ml-1",
                        viewBox: "0 0 20 20",
                        fill: "currentColor",
                        children: u.jsx("path", {
                          fillRule: "evenodd",
                          d: "M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z",
                          clipRule: "evenodd",
                        }),
                      }),
                    ],
                  }),
                }),
              ],
            }),
            u.jsx("div", {
              className:
                "rounded-lg overflow-hidden shadow-md h-[300px] md:h-auto",
              style: { minHeight: 360 },
              children: u.jsx("iframe", {
                src: e.mapEmbed,
                width: "100%",
                height: "100%",
                style: { border: 0, minHeight: 360 },
                allowFullScreen: !0,
                loading: "lazy",
                referrerPolicy: "no-referrer-when-downgrade",
                title: "Venue location map",
              }),
            }),
          ],
        }),
        u.jsxs("div", {
          className: "mt-16 bg-pink-400 text-white rounded-lg p-8 text-center",
          style: {
            background: `linear-gradient(45deg, #831843cc, #9d174dcc, #be185dcc), url(${en}) center`,
          },
          children: [
            u.jsx("h3", {
              className: "text-2xl font-bold mb-4",
              children: "What to expect",
            }),
            u.jsxs("div", {
              className: "grid grid-cols-1 md:grid-cols-3 gap-6",
              children: [
                u.jsxs("div", {
                  className: "p-4 bg-white/10 rounded-lg",
                  children: [
                    u.jsx("h4", {
                      className: "font-bold text-xl mb-2",
                      children: "Technical Talks",
                    }),
                    u.jsx("p", {
                      children:
                        "Deep dives into React, performance optimization and modern web development.",
                    }),
                  ],
                }),
                u.jsxs("div", {
                  className: "p-4 bg-white/10 rounded-lg",
                  children: [
                    u.jsx("h4", {
                      className: "font-bold text-xl mb-2",
                      children: "Networking",
                    }),
                    u.jsx("p", {
                      children:
                        "Connect with fellow developers, speakers and community leaders.",
                    }),
                  ],
                }),
                u.jsxs("div", {
                  className: "p-4 bg-white/10 rounded-lg",
                  children: [
                    u.jsx("h4", {
                      className: "font-bold text-xl mb-2",
                      children: "Workshops",
                    }),
                    u.jsx("p", {
                      children:
                        "Hands-on sessions to improve your React and frontend development skills.",
                    }),
                  ],
                }),
              ],
            }),
          ],
        }),
      ],
    }),
  vy = ({ speakersData: e, venueDetails: t }) => {
    const n = (r) =>
      u.jsxs(
        "div",
        {
          className: `bg-white rounded-lg shadow-md overflow-hidden transform transition-all hover:shadow-xl hover:-translate-y-1\r
                   w-full sm:w-[calc(50%-1rem)] md:w-[calc(33.333%-1rem)] lg:w-[calc(25%-1.5rem)]`,
          children: [
            u.jsx("div", {
              className: "h-56 overflow-hidden",
              style: {
                background: `url(${en})`,
                backgroundPosition: "center",
                backgroundSize: "cover",
              },
              children: u.jsx("img", {
                src: r.imageUrl,
                alt: r.name,
                className:
                  "w-full h-full object-cover transition-transform duration-500 hover:scale-110",
                style: {
                  background:
                    "linear-gradient(45deg, rgba(131, 24, 67, 0.8), rgba(157, 23, 77, 0.8), rgba(190, 24, 93, 0.8))",
                },
              }),
            }),
            u.jsxs("div", {
              className: "p-6",
              children: [
                u.jsx("h3", {
                  className: "text-xl font-bold mb-1",
                  children: r.name,
                }),
                u.jsx("p", {
                  className: "text-pink-400 mb-3",
                  children: r.role,
                }),
                u.jsx("p", {
                  className: "text-gray-500 text-sm mb-1",
                  children: r.company,
                }),
                r.bio &&
                  u.jsx("p", {
                    className: "text-gray-600 mt-3 text-sm line-clamp-3",
                    children: r.bio,
                  }),
                u.jsxs("div", {
                  className: "mt-4 flex space-x-3",
                  children: [
                    r.twitterUrl &&
                      u.jsx("a", {
                        href: r.twitterUrl,
                        target: "_blank",
                        rel: "noopener noreferrer",
                        className:
                          "text-gray-500 hover:text-pink-500 transition-colors",
                        "aria-label": `${r.name}'s Twitter`,
                        children: u.jsx(oa, { className: "h-5 w-5" }),
                      }),
                    r.githubUrl &&
                      u.jsx("a", {
                        href: r.githubUrl,
                        target: "_blank",
                        rel: "noopener noreferrer",
                        className:
                          "text-gray-500 hover:text-gray-800 transition-colors",
                        "aria-label": `${r.name}'s GitHub`,
                        children: u.jsx(cf, { className: "h-5 w-5" }),
                      }),
                    r.linkedinUrl &&
                      u.jsx("a", {
                        href: r.linkedinUrl,
                        target: "_blank",
                        rel: "noopener noreferrer",
                        className:
                          "text-gray-500 hover:text-pink-700 transition-colors",
                        "aria-label": `${r.name}'s LinkedIn`,
                        children: u.jsx(la, { className: "h-5 w-5" }),
                      }),
                  ],
                }),
              ],
            }),
          ],
        },
        r.id
      );
    return u.jsxs(Ir, {
      id: "speakers",
      title: "Meet Our Speakers",
      subtitle: "Learn from industry experts and React professionals",
      children: [
        u.jsx("div", {
          className: "flex flex-wrap justify-center gap-6",
          style: { alignItems: "stretch" },
          children:
            e.filter((r) => r.type === "general").length > 0
              ? e.filter((r) => r.type === "general").map(n)
              : u.jsx("div", {
                  className:
                    "text-center text-gray-500 font-semibold bg-gray-50 py-6 px-10 rounded-lg shadow-md",
                  children:
                    "No speakers have been announced yet. Stay tuned for updates!",
                }),
        }),
        e.filter((r) => r.type === "panel").length > 0 &&
          u.jsxs(u.Fragment, {
            children: [
              u.jsx("h3", {
                className:
                  "text-2xl md:text-3xl font-bold mt-10 mb-6 text-center",
                children: "Panel Speakers",
              }),
              u.jsx("div", {
                className: "flex flex-wrap justify-center gap-6",
                style: { alignItems: "stretch" },
                children: e.filter((r) => r.type === "panel").map(n),
              }),
            ],
          }),
        (t == null ? void 0 : t.date) &&
          new Date(t.date) >
            new Date(Date.now() + 7 * 24 * 60 * 60 * 1e3) &&
          u.jsx("div", {
            className: "mt-12 text-center",
            children: u.jsxs("p", {
              className: "text-gray-600 max-w-2xl mx-auto",
              children: [
                "Have a good tech tale to tell?",
                u.jsx(ga, {
                  button: u.jsx("button", {
                    className:
                      "text-pink-400 hover:text-pink-600 transition-colors hover:underline ml-1 font-semibold",
                    children: "Call for Speaker",
                  }),
                  defaultRole: "Speaker",
                  venueDetails: t == null ? void 0 : t.venue,
                  meetupName: t == null ? void 0 : t.id,
                }),
                ".",
              ],
            }),
          }),
      ],
    });
  },
  wy = ({ sponsorsData: e, venueDetails: t }) => {
    const n = e.filter((s) => s.tier === "gold"),
      r = e.filter((s) => s.tier === "silver"),
      l = e.filter((s) => s.tier === "bronze"),
      o = e.filter((s) => s.tier === "sponsor"),
      i = e.filter((s) => s.tier === "partner"),
      a = e.filter((s) => s.tier === "community");
    return u.jsxs(Ir, {
      id: "sponsors",
      title: "Our Sponsors & Partners",
      subtitle:
        "The amazing companies and organizations that make this event possible",
      className: "bg-gray-50",
      children: [
        u.jsxs("div", {
          className:
            "mt-16 bg-pink-400 text-white p-8 rounded-lg text-center mb-16",
          style: {
            background: `linear-gradient(45deg, #831843cc, #9d174dcc, #be185dcc), url(${en}) center`,
          },
          children: [
            u.jsx("h3", {
              className: "text-2xl font-bold mb-4",
              children: "Become a Sponsor",
            }),
            u.jsx("p", {
              className: "max-w-2xl mx-auto mb-6",
              children:
                "Support the React community in Rajasthan and showcase your brand to hundreds of tech enthusiasts. We offer various sponsorship packages to meet your goals.",
            }),
            u.jsx("a", {
              href: "mailto:info@reactrajasthan.com",
              className: "text-white hover:text-pink-300 transition-colors",
              children: "info@reactrajasthan.com | +91 9782312993",
            }),
          ],
        }),
        e.length > 0 &&
          u.jsxs("div", {
            className: "mb-16",
            children: [
              u.jsx("h3", {
                className: "text-xl font-bold text-center mb-8 text-amber-600",
                children: "SPONSORS",
              }),
              n.length > 0 &&
                u.jsx("div", {
                  className: "flex flex-wrap justify-center gap-6 mb-6",
                  children: n.map((s) =>
                    u.jsxs(
                      "a",
                      {
                        href: s.websiteUrl,
                        target: "_blank",
                        rel: "noopener noreferrer",
                        className:
                          "bg-white p-8 rounded-lg shadow-md flex items-center justify-center transform transition-all hover:shadow-lg hover:-translate-y-1 w-[calc(100%-0.75rem)] md:w-[calc(50%-0.75rem)] lg:w-[calc(33.3333%-1rem)] sponsor-item",
                        children: [
                          u.jsx("img", {
                            src: s.logoUrl,
                            alt: `${s.name} logo`,
                            className: "max-h-20 max-w-full object-contain",
                          }),
                          u.jsx("p", { children: s.tier.toUpperCase() }),
                        ],
                      },
                      s.id
                    )
                  ),
                }),
              r.length > 0 &&
                u.jsx("div", {
                  className: "flex flex-wrap justify-center gap-6 mb-6",
                  children: r.map((s) =>
                    u.jsxs(
                      "a",
                      {
                        href: s.websiteUrl,
                        target: "_blank",
                        rel: "noopener noreferrer",
                        className:
                          "bg-white p-8 rounded-lg shadow-md flex items-center justify-center transform transition-all hover:shadow-lg hover:-translate-y-1 w-[calc(100%-0.75rem)] md:w-[calc(50%-0.75rem)] lg:w-[calc(33.3333%-1rem)] sponsor-item",
                        children: [
                          u.jsx("img", {
                            src: s.logoUrl,
                            alt: `${s.name} logo`,
                            className: "max-h-20 max-w-full object-contain",
                          }),
                          u.jsx("p", { children: s.tier.toUpperCase() }),
                        ],
                      },
                      s.id
                    )
                  ),
                }),
              l.length > 0 &&
                u.jsx("div", {
                  className: "flex flex-wrap justify-center gap-6",
                  children: l.map((s) =>
                    u.jsxs(
                      "a",
                      {
                        href: s.websiteUrl,
                        target: "_blank",
                        rel: "noopener noreferrer",
                        className:
                          "bg-white p-8 rounded-lg shadow-md flex items-center justify-center transform transition-all hover:shadow-lg hover:-translate-y-1 w-[calc(100%-0.75rem)] md:w-[calc(50%-0.75rem)] lg:w-[calc(33.3333%-1rem)] sponsor-item",
                        children: [
                          u.jsx("img", {
                            src: s.logoUrl,
                            alt: `${s.name} logo`,
                            className: "max-h-20 max-w-full object-contain",
                          }),
                          u.jsx("p", { children: s.tier.toUpperCase() }),
                        ],
                      },
                      s.id
                    )
                  ),
                }),
              o.length > 0 &&
                u.jsx("div", {
                  className: "flex flex-wrap justify-center gap-6",
                  children: o.map((s) =>
                    u.jsx(
                      "a",
                      {
                        href: s.websiteUrl,
                        target: "_blank",
                        rel: "noopener noreferrer",
                        className:
                          "bg-white p-8 rounded-lg shadow-md flex items-center justify-center transform transition-all hover:shadow-lg hover:-translate-y-1 w-[calc(100%-0.75rem)] md:w-[calc(50%-0.75rem)] lg:w-[calc(33.3333%-1rem)] sponsor-item",
                        children: u.jsx("img", {
                          src: s.logoUrl,
                          alt: `${s.name} logo`,
                          className: "max-h-20 max-w-full object-contain",
                        }),
                      },
                      s.id
                    )
                  ),
                }),
            ],
          }),
        i.length > 0 &&
          u.jsxs("div", {
            className: "mb-16",
            children: [
              u.jsx("h3", {
                className: "text-xl font-bold text-center mb-8 text-gray-500",
                children: "Platform Partners",
              }),
              u.jsx("div", {
                className: "grid grid-cols-1 md:grid-cols-2 gap-6",
                children: i.map((s) =>
                  u.jsx(
                    "a",
                    {
                      href: s.websiteUrl,
                      target: "_blank",
                      rel: "noopener noreferrer",
                      className:
                        "bg-gray-900 p-5 rounded-lg shadow-md flex items-center justify-center transform transition-all hover:shadow-lg hover:-translate-y-1",
                      children: u.jsx("img", {
                        style: { transform: "scale(0.6)" },
                        src: s.logoUrl,
                        alt: `${s.name} logo`,
                        className: "max-h-24 max-w-full object-contain",
                      }),
                    },
                    s.id
                  )
                ),
              }),
            ],
          }),
        a.length > 0 &&
          u.jsxs("div", {
            className: "mb-16",
            children: [
              u.jsx("h3", {
                className: "text-xl font-bold text-center mb-8 text-gray-500",
                children: "Community Partners",
              }),
              u.jsx("div", {
                className: "flex flex-wrap justify-center gap-6",
                style: { alignItems: "unset" },
                children: a.map((s) =>
                  u.jsx(
                    "a",
                    {
                      href: s.websiteUrl,
                      target: "_blank",
                      rel: "noopener noreferrer",
                      className:
                        "bg-white py-8 rounded-lg shadow-md flex items-center justify-center transform transition-all hover:shadow-lg hover:-translate-y-1 w-[calc(50%-0.75rem)] md:w-[calc(33.3333%-1rem)] lg:w-[calc(25%-1.125rem)]",
                      children: u.jsx("img", {
                        src: s.logoUrl,
                        alt: `${s.name} logo`,
                        className: "max-h-20 max-w-full object-contain",
                      }),
                    },
                    s.id
                  )
                ),
              }),
            ],
          }),
        u.jsxs("div", {
          className: "mt-10 bg-pink-500 text-white p-8 rounded-lg text-center",
          style: {
            background: `linear-gradient(45deg, #831843cc, #9d174dcc, #be185dcc), url(${en}) center`,
          },
          children: [
            u.jsx("h3", {
              className: "text-2xl font-bold mb-4",
              children: "Become a Community Partner",
            }),
            u.jsx("p", {
              className: "max-w-2xl mx-auto mb-6",
              children:
                "If you're a community, meetup group, or nonprofit interested in collaborating, we'd love to partner with you.",
            }),
            u.jsx(ga, {
              button: u.jsx("button", {
                className: "text-white hover:text-pink-300 transition-colors",
                children: "Reach out to us",
              }),
              type: "community",
              venueDetails: t,
            }),
          ],
        }),
      ],
    });
  },
  Ju = ({ id: e, title: t, subtitle: n, members: r, className: l = "" }) =>
    !r || r.length === 0
      ? null
      : u.jsx(Ir, {
          id: e,
          title: t,
          subtitle: n,
          className: l,
          children: u.jsx("div", {
            className: "flex flex-wrap justify-center gap-6",
            style: { alignItems: "unset" },
            children: r.map((o) =>
              u.jsxs(
                "div",
                {
                  className:
                    "bg-white rounded-lg shadow-md overflow-hidden group w-full sm:w-[calc(50%-1rem)] md:w-[calc(33.333%-1rem)] lg:w-[calc(25%-1.5rem)] ",
                  children: [
                    u.jsxs("div", {
                      className: "h-56 overflow-hidden relative",
                      style: {
                        background: `url(${en})`,
                        backgroundPosition: "center",
                        backgroundSize: "cover",
                      },
                      children: [
                        u.jsx("img", {
                          src: o.imageUrl,
                          alt: o.name,
                          className:
                            "w-full h-full object-cover transition-transform duration-500 group-hover:scale-110",
                          style: {
                            background:
                              "linear-gradient(45deg, rgba(131, 24, 67, 0.8), rgba(157, 23, 77, 0.8), rgba(190, 24, 93, 0.8))",
                          },
                        }),
                        u.jsx("div", {
                          className:
                            "absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end justify-center pb-4",
                          children: u.jsxs("div", {
                            className: "flex space-x-4",
                            children: [
                              o.twitterUrl &&
                                u.jsx("a", {
                                  href: o.twitterUrl,
                                  target: "_blank",
                                  rel: "noopener noreferrer",
                                  className:
                                    "text-white hover:text-pink-400 transition-colors",
                                  "aria-label": `${o.name}'s Twitter`,
                                  children: u.jsx(oa, { className: "h-5 w-5" }),
                                }),
                              o.githubUrl &&
                                u.jsx("a", {
                                  href: o.githubUrl,
                                  target: "_blank",
                                  rel: "noopener noreferrer",
                                  className:
                                    "text-white hover:text-pink-400 transition-colors",
                                  "aria-label": `${o.name}'s GitHub`,
                                  children: u.jsx(cf, { className: "h-5 w-5" }),
                                }),
                              o.linkedinUrl &&
                                u.jsx("a", {
                                  href: o.linkedinUrl,
                                  target: "_blank",
                                  rel: "noopener noreferrer",
                                  className:
                                    "text-white hover:text-pink-400 transition-colors",
                                  "aria-label": `${o.name}'s LinkedIn`,
                                  children: u.jsx(la, { className: "h-5 w-5" }),
                                }),
                            ],
                          }),
                        }),
                      ],
                    }),
                    u.jsxs("div", {
                      className: "p-6",
                      children: [
                        u.jsx("h3", {
                          className: "text-xl font-bold mb-1",
                          children: o.name,
                        }),
                        u.jsx("p", {
                          className: "text-pink-600",
                          children: o.role,
                        }),
                      ],
                    }),
                  ],
                },
                o.id
              )
            ),
          }),
        }),
  xy = ({ venueDetails: e }) => {
    const t = new Date().getFullYear(),
      n = `registration_${(e == null ? void 0 : e.date) ?? "unknown"}`,
      [r, l] = yp.useState(localStorage.getItem(n) === "true");
    return (
      k.useEffect(() => {
        const o = () => {
          l(localStorage.getItem(n) === "true");
        };
        return (
          window.addEventListener("storage", o),
          window.addEventListener("registrationChange", o),
          o(),
          () => {
            window.removeEventListener("storage", o),
              window.removeEventListener("registrationChange", o);
          }
        );
      }),
      u.jsx("footer", {
        className: "bg-gray-900 text-white py-12",
        children: u.jsxs("div", {
          className: "container mx-auto px-4",
          children: [
            u.jsxs("div", {
              className: "grid grid-cols-1 md:grid-cols-3 gap-8",
              children: [
                u.jsxs("div", {
                  children: [
                    u.jsx("a", {
                      href: "#",
                      className: "text-xl md:text-2xl font-bold text-pink-400",
                      children: u.jsxs("div", {
                        className: "flex",
                        style: { gap: 10 },
                        children: [
                          u.jsxs("div", {
                            className: "logo",
                            style: { transform: "translateY(-20%) scale(0.8)" },
                            children: [
                              u.jsx("img", {
                                src: df,
                                alt: "React",
                                style: { height: 40 },
                              }),
                              u.jsx("img", {
                                src: ff,
                                alt: "React",
                                style: {
                                  position: "absolute",
                                  height: 40,
                                  transform: "translateY(-20%) scale(1.4)",
                                },
                              }),
                            ],
                          }),
                          qe.name,
                        ],
                      }),
                    }),
                    u.jsx("br", {}),
                    u.jsx("p", {
                      className: "text-gray-400 mb-4 max-w-xs",
                      children:
                        "The premier React community in Rajasthan, bringing together developers to learn, share knowledge and build connections.",
                    }),
                    u.jsx("div", {
                      className: "flex gap-4 flex-wrap",
                      children: Object.entries(qe.socialLinks).map(([o, i]) =>
                        u.jsx(
                          "a",
                          {
                            href: i,
                            target: "_blank",
                            rel: "noopener noreferrer",
                            className:
                              "text-gray-400 hover:text-white transition-colors",
                            "aria-label": o,
                            children: o.charAt(0).toUpperCase() + o.slice(1),
                          },
                          o
                        )
                      ),
                    }),
                  ],
                }),
                u.jsxs("div", {
                  children: [
                    u.jsx("h3", {
                      className: "text-xl font-bold mb-4",
                      children: "Quick Links",
                    }),
                    u.jsxs("ul", {
                      className: "space-y-2",
                      children: [
                        u.jsx("li", {
                          children: u.jsx("button", {
                            onClick: () => Ye("hero"),
                            className:
                              "text-gray-400 hover:text-white transition-colors",
                            children: "Home",
                          }),
                        }),
                        u.jsx("li", {
                          children: u.jsx("button", {
                            onClick: () => Ye("speakers"),
                            className:
                              "text-gray-400 hover:text-white transition-colors",
                            children: "Speakers",
                          }),
                        }),
                        u.jsx("li", {
                          children: u.jsx("button", {
                            onClick: () => Ye("sponsors"),
                            className:
                              "text-gray-400 hover:text-white transition-colors",
                            children: "Sponsors",
                          }),
                        }),
                        u.jsx("li", {
                          children: u.jsx("button", {
                            onClick: () => Ye("venue"),
                            className:
                              "text-gray-400 hover:text-white transition-colors",
                            children: "Venue",
                          }),
                        }),
                        u.jsx("li", {
                          children: u.jsx("button", {
                            onClick: () => Ye("organizers"),
                            className:
                              "text-gray-400 hover:text-white transition-colors",
                            children: "Organizers",
                          }),
                        }),
                        u.jsx("li", {
                          children: u.jsx("button", {
                            onClick: () => Ye("volunteers"),
                            className:
                              "text-gray-400 hover:text-white transition-colors",
                            children: "Volunteers",
                          }),
                        }),
                      ],
                    }),
                  ],
                }),
                u.jsxs("div", {
                  children: [
                    u.jsx("h3", {
                      className: "text-xl font-bold mb-4",
                      children: "Contact",
                    }),
                    u.jsx("p", {
                      className: "text-gray-400 mb-4",
                      children:
                        "Have questions about the event? Reach out to us!",
                    }),
                    u.jsx("a", {
                      href: "mailto:info@reactrajasthan.com",
                      className:
                        "text-pink-400 hover:text-pink-300 transition-colors",
                      children: "info@reactrajasthan.com | +91 9782312993",
                    }),
                  ],
                }),
              ],
            }),
            u.jsx("div", {
              className:
                "border-t border-gray-800 mt-8 pt-8 text-center text-gray-500 text-sm",
              children: u.jsxs("p", {
                children: [
                  "© ",
                  t,
                  " ",
                  qe.name,
                  ". All rights reserved.",
                  u.jsx("span", {
                    className: "block mt-1",
                    children:
                      "Made with ❤️ by the React community in Rajasthan.",
                  }),
                ],
              }),
            }),
          ],
        }),
      })
    );
  },
  ky = () =>
    u.jsx(Ir, {
      id: "community",
      className: "bg-gray-50",
      children: u.jsxs("div", {
        className:
          "rounded-xl px-12 py-12 md:py-16 grid grid-cols-1 md:grid-cols-2 items-center gap-8 text-white",
        style: {
          background: `linear-gradient(45deg, #831843cc, #9d174dcc, #be185dcc), url(${en}) center`,
        },
        children: [
          u.jsxs("div", {
            children: [
              u.jsx("h2", {
                className: "text-4xl md:text-5xl font-bold mb-4",
                children: "Join Our Community",
              }),
              u.jsx("p", {
                className: "text-lg md:text-xl",
                children:
                  "Follow us on social media and stay updated with the latest news and events.",
              }),
            ],
          }),
          u.jsxs("div", {
            className: "flex justify-center md:justify-end gap-8",
            children: [
              u.jsx("a", {
                href: qe.socialLinks.Twitter,
                target: "_blank",
                rel: "noopener noreferrer",
                className: "hover:text-pink-500 transition-colors duration-300",
                children: u.jsx(oa, {
                  className:
                    "w-10 h-10 md:w-12 md:h-12 hover:scale-110 transition-transform duration-200",
                }),
              }),
              u.jsx("a", {
                href: qe.socialLinks.LinkedIn,
                target: "_blank",
                rel: "noopener noreferrer",
                className: "hover:text-pink-500 transition-colors duration-300",
                children: u.jsx(la, {
                  className:
                    "w-10 h-10 md:w-12 md:h-12 hover:scale-110 transition-transform duration-200",
                }),
              }),
              u.jsx("a", {
                href: qe.socialLinks.Instagram,
                target: "_blank",
                rel: "noopener noreferrer",
                className: "hover:text-pink-500 transition-colors duration-300",
                children: u.jsx(bh, {
                  className:
                    "w-10 h-10 md:w-12 md:h-12 hover:scale-110 transition-transform duration-200",
                }),
              }),
              u.jsx("a", {
                href: qe.socialLinks.YouTube,
                target: "_blank",
                rel: "noopener noreferrer",
                className: "hover:text-pink-500 transition-colors duration-300",
                children: u.jsx(Mh, {
                  className:
                    "w-10 h-10 md:w-12 md:h-12 hover:scale-110 transition-transform duration-200",
                }),
              }),
              u.jsx("a", {
                href: qe.socialLinks.WhatsApp,
                target: "_blank",
                rel: "noopener noreferrer",
                className: "hover:text-pink-500 transition-colors duration-300",
                children: u.jsxs("svg", {
                  fill: "#fff",
                  viewBox: "0 0 32 32",
                  version: "1.1",
                  xmlns: "http://www.w3.org/2000/svg",
                  className:
                    "w-10 h-10 md:w-12 md:h-12 hover:fill-pink-500 hover:scale-110 transition-transform duration-200",
                  children: [
                    u.jsx("g", { id: "SVGRepo_bgCarrier", strokeWidth: "0" }),
                    u.jsx("g", {
                      id: "SVGRepo_tracerCarrier",
                      strokeLinecap: "round",
                      strokeLinejoin: "round",
                    }),
                    u.jsxs("g", {
                      id: "SVGRepo_iconCarrier",
                      children: [
                        " ",
                        u.jsx("title", { children: "whatsapp" }),
                        " ",
                        u.jsx("path", {
                          d: "M26.576 5.363c-2.69-2.69-6.406-4.354-10.511-4.354-8.209 0-14.865 6.655-14.865 14.865 0 2.732 0.737 5.291 2.022 7.491l-0.038-0.070-2.109 7.702 7.879-2.067c2.051 1.139 4.498 1.809 7.102 1.809h0.006c8.209-0.003 14.862-6.659 14.862-14.868 0-4.103-1.662-7.817-4.349-10.507l0 0zM16.062 28.228h-0.005c-0 0-0.001 0-0.001 0-2.319 0-4.489-0.64-6.342-1.753l0.056 0.031-0.451-0.267-4.675 1.227 1.247-4.559-0.294-0.467c-1.185-1.862-1.889-4.131-1.889-6.565 0-6.822 5.531-12.353 12.353-12.353s12.353 5.531 12.353 12.353c0 6.822-5.53 12.353-12.353 12.353h-0zM22.838 18.977c-0.371-0.186-2.197-1.083-2.537-1.208-0.341-0.124-0.589-0.185-0.837 0.187-0.246 0.371-0.958 1.207-1.175 1.455-0.216 0.249-0.434 0.279-0.805 0.094-1.15-0.466-2.138-1.087-2.997-1.852l0.010 0.009c-0.799-0.74-1.484-1.587-2.037-2.521l-0.028-0.052c-0.216-0.371-0.023-0.572 0.162-0.757 0.167-0.166 0.372-0.434 0.557-0.65 0.146-0.179 0.271-0.384 0.366-0.604l0.006-0.017c0.043-0.087 0.068-0.188 0.068-0.296 0-0.131-0.037-0.253-0.101-0.357l0.002 0.003c-0.094-0.186-0.836-2.014-1.145-2.758-0.302-0.724-0.609-0.625-0.836-0.637-0.216-0.010-0.464-0.012-0.712-0.012-0.395 0.010-0.746 0.188-0.988 0.463l-0.001 0.002c-0.802 0.761-1.3 1.834-1.3 3.023 0 0.026 0 0.053 0.001 0.079l-0-0.004c0.131 1.467 0.681 2.784 1.527 3.857l-0.012-0.015c1.604 2.379 3.742 4.282 6.251 5.564l0.094 0.043c0.548 0.248 1.25 0.513 1.968 0.74l0.149 0.041c0.442 0.14 0.951 0.221 1.479 0.221 0.303 0 0.601-0.027 0.889-0.078l-0.031 0.004c1.069-0.223 1.956-0.868 2.497-1.749l0.009-0.017c0.165-0.366 0.261-0.793 0.261-1.242 0-0.185-0.016-0.366-0.047-0.542l0.003 0.019c-0.092-0.155-0.34-0.247-0.712-0.434z",
                        }),
                        " ",
                      ],
                    }),
                  ],
                }),
              }),
            ],
          }),
        ],
      }),
    }),
  Sy = ({ setEventName: e, setShowFeedback: t }) => {
    const [n, r] = k.useState([]),
      [l, o] = k.useState(null);
    return (
      k.useEffect(() => {
        e((l == null ? void 0 : l.title) || ""), console.log(l);
      }, [l]),
      k.useEffect(() => {
        const i = new Date();
        if (!ri) return;
        const a = [...ri].sort((y, x) => {
            var h, f;
            const w = ((h = y.date) == null ? void 0 : h.getTime()) ?? 1 / 0,
              v = ((f = x.date) == null ? void 0 : f.getTime()) ?? 1 / 0;
            return w - v;
          }),
          s = a.find((y) => y.date && y.date > i),
          c = a.filter((y) => y.date && y.date <= i),
          p = c.length > 0 ? c[c.length - 1] : void 0,
          m = s || p || a[0];
        r(a), o(m);
      }, [ri]),
      k.useEffect(() => {
        document.title =
          "React Rajasthan - The Premier React Community in Rajasthan";
      }, []),
      u.jsxs(u.Fragment, {
        children: [
          u.jsx(gy, {
            venueDetails: l == null ? void 0 : l.venue,
            events: n,
            activeEventId: l == null ? void 0 : l.id,
            onSelect: (i) => o(i),
            background: l == null ? void 0 : l.backgroundImageUrl,
          }),
          (l == null ? void 0 : l.date) &&
            u.jsxs(u.Fragment, {
              children: [
                u.jsx(vy, {
                  speakersData: (l == null ? void 0 : l.speakers) || [],
                  venueDetails: l,
                }),
                u.jsx(wy, {
                  sponsorsData: (l == null ? void 0 : l.sponsors) || [],
                  venueDetails: l == null ? void 0 : l.venue,
                }),
                (l == null ? void 0 : l.venue) &&
                  u.jsx(yy, { venueDetails: l.venue }),
                u.jsx(Ju, {
                  id: "organizers",
                  title: "Organizers",
                  subtitle: "The team making React Rajasthan possible",
                  members: (l == null ? void 0 : l.organizers) || [],
                  className: "bg-gray-50",
                }),
                u.jsx(Ju, {
                  id: "volunteers",
                  title: "Our Volunteers",
                  subtitle: "Meet the amazing team working behind the scenes",
                  members: (l == null ? void 0 : l.volunteers) || [],
                }),
              ],
            }),
          u.jsx(ky, {}),
          u.jsx(xy, { venueDetails: l == null ? void 0 : l.venue }),
        ],
      })
    );
  },
  Ey = { meetup_1: "https://codeup.in/dev/submit/meetup1_feedback" },
  It = {
    title: "Meetup #1 - Feedback",
    questions: [
      { text: "Name", type: "string", required: !0 },
      { text: "Email", type: "string", required: !0 },
      {
        text: "How much are you satisfied with the event",
        type: "meter",
        required: !0,
      },
      {
        text: "Would you promote this to your friends and colleagues",
        type: "meter",
        required: !0,
      },
      {
        text: "Top liked Sessions of the Day",
        type: "multiple tick answer",
        options: [
          "Shubham Gupta",
          "Vansh Kapoor",
          "Manjeet Sharma",
          "Vaibhav Hapani",
          "Himanshu Pahwa",
          "Harshita Chugh",
          "Uma Shankar Arora",
          "Anil Pilania",
          "Panel Discussion",
        ],
        required: !0,
      },
      {
        text: "How often you want such sessions",
        type: "multiple choice question",
        options: ["Every Month", "Every Quarter", "Every Six Months"],
        required: !0,
      },
      {
        text: "How did you liked the process of registrations and our platform",
        type: "meter",
        required: !0,
      },
      { text: "Any feedback from your end", type: "long string", required: !1 },
    ],
    postscript:
      "Thanks again for joining us at Meetup #1! We'd love to hear your thoughts on the event. Your feedback will help us improve for our next meetup.",
    description: `Thank you for attending React Rajasthan Meetup #1!
We're so glad you could join us, and we hope you had a great time. To make our future events even better, we'd love to hear your thoughts. Your feedback helps us create more engaging and relevant meetups for everyone.`,
  },
  nt = (e) => e.replaceAll(" ", "_"),
  Ny = () => {
    const { id: e } = I0(),
      t = Ey[e || ""],
      [n, r] = k.useState({}),
      [l, o] = k.useState([]),
      [i, a] = k.useState(!1);
    if (
      (k.useEffect(() => {
        const h = {};
        It.questions.forEach((f) => {
          f.type === "meter" && (h[nt(f.text)] = 5);
        }),
          r(h);
      }, []),
      !t)
    )
      return u.jsx("div", {
        className: "p-4 text-red-500 text-xl flex h-dvh justify-center",
        children: "404 - Feedback form not found",
      });
    const s = (h, f) => {
        r((d) => ({ ...d, [nt(h.text)]: f }));
      },
      c = () => {
        const h = [];
        return (
          It.questions.forEach((f) => {
            if (!f.required) return;
            const d = n[nt(f.text)];
            switch (f.type) {
              case "string":
                (!d || (typeof d == "string" && d.trim() === "")) &&
                  h.push(`${f.text} is required.`);
                break;
              case "meter":
                (d === void 0 || d === "") && h.push(`${f.text} is required.`);
                break;
              case "multiple tick answer":
                (!d || typeof d != "string") &&
                  h.push(`Please select one option for "${f.text}".`);
                break;
              case "multiple choice question":
                d || h.push(`${f.text} is required.`);
                break;
            }
          }),
          h
        );
      },
      p = async (h) => {
        h.preventDefault();
        const f = c();
        if (f.length) {
          o(f);
          return;
        }
        const d = {};
        for (const g of It.questions) {
          const E = nt(g.text),
            N = n[E];
          d[E] = N;
        }
        try {
          Z(), await H.post(t, d), Z("Feedback Submitted Successfully"), a(!0);
        } catch {
          o(["Error submitting form. Please try again later."]),
            Z("There was an error");
        }
      },
      m = (h) =>
        u.jsx("input", {
          type: h.text === "Email" ? "email" : "text",
          value: n[nt(h.text)] || "",
          required: h.required,
          className:
            "w-full border rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-pink-400",
          onChange: (f) => s(h, f.target.value),
        }),
      y = (h) =>
        u.jsx("textarea", {
          value: n[nt(h.text)] || "",
          required: h.required,
          className:
            "w-full border rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-pink-400",
          onChange: (f) => s(h, f.target.value),
        }),
      x = (h) =>
        u.jsx("input", {
          type: "range",
          min: "0",
          max: "10",
          required: h.required,
          value: n[nt(h.text)] ?? 5,
          className: "w-full accent-pink-500 focus:outline-none",
          onChange: (f) => s(h, Number(f.target.value)),
        }),
      w = (h) => {
        var f;
        return u.jsx("div", {
          className: "flex flex-col gap-2",
          style: { alignItems: "start" },
          children:
            (f = h.options) == null
              ? void 0
              : f.map((d) => {
                  const g = n[nt(h.text)];
                  return u.jsxs(
                    "label",
                    {
                      className: "flex items-flex-start gap-2",
                      children: [
                        u.jsx("input", {
                          type: "radio",
                          name: nt(h.text),
                          value: d,
                          className: "accent-pink-500 focus:ring-pink-400",
                          checked: g === d,
                          onChange: () => s(h, d),
                        }),
                        d,
                      ],
                    },
                    d
                  );
                }),
        });
      },
      v = (h) => {
        var f;
        return u.jsxs("select", {
          required: h.required,
          className:
            "w-full border rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-pink-400",
          onChange: (d) => s(h, d.target.value),
          defaultValue: "",
          children: [
            u.jsx("option", {
              value: "",
              disabled: !0,
              children: "Select an option",
            }),
            (f = h.options) == null
              ? void 0
              : f.map((d) => u.jsx("option", { value: d, children: d }, d)),
          ],
        });
      };
    return (
      k.useEffect(() => {
        var f;
        const h = (f = at()) == null ? void 0 : f.user;
        h && r((d) => ({ ...d, Name: h.name, Email: h.email }));
      }, []),
      i
        ? u.jsx("div", {
            className: "p-6 text-green-600 text-xl flex h-dvh justify-center",
            children: "Thank you for your feedback! 🎉",
          })
        : u.jsxs("div", {
            className: "max-w-2xl mx-auto p-6 mt-16 md:mt-24",
            children: [
              u.jsx("h1", {
                className: "text-2xl font-bold mb-4",
                children: It.title,
              }),
              u.jsx("p", {
                className: "mb-4 text-gray-700 whitespace-pre-line",
                children: It.description,
              }),
              u.jsxs("form", {
                className: "space-y-6",
                onSubmit: p,
                noValidate: !0,
                children: [
                  It.questions.map((h) =>
                    u.jsxs(
                      "div",
                      {
                        children: [
                          u.jsxs("label", {
                            className: "block text-sm font-medium mb-1",
                            children: [
                              h.text,
                              h.required &&
                                u.jsx("span", {
                                  className: "text-red-600",
                                  children: "*",
                                }),
                            ],
                          }),
                          h.type === "string" && m(h),
                          h.type === "long string" && y(h),
                          h.type === "meter" && x(h),
                          h.type === "multiple tick answer" && w(h),
                          h.type === "multiple choice question" && v(h),
                        ],
                      },
                      h.text
                    )
                  ),
                  l.length > 0 &&
                    u.jsx("div", {
                      className:
                        "bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded mb-4",
                      children: u.jsx("ul", {
                        className: "list-disc pl-5 space-y-1",
                        children: l.map((h) => u.jsx("li", { children: h }, h)),
                      }),
                    }),
                  u.jsx("button", {
                    type: "submit",
                    className:
                      "mt-6 bg-pink-400 text-white py-2 px-4 rounded hover:bg-pink-600 focus:ring-2 focus:ring-pink-400",
                    children: "Submit Feedback",
                  }),
                  u.jsx("p", {
                    className: "text-sm text-gray-500 mt-4",
                    children: It.postscript,
                  }),
                ],
              }),
            ],
          })
    );
  },
  Cy = () => {
    k.useEffect(() => {
      M1();
    }, []);
    const [e, t] = k.useState(""),
      [n, r] = k.useState(!1);
    return u.jsx(a0, {
      children: u.jsx(u.Fragment, {
        children: u.jsxs(E1, {
          children: [
            u.jsx(O1, { eventName: e, showFeedback: n }),
            u.jsxs(e1, {
              children: [
                u.jsx(wl, {
                  path: "/",
                  element: u.jsx(Sy, { setEventName: t, setShowFeedback: r }),
                }),
                u.jsx(wl, { path: "/:id/feedback", element: u.jsx(Ny, {}) }),
                u.jsx(wl, {
                  path: "/*",
                  element: u.jsx("div", {
                    className:
                      "p-4 text-red-500 text-xl flex h-dvh justify-center",
                    children: "404 - Page not found",
                  }),
                }),
              ],
            }),
          ],
        }),
      }),
    });
  };
ra(document.getElementById("root")).render(
  u.jsx(k.StrictMode, { children: u.jsx(Cy, {}) })
);
