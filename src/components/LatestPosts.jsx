function LatestPosts() {
  return (
    <section className="max-w-7xl mx-auto py-20 px-6">
      <h2 className="text-sm uppercase tracking-[4px] font-semibold mb-10">
        Latest Posts
      </h2>

      <div className="grid grid-cols-3 gap-8">
        <div>
          <img
            src="https://images.unsplash.com/photo-1496747611176-843222e1e57c?w=600&h=800&fit=crop"
            alt="fashion Image"
            className="w-full h-96 object-cover"
          />
          <p className="text-xs uppercase tracking-[3px] mt-5 text-gray-500">
            Fashion
          </p>
          <h3 className="text-2xl font-bold mt-2">
            How to check if the product is good quality or not
          </h3>
          <p className="text-gray-500 mt-2">
            January 15, 2026 • By Franklyn
          </p>
        </div>

        <div>
          <img
            src="https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?w=600&h=800&fit=crop"
            alt="Fashion Image2"
            className="w-full h-96 object-cover"
          />
          <p className="text-xs uppercase tracking-[3px] mt-5 text-gray-500">
            Fashion
          </p>
          <h3 className="text-2xl font-bold mt-2">
            The best foundation you can find on sale
          </h3>
          <p className="text-gray-500 mt-2">
            January 12, 2026 • By Franklyn
          </p>
        </div>

        <div>
          <img
            src="https://images.unsplash.com/photo-1483985988355-763728e1935b?w=600&h=800&fit=crop"
            alt="Fashion Image3"
            className="w-full h-96 object-cover"
          />
          <p className="text-xs uppercase tracking-[3px] mt-5 text-gray-500">
            Fashion
          </p>
          <h3 className="text-2xl font-bold mt-2">
            Some great products for blasting fashion 
          </h3>
          <p className="text-gray-500 mt-2">
            January 10, 2026 • By Franklyn
          </p>
        </div>
      </div>
    </section>
  );
}

export default LatestPosts;