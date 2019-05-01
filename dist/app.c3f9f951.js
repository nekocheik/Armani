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
})({"js/template.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.produits = exports.articles = void 0;
var produits = [{
  titel: 'Montre connectée tactile 5000',
  text: "combine le style dynamique d’Emporio Armani à l’innovation technologique.",
  image: "assets/image/connected-front.png"
}, {
  titel: 'Montre inox avec bracelet à <br>mailles tressées',
  text: "L’expression d’une envie d’élégance sophistiquée.",
  image: "assets/image/Montre connecter/Montre-connecter.png"
}, {
  titel: 'Montre connectée Hybrid 3017',
  text: "combine le style dynamique d’Emporio Armani à l’innovation technologique.",
  image: "assets/image/Montre inox/Montre-inox.png"
}];
exports.produits = produits;
var articles = [{
  titel: 'Emporio Armani Connected :',
  subtitel: 'de nouvelles montres intelligentes',
  texte: "La maison italienne enrichit sa gamme de dispositifs \xE9lectroniques Emporio Armani Connected d\u2019une s\xE9lection de nouvelles montres intelligentes \xE0 \xE9cran tactile. D\u2019ores et d\xE9j\xE0 disponibles en pr\xE9vente (www.armani.com), ces mod\xE8les \u2013 qui int\xE8grent de nouvelles fonctionnalit\xE9s \u2013 seront mis en vente \xE0 travers le monde d\xE8s septembre prochain.\n  Les marques de pr\xEAt-\xE0-porter ne sont pas les seules \xE0 d\xE9voiler leurs nouvelles collections d\xE9di\xE9es \xE0 la saison automne-hiver 2018. Maisons d\u2019horlogerie et de joaillerie \xE9gr\xE8nent elles aussi leurs nouvelles cr\xE9ations, proposant des mod\xE8les toujours plus performants pour s\u2019adapter au quotidien des hommes et femmes modernes.\n  C\u2019est le cas de la maison Emporio Armani, qui l\xE8ve le voile sur de nouvelles montres connect\xE9es, dot\xE9es d\u2019un \xE9cran tactile AMOLED de 1,19 pouce, et aliment\xE9es par Wear OS de Google avec une puce Qualcomm Snapdragon Wear 2100 SoC. Le tout \xE9tant compatible avec les t\xE9l\xE9phones iPhone et Android.\n  Outre les particularit\xE9s d\u2019origine des montres connect\xE9es Emporio Armani et les nouvelles sp\xE9cificit\xE9s de Wear OS, ces nouveaux mod\xE8les mettent en lumi\xE8re de nouvelles fonctionnalit\xE9s pour les futurs utilisateurs. Ceux-ci pourront notamment assurer le suivi de leur rythme cardiaque pendant l\u2019effort, r\xE9aliser des achats gr\xE2ce \xE0 la technologie NFC et profiter des atouts de Google Assistant.\n  Ces nouveaux garde-temps intelligents offrent \xE9galement une \xE9tanch\xE9it\xE9 jusqu\u2019\xE0 30 m\xE8tres, permettant de prendre des douches et de nager avec sa montre, et int\xE8grent un GPS pour calculer une distance sans avoir \xE0 prendre son t\xE9l\xE9phone.\n  A l\u2019occasion du lancement de ces nouvelles cr\xE9ations, la maison italienne d\xE9voile sa nouvelle campagne automne-hiver 2018-2019, mettant notamment en sc\xE8ne l\u2019ambassadeur mondial de ses collections horlog\xE8res, Shawn Mendes.",
  image: "../assets/image/armani-montres-shawn-850x1024/armani-montres-shawn-850x1024.png"
}, {
  titel: 'Emporio Armani Connected :',
  subtitel: 'de nouvelles montres intelligentes',
  texte: "C\u2019est en 1975 \xE0 Milan que la marque Armani voit le jour.N\xE9e d\u2019une alliance entre Giorgio Armani et son partenaire et compagnon Sergio Galeotti, la marque produit au d\xE9part du pr\xEAt-\xE0-porter masculin.\n  Leur Premi\xE8re collection masculine fait beaucoup parler d\u2019elle avec notamment une veste r\xE9volutionnaire, d\xE9structur\xE9e et sans doublure, qui d\xE9cha\xEEne les passions et sera adapt\xE9e quelques mois plus tard \xE0 la femme.\n  Fort de ce succ\xE8s, Armani cr\xE9e une deuxi\xE8me ligne en 1981, plus jeune et plus accessible : la ligne Emporio Armani.\n  S\u2019en suivent alors une s\xE9rie de lignes de v\xEAtements toutes plus luxueuses et \xE9l\xE9gantes les unes que les autres, mais visant \xE0 une client\xE8le cible. Armani se fait remarquer en habillant des vedettes de cin\xE9ma, dont Gwyneth Paltrow, Jodie Foster ou encore Richard Gere.\n  C\u2019est aussi dans le d\xE9but des ann\xE9es 80 qu\u2019il signe ses premiers parfums, en collaboration avec L\u2019Or\xE9al.\n  De cette alliance na\xEEtront Armani pour femme et Armani pour homme, les deux premi\xE8res fragrances d\u2019une longue s\xE9rie.\n  Le cr\xE9ateur lancera plusieurs autres cr\xE9ations, comme Acqua Di Gio par exemple\n  \u2014 sa version pour homme est aujourd\u2019hui un des parfums les plus vendus au monde.\n  Outre ses collections de v\xEAtements et de parfums, la marque Armani opte pour la diversification de ses activit\xE9s et se lance dans le domaine des cosm\xE9tiques, des accessoires et des bijoux, sans oublier une ligne d\u2019ameublement d\u2019int\xE9rieur et un premier restaurant en 1989. L\u2019ascension et la diversification sont fulgurantes pour la maison Armani. Cet empire du style construit par un seul homme est \xE0 pr\xE9sent de taille colossale.",
  image: "../assets/image/armani-montres-shawn-850x1024/armani-montres-shawn-850x1024.png"
}];
exports.articles = articles;
},{}],"js/app.js":[function(require,module,exports) {
"use strict";

var _template = require("./template");

var buttonNav = document.querySelector('.nav__barre nav ul');
buttonNav.addEventListener('click', function () {
  document.querySelector('.nav_hidden').classList.toggle('active');
  document.querySelector('.nav__barre img').classList.toggle('active');
});
},{"./template":"js/template.js"}],"../node_modules/parcel-bundler/src/builtins/hmr-runtime.js":[function(require,module,exports) {
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
  var ws = new WebSocket(protocol + '://' + hostname + ':' + "54615" + '/');

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
      } else {
        window.location.reload();
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
},{}]},{},["../node_modules/parcel-bundler/src/builtins/hmr-runtime.js","js/app.js"], null)
//# sourceMappingURL=/app.c3f9f951.js.map