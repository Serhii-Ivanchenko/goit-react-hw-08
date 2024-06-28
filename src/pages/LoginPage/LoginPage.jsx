import css from './LoginPage.module.css';
import LoginForm from '../../components/LoginForm/LoginForm';
import { Toaster } from 'react-hot-toast';


export default function LoginPage() {

  return (
    <>
      <h2>Log in</h2>
      <LoginForm/>
      <Toaster />
    </>
  );
}
