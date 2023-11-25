import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import PropTypes from 'prop-types';
import axios from 'axios';
import Header from '../layouts/Header';
import Footer from '../layouts/Footer';
import Blockquote from '../layouts/Blockquote';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';

import './Simule.css';
//import Resultado from '../layouts/Resultado';

function SimulePage() {
  const navigate = useNavigate();

  const [mesAno, setMesAno] = useState(['']);
  const [salario, setSalario] = useState(['']);
  const [genero, setGenero] = useState('');
//  const [dataNascimento, setDataNascimento] = useState('');
  const [error, setError] = useState(null);

  const handleGeneroChange = (e) => {
    setGenero(e.target.value);
  };

  // const handleDataNascimentoChange = (e) => {
  //   setDataNascimento(e.target.value);
  // };

  const adicionarLinha = () => {
    setMesAno([...mesAno, '']);
    setSalario([...salario, '']);
  };

  const handleSimulation = async (dataNascimento) => {
    const requestData = {
      genero,
      dataNascimento,
      campoAnoMes: mesAno,
      campoSalario: salario,
    };

    try {
      const response = await axios.post('http://localhost:3000/simule', requestData);
      if (response.data.success) {
        const simulacaoData = response.data;
        console.log(simulacaoData)
        navigate('/resultado', { state: { ...simulacaoData } });
      } else {
        setError('Não apurado!');
      }
    } catch (error) {
      console.error(error);
      setError('Erro de rede ao se comunicar com o servidor.');
    }
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    handleSimulation(e.target.dataNascimento.value);
  };
// .................................................................................
  function GeneroSelection({ genero, handleGeneroChange }) {
    return (
      <div className="section">
        <h2>2. Selecione o seu Gênero</h2>
        <div className="radio-group">
          <label>
            <input
              type="radio"
              name="genero"
              value="m"
              checked={genero === 'm'}
              onChange={handleGeneroChange}
            />
            Masculino
          </label>
          <label>
            <input
              type="radio"
              name="genero"
              value="f"
              checked={genero === 'f'}
              onChange={handleGeneroChange}
            />
            Feminino
          </label>
        </div>
      </div>
    );
  }

  GeneroSelection.propTypes = {
    genero: PropTypes.string.isRequired,
    handleGeneroChange: PropTypes.func.isRequired,
  };

  function DataNascimentoInput() {
    return (
      <div className="section">
        <h2>3. Insira a sua Data de Nascimento</h2>
        <input
          type="date"
          className="data-input"
          name="dataNascimento"

        />
      </div>
    );
  }

  DataNascimentoInput.propTypes = {
    dataNascimento: PropTypes.string.isRequired,
    handleDataNascimentoChange: PropTypes.func.isRequired,
  };

  return (
    <>
      <Header />
      <div className="simule-page">

        <main className="main-content">
          <h1>Previdência Social!</h1>
          <div className="blockquote-container w-100">
            <Blockquote />
          </div>
        </main>
        <Container className="corpo">
          <Row>
            <Col xs={12} md={6} className="imagem">
              {/* Imagem */}
            </Col>
            <Col xs={12} md={6}>
              <form onSubmit={handleFormSubmit}>
                <div className="tabela">
                  <h2>1. Informe o salário recebido correspondente ao mês/ano trabalhado</h2>
                  <table>
                    <thead>
                      <tr>
                        <th>MÊS / ANO</th>
                        <th>SALÁRIO (R$)</th>
                      </tr>
                    </thead>
                    <tbody>
                      {mesAno.map((value, index) => (
                        <tr key={index}>
                          <td>
                            <Form.Group>
                              <Form.Control
                                type="text"
                                name="mesAno"
                                value={value}
                                onChange={(e) => {
                                  const updatedMesAno = [...mesAno];
                                  updatedMesAno[index] = e.target.value;
                                  setMesAno(updatedMesAno);
                                }}
                              />
                            </Form.Group>
                          </td>
                          <td>
                            <Form.Group>
                              <Form.Control
                                type="text"
                                name="salario"
                                value={salario[index]}
                                onChange={(e) => {
                                  const updatedSalario = [...salario];
                                  updatedSalario[index] = e.target.value;
                                  setSalario(updatedSalario);
                                }}
                              />
                            </Form.Group>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                  <Button variant="primary" className="add-button" onClick={adicionarLinha}>
                    Adicionar Linha na Tabela
                  </Button>
                </div>
                <GeneroSelection genero={genero} handleGeneroChange={handleGeneroChange} />
                <DataNascimentoInput  />
                <Button variant="primary" type="submit" className="submit-button">
                  Enviar dados e Simular
                </Button>
                {error && <div className="error-message">{error}</div>}
              </form>
            </Col>
          </Row>
        </Container>
       
      </div>
      <Footer />
    </>
  );
}




export default SimulePage;
