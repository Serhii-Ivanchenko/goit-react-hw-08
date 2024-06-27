import css from './HomePage.module.css';

export default function HomePage() {
  return (
    <div>
      <h1 className={css.title}>
        Welcome to PhoneHUB:
        <br />
        Your Ultimate Connection Manager
      </h1>
    </div>
  );
}
