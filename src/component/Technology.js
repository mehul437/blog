
import React, { useContext, useState, useRef } from 'react'
import { ContextArticle } from './ContextArticle'
import { useEffect } from 'react'
import Post from './Post'
import Topstory from './Topstory'

export default function Technology() {
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
        arr = latest.filter((item) => item.category === 'technology')

        arr = arr.filter((item, index) => index < 4)
        setdata([...arr])
        arr = latest.filter((item) => item.category === 'storytechnology')
        setstory([...arr])


    }
    const change = () => {
        arr = latest.filter((item) => item.category === 'technology')
        setdata([...arr])
        setload(true)
    }
    return (
        <>
            <h2 className='thetitle'>Technology</h2>
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
                        story.map((item) => <Topstory key={item.id} title={item.title} id={item.id} desc={item.description} date={item.date} image={item.image} />
                        )}

                    <div className='advert'>Advertisement</div>
                </div>


            </div>

        </>
    )
}
