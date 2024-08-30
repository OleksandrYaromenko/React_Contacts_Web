import { Field, Form, Formik, ErrorMessage } from "formik";
import { nanoid } from "nanoid";
import * as Yup from "yup";
import css from "./ContactForm.module.css";
import { useDispatch } from "react-redux";
import { addContact } from "../../redux/contacts";

const SignupSchema = Yup.object().shape({
  name: Yup.string()
    .min(3, "Minimun 3 lettes")
    .max(50, "Maximun 50 lettes")
    .required("Required"),
  number: Yup.number().min(3, "Minimun 3  number").required("Required"),
});
export default function ContactForm() {
  const dispatch = useDispatch()
  const initialValues = {
    name: "",
    number: "",
  };
  const handleSubmit = (values, actions) => {
    const newContact = { ...values, id: nanoid() };
    dispatch(addContact(newContact));
    actions.resetForm()
  }
  return (
    <Formik
      initialValues={initialValues}
      validationSchema={SignupSchema}
      onSubmit={handleSubmit}
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
