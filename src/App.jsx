import Login from './components/Login'
import Home from './components/home/Home'
import NotFound from './components/NotFound'
import Detalle from './components/Detalle'
import AuthContext from './context/Context'
import RequireAuth from './components/RequireAuth'
import Nav from './components/Nav'

import { Routes, Route } from 'react-router-dom'

function App () {
  return (
    <div className='App'>
      <AuthContext>
        <Nav />
        <Routes>
          <Route path='login' element={<Login />} />
          <Route path='/' element={<RequireAuth><Home /></RequireAuth>} />
          <Route path='plato/:id' element={<RequireAuth><Detalle /></RequireAuth>} />
          <Route path='*' element={<RequireAuth><NotFound /></RequireAuth>} />
        </Routes>
      </AuthContext>
    </div>
  )
}

export default App
