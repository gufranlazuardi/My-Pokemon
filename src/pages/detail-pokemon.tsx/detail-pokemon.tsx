import Layout from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { toast } from "@/components/ui/use-toast";
import { getPokemonDetail } from "@/utils/apis/api";
import { Pokemon } from "@/utils/apis/types";
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

const DetailPokemon = () => {
  const navigate = useNavigate();

  const [pokemon, setPokemon] = useState<Pokemon>();
  const params = useParams();

  useEffect(() => {
    fetchData();
  }, []);

  async function fetchData() {
    try {
      const result = await getPokemonDetail(params.id_pokemon!);
      setPokemon(result);
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
          src="https://id.portal-pokemon.com/play/resources/pokedex/img/pm/5794f0251b1180998d72d1f8568239620ff5279c.png"
          alt="pokemon"
          className="border rounded-lg h-full"
        />
        <div className="border rounded-lg p-4 h-full">
          <div className="flex justify-between py-2">
            <p>Hp</p>
            <p>60</p>
          </div>
          <Progress value={33} />
          <div className="flex justify-between py-2">
            <p>Attack</p>
            <p>60</p>
          </div>
          <Progress value={89} />
          <div className="flex justify-between py-2">
            <p>Deffense</p>
            <p>60</p>
          </div>
          <Progress value={46} />
          <div className="flex justify-between py-2">
            <p>Special Attack</p>
            <p>60</p>
          </div>
          <Progress value={390} />
          <div className="flex justify-between py-2">
            <p>Special Defense</p>
            <p>60</p>
          </div>
          <Progress value={70} />
          <div className="flex justify-between py-2">
            <p>Speed</p>
            <p>60</p>
          </div>
          <Progress value={79} />
        </div>
      </div>

      <div className="grid gap-2 grid-cols-2 text-center pt-6">
        <div className="border rounded-lg text-center flex flex-col gap-4 p-4">
          <h2 className=" text-2xl font-bold">Information</h2>
          <hr className="" />
          <p className="= font-semibold text-xl">Height</p>
          <p>160 cm</p>
          <p className=" font-semibold text-xl">Weight</p>
          <p>20 kg</p>
          <p className=" font-semibold text-xl">Habitat</p>
          <p>Grassland</p>
        </div>
        <div className="border flex flex-col gap-4 rounded-lg p-4 text-center">
          <h2 className=" text-2xl font-bold">Ability</h2>
          <hr className="" />
          <p className="">Overgrow</p>
          <p>Chlorophyll</p>
        </div>
      </div>

      <div className="flex flex-col justify-center gap-4 py-8">
        <Button className="flex w-full bg-green-500 shadow-md shadow-green-500">
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
