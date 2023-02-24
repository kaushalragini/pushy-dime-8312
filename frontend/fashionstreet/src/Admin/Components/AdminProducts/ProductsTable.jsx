import { Button, Image, Skeleton, useDisclosure } from "@chakra-ui/react";
import React, { useRef } from "react";
import ProductCard from "./ProductCard";
import ProductModal from "./ProductModal";
import "./ProductsTable.css";

const ProductsTable = ({
  products,
  disableImg = false,
  modal = "More..",
  heading = ["Name", "Brand", "Price", "More.."],
  requiredFilelds = ["product_name", "brand", "price", ""],
}) => {
  const ref = useRef(null);
  console.log(products);
  return (
    <Skeleton
      startColor="purple.100"
      endColor="purple.300"
      height="600px"
      isLoaded={products.length}
    >
      <div>
        {" "}
        <table className="table">
          <thead>
            <tr>
              {disableImg ? "" : <th>Image</th>}
              {heading?.map((el) => {
                return <th key={el}>{el}</th>;
              })}
            </tr>
          </thead>
          <tbody>
            {products?.map((prod, index) => {
              return (
                <tr className="table-row" key={prod._id}>
                  {disableImg ? (
                    ""
                  ) : (
                    <td data-label="Image">
                      <Image w="30px" src={prod.img} alt={prod.img} />
                    </td>
                  )}
                  {heading.map((el, i) => {
                    return (
                      <td data-label={el} key={el}>
                        {el === "Price" ? "₹ " : ""}
                        {products[index][requiredFilelds[i]] ? (
                          products[index][requiredFilelds[i]]
                        ) : (
                          <>
                            <ProductModal
                              title={"Product Details"}
                              size={"full"}
                            >
                              <ProductCard product={prod} />
                            </ProductModal>
                          </>
                        )}
                      </td>
                    );
                  })}
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </Skeleton>
  );
};

export default ProductsTable;
