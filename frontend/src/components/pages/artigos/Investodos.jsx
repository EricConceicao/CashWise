import Header from '../../layouts/Header';
import Footer from '../../layouts/Footer';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import CoinText from '../../utils/CoinText';

import './Artigos.css';

const Investodos = () => {

    const card = {
        borderWidth: '0.2rem',
    }
    const divStyle = {
        width: '100%',
        backgroundSize: 'contain',
        backgroundPosition: 'center',
    }
    const colorBody = {
        backgroundImage: 'url("img/moldura.png")',
    }


    return (
        <div id="topo" style={colorBody}>
            <Header />

                <header className="bg-secondary text-white text-center py-5">
                    <h1 className='display-2'>Investimentos para Todos</h1>
                    <h2 style={{ color: '#AEF2C6' }}>Conhecimento Financeiro Sem Complicações</h2>
                </header>

                <main className="container mt-5 mb-5">
                    <Row className='px-2 py-3'>
                        <Col md={12} className="mb-4">
                            <section>
                                <Card style={card}>
                                    <Card.Body>
                                        <Card.Title className='fs-5 p-3 bg-info rounded-3' style={{ textAlign: "center" }}>Entenda Sobre os Conceitos dos Principais Investimentos</Card.Title>
                                        <Card.Img id='card-img' src="img/investtodos.png" alt="Imagem do artigo Investimento para todos" />
                                        <Card.Text style={{ textAlign: "justify" }}>
                                            <p>Investir é aplicar dinheiro em algum tipo de ativo, como ações, títulos, imóveis, entre outros, com o objetivo de obter um retorno financeiro. É importante investir porque permite que você faça o seu dinheiro trabalhar por você, gerando renda passiva e aumentando o seu patrimônio ao longo do tempo.</p>
                                            <p>Outro aspecto fundamental do investimento é sua capacidade de <CoinText textId="to-1">transformar sonhos</CoinText> em realidade. Seja a compra de uma casa, a preparação para a aposentadoria ou até mesmo viagens e projetos pessoais, investir é a ferramenta que pode viabilizar esses objetivos financeiros. A disciplina e a <CoinText textId="inv-2">constância nos investimentos</CoinText> contribuem significativamente para alcançar esses marcos importantes na vida.</p>
                                        </Card.Text>
                                    </Card.Body>
                                </Card>
                            </section>
                        </Col>

                        <Col lg={6} md={6} className="mb-4">
                            <section>
                                <Card style={card}>
                                    <Card.Body>
                                        <Card.Title className='text-center fs-5 p-3 bg-info rounded-3'>Renda Ativa</Card.Title>
                                        <Card.Img id='card-img' src="img/inv2.png" alt="Imagem do artigo Investimento para todos" />
                                        <Card.Text style={{ textAlign: "justify" }}>
                                            <p>É aquela em que você precisa trabalhar ativamente para receber dinheiro. Isso inclui salários, honorários profissionais, renda de negócios próprios e qualquer outra atividade em que você esteja diretamente envolvido. Nesse caso, o seu tempo e esforço são necessários para gerar renda, sendo  <CoinText textId="inv-3">forma de renda imediata</CoinText> e essencial para sustentar as despesas do dia a dia.</p>
                                            <p>Esta modalidade de renda é frequentemente limitada pelo número de horas que você pode dedicar e pela capacidade individual de gerar receita. Seu crescimento está atrelado à disponibilidade de tempo e esforço. No entanto, ao investir em habilidades, automação ou <CoinText textId="inv-4">expandir suas fontes de renda</CoinText>, é possível ampliar os ganhos provenientes dessa modalidade.</p>
                                            
                                            <h3 className='h4'>Características:</h3>
                                            <ul>
                                                <li>Depende do seu trabalho ou esforço;</li>
                                                <li>Exige tempo e dedicação;</li>
                                                <li>Pode ser limitada pela quantidade de horas que você pode trabalhar;</li>
                                                <li>Pode ser afetada por fatores externos, como crises econômicas ou mudanças no mercado.</li>
                                            </ul>
                                        </Card.Text>
                                    </Card.Body>
                                </Card>
                            </section>
                        </Col>

                        <Col lg={6} md={6} className="mb-4">
                            <section>
                                <Card style={card}>
                                    <Card.Body>
                                        <Card.Title className='text-center fs-5 p-3 bg-info rounded-3'>Renda Passiva</Card.Title>
                                        <Card.Img id='card-img' src="img/inv1.png" alt="Imagem do artigo Investimento para todos" />
                                        <Card.Text style={{ textAlign: "justify" }}>
                                            <p>É aquela em que você recebe dinheiro sem precisar trabalhar ativamente. É uma forma de renda que é gerada por meio de investimentos, aluguéis, royalties, dividendos de ações e outros tipos de rendimentos financeiros. A renda passiva permite que você ganhe dinheiro mesmo quando não está trabalhando ativamente.</p>
                                            <p>Compreender e explorar a renda passiva pode ser um caminho valioso para complementar a renda ativa, proporcionar maior estabilidade financeira e alcançar uma <CoinText textId="inv-5">independência financeira</CoinText> desejada no futuro.</p>
                                            
                                            <h3 className='h4'>Características:</h3>
                                            <ul>
                                                <li>Não depende do seu trabalho ou <CoinText textId="inv-6">esforço ativo</CoinText>;</li>
                                                <li>Pode ser obtida a partir de investimentos em produtos do mercado financeiro, imóveis, royalties (quantia paga ao proprietário para usar, explorar, comercializar, enfim, usufruir de algo que é seu por direito, por exemplo, quantia paga a compositores e autores para usar sua música comercialmente), entre outros;</li>
                                                <li>Não <CoinText textId="inv-7">exige tempo e dedicação</CoinText> constante;</li>
                                                <li>Pode ser escalável, ou seja, pode crescer ao longo do tempo.</li>
                                            </ul>
                                        </Card.Text>
                                    </Card.Body>
                                </Card>
                            </section>
                        </Col>

                        <Col md={12} className="mb-4">
                            <section>
                                <Card style={card}>
                                    <Card.Body>
                                        <Card.Title className='fs-5 p-3 bg-info rounded-3' style={{ textAlign: "center" }}>Qual é a Diferença entre Renda Ativa e Renda Passiva?</Card.Title>
                                        <Card.Text className='p-1' style={{ textAlign: "justify" }}>
                                            <p>Ambos os tipos de renda têm suas vantagens e desvantagens. A renda ativa pode oferecer maior controle sobre seus ganhos e a possibilidade de aumentar sua renda com base no seu esforço. No entanto, ela também pode ser limitada pelo número de horas que você pode trabalhar e pela <CoinText textId="inv-8">disponibilidade de oportunidades.</CoinText></p>
                                            <p>A renda passiva, por outro lado, pode oferecer a possibilidade de <CoinText textId="inv-9">ganhos contínuos</CoinText> sem a necessidade de trabalhar ativamente. No entanto, ela geralmente requer um investimento inicial e pode levar tempo para gerar retornos significativos.</p>
                                            <p>É importante entender que tanto a renda ativa quanto a renda passiva podem ser parte de uma estratégia financeira saudável. Muitas pessoas buscam diversificar suas fontes de renda, combinando trabalho ativo com investimentos que geram renda passiva.</p>
                                        </Card.Text>
                                    </Card.Body>
                                </Card>
                            </section>
                        </Col>

                        <Col lg={6} md={6} className="mb-4">
                            <section>
                                <Card style={card}>
                                    <Card.Body> 
                                        <Card.Title className='text-center fs-5 p-3 bg-info rounded-3' style={{ textAlign: "center" }}>Renda Fixa</Card.Title>
                                        <Card.Img id='card-img' src="img/inv4.png" alt="Imagem do artigo Investimento para todos" />
                                        <Card.Text style={{ textAlign: "justify" }}>
                                            <p>É uma categoria de investimento na qual os investidores direcionam recursos para instituições, sejam elas governamentais ou corporativas, em troca de um empréstimo; por meio da compra de títulos, como Tesouro Direto, CDBs (Certificados de Depósito Bancário), debêntures, entre outros; recebendo juros predefinidos e um prazo determinado para o retorno do capital emprestado, conhecido como vencimento </p>
                                            <p> Esse tipo de investimento é considerado mais seguro do que muitas outras modalidades, pois oferece maior previsibilidade de retorno, já que os juros e o prazo são acordados no momento da aplicação; porém, a rentabilidade tende a ser mais estável e menor em comparação com investimentos de maior risco.</p>
                                        </Card.Text>
                                    </Card.Body>
                                </Card>
                            </section>
                        </Col>

                        <Col lg={6} md={6} className="mb-4">
                            <section>
                                <Card style={card}>
                                    <Card.Body>
                                        <Card.Title className='text-center fs-5 bg-info rounded-3 p-1' style={{ textAlign: "center" }}>Renda Passiva para Pequenos Investidores:</Card.Title>
                                        <Card.Img id='card-img' src="img/inv5.png" alt="Imagem do artigo Investimento para todos" />
                                        <Card.Text style={{ textAlign: "justify" }}>
                                            <ul>
                                                <li>Dividendos de Ações: Ao comprar ações de empresas, você pode receber uma parte dos lucros delas regularmente na forma de dividendos.</li>
                                                <li>Aluguéis de Imóveis: Se você tiver um imóvel para alugar, pode gerar renda passiva através dos aluguéis.</li>
                                                <li>Fundos Imobiliários (FIIs): Pequenos investidores podem comprar cotas de fundos que investem em imóveis, recebendo uma parte dos aluguéis e ganhos de capital.</li>
                                                <li>Peer-to-Peer Lending (P2P): Plataformas de empréstimos, onde os investidores emprestam dinheiro a indivíduos ou empresas em troca de juros.</li>
                                                <li>Investimentos em Renda Fixa: Certos tipos de investimentos em renda fixa, como os títulos do Tesouro Direto, podem gerar juros regularmente.
                                                </li>
                                            </ul>
                                        </Card.Text>
                                    </Card.Body>
                                </Card>
                            </section>
                        </Col>

                        <Col md={12} className="mb-4">
                            <section>
                                <Card style={card}>
                                    <Card.Body>
                                        <Card.Title className='text-center p-3 fs-5 bg-info rounded-3' style={{ textAlign: "center" }}>Renda Variável</Card.Title>
                                        <Card.Img id='card-img' src="img/inv9.png" alt="Imagem do artigo Investimento para todos" />
                                         <Card.Text style={{ textAlign: "justify" }}>
                                            <p>Renda Variável, por outro lado, é um tipo de investimento em que o retorno não pode ser previsto com certeza. Nesse caso, o investidor adquire uma participação em uma empresa ou fundo e espera obter lucro com a valorização desses ativos no mercado.</p>
                                            <p>Nesse mercado, você compra partes de empresas (ações) ou investe em coisas como imóveis. O valor desses ativos pode subir ou descer e, portanto, é mais arriscado do que a renda fixa. No entanto, o potencial de lucro é maior.</p>

                                            <p>Podemos dizer então que o investimento é uma maneira importante de gerar renda passiva, mas não é sua única função.</p>
                                            <p>Investir também pode envolver a busca por crescimento de capital, preservação de patrimônio e realização de objetivos financeiros de longo prazo. Renda passiva é dinheiro que você ganha regularmente sem precisar trabalhar ativamente por ele.</p>
                                            <p>Como já vimos, podemos gerar renda passiva através de investimentos, aluguéis de imóveis, dividendos de ações ou até mesmo royalties (espécie de taxa paga pelo direito de usar, explorar ou comercializar um bem, como: livros, músicas, franquia, espaço, etc.).</p>

                                        </Card.Text>
                                    </Card.Body>
                                </Card>
                            </section>
                        </Col>
                    </Row >
                </main>

                <Footer anchor="topo" />
        </div>
    );
}

export default Investodos;