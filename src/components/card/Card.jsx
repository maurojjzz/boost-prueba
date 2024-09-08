import { Card, CardContent, CardMedia, Typography, useTheme } from "@mui/material";

const CardComponent = ({title, img, imgAlt, text}) => {
  const theme = useTheme();

  return (
    <Card
      sx={{
        maxWidth: 345,
        borderRadius: "0px",
        mb: "50px",
        boxShadow: "none",
        border: `1px solid #b3b3b2`,
      }}
    >
      <CardMedia 
        sx={{ 
          height: "150px" 
        }} 
        image={`/assets/images/${img}`} 
        title={imgAlt}
      />
      <CardContent
        sx={{
          height: "180px",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          mb: "30px",
        }}
      >
        <Typography 
          variant="h6"
          pt={2}
          fontFamily={"HelveticaNowDisplay"}
          fontWeight={"bold"} 
        >
          {title}
        </Typography>
        <Typography 
          variant="body2" 
          sx={{ 
            color: theme.palette.secondary.main,
            fontFamily: "HelveticaNowDisplay", 
            }}
        >
          {text}
        </Typography>
      </CardContent>
    </Card>
  );
};

export default CardComponent;
