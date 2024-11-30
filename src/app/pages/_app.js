import '../styles/main.css'
import '../styles/noscript.css'
 
// This default export is required in a new `pages/_app.js` file.
export default function MyApp({ Component, pageProps }) {
    return ( <> <style jsx global>{` body { background-color: lightblue; } `}</style> <Component {...pageProps} /> </> );
}