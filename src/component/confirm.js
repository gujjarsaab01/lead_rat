import React, { useState } from "react";

const ConfirmationModal = ({ isopen, onConfirm }) => {
  const [notification, setNotification] = useState(false);
  const handleClick = (e) => {
    // console.log(e);
    onConfirm(e);
    if (!e) {
      isopen(false);
    } else {
      setNotification(true);
    }
  };
  if (notification)
    return (
      
        <div id="notification">
          <p id="text">Your seat is booked!</p>
          <button className="letter-spacing" id="btn1" onClick={() => isopen(false)}>
            OK
          </button>
        </div>
      
    );
  return (
    <div className="modal" role="dialog">
      <div className="modal-dialog" role="document">
        <div className="modal-content">
         
          <div className="modal-body">
            <p>Are you sure you want to proceed?</p>
          </div>
          <div className="modal-footer ">
            <button
              type="button"
              className="btn btn-primary letter-spacing"
              onClick={() => {
                handleClick(true);
              }}
            >
              Confirm
            </button>
            <button
              type="button"
              className="btn btn-secondary letter-spacing "
              data-dismiss="modal"
              onClick={() => {
                handleClick(false);
              }}
            >
              Cancel
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ConfirmationModal;
