import React, { useState, useEffect } from 'react'
import { SvgTimeIcon, SvgPriceIcon, SvgHealthIcon } from '../SvgIcons'

const ListItem = ({ children, bg, title, value }) => {
  return (
    <div className={'shadow-lg border-2 border-black/20 dark:border-0 flex items-center mb-2 rounded justify-between p-3 ' + bg}>
      <span className='rounded-lg p-2 bg-white shadow-lg'>
        {children}
      </span>
      <div className='flex w-full ml-2 items-center justify-between'>
        <p>{title}</p>
        <p>{value}</p>
      </div>
    </div>
  )
}

const Promedios = (props) => {
  const [promedios, promediosUpdate] = useState({
    tiempo: 0,
    precio: 0,
    healthScore: 0
  })
  const calcularPromedios = () => {
    const obj = { tiempo: 0, precio: 0, healthScore: 0 }
    for (const i of props.miMenu) {
      obj.tiempo += i.readyInMinutes
      obj.precio += i.pricePerServing
      obj.healthScore += i.healthScore
    }
    if (props.miMenu.length > 0) {
      obj.tiempo = (obj.tiempo / props.miMenu.length).toFixed(2)
      obj.healthScore = (obj.healthScore / props.miMenu.length).toFixed(2)
      obj.precio = obj.precio.toFixed(2)
    }
    promediosUpdate(obj)
  }
  useEffect(() => {
    calcularPromedios()
  }, [props.miMenu])
  return (
    <div className='container py-8 px-5 mx-auto w-full'>
      <h6 className=' mb-2 text-2xl font-bold  text-primary md:text-3xl'>
        Estadisticas del menu
      </h6>
      <div className='shadow-lg rounded-xl xl:w-1/4 md:w-1/2 p-4 bg-gray-100 dark:bg-secondary text-black dark:text-black relative overflow-hidden mt-8'>
        <ListItem title='promedio tiempo' value={promedios.tiempo} bg='bg-green-100 mt-2'>
          <SvgTimeIcon />
        </ListItem>
        <ListItem title='acumulativo precio' value={promedios.precio} bg='bg-purple-100'>
          <SvgPriceIcon />
        </ListItem>
        <ListItem title='promedio health score' value={promedios.healthScore} bg='bg-yellow-100'>
          <SvgHealthIcon />
        </ListItem>
      </div>

    </div>

  )
}

export default Promedios
