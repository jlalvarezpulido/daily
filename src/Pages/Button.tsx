import '../App.css'
import { useState } from 'react';

export default function Button(){
    const [myEvent, setMyEvent] = useState("OK");
    const [evenOdd, setEvenOdd] = useState(1);
    function buttonHandler(): void{
        if (evenOdd % 2 == 0){setMyEvent("Nice");}
        else{
            setMyEvent("OK");
        }
        setEvenOdd(evenOdd + 1);
    }
    return(
        <div className='Button'>
            <h1>{myEvent}</h1>
            <button onClick={()=>buttonHandler()}>Click Me</button>
        </div>
    );
}