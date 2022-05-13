function Button({ children, type = "button", className, onClick }) {
  const btnTemplate = "rounded h-10 text-white p-2 ";
  const btnClass = btnTemplate.concat(className);
  return (
    <button type={type} className={btnClass} onClick={onClick}>
      {children}
    </button>
  );
}
export default Button;
