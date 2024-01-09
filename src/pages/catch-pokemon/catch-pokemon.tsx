import Layout from "@/components/Layout";
import React from "react";

const CatchPokemon = () => {
  return (
    <Layout>
      {/* <img
        src="https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/f849f1e6-b991-4b89-bd9b-7b86ae209054/d6msae4-d91b5219-f842-41da-970e-d80535e50b66.png/v1/fill/w_1024,h_576,q_80,strp/bosque_naruto_by_lwisf3rxd_d6msae4-fullview.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9NTc2IiwicGF0aCI6IlwvZlwvZjg0OWYxZTYtYjk5MS00Yjg5LWJkOWItN2I4NmFlMjA5MDU0XC9kNm1zYWU0LWQ5MWI1MjE5LWY4NDItNDFkYS05NzBlLWQ4MDUzNWU1MGI2Ni5wbmciLCJ3aWR0aCI6Ijw9MTAyNCJ9XV0sImF1ZCI6WyJ1cm46c2VydmljZTppbWFnZS5vcGVyYXRpb25zIl19.BWNggBSYAwZqGkchrDnFj1xvbiO8FXEu8-6CflN_XpM"
        alt="forest-background"
        className="w-full h-screen"
      /> */}
      <div className="grid grid-cols-1 gap-28 pt-9 place-items-center">
        <div className=" w-fit h-fit p-4 border rounded-md text-2xl font-bold">
          This is Bulbasaur
        </div>
        <img
          src="https://id.portal-pokemon.com/play/resources/pokedex/img/pm/5794f0251b1180998d72d1f8568239620ff5279c.png"
          alt="pokemon"
          className="w-[20rem] h-auto"
        />
        <img
          src="https://pngimg.com/d/pokeball_PNG27.png"
          alt="pokeball"
          className=" w-20 h-auto"
        />
      </div>
    </Layout>
  );
};

export default CatchPokemon;
//play
