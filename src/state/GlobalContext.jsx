import { createContext, useReducer } from "react";

let initialState = {
  name: "Brady",
  count: 0
}

const GlobalContext = createContext()

const GlobalContextProvider = (props) => {

  const reducer = (state, action) => {
    switch(action.type) {
      case "INCREASE":
        return {...state, count: state.count + 1}
      case "DECREASE":
        return {...state, count: state.count - 1}
      case "CHANGE_NAME":
        return {...state, name: action.payload}
      default:
        return state
    }
  }

  const [state, dispatch] = useReducer(reducer, initialState)

  return(
    <GlobalContext.Provider value={{state, dispatch}}>
      {props.children}
    </GlobalContext.Provider>
  )
}

export {GlobalContextProvider}
export default GlobalContext