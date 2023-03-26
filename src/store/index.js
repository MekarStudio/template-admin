import { createStore } from 'vuex'

// Create a new store instance.
const store = createStore({
  modules: {
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