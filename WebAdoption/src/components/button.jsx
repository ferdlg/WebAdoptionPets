
import '../assets/styles/components/button.css';  

const Button = ({ label, onClick }) => {
  return (
    <button onClick={onClick} className="button__element button__withIcon">
      {label}
    </button>
  );
};

export default Button;

