import { Link } from "react-router-dom";
import { BsArrowRightShort } from "react-icons/bs";

const SingleFeture = ({ feature }) => {
  const { icon, title, summary } = feature;
  return (
    <div className="bg-slate-50 px-6 py-8 shadow-lg hover:bg-primary hover:text-white duration-500 rounded-md">
      <p className="text-8xl mb-2 text-warning">{icon}</p>
      <h2 className="text-xl font-semibold ">{title}</h2>
      <p className="py-4 ">{summary}</p>
      <Link className="text-warning flex items-center hover:text-white">
        Discover Now <BsArrowRightShort className="text-3xl" />
      </Link>
    </div>
  );
};

export default SingleFeture;
