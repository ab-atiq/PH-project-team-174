import { useState,useEffect } from "react";
import { getAuth, createUserWithEmailAndPassword, signOut, onAuthStateChanged, signInWithEmailAndPassword } from "firebase/auth";
import InitializeFirebase from "../Components/Firebase/InitializeFirebase";


InitializeFirebase();
const useFirebase = () => {

    const [user, setUser] = useState({});
    const auth = getAuth();

    const registerUser = (email, password) => {
        createUserWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                // // Signed in 
                // const user = userCredential.user;
                // // ...
            })
            .catch((error) => {
                // const errorCode = error.code;
                // const errorMessage = error.message;
                // // ..
            });
    }

    const LogIn = (email, password) => {

        signInWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                // Signed in 
                // const user = userCredential.user;
                // ...
            })
            .catch((error) => {
                // const errorCode = error.code;
                // const errorMessage = error.message;
            });
    }


    const logOut = () => {
        signOut(auth).then(() => {
            // Sign-out successful.
        }).catch((error) => {
            // An error happened.
        })
    }


    // Obsurber 

    useEffect(() => {
     const unsubscribe=  onAuthStateChanged(auth, (user) => {
            if (user) {
                
                setUser(user);
            } else {
                setUser();
            }
     });
        return () => unsubscribe;

    }, []);


    return {
        user,
        registerUser,
        logOut,
        LogIn,


    }

};

export default useFirebase;