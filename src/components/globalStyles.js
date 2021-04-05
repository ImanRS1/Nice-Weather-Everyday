import {createGlobalStyle} from "styled-components";

const GlobalStyles = createGlobalStyle`
 body{
        font-family: "Heebo", sans-serif;
    }
    h1{
        font-family: "Pacifico", sans-serif;
        letter-spacing: 0.65rem;
    }

    input{
        letter-spacing: 0.15rem;
    }
    input, button{
        font-family: "Kiwi Maru", sans-serif;
    }

`

export default GlobalStyles;