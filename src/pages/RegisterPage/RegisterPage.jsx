import { ErrorMessage, Field, Form, Formik } from "formik";
import * as Yup from "yup";
import { useDispatch } from "react-redux";
import css from "./RegisterPage.module.css";
import { register } from "../../redux/auth/operations";
export default function RegisterPage() {
  const dispatch = useDispatch();
  const SignupSchema = Yup.object().shape({
    name: Yup.string()
      .min(3, "Minimun 3 lettes")
      .max(50, "Maximun 50 lettes")
      .required("Required"),
    email: Yup.string().email("Invalid email").required("Required"),
  });

  const handleSubmit = (values, actions) => {
    dispatch(register(values))
    actions.resetForm();
  };
  return (
    <>
      {" "}
      <>
        <h1>Welcome to ContactsWeb</h1>
      </>{" "}
      <Formik
        initialValues={{
          name: "",
          email: "",
          password: "",
        }}
        onSubmit={handleSubmit}
        validationSchema={SignupSchema}
      >
        <Form className={css.form} autoComplete="off">
          <div className={css.formDiv}>
            <label className={css.label}>User Name</label>
            <Field className={css.field} type="text" name="name" />
            <ErrorMessage component="span" className={css.error} name="name" />
          </div>
          <div className={css.formDiv}>
            <label className={css.label}>Email</label>
            <Field className={css.field} type="email" name="email" />
            <ErrorMessage component="span" className={css.error} name="email" />
          </div>
          <div className={css.formDiv}>
            <label className={css.label}>Password </label>
            <Field className={css.field} type="password" name="password" />
          </div>
          <button type="submit">Register</button>
        </Form>
      </Formik>
    </>
  );
}
