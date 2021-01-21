import { ThemeProvider } from "styled-components";
import { GlobalStyle, StyledButton } from "./styles";
import Introduction from "./components/Introduction";
import YearList from "./components/YearList";

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
      <Introduction />
      <YearList class="year-list" />

      <StyledButton>
        <a href="#top" class="href">
          Back to top
        </a>
      </StyledButton>
    </ThemeProvider>
  );
}

export default App;
