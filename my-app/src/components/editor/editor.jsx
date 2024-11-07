import React, { useState } from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import './editor.css';

function Editor() {
  const [conteudo, setConteudo] = useState('');

  const handleChange = (value) => {
    setConteudo(value);
  };

  return (
    <div className="editor-container">
      <ReactQuill 
        value={conteudo}
        onChange={handleChange}
        theme="snow"
        className="react-quill"
      />
    </div>
  );
}

export default Editor;
