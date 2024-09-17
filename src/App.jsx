import css from "./App.module.css";
import ContactForm from "./components/ContactForm/ContactForm";
import SearchBox from "./components/SearchBox/SearchBox";
import Navigation from "./components/Navigation/navigation";
import { Route, Routes } from "react-router-dom";
import HomePage from "./page/HomePage/HomePage";
import RegisterPage from "./page/RegisterPage/RegisterPage";
import LoginPage from "./page/LoginPage/LoginPage";
import TasksPage from "./page/TasksPage/TasksPage";
import { Suspense, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { refresUser } from "./redux/User/operations";
import { selectIsRefreshing } from "./redux/User/selector";
import Box from "@mui/material/Box";
import LinearProgress from "@mui/material/LinearProgress";
import { Toaster } from "react-hot-toast";
import  PrivateRoute  from "./components/PrivateRoute";
import  RestrictedRoute  from "./components/RestrictedRoute";

export default function App() {
  const dispatch = useDispatch();
  const refreching = useSelector(selectIsRefreshing);

  useEffect(() => {
    dispatch(refresUser());
  }, [dispatch]);

  return refreching ? (
    <Box sx={{ width: "100%" }}>
      <LinearProgress />
    </Box>
  ) : (
    <div className={css.container}>
      <Navigation />
      <Suspense fallback={null}>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/register" element={<RestrictedRoute component ={<RegisterPage/>} />} />
          <Route path="/login" element={<RestrictedRoute component ={<LoginPage/>}  />}  />
          <Route path="/contacts" element={<PrivateRoute   component={<TasksPage/>}/>}>
            <Route path="add_contacts" element={<ContactForm />} />
            <Route path="search" element={<SearchBox />} />
          </Route>
        </Routes>
      </Suspense>
      <Toaster/>
    </div>
  );
}
