import { ErrorMessage, Field, Form, Formik } from "formik";
import css from "./LoginPage.module.css";
import * as Yup from "yup";
import { useDispatch } from "react-redux";
import { logIn } from "../../redux/auth/operations";
export default function LoginPage() {
const dispatch = useDispatch()
const SignupSchema = Yup.object().shape({
  email: Yup.string().email("Invalid email").required("Required"),
  password: Yup.string()
    .min(6, "Minimum 6 characters")
    .required("Required"),
});
  const handleSubmit = (values, actions) => {
    dispatch(logIn(values))
    actions.resetForm();
  };
  return (
    <>
    <>
    <h1>Hello, it’s so great that you’ve returned to us!</h1>
    </>
    <>  <Formik
      initialValues={{
        email: "",
        password: "",
      }}
      onSubmit={handleSubmit}
      validationSchema={SignupSchema}
    >
     <Form className={css.form} autoComplete="off">
      <div className={css.formDiv}>
        <label className={css.label}>Email</label>
        <Field className={css.field} type="email" name="email" />
        <ErrorMessage component="span" className={css.error} name="email" />
      </div>
      <div className={css.formDiv}>
        <label className={css.label}>Password </label>
        <Field className={css.field} type="password" name="password" />
      </div>
      <button type="submit">Log In</button>
    </Form>
    </Formik>
    </>
    </>
  
  );
}
