import { useLocation, useNavigate } from "react-router-dom";
import { Box, Modal, useTheme, IconButton, Typography, Chip } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";

const ProductDetailModal = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const theme = useTheme();

  const product = location.state?.product;

  const handleClose = () => {
    navigate("/products");
  };

  return (
    <Modal
      open={true}
      onClose={handleClose}
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        outline: "none",
      }}
    >
      <Box
        sx={{
          backgroundColor: theme.palette.primary.main,
          height: "auto",
          width: "90%",
          maxWidth: "900px",
          position: "relative",
        }}
      >
        <IconButton
          onClick={handleClose}
          aria-label="close"
          size="small"
          sx={{
            position: "absolute",
            top: "10px",
            right: "10px",
          }}
        >
          <CloseIcon fontSize="large" />
        </IconButton>

        <Chip
          label={product.usage ? "Usado" : "0 KM"}
          sx={{
            backgroundColor: product.usage ? "red" : "green",
            color: theme.palette.primary.main,
            fontFamily: "HelveticaNowDisplay",
            fontWeight: "bold",
            position: "absolute",
            top: "70px",
            right: "20px",
          }}
        />

        <Box
          sx={{
            width: "100%",
            height: "100%",
          }}
        >
          <Typography
            variant="h6"
            sx={{
              mt: "40px",
              ml: "15px",
              color: theme.palette.secondary.main,
              fontFamily: "HelveticaNowDisplay",
              letterSpacing: "1.7px",
            }}
          >
            {product.brand}
          </Typography>
          <Typography
            variant="h5"
            sx={{
              ml: "15px",
              color: theme.palette.black.main,
              fontFamily: "HelveticaNowDisplay",
              letterSpacing: "1.7px",
              fontWeight: "bold",
              fontSize: "30px",
            }}
          >
            {product.model}
          </Typography>

          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              height: "100%",
              overflowY: "auto",
            }}
          >
            <Box
              sx={{
                width: "100%",
                display: "flex",
                justifyContent: "center",
                mb: "20px",
              }}
            >
              <img
                src={product.img}
                alt={product.imgAlt}
                style={{
                  maxWidth: "100%",
                  width: "auto",
                  maxHeight: "300px",
                  objectFit: "cover",
                }}
              />
            </Box>

            <Typography
              variant="body1"
              sx={{
                color: theme.palette.text.secondary,
                fontFamily: "HelveticaNowDisplay",
                letterSpacing: "1.7px",
                textAlign: "center",
              }}
            >
              {product.desc}
            </Typography>

            <Box
              sx={{
                width: "100%",
                display: "flex",
                justifyContent: "center",
                gap: "50px",
              }}
            >
              <Typography
                variant="body1"
                sx={{
                  fontFamily: "HelveticaNowDisplay",
                  letterSpacing: "1.7px",
                  mt: "10px",
                }}
              >
                <span style={{ fontWeight: "bold" }}>Color:</span> {product.color}
              </Typography>
              <Typography
                variant="body1"
                sx={{
                  fontFamily: "HelveticaNowDisplay",
                  letterSpacing: "1.7px",
                  mt: "10px",
                }}
              >
                <span style={{ fontWeight: "bold" }}>Año:</span> {product.year}
              </Typography>
            </Box>

            <Typography
              variant="body1"
              sx={{
                color: theme.palette.text.primary,
                fontFamily: "HelveticaNowDisplay",
                letterSpacing: "1.7px",
                fontWeight: "bold",
                mt: "10px",
              }}
            >
              ${product.price.toLocaleString()}
            </Typography>

            <Box
              sx={{
                width: "100%",
                mt: "20px",
                mb: "40px",
                py: "10px",
                backgroundColor: theme.palette.black.main,
              }}
            >
              <Typography
                variant="body1"
                sx={{
                  fontFamily: "HelveticaNowDisplay",
                  letterSpacing: "1.7px",
                  fontWeight: "bold",
                  textAlign: "center",
                  textTransform: "uppercase",
                  color: theme.palette.primary.main,
                }}
              >
                Para adquirir este vehiculo visitanos en nuestro consecionario.
              </Typography>
            </Box>
          </Box>
        </Box>
      </Box>
    </Modal>
  );
};

export default ProductDetailModal;
