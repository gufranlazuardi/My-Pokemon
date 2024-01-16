import { HomeIcon } from "lucide-react";
import { useNavigate } from "react-router-dom";

const Footer = () => {
  const navigate = useNavigate();

  return (
    <div className=" flex items-center justify-around text-center py-2">
      <div
        className=" flex flex-col items-center"
        onClick={() => {
          navigate("/");
        }}
      >
        <HomeIcon />
        <p>Home</p>
      </div>
      <div
        className="flex flex-col items-center"
        onClick={() => {
          navigate("/mypokemon");
        }}
      >
        <img
          src="https://pngimg.com/d/pokeball_PNG27.png"
          alt="pokeball"
          className="w-auto h-8"
        />
        <p>My Pokemon</p>
      </div>
    </div>
  );
};

export default Footer;
