<template>
  <header id="header" class="h-100% w-100% flex flex-col justify-between items-center">
    <div class="top">
        <h1 class="primary"><router-link :to="'/'" class="primary decoration-none">Penggerak Malaysia</router-link></h1>
        <nav class="mt-50px">
            <ul class="text-16px list-none flex flex-col justify-center items-start font-500 text-left p-0 gap-20px">
                <router-link :to="'/'" class="link cursor-pointer text-18px transform translate-y-2px decoration-none" :class="{ active: this.$route.fullPath === '/' }">
                    <span class="mr-10px text-20px"><AnFilledHome /></span>
                    Home
                </router-link>
                <router-link :to="'/billing'" class="link cursor-pointer text-18px transform translate-y-2px decoration-none" :class="{ active: this.$route.fullPath.startsWith('/billing') }">
                    <span class="mr-10px text-20px"><FlFilledPayment /></span>
                    Billings
                </router-link>
                <router-link :to="'/drive'" class="link cursor-pointer text-18px transform translate-y-2px decoration-none" :class="{ active: this.$route.fullPath.startsWith('/drive') }">
                    <span class="mr-10px text-20px"><BsUsbDriveFill /></span>
                    Drive
                </router-link>
            </ul>
        </nav>
    </div>
    <div class="btns flex flex-col justify-center items-center gap-20px">

        <button class="border-none py-10px px-20px third-bg white">Log Out</button>
    </div>
  </header>
</template>

<script>
import { FlFilledPayment } from "@kalimahapps/vue-icons/fl";
import { BsUsbDriveFill } from "@kalimahapps/vue-icons/bs";
import { AnFilledHome } from "@kalimahapps/vue-icons/an";

export default {
    components: {
        FlFilledPayment,
        BsUsbDriveFill,
        AnFilledHome
    }
}
</script>

<style scoped>
#header {
    padding: 40px;
    left: 300px;
    background-color: var(--forth-color);
}

.link {
    transition: all 0.3s ease; 
    color: black;
}

.link:hover {
    transform: translateY(-1px);
}

.active {
    color: var(--secondary-color)
}
</style>