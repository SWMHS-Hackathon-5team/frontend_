import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { Layout } from './outlet'
import { Signup } from '@/pages/signup/signup'
import Signin from '@/pages/signin'
import Request from '@/pages/request'
import PayDetail from '@/pages/payDetail'
import Home from '@/pages/home'
import { Map } from '@/pages/map'
import HelpMe from '@/pages/MyActivity'
import MyActivity from '@/pages/MyActivity'

export const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route index element={<Home />} />
          <Route path='/signup' element={<Signup />} />
          <Route path='/signin' element={<Signin />} />
          <Route path='/request' element={<Request />} />
          <Route path='/pay-detail' element={<PayDetail />} />
          <Route path='/map' element={<Map />} />
          <Route path='/help-me' element={<HelpMe />} />
          <Route path='/my-activity' element={<MyActivity />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}
