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
    "a1": "карбоксильной и аминогруппы",
    "b1": "аминогруппы",
    "c1": "гидроксильной",
    "d1": "карбонильной и гидроксильной",
    "e1": "карбонильной"
  },
  "correct": "d1",
  "explanation": "Карбоксильная группа (-COOH) характерна для карбоновых кислот. В состав аминокислот входят карбоксильная(-COOH) группа и аминогруппа(-NH2). Карбонильная(-CO-) группа, в отдельности от гидроксильной(-OH), встречается в кетонах. Аминогруппа(-NH2) встречается в аминах. В состав углеводов входят карбонильная(-CO-) и гидроксильная(-OH) группы."
}, {
  "questionName": "Молекула сахарозы является ",
  "answers": {
    "a2": "полисахаридом",
    "b2": "дисахаридом",
    "c2": "олигосахаридом",
    "d2": "моносахаридом"
  },
  "correct": "b2",
  "explanation": "Молекула сахарозы, состоящая из двух моносахаридов (глюкоза + фруктоза), является дисахаридом. Для этого курса достаточно запомнить, что к моносахаридам относятся(3): глюкоза, фруктоза и галактоза. К дисахаридам относятся(2): фруктоза и лактоза (глюкоза + галактоза)."
}, {
  "questionName": "Резервным полисахаридом у людей является",
  "answers": {
    "a3": "крахмал",
    "b3": "целлюлоза",
    "c3": "гликоген",
    "d3": "хитин"
  },
  "correct": "c3",
  "explanation": "Крахмал является формой хранения углеводов у растений. У людей гликоген синтезируется в печени и хранится в ней же. Целлюлоза является полисахаридом, входящая в состав клеточной стенки живых организмов. Хитин (также полисахарид) входит в состав клеточной стенки грибов."
}, {
  "questionName": "Какой из нижеперечисленных углеводов метаболизируется внутриклеточно?",
  "answers": {
    "a4": "галактоза",
    "b4": "сахароза",
    "c4": "хитин",
    "d4": "лактоза"
  },
  "correct": "a4",
  "explanation": "Запомните, что внутриклеточно метаболизируются только самые простые из углеводов (моносахариды). Поэтому, сахароза и лактоза, являющиеся дисахаридами, будут проходит катаболизм в кишечнике. Метаболизм хитина начнется намного раньше в пищеварительном тракте, так как он - полисахарид. Правильный ответ: галактоза."
}, {
  "questionName": "При участии какого из ионов осуществляется градиент-зависимый траснпорт глюкозы в клетку?",
  "answers": {
    "a5": "Na",
    "b5": "Mg",
    "c5": "K",
    "d5": "Cl"
  },
  "correct": "a5",
  "explanation": "Это не разбиралось на уроке, но запомните, что градиент-зависимый перенос осуществляется посредством Na."
}, {
  "questionName": "Что характерно для ГЛЮТ-4 (глюкозного траснпортера)?",
  "answers": {
    "a6": "инсулинозависимость",
    "b6": "встречается в толстом кишечнике",
    "c6": "встречается в тонком кишечнике",
    "d6": "транспорт глюкозы во время голодания"
  },
  "correct": "a6",
  "explanation": "В кишечнике в основном встречается ГЛЮТ-2. Транспорт глюкозы во время голодания подразумевает низкую концетрация глюкозы в крови. Зная то, что инсулин вырабатывается во время сытости (т.е. концетрация глюкозы крови высокая), можно сделать вывод, что данный тип транспортера является также инсулиннезависимым. Но заметьте, это характерно для ГЛЮТ-3. Инсулинозависимость характерна ГЛЮТ-4. "
}, {
  "questionName": "Трансмембранный транспорт фруктозы осуществляется через?",
  "answers": {
    "a7": "ГЛЮТ-1",
    "b7": "ГЛЮТ-2",
    "c7": "ГЛЮТ-4",
    "d7": "ГЛЮТ-5"
  },
  "correct": "d7",
  "explanation": "Единственным траспортером, который осуществляет транспорт глюкозы является ГЛЮТ-5 в кишечнике."
}];
},{}],"../js/index/index.js":[function(require,module,exports) {
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
},{}],"../img/anki.svg":[function(require,module,exports) {
module.exports = "/anki.cbead1c9.svg";
},{}],"../img/backwards.svg":[function(require,module,exports) {
module.exports = "/backwards.8ce7e849.svg";
},{}],"../img/book.svg":[function(require,module,exports) {
module.exports = "/book.5003d21a.svg";
},{}],"../img/carbs(formula).svg":[function(require,module,exports) {
module.exports = "/carbs(formula).f98d93e8.svg";
},{}],"../img/dash-circle.svg":[function(require,module,exports) {
module.exports = "/dash-circle.950090ee.svg";
},{}],"../img/gear.svg":[function(require,module,exports) {
module.exports = "/gear.c9d4064d.svg";
},{}],"../img/gluc-fruc-galac.svg":[function(require,module,exports) {
module.exports = "/gluc-fruc-galac.8cac750e.svg";
},{}],"../img/home.svg":[function(require,module,exports) {
module.exports = "/home.b3ca861b.svg";
},{}],"../img/info-circle.svg":[function(require,module,exports) {
module.exports = "/info-circle.ec235f85.svg";
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
},{}],"../img/*.svg":[function(require,module,exports) {
module.exports = {
  "anki": require("./anki.svg"),
  "backwards": require("./backwards.svg"),
  "book": require("./book.svg"),
  "carbs(formula)": require("./carbs(formula).svg"),
  "dash-circle": require("./dash-circle.svg"),
  "gear": require("./gear.svg"),
  "gluc-fruc-galac": require("./gluc-fruc-galac.svg"),
  "home": require("./home.svg"),
  "info-circle": require("./info-circle.svg"),
  "lighting": require("./lighting.svg"),
  "not-ready": require("./not-ready.svg"),
  "quiz-checks": require("./quiz-checks.svg"),
  "remeber": require("./remeber.svg"),
  "table-icon": require("./table-icon.svg"),
  "test-icon": require("./test-icon.svg"),
  "youtube": require("./youtube.svg")
};
},{"./anki.svg":"../img/anki.svg","./backwards.svg":"../img/backwards.svg","./book.svg":"../img/book.svg","./carbs(formula).svg":"../img/carbs(formula).svg","./dash-circle.svg":"../img/dash-circle.svg","./gear.svg":"../img/gear.svg","./gluc-fruc-galac.svg":"../img/gluc-fruc-galac.svg","./home.svg":"../img/home.svg","./info-circle.svg":"../img/info-circle.svg","./lighting.svg":"../img/lighting.svg","./not-ready.svg":"../img/not-ready.svg","./quiz-checks.svg":"../img/quiz-checks.svg","./remeber.svg":"../img/remeber.svg","./table-icon.svg":"../img/table-icon.svg","./test-icon.svg":"../img/test-icon.svg","./youtube.svg":"../img/youtube.svg"}],"../js/quizzes/carbs_qz.js":[function(require,module,exports) {
"use strict";

var _carbs = _interopRequireDefault(require("../../quizes_json/carbs.json"));

var _index = require("../index/index.js");

var _ = _interopRequireDefault(require("../../img/*.svg"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// LOAD QUIZ FROM .JSON FILE USING PARCEL
//  GET HTML ELEMENTS
var main = document.querySelector('main');
var form = document.querySelector('form');
var checkBtn = document.querySelector('button[type=submit]');
var restartBtn = document.querySelector('button.restart-quiz');
var body = document.querySelector('body'); //DISABLE QUIZ RESTARTING BUTTON

restartBtn.disabled = true;
var outputQ = ''; //CREATE QUIZBOX WITH ANSWERS INSIDE IT

_carbs.default.forEach(function (questions, qNumber) {
  outputQ += "<div class=\"question-box\">\n      <div class='question-name-box'> \n        <h6> ".concat(questions.questionName, " </h6>\n      </div>\n  "); //GET ANSWERS IDs

  var outputA = '';

  for (var letter in questions.answers) {
    outputA += "<label>\n                  <div class='single-choice-box'>\n                    <input type='radio' name='".concat(qNumber + 1, "' value='").concat(letter, "' id='").concat(letter, "'>\n                      <p> ").concat(questions.answers[letter], " </p>\n                    <span class=\"input-box\"> </span>\n                  </div>\n                </label>\n                ");
  }

  outputQ += "<div class='choices-box'> ".concat(outputA, " </div>");
  outputQ += "</div>";
  form.innerHTML = outputQ;
}); //COUNT THE AMOUNT OF CORRECT ANSWERS


checkBtn.addEventListener('click', function (e) {
  e.preventDefault();
  var countTrue = 0;
  var countFalse = 0;
  var availableAnswers = document.querySelectorAll('div.question-box');
  var selectedAnswers = document.querySelectorAll('input[type=radio]:checked'); //CHECK IF ALL QUESTIONS ARE ANSWERED

  if (availableAnswers.length !== selectedAnswers.length) {
    (0, _index.alertOnOff)('<p class="info-box-text"> Пожалуйста, ответьте на все вопросы. </p>');
  } else {
    (function () {
      //RESTRICT CHANGES ON INPUTRADIO ELEMENT
      //CREATE RESULTBOX CONTAINER
      var resultBox = document.createElement('div');
      resultBox.className = 'result';
      main.appendChild(resultBox); // LOOP THROUGH ALL OF THE QUESTION NAMES TO APPEND EXPLAIN BTN

      var allQuestions = document.querySelectorAll('.question-name-box');
      allQuestions.forEach(function (exactQuestion, index) {
        //CREATE EXPALAIN CONTAINTER AND BUTTON FOR CHECKING THE EXPALNATION
        var explainBtn = document.createElement('button');
        explainBtn.type = 'button';
        explainBtn.className = "button-explain";
        explainBtn.id = "".concat(index);
        var infoImg = document.createElement('img');
        infoImg.src = _.default['info-circle']; //CHILDREN NESTING CREATED ELEMENTS

        explainBtn.appendChild(infoImg); //APPENDING CREATED EXPLANATION BTN INTO DOM

        exactQuestion.appendChild(explainBtn);
      }); // SELECTING CREATED BUTTONS AND QUESTION BOXES

      var allExplainBtns = document.querySelectorAll('.button-explain');
      var allExplainBtnsArray = Array.from(allExplainBtns);
      var allQuestionBoxes = document.querySelectorAll('.question-box');
      var allQuestionBoxesArray = Array.from(allQuestionBoxes); // LOOPING THROUGH ALL OF THE QUESTIONS

      var _loop = function _loop(i) {
        var clickCount = true;

        function appendExplanation() {
          if (clickCount) {
            //SET CLICKCOUNT TO CONTROL ON/OFF DISPLAYING
            clickCount = false; // explainCont.style.display === 'block';

            var explainCont = document.createElement('div');
            explainCont.className = 'explain-cont';
            var explainP = document.createElement('p');
            explainP.innerText = _carbs.default[i].explanation;
            explainCont.appendChild(explainP);
            allQuestionBoxesArray[i].appendChild(explainCont);
            console.log(clickCount);
          } else {
            clickCount = true; //THE FOLLOWING ONE DOESN'T WORK CAUSE NO ELEMENT DELETING INSIDE DOM
            // document.querySelector('.explain-cont').style.display = 'none';
            //THIS DOES WORK CAUSE HERE WE DELETE ELEMENT IN THE DOM

            allQuestionBoxes[i].removeChild(document.querySelector('.explain-cont'));
            console.log(clickCount);
          } // console.log(clickCount);

        }

        allExplainBtns[i].addEventListener('click', appendExplanation);
      };

      for (var i = 0; i < allExplainBtns.length; i++) {
        _loop(i);
      }

      selectedAnswers.forEach(function (answer) {
        var someSpan = document.createElement('span');
        someSpan.className = 'your-choice';
        someSpan.textContent = '(ваш ответ)';
        answer.parentNode.appendChild(someSpan);
      });
      selectedAnswers.forEach(function (answer, index) {
        availableAnswers[index].style.borderRadius = '8px';

        if (answer.value === _carbs.default[index].correct) {
          countTrue += 1;
          availableAnswers[index].style.border = '4px solid rgba(19, 111, 99, 0.3)';
          answer.parentNode.style.backgroundColor = 'rgba(19, 111, 99, 0.3)';
        } else if (answer.value !== _carbs.default[index].correct) {
          countFalse += 1;
          availableAnswers[index].style.border = '4px solid rgba(162, 44, 41, 0.3)';
          answer.parentNode.style.backgroundColor = 'rgba(162, 44, 41, 0.3)';
        }
      }); //SHOW FINAL RESULT --- CORRECT AND INCORRECT ANSWERS INCLUDED

      var output = "\u0412\u0430\u0448 \u0440\u0435\u0437\u0443\u043B\u044C\u0442\u0430\u0442 ".concat(countTrue, " \u0438\u0437 ").concat(availableAnswers.length, ".");
      resultBox.innerHTML = output;
      restartBtn.disabled = false;
      checkBtn.disabled = true;
    })();
  }
}); // RESTARTING THE QUIZ

restartBtn.addEventListener('click', function (e) {
  location.reload();
});
},{"../../quizes_json/carbs.json":"../quizes_json/carbs.json","../index/index.js":"../js/index/index.js","../../img/*.svg":"../img/*.svg"}],"../node_modules/parcel-bundler/src/builtins/hmr-runtime.js":[function(require,module,exports) {
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
  var ws = new WebSocket(protocol + '://' + hostname + ':' + "59209" + '/');

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
},{}]},{},["../node_modules/parcel-bundler/src/builtins/hmr-runtime.js","../js/quizzes/carbs_qz.js"], null)
//# sourceMappingURL=/carbs_qz.2c4c811a.js.map