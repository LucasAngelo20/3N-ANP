import CustomButton from "@/src/components/CustomButton";
import CustomSelect from "@/src/components/CustomSelect";
import CustomTextArea from "@/src/components/CustomTextArea";
import useSnackbar from "@/src/hooks/useSnackbar";
import { cpfmask } from "@/src/mists/cpfmask";
import { Box, Grid, Snackbar } from "@mui/material";
import React, { useEffect, useRef, useState } from "react";

const dataEmpresas = [
  { name: "cadastro1" },
  { name: "cadastro2" },
  { name: "cadastro3" },
];

type SessionProps = {
  empresa: string;
};

const EmissaoR2CargaSeca = () => {
  const [empresa, setEmpresa] = useState(dataEmpresas[0].name);
  const [dataCedo, setDataCedo] = useState();
  const [dataTarde, setDataTarde] = useState();
  const [destino, setDestino] = useState("");
  const [descricaoDaCarga, setDescricaoDaCarga] = useState("");
  const [comprimento, setComprimento] = useState("");
  const [largura, setLargura] = useState("");
  const [altura, setAltura] = useState("");
  const [peso, setPeso] = useState("");
  const [valor, setValor] = useState("");
  const [NDocumetoFiscal, setNDocumentoFiscal] = useState("");
  const [centroDeCusto, setCentroDeCusto] = useState("");
  const [origem, setOrigem] = useState("");
  const [open, setOpen] = useState(false);
  const [contadorEmissao, setContadorEmissao] = useState<Array<SessionProps>>(
    []
  );
  const ref = useRef(null);

  const [Info, setInfo] = useState<Array<SessionProps>>([]);

  const handleSaveInfos = () => {
    console.log("Informações salvas: ");
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

    ref.current?.scrollIntoView({ behavior: "smooth" });
  };

  const handleRemoveEmissao = () => {
    if (contadorEmissao.length === 1) {
      setContadorEmissao([]);
    } else if (contadorEmissao.length > 1) {
      setContadorEmissao(contadorEmissao.slice(0, -1));
    }
    console.log("Adicionado", contadorEmissao);
    ref.current?.scrollIntoView({ behavior: "smooth" });
  };
  return (
    <>
      <Box>
        <Grid container>
          <Grid xs={6}>
            <CustomTextArea
              width="90%"
              label="Descrição da carga:"
              placeholder=""
              value={descricaoDaCarga}
              onChange={(e) => setDescricaoDaCarga(e.target.value)}
            />
          </Grid>
          <Grid xs={1}>
            <CustomTextArea
              width="90%"
              label="Comprimento:"
              placeholder="35 M"
              value={comprimento}
              type="CPF"
              onChange={(e) => setComprimento(e.target.value)}
            />
          </Grid>
          <Grid xs={1}>
            <CustomTextArea
              width="90%"
              label="Largura:"
              placeholder="35 M"
              value={largura}
              onChange={(e) => setLargura(e.target.value)}
            />
          </Grid>
          <Grid xs={1}>
            <CustomTextArea
              width="90%"
              label="Altura:"
              placeholder="35 M"
              value={altura}
              onChange={(e) => setAltura(e.target.value)}
            />
          </Grid>
          <Grid xs={1}>
            <CustomTextArea
              width="90%"
              label="Peso:"
              placeholder="35 M"
              value={peso}
              onChange={(e) => setPeso(e.target.value)}
            />
          </Grid>
          <Grid xs={1.5}>
            <CustomTextArea
              width="100%"
              label="Valor:"
              placeholder="R$ 0.000,00"
              value={valor}
              fieldType="text"
              onChange={(e) => setValor(e.target.value)}
            />
          </Grid>
          <Grid xs={2.5}>
            <CustomTextArea
              width="90%"
              label="N Documento Fiscal:"
              placeholder=""
              value={NDocumetoFiscal}
              onChange={(e) => setNDocumentoFiscal(e.target.value)}
            />
          </Grid>
          <Grid xs={1.5}>
            <CustomTextArea
              width="90%"
              label="Data mais cedo:"
              placeholder=""
              value={dataCedo}
              onChange={(e) => setDataCedo(e.target.value)}
              fieldType="date"
            />
          </Grid>
          <Grid xs={1.5}>
            <CustomTextArea
              width="90%"
              label="Data mais tarde:"
              placeholder=""
              value={dataTarde}
              onChange={(e) => setDataTarde(e.target.value)}
              fieldType="date"
            />
          </Grid>
          <Grid xs={2}>
            <CustomTextArea
              width="90%"
              label="Origem:"
              placeholder=""
              value={origem}
              onChange={(e) => setOrigem(e.target.value)}
            />
          </Grid>
          <Grid xs={2}>
            <CustomTextArea
              width="90%"
              label="Destino:"
              placeholder=""
              value={destino}
              onChange={(e) => setDestino(e.target.value)}
            />
          </Grid>
          <Grid xs={2.5}>
            <CustomTextArea
              width="90%"
              label="Centro de Custo:"
              placeholder=""
              value={centroDeCusto}
              onChange={(e) => setCentroDeCusto(e.target.value)}
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
                <CustomTextArea
                  width="90%"
                  label="Descrição da carga:"
                  placeholder=""
                  value={descricaoDaCarga}
                  onChange={(e) => setDescricaoDaCarga(e.target.value)}
                />
              </Grid>
              <Grid xs={1}>
                <CustomTextArea
                  width="90%"
                  label="Comprimento:"
                  placeholder="35 M"
                  value={comprimento}
                  type="CPF"
                  onChange={(e) => setComprimento(e.target.value)}
                />
              </Grid>
              <Grid xs={1}>
                <CustomTextArea
                  width="90%"
                  label="Largura:"
                  placeholder="35 M"
                  value={largura}
                  onChange={(e) => setLargura(e.target.value)}
                />
              </Grid>
              <Grid xs={1}>
                <CustomTextArea
                  width="90%"
                  label="Altura:"
                  placeholder="35 M"
                  value={altura}
                  onChange={(e) => setAltura(e.target.value)}
                />
              </Grid>
              <Grid xs={1}>
                <CustomTextArea
                  width="90%"
                  label="Peso:"
                  placeholder="35 M"
                  value={peso}
                  onChange={(e) => setPeso(e.target.value)}
                />
              </Grid>
              <Grid xs={1.5}>
                <CustomTextArea
                  width="100%"
                  label="Valor:"
                  placeholder="R$ 0.000,00"
                  value={valor}
                  fieldType="text"
                  onChange={(e) => setValor(e.target.value)}
                />
              </Grid>
              <Grid xs={2.5}>
                <CustomTextArea
                  width="90%"
                  label="N Documento Fiscal:"
                  placeholder=""
                  value={NDocumetoFiscal}
                  onChange={(e) => setNDocumentoFiscal(e.target.value)}
                />
              </Grid>
              <Grid xs={1.5}>
                <CustomTextArea
                  width="90%"
                  label="Data mais cedo:"
                  placeholder=""
                  value={dataCedo}
                  onChange={(e) => setDataCedo(e.target.value)}
                  fieldType="date"
                />
              </Grid>
              <Grid xs={1.5}>
                <CustomTextArea
                  width="90%"
                  label="Data mais tarde:"
                  placeholder=""
                  value={dataTarde}
                  onChange={(e) => setDataTarde(e.target.value)}
                  fieldType="date"
                />
              </Grid>
              <Grid xs={2}>
                <CustomTextArea
                  width="90%"
                  label="Origem:"
                  placeholder=""
                  value={origem}
                  onChange={(e) => setOrigem(e.target.value)}
                />
              </Grid>
              <Grid xs={2}>
                <CustomTextArea
                  width="90%"
                  label="Destino:"
                  placeholder=""
                  value={destino}
                  onChange={(e) => setDestino(e.target.value)}
                />
              </Grid>
              <Grid xs={2.5}>
                <CustomTextArea
                  width="90%"
                  label="Centro de Custo:"
                  placeholder=""
                  value={centroDeCusto}
                  onChange={(e) => setCentroDeCusto(e.target.value)}
                />
              </Grid>
            </Grid>
          </Box>
        </>
      ))}

      <Grid container >
        <Grid xs={2}>
          <CustomButton text="Adicionar" onClick={() => handleAddEmissao()} />
        </Grid>
        <Grid xs={2}>
          <CustomButton display={contadorEmissao.length == 0} text="Remover" onClick={() => handleRemoveEmissao()} />
        </Grid>
      </Grid>
      <Grid ref={ref} xs={6}>
        <CustomButton  text="Salvar" onClick={() => handleSaveInfos()} />
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

export default EmissaoR2CargaSeca;
