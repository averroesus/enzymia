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
})({"../quizes_json/carbs.json":[function(require,module,exports) {
module.exports = [{
  "questionName": "Углеводы характеризуются наличием какой-из функциональных групп?",
  "answers": {
    "a1": "карбоксильной",
    "b1": "карбоксильной и аминогруппы",
    "c1": "гидроксильной",
    "d1": "карбонильной и гидроксильной",
    "e1": "карбонильной"
  },
  "correct": "d1"
}, {
  "questionName": "Молекула сахарозы является ",
  "answers": {
    "a2": "полисахаридом",
    "b2": "дисахаридом",
    "c2": "олигосахаридом",
    "d2": "моносахаридом"
  },
  "correct": "b2"
}, {
  "questionName": "Резервным полисахридом у людей является",
  "answers": {
    "a3": "крахмал",
    "b3": "целлюлоза",
    "c3": "гликоген",
    "d3": "хитин"
  },
  "correct": "c3"
}, {
  "questionName": "Какой из нижеперечисленных углеводов метаболизируется внутриклеточно?",
  "answers": {
    "a4": "галактоза",
    "b4": "сахароза",
    "c4": "хитин",
    "d4": "лактоза"
  },
  "correct": "a4"
}, {
  "questionName": "Трансмембранный транспорт фруктозы осуществляется через?",
  "answers": {
    "a5": "ГЛЮТ-1",
    "b5": "ГЛЮТ-2",
    "c5": "ГЛЮТ-4",
    "d5": "ГЛЮТ-5"
  },
  "correct": "d5"
}, {
  "questionName": "При участии какого из ионов осуществляется градиент-зависимый траснпорт глюкозы в клетку?",
  "answers": {
    "a5": "Na",
    "b5": "Mg",
    "c5": "K",
    "d5": "Cl"
  },
  "correct": "a1"
}, {
  "questionName": "Что характерно для ГЛЮТ-4 (глюкозного траснпортера)?",
  "answers": {
    "a5": "инсулинозависимость",
    "b5": "встерчается в толстом кишечнике",
    "c5": "встречается в тонком кишечнике",
    "d5": "обеспечивает непрерывный поток глюкозы к тканям"
  },
  "correct": "d5"
}, {
  "questionName": "Трансмембранный транспорт фруктозы осуществляется через?",
  "answers": {
    "a5": "ГЛЮТ-1",
    "b5": "ГЛЮТ-2",
    "c5": "ГЛЮТ-4",
    "d5": "ГЛЮТ-5"
  },
  "correct": "d5"
}];
},{}],"../js/main0.js":[function(require,module,exports) {
"use strict";

var _carbs = _interopRequireDefault(require("../quizes_json/carbs.json"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// LOAD QUIZ FROM .JSON FILE USING PARCEL
//  GET HTML ELEMENTS
var main = document.querySelector("main");
var form = document.querySelector("form");
var checkBtn = document.querySelector("button[type=submit]");
var restartBtn = document.querySelector("button.restart-quiz"); //DISABLE QUIZ RESTARTING BUTTON

restartBtn.disabled = true;
var outputQ = ""; //CREATE QUIZBOX WITH ANSWERS INSIDE IT

_carbs.default.forEach(function (questions, qNumber) {
  outputQ += "<div class=\"question-box\">\n  <h6> ".concat(questions.questionName, " </h6>\n  "); //GET ANSWERS IDs

  var outputA = "";

  for (var letter in questions.answers) {
    outputA += "<label>\n                  <div class='single-choice-box'>\n                    <input type='radio' name='".concat(qNumber + 1, "' value='").concat(letter, "' id='").concat(letter, "'>\n                      <p> ").concat(questions.answers[letter], " </p>\n                    <span class=\"input-box\"> </span>\n                  </div>\n                </label>\n                ");
  }

  outputQ += "<div class='choices-box'> ".concat(outputA, " </div>");
  outputQ += "</div>";
  form.innerHTML = outputQ;
}); //COUNT THE AMOUNT OF CORRECT ANSWERS


checkBtn.addEventListener("click", function (e) {
  e.preventDefault();
  var countTrue = 0;
  var countFalse = 0;
  var availableAnswers = document.querySelectorAll("div.question-box");
  var selectedAnswers = document.querySelectorAll("input[type=radio]:checked"); //CHECK IF ALL QUESTIONS ARE ANSWERED

  if (availableAnswers.length !== selectedAnswers.length) {
    window.alert("Пожалуйста, ответьте на все вопросы");
  } else {
    //CREATE RESULTBOX CONTAINER
    var resultBox = document.createElement("div");
    resultBox.className = "result";
    main.appendChild(resultBox); //LOOP THROUGH THIS CHOICES

    for (var i = 0; i < selectedAnswers.length; i++) {
      if (selectedAnswers[i].value === _carbs.default[i].correct) {
        countTrue += 1;
        availableAnswers[i].style.borderLeft = "3px solid #136F63";
      } else {
        countFalse += 1;
        availableAnswers[i].style.borderLeft = "3px solid #A22C29";
      } //SHOW FINAL RESULT --- CORRECT AND INCORRECT ANSWERS INCLUDED


      var output = "\u0412\u0430\u0448 \u0440\u0435\u0437\u0443\u043B\u044C\u0442\u0430\u0442 ".concat(countTrue, " \u0438\u0437 ").concat(availableAnswers.length, ".");
      resultBox.innerHTML = output;
      restartBtn.disabled = false;
      checkBtn.disabled = true;
    }
  }
}); // RESTARTING THE QUIZ

restartBtn.addEventListener("click", function (e) {
  //REMOVE RESULT CONTAINER
  var resultBox = document.querySelector(".result");
  resultBox.remove(); // MAKING CHECK BUTTON AVAILABLE

  checkBtn.disabled = false; // RESESTING RESULTING

  var choicesRadio = document.querySelectorAll("input[type=radio]");
  choicesRadio.forEach(function (input, index) {
    input.checked = false;
  }); //DISABLE RESULT BUTTON

  restartBtn.disabled = true; //REMOVING WRONG/CORRECT LEFT BORDER OF QUESTION-BOXES

  var availableAnswers = document.querySelectorAll("div.question-box");
  availableAnswers.forEach(function (question, index) {
    question.style.borderLeft = "0px ";
  });
});
},{"../quizes_json/carbs.json":"../quizes_json/carbs.json"}],"../node_modules/parcel-bundler/src/builtins/hmr-runtime.js":[function(require,module,exports) {
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
  var ws = new WebSocket(protocol + '://' + hostname + ':' + "59082" + '/');

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
},{}]},{},["../node_modules/parcel-bundler/src/builtins/hmr-runtime.js","../js/main0.js"], null)
//# sourceMappingURL=/main0.6035966e.js.map