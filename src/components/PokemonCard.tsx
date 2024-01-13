import { Pokemon } from "@/utils/apis/types";

import { Link } from "react-router-dom";

type Props = {
  data: Pokemon;
};

const PokemonCard = (props: Props) => {
  const { data } = props;
  return (
    <Link to={`/detail/${data.id}`}>
      <div className="w-full h-full border rounded-md flex flex-col gap-6">
        <img
          src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${data.id}.svg`}
          alt="pokemon"
          className="p-8 h-3/4 w-auto items-center"
        />
        <div className=" text-center text-3xl">{data.name}</div>
      </div>
    </Link>
  );
};

export default PokemonCard;
