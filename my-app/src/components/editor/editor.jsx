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
                style={{ 
                    height: '800px', 
                    maxHeight: '800px', 
                    width: '600px', 
                    marginTop: '110px',
                    marginLeft: '450px',
                    border: '1px solid #ccc', 
                    padding: '10px', 
                    fontFamily: 'Arial', 
                    fontSize: '16px' 
                }}
            />
        </div>
    );
}

export default Editor;
