import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faTwitter,
  faYoutube,
  faLinkedin,
  faGoogle,
} from "@fortawesome/free-brands-svg-icons";
import { faEnvelope, faFax, faPhone } from "@fortawesome/free-solid-svg-icons";
function Footer(props) {
  return (
    <div className="footer">
      <div className="container">
        <div className="footer-row justify-content-center">
          <div className="col-7 col-sm-5">
            <h2>Our Address</h2>
            <address>
              121, Clear Water Bay Road
              <br />
              Clear Water Bay, Kowloon
              <br />
              HONG KONG
              <br />
              <FontAwesomeIcon icon={faPhone} />
              : +852 1234 5678
              <br />
              <FontAwesomeIcon icon={faFax} />
              : +852 8765 4321
              <br />
              <FontAwesomeIcon icon={faEnvelope} />
              <a href="mailto:confusion@food.net">: confusion@food.net</a>
            </address>
          </div>
          <div className="icon">
            <div className="icon-text-center">
              <a className="icon-google" href="http://google.com/+">
                <FontAwesomeIcon icon={faGoogle} />
              </a>
              <a
                className="icon-facebook"
                href="http://www.facebook.com/profile.php?id="
              >
                <FontAwesomeIcon icon={faFacebook} />
              </a>
              <a className="icon-linkedin" href="http://www.linkedin.com/in/">
                <FontAwesomeIcon icon={faLinkedin} />
              </a>
              <a className="icon-twitter" href="http://twitter.com/">
                <FontAwesomeIcon icon={faTwitter} />
              </a>
              <a className="icon-youtube" href="http://youtube.com/">
                <FontAwesomeIcon icon={faYoutube} />
              </a>
              <a className="icon-mail" href="mailto:">
                <FontAwesomeIcon icon={faEnvelope} />
              </a>
            </div>
          </div>
        </div>
        <div className=" justify-content-center">
          <div className="footer-text">
            <p>© Copyright 2018 Ristorante Con Fusion</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
