import { ListWrapper } from "../styles";
import products from "../products";
import Product from "./ProductItem";

const ProductList = () => {
  const productList = products.map((product) => {
    return <Product key={product.id} product={product} />;
  });
  return <ListWrapper>{productList}</ListWrapper>;
};

export default ProductList;
