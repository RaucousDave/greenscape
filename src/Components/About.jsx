function About() {
  return (
    <div>
      <section
        className="py-[4rem] px-[30px]"
        style={{ backgroundColor: "var(--soft-green)" }}
      >
        <h2 className="text-4xl text-transparent bg-clip-text bg-gradient-to-r from-green-400 via-lime-500 to-green-600 font-semibold text-center mb-[10px]">
          About Us
        </h2>

        <div className="w-16 h-1 bg-lime-500 mx-auto mb-[30px] rounded-full"></div>

        <p className="text-center text-gray-500 max-w-3xl mx-auto leading-relaxed text-[1.1rem]">
          Greenscape is all about bringing{" "}
          <span className="text-lime-500">nature</span> closer to you. Whether
          it’s your home, workspace, or studio apartment, we believe every space
          deserves a touch of <span className="text-lime-500">green</span>. We
          curate beautiful, low-maintenance indoor{" "}
          <span className="text-lime-500">plants</span> and pair them with
          minimalist design — making it easy for you to live beautifully,
          breathe freely, and connect with
          <span className="text-lime-500"> nature</span> indoors.
        </p>
      </section>
    </div>
  );
}

export default About;
