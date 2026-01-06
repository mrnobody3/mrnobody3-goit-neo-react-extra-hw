import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';

const Contact = ({ data: { id, name, phone }, onDelete, disabled }) => {
  return (
    <ListItem
      secondaryAction={
        <IconButton
          edge="end"
          aria-label="delete"
          onClick={() => onDelete(id)}
          disabled={disabled}
        >
          <DeleteIcon />
        </IconButton>
      }
    >
      <ListItemText primary={name} secondary={phone} />
    </ListItem>
  );
};

export default Contact;
