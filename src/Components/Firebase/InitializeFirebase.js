import firebaseConfig from "./FirebaseConfig";
import { initializeApp } from "firebase/app";

const InitializeFirebase = () => {
    initializeApp(firebaseConfig)
}
export default InitializeFirebase;