import { FaFacebookF, FaTwitter, FaInstagram, FaLeaf } from "react-icons/fa";

const Footer = ({ scrollToSection }) => {
  return (
    <footer className="bg-[var(--deep-green)] text-deep-green px-6 py-12">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        <div>
          <div className="flex items-center gap-2 justify-center sm:justify-baseline text-2xl font-bold text-white">
            <FaLeaf className="text-lime-500" />
            Greenscape
          </div>
          <p className="mt-4 text-sm text-white text-center md:text-left">
            Bringing nature closer, one leaf at a time. Beautiful, minimal, and
            refreshingly green.
          </p>
        </div>

        {/* Navigation Links */}
        <div className="flex flex-col justify-center items-center">
          <h4 className="font-semibold text-lg mb-3 text-white">Explore</h4>
          <ul className="space-y-2 text-sm text-white">
            <li>
              <a
                href="#"
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection("hero");
                }}
              >
                Home
              </a>
            </li>
            <li>
              <a
                href="#"
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection("about");
                }}
              >
                About
              </a>
            </li>
            <li>
              <a
                href="#"
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection("features");
                }}
              >
                Features
              </a>
            </li>
            <li>
              <a
                href="#"
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection("products");
                }}
              >
                Products
              </a>
            </li>
          </ul>
        </div>

        {/* Social Links */}
        <div className="flex md:block flex-col justify-center items-center">
          <h4 className="font-semibold text-lg mb-3 text-white">Follow Us</h4>
          <div className="flex gap-4 text-xl text-lime-500 text-center">
            <a href="#">
              <FaFacebookF />
            </a>
            <a href="#">
              <FaTwitter />
            </a>
            <a href="#">
              <FaInstagram />
            </a>
          </div>
        </div>
      </div>

      {/* Bottom note */}
      <div className="text-center text-sm text-white mt-10">
        © {new Date().getFullYear()} Greenscape. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
