
import React from 'react';
import { Link } from 'react-router-dom'
import './Navbar.css';

function Navbar() {
  return (
    <nav>
        <a href="/">
        <img src='./logo.png' width={'25px'} height={"25px"}></img>
        </a>

  
        <a href="/"> Artigos </a>
        <a href="/about"> Ajuda   <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="16" height="16">
       <circle cx="12" cy="12" r="10" fill="#ffff" stroke="#000000" stroke-width="2" />
       <text x="50%" y="50%" text-anchor="middle" dominant-baseline="middle" fill="#000" font-size="12">!</text>
       </svg>
       </a>
   
        <button className='Idioma'> PT↓ </button>

      {/* preciso modificar essa caixa de pesquisa e adicionar a parte verde nela*/}
        <input 
        className='caixaPesquisa' 
        type="text"
        placeholder='Pesquisar'>
        
      
        </input>

        <button className='downloadBotao'> DOWNLOAD </button>

     <button type="button" className='iconMenu'>
      <img src="./menu.png" alt="Ícone de menu" width={'35px'} height={'35px'} />
    </button>

 

    </nav>
  );
}

export default Navbar; // Exporte a função da Navbar
