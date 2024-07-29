import PropTypes from "prop-types";
import { useEffect } from "react";
import { Modal } from "bootstrap";

const CustomModal = (props) => {
  const { id, title, children, showModal, setShowModal, textCancel, textOk } =
    props;

  useEffect(() => {
    const modalElement = document.getElementById(id);
    if (modalElement) {
      const modal = new Modal(modalElement, {
        keyboard: false,
        backdrop: "static",
      });

      if (showModal) {
        modal.show();
      } else {
        modal.hide();
        setShowModal(false);
      }
    }

    return () => {
      setShowModal(false);
    };
  }, [id, setShowModal, showModal]);

  return (
    <div
      className='modal fade'
      id={id}
      tabIndex='-1'
      aria-labelledby={id}
      aria-hidden='true'
    >
      <div className='modal-dialog'>
        <div className='modal-content'>
          <div className='modal-header'>
            <h5 className='modal-title' id='exampleModalLabel'>
              {title}
            </h5>
            <button
              type='button'
              className='close'
              data-dismiss='modal'
              aria-label='Close'
            >
              <span aria-hidden='true'>&times;</span>
            </button>
          </div>
          <div className='modal-body'>{children}</div>
          <div
            className={`modal-footer${
              !textOk && " d-flex justify-content-center"
            }`}
          >
            <button
              type='button'
              className={textOk ? "btn btn-secondary" : "btn btn-primary"}
              data-dismiss='modal'
            >
              {textCancel}
            </button>
            {textOk && (
              <button type='button' className='btn btn-primary'>
                {textOk}
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

CustomModal.propTypes = {
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
  showModal: PropTypes.bool.isRequired,
  setShowModal: PropTypes.func.isRequired,
  textCancel: PropTypes.string.isRequired,
  textOk: PropTypes.string,
};

export default CustomModal;
