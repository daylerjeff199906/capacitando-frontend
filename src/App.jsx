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
import ProtectedRoute from "./layouts/protectedRoute";

import "./index.css";

import { AuthProvider } from "./context/AuthProvider";
import { UserProvider } from "./context/UserProvider";
import { CourseProvider } from "./context/CourseProvider";
import { CategoryProvider } from "./context/CategoryProvider";
import { SesionProvider } from "./context/SesionProvider";
import ProtectedRouteUser from "./layouts/protectedRouteUser";
import IndexCategory from "./interfaces/admin_interfaces/category/indexCategory";

function App() {
  return (
    <BrowserRouter>
      <AuthProvider>
        <UserProvider>
          <CategoryProvider>
            <CourseProvider>
              <SesionProvider>
                <Routes>
                  <Route path="/" element={<LoginIndex />} />
                  <Route path="/dashboard/*" element={<ProtectedRoute />}>
                    <Route index element={<Dashboard />} />
                    <Route path="users/add" element={<AddUserSection />} />
                    <Route path="users" element={<IndexUser />} />
                    <Route path="category" element={<IndexCategory />} />
                    <Route path="courses" element={<IndexCourse />} />
                    <Route path="courses/add" element={<AddCourseSection />} />
                    <Route path="courses/:id" element={<AddContentSection />} />
                  </Route>

                  <Route path="/home/*" element={<ProtectedRouteUser />}>
                    <Route index element={<IndexStudent />} />
                    <Route path="miscursos" element={<CourseList />} />
                    <Route path="miscursos/:id" element={<CourseDetails />} />
                  </Route>
                </Routes>
              </SesionProvider>
            </CourseProvider>
          </CategoryProvider>
        </UserProvider>
      </AuthProvider>
    </BrowserRouter>
  );
}

export default App;
