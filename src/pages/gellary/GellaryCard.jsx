/* eslint-disable react/prop-types */
import { getImgUrl } from "../../utils/utility";

const GellaryCard = ({ product }) => {
  return (
    <figure className="p-4 border-2 border-black/10 shadow-sm dark:border-white/10 rounded-xl text-center">
      <img
        className="w-[250px] h-[250px] border-4 border-blue-500 rounded-full mb-4"
        src={getImgUrl(product.thumbnail)}
        alt={product.title}
      />
      <p className="font-semibold">{product.title}</p>
      <div className="divider my-1"></div>
      <button className="w-[150px] py-3 border rounded-md bg-red-600 text-white">
        Read More
      </button>
    </figure>
  );
};

export default GellaryCard;
