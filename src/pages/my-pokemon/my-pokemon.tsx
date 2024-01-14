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

  useEffect(() => {
    localStorage.setItem("myPokemon", JSON.stringify(pokemon));
  }, [pokemon]);

  return (
    <Layout>
<<<<<<< HEAD
      <div className="grid grid-cols-2 gap-4">
        {/* {"123".split("").map((i) => (
          <div className="w-full h-auto border rounded-md border-black flex flex-col text-center p-4">
            <img
              src="https://id.portal-pokemon.com/play/resources/pokedex/img/pm/5794f0251b1180998d72d1f8568239620ff5279c.png"
              alt="pokemon"
            />
            <div>
              <p className=" text-3xl">Bulbasaur</p>
              <p className=" text-2xl">(sdafa)</p>
            </div>
          </div>
        ))} */}
=======
      <div className="">
        {pokemon.map((pokemon, index) => {
          return (
            <div key={index} className="grid grid-cols-2">
              <MyPokemonCard
                nickname={pokemon.nickname}
                data={pokemon.data_pokemon}
              />
            </div>
          );
        })}
>>>>>>> 48c9f26 (fix: pages & api)
      </div>
    </Layout>
  );
};

export default MyPokemon;
