import css from './UserMenu.module.css'

export default function UserMenu() {
  return <div className={css.userMenu}>
    <p>Welcome, username</p>
    <button>Logout</button>
  </div>;
}
