import { cpfmask } from "@/src/mists/cpfmask";
import { TextField } from "@mui/material";
import { type } from "os";

type CustomTextAreaProps = {
  label: string;
  placeholder?: string;
  fullWidth?: boolean;
  width?: string
  fieldType?: string
  value?: any
  type?: string
  onChange?: (value: any) => void;
};

const CustomTextArea = ({
  label,
  placeholder,
  fullWidth,
  width,
  onChange,
  fieldType,
  type,
  value
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
        value={value}
        type={fieldType ? fieldType : "text"}
        maxLength={type === 'CPF' ? 11 : 250}
        onChange={onChange}
      />
    </div>
  );
};

export default CustomTextArea;
