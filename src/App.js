import { Container } from '@material-ui/core';
import './App.css';
import Formulario from './componentes/Formulario/Formulario';

function App() {
  return (
    <Container className="App" maxWidth="sm">
      <Formulario validaCPF={validaCPF} Enviar={Enviar}/>
    </Container>
  );
}

function Enviar(dados){
  console.log(dados);
}

function validaCPF(cpf){
  if (cpf.length !== 11){
    return {valido: true, text:"CPF precisa ter 11 números"};
  } else {
    return {valido: false, text:""};
  }
}

export default App;
