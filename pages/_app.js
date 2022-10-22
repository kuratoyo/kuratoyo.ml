import "../styles/globals.scss";
import "../styles/blog.scss";
import Header from "../components/Header.jsx";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Header />
      <main className="container">
        <Component {...pageProps} />
      </main>
    </>
  );
}

export default MyApp;
