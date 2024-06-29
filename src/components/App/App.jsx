import './App.css';
import { useDispatch, useSelector } from 'react-redux';

import { selectError, selectLoading } from '../../redux/contacts/selectors';
import { Route, Routes } from 'react-router-dom';
import HomePage from '../../pages/HomePage/HomePage';
import RegistrationPage from '../../pages/RegistrationPage/RegistrationPage';
import LoginPage from '../../pages/LoginPage/LoginPage';
import ContactsPage from '../../pages/ContactsPage/ContactsPage';
import NotFoundPage from '../../pages/NotFoundPage/NotFoundPage';
import Layout from '../Layout/Layout';
import AppBar from '../AppBar/AppBar';
import { useEffect } from 'react';
import { refreshUser } from '../../redux/auth/operations';

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch]);

  return (
    <Layout>
      <AppBar />

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/register" element={<RegistrationPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/contacts" element={<ContactsPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </Layout>
  );
}

export default App;
