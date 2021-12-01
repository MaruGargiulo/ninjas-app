import React, { Component } from 'react'
import Ninjas from './Ninjas'
import AddNinja from './AddNinja'
class App extends Component {

    state = {
        ninjas: [
            { name: "Maru", age: 30, belt: "Orange", id: 1},
            { name: "Lau", age: 22, belt: "Black", id: 2},
            { name: "Fran", age: 30, belt: "Green", id: 3},
        ]
    }

    addNinja = (newNinja) => {
        newNinja.id = this.state.ninjas[this.state.ninjas.length - 1].id + 1
        this.setState({ ninjas: [...this.state.ninjas, newNinja] })
    }

    deleteNinja = (id) => {
        const ninjas = this.state.ninjas.filter(ninja => id !== ninja.id)
        this.setState({ ninjas })
    }

    render() {
        return (
            <div>
                <h1>REACT APP</h1>
                <Ninjas ninjas={this.state.ninjas} deleteNinja={this.deleteNinja}/>
                <AddNinja addNinja={this.addNinja} />
            </div>
        );
    }
}

export default App;
