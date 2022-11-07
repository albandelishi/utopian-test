import Card from "../components/Card";
import Logo from "../components/Logo";
import WebLogo from "../assets/img/Web-design-icon.svg";
import PlaningIcon from "../assets/img/Planning-icon.svg";
import WebIcon from "../assets/img/Web-icon.svg";
import Button from "../components/Button";

function CardHolder() {
  return (
    <>
      <div className="row left-line">
        <div className="col-md-4">
          <Card
            icon={
              <Logo
                className="mt-3 mb-3"
                source={WebLogo}
                alt="Web Logo"
                height={44.5}
                widt={44.5}
              />
            }
            cardTitle="Web Design"
            cardText="Lorem Ipsum is simply dummy text of the printing and typesetting industry."
            className="card-border card-border-top-red"
            cardButton={<Button className="btn arrow arrow-red" />}
          />
        </div>
        <div className="col-md-4 blue-column">
          <Card
            icon={
              <Logo
                className="mt-1 mb-1"
                source={PlaningIcon}
                alt="Web Logo"
                height={44.5}
                widt={44.5}
              />
            }
            cardTitle="Web Design"
            cardText="Lorem Ipsum is simply dummy text of the printing and typesetting industry."
            className="card-border card-border-top-blue"
            cardButton={<Button className="btn arrow arrow-blue" />}
          />
        </div>
        <div className="col-md-4">
          <Card
            icon={
              <Logo
                className="mt-3 mb-3"
                source={WebIcon}
                alt="Web Logo"
                height={44.5}
                widt={44.5}
              />
            }
            cardTitle="Web Design"
            cardText="Lorem Ipsum is simply dummy text of the printing and typesetting industry."
            className="card-border card-border-top-green"
            cardButton={<Button className="btn arrow arrow-green" />}
          />
        </div>
      </div>
    </>
  );
}

export default CardHolder;
