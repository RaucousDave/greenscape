import { MdLocalFlorist } from "react-icons/md"; // Material Design
// import { BsLeaf } from "react-icons/bs"; // Bootstrap Icons
// import { FaLeaf } from "react-icons/fa"; // Font Awesome
// import { LuPlant } from "react-icons/lu"; // Lucide
import { LuWind } from "react-icons/lu";
import { LuPackage } from "react-icons/lu";
import { LuBookOpen } from "react-icons/lu";

function Features() {
  return (
    <div>
      <section className="px-[30px] bg-(--deep-green) py-[4rem]">
        <h2 className="text-white font-semibold text-3xl text-center mb-[30px]">
          Why Choose Greenscape?
        </h2>
        <p className="text-white text-center text-[14px] mb-[4rem]">
          More than just greenery -we bring nature, peace, and purpose into your
          space
        </p>
        <div className="grid drid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mt-12">
          <div className="flex flex-col items-center text-center p-6 rounded-xl shadow-sm hover:shadow-lg transition bg-white custom-shadow">
            <MdLocalFlorist size={40} className="text-green-600 mb-3" />
            <h3 className="font-semibold text-lg font-sora">
              Curated Selection
            </h3>
            <p className="text-gray-500 text-sm font-inter">
              Handpicked indoor plants suited to different homes, light levels,
              and lifestyles.
            </p>
          </div>
          <div className="flex flex-col items-center text-center p-6 rounded-xl shadow-sm hover:shadow-md transition bg-white">
            <LuWind size={40} className="text-green-600 mb-3" />
            <h3 className="font-semibold text-lg font-sora">Air-Purifying</h3>
            <p className="text-gray-500 text-sm font-inter">
              Scientifically proven to reduce toxins and boost mood.
            </p>
          </div>
          <div className="flex flex-col items-center text-center p-6 rounded-xl shadow-sm hover:shadow-md transition bg-white">
            <LuPackage size={40} className="text-green-600 mb-3" />
            <h3 className="font-semibold text-lg font-sora">Eco Packaging</h3>
            <p className="text-gray-500 text-sm font-inter">
              Recyclable, compostable, and guilt-free materials in every box.
            </p>
          </div>
          <div className="flex flex-col items-center text-center p-6 rounded-xl shadow-sm hover:shadow-md transition bg-white">
            <LuBookOpen size={40} className="text-green-600 mb-3" />
            <h3 className="font-semibold text-lg font-sora">Care Guides</h3>
            <p className="text-gray-500 text-sm font-inter">
              Easy-to-follow instructions to help your plant thrive — no green
              thumb required.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Features;
