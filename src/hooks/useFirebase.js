import { useState, useEffect } from "react";
import {
    getAuth,
    createUserWithEmailAndPassword,
    signOut,
    signInWithEmailAndPassword,
    onAuthStateChanged,
    GoogleAuthProvider,
    signInWithPopup,
    updateProfile,
  } from "firebase/auth";

import InitializeFirebase from "../Components/Firebase/InitializeFirebase";


InitializeFirebase();

const useFirebase = () => {

    const [user, setUser] = useState({});
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState('');

    const auth = getAuth();
    const googleProvider = new GoogleAuthProvider();

    const registerUser = (email, password, name, location, navigate) => {
        setIsLoading(true);
        createUserWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                const newUser = { email: email, displayName: name }
                setUser(newUser)

                // Send name data firebase

                updateProfile(auth.currentUser, {
                    displayName: name,
                }).then(() => {
                    // Profile updated!
                    // ...
                }).catch((error) => {
                    // An error occurred
                    // ...
                });


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


    // const signInUsingGoogle = (location, navigate) => {
    //     setIsLoading(true)
    //     signInWithPopup(auth, googleProvider)
    //         .then(result => {
    //             const user = result.user
    //             setError('')

    //         }).catch((error) => {
    //             setError(error.message);
    //         }).finally(() => setIsLoading(false));
    // }

    const googleLogIn = (location, navigate) => {
        setIsLoading(true);
        signInWithPopup(auth, googleProvider)
            .then((result) => {
                const user = result.user;
                // console.log(user);
                // saveUserGoogle(user.email, user.displayName, user.photoURL, "PUT");

                const destination = location.state?.from || "/";
                navigate(destination);
                setError("");
            })
            .catch((error) => {
                setError(error.message);
            })
            .finally(() => setIsLoading(false));
    };





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

    const logOut = () => {
        signOut(auth).then(() => {

        }).catch((error) => {

        })
    }




    return {
        user,
        googleLogIn,
        registerUser,
        logOut,
        LogIn,
        isLoading,
        error,
    }

};


export default useFirebase;