import { TextField, Box } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import {
  changeFilter,
  selectNameFilter,
} from '../../redux/filters/filtersSlice';

const SearchBox = () => {
  const dispatch = useDispatch();
  const value = useSelector(selectNameFilter);

  return (
    <Box sx={{ my: 2 }}>
      <TextField
        label="Find contacts"
        variant="outlined"
        size="small"
        value={value}
        onChange={e => dispatch(changeFilter(e.target.value))}
      />
    </Box>
  );
};

export default SearchBox;
