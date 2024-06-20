import { Routes, Route } from 'react-router-dom'
import { useState, useEffect } from 'react'
import { CheckSession } from './services/Auth'
import './App.css'
import Nav from './components/Nav'
import Home from './pages/Home'
import About from './pages/About'
import Category from './pages/Category'
import Business from './pages/Business'
import Coupon from './pages/Coupon'
import Detail from './pages/Detail'
import Review from './pages/Review'
import Register from './pages/Register'
import SignIn from './pages/SignIn'

const App = () => {
  const [user, setUser] = useState(null)

  const handleLogOut = () => {
    setUser(null)
    localStorage.clear()
  }

  const checkToken = async () => {
    const user = await CheckSession()
    setUser(user)
  }

  useEffect(() => {
    const token = localStorage.getItem('token')
    if (token) {
      checkToken()
    }
  }, [])

  return (
    <div className="App">
    
      <div className="space"></div>
      <Nav user={user} handleLogOut={handleLogOut} />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/categories" element={<Category />} />
          <Route path="/categories/:category" element={<Business />} />
          <Route
            path="/categories/:category/:id/coupons"
            element={<Coupon />}
          />
          <Route
            path="/categories/:category/:id/coupons/:id/details"
            element={<Detail />}
          />
          <Route
            path="/categories/:category/:id/coupons/:id/details/:id/Review"
            element={<Review />}
          />
          <Route path="/coupons/couponForm" element={<CouponForm />} />
          <Route path="/signin" element={<SignIn setUser={setUser} />} />
          <Route path="/register" element={<Register />} />
        </Routes>
      </main>
    </div>

)
}

export default App
