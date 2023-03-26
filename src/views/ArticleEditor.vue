<template>
  <div class="article-editor-view w-100% grid grid-rows-[70px_auto]">
    <div class="top-bar h-70px w-100% secondary-bg">

    </div>
    <editor>
        <template #left>
            <div class="h-100% w-100% third-bg">

            </div>
        </template>

        <template #right>
            <div class="h-100% w-100% forth-bg">
                
            </div>
        </template>
    </editor>
  </div>
</template>

<script setup lang="ts">
import editor from '../components/atom/editor.vue';

</script>

<style scoped>
.article-editor-view {
    height: 100vh;
    height: 100svh;
}
</style>