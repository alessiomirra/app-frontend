<template>
    <div class="container-fluid">
        
        <!-- Header -->
        <div class="row">
            <div class="col-12">
                <div class="d-flex justify-content-between">
                    <p class="fw-semibold fs-4 text-uppercase">Meal Plan</p>
                    <p v-if="showForm === false" class="text-light border rounded-3 p-2 bg-primary" style="cursor: pointer;" @click="showForm = !showForm">
                        <i class="bi bi-arrow-clockwise"></i> 
                        Change Plan
                    </p>
                    <p v-else class="text-light border rounded-3 p-2 bg-primary" style="cursor: pointer;" @click="showForm = !showForm">
                        <i class="bi bi-arrow-left-circle"></i> 
                        Hide
                    </p>
                </div>
            </div>
        </div>
        <!-- Header -->

        <!-- Plan Cards -->
        <div v-if="showForm === false" class="container-fluid px-2 mb-5">
            <div class="row gx-5">
                <div class="col-md-4 mb-3">
                    <div class="p-2 border bg-light h-100">
                        <div class="card-header">
                            <p class="fw-semibold text-uppercase">Monday</p>
                        </div>
                        <div class="card-body">
                            <div v-if="plan.Monday.breakfast" class="mb-2">
                                <p class="mb-0 text-uppercase text-muted fw-semibold fs-6">breakfast</p>
                                <p>{{ plan.Monday.breakfast }}</p>
                            </div>
                            <div v-if="plan.Monday.morningSnack" class="mb-2">
                                <p class="mb-0 text-uppercase text-muted fw-semibold fs-6">Morning Snack</p>
                                <p>{{ plan.Monday.morningSnack }}</p>
                            </div>
                            <div v-if="plan.Monday.lunch" class="mb-2">
                                <p class="mb-0 text-uppercase text-muted fw-semibold fs-6">Lunch</p>
                                <p>{{ plan.Monday.lunch }}</p>
                            </div>
                            <div v-if="plan.Monday.afternoonSnack" class="mb-2">
                                <p class="mb-0 text-uppercase text-muted fw-semibold fs-6">Afternoon Snack</p>
                                <p>{{ plan.Monday.afternoonSnack }}</p>
                            </div>
                            <div v-if="plan.Monday.dinner" class="mb-2">
                                <p class="mb-0 text-uppercase text-muted fw-semibold fs-6">Dinner</p>
                                <p>{{ plan.Monday.dinner }}</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-md-4 mb-3">
                    <div class="p-2 border h-100 text-light" style="background-color: #4895EF;">
                        <div class="card-header">
                            <p class="fw-semibold text-uppercase">Tuesday</p>
                        </div>
                        <div class="card-body">
                            <div v-if="plan.Tuesday.breakfast" class="mb-2">
                                <p class="mb-0 text-uppercase text-muted fw-semibold fs-6">breakfast</p>
                                <p>{{ plan.Tuesday.breakfast }}</p>
                            </div>
                            <div v-if="plan.Tuesday.morningSnack" class="mb-2">
                                <p class="mb-0 text-uppercase text-muted fw-semibold fs-6">Morning Snack</p>
                                <p>{{ plan.Tuesday.morningSnack }}</p>
                            </div>
                            <div v-if="plan.Tuesday.lunch" class="mb-2">
                                <p class="mb-0 text-uppercase text-muted fw-semibold fs-6">Lunch</p>
                                <p>{{ plan.Tuesday.lunch }}</p>
                            </div>
                            <div v-if="plan.Tuesday.afternoonSnack" class="mb-2">
                                <p class="mb-0 text-uppercase text-muted fw-semibold fs-6">Afternoon Snack</p>
                                <p>{{ plan.Tuesday.afternoonSnack }}</p>
                            </div>
                            <div v-if="plan.Tuesday.dinner" class="mb-2">
                                <p class="mb-0 text-uppercase text-muted fw-semibold fs-6">Dinner</p>
                                <p>{{ plan.Tuesday.dinner }}</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-md-4 mb-3">
                    <div class="p-2 border h-100" style="background-color: #d8f3dc;">
                        <div class="card-header">
                            <p class="fw-semibold text-uppercase">Wednesday</p>
                        </div>
                        <div class="card-body">
                            <div v-if="plan.Wednesday.breakfast" class="mb-2">
                                <p class="mb-0 text-uppercase text-muted fw-semibold fs-6">breakfast</p>
                                <p>{{ plan.Wednesday.breakfast }}</p>
                            </div>
                            <div v-if="plan.Wednesday.morningSnack" class="mb-2">
                                <p class="mb-0 text-uppercase text-muted fw-semibold fs-6">Morning Snack</p>
                                <p>{{ plan.Wednesday.morningSnack }}</p>
                            </div>
                            <div v-if="plan.Wednesday.lunch" class="mb-2">
                                <p class="mb-0 text-uppercase text-muted fw-semibold fs-6">Lunch</p>
                                <p>{{ plan.Wednesday.lunch }}</p>
                            </div>
                            <div v-if="plan.Wednesday.afternoonSnack" class="mb-2">
                                <p class="mb-0 text-uppercase text-muted fw-semibold fs-6">Afternoon Snack</p>
                                <p>{{ plan.Wednesday.afternoonSnack }}</p>
                            </div>
                            <div v-if="plan.Wednesday.dinner" class="mb-2">
                                <p class="mb-0 text-uppercase text-muted fw-semibold fs-6">Dinner</p>
                                <p>{{ plan.Wednesday.dinner }}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="row gx-5">
                <div class="col-md-4 mb-3">
                    <div class="p-2 border h-100" style="background-color: #b2ff9e;">
                        <div class="card-header">
                            <p class="fw-semibold text-uppercase">Thursday</p>
                        </div>
                        <div class="card-body">
                            <div v-if="plan.Thursday.breakfast" class="mb-2">
                                <p class="mb-0 text-uppercase text-muted fw-semibold fs-6">breakfast</p>
                                <p>{{ plan.Thursday.breakfast }}</p>
                            </div>
                            <div v-if="plan.Thursday.morningSnack" class="mb-2">
                                <p class="mb-0 text-uppercase text-muted fw-semibold fs-6">Morning Snack</p>
                                <p>{{ plan.Thursday.morningSnack }}</p>
                            </div>
                            <div v-if="plan.Thursday.lunch" class="mb-2">
                                <p class="mb-0 text-uppercase text-muted fw-semibold fs-6">Lunch</p>
                                <p>{{ plan.Thursday.lunch }}</p>
                            </div>
                            <div v-if="plan.Thursday.afternoonSnack" class="mb-2">
                                <p class="mb-0 text-uppercase text-muted fw-semibold fs-6">Afternoon Snack</p>
                                <p>{{ plan.Thursday.afternoonSnack }}</p>
                            </div>
                            <div v-if="plan.Thursday.dinner" class="mb-2">
                                <p class="mb-0 text-uppercase text-muted fw-semibold fs-6">Dinner</p>
                                <p>{{ plan.Thursday.dinner }}</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-md-4 mb-3">
                    <div class="p-2 border h-100" style="background-color: #c9e4ca;">
                        <div class="card-header">
                            <p class="fw-semibold text-uppercase">Friday</p>
                        </div>
                        <div class="card-body">
                            <div v-if="plan.Friday.breakfast" class="mb-2">
                                <p class="mb-0 text-uppercase text-muted fw-semibold fs-6">breakfast</p>
                                <p>{{ plan.Friday.breakfast }}</p>
                            </div>
                            <div v-if="plan.Friday.morningSnack" class="mb-2">
                                <p class="mb-0 text-uppercase text-muted fw-semibold fs-6">Morning Snack</p>
                                <p>{{ plan.Friday.morningSnack }}</p>
                            </div>
                            <div v-if="plan.Friday.lunch" class="mb-2">
                                <p class="mb-0 text-uppercase text-muted fw-semibold fs-6">Lunch</p>
                                <p>{{ plan.Friday.lunch }}</p>
                            </div>
                            <div v-if="plan.Friday.afternoonSnack" class="mb-2">
                                <p class="mb-0 text-uppercase text-muted fw-semibold fs-6">Afternoon Snack</p>
                                <p>{{ plan.Friday.afternoonSnack }}</p>
                            </div>
                            <div v-if="plan.Friday.dinner" class="mb-2">
                                <p class="mb-0 text-uppercase text-muted fw-semibold fs-6">Dinner</p>
                                <p>{{ plan.Friday.dinner }}</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-md-4 mb-3">
                    <div class="p-2 border h-100" style="background-color: #ade8f4;">
                        <div class="card-header">
                            <p class="fw-semibold text-uppercase">Saturday</p>
                        </div>
                        <div class="card-body">
                            <div v-if="plan.Saturday.breakfast" class="mb-2">
                                <p class="mb-0 text-uppercase text-muted fw-semibold fs-6">breakfast</p>
                                <p>{{ plan.Saturday.breakfast }}</p>
                            </div>
                            <div v-if="plan.Saturday.morningSnack" class="mb-2">
                                <p class="mb-0 text-uppercase text-muted fw-semibold fs-6">Morning Snack</p>
                                <p>{{ plan.Saturday.morningSnack }}</p>
                            </div>
                            <div v-if="plan.Saturday.lunch" class="mb-2">
                                <p class="mb-0 text-uppercase text-muted fw-semibold fs-6">Lunch</p>
                                <p>{{ plan.Saturday.lunch }}</p>
                            </div>
                            <div v-if="plan.Saturday.afternoonSnack" class="mb-2">
                                <p class="mb-0 text-uppercase text-muted fw-semibold fs-6">Afternoon Snack</p>
                                <p>{{ plan.Saturday.afternoonSnack }}</p>
                            </div>
                            <div v-if="plan.Saturday.dinner" class="mb-2">
                                <p class="mb-0 text-uppercase text-muted fw-semibold fs-6">Dinner</p>
                                <p>{{ plan.Saturday.dinner }}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="row gx-5">
                <div class="col-md-12 mb-3">
                    <div class="p-2 border h-100 text-light" style="background-color: #a01a58;">
                        <div class="card-header">
                            <p class="fw-semibold text-uppercase">Sunday</p>
                        </div>
                        <div class="card-body">
                            <div v-if="plan.Sunday.breakfast" class="mb-2">
                                <p class="mb-0 text-uppercase fw-semibold fs-6">breakfast</p>
                                <p>{{ plan.Sunday.breakfast }}</p>
                            </div>
                            <div v-if="plan.Sunday.morningSnack" class="mb-2">
                                <p class="mb-0 text-uppercase fw-semibold fs-6">Morning Snack</p>
                                <p>{{ plan.Sunday.morningSnack }}</p>
                            </div>
                            <div v-if="plan.Sunday.lunch" class="mb-2">
                                <p class="mb-0 text-uppercase fw-semibold fs-6">Lunch</p>
                                <p>{{ plan.Sunday.lunch }}</p>
                            </div>
                            <div v-if="plan.Sunday.afternoonSnack" class="mb-2">
                                <p class="mb-0 text-uppercase fw-semibold fs-6">Afternoon Snack</p>
                                <p>{{ plan.Sunday.afternoonSnack }}</p>
                            </div>
                            <div v-if="plan.Sunday.dinner" class="mb-2">
                                <p class="mb-0 text-uppercase fw-semibold fs-6">Dinner</p>
                                <p>{{ plan.Sunday.dinner }}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="row" v-if="plan.base">
                <div class="col-12">
                    <div class="p-2 border bg-light">
                        <div class="card-header">
                            <p class="fw-semibold text-uppercase">More Informations about the plan.</p>
                        </div>
                        <div class="card-body">
                            <p>{{ plan.base }}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <!-- Plan Cards -->
        <!-- Update Plan Form -->
        <div v-else class="container-fluid mb-5">
            <p class="fs-5 text-uppercase">Update your meal plan</p>
            <form @submit.prevent="updatePlan">
                <button type="submit" class="btn btn-sm btn-outline-primary">SAVE</button>
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
                                    <textarea name="mondayBreakfast" id="mondayBreakfast" class="form-control" placeholder="BREAKFAST" v-model="plan.Monday.breakfast"></textarea>
                                    <label for="mondayBreakfast">BREAKFAST</label>
                                </div>
                                <div class="form-floating mb-3">
                                    <textarea name="mondayMorning" id="mondayMorning" class="form-control" placeholder="MORNING SNACK" v-model="plan.Monday.morningSnack"></textarea>
                                    <label for="mondayMorning">MORNING SNACK</label>
                                </div>
                                <div class="form-floating mb-3">
                                    <textarea name="mondayLunch" id="mondayLunch" class="form-control" placeholder="LUNCH" v-model="plan.Monday.lunch"></textarea>
                                    <label for="mondayLunch">LUNCH</label>
                                </div>
                                <div class="form-floating mb-3">
                                    <textarea name="mondayAfternoon" id="mondayAfternoon" class="form-control" placeholder="AFTERNOON SNACK" v-model="plan.Monday.afternoonSnack"></textarea>
                                    <label for="mondayAfternoon">AFTERNOON SNACK</label>
                                </div>
                                <div class="form-floating mb-3">
                                    <textarea name="mondayDinner" id="mondayDinner" class="form-control" placeholder="DINNER" v-model="plan.Monday.dinner"></textarea>
                                    <label for="mondayDinner">DINNER</label>
                                </div>
                            </div>
                        </div>
                    </div>
                    <!-- Tuesday -->
                    <div class="accordion-item">
                        <h2 class="accordion-header" id="flush-headingOne">
                            <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseTuesday" aria-expanded="false" aria-controls="flush-collapseTuesday">
                                <span class="fw-semibold">Tuesday</span>
                            </button>
                        </h2>
                        <div id="flush-collapseTuesday" class="accordion-collapse collapse" aria-labelledby="flush-collapseTuesday" data-bs-parent="#accordionFlushExample">
                            <div class="p-3">
                                <div class="form-floating mb-3">
                                    <textarea name="tuesdayBreakfast" id="tuesdayBreakfast" class="form-control" placeholder="BREAKFAST" v-model="plan.Tuesday.breakfast"></textarea>
                                    <label for="tuesdayBreakfast">BREAKFAST</label>
                                </div>
                                <div class="form-floating mb-3">
                                    <textarea name="tuesdayMorning" id="tuesdayMorning" class="form-control" placeholder="MORNING SNACK" v-model="plan.Tuesday.morningSnack"></textarea>
                                    <label for="tuesdayMorning">MORNING SNACK</label>
                                </div>
                                <div class="form-floating mb-3">
                                    <textarea name="tuesdayLunch" id="tuesdayLunch" class="form-control" placeholder="LUNCH" v-model="plan.Tuesday.lunch"></textarea>
                                    <label for="tuesdayLunch">LUNCH</label>
                                </div>
                                <div class="form-floating mb-3">
                                    <textarea name="tuesdayAfternoon" id="tuesdayAfternoon" class="form-control" placeholder="AFTERNOON SNACK" v-model="plan.Tuesday.afternoonSnack"></textarea>
                                    <label for="tuesdayAfternoon">AFTERNOON SNACK</label>
                                </div>
                                <div class="form-floating mb-3">
                                    <textarea name="tuesdayDinner" id="tuesdayDinner" class="form-control" placeholder="DINNER" v-model="plan.Tuesday.dinner"></textarea>
                                    <label for="tuesdayDinner">DINNER</label>
                                </div>
                            </div>
                        </div>
                    </div>
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
                                    <textarea name="wednesdayBreakfast" id="wednesdayBreakfast" class="form-control" placeholder="BREAKFAST" v-model="plan.Wednesday.breakfast"></textarea>
                                    <label for="wednesdayBreakfast">BREAKFAST</label>
                                </div>
                                <div class="form-floating mb-3">
                                    <textarea name="wednesdayMorning" id="wednesdayMorning" class="form-control" placeholder="MORNING SNACK" v-model="plan.Wednesday.morningSnack"></textarea>
                                    <label for="wednesdayMorning">MORNING SNACK</label>
                                </div>
                                <div class="form-floating mb-3">
                                    <textarea name="wednesdaLunch" id="wednesdaLunch" class="form-control" placeholder="LUNCH" v-model="plan.Wednesday.lunch"></textarea>
                                    <label for="wednesdaLunch">LUNCH</label>
                                </div>
                                <div class="form-floating mb-3">
                                    <textarea name="wednesdayAfternoon" id="wednesdayAfternoon" class="form-control" placeholder="AFTERNOON SNACK" v-model="plan.Wednesday.afternoonSnack"></textarea>
                                    <label for="wednesdayAfternoon">AFTERNOON SNACK</label>
                                </div>
                                <div class="form-floating mb-3">
                                    <textarea name="wednesdayDinner" id="wednesdayDinner" class="form-control" placeholder="DINNER" v-model="plan.Wednesday.dinner"></textarea>
                                    <label for="wednesdayDinner">DINNER</label>
                                </div>
                            </div>
                        </div>
                    </div>
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
                                    <textarea name="thursdayBreakfast" id="thursdayBreakfast" class="form-control" placeholder="BREAKFAST" v-model="plan.Thursday.breakfast"></textarea>
                                    <label for="thursdayBreakfast">BREAKFAST</label>
                                </div>
                                <div class="form-floating mb-3">
                                    <textarea name="thursdayMorning" id="thursdayMorning" class="form-control" placeholder="MORNING SNACK" v-model="plan.Thursday.morningSnack"></textarea>
                                    <label for="thursdayMorning">MORNING SNACK</label>
                                </div>
                                <div class="form-floating mb-3">
                                    <textarea name="thursdayLunch" id="thursdayLunch" class="form-control" placeholder="LUNCH" v-model="plan.Thursday.lunch"></textarea>
                                    <label for="thursdayLunch">LUNCH</label>
                                </div>
                                <div class="form-floating mb-3">
                                    <textarea name="thursdayAfternoon" id="thursdayAfternoon" class="form-control" placeholder="AFTERNOON SNACK" v-model="plan.Thursday.afternoonSnack"></textarea>
                                    <label for="thursdayAfternoon">AFTERNOON SNACK</label>
                                </div>
                                <div class="form-floating mb-3">
                                    <textarea name="thursdayDinner" id="thursdayDinner" class="form-control" placeholder="DINNER" v-model="plan.Thursday.dinner"></textarea>
                                    <label for="thursdayDinner">DINNER</label>
                                </div>
                            </div>
                        </div>
                    </div>
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
                                    <textarea name="fridayBreakfast" id="fridayBreakfast" class="form-control" placeholder="BREAKFAST" v-model="plan.Friday.breakfast"></textarea>
                                    <label for="fridayBreakfast">BREAKFAST</label>
                                </div>
                                <div class="form-floating mb-3">
                                    <textarea name="fridayMorning" id="fridayMorning" class="form-control" placeholder="MORNING SNACK" v-model="plan.Friday.morningSnack"></textarea>
                                    <label for="fridayMorning">MORNING SNACK</label>
                                </div>
                                <div class="form-floating mb-3">
                                    <textarea name="fridayLunch" id="fridayLunch" class="form-control" placeholder="LUNCH" v-model="plan.Friday.lunch"></textarea>
                                    <label for="fridayLunch">LUNCH</label>
                                </div>
                                <div class="form-floating mb-3">
                                    <textarea name="fridayAfternoon" id="fridayAfternoon" class="form-control" placeholder="AFTERNOON SNACK" v-model="plan.Friday.afternoonSnack"></textarea>
                                    <label for="fridayAfternoon">AFTERNOON SNACK</label>
                                </div>
                                <div class="form-floating mb-3">
                                    <textarea name="fridayDinner" id="fridayDinner" class="form-control" placeholder="DINNER" v-model="plan.Friday.dinner"></textarea>
                                    <label for="fridayDinner">DINNER</label>
                                </div>
                            </div>
                        </div>
                    </div>
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
                                    <textarea name="saturdayBreakfast" id="saturdayBreakfast" class="form-control" placeholder="BREAKFAST" v-model="plan.Saturday.breakfast"></textarea>
                                    <label for="saturdayBreakfast">BREAKFAST</label>
                                </div>
                                <div class="form-floating mb-3">
                                    <textarea name="saturdayMorning" id="saturdayMorning" class="form-control" placeholder="MORNING SNACK" v-model="plan.Saturday.morningSnack"></textarea>
                                    <label for="saturdayMorning">MORNING SNACK</label>
                                </div>
                                <div class="form-floating mb-3">
                                    <textarea name="saturdayLunch" id="saturdayLunch" class="form-control" placeholder="LUNCH" v-model="plan.Saturday.lunch"></textarea>
                                    <label for="saturdayLunch">LUNCH</label>
                                </div>
                                <div class="form-floating mb-3">
                                    <textarea name="saturdayAfternoon" id="saturdayAfternoon" class="form-control" placeholder="AFTERNOON SNACK" v-model="plan.Saturday.afternoonSnack"></textarea>
                                    <label for="saturdayAfternoon">AFTERNOON SNACK</label>
                                </div>
                                <div class="form-floating mb-3">
                                    <textarea name="saturdayDinner" id="saturdayDinner" class="form-control" placeholder="DINNER" v-model="plan.Saturday.dinner"></textarea>
                                    <label for="saturdayDinner">DINNER</label>
                                </div>
                            </div>
                        </div>
                    </div>
                    <!-- Sunday -->
                    <div class="accordion-item">
                        <h2 class="accordion-header" id="flush-headingOne">
                            <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseSunday" aria-expanded="false" aria-controls="flush-collapseSaturday">
                                <span class="fw-semibold">Sunday</span>
                            </button>
                        </h2>
                        <div id="flush-collapseSunday" class="accordion-collapse collapse" aria-labelledby="flush-headingOne" data-bs-parent="#accordionFlushExample">
                            <div class="p-3">
                                <div class="form-floating mb-3">
                                    <textarea name="sundayBreakfast" id="sundayBreakfast" class="form-control" placeholder="BREAKFAST" v-model="plan.Sunday.breakfast"></textarea>
                                    <label for="sundayBreakfast">BREAKFAST</label>
                                </div>
                                <div class="form-floating mb-3">
                                    <textarea name="sundayMorning" id="sundayMorning" class="form-control" placeholder="MORNING SNACK" v-model="plan.Sunday.morningSnack"></textarea>
                                    <label for="sundayMorning">MORNING SNACK</label>
                                </div>
                                <div class="form-floating mb-3">
                                    <textarea name="sundayLunch" id="sundayLunch" class="form-control" placeholder="LUNCH" v-model="plan.Sunday.lunch"></textarea>
                                    <label for="sundayLunch">LUNCH</label>
                                </div>
                                <div class="form-floating mb-3">
                                    <textarea name="sundayAfternoon" id="sundayAfternoon" class="form-control" placeholder="AFTERNOON SNACK" v-model="plan.Sunday.afternoonSnack"></textarea>
                                    <label for="sundayAfternoon">AFTERNOON SNACK</label>
                                </div>
                                <div class="form-floating mb-3">
                                    <textarea name="sundayDinner" id="sundayDinner" class="form-control" placeholder="DINNER" v-model="plan.Sunday.dinner"></textarea>
                                    <label for="sundayDinner">DINNER</label>
                                </div>
                            </div>
                        </div>
                    </div>
                    <!-- Informations -->
                    <div class="accordion-item">
                        <h2 class="accordion-header" id="flush-headingOne">
                            <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseInfo" aria-expanded="false" aria-controls="flush-collapseSaturday">
                                <span class="fw-semibold">More informations about the plan</span>
                            </button>
                        </h2>
                        <div id="flush-collapseInfo" class="accordion-collapse collapse" aria-labelledby="flush-headingOne" data-bs-parent="#accordionFlushExample">
                            <div class="p-3">
                                <div class="form-floating mb-3">
                                    <textarea name="infoBreackfast" id="infoBreackfast" class="form-control" placeholder="BREACKFAST" v-model="plan.base"></textarea>
                                    <label for="infoBreackfast">Informations</label>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </form>
        </div>
        <!-- Update Plan Form -->

    </div>
</template>

<script>
import axios from 'axios'; 

export default{
    name: 'WeightPlanTool', 
    data(){
        return{
            showForm: false, 
            plan: {
                "Monday": {
                    "breakfast": "", 
                    "morningSnack": "", 
                    "lunch": "", 
                    "afternoonSnack": "", 
                    "dinner": ""
                }, 
                "Tuesday": {
                    "breakfast": "", 
                    "morningSnack": "", 
                    "lunch": "", 
                    "afternoonSnack": "", 
                    "dinner": ""
                }, 
                "Wednesday": {
                    "breakfast": "", 
                    "morningSnack": "", 
                    "lunch": "", 
                    "afternoonSnack": "", 
                    "dinner": ""
                }, 
                "Thursday": {
                    "breakfast": "", 
                    "morningSnack": "", 
                    "lunch": "", 
                    "afternoonSnack": "", 
                    "dinner": ""
                }, 
                "Friday": {
                    "breakfast": "", 
                    "morningSnack": "", 
                    "lunch": "", 
                    "afternoonSnack": "", 
                    "dinner": ""
                }, 
                "Saturday": {
                    "breakfast": "", 
                    "morningSnack": "", 
                    "lunch": "", 
                    "afternoonSnack": "", 
                    "dinner": ""
                }, 
                "Sunday": {
                    "breakfast": "", 
                    "morningSnack": "", 
                    "lunch": "", 
                    "afternoonSnack": "", 
                    "dinner": ""
                }, 
                "base": "", 
            }, 
        }
    }, 
    methods: {
        async getUserInfo(){
            await axios 
                .get("/auth/users/me/")
                .then(response => {
                    if (response.data.food_plan){
                        this.plan = response.data.food_plan; 
                    }
                })
                .catch(error => {
                    this.$router.push({name: 'error'}); 
                })
        }, 
        async updatePlan(){
            await axios 
                .patch("/auth/users/me/", {food_plan: this.plan})
                .then(repsonse => {
                    this.$store.commit('setMealPlan', this.plan);
                    this.showForm = false; 
                })
                .catch(error => {
                    this.$router.push({name: 'error'});
                })
        }, 
    }, 
    mounted(){
        this.getUserInfo(); 
    }, 
}
</script>

<style scoped></style>