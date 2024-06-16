import { Routes, Route } from 'react-router-dom'
import Nav from './components/Nav'
import Home from './pages/Home'
import About from './pages/About'
import Category from './pages/Category'
import Business from './pages/Business'
import Coupon from './pages/Coupon'
import './App.css'

const App = () => {

  return (
    <div className="App">
      <div className='space'></div>
    <Nav />
    <main>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/categories" element={<Category />} />
        <Route path="/categories/:category" element={<Business />} />
        <Route path="/categories/:category/:id/coupons" element={<Coupon />} />
      </Routes>
    </main>
  </div>
  )
}

export default App
