import React, { useState } from 'react';
import Box from '@mui/material/Box';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import TextField from '@mui/material/TextField';
import './sideBar.css';

export default function SideBar(props) {
  const tipo_documento = props.tipo;
  const [numero_oficio, setNumero_oficio] = useState('');
  const [destinatario, setDestinatario] = useState('');
  const [logradouroDest, setLogradouroDest] = useState('Logradouro, número');
  const [cidade, setCidadeDest] = useState('Cidade, Estado');
  const [cep, setCep] = useState('');
  const [assunto, setAssunto] = useState(''); 
  const [nomeRemetente, setNomeRemetente] = useState(''); 
  const [cargoRemetente, setCargoRemetente] = useState(''); 
  const [organizacaoRemetente, setOrganizacaoRemetente] = useState(''); 

  const handleNumChange = (event) => setNumero_oficio(event.target.value);
  const handleDestinatarioChange = (event) => setDestinatario(event.target.value);
  const handleLogradouroDestChange = (event) => setLogradouroDest(event.target.value);
  const handleCidEstadoDestChange = (event) => setCidadeDest(event.target.value);
  const handleCepDestChange = (event) => setCep(event.target.value);
  const handleAssuntoChange = (event) => setAssunto(event.target.value);
  const handleNomeRemetenteChange = (event) => setNomeRemetente(event.target.value);
  const handleCargoRemetenteChange = (event) => setCargoRemetente(event.target.value);
  const handleOrganizacaoRemetenteChange = (event) => setOrganizacaoRemetente(event.target.value);

  const handleTextfieldClick = (event) => {
    event.target.value = '';
  };

  const handleSaveData = () => {
    const data = {
      numero_oficio,
      destinatario,
      logradouroDest,
      cidade,
      cep,
      assunto,
      nomeRemetente,
      cargoRemetente,
      organizacaoRemetente,
    };
    props.onDataChange(data);  // Envia o JSON 
  };

  const theme = createTheme({
    palette: {
      primary: {
        main: '#0a5700',
        dark: '#0a5700',
      },
    },
  });

  switch(tipo_documento) {
    case 'oficio':
      return (
        <ThemeProvider theme={theme}>
          <Box className="side-bar-container">
            <div className="numero_doc">
              <TextField
                helperText="Número do Ofício"
                value={numero_oficio}
                onChange={handleNumChange}
                inputProps={{ className: 'input_text' }}
              />
            </div>
            <div className="camposInferiores">
              <TextField
                helperText="Destinátário"
                value={destinatario}
                onChange={handleDestinatarioChange}
                inputProps={{ className: 'input_text' }}
              />
            </div>
            <div className="camposInferiores">
              <TextField
                helperText="Logradouro do destinatário"
                value={logradouroDest}
                onClick={handleTextfieldClick}
                onChange={handleLogradouroDestChange}
                inputProps={{ className: 'input_text' }}
              />
            </div>
            <div className="camposInferiores">
              <TextField
                helperText="Cidade e Estado do destinatário"
                value={cidade}
                onChange={handleCidEstadoDestChange}
                onClick={handleTextfieldClick}
                inputProps={{ className: 'input_text' }}
              />
            </div>
            <div className="camposInferiores">
              <TextField
                helperText="CEP do destinatário"
                value={cep}
                onChange={handleCepDestChange}
                onClick={handleTextfieldClick}
                inputProps={{ className: 'input_text' }}
              />
            </div>
            <div className="camposInferiores">
              <TextField
                helperText="Assunto"
                value={assunto}
                onChange={handleAssuntoChange}
                inputProps={{ className: 'input_text' }}
              />
            </div>
            <div className="camposInferiores">
              <TextField
                helperText="Nome do remetente"
                value={nomeRemetente}
                onChange={handleNomeRemetenteChange}
                inputProps={{ className: 'input_text' }}
              />
            </div>
            <div className="camposInferiores">
              <TextField
                helperText="Cargo do remetente"
                value={cargoRemetente}
                onChange={handleCargoRemetenteChange}
                inputProps={{ className: 'input_text' }}
              />
            </div>
            <div className="camposInferiores">
              <TextField
                helperText="Organização do remetente"
                value={organizacaoRemetente}
                onChange={handleOrganizacaoRemetenteChange}
                inputProps={{ className: 'input_text' }}
              />
            </div>
            <button onClick={handleSaveData}>Salvar Dados</button>  {/* Adiciona botão para enviar dados */}
          </Box>
        </ThemeProvider>
      );
    default:
      return null;
  }
}
