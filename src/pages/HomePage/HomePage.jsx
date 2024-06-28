import css from './HomePage.module.css';

export default function HomePage() {
  return (
    <div>
      <h1 className={css.title}>
        Welcome to PhoneHUB:
        <br />
        Your Ultimate Connection Manager
      </h1>
      <h3>
        PhoneHUB offers the following features to ensure a more comfortable and
        seamless experience
      </h3>
      <ul>
        <li>
          User-Friendly Interface: Easy to navigate and use for all age groups.
        </li>
        <li>
          Smart Search: Quickly find contacts with an intelligent search bar.
        </li>
        <li>
          Quick Add Contacts: Instantly add new contacts with a streamlined,
          one-tap process.
        </li>
        <li>
          Quick Edit Mode: Enter a quick edit mode to make rapid changes to
          contact information.
        </li>
        <li>and many more features</li>
      </ul>

      <p>
        To start using the app, please log in to your account or register if you are a new user.
      </p>
    </div>
  );
}
