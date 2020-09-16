import React from 'react'
import { User } from './User'

export const UserDelete = ({id,users,setUsers})=>{
   
   
    const HandleUserDeletion =(id)=>{
        setUsers(prevUsers=>{
            return prevUsers.filter(el=>{
                return el.id !== id
            })
           
        })
        
    }


    return (
        <div>
            <button onClick={()=>HandleUserDeletion(id)}>delete</button>
            <User user={users}/>
            
        </div>
    )
}