import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
  :root {
    --badge-bg: #354578;
    --badge-text: #dbe4ff;
    --badge-border: #7189e8;
    --app-bg: #f4f6fa;
    --app-text: #222;
    --card-bg: #ffffff;
    --input-bg: #ffffff;
    --input-text: #222;
  }

  @media (prefers-color-scheme: dark) {
    :root {
      --app-bg: #16171d;
      --app-text: #f3f4f6;
      --card-bg: #252630;
      --input-bg: #30313d;
      --input-text: #f3f4f6;
    }
  }

  * {
    box-sizing: border-box;
  }

  body {
    margin: 0;
    background: var(--app-bg);
    color: var(--app-text);
  }

  a {
    color: inherit;
    text-decoration: none;
  }

  button, input, select, textarea {
    font: inherit;
  }

  input, select, textarea {
    background: var(--input-bg);
    color: var(--input-text);
  }
`

export default GlobalStyle