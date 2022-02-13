import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`

    :root {
        --background: #d6e2f0;
        --background-card: #ffffff;
        --background-qr: #3e52a3;
        
        --text-title: #1f3251;
        --text-subtitle: #7b879d;
    }

    * {
        margin: 0px;
        padding: 0px;
        box-sizing: border-box;
    }

    html {
        @media (max-width: 1080px){
            font-size: 93.75%; //15px
        }

        @media (max-width: 720px){
            font-size: 87.5%; //14px
        }
    }

    body{
        background: var(--background);
        -webkit-font-smoothing: antialiased;
    }

    body, input, textarea, button{
        font-family: 'Outfit', sans-serif;
        font-weight: 400;
        font-size: 1rem;
    }
    
    h1, h2, h3, h4, h5, h6, strong {
        font-weight: 700;
        font-family: 'Outfit', sans-serif;
    }

    body html #root {
    height: 100%;
  }

    button {
        cursos: pointer;
    }

    // Mobile
    @media(max-width: 375px) {
     flex-direction: column;
     position: relative;
    }

    //Desktop
    @media(max-width: 1440px) {
        flex-direction: column;
        position: relative;
    }
    
    html, body {
        margin: 0;
        height: 100%;
    }

    #root {
        display: flex;
        align-items: center;
        justify-content: center;
        align-content: center;
        flex-wrap: wrap;
        flex-direction: row;
        height: 100%;
    }

    /* http://meyerweb.com/eric/tools/css/reset/ 
   v2.0 | 20110126
   License: none (public domain)
*/

html, body, div, span, applet, object, iframe,
h1, h2, h3, h4, h5, h6, p, blockquote, pre,
a, abbr, acronym, address, big, cite, code,
del, dfn, em, img, ins, kbd, q, s, samp,
small, strike, strong, sub, sup, tt, var,
b, u, i, center,
dl, dt, dd, ol, ul, li,
fieldset, form, label, legend,
table, caption, tbody, tfoot, thead, tr, th, td,
article, aside, canvas, details, embed, 
figure, figcaption, footer, header, hgroup, 
menu, nav, output, ruby, section, summary,
time, mark, audio, video {
	margin: 0;
	padding: 0;
	border: 0;
	font-size: 100%;
	font: inherit;
	vertical-align: baseline;
}
/* HTML5 display-role reset for older browsers */
article, aside, details, figcaption, figure, 
footer, header, hgroup, menu, nav, section {
	display: block;
}
body {
	line-height: 1;
}
ol, ul {
	list-style: none;
}
blockquote, q {
	quotes: none;
}
blockquote:before, blockquote:after,
q:before, q:after {
	content: '';
	content: none;
}
table {
	border-collapse: collapse;
	border-spacing: 0;
}
`;
