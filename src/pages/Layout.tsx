import { Box, Grid, GridItem } from "@chakra-ui/react";
import React from "react";

const Layout = () => {
  return (
    <Box

    // sets the height to 800px on extra-small screens (base),
    // 900px on small screens (sm),
    // 1000px on medium screens (md),
    // 1100px on large screens (lg),
    // 1200px on extra-large screens (xl),
    // and 1300px on 2-extra-large screens (2xl)
    >
      <Grid
        templateAreas={`"header header"
                      "nav main"
                      "nav footer"`}
        gridTemplateRows={"50px 1fr 100px"}
        gridTemplateColumns={"150px 1fr"}
        gap="3"
        color="blackAlpha.700"
        fontWeight="bold"
        height={{
          base: "calc(var(--vh, 1vh) * 100)",
          sm: "calc(var(--vh, 1vh) * 100)",
          md: "calc(var(--vh, 1vh) * 100)",
          lg: "calc(var(--vh, 1vh) * 100)",
          xl: "calc(var(--vh, 1vh) * 100)",
          "2xl": "calc(var(--vh, 1vh) * 100)",
        }}
      >
        <GridItem pl="2" bg="orange.300" area={"header"}>
          Header
        </GridItem>
        <GridItem pl="2" bg="pink.300" area={"nav"}>
          Nav
        </GridItem>
        <GridItem pl="2" bg="green.300" area={"main"}>
          Main
        </GridItem>
        <GridItem pl="2" bg="blue.300" area={"footer"}>
          Footer
        </GridItem>
      </Grid>
    </Box>
  );
};

export default Layout;
