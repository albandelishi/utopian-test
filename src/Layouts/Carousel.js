import { useState, useEffect } from "react";
import CarouselItem from "../components/CarouselItem";
import Logo from "../components/Logo";
import Button from "../components/Button";
function Carousel() {
  const [activeSlider, setActiveSlider] = useState(1);
  const [isActive, setIsActiveClass] = useState({ idButton: 1, active: true });
  const carouselItems = [
    {
      id: 1,
      header: "Nature",
      body: "Enjoy the spring",
      image:
        "https://images.unsplash.com/photo-1523766775147-152d0d6e2adb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8c3ByaW5nfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
    },
    {
      id: 2,
      header: "Nature",
      body: "Enjoy the summer",
      image:
        "https://images.unsplash.com/photo-1572246538688-3f326dca3951?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80",
    },
    {
      id: 3,
      header: "Nature",
      body: "Enjoy the autumn",
      image:
        "https://images.unsplash.com/photo-1444492417251-9c84a5fa18e0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=435&q=80",
    },
  ];

  //generate random number from 1 to 3
  const randomIntFromInterval = (min, max) => {
    // min and max included
    return Math.floor(Math.random() * (max - min + 1) + min);
  };

  useEffect(() => {
    //slide the image every four seconds
    const interval = setInterval(() => {
      const slideId = randomIntFromInterval(1, 3);
      setActiveSlider(slideId);
    }, 4000);
    return () => clearInterval(interval);
  }, []);
  const onHandleClick = (event) => {
    const idButton = event.target.getAttribute("data-bs-slide-to");
    setIsActiveClass({ idButton: idButton, active: !isActive.active });
    setActiveSlider(idButton);
  };
  return (
    <>
      <div id="myCarousel" className="carousel slide" data-bs-ride="carousel">
        <div className="carousel-indicators">
          <Button
            className={
              isActive.active && +isActive.idButton === 1
                ? "active btnSlide"
                : "btnSlide"
            }
            slideTo={1}
            onClick={onHandleClick}
          />
          <Button
            className={
              isActive.active && +isActive.idButton === 2
                ? "active btnSlide"
                : "btnSlide"
            }
            slideTo={2}
            onClick={onHandleClick}
          />
          <Button
            className={
              isActive.active && +isActive.idButton === 3
                ? "active btnSlide"
                : "btnSlide"
            }
            slideTo={3}
            onClick={onHandleClick}
          />
        </div>
        <div className="carousel-inner">
          {carouselItems.map((item) => {
            return (
              <CarouselItem
                key={item.id}
                activeClass={+activeSlider === item.id ? "active" : ""}
                carouselImage={<Logo source={item.image} />}
                carouselTextOne={item.header}
                CarouselTextTwo={item.body}
              />
            );
          })}
        </div>
      </div>
    </>
  );
}

export default Carousel;
