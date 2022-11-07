import Button from "./Button";
import Logo from "./Logo";
import Arrow from "../assets/img/Arrow.svg";
function Welcome() {
  return (
    <>
      <div className="mb-4 rounded-3">
        <div className="container-fluid py-5">
          <p className="text-muted">Hello World</p>
          <h1 className="display-5 fw-bold mb-5">
            We are creative agency. We build digital work that you will love!
          </h1>
          <Button
            className="btn btn-warning btn-lg text-white btn-welcome"
            label="Explore our portfolio"
            icon={<Logo source={Arrow} alt="Arrow" height={20} width={20} />}
          />
        </div>
      </div>
    </>
  );
}

export default Welcome;
