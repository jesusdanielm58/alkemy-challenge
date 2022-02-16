import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { MenutContext } from '../context/Context'
import { SvgSunIcon, SvgMoonIcon } from './SvgIcons'

const toggle = () => {
  const html = document.querySelector('html')
  html.classList.toggle('dark')
}

const Nav = () => {
  const { autenticado, logout } = useContext(MenutContext)
  return (
    <div className='dark:bg-secondary bg-neutral-900 text-white'>
      {autenticado &&
        <nav className='container flex justify-between py-8 px-5 mx-auto w-full'>
          <div className='flex items-center'>
            <h3 className='text-2xl font-medium text-primary'>Menu</h3>
          </div>
          <div className='items-center hidden space-x-8 lg:flex'>
            <Link to='/'>Home</Link>
            <Link onClick={() => logout()} to='/login'>Logout</Link>
          </div>
          <div className='flex items-center space-x-2'>
            <div className='flex gap-2 bg-gray-100 p-2 rounded-3xl relative'>
              <div id='toggle' className='dark:translate-x-8 bg-secondary absolute top-2 bottom-2 left-2   rounded-full aspect-square  border-2 border-white scale-125 transition-all' />
              <SvgSunIcon onPress={toggle} />
              <SvgMoonIcon onPress={toggle} />
            </div>
          </div>
        </nav>}
    </div>
  )
}

export default Nav
