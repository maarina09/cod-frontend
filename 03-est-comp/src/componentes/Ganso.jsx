import React, { useState } from 'react'

function Ganso() {
  const[resultado, setResultado] = useState()
    function calcularProvisoes() {
        let marujos = Numbeer(prompt('Quantos marujos?'))
        let comida = Number(prompt('Quantos quilos de comida?'))
        let comidaPorMarujo = comida / marujos

        if (marujos >= 10 || comidaPorMarujo >= 1.5) {
            setResultado('Provisões suficientes. Rumo ao horizonte!')
        }else{
            setResultado('Algo deu errado. Posseidom não quer ninguém no mar hoje.')
        }
    }
    return (
    <div className='ganso'>
        <h3>Ganso</h3>
        <button onClick={calcularProvisoes}>Ganso - provisões</button>
        {resultado}
    </div>
  )
}


export default Ganso