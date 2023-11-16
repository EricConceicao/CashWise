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
import Poupanca from './components/pages/Poupanca';
import Investimentos from './components/pages/Investimentos';
import Investodos from './components/pages/Investodos';
import Prev from './components/pages/Prev';
import Educacao from './components/pages/Educacao';
import Dicas from './components/pages/Dicas';
// Importações de componentes //
import Loader from './components/utils/Loader';

// Importações de Estilos
import 'bootstrap/dist/css/bootstrap.min.css';
import '../public/css/custom.css';
import './App.css';


const App = () => {
  return (
    <>
    <Loader />
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/contato" element={<Contato />} />
      <Route path="/sobre" element={<Sobre />} />
      <Route path="/home" element={<Home />}/>
      <Route path="/previdencia" element={<PrevidenciaAqui/>}/>
      <Route path="/boletim" element={<BoletimInformativo/>}/>
      <Route path="/poupanca" element={<Poupanca/>}/>
      <Route path="/investimentos" element={<Investimentos/>}/>
      <Route path="/investodos" element={<Investodos/>}/>
      <Route path="/prev" element={<Prev/>}/>
      <Route path="/educacao" element={<Educacao/>}/>
      <Route path="/dicas" element={<Dicas/>}/>
      <Route path="*" element={<NotFound />} />
    </Routes>
    </>
  );
}

export default App