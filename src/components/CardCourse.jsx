/* eslint-disable react/prop-types */
import {
  Card,
  CardActionArea,
  CardMedia,
  CardContent,
  Typography,
} from "@mui/material";
import { Link } from "react-router-dom";

const CardCourse = ({ name, description, image, units, time, url }) => {
  return (
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
          >
            {name}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {description}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Units: {units}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Time: {time}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
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
