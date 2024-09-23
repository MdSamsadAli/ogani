const Newsletter = () => {
  return (
    <>
      <div className="bg-gray-50 newsletter px-8 py-12">
        <h4 className="text-xl font-semibold inline">NewsLetter</h4>
        <div className="my-4">
          <input
            type="text"
            placeholder="Enter email"
            className="px-2 py-3 w-full border focus:outline-none"
          />
        </div>

        <button className="bg-black text-white flex justify-center w-full px-10 py-3">
          Subscribe
        </button>
      </div>
    </>
  );
};

export default Newsletter;
