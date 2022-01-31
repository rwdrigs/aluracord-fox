function GlobalStyle() {
    return (
      <style global jsx>{`
        * {
          margin: 0;
          padding: 0;
          box-sizing: border-box;
          list-style: none;
        }
        ::-webkit-scrollbar {
          width: 0.5em;
        }
        
        /* Track */
        ::-webkit-scrollbar-track {
          background: #313D49;
        }
        
        /* Handle */
        ::-webkit-scrollbar-thumb {
          background: #F79596;
        }
        body {
          font-family: 'Open Sans', sans-serif;
        }
        /* App fit Height */ 
        html, body, #__next {
          min-height: 100vh;
          display: flex;
          flex: 1;
        }
        #__next {
          flex: 1;
        }
        #__next > * {
          flex: 1;
        }
        /* ./App fit Height */ 
      `}</style>
    );
  }

export default function CustomApp({ Component, pageProps }) { 
    return (
    <>
    <GlobalStyle />
    <Component {...pageProps} />
    </>
    );
}
