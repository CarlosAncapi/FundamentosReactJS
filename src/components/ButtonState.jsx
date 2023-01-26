import { useState } from "react";

const ButtonState = () => {

    const arrayState = useState(0);
    
    const stateNumber = arrayState[0];
    const stateFunction = arrayState[1];

    const handleClick = () =>{
        stateFunction(stateNumber+1)
    }
    return <button onClick={handleClick}>button State: {stateNumber}</button>
}
export default ButtonState;