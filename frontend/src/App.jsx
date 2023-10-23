// Importações de Bibliotecas e componentes
import { Route, Routes } from 'react-router-dom';

// Importações de componentes de página
import LandingPage from './components/pages/LandingPage';
import Home from './components/pages/Home';
import Sobre from './components/pages/Sobre';
import Contato from './components/pages/Contato';
import NotFound from './components/pages/NotFound';
import PrevidenciaAqui from './components/pages/PrevidenciaAqui';
import BoletimInformativo from './components/pages/BoletimInformativo';

// Importações de Estilos
import 'bootstrap/dist/css/bootstrap.min.css';
import '../public/css/custom.css';


const App = () => {
  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/contato" element={<Contato />} />
      <Route path="/sobre" element={<Sobre />} />
      <Route path="/Home" element={<Home />}/>
      <Route path="/previdencia" element={<PrevidenciaAqui/>}/>
      <Route path="/boletim" element={<BoletimInformativo/>}/>
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}

export default App