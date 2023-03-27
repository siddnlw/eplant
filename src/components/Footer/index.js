import './style.css';
import Logo from '../../assets/images/Logo-footer.png';

function Footer() {
  return (
    <>
      <div className="Footer">
        <div className="connect-with-us">
          <div className="footer-logo">
				    <img src={Logo} alt="" />
			    </div>
          <h3>Connect With Us</h3>
          <div className="social-media-footer">
            <div className="facebook"><i className="fa-brands fa-facebook-f" aria-hidden="true"></i></div>
            <div className="twitter"><i className="fa-brands fa-twitter" aria-hidden="true"></i></div>
            <div className="pinterest"><i className="fa-brands fa-pinterest" aria-hidden="true"></i></div>
            <div className="instagram"><i className="fa-brands fa-instagram" aria-hidden="true"></i></div>
          </div>
        </div>
        <div className="my-accounts">
          <h3>My Accounts</h3>
          <div className="links">
            <a href="#">My Orders</a>
            <a href="#">Account Settings</a>
            <a href="#">Email Preferences</a>
          </div>
        </div>
        <div className="about-us">
          <h3>About Us</h3>
          <div className="links">
            <a href="#">Our Story</a>
            <a href="#">Story Finder</a>
            <a href="#">Careers</a>
          </div>
        </div>
        <div className="customer-care">
          <h3>Customer Care</h3>
          <div className="links">
            <a href="#">Help Centre</a>
            <a href="#">Delivery</a>
            <a href="#">Returns & Refunds</a>
            <a href="#">Contact Us</a>
          </div>
        </div>
        <div className="newsletter">
          <h3>Subscribe to our Newsletter</h3>
          <div className="newsletter">
            <input className="inputbox" type="email" placeholder="Type your Email...." />
            <input className="subscribe-button" type="button" value="Subcribe" />
          </div>
        </div>
      </div>
      <div className="copyright">Plants | ©2023 All Rights Reserved</div>
    </>
  );
}

export default Footer;
