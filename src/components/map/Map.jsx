import { Box } from "@mui/material";
const Map = () => {
  return (
    <Box
      sx={{
        width: "100%",
        height: "50vh",
        border: 0,

        "& focus": {
          border: 0,
        },
      }}
    >
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1674.0561890090128!2d-60.63153975841736!3d-32.94804230936838!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95b7ab1dbae22f3f%3A0xcfaebb2329ff48af!2sC%C3%B3rdoba%20551%2C%20S2000AWC%20Rosario%2C%20Santa%20Fe!5e0!3m2!1ses!2sar!4v1725399652068!5m2!1ses!2sar"
        width="100%"
        height="100%"
        style={{ border: 0 }}
        allowFullScreen="false"
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      />
    </Box>
  );
};

export default Map;
