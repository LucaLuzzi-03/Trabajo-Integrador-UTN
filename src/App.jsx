import { BrowserRouter } from 'react-router-dom'
import './App.css'
import { AppRouter } from './router/AppRouter'
import { Navbar } from './components/Navbar'
import { Principal } from './pages/Principal'

function App() {
  return (
    <BrowserRouter>
    <Navbar />
      <Principal/>
    </BrowserRouter>
  )
}

export default App
