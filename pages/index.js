import { useState } from 'react';

function Home() {
    return (
        <div>
            <div>Cabeçalho Fixo</div>
            <div>
                <Contagem /> 
            </div>
        </div>  
    ) 
}

function Contagem() {
    const [contador, setContador] = useState(1);

    function adicionarContador() {
        setContador(contador + 1);
    }

    return (
        <div>
            <h1>Você apertou {contador} vezes!</h1>
            <button onClick={adicionarContador}>Adicionar</button>
        </div>
    )
}

export default  Home

