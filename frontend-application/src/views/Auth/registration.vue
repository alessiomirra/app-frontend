<template>
    <div class="main">

        <ul class="nav container justify-content-between bg-transparent pt-3 mb-2">
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
                <h3>Sign Up</h3>
                <p>Create a new account</p>
            </div>

            <div class="outer">
                <div class="form-container mt-3 rounded-5">
                    <div v-if="errors.length" class="alert alert-danger text-center mt-3 mx-2" role="alert">
                        <p v-for="error in errors" :key="error">{{ error }}</p>
                    </div>
                    <form class="p-5" method="POST" @submit.prevent="signup" novalidate>
                        <div class="row">
                            <div class="col-lg-6">
                                <small v-if="error.username" class="text-danger">{{ error.username }}</small>
                                <div class="form-floating mb-3">
                                    <input type="text" class="form-control" id="floatingUsername" placeholder="Username" v-model="username">
                                    <label for="floatingUsername">Username</label>
                                </div>
                            </div>
                            <div class="col-lg-6">
                                <small v-if="error.email" class="text-danger">{{ error.email }}</small>
                                <div class="form-floating mb-3">
                                    <input type="email" class="form-control" id="floatingEmail" placeholder="Email" v-model="email">
                                    <label for="floatingEmail">Email</label>
                                </div>
                            </div>
                        </div>
                        <div class="row">
                            <small v-if="error.password" class="text-danger">{{ error.password }}</small>
                            <div class="col-lg-6">
                                <small v-if="error.password1" class="text-danger">{{ error.password1 }}</small>
                                <div class="form-floating mb-3">
                                    <input type="password" class="form-control" id="floatingPassword1" placeholder="Password" v-model="password1">
                                    <label for="floatingPassword1">Password</label>
                                </div>
                            </div>
                            <div class="col-lg-6">
                                <small v-if="error.password2" class="text-danger">{{ error.password2 }}</small>
                                <div class="form-floating mb-3">
                                    <input type="password" class="form-control" id="floatingPassword2" placeholder="Password Confirm" v-model="password2">
                                    <label for="floatingPassword2">Password Confirm</label>
                                </div>
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-lg-6">
                                <small v-if="error.weight" class="text-danger">{{ error.weight }}</small>
                                <div class="form-floating input-group mb-3">
                                    <input type="number" id="floatingWeight" class="form-control" placeholder="Weight" v-model="weight" min="0">
                                    <label for="floatingWeight">Weight</label>
                                    <div class="input-group-text">kg</div>
                                </div>
                            </div>
                            <div class="col-lg-6">
                                <small v-if="error.height" class="text-danger">{{ error.height }}</small>
                                <div class="form-floating input-group mb-3">
                                    <input type="number" id="floatingHeight" class="form-control" placeholder="Height" v-model="height" min="0">
                                    <label for="floatingHeight">Height</label>
                                    <div class="input-group-text">cm</div>
                                </div>
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-lg-6">
                                <small v-if="error.date" class="text-danger">{{ error.date }}</small>
                                <div class="form-floating mb-3">
                                    <input type="date" id="floatingDate" class="form-control" placeholder="Born Date" v-model="date">
                                    <label for="floatingDate">Born Date</label>
                                </div>
                            </div>
                            <div class="col-lg-6"></div>
                        </div>
                        <div class="mt-2 mb-3 d-flex justify-content-between">
                            <button type="submit" class="btn logo text-light">SUBMIT</button>
                            <router-link :to="{name: 'login'}">Login</router-link>
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
    name: "SignUp", 
    data(){
        return{
            errors: [], 
            username: '', 
            email: '', 
            password1: '', 
            password2: '', 
            weight: '', 
            height: '',
            date: '', 
            error: {
                username: '', 
                email: '', 
                password: '', 
                password1: '', 
                password2: '', 
                weight: '', 
                height: '', 
                date: ''
            }, 
        }
    }, 
    methods:{
        validate(){
            if (this.username === ''){
                this.error.username = "You must type a valid username"; 
                return false; 
            } else if (this.email === '' || !this.email.includes("@")){
                if (this.email === ''){
                    this.error.email = "You must type a valid email"; 
                    return false;  
                } else {
                    this.error.email = "The email must be valid";
                    return false; 
                }; 
            } else if (this.password1 === '') {
                this.error.password1 = "You must type a password"; 
                return false; 
            } else if (this.password2 === '') {
                this.error.password2 = "You must confirm the password"; 
                return false; 
            } else if (this.password1 !== this.password2){
                this.error.password === "The passwords doesn't match"; 
                return false; 
            } else if (this.password1.length < 8 || /^[0-9]+$/.test(this.password1)){
                this.error.password = "The password must contain more than 8 characters and cannot be entirely numeric";
                return false; 
            } else if (this.weight === '') {
                this.error.weight = "You must enter your weight"; 
                return false; 
            } else if (this.height === ''){
                this.error.height = "You must enter your height"; 
                return false; 
            } else if (this.date === ''){
                this.error.date = "You must enter your born date"; 
                return false; 
            } else {
                return true; 
            }; 
        }, 
        async signup(){
            this.errors = []; 
            this.error.username = ""; 
            this.error.email = ""; 
            this.error.password1 = ""; 
            this.error.password2 = ""; 
            this.error.weight = ""; 
            this.error.height = ""; 
            this.error.date = "";
            
            const valid = this.validate(); 

            if (valid) {
                let formdata = {
                    username: this.username, 
                    email: this.email, 
                    password: this.password1, 
                    weight: this.weight, 
                    height: this.height, 
                    born: this.date, 
                }
                await axios 
                    .post("/auth/users/", formdata)
                    .then(response => {
                        this.$router.push({name: 'login'}); 
                    })
                    .catch(error => {
                        this.errors.push("Server Error: try again"); 
                        /*
                        if(error.response){
                            for (const property in error.response.data){
                                this.errors.push(`${property}: ${error.response.data[property]}`);
                            }
                        } else if(error.message){
                            this.errors.push('Something went wrong. Try again');
                        }; 
                        */
                    }) 
                return true; 
            } else {
                return false; 
            }
        }, 
    }, 
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