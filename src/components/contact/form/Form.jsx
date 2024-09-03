import { Box, TextField, useTheme } from "@mui/material";
import { ButtonSend } from "../../shared";
const Form = () => {
  const theme = useTheme();
  return (
    <Box
      component={"form"}
      sx={{
        "& .MuiInputLabel-root.Mui-focused": {
          color: theme.palette.black.main,
        },
        "& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline": {
          borderColor: theme.palette.black.main,
        },
        width: "80%",
        maxWidth: "1200px",
        mt: "50px",
        display: "flex",
        flexDirection: "column",
      }}
    >
      <TextField
        label="Email"
        variant="outlined"
        type="email"
        sx={{
          mt: "20px",
          borderRadius: "0px",
        }}
      />

      <TextField
        label="Mensaje"
        variant="outlined"
        multiline
        rows={6}
        fullWidth
        sx={{
          my: "1.5rem",
        }}
      />
      <Box
        sx={{
          alignSelf: {
            xs: "center",
            sm: "flex-end",
          },
        }}
      >
        <ButtonSend />
      </Box>
    </Box>
  );
};

export default Form;
