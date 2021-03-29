import { useState } from 'react';

function Home() {
    return (
        <div>
            <h1>VOCÊ APERTOU  <Contador /> VEZES</h1>
        </div>
    ) 
}

function Contador() {
    const [contador, setContador] = useState(1);

    function adicionarContador() {
        setContador(contador + 1);
    }

    return ( {contador} )
}

export default  Home

