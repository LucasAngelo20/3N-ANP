import MenuIcons from "components/MenuIcons";

export type RouteItemProps = {
  name: string;
  to: string;
  icon?: React.ReactNode;
}

export type RouteProps = {
  name: string;
  to: string;
  icon?: React.ReactNode;
  collapsed: boolean;
  collapse?: Array<RouteItemProps>;
}
const routes = [
  {
    name: "Home",
    to: "/",
    icon: <MenuIcons iconNumber={1} />,
    collapsed: true,
    collapse: [
      { name: "About", to: "/about", icon: <MenuIcons iconNumber={1} /> },
      { name: "Contact", to: "/contact", icon: <MenuIcons iconNumber={1} /> },
    ],
  },
  {
    name: "About",
    to: "/about",
    icon: <MenuIcons iconNumber={1} />,
    collapsed: false,
  },
] as Array<RouteProps>

export default routes
