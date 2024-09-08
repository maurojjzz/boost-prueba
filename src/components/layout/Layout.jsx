import { Box } from "@mui/material";
import { Routes, Route, useLocation } from "react-router-dom";
import Navbar from "../navbar/Navbar.jsx";
import Home from "../home/Home.jsx";
import Product from "../product/Product.jsx";
import ProductDetailModal from "../product/detailProduct/DetailProduct";

const Layout = () => {
  const location = useLocation();

  const backgroundLocation = location.state?.backgroundLocation;

  return (
    <Box
      sx={{
        width: "100vw",
        height: "100vh",
        position: "relative",
        overflowX: "hidden",
        display: "flex",
        flexDirection: "column",
      }}
    >
      {location.pathname !== "/" && <Navbar />}
      <Box
        sx={{
          flexGrow: 1,
          display: "flex",
          flexDirection: "column",
        }}
      >
        <Routes location={backgroundLocation || location}>
          <Route path="/" element={<Home />} />
          <Route path="/products" element={<Product />} />
        </Routes>

        {backgroundLocation && (
          <Routes>
            <Route path="/products/:id" element={<ProductDetailModal />} />
          </Routes>
        )}
      </Box>
    </Box>
  );
};

export default Layout;
