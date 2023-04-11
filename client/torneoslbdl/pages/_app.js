import "@component/styles/globals.css";
import NavBar from "../components/navbar/NavBar";

export default function App({ Component, pageProps }) {
  return (
    <>
      <Component {...pageProps} /> 
      <NavBar/>
    </>
  );
}
