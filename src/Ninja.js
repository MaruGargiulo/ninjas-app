import React from 'react'

const Ninja = ({ name, age, belt, deleteNinja }) => {

    return (
        <div>
            <p>Nombre: {name}</p>
            <p>Edad: {age}</p>
            <p>Cinturón: {belt}</p>
            <button onClick={deleteNinja}>Delete</button>
        </div>
    )

}

export default Ninja