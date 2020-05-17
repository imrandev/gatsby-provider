import React,  { useContext } from "react"
import { GlobalDispatchContext } from "../provider/provider"

const Left = () => {
    const dispatch = useContext(GlobalDispatchContext);
    return (
        <div>
            <div>
                <button onClick={
                    () => {
                        dispatch({type: "Windows"});
                    }
                }>Windows OS</button>
            </div>
            <div>
                <button onClick={
                    () => {
                        dispatch({type: "Linux"});
                    }
                }>Linux OS</button>
            </div>
            <div>
                <button onClick={
                    () => {
                        dispatch({type: "Mac"});
                    }
                }>Mac OS</button>
            </div>
        </div>
    )
}
export default Left