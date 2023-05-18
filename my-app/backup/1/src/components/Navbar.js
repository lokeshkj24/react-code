import React from 'react';
import PropTypes from 'prop-types';

export default function Navbar(props) {
	return (
		<nav className={`navbar navbar-expand-lg bg-body-${props.mode} navbar-${props.mode} bg-${props.mode}`}>
				<div className="container-fluid">
					<a className="navbar-brand" href="/">{props.appTitle}</a>
					<button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
						<span className="navbar-toggler-icon"></span>
					</button>
					<div className="collapse navbar-collapse" id="navbarSupportedContent">
						<ul className="navbar-nav me-auto mb-2 mb-lg-0">
							<li className="nav-item">
								<a className="nav-link active" aria-current="page" href="/">{props.homeText}</a>
							</li>
							<li className="nav-item">
								<a className="nav-link" href="/">{props.aboutText}</a>
							</li>
						</ul>
						<form className="d-flex" role="search">
							<input className="form-control me-2" type="search" placeholder="Search..." aria-label="Search"/>
							<button className="btn btn-outline-success" type="submit">{props.searchText}</button>
						</form>
					</div>

					<select style={{width:"200px"}} className=" mx-5 form-select" aria-label="Default select example" onChange={props.changeThemeColor}>
					<option value="white">Choose Theme Color</option>
						<option value="lightgray">Light Gray</option>
						<option value="darkgray">Dark Gray</option>
						<option value="green">Green</option>
						<option value="blue">Blue</option>
						<option value="red">Red</option>
						<option value="orange">Orange</option>
					</select>

					<div className={`form-check form-switch mx-5 text-${props.mode==='light'?'dark':'light'}`}>
						<input className="form-check-input" type="checkbox" role="switch" onClick={props.toggleMode} id="flexSwitchCheckDefault" />
						<label className="form-check-label" htmlFor="flexSwitchCheckDefault">Enable Dark Mode</label>
					</div>
				</div>
		</nav>
	)
}

/**
 *@var Set props validation
*/
Navbar.propTypes = {
    appTitle: PropTypes.string.isRequired,
    homeText: PropTypes.string.isRequired,
    aboutText: PropTypes.string.isRequired,
    searchText: PropTypes.string.isRequired
};

/**
 *@var Set props value
*/

Navbar.defaultProps = {
    appTitle: 'My React',
    homeText: 'My Home',
    aboutText: 'About',
    searchText: 'Search Me'
};