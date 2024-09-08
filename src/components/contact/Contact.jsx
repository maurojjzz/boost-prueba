import { Box, Typography, useTheme } from "@mui/material";
import Form from "./form/Form.jsx";
const Contact = () => {
  const theme = useTheme();
  return (
    <Box
      id={"contact"}
      sx={{
        my: "50px",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <Typography
        variant="h3"
        sx={{
          alignSelf: "flex-start",
          fontFamily: "HelveticaNowDisplay",
          width: { sm: "75%" },
          maxWidth: "940px",
          textAlign: "start",
          ml: "15px",
          fontSize: {
            xs: "55px",
            sm: "80px",
          },
        }}
      >
        Ponte en contacto con nosotros
      </Typography>
      <Typography
          variant="subtitle1"
          component="p"
          sx={{
            fontFamily: "HelveticaNowDisplay",
            alignSelf: "flex-start",
            color: theme.palette.black.main,
            textAlign: "start",
            ml: "15px",
            mt: "35px",
            fontSize: "18px",
            width: "90%",
            maxWidth: "600px",
          }}
        >
          Te contacteremos a la brevedad via email para resolver tus preguntas o dudas.
        </Typography>

      <Form />
    </Box>
  );
};

export default Contact;
