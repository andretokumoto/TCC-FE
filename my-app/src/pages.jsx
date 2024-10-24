import NavHeader from './components/NavHeader/navheader.jsx'
import Editor from './components/editor/editor.jsx';
import React from 'react';
import './style/pages.css'

const Exibe = (props)=>{
    const tipo_documento = props.tipo;

    if(tipo_documento === 'oficio'){
      return(
        <div>
            <NavHeader/>

            <div className='file_view'>
                 <Editor/>
            </div>
       
        </div>

      );
    }

}

function Pages() {
    return (
    
        <Exibe tipo='oficio'/>
        
    );
}

export default Pages;

