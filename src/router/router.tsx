import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { Layout } from './outlet'
import Home from '@/pages/home'
import Test from '@/pages/test'
import { Signup } from '@/pages/signup'
import Signin from '@/pages/signin'

export const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route index element={<Home />} />
          <Route path='/signup' element={<Signup />} />
          <Route path='/test' element={<Test />} />
          <Route path='/signin' element={<Signin />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}
