import React from 'react'
import ProductCard from './ProductCard.jsx'
import { useAppContext } from '../context/AppContext.jsx'


const BestSeller = () => {
    const {products}= useAppContext()
    



    return (
        <div className='mt-16'>
            <p className='text-2xl md:text-3xl font-medium'>Best Seller</p>
            <div>
               
                <ProductCard product={products[0]} />
            </div>

        </div>
    )
}

export default BestSeller;


