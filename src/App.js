import "./App.css";
import Header from "./Layouts/Header";
import CardHolder from "./Layouts/CardHolder";
import Welcome from "./components/Welcome";
import Carousel from "./Layouts/Carousel";
function App() {
  return (
    <>
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-6">
            <Header />
            <Welcome />
            <CardHolder />
          </div>
          <div className="col-md-6">
            <Carousel />
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
