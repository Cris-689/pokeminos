import { Pokemon } from "./Pokemon";

export const PokemonCard = ({ id }: { id: number }) => {
  return (
    <div
      style={{
        border: "1px solid #ccc",
        width: "200px",
        padding: "15px",
        borderRadius: "12px",
        color: "#000000",
        textAlign: "center",
        background: "#f8f8f8",
        boxShadow: "0 2px 6px rgba(0,0,0,0.1)",
      }}
    >
      {/* Cuadro de la imagen */}
      <div
        style={{
          width: "130px",
          height: "130px",
          background: "white",
          borderRadius: "10px",
          margin: "0 auto 10px auto",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          overflow: "hidden",
          border: "1px solid #ddd"
        }}
      >
        <Pokemon id={id} small />
      </div>

      <Pokemon id={id} miniText />
    </div>
  );
};
