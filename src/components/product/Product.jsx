import { useEffect, useState } from "react";
import { ServiceHTTP } from "../../utils/services/ServiceHTTP.js";
import {
  Box,
  Typography,
  Select,
  FormControl,
  MenuItem,
  Checkbox,
  FormControlLabel,
  InputLabel,
  useTheme,
} from "@mui/material";
import CarProduct from "./cardProduct/CardProduct.jsx";

const Product = () => {
  const [products, setProducts] = useState([]);
  const [marcas, setMarcas] = useState([]);

  const [selectedBrand, setSelectedBrand] = useState("");
  const [showUsed, setShowUsed] = useState(false);
  const [sortOrder, setSortOrder] = useState("desc");

  const theme = useTheme();

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

  const handleBrandChange = (event) => {
    setSelectedBrand(event.target.value);
  };

  const handleUsageChange = (event) => {
    setShowUsed(event.target.checked);
  };

  const handleSortChange = (event) => {
    setSortOrder(event.target.value);
  };

  const filteredAndSortedProducts = products
    .filter(
      (product) =>
        (selectedBrand ? product.brandId === selectedBrand : true) && (showUsed ? product.usage === true : true)
    )
    .sort((a, b) => {
      if (sortOrder === "asc") {
        return a.price - b.price;
      } else {
        return b.price - a.price;
      }
    });

  return (
    <Box
      sx={{
        display: "flex",
        flexGrow: 1,
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Typography
        variant="h3"
        sx={{
          alignSelf: "flex-start",
          fontFamily: "HelveticaNowDisplay",
          maxWidth: "900px",
          width: { sm: "75%" },
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

      <Box
        sx={{
          mb: 2,
          display: "flex",
          flexDirection: { xs: "column", md: "row" },
          maxWidth: "900px",
          justifyContent: "space-between",
          width: "90%",
          p: "15px",
          borderRadius: "5px",
          gap: "10px",
        }}
      >
        <FormControl
          sx={{
            backgroundColor: theme.palette.primary.main,
          }}
        >
          <InputLabel
            sx={{
              color: theme.palette.black.main,
              fontFamily: "HelveticaNowDisplay",
              fontSize: "18px",
              letterSpacing: "1px",
              "&.Mui-focused": {
                color: theme.palette.black.main,
                backgroundColor: theme.palette.primary.main,
              },
            }}
          >
            Marca
          </InputLabel>
          <Select
            value={selectedBrand}
            onChange={handleBrandChange}
            label="Marca"
            sx={{
              "&.Mui-focused": {
                border: "1px solid #c3c4c3",
              },
              outline: "none",
            }}
          >
            <MenuItem value="">
              <em>Todas las marcas</em>
            </MenuItem>
            {marcas.map((marca) => (
              <MenuItem key={marca.id} value={marca.id}>
                {marca.name}
              </MenuItem>
            ))}
          </Select>
        </FormControl>

        <FormControlLabel
          sx={{
            "& .MuiCheckbox-root.Mui-checked": {
              color: "green",
            },
          }}
          control={<Checkbox checked={showUsed} onChange={handleUsageChange} />}
          label="Mostrar solo autos usados"
        />

        <FormControl
          sx={{
            backgroundColor: theme.palette.primary.main,
          }}
        >
          <InputLabel
            sx={{
              color: theme.palette.black.main,
              fontFamily: "HelveticaNowDisplay",
              fontSize: "18px",
              "&.Mui-focused": {
                color: theme.palette.black.main,
                backgroundColor: theme.palette.primary.main,
              },
            }}
          >
            Ordenar por Precio
          </InputLabel>
          <Select value={sortOrder} onChange={handleSortChange} label="Ordenar por Precio">
            <MenuItem value="asc">De menor a mayor</MenuItem>
            <MenuItem value="desc">De mayor a menor</MenuItem>
          </Select>
        </FormControl>
      </Box>

      <Box
        sx={{
          width: "100%",
          display: "flex",
          flexWrap: "wrap",
          gap: "20px",
          justifyContent: "space-around",
        }}
      >
        {filteredAndSortedProducts.map((product) => (
          <CarProduct
            key={product.id}
            id={product.id}
            model={product.model}
            desc={product.description}
            img={product.image}
            imgAlt={`vehículo ${product.model}`}
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
