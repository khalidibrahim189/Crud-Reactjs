import React from 'react';
//Const
// const harga = 1800;
// harga = 300;

//Var

    // var harga = 20000;
    // if(true){
    //     var harga = 4000;
    // }

//Let

let harga = 18000;
if(true){
    let harga = 4000;
}

export const Variabel = () => {
    return (
        <div>
            <h2>Harga Barang : {harga}</h2>
        </div>
    )
}


export default Variabel