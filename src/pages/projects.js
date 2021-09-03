import React from "react";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
  Button
} from "@chakra-ui/react"

import { chakra, Box, Flex, useColorModeValue } from "@chakra-ui/react";

function Projects() {
  const initialRef = React.useRef()
  // const { isOpen, onOpen, onClose } = useDisclosure()
  const { isOpen: isFirstModalOpen, onOpen: onFristModalOpen, onClose: onFirstModalClose } = useDisclosure()
  const { isOpen: isSecondModalOpen, onOpen: onSecondModalOpen, onClose: onSecondModalClose } = useDisclosure()
  const { isOpen: isThirdModalOpen, onOpen: onThirdModalOpen, onClose: onThirdModalClose } = useDisclosure()
  return (
    <Flex
      py={{ base: 100, sm: 100, md: 100, lg: 100, xl: 350 }}

    >


      <Flex
        borderRadius="lg"
        direction={{ base: "column", sm: "column", md: "column", lg: "column", xl: "row" }}
        bg={useColorModeValue("#F9FAFB", "gray.600")}

        p="auto"
        w="full"
        alignItems="center"
        justifyContent="center"
      >

        {/* First Image */}
        <Flex

          direction="column"
          justifyContent="center"
          alignItems="center"
          w="sm"
          mx="auto"
        >
          <Box

          >
            <Button

              my={6}
              bg="gray.300"
              h={64}
              w={350}
              rounded="lg"
              shadow="md"
              bgSize="cover"
              bgPos="center"
              bgImage="Images/NordicOceanScene1.jpg"
              bg
              onClick={onFristModalOpen}>

              {/* Modal For First Image */}
              <Modal onClose={onFirstModalClose} isOpen={isFirstModalOpen} isCentered >
                <ModalOverlay

                />
                <ModalContent

                  h={{ base: 300, sm: 300, md: 400, lg: 400, xl: 900 }}
                  mr={{ base: -5, sm: 3, md: 250, lg: 250, xl: 500 }}
                  rounded="lg"
                  shadow="md"

                >
                  <ModalHeader
                    mb={3}
                    fontSize={{ base: "1", md: "2xl" }}

                    textAlign={{ base: "center", sm: "left" }}
                    color={useColorModeValue("black")}
                    lineHeight="shorter"
                    letterSpacing="tight"

                  >I created this scene by using the unreal engine 5 and Megascans to create a Nordic beach.
                    Once I finished creating the scene I began post-production by using photoshop for color correction and balance.

                  </ModalHeader>
                  <ModalBody
                    bg="gray.300"
                    ref={initialRef}
                    w={{ base: 400, sm: 470, md: 700, lg: 700, xl: 950 }}
                    rounded="lg"
                    shadow="md"
                    bgSize="cover"
                    bgPos="center"
                    bgImage="Images/NordicOceanScene1.jpg"
                  >

                  </ModalBody >

                </ModalContent>



                <Button onClick={onFirstModalClose}>Close</Button>
              </Modal>


            </Button>
          </Box>

          <Box
            w={{ base: 56, md: 64 }}
            bg={useColorModeValue("#white", "gray.800")}
            mt={-10}
            shadow="lg"
            rounded="lg"
            overflow="hidden"
          >
            <chakra.h3
              fontSize={{ base: 35, sm: 35, md: 35, lg: 35, xl: 35 }}
              py={8}
              textAlign="center"
              fontWeight="bold"
              textTransform="uppercase"
              color={useColorModeValue("gray.800", "white")}
              letterSpacing={1}
            >
              Rocky Beach
            </chakra.h3>


          </Box>
        </Flex>

        {/* Second Image */}
        <Flex
          direction="column"
          justifyContent="center"
          alignItems="center"
          w="sm"
          mx="auto"
        >
          <Box>

            <Button

              my={6}
              bg="gray.300"
              h={64}
              w={350}
              rounded="lg"
              shadow="md"
              bgSize="cover"
              bgPos="center"
              bgImage="Images/CliffRock.jpg"
              bg
              onClick={onSecondModalOpen}>

              {/* Modal For First Image */}
              <Modal onClose={onSecondModalClose} isOpen={isSecondModalOpen} isCentered>
                <ModalOverlay

                />
                <ModalContent

                  h={{ base: 300, sm: 300, md: 400, lg: 400, xl: 900 }}
                  mr={{ base: -5, sm: 3, md: 250, lg: 250, xl: 500 }}
                  rounded="lg"
                  shadow="md"

                >

                  <ModalHeader
                    mb={3}
                    fontSize={{ base: "1", md: "2xl" }}

                    textAlign={{ base: "center", sm: "left" }}
                    color={useColorModeValue("black")}
                    lineHeight="shorter"
                    letterSpacing="tight"

                  >I used the same assets and software as the Rocky Beach,
                    but I change the camera position along with the directional lighting to make the rocky cliffs my focal point. </ModalHeader>

                  <ModalBody
                    bg="gray.300"

                    w={{ base: 400, sm: 470, md: 700, lg: 700, xl: 950 }}
                    rounded="lg"
                    shadow="md"
                    bgSize="cover"
                    bgPos="center"
                    bgImage="Images/CliffRock.jpg"
                  >

                  </ModalBody >

                </ModalContent>



                <Button onClick={onSecondModalClose}>Close</Button>
              </Modal>

            </Button>
          </Box>

          <Box
            w={{ base: 56, md: 64 }}
            bg={useColorModeValue("white", "gray.800")}
            mt={-10}
            shadow="lg"
            rounded="lg"
            overflow="hidden"
          >
            <chakra.h3
              fontSize={{ base: 35, sm: 35, md: 35, lg: 35, xl: 35 }}

              py={8}
              textAlign="center"
              fontWeight="bold"
              textTransform="uppercase"
              color={useColorModeValue("gray.800", "white")}
              letterSpacing={1}
            >
              Rocky Cliff
            </chakra.h3>


          </Box>
        </Flex>

        {/* Third Image */}
        <Flex
          direction="column"
          justifyContent="center"
          alignItems="center"
          w="sm"
          mx="auto"
        >
          <Box

          >
            <Button

              my={6}
              bg="gray.300"
              h={64}
              w={350}
              rounded="lg"
              shadow="md"
              bgSize="cover"
              bgPos="center"
              bgImage="Images/OverHang.jpg"
              bg
              onClick={onThirdModalOpen}>


              {/* Modal ForThird Image */}
              <Modal onClose={onThirdModalClose} isOpen={isThirdModalOpen} isCentered>
                <ModalOverlay

                />
                <ModalContent

                  h={{ base: 300, sm: 300, md: 400, lg: 400, xl: 900 }}
                  mr={{ base: -5, sm: 3, md: 250, lg: 250, xl: 500 }}
                  rounded="lg"
                  shadow="md"

                >


                  <ModalHeader
                    mb={3}
                    fontSize={{ base: "1", md: "2xl" }}

                    textAlign={{ base: "center", sm: "left" }}
                    color={useColorModeValue("black")}
                    lineHeight="shorter"
                    letterSpacing="tight"

                  >
                    I wanted more of a cinematic feel, so I added some lens flares. 
                    I also moved the camera to a low angle position providing a sense of depth and scale to the rock formation. </ModalHeader>

                  <ModalBody
                    bg="gray.300"

                    w={{ base: 400, sm: 470, md: 700, lg: 700, xl: 950 }}
                    rounded="lg"
                    shadow="md"
                    bgSize="cover"
                    bgPos="center"
                    bgImage="Images/OverHang.jpg"
                  >

                  </ModalBody >

                </ModalContent>



                <Button onClick={onThirdModalClose}>Close</Button>
              </Modal>


            </Button>
          </Box>

          <Box
            w={{ base: 56, md: 64 }}
            bg={useColorModeValue("white", "gray.800")}
            mt={-10}
            shadow="lg"
            rounded="lg"
            overflow="hidden"
          >
            <chakra.h3
              fontSize={{ base: 35, sm: 35, md: 35, lg: 35, xl: 35 }}

              py={8}
              textAlign="center"
              fontWeight="bold"
              textTransform="uppercase"
              color={useColorModeValue("gray.800", "white")}
              letterSpacing={1}
            >
              Over Hang
            </chakra.h3>


          </Box>
        </Flex>
      </Flex>
    </Flex>
  );
};
export default Projects
