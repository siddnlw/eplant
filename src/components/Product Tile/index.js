import './style.css';
import ProductImage from '../../assets/images/card-1.png';

function ProductTile() {
  return (
    <div className="ProductTile">
        <div className="product-discount-percentage">20% off</div>
        <div className="product-add-to-whishlist"><i class="fa-solid fa-heart"></i></div>
        <div className="product-image"><img src={ProductImage} alt="" /></div>
        <div className="product-category">Tree Garden</div>
        <div className="product-name">Standard Gerbera, using Standard Gerbera</div>
        <div className="product-purchase-details">
            <div className="product-price">
                <div className="product-actual-price">₹95</div>
                <div className="product-discounted-price">₹75</div>
            </div>
            <div className="product-add-to-cart"><button>Add to cart</button></div>
        </div>
    </div>
  );
}

export default ProductTile;