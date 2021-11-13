import { useEffect, useState } from 'react';
import { getAuth, createUserWithEmailAndPassword, onAuthStateChanged, GoogleAuthProvider, signInWithPopup, signOut, signInWithEmailAndPassword, updateProfile } from "firebase/auth";
import initializeFirebase from '../../src/pages/Login/Firebase/Firebase.init';
import { useHistory } from 'react-router';
import axios from 'axios';


initializeFirebase();
const useFirebase = () => {
    const history = useHistory();
    const [user, setUser] = useState({});
    const [isLoading, setIsLoading] = useState(true);
    const auth = getAuth();

    const registerUser = (email, password, name, image, history) => {
        setIsLoading(true);
        createUserWithEmailAndPassword(auth, email, password)
            .then((res) => {
                // Signed in 
                const newUser = { email, displayName: name };
                //set user to state
                setUser(newUser);
                //save user to database
                saveUser(email, name, 'POST');
                //update user name and image
                updateProfile(auth.currentUser, {
                    displayName: name, photoURL: image
                }).then(() => {
                }).catch((error) => {
                });
                history.replace('/');
            }).catch(err => console.log(err.message))
            .finally(setIsLoading(false))

    }

    const googleSignin = () => {
        setIsLoading(true);
        const provider = new GoogleAuthProvider();
        return signInWithPopup(auth, provider);

    }

    const signInUser = (email, password) => {
        setIsLoading(true);
        return signInWithEmailAndPassword(auth, email, password)
        // .then((res) => {
        //     setUser(res.user);
        //     setIsLoading(false);
        // })
        // .catch((error) => {
        //     const errorCode = error.code;
        //     const errorMessage = error.message;
        //     console.log(errorCode, errorMessage);
        // });
    }
    useEffect(() => {
        const unSubscribed = onAuthStateChanged(auth, (user) => {
            if (user) {
                setUser(user)
            } else {
                setUser({})
            }
            setIsLoading(false)
        });

        return () => unSubscribed;
    }, []);

    //Logout Handler
    const handleLogout = () => {
        setIsLoading(true)
        signOut(auth)
            .then(() => {
                alert('Sucessfully Signout');
                setUser({});
            })
            .finally(setIsLoading(false));
    }

    const saveUser = (email, displayName, method) => {
        const user = { email, displayName };
        if (method === 'POST') {
            axios.post('https://immense-island-65259.herokuapp.com/users', user)
                .then()
        } else if (method === 'PUT') {
            axios.put('https://immense-island-65259.herokuapp.com/users', user)
                .then()
        }
    }

    return {
        registerUser,
        user,
        googleSignin,
        isLoading,
        setIsLoading,
        handleLogout,
        signInUser,
        setUser,
        saveUser

    }
};

export default useFirebase;