import { useEffect, useState } from "react";

const DataCourse = {
  FetchDataCourse: () => {
    const [apiData, setApiData] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
      const fetchDataFromApi = async () => {
        try {
          const response = await fetch(
            "http://localhost:9000/api/courses/list",
            {
              method: "POST", // Cambio del método a POST
              headers: {
                "Content-Type": "application/json",
              },
              // Puedes incluir un cuerpo si es necesario
              // body: JSON.stringify({}),
            }
          );
          const data = await response.json();
          // console.log(data);
          setApiData(data);
        } catch (error) {
          console.log(error);
        } finally {
          setLoading(false);
        }
      };

      fetchDataFromApi();
    }, []);

    return { apiData, loading };
  },
};
export default DataCourse;
