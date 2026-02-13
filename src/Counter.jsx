import { useState } from "react"
export default function Counter() {

    
    const [count, setCount] = useState(0);

    function counterAdd(){
        setCount(count+1);
    }
    function counterSub(){
        if(count<=0){
            alert("Cant possible dammit!!!");
            return;
        }
        setCount(count-1);
    }
   
    
    

    return(
        <div>
                <h1>Count={count}</h1>
            <button onMouseOver={counterAdd} >+</button><br /><br />
            <button onMouseOver={counterSub}>-</button>

        </div>
    )
}