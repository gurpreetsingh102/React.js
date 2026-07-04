import { useState } from "react";

function Counter() {
  const [count, setCount] = useState(0);

  function reset(){
    {
        setCount( 0)
    }
  }
  function limt(){

    if(count < 10){
    setCount(count -1 )
    }

  }
  

  return (
    <div>
      <h2>{count}</h2>

      <button onClick={() => setCount(count + 1)}>
        ADD
      </button>

       {/* <button onClick={() => setCount(count -1)}>
        Rmove
      </button> */}

      <button onClick={reset}>Reset </button>
      <button onClick={limt}>Rmove</button>
    </div>
  );
}

export default Counter;

// import { useState } from "react"

// function Deal(){
//     const[re,setRe] = useState(0)

//     function increase(){

//     if(re < 10){
//         setRe(re + 1)
//     }
// }

// return (
//     <div>
//         <h2>count:{re}</h2>
//         <button onClick={increase}>Limite</button>
//     </div>
// );
// }


// export default Deal
