import { Button, useTheme } from "@mui/material";
import { styled } from "@mui/material/styles";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import { useNavigate } from "react-router-dom";

const ButtonMore = () => {
  const theme = useTheme();
  const navigate = useNavigate();
  const StyledArrowForwardIcon = styled(ArrowForwardIcon)({
    transition: "transform 0.3s ease",
  });

  return (
    <Button
      variant="contained"
      onClick={() => navigate("/products")}
      sx={{
        display: "flex",
        maxWidth: "500px",
        width: "90%",
        fontFamily: "HelveticaNowDisplay",
        fontSize: "18px",
        fontWeight: "bold",
        letterSpacing: "1px",
        backgroundColor: theme.palette.black.main,
        color: theme.palette.primary.main,
        border: `3px solid ${theme.palette.primary.main}`,
        "&:hover": {
          backgroundColor: theme.palette.primary.main,
          border: `2px solid ${theme.palette.black.main}`,
          color: theme.palette.black.main,
          "& .MuiSvgIcon-root": {
            transform: "translateX(10px)",
          },
        },
      }}
      endIcon={<StyledArrowForwardIcon />}
    >
      Ver catalogo vehiculos
    </Button>
  );
};

export default ButtonMore;
