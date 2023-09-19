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
                <p>Enter and confirm your new password</p>
            </div>

            <div class="outer">
                <div class="form-container mt-3 rounded-5">
                    <div v-if="errors.length" class="alert alert-danger text-center mt-3 mx-2" role="alert">
                        <p v-for="error in errors" :key="error">{{ error }}</p>
                    </div>
                    <div v-if="message" class="alert alert-success text-center mt-3 mx-2" role="alert">
                        <p>Your password has been resetted successfully! <router-link :to="{name: 'login'}">Login</router-link></p>
                    </div>
                    <form class="p-5" method="POST" @submit.prevent="request" novalidate>
                        <div class="form-floating mb-3">
                            <input type="password" id="floatingPassword" class="form-control" placeholder="Password" v-model="new_password">
                            <label for="floatingPassword">Password</label>
                        </div>
                        <div class="form-floating mb-3">
                            <input type="password" id="floatingPasswordConfirm" class="form-control" placeholder="Confirm Password" v-model="re_new_password">
                            <label for="floatingPasswordConfirm">Confirm Password</label>
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
            uid: '', 
            token: '', 
            new_password: '', 
            re_new_password: '', 
            errors: [], 
            message: false, 
        }
    }, 
    methods:{
        getParams(){
            this.uid = this.$route.params.uid; 
            this.token = this.$route.params.token; 
        }, 
        async request(){
            this.errors = []; 
            this.message = false;
            if (this.password === ""){
                this.errors.push("You must type your new password!");
            } 
            if (this.new_password !== this.re_new_password){
                this.errors.push("The passwords are not matching"); 
            }
            if (!this.errors.length){
                let formdata = {
                    uid: this.uid, 
                    token: this.token, 
                    password: this.new_password,
                    re_new_password: this.re_new_password, 
                }
                await axios 
                    .post('/auth/users/reset_password_confirm/', formdata)
                    .then(response => {
                        this.$router.push('/login')
                    })
                    .catch(error => {
                        this.errors.push("Something went wrong. Try again or contact us showing the problem. Thank you.")
                    })
            }
        }
    }, 
    mounted(){
        this.getParams(); 

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