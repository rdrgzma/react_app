import React, { Component } from 'react';
import Tabela from './../tabela/Tabela';

  //  let produtos = [
  //   {
  //     "codigo": 1,
  //     "descricao": "Feijão",
  //     "preco": 2.00
  //   },
  //   {
  //     "codigo": 2,
  //     "descricao": "Arroz",
  //     "preco": 2.00
  //   },
  //   {
  //     "codigo": 3,
  //     "descricao": "Farinha",
  //     "preco": 2.00
  //   },
  //   {
  //     "codigo": 4,
  //     "descricao": "Açucar",
  //     "preco": 2.00
  //   }
  // ];

let produtos = [];
export default class Cadastro extends Component {
  constructor(props){
    super(props);
    this.state={
      lista: [],
      codigo: " ",
      descricao: "",
      preco: ""
    }
    this.addProduto = this.addProduto.bind(this);
    this.handleChance = this.handleChance.bind(this);
    this.clearForm = this.clearForm.bind(this);
  }

  handleChance(event){
    event.target.name === 'codigo' ? this.setState({ codigo : event.target.value }) : console.log("");
    event.target.name === 'descricao' ? this.setState({ descricao : event.target.value })  : console.log("");
    event.target.name === 'preco' ? this.setState({ preco : event.target.value }) : console.log("");
  }

  addProduto (event){
  event.preventDefault();

    let prod = {
      "codigo": this.state.codigo.trim(),
      "descricao": this.state.descricao.trim(),
      "preco": this.state.preco.trim()
    }
    if(prod.codigo !== "" && prod.descricao !== "" && prod.preco !== "" ){
      produtos.push(prod);
      this.setState({lista: produtos});
    }
    console.log(produtos);

  }
  clearForm(event){
    event.preventDefault();
    this.setState({codigo: "", descricao: "", preco: ""})
  }
  render () {
    return (
      <div>
        <h1>Cadastro</h1>
        <form>
              <div>
                <label htmlFor="codigo" >Código:
                <input id="codigo" type='text' name='codigo' value={this.state.codigo} onChange={this.handleChance}/>
              </label> <br />
                <label htmlFor="descricao" >Descrição:
                <input id="descricao" type='text' name='descricao' value={this.state.descricao} onChange={this.handleChance}/>
                </label> <br />
                <label htmlFor="preco" >Preço:
                <input id="preco" type='text' name='preco' value={this.state.preco} onChange={this.handleChance}/>
                </label> <br />
              </div>
            <button  onClick={this.addProduto}>Salvar</button>
            <button  onClick={this.clearForm}>Limpar</button>
        </form>
        <br />
        <Tabela campos={this.props.campos} produtos={this.state.lista}/>
    </div>

    );
  }
}
