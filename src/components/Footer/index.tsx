import { BottomNavigation, useTheme } from "@mui/material";

const Footer = () => {
  const theme = useTheme();
  return (
    <>
      <BottomNavigation sx={{ width: 500 }}>teste</BottomNavigation>
      {/* <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        border: "1px solid rgba(000,000,000,0.2)",
        position: "absolute",
        bottom: 0,
        padding: 10,
        width: "100%",
      }}
    >
      <div>
        <p style={{ fontSize: "12px", color: "##6C757D", fontWeight: 700 }}>
          Copyright 2022{" "}
          <span style={{ color: "#007BFF" }}>Grupo Horizzon - Stratagis.</span>{" "}
          <span style={{ fontWeight: 400 }}>Todos os direitos reservados</span>
        </p>
      </div>

      <div>
        <p style={{ fontSize: "12px", color: "##6C757D", fontWeight: 700 }}>
          Version <span style={{fontWeight: 400}}>1.0.0</span>
        </p>
      </div>

    </div> */}
    </>
  );
};

export default Footer;
