import { Step, StepLabel, Stepper, Typography } from '@material-ui/core';
import React, { Fragment, useEffect, useState } from 'react';
import DadosEnvio from './DadosEnvio';
import DadosPessoais from './DadosPessoais';
import Login from './Login';

function Formulario({ validaCPF, Enviar }) {
    const [etapa, setEtapa] = useState(0);
    const [dadosColetados, setDados] = useState({});
    useEffect(
        () => console.log(dadosColetados)
    );

    const formularios = [
        <Login proximo={proximo} coletarDados={coletarDados}/>,
        <DadosPessoais validaCPF={validaCPF} proximo={proximo} coletarDados={coletarDados}/>,
        <DadosEnvio Enviar={_Enviar} proximo={proximo} coletarDados={coletarDados}/>,
        <Typography variant="h3" align="center"> Obrigado por se cadastrar! </Typography>
    ]

    function coletarDados(dados){
        setDados({...dadosColetados, ...dados});
    }

    function proximo(){
        setEtapa(etapa + 1);
    }

    function _Enviar(){
        return Enviar(dadosColetados);
    }

    return(
        <Fragment>
            <Typography variant="h3" align="center" component="h1">Formulário de Cadastro</Typography>
            <Stepper activeStep={etapa} alternativeLabel>
                <Step><StepLabel>Dados de login</StepLabel></Step>
                <Step><StepLabel>Dados pessoais</StepLabel></Step>
                <Step><StepLabel>Dados de envio</StepLabel></Step>
                <Step><StepLabel>Finalização</StepLabel></Step>
            </Stepper>
            {formularios[etapa]}
        </Fragment>
    );
}

// <DadosPessoais validaCPF={validaCPF} Enviar={Enviar}/>
// <DadosEnvio/>

export default Formulario;