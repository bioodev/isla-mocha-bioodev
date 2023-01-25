import "./App.css";
import Map from "./components/Map";
import Navbar from "./components/Navbar";
import { ChakraProvider } from '@chakra-ui/react'

function App() {
  return (
    <ChakraProvider>
    <div className="App">
      <Navbar />
      <Map />
    </div>
    </ChakraProvider>
  );
}

export default App;
