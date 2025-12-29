import { Phone, Mail } from "lucide-react";

const Help = () => {
  return (
    <section className="max-w-2xl mx-auto px-4 pt-24 ">
      <h1 className="text-2xl font-semibold text-center text-blue-500 mt-4 mb-3">
        HELP
      </h1>
      <hr className="my-2 px-4 mx-auto border-gray-300" />

      <div className="">
        <div className="pb-6 mb-6 flex flex-col md:flex-row md:items-center md:justify-between gap-6">
          <div>
            <p className="font-bold text-lg">+917797222128</p>
            <p className="text-gray-500 text-sm mb-3">
              for food related query & problem
            </p>

            <p className="font-bold text-lg">caledonkababs@gmail.com</p>
            <p className="text-gray-500 text-sm mb-3">
              for food related query & problem
            </p>

            <p className="font-bold text-lg">+919147375833</p>
            <p className="text-gray-500 text-sm mb-3">for technical support</p>
            <p className="font-bold text-lg">office@martiancorporation.com</p>
            <p className="text-gray-500 text-sm mb-3">for technical support</p>
          </div>

          <div className="flex gap-4 flex-col w-full md:w-auto">
            {/* Food Related Support */}
            <a
              href="tel:+917797222128"
              className="flex items-center justify-center gap-2 bg-green-500 text-white px-4 py-2 rounded-md w-full md:w-auto"
            >
              <Phone size={16} /> Call Us
            </a>

            <a
              href="mailto:caledonkababs@gmail.com"
              className="flex items-center justify-center gap-2 bg-green-500 text-white px-4 py-2 rounded-md w-full md:w-auto"
            >
              <Mail size={16} /> Send Mail
            </a>
            {/* Technical Support */}
            <a
              href="tel:+919147375833"
              className="flex items-center justify-center gap-2 bg-green-500 text-white px-4 py-2 rounded-md w-full md:w-auto"
            >
              <Phone size={16} /> Call Us
            </a>

            <a
              href="mailto:office@martincorporation.com"
              className="flex items-center justify-center gap-2 bg-green-500 text-white px-4 py-2 rounded-md w-full md:w-auto"
            >
              <Mail size={16} /> Send Mail
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Help;
