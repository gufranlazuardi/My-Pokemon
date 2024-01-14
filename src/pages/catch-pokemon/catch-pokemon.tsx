import Layout from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { useToast } from "@/components/ui/use-toast";
import { getPokemonDetail } from "@/utils/apis";
import { Pokemon } from "@/utils/apis/types";
import { useEffect, useState } from "react";
import { Navigate, useNavigate, useParams } from "react-router-dom";

const getDataFromLocalStorage = () => {
  const data = localStorage.getItem("myPokemon");
  if (data) {
    return JSON.parse(data);
  } else {
    return [];
  }
};

const CatchPokemon = () => {
  const [pokemonData, setPokemonData] = useState<Pokemon>();
  const [catchPoke, setCatchPoke] = useState(false);
  const [pokemons, setPokemons] = useState(getDataFromLocalStorage);
  const [nickname, setNickName] = useState("");
  const { toast } = useToast();
  const navigate = useNavigate();

  const params = useParams();

  const handleAddPokemon = () => {
    let myPokemons = {
      nickname,
      data_pokemon: catchPoke,
    };
    setPokemons([...pokemons, myPokemons]);
    setNickName("");
<<<<<<< HEAD
    console.log(handleAddPokemon);
  };
=======
    setCatchPoke(false);
>>>>>>> 48c9f26 (fix: pages & api)

    toast({
      title: "Great Job!!!",
      description: "Pokemons now already in your My Pokemon",
      variant: "default",
    });
    navigate("/");
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

  // const a = 4
  // const b = a > 5 ? true : false

  return (
    <Layout>
      {/* <img
        src="https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/f849f1e6-b991-4b89-bd9b-7b86ae209054/d6msae4-d91b5219-f842-41da-970e-d80535e50b66.png/v1/fill/w_1024,h_576,q_80,strp/bosque_naruto_by_lwisf3rxd_d6msae4-fullview.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9NTc2IiwicGF0aCI6IlwvZlwvZjg0OWYxZTYtYjk5MS00Yjg5LWJkOWItN2I4NmFlMjA5MDU0XC9kNm1zYWU0LWQ5MWI1MjE5LWY4NDItNDFkYS05NzBlLWQ4MDUzNWU1MGI2Ni5wbmciLCJ3aWR0aCI6Ijw9MTAyNCJ9XV0sImF1ZCI6WyJ1cm46c2VydmljZTppbWFnZS5vcGVyYXRpb25zIl19.BWNggBSYAwZqGkchrDnFj1xvbiO8FXEu8-6CflN_XpM"
        alt="forest-background"
        className="w-full h-screen"
      /> */}
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
//play
