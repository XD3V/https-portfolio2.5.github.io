import { ChakraProvider, ColorModeProvider } from "@chakra-ui/react"
import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import Loading from "../components/PractLoading";
import theme from '../theme'
import Navbar from '../components/NavBar'
//import useSticky from '../hooks/useSticky'
import Footer from '../components/Footer'
function MyApp({ Component, pageProps }) {
  const router = useRouter();
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const handleStart = (url) => {
      url !== router.pathname ? setLoading(true) : setLoading(false);
    };
    const handleComplete = (url) => setLoading(false);

    router.events.on("routeChangeStart", handleStart);
    router.events.on("routeChangeComplete", handleComplete);
    router.events.on("routeChangeError", handleComplete);
  }, [router]);
  //const { isSticky, element } = useSticky()
  return (
    <>
      <Loading loading={loading} />
      <ChakraProvider resetCSS theme={theme}>
        <Navbar />
        {/* <Navbar sticky={isSticky} /> */}
        <Component {...pageProps} />
        {/* <Footer/> */}
      </ChakraProvider>
    </>
  );
}

export default MyApp;
