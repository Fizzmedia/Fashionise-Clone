function ShopItNow() {
  return (
    <section className="max-w-7xl mx-auto py-20 px-6">
      <div className="flex justify-between items-center mb-10">
        <h2 className="text-sm uppercase tracking-[4px] font-semibold">
          Shop It Now
        </h2>

        <a
          href="#"
          className="text-sm uppercase underline underline-offset-4"
        >
          View All Products
        </a>
      </div>

      <div className="grid grid-cols-5 gap-6">
        <div>
          <img
            src="https://images.unsplash.com/photo-1529139574466-a303027c1d8b?w=500&h=600&fit=crop"
            alt="Product"
            className="w-full h-72 object-cover"
          />
          <div className="flex justify-between mt-4">
            <p>Leather Jacket</p>
            <span>$120</span>
          </div>
        </div>

        <div>
          <img
            src="https://images.unsplash.com/photo-1496747611176-843222e1e57c?w=600&h=800&fit=crop"
            alt="Product"
            className="w-full h-72 object-cover"
          />
          <div className="flex justify-between mt-4">
            <p>Classic Dress</p>
            <span>$95</span>
          </div>
        </div>

        <div>
          <img
            src="https://images.unsplash.com/photo-1483985988355-763728e1935b?w=500&h=600&fit=crop"
            alt="Product"
            className="w-full h-72 object-cover"
          />
          <div className="flex justify-between mt-4">
            <p>Casual Outfit</p>
            <span>$80</span>
          </div>
        </div>

        <div>
          <img
            src="https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?w=500&h=600&fit=crop"
            alt="Product"
            className="w-full h-72 object-cover"
          />
          <div className="flex justify-between mt-4">
            <p>Summer Wear</p>
            <span>$70</span>
          </div>
        </div>

        <div>
          <img
            src="https://images.unsplash.com/photo-1524504388940-b1c1722653e1?w=500&h=600&fit=crop"
            alt="Product"
            className="w-full h-72 object-cover"
          />
          <div className="flex justify-between mt-4">
            <p>Elegant Suit</p>
            <span>$150</span>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ShopItNow;