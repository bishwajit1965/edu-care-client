import Logo from "/favicon/webDevProF.png";

const Footer = () => {
  return (
    <footer className="footer lg:px-28 px-2 p-10 bg-base-200 text-base-content">
      <aside>
        <img src={Logo} alt="" className="lg:w-16 lg:h-16 w-10 h-10" />
        <p>
          Web Tech Services is providing <br />
          reliable tech services since 1992
        </p>
        <p>&copy; 1992 All rights reserved.</p>
      </aside>
      <nav>
        <header className="footer-title">Services</header>
        <a className="link link-hover">Branding</a>
        <a className="link link-hover">Design</a>
        <a className="link link-hover">Marketing</a>
        <a className="link link-hover">Advertisement</a>
      </nav>
      <nav>
        <header className="footer-title">Company</header>
        <a className="link link-hover">About us</a>
        <a className="link link-hover">Contact</a>
        <a className="link link-hover">Jobs</a>
        <a className="link link-hover">Press kit</a>
      </nav>
      <nav>
        <header className="footer-title">Legal</header>
        <a className="link link-hover">Terms of use</a>
        <a className="link link-hover">Privacy policy</a>
        <a className="link link-hover">Cookie policy</a>
      </nav>
    </footer>
  );
};

export default Footer;
