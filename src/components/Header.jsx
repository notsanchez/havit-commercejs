import React from 'react'
import { Link } from 'react-router-dom'

const Header = ({ cartlength }) => {

    console.log(cartlength)

  return (
    <div className='flex flex-col'>
        <div className='w-screen h-16 bg-gray-900 flex items-center justify-between px-24 text-white'>
            
            <Link to="/">
                <h1 className='font-semibold text-4xl'>Ha<span className='text-red-500'>vit.</span></h1>
            </Link>

            <div className='flex items-center'>
                <input type="text" 
                    className='w-[400px] h-[40px] px-6 bg-gray-800 items-center justify-between rounded-md' 
                    placeholder='O que voce esta procutando'
                />
            </div>

            <div className='flex items-center gap-6'>
                <button>Suporte</button>
                <Link to="/cart" className='flex'>
                    <button>Carrinho</button>
                    {cartlength > 0 && (
                        <div className='w-6 h-6 bg-red-500 rounded-full flex items-center justify-center'>{cartlength}</div>
                    )}
                </Link>
                <button>Olá visitante</button>
            </div>

        </div>

        <div className='w-screen h-12 bg-gray-900 bg-opacity-90 text-white flex items-center justify-center gap-24 px-24'>
            <div>
                <button>Menu</button>
            </div>

            <div className='flex gap-12'>
                <button>Smartphones</button>
                <button>Acessorios</button>
                <button>Fones</button>
            </div>
        </div>
    </div>
  )
}

export default Header