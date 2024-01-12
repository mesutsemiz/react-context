import {createContext} from "react";

export const GlbalContext = createContext();

export const GlobalProvider=(props)=>{
    return(
        <GlbalContext.Provider value={{deger:"mesut" }}>
            {props.children}
        </GlbalContext.Provider>
    )
}