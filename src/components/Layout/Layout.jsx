import css from './Layout.module.css';

export default function Layout({ children }) {
  return <div className={css.appContainer}>{children}</div>;
}
