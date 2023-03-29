import './style.css';
import ProfilePic from '../../assets/images/profile-pic.png';
import DarazLogo from '../../assets/images/Daraz_logo.png';
import BestBuyLogo from '../../assets/images/Best-Buy-logo.png';

function Testimonial() {
  return (
    <div className="Testimonial">
      <div className="testimonial-title">What our Custormers <br /> Are Say Us</div>
      <div className="testimonial-title-card">

        <div className="testimonial-card prev">
          <div className="testimonial-comment">Excellent value for money holiday. My questions were all answerd promptly and when my consultant was unavailable, another staff member would respond.</div>
          <div className="testimonial-submiter">
            <div className="testimonial-user-image">
              <img src={ProfilePic} alt="" />
            </div>
            <div className="testimonial-user">
              <div className="testimonial-user-name">Samanta Bells</div>
              <div className="testimonial-user-job">Reporter</div>
            </div>
          </div>
          <div className="testimonial-ratings">
            <span class="fa fa-star checked"></span>
            <span class="fa fa-star checked"></span>
            <span class="fa fa-star checked"></span>
            <span class="fa fa-star"></span>
            <span class="fa fa-star"></span>
          </div>
        </div>

        <div className="testimonial-card center">
          <div className="testimonial-comment">Easy booking no problems with using vouchers or service. Voucher received in mail when we got home. Bonus for next holiday. Thank you</div>
          <div className="testimonial-submiter">
            <div className="testimonial-user-image">
              <img src={ProfilePic} alt="" />
            </div>
            <div className="testimonial-user">
              <div className="testimonial-user-name">Carmen Gloria</div>
              <div className="testimonial-user-job">Traveller</div>
            </div>
          </div>
          <div className="testimonial-ratings">
            <span class="fa fa-star checked"></span>
            <span class="fa fa-star checked"></span>
            <span class="fa fa-star checked"></span>
            <span class="fa fa-star checked"></span>
            <span class="fa fa-star checked"></span>
          </div>
        </div>

        <div className="testimonial-card next">
          <div className="testimonial-comment">Very Easy booking no problems with using vouchers or service. Voucher received in mail when we got home. Bonus for next holiday. Thank you</div>
          <div className="testimonial-submiter">
            <div className="testimonial-user-image">
              <img src={ProfilePic} alt="" />
            </div>
            <div className="testimonial-user">
              <div className="testimonial-user-name">Braydle Carls</div>
              <div className="testimonial-user-job">Photographer</div>
            </div>
          </div>
          <div className="testimonial-ratings">
            <span class="fa fa-star checked"></span>
            <span class="fa fa-star checked"></span>
            <span class="fa fa-star checked"></span>
            <span class="fa fa-star checked"></span>
            <span class="fa fa-star"></span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Testimonial;