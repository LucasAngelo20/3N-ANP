import CustomButton from "@/src/components/CustomButton";
import CustomSelect from "@/src/components/CustomSelect";
import CustomTextArea from "@/src/components/CustomTextArea";
import useSnackbar from "@/src/hooks/useSnackbar";
import { cpfmask } from "@/src/mists/cpfmask";
import { Box, Grid, Snackbar } from "@mui/material";
import moment from "moment";
import React, { useEffect, useRef, useState } from "react";

const dataEmpresas = [
  { name: "cadastro1" },
  { name: "cadastro2" },
  { name: "cadastro3" },
];

type SessionProps = {
  empresa: string;
};

const data = {
  empresa: dataEmpresas[0].name,
  nome: "",
  cpf: "",
  numeroDoContrato: "",
  funcao: "",
  origem: "",
  destino: "",
  data: Date(),
  centroDeCusto: "",
};

const valueList = [data];

const EmissaoR1Pax = () => {
  const [values, setvalues] = useState<any>(valueList);
  const [open, setOpen] = useState(false);
  const [Info, setInfo] = useState<Array<SessionProps>>([]);


  const handleSaveInfos = () => {
    console.log("Informações salvas: ");
    const addState = [...values];
    setInfo(addState);
    setOpen(true);
    console.log(addState);
  };

  const handleAddEmissao = () => {
    const addState = [...values, data];
    setvalues(addState);
  };

  const handleRemoveEmissao = () => {
    setvalues(values.slice(0, -1));

  };

  const handleChange = (event: any, index: any) => {
    const { value, name } = event.target;
    const newState = [...values];

    newState[index] = {
      ...newState[index],
      [name]: value,
    };

    setvalues(newState);
  };
  return (
    <>
      {values.map(
        (
          {
            empresa,
            nome,
            cpf,
            numeroDoContrato,
            funcao,
            origem,
            destino,
            data,
            centroDeCusto,
          }: any,
          index: any
        ) => (
          <>
            {index != 0 && <div
              style={{
                borderTop: "1px solid rgba(000,000,000,0.2)",
                margin: "20px 0",
              }}
            />}
            <Box>
              <Grid container>
                <Grid xs={6}>
                  <CustomSelect
                    width="44%"
                    label="Empresa:"
                    data={dataEmpresas}
                    value={empresa}
                    name="empresa"
                    onChange={(event) => handleChange(event, index)}
                  />
                </Grid>
              </Grid>
              <Grid container>
                <Grid xs={3}>
                  <CustomTextArea
                    width="90%"
                    label="Nome:"
                    placeholder="Nome completo"
                    value={nome}
                    name="nome"
                    onChange={(event) => handleChange(event, index)}
                  />
                </Grid>
                <Grid xs={3}>
                  <CustomTextArea
                    width="90%"
                    label="CPF:"
                    placeholder="000.000.000-00"
                    value={cpfmask(cpf)}
                    type="CPF"
                    name="cpf"
                    onChange={(event) => handleChange(event, index)}
                  />
                </Grid>
                <Grid xs={3}>
                  <CustomTextArea
                    width="90%"
                    label="Numero do contrato:"
                    placeholder="00000"
                    value={numeroDoContrato}
                    name="numeroDoContrato"
                    onChange={(event) => handleChange(event, index)}
                  />
                </Grid>
                <Grid xs={3}>
                  <CustomTextArea
                    width="90%"
                    label="Função:"
                    placeholder="00000"
                    value={funcao}
                    name="funcao"
                    onChange={(event) => handleChange(event, index)}
                  />
                </Grid>
                <Grid xs={3}>
                  <CustomTextArea
                    width="90%"
                    label="Origem:"
                    placeholder="00000"
                    value={origem}
                    name="origem"
                    onChange={(event) => handleChange(event, index)}
                  />
                </Grid>
                <Grid xs={3}>
                  <CustomTextArea
                    width="90%"
                    label="Destino:"
                    placeholder="00000"
                    value={destino}
                    name="destino"
                    onChange={(event) => handleChange(event, index)}
                  />
                </Grid>
                <Grid xs={3}>
                  <CustomTextArea
                    width="90%"
                    label="Data:"
                    placeholder="00/00/0000"
                    value={data}
                    fieldType="date"
                    name="data"
                    onChange={(event) => handleChange(event, index)}
                  />
                </Grid>
                <Grid xs={3}>
                  <CustomTextArea
                    width="90%"
                    label="Centro de Custo:"
                    placeholder=""
                    value={centroDeCusto}
                    name="centroDeCusto"
                    onChange={(event) => handleChange(event, index)}
                  />
                </Grid>
              </Grid>
            </Box>
          </>
        )
      )}

      <Grid container>
        <Grid xs={2}>
          <CustomButton text="Adicionar" onClick={() => handleAddEmissao()} />
        </Grid>
        <Grid xs={2}>
          <CustomButton
            display={values.length == 1}
            text="Remover"
            onClick={() => handleRemoveEmissao()}
          />
        </Grid>
      </Grid>
      <Grid xs={6}>
        <CustomButton text="Salvar" onClick={() => handleSaveInfos()} />
      </Grid>
      <Snackbar
        open={open}
        onClose={() => setOpen(false)}
        message="Salvo com sucesso!"
        autoHideDuration={3000}
      />
    </>
  );
};

export default EmissaoR1Pax;
