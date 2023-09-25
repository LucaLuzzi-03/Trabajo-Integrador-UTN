import { BrowserRouter } from 'react-router-dom'
import './App.css'
import { AppRouter } from './router/AppRouter'
import { Navbar } from './components/Navbar'
import { Footer } from './components/Footer'

function App() {
  return (
    <BrowserRouter>
    <Navbar/>
      <AppRouter />
    </BrowserRouter>
  )
}

export default App
