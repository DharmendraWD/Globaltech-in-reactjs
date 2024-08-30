// src/components/Product.jsx
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { STATUSES, fetchproducts } from "../redux/productSlice";
import { ArrowUpRight } from "lucide-react";
import { NavLink } from "react-router-dom";
import './css/product.css'
import Card2 from "./include/Card.jsx/Card2";


const Product = () => {
  const dispatch = useDispatch();
  const { products = [], status } = useSelector((state) => state.product); // Default products to an empty array

  useEffect(() => {
    dispatch(fetchproducts());
  }, [dispatch]);

  if (status === STATUSES.LOADING) {
    return <div style={{position:"absolute", top:"50%", left:"50%"}}>Loading...</div>;
  }

  if (status === STATUSES.ERROR) {
    return <div>Error loading products</div>;
  }

  console.log(products)

  return (
    <div className="flex justify-center items-center flex-col pt-[40px]">
<Card2 heading={"Our Products"} desc={""}></Card2>

      {products.data.length > 0 ? (
        <>
          {products.data.map((product) => (
            <div
              key={product.id}
              className="flex min-w-[90%] max-w-[90%] m-2 flex-col items-center rounded-md border md:flex-row"
            >
              <div className="h-full min-w-[300px] max-w-[300px] w-full md:h-[200px] p-2 md:w-[300px]">
                <img
                  src={product.image}
                  alt={product.name} // Dynamically set alt text
                  className="h-full w-full rounded-md object-cover"
                />
              </div>
              <div>
                <div className="p-4">
                  <h1 className="inline-flex items-center text-lg font-semibold">
                    {product.name} <ArrowUpRight className="ml-2 h-4 w-4" />
                  </h1>
                  <p className="mt-3 text-sm text-gray-600">
                    {product.description} // Dynamically show product
                    description
                  </p>
                  <div className="mt-4">
                    {/* Tags can be dynamically set if available in the product data */}
                    {product.slug && (
                      <span className="mb-2 mr-2 inline-block rounded-full bg-gray-100 px-3 py-1 text-[10px] font-semibold text-gray-900">
                        #{product.slug}
                      </span>
                    )}
                  </div>
                  <div className="mt-3 flex items-center space-x-2">
                    <span className="flex flex-col">
                      <NavLink to={`/product/${product.id}`}>
                        <button className="text-[15px] productsbtn font-medium text-gray-900">
                          View Details
                        </button>
                      </NavLink>
                    </span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </>
      ) : (
        <p>No products available.</p>
      )}
    </div>
  );
};

export default Product;
