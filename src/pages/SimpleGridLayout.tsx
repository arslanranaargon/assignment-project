import { Box, SimpleGrid } from "@chakra-ui/react";
import React from "react";

const SimpleGridLayout = () => {
  return (
    <SimpleGrid columns={3} spacing={10}>
      <Box bg="tomato" height="400px">
        <SimpleGrid columns={3} spacing={10}>
          <Box>One</Box>
          <Box>One</Box>
          <Box>One</Box>
          <Box>One</Box>
        </SimpleGrid>
      </Box>
      <Box bg="tomato" height="80px">
        One
      </Box>
      <Box>One</Box>
      <Box>One</Box>
      <Box>One</Box>
      <Box>One</Box>
      <Box>One</Box>
      <Box>One</Box>
      <Box>One</Box>
      <Box>One</Box>
      <Box>One</Box>
      <Box>One</Box>
    </SimpleGrid>
  );
};

export default SimpleGridLayout;
