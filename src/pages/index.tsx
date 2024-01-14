import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import PokemonCard from "@/components/PokemonCard";
import { toast } from "@/components/ui/use-toast";
import Layout from "@/components/Layout";

import { getPokemon } from "@/utils/apis/api";
import { Pokemon } from "@/utils/apis/types";

const Index = () => {
  const navigate = useNavigate();
  console.log(navigate);

  const [pokemon, setPokemon] = useState<Pokemon[]>();

  useEffect(() => {
    fetchData();
  }, []);

  async function fetchData() {
    try {
      const result = await getPokemon();

      const pokemonCardMapping = result.results.map(async (data, index) => {
        const dataResult = await getPokemonDetail(data.name);
        return dataResult;
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
