// Importações de Bibliotecas e componentes
import { Route, Routes } from 'react-router-dom';

// Importações de componentes de página
import LandingPage from './components/pages/LandingPage';
import Home from './components/pages/Home';
import Sobre from './components/pages/Sobre';
import Contato from './components/pages/Contato';
import NotFound from './components/pages/NotFound';

// Páginas do Simule //
import Simule from './components/pages/simule';
import Resultado from './components/layouts/Resultado';

// Páginas do Boletim informativo //
import BoletimInformativo from './components/pages/BoletimInformativo';
import Poupanca from './components/pages/artigos/Poupanca';
import Investimentos from './components/pages/artigos/Investimentos';
import Investodos from './components/pages/artigos/Investodos';
import Prev from './components/pages/artigos/Prev';
import Educacao from './components/pages/artigos/Educacao';
import Dicas from './components/pages/artigos/Dicas';

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
      <Route path="/boletim" element={<BoletimInformativo/>}/>
      <Route path="/poupanca" element={<Poupanca/>}/>
      <Route path="/investimentos" element={<Investimentos/>}/>
      <Route path="/investodos" element={<Investodos/>}/>
      <Route path="/prev" element={<Prev/>}/>
      <Route path="/educacao" element={<Educacao/>}/>
      <Route path="/dicas" element={<Dicas/>}/>
      <Route path="/simule" element={<Simule/>}/>
      <Route path="/resultado" element={<Resultado/>}/>
      <Route path="*" element={<NotFound />} />
    </Routes>
    </>
  );
}

export default App