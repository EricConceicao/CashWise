import Header from '../layouts/Header';
import Footer from '../layouts/Footer';
import Content from '../layouts/Content';

const Sobre = () => {
    return (
        <>
            <Header />
            <div className="main">
                <Content>
                    <div class="jumbotron text-center">
                        <h1>Sobre o CashWise</h1>
                    </div>
                    
                </Content>
            </div>

            <Footer />

        </>
    );
}

export default Sobre;