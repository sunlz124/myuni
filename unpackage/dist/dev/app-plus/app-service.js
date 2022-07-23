if (typeof Promise !== "undefined" && !Promise.prototype.finally) {
  Promise.prototype.finally = function(callback) {
    const promise = this.constructor;
    return this.then((value) => promise.resolve(callback()).then(() => value), (reason) => promise.resolve(callback()).then(() => {
      throw reason;
    }));
  };
}
;
if (typeof uni !== "undefined" && uni && uni.requireGlobal) {
  const global = uni.requireGlobal();
  ArrayBuffer = global.ArrayBuffer;
  Int8Array = global.Int8Array;
  Uint8Array = global.Uint8Array;
  Uint8ClampedArray = global.Uint8ClampedArray;
  Int16Array = global.Int16Array;
  Uint16Array = global.Uint16Array;
  Int32Array = global.Int32Array;
  Uint32Array = global.Uint32Array;
  Float32Array = global.Float32Array;
  Float64Array = global.Float64Array;
  BigInt64Array = global.BigInt64Array;
  BigUint64Array = global.BigUint64Array;
}
;
if (uni.restoreGlobal) {
  uni.restoreGlobal(Vue, weex, plus, setTimeout, clearTimeout, setInterval, clearInterval);
}
(function(vue, shared) {
  "use strict";
  var _export_sfc = (sfc, props) => {
    const target = sfc.__vccOpts || sfc;
    for (const [key, val] of props) {
      target[key] = val;
    }
    return target;
  };
  const _sfc_main$7 = {};
  function _sfc_render$4(_ctx, _cache) {
    return vue.openBlock(), vue.createElementBlock("view", { class: "content" }, [
      vue.createElementVNode("view", { class: "left" }, [
        vue.createElementVNode("i", { class: "Hui-iconfont" }, "\uE665"),
        vue.createElementVNode("text", null, "\u63A8\u8350\u8D2D\u4E70\u7684\u5546\u54C1")
      ]),
      vue.createElementVNode("view", { class: "right" }, [
        vue.createElementVNode("i", { class: "Hui-iconfont" }, "\uE640"),
        vue.createElementVNode("i", { class: "Hui-iconfont" }, "\uE640")
      ])
    ]);
  }
  var __easycom_0 = /* @__PURE__ */ _export_sfc(_sfc_main$7, [["render", _sfc_render$4], ["__scopeId", "data-v-713abd38"], ["__file", "/Users/sunlianzheng/Sites/my-app/myuni/components/homesearch/homesearch.vue"]]);
  function isDebugMode() {
    return typeof __channelId__ === "string" && __channelId__;
  }
  function jsonStringifyReplacer(k, p) {
    switch (shared.toRawType(p)) {
      case "Function":
        return "function() { [native code] }";
      default:
        return p;
    }
  }
  function normalizeLog(type, filename, args) {
    if (isDebugMode()) {
      args.push(filename.replace("at ", "uni-app:///"));
      return console[type].apply(console, args);
    }
    const msgs = args.map(function(v) {
      const type2 = shared.toTypeString(v).toLowerCase();
      if (["[object object]", "[object array]", "[object module]"].indexOf(type2) !== -1) {
        try {
          v = "---BEGIN:JSON---" + JSON.stringify(v, jsonStringifyReplacer) + "---END:JSON---";
        } catch (e) {
          v = type2;
        }
      } else {
        if (v === null) {
          v = "---NULL---";
        } else if (v === void 0) {
          v = "---UNDEFINED---";
        } else {
          const vType = shared.toRawType(v).toUpperCase();
          if (vType === "NUMBER" || vType === "BOOLEAN") {
            v = "---BEGIN:" + vType + "---" + v + "---END:" + vType + "---";
          } else {
            v = String(v);
          }
        }
      }
      return v;
    });
    return msgs.join("---COMMA---") + " " + filename;
  }
  function formatAppLog(type, filename, ...args) {
    const res = normalizeLog(type, filename, args);
    res && console[type](res);
  }
  function resolveEasycom(component, easycom) {
    return shared.isString(component) ? easycom : component;
  }
  const _sfc_main$6 = {
    __name: "homeswiper",
    setup(__props) {
      uni.screenWidth;
      const list = [
        "https://storage.360buyimg.com/jdc-article/NutUItaro34.jpg",
        "https://storage.360buyimg.com/jdc-article/NutUItaro2.jpg",
        "https://storage.360buyimg.com/jdc-article/welcomenutui.jpg",
        "https://storage.360buyimg.com/jdc-article/fristfabu.jpg"
      ];
      const indicatorDots = true;
      const autoplay = true;
      vue.ref(0);
      return (_ctx, _cache) => {
        return vue.openBlock(), vue.createElementBlock(vue.Fragment, null, [
          vue.createElementVNode("swiper", {
            class: "swiper",
            circular: "",
            "indicator-dots": indicatorDots,
            autoplay
          }, [
            (vue.openBlock(), vue.createElementBlock(vue.Fragment, null, vue.renderList(list, (item, index) => {
              return vue.createElementVNode("swiper-item", {
                key: index,
                class: "swiper-item",
                mode: "widthFix"
              }, [
                vue.createElementVNode("image", { src: item }, null, 8, ["src"])
              ]);
            }), 64))
          ]),
          vue.createCommentVNode(' <view class="content">\n        <text>1212</text>\n       <text>{{n}}</text>\n        <button @click="add">\u52A0</button>\n        <text>{{a}}11111</text>\n    </view> ')
        ], 2112);
      };
    }
  };
  var __easycom_1 = /* @__PURE__ */ _export_sfc(_sfc_main$6, [["__scopeId", "data-v-a8068138"], ["__file", "/Users/sunlianzheng/Sites/my-app/myuni/components/homeswiper/homeswiper.vue"]]);
  const _sfc_main$5 = {
    __name: "index",
    setup(__props) {
      const title = "hello";
      const say = () => {
        uni.navigateTo({
          url: "/pages/details/details?data='\u6211\u662F\u4ECE index \u9875\u9762\u4F20\u8FC7\u6765\u7684\u503C'"
        });
      };
      return (_ctx, _cache) => {
        const _component_homesearch = resolveEasycom(vue.resolveDynamicComponent("homesearch"), __easycom_0);
        const _component_homeswiper = resolveEasycom(vue.resolveDynamicComponent("homeswiper"), __easycom_1);
        return vue.openBlock(), vue.createElementBlock("view", { class: "content" }, [
          vue.createVNode(_component_homesearch),
          vue.createVNode(_component_homeswiper),
          vue.createElementVNode("view", { class: "text-area" }, [
            vue.createElementVNode("text", { class: "title" }, vue.toDisplayString(title)),
            vue.createElementVNode("button", { onClick: say }, "\u8DF3\u8F6C\u5230details")
          ])
        ]);
      };
    }
  };
  var PagesIndexIndex = /* @__PURE__ */ _export_sfc(_sfc_main$5, [["__file", "/Users/sunlianzheng/Sites/my-app/myuni/pages/index/index.vue"]]);
  const _sfc_main$4 = {
    data() {
      return {};
    },
    methods: {}
  };
  function _sfc_render$3(_ctx, _cache, $props, $setup, $data, $options) {
    return vue.openBlock(), vue.createElementBlock("view", null, " list ");
  }
  var PagesListList = /* @__PURE__ */ _export_sfc(_sfc_main$4, [["render", _sfc_render$3], ["__file", "/Users/sunlianzheng/Sites/my-app/myuni/pages/list/list.vue"]]);
  const _sfc_main$3 = {
    data() {
      return {};
    },
    methods: {}
  };
  function _sfc_render$2(_ctx, _cache, $props, $setup, $data, $options) {
    return vue.openBlock(), vue.createElementBlock("view", null, " find ");
  }
  var PagesFindFind = /* @__PURE__ */ _export_sfc(_sfc_main$3, [["render", _sfc_render$2], ["__file", "/Users/sunlianzheng/Sites/my-app/myuni/pages/find/find.vue"]]);
  const _sfc_main$2 = {
    data() {
      return {};
    },
    methods: {}
  };
  function _sfc_render$1(_ctx, _cache, $props, $setup, $data, $options) {
    return vue.openBlock(), vue.createElementBlock("view", null, " cart ");
  }
  var PagesCartCart = /* @__PURE__ */ _export_sfc(_sfc_main$2, [["render", _sfc_render$1], ["__file", "/Users/sunlianzheng/Sites/my-app/myuni/pages/cart/cart.vue"]]);
  const _sfc_main$1 = {
    data() {
      return {
        text: "\u6CA1\u4EBA\u7ED9\u6211\u4F20\u53C2\u6570"
      };
    },
    onLoad(options) {
      this.text = options.data;
    },
    methods: {
      back: function() {
        uni.navigateBack();
      }
    }
  };
  function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
    return vue.openBlock(), vue.createElementBlock("view", null, [
      vue.createTextVNode(" Details: "),
      vue.createElementVNode("text", null, vue.toDisplayString($data.text), 1),
      vue.createElementVNode("button", {
        onClick: _cache[0] || (_cache[0] = (...args) => $options.back && $options.back(...args))
      }, "\u8FD4\u56DE")
    ]);
  }
  var PagesDetailsDetails = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["render", _sfc_render], ["__file", "/Users/sunlianzheng/Sites/my-app/myuni/pages/details/details.vue"]]);
  __definePage("pages/index/index", PagesIndexIndex);
  __definePage("pages/list/list", PagesListList);
  __definePage("pages/find/find", PagesFindFind);
  __definePage("pages/cart/cart", PagesCartCart);
  __definePage("pages/details/details", PagesDetailsDetails);
  const _sfc_main = {
    onLaunch: function() {
      formatAppLog("log", "at App.vue:5", "App Launch123");
    },
    onShow: function() {
      formatAppLog("log", "at App.vue:8", "App Show");
    },
    onHide: function() {
      formatAppLog("log", "at App.vue:11", "App Hide");
    }
  };
  var App = /* @__PURE__ */ _export_sfc(_sfc_main, [["__file", "/Users/sunlianzheng/Sites/my-app/myuni/App.vue"]]);
  function createApp() {
    const app = vue.createVueApp(App);
    return {
      app
    };
  }
  const { app: __app__, Vuex: __Vuex__, Pinia: __Pinia__ } = createApp();
  uni.Vuex = __Vuex__;
  uni.Pinia = __Pinia__;
  __app__.provide("__globalStyles", __uniConfig.styles);
  __app__._component.mpType = "app";
  __app__._component.render = () => {
  };
  __app__.mount("#app");
})(Vue, uni.VueShared);
