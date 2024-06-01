import { useState } from 'react'
import React from 'react';
import './SignIn.css';


function SignIn() {

   const [usuario, setUsuario] = useState('');
    const [senha, setSenha] = useState('');

    const handleSubmit = (event) => {
        event.preventDefault();
        // Adicionar a função e a lógica de dados
        console.log('Usuário:', usuario);
        console.log('Senha:', senha);
    };


  return (
       

    <div className='elementoPrincipal'>
         
                 <text> Login </text>

                   <div className='inputs'> 
                    <input 
                        className='textCaixa'
                        type="text" 
                        id="usuario" 
                        name="usuario" 
                        placeholder="Email, telefone ou usuário"
                       
                        value={usuario} 
                        onChange={(event) => setUsuario(event.target.value)} 
                        required 
                    />
               
                    <input 
                        className='textCaixa'
                        type="password" 
                        id="senha" 
                        name="senha" 
                        placeholder="Senha" 
               
                        value={senha} 
                        onChange={(event) => setSenha(event.target.value)} 
                        required 
                    />

               </div>
             <p> Esqueceu a senha? </p>
                    <input className='entrarBotao' type="submit" value="Entrar" />

                     <div className="button-container">
            <a href="/" className="circle-button">
                <img src="./facebook.png" alt="Imagem 1" className="circle-image" />
            </a>
            <a href="/" className="circle-button">
                <img src="./google.png" alt="Imagem 2" className="circle-image" />
            </a>
        </div>

        <p> Não tenho uma conta </p>
                
            
    </div>

  
  );
}

export default SignIn;
