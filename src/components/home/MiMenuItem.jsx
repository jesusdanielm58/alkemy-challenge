import React from 'react'
import { Link } from 'react-router-dom'

const MiMenuItem = (props) => {
  const { image, pricePerServing, title, readyInMinutes, vegan, id } = props.data
  return (
    <div className='xl:w-1/4 md:w-1/2 p-4'>
      <div className='bg-gray-100 p-6 rounded-lg dark:bg-secondary dark:text-white'>
        <img className='h-40 rounded w-full object-cover object-center mb-6' src={image} alt='content' />
        <h3 className='dark:text-white tracking-widest text-primary text-xs font-medium title-font'>${pricePerServing}</h3>
        <h2 className='dark:text-primary text-lg text-gray-900 font-medium title-font mb-4'>{title}</h2>
        <p className='leading-relaxed text-base'>Tiempo de preparación {readyInMinutes}M</p>
        <p>{vegan ? 'Es vegano' : 'No es vegano'}</p>
        <button onClick={() => props.remove(id)} type='button' className='mt-10 py-2 px-4  bg-red-700 hover:bg-red-800 focus:ring-red-600 focus:ring-offset-red-200 text-white w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-lg '>Quitar del menu</button>
        <div className='text-center mt-2'>
          <Link to={`/plato/${id}`} className='mt-2  text-primary hover:text-accent text-sm text-center m-auto'>Ver detalles</Link>
        </div>
      </div>
    </div>
  )
}

export default MiMenuItem
