// Importações de Componentes
import Container from "react-bootstrap/esm/Container";
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Image from 'react-bootstrap/Image';

/*
Explicando os props:
title: É o título que vai acima da imagem;
img: É o link/endereço da imagem a ser carregada // recomendo colocar na pasta img em public.
Como pasta estática, ela pode ser chamada assim: /img/sua-imagem.extensão;
alt: Texto alternativo para a imagem. Tente fazer um "para cego ler".
dir: Direção em que a imagem irá ficar. right fara à imagem ir à direita do texto.
Do contrário, irá para esquerda se omitido.
*/

const Article = ({ children, title, img, alt, dir }) => {
    return (
        <Container>
            <article className="text-light text-center py-3" id="articles">
                {dir === 'right' ? 
                <Row className="align-items-center">
                    <Col sm={12}>
                        <h2 className="h3 mt-2 text-uppercase text-success fw-bolder">{title}</h2>
                        <p className="mt-2">{children}</p>
                    </Col>

                    <Col sm={12} className="p-0">
                        <Image width="45%" src={img} alt={alt} thumbnail />
                    </Col>
                </Row>
                :
                <Row className="align-items-center">
                
                    <Col sm={12} className="p-0">
                        <Image width="45%" src={img} alt={alt} thumbnail />
                    </Col>

                    <Col sm={12}>
                        <h2 className="h3 mt-2 text-uppercase text-success fw-bolder">{title}</h2>
                        <p className="mt-2">{children}</p>
                    </Col>
                </Row>
                }
            </article>
        </Container>
    );
}

export default Article