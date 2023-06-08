import CustomButton from "@/src/components/CustomButton";
import CustomSelect from "@/src/components/CustomSelect";
import CustomTextArea from "@/src/components/CustomTextArea";
import useSnackbar from "@/src/hooks/useSnackbar";
import { cpfmask } from "@/src/mists/cpfmask";
import { Box, Grid, Snackbar } from "@mui/material";
import React, { useEffect, useRef, useState } from "react";
import { useFieldArray, useForm } from "react-hook-form";

const dataEmpresas = [
  { name: "cadastro1" },
  { name: "cadastro2" },
  { name: "cadastro3" },
];

const data = {
  descricaoDaCarga: "",
  volume: "",
  valor: "",
  nDocumentoFiscal: "",
  dataCedo: Date(),
  dataTarde: Date(),
  origem: "",
  destino: "",
  centroDeCusto: "",
};

const valueList = [data];

const EmissaoR2CargaLiquida = () => {
  const [values, setvalues] = useState<any>(valueList);
  const [open, setOpen] = useState(false);
  const ref = useRef(null);

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

    ref.current?.scrollIntoView({ behavior: "smooth" });
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
            descricaoDaCarga,
            volume,
            valor,
            nDocumentoFiscal,
            dataCedo,
            dataTarde,
            origem,
            destino,
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
                  <CustomTextArea
                    width="98%"
                    label="Descrição da carga:"
                    placeholder=""
                    value={descricaoDaCarga}
                    name="descricaoDaCarga"
                    onChange={(event) => handleChange(event, index)}
                  />
                </Grid>
                <Grid xs={1}>
                  <CustomTextArea
                    width="90%"
                    label="Volume:"
                    placeholder="35 M"
                    value={volume}
                    name="volume"
                    onChange={(event) => handleChange(event, index)}
                  />
                </Grid>
                <Grid xs={1.5}>
                  <CustomTextArea
                    width="90%"
                    label="Valor:"
                    placeholder="R$ 0.000,00"
                    value={valor}
                    fieldType="text"
                    name="valor"
                    onChange={(event) => handleChange(event, index)}
                  />
                </Grid>
                <Grid xs={3}>
                  <CustomTextArea
                    width="90%"
                    label="N Documento Fiscal:"
                    placeholder=""
                    value={nDocumentoFiscal}
                    name="nDocumentoFiscal"
                    onChange={(event) => handleChange(event, index)}
                  />
                </Grid>
                <Grid xs={1.5}>
                  <CustomTextArea
                    width="90%"
                    label="Data mais cedo:"
                    placeholder=""
                    value={dataCedo}
                    name="dataCedo"
                    onChange={(event) => handleChange(event, index)}
                    fieldType="date"
                  />
                </Grid>
                <Grid xs={1.5}>
                  <CustomTextArea
                    width="90%"
                    label="Data mais tarde:"
                    placeholder=""
                    value={dataTarde}
                    name="dataTarde"
                    onChange={(event) => handleChange(event, index)}
                    fieldType="date"
                  />
                </Grid>
                <Grid xs={2}>
                  <CustomTextArea
                    width="90%"
                    label="Origem:"
                    placeholder=""
                    value={origem}
                    name="origem"
                    onChange={(event) => handleChange(event, index)}
                  />
                </Grid>
                <Grid xs={2}>
                  <CustomTextArea
                    width="90%"
                    label="Destino:"
                    placeholder=""
                    value={destino}
                    name="destino"
                    onChange={(event) => handleChange(event, index)}
                  />
                </Grid>
                <Grid xs={2.5}>
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
      <Grid ref={ref} xs={6}>
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

export default EmissaoR2CargaLiquida;
