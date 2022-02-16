import React, { useContext, useEffect } from 'react'
import { Navigate } from 'react-router-dom'
import { MenutContext } from '../context/Context'

const RequireAuth = ({ children }) => {
  const { autenticado, login } = useContext(MenutContext)
  useEffect(() => {
    if (window.localStorage.getItem('menuToken')) {
      console.log('pasa local storage')
      login()
    }
  }, [])
  if (!autenticado && !window.localStorage.getItem('menuToken')) {
    return <Navigate to='/login' />
  }
  return children
}

export default RequireAuth
