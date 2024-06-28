import { useDispatch } from 'react-redux';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import { useId } from 'react';
import * as Yup from 'yup';
import css from './RegistrationPage.module.css';
import { addContact } from '../../redux/contacts/operations';
import toast, { Toaster } from 'react-hot-toast';

const validationSchema = Yup.object().shape({
  name: Yup.string()
    .required('This field is required to fill!')
    .min(3, 'Must be at least 3 characters long')
    .max(50, 'Must be not longer than 50 characters'),
  email: Yup.string()
        .required('This field is required to fill!'),
  password: Yup.string()
    .required('This field is required to fill!')
    .min(6, 'Must be at least 6 characters long')
});

export default function RegistrationPage() {
  const dispatch = useDispatch();

  const nameFieldId = useId();
  const emailFieldId = useId();
  const passwordFieldId = useId();

  return (
    <>
      <h2>Create new account</h2>
      <Formik
        initialValues={{
          id: '',
          name: '',
          number: '',
        }}
        validationSchema={validationSchema}
        onSubmit={(values, actions) => {
          dispatch(
            addContact({
              name: values.name,
              number: values.number,
            })
          )
            .unwrap()
            .then(() => {
              toast.success('Contact successfully added!');
            })
            .catch(err => {
              toast.error(`${err.message}`);
            });
          actions.resetForm();
        }}
      >
        <Form className={css.form}>
          <label htmlFor={nameFieldId}>Name</label>
          <Field name="name" type="text" id={nameFieldId} />
          <ErrorMessage className={css.error} name="name" component="span" />

          <label htmlFor={emailFieldId}>Email</label>
          <Field name="email" type="email" id={emailFieldId} />
          <ErrorMessage className={css.error} name="email" component="span" />

          <label htmlFor={passwordFieldId}>Password</label>
          <Field name="password" type="password" id={passwordFieldId} />
          <ErrorMessage
            className={css.error}
            name="password"
            component="span"
          />

          <button className={css.btn} type="submit">
            Register
          </button>
        </Form>
      </Formik>
      <Toaster />
    </>
  );
}
