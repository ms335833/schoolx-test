import { Modal } from "react-responsive-modal";

const Popup = (props) => {
  const { openCloseModal, setOpenCloseModal } = props;
  return (
    <div className="modal_container">
      <div>
        <Modal open={openCloseModal} onClose={() => setOpenCloseModal(false)}>
          {/* first button */}
          <div
            className="modal_button_container flex items-center"
            onClick={() => setOpenCloseModal(false)}
          >
            <div>
              <img src="/Category-icon.svg" />
            </div>
            <div className="modal_title_container">
              <h4>Cambridge International</h4>
            </div>
          </div>
          {/* second */}
          <div
            className="modal_button_container flex items-center"
            onClick={() => setOpenCloseModal(false)}
          >
            <div>
              <img src="/Category-icon.svg" />
            </div>
            <div className="modal_title_container">
              <h4>International Baccalaureate</h4>
            </div>
          </div>
          {/* third */}
          <div
            className="modal_button_container flex items-center"
            onClick={() => setOpenCloseModal(false)}
          >
            <div>
              <img src="/Category-icon.svg" />
            </div>
            <div className="modal_title_container">
              <h4>All Pakistan Education Boards</h4>
            </div>
          </div>
          {/* fourth */}
          <div
            className="modal_button_container flex items-center"
            onClick={() => setOpenCloseModal(false)}
          >
            <div>
              <img src="/Category-icon.svg" />
            </div>
            <div className="modal_title_container">
              <h4>Entry Exams</h4>
            </div>
          </div>
          {/* five */}
          <div
            className="modal_button_container flex items-center"
            onClick={() => setOpenCloseModal(false)}
          >
            <div>
              <img src="/Category-icon.svg" />
            </div>
            <div className="modal_title_container">
              <h4>IT Professional</h4>
            </div>
          </div>
          {/* sixth */}
          <div
            className="modal_button_container flex items-center"
            onClick={() => setOpenCloseModal(false)}
          >
            <div>
              <img src="/Category-icon.svg" />
            </div>
            <div className="modal_title_container">
              <h4>STEM</h4>
            </div>
          </div>
        </Modal>
      </div>
    </div>
  );
};
export default Popup;
