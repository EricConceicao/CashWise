import Header from '../layouts/Header';
import Footer from '../layouts/Footer';
import { Container, Row, Col, Card } from 'react-bootstrap';

import './Artigos.css';

const Investodos = () => {

    const card = {
        minHeight: "35rem",
        borderWidth: '3px',

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
        <>
            <Header />
            <div id='top' style={colorBody}>
                <div className="bg-secondary text-white text-center py-5">
                    <h1>Investimentos para Todos</h1>
                    <h2 style={{ color: '#AEF2C6' }}>Conhecimento Financeiro Sem Complicações</h2>
                </div>

                <Container className="mt-5 mb-5">
                    <Row className='bg-light px-1 py-3'>
                        <Col md={12} className="mb-4">
                            <Card style={card}>
                                <Card.Body className='py-5'>
                                    <Card.Img id='card-img' src="img/investtodos.png" alt="Imagem do artigo Investimento para todos" />
                                    <Card.Title className='fs-4 p-3 bg-info rounded-3' style={{ textAlign: "center" }}>Entenda Sobre os Conceitos dos Principais Investimentos</Card.Title>
                                    <Card.Text className='fs-5 p-2' style={{ textAlign: "justify" }}>
                                        <p>Investir significa aplicar dinheiro em diferentes tipos de ativos, como ações, títulos, imóveis, entre outros, com o propósito de obter retorno financeiro.</p>
                                        <p>É fundamental investir, pois permite que o dinheiro trabalhe a seu favor, gerando renda passiva e aumentando seu patrimônio ao longo do tempo.</p>
                                        <p>Outro aspecto crucial do investimento é sua capacidade de transformar sonhos em realidade. Seja para adquirir uma casa, se preparar para a aposentadoria ou até mesmo para viagens e projetos pessoais, investir se torna a ferramenta viabilizadora desses objetivos financeiros.</p>
                                        <p>A disciplina e a consistência nos investimentos contribuem significativamente para alcançar essas importantes metas na vida.</p>
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                        </Col>

                        <Col lg={6} md={6} className="mb-4">
                            <Card style={card}>
                                <Card.Body>
                                    <Card.Img id='card-img' src="img/inv2.png" alt="Imagem do artigo Investimento para todos" />
                                    <Card.Title className='fs-4 p-4'>Renda Ativa</Card.Title>
                                    <Card.Text className='fs-5 p-2' style={{ textAlign: "justify" }}>
                                        <p>É aquela em que você precisa trabalhar ativamente para receber dinheiro. Isso inclui salários, honorários profissionais, renda de negócios próprios e qualquer outra atividade em que você esteja diretamente envolvido. Nesse caso, o seu tempo e esforço são necessários para gerar renda, sendo uma forma de renda imediata e essencial para sustentar as despesas do dia a dia.</p>
                                        <p>Esta modalidade de renda é frequentemente limitada pelo número de horas que você pode dedicar e pela capacidade individual de gerar receita. Seu crescimento está atrelado à disponibilidade de tempo e esforço. No entanto, ao investir em habilidades, automação ou expandir suas fontes de renda, é possível ampliar os ganhos provenientes dessa modalidade.</p>
                                        <p className='fs-5'>Características:</p>
                                        <ul>
                                            <li>Depende do seu trabalho ou esforço;</li>
                                            <li>Exige tempo e dedicação;</li>
                                            <li>Pode ser limitada pela quantidade de horas que você pode trabalhar;</li>
                                            <li>Pode ser afetada por fatores externos, como crises econômicas ou mudanças no mercado.</li>
                                        </ul>
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                        </Col>

                        <Col lg={6} md={6} className="mb-4">
                            <Card style={card}>
                                <Card.Body>
                                    <Card.Img id='card-img' src="img/inv1.png" alt="Imagem do artigo Investimento para todos" />
                                    <Card.Title className='fs-4 p-4'>Renda Passiva</Card.Title>
                                    <Card.Text className='fs-5 p-2' style={{ textAlign: "justify" }}>
                                        <p>É aquela em que você recebe dinheiro sem precisar trabalhar ativamente. É uma forma de renda que é gerada por meio de investimentos, aluguéis, royalties, dividendos de ações e outros tipos de rendimentos financeiros. A renda passiva permite que você ganhe dinheiro mesmo quando não está trabalhando ativamente.</p>
                                        <p>Compreender e explorar a renda passiva pode ser um caminho valioso para complementar a renda ativa, proporcionar maior estabilidade financeira e alcançar uma independência financeira desejada no futuro.</p>
                                        <p className='fs-5'>Características:</p>
                                        <ul className='p-2'>
                                            <li>Não depende do seu trabalho ou esforço ativo;</li>
                                            <li>Pode ser obtida a partir de investimentos em produtos do mercado financeiro, imóveis, royalties (quantia paga ao proprietário para usar, explorar, comercializar.</li>
                                            <li>Não exige tempo e dedicação constante;</li>
                                            <li>Pode ser escalável, ou seja, pode crescer ao longo do tempo.</li>
                                        </ul>
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                        </Col>

                        <Col md={12} className="mb-4">
                            <Card style={card}>
                                <Card.Body>
                                    <Card.Title className='fs-4 p-3 bg-info rounded-3' style={{ textAlign: "center" }}>Qual é a Diferença entre Renda Ativa e Renda Passiva?</Card.Title>                                                                        <Card.Title></Card.Title>
                                    <Card.Text className='fs-5 p-2' style={{ textAlign: "justify" }}>
                                        <p>Ambos os tipos de renda possuem nuances distintas, cada qual com suas vantagens e desvantagens. A renda ativa oferece a possibilidade de ter um controle mais direto sobre seus ganhos, permitindo aumentar sua renda em consonância com o esforço empregado. No entanto, essa modalidade pode ser limitada pelo número de horas disponíveis para o trabalho e pela escassez de oportunidades.</p>
                                        <p>Por outro lado, a renda passiva apresenta-se como uma oportunidade de obter ganhos contínuos sem a necessidade de atuar diretamente. No entanto, geralmente requer um investimento inicial considerável e, muitas vezes, leva um período de tempo para gerar retornos financeiros significativos.</p>
                                        <p>É crucial compreender que tanto a renda ativa quanto a passiva podem ser elementos integrantes de uma estratégia financeira saudável. Muitos indivíduos buscam diversificar suas fontes de renda, combinando esforços ativos, como trabalho convencional, consultoria ou negócios próprios, com investimentos capazes de gerar renda passiva, como aluguéis, dividendos de ações ou investimentos imobiliários.</p>
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                        </Col>

                        <Col lg={6} md={6} className="mb-4">
                            <Card style={card}>
                                <Card.Body>
                                    <Card.Img id='card-img' src="img/inv4.png" alt="Imagem do artigo Investimento para todos" />
                                    <Card.Title className='fs-4 mt-3' style={{ textAlign: "center" }}>Renda Fixa</Card.Title>
                                    <Card.Text className='fs-5 p-2' style={{ textAlign: "justify" }}>
                                        <p>É uma categoria de investimento na qual os investidores alocam recursos em instituições, sejam elas governamentais ou corporativas, por meio da aquisição de títulos como Tesouro Direto, CDBs (Certificados de Depósito Bancário), debêntures, entre outros. Nesse formato, recebem juros predefinidos e estabelecem um prazo determinado para o retorno do capital emprestado, conhecido como vencimento. </p>
                                        <p>Este tipo de investimento é considerado mais seguro em comparação com outras modalidades, pois proporciona maior previsibilidade de retorno. Os juros e o prazo são estabelecidos no momento da aplicação, o que oferece uma maior estabilidade. No entanto, é importante notar que a rentabilidade tende a ser mais estável e potencialmente menor em comparação com investimentos que envolvem um nível mais elevado de risco.</p>
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                        </Col>

                        <Col lg={6} md={6} className="mb-4">
                            <Card style={card}>
                                <Card.Body className='p-1'>
                                    <Card.Title className='fs-4 mt-4' style={{ textAlign: "center" }}>Fontes de Renda Passiva para Pequenos Investidores:</Card.Title>
                                    <Card.Img className='' id='card-img' src="img/inv5.png" alt="Imagem do artigo Investimento para todos" />
                                    <Card.Text className='fs-5 p-2 mt-4' style={{ textAlign: "justify" }}>
                                        <ul className='p-3'>
                                            <li>Dividendos de Ações: Ao comprar ações de empresas, você pode receber uma parte dos lucros delas regularmente na forma de dividendos.</li>
                                            <li>Aluguéis de Imóveis: Se você tiver um imóvel para alugar, pode gerar renda passiva através dos aluguéis.</li>
                                            <li>Fundos Imobiliários (FIIs): Pequenos investidores podem comprar cotas de fundos que investem em imóveis, recebendo uma parte dos aluguéis e ganhos de capital.</li>
                                            <li>Peer-to-Peer Lending (P2P): Plataformas de empréstimos, onde os investidores emprestam dinheiro a indivíduos ou empresas em troca de juros.</li>
                                            <li>Investimentos em Renda Fixa: Certos tipos de investimentos em renda fixa, como os títulos do Tesouro Direto, podem gerar juros regularmente.
                                            </li>
                                        </ul>
                                    </Card.Text>
                                </Card.Body>
                            </Card >
                        </Col >
                        <Col md={12} className="mb-4">

                            <Card style={card}>
                                <Card.Body>
                                    <Card.Img id='card-img' src="img/inv9.png" alt="Imagem do artigo Investimento para todos" />
                                    <Card.Title className='fs-4 mt-3' style={{ textAlign: "center" }}>Renda Variável</Card.Title>
                                    <Card.Text className='fs-5 p-2' style={{ textAlign: "justify" }}>
                                        <p>Renda Variável é um tipo de investimento no qual o retorno não pode ser precisamente previsto. Nesse cenário, o investidor adquire uma participação em uma empresa ou fundo e busca obter lucro com a valorização desses ativos no mercado.</p>
                                        <p>Nesse mercado, é possível adquirir partes de empresas (ações) ou investir em ativos como imóveis. O valor desses ativos pode flutuar, subindo ou descendo, tornando-se, portanto, mais arriscado em comparação com a renda fixa. No entanto, oferece um potencial de lucro mais elevado.</p>

                                        <p>Investir é, de fato, uma maneira significativa de gerar renda passiva, mas não se limita a essa função. Também pode envolver a busca pelo crescimento de capital, preservação de patrimônio e a realização de objetivos financeiros de longo prazo. Renda passiva é aquela renda que você obtém regularmente sem a necessidade de trabalhar ativamente para recebê-la.</p>
                                        <p>Conforme mencionado, a geração de renda passiva pode ocorrer através de diversos meios, incluindo investimentos, aluguéis de imóveis, dividendos de ações e até mesmo royalties. Os royalties representam uma espécie de taxa paga pelo direito de usar, explorar ou comercializar um bem, como livros, músicas, franquias, espaço, entre outros.</p>

                                    </Card.Text>
                                </Card.Body>
                            </Card>
                        </Col>

                    </Row >
                </Container >
                <Footer anchor="top" />

            </div >
        </>
    );
}

export default Investodos;