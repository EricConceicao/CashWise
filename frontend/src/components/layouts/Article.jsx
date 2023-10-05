// Importações de Componentes
import Container from "react-bootstrap/esm/Container";
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Image from 'react-bootstrap/Image';


const Article = ({ children, title, img, alt, dir }) => {
    return (
        <Container>
            <article className="text-light text-center py-3">
                {dir === 'right' ? 
                <Row className="align-items-center">
                    <Col sm={6}>
                        <p className="fs-3">{children}</p>
                    </Col>

                    <Col sm={6} className="p-0">
                        <h2 className="text-uppercase text-success fw-bolder">{title}</h2>
                        <Image width="75%" src={img} alt={alt} thumbnail />
                    </Col>
                </Row>
                :
                <Row className="align-items-center">
                    <Col sm={6} className="p-0">
                        <Image width="75%" src={img} alt={alt} thumbnail />
                    </Col>

                    <Col sm={6}>
                        <p>{children}</p>
                    </Col>
                </Row>
                }
            </article>
        </Container>
    );
}

export default Article