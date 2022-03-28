import React,{useState} from "react";
import './style.css';


export default function Main(){

    const [word,setWord]=useState('');
    const [randomString,setRandomString]=useState('');
    const[out,setOut]=useState('');
    let checksub =()=>{
        let s1=word;
        let s2=randomString;
        let M= s1.length;
        let N = s2.length;
        var counter=0;
        for (var i = 0; i<M; i++) {
            
         if(s2[counter]===s1[i]){
            counter++;
            if(counter===N){
                setOut('Yes_is_Substring');
                break;
            }
         }
         else{
             if(counter>0){
                 i-=counter;
             }
             counter=0;
             setOut('Not_a_Substring');
         }
        
                             
    }
}
    const WordHandler=(event)=>{
        setWord(event.target.value );
    };
    const RandomHandler=(event)=>{
        setRandomString(event.target.value );
    };
    return(<div className="Main">
            <div className="first">
                <label>Enter the first word                       </label>
             <input type="text" value={word} onChange={WordHandler} />
            </div>
            <div className="second">
            <label>Enter the second word  </label>
            <input type="text" value={randomString} onChange={RandomHandler} />
            </div>
            <div className="button">
            <button onClick={checksub}>Check</button>
            </div>
            <div>
            
                <p>{out}</p>
                </div>
            </div> 
            
               
);
}
