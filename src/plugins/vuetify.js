import '@mdi/font/css/materialdesignicons.css'
import Vue from 'vue'
import Vuetify from 'vuetify'
import 'vuetify/dist/vuetify.min.css'
// import Vuetify from 'vuetify/lib'
import colors from 'vuetify/lib/util/colors'

Vue.use(Vuetify)

const opts = {}

export default new Vuetify({
    opts,
    icons: {
        iconfont: 'mdi', // default - only for display purposes
    },
})