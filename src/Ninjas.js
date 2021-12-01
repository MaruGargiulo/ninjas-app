import React from 'react'
import Ninja from './Ninja'

const Ninjas = ({ ninjas, deleteNinja }) => {

    return (
        <div>
            {ninjas.map(ninja => {
                return (
                    <Ninja
                        name={ninja.name}
                        age={ninja.age}
                        belt={ninja.belt}
                        key={ninja.id}
                        deleteNinja={ () => deleteNinja(ninja.id) }
                    />
                )
            })}
        </div>
    )

}

export default Ninjas