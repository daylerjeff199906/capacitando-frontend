/* eslint-disable react/prop-types */
import { createContext, useState } from "react";
import userAxios from "../config/axios";
import { useEffect } from "react";

const CourseContext = createContext();

const CourseProvider = ({ children }) => {
  const [courses, setCourses] = useState([]);
  const [courseId, setCourseId] = useState({});
  const [message, setMessage] = useState("");

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
      setCourses(data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    message &&
      setTimeout(() => {
        setMessage("");
      }, 3000);
  }, [message]);

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
    if (course.idcurso) {
      try {
        const { data } = await userAxios.patch(
          `/courses/update/${course.idcurso}`,
          course,
          config
        );
        setCourses(data);
        getCourses();
        setMessage("Curso actualizado correctamente");
      } catch (error) {
        setMessage("Error al actualizar el curso");
      }
    } else {
      try {
        const { data } = await userAxios.post(
          "/courses/create",
          course,
          config
        );
        setCourses([...courses, data]);
        getCourses();
        setMessage("Curso guardado correctamente");
      } catch (error) {
        // console.log(error);
        setMessage("Error al guardar el curso");
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
      // console.log(data);
      setCourses([...courses, data]);
      getCourses();
      setMessage("Estado cambiado correctamente");
    } catch (error) {
      // console.log(error);
      setMessage("Error al cambiar el estado");
    }
  };

  const addImageCourge = async (course) => {
    const token = localStorage.getItem("token");
    const config = {
      headers: {
        "content-type": "multipart/form-data",
        Authorization: `Bearer ${token}`,
      },
    };
    try {
      const { data } = await userAxios.post(
        `/courses/image/${course.idcurso}}`,
        course,
        config
      );
      console.log(data);
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
        addImageCourge,
        saveCourses,
        addUserCourse,
        deleteUserCourse,
        message,
      }}
    >
      {children}
    </CourseContext.Provider>
  );
};

export { CourseProvider };

export default CourseContext;
