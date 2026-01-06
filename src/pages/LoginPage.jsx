import { Formik, Form } from 'formik';
import * as Yup from 'yup';
import { useDispatch } from 'react-redux';
import { login } from '../redux/auth/operations';
import { TextField, Button, Box, Paper, Typography } from '@mui/material';

const LoginSchema = Yup.object().shape({
  email: Yup.string().email('Invalid email').required('Required'),
  password: Yup.string().min(6, 'Too short').required('Required'),
});

const LoginPage = () => {
  const dispatch = useDispatch();

  return (
    <Paper sx={{ maxWidth: 420, mx: 'auto', mt: 4, p: 3 }} elevation={3}>
      <Typography variant="h5" component="h2" gutterBottom>
        Login
      </Typography>
      <Formik
        initialValues={{ email: '', password: '' }}
        validationSchema={LoginSchema}
        onSubmit={(values, { setSubmitting }) => {
          dispatch(login(values));
          setSubmitting(false);
        }}
      >
        {({
          values,
          errors,
          touched,
          handleChange,
          handleBlur,
          isSubmitting,
        }) => (
          <Form>
            <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
              <TextField
                label="Email"
                name="email"
                type="email"
                value={values.email}
                onChange={handleChange}
                onBlur={handleBlur}
                error={touched.email && Boolean(errors.email)}
                helperText={touched.email && errors.email}
                fullWidth
              />

              <TextField
                label="Password"
                name="password"
                type="password"
                value={values.password}
                onChange={handleChange}
                onBlur={handleBlur}
                error={touched.password && Boolean(errors.password)}
                helperText={touched.password && errors.password}
                fullWidth
              />

              <Button type="submit" variant="contained" disabled={isSubmitting}>
                Login
              </Button>
            </Box>
          </Form>
        )}
      </Formik>
    </Paper>
  );
};

export default LoginPage;
