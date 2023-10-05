import {Route, Routes} from 'react-router-dom'
import './App.css'

const App = () => {
  return (
  
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/sobre" element={<Sobre />} />
      <Route path="/contato" element={<Contato />} />
      <Route path="*" element={<NotFound />} />
      </Routes>
  )
  
}

export default App
