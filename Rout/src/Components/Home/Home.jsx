import React, { useEffect } from 'react'
import { useState } from 'react'
import {  useDispatch, useSelector } from 'react-redux'
import { add } from '../../store/Slice/Slice'


function Home() {
    const dispatch = useDispatch()
    

    const[Products, SetProducts] = useState([])

    useEffect(() => {
        fetch('https://api.escuelajs.co/api/v1/products')
            .then(res=>res.json())
            .then(data => SetProducts(data))
            .catch(error => console.error('Error fetching data:', error));
    },[])
    
            const addtocart = (product) => {
                dispatch(add(product))
            }
  return (
    <>
    <div className='flex  bg-black flex-wrap gap-4 items-center justify-center'>
        {Products.map(product => (
           
            <div className=' rounded bg-white flex justify-center m-4 ' key={product.id} style={{height:'420px', width:'320px'}}>
                <div>
                    <img src={product.images} alt="" className='mt-2 rounded'  style={{height:'300px',width:'300px' }} />
                    <h2>{product.title}</h2>
                    <h1>INR: {product.price}</h1>
                    <button className='bg-blue-400 rounded ' onClick={()=> addtocart(product)} style={{height:'40px', width:'90px'}}>Buy Now</button>
                </div>
            </div>
            
        ))}
     </div>
 
    </>
    
  )
}

export default Home