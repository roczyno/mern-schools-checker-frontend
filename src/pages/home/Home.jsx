import "./home.css";
import UCC from "../../images/ucc.png";
import WINNEBA from "../../images/winneba.png";
import LEGON from "../../images/ug.jpg";
import KNUST from "../../images/knust.jpg";
import Footer from "../../components/footer/Footer";

const Home = () => {
  return (
    <>
      <div className="home">
        <div className="top">
          <span className="logo">SchoolChecker</span>
        </div>
        <div className="center">
          <p className="desc">
            Select a school below to know the kind of programmes you qualify for
            ...
          </p>
          <div className="schools">
            <div className="school">
              <img src={UCC} alt="" />
              <h1 className="name">university of Cape Coast</h1>
            </div>
            <div className="school">
              <img src={WINNEBA} alt="" />
              <h1 className="name">university of Winneba</h1>
            </div>
            <div className="school">
              <img src={LEGON} alt="" />
              <h1 className="name">university of Ghana</h1>
            </div>
            <div className="school">
              <img src={KNUST} alt="" />
              <h1 className="name">
                kwame nkrumah university of science and technology
              </h1>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Home;
