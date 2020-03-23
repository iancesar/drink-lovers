import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        filter: '',
        cocktails: [],
        cocktail: {},
        sideBar: false,
        cocktailToBeLoved: {},
        cocktailSheet: false,
        isLogged: false,
        favorites: []
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
        },
        applyIsLoged(state, payload) {
            state.isLogged = payload
        },
        applyFavorites(state, payload) {
            state.favorites = payload
        },
        pushFavorites(state, payload) {
            payload.loved = true
            state.favorites.push(payload)
        },
        removeFavorites(state, payload) {
            state.favorites = state.favorites.filter(function (obj) {
                return obj.id !== payload.id;
            });

            // state.favorites.push(payload)
        }
    },
    getters: {
        // isLogged: async () => {
        //     firebaseService.getCurrentUser()
        //         .then(data => {
        //             if (check.isNull(data)) {
        //                 return false;
        //             } else {
        //                 return true
        //             }
        //         }).catch(err => {
        //             return false;
        //         })
        // }
    }
});