import {Route, Routes} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../public/css/custom.css';

import './App.css';

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/sobre" element={<Sobre />} />
      <Route path="/contato" element={<Contato />} />
      <Route path="/landingPage" element={<LandingPage/>}/>
      <Route path="/previdencia" element={<PrevidenciaAqui/>}/>
      <Route path="/boletimInformativo" element={<BoletimInformativo/>}/>
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}

export default App