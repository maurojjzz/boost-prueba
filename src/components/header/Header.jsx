import { Box, Typography, useTheme } from "@mui/material";

const Header = () => {
  const theme = useTheme();
  return (
    <Box
      sx={{
        border: "2px solid white",
        textAlign: "center",
      }}
    >
      <Typography
        variant="h4"
        sx={{
          color: theme.palette.primary.main,
          fontFamily: "Unison-Pro-Bold",
          textAlign: "center",
          textShadow: "2px 2px 4px rgba(0, 0, 0, 0.5)",
          fontSize: {
            xs: "calc(1.3rem + 4vw)",
            sm: "calc(2rem + 4vw)",
          },
          border: "1px solid red",
          lineHeight: "100%",
          display: "inline-block",
          whiteSpace: "nowrap",
        }}
      >
        Boost Car
      </Typography>
    </Box>
  );
};

export default Header;
