import React, { Component } from 'react'
import Operan from './Operan';

export default class StateProps extends Component {
    constructor(props){
        super(props);
        this.state = {
            nama : 'Khalid ibrahim'
        }
    }


    gantiNama(nama_baru){
        this.setState({
            nama : nama_baru
        })
    }

    render() {
        return (
            <div>
                <h2>{this.state.nama}</h2>

                <button onClick={() => this.setState({ nama: 'Naufal Abbad' })}>Ganti Nama</button>
                <Operan nama={this.state.nama} gantiNama={this.gantiNama}/>
            </div>
        )
    }
}
