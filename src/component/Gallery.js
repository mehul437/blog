import React from 'react'
import './Style.css'
import { Link } from 'react-router-dom'

export default function Gallery() {
    return (
        <div className='gallery'>
        
        <div className="gallerymain">
                <Link to={`/article/${53}`} style={{ textDecoration: 'none' }}>
            <div className="sideone">
                <img className='sideimg' src='\images\autumn.jpg' alt='not available'></img>
                <div className='quote'>
                    <h3>Title of vertical gallery</h3>
                    <p>Travel / August 21 2017</p>

                </div>
            </div>
                </Link>

           
            <div className='sidetwo'>
                <Link to={`/article/${54}`} style={{ textDecoration: 'none' }}>    
                <div className='top'>
                    <img className='topimg' src='\images\gloomyroad.jpg' alt='not available'></img>
                    <div className='quote'>
                        <h4>The sound cloud</h4>
                        <h4>you loved</h4>
                        <p>Travel / August 21 2017</p>
                    </div>
                </div>
                </Link>

                <Link to={`/article/${55}`} style={{ textDecoration: 'none' }}>
                <div className='bottom'>
                    <img className='bottomimg' src='\images\nature.jpg' alt='not available'></img>
                    <div className='quote'>
                        <h4>Nature cloud</h4>
                        <h4> is doomed</h4>
                        <p>Travel / August 21 2017</p>
                </div>
            </div>
            </Link>
          
         </div>
              
        </div> 

        </div>
    )
}
