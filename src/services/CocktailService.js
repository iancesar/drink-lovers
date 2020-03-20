import FirebaseService from '@/services/FirebaseService'
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
                } else {
                    let rootRef = firebase.database().ref('loved/');
                    rootRef.child(user.uid).orderByChild('cocktail_id').equalTo(cocktail.id).once('value').then(function (snapshot) {
                        snapshot.forEach(child => child.ref.remove())
                    });
                }

            }).catch(err => {
                console.log(err);

            })

    }

}

export default CocktailService;