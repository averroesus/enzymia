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
})({"../js/index/index.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.alertOnOff = alertOnOff;
exports.default = void 0;
var body = document.querySelector('body');

function alertOnOff(txt) {
  // ELEMENT CREATING
  var divHoverMain = document.createElement('div');
  divHoverMain.className = 'info-main';
  var divHover = document.createElement('div');
  divHover.className = 'hover';
  var infoBox = document.createElement('div');
  infoBox.className = 'info-box';
  infoBox.innerHTML = txt;
  var buttonInfoBox = document.createElement('button');
  buttonInfoBox.className = 'info-box-button';
  buttonInfoBox.textContent = 'OK!'; // CREATED ELEMENTS APPENDING

  body.appendChild(divHoverMain);
  divHoverMain.appendChild(divHover);
  divHoverMain.appendChild(infoBox);
  infoBox.appendChild(buttonInfoBox); //MAIN ACTIONS

  divHover.addEventListener('click', function () {
    body.removeChild(divHoverMain);
  });
  buttonInfoBox.addEventListener('click', function () {
    body.removeChild(divHoverMain);
  }); // SOME STYLING

  divHover.addEventListener('mouseover', function (e) {
    divHover.style.backgroundColor = 'rgba(237, 237, 237, 0.4)';
    divHover.style.cursor = 'pointer';
  });
  divHover.addEventListener('mouseout', function (e) {
    divHover.style.backgroundColor = 'rgba(237, 237, 237, 0.9)';
  });
  buttonInfoBox.addEventListener('mouseover', function (e) {
    divHover.style.backgroundColor = 'rgba(237, 237, 237, 0.4)';
  });
  buttonInfoBox.addEventListener('mouseout', function (e) {
    divHover.style.backgroundColor = 'rgba(237, 237, 237, 0.9)';
  });
}

var _default = alertOnOff;
exports.default = _default;
},{}],"../enzymes.json":[function(require,module,exports) {
module.exports = [{
  "enzyme": "Киназы",
  "function": "Катализируют перенос фосфатной группы от АТФ к субстрату."
}, {
  "enzyme": "Фософорилазы",
  "function": "Осуществляют прикрепление фосфатов к субстрату без использования АТФ."
}, {
  "enzyme": "Фосфатазы",
  "function": "Осуществляют отщепление фосфатной группы от субстрата."
}, {
  "enzyme": "Дегидрогеназы",
  "function": "Катализируют окислительно-восстановительные реакции (ОВР)."
}, {
  "enzyme": "Гидроксилазы",
  "function": "Прикрепляют гидроксильную группу к субстрату."
}, {
  "enzyme": "Карбоксилазы",
  "function": "Прикрепляю углеводную группу к субстрату."
}, {
  "enzyme": "Синтетазы",
  "function": "Соединяют две молекулы вместе с затратой энергии."
}];
},{}],"../js/index/table.js":[function(require,module,exports) {
"use strict";

var _index = require("./index.js");

var _enzymes = _interopRequireDefault(require("../../enzymes.json"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var enzymeBtn = document.querySelector('nav.notes > div.list-item > footer-btns[name]');
var table = " <table class='enz'> \n                <tr> \n                  <th> \u0424\u0435\u0440\u043C\u0435\u043D\u0442</th>  \n                  <th> \u0424\u0443\u043D\u043A\u0446\u0438\u044F</th>  \n                </tr>";

_enzymes.default.map(function (enzyme) {
  table += "<tr> \n              <td style='color: #a22c29; font-weight: bold;'> ".concat(enzyme.enzyme, " </td>\n              <td> ").concat(enzyme.function, " </td>\n            </tr>");
});

table += "</table>";

function functMy() {
  (0, _index.alertOnOff)(table);
}

enzymeBtn.addEventListener('click', functMy);
var deckAnkiBtn = document.getElementById('anki-deck');
var txtAnki = "\n          <p class='info-box-text'>\u041F\u0435\u0440\u0435\u0434 \u0443\u0441\u0442\u0430\u043D\u043E\u0432\u043A\u043E\u0439 \u043A\u043E\u043B\u043E\u0434\u044B ENZANKI, \u0440\u0435\u043A\u043E\u043C\u0435\u043D\u0434\u0443\u0435\u0442\u0441\u044F \u043E\u0437\u043D\u0430\u043A\u043E\u043C\u0438\u0442\u0441\u044F \u0441 <a href='https://alexeygorelov.github.io/anki-manual-ru/#/'>\u0438\u043D\u0441\u0442\u0440\u0443\u043A\u0446\u0438\u0435\u0439</a> \u043F\u043E \u043F\u043E\u043B\u044C\u0437\u043E\u0432\u0430\u043D\u0438\u044E \u043F\u0440\u043E\u0433\u0440\u0430\u043C\u043C\u043E\u0439 \u0410\u041D\u041A\u0418.</p>\n          <p class='info-box-text'>\n          <br>\n          <a href=\"__/enz.anki.apkg\" donwload>\u0421\u043A\u0430\u0447\u0430\u0442\u044C \u043A\u043E\u043B\u043E\u0434\u0443 ENZANKI</a> </p> <br>\n          ";

function ankiDeckDownload() {
  (0, _index.alertOnOff)(txtAnki);
}

deckAnkiBtn.addEventListener('click', ankiDeckDownload);
},{"./index.js":"../js/index/index.js","../../enzymes.json":"../enzymes.json"}],"../node_modules/parcel-bundler/src/builtins/hmr-runtime.js":[function(require,module,exports) {
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
},{}]},{},["../node_modules/parcel-bundler/src/builtins/hmr-runtime.js","../js/index/table.js"], null)
//# sourceMappingURL=/table.18121338.js.map