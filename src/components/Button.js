function Button({ className, label, icon, onClick, slideTo }) {
  return (
    <>
      <button
        type="button"
        className={className}
        data-bs-slide-to={slideTo}
        onClick={onClick}
      >
        {label} <span className="ml-2"></span>
        {icon}
      </button>
    </>
  );
}

export default Button;
