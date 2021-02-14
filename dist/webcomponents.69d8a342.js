// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles
parcelRequire = (function (modules, cache, entry, globalName) {
  // Save the require from previous bundle to this closure if any
  var previousRequire = typeof parcelRequire === 'function' && parcelRequire;
  var nodeRequire = typeof require === 'function' && require;

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire = typeof parcelRequire === 'function' && parcelRequire;
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error('Cannot find module \'' + name + '\'');
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = cache[name] = new newRequire.Module(name);

      modules[name][0].call(module.exports, localRequire, module, module.exports, this);
    }

    return cache[name].exports;

    function localRequire(x){
      return newRequire(localRequire.resolve(x));
    }

    function resolve(x){
      return modules[name][1][x] || x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [function (require, module) {
      module.exports = exports;
    }, {}];
  };

  var error;
  for (var i = 0; i < entry.length; i++) {
    try {
      newRequire(entry[i]);
    } catch (e) {
      // Save first error but execute all entries
      if (!error) {
        error = e;
      }
    }
  }

  if (entry.length) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(entry[entry.length - 1]);

    // CommonJS
    if (typeof exports === "object" && typeof module !== "undefined") {
      module.exports = mainExports;

    // RequireJS
    } else if (typeof define === "function" && define.amd) {
     define(function () {
       return mainExports;
     });

    // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }

  // Override the current require with this new one
  parcelRequire = newRequire;

  if (error) {
    // throw error from earlier, _after updating parcelRequire_
    throw error;
  }

  return newRequire;
})({"../img/book.svg":[function(require,module,exports) {
module.exports = "/book.5003d21a.svg";
},{}],"../img/carbs(formula).svg":[function(require,module,exports) {
module.exports = "/carbs(formula).f98d93e8.svg";
},{}],"../img/dash-circle.svg":[function(require,module,exports) {
module.exports = "/dash-circle.950090ee.svg";
},{}],"../img/backwards.svg":[function(require,module,exports) {
module.exports = "/backwards.8ce7e849.svg";
},{}],"../img/gear.svg":[function(require,module,exports) {
module.exports = "/gear.c9d4064d.svg";
},{}],"../img/gluc-fruc-galac.svg":[function(require,module,exports) {
module.exports = "/gluc-fruc-galac.8cac750e.svg";
},{}],"../img/info-circle.svg":[function(require,module,exports) {
module.exports = "/info-circle.ec235f85.svg";
},{}],"../img/home.svg":[function(require,module,exports) {
module.exports = "/home.b3ca861b.svg";
},{}],"../img/lighting.svg":[function(require,module,exports) {
module.exports = "/lighting.59527f10.svg";
},{}],"../img/not-ready.svg":[function(require,module,exports) {
module.exports = "/not-ready.11e783ba.svg";
},{}],"../img/quiz-checks.svg":[function(require,module,exports) {
module.exports = "/quiz-checks.4cc838ec.svg";
},{}],"../img/remeber.svg":[function(require,module,exports) {
module.exports = "/remeber.4ea59e6b.svg";
},{}],"../img/table-icon.svg":[function(require,module,exports) {
module.exports = "/table-icon.f0edfff8.svg";
},{}],"../img/test-icon.svg":[function(require,module,exports) {
module.exports = "/test-icon.cf03bd00.svg";
},{}],"../img/youtube.svg":[function(require,module,exports) {
module.exports = "/youtube.5c108c95.svg";
},{}],"../img/anki.svg":[function(require,module,exports) {
module.exports = "/anki.cbead1c9.svg";
},{}],"../img/*.svg":[function(require,module,exports) {
module.exports = {
  "book": require("./book.svg"),
  "carbs(formula)": require("./carbs(formula).svg"),
  "dash-circle": require("./dash-circle.svg"),
  "backwards": require("./backwards.svg"),
  "gear": require("./gear.svg"),
  "gluc-fruc-galac": require("./gluc-fruc-galac.svg"),
  "info-circle": require("./info-circle.svg"),
  "home": require("./home.svg"),
  "lighting": require("./lighting.svg"),
  "not-ready": require("./not-ready.svg"),
  "quiz-checks": require("./quiz-checks.svg"),
  "remeber": require("./remeber.svg"),
  "table-icon": require("./table-icon.svg"),
  "test-icon": require("./test-icon.svg"),
  "youtube": require("./youtube.svg"),
  "anki": require("./anki.svg")
};
},{"./book.svg":"../img/book.svg","./carbs(formula).svg":"../img/carbs(formula).svg","./dash-circle.svg":"../img/dash-circle.svg","./backwards.svg":"../img/backwards.svg","./gear.svg":"../img/gear.svg","./gluc-fruc-galac.svg":"../img/gluc-fruc-galac.svg","./info-circle.svg":"../img/info-circle.svg","./home.svg":"../img/home.svg","./lighting.svg":"../img/lighting.svg","./not-ready.svg":"../img/not-ready.svg","./quiz-checks.svg":"../img/quiz-checks.svg","./remeber.svg":"../img/remeber.svg","./table-icon.svg":"../img/table-icon.svg","./test-icon.svg":"../img/test-icon.svg","./youtube.svg":"../img/youtube.svg","./anki.svg":"../img/anki.svg"}],"../js/webcomponents.js":[function(require,module,exports) {
"use strict";

var _ = _interopRequireDefault(require("../img/*.svg"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _wrapNativeSuper(Class) { var _cache = typeof Map === "function" ? new Map() : undefined; _wrapNativeSuper = function _wrapNativeSuper(Class) { if (Class === null || !_isNativeFunction(Class)) return Class; if (typeof Class !== "function") { throw new TypeError("Super expression must either be null or a function"); } if (typeof _cache !== "undefined") { if (_cache.has(Class)) return _cache.get(Class); _cache.set(Class, Wrapper); } function Wrapper() { return _construct(Class, arguments, _getPrototypeOf(this).constructor); } Wrapper.prototype = Object.create(Class.prototype, { constructor: { value: Wrapper, enumerable: false, writable: true, configurable: true } }); return _setPrototypeOf(Wrapper, Class); }; return _wrapNativeSuper(Class); }

function _construct(Parent, args, Class) { if (_isNativeReflectConstruct()) { _construct = Reflect.construct; } else { _construct = function _construct(Parent, args, Class) { var a = [null]; a.push.apply(a, args); var Constructor = Function.bind.apply(Parent, a); var instance = new Constructor(); if (Class) _setPrototypeOf(instance, Class.prototype); return instance; }; } return _construct.apply(null, arguments); }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _isNativeFunction(fn) { return Function.toString.call(fn).indexOf("[native code]") !== -1; }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

//REGULAR BUTTONS WITHOUT IMAGE
var template2 = document.createElement('template');
template2.innerHTML = "\n  <style>\n    a {\n        display: flex;\n        flex: row auto;\n        align-items: center;\n\n        height: auto;\n        padding: 6px;\n        margin-right: 6px;\n\n        border-radius: 5px;\n        text-decoration: none;\n        color: #020402;\n        font-weight: normal;\n        transition: background-color 0.3s;\n        background-color: #ededed;\n        line-height: 1em;\n      }\n\n    a.ready:hover {\n      background-color: #fcfcfc;\n      cursor: pointer;\n    }\n\n    a.not-ready:hover {\n      cursor: not-allowed;\n      background-color: #f3cfce;\n    }\n  \n  </style>\n\n\n  <a>\n  </a>\n";

var regularBtns = /*#__PURE__*/function (_HTMLElement) {
  _inherits(regularBtns, _HTMLElement);

  var _super = _createSuper(regularBtns);

  function regularBtns() {
    var _this;

    _classCallCheck(this, regularBtns);

    _this = _super.call(this);

    _this.attachShadow({
      mode: 'open'
    });

    _this.shadowRoot.appendChild(template2.content.cloneNode(true));

    if (_this.getAttribute('link')) {
      _this.shadowRoot.querySelector('a').setAttribute('href', _this.getAttribute('link'));
    } else {
      console.log('no attrb');
    }

    if (_this.getAttribute('target')) {
      _this.shadowRoot.querySelector('a').setAttribute('target', _this.getAttribute('target'));
    } else {
      console.log('no targer on regular button');
    }

    _this.shadowRoot.querySelector('a').innerText = _this.getAttribute('name'); // ATTACH READY/NOT-READY CLASS

    if (_this.getAttribute('link') === '#') {
      _this.shadowRoot.querySelector('a').setAttribute('class', 'not-ready');
    } else {
      _this.shadowRoot.querySelector('a').setAttribute('class', 'ready');
    }

    return _this;
  }

  return regularBtns;
}( /*#__PURE__*/_wrapNativeSuper(HTMLElement));

window.customElements.define('regular-btn', regularBtns); //LITTLE BUTTONS BUTTONS

var template1 = document.createElement('template');
template1.innerHTML = "\n  <style>\n    a {\n      display: flex;\n      flex: row auto;\n      align-items: center;\n\n      height: auto;\n      padding: 6px;\n\n      border-radius: 5px;\n      font-weight: normal;\n      text-decoration: none;\n      color: #020402;\n      transition: background-color 0.3s;\n      background-color: #ededed;\n      line-height: 1em;\n    }\n\n    img {\n      height: 1em;\n      width: 1em;\n    }\n\n    a.ready:hover {\n      background-color: #fcfcfc;\n      cursor: pointer;\n    }\n\n    a.not-ready:hover {\n      cursor: not-allowed;\n      background-color: #f3cfce;\n    }\n  \n  </style>\n\n\n  <a>\n    <img/>\n  </a>\n";

var littleBtns = /*#__PURE__*/function (_HTMLElement2) {
  _inherits(littleBtns, _HTMLElement2);

  var _super2 = _createSuper(littleBtns);

  function littleBtns() {
    var _this2;

    _classCallCheck(this, littleBtns);

    _this2 = _super2.call(this);

    _this2.attachShadow({
      mode: 'open'
    });

    _this2.shadowRoot.appendChild(template1.content.cloneNode(true));

    _this2.shadowRoot.querySelector('a').setAttribute('href', _this2.getAttribute('link'));

    var imageHTML = _this2.getAttribute('image');

    for (var propName in _.default) {
      if (propName === imageHTML) {
        _this2.shadowRoot.querySelector('img').setAttribute('src', "".concat(_.default[propName]));
      } else {
        console.log('failed');
      }
    } //ATTACH READY/NOT-READY CLASS


    if (_this2.getAttribute('link') === '#') {
      _this2.shadowRoot.querySelector('a').setAttribute('class', 'not-ready');
    } else {
      _this2.shadowRoot.querySelector('a').setAttribute('class', 'ready');
    }

    return _this2;
  }

  return littleBtns;
}( /*#__PURE__*/_wrapNativeSuper(HTMLElement));

window.customElements.define('little-btn', littleBtns); // FOOTER WEB COMPONENTS
// FOOTER-BTNS

var template = document.createElement('template');
template.innerHTML = "\n  <style>\n    a {\n        display: flex;\n        flex-flow: row nowrap;\n        align-items: center;\n\n        padding: 6px;\n        margin-right: 6px;\n\n        color: black;\n        font-weight: normal;\n        text-decoration: none;\n        background: #ededed;\n        border-radius: 5px;\n\n        transition: background 0.3s;\n    }\n\n    a:hover {\n        background: #fcfcfc;\n        cursor: pointer;\n    }\n\n    a p {\n        margin: 0;\n        text-indent: 0;\n    }\n\n    a img {\n        margin: 0 0 0 8px;\n        width: 1em;\n        height: 1em;\n    }\n  </style>\n  <a>\n    <p></p>\n    <img />\n\n  </a>\n";

var footerBtn = /*#__PURE__*/function (_HTMLElement3) {
  _inherits(footerBtn, _HTMLElement3);

  var _super3 = _createSuper(footerBtn);

  function footerBtn() {
    var _this3;

    _classCallCheck(this, footerBtn);

    _this3 = _super3.call(this);

    _this3.attachShadow({
      mode: 'open'
    });

    _this3.shadowRoot.appendChild(template.content.cloneNode(true));

    _this3.shadowRoot.querySelector('p').innerText = _this3.getAttribute('name');

    if (_this3.getAttribute('link')) {
      _this3.shadowRoot.querySelector('a').setAttribute('href', _this3.getAttribute('link'));
    } else {
      console.log('no attrb');
    }

    if (_this3.getAttribute('target')) {
      _this3.shadowRoot.querySelector('a').setAttribute('target', _this3.getAttribute('target'));
    } else {
      console.log('no_target');
    } //SETTING SRC ATTRIBUTE FOR IMAGE


    var imageHTML = _this3.getAttribute('image');

    for (var propName in _.default) {
      if (propName === imageHTML) {
        _this3.shadowRoot.querySelector('img').setAttribute('src', "".concat(_.default[propName]));
      } else {
        console.log('failed');
      }
    }

    return _this3;
  }

  return footerBtn;
}( /*#__PURE__*/_wrapNativeSuper(HTMLElement));

window.customElements.define('footer-btns', footerBtn);
},{"../img/*.svg":"../img/*.svg"}],"../node_modules/parcel-bundler/src/builtins/hmr-runtime.js":[function(require,module,exports) {
var global = arguments[3];
var OVERLAY_ID = '__parcel__error__overlay__';
var OldModule = module.bundle.Module;

function Module(moduleName) {
  OldModule.call(this, moduleName);
  this.hot = {
    data: module.bundle.hotData,
    _acceptCallbacks: [],
    _disposeCallbacks: [],
    accept: function (fn) {
      this._acceptCallbacks.push(fn || function () {});
    },
    dispose: function (fn) {
      this._disposeCallbacks.push(fn);
    }
  };
  module.bundle.hotData = null;
}

module.bundle.Module = Module;
var checkedAssets, assetsToAccept;
var parent = module.bundle.parent;

if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== 'undefined') {
  var hostname = "" || location.hostname;
  var protocol = location.protocol === 'https:' ? 'wss' : 'ws';
  var ws = new WebSocket(protocol + '://' + hostname + ':' + "56418" + '/');

  ws.onmessage = function (event) {
    checkedAssets = {};
    assetsToAccept = [];
    var data = JSON.parse(event.data);

    if (data.type === 'update') {
      var handled = false;
      data.assets.forEach(function (asset) {
        if (!asset.isNew) {
          var didAccept = hmrAcceptCheck(global.parcelRequire, asset.id);

          if (didAccept) {
            handled = true;
          }
        }
      }); // Enable HMR for CSS by default.

      handled = handled || data.assets.every(function (asset) {
        return asset.type === 'css' && asset.generated.js;
      });

      if (handled) {
        console.clear();
        data.assets.forEach(function (asset) {
          hmrApply(global.parcelRequire, asset);
        });
        assetsToAccept.forEach(function (v) {
          hmrAcceptRun(v[0], v[1]);
        });
      } else if (location.reload) {
        // `location` global exists in a web worker context but lacks `.reload()` function.
        location.reload();
      }
    }

    if (data.type === 'reload') {
      ws.close();

      ws.onclose = function () {
        location.reload();
      };
    }

    if (data.type === 'error-resolved') {
      console.log('[parcel] ✨ Error resolved');
      removeErrorOverlay();
    }

    if (data.type === 'error') {
      console.error('[parcel] 🚨  ' + data.error.message + '\n' + data.error.stack);
      removeErrorOverlay();
      var overlay = createErrorOverlay(data);
      document.body.appendChild(overlay);
    }
  };
}

function removeErrorOverlay() {
  var overlay = document.getElementById(OVERLAY_ID);

  if (overlay) {
    overlay.remove();
  }
}

function createErrorOverlay(data) {
  var overlay = document.createElement('div');
  overlay.id = OVERLAY_ID; // html encode message and stack trace

  var message = document.createElement('div');
  var stackTrace = document.createElement('pre');
  message.innerText = data.error.message;
  stackTrace.innerText = data.error.stack;
  overlay.innerHTML = '<div style="background: black; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; opacity: 0.85; font-family: Menlo, Consolas, monospace; z-index: 9999;">' + '<span style="background: red; padding: 2px 4px; border-radius: 2px;">ERROR</span>' + '<span style="top: 2px; margin-left: 5px; position: relative;">🚨</span>' + '<div style="font-size: 18px; font-weight: bold; margin-top: 20px;">' + message.innerHTML + '</div>' + '<pre>' + stackTrace.innerHTML + '</pre>' + '</div>';
  return overlay;
}

function getParents(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return [];
  }

  var parents = [];
  var k, d, dep;

  for (k in modules) {
    for (d in modules[k][1]) {
      dep = modules[k][1][d];

      if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) {
        parents.push(k);
      }
    }
  }

  if (bundle.parent) {
    parents = parents.concat(getParents(bundle.parent, id));
  }

  return parents;
}

function hmrApply(bundle, asset) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (modules[asset.id] || !bundle.parent) {
    var fn = new Function('require', 'module', 'exports', asset.generated.js);
    asset.isNew = !modules[asset.id];
    modules[asset.id] = [fn, asset.deps];
  } else if (bundle.parent) {
    hmrApply(bundle.parent, asset);
  }
}

function hmrAcceptCheck(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (!modules[id] && bundle.parent) {
    return hmrAcceptCheck(bundle.parent, id);
  }

  if (checkedAssets[id]) {
    return;
  }

  checkedAssets[id] = true;
  var cached = bundle.cache[id];
  assetsToAccept.push([bundle, id]);

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    return true;
  }

  return getParents(global.parcelRequire, id).some(function (id) {
    return hmrAcceptCheck(global.parcelRequire, id);
  });
}

function hmrAcceptRun(bundle, id) {
  var cached = bundle.cache[id];
  bundle.hotData = {};

  if (cached) {
    cached.hot.data = bundle.hotData;
  }

  if (cached && cached.hot && cached.hot._disposeCallbacks.length) {
    cached.hot._disposeCallbacks.forEach(function (cb) {
      cb(bundle.hotData);
    });
  }

  delete bundle.cache[id];
  bundle(id);
  cached = bundle.cache[id];

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    cached.hot._acceptCallbacks.forEach(function (cb) {
      cb();
    });

    return true;
  }
}
},{}]},{},["../node_modules/parcel-bundler/src/builtins/hmr-runtime.js","../js/webcomponents.js"], null)
//# sourceMappingURL=/webcomponents.69d8a342.js.map