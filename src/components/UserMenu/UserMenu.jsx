import { useSelector } from 'react-redux';
import css from './UserMenu.module.css';
import { selectUser } from '../../redux/auth/selectors';

export default function UserMenu() {
  const user = useSelector(selectUser);
  return (
    <div className={css.userMenu}>
      <p>Welcome, {user.name}</p>
      <button>Logout</button>
    </div>
  );
}
