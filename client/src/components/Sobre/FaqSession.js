import React, { Component } from 'react'
import { Accordion, Icon } from 'semantic-ui-react'

export default class FaqSection extends Component {
  state = { activeIndex: 0 }

  handleClick = (e, titleProps) => {
    const { index } = titleProps
    const { activeIndex } = this.state
    const newIndex = activeIndex === index ? -1 : index

    this.setState({ activeIndex: newIndex })
  }

  render() {
    const { activeIndex } = this.state

    return (
      <Accordion styled>
        <Accordion.Title
          active={activeIndex === 0}
          index={0}
          onClick={this.handleClick}
        >
          <Icon name='dropdown' />
          O que StudyCoin ?
        </Accordion.Title>
        <Accordion.Content active={activeIndex === 0}>
          <p>
            EstudyCoin é um token ERC20, que  estamos oferecendo
             como um investimento para arrecadar fundos para estudo e trading. 
          </p>
        </Accordion.Content>

        <Accordion.Title
          active={activeIndex === 1}
          index={1}
          onClick={this.handleClick}
        >
          <Icon name='dropdown' />
          Como posso comprar ?
        </Accordion.Title>
        <Accordion.Content active={activeIndex === 1}>
          <p>
            No site temos a sessão de compra é só enviar o valor de ETH que você deseja investir
            após o envio os tokens serão enviados para sua carteira imediatamente.
          </p>
        </Accordion.Content>

        

        <Accordion.Title
          active={activeIndex === 2}
          index={2}
          onClick={this.handleClick}
        >
          <Icon name='dropdown' />
          O que eu ganharei investindo nesse projeto ?
        </Accordion.Title>
        <Accordion.Content active={activeIndex === 2}>
          <p>
            Vamos recomprar os tokens com um valor 20% acima do preço de compra, então no caso os lucros serão 
            de 20% em ETH que é a moeda base que vamos trabalhar.
          </p>
          <p>
            
          </p>
        </Accordion.Content>
        <Accordion.Title
          active={activeIndex === 3}
          index={3}
          onClick={this.handleClick}
        >
          <Icon name='dropdown' />
          Como posso vender meus tokens de volta ?
        </Accordion.Title>
        <Accordion.Content active={activeIndex === 3}>
          <p>
            Dentro do nosso site é so entrar na sessão de venda e no formulário colocar a quantidade de tokens 
            que deseja enviar, seu endereço e quantidade de tokens enviados já vão aparecer na lista.  
          </p>
          <p>
            Quando os tokens forem reenbolsados o link da transação sera colocado na lista, para que fique de forma tranparente 
            o reembolso com seu ganhos, O prazo para recompra será de até 90 dias após a venda.
          </p>
        </Accordion.Content>
        <Accordion.Title
          active={activeIndex === 4}
          index={4}
          onClick={this.handleClick}
        >
          <Icon name='dropdown' />
          Posso vender meus tokens para outra pessoa ?
        </Accordion.Title>
        <Accordion.Content active={activeIndex === 4}>
          <p>
            Sim os tokens são tranferiveis para qualquer carteira, você pode compra-los e vender por qualquer preço e deois a pessoa 
            pode vende-los para nós novamente. 
          </p>
          <p>
            
          </p>
        </Accordion.Content>
        <Accordion.Title
          active={activeIndex === 5}
          index={5}
          onClick={this.handleClick}
        >
          <Icon name='dropdown' />
          Quando receberei meu pagamento pela venda ?
        </Accordion.Title>
        <Accordion.Content active={activeIndex === 5}>
          <p>
            Pretendemos encerrar o ciclo para a recompra o quanto antes, para nossa empresa ganhar a credibilidade necessaria
            para trabalharmos em projetos maiores mas estamos pedindo um prazo de no maximo 90 dias.
          </p>
          <p>
            
          </p>
        </Accordion.Content>
        <Accordion.Title
          active={activeIndex === 6}
          index={6}
          onClick={this.handleClick}
        >
          <Icon name='dropdown' />
          O que é e como compro ETH ?
        </Accordion.Title>
        <Accordion.Content active={activeIndex === 6}>
          <p>
            Ethereum é uma criptomoeda que será a base do nosso projeto, e nossos tokens só podem 
            ser comprados com ela aqui vai alguns links de como comprar os ETH e criar sua carteira que ira receber os tokens.
          </p>
          <p>
            Baixe a carteira:
            <a href="https://www.youtube.com/watch?v=cSBp71amDZo" target="_blank"> Veja aqui</a>
          </p>
          <p>
            Como comprar Ethereum:
            <a href="https://www.youtube.com/watch?v=N4WtlP6AQ38" target="_blank"> Veja aqui</a>
          </p>
          <p>
            Aqui como você pode ver seus tokens na carteira:
            <a href="https://www.youtube.com/watch?v=V9hsVT_BUFQ" target="_blank"> Veja aqui,  </a>
             mas estaremos disponibilizando o endereço do contrato para que você não precise ir no Etherscan
          </p>
        </Accordion.Content>
      </Accordion>
    )
  }
}

