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
    const [admin, setAdmin] = useState(false);

    const auth = getAuth();
    const googleProvider = new GoogleAuthProvider();

    const registerUser = (email, password, name, location, navigate) => {
        setIsLoading(true);
        createUserWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                const newUser = { email: email, displayName: name }
                setUser(newUser)

                // Send data from Database Mongodb  
                // just call function 
                saveUserDatabase(email, name, 'POST')


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




    const googleLogIn = (location, navigate) => {
        setIsLoading(true);
        signInWithPopup(auth, googleProvider)
            .then((result) => {
                const user = result.user;
                // send data from Database Mongodb 
                saveUserDatabase(user.email, user.displayName, 'PUT')

                //correct  location redirect

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

    // Send Data from Database 

    const saveUserDatabase = (email, displayName, method) => {
        const user = { email, displayName }
        fetch('http://localhost:5000/users', {
            method: method,
            headers: {
                'content-type': 'application/json',
            },
            body: JSON.stringify(user),
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
            })
    }

    // data load from database 
    useEffect(() => {
        fetch(`http://localhost:5000/users/${user?.email}`)
            .then(res => res.json())
            .then(data => setAdmin(data.admin))


    }, [user?.email])




    return {
        user,
        googleLogIn,
        registerUser,
        logOut,
        LogIn,
        isLoading,
        error,
        admin,
    }

};


export default useFirebase;