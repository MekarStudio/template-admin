<script>
import { ref } from '@vue/reactivity';
import NavVue from './components/Nav.vue';
import { useRoute } from 'vue-router';
import { watch } from '@vue/runtime-core';


export default {
  components: {
    NavVue
  },
  setup() {
    let route = useRoute();
    watch(() => route.fullPath, (newPath, oldPath) => {
      if (newPath === '/login') {
        removeNav.value = true;
      } else {
        removeNav.value = false;
      }
    })

    let removeNav = ref(false);

    return { removeNav }
  }
}
</script>

<template>
  <div class="h-100vh w-100% min-h-600px" :class="{wrapper: !removeNav, wrapperLogin: removeNav}">
    <NavVue v-if="!removeNav"/>
    <RouterView />
  </div>
</template>

<style scoped>
.wrapper {
  display: grid;
  grid-template-columns: 300px auto;
}

.wrapperLogin {
  display: grid;
  grid-template-columns: auto;
}
</style>
