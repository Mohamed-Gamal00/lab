import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import { far } from "@fortawesome/free-regular-svg-icons";
import { fas } from "@fortawesome/free-solid-svg-icons";
import { fab } from "@fortawesome/free-brands-svg-icons";
import "bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "normalize.css";

library.add(fas, far, fab);

createApp(App)
  .use(store)
  .component("FontAwesome", FontAwesomeIcon)
  .use(router)
  .mount("#app");
