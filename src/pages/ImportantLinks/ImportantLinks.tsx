import { useState } from "react";

import { CgFileDocument } from "react-icons/cg";
import { BsFileEarmarkSpreadsheet } from "react-icons/bs";
import { FaWpforms } from "react-icons/fa";

import Footer from "../../components/Footer";
import Header from "../../components/Header";
import Collapse from "../../components/Collapse";

import {
  Controles,
  EnvioRelatorios,
  EnvioRelatório,
  Instrucoes,
  InstrucoesOrientacoes,
  MegaLotacao,
  MiniLotacao,
  OrientacoesInstrucoes,
  OrientacoesSoldados,
  OuvidoriaRondas,
  RondaIncentivo,
  ScriptInstrucao,
  ScriptOrientacoes,
  UnidadeCapacitacao,
  UnidadeLotacao,
  UnidadeRecrutamento,
} from "../../links";

import { Container, Content, Link } from "./ImportantLinksStyle";

export default function ImportantLinks() {
  const [unitsManualCollapse, setUnitsManualCollapse] = useState(false);
  const [othersManualCollapse, setOthersManualCollapse] = useState(false);
  const [spreadSheetCollapse, setSpreadSheetCollapse] = useState(false);
  const [formsCollapse, setFormsCollapse] = useState(false);

  return (
    <Container>
      <Header />

      <Content>
        <Collapse
          isOpened={unitsManualCollapse}
          onClick={() => setUnitsManualCollapse(!unitsManualCollapse)}
          titleButton="Manual das Unidades"
        >
          <Link href={UnidadeRecrutamento} target="_blank">
            <CgFileDocument />
            [Mr] Unidade de Recrutamento
          </Link>
          <Link href={UnidadeLotacao} target="_blank">
            <CgFileDocument />
            [Mr] Unidade de Lotação
          </Link>
          <Link href={UnidadeCapacitacao} target="_blank">
            <CgFileDocument />
            [Mr] Unidade de Capacitação
          </Link>
        </Collapse>

        <Collapse
          isOpened={othersManualCollapse}
          onClick={() => setOthersManualCollapse(!othersManualCollapse)}
          titleButton="Outros Manuais"
        >
          <Link href={ScriptOrientacoes} target="_blank">
            <CgFileDocument />
            [Mr] Script - Orientações ®
          </Link>
          <Link href={RondaIncentivo} target="_blank">
            <CgFileDocument />
            [Mr] Ronda de Incentivo ®
          </Link>
          <Link href={MegaLotacao} target="_blank">
            <CgFileDocument />
            [Mr] Manual da Mega-Lotação
          </Link>
          <Link href={MiniLotacao} target="_blank">
            <CgFileDocument />
            [Mr] Manual da Mini-Lotação
          </Link>
          <Link href={OrientacoesInstrucoes} target="_blank">
            <CgFileDocument />
            [Mr] Manual de Orientações e Instruções ®
          </Link>
          <Link href={InstrucoesOrientacoes} target="_blank">
            <CgFileDocument />
            Manual das Instruções e Orientações ®
          </Link>
          <Link href={ScriptInstrucao} target="_blank">
            <CgFileDocument />
            Script da Instrução 01 ®
          </Link>
        </Collapse>
      </Content>

      <Content>
        <Collapse
          isOpened={spreadSheetCollapse}
          onClick={() => setSpreadSheetCollapse(!spreadSheetCollapse)}
          titleButton="Planilhas"
        >
          <Link href={Controles} target="_blank">
            <BsFileEarmarkSpreadsheet />
            [Mr] Controles ®
          </Link>
          <Link href={EnvioRelatorios} target="_blank">
            <BsFileEarmarkSpreadsheet />
            [Mr] Envio de Relatórios ®
          </Link>
        </Collapse>

        <Collapse
          isOpened={formsCollapse}
          onClick={() => setFormsCollapse(!formsCollapse)}
          titleButton="Formulários"
        >
          <Link href={EnvioRelatório} target="_blank">
            <FaWpforms />
            [Mr] Envio de Relatório
          </Link>
          <Link href={OrientacoesSoldados} target="_blank">
            <FaWpforms />
            [Mr] Orientações aos Soldados ®
          </Link>
          <Link href={Instrucoes} target="_blank">
            <FaWpforms />
            [Mr] Instruções ®
          </Link>
          <Link href={OuvidoriaRondas} target="_blank">
            <FaWpforms />
            Ouvidoria de Rondas ®
          </Link>
        </Collapse>
      </Content>

      <Footer />
    </Container>
  );
}
