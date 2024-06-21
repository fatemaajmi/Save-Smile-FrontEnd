import { NavLink } from 'react-router-dom'

const Nav = () => {
  return (
    <header>
      <nav>
      <NavLink to="/">Home</NavLink>
      <NavLink to="/about">About</NavLink>
      <NavLink to="/signin">Sign In</NavLink>
      </nav>
      <img className='logo' src="https://lh3.googleusercontent.com/drive-viewer/AKGpihbAee688PaQ1j3733iX20-JtUhpwjhw7ytg-aqi8wDYm1zCEYFHm5KJ5jZTKe0we13AjVA2sIkaeQYOoWh-ZIiKbAtngGfe4N4=s2560"></img>
    </header>
    
  )
}

export default Nav
