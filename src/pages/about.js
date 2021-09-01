import React from "react";
import {
  chakra,
  Box,
  Image,
  Flex,
  useColorModeValue,
  Link,
} from "@chakra-ui/react";

const About = () => {
  return (

    <Flex
      pt="10%"
      pb="20%"
      w="full"
      h="container.sm"

      bgPos="center"
      bgSize="cover"
      loading="lazy"
      h={["full"]}
      backgroundImage="Images/NordicOceanScene1.jpg"
    >
      <Box


      >





        {/* <Image
         bgOpacity="25%"
         zIndex={-10}
      
      w="full"
      fit="cover"
      src="Images/NordicOceanScene1.jpg"
      alt=""
      loading="lazy"
    />  */}
        <Box


          w="full"
          mx="auto"
          py={4}
          px={4}
          bg={useColorModeValue("gray.200", "gray.800")}
          opacity= ".6"
          // bgGradient='linear(to-b, white, green.500@0.3)'
          shadow="lg"
          rounded="lg"

        >
          {/* <Flex justifyContent={{ base: "center", md: "end" }} mt={-16}>
          <Image
            w={100}
            h={100}
            fit="cover"
            rounded="full"
            borderStyle="solid"
            borderWidth={2}
            borderColor={useColorModeValue("brand.500", "brand.400")}
            alt="Picture Of the creator of this Website"
            src="ProfilePic.jpg"
          />
        </Flex> */}

          <chakra.h2
            align="center"
            color={useColorModeValue("gray.800", "white")}
            fontSize={{ base: "2xl", md: "5xl" }}
            mt={{ base: 2, md: 30 }}
            fontWeight="bold"
          >
            Passionate
          </chakra.h2>
          <chakra.h2
            align="center"
            color={useColorModeValue("gray.800", "white")}
            fontSize={{ base: "2xl", md: "5xl" }}
            mt={{ base: 2, md: 30 }}
            fontWeight="bold"
          >
            Creative
          </chakra.h2>

          <chakra.p mt={20} color={useColorModeValue("gray.600", "gray.200")} fontSize={{ base: "2xl", md: "3xl" }}>
            Hi, my name is Xavier Davis.
            I am 20 years old and a full-stack web developer and 3D artist.
            My love for web development started when I was 15, which pushed me to go to a coding Bootcamp as a Full-Stack at UCR.
            This class opened my horizon to 3D modeling, an interchange between programming and art.
            This love for creating 3D scenes has always been there since I loved drawing as a boy wanting to blur the lines with reality and art.
            Now these skills, I can blur the lines and create something new.
          </chakra.p>

          <Flex justifyContent="end" mt={20}>


            {/*Maybe VVV I can put my resume link in here */}
            {/* <Link

            fontSize="xl"
            color={useColorModeValue("brand.500", "brand.300")}
          >
            John Doe
          </Link> */}
          </Flex>
        </Box>


      </Box>
    </Flex>
  );
};

export default About;