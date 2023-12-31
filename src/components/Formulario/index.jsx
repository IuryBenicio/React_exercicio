import { useState } from 'react'

const Formulario = () => {
    const [peso, setPeso] = useState()
    const [altura, setAltura] = useState()
    const [calculo, setCalculo] = useState()
    const [resultadoImc, setImc] = useState(NaN)

    const calculaImc = () => {
        const alturaM = altura/100
        const altura2x = alturaM * alturaM
        const imc = peso / altura2x
        return setCalculo(parseInt(imc.toFixed(1)))
    }

    const mostraResultado = () =>{
        console.log(calculo)
    }

    const resultadoDoImc = () => {
        calculaImc();
        console.log(calculo)
        setTimeout(() => {
            if (calculo < 18.5) {
                setImc('Você está abaixo do peso')
            } else if (calculo >= 18.5 && calculo <= 24.9) {
                setImc('Você está com peso normal')
            } else if (calculo >= 25 && calculo <= 29.9) {
                setImc('Você está com sobrepeso')
            } else if (calculo >= 30 && calculo <= 34.9) {
                setImc('Você está com obesidade grau 1')
            } else if (calculo >= 35 && calculo <= 39.9) {
                setImc('Você está com obesidade grau 2')
            } else {
                setImc('Você possui obesidade mórbida')
        }
        }, 1000)
    }

    const mensagemIMC = 'seu IMC é'


    return(
        <>
            <form>
                <div className="inputPeso">
                    <label htmlFor="peso" className='me-1'>Insira seu peso</label>
                    <input className='form-control' onChange={e => setPeso(parseInt(e.target.value))} id='peso' type="number"/>kg 
                </div>
                <div className="inputAltura mt-3">
                    <label htmlFor="altura" className='me-1'>Insira sua altura</label>
                    <input className='form-control' onChange={e => setAltura(parseInt(e.target.value))} type="number" id="altura"/>cm
                </div>
            </form>
            <div className="buttons mt-2">
                <button onClick={mostraResultado && resultadoDoImc} className='btn btn-success' type='button'> ENVIAR </button>
                <button className='btn btn-secondary '> RESETAR </button>
            </div>
            <div className='resultado'>
                {mensagemIMC} {calculo}
            </div>
        </>
    )
}

export default Formulario 