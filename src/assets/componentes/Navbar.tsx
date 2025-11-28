import { Link } from "react-router-dom";

export const Navbar = () => {
  return (
    <nav style={{ display: "flex", gap: "20px", padding: "10px" }}>
      <Link to="/">Inicio</Link>
      <Link to="/gen1">Gen 1</Link>
      <Link to="/gen2">Gen 2</Link>
      <Link to="/gen3">Gen 3</Link>
    </nav>
  );
};
