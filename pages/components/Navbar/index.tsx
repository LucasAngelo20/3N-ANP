import * as React from "react";
import { styled, useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import CssBaseline from "@mui/material/CssBaseline";
import MuiAppBar, { AppBarProps as MuiAppBarProps } from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import List from "@mui/material/List";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import LogoutIcon from '@mui/icons-material/Logout';

import Collapse from "@mui/material/Collapse";

import Link from "next/link";

import { ExpandLess } from "@mui/icons-material";
import routes from "@/routes/pages.routes";
import { makeStyles } from "@mui/styles";
import { useRouter } from "next/router";



const drawerWidth = 240;

const Main = styled("main", { shouldForwardProp: (prop) => prop !== "open" })<{
  open?: boolean;
}>(({ theme, open }) => ({
  flexGrow: 1,
  padding: theme.spacing(3),
  transition: theme.transitions.create("margin", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  marginLeft: `-${drawerWidth}px`,
  ...(open && {
    transition: theme.transitions.create("margin", {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
    marginLeft: 0,
  }),
}));

interface AppBarProps extends MuiAppBarProps {
  open?: boolean;
}

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== "open",
})<AppBarProps>(({ theme, open }) => ({
  transition: theme.transitions.create(["margin", "width"], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: `${drawerWidth}px`,
    transition: theme.transitions.create(["margin", "width"], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

const DrawerHeader = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
  justifyContent: "flex-end",
}));

const useStyles = makeStyles({
  paper: {
    background: '#343A40',
    color: 'white'
  },
  paperHeader: {
    background: '#fff',
    color: '#343A40'
  }
});

export default function Navbar({ children }: any) {
  const [open, setOpen] = React.useState(false);
  const [openCollapse, setOpenCollapse] = React.useState(false);

  const router = useRouter()


  const handleDrawerOpen = () => {
    setOpen(!open);
  };

 console.log(router)
  const styles = useStyles();
  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <AppBar color="secondary" position="fixed" open={open}>
        <Toolbar>
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "space-between",
              width: "100%",
            }}
          >
            <div  style={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "space-between",
             
            }}>
              <IconButton
                color="primary"
                aria-label="open drawer"
                onClick={handleDrawerOpen}
                edge="start"
                sx={{ mr: 2 }}
              >
                <MenuIcon />
              </IconButton>
              <Typography variant="body1" noWrap component="div">
                Home
              </Typography>
            </div>
            <div>
              <IconButton
                color="primary"
                aria-label="open drawer"
                onClick={() => console.log('Logout')}
                edge="start"
                sx={{ mr: 2 }}
              >
                <LogoutIcon />
              </IconButton>
            </div>
          </div>
        </Toolbar>
      <div>

      </div>
      </AppBar>
      <Drawer
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          "& .MuiDrawer-paper": {
            width: drawerWidth,
            boxSizing: "border-box",
          },
        }}
        classes={{paper: styles.paper}}
        variant="persistent"
        anchor="left"
        open={open}
      >
        <DrawerHeader sx={{
          backgroundColor: '#fff',
          color: '#343A40'
        }} >
         teste logo
        </DrawerHeader>
        <Divider />
        <List>
          {routes.map((menuItem, index) => (
            <>
              {menuItem.collapsed ? (
                <>
                  <ListItem key={index} onClick={() => setOpenCollapse(!openCollapse)}>
                    {menuItem.icon}
                    <ListItemText primary={menuItem.name} />
                    {openCollapse ? <ExpandLess /> : <ExpandMoreIcon />}
                  </ListItem>
                  <Collapse in={openCollapse}>
                    {menuItem.collapse &&
                      menuItem?.collapse.map((item) => (
                        <Link
                          style={{ textDecoration: "none", color: "inherit" }}
                          key={index}
                          href={item.to}
                          passHref
                        >
                          <ListItem style={{ marginLeft: 10 }}>
                            {item.icon}
                            <ListItemText primary={item.name} />
                          </ListItem>
                        </Link>
                      ))}
                  </Collapse>
                </>
              ) : (
                <Link
                  style={{ textDecoration: "none", color: "inherit" }}
                  key={index}
                  href={menuItem.to}
                  passHref
                >
                  <ListItem>
                    {menuItem.icon}
                    <ListItemText primary={menuItem.name} />
                  </ListItem>
                </Link>
              )}
            </>
          ))}
        </List>
      </Drawer>
      <Main open={open}>
        <DrawerHeader />
        {children}
      </Main>
    </Box>
  );
}
