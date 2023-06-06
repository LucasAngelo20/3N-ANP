import { cpfmask } from "@/src/mists/cpfmask";
import { TextField, colors } from "@mui/material";
import { type } from "os";
type DataProps = {
  name: string
}

type CustomSelectProps = {
  label: string;
  placeholder?: string;
  fullWidth?: boolean;
  width?: string
  data?: Array<DataProps>
  value?: string
  onChange?: (value: any) => void;
};

const CustomSelect = ({
  label,
  placeholder,
  fullWidth,
  width,
  onChange,
  data,
  value
}: CustomSelectProps) => {
  return (
    <div style={{ display: "flex", flexDirection: "column", margin: 10 }}>
      <span style={{ fontSize: 14, fontWeight: 300, marginBottom: 5 }}>{label}</span>
      <select
        style={{
          width: fullWidth ? "100%" : width ? width : '20%',
          height: 40,
          borderRadius: 5,
          outline: "none",
          border: "1px solid rgba(000,000,000,0.2)",
          fontSize: 14,
          fontWeight: 300, 
          color: 'rgba(000,000,000,0.6)'
        }}
        placeholder={placeholder}
        name={label}
        value={value}
        onChange={onChange}
      >
        {data?.map(data => (
          <>
          <option value={data?.name}>{data?.name}</option>
          </>
        ))}
      </select>
    </div>
  );
};

export default CustomSelect;
