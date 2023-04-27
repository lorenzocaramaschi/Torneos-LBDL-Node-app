import "@component/styles/globals.css";
import NavBar from "../components/navbar/NavBar";

export default function App({ Component, pageProps }) {
  return (
    <>
      <Component {...pageProps} />
      {/* I put the NavBar here so wherever you are in the app, you will see the NavBar */}
      <NavBar />
    </>
  );
}
