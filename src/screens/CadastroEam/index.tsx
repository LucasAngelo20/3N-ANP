import CustomButton from "@/src/components/CustomButton";
import CustomSelect from "@/src/components/CustomSelect";
import CustomTextArea from "@/src/components/CustomTextArea";
import useSnackbar from "@/src/hooks/useSnackbar";
import { cpfmask } from "@/src/mists/cpfmask";
import { Box, Grid, Snackbar, Typography } from "@mui/material";
import moment from "moment";
import React, { useEffect, useRef, useState } from "react";

type SessionProps = {
  empresa: string;
};

const data = {
  empresa: "",
  nome: "",
  bandeira: "",
  tipo: "",
  numeroImo: "",
  caladoMaximo: "",
  caladoMinimo: "",
  conves1: "",
  conves2: "",
  cargaDeConves: "",
  aguaFornecimento: "",
  aguaConsumo: "",
  dieselFornecimento: "",
  dieselConsumo: "",
};

const valueList = [data];

const CadastroEam = () => {
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

  /*   const handleAddEmissao = () => {
    const addState = [...values, data];
    setvalues(addState);
  };

  const handleRemoveEmissao = () => {
    setvalues(values.slice(0, -1));
  }; */

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
            bandeira,
            tipo,
            numeroImo,
            caladoMaximo,
            caladoMinimo,
            conves1,
            conves2,
            cargaDeConves,
            aguaFornecimento,
            aguaConsumo,
            dieselFrnecimento,
            dieselConsumo,
          }: any,
          index: any
        ) => (
          <>
            {index != 0 && (
              <div
                style={{
                  borderTop: "1px solid rgba(000,000,000,0.2)",
                  margin: "20px 0",
                }}
              />
            )}
            <Box>
              <Grid container>
                <Grid xs={3}>
                  <CustomTextArea
                    width="90%"
                    label="Nome:"
                    placeholder=""
                    value={nome}
                    name="Nome"
                    onChange={(event) => handleChange(event, index)}
                  />
                </Grid>
                <Grid xs={3}>
                  <CustomTextArea
                    width="90%"
                    label="Empresa:"
                    placeholder=""
                    value={empresa}
                    name="empresa"
                    onChange={(event) => handleChange(event, index)}
                  />
                </Grid>
                <Grid xs={2}>
                  <CustomTextArea
                    width="90%"
                    label="Bandeira"
                    placeholder=""
                    value={bandeira}
                    name="bandeira"
                    onChange={(event) => handleChange(event, index)}
                  />
                </Grid>
                <Grid xs={2}>
                  <CustomTextArea
                    width="90%"
                    label="Tipo"
                    placeholder=""
                    value={tipo}
                    name="tipo"
                    onChange={(event) => handleChange(event, index)}
                  />
                </Grid>
                <Grid xs={2}>
                  <CustomTextArea
                    width="90%"
                    label="Numero imo"
                    placeholder=""
                    value={numeroImo}
                    name="numeroImo"
                    onChange={(event) => handleChange(event, index)}
                  />
                </Grid>
                <Grid xs={2}>
                  <CustomTextArea
                    width="90%"
                    label="Calado maximo"
                    placeholder=""
                    value={caladoMaximo}
                    name="caladoMaximo"
                    onChange={(event) => handleChange(event, index)}
                  />
                </Grid>
                <Grid xs={2}>
                  <CustomTextArea
                    width="90%"
                    label="Calado minimo"
                    placeholder=""
                    value={caladoMinimo}
                    name="caladoMinimo"
                    onChange={(event) => handleChange(event, index)}
                  />
                </Grid>
                <Grid xs={1}>
                  <CustomTextArea
                    width="90%"
                    label="Conves"
                    placeholder=""
                    value={conves1}
                    name="conves1"
                    onChange={(event) => handleChange(event, index)}
                  />
                </Grid>
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    margin: "40px 10px",
                  }}
                >
                  x
                </div>
                <Grid xs={1}>
                  <CustomTextArea
                    width="90%"
                    label="."
                    placeholder=""
                    value={conves2}
                    name="conves2"
                    onChange={(event) => handleChange(event, index)}
                  />
                </Grid>

                <Grid xs={2}>
                  <CustomTextArea
                    width="90%"
                    label="Carga de conves"
                    placeholder=""
                    value={cargaDeConves}
                    name="cargaDeConves"
                    onChange={(event) => handleChange(event, index)}
                  />
                </Grid>
                <Grid container>
                  <Grid m={1} xs={12}>
                    <Typography sx={{ fontSize: "16px" }}>Água:</Typography>
                  </Grid>
                  <Grid xs={2}>
                    <CustomTextArea
                      width="90%"
                      label="Fornecimento"
                      placeholder=""
                      value={aguaFornecimento}
                      name="aguaFornecimento"
                      onChange={(event) => handleChange(event, index)}
                    />
                  </Grid>
                  <Grid xs={2}>
                    <CustomTextArea
                      width="90%"
                      label="Consumo"
                      placeholder=""
                      value={aguaConsumo}
                      name="aguaConsumo"
                      onChange={(event) => handleChange(event, index)}
                    />
                  </Grid>
                </Grid>
                <Grid container>
                  <Grid m={1} xs={12}>
                    <Typography sx={{ fontSize: "16px" }}>Diesel:</Typography>
                  </Grid>
                  <Grid xs={2}>
                    <CustomTextArea
                      width="90%"
                      label="Fornecimento"
                      placeholder=""
                      value={dieselFrnecimento}
                      name="dieselFrnecimento"
                      onChange={(event) => handleChange(event, index)}
                    />
                  </Grid>
                  <Grid xs={2}>
                    <CustomTextArea
                      width="90%"
                      label="Consumo"
                      placeholder=""
                      value={dieselConsumo}
                      name="dieselConsumo"
                      onChange={(event) => handleChange(event, index)}
                    />
                  </Grid>
                </Grid>
              </Grid>
            </Box>
          </>
        )
      )}

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

export default CadastroEam;
