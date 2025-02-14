import Loader from "../../../components/Loader/Loader";
import ProductCard from "../../../components/ProductCard/ProductCard";
import useProduct from "../../../Hooks/useProduct";

const NewHomeOffer = () => {
  const { products, refetch, isLoading } = useProduct();
  if (isLoading) return <Loader />;

  // Filter products based on discountPercentage
  const filteredProducts = products.filter(
    (product) =>
      product?.title.length > 25 &&
      product?.isHot != "yes" &&
      product?.isNew === "yes" &&
      !product?.discountPercentage &&
      product?.quantity > 0
  );

  return (
    <div className="px-2 lg:px-8 font_open_sense">
      <div>
        <h3 className="text-2xl mb-5 font-bold">Our New Products</h3>
      </div>
      {/* Preview cards */}
      <div className="grid  grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-3">
        {filteredProducts.slice(0, 5).map((product, idx) => (
          <div key={idx} className="snap-start flex-shrink-0 w-full sm:w-auto">
            <ProductCard product={product} refetch={refetch} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default NewHomeOffer;
