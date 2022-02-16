import React from 'react'
const MenuItem = (props) => {
  return (
    <div className='xl:w-1/4 md:w-1/2 p-4'>
      <div className='bg-gray-100 dark:bg-secondary dark:text-white p-6 rounded-lg'>
        <img className='h-40 rounded w-full object-cover object-center mb-6' src={props.data.image} alt='content' />
        <h3 className='tracking-widest text-primary dark:text-white text-xs font-medium title-font'>${props.data.pricePerServing}</h3>
        <h2 className='text-lg text-gray-900 dark:text-primary font-medium title-font mb-4'>{props.data.title}</h2>
        <p className='leading-relaxed text-base'>Tiempo de preparación {props.data.readyInMinutes} M</p>
        <p>{props.data.vegan ? 'Es vegano' : 'No es vegano'}</p>
        <button onClick={() => props.agregarMiMenu(props.data)} type='button' className='mt-10 py-2 px-4  bg-primary hover:bg-accent focus:ring-primary focus:ring-offset-indigo-200 text-white w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-lg '>Agregar</button>
      </div>
    </div>
  )
}

export default MenuItem
