function Link({ className, label, onClick }) {
  return (
    <>
      <a className={className} onClick={onClick}>
        {label}
      </a>
    </>
  );
}

export default Link;
