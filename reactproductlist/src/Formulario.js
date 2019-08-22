import React, { Component } from 'react';

class Formulario extends Component {
  constructor(props){
    super(props);

    this.stateInicial = {
      nome: '',
      curso: '',
      preco: ''
    }
    this.state = this.stateInicial;
  }

  escutadorDeInput = event => {
    const { name, value } = event.target;
    this.setState({
      [name] : value
    })
  }

  submitFormulario = () => {
    this.props.escutadorDeSubmit(this.state);
    this.setState(this.stateInicial)
  }

  render(){
    const { nome, curso, preco } = this.state;
    return(
      <form>
          <label htmlFor="nome">Nome</label>
          <input
              id="nome"
              type="text"
              name="nome"
              value={nome}
              onChange={this.escutadorDeInput} />
          <label htmlFor="curso">Curso</label>
          <input
              id="curso"
              type="text"
              name="curso"
              value={curso}
              onChange={this.escutadorDeInput} />
          <label htmlFor="preco">Preço</label>
          <input
              id="preco"
              type="text"
              name="preco"
              value={preco}
              onChange={this.escutadorDeInput} />
          <button type="button" onClick={this.submitFormulario}>Salvar
          </button>
      </form>
    )
  }
}

export default Formulario;