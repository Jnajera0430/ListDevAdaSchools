import { lazy, Suspense } from "react";
import "./App.css";
import { Route, Routes,Link } from "react-router-dom";
import { Box, Button, ButtonGroup, Flex, Heading, Spacer } from '@chakra-ui/react'

function App() {
  const Home = lazy(() => import("./components/Home"));
  const About = lazy(() => import("./components/About"));
  const Contact = lazy(() => import("./components/Contact"));
  return (
    <div >
      <Flex minWidth='max-content' alignItems='center' gap='2'>
        <Box p='2'>
          <Heading size='md'>Chakra App</Heading>
        </Box>
        <Spacer />
        <ButtonGroup gap='2'>
        <Link to='/home'> <Button colorScheme='teal'> Home  </Button></Link>
        <Link to='/about'><Button colorScheme='teal'>About </Button></Link>
        </ButtonGroup>
      </Flex>
      <nav>    
            <Link to='/contact'> Contact </Link>
      </nav>
      <Suspense fallback={ <p>Loading...</p>  }>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </Suspense>
    </div>
  );
}

export default App;
