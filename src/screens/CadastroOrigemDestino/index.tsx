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
  local: "",
  latitude: "",
  longitude: "",
};

const valueList = [data];

const CadastroOrigemDestino = () => {
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
      {values.map(({ local, latitude, longitude }: any, index: any) => (
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
              <Grid xs={6}>
                <CustomTextArea
                  width="98.5%"
                  label="Local:"
                  placeholder=""
                  value={local}
                  name="local"
                  onChange={(event) => handleChange(event, index)}
                />
              </Grid>
              <Grid xs={1}>
                <CustomTextArea
                  width="90%"
                  label="Latidude:"
                  placeholder="0000"
                  value={latitude}
                  name="latitude"
                  onChange={(event) => handleChange(event, index)}
                />
              </Grid>
              <Grid xs={1}>
                <CustomTextArea
                  width="90%"
                  label="Longitude"
                  placeholder="0000"
                  value={longitude}
                  name="longitude"
                  onChange={(event) => handleChange(event, index)}
                />
              </Grid>
            </Grid>
          </Box>
        </>
      ))}

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

export default CadastroOrigemDestino;
