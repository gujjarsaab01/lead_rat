import React, { useState } from "react";

const ConfirmationModal = ({ isopen, onConfirm }) => {
  const [notification, setNotification] = useState(false);
  const handclick = (e) => {
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
    <div class="modal" role="dialog">
      <div class="modal-dialog" role="document">
        <div class="modal-content">
         
          <div class="modal-body">
            <p>Are you sure you want to proceed?</p>
          </div>
          <div class="modal-footer ">
            <button
              type="button"
              class="btn btn-primary letter-spacing"
              onClick={() => {
                handclick(true);
              }}
            >
              Confirm
            </button>
            <button
              type="button"
              class="btn btn-secondary letter-spacing "
              data-dismiss="modal"
              onClick={() => {
                handclick(false);
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
