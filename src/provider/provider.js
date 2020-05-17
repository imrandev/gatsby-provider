import React from "react"

export const GlobalStateContext = React.createContext();
export const GlobalDispatchContext = React.createContext();

const initialState = {
    name: "Nothing",
};

function update(state, action) {
    return {
        name: action.type,
    }
};

const Provider = ({ children }) => {
    const [state, dispatch] = React.useReducer(update, initialState)
    return (
        <GlobalStateContext.Provider value={state}>
            <GlobalDispatchContext.Provider value={dispatch}>
                {children}
            </GlobalDispatchContext.Provider>
        </GlobalStateContext.Provider>
    )
};
export default Provider