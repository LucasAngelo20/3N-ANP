import CustomButton from "@/src/components/CustomButton";
import CustomSelect from "@/src/components/CustomSelect";
import CustomTextArea from "@/src/components/CustomTextArea";
import { cpfmask } from "@/src/mists/cpfmask";
import { Box, Grid } from "@mui/material";
import React, { useState } from "react";

const data = [
  { name: "cadastro1" },
  { name: "cadastro2" },
  { name: "cadastro3" },
];

const CadastroPax = () => {
  const [empresa, setEmpresa] = useState(data[0].name);
  const [cpf, setCpf] = useState("");
  const [nome, setNome] = useState("");
  const [matricula, setMatricula] = useState("");

  const handleSaveInfos = () => {
    console.log("Informações salvas: ");
    console.log(empresa);
    console.log(nome);
    console.log(matricula);
    console.log(cpf);
  };

  return (
    <Box>
      <Grid container>
        <Grid xs={6}>
          <CustomSelect
            width="59.2%"
            label="Empresa:"
            data={data}
            value={empresa}
            onChange={(e) => setEmpresa(e.target.value)}
          />
        </Grid>
      </Grid>
      <Grid container>
        <Grid xs={4}>
          <CustomTextArea
            width="90%"
            label="Nome:"
            placeholder="Nome completo"
            value={nome}
            onChange={(e) => setNome(e.target.value)}
          />
        </Grid>
        <Grid xs={4}>
          <CustomTextArea
            width="90%"
            label="CPF:"
            placeholder="000.000.000-00"
            value={cpfmask(cpf)}
            type="CPF"
            onChange={(e) => setCpf(e.target.value)}
          />
        </Grid>
        <Grid xs={4}>
          <CustomTextArea
            width="90%"
            label="Numero da matricula:"
            placeholder="00000"
            value={matricula}
            onChange={(e) => setMatricula(e.target.value)}
          />
        </Grid>
      </Grid>
      <Grid container>
        <Grid xs={6} minWidth="100%" display="flex">
          <CustomButton text="Salvar" onClick={() => handleSaveInfos()} />
        </Grid>
      </Grid>
    </Box>
  );
};

export default CadastroPax;
