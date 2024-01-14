import Index from "@/pages";
import CatchPokemon from "@/pages/catch-pokemon/catch-pokemon";
import DetailPokemon from "@/pages/detail-pokemon.tsx/detail-pokemon";
import MyPokemon from "@/pages/my-pokemon/my-pokemon";
import { RouterProvider, createBrowserRouter } from "react-router-dom";

export default function Router() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Index />,
    },
    {
      path: "/detail/:id_pokemon",
      element: <DetailPokemon />,
    },
    {
      path: "/catch/:id_pokemon",
      element: <CatchPokemon />,
    },
    {
      path: "/mypokemon",
      element: <MyPokemon />,
    },
  ]);

  return <RouterProvider router={router} />;
}
