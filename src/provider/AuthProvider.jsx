/* eslint-disable react/prop-types */
import { createContext, useEffect, useState } from "react";
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";
import app from "../firebase/firebase.init";
import { getRole } from "../api/users";


const auth = getAuth(app);
export const AuthContext = createContext(null);

const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null)
    const [role, setRole] = useState(null)
    const [loading, setLoading] = useState(true)

    //create user with email and password;
    const createUser = (email, password) => {
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password);
    }

    //get current user;

    useEffect(() => {
        const unSubscribe = onAuthStateChanged(auth, currentUser => {
            setUser(currentUser)
            console.log('current user', currentUser)
            setLoading(false)

        })
        return () => {
            return unSubscribe();
        }
    }, [])


    // get current user role;

    useEffect(() => {
        if (user) {
            getRole(user.email).then(data => setRole(data))
        }
    }, [user])


    //login user with email and password;

    const logIn = (email, password) => {
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password);
    }


    //logout user;

    const logout = () => {
        setLoading(true)
        localStorage.removeItem('access-token')
        return signOut(auth);
    }


    const authInfo = {
        user,
        loading,
        createUser,
        logIn,
        logout,
        role

    }

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;