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
import styles from "./app.module.scss";

import LandingPage from "./pages/landing-page/LandingPage";
import AboutUs from "./pages/About-Us/AboutUs";
import Product from "./components/product-display/Product";
import SpecialOffers from "./pages/special-offers/SpecialOffers";
import CheckoutPage from "./pages/checkout/Checkout";

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
		<div>
			<LandingPage />
			<AboutUs />
			<SpecialOffers />
			<Product />
			<CheckoutPage />
		</div>
	);
};

export default App;
