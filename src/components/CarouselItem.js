function CarouselItem({
  activeClass = "",
  carouselImage,
  carouselTextOne,
  CarouselTextTwo,
}) {
  return (
    <>
      <div className={`carousel-item slide-left ${activeClass}`}>
        {carouselImage}
        <div className="container">
          <div className="carousel-caption ">
            <h6 className="text-muted">{carouselTextOne}</h6>
            <h5>{CarouselTextTwo}</h5>
          </div>
        </div>
      </div>
    </>
  );
}

export default CarouselItem;
