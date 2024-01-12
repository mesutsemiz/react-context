import {createContext} from "react";

export const GlbalContext = createContext();

export const GlobalProvider=(props)=>{
    return(
        <GlbalContext.Provider value={{id:25,deger:"mesut" }}>
            {props.children}
        </GlbalContext.Provider>
    )
}