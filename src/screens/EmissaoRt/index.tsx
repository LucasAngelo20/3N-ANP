import CustomButton from "@/src/components/CustomButton";
import CustomSelect from "@/src/components/CustomSelect";
import CustomTextArea from "@/src/components/CustomTextArea";
import useSnackbar from "@/src/hooks/useSnackbar";
import { cpfmask } from "@/src/mists/cpfmask";
import { Box, Grid, Snackbar } from "@mui/material";
import moment from "moment";
import React, { useEffect, useState } from "react";

const data = [
  { name: "cadastro1" },
  { name: "cadastro2" },
  { name: "cadastro3" },
];

type SessionProps = {
  empresa: string;
};

const EmissaoRt = () => {
  const [empresa, setEmpresa] = useState(data[0].name);
  const [cpf, setCpf] = useState("");
  const [nome, setNome] = useState("");
  const [contrato, setContrato] = useState("");
  const [funcao, setFuncao] = useState("");
  const [dataInicio, setDataInicio] = useState();
  const [dataTermino, setDataTermino] = useState();
  const [prazo, setPrazo] = useState(0);
  const [open, setOpen] = useState(false);
  const [contadorEmissao, setContadorEmissao] = useState<Array<SessionProps>>(
    []
  );
  const [Info, setInfo] = useState<Array<SessionProps>>([]);

  const { showSnackbar } = useSnackbar();

  useEffect(() => {
    setPrazo(moment(dataTermino).diff(dataInicio, "days"));
  }, [dataInicio, dataTermino]);

  const handleSaveInfos = () => {
    console.log("Informações salvas: ");
    console.log(empresa);
    console.log(nome);
    console.log(funcao);
    console.log(contrato);
    console.log(cpf);
    console.log(dataInicio);
    console.log(dataTermino);
    console.log(moment(dataInicio).diff(dataTermino, "days"));
    setInfo([
      ...contadorEmissao,
      {
        empresa: empresa,
      },
    ]);
   setOpen(true);
  };

  const handleAddEmissao = () => {
    if (contadorEmissao.length < 0) {
      setContadorEmissao([
        {
          empresa: empresa,
        },
      ]);
    } else {
      setContadorEmissao([
        ...contadorEmissao,
        {
          empresa: empresa,
        },
      ]);
    }
    console.log("Adicionado", contadorEmissao);
  };
  const handleRemoveEmissao = () => {
    if (contadorEmissao.length === 1) {
      setContadorEmissao([]);
    } else if (contadorEmissao.length > 0) {
      setContadorEmissao((prev) => prev.slice(-1));
    }
    console.log("Adicionado", contadorEmissao);
  };
  return (
    <>
      <Box>
        <Grid container>
          <Grid xs={6}>
            <CustomSelect
              width="44%"
              label="Empresa:"
              data={data}
              value={empresa}
              onChange={(e) => setEmpresa(e.target.value)}
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
              onChange={(e) => setNome(e.target.value)}
            />
          </Grid>
          <Grid xs={3}>
            <CustomTextArea
              width="90%"
              label="CPF:"
              placeholder="000.000.000-00"
              value={cpfmask(cpf)}
              type="CPF"
              onChange={(e) => setCpf(e.target.value)}
            />
          </Grid>
          <Grid xs={3}>
            <CustomTextArea
              width="90%"
              label="Numero do contrato:"
              placeholder="00000"
              value={contrato}
              onChange={(e) => setContrato(e.target.value)}
            />
          </Grid>
          <Grid xs={3}>
            <CustomTextArea
              width="90%"
              label="Função:"
              placeholder="00000"
              value={funcao}
              onChange={(e) => setFuncao(e.target.value)}
            />
          </Grid>
          <Grid xs={3}>
            <CustomTextArea
              width="90%"
              label="Início:"
              placeholder="00/00/0000"
              value={dataInicio}
              fieldType="date"
              onChange={(e) => setDataInicio(e.target.value)}
            />
          </Grid>
          <Grid xs={3}>
            <CustomTextArea
              width="90%"
              label="Termino:"
              placeholder="00/00/0000"
              value={dataTermino}
              onChange={(e) => setDataTermino(e.target.value)}
              fieldType="date"
            />
          </Grid>
          <Grid xs={3}>
            <CustomTextArea
              width="90%"
              label="Prazo contratual:"
              placeholder="20 DIAS"
              value={`${prazo} dias`}
              onChange={(e) => setPrazo(e.target.value)}
            />
          </Grid>
        </Grid>
      </Box>
      {contadorEmissao.map((item) => (
        <>
          <div
            style={{
              borderTop: "1px solid rgba(000,000,000,0.2)",
              margin: "20px 0",
            }}
          />
          <Box>
            <Grid container>
              <Grid xs={6}>
                <CustomSelect
                  width="44%"
                  label="Empresa:"
                  data={data}
                  value={empresa}
                  onChange={(e) => setEmpresa(e.target.value)}
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
                  onChange={(e) => setNome(e.target.value)}
                />
              </Grid>
              <Grid xs={3}>
                <CustomTextArea
                  width="90%"
                  label="CPF:"
                  placeholder="000.000.000-00"
                  value={cpfmask(cpf)}
                  type="CPF"
                  onChange={(e) => setCpf(e.target.value)}
                />
              </Grid>
              <Grid xs={3}>
                <CustomTextArea
                  width="90%"
                  label="Numero do contrato:"
                  placeholder="00000"
                  value={contrato}
                  onChange={(e) => setContrato(e.target.value)}
                />
              </Grid>
              <Grid xs={3}>
                <CustomTextArea
                  width="90%"
                  label="Função:"
                  placeholder="00000"
                  value={funcao}
                  onChange={(e) => setFuncao(e.target.value)}
                />
              </Grid>
              <Grid xs={3}>
                <CustomTextArea
                  width="90%"
                  label="Início:"
                  placeholder="00/00/0000"
                  value={dataInicio}
                  fieldType="date"
                  onChange={(e) => setDataInicio(e.target.value)}
                />
              </Grid>
              <Grid xs={3}>
                <CustomTextArea
                  width="90%"
                  label="Termino:"
                  placeholder="00/00/0000"
                  value={dataTermino}
                  onChange={(e) => setDataTermino(e.target.value)}
                  fieldType="date"
                />
              </Grid>
              <Grid xs={3}>
                <CustomTextArea
                  width="90%"
                  label="Prazo contratual:"
                  placeholder="20 DIAS"
                  value={`${prazo} dias`}
                  onChange={(e) => setPrazo(e.target.value)}
                />
              </Grid>
            </Grid>
          </Box>
        </>
      ))}

      <Grid container>
        <Grid xs={2}>
          <CustomButton text="Adicionar" onClick={() => handleAddEmissao()} />
        </Grid>
        <Grid xs={2}>
          <CustomButton text="Remover" onClick={() => handleRemoveEmissao()} />
        </Grid>
      </Grid>
        <Grid xs={6}>
          <CustomButton text="Salvar" onClick={() => handleSaveInfos()} />
        </Grid>
      <Snackbar open={open} onClose={() => setOpen(false)} message="Salvo com sucesso!" autoHideDuration={3000}/>
    </>
  );
};

export default EmissaoRt;
