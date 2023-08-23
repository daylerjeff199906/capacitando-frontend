/* eslint-disable react/prop-types */
import {
  Card,
  CardActionArea,
  CardMedia,
  CardContent,
  Typography,
} from "@mui/material";

const CardCourse = ({ name, description, image, units, time }) => {
  return (
    <Card sx={{ maxWidth: 345, borderRadius: 4 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          image={image}
          alt="Course Image"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
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
