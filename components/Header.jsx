import Link from "next/link";

const Header = () => {
  return (
    <header>
      <div className="container">
        <Link href="/" passHref>
          <img id="logo_image" src="/images/logo.png"></img>
        </Link>
      </div>
    </header>
  );
};

export default Header;
