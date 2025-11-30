import { useEffect, useState } from "react";
import { PokemonCard } from "../componentes/PokemonCard";

interface GenPageProps {
  min: number;
  max: number;
}

export const GenPage = ({ min, max }: GenPageProps) => {
  const [pokemonIds, setPokemonIds] = useState<number[]>([]);

  const generateRandom = () => {
    const ids: number[] = [];
    for (let i = 0; i < 10; i++) {
      ids.push(Math.floor(Math.random() * (max - min + 1)) + min);
    }
    return ids;
  };

  useEffect(() => {
    setPokemonIds(generateRandom());
  }, [min, max]);

  return (
    <div style={{ display: "flex", flexWrap: "wrap", gap: "20px", padding: "20px" }}>
      {pokemonIds.map((id) => (
        <PokemonCard key={id} id={id} />
      ))}
    </div>
  );
};
