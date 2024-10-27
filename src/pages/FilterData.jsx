import { useSelector } from 'react-redux';
import NoProduct from '../assets/images/no-product-found.jpg';

import ProductCard from '../components/ProductCard';
import { filterDataProducts } from '../redux/productSlice';

const FilterData = () => {
  const filterPro = useSelector(filterDataProducts);
  return (
    <div className=" mx-auto py-12 px-4 md:px-16 lg:px-24">
      {filterPro.length > 0 ? (
        <>
          <h2 className="text-2xl font-bold mb-6 text-center">Shop</h2>
          <div className="grid grid-cols-1 sm:grid-cole-2 md:grid-cols-4 lg:grid-cols-5 gap-6 cursor-pointer">
            {filterPro.map(product => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </>
      ) : (
        <div className="flex justify-center">
          <img src={NoProduct} />
        </div>
      )}
    </div>
  );
};

export default FilterData;
