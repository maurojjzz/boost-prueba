import { useEffect, useState } from "react";
import { ServiceHTTP } from "../../utils/services/ServiceHTTP.js";
import { Box, Typography } from "@mui/material";
import CarProduct from "./cardProduct/CardProduct.jsx";

const Product = () => {
  const [products, setProducts] = useState([]);
  const [marcas, setMarcas] = useState([]);


  const brands = new ServiceHTTP("brand");
  const cars = new ServiceHTTP("car");

  const getCars = async () => {
    try {
      const response = await cars.get();
      setProducts(response);
    } catch (error) {
      console.log(error);
    }
  };

  const getBrands = async () => {
    try {
      const response = await brands.get();
      setMarcas(response);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getCars();
  }, []);

  useEffect(() => {
    getBrands();
  }, []);


  return (
    <Box
      sx={{
        display: "flex",
        flexGrow: 1, 
      }}
    >
      <Box
        sx={{
          width: "100%",
          display: "flex",
          flexWrap: "wrap",
          gap: "20px",
          justifyContent: "space-around",
        }}
      >
        <Typography
        variant="h3"
        sx={{
          alignSelf: "flex-start",
          fontFamily: "HelveticaNowDisplay",
          maxWidth: "1200px" ,
          textAlign: "start",
          ml: "15px",
          my: "50px",
          fontSize: {
            xs: "55px",
            sm: "80px",
          },
        }}
      >
        Nuestro catalogo de vehiculos
      </Typography>
        {products.map((product) => (
          <CarProduct
            key={product.id}
            model={product.model}
            desc={product.description}
            img={product.image}
            imgAlt={`vehiculo ${product.model}`}
            usage={product.usage}
            color={product.color}
            price={product.price}
            year={product.year}
            brand={marcas.find((brand) => brand.id === product.brandId)?.name}
          />
        ))}
      </Box>
    </Box>
  );
};

export default Product;
