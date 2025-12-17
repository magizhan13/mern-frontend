import { Link } from 'react-router-dom';
import { useCart } from '../context/CartContext';
import './Header.css';

const Header = () => {
  const { getItemCount } = useCart();

  return (
    <header className="header">
      <div className="container">
        <Link to="/" className="logo">
          <h1>ShopHub</h1>
        </Link>
        <nav className="nav">
          <Link to="/">Home</Link>
          <Link to="/products">Products</Link>
          <Link to="/cart" className="cart-link">
            Cart
            {getItemCount() > 0 && <span className="cart-badge">{getItemCount()}</span>}
          </Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;
