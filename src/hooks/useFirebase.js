import { useState, useEffect } from "react";
import { getAuth, createUserWithEmailAndPassword, signOut, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import InitializeFirebase from "../Components/Firebase/InitializeFirebase";


InitializeFirebase();
const useFirebase = () => {

    const [user, setUser] = useState({});
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState('');

    const auth = getAuth();
    const provider = new GoogleAuthProvider();

    const registerUser = (email, password,  location, navigate) => {
        setIsLoading(true);
        createUserWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                const destination = location?.state?.from || '/';
                navigate(destination);
                setError('')
            })
            .catch((error) => {
                setError(error.message);
            })
            .finally(() => setIsLoading(false));
    };

    

    const LogIn = (email, password, location, navigate) => {
        setIsLoading(true)
        signInWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                const destination = location?.state?.from || '/';
                navigate(destination);
                setError('')
            })
            .catch((error) => {
                setError(error.message);
            })
            .finally(() => setIsLoading(false));
    };


    const signInUsingGoogle = (location, navigate) => {
        signInWithPopup(auth, provider)
            .then(result => {
                setUser(result);

            }).catch((error) => {
                setError(error.message);
            });
    }


    const logOut = () => {
        signOut(auth).then(() => {

        }).catch((error) => {

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

    }, [auth]);



    return {
        user,
        signInUsingGoogle,
        registerUser,
        logOut,
        LogIn,
        isLoading,
        error,
    }

};


export default useFirebase;