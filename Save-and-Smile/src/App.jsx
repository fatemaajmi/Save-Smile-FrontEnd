import { Routes, Route } from 'react-router-dom'
import './App.css'
import Nav from './components/Nav'
import Home from './pages/Home'
import About from './pages/About'
import Category from './pages/Category'
import Business from './pages/Business'
import Coupon from './pages/Coupon'
import Detail from './pages/Detail'
import Review from './pages/Review'

const App = () => {

  return (
    <div className="App">
    <Nav />
    <main>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/categories" element={<Category />} />
        <Route path="/categories/:category" element={<Business />} />
        <Route path="/categories/:category/:id/coupons" element={<Coupon />} />
        <Route path="/categories/:category/:id/coupons/:id/details" element={<Detail />} />
        <Route path="/categories/:category/:id/coupons/:id/details/:id/Review" element={<Review />} />
      </Routes>
    </main>
  </div>
  )
}

export default App
