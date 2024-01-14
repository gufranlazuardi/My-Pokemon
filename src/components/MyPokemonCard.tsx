import { Link } from "react-router-dom";
import { Pokemon } from "@/utils/apis/types";

interface MyPokemon {
  nickname: string;
  data: Pokemon;
}

const MyPokemonCard = (props: MyPokemon) => {
  const { data, nickname } = props;

  return (
    <Link to={`/detail/${data?.id}`}>
      <div className="w-full h-full border rounded-md gap-6">
        <img
          src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${data.id}.svg`}
          alt={`${data?.name}`}
          className="p-8 h-3/4 w-auto items-center"
        />
        <div className="text-center text-xl">
          <p>{nickname}</p>
        </div>
      </div>
    </Link>
  );
};

export default MyPokemonCard;
