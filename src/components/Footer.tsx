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
        <img
          src="https://cdn-icons-png.flaticon.com/512/25/25694.png"
          alt="home"
          className=" w-auto h-8"
        />
        <p>Home</p>
      </div>
      <div
        className="flex flex-col items-center"
        onClick={() => {
          navigate("/mypokemon");
        }}
      >
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQTjPb9FGESHN-2IFr940Mkw-rWBdC5Xyt4Nw&usqp=CAU"
          alt="pokeball-black"
          className="w-auto h-8"
        />
        <p>My Pokemon</p>
      </div>
    </div>
  );
};

export default Footer;
