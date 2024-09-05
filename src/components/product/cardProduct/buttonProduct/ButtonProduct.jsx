import {  Button, useTheme } from "@mui/material";
import { styled } from '@mui/material/styles';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';const ButtonProduct = () => {
    const theme = useTheme();

    const StyledArrowForwardIcon = styled(ArrowForwardIcon)({
      transition: "transform 0.3s ease",
    });
  
    return (
      <Button
        variant="contained"
        sx={{
          display: "flex",
          width: "130px",
          height: "45px",
          fontFamily: "HelveticaNowDisplay",
          fontSize: "15px",
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
           Info
      </Button>
  )
}

export default ButtonProduct




