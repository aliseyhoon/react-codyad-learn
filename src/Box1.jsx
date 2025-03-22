import { useEffect, useState } from "react"

export default function Box1(){

const [isLight , setIsLight] = useState(false)

useEffect(()=>{
    console.log("effected");
},[isLight])

function handleClick(){
    setIsLight(!isLight)
}

    return(
        <div className="box1" style={{background : isLight ? "aqua" : null}}>
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Cum, laboriosam? Porro, a?</p>
            <button onClick ={handleClick}>click here if your dare!</button>
        </div>
    )
} 