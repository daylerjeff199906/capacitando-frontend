import { BrowserRouter, Route, Routes } from "react-router-dom";
import LoginIndex from "./pages/LoginIndex";
import Dashboard from "./interfaces/admin_interfaces/dashboard/DashBoard";
import IndexUser from "./interfaces/admin_interfaces/userView/sections/indexUser";
import IndexCourse from "./interfaces/admin_interfaces/courseView/sections/indexCourse";

import AddUserSection from "./interfaces/admin_interfaces/userView/sections/addUserSection";
import AddCourseSection from "./interfaces/admin_interfaces/courseView/sections/addCourseSection";
import IndexStudent from "./interfaces/user_interfaces/students/indexStudent";
import CourseList from "./interfaces/user_interfaces/students/sections/courseList";
import CourseDetails from "./interfaces/user_interfaces/students/sections/courseDetails";
import AddContentSection from "./interfaces/admin_interfaces/courseView/sections/addContentSection";
import ProtectedRoute from "./protectedRoute";

import "./index.css";

import { AuthProvider } from "./context/AuthProvider";

function App() {
  return (
    <BrowserRouter>
      <AuthProvider>
        <Routes>
          <Route path="/" element={<LoginIndex />} />
          <Route path="/dashboard/*" element={<ProtectedRoute />}>
            <Route index element={<Dashboard />} />
            <Route path="users/add" element={<AddUserSection />} />
            <Route path="users" element={<IndexUser />} />
            <Route path="courses" element={<IndexCourse />} />
            <Route path="courses/add" element={<AddCourseSection />} />
            <Route path="courses/:id" element={<AddContentSection />} />
          </Route>

          <Route path="/home/*" element={<ProtectedRoute />}>
            <Route index element={<IndexStudent />} />
            <Route path="miscursos" element={<CourseList />} />
            <Route path="miscursos/:id" element={<CourseDetails />} />
          </Route>
        </Routes>
      </AuthProvider>
    </BrowserRouter>
  );
}

export default App;
