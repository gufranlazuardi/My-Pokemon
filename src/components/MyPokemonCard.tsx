import { Link } from "react-router-dom";
import { Pokemon } from "@/utils/apis/types";
import { Button } from "./ui/button";

interface MyPokemon {
  nickname: string;
  data: Pokemon;
  handledelete: () => void;
}

const MyPokemonCard = (props: MyPokemon) => {
  const { data, nickname, handledelete } = props;

  return (
    <div className="w-full h-[360px] border rounded-md gap-6 flex flex-col justify-between items-center">
      <Link to={`/detail/${data?.id}`}>
        <img
          src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${data?.id}.svg`}
          alt={data?.name}
          className="h-[260px] w-full"
        />
        <div className="text-center text-xl">
          <p>{nickname}</p>
        </div>
      </Link>
      <Button onClick={() => handledelete()} className="w-fit">
        Del
      </Button>
    </div>
  );
};

export default MyPokemonCard;
