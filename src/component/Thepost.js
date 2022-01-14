
import React, { useContext, useState, useRef} from 'react'
import { ContextArticle } from './ContextArticle'
import { useEffect } from 'react'
import Post from './Post'

export default function Thepost() {
    const[latest]=useContext(ContextArticle)
    const [data, setdata] = useState([])
    const temp = useRef()
    const[load,setload]=useState(false)

    temp.current = fil
    let arr;
    useEffect(() => {

        temp.current()

    }, []);
    function fil() {
        arr = latest.filter((item) => item.category === 'article')
        
        arr= arr.filter((item, index) => index < 3)
        setdata([...arr])
        }
    const change=()=>{
        arr = latest.filter((item) => item.category === 'article')
        setdata([...arr])
        setload(true)
    }
    return (
        <>
            <h2 className='thetitle'>The Latest</h2>
            <hr className='line'></hr>
            <div className='latestmain'>

            <div className='box'>
                {
                    data.map((item) => <Post key={item.id} title={item.title} desc={item.description} id={item.id} date={item.date} image={item.image} />
                    )
                }
            </div> 

            <div className='adv'>Advertisement</div>

        </div>
            {
                load ? null : <h3 className='load'><button onClick={change}>Load more</button></h3>
            }
        </>
    )
}
