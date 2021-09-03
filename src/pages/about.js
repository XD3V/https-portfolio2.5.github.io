import React from "react";
import {
  Stack,
  chakra,
  Heading,
  Container,
  Progress,
  Box,
  SimpleGrid,
  Text,
  Image,
  Flex,
  HStack,
  VStack,
  useColorModeValue,

  Link,
} from "@chakra-ui/react";

import { LineProgressBar, LineProgressBarProps } from '@frogress/line'



let LineWidth = global.value;

let LinePercent = LineWidth - 10
//  let  = (global.box=10);


const About = () => {
  return (

    <Flex

      w="full"
      h="container.sm"

      bgPos="center"
      bgSize="cover"
      loading="lazy"
      h={["full"]}
      backgroundImage="Images/NordicOceanScene1.jpg"
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

      <Flex

        direction="column"
        w="full"
        mx="auto"
        py={4}
        px={4}
        bg={useColorModeValue("white.200", "gray.800")}
        opacity=".6"
        // bgGradient='linear(to-b, white, green.500@0.3)'
        shadow="lg"
      //rounded="lg"
      >
        <Box




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
            color={useColorModeValue("black", "white")}
            fontSize={{ base: "2xl", md: "5xl" }}
            mt={{ base: 2, md: 30, lg: 200 }}
            fontWeight="extrabold"
          >
            Passionate
          </chakra.h2>
          <chakra.h2
            align="center"
            color={useColorModeValue("black", "white")}
            fontSize={{ base: "2xl", md: "5xl" }}
            mt={{ base: 2, md: 30, lg: 95 }}
            fontWeight="extrabold"
          >
            Creative
          </chakra.h2>

          <chakra.p mt={"95"} mb={{ lg: "155" }} mx={{ base: "5", sm: "20", md: "100", lg: "100", xl: "250" }} color={useColorModeValue("black", "gray.200")} fontSize={{ base: "2xl", md: "3xl" }}>
            Hi, my name is Xavier Davis. I am a full-stack web developer and 3D artist.
            My love for web development started when I was 15, which pushed me into a coding Bootcamp for full-Stack developers at UCR.
            This class opened my horizon to 3D modeling, an interchange between programming and art.
            My excitement for creating 3D scenes has always been there since I enjoyed drawing as a boy wanting to blur the lines between reality and art.
            I am currently new to software like unreal engine 4, blender, and photoshop.
            However, with these skills, I can now blur the lines and create something new.
          </chakra.p>




        </Box>
        {/* About me Section Finished */}

        {/* Set Skills Area */}




        <Flex
          mt={55}
        >
          <Container align={"center"} maxW={"3x1"} zIndex={10} position={'relative'}>
            <Stack direction={{ base: 'column', lg: 'row' }} >
              <Stack
                flex={1}
                color={'gray.400'}
                justify={{ lg: 'center' }}
                py={{ base: 4, md: 20, xl: 60 }}>
                <Box mb={{ base: 8, md: 20 }}>

                  <chakra.h1

                    fontSize={48}
                    fontFamily={'Work Sans'}
                    fontWeight={'bold'}
                    color={useColorModeValue('black', 'gray.50')}>
                    Set Skills

                  </chakra.h1>
                </Box>

                <SimpleGrid
                  columns={{ base: 1, md: 2, lg: 1 }} spacing={200} r>
                  {stats.map((stat) => (
                    <Box key={stat.title}>
                      {/* <Box
                  >
                      <Text
                        fontFamily={'heading'}
                        fontSize={'3xl'}
                        color={'white'}
                        mb={3}>
                        {stat.title}
                      </Text>
                      <Text  fontSize={'xl'} color={'gray.400'}>
                        {stat.percent}
                      </Text>
                    </Box>

                    <Text fontSize={'xl'} color={'gray.400'}>
                      {stat.content}
                    </Text> */}

                      <chakra.p

                        fontFamily={'heading'}
                        fontSize={'3xl'}
                        color={useColorModeValue("black", "white")}
                        mb={3}>
                        {stat.Icon}
                        {stat.title}
                        <chakra.span

                          fontFamily={'Inter'}
                          fontWeight={'medium'}
                          color={useColorModeValue("black", "gray.400")}>



                          {' '}
                          - {stat.percent}


                        </chakra.span>
                      </chakra.p>

                      <Text fontSize={'xl'} color={useColorModeValue("black", "white")}>
                        {stat.content}
                      </Text>


                    </Box>
                  ))}
                </SimpleGrid>
              </Stack>
              <Flex flex={0} />
            </Stack>
          </Container>

        </Flex>




        {/* Set Skills area ENDS */}






        {/* EX start */}







        {/* EX End */}


      </Flex>


    </Flex>
  );
};


const stats = [

  {

    title: 'React',
    Icon: (

      <>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64" width="64px" height="64px"><linearGradient id="9GkdZLxQa1XTDblOFwLcpa" x1="32" x2="32" y1="25.213" y2="36.722" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#6dc7ff" /><stop offset="1" stop-color="#e6abff" /></linearGradient><circle cx="32" cy="32" r="6" fill="url(#9GkdZLxQa1XTDblOFwLcpa)" /><linearGradient id="9GkdZLxQa1XTDblOFwLcpb" x1="32" x2="32" y1="7.426" y2="53.44" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#1a6dff" /><stop offset="1" stop-color="#c822ff" /></linearGradient><path fill="url(#9GkdZLxQa1XTDblOFwLcpb)" d="M58,32c0-3.758-4.243-7.017-10.853-8.992c0.221-1.031,0.407-2.045,0.524-3.015	c0.657-5.483-0.483-9.323-3.211-10.813c-2.729-1.489-6.574-0.372-10.831,3.146c-0.544,0.449-1.087,0.938-1.629,1.45	c-0.542-0.513-1.085-1.001-1.629-1.45C26.114,8.808,22.267,7.692,19.54,9.18c-2.728,1.489-3.868,5.329-3.211,10.813	c0.116,0.971,0.303,1.984,0.524,3.015C10.243,24.983,6,28.242,6,32s4.243,7.017,10.853,8.992c-0.221,1.031-0.407,2.045-0.524,3.015	c-0.657,5.483,0.483,9.323,3.211,10.813c0.789,0.431,1.67,0.643,2.628,0.643c2.357,0,5.177-1.287,8.203-3.788	c0.544-0.449,1.087-0.938,1.629-1.45c0.542,0.513,1.085,1.001,1.629,1.45c3.026,2.501,5.846,3.788,8.203,3.788	c0.958,0,1.84-0.213,2.628-0.643c2.728-1.489,3.868-5.329,3.211-10.813c-0.116-0.971-0.303-1.984-0.524-3.015	C53.757,39.017,58,35.758,58,32z M34.902,13.866c3.53-2.917,6.665-3.987,8.599-2.931c1.934,1.055,2.729,4.27,2.184,8.818	c-0.105,0.879-0.273,1.796-0.469,2.729c-2.117-0.519-4.43-0.915-6.892-1.166c-1.564-2.275-3.215-4.351-4.908-6.132	C33.91,14.718,34.406,14.276,34.902,13.866z M39.899,36.313c-0.853,1.562-1.76,3.055-2.702,4.474C35.546,40.925,33.811,41,32,41	s-3.546-0.075-5.198-0.213c-0.941-1.42-1.849-2.912-2.702-4.474c-0.784-1.435-1.499-2.878-2.142-4.313	c0.643-1.434,1.358-2.877,2.142-4.313c0.853-1.562,1.76-3.055,2.702-4.474C28.454,23.075,30.189,23,32,23s3.546,0.075,5.198,0.213	c0.941,1.42,1.849,2.912,2.702,4.474c0.784,1.435,1.499,2.878,2.142,4.313C41.399,33.434,40.683,34.877,39.899,36.313z M43.078,34.487c0.68,1.739,1.238,3.444,1.676,5.096c-1.544,0.376-3.21,0.694-5.009,0.929c0.657-1.05,1.3-2.124,1.909-3.241	C42.161,36.346,42.629,35.416,43.078,34.487z M32,47.403c-1.272-1.341-2.522-2.863-3.729-4.513C29.487,42.961,30.73,43,32,43	s2.513-0.039,3.729-0.11C34.522,44.54,33.272,46.062,32,47.403z M24.254,40.512c-1.799-0.235-3.465-0.553-5.009-0.929	c0.438-1.652,0.996-3.358,1.676-5.096c0.45,0.93,0.918,1.859,1.423,2.785C22.954,38.388,23.597,39.462,24.254,40.512z M20.922,29.513c-0.68-1.739-1.238-3.445-1.676-5.096c1.544-0.376,3.21-0.694,5.009-0.929c-0.657,1.05-1.3,2.124-1.909,3.241	C21.839,27.654,21.371,28.584,20.922,29.513z M32,16.597c1.272,1.341,2.522,2.863,3.729,4.513C34.513,21.039,33.27,21,32,21	s-2.513,0.039-3.729,0.11C29.478,19.46,30.728,17.938,32,16.597z M41.655,26.729c-0.609-1.116-1.252-2.19-1.909-3.241	c1.799,0.235,3.465,0.553,5.009,0.929c-0.438,1.652-0.996,3.358-1.676,5.096C42.629,28.584,42.161,27.654,41.655,26.729z M18.315,19.754c-0.546-4.549,0.25-7.764,2.184-8.818c0.488-0.267,1.053-0.397,1.681-0.397c1.86,0,4.278,1.147,6.918,3.328	c0.496,0.41,0.993,0.852,1.488,1.319c-1.693,1.781-3.345,3.856-4.908,6.132c-2.463,0.251-4.776,0.648-6.892,1.166	C18.588,21.55,18.421,20.633,18.315,19.754z M8,32c0-2.6,3.47-5.303,9.317-7.06c0.606,2.279,1.437,4.654,2.471,7.06	c-1.034,2.407-1.865,4.782-2.471,7.06C11.47,37.303,8,34.6,8,32z M29.098,50.134c-3.53,2.917-6.662,3.989-8.599,2.931	c-1.934-1.055-2.729-4.27-2.184-8.818c0.105-0.879,0.273-1.796,0.469-2.729c2.117,0.519,4.43,0.915,6.892,1.166	c1.564,2.275,3.215,4.351,4.908,6.132C30.09,49.282,29.594,49.724,29.098,50.134z M45.685,44.246	c0.546,4.549-0.25,7.764-2.184,8.818c-1.934,1.059-5.068-0.014-8.599-2.931c-0.496-0.41-0.993-0.852-1.488-1.319	c1.693-1.781,3.345-3.856,4.908-6.132c2.463-0.251,4.776-0.648,6.892-1.166C45.412,42.45,45.579,43.367,45.685,44.246z M46.683,39.06c-0.606-2.279-1.437-4.654-2.471-7.06c1.034-2.407,1.865-4.782,2.471-7.06C52.53,26.697,56,29.4,56,32	S52.53,37.303,46.683,39.06z" /></svg>
      </>

    ),
    percent: '90%',
    content: (
      <>

        {/* React Progess */}


        <LineProgressBar

          width={340}

          rounded={36}
          percent={90}
          height={36}
          progressColor="linear-gradient(to right, #78abe9, #74dad8, #ec7cac)"
        />


      </>
    ),
  },

  {
    title: 'Unreal',
    Icon: (

      <>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64" width="64px" height="64px"><linearGradient id="pVl6bdv8xR2_oynBRXpQLa" x1="32" x2="32" y1="6" y2="58" gradientUnits="userSpaceOnUse" spreadMethod="reflect"><stop offset="0" stop-color="#1a6dff" /><stop offset="1" stop-color="#c822ff" /></linearGradient><path fill="none" stroke="url(#pVl6bdv8xR2_oynBRXpQLa)" stroke-miterlimit="10" stroke-width="2" d="M32 7A25 25 0 1 0 32 57A25 25 0 1 0 32 7Z" /><linearGradient id="pVl6bdv8xR2_oynBRXpQLb" x1="31.03" x2="31.03" y1="16" y2="48" gradientUnits="userSpaceOnUse" spreadMethod="reflect"><stop offset="0" stop-color="#6dc7ff" /><stop offset="1" stop-color="#e6abff" /></linearGradient><path fill="url(#pVl6bdv8xR2_oynBRXpQLb)" d="M13.125,36c-0.961-7.967,8.851-17.938,17.349-20c0,0-3.474,2.449-3.474,4.525 c0,4.154,1.971,2.745,1.971,2.745s0.039,14.986,0.039,16.057c0,1.071,0.985,1.673,2.365,1.673C32.755,41,36,39.25,36,39.25 s0-11.903,0-13.375s-1.644-2.822-2.438-3.515c2.123,0,3.088,0.737,3.088,0.737s2.756-3.643,9.919-5.557 C45.481,18.951,42,23.227,42,24.5s0,13.763,0,14.5s0.849,1,1.375,1c0.526,0,2.904-0.691,5.625-3.75c0,0.93-3.632,7.118-9.131,10.746 L36.25,44l-3.739,4c0,0-9.261-0.5-12.511-6c0.967,0.146,3,0.54,3-1s0-11.495,0-12.5S22.479,27,21.625,27 C20.771,27.001,17.747,27.685,13.125,36z" /></svg>
      </>

    ),
    percent: '50%',
    content: (
      <>
        {/* Unreal Progess */}




        <LineProgressBar

          width={340}

          rounded={36}
          percent={50}
          height={36}
          progressColor="linear-gradient(to right, #78abe9, #74dad8, #ec7cac)"
        />




      </>
    ),
  },
  {
    title: 'Blender',
    Icon: (

      <>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64" width="64px" height="64px"><linearGradient id="I_jFO5ILj78XNMK_LUfToa" x1="39" x2="39" y1="27" y2="40" gradientUnits="userSpaceOnUse" spreadMethod="reflect"><stop offset="0" stop-color="#6dc7ff" /><stop offset="1" stop-color="#e6abff" /></linearGradient><path fill="url(#I_jFO5ILj78XNMK_LUfToa)" d="M44.455,28.747C43.023,27.662,41.1,27.001,39,27c-2.1,0.001-4.024,0.662-5.456,1.747 c-1.457,1.105-2.423,2.661-2.534,4.428c-0.112,1.815,0.702,3.504,2.132,4.754C34.6,39.201,36.678,40,39.001,40 c2.322,0,4.399-0.799,5.855-2.072c1.43-1.249,2.245-2.938,2.134-4.754C46.879,31.409,45.912,29.852,44.455,28.747z" /><linearGradient id="I_jFO5ILj78XNMK_LUfTob" x1="39" x2="39" y1="7.252" y2="53.649" gradientUnits="userSpaceOnUse" spreadMethod="reflect"><stop offset="0" stop-color="#1a6dff" /><stop offset="1" stop-color="#c822ff" /></linearGradient><path fill="url(#I_jFO5ILj78XNMK_LUfTob)" d="M38.976,45c-3.721,0-7.14-1.343-9.63-3.784c-1.21-1.183-2.112-2.546-2.682-4.049 c-0.554-1.471-0.763-3.006-0.622-4.564c0.136-1.513,0.592-2.955,1.355-4.287c0.735-1.285,1.734-2.431,2.969-3.406 c2.384-1.873,5.449-2.906,8.633-2.911c0.006,0,0.012,0,0.017,0c3.176,0,6.234,1.024,8.615,2.886 c1.237,0.972,2.236,2.114,2.971,3.398c0.763,1.331,1.22,2.772,1.357,4.283c0.14,1.563-0.07,3.099-0.622,4.565c0,0,0,0,0,0 c-0.568,1.504-1.469,2.869-2.68,4.056c-2.494,2.453-5.922,3.806-9.652,3.812C38.995,45,38.986,45,38.976,45z M39.017,24 c-0.005,0-0.01,0-0.015,0c-2.739,0.003-5.366,0.885-7.398,2.482c-1.031,0.814-1.863,1.766-2.47,2.828 c-0.619,1.081-0.989,2.249-1.099,3.473c-0.114,1.255,0.055,2.493,0.501,3.678c0.465,1.227,1.208,2.347,2.21,3.326 C32.861,41.86,35.783,43,38.977,43c0.008,0,0.016,0,0.024,0c3.204-0.004,6.135-1.155,8.254-3.239 c1.002-0.983,1.745-2.105,2.209-3.335l0,0c0.446-1.183,0.615-2.421,0.502-3.681c-0.111-1.22-0.481-2.388-1.101-3.468 c-0.606-1.06-1.436-2.008-2.468-2.818C44.369,24.874,41.748,24,39.017,24z" /><linearGradient id="I_jFO5ILj78XNMK_LUfToc" x1="30.5" x2="30.5" y1="7.25" y2="53.649" gradientUnits="userSpaceOnUse" spreadMethod="reflect"><stop offset="0" stop-color="#1a6dff" /><stop offset="1" stop-color="#c822ff" /></linearGradient><path fill="url(#I_jFO5ILj78XNMK_LUfToc)" d="M38.853,54c-15.676,0-20.545-12.201-20.545-16.645c0-0.018,0-0.04,0-0.064l-9.518,7.733 C8.061,45.647,7.108,46,6.126,46c-1.206,0-2.348-0.525-3.133-1.44c-0.717-0.835-1.066-1.901-0.981-3 c0.084-1.099,0.592-2.099,1.428-2.816L19.982,25L13,25c-2.206,0-4-1.794-4-4s1.794-4,4-4l21.234,0l-4.831-3.703 c-0.03-0.02-0.06-0.041-0.088-0.063c-0.731-0.584-1.19-1.417-1.294-2.347c-0.104-0.929,0.162-1.843,0.747-2.573 c0.583-0.73,1.416-1.189,2.345-1.293c0.931-0.102,1.844,0.162,2.574,0.746l18.027,13.176c0.039,0.028,0.11,0.093,0.159,0.141 l0.007-0.009c1.806,1.402,3.314,3.065,4.482,4.943c1.296,2.085,2.126,4.358,2.467,6.756c0.175,1.24,0.215,2.493,0.121,3.726 C58.953,46.608,50.5,54,38.853,54z M19.352,34.154c0.15,0,0.302,0.034,0.442,0.103c0.35,0.173,0.568,0.534,0.557,0.924 c-0.027,0.988-0.048,1.884-0.043,2.156C20.308,41.108,24.873,52,38.853,52c10.657,0,18.1-6.405,18.1-15.576 c0.087-1.166,0.051-2.273-0.104-3.369c-0.301-2.12-1.037-4.133-2.185-5.98c-1.028-1.652-2.354-3.122-3.943-4.367 c-0.061-0.034-0.117-0.072-0.162-0.112c-0.029-0.026-0.057-0.053-0.083-0.081L32.472,9.355c-0.347-0.277-0.739-0.391-1.137-0.346 C30.937,9.054,30.58,9.25,30.33,9.563c-0.251,0.313-0.365,0.705-0.32,1.103c0.042,0.382,0.226,0.727,0.518,0.975l7.683,5.515 c0.375,0.239,0.548,0.696,0.424,1.124c-0.125,0.427-0.544,0.666-0.989,0.666L13,19c-1.103,0-2,0.897-2,2s0.897,2,2,2h1l0,0l8.75,0 c0.421,0,0.797,0.264,0.94,0.66c0.143,0.396,0.022,0.84-0.301,1.109L4.73,40.271c-0.419,0.359-0.681,0.875-0.724,1.441 s0.136,1.115,0.505,1.545c0.733,0.856,2.137,0.967,2.997,0.23l11.213-9.11C18.903,34.23,19.126,34.154,19.352,34.154z" /></svg>
      </>

    ),
    percent: '50%',
    content: (
      <>

        {/* Blender Progess */}

        <LineProgressBar

          width={340}

          rounded={36}
          percent={50}
          height={36}
          progressColor="linear-gradient(to right, #78abe9, #74dad8, #ec7cac)"
        />


      </>
    ),
  },

  {
    title: 'Photoshop',
    Icon: (

      <>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64" width="64px" height="64px"><linearGradient id="6DdVkIZtKSyDxDqO7jn4Ia" x1="32" x2="32" y1="9.083" y2="54.676" gradientUnits="userSpaceOnUse" spreadMethod="reflect"><stop offset="0" stop-color="#1a6dff" /><stop offset="1" stop-color="#c822ff" /></linearGradient><path fill="url(#6DdVkIZtKSyDxDqO7jn4Ia)" d="M50,55H14c-2.757,0-5-2.243-5-5V14c0-2.757,2.243-5,5-5h36c2.757,0,5,2.243,5,5v36 C55,52.757,52.757,55,50,55z M14,11c-1.654,0-3,1.346-3,3v36c0,1.654,1.346,3,3,3h36c1.654,0,3-1.346,3-3V14c0-1.654-1.346-3-3-3H14 z" /><linearGradient id="6DdVkIZtKSyDxDqO7jn4Ib" x1="39.5" x2="39.5" y1="26" y2="44" gradientUnits="userSpaceOnUse" spreadMethod="reflect"><stop offset="0" stop-color="#6dc7ff" /><stop offset="1" stop-color="#e6abff" /></linearGradient><path fill="url(#6DdVkIZtKSyDxDqO7jn4Ib)" d="M34,43v-2c0-0.552,0.448-1,1-1h6v-3h-3c-2.209,0-4-1.791-4-4v-3c0-2.209,1.791-4,4-4h4 c0.552,0,1,0.448,1,1v2c0,0.552-0.448,1-1,1h-4v3h3c2.209,0,4,1.791,4,4v3c0,2.209-1.791,4-4,4h-6C34.448,44,34,43.552,34,43z" /><linearGradient id="6DdVkIZtKSyDxDqO7jn4Ic" x1="24.5" x2="24.5" y1="21" y2="44" gradientUnits="userSpaceOnUse" spreadMethod="reflect"><stop offset="0" stop-color="#6dc7ff" /><stop offset="1" stop-color="#e6abff" /></linearGradient><path fill="url(#6DdVkIZtKSyDxDqO7jn4Ic)" d="M22,21c-2.209,0-4,1.791-4,4v18c0,0.552,0.448,1,1,1h2c0.552,0,1-0.448,1-1v-7h5 c2.209,0,4-1.791,4-4v-7c0-2.209-1.791-4-4-4H22z M22,31v-5c0-0.552,0.448-1,1-1h3c0.552,0,1,0.448,1,1v5c0,0.552-0.448,1-1,1h-3 C22.448,32,22,31.552,22,31z" /></svg>
      </>

    ),
    percent: '25%',
    content: (
      <>


        <LineProgressBar

          width={340}

          rounded={36}
          percent={25}
          height={36}
          progressColor="linear-gradient(to right, #78abe9, #74dad8, #ec7cac)"
        />

      </>
    ),
  },
];

export default About;