<template>
    <div class="main">

        <div class="container">

            <!-- Top Nav -->
            <ul class="nav">
                <li class="nav-item mt-2">
                    <router-link class="nav-link active text-light" aria-current="page" :to="{name: 'home'}">
                        <i class="bi bi-house"></i>
                        Homepage
                    </router-link>
                </li>
            </ul>
            <!-- Top Nav -->

            <!-- Message -->
            <div class="message text-center text-light" style="margin-top: 10%;">
                <p class="fs-2 fw-bold">We're sorry, but something went wrong.</p>
                <p class="fs-5">Try refreshing the page or contact the app's developers!</p>
            </div>
            <!-- Message -->

        </div>

    </div>
</template>

<script>
export default{
    name: "ErrorPage", 
    data(){
        return{

        }
    }, 
}
</script>

<style scoped>
.main{
    width: 100%;
    height: 100vh;
    background-color: #3A0CA3;
    border-bottom-right-radius: 50%;
}
</style>