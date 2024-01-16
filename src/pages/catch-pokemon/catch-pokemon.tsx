import { useNavigate, useParams } from "react-router-dom";
import { useEffect, useState } from "react";

import { useToast } from "@/components/ui/use-toast";
import { Button } from "@/components/ui/button";
import Layout from "@/components/Layout";

import { getPokemonDetail } from "@/utils/apis";
import { Pokemon } from "@/utils/apis/types";

const getDataFromLocalStorage = () => {
  const data = localStorage.getItem("myPokemon");
  if (data) {
    return JSON.parse(data);
  } else {
    return [];
  }
};

const CatchPokemon = () => {
  const [pokemons, setPokemons] = useState(getDataFromLocalStorage());
  const [pokemonData, setPokemonData] = useState<Pokemon>();
  const [nickname, setNickName] = useState<string>();
  const [catchPoke, setCatchPoke] = useState(false);
  const navigate = useNavigate();
  const { toast } = useToast();
  const params = useParams();

  const handleAddPokemon = () => {
    let myPokemons = {
      nickname,
      data_pokemon: pokemonData,
    };
    setPokemons([...pokemons, myPokemons]);
    setNickName("");

    toast({
      title: "Great Job!!!",
      description: "Pokemons now already in your My Pokemon",
      variant: "default",
    });
    navigate(-1);
  };

  async function fetchData() {
    try {
      const result = await getPokemonDetail(+params.id_pokemon!);
      setPokemonData(result);
    } catch (error: any) {
      toast({
        title: "Oops! something went wrong",
        description: error.toString(),
        variant: "destructive",
      });
    }
  }

  useEffect(() => {
    fetchData();
    localStorage.setItem("myPokemon", JSON.stringify(pokemons));
  }, [pokemons]); // Menjalankan ulang fungsi memasukkan data ke local storage untuk kedua kalinya/jika data pokemon telah berubah(terisi)

  return (
    <Layout>
      <div className="grid grid-cols-1 gap-28 pt-9 place-items-center">
        <div className=" w-fit h-fit p-4 border rounded-md text-2xl font-bold">
          <p>This is {pokemonData?.name}</p>
        </div>
        <img
          src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${pokemonData?.id!}.svg`}
          alt="pokemon"
          className="w-[20rem] h-auto"
        />
        <div onClick={() => setCatchPoke(true)}>
          <img
            src="https://pngimg.com/d/pokeball_PNG27.png"
            alt="pokeball"
            className="w-20 h-auto"
          />
        </div>
      </div>
      {catchPoke && (
        <div className="w-full flex justify-center absolute top-32">
          <div className="w-[30rem] h-[30rem] border flex flex-col gap-8 justify-center items-center bg-white rounded-xl">
            <h1 className="text-4xl font-bold">Congratulation!</h1>
            <div className="flex flex-col items-center">
              <p className="text-xl">You've got</p>
              <p className="font-bold text-2xl">Bulbasaur</p>
            </div>
            <div className="flex flex-col items-center w-full px-16">
              <p>Nickname</p>
              <form className="flex flex-col items-center gap-4">
                <input
                  type="text"
                  className="border w-full h-8 justify-center text-center rounded-md border-black"
                  onChange={(e) => setNickName(e.target.value)}
                />
                <Button type="button" onClick={() => handleAddPokemon()}>
                  Save
                </Button>
              </form>
            </div>
          </div>
        </div>
      )}
    </Layout>
  );
};

export default CatchPokemon;
