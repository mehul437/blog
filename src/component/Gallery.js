import React from 'react'
import './Style.css'

export default function Gallery() {
    return (
        <div className='gallery'>
        
        <div className="gallerymain">
            <div className="sideone">
                <img className='sideimg' src='\images\autumn.jpg' alt='not available'></img>
                <div className='quote'>
                    <h3>Title of vertical gallery</h3>
                    <p>Travel / August 21 2017</p>
                </div>
                
            </div>
            <div className='sidetwo'>
                <div className='top'>
                    <img className='topimg' src='\images\gloomyroad.jpg' alt='not available'></img>
                    <div className='quote'>
                        <h4>The sound cloud</h4>
                        <h4>you loved</h4>
                        <p>Travel / August 21 2017</p>
                    </div>
                </div>
                <div className='bottom'>
                    <img className='bottomimg' src='\images\nature.jpg' alt='not available'></img>
                    <div className='quote'>
                        <h4>Nature cloud</h4>
                        <h4> is doomed</h4>
                        <p>Travel / August 21 2017</p>
                </div>
            </div>
          
         </div>
              
        </div> 

        </div>
    )
}
