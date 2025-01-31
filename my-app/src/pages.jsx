import React, { useState } from 'react';
import NavHeader from './components/NavHeader/navheader.jsx';
import Editor from './components/editor/editor.jsx';
import SideBar from './components/menu_lateral/sideBar.jsx';
import './style/pages.css';

const Exibe = (props) => {
  const tipo_documento = props.tipo;

  const [sidebarData, setSidebarData] = useState({});
  const [editorContent, setEditorContent] = useState('');
  const [fileContent, setFileContent] = useState('');

  const convertToLaTeX = (html) => {
    return html
      .replace(/<b>(.*?)<\/b>/g, '\\textbf{$1}')
      .replace(/<i>(.*?)<\/i>/g, '\\textit{$1}')
      .replace(/<u>(.*?)<\/u>/g, '\\underline{$1}')
      .replace(/&nbsp;/g, ' ')
      .replace(/<[^>]+>/g, '');
  };

  const handleSendData = async (endpoint, actionType) => {
    const latexContent = convertToLaTeX(editorContent);

    const data = {
      tipo_documento,
      sidebar: sidebarData,
      conteudo: latexContent,
    };

    try {
      const response = await fetch(endpoint, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });

      if (!response.ok) {
        throw new Error(`Erro: ${response.statusText}`);
      }

      if (actionType === 'download') {
        const blob = await response.blob();
        const url = window.URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = 'arquivo-gerado.pdf';
        a.click();
        window.URL.revokeObjectURL(url);
      } else if (actionType === 'display') {
        const content = await response.text();
        setFileContent(content);
      }
    } catch (error) {
      console.error('Erro ao enviar dados para a API:', error);
    }
  };

  return (
    <div>
      <NavHeader
        onSubmitDownloadTeX={() =>
          handleSendData('https://api-backend-hddt.onrender.com/get-latex', 'download')
        }
        onSubmitDownloadPDF={() =>
          handleSendData('https://api-backend-hddt.onrender.com/get-pdf', 'download')
        }
        onSubmitDisplay={() =>
          handleSendData('https://api-backend-hddt.onrender.com/get-pdf', 'display')
        }
      />
      <div className="page-container">
        <div className="sidebar">
          <SideBar tipo={tipo_documento} onDataChange={(data) => setSidebarData(data)} />
        </div>
        <div className="file_view">
          <Editor onChange={(content) => setEditorContent(content)} />
        </div>
        {fileContent && (
          <div className="file-display">
            <h3>Arquivo Exibido:</h3>
            <pre>{fileContent}</pre>
          </div>
        )}
      </div>
    </div>
  );
};

function Pages() {
  return <Exibe tipo="oficio" />;
}

export default Pages;
