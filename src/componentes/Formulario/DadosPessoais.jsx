import React, { useState } from 'react';
import { Switch, TextField, FormControlLabel, Button } from '@material-ui/core';

function DadosPessoais({ validaCPF, proximo, coletarDados }) {
    const [nome, setNome] = useState("");
    const [sobrenome, setSobrenome] = useState("");
    const [cpf, setCpf] = useState("");
    const [novidades, setNovidades] = useState(true);
    const [promocoes, setPromocoes] = useState(true);
    const [erros, setErro] = useState({cpf:{valido:false, text:""}});

    return(
        <form onSubmit={(event) =>{
            event.preventDefault();
            coletarDados({nome, sobrenome, cpf, novidades, promocoes});
            proximo();
        }}>
            <TextField label="Nome" variant="outlined" required fullWidth margin="dense" value={nome} onChange={(event) => {
                setNome(event.target.value);
            }}/>
            <TextField label="Sobrenome" variant="outlined" type="text" required fullWidth margin="dense" value={sobrenome} onChange={(event) => {
                setSobrenome(event.target.value);
            }}/>
            <TextField label="CPF" variant="outlined" required fullWidth margin="dense" value={cpf} onChange={(event) => {
                setCpf(event.target.value);
            }} error={erros.cpf.valido} helperText={erros.cpf.text} onBlur={(event) => {
                const cpf_n = validaCPF(event.target.value);
                setErro({cpf:cpf_n});
            }}/>

            <FormControlLabel 
            control={ <Switch name="checkedB" color="primary" checked={novidades} onChange={(event) => {
                setNovidades(event.target.checked);
            }}/> } label="Novidades"/>

            <FormControlLabel 
            control={ <Switch name="checkedB" color="primary" checked={promocoes} onChange={(event) => {
                setPromocoes(event.target.checked);
            }}/> } label="Promoções" />

            <Button variant="contained" color="primary" type="submit"> Continuar </Button>
        </form>
    );
}

export default DadosPessoais;