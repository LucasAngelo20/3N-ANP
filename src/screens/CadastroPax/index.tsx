import CustomSelect from "@/src/components/CustomSelect";
import CustomTextArea from "@/src/components/CustomTextArea";
import { cpfmask } from "@/src/mists/cpfmask";
import { Box, Grid } from "@mui/material";
import React, { useState } from "react";

const CadastroPax = () => {
  const [cpf, setCpf] = useState('')

  const data = [
    {name: 'cadastro1'},
    {name: 'cadastro2'},
    {name: 'cadastro3'},
  ]
  return (
    <Box>
      <Grid container>
        <Grid xs={6}>
          <CustomSelect
            width="60%"
            label="Empresa:"
            data={data}
          />
        </Grid>
      </Grid>
      <Grid container>
        <Grid xs={4}>
          <CustomTextArea
            width="90%"
            label="Cpf:"
            placeholder="Digite o seu Cpf"
            value={cpfmask(cpf)}
            type="CPF"
            onChange={(e) => setCpf(e.target.value)}
          />
        </Grid>
        <Grid xs={4}>
          <CustomTextArea
            width="90%"
            label="Nome:"
            placeholder="Digite o seu nome"
          />
        </Grid>
        <Grid xs={4}>
          <CustomTextArea
            width="90%"
            label="Nome:"
            placeholder="Digite o seu nome"
          />
        </Grid>
      </Grid>
    </Box>
  );
};

export default CadastroPax;
