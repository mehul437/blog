import React from 'react'
import { Link} from 'react-router-dom'


export default function Article( props) {

    
    return (
        <div className='article'>
            <Link to={`/article/${props.id}`} style={{textDecoration:'none'}}> 
           <div>
                    <div className='image'>
                        <img src={props.image} alt="not available"></img>
                    </div>
                    <div className='desc'>
                        <h2>{props.title}</h2>
                        <p className='data'>{props.desc}</p>
                        <p className='date'>{props.date}</p>
                    </div>
           </div>
            </Link>
        </div>
    )
}
