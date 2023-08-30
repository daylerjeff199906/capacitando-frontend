/* eslint-disable react/prop-types */
import { createContext, useEffect, useState } from "react";
import userAxios from "../config/axios";

const CourseContext = createContext();

const CourseProvider = ({ children }) => {
  const [courses, setCourses] = useState([]);

  useEffect(() => {
    const getCourses = async () => {
      try {
        const token = localStorage.getItem("token");
        if (!token) return;

        const config = {
          headers: {
            "content-type": "application/json",
            Authorization: `Bearer ${token}`,
          },
        };
        const { data } = await userAxios.get("/courses/list", config);
        console.log(data);
        setCourses(data);
      } catch (error) {
        console.log(error);
      }
    };
    getCourses();
  }, []);

  const saveCourses = async (course) => {
    const token = localStorage.getItem("token");
    const config = {
      headers: {
        "content-type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    };
    if (course.id) {
      try {
        const { data } = await userAxios.patch(
          `/courses/update/${course.id}`,
          course,
          config
        );

        const newCourses = courses.map((courseState) =>
          courseState.id === course.id ? data : courseState
        );
        setCourses(newCourses);
      } catch (error) {
        console.log(error);
      }
    } else {
      try {
        const { data } = await userAxios.post(
          "/courses/create",
          course,
          config
        );
        setCourses([...courses, data]);
      } catch (error) {
        console.log(error);
      }
    }
  };

  return (
    <CourseContext.Provider value={{ courses, saveCourses }}>
      {children}
    </CourseContext.Provider>
  );
};

export { CourseProvider };

export default CourseContext;
