import axios from "axios";
import { useEffect, useState } from "react";

import PokemonCard from "@/components/PokemonCard";
import { toast } from "@/components/ui/use-toast";
import Layout from "@/components/Layout";

import { getPokemon } from "@/utils/apis/api";
import { Pokemon } from "@/utils/apis/types";

const Index = () => {
  const [pokemon, setPokemon] = useState<Pokemon[]>();

  useEffect(() => {
    fetchData();
  }, []);

  async function fetchData() {
    try {
      const result = await getPokemon();

      const pokemonCardMapping = result.results.map(async (data) => {
        const dataResult = await axios.get(data.url);
        return dataResult.data;
      });

      const results: Pokemon[] = await Promise.all(pokemonCardMapping);
      setPokemon(results);
    } catch (error: any) {
      toast({
        title: "Oops! Something went wrong.",
        description: error.toString(),
        variant: "destructive",
      });
    }
  }

  return (
    <>
      <Layout>
        <div className="grid grid-cols-2 gap-4">
          {pokemon?.map((data, index) => (
            <PokemonCard data={data} key={index} />
          ))}
        </div>
      </Layout>
    </>
  );
};

export default Index;
