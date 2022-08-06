import React from 'react'
import { Link } from 'react-router-dom'

const Cart = ({ cart, handleUpdateCart, handleEmptyCart }) => {

    if(!cart.line_items) return '';

    const Checkout = () => {
        window.location.href = cart.hosted_checkout_url;
    }

    console.log(cart.length)

  return (
    <div>
        {cart.total_items > 0 ? (
            <div className='flex items-center justify-center'>
                <div className='flex'>
                    <div className='flex flex-col '>

                        <div className='w-[900px] text-black'>

                            <h1 className='font-semibold text-2xl py-12'>Meu Carrinho</h1>
                            
                            <div className='w-inherit h-12 flex justify-between items-center px-24 text-black'>
                                <h1>Produto</h1>

                                <div className='flex gap-12'>
                                    <h1>Quantidade</h1>
                                    <h1>Preço</h1>
                                </div>
                            </div>
                            {cart.line_items.map((item) => (
                                <div key={item.id} className=' w-inherit h-52 flex justify-between items-center px-24 text-black'>

                                    <div className='flex'>
                                        <img src={item.image.url} className='w-32 object-contain' />
                                        <h1>{item.name}</h1>
                                    </div>

                                    <div className='flex gap-12'>

                                        <div className='flex gap-2 rounded-md font-bold items-center'>
                                            <button onClick={() => handleUpdateCart(item.id, item.quantity - 1)} className='px-2 text-2xl'>-</button>
                                            <h1>{item.quantity}</h1>
                                            <button onClick={() => handleUpdateCart(item.id, item.quantity + 1)} className='px-2 text-2xl'>+</button>
                                        </div>

                                        <h1>{item.line_total.formatted_with_symbol}</h1>

                                    </div>
                                </div>
                            ))}

                            <button onClick={handleEmptyCart} className='bg-red-500 px-6 py-2 rounded-md'>Limpar Carrinho</button>
                            
                        </div>
                    </div>

                    <div className='h-52 w-[200px] bg-gray-200 rounded-md m-12 flex flex-col items-center justify-evenly text-black font-semibold'>
                        <div className='flex flex-col items-center'>
                            <h1>Total:</h1>
                            <h1>{cart.subtotal.formatted_with_symbol}</h1>
                        </div>

                        <button onClick={Checkout} className='bg-red-500 px-6 py-2 rounded-md'>Fechar pedido</button>
                        
                    </div>
                </div>
            </div>
        ) : (
        <>
            <div className='h-40 flex flex-col items-center justify-center'>
                <h1>Seu Carrinho esta vazio :/</h1>
                <Link to="/">
                    <button className='bg-red-500 px-6 py-2 rounded-md mt-2'>Comece a adicionar produtos</button>
                </Link>
            </div>
        </>
        )}
        
        
    </div>
  )
}

export default Cart