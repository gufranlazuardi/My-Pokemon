import Layout from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { toast } from "@/components/ui/use-toast";
import { getPokemonDetail, getPokemonSpecies } from "@/utils/apis/api";
import { Pokemon, Species } from "@/utils/apis/types";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

const DetailPokemon = () => {
  const navigate = useNavigate();

  const [pokemon, setPokemon] = useState<Pokemon>();
  const [species, setSpecies] = useState<Species>();

  const params = useParams();

  useEffect(() => {
    fetchData();
    fetchDataSpecies();
  }, []);

  async function fetchData() {
    try {
      const result = await getPokemonDetail(params.id!);

      setPokemon(result);
    } catch (error: any) {
      toast({
        title: "Oops! Something went wrong.",
        description: error.toString(),
        variant: "destructive",
      });
    }
  }

  async function fetchDataSpecies() {
    try {
      const result = await getPokemonSpecies(+params.id!);

      setSpecies(result);
      console.log("ini species", result);
    } catch (error: any) {
      toast({
        title: "Oops! Something went wrong.",
        description: error.toString(),
        variant: "destructive",
      });
    }
  }

  return (
    <Layout>
      <div className="grid grid-cols-2 gap-2">
        <img
          src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${pokemon?.id}.svg`}
          alt="pokemon"
          className="border rounded-lg h-full p-8"
        />
        <div className="border rounded-lg p-4 h-full">
          {pokemon?.stats.map((data, index) => (
            <div key={index}>
              <div className="flex justify-between py-2">
                <p>{data.stat.name}</p>
                <p>{data.base_stat}</p>
              </div>
              <Progress value={data.base_stat} />
            </div>
          ))}
        </div>
      </div>

      <div className="grid gap-2 grid-cols-2 text-center pt-6">
        <div className="border rounded-lg text-center flex flex-col gap-4 p-4">
          <h2 className=" text-2xl font-bold">Information</h2>
          <hr />
          <p className="= font-semibold text-xl">Height</p>
          <p>{pokemon?.height} m</p>
          <p className=" font-semibold text-xl">Weight</p>
          <p>{pokemon?.weight} kg</p>
          <p className=" font-semibold text-xl">Habitat</p>
          <p>{species?.habitat.name}</p>
        </div>
        <div className="border flex flex-col gap-4 rounded-lg p-4 text-center">
          <h2 className=" text-2xl font-bold">Ability</h2>
          <hr className="" />
          {pokemon?.abilities.map((data, index) => (
            <p key={index}>{data.ability.name}</p>
          ))}
        </div>
      </div>

      <div className="flex flex-col justify-center gap-4 py-8">
        <Button
          className="flex w-full bg-green-500 shadow-md shadow-green-500"
          onClick={() => {
            navigate(`/catch/:${pokemon?.id}`);
          }}
        >
          Catch
        </Button>
        <Button
          className="flex w-full shadow-md shadow-red-500"
          variant={"destructive"}
          onClick={() => {
            navigate("/");
          }}
        >
          Cancel
        </Button>
      </div>
    </Layout>
  );
};

export default DetailPokemon;
