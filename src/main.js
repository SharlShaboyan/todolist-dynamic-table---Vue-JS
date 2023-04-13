import { createApp } from 'vue'
import App from "../src/App.vue"
import components from "@/components/global"
import router from './router/router'
import store from './store'
import { library } from "@fortawesome/fontawesome-svg-core"
import { fas } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faEnvelopeOpenText } from '@fortawesome/free-solid-svg-icons'

const app = createApp(App)
library.add(fas, faEnvelopeOpenText)

components.forEach((component) => {
    app.component(component.name, component)
})

app
    .use(router)
    .use(store)
    .component('icon', FontAwesomeIcon)
    .mount('#app')
