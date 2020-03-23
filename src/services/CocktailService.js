import FirebaseService from '@/services/FirebaseService'
import axios from 'axios'
import Cocktail from '@/models/Cocktail'
import store from "@/store/store"
import check from 'underscore'
import firebase from "firebase/app";
import "firebase/database"


class CocktailService {

    firebaseService = new FirebaseService();

    loveIt(cocktail) {

        this.firebaseService.getCurrentUser()
            .then(user => {

                let data = {
                    cocktail_id: cocktail.id
                }

                if (cocktail.loved) {
                    firebase.database().ref('loved/' + user.uid).push(data);
                    store.commit('pushFavorites', cocktail)
                } else {
                    let rootRef = firebase.database().ref('loved/');
                    rootRef.child(user.uid).orderByChild('cocktail_id').equalTo(cocktail.id).once('value').then(function (snapshot) {
                        snapshot.forEach(child => child.ref.remove())
                        store.commit('removeFavorites', cocktail)
                    });
                }

            }).catch(err => {
                console.log(err);

            })

    }

    async getFavorites() {
        let cocktail = new Cocktail();
        let favoriteIds = await this.getFavoriteIds();
        for await (let id of favoriteIds) {
            /*
            * The cocktail DB api, doesn't have a endpoint to find by multiples IDs,
            * unfortunately, the way that I found is do a request for each cocktail id stored at Firebase.
            */
            let data = await axios.get('https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=' + id);
            store.commit('pushFavorites', cocktail.convert(data.data.drinks[0]))
        }

    }

    async getFavoriteIds() {
        let user = await this.firebaseService.getCurrentUser();
        if (!check.isNull(user)) {
            let snapshot = await firebase.database().ref('loved/').child(user.uid).once('value')
            let favorites = [];
            snapshot.forEach(child => {
                favorites.push(child.val().cocktail_id)
            })
            return favorites
        } else {
            return []
        }
    }

}

export default CocktailService;