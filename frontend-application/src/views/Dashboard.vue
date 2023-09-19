<template>

    <!-- Navbar -->
    <nav class="navbar navbar-expand-lg navbar-dark fixed-top" style="background-color: #3A0CA3;">
        <div class="container-fluid">
            <!-- Offcanvas Trigger -->
            <button class="navbar-toggler me-2" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasExample" aria-controls="offcanvasExample">
                <span class="navbar-toggler-icon" data-bs-target="#offcanvasExample"></span>
            </button>
            <!-- Offcanvas Trigger -->
            <router-link :to="{name: 'home'}" class="navbar-brand fw-bold px-2 rounded-2 me-auto" href="#" style="background-color: #F72585;">FitTracker</router-link>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarSupportedContent">
                <ul class="navbar-nav ms-auto mb-2 mb-lg-0 my-3 my-lg-0">
                    <li class="nav-item dropdown">
                        <a class="nav-link active dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                            <i class="bi bi-person-fill"></i>
                        </a>
                        <ul class="dropdown-menu dropdown-menu-end">
                            <li>
                                <a class="dropdown-item" href="#" @click="handleLogout">
                                    <span class="me-2">
                                        <i class="bi bi-box-arrow-in-left"></i>
                                    </span>
                                    <span>Logout</span>
                                </a>
                            </li>
                        </ul>
                    </li>
                </ul>
            </div>
        </div>
    </nav>
    <!-- Navbar -->

    <!-- Offcanvas -->
    <div class="offcanvas offcanvas-start sidebar-nav text-white" tabindex="-1" id="offcanvasExample" aria-labelledby="offcanvasExampleLabel" data-bs-scroll="true" data-bs-backdrop="false" style="background-color: #3A0CA3;">
        <div class="offcanvas-header">
            <button type="button" class="btn-close close-button" data-bs-dismiss="offcanvas" aria-label="Close"></button>
        </div>
        <div class="offcanvas-body p-0">
            <nav class="navbar navbar-dark bg-transparent">
                <ul class="navbar-nav text-light">
                    <li>
                        <div class="text-secondary fw-bold text-uppercase px-3"><small>FUNCTIONS</small></div>
                    </li>
                    <li>
                        <a href="#" class="nav-link px-3 active" @click="goWeight">
                            <span class="me-2">
                                <i class="bi bi-clipboard"></i>
                            </span>
                            <span>Weight Track</span>
                        </a>
                    </li>
                    <li>
                        <a href="#" class="nav-link px-3 active" @click="goMealPlan">
                            <span class="me-2">
                                <i class="bi bi-archive"></i>
                            </span>
                            <span>Meal Plan</span>
                        </a>
                    </li>
                    <li>
                        <a href="#" class="nav-link px-3 active" @click="goObjectives">
                            <span class="me-2">
                                <i class="bi bi-arrow-up"></i>
                            </span>
                            <span>Objectives</span>
                        </a>
                    </li>
                    <li>
                        <a href="#" class="nav-link px-3 active" @click="goWorkPlan">
                            <span class="me-2">
                                <i class="bi bi-calendar"></i>
                            </span>
                            <span>Work Out Plan</span>
                        </a>
                    </li>
                    <li class="my-4 text-secodary">
                        <hr class="dropdown-divider">
                    </li>
                    <li>
                        <div class="text-secondary fw-bold text-uppercase px-3"><small>TOOLS</small></div>
                    </li>
                    <li>
                        <a href="#" class="nav-link px-3 active" @click="goCalculator">
                            <span class="me-2">
                                <i class="bi bi-calculator"></i>
                            </span>
                            <span>Food Nutrients</span>
                        </a>
                    </li>
                    <li class="my-4 text-secodary">
                        <hr class="dropdown-divider">
                    </li>
                    <li>
                        <div class="text-secondary fw-bold text-uppercase px-3"><small>CORE</small></div>
                    </li>
                    <li>
                        <a href="#" class="nav-link px-3 active" @click="backToDashboard">
                            <span class="me-2">
                                <i class="bi bi-speedometer2"></i>
                            </span>
                            <span>Dashboard</span>
                        </a>
                    </li>
                    <li>
                        <router-link :to="{name: 'home'}" class="nav-link px-3 active">
                            <span class="me-2">
                                <i class="bi bi-house"></i>
                            </span>
                            <span>Homepage</span>
                        </router-link>
                    </li>
                    <li>
                        <a href="#" class="nav-link px-3 active" @click="handleLogout">
                            <span class="me-2">
                                <i class="bi bi-box-arrow-in-left"></i>
                            </span>
                            <span>Logout</span>
                        </a>
                    </li>
                    <li class="my-4 text-secodary">
                        <hr class="dropdown-divider">
                    </li>
                </ul>
            </nav>
        </div>
    </div>
    <!-- Offcanvas -->

    <main class="mt-5 pt-3">
        <!--  
            v-if="showWeightTool" :weight="user.weight" :height="user.height" :weight_history="user.weight_history" :born="user.born"
        -->
        <WeightTool v-if="showWeightTool" />
        <MealPlanTool v-else-if="showMealTool" />
        <ObjectivesTool v-else-if="showObjectivesTool" />
        <TrainingPlanTool v-else-if="showWorkOutTool" />
        <CaloriesTool v-else-if="showCalculatorTool" />
        <DashboardBase v-else :username="user.username" :food_plan="user.food_plan" :training_plan="user.training_plan" />

    </main>

</template>

<script>
import axios from 'axios';
import { logout } from '@/logout'; 

// Components 
import DashboardBase from '@/components/DashboardBase.vue';
import WeightTool from '@/components/WeightTool.vue'; 
import MealPlanTool from '@/components/MealPlanTool.vue';
import ObjectivesTool from '@/components/ObjectivesTool.vue';
import TrainingPlanTool from '@/components/TrainingPlanTool.vue';
import CaloriesTool from '@/components/CaloriesTool.vue';

export default{
    name: 'Dashboard', 
    components: {DashboardBase, WeightTool, MealPlanTool, ObjectivesTool, TrainingPlanTool, CaloriesTool}, 
    data(){
        return{
            user: {
                username: '', 
                weight: '', 
                height: '', 
                born: '', 
                weight_history: '', 
                food_plan: '',  
                training_plan: '', 
            }, 
            showWeightTool: false, 
            showMealTool: false, 
            showObjectivesTool: false,
            showWorkOutTool: false, 
            showCalculatorTool: false, 
        }
    }, 
    methods: {
        handleLogout(){
            logout(); 
        }, 
        async getUserInfo(){
            await axios
                .get("/auth/users/me/")
                .then(response => {
                    this.user.username = response.data.username; 
                    this.user.weight = response.data.weight; 
                    this.user.height = response.data.height; 
                    this.user.born = response.data.born; 
                    this.user.food_plan = response.data.food_plan;
                    this.user.training_plan = response.data.training_plan;
                    this.user.weight_history = response.data.weight_history; 
                })
                .catch(error => {
                    this.$router.push({name: 'error'});
                })
        }, 
        goWeight(){
            this.showWeightTool = true; 
            this.showMealTool = false; 
            this.showObjectivesTool = false; 
            this.showWorkOutTool = false; 
            this.showCalculatorTool = false; 
        },
        goMealPlan(){
            this.showWeightTool = false; 
            this.showMealTool = true; 
            this.showObjectivesTool = false; 
            this.showWorkOutTool = false; 
            this.showCalculatorTool = false; 
        }, 
        goObjectives(){
            this.showWeightTool = false; 
            this.showMealTool = false; 
            this.showObjectivesTool = true; 
            this.showWorkOutTool = false; 
            this.showCalculatorTool = false; 
        }, 
        goWorkPlan(){
            this.showWeightTool = false; 
            this.showMealTool = false; 
            this.showObjectivesTool = false; 
            this.showWorkOutTool = true; 
            this.showCalculatorTool = false; 
        }, 
        goCalculator(){
            this.showWeightTool = false; 
            this.showMealTool = false; 
            this.showObjectivesTool = false; 
            this.showWorkOutTool = false; 
            this.showCalculatorTool = true; 
        },  
        backToDashboard(){
            this.showWeightTool = false; 
            this.showMealTool = false; 
            this.showObjectivesTool = false; 
            this.showWorkOutTool = false; 
            this.showCalculatorTool = false; 
        }
    }, 
    mounted(){
        document.title = "FitTracker"; 

        this.getUserInfo(); 
    }
}
</script>

<style scoped>
:root{
    --offcanvas-width: 270px;
    --topNavbarHeight: 56px; 
}
.sidebar-nav{
    width: 270px;
}

@media (min-width: 992px){
    body{
        overflow: auto !important;
    }
    main{
        margin-left: 270px;
    }
    .sidebar-nav{
        transform: none;
        visibility: visible !important;
        top: 56px;
        height: calc(100% - 56px);
    }
    .close-button{
        display: none;
    }
}
</style>