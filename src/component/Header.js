import {React, useState} from 'react'
import './Style.css'
import { Link } from 'react-router-dom'
export default function Header() {
    const[show,setshow]=useState(true)
    return (
        <>
            <div className='titl'><span className='the'>The</span><span className='siren'>Siren</span><span className={show ? 'cross' : 'cross1'} onClick={() => (setshow(!show))}><i className="fas fa-times fa-2x"></i></span><span className={show?'bar':'bar1'} onClick={()=>(setshow(!show))}><i className="fas fa-bars fa-2x"></i></span></div>
            <div className={show?"navi":"navig"}>
                <Link to='/home' style={{ textDecoration: 'none' }}><div className='headernav' >Home</div></Link>
                <Link to='/bollywood' style={{ textDecoration: 'none' }}><div className='headernav' >Bollywood</div></Link>   
                <Link to='/hollywood' style={{ textDecoration: 'none' }}><div className='headernav' >Hollywood</div></Link>   
                <Link to='/technology' style={{ textDecoration: 'none' }}><div className='headernav' >Technology</div></Link>   
                <Link to='/food' style={{ textDecoration: 'none' }}><div className='headernav' >Food</div></Link>   
                <Link to='/fitness' style={{ textDecoration: 'none' }}><div className='headernav' >Fitness</div></Link>   
                  
                          
                
            </div>
            
        </>
    )
}
