import { Link } from 'react-router-dom';
import { useCart } from '../context/CartContext';
import './ProductCard.css';

const ProductCard = ({ product }) => {
  const { addToCart } = useCart();

  return (
    <div className="product-card">
      <Link to={`/product/${product.id}`}>
        <img src={product.image} alt={product.name} />
      </Link>
      <div className="product-info">
        <span className="category">{product.category}</span>
        <Link to={`/product/${product.id}`}>
          <h3>{product.name}</h3>
        </Link>
        <p className="price">₹{product.price.toFixed(2)}</p>
        <button onClick={() => addToCart(product)} className="add-to-cart">
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
