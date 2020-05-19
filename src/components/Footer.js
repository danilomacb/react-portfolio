import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faGithub, faFacebook, faLinkedin, faTwitter } from "@fortawesome/free-brands-svg-icons";

function Footer() {
  return (
    <footer className="text-center">
      <div className="contact">
        <a href="https://github.com/danilomacb" target="blank">
          <FontAwesomeIcon icon={faGithub} size="lg" className="mr-2" />
          github.com/danilomacb
        </a>
      </div>
      <div className="contact">
        <a href="https://www.linkedin.com/in/danilomacb/" target="blank">
          <FontAwesomeIcon icon={faLinkedin} size="lg" className="mr-2" />
          linkedin.com/in/danilomacb
        </a>
      </div>
      <div className="contact">
        <a href="https://www.facebook.com/danilomacb/" target="blank">
          <FontAwesomeIcon icon={faFacebook} size="lg" className="mr-2" />
          facebook.com/danilomacb
        </a>
      </div>
      <div className="contact">
        <a href="https://twitter.com/danilomacb" target="blank">
          <FontAwesomeIcon icon={faTwitter} size="lg" className="mr-2" />
          twitter.com/danilomacb
        </a>
      </div>
      <div className="contact">
        <a href="mailto:danilo.macb@gmail.com">
          <FontAwesomeIcon icon={faEnvelope} size="lg" className="mr-2" />
          danilo.macb@gmail.com
        </a>
      </div>
    </footer>
  );
}

export default Footer;
