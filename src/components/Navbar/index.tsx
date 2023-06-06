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
import LogoutIcon from "@mui/icons-material/Logout";

import Collapse from "@mui/material/Collapse";

import Link from "next/link";

import { ExpandLess } from "@mui/icons-material";
import routes from "@/src/routes/pages.routes";
import { makeStyles } from "@mui/styles";
import { useRouter } from "next/router";
import Footer from "../Footer";

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
    background: "#343A40",
    color: "white",
    overflow: "hidden",
  },
  paperHeader: {
    background: "#fff",
    color: "#343A40",
  },
});

export default function Navbar({ children }: any) {
  const [open, setOpen] = React.useState(false);
  const [openCollapse, setOpenCollapse] = React.useState(false);

  const router = useRouter();

  const handleDrawerOpen = () => {
    setOpen(!open);
  };

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
            <div
              style={{
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "space-between",
              }}
            >
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
                onClick={() => console.log("Logout")}
                edge="start"
                sx={{ mr: 2 }}
              >
                <LogoutIcon />
              </IconButton>
            </div>
          </div>
        </Toolbar>
        <div
          style={{
            backgroundColor: "#6C757D",
            height: 40,
            display: "flex",
            alignItems: "center",
            padding: "10px",
          }}
        >
          <Typography variant="body2" color="secondary">
            {router.route}
          </Typography>
        </div>
      </AppBar>
      <Drawer
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          "& .MuiDrawer-paper": {
            width: drawerWidth,
            boxSizing: "border-box",
            background: "#343a3f",
            color: "#fff",
          },
        }}
        variant="persistent"
        anchor="left"
        open={open}
      >
        <DrawerHeader
          sx={{
            backgroundColor: "#fff",
            color: "#343A40",
          }}
        >
          <Link href="/">teste logo</Link>
        </DrawerHeader>
        <div
          style={{
            height: 50,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            backgroundColor: "#343A40",
          }}
        >
          <Typography variant="body2" color="secondary">
            Lucas Gomes Angelo
          </Typography>
        </div>

        <Divider />
        <List>
          {routes.map((menuItem, index) => (
            <>
              {menuItem.collapsed ? (
                <>
                  <ListItem
                    key={index}
                    onClick={() => setOpenCollapse(!openCollapse)}
                  >
                    <div
                      style={{
                        display: "flex",
                        alignItems: "center",
                        marginRight: 5,
                      }}
                    >
                      {menuItem.icon}
                    </div>
                    <ListItemText key={index} primary={menuItem.name} />
                    {openCollapse ? <ExpandLess /> : <ExpandMoreIcon />}
                  </ListItem>
                  <Collapse in={openCollapse}>
                    {menuItem.collapse &&
                      menuItem?.collapse.map((item, index2) => (
                        <Link
                          style={{ textDecoration: "none", color: "inherit" }}
                          key={index2}
                          href={item.to}
                          passHref
                        >
                          <ListItem key={index2} style={{ marginLeft: 10 }}>
                            <div
                              style={{
                                display: "flex",
                                alignItems: "center",
                                marginRight: 5,
                              }}
                            >
                              {item.icon}
                            </div>
                            <ListItemText key={index2} primary={item.name} />
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
                    <div
                      style={{
                        display: "flex",
                        alignItems: "center",
                        marginRight: 5,
                      }}
                    >
                      {menuItem.icon}
                    </div>
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
        <div style={{ height: 40 }} />
        {children}
      </Main>
    </Box>
  );
}
