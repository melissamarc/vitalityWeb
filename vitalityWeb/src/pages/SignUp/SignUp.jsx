import { useState } from "react";
import React from "react";
import "./SignUp.css";

function SignUp() {
  
  return (
    <>
 <div className="elementoPrincipal">

<h1>Criar Usuario</h1>

<div className="inputs">
  <input
    className="textCaixa"
    type="text"
    id="nome"
    name="nome"
    placeholder="Nome completo"
    
   
  />

  <input
    className="textCaixa"
    type="password"
    id="DataNasc"
    name="DataNasc"
    placeholder="Data de Nascimento"
   
   
  />
   <input
    className="textCaixa"
    type="password"
    id="Email"
    name="Email"
    placeholder="Email"
   
   
  />
   <input
    className="textCaixa"
    type="password"
    id="senha"
    name="senha"
    placeholder="Senha"
   
   
  />
   <input
    className="textCaixa"
    type="password"
    id="ConfSenha"
    name="ConfSenha"
    placeholder=" Confirma senha"
   
   
  />


</div>
<button className="BotaoConcluir"> <h4>Concluir</h4> </button>
</div> 

</>
  );
}

export default SignUp;