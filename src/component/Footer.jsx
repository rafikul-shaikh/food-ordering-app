import { Facebook, Instagram, Twitter, Github, Youtube } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-[#FFF8EE]">
      <div className="max-w-6xl mx-auto px-4 py-8">
        <div className="flex flex-col md:flex-row md:justify-between gap-10">
          <div className="flex flex-col gap-6 md:gap-24">
            <img
              src="https://caledonkababs.com/static/media/logo.dc18dac3a4d547f493ef.png"
              alt="Caledon Kababs"
              className="w-22  mb-3 cursor-pointer"
            />
            <div className="flex flex-row gap-2">
              <img
                src="https://caledonkababs.com/static/media/fssai_final.ce5922e510d652f168ac.avif"
                alt=""
                className="w-16 h-8"
              />
              <p className="mt-4 text-xs text-gray-400">
                license No. 22823125000011
              </p>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-8 md:gap-24">
            <div>
              <h4 className="  text-orange-500 text-sm font-semibold mb-4">
                COMPANY
              </h4>
              <ul className="space-y-2 text-sm text-gray-700">
                <li className="cursor-pointer hover:text-blue-600 hover:underline ">
                  About
                </li>
                <li className="cursor-pointer hover:text-blue-600 hover:underline transition-colors">
                  Team
                </li>
              </ul>
            </div>

            <div>
              <h4 className=" text-orange-500 text-sm font-semibold mb-4">
                CONTACT US
              </h4>
              <ul className="space-y-2 text-sm text-gray-700">
                <li className="cursor-pointer hover:text-blue-600 hover:underline transition-colors">
                  Help & Support
                </li>
              </ul>
            </div>

            <div>
              <h4 className=" text-orange-500 text-sm font-semibold mb-4">
                LEGAL
              </h4>
              <ul className="space-y-2 text-sm text-gray-700">
                <li className="cursor-pointer hover:text-blue-600 hover:underline transition-colors">
                  Shipping Policy
                </li>
                <li className="cursor-pointer hover:text-blue-600 hover:underline transition-colors">
                  Return Policy
                </li>
                <li className="cursor-pointer hover:text-blue-600 hover:underline transition-colors">
                  Refund Policy
                </li>
                <li className="cursor-pointer hover:text-blue-600 hover:underline transition-colors">
                  Privacy Policy
                </li>
                <li className="cursor-pointer hover:text-blue-600 hover:underline transition-colors">
                  Terms & Conditions
                </li>
              </ul>
            </div>
          </div>
        </div>

        <hr className="my-10 border-gray-300" />

        <div className="flex flex-col md:flex-row justify-between items-center text-xs text-gray-600 gap-4">
          <p>
            © 2024{" "}
            <span className="cursor-pointer hover:text-blue-600 hover:underline transition-colors">
              Martian Corporation.
            </span>{" "}
            All Rights Reserved.
          </p>

          <div className="flex gap-4">
            <Facebook className="w-4 h-4 text-gray-600 hover:text-orange-500 cursor-pointer transition-colors" />
            <Instagram className="w-4 h-4 text-gray-600 hover:text-orange-500 cursor-pointer transition-colors" />
            <Twitter className="w-4 h-4 text-gray-600 hover:text-orange-500 cursor-pointer transition-colors" />
            <Github className="w-4 h-4 text-gray-600 hover:text-orange-500 cursor-pointer transition-colors" />
            <Youtube className="w-4 h-4 text-gray-600 hover:text-orange-500 cursor-pointer transition-colors" />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
