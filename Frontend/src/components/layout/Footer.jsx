import { FaFacebookF, FaLinkedinIn, FaTwitter } from "react-icons/fa";
import { FiArrowUpRight } from "react-icons/fi";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="bg-[linear-gradient(90deg,#2f3792_0%,#1f2350_100%)] text-[#d8dbef]">
      <div className="max-w-6xl mx-auto px-6 py-10 grid gap-8 md:grid-cols-3">
        
        {/* Logo / About */}
        <div>
          <h2 className="text-white text-xl font-bold mb-3">
            TasteCraft
          </h2>
          <p className="text-sm text-[#c4cae9]">
            Premium restaurant ordering platform with real-time menu, reviews, and admin control.
          </p>
        </div>

        {/* Links */}
        <div>
          <h3 className="text-white font-semibold mb-3">
            Quick Links
          </h3>
          <ul className="space-y-2 text-sm">
            <li>
              <Link to="/" className="inline-flex items-center gap-2 hover:text-white">
                Home <FiArrowUpRight />
              </Link>
            </li>
            <li>
              <Link to="/login" className="inline-flex items-center gap-2 hover:text-white">
                Login <FiArrowUpRight />
              </Link>
            </li>
            <li>
              <Link to="/menu" className="inline-flex items-center gap-2 hover:text-white">
                Menu <FiArrowUpRight />
              </Link>
            </li>
            <li>
              <Link to="/orders" className="inline-flex items-center gap-2 hover:text-white">
                Orders <FiArrowUpRight />
              </Link>
            </li>
            <li>
              <Link to="/admin/dashboard" className="inline-flex items-center gap-2 hover:text-white">
                Admin Dashboard <FiArrowUpRight />
              </Link>
            </li>
          </ul>
        </div>

        {/* Social */}
        <div>
          <h3 className="text-white font-semibold mb-3">
            Follow Us
          </h3>
          <div className="flex gap-3 text-sm">
            <a href="#" aria-label="Facebook" className="rounded-full bg-[#2a2f68] p-2.5 text-white transition hover:bg-[#ff2f74]">
              <FaFacebookF />
            </a>
            <a href="#" aria-label="Twitter" className="rounded-full bg-[#2a2f68] p-2.5 text-white transition hover:bg-[#ff2f74]">
              <FaTwitter />
            </a>
            <a href="#" aria-label="LinkedIn" className="rounded-full bg-[#2a2f68] p-2.5 text-white transition hover:bg-[#ff2f74]">
              <FaLinkedinIn />
            </a>
          </div>
        </div>

      </div>

      {/* Bottom */}
      <div className="border-t border-[#3f478f] text-center text-sm py-4 text-[#c4cae9]">
        © {new Date().getFullYear()} TasteCraft. All rights reserved.
      </div>
    </footer>
  );
}