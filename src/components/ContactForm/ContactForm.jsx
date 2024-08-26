import { Field, Form, Formik, ErrorMessage } from "formik";
import { nanoid } from "nanoid";
import * as Yup from "yup";
import css from "./ContactForm.module.css";

const SignupSchema = Yup.object().shape({
  name: Yup.string()
    .min(3, "Minimun 3 lettes")
    .max(50, "Maximun 50 lettes")
    .required("Required"),
  number: Yup.number().min(3, "Minimun 3  number").required("Required"),
});
export default function ContactForm({ onContacts }) {
  const handelSubmit = (value, actions) => {
    actions.resetForm();
    onContacts({
      name: value.name,
      number: value.number,
      id: nanoid(),
    });
  };
  return (
    <Formik
      initialValues={{
        name: "",
        number: "",
      }}
      validationSchema={SignupSchema}
      onSubmit={handelSubmit}
    >
      <Form className={css.form}>
        <div className={css.formDiv}>
          <label className={css.label}>Name</label>
          <Field className={css.field} type="text" name="name" />
          <ErrorMessage component="span" className={css.error} name="name" />
        </div>
        <div className={css.formDiv}>
          <label className={css.label}>Number</label>
          <Field className={css.field} type="number" name="number" />
          <ErrorMessage component="span" className={css.error} name="number" />
        </div>
        <button>Add contact</button>
      </Form>
    </Formik>
  );
}
