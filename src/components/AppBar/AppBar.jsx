import AuthNav from '../AuthNav/AuthNav';
import Navigation from '../Navigation/Navigation';
import UserMenu from '../UserMenu/UserMenu';
import css from './AppBar.module.css';
import { RiContactsBook3Fill } from 'react-icons/ri';

export default function AppBar() {
  return (
    <div className={css.appBar}>
      <p>
        <RiContactsBook3Fill /> PhoneHUB
      </p>
      <Navigation />
      <UserMenu />
      <AuthNav />
    </div>
  );
}
