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
] as Array<RouteProps>;

export default routes;
