"use client";


export const AuthContext = createContext()


export const AuthContextProvider =({children})=>{

    


    const values={}

    return (
        <AuthContext.Provider value={values}>
            {children}
        </AuthContext.Provider>
    )

}
