<script>
import NavVue from './components/Nav.vue';
import { useRoute } from 'vue-router';
import { computed, watch } from '@vue/runtime-core';
import { useStore } from 'vuex';
import notificationVue from './components/atom/notification.vue';


export default {
  components: {
    NavVue,
    notificationVue
  },
  setup() {
    let route = useRoute();
    let store = useStore();
    let state = computed(() => store.state.menuState);

    watch(() => route.fullPath, (newPath) => {
      if (newPath === '/login' || newPath.startsWith('/article-editor')) {
        store.commit('setMenuState', 'hide');
      } else {
        if (store.state.menuState === 'hide') {
          store.commit('setMenuState', 'max');
        }
        
      }
    })

    return { store, state }
  }
}
</script>

<template>
  <div class="main-content w-100% min-h-600px relative" :class="{hidden: state === 'hide', minimize: state === 'min', maximize: state === 'max'}">
    <NavVue v-if="this.$store.state.menuState !== 'hide'" class="relative z-90"/>
    <RouterView class="main"/>
    <notificationVue  />
  </div>
</template>

<style scoped>

.main {
  height: 100vh;
  height: 100svh;
}

.main-content {
  transition: all 0.3s ease;
  height: 100vh;
  height: 100svh;
}
.maximize {
  display: grid;
  grid-template-columns: 300px auto;
}

.hidden {
  display: grid;
  grid-template-columns: auto;
}

.minimize {
  display: grid;
  grid-template-columns: 1px auto;
}

@media only screen and (min-width: 500px) {
.minimize {
  grid-template-columns: 80px auto;
}
}
</style>
