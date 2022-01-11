import {React, useState} from 'react'
import { Link } from 'react-router-dom'
export default function Header() {
    const[show,setshow]=useState(true)
    return (
        <>
            <div className='titl'><span className='the'>The</span><span className='siren'>Siren</span><span className='bar' onClick={()=>(setshow(!show))}><i className="fas fa-bars fa-2x"></i></span></div>
            <div className={show?"navi":"navig"}>
                <Link to='/home' style={{ textDecoration: 'none' }}><div className='headernav' onClick={() => (setshow(!show))}>Home</div></Link>
                <Link to='/bollywood' style={{ textDecoration: 'none' }}><div className='headernav' onClick={() => (setshow(!show))}>Bollywood</div></Link>   
                <Link to='/hollywood' style={{ textDecoration: 'none' }}><div className='headernav' onClick={() => (setshow(!show))}>Hollywood</div></Link>   
                <Link to='/technology' style={{ textDecoration: 'none' }}><div className='headernav' onClick={() => (setshow(!show))}>Technology</div></Link>   
                <Link to='/food' style={{ textDecoration: 'none' }}><div className='headernav' onClick={() => (setshow(!show))}>Food</div></Link>   
                <Link to='/fitness' style={{ textDecoration: 'none' }}><div className='headernav' onClick={() => (setshow(!show))}>Fitness</div></Link>   
                  
                          
                
            </div>
            
        </>
    )
}
