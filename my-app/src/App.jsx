import './App.css';
import { BrowserRouter/*, Route, Routes, Navigate*/ } from 'react-router-dom';
import { React/*, useContext */} from 'react';
import {  createTheme,ThemeProvider } from '@mui/material';
import NavHeader from './components/NavHeader/navheader.jsx'


//import GlobalStyles from './styles/GlobalStyles';

const theme = createTheme();


function App() {
  
  return (
      <ThemeProvider theme={theme}>

          <BrowserRouter>
              
                  <NavHeader/>
                  
          </BrowserRouter>
      </ThemeProvider>
  );
}

export default App;
