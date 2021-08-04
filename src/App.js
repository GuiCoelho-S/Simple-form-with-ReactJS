
import {React, Component } from 'react';
import './App.css';
import FormularioCadastro from './components/formularioCadastro/formularioCadastro';
import {Container,Typography} from '@material-ui/core';

class App extends Component {
  render() { 

    return ( 
      <Container maxWidth="sm" component="article">
        <Typography variant="h4" align="center" gutterBottom component="h1">Formulário Cadastro</Typography>
        <FormularioCadastro/>
      </Container>
      
    );
  }
}
 
export default App;

