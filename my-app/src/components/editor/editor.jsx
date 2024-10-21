import './editor.css'
import React, { useState } from 'react';

function Editor(){

    const [conteudo, setConteudo] = useState('aqui');

    const handleTextChange = (event) => {
        setConteudo(event.target.value); 
    };

    return(

        <div
            className='text_field'
            contentEditable
            onInput={handleTextChange}
        >
                  {conteudo}
        </div>

    );

}

export default  Editor;