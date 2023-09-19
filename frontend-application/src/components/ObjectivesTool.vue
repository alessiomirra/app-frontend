<template>
    <div class="container-fluid">

        <!-- Header -->
        <div class="row">
            <div class="col-12">
                <div class="d-flex justify-content-between">
                    <p class="fw-semibold fs-4 text-uppercase">Objectives</p>
                    <p type="button" class="border rounded-2 px-2 py-1 text-light" style="cursor: pointer; background-color: #F72585;" @click="showForm = !showForm">
                        <i class="bi bi-box-arrow-up"></i>
                        Create New
                    </p>
                </div>
            </div>
        </div>
        <!-- Header -->

        <!-- Create Form -->
        <div  v-if="showForm" class="row mb-3">
            <div class="col-12">
                <div class="border rounded-3 p-3">
                    <p class="fs-6 fw-semibold text-uppercase text-center">Create a new objective</p>
                    <p v-if="error" class="text-center text-danger mb-0">{{ error }}</p>
                    <div class="d-flex justify-content-center">
                        <form style="width: 50%;" @submit.prevent="create">
                            <div class="form-floating mb-3">
                                <textarea v-model="objective" class="form-control" name="objective" id="objective" cols="30" rows="3" placeholder="New Objective"></textarea>
                                <label for="objective">New Objective</label>
                            </div>
                            <button type="submit" class="btn btn-sm btn-primary">Create</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
        <!-- Create Form -->

        <!-- Objectives -->
        <div v-if="objectives.length" class="container-fluid px-4 mb-3">
            <div class="row gx-5">
                <div v-for="i in objectives" :key="i.id" class="col-md-4 mb-3">
                    <div class="p-3 border rounded-3 h-100" :class="{'bg-success bg gradient bg-opacity-25': i.reached}">
                        <p>{{ i.objective }}</p>
                        <p class="text-muted fs-6">{{ i.created }}</p>
                        <div class="card-footer text-end">
                            <span class="border rounded-3 px-3 py-2 bg-danger text-light" @click="cancel(i.id)" style="cursor: pointer;">
                                <i class="bi bi-backspace"></i>
                            </span>
                            <span v-if="i.reached === false" class="ms-2 border rounded-3 px-3 py-2 bg-success text-light" @click="success(i.id)" style="cursor: pointer;">
                                <i class="bi bi-check"></i>
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <!-- Objectives -->

        <!-- Reached -->
        <!-- Reached -->

    </div>
</template>

<script>
import axios from 'axios'; 

export default{
    name: 'ObjectivesTool', 
    data(){
        return{
            showForm: false,
            objective: '', 
            error: '', 
            objectives: [], 
        }
    }, 
    methods: {
        async create(){
            this.error = ''; 
            if (this.objective === ''){
                this.error = "You must type a new objective"; 
            } else {
                this.error = ''; 
                let formdata = {
                    objective: this.objective
                }
                await axios 
                    .post('/api/objectives/', formdata)
                    .then(response => {
                        this.objectives.push(response.data); 
                        this.showForm = false; 
                        this.objective = ''; 
                    })
                    .catch(error => {
                        this.error = "Something went wrong, try again."
                    })
            }
        }, 
        async retrieve(){
            await axios 
                .get(`/api/user-objectives/${this.$store.state.username}/`)
                .then(response => {
                    this.objectives = response.data; 
                })
                .catch(error => {
                    this.$router.push({name: 'error'});
                })
        }, 
        async cancel(id){
            await axios 
                .delete(`/api/objectives/${id}/`)
                .then(response => {
                    this.retrieve();
                })
                .catch(error => {
                    this.$router.push({name: 'error'});
                })
        }, 
        async success(id){
            await axios 
                .patch(`/api/objectives/${id}/`, {reached: true})
                .then(response => {
                    this.retrieve(); 
                })
                .catch(error => {
                    this.$router.push({name: 'error'});
                })
        }
    }, 
    created(){
        this.retrieve(); 
    }
}
</script>

<style scoped></style>