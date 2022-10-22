import "../styles/globals.scss";
import "../styles/background.css";
import "../styles/blog.scss";
import Header from "../components/Header.jsx";
import Background from "../components/background";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Background />
      <Header />
      <main className="container">
        <Component {...pageProps} />
      </main>
    </>
  );
}

export default MyApp;
