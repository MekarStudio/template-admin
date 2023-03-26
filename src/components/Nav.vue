<template>
    <header id="header" class="flex flex-col justify-between items-center z-90" :class="{min: state === 'min', max: state === 'max'}">
        <div class="min-btn absolute top-0 left-0 h-30px w-30px cursor-pointer flex justify-center items-center z-99" @click="toggleMenu">
            <PrWindowMinimize class="white text-23px " v-show="state === 'max'"/>
            <PrWindowMaximize class="white text-23px" v-show="state === 'min'"/>
        </div>
        <div class="top w-100%">
            <h1 class="w-100% text-center">Logo</h1>

            <nav class="mt-30px grid grid-cols-[1fr] gap6px">
                <router-link :to="'/'" class="nav-link grid grid-cols-[30px_auto] w-100% h-50px items-center decoration-none justify-start place-items-center gap-7px opacity-80 px-8px border-rounded-xl" :class="{active: routeFullpath === '/'}">
                    <AnOutlinedHome class="text-20px"/>
                    <p class="text-16px mt-5px font-600">Home</p>
                </router-link>

                <router-link :to="'/drive'" class="nav-link grid grid-cols-[30px_auto] w-100% h-50px items-center decoration-none justify-start place-items-center gap-7px opacity-80 px-8px border-rounded-xl" :class="{active: routeFullpath === '/drive'}">
                    <BsUsbDrive class="text-20px"/>
                    <p class="text-16px mt-5px font-600">Drive<LaExternalLinkAltSolid class="text-14px"/></p>
                </router-link>

                <div class="link-dropdown overflow-hidden" :style="dropdowns[0].value" @click="toggleDropdown(0)">
                    <div class="h-50px w-100% grid grid-cols-[auto_30px] items-center nav-link px-8px border-rounded-xl cursor-pointer opacity-80">
                        <div :to="'/'" class="grid grid-cols-[30px_auto] w-100% h-50px items-center decoration-none justify-start place-items-center gap-7px ">
                            <FlFilledContentSettings class="text-20px"/>
                            <p class="text-16px mt-5px font-600">Contents</p>
                        </div>
                        <BsArrowDownShort class="text-23px transition" :class="{'rotate-180': dropdowns[0].value.height === '100%'}"/>
                    </div>
                    <div class="link-dropdown-items w-100% pl-30px mt-6px grid grid-cols-[1fr] gap-6px">
                        <router-link :to="'/'" class="nav-link grid grid-cols-[30px_auto] w-100% h-45px items-center decoration-none justify-start place-items-center gap-7px opacity-70 px-8px border-rounded-xl" :class="{active: routeFullpath === '/articles'}">
                            <PhDuotoneArticleMedium class="text-20px"/>
                            <p class="text-16px mt-5px font-600">Articles</p>
                        </router-link>
                        <router-link :to="'/'" class="nav-link grid grid-cols-[30px_auto] w-100% h-45px items-center decoration-none justify-start place-items-center gap-7px opacity-70 px-8px border-rounded-xl" :class="{active: routeFullpath === '/collections'}">
                            <FlCollectionsAdd class="text-20px"/>
                            <p class="text-16px mt-5px font-600">Collections</p>
                        </router-link>
                    </div>

                </div>
            </nav>
        </div>



        <div class="btns flex flex-col justify-center items-center gap-20px">

            <button class="border-none third-bg white py-5px px-8px" @click="signOut">
                <p v-if="!loading" class="grid grid-cols-[30px_auto] items-center place-items-center justify-center">
                    <span class="icon text-20px mt-5px mr-3px"><BxLogOut /></span>
                    <span class="link-text mr-4px">Log Out</span>
                </p>
                <p v-else>Logging Out...</p>
            </button>
        </div>

    </header>
</template>
  
<script setup lang="ts">
import { BsCardHeading } from "@kalimahapps/vue-icons/bs";
import { BsUsbDrive } from "@kalimahapps/vue-icons/bs";
import { AnOutlinedHome } from "@kalimahapps/vue-icons/an";
import { FlFilledContentSettings } from "@kalimahapps/vue-icons/fl";
import { ReGalleryFill } from "@kalimahapps/vue-icons/re";
import { PhDuotoneArticleMedium } from "@kalimahapps/vue-icons/ph";
import { LaExternalLinkAltSolid } from "@kalimahapps/vue-icons/la";
import { PrWindowMinimize } from "@kalimahapps/vue-icons/pr";
import { PrWindowMaximize } from "@kalimahapps/vue-icons/pr";
import { TaForms } from "@kalimahapps/vue-icons/ta";
// import { auth } from "../firebase";
import { useRoute, useRouter } from 'vue-router';
import { ref } from '@vue/reactivity';
import { useStore } from 'vuex';
import { BxLogOut } from "@kalimahapps/vue-icons/bx";
import { LaFacebookSquare } from "@kalimahapps/vue-icons/la";
import { BsArrowDownShort } from "@kalimahapps/vue-icons/bs";
import { FlCollectionsAdd } from "@kalimahapps/vue-icons/fl";
import { computed } from 'vue';


interface dropDown {
    height: string
}

let router = useRouter();
let route = useRoute();
let loading = ref(false);
let error = ref(false);
let store = useStore();
let routeFullpath = computed(() => route.fullPath);
let dropdowns = [ref<dropDown>({height: '50px'})];
let state = computed(() => store.state.menuState)

let signOut = () => {
    // loading.value = true;
    // auth.signOut().then(() => {
    //     loading.value = false;
    //     error.value = false;
    //     router.push('/login');
    // }).catch(() => {
    //     loading.value = false;
    //     error.value = true;
    //     alert('Error logging out, please try again later. If the problem continues, please contact your webmaster najid_mekarstudio@mypenggerak.org')
    // })
}

let toggleMenu = () => {
    if (store.state.menuState === 'max') {
        store.commit('setMenuState', 'min')
        dropdowns.forEach((dropdown) => {
            dropdown.value.height = '50px';
        })
    } else if (store.state.menuState === 'min') {
        store.commit('setMenuState', 'max')
        if (route.fullPath.startsWith('/contents')) {
            dropdowns[0].value.height = '100%';
        }
    }  
}

let toggleDropdown = (index: number) => {
    if (store.state.menuState === 'min') {
        store.commit('setMenuState', 'max');
        dropdowns[index].value.height = '100%';
    } else {
        if (!route.fullPath.startsWith('/contents')) {
            if (dropdowns[index].value.height === '50px') {
                dropdowns[index].value.height = '100%'
            } else {
                dropdowns[index].value.height = '50px'
            }
        }

    }

}

</script>
  
<style scoped>
#header {
    padding: 40px 20px;
    background-color: var(--forth-color);
    height: 100vh;
    height: 100svh;

    transition: all 0.3s ease;
}


.min-btn {
    transition: all 0.3s ease;
}

.nav-link {
    transition: all 0.3s ease; 
    color: black;
}

.nav-link:hover {
    background-color: rgba(0, 0, 0, 0.1);
}

.link-dropdown {
    transition: all 0.5s ease;
}

.active {
    background-color: rgba(0, 0, 0, 0.3) !important;
}

.min-btn {
    background-color: var(--secondary-color);
    transition: all 0.3 ease;
}
</style>

<style scoped>

.min {
    transform: translateX(-40px)
}

.min .min-btn {
    left: auto;
    right: -30px;
}

.min .nav-link {
    gap: 0;
}

.min .nav-link p {
    display: none
}

.min .link-text {
    display: none;
}

.min .top, .min .btns {
    display: none;
}

@media only screen and (min-width: 500px) { 
.min .top {
    display: block;
}

.min .btns {
    display: flex;
}

.min .min-btn {
    left: 0;
    right: auto;
}

.min {
    transform: translateX(0px)
}
}
</style>


<!-- <style scoped>
/* mininimized */
.min {
    width: 70px;
    transform: translateX(-80px);
}

.min .min-btn {
    margin-left: 80px;
}

.min .logo {
    display: none;
}

.min .icon {
    margin-right: 0;
    font-size: 25px;
}

.min .nav-wrapper {
    align-items: center;
}

.min .CMS {
    align-items: center;
    background-color: var(--fifth-color);
    padding: 1.5rem;
    border-radius: 10px;
}

.min .CMS-nav {
    padding-left: 0;
    align-items: center;
}

.min .link-text {
    display: none;
}

@media only screen and (min-width: 500px) {
.min {
    transform: translateX(0px);
}

.min .min-btn {
    margin-left: 50px;
}

}
</style>

<style scoped>
/* maximized */
.max {
    width: 300px;
}

.max .min-btn {
    right: 0;
    left: auto;
}

.max .logo {
    display: block;
}

.max .icon {
    margin-right: 10px;
}

.max .nav-wrapper {
    align-items: flex-start;
}

.max .CMS {
    align-items: flex-start;
}

.max .CMS-nav {
    padding-left: 10px;
    align-items: flex-start;
}

.max .link-text {
    display: block;
}

@media only screen and (min-width: 300px) {
.max .min-btn {
    margin-left: 270px;
    right: auto;
    left: 0;
}
}
</style> -->