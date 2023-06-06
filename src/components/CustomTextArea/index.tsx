import { TextField } from "@mui/material";

type CustomTextAreaProps = {
  label: string;
  placeholder?: string;
  fullWidth?: boolean;
  width?: string
  onChange?: (value: any) => void;
};

const CustomTextArea = ({
  label,
  placeholder,
  fullWidth,
  width,
  onChange
}: CustomTextAreaProps) => {
  return (
    <div style={{ display: "flex", flexDirection: "column", margin: 10 }}>
      <span style={{ fontSize: 14, fontWeight: 300, marginBottom: 5 }}>{label}</span>
      <input
        style={{
          width: fullWidth ? "100%" : width ? width : '20%',
          height: 30,
          borderRadius: 5,
          outline: "none",
          border: "1px solid rgba(000,000,000,0.2)",
          padding: "20px 10px",
          fontSize: 14,
          fontWeight: 300
        }}
        placeholder={placeholder}
        type="text"
        onChange={onChange}
      />
    </div>
  );
};

export default CustomTextArea;
