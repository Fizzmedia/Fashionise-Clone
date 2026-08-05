import { FaChevronLeft, FaChevronRight, FaPlay } from "react-icons/fa";

function TopVideos() {
  return (
    <section className="bg-black text-white py-20 relative">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-sm uppercase tracking-[4px] font-semibold mb-10">
          Top Videos
        </h2>

        <div className="grid grid-cols-2 gap-8">
          <div>
            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1529139574466-a303027c1d8b?w=600&h=800&fit=crop"
                alt="Fashion"
                className="w-full h-72 object-cover"
              />

              <button className="absolute inset-0 flex items-center justify-center">
                <span className="bg-white text-black rounded-full p-5">
                  <FaPlay />
                </span>
              </button>
            </div>

            <h3 className="text-2xl font-bold mt-6">
              Beautiful dresses shown by top fashion models
            </h3>

            <p className="text-gray-400 mt-3">
              Discover exclusive runway moments and interviews with top designers.
            </p>
          </div>

          <div>
            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1483985988355-763728e1935b?w=700&h=450&fit=crop"
                alt="Fashion"
                className="w-full h-72 object-cover"
              />

              <button className="absolute inset-0 flex items-center justify-center">
                <span className="bg-white text-black rounded-full p-5">
                  <FaPlay />
                </span>
              </button>
            </div>

            <h3 className="text-2xl font-bold mt-6">
              Why is makeup important for your confidence?
            </h3>

            <p className="text-gray-400 mt-3">
              Learn how to style timeless clothing pieces for every occasion.
            </p>
          </div>
        </div>

        <button className="absolute left-6 top-1/2 text-2xl">
          <FaChevronLeft />
        </button>

        <button className="absolute right-6 top-1/2 text-2xl">
          <FaChevronRight />
        </button>

        <div className="flex justify-center gap-3 mt-12">
          <span className="w-3 h-3 rounded-full bg-white"></span>
          <span className="w-3 h-3 rounded-full bg-gray-500"></span>
          <span className="w-3 h-3 rounded-full bg-gray-500"></span>
        </div>
      </div>
    </section>
  );
}

export default TopVideos;