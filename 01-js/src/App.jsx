import './App.css'

function App() {

function relatorio() {
 let relPF Number(prompt('Digite a quantidade de relatórios para PF:'));
 let relPJ = Number(prompt('Digite a quantidade de relatórios para PJ:'));
 let tempoPF = Number(prompt('Digite o tempo para elaborar os relatórios PF (em horas):'));
 let tempoPJ = Number(prompt('Digite o tempo para elaborar os relatórios PJ (em horas):'));
 let valorPF = Number(prompt('Digite o valor total recebido de PF:'));
 let valorPJ = Number(prompt('Digite o valor total recebido de PJ:'));
 
 let totalRelatorios = relPF + relPJ;
 let totalTempo = tempoPF + tempoPJ;
 let totalValor = valorPF + valorPJ;
 let mediaValorPF = valorPF / relPF;
 let mediaValorPJ = valorPJ / relPJ;
 let mediaTempoPF = tempoPF / relPF;
 let mediaTempoPJ = tempoPJ / relPJ;

 alert('quantidade total de relatórios: ' + totalRelatorios);
 alert('Tempo total trabalhado: ' + totalTempo + ' horas');
 alert('Valor total recebido: R$' + totalValor.toFixed(2));
 alert('Média de valor recebido por relatório PF: R$' + mediaValorPF.toFixed(2));
 alert('Média de valor recebido por relatório PJ: R$' + mediaValorPJ.toFixed(2));
 alert('Média de tempo gasto por relatório PF: ' + mediaTempoPF.toFixed(2) + ' horas');
 alert('Média de tempo gasto por relatório PJ: ' + mediaTempoPJ.toFixed(2) + ' horas');

  }

  function calcularFreela() {
      let horasEstimadas = Number(prompt('Digite a quantidade estimada de horas:'));
      let precoHora = 350;
      let precoDev = 500;
      let precoTotal = precoDev + (horasEstimadas * precoHora);
      let lucro = precoTotal - precoDev;
      alert('Junin deve cobrar R$' + precoTotal.toFixed(2) + ' do cliente, com um lucro de R$' + lucro.toFixed(2));
  }
 
  function calcularCustoPrompt() {
      let numCaracteres = Number(prompt('Digite o número de caracteres do prompt:'));
      let custoToken = Number(prompt('Digite o custo do token em reais:'));
      let tokensGastos = 5 + numCaracteres;
      let custoTotal = tokensGastos * custoToken;
      alert('O prompt vai gastar ' + tokensGastos + ' tokens, custando R$' + custoTotal.toFixed(2));
  }

  function calcularLucroJares() {
    let numCaminhoes = Number(prompt('Digite o número de caminhões:'));
    let jarésPorCaminhao = 50;
    let precoCaminhao = 450;
    let precoJare = 90;

    let totalJarés = numCaminhoes * jarésPorCaminhao;
    let receitaTotal = totalJarés * precoJare;
    let custoTotal = numCaminhoes * precoCaminhao;
    let lucro = receitaTotal - custoTotal;
    alert('O lucro da temporada de vendas é: R$' + lucro.toFixed(2))
  }

  function calcularChurrasco(){
    let qtdPessoas = Number(prompt('Quantas pessoas vão no churrasco?'))
    let qtdCarne = qtdPessoas * 0.5
    let qtdCerveja = qtdPessoas * 1
    let qtdRefrigerante = qtdPessoas * 0.2
    alert('Quantidade de carne: ' + qtdCarne.toFixed(2) + ' kg')
    alert('Quantidade de cerveja: ' + qtdCerveja.toFixed(2) + ' litros')
    alert('Quantidade de refrigerante: ' + qtdRefrigerante.toFixed(2) + ' litros')
  }

  function precoRacao(){
  let pesoGramas = Number(prompt('Qual o peso em gramas da ração?'))
  let pesoQuilos = pesoGramas / 1000
  let preco = pesoQuilos * 10
  alert('O preço da ração é: R$' + preco.toFixed(2))
  }
   
  function romeroBrick(){
  let precoCompra = Number(prompt('Qual o preço de compra da obra?'))
  let precoVenda = precoCompra * 3
  alert('O preço de venda da obra é: R$' + precoVenda.toFixed(2))
  }
  
  function fimDeSalario(){
    let salario = Number(prompt('Qual o valor do salário?'))
    let aluguel = Number(prompt('Qual o valor do aluguel?'))
    let luz = Number(prompt('Qual o valor da luz?'))
    let agua = Number(prompt('Qual o valor da água?'))
    let internet = Number(prompt('Qual o valor da internet?'))
    let telefone = Number(prompt('Qual o valor do telefone?'))
    let gasolina = Number(prompt('Qual o valor da gasolina?'))
    let streaming = Number(prompt('Qual o valor do streaming?'))
    let outros = Number(prompt('Qual o valor de outros gastos?'))

    let totalContas = aluguel + luz + agua + internet + telefone + gasolina + streaming + outros
    let saldoFinal = salario - totalContas

    alert('O saldo final do Mano Juca é: R$' + saldoFinal.toFixed(2))
  }

  function planejarSuprimentos(){
  let shows = Number(prompt('Quantos shows de ilusionismo você tem marcado?'))
  let precoBomba = Number(prompt('Qual o preço unitário da bomba de fumaça?'))
  let bombasNecessarias = shows * 7
  let custoTotal = bombasNecessarias * precoBomba
  alert('Você precisa comprar ' + bombasNecessarias + ' bombas de fumaça.')
  alert('O custo total será de: R$' + custoTotal.toFixed(2))
  }

  function lucroMensal(){
    let gastos  = Number(prompt('Quanto foi gasto em suprimentos e mercadorias para operar seu navio'))
    let ingresso = Number(prompt('Quanto foi recebido em vendasQuanto foi o faturamento em venda de ingressos?'))
    let itens = Number(prompt('Quando foi o faturamento em venda de ítens?'))
    let lucroEmReais = (ingresso + itens) - gastos
    let lucroPercentual = (lucroEmReais / gastos) * 100
    alert('O lucro do mês em reais foi: ' + lucroEmReais.toFixed(2))
    alert('O lucro do mês em percentual foi: ' + lucroPercentual.toFixed(2) + '%')

  }

  function calcularLucros(){
    let valorBruto = Number(prompt('Qual o valor bruto?'))
    let premiacoes = Number(prompt('Qual o valor das premiações?'))
    let presentes = Number(prompt('Qual o valor dos presentes?'))
    let comissao = Number(prompt('Qual o valor da comissão?'))
    let lucro = valorBruto - premiacoes - presentes - comissao 
    alert('O lucro é: ' + lucro.toFixed(2))
  }

  function calcularfrete(){
    let peso = Number(prompt('Qual o peso da encomenda?'))
    let distancia = Number(prompt('Qual a distância da entrega?'))
    let volume = Number(prompt('Qual o volume da encomenda?'))
    let frete
    frete=15+(2*peso)+(0.05*distancia)+(10*volume)
    alert('O valor do frete é: ' + frete.toFixed(2))
  }

  function chancesDevs(){
    let olhadasCelular = Number(prompt('Quantas vezes olhou o celular?'))
    let chances = (0.1/(1+500*olhadasCelular))*100
    alert('Suas chances de ser aprovado são: ' + chances.toFixed(5) + '%')
    let chances2 = 1 / chances
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
      <button onClick={relatorio}>Kowalski</button>
      <button onClick={calcularFreela}>Freela</button>
      <button onClick={calcularCustoPrompt}>Prompt</button>
      <button onClick={calcularLucroJares}>Jacarés</button>
      <button onClick={calcularChurrasco}>Churracaria</button>
      <button onClick={precoRacao}>Ração</button>
      <button onClick={romeroBrick}>Bricks</button>
      <button onClick={fimDeSalario}>Fim de Salário</button>
      <button onClick={planejarSuprimentos}>Planejamento</button>
      <button onClick={lucroMensal}>Ganso</button>
      <button onClick={calcularLucros}>Lucros</button>
      <button onClick={calcularfrete}>Transporte</button>
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
