import InfoIcon from "@mui/icons-material/Info";
import MailIcon from "@mui/icons-material/Mail";
import SpeedIcon from '@mui/icons-material/Speed';
import ContactMailIcon from "@mui/icons-material/ContactMail";

type MenuIconsProps = {
  iconNumber?: number;
};

const icons = (number: any) => {
  switch (number) {
    case 1:
      return <SpeedIcon />;
    case 2:
      return <InfoIcon />;
    case 3:
      return <ContactMailIcon />;
    case 4:
      return <MailIcon />;
  }
};

const MenuIcons = ({ iconNumber }: MenuIconsProps) => {
  return <>{icons(iconNumber)}</>;
};

export default MenuIcons;
