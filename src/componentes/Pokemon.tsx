import { useState, useEffect } from "react";

interface PokemonData {
  numero: number;
  img: string;
  imgJuego: string;
  imgCvg: string;
  nombre: string;
  experiencia: number;
  hp: number;
  ataque: number;
  defensa: number;
  speed: number;
}

export const Pokemon = ({id, small = false, miniText = false,}:{id: number;small?: boolean;miniText?: boolean;}) => {
  const [pokemon, setPokemon] = useState<PokemonData | null>(null);

  useEffect(() => {
    fetch(`https://pokeapi.co/api/v2/pokemon/${id}`)
      .then((res) => res.json())
      .then((data) =>
        setPokemon({
          numero: data.id,
          img: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${data.id}.png`,
          imgJuego: data.sprites.front_default,
          imgCvg: data.sprites.other.dream_world.front_default,
          nombre: data.name,
          experiencia: data.base_experience,
          hp: data.stats[0].base_stat,
          ataque: data.stats[1].base_stat,
          defensa: data.stats[2].base_stat,
          speed: data.stats[5].base_stat,
        })
      );
  }, [id]);

  if (!pokemon) {
    return (
      <div style={{ textAlign: "center" }}>
        <img
          src="/images/404.png"
          alt="Cargando..."
          style={{ width: "100px", height: "100px", objectFit: "contain" }}
        />
      </div>
    );
  }

  // Imagen pequeña
  if (small) {
    return (
      <img
        src={pokemon.img}
        alt={pokemon.nombre}
        style={{
          width: "100px",
          height: "100px",
          objectFit: "contain",
        }}
      />
    );
  }

  // Texto pequeño debajo de la imagen
  if (miniText) {
    return (
      <div>
        <strong>#{pokemon.numero}</strong>
        <p style={{ margin: "2px 0", fontSize: "14px" }}>{pokemon.nombre}</p>
      </div>
    );
  }

  // Vista normal (ficha completa)
  return (
    <div style={{ textAlign: "center" }}>
      <img
        src={pokemon.img}
        alt={pokemon.nombre}
        style={{
          width: "200px",
          height: "200px",
          objectFit: "contain",
        }}
      />
      <h3>
        #{pokemon.numero} - {pokemon.nombre}
      </h3>
      <p>
        HP: {pokemon.hp} | ATK: {pokemon.ataque} | DEF: {pokemon.defensa}
      </p>
    </div>
  );
};
