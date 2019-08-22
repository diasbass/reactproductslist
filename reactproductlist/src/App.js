import React from 'react';
//import './App.css';
import ProductList from './ProductList';

function App() {
  const product = [
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
  ]
  return (
    <div className="App">
      <ProductList product = {product} />
    </div>
  );
}

export default App;
