import Vue from 'vue';
import Vuex from 'vuex';
import check from "underscore";
import FirebaseService from '@/services/FirebaseService'

let firebaseService = new FirebaseService();

Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        filter: '',
        cocktails: [],
        cocktail: {},
        sideBar: false,
        cocktailToBeLoved: {},
        cocktailSheet: false,
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
        },
        changeSideBar(state, payload) {
            state.sideBar = payload;
        },
        applyCocktailToBeLoved(state, payload) {
            state.cocktailToBeLoved = payload;
        },
        changeCocktailSheet(state, payload) {
            state.cocktailSheet = payload
        }
    },
    getters: {
        isLogged: async () => {
            return firebaseService.getCurrentUser()
                .then(data => {
                    if (check.isNull(data)) {
                        return false;
                    } else {
                        return true
                    }
                }).catch(err => {
                    return false;
                })
        }
    }
});