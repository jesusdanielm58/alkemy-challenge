import React, { useContext } from 'react'
import { Formik, Form, Field, ErrorMessage } from 'formik'
import * as Yup from 'yup'
import axios from 'axios'
import { MenutContext } from '../context/Context'
import { SvgSpinnerIcon } from './SvgIcons'
import { alert } from '../helpers'

import { useNavigate } from 'react-router-dom'

const SignupSchema = Yup.object().shape({
  password: Yup.string()
    .required('Obligatorio'),
  email: Yup.string()
    .email('Dirección de correo invalido')
    .required('Obligatorio')
})

const Login = () => {
  const { login } = useContext(MenutContext)
  const navigate = useNavigate()

  return (
    <div className='flex items-center justify-center w-screen h-screen '>
      <section className='text-gray-600 body-font '>
        <Formik
          initialValues={{ email: '', password: '' }}
          validationSchema={SignupSchema}
          onSubmit={(values, { setSubmitting }) => {
            const query = 'http://challenge-react.alkemy.org/'
            const body = { email: values.email, password: values.password }
            axios.post(query, body)
              .then(resp => {
                window.localStorage.setItem('menuToken', resp.data.token)
                login()
                navigate('/')
              })
              .catch((e) => {
                setSubmitting(false)
                if (e.response?.status === 401) {
                  alert('Ha ocurrido un error!', 'Usuario o contraseña incorrectos')
                } else {
                  alert('Ha ocurrido un error!', e)
                }
              })
          }}
        >
          {({ isSubmitting }) => (
            <Form className='dark:bg-gray-100 dark:text-black text-gray-600 bg-white rounded-lg p-8 flex flex-col  w-full  md:mt-0 m-auto mt-6 border-4   shadow-md'>
              <h3 className='text-2xl font-medium text-primary'>Menu</h3>
              <p className='leading-relaxed mb-5 '>Credenciales: </p>
              <p>correo: challenge@alkemy.org , contraseña: react</p>
              <label htmlFor='email' className='leading-7 text-sm '>Correo</label>
              <Field type='email' name='email' className='w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out' />
              <ErrorMessage name='email'>{msg => <div className='text-red-700'>{msg}</div>}</ErrorMessage>
              <label htmlFor='password' className='leading-7 text-sm '>Contraseña</label>
              <Field type='password' name='password' className='w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out' />
              <ErrorMessage name='password'>{msg => <div className='text-red-700'>{msg}</div>}</ErrorMessage>
              <button type='submit' disabled={isSubmitting} className='mt-4 text-white text-center bg-primary border-0 py-2 px-6 focus:outline-none hover:bg-accent rounded text-lg'>
                {isSubmitting ? <SvgSpinnerIcon /> : 'Login'}
              </button>
            </Form>
          )}
        </Formik>

      </section>

    </div>
  )
}

export default Login
