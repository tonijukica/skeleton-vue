import Vue from 'vue';
import Vuetify from 'vuetify';
import 'vuetify/dist/vuetify.min.css'

Vue.use(Vuetify)

export default new Vuetify({
  cons: {
    iconfont: 'mdi'
  },
  theme: {
    themes: {
      light: {
        primary: '#234353',
        secondary: '#19857b'
      }
    }
  }
})
