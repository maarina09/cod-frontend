import { useState } from 'react'
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import './App.css'

function App() {
  const [saida, setSaida] = useState(0)

  function CalcularMedia(){
    let nota1 = Number(prompt("Nota 1:"))
    let nota2 = Number(prompt("Nota 2:"))
    let media = (nota1 + nota2) / 2
    setSaida(media)
  }

  function  rolarD6(){
    let n = Math.ceil(Math.random()*6)
    setSaida(n)
  }

  function  rolarD8(){
    let n = Math.ceil(Math.random()*8)
    setSaida(n)
  }

  function  rolarD12(){
    let n = Math.ceil(Math.random()*12)
    setSaida(n)
  }

  function  rolarD20(){
    let n = Math.ceil(Math.random()*20)
    setSaida(n)
  }

  function  rolarD100(){
    let n = Math.ceil(Math.random()*100)
    setSaida(n)
  }

  function Senha(){
    let senha = Number(prompt("Digite sua senha: "))
      if(senha == '1234'){
        setSaida("Acesso Permitido")
      }else{
        setSaida("Acesso Negado")
      }
        
  }

  function lerMaior(){
    let n1 = Number(prompt("Digite o número A: "))
    let n2 = Number(prompt("Digite o número B: "))
    if( n1 > n2){
      setSaida("A é o maior número")
    }else{
      setSaida("B é o maior número")
    }
  }

  function SpCarros() {
  let placa = Number(prompt("Digite o último número da placa:"));

  switch (placa) {
    case 0:
    case 1:
      setSaida("Não rode segunda-feira");
      break;

    case 2:
    case 3:
      setSaida("Não rode terça-feira");
      break;

    case 4:
    case 5:
      setSaida("Não rode quarta-feira");
      break;

    case 6:
    case 7:
      setSaida("Não rode quinta-feira");
      break;

    case 8:
    case 9:
      setSaida("Não rode sexta-feira");
      break;

  }
  }

  function palestras(){
    let escolha = Number(prompt("Digite o número da palestra: "));

    switch(escolha){
      case 1: 
      setSaida(" Animações com Scratch ,laboratório 305 , 19h");
      break;
      
      case 2: 
      setSaida(" Scratch para gamers, laboratório 512 , 20h");
      break;

      case 3: 
      setSaida(" JavaScript para leigos, laboratório 101 , 19h");
      break;

      case 4: 
      setSaida(" Tópicos vavançados de JavaScript ,laboratório 305 , 20h");
      break;

      case 5: 
      setSaida(" Vida e carreira, auditório , 21h");
      break;

    }
  }

  function calcularPts(){
    let pontos = Number(prompt("Digite a quantidade de pts: "));
    if(pontos <= 10){
       setSaida("Deu ruim"); 

    } else if(pontos > 10, pontos < 100){
      setSaida("Tá... Vai dar certo! Errado já está dando");
      
    } else if (pontos > 100, pontos < 200){
      setSaida("Supimpa!");
     
    }else{
      setSaida("MITOU!");
     
    }
  }

  function calcularConta(){
    let dias = Number(prompt("Quantos dia vai passar? :"));
    let diaria;
    if(diaria <= 5 ){
      diaria = 100;
    }else if (diaria <= 10){
      diaria = 90;
    }else{
      diaria = 80;
    }

    let subtotal = dias * diaria;
    let totaldescontos  = subtotal * 25/100
    let multaDanos = 150;
    let total = subtotal - totaldescontos + multaDanos;
    setSaida(total);

  }

  function votar(){
    let idade = Number(prompt("Digite sua idade: "));
    if(idade < 16){
      setSaida("Não podem votar!");
    }else if(idade >= 16, idade <= 17 ){
      setSaida("Voto facultativo!")
    }else if(idade >= 18, idade <= 65){
      setSaida("Voto obrigatório!");
    }else{
      setSaida("Voto facultativo");
    }

  }

  function pesoIdeal(){
    let altura = Number(prompt("Qual sua altura? :"));
    let genero = Number(prompt("Seu gênero: 1 fem, 2 masc"));
    let peso

    switch(genero){
      case 1:
        peso = (62.1 * altura) - 44.7
        setSaida(peso)

       case 2:
        peso = (72.7 * altura) - 58
        setSaida(peso)
    }
  }

  function valormacas(){
    let qntd = Number(prompt("Quantas maçãs você comprou? :"));
    let maca;
    
    if(qntd >= 12){
      maca = 0.25;
    }else{
      maca = 0.30;
    }

    let valor = qntd * maca;
    setSaida(valor);

  }

  return (
   <div className="app">
    <h1>Estados!</h1>

  <div className='botoes-container'>
    <button onClick={CalcularMedia}>Média</button>
    <button onClick={rolarD6}>D6</button>
    <button onClick={rolarD8}>D8</button>
    <button onClick={rolarD12}>D12</button>
    <button onClick={rolarD20}>D20</button>
    <button onClick={rolarD100}>D100</button>
    <button onClick={Senha}>Senha</button>
    <button onClick={lerMaior}>Maior número</button>
    <button onClick={SpCarros}>Carros</button>
    <button onClick={palestras}>Palestras</button>
    <button onClick={calcularPts}>Pontuação</button>
    <button onClick={calcularConta}>Alberque</button>
    <button onClick={votar}>Voto</button>
    <button onClick={pesoIdeal}>Peso</button>
    <button onClick={valormacas}>Maçãs</button>
  </div>

    <p>
      Resultado: {saida}
    </p>
   </div>
  );
}

export default App
