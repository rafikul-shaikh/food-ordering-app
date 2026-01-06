import { Phone, Mail } from "lucide-react";

const Help = () => {
  return (
    <div className="w-full flex justify-center min-h-screen pt-20 bg-black/5">
      <div className="flex flex-col w-full h-full sm:w-10/12 md:w-8/12 lg:w-6/12 max-w-maxContent gap-y-4 py-3">
        <div className="w-full h-full flex flex-col gap-y-3">
          {/* Title */}
          <span className="text-center font-bold text-lg text-blue-500 pl-3 uppercase">
            Help
          </span>
          <div className="h-px bg-black/10 my-1" />

          {/* Content */}
          <div className="flex justify-center">
            <div className="flex flex-col gap-y-4 w-11/12">
              {/* Food Phone */}
              <div className="flex w-full justify-between items-start">
                <p className="flex flex-col text-sm font-bold sm:text-xl">
                  +919002800182
                  <span className="text-xs font-light">
                    for food related query & problem
                  </span>
                </p>
                <a
                  href="tel:+917797222128"
                  className="flex items-center gap-x-1 bg-green-500 text-white text-xs py-1.5 px-3 rounded-md sm:text-base sm:py-2 sm:px-3 min-w-25 shrink-0"
                >
                  <Phone size={16} /> Call Us
                </a>
              </div>

              {/* Food Email */}
              <div className="flex w-full justify-between items-start">
                <p className="flex flex-col text-sm font-bold sm:text-xl">
                  rafikulshaikh510@gmail.com
                  <span className="text-xs font-light">
                    for food related query & problem
                  </span>
                </p>
                <a
                  href="mailto:caledonkababs@gmail.com"
                  className="flex items-center gap-x-1 bg-green-500 text-white text-xs py-1.5 px-2 rounded-md sm:text-base sm:py-2 sm:px-3 min-w-25 shrink-0"
                >
                  Send Mail <Mail size={16} />
                </a>
              </div>

              {/* Tech Phone */}
              <div className="flex w-full justify-between items-start">
                <p className="flex flex-col text-sm font-bold sm:text-xl">
                  +918250928498
                  <span className="text-xs font-light">
                    for technical support
                  </span>
                </p>
                <a
                  href="tel:+919147375833"
                  className="flex items-center gap-x-1 bg-green-500 text-white text-xs py-1.5 px-3 rounded-md sm:text-base sm:py-2 sm:px-3 min-w-25 shrink-0"
                >
                  <Phone size={16} /> Call Us
                </a>
              </div>

              {/* Tech Email */}
              <div className="flex w-full justify-between items-start">
                <p className="flex flex-col text-sm font-bold sm:text-xl">
                  rafikulshaikh0335@gmail.com
                  <span className="text-xs font-light">
                    for technical support
                  </span>
                </p>
                <a
                  href="mailto:office@martiancorporation.com"
                  className="flex items-center gap-x-1 bg-green-500 text-white text-xs py-1.5 px-2 rounded-md sm:text-base sm:py-2 sm:px-3 min-w-25 shrink-0"
                >
                  Send Mail <Mail size={16} />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Help;
