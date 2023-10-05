// Importações de Bibliotecas e componentes
import { Route, Routes } from 'react-router-dom';

// Importações de componentes de página
import LandingPage from './components/pages/LandingPage';
import Sobre from './components/pages/Sobre';
import Contato from './components/pages/Contato';
import NotFound from './components/pages/NotFound';

// Importações de Estilos
import 'bootstrap/dist/css/bootstrap.min.css';
import '../public/css/custom.css';
import './App.css';


const App = () => {
  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/contato" element={<Contato />} />
      <Route path="/sobre" element={<Sobre />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}

export default App