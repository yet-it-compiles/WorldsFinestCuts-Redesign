/**
 * @module Product.jsx
 *  
 * @description
 *  
 * @since 0.1.0
 *  
 * @exports Product
 */

import styles from './product.module.scss';

const PRODUCT_LIST = [
    {
        icon: "",
        price: "$0.00",
        title: "Grass Fed, Grain Finished - Premium Beef",
        rating: "",
        description: "", 
    }
]

/**
 * @component Product
 *
 * @description 
 *
 * @returns {JSX.Element} 
 */
const Product = () => {
  return (
    <div className={styles.product}>
      <h1></h1>
    </div>
  );
};
 
export default Product;