import { useEffect, useRef, useState } from "react";
import { Modal as BsModal } from "bootstrap";

function Modal({ title, isOpen, onClose, children }) {
  const modalEl = useRef(); //{current : <div ...>...</div>}
  const [modal, setModal] = useState(null);

  useEffect(() => {
    const modalObj = new BsModal(modalEl.current);
    setModal(modalObj);
  }, []);

  useEffect(() => {
    if (isOpen) {
      return modal?.show();
    }
    modal?.hide();
  }, [isOpen, modal]);

  return (
    <div className="modal fade" tabIndex="-1" ref={modalEl} onClick={onClose}>
      <div
        className="modal-dialog modal-dialog-centered modal-lg"
        onClick={(e) => e.stopPropagation()} //เมื่อมีการ click ใน child element นี้จะหยุด propagate ที่ element นี้
      >
        <div className="modal-content">
          <div className="modal-header">
            <button className="btn-close invisible"></button>
            <h6 className="modal-title">{title}</h6>
            <button
              type="button"
              className="btn-close"
              onClick={onClose}
            ></button>
          </div>
          <div className="modal-body">{children}</div>
        </div>
      </div>
    </div>
  );
}

export default Modal;
