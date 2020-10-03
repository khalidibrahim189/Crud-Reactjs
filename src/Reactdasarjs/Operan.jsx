import React, { Component } from 'react'

export default class Operan extends Component {
    // gantiNama(nama_baru){
    //     this.setState({
    //         nama : nama_baru
    //     })
    // }

    render() {
        return (
            <div>
                <h2>Operan state menjadi Props : {this.props.nama}</h2>
                <button onClick={() => this.props.gantiNama('Naufal Abbad')}>Ganti Nama</button>
            </div>
        )
    }
}
