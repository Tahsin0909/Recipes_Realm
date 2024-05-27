/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */

import { GoogleAuthProvider, onAuthStateChanged, signInWithPopup, signOut } from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import auth from "../../firebaseSdk";

// import useAxiosPublic from "../../Hooks/useAxiosPublic";




const AuthContext = createContext()
const ContextApi = ({ children }) => {
    // const axiosPublic = useAxiosPublic()
    // emailAndPassword Authentication
    const [AuthUser, setAuthUser] = useState(null)
    const [loading, setLoading] = useState(true)


    // Google Sign In
    const GoogleProvider = new GoogleAuthProvider();

    const GoogleSignUp = () => {
        return signInWithPopup(auth, GoogleProvider)
    }

    // Log Out User
    const LogOut = () => {
        setLoading(true)
        setAuthUser(null)
        return signOut(auth)
    }

    //Manage User

    useEffect(() => {
        const Unsubscribe = onAuthStateChanged(auth, (user) => {
            setAuthUser(user)
            if (user) {
                // const UserInfo = {
                //     email: user?.email
                // }
                // get token and store client
                // axiosPublic.post('/jwt', UserInfo)
                //     .then(res => {
                //         if (res.data.token) {
                //             localStorage.setItem('access-token', res.data.token);
                //         }
                //     })

                setLoading(false)
            }
            else {

                localStorage.removeItem('access-token');
                setLoading(false)
            }
        });

        return () => Unsubscribe()
    }, [])


    const contextValue = {
        AuthUser,
        loading,
        GoogleSignUp,
        LogOut
    }


    return (
        <AuthContext.Provider value={contextValue}>
            {children}
        </AuthContext.Provider>
    )
};

export { AuthContext, ContextApi };