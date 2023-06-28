import { StyledHome } from "./Home.styled"
import { useState } from "react"
import { StyleInput, Label, Button, H1, H2  } from "./input.style"
import { Link } from "react-router-dom"

function Cadastro () {
    const [nome,setNome] = useState ("")
    const [email,setEmail] = useState ("")
    const [senha,setSenha] = useState ("")
    const [ConfSenha,setConfSenha] = useState ("")
    
    return (
        <StyledHome>
    <H1>Arnia Trello</H1>
    <H2>Cadastro</H2>
        <div style={{ marginTop: "50px" }}><Label>Nome Completo</Label></div>
        <div><StyleInput type="name" value = {nome } onChange = {event => setNome (event.target.value)}/>
        
        </div> 

        <div style={{ marginTop: "10px" }}><Label>E-mail</Label></div>
        <div><StyleInput type="email"  value = {email } onChange = {event => setEmail (event.target.value)}/>
        </div>

        <div style={{ marginTop: "10px" }}><Label>Senha</Label></div>
        <div><StyleInput type="password" value = {senha } onChange = {event => setSenha (event.target.value)}/>
        </div>
        

        <div style={{ marginTop: "10px" }}><Label>Confirmar Senha</Label></div>
        <div><StyleInput type="password" value = {ConfSenha } onChange = {event => setConfSenha (event.target.value)}/>
        </div>

        <div><Button><Link style={{ color: 'inherit', textDecoration: 'none' }} to ="/AreaUSer">Entrar</Link></Button></div>

        

        </StyledHome>
    )
    
}

export default Cadastro