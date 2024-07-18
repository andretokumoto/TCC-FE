import React, { useState }  from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import TextField from '@mui/material/TextField';
import './navheader.css'; 

//const ItensNovo = []

//const ItensInserir = ['Imagem','Tabela']



const NavHeader = () => {

    const [titulo, setTitulo] = useState('Título do Projeto')//varivel que armazena titulo
    
    // Função para atualizar o estado com o valor digitado
    const handleTituloChange = (event) => {
        setTitulo(event.target.value); 
    };
    /*
        TextField cria o elemento de ent
    */
    return (
        <AppBar className='header'>
            <Toolbar className='toolbar'>
                <TextField
                    className='text_field_title'
                    value={titulo}
                    onChange={handleTituloChange}
                    //puxa a estilização do css para o valor de entrada
                    inputProps={{
                        className: "input_title" }}
                />
            </Toolbar>
        
        </AppBar>
      )

}

export default NavHeader;