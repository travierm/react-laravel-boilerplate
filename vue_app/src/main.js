import './style.css';
import 'primeflex/primeflex.css';
import 'primeicons/primeicons.css';
import 'primevue/resources/primevue.min.css';
import 'primevue/resources/themes/saga-blue/theme.css';

import Button from 'primevue/button';
import PrimeVue from 'primevue/config';
import Dialog from 'primevue/dialog';
import InputText from 'primevue/inputtext';
import Menu from 'primevue/menu';
import Menubar from 'primevue/menubar';
import { createApp } from 'vue';
import { createRouter, createWebHashHistory } from 'vue-router';

import App from './App.vue';
import HelloWorld from './components/HelloWorld.vue';

//import 'primeicons/';
const router = createRouter({
  // 4. Provide the history implementation to use. We are using the hash history for simplicity here.
  history: createWebHashHistory(),
  routes: [{ path: "/", component: HelloWorld }], // short for `routes: routes`
});

const app = createApp(App);

app.use(router);

app.use(PrimeVue);

app.component("Dialog", Dialog);
app.component("Button", Button);
app.component("Menubar", Menubar);
app.component("Menu", Menu);
app.component("InputText", InputText);

app.mount("#app");
