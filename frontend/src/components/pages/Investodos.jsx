import Header from '../layouts/Header';
import Footer from '../layouts/Footer';
import { Container, Row, Col, Card } from 'react-bootstrap';

const Investodos = () => {

    const divStyle = {
        width: '100%',
        backgroundImage: 'url("img/moldura.png")',
        backgroundSize: 'contain',
        backgroundPosition: 'center',

    };


    return (
        <>
            <Header />
            <div style={divStyle}>
                <div className="bg-secondary text-white text-center py-5">
                    <h1>Investimentos para Todos</h1>
                </div>

                <Container className="mt-5">
                    <Row>
                        <Col md={12} className="mb-4">
                            <Card>

                                <Card.Body>
                                    <Card.Img className='w-100 ' src="img/investtodos.png" alt="Imagem do artigo Investimento para todos" />
                                    <Card.Title><h2>Entenda sobre os conceitos dos principais investimentos</h2></Card.Title>
                                    <Card.Text>

                                        <p>Investir é aplicar dinheiro em algum tipo de ativo, como ações, títulos, imóveis, entre outros, com o objetivo de obter um retorno financeiro. É importante investir porque permite que você faça o seu dinheiro trabalhar por você, gerando renda passiva e aumentando o seu patrimônio ao longo do tempo. </p>
                                        <p>Além disso, investir pode ajudar a proteger o seu dinheiro da inflação e a alcançar objetivos financeiros, como a compra de uma casa, aposentadoria ou viagens. </p>
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                        </Col>

                        <Col lg={4} md={6} className="mb-4">

                            <Card>

                                <Card.Body>
                                    <Card.Img className='w-100 ' src="img/investtodos.png" alt="Imagem do artigo Investimento para todos" />
                                    <Card.Title>Renda Ativa</Card.Title>
                                    <Card.Text>
                                        <p>Renda Ativa é aquela em que você precisa trabalhar ativamente para receber dinheiro. Isso inclui salários, honorários profissionais, renda de negócios próprios e qualquer outra atividade em que você esteja diretamente envolvido. Nesse caso, o seu tempo e esforço são necessários para gerar renda.</p>
                                        <h4>Renda Ativa:</h4>
                                        <ol>
                                            <li>Depende do seu trabalho ou esforço;</li>
                                            <li>Exige tempo e dedicação;</li>
                                            <li>Pode ser limitada pela quantidade de horas que você pode trabalhar;</li>
                                            <li>Pode ser afetada por fatores externos, como crises econômicas ou mudanças no mercado.</li>
                                        </ol>
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                        </Col>

                        <Col lg={4} md={6} className="mb-4">
                            <Card>
                                <Card.Body>
                                    <Card.Img className='w-100 ' src="img/investtodos.png" alt="Imagem do artigo Investimento para todos" />
                                    <Card.Title>Renda Passiva</Card.Title>
                                    <Card.Text>
                                        <p>Renda Passiva é aquela em que você recebe dinheiro sem precisar trabalhar ativamente. É uma forma de renda que é gerada por meio de investimentos, aluguéis, royalties, dividendos de ações e outros tipos de rendimentos financeiros. A renda passiva permite que você ganhe dinheiro mesmo quando não está trabalhando ativamente.</p>
                                        <h4>Renda Passiva:</h4>
                                        <ol>
                                            <li>Não depende do seu trabalho ou esforço ativo;</li>
                                            <li>Pode ser obtida a partir de investimentos em produtos do mercado financeiro, imóveis, royalties (quantia paga ao proprietário para usar, explorar, comercializar, enfim, usufruir de algo que é seu por direito, por exemplo, quantia paga a compositores e autores para usar sua música comercialmente), entre outros;</li>
                                            <li>Não exige tempo e dedicação constante;</li>
                                            <li>Pode ser escalável, ou seja, pode crescer ao longo do tempo.</li>
                                        </ol>
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                        </Col>

                        <Col md={12} className="mb-4">
                            <Card>
                                <Card.Body>
                                    <Card.Img className='w-100 ' src="img/investtodos.png" alt="Imagem do artigo Investimento para todos" />
                                    <Card.Title></Card.Title>
                                    <Card.Text>
                                        <p>Ambos os tipos de renda têm suas vantagens e desvantagens. A renda ativa pode oferecer maior controle sobre seus ganhos e a possibilidade de aumentar sua renda com base no seu esforço. No entanto, ela também pode ser limitada pelo número de horas que você pode trabalhar e pela disponibilidade de oportunidades.</p>
                                        <p>A renda passiva, por outro lado, pode oferecer a possibilidade de ganhos contínuos sem a necessidade de trabalhar ativamente. No entanto, ela geralmente requer um investimento inicial e pode levar tempo para gerar retornos significativos.</p>
                                        <p>É importante entender que tanto a renda ativa quanto a renda passiva podem ser parte de uma estratégia financeira saudável. Muitas pessoas buscam diversificar suas fontes de renda, combinando trabalho ativo com investimentos que geram renda passiva.</p>
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                        </Col>

                        <Col lg={4} md={6} className="mb-4">
                            <Card>
                                <Card.Body>
                                    <Card.Img className='w-100 ' src="img/investtodos.png" alt="Imagem do artigo Investimento para todos" />
                                    <Card.Title>Renda Ativa</Card.Title>
                                    <Card.Text>
                                        <h3>Renda Fixa e Renda Variável</h3>

                                        <h4>Renda Fixa</h4>
                                        <p>Renda Fixa é um tipo de investimento em que o investidor empresta dinheiro a uma instituição, como um governo ou empresa, em troca de juros e prazo de vencimento.</p>
                                        <p>É considerado um investimento mais seguro, pois oferece maior previsibilidade de retorno. Você empresta seu dinheiro comprando títulos de dívida, como CDBs, LCIs e Tesouro Direto. Esses investimentos são mais seguros, mas geralmente oferecem retornos mais baixos.</p>
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col lg={4} md={6} className="mb-4">

                            <Card>

                                <Card.Body>
                                    <Card.Img className='w-100 ' src="img/investtodos.png" alt="Imagem do artigo Investimento para todos" />
                                    <Card.Title>Renda Ativa</Card.Title>
                                    <Card.Text>
                                        <h3>Renda Variável</h3>
                                        <p>Renda Variável, por outro lado, é um tipo de investimento em que o retorno não pode ser previsto com certeza. Nesse caso, o investidor adquire uma participação em uma empresa ou fundo e espera obter lucro com a valorização desses ativos no mercado.</p>
                                        <p>Nesse mercado, você compra partes de empresas (ações) ou investe em coisas como imóveis. O valor desses ativos pode subir ou descer e, portanto, é mais arriscado do que a renda fixa. No entanto, o potencial de lucro é maior.
                                        </p>

                                        <p>Podemos dizer então que o investimento é uma maneira importante de gerar renda passiva, mas não é sua única função.</p>
                                        <p>Investir também pode envolver a busca por crescimento de capital, preservação de patrimônio e realização de objetivos financeiros de longo prazo. Renda passiva é dinheiro que você ganha regularmente sem precisar trabalhar ativamente por ele.</p>
                                        <p>Como já vimos, podemos gerar renda passiva através de investimentos, aluguéis de imóveis, dividendos de ações ou até mesmo royalties (espécie de taxa paga pelo direito de usar, explorar ou comercializar um bem, como: livros, músicas, franquia, espaço, etc.).</p>


                                    </Card.Text>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col lg={4} md={6} className="mb-4">

                            <Card>

                                <Card.Body>
                                    <Card.Img className='w-100 ' src="img/investtodos.png" alt="Imagem do artigo Investimento para todos" />
                                    <Card.Title>Renda Ativa</Card.Title>
                                    <Card.Text>
                                        <h3>Fontes de Renda Passiva para Pequenos Investidores:</h3>
                                        <ol>
                                            <li>Dividendos de Ações: Ao comprar ações de empresas, você pode receber uma parte dos lucros delas regularmente na forma de dividendos.</li>
                                            <li>Aluguéis de Imóveis: Se você tiver um imóvel para alugar, pode gerar renda passiva através dos aluguéis.</li>
                                            <li>Fundos Imobiliários (FIIs): Pequenos investidores podem comprar cotas de fundos que investem em imóveis, recebendo uma parte dos aluguéis e ganhos de capital.</li>
                                            <li>Investimentos em Renda Fixa: Certos tipos de investimentos em renda fixa, como os títulos do Tesouro Direto, podem gerar juros regularmente.
                                            </li>
                                        </ol>


                                    </Card.Text>
                                </Card.Body>
                            </Card >
                        </Col >
                    </Row >
                </Container >
                <Footer />

            </div >
        </>
    );
}

export default Investodos;