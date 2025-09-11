

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
            className="h-10 px-4 text-[#090909] bg-[#E4DFDF] rounded-2xl hover:bg-[#D9FB87] transition-all duration-700 ease-in-out font-medium"
          >  
          {children}
        </button>
    )
};

export default Button;