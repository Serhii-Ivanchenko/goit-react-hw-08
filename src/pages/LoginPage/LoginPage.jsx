import { useDispatch } from 'react-redux';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import { useId } from 'react';
import * as Yup from 'yup';
import css from './LoginPage.module.css';
import { addContact } from '../../redux/contacts/operations';
import toast, { Toaster } from 'react-hot-toast';

const validationSchema = Yup.object().shape({
  email: Yup.string()
    .required('This field is required to fill!'),
  password: Yup.string()
    .required('This field is required to fill!')
});

export default function LoginPage() {
  const dispatch = useDispatch();

  const emailFieldId = useId();
  const passwordFieldId = useId();

  return (
    <>
      <Formik
        initialValues={{
          email: '',
          password: '',
        }}
        validationSchema={validationSchema}
        onSubmit={(values, actions) => {
          dispatch(
            addContact({
              email: values.email,
              password: values.password,
            })
          )
            .unwrap()
            .then(() => {
              toast.success('Log in successful');
            })
            .catch(err => {
              toast.error(`${err.message}`);
            });
          actions.resetForm();
        }}
      >
        <Form className={css.form}>
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
            Log in
          </button>
        </Form>
      </Formik>
      <Toaster />
    </>
  );
}
