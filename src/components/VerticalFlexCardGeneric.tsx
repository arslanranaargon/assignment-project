import React, { MouseEventHandler } from "react";
import { Box, VStack, Heading, Text, Button, HStack } from "@chakra-ui/react";
import { ReactNodeProps } from "../utils/types";

function VerticalFlexCard({ children }: ReactNodeProps) {
  return (
    <Box
      bg="blue.100"
      borderWidth="1px"
      borderRadius="lg"
      overflow="hidden"
      boxShadow="md"
      color="black"
      marginTop="40px"
      marginLeft={10}
      marginRight={10}
    >
      <VStack
        alignItems="center"
        spacing={5}
        p={6}
        justifyContent="center"
        align="center"
      >
        {children}
      </VStack>
    </Box>
  );
}

export default VerticalFlexCard;
