import React from 'react';
import { Link } from 'react-router-dom';
import './NavBar.css';
import Logo from '../assets/icons/CodeClan_Logo.png';
import { Icon } from 'semantic-ui-react';
import LogInButton from './LogInButton'
import AuthenticationService from '../service/AuthenticationService'

function accountButton() {
	if(AuthenticationService.isUserLoggedIn()){
		return 'Account'
	}
}

function adminButton(){
	if(AuthenticationService.getLoggedInUserName() === 'admin'){
		return 'Admin'
	}
}

function ordersButton() {
	if(AuthenticationService.isUserLoggedIn()){
		return 'Orders'
	}
}

const NavBar = (props) => {
	
	return (
		<nav className="nav-bar">
			<ul>
				<li>
					<Link to="/">
						<img src={Logo} alt="Code Clan Logo" />
					</Link>
				</li>
				<li>
					<Link to="/admin/items">{adminButton()}</Link>
				</li>
				<li>
					<Link to="/account">{accountButton()}</Link>
				</li>
				<li>
					<Link to="/orders">{ordersButton()}</Link>
				</li>
				<li>
					<LogInButton 
					checkLoginStatus = {props.checkLoginStatus} 
					loggedIn = {props.loggedIn}
					/>
				</li>
				<li>
					<Link to="/cart">
						<Icon name="shopping cart" 
						size="large" 
						/>
					</Link>
				</li>
			</ul>
		</nav>
	);
};

export default NavBar;
