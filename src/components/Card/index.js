import './style.css';
import CardImg1 from '../../assets/images/card-1.png';
import CardImg2 from '../../assets/images/card-2.png';

function Card() {
  return (
    <div className="Card">
      <div className="card-1">
        <div className="card-text">
          <div className="card-title">SUMMER CACTUS & <br /> SUCCULENTS</div>
          <div className="card-description">We are an online plant shop offering a wide range cheap and trendy plants</div>
          <div className="card-action-button"><button>See More</button></div>
        </div>
        <div className="card-image">
          <img src={CardImg1} alt="" />
        </div>
      </div>
      <div className="card-2">
        <div className="card-text">
          <div className="card-title">STYLING TRENDS & <br /> MUCH MORE</div>
          <div className="card-description">We are an online plant shop offering a wide range cheap and trendy plants</div>
          <div className="card-action-button"><button>See More</button></div>
        </div>
        <div className="card-image">
          <img src={CardImg2} alt="" />
        </div>
      </div>
    </div>
  );
}

export default Card;