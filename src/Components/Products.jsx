import { FaLeaf, FaSeedling } from "react-icons/fa";
import { GiCactus, GiSpikedTentacle, GiFlowerPot } from "react-icons/gi";
import { LuSprout } from "react-icons/lu";

const plantIcons = [
  {
    icon: <FaLeaf className="text-green-600 text-5xl mb-4" />,
    name: "Monstera Muse",
    desc: "Bold leaves that breathe life into your space.",
  },
  {
    icon: <GiCactus className="text-green-600 text-5xl mb-4" />,
    name: "Cactus Chill",
    desc: "Survives anything — even your forgetfulness.",
  },
  {
    icon: <GiSpikedTentacle className="text-green-600 text-5xl mb-4" />,
    name: "Zen Fern",
    desc: "All peace, no problems — a green therapist.",
  },
  {
    icon: <FaSeedling className="text-green-600 text-5xl mb-4" />,
    name: "Succulent Vibes",
    desc: "Tiny, aesthetic, and zero drama.",
  },
  {
    icon: <GiFlowerPot className="text-green-600 text-5xl mb-4" />,
    name: "Peace Lily Pop",
    desc: "It blooms when it's happy (just like you).",
  },
  {
    icon: <LuSprout className="text-green-600 text-5xl mb-4" />,
    name: "Snake Sentinel",
    desc: "Low light? No problem. A guardian for your shelf.",
  },
];

function Products() {
  return (
    <div>
      <section>
        <section className="py-16 px-[30px] bg-(--deep-green)">
          <h2 className="text-4xl font-bold text-center mb-10 text-white">
            Plant Picks
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10 max-w-6xl mx-auto">
            {plantIcons.map((plant, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-2xl shadow-md hover:shadow-lg transition-shadow duration-300 text-center border border-lime-100 "
              >
                <div className="flex justify-center">{plant.icon}</div>
                <h3 className="text-xl font-semibold mb-2">{plant.name}</h3>
                <p className="text-gray-600">{plant.desc}</p>
              </div>
            ))}
          </div>
        </section>
      </section>
    </div>
  );
}

export default Products;
