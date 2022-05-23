import { Route, Routes } from "react-router-dom";
import "./App.css";
import Login from "./Pages/Authentication/Login/Login";
import RequireAuth from "./Pages/Authentication/RequireAuth";
import Signup from "./Pages/Authentication/SignUp/Signup";
import Blogs from "./Pages/Blogs/Blogs";
import Dashboard from "./Pages/Dashboard/Dashboard";
import Home from "./Pages/Home/Home";
import Purchase from "./Pages/Purchase/Purchase";
import Profile from "./Pages/Profile/Profile";
import Settings from "./Pages/Settings/Settings";
import Footer from "./Pages/Shared/Footer/Footer";
import Navbar from "./Pages/Shared/Navbar/Navbar";
import MyProfile from "./Pages/Dashboard/MyProfile";
import AddReviews from "./Pages/Dashboard/AddReviews";
import MyOrder from "./Pages/Dashboard/MyOrder";

function App() {
  return (
    <div className="max-w-screen-2xl mx-auto">
      <Navbar></Navbar>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/home" element={<Home />}></Route>
        <Route
          path="/purchase:id"
          element={
            <RequireAuth>
              <Purchase />
            </RequireAuth>
          }
        ></Route>
        <Route path="/blogs" element={<Blogs />}></Route>
        <Route
          path="/dashboard"
          element={
            <RequireAuth>
              <Dashboard />
            </RequireAuth>
          }
        >
          <Route
            index
            element={
              <RequireAuth>
                <MyOrder />
              </RequireAuth>
            }
          ></Route>
          <Route
            path="myProfile"
            element={
              <RequireAuth>
                <MyProfile />
              </RequireAuth>
            }
          ></Route>
          <Route
            path="addReviews"
            element={
              <RequireAuth>
                <AddReviews />
              </RequireAuth>
            }
          ></Route>
        </Route>
        <Route path="/profile" element={<Profile />}></Route>
        <Route path="/settings" element={<Settings />}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/signup" element={<Signup />}></Route>
      </Routes>
      <Footer></Footer>
      {/* <ToastContainer /> */}
    </div>
  );
}

export default App;
