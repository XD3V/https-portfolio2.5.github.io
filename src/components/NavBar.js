

// export default Navbar;
import React from "react";
import {
  chakra,
  Flex,
  HStack,
  Link,
  Button,
  useColorModeValue,
  Popover,
  PopoverTrigger,
  PopoverContent,
  Box,
  useDisclosure,
  Spacer,
  IconButton,
  SimpleGrid,
  Stack,
  VStack,
  CloseButton,
  useColorMode,
} from "@chakra-ui/react";
// import { ImHome3 } from "react-icons/im";
import { IoIosArrowDown } from "react-icons/io";
import { AiFillHome, AiOutlineInbox, AiOutlineMenu } from "react-icons/ai";
import { BsFillCameraVideoFill } from "react-icons/bs";
import { FaMoon, FaSun } from "react-icons/fa";
import { RiMacbookLine, RiContactsFill } from "react-icons/ri"
// import {GrContactInfo} from "react-icons/gr"
import NextLink from 'next/link'
import sticky from '../../styles/navBar.module.css'
function Navbar(props) {
  const bg = useColorModeValue("#E1E5E6", "gray.800");
  const cl = useColorModeValue("gray.800", "white");
  const mobileNav = useDisclosure();
  const { toggleColorMode: toggleMode } = useColorMode();
  const text = useColorModeValue("dark", "light");
  const SwitchIcon = useColorModeValue(FaMoon, FaSun);
  const ic = useColorModeValue("brand.600", "brand.50");
  const hbg = useColorModeValue("gray.50", "brand.400");
  const tcl = useColorModeValue("gray.900", "gray.50");
  const dcl = useColorModeValue("gray.500", "gray.50");
  const hbgh = useColorModeValue("gray.100", "brand.500");

  const Section = (props) => {
    return (
      <Link
        m={-3}
        p={3}
        display="flex"
        alignItems="start"
        rounded="lg"
        _hover={{ bg: hbg }}

      >
        <chakra.svg
          flexShrink={0}
          h={6}
          w={6}
          color={ic}
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          aria-hidden="true"


        >
          {props.icon}
        </chakra.svg>
        <Box ml={4}>
          <chakra.p fontSize="sm" fontWeight="700" color={tcl}>
            {props.title}
          </chakra.p>
          <chakra.p mt={1} fontSize="sm" color={dcl}>
            {props.children}
          </chakra.p>
        </Box>
      </Link>
    );
  };

  // const Features = (
  //   <React.Fragment >
  //     <SimpleGrid
  //       columns={{ base: 1, md: 3, lg: 5 }}
  //       pos="relative"
  //       gap={{ base: 6, sm: 8 }}
  //       px={500}
  //       py={6}
  //       p={{ sm: 8 }}

  //     >
  //       <Section
  //         title="ArtWork"
  //         icon={
  //           <path
  //             ImHome3
  //           />
  //         }
  //       >
  //         Get a better understanding of where your traffic is coming from.
  //       </Section>

  //       <Section
  //         title="Websites"
  //         icon={
  //           <path
  //             strokeLinecap="round"
  //             strokeLinejoin="round"
  //             stroke-w="2"
  //             d="M15 15l-2 5L9 9l11 4-5 2zm0 0l5 5M7.188 2.239l.777 2.897M5.136 7.965l-2.898-.777M13.95 4.05l-2.122 2.122m-5.657 5.656l-2.12 2.122"
  //           />
  //         }
  //       >
  //         Speak directly to your customers in a more meaningful way.
  //       </Section>




  //       <Section
  //         title="Gallery"
  //         icon={
  //           <path
  //             strokeLinecap="round"
  //             strokeLinejoin="round"
  //             stroke-w="2"
  //             d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"
  //           />
  //         }
  //       >
  //         Build strategic funnels that will drive your customers to convert
  //       </Section>
  //     </SimpleGrid>
  //     <Box px={{ base: 5, sm: 8 }} py={5} bg={hbg} display={{ sm: "flex" }}>
  //       <Stack direction={{ base: "row" }} spacing={{ base: 6, sm: 10 }}>
  //         <Box display="flow-root">
  //           <Link

  //             m={-3}
  //             p={3}
  //             display="flex"
  //             alignItems="center"
  //             rounded="md"
  //             fontSize="md"
  //             color={tcl}
  //             _hover={{ bg: hbgh }}
  //           >
  //             <chakra.svg
  //               flexShrink={0}
  //               h={6}
  //               w={6}
  //               color="gray.400"
  //               xmlns="http://www.w3.org/2000/svg"
  //               fill="none"
  //               viewBox="0 0 24 24"
  //               stroke="currentColor"
  //               aria-hidden="true"
  //             >
  //               <path
  //                 strokeLinecap="round"
  //                 strokeLinejoin="round"
  //                 stroke-w="2"
  //                 d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z"
  //               />
  //               <path
  //                 strokeLinecap="round"
  //                 strokeLinejoin="round"
  //                 stroke-w="2"
  //                 d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
  //               />
  //             </chakra.svg>
  //             <chakra.span ml={3}>Watch Demo</chakra.span>
  //           </Link>
  //         </Box>

  //         <Box display="flow-root">
  //           <Link

  //             m={-3}
  //             p={3}
  //             display="flex"
  //             alignItems="center"
  //             rounded="md"
  //             fontSize="md"
  //             color={tcl}
  //             _hover={{ bg: hbgh }}
  //           >
  //             <chakra.svg
  //               flexShrink={0}
  //               h={6}
  //               w={6}
  //               color="gray.400"
  //               xmlns="http://www.w3.org/2000/svg"
  //               fill="none"
  //               viewBox="0 0 24 24"
  //               stroke="currentColor"
  //               aria-hidden="true"
  //             >
  //               <path
  //                 strokeLinecap="round"
  //                 strokeLinejoin="round"
  //                 stroke-w="2"
  //                 d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
  //               />
  //             </chakra.svg>
  //             <chakra.span ml={3}>Contact Sales</chakra.span>
  //           </Link>
  //         </Box>
  //       </Stack>
  //     </Box>
  //   </React.Fragment>
  // );

  const MobileNavContent = (
    <VStack

      pos="absolute"
      top={0}
      left={0}
      right={0}
      display={mobileNav.isOpen ? "flex" : "none"}
      flexDirection="column"
      p={2}
      pb={4}
      m={2}
      bg={bg}
      spacing={3}
      rounded="sm"
      shadow="sm"
      zIndex={10}
    >
      <CloseButton
        aria-label="Close menu"
        justifySelf="self-start"
        onClick={mobileNav.onClose}
      />

      <NextLink href="/" passHref>
        <Button w="full" variant="ghost" leftIcon={<AiFillHome />}>
          Home
        </Button>
      </NextLink>
      <NextLink href="/projects" passHref>
        <Button
          w="full"
          variant="ghost"


          leftIcon={<AiOutlineInbox />}
        >
          Projects
        </Button>
      </NextLink>
      <NextLink href="/contact" passHref>
        <Button
          w="full"
          variant="ghost"

          leftIcon={<RiContactsFill />}
        >
          Contact
        </Button>
      </NextLink>
      <NextLink href="/about" passHref>
        <Button
          w="full"
          variant="ghost"

          leftIcon={<RiMacbookLine />}
        >
          About
        </Button>
      </NextLink>
    </VStack>
  );

  return (
    <React.Fragment >
      {/* UI for heading,FlexBoxes,Link*/}
      <chakra.header h="full" bg={bg} w="full" px={{ base: 2, sm: 4 }} py={1}>
        <Flex pb={0} alignItems="left" justifyContent="space-between" mx="auto" >
          <Link display="flex" alignItems="center" href="/">

          </Link>
          <Box display={{ base: "none", md: "inline-flex" }}>
            <HStack spacing={1}>
              <NextLink href="/" passHref>
                <Button display="inline-flex"

                  fontSize="3xl"
                  _hover={{ color: cl }}
                  _focus={{ boxShadow: "none" }}
                  w="full"
                  variant="ghost"
                  leftIcon={<AiFillHome />}>

                </Button>
              </NextLink>
              {/* Start of About Link */}
              <NextLink href="/about" passHref>
                <Button
                  px="10"
                  bg={bg}
                  color="gray.500"
                  display="inline-flex"
                  alignItems="center"
                  fontSize="2xl"
                  _hover={{ color: cl }}
                  _focus={{ boxShadow: "none" }}
                >

                  About
                </Button>
              </NextLink>

              <NextLink href="/projects" passHref>
                {/* Start of Contact Link */}
                <Button
                  px="10"
                  bg={bg}
                  color="gray.500"
                  display="inline-flex"
                  alignItems="center"
                  fontSize="2xl"
                  _hover={{ color: cl }}
                  _focus={{ boxShadow: "none" }}
                >
                  Projects
                </Button>
              </NextLink>

              {/* Start of Project features */}
              <NextLink href="/contact" passHref>
                <Box role="group">

                  <Button
                    bg={bg}
                    color="gray.500"
                    alignItems="center"
                    fontSize="2xl"
                    _hover={{ color: cl }}
                    _focus={{ boxShadow: "none" }}
                  // rightIcon={<IoIosArrowDown />}
                  >
                    Contact
                  </Button>
                  <Box
                    pos="absolute"
                    left={0}
                    w="full"
                    display="none"
                    _groupHover={{ display: "block" }}
                  >
                    {/* {Features} */}
                  </Box>
                </Box>
              </NextLink>
            </HStack>
          </Box>
          <Spacer />
          <Box display="flex" alignItems="center">


            <IconButton
              display={{ base: "flex", md: "none" }}
              aria-label="Open menu"
              fontSize="4xl"
              color={useColorModeValue("gray.800", "inherit")}
              variant="ghost"
              mr={{ base: "250", sm:"440",  xl: "0" }}
              icon={<AiOutlineMenu />}
              onClick={mobileNav.onOpen}
            />

            <IconButton
              size="md"
              fontSize="4xl"
              aria-label={`Switch to ${text} mode`}
              variant="ghost"
              color="current"
              ml={{ base: "0", md: "3" }}
              mx={{ base: "0", xl: "0" }}
              onClick={toggleMode}
              icon={<SwitchIcon />}
            />
          </Box>
        </Flex>

        {MobileNavContent}
      </chakra.header>
    </React.Fragment>
  );
}
export default Navbar;