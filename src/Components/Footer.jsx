import { FaFacebookF, FaTwitter, FaInstagram, FaLeaf } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-[var(--soft-green)] text-deep-green px-6 py-12">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Logo + Description */}
        <div>
          <div className="flex items-center gap-2 text-2xl font-bold">
            <FaLeaf className="text-lime-500" />
            Greenscape
          </div>
          <p className="mt-4 text-sm text-gray-600">
            Bringing nature closer, one leaf at a time. Beautiful, minimal, and
            refreshingly green.
          </p>
        </div>

        {/* Navigation Links */}
        <div>
          <h4 className="font-semibold text-lg mb-3">Explore</h4>
          <ul className="space-y-2 text-sm text-gray-700">
            <li>
              <a href="#">Home</a>
            </li>
            <li>
              <a href="#">About</a>
            </li>
            <li>
              <a href="#">Features</a>
            </li>
            <li>
              <a href="#">Contact</a>
            </li>
          </ul>
        </div>

        {/* Social Links */}
        <div>
          <h4 className="font-semibold text-lg mb-3">Follow Us</h4>
          <div className="flex gap-4 text-xl text-lime-500">
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
      <div className="text-center text-sm text-gray-500 mt-10">
        © {new Date().getFullYear()} Greenscape. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
