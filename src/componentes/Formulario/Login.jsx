import { Button, TextField } from '@material-ui/core';
import React, { useState } from 'react';

function Login({ proximo, coletarDados }){
    const [email, setEmail] = useState("");
    const [senha, setSenha] = useState("");

    return(
        <form onSubmit={
            (event) => {
                event.preventDefault();
                coletarDados({email,senha});
                proximo();
            }
        }>
            <TextField
            label="email"
            type="email"
            variant="outlined"
            required
            fullWidth
            margin="dense"
            value={email}
            onChange={
                (event) => {
                    setEmail(event.target.value);
                }
            }
            />
            <TextField
            label="senha"
            type="password"
            variant="outlined"
            required
            fullWidth
            margin="dense"
            value={senha}
            onChange={
                (event) => {
                    setSenha(event.target.value);
                }
            }
            />
            <Button variant="contained" color="primary" type="submit"> Continuar </Button>
        </form>
    );
}

export default Login;