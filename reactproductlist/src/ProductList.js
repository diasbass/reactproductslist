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
      <tr key={index}>
        <td>{linha.nome}</td>
        <td>{linha.curso}</td>
        <td>{linha.preco}</td>
        <td><button onClick = { () => { props.removeProduto(index) } }>Remover</button></td>
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
    const { product, removeProduto } = this.props;
    console.log( product )
    return(
      <Fragment>
        <table>
          <TableHead />
          <TableBody product={product} removeProduto={removeProduto} />
        </table>
      </Fragment>
    ) 
  }  
}

export default ProductList;