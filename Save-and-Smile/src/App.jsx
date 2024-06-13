import Nav from './components/Nav'
import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
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
        {/* <Route path="/games/details/:gameId" element={<GameDetails />} />
        <Route path="/view/games/:genreId" element={<ViewGames />} />  */}
      </Routes>
    </main>
  </div>
  )
}

export default App
