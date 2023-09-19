<template>
  <div class="main">

    <div class="hero">
      <ul class="nav container justify-content-between bg-transparent pt-3 mb-5">
        <li class="nav-item">
          <router-link class="nav-link active text-light rounded-3 logo fs-5" aria-current="page" :to="{name: 'home'}">FitTracker</router-link>
        </li>
        <li class="nav-item">
          <div class="dropdown">
            <a class="btn logo dropdown-toggle text-light" style="" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
              <i class="bi bi-person-fill"></i> 
            </a>
            <ul v-if="$store.state.isAuthenticated" class="dropdown-menu">
              <li>
                <router-link :to="{name: 'dashboard'}" class="dropdown-item">
                  <span class="me-2">
                    <i class="bi bi-speedometer2"></i>
                  </span>
                  Dashboard
                </router-link>
              </li>
              <li>
                <a href="#" class="dropdown-item" @click="handleLogout">
                  <span class="me-2">
                    <i class="bi bi-box-arrow-in-left"></i>
                  </span>
                  Logout
                </a>
              </li>
            </ul>
            <ul v-else class="dropdown-menu">
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


      <div class="p-3 container d-md-flex flex-md-row flex-column justify-content-around">
        <div class="hero-text text-light text-center">
          <p class="fs-1 fw-semibold">Track your weight, <br> manage your meal plan, <br> work out like a pro!</p>
          <p>Login or Sign Up - the account is free!</p>
          <a class="responsive-link btn btn-sm btn-danger d-lg-none" aria-current="page" href="#cards-container">Details</a>
        </div>
        <div class="image-container">
          <img src="../assets/header.svg" alt="header-image" loading="lazy" class="w-100">
        </div>
      </div>

    </div>

    <div id="cards-container" class="mt-5 mb-5">

      <div class="container px-4 text-center">
        <div class="row gx-5">

          <div class="col-md-4 mb-3">
            <div class="p-5 border bg-light height-300 animated-box">
              <div class="icon-container p-2 d-flex justify-content-center align-items-center">
                <i class="fa-solid fa-weight-scale fa-2xl"></i>
              </div>
              <div class="text-center mt-4 mb-3">
                <p class="fs-4 fw-semibold">Weight Track</p>
              </div>
              <div class="mt-3 mb-3">
                Track your weight and set your objectives.
              </div>
            </div>
          </div>

          <div class="col-md-4 mb-3">
            <div class="p-5 border bg-light height-300 animated-box">
              <div class="icon-container p-2 d-flex justify-content-center align-items-center">
                <i class="fa-solid fa-bowl-food fa-2xl"></i>
              </div>
              <div class="text-center mt-4 mb-3">
                <p class="fs-4 fw-semibold">Meal Plans</p>
              </div>
              <div class="mt-3 mb-3">
                Manage your weekly meal plan tracking nutrients. 
              </div>
            </div>
          </div>

          <div class="col-md-4 mb-3">
            <div class="p-5 border bg-light height-300 animated-box">
              <div class="icon-container p-2 d-flex justify-content-center align-items-center">
                <i class="fa-solid fa-dumbbell fa-2xl"></i>
              </div>
              <div class="text-center mt-4 mb-3">
                <p class="fs-4 fw-semibold">Training Plans</p>
              </div>
              <div class="mt-3 mb-3">
                Manage your weekly work out schedules. 
              </div>
            </div>
          </div>

        </div>
    </div>


    </div>

  </div>

</template>

<script>
import { logout } from '@/logout';

export default {
  name: 'HomeView', 
  methods: {
    handleLogout(){
      logout(); 
    }
  }, 
  mounted(){
    document.title = "FitTracker"
  }
}
</script>

<style scoped>
.main{
  width: 100%;
  height: 100vh;
  overflow-y: scroll;
  background-color: #e0fbfc;
}
.logo{
  background-color: #F72585;
}
.hero{
  width: 100%;
  height: 95vh;
  background-color: #3A0CA3;
  border-bottom-right-radius: 50%;
  border-bottom-left-radius: 5%;
}
.image-container{
  width: 50%;
  height: 50%;
}
.image-container img{
  width: 100%;
  height: 100%;
  object-fit: contain;
}
.icon-container{
  height: 40%;
}
.height-300{
  min-height: 300px;
}
.animated-box{
  cursor: pointer;
}
.animated-box:hover{
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1); 
  transform: translateY(-5px);
  transition: box-shadow 0.3s, transform 0.1s;
}

@media (max-width: 750px){
  .image-container{
    width: 100%;
    text-align: center;
    margin-top: 30px;
  }
  .logo{
    margin-left: 10px;
  }
  #cards-container{
    margin-top: 250px;
  }
}

@media (min-width: 810px) and (max-width: 912px){
  .hero{
    height: 50vh; 
  }
}

</style>