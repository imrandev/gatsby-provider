import React, {useContext} from "react"
import {GlobalStateContext} from "../provider/provider"

const Right = () => {
  const state = useContext(GlobalStateContext);    
  return (
    <div style={{float: "right"}}>
      <h1>Right Side</h1>
      <p>{state.name}</p>
    </div>
  )
}
export default Right