import { useState } from 'react'
import './App.css'

function App() {
  const [peso, setPeso] = useState(0)
  const [altura, setAltura] = useState(0)
  const [calculo, setCalculo] = useState(0)
  const [resultadoImc, setImc] = useState("...")

  const calculaImc = () => {
    const alturaM = altura/100
    const altura2x = alturaM * alturaM
    const imc = peso / altura2x
    return setCalculo(parseInt(imc))
  }

  const resultadoDoImc = () => {
    calculaImc();
    console.log(calculo)
    setTimeout(()=>{
      if(calculo < 18.5){
        return setImc('Você está a baixo do peso')
      } if(calculo >= 18.5 || calculo <=24.9){
        return setImc('você está com peso normal')
      } if(calculo >= 30 || calculo <35){
        return setImc('você está obeso')
      } if(calculo > 35){
        return setImc('você possui obesidade mórbida')
      };
    }, 1000)

  }

  const mensagemIMC = 'seu IMC é'
  return (
  <div className="container">
    <header>
      <h1>Calculadora IMC</h1>
    </header>
    <form>
      <div className="inputPeso">
        <label htmlFor="peso" className='me-1'>Insira seu peso</label>
        <input className='form-control' onChange={e => setPeso(parseInt(e.target.value))} id='peso' type="number"/>kg 
      </div>
      <div className="inputAltura mt-3">
        <label htmlFor="altura" className='me-1'>Insira sua altura</label>
        <input className='form-control' onChange={e => setAltura(parseInt(e.target.value))} type="number" id="altura"/>cm
      </div>
      <div className="buttons mt-2">
        <button onClick={resultadoDoImc} className='btn btn-success' type='button'> ENVIAR </button>
        <button className='btn btn-secondary '> RESETAR </button>
      </div>
      <div className='resultado'>
        
        {resultadoImc} <br />
        {mensagemIMC} {calculo}
      </div>
    </form>
  </div>

  )
}

export default App