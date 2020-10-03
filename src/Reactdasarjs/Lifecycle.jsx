import React, { Component } from 'react'
import Sublifecycle from './Sublifecycle'

export default class Lifecycle extends Component {
    constructor(props){
        super(props)

        this.state = {
            nama : 'Yuli Anggraini',
            data : {},
            tampilHalamanSub: false
        }
    }


    componentDidMount(){
        fetch('https://jsonplaceholder.typicode.com/todos/1')
        .then(response => response.json())
        .then(json => {
            this.setState({
                data: json
            })
        })
    }

    ubahNama(value){
        this.setState({
            nama: value
        })
    }

    render() {
        console.log("Data : ", this.state.data)
        return (
            <div>
                <h2>{this.state.nama} </h2>
                {this.state.tampilHalamanSub && <Sublifecycle ubahNama={(value) => this.ubahNama(value)}/>}
                <button onClick={() => this.setState({tampilHalamanSub : !this.state.tampilHalamanSub})}>Tampilkan Nama</button>
            </div>
        )
    }
}
