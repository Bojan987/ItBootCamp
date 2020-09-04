import React, { useState } from 'react'

export const Forma =({str})=>{
    const [buttonString,setButtonString] = useState('')

function handleInput(e){
    console.log(e.target.value)
    setButtonString(e.target.value)
}
return (
        <>
            <input  type="text" 
                    placeholder="Enter Text here" 
                    onInput={handleInput}>
                    {/* value = {buttonString} */}
            </input>
            <button>{str} {buttonString}</button>
        </>)
}