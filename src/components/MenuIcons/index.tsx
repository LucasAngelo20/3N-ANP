import InboxIcon from "@mui/icons-material/MoveToInbox";
import MailIcon from "@mui/icons-material/Mail";
import InfoIcon from "@mui/icons-material/Info";
import ContactMailIcon from "@mui/icons-material/ContactMail";

type MenuIconsProps = {
  iconNumber?: number;
};

const icons = (number: any) => {
  switch (number) {
    case 1:
      return <InboxIcon />;
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
