type CustomButtonProps = {
  text: string;
  display?: boolean;
  onClick?: () => void;
};

const CustomButton = ({ text, onClick, display }: CustomButtonProps) => {
  return (
    <button
      style={{
        margin: "20px 10px",
        border: "none",
        padding: "10px 50px",
        borderRadius: 5,
        backgroundColor: "#6C757D",
        color: "#fff",
        display: display ? 'none' : 'flex'
      }}
      onClick={onClick}
    >
      {text}
    </button>
  );
};

export default CustomButton;
