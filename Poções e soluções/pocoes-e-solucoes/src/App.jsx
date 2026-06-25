import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Produtos from './pages/Produtos'
import Sobre_nos from './pages/Sobre_nos'
import Header from './components/Header'

function App() {
  return (
    <div className='bg-background min-h-screen'>
      <BrowserRouter>
        <Header></Header>
        <Routes>
          <Route path='/' element={<Home />}></Route>
          <Route path='/sobre-nos' element={<Sobre_nos />}></Route>
          <Route path='/produtos' element={<Produtos />}></Route>
        </Routes>
      </BrowserRouter>
    </div>

  )
}

export default App
