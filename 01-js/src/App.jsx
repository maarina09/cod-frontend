import './App.css'


function App() {

  function chancesDevs(){
    let olhadasCelular = Number(prompt('Quantas vezes olhou o celular?'))
    let chances = (0.1/(1+500*olhadasCelular))*100
    alert('Suas chances de ser aprovado são: ' + chances.toFixed(5) + '%')
    let chances2 = Math.round(1/chances.toFixed(6))
    alert('Suas chances são de uma a ' + chances2 + ' de ser aprovado')

  }

  function pesoVeiculo(){
    let pesoBruto = Number(prompt('Peso informado na balança:'))
    let pesoTara = Number(prompt('Peso tara:'))
    let pesoCarga = pesoBruto - pesoTara
    alert('O peso da carga é: ' + pesoCarga.toFixed(2) + ' kg')
  }

  function salarioDiario(){
    let salario = Number(prompt('Salário do mês:'))
    let dias = Number(prompt('Dias trabalhados:'))
    let salarioDiario = salario / dias
    alert('O salário diário é: ' + salarioDiario.toFixed(2))
  }

  function calcularCustos(){
    let custoMensal = Number(prompt('Custo mensal:'))
    let doacoes = Number(prompt('Doações e Dízimos:'))
    let custoTotal = custoMensal - doacoes
    alert('Falta ' + custoTotal + ' reais para cobrir os custos mensais')
  }
  function calcularLaranjas(){
    let laranjasIniciais = Number(prompt('Quantidade inicial'))
    let laranjasVendidas = Number(prompt('Quantidade vendida'))
    let qtdLaranjas = laranjasIniciais - laranjasVendidas
    alert("Quantidade de laranjas restantes: " + qtdLaranjas)
  }

  function totalDevs(){
    let devsclt = Number(prompt('Quantidade de devs CLT:'))
    let devsPJ = Number(prompt('Quantidade de devs PJ:'))
    let devsEstagio = Number(prompt('Quantidade de devs Estágio:'))
    let totalDevs = devsclt + devsPJ + devsEstagio
    alert('O total de devs é: ' + totalDevs)
  }

  function trocarSapatos(){
    let precoTotal
    let qtdPares = Number(prompt('Quantidade de pares:'))
    let precoPar = Number(prompt('Preço do par:'))
    precoTotal = qtdPares * precoPar
    alert('O preço total é: ' + precoTotal.toFixed(2))
  }

  function calcularPontos(){
    let vitorias = Number(prompt('Número vitórias: '))
    let empates = Number(prompt('Número empates: '))

    let pontos = vitorias * 3 + empates
    alert('O time teu tem ' + pontos + ' pontos')
  }

  function testar(){
    let nome = prompt('Qual seu nome?')
    let bocaDoSapo = nome
    alert(nome + ', seu nome tá na bocaDoSapo 🐸💀')
  }

  function calcularMedia(){
    let nota1 = Number(prompt('Manda a primeira nota: '))
    let nota2 = Number(prompt('Manda a segunda nota: '))

    let media = (nota1 + nota2) /2
    alert('Sua média: ' + media)
  }

  return (
    <div className='cont-app'>
      <h1>Javascript no React</h1>

      <h2>Exercicios supimpas</h2>


      <hr />
      <button onClick={chancesDevs}>Chances</button>
      <button onClick={pesoVeiculo}>Peso veículo</button>
      <button onClick={salarioDiario}>Salário</button>
      <button onClick={calcularCustos}>Custos</button>
      <button onClick={calcularLaranjas}>Laranjas</button>
      <button onClick={totalDevs}>Guilherme portões</button>
      <button onClick={trocarSapatos}>Trocas Pé Pequeno</button>
      <button onClick={calcularPontos}>Campeonato</button>
      <button onClick={testar}>Testar</button>
      <button onClick={calcularMedia}>Média</button>
    </div>
  )
}

export default App
