/* eslint-disable react/prop-types */
import {
  Card,
  CardActionArea,
  CardMedia,
  CardContent,
  Typography,
  Tooltip,
} from "@mui/material";
import { Link } from "react-router-dom";

const CardCourse = ({ name, description, image, units, time, url }) => {
  return (
    <>
      <Tooltip title={name} followCursor>
        <Card sx={{ maxWidth: 345, borderRadius: 4 }}>
          <CardActionArea LinkComponent={Link} to={url}>
            <CardMedia component="img" image={image} alt="Course Image" />
            <CardContent sx={{ height: "auto" }}>
              <Typography
                gutterBottom
                variant="h5"
                component="div"
                fontWeight={700}
                fontFamily={"poppins"}
                sx={{
                  textOverflow: "ellipsis",
                  overflow: "hidden",
                  whiteSpace: "nowrap",
                }}
              >
                {name}
              </Typography>
              <Typography
                variant="body2"
                color="text.secondary"
                fontWeight={700}
                fontFamily={"poppins"}
              >
                {description}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Unidades: {units}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Total de horas: {time}
              </Typography>
            </CardContent>
          </CardActionArea>
        </Card>
      </Tooltip>
    </>
  );
};

CardCourse.defaultProps = {
  name: "",
  description: "",
  image: "",
  units: 0,
  time: "20 horas",
};

export default CardCourse;
