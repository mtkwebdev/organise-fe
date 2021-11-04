import React, {useEffect, useState} from 'react'
// import app from './firebase'

export const AuthContext = React.createContext();

export const AuthProvider = ({children}) => {
    const [curentUser, setCurrentUser] = useState(null);

    useEffect(()=> {
        app().auth().onAuthStateChanged(setCurrentUser);
    },[])
}

function Auth() {
    return (
        <AuthContext.Provider value={{setCurrentUser}}>
            {children}
        </AuthContext.Provider>
    )
}

export default Auth
