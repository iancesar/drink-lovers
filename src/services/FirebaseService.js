import firebase from "firebase/app";
import "firebase/auth";

class FirebaseService {


    async getCurrentUser() {
        let promise = new Promise((resolve, reject) => {
            const unsubscribe = firebase.auth().onAuthStateChanged(user => {
                unsubscribe();
                resolve(user);
            }, reject);
        });

        return promise

    }
}

export default FirebaseService;