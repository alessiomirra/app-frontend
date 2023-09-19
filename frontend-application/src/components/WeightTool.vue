<template>

    <div class="container-fluid">

        <!-- Header -->
        <div class="row">
            <div class="col-12">
                <p class="fw-semibold fs-4 text-uppercase">Weight Tracker</p>
            </div>
        </div>
        <!-- Header -->

        <!-- Top Cards -->
        <div class="container-fluid px-4">
            <div class="row gx-5">

                <!-- Weight and Form -->
                <div class="col-md-5 mb-3">
                    <div class="p-2 border bg-light h-100">
                        <div class="d-flex justify-content-between">
                            <p class="fs-6 fw-semibold">Actual Weight</p>
                            <p v-if="showForm" class="text-primary text-decoration-underline" style="cursor: pointer;" @click="showForm = !showForm">Hide</p>
                            <p v-else class="text-primary text-decoration-underline" style="cursor: pointer;" @click="showForm = !showForm">Update</p>
                        </div>
                        <div v-if="showForm" class="text-center mt-5 mb-5">
                            <!-- Form -->
                            <form @submit.prevent="updateWeight" class="px-5">
                                <label for="weight" class="form-label text-start">New Weight</label>
                                <div class="input-group">
                                    <input type="number" id="weight" class="form-control" v-model="userWeight" placeholder="New Weight">
                                    <div class="input-group-text">kg</div>
                                </div>
                                <div class="text-center mt-3">
                                    <button class="btn btn-sm btn-primary">Save</button>
                                </div>
                            </form>
                            <!-- Form -->
                        </div>
                        <div v-else class="text-center mt-5 mb-5 d-flex justify-content-center">
                            <div 
                                class="border p-5" 
                                style="border-radius: 100%;"
                                :class="{
                                    'border-danger border-4': weightBorder === 'danger',
                                    'border-success border-4': weightBorder === 'success', 
                                    'border-primary border-4': weightBorder === 'primary'
                                }"
                            >   
                                <span class="fs-3" v-if="userWeight">{{ userWeight }} kg</span>
                                <span class="fs-3" v-else>0 kg</span>
                            </div>
                        </div>
                    </div>
                </div>
                <!-- Weight and Form -->

                <!-- Data and BMI -->
                <div class="col-md-7 mb-3">

                    <div class="p-2 border bg-light h-100">
                        <div class="row">
                            <div class="col-12">
                                <p class="fs-6 fw-semibold">Data and BMI</p>
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-12">
                                <p class="text-muted text-uppercase fw-semibold fs-6 mb-0">BASE</p>
                                <table class="table table-primary table-sm">
                                    <thead>
                                        <tr>
                                            <th scope="col">Username</th>
                                            <th scope="col" class="text-end">Age</th>
                                        </tr>
                                    </thead>
                                    <tbody class="table-light">
                                        <tr>
                                            <th scope="col" class="fw-normal">{{ $store.state.username }}</th>
                                            <th scope="col" class="text-end fw-normal">{{ age }}</th>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-12">
                                <p class="text-muted text-uppercase fw-semibold fs-6 mb-0">Body</p>
                                <table class="table table-primary table-sm">
                                    <thead>
                                        <tr>
                                            <th scope="col">Weight</th>
                                            <th scope="col" class="text-end">Height</th>
                                        </tr>
                                    </thead>
                                    <tbody class="table-light">
                                        <tr>
                                            <th scope="col" class="fw-normal" v-if="userWeight">{{ userWeight }} kg</th>
                                            <th scope="col" class="fw-normal" v-else>0 kg</th>
                                            <th scope="col" class="text-end fw-normal" v-if="userHeight">{{ userHeight }} m</th>
                                            <th scope="col" class="text-end fw-normal" v-else>0 m</th>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-12">
                                <table class="table table-secondary table-sm">
                                    <tbody class="table-light">
                                        <tr>
                                            <th scope="col">
                                                <p class="fs-6 fw-semibold text-muted mb-0">BMI</p>
                                            </th>
                                            <th 
                                                scope="col" 
                                                class="text-end fw-semibold"
                                                :class="{
                                                    'text-danger': weightBorder === 'danger',
                                                    'text-success': weightBorder === 'success', 
                                                    'text-primary': weightBorder === 'primary'
                                                }"
                                            >
                                                {{ bmiClass }}
                                            </th>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>

                </div>
                <!-- Data and BMI -->

            </div>
        </div>
        <!-- Top Cards -->

        <!-- Weight Chart -->
        <div v-if="showChart" class="container-fluid mb-3 chart-box">
            <div class="row">
                <div class="col-12">
                    <div class="card">
                        <div class="card-header bg-primary bg-gradient bg-opacity-75">
                            <p>Weight History</p>
                        </div>
                        <div class="card-body">
                            <WeightChart :weight-history="weight_history" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <!-- Weight Chart -->


        <!-- Weight Table -->
        <div class="container-fluid mb-3" v-if="weight_history.length">
            <div class="row">

                <div class="col-12">

                    <div class="card">
                        <div class="card-header bg-primary bg-gradient bg-opacity-75">
                            <p>Weight History</p>
                        </div>
                        <div class="card-body">
                            <table class="table">
                                <thead>
                                    <tr class="text-center">
                                        <th scope="col">Date</th>
                                        <th scope="col">Weight</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr class="text-center" v-for="weight in weight_history" :key="weight.date">
                                        <th scope="col" class="fw-normal">{{ weight.date }}</th>
                                        <th scope="col" class="fw-normal">{{ weight.weight }} kg</th>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>

                </div>

            </div>
        </div>
        <!-- Weight Table -->

    </div>

</template>

<script>
import axios from 'axios'; 
import WeightChart from './WeightChart.vue';

export default{
    name: 'WeightTool', 
    components: {WeightChart}, 
    computed: {
        weightBorder(){
            const color = this.getBMI().bmiClass; 
            if (color === "UNDERWEIGHT" || color === "OBESITY TYPE I" || color === "OBESITY TYPE II" || color === "OBESITY TYPE III"){
                return "danger"; 
            } else if (color === "OVERWEIGHT"){
                return "primary";
            } else {
                return "success";
            }
        }, 
    }, 
    data(){
        return{
            showForm: false, 
            born: '', 
            age: '', 
            userWeight: '', 
            userHeight: '', 
            userBMI: '', 
            bmiClass: '', 
            weight_history: [], 
            showChart: false, 
        }
    }, 
    methods:{
        async getUserInfo(){
            await axios
                .get("/auth/users/me/")
                .then(response => {
                    this.userWeight = response.data.weight; 
                    this.userHeight = response.data.heightM; 
                    this.born = response.data.born; 
                    this.age = response.data.age;
                    if (response.data.weight_history !== null){
                        this.weight_history.push(...response.data.weight_history); 
                        this.showChart = true; 
                    } else {
                        this.weight_history = []; 
                        this.showChart = false; 
                    }

                    this.userBMI = this.getBMI().bmi; 
                    this.bmiClass = this.getBMI().bmiClass; 
                })
                .catch(error => {
                    this.$router.push({name: 'error'});
                })
        }, 
        getBMI(){
            let bmi = (this.userWeight / (this.userHeight)**2).toFixed() ; 

            let bmiClass = ""; 

            if (bmi < 18.5) {
                bmiClass = "UNDERWEIGHT";
            } else if (bmi >= 18.5 && bmi < 24.9) {
                bmiClass = "NORMAL WEIGHT";
            } else if (bmi >= 25 && bmi < 29.9) {
                bmiClass = "OVERWEIGHT";
            } else if (bmi >= 30 && bmi < 34.9) {
                bmiClass = "OBESITY TYPE I";
            } else if (bmi >= 35 && bmi < 39.9) {
                bmiClass = "OBESITY TYPE II";
            } else if (bmi >= 40) {
                bmiClass = "OBESITY TYPE III";
            } else {
                bmiClass = "Missing requirements";
            }

            this.userBMI = bmi; 
            this.bmiClass = bmiClass; 

            return {bmi, bmiClass}; 
        }, 
        async updateWeight(){
            let new_weight = {
                weight: this.userWeight, 
                date: this.getDate(),  
            }
            this.weight_history.push(new_weight); 
            await axios 
                .patch('/auth/users/me/', {weight: this.userWeight, weight_history: this.weight_history})
                .then(response => {
                    this.userWeight = response.data.weight; 
                    this.showForm = false; 
                    this.getBMI(); 
                })
                .catch(error => {
                    this.$router.push({name: 'error'});
                })
        }, 
        getDate(){
            const base = new Date(); 

            const year = base.getFullYear(); 
            const month = base.getMonth() + 1;
            const day = base.getDate();

            const complete = day + "/" + month + "/" + year; 

            return complete; 
        }, 
    }, 
    created(){
        this.getUserInfo(); 
    }, 
    mounted(){

    }
}
</script>

<style scoped>
@media (max-width: 500px){
    .chart-box{
        display: none;
    }
}
</style>