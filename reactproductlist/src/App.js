import React, { Component, Fragment } from 'react';
import 'materialize-css/dist/css/materialize.min.css';

import Header from './Header';
import ProductList from './ProductList';
import Formulario from './Formulario';

class App extends Component {
  state = {
    product : [
      {
        nome: 'Rodrigo',
        curso: 'React',
        preco: 'R$ 1000'
      },
      {
        nome: 'Daniel',
        curso: 'Java',
        preco: 'R$ 99'
      },
      {
        nome: 'Marcos',
        curso: 'Design',
        preco: 'R$ 150'
      },
      {
        nome: 'Bruno',
        curso: 'DevOps',
        preco: 'R$ 100'
      }
    ],
  };

  removeProduto = index => {
    const { product } = this.state;
    this.setState(
      {
        product: product.filter((produto, posAtual) => {
          //console.log(index, posAtual);
          return posAtual !== index;
        })
      }
    )
  }

  escutadorDeSubmit = product => {    
    this.setState({
      product: [...this.state.product, product]
    })
  }

  render(){
    return (
      <Fragment>
        <Header />
        <div className="container">
        <ProductList product = {this.state.product} removeProduto = {this.removeProduto} />
        <Formulario escutadorDeSubmit={this.escutadorDeSubmit} />
        </div>
      </Fragment>
    );
  }
}

export default App;
