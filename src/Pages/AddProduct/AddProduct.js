import { Button, Stack, TextField, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import styles from "../../Assets/Styles/AddProduct.module.css";
import ArrowBackOutlinedIcon from "@mui/icons-material/ArrowBackOutlined";
import Emptycard from "../../Components/Emptycard";
import Producttypecard from "../../Components/Producttypecard";
import ElectricBoltIcon from "@mui/icons-material/ElectricBolt";
import TrendingUpIcon from "@mui/icons-material/TrendingUp";
import TrendingDownIcon from "@mui/icons-material/TrendingDown";
import AvailableSizeCard from "../../Components/AvailableSizeCard";
import SeasonCard from "../../Components/SeasonCard";
import LightModeIcon from "@mui/icons-material/LightMode";
import FilterVintageIcon from "@mui/icons-material/FilterVintage";
import AcUnitIcon from "@mui/icons-material/AcUnit";
import SpaIcon from "@mui/icons-material/Spa";
import ContainerWrapper from "../../Components/ContainerWrapper/ContainerWrapper";
import Colorcircle from "../../Components/Colorcircle";

function AddProduct() {
  const handleSubmit = () => {
    console.log("hello");
  };

  const formObj = {
    name: "",
    money: "",
    desc: "",
    colors: [],
    productType1: [],
    size: [],
    season: [],
  };

  /* const [updatedformobj, setUpdatedFormObj] = useState(formObj);

  const handleType = (typename) => {
    console.log(typename);
    setUpdatedFormObj({
      ...formObj,
      productType1: [...formObj.productType1, typename],
    });
    console.log(updatedformobj);
  }; */

  const [name, setName] = useState();
  const [money, setMoney] = useState();
  const [desc, setDesc] = useState();
  const [typearr, setTypeArr] = useState([]);
  const [value, setValue] = useState([]);
  const [colorvalue, setColorValue] = useState([]);

  const [sizevaluearr, setSizeValueArr] = useState([]);
  const [seasonvaluearr, setSeasonValueArr] = useState([]);
  const [images, setImages] = useState([]);

  const [sizearr, setSizeArr] = useState([]);
  const [seasonarr, setSeasonArr] = useState([]);

  const colors = ["#D7FFF1", "#AAFCB8", "#8CD790", "#77AF9C", "#E0B0D5"];

  const productType = [
    {
      title: "Trending",
      iconname: <ElectricBoltIcon />,
    },

    {
      title: "Newly Arrived",
      iconname: <TrendingUpIcon sx={{ color: "green" }} />,
    },
    {
      title: "On Sale",
      iconname: <TrendingDownIcon sx={{ color: "red" }} />,
    },
  ];

  const availableSizes = ["XS", "S", "M", "L", "XL", "XXL"];

  const seasons = [
    {
      title: "Summer",
      iconname: <LightModeIcon />,
      color: "orange",
    },
    {
      title: "Spring",
      iconname: <FilterVintageIcon />,
      color: "rgba(92,145,105,255)",
    },
    {
      title: "Autumn",
      iconname: <SpaIcon />,
      color: "brown",
    },
    {
      title: "Winter",
      iconname: <AcUnitIcon />,
      color: "blue",
    },
  ];

  const handleName = (e) => {
    setName(e.target.value);
  };

  const handleMoney = (e) => {
    setMoney(e.target.value);
  };

  const handleDesc = (e) => {
    setDesc(e.target.value);
  };

  const handleColor = (color) => {
    setTypeArr((arr) => [...arr, color]);
    let selectedType = productType.find((o) => o.title === color);
    setValue((arr) => [
      ...arr,
      <Producttypecard iconname={selectedType.iconname} />,
    ]);
  };

  const handleType = (typename) => {
    setTypeArr((arr) => [...arr, typename]);
    let selectedType = productType.find((o) => o.title === typename);
    setValue((arr) => [
      ...arr,
      <Producttypecard iconname={selectedType.iconname} />,
    ]);
  };

  const handleSize = (sizename) => {
    setSizeArr((arr) => [...arr, sizename]);
    setSizeValueArr((arr) => [
      ...arr,
      <AvailableSizeCard sizename={sizename} />,
    ]);
  };
  const handleSeason = (seasonname) => {
    setSeasonArr((arr) => [...arr, seasonname]);
    let selectedSeason = seasons.find((s) => s.title === seasonname);

    setSeasonValueArr((arr) => [
      ...arr,
      <SeasonCard
        seasonname={selectedSeason.title}
        iconname={selectedSeason.iconname}
        Color={selectedSeason.color}
      />,
    ]);
  };

  useEffect(() => {
    console.log(name);
    console.log(money);
    console.log(desc);
    console.log(typearr);
    console.log(sizearr);
    console.log(seasonarr);
    console.log(value);
  }, [name, money, desc, typearr, sizearr, seasonarr, value]);

  return (
    <Stack
      direction="row"
      justifyContent="space-between"
      className={styles.addproduct}
    >
      <Stack sx={{ width: "70%" }}>
        <Stack direction="row" alignItems="center">
          <Button startIcon={<ArrowBackOutlinedIcon />}></Button>
          <Typography
            variant="h6"
            component="p"
            sx={{ fontWeight: "100", fontSize: "1rem" }}
          >
            Back to Products
          </Typography>
        </Stack>
        <Stack direction="row" spacing={2}>
          <Stack>
            <Stack>
              <Stack>
                <ContainerWrapper
                  borderRadius="15px"
                  border="2px dashed grey"
                  width="100%"
                  height="150px"
                >
                  {images[0]}
                </ContainerWrapper>
                <Stack direction="row">
                  <ContainerWrapper
                    borderRadius="15px"
                    border="2px dashed grey"
                    width="105px"
                    height="70px"
                  >
                    {images[1]}
                  </ContainerWrapper>
                  <ContainerWrapper
                    borderRadius="15px"
                    border="2px dashed grey"
                    width="105px"
                    height="70px"
                  >
                    {images[2]}
                  </ContainerWrapper>
                  <ContainerWrapper
                    borderRadius="15px"
                    border="2px dashed grey"
                    width="105px"
                    height="70px"
                  >
                    {images[3]}
                  </ContainerWrapper>
                </Stack>
              </Stack>
            </Stack>
          </Stack>
          <Stack>
            <form onSubmit={handleSubmit}>
              <Stack>
                <input
                  type="text"
                  placeholder="enter product name"
                  onChange={handleName}
                />
                <input
                  type="text"
                  placeholder="enter money"
                  onChange={handleMoney}
                />
                <TextField
                  id="filled-multiline-static"
                  multiline
                  rows={4}
                  onChange={handleDesc}
                />
                <Stack>
                  <Typography>Colors</Typography>
                  <Stack direction="row" spacing={1}>
                    <ContainerWrapper
                      borderRadius="50%"
                      border="2px dashed grey"
                      width="50px"
                      height="50px"
                    >
                      {colorvalue[0]}
                    </ContainerWrapper>
                    <ContainerWrapper
                      borderRadius="50%"
                      border="2px dashed grey"
                      width="50px"
                      height="50px"
                    >
                      {colorvalue[1]}
                    </ContainerWrapper>
                    <ContainerWrapper
                      borderRadius="50%"
                      border="2px dashed grey"
                      width="50px"
                      height="50px"
                    >
                      {colorvalue[2]}
                    </ContainerWrapper>
                    <ContainerWrapper
                      borderRadius="50%"
                      border="2px dashed grey"
                      width="50px"
                      height="50px"
                    >
                      {colorvalue[3]}
                    </ContainerWrapper>
                    <ContainerWrapper
                      borderRadius="50%"
                      border="2px dashed grey"
                      width="50px"
                      height="50px"
                    >
                      {colorvalue[4]}
                    </ContainerWrapper>
                  </Stack>
                  <Stack>
                    <Typography>Product Type</Typography>
                    <Stack direction="row" spacing={2}>
                      <ContainerWrapper
                        borderRadius="15px"
                        border="2px dashed grey"
                        width="100px"
                        height="50px"
                      >
                        {value[0]}
                      </ContainerWrapper>
                      <ContainerWrapper
                        borderRadius="15px"
                        border="2px dashed grey"
                        width="100px"
                        height="50px"
                      >
                        {value[1]}
                      </ContainerWrapper>
                      <ContainerWrapper
                        borderRadius="15px"
                        border="2px dashed grey"
                        width="100px"
                        height="50px"
                      >
                        {value[2]}
                      </ContainerWrapper>
                    </Stack>
                  </Stack>

                  <Stack>
                    <Typography>Available Size</Typography>
                    <Stack
                      direction="row"
                      flexWrap="wrap"
                      gap={2}
                      sx={{ width: "50%", height: "50%" }}
                    >
                      <ContainerWrapper
                        borderRadius="15px"
                        border="2px dashed grey"
                        width="105px"
                        height="70px"
                      >
                        {sizevaluearr[0]}
                      </ContainerWrapper>
                      <ContainerWrapper
                        borderRadius="15px"
                        border="2px dashed grey"
                        width="105px"
                        height="70px"
                      >
                        {sizevaluearr[1]}
                      </ContainerWrapper>
                      <ContainerWrapper
                        borderRadius="15px"
                        border="2px dashed grey"
                        width="105px"
                        height="70px"
                      >
                        {sizevaluearr[2]}
                      </ContainerWrapper>
                      <ContainerWrapper
                        borderRadius="15px"
                        border="2px dashed grey"
                        width="105px"
                        height="70px"
                      >
                        {sizevaluearr[3]}
                      </ContainerWrapper>
                      <ContainerWrapper
                        borderRadius="15px"
                        border="2px dashed grey"
                        width="105px"
                        height="70px"
                      >
                        {sizevaluearr[4]}
                      </ContainerWrapper>
                      <ContainerWrapper
                        borderRadius="15px"
                        border="2px dashed grey"
                        width="105px"
                        height="70px"
                      >
                        {sizevaluearr[5]}
                      </ContainerWrapper>
                    </Stack>
                  </Stack>
                  <Stack>
                    <Typography>Season</Typography>
                    <Stack
                      direction="row"
                      flexWrap="wrap"
                      gap={2}
                      sx={{ width: "50%", height: "50%" }}
                    >
                      <ContainerWrapper
                        borderRadius="15px"
                        border="2px dashed grey"
                        width="200px"
                        height="90px"
                      >
                        {seasonvaluearr[0]}
                      </ContainerWrapper>
                      <ContainerWrapper
                        borderRadius="15px"
                        border="2px dashed grey"
                        width="200px"
                        height="90px"
                      >
                        {seasonvaluearr[1]}
                      </ContainerWrapper>
                      <ContainerWrapper
                        borderRadius="15px"
                        border="2px dashed grey"
                        width="200px"
                        height="90px"
                      >
                        {seasonvaluearr[2]}
                      </ContainerWrapper>
                      <ContainerWrapper
                        borderRadius="15px"
                        border="2px dashed grey"
                        width="200px"
                        height="90px"
                      >
                        {seasonvaluearr[3]}
                      </ContainerWrapper>
                    </Stack>
                  </Stack>
                </Stack>
              </Stack>
            </form>
          </Stack>
        </Stack>
      </Stack>

      <Stack
        sx={{
          backgroundColor: "rgba(85,73,95,255)",
          borderRadius: "25px",
          color: "white",
          width: "30%",
          padding: "3rem 2rem",
        }}
      >
        <Stack>
          <Stack>
            <Typography variant="h6">Recent Colors</Typography>

            <Stack direction="row" spacing={2}>
              {colors.map((color) => {
                return (
                  <Colorcircle
                    bgcolor={color}
                    func={() => handleColor(color)}
                  />
                );
              })}
            </Stack>
          </Stack>
          <Stack>
            <Typography variant="h6">Product Type</Typography>
            <Stack direction="row" spacing={2} justifyContent="space-between">
              {productType.map((type) => {
                return (
                  <Producttypecard
                    typename={type.title}
                    iconname={type.iconname}
                    func={() => handleType(type.title)}
                  />
                );
              })}
            </Stack>
          </Stack>
          <Stack>
            <Typography variant="h6">Available Size</Typography>
            <Stack
              direction="row"
              flexWrap="wrap"
              columnGap={3}
              rowGap={2}
              justifyContent="space-between"
            >
              {availableSizes.map((availableSize) => {
                return (
                  <AvailableSizeCard
                    sizename={availableSize}
                    func={() => handleSize(availableSize)}
                  />
                );
              })}
            </Stack>
          </Stack>
          <Stack>
            <Typography variant="h6">Season</Typography>
            <Stack
              direction="row"
              flexWrap="wrap"
              justifyContent="space-between"
              columnGap={10}
              rowGap={2}
            >
              {seasons.map((season) => {
                return (
                  <SeasonCard
                    seasonname={season.title}
                    iconname={season.iconname}
                    Color={season.color}
                    func={() => {
                      handleSeason(season.title);
                    }}
                  />
                );
              })}
            </Stack>
          </Stack>
        </Stack>
      </Stack>
    </Stack>
  );
}

export default AddProduct;
