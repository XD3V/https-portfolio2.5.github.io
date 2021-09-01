import React from "react";

import {
    chakra,
    Box,
    Flex,
    useColorModeValue,
    Icon,
    SimpleGrid,
    Button,
    VStack,
} from "@chakra-ui/react";
import { GoMarkGithub } from "react-icons/go";
import { AiFillLinkedin, AiTwotoneMail } from "react-icons/ai";
const SocialButton = ({
    children,
    label,
    href,
}) => {
    return (
        <chakra.button
            bg={useColorModeValue('blackAlpha.100', 'whiteAlpha.100')}
            rounded={'full'}
            w={8}
            h={8}
            cursor={'pointer'}
            as={'a'}
            href={href}
            display={'inline-flex'}
            alignItems={'center'}
            justifyContent={'center'}
            transition={'background 0.3s ease'}
            _hover={{
                bg: useColorModeValue('blackAlpha.200', 'whiteAlpha.200'),
            }}>
            {/* <VisuallyHidden>{label}</VisuallyHidden> */}
            {children}
        </chakra.button>
    );
};
function Contact() {
    // const Feature = (props) => {
    //     return (
    //         <Flex>
    //             <Icon
    //                 boxSize={1}
    //                 mt={1}
    //                 mr={2}
    //                 color={useColorModeValue("brand.500", "brand.300")}
    //                 viewBox="0 0 20 20"
    //                 fill="currentColor"
    //             >
    //                 <path
    //                     fillRule="evenodd"
    //                     d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
    //                     clipRule="evenodd"
    //                 ></path>
    //             </Icon>
    //             <chakra.p
    //                 fontSize="lg"
    //                 color={useColorModeValue("gray.700", "gray.400")}
    //                 {...props}
    //             />
    //         </Flex>
    //     );
    // };

    return (
        <Flex
            my={20}
            bg={useColorModeValue("#F9FAFB", "gray.600")}
            p={10}
            w="auto"
            justifyContent="center"
            alignItems="center"
        >
            <Box
                shadow="xl"
                bg={useColorModeValue("white", "gray.800")}
                px={20}
                py={20}
                mx="auto"
            >
                <SimpleGrid
                    alignItems="center"
                    columns={{ base: 1, lg: 2 }}
                    spacingY={{ base: 10, lg: 32 }}
                    spacingX={{ base: 10, lg: 24 }}
                >
                    <Box>
                        <chakra.h2
                            mb={3}
                            fontSize={{ base: "3xl", md: "5xl" }}
                            fontWeight="extrabold"
                            textAlign={{ base: "center", sm: "left" }}
                            color={useColorModeValue("black")}
                            lineHeight="shorter"
                            letterSpacing="tight"
                        >
                            Contact
                        </chakra.h2>


                    </Box>
                    <VStack
                        direction="column"
                        flexGrow={1}
                        spacing={5}
                        alignItems="start"

                    >

                        <SocialButton label={'Linkedin'} href={'https://www.linkedin.com/in/xavier-davis-283217187/'}>
                            <AiFillLinkedin />

                        </SocialButton >  <a fontSize={{ base: "3xl", md: "3xl" }} href={'https://www.linkedin.com/in/xavier-davis-283217187/'}>Linkedin</a>


                        <SocialButton label={'Github'} href={'https://github.com/XD3V/'}>
                            <GoMarkGithub />
                        </SocialButton> <a fontSize={{ base: "3xl", md: "3xl" }} href={'https://github.com/XD3V'}>Github</a>
                        <br />
                        <SocialButton label={'Email'} >
                            <AiTwotoneMail />
                        </SocialButton> <a fontSize={{ base: "3xl", md: "3xl" }}>Email: d3veloper1969@gmail.com </a>

                    </VStack>
                </SimpleGrid>
            </Box>
        </Flex>
    );
}
export default Contact