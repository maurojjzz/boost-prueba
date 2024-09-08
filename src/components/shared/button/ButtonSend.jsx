import {  Button, useTheme } from "@mui/material";
import { styled } from '@mui/material/styles';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
const ButtonSend = ({type}) => {
  const theme = useTheme();

  const StyledArrowForwardIcon = styled(ArrowForwardIcon)({
    transition: "transform 0.3s ease",
  });

  return (
    <Button
      variant="contained"
      type={type}
      sx={{
        display: "flex",
        width: "300px",
        height: "65px",
        mt: "20px",
        fontFamily: "HelveticaNowDisplay",
        fontSize: "18px",
        fontWeight: "bold",
        letterSpacing: "1px",
        backgroundColor: theme.palette.black.main,
        color: theme.palette.primary.main,
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
        Enviar
    </Button>
  )
}

export default ButtonSend
