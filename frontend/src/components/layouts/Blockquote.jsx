import './Blockquote.css';
import { Container, Row, Col } from 'react-bootstrap';

function Blockquote() {
  return (
    <div className="blockquote-wrapper">
      <Container className="blockquote-container">
        <Row>
          <Col lg={8} md={10} sm={12} className="quote-text w-100">
            <p>
              Como já falamos em outras partes desse site, a educação financeira é fundamental para garantir a saúde financeira e a estabilidade econômica.
              A renda ativa é o dinheiro que você ganha por meio do seu trabalho ou negócio próprio. Já a renda passiva é o dinheiro que você ganha sem precisar
              trabalhar ativamente, como por exemplo, aluguel de imóveis, investimentos em fundos imobiliários, direitos autorais, royalties de música, entre outros.
            </p>

            <p>
              Para garantir uma vida financeira saudável, é importante ter uma combinação de renda ativa e passiva. A renda ativa é importante para garantir o sustento
              diário e a renda passiva pode ser utilizada para complementar a renda ativa e garantir um futuro mais tranquilo.
            </p>

            <p>
              Nesse módulo queremos dar ênfase em uma parte muito importante da renda passiva que é a Previdência Social. A Previdência Social é um seguro público que
              garante renda aos seus contribuintes, quando esses por algum motivo de saúde ou acidentes de trabalho ficam impossibilitados de ter uma renda ativamente e
              também quando chega a hora de sua aposentadoria.
            </p>

            <p>
              Todos os trabalhadores, sejam da iniciativa privada, seja do serviço público ou mesmo empresários, são automaticamente filiados a um Regime Previdenciário,
              seja o Regime Geral (INSS), seja a um Regime Próprio (Servidor Público Estatutário), que assim podem contribuir com o regime e garantir uma renda passiva,
              no caso de imprevistos como doenças, acidentes e outros eventos inesperados, além de garantir uma renda futura no caso da aposentadoria.
            </p>

            <p>
              A partir da Emenda Constitucional 103/2019 (
              <a href="https://www.planalto.gov.br/ccivil_03/Constituicao/Emendas/Emc/emc103.htm" rel='noreferrer' target="_blank">
                Emenda Constitucional 103/2019
              </a>
              ), que entrou em vigor em 13 de novembro de 2019, <strong>o cálculo dos benefícios de Auxílio Doença e aposentadoria para</strong> para os trabalhadores que ingressaram no sistema previdenciário após a vigência da reforma <strong>mudou</strong> em relação ao modelo anterior.
            </p>

            <p>
              Agora, o trabalhador precisará atingir a <strong>idade mínima</strong> de 62 anos, se mulher, e 65 anos, se homem, além de ter no mínimo 15 anos de <strong>contribuição</strong> para a Previdência Social, se mulher e 20 anos no caso de homem. Para esses casos, o cálculo do benefício previdenciário passou a ser feito com base na média aritmética simples de todos os salários de contribuição do trabalhador desde julho de 1994, corrigidos mês a mês pelo fator de atualização fornecido pelo governo, com base no inpc acumulado. O valor do benefício, então, será equivalente a 60% da média salarial, acrescido de 2% para cada ano de contribuição que exceder o tempo mínimo de 15 ou 20 anos, respectivamente, se mulher ou homem, para o caso de aposentadoria e 91% da média salarial, para o caso de Auxílio Doença.
            </p>

            <p>
              <i>Na seção abaixo, disponibilizamos um recurso que ajudará o beneficiário da previdência a fazer uma simulação de cálculo do seu benefício, devendo para tanto, preencher os dados necessários (salários de contribuição, data de nascimento e sexo) e clicar em (Enviar dados e Simular).</i>
            </p>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Blockquote;
