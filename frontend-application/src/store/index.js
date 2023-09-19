import { createStore } from 'vuex'

export default createStore({
  state: {
    isAuthenticated: false, 
    token: '', 
    username: '', 
    food_plan: '', 
    training_plan: '', 
  },
  getters: {
  },
  mutations: {
    initializeStore(state){
      if (localStorage.getItem('token')){
        state.token = localStorage.getItem('token'); 
        state.isAuthenticated = true; 
        state.username = localStorage.getItem('username'); 
      } else {
        state.token = ''; 
        state.isAuthenticated = false; 
        state.username = '';
      }
    }, 
    setToken(state, token){
      state.token = token; 
      state.isAuthenticated = true; 
    }, 
    removeToken(state){
      state.token = ''; 
      state.isAuthenticated = false; 
    }, 
    setUsername(state, username){
      state.username = username; 
    }, 
    removeUsername(state){
      state.username = ''; 
    }, 
    setMealPlan(state, plan){
      state.food_plan = plan; 
    }, 
    setTrainingPlan(state, plan){
      state.training_plan = plan; 
    }
  },
  actions: {
  },
  modules: {
  }
})
