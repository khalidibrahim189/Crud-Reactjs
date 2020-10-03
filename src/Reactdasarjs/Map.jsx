import React from 'react'


const nama1 = [
    {
        Nama : 'Khalid Ibrahim',
        jurusan : 'Frontend developer'
    },
    {
        Nama : 'Naufal Abbad',
        jurusan : 'Frontend developer'
    },
    {
        Nama : 'Nasrul Fuad',
        jurusan : 'Backend developer'
    },
    {
        Nama : 'Farhan Yudhi Fattah',
        jurusan : 'Wordpress developer'
    }
]

export const Map = () => {
    return (
        <div>
            <h2>Nama Team Web SolarKita</h2>

            <ul>
                {nama1.map((nama) => (
                    <li> {nama.Nama} - jurusan {nama.jurusan}</li>
                ))}
            </ul>
        </div>
    )
}

export default Map
