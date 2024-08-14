import React from "react";

const Modal = ({ shouldShow, onRequestClose, children, title }) => {
  return (
    shouldShow && (
      <div
        class="relative z-10"
        aria-labelledby="modal-title"
        role="dialog"
        aria-modal="true"
      >
        <div
          class="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity"
          aria-hidden="true"
        ></div>

        <div class="fixed inset-0 z-10 w-screen overflow-y-auto">
          <div class="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
            {children}
          </div>
        </div>
      </div>
    )
  );
};

export default Modal;
