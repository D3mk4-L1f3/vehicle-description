import { createGlobalStyle } from "styled-components";
// import modernNormalize from "modern-normalize";
import monroRegular from "styles/fonts/Manrope-Regular.ttf";
import monroMedium from "styles/fonts/Manrope-Medium.ttf";
import monroSemi from "styles/fonts/Manrope-SemiBold.ttf";
import montRegular from "styles/fonts/Montserrat-Regular.ttf";
import montSemi from "styles/fonts/Montserrat-SemiBold.ttf";

export const GlobalStyles = createGlobalStyle`

  
    @font-face {
    font-family: "Manrope";
    font-weight: 400 500 600;
    src: url(${monroRegular}), url(${monroMedium}), url(${monroSemi});
  }
  
  @font-face {
    font-family: "Montserrat";
    font-weight: 400 600;
    src: url(${montRegular}), url(${montSemi});
  }

  :root {
    --white: #ffffff;
    --blue: #3470FF;
    --btn-hover: #0B44CD;
    --filter-bg: #F7F7FB;
    --text: #121417;
    --modal-text: #363535;
    --orange: #ffa500;
    --red: #ff0000;
    --yellow: #FFFFCC;
    --list-bg: #f9f9f9;
    --header-base: linear-gradient(
    180deg,
    rgba(0, 0, 0, 0.9) 60%,
    rgba(40, 100, 255, 1) 70%
  );
    --nav-gradient: linear-gradient(270deg, #2e1746 3.2%, #2e225f 99.98%);

    --transp20: rgba(18, 20, 23, 0.20);
    --transp50: rgba(18, 20, 23, 0.50); 
    --transp80: rgba(18, 20, 23, 0.80);

    --second-font:'Montserrat', sans-serif;
  }

body {
  margin: 0;
  font-family: 'Manrope', sans-serif;
  font-weight: 400;
  line-height: 1.4;
  color: var(--transp50);
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  transition: 0.5s;
}

p,
h1,
h2,
h3,
h4,
h5,
h6 {
  padding: 0;
  margin: 0;
}

ul,
ol {
  margin: 0;
  padding: 0;
  list-style: none;
}

img {
  display: block;
  max-width: 100%;
  object-fit: cover;
  cursor: unset !important;
}

a {
  text-decoration: none;
}

button {
  cursor: pointer;
}

.ReactModal__Body--open {
  overflow: hidden;
}

::-webkit-scrollbar {
  width: 0.5px;
}

::-webkit-scrollbar {
  scrollbar-width: thin; 
}


`;

export default GlobalStyles;
