import React from 'react'

const CardSlider = () => {

    const img = "https://www.havit.hk/wp-content/uploads/2022/05/%E5%AE%98%E7%BD%91%E9%A6%96%E9%A1%B5%E6%B5%B7%E6%8A%A52%EF%BC%88890X470%EF%BC%89.jpg"

  return (
    <div className='flex flex-col items-center justify-center'>
        <img src={img} className='object-cover w-[890px] h-[470px] rounded-md my-12' />

        <div className='flex items-center justify-evenly w-[1200px] h-[80px] border-2 border-white text-white rounded-md'>
          <div className='flex gap-2'>
            <h1>Frete Gratis</h1>
          </div>

          <div className='flex gap-2'>
            <h1>Desconto a vista</h1>
          </div>

          <div className='flex gap-2'>
            <h1>Até 12x sem juros</h1>
          </div>

          <div className='flex gap-2'>
            <h1>Cashback</h1>
          </div>
        </div>
    </div>
  )
}

export default CardSlider