import React, { useContext, useState, useRef} from 'react'
import { ContextArticle } from './ContextArticle'
import { useEffect } from 'react'
import Article from './Article'

export default function Latest() {
    const[latest]=useContext(ContextArticle)
    const[data,setdata]=useState([])
    const temp=useRef()
    
    temp.current = fil
    let arr;
    useEffect(() => {

        temp.current()

    }, []);
    function fil(){
        arr=latest.filter((item) => item.category === 'latest')
       
    
       setdata([...arr])

       

    }
    return (
        <>
        <h2 className='thetitle'>The Post</h2>
        <hr className='line'></hr>
                <div className='latestbox'>
                    {
                        data.map((item) => <Article  key={item.id} title={item.title} id={item.id} desc={item.description} date={item.date} image={item.image} />
                        ) 
                    }
                </div>
              
         
            
        </>
    )
}
