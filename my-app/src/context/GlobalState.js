import React, { createContext, useReducer } from "react";
import AppReducer from "./AppReducer";

const intialState = {
    transactions: []
}
//Create context
export const GlobalContext = createContext(intialState);

//provider component

export const GlobalProvider = ({children}) => {
    const[state, despatch] = useReducer (AppReducer,intialState);
    //Action
    function deleteTransaction(id) {
        despatch({
            type:'DELETE_TRANSACTION',
            payload:id
        });
    }

    function addTransaction(transaction) {
        despatch({
            type:'ADD_TRANSACTION',
            payload:transaction
        });
    }
    return (<GlobalContext.Provider value={{
        transactions: state.transactions,
        deleteTransaction,
        addTransaction
    }}>
        {children}
    </GlobalContext.Provider>
    );
}