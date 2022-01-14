import React from 'react'
import './Style.css'
import Gallery from './Gallery'
import Latest from './Latest'
import Storylatest from './Storylatest'
import Thepost from './Thepost'
export default function Home() {
    return (
        <>  
         <Gallery></Gallery>
         <Latest></Latest>
         <Thepost></Thepost>
         <Storylatest></Storylatest>

        </>
    )
}
