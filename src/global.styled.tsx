import { createGlobalStyle } from "styled-components";
import GlimmerBold from "./assets/fonts/GilmerFont2/Gilmer-Bold.otf";
import GlimmerHeavy from "./assets/fonts/GilmerFont2/Gilmer-Heavy.otf";
import GlimmerLight from "./assets/fonts/GilmerFont2/Gilmer-light.otf";
import GlimmerMedium from "./assets/fonts/GilmerFont2/Gilmer-Medium.otf";
import GlimmerRegular from "./assets/fonts/GilmerFont2/Gilmer-Regular.otf";

const GlobalStyle = createGlobalStyle`
  @font-face {
    font-family: "Gilmer";
    font-display: swap;
    src: url(${GlimmerLight}) format("opentype");
    font-weight: 400;
    font-style: normal;
  }
  @font-face {
    font-family: "Gilmer";
    font-display: swap;
    src: url(${GlimmerRegular}) format("opentype");
    font-weight: 500;
    font-style: normal;
  }
  @font-face {
    font-family: "Gilmer";
    font-display: swap;
    src: url(${GlimmerMedium}) format("opentype");
    font-weight: 600;
    font-style: normal;
  }
  @font-face {
    font-family: "Gilmer";
    font-display: swap;
    src: url(${GlimmerBold}) format("opentype");
    font-weight: 700;
    font-style: normal;
  }
  
  @font-face {
    font-family: "Gilmer";
    font-display: swap;
    src: url(${GlimmerHeavy}) format("opentype");
    font-weight: 800;
    font-style: normal;
  }
:root {

  /* Animations */
  --animation-duration: 0.5s;
  --animation-timing: ease;


  /* sizes */
  --spacing: 0;

  /* Fonts */

  /* Fonts: Line Height */

  /* Breakpoints */
  --breakpoints-mobile: 320px;
  --breakpoints-tablet: 768px;
  --breakpoints-computer: 992px;
  --breakpoints-desktop: 1200px;
  --breakpoints-widescreen: 1920px;

  /* Colors */
  --gray: #EEEEEE;
  --green: #34A853; 
  --green2: #DDF3E3;
  --red: #EA4336;
  --red2: rgba(234, 67, 54, 0.1);
  --yellow: #F1A85A;
  --yellow2: rgba(241, 168, 90, 0.1); 
  --text-gray-1: #A5B0B7;
  --text-gray-2: #798892;
  --text-color: #001928;
  --text-card-color: #374B58;

  /* Borders */
  --borders-radius: 10px;

  /* Shadows */
  --shadows-subtle: 0px 1px 2px 0 var(--borders-color);
}

html,
body {
  padding: 0;
  margin: 0;
  background: #c1cacf;
  font-family: Gilmer, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto,
    Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
  scroll-behavior: smooth;
}

a {
  color: inherit;
  text-decoration: none;
}
`;

export default GlobalStyle;
