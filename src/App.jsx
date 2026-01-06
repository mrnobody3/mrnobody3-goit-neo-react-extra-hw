import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout/Layout';
import HomePage from './pages/HomePage';
import RegistrationPage from './pages/RegistrationPage';
import LoginPage from './pages/LoginPage';
import ContactsPage from './pages/ContactsPage';
import PrivateRoute from './routes/PrivateRoute';
import RestrictedRoute from './routes/RestrictedRoute';
import { refreshUser } from './redux/auth/operations';
import Loader from './components/Loader/Loader';
import { selectAuthLoading, selectIsRefreshing } from './redux/auth/selectors';
import { selectContactLoading } from './redux/contacts/contactsSlice';

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch]);

  const authLoading = useSelector(selectAuthLoading);
  const contactsLoading = useSelector(selectContactLoading);
  const isRefreshing = useSelector(selectIsRefreshing);
  const showLoader = authLoading || contactsLoading || isRefreshing;

  return (
    <BrowserRouter>
      <Layout>
        {showLoader && <Loader />}
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route
            path="/register"
            element={
              <RestrictedRoute>
                <RegistrationPage />
              </RestrictedRoute>
            }
          />
          <Route
            path="/login"
            element={
              <RestrictedRoute>
                <LoginPage />
              </RestrictedRoute>
            }
          />
          <Route
            path="/contacts"
            element={
              <PrivateRoute>
                <ContactsPage />
              </PrivateRoute>
            }
          />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
}

export default App;
