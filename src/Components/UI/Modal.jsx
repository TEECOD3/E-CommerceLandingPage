import React from "react";
import ReactDOM from "react-dom";
import IconClose from "../Icons/iconClose";

const Backdrop = (props) => {
  const { onClick } = props;
  return (
    <div
      onClick={onClick}
      className="bg-black/80 h-full w-full z-10 fixed max-sm:hidden"
    />
  );
};

const Overlaymodal = (props) => {
  const { children, onClick } = props;
  return (
    <div className="max-sm:hidden z-20 absolute top-[24rem] left-1/2 -translate-x-1/2 -translate-y-1/2">
      <IconClose
        onClick={onClick}
        className="absolute right-[12rem] top-[0px] max-sm:right-[0] cursor-pointer"
      />
      {children}
    </div>
  );
};
const portalelement = document.getElementById("overlay");

const Modal = (props) => {
  const { children, onClick } = props;
  return (
    <>
      {ReactDOM.createPortal(<Backdrop onClick={onClick} />, portalelement)}
      {ReactDOM.createPortal(
        <Overlaymodal onClick={onClick}>{children}</Overlaymodal>,
        portalelement
      )}
    </>
  );
};

export default Modal;
