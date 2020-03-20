import firebase from "firebase/app";
import "firebase/auth";

class LoginService {


    signUp(email, password) {
        return firebase.auth().createUserWithEmailAndPassword(email, password);
    }

    signIn(email, password) {
        return firebase.auth().signInWithEmailAndPassword(email, password);
    }

    signInSocial(provider) {
        return firebase.auth().signInWithPopup(provider)
    }

    recovery(email) {
        return firebase.auth().sendPasswordResetEmail(email);
    }

    signOut() {
        firebase.auth().signOut();
    }

}

export default LoginService;