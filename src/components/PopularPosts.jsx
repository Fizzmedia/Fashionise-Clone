function PopularPosts() {
  return (
    <section className="max-w-7xl mx-auto py-20 px-6">
      <h2 className="text-sm uppercase tracking-[4px] font-semibold mb-10">
        Popular Posts
      </h2>

      <div className="grid grid-cols-3 gap-8">
        <div>
          <img
            src="https://images.unsplash.com/photo-1509631179647-0177331693ae?auto=format&fit=crop&w=600&q=80"
            alt="Fashion"
            className="w-full h-96 object-cover"
/>
          <p className="text-xs uppercase tracking-[3px] mt-5 text-gray-500">
            Fashion
          </p>
          <h3 className="text-2xl font-bold mt-2">
            Photography poses tips and tricks for fashion
          </h3>
          <p className="text-gray-500 mt-2">
            January 18, 2026 • By Franklyn
          </p>
        </div>

        <div>
          <img
            src="https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=600&q=80"
            alt="Fashion"
            className="w-full h-96 object-cover"
          />
          <p className="text-xs uppercase tracking-[3px] mt-5 text-gray-500">
            Fashion
          </p>
          <h3 className="text-2xl font-bold mt-2">
            Best accessories for soft brown color overcoat
          </h3>
          <p className="text-gray-500 mt-2">
            January 16, 2026 • By Franklyn
          </p>
        </div>

        <div>
          <img
            src="https://images.unsplash.com/photo-1529139574466-a303027c1d8b?w=600&h=800&fit=crop"
            alt="Fashion"
            className="w-full h-96 object-cover"
          />
          <p className="text-xs uppercase tracking-[3px] mt-5 text-gray-500">
            Fashion
          </p>
          <h3 className="text-2xl font-bold mt-2">
            Top 10 best optical brand in the whole world
          </h3>
          <p className="text-gray-500 mt-2">
            January 14, 2026 • By Franklyn
          </p>
        </div>
      </div>
    </section>
  );
}

export default PopularPosts;