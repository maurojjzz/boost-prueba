import { Box } from "@mui/material";
import { styled } from "@mui/system";

const StyledImage = styled("img")({
  width: "100%",
  height: "80vh",
  objectFit: "cover",
  objectPosition: "center",

});

const ImageBreakout = () => {
  return (
    <Box 
      sx={{
        height: "auto",
      }}
    >
      <StyledImage
        src="/assets/images/breakout.jpg"
        alt="Descripción de la imagen"
      />
    </Box>
  );
};

export default ImageBreakout;
