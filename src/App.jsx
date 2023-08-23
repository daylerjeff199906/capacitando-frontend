import { BrowserRouter, Route, Routes } from "react-router-dom";
import LoginIndex from "./pages/loginIndex";
import Dashboard from "./interfaces/admin_interfaces/dashboard/DashBoard";
import IndexUser from "./interfaces/admin_interfaces/userView/sections/indexUser";
import IndexCourse from "./interfaces/admin_interfaces/courseView/sections/indexCourse";
import Navbar from "./components/NavBar";
import Sidebar from "./components/SideBar";
import { Grid } from "@mui/material";
import AddUserSection from "./interfaces/admin_interfaces/userView/sections/addUserSection";
import AddCourseSection from "./interfaces/admin_interfaces/courseView/sections/addCourseSection";
import IndexStudent from "./interfaces/user_interfaces/students/indexStudent";
import CourseList from "./interfaces/user_interfaces/students/sections/courseList";
import CourseDetails from "./interfaces/user_interfaces/students/sections/courseDetails";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LoginIndex />} />
        <Route path="/dashboard/*" element={<DashboardLayout />} />
        <Route path="/home/*" element={<HomeStundent />} />
      </Routes>
    </BrowserRouter>
  );
}

function DashboardLayout() {
  return (
    <>
      <Navbar />
      <Grid container spacing={4} sx={{ paddingTop: 8 }}>
        <Grid item xs={2}>
          <Sidebar />
        </Grid>
        <Grid item xs={10}>
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="users/add" element={<AddUserSection />} />
            <Route path="users" element={<IndexUser />} />
            <Route path="courses" element={<IndexCourse />} />
            <Route path="courses/add" element={<AddCourseSection />} />
          </Routes>
        </Grid>
      </Grid>
    </>
  );
}

function HomeStundent() {
  return (
    <>
      <Navbar />
      <Grid container spacing={4} sx={{ paddingTop: 8 }}>
        <Grid item xs={12}>
          <Routes>
            <Route path="/" element={<IndexStudent />} />
            <Route path="/miscursos" element={<CourseList />} />
            <Route path="/miscursos/:id" element={<CourseDetails />} />
          </Routes>
        </Grid>
      </Grid>
    </>
  );
}

export default App;
