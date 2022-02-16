import React, { createContext, useState } from 'react'
import { alert } from '../helpers'

export const MenutContext = createContext()

const Context = ({ children }) => {
  // search context
  const [searchData, setSearchData] = useState('')
  const changeSearchData = (data) => {
    setSearchData(data)
  }

  // auth context
  const [autenticado, actualizarAutenticado] = useState(false)
  const login = () => {
    actualizarAutenticado(true)
  }
  const logout = () => {
    window.localStorage.removeItem('menuToken')
    actualizarAutenticado(false)
  }

  // menu context
  const [miMenu, miMenuUpdate] = useState([])

  const agregarPlato = (obj) => {
    miMenuUpdate((prev) => {
      let vegan = 0
      let notVegan = 0
      const tamañoMenu = 4
      const limiteVeganoNoVegano = 2
      for (const i of prev) {
        i.vegan ? vegan++ : notVegan++
      }
      let noValido = false
      if (prev.lenght === tamañoMenu) {
        noValido = { msg: 'menu lleno', text: 'elimina platos si quieres agregar otros' }
      } else if (prev.some(x => x.id === obj.id)) {
        noValido = { msg: 'Ya has agregado este plato!' }
      } else if (vegan === limiteVeganoNoVegano && obj.vegan) {
        noValido = { msg: 'limite de veganos alcanzado' }
      } else if (notVegan === limiteVeganoNoVegano && !obj.vegan) {
        noValido = { msg: 'limite de no veganos alcanzados!' }
      }

      if (noValido) {
        alert(noValido.msg, noValido.text)
        return prev
      } else {
        return [...prev, obj]
      }
    })
  }
  const quitarPlato = (id) => {
    miMenuUpdate((prev) => {
      return prev.filter(x => x.id !== id)
    })
  }
  return (
    <MenutContext.Provider value={{ autenticado, login, logout, miMenu, agregarPlato, quitarPlato, searchData, changeSearchData }}>
      {children}
    </MenutContext.Provider>
  )
}

export default Context
