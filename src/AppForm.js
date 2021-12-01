import React, { Component } from 'react';

class App extends Component {

    state = {
        name: 'Maru',
        age: 30
    }

    handleClick = (e) => { this.setState({ name: 'uraM', age: '03' }) }

    handleNameChange = (e) => {
        this.setState({ name: e.target.value })
    }

    handleAgeChange = (e) => {
        this.setState({ age: e.target.value })
    }

    handleForm = (e) => {
        e.preventDefault()
        console.log('se mandó el form');
        
    }

    render() {
        return (
            <div>
                <h1>Soy {this.state.name} y tengo {this.state.age} </h1>
                <button onClick={this.handleClick}>Click me</button>
                <form onSubmit={this.handleForm}>
                    <input type="text" onChange={this.handleNameChange} /> Nombre
                    <input type="text" onChange={this.handleAgeChange} /> Edad
                    <button type="submit">Enviar</button>
                </form>
            </div>
        );
    }
}

export default App;
