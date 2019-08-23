import React, { Component } from 'react';
import FormValidator from './FormValidator';

class Formulario extends Component {
  constructor(props){
    super(props);

    this.validador = new FormValidator({
      campo: 'nome',
      metodo: 'isEmpty'
    });

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
    if(this.validador.valida(this.state)){
      this.props.escutadorDeSubmit(this.state);
      this.setState(this.stateInicial);
    } else {
      console.log('submit bloqueado');
    }
  }

  render(){
    const { nome, curso, preco } = this.state;
    return(
      <form>
          <div className="row">
          <div className="input-field col s12">
          <h5>Novo cadastro</h5>
          </div>
          
          <div className="input-field col s4">
          
          <label className="input-field" htmlFor="nome">Nome</label>
          <input
              className="validate"
              id="nome"
              type="text"
              name="nome"
              value={nome}
              onChange={this.escutadorDeInput} />
          </div>

          <div className="input-field col s4">
          <label className="input-field" htmlFor="curso">Curso</label>
          <input
              className="validate"
              id="curso"
              type="text"
              name="curso"
              value={curso}
              onChange={this.escutadorDeInput} />
          </div>

          <div className="input-field col s4">
          <label className="input-field" htmlFor="preco">Preço</label>
          <input
              className="validate"
              id="preco"
              type="text"
              name="preco"
              value={preco}
              onChange={this.escutadorDeInput} />
          </div>
          
          <div className="input-field col s12">
          <button className="waves-effect waves-light btn indigo lighten-1" type="button" onClick={this.submitFormulario}>Salvar
          </button>
          </div>
          
          </div>
      </form>
    )
  }
}

export default Formulario;