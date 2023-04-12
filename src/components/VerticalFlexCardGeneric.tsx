import React, { MouseEventHandler } from "react";
import { Box, VStack, Heading, Text, Button, HStack } from "@chakra-ui/react";
import { ReactNodeProps } from "../utils/types";
import { useMediaQuery } from "@chakra-ui/react";

function VerticalFlexCard({ children }: ReactNodeProps) {
  const [isLargeScreen] = useMediaQuery("(min-width: 1024px)");
  const [isMediumScreen] = useMediaQuery(
    "(min-width: 768px) and (max-width: 1023px)"
  );
  const [isSmallScreen] = useMediaQuery("(max-width: 767px)");
  const [isExtraSmallScreen] = useMediaQuery("(max-width: 479px)");

  return (
    <Box
      bg="blue.100"
      borderWidth="1px"
      borderRadius="lg"
      overflow="hidden"
      boxShadow="md"
      marginTop="40px"
      marginLeft={isLargeScreen ? 300 : 0}
      marginRight={isLargeScreen ? 300 : 0}
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
