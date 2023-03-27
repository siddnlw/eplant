import './style.css';
import Banner from '../../components/Banner';
import Card from '../../components/Card';
import ProductBrand from '../../components/Product Brand';

function Home() {
  return (
    <div className="Home">
      <Banner/>
      <Card/>
      <hr />
      <ProductBrand/>
      <hr />
    </div>
  );
}

export default Home;