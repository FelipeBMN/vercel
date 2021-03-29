import { useState } from 'react';

function Home() {
    return (
        <div>
            <h1>Cabeçalho Fixo</h1>
            <div>
                <CapsLock texto="Me deixa em Caps Lock por favor!"/>
            </div>
        </div>  
    ) 
}

function Contagem() {
    const [contador, setContador] = useState(10);

    function adicionarContador() {
        setContador(contador + 2);
    }

    return (
        <div>
            <h2>Você apertou {contador} vezes!</h2>
            <button onClick={adicionarContador}>Adicionar</button>
        </div>
    )
}

function CapsLock(props){
    const textoInserido = props.texto
    const textoEmCapsLock =  props.textoInserido.toUpperCase()

    return <div>{textoEmCapsLock}</div>
}

export default  Home

