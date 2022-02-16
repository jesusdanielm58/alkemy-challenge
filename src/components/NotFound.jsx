import React from 'react'
import { Link } from 'react-router-dom'

const NotFound = () => {
  return (
    <div>
      <div className='flex items-center justify-center w-screen h-screen '>
        <div className='px-40 py-20 bg-gray-100 dark:bg-secondary rounded-md shadow-xl'>
          <div className='flex flex-col items-center'>
            <h1 className='font-bold text-primary text-9xl'>404</h1>
            <h6 className='mb-2 text-2xl font-bold text-center text-gray-800 dark:text-white md:text-3xl'>
              <span className='text-red-500'>Oops!</span> página no encontrada
            </h6>
            <p className='mb-8 text-center text-gray-500 dark:text-white md:text-lg'>
              Parece que la página que buscas no existe.
            </p>
            <Link to='/' className='px-6 py-2 text-sm font-semibold bg-primary hover:bg-accent focus:ring-primary focus:ring-offset-indigo-200 text-white'>Volver a home </Link>
          </div>
        </div>
      </div>
    </div>

  )
}

export default NotFound
