function Cta() {
  return (
    <div>
      <section className="flex flex-col gap-8 py-17 items-center bg-gradient-to-b from-green-50 to-green-100">
        <h2 className="text-4xl text-transparent font-semibold text-center bg-clip-text bg-gradient-to-r from-lime-400 to-green-600">
          Bring Nature Home
        </h2>
        <p className="text-gray-700 text-xl text-center">
          Transform your space with curated indoor plants that fit your
          lifestyle. No green thumb needed
        </p>
        <button className="px-[30px] py-[15px] text-white bg-lime-500 hover:bg-lime-600 transition-all ease-in-out">
          Explore Collection
        </button>
      </section>
    </div>
  );
}

export default Cta;
