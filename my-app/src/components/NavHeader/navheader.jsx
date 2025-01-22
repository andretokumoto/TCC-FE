import React, { useState } from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import PropTypes from 'prop-types';
import './navheader.css';

const ItensInserir = ['Oficio', 'Memorando'];
const ItensBaixar = ['PDF', 'LaTeX'];

// Componente DropdownButton (Lista Suspensa)
const DropdownButton = ({ options, nameButton, onSelect }) => {
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleOptionSelect = (option) => {
    handleClose();
    if (onSelect) {
      onSelect(option);
    }
  };

  return (
    <div>
      <Button
        aria-controls={open ? 'dropdown-menu' : undefined}
        aria-haspopup="true"
        onClick={handleClick}
        variant="text"
        className="butom_simple"
      >
        {nameButton}
      </Button>
      <Menu
        id="dropdown-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          'aria-labelledby': 'dropdown-button',
        }}
      >
        {options.map((option, index) => (
          <MenuItem key={index} onClick={() => handleOptionSelect(option)}>
            {option}
          </MenuItem>
        ))}
      </Menu>
    </div>
  );
};

DropdownButton.propTypes = {
  options: PropTypes.arrayOf(PropTypes.string).isRequired,
  nameButton: PropTypes.string.isRequired,
  onSelect: PropTypes.func,
};

// Botão simples
const SimpleButton = ({ nameButton, onClick }) => (
  <Button variant="text" className="butom_simple" onClick={onClick}>
    {nameButton}
  </Button>
);

const NavHeader = ({ onCompile, onDownload }) => {
  const [titulo, setTitulo] = useState('Título do Projeto');

  const handleTituloChange = (event) => {
    setTitulo(event.target.value);
  };

  const handleDownload = (option) => {
    if (option === 'PDF') {
      onDownload('https://api-backend-hddt.onrender.com/get-pdf', 'download');
    } else if (option === 'LaTeX') {
      onDownload('https://api-backend-hddt.onrender.com/get-latex', 'download');
    }
  };

  return (
    <AppBar className="header">
      <Toolbar className="toolbar">
        <div className="button_left">
          <DropdownButton
            options={ItensInserir}
            nameButton="Tipo de Arquivo"
            onSelect={(option) => console.log(`Inserir: ${option}`)}
          />
        </div>

        <div className="text_field_title">
          <TextField
            value={titulo}
            onChange={handleTituloChange}
            inputProps={{ className: 'input_title' }}
            label="Título"
            variant="outlined"
          />
        </div>

        <div className="button_right">
          <SimpleButton
            nameButton="Compilar"
            onClick={() =>
              onCompile('https://api-backend-hddt.onrender.com/get-pdf', 'display')
            }
          />
          <DropdownButton
            options={ItensBaixar}
            nameButton="Baixar"
            onSelect={handleDownload}
          />
        </div>
      </Toolbar>
    </AppBar>
  );
};

NavHeader.propTypes = {
  onCompile: PropTypes.func.isRequired,
  onDownload: PropTypes.func.isRequired,
};

export default NavHeader;
