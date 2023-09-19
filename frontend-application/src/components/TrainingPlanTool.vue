<template>

    <!-- Header -->
    <div class="container-fluid">
        <div class="row">
            <div class="col-12 text-center">
                <p class="fs-4 fw-semibold text-uppercase mb-0">Work Out Plan</p>
                <p>You can define up to 7 training slots, one for each day of the week</p>
                <p v-if="showForm === false" class="text-primary" style="cursor: pointer;" @click="showForm = !showForm">
                    <i class="bi bi-arrow-clockwise"></i> 
                    Change Plan
                </p>
                <p v-else class="text-primary" style="cursor: pointer;" @click="showForm = !showForm">
                    <i class="bi bi-arrow-left-circle"></i> 
                    Hide
                </p>
            </div>
        </div>
    </div>
    <!-- Header -->

    <!-- Create Form -->
    <div v-if="showForm" class="container-fluid mb-5">
        <form @submit.prevent="updatePlan">
            <div class="accordion accordion-flush mt-3" id="accordionFlushExample">
                <!-- Monday -->
                <div class="accordion-item">
                    <h2 class="accordion-header" id="flush-headingOne">
                        <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseMonday" aria-expanded="false" aria-controls="flush-collapseMonday">
                            <span class="fw-semibold">Monday</span>
                        </button>
                    </h2>
                    <div id="flush-collapseMonday" class="accordion-collapse collapse" aria-labelledby="flush-headingOne" data-bs-parent="#accordionFlushExample">
                        <div class="p-3">
                            <div class="form-floating mb-3">
                                <input type="text" class="form-control" id="floatingName" v-model="plan.Monday.name" placeholder="Name">
                                <label for="floatingName">Name</label>
                            </div>
                            <div class="mb-3">
                                <small class="fw-semibold">#1</small>
                                <div class="row">
                                    <div class="col-md-8 mb-2">
                                        <label for="ex-name" class="form-label">Name</label>
                                        <input type="text" class="form-control" id="ex-name" v-model="plan.Monday.exercises[1].name">
                                    </div>
                                    <div class="col-md-2 mb-2">
                                        <label for="ex-rep" class="form-label">Rep</label>
                                        <input type="text" class="form-control" id="ex-rep" v-model="plan.Monday.exercises[1].rep">
                                    </div>
                                    <div class="col-md-2 mb-2">
                                        <label for="ex-ser" class="form-label">Series</label>
                                        <input type="text" class="form-control" id="ex-ser" v-model="plan.Monday.exercises[1].series">
                                    </div>
                                </div>
                                <small class="fw-semibold">#2</small>
                                <div class="row">
                                    <div class="col-md-8 mb-2">
                                        <label for="ex-name" class="form-label">Name</label>
                                        <input type="text" class="form-control" id="ex-name" v-model="plan.Monday.exercises[2].name">
                                    </div>
                                    <div class="col-md-2 mb-2">
                                        <label for="ex-rep" class="form-label">Rep</label>
                                        <input type="text" class="form-control" id="ex-rep" v-model="plan.Monday.exercises[2].rep">
                                    </div>
                                    <div class="col-md-2 mb-2">
                                        <label for="ex-ser" class="form-label">Series</label>
                                        <input type="text" class="form-control" id="ex-ser" v-model="plan.Monday.exercises[2].series">
                                    </div>
                                </div>
                                <small class="fw-semibold">#3</small>
                                <div class="row">
                                    <div class="col-md-8 mb-2">
                                        <label for="ex-name" class="form-label">Name</label>
                                        <input type="text" class="form-control" id="ex-name" v-model="plan.Monday.exercises[3].name">
                                    </div>
                                    <div class="col-md-2 mb-2">
                                        <label for="ex-rep" class="form-label">Rep</label>
                                        <input type="text" class="form-control" id="ex-rep" v-model="plan.Monday.exercises[3].rep">
                                    </div>
                                    <div class="col-md-2 mb-2">
                                        <label for="ex-ser" class="form-label">Series</label>
                                        <input type="text" class="form-control" id="ex-ser" v-model="plan.Monday.exercises[3].series">
                                    </div>
                                </div>
                                <small class="fw-semibold">#4</small>
                                <div class="row">
                                    <div class="col-md-8 mb-2">
                                        <label for="ex-name" class="form-label">Name</label>
                                        <input type="text" class="form-control" id="ex-name" v-model="plan.Monday.exercises[4].name">
                                    </div>
                                    <div class="col-md-2 mb-2">
                                        <label for="ex-rep" class="form-label">Rep</label>
                                        <input type="text" class="form-control" id="ex-rep" v-model="plan.Monday.exercises[4].rep">
                                    </div>
                                    <div class="col-md-2 mb-2">
                                        <label for="ex-ser" class="form-label">Series</label>
                                        <input type="text" class="form-control" id="ex-ser" v-model="plan.Monday.exercises[4].series">
                                    </div>
                                </div>
                                <small class="fw-semibold">#5</small>
                                <div class="row">
                                    <div class="col-md-8 mb-2">
                                        <label for="ex-name" class="form-label">Name</label>
                                        <input type="text" class="form-control" id="ex-name" v-model="plan.Monday.exercises[5].name">
                                    </div>
                                    <div class="col-md-2 mb-2">
                                        <label for="ex-rep" class="form-label">Rep</label>
                                        <input type="text" class="form-control" id="ex-rep" v-model="plan.Monday.exercises[5].rep">
                                    </div>
                                    <div class="col-md-2 mb-2">
                                        <label for="ex-ser" class="form-label">Series</label>
                                        <input type="text" class="form-control" id="ex-ser" v-model="plan.Monday.exercises[5].series">
                                    </div>
                                </div>
                                <small class="fw-semibold">#6</small>
                                <div class="row">
                                    <div class="col-md-8 mb-2">
                                        <label for="ex-name" class="form-label">Name</label>
                                        <input type="text" class="form-control" id="ex-name" v-model="plan.Monday.exercises[6].name">
                                    </div>
                                    <div class="col-md-2 mb-2">
                                        <label for="ex-rep" class="form-label">Rep</label>
                                        <input type="text" class="form-control" id="ex-rep" v-model="plan.Monday.exercises[6].rep">
                                    </div>
                                    <div class="col-md-2 mb-2">
                                        <label for="ex-ser" class="form-label">Series</label>
                                        <input type="text" class="form-control" id="ex-ser" v-model="plan.Monday.exercises[6].series">
                                    </div>
                                </div>
                                <small class="fw-semibold">#7</small>
                                <div class="row">
                                    <div class="col-md-8 mb-2">
                                        <label for="ex-name" class="form-label">Name</label>
                                        <input type="text" class="form-control" id="ex-name" v-model="plan.Monday.exercises[7].name">
                                    </div>
                                    <div class="col-md-2 mb-2">
                                        <label for="ex-rep" class="form-label">Rep</label>
                                        <input type="text" class="form-control" id="ex-rep" v-model="plan.Monday.exercises[7].rep">
                                    </div>
                                    <div class="col-md-2 mb-2">
                                        <label for="ex-ser" class="form-label">Series</label>
                                        <input type="text" class="form-control" id="ex-ser" v-model="plan.Monday.exercises[7].series">
                                    </div>
                                </div>
                                <small class="fw-semibold">#8</small>
                                <div class="row">
                                    <div class="col-md-8 mb-2">
                                        <label for="ex-name" class="form-label">Name</label>
                                        <input type="text" class="form-control" id="ex-name" v-model="plan.Monday.exercises[8].name">
                                    </div>
                                    <div class="col-md-2 mb-2">
                                        <label for="ex-rep" class="form-label">Rep</label>
                                        <input type="text" class="form-control" id="ex-rep" v-model="plan.Monday.exercises[8].rep">
                                    </div>
                                    <div class="col-md-2 mb-2">
                                        <label for="ex-ser" class="form-label">Series</label>
                                        <input type="text" class="form-control" id="ex-ser" v-model="plan.Monday.exercises[8].series">
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <!-- Monday -->
                <!-- Tuesday -->
                <div class="accordion-item">
                    <h2 class="accordion-header" id="flush-headingOne">
                        <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseTuesday" aria-expanded="false" aria-controls="flush-collapseTuesday">
                            <span class="fw-semibold">Tuesday</span>
                        </button>
                    </h2>
                    <div id="flush-collapseTuesday" class="accordion-collapse collapse" aria-labelledby="flush-headingOne" data-bs-parent="#accordionFlushExample">
                        <div class="p-3">
                            <div class="form-floating mb-3">
                                <input type="text" class="form-control" id="floatingName" v-model="plan.Tuesday.name" placeholder="Name">
                                <label for="floatingName">Name</label>
                            </div>
                            <div class="mb-3">
                                <small class="fw-semibold">#1</small>
                                <div class="row">
                                    <div class="col-md-8 mb-2">
                                        <label for="ex-name" class="form-label">Name</label>
                                        <input type="text" class="form-control" id="ex-name" v-model="plan.Tuesday.exercises[1].name">
                                    </div>
                                    <div class="col-md-2 mb-2">
                                        <label for="ex-rep" class="form-label">Rep</label>
                                        <input type="text" class="form-control" id="ex-rep" v-model="plan.Tuesday.exercises[1].rep">
                                    </div>
                                    <div class="col-md-2 mb-2">
                                        <label for="ex-ser" class="form-label">Series</label>
                                        <input type="text" class="form-control" id="ex-ser" v-model="plan.Tuesday.exercises[1].series">
                                    </div>
                                </div>
                                <small class="fw-semibold">#2</small>
                                <div class="row">
                                    <div class="col-md-8 mb-2">
                                        <label for="ex-name" class="form-label">Name</label>
                                        <input type="text" class="form-control" id="ex-name" v-model="plan.Tuesday.exercises[2].name">
                                    </div>
                                    <div class="col-md-2 mb-2">
                                        <label for="ex-rep" class="form-label">Rep</label>
                                        <input type="text" class="form-control" id="ex-rep" v-model="plan.Tuesday.exercises[2].rep">
                                    </div>
                                    <div class="col-md-2 mb-2">
                                        <label for="ex-ser" class="form-label">Series</label>
                                        <input type="text" class="form-control" id="ex-ser" v-model="plan.Tuesday.exercises[2].series">
                                    </div>
                                </div>
                                <small class="fw-semibold">#3</small>
                                <div class="row">
                                    <div class="col-md-8 mb-2">
                                        <label for="ex-name" class="form-label">Name</label>
                                        <input type="text" class="form-control" id="ex-name" v-model="plan.Tuesday.exercises[3].name">
                                    </div>
                                    <div class="col-md-2 mb-2">
                                        <label for="ex-rep" class="form-label">Rep</label>
                                        <input type="text" class="form-control" id="ex-rep" v-model="plan.Tuesday.exercises[3].rep">
                                    </div>
                                    <div class="col-md-2 mb-2">
                                        <label for="ex-ser" class="form-label">Series</label>
                                        <input type="text" class="form-control" id="ex-ser" v-model="plan.Tuesday.exercises[3].series">
                                    </div>
                                </div>
                                <small class="fw-semibold">#4</small>
                                <div class="row">
                                    <div class="col-md-8 mb-2">
                                        <label for="ex-name" class="form-label">Name</label>
                                        <input type="text" class="form-control" id="ex-name" v-model="plan.Tuesday.exercises[4].name">
                                    </div>
                                    <div class="col-md-2 mb-2">
                                        <label for="ex-rep" class="form-label">Rep</label>
                                        <input type="text" class="form-control" id="ex-rep" v-model="plan.Tuesday.exercises[4].rep">
                                    </div>
                                    <div class="col-md-2 mb-2">
                                        <label for="ex-ser" class="form-label">Series</label>
                                        <input type="text" class="form-control" id="ex-ser" v-model="plan.Tuesday.exercises[4].series">
                                    </div>
                                </div>
                                <small class="fw-semibold">#5</small>
                                <div class="row">
                                    <div class="col-md-8 mb-2">
                                        <label for="ex-name" class="form-label">Name</label>
                                        <input type="text" class="form-control" id="ex-name" v-model="plan.Tuesday.exercises[5].name">
                                    </div>
                                    <div class="col-md-2 mb-2">
                                        <label for="ex-rep" class="form-label">Rep</label>
                                        <input type="text" class="form-control" id="ex-rep" v-model="plan.Tuesday.exercises[5].rep">
                                    </div>
                                    <div class="col-md-2 mb-2">
                                        <label for="ex-ser" class="form-label">Series</label>
                                        <input type="text" class="form-control" id="ex-ser" v-model="plan.Tuesday.exercises[5].series">
                                    </div>
                                </div>
                                <small class="fw-semibold">#6</small>
                                <div class="row">
                                    <div class="col-md-8 mb-2">
                                        <label for="ex-name" class="form-label">Name</label>
                                        <input type="text" class="form-control" id="ex-name" v-model="plan.Tuesday.exercises[6].name">
                                    </div>
                                    <div class="col-md-2 mb-2">
                                        <label for="ex-rep" class="form-label">Rep</label>
                                        <input type="text" class="form-control" id="ex-rep" v-model="plan.Tuesday.exercises[6].rep">
                                    </div>
                                    <div class="col-md-2 mb-2">
                                        <label for="ex-ser" class="form-label">Series</label>
                                        <input type="text" class="form-control" id="ex-ser" v-model="plan.Tuesday.exercises[6].series">
                                    </div>
                                </div>
                                <small class="fw-semibold">#7</small>
                                <div class="row">
                                    <div class="col-md-8 mb-2">
                                        <label for="ex-name" class="form-label">Name</label>
                                        <input type="text" class="form-control" id="ex-name" v-model="plan.Tuesday.exercises[7].name">
                                    </div>
                                    <div class="col-md-2 mb-2">
                                        <label for="ex-rep" class="form-label">Rep</label>
                                        <input type="text" class="form-control" id="ex-rep" v-model="plan.Tuesday.exercises[7].rep">
                                    </div>
                                    <div class="col-md-2 mb-2">
                                        <label for="ex-ser" class="form-label">Series</label>
                                        <input type="text" class="form-control" id="ex-ser" v-model="plan.Tuesday.exercises[7].series">
                                    </div>
                                </div>
                                <small class="fw-semibold">#8</small>
                                <div class="row">
                                    <div class="col-md-8 mb-2">
                                        <label for="ex-name" class="form-label">Name</label>
                                        <input type="text" class="form-control" id="ex-name" v-model="plan.Tuesday.exercises[8].name">
                                    </div>
                                    <div class="col-md-2 mb-2">
                                        <label for="ex-rep" class="form-label">Rep</label>
                                        <input type="text" class="form-control" id="ex-rep" v-model="plan.Tuesday.exercises[8].rep">
                                    </div>
                                    <div class="col-md-2 mb-2">
                                        <label for="ex-ser" class="form-label">Series</label>
                                        <input type="text" class="form-control" id="ex-ser" v-model="plan.Tuesday.exercises[8].series">
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <!-- Tuesday -->
                <!-- Wednesday -->
                <div class="accordion-item">
                    <h2 class="accordion-header" id="flush-headingOne">
                        <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseWednesday" aria-expanded="false" aria-controls="flush-collapseWednesday">
                            <span class="fw-semibold">Wednesday</span>
                        </button>
                    </h2>
                    <div id="flush-collapseWednesday" class="accordion-collapse collapse" aria-labelledby="flush-headingOne" data-bs-parent="#accordionFlushExample">
                        <div class="p-3">
                            <div class="form-floating mb-3">
                                <input type="text" class="form-control" id="floatingName" v-model="plan.Wednesday.name" placeholder="Name">
                                <label for="floatingName">Name</label>
                            </div>
                            <div class="mb-3">
                                <small class="fw-semibold">#1</small>
                                <div class="row">
                                    <div class="col-md-8 mb-2">
                                        <label for="ex-name" class="form-label">Name</label>
                                        <input type="text" class="form-control" id="ex-name" v-model="plan.Wednesday.exercises[1].name">
                                    </div>
                                    <div class="col-md-2 mb-2">
                                        <label for="ex-rep" class="form-label">Rep</label>
                                        <input type="text" class="form-control" id="ex-rep" v-model="plan.Wednesday.exercises[1].rep">
                                    </div>
                                    <div class="col-md-2 mb-2">
                                        <label for="ex-ser" class="form-label">Series</label>
                                        <input type="text" class="form-control" id="ex-ser" v-model="plan.Wednesday.exercises[1].series">
                                    </div>
                                </div>
                                <small class="fw-semibold">#2</small>
                                <div class="row">
                                    <div class="col-md-8 mb-2">
                                        <label for="ex-name" class="form-label">Name</label>
                                        <input type="text" class="form-control" id="ex-name" v-model="plan.Wednesday.exercises[2].name">
                                    </div>
                                    <div class="col-md-2 mb-2">
                                        <label for="ex-rep" class="form-label">Rep</label>
                                        <input type="text" class="form-control" id="ex-rep" v-model="plan.Wednesday.exercises[2].rep">
                                    </div>
                                    <div class="col-md-2 mb-2">
                                        <label for="ex-ser" class="form-label">Series</label>
                                        <input type="text" class="form-control" id="ex-ser" v-model="plan.Wednesday.exercises[2].series">
                                    </div>
                                </div>
                                <small class="fw-semibold">#3</small>
                                <div class="row">
                                    <div class="col-md-8 mb-2">
                                        <label for="ex-name" class="form-label">Name</label>
                                        <input type="text" class="form-control" id="ex-name" v-model="plan.Wednesday.exercises[3].name">
                                    </div>
                                    <div class="col-md-2 mb-2">
                                        <label for="ex-rep" class="form-label">Rep</label>
                                        <input type="text" class="form-control" id="ex-rep" v-model="plan.Wednesday.exercises[3].rep">
                                    </div>
                                    <div class="col-md-2 mb-2">
                                        <label for="ex-ser" class="form-label">Series</label>
                                        <input type="text" class="form-control" id="ex-ser" v-model="plan.Wednesday.exercises[3].series">
                                    </div>
                                </div>
                                <small class="fw-semibold">#4</small>
                                <div class="row">
                                    <div class="col-md-8 mb-2">
                                        <label for="ex-name" class="form-label">Name</label>
                                        <input type="text" class="form-control" id="ex-name" v-model="plan.Wednesday.exercises[4].name">
                                    </div>
                                    <div class="col-md-2 mb-2">
                                        <label for="ex-rep" class="form-label">Rep</label>
                                        <input type="text" class="form-control" id="ex-rep" v-model="plan.Wednesday.exercises[4].rep">
                                    </div>
                                    <div class="col-md-2 mb-2">
                                        <label for="ex-ser" class="form-label">Series</label>
                                        <input type="text" class="form-control" id="ex-ser" v-model="plan.Wednesday.exercises[4].series">
                                    </div>
                                </div>
                                <small class="fw-semibold">#5</small>
                                <div class="row">
                                    <div class="col-md-8 mb-2">
                                        <label for="ex-name" class="form-label">Name</label>
                                        <input type="text" class="form-control" id="ex-name" v-model="plan.Wednesday.exercises[5].name">
                                    </div>
                                    <div class="col-md-2 mb-2">
                                        <label for="ex-rep" class="form-label">Rep</label>
                                        <input type="text" class="form-control" id="ex-rep" v-model="plan.Wednesday.exercises[5].rep">
                                    </div>
                                    <div class="col-md-2 mb-2">
                                        <label for="ex-ser" class="form-label">Series</label>
                                        <input type="text" class="form-control" id="ex-ser" v-model="plan.Wednesday.exercises[5].series">
                                    </div>
                                </div>
                                <small class="fw-semibold">#6</small>
                                <div class="row">
                                    <div class="col-md-8 mb-2">
                                        <label for="ex-name" class="form-label">Name</label>
                                        <input type="text" class="form-control" id="ex-name" v-model="plan.Wednesday.exercises[6].name">
                                    </div>
                                    <div class="col-md-2 mb-2">
                                        <label for="ex-rep" class="form-label">Rep</label>
                                        <input type="text" class="form-control" id="ex-rep" v-model="plan.Wednesday.exercises[6].rep">
                                    </div>
                                    <div class="col-md-2 mb-2">
                                        <label for="ex-ser" class="form-label">Series</label>
                                        <input type="text" class="form-control" id="ex-ser" v-model="plan.Wednesday.exercises[6].series">
                                    </div>
                                </div>
                                <small class="fw-semibold">#7</small>
                                <div class="row">
                                    <div class="col-md-8 mb-2">
                                        <label for="ex-name" class="form-label">Name</label>
                                        <input type="text" class="form-control" id="ex-name" v-model="plan.Wednesday.exercises[7].name">
                                    </div>
                                    <div class="col-md-2 mb-2">
                                        <label for="ex-rep" class="form-label">Rep</label>
                                        <input type="text" class="form-control" id="ex-rep" v-model="plan.Wednesday.exercises[7].rep">
                                    </div>
                                    <div class="col-md-2 mb-2">
                                        <label for="ex-ser" class="form-label">Series</label>
                                        <input type="text" class="form-control" id="ex-ser" v-model="plan.Wednesday.exercises[7].series">
                                    </div>
                                </div>
                                <small class="fw-semibold">#8</small>
                                <div class="row">
                                    <div class="col-md-8 mb-2">
                                        <label for="ex-name" class="form-label">Name</label>
                                        <input type="text" class="form-control" id="ex-name" v-model="plan.Wednesday.exercises[8].name">
                                    </div>
                                    <div class="col-md-2 mb-2">
                                        <label for="ex-rep" class="form-label">Rep</label>
                                        <input type="text" class="form-control" id="ex-rep" v-model="plan.Wednesday.exercises[8].rep">
                                    </div>
                                    <div class="col-md-2 mb-2">
                                        <label for="ex-ser" class="form-label">Series</label>
                                        <input type="text" class="form-control" id="ex-ser" v-model="plan.Wednesday.exercises[8].series">
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <!-- Wednesday -->
                <!-- Thursday -->
                <div class="accordion-item">
                    <h2 class="accordion-header" id="flush-headingOne">
                        <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseThursday" aria-expanded="false" aria-controls="flush-collapseThursday">
                            <span class="fw-semibold">Thursday</span>
                        </button>
                    </h2>
                    <div id="flush-collapseThursday" class="accordion-collapse collapse" aria-labelledby="flush-headingOne" data-bs-parent="#accordionFlushExample">
                        <div class="p-3">
                            <div class="form-floating mb-3">
                                <input type="text" class="form-control" id="floatingName" v-model="plan.Thursday.name" placeholder="Name">
                                <label for="floatingName">Name</label>
                            </div>
                            <div class="mb-3">
                                <small class="fw-semibold">#1</small>
                                <div class="row">
                                    <div class="col-md-8 mb-2">
                                        <label for="ex-name" class="form-label">Name</label>
                                        <input type="text" class="form-control" id="ex-name" v-model="plan.Thursday.exercises[1].name">
                                    </div>
                                    <div class="col-md-2 mb-2">
                                        <label for="ex-rep" class="form-label">Rep</label>
                                        <input type="text" class="form-control" id="ex-rep" v-model="plan.Thursday.exercises[1].rep">
                                    </div>
                                    <div class="col-md-2 mb-2">
                                        <label for="ex-ser" class="form-label">Series</label>
                                        <input type="text" class="form-control" id="ex-ser" v-model="plan.Thursday.exercises[1].series">
                                    </div>
                                </div>
                                <small class="fw-semibold">#2</small>
                                <div class="row">
                                    <div class="col-md-8 mb-2">
                                        <label for="ex-name" class="form-label">Name</label>
                                        <input type="text" class="form-control" id="ex-name" v-model="plan.Thursday.exercises[2].name">
                                    </div>
                                    <div class="col-md-2 mb-2">
                                        <label for="ex-rep" class="form-label">Rep</label>
                                        <input type="text" class="form-control" id="ex-rep" v-model="plan.Thursday.exercises[2].rep">
                                    </div>
                                    <div class="col-md-2 mb-2">
                                        <label for="ex-ser" class="form-label">Series</label>
                                        <input type="text" class="form-control" id="ex-ser" v-model="plan.Thursday.exercises[2].series">
                                    </div>
                                </div>
                                <small class="fw-semibold">#3</small>
                                <div class="row">
                                    <div class="col-md-8 mb-2">
                                        <label for="ex-name" class="form-label">Name</label>
                                        <input type="text" class="form-control" id="ex-name" v-model="plan.Thursday.exercises[3].name">
                                    </div>
                                    <div class="col-md-2 mb-2">
                                        <label for="ex-rep" class="form-label">Rep</label>
                                        <input type="text" class="form-control" id="ex-rep" v-model="plan.Thursday.exercises[3].rep">
                                    </div>
                                    <div class="col-md-2 mb-2">
                                        <label for="ex-ser" class="form-label">Series</label>
                                        <input type="text" class="form-control" id="ex-ser" v-model="plan.Thursday.exercises[3].series">
                                    </div>
                                </div>
                                <small class="fw-semibold">#4</small>
                                <div class="row">
                                    <div class="col-md-8 mb-2">
                                        <label for="ex-name" class="form-label">Name</label>
                                        <input type="text" class="form-control" id="ex-name" v-model="plan.Thursday.exercises[4].name">
                                    </div>
                                    <div class="col-md-2 mb-2">
                                        <label for="ex-rep" class="form-label">Rep</label>
                                        <input type="text" class="form-control" id="ex-rep" v-model="plan.Thursday.exercises[4].rep">
                                    </div>
                                    <div class="col-md-2 mb-2">
                                        <label for="ex-ser" class="form-label">Series</label>
                                        <input type="text" class="form-control" id="ex-ser" v-model="plan.Thursday.exercises[4].series">
                                    </div>
                                </div>
                                <small class="fw-semibold">#5</small>
                                <div class="row">
                                    <div class="col-md-8 mb-2">
                                        <label for="ex-name" class="form-label">Name</label>
                                        <input type="text" class="form-control" id="ex-name" v-model="plan.Thursday.exercises[5].name">
                                    </div>
                                    <div class="col-md-2 mb-2">
                                        <label for="ex-rep" class="form-label">Rep</label>
                                        <input type="text" class="form-control" id="ex-rep" v-model="plan.Thursday.exercises[5].rep">
                                    </div>
                                    <div class="col-md-2 mb-2">
                                        <label for="ex-ser" class="form-label">Series</label>
                                        <input type="text" class="form-control" id="ex-ser" v-model="plan.Thursday.exercises[5].series">
                                    </div>
                                </div>
                                <small class="fw-semibold">#6</small>
                                <div class="row">
                                    <div class="col-md-8 mb-2">
                                        <label for="ex-name" class="form-label">Name</label>
                                        <input type="text" class="form-control" id="ex-name" v-model="plan.Thursday.exercises[6].name">
                                    </div>
                                    <div class="col-md-2 mb-2">
                                        <label for="ex-rep" class="form-label">Rep</label>
                                        <input type="text" class="form-control" id="ex-rep" v-model="plan.Thursday.exercises[6].rep">
                                    </div>
                                    <div class="col-md-2 mb-2">
                                        <label for="ex-ser" class="form-label">Series</label>
                                        <input type="text" class="form-control" id="ex-ser" v-model="plan.Thursday.exercises[6].series">
                                    </div>
                                </div>
                                <small class="fw-semibold">#7</small>
                                <div class="row">
                                    <div class="col-md-8 mb-2">
                                        <label for="ex-name" class="form-label">Name</label>
                                        <input type="text" class="form-control" id="ex-name" v-model="plan.Thursday.exercises[7].name">
                                    </div>
                                    <div class="col-md-2 mb-2">
                                        <label for="ex-rep" class="form-label">Rep</label>
                                        <input type="text" class="form-control" id="ex-rep" v-model="plan.Thursday.exercises[7].rep">
                                    </div>
                                    <div class="col-md-2 mb-2">
                                        <label for="ex-ser" class="form-label">Series</label>
                                        <input type="text" class="form-control" id="ex-ser" v-model="plan.Thursday.exercises[7].series">
                                    </div>
                                </div>
                                <small class="fw-semibold">#8</small>
                                <div class="row">
                                    <div class="col-md-8 mb-2">
                                        <label for="ex-name" class="form-label">Name</label>
                                        <input type="text" class="form-control" id="ex-name" v-model="plan.Thursday.exercises[8].name">
                                    </div>
                                    <div class="col-md-2 mb-2">
                                        <label for="ex-rep" class="form-label">Rep</label>
                                        <input type="text" class="form-control" id="ex-rep" v-model="plan.Thursday.exercises[8].rep">
                                    </div>
                                    <div class="col-md-2 mb-2">
                                        <label for="ex-ser" class="form-label">Series</label>
                                        <input type="text" class="form-control" id="ex-ser" v-model="plan.Thursday.exercises[8].series">
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <!-- Thursday -->
                <!-- Friday -->
                <div class="accordion-item">
                    <h2 class="accordion-header" id="flush-headingOne">
                        <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseFriday" aria-expanded="false" aria-controls="flush-collapseFriday">
                            <span class="fw-semibold">Friday</span>
                        </button>
                    </h2>
                    <div id="flush-collapseFriday" class="accordion-collapse collapse" aria-labelledby="flush-headingOne" data-bs-parent="#accordionFlushExample">
                        <div class="p-3">
                            <div class="form-floating mb-3">
                                <input type="text" class="form-control" id="floatingName" v-model="plan.Friday.name" placeholder="Name">
                                <label for="floatingName">Name</label>
                            </div>
                            <div class="mb-3">
                                <small class="fw-semibold">#1</small>
                                <div class="row">
                                    <div class="col-md-8 mb-2">
                                        <label for="ex-name" class="form-label">Name</label>
                                        <input type="text" class="form-control" id="ex-name" v-model="plan.Friday.exercises[1].name">
                                    </div>
                                    <div class="col-md-2 mb-2">
                                        <label for="ex-rep" class="form-label">Rep</label>
                                        <input type="text" class="form-control" id="ex-rep" v-model="plan.Friday.exercises[1].rep">
                                    </div>
                                    <div class="col-md-2 mb-2">
                                        <label for="ex-ser" class="form-label">Series</label>
                                        <input type="text" class="form-control" id="ex-ser" v-model="plan.Friday.exercises[1].series">
                                    </div>
                                </div>
                                <small class="fw-semibold">#2</small>
                                <div class="row">
                                    <div class="col-md-8 mb-2">
                                        <label for="ex-name" class="form-label">Name</label>
                                        <input type="text" class="form-control" id="ex-name" v-model="plan.Friday.exercises[2].name">
                                    </div>
                                    <div class="col-md-2 mb-2">
                                        <label for="ex-rep" class="form-label">Rep</label>
                                        <input type="text" class="form-control" id="ex-rep" v-model="plan.Friday.exercises[2].rep">
                                    </div>
                                    <div class="col-md-2 mb-2">
                                        <label for="ex-ser" class="form-label">Series</label>
                                        <input type="text" class="form-control" id="ex-ser" v-model="plan.Friday.exercises[2].series">
                                    </div>
                                </div>
                                <small class="fw-semibold">#3</small>
                                <div class="row">
                                    <div class="col-md-8 mb-2">
                                        <label for="ex-name" class="form-label">Name</label>
                                        <input type="text" class="form-control" id="ex-name" v-model="plan.Friday.exercises[3].name">
                                    </div>
                                    <div class="col-md-2 mb-2">
                                        <label for="ex-rep" class="form-label">Rep</label>
                                        <input type="text" class="form-control" id="ex-rep" v-model="plan.Friday.exercises[3].rep">
                                    </div>
                                    <div class="col-md-2 mb-2">
                                        <label for="ex-ser" class="form-label">Series</label>
                                        <input type="text" class="form-control" id="ex-ser" v-model="plan.Friday.exercises[3].series">
                                    </div>
                                </div>
                                <small class="fw-semibold">#4</small>
                                <div class="row">
                                    <div class="col-md-8 mb-2">
                                        <label for="ex-name" class="form-label">Name</label>
                                        <input type="text" class="form-control" id="ex-name" v-model="plan.Friday.exercises[4].name">
                                    </div>
                                    <div class="col-md-2 mb-2">
                                        <label for="ex-rep" class="form-label">Rep</label>
                                        <input type="text" class="form-control" id="ex-rep" v-model="plan.Friday.exercises[4].rep">
                                    </div>
                                    <div class="col-md-2 mb-2">
                                        <label for="ex-ser" class="form-label">Series</label>
                                        <input type="text" class="form-control" id="ex-ser" v-model="plan.Friday.exercises[4].series">
                                    </div>
                                </div>
                                <small class="fw-semibold">#5</small>
                                <div class="row">
                                    <div class="col-md-8 mb-2">
                                        <label for="ex-name" class="form-label">Name</label>
                                        <input type="text" class="form-control" id="ex-name" v-model="plan.Friday.exercises[5].name">
                                    </div>
                                    <div class="col-md-2 mb-2">
                                        <label for="ex-rep" class="form-label">Rep</label>
                                        <input type="text" class="form-control" id="ex-rep" v-model="plan.Friday.exercises[5].rep">
                                    </div>
                                    <div class="col-md-2 mb-2">
                                        <label for="ex-ser" class="form-label">Series</label>
                                        <input type="text" class="form-control" id="ex-ser" v-model="plan.Friday.exercises[5].series">
                                    </div>
                                </div>
                                <small class="fw-semibold">#6</small>
                                <div class="row">
                                    <div class="col-md-8 mb-2">
                                        <label for="ex-name" class="form-label">Name</label>
                                        <input type="text" class="form-control" id="ex-name" v-model="plan.Friday.exercises[6].name">
                                    </div>
                                    <div class="col-md-2 mb-2">
                                        <label for="ex-rep" class="form-label">Rep</label>
                                        <input type="text" class="form-control" id="ex-rep" v-model="plan.Friday.exercises[6].rep">
                                    </div>
                                    <div class="col-md-2 mb-2">
                                        <label for="ex-ser" class="form-label">Series</label>
                                        <input type="text" class="form-control" id="ex-ser" v-model="plan.Friday.exercises[6].series">
                                    </div>
                                </div>
                                <small class="fw-semibold">#7</small>
                                <div class="row">
                                    <div class="col-md-8 mb-2">
                                        <label for="ex-name" class="form-label">Name</label>
                                        <input type="text" class="form-control" id="ex-name" v-model="plan.Friday.exercises[7].name">
                                    </div>
                                    <div class="col-md-2 mb-2">
                                        <label for="ex-rep" class="form-label">Rep</label>
                                        <input type="text" class="form-control" id="ex-rep" v-model="plan.Friday.exercises[7].rep">
                                    </div>
                                    <div class="col-md-2 mb-2">
                                        <label for="ex-ser" class="form-label">Series</label>
                                        <input type="text" class="form-control" id="ex-ser" v-model="plan.Friday.exercises[7].series">
                                    </div>
                                </div>
                                <small class="fw-semibold">#8</small>
                                <div class="row">
                                    <div class="col-md-8 mb-2">
                                        <label for="ex-name" class="form-label">Name</label>
                                        <input type="text" class="form-control" id="ex-name" v-model="plan.Friday.exercises[8].name">
                                    </div>
                                    <div class="col-md-2 mb-2">
                                        <label for="ex-rep" class="form-label">Rep</label>
                                        <input type="text" class="form-control" id="ex-rep" v-model="plan.Friday.exercises[8].rep">
                                    </div>
                                    <div class="col-md-2 mb-2">
                                        <label for="ex-ser" class="form-label">Series</label>
                                        <input type="text" class="form-control" id="ex-ser" v-model="plan.Friday.exercises[8].series">
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <!-- Friday -->
                <!-- Saturday -->
                <div class="accordion-item">
                    <h2 class="accordion-header" id="flush-headingOne">
                        <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseSaturday" aria-expanded="false" aria-controls="flush-collapseSaturday">
                            <span class="fw-semibold">Saturday</span>
                        </button>
                    </h2>
                    <div id="flush-collapseSaturday" class="accordion-collapse collapse" aria-labelledby="flush-headingOne" data-bs-parent="#accordionFlushExample">
                        <div class="p-3">
                            <div class="form-floating mb-3">
                                <input type="text" class="form-control" id="floatingName" v-model="plan.Saturday.name" placeholder="Name">
                                <label for="floatingName">Name</label>
                            </div>
                            <div class="mb-3">
                                <small class="fw-semibold">#1</small>
                                <div class="row">
                                    <div class="col-md-8 mb-2">
                                        <label for="ex-name" class="form-label">Name</label>
                                        <input type="text" class="form-control" id="ex-name" v-model="plan.Saturday.exercises[1].name">
                                    </div>
                                    <div class="col-md-2 mb-2">
                                        <label for="ex-rep" class="form-label">Rep</label>
                                        <input type="text" class="form-control" id="ex-rep" v-model="plan.Saturday.exercises[1].rep">
                                    </div>
                                    <div class="col-md-2 mb-2">
                                        <label for="ex-ser" class="form-label">Series</label>
                                        <input type="text" class="form-control" id="ex-ser" v-model="plan.Saturday.exercises[1].series">
                                    </div>
                                </div>
                                <small class="fw-semibold">#2</small>
                                <div class="row">
                                    <div class="col-md-8 mb-2">
                                        <label for="ex-name" class="form-label">Name</label>
                                        <input type="text" class="form-control" id="ex-name" v-model="plan.Saturday.exercises[2].name">
                                    </div>
                                    <div class="col-md-2 mb-2">
                                        <label for="ex-rep" class="form-label">Rep</label>
                                        <input type="text" class="form-control" id="ex-rep" v-model="plan.Saturday.exercises[2].rep">
                                    </div>
                                    <div class="col-md-2 mb-2">
                                        <label for="ex-ser" class="form-label">Series</label>
                                        <input type="text" class="form-control" id="ex-ser" v-model="plan.Saturday.exercises[2].series">
                                    </div>
                                </div>
                                <small class="fw-semibold">#3</small>
                                <div class="row">
                                    <div class="col-md-8 mb-2">
                                        <label for="ex-name" class="form-label">Name</label>
                                        <input type="text" class="form-control" id="ex-name" v-model="plan.Saturday.exercises[3].name">
                                    </div>
                                    <div class="col-md-2 mb-2">
                                        <label for="ex-rep" class="form-label">Rep</label>
                                        <input type="text" class="form-control" id="ex-rep" v-model="plan.Saturday.exercises[3].rep">
                                    </div>
                                    <div class="col-md-2 mb-2">
                                        <label for="ex-ser" class="form-label">Series</label>
                                        <input type="text" class="form-control" id="ex-ser" v-model="plan.Saturday.exercises[3].series">
                                    </div>
                                </div>
                                <small class="fw-semibold">#4</small>
                                <div class="row">
                                    <div class="col-md-8 mb-2">
                                        <label for="ex-name" class="form-label">Name</label>
                                        <input type="text" class="form-control" id="ex-name" v-model="plan.Saturday.exercises[4].name">
                                    </div>
                                    <div class="col-md-2 mb-2">
                                        <label for="ex-rep" class="form-label">Rep</label>
                                        <input type="text" class="form-control" id="ex-rep" v-model="plan.Saturday.exercises[4].rep">
                                    </div>
                                    <div class="col-md-2 mb-2">
                                        <label for="ex-ser" class="form-label">Series</label>
                                        <input type="text" class="form-control" id="ex-ser" v-model="plan.Saturday.exercises[4].series">
                                    </div>
                                </div>
                                <small class="fw-semibold">#5</small>
                                <div class="row">
                                    <div class="col-md-8 mb-2">
                                        <label for="ex-name" class="form-label">Name</label>
                                        <input type="text" class="form-control" id="ex-name" v-model="plan.Saturday.exercises[5].name">
                                    </div>
                                    <div class="col-md-2 mb-2">
                                        <label for="ex-rep" class="form-label">Rep</label>
                                        <input type="text" class="form-control" id="ex-rep" v-model="plan.Saturday.exercises[5].rep">
                                    </div>
                                    <div class="col-md-2 mb-2">
                                        <label for="ex-ser" class="form-label">Series</label>
                                        <input type="text" class="form-control" id="ex-ser" v-model="plan.Saturday.exercises[5].series">
                                    </div>
                                </div>
                                <small class="fw-semibold">#6</small>
                                <div class="row">
                                    <div class="col-md-8 mb-2">
                                        <label for="ex-name" class="form-label">Name</label>
                                        <input type="text" class="form-control" id="ex-name" v-model="plan.Saturday.exercises[6].name">
                                    </div>
                                    <div class="col-md-2 mb-2">
                                        <label for="ex-rep" class="form-label">Rep</label>
                                        <input type="text" class="form-control" id="ex-rep" v-model="plan.Saturday.exercises[6].rep">
                                    </div>
                                    <div class="col-md-2 mb-2">
                                        <label for="ex-ser" class="form-label">Series</label>
                                        <input type="text" class="form-control" id="ex-ser" v-model="plan.Saturday.exercises[6].series">
                                    </div>
                                </div>
                                <small class="fw-semibold">#7</small>
                                <div class="row">
                                    <div class="col-md-8 mb-2">
                                        <label for="ex-name" class="form-label">Name</label>
                                        <input type="text" class="form-control" id="ex-name" v-model="plan.Saturday.exercises[7].name">
                                    </div>
                                    <div class="col-md-2 mb-2">
                                        <label for="ex-rep" class="form-label">Rep</label>
                                        <input type="text" class="form-control" id="ex-rep" v-model="plan.Saturday.exercises[7].rep">
                                    </div>
                                    <div class="col-md-2 mb-2">
                                        <label for="ex-ser" class="form-label">Series</label>
                                        <input type="text" class="form-control" id="ex-ser" v-model="plan.Saturday.exercises[7].series">
                                    </div>
                                </div>
                                <small class="fw-semibold">#8</small>
                                <div class="row">
                                    <div class="col-md-8 mb-2">
                                        <label for="ex-name" class="form-label">Name</label>
                                        <input type="text" class="form-control" id="ex-name" v-model="plan.Saturday.exercises[8].name">
                                    </div>
                                    <div class="col-md-2 mb-2">
                                        <label for="ex-rep" class="form-label">Rep</label>
                                        <input type="text" class="form-control" id="ex-rep" v-model="plan.Saturday.exercises[8].rep">
                                    </div>
                                    <div class="col-md-2 mb-2">
                                        <label for="ex-ser" class="form-label">Series</label>
                                        <input type="text" class="form-control" id="ex-ser" v-model="plan.Saturday.exercises[8].series">
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <!-- Saturday -->
                <!-- Sunday -->
                <div class="accordion-item">
                    <h2 class="accordion-header" id="flush-headingOne">
                        <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseSunday" aria-expanded="false" aria-controls="flush-collapseSunday">
                            <span class="fw-semibold">Sunday</span>
                        </button>
                    </h2>
                    <div id="flush-collapseSunday" class="accordion-collapse collapse" aria-labelledby="flush-headingOne" data-bs-parent="#accordionFlushExample">
                        <div class="p-3">
                            <div class="form-floating mb-3">
                                <input type="text" class="form-control" id="floatingName" v-model="plan.Sunday.name" placeholder="Name">
                                <label for="floatingName">Name</label>
                            </div>
                            <div class="mb-3">
                                <small class="fw-semibold">#1</small>
                                <div class="row">
                                    <div class="col-md-8 mb-2">
                                        <label for="ex-name" class="form-label">Name</label>
                                        <input type="text" class="form-control" id="ex-name" v-model="plan.Sunday.exercises[1].name">
                                    </div>
                                    <div class="col-md-2 mb-2">
                                        <label for="ex-rep" class="form-label">Rep</label>
                                        <input type="text" class="form-control" id="ex-rep" v-model="plan.Sunday.exercises[1].rep">
                                    </div>
                                    <div class="col-md-2 mb-2">
                                        <label for="ex-ser" class="form-label">Series</label>
                                        <input type="text" class="form-control" id="ex-ser" v-model="plan.Sunday.exercises[1].series">
                                    </div>
                                </div>
                                <small class="fw-semibold">#2</small>
                                <div class="row">
                                    <div class="col-md-8 mb-2">
                                        <label for="ex-name" class="form-label">Name</label>
                                        <input type="text" class="form-control" id="ex-name" v-model="plan.Sunday.exercises[2].name">
                                    </div>
                                    <div class="col-md-2 mb-2">
                                        <label for="ex-rep" class="form-label">Rep</label>
                                        <input type="text" class="form-control" id="ex-rep" v-model="plan.Sunday.exercises[2].rep">
                                    </div>
                                    <div class="col-md-2 mb-2">
                                        <label for="ex-ser" class="form-label">Series</label>
                                        <input type="text" class="form-control" id="ex-ser" v-model="plan.Sunday.exercises[2].series">
                                    </div>
                                </div>
                                <small class="fw-semibold">#3</small>
                                <div class="row">
                                    <div class="col-md-8 mb-2">
                                        <label for="ex-name" class="form-label">Name</label>
                                        <input type="text" class="form-control" id="ex-name" v-model="plan.Sunday.exercises[3].name">
                                    </div>
                                    <div class="col-md-2 mb-2">
                                        <label for="ex-rep" class="form-label">Rep</label>
                                        <input type="text" class="form-control" id="ex-rep" v-model="plan.Sunday.exercises[3].rep">
                                    </div>
                                    <div class="col-md-2 mb-2">
                                        <label for="ex-ser" class="form-label">Series</label>
                                        <input type="text" class="form-control" id="ex-ser" v-model="plan.Sunday.exercises[3].series">
                                    </div>
                                </div>
                                <small class="fw-semibold">#4</small>
                                <div class="row">
                                    <div class="col-md-8 mb-2">
                                        <label for="ex-name" class="form-label">Name</label>
                                        <input type="text" class="form-control" id="ex-name" v-model="plan.Sunday.exercises[4].name">
                                    </div>
                                    <div class="col-md-2 mb-2">
                                        <label for="ex-rep" class="form-label">Rep</label>
                                        <input type="text" class="form-control" id="ex-rep" v-model="plan.Sunday.exercises[4].rep">
                                    </div>
                                    <div class="col-md-2 mb-2">
                                        <label for="ex-ser" class="form-label">Series</label>
                                        <input type="text" class="form-control" id="ex-ser" v-model="plan.Sunday.exercises[4].series">
                                    </div>
                                </div>
                                <small class="fw-semibold">#5</small>
                                <div class="row">
                                    <div class="col-md-8 mb-2">
                                        <label for="ex-name" class="form-label">Name</label>
                                        <input type="text" class="form-control" id="ex-name" v-model="plan.Sunday.exercises[5].name">
                                    </div>
                                    <div class="col-md-2 mb-2">
                                        <label for="ex-rep" class="form-label">Rep</label>
                                        <input type="text" class="form-control" id="ex-rep" v-model="plan.Sunday.exercises[5].rep">
                                    </div>
                                    <div class="col-md-2 mb-2">
                                        <label for="ex-ser" class="form-label">Series</label>
                                        <input type="text" class="form-control" id="ex-ser" v-model="plan.Sunday.exercises[5].series">
                                    </div>
                                </div>
                                <small class="fw-semibold">#6</small>
                                <div class="row">
                                    <div class="col-md-8 mb-2">
                                        <label for="ex-name" class="form-label">Name</label>
                                        <input type="text" class="form-control" id="ex-name" v-model="plan.Sunday.exercises[6].name">
                                    </div>
                                    <div class="col-md-2 mb-2">
                                        <label for="ex-rep" class="form-label">Rep</label>
                                        <input type="text" class="form-control" id="ex-rep" v-model="plan.Sunday.exercises[6].rep">
                                    </div>
                                    <div class="col-md-2 mb-2">
                                        <label for="ex-ser" class="form-label">Series</label>
                                        <input type="text" class="form-control" id="ex-ser" v-model="plan.Sunday.exercises[6].series">
                                    </div>
                                </div>
                                <small class="fw-semibold">#7</small>
                                <div class="row">
                                    <div class="col-md-8 mb-2">
                                        <label for="ex-name" class="form-label">Name</label>
                                        <input type="text" class="form-control" id="ex-name" v-model="plan.Sunday.exercises[7].name">
                                    </div>
                                    <div class="col-md-2 mb-2">
                                        <label for="ex-rep" class="form-label">Rep</label>
                                        <input type="text" class="form-control" id="ex-rep" v-model="plan.Sunday.exercises[7].rep">
                                    </div>
                                    <div class="col-md-2 mb-2">
                                        <label for="ex-ser" class="form-label">Series</label>
                                        <input type="text" class="form-control" id="ex-ser" v-model="plan.Sunday.exercises[7].series">
                                    </div>
                                </div>
                                <small class="fw-semibold">#8</small>
                                <div class="row">
                                    <div class="col-md-8 mb-2">
                                        <label for="ex-name" class="form-label">Name</label>
                                        <input type="text" class="form-control" id="ex-name" v-model="plan.Sunday.exercises[8].name">
                                    </div>
                                    <div class="col-md-2 mb-2">
                                        <label for="ex-rep" class="form-label">Rep</label>
                                        <input type="text" class="form-control" id="ex-rep" v-model="plan.Sunday.exercises[8].rep">
                                    </div>
                                    <div class="col-md-2 mb-2">
                                        <label for="ex-ser" class="form-label">Series</label>
                                        <input type="text" class="form-control" id="ex-ser" v-model="plan.Sunday.exercises[8].series">
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <!-- Sunday -->
            </div>
            <div class="mb-3 mt-4">
                <button type="submit" class="btn btn-primary">Save</button>
            </div>
        </form>
    </div>
    <!-- Create Form -->
    <!-- Plan -->
    <div v-else class="container-fluid">
        <!-- Monday -->
        <div class="row mb-3">
            <div class="col-12">
                <div class="border rounded-3 p-2">
                    <p class="fs-5 fw-semibold text-uppercase">MONDAY: <span class="fw-normal" v-if="plan.Monday.exercises[1].name">{{ plan.Monday.name }}</span><span v-else class="fw-normal">OFF DAY</span></p>
                    <div v-if="plan.Monday.exercises[1].name">
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
                        </div>
                        <div v-for="i of plan.Monday.exercises" class="row">
                            <div class="col-8">
                                <p>{{ i.name }}</p>
                            </div>
                            <div class="col-2">
                                <p>{{ i.rep }}</p>
                            </div>
                            <div class="col-2">
                                <p>{{ i.series }}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <!-- Monday -->
        <!-- Tuesday -->
        <div class="row mb-3">
            <div class="col-12">
                <div class="border rounded-3 p-2">
                    <p class="fs-5 fw-semibold text-uppercase">TUESDAY: <span class="fw-normal" v-if="plan.Tuesday.exercises[1].name">{{ plan.Tuesday.name }}</span><span v-else class="fw-normal">OFF DAY</span></p>
                    <div v-if="plan.Tuesday.exercises[1].name">
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
                        </div>
                        <div v-for="i of plan.Tuesday.exercises" class="row">
                            <div class="col-8">
                                <p>{{ i.name }}</p>
                            </div>
                            <div class="col-2">
                                <p>{{ i.rep }}</p>
                            </div>
                            <div class="col-2">
                                <p>{{ i.series }}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <!-- Tuesday -->
        <!-- Wednesday -->
        <div class="row mb-3">
            <div class="col-12">
                <div class="border rounded-3 p-2">
                    <p class="fs-5 fw-semibold text-uppercase">WEDNESDAY: <span class="fw-normal" v-if="plan.Wednesday.exercises[1].name">{{ plan.Wednesday.name }}</span><span v-else class="fw-normal">OFF DAY</span></p>
                    <div v-if="plan.Wednesday.exercises[1].name">
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
                        </div>
                        <div v-for="i of plan.Wednesday.exercises" class="row">
                            <div class="col-8">
                                <p>{{ i.name }}</p>
                            </div>
                            <div class="col-2">
                                <p>{{ i.rep }}</p>
                            </div>
                            <div class="col-2">
                                <p>{{ i.series }}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <!-- Wednesday -->
        <!-- Thursday -->
        <div class="row mb-3">
            <div class="col-12">
                <div class="border rounded-3 p-2">
                    <p class="fs-5 fw-semibold text-uppercase">THURSDAY: <span class="fw-normal" v-if="plan.Thursday.exercises[1].name">{{ plan.Thursday.name }}</span><span v-else class="fw-normal">OFF DAY</span></p>
                    <div v-if="plan.Thursday.exercises[1].name">
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
                        </div>
                        <div v-for="i of plan.Thursday.exercises" class="row">
                            <div class="col-8">
                                <p>{{ i.name }}</p>
                            </div>
                            <div class="col-2">
                                <p>{{ i.rep }}</p>
                            </div>
                            <div class="col-2">
                                <p>{{ i.series }}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <!-- Thursday -->
        <!-- Friday -->
        <div class="row mb-3">
            <div class="col-12">
                <div class="border rounded-3 p-2">
                    <p class="fs-5 fw-semibold text-uppercase">FRIDAY: <span class="fw-normal" v-if="plan.Friday.exercises[1].name">{{ plan.Friday.name }}</span><span v-else class="fw-normal">OFF DAY</span></p>
                    <div v-if="plan.Friday.exercises[1].name">
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
                        </div>
                        <div v-for="i of plan.Friday.exercises" class="row">
                            <div class="col-8">
                                <p>{{ i.name }}</p>
                            </div>
                            <div class="col-2">
                                <p>{{ i.rep }}</p>
                            </div>
                            <div class="col-2">
                                <p>{{ i.series }}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <!-- Friday -->
        <!-- Saturday -->
        <div class="row mb-3">
            <div class="col-12">
                <div class="border rounded-3 p-2">
                    <p class="fs-5 fw-semibold text-uppercase">SATURDAY: <span class="fw-normal" v-if="plan.Saturday.exercises[1].name">{{ plan.Saturday.name }}</span><span v-else class="fw-normal">OFF DAY</span></p>
                    <div v-if="plan.Saturday.exercises[1].name">
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
                        </div>
                        <div v-for="i of plan.Saturday.exercises" class="row">
                            <div class="col-8">
                                <p>{{ i.name }}</p>
                            </div>
                            <div class="col-2">
                                <p>{{ i.rep }}</p>
                            </div>
                            <div class="col-2">
                                <p>{{ i.series }}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <!-- Saturday -->
        <!-- Sunday -->
        <div class="row mb-3">
            <div class="col-12">
                <div class="border rounded-3 p-2">
                    <p class="fs-5 fw-semibold text-uppercase">SUNDAY: <span class="fw-normal" v-if="plan.Sunday.exercises[1].name">{{ plan.Sunday.name }}</span><span v-else class="fw-normal">OFF DAY</span></p>
                    <div v-if="plan.Sunday.exercises[1].name">
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
                        </div>
                        <div v-for="i of plan.Sunday.exercises" class="row">
                            <div class="col-8">
                                <p>{{ i.name }}</p>
                            </div>
                            <div class="col-2">
                                <p>{{ i.rep }}</p>
                            </div>
                            <div class="col-2">
                                <p>{{ i.series }}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <!-- Sunday -->
    </div>
    <!-- Plan -->


</template>

<script>
import axios from 'axios';

export default{
    name: 'TrainingPlanTool', 
    data(){
        return{
            showForm: false,
            plan: {
                "Monday": {
                    "name": "", 
                    "exercises": {
                        "1": {   
                            "name": '', 
                            "rep": '', 
                            "series": ''
                        }, 
                        "2": {   
                            "name": '', 
                            "rep": '', 
                            "series": ''
                        }, 
                        "3": {   
                            "name": '', 
                            "rep": '', 
                            "series": ''
                        }, 
                        "4": {   
                            "name": '', 
                            "rep": '', 
                            "series": ''
                        }, 
                        "5": {   
                            "name": '', 
                            "rep": '', 
                            "series": ''
                        }, 
                        "6": {   
                            "name": '', 
                            "rep": '', 
                            "series": ''
                        }, 
                        "7": {   
                            "name": '', 
                            "rep": '', 
                            "series": ''
                        }, 
                        "8": {   
                            "name": '', 
                            "rep": '', 
                            "series": ''
                        }, 
                    }, 
                }, 
                "Tuesday": {
                    "name": "", 
                    "exercises": {
                        "1": {   
                            "name": '', 
                            "rep": '', 
                            "series": ''
                        }, 
                        "2": {   
                            "name": '', 
                            "rep": '', 
                            "series": ''
                        }, 
                        "3": {   
                            "name": '', 
                            "rep": '', 
                            "series": ''
                        }, 
                        "4": {   
                            "name": '', 
                            "rep": '', 
                            "series": ''
                        }, 
                        "5": {   
                            "name": '', 
                            "rep": '', 
                            "series": ''
                        }, 
                        "6": {   
                            "name": '', 
                            "rep": '', 
                            "series": ''
                        }, 
                        "7": {   
                            "name": '', 
                            "rep": '', 
                            "series": ''
                        }, 
                        "8": {   
                            "name": '', 
                            "rep": '', 
                            "series": ''
                        }, 
                    }, 
                }, 
                "Wednesday": {
                    "name": "", 
                    "exercises": {
                        "1": {   
                            "name": '', 
                            "rep": '', 
                            "series": ''
                        }, 
                        "2": {   
                            "name": '', 
                            "rep": '', 
                            "series": ''
                        }, 
                        "3": {   
                            "name": '', 
                            "rep": '', 
                            "series": ''
                        }, 
                        "4": {   
                            "name": '', 
                            "rep": '', 
                            "series": ''
                        }, 
                        "5": {   
                            "name": '', 
                            "rep": '', 
                            "series": ''
                        }, 
                        "6": {   
                            "name": '', 
                            "rep": '', 
                            "series": ''
                        }, 
                        "7": {   
                            "name": '', 
                            "rep": '', 
                            "series": ''
                        }, 
                        "8": {   
                            "name": '', 
                            "rep": '', 
                            "series": ''
                        }, 
                    }, 
                }, 
                "Thursday": {
                    "name": "", 
                    "exercises": {
                        "1": {   
                            "name": '', 
                            "rep": '', 
                            "series": ''
                        }, 
                        "2": {   
                            "name": '', 
                            "rep": '', 
                            "series": ''
                        }, 
                        "3": {   
                            "name": '', 
                            "rep": '', 
                            "series": ''
                        }, 
                        "4": {   
                            "name": '', 
                            "rep": '', 
                            "series": ''
                        }, 
                        "5": {   
                            "name": '', 
                            "rep": '', 
                            "series": ''
                        }, 
                        "6": {   
                            "name": '', 
                            "rep": '', 
                            "series": ''
                        }, 
                        "7": {   
                            "name": '', 
                            "rep": '', 
                            "series": ''
                        }, 
                        "8": {   
                            "name": '', 
                            "rep": '', 
                            "series": ''
                        }, 
                    }, 
                }, 
                "Friday": {
                    "name": "", 
                    "exercises": {
                        "1": {   
                            "name": '', 
                            "rep": '', 
                            "series": ''
                        }, 
                        "2": {   
                            "name": '', 
                            "rep": '', 
                            "series": ''
                        }, 
                        "3": {   
                            "name": '', 
                            "rep": '', 
                            "series": ''
                        }, 
                        "4": {   
                            "name": '', 
                            "rep": '', 
                            "series": ''
                        }, 
                        "5": {   
                            "name": '', 
                            "rep": '', 
                            "series": ''
                        }, 
                        "6": {   
                            "name": '', 
                            "rep": '', 
                            "series": ''
                        }, 
                        "7": {   
                            "name": '', 
                            "rep": '', 
                            "series": ''
                        }, 
                        "8": {   
                            "name": '', 
                            "rep": '', 
                            "series": ''
                        }, 
                    }, 
                }, 
                "Saturday": {
                    "name": "", 
                    "exercises": {
                        "1": {   
                            "name": '', 
                            "rep": '', 
                            "series": ''
                        }, 
                        "2": {   
                            "name": '', 
                            "rep": '', 
                            "series": ''
                        }, 
                        "3": {   
                            "name": '', 
                            "rep": '', 
                            "series": ''
                        }, 
                        "4": {   
                            "name": '', 
                            "rep": '', 
                            "series": ''
                        }, 
                        "5": {   
                            "name": '', 
                            "rep": '', 
                            "series": ''
                        }, 
                        "6": {   
                            "name": '', 
                            "rep": '', 
                            "series": ''
                        }, 
                        "7": {   
                            "name": '', 
                            "rep": '', 
                            "series": ''
                        }, 
                        "8": {   
                            "name": '', 
                            "rep": '', 
                            "series": ''
                        }, 
                    }, 
                }, 
                "Sunday": {
                    "name": "", 
                    "exercises": {
                        "1": {   
                            "name": '', 
                            "rep": '', 
                            "series": ''
                        }, 
                        "2": {   
                            "name": '', 
                            "rep": '', 
                            "series": ''
                        }, 
                        "3": {   
                            "name": '', 
                            "rep": '', 
                            "series": ''
                        }, 
                        "4": {   
                            "name": '', 
                            "rep": '', 
                            "series": ''
                        }, 
                        "5": {   
                            "name": '', 
                            "rep": '', 
                            "series": ''
                        }, 
                        "6": {   
                            "name": '', 
                            "rep": '', 
                            "series": ''
                        }, 
                        "7": {   
                            "name": '', 
                            "rep": '', 
                            "series": ''
                        }, 
                        "8": {   
                            "name": '', 
                            "rep": '', 
                            "series": ''
                        }, 
                    }, 
                }, 
            }, 
        }
    }, 
    methods:{
        async getUserInfo(){
            await axios 
                .get("/auth/users/me/")
                .then(response => {
                    if (response.data.training_plan){
                        this.plan = response.data.training_plan; 
                    }
                })
                .catch(error => {
                    this.$router.push({name: 'error'});
                })
        }, 
        async updatePlan(){
            await axios 
                .patch("/auth/users/me/", {training_plan: this.plan})
                .then(response => {
                    this.plan = response.data.training_plan; 
                    this.$store.commit('setTrainingPlan', this.plan); 
                    this.showForm = false;  
                })
                .catch(error => {
                    this.$router.push({name: 'error'});
                })
        }
    }, 
    mounted(){
        this.getUserInfo(); 
    }, 
}
</script>

<style scoped></style>