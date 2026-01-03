import {useState} from "react";
const Random=()=>{
    const [random,setrandom] = useState(0)
        const [alter,setalter] = useState(true)
    let randomHandler=()=>{
        setalter(false)
        setrandom(Math.floor(Math.random()*100)+1)
    }

    return(
        <>
        <div class="container">
            <h1>Random Number Generator</h1>
            <p>1 to 100</p>
            <h1 class="num">{random}</h1>
            <button class="btn" onClick={randomHandler} >Click</button>
     
        
        <p style={{color:"red",display:alter?"block":"none"}}>No number Generated Yet</p> 
           </div>
        
        </>
    )
}
export default Random