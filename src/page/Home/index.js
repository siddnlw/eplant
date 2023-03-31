import './style.css';
import Banner from '../../components/Banner';
import Card from '../../components/Card';
import ProductBrand from '../../components/Product Brand';
import Testimonial from '../../components/Testimonial';
import ProductDisplay from '../../components/Product Display';

function Home() {
  return (
    <div className="Home">
      <Banner/>
      <ProductDisplay/>
      <Card/>
      <hr />
      <ProductBrand/>
      <hr />
      <Testimonial/>


    </div>
  );
}

export default Home;