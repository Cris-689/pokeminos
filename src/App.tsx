import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { GenPage } from './assets/paginas/GenPokemon'
import { Pokemon } from './assets/componentes/Pokemon'
import { Navbar } from './assets/componentes/Navbar'

function App() {
  return (
    <BrowserRouter>
       <Navbar />
       <Routes>
         <Route path="/" element={<Pokemon id={151} small={false} />} />
         <Route path="/gen1" element={<GenPage min={1} max={151}  />} />
         <Route path="/gen2" element={<GenPage min={152} max={251} />} />
         <Route path="/gen3" element={<GenPage min={252} max={386} />} />
       </Routes>
     </BrowserRouter>
  )
}

export default App
