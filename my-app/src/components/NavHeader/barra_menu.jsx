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

    return (
        <AppBar className='header'>

            <Toolbar>
                <TextField
                    value={titulo}
                    onChange={handleTituloChange}
                    className="custom-textfield" 
                />
            </Toolbar>
        
        </AppBar>
      )

}

export default NavHeader;