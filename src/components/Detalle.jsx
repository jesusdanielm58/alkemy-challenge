import React, { useState, useContext } from 'react'
import { useParams, Link } from 'react-router-dom'
import Footer from './Footer'
import { SvgCheck, SvgMark } from './SvgIcons'
import { MenutContext } from '../context/Context'
import NotFound from './NotFound'

const ListItem = ({ title, value, extra = '' }) => {
  return (
    <div className={'flex border-t border-gray-200 py-2 ' + extra}>
      <span>{title}</span>
      <span className='ml-auto '>{value ? <SvgCheck /> : <SvgMark />}</span>
    </div>
  )
}
const Detalle = () => {
  const params = useParams()
  const { miMenu } = useContext(MenutContext)
  const [data, setData] = useState(miMenu.find(x => x.id + '' === params.id + ''))
  let list = []
  if (data) {
    list = [
      { value: data.vegetarian, title: 'Vegetariano', extra: 'mt-4' },
      { value: data.vegan, title: 'Vegano' },
      { value: data.glutenFree, title: 'sin gluten' },
      { value: data.veryHealthy, title: 'Muy saludable' },
      { value: data.veryPopular, title: 'Muy popular' },
      { value: data.cheap, title: 'Barato', extra: 'mb-6 border-b' }
    ]
  }
  return (
    <div>
      {data
        ? <section className='  body-font overflow-hidden'>
          <div className='container px-5 py-24 mt-10 mx-auto rounded'>
            <div className=' mx-auto p-4 flex flex-wrap'>
              <div className='dark:text-black lg:w-1/2 w-full lg:pr-10  mb-6  lg:mb-0'>
                <h1 className='text-primary text-3xl title-font font-medium mb-4'>{data.title}</h1>
                <div className='flex mb-4'>
                  <a className='flex-grow  border-b-2  py-2 text-lg px-1'>Description</a>
                </div>
                <div dangerouslySetInnerHTML={{ __html: data.summary }} />
                {list.map((x) => {
                  return <ListItem value={x.value} title={x.title} key={x.title} extra={x.extra} />
                })}
                <div className='flex'>
                  <span className='title-font font-medium text-2xl text-primary'>${data.pricePerServing}</span>
                </div>
              </div>
              <img alt='ecommerce' className='lg:w-1/2 w-full lg:h-auto h-64 object-cover object-center rounded' src={data.image} />
            </div>
            <div className='text-center mt-10'>
              <Link to='/' className=' mx-auto mt-16 text-white bg-primary border-0 py-2 px-8 focus:outline-none hover:bg-accent rounded text-lg'>Volver a home</Link>
            </div>
          </div>
          </section>
        : <NotFound />}

      <Footer />
    </div>
  )
}

export default Detalle
