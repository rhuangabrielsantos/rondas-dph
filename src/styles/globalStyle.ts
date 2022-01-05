import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    background: #202124;
  }

  .ReactCollapse--collapse {
    transition: height 500ms;
  }

  .ReactCollapse--content {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: start;

    background-color: #F6F1EB;
    width: 25rem;

    border-radius: 0px 0px 5px 5px;
  }
`;

export default GlobalStyle;
