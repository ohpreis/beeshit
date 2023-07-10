import '@styles/globals.css'
import Script from 'next/script'

function Application({ Component, pageProps }) {
  return 
    (
      <>
      <Component {...pageProps} />
      <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-8425699452348838" crossorigin="anonymous"></script>
      </>
    )
}

export default Application
