import './App.css'


function App() {
  
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
      <button onClick={testar}>Testar</button>
      <button onClick={calcularMedia}>Média</button>
    </div>
  )
}

export default App
