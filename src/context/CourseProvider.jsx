/* eslint-disable react/prop-types */
import { createContext, useState } from "react";
import userAxios from "../config/axios";

const CourseContext = createContext();

const CourseProvider = ({ children }) => {
  const [courses, setCourses] = useState([]);
  const [courseId, setCourseId] = useState({});

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

  const getDetailCourse = async (id) => {
    try {
      const token = localStorage.getItem("token");
      if (!token) return;

      const config = {
        headers: {
          "content-type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      };
      const { data } = await userAxios.get(`/courses/detail/${id}`, config);
      return data;
    } catch (error) {
      console.log(error);
    }
  };

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

  const editCourse = (course) => {
    setCourseId(course);
  };

  const editStateCourse = async (course) => {
    try {
      const token = localStorage.getItem("token");
      const config = {
        headers: {
          "content-type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      };
      const { data } = await userAxios.put(
        `/courses/status/${course.idcurso}`,
        course,
        config
      );
      console.log(data);
      setCourses([...courses, data]);
      getCourses();
    } catch (error) {
      console.log(error);
    }
  };

  const addUserCourse = async (userCourse) => {
    const token = localStorage.getItem("token");
    const config = {
      headers: {
        "content-type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    };
    try {
      const { data } = await userAxios.post(
        "/courses/add/user",
        userCourse,
        config
      );
      console.log(data);
    } catch (error) {
      console.log(error);
    }
  };

  const deleteUserCourse = async (userCourse) => {
    const token = localStorage.getItem("token");
    const config = {
      headers: {
        "content-type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    };
    try {
      const { data } = await userAxios.delete(
        "/courses/delete/user",
        userCourse,
        config
      );
      console.log(data);
    } catch (error) {
      console.log(error);
    }
  };

  const clearCourseId = () => {
    setCourseId({});
  };

  // const clearCourses = () => {
  //   setCourses([]);
  // };

  return (
    <CourseContext.Provider
      value={{
        getCourses,
        courses,
        courseId,
        editCourse,
        editStateCourse,
        clearCourseId,
        getDetailCourse,
        saveCourses,
        addUserCourse,
        deleteUserCourse,
      }}
    >
      {children}
    </CourseContext.Provider>
  );
};

export { CourseProvider };

export default CourseContext;
