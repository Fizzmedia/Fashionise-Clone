function Newsletter() {
  return (
    <section className="bg-gray-100 py-20">
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        <div>
          <h2 className="text-4xl font-bold">
            Subscribe Our Newsletter
          </h2>
        </div>

        <form className="flex w-1/2">
          <input
            type="email"
            placeholder="Enter your email address"
            className="flex-1 px-5 py-4 border border-gray-300 outline-none"
          />

          <button
            type="submit"
            className="bg-black text-white px-8 uppercase tracking-wider"
          >
            Subscribe
          </button>
        </form>
      </div>
    </section>
  );
}

export default Newsletter;