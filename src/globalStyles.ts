import styled, { createGlobalStyle } from "styled-components";

export const Global = createGlobalStyle`
@import url('https://fonts.googleapis.com/css2?family=Roboto:wght@400;500;700&display=swap');
*,
*::before,
*::after {
  box-sizing: border-box;
} 
ul,
ol {
  padding: 0;
} 
body,
h1,
h2,
h3,
h4,
h5,
p,
ul,
ol,
li,
figure,
figcaption,
blockquote,
dl,
dd {
  margin: 0;
}
body {
  min-height: 100vh;
}
ul,
ol {
  list-style: none;
}
a {
  text-decoration: none;
}
img {
  display: block;
}

article>*+* {
  margin-top: 1em;
}
input,
button,
textarea,
select {
  font: inherit;
}
#root {
color: #000;  
display: flex;
align-items: center;
justify-content: center;
position: relative;
height: 100%;
}
body {
  background-color: #f4f4f4;
  font-family: 'Roboto', sans-serif;
}
`;

export const AppWrapper = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  padding: 30px 20px;
  width: 500px;
  @media (max-width: 390px) {
    width: 300px;
  }
`;
