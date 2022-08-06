import React from 'react'
import CardSlider from '../components/CardSlider'

const Home = ({ products, addToCart}) => {
  return (
    <div className='w-screen bg-gray-900'>
        <CardSlider />

        <div className='flex flex-col items-center text-white'>
          <div>
            <h1 className='font-semibold p-12 text-2xl'>Fones Havit em <span className='text-red-500'>oferta</span></h1>
          </div>

          <div className='grid grid-cols-4 gap-4 text-white'>
            {products.map((product) => (
              <div key={product.id} className='py-6 flex flex-col rounded-md px-8 cursor-pointer'>
                <div className='w-14 items-center justify-center flex rounded-md border-2 border-white mb-4'>
                  <h1>-17%</h1>
                </div>

                <img src={product.image.url} className='h-40 object-contain' alt="" />

                <div className='flex flex-col items-start mt-12'>
                  <h1>{product.name}</h1>
                  <p className='text-xl font-semibold'>{product.price.formatted_with_symbol} à vista</p>
                </div>
                

                <button onClick={() => addToCart(product.id, 1)} className='px-6 py-2 hover:bg-red-500 bg-black bg-opacity-20 rounded-md my-4 transition-all duration-300'>Ver produto</button>
              </div>
            ))}  
            
          </div>
        </div>
    </div>
  )
}

export default Home