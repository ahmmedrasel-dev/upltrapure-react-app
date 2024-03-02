import { getAllProducts } from "../../data/products";
import GellaryCard from "./GellaryCard";
const GellaryPage = () => {
  const products = getAllProducts();
  return (
    <div className="max-w-screen-xl mx-auto my-5">
      <div className="grid sm:grid-cols-2 xl:grid-cols-4 gap-7">
        {products.map((product) => (
          <GellaryCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default GellaryPage;
