import {
  ListTitle,
  ListYear,
  ListDescription,
  ProductWrapper,
  Down,
} from "../styles";
const Product = (props) => {
  const product = props.product;
  return (
    <ProductWrapper>
      <ListTitle>{product.title}</ListTitle>
      <ListYear>{product.year}</ListYear>
      <ListDescription className="product-price">
        {product.description}
      </ListDescription>
      <img src={product.image} alt={product.name} />
      <Down>👇</Down>
    </ProductWrapper>
  );
};

export default Product;
