import clsx from "clsx";
import css from "./ContactList.module.css";
import Contact from "../Contact/Contact";
import { useSelector, useDispatch } from "react-redux";
import {
  selectFilteredContacts,
  selectLoading,
} from "../../redux/contactsSlice";
import { deleteContact } from "../../redux/contactsOps";

const ContactList = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(selectFilteredContacts);
  const loading = useSelector(selectLoading);

  return (
    <ul className={clsx(css.list)}>
      {contacts.map((task) => (
        <li key={task.id} className={clsx(css.item)}>
          <Contact
            data={task}
            onDelete={(id) => dispatch(deleteContact(id))}
            disabled={loading}
          />
        </li>
      ))}
    </ul>
  );
};

export default ContactList;
