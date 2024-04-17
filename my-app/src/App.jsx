import './App.css';
import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom';
import { React, useContext } from 'react';
import {  createTheme,ThemeProvider } from '@mui/material';
import NavHeader from './components/NavHeader/index.jsx'

//import GlobalStyles from './styles/GlobalStyles';

const theme = createTheme();


function App() {
  /*function Private({ children }) {
      const { authenticated, loading } = useContext(AuthContext);

      if (loading) {
          return <div className="loading">Carregando.....</div>
      }
      if (!authenticated) {
          return <Navigate to="/" />;
      }
      return children;
  }*/

  return (
      <ThemeProvider theme={theme}>

          <BrowserRouter>
              
                  <NavHeader/>
              
          </BrowserRouter>
      </ThemeProvider>
  );
}

export default App;
