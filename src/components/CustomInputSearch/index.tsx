import SearchIcon from "@mui/icons-material/Search";

type CustomInputSearchProps = {
  placeholder?: string;
  fullWidth?: boolean;
  width?: string;
  fieldType?: string;
  value?: any;
  type?: string;
  onChange?: (value: any) => void;
};

const CustomInputSearch = ({
  placeholder,
  fullWidth,
  width,
  onChange,
  fieldType,
  type,
  value,
}: CustomInputSearchProps) => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        backgroundColor: "#3F474E",
        color: '#fff',
        height: 40,
        border: "1px solid rgba(255,255,255,0.2)",
        borderRadius: 5,
        paddingLeft: '10px'
      }}
    >
      <input
        style={{
          width: fullWidth ? "100%" : width ? width : "20%",
          outline: "none",
          border: "none",
          color: 'rgba(255,255,255,0.5)',
          fontSize: 14,
          fontWeight: 300,
          backgroundColor: "transparent",
        }}
        placeholder={placeholder}
        value={value}
        type={fieldType ? fieldType : "text"}
        maxLength={type === "CPF" ? 11 : 250}
        onChange={onChange}
      />
      <div style={{display: 'flex',padding: '0 10px', borderLeft: "1px solid rgba(255,255,255,0.2)"}}>
        <SearchIcon />
      </div>
    </div>
  );
};

export default CustomInputSearch;
