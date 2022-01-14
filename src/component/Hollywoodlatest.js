import './Style.css'
import React, { useContext, useState, useRef } from 'react'
import { ContextArticle } from './ContextArticle'
import { useEffect } from 'react'
import Post from './Post'
import Topstory from './Topstory'

export default function Hollywoodlatest() {
    const [latest] = useContext(ContextArticle)
    const [data, setdata] = useState([])
    const [story, setstory] = useState([])
    const temp = useRef()
    const [load, setload] = useState(false)

    temp.current = fil
    let arr;
    useEffect(() => {

        temp.current()

    }, []);
    function fil() {
        arr = latest.filter((item) => item.category === 'hollywood')

        arr = arr.filter((item, index) => index < 4)
        setdata([...arr])
        arr = latest.filter((item) => item.category === 'storyhollywood')
        setstory([...arr])


    }
    const change = () => {
        arr = latest.filter((item) => item.category === 'hollywood')
        setdata([...arr])
        setload(true)
    }
    return (
        <>
            <h2 className='thetitle'>Hollywood</h2>
            <hr className='line'></hr>
            <div className='latestmain'>

                <div className='box'>
                    {
                        data.map((item) => <Post key={item.id} title={item.title} id={item.id} desc={item.description} date={item.date} image={item.image} />
                        )
                    }
                    {
                        load ? null : <h3 className='load'><button onClick={change}>Load more</button></h3>
                    }
                </div>

                <div className='yside'>
                    <h2>Top post</h2>
                    <hr className='story'></hr>
                    {
                        story.map((item) => <Topstory key={item.id} id={item.id} title={item.title} desc={item.description} date={item.date} image={item.image} />
                        )}

                    <div className='advert'>Advertisement</div>
                </div>


            </div>

        </>
    )
}
