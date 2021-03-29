import { useState } from 'react';

function Home() {
    return (
        <div>
            <h1>VOCÊ APERTOU  <Contador /> VEZES!</h1>
            <button onClick = {adicionarContador}>Soma 1</button>
        </div>
    ) 
}

const [contador, setContador] = useState(1);

function Contador() {
    return ( <div>{contador}</div> )
}

function adicionarContador() {
    setContador(contador + 1);
}
export default  Home

