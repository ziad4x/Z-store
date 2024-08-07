import React from 'react';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import '../Footer.css'; // Make sure to create this CSS file or use a CSS module

function Footer() {
  return (
    <footer className="footer-container">
        <div className=' container'>
      <div className="row">
        
        <div className="footer-section contact-info col-lg-4 col-md-6 ">
            
          <ul className="list-unstyled ">
            <li>+20 98123</li>
            <li>Cairo, Egypt</li>
            <li>123 Ain Shams Street</li>
          </ul>
        </div>
        <div className="footer-section links col-lg-4 col-md-6">
          <ul className="list-unstyled">
            <li><a href="#">About</a></li>
            <li><a href="#">Contact Us</a></li>
            <li><a href="#">Services</a></li>
          </ul>
        </div>
        <div className="footer-section social-media col-lg-4 col-md-12">
          <ul className="list-unstyled d-flex flex-row gap-2">
            <li><a href="#"><FacebookIcon className="social-icon" /></a></li>
            <li><a href="#"><InstagramIcon className="social-icon" /></a></li>
            <li><a href="#"><LinkedInIcon className="social-icon" /></a></li>
          </ul>
        </div>
      </div>
      <div className="footer-bottom text-center">
        <p>&copy; 2024 Your Company. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
