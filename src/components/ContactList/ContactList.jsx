import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';
import {
  selectFilteredContacts,
  selectContactLoading,
} from '../../redux/contacts/contactsSlice';
import { deleteContact } from '../../redux/contacts/operations';

const ContactList = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(selectFilteredContacts);
  const loading = useSelector(selectContactLoading);

  return (
    <List>
      {contacts.map(item => (
        <ListItem
          key={item.id}
          secondaryAction={
            <IconButton
              edge="end"
              aria-label="delete"
              onClick={() => dispatch(deleteContact(item.id))}
              disabled={loading}
            >
              <DeleteIcon />
            </IconButton>
          }
        >
          <ListItemText primary={item.name} secondary={item.phone} />
        </ListItem>
      ))}
    </List>
  );
};

export default ContactList;
