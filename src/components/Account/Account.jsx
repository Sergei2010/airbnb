import navIcon from './nav.svg';
import './style.css';

const Account = () => {
	return (
		<button className="account">
			<div className="account__nav-icon">
				<img src={navIcon} alt="Nav" />
			</div>
			<div className="account__avatar">
				<img src="./img/icons/user-avatar.svg" alt="User avatar" />
			</div>
		</button>
	);
};

export default Account;
