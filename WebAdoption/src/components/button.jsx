
import '../assets/styles/components/button.css';
import { MdPets } from "react-icons/md";

const Button = ({ label, onClick }) => {
  return (
    <button onClick={onClick} className="button__element">
      {label}
      ver mas _
      <MdPets />
    </button>
  );
};

export default Button;

