import { Field, Form, Formik, ErrorMessage } from "formik";
import * as Yup from "yup";
import css from "./ContactForm.module.css";
import { useDispatch,} from "react-redux";
import { addContacts } from "../../redux/contactsOps";
import toast from "react-hot-toast";




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
    dispatch(addContacts(values))
    .unwrap()
    .then(() => {
      toast.success('Contact was added successfully', {
        style: {
          border: '1px solid rgb(0, 106, 255)',
          padding: '16px',
          color: 'rgb(0, 106, 255)',
        },
        iconTheme: {
          primary: 'rgb(0, 226, 45)',
          secondary: '#FFFAEE',
        },
      });
    })
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
        <button type="submit">Add contact</button>
      </Form>
    </Formik>
    
  );
}
