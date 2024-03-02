import { FaEnvelope, FaMapMarker, FaPhone } from "react-icons/fa";

const HeaderTop = () => {
  return (
    <div className="bg-secondary py-2 lg:block hidden">
      <div className="flex justify-between max-w-screen-xl mx-auto">
        <div className="w-[60%] flex justify-start gap-3 text-pure">
          <a
            className="text-sm flex items-center gap-2"
            href="mailto:ultrapureengineering@gmail.com"
          >
            <FaEnvelope />
            ultrapureengineering@gmail.com
          </a>
          <a
            className="text-sm flex items-center gap-2"
            href="tell:01860629988"
          >
            <FaPhone /> +8801860629988
          </a>
        </div>
        <div className="w-[40%] flex justify-end gap-3 text-white">
          <span className="text-sm flex items-center gap-2">
            <FaMapMarker /> Eastern Housing, Basherpool, Demra, Dhaka.
          </span>
        </div>
      </div>
    </div>
  );
};

export default HeaderTop;
