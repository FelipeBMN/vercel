import { useState } from 'react';


function Principal() {

    return (
        <div>
            <Contagem/>
        </div>
    ) 
}

export default  Principal


function Contagem() {
    const [contador, setContador] = useState(1);

    function adicionarContador() {
        setContador(contador + 1);
    }

    function retiraContador(){
        setContador(contador - 1);
    }

    return (
        <div>
            <strong><p style={{fontSize:"80px"}}>Você apertou {contador} vezes!</p></strong>
            <button style={{width:"200px",height:"200px",fontSize:"40px"}} onClick={adicionarContador}>Adicionar</button>
            <button style={{width:"220px",height:"200px",fontSize:"40px"}} onClick={retiraContador}>Retira</button>
        </div>
    )
}



/*
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
*/

