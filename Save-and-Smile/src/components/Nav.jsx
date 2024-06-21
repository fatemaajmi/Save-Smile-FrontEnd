import { Link, NavLink } from 'react-router-dom'

const Nav = () => {
  return (
    <header>
      <nav>
      <NavLink to="/">Home</NavLink>
      <NavLink to="/about">About</NavLink>
      {/* <NavLink to="/coupons/couponForm"><button>Add New Coupon</button></NavLink> */}
      <NavLink to="/signin">Sign-In</NavLink>
      <NavLink to="/signup">Sign-Up</NavLink>

      </nav>
      {/* <img className='logo' src=''></img> */}
    </header>
    
  )
}

export default Nav
