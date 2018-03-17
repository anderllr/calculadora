/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component }  from 'react';
import {
  View
} from 'react-native';

//Ele está procurando por index.js dentro da pasta components, como é o index não precisa colocar o nome
import { Topo, Resultado, Painel } from './src/components';

export default class App extends Component{
  constructor(props) {
    super(props);

    this.state = { num1: '', num2: '', operacao: 'soma'};
    //Ajusta para que o contexto sempre seja a painel...
    this.calcular = this.calcular.bind(this);
    this.atualizaValor = this.atualizaValor.bind(this);
    this.atualizaOperacao = this.atualizaOperacao.bind(this);
  }

  calcular() {
    let resultado = 0;

    switch (this.state.operacao) {
      case 'soma':
        resultado = parseFloat(this.state.num1) + parseFloat(this.state.num2);
        break;
      case 'subtracao':
        resultado = parseFloat(this.state.num1) - parseFloat(this.state.num2);
        break;
      default:
        resultado = 0;
    }
    this.setState({ resultado: resultado.toString() });
  }

  atualizaOperacao(operacao) {
    this.setState({ operacao })
  }

  atualizaValor(nomeCampo, numero) {
    //Dos valores que vem da última instância agora são atualizados nas variáveis de state
    //Como os valores tem que ser passados concatenados, monta-se um objeto JSON
    const obj = {};
    obj[nomeCampo] = numero;

    this.setState(obj);
  }

  render() {
    return (
      <View>
        <Topo />
        <Resultado resultado={this.state.resultado} />
        <Painel
          num1={this.state.num1}
          num2={this.state.num2}
          operacao={this.state.operacao}
          calcular={this.calcular}
          atualizaOperacao={this.atualizaOperacao}
          atualizaValor={this.atualizaValor}
        />
      </View>
    );
  }
};
