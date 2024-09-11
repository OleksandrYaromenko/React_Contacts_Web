import { Field, Formik } from "formik";
// import { useDispatch } from "react-redux";
import { Form } from "react-router-dom";
import css from "./RegisterPage.module.css"
export default function RegisterPage() {
    // const dispatch = useDispatch();

    const handleSubmit = (values, actions) => {
      actions.resetForm();
    };
  return (
    <Formik
      initialValues={{
        name: "",
        email: "",
        password: "",
      }}
      onSubmit={handleSubmit}
    >
      <Form className={css.form} autoComplete="off">
        <label className={css.label}>
          Username
          <Field type="text" name="name" />
        </label>
        <label className={css.label}>
          Email
          <Field type="email" name="email" />
        </label>
        <label className={css.label}>
          Password
          <Field type="password" name="password" />
        </label>
        <button type="submit">Register</button>
      </Form>
    </Formik>
  );
}
