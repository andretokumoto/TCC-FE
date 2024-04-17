import './App.css';
import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom';
import { React, useContext } from 'react';
import { ThemeProvider } from '@mui/material';
import NavHeader from './components/NavHeader/index.jsx'

//import GlobalStyles from './styles/GlobalStyles';

/*function App() {
  return (
    //<GlobalStyles />
    <div className="App">
      <header className="App-header">
            <NavHeader />
            pagina
      </header>
    </div>
  );
}*/

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
      <ThemeProvider>

          <BrowserRouter>
              
                  <NavHeader/>
              
          </BrowserRouter>
      </ThemeProvider>
  );
}

export default App;
