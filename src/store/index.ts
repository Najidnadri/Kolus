import { createStore } from 'vuex'
import notification from "./noti"
import home from './home'

// Create a new store instance.
const store = createStore({
  modules: {
    noti: notification,
    home: home
    // fb: facebookModule,
    // media: mediaModule,
    // articleEditor: articleEditorModule
  },
  state() {
    return {
      menuState:'min'
    }
  },
  mutations: {
    setMenuState(state, val) {
        state.menuState = val;
    }
  }
})


export default store