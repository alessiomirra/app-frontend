import axios from 'axios'
import { createRouter, createWebHistory } from 'vue-router'
import store from './store';

export async function logout(){
    const router = createRouter({
        history: createWebHistory(),
        routes: []
    }); 

    await axios 
        .post("auth/token/logout/")
        .then(response => {
            axios.defaults.headers.common['Authorization'] = '';

            localStorage.removeItem('token'); 
            store.commit('removeToken');
            store.commit('removeUsername');

            router.push('/login')
                .then(() => {router.go()});
        })
        .catch(error => {
            router.push({name: 'error'});
        })
};