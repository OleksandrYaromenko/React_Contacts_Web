import { Field, Formik } from "formik";
import { Form } from "react-router-dom";
import css from "./LoginPage.module.css";
// import { useDispatch } from "react-redux";

export default function LoginPage() {
  // const dispatch = useDispatch();

  const handleSubmit = (values, actions) => {
    actions.resetForm();
  };
  return (
    <Formik
      initialValues={{
        email: "",
        password: "",
      }}
      onSubmit={handleSubmit}
    >
      <Form className={css.form} autoComplete="off">
        <label className={css.label}>
          Email
          <Field type="email" name="email" />
        </label>
        <label className={css.label}>
          Password
          <Field type="password" name="password" />
        </label>
        <button type="submit">Log In</button>
      </Form>
    </Formik>
  );
}
