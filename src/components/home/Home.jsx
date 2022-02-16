import React, { useContext } from 'react'
import { MenutContext } from '../../context/Context'
import MiMenuItem from './MiMenuItem'
import Promedios from './Promedios'
import Instrucciones from './Instrucciones'
import Footer from '../Footer'
import BuscarPlato from './BuscarPlato'

const Home = () => {
  const { miMenu, quitarPlato } = useContext(MenutContext)

  return (
    <div>
      {miMenu.length === 0
        ? <Instrucciones />
        : <div className='container px-5 py-24 mx-auto text-gray-600'>
          <p className='mb-2 text-2xl font-bold  text-primary md:text-3xl'>Tu menu</p>
          <div className='flex flex-wrap -m-4'>{
                  miMenu.map(data => {
                    return <MiMenuItem key={data.id} data={data} remove={quitarPlato} />
                  })
                }
          </div>

        </div>}
      <Promedios miMenu={miMenu} />
      <BuscarPlato />
      <Footer />
    </div>

  )
}

export default Home
