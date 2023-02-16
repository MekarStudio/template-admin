<template>
  <div class="login-view h-100vh min-h-600px w-100% min-w-300px flex justify-center items-center">
    <div class="login-form primary-bg white w-90% max-w-500px px-2rem py-4rem flex flex-col justify-center items-center rounded-lg gap-10px">
        <div class="title">
            <h1 class="text-30px text-center">Login <span class="font-400">| Penggerak Malaysia</span></h1>
        </div>
        <div class="form-input mt-20px w-100% max-w-400px">
            <input v-model="loginCreds.email" type="email" class="text-input-login w-100% p-1.4rem text-16px" placeholder="Email">
        </div>
        <div class="form-input mt-8px w-100% max-w-400px">
            <input v-model="loginCreds.password" type="password" class="text-input-login w-100% p-1.4rem text-16px" placeholder="Password">
        </div>
        <div class="btns mt-17px w-100% max-w-300px flex flex-row items-center justify-center">
            <button @click="loginHandler" class="primary secondary-bg border-none py-10px w-100% max-w-200px" v-if="!loading">Submit</button>
            <button class="primary secondary-bg border-none py-10px w-100% max-w-200px" v-else>Loading</button>
        </div>
        
    </div>
  </div>
</template>

<script>
import { ref } from '@vue/reactivity'
import { auth } from "../firebase.js";
import { signInWithEmailAndPassword } from "firebase/auth";
import { useRouter } from "vue-router";
import { onMounted } from '@vue/runtime-core';

class LoginCreds {
    email;
    password;
    constructor(email, password) {
        this.email = email;
        this.password = password;
    }

    checkEmailValid() {
        if (this.email === undefined) {
            return false
        }

        if (this.email.includes("@")) {
            return true
        } else {
            return false
        }
    }

    checkPasswordValid() {
        if (this.password === undefined) {
            return false
        } 

        return true

        // let strengthChecker = new RegExp("(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[^A-Za-z0-9])(?=.{8,})");
        // if (strengthChecker.test(this.password)) {
        //     return true
        // } else {
        //     return false
        // }
    }

    reset() {
        this.email = "";
        this.password = "";
    } 
}

export default {
    setup() {
        /*
            Items and variables
        */ 
        let loginCreds = ref(new LoginCreds());
        let passErr = ref(false);
        let emailErr = ref(false);
        let loginErr = ref(false);
        let router = useRouter();
        let loading = ref(false);
        
        /*
        Setup
        */
        onMounted(() => {
            let elements = document.getElementsByClassName("text-input-login");
            Array.from(elements).forEach((el) => {
                el.addEventListener("keyup", (event) => {
                if (event.key === "Enter" || event.keyCode === 13) {
                    loginHandler();
                }
                });
            })
        })

        /*
            Event Handlers
        */ 
        //login
        let loginHandler = () => {
            let creds = loginCreds.value;
            let passValid =true;
            let emailValid = creds.checkEmailValid();
            if (emailValid) {
                emailErr.value = false;
            } else {
                emailErr.value = true;
            }

            passErr.value = false;

            if ((passValid && emailValid) && loading.value === false) {
                loading.value = true;
                signInWithEmailAndPassword(auth, creds.email, creds.password)
                    .then((usercreds) => {
                        loginErr.value = false;
                        creds.reset();
                        loading.value = false;
                        router.push("/");
                    })
                    .catch((error) => {
                        console.log("something went wrong: ", error.message);
                        loading.value = false;
                        loginErr.value = true;
                        creds.reset();
                    });
            }
        };

        let goToHome = () => {
            router.push("/");
        }

        return { loginHandler, passErr, emailErr, loginCreds, loginErr, goToHome, loading }
    }
}
</script>

<style scoped>

</style>