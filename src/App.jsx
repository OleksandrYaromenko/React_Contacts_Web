import { useDispatch, } from "react-redux";
import css from "./App.module.css";
import ContactForm from "./components/ContactForm/ContactForm";
import SearchBox from "./components/SearchBox/SearchBox";
import { useEffect } from "react";
import { fetchContacts } from "./redux/contactsOps";
import Navigation from "./components/Navigation/navigation";
import { Route, Routes } from "react-router-dom";
import HomePage from "./page/HomePage/HomePage";
import RegisterPage from "./page/RegisterPage/RegisterPage";
import LoginPage from "./page/LoginPage/LoginPage";
import TasksPage from "./page/TasksPage/TasksPage";
import { Suspense } from "react";

export default function App() {

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <div className={css.container}>
      <Navigation />
      <Suspense fallback={null}>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/contacts" element={<TasksPage />}>
          <Route path="add_contacts" element={<ContactForm />} />
          <Route path="search" element={<SearchBox />} />
        </Route>
      </Routes>
      </Suspense>
    </div>
  );
}



{/* <SearchBox />
{loading && (
  <RotatingLines
    visible={true}
    height="96"
    width="96"
    color="black"
    strokeWidth="5"
    animationDuration="0.75"
    ariaLabel="rotating-lines-loading"
    wrapperStyle={{}}
    wrapperClass=""
  />
)} */}