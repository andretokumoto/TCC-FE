import React, { useState } from 'react';
import Box from '@mui/material/Box';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import TextField from '@mui/material/TextField';
import './sideBar.css';

export default function SideBar() {
  const [numero_oficio, setNumero_oficio] = useState('');
  const [destinatario, setDestinatario] = useState('');
  const [logradouroDest, setLogradouroDest] = useState('Logradouro, número');
  const [cidade, setCidadeDest] = useState('Cidade, Estado');
  const [cep, setCep] = useState('');
  const [assunto, setAssunto] = useState(''); 
  const [nomeRemetente, setNomeRemetente] = useState(''); 
  const [cargoRemetente, setCargoRemetente] = useState(''); 
  const [organizacaoRemetente, setOrganizacaoRemetente] = useState(''); 
  


  const handleNumChange = (event) => {
    setNumero_oficio(event.target.value);
  };

  const handleDestinatarioChange = (event) => {
    setDestinatario(event.target.value);
  };

  const handleLogradouroDestChange = (event) => {
    setLogradouroDest(event.target.value);
  };

  const handleCidEstadoDestChange = (event) => {
    setCidadeDest(event.target.value);
  };

  const handleCepDestChange = (event) => {
    setCep(event.target.value);
  };

  const handleAssuntoChange = (event) => {
    setAssunto(event.target.value);
  };

  const handleNomeRemetenteChange = (event) => {
    setNomeRemetente(event.target.value);
  };

  const handleCargoRemetenteChange = (event) => {
    setCargoRemetente(event.target.value);
  };

  const handleOrganizacaoRemetenteChange = (event) => {
    setOrganizacaoRemetente(event.target.value);
  };
  
  // Definição correta do tema usando createTheme
  const theme = createTheme({
    palette: {
      primary: {
        main: '#0a5700',
        dark: '#0a5700',
      },
    },
  });

  return (
    <ThemeProvider theme={theme}>
      <Box
        sx={{
          marginLeft: 0,
          marginTop: 12,
          width: 300,
          height: '100vh',
          borderRadius: 0,
          bgcolor: 'primary.main',
          '&:hover': {
            bgcolor: 'primary.dark',
          },
        }}
      >
        <div className="numero_doc">

          <TextField
              helperText={"Número do Ofício"}
              value={numero_oficio}
              onChange={handleNumChange}
              inputProps={{
                className: 'input_text',
              }}
          />

        </div>

        <div className="camposInferiores">

          <TextField
              helperText={"Destinátario"}
              value={destinatario}
              onChange={handleDestinatarioChange}
              inputProps={{
                className: 'input_text',
              }}
          />
        </div>

        <div className="camposInferiores">
            <TextField
                  helperText={"Logradouro do destinátario"}
                  value={logradouroDest}
                  onChange={handleLogradouroDestChange}
                  inputProps={{
                    className: 'input_text',
                  }}
              />
        </div>

        <div className="camposInferiores">
            <TextField
                  helperText={"Cidade e Estado do destinátario"}
                  value={cidade}
                  onChange={handleCidEstadoDestChange}
                  inputProps={{
                    className: 'input_text',
                  }}
              />
        </div>

        <div className="camposInferiores">
          <TextField
            helperText={"CEP do destinatário"}
            value={cep}
            onChange={handleCepDestChange}
            inputProps={{
              className: 'input_text',
            }}
          />
        </div>

        <div className="camposInferiores">
          <TextField
            helperText={"Assunto"}
            value={assunto}
            onChange={handleAssuntoChange}
            inputProps={{
              className: 'input_text',
            }}
          />
        </div>

        <div className="camposInferiores">
          <TextField
            helperText={"Nome do remetente"}
            value={nomeRemetente}
            onChange={handleNomeRemetenteChange}
            inputProps={{
              className: 'input_text',
            }}
          />
        </div>

        <div className="camposInferiores">
          <TextField
            helperText={"Cargo do remetente"}
            value={cargoRemetente}
            onChange={handleCargoRemetenteChange}
            inputProps={{
              className: 'input_text',
            }}
          />
        </div>

        <div className="camposInferiores">
          <TextField
            helperText={"Organização do remetente"}
            value={organizacaoRemetente}
            onChange={handleOrganizacaoRemetenteChange}
            inputProps={{
              className: 'input_text',
            }}
          />
        </div>

      </Box>
    </ThemeProvider>
  );
}
