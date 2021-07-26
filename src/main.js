import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import "bootstrap";
import { BootstrapIconsPlugin } from "bootstrap-icons-vue";
import "bootstrap/dist/css/bootstrap.min.css";
import cookie from "./plugins/cookie"; //https://www.npmjs.com/package/vue-cli-plugin-cookie
import { VueWindowSizePlugin } from 'vue-window-size/option-api';

createApp(App)
  .use(cookie)
  .use(store)
  .use(router)
  .use(BootstrapIconsPlugin)
  .use(VueWindowSizePlugin)
  .mount("#app");
