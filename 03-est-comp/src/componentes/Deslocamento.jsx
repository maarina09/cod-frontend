import React, { useState } from 'react'

function Deslocamento() {
    const[resultado, setResultado] = useState()

    function valeOuNao() {
        let gripe = prompt('Você está gripado? sim/não')
        let distancia = Number(prompt('Quanto tempo até lá?'))

        if (gripe === 'não' && distancia < 45) {
            setResultado('Vale a pena fazer o deslocamento!')
        } else {
            setResultado('Melhor ficar em casa e descansar.')
        }
    }

  return (
    <div className='deslocamento'>
        <h3>Deslocamento</h3>
        <button onClick={valeOuNao}>Deslocamento</button>
        {resultado}
    </div>
  )
}

export default Deslocamento