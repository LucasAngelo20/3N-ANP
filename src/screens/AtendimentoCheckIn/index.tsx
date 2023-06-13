import CustomButton from "@/src/components/CustomButton";
import CustomSelect from "@/src/components/CustomSelect";
import CustomTextArea from "@/src/components/CustomTextArea";
import { cpfmask } from "@/src/mists/cpfmask";
import { Box, Grid } from "@mui/material";
import React, { useState } from "react";
import { styled } from "@mui/material/styles";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import moment from "moment";

const dataEmpresas = [
  { name: "cadastro1" },
  { name: "cadastro2" },
  { name: "cadastro3" },
];

const AtendimentoCheckIn = () => {
  const [empresa, setEmpresa] = useState(dataEmpresas[0].name);
  const [origem, setOrigem] = useState("");
  const [data, setData] = useState("");
  const [filteredRows, setFilteredRows] = useState<any>([]);

  const handleSaveInfos = () => {};

  return (
    <Box>
      <Grid container>
        <Grid xs={4}>
          <CustomTextArea
            width="90%"
            label="Data:"
            placeholder=""
            value={data}
            fieldType="date"
            onChange={(e) => setData(e.target.value)}
          />
        </Grid>
        <Grid xs={4}>
          <CustomTextArea
            width="90%"
            label="Origem:"
            placeholder=""
            value={origem}
            onChange={(e) => setOrigem(e.target.value)}
          />
        </Grid>
      </Grid>
      <Grid container>
        <Grid xs={6} minWidth="100%" display="flex">
          <CustomButton text="Pesquidar" onClick={() => handleSaveInfos()} />
        </Grid>
      </Grid>
    </Box>
  );
};

export default AtendimentoCheckIn;
