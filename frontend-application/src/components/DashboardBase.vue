<template>
    <div class="container-fluid">

        <!-- Header -->
        <div class="row">
            <div class="col-md-4 mb-3">
                <div class="card w-75 h-100 text-center mx-auto">
                    <div class="card-body">
                        <h5 class="card-title">Hi, {{ $store.state.username }}</h5>
                        <h6 class="card-subtitle mb-2 text-muted">Today: {{ today.date }}</h6>
                    </div>
                </div>
            </div>
            <div class="col-md-4 mb-3">
                <div class="card w-75 h-100 text-center mx-auto">
                    <div class="card-body">
                        <h5 class="card-title">Meal Plan</h5>
                        <h6 v-if="food_plan" class="card-subtitle mb-2 text-success">Active</h6>
                        <h6 v-else class="card-subtitle mb-2 text-danger">Inactive</h6>
                    </div>
                </div>
            </div>
            <div class="col-md-4 mb-3">
                <div class="card w-75 h-100 text-center mx-auto">
                    <div class="card-body">
                        <h5 class="card-title">Work Out Plan</h5>
                        <h6 v-if="training_plan" class="card-subtitle mb-2 text-success">Active</h6>
                        <h6 v-else class="card-subtitle mb-2 text-danger">Inactive</h6>
                    </div>
                </div>
            </div>
        </div>
        <!-- Header -->

        <div class="container-fluid">
            <hr>
        </div>

        <!-- Food Day Plan -->
        <div class="row mb-3">
            <div class="col-md-12">
                <div class="card text-bg-primary">
                    <div class="card-header text-uppercase">
                        <span class="border px-2 py-1 rounded-3" style="background-color: #F72585;">Meal Day Plan</span>
                    </div>
                    <div class="card-body">
                        <div v-if="food_plan">
                            <!-- {{ food_plan[mealControl] }} -->
                            <div class="mb-3">
                                <p class="mb-0">BREAKFAST</p>
                                <p>{{ food_plan[mealControl].breakfast }}</p>
                            </div>
                            <div class="mb-3">
                                <p class="mb-0">MORNING SNACK</p>
                                <p>{{ food_plan[mealControl].morningSnack }}</p>
                            </div>
                            <div class="mb-3">
                                <p class="mb-0">LUNCH</p>
                                <p>{{ food_plan[mealControl].lunch }}</p>
                            </div>
                            <div class="mb-3">
                                <p class="mb-0">AFTERNOON SNACK</p>
                                <p>{{ food_plan[mealControl].afternoonSnack }}</p>
                            </div>
                            <div class="mb-3">
                                <p class="mb-0">DINNER</p>
                                <p>{{ food_plan[mealControl].dinner }}</p>
                            </div>
                        </div>
                        <div v-else>
                            <p>Your meal plan is <span class="text-decoration-underline">INACTIVE</span>. Set a meal plan and in this section you'll see your meal plan for today</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <!---->

        <!-- Work Out Day Plan -->
        <div class="row mb-3">
            <div class="col-md-12">
                <div class="card text-bg-light">
                    <div class="card-header">Work Out Day Plan</div>
                    <div class="card-body">
                        <div v-if="training_plan">
                            <div v-if="training_plan[mealControl].exercises[1].name">
                                <p class="fs-6 fw-semibold">{{ training_plan[mealControl].name }}</p>
                                <div>
                                    <div class="row">
                                        <div class="col-8">
                                            <p class="fw-semibold">Exercise</p>
                                        </div>
                                        <div class="col-2">
                                            <p class="fw-semibold">Rep</p>
                                        </div>
                                        <div class="col-2">
                                            <p class="fw-semibold">Series</p>
                                        </div>
                                        <div class="row" v-for="i in training_plan[mealControl].exercises">
                                            <div class="col-8">
                                                <p>{{ i.name }}</p>
                                            </div>
                                            <div class="col-2">
                                                <p class="ms-2">{{ i.rep }}</p>
                                            </div>
                                            <div class="col-2">
                                                <p class="ms-5">{{ i.series }}</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div v-else class="text-center p-3">
                                <p class="fs-5 fw-semibold">This is your day off</p>
                            </div>
                        </div>
                        <div v-else>
                            <p>Your work out plan is <span class="text-decoration-underline">INACTIVE</span>. Set a work out plan and in this section you'll see your training plan for today</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <!---->

    </div>
</template>

<script>
import axios from 'axios'; 

export default{
    name: 'DashboardBase', 
    computed: {
        today(){
            const today = new Date(); 


            let day = today.getDate(); 
            let month = today.toLocaleString('default', { month: 'long' });
            let year = today.getFullYear(); 


            let literal  = today.getDay(); 

            let date = day + " " + month + " " + year;

            return { date , literal}; 
        }, 
    }, 
    props: {
        username: {
            type: String, 
            required: true 
        }, 
        food_plan: {
            validator: function(value){
                return typeof value === "string" || typeof value === "object"; 
            }, 
            required: true
        }, 
        training_plan: {
            validator: function(value){
                return typeof value === "string" || typeof value === "object"; 
            }, 
            required: true 
        }, 
    }, 
    data(){
        return{
            mealControl: '', 
        }
    }, 
    methods: {

    }, 
    created(){
        const days = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Saturday"];
        const now = new Date(); 

        this.mealControl = days[now.getDay()]; 
    }, 
    mounted(){}, 
}
</script>

<style scoped></style>