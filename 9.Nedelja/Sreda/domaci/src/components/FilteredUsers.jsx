import React from 'react'

import { UserDelete } from './UserDelete'

export const FilteredUsers = ({filter,users,setUsers})=>{

    return (
        <div>
            {
            filter !== '' &&
            users.filter(user=>user.first_name.toLowerCase().includes(filter.toLowerCase()))
            .map(person=><div>
                <UserDelete key={person.id} users={person} setUsers={setUsers} id={person.id} />
                
            </div>)}
        </div>
    )
}