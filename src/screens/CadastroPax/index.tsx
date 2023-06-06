import CustomTextArea from "@/src/components/CustomTextArea";
import { Box, Grid } from "@mui/material";
import React from "react";

const CadastroPax = () => {
  return (
    <Box>
      <Grid container>
        <Grid xs={6}>
          <CustomTextArea
            width="60%"
            label="Nome:"
            placeholder="Digite o seu nome"
          />
        </Grid>
      </Grid>
      <Grid container>
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
