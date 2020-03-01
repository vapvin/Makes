import {createGlobalStyle} from 'styled-components';
import reset from "styled-reset";
const GlobalStyles = createGlobalStyle`
    ${reset}
     * {
        box-sizing:border-box;
    }
    body {
        background: #dee2e6;
        font-size:14px;
        font-family:-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
        padding-top: 100px;
        background: #E21947;
    }
`;

export default GlobalStyles;