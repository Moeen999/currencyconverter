const Footer = () => {
  const year = new Date().getFullYear();
  return (
    <footer className="appFooter">
      <h3>© {year} By Moeen. All rights reserved.</h3>
    </footer>
  );
};

export default Footer;
