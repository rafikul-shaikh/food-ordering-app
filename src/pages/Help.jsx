import { Phone, Mail } from "lucide-react";

const Help = () => {
  return (
    <section className="max-w-5xl mx-auto px-4 pt-24 ">
      <h1 className="text-2xl font-semibold text-center mt-4 mb-8">HELP</h1>
      <div className="flex items-center justify-between">
        {/* Food Related Support */}
        <div className="border-b pb-6 mb-6 ">
          <p className="font-semibold text-lg">+917797222128</p>
          <p className="text-gray-500 text-sm mb-3">
            for food related query & problem
          </p>

          <div className="flex gap-4">
            <a
              href="tel:+917797222128"
              className="flex items-center gap-2 bg-green-500 text-white px-4 py-2 rounded-md"
            >
              <Phone size={16} /> Call Us
            </a>

            <a
              href="mailto:caledonkababs@gmail.com"
              className="flex items-center gap-2 bg-green-500 text-white px-4 py-2 rounded-md"
            >
              <Mail size={16} /> Send Mail
            </a>
          </div>
        </div>

        {/* Technical Support */}
        <div>
          <p className="font-semibold text-lg">+919147375833</p>
          <p className="text-gray-500 text-sm mb-3">for technical support</p>

          <div className="flex gap-4">
            <a
              href="tel:+919147375833"
              className="flex items-center gap-2 bg-green-500 text-white px-4 py-2 rounded-md"
            >
              <Phone size={16} /> Call Us
            </a>

            <a
              href="mailto:office@martincorporation.com"
              className="flex items-center gap-2 bg-green-500 text-white px-4 py-2 rounded-md"
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
