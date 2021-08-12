import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import "bootstrap";
import { BootstrapIconsPlugin } from "bootstrap-icons-vue";
import "bootstrap/dist/css/bootstrap.min.css";
import cookie from "./plugins/cookie"; //https://www.npmjs.com/package/vue-cli-plugin-cookie
import { VueWindowSizePlugin } from 'vue-window-size/option-api';
import FirstPlugin from "./plugins/firstPlugin.js";

//https://stackoverflow.com/questions/36170425/detect-click-outside-element
//https://v3.vuejs.org/guide/custom-directive.html#intro
/*const outside = {
  beforeMount: (el, binding) => {
      el.clickOutsideEvent = event => {
      // here I check that click was outside the el and his children
      if (!(el == event.target || el.contains(event.target))) {
          // and if it did, call method provided in attribute value
          if (typeof binding.value === 'function') {
              binding.value.call();
          } 
          else{
              console.log("binding must be a function");
          }              
      }
      };
      document.addEventListener("click", el.clickOutsideEvent);
  },
  unmounted: el => {
      document.removeEventListener("click", el.clickOutsideEvent);
  },
}*/

const i18nStrings = {
    greetings: {
      hi: 'Hallo!'
    }
  }

createApp(App)
  .use(cookie)
  .use(store)
  .use(router)
  .use(BootstrapIconsPlugin)
  .use(VueWindowSizePlugin)
  .use(FirstPlugin,i18nStrings)
  //.directive("click-outside", outside)
  .mount("#app");
