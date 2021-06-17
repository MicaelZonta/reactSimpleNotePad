import React, { Component } from 'react'
import "./estilo.css"

export default class FormularioCadastro extends Component {

    constructor(props) {
        super(props);
        this.titulo = "";
        this.texto = "";
    }

    _handleMudancaTitulo(evento) {
        this.titulo = evento.target.value;
        console.log(this.titulo);
    }

    _handleMudancaTexto(evento) {
        this.texto = evento.target.value;
        console.log(this.texto);
    }

    _criarNota(evento) {
        evento.preventDefault();
        evento.stopPropagation();
        console.log("uma nova nota criada");
        this.props.criarNota(this.titulo, this.texto);
    }

    render() {
        return (
            <form className="form-cadastro" onSubmit={this._criarNota.bind(this)}>
                <input type="text" placeholder="Titulo" className="form-cadastro_input" onChange={this._handleMudancaTitulo.bind(this)} />
                <textarea placeholder="escreva sua nota" rows={15} className="form-cadastro_input" onChange={this._handleMudancaTexto.bind(this)} />
                <button className="form-cadastro_input form-cadastro_submit">Criar Nota</button>
            </form>
        );
    }
}