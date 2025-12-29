import { Phone, Mail } from "lucide-react";

const Help = () => {
  return (
    <section className="max-w-2xl mx-auto px-4 pt-24 ">
      <h1 className="text-2xl font-semibold text-center text-blue-500 mt-4 mb-3">
        HELP
      </h1>
      <hr className="my-2 px-4 mx-auto border-gray-300" />

      <div className="space-y-2">
        {/* Food phone */}
        <div className="flex items-center justify-between gap-4">
          <div>
            <p className="font-bold text-lg">+917797222128</p>
            <p className="text-gray-500 text-sm">
              for food related query & problem
            </p>
          </div>

          <a
            href="tel:+917797222128"
            className="flex items-center justify-center gap-1 bg-green-500 text-white px-3 py-1.5 rounded-md text-sm min-w-25 shrink-0"
          >
            <Phone size={16} /> Call Us
          </a>
        </div>

        {/* Food email */}
        <div className="flex items-center justify-between gap-4">
          <div>
            <p className="font-bold text-lg">caledonkababs@gmail.com</p>
            <p className="text-gray-500 text-sm">
              for food related query & problem
            </p>
          </div>

          <a
            href="mailto:caledonkababs@gmail.com"
            className="flex items-center justify-center gap-1 bg-green-500 text-white px-3 py-1.5 rounded-md text-sm min-w-25 shrink-0"
          >
            <Mail size={16} /> Send Mail
          </a>
        </div>

        {/* Tech phone */}
        <div className="flex items-center justify-between gap-4">
          <div>
            <p className="font-bold text-lg">+919147375833</p>
            <p className="text-gray-500 text-sm">for technical support</p>
          </div>

          <a
            href="tel:+919147375833"
            className="flex items-center justify-center gap-1 bg-green-500 text-white px-3 py-1.5 rounded-md text-sm min-w-25 shrink-0"
          >
            <Phone size={16} /> Call Us
          </a>
        </div>

        {/* Tech email */}
        <div className="flex items-center justify-between gap-4">
          <div>
            <p className="font-bold text-lg">office@martiancorporation.com</p>
            <p className="text-gray-500 text-sm">for technical support</p>
          </div>

          <a
            href="mailto:office@martiancorporation.com"
            className="flex items-center justify-center gap-1 bg-green-500 text-white px-3 py-1.5 rounded-md text-sm min-w-25 shrink-0"
          >
            <Mail size={16} /> Send Mail
          </a>
        </div>
      </div>
    </section>
  );
};

export default Help;
