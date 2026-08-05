import { FaUser, FaSearch, FaShoppingCart } from "react-icons/fa";

function Header() {
  return (
    <>
      
      <div className="bg-black text-white text-xs uppercase tracking-wider">
        <div className="max-w-7xl mx-auto flex justify-between items-center px-6 py-3">
          <p>Beautifully crafted Fashion Blog Template</p>

          <div className="flex gap-6">
            <a href="#">About</a>
            <a href="#">Contact</a>
            <a href="#">Sponsors</a>
            <a href="#">Subscribe</a>
          </div>
        </div>
      </div>

      
      <nav className="bg-white border-b">
        <div className="max-w-7xl mx-auto flex justify-between items-center px-6 py-5">
          <h1 className="text-3xl font-bold tracking-widest">
            FASHIONISE
          </h1>

          <ul className="flex gap-8 uppercase text-sm font-medium">
            <li><a href="#">Home</a></li>
            <li><a href="#">Reviews</a></li>
            <li><a href="#">Fashion</a></li>
            <li><a href="#">Clothing</a></li>
            <li><a href="#">News</a></li>
            <li><a href="#">Shop</a></li>
            <li><a href="#">Videos</a></li>
          </ul>

          <div className="flex gap-5 text-lg">
            <FaUser />
            <FaSearch />
            <FaShoppingCart />
          </div>
        </div>
      </nav>
    </>
  );
}

export default Header;