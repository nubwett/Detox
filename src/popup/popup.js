import Vue from "vue";
import App from "./App";

const script = document.createElement("script");
script.setAttribute("type", "module");
script.setAttribute("src", chrome.extension.getURL("bundle.js"));
const head =
  document.head ||
  document.getElementsByTagName("head")[0] ||
  document.documentElement;
head.insertBefore(script, head.lastChild);

global.browser = require("webextension-polyfill");
Vue.prototype.$browser = global.browser;

/* eslint-disable no-new */
new Vue({
  el: "#app",

  render: h => h(App)
});
