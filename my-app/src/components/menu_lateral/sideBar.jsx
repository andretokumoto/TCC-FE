import React, { useState } from 'react';
import Box from '@mui/material/Box';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import TextField from '@mui/material/TextField';
import './sideBar.css';

export default function SideBar() {
  const [numero_oficio, setNumero_oficio] = useState('');

  const handleTextChange = (event) => {
    setNumero_oficio(event.target.value);
  };

  /*const InputText = (props) => {
    const { texto, value, onChange } = props;

    return (
      <TextField
        helperText={texto}
        value={value}
        onChange={onChange}
        inputProps={{
          className: 'input_text',
        }}
        variant="outlined"
        fullWidth
      />
    );
  };*/

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
          width: 400,
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
              onChange={handleTextChange}
              inputProps={{
                className: 'input_text',
              }}
          />

        </div>
      </Box>
    </ThemeProvider>
  );
}
