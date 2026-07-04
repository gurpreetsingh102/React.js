import { useState } from "react";

function Nme(){
    const [name, setName] = useState("Rahul")

    function NameChange(){
        setName("Aman")
    }
    function Reset(){

        setName("Rahul")

    }
    return(
        <div>
            <h2>{name}</h2>
            <button onClick={Reset}>Reset</button>
            <button onClick={NameChange}>Add</button>
        </div>
    )
}
 export default Nme