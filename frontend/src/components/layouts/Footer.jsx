/*
O prop anchor recebe o 'id' do elemento que você quer dar como destino
para o botão "Voltar ao topo". Tentem usar 'topo' como id.
*/

const Footer = ({ anchor }) => {
    return (
        <footer className='footer bg-dark p-4 text-light'>
            <a className="text-info text-decorarion-underline" href={`#${anchor}`}>Voltar ao Topo</a>
            <p className="m-0 fw-light">
                &copy; 2023 Copyright <a className="text-primary fw-bold" href="/sobre" title="Sobre nós.">CashWise</a>. Todos os direitos reservados.
            </p>
        </footer>
    );
}

export default Footer;