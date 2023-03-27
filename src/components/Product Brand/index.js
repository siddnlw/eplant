import './style.css';
import AmazonLogo from '../../assets/images/Amazon_Logo.png';
import DarazLogo from '../../assets/images/Daraz_logo.png';
import BestBuyLogo from '../../assets/images/Best-Buy-logo.png';
import AllibabaLogo from '../../assets/images/alibaba-logo.png';
import EvalyLogo from '../../assets/images/evaly-logo.png';

function ProductBrand() {
  return (
    <div className="ProductBrand">
      <div className="product-brand-title">Product Brand</div>
      <div className="product-title-card">
        <div><img src={AmazonLogo} alt="" /></div>
        <div><img src={DarazLogo} alt="" /></div>
        <div><img src={BestBuyLogo} alt="" /></div>
        <div><img src={AllibabaLogo} alt="" /></div>
        <div><img src={EvalyLogo} alt="" /></div>
      </div>
    </div>
  );
}

export default ProductBrand;