import React, { useState } from 'react'

function Capitao() {
    const[total, setTotal] = useState()
    function recrutarMarujos() {
    let nadar = prompt('Você sabe nadar? sim/não')
    let idade = Number(prompt('Qual a sua idade?'))
    let recomendacao = prompt('Você tem recomendação? sim/não')

    if (nadar === 'sim' && idade > 16) {
        setTotal('Aprovado para o navio!')
    } else if (nadar === 'não' && recomendacao === 'sim' && idade >= 14) {
        setTotal('Aprovado sob recomendação. Monitorar nas primeiras viagens.')
    } else {
        setTotal('Reprovado. Volte quando estiver mais preparado para o mar.')
    }
    }    

  return (
    <div className='capitao'>
        <h3>Capitão</h3>
        <button onClick={recrutarMarujos}>Recrutar Marujos</button>
        {total}
    </div>
  )
}

export default Capitao