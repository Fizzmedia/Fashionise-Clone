import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaPinterestP,
  FaYoutube,
} from "react-icons/fa";

function Footer() {
  return (
    <footer className="bg-black text-white">
      <div className="max-w-7xl mx-auto px-6 py-16 grid grid-cols-3 gap-12">
        <div>
          <h2 className="text-3xl font-bold tracking-widest mb-6">
            FASHIONISE
          </h2>

          <p className="text-gray-400 leading-7 mb-6">
            Fashionise is your destination for fashion inspiration, style
            guides, trending outfits, and the latest updates from the fashion
            world.
          </p>

          <div className="flex gap-4 text-lg">
            <FaFacebookF />
            <FaTwitter />
            <FaInstagram />
            <FaPinterestP />
            <FaYoutube />
          </div>
        </div>

        <div>
          <h3 className="uppercase tracking-[3px] font-semibold mb-6">
            Quick Links
          </h3>

          <ul className="space-y-3 text-gray-400">
            <li><a href="#">Home</a></li>
            <li><a href="#">Reviews</a></li>
            <li><a href="#">Fashion</a></li>
            <li><a href="#">News</a></li>
            <li><a href="#">Shop</a></li>
          </ul>
        </div>

        <div>
          <h3 className="uppercase tracking-[3px] font-semibold mb-6">
            Categories
          </h3>

          <ul className="space-y-3 text-gray-400">
            <li><a href="#">Street Style</a></li>
            <li><a href="#">Luxury</a></li>
            <li><a href="#">Accessories</a></li>
            <li><a href="#">Lifestyle</a></li>
            <li><a href="#">Beauty</a></li>
          </ul>
        </div>
      </div>

      <div className="border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-6 py-6 flex justify-between text-sm text-gray-400">
          <p>© 2026 Fashionise. All rights reserved.</p>
          <p>Designed by Templates Jungle</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;