import { useTheme } from "@/utils/context/theme-provider";
import { Moon, Sun } from "lucide-react";
import { Button } from "./ui/button";

const Navbar = () => {
  const { theme, setTheme } = useTheme();

  function handleTheme() {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
  }

  return (
    <div className="flex items-center justify-between py-8">
      <div className="w-14 h-14"></div>
      <img
        src="https://pngimg.com/d/pokeball_PNG27.png"
        alt="pokeball"
        className="w-14 h-14"
      />
      <Button onClick={() => handleTheme()} variant={"outline"}>
        {theme === "light" ? <Sun /> : <Moon />}
      </Button>
    </div>
  );
};

export default Navbar;
