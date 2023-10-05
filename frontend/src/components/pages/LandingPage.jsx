import Header from '../layouts/Header';
import Article from '../layouts/Article';

import Container from 'react-bootstrap/esm/Container';

const LandingPage = () => {
    return (
        <>
            <Header/>
            <div className='position-relative'>
                <img src='/img/banner-landing.jpg' width="100%"/>
                <h1 className='position-absolute top-50 p-1 text-light display-1' 
                style={{backgroundImage: "linear-gradient(45deg, black, transparent)"}}>
                    Planeje, poupe e prospere<br />Com o 
                    <span className='text-primary'> CashWise </span>
                    Você chega lá!
                </h1>
            </div>

            <Container fluid className="bg-secondary pt-5">
                <Article title="Aprenda a investir" dir="right" img="/img/menino-no-puf.svg" alt="Imagem de uma pessoa sentada em um puf com um notebook">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam minima doloribus aliquam tempore vel itaque minus laudantium, beatae ipsam dolore sequi illum, possimus dolor ab.
                </Article>

                <Article title="Controle seus gastos" dir="right" img="/img/menino-no-puf.svg" alt="Imagem de uma pessoa sentada em um puf com um notebook">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam minima doloribus aliquam tempore vel itaque minus laudantium, beatae ipsam dolore sequi illum, possimus dolor ab.
                </Article>

                <Article title="aaa" img="/img/menino-no-puf.svg" alt="Imagem de uma pessoa sentada em um puf com um notebook">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam minima doloribus aliquam tempore vel itaque minus laudantium, beatae ipsam dolore sequi illum, possimus dolor ab.
                </Article>
            </Container>
        </>
    );
}

export default LandingPage