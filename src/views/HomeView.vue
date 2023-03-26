<template>
  <main>
    <button class="p-10px black third-bg border-none" @click="showPopup = true">Popup</button>
    <button class="p-10px black third-bg border-none ml-10px" @click="addNoti">Notication</button>
    <popupVue :show="showPopup" @close="showPopup = false">
      <h1>hello</h1>
    </popupVue>
  </main>
</template>

<script setup lang="ts">
import { ref } from "vue"
import { useStore } from "vuex";
import popupVue from "../components/atom/popup.vue"

let store = useStore();

let addNoti = () => {
  store.commit('noti/addNoti', {
    msg: "success noti",
    class: ['green'],
  })
}

let showPopup = ref(false);

</script>
