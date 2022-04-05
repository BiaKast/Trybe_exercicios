import React, { Component } from "react";

const conteudos = [
    {
      conteudo: 'High Order Functions',
      bloco: 8,
      status: 'Aprendido'
    },
    {
      conteudo: 'Composicao de Componentes',
      bloco: 11,
      status: 'Aprendendo',
    },
    {
      conteudo: 'Composicao de Estados',
      bloco: 12,
      status: 'Aprenderei'
    },
    {
      conteudo: 'Redux',
      bloco: 16,
      status: 'Aprenderei'
    },
  ];

class Content extends Component {
    render() {
        return ( <div className="cards">
            { conteudos.map(({ conteudo,bloco, status }) => <div className="card"><li>O conteudo é: {conteudo}</li><p>Bloco: {bloco}</p><p>Status: {status}</p></div>)
            }
        </div> )
    };
}

export default Content;