import { useState } from "react";
import React from "react";
import "./SignIn.css";

function SignIn() {
  
  return (
<>
     <div className="wave-background">
      <div className="wave"></div>
    </div>


    <div className="elementoPrincipal">

      <text> Login </text>

      <div className="inputs">
        <input
          className="textCaixa"
          type="text"
          id="usuario"
          name="usuario"
          placeholder="Email, telefone ou usuário"
          
         
        />

        <input
          className="textCaixa"
          type="password"
          id="senha"
          name="senha"
          placeholder="Senha"
         
         
        />
      </div>


      <button className="esqueceuSenha"> Esqueceu a senha? </button>
      {/* adicionar o href pra page de recuperação de senha */}


     <input 
     className="entrarBotao" 
     type="submit"
     value="Entrar" />  {/* adicionar o href pra pagina inicial */ } 

      <div className="button-container">
        <a href="/" className="circle-button">
          {" "}
          {/* adicionar a função p entrar com fb */}
          <img src="./facebook.png" alt="Imagem 1" className="circle-image" />
        </a>

        <a href="/" className="circle-button">
          <img src="./google.png" alt="Imagem 2" className="circle-image" />
        </a>
      </div>


      <button className="botaoCadastro"> Não tenho uma conta </button>{" "}
      {/* adicionar o href pra pagina de cadastro */}

    </div> </>
  );
}

export default SignIn;
