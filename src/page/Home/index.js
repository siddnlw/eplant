import './style.css';
import Banner from '../../components/Banner';
import Card from '../../components/Card';
import ProductBrand from '../../components/Product Brand';
import Testimonial from '../../components/Testimonial';

function Home() {
  return (
    <div className="Home">
      <Banner/>
      <Card/>
      <hr />
      <ProductBrand/>
      <hr />
      <Testimonial/>


    </div>
  );
}

export default Home;