import './style/App.css';
import { BrowserRouter/*, Route, Routes, Navigate*/ } from 'react-router-dom';
import { React/*, useContext */} from 'react';
import {  createTheme,ThemeProvider } from '@mui/material';
//import NavHeader from './components/NavHeader/barra_menu.jsx'
import Pages from './pages';

const theme = createTheme();


function App() {
  
  return (
      <ThemeProvider theme={theme}>

          <BrowserRouter>
              
                  <Pages/>
                  
          </BrowserRouter>
      </ThemeProvider>
  );
}

export default App;
