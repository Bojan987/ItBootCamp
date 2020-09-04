import React from 'react'
import { Description } from './Description'
import { Emoji } from './Emoji'

export const Card = ({string,url})=>{

    return (
        <>
        <Emoji image={url}/>
        <Description desc={string}/>
        </>
    )
}