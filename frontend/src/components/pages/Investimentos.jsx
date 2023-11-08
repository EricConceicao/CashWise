import Header from '../layouts/Header';
import Footer from '../layouts/Footer';
import { Container, Row, Col, Card } from 'react-bootstrap';

const Investimentos = () => {

    const divStyle = {
        width: '100%',
        // Defina a altura desejada para sua div
        backgroundImage: 'url("img/moldura.png")', // Substitua pelo caminho real da sua imagem
        backgroundSize: 'contain', // Isso garante que a imagem cubra toda a div
        backgroundPosition: 'center', // Isso centraliza a imagem na div
        // Outros estilos que você deseja aplicar à sua div
    };


    return (
        <>
            <Header />
            <div style={divStyle}>
                <div className="bg-secondary text-white text-center py-5">
                    <h1>Principais Tipos de Investimentos</h1>
                </div>

                <Container className="mt-5">
                    <Row>
                        <Col md={12} className="mb-4">
                            <Card>

                                <Card.Body>
                                    <Card.Title><h2>Os Diferentes Tipos de Renda Fixa</h2></Card.Title>
                                    <Card.Text>
                                        <h3>Conheça as Opções:</h3>
                                        <h4>Certificados de Depósito Bancário (CDB):</h4>
                                        <h5>Vantagens:</h5>

                                        <p>Segurança: Garantido pelo Fundo Garantidor de Créditos (FGC) até um determinado valor.</p>

                                        <p>Variedade de Prazos: CDBs podem ter diferentes prazos, permitindo escolher uma opção que se alinhe com seus objetivos financeiros.</p>

                                        <p>Rentabilidade: Oferece taxas de juros mais atrativas do que a poupança, dependendo do prazo e do banco emissor.</p>

                                        <h5>Desvantagens:</h5>

                                        <h4>Tesouro Direto (Títulos Públicos):</h4>

                                        <h5>Vantagens:</h5>

                                        <p>Segurança: Investimento em títulos públicos, considerados de baixo risco.</p>

                                        <p>Acessibilidade: Investidores individuais podem comprar títulos do Tesouro Direto com baixo valor inicial.</p>

                                        <p>Diversidade: Diferentes tipos de títulos, como Tesouro Selic, Tesouro IPCA+ e Tesouro Prefixado, oferecendo opções para diferentes perfis de investidores.</p>

                                        <h5>Desvantagens:</h5>
                                        <p>Flutuação de Preços: Os preços dos títulos podem variar no mercado secundário, impactando o valor dos investimentos antes do vencimento.</p>
                                        <p>Tributação: Incide Imposto de Renda sobre os rendimentos, seguindo uma tabela regressiva.</p>

                                        <Card.Img src="img/tiposInv.png" alt="Imagem do artigo poupança" />

                                        <h4>Letra de Crédito Imobiliário (LCI) e Letra de Crédito do Agronegócio (LCA):</h4>
                                        <h5>Vantagens:</h5>
                                        <p>Isenção de Imposto de Renda: Rendimentos são isentos de Imposto de Renda para pessoas físicas.</p>
                                        <p>Segurança: Garantidos pelo Fundo Garantidor de Créditos (FGC) em caso de falência da instituição financeira emissora.</p>
                                        <p>Específicos: LCI está atrelada a financiamentos imobiliários; LCA está relacionada ao agronegócio.</p>

                                        <h5>Desvantagens:</h5>
                                        <p>Liquidez: Alguns títulos têm prazos mínimos de carência, limitando a disponibilidade do dinheiro antes do vencimento.</p>
                                        <p>Rendimento Menor: Em geral, oferecem taxas de juros um pouco menores em comparação com CDBs de bancos médios e grandes.</p>

                                    </Card.Text>
                                </Card.Body>
                            </Card>
                        </Col>
                    </Row>
                </Container>
                <Footer />

            </div>
        </>
    );
}

export default Investimentos;