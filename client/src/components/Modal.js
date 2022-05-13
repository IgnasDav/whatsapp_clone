//Components
import Button from "./Button";

function Modal({ children, closeModal, show }) {
  if (!show) {
    return null;
  }
  return (
    <div
      className="w-screen h-screen z-10 absolute bg-black/[.8] flex justify-center items-center "
      onClick={closeModal}
    >
      <div
        className="h-[60vh] w-[60vw] bg-white flex justify-center items-center absolute rounded-md"
        onClick={(e) => {
          e.stopPropagation();
        }}
      >
        {children}
      </div>
    </div>
  );
}
export default Modal;
