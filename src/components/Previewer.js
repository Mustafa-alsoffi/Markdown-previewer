
import React from 'react'

export default function Previewer(props) {
    return (
        <div id='previewer'>
            <h3 className='title'>previewer</h3>
            <p>{props.text}</p>
        </div>
    )
}


