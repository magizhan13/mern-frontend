import { useParams, Link } from 'react-router-dom';
import { useCart } from '../context/CartContext';
import { products } from '../data/products';
import './ProductDetail.css';

const ProductDetail = () => {
  const { id } = useParams();
  const { addToCart } = useCart();
  const product = products.find(p => p.id === parseInt(id));

  if (!product) {
    return (
      <div className="container" style={{ padding: '4rem 1rem', textAlign: 'center' }}>
        <h2>Product not found</h2>
        <Link to="/products" className="back-link">Back to Products</Link>
      </div>
    );
  }

  return (
    <div className="product-detail">
      <div className="container">
        <Link to="/products" className="back-link">← Back to Products</Link>
        
        <div className="detail-grid">
          <div className="image-section">
            <img src={product.image} alt={product.name} />
          </div>
          
          <div className="info-section">
            <span className="category">{product.category}</span>
            <h1>{product.name}</h1>
            <p className="price">₹{product.price.toFixed(2)}</p>
            <p className="description">{product.description}</p>
            <button onClick={() => addToCart(product)} className="add-to-cart-btn">
              Add to Cart
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
