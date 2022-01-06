import React from 'react'
import { Link } from 'react-router-dom'
export default function Post(props) {
    
    return (
            <>
             <Link to={`/article/${props.id}`} style={{textDecoration:'none'}}>
            <div className='latestblock'>
                    <div className='imagee'>
                        <img src={props.image} alt="not available"></img>
                    </div>
                    <div className='descrip'>
                        <h3 className='latestti'>{props.title}</h3>
                        <p  className='data'>{props.desc}</p>
                        <p className='date'>{props.date}</p>
                    </div>

               
            </div>
            </Link>
            <hr className='latestline'/>
            </>
            
        
    )
}
