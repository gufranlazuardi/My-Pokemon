import MyPokemonCard from "@/components/MyPokemonCard";
import { Pokemon } from "@/utils/apis/types";
import { useEffect, useState } from "react";
import Layout from "@/components/Layout";

interface CatchPokemon {
  nickname: string;
  data_pokemon: Pokemon;
}

const getDataFromLocalStorage = () => {
  const data = localStorage.getItem("myPokemon");
  if (data) {
    return JSON.parse(data);
  } else {
    return [];
  }
};

const MyPokemon = () => {
  const [pokemon, setPokemon] = useState<CatchPokemon[]>(
    getDataFromLocalStorage()
  );

  const handleDelete = (nickname: string) => {
    const filter = pokemon.filter((e: any) => {
      return e.nickname !== nickname;
    });
    setPokemon(filter);
  };

  useEffect(() => {
    localStorage.setItem("myPokemon", JSON.stringify(pokemon));
  }, [pokemon]);

  return (
    <Layout>
      <div className="grid grid-cols-2 gap-6">
        {pokemon.map((pokemon) => {
          return (
            <div className="flex flex-col items-center">
              <MyPokemonCard
                nickname={pokemon.nickname}
                data={pokemon.data_pokemon}
                handledelete={() => handleDelete(pokemon.nickname)}
              />
            </div>
          );
        })}
      </div>
    </Layout>
  );
};

export default MyPokemon;
