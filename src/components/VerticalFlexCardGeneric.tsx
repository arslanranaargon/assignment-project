import React, { MouseEventHandler } from "react";
import { Box, VStack, Heading, Text, Button, HStack } from "@chakra-ui/react";
import { ReactNodeProps } from "../utils/types";
import { useMediaQuery } from "@chakra-ui/react";

function VerticalFlexCard({ children }: ReactNodeProps) {
  const [isLargeScreen] = useMediaQuery("(min-width: 1024px)");
  return (
    <Box
      bg="blue.100"
      borderWidth="1px"
      borderRadius="lg"
      overflow="hidden"
      boxShadow="md"
      marginTop="40px"
      marginLeft={isLargeScreen ? 800 : 0}
      marginRight={isLargeScreen ? 800 : 0}
      backgroundColor="gray.500"
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
