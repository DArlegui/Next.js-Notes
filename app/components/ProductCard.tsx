import AddToCart from './AddToCard';
import styles from './ProductCard.module.css';

const ProductCard = () => {
  return (
    <div className="p-5 my-5 bg-sky-400 text-white text-xl hover:bg-sky-500 rounded-lg">
      <h2>Product Name</h2>
      <p className="text-gray-200 text-xs">Product Description</p>
      <p className="text-gray-200 text-base">Product Price</p>
      <AddToCart />
    </div>
  );
};
export default ProductCard;
