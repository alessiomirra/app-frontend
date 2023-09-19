<template>

    <div class="container-fluid">

        <!-- Header -->
        <div class="row">
            <div class="col-12">
                <p class="fw-semibold fs-4 text-uppercase">Food Nutritional Values</p>
            </div>
        </div>
        <!-- Header -->

        <div class="container-fluid">
            
            <form @submit.prevent="request">
                <div class="input-group mb-3">
                    <input v-model="query" type="text" class="form-control" placeholder="Food to search" aria-label="Food to search" aria-describedby="button-addon2">
                    <button class="btn btn-outline-primary" type="submit" id="button-addon2">Search</button>
                </div>
            </form>

            <div v-if="informations && informations.length" class="mb-5">
                <div class="mb-3">
                    <div class="row border-bottom">
                        <div class="col-8">
                            <p class="fs-5 text-uppercase fw-semibold">Property</p>
                        </div>
                        <div class="col-4">
                            <p class="fs-5 text-uppercase fw-semibold">Value</p>
                        </div>
                    </div>
                    <div class="row mt-2">
                        <div class="col-8">
                            <p class="fw-normal">Calories</p>
                        </div>
                        <div class="col-4">
                            <p class="fw-normal">{{ informations[0].calories }}</p>
                        </div>
                    </div>
                    <div class="row mt-2">
                        <div class="col-8">
                            <p class="fw-normal">Serving Size</p>
                        </div>
                        <div class="col-4">
                            <p class="fw-normal">{{ informations[0].serving_size_g }} g</p>
                        </div>
                    </div>
                    <div class="row mt-2">
                        <div class="col-8">
                            <p class="fw-normal">Total Fat</p>
                        </div>
                        <div class="col-4">
                            <p class="fw-normal">{{ informations[0].fat_total_g }} g</p>
                        </div>
                    </div>
                    <div class="row mt-2">
                        <div class="col-8">
                            <p class="fw-normal">Satured Fat</p>
                        </div>
                        <div class="col-4">
                            <p class="fw-normal">{{ informations[0].fat_saturated_g }} g</p>
                        </div>
                    </div>
                    <div class="row mt-2">
                        <div class="col-8">
                            <p class="fw-normal">Protein</p>
                        </div>
                        <div class="col-4">
                            <p class="fw-normal">{{ informations[0].protein_g }} g</p>
                        </div>
                    </div>
                    <div class="row mt-2">
                        <div class="col-8">
                            <p class="fw-normal">Sodium</p>
                        </div>
                        <div class="col-4">
                            <p class="fw-normal">{{ informations[0].sodium_mg }} mg</p>
                        </div>
                    </div>
                    <div class="row mt-2">
                        <div class="col-8">
                            <p class="fw-normal">Potassium</p>
                        </div>
                        <div class="col-4">
                            <p class="fw-normal">{{ informations[0].potassium_mg }} g</p>
                        </div>
                    </div>
                    <div class="row mt-2">
                        <div class="col-8">
                            <p class="fw-normal">Cholesterol</p>
                        </div>
                        <div class="col-4">
                            <p class="fw-normal">{{ informations[0].cholesterol_mg }} mg</p>
                        </div>
                    </div>
                    <div class="row mt-2">
                        <div class="col-8">
                            <p class="fw-normal">Carbohydrates</p>
                        </div>
                        <div class="col-4">
                            <p class="fw-normal">{{ informations[0].carbohydrates_total_g }} g</p>
                        </div>
                    </div>
                    <div class="row mt-2">
                        <div class="col-8">
                            <p class="fw-normal">Fiber</p>
                        </div>
                        <div class="col-4">
                            <p class="fw-normal">{{ informations[0].fiber_g }} g</p>
                        </div>
                    </div>
                    <div class="row mt-2">
                        <div class="col-8">
                            <p class="fw-normal">Sugar</p>
                        </div>
                        <div class="col-4">
                            <p class="fw-normal">{{ informations[0].sugar_g }} g</p>
                        </div>
                    </div>
                </div>
            </div>
            <div v-if="error" class="mb-5">
                <div class="alert alert-primary text-center" role="alert">
                    No results for your research
                </div> 
            </div>
            <div v-if="formError" class="mb-5">
                <div class="alert alert-danger text-center" role="alert">
                    Something went wrong. Try Again
                </div> 
            </div>

        </div>

    </div>

</template>

<script>
import axios from 'axios'; 

export default{
    name: 'CaloriesTool', 
    data(){
        return{
            query: '', 
            informations: '', 
            error: false, 
            formError: false, 
        }
    }, 
    methods:{
        async request(){
            this.informations = ""; 
            this.formError = false; 
            this.error = false; 
            const options = {
                method: 'GET',
                url: 'https://nutrition-by-api-ninjas.p.rapidapi.com/v1/nutrition',
                params: {
                    query: this.query
                },
                headers: {
                    'X-RapidAPI-Key': '41ae910454mshe0b56a82f497a6bp1343b5jsnd85256ea3878',
                    'X-RapidAPI-Host': 'nutrition-by-api-ninjas.p.rapidapi.com'
                }
            };
            try{
                const response = await axios.request(options); 
                this.informations = response.data; 
                if (!this.informations.length){
                    this.error = true; 
                }; 
                this.query = ""; 
            } catch(error) {
                this.formError = true; 
                this.query = ""; 
            }   
        }
    }, 
    mounted(){}, 
}
</script>

<style scoped></style>