import styled, { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
body{
    color: ${(props) => props.theme.mainColor};
    background-color : ${(props) => props.theme.backgroundColor}; 
    a{
      text-decoration: none;
      color: ${(props) => props.theme.thirdColor};
      }
      
      a:visited{
      text-decoration: none;
     
}
`;

export const MyImage = styled.img`
  display: block;
  margin-left: auto;
  margin-right: auto;
  width: 100;
  margin-bottom: 2%;
  width: 300px;
  height: 300px;
  border: 3px solid #da4167;
  border-radius: 50%;
`;

export const Title = styled.h1`
  text-align: center;
  font-size: 60px;
`;

export const Description = styled.h1`
  text-align: center;
  margin-top: -2.5%;
`;

export const ListWrapper = styled.div`
  align-items: center;
  text-align: center;
`;

export const YearWrapper = styled.div`
  margin: 20px;

  img {
    width: 500px;
    height: 300px;
  }
  p {
    text-align: center;
    &.year-description {
      color: ${(props) => props.theme.thirdColor};
      font-weight: bold;
    }
  }
`;
export const StyledButton = styled.button`
  background: transparent;
  border-radius: 4px;
  border: 3px solid;
  color: ${(props) => props.theme.thirdColor};
  padding: 0.25em 1em;
  margin: 0 auto;
  display: block;
  font-size: 22px;
  margin-bottom: 2%;
`;

export const ListTitle = styled.h1`
  text-align: center;
  font-size: 40px;
  color: ${(props) => props.theme.thirdColor};
`;

export const ListYear = styled.h2`
  text-align: center;
  font-size: 30px;
  margin-top: -2%;
`;

export const ListDescription = styled.h2`
  text-align: center;
  font-size: 30px;
  color: ${(props) => props.theme.secondaryColor};
  margin-bottom: 2%;
`;

export const Down = styled.p`
  font-size: 30px;
`;
