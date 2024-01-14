import MyPokemonCard from "@/components/MyPokemonCard";
import { Pokemon } from "@/utils/apis/types";
import { useEffect, useState } from "react";
import Layout from "@/components/Layout";
import { Button } from "@/components/ui/button";

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
      <div className="">
        {pokemon.map((pokemon, index) => {
          return (
            <div key={index} className="grid grid-cols-2">
              <Button onClick={() => handleDelete}>Del</Button>
              <MyPokemonCard
                nickname={pokemon.nickname}
                data={pokemon.data_pokemon}
              />
            </div>
          );
        })}
      </div>
    </Layout>
  );
};

export default MyPokemon;
