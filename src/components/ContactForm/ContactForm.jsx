import { Field, Form, Formik, ErrorMessage } from "formik";
import clsx from "clsx";
import css from "./ContactForm.module.css";
import { useId } from "react";
import * as Yup from "yup";
import { useDispatch, useSelector } from "react-redux";
import { addContact } from "../../redux/contactsOps";
import { selectLoading } from "../../redux/contactsSlice";

const ContactForm = ({ initialValues = { name: "", phone: "" } }) => {
  const nameFieldId = useId();
  const numberFieldId = useId();
  const FeedbackSchema = Yup.object().shape({
    name: Yup.string()
      .matches(/^[a-z A-Z+\-\s()]+$/, "Only letters")
      .min(3, "To Short!")
      .max(50, "To Long!")
      .required("Required"),
    phone: Yup.string()
      .min(3, "To Short!")
      .max(20, "To Long!")
      .required("Required")
      .matches(/^[0-9+\-\s()]+$/, "Only digits and phone symbols"),
  });

  const dispatch = useDispatch();
  const loading = useSelector(selectLoading);

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
      validateOnBlur>
      <Form className={clsx(css.formContainer)}>
        <label htmlFor={nameFieldId}>Name</label>
        <Field
          type="text"
          name="name"
          id={nameFieldId}
          className={clsx(css.field)}
        />
        <ErrorMessage
          name="name"
          component="p"
          id={nameFieldId}
          className={clsx(css.error)}
        />
        <label htmlFor={numberFieldId}>Number</label>
        <Field type="text" name="phone" id={numberFieldId} />
        <ErrorMessage
          name="phone"
          component="p"
          id={numberFieldId}
          className={clsx(css.error)}
        />
        <button type="submit" disabled={loading}>
          Add contact
        </button>
      </Form>
    </Formik>
  );
};

export default ContactForm;
