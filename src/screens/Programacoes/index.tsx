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

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  "&:nth-of-type(odd)": {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  "&:last-child td, &:last-child th": {
    border: 0,
  },
}));

function createData(
  RT: string,
  nome: string,
  cpf: string,
  origem: string,
  data: string
) {
  return { RT, nome, cpf, origem, data };
}

const rows = [
  createData(
    "0001",
    "Lucas Gomes Angelo",
    "000.000.000-00",
    "PTG",
    "20/10/2023"
  ),
  createData(
    "0002",
    "Lucas Gomes Angelo",
    "000.000.000-00",
    "GVC",
    "2023-10-20"
  ),
  createData(
    "0003",
    "Lucas Gomes Angelo",
    "000.000.000-00",
    "PTG",
    "22/10/2023"
  ),
  createData(
    "0004",
    "Lucas Gomes Angelo",
    "000.000.000-00",
    "PTG",
    "2023-10-20"
  ),
  createData(
    "0005",
    "Lucas Gomes Angelo",
    "000.000.000-00",
    "PTG",
    "2023-10-20"
  ),
];  

const dataEmpresas = [
  { name: "cadastro1" },
  { name: "cadastro2" },
  { name: "cadastro3" },
];

const Programacoes = () => {
  const [empresa, setEmpresa] = useState(dataEmpresas[0].name);
  const [origem, setOrigem] = useState("");
  const [data, setData] = useState("");
  const [filteredRows, setFilteredRows] = useState<any>([]);

  const handleSaveInfos = () => {
    if (origem.length > 0 && data != "") {
      const teste = rows.filter((row) => {
        return row.origem.toLowerCase().includes(origem.toLowerCase());
      });
      const teste2 = teste.filter((row) => {
        return moment(row.data.toLowerCase()).isSame(data.toLowerCase());
      });

      setFilteredRows(teste2);
      console.log(teste2);
      console.log("caiu aqui 2");
    } else if (origem.length > 0 && data == "") {
      console.log('aqui')
      const teste = rows.filter((row) => {
        return row.origem.toLowerCase().includes(origem.toLowerCase());
      });
      setFilteredRows(teste);
      console.log(teste);
    } else if (origem.length <= 0 && data != "") {
      const teste = rows.filter((row) => {
        return row.data.includes(data)
      });
      console.log("caiu aqui 3");

      setFilteredRows(teste);
      console.log(teste);
    } else {
      setFilteredRows(rows);
    }
  };

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
      <Grid container>
        <TableContainer component={Paper}>
          <Table sx={{ minWidth: 700 }} aria-label="customized table">
            <TableHead>
              <TableRow>
                <StyledTableCell align="left">RT</StyledTableCell>
                <StyledTableCell align="left">NOME</StyledTableCell>
                <StyledTableCell align="left">CPF</StyledTableCell>
                <StyledTableCell align="left">ORIGEM</StyledTableCell>
                <StyledTableCell align="left">EAM</StyledTableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {filteredRows.map((row) => (
                <StyledTableRow key={row.RT}>
                  <StyledTableCell align="left">{row.RT}</StyledTableCell>
                  <StyledTableCell align="left">{row.nome}</StyledTableCell>
                  <StyledTableCell align="left">{row.cpf}</StyledTableCell>
                  <StyledTableCell align="left">{row.origem}</StyledTableCell>
                  <StyledTableCell align="left">
                    {" "}
                    <CustomSelect
                      width="100%"
                      label=""
                      data={dataEmpresas}
                      value={empresa}
                      margin="0px 0px"
                      onChange={(e) => setEmpresa(e.target.value)}
                    />
                  </StyledTableCell>
                </StyledTableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Grid>
    </Box>
  );
};

export default Programacoes;
