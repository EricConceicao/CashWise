import Header from '../layouts/Header';
import Footer from '../layouts/Footer';
import { Container, Row, Col, Card } from 'react-bootstrap';

const Poupanca = () => {

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
                    <h1>Poupança</h1>
                    <p>Conheça as vantagens e desvantagens de um dos investimentos mais tradicionais.</p>
                </div>

                <Container className="mt-5">
                    <Row>
                        <Col md={12} className="mb-4">
                            <Card>
                                <Card.Img src="img/cofrinho.png" alt="Imagem do artigo poupança" />
                                <Card.Body>
                                    <Card.Title><h2>"Poupança: O Caminho Seguro para o seu Dinheiro?"</h2></Card.Title>
                                    <Card.Text>
                                   <h3> Vantagens da Poupança:</h3>
<p>Segurança: A poupança é garantida pelo Fundo Garantidor de Créditos (FGC) até um determinado valor, proporcionando segurança aos seus fundos.</p>

<p>Acesso Fácil: É fácil abrir uma conta poupança, e a maioria dos bancos oferece serviços online, proporcionando acesso conveniente aos seus fundos.</p>

<p>Liquidez: Você pode acessar seu dinheiro a qualquer momento, tornando a poupança uma escolha ideal para emergências e necessidades imediatas.</p>

<p>Rentabilidade Básica: A poupança oferece uma taxa de juros básica, permitindo que seu dinheiro cresça, mesmo que em um ritmo moderado.</p>

<p>Isenção de Impostos: Em muitos países, os rendimentos da poupança são isentos de impostos, o que significa que você mantém todo o dinheiro que ganha.</p>

<h3>Desvantagens da Poupança:</h3>
<p>Baixa Rentabilidade: Comparada a outras opções de investimento, a poupança oferece uma taxa de juros relativamente baixa, muitas vezes não acompanhando a inflação.</p>

<p>Perda para Inflação: Se a taxa de inflação for maior do que a taxa de juros da poupança, o poder de compra do seu dinheiro diminuirá ao longo do tempo.</p>

<p>Limites de Saque: Alguns bancos impõem limites aos saques da poupança, o que pode ser um problema em situações de emergência ou quando você precisa acessar grandes quantias.</p>

<p>Opções Limitadas: A poupança não oferece muitas opções de crescimento para seu dinheiro; é uma escolha conservadora, mas limitada em termos de potencial de ganhos.</p>

<p>Risco de Desvalorização: Em tempos de instabilidade econômica, a moeda pode desvalorizar, afetando indiretamente o valor real do seu dinheiro na poupança.</p>


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

export default Poupanca;