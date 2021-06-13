import { Button, TextField } from '@material-ui/core';
import React, { useState } from 'react';

function DadosEnvio({ Enviar, proximo, coletarDados }){
    const [cep, setCep] = useState("");
    const [endereco, setEndereco] = useState("");
    const [numero, setNumero] = useState("");
    const [estado, setEstado] = useState("");
    const [cidade, setCidade] = useState("");

    return(
        <form onSubmit={
            (event) => {
                event.preventDefault();
                coletarDados({cep, endereco, numero, estado, cidade});
                Enviar();
                proximo();
            }
        }>
            <TextField
            label="CEP"
            type="number"
            variant="outlined"
            required
            margin="dense"
            value={cep}
            onChange={
                (event) => {
                    setCep(event.target.value);
                }
            }
            />
            <TextField
            label="Endereço"
            type="text"
            variant="outlined"
            required
            fullWidth
            margin="dense"
            value={endereco}
            onChange={
                (event) => {
                    setEndereco(event.target.value);
                }
            }
            />
            <TextField
            label="Número"
            type="number"
            variant="outlined"
            required
            margin="dense"
            value={numero}
            onChange={
                (event) => {
                    setNumero(event.target.value);
                }
            }
            />
            <TextField
            label="Estado"
            type="text"
            variant="outlined"
            required
            margin="dense"
            value={estado}
            onChange={
                (event) => {
                    setEstado(event.target.value);
                }
            }
            />
            <TextField
            label="Cidade"
            type="text"
            variant="outlined"
            required
            margin="dense"
            value={cidade}
            onChange={
                (event) => {
                    setCidade(event.target.value);
                }
            }
            />
            <Button variant="contained" color="primary" type="submit" fullWidth> Finalizar Cadastro </Button>
        </form>
    );
}

export default DadosEnvio;