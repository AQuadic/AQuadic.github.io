import React from "react";
import { Container } from "react-bootstrap";
import { useTranslation } from "react-i18next";

function Footer() {
  const { t } = useTranslation();
  var date = new Date().getFullYear() ;
  return (
    <div className="footer">
      <Container>
        <h3>© {t("footer.aquadic")}, 2019-{date}.</h3>
        <div>
          <a
         
            className="icon-soch faceboock"
            rel="noreferrer"
            href="https://www.facebook.com/aquadicsoftware"
           
            target="_blank"
            aria-label="a.link_social"
          
          >
            <img src="/images/icons/facebook_off.svg" alt="" />
            <img src="/images/icons/facebook_on.svg" alt="" />
          </a>

          <a
            className="icon-soch linkedin"
            rel="noreferrer"
            href="https://www.linkedin.com/company/aquadic"
            target="_blank"
            aria-label="a.link_social"
          >
            <img src="/images/icons/linkedin_off.svg" alt="" />
            <img src="/images/icons/linkedin_on.svg" alt="" />
          </a>

          <a
            className="icon-soch behance"
            rel="noreferrer"
            href="https://www.behance.net/aquadic"
            target="_blank"
            aria-label="a.link_social"
          >
            <img src="/images/icons/behance_off.svg" alt="" />
            <img src="/images/icons/behance_on.svg" alt="" />
          </a>
          <a
            className="icon-soch "
            rel="noreferrer"
            href="https://instagram.com/aquadicsoftware"
            target="_blank"
            aria-label="a.link_social"
          >
            <img src="/images/icons/instagram_off.svg" alt="" />
            <img src="/images/icons/instagram_on.svg" alt="" />
          </a>
          <a
            className="icon-soch "
            rel="noreferrer"
            href="https://twitter.com/AquadicSoftware"
            target="_blank"
            aria-label="a.link_social"
          >
            <img src="/images/icons/twitter_off.svg" alt="" />
            <img src="/images/icons/twitter_on.svg" alt="" />
          </a>
        </div>
        <p>{t("footer.rights_reserved")}</p>
      </Container>
    </div>
  );
}

export default Footer;
