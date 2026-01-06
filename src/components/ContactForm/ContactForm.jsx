import { Form, Formik } from 'formik';
import { TextField, Button, Box } from '@mui/material';
import * as Yup from 'yup';
import { useDispatch, useSelector } from 'react-redux';
import { addContact } from '../../redux/contacts/operations';
import { selectContactLoading } from '../../redux/contacts/contactsSlice';

const ContactForm = ({ initialValues = { name: '', phone: '' } }) => {
  const FeedbackSchema = Yup.object().shape({
    name: Yup.string()
      .matches(/^[a-z A-Z+\-\s()]+$/, 'Only letters')
      .min(3, 'To Short!')
      .max(50, 'To Long!')
      .required('Required'),
    phone: Yup.string()
      .min(3, 'To Short!')
      .max(20, 'To Long!')
      .required('Required')
      .matches(/^[0-9+\-\s()]+$/, 'Only digits and phone symbols'),
  });

  const dispatch = useDispatch();
  const loading = useSelector(selectContactLoading);

  const handleSubmit = (values, actions) => {
    dispatch(
      addContact({
        name: values.name,
        phone: values.phone,
      })
    );
    actions.resetForm();
  };

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={handleSubmit}
      validationSchema={FeedbackSchema}
      validateOnChange
      validateOnBlur
    >
      {({ values, handleChange, handleBlur }) => (
        <Form>
          <Box sx={{ display: 'flex', gap: 2, alignItems: 'center', mb: 2 }}>
            <TextField
              name="name"
              label="Name"
              value={values.name}
              onChange={handleChange}
              onBlur={handleBlur}
              size="small"
            />
            <TextField
              name="phone"
              label="Number"
              value={values.phone}
              onChange={handleChange}
              onBlur={handleBlur}
              size="small"
            />
            <Button type="submit" variant="contained" disabled={loading}>
              Add
            </Button>
          </Box>
        </Form>
      )}
    </Formik>
  );
};

export default ContactForm;
