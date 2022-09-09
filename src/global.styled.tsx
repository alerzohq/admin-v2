import { createGlobalStyle } from "styled-components";
import GlimmerBold from "./assets/fonts/GilmerFont2/Gilmer-Bold.otf";
import GlimmerHeavy from "./assets/fonts/GilmerFont2/Gilmer-Heavy.otf";
import GlimmerLight from "./assets/fonts/GilmerFont2/Gilmer-light.otf";
import GlimmerMedium from "./assets/fonts/GilmerFont2/Gilmer-Medium.otf";
import GlimmerRegular from "./assets/fonts/GilmerFont2/Gilmer-Regular.otf";
import { Color } from "./assets/theme";

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
  background: #fff;
  font-family: Gilmer, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto,
    Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;

  scroll-behavior: smooth;
}
h1,h2,h3,h4,h5,h6,p {
  margin: 2px;
  padding:2px;
}
a {
  color: inherit;
  text-decoration: none;
}

/* width */
::-webkit-scrollbar {
  width: 8px;
}

/* Track */
::-webkit-scrollbar-track {
  background: ${Color.alerzoWhite};
}

/* Handle */
::-webkit-scrollbar-thumb {
  background: ${Color.alerzoBlue};
}

/* Handle on hover */
::-webkit-scrollbar-thumb:hover {
  background: ${Color.alerzoOrange};
}


.success{
  background: #34a8531a;
  color:#34A853;
  font-size: .8rem;
  border-radius: 5px;
  padding: 0.5rem;
  text-align: center;
  font-weight: 500;
}
.pending{
  background: #f1a85a1a;
  color:#F1A85A;
  font-size: .8rem;
  border-radius: 5px;
  padding: 0.5rem;
  font-weight: 500;
  text-align: center;
}
.failed{
  background: #ea43361a;
  color:#EA4336;
  font-size: .8rem;
  border-radius: 5px;
  padding: 0.5rem;
  text-align: center;
  font-weight: 500;
}
.active{
  background: #34a8531a;
  color:#34A853;
  font-size: .8rem;
  border-radius: 5px;
  padding: 0.5rem;
  text-align: center;
  font-weight: 500;
  cursor: pointer;
}
.tableLink{
  text-decoration:underline;
  cursor: pointer;
  color:${Color.alerzoBlue};
  font-weight:600;

}
#td-hover{
  cursor: pointer;
}
.select-placeholder{
    color:${Color.alerzoDarkGray2} !important;
    font-size:.8rem ;
}

`;

export default GlobalStyle;
