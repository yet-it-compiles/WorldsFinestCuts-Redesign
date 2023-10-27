/**
 * @module App
 * 
 * @description Serves as the root container for the application and is 
 * responsible for rendering the overall layout and structure.
 * 
 * @version 0.1.0
 * 
 * @exports App
 */
import LandingPage from "./pages/landing-page/LandingPage";
import AboutUs from "./pages/about-us/AboutUs";
import Product from "./components/product-display/Product";

/**
 * @function App
 * 
 * @description A functional component that renders the main structure of the 
 * applications UI.
 *  
 * @returns {JSX.Element} The applications UI components
 */
const App = () => {
  return (
    <>
      <LandingPage/>
      <AboutUs/>
      <Product/>
    </>
  );
};

export default App;