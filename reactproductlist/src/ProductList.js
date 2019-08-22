import React, { Component, Fragment } from 'react';

const TableHead = () => {  
    return(
      <thead>
        <tr>
          <th>Autores</th>
          <th>Cursos</th>
          <th>Preços</th>
          <th>Remover</th>
        </tr>
      </thead>
    )
}

const TableBody = props => {  
  const linhas = props.product.map((linha, index) => {
    return(
      <tr>
        <td>{linha.nome}</td>
        <td>{linha.curso}</td>
        <td>{linha.preco}</td>
        <td><button>Remover</button></td>
      </tr>
    )
  });

  return(
    <tbody>
      {linhas}
    </tbody>
  )
}

class ProductList extends Component {
  render(){
    const { product } = this.props;
    console.log( product )
    return(
      <Fragment>
        <table>
          <TableHead />
          <TableBody product={product} />
        </table>
      </Fragment>
    ) 
  }  
}

export default ProductList;