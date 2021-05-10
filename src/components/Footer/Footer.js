import React, { useState } from 'react';
import './Footer.css';
import {
	AiOutlineFacebook,
	AiOutlineInstagram,
	AiFillTwitterCircle,
} from 'react-icons/ai';

const Footer = () => {
	const [placeHolder, setPlaceHolder] = useState(
		'Enter your email address...',
	);
	const [email, setEmail] = useState('');

	const handleEmail = (e) => {
		setEmail(e.target.value);
	};

	const keepInTouch = (e) => {
		e.preventDefault();
		if (email !== '') {
			setEmail('');
			setPlaceHolder('Your email address is saved...');
		}
	};

	return (
		<div>
			<div className="keepintouch-sm">
				<div id="keepintouch">
					<h1 className="footer-title">Keep In Touch</h1>
					{placeHolder === 'Enter your email address...' ? (
						<form id="form-keepintouch" onSubmit={keepInTouch}>
							<input
								id="input-keepintouch"
								type="email"
								placeholder={placeHolder}
								onChange={handleEmail}
								value={email}
							/>
						</form>
					) : (
						<form id="form-keepintouch" onSubmit={keepInTouch}>
							<input
								id="input-keepintouch-saved"
								type="email"
								placeholder={placeHolder}
								onChange={handleEmail}
								value={email}
							/>
						</form>
					)}
				</div>
				<div id="social-media">
					<h1 className="footer-title">Let's Socialize</h1>
					<div className="sm-icons">
						<a
							href="https://www.facebook.com/"
							target="_blank"
							rel="noreferrer"
						>
							<AiOutlineFacebook className="footer-sm-icon" />
						</a>
						<a
							href="https://www.instagram.com/"
							target="_blank"
							rel="noreferrer"
						>
							<AiOutlineInstagram className="footer-sm-icon" />
						</a>
						<a
							href="https://twitter.com/home"
							target="_blank"
							rel="noreferrer"
						>
							<AiFillTwitterCircle className="footer-sm-icon" />
						</a>
					</div>
				</div>
			</div>
			<div id="nav-footer">
				<nav>
					<ul>
						<li>
							<a href="/aboutus">About Us</a>
						</li>
						<li>
							<a href="/contact">Contact</a>
						</li>
						<li>
							<a href="/faq">FAQ</a>
						</li>
						<li>
							<a href="/policies">Privacy & Policies</a>
						</li>
						<li>
							<a href="/pricing">Pricing</a>
						</li>
						<li>2021 &copy; MernBrothers</li>
					</ul>
				</nav>
			</div>
		</div>
	);
};

export default Footer;
