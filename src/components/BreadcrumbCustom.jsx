/* eslint-disable react/prop-types */
import Breadcrumbs from "@mui/material/Breadcrumbs";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";
import { Link } from "react-router-dom";

export default function CustomBreadcrumb({ routesArray }) {
  const option = [{ name: "Home", path: "/home" }];

  return (
    <>
      <Breadcrumbs
        separator={<NavigateNextIcon fontSize="small" />}
        aria-label="breadcrumb"
      >
        <Link
          key={0}
          to={option[0].path}
          style={{ textDecoration: "none", color: "inherit" }}
        >
          {option[0].name}
        </Link>
        {routesArray.map((route, index) => (
          <Link
            key={index}
            to={route.path}
            style={{ textDecoration: "none", color: "inherit" }}
          >
            {route.name}
          </Link>
        ))}
      </Breadcrumbs>
    </>
  );
}
