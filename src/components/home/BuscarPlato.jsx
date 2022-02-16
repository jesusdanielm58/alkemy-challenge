import React, { useContext } from 'react'
import axios from 'axios'
import { Formik, Form, Field } from 'formik'
import { SvgSpinnerIconSmall, SearchIcon } from '../SvgIcons'
import { MenutContext } from '../../context/Context'
import MenuItem from './MenuItem'
import { alert } from '../../helpers'

const BuscarPlato = () => {
  const { changeSearchData, searchData, agregarPlato } = useContext(MenutContext)
  const SearchResults = () => {
    if (searchData === '') {
      return (null)
    }
    if (searchData.length !== 0) {
      return (searchData.map(data => {
        return <MenuItem key={data.id} data={data} agregarMiMenu={agregarPlato} />
      }))
    }
    return <p className='dark:text-black px-5 mt-4 text-white'>No hubo resultados en la busqueda</p>
  }

  return (
    <div className='container px-5 py-24 mx-auto'>
      <div className='flex items-center rounded-lg'>
        <Formik
          initialValues={{ search: '' }}
          onSubmit={(values, { setSubmitting, resetForm }) => {
            const apiKey = '7e93456324f340c8bf285f6a2581f0ef'
            const query = ` https://api.spoonacular.com/recipes/complexSearch?query=${values.search}&addRecipeInformation=true&apiKey=${apiKey}`
            axios.get(query)
              .then(resp => {
                setSubmitting(false)
                resetForm()
                changeSearchData(resp.data.results)
              })
              .catch((e) => {
                setSubmitting(false)
                alert('Ha ocurrido un error!', e)
              })
          }}
        >
          {({ isSubmitting }) => (

            <Form className='flex border-2 rounded text-gray-600 dark:border-2 dark:border-secondary'>
              <Field className='px-4 py-2 ' type='search' name='search' placeholder='Buscar' minLength='2' required />
              <button type='submit' disabled={isSubmitting} className='flex items-center justify-center px-4 border-l bg-secondary'>
                {isSubmitting
                  ? <SvgSpinnerIconSmall />
                  : <SearchIcon />}
              </button>

            </Form>
          )}
        </Formik>

      </div>
      <section className='text-gray-600 body-font mt-8'>
        <div className='container  mb-24 mx-auto'>
          <p className='mb-2 text-2xl font-bold  text-primary md:text-3xl'>Resultados</p>

          <div className='flex flex-wrap -m-4'>
            <SearchResults />
          </div>
        </div>
      </section>
    </div>
  )
}

export default BuscarPlato
