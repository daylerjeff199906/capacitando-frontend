// import { createContext, useEffect, useState } from "react";
// import userAxios from "../config/axios";

// const ContentContext = createContext();

// const ContentProvider = ({ children }) => {
//   const [sesions, setSesions] = useState([]);

//   useEffect(() => {
//     const getSesions = async () => {
//       try {
//         const token = localStorage.getItem("token");
//         if (!token) return;

//         const config = {
//           headers: {
//             "content-type": "application/json",
//             Authorization: `Bearer ${token}`,
//           },
//         };
//         const { data } = await userAxios.get("/sesions/list", config);
//         console.log(data);
//         setSesions(data);
//       } catch (error) {
//         console.log(error);
//       }
//     };
//     getSesions();
//   }, []);

//   return (
//     <ContentContext.Provider
//       value={{
//         sesions,
//       }}
//     >
//       {children}
//     </ContentContext.Provider>
//   );
// };

// export { ContentProvider };
// export default ContentContext;
