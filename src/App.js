import { ThemeProvider } from "styled-components";
import { GlobalStyle, StyledButton } from "./styles";
import Home from "./components/Home";
import ProductList from "./components/ProductList";

const theme = {
  mainColor: "#CCC5B9",
  secondaryColor: "#CCC5B9",
  thirdColor: "#DA4167",
  backgroundColor: "#252422",
};

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Home />
      <ProductList class="product-list" />

      <StyledButton>
        <a href="#" class="href">
          Back to top
        </a>
      </StyledButton>
    </ThemeProvider>
  );
}

export default App;
