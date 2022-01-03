import * as React from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

const bull = (
  <Box
    component="span"
    sx={{ display: "inline-block", mx: "2px", transform: "scale(0.8)" }}
  >
    •
  </Box>
);

const Thought = (props) => {
  const { id, title, description } = props.data;
  return (
    <Card sx={{ maxWidth: 270, minWidth: 200 }}>
      <CardContent>
        <Typography sx={{ fontSize: 9 }} color="text.secondary" gutterBottom>
          Thought {id}
        </Typography>
        <Typography variant="h4" component="div">
          {title}
        </Typography>
        <Typography sx={{ mb: 1.5 }} color="text.secondary">
          {description}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Learn More</Button>
      </CardActions>
    </Card>
  );
};

export default Thought;
