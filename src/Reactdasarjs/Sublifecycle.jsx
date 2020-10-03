import React, { Component } from 'react'

export default class Sublifecycle extends Component {
    componentWillMount(){
        this.props.ubahNama('Khalid Ibrahim')
    }

    render() {
        return (
            <div>
                <h2>Component Sub Lifecylee</h2>
            </div>
        )
    }
}
