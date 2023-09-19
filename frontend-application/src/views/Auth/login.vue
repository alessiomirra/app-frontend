<template>
    <div class="main">

        <ul class="nav container justify-content-between bg-transparent pt-3 mb-5">
            <li class="nav-item">
                <router-link class="nav-link active text-light rounded-3 logo fs-5" aria-current="page" :to="{name: 'home'}">FitTracker</router-link>
            </li>
            <li class="nav-item">
            <div class="dropdown">
                <a class="btn logo dropdown-toggle text-light" style="" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                    <i class="bi bi-person-fill"></i>  
                </a>
                <ul class="dropdown-menu">
                    <li>
                        <router-link class="dropdown-item" :to="{name: 'login'}">
                            <span class="me-2">
                                <i class="bi bi-box-arrow-in-right"></i>
                            </span>
                            Login
                        </router-link>
                    </li>
                    <li>
                        <router-link class="dropdown-item" :to="{name: 'signup'}">
                            <span class="me-2">
                                <i class="bi bi-person-add"></i>
                            </span>
                            Sign Up
                        </router-link>
                    </li>
                </ul>
            </div>
            </li>
        </ul>

        <div class="container">
            <div class="text-center text-light mt-2">
                <h3>LOGIN</h3>
                <p>Don't you have an account? <router-link :to="{name: 'signup'}" class="text-light">Sign Up</router-link></p>
            </div>

            <div class="outer">
                <div class="form-container mt-3 rounded-5">
                    <div v-if="errors.length" class="alert alert-danger text-center mt-3 mx-2" role="alert">
                        <p v-for="error in errors" :key="error">{{ error }}</p>
                    </div>
                    <form class="p-5" method="POST" @submit.prevent="login" novalidate>
                        <div class="form-floating mb-3">
                            <input type="text" id="floatingUsername" class="form-control" placeholder="Username" v-model="username">
                            <label for="floatingUsername">Username</label>
                        </div>
                        <div class="form-floating mb-3">
                            <input type="password" id="floatingPassword" class="form-control" placeholder="Password" v-model="password">
                            <label for="floatingPassword">Password</label>
                        </div>
                        <div class="mb-3 d-flex justify-content-between">
                            <button type="submit" class="btn logo text-light">SUBMIT</button>
                            <router-link href="#" class="text-danger" :to="{name: 'password-reset'}">Password Forgot?</router-link>
                        </div>
                    </form>
                </div>
            </div>
        </div>

    </div>
</template>

<script>
import axios from 'axios'; 

export default{
    name: 'LoginView', 
    data(){
        return{
            username: '', 
            password: '', 
            errors: [], 
        }
    }, 
    methods:{
        async login(){
            if (this.username === "" || this.password === ""){
                this.errors.push("You must compile all form's fields")
            } else {
                axios.defaults.headers.common['Authorization'] = ''; 
                localStorage.removeItem['token'];

                let formdata = {
                    username: this.username, 
                    password: this.password
                }

                await axios 
                    .post("/auth/token/login/", formdata)
                    .then(response => {
                        const token = response.data.auth_token; 
                        this.$store.commit('setToken', token);
                        axios.defaults.headers.common['Authorization'] = 'Token ' + token;
                        localStorage.setItem('token',token)
                    })
                    .catch(error => {
                        this.errors.push("Server Error: try again"); 
                        /*
                        if (error.response) {
                            for (const property in error.response.data){
                                this.errors.push(`${error.response.data[property]}`);
                            }
                        } else if(error.message){
                            this.errors.push('Something went wrong. Try again')
                        }
                        */
                    })

                await axios 
                    .get("/auth/users/me/")
                    .then(response => {
                        this.$store.commit('setUsername', response.data.username); 
                        localStorage.setItem("username", response.data.username);
                        if (response.data.food_plan){
                            this.$store.commit('setMealPlan', response.data.food_plan); 
                        }
                        this.$router
                            .push({name: 'dashboard'})
                            .then(() => {this.$router.go()})
                    })
                    .catch(error => {
                        this.$router.push({name: 'error'});
                    })
            }
        }
    }, 
    mounted(){
        document.title = "Login"; 
    }
}
</script>

<style scoped>
.main{
    width: 100%;
    height: 100vh;
    overflow-y: scroll;
    background-color: #3A0CA3;
}
.logo{
  background-color: #F72585;
}
.outer{
    display: flex;
    justify-content: center;
}
.form-container{
    width: 50%;
    min-height: 50%;
    background-color: #ffffff;
}

@media (max-width: 820px){
    .form-container{
        width: 100%;
        min-height: 50%;
    }
}
</style>