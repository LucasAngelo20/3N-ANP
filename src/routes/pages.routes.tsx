import MenuIcons from "@/src/components/MenuIcons";

export type RouteItemProps = {
  name: string;
  to: string;
  icon?: React.ReactNode;
};

export type RouteProps = {
  name: string;
  to: string;
  icon?: React.ReactNode;
  collapsed: boolean;
  collapse?: Array<RouteItemProps>;
};
const routes = [
  {
    name: "Cadastro pax",
    to: "/cadastro-pax",
    icon: <MenuIcons iconNumber={1} />,
    collapsed: true,
    collapse: [
      {
        name: "Empresa",
        to: "cadastro-pax",
        icon: <MenuIcons iconNumber={1} />,
      },
      {
        name: "Terceirizada",
        to: "cadastro-pax-terceirizada",
        icon: <MenuIcons iconNumber={1} />,
      },
    ],
  },
  {
    name: "Emissão R1 Pax",
    to: "/emissao-r1-pax",
    icon: <MenuIcons iconNumber={1} />,
    collapsed: true,
    collapse: [
      {
        name: "Empresa",
        to: "emissao-r1-pax",
        icon: <MenuIcons iconNumber={1} />,
      },
      {
        name: "Terceirizada",
        to: "emissao-r1-pax-terceirizada",
        icon: <MenuIcons iconNumber={1} />,
      },
    ],
  },
  {
    name: "Emissão R2",
    to: "/emissao-r2",
    icon: <MenuIcons iconNumber={1} />,
    collapsed: true,
    collapse: [
      {
        name: "Carga seca",
        to: "emissao-r2-carga-seca",
        icon: <MenuIcons iconNumber={1} />,
      },
      {
        name: "Carga liquida",
        to: "emissao-r2-carga-liquida",
        icon: <MenuIcons iconNumber={1} />,
      },
    ],
  },
  {
    name: "Cadastro origem/destino",
    to: "/cadastro-origem-destino",
    icon: <MenuIcons iconNumber={1} />,
    collapsed: false,
    
  },
  {
    name: "Cadastro EAM",
    to: "/cadastro-eam",
    icon: <MenuIcons iconNumber={1} />,
    collapsed: false,
    
  },
  {
    name: "Programacoes",
    to: "/programacoes",
    icon: <MenuIcons iconNumber={1} />,
    collapsed: false,
    
  },
  {
    name: "Atendimento check-in",
    to: "/atendimento-check-in",
    icon: <MenuIcons iconNumber={1} />,
    collapsed: false,
    
  },
] as Array<RouteProps>;

export default routes;
