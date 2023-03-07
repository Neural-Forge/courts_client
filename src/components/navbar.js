import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav>
      <Link to="/chat">Chat</Link>
      <Link to="/map">Map</Link>
      <Link to="/">Home</Link>
    </nav>
  );
}
