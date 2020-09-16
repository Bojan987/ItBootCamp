import React from 'react'
import { User } from './User'

export const AllUsers = ({users})=>{
    return (
        <div>
            
            {users.map(user=>
                <User key={user.id} user={user}/>
            )}
        </div>
    )
}