import { Link } from "react-router-dom";

export default function AuthNav() {
  return (
    <div>
      <Link to="/login">Log in</Link>
      <Link to="/register">Register</Link>
    </div>
  );
}
