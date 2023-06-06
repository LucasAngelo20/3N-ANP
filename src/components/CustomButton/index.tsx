type CustomButtonProps = {
  text: string;
  onClick?: () => void;
};

const CustomButton = ({ text, onClick }: CustomButtonProps) => {
  return (
    <button
      style={{
        margin: "20px 10px",
        border: "none",
        padding: "10px 50px",
        borderRadius: 5,
        backgroundColor: "#6C757D",
        color: "#fff",
      }}
      onClick={onClick}
    >
      {text}
    </button>
  );
};

export default CustomButton;
