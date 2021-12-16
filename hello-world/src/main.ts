import App from "./App.vue";
import router from "./router";
import { createApp } from "vue";
import { store, key } from "./store/store";

const app = createApp({ App });

// pass the injection key
app.use(store, key);

app.mount("#app");

createApp(App).use(store).use(router).mount("#app");
