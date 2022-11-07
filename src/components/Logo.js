function Logo({ className, source, alt, width, height }) {
  return (
    <>
      <img
        className={className}
        src={source}
        alt={alt}
        width={width}
        height={height}
      />
    </>
  );
}

export default Logo;
