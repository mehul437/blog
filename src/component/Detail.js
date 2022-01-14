import { useParams } from 'react-router-dom'
import React from 'react'
import { useEffect } from 'react';
import { useRef } from 'react';
import { useContext } from 'react';
import { ContextArticle } from './ContextArticle';
import { useState } from 'react';
export default function Detail() {
    const para=useParams()
    const[latest]=useContext(ContextArticle)
    const[data,setdata]=useState({})
    const temp=useRef()
    temp.current=first;
    let element;
   useEffect(()=>{
   temp.current()
   },[]
   )
  function first(){
      element = latest.find((el) => el.id === para.id);
      setdata(element)

      
    
      
  }
    

    return (
        <div className='detailmain'>
            <h1>{data.title}</h1>
            <p>Share this article : <span className='facebook'><i className="fab fa-facebook fa-2x"></i></span>
                <span className='span'><i className="fab fa-snapchat fa-2x" aria-hidden="true"></i></span>
                <span className='twiter'><i className="fab fa-twitter-square fa-2x" aria-hidden="true"></i></span>
            </p>
            <p>
              Like this article :  <span><i className="fa fa-thumbs-up fa-2x"></i></span>
            </p>
            <div className='boximage'>
                <img src={data.image} alt="not available"></img>
            </div>
            <h3>Published by: {data.author}<span>{data.date}</span></h3>
            <div className='boxdesctop'>
                {data.description}
            </div>
            <div className='boxdesc'> {data.explanation}</div>
            <div className='boxdesc'> {data.explanation} </div>
            <div className='boxdesc'>  {data.explanation}</div>
            
        </div>
    )
}
