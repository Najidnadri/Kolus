import { createStore } from 'vuex'
import notification from "./noti"

// Create a new store instance.
const store = createStore({
  modules: {
    noti: notification
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