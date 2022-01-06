import React from 'react'

export default function Stories(props) {
    return (
        <>
        <div className='storybox'>
            <h3>{props.title}</h3>
            <p>{props.desc} </p>
            <p>{props.date}</p>
        </div>
        <hr className='storyline'></hr>
        </>
    )
}
