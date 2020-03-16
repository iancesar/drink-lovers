import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        filter: '',
        cocktails: [],
        cocktail: {}
    },
    mutations: {
        applyFilter(state, payload) {
            state.filter = payload;
        },
        applyCocktails(state, payload) {
            state.cocktails = payload;
        },
        applyCocktail(state, payload) {
            state.cocktail = payload;
        }
    }
});