import { useState } from "react";
import { StyledHome } from "./Home.styled";
import { StyleInput, Label, Button, Cadastro, H1 } from "./input.style";
import { Link } from "react-router-dom";

function Home() {
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  return (
    <StyledHome>
      <H1>Arnia Trello</H1>
      <div style={{ marginTop: "80px" }}>
        <Label>Email</Label>
      </div>
      <div>
        <StyleInput
          type="email"
          value={email}
          onChange={(event) => setEmail(event.target.value)}
        />
      </div>

      <div style={{ marginTop: "30px" }}>
        <Label>Senha</Label>
      </div>
      <div>
        <StyleInput
          type="password"
          value={senha}
          onChange={(event) => setSenha(event.target.value)}
        />
      </div>

      <div>
        <Button>
          <Link
            style={{ color: "inherit", textDecoration: "none" }}
            to="/AreaUSer"
          >
            Entrar
            
          </Link>
        </Button>
      </div>
          
      <Cadastro>
        <Link
          style={{ color: "inherit", textDecoration: "none" }}
          to="/Cadastro"
        >
          Cadastre-se
        </Link>{" "}
      </Cadastro>
    </StyledHome>
  );
}
export default Home;



  
