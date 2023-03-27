import './style.css';
import bannerOneImage from '../../assets/images/banner-1-img.png';

function Home() {
  return (
    <div className="Home">
     <section className="banner-slider">
      <div>

        <div className="banner">
          <div className="banner-left-side">
            <div className="banner-sub-title">Welcome to Plants</div>
            <div className="banner-main-title">LET’S MAKE A <br /> BETTER <span className='banner-title-highlight'>PLANTS</span></div>
            <div className="banner-description">We are an online plants shop offering a wide range of cheap and trendy plants. Use our plants to create an unique Urban Jungle. Order your favorite plants!</div>
            <div className="banner-action-button"><button>SHOP NOW</button></div>
          </div>
          <div className="banner-right-side">
            <div className="banner-image"><img src={bannerOneImage} alt="" /></div>
          </div>
        </div>

        <div className="banner">img2</div>

        <div className="banner">img3</div>

      </div>
      <div className="banner-dots">
        <div className="dot"></div>
        <div className="dot active"></div>
        <div className="dot"></div>
      </div>
     </section>
    </div>
  );
}

export default Home;