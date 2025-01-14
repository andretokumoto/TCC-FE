import React, { useState }  from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import './navheader.css';
import DropdownButton from './listaSuspensa.jsx' 
//import { htmlToText } from 'html-to-text' //para alterar o texto de entrada para formato latex


const ItensInserir = ['Imagem','Tabela']
const ItensBaixar = ['PDF','LaTeX']

//botões simples, sem listas suspensas
const SimpleButton = (props) =>{
    const nameButton  = props.nameButton
    return(
        <Button variant="text" className='butom_simple'>{nameButton}</Button>
    )
}

const NavHeader = () => {

    const [titulo, setTitulo] = useState('Título do Projeto')//varivel que armazena titulo
    
    // Função para atualizar o estado com o valor digitado
    const handleTituloChange = (event) => {
        setTitulo(event.target.value); 
    };

    // Função chamada ao clicar em "Compilar"
 /*   const handleCompile = () => {
        handleSend({ titulo });
    };*/

    /*
        TextField cria o elemento de entrada do titulo
    */
    return (
        <AppBar className='header'>
            
            <Toolbar className='toolbar'>
    
                <div className='button_left'>
                    <SimpleButton nameButton='Novo'/>
                    <DropdownButton options={ItensInserir} nameButton='Inserir' />
                </div>

                <div className='text_field_title'>
                    <TextField
                        
                        value={titulo}
                        onChange={handleTituloChange}
                        //puxa a estilização do css para o valor de entrada
                        inputProps={{
                            className: "input_title" }}
                    />
                </div>
                <div className='button_right'>
                     <SimpleButton nameButton='Compilar' /*onClick={handleCompile}*//>
                     <DropdownButton options={ItensBaixar} nameButton='Baixar' />
                </div>



            </Toolbar>
        
        </AppBar>
      )

}

export default NavHeader;