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

const dataTipo = [
  { name: "pax1" },
  { name: "pax2" },
  { name: "pax3" },
];

const AtendimentoCheckIn = () => {
  const [empresa, setEmpresa] = useState(dataTipo[0].name);
  const [origem, setOrigem] = useState("");
  const [data, setData] = useState("");
  const [eam, setEam] = useState<any>([]);

  const handleSaveInfos = () => {};

  return (
    <Box>
      <Grid container>
        <Grid xs={6}>
          <CustomSelect
            width="59.2%"
            label="Tipo:"
            data={dataTipo}
            value={empresa}
            onChange={(e) => setEmpresa(e.target.value)}
          />
        </Grid>
      </Grid>
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
        <Grid xs={4}>
          <CustomTextArea
            width="90%"
            label="EAM:"
            placeholder=""
            value={eam}
            onChange={(e) => setEam(e.target.value)}
          />
        </Grid>
      </Grid>
      <Grid container>
        <Grid xs={6} minWidth="100%" display="flex">
          <CustomButton text="Relatorio" onClick={() => handleSaveInfos()} />
          <CustomButton text="Conferir" onClick={() => handleSaveInfos()} />
          <CustomButton text="Exportar" onClick={() => handleSaveInfos()} />
        </Grid>
      </Grid>
    </Box>
  );
};

export default AtendimentoCheckIn;
