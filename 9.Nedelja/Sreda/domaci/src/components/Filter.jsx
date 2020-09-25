import React from 'react'


export const Filter = ({setFilter})=>{
   
   
    const HandleUserChange =(event)=>{
        const {value} = event.target
        setFilter(value) 
    }


    return (
        <div className='inputField'>
            <input placeholder= 'Please Enter Username'  onChange={HandleUserChange} />
            
        </div>
    )
}