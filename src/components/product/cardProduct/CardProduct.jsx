import { Card, CardContent, CardMedia, Typography, useTheme, Chip, CardActions } from "@mui/material";
import ButtonProduct from "./buttonProduct/ButtonProduct.jsx";
const CardProduct = ({ model, color, img, imgAlt, usage, desc, price, year, brand }) => {
  const theme = useTheme();
  return (
    <Card
      sx={{
        maxWidth: { xs: "350px", md: "1200px" },
        width: { xs: "90%", md: "90%" },
        height: "fit-content",
        mb: "50px",
        border: `1px solid #b3b3b2`,
        display: "flex",
        flexDirection: { xs: "column", md: "row" },
        borderRadius: "5px",
        boxShadow: " 0px 0px 10px 0px rgba(0,0,0,0.3)",
        cursor: "pointer",
      }}
    >
      <CardMedia
        sx={{
          height: { xs: "150px", md: "auto" },
          width: { xs: "100%", md: "30%" },
          objectFit: "cover",
        }}
        image={`${img}`}
        title={imgAlt}
      />
      <CardContent
        sx={{
          height: "Auto",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          width: "100%",
          gap: "3px",
          position: "relative",
        }}
      >
        <Typography
          variant="body1"
          sx={{
            fontSize: "13px",
            fontWeight: "bold",
            fontFamily: "HelveticaNowDisplay",
            color: theme.palette.secondary.main,
            letterSpacing: "1.7px",
          }}
        >
          {brand}
        </Typography>

        <Typography
          variant="h6"
          sx={{
            fontFamily: "HelveticaNowDisplay",
            fontWeight: "bold",
            color: theme.palette.black.main,
            letterSpacing: "1px",
            fontSize: { xs: "20px", md: "25px" },
          }}
        >
          {model}
        </Typography>

        <Chip
          label={usage ? "Usado" : "0 KM"}
          sx={{
            backgroundColor: usage ? "red" : "green",
            color: theme.palette.primary.main,
            fontFamily: "HelveticaNowDisplay",
            fontWeight: "bold",
            position: "absolute",
            top: "10px",
            right: "10px",
          }}
        />

        <Typography
          variant="body2"
          sx={{
            color: theme.palette.secondary.main,
            fontFamily: "HelveticaNowDisplay",
            pb: "10px",
          }}
        >
          {desc}
        </Typography>

        <Typography
          variant="body2"
          sx={{
            fontFamily: "HelveticaNowDisplay",
            color: theme.palette.black.main,
          }}
        >
          <span style={{ fontWeight: "bold" }}>Color:</span> {color.toUpperCase()}
        </Typography>

        <Typography
          variant="body2"
          sx={{
            fontFamily: "HelveticaNowDisplay",
            color: theme.palette.black.main,
            pb: "10px",
          }}
        >
          <span style={{ fontWeight: "bold" }}>Año:</span> {year}
        </Typography>

        <Typography
          variant="body2"
          sx={{
            fontFamily: "HelveticaNowDisplay",
            fontWeight: "bold",
            color: theme.palette.black.main,
            fontSize: "18px",
          }}
        >
          ${price}
        </Typography>

        <CardActions
          sx={{
            padding: "0",
            display: "flex",
            justifyContent: "flex-end",
          }}
        >
          <ButtonProduct />
        </CardActions>
      </CardContent>
    </Card>
  );
};

export default CardProduct;
