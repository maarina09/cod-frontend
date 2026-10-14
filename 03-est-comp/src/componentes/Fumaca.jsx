import React, { useState } from 'react'

function Fumaca() {
    const[saida, setSaida] = useState()

    function verificarFumaca() {
        let crianca = Number(prompt('Quantas crianças estão presentes?'))
        let vento = Number(prompt('Qual a velocidade do vento?'))

        if(crianca === 0 && vento >= 0.5) {
            setSaida('Fumaça liberada. Que comecem os mistérios!')
        } else {
            setSaida('Fumaça bloqueada. Aguardar condições ideais.')
        }
    }

  return (
     <div className='fumaca'>
        <h3>Fumaça</h3>
        <button onClick={verificarFumaca}>Verificar fumaça</button>
        {saida}
    </div>
  )
}

export default Fumaca