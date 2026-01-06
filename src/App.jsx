import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import ContactForm from "./components/ContactForm/ContactForm";
import SearchBox from "./components/SearchBox/SearchBox";
import ContactList from "./components/ContactList/ContactList";
import { fetchContacts } from "./redux/contactsOps";
import Loader from "./components/Loader/Loader";
import { selectLoading } from "./redux/contactsSlice";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);
  const loading = useSelector(selectLoading);

  return (
    <div className="App">
      <header>
        <h1>Phonebook</h1>
      </header>
      {loading && <Loader />}
      <main>
        <ContactForm />
        <SearchBox />
        <ContactList />
      </main>
    </div>
  );
}

export default App;
