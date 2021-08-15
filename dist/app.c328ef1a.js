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
})({"app.js":[function(require,module,exports) {
var SKIN_COLOUR = "#f7ebd5";
var DRESS_COLOUR = "pink";
var CUFF_COLOUR = "white";
var BOW_COLOUR = "red";
var isSpinning = true;
var illo = new Zdog.Illustration({
  element: ".zdog-canvas",
  dragRotate: true,
  onDragStart: function onDragStart() {
    isSpinning = false;
  },
  rotate: {
    z: Zdog.TAU / -1.1
  } // y is just which frame of the animation it starts at

});
var top = new Zdog.Cone({
  addTo: illo,
  diameter: 40,
  length: 70,
  stroke: 20,
  color: DRESS_COLOUR,
  translate: {
    x: 0,
    y: -80,
    z: -50
  },
  rotate: {
    x: Zdog.TAU / -4
  }
});
var skirt = new Zdog.Cone({
  addTo: top,
  diameter: 60,
  length: 50,
  stroke: 20,
  color: DRESS_COLOUR,
  translate: {
    x: 0,
    y: 0,
    z: 90
  },
  rotate: {
    x: Zdog.TAU / 2
  }
});
var bowHalf = new Zdog.Polygon({
  addTo: skirt,
  radius: 12,
  sides: 3,
  stroke: 10,
  fill: true,
  color: BOW_COLOUR,
  translate: {
    x: -20,
    y: -15,
    z: 45
  },
  rotate: {
    x: Zdog.TAU / 6,
    y: Zdog.TAU / 4
  }
});
var bowSecondHalf = bowHalf.copyGraph({
  translate: {
    x: -20,
    y: 15,
    z: 45
  },
  rotate: {
    x: Zdog.TAU / 6,
    y: Zdog.TAU / 4,
    z: Zdog.TAU / 6
  }
});
var head = new Zdog.Shape({
  addTo: top,
  stroke: 50,
  color: SKIN_COLOUR,
  translate: {
    x: 0,
    y: 0,
    z: -40
  }
});
var glassesRim = new Zdog.Ellipse({
  addTo: head,
  diameter: 25,
  stroke: 3,
  color: "gold",
  translate: {
    x: 25,
    y: -20,
    z: -5
  },
  rotate: {
    y: Zdog.TAU / 5
  }
});
glassesRim.copyGraph({
  translate: {
    x: 25,
    y: 20,
    z: -5
  }
});
var glassesBridge = new Zdog.Shape({
  addTo: glassesRim,
  path: [{
    x: 10
  }, {
    y: 0
  }],
  translate: {
    x: 0,
    y: 15,
    z: 0
  },
  color: "gold",
  stroke: 3,
  rotate: {
    z: Zdog.TAU / 4
  }
});
var hair = new Zdog.Shape({
  addTo: head,
  stroke: 65,
  color: "transparent",
  translate: {
    x: -5,
    y: 0,
    z: -10
  }
});
var hairTop = new Zdog.Hemisphere({
  addTo: head,
  diameter: 65,
  stroke: 5,
  color: "black",
  backface: "black",
  translate: {
    x: -5,
    y: 0,
    z: -10
  },
  rotate: {
    y: Zdog.TAU / 2.4
  }
});
var hairSide = new Zdog.Hemisphere({
  addTo: head,
  diameter: 65,
  stroke: 5,
  color: "black",
  backface: "black",
  translate: {
    x: -5,
    y: 0,
    z: -10
  },
  rotate: {
    x: Zdog.TAU / 7,
    y: Zdog.TAU / 3.3
  }
});
hairSide.copyGraph({
  color: "black",
  backface: "black",
  rotate: {
    x: Zdog.TAU / 4,
    y: Zdog.TAU / 6.6,
    z: Zdog.TAU / 1
  }
}); // let hairTop = hair.copyGraph({
//   rotate: { y: Zdog.TAU / -2 },
// });

var bun = new Zdog.Shape({
  addTo: hair,
  stroke: 35,
  color: "black",
  translate: {
    x: -20,
    y: 0,
    z: -30
  }
});
var sleevePuff = new Zdog.Shape({
  addTo: top,
  stroke: 40,
  color: DRESS_COLOUR,
  translate: {
    x: 0,
    y: 30,
    z: 0
  }
});
var sleeveCuff = new Zdog.Ellipse({
  addTo: sleevePuff,
  diameter: 15,
  stroke: 20,
  color: CUFF_COLOUR,
  translate: {
    x: 0,
    y: 0,
    z: 15
  }
});
sleevePuff.copyGraph({
  translate: {
    x: 0,
    y: -30,
    z: 0
  }
});
var arm = new Zdog.Shape({
  addTo: top,
  path: [{
    x: 10
  }, {
    y: 0
  }],
  translate: {
    x: 0,
    y: 30,
    z: 35
  },
  color: SKIN_COLOUR,
  stroke: 20,
  rotate: {
    y: Zdog.TAU / -4
  }
});
var forearm = new Zdog.Shape({
  addTo: arm,
  path: [{
    x: 30
  }, {
    y: 0
  }],
  translate: {
    x: 0,
    y: 0,
    z: 0
  },
  color: SKIN_COLOUR,
  stroke: 20,
  rotate: {
    y: Zdog.TAU / 4
  }
});
arm.copyGraph({
  translate: {
    x: 0,
    y: -30,
    z: 35
  }
});
var leg = new Zdog.Shape({
  addTo: skirt,
  path: [{
    x: 20
  }, {
    y: 0
  }],
  translate: {
    x: 10,
    y: 10,
    z: -15
  },
  color: SKIN_COLOUR,
  stroke: 20,
  rotate: {
    y: Zdog.TAU / -4
  }
});
var calf = new Zdog.Shape({
  addTo: leg,
  path: [{
    x: 25
  }, {
    y: 0
  }],
  translate: {
    x: 25,
    y: 0,
    z: 0
  },
  color: SKIN_COLOUR,
  stroke: 20,
  rotate: {
    y: Zdog.TAU / -8
  }
});
leg.copyGraph({
  translate: {
    x: -15,
    y: -15,
    z: -10
  },
  rotate: {
    y: Zdog.TAU / -3
  }
});
illo.updateRenderGraph();

function animate() {
  if (isSpinning) {
    illo.rotate.y += 0.03;
  }

  illo.updateRenderGraph();
  requestAnimationFrame(animate);
}

animate();
},{}],"../../../../../../../usr/local/lib/node_modules/parcel-bundler/src/builtins/hmr-runtime.js":[function(require,module,exports) {
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
  var ws = new WebSocket(protocol + '://' + hostname + ':' + "52639" + '/');

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
},{}]},{},["../../../../../../../usr/local/lib/node_modules/parcel-bundler/src/builtins/hmr-runtime.js","app.js"], null)
//# sourceMappingURL=/app.c328ef1a.js.map