import { useState } from 'react';

function Contagem() {
    const [contador, setContador] = useState(1);

    function adicionarContador() {
        setContador(contador + 1);
    }

    return (
        <div>
            <h2>Você apertou {contador} vezes!</h2>
            <button onClick={adicionarContador}>Adicionar</button>
        </div>
    )
}

function CapsLock(props){
    const [texto,setTexto] = useState(props.children);
    // props.children <CapsLock></CapsLock>
    const textoNormal = props.children;
    const [context, setContext] = useState(1);
    
    
    function troca() {
        setContext(context + 1);
        if (context %  2 == 0) {  
            setTexto("");    
        }else{
            setTexto(""); 
        }
    }
    
    return <div> <h1>{texto}</h1> <button onClick={troca}>Teste</button></div>
}

function Home() {
    return (
        <div>
            <Contagem />
            <div style={{marginTop:"20px"}}>
                <CapsLock></CapsLock>
            </div>
        </div>  
    ) 
}
export default  Home

