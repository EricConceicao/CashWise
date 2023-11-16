import Header from '../layouts/Header';
import Footer from '../layouts/Footer';
import { Container, Row, Col, Card } from 'react-bootstrap';

const Prev = () => {

    const divStyle = {
        padding: '2rem 0',
        width: '100%',
        backgroundImage: 'url("img/moldura.png")',
        backgroundSize: 'contain',
        backgroundPosition: 'center',

    };


    return (
        <>
            <Header />
            <main style={divStyle}>
                <div className="container p-1 bg-light text-center">
                    <header className="bg-secondary text-white text-center py-5">
                        <h1 className='display-1'>Previdência</h1>
                    </header>

                    <article>
                        <h2 className='fw-bold'>Previdência Social e Previdência Privada</h2>
                        
                        <Row className="align-items-center p-2">
                            <Col sm="6">
                                <img src="img/previdencia.png" alt="Imagem do artigo poupança" />
                            </Col>
                           
                            <Col sm="6" className='px-2'>
                                <h3 className='bg-info justify-content-center'>Previdência Social</h3>
                                <p className='fs-5'>Previdência Social é um sistema público de seguridade social, onde os trabalhadores contribuem ao longo da vida e, quando se aposentam, recebem benefícios do governo. É uma forma de renda passiva, mas o valor pode ser limitado.</p>
                            </Col>
                        </Row>

                        <h3>Previdência Privada</h3>
                        <p>Previdência Privada é uma opção voluntária, onde você contribui regularmente para uma instituição financeira, como um banco ou seguradora, para receber benefícios na aposentadoria. Pode ser uma alternativa para complementar a Previdência Social.</p>
                        <h3>Tesouro Renda+ (Tesouro Direto)</h3>
                        <p>O Tesouro Renda+ é um programa do governo que permite que as pessoas comprem títulos públicos. </p>
                        <p>Quando você compra um título do Tesouro, está emprestando dinheiro ao governo e, em troca, recebe juros. É uma forma de investimento em renda fixa, com diferentes opções de títulos de acordo com o prazo e a rentabilidade desejados.</p>
                        <p>É importante lembrar que todos os investimentos têm riscos, e é fundamental fazer pesquisas, entender seus objetivos financeiros e talvez buscar aconselhamento de um profissional financeiro antes de começar a investir. Além disso, a educação financeira contínua é crucial para tomar decisões informadas sobre o seu dinheiro ao longo da vida.
                        </p>
                    </article>

                    <article className='mt-5'>
                        <h2>Faça a sua Simulação Previdenciária Aqui!</h2>

                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi magnam ab modi perferendis sit voluptatum amet molestias. Tenetur, molestiae dolor quo est tempore fugit odit cumque esse rerum magni necessitatibus. Ullam quas ad eveniet praesentium molestias provident dolorem nihil rem, illo, repellendus autem suscipit eius ducimus est! Delectus suscipit reprehenderit unde distinctio dolor explicabo fugit esse modi. Nesciunt repellat vero facere deserunt iste consequuntur magni commodi assumenda officia, a nemo cumque ratione sit maxime? Qui tempore excepturi id impedit repellat vero veritatis suscipit nemo deserunt, adipisci facere iste laborum sapiente doloribus ab culpa delectus eligendi dolorum. Molestias tempora velit, culpa amet, impedit nihil pariatur vel labore cumque fuga ut possimus molestiae repellendus ex suscipit maiores sit magni non expedita sapiente mollitia cum iusto veritatis?</p>
                    </article>
                </div>

            </main>
            <Footer />
        </>
    );
}

export default Prev;