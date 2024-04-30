import React, { useState } from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import './navheader.css'; // Importe o arquivo CSS externo


const opcoes_Inserir = ['Imagem','Tabela']

function TopMenu() {
  const [anchorEl, setAnchorEl] = useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <AppBar position="static" className="MuiAppBar-root top-menu"> 
      <Toolbar>
        <Typography variant="h5" className="MuiTypography-root menu-title"> 
          Formataí - gerador de pdf formatado 
        </Typography>

        {/* Botao Novo */}
        <div style={{ position: 'absolute', left: 20 }}>
          <IconButton
            className='menuButton'
            aria-controls="simple-menu"
            aria-haspopup="true"
            onClick={handleClick}
            color="inherit"
          >
            Novo
          </IconButton>
        </div>
        <div style={{ marginLeft: 'auto' }}> 
          <Menu
            id="simple-menu"
            anchorEl={anchorEl}
            open={Boolean(anchorEl)}
            onClose={handleClose}
          >
            <MenuItem onClick={handleClose}>Projeto</MenuItem>
            <MenuItem onClick={handleClose}>Capitulo</MenuItem>
          </Menu>
        </div>


        {/* Botao inserir */}
        <div style={{ position: 'absolute', left: 130 }}> 
          <IconButton
            className='menuButton'
            aria-controls="simple-menu"
            aria-haspopup="true"
            onClick={handleClick}
            color="inherit"
          >
            Inserir
          </IconButton>
        </div>
        <div style={{ marginLeft: 'auto' }}> 
          <Menu
            id="simple-menu"
            anchorEl={anchorEl}
            open={Boolean(anchorEl)}
            onClose={handleClose}
          >
            <MenuItem onClick={handleClose}>Imagens</MenuItem>
            <MenuItem onClick={handleClose}>Tabela</MenuItem>
          </Menu>
        </div>

        {/* Botao Formatar */}
        <div style={{ position: 'absolute', left: 240 }}> 
          <IconButton
            className='menuButton'
            aria-controls="simple-menu"
            aria-haspopup="true"
            onClick={handleClick}
            color="inherit"
          >
            Formatar
          </IconButton>
        </div>

        {/* Botao exportar */}
        <div style={{ position: 'absolute', right: 20 }}> 
          <IconButton
            className='menuButton'
            aria-controls="simple-menu"
            aria-haspopup="true"
            onClick={handleClick}
            color="inherit"
          >
            Exportar
          </IconButton>
        </div>
        <div style={{ marginLeft: 'auto' }}> 
          <Menu
            id="simple-menu"
            anchorEl={anchorEl}
            open={Boolean(anchorEl)}
            onClose={handleClose}
          >
            <MenuItem onClick={handleClose}>PDF</MenuItem>
            <MenuItem onClick={handleClose}>Arquivo LaTeX</MenuItem>
          </Menu>
        </div>


      </Toolbar>
    </AppBar>
  );
}

export default TopMenu;
