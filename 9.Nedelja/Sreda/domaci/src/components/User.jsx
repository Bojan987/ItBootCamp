import React from 'react'

export const User = ({user})=>{
    
    return (
        <div>
            <p>First Name: {user.first_name}</p>
            <p>Last Name: {user.last_name}</p>
            <hr></hr>
        </div>
    )
}