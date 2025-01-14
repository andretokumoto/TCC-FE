import NavHeader from './components/NavHeader/navheader.jsx';
import Editor from './components/editor/editor.jsx';
import SideBar from './components/menu_lateral/sideBar.jsx';
import React from 'react';
import './style/pages.css';

const Exibe = (props) => {
  const tipo_documento = props.tipo;


  const convertToLaTeX = (html) => {

    return html
      .replace(/<b>(.*?)<\/b>/g, '\\textbf{$1}')
      .replace(/<i>(.*?)<\/i>/g, '\\textit{$1}')
      .replace(/<u>(.*?)<\/u>/g, '\\underline{$1}')
      .replace(/&nbsp;/g, ' ')
      .replace(/<[^>]+>/g, '');
  };

    return (
      <div>
        <NavHeader />
        <div className="page-container">
          <div className="sidebar">
            <SideBar tipo='memorando'/>
          </div>
          <div className='file_view'>
            <Editor />
          </div>
        </div>
      </div>
    );
  
}

function Pages() {
  return (
    <Exibe tipo='oficio' />
  );
}

export default Pages;
