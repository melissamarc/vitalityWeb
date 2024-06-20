import { useState } from "react";
import React from "react";
import "./account.css";

function account() {
  
  return (
<>

<div className="textoPrincipal"></div>
    <div> 
        <h1>"Adiciona Conta"</h1> 
        <h3>"Adicione uma nova conta ou conecte uma conta existente para que seja fácil trocar de conta."</h3>
            </div>
            
            
            <div className="container">
            <div className="caixa1">Conteúdo da Caixa 1</div>
            <h1> Adicionar uma conta existente</h1>
            <h2>Conecte uma conta com outro endereço email</h2>

            <div className="caixa2">Conteúdo da Caixa 2</div>
            <h1>Criar uma nova conta</h1>
            <h2>Crie uma conta separada com outro endereço de email</h2>
        </div>

 </>
  );   
}

export default account;


