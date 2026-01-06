import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import ContactForm from '../components/ContactForm/ContactForm';
import SearchBox from '../components/SearchBox/SearchBox';
import ContactList from '../components/ContactList/ContactList';
import { fetchContacts } from '../redux/contacts/operations';
import { selectIsLoggedIn } from '../redux/auth/selectors';

const ContactsPage = () => {
  const dispatch = useDispatch();
  const isLoggedIn = useSelector(selectIsLoggedIn);

  useEffect(() => {
    if (isLoggedIn) dispatch(fetchContacts());
  }, [dispatch, isLoggedIn]);

  return (
    <section>
      <h2>Your Contacts</h2>
      <ContactForm />
      <SearchBox />
      <ContactList />
    </section>
  );
};

export default ContactsPage;
