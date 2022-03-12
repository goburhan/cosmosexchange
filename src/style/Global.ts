import { createGlobalStyle } from 'styled-components'
import farmbg from './54.png'

const GlobalStyle = createGlobalStyle`
* {
  font-family: 'Barlow Semi Condensed', sans-serif;
  }
  body {
    background-color: ${({ theme }) => theme.colors.background};

    img {
      height: auto;
      max-width: 100%;
    }
  }



`

export default GlobalStyle
