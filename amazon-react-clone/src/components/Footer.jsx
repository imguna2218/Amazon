import '../App.css';

const Footer = () => {
  return (
    <footer>
      <div className="foot-panel1">
        Back To Top
      </div>
      <div className="foot-panel2">
        <ul>
          <p>Get to know us</p>
          <a href="#" className="link">Careers</a>
          <a href="#" className="link">Blog</a>
          <a href="#" className="link">About Amazon</a>
          <a href="#" className="link">Amazon Devices</a>
          <a href="#" className="link">Amazon Science</a>
        </ul>

        <ul>
          <p>Connect With Us</p>
          <a href="#" className="link">Facebook</a>
          <a href="#" className="link">Instagram</a>
          <a href="#" className="link">Twitter</a>
        </ul>

        <ul>
          <p>Make Money With Us</p>
          <a href="#" className="link">Sell On Amazon</a>
          <a href="#" className="link">Sell under Amazon accelerator</a>
          <a href="#" className="link">Protect and Build your Brand</a>
          <a href="#" className="link">Amazon Global settings</a>
          <a href="#" className="link">Become an affiliate</a>
          <a href="#" className="link">Fulfillment by Amazon</a>
          <a href="#" className="link">Advertise your products</a>
          <a href="#" className="link">Amazon Pay on Merchants</a>
        </ul>

        <ul>
          <p>Get to know us</p>
          <a href="#" className="link">COVID-19 And Amazon</a>
          <a href="#" className="link">Your Account</a>
          <a href="#" className="link">Return center</a>
          <a href="#" className="link">100% Purchases</a>
          <a href="#" className="link">Amazon App Download</a>
          <a href="#" className="link">Help</a>
          <p style={{ fontSize: "20px", marginTop: "30px", marginBottom: "10px" }}>SOCIAL MEDIA</p>
          <a href="https://www.instagram.com/amazondotin/">
            <i className="fa-brands fa-linkedin"></i>
            <i className="fa-brands fa-instagram"></i>
            <i className="fa-brands fa-facebook"></i>
            <i className="fa-brands fa-twitter"></i>
            <i className="fa-brands fa-youtube"></i>
          </a>
        </ul>
      </div>

      <div className="foot-panel3">
        <div className="logo1"></div>
      </div>

      <div className="foot-panel4">
        <div className="pages">
          <a href="#">Conditions of use</a>
          <a href="#">Privacy notice</a>
          <a href="#">Your Ads Privacy Choices</a>
        </div>
        <div className="copyright">
          © 1996-2023, Amazon.com, Inc, or its affiliates
        </div>
      </div>
    </footer>
  );
}

export default Footer;
