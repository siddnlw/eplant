import './style.css';
import Logo from '../../assets/images/Logo.png';

function Header() {
  return (
    <div className="Header">
		<div className="header-menu">
			<div className="header-logo">
				<div className="menu-button">
					<i className="fa-solid fa-bars"></i>
				</div>
				<img src={Logo} alt="" />
			</div>
			<div className="menu-item active"><a href="#">Home</a></div>
			<div className="menu-item"><a href="#">Shop</a></div>
			<div className="menu-item"><a href="#">Plant Care</a></div>
			<div className="menu-item"><a href="#">Blog</a></div>
			<div className="menu-item"><a href="#">FAQ</a></div>
			<div className="menu-item"><a href="#">Contact</a></div>
		</div>
		<div className="header-user-details">
			<div className="search"><i className="fa fa-search" aria-hidden="true"></i></div>
			<div className="notification active"><i className="fa fa-bell" aria-hidden="true"></i></div>
			

			<div className="account-profile"><i className="fa fa-user" aria-hidden="true"></i>
</div>
		</div>
    </div>
  );
}

export default Header;
