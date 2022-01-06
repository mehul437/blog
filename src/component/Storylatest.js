
import React, { useContext, useState, useRef } from 'react'
import { ContextArticle } from './ContextArticle'
import { useEffect } from 'react'
import Stories from './Stories'

export default function Storylatest() {
    const [latest] = useContext(ContextArticle)
    const [data, setdata] = useState([])
    const temp = useRef()
    const [load, setload] = useState(false)

    temp.current = fil
    let arr;
    useEffect(() => {

        temp.current()

    }, []);
    function fil() {
        arr = latest.filter((item) => item.category === 'technology')

        arr = arr.filter((item, index) => index < 3)
        console.log(arr)
        setdata([...arr])
    }
    const change = () => {
        arr = latest.filter((item) => item.category === 'technology')
        setdata([...arr])
        setload(true)
    }
    return (
        <>
            <h2 className='thetitle'>Latest Stories</h2>
            <hr className='line'></hr>
            <div className='storymain'>

                
                    {
                        data.map((item) => <Stories key={item.id} title={item.title} desc={item.description} date={item.date} image={item.image} />
                        )
                    }
                </div>

                

        
            {
                load ? null : <h3 className='load'><button onClick={change}>Load more</button></h3>
            }
        </>
    )
}