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
                <h3>PASSWORD RESET</h3>
                <p>Type your email and you'll receive a link for the password reset page</p>
            </div>

            <div class="outer">
                <div class="form-container mt-3 rounded-5">
                    <div v-if="errors.length" class="alert alert-danger text-center mt-3 mx-2" role="alert">
                        <p v-for="error in errors" :key="error">{{ error }}</p>
                    </div>
                    <div v-if="message" class="alert alert-success text-center mt-3 mx-2" role="alert">
                        <p>Check your email!</p>
                    </div>
                    <form class="p-5" method="POST" @submit.prevent="request" novalidate>
                        <div class="form-floating mb-3">
                            <input type="email" id="floatingEmail" class="form-control" placeholder="Email" v-model="email">
                            <label for="floatingEmail">Email</label>
                        </div>
                        <div class="mb-3 d-flex justify-content-between">
                            <button type="submit" class="btn logo text-light">SUBMIT</button>
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
            email: '',  
            errors: [], 
            message: false, 
        }
    }, 
    methods:{
        async request(){
            this.errors = []; 
            this.message = false;
            if (this.email === ""){
                this.errors.push("You must type your email!");
            } 
            if (!this.errors.length){
                let formdata = {
                    email: this.email
                }
                await axios 
                    .post('/auth/users/reset_password/', formdata)
                    .then(response => {
                        this.message = true; 
                    })
                    .catch(error => {
                        this.errors.push("Something went wrong. Try again or contact us showing the problem. Thank you.")
                    })
            }
        }
    }, 
    mounted(){
        document.title = "Password Reset"; 
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