import { TextareaAutosize } from "@mui/material";

type CustomTextAreaProps = {
  label: string;
  placeholder?: string;
};

const CustomTextArea = ({ label, placeholder }: CustomTextAreaProps) => {
  return (
    <div>
      <span>{label}</span>
      <TextareaAutosize placeholder={placeholder} />
    </div>
  );
};

export default CustomTextArea;
