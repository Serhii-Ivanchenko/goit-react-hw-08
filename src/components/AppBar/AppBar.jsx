import AuthNav from "../AuthNav/AuthNav";
import Navigation from "../Navigation/Navigation";
import UserMenu from "../UserMenu/UserMenu";

export default function AppBar() {
  return <div>
    <Navigation />
    <UserMenu />
    <AuthNav/>
  </div>;
}
