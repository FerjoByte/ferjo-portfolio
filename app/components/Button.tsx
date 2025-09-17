

interface ButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  type?: "button" | "submit" | "reset";
}

const Button: React.FC<ButtonProps> =({ children, onClick, type = "button"}) => {
    return(
        <button
            type={type}
            onClick={onClick}
            className="h-10 px-4 text-[#DBCFCF] border-1 rounded-xl hover:border-[#91F900] transition-all duration-300 ease-in-out font-medium"
          >  
          {children}
        </button>
    )
};

export default Button;