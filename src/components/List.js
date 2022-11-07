import Link from "./Link";
function List({ className, text, linkClassName, linkoOnClick, linkLabel }) {
  return (
    <>
      <li className={className}>
        <Link
          className={linkClassName}
          onClick={linkoOnClick}
          label={linkLabel}
        />
        {text}
      </li>
    </>
  );
}

export default List;
