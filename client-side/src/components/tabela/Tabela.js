import React, { Component } from 'react';

export default class Tabela extends Component {
  render () {
    return (
      <div>
        <h1>Lista de Produtos</h1>
          <table>
          <thead>
            <tr>
            {this.props.campos.map((campo,index)=>{
              return (
                <th key={index}>{campo}</th>
              )})}
            </tr>
          </thead>
          <tbody>
              {this.props.produtos.map((item,index)=>{
                return(
                  <tr key={index}>
                    <td>{item.codigo}</td>
                    <td>{item.descricao}</td>
                    <td>{item.preco}</td>
                  </tr>
                )
              })}
            </tbody>
          </table>
      </div>

    );
  }
}
