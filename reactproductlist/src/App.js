import React, { Component } from 'react';
//import './App.css';
import ProductList from './ProductList';

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

  render(){
    return (
      <div className="App">
        <ProductList product = {this.state.product} removeProduto = {this.removeProduto} />
      </div>
    );
  }
}

export default App;
