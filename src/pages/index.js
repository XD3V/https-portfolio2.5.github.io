import React from "react";
import { chakra, Box, useColorModeValue, Icon, Image, Img } from "@chakra-ui/react";
import Footer from '../components/Footer'
//import Nordic from "../../Images/NordicOceanScene1.jpg"
export default function App() {
  const bg = useColorModeValue("#E1E5E6", "gray.800");
  return (
    <Box pos="relative" overflow="hidden" bg={bg} mt={250}>
      <Box maxW="7xl" mx="auto">
        <Box
          pos="relative"
          pb={{ base: 8, sm: 16, md: 20, lg: 280, xl: 320 }}
          maxW={{ lg: "2xl" }}
          w={{ lg: "full" }}
          zIndex={1}
          bg={bg}
          border="solid 1px transparent"
        >
          <Icon
            display={{ base: "none", lg: "block" }}
            position="absolute"
            right={0}
            top={0}
            bottom={0}
            h="full"
            w={48}
            color={bg}
            transform="translateX(50%)"
            fill="currentColor"
            viewBox="0 0 100 100"
            preserveAspectRatio="none"
            aria-hidden="true"
          >
            <polygon points="50,0 100,0 50,100 0,100" />
          </Icon>
          <Box
            mx="auto"
            maxW={{ base: "7xl" }}
            px={{ base: 4, sm: 6, lg: 8 }}
            mt={{ base: 10, sm: 12, md: 16, lg: 20, xl: 28 }}
          >
            <Box
              w="full"
              textAlign={{ sm: "center", lg: "left" }}
              justifyContent="center"
              alignItems="center"
            >
              <chakra.h1
                fontSize={{ base: "4xl", sm: "5xl", md: "7xl" }}
                letterSpacing="tight"
                lineHeight="short"
                fontWeight="extrabold"
                color={useColorModeValue("gray.900", "white")}
              >
                <chakra.span display={{ base: "block", xl: "inline" }}>
                  Xavier Davis
                </chakra.span>

              </chakra.h1>
              <chakra.p
                mt={{ base: 3, sm: 5, md: 5 }}
                fontSize={{ sm: "lg", md: "4xl" }}
                maxW={{ sm: "xl" }}
                mx={{ sm: "auto", lg: 10 }}
                color="gray.500"
              >
                3D Artist/ Full-Stack WebDeveloper
              </chakra.p>
            </Box>
          </Box>
        </Box>
      </Box>
      <Box
        position={{ lg: "absolute" }}
        top={{ lg:0 }}
        bottom={{ lg: "2x1" }}
        right={{ lg: 0 }}
        w={{ lg: "50%" }}
        border='solid 1px transparent'
      >
        <Image
          h={[56, 72, 96, "full"]}
          w="full"
          fit="cover"
          src="/Images/NordicOceanScene1.jpg"
          alt=""
          loading="lazy"
        />
      </Box> 
    </Box>
    
  );
};

