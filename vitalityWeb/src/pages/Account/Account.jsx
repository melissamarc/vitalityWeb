import { useState } from "react";
import React from "react";
import "./account.css";

function Account() {
  
  return (
<>



        <p>Adicionar Conta</p> 
        <p>Adicione uma nova conta ou conecte uma conta existente para que seja fácil trocar de conta.</p>
      
            
            
          <div className="caixas"> 
            <div className="caixa1">
            <div className="circle-container">
            <div className="circle-button"> </div>
            </div>
   
            <p> Adicionar uma conta existente</p>
            <p>Conecte uma conta com outro endereço de e-mail</p>
            </div>

            <div className="caixa2">
            <div className="circle-container1">
            <div className="circle-button1"> </div>
            <p>Criar uma nova conta</p>
            <p>Crie uma conta separada com outro endereço de email</p>
            
        </div>
</div>
        </div>
    

 </>
  );   
}

export default Account;


