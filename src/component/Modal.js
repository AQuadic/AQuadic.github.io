import React from "react";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";

function Modal(props) {
  // Language.
  const { t, i18n } = useTranslation();

  const { currentProject } = props;
  return (
    <div
      className="modal fade project_modal"
      id="exampleModalLong"
      tabIndex="-1"
      role="dialog"
      aria-labelledby="exampleModalLongTitle"
      aria-hidden="true"
    >
      <div className="modal-dialog modal-dialog-centered" role="document">
        <div className="modal-content">
          <div className="modal-header">
            <button
              type="button"
              className="close"
              data-bs-dismiss="modal"
              aria-label="Close"
            >
              <img
                aria-hidden="true"
                src="/images/icons/model_x.svg"
                alt="close"
              />
            </button>
          </div>

          <div
            className="modal-body"
            style={{ background: currentProject.primary_color + 38 }}
          >
            <div className="modal_img">
              <img
                src={currentProject.main_image}
                alt={currentProject.name[i18n.language]}
              />
              <img
                className="back_img"
                src={currentProject.background_image}
                alt="bk_image"
              />
            </div>

            <div className="modal_title">
              <h2>{currentProject.name[i18n.language]}</h2>
              <p className="dec_modal">{currentProject.description[i18n.language]}</p>

              <div data-bs-dismiss="modal" className="close view">
                <Link to={`/portfolio/${currentProject.id}`} className="view">
                  <p>{t("portfolio.view_details")} </p>
                  <img src="/images/icons/see_all.svg" alt="" />
                </Link>
              </div>

              <div className="modal_app">
                {Object.keys(currentProject.links).map(function (key) {
                  const link = currentProject.links[key];
                  const img = `/images/apps/${key}.svg`;
                  return link ? (
                    <a target={"_blank"} href={link} rel="noreferrer">
                      <img src={img} alt={key} />
                    </a>
                  ) : null;
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Modal;
