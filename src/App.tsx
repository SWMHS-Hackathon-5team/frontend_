import { BrowserRouter as Router, Route, Routes } from 'react-router-dom' // BrowserRouter로 변경
import '../src/styles/fonts.css'
import '../src/styles/global.css'
import Home from './pages/home'
import Test from './pages/test'

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/test' element={<Test />} />
      </Routes>
    </Router>
  )
}
