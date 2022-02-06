import { useState, useEffect } from "react";
import { getAuth, createUserWithEmailAndPassword, signOut, onAuthStateChanged, signInWithEmailAndPassword } from "firebase/auth";
import InitializeFirebase from "../Components/Firebase/InitializeFirebase";


InitializeFirebase();
const useFirebase = () => {

    const [user, setUser] = useState({});
    const auth = getAuth();
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState('');

    const registerUser = (email, password, name) => {
        setIsLoading(true);
        createUserWithEmailAndPassword(auth, email, password, name)
            .then((userCredential) => {
                setError('')
            })
            .catch((error) => {
                setError(error.message);
            })
            .finally(() => setIsLoading(false));
    }

    const LogIn = (email, password) => {
        setIsLoading(true)
        signInWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                setError('')
            })
            .catch((error) => {
                setError(error.message);

            })
            .finally(() => setIsLoading(false));
    };



    const logOut = () => {
        signOut(auth).then(() => {
            // Sign-out successful.
        }).catch((error) => {
            // An error happened.
        })
    }


    // Obsurber 

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            if (user) {

                setUser(user);
            } else {
                setUser();
            }
            setIsLoading(false)
        });
        return () => unsubscribe;

    }, []);



    return {
        user,
        registerUser,
        logOut,
        LogIn,
        isLoading,
        error,
    }

};


export default useFirebase;